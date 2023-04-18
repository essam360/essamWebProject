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
		welcome_user: "Bem-vindo, ",
		about: "Acerca de",
		all: "Tudo",
		help: "Ajuda",
		user_session: "Sessão de utilizador",
		user_session_for: "Sessão de utilizador para ${0}",
		user_session_for_with_container: "Sessão de utilizador para ${0} (${1})",
		tools: "Ferramentas",
		login: "Iniciar sessão",
		logout: "Terminar sessão",
		search: "Procurar",
		saved_searches: "Procuras guardadas",
		content_analytics: "Analisar conteúdo",
		reset: "Repor",
		reset_hover: "Quaisquer dados não guardados em todos os separadores serão repostos nos últimos valores guardados.",
		reset_default: "Limpar tudo",
		reset_default_hover: "Limpa o campo Etiqueta actual em todos os separadores.",
		locale: "Região:",
		up: "Para cima",
		down: "Para baixo",
		restore: "Restaurar",
		maximize: "Maximizar",
		values_label: "Valores",
		value_label: "Valor:",
		path_label: "Caminho:",
		new_label: "Novo:",
		back_label: "Voltar",
		clear: "Limpar",
		set: "Definir...",
		browse: "Pesquisar",
		work: "Trabalhar",
		connect: "Ligar",
		documents: "Documentos:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM e o logótipo IBM são marcas comerciais da IBM Corporation, registadas em várias jurisdições em todo o mundo. Java e todas as marcas comerciais baseadas em Java e logótipos são marcas comerciais ou marcas comerciais registadas da Oracle e/ou empresas afiliadas. A Oracle Outside In Technology incluída está sujeita a uma licença de utilização restrita e só pode ser utilizada em conjunto com esta aplicação. Este Programa está licenciado ao abrigo dos termos do acordo de licença fornecido com o Programa.  Este acordo de licença pode estar localizado na pasta do directório do Programa ou numa biblioteca identificada como \"License\" ou \"Non_IBM_License\", se aplicável ou ser fornecido como um acordo de licença impresso. Leia este acordo atentamente antes de utilizar o Programa. Ao utilizar o Programa, aceita os termos indicados. ",
		edit: "Editar",
		cancel: "Cancelar",
		close: "Fechar",
		close_all: "Fechar todos os separadores",
		close_others: "Fechar outros separadores",
		ok: "OK",
		yes: "Sim",
		no: "Não",
		open: "Abrir",
		refresh: "Actualizar",
		refresh_cabinets: "Actualizar todos os arquivos",
		delete_text: "Eliminar",
		export_config: "Exportar configuração",
		description: "Descrição",
		true_label: "Verdadeiro",
		false_label: "Falso",
		error: "Erro",
		error_reference_hover: "Procure em www.ibm.com para obter mais informações sobre este erro.",
		url_label: "URL",
		default_label: "Predefinição",
		ibm_label: "IBM",
		light_label: "Claro",
		dark_label: "Escuro",
		save: "Guardar",
		saveAs: "Guardar como...",
		save_and_close: "Guardar e fechar",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Nenhum",
		Name: "Nome",
		"${NAME}": "Nome",
		mime_type: "Tipo MIME",
		mime_type_contains_label: "Tipo MIME contém",
		mime_type_header: "Tipo MIME",
		mime_type_icon: "Ícone de tipo MIME",
		casesearch: "Caso",
		item: "Item",
		no_mime_type: "Este item não inclui conteúdo.",
		items_selected: "${0} itens seleccionados.",
		requestor: "Pedido por",
		scheduledStartTime: "Hora de início agendada",
		isRecurring: "É periódico",
		weeks: "Semanas",
		days: "Dias",
		hours: "Horas",
		endTime: "Hora de fim",
		username: "Nome do utilizador",
		password: "Palavra-passe",
		serverURL: "URL do servidor",
		enable: "Activar",
		disable: "Desactivar",
		finish: "Terminar",
		previous: "Anterior",
		next: "Seguinte",
		schedule: "Agendar",
		removeFromThisList: "Remover desta lista",
		status: "Estado",
		scheduledEndTime: "Hora de fim do agendamento",
		type: "Tipo",
		mode: "Modo",
		startTime: "Hora de início",
		createdBy: "Criado por",
		nextScheduledTime: "Hora de agendamento seguinte",
		id: "ID",
		duration: "Duração",
		repeatCycle: "Frequência",
		taskTypeName: "Tipo de tarefa",
		to: "para",
		filter: "Filtro:",
		error_message: "Mensagem de erro",

        file_type: "Tipo de documento",
        word_template_name: "Nome do modelo Word",
        excel_template_name: "Nome do modelo Excel",
        powerpoint_template_name: "Nome do modelo PowerPoint",
        template_description: "Descrição do modelo",
        action_add_template: "Adicionar",
        action_change_template: "Editar",      
        action_edit_template_properties: "Propriedades",
        add_presentation_template: "Adicionar modelo de apresentação",
    	add_spreadsheet_template: "Adicionar modelo de folha de cálculo",
    	add_doc_template: "Adicionar modelo de documento",    	
    	file_type_doc_hover: "É necessário especificar um ficheiro de modelo de processamento de texto válido.<br><br>Tipos MIME válidos: ${0}",
    	file_type_doc_error: "É necessário especificar um ficheiro de modelo de processamento de texto válido.<br><br>O tipo de mime de documento seleccionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	file_type_presentation_hover: "É necessário especificar um ficheiro de modelo de apresentação válido.<br><br>Tipos MIME válidos: ${0}",
    	file_type_presentation_error: "É necessário especificar um ficheiro de modelo de apresentação válido.<br><br>O tipo de mime de documento seleccionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	file_type_spreadsheet_hover: "É necessário especificar um ficheiro de modelo de folha de cálculo válido.<br><br>Tipos MIME válidos: ${0}",
    	file_type_spreadsheet_error: "É necessário especificar um ficheiro de modelo de folha de cálculo válido.<br><br>O tipo de mime de documento seleccionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	office_online_only_one_template_error: "Pode seleccionar apenas um ficheiro.",
    	change_presentation_template: "Editar modelo de apresentação",
    	change_spreadsheet_template: "Editar modelo de folha de cálculo",
    	change_doc_template: "Editar modelo de documento",
    	change_button: "Editar",
	    new_document_dialog_doc_title: "Novo documento",
	    new_document_dialog_presentation_title: "Nova apresentação",
	    new_document_dialog_spreadsheet_title: "Nova folha de cálculo",
	    new_document_dialog_title_label: "Título:",
	    new_document_dialog_title_hover: "Introduza um título para este documento.",
	    new_document_dialog_title_missing_message: "É necessário especificar um título.",
	    office_online_save_before_adding_templates_title: "Guardar alterações no repositório",
	    office_online_save_before_adding_templates_error: "Não é possível adicionar modelos do Office até guardar as alterações efectuadas no repositório. Faça clique em <b>Guardar e fechar</b> e volte a abrir o repositório para adicionar os modelos do Office.",
	    copy_to_OOS_dialog_doc_title: "Novo documento",
	    office_online_checkin_cancelcheckout_message: "Este documento está a ser editado no Microsoft Office Online. Não é possível dar entrada do documento ou cancelar a saída enquanto o mesmo estiver aberto no Microsoft Office Online.",
	    new_document_classification: "Classificação:",
	    new_document_classification_help: "Repõe a classe, propriedades e a pasta ascendente, caso exista, do documento de origem. Quando adicionar um documento através da utilização de um modelo de entrada, o modelo de entrada do documento de origem será seleccionado automaticamente, caso exista. As propriedades do documento de origem são utilizadas como os valores predefinidos, mas a pasta e classe especificadas no modelo de entrada são preservadas.",
		new_document_classification_use_source_document: "Utilizar o documento de origem:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Ícone de tipo ${0}",
		repository_name_and_type: "Nome e tipo de ${0}",
		select_class_label: "Seleccione ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Vista de detalhes",
		detail_view_button: "Detalhes",
		magazine_view_button_tooltip: "Vista de publicação",
		magazine_view_button: "Publicação",
		filmstrip_view_button_tooltip: "Vista de película de filme",
		filmstrip_view_button: "Película de filme",

		magazine_view_show: "Mostrar na vista de revista",
		detail_view_show: "Mostrar na vista de detalhes",

		total_count_item: "item",
		total_count_items: "itens",
		total_count_more_items: "Mais de ${0} itens",

		extension_changed: "A extensão do ficheiro que seleccionou não corresponde à do original.  Seleccione um ficheiro diferente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "O visualizador seleccionado não suporta todos os tipos de ficheiro. Se guardar este mapeamento de visualizadores, poderá detectar problemas ao visualizar documentos. É recomendado seleccionar um visualizador com suporte de todos os tipos de ficheiros quando a opção Todos os tipos de ficheiros está seleccionada.<br><br><b>Sugestão:</b> Os visualizadores seguintes suportam todos os tipos de ficheiro:<ul><li>Visualizador de applet</li><li>Visualizador AJAX</li><li>Conversão HTML</li><li>Conversão PDF</li><li>Navegador da Web</li></ul>",
		file_type_any: "Todos os tipos de ficheiros",
		file_type_any_hover: "Seleccione esta opção se pretender utilizar o visualizador seleccionado para visualizar todos os documentos, independentemente do tipo de ficheiro. Esta opção é suportada para os visualizadores seguintes:<br><br><ul><li>Visualizador de applet</li><li>Visualizador AJAX</li><li>Conversão HTML</li><li>Conversão PDF</li><li>Navegador da Web</li></ul><br><br><b>Tenha em atenção:</b> Se pretender utilizar predominantemente visualizadores específicos, quaisquer mapeamentos criados com esta opção deverão ser movidos para o fim do mapa de visualizador. ",
		file_type_input: "Novo tipo de ficheiro:",

		mime_type_input: "Novo tipo MIME:",
		mime_type_input_invalid: "O novo tipo MIME não pode incluir nenhum dos caracteres seguintes: ,",
		mime_type_available: "Tipos MIME disponíveis",
		mime_type_selected: "Tipos MIME seleccionados",
		file_type_input: "Novo tipo de ficheiro:",
		file_type_input_invalid: "O novo tipo de ficheiro não pode incluir nenhum dos caracteres seguintes: ,",
		file_type_available: "Tipos de ficheiros disponíveis",
		file_type_selected: "Tipos de ficheiros seleccionados",
		file_type_header: "Tipo de ficheiro",
		viewer: "Visualizador:",
		viewer_viewer: "Visualizador",
		viewer_view: "Ver",
		viewer_preview: "Pré-visualizar",
		viewer_merge_and_split: "Intercalar e Dividir",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Apenas pré-visualização",
		preview_only_label: "(pré-visualização)",
		preview_only_hover: "Este mapeamento de visualizadores será utilizado apenas quando um utilizador fizer clique em <b>Pré-visualizar</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Este repositório não é compatível com navegação. Seleccione outro repositório.",

		repository_community_teamspace_message: "Já está designado outro tipo de repositório como o repositório de biblioteca da comunidade. Se pretender continuar a utilizar o repositório existente como o repositório de biblioteca da comunidade, seleccione <b>Não</b> antes de guardar as suas alterações para impedir que o repositório existente seja substituído com este repositório.",

		favorites_empty: "Ainda não tem favoritos.",
		syncItems_empty: "Ainda não tem ficheiros sincronizados.",

		root_folder_id: "ID da pasta raiz",
		unified_searches: "Procuras entre repositórios:",
		max_results: "Número de resultados:",
		direct_retrieve_enabled: "Obtenção directa:",
		itemTypesToDisplay: "Tipos de itens a apresentar:",
		allItemTypes: "Todos os tipos de itens",
		include_attr_group_name: "Descrições de grupo de atributos nos nomes de apresentação de atributos:",
		admin_repcfg_include_attr_group_name_hover: "Por predefinição, a descrição do grupo de atributos é incluída nos nomes para atributos de grupos de atributos. Desta forma, os utilizadores podem ver a que grupo de atributos um atributo de grupo de atributos pertence ao trabalhar com atributos.<br>Por exemplo, os utilizadores podem ver o nome seguinte para um atributo de grupo de atributos: Document Settings.Document Type.<br><br>Se desactivar esta opção, é utilizada apenas a descrição de atributo para o nome de atributo do grupo de atributos.<br>Por exemplo, será apresentado nome seguinte aos utilizadores: Tipo de documento.<br><br>Sem a descrição de grupo de atributos, os utilizadores poderão não identificar se Tipo de documento é o atributo simples ou um atributo de grupo de atributos.",
		documentItemTypesOnly: "Apenas tipos de itens de modelo de documentos",
		object_store: "Nome simbólico do armazenamento de objectos:",
		object_store_display_name: "Nome de apresentação do armazenamento de objectos:",
		teamspaceUpgradeMsg: "Os espaços de equipa serão actualizados quando guardar a configuração do repositório. Se tiver vários espaços de equipa, a actualização poderá demorar alguns minutos.",
		synchUpgradeMsg: "O módulo de sincronização neste repositório será actualizado quando guardar a configuração do repositório.",
		protocol: "Protocolo:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID do repositório CMIS:",
		cmis_url: "URL do documento de serviço de associação AtomPub de CMIS:",
		trace_level: "Nível de rastreio",
		trace_dir: "Directório de rastreio",
		temp_dir: "Directório temporário",
		show_document_location: "Mostrar localização do documento",
		max_folders: "Pastas máximas",
		afp_conversion: "Conversão AFP",
		line_conversion: "Conversão de dados de linha",
		max_hits: "Ocorrências máximas",
		folder_search_expresssion: "Expressão de procura de pastas",
		max_item_types: "Tipos de item máximos",
		max_worklists: "Listas de trabalho máximas",
		update_storage_collection: "Actualizar conjunto de armazenamento",
		include_mime_types_in_search_results: "Incluir tipos MIME nos resultados da procura",
		object_type: "Tipo de objecto",
		object_type_document: "Documentos",
		object_type_folder: "Pastas",
		file_label: "Ficheiro:",
		plugin_jarfile_path_label: "Caminho de ficheiro JAR:",
		plugin_classfolder_path_label: "Caminho do ficheiro de classe:",
		plugin_classname_label: "Nome de classe:",
		plugin_id_label: "ID do suplemento:",
		class_label: "Classe",
		configuration: "Configuração",
		connect_repository: "Ligar...",
		server_type: "Tipo de servidor",
		timeout_in_seconds: "Tempo limite (em segundos):",
		default_search_template: "Procura predefinida",
		search_filtered_properties: "Propriedades passíveis de procura",
		property_contains_label: "A propriedade contém",
		class_contains_label: "A classe contém",
		search_filtered_operators: "Operadores de procura",
		default_search_results: "Resultados da procura",
		data_type: "Tipo de dados",
		status_bar: "Barra de estado",
		operators_for: "Operadores para:",
		currentUser: "Utilizador actual",
		nameContains: "O nome contém",
		searchFor: "Procurar",
		server_autentication: "Autenticação do servidor (OAuth 2.0 com JWT)",
		standard_authentication: "Autenticação padrão (3-legged OAuth2.0)",
		developer_authentication: "Autenticação de programador",
		enterprise_id: "ID empresarial:",
		public_key_id: "ID de chave pública:",
		private_key_path: "Caminho do ficheiro de classe privado:",
		server_user_email: "Endereço de correio electrónico do utilizador do servidor",

		filter_builder_tooltip: "Definir filtro",

		// Launch bar
		launchbar_home: "Abrir página inicial",
		launchbar_favorites: "Abrir favoritos",
		launchbar_browse: "Abrir vista de navegação",
		launchbar_browse_popup: "Abrir lista emergente de navegação",
		launchbar_search: "Abrir vista de procura",
		launchbar_search_popup: "Abrir lista emergente de procura",
		launchbar_teamspaces: "Abrir vista de espaços de equipa",
		launchbar_teamspaces_popup: "Abrir lista emergente de espaços de equipa",
		launchbar_work: "Abrir vista de trabalho",
		launchbar_work_popup: "Abrir lista emergente de vista de trabalho",
		launchbar_entry_templates: "Abrir visualização de modelos de entrada",
		launchbar_entry_templates_popup: "Abrir lista emergente de modelos de entrada",
		launchbar_admin: "Abrir vista de administração",

		admin_sync_server: "Serviços de sincronização",
		admin_settings: "Definições",
		admin_interface_text: "Etiquetas",
		admin_interface_text_desktop: "Ambiente de trabalho:",
		admin_desktops: "Ambientes de trabalho",
		admin_repositories: "Repositórios",
		admin_mobile: "Móvel",
		admin_menus: "Menus",
		admin_reason_codes: "Motivos da redacção",
		admin_plugins: "Suplementos",
		admin_plugins_state_enabled: "Suplemento activado",
		admin_plugins_state_disabled: "Suplemento desactivado",
		admin_plugins_version: "Versão:",
		admin_plugins_version_heading: "Versão",
		admin_plugins_icon: "Ícone de suplemento",
		admin_viewer_mapping_icon: "Ícone de mapeamento do visualizador",
		admin_viewer_defs: "Mapas de visualizador",
		admin_viewer_dialog_title: "Mapeamento",
		admin_viewer_dialog_new_title: "Novo mapeamento",
		admin_viewer_dialog_instructions: "Um mapeamento especifica qual o visualizador a utilizar para os ficheiros num repositório. Pode criar vários mapeamentos para especificar visualizadores diferentes para tipos de ficheiros diferentes. Pode utilizar um tipo MIME ou uma extensão de ficheiro para definir um mapeamento. Os mapeamentos com extensões de ficheiro serão mapeados a nomes de documentos. Por exemplo, um mapeamento com o tipo de ficheiro definido como gif será mapeado a nomes de documentos terminados com a extensão .gif",
		admin_desktop_viewer_defs: "Mapa de visualizador:",
		admin_desktop_viewer_defs_hover: "O mapa de visualizador especifica qual o visualizador utilizado para abrir diferentes tipos de documentos no repositório.<br><br>Pode criar novos mapas de visualizadores na secção <b>Mapas de visualizador</b> da ferramenta de administração.",
		admin_desktops_used: "Utilizado em ambientes de trabalho",
		admin_desktop_additional_settings: "Definições adicionais:",
		admin_default_desktop: "Definir como ambiente de trabalho predefinido",
		admin_default_desktop_header: "Ambiente de trabalho predefinido",
		admin_layout_tab_title: "Esquema",
		admin_desktop_icon: "Ícone de Ambiente de Trabalho",

		// Themes
		admin_themes: "Temas",
		admin_theme_list_instructions: "Pode criar um tema para facilitar a personalização do cliente da Web para a sua organização. Pode criar vários temas se necessitar de utilizar cores diferentes, tipos de letra ou logótipos para ambientes de trabalho diferentes no seu ambiente.<br><br>Depois de criar um tema, pode aplicá-lo a um ambiente de trabalho configurando o tema no separador <b>Aspecto</b> do ambiente de trabalho.",
		admin_theme_instructions: "Crie um tema para controlar as cores e os tipos de letra apresentados no cliente da Web. Adicionalmente, pode utilizar o tema para alterar o logótipo, nome da aplicação e texto de direitos de autor apresentados na página de início de sessão e na faixa.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Novo tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Pretende eliminar os temas seleccionados?\n${0} temas estão seleccionados.",
		admin_theme_color: "Cor",
		admin_theme_text: "Texto",
		admin_theme_solid: "Sólido",
		admin_theme_gradient: "Gradação",
		admin_theme_box: "Box",
		admin_theme_color_label: "Cor ${0}:",
		admin_theme_name_invalid: "O nome do tema não pode conter nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "O ID do tema tem de ser exclusivo e não pode alterar o ID após guardar o tema.<br><br>O ID só pode conter caracteres alfanuméricos.",
		admin_theme_name_hover: "O nome não pode conter os seguintes caracteres: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automático",
		admin_theme_logo_url_hover: "Introduza o URL do ficheiro de logótipo. Se o logótipo estiver no mesmo servidor de aplicação da Web que o cliente da Web, introduza um URL relativo, por exemplo: /mycustomizations/banner_logo.png<br><br>É recomendado o logótipo ter um fundo transparente.",
		admin_theme_color_palette_title_heading: "Paleta de cores",
		admin_theme_color_palette_help_text: "Crie a paleta da cores para o seu tema, utilizando o valor hexadecimal ou o selector de cores. Pode adicionar todas as cores pretendidas.",
		admin_theme_color_add_button_label: "Adicionar cor",
		admin_theme_color_remove_button_label: "Remover cor",
		admin_theme_global_title_heading: "Elementos da aplicação",
		admin_theme_global_font: "Família de tipos de letra:",
		admin_theme_global_font_hover: "Seleccione o tipo de letra a utilizar no cliente da Web. Os tipos de letra são indicados por ordem de precedência; o tipo de letra seguinte na lista é utilizado apenas se o tipo de letra anterior não estiver instalado na máquina cliente.",
		admin_theme_global_framework_color_label: "Cor de contexto:",
		admin_theme_global_framework_color_hover: "Seleccione a cor a utilizar nos elementos seguintes:<ul><li>Barras de título em caixas de diálogo</li><li>A cor de destaque no topo do separador seleccionado</li><li>Os ícones de visualização da lista de conteúdo (vista de detalhes, vista de publicação, vista de película de filme)</li></ul><br>Esta cor não é utilizada nos separadores entre as secções do cliente da Web. Se pretender alterar a cor dos separadores, é necessário criar um suplemento para fornecer um ficheiro CSS personalizado.",
		admin_theme_color_global_toolbar: "Cor da barra de ferramentas global:",
		admin_theme_color_global_toolbar_hover: "Se pretender incluir a barra de ferramentas global no cliente da Web, seleccione a cor da barra de ferramentas.<br><br><b>Sugestão:</b> A barra de ferramentas é apresentada na faixa no topo do cliente da Web, pelo que a cor da barra de ferramentas deve complementar a cor da faixa.",
		admin_theme_global_selected_color: "Cor do item seleccionado:",
		admin_theme_global_selected_color_hover: "Seleccione a cor a utilizar quando os itens estão seleccionados na árvore de navegação, na árvore de procura e na lista de conteúdos.<br><br>A cor de sobreposição (a cor utilizada quando um utilizador passa com o curso sobre um item) é derivada desta cor.",
		admin_theme_global_link_color: "Cor da ligação:",
		admin_theme_global_link_color_hover: "Seleccione a cor a utilizar para todos os URLs que podem ser seleccionados no cliente da Web. Por exemplo, esta cor é utilizada nas ligações Obter mais informações apresentadas em todo o cliente da Web.",
		admin_theme_login_title_heading: "Elementos da página de início de sessão",
		admin_theme_page_background_label: "Cor de fundo da página de início de sessão:",
		admin_theme_login_page_background_hover: "Seleccione a cor a apresentar por trás do painel de início de sessão.",
		admin_theme_login_pane_background_label: "Cor de fundo do painel de início de sessão:",
		admin_theme_login_pane_background_hover: "Seleccione uma cor para apresentar para o painel de início de sessão. Esta cor deve complementar a cor de fundo da página de início de sessão.",
		admin_theme_text_color: "Cor de texto:",
		admin_theme_login_pane_text_color_hover: "Seleccione uma cor para utilizar para o texto do painel de início de sessão. Esta cor é utilizada para o texto de boas vindas e etiquetas de campos. Esta cor deve ser legível na cor de fundo do painel de início de sessão.",
		admin_theme_copyright_text: "Texto de copyright:",
		admin_theme_copyright_text_hover: "Especifique se o texto de direitos de autor deve ser apresentado na página de início de sessão.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Sem texto de copyright",
		admin_theme_banner_title_heading: "Elementos da faixa",
		admin_theme_text_icons_color: "Cor do texto e do ícone:",
		admin_theme_icon_color_label: "Cor do ícone:",
		admin_theme_shadow_label: "Sombra:",
		admin_theme_banner_text_icons_hover: "Seleccione uma cor para utilizar para o texto e ícones na faixa. Esta cor deve ser legível na cor de fundo da faixa.",
		admin_theme_banner_product_name_label: "Nome do produto:",
		admin_theme_banner_product_name_hover: "Ao criar um ambiente de trabalho, pode especificar um nome personalizado para apresentar para a aplicação. Se não especificar um nome personalizado, o IBM Content Navigator é utilizado como nome de produto. Especifique se pretende utilizar o nome da aplicação definido no ambiente de trabalho ou uma imagem em substituição do nome.",
		admin_theme_banner_product_name_desktop_defined_label: "Utilizar nome do ambiente de trabalho",
		admin_theme_banner_product_name_image: "Utilizar logótipo personalizado (URL)",
		admin_theme_background_color_label: "Cor de fundo:",
		admin_theme_style_label: "Estilo:",
		admin_theme_banner_color_hover: "Seleccione uma cor para utilizar para a faixa no topo da aplicação.<br><br><b>Sugestão:</b> Certifique-se de que a cor do texto na faixa é legível contra a cor de fundo da faixa.",
		admin_theme_buttons_title_heading: "Botões",
		admin_theme_navigation_title_heading: "Elementos de navegação",
		admin_theme_navigation_icon_selected_label: "Cor do ícone seleccionado:",
		admin_theme_navigation_background_hover: "Seleccione uma cor para utilizar como fundo da barra de navegação da função.",
		admin_theme_navigation_icon_color_hover: "Seleccione uma cor para utilizar nos ícones da barra de navegação da função. Quando utilizar o esquema predefinido num ambiente de trabalho, esta cor deve contrastar com fundo do menu pendente da funcionalidade. Quando utilizar o esquema clássico num ambiente de trabalho, esta cor deve contrastar com o fundo da barra de navegação da funcionalidade.",
		admin_theme_navigation_icon_selected_hover: "Seleccione uma cor para utilizar na função seleccionada na barra de navegação da função. A cor deve complementar a cor dos ícones e a cor de fundo da barra de navegação da função.<br><br>Quando utilizar o esquema clássico num ambiente de trabalho, esta cor é utilizada como a cor de sobreposição na barra de navegação da funcionalidade.",
		admin_theme_button_background_color_hover: "Seleccione uma cor para utilizar como fundo dos botões.",
		admin_theme_button_style_hover: "Seleccione um estilo de botão.",
		admin_theme_button_text_icon_color_hover: "Seleccione uma cor para utilizar para texto e imagens nos botões.",
		admin_theme_no_logo_label: "Sem logótipo",
		admin_theme_custom_logo_label: "Logótipo personalizado (URL)",
		admin_theme_banner_type: "Estilo de preenchimento da faixa:",
		admin_theme_banner_type_hover: "Especifique se a faixa deve ter uma cor sólida ou gradação de cor. Se especificar uma faixa com gradação, a cor que especificar para a cor da faixa é a cor mais escura na faixa.<br><br><b>Sugestão:</b> Certifique-se de que a cor do texto na faixa é legível contra a cor de fundo da faixa.",
		admin_theme_icon: "Ícone de tema",
		admin_theme_buttons_and_links_title_heading: "Botões, campos e ligações",
		admin_theme_button_style_label: "Estilo do botão:",
		admin_theme_theme_style_label: "Estilo do tema:",
		admin_theme_theme_style_hover: "Seleccione o estilo base para o tema. Pode alterar o estilo em qualquer altura quando criar ou editar um tema. Quando muda de um estilo para outro, as definições do tema são repostas nos valores predefinidos.",
		admin_theme_accent_color_label: "Cor de acento:",
		admin_theme_accent_color_hover: "Seleccione a cor a utilizar para a barra no topo da caixa de diálogo e para o controlo giratório de carregamento.",
		admin_theme_global_toolbar_text_color_label: "Cor do texto da barra de ferramentas global:",
		admin_theme_global_toolbar_text_color_hover: "Se incluir a barra de ferramentas global no cliente da Web, seleccione a cor a utilizar para o texto da barra de ferramentas.",
		admin_theme_banner_text_color_hover: "Seleccione a cor a utilizar para o texto na faixa.",
		admin_theme_banner_icon_color_hover: "Seleccione a cor a utilizar para os ícones na faixa.",
		admin_theme_button_color_label: "Cor:",
		admin_theme_button_color_hover: "Seleccione a cor a utilizar nos elementos seguintes:<ul><li>Barras de título em caixas de diálogo</li><li>A cor de destaque no topo do separador seleccionado</li><li>Os ícones de visualização da lista de conteúdo (vista de detalhes, vista de publicação, vista de película de filme)</li><li>Botões, campos e ligações</li></ul>A cor utilizada quando um utilizador passa o cursor sobre um botão é derivada desta cor. Esta cor não é utilizada nos separadores entre as secções do cliente da Web. Se pretender alterar a cor dos separadores, é necessário criar um suplemento para fornecer um ficheiro CSS personalizado.",
		admin_theme_theme_style_col_header: "Estilo do tema",

		admin_syncserver_consistency_checker: "Verificação de consistência:",
		admin_syncserver_consistency_checker_hover: "Execute a verificação de consistência para garantir que as bases de dados de serviço de sincronização têm informações actuais sobre o estado de cada item no servidor. Por exemplo, execute a verificação de consistência depois de uma interrupção no funcionamento da base de dados dos serviços de sincronização para obter informações sobre documentos que foram actualizados no repositório durante a interrupção.",
		admin_syncserver_consistency_checker_button: "Executar verificação de consistência",
		admin_syncserver_consistency_checker_started: "Iniciada:",
		admin_syncserver_consistency_checker_ended: "Terminada:",
		admin_syncserver_consistency_checker_duration: "Duração:",
		admin_syncserver_consistency_checker_items_processed: "Itens sincronizados processados:",
		admin_syncserver_consistency_checker_items_processed_success: "Itens sincronizados processados com êxito:",
		admin_syncserver_consistency_checker_items_discovered: "Novos itens de repositório descobertos:",
		admin_syncserver_consistency_checker_change_updates: "Total de actualizações:",
		admin_syncserver_consistency_checker_state: "Estado:",
		admin_syncserver_consistency_checker_state_done: "Concluído",
		admin_syncserver_consistency_checker_state_running: "Em execução",
		admin_syncserver_consistency_checker_user: "Submetido por:",
		admin_syncserver_consistency_checker_scheduled: "Agendado:",

		admin_syncserver_dbcleanup: "Limpeza da base de dados",
		admin_syncserver_dbcleanup_hover: "Execute a ferramenta de limpeza da base de dados para remover dispositivos não utilizados e itens que já não são sincronizados na base de dados.",
		admin_syncserver_dbcleanup_button: "Limpeza da base de dados",
		admin_syncserver_dbcleanup_state_done: "Concluído",
		admin_syncserver_dbcleanup_state_running: "Em execução",
		admin_syncserver_dbcleanup_started: "Iniciada:",
		admin_syncserver_dbcleanup_ended: "Terminada:",
		admin_syncserver_dbcleanup_state: "Estado:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Repositórios eliminados:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Item sincronizado eliminado:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Dispositivos eliminados:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Dispositivos expirados:",

		admin_syncserver_publicSyncUrl: "URL público dos serviços de sincronização:",
		admin_syncserver_publicSyncUrl_hover: "Especifique o URL através do qual os repositórios podem comunicar com os serviços de sincronização do IBM Content Navigator. O formato predefinido do URL é http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Definições de sincronização do cliente:",
		admin_syncserver_managed_hover: "Os utilizadores não podem alterar estas definições no cliente do IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Níveis de pastas a sincronizar",
		admin_syncserver_managed_subfolder_hover: "Se um utilizador sincronizar uma pasta, especifique o número máximo pastas que serão automaticamente sincronizadas. Por exemplo, se um utilizador especificar 3 níveis de pastas, são sincronizadas a pasta que o utilizador sincronizar e os 2 níveis de subpastas.<br><br>Assegure-se de que o ambiente é dimensionado para suportar o volume de tráfego de sincronização criado por esta definição.",
		admin_syncserver_managed_subfolder_all: "Todas as subpastas",
		admin_syncserver_managed_subfolder_none: "Sem subpastas",
		admin_syncserver_managed_subfolder_no_more: "Níveis limitados",
		admin_syncserver_managed_subfolder_levels: "pastas",
		admin_syncserver_managed_schedule: "Agenda de sincronização",
		admin_syncserver_managed_schedule_hover: "Assegure-se de que o ambiente é dimensionado para suportar o volume de tráfego de sincronização criado pela agenda de sincronização.<br><br>O intervalo máximo é de 24 horas ou 1440 minutos.<br><br>Os utilizadores podem substituir a agenda de sincronização fazendo clique em <b>Sincronizar agora</b> no cliente.",
		admin_syncserver_managed_schedule_manual: "Sincronizar manualmente",
		admin_syncserver_managed_schedule_continuous: "Sincronizar continuamente",
		admin_syncserver_managed_schedule_every: "Sincronizar em intervalos específicos",
		admin_syncserver_managed_schedule_minutes: "Minutos",
		admin_syncserver_managed_schedule_hours: "Horas",

		// redaction codes
		admin_new_reason_code: "Novo motivo da redacção",		
		admin_reason_code_name_invalid: "O nome do motivo da redacção não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "A descrição não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "A descrição não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "O nome não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Descrição:",
		admin_reason_code_applications_hover: "A lista de aplicações Datacap que fazem referência a este motivo de redacção.",
		admin_reason_code_applications: "Aplicações Datacap",
		admin_delete_confirmation_reason_codes: "Pretende eliminar os motivos de redacção seleccionados?",
		admin_delete_confirmation_reason_code: "Pretende eliminar o motivo de redacção seleccionado?",
		admin_reason_code_heading: "Motivo da redacção: <b>${0}</b>",
		admin_reason_code_list_instructions: "Os motivos da redacção indicam as razões para proteger os dados sensíveis ocultando os mesmos. Cada motivo identifica um tipo de dados sensível que é oculto dos utilizadores gerais.",
		admin_reason_code_instructions: "Pode criar um motivo de redacção para cada tipo de dados sensíveis. Pode depois utilizar esse motivo numa política de redacção para definir que utilizadores podem ver esses dados e que utilizadores podem criar ou modificar redacções.",
		admin_reason_code_applications_label: "Aplicações Datacap",
		admin_reason_code_repositories: "Repositórios",
		admin_reason_code_repositories_label: "Repositórios",
		admin_reason_code_repositories_hover: "A lista de repositórios ICN que fazem referência a este motivo de redacção.",
		admin_reason_code_repositories_default_value: "Não Definido",
		admin_reason_code_description_label: "Descrição",
		admin_reason_code_applications_default_value: "Não Definido",
		admin_redaction_reasons: "Motivos da redacção",
		admin_redactions: "Redacções baseadas em funções",
		admin_redactions_policies_roles: "Políticas e funções",
		admin_reasons: "Motivos",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Não é possível editar o ID.  Pode ser copiado para a área de transferência",
		// Role based administration
		admin_rba: "Administração de ambiente de trabalho baseada em funções",
		admin_rba_mobile_access_enabled: "Este ambiente de trabalho está activado para acesso móvel.",
		admin_rba_mobile_access_disabled: "Este ambiente de trabalho não está activado para acesso móvel.",
		admin_rba_confirm_delete_multiple: "Pretende eliminar as funções de administração seleccionadas?",
		admin_rba_confirm_delete_single: "Pretende eliminar a função de administração seleccionada?",
		admin_rba_delete_multi_role_desktop: "Uma ou mais das funções que seleccionou está atribuída a um ambiente de trabalho. Tem que remover as funções dos ambientes de trabalho antes de as poder eliminar.",
		admin_rba_delete_single_role_desktop: "A função que seleccionou está atribuída ao ambiente de trabalho ${0}. Tem que remover a função do ambiente de trabalho antes de a poder eliminar.",
		admin_desktop: "Ambiente de trabalho",
		admin_rba_instructions: "Pode criar e gerir funções de administração de ambiente de trabalho, as quais associam os privilégios concedidos aos administradores do ambiente de trabalho.",
		admin_rba_not_used: "${0} não é utilizada em nenhum ambiente de trabalho.",
		admin_rba_desktops: "<b>${0} é utilizada nos seguintes ambientes de trabalho:</b>",
		admin_rba_new_role: "Nova função",
		admin_rba_name_invalid: "O nome da função de administração não pode conter qualquer um dos seguintes caracteres: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "A descrição não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "A descrição não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "O nome não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Descrição:</b> ${0}",
		admin_rba_membership: "Filiação",
		admin_rba_general_priv: "Geral",
		admin_rba_appearance_priv: "Aspecto",
		admin_rba_desktop_config_priv: "Configuração do ambiente de trabalho",
		admin_rba_app_name_priv: "Nome da aplicação",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Mapas de visualizador",
		admin_rba_merge_split_priv: "Intercalar e Dividir",
		admin_rba_sync_svc_priv: "Serviços de sincronização",
		admin_rba_menus_priv: "Menus",
		admin_rba_edit_svc_priv: "Serviços de edição",
		admin_rba_toolbars_priv: "Barras de ferramentas",
		admin_rba_ctx_menus_priv: "Menus contextuais",
		admin_rba_office_ribbon_priv: "Comandos do friso do MS Office",
		admin_rba_office_menues_priv: "Menus contextuais do MS Office",
		admin_rba_addl_settings_priv: "Definições adicionais",
		admin_rba_mobile_priv: "Móvel",
		admin_rba_add_doc_dlg_priv: "Adicionar diálogo de documento",
		admin_rba_doc_mgmt_priv: "Gestão de documentos",
		admin_rba_def_redaction_priv: "Opção de redacção predefinida",
		admin_rba_add_photos_priv: "Adicionar fotografias a partir da biblioteca de fotografias e da câmara",
		admin_rba_time_stamp_priv: "Marca de hora",
		admin_rba_add_docs_folders_priv: "Adicionar documentos e criar pastas no repositório",
		admin_rba_open_docs_priv: "Abrir documentos noutras aplicações",
		admin_rba_office_config_priv: "Configuração do Office",
		admin_rba_tab_label_priv: "Etiqueta do separador do IBM ECM",
		admin_rba_feature_sel_priv: "Selecção de funcionalidade",
		admin_rba_general_config_priv: "Configuração geral",
		admin_rba_favorites_priv: "Favoritos",
		admin_rba_add_options_priv: "Opções Adicionar no grupo Editar",
		admin_rba_browse_priv: "Pesquisar",
		admin_rba_outlook_int_priv: "Integração com o Outlook",
		admin_rba_search_priv: "Procurar",
		admin_rba_layout_priv: "Esquema",
		admin_rba_case_priv: "Caso",
		admin_rba_desktop_feat_priv: "Funções do ambiente de trabalho",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Funcionalidades apresentadas",
		admin_rba_branding_priv: "Personalização",
		admin_rba_home_priv: "Início",
		admin_rba_main_color_priv: "Cor principal",
		admin_rba_sec_color_priv: "Cor secundária",
		admin_rba_teamspaces_priv: "Espaços de equipa",
		admin_rba_rbr_priv: "Redacção baseada em função",
		admin_rba_et_mgr_priv: "Gestor de modelos de entrada",
		admin_rba_policies_roles_priv: "Gerir políticas e funções",
		admin_rba_work_priv: "Trabalhar",
		admin_rba_reasons_priv: "Códigos de razão",
		admin_rba_tasks_priv: "Tarefas assíncronas",
		admin_rba_auth_priv: "Autenticação",
		admin_rba_all_privs: "Todos os privilégios",
		admin_rba_some_privs: "Alguns privilégios",
		admin_rba_no_privs: "Sem privilégios",
		admin_add_users_groups_priv: "Adicionar utilizadores e grupos",
		admin_url_features_priv: "Funcionalidades de Gerir URL",
		admin_plugin_features_priv: "Funcionalidades de Gerir suplemento",
		admin_addl_components_priv: "Componentes adicionais",
		admin_global_toolbar_priv: "Barra de ferramentas global",
		admin_status_bar_priv: "Barra de estado",
		admin_refresh_message: "É necessário actualizar o navegador para utilizar os dados actualizados.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "É necessário actualizar o navegador para utilizar o ambiente de trabalho predefinido actualizado.",
		admin_desktop_refresh_message: "É necessário actualizar o navegador para utilizar o ambiente de trabalho actualizado.",
		admin_action_open: "Abrir",
		admin_action_edit: "Editar",
		admin_action_copy: "Copiar",
		admin_action_delete: "Eliminar",
		admin_action_copy: "Copiar",
		admin_action_new: "Criar novo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Este ID já está a ser utilizado. É necessário especificar um ID exclusivo.",

		admin_searchable_properties_for: "Propriedades passíveis de procura para:",
		admin_repository_new: "Novo repositório",
		admin_desktop_new: "Novo ambiente de trabalho",
		admin_desktop_file_documents: "Solicitar aos utilizadores que guardem os novos documentos e pastas numa pasta",
		admin_desktop_file_documents_hover: "Seleccione esta opção se pretender solicitar aos utilizadores que seleccionem uma pasta ao adicionarem itens ao repositório. Se não seleccionar esta opção, os utilizadores podem adicionar documentos (IBM FileNet P8) ou documentos e pastas (IBM Content Manager) sem arquivá-los numa pasta.",
		admin_desktop_show_security_tab: "Mostrar definições de segurança durante as acções de adicionar e dar entrada",
		admin_desktop_show_security_hover: "<b>Apenas para utilizadores do IBM FileNet P8.</b>  Seleccione esta opção se pretender permitir que os utilizadores editem a segurança das pastas e documentos ao adicionar ou dar entrada de itens neste ambiente de trabalho.",
		admin_desktop_configure_security_inheritance: "Permitir que os utilizadores configurem a herança de segurança de pastas",
		admin_desktop_configure_security_inheritance_hover: "<b>Apenas para utilizadores do IBM FileNet P8.</b>  Seleccione esta opção se pretender que os utilizadores possam personalizar o acesso a itens numa pasta ao controlar a herança de segurança de pastas. Se seleccionar esta opção, os utilizadores podem especificar se os utilizadores ou grupos podem herdar a segurança de:<ul><li>Uma pasta</li><li>Uma pasta e as respectivas subpastas imediatas</li><li>Uma pasta e todas as respectivas subpastas</li></ul>",
		admin_desktop_appearance: "Aspecto",
		admin_desktop_appearance_instruction: "Pode personalizar o aspecto do ambiente de trabalho alterando a página de início de sessão e a faixa apresentados para o ambiente de trabalho.",
		admin_desktop_layout: "Esquema:",
		admin_desktop_layout_hover: "O esquema especifica que funcionalidades podem ser apresentadas no cliente da Web e de que modo os conteúdos do cliente da Web são organizados.<br><br><b>Sugestão:</b> Pode definir esquemas personalizados criando suplementos. É necessário registar o suplemento na ferramenta de administração antes de seleccionar um esquema personalizado.",
		admin_desktop_layout_default: "Predefinição",
		admin_desktop_layout_custom: "Personalizado",
		admin_desktop_enable_workflow_email: "Activar este ambiente de trabalho para as notificação de correio electrónico de fluxo de trabalho do FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Apenas utilizadores do FileNet P8. Seleccione esta opção se pretender permitir que os utilizadores abram o cliente da Web a partir dos URLs que são incluídos nas notificações de correio electrónico geradas pelo Process Engine.<br /><br />Se não activar esta opção para nenhum ambiente de trabalho, os utilizadores não podem iniciar sessão no cliente da Web a partir dos URLs nas notificações.<br /><br />Se activar esta opção em múltiplos ambientes de trabalho e mais do que um ambiente de trabalho corresponder aos critérios especificados no URL na notificação, o cliente da Web utiliza o primeiro ambiente de trabalho que corresponde aos critérios. ",
		admin_desktop_prevent_create_new_search: "Impedir que os utilizadores criem procuras",
		admin_desktop_prevent_create_new_search_hover: "Esta opção restringe os utilizadores a utilizarem apenas procuras existentes e impede a criação de procuras em aberto que poderão não estar optimizadas.</br></br>Esta definição não tem impacto nos espaços de equipa. O direito de criar procuras num espaço de equipa é controlado pela função de um utilizador num determinado espaço de equipa.",
		admin_desktop_prevent_create_new_unified_search: "Impedir que os utilizadores criem procuras entre repositórios",
		admin_desktop_prevent_create_new_unified_search_hover: "Esta opção restringe os utilizador a utilizarem apenas procuras entre repositórios existentes e impede-os de criar procuras entre repositórios em aberto que poderão não estar optimizadas.",
		admin_desktop_hide_entry_template_not_found_warning: "Ocultar o aviso apresentado quando o modelo de entrada associado não é localizado",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Seleccione esta opção se pretender ocultar a mensagem de aviso apresentada quando as propriedades do item são editadas e o modelo de entrada associado ao item não é localizado.",
		admin_desktop_show_class_role_security_selection: "Permitir que os utilizadores configurem segurança baseada em funções em modelos de entrada",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Apenas para utilizadores do IBM FileNet P8.</b> Seleccione esta opção se pretender que os utilizadores configurem modelos de entrada para utilizar segurança baseada em funções quando definirem a segurança em documentos e/ou pastas através de modelos de entrada. Se seleccionar esta opção, os editores de modelos de entrada podem especificar se os objectos de segurança de função são aplicados a uma definição de modelo de entrada.",
		admin_desktop_show_primary_multi_part: "Abrir apenas o documento principal no visualizador",
		admin_desktop_show_primary_multi_part_hover: "<b>Apenas para utilizadores do IBM FileNet P8.</b> Seleccione esta opção, se pretende que apenas o ficheiro do documento principal seja aberto no visualizador. Os documentos podem ter múltiplos ficheiros associados. Esta opção abrirá apenas o ficheiro principal associado ao documento.",
		admin_desktop_redaction_save_mode: "Opção de redacção predefinida:",
		admin_desktop_redaction_save_mode_hover: "Seleccione o modo de guardar de redacção do visualizador ViewONE Virtual predefinido:</br>* Perguntar sempre ao utilizador: a caixa de diálogo será apresentada ao iniciar o modo de redacção, para perguntar ao utilizador se pretende dar entrada como versão nova, criar um documento novo ou descarregar conteúdo.</br>* Dar entrada como uma versão nova: guarda sempre o conteúdo redigido numa versão nova do documento existente.</br>* Guardar como um documento completamente novo: guarda sempre o conteúdo redigido como um documento completamente novo.</br>* Descarregar e guardar no cliente: descarrega o conteúdo redigido para o sistema do cliente.",
		admin_desktop_redaction_save_mode_user_select: "Perguntar sempre ao utilizador",
		admin_desktop_redaction_save_mode_new_version: "Dar entrada como uma versão nova",
		admin_desktop_redaction_save_mode_new_document: "Guardar como um documento completamente novo",
		admin_desktop_redaction_save_mode_local_content: "Descarregar e guardar no cliente",

		admin_desktop_document_add_mode: "Adicionar diálogo de documento:",
		admin_desktop_document_add_mode_hover: "Especifique a adição de diálogo a utilizar quando adicionar documentos criados pelo IBM Content Navigator:<ul><li>Novo documento permanentemente redigido</li><li>Novo documento intercalado e dividido</li><li>Novo documento do Microsoft Office</li><li>Novo documento de edição de serviço</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Adicionar documento",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Adicionar documento utilizando modelo de entrada",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Intercalar e Dividir:",
		admin_desktop_merge_and_split_enable_hover: "Especifique se pretende que os utilizadores que acedem a este ambiente de trabalho possam intercalar e dividir documentos através da utilização de um visualizador de suporte.",

		admin_desktop_merge_and_split_show_checkin: "Solicite aos utilizadores para facultarem valores de propriedades quando dão entrada a alterações a um documento.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Caso seleccione esta opção, o diálogo de entrada será apresentado quando os utilizadores dão entrada a alterações a um documento no modo Intercalar e Dividir.",

		admin_desktop_available_categories: "Funcionalidades disponíveis",
		admin_desktop_selected_categories: "Funcionalidades seleccionadas",

		admin_layout_banner_title: "Faixa e página de início de sessão",
		admin_layout_title: "Esquema",

		admin_desktop_application_name: "Nome da aplicação:",
		admin_desktop_application_name_hover: "Especifique o nome da aplicação a apresentar na faixa.<br><br>Sugestão: Defina o nome da aplicação para outros idiomas no separador Etiquetas/Etiquetas de ambiente de trabalho.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Especifique se deve ser utilizado o tema predefinido do IBM Content Navigator ou um tema personalizado para este ambiente de trabalho. Para utilizar um tema personalizado, é necessário criar um tema na secção <b>Temas</b> da ferramenta de administração.",
		admin_desktop_login_logo: "Logótipo da página de início de sessão:",
		admin_desktop_login_logo_hover: "Se pretender alterar o logótipo apresentado na página de início de sessão, pode especificar o URL de um ficheiro de logótipo. Contudo, é recomendado utilizar um tema personalizado para alterar o logótipo.",
		admin_desktop_login_logo_url_hover: "Introduza o URL do ficheiro de logótipo. Se o logótipo estiver no mesmo servidor de aplicação da Web que o cliente da Web, introduza um URL relativo, por exemplo: /mycustomizations/login_logo.png<br><br>O logótipo não deve ser superior a 200 pixéis de largura e 150 pixéis de altura.<br><br>É recomendado o logótipo ter um fundo transparente.",
		admin_desktop_banner_logo: "Logótipo da faixa:",
		admin_desktop_banner_logo_hover: "Se pretender alterar o logótipo apresentado na faixa, pode especificar o URL de um ficheiro de logótipo. Contudo, é recomendado utilizar um tema personalizado para alterar o logótipo.",
		admin_desktop_banner_logo_url_hover: "Introduza o URL do ficheiro de logótipo. Se o logótipo estiver no mesmo servidor de aplicação da Web que o cliente da Web, introduza um URL relativo, por exemplo: /mycustomizations/banner_logo.png<br><br>O logótipo não deve ser superior a 72 pixéis de largura e 36 pixéis de altura.<br><br>É recomendado o logótipo ter um fundo transparente.",
		admin_desktop_banner_background_color: "Cor do fundo da faixa:",
		admin_desktop_banner_background_color_hover: "Se pretender alterar a cor de fundo da faixa, pode especificar uma cor personalizada. Contudo, é recomendado utilizar um tema personalizado para alterar a cor da faixa.",
		admin_desktop_banner_background_color_custom_hover: "Especifique a cor da faixa da aplicação como cor hexadecimal.",
		admin_desktop_banner_application_name_color: "Cor do texto do nome da aplicação:",
		admin_desktop_banner_application_name_color_hover: "Se pretender alterar a cor do nome da aplicação, pode especificar uma cor personalizada. Contudo, é recomendado utilizar um tema personalizado para alterar a cor do nome da aplicação.",
		admin_desktop_banner_application_name_color_custom_hover: "Especifique a cor do nome da aplicação como cor hexadecimal.",
		admin_desktop_banner_menu_color: "Cor do ícone da faixa:",
		admin_desktop_banner_menu_color_hover: "Se alterar a cor de fundo da faixa, poderá ser necessário alterar o esquema de cor dos ícones na faixa para que fiquem mais visíveis. Especifique se deve ser apresentada a versão mais clara ou escura dos ícones da faixa.<br><br>Contudo, é recomendado utilizar um tema personalizado para alterar a cor dos ícone.",
		admin_desktop_login_page_content: "Conteúdo da página de início de sessão:",
		admin_desktop_login_page_content_hover: "Se pretender apresentar informações adicionais na página de início de sessão, como avisos sobre interrupções do sistema ou onde os utilizadores podem obter ajuda sobre nomes de utilizadores e palavras-passe, pode especificar o URL do conteúdo que pretende apresentar.",
		admin_desktop_login_page_content_url_hover: "Introduza o URL do conteúdo da página de início de sessão. Se o conteúdo estiver no mesmo servidor de aplicação da Web que o cliente da Web, introduza um URL relativo, por exemplo: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Regras de palavra-passe:",
		admin_desktop_password_rules_hover: "Se pretender fornecer aos utilizadores directrizes para criar palavras-passe, como caracteres restritos ou o número mínimo de caracteres, pode especificar o URL de uma página com as regras de palavras-passe.",
		admin_desktop_password_rules_url_hover: "Introduza o URL do conteúdo de regras de palavra-passe. Se o conteúdo estiver no mesmo servidor de aplicação da Web que o cliente da Web, introduza um URL relativo, por exemplo: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL de ajuda do utilizador final:",
		admin_desktop_help_url_hover: "Pode utilizar a ajuda fornecida com o IBM Content Navigator ou pode redireccionar os utilizadores para conteúdo de ajuda personalizado, executando uma das seguintes acções:<br><br><ul><li>Direccionando para um sistema de ajuda personalizado</li><li>A adicionar ajuda à ocorrência do IBM Knowledge Center implementada com o IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Introduza o URL do sistema de ajuda personalizado. O IBM Content Navigator acrescenta index.jsp?content=/com.ibm.usingeuc.doc/ e um nome de ficheiro ao final do URL que especificar.  Para que as ligações \"Obter mais informações\" funcionem na interface, o sistema de ajuda tem de utilizar os mesmos nomes de ficheiros que a ajuda do utilizador final integrada. ",
		admin_desktop_deprecated_appearance_title: "Definições obsoletas",
		admin_desktop_deprecated_appearance_instructions: "Se utilizar um tema personalizado, estas definições são substituídas pelo tema personalizado. Deverá migrar estas definições para um tema personalizado, que fornece mais opções de estilo do que as definições nesta secção. Adicionalmente, um tema personalizado pode ser utilizador por vários ambientes de trabalho.",

		admin_desktop_plugins_title: "Activar ou desactivar suplementos para este ambiente de trabalho.",
		admin_desktop_plugins_enable_all_plugins: "Activar todos os suplementos implementados para utilizar neste ambiente de trabalho",
		admin_desktop_plugins_select_plugins: "Seleccionar os suplementos implementados para activar para utilização com este ambiente de trabalho",
		admin_desktop_plugins_select_plugin: "Seleccionar suplemento",

		admin_desktop_layout_features: "Funcionalidades apresentadas:",
		admin_desktop_layout_features_hover: "Seleccione as funções que pretende disponibilizar aos utilizadores a partir deste ambiente de trabalho. As funções são apresentadas pela ordem com que aparecem na lista.<br><br>Quando selecciona uma função, pode personalizar alguns dos comportamentos da função no ambiente de trabalho, tais como o repositório predefinido seleccionado para a função.",
		admin_desktop_layout_default_repository: "Repositório predefinido:",
		admin_desktop_layout_default_repository_layout_hover: "Especifique o repositório seleccionado por predefinição quando os utilizadores abrem esta função.",
		admin_desktop_layout_document_thumbnails: "Miniaturas de documento:",
		admin_desktop_layout_document_thumbnails_hover: "Especifique se devem ser apresentadas miniaturas dos documentos no painel de informações do documento.<br><br>A apresentação de miniaturas pode tornar mais lento o desempenho do cliente da Web.",
		admin_desktop_layout_show_filmstrip_view: "Vista de película de filme:",
		admin_desktop_layout_show_filmstrip_view_hover: "Especifique se pretende permitir que os utilizadores mudem a apresentação da lista de conteúdo para a vista de película de filme.<br><br>A vista de película de filme gera uma pré-visualização de cada documento que o utilizador seleccionar. Contudo, utilizar a vista de película de filme pode tornar mais lento o desempenho do cliente da Web. Adicionalmente, é necessário configurar o visualizador de conversão HTML para visualizar pré-visualizações de documentos.",
		admin_enabled: "Activar",
		admin_disabled: "Desactivar",
		admin_include: "Incluir",
		admin_exclude: "Excluir",
		admin_layout_teamspaces_default_repository: "Espaços de equipa:",
		admin_layout_entry_templates_default_repository: "Modelos de entrada:",
		admin_layout_other_features_default_repository: "Procurar e pesquisar:",
		admin_layout_work_default_repository: "Trabalho:",
		admin_layout_default_feature: "Funcionalidade predefinida:",
		admin_default_category_placeholder: "Seleccionar uma funcionalidade",
		admin_layout_default_feature_hover: "Especifique que função é apresentada quando os utilizadores iniciam sessão neste ambiente de trabalho.",
		admin_layout_default_feature_warning: "Alterar a funcionalidade predefinida pode afectar o tempo necessário para carregar a aplicação.",
		admin_layout_feature_list_header: "Função",
		admin_layout_show_statusbar: "Barra de estado:",
		admin_layout_show_statusbar_hover: "Especifique se a barra de estado deve ser apresentada na parte inferior do ambiente de trabalho.<br><br>Se ocultar a barra de estado, os utilizadores não poderão visualizar informações sobre eventos não relacionados com erros, como:<ul><li>O documento foi adicionado ao repositório.</li><li>A procura devolveu 59 documentos.</li></ul>",
		admin_layout_show_magazineview: "Vista de publicação:",
		admin_layout_show_magazineview_hover: "Especifique se pretende permitir que os utilizadores mudem a apresentação da lista de conteúdo para a vista de publicação.<br><br>A vista de publicação aumenta o volume de cada entrada na lista de conteúdos, o que reduz o número de itens que podem ser apresentados na lista de conteúdos em simultâneo.",
		admin_layout_show_detailsview: "Vista de detalhes:",
		admin_layout_show_detailsview_hover: "Especifique se pretende permitir que os utilizadores mudem a apresentação da lista de conteúdo para a vista de detalhes.<br><br>A vista de detalhes maximiza o número de linhas visíveis na lista de conteúdo.",
		admin_feature_config_docinfopane_label: "Painel de informações do documento:",
		admin_feature_config_docinfopane_hoverhelp: "Especifique se os utilizadores podem aceder ao painel de informações do documento nesta função.",
		admin_feature_config_docinfopane_default_label: "Comportamento predefinido:",
		admin_feature_config_docinfopane_expanded: "Expandido",
		admin_feature_config_docinfopane_collapsed: "Contraído",
		admin_feature_config_docinfopane_expand_on_select: "Expandir quando o item está seleccionado",
		admin_layout_features_title: "Funções do ambiente de trabalho",
		admin_layout_features_instructions: "Especifique quais as funções a que os utilizadores podem aceder a partir deste ambiente de trabalho.  Adicionalmente, pode personalizar o comportamento de cada função incluída no ambiente de trabalho.",
		admin_layout_components_title: "Componentes adicionais do ambiente de trabalho",
		admin_layout_components_instructions: "Pode desactivar alguns dos componentes do ambiente de trabalho se pretender uma interface mais simples ou se pretender melhorar o desempenho do cliente da Web.",
		admin_layout_featureconfig_instructions: "Seleccionar uma função para configurar",
		admin_layout_featureconfig_no_configuration: "Nenhuma configuração de função disponível.",
		admin_layout_featureconfig_label: "Configuração da função ${0}",
		admin_layout_featureconfig_title: "Configuração da função",
		admin_layout_featureconfig_taskManagerURL: "Para utilizar esta função, é necessário activar e configurar o IBM Content Navigator para ligar ao serviço de gestor de tarefa. Active o serviço de gestor de tarefas na secção <b>Definições</b> desta ferramenta de administração.",
		admin_feature_config_show_my_checkouts_label: "Painel As minhas saídas:",
		admin_feature_config_show_my_checkouts_hoverhelp: "O painel As minhas saídas permite que os utilizadores executem uma procura para todos os itens dos quais deram saída num repositório específico. Especifique se os utilizadores podem aceder ao painel As minhas saídas a partir do componente Página inicial.<br/><br/><b>Restrição:</b> Este componente requer que tenha pelo menos um repositório do IBM Content Manager, IBM FileNet P8 ou OASIS CMIS associado a este ambiente de trabalho.",

		admin_feature_config_default_repository_icon_text: "Repositório predefinido",
		admin_show: "Mostrar",
		admin_hide: "Ocultar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Não é possível remover a funcionalidade de administração do ambiente de trabalho de administração",
		admin_warning_label: "Aviso:",
		admin_layout_show_globaltoolbar: "Barra de ferramentas global:",
		admin_layout_show_globaltoolbar_hover: "Especifique se a barra de ferramentas deve ser apresentada na faixa no topo do ambiente de trabalho.<br><br>A barra de ferramentas global inclui acções que permitem aos utilizadores adicionar documentos, pastas e retenções ao repositório. As acções disponíveis dependem do repositório a que o utilizador está ligado.",
		admin_interface_text_name_label: "Tipo de etiqueta",

		admin_interface_text_label_description: "Pode personalizar o texto apresentado em determinadas áreas do cliente da Web. As etiquetas são apresentadas para todos os repositórios e ambientes de trabalho da configuração. Introduza o texto que pretende visualizar na interface no campo Etiqueta actual.<br><br><b>Importante:</b> Quaisquer alterações efectuadas nas etiquetas não serão apresentadas na ferramenta de administração.",
		admin_interface_text_label_action: "Etiquetas de acção",
		admin_interface_text_label_action_description: "As etiquetas de acção são apresentadas em menus e botões no cliente da Web. Pode definir diferentes etiquetas de acção para cada tipo de repositório.",
		admin_interface_text_label_application: "Etiquetas da aplicação",
		admin_interface_text_label_application_description: "As etiquetas de aplicação são apresentadas no cliente da Web.",
		admin_interface_text_label_system: "Etiquetas de propriedade do sistema",
		admin_interface_text_label_system_description: "As propriedades do sistema que são apresentadas variam por repositório. Pode personalizar as etiquetas apresentadas para as propriedades de sistema associadas aos documentos e pastas nos repositórios.",
		admin_interface_text_label_desktop: "Etiquetas de ambiente de trabalho",
		admin_interface_text_label_desktop_description: "Se personalizou o nome da aplicação num ambiente de trabalho, pode personalizar esse nome noutro idioma diferente do inglês. Também pode personalizar os nomes dos espaços da aplicação do IBM FileNet P8 num ambiente de trabalho.",

		admin_interface_text_system_label: "Etiqueta de sistema",
		admin_interface_text_current_label: "Etiqueta actual",
		admin_interface_text_default_label_heading: "Etiqueta predefinida",
		admin_interface_text_default_label: "Etiqueta predefinida:",
		admin_interface_text_displayed_in_label: "Apresentado para",
		admin_interface_text_displayed_in_document_folder: "Documentos e pastas",
		admin_interface_text_displayed_in_document: "Documentos",
		admin_interface_text_displayed_in_folder: "Pastas",
		admin_interface_text_displayed_in_admin_application_space: "Etiqueta de espaço da aplicação",
		admin_interface_text_displayed_in_desktop: "Etiqueta de função para mobilidade",
		admin_interface_text_displayed_in_admin_application_name: "Nome da aplicação",

		admin_new_desktop: "Novo ambiente de trabalho",
		admin_new_repository: "Novo repositório",
		admin_new_menu: "Novo menu",
		admin_new_viewer_mapping: "Novo mapa de visualizador",
		admin_new_mapping_label: "Novo mapeamento",
		admin_new_icon_mapping: "Novo mapeamento de ícone",
		admin_viewer_mapping_list_instructions: "Pode configurar os visualizadores utilizados pelo cliente da Web para apresentar diferentes tipos de conteúdo. Um mapa de visualizador define os tipos MIME associados a cada visualizador que pretende utilizar. Pode criar vários mapas de visualizador se pretender utilizar visualizadores diferentes para ambientes de trabalho diferentes.",
		admin_viewer_mapping_instructions: "Especifique que visualizadores pretende utilizar para abrir ficheiros. Se pretender utilizar um visualizador personalizado, tem de integrar o visualizador como suplemento antes de poder adicionar o mesmo ao mapa de visualizador.<br><br><b>Importante:</b> Quando um utilizador abre um documento, o cliente da web procura a lista de mapeamentos de visualizadores para localizar o primeiro visualizador que possa abrir o documento, com base no sistema operativo que o utilizador estiver a utilizar e o repositório ao qual o utilizador estiver ligado. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Novo suplemento",
		admin_menu_list_instructions: "Pode criar barras de ferramentas personalizadas e menus de contexto para controlar as acções disponíveis para os utilizadores. Não pode editar os menus predefinidos, mas pode criar cópias dos menus existentes para restringir as acções disponíveis ou para incluir acções adicionais definidas nos suplementos.<br><br>Se pretender criar um novo tipo de menu, tem de definir o menu num suplemento.",
		admin_menu_id_hover: "O ID tem de ser exclusivo e não pode ser alterado após guardar o menu.<br><br>O ID pode incluir apenas caracteres alfanuméricos e é sensível a maiúsculas e minúsculas.",
		admin_menu_id_disabled_hover: "O ID de menu não pode ser alterado. Se pretender utilizar um ID diferente, tem de criar um menu novo.",
		admin_menu_default_instructions: "Não pode editar este menu, uma vez que se trata de um menu predefinido. Se pretender editar este menu, tem de criar uma cópia do mesmo.",
		admin_menu_toolbar_instructions: "Pode restringir as acções disponíveis para esta barra de ferramentas ou pode adicionar acções personalizadas definidas num suplemento. Também pode organizar as acções adicionando separadores à barra de ferramentas.",
		admin_menu_toolbar_custom_instructions: "Esta barra de ferramentas é definida por um suplemento. Se pretender editar esta barra de ferramentas, tem de actualizar o suplemento ou criar uma cópia da barra de ferramentas.",
		admin_menu_context_menu_instructions: "Pode restringir as acções disponíveis para este menu contextual ou pode adicionar acções personalizadas definidas num suplemento. Também pode organizar as acções adicionando separadores e submenus ao menu contextual.",
		admin_menu_context_menu_custom_instructions: "Este menu contextual é definido por um suplemento. Se pretender editar este menu de contexto, tem de actualizar o suplemento ou criar uma cópia do menu de contexto.",
		admin_desktop_list_instructions: "Pode criar vários ambientes de trabalho para dar a diferentes utilizadores acesso ao conteúdo necessário. Por exemplo, pode criar um ambiente de trabalho que permite apenas aos utilizadores procurar conteúdo ou um ambiente de trabalho que concede aos utilizadores acesso a um único repositório. ",
		admin_plugin_updated: "A configuração do suplemento seleccionado foi alterada. É necessário actualizar o navegador para que as alterações sejam aplicadas.",
		admin_repository_ci_heading: "Repositório do Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Repositório do FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Repositório do Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Repositório do Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Repositório CMIS (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Repositório Box: <b>${0}</b>",
		admin_repository_generic_heading: "Repositório: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Pretende eliminar os ambientes de trabalho seleccionados?\n${0} ambientes de trabalho estão seleccionados.",
		admin_delete_confirmation_menus: "Pretende eliminar os menus seleccionados?\n${0} menus estão seleccionados.",
		admin_delete_confirmation_repositories: "Pretende eliminar os repositórios seleccionados?\n${0} repositórios estão seleccionados.",
		admin_delete_confirmation_viewer_mappings: "Pretende eliminar os mapas de visualizador seleccionados?  Estão seleccionados ${0} mapas.",
		admin_delete_confirmation_icon_mappings: "Pretende eliminar as configurações de ícone seleccionadas? ${0} configuração(ões) de ícone seleccionada(s).",
		admin_delete_confirmation_plugins: "Pretende eliminar os suplementos seleccionados?\n${0} suplementos estão seleccionados.",
		admin_delete_confirmation: "Pretende eliminar os itens seleccionados?\n${0} itens estão seleccionados.",

		admin_viewer_mapping_id_hover: "O ID tem de ser exclusivo e não pode ser alterado após guardar o mapa de visualizador.<br><br>O ID pode incluir apenas caracteres alfanuméricos e é sensível a maiúsculas e minúsculas.",
		admin_viewer_mapping_id_disabled_hover: "O ID do mapa de visualizador não pode ser alterado. Se pretender utilizar um ID diferente, terá de criar um novo mapa de visualizador.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Não é possível eliminar o ambiente de trabalho predefinido.",

		admin_desktop_heading: "Ambiente de trabalho: <b>${0}</b>",
		admin_menu_toolbar_heading: "Barra de ferramentas: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Barra de ferramentas personalizada: <b>${0}</b>",
		admin_menu_context_menu_heading: "Menu contextual: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Menu contextual personalizado: <b>${0}</b>",
		admin_plugin_heading: "Suplemento: <b>${0}</b>",
		admin_plugin_instructions: "Um suplemento pode ser um ficheiro JAR ou um ficheiro de classe compilado.<br/><br/><b>Importante:</b> É necessário que o servidor da aplicação da Web IBM Content Navigator consiga aceder ao ficheiro de suplemento no sistema de ficheiros local ou através de um URL.",
		admin_plugin_list_instructions: "É necessário utilizar a ferramenta de administração para registar suplementos para o cliente da Web. Se um suplemento requerer configuração adicional, os parâmetros de configuração são apresentados após efectuar o registo do suplemento.<br /><br /><b>Importante:</b> Se editar um suplemento referido noutra área da ferramenta de administração, tal como um menu, poderão ocorrer problemas com o comportamento do suplemento. Além disso, os suplementos são invocados pela ordem com que estão apresentados. Se um suplemento necessitar de ser executado antes de outro suplemento, certifique-se de que os suplementos estão apresentados pela ordem com que têm de ser executados.",
		admin_plugin_cannot_delete: "Não é possível eliminar os suplementos seleccionados porque alguns suplementos dependem deles.<br/>Suplementos seleccionados: ${0}<br/>Suplementos dependentes: ${1}",
		admin_plugin_cannot_disable: "Não é possível desactivar os suplementos seleccionados porque alguns suplementos dependem deles.<br/>Suplementos seleccionados: ${0}<br/>Suplementos dependentes: ${1}",
		admin_plugin_cannot_add: "Não é possível adicionar o suplemento porque alguns suplementos de que depende estão em falta ou desactivados. Suplementos em falta ou desactivados: ${0}",
		admin_plugin_cannot_enable: "Não é possível activar os suplementos seleccionados porque alguns suplementos de que dependem estão em falta ou desactivados.<br/>Suplementos seleccionados: ${0}<br/>Suplementos em falta ou desactivados: ${1}",
		admin_plugin_save_order: "Guardar ordem",
		admin_plugin_load: "Carregar",
		admin_plugin_load_hover: "Especifique o URL do suplemento",
		admin_plugin_file_hover: "Se o ficheiro JAR de suplemento estiver no sistema de ficheiros local, pode introduzir o caminho totalmente qualificado ou o URL do ficheiro de suplemento. Se o ficheiro JAR de suplemento estiver num servidor remoto, tem de introduzir o URL do ficheiro de suplemento.",
		admin_plugin_classfolderpath_hover: "O ficheiro de classe compilado tem de estar no servidor da aplicação da Web do IBM Content Navigator.<br/><br/>Introduza o caminho totalmente qualificado da pasta onde as classes de suplemento são compiladas e geradas.<br/><br/>O caminho não pode conter o nome do pacote da classe de suplemento. Por exemplo, o caminho predefinido para a classe de suplemento de exemplo em Windows é C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Introduza o nome completo da classe de Java no ficheiro de classe que deverá ser carregado e invocado como a classe de suplemento.<br/>Por exemplo, o nome de classe do suplemento de exemplo é com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "O ficheiro JAR de suplemento não foi encontrado no URL especificado. Certifique-se de que o ficheiro JAR está no servidor da aplicação da Web e de que o URL e o nome do ficheiro estão correctos.",
		admin_plugin_for_repository_not_loaded: "Não é possível editar este repositório. O suplemento que define e suporta este tipo de repositório não está carregado. No separador Suplementos, edite o suplemento para verificar que está carregado e configurado correctamente.",
		admin_plugin_repository_types: "Tipos de repositório:",
		admin_plugin_viewers: "Visualizadores:",
		admin_plugin_features: "Funcionalidades:",
		admin_plugin_layouts: "Esquemas:",
		admin_plugin_not_available: "Não disponível",
		admin_plugin_config_params: "Parâmetros de configuração:",
		admin_viewer_def_heading: "Mapa de visualizador: <b>${0}</b>",
		admin_users_and_groups: "Utilizadores e grupos",
		admin_general: "Geral",
		admin_logging: "Registo",
		admin_authentication: "Autenticação",		
		admin_rolebase_role: "Função:",
		admin_settings_logging_instructions: "Pode utilizar o registo para resolver problemas com o cliente da Web. Pode aperfeiçoar o registo se tiver conhecimento de um problema numa determinada classe de Java ou utilizador específico. As informações de erro são gravadas nos ficheiros de registo do servidor da aplicação da Web.",
		admin_settings_logging_instructions2: "<b>Definições de registo de definições</b><br />Se tiver conhecimento da ocorrência de um problema para um utilizador ou máquina de sistema central cliente específica, pode direccionar o registo de depuração para essa máquina ou utilizador. Pode recolher informações de depuração num ambiente de produção sem afectar significativamente o desempenho do sistema.<br /><br /><b>Importante:</b> Se especificar uma máquina de sistema central cliente ou utilizador, esta definição substitui quaisquer outras definições de registo. Após capturar as informações necessárias, defina esta opção como <b>Nada</b> para retomar o registo padrão para o seu ambiente.",
		admin_settings_export_config_hover: "Exporte a informação de configuração do sistema actual para um ficheiro para utilizar com o IBM Support Assistant Data Collector. O ficheiro é guardado na localização definida pela propriedade de sistema de Java user.home.",
		admin_logging_level: "Registo ao nível da aplicação:",
		admin_logging_level_hover: "Os níveis de registo afectam a quantidade de informação armazenada no seu servidor. Seleccionar <b>Erro</b> recolhe o mínimo de informações de registo. Seleccionar <b>Depuração</b> recolhe o máximo de informações.<br /><br />Não especifique <b>Depurar</b> num ambiente de produção excepto se tal for indicado pelo Suporte para Software IBM.",
		admin_logging_level_0: "Sem registo",
		admin_logging_level_1: "Erro",
		admin_logging_level_2: "Aviso",
		admin_logging_level_3: "Informações",
		admin_logging_level_4: "Depurar",
		admin_logging_classes: "Registo ao nível de classe Java:",
		admin_logging_classes_hover: "Por predefinição, todas as classes de Java estão incluídas nos registos de erro do servidor da aplicação da Web. Contudo, pode especificar que classes ou pacotes incluir ou excluir do registo. Pode utilizar os registos de erro do servidor da aplicação para determinar que classes incluir ou excluir.<br><br>Se tiver conhecimento da ocorrência de um problema numa classe específica, pode incluir especificamente essa classe nos ficheiros de registo. Quando inclui uma classe nos registos de erro, todas as outras classes são excluídas do ficheiro de registo.<br><br>Se não se verificar nenhum problema numa classe e pretender reduzir o tamanho do ficheiro de registo, pode excluir essa classe dos ficheiros de registo.",
		admin_logging_classes_include: "Incluir",
		admin_logging_classes_include_all: "Todas as classes",
		admin_logging_classes_include_specified: "Classes específicas",
		admin_logging_classes_include_specified_msg: "Especifique as classes a incluir.",
		admin_logging_classes_exclude: "Excluir",
		admin_logging_classes_exclude_none: "Nenhum",
		admin_logging_classes_exclude_specified: "Classes específicas",
		admin_logging_classes_exclude_specified_msg: "Especifique as classes a excluir.",
		admin_logging_debug: "Registo de depuração para:",
		admin_logging_debug_hover: "<b>Importante:</b> Reveja os ficheiros de registo do servidor da aplicação da Web antes de especificar um endereço de IP de máquina cliente de sistema central ou utilizador. O valor que indicar tem de corresponder ao valor apresentado no ficheiro de registo.",
		admin_logging_debug_none: "Nenhum (predefinição)",
		admin_logging_debug_host: "Máquinas de sistema central cliente (endereços IP)",
		admin_logging_debug_host_msg: "Especifique o endereço de IP de uma ou mais máquinas cliente para as quais pretende registar informações de depuração. Utilize uma vírgula para separar os endereços de IP.<br /><br /><b>Importante:</b> Reveja os ficheiros de registo do servidor da aplicação da Web antes de especificar um endereço de IP. O valor que indicar tem de corresponder ao valor apresentado no ficheiro de registo.",
		admin_logging_debug_user: "Utilizadores",
		admin_logging_debug_user_msg: "Especifique o nome do utilizador de um ou mais utilizadores para os quais pretende registar informações de depuração. Utilize uma vírgula para separar os nomes dos utilizadores.<br /><br /><b>Importante:</b> Reveja os ficheiros de registo do servidor da aplicação da Web antes de especificar um nome do utilizador. O valor que indicar tem de corresponder ao valor apresentado no ficheiro de registo.",

		admin_office_settings_logging_instructions: "Pode utilizar o registo para resolver problemas com o IBM Content Navigator for Microsoft Office. Pode aperfeiçoar o registo se tiver conhecimento de um problema numa determinada classe ou utilizador específico. As informações de erro são gravadas nos ficheiros de registo da aplicação nas máquinas de sistema central cliente do IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Definições de registo de definições</b><br />Se tiver conhecimento da ocorrência de um problema para uma máquina cliente de sistema central ou utilizador do IBM Content Navigator for Microsoft Office pode direccionar o registo de depuração para essa máquina ou utilizador. Pode recolher informações de depuração num ambiente de produção sem afectar significativamente o desempenho do sistema. <br /><br /><b>Importante:</b> Se especificar uma máquina de sistema central cliente ou utilizador, esta definição substitui quaisquer outras definições de registo. Após recolher as informações necessárias, defina esta opção como <b>Nenhum</b> para retomar o registo padrão para o IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> Reveja os ficheiros de registo da máquina cliente antes de especificar um endereço de IP de máquina cliente de sistema central ou utilizador. O valor que indicar tem de corresponder ao valor apresentado no ficheiro de registo. ",
		admin_office_logging: "Registo do Office",
		admin_office_logging_classes: "Registo ao nível da classe:",
		admin_office_logging_classes_hover: "Por predefinição, todas as classes e pacotes estão incluídos nos registos de erro do IBM Content Navigator for Microsoft Office. Contudo, pode especificar que classes ou pacotes incluir ou excluir do registo. Pode utilizar os registos da máquina cliente para determinar que classes incluir ou excluir.<br /><br />Se tiver conhecimento da ocorrência de um problema numa classe específica, pode incluir especificamente essa classe nos ficheiros de registo. Quando inclui uma classe nos registos de erro, todas as outras classes são excluídas dos ficheiros de registo. <br /><br />Se não se verificar nenhum problema numa classe e pretender reduzir o tamanho do ficheiro de registo, pode excluir essa classe dos ficheiros de registo. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> Reveja os ficheiros de registo da máquina cliente antes de especificar um endereço de IP de máquina cliente de sistema central ou utilizador. O valor que indicar tem de corresponder ao valor apresentado no ficheiro de registo.",
		admin_office_logging_additional_settings: "Definições adicionais:",
		admin_office_logging_additional_settings_hover: "Especifique as definições adicionais",
		admin_office_logging_file_size: "Tamanho do ficheiro de registo",
		admin_office_logging_file_size_hover: "Especifique o tamanho a partir do qual o IBM Content Navigator for Microsoft Office cria um novo ficheiro de registo. Quando um ficheiro de registo atinge o tamanho máximo, o nome do registo actual é alterado para incluir a data (com o formato AAAAMMdd) e um número incremental (por exemplo, ICNExcelAddin-20121116-5.log) e um novo ficheiro de registo é criado. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Mostrar rastreio de pilha nas caixas de diálogo",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Pode optar por apresentar as informações de rastreio de pilha nas caixas de diálogo de mensagens para facilitar a resolução do problema. Mesmo que não active esta opção, as informações detalhadas de rastreio de pilha são sempre incluídas nos registos de erro do IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Ícones de estado",
		admin_icon_state_icon: "Ícone de estado",
		admin_icon_state: "Estado",
		state_contains_label: "O estado contém",
		admin_icon_state_instructions: "Pode personalizar os ícones apresentados junto aos documentos, pastas e itens de trabalho nos repositórios.<br><br><b>Sugestão:</b> Pode especificar se pretende apresentar ícones de estado para cada repositório no ambiente.",
		admin_icon_state_dialog_title: "Mapeamento de ícone de estado",
		admin_icon_state_dialog_instructions: "Pode mapear o estado seleccionado para um ícone de predefinido fornecido com o cliente da Web ou para um ícone personalizado.",

		admin_icon_mapping_twisty: "Ícones de tipo MIME",
		admin_icon_mapping_dialog_title: "Mapeamento de ícone",
		admin_icon_mapping: "Mapeamento de ícone",
		admin_icon_mapping_instructions: "Pode mapear uma lista de tipos MIME para um ícone predefinido fornecido com o cliente da Web ou para um ícone personalizado.",
		admin_icon_mapping_list_instructions: "Pode personalizar os ícones apresentados para os diferentes tipos MIME armazenados no repositório. O cliente da Web utiliza os ícones pela ordem em que estes estão indicados. Se um tipo MIME for listado mais do que uma vez, é utilizado o primeiro ícone associados a esse tipo MIME.",
		admin_icon_mapping_icon_label: "Que ícone pretende utilizar?",
		admin_icon_mapping_file_name: "Ícone personalizado:",
		admin_icon_mapping_file_name_heading: "Ícone personalizado",
		admin_icon_mapping_file_name_placeholder: "Especifique o URL do ícone.",
		admin_icon_mapping_file_name_hover: "Introduza o URL do ícone. Se o ícone estiver no mesmo servidor de aplicação da Web que o cliente da Web, introduza um URL relativo. Por exemplo: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Ícone predefinido:",
		admin_icon_mapping_class_name_heading: "Ícone predefinido",
		admin_icon_mapping_class_name_hover: "Seleccione um ícone fornecido com o cliente da Web.",
		admin_icon_mapping_class_name_placeholder: "Seleccionar um ícone",

		admin_p8_instructions: "Estas informações são partilhadas por todos os repositórios do FileNet Content Manager que estão configurados para o cliente da Web.",
		admin_p8_collaboration_config: "Configuração opcional de FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Pode configurar estes parâmetros se pretender adaptar os FileNet Collaboration Services ao IBM FileNet P8.",
		admin_p8_use_url_incoming: "Utilize o URL nos pedidos de entrada para gerar URLs de resposta:",
		admin_p8_use_url_incoming_hover: "Na maioria dos ambientes de FileNet Collaboration Services, pode utilizar o URL de um pedido de entrada para gerar o URL numa resposta. Seleccione <b>Sim</b> excepto se uma das situações seguintes se aplicar:<ul><li>Pretende forçar as aplicações cliente a aceder ao FileNet Collaboration Services através de um URL específico.<li>O FileNet Collaboration Services produz URLs não válidos devido às definições do servidor proxy.</ul>",

		admin_p8_use_url_incoming_http: "URL de FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Especifique o URL através do qual as aplicações cliente podem aceder ao FileNet Collaboration Services com o formato http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "URL HTTPS de FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Se um FileNet Collaboration Services estiver configurado para utilizar SSL, especifique o URL HTTPS através do qual as aplicações cliente podem aceder ao FileNet Collaboration Services com o formato https://FNCSserver:número_da_porta",
		admin_p8_hide_email_addresses: "Ocultar endereços de correio electrónico do utilizador nas respostas do servidor:",
		admin_p8_hide_email_addresses_hover: "Pode ocultar os endereços de correio electrónico dos utilizadores nas respostas do servidor, caso seja necessário cumprir políticas de privacidade. Por exemplo, pode ocultar a lista de endereços de correio electrónico dos utilizadores quando o servidor devolve uma lista de documentos e informações sobre os utilizadores que criaram ou editaram os documentos.",

		admin_p8_mask_user_ids: "Aplicar máscaras a IDs de utilizador nos ficheiros de registo:",
		admin_p8_mask_user_ids_hover: "Pode ocultar os nomes de utilizadores nos ficheiros de registo do FileNet Collaboration Services, caso seja necessário cumprir políticas de privacidade. Quando activa esta opção, os nomes dos utilizadores são substituídos por valores de indexação. Desta forma, pode fornecer ficheiros de registo a empresas externas, tais como a IBM, para efeitos de suporte sem comprometer os registos de actividades ou os nomes dos utilizadores.",

		admin_p8_soft_delete: "Mover ficheiros eliminados para a reciclagem de recuperação:",
		admin_p8_soft_delete_hover: "Quando os utilizadores eliminam itens, mova os itens para uma reciclagem de recuperação, em vez de eliminar os itens do repositório. Os itens permanecem na reciclagem de recuperação até serem suprimidos. Esta definição é ignorada se o repositório de destino não suportar a reciclagem de recuperação.<br><br><b>Restrição:</b> A reciclagem de recuperação é suportada no IBM FileNet P8 versão 5.2 ou posterior e requer o suplemento de Social Collaboration Base Extensions.",

		admin_p8_download: "Configuração da cache HTTP de transferência de conteúdo",
		admin_p8_download_instructions: "Se os repositórios do IBM FileNet Content Manager incluírem muitos ficheiros de grandes dimensões, pode configurar a Content Download HTTP Cache (CDHC) para que o FileNet Collaboration Services reencaminhe, em segurança, os pedidos de conteúdo de ficheiros de grandes dimensões para um servidor da Web dedicado.<br/><br/>Esta função requer o IBM HTTP Server. Adicionalmente, é necessário actualizar o ficheiro httpd.conf do IBM HTTP Server.",
		admin_p8_download_cache: "Cache HTTP de transferência de conteúdo:",
		admin_p8_download_cache_hover: "Especifique se pretende activar o Content Download HTTP Cache (CDHC) para todos os repositórios do IBM FileNet Content Manager no seu ambiente. Pode especificar um tamanho de ficheiro mínimo para os ficheiros serem colocados em cache.",
		admin_p8_download_cache_folder: "Directório de cache totalmente qualificado",
		admin_p8_download_cache_folder_hover: "Especifique o caminho totalmente qualificado do directório onde pretende armazenar os ficheiros em cache. O directório pode encontrar-se num sistema operativo ou dispositivo como, por exemplo, um directório de rede partilhado, desde que seja visível como um sistema de ficheiros para o FileNet Collaboration Services e o IBM HTTP Server.",
		admin_p8_download_cache_url: "Nome alternativo para a localização da cache:",
		admin_p8_download_cache_url_hover: "Especifique o nome alternativo utilizado para direccionar para o directório da cache a partir do URL de FileNet Collaboration Services. Especifique o nome alternativo com o formato /nome alternativo, por exemplo, /cdhc.<br/><br/>Quando /cdhc está incluído no URL, a aplicação é redireccionada para o directório de cache totalmente qualificado.",
		admin_p8_download_cache_max_files: "Número máximo de ficheiros em cache:",
		admin_p8_download_cache_max_files_hover: "Quando o número máximo de ficheiros é atingido, o ficheiro mais antigo é removido da cache.<br><br>Se especificar o número máximo de ficheiros a colocar em cache e o tamanho máximo da cache, o ficheiro mais antigo é removido da cache quando se verifica o valor mais baixo das duas condições.",
		admin_p8_download_cache_max_size: "Tamanho máximo da cache (em GB):",
		admin_p8_download_cache_max_size_hover: "Quando o tamanho máximo da cache é atingido, o ficheiro mais antigo é removido da cache.<br/><br/>Se especificar o número máximo de ficheiros a colocar em cache e o tamanho máximo da cache, o ficheiro mais antigo é removido da cache quando se verifica o valor mais baixo das duas condições.",
		admin_p8_download_cache_cleanup_duration: "Duração máxima da operação de limpeza (em segundos):",
		admin_p8_download_cache_cleanup_duration_hover: "Especifique o período máximo que a operação de limpeza pode durar. A duração predefinida é de 5 segundos.<br><br>Quaisquer ficheiros sujeitos a eliminação, mas que permanecem na cache após a operação de limpeza serão removidos durante uma operação de limpeza posterior.",
		admin_p8_download_cache_cleanup_min: "Intervalo mínimo entre operações de limpeza da cache (em segundos):",
		admin_p8_download_cache_cleanup_min_hover: "Especifique o período mínimo que deve decorrer entre as opções de limpeza da cache. O período predefinido é de 3.600 segundos (1 hora).<br><br>As operações de limpeza da cache ocorrem apenas quando existe um pedido activo de transferência de conteúdo da cache. Se forem recebidos pedidos a cada minuto, a operação de limpeza será efectuada a cada hora. Contudo, se decorrerem três horas entre cada pedido de transferência, a operação de limpeza não será realizada até que o pedido de transferência seja recebido.",
		admin_p8_download_cache_min_lifetime: "Período mínimo em cache (em segundos):",
		admin_p8_download_cache_min_lifetime_hover: "Especifique o período de tempo mínimo que um ficheiro é mantido na cache antes de poder ser removido. O período predefinido é de 3.600 segundos (1 hora).<br><br>Mesmo que a cache atinja o tamanho máximo ou contenha o número máximo de ficheiros, o ficheiro mais antigo na cache não pode ser eliminado até que o ficheiro tenha permanecido na cache durante o período de tempo especificado.",
		admin_p8_download_cache_size_threshold: "Tamanho mínimo de ficheiro a colocar em cache (em KB):",
		admin_p8_download_cache_size_threshold_hover: "Especifique o tamanho mínimo que o CDHC deve utilizar para colocar ficheiros em cache. Se um ficheiro for menor do que o tamanho especificado, o ficheiro é direccionado através do servidor da aplicação da Web em que o FileNet Collaboration Services está implementado. O tamanho predefinido é 1000 KB.",
		admin_p8_download_guard_header: "Cabeçalho de HTTP para gatekeeping:",
		admin_p8_download_guard_header_hover: "Se uma aplicação cliente não encaminhar um pedido através do IBM HTTP Server, o conteúdo em cache não pode ser descarregado. Pode especificar que apenas os pedidos recebidos com um cabeçalho HTTP específico (adicionado aos pedidos do IBM HTTP Server) podem aceder ao conteúdo em cache para prevenir falhas de transferência.<br><br>O cabeçalho HTTP é configurado no IBM HTTP Server e está presente em todos os pedidos recebidos encaminhados pelo IBM HTTP Server. Se um pedido não tiver um cabeçalho HTTP, o conteúdo é encaminhado pelo servidor da aplicação da Web e não pelo servidor de HTTP.",
		admin_p8_download_generate_config: "Gerar configuração",
		admin_p8_download_generate_config_label: "Configuração do IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Para que a configuração do CHDC funcione, é necessário actualizar o ficheiro httpd.conf do IBM HTTP Server. Faça clique em Gerar configuração para gerar as instruções que têm de ser adicionadas ao ficheiro httpd.conf.",

		admin_logging_viewone_pro: "Registo do ViewONE Professional:",
		admin_logging_viewone_virtual: "Registo do ViewONE Virtual:",
		admin_logging_viewone_streamer: "Registo do Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "As opções de registo do Document Streaming Server Module são aplicáveis apenas se tiver activado a transmissão em sequência para ficheiros PDF ou TIFF na secção <b>Daeja ViewONE</b> da ferramenta de administração.",
		admin_logging_viewone_redaction: "Registo do Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "As opções de registo do Permanent Redaction Server Module são aplicáveis apenas se estiver autorizado a utilizar o módulo Redaction do Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Transmitir em sequência ficheiros PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Se tiver documentos PDF de grandes dimensões no repositório, pode activar o visualizador para transmitir em sequência o conteúdo do documento para que a visualização desses documentos seja mais rápida para os utilizadores. Contudo, se a transmissão em sequência não funcionar no seu ambiente, pode desactivar a mesma.",
		admin_daeja_viewonepro_stream_tiff_documents: "Transmitir em sequência ficheiros TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Se tiver documentos TIFF de grandes dimensões no repositório, pode activar o visualizador para transmitir em sequência o conteúdo do documento para que a visualização desses documentos seja mais rápida para os utilizadores. Contudo, se a transmissão em sequência não funcionar no seu ambiente, pode desactivar a mesma.",
		admin_daeja_viewonepro_show_file_buttons: "Botões de ficheiros",
		admin_daeja_viewonepro_show_file_menus: "Menus de ficheiros",
		admin_daeja_viewonepro_enable_file_keys: "Teclas de atalho de ficheiros",
		admin_daeja_viewonepro_file_keys_hover_help: "Especifique se pretende que os utilizadores utilizem atalhos de teclado para trabalhar com ficheiros, por exemplo, para abrir ou guardar um ficheiro. Para obter mais informações sobre teclas de atalho específicas, consulte a descrição do parâmetro FileKeys no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Botões de impressão",
		admin_daeja_viewonepro_show_print_menus: "Menus de impressão",
		admin_daeja_viewonepro_enable_print_keys: "Teclas de atalho de impressão",
		admin_daeja_viewonepro_print_keys_hover_help: "Especifique se pretende que os utilizadores utilizem atalhos de teclado para imprimir ficheiros, por exemplo, imprimir página ou imprimir documento. Para obter mais informações sobre teclas de atalho específicas, consulte a descrição do parâmetro PrintKeys no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Botões de inversão",
		admin_daeja_viewonepro_annotation_tooltip: "Descrição de anotação personalizada predefinida:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Introduza o texto a apresentar quando não for especificada uma descrição para uma anotação personalizada. O texto pode incluir símbolos substituíveis. Por exemplo, o &quot;&lt;creator&gt; criou esta anotação em &lt;createdateonly&gt;.&quot; Para obter mais informações sobre símbolos substituíveis, consulte o parâmetro customAnnotationsToolTip no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Utilizar descrição personalizada predefinida",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Utilizar a descrição personalizada predefinida do sistema na caixa de texto abaixo",
		admin_daeja_viewonepro_help_url: "URL de ajuda:",
		admin_daeja_viewonepro_help_url_hover_help: "Especifique o URL da página da Web que contém documentação de ajuda para o visualizador. O botão de ajuda na barra de ferramentas do visualizador e na acção do menu de ajuda abrem a página da Web. Se não especificar um URL, o botão de ajuda e a acção do menu não são apresentados.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Contexto de recurso do carimbo de imagem:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "tarefa",
		admin_daeja_viewonepro_route_docs: "Encaminhar conteúdo não suportado para o navegador:",
		admin_daeja_viewonepro_route_docs_hover_help: "Os utilizadores podem visualizar ficheiros de imagem não suportados, encaminhando-os para o navegador, que abre a aplicação apropriada para visualizar o ficheiro. Por exemplo, para abrir um documento do Microsoft Word, o navegador utiliza o Microsoft Word Viewer.",
		admin_daeja_viewonepro_scale: "Ajustar automaticamente a imagem:",
		admin_daeja_viewonepro_scale_best: "Melhor ajuste",
		admin_daeja_viewonepro_scale_ftow: "Ajustar à largura",
		admin_daeja_viewonepro_scale_ftoh: "Ajustar à altura",
		admin_daeja_viewonepro_enable_hotkeys: "Activar teclas de atalho:",
		admin_daeja_viewonepro_show_features: "Mostrar botões e menus:",
		admin_daeja_custom_settings: "Definições adicionais:",
		admin_daeja_custom_settings_hover_help: "Pode adicionar outros parâmetros, especificando o nome e o valor do parâmetro. Por exemplo, pode especificar &quot;scrollbars&quot; e &quot;true&quot; se pretender que as barras de deslocamento sejam apresentadas quando a imagem é dimensionada com um tamanho superior ao da área de visualização. Para obter mais informações sobre nomes e valores de parâmetros, consulte o IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Descrição de anotação personalizada predefinida:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Introduza o texto a apresentar quando não for especificada uma descrição para uma anotação personalizada. O texto pode incluir símbolos substituíveis. Por exemplo, o &quot;&lt;creator&gt; criou esta anotação em &lt;createdateonly&gt;.&quot; Para obter mais informações sobre símbolos substituíveis, consulte o parâmetro customAnnotationsToolTip no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Utilizar descrição personalizada predefinida",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Utilizar a descrição personalizada predefinida do sistema na caixa de texto abaixo",
		admin_daeja_virtual_image_stamp_resource_context: "Contexto de recurso do carimbo de imagem:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "tarefa",
		admin_daeja_virtual_license_path:"Caminho dos ficheiros da licença:",
		admin_daeja_virtual_license_path_hover_help:"Especifique o caminho completamente qualificado do directório que contém os ficheiros da licença lic-server-virtual.v1 e lic-server.v1.",
		admin_default_license_path:"Utilizar o caminho dos ficheiros da licença predefinido",
		admin_license_path_specified:"Utilizar o caminho dos ficheiros da licença personalizado",

		admin_daeja_streamer: "Servidor",
		admin_daeja_streamer_cache_root: "Directório da cache:",
		admin_daeja_streamer_cache_root_hover_help: "Especifique o caminho totalmente qualificado do directório onde pretende armazenar os ficheiros em cache para um acesso mais rápido. O directório pode encontrar-se em qualquer sistema operativo ou dispositivo, como um directório de rede, se for visível como um sistema de ficheiros para o IBM Content Navigator e o IBM HTTP Server. Utilize um directório local para melhorar o desempenho.",
		admin_daeja_streamer_settings: "Definições adicionais:",
		admin_daeja_streamer_settings_hover_help: "Pode adicionar outros parâmetros, especificando o nome e o valor do parâmetro. Por exemplo, pode especificar “cookieAllowedDomainList” e uma lista separada por vírgulas de servidores de sistema central.  Para obter mais informações sobre nomes e valores de parâmetros, consulte o IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Definições:",
		admin_daeja_redaction_settings_hover_help: "Pode adicionar outros parâmetros, especificando o nome e o valor do parâmetro. Por exemplo, pode especificar “burnIncrementalAnnotations” e ”true”. Para obter mais informações sobre nomes e valores de parâmetros, consulte o IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Nova definição",
		admin_daeja_setting_dialog_title_edit: "Editar definição",
		admin_daeja_setting_dialog_hover_help: "Adicione outros parâmetros, especificando o nome e o valor dos parâmetros. Por exemplo, pode especificar “scrollbars” e “true” se pretender que sejam apresentadas barras de deslocamento quando a imagem é dimensionada para um tamanho maior do que a área de visualização.",
		admin_daeja_setting_dialog_field_hover_help: "Para obter mais informações sobre nomes e valores de parâmetros, consulte o Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Registo do Daeja ViewONE",
		admin_daeja_logging_trace: "Activar o registo de rastreio",
		admin_daeja_logging_trace_net: "Activar o registo de rede",
		admin_daeja_logging_trace_annotations: "Activar o registo de anotações",
		admin_daeja_logging_log_file: "Ficheiro de registo:",
		admin_daeja_logging_instructions: "Pode utilizar o registo para resolver problemas relacionados com o Daeja ViewONE Professional e o Daeja ViewONE Virtual. Se tiver conhecimento da ocorrência de um problema numa função específica, pode direccionar o registo para essa função.",

		admin_v1pro_logging_trace_hover: "Utilize esta definição para resolver problemas gerais relacionados com o visualizador.<br><br>As informações de registo são gravadas na consola de Java na máquina cliente. Pode aceder à consola de Java a partir do Painel de controlo (Windows) ou das Preferências do sistema (Mac) do seu sistema operativo.",
		admin_v1pro_logging_trace_net_hover: "Utilize esta definição para resolver os seguintes problemas:<ul><li>Problemas na ligação de servidor</li><li>Problemas em tipos MIME</li><li>Problemas de ficheiros demasiado grandes</li></ul>Além disso, pode utilizar o registo de rastreio de rede para determinar onde ocorrem atrasos ao utilizar o Daeja ViewONE Professional.<br><br>As informações de registo são gravadas na consola de Java na máquina cliente. Pode aceder à consola de Java a partir do Painel de controlo (Windows) ou das Preferências do sistema (Mac) do seu sistema operativo.",
		admin_v1pro_logging_trace_annotations_hover: "Utilize esta definição para resolver problemas ao criar, guardar ou carregar anotações.<br><br>As informações de registo são gravadas na consola de Java na máquina cliente. Pode aceder à consola de Java a partir do Painel de controlo (Windows) ou das Preferências do sistema (Mac) do seu sistema operativo.",

		admin_virtual_logging_trace_hover: "Utilize esta definição para resolver problemas gerais relacionados com o visualizador.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro virtual.log no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Utilize esta definição para resolver os seguintes problemas:<ul><li>Problemas na ligação de servidor</li><li>Problemas em tipos MIME</li><li>Problemas de ficheiros demasiado grandes</li></ul>Além disso, pode utilizar o registo de rastreio de rede para determinar onde ocorrem atrasos ao utilizar o Daeja ViewONE Virtual.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro virtual.log no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Utilize esta definição para resolver problemas ao criar, guardar ou carregar anotações.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro virtual.log no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Se activar o registo para o visualizador, é necessário especificar o caminho totalmente qualificado e o nome do ficheiro de registo onde pretende armazenar as informações de registo.  É recomendado atribuir ao ficheiro de registo o nome virtual.log.",

		admin_streamer_logging_trace_hover: "Utilize esta definição para resolver problemas gerais relacionados com o Document Streaming Server Module.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro streamer.log, que se encontra no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Utilize esta definição para resolver os seguintes problemas:<ul><li>Problemas na ligação de servidor</li><li>Problemas em tipos de MIME específicos</li><li>Problemas de ficheiros demasiado grandes</li></ul>Além disso, pode utilizar o registo de rastreio de rede para determinar onde ocorrem atrasos ao utilizar o Document Streaming Server Module.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro streamer.log, que se encontra no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Se activar o registo para o Document Streaming Server Module, é necessário especificar o caminho totalmente qualificado e o nome do ficheiro de registo onde pretende armazenar as informações de registo.  É recomendado atribuir ao ficheiro de registo o nome streamer.log.",

		admin_redaction_logging_trace_hover: "Utilize esta definição para resolver problemas gerais relacionados com o Permanent Redaction Server Module.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro redacttofile.log, que se encontra no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Utilize esta definição para resolver os seguintes problemas:<ul><li>Problemas na ligação de servidor</li><li>Problemas em tipos de MIME específicos</li><li>Problemas de ficheiros demasiado grandes</li></ul>Além disso, pode utilizar o registo de rastreio de rede para determinar onde ocorrem atrasos ao utilizar o Permanent Redaction Server Module.<br><br>Por predefinição, as informações de registo são gravadas no ficheiro redacttofile.log, que se encontra no subdirectório config do directório de instalação do IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Se activar o registo para o Permanent Redaction Server Module, é necessário especificar o caminho totalmente qualificado e o nome do ficheiro de registo onde pretende armazenar as informações de registo.  É recomendado atribuir ao ficheiro de registo o nome redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configure funções para os visualizadores e serviços.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Se utilizar o cliente da Web para estabelecer ligação a um ou mais repositórios do Content Manager OnDemand, é necessário especificar informações de que o OnDemand Web Enablement Kit necessita para funcionar correctamente. Estas informações são partilhadas por todos os repositórios do Content Manager OnDemand que estão configurados para o cliente da Web.",
		admin_ondemand_language: "Idioma:",
		admin_ondemand_tempdir: "Directório temporário ODWEK:",
		admin_ondemand_tracegrp: "Rastreio ODWEK",
		admin_ondemand_tracedir: "Directório de rastreio:",
		admin_ondemand_tracelevel: "Nível de rastreio:",
		admin_ondemand_tracelevel_0: "0 - Sem registo",
		admin_ondemand_tracelevel_1: "1 - Registo de mensagem de erro",
		admin_ondemand_tracelevel_2: "2 - Registo de mensagem de erro e de aviso",
		admin_ondemand_tracelevel_3: "3 - Registo de mensagem de erro, aviso e de informação",
		admin_ondemand_tracelevel_4: "4 - Todas as mensagens são recolhidas, incluindo o rastreio de função",
		admin_ondemand_max_trace_filesize: "Tamanho máximo do ficheiro de rastreio:",
		admin_ondemand_max_trace_filesize_unlimited: "Ilimitado",
		admin_ondemand_max_trace_filesize_limited: "Limitado (Recomendado)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Este valor está fora do intervalo. O valor tem de ser um número inteiro entre 1 e 1 000 000.",
		admin_ondemand_afp2pdf_installdir: "Directório de instalação AFP2PDF:",
		admin_ondemand_language_hover: "Especifique o idioma em que ODWEK devolve mensagens.",
		admin_ondemand_tempdir_hover: "Introduza o directório em que o OnDemand Web Enablement Kit armazena os ficheiros temporários durante o processamento. É necessário introduzir o caminho totalmente qualificado de um directório existente no servidor da aplicação da Web.",
		admin_ondemand_tracedir_hover: "Introduza o directório em que pretende armazenar o ficheiro de rastreio ODWEK arswww.trace. É necessário introduzir o caminho totalmente qualificado de um directório existente no servidor da aplicação da Web.",
		admin_ondemand_tracelevel_hover: "Especifique o nível de informação de registo gravado no ficheiro arswww.trace. <b>Registo de mensagem de erro</b> recolhe a menor quantidade de informação de registo. <b>Todas as mensagens são recolhidas, incluindo o rastreio de função</b> recolhe a maior quantidade de informação.<br /><br />Não especifique <b>Todas as mensagens são recolhidas, incluindo o rastreio de função</b> num ambiente de produção, excepto se o suporte de Software IBM fornecer essa indicação.",
		admin_ondemand_max_trace_filesize_hover: "Especifique se o ficheiro de rastreio ODWEK pode atingir um tamanho ilimitado ou se pretende que o cliente da Web crie novos ficheiros de registo quando o ficheiro de registo atingir um determinado tamanho. A predefinição consiste em permitir que o tamanho do ficheiro de registo de rastreio aumente até a aplicação da Web ser interrompida no servidor da aplicação da Web.",
		admin_ondemand_max_trace_unlimited_hover: "Seleccione esta opção se pretender que a informação de registo ODWEK seja gravada num único ficheiro de registo. Se seleccionar esta opção, poderá obter um ficheiro de registo demasiado grande para ser aberto com um visualizador de ficheiros padrão.",
		admin_ondemand_max_trace_limited_hover: "Seleccione esta opção se pretender que a informação de registo ODWEK seja gravada em ficheiros de registo menores. Quando um ficheiro de registo atinge o tamanho máximo, o nome do registo actual é alterado de forma a incluir a data (arswww.trace.AAAAMMDD.HHMMSS) e é criado um novo ficheiro de registo.",
		admin_ondemand_afp2pdf_installdir_hover: "Se pretender utilizar o utilitário AFP2PDF Transform para converter documentos AFP para documentos PDF para visualização e impressão, especifique o directório em que o utilitário AFP2PDF Transform está instalado no servidor da aplicação da Web. Por exemplo: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administradores",
		admin_adminusers_heading_text_multi: "Tem de especificar que utilizadores têm privilégios de administrador no cliente da Web. Apenas os administradores podem iniciar sessão no ambiente de trabalho de administração.<br /><br /><b>Importante:</b> Os IDs de utilizador dos administradores do IBM Content Navigator têm de corresponder:<ul><li>IDs de utilizador existentes no servidor de aplicação da Web. Os IDs de utilizador não têm de ser administradores no servidor da aplicação da Web.</li><li>IDs de utilizador existentes no repositório predefinido configurado para cada ambiente de trabalho que inclui a funcionalidade de administração.</li></ul>",
		admin_adminusers_heading_text_single: "Tem de especificar que utilizadores têm privilégios de administrador no cliente da Web. Apenas os administradores podem iniciar sessão no ambiente de trabalho de administração.<br /><br /><b>Importante:</b> Os IDs de utilizador dos administradores do IBM Content Navigator têm de corresponder aos IDs de utilizador existentes no servidor da aplicação da Web. Os IDs de utilizador não têm de ser administradores no servidor da aplicação da Web.",
		admin_adminusers_newuser: "Novo administrador:",
		admin_adminusers_add: "Adicionar",
		admin_adminusers_remove: "Remover",
		admin_adminusers_listheading: "Administradores",
		admin_adminusers_nameInvalid: "O valor não pode ser um duplicado.",

		admin_sync_server_instructions: "<b>Apenas utilizadores do FileNet P8:</b> Se pretender activar os serviços de sincronização para um ou mais repositórios, tem de configurar o cliente da Web para utilizar serviços de sincronização. A configuração dos serviços de sincronização é partilhada por todos os repositórios no ambiente.",
		admin_settings_instructions: "Os valores especificados no separador de definições são aplicáveis a todos os ambientes de trabalho na configuração.",
		admin_autocomplete: "Preencher automaticamente os nomes de utilizador:",
		admin_autocomplete_hover: "Especifique se pretende que o cliente da Web armazene os nomes de utilizador em cookies do navegador para que o navegador preencha automaticamente os nomes de utilizador no cliente da Web durante o início de sessão.<br><br>Se activar esta opção, o nome de utilizador do último utilizador a iniciar sessão no cliente da Web é armazenado nos cookies do navegador e é automaticamente apresentado na página de início de sessão quando um utilizador abre o cliente da Web.<br><br>Deverá desactivar esta opção se aplicação foi acedida a partir de estações de trabalho partilhadas ou não pretender armazenar nomes de utilizador nos cookies do navegador.<br /><br />Esta opção não é aplicável a aplicações móveis ou personalizadas.",
		admin_autocomplete_enable: "Activar",
		admin_autocomplete_disable: "Desactivar",
		admin_cultural_collation: "Utilizar ordenação específica da região:",
		admin_cultural_collation_hover: "Se activar a ordenação específica da região, a ordenação é efectuada no servidor do repositório. Tal pode reduzir o desempenho do cliente da Web.<br><br>Desactivar a ordenação específica da região pode melhorar o desempenho do cliente da Web.",
		admin_cultural_collation_enable: "Activar",
		admin_cultural_collation_disable: "Desactivar",
		admin_base_ui_style: "Estilo do tema",
		admin_base_ui_style_hover: "Especifique o estilo do tema predefinido que é utilizado no cliente da Web. Este estilo apenas é utilizado em ambientes de trabalho que utilizem o tema <b>Predefinido</b> (como especificado no separador <b>Aspecto</b> na configuração do ambiente de trabalho).<br/></br><b>Restrição:</b> Se as configurações do ambiente de trabalho utilizam temas personalizados, os temas personalizados são baseado no estilo clássico, independentemente do estilo que seleccionar.",
		admin_base_ui_style_classic: "Clássico",
		admin_access_control_access: "Limitar o acesso a utilizadores e grupos específicos",
		admin_access_control_access_show: "Mostrar dados de controlo de acesso",
		admin_access_control_access_enable: "Sim",
		admin_access_control_access_disable: "Não",
		admin_mobile_access: "Permitir acesso a partir de aplicações móveis",
		admin_mobile_access_hover: "Por predefinição, os utilizadores podem aceder ao cliente da Web a partir da aplicação IBM Content Navigator para iOS.<br /><br /><b>Importante:</b> Se não permitir que os utilizadores acedam ao cliente da Web a partir da aplicação iOS, os utilizadores podem continuar a aceder ao cliente da Web a partir dos navegadores da Web nos seus dispositivos móveis e a partir de quaisquer aplicações personalizadas utilizando as APIs do IBM Content Navigator e compatíveis com dispositivos móveis.",
		admin_mobile_access_enable: "Sim",
		admin_mobile_access_disable: "Não",
		admin_error: "Informação de mensagem de erro:",
		admin_error_custom: "Procurar conteúdo de suporte personalizado",
		admin_error_default: "Procurar conteúdo de IBM Support <BDO DIR='LTR'>(</BDO>predefinição<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Especifique se pretende encaminhar os utilizadores para obter mais informações quando é apresentada uma mensagem de erro. Pode encaminhar os utilizadores para as informações no IBM Support Portal ou para um recurso interno, como, por exemplo, o Help Desk.",
		admin_error_URL: "Prefixo de URL:",
		admin_error_URL_hover: "Introduza o URL do recurso que pretende indicar aos utilizadores quando ocorre um erro, como direccionar para o help desk. Por exemplo: http://localhost:port_number. O cliente da Web anexa o número da mensagem ao URL.",
		admin_prompt_close_without_save: "Pretende fechar sem guardar as alterações?",
		admin_object_expiration_time: "Intervalo de actualização da cache (em minutos):",
		admin_object_expiration_time_hover: "É possível aumentar o período de tempo que os objectos de configuração, tais como ambientes de trabalho, são mantidos na cache para melhorar o desempenho do cliente da Web. O período de tempo predefinido é 10 minutos. O tempo máximo é 1440 minutos (1 dia).<br /><br />É necessário reiniciar a aplicação da Web para que as alterações sejam aplicadas.<br /><br />Se o IBM Content Navigator estiver implementado num ambiente de conjunto de unidades de elevada disponibilidade, quaisquer alterações efectuadas aos objectos de configuração não serão propagadas aos nós do conjunto de unidades até que a cache seja actualizada.",
		admin_temp_file_cleanup_interval: "Intervalo de verificação para limpar memória cache do visualizador (em horas):",
		admin_temp_file_cleanup_interval_hover: "Agendar a frequência da verificação do directório temporário para localizar e eliminar ficheiros temporários expirados. Por predefinição, o directório temporário é verificado a cada seis horas. Pode especificar entre 6 a 48 horas.",
		admin_temp_file_expiration_interval: "Expirar memória cache do visualizador (em horas):",
		admin_temp_file_expiration_interval_hover: "Especifique o tempo que os ficheiros temporários relacionados com as actividades no visualizador permanecem na memória cache do navegador. Por predefinição, esses ficheiros temporários expiram após 24 horas. Pode especificar entre 12 e 48 horas.",
		admin_encryption_key_hover: "Chave utilizada para funções de encriptação do Navigator.",
		admin_encryption_key: "Chave de encriptação:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Personalização",
		admin_mobile_branding_main_color: "Cor principal:",
		admin_mobile_branding_secondary_color: "Cor secundária:",
		admin_mobile_device_title: "Gestão MaaS360",
		admin_mobile_device_enable_maas360: "Activar MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Ajuda de sobreposição para activar MaaS360",
		admin_mobile_device_maas360_developer_id: "ID de programador MaaS360:",
		admin_mobile_device_maas360_license_key: "Código de licença MaaS360:",
		admin_mobile_settings_title: "Definições",
		admin_mobile_email_address_hover_help: "O endereço de correio electrónico utilizado na aplicação móvel quando um utilizador faz clique em \"Enviar relatório de erro\".",
		admin_mobile_email_address: "Endereço de correio electrónico:",
		admin_invalid_email_address_message: "O endereço de correio electrónico introduzido não está no formato correcto. Introduza o endereço correcto e tente novamente.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Alguns dados não são válidos.",
		admin_configuration_parameters: "Parâmetros de configuração",
		admin_configuration_optional_features: "Funcionalidades opcionais",
		admin_configuration_optional_features_p8_instructions: "Seleccione as funcionalidades que pretende activar neste repositório.<p><b>Importante:</b> Se activar uma funcionalidade que instala um suplemento no repositório, tem de estar ligado ao repositório como administrador do Content Platform Engine ou do Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Seleccione as funcionalidades que pretende activar neste repositório.<p><b>Importante:</b> Estas funcionalidades modificam o modelo de dados no repositório. Para activar as mesmas, tem de estar ligado ao repositório como administrador de servidor de biblioteca.</p>",
		admin_system_properties: "Propriedades do sistema",
		admin_system_properties_for: "Propriedades de sistema para:",
		admin_available_properties: "Propriedades disponíveis",
		admin_displayed_properties: "Propriedades apresentadas",
		admin_selected_properties: "Propriedades seleccionadas",
		admin_selected_filtered_properties: "Propriedades ocultas",
		admin_available_operators: "Operadores apresentados",
		admin_selected_filtered_operators: "Operadores ocultos",
		admin_system_properties_shown: "Propriedades apresentadas",
		admin_system_properties_hidden: "Propriedades ocultas",
		admin_available_menu_items: "Acções disponíveis:",
		admin_selected_menu_items: "Acções seleccionadas:",
		admin_menu_global: "Aplicável quando não estão seleccionados itens:",
		admin_menu_multiple_document: "Aplicável quando estão seleccionados vários itens:",
		admin_menu_privileges: "Privilégios requeridos:",
		admin_menu_plugin: "Suplemento:",
		admin_menu_repository_types: "Tipos de repositório:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separador",
		admin_browse: "Pesquisar",
		admin_search: "Procurar",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redacção baseada em função",
		admin_connections_library_enabled: "IBM Connections activado",
		admin_office_conf: "Integração de Edição",
		admin_desktop_conf_label: "Configuração do ambiente de trabalho",
		admin_ms_office_conf_label: "Configuração do Office",
		admin_workflows: "Fluxos de trabalho",
		admin_file_types: "Tipos de ficheiro",
		admin_file_type_contains_label: "Tipo de ficheiro contém",
		admin_name_propepty: "Nome",
		admin_cm_name_property_default: "Utilizar nome predefinido",
		admin_cm_name_property_default_hover: "Por predefinição, a propriedade de nome hierárquico ICM (ICM$NAME) é utilizada como nome do item, caso a propriedade esteja definida para o item.  Se a propriedade de nome hierárquico ICM (ICM$NAME) não estiver disponível, a primeira propriedade que estiver sinalizada como \"represents\" é utilizada como o nome do item.",
		admin_cm_name_property: "Especificar propriedade de nome de item",
		admin_cm_name_property_hover: "Especifique que propriedade é utilizada como nome de documentos e pastas.",
		admin_name_property: "Propriedade de nome:",
		admin_doc_name_property: "Propriedade do nome do documento:",
		admin_doc_name_property_hover: "Especifique que propriedade é utilizada como nome do documento.",
		admin_folder_name_property: "Propriedade do nome da pasta:",
		admin_folder_name_property_hover: "Especifique que propriedade é utilizada como nome da pasta.",
		admin_all_searches_label: "Número de procuras a apresentar:",
		admin_unlimited: "Sem limite",
		admin_limit: "Limite de",
		admin_repository: "Repositório:",
		admin_application_space: "Espaço da aplicação",
		admin_available_application_spaces: "Espaços da aplicação disponíveis:",
		admin_selected_application_spaces: "Espaços da aplicação seleccionados:",
		admin_label: "Etiqueta",
		admin_repository_box_placeholder: "Seleccionar um repositório do Box",
		admin_repository_placeholder: "Seleccionar um repositório",
		admin_search_match: "Correspondência:",
		admin_search_match_all: "Corresponder a todos os critérios de procura",
		admin_search_match_any: "Corresponder a qualquer um dos critérios de procura",
		admin_search_match_hover: "Especifique que opção está seleccionada por predefinição no menu <b>Opções de propriedade</b>.",

		admin_repository_redactions_instructions: "Pode configurar redacções baseadas em funções para este repositório.",
		admin_repository_redaction_policies_description: "Pode criar e gerir políticas de redacção, que associam motivos de redacção a utilizadores e grupos que podem ler dados sensíveis e editar anotações que ocultam esses dados sensíveis.",
		admin_repository_redaction_roles_instruction: "Pode criar uma função de redacção para associar os utilizadores e grupos especificados com a possibilidade de ler dados sensíveis ou de editar anotações que ocultam dados sensíveis. A função de redacção têm de estar associada a um motivo de redacção numa política de redacção antes que esses utilizadores e grupos possam ler os dados ou editar as anotações.",
		admin_repository_redaction_reasons_instruction: "Pode configurar motivos de redacção para o seu repositório.",
		admin_repository_redaction_policies: "Configuração da política de redacção",
		admin_repository_redaction_roles: "Configuração das funções de redacção",
		admin_repository_redaction_reasons: "Configuração dos motivos de redacção",
		admin_repository_redaction_roles_type: "Tipo",
		admin_repository_redaction_roles_type_hover: "Um editor por criar, modificar ou eliminar tipos específicos de redacções baseadas em funções e um visualizador pode visualizar tipos específicos de dados sensíveis.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Visualizador",
		admin_repository_redaction_roles_membership: "Filiação",
		admin_repository_redaction_roles_membership_hover: "Seleccione os editores a quem pretende atribuir esta função.",
		admin_repository_redaction_roles_user_group_hover: "Procure os utilizadores e grupos ou seleccione os editores que pretende que tenham esta função.",
		admin_repository_redaction_roles_description: "Pode criar e gerir funções de redacção, que associam utilizadores e grupos a utilizadores e grupos que podem ler dados sensíveis e editar anotações que ocultam esses dados sensíveis.",
		admin_repository_redaction_new: "Nova função de redacção",
		admin_repository_redaction_role_avail_editors: "Editores de redacção disponíveis",
		admin_repository_redaction_role_avail_users: "Utilizadores disponíveis",
		admin_repository_redaction_role_avail_groups: "Grupos disponíveis",
		admin_repository_redaction_role_selected_editors: "Editores de redacção seleccionados",
		admin_repository_redaction_role_selected_users_groups: "Utilizadores e grupos seleccionados",
		admin_repository_redaction_role_add_editor: "Novos editores...",
		admin_repository_redaction_role_access_type: "Acesso",
		admin_repository_redaction_role_access_type_access: "Permitir",
		admin_repository_redaction_role_access_type_no_access: "Recusar",
		admin_repository_redaction_role_users: "Utilizadores",
		admin_repository_redaction_role_groups: "Grupos",
		admin_repository_redaction_role_editors: "Editores",
		admin_delete_confirmation_redaction_roles: "Pretende eliminar a função de redacção seleccionada?",
		admin_repository_edit_redaction_role: "Função de redacção: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Acesso predefinido",
		// RBA
		desktop_user_group_acl: "Administradores de ambiente de trabalho",
		desktop_user_group_remove: "Remover",
		desktop_rba_membership: "Filiação:",
		desktop_rba_membership_list_label: "Nome",
		admin_repository_redaction_policy_hover: "Indique uma descrição que irá permitir aos utilizadores distinguir entre esta política e as outras políticas.",
		admin_repository_new_redaction_policy: "Nova política de redacção",
		admin_repository_policy_name: "Nome da política",
		admin_repository_reason_redactions: "Motivos da redacção:",
		admin_repository_role_editors: "Editores",
		admin_repository_role_viewers: "Visualizadores",
		admin_repository_redaction_policy_instruction: "Pode criar uma política de redacção para associar os motivos de redacção seleccionados a editores de redacção e visualizadores de redacção.",
		admin_repository_redaction_reasons_hover: "Seleccione um ou mais tipos de dados sensíveis que não pretende que sejam visíveis pelos utilizadores, por exemplo, informações pessoais, dados empresariais ou informações confidenciais ou proprietárias.",
		admin_repository_readaction_available_reasons: "Motivos disponíveis",
		admin_repository_readaction_selected_reasons: "Motivos seleccionados",
		admin_repository_readaction_new_reason: "Novo motivo...",
		admin_repository_redeaction_reasons: "Motivos da redacção:",
		admin_repository_readaction_editor_permmission: "Editores da redacção:",
		admin_repository_redaction_editors_hover: "Seleccione as funções que podem criar e modificar a redacção para os motivos seleccionados.",
		admin_repository_readaction_new_editor_role: "Nova função de editor...",
		admin_repository_readaction_available_editors: "Funções de editor disponíveis",
		admin_repository_readaction_selected_editors: "Funções de editor seleccionadas",
		admin_repository_readaction_viewer_permmission: "Visualizadores da redacção:",
		admin_repository_redaction_viewers_hover: "Seleccione as funções que podem visualizar os dados sensíveis para os motivos seleccionados. A redacção não é aplicada a utilizadores e grupos com estas funções.",
		admin_repository_readaction_new_viewer_role: "Nova função de visualizador...",
		admin_repository_readaction_available_viewers: "Funções de visualizador disponíveis",
		admin_repository_readaction_selected_viewers: "Funções de visualizador seleccionadas",
		admin_repository_reason_redactions_header: "Motivos da redacção",
		admin_delete_confirmation_redaction_policy: "Pretende eliminar a política de redacção seleccionada?",
		admin_role_type_repository: "Repositório",
		admin_role_type_administrator: "Administrador",
		admin_role_type_template: "Modelo",
		admin_role_type_teamspace: "Espaço de equipa",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Visualizador",
		admin_collaboration_services_instructions: "Se tiver o IBM Connections e uma aplicação da Web do FileNet Collaboration Services, pode configurar espaços de equipa da comunidade e sequências de actividades para o repositório.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configuração da biblioteca da comunidade",
		admin_collaboration_community_instruction: "Pode configurar um repositório no seu domínio do IBM FileNet P8 para armazenar bibliotecas de comunidade do IBM Connections (também denominadas como espaços de equipa). Quando os utilizadores criam uma biblioteca de comunidade com o IBM Connections, esta é armazenada no repositório designado como o repositório da biblioteca da comunidade.",
		admin_collaboration_community_teamspaces: "Utilize este repositório para as bibliotecas da comunidade:",
		admin_collaboration_community_teamspaces_hover: "Pode utilizar apenas um repositório no domínio do IBM FileNet P8 para armazenar novas bibliotecas da comunidade. Se activar este repositório e tiver um repositório existente, o repositório existente será desactivado. Contudo, quaisquer bibliotecas existentes permanecem no repositório actual.",
		admin_collaboration_connections_anonymous: "Permitir acesso anónimo a conteúdo público:",
		admin_collaboration_connections_anonymous_hover: "Se o servidor do IBM Connections incluir comunidades públicas ou moderadas, pode configurar o FileNet Collaboration Services para permitir que os utilizadores pesquisem e transfiram conteúdo das bibliotecas nessas comunidades sem que seja necessário iniciar sessão primeiro.<br><br>Os utilizadores que acedem às bibliotecas da comunidade de forma anónima não podem criar, modificar ou eliminar conteúdo.<br><br><b>Importante:</b> É necessário designar um utilizador de LDAP do IBM FileNet P8 como utilizador anónimo e configurar esse utilizador com a função <b>Anónimo</b> no WebSphere Application Server.",
		admin_collaboration_connections_url: "URL do IBM Connections:",
		admin_collaboration_connections_url_hover: "Especifique o URL para o servidor do IBM Connections com o formato http://IBMConnectionsServer:número_da_porta.  Se o IBM Connections estiver configurado para utilizar o IBM HTTP Server, pode omitir o número de porta do URL.<br><br>O URL tem de estar acessível aos utilizadores do IBM Connections, uma vez que esta é a ligação que o FileNet Collaboration Services utiliza para criar ligações para páginas iniciais de documentos no IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilizar o URL do IBM Connections",
		admin_collaboration_connections_url_https_use: "Utilizar o URL de HTTPS do IBM Connections",
		admin_collaboration_connections_url_specify: "Especifique o URL",
		admin_collaboration_connections_url_https: "URL de HTTPS do IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Se o IBM Connections estiver configurado para utilizar SSL, especifique o URL HTTPS para o servidor IBM Connections com o formato https://IBMConnectionsServer:número_da_porta.  Se o IBM Connections estiver configurado para utilizar o IBM HTTP Server, pode omitir o número de porta do URL.",

		admin_collaboration_connections_gadget_url: "URL do gadget do IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL de obtenção do IBM Connections:",
		admin_collaboration_connections_security: "Administrador da comunidade:",
		admin_collaboration_connections_security_hover: "Especifique os utilizadores e os grupos que podem administrar conteúdo nas bibliotecas da comunidade.<br><br>Os administradores globais podem criar, modificar, eliminar e fornecer acesso às bibliotecas da comunidade e aos conteúdos das bibliotecas da comunidade. Quando especifica um utilizador como administrador global, o utilizador tem privilégios de ClbGlobalAdministrator no repositório.<br><br>Os administradores de revisão globais podem aprovar e rejeitar conteúdo em revisão para publicação numa biblioteca da comunidade. Quando especifica um utilizador como administrador de revisão global, o utilizador tem privilégios de ClbGloablReviewAdministrator no repositório.",

		admin_collaboration_connections_admins: "Administradores globais",
		admin_collaboration_connections_admins_review: "Administradores de revisão globais",
		admin_collaboration_connections_seedlist: "Indexar os conteúdos da biblioteca da comunidade:",
		admin_collaboration_connections_seedlist_hover: "Especifique se pretende que o IBM Connections pesquise nas bibliotecas da comunidade neste repositório para criar um índice de procura. Criar um índice pode afectar o desempenho do repositório.<br><br>Se as Social Collaboration Search Indexing Extensions estiverem instaladas no repositório, esta opção está activada por predefinição. Se as Social Collaboration Search Indexing Extensions não estiverem instaladas no repositório, o suplemento é instalado no repositório quando activar esta opção",
		admin_collaboration_activity_stream: "Configuração de evento de transmissão de actividade",
		admin_collaboration_activity_stream_label: "Enviar a informação de evento para o IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Especifique se pretende enviar informação de evento, tais como criação de documentos, saídas dadas, entradas, comentários, etiquetas e partilhas para o IBM Connections.<br><br><b>Importante:</b> O envio de notificações para o IBM Connections pode afectar o desempenho do repositório.",

		admin_collaboration_activity_stream_instruction: "Pode configurar este repositório para enviar informação de evento, tais como comentários e aprovações de documentos, para o IBM Connections. Os eventos são apresentados na página <b>Actualizações recentes</b> nas comunidades do IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorar informação de evento para grupos e utilizadores específicos:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Pode ignorar eventos gerados por grupos ou utilizadores específicos, tais como administradores ou contas de sistemas, para reduzir o número de notificações apresentadas ao utilizador. Por exemplo, se estiver a migrar conteúdo, poderá especificar que os eventos gerados pela conta utilizada para a migração sejam ignorados.",
		admin_collaboration_activity_stream_userid: "Nome de utilizador do IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Especifique a conta do sistema que o Content Platform Engine irá utilizar para autenticar e enviar informação de evento para o IBM Connections. O utilizador tem de ter a função <b>trustedExternalApplication</b> na aplicação Widget Container no IBM Connections.<br><br><b>Sugestão:</b> Por predefinição, o administrador do IBM Connections tem os privilégios necessários. Pode utilizar o ID de administrador como nome de utilizador",
		admin_collaboration_activity_stream_password: "Palavra-passe de utilizador do IBM Connections:",

		admin_help_url: "URL de ajuda do utilizador final:",
		admin_help_url_hover: "<b>Nota importante:</b> O cliente do IBM Knowledge Center instalado não será actualizado a partir do IBM Content Navigator Versão 3.0.0. Contacte a assistência a clientes para obter mais informações sobre a utilização da ajuda personalizada.<br><br>A partir do IBM Content Navigator Versão 3.0.0, o URL para a ajuda de utilizador final remete para o IBM Knowledge Center. O URL para o IBM Knowledge Center é: http://www.ibm.com/support/knowledgecenter.<br><br>Se pretender continuar a utilizar uma versão anterior do cliente do IBM Knowledge Center instalado, especifique o URL da instância do cliente do IBM Knowledge Center instalado implementado pela ferramenta de implementação e configuração do IBM Content Navigator. O URL tem de estar acessível a máquinas cliente. O URL tem o formato http://nome_servidor:número_porta/kc.<br><br>Pode obter o nome do servidor e o número de porta no ficheiro console.log no subdirectório KnowledgeCenter/logs do directório de instalação do IBM Content Navigator.",

		admin_help_default: "Utilizar a ajuda predefinida fornecida pela IBM",
		admin_custom_help: "Utilizar um sistema de ajuda personalizado",
		admin_help_kc: "Utilizar ajuda personalizada no IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Nota importante:</b> O cliente do IBM Knowledge Center instalado não será actualizado a partir do IBM Content Navigator Versão 3.0.0. Contacte a assistência a clientes para obter mais informações sobre a utilização da ajuda personalizada.<br><br>Se pretender continuar a utilizar uma versão anterior do cliente do IBM Knowledge Center instalado, seleccione esta opção para continuar a adicionar conteúdo à instância do cliente do IBM Knowledge Center instalado já implementada.",
		admin_help_taxonomy: "Código de taxonomia:",
		admin_help_taxonomy_hover: "Especifique o código de taxonomia para a ajuda personalizada.<br><br>O código de taxonomia para o IBM Content Navigator é SSEUEX. Se pretender visualizar a ajuda sob um nome de produto diferente no IBM Knowledge Center Customer Installed, terá de adicionar um código de taxonomia exclusivo ao ficheiro KC_taxonomy.ditamap no directório KnowledgeCenter/usr/taxonomy do directório de instalação do IBM Content Navigator.",
		admin_help_context: "Contexto da ajuda:",
		admin_help_context_hover: "Especifique o contexto para a ajuda personalizada.<br><br>A ajuda para o IBM Content Navigator está localizada no directório KnowledgeCenter/usr/content/com.ibm.usingeuc.doc do directório de instalação do IBM Content Navigator. O contexto da ajuda predefinida é com.ibm.usingeuc.doc. Se pretender fornecer ajuda personalizada, adicione o conteúdo a um novo subdirectório no directório KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Página de destino:",
		admin_help_welcome_hover: "Especifique o nome do tópico que pretende utilizar como a página de destino quando os utilizadores acederem à ajuda. É necessário criar um ficheiro de propriedades que especifique a localização da página de destino e adicionar o ficheiro de propriedades ao directório KnowledgeCenter/usr/conf do directório de instalação do IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Ficheiro JSON de Extensões do Tipo Mime:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verifique o nome do ficheiro JSON e o caminho completo para o ficheiro. O ficheiro pode ser um ficheiro normal do sistema de ficheiros ou um URL que aponta para o ficheiro JSON.  <br><br>O conteúdo do ficheiro JSON é uma matriz para definições de tipo mime. <br><br>Uma definição de Tipo Mime inclui quatro chaves \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". As duas primeira chaves \"mimeTypes\", \"extensions\" são obrigatórias e podem ser matrizes de cadeias de caracteres que são separadas por \",\". A últimas duas chaves \"fileType\", \"iconName\" são opcionais. <br><br>Por exemplo: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuração do Gestor de tarefas",
		admin_taskmanager_service: "Serviço de gestor de tarefas:",
		admin_taskmanager_service_hover: "Especifique se pretende utilizar o serviço de gestor de tarefas para criar e executar tarefas assíncronas. <br><br>Se alterar esta definição, terá de reiniciar a aplicação da Web IBM Content Navigator para que as alterações sejam aplicadas.",
		admin_taskmanager_url: "URL do serviço de gestor de tarefas:",
		admin_taskmanager_url_hover: "Especifique o URL através do qual outras aplicações podem comunicar com o serviço de gestor de tarefas. O URL tem o formato http://nome_servidor:número_porta/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Directório de registo do gestor de tarefas:",
		admin_taskmanager_logdirectory_hover: "Por predefinição, os ficheiros de registo para o serviço de gestor de tarefas são gravados no mesmo directório que os ficheiros de registo do servidor da aplicação da Web. <br><br>Se pretender que as informações de registo sejam gravadas num directório diferente no servidor do IBM Content Navigator, especifique o caminho totalmente qualificado do directório onde pretende armazenar os ficheiros de registo gerados pelo componente de gestor de tarefas. <br><br>Se alterar esta definição, terá de reiniciar a aplicação da Web IBM Content Navigator para que as alterações sejam aplicadas.",
		admin_taskmanager_heartBeatMonitor: "Monitorização de sinal do conjunto de unidades",
		admin_taskmanager_heartBeatMonitor_hover: "Apenas ambientes de conjunto de unidades de elevada disponibilidade. Se activar esta opção, o serviço de gestor de tarefas reencaminha tarefas de nós que se encontram actualmente inactivos para nós que se encontrem em execução. <br><br>Se alterar esta definição, terá de reiniciar a aplicação da Web IBM Content Navigator para que as alterações sejam aplicadas.",

		admin_syncserver_title: "Configuração do Sync Server",
		admin_syncserver_enable: "Serviços de sincronização:",
		admin_syncserver_enable_hover: "Especifique se pretende que os utilizadores que acedem a este ambiente de trabalho possam sincronizar os respectivos itens ao longo das suas estações de trabalho e dispositivos móveis.<br><br><b>Importante:</b> Para utilizar esta função, tem de executar também as seguintes tarefas:<ul><li>Especifique o <b>URL público dos serviços de sincronização</b> na secção <b>Serviços de sincronização</b> da ferramenta de administração.</li><li>Adicione um repositório para o qual os serviços de sincronização estejam activados para este ambiente de trabalho.</li></ul>Se desactivar esta opção, mas adicionar um repositório para o qual os serviços de sincronização estejam activados para este ambiente de trabalho, a definição no repositório é ignorada.",
		admin_mobileqr_enable: "Mostrar código QR do IBM Navigator na página de início de sessão:",
		admin_mobileqr_enable_hover: "Active esta opção caso pretenda apresentar o código QR para a aplicação móvel do IBM Navigator na página de início de sessão do cliente da Web.<br><br>Quando um utilizador analisa o código QR, é levado para a loja de aplicações apropriada para o respectivo dispositivo, onde poderá descarregar a aplicação móvel do IBM Navigator.",

		admin_streamlineservice_enable: "Serviço de edição:",
		admin_streamlineservice_enable_hover: "Apenas utilizadores do FileNet P8. Active esta opção caso pretenda que os utilizadores do ambiente de trabalho possam adicionar e editar documentos facilmente a partir de aplicações nativas nas respectivas estações de trabalho. <br><br>Para utilizar esta definição, também é necessário: <ul><li>Activar o serviço de edição num ou mais repositórios associados a este ambiente de trabalho</li><li>Instalar o cliente IBM Content Navigator Edit em estações de trabalho dos utilizadores</li></ul>",

		admin_repository_general_instructions: "Tem de estabelecer ligação ao repositório antes de configurar parâmetros, propriedades de sistema, pastas, etc.",
		admin_repository_system_instructions: "Especifique as propriedades de sistema apresentadas para os documentos e pastas neste repositório.",

		admin_desktop_general_create_instructions: "Um ambiente de trabalho determina a visualização e as acções que um utilizador pode efectuar quando inicia sessão no cliente da Web. Após criar um ambiente de trabalho, pode enviar o URL do mesmo para os utilizadores para que possam aceder ao ambiente de trabalho.",
		admin_desktop_admin_instructions: "O ambiente de trabalho de administração é fornecido com o cliente da Web para permitir aos utilizadores administrativos configurar o cliente da Web. Este ambiente de trabalho tem acesso a todos os repositórios configurados para o cliente da Web.",
		admin_desktop_repositories_instructions: "Especifique os repositórios a que os utilizadores devem ter acesso a partir deste ambiente de trabalho. É necessário configurar os repositórios antes de adicionar os mesmos ao ambiente de trabalho.<br><br><b>Sugestão:</b> Pode limitar quais os repositórios disponíveis para cada função ao configurar o esquema do ambiente de trabalho.",
		admin_desktop_menus_instructions: "Especifique os menus a que os utilizadores devem ter acesso a partir deste ambiente de trabalho. Os menus especificam as acções disponíveis, conforme os itens seleccionados na interface.<br><br><b>Sugestão:</b> Pode personalizar os conteúdos dos menus na secção <b>Menus</b> da ferramenta de administração ou pode criar novos tipos de menus, criando suplementos.",

		admin_desktop_no_repositories: "Não existem repositórios configurados.",

		admin_desktop_id_hover: "O ID de ambiente de trabalho está incluído no URL do cliente da Web e especifica que ambiente de trabalho está aberto quando um utilizador inicia sessão no cliente da Web. O ID tem de ser exclusivo e não pode ser alterado após guardar o ambiente de trabalho.<br><br>O ID pode incluir apenas caracteres alfanuméricos e é sensível a maiúsculas e minúsculas.",
		admin_desktop_id_disabled_hover: "Não é possível alterar o ID do ambiente de trabalho. Se pretender utilizar um ID diferente, terá de criar um ambiente de trabalho novo.",
		admin_desktop_name_hover: "O nome do ambiente de trabalho não pode incluir os caracteres seguintes: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "A configuração pode conter apenas um ambiente de trabalho predefinido.",

		admin_repository_id_disabled_hover: "Não é possível alterar o ID do repositório. Se pretender utilizar um ID diferente, terá de criar uma nova ligação ao repositório.",
		admin_printService_enable: "Imprimir com o serviço de impressão IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Se optar por permitir o serviço de impressão IBM Daeja ViewONE, os documentos são convertidos para formato PDF e a impressão pode ser concluída utilizando qualquer navegador da Web.<br><br>Se optar por desactivar o serviço de impressão IBM Daeja ViewONE, está limitado a imprimir documentos apenas em navegadores da Web com suporte de applets de Java.  Alguns navegadores da Web não suportam applets de Java e por isso não suportam a impressão de applet.<br><br>Consulte a documentação para saber quais os navegadores suportados.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Directório inicial do utilizador",
		admin_file_tracking_doc_directory_my_documents: "Directório de documentos do utilizador",
		admin_file_tracking_doc_directory_qp: "Caminho qualificado",
		admin_file_tracking_section_tile: "Configuração de rastreio de ficheiros",
		admin_file_tracking_home_path: "Caminho inicial",
		admin_file_tracking_my_documents: "Os meus documentos",
		admin_file_tracking_exact_path: "Caminho totalmente qualificado:",
		admin_file_tracking_qp: "Caminho qualificado",
		admin_file_tracking_ev: "Variável de ambiente",
		admin_file_tracking_ev_us: "Variável de ambiente personalizada ",
		admin_file_tracking_del_local_copy: "Eliminar cópia local:",
		admin_file_tracking_yes: "Sim",
		admin_file_tracking_no: "Não",
		admin_file_tracking_del_local_copy_rt_state_editable: "Permitir que os utilizadores substituam esta definição",
		admin_file_tracking_del_local_copy_rt_state1: "Sim",
		admin_file_tracking_del_local_copy_rt_state2: "Não",
		admin_file_Tracking_label: "Rastreio de ficheiros:",
		admin_file_Tracking_disable: "Desactivar",
		admin_file_Tracking_enable: "Activar",
		admin_file_tracking_label_hover_help: "O rastreio de ficheiros utiliza uma applet para dar saída e descarregar documentos para um directório específico nas máquinas dos utilizadores. A applet também permite ao IBM Content Navigator localizar documentos nas máquinas dos utilizadores quando os utilizadores dão entrada de documentos.",
		admin_file_tracking_doc_directory: "Localização de armazenamento:",
		admin_file_tracking_open_file: "Abrir ficheiro automaticamente",
		admin_file_Tracking_append_qualified_path: "Anexar directório",
		admin_file_Tracking_append_qualified_path_hover_help: "Pode anexar um directório ao fim da variável de ambiente se pretender guardar documentos num subdirectório específico. <br/><br/>Por exemplo, pode especificar que os documentos são descarregados para um directório <i>EnterpriseDocuments</i> no directório inicial do utilizador.",
		admin_file_Tracking_append_ev: "Anexar variável de ambiente",
		admin_file_Tracking_append_ev_hover_help: "Pode anexar uma variável de ambiente se pretender que os documentos sejam gravados num directório especificado dinamicamente, como, por exemplo, um directório de utilizador.<br/><br/>Por exemplo, pode especificar que os documentos sejam armazenados num subdirectório <i>user_name</i> num directório de rede partilhado. ",
		admin_file_tracking_doc_directory_hover_help: "Especifique a localização em que os documentos devem ser armazenados quando são descarregados ou quando é dada saída dos mesmos.<br/><br/> <b>Sugestão</b>: Se pretender armazenar documentos num directório inicial de utilizador ou num directório de documentos predefinido, seleccione <b>Variável de ambiente</b>, que inclui variáveis predefinidas que indicam essas localizações.",
		admin_file_tracking_qualified_path_hover_help: "Utilize a estrutura de directórios apropriada para o sistema operativo Windows ou Mac para especificar o directório ou directório de rede no qual pretende armazenar documentos. <ul><li>Para Windows, inclua uma letra de unidade no caminho, como C:\\Enterprise Documents.</li><li>Para um directório de rede partilhado, introduza o caminho com o formato \\\\servername\\directory</li></ul><br/><b>Importante:</b> Para utilizar esta opção, a estrutura de directórios que especificar tem de poder ser criada em todas as estações de trabalho cliente no seu ambiente.",
		admin_file_tracking_environment_variable_path_hover_help: "Utilize as variáveis de ambiente apropriadas para o sistema operativo Windows ou Mac para especificar o directório ou directório de rede no qual pretende armazenar documentos. <br/><br/>A opção <b>Directório inicial do utilizador</b> armazena documentos no directório seguinte:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>A opção <b>Directório de documentos do utilizador</b> armazena documentos no directório seguinte:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Especifique se a cópia local de um documento é eliminada quando os utilizadores adicionam ou dão entrada de documentos no repositório.<br/><br/>Eliminar a cópia local permite:<br/><ul><li>Impor a conformidade com políticas de TI</li><li>Certificar-se de que os utilizadores estão a utilizar a versão mais recente dos documentos</li></ul><br/><b>Restrição:</b> Esta definição não é utilizada quando os utilizadores adicionam documentos ao arrastar e largar os mesmos.<br/><br/>Para o IBM Content Navigator for Microsoft Office, tem de seleccionar <b>Eliminar ficheiros locais quando os utilizadores adicionarem ou derem entrada de um documento ou cancelarem uma saída</b> na secção <b>Configuração do Office</b> do ambiente de trabalho.",
		admin_file_tracking_open_file_hover_help: "Esta definição substitui quaisquer preferências de processamento de documento configuradas nos navegadores da Web dos utilizadores. </br></br><b>Restrição:</b> Esta definição não é utilizada pelo IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Substituir cópia local:",
		admin_file_tracking_over_write_file_hover_help: "Especifique se a cópia local de um documento deve ser substituída quando os utilizadores dão saída de documentos no repositório. <br/><br/>Substituir a cópia local permite:<br/><ul><li>Certificar-se de que os utilizadores estão a utilizar a versão mais recente dos documentos</li><li>Impedir que os utilizadores vejam um pedido quando existe uma cópia local</li></ul> </br></br><b>Restrição:</b> Esta definição não é utilizada pelo IBM Content Navigator for Microsoft Office se seleccionar <b>Permitir que os utilizadores substituam esta definição</b>.",
		admin_file_tracking_over_write_file_state_editable: "Permitir que os utilizadores substituam esta definição",
		admin_file_tracking_inline_help: "O rastreio de ficheiros agiliza o processo de dar saída e entrada dos documentos no repositório. Também permite gerir a forma como os documentos são armazenados nas máquinas dos utilizadores. <br/><br/>Adicionalmente, o rastreio de ficheiro permite que os documentos sejam rastreados em vários componentes do IBM Content Navigator, tais como o cliente da Web e o IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "É necessário activar a autenticação padrão ou de servidor antes de ligar ao repositório.",
		admin_box_use_oauth: "Tipo de autenticação:",
		admin_box_use_oauth_hover: "Seleccione a autenticação padrão ou de servidor num ambiente de produção quando fornecer acesso a documentos do Box a partir do IBM Content Navigator. Especifique os valores de client_id e client_secret de OAuth2 associados a esta implementação do IBM Content Navigator. Pode obter esses valores no Box após criar a aplicação Box a partir do servidor do IBM Content Navigator.<br/><br/>Seleccione a autenticação de programador num ambiente de desenvolvimento. Os programadores podem iniciar sessão no Box utilizando a conta de programador e gerar um token de programador válido durante 60 minutos. Os símbolos de programador permitem aos programadores iniciar sessão no Box utilizando o token de programador como a palavra-passe de qualquer ID de utilizador.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdomínio da conta empresarial do Box:",
		admin_box_share: "ID de ligação de gestor de tarefas:",
		admin_box_share_hover: "Para cópia ou partilha do Box, o gestor de tarefas utiliza uma palavra-passe e ID de utilizador de administrador para executar tarefas em segundo plano que modificam o repositório.<br/><br/>Faça clique em Definir e inicie sessão no Box utilizando uma conta de administrador do Box válida.<br/><br/>Se configurar um ambiente de trabalho seleccionando este repositório do Box como o repositório para ficheiros partilhados, terá de especificar um utilizador administrador do Box com armazenamento ilimitado no Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Abrir ficheiro automaticamente",
		file_tracking_runtime_overwrite_hover_help: "Se não seleccionar esta opção e tiver um documento no sistema de ficheiros local com o mesmo nome, será dada saída do documento mas este não será descarregado, excepto se executar uma das seguintes acções:<br/><ul><li> Descarregar o documento para um subdirectório do directório predefinido. Se seleccionar um subdirectório, a localização do documento pode ser rastreada pela aplicação da Web.</li><li>Altere o nome do documento que está a descarregar. Mudar o nome do documento impede um conflito de nome de ficheiro.</li></ul>",
		open_file: "Abrir ficheiro automaticamente",
		over_write_file: "Substituir cópia local",
		checkout_and_download_file: "Dar saída e descarregar documentos",
		download_to_local_directory: "Descarregar para:",
		checkout_and_download_button_title: "Dar saída e descarregar",
		checkout_without_java_confirmation_dialog: "Não é possível descarregar o ficheiro e rastrear o mesmo com a função de rastreio de ficheiros.",
		browse_for_directory: "Pesquisar",
		selected_documents: "Documentos seleccionados",

		checkout_without_java_confirmation_text: "Este problema pode ocorrer pelos motivos seguintes:<br/><ul><li>O Java Runtime Environment (JRE) não está instalado na estação de trabalho.</li><li>O suplemento de Java não está activado no navegador da Web.</li><li>O seu navegador da Web não tem suporte de Java.</li></ul><br/><br/>Para solucionar este problema, execute a acção adequada:<br/><br/><ul><li>Se pretender continuar a descarregar o ficheiro sem o rastreio de ficheiros activado, faça clique em OK.</li><li>Se pretender descarregar o ficheiro com o rastreio de ficheiro activado, cancele a transferência e certifique-se de que o JRE está instalado na estação de trabalho e que o suplemento de Java está activado no navegador da Web.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Foi dada saída do documento e o mesmo foi descarregado, mas não é possível abrir o documento.",
		runtime_file_tracking_open_error_explanation: "O sistema operativo instalado na estação de trabalho não suporta ficheiros deste tipo.",
		runtime_file_tracking_open_error_userResponse: "Para solucionar o problema, execute uma das acções seguintes:<br/><br/><ul><li>Se for necessário trabalhar com o documento, abra o cliente da Web noutra estação de trabalho com um sistema operativo diferente.</li><li>Se necessitar apenas de visualizar o documento, faça clique com o botão direito no cliente da Web e faça clique em Abrir.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Foi dada saída do documento mas o mesmo não foi descarregado.",
		runtime_file_tracking_save_file_error_explanation: "Existe um documento com o mesmo nome no sistema de ficheiros local, mas este não foi substituído. ",
		runtime_file_tracking_save_file_error_userResponse: "Se pretender descarregar o ficheiro do repositório, é necessário substituir a cópia local do documento, quando descarregar o documento do repositório.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Foi dada saída do documento, mas não é possível descarregar ou abrir o mesmo.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Existe um documento com o mesmo nome no sistema de ficheiros local. Contudo, o ficheiro não foi substituído, o que impede que o documento no repositório seja descarregado e aberto.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Se pretender descarregar o ficheiro do repositório, é necessário substituir a cópia local do documento, quando descarregar o documento do repositório.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Não é possível descarregar o documento.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "A variável de ambiente ${0}, que é necessária para rastreio de ficheiros, não está definida nesta máquina do cliente.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Para solucionar o problema:<br/><br/><ul><li>Adicione a variável de ambiente ${0} às variáveis de ambiente do sistema operativo.</li><li>Termine a sessão no cliente da Web e feche o navegador da Web. Em seguida, volte a iniciar sessão.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Não é possível descarregar e rastrear o ficheiro com a applet de rastreio de ficheiros.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "O directório ${0}, requerido para o rastreio de ficheiros, não está definido e não pode ser criado.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Para resolver este problema, execute a acção apropriada:<br/><br/><ul><li>Faça clique em Pesquisar e seleccione outro directório na máquina cliente. Se seleccionar esta opção, o ficheiro não será rastreado.</li><li>Contacte o administrador do sistema e solicite que seja especificado um directório diferente para utilizar para rastrear ficheiros. Por exemplo, tal poderá ser necessário se o directório especificado for para um sistema operativo Windows mas está a ser utilizado Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Se aceder a este ambiente de trabalho a partir de dispositivos com sistemas operativos diferentes, pode reduzir a probabilidade de ocorrência de problemas executando uma das seguintes acções:<br/><br/><ul><li>Utilize as variáveis de ambiente para especificar a localização de armazenamento nas máquinas cliente.</li><li>Criar ambientes de trabalho diferentes para os utilizadores de cada tipo de dispositivo. Por exemplo, criar um ambiente de trabalho para os utilizadores com um sistema operativo Windows e um ambiente de trabalho para utilizadores com Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Não é possível processar o pedido.",
		runtime_file_tracking_generic_error_explanation: "Ocorreu um erro na applet de rastreio de ficheiros.",
		runtime_file_tracking_generic_error_userResponse: "Contacte o administrador do sistema para obter assistência.",
		runtime_file_tracking_generic_error_adminResponse: "Abra a consola Java e tente submeter o pedido novamente. Os detalhes do erro são apresentados na consola Java.<br/><br/>Pode aceder à consola de Java a partir do Painel de controlo (Windows) ou das Preferências do sistema (Macintosh) do seu sistema operativo.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Não é possível processar o pedido",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Os seguintes ficheiros foram adicionados ao repositório, mas não foram eliminados do sistema de ficheiros local: ${0}. Normalmente, este erro ocorre quando os ficheiros estão abertos ou estão a ser utilizados por outra aplicação. Se necessário, pode eliminar manualmente os ficheiros.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Não é possível descarregar o documento.",
		runtime_file_tracking_ioexception_error_explanation: "Não é possível descarregar o documento.",
		runtime_file_tracking_ioexception_userResponse: "Pode não ter as permissões apropriadas para gravar no directório seguinte: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Certifique-se de que tem permissões de escrita no directório especificado. Se não tiver permissões de escrita para o directório especificado, contacte o administrador do sistema.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Não é possível processar o pedido.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Este erro pode ocorrer pelos seguintes motivos:<br/><br/><ul><li>Está a utilizar o Safari em Mac OS e Java está em execução no modo de segurança.</li><li>Não tem permissões para ler/gravar no directório especificado na configuração de rastreio de ficheiro para o seu ambiente de trabalho.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Pode continuar a utilizar o IBM Content Navigator sem rastreio de ficheiros ou pode executar os passos seguintes para solucionar o problema:<br/><br/><ol><li>Active Java no modo não seguro no Safari.</li><li>Caso seja solicitado que confirme se pretende confiar no sítio da Web do IBM Content Navigator faça clique em <b>Trust</b> para carregar a página e, em seguida, active o modo não seguro de Java no Safari.</li></ol><br/><br/>Se o Safari estiver configurado correctamente, execute os passos seguintes para solucionar o problema:<br/><br/><ol><li>Certifique-se de que tem permissões para ler/gravar no directório especificado na configuração de rastreio de ficheiro para o seu ambiente de trabalho.</li><li>Se não tiver permissões para ler/gravar no directório, edite as permissões no directório.</li><li>Se não for possível editar as permissões no directório, é necessário que o administrador altere o directório configurado para rastreio de ficheiros ou que conceda acesso a um ambiente de trabalho com outro directório de rastreio de ficheiros configurado.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Não é possível processar o pedido.",
		runtime_file_tracking_java__notfound_error_explanation: "Este erro ocorre normalmente nas situações seguintes:<br/><br/><ul><li>O Java Runtime Environment (JRE) não está presente ou activado na estação de trabalho.</li><li>A versão de JRE na sua estação de trabalho não é compatível com a versão do IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Pode continuar a utilizar o IBM Content Navigator sem rastreio de ficheiros ou pode executar os passos seguintes para solucionar o problema com o JRE:<br/><br/><ol><li>Certifique-se que o JRE está instalado na estação de trabalho.</li><li>Certifique-se de que a versão de JRE existente na estação de trabalho é compatível com o IBM Content Navigator. Uma lista das versões suportadas está incluída no documento <i>Hardware and software prerequisites for IBM Content Navigator</i> no sítio do Suporte para Software IBM.</li><li>Certifique-se de que o JRE está activado na estação de trabalho.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Não é possível processar o pedido.",
		runtime_file_tracking_security_error_explanation: "Não tem permissões para ler/gravar no directório especificado na configuração de rastreio de ficheiro para o seu ambiente de trabalho.",
		runtime_file_tracking_security_error_userResponse: "Pode continuar a utilizar o IBM Content Navigator sem rastreio de ficheiros ou poderá contactar o seu administrador de sistema para executar os passos seguintes:<ol><li>Certifique-se de que tem permissões para ler/gravar no directório especificado na configuração de rastreio de ficheiro para o seu ambiente de trabalho. </li><li>Se não tiver permissões para ler/gravar no directório, edite as permissões no directório.</li><li>Se não for possível editar as permissões no directório, é necessário que o administrador altere o directório configurado para rastreio de ficheiros ou que conceda acesso a um ambiente de trabalho com outro directório de rastreio de ficheiros configurado.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Os documentos seguintes foram descarregados: ${0}.",

		admin_file_tracking_inline_help: "O rastreio de ficheiros agiliza o processo de adição de documentos e de saída de documentos do repositório. Também permite gerir a forma como os documentos são armazenados nas máquinas dos utilizadores.<br/><br/>Adicionalmente, o rastreio de ficheiro permite que os documentos sejam rastreados em vários componentes do IBM Content Navigator, tais como o cliente da Web e o IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "O ID de menu não pode começar por \"Predefinição\". \"Predefinição\" é um prefixo reservado para IDs de menu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "O ID pode incluir apenas caracteres alfanuméricos e é sensível a maiúsculas e minúsculas.",
		admin_repository_id_hover: "O ID do repositório está incluído nos URLs do cliente da Web, favoritos e ligações de correio electrónico para especificar em que repositório iniciar sessão. O ID tem de ser exclusivo e não pode ser alterado após guardar o repositório.<br><br>O ID pode incluir apenas caracteres alfanuméricos e é sensível a maiúsculas e minúsculas.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "O nome não pode incluir nenhum dos caracteres seguintes: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "O ID do ambiente de trabalho não pode conter espaços ou qualquer um dos caracteres seguintes: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "O nome do ambiente de trabalho não pode conter nenhum dos caracteres seguintes: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "O nome de apresentação não pode conter nenhum dos caracteres seguintes: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Especifique o nome do repositório a apresentar aos utilizadores no cliente da Web.<br><br>O nome não pode conter os seguintes caracteres: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Especifique o nome do sistema central ou endereço de IP do servidor do Content Manager OnDemand ao qual pretende estabelecer ligação, por exemplo, server.id.com.",
		admin_server_p8_name_hover: "Especifique o URL do servidor do Content Engine ou Content Platform Engine. O URL é sensível a maiúsculas e minúsculas e tem o seguinte formato:<br><br><ul><li>No WebSphere Application Server, iiop://nome_sistema:número_porta/FileNet/Engine. Em implementações base, o número de porta predefinido é 2809.</li><li>No WebLogic Server, t3://nome_sistema:número_porta/FileNet/Engine. O número de porta predefinido é 7001.</li></ul><br><br>Para configurações de elevada disponibilidade do Content Engine e do Content Platform Engine, utilize o URL de transporte de EJB de elevada disponibilidade sem o prefixo cemp:. ",
		admin_server_p8_protocol_hover: "Especifique o protocolo a utilizar para comunicar com o Content Engine.",
		admin_server_cm_name_hover: "Especifique o nome do catálogo local da base de dados do Content Manager ou o nome de ligação do servidor da biblioteca. Este nome é o valor especificado para a variável ICMSERVER.",
		admin_repository_cmis_hover: "Especifique o ID do repositório a que pretende estabelecer ligação.  O ID de cada repositório no seu ambiente CMIS está indicado no documento de serviço de associação AtomPub.  <br/><br/><b>Sugestão:</b>Também pode introduzir um asterisco (*) para ligar ao primeiro ou ao único repositório definido no documento do serviço de associação Atompub.",
		admin_url_cmis_hover: "O formato do URL varia por fornecedor de serviços. Consulte a documentação do CMIS ou contacte o administrador de servidor do CMIS para obter o URL.",
		admin_repcfg_cmis_status_columns_hover: "Especifique os estados de itens para os quais pretende visualizar ícones. Os ícones de estado são apresentados junto aos documentos na lista de conteúdos.",
		admin_port_hover: "Especifique o número da porta TCP/IP de recepção do servidor do Content Manager OnDemand. O valor predefinido é 1445.",
		admin_unified_searches_hover: "Especifique se pretende que os utilizadores possam guardar procuras entre repositórios neste repositório.<br/><br/>Se pretender activar esta opção, os utilizadores continuarão a poder criar procuras entre repositórios que são executadas neste repositório. Pode impedir que os utilizadores criem procuras entre repositórios ao nível do ambiente de trabalho.<br/><br/>Se activar a utilização de procuras entre repositórios, o IBM Content Navigator cria o modelo de dados de procura entre repositórios no repositório.<br/><br/>No IBM FileNet Content Manager, terá de ligar ao repositório como administrador do Content Engine antes de activar esta opção.",
		admin_unified_searches_cm_hover: "Especifique se pretende que os utilizadores possam guardar procuras entre repositórios neste repositório.<br/><br/>Se pretender activar esta opção, os utilizadores continuarão a poder criar procuras entre repositórios que são executadas neste repositório. Pode impedir que os utilizadores criem procuras entre repositórios ao nível do ambiente de trabalho.<br/><br/>Se activar a utilização de procuras entre repositórios, o IBM Content Navigator cria o modelo de dados de procura entre repositórios no repositório.",
		admin_max_results_hover: "Especifique se o número de resultados devolvido pela procura deve ser limitado. Se não limitar o número de resultados da procura, poderão ocorrer problemas de desempenho se uma procura devolver um número muito elevado de resultados.",
		admin_timeout_hover: "Especifique a duração, em segundos, da execução de uma procura no repositório. Se a procura não for concluída no período especificado, o cliente da Web irá cancelar o pedido. O tempo limite máximo recomendado é 60 segundos.",
		admin_object_store_hover: "Especifique o armazenamento de objectos a que pretende estabelecer ligação ao servidor do Content Engine. Pode obter o nome simbólico da consola de administração do Content Platform Engine.",
		admin_object_store_display_name_hover: "O nome de apresentação do armazenamento de objectos é requerido se pretender utilizar fluxos de trabalho do IBM FileNet P8. Pode obter o nome de apresentação do armazenamento de objectos da consola de administração do Content Platform Engine.",
		admin_all_searches_hover: "Especifique se pretende limitar o número de procuras apresentadas em <b>Todas as procuras</b> quando os utilizadores efectuam procuras no repositório. Se não limitar o número de procuras, poderão ocorrer problemas de desempenho se o repositório incluir um elevado número de procuras guardadas.",

		admin_text_desktop: "Ambiente de trabalho",
		admin_text_repository: "Repositório",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Tema",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Motivo da redacção",
		admin_text_redactions: "Redacções",
		admin_text_viewer_mapping: "Mapeamento de visualizadores",
		admin_text_mobile_feature: "Função móvel",
		admin_test_interface_text: "Texto da interface",
		admin_text_interface_text_locale: "Texto da interface localizado",
		admin_text_icon_status: "Ícone de estado",
		admin_text_icon: "Ícone",
		admin_text_file_type: "Tipo de ficheiro",
		admin_text_viewer: "Visualizador",
		admin_text_desktop_access: "Acesso ao ambiente de trabalho",
		admin_text_mapped_properties_for_office: "Propriedades mapeadas para Microsoft Office",
		admin_text_desktop_features: "Funções do ambiente de trabalho",
		admin_text_unknown: "Desconhecido",
		admin_folder_instruction: "Especifique as propriedades apresentadas para documentos e pastas na lista de conteúdo quando os utilizadores percorrem a lista. Também pode especificar a ordem de apresentação das propriedades.",
		admin_search_instruction: "Especifique que opções estão seleccionadas por predefinição quando os utilizadores criam uma procura.",
		admin_repository_office_conf_class_instruction: "Se tiver o IBM Content Navigator for Microsoft Office instalado nas máquinas cliente no seu ambiente, pode especificar o modo como os documentos são processados quando são adicionados ou quando é dada entrada dos mesmos neste repositório.",
		admin_repository_office_conf_instruction: "Mapear propriedades do documento do Microsoft Office a propriedades definidas neste repositório.<br/><br/>Quando o mapeamento de propriedades estiver activado para um ambiente de trabalho com o qual este repositório esteja associado, as propriedades definidas nos documentos do Microsoft Office são utilizadas para preencher as propriedades no repositório quando o utilizador adiciona um documento do IBM Content Navigator para o Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mapeamento de propriedades",
		admin_repository_office_conf_prop_mapping_title1: "Integração com MS Office",
		admin_office_conf_instruction: "Pode controlar a forma como o IBM Content Navigator se integra com as aplicações do Microsoft Office quando o IBM Content Navigator for Microsoft Office está instalado em máquinas cliente<br /><br /><b>Importante:</b> Se seleccionar <b>Map Office properties…</b>, é também necessário configurar o mapeamento de propriedades para cada repositório associado a este ambiente de trabalho. Pode configurar o mapeamento de propriedades no separador <b>Propriedades do Office</b> para cada repositório no seu ambiente.",
		admin_desktop_workflows_instruction: "<b>Apenas para sistemas IBM FileNet P8:</b> Especifique quais os espaços da aplicação apresentados neste ambiente de trabalho. A ordem dos espaços da aplicação seleccionados determina a ordem pela qual os espaços da aplicação são apresentados no cliente da Web.<br><br><b>Sugestão:</b> Pode alterar o nome de apresentação dos espaços da aplicação especificando nomes novos na secção <b>Etiquetas</b> da ferramenta de administração.",
		admin_search_filtered_properties_instruction: "Especifique as propriedades que os utilizadores podem procurar. Pode ocultar quaisquer propriedades que não pretender incluir nas procuras dos utilizadores.",
		admin_search_filtered_operators_instruction: "Especifique os operadores disponíveis quando os utilizadores procuram um determinado tipo de dados, como, por exemplo, uma data ou um número inteiro. Pode ocultar quaisquer operadores que não pretende que os utilizadores seleccionem.",
		admin_search_default_search_results_instruction: "Especifique as propriedades apresentadas para documentos e pastas nos resultados da procura. Pode ocultar quaisquer propriedades que não pretender incluir nos resultados da procura.",
		admin_search_default_search_results_p8_cmis_instruction: "Especifique as propriedades apresentadas para documentos nos resultados da procura. Pode ocultar quaisquer propriedades que não pretender incluir nos resultados.",

		admin_datetimeOp: "Data Hora",
		admin_floatOp: "Número de vírgula flutuante",
		admin_integerOp: "Número inteiro",
		admin_stringOp: "Cadeia",
		admin_binaryOp: "Binário",
		admin_objectOp: "Objecto",
		admin_idOp: "ID",
		admin_userOp: "Utilizador",
		admin_booleanOp: "Booleano",

		admin_string: "Cadeia",
		admin_long: "Longo",
		admin_date: "Data",
		admin_double: "Duplo",
		admin_object: "Objecto",
		admin_guid: "GUID",
		admin_boolean: "Booleano",

		admin_repcfg_heading: "Pode substituir o comportamento predefinido deste repositório configurando os parâmetros de configuração.",
		admin_repcfg_heading_od: "Pode substituir o comportamento predefinido deste repositório configurando os parâmetros de configuração.<br /><br /><b>Importante:</b> Para utilizar o cliente da Web com o Content Manager OnDemand, é necessário também especificar valores para os parâmetros incluídos no separador do <b>Content Manager OnDemand</b> em <b>Definições</b>, que são aplicáveis a todos os repositórios do Content Manager OnDemand a que estabelecer ligação.",
		admin_repcfg_teamspaces: "Gestão de espaços de equipa:",
		admin_repcfg_enable: "Activar",
		admin_repcfg_disable: "Desactivar",

		admin_repcfg_deliver_redacted_pdf_files_as: "Os ficheiros PDF redigidos serão fornecidos como:",
		admin_repcfg_burn_pdf_to_pdf: "Ficheiros PDF",
		admin_repcfg_burn_pdf_to_tiff: "Ficheiros TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Um ficheiro PDF que é redigido ao aplicar redacções baseadas em funções pode ser fornecido ao cliente num formato de ficheiro diferente. Quando o formato do ficheiro é alterado, a extensão do ficheiro e o tipo MIME também são alterados.<br><br>Por exemplo, quando um ficheiro PDF é fornecido como ficheiro TIFF, a extensão do ficheiro é alterada para .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Permitir que os utilizadores intercalem e dividam páginas que têm redações baseadas em funções",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Seleccione esta opção para permitir que os utilizadores intercalem e dividam páginas que têm redações baseadas em funções. Os utilizadores que não são editores de redações não poderão editar redações baseadas em funções e não lhes é concedido acesso a dados sensíveis associados às redações baseadas em funções, mesmo que esta opção esteja activa.",
		admin_repcfg_modify_teamspace_roles: "Permitir aos proprietários modificar as funções de espaços de equipa existentes",
		admin_repcfg_tm_delete_teamspace: "Permite que os proprietários eliminem um espaço de equipa, incluindo o conteúdo",
		admin_repcfg_tm_delete_teamspace_id_missing: "Tem de especificar o nome de utilizador de um administrador do repositório.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Tem de especificar a palavra-passe do administrador do repositório.",
		admin_repcfg_teamspace_display_Recent: "Mostrar apenas espaços de equipa modificados recentemente ",
		admin_repcfg_teamspace_display_Recent_value: "Dias desde a última modificação:",

		admin_repcfg_folder_selector: "Pasta raiz:",
		admin_repcfg_enable_folder_selector: "Activar",
		admin_repcfg_disable_folder_selector: "Desactivar",
		admin_repcfg_SSO: "Início de sessão único:",
		admin_repcfg_teamspace_template_permission_text: "Atribuir criadores de modelos de espaço de equipa:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Especifique os grupos ou utilizadores que podem criar modelos de espaço de equipa. São atribuídas aos utilizadores e grupos as definições de segurança apropriadas nas classes e pastas requeridas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Obter mais informações</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar a gestão de espaços de equipa.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Especifique os grupos ou utilizadores que podem criar modelos de espaço de equipa. Os utilizadores são adicionados às LCA apropriadas e são-lhes atribuídos os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Obter mais informações</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar a gestão de espaços de equipa.",
		admin_repcfg_teamspace_permission_text: "Atribuir funções de espaço de equipa:",
		admin_repcfg_teamspace_permission_hover_p8: "Especifique os grupos ou utilizadores que podem criar e utilizar espaços de equipa. São atribuídas aos utilizadores as definições de segurança apropriadas nas classes e pastas requeridas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Obter mais informações</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar a gestão de espaços de equipa.",
		admin_repcfg_teamspace_permission_hover_cm: "Especifique os grupos ou utilizadores que podem criar e utilizar espaços de equipa. Os utilizadores são adicionados às LCA apropriadas e são-lhes atribuídos os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Obter mais informações</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar a gestão de espaços de equipa.",
		admin_repcfg_entry_template_permission_text: "Atribuir funções de modelos de entrada:",
		admin_repcfg_entry_template_permission_hover_p8: "Especifique os grupos ou utilizadores que podem criar e utilizar modelos de entrada. São atribuídas aos utilizadores as definições de segurança apropriadas na classe de documento Modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Obter mais informações</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar a gestão de modelos de entrada.",
		admin_repcfg_entry_template_permission_hover_cm: "Especifique os grupos ou utilizadores que podem criar e utilizar modelos de entrada. Os utilizadores são adicionados às LCA apropriadas e são-lhes atribuídos os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Obter mais informações</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar a gestão de modelos de entrada.",
		admin_repcfg_office_template_permission_text: "Atribuir funções de modelo:",
		admin_repcfg_office_template_permission_hover_cm: "Especifique os grupos ou utilizadores que podem criar, editar e utilizar modelos do Microsoft Office Online ou do serviço de edição. Os utilizadores são adicionados às LCA apropriadas e são-lhes atribuídos os privilégios necessários.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar a gestão de modelos do Microsoft Office Online ou do serviço de edição.",
		admin_repcfg_draft_permission_text: "Atribuir funções de rascunhos:",
		admin_repcfg_draft_permission_hover_cm: "Especifique os grupos ou utilizadores que podem criar rascunhos de documentos do Microsoft Office Online ou do serviço de edição durante a edição colaborativa. Qualquer utilizador que necessite de editar documentos colaborativamente no Microsoft Office Online ou no serviço de edição terá de possuir os privilégios apropriados para criar rascunhos. Os utilizadores são adicionados às LCA apropriadas e são-lhes atribuídos os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar a gestão de rascunhos.",
		admin_repcfg_search_permission_text: "Atribuir funções de procura:",
		admin_repcfg_search_permission_hover_p8: "Especifique os grupos ou utilizadores que podem criar ou utilizar procuras guardadas e procuras entre repositórios. São atribuídas aos utilizadores as definições de segurança apropriadas nas classes requeridas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Obter mais informações</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar a gestão de procuras.",
		admin_repcfg_search_permission_hover_cm: "Especifique os grupos ou utilizadores que podem criar, editar ou utilizar procuras guardadas e procuras entre repositórios. Os utilizadores são adicionados às LCA apropriadas e são-lhes atribuídos os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Obter mais informações</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar a gestão de procuras.",
		admin_repcfg_search_permission_title: "Funções de procura",
		admin_repcfg_search_permission_intro_text: "Certifique-se de que os utilizadores têm acesso a um ambiente de trabalho que suporte a respectiva função. Por exemplo, certifique-se de que os criadores de procuras têm acesso a um ambiente de trabalho que lhes permita criar procuras e procuras entre repositórios.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Os administradores de modelos de espaço de equipa são utilizadores que possuem permissões de <b>Controlo total</b> no repositório (armazenamento de objectos). Não é possível alterar a lista de administradores de modelos de espaço de equipa a partir da ferramenta de administração. <p>Os administradores de modelos de espaço de equipa podem eliminar ou modificar qualquer modelo de espaço de equipa. O utilizador que criar um modelo de espaço de equipa não necessita de partilhar o modelo com os administradores de modelos de espaço de equipa.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Ao designar um utilizador ou grupo como um criador de modelos de espaço de equipa, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para criar modelos de espaço de equipa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Obter mais informações</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Utilizadores e grupos com privilégios atribuídos diferentes dos privilégios associados a Administradores e Criadores.<p>Pode mover estes utilizadores e grupos para a função de criadores de modelo de espaço de equipa removendo-os da função Outros e atribuindo-lhes a função de criadores de modelo de espaço de equipa.<p>Pode rever o privilégios actualmente atribuídos a estes utilizadores e grupos utilizando o IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Os administradores de espaços de equipa são utilizadores que possuem permissões de <b>Controlo total</b> no repositório (armazenamento de objectos). Não é possível alterar a lista de administradores de espaços de equipa a partir da ferramenta de administração.<p>Os administradores de espaços de equipa podem eliminar ou modificar qualquer espaço de equipa. O utilizador que criar um espaço de equipa não necessita de partilhá-lo com administradores de espaços de equipa.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Ao designar um utilizador ou grupo como um criador de espaços de equipa, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para criar espaços de equipa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Obter mais informações</a>",
		admin_repcfg_teamspace_user_hover_p8: "Ao designar um utilizador ou grupo como um utilizador de espaços de equipa, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para utilizar espaços de equipa. No entanto, um utilizador tem de ser membro de um espaço de equipa para aceder ao mesmo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Obter mais informações</a><p><b>Sugestão:</b> Se pretender que todos os utilizadores no seu ambiente possam visualizar espaços de equipa, pode adicionar a pseudo-conta #AUTHENTICATED-USERS à função de utilizador de espaço de equipa.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Utilizadores e grupos com privilégios atribuídos diferentes dos privilégios associados a Administradores, Criadores e Utilizadores.<p>Pode mover estes utilizadores e grupos para funções predefinidas removendo-os da função Outros e atribuindo-lhes funções de espaço de equipa.<p>Pode rever o privilégios actualmente atribuídos a estes utilizadores e grupos utilizando o IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Os administradores de modelos de entrada são utilizadores que possuem permissões de <b>Controlo total</b> no repositório (armazenamento de objectos). Não é possível alterar a lista de administradores de modelos de entrada a partir da ferramenta de administração. <p>Os administradores de modelos de entrada podem eliminar ou modificar qualquer modelo de entrada. O utilizador que criar um modelo de entrada não necessita de partilhar o modelo de entrada com administradores de modelos de entrada.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Ao designar um utilizador ou grupo como um criador de modelos de entrada, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para criar modelos de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Obter mais informações</a>",
		admin_repcfg_entry_template_user_hover_p8: "Ao designar um utilizador ou grupo como um utilizador de modelos de entrada, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para utilizar modelos de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Obter mais informações</a><p><b>Sugestão:</b> Se pretender que todos os utilizadores no seu ambiente possam utilizar modelos de entrada, pode adicionar a pseudo-conta #AUTHENTICATED-USERS à função de utilizador de modelo de entrada.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Utilizadores e grupos com privilégios atribuídos diferentes dos privilégios associados a Administradores, Criadores e Utilizadores.<p>Pode mover estes utilizadores e grupos para funções predefinidas removendo-os da função Outros e atribuindo-lhes funções de modelo de entrada.<p>Pode rever o privilégios actualmente atribuídos a estes utilizadores e grupos utilizando o IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Ao designar um utilizador ou grupo como um criador de modelos de espaço de equipa, são atribuídos ao utilizador ou grupo os privilégios apropriados para criar modelos de espaço de equipa no repositório. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Obter mais informações</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Ao designar um utilizador ou grupo como um criador de espaços de equipa, são atribuídos ao utilizador ou grupo os privilégios apropriados para criar espaços de equipa no repositório. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Obter mais informações</a>",
		admin_repcfg_teamspace_user_hover_cm: "Ao designar um utilizador ou grupo como um utilizador de espaços de equipa, são atribuídos ao utilizador ou grupo os privilégios apropriados para utilizar espaços de equipa no repositório. No entanto, um utilizador tem de ser membro de um espaço de equipa para aceder ao mesmo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Obter mais informações</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Ao designar um utilizador ou grupo como um criador de modelos de entrada, são atribuídos ao utilizador ou grupo os privilégios apropriados para criar modelos de entrada no repositório. <br/><br/>No entanto, as definições de segurança relativas a um modelo de entrada específico determinam os privilégios que o utilizador ou grupo possui no modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Obter mais informações</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Ao designar um utilizador ou grupo como um editor de modelos de entrada, são atribuídos ao utilizador ou grupo os privilégios apropriados para modificar modelos de entrada no repositório. <br/><br/>No entanto, as definições de segurança relativas a um modelo de entrada específico determinam os privilégios que o utilizador ou grupo possui no modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Obter mais informações</a>",
		admin_repcfg_entry_user_hover_cm: "Ao designar um utilizador ou grupo como um utilizador de modelos de entrada, são atribuídos ao utilizador ou grupo os privilégios apropriados para utilizar modelos de entrada no repositório. <br/><br/>No entanto, as definições de segurança relativas a um modelo de entrada específico determinam os privilégios que o utilizador ou grupo possui no modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Obter mais informações</a>",
		admin_repcfg_office_template_creators_hover_cm: "Quando designa um utilizador ou grupo como um criador de modelo do Microsoft Office Online ou do serviço de edição, o utilizador ou grupo recebe os privilégios apropriados para criar ficheiros de modelo no repositório. <br/><br/>No entanto, as definições de segurança para um ficheiro de modelo específico determinam os privilégios que o utilizador ou grupo possui no modelo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a>",
		admin_repcfg_office_template_editors_hover_cm: "Quando designa um utilizador ou grupo como um editor de modelo do Microsoft Office Online ou do serviço de edição, o utilizador ou grupo recebe os privilégios apropriados para modificar ficheiros de modelo no repositório.  <br/><br/>No entanto, as definições de segurança para um ficheiro de modelo específico determinam os privilégios que o utilizador ou grupo possui no modelo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a>",
		admin_repcfg_office_template_user_hover_cm: "Quando designa um utilizador ou grupo como um utilizador de modelo do Microsoft Office Online ou do serviço de edição, o utilizador ou grupo recebe os privilégios apropriados para aplicar um modelo quando cria um novo documento do Office Online ou do serviço de edição a partir do cliente da Web.  <br/><br/>No entanto, as definições de segurança para um ficheiro de modelo específico determinam os privilégios que o utilizador ou grupo possui no modelo.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a>",
		admin_repcfg_draft_creators_hover_cm: "Quaisquer utilizadores que necessitem de editar colaborativamente documentos no Microsoft Office Online ou no serviço de edição têm de ser atribuídos a esta função. Não atribua utilizadores às funções de editor ou utilizador. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a>",
		admin_repcfg_draft_editors_hover_cm: "Quaisquer utilizadores que necessitem de editar colaborativamente documentos no Microsoft Office Online ou no serviço de edição têm de ser atribuídos à função <b>criador</b>. Caso um utilizador seja atribuído à função de editor, não poderá criar rascunhos, que são requeridos para a edição colaborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a>",
		admin_repcfg_draft_user_hover_cm: "Quaisquer utilizadores que necessitem de editar colaborativamente documentos no Microsoft Office Online ou no serviço de edição têm de ser atribuídos à função <b>criador</b>. Caso um utilizador seja atribuído à função de utilizador, não poderá criar rascunhos, que são requeridos para a edição colaborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Obter mais informações</a>",		
		admin_repcfg_search_others_hover_p8: "Utilizadores e grupos com privilégios atribuídos diferentes dos privilégios associados a Administradores, Criadores e Utilizadores.<p>Pode mover estes utilizadores e grupos para funções predefinidas removendo-os da função Outros e atribuindo-lhes funções de procura.<p>Pode rever o privilégios actualmente atribuídos a estes utilizadores e grupos utilizando o IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Os administradores de procuras são utilizadores que possuem permissões de <b>Controlo total</b> no repositório (armazenamento de objectos). Não é possível alterar a lista de administradores de procuras a partir da ferramenta de administração. <br /><br />Os administradores de procuras podem eliminar ou modificar qualquer procura. O utilizador que criar uma procura não necessita de partilhar a procura com administradores de procuras.",
		admin_repcfg_search_creators_hover_p8: "Ao designar um utilizador ou grupo como um criador de procuras, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para criar procuras. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Obter mais informações</a>",
		admin_repcfg_search_user_hover_p8: "Ao designar um utilizador ou grupo como um utilizador de procuras, é atribuída ao utilizador ou grupo a segurança apropriada no repositório para utilizar procuras. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Obter mais informações</a><br /><br /><b>Sugestão:</b> Se pretender que todos os utilizadores no seu ambiente possam utilizar procuras, pode adicionar a pseudo-conta #AUTHENTICATED-USERS à função de utilizador de procura.<br/><br />Por predefinição, um utilizador de procuras pode criar procuras e procuras entre repositórios, mas não pode guardar as procuras. Pode impedir os utilizadores de procuras de criarem procuras ao forçá-los a utilizar um ambiente de trabalho para o qual as seguintes opções estão seleccionadas:<ul><li><b>Impedir que os utilizadores criem procuras</b></li><li><b>Impedir que os utilizadores criem procuras entre repositórios</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Ao designar um utilizador ou grupo como um criador de procuras, são atribuídos ao utilizador ou grupo os privilégios apropriados para criar e guardar procuras e procuras entre repositórios no repositório. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Obter mais informações</a><br /><br /><b>Importante:</b> Certifique-se de que os criadores de procuras utilizam um ambiente de trabalho para o qual as seguintes opções não estejam seleccionadas:<ul><li><b>Impedir que os utilizadores criem procuras</b></li><li><b>Impedir que os utilizadores criem procuras entre repositórios</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Ao designar um utilizador ou grupo como um editor de procuras, são atribuídos ao utilizador ou grupo os privilégios apropriados para modificar procuras e procuras entre repositórios existentes. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Obter mais informações</a><br /><br /><b>Sugestão:</b> Por predefinição, um editor de procuras pode criar procuras e procuras entre repositórios, mas não pode guardar as procuras. Pode impedir os editores de procuras de criarem procuras ao forçá-los a utilizar um ambiente de trabalho para o qual as seguintes opções estejam seleccionadas:<ul><li><b>Impedir que os utilizadores criem procuras</b></li><li><b>Impedir que os utilizadores criem procuras entre repositórios</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Ao designar um utilizador ou grupo como um utilizador de procuras, são atribuídos ao utilizador ou grupo os privilégios apropriados para abrir e executar procuras e procuras entre repositórios guardadas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Obter mais informações</a><br /><br /><b>Sugestão:</b> Por predefinição, um utilizador de procuras pode criar procuras e procuras entre repositórios, mas não pode guardar as procuras. Pode impedir os utilizadores de procuras de criarem procuras ao forçá-los a utilizar um ambiente de trabalho para o qual as seguintes opções estão seleccionadas:<ul><li><b>Impedir que os utilizadores criem procuras</b></li><li><b>Impedir que os utilizadores criem procuras entre repositórios</b></li></ul>",
		admin_repcfg_db_encoding: "Codificação de caracteres da base de dados do servidor:",
		admin_repcfg_db_encoding_hover: "A codificação de caracteres predefinida para uma base de dados do IBM Content Manager é UTF-8.",
		admin_repcfg_db_encoding_specify: "Especifique a codificação de caracteres da base de dados",
		admin_repcfg_db_encoding_utf8: "Codificação UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Especifique esta opção se pretender utilizar uma base de dados com codificação UTF-8. O IBM Content Navigator irá utilizar a codificação UTF-8 para verificar o comprimento das cadeias do valor da propriedade do item.",
		admin_repcfg_db_encoding_other: "Outra codificação",
		admin_repcfg_db_encoding_other_hover: "Especifique esta opção se utilizar uma base de dados com uma codificação diferente de UTF-8. O IBM Content Navigator irá utilizar a contagem de caracteres para verificar o comprimento das as cadeias do valor da propriedade do item.",
		admin_repcfg_language_codes: "Códigos de idioma do servidor:",
		admin_repcfg_language_codes_avail: "Disponível",
		admin_repcfg_language_codes_sel: "Seleccionado",
		admin_repcfg_pdf_conversion: "Tipos MIME para converter para documentos PDF em anexos:",
		admin_repcfg_pdf_conversion_avail: "Disponível",
		admin_repcfg_pdf_conversion_sel: "Seleccionado",

		admin_repcfg_box_share_enable_classes_label: "Classes a modificar para suporte de partilha do Box:",
		admin_repcfg_box_share_enable_classes_hover: "Pode modificar a classe para armazenar o ID do ficheiro no Box quando o item é partilhado.",
		admin_repcfg_box_share_enable_classes_warning: "Importante: quaisquer classes especificadas serão modificadas para permitir o suporte de partilha do Box. Depois de guardar as alterações, estas não podem ser removidas das classes.<br><br>Tem de estar ligado ao repositório como administrador de servidor de biblioteca para modificar classes.",
		admin_repcfg_box_share_enable_classes_available: "Classes disponíveis",
		admin_repcfg_box_share_enable_classes_selected: "Classes seleccionadas",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Armazenar ID de partilha do Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Esta classe já foi modificada para armazenar o ID de partilha do Box. Não é possível remover esta opção.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modifique esta classe pra que armazene o ID do ficheiro no Box quando o item é partilhado.",

		admin_repcfg_redaction: "Redacções baseadas em funções:",
		admin_repcfg_enable_redaction_hover: "Especifique se pretende utilizar redacções baseadas em funções em documentos neste repositório.<br/><br/>As redacções baseadas em funções são aplicadas quando um documento é descarregado, impresso, acedido por um visualizador ou apresentado como miniatura. O que é apresentado aos utilizadores quando visualizam o documento depende da sua função e das políticas de redacção aplicáveis.",

		admin_repcfg_redaction_policy_permission_text: "Atribuir editores de política:",
		admin_repcfg_redaction_policy_editors_hover: "Seleccione os utilizadores e os grupos que irão criar, modificar e eliminar políticas de redacção e funções de redacção.",
		admin_repcfg_redaction_policy_editors_select_hover: "Os editores de políticas de redacção podem criar, modificar e eliminar políticas de redacção e funções de redacção.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Os administradores das políticas de redacção podem atribuir editores de política de redacção.<br/><br/>Pode alterar a lista de administradores de política de redacção utilizando o IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Os administradores das políticas de redacção podem atribuir editores de política de redacção.<br/><br/>Pode alterar a lista de administradores de política de redacção utilizando o cliente de administração de sistema do IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Atribuir editores de redacção:",
		admin_repcfg_redaction_editors_hover: "Seleccione os utilizadores e os grupos que irão criar, modificar e eliminar redacções baseadas em funções. Após seleccionar utilizadores e grupos como editores, é necessário especificar os mesmos como editores nas políticas de redacção para que possam editar redacções baseadas em funções.",
   		admin_repcfg_redaction_editors_select_hover: "Os editores de redacção podem criar, modificar e eliminar redacções baseadas em funções quando também estão especificados como editores nas políticas de redacção.",
   		admin_repcfg_redaction_administrators_hover_p8: "Os administradores de redacção podem atribuir editores de redacção.<br/><br/>Pode alterar a lista de administradores de redacção utilizando o IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Os administradores de redacção podem atribuir editores de redacção.<br/><br/>Pode alterar a lista de administradores de redacção utilizando o cliente de administração de sistema do IBM Content Manager.",
		admin_repcfg_entry_template: "Gestão de modelos de entrada:",
		admin_repcfg_entry_template_enable_classes_label: "Classes a modificar para suporte de modelos de entrada:",
		admin_repcfg_oos_reference_attribute_label: "Atributos de referência para o Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Importante: Quaisquer classes especificadas serão modificadas para permitir o suporte de modelos de entrada de dados. Depois de guardar as alterações, estas não podem ser removidas das classes.<br><br>Pode modificar a classe com uma ou ambas as finalidades seguintes:<br><ul><li>Armazenar o ID do modelo de entrada de dados utilizado para adicionar um item para que as definições do modelo de entradas de dados sejam aplicadas quando item é modificado</li><li>Apenas para classes de pastas hierárquicas: para permitir o suporte de associações de pastas de modelos de entrada de dados</li></ul>Tem de estar ligado ao repositório como administrador de servidor de biblioteca para modificar classes.",
		admin_repcfg_entry_template_enable_classes_warning: "Importante: Quaisquer classes especificadas serão modificadas para permitir o suporte de modelos de entrada de dados. Depois de guardar as alterações, estas não podem ser removidas das classes.<br><br>Tem de estar ligado ao repositório como administrador de servidor de biblioteca para modificar classes.",
		admin_repcfg_entry_template_enable_classes_available: "Classes disponíveis",
		admin_repcfg_entry_template_enable_classes_selected: "Classes seleccionadas",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Armazenar ID do modelo de entrada",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modifique esta classe para que seja armazenado o ID do modelo de entrada de dados utilizado para adicionar um item para que as definições do modelo de entrada sejam aplicadas quando o item é modificado.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Armazenar associações de pastas",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modifique esta classe para permitir o suporte das associações de pastas de modelos de entrada de dados. Esta opção está disponível apenas para classes de pastas hierárquicas.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Esta classe já foi modificada para armazenar o ID do modelo de entrada. Não é possível remover esta opção.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Esta classe já foi modificada para armazenar as associações de pastas. Não é possível remover esta opção.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Apenas as classes de pastas hierárquicas e não hierárquicas podem ser utilizadas para armazenar as associações de pastas.",
		admin_repcfg_entry_template_root_folder_association_title: "Modelos de entrada associados à pasta raiz:",
		admin_repcfg_entry_template_root_folder_association_hover: "Especifique que modelos de entrada pretende associar à pasta raiz no seu repositório do IBM Content Manager.<br /><br />Se associar modelos de entrada com a pasta raiz e os utilizadores adicionarem itens a uma pasta hierárquica, será sempre utilizado um modelo de entrada para adicionar itens.",
		admin_repcfg_entry_template_root_folder_association_button: "Definir associações",
		admin_repcfg_oos_enable_classes_label: "Classes a modificar para o suporte do Office Online e do serviço de edição:",
		admin_repcfg_oos_enable_classes_warning: "Importante: Quaisquer classes que especificar serão modificadas para trabalhar com o Microsoft Office Online ou o serviço de edição. Após guardar as alterações, não será possível remover o atributo de referência que é adicionado automaticamente a cada classe.<br><br>Tem de estar ligado ao repositório como administrador de servidor de biblioteca para modificar classes.",
		admin_repcfg_oos_enable_classes_available: "Classes disponíveis",
		admin_repcfg_oos_enable_classes_selected: "Classes seleccionadas",
		admin_repcfg_oos_enable_classes_note: "Importante:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Esta classe não é suportada com o Microsoft Office Online ou com o serviço de edição.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "A política de versões para a classe está definida para criar sempre versões, que o Microsoft Office Online ou o serviço de edição não suporta. Seleccione uma classe diferente.",
		admin_repcfg_download_recording: "Rastrear transferências:",
		admin_repcfg_download_recording_hover: "As transferências são rastreadas por predefinição quando o suplemento Social Collaboration Base Extensions está instalado no repositório. Contudo, desactivar esta opção pode melhorar o desempenho do repositório.<br><br>Se desactivar esta opção, é apresentado aos utilizadores uma contagem das transferências efectuadas antes de a opção ter sido desactivada.",
		admin_repcfg_sync_service: "Serviços de sincronização:",
		admin_repcfg_download_ignored: "Ignorar transferências de utilizadores específicos:",
		admin_repcfg_download_ignored_hover: "Pode ignorar as transferências solicitadas por utilizadores específicos, tais como administradores ou contas de sistema para reflectir com mais precisão o número de utilizadores que descarregaram um documento. Por exemplo, se tiver uma conta específica que é utilizada para descarregar conteúdo para gerar um relatório mensal, pode ignorar as transferências solicitadas por essa conta.<br><br><b>Restrição:</b> Não é possível especificar grupos.",

		admin_repcfg_add_as_major_version: "Adicionar como versão principal:",
		admin_repcfg_enable_add_as_major_version: "Sim",
		admin_repcfg_disable_add_as_major_version: "Não",
		admin_repcfg_checkin_as_major_version: "Dar entrada como versão principal:",
		admin_repcfg_enable_checkin_as_major_version: "Sim",
		admin_repcfg_disable_checkin_as_major_version: "Não",
		admin_repcfg_annotation_security: "Segurança de anotação:",
		admin_repcfg_inherit_annotation_security: "Duplicar a segurança do documento",
		admin_repcfg_default_annotation_security: "Utilizar a segurança de anotação predefinida",
		admin_repcfg_connection_point: "Ponto de ligação do fluxo de trabalho:",
		admin_repcfg_include_workflow_definition: "Apresentar classe de definição de fluxo de trabalho:",
		admin_repcfg_include_form_template: "Apresentar classe de modelo de formulário:",
		admin_repcfg_enable_include_workflow_definition: "Sim",
		admin_repcfg_disable_include_workflow_definition: "Não",

		admin_repcfg_status_columns: "Ícones de estado:",
		admin_repcfg_status_columns_hover: "Especifique os estados para os quais pretende visualizar ícones. Os ícones de estado são apresentados junto aos documentos, pastas e itens de trabalho na lista de conteúdos.",
		admin_repcfg_status_columns_documents_or_folders: "Apresentar um ícone quando os documentos ou pastas:",
		admin_repcfg_status_columns_documents: "Apresentar um ícone quando os documentos:",
		admin_repcfg_status_columns_documents_checked_out: "Têm saída dada",
		admin_repcfg_status_columns_documents_declared_records: "São declarados como registos",
		admin_repcfg_status_columns_documents_minor_versions: "Têm versões secundárias",
		admin_repcfg_status_columns_documents_compound_document: "São documentos compostos",
		admin_repcfg_status_columns_documents_bookmarks: "Têm marcadores",
		admin_repcfg_status_columns_documents_hold: "Estão em retenção",
		admin_repcfg_status_columns_documents_notes: "Têm notas",
		admin_repcfg_status_columns_work_items: "Apresentar um ícone quando os itens de trabalho:",
		admin_repcfg_status_columns_work_items_locked: "Estão bloqueados",
		admin_repcfg_status_columns_work_items_checked_out: "Têm saída dada",
		admin_repcfg_status_columns_work_items_deadline: "Têm um prazo",
		admin_repcfg_status_columns_work_items_suspended: "Estão suspensos do processamento",

		admin_repcfg_afp2pdf_config_file: "Ficheiro de configuração de AFP2PDF:",
		admin_repcfg_transform_xml_file: "Ficheiro de conversão personalizado:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Activar",
		admin_repcfg_disable_ssl: "Desactivar",
		admin_repcfg_keyringdb_file: "Ficheiro de base de dados do conjunto de chaves:",
		admin_repcfg_keyringstash_file: "Ficheiro de armazenamento do conjunto de chaves:",
		admin_repcfg_od_sso: "Início de sessão único",
		admin_repcfg_od_enable_sso: "Activar",
		admin_repcfg_od_disable_sso: "Desactivar",
		admin_repcfg_od_sso_password: "Palavra-passe",
		admin_repcfg_advanced_label: "Avançado",
		admin_repcfg_custom_properties_label: "Propriedades personalizadas:",
		admin_repcfg_new_button_label: "Novo",
		admin_repcfg_edit_button_label: "Editar",
		admin_repcfg_delete_button_label: "Eliminar",
		admin_repcfg_custom_head1: "Nome",
		admin_repcfg_custom_head2: "Valor",
		admin_repcfg_ecpdialog_title_new: "Nova propriedade personalizada",
		admin_repcfg_ecpdialog_title_edit: "Editar propriedade personalizada",
		admin_repcfg_ecpdialog_name: "Nome:",
		admin_repcfg_ecpdialog_value: "Valor:",
		admin_repcfg_ecpdialog_save: "Guardar",
		admin_repcfg_ecpdialog_create: "Criar",
		admin_repcfg_ecpdialog_cancel: "Cancelar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Este valor é requerido. O valor não pode conter espaços em branco e não pode ser um duplicado.",

		admin_repcfg_cmis_use_gzip_encoding: "Utilizar codificação GZIP:",

		admin_repcfg_task_mgr_proxy: "ID de ligação de gestor de tarefas:",
		admin_repcfg_task_mgr_proxy_hover: "Para partilha no Box ou eliminação do espaço de equipa, o gestor de tarefas utiliza uma palavra-passe e ID de utilizador de administrador para executar tarefas em segundo plano que modificam o repositório.<br><br>Faça clique em Definir e inicie sessão no repositório utilizando uma palavra-passe e ID de administrador do repositório válido.",
		admin_task_manager_not_enabled_warning: "Esta opção requer o serviço de gestor de tarefas, mas o serviço de gestor de tarefas não está activado.  Pode activar o serviço do gestor de tarefas para todos os ambientes de trabalho na página Geral de definições.",
		admin_task_manager_not_enabled_and_user_warning: "Esta opção requer o serviço de gestor de tarefas, mas o serviço de gestor de tarefas não está activado. Neste página, defina o ID de ligação do gestor de tarefas e, em seguida, na página Geral para definições, active o gestor de tarefas para todos os ambientes de trabalho.",
		admin_task_manager_user_id_pw_not_set_warning: "Esta opção requer o serviço do gestor de tarefas, uma palavra-passe e ID de utilizador de administrador. Neste página, defina o ID de ligação do gestor de tarefas.",
		admin_repcfg_teamspaces_delete_task_id: "Administrador de repositório:",
		admin_repcfg_teamspaces_delete_task_password: "Palavra-passe:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "É necessário especificar um administrador de servidor de biblioteca para permitir que o serviço de gestor de tarefas elimine um espaço de equipa no repositório.",
		admin_repcfg_teamspaces_delete_task_hover: "Por predefinição, quando um utilizador elimina um espaço de equipa, o espaço de equipa é oculto. Todas as pastas e documentos no espaço de equipa permanecem no repositório. <br /> <br />Ao activar esta opção, apenas os documentos arquivados noutras pastas no repositório permanecem no repositório.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Se tiver um elevado número de espaços de equipa no seu ambiente, a apresentação de todos os espaços de equipa no separador <b>Espaços de equipa</b> poderá ser muito morosa. Pode seleccionar esta opção para reduzir o período de tempo necessário para preencher a lista.<br /><br />Se um utilizador necessitar de trabalhar com um espaço de equipa que não se encontra no intervalo especificado, o utilizador pode utilizar o campo <b>Filtro</b> para localizar o espaço de equipa.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Se seleccionar esta opção, os utilizadores que tenham a função de proprietário num espaço de equipa podem modificar as funções associadas a espaços de equipa criados antes do IBM Content Navigator, Versão 2.0.2.<br /><br />Esta opção não afecta espaços de equipa criados com o IBM Content Navigator, Versão 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Especifique se pretende que os utilizadores possam criar espaços de equipa e modelos de espaços de equipa neste repositório.<br /><br /><b>Importante:</b> É necessário que o repositório suporte pastas hierárquicas.<br /><br />Se permitir a utilização de espaços de equipas, o IBM Content Navigator cria o modelo de dados de espaço de equipa no repositório. O modelo de dados inclui objectos ACL, privilégios, conjuntos de privilégios e dois novos tipos de item.",
		admin_repcfg_folder_selector_hover: "Seleccione a pasta que pretende utilizar como pasta raiz quando os utilizadores procuram documentos. Se não tiver pastas hierárquicas configuradas no repositório, esta definição permite utilizar a navegação definindo uma pasta raiz. Se tiver pastas hierárquicas configuradas no repositório, esta definição substitui a pasta raiz configurada no repositório.",
		admin_repcfg_cm_use_sso_hover: "Especifique se pretende permitir o início de sessão único para utilizadores com o conjunto de privilégios de início de sessão fidedigno.<br /><br /><b>Importante:</b> O início de sessão único tem de estar activado no servidor do Content Manager e o WebSphere Application Server tem de estar configurado para LTPA para que este parâmetro de configuração funcione.",
		admin_repcfg_cm_direct_retrieve_hover: "A obtenção directa está activada por predefinição, uma vez que permite ao cliente da Web obter rapidamente conteúdo a partir do gestor de recursos. <br /><br />Pode desactivar esta opção se não pretender que a aplicação cliente aceda ao gestor de recursos directamente ou se tiver uma firewall ou um servidor proxy que impede o cliente da Web de aceder ao gestor de recursos através de URLs. Por exemplo, uma firewall pode impedir os utilizadores de visualizar documentos no visualizador applet quando a obtenção directa está activada.",
		admin_repcfg_cmItemTypesToDisplay: "Se não pretender que os utilizadores visualizem os tipos de itens recurso e os tipos de itens item no servidor do IBM Content Manager, pode apresentar apenas os tipos de itens modelo de documentos. Os tipos de itens são apresentados quando os utilizadores criam procuras, adicionam documentos e criam pastas.",
		admin_repcfg_cm_language_codes_hover: "Especifique os idiomas de apresentação dos dados devolvidos pelo servidor do Content Manager. A lista de idiomas disponíveis é controlada pela lista de definições de idioma no servidor.<br /><br /><b>Tenha em atenção:</b> Os dados no cliente da Web são apresentados no idioma definido no navegador da Web do utilizador.",
		admin_repcfg_cm_pdf_conversion_hover: "Especifique os tipos de documentos para converter para PDF quando um utilizador envia um documento com várias partes como anexo de correio electrónico. Todas as partes são combinadas num único documento PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Especifique se pretende que os utilizadores possam criar espaços de equipa e modelos de espaços de equipa neste repositório.<br /><br />Se permitir a utilização de espaços de equipas, o IBM Content Navigator cria o modelo de dados de espaço de equipa no repositório. O modelo de dados inclui modelos de propriedade, objectos personalizados, um objecto de pasta e várias pastas.",
		admin_repcfg_use_entry_template_p8_hover: "Especifique se pretende que os utilizadores possam criar e gerir modelos de entrada neste repositório do IBM Content Navigator. Se não activar esta função, os utilizações podem procurar e utilizar os modelos de entrada que já se encontram no repositório.<br /><br />Se activar a gestão de modelos de entrada, o IBM Content Navigator actualiza o modelo de dados de modelos de entrada no repositório. A actualização inclui novas propriedades. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Obter mais informações</a>",
		admin_repcfg_use_entry_template_cm_hover: "Especifique se pretende que os utilizadores possam criar e gerir modelos de entrada neste repositório do IBM Content Navigator.<br /><br />Se activar a gestão de modelos de entrada, o IBM Content Navigator cria o modelo de dados de modelos de entrada no repositório. O modelo de dados inclui um novo objecto de LCA, novas propriedades e um novo tipo de item. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Obter mais informações</a>",
		admin_repcfg_sync_service_p8_hover: "Especifique se pretende que os utilizadores possam sincronizar os seus itens favoritos entre as respectivas estações de trabalho e dispositivos móveis.<br><br><b>Importante:</b> Para utilizar esta função, tem de executar também as seguintes tarefas:<br><ul><li>Especifique o <b>URL público dos serviços de sincronização</b> na secção <b>Serviços de sincronização</b> da ferramenta de administração.</li><li>Adicione este repositório a um ambiente de trabalho para o qual os serviços de sincronização estejam activados.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Especifique se a opção de versão principal está seleccionada por predefinição quando os utilizadores adicionam documentos ao repositório.<br /><br />Os utilizadores podem desmarcar esta opção se pretenderem adicionar o documento como versão secundária.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Especifique se a opção de versão principal está seleccionada por predefinição quando os utilizadores dão entrada de documentos no repositório.<br /><br />Os utilizadores podem desmarcar esta opção se pretenderem dar entrada do documento como versão secundária.",
		admin_repcfg_p8_annotation_security_hover: "Especifique que tipo de segurança deve ser aplicada às anotações por predefinição.<br /><br />Os utilizadores têm a opção de alterar a segurança das anotações.",
		admin_repcfg_p8_connection_point_hover: "Se pretender utilizar fluxos de trabalho do IBM FileNet P8, seleccione um ponto de ligação do Process Engine. O ponto de ligação que seleccionar determina que fluxos de trabalho estão disponíveis para os utilizadores que acedem a este repositório.",
		admin_repcfg_p8_include_workflow_definition_hover: "Se apresentar a classe de documento de definição de fluxo de trabalho do IBM FileNet P8 no cliente da Web, os utilizadores podem procurar e adicionar definições de fluxo de trabalho ao repositório.",
		admin_repcfg_p8_include_form_template_hover: "Se apresentar a classe de documento de modelo de formulário do IBM FileNet P8 no cliente da Web, os utilizadores podem procurar e adicionar modelos de formulário ao repositório.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Especifique o caminho totalmente qualificado do ficheiro de configuração AFP2PDF para este repositório no servidor da aplicação da Web. É necessário o utilitário AFP2PDF Transform para visualizar e imprimir dados AFP.<br /><br /><b>Tenha em atenção:</b> É necessário que o utilitário AFP2PDF Transform esteja instalado para utilizar este parâmetro.",
		admin_repcfg_od_transform_xml_file_hover: " Se pretender utilizar uma conversão personalizada para converter conteúdo do Content Manager OnDemand, especifique o caminho totalmente qualificado do ficheiro XML utilizado para definir a conversão. O ficheiro XML tem de estar localizado no servidor da aplicação da Web.",
		admin_repcfg_od_ssl_hover: "Especifique se pretende utilizar SSL para encriptar a comunicação entre o servidor da aplicação IBM Content Navigator e o servidor de biblioteca do Content Manager OnDemand e servidores de objectos.<br /><br /><b>Importante:</b> Ao activar SSL para o Content Manager OnDemand, não inclui a comunicação entre o servidor da aplicação IBM Content Navigator, o servidor da Web ou as estações de trabalho dos utilizadores.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Especifique o caminho totalmente qualificado do ficheiro da base de dados de conjunto de chaves para este repositório no servidor da aplicação da Web. Por exemplo, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />O ficheiro de base de dados do conjunto de chaves contém certificados raiz fidedignos. Deve utilizar a protecção máxima do sistema de ficheiros para impedir o acesso não autorizado a este ficheiro.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Especifique o caminho totalmente qualificado do ficheiro stash do conjunto de chaves para este repositório no servidor da aplicação da Web. Por exemplo, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />O ficheiro stash do conjunto de chaves contém a palavra-passe para o ficheiro de base de dados do conjunto de chaves. Deve utilizar a protecção máxima do sistema de ficheiros para impedir o acesso não autorizado a este ficheiro.",
		admin_repcfg_od_sso_password_hover: "Especifique a palavra-passe a utilizar no início de sessão único com o servidor do OnDemand.",
		admin_repcfg_od_custom_properties_hover: "A API de Java ODWEK suporta propriedades personalizadas. Se pretender utilizar qualquer uma das propriedades personalizadas ao ligar ao repositório através do cliente da Web, especifique os nomes e os valores das propriedades personalizadas.<br /><br />Para obter mais informações sobre as propriedades personalizadas suportadas, consulte a documentação da API de JAVA ODWEK, localizada no subdirectório /api do directório de instalação de ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Introduza o nome da propriedade.",
		admin_repcfg_od_custom_properties_value_hover: "Introduza o valor de propriedade.",
		admin_repcfg_od_use_sso_hover: "Especifique se deve ser permitido o início de sessão único para utilizadores.<br /><br /><b>Importante:</b> O início de sessão único tem de estar activado no servidor do Content Manager OnDemand para que este parâmetro de configuração funcione.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Utilizar codificação GZIP para esta origem de CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nome de ficheiro a utilizar ao descarregar documentos:",
		admin_repcfg_cm_use_part_file_name_help: "Especifique como são determinados os nomes de documentos quando os utilizadores descarregam documentos.",
		admin_repcfg_cm_use_part_file_name_enable: "Utilizar o nome de ficheiro",
		admin_repcfg_cm_use_part_file_name_disable: "Utilizar o nome do item no repositório",
		admin_repcfg_add_doc_name: "Nome predefinido para um documento adicionado:",
		admin_repcfg_add_doc_name_hover: "Os utilizadores podem alterar o nome antes de adicionar o documento.",
		admin_repcfg_add_doc_name_empty: "Nenhum (em branco)",
		admin_repcfg_add_doc_name_file_name: "O nome do ficheiro do documento seleccionado",

		admin_repcfg_compound_documents: "Funções de documentos compostos:",
		admin_repcfg_compound_documents_hover: "Active as funções de documentos compostos do P8, tais como a navegação.",
		admin_repcfg_cm_action_list_config_enabled: "Lista de acções de item de trabalho:",
		admin_repcfg_cm_action_list_config_hover: "Quando configura o encaminhamento de documentos no cliente de administração do sistema do Content Manager, pode especificar uma lista de acções que um utilizador pode executar no item de trabalho.<br /><br />Active esta opção se pretende utilizar a Lista de Acções a partir do servidor do Content Manager. Estas definições são utilizadas no menu de contexto e na janela Editar Propriedades para o item de trabalho.<br /><br /><b>Importante:</b> As definições na Lista de Acções substituem quaisquer menus personalizados que tenha configurado na ferramenta de administração do Content Navigator. Se não existirem definições na Lista de Acções, o utilizador não poderá tomar quaisquer acções sobre itens de trabalho.",

		admin_repcfg_box_share: "Partilha do Box",
		admin_repcfg_box_share_p8_hover: "Permite aos utilizadores partilhar um documento deste repositório. Partilhar um documento inclui copiar o ficheiro para o Box, criando uma ligação e enviando a ligação numa mensagem de correio electrónico.<br /><br />Se activar a partilha do Box, o IBM Content Navigator cria o modelo de dados de partilha do Box no repositório. Para instalar o suplemento de partilha Box do IBM Content Navigator, é necessário estar ligado ao repositório como administrador do servidor da biblioteca.",

		admin_menu_type_icon: "Ícone de tipo Menu",
		admin_menu_toolbar_hover: "Barra de ferramentas",
		admin_menu_toolbar_custom_hover: "Barra de ferramentas personalizada",
		admin_menu_contextMenu_hover: "Menu contextual",
		admin_menu_contextMenu_custom_hover: "Menu contextual personalizado",

		admin_menu_contextMenu_custom_empty: "Não estão definidos menus contextuais personalizados nos suplementos configurados.",
		admin_menu_toolbar_custom_empty: "Não estão definidas barras de ferramentas personalizadas nos suplementos configurados.",

		admin_file_type_category_filters: "Filtros de tipo de ficheiro:",
		admin_file_type_category_filters_hover_help: "Especifique a lista de tipos de ficheiros que os utilizadores podem utilizar nas seguintes situações:<ul><li>Para limitar a lista de resultados ao procurar no IBM Content Navigator for Microsoft Office<li>Para limitar a lista de resultados ao procurar num repositório do IBM FileNet P8 no cliente da Web<li>Para restringir os tipos de ficheiros que os utilizadores podem adicionar ao repositório ao utilizar um modelo de entrada</ul>",
		admin_file_type_only_use_in_et_folder_association: "Mostrar apenas em associações de pastas de modelos de entrada",
		admin_office_config_properties_label: "Propriedades do Office",
		admin_office_config_type_label: "Tipo de dados",
		admin_office_config_mapped_property_label: "Propriedade do repositório",
		admin_office_config_properties_hover_help: "Introduza e, em seguida, adicione o nome de cada propriedade do Microsoft Office que pretende mapear a uma propriedade de repositório. O tipo de dados de todas as propriedades tem de coincidir.",
		admin_office_config_mapped_property_hover_help: "Se pretender mapear as propriedades do Office Properties a mais de uma propriedade de repositório, é necessário criar um novo mapeamento de propriedade",
		admin_new_property_mapping_title: "Novo mapeamento de propriedade",
		admin_property_mapping_title: "Editar mapeamento de propriedades",
		admin_property_mapping_instruction: "Especifique que propriedades do Microsoft Office pretende mapear a uma propriedade no repositório. O tipo de dados das propriedades do Office têm de corresponder ao tipo de dados da propriedade no repositório. <br /><br />Se um documento do Office incluir mais de uma propriedade do mapeamento, o IBM Content Navigator utiliza a primeira propriedade na lista para preencher a propriedade no repositório.",
		admin_ms_general_settings: "Configuração geral:",
		admin_ms_delete_local_settings: "Eliminar os ficheiros locais quando os utilizadores:",
		admin_ms_outlook_options: "Integração com o Outlook:",
		admin_ms_enable_props_mapping: "Mapear propriedades do Office a propriedades do repositório quando os utilizadores:",
		admin_ms_open_doc_when_checkout: "Automaticamente dar saída de um documento quando este está aberto",
		admin_ms_open_doc_when_checkout_hover_help: "Seleccionar esta opção impede que o utilizador substitua o ficheiro no repositório com uma versão anterior do ficheiro.",
		admin_ms_prompt_close_office: "Pedir aos utilizadores que dêem entrada de documentos ao fechar aplicações do Office",
		admin_ms_prompt_close_office_hover_help: "Seleccionar esta opção impede que os utilizadores se esqueçam de dar entrada do seu trabalho.",
		admin_ms_add_with_entry_template_only: "Mostrar apenas a acção Adicionar com modelo",
		admin_ms_delete_local_on_add: "Eliminar os ficheiros locais quando os utilizadores adicionam documentos",
		admin_ms_delete_local_on_checkin: "Eliminar os ficheiros locais quando os utilizadores dão entrada de documentos ou cancelam a saída",
		admin_ms_delete_local_on_add_hover_help: "Quando um utilizador adiciona um documento no IBM Content Navigator for Microsoft Office, o documento é adicionado ao repositório e a cópia local do documento permanece aberta para que os utilizadores possam dar imediatamente saída do documento para efectuar alterações.<br /><br />Seleccione esta opção para fechar e eliminar automaticamente a cópia local do documento depois de adicionar o documento ao repositório.",
		admin_ms_delete_local_on_checkin_hover_help: "Quando um utilizador dá entrada de um documento no IBM Content Navigator for Microsoft Office, é dada entrada do documento no repositório e a cópia local do documento permanece aberta. Depois de utilizar a acção de cancelar a saída dada, a cópia local do documento permanece aberta. Com a cópia local aberta, os utilizadores podem imediatamente dar saída do documento novamente para efectuar alterações.<br /><br />Seleccione esta opção para fechar e eliminar automaticamente a cópia local do documento depois de dar entrada de um documento ou de utilizar uma acção para cancelar a saída dada.",
		admin_ms_delete_local_on_save: "Guardar um documento",
		admin_ms_prompt_for_props_on_add: "Solicitar aos utilizadores para fornecerem valores de propriedade ao adicionarem mensagens de correio electrónico ao repositório",
		admin_ms_prompt_for_props_on_add_hover_help: "Se não seleccionar esta opção, o cliente da Web utiliza o mapeamento de propriedade do Outlook definido para o repositório.<br /><br />Se tiver modelos de entrada associados à pasta em que as mensagens de correio electrónico são adicionadas, poderão não ser solicitadas quaisquer propriedades ao utilizador.",
		admin_ms_delete_email_on_add: "Eliminar correio electrónico do servidor de correio electrónico quando essa mensagem é adicionada ao repositório",
		admin_ms_send_email_as_link_only: "Impedir que os utilizadores enviem documentos como anexos",
		admin_ms_send_email_as_link_only_hover_help: "Se seleccionar esta opção, os utilizadores só podem enviar documentos como ligações do Outlook. Esta opção garante que apenas os utilizadores com os privilégios apropriados no repositório podem visualizar documentos.",
		admin_ms_enable_prop_mapping_for_add: "Mapear propriedades do Office a propriedades do repositório quando os utilizadores adicionarem ou derem entrada de documentos",
		admin_ms_checkout_document_after_add: "Dar saída dos documentos automaticamente após serem adicionados ao repositório",
		admin_no_default_document_type_filtering: "Devolver todos os tipos de documentos por predefinição quando os utilizadores efectuam procuras",
		admin_no_default_document_type_filtering_hover_help: "No IBM Content Navigator for Microsoft Office, o comportamento predefinido consiste no facto de os utilizadores apenas visualizarem o tipo de documento da aplicação actual quando efectuam procuras. Por exemplo, o tipo de documento do Word é seleccionado por predefinição quando efectuam procuras a partir do Microsoft Word.<br/><br/>No entanto, seleccionar esta opção limpa as caixas de verificação de tipos de documentos para que os utilizadores visualizem todos os documentos devolvidos por uma procura. Os utilizadores podem substituir esta definição, seleccionando um ou mais tipos de documentos antes de efectuarem procuras.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Especifique se as propriedades de documentos definidas para os documentos do Microsoft Office devem ser mapeadas a propriedades definidas no repositório.<br /></br /><b>Importante:</b> Se activar esta função, terá de configurar as propriedades do Office para cada repositório no seu ambiente. Se não mapear as propriedades do Office às propriedades do repositório, esta função não irá funcionar.<br /><br />Esta definição não é aplicável ao Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Seleccione esta opção para reduzir o número de passos necessários para os utilizadores trabalharem com documentos após estes serem adicionados ao repositório.<br /></br /><b>Sugestão:</b> Para garantir que os utilizadores dão entrada dos ficheiros novamente no repositório, seleccione <b>Pedir aos utilizadores que dêem entrada de documentos ao fechar aplicações do Office</b>.",
		admin_ms_show_details_recently_used: "Mostrar detalhes do item <b>Utilizado recentemente</b>",
		admin_ms_show_details_recently_used_hover_help: "Por predefinição, quando vê a lista de itens utilizados recentemente, os detalhes dos itens são ocultos, permitindo a apresentação de mais itens. Quando selecciona esta opção, na lista de itens utilizados recentemente, os detalhes são apresentados para o primeiro documento no painel de detalhes por predefinição.",
		admin_ms_show_no_permissions_warning: "Mostrar avisos quando os utilizadores editam propriedades ou dão entrada de um documento, mas não têm permissão para ver o modelo de entrada do documento",
		admin_ms_show_no_permissions_warning_hover_help: "Se um documento no repositório foi criado utilizando um modelo de entrada, mas o utilizador não tem permissão para ver o modelo de entrada do documento, o modelo de entrada não é obtido.<br /><br/>Assim, quando o utilizador edita as propriedades do documento, as propriedades são apresentadas sem utilizar o modelo de entrada. E quando o utilizador dá entrada do documento, a entrada do documento é dada sem utilizar o modelo de entrada.<br /><br />Por predefinição, estas acções ocorrem sem informar o utilizador de que o modelo de entrada não está a ser utilizado. É apenas registado um aviso no ficheiro de registo.<br /><br />Seleccione esta opção se pretender apresentar avisos que informam imediatamente o utilizador quando o modelo de entrada não é utilizado.",
		admin_ms_hide_search_actions: "Contrair secção de filtros de procura",
		admin_ms_hide_search_actions_hover_help: "Por predefinição, os utilizadores podem aplicar um filtro de acção para especificar uma acção, um utilizador ou grupo de utilizadores e seleccionar a data ou intervalo de datas em que a acção ocorreu. Por exemplo, pode procurar documentos adicionados apenas pelo utilizador durante o mês anterior.<br /><br />Se não pretender que os utilizadores apliquem filtros de acção, seleccione esta opção para ocultar os filtros de acção e reduzir o número de campos apresentados ao definir os critérios de procura.",
		admin_ms_hide_save_document: "Ocultar a opção <b>Guardar</b> na barra da fita",
		admin_ms_hide_save_document_hover_help: "Ao utilizar a opção <b>Guardar</b>, os utilizadores podem guardar alterações a documentos no repositório sem verificar no documento.",
		admin_ms_indicate_managed_email_on_add: "Indicar se uma mensagem de correio electrónico já foi adicionada ao repositório",
		admin_ms_indicate_managed_email_on_add_hover_help: "Seleccionar esta opção permite que os utilizadores tenham conhecimento de que já se encontra uma mensagem de correio electrónico no repositório, o que pode reduzir o número de vezes que uma mensagem de correio electrónico é adicionada ao repositório.  Quando esta opção é seleccionada, é criada uma nova categoria de cor denominada IBM ECM no Microsoft Outlook. Qualquer mensagem de correio electrónico que seja adicionada ao repositório é automaticamente adicionada à categoria Gerido no IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Opções Adicionar no grupo Editar:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Especifique as opções <b>Adicionar</b> que estão disponíveis no grupo <b>Editar</b> na barra do friso:<ul><li>Seleccione <b>Mostrar todas as opções Adicionar</b> para apresentar o botão Adicionar e todas as acções Adicionar disponíveis no grupo Editar.</li><li>Seleccione <b>Ocultar todas as opções Adicionar</b> para impedir que os utilizadores adicionem documentos ao repositório ou caso pretenda que os utilizadores apenas adicionem documentos a partir de um espaço de equipa.</li><li>Seleccione <b>Ocultar a acção Adicionar com modelo</b> se pretender impor associações de pastas de modelos de entrada e impedir que os utilizadores seleccionem um modelo de entrada diferente.</li><li>Seleccione <b>Mostrar apenas a acção Adicionar com modelo</b> se pretender requerer que os utilizadores adicionem documentos utilizando modelos de entrada.</li></ul>",
		admin_ms_show_edit_group_add_button: "Mostrar todas as opções Adicionar (predefinição)",
		admin_ms_hide_edit_group_add_button: "Ocultar todas as opções Adicionar",
		admin_ms_hide_add_with_entry_template: "Ocultar a acção Adicionar com modelo",
		admin_ms_managed_in_ecm: "Gerido no IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Se os utilizadores apresentarem categorias no Microsoft Outlook, este rótulo é apresentado para correio electrónico que tenha sido adicionado a um repositório do IBM Content Manager ou do IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "O nome da categoria Gerido no IBM ECM não pode conter uma vírgula (,) ou um ponto e vírgula (;).",
		admin_delete_open_docs_after_close: "Eliminar automaticamente documentos abertos quando os utilizadores fecham os documentos",
		admin_admin_delete_open_docs_after_close_hover_help: "Quando um utilizador abre um documento no IBM Content Navigator for Microsoft Office, o documento é descarregado para o directório de documentos do utilizador ou para a localização especificada pelas definições de rastreio de ficheiros para o ambiente de trabalho.<br><br>Seleccione esta opção para eliminar os ficheiros que estão abertos, mas cuja saída não é dada quando os utilizadores fecham os documentos. Seleccionar esta opção permite:<ul><li>Impor a conformidade com políticas de TI</li><li>Certificar-se de que os utilizadores estão a utilizar a versão mais recente dos documentos</li><li>Reduzir a quantidade de espaço em disco utilizado para armazenar documentos</li><ul>",
		admin_ms_custom_command_configuration: "Comandos personalizados:",
		admin_ms_custom_command_configuration_hover_help: "Pode adicionar até quatro comandos à barra de ferramentas do IBM Content Navigator for Microsoft Office nas aplicações do Microsoft Office. Os comandos podem ser utilizados para abrir URLs. Por exemplo, pode adicionar um comando para abrir um serviço que pode ser utilizado para procurar utilizadores e grupos.",
		admin_ms_custom_command_dialog_title: "Editar comando personalizado",
		admin_ms_custom_command_dialog_intro_text: "Defina um comando que possa ser utilizado para abrir um URL a partir da barra de ferramentas do IBM Content Navigator for Microsoft Office em aplicações do Microsoft Office.",
		admin_ms_custom_command_id: "Comando ${0}",
		admin_ms_custom_command_available_label: "Disponível",
		admin_ms_custom_command_available_hover_help: "Caso seja necessário colocar o URL definido para um comando offline para fins de manutenção, pode desmarcar a caixa de verificação do comando para que este não seja apresentado no Microsoft Office.<br/><br/><b>Importante:</b> Os utilizadores têm de concluir sessão no ambiente de trabalho para que as alterações sejam aplicadas no IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID do comando",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etiqueta",
		admin_ms_custom_command_label_hover_help: "Especifique a etiqueta a apresentar para o comando no Microsoft Office.",
		admin_ms_custom_command_description_label: "Descrição",
		admin_ms_custom_command_description_hover_help: "Especifique a descrição a apresentar para o comando no Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Especifique o URL totalmente qualificado a abrir a partir do Microsoft Office. O URL pode corresponder a uma página da Web ou serviço.",
		admin_ms_custom_command_icon_label: "Ícone",
		admin_ms_custom_command_icon_hover_help: "Especifique o nome do ficheiro do ícone a apresentar, por exemplo, CommandIcon.png.<br/><br/><b>Importante:</b> Tem de adicionar o ficheiro do ícone ao subdirectório de suplementos do directório de instalação do IBM Content Navigator for Microsoft Office em cada máquina do cliente.<br/><br/>Se o ficheiro do ícone não se encontrar no directório de suplementos ou se não especificar um ícone, será apresentado o ícone predefinido customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Etiqueta de grupo:",
		admin_ms_custom_command_group_name_hover_help: "Pode especificar uma etiqueta de grupo para apresentar abaixo dos comandos personalizados na barra do friso.<br/><br/>Se não especificar uma etiqueta, a etiqueta de grupo é <b>Comandos personalizados</b>.",
		admin_ms_ribbon_tab_label: "Etiqueta do separador do IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Introduza o nome que pretende apresentar para o separador IBM Content Navigator for Microsoft Office na barra do friso do Microsoft Office. Se não especificar um nome, o separador será denominado \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Fechar o painel de tarefas quando os utilizadores abrem documentos",
		admin_ms_close_task_pane_on_open_hover_help: "Seleccione esta opção se pretender maximizar o espaço onde os utilizadores podem visualizar documentos no Microsoft Office.<br/><br/>Utilizadores do Microsoft Office 2010: Para assegurar que o painel de tarefas está fechado para todos os documentos, active o modo de interface de documentos múltiplos (MDI), fazendo clique em <b>Opções</b> &gt; <b>Avançadas</b> e desmarcando a opção <b>Mostrar todas as janelas na Barra de Ferramentas</b>.",
		admin_ms_open_document_options: "Opções de abertura de documento:",
		admin_ms_delete_local_file_options: "Opções de eliminação de ficheiros locais:",
		admin_ms_add_and_checkin_options: "Opções para adicionar e dar entrada:",
		admin_ms_search_options: "Opções de procura:",
		admin_ms_display_options: "Opções de apresentação:",
		admin_ms_bidirection_enable_label: "Activar suporte para texto bidireccional",
		admin_ms_bidirection_enable_hover_help: "Seleccione esta opção se pretender permitir que os utilizadores introduzam ou visualizem texto no IBM Content Navigator for Microsoft Office numa direcção que não seja da esquerda para a direita.",
		admin_ms_text_direction_label: "Direcção do texto de base para o conteúdo:",
		admin_ms_text_direction_hover_help: "Especifique a direcção na qual o texto é introduzido nos campos de entrada de dados no IBM Content Navigator for Microsoft Office. Esta definição também controla o modo como os itens, tais como nomes de pastas ou valores de propriedades, são apresentados.",
		admin_ms_control_threshold_label: "Número mínimo de itens para activar a visão antecipada:",
		admin_ms_control_threshold_hover_help: "Por predefinição, a visão antecipada está activada quando o número de itens é superior ou igual a 50, para procurar ou definir propriedades que têm valores predefinidos numa lista pendente. Pode alterar o valor mínimo.",

		admin_ms_default_email_class: "Classe a utilizar ao adicionar correio electrónico",
		admin_ms_default_email_class_hover_help: "Qualquer correio electrónico que seja adicionado a este repositório a partir do Microsoft Outlook será adicionado à classe que especificar. Os utilizadores não podem alterar a classe.",
		admin_ms_default_folder_class: "Classe a utilizar ao criar pastas",
		admin_ms_default_folder_class_hover_help: "Qualquer pasta que seja criada neste repositório a partir de uma aplicação do Microsoft Office será adicionada à classe que especificar.  Os utilizadores não podem alterar a classe.",
		admin_ms_default_folder_warn_title: "Não é possível utilizar a classe ${0} como a classe a utilizar ao criar pastas.",
		admin_ms_default_folder_warn_name_prop_invalid: "A propriedade do nome da classe não é uma cadeia e o nome da pasta tem de ser uma cadeia.<br />Seleccione uma classe diferente a utilizar quando criar pastas ou contacte o administrador do IBM Content Manager para alterar a propriedade do nome da classe para uma cadeia.",
		admin_ms_default_folder_warn_req_props: "A classe inclui as propriedades requeridas que não têm valores. Contudo, os utilizadores não podem especificar valores para as propriedades requeridas quando criam pastas a partir do IBM Content Navigator for Microsoft Office.<br />Seleccione uma classe diferente a utilizar quando criar pastas ou contacte o administrador do IBM Content Manager para tornar as propriedades requeridas opcionais ou para pré-preencher as propriedades requeridas com um valor.",
		admin_ms_delimiter_for_office_properties: "Delimitador para propriedades de cadeias de valor múltiplo",
		admin_ms_delimiter_for_office_properties_hover_help: "Especifique o carácter a utilizar como delimitador para as propriedades de cadeia que está a mapear para propriedades de cadeia de valor múltiplo. Por predefinição, pode atribuir um conjunto de valores a uma propriedade de cadeia de valor múltiplo utilizando um ponto e vírgula (;) como delimitador para separar os valores. Contudo, se um dos valores de cadeia incluir um ponto e vírgula, não é possível adicionar esse valor de cadeia a não ser que o delimitador seja alterado para uma carácter diferente. Por exemplo, pode alterar o delimitador para uma vírgula (,)",
		admin_ms_outlookPropertyRemembrance : "Memorizar as definições ao adicionar mensagens e anexos",
		admin_ms_outlookPropertyRemembrance_hover_help : "Os valores de propriedade, localização, selecção de classe e segurança atribuídos às mensagens e anexos são memorizados e serão utilizados como a predefinição ao adicionar itens posteriormente.",

		admin_file_type_name_hover_help: "Ajuda sobreposta de Nome",
		admin_file_type_description_hover_help: "Ajuda sobreposta de Descrição",
		admin_file_type_dialog_title: "Editar filtro de tipos de ficheiro",
		admin_new_file_type_dialog_title: "Novo filtro de tipos de ficheiro",
		admin_mobile_feature_dialog_title: "Função",
		admin_mobile_feature_dialog_new_title: "Nova função",
		admin_file_type_instructions: "Crie um filtro que os utilizadores podem utilizar para limitar a lista de resultados da procura. Pode mapear vários tipos MIME ao filtro.",
		admin_file_type_filter_place_holder: "Filtro de tipos MIME",
		admin_new_button_label: "Novo",
		admin_edit_button_label: "Editar",
		admin_delete_button_label: "Eliminar",
		admin_copy_button_label: "Copiar",
		admin_verify_button_label: "Verificar",
		admin_availabe_filters_label: "Filtros disponíveis",
		admin_selected_filters_label: "Filtros seleccionados",

		admin_mobile_access: "Acesso à aplicação móvel:",
		admin_mobile_access_hover_help: "Se pretender utilizar o IBM Content Navigator a partir de um dispositivo móvel, é recomendado permitir que os utilizadores acedam a este ambiente de trabalho a partir da aplicação móvel.<br /><br />Se desactivar o acesso a este ambiente de trabalho a partir da aplicação móvel, os utilizadores podem continuar a aceder ao cliente da Web a partir dos navegadores móveis. Contudo, o cliente da Web não está concebido para ser acedido a partir de dispositivos móveis.",

		admin_mobile_access_allow_label: "Permitir aos utilizadores:",
		admin_mobile_allow_add_photos: "Adicionar fotografias a partir da biblioteca de fotografias e da câmara",
		admin_mobile_allow_add_docs: "Adicionar documentos e criar pastas no repositório",
		admin_mobile_allow_open_docs: "Abrir documentos noutras aplicações",
		admin_mobile_allow_add_docs_hover_help: "Os utilizadores podem criar pastas ou adicionar documentos de outras aplicações móveis, tais como um documento anexo numa mensagem de correio electrónico.",
		admin_mobile_allow_open_docs_hover_help: "É solicitado aos utilizadores que seleccionem a aplicação a utilizar para visualizar o documento seleccionado. Se estiver disponível apenas uma aplicação, é utilizada essa aplicação.",
		admin_mobile_features: "Funcionalidades:",
		admin_mobile_features_hover_help: "Especifique que funções deste ambiente de trabalho são apresentadas na aplicação móvel do IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nova função",
		admin_mobile_move_up_button_label: "Mover para cima",
		admin_mobile_move_down_button_label: "Mover para baixo",
		admin_desktop_mobile_instructions: "Instrução da definição móvel aqui",
		admin_desktop_max_number_of_docs_to_add: "Número máximo de documentos a adicionar:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Especifique o número máximo de documentos que os utilizadores podem adicionar de cada vez. O máximo predefinido é 50. Contudo, pode definir o valor máximo até 300.",
		admin_desktop_max_number_of_docs_to_modify: "Número máximo de artigos a modificar:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Especifique o número máximo de itens que os utilizadores podem modificar de cada vez. O máximo predefinido é 50. Contudo, pode definir o valor máximo até 300.",
		admin_desktop_max_conversion_size: "Quantidade máxima de dados para conversões de PDF (em MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Restrição:</b> Esta definição não é suportada no IBM Content Manager OnDemand.<br/><br/>Especifique a quantidade máxima de dados que podem ser convertidos para PDF. Este limite aplica-se quando os utilizadores descarregam itens como ficheiros PDF ou enviam itens através de correio electrónico como ficheiros PDF.<br /><br />Se não for possível determinar o tamanho de cada documento, os documentos continuam a ser convertidos para PDF.<br/><br/>O limite predefinido é 200 MB. A definição do limite acima de 200 MB poderá afectar o desempenho do sistema.",
		admin_desktop_timeProperties: "Marca de hora:",
		admin_desktop_time_properties_hover_help: "<b>Apenas utilizadores do IBM FileNet P8:</b> Esta definição aplica-se a propriedades personalizadas e não se aplica às propriedades do sistema. Por exemplo, a propriedade Modificado por continuará a mostrar a parte da hora da marca de hora se seleccionar <b>Apresentar apenas a parte da data da marca de hora</b>.<br/><br/>Esta definição não altera a marca de hora no repositório.",
		admin_desktop_disable_time_stamp: "Apresentar a marca de hora completa",
		admin_desktop_enable_time_stamp: "Apresentar apenas a parte da data da marca de hora",
		admin_desktop_timezone: "Fuso horário:",
		admin_desktop_timezone_localuser: "Apresentar o fuso horário local do utilizador",
		admin_desktop_timezone_alluser: "Apresentar o mesmo fuso horário para todos os utilizadores",
		admin_desktop_timezone_hover_help: "Pode especificar se os utilizadores vêem uma marca de hora com base no respectivo fuso horário local ou se todos os utilizadores vêem a mesma marca de hora.<br/><br/>Esta definição não altera a marca de hora no repositório. No entanto, a definição que seleccionar determina o fuso horário utilizado para criar a marca de hora no repositório quando os utilizadores adicionarem ou modificarem itens.",
		admin_desktop_mobile_feature_display_label: "Apresentar",
		admin_desktop_mobile_feature_icon_file_label: "Ficheiro de ícone",
		admin_mobile_feature_dialog_icon_file_label: "Ficheiro de ícone:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nome",
		admin_desktop_mobile_select_feature_label: "Seleccionar função",
		admin_desktop_mobile_feature_icon_label: "Ícone de função",
		admin_desktop_share_admin_none: "Administrador não definido.",
		admin_desktop_share_admin_edit_label: "Definir administrador...",
		admin_browse_icon: "Ícone de pesquisa",
		admin_search_icon: "Ícone de procura",
		admin_favorites_icon: "Ícone de favoritos",
		admin_casesearch_icon: "Ícone de maiúsculas e minúsculas",
		admin_datacap_icon: "Ícone Datacap",
		admin_system_defined: "Definido pelo sistema",
		admin_icon_file_placeholder_text: "Localização do ficheiro (por exemplo, http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Raiz",
		admin_folder_default: "Predefinição",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Barras de ferramentas",
		admin_menu_context_menus: "Menus contextuais",
		admin_menu_office_toolbars: "Comandos do friso do Microsoft Office",
		admin_menu_office_menus: "Menus contextuais do Microsoft Office",

		admin_file_name_label: "Nome do ficheiro:",
		admin_exportconfiguration_security_label: "Incluir utilizadores e grupos com autorização para utilizar este ambiente de trabalho",
		admin_exportconfiguration_instruction: "Pode exportar os ambientes de trabalho, incluindo as configurações de repositórios e configurações de suplementos associadas aos ambientes de trabalho seleccionados, para um ficheiro que poderá importar para outra ocorrência do IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportar ambiente de trabalho",
		admin_exportconfiguration_button_label: "Exportar",
		admin_dialog_select_all: "Seleccionar tudo",
		admin_dialog_deselect_all: "Limpar tudo",

		admin_importconfiguration_instruction: "Os itens no ficheiro de configuração seleccionado serão importados para este sistema. Contudo, se já existir um item com o mesmo ID no sistema, será necessário decidir se pretende manter ou substituir o item.",
		admin_importconfiguration_dialog_label: "Importar ambiente de trabalho",
		admin_importconfiguration_reason_dialog_label: "Importar motivos de redacção",
		admin_importconfiguration_button_label: "Importar",
		admin_to_be_imported: "Item de configuração a importar",
		admin_on_target_system: "Item existente no sistema de destino",
		admin_import_short_warning_message: "Os seguintes itens já existem neste sistema. Seleccione os itens que pretende substituir neste sistema:",
		admin_import_warning_message: "Os seguintes itens de configuração têm os mesmos IDs que os itens existentes no sistema de destino. Seleccione apenas os itens que pretende importar e substituir no sistema de destino.<br /><br />Se não pretender substituir um item de configuração, crie uma cópia do item na ocorrência a partir da qual exportou o ambiente de trabalho, atribua um ID diferente ao mesmo e associe-o ao ambiente de trabalho. Exporte novamente o ambiente de trabalho e, em seguida, importe o ambiente de trabalho nesta ocorrência.",
		admin_choose_file_to_import_label: "Seleccionar o ficheiro a importar:",
		admin_download_imported_log: "Descarregar relatório",
		admin_desktop_import_summary: "Resumo de importação do ambiente de trabalho",
		admin_reason_import_summary: "Resumo de importação do motivo de redacção",
		admin_rba_import_summary: "Resumo de importação da função de administração",
		admin_import_open_tabs_checking: "Para poder importar ambientes de trabalho, tem de fechar todos os separadores que não o separador <bold>Ambientes de trabalho</bold> na ferramenta de administração.",
		admin_import_no_conflict: "Os seguintes itens serão importados:",
		admin_desktop_invalid: "Ambiente de trabalho não válido",
		admin_desktop_warning: "O ambiente de trabalho foi guardado com avisos.",
		admin_repos_warning: "O repositório foi guardado com avisos.",
		admin_config_type_icon: "Ícone de tipo de item de configuração",

		admin_approval_workflow: "Fluxo de trabalho de aprovação",
		admin_approval_workflow_hover: "Permite aos utilizadores iniciar um fluxo de trabalho de aprovação predefinido. Pode desactivar o fluxo de trabalho de aprovação para permitir aos utilizadores iniciar um fluxo de trabalho de aprovação personalizado definido por uma subscrição. Por predefinição, o fluxo de trabalho de aprovação está activado.<br><br><b>Importante:</b> Se activar o fluxo de trabalho de aprovação, é necessário garantir que uma ou ambas as definições de fluxos de trabalho de aprovação predefinidas (ICNParallelDocumentApproval.pep e ICNSequentialDocumentApproval.pep) são adicionadas ao repositório e transferidas para o Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Não pode especificar utilizadores e grupos que têm acesso a este ambiente de trabalho.",
		admin_cannot_add_desktop_members_error_explanation: "Não tem as permissões apropriadas para obter as informações de utilizador e de grupo.",
		admin_cannot_add_desktop_members_error_userResponse: "Inicie sessão com um nome de utilizador diferente ou solicite ao administrador de sistema do IBM Content Manager para lhe conceder o privilégio UserACLOwner, necessário para obter informações de utilizador e grupo.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Não é possível seleccionar utilizadores e grupos.",
		admin_cannot_select_users_groups_error_explanation: "Não tem as permissões apropriadas para obter as informações de utilizador e de grupo.",
		admin_cannot_select_users_groups_error_userResponse: "Inicie sessão com um nome de utilizador diferente ou solicite ao administrador de sistema do IBM Content Manager para lhe conceder o privilégio UserACLOwner, necessário para obter informações de utilizador e grupo.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "O cliente OAuth2 não foi encontrado.",
		oauth_client_not_found_error_explanation: "O ID de cliente OAuth2 ${0} não foi encontrado.",
		oauth_client_not_found_error_userResponse: "Contacte o seu administrador de sistema e indique que o ID de cliente OAuth2 não foi encontrado.",
		oauth_client_not_found_error_adminResponse: "Reveja a configuração do repositório e verifique que contém o ID de cliente OAuth2 correcto.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Falha do início de sessão do repositório.",
		oauth_login_failed_error_explanation: "Falha da tentativa de iniciar sessão no repositório ${0}.",
		oauth_login_failed_error_userResponse: "Verifique que o ID de utilizador e palavra-passe estão correctos e tente iniciar sessão novamente.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Ocorreu um erro ao tentar iniciar sessão em ${0}.",
		oauth_error_return_error_explanation: "Falha da tentativa de autorização ${0}.",
		oauth_error_return_error_userResponse: "Contacte o seu administrador de sistema com a informação seguinte: a tentativa de autorização ${0} falhou e devolveu a mensagem de erro seguinte: <br>${1}<br><b>erro:</b> ${2}.<br><b>descrição:</b> ${3}.",
		oauth_error_return_error_adminResponse: "As informações adicionais sobre o erro podem ser obtidas nos ficheiros de registo do servidor da aplicação da Web.  Para obter mais informações sobre os ficheiros de registo, consulte o tópico &quot;IBM Content Navigator log files&quot; no IBM Knowledge Center. Utilizando informação sobre a tentativa de autorização ${0}, tente corrigir o problema e verifique que OAuth2 está activado.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Aplicação OAuth de destino",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "erro",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Mensagem de erro OAuth não reconhecida.",

		delete_share_permission_error: "A partilha não foi eliminada.",
		delete_share_permission_error_explanation: "Não tem as permissões apropriadas para eliminar a partilha.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Não é possível guardar este item.",
		class_not_support_share_error_explanation: "A classe ${0} não foi configurada para suportar a partilha.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Não é possível guardar este item.",
		rbr_not_support_share_error_explanation: "Foi adicionado conteúdo sensível ao item.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "O dispositivo a partir do qual o utilizador está a tentar iniciar sessão não está autorizado a aceder à conta de utilizador.",
		box_oauth_error_invalid_request: "O pedido tem em falta um parâmetro requerido, inclui um valor de parâmetro não válido, inclui um parâmetro mais de uma vez ou está incorrecto.",
		box_oauth_error_unsupported_response_type: "O servidor de autorizações não suporta a obtenção de um código de autorização utilizando este método.  Verifique o valor do parâmetro do código no seu pedido.",
		box_oauth_error_access_denied: "O proprietário do recurso ou servidor de autorizações recusou o pedido.",
		box_oauth_error_temporarily_unavailable: "O seu dispositivo está limitado por classificação. Terá de reduzir a classificação dos pedidos de autorização ou aguardar.",
		box_oauth_error_unknown: "Mensagem de erro do Box não reconhecida.",

		admin_default_search_type: "Tipo de procura predefinido",
		admin_default_search_type_hover: "Especifique que opção está seleccionada por predefinição no campo <b>Procurar</b> no menu <b>Opções de procura</b>.",
		admin_default_search_type_documents: "Documentos",
		admin_default_search_type_folders: "Pastas",
		admin_default_search_type_folders_and_documents: "Documentos e pastas",

		admin_restricted_search_type: "Permitir procura activa",
		admin_restricted_search_type_hover: "Por predefinição, os utilizadores podem procurar em documentos e pastas. Se pretender ocultar a opção de procura e restringir as procuras apenas a documentos, seleccione Documentos e desmarque Pastas.</br>,</br> Se permitir procuras em documentos e pastas, seleccione a apresentação da opção predefinida quando o painel de procura é aberto.",
		admin_restricted_search_type_documents: "Documentos",
		admin_restricted_search_type_folders: "Pastas",
		admin_restricted_search_type_folders_and_documents: "Documentos e pastas",

		admin_default_search_version: "Versão de procura predefinida",
		admin_default_search_version_hover: "Especifique que opção está seleccionada por predefinição no campo <b>Versão</b> no menu <b>Opções de procura</b>.",

		admin_all_classes_search: "Procurar em todas as classes",
		admin_all_classes_search_hover: "Especifique se os utilizadores podem procurar em todas as classes e, em caso afirmativo, o que deve ser incluído nas procuras de documentos.",
		admin_all_classes_search_removed_hover: "As opções para procurar em todas as classes não estão disponíveis porque o parâmetro context-param allPseudoClassHidden no web.xml da aplicação Navigator está definido como verdadeiro.",
		admin_all_classes_search_hide: "Remova a escolha para procurar em todas as classes",
		admin_all_classes_search_documents_only_documents: "Uma procura em documentos apenas inclui documentos, procuras guardadas e modelos de entrada",
		admin_all_classes_search_documents_non_folders: "Uma procura em documentos inclui quaisquer itens que não sejam pastas",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Vista em árvore:",
		admin_feature_config_tree_view_hoverhelp: "Especifique se os utilizadores podem aceder à lista de pastas no repositório através do painel Pesquisar. Se ocultar o painel Pesquisar, os utilizadores têm de utilizar a lista de conteúdo para navegar até às pastas no repositório.",
		admin_feature_config_selected_repositories_label: "Repositórios:",
		admin_feature_config_selected_repositories_hoverhelp: "Seleccione os repositórios aos quais os utilizadores podem aceder nesta função.",
		admin_feature_config_selected_repositories_select_state_hdr: "Seleccionar repositório",
		admin_feature_config_selected_repositories_name_hdr: "Nome do repositório",
		admin_feature_config_selected_repositories_show_hdr: "Mostrar",
		admin_feature_config_invalid_icon_title: "A função não tem algumas definições requeridas",
		admin_feature_config_view_select_hdr: "Seleccionar vista",
		admin_feature_config_view_hdr: "Ver",
		admin_feature_config_view: "Ver",
		admin_feature_config_views: "Vistas:",
		admin_feature_config_views_hoverhelp: "Especifique as vistas que os utilizadores podem aplicar à lista de conteúdo. As vistas são apresentadas pela ordem com que aparecem na lista. A primeira vista seleccionada é a vista predefinida para a função.<br><br><b>Importante:</b> Se activar a vista Película de filme, terá de configurar o visualizador de conversão de HTML para ver pré-visualizações de documentos.",

		admin_custom_dialog_name: "Nome:",
		admin_custom_dialog_value: "Valor:",
		admin_custom_setting_name_hover: "Introduza o nome da definição do Daeja ViewONE que pretende adicionar à configuração. Consulte a documentação do Daeja ViewONE para obter mais informações sobre as definições de configuração.",
		admin_custom_setting_value_hover: "Introduza o valor que pretende utilizar para a definição de configuração do Daeja ViewONE. Consulte a documentação do Daeja ViewONE para obter mais informações sobre os valores válidos para a definição de configuração.",

		entry_template_name_required_message: "O campo de nome nas definições de modelos de entrada é obrigatório.",
		entry_template_name_invalid_message: "O campo de nome nas definições de modelos de entrada não pode conter os seguintes caracteres: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Quando são seleccionados utilizadores e grupos para o campo Partilhar com nas definições de modelos de entrada, tem de especificar, pelo menos, um utilizador ou grupo.",
		entry_template_no_permission_to_save_to_teamspace_message: "Não tem permissão para adicionar modelos de entrada ao espaço de equipa (${0}) que foi seleccionado em Guardar em nas definições de modelos de entrada.",
		entry_template_save_in_destination_required_message: "Tem de especificar uma localização para guardar predefinida na secção <b>Definir a localização de armazenamento de itens</b>.",
		entry_template_save_in_destination_must_select_folder: "Se ocultar o campo <b>Guardar em</b> e solicitar aos utilizadores que adicionem novos itens a uma pasta, tem de seleccionar uma pasta no campo <b>Localização para guardar predefinida</b> na secção <b>Definir a localização de armazenamento de itens</b>.",
		entry_template_what_to_save_required_message: "Seleccione, pelo menos, uma opção para O que pretende guardar? em Definir opções.",
		entry_template_custom_workflow_empty_message: "Se seleccionar <b>Fluxo de trabalho personalizado...</b>, tem de procurar e seleccionar o fluxo de trabalho que pretende utilizar.",

		entry_template_new: "Novo modelo de entrada",
		entry_template_name_hover: "O nome do modelo de entrada não pode conter os seguintes caracteres: * \\ / : ? \" < > |",
		entry_template_name_invalid: "O nome do modelo de entrada não pode conter nenhum dos seguintes caracteres: * \\ / : ? \" < > |",
		entry_template_description_hover: "Forneça uma descrição que irá permitir que os utilizadores façam a distinção entre este modelo de entrada e outros modelos de entrada.",
		entry_tempalte_save_in_hover: "Especifique onde guardar o modelo de entrada.<br><br><b>Restrição:</b> Se guardar o modelo de entrada num espaço de equipa, apenas pode utilizar o modelo de entrada dentro do espaço de equipa.",
		entry_template_inherit_hover: "Se seleccionar esta opção, as definições de segurança para a pasta ascendente são adicionadas à lista de utilizadores e grupos com quem o modelo de entrada é partilhado.",
		entry_template_builder_aria_label: "Criador de modelos de entrada",
		entry_template_builder_layout_aria_label: "Criador de propriedades de modelos de entrada",

		entry_template_settings_document: "Definir o modelo de entrada",
		entry_template_settings_folder: "Definir a localização de armazenamento de itens",
		entry_template_settings_folder_intro: "Especifique o local onde são armazenados os itens que são adicionados utilizando este modelo de entrada.",
		entry_template_settings_properties: "Definir as propriedades de itens",
		entry_template_settings_properties_intro: "Pode especificar valores predefinidos para os itens que são adicionados utilizando este modelo de entrada. Além disso, pode alterar o esquema das propriedades para controlar que propriedades são apresentadas e a ordem pela qual são apresentadas.",
		entry_template_settings_workflow: "Configurar um fluxo de trabalho para o item",
		entty_template_settings_workflow_intro: "Pode especificar se um fluxo de trabalho é iniciado quando os itens são adicionados utilizando o modelo de entrada.",
		entry_template_settings_security: "Definir a segurança de itens",
		entry_template_settings_security_intro: "Pode especificar segurança predefinida para os itens que são adicionados utilizando este modelo de entrada. É possível que os utilizadores com as permissões apropriadas possam alterar a segurança do item depois de ser adicionado.",
		entry_template_settings_options: "Definir opções para o item",
		entry_template_xt_warning: "Guardar alterações efectuadas a este modelo de entrada irá converter o mesmo de um modelo de entrada do IBM Workplace XT para um modelo de entrada do IBM Content Navigator. O IBM Workplace XT não suporta modelos de entrada do IBM Content Navigator.",

		entry_template_properties_edit_layout: "Editar esquema...",
		entry_template_properties_read_only: "Só de leitura",
		entry_template_properties_hidden: "Oculto",

		entry_template_destination_show: "Mostrar o campo <b>Guardar em</b>",
		entry_template_destination_show_hover: "Se apresentar o campo <b>Guardar em</b>, os utilizadores podem alterar o local onde os itens são armazenados.",
		entry_template_destination_hide: "Ocultar o campo <b>Guardar em</b>",
		entry_template_destination_hide_hover: "Se ocultar o campo <b>Guardar em</b>, os utilizadores não podem alterar o local onde os itens são armazenados.",
		entry_template_folder_save_in_default: "Localização predefinida de <b>Guardar em</b>:",
		entry_template_folder_save_in_default_hover: "Especifique a localização predefinida na qual os itens são adicionados utilizando este modelo de entrada.<br><br>A localização predefinida que seleccionar impõe restrições sobre o comportamento de tempo de execução do modelo de entrada:<ul><li>Os utilizadores não podem seleccionar um repositório diferente.</li><li>Se a localização predefinida for um espaço de equipa, os utilizadores não podem seleccionar um espaço de equipa diferente.</li></ul>No entanto, se os utilizadores associarem este modelo de entrada a uma pasta, os utilizadores podem substituir a localização de armazenamento que está configurada para este modelo de entrada.",
		entry_template_folder_restrict_choice: "Solicitar aos utilizadores que adicionem itens à localização predefinida ou a uma pasta descendente da localização predefinida",
		entry_template_folder_file_in_required: "Solicitar aos utilizadores que adicionem novos itens a uma pasta",
		entry_template_folder_file_in_required_hover: "Se não seleccionar esta opção, os utilizadores poderão adicionar itens à pasta raiz do repositório.<br><br><b>Restrição:</b> A configuração do ambiente de trabalho poderá requerer que os utilizadores seleccionem uma pasta.",

		entry_template_document_type_show: "Mostrar o campo <b>O que pretende guardar</b>",
		entry_template_document_type_show_hover: "Se apresentar o campo <b>O que pretende guardar</b>, os itens que seleccionar são apresentados como opções no campo <b>O que pretende guardar</b>.",
		entry_template_document_type_hide: "Ocultar o campo <b>O que pretende guardar</b>",
		entry_template_document_type_hide_hover: "Se ocultar o campo <b>O que pretende guardar</b>, o tipo de documento que seleccionar é sempre utilizado quando os utilizadores adicionarem documentos utilizando este modelo de entrada.",
		entry_template_document_type: "Este modelo de entrada pode ser utilizado para adicionar os seguintes itens:",
		entry_template_document_type_hover: "Se apresentar o campo <b>O que pretende guardar</b>, os itens que seleccionar são apresentados como opções no campo <b>O que pretende guardar</b>.<br><br>Se ocultar o campo <b>O que pretende guardar</b>, o tipo de documento que seleccionar é sempre utilizado quando os utilizadores adicionarem documentos utilizando este modelo de entrada.",

		entry_template_misc: "Opções adicionais:",
		entry_template_auto_classify_show: "Classificar automaticamente o conteúdo do documento",
		entry_template_auto_classify_show_hover: "Quando um documento é classificado no FileNet Content Manager, o conteúdo do documento é examinado para determinar os valores de propriedades e a classe apropriados para o documento.<br><br>Contacte o administrador do sistema para determinar se a classificação de conteúdo está activada no Content Platform Engine.<br><br>Se activar esta opção, a classe e as propriedades do documento poderão ser alteradas quando um utilizador adicionar o documento ao repositório.",
		entry_template_allow_duplicate_file_names: "Permitir documentos com nomes de ficheiros duplicados",
		entry_template_allow_duplicate_file_names_hover: "Por predefinição, é possível adicionar documentos com o mesmo nome a uma pasta no FileNet Content Manager. Pode desmarcar esta opção se pretender que cada ficheiro na localização de armazenamento seleccionada tenha um nome exclusivo.",
		entry_template_allow_compound_documents: "Permitir que este documento seja o ascendente de um documento composto",
		entry_template_version_show: "Mostrar opções de versões para adicionar e dar entrada",
		entry_template_version_hide: "Ocultar opções de versões para adicionar e dar entrada",
		entry_template_version_to_add_as: "Versão predefinida para adicionar como:",
		entry_template_version_default: "Opção de versões predefinida:",
		entry_template_version_default_checked: "Versão principal",
		entry_template_version_default_unchecked: "Versão secundária",
		entry_template_version_display: "Versão do documento:",
		entry_template_version_display_show: "Mostrar",
		entry_template_version_display_hide: "Ocultar",
		entry_template_version_default_add: "Versão predefinida para adicionar como:",

		entry_template_checkin_version_show: "Mostrar opções de versões para dar entrada",
		entry_template_checkin_version_hide: "Ocultar opções de versões para dar entrada",

		entry_template_checkin_version_message_no_versions: "A política de versões da classe seleccionada impede que os utilizadores dêem entrada de uma nova versão do documento.",
		entry_template_checkin_version_message_always_version: "A política de versões da classe seleccionada impede que os utilizadores substituam a versão actual do documento.",

		entry_template_applied: "Utilizar este modelo de entrada para os utilizadores ao:",
		entry_template_applied_add: "Adicionar documentos (obrigatório)",
		entry_template_applied_add_folder: "Criar documentos (obrigatório)",
		entry_template_applied_checkin: "Dar entrada",
		entry_template_applied_properties_group: "Ver ou editar propriedades:",
		entry_template_applied_properties: "Na janela Propriedades",
		entry_template_applied_viewer: "No visualizador de applet",
		entry_template_applied_docinfo: "No painel de informações do documento",
		entry_template_applied_no_class_support: "Este modelo de entrada pode ser utilizado para adicionar itens, mas não pode ser utilizado para dar entrada de documentos ou ver e editar propriedades. A classe seleccionada tem de ser modificada para suportar estas situações. Se for necessário utilizar o modelo de entrada nestas situações, peça ao administrador para utilizar a ferramenta de administração para modificar a classe, de modo a que possa armazenar IDs de modelos de entrada.",
		entry_template_applied_no_child_component_support: "A classe seleccionada tem componentes descendentes e é definido um esquema de propriedade. Os esquemas de propriedades não suportam componentes descendentes. Os componentes descendentes não serão apresentados ao utilizador.",
		entry_template_applied_child_component: "A classe seleccionada tem componentes descendentes. Estes serão apresentados ao utilizador, mas não é possível configurar os componentes descendentes neste modelo de entrada.",

		entry_template_properties_show: "Mostrar a secção <b>Propriedades</b>",
		entry_tempalte_properties_show_hover: "Se apresentar a secção <b>Propriedades</b>, os utilizadores podem modificar quaisquer valores de propriedades que sejam apresentadas no modelo de entrada e que não sejam propriedades só de leitura.",
		entry_template_properties_hide: "Ocultar a secção <b>Propriedades</b>",
		entry_template_properties_hide_hover: "Se ocultar a secção <b>Propriedades</b>, os utilizadores não podem modificar quaisquer valores de propriedades. O modelo de entrada tem de definir todos os valores que pretende utilizar quando forem adicionados itens utilizando este modelo de entrada.",

		entry_template_security_show: "Mostrar a secção <b>Segurança</b>",
		entry_template_security_show_hover: "Se apresentar a secção <b>Segurança</b>, os utilizadores que possuem as permissões apropriadas podem modificar a segurança do item.",
		entry_template_security_hide: "Ocultar a secção <b>Segurança</b>",
		entry_template_security_hide_hover: "Se ocultar a secção <b>Segurança</b>, os utilizadores não podem modificar a segurança dos itens. O modelo de entrada tem de especificar todas as definições de segurança que pretende utilizar quando forem adicionados ou editados itens.",
		entry_template_security_policy: "Política de segurança:",
		entry_template_security_policy_hover: "Dependendo a política de segurança que seleccionar, a política de segurança pode:<br><ul><li>Substituir as permissões especificadas em <b>Definir a segurança de itens</b>.</li><li>Adicionar às permissões especificadas em <b>Definir a segurança de itens</b>.</li></ul>",
		entry_template_security_policy_none: "Nenhuma política de segurança seleccionada",
		entry_template_security_inherit: "Herdar as definições de segurança da pasta ascendente",
		entry_tempalte_save_in_hover: "Especifique onde guardar o modelo de entrada.<br><br><b>Restrição:</b> Se guardar o modelo de entrada num espaço de equipa, apenas pode utilizar o modelo de entrada dentro do espaço de equipa.",
		entry_template_security_inherit_item_security_hover: "Se seleccionar esta opção, as definições de segurança para a pasta ascendente são adicionadas às definições de segurança especificadas por um dos seguintes itens:<ul><li>A classe especificada na secção <b>Definir as propriedades de itens</b></li><li>A segurança personalizada que especificou na secção <b>Definir a segurança de itens</b></li></ul>",
		entry_template_security_change: "Substituir a segurança definida pela classe seleccionada",
		entry_template_security_change_hover: "Se seleccionar esta opção, as definições de segurança especificadas para a classe são apresentadas por predefinição. Em seguida, pode modificar as definições de segurança para o modelo de entrada.<br><br>Se apresentar a secção <b>Segurança</b>, os utilizadores que possuem as permissões apropriadas podem modificar a segurança do item.<br><br>Se seleccionar esta opção e optar por herdar as definições de segurança da pasta ascendente, quaisquer permissões herdáveis serão adicionadas à segurança que especificar.",
		entry_template_security_default_item_security: "Substituir a segurança do item predefinido do utilizador que adiciona o item",
		entry_template_security_policy_message_override: "A política de segurança seleccionada é configurada para substituir as permissões especificadas em Definir segurança.",
		entry_template_security_policy_message_add: "A política de segurança seleccionada é configurada para adicionar as permissões especificadas em Definir segurança.",
		entry_template_security_policy_preserve_true_hover: "Manter permissão directa",
		entry_template_security_policy_preserve_false_hover: "Não manter permissão directa",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Funções específicas",
		entry_template_security_class_role_search_title: "Procurar funções:",
		entry_template_secuirty_class_member_title: "Lista de membros para ${0}",
		entry_template_secuirty_class_folder_only: "Estas permissões aplicam-se apenas a esta pasta",
		entry_template_secuirty_class_folder_and_immediate_children: "Estas permissões são aplicáveis a esta pasta e aos elementos descendentes imediatos que estão configurados para herdar a segurança desta pasta.",
		entry_template_secuirty_class_folder_and_all_children: "Estas permissões são aplicáveis a esta pasta e a todos os elementos descendentes que estão configurados para herdar a segurança desta pasta. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Estas permissões são aplicáveis aos elementos descendentes imediatos que estão configurados para herdar a segurança desta pasta.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Estas permissões são aplicáveis a todos os elementos descendentes que estão configurados para herdar a segurança desta pasta.",

		entry_template_class_security_message_no_override: "A segurança da classe seleccionada impede os utilizadores de substituir a segurança",
		entry_template_class_security_required_privileges: "<b>Importante</b>: Ao substituir a segurança da classe seleccionada, os utilizadores que adicionam itens utilizando este modelo de entrada têm de ter os privilégios de ItemSetACL e UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Fluxo de trabalho de padrão sequencial",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Fluxo de trabalho de padrão paralelo",
		entry_template_workflow_type_existing: "Fluxo de trabalho personalizado...",
		entry_template_workflow_launch_prompt: "Pedir aos utilizadores para iniciarem o fluxo de trabalho",
		entry_template_workflow_launch_auto: "Iniciar automaticamente o fluxo de trabalho",
		entry_template_workflow_modify_launch: "Permitir que os utilizadores modifiquem o passo de início",
		entry_template_workflow_modify_launch_hover: "Seleccione esta opção se pretender permitir que os utilizadores alterem a forma como o fluxo de trabalho é iniciado.",

		entry_template_optionsButton_title: "Modificar",
		entry_template_optionsButton_readonly_title: "Ver associação",
		entry_template_optionsDialog_title: "Definições de associações de pastas",
		entry_template_removeButton_title: "Remover",
		entry_template_addButton_title: "Adicionar",
		entry_template_selected_entry_templates: "Modelos de entrada seleccionados",
		entry_template_docs_added_to_template_destination: "Os documentos são adicionados ao destino especificado no modelo de entrada.",
		entry_template_docs_added_to_other_object_store: "Este modelo de entrada adiciona itens ao armazenamento de objectos ${0}.",
		entry_template_inherited_entry_templates_label: "Pretendo: ",
		entry_template_inherited_entry_templates: "Herdar associações de modelos de entrada da pasta: ",
		entry_template_inherited_entry_templates_not: "Criar novas associações para esta pasta",
		entry_template_inherited_folder_path: "Os modelos de entrada na lista de modelos de entrada seleccionados estão associados à seguinte pasta: ${0}. <br> O caminho para a pasta é ${1}.",
		entry_template_folder_associations_title: "Associar modelos de entrada",
		entry_template_folder_associations_intro: "Ao associar um modelo de entrada com uma pasta, os utilizadores têm de utilizar o modelo de entrada para adicionar itens à pasta. Se associar vários modelos de entrada a uma pasta, os utilizadores podem seleccionar o modelo de entrada a utilizar.",
		entry_tempalte_folder_associations_entrytemplate: "Modelo de entrada: ",
		entry_template_avaliable_entry_templates: "Modelos de entrada disponível",
		entry_template_fileTypes_intro_title: "Tipos de ficheiros permitidos:",
		entry_template_fileTypes_intro: "Por predefinição, é possível utilizar um modelo de entrada para adicionar qualquer tipo de documento ao repositório. No entanto, se seleccionar um ou mais tipos de ficheiros, os modelos de entrada estão disponíveis apenas quando os utilizadores adicionam documentos que correspondem a um dos tipos de ficheiros especificados.",
		entry_template_fileTypes: "Tipos de ficheiro",
		entry_template_fileType_error: "OS tipos de ficheiros não válidos são seleccionados para uma ou mais associações de modelos de entrada. Tem de remover os tipos de ficheiros não válidos para que estas associações de modelos de entrada possam ser guardadas.",
		entry_template_fileTypes_any_type_of_file: " Qualquer tipo de ficheiro",
		entry_template_description_label: "Descrição",
		entry_template_ItemInfoPrefix: "Associar com: ",
		entry_template_TargetObjectStoreName: "Armazenamento de objectos de destino",
		entry_template_class: "Classe",
		entry_template_current_folder_as_parent: "Utilizar a pasta como destino",
		entry_template_view_minetypes: "Ver tipos MIME",
		entry_template_avaliable_MIME_types: "Tipos de ficheiros disponíveis",
		entry_template_selected_MIME_types: "Tipos de ficheiros seleccionados",
		entry_template_MIME_type_column: "nome da categoria de tipo de ficheiro",
		entry_template_file_type_not_existing: "Remova os tipos de ficheiros não válidos.",
		entry_template_MIME_types: "Tipos MIME:",
		entry_template_MIME_types_info_dialog_title: "Os tipos MIME para",
		entry_template_destination_label: "Adicionar documentos a: ",
		entry_template_destination_help: "Especifique a localização de armazenamento de documentos no repositório quando os utilizadores adicionam documentos a esta pasta utilizando o modelo de entrada seleccionado.",
		entry_template_radioButton_folder_destination: "Pasta seleccionada",
		entry_template_radioButton_template_destination: "Destino especificado no modelo de entrada",
		entry_tempalte_teamspace_default: "Modelo de entrada predefinido",
		entry_template_folder_associations_save_new: "Modificou algumas associações de modelos de entrada. Pretende fechar esta janela sem guardar as alterações?",
		entry_template_mode_binding_label: "Propriedades",
		entry_template_columns_className: "Nome de classe",
		entry_template_columns_type: "Tipo de modelo",
		entry_template_columns_workflow: "Nome do fluxo de trabalho",
		entry_template_columns_destination: "Destino",
		entry_template_association_less_than_record: "Existem ${0} modelos de entrada que não estão indicados nos Modelos de entrada seleccionados. Não tem permissão para visualizá-los ou foram eliminados. Contacte o administrador do sistema para obter mais informações.",
		/* Request */

		progress_message_general: "Em processamento...",
		cancel_message_general: "A acção foi cancelada.",
		ie8_not_supported_browser: "O IE8 não é um navegador suportado.",
		progress_message_getDesktop: "A carregar ambiente de trabalho...",
		progress_message_getActions: "A carregar acções...",
		progress_message_getViewers: "A carregar ambiente de trabalho...",
		progress_message_logon: "A iniciar sessão...",
		progress_message_logoff: "A terminar sessão...",
		progress_message_getContentClasses: "A obter classes...",
		progress_message_openContentClass: "A obter detalhes de classe...",
		progress_message_od_getCabinets: "A obter arquivos...",
		progress_message_getSearchTemplates: "A obter procuras...",
		progress_message_od_getTemplates: "A obter pastas...",
		progress_message_od_openCabinet: "A obter pastas...",
		progress_message_openSearchTemplate: "A abrir a procura...",
		progress_message_od_openTemplate: "A abrir a pasta...",

		progress_message_getWorklists: "A obter listas de trabalho...",
		progress_message_getWorkItems: "A obter itens de trabalho...",
		progress_message_getNextWorkItems: "A obter itens de trabalho...",
		progress_message_getStepParameters: "A obter informações do item de trabalho...",
		progress_message_getStepAttachmentItems: "A obter informações de anexo...",
		progress_message_getDependentParameters: "A obter informações de propriedades...",

		progress_message_p8_getProcessApplicationSpaces: "A obter espaços da aplicação...",
		progress_message_p8_getProcessRoles: "A obter funções de processo...",
		progress_message_p8_getProcessInbaskets: "A obter áreas de recepção...",
		progress_message_p8_getProcessorInformation: "A obter informações do processo...",
		progress_message_p8_getFilterCriteria: "A obter filtro de áreas de recepção...",
		progress_message_p8_getLaunchParameters: "A obter informações do item de trabalho...",
		progress_message_p8_getStepAttachments: "A obter anexos do item de trabalho...",
		progress_message_p8_getSubscriptions: "A obter subscrições de fluxo de trabalho...",
		progress_message_p8_getTrackerParameters: "A obter informações do item de trabalho...",
		progress_message_p8_getTrackerHistory: "O obter histórico do item de trabalho...",
		progress_message_p8_getTrackerMilestones: "Obter marcos do item de trabalho...",
		progress_message_p8_completeStep: "A concluir item de trabalho...",
		progress_message_p8_moveToInbox: "A mover item para a área de recepção...",
		progress_message_p8_returnToSender: "A devolver item de trabalho...",
		progress_message_p8_reassign: "A alterar a atribuição do item de trabalho...",
		progress_message_p8_launchWorkflow: "A iniciar fluxo de trabalho...",
		progress_message_p8_getTransferedWorkflows: "A obter informações de fluxo de trabalho...",

		progress_message_cm_getProcesses: "A obter informações de fluxo de trabalho...",
		progress_message_cm_completeStep: "A continuar item de trabalho...",
		progress_message_cm_getItemProcessInformation: "A obter informações de fluxo de trabalho...",

		progress_message_search: "A procurar...",
		cancel_message_search: "A procura foi cancelada.",
		progress_message_getContentItems: "A obter informações de item...",
		progress_message_openFolder: "A abrir a pasta...",
		progress_message_addItem: "A criar item...",
		progress_message_checkIn: "A dar entrada do item...",
		progress_message_changePassword: "A alterar a palavra-passe...",
		progress_message_getDefaultInstancePermissions: "A obter permissões predefinidas...",
		progress_message_openItem: "A obter informações de item...",
		progress_message_saveItem: "A guardar informações do item...",
		progress_message_getPermissions: "A obter permissões...",
		progress_message_getEntryTemplates: "A obter modelos de entrada...",
		progress_message_openEntryTemplate: "A abrir modelo de entrada...",
		progress_message_getFavorites: "A obter favoritos...",
		progress_message_getFoldersFiledIn: "A obter pastas...",
		progress_message_getDocumentVersions: "A obter versões...",
		progress_message_getDependentAttributeInfo: "A obter informações de atributo...",
		progress_message_packageForDownload: "A criar pacote para descarregar...",
		progress_message_convertDocument: "A converter conteúdo...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "A obter o tipo de conteúdo...",
		progress_message_SharePointPlugin_SharePointAddDocument: "A adicionar documento...",

		progress_message_desktop_reload: "O cliente está a recarregar o seu ambiente de trabalho.<br>Poderá ser solicitado que inicie sessão novamente.",
		progress_message_email: "A enviar mensagem de correio electrónico...",
		cancel_message_email: "A mensagem de correio electrónico foi cancelada.",

		progress_message_p8_getOfficeOnlineTemplates: "A obter modelos do Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Árvore de favoritos",
		favorites_content_list_label: "Lista de conteúdo de favoritos",
		syncItems_tree_label: "Árvore Os meus ficheiros sincronizados",
		syncItems_content_list_label: "Lista de conteúdo Os meus ficheiros sincronizados",
		my_checkouts_content_list_label: "Lista de conteúdo de As minhas saídas",
		browse_tree_label: "Árvore de navegação",
		browse_content_list_label: "Lista de conteúdo de navegação",
		repository_selector_label: "Selector de repositórios",
		teamspaces_content_list_label: "Lista de conteúdo de espaço de equipa",
		templates_content_list_label: "Lista de conteúdo de modelos",
		work_content_list_label: "Lista de conteúdo de trabalho",
		work_tree_label: "Árvore de trabalho",
		admin_tree_label: "Árvore de administração",
		admin_tabs_label: "Separadores de administração",
		search_tabs_label: "Separadores de procura",
		search_selector_label: "Selector de procura",
		teamspace_browse_content_list_label: "Lista de conteúdo de navegação de espaço de equipa",
		teamspace_search_tabs_label: "Separadores de procura de espaço de equipa",

		/* Desktop */
		undo_description: "Anular ${0}",
		redo_description: "Refazer ${0}",

		/* Application Tabs */
		home: "Início",
		repository: "Repositório",
		repository_type: "Tipo de repositório:",
		repository_type_header: "Tipo de repositório",
		repository_type_any: "Todos os repositórios",
		repository_type_contains_label: "O tipo de repositório contém",
		document_info: "Informações de documento",
		team: "Equipa",
		administration: "Administração",

		/* Home Page */
		recent_activity: "Actividade recente",
		repos_and_wrksp: "Repositórios e espaços de equipa",
		workspaces: "Espaços de equipa",
		repositories: "Repositórios",
		templates: "Modelos",
		favorites: "Favoritos",
		my_checkouts: "As minhas saídas",
		mySyncedFiles: "Os meus ficheiros sincronizados",
		links: "Ligações",
		name_label: "Nome",
		description_label: "Descrição:",
		type_label: "Tipo:",
		type_heading: "Tipo",
		type_id_label: "ID de tipo",
		server_type_icon: "Ícone de tipo de servidor",
		server_type_heading: "Tipo de servidor",
		server_type: "Tipo de servidor",
		port_heading: "Número de porta",
		port_label: "Número de porta:",
		server_name_heading: "Nome do servidor",
		server_label: "Nome do servidor:",
		server_url_label: "URL do servidor:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Ligado:",
		repository_label: "Repositório",
		modified_label: "Modificado por:",
		modified_date_label: "Modificado em:",
		status_label: "Estado:",
		last_modified_label: "Última modificação por:",

		modifier: "Modificado por",
		modified_date: "Modificado a",

		/* Favorites */
		new_favorite_label: "Adicionar aos favoritos",
		edit_favorite_label: "Mudar o nome do favorito",
		remove_favorite_label: "Remover dos favoritos",
		missing_alias_message: "É necessário especificar um nome.",
		sync_favorite_enable_hover: "Este item está activado para sincronização.",
		sync_favorite_disable_hover: "Este item não está a ser sincronizado.",
		sync_favorite_sync_unavailable_hover: "A sincronização não está disponível para este tipo de objecto.",
		sync_enable_label: "Sincronizar este item",
		sync_enable_label_hover: "Este item será sincronizado com os dispositivos.",
		delete_favorite_confirmation_question: "Pretende remover este item dos favoritos?",
		alias_label: "Nome:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "O item seleccionado já se encontra nos favoritos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Não é possível adicionar este item à lista de favoritos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Pode armazenar apenas ${0} favoritos.",
		add_favorite_max_reached_response: "Se pretender adicionar este item à lista de favoritos, é necessário eliminar um favorito existente antes de adicionar este item.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Não é possível converter os documentos seleccionados em PDF.",
		download_as_pdf_max_content_error_explanation: "Apenas pode converter ${0} MB de dados em PDF. Contudo, os documentos seleccionados excedem ${0} MB.",
		download_as_pdf_max_content_error_response: "Seleccione menos documentos ou seleccione documentos mais pequenos e descarregue os documentos como ficheiros PDF novamente.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Não é possível converter os documentos seleccionados para um único ficheiro PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Para converter um documento em várias partes para um ficheiro PDF único, cada parte tem de ter o mesmo tipo MIME.",
		download_as_pdf_mimetype_check_error_response: "Seleccione um documento diferente para converter para PDF.",

		/* Activity Stream */
		show_label: "Mostrar:",
		all_filter: "Tudo",
		notifications_filter: "Notificações",
		workitems_filter: "Itens de trabalho",
		documentes_filter: "Documentos",
		all_favorites_filter: "Todos os favoritos",
		folders_filter: "Pastas",
		searches_filter: "Procuras",
		teamspaces_filter: "Espaços de equipa",

		/* Repository */
		all_search_templates: "Todas as procuras",
		all_od_searches: "Todos os modelos de procura",
		recent_searches: "Procuras recentes",
		opened_searches: "Procuras abertas",

		all_worklists: "Todas as caixas de entrada",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Uma lista de todas as listas de trabalho",

		/* Teamspace */
		all_workspaces: "Todos os espaços de equipa",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Uma lista de todos os espaços de equipa",
		workspace_title: "Espaço de equipa",
		workspace_icon: "Ícone de espaço de equipa",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponível",
		workspace_stat_offline: "Indisponível",
		workspace_stat_validate: "Requer validação",
		workspace_stat_pendingDelete: "Eliminação pendente",
		workspace_stat_deleteError: "Falha na eliminação",

		undefined_value: "Não definido",
		undefined_reference_value: "Sem referência definida.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Poderão estar disponíveis mais resultados no servidor.",
		search_all_data: "Procurar em todos os dados.",
		search_all_teamspaces: "Procurar em todos os espaços de equipa.",
		teamspace_filter_results: "A mostrar ${0} resultados. ",
		displaying_filtered_results: "A mostrar resultados filtrados. ",
		displaying_recent_results: "A mostrar apenas os espaços de equipa modificados nos últimos ${0} dias. Para localizar outros espaços de equipa, filtre a lista de espaços de equipa por nome ou descrição. ",
		clear_filter: "Limpar filtro.",

		/* FolderTreeModel */
		move_item_task: "Mover item",
		copy_item_task: "Copiar item",
		add_item_task: "Adicionar item",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Não foi possível localizar a pasta seguinte: ${0}. Pode ter sido eliminada ou não é possível abrir a pasta neste vista. Faça clique na ligação Mais na vista em árvore para navegar até à pasta. Se não conseguir visualizar a pasta, actualize a vista da lista de conteúdo.",
		more_paging_link: "mais ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Estado",
		status_dialog_cancel_label: "Cancelar",

		/* ErrorDialog */
		error_dialog_title: "Erro",
		error_dialog_icon_tooltip: "Erro",
		error_dialog_stack_trace_title: "Rastreio de pilha",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Confirmação",

		close_browser_msg: "Feche a janela do navegador.",

		/* MessageDialog */
		message_dialog_title: "Informações",
		warning_dialog_title: "Aviso",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Bem-vindo ao ${0}",
		server: "Repositório:",
		username: "Nome de utilizador:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "É necessário um nome de utilizador para iniciar sessão no repositório.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "É necessária um palavra-passe para iniciar sessão no repositório.",
		password: "Palavra-passe:",
		login: "Iniciar sessão",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "A sessão expirou. Inicie sessão novamente.",
		login_repository_connection_expired_message: "A ligação ao repositório do ${0} expirou. Inicie sessão novamente.",
		login_site_connection_expired_message: "A ligação ao sítio expirou. Inicie sessão novamente.",
		login_new_server_message: "Introduza um nome do utilizador e palavra-passe para ${0}.",
		login_error_more_information_message: "Mais informações",

		disconnect_box_account_user: "Desligar da conta Box: ${0}",
		disconnect_box_account: "Desligar da conta Box",
		disconnect_box_accounts: "Desligar das contas Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "É necessária uma ligação SSL para acesso ao repositório Box.",
		login_oauth_popup_blocked: "A janela emergente foi bloqueada. Pode ter que desbloquear as janelas emergentes no navegador para iniciar sessão.",
		login_oauth_click_here: "Se não for redireccionado dentro de 5 segundos, faça clique aqui.",
		login_oauth_title: "Iniciar sessão",
		login_oauth_grant_intro: "Conceder autorização para ${0}.",
		login_pane_oauth_click_here: "Faça clique aqui para iniciar sessão.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Pretende terminar a sessão no cliente da Web?",
		logout_confirmation_button: "Terminar sessão",

		/* ChangeLocaleDialog */
		change_locale: "Alterar definições de região e idioma",
		change_locale_use_browser_language: "Utilizar definição de idioma do navegador (Predefinição)",
		change_locale_use_browser_locale: "Utilizar definição de idioma do navegador (Predefinição)",
		change_locale_description: "Se eliminar os cookies do navegador, é necessário repor as definições de região e idioma.",
		change_locale_language_locale: "Idioma da aplicação:",
		change_locale_language_locale_hover: "Esta definição altera o idioma do texto no cliente da Web, mas não altera o idioma dos documentos na aplicação.<br><br>A predefinição utiliza o idioma especificado nas opções de configuração do navegador da Web.",
		change_locale_value_format_locale: "Região da aplicação:",
		change_locale_value_format_locale_hover: "A região determina o formato de datas, horas e números no cliente da Web.<br><br>A predefinição utiliza os formatos que estão associados ao idioma especificado nas opções de configuração do navegador da Web.",
		change_locale_for_office: "Definições de texto bidireccional:",
		change_locale_bidi_support_flag: "Activar suportar bidireccional",
		change_locale_bidi_support_flag_hover: "Quando o suporte bidireccional está activado, o utilizador pode definir a direcção do texto utilizado nos campos de entrada.  O texto introduzido para itens como, por exemplo, pastas, seria apresentado na mesma direcção que foi introduzido.",
		change_locale_base_text_direction: "Direcção do texto de base para o conteúdo:",
		change_locale_base_text_direction_hover: "Defina a direcção do texto a ser introduzido nos campos de entrada.  Também controla a direcção de apresentação das etiquetas introduzidas pelo utilizador, tais como nomes de pastas.",
		change_locale_calendar_type: "Tipo de calendário:",
		change_locale_calendar_type_hover: "Seleccione o tipo de calendário que será utilizado para a sessão do utilizador.",
		change_locale_base_text_direction_default: "Predefinição",
		change_locale_base_text_direction_ltr: "Esquerda para a direita",
		change_locale_base_text_direction_rtl: "Direita para a esquerda",
		change_locale_base_text_direction_contextual: "Contextual",
		change_locale_calendar_type_gregorian: "Gregoriano",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebraico",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Alterar palavra-passe",
		change_password_title: "Alterar palavra-passe",
		change_password_expired_title: "Palavra-passe expirada",
		change_password_message: "Introduza uma nova palavra-passe",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "A palavra-passe expirou. Introduza uma nova palavra-passe",
		change_password_password_rules: "Regras de palavra-passe",
		change_password_old_password: "Palavra-passe antiga:",
		change_password_new_password: "Palavra-passe nova:",
		change_password_confirm_password: "Confirmar palavra-passe:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "É necessário introduzir a palavra-passe antiga.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "É necessário introduzir uma palavra-passe nova.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "É necessário confirmar a palavra-passe nova.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "As palavras-passe têm de corresponder.",

		/* GlobalToolbar */
		actions: "Acções",
		actions_label: "Acções:",
		open_actions_label: "Abrir acções:",

		/* About Dialog */
		about_dialog_title: "Acerca de",
		about_product_name_label: "Nome do produto: ",
		about_product_version_label: "Versão: ",
		about_product_build_label: "Compilação: ",
		about_product_license: "Materiais Licenciados - Propriedade da IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Todos os direitos reservados. US Government Users Restricted Rights. Uso, reprodução ou divulgação restrito pelo documento GSA ADP Schedule Contract com a IBM Corporation. IBM e o logótipo IBM são marcas comerciais registadas da International Business Machine Corporation nos Estados Unidos e/ou noutros países. Este Programa está licenciado ao abrigo dos termos do acordo de licença fornecido com o Programa. Este acordo de licença pode estar localizado na pasta do directório do Programa ou numa biblioteca identificada como \"License\" ou \"Non_IBM_License\", se aplicável ou ser fornecido como um acordo de licença impresso. Leia este acordo atentamente antes de utilizar o Programa. Ao utilizar o Programa, aceita os termos indicados. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Pretende eliminar o item seleccionado?",
		delete_single_folder_confirmation_question: "Pretende eliminar a pasta ${0}?",
		delete_multiple_confirmation_question: "Pretende eliminar os itens seleccionados?<br>Estão seleccionados ${0} itens.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Eliminar",
		search_template_delete_confirmation_question: "Pretende eliminar a procura ${0}?",
		search_template_opened_delete_confirmation_question: "A procura ${0} está aberta. Se eliminar a procura, esta irá fechar.<br>Pretende eliminar esta procura?",
		delete_multiple_opened_search_template_confirmation_question: "As procuras seguintes estão abertas: ${0}.<br>Se eliminar as procuras, estas irão fechar. Pretende eliminar estas procuras?",
		delete_large_number_items_confirmation_question: "Seleccionou ${0} itens para eliminar.<br/>Eliminar um elevado número de itens poderá demorar bastante tempo.<br/>Pretende continuar?",
		delete_confirmation_entrytemplate: "Se eliminar este modelo de entrada, terá o seguinte impacto nos documentos ou pastas associados ao modelo de entrada:<ul><li>Os itens deixarão de estar associados ao modelo de entrada e poderá ser apresentado um aviso aos utilizadores quando actualizarem um item.</li><li>As propriedades que eram controladas pelo modelo de entrada, como o nome ou a ordem das propriedades, deixarão de se aplicar aos itens associados ao modelo de entrada.</li></ul>Pretende eliminar este modelo de entrada?",
		delete_confirmation_entrytempalte_with_multi_items: "Os modelos de entrada têm de ser eliminados individualmente. Os modelos de entrada foram removidos da lista de itens a eliminar. Se pretender eliminar os modelos de entrada, terá de eliminar cada modelo de entrada separadamente.",

		/* Create/Apply/Remove Hold */
		hold: "Retenção",
		createHold: "Nova retenção",
		applyHold: "Aplicar retenção",
		removeHold: "Remover retenção",
		showHolds_title: "Mostrar prazos de retenção",
		applyHoldSelectText: "Seleccione as retenções que pretende aplicar aos itens seleccionados.",
		availableHolds: "Retenções disponíveis:",
		removeHoldSelectText: "Seleccione as retenções que pretende remover dos itens seleccionados.",
		appliedHolds: "Retenções aplicadas:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Crie uma retenção nova para aplicar aos itens seleccionados.",
		holdName: "Nome da retenção:",
		holdDescription: "Descrição:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "É necessário especificar um nome para a retenção.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "O nome de retenção especificado já existe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Um nome de retenção não pode incluir nenhum dos caracteres seguintes : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "A sua sessão irá expirar dentro de ${0} minutos.",
		session_expire: "Sessão a expirar",
		logoff: "Terminar sessão",
		extend_session: "Prolongar sessão",
		admin_custom_settings: "Definições adicionais:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning é um valor booleano que indica se o aviso de expiração de sessão está activado, o valor predefinido é true. sessionExpireWarningTime é um número inteiro entre 2 a 5 para especificar o tempo de aviso de expiração de sessão.",
		admin_custom_setting_dialog_title_new: "Nova definição",
		admin_custom_setting_dialog_title_edit: "Editar definição",
		admin_custom_setting_dialog_hover_help: "Adicione outros parâmetros, especificando o nome e o valor dos parâmetros. Por exemplo, é possível especificar “enableSessionExpireWarning” e “true” caso pretenda activar o aviso de expiração da sessão.",
		admin_custom_setting_dialog_field_hover_help: "Para obter mais informações sobre nomes e valores de parâmetros, consulte o IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Este valor é requerido. O valor não pode conter espaços em branco e não pode ser um duplicado.",
		admin_custom_setting_dialog_bool_valueInvalid: "Este valor é requerido. O valor tem de ser um booleano.",
		admin_custom_setting_dialog_int_valueInvalid: "Este valor é requerido. O valor tem de corresponder a um número inteiro.",
		/* Add Document Dialog */
		add_document_dialog_title: "Adicionar documento",
		add_documents_dialog_title: "Adicionar documentos",
		add_document_general_label: "Geral",
		add_document_properties_label: "Propriedades",
		add_document_properties_with_ellipsis_label: "Propriedades...",
		add_document_security_label: "Segurança",
		add_document_location_label: "Guardar em:",
		add_document_type_label: "O que pretende guardar?",
		add_document_localfile_label: "Documento local",
		add_document_metadata_label: "Informações sobre um documento",
		add_document_external_label: "Ligação para uma documento externo",
		add_document_web_link_label: "Ligação da Web",
		add_document_saved_content_label: "Utilizar ficheiro guardado:",
		add_document_saved_content_choice: "Ficheiro guardado",
		add_document_file_name_label: "Nome do ficheiro:",
		add_document_entry_template_label: "Modelo de entrada:",
		add_document_delete_file_label: "Eliminar ficheiro local",
		add_document_delete_file_disabled_label: "Os ficheiros não incluídos no directório de rastreio de ficheiros não serão eliminados.",
		add_document_major_version_label: "Versão principal",
		add_document_major_version_hover: "Define o estado do documento como Publicado. O documento é adicionado ao repositório como versão 1.0. Se a opção não estiver seleccionada, o documento não está pronto para ser publicado e é adicionado como versão secundária 0.1.",
		add_document_save_document_as_unfiled_label: "Não guardar o documento numa pasta",
		add_document_save_document_as_unfiled_hover: "Se seleccionar esta opção, pode localizar este documento apenas mediante uma procura. Não pode navegar até ao mesmo.",
		add_document_create_new_version_label: "Criar nova versão",
		add_document_replace_existing_version_label: "Substituir versão existente",
		add_document_start_workflow_label: "Iniciar fluxo de trabalho",
		add_document_auto_classify_label: "Classificar o conteúdo automaticamente",
		add_document_add_label: "Adicionar",
		add_document_cancel_label: "Cancelar",
		add_document_document_type_label: "Classe",
		add_document_context_info: "Os valores introduzidos para as propriedades do documento podem ser utilizados para localizar o documento posteriormente.",
		add_documents_context_info: "Os valores introduzidos para os documentos podem ser utilizados para localizar os documentos posteriormente. Se necessitar de inserir um valor de propriedade diferente para um documento, terá de adicionar o mesmo separadamente ou editar as propriedades do documento após adicionar o mesmo.",
		add_document_url_label: "URL:",
		add_document_template_description: "Descrição do modelo:",
		add_document_select_entry_template: "Introduzir ou seleccionar um modelo de entrada",
		add_document_no_permission_to_associations: "Não tem permissões para utilizar um modelo de entrada",
		add_document_no_entry_template_to_use: "Nenhum modelo de entrada pode ser utilizado para os ficheiros seleccionados",
		add_document_no_entry_template_itemtype_permission: "Não é possível adicionar itens a esta pasta. É necessário seleccionar um modelo de entrada e o utilizador não tem acesso a nenhum dos modelos de entrada associados a esta pasta. Contacte o administrador do sistema e peça para lhe conceder acesso aos modelos de entrada associados a esta pasta.",
		add_document_appgroup_name_label: "Nome do grupo da aplicação:",
		add_document_app_name_label: "Nome da aplicação:",
		create_folder_dialog_title: "Nova pasta",
		create_folder_context_info: "Os valores introduzidos para as propriedades da pasta podem ser utilizados para localizar a pasta posteriormente.",
		create_folder_folder_name_label: "Nome da pasta",
		create_folder_save_folder_as_unfiled_label: "Não guardar a pasta noutra pasta",
		create_folder_save_folder_as_unfiled_hover: "Se seleccionar esta opção, pode localizar esta pasta apenas mediante uma procura. Não pode navegar até à mesma.",
		add_item_create_in_folder: "Criar na pasta:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Um nome de pasta não pode incluir nenhum dos caracteres seguintes: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Um nome de pasta não pode conter nenhum dos caracteres seguintes: \\ / e não pode ser igual a . ou ..",
		invalid_box_file_name_message: "Um nome de ficheiro não pode conter nenhum dos caracteres seguintes: \\ / e não pode ser igual a . ou ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Um nome de ficheiro não pode incluir nenhum dos caracteres seguintes: \\ / : * ? \" < > |",
		external_document_placeholder: "Introduza o URL do documento",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "A cor tem de ser introduzida como um número hexadecimal de 3 ou 6 dígitos, por exemplo, #000 ou #000000.",
		add_document_unfiled: "${0} retirado do arquivo",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Adicionar documento utilizando o modelo de entrada",
		add_document_using_template_context_info: "Ao adicionar um documento utilizando um modelo de entrada, os valores que introduzir para o documento são consistentes.",
		add_documents_using_template_dialog_title: "Adicionar documentos utilizando o modelo de entrada",
		add_documents_document_name_is_file_name_hint: "O nome do ficheiro será utilizado para esta propriedade",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nova pasta utilizando o modelo de entrada",
		create_folder_using_template_context_info: "Ao criar uma pasta utilizando um modelo de entrada, os valores que introduzir para a pasta são consistentes.",

		add_documents_batch_results_dialog_title: "Documentos não adicionados ao repositório",
		add_documents_batch_results_dialog_context_info: "Os documentos seguintes não foram adicionados ao repositório. Seleccione um documento e faça clique em Detalhes para obter mais informações sobre o motivo pelo qual o documento não foi adicionado ao repositório.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nome do ficheiro",
		add_documents_batch_results_dialog_status_col_hdr: "Estado",
		add_documents_batch_results_dialog_message_col_hdr: "Mensagem",
		add_documents_batch_results_status_error: "Erro",
		add_documents_batch_results_status_cancelled: "Cancelado",
		add_documents_batch_results_status_cancelled_msg: "O documento não foi adicionado porque o pedido foi cancelado.",

		add_documents_batch_status_title: "A adicionar documentos",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "A adicionar ficheiro ${0} de ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Erros: ${0}",
		add_documents_batch_status_completing_msg: "O processo será interrompido após a adição deste documento.",

		add_documents_status_uploading_msg: "A carregar o ficheiro ${0} de ${1}...",
		add_documents_status_adding_msg: "A adicionar ficheiro ${0} de ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "O modelo de entrada foi configurado noutra aplicação e está configurado ara declarar documentos como registos sempre. Contudo, esta definição é ignorada uma vez que o cliente da Web não é compatível com a declaração de documentos como registos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "O modelo de entrada foi configurado noutra aplicação e está configurado de forma a permitir declarar ou não este documento como registo. Contudo, esta definição é ignorada uma vez que o cliente da Web não é compatível com a declaração de documentos como registos.",
		no_selection: "&lt;Seleccionar&gt;",

		batch_results_dialog_details_label: "Detalhes",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "O valor não é válido. O valor tem de ser um identificador único global (GUID, Globally Unique Identifier), por exemplo, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "O valor não é válido. O valor tem de ser um número de vírgula flutuante, por exemplo, 1,2 ou 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "O valor não é válido. O valor tem de ter o formato ${0}, por exemplo, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "O valor não é válido. O valor tem de ser um valor decimal, por exemplo, 1,2 ou 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "O valor não é válido. O valor tem de ser um número inteiro, por exemplo, 5 ou 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "O valor não é válido. O valor pode conter apenas caracteres alfabéticos, por exemplo, a-z e A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "O valor não é válido. O valor pode conter apenas caracteres alfanuméricos, por exemplo, a-z, A-Z e 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "O valor não é válido. O valor pode conter apenas caracteres numéricos, por exemplo, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "O valor não é válido. O valor pode incluir apenas os caracteres seguintes: a-z, A-Z, 0-9, [espaço] e `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "O valor não é válido. O valor tem de ser uma data com o formato seguinte: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "O valor não é válido. O valor tem de ser uma hora com o formato seguinte: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "O valor não é válido. Seleccione um valor da lista pendente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "O valor não é válido.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "O valor não é válido. O valor tem de ter o formato seguinte: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Este valor é requerido.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "O valor é demasiado longo. A propriedade suporta um comprimento máximo de ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "O valor é demasiado curto. A propriedade suporta um comprimento mínimo de ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "O valor está fora do intervalo. O valor tem de ser um número de vírgula flutuante entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "O valor está fora do intervalo. O valor tem de ser um número decimal entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "O valor está fora do intervalo. O valor tem de ser um número inteiro entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "O valor tem de ser uma data entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "O valor está fora do intervalo. O valor tem de ser uma data entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "O valor está fora do intervalo. O valor tem de ser uma hora entre ${0} e ${1}.",
		property_and: "e",

		property_invalidValueOrRequired: "O valor seguinte não é válido ou é requerido: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Propriedades",
		edit_properties_dialog_info: "Pode ver ou editar as propriedades deste item. Se tiver as permissões apropriadas, também pode modificar a segurança do item. No entanto, não é possível alterar as propriedades do sistema.",
		edit_properties_od_dialog_info: "Pode ver ou editar as propriedades deste item. No entanto, não é possível alterar as propriedades do sistema.",
		system_properties_title: "Propriedades do sistema",
		custom_properties_title: "Propriedades",
		/* Folder collaboration tab */
		box_permission_permission: "Permissão",
		box_permission_permissions: "Permissões",
		box_permission_editor: "Editor",
		box_permission_owner: "Proprietário",
		box_permission_co_owner: "Co-proprietário",
		box_permission_viewer_uploader: "Carregador do visualizador",
		box_permission_previewer_uploader: "Carregador do pré-visualizador",
		box_permission_viewer: "Visualizador",
		box_permission_previewer: "Pré-visualizador",
		box_permission_uploader: "Carregador",
		box_permission_add: "Adicionar",
		box_permission_upload: "Carregar",
		box_permission_download: "Descarregar",
		box_permission_preview: "Pré-visualizar",
		box_permission_view: "Ver",
		box_permission_send_links: "Enviar ligações apenas de visualização",
		box_permission_create_subfolders: "Criar subpastas",
		box_permission_create_tasks: "Criar tarefas",
		box_permission_add_comments: "Adicionar comentários",
		box_collaboration_invite_placeholder: "Introduza um nome, endereço de correio electrónico ou grupo para convidar",
		box_collaboration_invite_placeholder_non_admin: "Introduza um endereço de correio electrónico para convidar",
		box_collaboration_invalid_email: "Introduza um endereço de correio electrónico válido",
		box_collaboration_user_already_present: "Este utilizador já é um colaborador da pasta",
		box_collaboration_user_name: "Nome",
		box_collaboration_email_address: "Endereço de correio electrónico",
		box_collaboration_date_added: "Data de adição",
		box_collaboration_remove_collaboration: "Remover",
		box_collaboration_remove_collaboration_title: "Eliminar",
		box_collaboration_no_collaborators: "Não existem colaboradores",
		box_collaboration_change_owner_title: "Alterar proprietário do item",
		box_collaboration_change_owner_prompt: "Ao tornar este colaborador proprietário da pasta, o utilizador passa a ser um Editor e deixa de ser o proprietário da pasta. Quaisquer colaboradores que tenham sido adicionados directamente a esta pasta, poderão ver a pasta nas suas pastas raiz. Quaisquer colaboradores que tenham sido adicionados ao nível da pasta principal ou superior deixarão de ser colaboradores. Pretende continuar?",
		box_collaboration_remove_self_title: "Remover-se",
		box_collaboration_remove_self_prompt: "Tem a certeza de que se pretende remover como colaborador? Deixará de ter acesso a esta pasta.",
		box_collaboration_user: "Utilizador",
		box_collaboration_group: "Grupo",
		box_managing_users_not_configured: "Não é possível procurar utilizadores e grupos, uma vez que a aplicação do Box não está configurada correctamente. Para utilizar esta função, contacte o administrador e solicite que a aplicação do Box seja configurada para gerir utilizadores e grupos.",
		duplicate_value_error: "É necessário que cada valor nesta propriedade seja exclusivo.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Quaisquer alterações que efectuar nos seguintes campos são aplicadas a todos os itens seleccionados. Se for necessário introduzir um valor de propriedade diferente para um determinado item ou editar a segurança de um item, terá de editar as propriedades do item individualmente.",
		multi_edit_properties_class_label: "Classe:",
		multi_edit_properties_items_label: "Nomes de itens:",
		multi_edit_properties_properties_label: "Propriedades:",
		multi_edit_batch_status_title: "A actualizar propriedades",
		multi_edit_batch_status_adding_msg: "A actualizar item ${0} de ${1}...",
		multi_edit_batch_status_verifying_msg: "A verificar item ${0} de ${1}...",
		multi_edit_batch_status_completing_msg: "O processo será interrompido após a actualização deste item.",
		multi_edit_batch_status_validation_completing_msg: "O processo será interrompido após a verificação deste item.",
		multi_edit_batch_results_status_error: "Erro",
		multi_edit_batch_results_status_cancelled: "Cancelado",
		multi_edit_batch_results_status_cancelled_msg: "O item não foi actualizado porque o pedido foi cancelado.",
		multi_edit_batch_results_dialog_title: "Itens não actualizados",
		multi_edit_batch_results_dialog_context_info: "Os seguintes itens não foram actualizados. Seleccione o nome de um item e faça clique em Detalhes para obter mais informações sobre o motivo pelo qual o item não foi actualizado.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nome do item",
		multi_edit_batch_results_dialog_status_col_hdr: "Estado",
		multi_edit_batch_results_dialog_message_col_hdr: "Mensagem",
		multi_edit_batch_status_errors_msg: "Erros: ${0}",
		multi_edit_batch_permission_error_text: "Não é possível guardar as alterações efectuadas às propriedades.",
		multi_edit_invalid_value_error: "Este valor está dependente do valor de outra propriedade e não é válido para todos os itens seleccionados.",
		multi_edit_batch_permission_error_explanation: "Não é possível modificar as propriedades deste item porque o utilizador não tem privilégios suficientes.",
		multi_edit_no_modifiable_properties: "Não é possível modificar as propriedades dos itens seleccionados. Tal pode ocorrer quando um item inclui apenas propriedades só de leitura ou quando apenas o nome ou o título do item é editável. Quando estão seleccionados vários itens, não é possível modificar o nome ou o título dos itens.",
		multi_edit_mult_classes_dialog_info: "Os itens seleccionados encontram-se em repositórios diferentes ou pertencem a classes diferentes. Apenas pode editar itens que se encontrem na mesma classe ou no mesmo repositório. Seleccione o subconjunto de itens que pretende editar.",
		multi_edit_class_selector_class_heading: "Classe",
		multi_edit_class_selector_entry_template_heading: "Modelo de entrada",
		multi_edit_class_selector_repository_heading: "Repositório",
		multi_edit_class_selector_items_heading: "Itens",
		multi_edit_some_classes_not_displayed: "Alguns dos itens seleccionados não estão incluídos nesta lista porque os itens contêm apenas propriedades só de leitura ou porque os itens encontram-se em repositórios que não suportam propriedades de edição.",
		multi_edit_properties_invalid_msg: "Alguns do valores de propriedades não são válidos para todos os itens seleccionados.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Esta propriedade é só de leitura e não pode ser modificada.",
		multi_edit_append_checkbox_label: "Anexar",
		multi_edit_append_checkbox_tooltip: "Seleccione esta opção se pretender anexar novos valores de propriedades aos valores existentes em vez de substituí-los.",
		multi_edit_properties_invalid_childcomponent_msg: "Alguns valores na propriedade ${0} do componente descendente ${1} estão dependentes de outras propriedades e já não são válidos com as selecções que efectuou. Limpe os valores no componente descendente ${1} ou efectue alterações de propriedade aos itens que seleccionou individualmente.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exportar propriedades",
		export_properties_dialog_info: "Seleccione as propriedades que pretende exportar e especifique a ordem em que serão apresentadas.",
		export_properties_dialog_export_button_label: "Exportar",
		export_properties_dialog_export_raw_values: "Exportar valores não processador",

		/* Properties */
		filter_clear_tooltip: "Limpar o filtro",
		properties_new_row: "Novo",
		properties_requiredClass_document_tooltip: "Seleccione um documento. O documento tem de pertencer à classe ${0}.",
		properties_requiredClass_folder_tooltip: "Seleccione uma pasta. A pasta tem de pertencer à classe ${0}.",
		properties_dataType_tooltip: "Tipo de dados: ${0}",
		properties_maxLength_tooltip: "Comprimento máximo: ",
		properties_minLength_tooltip: "Comprimento mínimo: ",
		properties_minValue_tooltip: "Valor mínimo: ",
		properties_maxValue_tooltip: "Valor máximo: ",
		properties_format_tooltip: "Formato: ",
		properties_description_tooltip: "Descrição: ",

		properties_type_boolean_tooltip: "Booleano",
		properties_type_date_tooltip: "Data",
		properties_type_time_tooltip: "Hora",
		properties_type_timestamp_tooltip: "Marca de hora",
		properties_type_decimal_tooltip: "Valor decimal",
		properties_type_double_tooltip: "Número de vírgula flutuante",
		properties_type_short_tooltip: "Número inteiro",
		properties_type_integer_tooltip: "Número inteiro",
		properties_type_long_tooltip: "Número inteiro",
		properties_type_string_tooltip: "Cadeia de texto",
		properties_type_string_alpha_tooltip: "Cadeia alfabética",
		properties_type_string_alphanum_tooltip: "Cadeia alfanumérica",
		properties_type_string_ext_tooltip: "Cadeia alfanumérica expandida",
		properties_type_string_num_tooltip: "Cadeia numérica",
		properties_type_binary_tooltip: "Binário",
		properties_type_object_tooltip: "Objecto",
		properties_type_reference_tooltip: "Esta propriedade faz referência a outro item no repositório.",
		properties_type_guid_tooltip: "Identificador único global",
		properties_type_group_tooltip: "Utilizadores e grupos",
		properties_type_user_tooltip: "Utilizadores",
		properties_type_childComponent_tooltip: "Componente descendente",

		properties_childComponent_minCardinalityOnly_tooltip: "Esta propriedade tem de ter pelo menos ${0} valores.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Esta propriedade pode ter no máximo ${0} valores.",
		properties_childComponent_minMaxCardinality_tooltip: "Esta propriedade tem de ter pelo menos ${0} valores e um máximo de ${1} valores.",
		properties_childComponent_noCardinality_tooltip: "Esta propriedade pode ter qualquer número de valores.",

		properties_type_guid_example_tooltip: ", por exemplo {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Seleccione um valor da lista.",
		properties_single_select_choice_tooltip: "Seleccione um valor.",
		properties_multiple_select_typein_tooltip: "Introduza um ou mais valores.",
		properties_multiple_select_choice_tooltip: "Seleccione um ou mais valores.",
		properties_not_selectable_tooltip: "Não é possível seleccionar a categoria.",
		properties_none: "Nenhum",
		properties_none_tooltip: "Seleccione <i>Nenhuma</i> para limpar o valor actual desta propriedade.",
		properties_value_empty: "Nenhum valor",
		properties_value_read_only: "Só de leitura",
		properties_clear_label: "Limpar",
		properties_clear_tooltip: "Limpar o valor neste campo limpa o valor no repositório após fazer clique em <b>Guardar</b>.",
		properties_box_custom_properties: "Propriedades personalizadas",
		properties_box_metadata_name_in_use: "Este nome já é utilizado. Introduza outro nome para a propriedade personalizada.",

		properties_templates: "Modelos",
		properties_add_template: "Adicionar modelo",
		properties_remove_template: "Remover",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Dar entrada",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Dar entrada",
		checkin_cancel_label: "Cancelar",
		checkin_file_name_label: "Nome do ficheiro",
		checkin_document_status_title: "Dar entrada do documento",
		checkin_document_status_uploading_msg: "A carregar o ficheiro...",
		checkin_document_status_checkingin_msg: "A dar entrada do ficheiro...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Seleccionar modo de redacção",
		viewer_redaction_new_document_confirmation_question: "Pretende guardar a redacção como um novo documento ou ficheiro local?",
		viewer_redaction_new_version_confirmation_question: "Pretende guardar a redacção como uma nova versão?",
		viewer_redaction_new_version_confirmation_question_never: "Pretende guardar a redacção como um novo conteúdo?",		
		viewer_redaction_new_document_button: "Sim",
		viewer_redaction_new_document_cancel_button: "Não",
		viewer_redaction_add_document_confirmation_question: "Pretende guardar a redacção como um novo documento, nova versão ou ficheiro local?",
		viewer_redaction_add_document_confirmation_question_version_never: "Pretende guardar a redacção como um novo documento, novo conteúdo ou ficheiro local?",
		viewer_redaction_add_document_button: "Novo documento",
		viewer_redaction_add_new_version_button: "Nova versão",
		viewer_redaction_add_new_version_button_version_never: "Novo conteúdo",
		viewer_redaction_add_local_file_button: "Ficheiro local",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Seleccionar modo de redacção",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Não foi possível localizar o modelo de entrada utilizado para adicionar este documento ao repositório. Será dada entrada do documento no repositório sem utilizar o modelo de entrada.",
		property_entry_template_not_retrieved_warning: "Não foi possível localizar o modelo de entrada utilizado para adicionar este documento ao repositório. As propriedades do documento serão apresentadas sem utilizar o modelo de entrada.",
		multi_edit_entry_template_not_found_name: "[Não encontrado]",
		multi_edit_entry_template_not_retrieved_warning: "Não foi possível localizar o modelo de entrada utilizado para adicionar estes itens ao repositório. As propriedades do item serão modificadas sem utilizar o modelo de entrada.",
		checkin_major_version_hover: "Aumenta um número à versão do documento e define o estado do documento como Publicado. Se a opção não estiver seleccionada, o documento não está pronto para ser publicado e é dada entrada do mesmo como versão secundária.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Não é possível dar entrada do documento, uma vez que o mesmo não tem saída dada.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "O ID de utilizador ou a palavra-passe não são válidos para o servidor.",
		error_bad_userid_password_userResponse: "Certifique-se de que introduziu correctamente o ID de utilizador e a palavra-passe.",
		error_bad_userid_password_adminResponse: "Foi devolvido o erro seguinte: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Não é possível estabelecer uma ligação ao cliente da Web utilizando o URL seguinte: ${0}.",
		http_send_error_explanation: "Este erro pode ser causado por um problema de configuração no servidor da aplicação da Web ou por um problema no servidor da aplicação da Web ou por um problema com a aplicação do cliente da Web.",
		http_send_error_userResponse: "Tente iniciar sessão novamente. Se o problema persistir, reporte este erro ao administrador do sistema.",
		http_send_error_adminResponse: "Foi devolvido o seguinte erro de HTTP: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Não é possível estabelecer uma ligação ao cliente da Web utilizando o URL seguinte: ${0}.",
		http_error_explanation: "Poderá ser necessário proceder à autenticação numa firewall ou o servidor da aplicação da Web pode não estar em execução ou pode não estar acessível devido a problemas de rede.",
		http_error_userResponse: "Se for necessário proceder à autenticação numa firewall, efectue a autenticação e tente iniciar sessão novamente. Se o problema persistir, reporte este erro ao administrador do sistema.",
		http_error_adminResponse: "Foi devolvido o seguinte erro de HTTP: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Não é possível estabelecer uma ligação ao cliente da Web utilizando o URL seguinte: ${0}.",
		http_response_bad_explanation: "Este erro pode ser causado por um problema de configuração no servidor da aplicação da Web ou por um problema com o cliente da Web.",
		http_response_bad_userResponse: "Tente iniciar sessão novamente. Se o problema persistir, reporte este erro ao administrador do sistema.",
		http_response_bad_adminResponse: "Foi devolvido o erro seguinte: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Sem título",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Não é possível inicial a applet de correio electrónico.",
		email_applet_init_failed_explanation: "Este problema pode ocorrer quando o cliente de correio electrónico não está instalado e configurado correctamente ou quando uma versão suportada de JRE (Java Runtime Environment) não está instalada na sua estação de trabalho.",
		email_applet_init_failed_userResponse: "Para solucionar o problema:<ul><li>Certifique-se de que a sua aplicação de correio electrónico está instalada e configurada como o cliente de correio electrónico predefinido na estação de trabalho.</li><li>Certifique-se de que está instalada uma versão suportada de JRE na estação de trabalho, introduzindo o comando seguinte numa linha de comandos: java -version</li></ul><p>Uma lista das versões suportada de JRE está incluída no documento <i>Hardware and software prerequisites for IBM Content Navigator</i> no sítio de Suporte para Software IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Não foi possível iniciar a aplicação de correio electrónico, uma vez que não foi possível carregar um ficheiro DLL necessário.",
		email_applet_JNI_LOAD_FAILED_explanation: "Não é possível carregar o ficheiro WCEmailAppletJNI.dll requerido, uma vez que o directório temporário na estação de trabalho poderá estar cheio.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Certifique-se de que o directório temporário tem espaço suficiente. Em seguida, tente enviar o documento a partir do cliente da Web novamente. Por predefinição, o ficheiro WCEmailAppletJNI.dll é carregado para o directório temporário especificado nas definições do navegador da Web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Não foi possível iniciar a aplicação de correio electrónico, uma vez que não é possível a applet de correio electrónico criar um ficheiro temporário.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "O directório temporário na estação de trabalho pode estar cheio.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Certifique-se de que o directório temporário tem espaço suficiente. Em seguida, tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Não é possível iniciar a aplicação de correio electrónico, uma vez que não é possível a applet de correio electrónico aceder ao directório temporário.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "O directório temporário na estação de trabalho pode estar cheio ou poderá não ter o acesso apropriado para gravar no directório temporário.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Certifique-se de que o directório temporário tem espaço suficiente e de que tem permissões de gravação no directório temporário. Em seguida, tente enviar o documento a partir do cliente da Web novamente. Se o problema persistir, contacte o administrador do sistema.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Não é possível a applet de correio electrónico eliminar um ficheiro temporário.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Outra aplicação pode estar a utilizar o ficheiro ou o ficheiro pode não existir na estação de trabalho.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Se o ficheiro estiver a ser utilizado por outra aplicação, feche a aplicação. Se o ficheiro se encontrar no sistema de ficheiros local, remova o ficheiro seguinte do directório temporário na estação de trabalho: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Não é possível criar a ligação para o documento.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "O repositório devolveu o URL num formato não válido.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Feche o navegador da Web incluindo todos os separadores e sessões e inicie sessão novamente. Tente enviar o documento a partir do cliente da Web novamente. Se este problema se mantiver, contacte o Suporte para Software IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Não é possível à applet de correio electrónico anexar o ficheiro a uma mensagem de correio electrónico.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "O repositório devolveu o URL para o documento num formato não válido.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Feche o navegador da Web incluindo todos os separadores e sessões e inicie sessão novamente. Tente enviar o documento a partir do cliente da Web novamente. Se este problema se mantiver, contacte o Suporte para Software IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Não é possível criar o anexo.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Não é possível à applet de correio electrónico ler o URL para o documento.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Feche o navegador da Web incluindo todos os separadores e sessões e inicie sessão novamente. Tente enviar o documento a partir do cliente da Web novamente. Se este problema se mantiver, contacte o Suporte para Software IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Não foi possível obter o documento a partir do repositório.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "A sessão pode ter atingido o tempo limite, o repositório do servidor da aplicação da Web pode não estar em execução ou pode existir um problema com a configuração do cliente da Web.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Inicie sessão e tente enviar o documento por correio electrónico novamente. Se o problema persistir, solicite ao administrador do sistema que verifique os registos de erros do repositório.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Se configurou o cliente da Web para converter documentos AFP para outro formato, tal como PDF, antes de enviar os documentos como anexos, certifique-se de que a conversão está configurada correctamente.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Não foi possível converter o documento em PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "A ferramenta utilizada para transformar documentos em PDF não suporta o tipo de ficheiro.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Feche esta página e tente enviar novamente o documento por correio electrónico sem converter o mesmo em PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "A mensagem de correio electrónico não foi criada.",
		email_applet_MAPI_USER_ABORT_explanation: "Abra a sua aplicação de correio electrónico e certifique-se de que está a funcionar correctamente. Em seguida, tente enviar o documento a partir do cliente da Web novamente. Se o problema persistir, contacte o seu administrador do sistema para rever os registos de eventos do sistema operativo.",
		email_applet_MAPI_USER_ABORT_userResponse: "Se pretende fechar a aplicação de correio electrónico, não são necessárias mais acções. Para enviar a mensagem de correio electrónico, inicie sessão na aplicação de correio electrónico e tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Não é possível criar a mensagem de correio electrónico.",
		email_applet_MAPI_FAILURE_explanation: "O cliente de correio electrónico pode não estar aberto ou pode não ter sessão iniciada.",
		email_applet_MAPI_FAILURE_userResponse: "Abra a sua aplicação de correio electrónico e certifique-se de que está a funcionar correctamente. Em seguida, tente enviar o documento a partir do cliente da Web novamente. Se o problema persistir, contacte o seu administrador do sistema para rever os registos de eventos do sistema operativo.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Não é possível criar a mensagem de correio electrónico.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Não tem sessão iniciada no cliente de correio electrónico. É necessário que o cliente de correio esteja aberto e que tenha sessão iniciada para enviar uma mensagem a partir do cliente da Web.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Abra o cliente de correio electrónico e inicie sessão. Em seguida, tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Não é possível criar a mensagem de correio electrónico, uma vez que o ficheiro temporário não pode ser criado na estação de trabalho.",
		email_applet_MAPI_DISK_FULL_explanation: "O directório temporário na estação de trabalho pode estar cheio.",
		email_applet_MAPI_DISK_FULL_userResponse: "Certifique-se de que o directório temporário tem espaço suficiente. Em seguida, tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Não é possível criar a mensagem de correio electrónico, uma vez que não existe memória de sistema suficiente.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Pode ter demasiadas aplicações abertas.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Feche as aplicações não utilizadas e, em seguida, tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Acesso MAPI recusado.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "O acesso MAPI (Messaging Application Programming Interface) pode não estar activado ou pode não ser suportado pela aplicação de correio electrónico. MAPI é o protocolo de mensagens utilizado para permitir a comunicação entre o cliente da WEb e a aplicação de correio electrónico.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Contacte o administrador do sistema.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Certifique-se de que a aplicação de correio electrónico tem acesso MAPI definido e está configurada correctamente. Se o problema se mantiver, contacte o Suporte de Software IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Não é possível criar o anexo ou a ligação para o item.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Pode ter demasiadas sessões abertas do navegador da Web.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Feche todas as sessões do navegador da Web não utilizadas. Em seguida, tente enviar o documento a partir do cliente da Web novamente. Se o problema persistir, contacte o administrador do sistema.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Não é possível enviar a mensagem de correio electrónico.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Pode estar a tentar enviar demasiados anexos.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Seleccione menos ficheiros. Em seguida, tente enviar os documentos a partir do cliente da Web novamente.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Não é possível enviar a mensagem de correio electrónico.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Pode estar a enviar a mensagem de correio electrónico a demasiados destinatários.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Envie a mensagem de correio electrónico a menos destinatários.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Não é possível criar o anexo.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Alguns ficheiros temporários requeridos podem ter sido eliminados antes de criar o anexo. Este erro pode ocorrer se a cache do navegador for limpa antes de enviar a mensagem de correio electrónico.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Não é possível criar o anexo.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Alguns ficheiros temporários requeridos podem ter sido eliminados antes de criar o anexo. Este erro pode ocorrer se a cache do navegador for limpa antes de enviar a mensagem de correio electrónico.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Não é possível a aplicação de correio electrónico criar o anexo.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Não é possível enviar a mensagem de correio electrónico para o destinatário especificado.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "O destinatário pode não existir no livro de endereços.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Verifique o nome do destinatário e tente enviar o documento novamente.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Não é possível enviar a mensagem de correio electrónico para o destinatário especificado.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "O endereço de correio electrónico pode estar incorrectamente formatado.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Certifique-se de que introduziu um endereço de correio electrónico válido e tente enviar o documento novamente.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_NO_MESSAGES_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Não é possível enviar a mensagem de correio electrónico.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "A mensagem de correio electrónico pode ser demasiado longa.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Reduza o texto da mensagem de correio electrónico e tente enviar a mensagem novamente.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Não é possível criar a mensagem de correio electrónico.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Pode ter ocorrido uma falha do cliente de correio electrónico ao tentar criar a mensagem.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Reinicie o cliente de correio electrónico e tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "A mensagem de correio electrónico pode não ter sido composta correctamente.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Não é possível enviar a mensagem de correio electrónico para o destinatário especificado.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "O endereço de correio electrónico pode estar incorrectamente formatado.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Certifique-se de que introduziu um endereço de correio electrónico válido e envie o documento novamente.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Não é possível ao cliente de correio de correio electrónico executar a acção requerida.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "A aplicação de correio electrónico devolveu um erro inesperado.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Tente enviar o documento a partir do cliente da Web novamente.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Uma das propriedades não tem o número de valores requerido.",
		error_property_cardinality_explanation: "Algumas propriedades têm um número mínimo e máximo de valores.",
		error_property_cardinality_userResponse: "Utilize a ajuda sobreposta para determinar que propriedade requer um número mínimo de valores. Em seguida, especifique o número mínimo de valores e tente novamente.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "É requerido um nome de ficheiro.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Especifique um nome de ficheiro e tente novamente.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "O suplemento ${0} contém erros.",
		plugin_error_explanation: "Ocorreu um erro ao avaliar o JavaScript para o suplemento ${0}. Se continuar a utilizar o cliente da Web, poderão ocorrer erros adicionais.",
		plugin_error_userResponse: "Contacte o administrador do sistema.",
		plugin_error_adminResponse: "Existe um problema como suplemento que tem de ser solucionado pelo fornecedor do suplemento, É recomendado remover o suplemento da configuração do cliente da Web até que o problema com o suplemento esteja solucionado.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Não é possível abrir o modelo de entrada.",
		open_old_format_entry_template_error_explanation: "O modelo de entrada utiliza formato anterior que não é suportado no cliente da Web.",
		open_old_format_entry_template_error_userResponse: "Solicite ao administrador do sistema que actualize o modelo de entrada.",
		open_old_format_entry_template_error_adminResponse: "Utilize o Application Engine ou o Workplace XT Entry Template Designer para guardar uma versão actualizada do modelo de entrada.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Não é possível abrir o modelo de entrada.",
		open_custom_object_entry_template_error_explanation: "O cliente da Web não suporta o tipo de modelo de entrada seguinte: modelos de entrada de objecto personalizado.",
		open_custom_object_entry_template_error_userResponse: "Abra um modelo de entrada diferente.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Não é possível abrir o objecto eforms.",
		open_forms_object_error_explanation: "O cliente da Web não suporta os seguintes tipos de objectos eforms: modelo de formulário, dados de formulário, política de documentos e política de fluxo de trabalho.",
		open_forms_object_error_userResponse: "Abra um documento diferente.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Não é possível utilizar o modelo de entrada ${0}.",
		entry_template_folder_restricted_error_explanation: "O modelo de entrada adiciona itens à pasta ${1} e o utilizador não tem as permissões apropriadas para adicionar itens a essa pasta.",
		entry_template_folder_restricted_error_userResponse: "Seleccione um modelo de entrada diferente ou solicite ao administrador do sistema para atribuir as permissões apropriadas para adicionar itens à pasta ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Não é possível abrir o modelo de entrada.",
		open_records_entry_template_error_explanation: "O cliente da Web não suporta o tipo de modelo de entrada seguinte: modelos de entrada de declarar como registo.",
		open_records_entry_template_error_userResponse: "Abra um modelo de entrada diferente.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Não é possível abrir o fluxo de trabalho.",
		open_workflow_error_explanation: "O cliente da Web não permite abrir fluxos de trabalho.",
		open_workflow_error_userResponse: "Abra um documento diferente.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Não é possível abrir o documento.",
		viewer_unable_to_view_error_explanation: "Não está configurado qualquer visualizador para documentos deste tipo ou o visualizador configurado não é compatível com o seu sistema.",
		viewer_unable_to_view_error_userResponse: "Solicite ao administrador de sistema que configure um visualizador para documentos deste tipo e certifique-se de que o visualizador configurado funciona com o sistema do utilizador.",
		viewer_unable_to_view_error_adminResponse: "Utilize a ferramenta de administração para configurar um visualizador para este tipo de documento.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Não é possível abrir a procura.",
		search_cannot_open_error_explanation: "A funcionalidade de procura não está configurada para este ambiente de trabalho.",
		search_cannot_open_error_userResponse: "Solicite ao administrador do sistema acesso a um ambiente de trabalho que inclua a funcionalidade de procura ou que este ambiente de trabalho seja actualizado de forma a incluir a funcionalidade de procura.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "O documento não foi carregado.",
		viewer_document_load_failed_error_explanation: "Não foi possível ao visualizador do Daeja ViewONE Professional abrir o documento.",
		viewer_document_load_failed_error_userResponse: "Para obter mais informações, consulte a mensagem de erro apresentada no visualizador.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Não é possível visualizar o documento.",
		viewer_session_expired_explanation: "Não é possível obter o conteúdo do documento.",
		viewer_session_expired_userResponse: "Tente iniciar sessão novamente. Se o problema persistir, o servidor da aplicação pode não estar em execução. Solicite ao administrador do sistema que verifique os registos de erro do IBM Content Navigator ou que reinicie o servidor.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Não é possível visualizar o documento.",
		ajaxViewer_getPage_failed_explanation: "O Visualizador AJAX recebeu uma resposta de erro ao obter o conteúdo da página. O servidor da aplicação pode não estar em execução.",
		ajaxViewer_getPage_failed_userResponse: "Feche o navegador da Web e inicie sessão novamente. Se o problema persistir, solicite ao administrador do sistema que verifique os ficheiros de registo do servidor da aplicação da Web ou que reinicie o servidor.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "O Java Runtime Environment (JRE) não foi encontrado na estação de trabalho.",
		viewer_java_plugin_not_found_explanation: "O suplemento não foi encontrado ou a versão correcta de JRE não está instalada.",
		viewer_java_plugin_not_found_userResponse: "Verifique se o JRE está instalado. Por exemplo, numa linha de comandos, introduza o comando seguinte: Java -version. Se o JRE não estiver instalado ou se estiver instalado com o nível de versão incorrecto, instale a versão correcta de JRE. Uma lista das versões suportadas está incluída no documento <i>Hardware and software prerequisites for IBM Content Navigator</i> no sítio do Suporte para Software IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Não é possível apresentar o documento no navegador da Web.",
		viewer_pdf_plugin_not_found_explanation: "O suplemento utilizado para apresentar documentos PDF no navegador da Web não foi encontrado.",
		viewer_pdf_plugin_not_found_userResponse: "O ficheiro PDF será descarregado para a estação de trabalho em vez de ser apresentado na janela do visualizador.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Não é possível adicionar o item seguinte ao repositório: ${0}.",
		add_document_single_item_error_explanation: "Este erro pode ocorrer por um dos motivos seguintes:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Está a tentar adicionar um documento que foi movido ou eliminado.</li>" + "<li>Está a tentar adicionar um documento cujo nome foi alterado.</li>" + "<li>Está a tentar adicionar um documento que está danificado.</li>" + "<li>Está a tentar adicionar um documento que está aberto noutra aplicação.</li>" + "<li>Está a tentar adicionar uma pasta ao repositório.</li>" + "<li>Não tem as permissões apropriadas no sistema operativo para aceder ao documento.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Execute a acção apropriada para solucionar o problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Se o documento foi movido ou o respectivo nome alterado, localize o documento no sistema de ficheiros e tente adicioná-lo novamente.</li>" + "<li>Se o documento estiver aberto noutra aplicação, feche o mesmo e tente adicioná-lo novamente.</li>" + "</ul>" + "<br>Não é possível adicionar pastas ao repositório.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Não é possível adicionar os ${0} itens seguintes ao repositório: ${1}",
		add_document_multiple_items_error_explanation: "Um problema com um dos itens não permite que os itens sejam adicionados ao repositório. Este erro pode ocorrer por um dos motivos seguintes:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Está a tentar adicionar um documento que foi movido ou eliminado.</li>" + "<li>Está a tentar adicionar um documento cujo nome foi alterado.</li>" + "<li>Está a tentar adicionar um documento que está danificado.</li>" + "<li>Está a tentar adicionar um documento que está aberto noutra aplicação.</li>" + "<li>Está a tentar adicionar uma pasta ao repositório.</li>" + "<li>Não tem as permissões apropriadas no sistema operativo para aceder ao documento.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Execute a acção apropriada para solucionar o problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Se um documento foi movido ou o respectivo nome alterado, localize o documento no sistema de ficheiros e tente adicionar novamente.</li>" + "<li>Se um documento estiver aberto noutra aplicação, feche o mesmo e tente adicionar os itens novamente.</li>" + "<li>Se um documento foi eliminado ou se estiver danificado desmarque o item e tente adicionar os itens restantes novamente.</li>" + "</ul>" + "<br>Não é possível adicionar pastas ao repositório.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Não pode arrastar e largar itens a partir desta localização.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Não é possível abrir o objecto eforms.",
		open_forms_work_object_error_explanation: "O cliente da Web não suporta o tipo de objecto de formulário electrónico seguinte: política de tipo de objecto.",
		open_forms_work_object_error_userResponse: "Abra um documento diferente.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Não é possível abrir o documento.",
		viewer_privilege_to_view_error_explanation: "Não tem os privilégios apropriados para visualizar o documento.",
		viewer_privilege_to_view_error_userResponse: "Solicite ao proprietário do documento ou ao seu administrador do sistema para lhe atribuir as permissões apropriadas para visualizar o documento.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Não é possível adicionar os itens ao repositório.",
		add_document_too_many_items_error_explanation: "Pode adicionar até ${0} itens de cada vez. Está a tentar adicionar ${1} itens.",
		add_document_too_many_items_error_userResponse: "Remova alguns dos itens da lista e tente adicionar os itens novamente. Também pode contactar o seu administrador do sistema para aumentar o número máximo de documentos que pode adicionar de cada vez a este ambiente de trabalho.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Não é possível estabelecer uma ligação ao cliente da Web utilizando o URL seguinte: ${0}.",
		http_ltpa_expired_explanation: "A chave LTPA associada à sessão do navegador expirou.",
		http_ltpa_expired_userResponse: "Reinicie o navegador e tente iniciar sessão novamente. Se o problema persistir, reporte o erro seguinte ao administrador do sistema: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Não é possível adicionar o documento à pasta ${0}.",
		dnd_no_privilege_error_explanation: "As permissões na pasta impedem que a adição de quaisquer documentos à pasta.",
		dnd_no_privilege_error_userResponse: "Adicione o documento a uma pasta diferente.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Não é possível modificar os itens.",
		modify_document_too_many_items_error_explanation: "Pode modificar até ${0} itens de cada vez. Está a tentar modificar ${1} itens.",
		modify_document_too_many_items_error_userResponse: "Seleccione menos itens e tente modificar os itens novamente. Também pode contactar o seu administrador do sistema para aumentar o número máximo de itens que pode modificar de cada vez a partir deste ambiente de trabalho.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Não é possível utilizar a classe ${0}.",
		add_document_multiple_unique_values_error_explanation: "A classe ${0} contém uma ou mais propriedades que requerem um valor exclusivo para cada documento. Ao adicionar vários documentos, todos os documentos utilizam os mesmos valores.",
		add_document_multiple_unique_values_error_userResponse: "Seleccione uma classe diferente ou adicione os documentos separadamente.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Não é possível utilizar o modelo de entrada ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "O modelo de entrada ${0} requer a adição de documentos à classe ${1}. No entanto, a classe ${1} contém uma ou mais propriedades que requerem um valor exclusivo para cada documento. Ao adicionar vários documentos, todos os documentos utilizam os mesmos valores.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Seleccione um modelo de entrada diferente ou adicione os documentos separadamente.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Não é possível utilizar o modelo de entrada ${0}.",
		entry_template_class_restricted_error_explanation: "O modelo de entrada adiciona itens utilizando a classe ${1} e o utilizador não tem as permissões apropriadas para adicionar itens utilizando essa classe.",
		entry_template_class_restricted_error_userResponse: "Seleccione um modelo de entrada diferente ou solicite ao administrador do sistema que atribua as permissões apropriadas para adicionar itens utilizando a classe ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Não é possível atribuir o item de trabalho a outro utilizador.",
		process_reassign_error_explanation: "Esta acção é proibida pelo fluxo de trabalho.",
		process_reassign_error_userResponse: "Pode abrir o item de trabalho e executar o passo actual no item de trabalho.  Para obter mais informações sobre esta questão, peça ao proprietário do item para verificar se o item de trabalho pode ser reatribuído.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Não é possível carregar a acção personalizada seguinte: ${0}.",
		customaction_loadurl_error_explanation: "A acção personalizada não está numa localização acessível. O URL actual da acção personalizada é ${1}.",
		customaction_loadurl_error_userResponse: "Solicite ao administrador que mova a acção personalizada para uma localização acessível.",
		customaction_loadurl_error_adminResponse: "O ficheiro JSP que define a acção personalizada tem de ser fornecido como parte da aplicação da Web eClient ou da aplicação da Web IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Não é possível localizar a seguinte função: ${0}.",
		feature_invalid_explanation: "Este problema pode ocorrer se a função não estiver disponível no ambiente de trabalho especificado ou se o nome da função tiver sido escrito incorrectamente.",
		feature_invalid_userResponse: "Ao fazer clique em OK, será redireccionado para a função predefinida para este ambiente de trabalho. Contacte o administrador do sistema para reportar este problema.",
		feature_invalid_adminResponse: "Se a função devia estar disponível no ambiente de trabalho, actualize a configuração do ambiente de trabalho na ferramenta de administração. Se a função não devia estar incluída no ambiente de trabalho ou se estiver escrita incorrectamente, consulte o programador da aplicação que criou o URL para esta função para actualizar o URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Não é possível abrir a procura ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "Tem de estar num espaço de equipa para abrir esta procura.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Seleccione outra procura.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Não é possível importar o seguinte ficheiro: ${0}.",
		wrong_import_file_type_error_explanation: "O ficheiro tem de ser um ficheiro de propriedades.",
		wrong_import_file_type_error_userResponse: "Seleccione o ficheiro de propriedades que exportou da ferramenta de administração.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Não foi possível localizar o repositório do ${0} no ambiente de trabalho do ${1}.",
		browse_repository_not_found_error_explanation: "O repositório tem de estar presente no ambiente de trabalho e activado para a função de pesquisa quando especificado num parâmetro de URL.",
		browse_repository_not_found_error_userResponse: "Certifique-se de que o ID do repositório especificado no URL está correcto, o repositório foi adicionado ao ambiente de trabalho do ${1} e a função de pesquisa está activada para o repositório.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "O repositório do ${0} não está activado para a função de pesquisa no ambiente de trabalho do ${1}.",
		browse_repository_not_enabled_error_explanation: "O repositório tem de estar activado para a função de pesquisa quando especificado num parâmetro de URL.",
		browse_repository_not_enabled_error_userResponse: "Active a função de pesquisa para o repositório do ${0} no ambiente de trabalho do ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Não é possível concluir a procura, uma vez que a ligação inclui critérios não válidos.",
		invalid_xt_stored_search_criteria_error_explanation: "O valor seguinte não é válido: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Solicite ao administrador do sistema que forneça uma ligação actualizada.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Edite o par nome-valor adequado no URL. Se não tiver conhecimento dos valores que são válidos para a propriedade, abra a procura guardada no Designer de procura do FileNet Workplace XT para determinar um valor válido.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Não é possível abrir a procura entre repositórios.",
		unified_search_invalid_fixed_value_error_explanation: "A procura entre repositórios inclui critérios não válidos. Este problema pode ocorrer quando um critério tiver um valor fixo que não é compatível com outras propriedades num mapeamento. Por exemplo, este problema pode ocorrer se o valor fixo corresponder a uma cadeia, mas as restantes propriedades no mapeamento corresponderem a números inteiros.",
		unified_search_invalid_fixed_value_error_userResponse: "Se tiver as permissões apropriadas para editar a procura, remova o critério não válido e guarde a procura novamente. Se não tiver as permissões apropriadas para editar a procura, solicite ao proprietário da procura ou ao administrador do sistema para guardar a procura novamente.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Não é possível concluir o pedido.",
		launch_action_invalid_json_error_explanation: "Os dados transmitidos para o cliente da Web não são válidos.",
		launch_action_invalid_json_error_userResponse: "Indique ao administrador do sistema que aplicação estava a utilizar quando o problema ocorreu.",
		launch_action_invalid_json_error_adminResponse: "A aplicação cliente não enviou um objecto JSON válido para o cliente da Web. Contacte o Suporte para Software da IBM para obter assistência adicional.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Não é possível concluir o pedido.",
		launch_action_not_found_error_explanation: "A acção ${0} não está configurada para qualquer menu no ambiente de trabalho ${1}.",
		launch_action_not_found_error_userResponse: "Solicite ao administrador do sistema que configure o ambiente de trabalho ${1} para utilizar um menu que inclua a acção ${0} ou para atribuir ao utilizador um ambiente de trabalho que inclua a acção ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Não é possível concluir o pedido.",
		launch_action_repository_not_found_error_explanation: "O repositório ${0} não está associado ao ambiente de trabalho ${1}.",
		launch_action_repository_not_found_error_userResponse: "Solicite ao administrador do sistema que associe o repositório ${0} ao ambiente de trabalho ${1} ou que atribua ao utilizador um ambiente de trabalho que inclua o repositório ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Não é possível abrir o espaço de equipa.",
		teamspace_cannot_open_error_explanation: "A funcionalidade de espaço de equipa não está configurada para este ambiente de trabalho.",
		teamspace_cannot_open_error_userResponse: "Solicite ao administrador do sistema acesso a um ambiente de trabalho que inclua a funcionalidade de espaço de equipa ou que este ambiente de trabalho seja actualizado de forma a incluir a funcionalidade de espaço de equipa.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Ocorreu um erro ao dar entrada do conteúdo redigido.",
		viewer_redaction_checkin_failed_explanation: "O visualizador recebeu uma resposta de erro ao dar entrada do conteúdo redigido.",
		viewer_redaction_checkin_failed_userResponse: "Solicita ao administrador do sistema que verifique os ficheiros de registo do servidor da aplicação da Web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Não é possível adicionar documentos a este repositório.",
		add_document_odserver_odwek_version_od_error_explanation: "A versão actual do servidor do IBM Content Manager OnDemand oi ODWEK não tem o nível mínimo requerido para permitir a adição de documentos a um repositório do Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Solicite ao administrador que verifique as versões do Content Manager OnDemand Server e ODWEK requeridas para permitir a adição de documentos aos repositórios do Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Não é possível adicionar os itens ao repositório.",
		add_document_too_many_items_od_error_explanation: "Para repositórios do IBM Content Manager OnDemand, pode adicionar apenas um item de cada vez.",
		add_document_too_many_items_od_error_userResponse: "Remova alguns dos itens da lista e tente adicionar os itens novamente um item de cada vez.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Não é possível adicionar o item ao repositório.",
		add_document_filesize_empty_od_error_explanation: "Não é possível adicionar ficheiros vazios a um repositório do IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Adicione conteúdo ao ficheiro e tente adicionar o ficheiro novamente ou adicione um item diferente.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Não é possível abrir a procura entre repositórios.",
		unified_search_repository_not_found_error_explanation: "A procura entre repositórios inclui um ou mais repositórios não válidos. Este problema pode ocorrer quando os repositórios incluídos na procura são eliminados da aplicação ou removidos do ambiente de trabalho actual.",
		unified_search_repository_not_found_error_userResponse: "Se tiver as permissões apropriadas para editar a procura, guarde a procura novamente. Ao guardar a procura, o cliente da Web remove os repositórios não válidos da procura. Se não tiver as permissões apropriadas para editar a procura, solicite ao proprietário da procura ou ao administrador do sistema para guardar a procura novamente.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Não é possível criar um novo documento.",
		edit_document_using_office_online_error: "Não é possível abrir o documento.",
		edit_document_using_office_online_error_explanation: "O URL do servidor do Microsoft Office Online não está configurado.",
		edit_document_using_office_online_error_userResponse: "Antes de poder utilizar o Office Online, é necessário que o administrador active o Servidor do Office Online num repositório e especificar o URL do Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Não é possível abrir o documento no Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Solicite ao administrador para actualizar a Integração do Servidor do MS Office Online.<br><br> Caso o utilizador necessite de aceder a este documento do Microsoft Office Online, aceda à página Integração de Edição para o repositório e actualize a Integração do Servidor do MS Office Online para incluir a classe na lista de classes a modificar para o suporte do Office Online. ",		
		browser_not_support_this_viewer: "O visualizador configurado não é compatível com o seu navegador.",
		browser_not_support_this_viewer_explanation: "O ${0} não é suportado pelo navegador.",
		browser_not_support_this_viewer_userResponse: "Utilize outro visualizador para abrir o documento. Está incluída uma lista dos navegadores suportados no documento <i>Hardware and software prerequisites for IBM Content Navigator</i> no sítio do Suporte para Software IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informações do Fluxo de Trabalho",
		process_information_info_text: "O item seleccionado está actualmente em execução nos fluxos de trabalho que se seguem.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Igual a",
		operator_NOTEQUAL: "Não igual",
		operator_LIKE: "Como",
		operator_STARTSWITH: "Começa com",
		operator_ENDSWITH: "Termina com",
		operator_NOTLIKE: "Não como",
		operator_NULL: "Está vazio",
		operator_NOTNULL: "Não está vazio",
		operator_LESS: "Inferior a",
		operator_LESSOREQUAL: "Igual ou inferior a",
		operator_GREATER: "Superior a",
		operator_GREATEROREQUAL: "Igual ou superior a",
		operator_BETWEEN: "Entre",
		operator_NOTBETWEEN: "Não entre",
		operator_IN: "Incluir tudo",
		operator_INANY: "Incluir qualquer",
		operator_NOTIN: "Excluir tudo",
		operator_CONTAINS: "Contém",

		/* SearchForm widget */
		search_button_tooltip: "Procure documentos que correspondem aos critérios.",
		reset_button_tooltip: "Repõe a procura nos valores predefinidos configurados pelo administrador.",
		clear_button_tooltip: "Remove todos os valores introduzidos para a procura.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Seleccionar procura",
		append_to_search: "Anexar à procura",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nova procura",
		new_unified_search: "Nova procura entre repositórios",
		searh_name_contains: "O nome da procura contém",
		keep_search_criteria_expanded: "Manter os critérios de procura abertos",
		showing_results: "A mostrar resultados para:",
		open_in_new_window: "Abrir numa janela nova",
		open_in_new_tab: "Abrir num separador novo",
		close_tab: "Fechar separador",
		add_repository: "Adicionar repositório",
		edit_repository: "Editar repositório",
		remove_repository: "Remover",
		search_scope: "Âmbito da procura",
		search_class_template: "Classe",
		object_type_version: "Tipo de objecto e versão",
		not_applicable: "Não aplicável",
		unified_search_including_subfolders: " (Incluir subpastas)",
		unified_search_dialog_intro_text: "Seleccione o repositório e a procura ou as classes que pretende incluir na procura.",
		unified_search_class_or_template: "Classe ou modelo",

		select_object_fieldset_legend: "Como pretende localizar itens para anexar:",
		select_object_create_new_search: "Nova procura",
		select_object_search_template: "Procura existente",

		search_criteria: "Critérios de procura:",
		search_criteria_no_colon: "Critérios de procura",
		search_in_multiple: "Procurar em (${0}):",
		search_location_including_subfolders: "${0} incluindo subpastas",
		search_class: "Classe:",
		search_class_multiple: "Classe (${0}):",
		search_class_including_subclasses: "${0} incluindo subclasses",
		search_class_all_pseudo: "Tudo",
		search_results: "Resultados da procura",
		select_operator: "Seleccionar um operador",
		ending_value: "O valor final da propriedade ${0} é:",
		search_options: "Opções de procura:",
		search_version: "Versão:",
		search_released_version: "Versão publicada",
		search_current_version: "Versão actual",
		search_all_versions: "Todas as versões",
		search_file_type_filter: "Filtro de tipo de ficheiro:",
		search_one_file_type: "1 tipo de ficheiro",
		search_many_file_types: "${0} tipos de ficheiros",
		search_action_filter: "Filtro de acção:",
		search_action_filter_hover_help: "Limita os resultados para incluir apenas ficheiros em que os utilizadores realizaram uma acção específica.<br/>Por exemplo, pode procurar apenas documentos adicionados a 20 de Setembro de 2012.",
		search_action_filter_enabled: "O filtro de acção está activado",
		search_enable: "Activar",
		search_disable: "Desactivar",
		search_by: "por",
		search_added: "Adicionado",
		search_modified: "Modificado",
		search_checked_out: "Com saída dada",
		search_date_operator_on: "Em",
		search_date_operator_not_on: "Não em",
		search_date_operator_before: "Antes",
		search_date_operator_after: "Depois",
		search_version_hover_help_p8: "Está disponível para todos os utilizadores uma versão publicada. Um documento que corresponde a uma versão actual significa que um ou mais utilizadores estão a editar esse documento.",
		search_version_hover_help_cm: "Uma versão actual é a versão mais recente do item.",
		search_using: "Procurar itens correspondentes:",
		search_property_and_text_criteria: "Aos critérios de texto e valores de propriedades",
		search_property_or_text_criteria: "Aos critérios de texto ou valores de propriedades",
		search_property_and_text: "Aos critérios de texto e propriedades",
		search_property_or_text: "Aos critérios de texto ou propriedades",
		search_property_options: "Opções de propriedade:",
		search_property_option_match_all: "Todas as propriedades",
		search_property_option_match_any: "Qualquer uma das propriedades",
		search_property_option_match_all_summary: "Corresponder tudo",
		search_property_option_match_any_summary: "Corresponder a qualquer",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Mínimo",
		search_content_size_filter: "Filtro de tamanho do conteúdo:",
		search_content_size_filter_any: "Qualquer tamanho do conteúdo",

		/* Search work options */
		search_work_filter: "Filtro de itens de trabalho:",
		search_work_filter_hover_help: "Limite os resultados para que incluam apenas os itens que se encontram num fluxo de trabalho. Por exemplo, pode limitar os resultados para que incluam apenas itens de trabalho que estejam activos.<br /><br />Esta opção não é aplicável se pretender visualizar todas as versões dos itens devolvidos pela procura.",
		search_work_filter_enabled: "Filtro de itens de trabalho activado",
		search_work_filter_status: "Estado:",
		search_work_filter_step: "Passo:",
		search_work_filter_owner: "Proprietário:",
		search_work_filter_status_all: "Todos os itens",
		search_work_filter_status_active: "Itens activos",
		search_work_filter_status_suspended: "Itens suspensos",
		search_work_filter_process_all: "Todos os fluxos de trabalho",
		search_work_filter_step_all: "Todos os passos",
		search_work_filter_owner_all: "Todos os utilizadores",
		search_work_filter_step_error: "O nome do passo não existe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Não é possível completar a procura sem informações adicionais. Introduza um valor para pelo menos uma condição.",
		search_insufficient_input_box: "Não é possível completar a procura sem informações adicionais. Introduza critérios de pesquisa de texto ou seleccione um modelo de metadados.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Não é possível configurar a procura para executar quando está aberta sem informações adicionais. Introduza um valor para pelo menos uma condição.",
		search_member_required: "Para partilhar esta procura com grupos e utilizadores específicos, seleccione pelo menos um utilizador ou grupo para partilhar esta procura.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Pretende fechar sem guardar as alterações?",
		search_prompt_close_all_without_save: "Pretende fechar todos os separadores sem guardar as alterações?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Um dos seguintes tipos de critérios de procura não é válido para este repositório: ${0}. Para executar a procura no cliente da Web, é necessário remover os critérios não válidos. Se guardar a procura, os critérios não válidos serão removidos. Se não pretender alterar a procura, feche a procura.",
		search_invalid_repository: "Um ou mais repositórios",
		search_invalid_class: "Uma ou mais classes",
		search_invalid_folder: "Uma ou mais pastas",
		search_invalid_file_type: "Um ou mais tipos de ficheiro",
		search_invalid_property: "Uma ou mais propriedades",
		search_invalid_text_search: "Critérios de procura de texto",
		search_invalid_work: "Critérios do filtro de itens de trabalho",

		search_operator_pulldown_missing: "É requerido um operador. Seleccione um operador do menu pendente. Se não forem apresentados quaisquer operadores, solicite ao administrador do sistema para verificar o separador <b>Procura</b> na ferramenta de administração para verificar se todos os operadores estão definidos como ocultos. Se esta procura for entre repositórios, o menu pendente pode não conter quaisquer operadores se nas propriedades mapeadas entre si não existirem operadores comuns.",

		/*SearchBuilder */
		open_search_builder: "Nova procura",
		document_type: "Classe",
		show_all_properties: "Mostrar todas as propriedades",
		text_search_label: "Localizar itens com os termos seguintes:",
		text_search_place_holder: "Utilize uma combinação de termos e operadores: * ? ou \"expressões de correspondência exacta\"",
		text_search_place_holder_box: "Utilize uma combinação de termos e operadores: AND, OR, NOT e \"expressões de correspondência exacta\"",
		text_search_place_holder_cascade_proximity: "Utilize uma combinação de termos e operadores: * ou ?",
		text_search_place_holder_common: "Utilize uma combinação de termos e \"expressões de correspondência exacta\"",
		text_search_hover_help_p8: "Utilize o asterisco (*) ou o ponto de interrogação (?) como carácter global. Utilize aspas (\"\") para obter correspondências exactas.",
		text_search_hover_help_p8_only_crs: "Utilize o asterisco (*) ou o ponto de interrogação (?) como carácter global. Utilize aspas (\"\") para obter correspondências exactas. Quando especifica vários termos, uma procura em vários repositórios devolve itens que contêm qualquer um dos termos.",
		text_search_hover_help_cm: "Utilize o asterisco (*) ou o ponto de interrogação (?) como carácter global. Utilize aspas (\"\") para obter correspondências exactas. Utilize o sinal de subtracção (-) para anteceder os termos a excluir e o sinal de adição (+) para anteceder os termos a incluir.",
		text_search_hover_help_box: "Utilize AND entre os termos para corresponder a todos os termos. Utilize OR entre os termos para corresponder a qualquer um dos termos. Utilize aspas (\"\") para obter correspondências exactas. Anteceda o termo com NOT para excluir o mesmo.",
		text_search_hover_help_common: "Utilize aspas (\"\") para obter correspondências exactas. Quando especifica vários termos, uma procura em vários repositórios devolve itens que contêm todos os termos.",
		text_search_options: "Opções de texto:",
		text_search_options_hover_help: "Se utilizar operadores diferentes dos caracteres globais, seleccione Operadores avançados.",
		text_search_option_any: "Qualquer um dos termos",
		text_search_option_all: "Todos os termos",
		text_search_option_proximity: "Na proximidade das palavras:",
		text_search_option_none: "Operadores avançados",
		text_search_option_authoring: "A procura de texto é:",
		text_search_option_authoring_hover_help: "Seleccione uma opção que determina de que forma pretende disponibilizar os critérios de procura de texto aos utilizadores. Se não pretender incluir quaisquer critérios de procura de texto na procura, oculte a opção. Caso contrário, pode permitir que os critérios de procura de texto sejam editados ou requeridos pelos utilizadores ou que sejam apenas de leitura para os utilizadores.",
		text_search_option_hide: "Ocultar critérios",
		text_search_option_hide_hover_help: "Seleccione esta opção se não pretender incluir quaisquer critérios de procura de texto na procura ou permitir que outros utilizadores especifiquem critérios de procura de texto.",
		text_search_option_in: "No controlo HTML/XML ${0}",
		text_search_option_paragraph: "No mesmo parágrafo",
		text_search_option_sentence: "Na mesma frase",
		text_search_option_vql: "Consulta VQL",
		text_search_option_none_hover_help: "Utilize - antes dos termos a excluir.",
		text_search_option_cascade_proximity_hover_help: "Restringe os resultados da procura aos termos situados num intervalo de palavras que não incluem expressões exactas.",

		box_search_metadata: "Metadados:",
		box_search_select_template: "Seleccionar modelo",
		box_search_no_templates: "Não existem modelos disponíveis",
		box_text_search_options_search_within: "Âmbito da procura:",
		box_text_search_options_search_within_everything: "Tudo",
		box_text_search_options_search_within_file_content: "Conteúdo do documento",
		box_text_search_options_search_within_tags: "Etiquetas",
		box_text_search_options_limit_to: "Apenas procura:",

		add_property: "Adicionar propriedade",
		edit_template: "Editar procura",
		save_search: "Guardar procura",
		search_template_name: "Nome:",
		search_template_desc: "Descrição:",
		auto_run: "Executar a procura quando aberta",
		show_in_tree: "Mostrar a procura na estrutura de pastas",
		show_in_tree_hover_help: "Se uma procura for guardada numa pasta, é apresentada apenas na lista de conteúdo por predefinição. Se seleccionar esta opção, a procura também é apresentada na árvore de pastas na vista de navegação.  Contudo, a procura é apresentada na árvore de pastas apenas se guardar a procura numa pasta.",
		share_search_with: "Partilhar procura com:",
		remove_member: "Remover ${0}",
		ok_button_label: "OK",
		save_template: "Guardar",
		save_template_title: "Se for necessário procurar frequentemente itens específicos, guarde os critérios de procura.",
		remove_criterion: "Remover",
		apply_button_label: "Aplicar",
		empty_search_results_pane: "Executar uma procura para ver resultados.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Todo o repositório",

		repository_already_selected: "Não é possível adicionar o repositório ${0} à procura entre repositórios porque já está incluído na procura. <br/> Um repositório só pode ser incluído uma vez na procura entre repositórios. <br/>Seleccione um repositório diferente para incluir na procura entre repositórios.",

		repository_limit_reached: "Não é possível adicionar o repositório ${0} à pesquisa entre repositórios. Pode adicionar um máximo de ${1} repositórios à procura.",

		nomore_criteria_toappend: "Todas as propriedades mapeadas já se encontram incluídas nos critérios de procura. Não foram adicionadas propriedades aos critérios de procura.",
		nomore_criteria_toappend_regular: "Todas as propriedades mapeadas já estão incluídas nos critérios de procura. Não foram adicionadas propriedades aos critérios de procura.",

		/* OD Save Search dialog */
		reload_label: "Recarregar",
		od_save_search_help_text: "Introduza um nome para a procura ou seleccione uma procura existente para substituir",
		public_access_label: "Permitir que outros utilizadores utilizem esta procura",
		od_delete_search_help_text: "Seleccionar uma ou mais procuras para eliminar",
		delete_save_searches: "Eliminar procuras guardadas",

		/* Unified Search */
		unified_search_enable_text_search: "Incluir critérios de procura de texto",
		unified_search_text_search_enabled: "Procura de texto incluída",
		unified_search_mapping: "Mapeamento",
		unified_search_new_mapping: "Novo mapeamento",
		unified_search_mapping_name: "Nome do mapeamento",
		unified_search_mapping_dialog_instructions: "Seleccione as propriedades que pretende mapear. Algumas propriedades podem ser mapeadas com propriedades com um tipo de dados diferente. Por exemplo, pode mapear uma propriedade de cadeia com uma propriedade de número inteiro. Ao mapear uma propriedade a outra propriedade, as propriedades são tratadas como uma única propriedade na procura entre propriedades.",
		unified_search_filter_available_properties: "Propriedades disponíveis do filtro",
		unified_search_available_properties: "Propriedades disponíveis",
		unified_search_mapped_properties: "Propriedades mapeadas",
		unified_search_single_values: "valores únicos",
		unified_search_multiple_values: "valores múltiplos",
		unified_search_add_mapping: "Adicionar mapeamento",
		unified_search_warn_remove_repository: "O repositório seleccionado é utilizado nos critérios de procura.\nSe remover o repositório, quaisquer mapeamentos e critérios de procura que incluam o repositório serão eliminados.\n\nPretende remover o repositório?",
		unified_search_warn_update_repository_mappings: "Alterar a selecção de propriedades para este repositório afecta os critérios de procura.\n\nOs critérios de procura incluem um ou mais mapeamentos que incluem uma ou mais propriedades que está a remover. Quaisquer mapeamentos que incluam propriedades que está remover terão de ser eliminados. Quaisquer critérios de procura que incluam estes mapeamentos têm de ser eliminados para executar a procura.\n\nPretende actualizar as opções do repositório e eliminar os mapeamentos e critérios de procura?",
		unified_search_warn_update_repository_mappings_reset: "Incluir critérios de procura de texto para este repositório afecta os critérios de procura entre repositórios.\n\nQualquer critério de procura de propriedades que inclua um mapeamento com propriedades para este repositório tem de ser eliminado para executar a procura.\n\nPretende actualizar as opções do repositório e eliminar os critérios de procura?",
		unified_search_warn_update_repository_text_criteria: "Remover os critérios de procura de texto para este repositório afecta os critérios de procura entre repositórios.\n\nOs critérios de procura de texto têm de ser eliminados dos critérios de procura entre repositórios para executar a procura.\n\nPretende actualizar a opção do repositório e eliminar os critérios de procura de texto?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Remover os critérios de procura de texto e alterar a selecção de propriedades para este repositório afecta os critérios de procura entre repositórios.\n\nOs critérios de procura de texto têm de ser eliminados dos critérios de procura entre repositórios para executar a procura. Os critérios de procura incluem também um ou mais mapeamentos que incluem uma ou mais propriedades que está a remover. Quaisquer mapeamentos que incluam propriedades que está remover terão de ser eliminados. Quaisquer critérios de procura de propriedades que incluam estes mapeamentos têm de ser eliminados para executar a procura.\n\nPretende actualizar as opções do repositório e eliminar os critérios de procura de texto, mapeamentos e critérios de procura de propriedades?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Excluir critérios de procura de texto para este repositório afecta os critérios de procura entre repositórios.\n\nQualquer critério de procura de propriedades que inclua um mapeamento com propriedades para este repositório tem de ser eliminado para executar a procura. Os critérios de texto podem ser eliminados dos critérios de procura entre repositórios para executar a procura.\n\nPretende actualizar as opções do repositório e eliminar os critérios de procura?",
		unified_search_warn_remove_mapping: "Remover este mapeamento afecta os critérios de procura.\n\nOs critérios de procura que utilizam o mapeamento têm de ser eliminados para executar a procura.\n\nPretende actualizar o mapeamento e eliminar os critérios de procura?",
		unified_search_warn_update_mapping: "As alterações neste mapeamento afectam os critérios de procura.\n\nOs critérios de procura que utilizam o mapeamento têm de ser limpos para garantir que a procura não inclui operadores não válidos ou valores não válidos.\n\nPretende actualizar o mapeamento e limpar os critérios de procura?",
		unified_search_warn_update_mapping_not_searchable: "As alterações neste mapeamento afectam os critérios de procura.\n\nQuando as propriedades mapeadas são todas apenas de apresentação, não é possível utilizar o mapeamento nos critérios de procura. Os critérios de procura que utilizam o mapeamento têm de ser eliminados para executar a procura.\n\nPretende actualizar o mapeamento e eliminar os critérios de procura?",
		unified_search_warn_update_mapping_box_searchable: "As alterações neste mapeamento afectam os critérios de procura.\n\nOs critérios de procura já incluem este mapeamento mais de uma vez e se adicionar a propriedade ${0} do repositório ${1}, os critérios de procura incluem a propriedade ${0} demasiadas vezes. Os critérios de procura que utilizam o mapeamento têm de ser eliminados para executar a procura.\n\nPretende actualizar o mapeamento e eliminar os critérios de procura?",
		unified_search_details: "Detalhes da procura entre repositórios",
		unified_search_fixed_value_property: "Propriedade de valor fixo",
		unified_search_required_property: "Propriedade requerida",
		unified_search_display_only_property: "Propriedades apenas de apresentação",
		unified_search_missing_required_properities: "Não é possível guardar ou executar a procura.<br/>As seguintes propriedades são propriedades requeridas:${0}É necessário incluir as propriedades num mapeamento e adicionar as propriedades com valores aos critérios de procura.",
		unified_search_property_repostory: "${0} (Repositório: ${1})",
		unified_search_builder_no_mappings: "Não é possível executar a procura.<br/>É necessário criar um mapeamento de propriedades e incluir o mesmo na <b>Apresentação de resultados</b> para que a procura apresente os seus resultados.",
		unified_search_builder_insufficient_criteria_to_run: "Não é possível executar a procura.<br/>Os critérios de procura não incluem critérios de procura de texto ou valores de propriedades para os repositórios seguintes:${0}Para cada repositório incluindo na procura, tem de introduzir um critério de procura de texto ou criar um mapeamento de propriedades, incluir nos critérios de propriedades e especificar um valor de propriedade.",
		unified_search_builder_insufficient_criteria_to_save: "Não é possível guardar a procura.<br/>A procura não inclui critérios de procura para os repositórios seguintes:${0}Para cada repositório incluído na procura, é necessário executar uma das acções seguintes:<ol><li>Criar um mapeamento de propriedades e incluir o mesmo nos critérios de propriedades.</li><li>Modifique o repositório para incluir os critérios de procura de texto e criar um mapeamento de propriedade e incluir o mesmo na <b>Apresentação de resultados</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Não é possível executar a procura.<br/>Para cada repositório incluído na procura, é necessário especificar, pelo menos, um valor de propriedade. Por exemplo, pode especificar valores para as propriedades seguintes: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Não é possível executar a procura.<br/>São requeridos critérios de procura de texto.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Não é possível executar a procura.<br/>Para cada repositório incluído na procura, é necessário especificar, pelo menos, um valor de propriedade ou inserir critérios de procura de texto. Por exemplo, pode especificar valores para as propriedades seguintes: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Não é possível executar a procura.<br/>São requeridos critérios de procura de texto. Para cada repositório incluído na procura, é necessário especificar, pelo menos, um valor de propriedade ou inserir critérios de procura de texto. Por exemplo, pode especificar valores para as propriedades seguintes: ${0}",
		unified_search_invalid_criteria: "A procura contém critérios não válidos que impedem a execução da procura.<br/>Os critérios não válidos foram removidos. No entanto, é necessário guardar as alterações à procura antes de executar a procura. Se não pretender guardar as alterações, feche a procura.<br/><br/>Os seguintes itens foram removidos ou modificados:${0}",
		unified_search_invalid_fixed_values: "Não é possível guardar ou executar a procura.<br/>Os seguintes critérios de procura têm valores fixos que não são válidos:${0}Execute uma das seguintes acções para resolver o problema:<ul><li>Remover os critérios de procura que contêm valores não válidos</li><li>Editar os mapeamentos que incluem a propriedade IBM Content Manager OnDemand com o valor fixo para remover a propriedade.</li><li>Editar os mapeamentos que incluem a propriedade do IBM Content Manager OnDemand com o valor fixo para tornar todas as propriedades compatíveis. Para obter mais informações sobre as propriedades que podem ser mapeadas, aceda à ligação Obter mais informações no texto de introdução na parte superior da janela de mapeamento de propriedades.</li></ul>",
		unified_search_cannot_add_properties: "Não é possível adicionar propriedades a esta procura.<br/>Todas as propriedades mapeadas disponíveis já estão incluídas nos critérios de procura e cada propriedade só pode ser adicionada uma vez à procura.",
		unified_search_mapping_not_viewable: "Não é possível apresentar as propriedades de modelo do Box nos resultados da procura. Se pretender adicionar este mapeamento como coluna, é necessário mapear pelo menos uma propriedade que não seja um propriedade de modelo do Box. Por exemplo, pode seleccionar uma propriedade de outro repositório.",

		unified_search_returned_more: "Pelo menos um repositório excedeu o número de resultados máximo permitido.",
		unified_search_partial_failure: "Ocorreu um erro em, pelo menos, um repositório.",
		unified_search_partial_failure_and_returned_more: "Ocorreu um erro em, pelo menos, um repositório e pelo menos um repositório excedeu o número máximo de resultados permitidos.",
		unified_search_see_analysis: "Ver a análise dos resultados.",
		unified_search_analysis_intro_returned_more: "Para cada repositório que excedeu o número máximo de resultados permitidos, tente aperfeiçoar os critérios de procura para devolver menos resultados. Pode também executar uma procura de repositório única para devolver mais resultados do que o máximo permitido para uma procura entre repositórios.",
		unified_search_analysis_intro_partial_failure: "Consulte as informações de erro que foram devolvidas pelo repositório ou repositórios. Se apropriado, resolva os erros e execute novamente a procura entre repositórios.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Para cada repositório em que ocorreu um erro, tente resolver o problema e executar a procura novamente.<br/><br/>Para cada repositório que excedeu o número máximo de resultados permitidos, tente aperfeiçoar os critérios de procura para devolver menos resultados. Pode também executar uma procura de repositório única para devolver mais resultados do que o máximo permitido para uma procura entre repositórios.",
		unified_search_results_found: "Resultados encontrados",
		unified_search_maximum_allowed: "Máximo permitido",
		unified_search_maximum_exceeded: "Máximo excedido",

		unified_search_mapping_rule_box: "Não é possível adicionar esta propriedade ao mapeamento.<p>A propriedade ${0} do repositório ${1} já está noutro mapeamento e as propriedades pesquisáveis deste repositório podem ser incluídas apenas num mapeamento por procura.<br/>Seleccione uma propriedade diferente para adicionar ao mapeamento.</p>",
		unified_search_mapping_rule_repository: "Não é possível adicionar a propriedade ao mapeamento.<br/>O mapeamento já inclui uma propriedade do repositório ${0}. Um mapeamento só pode incluir uma propriedade de um repositório.<br/>Seleccione um repositório diferente a partir do qual adicionar uma propriedade ou crie um novo mapeamento para a propriedade seleccionada.",
		unified_search_mapping_rule_data_type: "Não é possível adicionar a propriedade ao mapeamento.<br/>Uma propriedade ${0} não pode ser mapeada com uma propriedade ${1}. Seleccione uma propriedade diferente para mapear ou crie um novo mapeamento para a propriedade seleccionada.<br/>Para obter mais informações sobre as propriedades que podem ser mapeadas, aceda à ligação Obter mais informações no texto de introdução na parte superior desta janela.",
		unified_search_mapping_rule_cardinality: "Não é possível adicionar a propriedade ao mapeamento.<br/>Todas as propriedades no mapeamento têm de suportar valores únicos ou valores múltiplos. A propriedade seleccionada suporta ${0} e as propriedades no mapeamento suportam ${1}.<br/>Seleccione uma propriedade diferente para adicionar ao mapeamento ou crie um novo mapeamento para a propriedade seleccionada.",
		unified_search_mapping_rule_fixed_value: "Não é possível adicionar a propriedade ao mapeamento.<br/>O mapeamento já inclui uma propriedade com um valor fixo. Um mapeamento só pode incluir uma propriedade com um valor fixo.<br/>Seleccione uma propriedade diferente para adicionar ao mapeamento ou crie um novo mapeamento para a propriedade seleccionada.",
		unified_search_mapping_rule_child_component: "Não é possível adicionar a propriedade ao mapeamento.<br/>Não é possível mapear uma propriedade com um componente descendente a outras propriedades. Se pretender poder efectuar procuras nesta propriedade, crie um novo mapeamento para a propriedade seleccionada.",
		unified_search_mapping_rule_operator_intersection: "Não é possível adicionar a propriedade ao mapeamento.<br/>Todas as propriedades no mapeamento têm de ter um ou mais operadores em comum. No entanto, a propriedade ${0} não tem quaisquer operadores em comum com as outras propriedades no mapeamento.<br/>Se apropriado, seleccione uma propriedade diferente. Se tiver de incluir a propriedade seleccionada, contacte o administrador do sistema para editar os operadores que estão associados à propriedade.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Definições avançadas",
		advanced_search_options_intro: "Definir opções de critérios avançadas.",
		advanced_search_options_editable: "Editável",
		advanced_search_options_readonly: "Só de leitura",
		advanced_search_options_required: "Obrigatório",
		advanced_search_options_hidden: "Oculto",
		advanced_search_options_property_editable:"A propriedade é:",
		advanced_search_options_operators:"Operadores:",
		advanced_search_options_use_all:"Utilizar tudo",
		advanced_search_options_use_selected:"Utilizar selecção",
		advanced_search_options_operators_filtered: "Operadores filtrados",
		// Data types in lowercase
		data_type_boolean: "booleano",
		data_type_date: "data",
		data_type_time: "hora",
		data_type_timestamp: "marca de hora",
		data_type_decimal: "valor decimal",
		data_type_double: "número de vírgula flutuante",
		data_type_short: "número inteiro",
		data_type_integer: "número inteiro",
		data_type_long: "número inteiro",
		data_type_string: "cadeia de texto",
		data_type_string_alpha: "cadeia alfabética",
		data_type_string_alphanum: "cadeia alfanumérica",
		data_type_string_ext: "cadeia alfanumérica expandida",
		data_type_string_num: "cadeia numérica",
		data_type_binary: "binário",
		data_type_object: "objecto",
		data_type_guid: "identificador único global",
		data_type_user: "utilizadores",
		data_type_child_component: "componente descendente",

		/* Print Dialog */
		print_title: "Imprimir",
		print_message: "A imprimir: ${0}",
		print_print_button: "Imprimir",
		print_clean_margins_button: "Definir tudo como 0",
		print_type: "Tipo de impressora:",
		print_printer_server_options: "Opções de impressão do servidor",
		print_printer_properties: "Propriedades da impressora",
		print_printer_fax_properties: "Propriedades de fax",
		print_printer_name: "Nome da impressora:",
		print_fax_recipient: "Destinatário",
		print_fax_sender: "Remetente",
		print_copies: "Cópias:",
		print_local_orientation: "Orientação",
		print_local_orientation_landscape: "Horizontal",
		print_local_orientation_portrait: "Vertical",
		print_local_margins: "Margens",
		print_local_margins_top: "Superior",
		print_local_margins_bottom: "Inferior",
		print_local_margins_left: "Esquerda",
		print_local_margins_right: "Direita",
		print_printer_server: "Servidor",
		print_printer_local: "Local",
		print_property_class: "Classe:",
		print_property_routing: "Encaminhamento:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Nó:",
		print_property_writer: "Autor:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Dest:",
		print_property_forms: "Formulários:",
		print_property_faxnotes: "Notas:",
		print_property_faxcompany: "Empresa:",
		print_property_faxnumber: "Número de fax:",
		print_property_faxname: "Nome:",
		print_property_faxsendertelnumber: "Número de telefone:",
		print_property_faxcoverpage: "Página de rosto:",
		print_property_faxsubject: "Assunto:",
		print_saveoptions: "Guardar opções de impressão",
		print_property_bannerpage: "Utilizar página separadora",
		print_print_with_info_fields: "Imprimir com campos de informações",
		print_field_from: "De",
		print_field_to: "Para",
		print_invalid_value_class: "Os caracteres válidos são A-Z ou 0-9",
		print_invalid_value_pagedef: "Os caracteres válidos são caracteres alfabéticos ou numéricos ou os caracteres @, # ou $",
		print_invalid_value_writer: "Os caracteres válidos são caracteres alfabéticos ou numéricos ou os caracteres @, # ou $",
		print_invalid_value_formdef: "Os caracteres válidos são caracteres alfabéticos ou numéricos ou os caracteres @, # ou $",
		print_invalid_value_forms: "Os caracteres válidos são caracteres alfabéticos ou numéricos ou os caracteres @, # ou $",
		print_invalid_value_margin: "Os números válidos situam-se entre ${0} e ${1}",
		print_status_message: "Foram enviados ${0} documentos para a impressora ${1}.",

		print_applet_init_error: "Não é possível iniciar a applet de impressão.",
		print_applet_init_error_explanation: "Este problema pode ocorrer pelos motivos seguintes: <br/><br/><ul><li>O Java Runtime Environment (JRE) não está instalado na estação de trabalho.</li><li>O suplemento de Java não está activado no navegador da Web.</li><li>A versão de JRE na sua estação de trabalho não é compatível com a versão do IBM Content Navigator.</li><li>Tempo de espera esgotado do navegador para iniciar a applet de impressão.</li></ul>",
		print_applet_init_error_userResponse: "Pode executar os passos seguintes para resolver o problema com o JRE:<br/><br/><ol><li>Certifique-se que o JRE está instalado na estação de trabalho.</li><li>Certifique-se de que o suplemento de Java está activado no navegador da Web.</li><li>Certifique-se de que a versão de JRE na estação de trabalho é compatível com o IBM Content Navigator e tente novamente. Uma lista das versões suportadas está incluída no documento <i>Hardware and software prerequisites for IBM Content Navigator</i> no sítio do Suporte para Software IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Página Inicial",
		daeja_print_selected_documents_title: "Documentos seleccionados",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Corresponder a todos os critérios de procura",
		match_any_criteria: "Corresponder a qualquer um dos critérios de procura",
		include_subfolders_summary: "${0} (incluir subpastas)",
		browse_button: "Pesquisar&hellip;",
		search_for: "Procurar:",
		object_type_documents: "Documentos",
		object_type_folders: "Pastas",
		object_type_documents_folders: "Documentos e pastas",
		object_type_web_links: "Ligações da Web",
		object_type_documents_folders_web_links: "Documentos, pastas e ligações da Web",

		/* SelectSearchFolderDialog */
		search_in: "Procurar em:",
		include_subfolders: "Incluir subpastas",

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
		locked_item_icon_title: "Bloqueado por ${0}",
		checked_out_icon_title: "Saída dada por ${0}",
		major_minor_version_icon_title: "Versão principal com versões secundárias",
		suspended_icon_title: "O fluxo de trabalho está suspenso",
		on_hold_icon_title: "Em retenção",
		has_notes_icon_title: "Tem notas",
		record_icon_title: "Declarado como registo",
		compound_document_icon_title: "Documento composto",
		validateTemplate_icon_title: "O modelo de espaço de equipa necessita de validação",
		offlineTemplate_icon_title: "O modelo de espaço de equipa está offline",
		offlineTeamspace_icon_title: "O espaço de equipa está offline",
		pending_delete_icon_title: "O espaço de equipa está com eliminação pendente",
		delete_error_icon_title: "Não foi possível eliminar o espaço de equipa",
		defaultTemplate_icon_title: "Modelo predefinido de espaço de equipa",
		teamspace_icon_title: "Espaço de equipa",
		teamspace_template_icon_title: "Modelo de espaço de equipa",
		has_bookmark_icon_title: "Tem um marcador",
		read_only_icon_title: "Só de leitura",
		no_results_were_found: "Não foram encontrados resultados.",
		folder_is_empty: "A pasta está vazia.",
		no_checked_out_items: "Não tem itens com saída dada.",
		inbasket_is_empty: "A área de recepção está vazia.",
		worklist_is_empty: "A lista de trabalho está vazia.",
		tracker_milestone_completed: "Concluído",
		stepprocessor_attachments_title: "Índice",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Bloquear itens",
		unlock_items: "Desbloquear itens",
		checkin_item: "Dar entrada do item",

		/* Help */
		learn_more: "Obter mais informações",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Abrir espaço de equipa",
		repository_tab_createWorkspace: "Novo espaço de equipa",
		repository_tab_createWorkspaceTemplate: "Novo modelo de espaço de equipa",
		repository_tab_DefaultTemplate: "Predefinição",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Esta tarefa copia documentos.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Não tem privilégios de edição para o modelo de espaço de equipa seleccionado.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Tem a certeza de que pretende eliminar o espaço de equipa ${0}? <br><br>Apenas os documentos arquivados noutras pastas no repositório permanecem no repositório. Quaisquer documentos arquivados apenas no espaço de equipa serão eliminados.",
		teamspaceDecommissionLabel: "Eliminar:",
		teamspaceDecommissionDescription: "Eliminar o espaço de equipa irá remover este espaço de equipa do servidor: Indique o modo como os artefactos do espaço de equipa são processados.",
		teamspaceDecommissionOptions: "Opções de eliminação de espaços de equipa",
		teamspaceDecommissionDeleteAll: "Eliminar todos os artefactos de espaços de equipa",
		teamspaceDecommissionReFileAll: "Arquivar novamente todos os artefactos de espaços de equipa",
		teamspaceDecommissionReFileDestination: "Mover para:",
		teamspaceDecommissionReFileIn: "Arquivar novamente em",
		teamspaceDecommissionTaskName: "Tarefa de eliminação de espaços de equipa",
		teamspaceDecommissionTaskDescription: "Esta tarefa elimina um espaço de equipa do repositório.",
		teamspaceDecommissionDeletionStarted: "O espaço de equipa foi agendado para eliminação",
		teamspaceDecommissionDeletionConnectionFailed: "Não foi possível executar a tarefa para eliminar um espaço de equipa porque não foi possível ligar ao repositório. Certifique-se de que as credenciais do administrador do repositório estão correctas.",

		teamspace_edit_properties_notsupported: "Apenas é possível editar as propriedades de espaços de equipa a partir da vista Espaços de equipa.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "O espaço de equipa está offline e apenas pode ser aberto pelos respectivos proprietários",

		/* Teamspace Builder widget */
		workspace_validation_document: "Documento:",
		workspace_validation_folder: "Pasta:",
		workspace_validation_ets: "Os seguintes modelos de entrada não estão disponíveis neste repositório e foram removidos da lista de modelos de entrada seleccionados:",
		workspace_validation_classes: "As seguintes classes não estão disponíveis neste repositório e foram removidas da lista de classes seleccionadas:",
		workspace_validation_searches: "As seguintes procuras não estão disponíveis neste repositório e foram removidas da lista de procuras seleccionadas:",
		workspace_validation_docs_folders: "Os seguintes documentos e pastas não estão disponíveis neste repositório e foram removidos da lista de itens incluídos:",
		workspace_change_template_confirmation_question: "Se seleccionar um modelo diferente, todas as alterações serão perdidas. Pretende continuar?\n",
		workspace_delete_item_confirmation_question: "Pretende remover os itens ${0}?\n",
		workspace_delete_role_confirmation_question: "Pretende remover a função ${0}?\n",
		workspace_delete_confirmation_question: "Se eliminar um espaço de equipa, apenas o contentor do espaço de equipa é eliminado. As pastas e documentos no espaço de equipa permanecem no repositório, sendo possível localizá-los através de uma procura. Para eliminar o conteúdo do espaço de equipa, elimine primeiro os itens no espaço de equipa e, em seguida, elimine o espaço de equipa.<br><br>Pretende eliminar o espaço de equipa ${0}?",
		workspacebuilder_instance_template_name_header: "Nome do modelo de espaço de equipa",
		workspacebuilder_instance_template_description_header: "Descrição",

		workspacebuilder_template_tooltip_name: "O nome do modelo não pode incluir nenhum dos caracteres seguintes: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "O nome do espaço de equipa não pode incluir nenhum dos caracteres seguintes: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Indique uma descrição que irá permitir aos utilizadores efectuar a selecção correcta na lista de modelos. Por exemplo, pode incluir informações sobre os destinatários do modelo.",
		workspacebuilder_instance_tooltip_description: "Indique uma descrição que irá permitir aos utilizadores distinguir entre este espaço de equipa e outros espaços de equipa.",

		workspacebuilder_template_edit_properties_pane: "Editar modelo de espaço de equipa",
		workspacebuilder_instance_properties_pane: "Definir espaço de equipa",
		workspacebuilder_template_properties_pane: "Definir modelo do espaço de equipa",

		workspacebuilder_instance_security_pane: "Definir segurança do espaço de equipa",
		workspacebuilder_template_security_pane: "Definir segurança do modelo",

		workspacebuilder_layout_pane: "Seleccionar esquema",
		workspacebuilder_search_templates_pane: "Seleccionar procuras",
		workspacebuilder_document_folders_pane: "Incluir pastas e documentos",
		workspacebuilder_doctypes_entryTemplates_pane: "Seleccionar classes ou modelos de entrada",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Seleccionar classes",
		workspacebuilder_security: "Segurança do espaço de equipa",

		workspacebuilder_roles_pane: "Seleccionar funções",
		workspacebuilder_security: "Segurança",

		workspacebuilder_properties_templates: "Modelos disponíveis:",
		workspacebuilder_available_templates: "Procuras disponíveis:",
		workspacebuilder_selected_templates: "Procuras seleccionadas:",
		workspacebuilder_templates_name: "Nome da procura",

		workspacebuilder_available_entryTemplates: "Modelos de entrada disponíveis:",
		workspacebuilder_selected_entryTemplates: "Modelos de entrada seleccionados:",

		workspacebuilder_item_classes: "Classes disponíveis:",
		workspacebuilder_item_classes_selected: "Classes seleccionadas:",
		workspacebuilder_properties_select_template: "Seleccione um modelo para utilizar para este espaço de equipa.",
		workspacebuilder_template_properties: "Definir modelo do espaço de equipa",
		workspacebuilder_instance_properties: "Definir espaço de equipa",
		workspacebuilder_template_introText: "Especifique os componentes comuns que pretende incluir em cada espaço de equipa criado a partir deste modelo, utilizando as selecções na navegação. Quando terminar, faça clique em <b>Terminar</b> para que o modelo fique disponível para outros utilizadores, que o poderão utilizar para criar novos espaços de equipa.",
		workspacebuilder_instance_introText: "As equipas utilizam espaços de equipa para partilhar e trabalhar com conjuntos específicos de documentos. Indique um nome com significado e uma descrição para este espaço de equipa para permitir aos utilizadores distinguir este de outros espaços de equipa. Pode personalizar o espaço de equipa incluindo procuras adicionais, classes ou modelos de entrada, documentos e pastas.",

		workspacebuilder_template_search_template_introText: "Seleccione as procuras predefinidas que pretende incluir em cada espaço de equipa criado a partir deste modelo. Se não forem seleccionadas procuras, o utilizador do espaço de equipa poderá visualizar todas as procuras a que tem acesso. Com as permissões apropriadas, os utilizadores podem partilhar e adicionar procuras ao espaço de equipa.",
		workspacebuilder_instance_search_template_introText: "Inclua as procuras que irão permitir aos utilizadores do espaço de equipa realizar tarefas de forma mais eficiente. Se não forem incluídas procuras, serão apresentadas todas as procuras a que os utilizadores do espaço de equipa têm permissão. Os utilizadores podem também adicionar e partilhar procuras no espaço de equipa com as permissões apropriadas.",

		workspacebuilder_template_roles_introText: "Os utilizadores do espaço de equipa estão atribuídos a funções. As funções especificam as tarefas que os utilizadores podem realizar. Faça clique nos ícones junto a cada função para ver as tarefas permitidas. Seleccione as funções apropriadas para o espaço de equipa.",
		workspacebuilder_template_roles_modify_introText: "Pode modificar as permissões associadas a cada função neste espaço de equipa. Deverá notificar os membros do espaço de equipa quando as respectivas permissões forem alteradas.",

		workspacebuilder_template_roles_header_name: "Nome da função",

		workspacebuilder_template_folders_introText: "Seleccione as pastas e os documentos predefinidos a incluir em todos os espaços de equipa criados a partir deste modelo. Pode adicionar documentos como ligações ou cópias. Utilize ligações para direccionar para documentos dos quais não pretende ter várias cópias, tais como políticas ou procedimentos. Crie cópias dos documentos que serão modificados pelos utilizadores, tais como modelos e formulários.",
		workspacebuilder_instance_folders_introText: "Seleccione as pastas e os documentos predefinidos a incluir no espaço de equipa. Pode adicionar documentos como ligações ou cópias. Utilize ligações para direccionar para documentos dos quais não pretende ter várias cópias, tais como políticas ou procedimentos. Crie cópias dos documentos que serão modificados pelos utilizadores, tais como modelos e formulários.",

		workspacebuilder_template_roles_introText: "Especifique as funções que serão incluídas em cada espaço de equipa criado a partir deste modelo. Também pode criar novas funções, que pode utilizar quando criar outros modelos de espaço de equipa.",
		workspacebuilder_instance_users_introText: "Num espaço de equipa, cada utilizador tem uma ou mais funções que especificam as tarefas que o utilizador pode realizar. Adicione utilizadores ao espaço de equipa e atribua funções aos utilizadores.",

		workspacebuilder_instance_navigation_pane_title: "Criador de espaço de equipa",
		workspacebuilder_template_navigation_pane_title: "Criador de modelo de espaço de equipa",

		workspacebuilder_roles_roles_nopermissions: "Não estão seleccionadas permissões para a função {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Funções seleccionadas:",
		workspacebuilder_roles_available_roles: "Funções disponíveis:",
		workspacebuilder_roles_privilege_header: "Permissão",
		workspacebuilder_roles_select_role: "Seleccionar função",
		workspacebuilder_roles_select_permission: "Seleccionar permissão",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Uma função denominada {0} já existe. É necessário especificar um nome exclusivo para a função. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nome da função:",
		workspacebuilder_roles_edit_dialog_role_description: "Descrição da função:",
		workspacebuilder_roles_edit_dialog_title_new: "Nova função",
		workspacebuilder_roles_edit_dialog_title_edit: "Editar função",

		workspacebuilder_roles_privileges_header: "Permissões para a função {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Permissões do documento:",
		workspacebuilder_roles_priv_group_folder: "Permissões da pasta:",
		workspacebuilder_roles_priv_group_teamspace: "Permissões do espaço de equipa:",
		workspacebuilder_roles_priv_group_item: "Permissões de documento e pasta:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Gerir permissões",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Os utilizadores com esta permissão podem gerir o acesso aos documentos e pastas no espaço de equipa. Com esta permissão os outros utilizadores podem eliminar pastas, editar propriedades de pasta, criar subpastas, etc.",

		workspacebuilder_roles_priv_deleteItems: "Eliminar",
		workspacebuilder_roles_plbl_deleteItems: "Os utilizadores com esta permissão podem eliminar documentos e pastas no espaço de equipa.",

		workspacebuilder_roles_priv_createItems: "Criar",
		workspacebuilder_roles_plbl_createItems: "Os utilizadores com esta autorização podem criar documentos e pastas no espaço de equipa.",

		workspacebuilder_roles_priv_viewItemProperties: "Ver propriedades",
		workspacebuilder_roles_plbl_viewItemProperties: "Os utilizadores com esta permissão podem ver as propriedades dos documentos e das pastas no espaço de equipa, incluindo as propriedades de sistema.",

		workspacebuilder_roles_priv_modifyItemProperties: "Editar propriedades",
		workspacebuilder_roles_plbl_modifyItemProperties: "Os utilizadores com esta permissão podem editar as propriedades de documentos e pastas no espaço de equipa.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gerir permissões da pasta",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Os utilizadores com esta permissão podem gerir o acesso às pastas no espaço de equipa. Com esta permissão os outros utilizadores podem eliminar pastas, editar propriedades de pasta, criar subpastas, etc.",

		workspacebuilder_roles_priv_deleteFolders: "Eliminar pastas",
		workspacebuilder_roles_plbl_deleteFolders: "Os utilizadores com esta permissão podem eliminar pastas no espaço de equipa.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Editar propriedades da pasta",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Os utilizadores com esta permissão podem editar as propriedades ou pastas no espaço de equipa.",

		workspacebuilder_roles_priv_createSubfolders: "Criar subpastas",
		workspacebuilder_roles_plbl_createSubfolders: "Os utilizadores com esta permissão podem criar pastas no espaço de equipa.",

		workspacebuilder_roles_priv_fileInFolders: "Adicionar a pastas",
		workspacebuilder_roles_plbl_fileInFolders: "Os utilizadores com esta permissão podem adicionar uma ligação a partir de pastas no espaço de equipa a documentos.",

		workspacebuilder_roles_priv_viewFolderProperties: "Ver propriedades da pasta",
		workspacebuilder_roles_plbl_viewFolderProperties: "Os utilizadores com esta permissão podem ver as propriedades das pastas no espaço de equipa, incluindo as propriedades de sistema.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gerir permissões de documento",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Os utilizadores com esta permissão podem gerir o acesso aos documentos no espaço de equipa. Com esta permissão os outros utilizadores podem eliminar documentos, editar propriedades de documento, etc.",

		workspacebuilder_roles_priv_deleteDocuments: "Eliminar documentos",
		workspacebuilder_roles_plbl_deleteDocuments: "Os utilizadores com esta permissão podem eliminar documentos no espaço de equipa.",

		workspacebuilder_roles_priv_promoteVersions: "Promover versões",
		workspacebuilder_roles_plbl_promoteVersions: "Os utilizadores com esta permissão podem atribuir um novo número de versão a documentos no espaço de equipa.",

		workspacebuilder_roles_priv_modifyContent: "Editar documentos",
		workspacebuilder_roles_plbl_modifyContent: "Os utilizadores com esta permissão podem editar o conteúdo dos documentos no espaço de equipa.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Editar propriedades de documento",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Os utilizadores com esta permissão podem editar as dos documentos no espaço de equipa.",

		workspacebuilder_roles_priv_viewContent: "Ver documentos",
		workspacebuilder_roles_plbl_viewContent: "Os utilizadores com esta permissão podem ver os documentos no espaço de equipa.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Ver propriedades do documento",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Os utilizadores com esta permissão podem ver as propriedades dos documentos no espaço de equipa, incluindo as propriedades de sistema.",

		workspacebuilder_roles_priv_addNewSearches: "Adicionar procuras",
		workspacebuilder_roles_plbl_addNewSearches: "Os utilizadores com esta permissão podem adicionar procuras ao espaço de equipa. Por predefinição, a procura não está disponível para outros utilizadores.",

		workspacebuilder_roles_priv_createNewSearches: "Criar procuras",
		workspacebuilder_roles_plbl_createNewSearches: "Os utilizadores com esta permissão podem criar novas procuras, mas não podem guardar as procuras. Se os utilizadores não tiverem esta permissão, não poderão adicionar documentos que já se encontrem no repositório ao espaço de equipa.",

		workspacebuilder_roles_priv_shareSearches: "Partilhar procuras",
		workspacebuilder_roles_plbl_shareSearches: "Os utilizadores com esta permissão podem partilhar as procuras criadas com outros utilizadores do espaço de equipa.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gerir classes ou modelos de entrada",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Os utilizadores com esta permissão podem adicionar e remover classes ou modelos de entrada do espaço de equipa.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gerir classes",
		workspacebuilder_roles_plbl_addRemoveClasses: "Os utilizadores com esta permissão podem adicionar e remover classes do espaço de equipa.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gerir utilizadores do espaço de equipa",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Os utilizadores com esta permissão podem adicionar e remover utilizadores e grupos do espaço de equipa. Adicionalmente, pode gerir que funções atribuir aos utilizadores.",

		workspacebuilder_roles_priv_modifyRoles: "Modificar funções",
		workspacebuilder_roles_plbl_modifyRoles: "Os proprietários com esta permissão podem modificar permissões de funções para o espaço de equipa. Esta permissão está disponível apenas para proprietários.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Seleccionar utilizadores",
		workspacebuilder_users_add_users_and_groups_button: "Adicionar utilizadores e grupos...",
		workspacebuilder_users_users_or_group_header: "Utilizador e grupo",
		workspacebuilder_users_roles_header: "Funções",

		workspacebuilder_users_role_header: "Função",
		workspacebuilder_users_role_no_permissions: "Esta função não tem permissões",
		workspacebuilder_users_available_roles_label: "Funções disponíveis:",
		workspacebuilder_users_selected_users_and_groups_label: "Utilizadores e grupos seleccionados:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Não é possível guardar o espaço de equipa. É necessário especificar, pelo menos, um proprietário para este espaço de equipa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Não é possível guardar o espaço de equipa. Deve ser atribuída uma função a todos os utilizadores.",
		// end of select users

		workspacebuilder_search_templates: "Seleccionar procuras",
		workspacebuilder_search_add: "Adicionar procura",
		workspacebuilder_properties_workspaceName: "Nome do espaço de equipa:",
		workspacebuilder_properties_templateName: "Nome do modelo:",
		workspacebuilder_properties_workspaceDescription: "Descrição do espaço de equipa:",
		workspacebuilder_properties_templateDescription: "Descrição do modelo:",
		workspacebuilder_properties_workspaceTemplate: "Modelo seleccionado:",
		workspacebuilder_properties_security: "Partilhar modelo com:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Mover do espaço de equipa:",
		moveTeamspaceDocuments_security: "Partilhar documento com:",
		moveTeamspaceDocuments_security_change: "Especificar segurança personalizada para os itens seleccionados",
		moveTeamspaceDocuments_item_type_level: "Não é possível seleccionar Substituir a segurança dos itens seleccionados, uma vez que a classe do item seleccionado está configurada para utilizar apenas a segurança ao nível da classe",
		moveTeamspaceDocuments_security_inherit: "Herdar a segurança da pasta de destino",
		moveTeamspaceDocuments_file_info_text: "Pode mover itens de um espaço de equipa para outro espaço de equipa ou para uma pasta.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Não tem as permissões apropriadas para mover itens para a pasta seleccionada.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Não tem as permissões apropriadas para mover os itens do espaço de equipa.",
		moveTeamspaceDocuments_move_mixed_items: "Não é possível substituir a segurança dos itens seleccionados. Alguns dos itens não são geridos pelo espaço de equipa. Pode substituir apenas a segurança dos itens geridos pelo espaço de equipa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "É necessário especificar um nome para o espaço de equipa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "É necessário especificar um nome para o modelo de espaço de equipa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "O nome do espaço de equipa não pode incluir nenhum dos caracteres seguintes: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "O nome do modelo não pode incluir nenhum dos caracteres seguintes: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Ligar ao documento",
		workspacebuilder_folders_makeDocCopy: "Copiar documento",
		workspacebuilder_folders_newfolder: "Nova pasta",
		workspacebuilder_folders_local_drive: "Do directório local",
		workspacebuilder_folders_from_repo: "Do repositório",
		workspacebuilder_folders_add_doc: "Adicionar documento",
		workspacebuilder_folders_grid_name: "Nome",
		workspacebuilder_folders_props: "Propriedades",
		workspacebuilder_folders_remove: "Remover",
		workspacebuilder_folders_delete: "Eliminar",
		workspacebuilder_folders_adddoc_local: "Adicionar documento da unidade local",
		workspacebuilder_folders_adddoc_repo: "Adicionar documento de repositório",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "O nome de pasta especificado já existe. Especifique um nome de pasta diferente.",

		workspacebuilder_classes_title: "Seleccionar classes ou modelos de entrada",
		workspacebuilder_classes_title_cm: "Seleccionar classes",
		workspacebuilder_classes_template_introText: "Especifique se os espaços de equipa criados a partir deste modelo irão utilizar classes ou modelos de entrada para adicionar documentos ao repositório. Se não estiverem seleccionadas classes, os utilizadores dos espaços de equipa poderão visualizar todas as classes a que têm acesso.  O utilizador pode modificar a lista de classes ou modelos de entrada no espaço de equipa se tiver as permissões apropriadas.",
		workspacebuilder_classes_template_introText_cm: "Seleccione as classes que os utilizadores podem utilizar para adicionar documentos ao repositório. Caso não sejam seleccionadas quaisquer pastas, os utilizadores do espaço de equipa poderão visualizar todas as classes a que têm acesso. Os utilizadores podem modificar a lista de classes no espaço de equipa se tiverem as permissões apropriadas.",
		workspacebuilder_classes_instance_introText: "Seleccione as classes ou os modelos de entrada que os utilizadores podem utilizar para adicionar documentos ao repositório. Quando não são seleccionadas classes, serão apresentadas todas as classes a que os utilizadores do espaço de equipa têm permissão. Os utilizadores podem modificar a lista de classes ou modelos de entrada no espaço de equipa se tiverem as permissões apropriadas.",
		workspacebuilder_classes_instance_introText_cm: "Seleccione as classes que os utilizadores podem utilizar para adicionar documentos ao repositório. Quando não são seleccionadas classes, serão apresentadas todas as classes a que os utilizadores do espaço de equipa têm permissão. Os utilizadores podem modificar a lista de classes no espaço de equipa se tiverem as permissões apropriadas.",
		workspacebuilder_classes_selection: "Seleccionar classes:",
		workspacebuilder_classes_list: "Classes disponíveis:",
		workspacebuilder_classes_columns_default: "Predefinição",
		workspacebuilder_classes_columns_className: "Nome de classe",
		workspacebuilder_classes_type_classes: "Utilizar classes para adicionar documentos",
		workspacebuilder_classes_type_classes_tooltip: "As classes incluem propriedades associadas para que seja possível localizar os documentos para utilização posterior.",
		workspacebuilder_classes_type_entryTemplates: "Utilizar modelos de entrada para adicionar documentos",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Os modelos de entrada garantem que a informação fornecida para cada documento é consistente e utiliza valores predefinidos.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nome do modelo de entrada",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Descrição",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Tem de adicionar pelo menos um modelo de entrada ao espaço de equipa.",

		workspacebuilder_classes_new: "Classe nova",
		workspacebuilder_classes_add: "Adicionar classes",
		workspacebuilder_entryTemplate_add: "Adicionar modelo de entrada",
		workspacebuilder_add_list: "Adicionar",
		workspacebuilder_makeDefault_list: "Tornar a predefinição",
		workspacebuilder_removeDefault_list: "Remover a predefinição",

		workspacebuilder_roles_title: "Seleccionar funções",
		workspacebuilder_roles_title_modify: "Modificar funções",

		workspacebuilder_selection_moveup: "Mover para cima",
		workspacebuilder_selection_movedown: "Mover para baixo",
		workspacebuilder_selection_remove: "Remover",
		workspacebuilder_selection_add: "Adicionar",
		workspacebuilder_selection_create_new_search: "Nova procura...",
		workspacebuilder_selection_create_new_role: "Nova função...",
		workspacebuilder_selection_make_role_available: "Tornar disponível",
		workspacebuilder_selection_make_role_available_tooltip: "Partilha a função seleccionada com outros modelos. Tem de atribuir pelo menos uma permissão à função para partilhar a mesma.",

		workspacebuilder_navigation_next: "Seguinte",
		workspacebuilder_navigation_finish: "Terminar",
		workspacebuilder_navigation_validate: "Validar",
		workspacebuilder_navigation_previous: "Anterior",
		workspacebuilder_navigation_cancel: "Cancelar",
		workspacebuilder_navigation_customize: "Personalizar",

		workspacebuilder_search_dialog_title: "Procurar",
		workspacebuilder_dialog_close: "Fechar",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilidade de modelo:",
		workspace_properties_templateState_tooltip: "Tornar o modelo indisponível para que os utilizadores não criem espaços de equipa que utilizem este modelo.",
		workspace_properties_dialog_title: "Propriedades de modelo",
		workspace_properties_online_radio_option_label: "Tornar disponível",
		workspace_properties_offline_radio_option_label: "Tornar indisponível",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Pretende cancelar sem guardar as alterações?",
		workspacebuilder_cancel_confirmation_button: "Sim",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Quaisquer itens não válidos serão removidos do modelo e o modelo é disponibilizado aos utilizadores.  Pretende validar este modelo de espaço de equipa?",
		workspacebuilder_validate_confirmation_button: "Sim",
		workspacebuilder_validate_confirmation_title: "Validar",

		/* Entry templates builder */
		entry_templates: "Gestor de modelos de entrada",
		no_entry_templates_were_found: "Não existem modelos de entrada",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtro",

		/* Roleselector widget */
		role_selector_name: "Funções:",

		/* User Group picker widget */
		directory_label: "Directório:",
		scope_label: "Procurar:",
		name_starts_with_label: "O nome começa por",
		name_contains_label: "O nome contém",
		display_name_contains_label: "O nome de apresentação contém",
		starts_with_label: "Começa com:",
		available_label: "Disponível:",
		available_heading: "Disponível",
		selected_label: "Seleccionada:",
		selected_heading: "Seleccionado",
		available_repositories_label: "Repositórios disponíveis",
		selected_repositories_label: "Repositórios seleccionados",
		default_repository: "Repositório predefinido:",
		default_repository_placeholder: "Seleccionar um repositório",
		default_role_placeholder: "Seleccionar uma função",
		menu_label_placeholder: "Seleccionar ou introduzir etiqueta",
		default_repository_hover: "Especifique o repositório seleccionado por predefinição quando os utilizadores iniciam sessão no cliente da Web a partir deste ambiente de trabalho.<br><br><b>Importante:</b> Tem de adicionar repositórios ao ambiente de trabalho da lista de repositórios seleccionado para especificar o repositório predefinido.",
		default_repository_workflow_hover: "<b>Tenha em atenção:</b> Pode configurar os espaços da aplicação apenas para os repositórios configurados para este ambiente de trabalho.",
		remove_label: "Remover",
		users_label: "Utilizadores",
		groups_label: "Grupos",
		user_or_group_name_label: "Nome do utilizador ou grupo:",
		user_or_group_name_hover: "Introduza o nome de um utilizador ou grupo válido no repositório.  O nome não está validado.",
		user: "Utilizador",
		group: "Grupo",
		name: "Nome:",
		displayName: "Nome de apresentação",
		display_name: "Nome de apresentação:",
		shortName: "Nome abreviado:",
		distinguishedName: "Nome exclusivo:",
		search_tooltip: "Procurar",
		add_tooltip: "Adicionar",
		add_selected_tooltip: "Adicionar à lista seleccionada",
		remove_tooltip: "Remover",
		remove_selected_tooltip: "Remover da lista seleccionada",
		add_to_selected_tooltip: "Adicionar",
		remove_from_selected_tooltip: "Remover",
		move_up_selected_tooltip: "Mover para cima",
		move_down_selected_tooltip: "Mover para baixo",
		advanced_search_options_tooltip: "Definições avançadas",
		move_right_selected_tooltip: "Entrar no submenu",
		move_left_selected_tooltip: "Sair do submenu",
		add_separator: "Adicionar separador",
		menu_item_label: "Etiqueta de item de menu:",
		add_menu_label: "Adicionar submenu",
		menu_label: "Etiqueta de submenu:",
		menu_label_info: "<b>Importante:</b> É necessário adicionar pelo menos um item de menu a este submenu para que seja possível guardar este menu.",
		menu_dropdown_label: "Etiqueta do botão pendente:",
		menu_dropdown_label_info: "<b>Importante:</b> Tem de adicionar, pelo menos, um item de menu a este botão pendente para que seja possível guardar esta barra de ferramentas.",
		no_item_found: "Não foram encontrados resultados.",
		me: "De Mim",
		anyone: "Qualquer pessoa",
		specific_users: "Utilizadores específicos",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "A procura devolveu mais de {0} resultados. Altere os critérios para limitar a procura.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Os resultados da procura incluem itens já seleccionados. Estes itens não serão apresentados nos resultados da procura.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Foram devolvidos mais de {0} resultados. Utilize o filtro para limitar os resultados",

		user_already_selected: "O utilizador especificado já está seleccionado.  Especifique outro utilizador.",
		group_already_selected: "O grupo especificado já está seleccionado.  Especifique um grupo diferente.",
		user_cannot_select_self: "Não é possível adicionar-se. Especifique outro utilizador.",

		/* Select User Group dialog */
		select_user_group_add_label: "Adicionar",
		select_user_group_cancel_label: "Cancelar",
		add_users_groups_label: "Adicionar utilizadores e grupos",
		add_user_group_label: "Adicionar utilizar e grupo",
		add_users_label: "Adicionar utilizadores",
		add_user_label: "Adicionar utilizador",
		add_label: "Adicionar:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Os seguintes documentos possuem alterações de anotações não guardadas:",
		viewer_confirm_to_proceed: "Pretende continuar e eliminar as alterações?",
		viewer_warn_has_changes: "As alterações não guardadas serão eliminadas.",
		viewer_warn_is_printing: "A impressão em curso poderá não concluir.",
		viewer_warn_confirm_exit: "Pretende sair?",
		viewer_prompt_save_changes: "O seguinte documento possui alterações de anotações não guardadas que serão perdidas:<br>${0}<br><br>Pretende guardar as alterações?",
		viewer_prompt_mergesplit_changes: "Os seguintes documentos possuem alterações não guardadas:<br>${0}<br><br>Pretende continuar e eliminar as alterações?",
		viewer_prompt_mergesplit_tab_changes: "O seguinte documento possui alterações não guardadas:<br>${0}<br><br>Pretende continuar e eliminar as alterações?",
		viewer_new_item_name: "Novo documento",
		viewer_top_frame: "Moldura superior:",
		viewer_bottom_frame: "Moldura inferior:",
		viewer_left_frame: "Moldura esquerda:",
		viewer_right_frame: "Moldura direita:",
		viewer_viewer_frame: "Moldura do visualizador:",
		viewer_properties_frame: "Moldura de propriedades:",
		viewer_comment_frame: "Moldura de comentário:",
		viewer_mergesplit_on: "Ver",
		viewer_mergesplit_off: "Intercalar e Dividir",
		viewer_mergesplit_context_menu_move: "Mover",
		viewer_mergesplit_context_menu_rename: "Mudar o nome",
		viewer_mergesplit_context_menu_delete: "Eliminar",
		//move to new window
		viewer_move_to_new_window:"Mover para uma nova janela",
		viewer_continue:"Rejeitar alterações",
		viewer_return_to_original_window:"Voltar à janela original",
		viewer_switch_window:"Mudar de janela",
		viewer_prompt_lost_changes:"O documento ${0} já se encontra aberto noutra janela. O documento tem alterações não guardadas.<br><br>Pretende mudar para essa janela para guardar as alterações ou rejeitar as alterações e abrir nesta janela?",
		viewer_mergesplit_fallback_info: "Apenas é possível concluir a acção Intercalar e Dividir em documentos que se encontram no mesmo repositório.",
		viewer_tabbed_layout: "Ver como separadores",
		viewer_tabbed_layout_highcontrast: "Separadores",
		viewer_split_vertical_layout: "Dividir painéis na horizontal",
		viewer_split_vertical_layout_highcontrast: "Superior e inferior",
		viewer_split_horizontal_layout: "Dividir painéis na vertical",
		viewer_split_horizontal_layout_highcontrast: "Esquerda e direita",
		viewer_add_vertical_layout: "Novo separador no fundo",
		viewer_add_vertical_layout_highcontrast: "Separador no fundo",
		viewer_add_horizontal_layout: "Novo separador à direita",
		viewer_add_horizontal_layout_highcontrast: "Separador à direita",
		viewer_add_horizontal_layout_rtl: "Novo separador à esquerda",
		viewer_add_horizontal_layout_rtl_highcontrast: "Separador à esquerda",
		viewer_split_properties_layout: "Ver propriedades",
		viewer_split_comment_layout: "Ver comentários",
		viewer_split_notelog_layout: "Ver registo de notas",
		viewer_window_title: "Visualizador ${0}",
		viewer_next_hit: "Ver o documento seguinte na lista",
		viewer_prev_hit: "Ver o documento anterior na lista",
		viewer_confrim_more_search_results: "Os resultados da procura não contêm mais documentos passíveis de visualização. Pretende obter mais resultados da procura?",
		viewer_confirm_get_next_page: "A lista de resultados não contém mais itens visíveis. Pretende obter mais resultados de procura?",
		viewer_confirm_get_next_item: "A lista de resultados contém mais itens visíveis. Pretende ver o item seguinte?",
		viewer_fn_annotation_tooltip: " Criado por: ${0},  Criado a: ${1}",
		viewer_box_note_limitation: "Pode apenas abrir e visualizar o Box Notes numa janela em separado.",
		viewer_click_to_open_box_note: "Faça clique aqui para abrir o Box Note.",
		viewer_box_view_expiring: "O tempo máximo de que dispõe para ver o documento do Box é de 60 minutos. A sua sessão actual irá expirar dentro de ${0} minutos. Se pretender continuar a trabalhar no documento, é necessário recarregar o mesmo agora. Pretende recarregar o documento?",
		viewer_add_dialog_save_as_type: "Guardar como tipo:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflito na saída",
		viewer_checkout_conflict: "Foi dada saída do documento por outro utilizador.",
		viewer_checkout_confirm: "Encontra-se disponível uma versão mais recente do documento. Pretende continuar a dar saída do documento ou pretende recarregar o visualizador com a versão mais recente? Caso opte por recarregar o visualizador, quaisquer alterações não guardadas serão perdidas.",
		viewer_checkout_continue: "Continuar com a saída",
		viewer_checkout_reload: "Recarregar",
		viewer_status_building: "A criar o documento...",
		viewer_status_adding: "A adicionar documento...",
		viewer_status_checking_in: "A verificar o documento...",

		/* Class Selector Widget */
		include_subclasses_label: "Incluir subclasses",
		include_subclasses_label2: "Também procurar em subclasses",
		include_subclasses_note: "(Incluir subclasses)",
		available_classes_col_header: "Classes disponíveis",
		single_class_label: "Procurar numa única classe",
		multiple_classes_label: "Procurar em várias classes",
		multiple_classes_hover_help: "Seleccione esta opção para procurar em mais do que uma classe. As classes podem ser classes ascendentes ou subclasses. Se seleccionar esta opção, serão apenas apresentadas as propriedades e os valores comuns às classes seleccionadas.",
		selected_classes_col_header: "Classes seleccionadas",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(incluir subpastas)",
		favorites_pseudo_node: "\\Favoritos\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "É necessário seleccionar uma pasta no repositório à qual adicionar o documento.",
		no_permission_add_folder: "Não tem as permissões apropriadas para adicionar pastas nesta pasta.",
		no_permission_add_document: "Não tem as permissões apropriadas para adicionar documentos a esta pasta.",
		document_already_in_folder: "O documento já se encontra nesta pasta.",
		cant_move_folder_onto_parent: "A pasta já se encontra nesta pasta.",
		cant_move_folder_onto_self: "Não é possível mover uma pasta para si mesma ou para as suas subpastas.",

		/* Workflow Widgets */
		process_application_space: "Processar espaço da aplicação",
		process_role: "Processar função",
		process_inbasket: "Processar área de recepção",
		process_worklist: "Lista de trabalho",
		process_step_processor: "Processar item de trabalho",
		process_tracker: "Controlar item de trabalho",
		process_info_subject: "Assunto",
		process_info_stepname: "Passo",
		process_info_is_locked: "Bloqueado",
		process_info_no_access: "Sem acesso",
		process_info_received_on: "Recebido a",
		process_info_overdue: "Prazo terminado",
		process_info_reminder_sent: "Lembrete enviado",
		process_info_locked_by_user: "Bloqueado por",
		process_work_object_number: "Número de objecto de trabalho",
		process_deadline: "Data limite:",
		process_launchedby: "Iniciado por:",
		process_receivedon: "Recebido a:",
		process_step: "Passo:",
		process_properties: "Propriedades",
		process_attachments: "Anexos",
		process_attachments_select: "Seleccionar um anexo",
		process_finish_button_label: "Parar rastreio",
		process_tracker_history: "Histórico",
		process_tracker_milestones: "Marcos",
		process_tracker_milestone: "Marco",
		process_tracker_milestone_level: "Nível",
		process_tracker_milestones_empty: "Não existem marcos a apresentar.",
		process_tracker_level_selector_label: "Mostrar níveis do marco até:",
		process_tracker_map_selector_label: "Filtrar por mapa:",
		process_tracker_message: "Mensagem",
		process_tracker_datereached: "Data de detecção",
		process_tracker_stepname: "Passo",
		process_tracker_cycle: "Ciclo",
		process_tracker_review_cycle: "Ciclo de revisão",
		process_tracker_participant: "Participante",
		process_tracker_completed: "Concluído",
		process_tracker_response: "Resposta",
		process_tracker_comments: "Comentários",
		process_tracker_delete_confirmation: "Pretende parar o rastreio do fluxo de trabalho seguinte: ${0}?",
		process_tracker_history_allmaps: "Todos os mapas",
		process_tracker_history_workflow: "Fluxo de trabalho",
		process_tracker_history_terminate: "Terminar",
		process_tracker_history_malfunction: "Avaria",
		process_filter_label: "Filtro",
		process_no_filter_summary: "Sem filtros aplicados",
		process_filter_summary: "${0} aplicado",
		process_filter_reset_tooltip: "A reposição limpa o filtro e actualiza a área de recepção.",
		process_attachments_add_folder: "Adicionar pasta",
		process_attachments_add_doc: "Adicionar documento",
		process_complete_button_label: "Concluir",
		process_save_button_label: "Guardar",
		process_launch_button_label: "Iniciar fluxo de trabalho",
		process_open_button_label: "Abrir",
		process_movetoinbox_button_label: "Mover para a área de recepção",
		process_return_button_label: "Devolver",
		process_return_to_sender_tooltip: "Devolver o item de trabalho à área de recepção de origem",
		process_move_to_inbasket_tooltip: "Mover o item de trabalho para a área de recepção pessoal",
		process_reassign_tooltip: "Alterar a atribuição do item de trabalho a outro proprietário",
		process_reassign_button_label: "Alterar atribuição",
		process_preferences_button_label: "Preferências",
		process_manageroles_button_label: "Gerir funções",
		process_manageroles_no_members: "Não existem membros.",
		process_responses_button_label: "Mais respostas",
		process_morecustomaction_button_label: "Mais acções",
		process_show_instructions: "Ver instruções",
		process_hide_instructions: "Ocultar instruções",
		process_remove_attachment: "Remover",
		process_close_window: "O item de trabalho foi processado.",
		process_delegate_flag: "Requerer ao proprietário do conteúdo que aprove o item de trabalho antes de encaminhar o mesmo para o passo seguinte do fluxo de trabalho.",
		process_paticipant_voting: "Número de participantes requerido para votar a aprovação:",
		process_get_next_label: "Obter o item de trabalho seguinte",
		process_no_more_items: "Não existem mais itens na área de recepção para processar.",
		process_workflow_name: "Nome de fluxo de trabalho:",
		process_pattern_process_name: "Revisão de ${0}",
		process_instuctions: "Instruções para os revisores:",
		process_pattern_deadline: "Data limite:",
		process_reviewers: "Revisores:",
		process_approvals_required: "Aprovações requeridas:",
		process_on_reject: "Se o item de trabalho for rejeitado:",
		process_return_to_originator: "Devolver-me",
		process_return_to_previous_reviewer: "Devolver ao revisor anterior",
		process_additional_settings: "Definições adicionais:",
		process_allow_reassign: "Permitir aos revisores alterar a atribuição desta revisão",
		process_complete_notification: "Notificar-me quando a revisão estiver concluída",
		process_workflow_name_hover_help: "O nome que especificar para o item de trabalho deverá facilitar aos revisores a distinção entre este item de trabalho e outros itens de trabalho na respectiva área de recepção.",
		process_approvals_required_hover_help: "Se o item de trabalho for revisto por várias pessoas em simultâneo, pode especificar o número de aprovações necessárias para que o item de trabalho seja concluído com êxito.",
		process_approval_options: "Opções de aprovação",
		process_all: "Tudo",
		process_at_least: "Mínimo",
		process_at_least_by_count: "Número mínimo de ${0} revisores",
		process_at_least_by_percentage: "Percentagem mínima de ${0}% de revisores",
		process_comments: "Comentários:",
		process_review_step_comments_hover_help: "Se rejeitar o item de trabalho, terá de fornecer informações acerca do motivo da rejeição. Estas informações permitem ao criador do item de trabalho ou ao revisor anterior responder às suas preocupações.",
		process_rework_step_comments_hover_help: "Tem de fornecer informações sobre a forma como abordou os comentários. Se não concordar com os comentários, indique as razões da sua decisão.",
		process_rejection_reason: "Motivo da rejeição:",
		process_summary: "Resumo",
		process_sequential_review: "Revisão sequencial",
		process_sequential_review_description: "O item de trabalho será revisto por cada revisor por ordem.",
		process_parallel_review: "Revisão paralela",
		process_parallel_review_description: "O item de trabalho será revisto por todos os revisores em simultâneo",
		process_parallel_approvals_required_error: "O número de aprovações requerido é demasiado elevado. Apenas estão especificados ${0} revisores.",
		process_parallel_invalid_required_approvals_count: "O valor não é válido. o valor tem de ser ${0}.",
		process_subject_prompt: "Introduza o Assunto",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Item de trabalho:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Ver propriedades",
		view_permissions_level: "Ver permissões",
		view_content_level: "Ver documento",
		link_level: "Ligação",
		modify_properties_level: "Editar propriedades",
		modify_content_level: "Editar documento",
		minor_version_level: "Editar versão secundária",
		major_version_level: "Editar versão principal",
		create_instance_level: "Criar instância",
		delete_document_level: "Eliminar documento",
		delete_item_level: "Eliminar item",
		modify_document_permissions_level: "Gerir permissões",
		modify_folder_permissions_level: "Gerir permissões",
		modify_owner_level: "Modificar proprietário",
		delete_folder_level: "Eliminar pasta",
		file_in_folder_level: "Adicionar a pastas",
		create_subfolder_level: "Criar subpastas",
		link_item_level: "Anotar documento, adicionar à pasta", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Apenas para documento: adicione uma anotação ao documento ou remova uma anotação do documento</li><li>Apenas para pasta: adicione itens à pasta ou remova itens da pasta</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Eliminar",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Proprietário",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Leitor",
		/* previously \"Read only\" */
		no_access_privilege: "Sem acesso",
		share_with_label: "Partilhar com:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Apenas comigo",
		public_label: "Todos",
		members_label: "Utilizadores e grupos específicos",
		select_members_label: "Seleccionar...",
		select_user_group_label: "Seleccionar utilizadores...",
		select_users_groups_label: "Seleccionar utilizadores e grupos...",
		select_user_label: "Seleccionar utilizador...",
		propagation_label: "Propagação:",
		access_label: "Permissões:",
		add_permission_add_label: "Adicionar",
		security_policy_label: "Política de segurança:",
		includes_inherited_access: "Inclui acesso herdado",
		customize_access_for_label: "Personalizar acesso a:",
		customize: "Personalizar",
		direct: "Este item",
		singleLevelInheritance: "Um nível",
		infiniteLevelInheritance: "Todos os níveis",
		inherited: "Herdado",
		direct_hover_help: "São aplicáveis definições de segurança ao item seleccionado",
		singleLevelInheritance_hover_help: "Estas permissões são aplicáveis apenas a este item e aos elementos descendentes imediatos que estão configurados para herdar a segurança deste item.",
		infiniteLevelInheritance_hover_help: "Estas permissões são aplicáveis apenas a este item e a todos os elementos descendentes que estão configurados para herdar a segurança deste item.",
		inherited_hover_help: "Estas permissões são herdadas do elemento ascendente.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Estas permissões para ${0} são aplicáveis a este item e aos elementos descendentes imediatos que estão configurados para herdar a segurança deste item.",
		infiniteLevelInheritance_member_hover_help: "Estas permissões para ${0} são aplicáveis a este item e a todos os elementos descendentes que estão configurados para herdar a segurança deste item.",
		inherited_member_hover_help: "Estas permissões para ${0} são herdadas do elemento ascendente.",
		partial_hover_help: "As definições de segurança de itens foram alteradas por um utilizador",
		allow: "Permitir",
		deny: "Recusar",
		basic: "Básico",
		advanced: "Avançado",
		permission_type: "Definir acesso para:",
		share_with_hover_help: "O item é actualmente partilhado com os utilizadores e grupos seguintes.",
		direct_security_policy_hover_help: "As definições desta política de segurança permitem alterar a segurança deste item.",
		security_policy_hover_help: "A segurança deste item é apenas de leitura, uma vez que as definições desta política de segurança impedem a alteração da segurança deste item.",
		security_remove: "Sem permissões",
		pseudo_group_label: "Contas alternativas",
		marking_hover_help: "A segurança deste item é controlada por um conjunto de marcações, que pode afectar a segurança do item.",
		note_label: "Importante:",
		marking_text: "Este item está marcado como: ${0}. O item pode ter restrições de segurança adicionais.",
		authenticated_users: "Utilizadores autenticados",
		realm_users: "${0} utilizadores",
		denyAll: "Recusar todos",
		allowAll: "Permitir todos",
		remove_direct_text: "Quando guarda as alterações, as permissões para este membro serão removidas do item.",
		remove_single_inheritance_text: "Quando guarda as alterações, as permissões para este membro serão removidas do item e <br>dos elementos descendentes imediatos que estão configurados para herdar a segurança deste item.<p>Pretende continuar?",
		remove_infinite_inheritance_text: "Quando guarda as alterações, as permissões para este membro serão removidas do item e <br>de todos os elementos descendentes que estão configurados para herdar a segurança deste item.<p>Pretende continuar?",
		remove_inheritance_text: "Quando guarda as alterações, as permissões para este membro serão removidas do item e <br>de todos os elementos descendentes que estão configurados para herdar a segurança deste item. Apenas as permissões que <br>são herdadas por este item serão mantidas.<p>Pretende continuar?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Remover estas permissões para ${0}",

		security_proxy_text: "A segurança deste item é apenas de leitura.",
		security_proxy_declared_text: "A segurança deste item é só de leitura, uma vez que está definido por um proxy de segurança.",
		security_proxy_hover_help: "A segurança deste item é controlada pela segurança definida noutro objecto no repositório.",
		add_permissions_label: "Adicionar permissões",
		permission_propagation_direct: "Apenas esta pasta",
		permission_propagation_onelevel: "Esta pasta e um nível abaixo",
		permission_propagation_alllevels: "Esta pasta e todos os níveis abaixo",
		document_propagation_label: "Definir acesso para:",
		document_propagation_FOLDER: "Pasta",
		document_propagation_DOCUMENT: "Documento",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Origem de autenticação:",

		/* Versions Widget */
		object_versions_selector_label: "Versões:",
		object_versions_label: "Versões",
		object_type_document_label: "Documento:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Pastas arquivadas em",
		folders_filed_in_folder_col_hdr: "Pasta",
		folders_filed_in_path_col_hdr: "Caminho",
		folders_filed_in_containment_name_col_hdr: "Nome de contenção",
		folders_filed_in_creator_col_hdr: "Criado por",
		folders_filed_in_date_created_col_hdr: "Criado a",

		/* Parent Documents */
		properties_parent_documents_label: "Documentos ascendentes",

		/* Select object dialog */
		select_object_title: "Seleccionar item",
		select_object_breadCrumb_version_prefix: "Versões para: ",
		show_versions_label: "Mostrar versões",
		use_current_version_label: "Utilizar versão actual",
		use_released_version_label: "Utilizar versão publicada",

		/* Select content class dialog */
		select_class: "Seleccionar classe",
		/* Select Search dialog */
		select_search: "Seleccionar procura",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Ver ligação",
		show_hyperlink_intro: "Pode copiar e colar a ligação em mensagens de correio electrónico, conversações e páginas da Web. Se existirem várias versões do item, especifique a que versão pretende estabelecer ligação.",
		show_hyperlink_intro_no_version_select: "Pode copiar e colar a ligação em mensagens de correio electrónico, conversações e páginas da Web.",
		show_text_label: "Versão:",
		released_button_label: "Publicada",
		current_button_label: "Actual",
		select_button_label: "Versão específica",
		show_hyperlink_no_released_version_msg: "Não existe uma versão publicada deste documento.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Iniciar fluxo de trabalho",
		edit_workflow_title: "Propriedades do item de trabalho",
		start_workflow_intro: "Inicie um fluxo de trabalho para processar os itens seleccionados. Se pretender atribuir os itens de trabalho a um utilizador específico, indique um proprietário.",
		edit_workflow_intro: "Pode editar as propriedades dos itens de trabalho seleccionados. Se pretender alterar a atribuição do item de trabalho para outro utilizador, especifique um proprietário.",
		workflow_field_label: "Fluxo de trabalho:",
		priority_field_label: "Prioridade:",
		owner_field_label: "Proprietário:",
		start_button_label: "Iniciar",
		save_button_label: "Guardar",
		owner_value_hint: "Introduza uma cadeia alfanumérica com um comprimento máximo de 32 caracteres. A cadeia pode conter apenas espaços ou os seguintes caracteres: a-z, A-Z, 0-9 e ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elementos de conteúdo",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "O valor não é válido. O valor pode conter apenas espaços ou os caracteres seguintes: a-z, A-Z, 0-9 e ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Introduza um valor de 1 a 32000 para indicar a importância do item de trabalho.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "O valor não é válido. A prioridade tem de ser um valor de 1 a 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "O nome do fluxo de trabalho não existe.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Suspender do fluxo de trabalho",
		suspend_workitems_intro: "Quando suspende um item de trabalho do fluxo de trabalho, o item de trabalho não pode ser processado até ser retomado",
		suspend_workitems_options_label: "Suspender os itens de trabalho seleccionados:",
		suspend_until_resume_label: "Até serem retomados manualmente",
		suspend_until_date_label: "Até",
		suspend_for_duration_label: "Durante",
		suspend_for_duration_hours: "Horas",
		suspend_for_duration_days: "Dias",
		suspend_for_duration_weeks: "Semanas",
		suspend_for_duration_months: "Meses",
		suspend_for_duration_years: "Anos",
		suspend_button_label: "Suspender",
		suspend_duration_value_hint: "Introduza um valor entre 1 e 99 para indicar a duração.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "O valor não é válido. O valor tem de estar entre 1 e 99.",

		/* Remove from workflow */
		remove_workflow_title: "Remover do fluxo de trabalho",
		remove_workflow_confirmation: "Pretende remover os itens seleccionados do fluxo de trabalho?<br>Estão seleccionados ${0} itens.",
		remove_workflow_button_label: "Remover",

		/* Unfile dialog */
		unfile_dialog_title: "Remover da pasta",
		unfile_dialog_remove_from_folder_label: "Remover de:",
		unfile_dialog_info_text: "Pode remover itens de pastas. Contudo, remover um item de todas as pastas não remove o item do repositório. Pode continuar a obter o item executando uma procura. Apenas as pastas nas quais tem privilégios de visualização são apresentadas nesta lista.",
		unfile_dialog_select_all: "Seleccionar tudo",
		unfile_dialog_deselect_all: "Limpar tudo",
		unfile_dialog_remove_button_label: "Remover",
		unfile_dialog_select_folder_col_hdr: "Seleccionar pasta",
		unfile_dialog_folder_col_hdr: "Pasta",
		unfile_dialog_path_col_hdr: "Caminho",
		unfile_dialog_not_filed_msg: "Este item não se encontra em quaisquer pastas.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Não tem as permissões apropriadas para remover este item de qualquer uma das pastas em que o item se encontra.",
		unfile_dialog_folder_not_selectable_tooltip: "Não tem as permissões apropriadas para remover este item desta pasta.",
		unfile_multi_prompt: "Pretende remover os itens de trabalho seleccionados da pasta ${0}?",
		unfile_large_number_items_confirmation_question: "Seleccionou ${0} itens para remover da pasta ${1}.<br/>Remover um elevado número de itens poderá demorar bastante tempo.<br/>Pretende continuar?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Abrir",
		move_to_folder_title: "Mover para pasta",
		move_to_folder_button_caption: "Mover",
		move_to_folder_label: "Mover para:",
		add_to_folder_title: "Adicionar à pasta",
		add_to_folder_button_caption: "Adicionar",
		add_to_folder_label: "Adicionar a:",
		copy_to_folder_title: "Copiar para a pasta",
		copy_to_folder_button_caption: "Copiar",
		copy_to_folder_label: "Copiar para:",
		copy_to_folder_delete_label: "Após a cópia concluir, elimine os itens seleccionados de Box.",
		move_from_folder_label: "Mover de:",
		move_file_info_text: "Pode mover itens de uma pasta para outra.",
		move_folder_info_text: "Pode mover pastas de uma pasta ascendente para outra.",
		add_doc_to_folder_info_text: "Pode adicionar itens a uma ou mais pastas. Se um item já estiver numa pasta, irá permanecer nessa pasta e é adicionado às pastas adicionais que especificar.",
		copy_doc_to_folder_info_text: "Pode copiar itens para uma pasta.",
		box_copy: "Cópia Box",
		box_copy__button_caption: "Copiar",
		box_copy_to_info_text: "Seleccione o repositório e pasta para onde pretende copiar os itens seleccionados do Box.",
		box_copy_from_info_text: "Seleccione o repositório e pasta para onde pretende copiar os itens seleccionados do Box.",
		box_copy_version_info_text: "Para adicionar um novo documento, seleccione o repositório e a pasta. Para dar entrada de um novo documento, seleccione o repositório e o documento.",
		admin_box_copy: "Cópia Box",
		admin_box_copy_hover: "Esta opção permite aos utilizadores copiar documentos para o Box.",

		no_permission_to_copy_version_msg: "Não é possível copiar o documento do Box como uma nova versão do documento seleccionado. Não tem as permissões apropriadas para editar o documento seleccionado ou o documento seleccionado tem saída dada por outro utilizador.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Não tem as permissões apropriadas para remover este item de qualquer uma das pastas em que o item se encontra.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Não tem as permissões apropriadas para remover este item desta pasta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Não é possível mover este item, uma vez que não está arquivado em qualquer pasta. Seleccione outro item.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Iniciar fluxo de trabalho",
		subscriptions_dialog_available_items_label: "Itens disponíveis:",
		subscriptions_dialog_info_text: "Especifique que fluxo de trabalho iniciar.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nome",
		subscriptions_dialog_desc_col_hdr: "Descrição",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gerir funções",
		manageroles_dialog_info_text: "Pode modificar a lista de utilizadores para cada função que está associada a este espaço da aplicação de processos.",
		manageroles_dialog_members_label: "Membros",
		manageroles_dialog_roles_label: "Funções",
		manageroles_dialog_add_button_label: "Adicionar utilizadores e grupos",
		manageroles_dialog_remove_button_label: "Remover",
		manageroles_dialog_save_button_label: "Guardar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Não existem fluxos de trabalho associados a este item.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferências de fluxo de trabalho",
		workflow_pref_dialog_info_text: "Especifique os eventos de fluxo de trabalho para os quais pretende receber notificações de correio electrónico. Também pode activar a opção de encaminhamento para trabalhar com outra pessoa seleccionando um utilizador a quem delegar trabalho.",

		workflow_pref_general: "Geral",
		workflow_pref_email_address: "Endereço de correio electrónico",
		workflow_pref_email_address_hover: "Especifique o endereço de correio electrónico em que pretende receber notificações de fluxo de trabalho.",
		workflow_pref_preferred_locale: "Idioma",
		workflow_pref_preferred_locale_hover: "Especifica o idioma em que as notificações de correio electrónico são apresentadas.",

		workflow_pref_work_item_notice: "Notificações de item de trabalho",
		workflow_pref_step_new_assignment: "Foi-me atribuído um novo item de trabalho",
		workflow_pref_step_new_assignment_hover: "Notificar-me quando receber novos itens de trabalho.",
		workflow_pref_step_expired_deadline: "O prazo do item de trabalho está ultrapassado",
		workflow_pref_step_expired_deadline_hover: "Notificar-me quando falhar o prazo de um item de trabalho.",
		workflow_pref_step_reminders: "Perto do prazo do item de trabalho",
		workflow_pref_step_reminders_hover: "Lembrar-me de um item de trabalho perto do prazo.",

		workflow_pref_originator_notice: "Notificações do originador",
		workflow_pref_milestone_reached: "Marco atingido",
		workflow_pref_milestone_reached_hover: "Notificar-me quando um marco é atingido num fluxo de trabalho iniciado por mim.",

		workflow_pref_tracker_notice: "Notificações de controlador de fluxo de trabalho",
		workflow_pref_tracker_new_assignment: "Foi-me atribuído um novo item de controlador",
		workflow_pref_tracker_new_assignment_hover: "Notificar-me quando um fluxo de trabalho controlado por mim for iniciado.",
		workflow_pref_tracker_deadline_reminders: "Prazo do fluxo de trabalho próximo",
		workflow_pref_tracker_deadline_reminders_hover: "Lembrar-me de um fluxo de trabalho quando o prazo do mesmo estiver próximo.",
		workflow_pref_tracker_deadline_expired: "Prazo do fluxo de trabalho ultrapassado",
		workflow_pref_tracker_deadline_expired_hover: "Notificar-me quando o prazo de um item de trabalho for ultrapassado.",
		workflow_pref_tracker_exception: "Ocorreu um erro de fluxo de trabalho",
		workflow_pref_tracker_exception_hover: "Notificar-me quando ocorrer um erro de excepção de fluxo de trabalho.",
		workflow_pref_tracker_expired_deadline: "Prazo do passo ultrapassado",
		workflow_pref_tracker_expired_deadline_hover: "Notificar-me quando o prazo de um passo for ultrapassado num fluxo de trabalho controlado por mim.",
		workflow_pref_tracker_milestone_reached: "Marco atingido",
		workflow_pref_tracker_milestone_reached_hover: "Notificar-me quando um marco é atingido num fluxo de trabalho controlado por mim.",

		workflow_pref_out_notice: "Ausente",
		workflow_pref_proxy_user: "Delegar trabalho a",
		workflow_pref_proxy_user_hover: "Utilize esta opção para encaminhar automaticamente o seu trabalho para outro utilizador, por exemplo, quando está fora do escritório ou em férias.",
		workflow_pref_workflow: "Fluxo de trabalho",
		workflow_pref_on: "Em",
		workflow_pref_off: "Desligado",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Iniciar fluxo de trabalho",
		transfered_workflows_dialog_info_text: "Seleccionar um fluxo de trabalho para iniciar.",
		transfered_workflows_dialog_available_items_label: "Itens disponíveis:",
		transfered_workflows_dialog_select_button_label: "Iniciar",
		transfered_workflows_dialog_name_col_hdr: "Nome",
		transfered_workflows_dialog_no_item_found: "Não foram encontrados fluxos de trabalho transferidos.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transferir fluxo de trabalho",
		transfer_workflow_dialog_info_text: "Seleccione um fluxo de trabalho para transferir para o sistema de fluxos de trabalho.",
		transfer_workflow_dialog_use: "Utilizar este nome de fluxo de trabalho",
		transfer_workflow_dialog_use_another: "Utilizar um nome de fluxo de trabalho diferente",
		transfer_workflow_dialog_in_use: "O nome do fluxo de trabalho está: ",
		transfer_workflow_dialog_transfer_button_label: "Transferir",
		transfer_workflow_dialog_no_items_found: "Não foram encontrados fluxos de trabalho transferidos.",
		transfer_workflow_dialog_use_hover: "Especifique o nome do fluxo de trabalho actual a partir da definição do fluxo de trabalho.",
		transfer_workflow_dialog_another_hover: "Especifique um nome de fluxo de trabalho diferente ou reutilize um nome de fluxo de trabalho transferido existente.",

		/*Search In control*/
		search_in_title: "Procurar em:",
		search_in_teamspaces: "Espaços de equipa",
		search_in_repositories: "Repositórios",
		search_in_thisteamspaces: "Este espaço de equipa",

		ajaxViewer_save: "Guardar anotações",
		ajaxViewer_print: "Pré-visualização da impressão",
		ajaxViewer_firstPage: "Primeira página",
		ajaxViewer_previousPage: "Página anterior",
		ajaxViewer_nextPage: "Página seguinte",
		ajaxViewer_lastPage: "Última página",
		ajaxViewer_unknownPageCount: "1 de ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} de ${1}",
		ajaxViewer_zoomOut: "Reduzir",
		ajaxViewer_zoomIn: "Ampliar",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Ajustar largura",
		ajaxViewer_fitHeight: "Ajustar altura",
		ajaxViewer_fitPage: "Ajustar à página",
		ajaxViewer_rotate270: "Rodar 270 graus",
		ajaxViewer_rotate90: "Rodar 90 graus",
		ajaxViewer_rotate180: "Rodar 180 graus",
		ajaxViewer_darken: "Menos brilho",
		ajaxViewer_lighten: "Mais brilho",
		ajaxViewer_lessContrast: "Menos contraste",
		ajaxViewer_moreContrast: "Mais contraste",
		ajaxViewer_invert: "Inverter",
		ajaxViewer_createHighlight: "Destaque",
		ajaxViewer_createNote: "Anotar",
		ajaxViewer_editAnnotation: "Editar propriedades da anotação",
		ajaxViewer_deleteAnnotation: "Eliminar anotação",
		ajaxViewer_editAnnotationTitle: "Editar propriedades da anotação",
		printableView_print: "Imprimir",
		printableView_close: "Fechar",

		search_results_dropdown_button: "Apresentação de resultados",
		search_results_columns_label: "Apresentar resultados da procura",
		search_results_columns_description: "Seleccione as propriedades que pretende visualizar nos resultados da procura.",
		search_results_sortby_label: "Ordenar por:",
		search_results_order_label: "Ordenação:",
		search_results_accending_label: "Ascendente",
		search_results_descending_label: "Descendente",
		search_results_available_properties: "Disponível",
		search_results_selected_properties: "Seleccionado",
		search_rank_property: "Classificação (Apenas pesquisa de texto)",
		search_name_attribute: "Nome (${0})",
		search_results_summary_enabled_label: "Activar resumos de conteúdo (Apenas procura de texto)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Procuras",
		manage_teamspace_classes_tab_title: "Classes",
		manage_teamspace_entry_templates_tab_title: "Modelos de entrada",
		manage_teamspace_team_tab_title: "Equipa",
		manage_teamspace_roles_tab_title: "Funções",
		manage_teamspace_dialog_title: "Modificar espaço de equipa",
		manage_teamspace_button_label: "Modificar espaço de equipa",
		manage_teamspace_team_pane_heading: "Seleccionar equipa",
		manage_teamspace_classes_pane_heading: "Seleccionar classes",
		manage_teamspace_entry_templates_pane_heading: "Seleccionar modelos de entrada",
		manage_teamspace_no_rights_message: "Não tem as permissões apropriadas para modificar este espaço de equipa.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Propriedades do espaço de equipa",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Especifique as propriedades apresentadas para documentos e pastas na lista de conteúdo quando os utilizadores navegam no espaço de equipa. Também pode especificar a ordem de apresentação das propriedades.",
		teamspace_props_sel_cols_use_default_label: "Utilizar as definições de <b>Procurar</b> para este repositório",
		teamspace_props_sel_cols_use_default_tooltip: "Utilize as definições especificadas na página Procurar para este repositório na ferramenta de administração.",
		teamspace_props_general_tab_label: "Geral",
		teamspace_props_column_props_tab_label: "Propriedades apresentadas",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Seleccionar o ficheiro a importar",
		teamspace_import_template_instruction: "Pode seleccionar um ficheiro de exportação de modelo de espaço de equipa para importar.",
		teamspace_import_template_button_label: "Importar",
		teamspace_import_template_dialog_label: "Importar modelo de espaço de equipa",

		/* Annotation Dialog */
		annotationDlg_title: "Anotações",
		annotationDlg_description: "O documento seleccionado tem as anotações seguintes:",
		annotationDlg_msg_noAnnotations: "Não existem anotações. Faça clique em Adicionar para criar uma anotação.",
		annotationDlg_pageLabel: "Página: ${pageNum}",
		annotationDlg_accLabel: "ACESSO: ${accType}",
		annotationDlg_accLabel_public: "Público",
		annotationDlg_accLabel_private: "Privado",
		annotationDlg_accLabel_privateGroup: "Privado(${groupName})",
		annotationDlg_copiable: "Pode ser copiada para outro servidor",
		annotationDlg_cannotCopy: "Não pode ser copiada para outro servidor",
		annotationDlg_addButtonLabel: "Adicionar",

		/* Share Dialog */
		is_shared: "Partilhado",
		is_share_pending: "Partilha pendente",
		share_title: "Partilha do Box",
		share_instructions_new: "Enviar mensagem de correio electrónico que inclui uma ligação para o ficheiro partilhado. Qualquer utilizador com a ligação pode aceder ao ficheiro.",
		share_instructions_existing: "Enviar mensagem de correio electrónico que inclui uma ligação para o ficheiro partilhado. Qualquer utilizador com a ligação pode aceder ao ficheiro. Outros utilizadores podem ter a ligação porque este ficheiro pode já ter sido partilhado.",
		share_instructions_another_version_shared: "Enviar mensagem de correio electrónico que inclui a ligação para o ficheiro partilhado. Qualquer utilizador com a ligação pode aceder ao ficheiro. Outros utilizadores podem ter a ligação porque outra versão deste ficheiro pode já ter sido partilhada.",
		share_buttonLabel_share: "Partilhar",
		share_email_addresses: "Enviar para:",
		share_email_addresses_hover: "Quando a partilha concluir, é enviada uma ligação para estes endereços de correio electrónico. Se não introduzir quaisquer dados, a ligação é enviada para o seu endereço de correio electrónico.",
		share_email_addresses_reshare_hover: "Quando a partilha concluir, é enviada uma ligação para estes endereços de correio electrónico. Se não introduzir quaisquer dados, não é enviada qualquer mensagem de correio electrónico.",
		share_password: "Definir palavra-passe:",
		share_password_placeholder: "Opcional",
		share_comments: "Mensagem:",
		share_comments_default: "Gostaria de partilhar o meu ficheiro consigo no Box.",
		share_myEmail: "Enviar de:",
		share_expiration: "Definir validade da ligação:",
		share_expire: "Acesso expira:",
		share_expire_none: "Nunca expira",
		share_allowDownload: "Permitir transferência",
		share_add: "Adicionar",
		share_advanced_instructions: "As definições de palavra-passe, validade e transferência são aplicáveis ao ficheiro partilhado no Box.",
		share_advanced_existing_instructions: "As definições de palavra-passe, validade e transferência são aplicáveis ao ficheiro partilhado no Box.",
		share_options_edit_warning: "Importante: quaisquer alterações a estas definições afectam qualquer utilizador com a ligação, incluindo os utilizadores que já têm a ligação.",
		share_link: "Ligação:",
		share_email_addresses_placeholder: "Endereços de correio electrónico",
		share_email_address_placeholder: "Endereço de correio electrónico",
		share_email_address_invalid: "Introduza um endereço de correio electrónico válido.",
		share_cannot_share_with_self: "Não é possível partilhar ficheiros consigo mesmo. Especifique outro utilizador.",
		share_selected_version_with_minor_warning_hover: "Versão ${0} do documento partilhada. Seleccionou a versão ${1}.<br><br><b>Aviso</b>: se partilhar a versão ${1}, ninguém poderá partilhar a versão ${2} excepto se eliminar a partilha da versão ${1}.",
		share_selected_version_hover: "Versão ${0} do documento partilhada. Seleccionou a versão ${1}.",
		share_selected_version_message: "Importante: a versão ${0} do documento está partilhada. Seleccionou a versão ${1}.",
		share_different_version_message: "Importante: seleccionou a versão ${1}, mas a versão ${0} do documento já está partilhada.  Não pode partilhar a versão ${1} a não ser que elimine primeiro a partilha, mas pode partilhar a ligação para a versão ${0}.",
		share_version_message: "Importante: a versão ${0} do documento está partilhada. Seleccione que versão pretende partilhar.",
		share_version_new: "Partilhar a versão ${0}",
		share_version_new_p8_hover: "Partilhar este documento cria uma ligação de versão específica apenas para a versão seleccionada.<br><br>Quando um documento já está partilhado:<ul><li>Pode partilhar uma versão posterior e a ligação redirecciona para a versão mais recente.</li><li>Não pode partilhar uma versão anterior a não ser que elimine primeiro a partilha.</li></ul>",
		share_version_new_cm_hover: "Partilhar este documento cria uma ligação de versão específica apenas para a versão seleccionada.<br><br>Quando um documento já está partilhado:<ul><li>Pode partilhar uma versão posterior e a ligação redirecciona para a versão mais recente.</li><li>Não pode partilhar uma versão anterior.</li></ul>",
		share_version_update: "Partilhar a versão ${0} (Actualizar as opções de partilha).",
		share_version_update_p8_hover: "Partilhar este documento mantém a ligação apenas para a versão específica.<br><br>Quando um documento já está partilhado:<ul><li>Pode partilhar uma versão posterior e a ligação redirecciona para a versão mais recente.</li><li>Não pode partilhar uma versão anterior a não ser que elimine primeiro a partilha.</li></ul>",
		share_version_update_cm_hover: "Partilhar este documento mantém a ligação apenas para a versão específica.<br><br>Quando um documento já está partilhado:<ul><li>Pode partilhar uma versão posterior e a ligação redirecciona para a versão mais recente.</li><li>Não pode partilhar uma versão anterior.</li></ul>",
		share_version_change_to_current: "Partilhar a versão ${0} (Actualizar a partilha com a versão seleccionada).",
		share_version_change_to_current_p8_hover: "Partilhar este documento actualiza a ligação para direccionar apenas para a versão seleccionada.<br><br>Quando um documento já está partilhado:<ul><li>Pode partilhar uma versão posterior e a ligação redirecciona para a versão mais recente.</li><li>Não pode partilhar uma versão anterior a não ser que elimine primeiro a partilha.</li></ul>",
		share_version_change_to_current_cm_hover: "Partilhar este documento actualiza a ligação para direccionar apenas para a versão seleccionada.<br><br>Quando um documento já está partilhado:<ul><li>Pode partilhar uma versão posterior e a ligação redirecciona para a versão mais recente.</li><li>Não pode partilhar uma versão anterior.</li></ul>",
		share_repository: "Repositório para ficheiro partilhados",
		share_repository_hover: "Se não visualizar o repositório do Box que pretende utilizar, pode adicionar um novo repositório do Box na página Repositórios.",
		share_options: "Opções de partilha",
		unshare_confirm: "Se eliminar a partilha, todas as ligações de partilha serão danificadas, incluindo as ligações de partilha enviadas previamente por outros utilizadores. Quaisquer utilizadores que pretendam partilhar o documento têm de seleccionar o documento original e partilhar o mesmo novamente.<br><br>Tem a certeza de que pretende eliminar a partilha?",
		unshare_button: "Eliminar partilha do Box",
		admin_share: "Serviços de partilha do Box:",
		admin_share_hover: "Permite aos utilizadores partilhar um documento de qualquer repositório com a partilha do Box activada. Partilhar um documento inclui copiar o ficheiro para o Box, criando uma ligação e enviando a ligação numa mensagem de correio electrónico.",
		admin_my_email_modifiable: "Permitir aos utilizadores modificar o endereço de correio electrónico de envio",
		admin_my_email_modifiable_hover: "Por predefinição, para a Partilha do Box, o endereço de correio electrónico do utilizador é apenas de leitura e é obtido a partir de um mapeamento de utilizadores e endereços de correio electrónico que representam as contas de utilizador do Box.<br><br>Seleccione esta opção para permitir aos utilizadores editar o endereço de correio electrónico ao partilhar; contudo a validade do endereço de correio electrónico não é verificada.",
		admin_repos_admin_user: "Administrador de partilha:",
		admin_repos_admin_user_hover: "Defina o administrador de partilha se tiver um ambiente de trabalho com os serviços de partilha do Box activados e este repositório Box seleccionado como o repositório para ficheiros partilhados.<br><br>Faça clique em Definir e inicie sessão no Box utilizando uma conta de administrador do Box válida.<br><br>É necessário que o administrador de partilha seja um utilizador administrador do Box com armazenamento ilimitado no Box.",
		admin_repos_admin_user_not_set_warning: "O administrador do Box não está configurado para o repositório seleccionado.<br><br>Os serviços de partilha do Box estão desactivados até que defina o administrador do Box para o repositório seleccionado ou seleccione outro repositório do Box em que o administrador do Box esteja configurado.<br><br>Pode definir o administrador do Box na secção de serviços de partilha do Box na página Geral para o repositório.",
		admin_share_not_configured_warning: "Para utilizar serviços partilhados do Box, é necessário adicionar e seleccionar primeiro um repositório do Box com autenticação do servidor.",
		/* Office Online Server settings */
		admin_office_online_title: "Configuração do Office Online",
		admin_office_online_server_enable: "Servidor online do Office:",
		admin_office_online_server_enable_hover: "Especifique se pretende que os utilizadores que acedem a este ambiente de trabalho editem os seus documentos do Office através do servidor online do Office.",		
		admin_office_online_allow_collaborative_editing: "Permitir edição colaborativa",
		admin_office_online_allow_collaborative_editing_hover: "Permitir que mais de utilizador trabalhe no mesmo documento. Desmarque a opção se pretender restringir a edição de documentos a um utilizador.",
		admin_office_online_repository_not_set_warning: "Antes de poder utilizar o serviço do Office Online, é necessário activar primeiro o serviço num repositório e especificar o URL do servidor do Microsoft Office Online. Faça clique em <b>Repositórios</b>, seleccione um repositório e, de seguida, no separador <b>Editar Integração</b>, active o serviço. Faça clique em <b>Definições > Geral</b> e introduza o URL do servidor do Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Especifique se pretende utilizar o servidor online do Office para trabalhar com documentos do Office.",
		admin_office_online_server_url: "URL do servidor do Microsoft Office Online",
		admin_office_online_server_url_hover: "Especifique o URL através do qual outras aplicações podem comunicar com o servidor online do Office. O URL tem o formato http://nome_servidor:número_porta/hosting/discovery.",
		admin_office_online_server_Verified: "Verificado",
	    admin_office_online_server_Failed: "<b>Falha</b>",

		admin_repcfg_office_online_service_p8_hover: "Para inicializar o repositório para utilizar o servidor online do Office, pode adicionar o ficheiro de modelo inicial para cada aplicação Office. Se não for especificado um modelo, é utilizado o modelo predefinido.",	
		admin_repcfg_office_online_server_integration: "Integração de servidor online MS Office",
		admin_repcfg_office_online_service_url_not_set_warning: "Antes de poder activar o servidor do Office Online, é necessário especificar primeiro o URL do servidor do Microsoft Office Online. Faça clique em Definições > Geral e introduza o URL",
		admin_repcfg_office_online_word_template_name: "Modelo predefinido do Word",
		admin_repcfg_office_online_excel_template_name: "Modelo predefinido do Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Modelo predefinido do PowerPoint",
		admin_repcfg_office_online_blank_template_description: "O modelo predefinido utilizado se não pretender adicionar um modelo.",
		/* Edit Service settings */
		admin_icn_edit_title: "Editar configuração",	
	    admin_icn_edit_files_cleanup_interval: "Intervalo de limpeza de ficheiros temporários (em dias):",
	    admin_icn_edit_files_cleanup_interval_hover: "É possível definir a quantidade de tempo que os ficheiros temporários são mantidos no cliente ICN Edit. O tempo predefinido são 20 dias. O tempo máximo são 20 dias. O tempo mínimo é 1 dia.",
	    admin_icn_edit_service_integration: "Integração do Serviço de Edição",
	    admin_icn_edit_service_integration_intro: "O serviço de edição permite aos utilizadores adicionarem ou editar ficheiros facilmente nas aplicações nativas instaladas nos respectivos computadores.<br><br><b>Importante:</b> Caso active o serviço de edição, será necessário guardar a configuração do repositório antes de poder editar as categorias predefinidas.",
		admin_icn_edit_service: "Serviço de edição:",
		admin_icn_edit_enable_hover: "Para utilizar o serviço de edição, é necessário:<ul><li>Activar o serviço no repositório</li><li>Activar o serviço nos ambientes de trabalho no ambiente</li><li>Instalar o cliente IBM Content Navigator Edit em estações de trabalho dos utilizadores</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Activar",
		admin_icn_edit_disable: "Desactivar",
		admin_icn_edit_create_new_category: "Nova Categoria",
		admin_icn_edit_delete_category: "Eliminar Categoria",
		admin_icn_edit_edit_category: "Editar Categoria",
		admin_icn_edit_disable_category: "Desactivar Categoria",
		admin_icn_edit_enable_category: "Activar Categoria",
		admin_icn_edit_new_category_dialog_title: "Nova Categoria",
		admin_icn_edit_edit_category_dialog_title:"Editar Categoria",
		admin_icn_edit_new_category_dialog_instructions: "Uma categoria de documento permite associar modelos a tipos MIME específicos para o serviço de edição. Por exemplo, é possível associar um conjunto de modelos a ficheiros PDF de forma a que os utilizadores possam aplicar modelos quando adicionam ou editam ficheiros a partir do cliente IBM Content Navigator Edit. <br><br><b>Importante:</b> É necessário guardar a configuração do repositório antes de poder adicionar modelos à categoria que criar. ",
		admin_icn_edit_edit_category_dialog_instructions: "É necessário guardar a configuração do repositório antes de poder adicionar modelos a esta categoria. ",
		admin_icn_edit_delete_category_dialog_instructions: "Pretende eliminar esta categoria e quaisquer modelos que estejam associados à categoria?<br><br><b>Importante:</b> As alterações não serão permanentes até guardar as alterações ao repositório. ",
		admin_icn_edit_category_label: "Categoria: ",
		admin_icn_edit_category_discription_label:"Descrição: ",
		admin_icn_edit_template_column_head:"Nome do modelo",
		admin_icn_edit_category_duplicate_error_message: "Já existe uma categoria com este ID. ",
		admin_icn_edit_word_category_description: "Esta categoria define os modelos disponíveis para documentos do Microsoft Word no serviço de edição. ",
		admin_icn_edit_excel_category_description: "Esta categoria define os modelos disponíveis para documentos do Microsoft Excel no serviço de edição. ",
		admin_icn_edit_powerpoint_category_description: "Esta categoria define os modelos disponíveis para documentos do Microsoft PowerPoint no serviço de edição. ",

		icn_edit_add_template_dialog_title:"Adicionar um Modelo ${0}",
		icn_edit_add_template_only_one_file_error: "Pode seleccionar apenas um ficheiro.",
		icn_edit_add_template_file_type_error: "É necessário especificar um ficheiro de modelo ${0} válido.<br><br>O documento seleccionado possui um tipo MIME de ${1}.<br><br>Tipos MIME válidos: ${2}.",
		icn_edit_change_template_dialog_title: "Editar Modelo ${0}",
		icn_edit_action_in_new_menu_name:"Documento ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "com o Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "com aplicações de Produtividade Pessoal",
		icn_edit_new_document_dialog_title: "Novo Documento ${0}",
		icn_edit_new_document_dialog_intro: "Criar um novo documento ${0} e adicioná-lo ao repositório. O documento será criado com o modelo de serviço de edição seleccionado.", 
		icn_edit_select_edit_service_template: "Seleccione um modelo",
		icn_edit_edit_service_template: "Editar modelo de serviço:",
		icn_edit_new_document_category_no_templates_message:"Não existem modelos nesta categoria. Contacte o administrador para adicionar modelos nesta categoria.",
		icn_edit_installer: "Programa de Instalação do IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Definições de Classe e Funções",
		admin_repcfg_classes_and_roles_warning: "Para especificar classes e utilizadores ou grupos de utilizadores que têm permissão para criar, editar e utilizar modelos, ou criar rascunhos de documentos que funcionam com o Office Online Service e com o Serviço de edição.",
		admin_repcfg_classes_and_roles_click_warning: "clique aqui.",
		/* Edit Service settings END */
		share_no_my_email_error: "Ocorreu um problema ao identificar o endereço de correio electrónico requerido para partilhar o documento.",
		share_no_my_email_error_explanation: "Tem sessão iniciada com o ID de utilizador ${0}, mas o ID de utilizador não está correlacionado com um endereço de correio electrónico.",
		share_no_my_email_error_userResponse: "Tente iniciar sessão novamente ou inicie sessão com um ID de utilizador diferente. Se o problema persistir, reporte este erro ao administrador do sistema.",
		share_no_my_email_error_adminResponse: "O ID de utilizador ${0} não está correlacionado a um endereço de correio electrónico e o ambiente de trabalho ${1} não permite aos utilizadores editar o endereço de correio electrónico para serviços de partilha do Box.<br><br>Tente uma das soluções seguintes:<br>Certifique-se de que o suplemento de mapeamento de correio electrónico está registado.<br>Certifique-se de que o ficheiro emailMappingPlugin.json inclui o ID de utilizador ${0} e o endereço de correio electrónico do utilizador e, em seguida, crie, configure e registe o suplemento de mapeamento de correio electrónico.<br>Se não pretender utilizar o suplemento de mapeamento de correio electrónico ou o directório de endereços de correio electrónico do FileNet P8 e pretender permitir aos utilizadores inserir os seus endereços de correio electrónico quando partilham um documento, pode modificar as definições do ambiente de trabalho para os serviços de partilha do Box, para permitir aos utilizadores enviar a ligação a partir de outro endereço de correio electrónico.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Uma versão mais recente deste documento está partilhada, pelo que não é possível partilhar a versão seleccionada deste documento.",
		share_later_version_shared_error_explanation: "Não é possível partilhar uma versão anterior de um documento que foi partilhado previamente.",
		share_later_version_shared_error_userResponse: "Para enviar a ligação para a versão mais recente do documento, seleccione primeiro a versão mais recente e, em seguida, utilize a acção Partilhar.<br><br>Para partilhar a versão seleccionada do documento, é necessário eliminar primeiro a partilha da versão mais recente do documento.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nova mensagem",
		email_from: "De:",
		email_to: "Para:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Introduza um endereço de correio electrónico válido.",
		email_subject: "Assunto:",
		email_message: "Mensagem:",
		email_message_placeholder: "Adicionar uma mensagem",
		email_attachments: "Anexos:",
		email_links: "Ligações:",
		email_send: "Enviar",
		email_dont_send: "Não enviar",
		email_subject_reminder: "Lembrete de assunto",
		email_subject_reminder_confirm: "Pretende enviar esta mensagem sem assunto?",
		email_missing_from_error: "Ocorreu um problema ao identificar o endereço de correio electrónico de origem requerido para enviar a mensagem de correio electrónico.",
		email_missing_from_error_explanation: "Tem sessão iniciada com o ID de utilizador ${0}, mas o ID de utilizador não está correlacionado com um endereço de correio electrónico.",
		email_missing_from_error_userResponse: "Tente iniciar sessão novamente ou inicie sessão com um ID de utilizador diferente. Se o problema persistir, reporte este erro ao administrador do sistema.",
		email_missing_from_error_adminResponse: "O ID de utilizador ${0} não está correlacionado a um endereço de correio electrónico e o ambiente de trabalho ${1} não permite aos utilizadores editar o endereço de correio electrónico de origem.<br><br>Tente uma das soluções seguintes:<br>Certifique-se de que o suplemento de mapeamento de correio electrónico está registado.<br>Certifique-se de que o ficheiro emailMappingPlugin.json inclui o ID de utilizador ${0} e o endereço de correio electrónico do utilizador e, em seguida, crie, configure e registe o suplemento de mapeamento de correio electrónico.<br>Se não pretender utilizar o suplemento de mapeamento de correio electrónico ou o directório de endereços de correio electrónico do FileNet P8, mas pretender permitir aos utilizadores inserir os seus endereços de correio electrónico quando enviam uma mensagem de correio electrónico, pode modificar as definições de correio electrónico para ambientes de trabalho para permitir aos utilizadores modificar o endereço de correio electrónico de origem.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Não é possível abrir o documento.",
		open_edit_document_with_native_application_error_explanation: "O IBM Content Navigator não consegue estabelecer ligação ao cliente IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Instale e inicie o cliente IBM Content Navigator Edit na estação de trabalho. Em seguida, tente abrir o documento de novo.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Não é possível abrir o documento.",
		connect_to_the_streamline_service_error_explanation: "O IBM Content Navigator não consegue estabelecer ligação ao cliente IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Instale e inicie o cliente IBM Content Navigator Edit na estação de trabalho. Em seguida, tente abrir o documento de novo.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "O IBM Content Navigator não está configurado correctamente para partilhar documentos.",
		share_not_configured_error_explanation: "É necessário que a função de partilha do Box esteja configurada correctamente para ser possível partilhar documentos.",
		share_not_configured_error_userResponse: "Contacte o administrador e solicite que a função de partilha do Box seja configurada.",
		share_not_configured_error_adminResponse: "É necessário configurar os itens seguintes antes de partilhar documentos:<ul><li>É necessário que o serviço de gestor de tarefas esteja activado nas definições da ferramenta de administração.</li><li>É necessário que o ID de ligação do gestor de tarefas esteja configurado no repositório.</li><li>A partilha tem de estar activada no repositório.</li><li>Um repositório do Box tem de estar seleccionado para partilha no ambiente de trabalho.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "As alterações de propriedades não foram guardadas para a nova versão",
		checkin_cors_save_attributes_error_explanation: "A versão foi criada, mas as alterações de propriedades não foram guardadas. Ainda é possível dar saída do documento.",
		checkin_cors_save_attributes_error_userResponse: "Desbloqueie o documento e actualize propriedades através da utilização do item do menu contextual Propriedades.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "As alterações de propriedades não foram guardadas para o novo documento",
		add_cors_save_attributes_error_explanation: "O documento foi criado, mas as alterações de propriedades não foram guardadas.",
		add_cors_save_attributes_error_userResponse: "Actualize propriedades através da utilização do item do menu contextual Propriedades.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Não é possível abrir o documento.",		
		edit_document_using_edit_service_error_explanation: "Não é possível abrir o documento no serviço de edição.",
		edit_document_using_edit_service_error_userResponse: "Solicite ao administrador que actualize a integração do serviço de edição.<br><br> Caso o utilizador necessite de aceder a este documento a partir do serviço de edição, aceda à página Integração de edição do repositório e actualize a Integração de Serviço de edição para incluir a classe na lista de classes a modificar para o suporte do Serviço de edição.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Não é possível abrir o documento.",		
		edit_document_is_editing_by_oos_error_explanation: "O documento está a ser utilizado pelo Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Tem que guardar e fechar o documento no Office Online Service antes de o poder abrir no Serviço de edição.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Activar carregamentos de Partilha de Recursos de Origem Cruzada (CROS, Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Definições de correio electrónico:",
		admin_email_settings_hover: "Especifique o tipo de serviço de correio electrónico que pretende que os utilizadores utilizem. Quando activa o serviço de correio electrónico baseado em HTML, tem a opção de permitir aos utilizadores modificar o endereço de correio electrónico de origem. Se pretender activar o serviço de correio electrónico baseado em Java, é necessário ter um navegador com suporte de Java.",
		admin_email_use_service: "Utilizar o serviço de correio electrónico baseado em HTML",
		admin_email_use_applet: "Utilizar o serviço de correio electrónico baseado em Java",
		admin_email_can_modify_from: "Permitir aos utilizadores modificar o endereço de correio electrónico de origem",
		admin_email_can_modify_from_hover: "Por predefinição, o endereço de correio electrónico de origem não pode ser modificado e é obtido a partir de um mapeamento de utilizadores e endereços de correio electrónico que representam as contas de utilizador.<br><br>Seleccione esta opção para permitir aos utilizadores editar o endereço de correio electrónico ao enviar uma mensagem; contudo a validade do endereço de correio electrónico não é verificada.",
		admin_email_use_from_as_sender: "Utilizar o endereço de correio electrónico de origem como o remetente da mensagem de correio electrónico",
		admin_email_use_from_as_sender_hover: "Por predefinição, um endereço de correio electrónico de origem é utilizado no correio electrónico do utilizador. Esse endereço de correio electrónico é verificado pela sessão de correio CNMailSession no servidor da aplicação. Seleccione esta opção para especificar que o endereço de correio electrónico do utilizador pode ser utilizado na mensagem de correio electrónico.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Anotações novas",
		addAnnotationDlg_labelContents: "Conteúdos:",
		addAnnotationDlg_labelAccess: "Acesso:",
		addAnnotationDlg_labelPublic: "Público",
		addAnnotationDlg_labelPrivate: "Privado",
		addAnnotationDlg_labelPrivateGroup: "Privado para um grupo",
		addAnnotationDlg_labelGroup: "Grupo",
		addAnnotationDlg_labelCopiable: "Esta anotação pode ser copiada para outro servidor.",
		addAnnotationDlg_buttonLabel_save: "Guardar",

		/* Skip navigation */
		skipNavigation_title_main: "Avançar para conteúdo principal",
		skipNavigation_title_menu: "Avançar para botões de navegação",
		skipNavigation_label_main: "Avançar para conteúdo principal",
		skipNavigation_label_menu: "Avançar para botões de navegação",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gerir espaços de equipa",
		manage_teamspace_pane_instance_hdr: "Espaços de equipa",
		manage_teamspace_pane_template_hdr: "Modelos",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Avançar",
		scroll_back: "Retroceder",

		breadcrumb_separator_open: "Abrir nó",
		breadcrumb_separator_close: "Fechar nó",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nenhum item seleccionado.",

		/* eds */
		eds_url: "URL de serviço de dados externo:",
		eds_request_timeout: "Tempo limite do pedido de serviço (segundos):",
		eds_is_required: "Impedir que os utilizadores executem acções que alterem os valores das propriedades quando EDS não está disponível",

		/* eforms */
		eform_signing_pane_welcome: "Assinar o formulário",
		eform_signing_button_label: "Assinar",
		eform_signing_pane_delete: "Eliminar a assinatura",
		eform_signing_button_label_delete: "Eliminar",

		xtplugin_server_label: "URL do servidor do IBM FileNet Workplace XT",
		xtplugin_server_hover: "Introduza o URL do servidor em que o IBM FileNet Workplace XT está implementado, como por exemplo, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL do servidor do IBM eClient",
		ecplugin_server_hover: "Introduza o URL do servidor em que o IBM eClient está implementado, como por exemplo, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "As acções aplicadas a um elevado número de itens poderá demorar bastante tempo. Pretende continuar?",
		large_number_actions_continue_button: "Continuar",

		large_items_actions_confirmation_question: "As acções aplicadas a um elevado número de itens poderão demorar muito tempo. Pretende continuar?",

		viewer_editproperties_title: "Confirmação",
		viewer_editproperties_title_warning: "Aviso",
		viewer_editproperties_save: "Guardar",
		viewer_editproperties_next: "Seguinte",
		viewer_editproperties_reset: "Repor",
		viewer_editproperties_reset_hover: "Quaisquer dados não guardados serão repostos nos últimos valores guardados",
		viewer_editproperties_saveandgetnext: "Guardar e obter o seguinte",
		viewer_editproperties_saveandgetnext_hover: "Obter automaticamente o documento seguinte após guardar as alterações",
		viewer_editproperties_prompt_save_changes: "Alterou as propriedades do documento seguinte<br>${0}<br><br>Pretende guardar as suas alterações?",
		viewer_editproperties_prompt_discard_changes: "Alterou as propriedades do documento seguinte<br>${0}<br><br>Contudo, uma ou mais das propriedades têm um valor não válido, pelo que não é possível guardar as alterações. Pode corrigir os valores não válidos ou rejeitar as alterações.<br>Pretende corrigir os valores não válidos apresentados no painel de propriedades?",
		viewer_comments_prompt_discard_changes: "Modificou os comentários. Pretende guardar as suas alterações?",
		viewer_notelogs_prompt_discard_changes: "Modificou os registos de notas. Pretende guardar as suas alterações?",
		social_collaborated_version: "Versão: ${0}",
		social_link_label: "Quem...",

		// social comments
		comments: "Comentários",
		comments_add_hint: "Prima Enter para adicionar comentários.",
		comments_hint: "Introduza os seus comentários.",
		comments_label: "Prima Enter ou Tab para guardar os comentários. Prima Esc para cancelar.",
		comments_delete_confirmation: "Pretende eliminar o comentário seleccionado?",
		comments_number: "Comentários: ${0}",
		comments_save_new: "Modificou os comentários. Pretende fechar a janela sem guardar as alterações?",

		notelogs: "Registos de notas",
		notelogs_download: "Descarregar",
		notelog_modify: "Guardar alterações",
		notelog_edit: "Editar registo de notas",
		notelog_create_newVersion: "Criar uma nova versão de registo de notas",
		notelog_add_hint: "Introduza os seus comentários e prima Enter para adicionar.",
		notelog_hint: "Prima Shift+Enter para mudança de linha",
		notelog_add_placeholder: "Prima Enter para adicionar um comentário ao registo de notas.",
		notelog_save_new: "Modificou o registo de notas. Pretende fechar a janela sem guardar as alterações?",

		// P8 markings related
		cannot_remove_markings: "Não tem permissão para remover o(s) valor(es) de marcação: {0}",

		// download count
		downloadcount: "Transferências: {0}",
		downloadcount_single: "1 transferência",
		downloadcount_multiple: "{0} transferências",
		downloadcount_none: "Ainda ninguém descarregou isto",

		// recommendations
		recommendations: "Gostos: {0}",
		recommendations_recommend: "Gostar disto",
		recommendations_unrecommend: "Não gostar disto",
		recommendations_you: "Gosta disto",
		recommendations_you_and_another: "O utilizador e 1 pessoa gosta disto",
		recommendations_you_and_others: "O utilizador e {0} pessoas gostam disto",
		recommendations_another: "1 pessoa gosta disto",
		recommendations_others: "{0} pessoas gostam disto",
		recommendations_none: "Ainda ninguém gostou disto",

		// tags
		tags: "Etiquetas: ${0}",
		tags_delete: "Eliminar ${0}",
		tags_none: "Não existem etiquetas para apresentar.",
		tags_add: "Adicionar etiquetas:",
		tags_hint: "Prima Enter para adicionar etiquetas.",
		tags_hover_help: "Especifique uma etiqueta ou uma lista de etiquetas que podem ser utilizadas para procurar documentos com a mesma etiqueta. Pode utilizar uma vírgula(,), um ponto e vírgula (;) ou um espaço para separar as etiquetas.",
		tags_hover_help_box: "Especifique uma etiqueta ou uma lista separada por vírgulas de etiquetas que podem ser utilizadas para procurar documentos com a mesma etiqueta.",
		tags_no_access: "Não tem as permissões apropriadas para adicionar etiquetas.",

		//task scheduler pane
		taskPane_tooltip: "Abrir vista de tarefas assíncronas",
		taskPane_tree: "Árvore de navegação do painel de tarefa",
		taskPane_allTasks: "Todas as tarefas",
		taskPane_scheduledTasks: "Tarefas agendadas",
		taskPane_recurringTasks: "Tarefas recorrentes",
		taskPane_inProgressTasks: "Tarefas em curso",
		taskPane_completedTasks: "Tarefas concluídas",
		taskPane_failedTasks: "Tarefas com falha",
		taskPane_disabledTasks: "Tarefas desactivadas",
		taskPane_statusScheduled: "Agendado",
		taskPane_statusInProgress: "Em curso",
		taskPane_statusCompleted: "Concluído",
		taskPane_statusFailed: "Falha",
		taskPane_statusPaused: "Em pausa",
		taskPane_noItemSelected: "Não foi seleccionado um item",
		taskSchedulerPane_scheduleInformation: "Informações de agendamento",
		taskSchedulerPane_loginInformation: "Informações de início de sessão",
		taskSchedulerPane_startImmediately: "Iniciar imediatamente",
		taskSchedulerPane_recurrence: "Recorrência",
		taskSchedulerPane_interval: "Intervalo",
		taskSchedulerPane_scheduleReport: "Relatório da agenda",
		taskSchedulerPane_nameHoverHelp: "Introduza o nome da tarefa.",
		taskSchedulerPane_descriptionHoverHelp: "Introduza uma descrição para a tarefa. A descrição deverá ajudá-lo a fazer a distinção entre tarefas.",
		taskSchedulerPane_startTimeHoverHelp: "Especifique se pretende que a tarefa seja executada. Para executar a tarefa agora, seleccione Iniciar imediatamente.",
		taskSchedulerPane_recurrenceHoverHelp: "Pode agendar a tarefa para ser executada periodicamente.",
		taskSchedulerPane_endTimeHoverHelp: "Especifique se pretende que a execução da tarefa seja parada. A tarefa é executada a partir da hora de início agendada até à hora de fim agendada.",
		taskSchedulerPane_usernameHoverHelp: "Para tarefas recorrentes, é necessário introduzir um nome de utilizador para permitir que o serviço efectue a autenticação quando a tarefa for executada.",
		taskSchedulerPane_passwordHoverHelp: "Para tarefas recorrentes, é necessário introduzir a palavra-passe do utilizador especificado para permitir que o serviço efectue a autenticação quando a tarefa for executada.",
		taskSchedulerPane_notification: "Notificação",
		taskSchedulerPane_emailAddress: "Endereço de correio electrónico",
		taskSchedulerPane_emailAddressHoverHelp: "Introduza o endereço de correio electrónico no qual pretende receber notificações sobre o estado da tarefa.",
		taskSchedulerPane_intervalHoverHelp: "Especifique o período de tempo durante o qual a tarefa recorrente será executada. Pode definir o intervalo em horas, dias, semanas ou meses.",
		taskSchedulerPane_scheduledStartTime: "Hora de início agendada",
		taskSchedulerPane_startTime: "Hora de início",
		taskSchedulerPane_title: "Agendar",
		taskSchedulerPane_runNow: "Executar agora",
		taskSchedulerPane_runOnce: "Executar uma vez",
		taskSchedulerPane_runAtSchedule: "Executar de acordo com um agendamento",
		taskSchedulerPane_repeats: "Repetições",
		taskSchedulerPane_repeatsEvery: "Repete-se a cada",
		taskSchedulerPane_hourly: "Hora a hora",
		taskSchedulerPane_daily: "Diariamente",
		taskSchedulerPane_weekly: "Semanalmente",
		taskSchedulerPane_monthly: "Mensalmente",
		taskSchedulerPane_yearly: "Anual",
		taskSchedulerPane_sunday: "D",
		taskSchedulerPane_monday: "S",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "Q",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "D",
		taskSchedulerPane_starting: "Data de início",
		taskSchedulerPane_after: "Depois",
		taskSchedulerPane_ending: "Data de fim",
		taskSchedulerPane_times: "hora(s)",
		taskSchedulerPane_days: "dia(s)",
		taskSchedulerPane_hours: "hora(s) do dia",
		taskSchedulerPane_interval: "Intervalo",
		taskSchedulerPane_endingDays: "A terminar (em dias)",
		taskSchedulerPane_never: "Nunca",
		taskSchedulerPane_categorization: "Categorização",
		taskSchedulerPane_scheduleTask: "Agendar tarefa",
		taskInformationPane_details: "Detalhes",
		taskInformationPane_errors: "Erros",
		taskInformationPane_taskInstances: "Ocorrências de tarefa",
		taskInformationPane_audits: "Auditorias",
		taskInformationPane_results: "Resultados",
		asyncTasks: "Tarefas assíncronas",

		//entry template pane
		search_all_entry_templates: "Procurar em todos os modelos de entrada.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Ver sítio completo",
		mobilesite: "Ver sítio móvel",
		profile: "Gerir perfil",
		office_template: "Modelo do Office:",
		select_office_template: "Seleccione um modelo do office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Não é possível abrir os documentos seleccionados no visualizador com a acção Intercalar e Dividir.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "O visualizador configurado para documentos PDF e TIFF não suporta a acção Intercalar e Dividir.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Solicite ao administrador para configurar um visualizador para documentos PDF e TIFF que suporte a acção Intercalar e Dividir como, por exemplo, o visualizador Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Não é possível abrir os documentos PDF seleccionados no visualizador com a acção Intercalar e Dividir.",
		document_builder_pdf_unsupported_viewer_error_explanation: "O visualizador configurado para documentos PDF não suporta a acção Intercalar e Dividir.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Solicite ao administrador para configurar um visualizador para documentos PDF que suporte a acção Intercalar e Dividir como, por exemplo, o visualizador Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Não é possível abrir os documentos TIFF seleccionados no visualizador com a acção Intercalar e Dividir.",
		document_builder_tiff_unsupported_viewer_error_explanation: "O visualizador configurado para documentos TIFF não suporta a acção Intercalar e Dividir.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Solicite ao administrador para configurar um visualizador para documentos TIFF que suporte a acção Intercalar e Dividir como, por exemplo, o visualizador Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Não é possível abrir os documentos seleccionados no visualizador com a acção Intercalar e Dividir.",
		document_builder_unsupported_documents_error_explanation: "A acção Intercalar e Dividir apenas funciona com documentos PDF e TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Seleccione documentos suportados e tente de novo.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Não é possível abrir alguns dos documentos seleccionados no visualizador com a acção Intercalar e Dividir.",
		document_builder_some_unsupported_documents_error_explanation: "A acção Intercalar e Dividir apenas funciona com documentos PDF e TIFF abertos a partir do mesmo repositório.",
		document_builder_some_unsupported_documents_error_userResponse: "Os documentos suportados serão abertos no visualizador.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Ocorreu um erro enquanto dava entrada do conteúdo modificado.",
		document_builder_checkin_failed_explanation: "O visualizador recebeu uma resposta de erro enquanto dava entrada do conteúdo modificado.",
		document_builder_checkin_failed_userResponse: "Solicita ao administrador do sistema que verifique os ficheiros de registo do servidor da aplicação da Web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Não é possível abrir o documento.",
		no_viewer_to_view_error_explanation: "O administrador de sistema bloqueou a visualização deste documento. Se necessitar de aceder a este documento, pode descarregá-lo.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Não foi possível criar o conteúdo.",
		document_build_failed_userResponse: "Solicite ao administrador de sistema que verifique os ficheiros de registo do visualizador.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Não foi possível abrir o documento no modo Intercalar e Dividir.",
		document_builder_open_failed_userResponse: "Solicite ao administrador de sistema que verifique os ficheiros de registo do visualizador.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Não foi possível ao sistema mudar para o modo Intercalar e Dividir.",
		document_builder_switch_failed_userResponse: "Solicite ao administrador de sistema que verifique os ficheiros de registo do visualizador.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documentos",
		print_service_page_setup_tab_title: "Configurar Página",
		print_service_OD_print_tab_title: "Opções de impressora",
		print_service_status_merging: "A intercalar documentos...",
		print_service_status_converting: "A converter documentos...",
		print_service_status_formatting: "A formatar o documento para impressão...",
		admin_print_service_maximum_number_to_print: "Número máximo de documentos permitidos para impressão:",
		admin_print_service_maximum_size_to_print: "Quantidade máxima de dados permitida para impressão (em MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Especifique o número máximo de documentos que os utilizadores podem imprimir de cada vez. O máximo predefinido é 50. Se não pretender limitar a impressão pelo número de documentos, defina este limite como 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Restrição:</b> Esta definição não é suportada no IBM Content Manager OnDemand.<br/><br/>Especifique a quantidade máxima de dados que podem ser impressos através do serviço de impressão do IBM Daeja ViewONE.<br /><br />O tamanho total de cada documento seleccionado não pode ser superior a esta quantidade.<br/><br/>O limite predefinido é 200 MB. A definição do limite acima de 200 MB poderá afectar o desempenho do sistema. Se não pretender limitar a impressão pelo tamanho dos documentos, defina este limite como 0",
		// error printing
		print_service_error_printing: "Ocorreu um erro durante a impressão.",
		print_service_error_printing_userResponse: "Solicite ao administrador de sistema para verificar os ficheiros de registo do serviço de impressão.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Os documentos seleccionados são demasiado grandes para imprimir",
		print_service_max_content_error_explanation: "Os documentos seleccionados excedem o limite de ${0} MB de dados.",
		print_service_max_content_error_userResponse: "Seleccione menos documentos ou seleccione documentos mais pequenos e imprima de novo. Também pode contactar o seu administrador do sistema para aumentar o tamanho total máximo de itens que pode imprimir de cada ver a partir deste ambiente de trabalho.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Os itens não podem ser impressos.",
		print_service_max_number_selected_error_explanation: "Pode imprimir até ${0} itens de cada vez. Está a tentar imprimir ${1} itens.",
		print_service_max_number_selected_error_userResponse: "Seleccione menos itens e tente imprimir os itens novamente. Também pode contactar o seu administrador do sistema para aumentar o número máximo de itens que pode imprimir de cada vez a partir deste ambiente de trabalho.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


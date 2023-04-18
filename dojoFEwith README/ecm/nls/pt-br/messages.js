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
		about: "Sobre",
		all: "Todos",
		help: "Ajuda",
		user_session: "Sessão do usuário",
		user_session_for: "Sessão do usuário para ${0}",
		user_session_for_with_container: "Sessão do usuário para ${0} (${1})",
		tools: "Ferramentas",
		login: "Login",
		logout: "Efetuar Logout",
		search: "Procurar",
		saved_searches: "Pesquisas salvas",
		content_analytics: "Analisar Conteúdo",
		reset: "Reconfigurar",
		reset_hover: "Os dados não salvos em todas as guias serão reconfigurados para os valores salvos anteriormente.",
		reset_default: "Limpar Tudo",
		reset_default_hover: "Limpa o campo Rótulo Atual em todas as guias.",
		locale: "Código de idioma:",
		up: "Para cima",
		down: "Para baixo",
		restore: "procedimento de restauração",
		maximize: "Maximizar",
		values_label: "Valores",
		value_label: "Valor:",
		path_label: "Caminho:",
		new_label: "Novo:",
		back_label: "Voltar",
		clear: "Limpar",
		set: "Configurar...",
		browse: "Pesquisar",
		work: "Trabalho",
		connect: "Conectar",
		documents: "Documentos:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM e o logotipo IBM são marcas registradas da IBM Corporation, registradas em diversos países ao redor do mundo. Java e todas as marcas comerciais e logotipos baseados em Java são marcas comerciais ou marcas registradas da Oracle e/ou de seus afiliados. O Oracle Outside In Technology incluído aqui está sujeito a uma licença de uso restrito e pode apenas ser usado em conjunto com este aplicativo. Este Programa é licenciado sob os termos do contrato de licença que acompanha o Programa.  Este contrato de licença pode estar localizado em uma pasta do diretório Programa ou biblioteca identificada como \"License\" ou \"Non_IBM_License\", se aplicável, ou pode ser fornecido como um contrato de licença impresso. Leia este contrato atentamente antes de usar o Programa. Ao usar o Programa, você está de acordo com esses termos. ",
		edit: "Editar",
		cancel: "Cancelar",
		close: "Fechar",
		close_all: "Fechar Todas as Guias",
		close_others: "Fechar Outras Guias",
		ok: "OK",
		yes: "Sim",
		no: "Não",
		open: "Abrir",
		refresh: "Atualizar",
		refresh_cabinets: "Atualizar Todos os Gabinetes",
		delete_text: "Excluir",
		export_config: "Configuração de Exportação",
		description: "Descrição",
		true_label: "True",
		false_label: "False",
		error: "Erro",
		error_reference_hover: "Procure www.ibm.com para informações adicionais sobre esse erro.",
		url_label: "URL",
		default_label: "Padrão",
		ibm_label: "IBM",
		light_label: "Claro",
		dark_label: "Escuro",
		save: "Salvar",
		saveAs: "Salvar como...",
		save_and_close: "Salvar e fechar",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Nenhuma",
		Name: "Nome",
		"${NAME}": "Nome",
		mime_type: "Tipo MIME",
		mime_type_contains_label: "O tipo MIME contém",
		mime_type_header: "Tipo MIME",
		mime_type_icon: "Ícone de tipo MIME",
		casesearch: "Caso",
		item: "Item",
		no_mime_type: "Este item contém nenhum conteúdo.",
		items_selected: "${0} itens selecionados.",
		requestor: "Solicitado por",
		scheduledStartTime: "Horário de início planejada",
		isRecurring: "É recorrente",
		weeks: "Semanas",
		days: "Dias",
		hours: "Horas",
		endTime: "Horário de encerramento",
		username: "Nome de usuário",
		password: "Senha",
		serverURL: "URL do servidor",
		enable: "Ativar",
		disable: "Desativar",
		finish: "Concluir",
		previous: "Anterior",
		next: "Avançar",
		schedule: "Planejamento",
		removeFromThisList: "Remover da Lista de Este",
		status: "Status",
		scheduledEndTime: "Horário de encerramento planejado",
		type: "Tipo",
		mode: "Mode",
		startTime: "Horário de início",
		createdBy: "Criada por",
		nextScheduledTime: "Próximo horário planejado",
		id: "ID",
		duration: "Média",
		repeatCycle: "Frequência",
		taskTypeName: "tipo de tarefa",
		to: "para",
		filter: "Filtrar:",
		error_message: "Mensagem de erro",

        file_type: "Tipo de Documento",
        word_template_name: "Nome do modelo de Word",
        excel_template_name: "Nome do modelo de Excel",
        powerpoint_template_name: "Nome do modelo de PowerPoint",
        template_description: "Descrição do Gabarito",
        action_add_template: "Incluir",
        action_change_template: "Editar",      
        action_edit_template_properties: "Propriedades",
        add_presentation_template: "Incluir modelo de apresentação",
    	add_spreadsheet_template: "Incluir modelo de planilha",
    	add_doc_template: "Incluir modelo de documento",    	
    	file_type_doc_hover: "Deve-se especificar um arquivo de modelo de documento de processamento de texto válido.<br><br>Tipos MIME válidos: ${0}",
    	file_type_doc_error: "Deve-se especificar um arquivo de modelo de documento de processamento de texto válido.<br><br>O tipo MIME de documento selecionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	file_type_presentation_hover: "Deve-se especificar um arquivo de modelo de apresentação válido.<br><br>Tipos MIME válidos: ${0}",
    	file_type_presentation_error: "Deve-se especificar um arquivo de modelo de apresentação válido.<br><br>O tipo MIME de documento selecionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	file_type_spreadsheet_hover: "Deve-se especificar um arquivo de modelo de planilha válido.<br><br>Tipos MIME válidos: ${0}",
    	file_type_spreadsheet_error: "Deve-se especificar um arquivo de modelo de planilha válido.<br><br>O tipo MIME de documento selecionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	office_online_only_one_template_error: "É possível selecionar somente um arquivo.",
    	change_presentation_template: "Editar Gabarito de Apresentação",
    	change_spreadsheet_template: "Editar modelo de planilha",
    	change_doc_template: "Editar modelo de documento",
    	change_button: "Editar",
	    new_document_dialog_doc_title: "Novo Documento",
	    new_document_dialog_presentation_title: "Nova apresentação",
	    new_document_dialog_spreadsheet_title: "Nova planilha",
	    new_document_dialog_title_label: "Título:",
	    new_document_dialog_title_hover: "Insira um título para esse documento.",
	    new_document_dialog_title_missing_message: "Deve-se especificar um título.",
	    office_online_save_before_adding_templates_title: "Salva mudanças no repositório",
	    office_online_save_before_adding_templates_error: "Não será possível incluir modelos do Office até que você salve as mudanças feitas no repositório. Clique em <b>Salvar e fechar</b> e, então, reabra a repositório para incluir os modelos do Office.",
	    copy_to_OOS_dialog_doc_title: "Novo Documento",
	    office_online_checkin_cancelcheckout_message: "Este documento está sendo editado no Microsoft Office Online. Não é possível verificar o documento ou cancelar o check-out enquanto ele estiver aberto no Microsoft Office Online.",
	    new_document_classification: "Classificação:",
	    new_document_classification_help: "Reconfigure a classe, propriedades e pasta pai, se existir, do documento de origem. Ao incluir um documento usando um modelo de entrada, o modelo de entrada do documento de origem será selecionado automaticamente, se existir. As propriedades do documento de origem são usadas como valores padrão, mas a pasta e a classe especificadas no modelo de entrada são preservadas.",
		new_document_classification_use_source_document: "Use o documento de origem:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Ícone de tipo de ${0}",
		repository_name_and_type: "Nome e tipo de ${0}",
		select_class_label: "Selecione ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Visualização de Detalhes",
		detail_view_button: "Detalhes",
		magazine_view_button_tooltip: "Visualização de Revista",
		magazine_view_button: "Revista",
		filmstrip_view_button_tooltip: "Visualizar Filmstrip",
		filmstrip_view_button: "Filmstrip",

		magazine_view_show: "Mostrar em Visualização de Revista",
		detail_view_show: "Mostrar em Visualização de Detalhes",

		total_count_item: "item",
		total_count_items: "itens",
		total_count_more_items: "Mais de ${0} itens",

		extension_changed: "A extensão do arquivo selecionado não corresponde à extensão do original.  Selecione um arquivo diferente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "O visualizador selecionado não suporta todos os tipos de arquivo. Se você salvar este mapeamento do visualizador, talvez encontre problemas ao visualizar documentos. Recomenda-se selecionar um visualizador que suporte todos os tipos de arquivo quando a opção Todos os tipos de arquivo estiver selecionada.<br><br><b>Dica:</b> os visualizadores a seguir suportam todos os tipos de arquivo:<ul><li>Visualizador de applet</li><li>Visualizador AJAX</li><li>Conversão em HTML</li><li>Conversão em PDF</li><li>Navegador da Web</li></ul>",
		file_type_any: "Todos os tipos de arquivos",
		file_type_any_hover: "Selecione essa opção se desejar usar o visualizador selecionado para visualizar todos os documentos, independentemente do tipo de arquivo. Esta opção é suportada para os seguintes visualizadores:<br><br><ul><li>Visualizador de applet</li><li>Visualizador AJAX</li><li>Conversão em HTML</li><li>Conversão em PDF</li><li>Navegador da Web</li></ul><br><br><b>Lembrete:</b> Se desejar usar visualizadores específicos a maior parte do tempo, todos os mapeamentos criados que usarem essa opção deverão ser movidos para o final do mapa do visualizador. ",
		file_type_input: "Novo tipo de arquivo:",

		mime_type_input: "Novo tipo MIME:",
		mime_type_input_invalid: "O novo tipo MIME não pode conter nenhum dos seguintes caracteres: ,",
		mime_type_available: "Tipos MIME Disponíveis",
		mime_type_selected: "Tipos MIME Selecionados",
		file_type_input: "Novo tipo de arquivo:",
		file_type_input_invalid: "O novo tipo de arquivo não pode conter nenhum dos caracteres a seguir: ,",
		file_type_available: "Tipos de arquivo disponíveis",
		file_type_selected: "Tipos de arquivos selecionados",
		file_type_header: "Tipo de arquivo",
		viewer: "Visualizador:",
		viewer_viewer: "Visualizador",
		viewer_view: "Visualizar",
		viewer_preview: "Visualizar",
		viewer_merge_and_split: "Mesclar e Dividir",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Visualizar somente",
		preview_only_label: "(pré-visualização)",
		preview_only_hover: "Esse mapeamento do visualizador será usado apenas quando um usuário clicar em <b>Visualizar</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Este repositório não suporta navegação. Selecione outro repositório.",

		repository_community_teamspace_message: "Outro repositório já está designado como o repositório da biblioteca da comunidade. Se você deseja continuar usando o repositório existente como o repositório da biblioteca de comunidade, selecione <b>Não</b> antes de salvar suas alterações para evitar que o repositório existente seja substituído por este repositório.",

		favorites_empty: "Você ainda não tem favoritos.",
		syncItems_empty: "Você não tem nenhum arquivo de sincronizado ainda.",

		root_folder_id: "ID da pasta raiz",
		unified_searches: "Procuras entre repositórios:",
		max_results: "Número de resultados:",
		direct_retrieve_enabled: "Recuperação direta:",
		itemTypesToDisplay: "Tipos de item para exibir:",
		allItemTypes: "Todos os Tipos de Item",
		include_attr_group_name: "Descrições do grupo de atributos nos nomes de exibição do atributo:",
		admin_repcfg_include_attr_group_name_hover: "Por padrão, a descrição do grupo de atributos está incluída nos nomes para os atributos do grupo de atributos. Isso ajuda os usuários a ver a qual grupo de atributos um atributo pertence ao trabalharem com atributos.<br>Por exemplo, o usuário pode ver o seguinte nome para um atributo do grupo de atributos: Document Settings.Document Type.<br><br>Se você desativar essa opção, apenas a descrição de atributo será usada para o nome do atributo do grupo de atributos.<br>Por exemplo, os usuários verão este nome: Document Type.<br><br>Sem a descrição de grupo de atributos, os usuários talvez não consigam determinar se o Document Type é o atributo simples ou um atributo de grupo de atributos.",
		documentItemTypesOnly: "Apenas Tipos de Item de Modelo de Documento",
		object_store: "Nome simbólico de armazenamento de objeto:",
		object_store_display_name: "Nome de exibição de armazenamento de objeto:",
		teamspaceUpgradeMsg: "Seus teamspaces serão atualizados quando você salvar a configuração do repositório. Se tiver muitos teamspaces, a atualização poderá levar vários minutos.",
		synchUpgradeMsg: "O módulo de sincronização neste repositório será atualizado quando a configuração for salva no repositório.",
		protocol: "Protocolo:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID de Repositório CMIS:",
		cmis_url: "URL de documento de serviço de ligação AtomPub CMIS:",
		trace_level: "Nível de rastreio",
		trace_dir: "Diretório de rastreio",
		temp_dir: "Diretório temporário",
		show_document_location: "Mostrar localização do documento",
		max_folders: "Máximo de pastas",
		afp_conversion: "Conversão de AFP",
		line_conversion: "Conversão de dados de linha",
		max_hits: "Máximo de ocorrências",
		folder_search_expresssion: "Expressão de Procura de pasta",
		max_item_types: "Máximo de tipos de itens",
		max_worklists: "Máximo de listas de trabalho",
		update_storage_collection: "Atualizar coleção de armazenamento",
		include_mime_types_in_search_results: "Incluir tipos MIME nos resultados da Procura",
		object_type: "Tipo de objeto",
		object_type_document: "Documentos",
		object_type_folder: "Pastas",
		file_label: "Arquivo:",
		plugin_jarfile_path_label: "Caminho do arquivo JAR:",
		plugin_classfolder_path_label: "Caminho do arquivo de classe:",
		plugin_classname_label: "Nome da classe:",
		plugin_id_label: "ID do plug-in:",
		class_label: "Classe",
		configuration: "Configuração",
		connect_repository: "Conectar...",
		server_type: "Tipo de Servidor",
		timeout_in_seconds: "Tempo limite (em segundos):",
		default_search_template: "Pesquisa padrão",
		search_filtered_properties: "Propriedades com capacidade de procura",
		property_contains_label: "A propriedade contém",
		class_contains_label: "Classe contém",
		search_filtered_operators: "Operadores de procura",
		default_search_results: "Resultados da procura",
		data_type: "Tipo de dado",
		status_bar: "Barra de Status",
		operators_for: "Operadores para:",
		currentUser: "Usuário atual",
		nameContains: "Nome contém",
		searchFor: "Procurar",
		server_autentication: "Autenticação de servidor (OAuth 2.0 com JWT)",
		standard_authentication: "Autenticação padrão (OAuth2.0 de 3 etapas)",
		developer_authentication: "Autenticação do desenvolvedor",
		enterprise_id: "ID corporativo:",
		public_key_id: "ID da chave pública:",
		private_key_path: "Caminho do arquivo de chave privado:",
		server_user_email: "E-mail do usuário do servidor",

		filter_builder_tooltip: "Definir Filtro",

		// Launch bar
		launchbar_home: "Abrir Página Inicial",
		launchbar_favorites: "Abrir Favoritos",
		launchbar_browse: "Abrir Visualização de Procura",
		launchbar_browse_popup: "Abrir Lista Pop-up de Procura",
		launchbar_search: "Abrir Visualização de Pesquisa",
		launchbar_search_popup: "Abrir Lista Pop-up de Pesquisa",
		launchbar_teamspaces: "Abrir Visualização de Espaços de Equipe",
		launchbar_teamspaces_popup: "Abrir Lista Pop-up de Espaços de Equipe",
		launchbar_work: "Abrir Visualização de Trabalho",
		launchbar_work_popup: "Abrir Lista Pop-up de Trabalhos",
		launchbar_entry_templates: "Abrir Visualização Modelos de Entrada",
		launchbar_entry_templates_popup: "Abrir Lista Pop-up Modelos de Entrada",
		launchbar_admin: "Abrir Visualização de Administração",

		admin_sync_server: "Serviços de sincronização",
		admin_settings: "Configurações",
		admin_interface_text: "Rótulos",
		admin_interface_text_desktop: "Área de trabalho:",
		admin_desktops: "Áreas de trabalho",
		admin_repositories: "Repositórios",
		admin_mobile: "Dispositivo móvel",
		admin_menus: "Menus",
		admin_reason_codes: "Razões de edição de dados",
		admin_plugins: "Plug-ins",
		admin_plugins_state_enabled: "O plug-in está ativado",
		admin_plugins_state_disabled: "O plug-in está desativado",
		admin_plugins_version: "Versão:",
		admin_plugins_version_heading: "Versão",
		admin_plugins_icon: "Ícone de plug-in",
		admin_viewer_mapping_icon: "Ícone de mapeamento de visualizador",
		admin_viewer_defs: "Mapas do visualizador",
		admin_viewer_dialog_title: "Mapeamento",
		admin_viewer_dialog_new_title: "Novo mapeamento",
		admin_viewer_dialog_instructions: "Um mapeamento especifica o visualizador a ser utilizada para os arquivos em um repositório. É possível criar diversos mapeamentos para especificar diferentes visualizadores para diferentes tipos de arquivos. É possível usar um tipo MIME ou uma extensão de arquivo para definir um mapeamento. Mapeamentos com extensões de arquivo serão mapeados para nomes de documentos. Por exemplo, um mapeamento com o tipo de arquivo configurado como gif será mapeado para nomes de documentos terminados com a extensão .gif",
		admin_desktop_viewer_defs: "Mapa do visualizador:",
		admin_desktop_viewer_defs_hover: "O mapa do visualizador especifica qual visualizador é usado para abrir diferentes tipos de documento no repositório.<br><br>É possível criar novos mapas do visualizador na seção <b>Mapas do Visualizador</b> da ferramenta de administração.",
		admin_desktops_used: "Usado em áreas de trabalho",
		admin_desktop_additional_settings: "Configurações adicionais:",
		admin_default_desktop: "Configurar como a área de trabalho padrão",
		admin_default_desktop_header: "Área de trabalho padrão",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Ícone da área de trabalho",

		// Themes
		admin_themes: "Temas",
		admin_theme_list_instructions: "Você pode criar um tema para facilitar a customizar o Web client para sua organização. Será possível criar vários temas se precisar utilizar diferentes cores, fontes ou logotipos para diferentes áreas em seu ambiente.<br><br>Depois de criar um tema, você pode aplicá-lo a uma área de trabalho configurando o tema na guia <b>Aparência</b> da área de trabalho.",
		admin_theme_instructions: "Crie um tema para controlar as cores e as fontes que são exibidas no Web client. Além disso, é possível usar o tema para mudar o logotipo, nome do aplicativo e o texto de copyright exibidos na página de login e no banner.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Novo tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Deseja excluir os temas selecionados ?\n${0} temas estão selecionados.",
		admin_theme_color: "Cor",
		admin_theme_text: "Texto",
		admin_theme_solid: "Sólido",
		admin_theme_gradient: "Gradiente",
		admin_theme_box: "Caixa",
		admin_theme_color_label: "Cor ${0}:",
		admin_theme_name_invalid: "O nome do tema não pode conter nenhum dos seguintes caracteres: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "O ID do tema deve ser exclusivo e não é possível alterá-lo depois de salvar o tema.<br><br>O ID pode conter apenas caracteres alfanuméricos.",
		admin_theme_name_hover: "O nome não pode conter os seguintes caracteres: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automático",
		admin_theme_logo_url_hover: "Insira a URL do arquivo de logotipo. Se o logotipo estiver no mesmo servidor de aplicativos da web que o Web client, insira uma URL relativa, por exemplo: /mycustomizations/banner_logo.png<br><br>É recomendado que o logotipo tenha um segundo plano transparente.",
		admin_theme_color_palette_title_heading: "Paleta de cores",
		admin_theme_color_palette_help_text: "Crie a paleta de cores para seu tema usando o valor hexadecimal ou o selecionador de cor. Você pode incluir quantas cores como desejar.",
		admin_theme_color_add_button_label: "Incluir cor",
		admin_theme_color_remove_button_label: "Remover cor",
		admin_theme_global_title_heading: "Elementos de todo o aplicativo",
		admin_theme_global_font: "Família da fonte:",
		admin_theme_global_font_hover: "Selecione a fonte a ser utilizada no Web client. As fontes estão listadas na ordem de precedência; a fonte na lista será utilizado apenas se a fonte anterior não está instalado na máquina do cliente.",
		admin_theme_global_framework_color_label: "Cor da estrutura:",
		admin_theme_global_framework_color_hover: "Selecione a cor a ser utilizada para os seguintes elementos:<ul><li>Título barras nas caixas de diálogo</li><li>A cor de realce na parte superior da guia selecionada</li><li>Os ícones de visualização de lista de conteúdos (Detalhes visualização Abrangente visualização, visualização de filmstrip)</li></ul><br>Esta cor não é utilizado para os separadores entre as seções do Web client. Se desejar alterar a cor dos separadores, deve-se criar um plug-in para fornecer um arquivo CSS personalizado.",
		admin_theme_color_global_toolbar: "Cor da barra de ferramentas global:",
		admin_theme_color_global_toolbar_hover: "Se você incluir a barra de ferramentas global no Web client, selecione a cor da barra de ferramentas.<br><br><b>Dica:</b> A barra de ferramentas é exibida no banner na parte superior do Web client, portanto, a cor da barra de ferramentas deve complementar a cor do banner.",
		admin_theme_global_selected_color: "Cor do item selecionado:",
		admin_theme_global_selected_color_hover: "Selecione a cor a ser utilizada quando os itens são selecionados na árvore de navegação,, a árvore de procura e a lista de conteúdos.<br><br>A cor passe (a cor utilizada quando um usuário passa sobre um item) é derivado a partir dessa cor.",
		admin_theme_global_link_color: "Cor do link:",
		admin_theme_global_link_color_hover: "Selecione a cor a ser utilizada para todas as URLs clicável no Web client. Por exemplo, essa cor é utilizada em Aprender mais links que são exibidos em todo o Web client.",
		admin_theme_login_title_heading: "Elementos da página de login",
		admin_theme_page_background_label: "Cor do plano de fundo da página de login:",
		admin_theme_login_page_background_hover: "Selecione a cor a ser exibida atrás da área de janela de login.",
		admin_theme_login_pane_background_label: "Cor do plano de fundo da área de login:",
		admin_theme_login_pane_background_hover: "Selecione uma cor a ser exibido para o painel de login. Esta cor deve complementar a cor do plano de fundo da página de login.",
		admin_theme_text_color: "Cor do texto:",
		admin_theme_login_pane_text_color_hover: "Selecione uma cor a ser utilizada para o texto da área de login. Essa é a cor utilizada para o texto de boas-vindas e rótulos de campo. Esta cor deve ser legível contra a cor do plano de fundo da área de login.",
		admin_theme_copyright_text: "Texto de copyright:",
		admin_theme_copyright_text_hover: "Especifique se deseja exibir o texto de copyright na página de login.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Nenhum texto de copyright",
		admin_theme_banner_title_heading: "Elementos de banner",
		admin_theme_text_icons_color: "Texto e cor do ícone:",
		admin_theme_icon_color_label: "Cor do ícone:",
		admin_theme_shadow_label: "Sombra:",
		admin_theme_banner_text_icons_hover: "Selecione uma cor a ser utilizada para o texto e ícones no banner. Esta cor deve ser legível contra a cor do plano de fundo do banner.",
		admin_theme_banner_product_name_label: "Nome do produto:",
		admin_theme_banner_product_name_hover: "Ao criar uma área de trabalho, você pode especificar um nome customizado a ser exibido para o aplicativo. Se você não especificar um nome customizado, o IBM Content Navigator é utilizado como o nome do produto. Especifique se utilizar o nome do aplicativo que é definido na área de trabalho ou de ma imagem no lugar de um nome.",
		admin_theme_banner_product_name_desktop_defined_label: "Usar nome a partir da área de trabalho",
		admin_theme_banner_product_name_image: "Usar logotipo customizado (URL)",
		admin_theme_background_color_label: "Cor do plano de fundo:",
		admin_theme_style_label: "Estilo:",
		admin_theme_banner_color_hover: "Selecione uma cor a ser utilizada para o banner na parte superior do aplicativo.<br><br><b>Dica:</b> Certifique-se de que a cor do texto no banner seja legível contra a cor do plano de fundo do banner.",
		admin_theme_buttons_title_heading: "Botões",
		admin_theme_navigation_title_heading: "Elementos de navegação",
		admin_theme_navigation_icon_selected_label: "Cor do ícone selecionado:",
		admin_theme_navigation_background_hover: "Selecione uma cor a ser utilizada para o segundo plano da barra de navegação do recurso.",
		admin_theme_navigation_icon_color_hover: "Selecione uma cor a ser utilizada para os ícones na barra de navegação de recursos. Ao usar o layout padrão em uma área de trabalho, esta cor deve contrastar com o plano de fundo do menu suspenso do recurso. Ao usar o layout clássico em uma área de trabalho, essa cor deve contrastar com o plano de fundo da barra de navegação do recurso.",
		admin_theme_navigation_icon_selected_hover: "Selecione uma cor a ser utilizada para o recurso selecionado na barra de navegação de recursos. A cor deve complementar a cor dos ícones e a cor do plano de fundo da barra de navegação do recurso.<br><br>Ao usar o layout clássico em uma área de trabalho, esta cor é usada como uma cor de ajuda instantânea na barra de navegação do recurso.",
		admin_theme_button_background_color_hover: "Selecione uma cor a ser utilizada para o botão de segundo plano.",
		admin_theme_button_style_hover: "Selecione um estilo de botão.",
		admin_theme_button_text_icon_color_hover: "Selecione uma cor a ser utilizada para texto e imagens nos botões.",
		admin_theme_no_logo_label: "Nenhum logotipo",
		admin_theme_custom_logo_label: "Logotipo customizado (URL)",
		admin_theme_banner_type: "Estilo de preenchimento do banner:",
		admin_theme_banner_type_hover: "Especifique se o banner deve ter uma cor sólida ou um cor de gradiente. Se você especificar um banner gradiente, a cor que você especifica para a cor do banner é a cor mais escura no banner.<br><br><b>Dica:</b> Certifique-se de que a cor do texto no banner seja legível contra a cor do plano de fundo do banner.",
		admin_theme_icon: "Ícone de tema",
		admin_theme_buttons_and_links_title_heading: "Botões, campos e links",
		admin_theme_button_style_label: "Estilo do botão:",
		admin_theme_theme_style_label: "Estilo do tema:",
		admin_theme_theme_style_hover: "Selecione o estilo no qual basear o tema. É possível mudar o estilo em qualquer momento ao criar ou editar um tema. Quando você muda de um estilo para outro, as configurações de tema são reconfiguradas para os valores padrão.",
		admin_theme_accent_color_label: "Cor do acento:",
		admin_theme_accent_color_hover: "Selecione a cor a ser usada para a barra na parte superior de um diálogo e para o spinner de carregamento.",
		admin_theme_global_toolbar_text_color_label: "Cor do texto da barra de ferramentas global:",
		admin_theme_global_toolbar_text_color_hover: "Se você incluir a barra de ferramentas global no Web client, selecione a cor a ser usada para o texto na barra de ferramentas.",
		admin_theme_banner_text_color_hover: "Selecione a cor a ser usada para o texto no banner.",
		admin_theme_banner_icon_color_hover: "Selecione a cor a ser usada para os ícones no banner.",
		admin_theme_button_color_label: "Cor:",
		admin_theme_button_color_hover: "Selecione a cor a ser utilizada para os seguintes elementos:<ul><li>Título barras nas caixas de diálogo</li><li>A cor de realce na parte superior da guia selecionada</li><li>Os ícones de visualização de lista de conteúdos (Detalhes visualização Abrangente visualização, visualização de filmstrip)</li><li>Botões, campos e links</li></ul>A cor usada quando um usuário passa o mouse sobre um botão é derivada dessa cor. Esta cor não é utilizado para os separadores entre as seções do Web client. Se desejar alterar a cor dos separadores, deve-se criar um plug-in para fornecer um arquivo CSS personalizado.",
		admin_theme_theme_style_col_header: "Estilo de tema",

		admin_syncserver_consistency_checker: "Verificador de consistência:",
		admin_syncserver_consistency_checker_hover: "Execute o verificador de consistência para assegurar que os bancos de dados de serviço de sincronização tem informações atuais sobre o status de cada item que está no servidor. Por exemplo, execute o verificador de consistência após uma interrupção do banco de dados de serviços de sincronização para obter informações sobre documentos que foram atualizados no repositório durante a interrupção.",
		admin_syncserver_consistency_checker_button: "Executar o Verificador de Consistência",
		admin_syncserver_consistency_checker_started: "Iniciado:",
		admin_syncserver_consistency_checker_ended: "Finalizado:",
		admin_syncserver_consistency_checker_duration: "Duração:",
		admin_syncserver_consistency_checker_items_processed: "Itens de sincronização processados:",
		admin_syncserver_consistency_checker_items_processed_success: "Itens sincronizados processados com êxito:",
		admin_syncserver_consistency_checker_items_discovered: "Novos itens do repositório descobertos:",
		admin_syncserver_consistency_checker_change_updates: "Total de atualizações:",
		admin_syncserver_consistency_checker_state: "Status:",
		admin_syncserver_consistency_checker_state_done: "Pronto",
		admin_syncserver_consistency_checker_state_running: "Em Execução",
		admin_syncserver_consistency_checker_user: "Submetido por:",
		admin_syncserver_consistency_checker_scheduled: "Planejado:",

		admin_syncserver_dbcleanup: "Limpeza de Banco de Dados",
		admin_syncserver_dbcleanup_hover: "Execute a ferramenta de limpeza do banco de dados para remover quaisquer dispositivos não utilizados e itens que não estão mais sincronizadas do banco de dados.",
		admin_syncserver_dbcleanup_button: "Limpeza de Banco de Dados",
		admin_syncserver_dbcleanup_state_done: "Pronto",
		admin_syncserver_dbcleanup_state_running: "Em Execução",
		admin_syncserver_dbcleanup_started: "Iniciado:",
		admin_syncserver_dbcleanup_ended: "Finalizado:",
		admin_syncserver_dbcleanup_state: "Status:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Repositórios excluído:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Item sincronizado excluído:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Dispositivos excluídos:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Dispositivos expirados:",

		admin_syncserver_publicSyncUrl: "URL pública de serviços de sincronização:",
		admin_syncserver_publicSyncUrl_hover: "Especifique a URL por meio da qual os repositórios podem se comunicar com o IBM Content Navigator serviços de sincronização. O formato padrão da URL é http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Configurações de Sincronização do Cliente",
		admin_syncserver_managed_hover: "Os usuários não podem alterar essas configurações no cliente do IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Níveis de pasta a sincronizar",
		admin_syncserver_managed_subfolder_hover: "Se um usuário sincronizar uma pasta, especifique o número máximo de pastas que serão sincronizadas. Por exemplo, se um usuário especificar três níveis de pasta, a pasta que o usuário sincronizar e dois níveis de subpastas serão sincronizados.<br><br>Assegure-se de que seu ambiente esteja escalado para suportar a quantidade de tráfego de sincronização criada por essa configuração.",
		admin_syncserver_managed_subfolder_all: "Todas as subpastas",
		admin_syncserver_managed_subfolder_none: "Nenhuma subpasta",
		admin_syncserver_managed_subfolder_no_more: "Níveis limitados",
		admin_syncserver_managed_subfolder_levels: "pastas",
		admin_syncserver_managed_schedule: "Planejamento de sincronização",
		admin_syncserver_managed_schedule_hover: "Assegure-se de que seu ambiente esteja escalado para suportar a quantidade de tráfego de sincronização criada por esse planejamento de sincronização.<br><br>O intervalo máximo é de 24 horas ou 1440 minutos.<br><br>Os usuários podem substituir o planejamento de sincronização clicando em <b>Sincronizar agora</b> no cliente.",
		admin_syncserver_managed_schedule_manual: "Sincronizar manualmente",
		admin_syncserver_managed_schedule_continuous: "Sincronizar continuamente",
		admin_syncserver_managed_schedule_every: "Sincronizar em intervalos especificados",
		admin_syncserver_managed_schedule_minutes: "Minutos",
		admin_syncserver_managed_schedule_hours: "Horas",

		// redaction codes
		admin_new_reason_code: "Nova razão de edição de dados",		
		admin_reason_code_name_invalid: "O nome da razão de edição de dados não pode conter nenhum dos caracteres a seguir: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "A descrição não pode conter nenhum dos caracteres a seguir: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "A descrição não pode conter nenhum dos caracteres a seguir: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "O nome não pode conter nenhum dos seguintes caracteres: * \\ /: ? \" &lt; &gt; |",
		admin_reason_code_description: "Descrição:",
		admin_reason_code_applications_hover: "A lista de aplicativos Datacap que estão referenciando esta razão de edição de dados.",
		admin_reason_code_applications: "Aplicativos Datacap",
		admin_delete_confirmation_reason_codes: "Deseja excluir as razões de edição de dados selecionadas?",
		admin_delete_confirmation_reason_code: "Deseja excluir a razão de edição de dados selecionada?",
		admin_reason_code_heading: "Razão de edição de dados: <b>${0}</b>",
		admin_reason_code_list_instructions: "As razões de edição de dados indicam por que os dados sensíveis estão protegidos obscurecendo-os da visualização. Cada razão identifica um tipo de dados sensíveis oculto dos usuários gerais.",
		admin_reason_code_instructions: "É possível criar uma razão de edição de dados para cada tipo de dados sensíveis. É possível usar essa razão em uma política de edição de dados para definir quem pode ver esses dados e quem pode criar ou modificar as edições de dados.",
		admin_reason_code_applications_label: "Aplicativos Datacap",
		admin_reason_code_repositories: "Repositórios",
		admin_reason_code_repositories_label: "Repositórios",
		admin_reason_code_repositories_hover: "A lista de repositórios do ICN que estão referenciando esta razão de edição de dados.",
		admin_reason_code_repositories_default_value: "Não configurado",
		admin_reason_code_description_label: "Descrição",
		admin_reason_code_applications_default_value: "Não configurado",
		admin_redaction_reasons: "Razões de edição de dados",
		admin_redactions: "Edições de dados baseadas em função",
		admin_redactions_policies_roles: "Políticas e funções",
		admin_reasons: "Razões",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "O ID não pode ser editado.  Ele pode ser copiado para a área de transferência",
		// Role based administration
		admin_rba: "Administração de área de trabalho baseada em função",
		admin_rba_mobile_access_enabled: "Esta área de trabalho está ativada para acesso por dispositivo móvel.",
		admin_rba_mobile_access_disabled: "Esta área de trabalho não está ativada para acesso por dispositivo móvel.",
		admin_rba_confirm_delete_multiple: "Deseja excluir as funções de administração selecionadas?",
		admin_rba_confirm_delete_single: "Deseja excluir a função de administração selecionada?",
		admin_rba_delete_multi_role_desktop: "Uma ou mais das funções selecionadas está designada a uma área de trabalho. Remova as funções de áreas de trabalho antes de poder excluí-las.",
		admin_rba_delete_single_role_desktop: "A função selecionada está designada à área de trabalho ${0}. Remova a função da área de trabalho antes de poder excluí-la.",
		admin_desktop: "Área de Trabalho",
		admin_rba_instructions: "É possível criar e gerenciar funções de administração da área de trabalho, que associam privilégios concedidos para administradores da área de trabalho.",
		admin_rba_not_used: "${0} não é usado em nenhuma área de trabalho.",
		admin_rba_desktops: "<b>${0} é usado nas áreas de trabalho a seguir:</b>",
		admin_rba_new_role: "Nova Função",
		admin_rba_name_invalid: "O nome da função de administração não pode conter nenhum dos caracteres a seguir: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "A descrição não pode conter nenhum dos caracteres a seguir: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "A descrição não pode conter nenhum dos caracteres a seguir: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "O nome não pode conter nenhum dos seguintes caracteres: * \\ /: ? \" &lt; &gt; |",
		admin_rba_description: "<b>Descrição:</b> ${0}",
		admin_rba_membership: "Associação",
		admin_rba_general_priv: "Gerais",
		admin_rba_appearance_priv: "Aparência",
		admin_rba_desktop_config_priv: "Configuração da área de trabalho",
		admin_rba_app_name_priv: "Nome do aplicativo",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Mapa do visualizador",
		admin_rba_merge_split_priv: "Mesclar e Dividir",
		admin_rba_sync_svc_priv: "Serviços de sincronização",
		admin_rba_menus_priv: "Menus",
		admin_rba_edit_svc_priv: "Editar serviços",
		admin_rba_toolbars_priv: "Barras de Ferramentas",
		admin_rba_ctx_menus_priv: "Menus de contexto",
		admin_rba_office_ribbon_priv: "Comandos da barra da faixa de opções do MS Office",
		admin_rba_office_menues_priv: "Menus de contexto do MS Office",
		admin_rba_addl_settings_priv: "Configurações Adicionais",
		admin_rba_mobile_priv: "Dispositivo móvel",
		admin_rba_add_doc_dlg_priv: "Diálogo Incluir Documento",
		admin_rba_doc_mgmt_priv: "Document Management",
		admin_rba_def_redaction_priv: "Opção de edição de dados padrão",
		admin_rba_add_photos_priv: "Incluam fotos da câmera e da biblioteca de fotos",
		admin_rba_time_stamp_priv: "Formato de data e hora",
		admin_rba_add_docs_folders_priv: "Incluam documentos e criar pastas no repositório",
		admin_rba_open_docs_priv: "Abram documentos em outros aplicativos",
		admin_rba_office_config_priv: "Configuração do Office",
		admin_rba_tab_label_priv: "Rótulo de guia do IBM ECM",
		admin_rba_feature_sel_priv: "Seleção de Recurso",
		admin_rba_general_config_priv: "Configuração geral",
		admin_rba_favorites_priv: "Favoritos",
		admin_rba_add_options_priv: "Incluir opções no grupo de Edição",
		admin_rba_browse_priv: "Pesquisar",
		admin_rba_outlook_int_priv: "Integração do Outlook",
		admin_rba_search_priv: "Procurar",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Caso",
		admin_rba_desktop_feat_priv: "Recursos da área de trabalho",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Recursos exibidos",
		admin_rba_branding_priv: "Marca",
		admin_rba_home_priv: "Início",
		admin_rba_main_color_priv: "Cor principal",
		admin_rba_sec_color_priv: "Cor secundária",
		admin_rba_teamspaces_priv: "Espaços de equipe",
		admin_rba_rbr_priv: "Edição de dados baseada em função",
		admin_rba_et_mgr_priv: "Gerenciador de modelo de entrada",
		admin_rba_policies_roles_priv: "Gerenciar políticas e funções",
		admin_rba_work_priv: "Trabalho",
		admin_rba_reasons_priv: "Códigos de razão",
		admin_rba_tasks_priv: "Tarefas Assíncronas",
		admin_rba_auth_priv: "Autenticação",
		admin_rba_all_privs: "Todos os privilégios",
		admin_rba_some_privs: "Alguns privilégios",
		admin_rba_no_privs: "Sem privilégios",
		admin_add_users_groups_priv: "Incluir usuários e grupos",
		admin_url_features_priv: "Gerenciar recursos de URL",
		admin_plugin_features_priv: "Gerenciar recursos de plug-in",
		admin_addl_components_priv: "Componentes Adicionais",
		admin_global_toolbar_priv: "Barra de ferramentas global",
		admin_status_bar_priv: "barra de status",
		admin_refresh_message: "Deve-se atualizar seu navegador para usar os dados atualizados.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Deve-se atualizar o navegador para usar a área de trabalho padrão atualizada.",
		admin_desktop_refresh_message: "Deve-se atualizar seu navegador para usar a área de trabalho atualizada.",
		admin_action_open: "Abrir",
		admin_action_edit: "Editar",
		admin_action_copy: "Copiar",
		admin_action_delete: "Excluir",
		admin_action_copy: "Copiar",
		admin_action_new: "Criar Novo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Este ID já está em uso. Deve-se especificar um ID exclusivo.",

		admin_searchable_properties_for: "Propriedades pesquisáveis para:",
		admin_repository_new: "Novo Repositório",
		admin_desktop_new: "Nova Área de Trabalho",
		admin_desktop_file_documents: "Pedir aos usuários que salvem novos documentos e pastas em uma pasta",
		admin_desktop_file_documents_hover: "Selecione essa opção se desejar requerer que os usuários selecionem uma pasta ao incluir itens no repositório. Se você não selecionar essa opção, os usuários poderão incluir documentos (IBM FileNet P8) ou documentos e pastas (IBM Content Manager) sem os arquivos em uma pasta.",
		admin_desktop_show_security_tab: "Mostrar configurações de segurança durante as ações incluir e efetuar check-in",
		admin_desktop_show_security_hover: "<b>Apenas usuários do IBM FileNet P8.</b>  Selecione esta opção se desejar permitir que usuários editem a segurança de documentos e pastas ao incluir ou efetuar o itens nesta área.",
		admin_desktop_configure_security_inheritance: "Permitir que os usuários configurem a herança de segurança de pastas",
		admin_desktop_configure_security_inheritance_hover: "<b>Apenas usuários do IBM FileNet P8.</b>  Selecione esta opção se desejar que os usuários customizem o acesso a itens em uma pasta, controlando a herança de segurança das pastas. Se você selecionar essa opção, os usuários poderão especificar se usuários e grupos podem herdar a segurança de:<ul><li>Uma pasta</li><li>Uma pasta e suas subpastas imediatas</li><li>Uma pasta e todas as suas subpastas</li></ul>",
		admin_desktop_appearance: "Aparência",
		admin_desktop_appearance_instruction: "É possível customizar a aparência da área de trabalho alterando a página de login e banner que são exibidos para a área de trabalho.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "O layout especifica quais recursos podem ser exibidos no Web client e como o conteúdo do Web client é organizado.<br><br><b>Dica:</b> É possível definir layouts customizados criando plug-ins. Deve-se registrar o plug-in na ferramenta de administração para que você possa selecionar um layout customizado.",
		admin_desktop_layout_default: "Padrão",
		admin_desktop_layout_custom: "Customizada",
		admin_desktop_enable_workflow_email: "Ativar esta área de trabalho para notificação por email do fluxo de trabalho do FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Apenas para usuários do FileNet P8. Selecione essa opção se desejar permitir que usuários abram o Web client a partir das URLs que estão incluídas nas notificações por email que são geradas pelo Process Engine.<br /><br />Se você não ativar essa opção para nenhuma área de trabalho, os usuários não poderão efetuar login no Web client a partir das URLs nas notificações.<br /><br />Se você ativar essa opção em diversas áreas de trabalho e mais de uma área de trabalho atender aos critérios que estão especificados na URL na notificação, o Web client usa a primeira área de trabalho que corresponder aos critérios. ",
		admin_desktop_prevent_create_new_search: "Impedir os usuários de criar procuras",
		admin_desktop_prevent_create_new_search_hover: "Esta opção restringe os usuários a usar apenas as procuras existentes e os impede de criar uma procura em aberto que pode não estar otimizada.</br></br>Essa configuração não afeta teamspaces. O direito de criar procuras em um teamspace é controlado pela função que um usuário tem em um determinado teamspace.",
		admin_desktop_prevent_create_new_unified_search: "Impedir usuários de criar procuras entre repositórios",
		admin_desktop_prevent_create_new_unified_search_hover: "Esta opção restringe os usuários a usarem apenas as procuras entre repositórios existentes e os impede de criar procuras entre repositórios abertos ilimitados que podem não ser otimizadas.",
		admin_desktop_hide_entry_template_not_found_warning: "Ocultar o aviso que é exibido quando o modelo de entrada associado não é localizado",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Selecione esta opção se desejar ocultar a mensagem de aviso exibida quando as propriedades do item são editadas e o modelo de entrada associado ao item não for localizado.",
		admin_desktop_show_class_role_security_selection: "Permitir que os usuários configurem a segurança baseada em função em modelos de entrada",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Apenas usuários do IBM FileNet P8.</b> Selecione esta opção se desejar que os usuários configurem modelos de entrada para usar a segurança baseada em função ao configurar a segurança em documentos e/ou pastas usando modelos de entrada. Se você selecionar essa opção, os editores de modelo de entrada poderão especificar se os objetos de segurança de função serão aplicados a uma definição de modelo de entrada.",
		admin_desktop_show_primary_multi_part: "Abrir somente o documento primário no visualizador",
		admin_desktop_show_primary_multi_part_hover: "<b>Apenas usuários do IBM FileNet P8.</b> Selecione esta opção se desejar somente o arquivo do documento primário aberto no visualizador. Os documentos podem ter múltiplos arquivos associados a eles. Essa opção abrirá somente o arquivo principal associado ao documento.",
		admin_desktop_redaction_save_mode: "Opção de edição de dados padrão:",
		admin_desktop_redaction_save_mode_hover: "Selecione o modo de salvamento de edição de dados do visualizador ViewONE Virtual padrão:</br>* Sempre perguntar ao usuário para escolher: fará com que o diálogo seja mostrado na entrada no modo de edição de dados, para perguntar ao usuário se ele deseja efetuar check-in como nova versão, criar novo documento ou fazer download do conteúdo.</br>* Efetuar check-in como nova versão: sempre salvará o conteúdo com dados editados de volta para uma nova versão do documento existente.</br>* Salvar como um documento totalmente novo: sempre salvará o conteúdo com dados editados de volta como um documento totalmente novo.</br>* Fazer download e salvar no cliente: fará download do conteúdo com dados editados no sistema do cliente.",
		admin_desktop_redaction_save_mode_user_select: "Sempre perguntar ao usuário para escolher",
		admin_desktop_redaction_save_mode_new_version: "Efetuar check-in como nova versão",
		admin_desktop_redaction_save_mode_new_document: "Salvar como um documento totalmente novo",
		admin_desktop_redaction_save_mode_local_content: "Fazer download e salvar no cliente",

		admin_desktop_document_add_mode: "Incluir caixa de diálogo do documento:",
		admin_desktop_document_add_mode_hover: "Especifique a caixa de diálogo Incluir para ser usada ao incluir documentos criados pelo IBM Content Navigator:<ul><li>Novo documento editado permanentemente</li><li>Novo documento mesclado e dividido</li><li>Novo documento do Microsoft Office</li><li>Novo documento do serviço de edição</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Incluir Documento",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Incluir Documento Usando o Modelo de Entrada",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Mesclar e Dividir:",
		admin_desktop_merge_and_split_enable_hover: "Especifique se deseja que os usuários que acessam esta área de trabalho possam mesclar e dividir documentos usando um visualizador de apoio.",

		admin_desktop_merge_and_split_show_checkin: "Solicite que os usuários forneçam valores da propriedade quando verificarem mudanças em um documento.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Ao selecionar essa opção, o diálogo de check-in será exibido quando os usuários efetuarem check-in de mudanças em um documento no modo Mesclar e Dividir.",

		admin_desktop_available_categories: "Recursos Disponíveis",
		admin_desktop_selected_categories: "Recursos Selecionados",

		admin_layout_banner_title: "Banner e página de login",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Nome do aplicativo:",
		admin_desktop_application_name_hover: "Especifique o nome do aplicativo a ser exibido no banner.<br><br>Dica: defina o nome do aplicativo para outros idiomas na guia Rótulos/Rótulos da área de trabalho.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Especifique se utilizar o tema padrão do IBM Content Navigator ou para utilizar um tema personalizado para esta área de trabalho. Para usar um tema customizado, deve-se criar um tema na seção <b>Temas</b> da ferramenta de administração.",
		admin_desktop_login_logo: "Logotipo de página de login:",
		admin_desktop_login_logo_hover: "Se deseja alterar o logotipo exibido na página de login, é possível especificar a URL de um arquivo de logotipo. No entanto, é recomendado que você utilize um tema customizado para alterar o logotipo.",
		admin_desktop_login_logo_url_hover: "Insira a URL do arquivo de logotipo. Se o logotipo estiver no mesmo servidor de aplicativos da web que o Web client, insira uma URL relativa, por exemplo: /mycustomizations/login_logo.png<br><br>O logotipo não deve ser maior que 200 pixels de largura e 150 pixels de altura.<br><br>É recomendado que o logotipo tenha um segundo plano transparente.",
		admin_desktop_banner_logo: "Logotipo do banner:",
		admin_desktop_banner_logo_hover: "Se desejar alterar o logotipo exibido no banner, é possível especificar a URL de um arquivo de logotipo. No entanto, é recomendado que você utilize um tema customizado para alterar o logotipo.",
		admin_desktop_banner_logo_url_hover: "Insira a URL do arquivo de logotipo. Se o logotipo estiver no mesmo servidor de aplicativos da web que o Web client, insira uma URL relativa, por exemplo: /mycustomizations/banner_logo.png<br><br>O logotipo não deve ser maior que 72 pixels de largura e 36 pixels de altura.<br><br>É recomendado que o logotipo tenha um segundo plano transparente.",
		admin_desktop_banner_background_color: "Cor de plano de fundo do banner:",
		admin_desktop_banner_background_color_hover: "Se desejar alterar a cor do plano de fundo do banner, é possível especificar uma cor customizada. No entanto, é recomendado que você utilize um tema customizado para alterar a cor do banner.",
		admin_desktop_banner_background_color_custom_hover: "Especifique a cor do banner do aplicativo como uma cor hexadecimal.",
		admin_desktop_banner_application_name_color: "Cor do texto do nome do aplicativo:",
		admin_desktop_banner_application_name_color_hover: "Se desejar alterar a cor do nome do aplicativo, é possível especificar uma cor customizada. No entanto, é recomendado que você utilize um tema customizado para alterar a cor do nome do aplicativo.",
		admin_desktop_banner_application_name_color_custom_hover: "Especifique a cor do nome do aplicativo como uma cor hexadecimal.",
		admin_desktop_banner_menu_color: "Cor do ícone do banner:",
		admin_desktop_banner_menu_color_hover: "Se você alterar a cor do plano de fundo do banner, pode ser necessário alterar o esquema de cores dos ícones no banner para torná-los mais visíveis. Especifique se exibida a versão clara ou escura dos ícones do banner.<br><br>No entanto, é recomendado que você utilize um tema customizado para alterar a cor dos ícones.",
		admin_desktop_login_page_content: "Conteúdo de página de login:",
		admin_desktop_login_page_content_hover: "Se desejar exibir informações adicionais na página de login, como comunicados sobre interrupções do sistema ou onde os usuários podem obter ajuda com nomes de usuários e senhas, é possível especificar a URL do conteúdo que deseja exibir.",
		admin_desktop_login_page_content_url_hover: "Insira a URL do conteúdo da página de login. Se o conteúdo estiver no mesmo servidor de aplicativos da web que o Web client, insira uma URL relativa, por exemplo: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Regras de senha:",
		admin_desktop_password_rules_hover: "Se deseja fornecer aos usuários orientações para criação de senhas, como caracteres restritos ou o número mínimo de caracteres, é possível especificar a URL de uma página que contenha suas regras de senha.",
		admin_desktop_password_rules_url_hover: "Insira a URL do conteúdo das regras de senha. Se o conteúdo estiver no mesmo servidor de aplicativos da web que o Web client, insira uma URL relativa, por exemplo: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL de ajuda do usuário final:",
		admin_desktop_help_url_hover: "Você pode usar a ajuda que é enviada com o IBM Content Navigator, ou pode redirecionar os usuários para o conteúdo de ajuda customizado executando uma das ações a seguir:<br><br><ul><li>Direcionando para um sistema de ajuda customizado</li><li>Incluindo a ajuda na instância do IBM Knowledge Center que é implementado com o IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Insira a URL do sistema de ajuda customizado. O IBM Content Navigator anexa index.jsp?content=/com.ibm.usingeuc.doc/ e um nome de arquivo ao final da URL especificada.  Para os links \"Saiba Mais\" na interface funcionarem, o sistema de ajuda deve usar os mesmos nomes de arquivo que a ajuda do usuário final integrada. ",
		admin_desktop_deprecated_appearance_title: "Configurações descontinuadas",
		admin_desktop_deprecated_appearance_instructions: "Se você usar um tema customizado, essas configurações serão substituídas pelo tema customizado. Deve-se migrar essas configurações para um tema customizado, que fornece estilo mais detalhado do que as configurações desta seção. Além disso, um tema customizado pode ser usado por várias áreas de trabalho.",

		admin_desktop_plugins_title: "Ative ou desative plug-ins para esta área de trabalho.",
		admin_desktop_plugins_enable_all_plugins: "Ativar todos os plug-ins implementados para uso com esta área de trabalho",
		admin_desktop_plugins_select_plugins: "Selecionar os plug-ins implementados a serem ativados para uso com esta área de trabalho",
		admin_desktop_plugins_select_plugin: "Selecionar plug-in",

		admin_desktop_layout_features: "Recursos exibidos:",
		admin_desktop_layout_features_hover: "Selecione os recursos que você deseja que os usuários tenham acesso a partir desta área. Os recursos são exibidos na ordem em que são listados.<br><br>Quando você seleciona um recurso, você pode customizar alguns dos comportamentos do recurso na área de trabalho, como o repositório padrão que é selecionado para o recurso.",
		admin_desktop_layout_default_repository: "Repositório padrão:",
		admin_desktop_layout_default_repository_layout_hover: "Especifique qual repositório será selecionado por padrão quando os usuários abrir este recurso.",
		admin_desktop_layout_document_thumbnails: "Miniaturas de documento:",
		admin_desktop_layout_document_thumbnails_hover: "Especifique se serão exibidas miniaturas para os documentos na área de janela Informações do Documento.<br><br>exibição de miniaturas pode reduzir o desempenho do Web client.",
		admin_desktop_layout_show_filmstrip_view: "Visualizar de filmstrip:",
		admin_desktop_layout_show_filmstrip_view_hover: "Especifique se os usuários devem ter permissão para alternar a exibição da lista de conteúdos para a visualização de filmstrip.<br><br>A visualização de filmstrip gera uma visualização de cada documento que um usuário seleciona. No entanto, usar a visualização pode reduzir o desempenho do Web client. Além disso, deve-se configurar o visualizador de conversão HTML para ver visualizações de documentos.",
		admin_enabled: "Ativar",
		admin_disabled: "Desativar",
		admin_include: "Incluir",
		admin_exclude: "Excluir",
		admin_layout_teamspaces_default_repository: "Espaços de Equipe:",
		admin_layout_entry_templates_default_repository: "Modelos de entrada:",
		admin_layout_other_features_default_repository: "Procurar e Pesquisar:",
		admin_layout_work_default_repository: "Trabalho:",
		admin_layout_default_feature: "Recurso padrão:",
		admin_default_category_placeholder: "Selecione um recurso",
		admin_layout_default_feature_hover: "Especifique qual recurso será exibida quando os usuários efetuarem login para esta área de trabalho.",
		admin_layout_default_feature_warning: "Mudar o recurso padrão pode afetar o horário necessário para carregar o aplicativo.",
		admin_layout_feature_list_header: "Recurso",
		admin_layout_show_statusbar: "Barra de status:",
		admin_layout_show_statusbar_hover: "Especifique se deseja exibir a barra de status na parte inferior da área.<br><br>Se você ocultar a barra de status, os usuários não podem ver informações sobre eventos não de erro, como:<ul><li>O documento foi incluído no repositório.</li><li>A procura retornou 59 documentos.</li></ul>",
		admin_layout_show_magazineview: "Visualização de revista:",
		admin_layout_show_magazineview_hover: "Especifique se os usuários ter permissão para alternar a exibição da lista de conteúdos para a visualização de revista.<br><br>A visualização da revista aumenta a altura de cada entrada na lista de conteúdo, o que reduz o número de itens que podem ser exibidos na lista de conteúdo ao mesmo tempo.",
		admin_layout_show_detailsview: "Visualização de detalhes:",
		admin_layout_show_detailsview_hover: "Especifique se os usuários ter permissão para alternar a exibição da lista de conteúdos para a visualização de detalhes.<br><br>A visualização de detalhes aumenta o número de linhas visíveis na lista de conteúdos.",
		admin_feature_config_docinfopane_label: "Área de janela de informações do documento:",
		admin_feature_config_docinfopane_hoverhelp: "Especifique se os usuários podem acessar a área de informações do documento neste recurso.",
		admin_feature_config_docinfopane_default_label: "Comportamento padrão:",
		admin_feature_config_docinfopane_expanded: "Expandido",
		admin_feature_config_docinfopane_collapsed: "Reduzido",
		admin_feature_config_docinfopane_expand_on_select: "Expanda quando o item é selecionado",
		admin_layout_features_title: "Recursos da área de trabalho",
		admin_layout_features_instructions: "Especifique quais recursos os usuários podem acessar a partir desta área de trabalho.  Além disso, você pode customizar o comportamento de cada recurso que está incluído na área de trabalho.",
		admin_layout_components_title: "Componentes adicionais da área de trabalho",
		admin_layout_components_instructions: "Você pode desativar alguns dos componentes da área de trabalho, se você deseja uma interface mais direta ou se você deseja melhorar o desempenho do Web client.",
		admin_layout_featureconfig_instructions: "Selecione um recurso a ser configurado",
		admin_layout_featureconfig_no_configuration: "Nenhuma configuração de recurso disponível.",
		admin_layout_featureconfig_label: "Configuração para o recurso ${0}",
		admin_layout_featureconfig_title: "Configuração do recurso",
		admin_layout_featureconfig_taskManagerURL: "Para usar esse recurso, deve-se ativar e configurar o IBM Content Navigator para se conectar ao serviço do gerenciador de tarefa. Ative o serviço de gerenciador de tarefa na seção <b>Configurações</b> desta ferramenta de administração.",
		admin_feature_config_show_my_checkouts_label: "Área de janela Meus check-outs:",
		admin_feature_config_show_my_checkouts_hoverhelp: "A área de janela Meus Check-outs permite que os usuários executem uma procura de todos os itens que eles retiraram em um repositório específico. Especifique se deseja que os usuários possam acessar a área de janela Meus Check-outs a partir do recurso Página inicial.<br/><br/><b>Restrição:</b> Esse recurso exige que você tenha pelo menos uma IBM Content Manager, IBM FileNet P8, ou repositório OASIS CMIS associado a esta área de.",

		admin_feature_config_default_repository_icon_text: "Repositório padrão",
		admin_show: "Exibir",
		admin_hide: "Ocultar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Não é possível remover o recurso Administração da Área de Trabalho de Administração",
		admin_warning_label: "Aviso:",
		admin_layout_show_globaltoolbar: "Barra de ferramentas global:",
		admin_layout_show_globaltoolbar_hover: "Especifique se deseja exibir a barra de ferramentas no banner na parte superior da área de trabalho.<br><br>A barra de ferramentas global inclui ações que permitem aos usuários incluir documentos, pastas e suspensões no repositório. As ações disponíveis dependem do repositório ao qual o usuário está conectado.",
		admin_interface_text_name_label: "Tipo de Rótulo",

		admin_interface_text_label_description: "Você pode customizar o texto que é exibido em algumas áreas do Web client. Os rótulos são exibidos para todos os repositórios e áreas de trabalho em sua configuração. Insira o texto que você deseja ver na interface no campo Rótulo Atual.<br><br><b>Importante:</b> As mudanças feitas nos rótulos não serão exibidas na ferramenta de administração.",
		admin_interface_text_label_action: "Rótulos de Ação",
		admin_interface_text_label_action_description: "rótulos de ação são exibidos em botões e menus em todo o Web client. É possível definir diferentes rótulos de ação para cada tipo de repositório.",
		admin_interface_text_label_application: "Rótulos do Aplicativo",
		admin_interface_text_label_application_description: "Rótulos do aplicativo são exibidos em todo o Web client.",
		admin_interface_text_label_system: "Rótulos de Propriedade de Sistema",
		admin_interface_text_label_system_description: "As propriedades do sistema que são exibidas variam por repositório. Você pode customizar as etiquetas que são exibidas para as propriedades de sistema que estão associadas aos documentos e pastas em seus repositórios.",
		admin_interface_text_label_desktop: "Rótulos da Área de Trabalho",
		admin_interface_text_label_desktop_description: "Se você customizou o nome do aplicativo em uma área, você pode customizar esse nome em idiomas diferentes do inglês. Também é possível customizar os nomes dos espaços do aplicativo IBM FileNet P8 em uma área de trabalho.",

		admin_interface_text_system_label: "Rótulo do Sistema",
		admin_interface_text_current_label: "Rótulo Atual",
		admin_interface_text_default_label_heading: "Rótulo Padrão",
		admin_interface_text_default_label: "Rótulo padrão:",
		admin_interface_text_displayed_in_label: "Exibido para",
		admin_interface_text_displayed_in_document_folder: "Documentos e pastas",
		admin_interface_text_displayed_in_document: "Documentos",
		admin_interface_text_displayed_in_folder: "Pastas",
		admin_interface_text_displayed_in_admin_application_space: "etiqueta do espaço do aplicativo",
		admin_interface_text_displayed_in_desktop: "etiqueta de Recurso para celulares",
		admin_interface_text_displayed_in_admin_application_name: "Nome do Aplicativo",

		admin_new_desktop: "Nova Área de Trabalho",
		admin_new_repository: "Novo Repositório",
		admin_new_menu: "Novo Menu",
		admin_new_viewer_mapping: "Novo mapa do visualizador",
		admin_new_mapping_label: "Novo mapeamento",
		admin_new_icon_mapping: "Novo mapeamento de ícone",
		admin_viewer_mapping_list_instructions: "É possível configurar quais visualizadores o Web client usa para exibir diferentes tipos de conteúdo. Um mapa de visualizadores define que tipos MIME estão associados a cada visualizador que você deseja usar. Diversos mapas de visualizadores poderão ser criados se você desejar usar diferentes visualizadores para diferentes áreas de trabalho.",
		admin_viewer_mapping_instructions: "Especifique os visualizadores que deseja usar para abrir arquivos. Se você desejar usar um visualizador customizado, o visualizador deverá ser integrado como um plug-in antes de poder incluí-lo no mapa de visualizadores.<br><br><b>Importante:</b> Quando um usuário abre um documento, o Web client procura por uma lista de visualizador de mapeamentos para encontrar o primeiro visualizador; que pode abrir o documento baseado no sistema operacional que o usuário está executando e o repositório ao qual o usuário está conectado. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Novo Plug-in",
		admin_menu_list_instructions: "É possível criar de ferramentas e menus de contexto customizados para controlar quais ações estarão disponíveis para os usuários. é possível editar os menus padrão, mas é possível criar cópias dos menus existentes para restringir as ações que estão disponíveis ou incluir ações customizadas que são definidas em plug-ins.<br><br>Se desejar criar um novo tipo de menu, deve-se defini-lo em um plug-in.",
		admin_menu_id_hover: "O ID deve ser exclusivo e não é possível alterá-lo depois de salvar o menu.<br><br>O ID pode conter apenas caracteres alfanuméricos e faz distinção entre maiúsculas e minúsculas.",
		admin_menu_id_disabled_hover: "O ID do menu não pode ser alterado. Se desejar usar um ID diferente, você deverá criar um novo menu.",
		admin_menu_default_instructions: "Não é possível editar este menu porque ele é um menu padrão. Se desejar editar este menu, você deverá criar uma cópia do menu.",
		admin_menu_toolbar_instructions: "É possível restringir as ações que estão disponíveis para essa barra de ferramentas ou você pode incluir ações customizadas, que são definidas em um plug-in. Também é possível organizar as ações, incluindo separadores na barra de ferramentas.",
		admin_menu_toolbar_custom_instructions: "Esta barra de ferramentas é definida por um plug-in. Se desejar editar este, deve-se atualizar o plug-in ou criar uma cópia da barra de ferramentas.",
		admin_menu_context_menu_instructions: "É possível restringir as ações que estão disponíveis para esse contexto ou você pode incluir ações customizadas, que são definidas em um plug-in. Também é possível organizar as ações, incluindo separadores e submenus no menu de contexto.",
		admin_menu_context_menu_custom_instructions: "Este menu de contexto é definido por um plug-in. Se desejar editar este menu de contexto, deve-se atualizar o plug-in ou criar uma cópia do menu de contexto.",
		admin_desktop_list_instructions: "É possível criar várias áreas de trabalho para fornecer a diferentes usuários acesso ao conteúdo que eles precisam. Por exemplo, você pode criar uma área de trabalho que apenas que os usuários procurem conteúdos ou uma área que conceda aos usuários acesso a um repositório único. ",
		admin_plugin_updated: "A de configuração do plug-in selecionado foi alterado. Você deve atualizar o navegador para que as mudanças entrem em vigor.",
		admin_repository_ci_heading: "Repositório do Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Repositório do FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Repositório do Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Repositório do Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Repositório do Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Repositório do Box: <b>${0}</b>",
		admin_repository_generic_heading: "Repositório: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Deseja excluir as áreas de trabalho selecionadas?\n${0} áreas de trabalho estão selecionadas.",
		admin_delete_confirmation_menus: "Deseja excluir os menus selecionados?\n${0} menus estão selecionados.",
		admin_delete_confirmation_repositories: "Deseja excluir os repositórios selecionados?\n${0} repositórios estão selecionados.",
		admin_delete_confirmation_viewer_mappings: "Deseja excluir os mapas do visualizador selecionados ?  ${0} mapas estão selecionados.",
		admin_delete_confirmation_icon_mappings: "Deseja excluir as configurações de ícone selecionadas?\n${0} configurações de ícone estão selecionadas.",
		admin_delete_confirmation_plugins: "Deseja excluir os plug-ins selecionados?\n${0} plug-ins estão selecionados.",
		admin_delete_confirmation: "Deseja excluir os itens selecionados?\n${0} itens estão selecionados.",

		admin_viewer_mapping_id_hover: "O ID deve ser exclusivo e não é possível alterá-lo depois de salvar o mapa do visualizador.<br><br>O ID pode conter apenas caracteres alfanuméricos e faz distinção entre maiúsculas e minúsculas.",
		admin_viewer_mapping_id_disabled_hover: "O ID do mapa do visualizador não pode ser alterado. Se desejar usar um ID diferente, você deverá criar um novo mapa do visualizador.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "A área de trabalho padrão não pode ser excluída.",

		admin_desktop_heading: "Área de Trabalho: <b>${0}</b>",
		admin_menu_toolbar_heading: "Barra de Ferramentas: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Barra de Ferramentas Customizada: <b>${0}</b>",
		admin_menu_context_menu_heading: "Menu de Contexto: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Menu de Contexto Customizado: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Um plug-in pode ser um arquivo JAR ou um arquivo de classe compilado.<br/><br/><b>Importante:</b> O servidor de aplicativos da web do IBM Content Navigator deve ser capaz de acessar o arquivo de plug-ins no sistema de arquivos local ou por meio de uma URL.",
		admin_plugin_list_instructions: "Deve-se usar a ferramenta de administração para registrar plug-ins para o Web client. Se um plug-in requerer configuração adicional, os parâmetros de configuração serão exibidos depois que você registrar o plug-in.<br /><br /><b>Importante:</b> Se você editar um plug-in que seja referido em outra área da ferramenta de administração, como um menu, poderá encontrar problemas com o comportamento do plug-in. Além disso, os plug-ins são chamadas na ordem em que elas estão listadas. Se um plug-in precisa ser executada antes que outro plug-in, certifique-se de que os plug-ins são listados na ordem em que eles devem ser executados.",
		admin_plugin_cannot_delete: "Os plug-ins selecionado não pode ser excluído porque alguns plug-ins dependem deles.<br/>Selecionado plug-ins: ${0}<br/>Dependente de plug-ins: ${1}",
		admin_plugin_cannot_disable: "Os plug-ins selecionados não podem ser desativados porque alguns plug-ins dependem deles.<br/>Selecionado plug-ins: ${0}<br/>Dependente de plug-ins: ${1}",
		admin_plugin_cannot_add: "O plug-in não pode ser incluído porque alguns plug-ins dos quais ele depende estão ausentes ou desativados. Plug-ins ausentes ou desativados: ${0}",
		admin_plugin_cannot_enable: "Os plug-ins selecionados não podem ser ativados porque alguns plug-ins dos quais eles dependem estão ausentes ou desativados.<br/>Selecionado plug-ins: ${0}<br/>Plug-ins ausentes ou desativados: ${1}",
		admin_plugin_save_order: "Salvar Ordem",
		admin_plugin_load: "Carregar",
		admin_plugin_load_hover: "Especifique a URL do plug-in",
		admin_plugin_file_hover: "Se o arquivo JAR de plug-in estiver em seu sistema de arquivos local, será possível inserir o caminho ou a URL completa do arquivo de plug-ins. Se o arquivo JAR de plug-in estiver em um servidor remoto, você deverá inserir a URL do arquivo de plug-ins.",
		admin_plugin_classfolderpath_hover: "O arquivo de classe compilado deve estar no servidor de aplicativos da web IBM Content Navigator.<br/><br/>Insira o caminho completo da pasta na qual as classes de plug-ins são compiladas e geradas.<br/><br/>O caminho não deve conter o nome do pacote da classe de plug-in. Por exemplo, o caminho padrão para a classe de plug-in de amostra no Windows é C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Insira o nome completo da classe Java dentro do arquivo de classe que deve ser carregado e chamado como a classe de plug-in.<br/>Por exemplo, o nome da classe do plug-in de amostra é com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "O arquivo JAR do plug-in não foi localizado na URL especificada. Assegure-se de que o arquivo JAR esteja no servidor de aplicativos da web e que a URL e o nome do arquivo estejam corretos.",
		admin_plugin_for_repository_not_loaded: "é possível editar este repositório. O plug-in que define e apoia este tipo de repositório não está carregada. Na guia Plug-ins, editar o plug-in para verificar se ele está configurado corretamente e que esteja carregado.",
		admin_plugin_repository_types: "Tipos de repositório:",
		admin_plugin_viewers: "Visualizadores:",
		admin_plugin_features: "Recursos:",
		admin_plugin_layouts: "Layouts:",
		admin_plugin_not_available: "Não disponível",
		admin_plugin_config_params: "Parâmetros de Configuração:",
		admin_viewer_def_heading: "Mapa do Visualizador: <b>${0}</b>",
		admin_users_and_groups: "Usuários e Grupos",
		admin_general: "Gerais",
		admin_logging: "Criação de Log",
		admin_authentication: "Autenticação",		
		admin_rolebase_role: "Atribuição:",
		admin_settings_logging_instructions: "Você pode utilizar de log para resolver problemas com o Web client. Você pode refinar sua log se você souber que um problema ocorre dentro de uma classe Java específica ou para um determinado usuário. As informações de erro são gravadas nos arquivos do log de erros do servidor de aplicativos da web.",
		admin_settings_logging_instructions2: "<b>Configurações de Log de Depuração</b><br />Se você souber que um problema ocorre para um cliente específico do host máquina ou usuário, você pode destinar a criação de log de depuração para essa máquina ou usuário. É possível capturar informações de depuração em um ambiente de produção sem impactar significativamente o desempenho do sistema.<br /><br /><b>Importante:</b> Se você especificar uma máquina host do cliente ou um usuário, essa configuração substituirá todas as configurações de criação de log de outros. Depois de capturar as informações de que precisa, configure essa opção como <b>Nenhum</b> para continuar com a criação de log padrão de seu ambiente.",
		admin_settings_export_config_hover: "Exporte as informações de configuração do sistema atual para um arquivo para usar com o IBM Support Assistant Data Collector. O arquivo é salvo no local que está definido pela propriedade de sistema Java user.home.",
		admin_logging_level: "Criação de log no nível do aplicativo:",
		admin_logging_level_hover: "níveis de log afetam a quantidade de informações que é armazenada no servidor. Selecionar <b>Erro</b> captura a menor quantidade de informações. Selecionar <b>Depuração</b> captura a maior de informações.<br /><br />Não especifique <b>Depuração</b> em um ambiente de produção, a menos que você seja instruído a fazer isso pelo Suporte de Software IBM.",
		admin_logging_level_0: "Sem criação de log",
		admin_logging_level_1: "Erro",
		admin_logging_level_2: "Aviso",
		admin_logging_level_3: "Informações",
		admin_logging_level_4: "Depuração",
		admin_logging_classes: "Criação de log de nível de classe Java:",
		admin_logging_classes_hover: "Por padrão, todas as classes Java e pacotes estão incluídos nos logs de erros do servidor de aplicativos da web. No entanto, é possível especificar quais classes ou pacotes para incluir ou excluir de sua criação. É possível usar os logs de erros do servidor de aplicativos da web para determinar quais as classes para inclusão ou exclusão.<br><br>Se você souber que um problema ocorre em uma classe específica, você poderá incluir especificamente essa classe nos arquivos de log. Ao incluir uma classe nos logs de erros, todas as outras classes são excluídas do arquivo de log.<br><br>Se você souber que um problema não ocorre em uma classe e desejar reduzir o tamanho do arquivo de log, você pode excluir essa classe dos arquivos de log.",
		admin_logging_classes_include: "Incluir",
		admin_logging_classes_include_all: "Todas as classes",
		admin_logging_classes_include_specified: "Classes específicas",
		admin_logging_classes_include_specified_msg: "Especifique quais as classes a serem incluídas.",
		admin_logging_classes_exclude: "Excluir",
		admin_logging_classes_exclude_none: "Nenhuma",
		admin_logging_classes_exclude_specified: "Classes específicas",
		admin_logging_classes_exclude_specified_msg: "Especifique quais as classes a serem excluídas.",
		admin_logging_debug: "Criação de log de depuração para:",
		admin_logging_debug_hover: "<b>Importante:</b> Revise os arquivos de log do servidor de aplicativos da web antes de você especificar um endereço IP da máquina host do cliente ou usuário. O valor que fornecer deve corresponder ao valor que é exibido no arquivo de log.",
		admin_logging_debug_none: "Nenhum (padrão)",
		admin_logging_debug_host: "Máquinas host do cliente (endereços IP)",
		admin_logging_debug_host_msg: "Especifique o endereço IP de uma ou mais máquinas do cliente que você deseja registrar informações sobre depuração. Use uma vírgula para separar os endereços IP.<br /><br /><b>Importante:</b> Revise os arquivos de log do servidor de aplicativos da web antes de você especificar um endereço IP. O valor que fornecer deve corresponder ao valor que é exibido no arquivo de log.",
		admin_logging_debug_user: "Usuários",
		admin_logging_debug_user_msg: "Especifique o nome de usuário de um ou mais usuários que você deseja registrar informações sobre depuração. Use uma vírgula para separar os nomes de usuários.<br /><br /><b>Importante:</b> Revise os arquivos de log do servidor de aplicativos da web antes de especificar um nome de usuário. O valor que fornecer deve corresponder ao valor que é exibido no arquivo de log.",

		admin_office_settings_logging_instructions: "Você pode utilizar log para resolver problemas com o IBM Content Navigator for Microsoft Office. Você pode refinar sua log se você souber que um problema ocorre dentro de uma classe específica ou para determinado usuário. informações de erro são gravadas nos arquivos de log do aplicativo no IBM Content Navigator for Microsoft Office máquinas host do cliente. ",
		admin_office_settings_logging_instructions2: "<b>Configurações de Log de Depuração</b><br />Se você souber que um problema ocorre para uma máquina host do cliente específico ou IBM Content Navigator para o usuário do Microsoft Office, você pode destinar a criação de log de depuração para essa máquina ou usuário. É possível capturar informações de depuração em um ambiente de produção sem impactar significativamente o desempenho do sistema. <br /><br /><b>Importante:</b> Se você especificar uma máquina host do cliente ou um usuário, essa configuração substituirá todas as configurações de criação de log de outros. Depois de capturar as informações de que precisa, configure essa opção como <b>Nenhum</b> para continuar com a criação de log padrão de seu ambiente do IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> Revise os arquivos de log da máquina cliente antes de especificar um endereço IP da máquina host do cliente ou usuário. O valor que fornecer deve corresponder ao valor que é exibido no arquivo de log. ",
		admin_office_logging: "Criação de log do Office",
		admin_office_logging_classes: "Criação de log no nível da classe:",
		admin_office_logging_classes_hover: "Por padrão, todas as classes e pacotes necessários estão incluídos no IBM Content Navigator for Microsoft Office logs de erro. No entanto, é possível especificar quais classes ou pacotes para incluir ou excluir de sua criação. Você pode utilizar os logs da máquina do cliente para determinar quais classes para inclusão ou exclusão.<br /><br />Se você souber que um problema ocorre em uma classe específica, você poderá incluir especificamente essa classe nos arquivos de log. Ao incluir uma classe nos logs de erros, todas as outras classes são excluídas dos arquivos de log. <br /><br />Se você souber que um problema não ocorre em uma classe e desejar reduzir o tamanho do arquivo de log, você pode excluir essa classe dos arquivos de log. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> Revise os arquivos de log da máquina cliente antes de especificar um endereço IP da máquina host do cliente ou usuário. O valor que fornecer deve corresponder ao valor que é exibido no arquivo de log.",
		admin_office_logging_additional_settings: "Configurações adicionais:",
		admin_office_logging_additional_settings_hover: "Especifique as configurações adicionais",
		admin_office_logging_file_size: "Tamanho do Arquivo de Log",
		admin_office_logging_file_size_hover: "Especifique o tamanho no qual o IBM Content Navigator for Microsoft Office cria um novo arquivo de log. Quando um arquivo de log atinge o tamanho máximo, o log atual é renomeado para incluir a data (com o YYYYMMdd formato) e um número de incremento de arquivo (por exemplo, ICNExcelAddin-20121116-5.log) e um novo arquivo de log é criado. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Mostrar rastreio de pilha em diálogos",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "é possível, opcionalmente, mostrar informações de rastreio de pilha em diálogos de mensagem para facilitar a resolução de problemas. Mesmo se você não ativar essa opção, as informações de rastreio de pilha detalhado está sempre incluído no IBM Content Navigator for Microsoft Office logs de erro. ",

		admin_icon_state_twisty: "Ícones de Estado",
		admin_icon_state_icon: "Ícone de estado",
		admin_icon_state: "Estado",
		state_contains_label: "O estado contém",
		admin_icon_state_instructions: "É possível customizar os ícones que são exibidos ao lado de documentos, pastas e itens de trabalho em seus repositórios.<br><br><b>Dica:</b> É possível especificar se deseja exibir ícones de estado para cada repositório em seu ambiente.",
		admin_icon_state_dialog_title: "Mapeamento do Ícone de Estado",
		admin_icon_state_dialog_instructions: "É possível mapear o estado selecionado para um ícone predefinido, fornecido com o Web client, ou para um ícone customizado.",

		admin_icon_mapping_twisty: "Ícones de Tipo MIME",
		admin_icon_mapping_dialog_title: "Mapeamento do Ícone",
		admin_icon_mapping: "Mapeamento do Ícone",
		admin_icon_mapping_instructions: "É possível mapear uma lista de tipos MIME para um ícone predefinido, fornecido com o Web client, ou para um ícone customizado.",
		admin_icon_mapping_list_instructions: "É possível customizar os ícones que são exibidos para os diferentes tipos MIME que são armazenados em seu repositório. O Web client usa os ícones na ordem em que elas estão listadas. Se um tipo MIME estiver listado mais de uma vez, será usado o primeiro ícone que estiver associado a esse tipo MIME.",
		admin_icon_mapping_icon_label: "Qual ícone deseja usar?",
		admin_icon_mapping_file_name: "Ícone customizado:",
		admin_icon_mapping_file_name_heading: "Ícone Customizado",
		admin_icon_mapping_file_name_placeholder: "Especifique a URL do ícone",
		admin_icon_mapping_file_name_hover: "Insira a URL do ícone. Se o ícone estiver no mesmo servidor de aplicativos da web que o Web client, insira uma URL relativa. Por exemplo: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Ícone predefinido:",
		admin_icon_mapping_class_name_heading: "Ícone Predefinido",
		admin_icon_mapping_class_name_hover: "Selecione um ícone fornecido com o Web client.",
		admin_icon_mapping_class_name_placeholder: "Selecione um ícone",

		admin_p8_instructions: "Essas informações são compartilhadas por todos os repositórios do FileNet Content Manager que estão configurados para o Web client.",
		admin_p8_collaboration_config: "Configuração do FileNet Collaboration Services opcional",
		admin_p8_collaboration_config_instructions: "Você pode configurar esses parâmetros se você desejar ajustar o FileNet Collaboration Services para o ambiente do IBM FileNet P8.",
		admin_p8_use_url_incoming: "Use a URL em pedidos que chegam para gerar URLs de resposta:",
		admin_p8_use_url_incoming_hover: "No FileNet Collaboration Services a maioria dos ambientes, você pode utilizar a URL de um pedido de entrada para gerar a URL em uma resposta. Selecione <b>Sim</b> a menos que uma das seguintes situações se apliquem ao seu ambiente:<ul><li>Você deseja forçar aplicativos clientes para acessar FileNet Collaboration Services por meio de uma URL específica.<li>configurações do servidor proxy fazem o FileNet Collaboration Services para produzir URLs inválidas.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL:",
		admin_p8_use_url_incoming_http_hover: "Especifique a URL por meio da qual os aplicativos clientes podem acessar os Serviços de Colaboração FileNet com o formato http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "URL do HTTPS do FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Se FileNet Collaboration Services estiver configurado para utilizar SSL, especifique a URL HTTPS por meio da qual os aplicativos clientes podem acessar os Serviços de Colaboração FileNet com o formulário https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Ocultar endereços de e-mail do usuário em respostas do servidor:",
		admin_p8_hide_email_addresses_hover: "Você pode ocultar endereços de e-mail em respostas de usuários do servidor se você precisar em conformidade com as políticas de privacidade. Por exemplo, você pode ocultar a lista de usuários de endereços de e-mail quando o servidor retorna uma lista de documentos e informações sobre os usuários que criou ou editou os documentos.",

		admin_p8_mask_user_ids: "IDs de usuário de máscara em arquivos de log:",
		admin_p8_mask_user_ids_hover: "Você pode ocultar nomes de usuário em arquivos de log FileNet Collaboration Services se você precisar em conformidade com as políticas de privacidade. Ao ativar esta opção, os nomes de usuário são substituídos por valores do hash. Isso permite que você forneça os arquivos de log para empresas externo, como o IBM, para fins de suporte sem comprometer seus nomes de usuários ou registros de atividade.",

		admin_p8_soft_delete: "Mover arquivos excluídos para o compartimento de recuperação:",
		admin_p8_soft_delete_hover: "Quando os usuários excluir itens, mova os itens em um compartimento de recuperação, em vez de excluir os itens do repositório. A itens permanecem no compartimento de recuperação até que sejam limpos. Esta configuração é ignorada se o repositório de destino não suporta as bandejas de recuperação.<br><br><b>Restrição:</b> Recovery bins são suportados no IBM FileNet P8 Versão 5.2 ou posterior e requerem o Social Collaboration Base Extensions incluir.",

		admin_p8_download: "Configuração do cache HTTP de download de conteúdo",
		admin_p8_download_instructions: "Se o IBM FileNet Content Manager repositórios contêm muitos arquivos grandes, você pode configurar Download HTTP Content Cache (CDHC) para ativar segurança ao redirecionar pedidos do conteúdo FileNet Collaboration Services para arquivos grandes para um servidor da web dedicado.<br/><br/>Este recurso requer que o IBM HTTP Server. Além disso, deve-se atualizar o arquivo httpd.conf do IBM HTTP Server.",
		admin_p8_download_cache: "Download HTTP de conteúdo:",
		admin_p8_download_cache_hover: "Especifique se você deseja ativar o Content Download HTTP Cache (CDHC) para todos os repositórios do IBM FileNet Content Manager em seu ambiente. Você pode especificar um tamanho de arquivo mínimo na qual os arquivos são armazenados em cache.",
		admin_p8_download_cache_folder: "Diretório de cache completo:",
		admin_p8_download_cache_folder_hover: "Especifique o caminho completo do diretório no qual você deseja armazenar os arquivos em cache. O diretório pode estar em qualquer sistema operacional ou dispositivo, como um diretório de rede compartilhada, contanto que ela seja visível como um sistema de arquivos para os Serviços de Colaboração FileNet e o IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias para o local do cache:",
		admin_p8_download_cache_url_hover: "Especifique o alias que é utilizado para apontar para o diretório de cache do FileNet Collaboration Services URL. Especifique o alias com o formato /alias, por exemplo, /cdhc.<br/><br/>Quando /cdhc é incluído em uma URL, o aplicativo é redirecionado para o diretório de cache completo.",
		admin_p8_download_cache_max_files: "Número máximo de arquivos em cache:",
		admin_p8_download_cache_max_files_hover: "Quando o número máximo de arquivos seja atingido, o arquivo mais antigo será removida do cache.<br><br>Se você especificar o número máximo de arquivos em cache e o tamanho máximo do cache, o arquivo mais antigo é removidos do cache quando o menor das duas condições for atendida.",
		admin_p8_download_cache_max_size: "Tamanho máximo do cache (em GB):",
		admin_p8_download_cache_max_size_hover: "Quando o tamanho máximo de cache é atingido, o arquivo mais antigo será removida do cache.<br/><br/>Se você especificar o número máximo de arquivos em cache e o tamanho máximo do cache, o arquivo mais antigo é removidos do cache quando o menor das duas condições for atendida.",
		admin_p8_download_cache_cleanup_duration: "Duração máxima de limpeza (em segundos):",
		admin_p8_download_cache_cleanup_duration_hover: "Especifique a quantidade máxima de tempo que a operação de limpeza pode demorar. A duração padrão é 5 seconds.<br><br>Todos os arquivos que estão sujeitos a exclusão, mas que permanecem no cache após a operação de limpeza será removido durante uma operação de limpeza futuro.",
		admin_p8_download_cache_cleanup_min: "Intervalo mínimo entre as operações de limpeza de cache (em segundos):",
		admin_p8_download_cache_cleanup_min_hover: "Especifique a quantidade mínima de tempo que deve decorrer entre as operações de limpeza de cache. O tempo padrão é 3.600 seconds (1 hora).<br><br>as operações de limpeza de cache ocorrem apenas quando houver um pedido ativo para fazer download do conteúdo do cache. Se os pedidos vêm em cada minuto, a operação de limpeza irá ocorrer a cada hora. No entanto, se três horas passar entre pedidos de download, a operação de limpeza não ocorrerá até o próximo pedido de download é recebida.",
		admin_p8_download_cache_min_lifetime: "Tempo mínimo em cache (em segundos):",
		admin_p8_download_cache_min_lifetime_hover: "Especifique o tempo mínimo em que um arquivo é mantido no cache antes de poder ser removido. O tempo padrão é 3.600 seconds (1 hora).<br><br>Mesmo que o cache atinja o tamanho máximo ou contenha o número máximo de arquivos, o arquivo mais antigo no cache não pode ser excluído até que tenha ficado no cache pelo tempo especificado.",
		admin_p8_download_cache_size_threshold: "Cache para tamanho de arquivo mínimo (em KB):",
		admin_p8_download_cache_size_threshold_hover: "Especifique o tamanho mínimo no qual CDHC deve ser utilizado para arquivos em cache. Se um arquivo for menor que o tamanho especificado, o arquivo é direcionado através do servidor de aplicativos da web no qual Collaboration Services do FileNet é implementado. O tamanho padrão é 1.000 KB.",
		admin_p8_download_guard_header: "Cabeçalho HTTP para gatekeeping:",
		admin_p8_download_guard_header_hover: "Se um aplicativo cliente não rotear um pedido por meio do IBM HTTP Server, o conteúdo em cache não pode ser transferido por download. Você pode especificar que somente os pedidos que chegam com um cabeçalho HTTP específico (que é incluído em pedidos do IBM HTTP Server) pode acessar o conteúdo em cache para evitar falhas de download.<br><br>O cabeçalho HTTP é configurado no IBM HTTP Server e está presente em todos os pedidos de entrada que são roteados por meio do IBM HTTP Server. Se um pedido não tiver o cabeçalho HTTP, o conteúdo é roteada através do servidor de aplicativos da web em vez do servidor IBM HTTP.",
		admin_p8_download_generate_config: "Gerar configuração",
		admin_p8_download_generate_config_label: "Configuração do IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Para a configuração CHDC para trabalhar, deve-se atualizar o arquivo httpd.conf do IBM HTTP Server. Clique em Gerar de Configuração para gerar as instruções que devem ser incluídas no arquivo httpd.conf.",

		admin_logging_viewone_pro: "Criação de log ViewONE Professional:",
		admin_logging_viewone_virtual: "Log do Virtual ViewONE:",
		admin_logging_viewone_streamer: "Criação de log do Módulo do Servidor de Fluxo:",
		admin_logging_viewone_streamer_hover: "O Streaming Server Document Módulo opções são aplicáveis apenas se você tiver ativado a criação de fluxo para arquivos PDF ou TIFF na seção <b>Daeja ViewONE</b> da ferramenta de administração.",
		admin_logging_viewone_redaction: "Criação de log do Módulo do Servidor de Edição de dados permanente",
		admin_logging_viewone_redaction_hover: "O Módulo Servidor de Edição de dados permanentes opções de criação de log são aplicáveis somente se você estiver autorizado a utilizar o módulo de Edição de dados permanente do Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Profissional",
		admin_daeja_viewonepro_stream_pdf_documents: "Fluxo de arquivos PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Se você tiver documentos grandes em PDF no repositório, será possível ativar o visualizador para transmitir conteúdo de documentos a fim de tornar mais rápido para os usuários visualizar esses documentos. Entretanto, se o fluxo não funcionar em seu ambiente, será possível desativá-lo.",
		admin_daeja_viewonepro_stream_tiff_documents: "Arquivos de Fluxo de TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Se você tiver documentos grandes em TIFF no repositório, será possível ativar o visualizador para transmitir conteúdo de documentos a fim de tornar mais rápido para os usuários visualizar esses documentos. Entretanto, se o fluxo não funcionar em seu ambiente, será possível desativá-lo.",
		admin_daeja_viewonepro_show_file_buttons: "Botões de arquivos",
		admin_daeja_viewonepro_show_file_menus: "Menus de arquivos",
		admin_daeja_viewonepro_enable_file_keys: "Teclas de atalho de arquivos",
		admin_daeja_viewonepro_file_keys_hover_help: "Especifique se você deseja que os usuários utilizem atalhos de teclado para trabalhar com arquivos, por exemplo, para abrir ou salvar um arquivo. Para obter mais informações sobre teclas de atalho específicas, consulte a descrição do parâmetro FileKeys no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Botões de impressão",
		admin_daeja_viewonepro_show_print_menus: "Menus de impressão",
		admin_daeja_viewonepro_enable_print_keys: "Teclas de atalho de impressão",
		admin_daeja_viewonepro_print_keys_hover_help: "Especifique se você deseja que os usuários usem atalhos de teclado para imprimir arquivos, por exemplo, imprimir página ou documento. Para obter mais informações sobre teclas de atalho específicas, consulte a descrição do parâmetro PrintKeys no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Botões de inversão",
		admin_daeja_viewonepro_annotation_tooltip: "Dica de ferramenta de anotação customizada padrão:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Insira o texto a ser exibido quando nenhuma dica de ferramenta for especificada para uma anotação customizada. O texto pode incluir tokens substituíveis. Por exemplo, o &quot;&lt;criador&gt; criou essa anotação em &lt;createdateonly&gt;.&quot; Para obter informações adicionais sobre tokens substituíveis, consulte o parâmetro customAnnotationsToolTip no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Usar dica de ferramenta customizada predefinida",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Usar dica de ferramenta customizada definida pelo sistema mostrada na caixa de texto abaixo",
		admin_daeja_viewonepro_help_url: "URL da Ajuda:",
		admin_daeja_viewonepro_help_url_hover_help: "Especifique a URL da página da web que contém a documentação da ajuda para o visualizador. O botão Ajuda na barra de ferramentas do visualizador e a ação do menu de ajuda abrem a página da web. Se você não especificar uma URL, o botão Ajuda e a ação do menu não serão exibidos.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Contexto de recurso de registro de imagem:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Roteie conteúdo não suportado para o navegador:",
		admin_daeja_viewonepro_route_docs_hover_help: "Os usuários podem visualizar arquivos de imagem não suportados roteando-os para o navegador, o que abre o aplicativo apropriado para visualizar o arquivo. Por exemplo, para abrir um documento Microsoft Word, o navegador usa o visualizador do Microsoft Word.",
		admin_daeja_viewonepro_scale: "Imagem Autofit:",
		admin_daeja_viewonepro_scale_best: "Melhor Ajuste",
		admin_daeja_viewonepro_scale_ftow: "Ajustar para a largura",
		admin_daeja_viewonepro_scale_ftoh: "Ajustar para a altura",
		admin_daeja_viewonepro_enable_hotkeys: "Ativar teclas de atalho:",
		admin_daeja_viewonepro_show_features: "Mostrar botões e menus:",
		admin_daeja_custom_settings: "Configurações adicionais:",
		admin_daeja_custom_settings_hover_help: "É possível usar outros parâmetros especificando o nome e o valor do parâmetro. Por exemplo, é possível especificar &quot;scrollbars&quot; e &quot;true&quot; se desejar que as barras de rolagem sejam exibidas quando a imagem for escalada para um tamanho maior do que a área de exibição. Para obter mais informações sobre nomes e valores de parâmetro, consulte o IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Dica de ferramenta de anotação customizada padrão:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Insira o texto a ser exibido quando nenhuma dica de ferramenta for especificada para uma anotação customizada. O texto pode incluir tokens substituíveis. Por exemplo, o &quot;&lt;criador&gt; criou essa anotação em &lt;createdateonly&gt;.&quot; Para obter informações adicionais sobre tokens substituíveis, consulte o parâmetro customAnnotationsToolTip no IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Usar dica de ferramenta customizada predefinida",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Usar dica de ferramenta customizada definida pelo sistema mostrada na caixa de texto abaixo",
		admin_daeja_virtual_image_stamp_resource_context: "Contexto de recurso de registro de imagem:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Caminho de arquivos de licença:",
		admin_daeja_virtual_license_path_hover_help:"Especifique o caminho completo do diretório que contém os arquivos de licença lic-server-virtual.v1 e lic-server.v1.",
		admin_default_license_path:"Usar o caminho de arquivos de licença padrão",
		admin_license_path_specified:"Usar o caminho de arquivos de licença customizados",

		admin_daeja_streamer: "Servidor",
		admin_daeja_streamer_cache_root: "Diretório de cache:",
		admin_daeja_streamer_cache_root_hover_help: "Especifique o caminho completo do diretório em que deseja armazenar arquivos armazenados em cache para acesso mais rápido. O diretório pode estar em qualquer sistema operacional ou dispositivo, como um diretório de rede, se for visível como um sistema de arquivos para o IBM Content Navigator e IBM HTTP Server. Use um diretório local para melhorar o desempenho.",
		admin_daeja_streamer_settings: "Configurações adicionais:",
		admin_daeja_streamer_settings_hover_help: "É possível usar outros parâmetros especificando o nome e o valor do parâmetro. Por exemplo, você pode especificar “cookieAllowedDomainList” e uma lista separada por vírgula de servidores host.  Para obter mais informações sobre nomes e valores de parâmetro, consulte o IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Edição de dados permanente",
		admin_daeja_redaction_settings: "Configurações:",
		admin_daeja_redaction_settings_hover_help: "É possível usar outros parâmetros especificando o nome e o valor do parâmetro. Por exemplo, você pode especificar “burnIncrementalAnnotations” e ”true”. Para obter mais informações sobre nomes e valores de parâmetro, consulte o IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Nova configuração",
		admin_daeja_setting_dialog_title_edit: "Editar configuração",
		admin_daeja_setting_dialog_hover_help: "Inclua outros parâmetros especificando o nome e o valor do parâmetro. Por exemplo, você pode especificar “scrollbars” e “true” se desejar que barras de rolagem sejam exibidas quando a imagem for escalada para um tamanho maior que a área de exibição.",
		admin_daeja_setting_dialog_field_hover_help: "Para obter mais informações sobre nomes e valores de parâmetro, consulte o Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Criação de log do Daeja ViewONE",
		admin_daeja_logging_trace: "Ativar criação de logs de rastreio",
		admin_daeja_logging_trace_net: "Ativar criação de rede",
		admin_daeja_logging_trace_annotations: "Ativar criação de anotações",
		admin_daeja_logging_log_file: "Arquivo de Log:",
		admin_daeja_logging_instructions: "Você pode utilizar log para resolver problemas com o Daeja ViewONE Professional e Virtual Daeja ViewONE. Se você souber que um problema ocorre para um recurso específico, você pode destinar a criação de log para esse recurso.",

		admin_v1pro_logging_trace_hover: "Utilize essa configuração para resolução de problemas gerais com o visualizador.<br><br>As informações de log estão gravadas no console Java na máquina cliente. Você pode acessar o console Java a partir do Painel de Controle (Windows) ou Sistema de Preferências (Mac) para seu sistema operacional.",
		admin_v1pro_logging_trace_net_hover: "Utilize essa configuração para solucionar os seguintes problemas:<ul><li>Problemas com a conexão do servidor</li><li>Problemas com tipos MIME</li><li>Problemas com os arquivos que estão sendo muito longo</li></ul>Além disso, você pode utilizar o rastreio de registro para determinar onde os atrasos de rede ocorrer ao utilizar Daeja ViewONE Professional.<br><br>As informações de log estão gravadas no console Java na máquina cliente. Você pode acessar o console Java a partir do Painel de Controle (Windows) ou Sistema de Preferências (Mac) para seu sistema operacional.",
		admin_v1pro_logging_trace_annotations_hover: "Utilize essa configuração para resolução de problemas com a criação, salvar ou carregar anotações.<br><br>As informações de log estão gravadas no console Java na máquina cliente. Você pode acessar o console Java a partir do Painel de Controle (Windows) ou Sistema de Preferências (Mac) para seu sistema operacional.",

		admin_virtual_logging_trace_hover: "Utilize essa configuração para resolução de problemas gerais com o visualizador.<br><br>Por padrão, as informações de log são gravadas no arquivo virtual.log no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Utilize essa configuração para solucionar os seguintes problemas:<ul><li>Problemas com a conexão do servidor</li><li>Problemas com tipos MIME</li><li>Problemas com os arquivos que estão sendo muito longo</li></ul>Além disso, você pode utilizar o rastreio de registro para determinar onde os atrasos de rede ocorrer ao utilizar Daeja ViewONE Virtual.<br><br>Por padrão, as informações de log são gravadas no arquivo virtual.log no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Utilize essa configuração para resolução de problemas com a criação, salvar ou carregar anotações.<br><br>Por padrão, as informações de log são gravadas no arquivo virtual.log no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Se você ativar a criação de log para o visualizador, deverá especificar o caminho completo e o nome do arquivo de log no qual deseja armazenar informações de criação de log.  Recomenda-se dar o nome virtual.log ao arquivo de log.",

		admin_streamer_logging_trace_hover: "Utilize essa configuração para resolução de problemas gerais com o Documento Streaming Server Módulo.<br><br>Por padrão, as informações são gravadas no arquivo streamer.log, que está no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Utilize essa configuração para solucionar os seguintes problemas:<ul><li>Problemas com a conexão do servidor</li><li>Problemas com tipos MIME específicos</li><li>Problemas com os arquivos que estão sendo muito longo</li></ul>Além disso, você pode utilizar o rastreio para determinar onde o registro quando ocorrer atrasos de rede utilizando o Documento Streaming Server Módulo.<br><br>Por padrão, as informações são gravadas no arquivo streamer.log, que está no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Se você ativar a criação de log para o Módulo do servidor de fluxo do documento, deverá especificar o caminho completo e o nome do arquivo de log no qual deseja armazenar informações de criação de log.  Recomenda-se dar o nome streamer.log ao arquivo de log.",

		admin_redaction_logging_trace_hover: "Utilize essa configuração para resolução de problemas gerais com o Módulo do Servidor de Edição de dados permanente.<br><br>Por padrão, as informações são gravadas no arquivo redacttofile.log, que está no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Utilize essa configuração para solucionar os seguintes problemas:<ul><li>Problemas com a conexão do servidor</li><li>Problemas com tipos MIME específicos</li><li>Problemas com os arquivos que estão sendo muito longo</li></ul>Além disso, você pode utilizar o rastreio de registro para determinar onde os atrasos de rede ocorrer ao utilizar o Módulo Servidor Edição de dados permanente.<br><br>Por padrão, as informações são gravadas no arquivo redacttofile.log, que está no subdiretório config do diretório de instalação do IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Se você ativar a criação de log para o Módulo do servidor de edição de dados permanente, deverá especificar o caminho completo e o nome do arquivo de log no qual deseja armazenar informações de criação de log.  Recomenda-se dar o nome redacttofile.log ao arquivo de log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configure recursos para visualizadores e serviços.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Se você usar o Web client para se conectar a um ou mais repositórios do Content Manager OnDemand, deverá especificar as informações de que o OnDemand Web Enablement Kit precisa para funcionar corretamente. Essas informações são compartilhadas por todos os repositórios do Content Manager OnDemand que estão configurados para o Web client.",
		admin_ondemand_language: "Idioma:",
		admin_ondemand_tempdir: "Diretório temporário ODWEK:",
		admin_ondemand_tracegrp: "Rastreio do ODWEK",
		admin_ondemand_tracedir: "Diretório de rastreio:",
		admin_ondemand_tracelevel: "Nível de rastreio:",
		admin_ondemand_tracelevel_0: "0 - Sem criação de log",
		admin_ondemand_tracelevel_1: "1 - Criação de log de mensagem de erro",
		admin_ondemand_tracelevel_2: "2 - Criação de log de mensagem de erro e aviso",
		admin_ondemand_tracelevel_3: "3 - Criação de log de mensagem de erro, aviso e informativa",
		admin_ondemand_tracelevel_4: "4 - Todas as mensagens são capturadas, incluindo o rastreio da função",
		admin_ondemand_max_trace_filesize: "Tamanho máximo do arquivo de rastreio:",
		admin_ondemand_max_trace_filesize_unlimited: "Ilimitado",
		admin_ondemand_max_trace_filesize_limited: "Limitado (Recomendado)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Este valor está fora do intervalo. O valor deve ser um inteiro entre 1 e 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Diretório de instalação AFP2PDF:",
		admin_ondemand_language_hover: "Especifique o idioma no qual o ODWEK retornará mensagens.",
		admin_ondemand_tempdir_hover: "Insira o diretório no qual o OnDemand Web Enablement Kit armazena arquivos temporários durante o processamento. Deve-se inserir o caminho completo de um diretório existente no servidor de aplicativos da web.",
		admin_ondemand_tracedir_hover: "Insira o diretório em que deseja armazenar o arquivo de rastreio ODWEK arswww.trace. Deve-se inserir o caminho completo de um diretório existente no servidor de aplicativos da web.",
		admin_ondemand_tracelevel_hover: "Especifique o nível de informações de criação de log é gravado no arquivo arswww.trace. <b>mensagem de log de erro</b> captura a menor quantidade de informações de de log. <b>Todas as mensagens são capturadas, incluindo o rastreio da função</b> captura a maior de informações.<br /><br />Não especifique <b>Todas as mensagens são capturadas, incluindo o rastreio da função</b> em um ambiente de produção, a menos que você seja instruído a fazer isso pelo Suporte de Software IBM.",
		admin_ondemand_max_trace_filesize_hover: "Especifique se você deseja permitir que o arquivo de rastreio ODWEK cresça até um tamanho ilimitado ou se deseja que o web client crie novos arquivos de log quando o arquivo de log atingir um determinado tamanho. O padrão é permitir que o arquivo de log de rastreio cresça até que o aplicativo da web seja interrompido no servidor de aplicativos da web.",
		admin_ondemand_max_trace_unlimited_hover: "Selecione esta opção se desejar que as informações de rastreio de ODWEK sejam gravadas em um único arquivo de log. Se você selecionar esta opção, poderá ter um arquivo de log que é grande demais para ser aberto com um visualizador de arquivo padrão.",
		admin_ondemand_max_trace_limited_hover: "Selecione esta opção se desejar que as informações de rastreio de ODWEK sejam gravadas em arquivos de log menores. Quando um arquivo de log atinge o tamanho máximo, o log atual é renomeado para incluir a data (arswww.trace.YYYYMMDD.HHMMSS) e um novo arquivo de log é criado.",
		admin_ondemand_afp2pdf_installdir_hover: "Se desejar usar o utilitário AFP2PDF Transform para converter documentos AFP em documentos PDF para visualização e impressão, especifique o diretório em que o utilitário AFP2PDF Transform está instalado no servidor de aplicativos da web. Por exemplo: C:\\Program Files\\IBM\\AFP2web \\afp2pdf.",

		admin_adminusers: "Administradores",
		admin_adminusers_heading_text_multi: "Deve-se especificar quais usuários têm privilégios administrativos no Web client. Apenas administradores podem efetuar login na área de administração.<br /><br /><b>Importante:</b> Os IDs de usuários dos administradores do IBM Content Navigator devem corresponder com:<ul><li>IDs de usuário que existem em seu servidor de aplicativos da web. Não é necessário que os IDs de usuário sejam administradores no servidor de aplicativos da web.</li><li>IDs de usuário existentes no repositório padrão configurado para cada área de trabalho que inclui o recurso Administração.</li></ul>",
		admin_adminusers_heading_text_single: "Deve-se especificar quais usuários têm privilégios administrativos no Web client. Apenas administradores podem efetuar login na área de administração.<br /><br /><b>Importante:</b> Os IDs de usuário dos administradores do IBM Content Navigator devem corresponder aos IDs de usuário que existem no servidor de aplicativos da web. Não é necessário que os IDs de usuário sejam administradores no servidor de aplicativos da web.",
		admin_adminusers_newuser: "Novo administrador:",
		admin_adminusers_add: "Incluir",
		admin_adminusers_remove: "Remover",
		admin_adminusers_listheading: "Administradores",
		admin_adminusers_nameInvalid: "O valor não pode ser um duplicado.",

		admin_sync_server_instructions: "<b>Somente usuários FileNet P8:</b> Se você planeja ativar serviços de sincronização para um ou mais repositórios, deve configurar o web client para usar serviços de sincronização. A configuração de serviços de sincronização é compartilhada por todos os repositórios em seu ambiente.",
		admin_settings_instructions: "Os valores especificados na guia Configurações aplicam-se a todas as áreas de trabalho de sua configuração.",
		admin_autocomplete: "Preencher nomes de usuários automaticamente:",
		admin_autocomplete_hover: "Especifique se deseja que o Web client armazene nomes de usuários em cookies do navegador para permitir que o navegador preencha automaticamente os nomes de usuários no Web client durante o login.<br><br>Se você ativar essa opção, o nome de usuário do último usuário a efetuar login no Web client será armazenado nos cookies do navegador e será exibido automaticamente na página de Login quando um usuário abrir o Web client.<br><br>Deve-se desativar essa opção se o aplicativo for acessado a partir de estações de trabalho compartilhadas, ou se estiver preocupado quanto ao armazenamento de nomes de usuários em cookies do navegador.<br /><br />Esta opção não se aplica aos aplicativos remotos ou customizados.",
		admin_autocomplete_enable: "Ativar",
		admin_autocomplete_disable: "Desativar",
		admin_cultural_collation: "Usar classificação específica do código de idioma:",
		admin_cultural_collation_hover: "Se você ativar a classificação específica do código de, a classificação será feita no servidor do repositório. Isso pode diminuir o desempenho do Web client.<br><br>A desativação da classificação específica do código de idioma pode melhorar o desempenho do Web client.",
		admin_cultural_collation_enable: "Ativar",
		admin_cultural_collation_disable: "Desativar",
		admin_base_ui_style: "Estilo de tema",
		admin_base_ui_style_hover: "Especifique o estilo do tema padrão usado no cliente da web. Este estilo é usado somente em áreas de trabalho que usam o tema <b>Padrão</b> (conforme especificado na guia <b>Aparência</b> da configuração da área de trabalho).<br/></br><b>Restrição:</b> se as configurações da área de trabalho usarem temas customizados, esses temas serão baseados no estilo clássico, independentemente do estilo selecionado.",
		admin_base_ui_style_classic: "Clássico",
		admin_access_control_access: "Limitar acesso a usuários e grupos específicos",
		admin_access_control_access_show: "Mostrar dados de controle de acesso",
		admin_access_control_access_enable: "Sim",
		admin_access_control_access_disable: "Não",
		admin_mobile_access: "Permitir acesso a partir de aplicativos remotos",
		admin_mobile_access_hover: "Por padrão, os usuários podem acessar o Web client a partir do aplicativo IBM Content Navigator iOS.<br /><br /><b>Importante:</b> Se você impedir que os usuários acessem o Web client a partir do aplicativo iOS, os usuários ainda poderão acessar o Web client a partir dos navegadores da web em seus dispositivos móveis e partir de aplicativos customizados que são gravados usando as APIs do IBM Content Navigator e que funcionam em dispositivos móveis.",
		admin_mobile_access_enable: "Sim",
		admin_mobile_access_disable: "Não",
		admin_error: "Informações da mensagem de erro:",
		admin_error_custom: "Procurar conteúdo de suporte personalizado",
		admin_error_default: "Procurar conteúdo de Suporte do IBM <BDO DIR='LTR'>(</BDO>padrão<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Especifique para onde deseja direcionar os usuários para informações adicionais quando encontrarem uma mensagem de erro. É possível direcionar os usuários para obter informações adicionais sobre o IBM Support Portal, ou você pode direcionar os usuários para um recurso interno, como um help desk.",
		admin_error_URL: "Prefixo da URL:",
		admin_error_URL_hover: "Insira a URL do recurso que você deseja direcionar os usuários quando encontrarem um erro, como um help desk. Por exemplo: http://localhost:port_number. O Web client anexa o número da mensagem à URL.",
		admin_prompt_close_without_save: "Deseja fechar sem salvar suas mudanças?",
		admin_object_expiration_time: "Intervalo de atualização de cache (em minutos):",
		admin_object_expiration_time_hover: "É possível aumentar a quantia de tempo em que os objetos de configuração, como áreas de trabalho, são mantidos no cache para melhorar o desempenho do Web client. O tempo padrão é de 10 minutos. O tempo máximo é de 1440 minutos (1 dia).<br /><br />Deve-se reiniciar o aplicativo da web para que suas mudanças entrem em vigor.<br /><br />Se o IBM Content Navigator for implementado em um ambiente em cluster altamente disponível, quaisquer mudanças feitas nos objetos de configuração não serão propagadas para os nós no cluster até que o cache seja atualizado.",
		admin_temp_file_cleanup_interval: "Intervalo de varredura para limpar o cache do visualizador (em horas):",
		admin_temp_file_cleanup_interval_hover: "Planeje com que frequência o diretório temporário é varrido para localizar e excluir os arquivos temporários expirados. Por padrão, o diretório temporário é varrido a cada seis horas. É possível especificar de 6 a 48 horas.",
		admin_temp_file_expiration_interval: "Expirar o cache do visualizador (em horas):",
		admin_temp_file_expiration_interval_hover: "Especifique a quantia de tempo que os arquivos temporários relacionados a atividades no visualizador permanecem no cache do navegador. Por padrão, esses arquivos temporários expiram após 24 horas. É possível especificar de 12 a 48 horas.",
		admin_encryption_key_hover: "Chave utilizada para as funções de criptografia Navigator.",
		admin_encryption_key: "Chave de Criptografia:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Marca",
		admin_mobile_branding_main_color: "Cor principal:",
		admin_mobile_branding_secondary_color: "Cor secundária:",
		admin_mobile_device_title: "Gerenciamento MaaS360",
		admin_mobile_device_enable_maas360: "Ativar MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Ativar ajuda instantânea de MaaS360 vai aqui",
		admin_mobile_device_maas360_developer_id: "ID de desenvolvedor de MaaS360:",
		admin_mobile_device_maas360_license_key: "Chave de licença de MaaS360:",
		admin_mobile_settings_title: "Configurações",
		admin_mobile_email_address_hover_help: "O endereço de e-mail é usado no aplicativo móvel quando um usuário clica em \"Enviar relatório de erro.\"",
		admin_mobile_email_address: "Endereço de e-mail:",
		admin_invalid_email_address_message: "O endereço de e-mail que inseriu não está no formato correto. Insira o endereço correto e tente novamente.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Alguns dados não são válidos.",
		admin_configuration_parameters: "Parâmetros de Configuração",
		admin_configuration_optional_features: "Recursos Opcionais",
		admin_configuration_optional_features_p8_instructions: "Selecione os recursos que você deseja ativar neste repositório.<p><b>Importante:</b> Se você ativar um recurso que instala um complemento para o repositório, deve-se estar conectado ao repositório como um administrador do Content Engine ou Content Platform Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Selecione os recursos que você deseja ativar neste repositório.<p><b>Importante:</b> Estas recursos modificar o modelo de dados em seu repositório. Para ativá-los, deve-se estar conectado ao repositório como um administrador do servidor de bibliotecas.</p>",
		admin_system_properties: "Propriedades do sistema",
		admin_system_properties_for: "Propriedades de sistema para:",
		admin_available_properties: "Propriedades Disponíveis",
		admin_displayed_properties: "Propriedades Exibidas",
		admin_selected_properties: "Propriedades Selecionadas",
		admin_selected_filtered_properties: "Propriedades Ocultas",
		admin_available_operators: "Operadores Exibidos",
		admin_selected_filtered_operators: "Operadores Ocultos",
		admin_system_properties_shown: "Propriedades Mostradas",
		admin_system_properties_hidden: "Propriedades Ocultas",
		admin_available_menu_items: "Ações Disponíveis:",
		admin_selected_menu_items: "Ações Selecionadas:",
		admin_menu_global: "Aplica-se quando nenhum item está selecionado:",
		admin_menu_multiple_document: "Aplica-se quando diversos itens estão selecionados:",
		admin_menu_privileges: "Privilégios necessários:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Tipos de repositório:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separator",
		admin_browse: "Pesquisar",
		admin_search: "Procurar",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Edição de dados baseada em função",
		admin_connections_library_enabled: "IBM Connections ativado",
		admin_office_conf: "Editar Integração",
		admin_desktop_conf_label: "Configuração da área de trabalho",
		admin_ms_office_conf_label: "Configuração do Office",
		admin_workflows: "Fluxos de Trabalho",
		admin_file_types: "Tipos de Arquivo",
		admin_file_type_contains_label: "tipo de arquivo contém",
		admin_name_propepty: "Nome",
		admin_cm_name_property_default: "Usar nome padrão",
		admin_cm_name_property_default_hover: "Por padrão, a propriedade do nome hierárquico do ICM (ICM$NAME) será usada como o nome do item se a propriedade for definida para o item.  Se a propriedade do nome hierárquico do ICM (ICM$NAME) não estiver disponível, a primeira propriedade que for sinalizada como \"represents\" será usada como o nome do item.",
		admin_cm_name_property: "Especificar a propriedade do nome do item",
		admin_cm_name_property_hover: "Especifique qual propriedade será usada como o nome dos documentos e pastas.",
		admin_name_property: "Propriedade do nome:",
		admin_doc_name_property: "Propriedade do nome do documento:",
		admin_doc_name_property_hover: "Especifique qual propriedade será usada como o nome do documento.",
		admin_folder_name_property: "Propriedade do nome da pasta:",
		admin_folder_name_property_hover: "Especifique qual propriedade será usada como o nome da pasta.",
		admin_all_searches_label: "Número de Procuras a serem exibidas:",
		admin_unlimited: "Sem limites",
		admin_limit: "Limitar em",
		admin_repository: "Repositório:",
		admin_application_space: "Espaço do Aplicativo",
		admin_available_application_spaces: "Espaços Disponíveis do Aplicativo:",
		admin_selected_application_spaces: "Espaços Selecionados do Aplicativo:",
		admin_label: "Rótulo",
		admin_repository_box_placeholder: "Selecione um repositório de caixa",
		admin_repository_placeholder: "Selecione um repositório",
		admin_search_match: "Correspondência:",
		admin_search_match_all: "Corresponder a todos os critérios de Procura",
		admin_search_match_any: "Corresponder a qualquer um dos critérios de Procura",
		admin_search_match_hover: "Especifique qual opção é selecionada por padrão no menu <b>opções de Propriedade</b> .",

		admin_repository_redactions_instructions: "É possível configurar edições de dados baseadas em função para este repositório.",
		admin_repository_redaction_policies_description: "É possível criar e gerenciar políticas de edição de dados que associam razões de edição de dados a usuários e grupos que podem ler dados sensíveis e podem editar anotações que protegem os dados sensíveis da visualização.",
		admin_repository_redaction_roles_instruction: "É possível criar uma função de edição de dados para associar os usuários e grupos especificados à capacidade de ler dados sensíveis ou à capacidade de editar anotações que protegem os dados sensíveis da visualização. A função de edição de dados deve ser associada a uma razão de edição de dados em uma política de edição de dados para que os usuários e grupos possam ler os dados ou editar as anotações.",
		admin_repository_redaction_reasons_instruction: "É possível configurar razões de edição de dados para seu repositório.",
		admin_repository_redaction_policies: "Configuração de política de edição de dados",
		admin_repository_redaction_roles: "Configuração de funções de edição de dados",
		admin_repository_redaction_reasons: "Configuração de razões de edição de dados",
		admin_repository_redaction_roles_type: "Tipo",
		admin_repository_redaction_roles_type_hover: "Um editor pode criar, modificar ou excluir tipos específicos de edições de dados baseadas em função, enquanto um visualizador pode visualizar tipos específicos de dados sensíveis.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Visualizador",
		admin_repository_redaction_roles_membership: "Associação",
		admin_repository_redaction_roles_membership_hover: "Selecione os editores que você deseja que tenham esta função.",
		admin_repository_redaction_roles_user_group_hover: "Procure os usuários e grupos ou selecione os editores que você deseja que tenham esta função.",
		admin_repository_redaction_roles_description: "É possível criar e gerenciar funções de edição de dados, que associam usuários e grupos à capacidade de ler dados sensíveis e editar anotações que protegem os dados sensíveis da visualização.",
		admin_repository_redaction_new: "Nova função de edição de dados",
		admin_repository_redaction_role_avail_editors: "Editores de edição de dados disponíveis",
		admin_repository_redaction_role_avail_users: "Usuários Disponíveis",
		admin_repository_redaction_role_avail_groups: "Grupos disponíveis",
		admin_repository_redaction_role_selected_editors: "Editores de edição de dados selecionados",
		admin_repository_redaction_role_selected_users_groups: "Usuários e grupos selecionados",
		admin_repository_redaction_role_add_editor: "Novos editores...",
		admin_repository_redaction_role_access_type: "Acessar",
		admin_repository_redaction_role_access_type_access: "Permitir",
		admin_repository_redaction_role_access_type_no_access: "Negar",
		admin_repository_redaction_role_users: "Usuários",
		admin_repository_redaction_role_groups: "Grupos",
		admin_repository_redaction_role_editors: "Editores",
		admin_delete_confirmation_redaction_roles: "Deseja excluir a função de edição de dados selecionada?",
		admin_repository_edit_redaction_role: "Função de edição de dados: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Acesso padrão",
		// RBA
		desktop_user_group_acl: "Administradores da área de trabalho",
		desktop_user_group_remove: "Remover",
		desktop_rba_membership: "Associação:",
		desktop_rba_membership_list_label: "Nome",
		admin_repository_redaction_policy_hover: "Forneça uma descrição que permitirá que os usuários façam distinção entre essa política e as outras políticas.",
		admin_repository_new_redaction_policy: "Nova política de edição de dados",
		admin_repository_policy_name: "Nome de Política",
		admin_repository_reason_redactions: "Razões de edição de dados:",
		admin_repository_role_editors: "Editores",
		admin_repository_role_viewers: "Visualizadores",
		admin_repository_redaction_policy_instruction: "É possível criar uma política de edição de dados para associar as razões de edição de dados selecionadas a editores de edição de dados e visualizações de edição de dados.",
		admin_repository_redaction_reasons_hover: "Selecione um ou mais tipos de dados sensíveis que você não deseja que a maioria dos usuários veja, por exemplo, informações pessoalmente identificáveis, segredos comerciais ou informações confidenciais ou proprietárias para a sua empresa.",
		admin_repository_readaction_available_reasons: "Razões disponíveis",
		admin_repository_readaction_selected_reasons: "Razões selecionadas",
		admin_repository_readaction_new_reason: "Nova razão...",
		admin_repository_redeaction_reasons: "Razões de edição de dados:",
		admin_repository_readaction_editor_permmission: "Editores de edição de dados:",
		admin_repository_redaction_editors_hover: "Selecione as funções que podem criar e modificar a edição de dados para as razões selecionadas.",
		admin_repository_readaction_new_editor_role: "Nova função do editor...",
		admin_repository_readaction_available_editors: "Funções do editor disponíveis",
		admin_repository_readaction_selected_editors: "Funções do editor selecionadas",
		admin_repository_readaction_viewer_permmission: "Visualizadores de edição de dados:",
		admin_repository_redaction_viewers_hover: "Selecione as funções que podem visualizar os dados sensíveis para as razões selecionadas. A edição de dados não é aplicada a usuários e grupos com essas funções.",
		admin_repository_readaction_new_viewer_role: "Nova função do visualizador...",
		admin_repository_readaction_available_viewers: "Funções do visualizador disponíveis",
		admin_repository_readaction_selected_viewers: "Funções do visualizador selecionadas",
		admin_repository_reason_redactions_header: "Razões de edição de dados",
		admin_delete_confirmation_redaction_policy: "Deseja excluir a política de edição de dados selecionada?",
		admin_role_type_repository: "Repositório",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Modelo",
		admin_role_type_teamspace: "Espaço de Equipe",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Visualizador",
		admin_collaboration_services_instructions: "Se você tiver o IBM e um aplicativo da web FileNet Collaboration Services, você pode configurar espaços de comunidade e fluxos de atividade para o repositório.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configuração de biblioteca da comunidade",
		admin_collaboration_community_instruction: "É possível configurar domínio em um repositório do IBM FileNet P8 para armazenar IBM Connections comunidade bibliotecas (também chamados de espaços de equipe). Quando os usuários criam uma biblioteca de comunidades por meio do IBM Connections, ela é armazenada no repositório designado como repositório da biblioteca de comunidades.",
		admin_collaboration_community_teamspaces: "Usar este repositório para bibliotecas de comunidades:",
		admin_collaboration_community_teamspaces_hover: "Você pode utilizar apenas um repositório no domínio do IBM FileNet P8 para armazenar as bibliotecas nova comunidade. Se você ativar esse repositório e você tiver um repositório existente, o repositório existente será desativada. No entanto, todas as bibliotecas existentes permanecerão no repositório atual.",
		admin_collaboration_connections_anonymous: "Permitir acesso anônimo a conteúdo público:",
		admin_collaboration_connections_anonymous_hover: "Se servidor Connections em contato com o IBM contém comunidades pública ou moderada, você pode configurar os Serviços de Colaboração FileNet para permitir que os usuários procurem e fazer download do conteúdo das bibliotecas nessas comunidades sem ter que efetuar login no primeiro.<br><br>Os usuários que acessam as bibliotecas da comunidade anonimamente não pode criar, modificar ou excluir conteúdo.<br><br><b>Importante:</b> Deve-se designar um usuário LDAP do IBM FileNet P8 como usuário anônimo e configurar esse usuário com a função <b>Anônimo</b> no WebSphere Application Server.",
		admin_collaboration_connections_url: "IBM Connections URL:",
		admin_collaboration_connections_url_hover: "Especifique a URL para o servidor Connections em contato com o IBM com o formato http://IBMConnectionsServer:port_number.  Se o IBM Connections está configurado para utilizar o IBM HTTP Server, você pode omitir o número da porta da URL.<br><br>A URL deve ser acessível a usuários do Connections IBM porque este é o link que o FileNet Collaboration Services utiliza para criar links para páginas de entrada de documento no IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilize o IBM Connections URL",
		admin_collaboration_connections_url_https_use: "Use a URL IBM Connections HTTPS",
		admin_collaboration_connections_url_specify: "Especificar uma URL",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "Se o IBM Connections está configurado para utilizar SSL, especifique a URL HTTPS para o servidor Connections em contato com o IBM com o formato https://IBMConnectionsServer:port_number.  Se o IBM Connections está configurado para utilizar o IBM HTTP Server, você pode omitir o número da porta da URL.",

		admin_collaboration_connections_gadget_url: "IBM Connections URL do dispositivo:",
		admin_collaboration_connections_retrieval_url: "IBM Connections recuperação da URL:",
		admin_collaboration_connections_security: "Os administradores de comunidades:",
		admin_collaboration_connections_security_hover: "Especifique os usuários e grupos que podem administrar o conteúdo em bibliotecas da comunidade.<br><br>Os administradores globais podem criar, modificar, excluir e fornecer acesso às bibliotecas de comunidades e ao conteúdo delas. Quando você especificar um usuário como um administrador global, o usuário receberá privilégios ClbGlobalAdministrator no repositório.<br><br>revise os administradores globais podem aprovar e rejeitar o conteúdo que está sob revisão para publicação em uma biblioteca da comunidade. Quando você especificar um usuário como um administrador de revisão global, o usuário receberá privilégios ClbGloablReviewAdministrator no repositório.",

		admin_collaboration_connections_admins: "Administradores Globais",
		admin_collaboration_connections_admins_review: "revise os administradores globais",
		admin_collaboration_connections_seedlist: "Indexe o conteúdo da biblioteca da comunidade:",
		admin_collaboration_connections_seedlist_hover: "Especifique se você deseja efetuar crawl IBM Connections para as bibliotecas da comunidade neste repositório para criar um índice de procura. Criando um Índice pode afetar o desempenho do repositório.<br><br>Se o Social Collaboration Search Extensions Indexação são instalados no repositório, essa opção é ativada por padrão. Se o Search Indexing Social Collaboration Extensions não estão instalados no repositório, o complemento é instalado no repositório quando você ativar essa opção",
		admin_collaboration_activity_stream: "Configuração de evento de fluxo de atividades",
		admin_collaboration_activity_stream_label: "Enviar informações de evento para o IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Especifique se você deseja promover informações de evento, como a criação de documento, registros de saída, registro de plug-ins, comentários, tags e ações, para o IBM.<br><br><b>Importante:</b> Enviando Notificações para o IBM pode afetar o desempenho do repositório.",

		admin_collaboration_activity_stream_instruction: "Você pode configurar esse repositório para informações de evento, como comentários e as aprovações de documento, para o IBM. Eventos são exibidos na página <b>Atualizações Recentes</b> em comunidades IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorar informações de evento para usuários e grupos específicos:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Você pode ignorar eventos que são gerados por usuários ou grupos específicos, como administradores ou contas do sistema, para reduzir o número de notificações que os usuários veem. Por exemplo, se você estiver migrando conteúdo, você pode desejar especificar que os eventos que são gerados pela conta que é utilizado para a migração são ignorados.",
		admin_collaboration_activity_stream_userid: "Nome de usuário do IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Especifique a conta do sistema que será utilizado para autenticar para Content Platform Engine e enviar informações de eventos para o IBM. O usuário deve estar na função <b>trustedExternalApplication</b> no aplicativo Widget Container do IBM Connections.<br><br><b>Dica:</b> Por padrão, o administrador do IBM Connections possui os privilégios apropriados. Você pode utilizar o ID do administrador como o nome do usuário",
		admin_collaboration_activity_stream_password: "Senha de usuário do IBM Connections:",

		admin_help_url: "URL de ajuda do usuário final:",
		admin_help_url_hover: "<b>Observação Importante:</b> O IBM Knowledge Center Customer instalado não será atualizado como o IBM Content Navigator Versão 3.0.0. Entre em contato com o serviço ao consumidor para mais informações sobre como usar a ajuda customizada.<br><br>Como no IBM Content Navigator Version 3.0.0, a URL para ajuda do usuário final fica no IBM Knowledge Center. A URL para o IBM Knowledge Center é: http://www.ibm.com/support/knowledgecenter.<br><br>Se quiser continuar a usar uma versão anterior do IBM Knowledge Center Customer Instalado, selecione esta opção para continuar e adicionar conteúdo a instância do IBM Knowledge Center Customer Instalado que foi implementado pelo IBM Content Navigator Configuration e Deployment Tool. A URL deve estar acessível às máquinas clientes. A URL tem o formato http://server_name:port_number/kc.<br><br>É possível obter o nome e o número da porta do servidor no arquivo console.log que fica no subdiretório KnowledgeCenter/logs do diretório de instalação do IBM Content Navigator.",

		admin_help_default: "Usar a ajuda padrão fornecida pela IBM",
		admin_custom_help: "Usar um sistema de ajuda customizado",
		admin_help_kc: "Usar ajuda customizada no IBM Knowledge Center para Instalação no Cliente",
		admin_help_kc_hover: "<b>Observação Importante:</b> O IBM Knowledge Center Customer instalado não será atualizado como o IBM Content Navigator Versão 3.0.0. Entre em contato com o serviço ao consumidor para mais informações sobre como usar a ajuda customizada.<br><br>Se quiser continuar a usar uma versão anterior do IBM Knowledge Center Customer Instalado, selecione esta opção para continuar e adicionar conteúdo  a instância do IBM Knowledge Center Customer Instalado que foi implementado anteriormente.",
		admin_help_taxonomy: "Código de taxonomia:",
		admin_help_taxonomy_hover: "Especifique o código de taxonomia para a ajuda customizada.<br><br>O código de taxonomia para o IBM Content Navigator é SSEUEX. Se desejar exibir a ajuda em um nome de produto diferente no IBM Knowledge Center para Instalação no Cliente, você deverá incluir um código de taxonomia no arquivo KC_taxonomy.ditamap, no diretório KnowledgeCenter/usr/taxonomy do diretório de instalação do IBM Content Navigator.",
		admin_help_context: "Contexto da ajuda:",
		admin_help_context_hover: "Especifique o contexto da ajuda customizada.<br><br>A ajuda do IBM Content Navigator está no diretório KnowledgeCenter/usr/content/com.ibm.usingeuc.doc do diretório de instalação do IBM Content Navigator. O contexto da ajuda padrão é com.ibm.usingeuc.doc. Se você desejar fornecer ajuda customizada, inclua o conteúdo em um novo subdiretório no diretório KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Página de entrada:",
		admin_help_welcome_hover: "Especifique o nome do tópico que você deseja usar como página de entrada quando os usuários acessarem a ajuda. É necessário criar um arquivo de propriedades que especifique o local da página inicial e incluir o arquivo de propriedades no diretório KnowledgeCenter/usr/conf do diretório de instalação do IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Arquivo JSON de Extensões do Tipo MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verifique o nome do arquivo JSON e o caminho completo para o arquivo. O arquivo pode ser um arquivo geral do sistema de arquivos ou uma URL que aponte para o arquivo JSON.  <br><br>O conteúdo do arquivo JSON é uma matriz para definições de tipo MIME. <br><br>Uma definição de Tipo MIME inclui quatro chaves: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". As primeiras duas chaves, \"mimeTypes\" e \"extensions\", são obrigatórias e podem ser matrizes de sequências separadas por \",\". As duas últimas chaves, \"fileType\" e \"iconName\", são opcionais. <br><br>Por exemplo: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuração do Gerenciador de Tarefa",
		admin_taskmanager_service: "Serviço do gerenciador da Tarefa:",
		admin_taskmanager_service_hover: "Especifique se deseja utilizar o serviço do gerenciador de tarefa para criar e executar tarefas assíncronas. <br><br>Se você alterar essa configuração, deve-se reiniciar o IBM Content Navigator da web de aplicativos para que as alterações tenham efeito.",
		admin_taskmanager_url: "URL do serviço do gerenciador de tarefas:",
		admin_taskmanager_url_hover: "Especifique a URL por meio da qual outros aplicativos podem se comunicar com o serviço do gerenciador de tarefa. A URL tem o formato http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Diretório de log do gerenciador da tarefa:",
		admin_taskmanager_logdirectory_hover: "Por padrão, os arquivos de log para o serviço do gerenciador de tarefa são gravados no mesmo diretório que os arquivos de log do servidor de aplicativos da web. <br><br>Se você deseja informações de log gravadas em um diretório diferente no servidor IBM Content Navigator, especifique o caminho completo do diretório no qual você deseja armazenar os arquivos de log que são geradas pelo componente do gerenciador de tarefa. <br><br>Se você alterar essa configuração, deve-se reiniciar o IBM Content Navigator da web de aplicativos para que as alterações tenham efeito.",
		admin_taskmanager_heartBeatMonitor: "monitoramento de pulsação",
		admin_taskmanager_heartBeatMonitor_hover: "ambientes em cluster altamente disponíveis apenas. Se você ativar esta opção, o serviço do gerenciador de tarefa roteará novamente as tarefas a partir de nós que são atualmente para nós que estão atualmente em execução. <br><br>Se você alterar essa configuração, deve-se reiniciar o IBM Content Navigator da web de aplicativos para que as alterações tenham efeito.",

		admin_syncserver_title: "Configuração do Servidor de Sincronização",
		admin_syncserver_enable: "Serviços de Sincronização",
		admin_syncserver_enable_hover: "Especifique se deseja que os usuários que acessam esta área de trabalho possam sincronizar seus itens em suas estações de trabalho e em seus dispositivos remotos.<br><br><b>Importante:</b> Para usar esse recurso, você também deve concluir as tarefas a seguir:<ul><li>Especifique a <b>URL pública de serviços de sincronização</b> na seção <b>Serviços de Sincronização</b> da ferramenta de administração.</li><li>Inclua um repositório para o qual serviços de sincronização são ativados para essa área de trabalho.</li></ul>Se você desativar essa opção, mas incluir um repositório cujos serviços de sincronização são ativados para essa área de trabalho, a configuração no repositório será ignorada.",
		admin_mobileqr_enable: "Mostrar o código do IBM Navigator QR na página de login:",
		admin_mobileqr_enable_hover: "Ative esta opção se deseja exibir o código do QR para o aplicativo móvel do IBM Navigator na página de login do Web client. <br><br>Quando um usuário verifica o código do QR, ele é levado à loja de aplicativos apropriada para o dispositivo dele, onde podem fazer download do aplicativo móvel do IBM Navigator.",

		admin_streamlineservice_enable: "Edit Service:",
		admin_streamlineservice_enable_hover: "Apenas para usuários do FileNet P8. Ative esta opção se deseja que os usuários da área de trabalho possam incluir e editar facilmente documentos de aplicativos nativos nas estações de trabalho deles. <br><br>Para usar esta configuração, também é necessário: <ul><li>Ativar o serviço de edição em um ou mais repositórios associados a esta área de trabalho</li><li>Instalar o cliente do IBM Content Navigator Edit em estações de trabalho do usuário</li></ul>",

		admin_repository_general_instructions: "Deve-se se conectar ao repositório antes de configurar parâmetros, propriedades de sistema, pastas, etc.",
		admin_repository_system_instructions: "Especifique quais propriedades de sistema são exibidas para os documentos e pastas neste repositório.",

		admin_desktop_general_create_instructions: "Uma área de determina o que o usuário pode ver e fazer quando eles efetuarem login no Web client. Depois de criar uma área de trabalho, é possível enviar a URL de trabalho para os usuários para que eles possam acessar a área de trabalho.",
		admin_desktop_admin_instructions: "A área de de administração é fornecida com o Web client para permitir que usuários administrativos configurem o Web client. Esta área de possui acesso a todos os repositórios que estão configurados para o Web client.",
		admin_desktop_repositories_instructions: "Especifique a quais repositórios você deseja que os usuários tenham acesso a partir desta área de. Deve-se configurar seus repositórios antes de você poder incluí-los na área de.<br><br><b>Dica:</b> É possível limitar quais repositórios estão disponíveis para cada recurso quando você configurar o layout da área.",
		admin_desktop_menus_instructions: "Especifique a quais menus você deseja que os usuários tenham acesso a partir desta área de. Os menus especificam quais ações estão disponíveis dependendo do que estiver selecionado na interface.<br><br><b>Dica:</b> É possível customizar o conteúdo de menus na seção <b>Menus</b> da ferramenta de administração ou é possível criar novos tipos de menus criando plug-ins.",

		admin_desktop_no_repositories: "Não há nenhum repositório configurado.",

		admin_desktop_id_hover: "O ID da área de trabalho é incluído na URL do web client e especifica qual área de trabalho é aberta quando um usuário efetua login no web client. O ID deve ser exclusivo e não é possível alterá-lo depois de salvar a área de trabalho.<br><br>O ID pode conter apenas caracteres alfanuméricos e faz distinção entre maiúsculas e minúsculas.",
		admin_desktop_id_disabled_hover: "O ID da área de não pode ser alterado. Se desejar usar um ID diferente, você deverá criar uma nova área de trabalho.",
		admin_desktop_name_hover: "O nome da área de não pode conter os seguintes caracteres: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Sua configuração não pode conter apenas uma área de trabalho padrão.",

		admin_repository_id_disabled_hover: "O ID do repositório não pode ser alterado. Se desejar usar um ID diferente, você deverá criar uma nova conexão de repositório.",
		admin_printService_enable: "Imprimir usando o serviço de impressão IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Se você escolher ativar o serviço de impressão IBM Daeja ViewONE, os documentos serão convertidos para o formato PDF e a impressão poderá ser concluída usando qualquer navegador da web.<br><br>Se você optar por desativar o serviço de impressão IBM Daeja ViewONE, terá uma limitação para imprimir documentos somente em navegadores da web que suportem applets Java.  Alguns navegadores da web não suportam applets Java e, portanto, não suportam a impressão do applet.<br><br>Consulte a documentação para navegadores suportados.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Diretório da Página Inicial do Usuário",
		admin_file_tracking_doc_directory_my_documents: "Diretório do Usuário Documento",
		admin_file_tracking_doc_directory_qp: "Caminho Qualificado",
		admin_file_tracking_section_tile: "Configuração de Rastreamento de Arquivo",
		admin_file_tracking_home_path: "Caminho Inicial",
		admin_file_tracking_my_documents: "Meus Documentos",
		admin_file_tracking_exact_path: "Caminho Completo:",
		admin_file_tracking_qp: "Caminho Qualificado",
		admin_file_tracking_ev: "Variável do ambiente",
		admin_file_tracking_ev_us: "Variável de Ambiente customizadas ",
		admin_file_tracking_del_local_copy: "Excluir cópia local:",
		admin_file_tracking_yes: "Sim",
		admin_file_tracking_no: "Não",
		admin_file_tracking_del_local_copy_rt_state_editable: "Permitir que os usuários substituam essa configuração",
		admin_file_tracking_del_local_copy_rt_state1: "Sim",
		admin_file_tracking_del_local_copy_rt_state2: "Não",
		admin_file_Tracking_label: "Rastreamento de arquivo:",
		admin_file_Tracking_disable: "Desativar",
		admin_file_Tracking_enable: "Ativar",
		admin_file_tracking_label_hover_help: "Rastreamento de arquivos utiliza um applet para check-out e o download de documentos para um diretório específico em máquinas de usuários. O applet também permite que o IBM Content Navigator para localizar documentos em máquinas de usuários quando os usuários efetuam o registro em documentos.",
		admin_file_tracking_doc_directory: "Localização do Armazenamento:",
		admin_file_tracking_open_file: "Abra o arquivo automaticamente",
		admin_file_Tracking_append_qualified_path: "diretório Anexar",
		admin_file_Tracking_append_qualified_path_hover_help: "É possível anexar um diretório no final da variável de ambiente se você deseja que os documentos a serem salvos em um subdiretório específico. <br/><br/>Por exemplo, você pode especificar que os documentos são transferidos por download para um diretório <i>EnterpriseDocuments</i> dentro do diretório home do usuário.",
		admin_file_Tracking_append_ev: "variável de ambiente Anexar",
		admin_file_Tracking_append_ev_hover_help: "É possível anexar uma variável de ambiente quando você deseja salvar documentos em um diretório especificado dinamicamente, como um diretório de usuário.<br/><br/>Por exemplo, você pode especificar que os documentos são armazenados em um subdiretório <i>user_name</i> em um diretório de rede compartilhada. ",
		admin_file_tracking_doc_directory_hover_help: "Especifique onde os documentos devem ser armazenados quando forem retirados e transferidos por download.<br/><br/> <b>Dica</b>: Se você deseja armazenar os documentos no diretório inicial de um usuário ou do diretório do documento padrão, selecione <b>Variável de Ambiente</b>, que inclui variáveis predefinidas que apontam para esses locais.",
		admin_file_tracking_qualified_path_hover_help: "Utilize a estrutura de diretórios apropriada para seu sistema operacional Windows ou Mac para especificar o diretório diretório ou de rede no qual você deseja armazenar os documentos. <ul><li>Para Windows, inclua uma letra de unidade no caminho, como Documentos C:\\Enterprise.</li><li>Para obter um diretório de rede compartilhada, digite o caminho com o formato \\directory \\sharename</li></ul><br/><b>Importante:</b> Para usar essa opção, a estrutura de diretórios especificada deverá ser capaz de ser criada em todas as estações de trabalho do cliente em seu ambiente.",
		admin_file_tracking_environment_variable_path_hover_help: "Utilize as variáveis de ambiente apropriadas para seu sistema operacional Windows ou Mac para especificar o diretório diretório ou de rede no qual você deseja armazenar os documentos. <br/><br/>A opção <b>Diretório Inicial do Usuário</b> armazena documentos no seguinte diretório:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>O <b>Usuário Documento Diretório</b> opção armazena documentos no seguinte diretório:<br/><ul><li>Windows: \\Documents C:\\Users\\User_name</li><li>Macintosh: Documentos / /Users/User_name</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Especifique se a cópia local de um documento é excluído quando os usuários incluem ou verificam documentos no repositório.<br/><br/>Excluindo a cópia local permite que você:<br/><ul><li>Forçar a conformidade com políticas de TI</li><li>Certifique-se de que os usuários estão trabalhando com as versões mais recentes dos documentos</li></ul><br/><b>Restrição:</b> Esta definição não é utilizada quando os usuários incluírem documentos arrastando e soltando-os.<br/><br/>Para o IBM Content Navigator for Microsoft Office, deve-se selecionar <b>Excluir os arquivos locais quando os usuários incluírem ou check-in em um documento ou cancelarem um check-out</b> na seção <b>Configuração do Office</b> da área de trabalho.",
		admin_file_tracking_open_file_hover_help: "Esta configuração substitui qualquer documento manipulação de preferências que são configurados em usuários de navegadores da web. </br></br><b>Restrição:</b> Esta definição não é utilizada pelo IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Sobrescrever cópia local:",
		admin_file_tracking_over_write_file_hover_help: "Especifique se deseja sobrescrever a cópia local de um documento quando os usuários verificar documentos fora do repositório. <br/><br/>Sobrescrevendo a cópia local permite que você:<br/><ul><li>Certifique-se de que os usuários estão trabalhando com as versões mais recentes dos documentos</li><li>Impedir usuários de ver um prompt quando uma cópia local existe</li></ul> </br></br><b>Restrição:</b> Esta definição não é utilizada pelo IBM Content Navigator for Microsoft Office se você selecionar <b>Permitir que os usuários substituam essa configuração</b>.",
		admin_file_tracking_over_write_file_state_editable: "Permitir que os usuários substituam essa configuração",
		admin_file_tracking_inline_help: "Rastreamento de arquivo simplifica o processo de verificar documentos fora do e no repositório. Ele também permite que você gerencie como os documentos são armazenados em máquinas dos usuários. <br/><br/>Além disso, o rastreamento de arquivo permite que documentos sejam rastreados no IBM Content Navigator vários componentes, como o Web client e o IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Deve-se ativar a autenticação Padrão ou de Servidor antes de se conectar ao repositório.",
		admin_box_use_oauth: "Tipo de Autenticação:",
		admin_box_use_oauth_hover: "Selecione autenticação Padrão ou de Servidor em um ambiente de produção quando estiver fornecendo acesso aos documentos do Box a partir do IBM Content Navigator. Especifique os valores client_id e OAuth2 client_secret que estão associados a essa implementação do IBM Content Navigator. É possível obter esses valores do Box após criar o aplicativo Box para o seu servidor IBM Content Navigator.<br/><br/>Selecione a autenticação de Desenvolvedor em um ambiente de desenvolvimento. Os desenvolvedores podem efetuar login no Box usando suas contas de desenvolvedores e gerar um token de desenvolvedor que seja válido por 60 minutos. Os tokens de desenvolvedor permitem aos desenvolvedores efetuar login no Box usando o token de desenvolvedor como a senha para qualquer ID do usuário.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdomínio da conta corporativa do Box:",
		admin_box_share: "ID de conexão do gerenciador de tarefa:",
		admin_box_share_hover: "Para cópia do Box ou compartilhamento do Box, o gerenciador de tarefa usa um ID de usuário administrador e senha para executar tarefas em segundo plano que modificam o repositório.<br/><br/>Clique em Configurar e efetue login no Box usando uma conta do administrador válida do Box.<br/><br/>Se configurar uma área de trabalho selecionando esse repositório de Box como o repositório para arquivos compartilhados, deve-se especificar um usuário administrador do Box que tenha armazenamento ilimitado no Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Abra o arquivo automaticamente",
		file_tracking_runtime_overwrite_hover_help: "Se você não selecionar essa opção e você tiver um documento em seu sistema de arquivos local com o mesmo nome, o documento será retirado, mas não transferido por download a menos que você execute uma das seguintes ações:<br/><ul><li> Faça download do documento para um subdiretório do diretório padrão. Se você selecionar um subdiretório, o local do documento podem ser rastreadas pelo aplicativo da web.</li><li>Renomeie o documento que você está fazendo download. Renomeando o documento impede um conflito de nome de arquivo.</li></ul>",
		open_file: "Abra o arquivo automaticamente",
		over_write_file: "cópia local Sobrescrever",
		checkout_and_download_file: "Efetuar Check-out e Fazer Download de Documentos",
		download_to_local_directory: "Fazer download para:",
		checkout_and_download_button_title: "Efetuar Check-out e Fazer Download",
		checkout_without_java_confirmation_dialog: "O arquivo não pode ser transferido por download e rastreados pelo recurso de rastreamento de arquivos.",
		browse_for_directory: "Pesquisar",
		selected_documents: "Documentos Selecionados",

		checkout_without_java_confirmation_text: "Esse problema pode ocorrer pelas seguintes razões:<br/><ul><li>O Java Runtime Environment (JRE) não está instalada em sua estação de trabalho.</li><li>O plug-in Java não está ativado em seu navegador da Web.</li><li>Seu navegador da Web não suporta o Java.</li></ul><br/><br/>Para resolver esse problema, execute a ação apropriada:<br/><br/><ul><li>Se você deseja continuar a fazer download do arquivo sem arquivo de rastreamento ativado, clique em OK.</li><li>Se você deseja fazer download do arquivo com o arquivo de rastreamento estiver ativada, cancele o download e verifique se o JRE está instalado na estação de trabalho e que o plug-in Java está ativado em seu navegador da Web.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "O documento foi retirado e transferido por download, mas o documento não pode ser aberto.",
		runtime_file_tracking_open_error_explanation: "O sistema operacional que está instalado em sua estação de não suporta arquivos deste tipo.",
		runtime_file_tracking_open_error_userResponse: "Para resolver o problema, execute uma das seguintes ações:<br/><br/><ul><li>Se você precisar trabalhar com o documento, abra o web client em outra estação de trabalho que tenha um sistema operacional diferente.</li><li>Se você só precisar visualizar o documento, clique com o botão direito do mouse no documento no Web client e clique em Abrir.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "O documento foi retirado, mas não foi transferido por download.",
		runtime_file_tracking_save_file_error_explanation: "um documento com o mesmo nome existe no sistema de arquivos local, mas ele não foi sobrescrito. ",
		runtime_file_tracking_save_file_error_userResponse: "Se você deseja fazer download do arquivo do repositório, deve-se sobrescrever a cópia local do documento quando você fazer download do documento do repositório.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "O documento foi retirado, mas o documento não pode ser transferido por download ou aberto.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Existe um documento com o mesmo nome no sistema de arquivos local. Entretanto, o arquivo não foi sobrescrito, evitando que o documento no repositório seja transferido por download e aberto.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Se você deseja fazer download do arquivo do repositório, deve-se sobrescrever a cópia local do documento quando você fazer download do documento do repositório.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "O documento não pode ser transferido por download.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "O ${0} variável de ambiente, que é necessária para o rastreamento de arquivo, não está definida neste computador cliente.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Para resolver o problema:<br/><br/><ul><li>Inclua o ${0} variável de ambiente para as variáveis de ambiente do sistema operacional.</li><li>Efetue logout do Web client e feche o navegador da web. Em seguida, efetue login novamente.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "O documento não pode ser transferido por download e rastreados pelo applet rastreamento de arquivos.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "O diretório ${0}, que é obrigatório para rastreamento de arquivo, não está definido e não pode ser criado.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Para resolver esse problema, execute a ação apropriada:<br/><br/><ul><li>Clique em Pesquisar e selecione outro diretório na máquina cliente. Se você selecionar esta opção, o arquivo não será rastreado.</li><li>Entre em contato com o administrador do sistema e solicite que eles para especificar um diretório diferente a ser utilizado para os arquivos de rastreio. Por exemplo, isso pode ser necessário se o diretório especificado é para um sistema operacional Windows, mas você estiver executando o Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Se esta área é acessado a partir de dispositivos com sistemas operacionais diferentes, você pode reduzir a probabilidade de problemas executando uma das seguintes ações:<br/><br/><ul><li>Utilize as variáveis de ambiente para especificar o local de armazenamento em máquinas clientes.</li><li>Crie diferentes áreas de trabalho para os usuários de cada tipo de dispositivo. Por exemplo, crie uma área de trabalho para usuários com um sistema operacional Windows e uma área de trabalho para usuários com Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Sua solicitação não pode ser processada.",
		runtime_file_tracking_generic_error_explanation: "Ocorreu um erro no applet rastreamento de arquivos.",
		runtime_file_tracking_generic_error_userResponse: "Entre em contato com o administrador do sistema para obter assistência.",
		runtime_file_tracking_generic_error_adminResponse: "Abra o console Java e tente submeter o pedido novamente. Os detalhes do erro serão exibidos no console Java.<br/><br/>Você pode acessar o console Java a partir do Painel de Controle (Windows) ou Sistema de Preferências (Macintosh) para seu sistema operacional.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Seu pedido não pode ser processado",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Os seguintes arquivos foram incluídos no repositório, mas não foram excluídos a partir do seu sistema de arquivos local: ${0}. Isso geralmente ocorre quando os arquivos são abertos ou estão sendo utilizadas por outro aplicativo. Se necessário, você pode excluir manualmente os arquivos.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "O documento não pode ser transferido por download.",
		runtime_file_tracking_ioexception_error_explanation: "O documento não pode ser transferido por download.",
		runtime_file_tracking_ioexception_userResponse: "Você pode não ter as permissões apropriadas para gravar no seguinte diretório: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Assegure-se de que você tenha as permissões de gravação ao diretório especificado. Se você não possui permissões de gravação para o diretório especificado, entre em contato com o administrador do sistema.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Sua solicitação não pode ser processada.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Este erro pode ocorrer pelos seguintes motivos:<br/><br/><ul><li>Você está usando Safari no sistema operacional Mac e Java está em execução no modo de segurança.</li><li>Você não possui permissões de leitura/gravação para o diretório especificado na configuração de rastreamento de arquivos da sua área de trabalho.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "É possível continuar usando o IBM Content Navigator sem rastreamento de arquivos, ou é possível concluir as seguintes etapas para resolver o problema:<br/><br/><ol><li>Ative o modo de não segurança do Java no Safari.</li><li>Se questionado sobre se deseja confiar no website do IBM Content Navigator, clique em <b>Confiar</b> para carregar a página e então ative o modo de não segurança do Java no Safari.</li></ol><br/><br/>Se o Safari estiver configurado corretamente, conclua as seguintes etapas para resolver o problema:<br/><br/><ol><li>Assegure-se de que você tenha as permissões de leitura/gravação para o diretório especificado na configuração de rastreamento de arquivos para sua área de trabalho.</li><li>Se não tiver permissões de leitura/gravação no diretório, edite as permissões no diretório.</li><li>Se não puder editar suas permissões no diretório, o administrador deverá alterar o diretório configurado para rastreamento de arquivos ou dar acesso a uma área de trabalho que tenha um diretório de rastreamento de arquivos diferente configurado.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Sua solicitação não pode ser processada.",
		runtime_file_tracking_java__notfound_error_explanation: "Esse erro de problema normalmente ocorre nas seguintes situações:<br/><br/><ul><li>O Java Runtime Environment (JRE) não está presente ou ativado em sua estação de trabalho.</li><li>A versão do JRE na sua estação de trabalho não é compatível com a versão do IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "É possível continuar usando o IBM Content Navigator sem rastreamento de arquivos, ou é possível concluir as seguintes etapas para resolver o problema com o JRE<br/><br/><ol><li>Assegure-se que o JRE esteja instalado na sua área de trabalho.</li><li>Assegure-se que  a versão do JRE na sua estação de trabalho seja compatível com o IBM Content Navigator. Uma lista das versões suportadas é incluída no documento <i>Pré-requisitos de Hardware e Software para IBM Content Navigator</i> no site Suporte de Software IBM.</li><li>Assegure-se que o JRE esteja ativado na sua área de trabalho.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Sua solicitação não pode ser processada.",
		runtime_file_tracking_security_error_explanation: "Você não possui permissões de leitura/gravação para o diretório especificado na configuração de rastreamento de arquivos da sua área de trabalho.",
		runtime_file_tracking_security_error_userResponse: "É possível continuar usando o IBM Content Navigator sem rastreamento de arquivos, ou trabalhar com o administrador do sistema para concluir as seguintes etapas:<ol><li>Assegure-se de que você tenha as permissões de leitura/gravação para o diretório especificado na configuração de rastreamento de arquivos para sua área de trabalho. </li><li>Se não tiver permissões de leitura/gravação no diretório, edite as permissões no diretório.</li><li>Se não puder editar suas permissões no diretório, o administrador deverá alterar o diretório configurado para rastreamento de arquivos ou dar acesso a uma área de trabalho que tenha um diretório de rastreamento de arquivos diferente configurado.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Os seguintes documentos foram transferidos por download: ${0}.",

		admin_file_tracking_inline_help: "Rastreamento de arquivo simplifica o processo de inclusão de documentos em e verificar documentos fora do e no repositório. Ele também permite que você gerencie como os documentos são armazenados em máquinas dos usuários de.<br/><br/>Além disso, o rastreamento de arquivo permite que documentos sejam rastreados no IBM Content Navigator vários componentes, como o Web client e o IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "O ID do menu não pode começar com \"Padrão\".  \"Padrão\" é um prefixo reservado para IDs de menus.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "O ID pode conter apenas caracteres alfanuméricos e faz distinção entre maiúsculas e minúsculas.",
		admin_repository_id_hover: "O ID do repositório está incluído em URLs do web client, favoritos e links de e-mail para especificar em qual repositório para efetuar login no. O ID deve ser exclusivo e não é possível alterá-lo depois de salvar o repositório.<br><br>O ID pode conter apenas caracteres alfanuméricos e faz distinção entre maiúsculas e minúsculas.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "O nome não pode conter nenhum dos seguintes caracteres: * \\ /: ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "O ID da área não pode conter espaços ou nenhum dos caracteres a seguir : * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "O nome da área de não pode conter nenhum dos seguintes caracteres: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "O nome de exibição não pode conter quaisquer dos caracteres a seguir: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Especifique o nome de repositório a ser exibido para usuários no web client.<br><br>O nome não pode conter os seguintes caracteres: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Especifique o nome do host ou o endereço IP do servidor do Content Manager OnDemand ao qual você deseja se conectar, por exemplo, server.id.com.",
		admin_server_p8_name_hover: "Especifique a URL do servidor Content Engine ou Content Platform Engine. A URL faz distinção entre maiúsculas e minúsculas e tem o seguinte formato:<br><br><ul><li>No WebSphere Application Server, iiop://host_name:port_number/FileNet/Engine. Em implementações de base, o número de porta padrão é 2809.</li><li>No WebLogic Server, t3://host_name:port_number/FileNet/Engine. O número da porta padrão é 7001.</li></ul><br><br>Para configurações altamente disponíveis do Content Engine e Content Platform Engine, use a URL de transporte EJB altamente disponível sem o prefixo cemp:. ",
		admin_server_p8_protocol_hover: "Especifique o protocolo para usar para se comunicar com o Content Engine.",
		admin_server_cm_name_hover: "Especifique o nome do catálogo local do banco de dados do Content Manager ou o nome de conexão do servidor de bibliotecas. Esse nome é o valor que é especificado para a variável ICMSERVER.",
		admin_repository_cmis_hover: "Especifique o ID do repositório ao qual você deseja se conectar.  O ID de cada repositório em seu ambiente do CMIS é listado no documento de serviço de ligação AtomPub.  <br/><br/><b>Dica:</b>Também é possível inserir um asterisco (*) para conectar ao primeiro ou único repositório que está definido no documento de serviço de ligação Atompu.",
		admin_url_cmis_hover: "O formato da URL varia por provedor de serviços. Consulte a documentação do CMIS ou entre em contato com o administrador do servidor do CMIS para obter a URL.",
		admin_repcfg_cmis_status_columns_hover: "Especifique os estados de item para os quais deseja ver ícones. Os ícones de estado são exibidos ao lado de documentos na lista de conteúdos.",
		admin_port_hover: "Especifique o número da porta do TCP/IP na qual o servidor do Content Manager OnDemand atende. O valor padrão é 1445.",
		admin_unified_searches_hover: "Especifique se deseja que os usuários possam salvar procuras entre repositórios neste repositório.<br/><br/>Se você não ativar essa opção, os usuários ainda poderão criar procuras entre repositórios executadas com relação a esse repositório. É possível impedir os usuários de criarem procuras entre repositórios em nível de área de trabalho.<br/><br/>Se você ativar procuras entre repositórios, o IBM Content Navigator criará o modelo de dados de procura entre repositórios no repositório.<br/><br/>Para o IBM FileNet Content Manager, deve-se se conectar ao repositório como um administrador do Content Engine antes de ativar essa opção.",
		admin_unified_searches_cm_hover: "Especifique se deseja que os usuários possam salvar procuras entre repositórios neste repositório.<br/><br/>Se você não ativar essa opção, os usuários ainda poderão criar procuras entre repositórios executadas com relação a esse repositório. É possível impedir os usuários de criarem procuras entre repositórios em nível de área de trabalho.<br/><br/>Se você ativar procuras entre repositórios, o IBM Content Navigator criará o modelo de dados de procura entre repositórios no repositório.",
		admin_max_results_hover: "Especifique se deseja limitar o número de resultados que são retornados por uma procura. Se você não limitar o número de resultados da procura, você poderá ter problemas de desempenho se uma pesquisa retornar um grande número de resultados.",
		admin_timeout_hover: "Especifique por quanto tempo, em segundos, uma Procura pode ser executada no repositório. Se a procura não concluída no tempo especificado, o Web client cancelará a solicitação. O tempo limite máximo recomendado é de 60 segundos.",
		admin_object_store_hover: "Especifique o armazenamento de objeto ao qual você deseja se conectar no servidor do Content Engine. É possível obter o nome simbólico do Content Platform Engine do console de administração.",
		admin_object_store_display_name_hover: "O nome de exibição do armazenamento de objeto é necessário se você deseja usar fluxos de IBM FileNet P8. É possível obter o nome de exibição no armazenamento de objeto do Content Platform Engine do console de administração.",
		admin_all_searches_hover: "Especifique se deseja limitar o número de Procuras que são exibidas em <b>Todas as Procuras</b> quando os usuários estão Procurando no repositório. Se você não limitar o número de Procuras, você poderá ter problemas de desempenho se o repositório incluir um grande número de Pesquisas salvas.",

		admin_text_desktop: "Área de Trabalho",
		admin_text_repository: "Repositório",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Tema",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Razão de edição de dados",
		admin_text_redactions: "Edições de Dados",
		admin_text_viewer_mapping: "Mapeamento de visualizador",
		admin_text_mobile_feature: "Recurso remoto",
		admin_test_interface_text: "Texto da interface",
		admin_text_interface_text_locale: "Texto da interface localizado",
		admin_text_icon_status: "Ícone de Status",
		admin_text_icon: "Ícone",
		admin_text_file_type: "Tipo do arquivo",
		admin_text_viewer: "Visualizador",
		admin_text_desktop_access: "Acesso a área de trabalho",
		admin_text_mapped_properties_for_office: "Propriedades mapeadas para Microsoft Office",
		admin_text_desktop_features: "Recursos da área de trabalho",
		admin_text_unknown: "Desconhecido",
		admin_folder_instruction: "Especifique as propriedades exibidas para os documentos e pastas na lista de conteúdos quando os usuários estiverem navegando. Também é possível especificar a ordem na qual as propriedades são exibidas.",
		admin_search_instruction: "Especifique quais opções são selecionadas por padrão quando os usuários criam uma procura.",
		admin_repository_office_conf_class_instruction: "Se você tiver o IBM Content Navigator for Microsoft Office instalado nos computadores cliente em seu ambiente, será possível especificar como os documentos são manipulados quando eles forem incluídos ou tiverem o check-in efetuado neste repositório.",
		admin_repository_office_conf_instruction: "As propriedades do documento do Map Microsoft Office para propriedades que são definidas neste repositório.<br/><br/>Quando o mapeamento de propriedade está ativado para uma área de trabalho que está associada com este repositório, as propriedades que são configuradas nos documentos do Microsoft Office são usadas para preencher as propriedades no repositório quando o usuário inclui um documento do IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mapeamento de Propriedade",
		admin_repository_office_conf_prop_mapping_title1: "Integração do MS Office",
		admin_office_conf_instruction: "É possível controlar como o IBM Content Navigator se integra com os aplicativos Microsoft Office quando o IBM Content Navigator for Microsoft Office está instalado em computadores cliente<br /><br /><b>Importante:</b> Se selecionar <b>Mapear propriedades do Office…</b>, você também deverá configurar o mapeamento de propriedade para cada repositório associado a essa área de trabalho. É possível configurar os mapeamentos de propriedade na guia <b>Propriedades do Office</b> para cada repositório em seu ambiente.",
		admin_desktop_workflows_instruction: "<b>Apenas sistemas IBM FileNet P8:</b> Especifique quais espaços do aplicativo serão exibidos nesta área de trabalho. A ordem dos espaços do aplicativo selecionados determina a ordem na qual os espaços do aplicativo serão exibidos no Web client.<br><br><b>Dica:</b> É possível alterar o nome de exibição dos espaços de aplicativo especificando novos nomes na seção <b>Rótulos</b> da ferramenta de administração.",
		admin_search_filtered_properties_instruction: "Especifique as propriedades que os usuários podem procurar. É possível ocultar quaisquer propriedades que você não deseja que os usuários procurem.",
		admin_search_filtered_operators_instruction: "Especifique os operadores que estarão disponíveis quando os usuários estiverem Procurando determinado tipo de dados, como uma data ou um número inteiro. É possível ocultar os operadores que você não deseja que os usuários selecionem.",
		admin_search_default_search_results_instruction: "Especifique as propriedades que são exibidas nos documentos e pastas nos resultados da procura. É possível ocultar quaisquer propriedades que você não desejar que apareçam nos resultados da procura.",
		admin_search_default_search_results_p8_cmis_instruction: "Especifique as propriedades que são exibidas nos documentos nos resultados da procura. É possível ocultar quaisquer propriedades que você não desejar que apareçam nos resultados.",

		admin_datetimeOp: "Date Time",
		admin_floatOp: "Número de vírgula flutuante",
		admin_integerOp: "Número Inteiro",
		admin_stringOp: "Cadeia",
		admin_binaryOp: "Binário",
		admin_objectOp: "Object",
		admin_idOp: "ID",
		admin_userOp: "Usuário",
		admin_booleanOp: "Booleano",

		admin_string: "Cadeia",
		admin_long: "Longo",
		admin_date: "Data",
		admin_double: "Duplo",
		admin_object: "Object",
		admin_guid: "GUID",
		admin_boolean: "Booleano",

		admin_repcfg_heading: "É possível substituir o comportamento padrão deste repositório, definindo os parâmetros de configuração.",
		admin_repcfg_heading_od: "É possível substituir o comportamento padrão deste repositório, definindo os parâmetros de configuração.<br /><br /><b>Importante:</b> Para usar o web client com o Content Manager OnDemand, você também deverá especificar valores para os parâmetros que estão incluídos na guia <b>Content Manager OnDemand</b> em <b>Configurações</b>, que se aplicarem a todos os repositórios do Content Manager OnDemand aos quais você se conectar.",
		admin_repcfg_teamspaces: "Gerenciamento de equipe:",
		admin_repcfg_enable: "Ativar",
		admin_repcfg_disable: "Desativar",

		admin_repcfg_deliver_redacted_pdf_files_as: "Os arquivos PDF editados serão entregues como:",
		admin_repcfg_burn_pdf_to_pdf: "Arquivos PDF",
		admin_repcfg_burn_pdf_to_tiff: "Arquivos TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Um arquivo PDF que é editado aplicando edições baseadas em função pode ser entregue ao cliente em um formato de arquivo diferente. Quando o formato de arquivo muda, a extensão do arquivo e o tipo MIME também mudam.<br><br>Por exemplo, quando um arquivo PDF é entregue como um arquivo TIFF, a extensão do arquivo é mudada para .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Permita que usuários mesclem e dividam páginas com edições em funções",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Selecione esta opção para permitir que usuários mesclem e dividam páginas com edições baseadas em funções. Usuários que não sejam editores de dados não conseguirão executar edições de dados baseadas em função e não terão acesso aos dados sensíveis associados às edições de dados baseadas em função, mesmo se esta opção estiver ativada.",
		admin_repcfg_modify_teamspace_roles: "Permitir que proprietários modifiquem as funções de espaços de equipe existentes",
		admin_repcfg_tm_delete_teamspace: "Ative para excluir proprietários de equipe, incluindo conteúdo",
		admin_repcfg_tm_delete_teamspace_id_missing: "Deve-se especificar o nome do usuário de um administrador de repositório.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Deve-se especificar a senha do administrador de repositório.",
		admin_repcfg_teamspace_display_Recent: "Mostrar apenas espaços de equipe recentemente modificados ",
		admin_repcfg_teamspace_display_Recent_value: "Dias desde a última modificação:",

		admin_repcfg_folder_selector: "Pasta raiz:",
		admin_repcfg_enable_folder_selector: "Ativar",
		admin_repcfg_disable_folder_selector: "Desativar",
		admin_repcfg_SSO: "Conexão única:",
		admin_repcfg_teamspace_template_permission_text: "Designar criadores do modelo de espaço de equipe:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Especifique os grupos ou usuários que podem criar modelos de espaços de equipe. Os usuários e grupos são fornecidas as configurações de segurança apropriadas nas classes necessárias e pastas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saiba Mais</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de equipe.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Especifique os grupos ou usuários que podem criar modelos de espaços de equipe. Os usuários são incluídos no ACLs apropriadas e tendo os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saiba Mais</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de equipe.",
		admin_repcfg_teamspace_permission_text: "Designar funções de espaços de equipe:",
		admin_repcfg_teamspace_permission_hover_p8: "Especifique os grupos ou usuários que podem criar espaços de equipe e utilizar espaços de equipe. Os usuários são fornecidas as configurações de segurança apropriadas nas classes necessárias e pastas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saiba Mais</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de equipe.",
		admin_repcfg_teamspace_permission_hover_cm: "Especifique os grupos ou usuários que podem criar espaços de equipe e utilizar espaços de equipe. Os usuários são incluídos no ACLs apropriadas e tendo os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saiba Mais</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de equipe.",
		admin_repcfg_entry_template_permission_text: "Designar funções de modelo de entrada:",
		admin_repcfg_entry_template_permission_hover_p8: "Especifique os grupos ou usuários que podem criar modelos de entrada e usar modelos de entrada. Os usuários são fornecidas as configurações de segurança apropriadas na classe de documento Modelo de Entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saiba Mais</a><br/><br/><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de modelo de entrada.",
		admin_repcfg_entry_template_permission_hover_cm: "Especifique os grupos ou usuários que podem criar modelos de entrada e usar modelos de entrada. Os usuários são incluídos no ACLs apropriadas e tendo os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saiba Mais</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de modelo de entrada.",
		admin_repcfg_office_template_permission_text: "Designar funções de modelo:",
		admin_repcfg_office_template_permission_hover_cm: "Especifique os grupos ou usuários que podem criar, editar e usar os modelos do Microsoft Office Online ou do Edit Service. Os usuários são incluídos no ACLs apropriadas e tendo os privilégios necessários.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a><br /><br /><b>Recomendação:</b> use os grupos para simplificar o gerenciamento de modelo do Microsoft Office Online ou do Edit Service.",
		admin_repcfg_draft_permission_text: "Atribua funções de rascunho:",
		admin_repcfg_draft_permission_hover_cm: "Especifique os grupos ou usuários que podem criar rascunhos de documentos do Microsoft Office Online ou o Edit Service durante a edição colaborativa. Qualquer usuário que precise editar documentos de forma colaborativa no Microsoft Office Online ou no Edit Service deve ter os privilégios apropriados para criar rascunhos. Os usuários são incluídos no ACLs apropriadas e tendo os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a><br /><br /><b>Recomendação:</b> Use grupos para simplificar o gerenciamento de rascunhos.",
		admin_repcfg_search_permission_text: "Designar funções de procura:",
		admin_repcfg_search_permission_hover_p8: "Especifique os grupos ou usuários que podem criar ou utilizar procuras salvas e procuras entre repositórios. Os usuários são fornecidas as configurações de segurança apropriadas nas classes necessárias. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Saiba Mais</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de procura.",
		admin_repcfg_search_permission_hover_cm: "Especifique os grupos ou usuários que podem criar, editar ou utilizar procuras salvas e procuras entre repositórios. Os usuários são incluídos no ACLs apropriadas e tendo os privilégios necessários. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saiba Mais</a><br /><br /><b>Recomendação:</b> Utilize grupos para simplificar o gerenciamento de procura.",
		admin_repcfg_search_permission_title: "Funções de Procura",
		admin_repcfg_search_permission_intro_text: "Certifique-se de que os usuários tenham acesso a uma área de trabalho que suporte o seu papel. Por exemplo, certifique-se de que os criadores pesquisa ter acesso a uma área que lhes permite criar procuras e procuras entre repositórios.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "modelo de administradores são usuários que têm <b>Controle integral</b> permissões no repositório (de armazenamento de objeto). é possível alterar a lista de administradores de modelo de equipe da ferramenta de administração. <p>Os administradores de modelos de espaços de equipe podem excluir ou modificar quaisquer modelos de espaços de equipe. O usuário que cria um modelo de equipe não precisam compartilhar o modelo com o modelo de equipe de administradores.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Quando você designa um usuário ou grupo como um criador do modelo de equipe, o usuário ou grupo é dada a segurança apropriada no repositório para criar modelos de espaços de equipe. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saiba Mais</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Os usuários e grupos que possuem privilégios designados diferentes dos privilégios que estão associados a Administradores e Criadores.<p>É possível mover esses usuários e grupos para a mesma função de criadores do modelo de espaço de equipe, removendo-os da função Outros e, em seguida, designando-os como criadores do modelo de espaço de equipe.<p>É possível revisar os privilégios atualmente concedidos a esses usuários e grupos usando o IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Os administradores de espaços de equipe são usuários que têm <b>Controle total</b> sobre o repositório (armazenamento de objeto). É possível alterar a lista de administradores de equipe da ferramenta de administração.<p>os administradores podem excluir ou modificar qualquer espaço de equipe. O usuário que cria uma equipe não precisam compartilhar o espaço com os administradores de equipe.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Quando você designa um usuário ou grupo como um criador de equipe, o usuário ou grupo é dada a segurança apropriada no repositório para criar espaços de equipe. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saiba Mais</a>",
		admin_repcfg_teamspace_user_hover_p8: "Quando você designa um usuário ou grupo como um usuário de equipe, o usuário ou grupo é dada a segurança apropriada no repositório para usar espaços de equipe. No entanto, um usuário deve ser um membro de uma equipe para acessar o espaço de equipe. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saiba Mais</a><p><b>Dica:</b> Se você deseja que todos os usuários em seu ambiente para serem capazes de ver espaços de equipe, você pode incluir a pseudoconta #AUTHENTICATED-USERS conta para a função de usuário de equipe.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Os usuários e grupos que possuem privilégios designados diferentes dos privilégios que estão associados a Administradores, Criadores e Usuários.<p>É possível mover esses usuários e grupos para funções predefinidas removendo-os da função Outros e, em seguida, designando funções de espaço de equipe a eles.<p>É possível revisar os privilégios atualmente concedidos a esses usuários e grupos usando o IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "modelo de entrada de administradores são usuários que têm <b>Controle integral</b> permissões no repositório (de armazenamento de objeto). é possível alterar a lista de administradores do modelo de entrada da ferramenta de administração. <p>Os administradores do modelo de entrada pode excluir ou modificar qualquer modelo de entrada. O usuário que cria um modelo de entrada não precisam compartilhar o modelo de entrada com administradores do modelo de entrada.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Quando você designa um usuário ou grupo como um criador de modelo de entrada, o usuário ou grupo é dada a segurança apropriada no repositório para criar modelos de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saiba Mais</a>",
		admin_repcfg_entry_template_user_hover_p8: "Quando você designa um usuário ou grupo como um usuário modelo de entrada, o usuário ou grupo é dada a segurança apropriada no repositório para usar modelos de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saiba Mais</a><p><b>Dica:</b> Se você deseja que todos os usuários em seu ambiente para poder usar modelos de entrada, você pode incluir a pseudoconta #AUTHENTICATED-USERS conta para a função de usuário modelo de entrada.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Os usuários e grupos que possuem privilégios designados diferentes dos privilégios que estão associados a Administradores, Criadores e Usuários.<p>É possível mover esses usuários e grupos para funções predefinidas removendo-os da função Outros e, em seguida, designando funções de modelo de entrada a eles.<p>É possível revisar os privilégios atualmente concedidos a esses usuários e grupos usando o IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Quando você designa um usuário ou grupo como um criador do modelo de equipe, o usuário ou grupo é fornecido os privilégios apropriados para criar modelos de espaços de equipe no repositório. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saiba Mais</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Quando você designa um usuário ou grupo como um criador de equipe, o usuário ou grupo é fornecido os privilégios apropriados para criar espaços de equipe no repositório. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saiba Mais</a>",
		admin_repcfg_teamspace_user_hover_cm: "Quando você designa um usuário ou grupo como um usuário de equipe, o usuário ou grupo é fornecido os privilégios apropriados para utilizar espaços de equipe no repositório. No entanto, um usuário deve ser um membro de uma equipe para acessar o espaço de equipe. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saiba Mais</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Quando você designa um usuário ou grupo como um criador de modelo de entrada, o usuário ou grupo é fornecido os privilégios apropriados para criar modelos de entrada no repositório. <br/><br/>No entanto, as configurações de segurança para um modelo de entrada específico determinar os privilégios que o usuário ou grupo tem no modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saiba Mais</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Quando você designa um usuário ou grupo como um editor modelo de entrada, o usuário ou grupo é fornecido os privilégios apropriados para modificar modelos de entrada no repositório. <br/><br/>No entanto, as configurações de segurança para um modelo de entrada específico determinar os privilégios que o usuário ou grupo tem no modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saiba Mais</a>",
		admin_repcfg_entry_user_hover_cm: "Quando você designa um usuário ou grupo como um usuário modelo de entrada, o usuário ou grupo é fornecido os privilégios apropriados para usar modelos de entrada no repositório. <br/><br/>No entanto, as configurações de segurança para um modelo de entrada específico determinar os privilégios que o usuário ou grupo tem no modelo de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saiba Mais</a>",
		admin_repcfg_office_template_creators_hover_cm: "Quando você designa um usuário ou grupo como um criador de modelo do Microsoft Office Online ou do Edit Service, o usuário ou grupo recebe os privilégios apropriados para criar arquivos de modelo no repositório. <br/><br/>No entanto, as configurações de segurança para um arquivo de modelo específico determinam os privilégios que o usuário ou grupo possui no modelo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a>",
		admin_repcfg_office_template_editors_hover_cm: "Quando você designa um usuário ou grupo como um editor de modelo do Microsoft Office Online ou do Edit Service, o usuário ou grupo recebe os privilégios apropriados para modificar arquivos de modelo no repositório.  <br/><br/>No entanto, as configurações de segurança para um arquivo de modelo específico determinam os privilégios que o usuário ou grupo possui no modelo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a>",
		admin_repcfg_office_template_user_hover_cm: "Quando você designa um usuário ou grupo como um usuário de modelo do Microsoft Office Online ou do Edit Service, o usuário ou grupo recebe os privilégios apropriados para aplicar um modelo quando eles criam um novo documento do Office Online ou Edit Service por meio do Web client.  <br/><br/>No entanto, as configurações de segurança para um arquivo de modelo específico determinam os privilégios que o usuário ou grupo possui no modelo.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a>",
		admin_repcfg_draft_creators_hover_cm: "Qualquer usuário que precisar editar documentos de forma colaborativa no Microsoft Office Online ou Edit Service deverá ter esta função designada. Não atribua aos usuários funções de editor ou usuário. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a>",
		admin_repcfg_draft_editors_hover_cm: "Qualquer usuário que precisar editar documentos de forma colaborativa no Microsoft Office Online ou Edit Service deverá ter a função de <b>criador</b> designada. Se um usuário está designado para uma função de editor, ele não pode criar rascunhos, que são necessários para edição colaborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a>",
		admin_repcfg_draft_user_hover_cm: "Qualquer usuário que precisar editar documentos de forma colaborativa no Microsoft Office Online ou Edit Service deverá ter a função de <b>criador</b> designada. Se um usuário é designado para uma função de usuário, ele não poderá criar rascunhos, que são necessários para a edição colaborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saiba Mais</a>",		
		admin_repcfg_search_others_hover_p8: "Os usuários e grupos que possuem privilégios designados diferentes dos privilégios que estão associados a Administradores, Criadores e Usuários.<p>É possível mover esses usuários e grupos para funções predefinidas removendo-os da função Outros e, em seguida, designando funções de procura a eles.<p>É possível revisar os privilégios atualmente concedidos a esses usuários e grupos usando o IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Os administradores são usuários que têm <b>Controle integral</b> permissões no repositório (do armazenamento de objeto). é possível alterar a lista de administradores de procura a partir da ferramenta de administração. <br /><br />Os administradores podem excluir ou modificar qualquer procura. O usuário que cria uma procura não precisam compartilhar a pesquisa com os administradores de procura.",
		admin_repcfg_search_creators_hover_p8: "Quando você designa um usuário ou grupo como um criador de pesquisa, o usuário ou grupo é dada a segurança apropriada no repositório para criar procuras. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Saiba Mais</a>",
		admin_repcfg_search_user_hover_p8: "Quando você designa um usuário ou grupo como um usuário de procura, o usuário ou grupo é dada a segurança apropriada no repositório para usar as procuras <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Aprender mais</a><br /><br /><b>Dica:</b> Se você deseja que todos os usuários em seu ambiente para poder usar as procuras, você pode incluir a pseudoconta #AUTHENTICATED-USERS conta para a função de usuário de procura.<br/><br />Por padrão, um usuário de procura podem criar procuras e procuras entre repositórios mas não podem salvá-las. Você pode impedir que os usuários de criar procuras por ter eles procura utilizem uma área de trabalho para a qual as seguintes opções estejam selecionadas:<ul><li><b>Impedir os usuários de criar procuras</b></li><li><b>Impedir usuários de criar procuras entre repositórios</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Quando você designa um usuário ou grupo como um criador de pesquisa, o usuário ou grupo é fornecido os privilégios apropriados para criar e salvar procuras e procuras entre repositórios no repositório. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saiba Mais</a><br /><br /><b>Importante:</b> Certifique-se de que os criadores pesquisa utilizar uma área de trabalho para o qual as opções a seguir não são selecionados:<ul><li><b>Impedir os usuários de criar procuras</b></li><li><b>Impedir usuários de criar procuras entre repositórios</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Quando você designa um usuário ou grupo como um editor de procura, o usuário ou grupo é fornecido os privilégios apropriados para modificar as procuras existentes e procuras entre repositórios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saiba Mais</a><br /><br /><b>Dica:</b> Por padrão, um editor de procura podem criar procuras e procuras entre repositórios mas não podem salvá-las. Você pode evitar que eles criem procuras por procura editores utilizar uma área de trabalho para a qual as seguintes opções estejam selecionadas:<ul><li><b>Impedir os usuários de criar procuras</b></li><li><b>Impedir usuários de criar procuras entre repositórios</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Quando você designa um usuário ou grupo como um usuário de procura, o usuário ou grupo é fornecido os privilégios apropriados para abrir e executar procuras salvas e procuras entre repositórios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saiba Mais</a><br /><br /><b>Dica:</b> Por padrão, um usuário de procura podem criar procuras e procuras entre repositórios mas não podem salvá-las. Você pode impedir que os usuários de criar procuras por ter eles procura utilizem uma área de trabalho para a qual as seguintes opções estejam selecionadas:<ul><li><b>Impedir os usuários de criar procuras</b></li><li><b>Impedir usuários de criar procuras entre repositórios</b></li></ul>",
		admin_repcfg_db_encoding: "Servidor de codificação de caracteres do banco de dados:",
		admin_repcfg_db_encoding_hover: "A codificação de caracteres padrão para um banco de dados do IBM Content Manager é UTF-8.",
		admin_repcfg_db_encoding_specify: "Especifique a codificação de caracteres do banco de dados",
		admin_repcfg_db_encoding_utf8: "Codificação UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Especifique esta opção se você utilizar um banco de dados codificado em UTF-8. IBM Content Navigator utilizará a codificação UTF-8 para verificar o comprimento de cadeias de valor da propriedade do item.",
		admin_repcfg_db_encoding_other: "Outra codificação",
		admin_repcfg_db_encoding_other_hover: "Especifique esta opção se você utilizar um banco de dados com uma codificação que não é UTF-8. O IBM Content Navigator usará a contagem de caracteres para verificar o comprimento das sequências de valores de propriedade do item.",
		admin_repcfg_language_codes: "Códigos de idioma do servidor:",
		admin_repcfg_language_codes_avail: "Disponível",
		admin_repcfg_language_codes_sel: "Selecionado",
		admin_repcfg_pdf_conversion: "Tipos MIME para converter para PDF documentos em anexos:",
		admin_repcfg_pdf_conversion_avail: "Disponível",
		admin_repcfg_pdf_conversion_sel: "Selecionado",

		admin_repcfg_box_share_enable_classes_label: "Classes a modificar para suporte de compartilhamento do Box:",
		admin_repcfg_box_share_enable_classes_hover: "É possível modificar a classe para que ela armazene o ID do arquivo no Box quando o item é compartilhado.",
		admin_repcfg_box_share_enable_classes_warning: "Importante: quaisquer classes que você especificar serão modificadas para suportar compartilhamento do Box. Depois de salvar as alterações, as alterações não podem ser removidos da classes.<br><br>Deve-se estar conectado ao repositório como um administrador do servidor de bibliotecas para modificar classes.",
		admin_repcfg_box_share_enable_classes_available: "Classes Disponíveis",
		admin_repcfg_box_share_enable_classes_selected: "Classes Selecionadas",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Armazenar ID de compartilhamento do Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Esta classe já foi modificada para armazenar o ID de compartilhamento do Box. Não é possível remover essa opção.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modifique esta classe para que ela armazene o ID do arquivo no Box quando o item é compartilhado.",

		admin_repcfg_redaction: "Edições de dados baseadas em função:",
		admin_repcfg_enable_redaction_hover: "Especifique se você deseja usar edições de dados baseadas em função em documentos neste repositório.<br/><br/>As edições de dados baseadas em função são aplicadas quando um documento é transferido por download, impresso, renderizado por um visualizador ou exibido como uma miniatura. O que os usuários veem quando visualizam o documento é dependente de sua função e de suas políticas de edição de dados aplicáveis.",

		admin_repcfg_redaction_policy_permission_text: "Designar editores de políticas:",
		admin_repcfg_redaction_policy_editors_hover: "Selecione os usuários e grupos que criarão, modificarão e excluirão políticas de edição de dados e funções de edição de dados.",
		admin_repcfg_redaction_policy_editors_select_hover: "Os editores de políticas de edição de dados podem criar, modificar e excluir políticas de edição de dados e funções de edição de dados.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Os administradores de política de edição de dados podem designar editores de políticas de edição de dados.<br/><br/>É possível mudar a lista de administradores de política de edição de dados usando o IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Os administradores de política de edição de dados podem designar editores de políticas de edição de dados.<br/><br/>É possível mudar a lista de administradores de política de edição de dados usando o cliente de administração do sistema do IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Designar editores de edição de dados:",
		admin_repcfg_redaction_editors_hover: "Selecione os usuários e grupos que criarão, modificarão e excluirão edições de dados baseadas em função. Depois de selecionar usuários e grupos como editores, deve-se especificá-los como editores em políticas de edição de dados para que possam editar as edições de dados baseadas em função.",
   		admin_repcfg_redaction_editors_select_hover: "Os editores de edição de dados poderão criar, modificar e excluir edições de dados baseadas em função quando eles também forem especificados como editores em políticas de edição de dados.",
   		admin_repcfg_redaction_administrators_hover_p8: "Os administradores de edição de dados podem designar editores de edição de dados.<br/><br/>É possível mudar a lista de administradores de edição de dados usando o IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Os administradores de edição de dados podem designar editores de edição de dados.<br/><br/>É possível mudar a lista de administradores de edição de dados usando o cliente de administração do sistema do IBM Content Manager.",
		admin_repcfg_entry_template: "Gerenciamento de modelo de entrada:",
		admin_repcfg_entry_template_enable_classes_label: "Classes a serem modificados para suporte ao modelo de entrada:",
		admin_repcfg_oos_reference_attribute_label: "Atributos de referência para o Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Importante: Todas as classes que você especificar serão modificadas para suportar modelos de entrada. Depois de salvar as alterações, as alterações não podem ser removidos da classes.<br><br>Você pode modificar a classe por uma ou ambas as seguintes finalidades:<br><ul><li>Para armazenar o ID do modelo de entrada que foi usado para incluir um item para que as definições de modelo de entrada são aplicadas quando o item é modificado</li><li>as classes da pasta Hierarchical apenas: Para suportar associações de pasta de modelo de entrada</li></ul>Deve-se estar conectado ao repositório como um administrador do servidor de bibliotecas para modificar classes.",
		admin_repcfg_entry_template_enable_classes_warning: "Importante: Todas as classes que você especificar serão modificadas para suportar modelos de entrada. Depois de salvar as alterações, as alterações não podem ser removidos da classes.<br><br>Deve-se estar conectado ao repositório como um administrador do servidor de bibliotecas para modificar classes.",
		admin_repcfg_entry_template_enable_classes_available: "Classes Disponíveis",
		admin_repcfg_entry_template_enable_classes_selected: "Classes Selecionadas",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "ID do Modelo de Entrada do Armazenamento",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modifique esta classe para que ele armazena o ID do modelo de entrada que foi utilizado para incluir um item para que as configurações de modelo de entrada são aplicadas quando o item é modificado.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Armazenamento de Pasta de Associações",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modifique esta classe para que ele possa suportar associações de pasta de modelo de entrada. Essa opção está disponível somente para as classes da pasta hierárquica.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Esta classe já foi modificada para armazenar o ID do modelo de entrada. Não é possível remover essa opção.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Esta classe já foi modificado para armazenar as associações de pasta. Não é possível remover essa opção.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Apenas classes de pasta hierárquica e classes não hierárquicas podem ser usadas para armazenar associações de pasta.",
		admin_repcfg_entry_template_root_folder_association_title: "Os modelos de entrada associados à pasta raiz:",
		admin_repcfg_entry_template_root_folder_association_hover: "Especifique quais modelos de entrada você deseja associar à pasta raiz no repositório do IBM Content Manager.<br /><br />Se você associar modelos de entrada à pasta raiz e os usuários incluírem itens em uma pasta hierárquica, um modelo de entrada será sempre usado para incluir itens.",
		admin_repcfg_entry_template_root_folder_association_button: "Configure Associações",
		admin_repcfg_oos_enable_classes_label: "Classes a serem modificadas para o suporte do Office Online e Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "Importante: todas as classes que você especificar serão modificadas para funcionarem com o Microsoft Office Online ou o Edit Service. Após salvar as mudanças, o atributo de referência incluído automaticamente para cada classe não pode ser removido.<br><br>Deve-se estar conectado ao repositório como um administrador do servidor de bibliotecas para modificar classes.",
		admin_repcfg_oos_enable_classes_available: "Classes Disponíveis",
		admin_repcfg_oos_enable_classes_selected: "Classes Selecionadas",
		admin_repcfg_oos_enable_classes_note: "Importante:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Esta classe não é suportada com o Microsoft Office Online ou o Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "A política de versão para a classe é configurada para a versão constante, que o Microsoft Office Online ou o Edit Service não suporta. Selecione uma classe diferente.",
		admin_repcfg_download_recording: "Controlar downloads:",
		admin_repcfg_download_recording_hover: "Downloads são controlados por padrão quando o complemento Social Collaboration Base Extensions está instalado no repositório. Entretanto, a desativação desta opção pode aprimorar o desempenho do repositório.<br><br>Se você desativar esta opção, os usuários irão ver uma contagem dos downloads que ocorreram antes da opção foi desativada.",
		admin_repcfg_sync_service: "Serviços de Sincronização",
		admin_repcfg_download_ignored: "Ignore os downloads para usuários específicos:",
		admin_repcfg_download_ignored_hover: "É possível ignorar downloads solicitados por usuários específicos, como administradores ou contas do sistema, para refletir com maior precisão o número de usuários que fizeram download de um documento. Por exemplo, se você tiver uma conta específica que é utilizado para fazer download do conteúdo para gerar um relatório mensal, você pode ignorar os downloads que são solicitadas por essa conta.<br><br><b>Restrição:</b> Não é possível especificar grupos.",

		admin_repcfg_add_as_major_version: "Incluir como versão principal:",
		admin_repcfg_enable_add_as_major_version: "Sim",
		admin_repcfg_disable_add_as_major_version: "Não",
		admin_repcfg_checkin_as_major_version: "Efetuar check-in como uma versão principal:",
		admin_repcfg_enable_checkin_as_major_version: "Sim",
		admin_repcfg_disable_checkin_as_major_version: "Não",
		admin_repcfg_annotation_security: "Segurança das anotações:",
		admin_repcfg_inherit_annotation_security: "Duplicar a segurança do documento retentor",
		admin_repcfg_default_annotation_security: "Usar a segurança das anotações padrão",
		admin_repcfg_connection_point: "Ponto de conexão do fluxo de trabalho:",
		admin_repcfg_include_workflow_definition: "Exibir classe de definição de fluxo de trabalho:",
		admin_repcfg_include_form_template: "Exibir classe de modelo de formulário:",
		admin_repcfg_enable_include_workflow_definition: "Sim",
		admin_repcfg_disable_include_workflow_definition: "Não",

		admin_repcfg_status_columns: "Ícones de estado:",
		admin_repcfg_status_columns_hover: "Especifique os estados para os quais deseja ver ícones. Os ícones de estado são exibidos ao lado de documentos, pastas e itens de trabalho na lista de conteúdos.",
		admin_repcfg_status_columns_documents_or_folders: "Exibir um ícone quando os documentos ou pastas:",
		admin_repcfg_status_columns_documents: "Exibir um ícone quando os documentos:",
		admin_repcfg_status_columns_documents_checked_out: "Forem retirados",
		admin_repcfg_status_columns_documents_declared_records: "Forem declarados como registros",
		admin_repcfg_status_columns_documents_minor_versions: "Tiverem versões secundárias",
		admin_repcfg_status_columns_documents_compound_document: "Tem documentos compostos",
		admin_repcfg_status_columns_documents_bookmarks: "Tiverem marcadores",
		admin_repcfg_status_columns_documents_hold: "Estiverem suspensos",
		admin_repcfg_status_columns_documents_notes: "Tiverem notas",
		admin_repcfg_status_columns_work_items: "Exibir um ícone quando os itens de trabalho:",
		admin_repcfg_status_columns_work_items_locked: "Estiverem bloqueados",
		admin_repcfg_status_columns_work_items_checked_out: "Forem retirados",
		admin_repcfg_status_columns_work_items_deadline: "Tiverem um prazo final",
		admin_repcfg_status_columns_work_items_suspended: "Tiverem seu processamento suspenso",

		admin_repcfg_afp2pdf_config_file: "Arquivo de configuração AFP2PDF:",
		admin_repcfg_transform_xml_file: "Arquivo de transformação customizada:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Ativar",
		admin_repcfg_disable_ssl: "Desativar",
		admin_repcfg_keyringdb_file: "Arquivo de banco de dados de conjunto de chaves:",
		admin_repcfg_keyringstash_file: "Arquivo stash de conjunto de chaves:",
		admin_repcfg_od_sso: "Conexão única",
		admin_repcfg_od_enable_sso: "Ativar",
		admin_repcfg_od_disable_sso: "Desativar",
		admin_repcfg_od_sso_password: "Senha",
		admin_repcfg_advanced_label: "Avançado",
		admin_repcfg_custom_properties_label: "Propriedades customizadas:",
		admin_repcfg_new_button_label: "Novo",
		admin_repcfg_edit_button_label: "Editar",
		admin_repcfg_delete_button_label: "Excluir",
		admin_repcfg_custom_head1: "Nome",
		admin_repcfg_custom_head2: "Valor",
		admin_repcfg_ecpdialog_title_new: "Nova Propriedade Customizada",
		admin_repcfg_ecpdialog_title_edit: "Editar Propriedade Customizada",
		admin_repcfg_ecpdialog_name: "Nome:",
		admin_repcfg_ecpdialog_value: "Valor:",
		admin_repcfg_ecpdialog_save: "Salvar",
		admin_repcfg_ecpdialog_create: "Criar",
		admin_repcfg_ecpdialog_cancel: "Cancelar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Este valor é necessário. O valor não pode conter espaços em branco e não pode ser duplicado.",

		admin_repcfg_cmis_use_gzip_encoding: "Usar codificação GZIP:",

		admin_repcfg_task_mgr_proxy: "ID de conexão do gerenciador de tarefa:",
		admin_repcfg_task_mgr_proxy_hover: "Para compartilhamento do Box ou exclusão do Espaço de equipe, o gerenciador de tarefa usa um ID de usuário administrador e uma senha para executar tarefas em segundo plano que modificam o repositório.<br><br>Clique em Configurar e efetue login no repositório usando um ID do usuário e senha de administrador de repositório válidos.",
		admin_task_manager_not_enabled_warning: "Essa opção requer o serviço do gerenciador de tarefa, mas o serviço do gerenciador de tarefa não está ativado.  É possível ativar o serviço do gerenciador de tarefa para todas as áreas de trabalho na página Geral para Configurações.",
		admin_task_manager_not_enabled_and_user_warning: "Essa opção requer o serviço do gerenciador de tarefa, mas o serviço do gerenciador de tarefa não está ativado. Nessa página, configure o ID de conexão do gerenciador de tarefa e, então, na página Geral para Configurações, ative o serviço do gerenciador de tarefa para todas as áreas de trabalho.",
		admin_task_manager_user_id_pw_not_set_warning: "Essa opção requer o serviço do gerenciador de tarefa e um ID e senha de usuário administrador. Nessa página, configure o ID de conexão do gerenciador de tarefa.",
		admin_repcfg_teamspaces_delete_task_id: "Administrador do repositório:",
		admin_repcfg_teamspaces_delete_task_password: "Senha:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Deve-se especificar um administrador do servidor de bibliotecas para ativar o serviço do gerenciador de tarefa para excluir um espaço de equipe no repositório.",
		admin_repcfg_teamspaces_delete_task_hover: "Por padrão, quando um usuário exclui um espaço de equipe, o espaço de equipe fica oculto. Todas as pastas e documentos no espaço de equipe permanecem no repositório. <br /> <br />Ao ativar essa opção, apenas os documentos arquivados em outras pastas no repositório permanecem no repositório.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Se você tiver um grande número de espaços de equipe em seu ambiente, pode levar um longo tempo para exibir todos os espaços de equipe na guia <b>Espaços de equipe</b>. Você pode selecionar essa opção para reduzir a quantidade de tempo que leva para preencher a lista.<br /><br />Se um usuário precisa trabalhar com uma equipe que está fora do intervalo que você especificar, o usuário pode utilizar o campo <b>Filtro</b> para localizar o espaço de equipe.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Se você selecionar esta opção, os usuários que têm a função de proprietário em um espaço de equipe poderão modificar as funções associadas aos espaços de equipe que foram criadas antes do IBM Content Navigator, Versão 2.0.2.<br /><br />Essa opção não afeta espaços de equipe criados com o IBM Content Navigator, Versão 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Especifique se deseja que os usuários possam criar espaços de equipe e modelos de espaços de equipe neste repositório.<br /><br /><b>Importante:</b> O repositório deve suportar pastas hierárquicas.<br /><br />Se você ativar espaços de equipe, o IBM Content Navigator criará o modelo de dados de equipe no repositório. O modelo de dados inclui objetos ACL, privilégios, conjuntos de privilégios e dois novos tipos de item.",
		admin_repcfg_folder_selector_hover: "Selecione a pasta que deseja usar como a pasta raiz quando usuários procurarem documentos. Se você não tiver pastas hierárquicas configuradas em seu repositório, esta configuração permitirá que você suporte pesquisa definindo uma pasta raiz. Se você tiver pastas hierárquicas configuradas em seu repositório, esta configuração substituirá a pasta raiz que está configurada no repositório.",
		admin_repcfg_cm_use_sso_hover: "Especifique se deseja permitir a conexão única para usuários com o conjunto de privilégios de Logon Confiável.<br /><br /><b>Importante:</b> A conexão única deve estar ativada no servidor do Content Manager e o WebSphere Application Server deve estar configurado para LTPA para que este parâmetro de configuração.",
		admin_repcfg_cm_direct_retrieve_hover: "recuperação direta é ativada por padrão porque permite que o Web client para recuperar rapidamente o conteúdo do gerenciador de recursos. <br /><br />É possível desativar esta opção se você não desejar que o aplicativo cliente acesse o gerenciador de recursos diretamente ou se tiver um firewall ou servidor proxy que impede que o Web client acesse o gerenciador de recursos por meio de URLs. Por exemplo, um firewall pode impedir que usuários visualizem documentos no visualizador de applet quando a recuperação direta estiver ativada.",
		admin_repcfg_cmItemTypesToDisplay: "Se não quiser que os usuários vejam os tipos de item de recurso e os tipos de item do item no servidor IBM Content Manager, você só poderá exibir os tipos de item de modelo de documento. Os tipos de item são exibidos quando os usuários criam procuras, incluem documentos e criam pastas.",
		admin_repcfg_cm_language_codes_hover: "Especifique os idiomas nos quais deseja retornar dados do servidor do Content Manager. A lista de idiomas disponíveis é controlada pela lista de definições de idiomas no servidor.<br /><br /><b>Lembrete:</b> dados no Web client são exibidos no idioma que está configurado no navegador da web do usuário.",
		admin_repcfg_cm_pdf_conversion_hover: "Especifique os tipos de documentos a serem convertidos em PDF quando um usuário enviar um documento com várias partes como um anexo de e-mail. Todas as partes serão combinadas em um único documento PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Especifique se deseja que os usuários possam criar espaços de equipe e modelos de espaços de equipe neste repositório.<br /><br />Se você ativar espaços de equipe, o IBM Content Navigator criará o modelo de dados de equipe no repositório. O modelo de dados inclui modelos de propriedades, objetos customizados, um objeto de pasta e diversas pastas.",
		admin_repcfg_use_entry_template_p8_hover: "Especifique se deseja que os usuários sejam capazes de criar e gerenciar modelos de entrada neste repositório do IBM Content Navigator. Se você não ativar esse recurso, os usuários podem procurar e usar modelos de entrada que já estão no repositório.<br /><br />Se você ativar o gerenciamento de modelo de entrada, o IBM Content Navigator atualiza o modelo de dados do modelo de entrada no repositório. A atualização inclui novas propriedades. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saiba Mais</a>",
		admin_repcfg_use_entry_template_cm_hover: "Especifique se deseja que os usuários sejam capazes de criar e gerenciar modelos de entrada neste repositório do IBM Content Navigator.<br /><br />Se você ativar o gerenciamento de modelo de entrada, o IBM Content Navigator criará o modelo de dados do modelo de entrada no repositório. O modelo de dados inclui um novo objeto ACL, novas propriedades e um novo tipo de item. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saiba Mais</a>",
		admin_repcfg_sync_service_p8_hover: "Especifique se deseja que os usuários possam sincronizar seus itens favoritos em suas estações de e dispositivos remotos.<br><br><b>Importante:</b> Para usar esse recurso, você também deve concluir as tarefas a seguir:<br><ul><li>Especifique a <b>URL pública de serviços de sincronização</b> na seção <b>Serviços de Sincronização</b> da ferramenta de administração.</li><li>Inclua esse repositório em uma área de trabalho cujos serviços de sincronização são ativados.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Especifique se a opção de versão principal será selecionada por padrão quando os usuários incluírem documentos no repositório.<br /><br />Os usuários têm a opção de limpar essa opção se desejarem incluir o documento como uma versão secundária.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Especifique se a opção de versão principal será selecionada por padrão quando os usuários verificar documentos no repositório.<br /><br />Os usuários têm a opção de limpar essa opção se não quiser verificar o documento como uma versão secundária.",
		admin_repcfg_p8_annotation_security_hover: "Especifique o tipo de segurança a ser aplicada nas anotações por padrão.<br /><br />Os usuários têm a opção de alterar a segurança das anotações.",
		admin_repcfg_p8_connection_point_hover: "Se desejar usar fluxos do IBM FileNet P8, selecione um ponto de conexão do Process Engine. O ponto de conexão selecionado determina quais fluxos estarão disponíveis aos usuários que acessarem esse repositório.",
		admin_repcfg_p8_include_workflow_definition_hover: "Se você exibir a classe de documento de definição de fluxo de trabalho do IBM FileNet P8 no Web client, os usuários poderão procurar e incluir definições de fluxo de trabalho no repositório.",
		admin_repcfg_p8_include_form_template_hover: "Se você exibir a classe de documento do modelo de formulário do IBM FileNet P8 no Web client, os usuários poderão procurar e incluir modelos de formulário no repositório.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Especifique o caminho completo do arquivo de configuração AFP2PDF para este repositório no servidor de aplicativos da web. O AFP2PDF Transform é necessário para visualizar e imprimir dados AFP.<br /><br /><b>Lembrete:</b> O AFP2PDF Transform deve estar instalado para usar este parâmetro.",
		admin_repcfg_od_transform_xml_file_hover: " Se desejar usar uma transformação customizada para converter o conteúdo do Content Manager OnDemand, especifique o caminho completo do arquivo XML que é utilizado para definir a transformação. O arquivo XML deve estar localizado no servidor de aplicativos da web.",
		admin_repcfg_od_ssl_hover: "Especifique se usará SSL para criptografar a comunicação entre o servidor de aplicativos IBM Content Navigator e o servidor da biblioteca Content Manager OnDemand e os servidores de objeto.<br /><br /><b>Importante:</b> Ao ativar SSL para Content Manager OnDemand, ele não inclui a comunicação entre o servidor de aplicativos IBM Content Navigator, servidor da web ou estações de dos usuários.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Especifique o caminho completo do arquivo de banco de dados do conjunto de chaves para este repositório no servidor de aplicativos da web. Por exemplo, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />O arquivo de banco de dados do conjunto de chaves contém os certificados raiz confiáveis. Deve-se usar a proteção do sistema de arquivos forte para evitar o acesso não autorizado a este arquivo.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Especifique o caminho completo do arquivo stash do conjunto de chaves para este repositório no servidor de aplicativos da web. Por exemplo, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />O arquivo stash do conjunto de chaves contém a senha para o arquivo de banco de dados do conjunto de chaves. Deve-se usar a proteção do sistema de arquivos forte para evitar o acesso não autorizado a este arquivo.",
		admin_repcfg_od_sso_password_hover: "Especifique a senha a ser usada para conexão única com o servidor do OnDemand.",
		admin_repcfg_od_custom_properties_hover: "A API Java de ODWEK suporta propriedades customizadas. Se desejar usar quaisquer propriedades customizadas ao conectar-se ao repositório por meio do Web client, especifique os nomes e valores das propriedades customizadas.<br /><br />Para obter informações adicionais sobre propriedades customizadas suportadas, consulte os Javadocs da API Java de ODWEK, que estão no subdiretório /api do diretório de instalação do ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Insira o nome da propriedade.",
		admin_repcfg_od_custom_properties_value_hover: "Insira o valor da propriedade.",
		admin_repcfg_od_use_sso_hover: "Especifique se você permitirá a conexão única para os usuários.<br /><br /><b>Importante:</b> A conexão única deve ser ativada no servidor Content Manager OnDemand para que esse parâmetro de configuração funcione.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Use a codificação GZIP para esta origem de CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nome do arquivo a ser usado quando fizer o download dos documentos:",
		admin_repcfg_cm_use_part_file_name_help: "Especifique como o nome dos documentos são determinados quando os usuários fizerem download.",
		admin_repcfg_cm_use_part_file_name_enable: "Use o nome do arquivo",
		admin_repcfg_cm_use_part_file_name_disable: "Use o nome do item no repositório",
		admin_repcfg_add_doc_name: "Nome padrão para um documento incluído:",
		admin_repcfg_add_doc_name_hover: "Os usuários podem mudar o nome antes de incluir o documento.",
		admin_repcfg_add_doc_name_empty: "Nenhum (em branco)",
		admin_repcfg_add_doc_name_file_name: "O nome do arquivo do documento selecionado",

		admin_repcfg_compound_documents: "Recursos de documento composto:",
		admin_repcfg_compound_documents_hover: "recursos do documento composto Ativar o P8, como navegação.",
		admin_repcfg_cm_action_list_config_enabled: "Lista de ações dos itens de trabalho:",
		admin_repcfg_cm_action_list_config_hover: "Ao configurar o roteamento do documento no cliente de administração de sistema do Content Manager, é possível especificar uma lista de ações que um usuário pode executar no item de trabalho.<br /><br />Ative esta opção se desejar usar a Lista de Ações no servidor do Content Manager. Estas configurações são usadas no menu de contexto e na janela Editar Propriedades para o item de trabalho.<br /><br /><b>Importante:</b> as configurações na Lista de Ações substituirão todos os menus customizados configurados na ferramenta de administração do Content Navigator. Se não existirem configurações na Lista de Ações, o usuário não conseguirá tomar ações nos itens de trabalho.",

		admin_repcfg_box_share: "Compartilhamento do Box",
		admin_repcfg_box_share_p8_hover: "Permite aos usuários compartilhar um documento a partir desse repositório. O compartilhamento de um documento inclui copiar o arquivo para o Box, criando um link e enviando o link no e-mail.<br /><br />Se você ativar o compartilhamento do Box, o IBM Content Navigator criará o modelo de dados de compartilhamento do Box no repositório. Para instalar o complemento de compartilhamento do Box do IBM Content Navigator, deve-se estar conectado ao repositório como um administrador do servidor de bibliotecas.",

		admin_menu_type_icon: "Ícone de tipo de menu",
		admin_menu_toolbar_hover: "Barra de ferramentas",
		admin_menu_toolbar_custom_hover: "Barra de ferramentas customizada",
		admin_menu_contextMenu_hover: "Menu de Contexto",
		admin_menu_contextMenu_custom_hover: "Menu de contexto customizado",

		admin_menu_contextMenu_custom_empty: "Não há menus de contexto customizados definidos nos plug-ins configurados.",
		admin_menu_toolbar_custom_empty: "Não há barras de tarefas customizadas definidas nos plug-ins configurados.",

		admin_file_type_category_filters: "Filtros de Tipo de Arquivo:",
		admin_file_type_category_filters_hover_help: "Especifique a lista de tipos de arquivo que os usuários podem usar nas seguintes situações:<ul><li>Para limitar a lista de resultados ao procurar ou pesquisar no IBM Content Navigator for Microsoft Office<li>Para limitar a lista de resultados ao procurar um repositório do IBM FileNet P8 no Web client<li>Para restringir os tipos de arquivos que os usuários podem incluir ao repositório ao utilizar um modelo de entrada</ul>",
		admin_file_type_only_use_in_et_folder_association: "Mostrar somente nas associações de pasta de modelo de entrada",
		admin_office_config_properties_label: "Propriedades do Office",
		admin_office_config_type_label: "Tipo de Dados",
		admin_office_config_mapped_property_label: "Propriedade do Repositório",
		admin_office_config_properties_hover_help: "Insira e inclua o nome de cada propriedade do Microsoft Office que você deseja mapear para uma propriedade de repositório. O tipo de dados de todas as propriedades deve corresponder",
		admin_office_config_mapped_property_hover_help: "Se você desejar mapear as Propriedades do Office para mais de uma propriedade do repositório, deverá criar um novo mapeamento de propriedade",
		admin_new_property_mapping_title: "Novo Mapeamento de Propriedade",
		admin_property_mapping_title: "Editar Mapeamento de Propriedade",
		admin_property_mapping_instruction: "Especifique para quais propriedades do Microsoft Office você deseja mapear uma propriedade no repositório. O tipo de dados das propriedades do Office deve corresponder ao tipo de dados da propriedade no repositório. <br /><br />Se um documento de Office tem mais de uma propriedade do mapeamento, O IBM Content Navigator usa a primeira propriedade na lista para preencher a propriedade no repositório.",
		admin_ms_general_settings: "Configuração Geral:",
		admin_ms_delete_local_settings: "Exclua arquivos locais quando os usuários:",
		admin_ms_outlook_options: "Integração do Outlook:",
		admin_ms_enable_props_mapping: "Mapear propriedades do Office para propriedades do repositório quando os usuários:",
		admin_ms_open_doc_when_checkout: "Automaticamente efetuar check-out de um documento quando ele está aberto",
		admin_ms_open_doc_when_checkout_hover_help: "Selecionar esta opção evita que o usuário sobrescreva o repositório com uma versão mais antiga do arquivo.",
		admin_ms_prompt_close_office: "Solicitar que os usuários efetuem check-in nos documentos quando fecharem os aplicativos do Office",
		admin_ms_prompt_close_office_hover_help: "Selecionar esta opção evita que os usuários se esqueçam de efetuar check-in de seus trabalhos.",
		admin_ms_add_with_entry_template_only: "Mostrar apenas a ação Adicionar Com Modelo",
		admin_ms_delete_local_on_add: "Excluir arquivos locais quando os usuários incluírem documentos",
		admin_ms_delete_local_on_checkin: "Excluir arquivos locais quando os usuários efetuarem check-in de documentos ou cancelarem check-out",
		admin_ms_delete_local_on_add_hover_help: "Quando um usuário inclui um documento no IBM Content Navigator for Microsoft Office, o documento é incluído no repositório e a cópia local do documento permanece aberta para que os usuários possam efetuar check-out imediatamente do documento para fazer mudanças.<br /><br />Selecione esta opção para fechar e excluir automaticamente da cópia local do documento após incluir o documento no repositório.",
		admin_ms_delete_local_on_checkin_hover_help: "Quando um usuário efetua check-in de um documento no IBM Content Navigator for Microsoft Office, o documento tem o check-in efetuado no repositório e a cópia local do documento permanece aberta. Além disso, após usar a ação de cancelar o check-out, a cópia local do documento permanece aberta. Com a cópia local aberta, os usuários podem efetuar check-out imediatamente do documento novamente para fazer mudanças.<br /><br />Selecione esta opção para fechar e excluir automaticamente a cópia local do documento após o check-in de um documento ou usando a ação cancelar check-out.",
		admin_ms_delete_local_on_save: "Salvar um documento",
		admin_ms_prompt_for_props_on_add: "Avisar usuários para fornecer valores da propriedade quando incluírem emails no repositório",
		admin_ms_prompt_for_props_on_add_hover_help: "Se você não selecionar esta opção, o Web client usará o mapeamento de propriedade do Outlook que está definido para o repositório.<br /><br />Se você tiver modelos de entrada associados à pasta em que os emails são incluídos, o usuário não poderá ser avisado de nenhuma propriedade.",
		admin_ms_delete_email_on_add: "Excluir email do servidor de e-mail quando esse email for incluído no repositório",
		admin_ms_send_email_as_link_only: "Impedir os usuários de enviar documentos como anexos",
		admin_ms_send_email_as_link_only_hover_help: "Se você selecionar esta opção, os usuários poderão apenas enviar documentos como links do Outlook. Essa opção garante que apenas os usuários que tenham os privilégios apropriados no repositório possam visualizar documentos.",
		admin_ms_enable_prop_mapping_for_add: "Mapear as propriedades do Office para propriedades do repositório quando os usuários incluírem ou efetuarem check-in nos documentos",
		admin_ms_checkout_document_after_add: "Efetuar check-out automaticamente dos documentos após serem incluídos no repositório",
		admin_no_default_document_type_filtering: "Retornar todos os tipos de documentos por padrão quando os usuários executam procuras",
		admin_no_default_document_type_filtering_hover_help: "No IBM Content Navigator for Microsoft Office, o comportamento padrão é que os usuários vejam apenas o tipo de documento para o aplicativo atual quando eles executam procuras. Por exemplo, o tipo de documento do Word é selecionado por padrão quando eles pesquisam no Microsoft Word.<br/><br/>No entanto, a seleção dessa opção limpa as caixas de opções para os tipos de documentos que os usuários veem todos os documentos que são retornados por uma procura. Os usuários podem substituir essa configuração, selecionando um ou mais tipos de documentos antes que eles executam procuras.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Especifique se deseja mapear as propriedades do documento definidas para documentos do Microsoft Office para propriedades definidas no repositório.<br /></br /><b>Importante:</b> Se você ativar esse recurso, deverá configurar as propriedades do Office para cada repositório em seu ambiente. Se você não mapear as propriedade do Office para as propriedades do seu repositório, esse recurso não funcionará.<br /><br />Esta configuração não se aplica ao Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Selecione esta opção para reduzir o número de etapas que os usuários precisam fazer para trabalhar com documentos após os documentos serem incluídos no repositório.<br /></br /><b>Dica:</b> Para assegurar que os usuários efetuem o check-in dos arquivos novamente no repositório, selecione <b>Solicitar que os usuários efetuem check-in dos documentos ao fechar aplicativos do Office</b>.",
		admin_ms_show_details_recently_used: "Mostrar detalhes do item <b>Usado recentemente</b>",
		admin_ms_show_details_recently_used_hover_help: "Por padrão, ao visualizar a lista de itens Usados recentemente, os detalhes para os itens ficam ocultos permitindo que mais itens sejam exibidos. Ao selecionar esta opção, na lista de itens Usados recentemente, os detalhes são exibidos para o primeiro documento na área de janela de detalhes por padrão.",
		admin_ms_show_no_permissions_warning: "Mostrar avisos quando os usuários editarem propriedades ou efetuarem check-in de um documento, mas não tiverem permissão para visualizar o modelo de entrada do documento",
		admin_ms_show_no_permissions_warning_hover_help: "Se um documento no repositório tiver sido criado usando um modelo de entrada, mas o usuário não tiver permissão para visualizar o modelo de entrada, o modelo de entrada não será recuperado.<br /><br/>Portanto, quando o usuário edita as propriedades do documento, as propriedades são exibidas sem usar o modelo de entrada. E, quando o usuário efetua check-in no documento, o documento tem o check-in efetuado sem usar o modelo de entrada.<br /><br />Por padrão, estas ações ocorrem sem informar o usuário de que o modelo de entrada não esteja sendo usado. Um aviso tem o login efetuado no arquivo de log, apenas.<br /><br />Selecione esta opção se desejar exibir avisos que informam imediatamente o usuário quando o modelo de entrada não é usado.",
		admin_ms_hide_search_actions: "Reduzir a seção de filtros de procura",
		admin_ms_hide_search_actions_hover_help: "Por padrão, os usuários podem aplicar um filtro de ação para especificar uma ação, um usuário ou grupo de usuários e selecionar uma data ou intervalo de data quando a ação ocorreu. Por exemplo, é possível procurar documentos que apenas você incluiu durante o último mês.<br /><br />Se você não desejar permitir que os usuários apliquem filtros de ação, selecione esta opção para ocultar os filtros de ação e reduzir o número de campos exibidos ao definir critérios de procura.",
		admin_ms_hide_save_document: "Oculte a opção <b>Salvar</b> na barra de opções",
		admin_ms_hide_save_document_hover_help: "Usando a opção <b>Salvar</b>, os usuários podem salvar mudanças do documento para o repositório sem efetuar check-in no documento.",
		admin_ms_indicate_managed_email_on_add: "Indique se um email já foi incluído no repositório",
		admin_ms_indicate_managed_email_on_add_hover_help: "A seleção desta opção permite que os usuários saibam que um e-mail já está no repositório, o que pode reduzir o número de vezes que um e-mail é incluído no repositório.  Quando essa opção estiver selecionada, uma categoria nova cor chamado IBM ECM será criado no Microsoft Outlook. Qualquer email que for incluído no repositório é automaticamente adicionada ao Gerenciado na categoria IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Incluir opções no grupo de Editar:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Especifique o <b>Incluir</b> opções estão disponíveis a partir do <b>Editar</b> grupo na barra da faixa de:<ul><li>Selecione <b>Mostrar todas as opções Incluir</b> para mostrar o botão Incluir e todas as ações Incluir que estão disponíveis a partir do grupo de Editar.</li><li>Selecione <b>Ocultar todas as opções Incluir</b> para evitar que os usuários incluam documentos no repositório ou se você desejar que os usuários incluam documentos somente a partir de um espaço de equipe.</li><li>Selecione <b>Ocultar a ação Incluir com Modelo</b> se você desejar aplicar associações de pasta de modelo de entrada e impedir que os usuários selecionando um modelo de entrada diferente.</li><li>Selecione <b>Mostrar apenas a ação Incluir com Modelo</b> se você deseja exigir que os usuários incluam documentos usando modelos de entrada.</li></ul>",
		admin_ms_show_edit_group_add_button: "Mostrar todas as opções Incluir (padrão)",
		admin_ms_hide_edit_group_add_button: "Ocultar todas as opções Incluir",
		admin_ms_hide_add_with_entry_template: "Ocultar a ação Incluir com Modelo",
		admin_ms_managed_in_ecm: "Gerenciado no IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Se os usuários exibir categorias no Microsoft Outlook, este rótulo é exibido para o e-mail que foi incluída em um IBM Content Manager ou do IBM FileNet Content Manager do repositório.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "A IBM ECM Gerenciado em nome da categoria não pode conter uma vírgula (,) ou um ponto e vírgula (;).",
		admin_delete_open_docs_after_close: "Excluir automaticamente os documentos abertos quando os usuários fecharem os documentos",
		admin_admin_delete_open_docs_after_close_hover_help: "Quando um usuário abre um documento no IBM Content Navigator for Microsoft Office, o documento é transferido por download para o diretório do documento do usuário ou para o local especificado pelas configurações de rastreamento de arquivos para a área de trabalho.<br><br>Selecione esta opção para excluir arquivos que estão abertos, mas não retirados quando os usuários fecharem os documentos. A seleção desta opção permite que você:<ul><li>Forçar a conformidade com políticas de TI</li><li>Certifique-se de que os usuários estão trabalhando com as versões mais recentes dos documentos</li><li>Reduza a quantidade de espaço em disco que é utilizado para armazenar documentos</li><ul>",
		admin_ms_custom_command_configuration: "Comandos customizados:",
		admin_ms_custom_command_configuration_hover_help: "Você pode incluir até quatro comandos para o IBM Content Navigator for Microsoft Office da barra de ferramentas em aplicativos do Microsoft Office. Os comandos podem ser utilizados para abrir URLs. Por exemplo, você pode incluir um comando para abrir um serviço que pode ser usado para procurar usuários e grupos.",
		admin_ms_custom_command_dialog_title: "Editar comando customizado",
		admin_ms_custom_command_dialog_intro_text: "Defina um comando que pode ser utilizado para abrir um URL a partir da barra de ferramentas do IBM Content Navigator for Microsoft Office em aplicativos do Microsoft Office.",
		admin_ms_custom_command_id: "Comando ${0}",
		admin_ms_custom_command_available_label: "Disponível",
		admin_ms_custom_command_available_hover_help: "Se a URL que é definido para um comando precisa ser colocado off-line para manutenção, você poderá limpar a caixa de opções para o comando para que o comando não será exibido no Microsoft Office.<br/><br/><b>Importante:</b> Os usuários devem efetuar logout da área de trabalho para que as alterações sejam refletidas no IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID do Comando",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Rótulo",
		admin_ms_custom_command_label_hover_help: "Especifique o rótulo a ser exibido para o comando no Microsoft Office.",
		admin_ms_custom_command_description_label: "Descrição",
		admin_ms_custom_command_description_hover_help: "Especifique a descrição a ser exibido para o comando no Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Especifique a URL completa para abrir a partir do Microsoft Office. A URL pode ser uma página da Web ou serviço.",
		admin_ms_custom_command_icon_label: "Ícone",
		admin_ms_custom_command_icon_hover_help: "Especifique o nome do arquivo do ícone para exibir, por exemplo, CommandIcon.png.<br/><br/><b>Importante:</b> Deve-se incluir o arquivo do ícone no subdiretório Plugins do diretório de instalação do IBM Content Navigator for Microsoft Office em cada máquina cliente.<br/><br/>Se o arquivo de ícones não estiver no diretório de plug-ins, ou se você não especificar um ícone, o ícone padrão, customButtonIcon_38.gif, será exibido.",
		admin_ms_custom_command_group_name: "Rótulo do Grupo:",
		admin_ms_custom_command_group_name_hover_help: "Você pode especificar um rótulo de grupo para exibir abaixo dos comandos customizados na barra da faixa de.<br/><br/>Se você não especificar um rótulo, o rótulo do grupo é <b>Comandos Customizados</b>.",
		admin_ms_ribbon_tab_label: "Rótulo de guia IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Digite o nome que você deseja exibir para o IBM Content Navigator for Microsoft Office guia na barra da faixa de Microsoft Office. Se você não especificar um nome, a guia é denominada \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Fechar a área de janela da tarefa quando os usuários abrirem documentos",
		admin_ms_close_task_pane_on_open_hover_help: "Selecione esta opção se você deseja maximizar o espaço em que os usuários podem ver documentos no Microsoft Office.<br/><br/>Usuários do Microsoft Office 2010: Para garantir que a área de janela da tarefa esteja fechada para todos os documentos, ative o modo multiple document interface (MDI) clicando em <b>Opções</b> &gt; <b>Avançado</b> e desmarque a opção <b>Mostrar todas as janelas da Barra de ferramentas</b>.",
		admin_ms_open_document_options: "Abra opções de documento:",
		admin_ms_delete_local_file_options: "Excluir opções de arquivo local:",
		admin_ms_add_and_checkin_options: "Opções de Incluir e de check-in:",
		admin_ms_search_options: "Opções de Procura:",
		admin_ms_display_options: "Opções de exibição:",
		admin_ms_bidirection_enable_label: "Ativar suporte para texto bidirecional",
		admin_ms_bidirection_enable_hover_help: "Selecione essa opção se você desejar permitir que os usuários insiram ou visualizem texto no IBM Content Navigator for Microsoft Office em uma direção diferente de da esquerda para a direita.",
		admin_ms_text_direction_label: "Direção do texto de base para o conteúdo:",
		admin_ms_text_direction_hover_help: "Especifique a direção na qual o texto é inserido nos campos de entrada no IBM Content Navigator for Microsoft Office. Essa configuração também controla como os itens, como nomes de pasta ou valores de propriedade, são exibidos.",
		admin_ms_control_threshold_label: "Número mínimo de itens para ativar o lookahead:",
		admin_ms_control_threshold_hover_help: "Por padrão, o lookahead é ativado quando o número de itens é maior ou igual a 50, para busca ou configuração de propriedades que possuem valores predefinidos em uma lista suspensa. É possível mudar o valor mínimo.",

		admin_ms_default_email_class: "Classe a ser usada ao incluir email",
		admin_ms_default_email_class_hover_help: "Qualquer email que for incluído nesse repositório a partir do Microsoft Outlook será incluído na classe que você especificar. Os usuários não podem alterar a classe.",
		admin_ms_default_folder_class: "Classe a ser usada ao criar pastas",
		admin_ms_default_folder_class_hover_help: "Qualquer pasta que for criada nesse repositório a partir do aplicativo do Microsoft Office será incluída na classe que você especificar.  Os usuários não podem alterar a classe.",
		admin_ms_default_folder_warn_title: "Não é possível usar a classe ${0} como a classe a ser usada quando criar pastas.",
		admin_ms_default_folder_warn_name_prop_invalid: "A propriedade do nome da classe não é uma sequência e o nome da pasta deve ser uma sequência.<br />Selecione uma classe diferente a ser usada quando criar pastas ou trabalhe com seu administrador do IBM Content Manager para alterar a propriedade do nome da classe para uma sequência.",
		admin_ms_default_folder_warn_req_props: "A classe inclui as propriedades necessárias que não possuem valores. No entanto, os usuários não podem especificar valores para as propriedades necessárias quando eles criarem pastas a partir do IBM Content Navigator for Microsoft Office.<br />Selecione uma classe diferente a ser usada quando criar pastas ou trabalhe com seu administrador do IBM Content Manager para tornar as propriedades necessárias opcionais ou para preencher previamente as propriedades necessárias com um valor.",
		admin_ms_delimiter_for_office_properties: "Delimitador para propriedades de sequência com diversos valores",
		admin_ms_delimiter_for_office_properties_hover_help: "Especifique o caractere a usar como um delimitador para propriedades de sequência que estiver mapeando para propriedades de sequência com diversos valores. Por padrão, é possível designar um conjunto de valores para uma propriedade de sequência com diversos valores usando um ponto e vírgula (;) como um delimitador para separar os valores. Porém, se um dos seus valores de sequência incluir um ponto e vírgula, não será possível incluir esse valor de sequência a menos que o delimitador seja mudado para um caractere diferente. Por exemplo, pode ser possível mudar o delimitador para uma vírgula (,)",
		admin_ms_outlookPropertyRemembrance : "Lembrar configurações ao incluir mensagens e anexos",
		admin_ms_outlookPropertyRemembrance_hover_help : "Os valores de propriedades, o local, a seleção de classe e a segurança que estão designados às mensagens e aos anexos são lembrados e serão usados como as configurações padrão quando itens futuros forem incluídos.",

		admin_file_type_name_hover_help: "Ajuda instantânea de Nome",
		admin_file_type_description_hover_help: "Ajuda instantânea de Descrição",
		admin_file_type_dialog_title: "Editar Filtro de Tipo de Arquivo",
		admin_new_file_type_dialog_title: "Novo Filtro de Tipo de Arquivo",
		admin_mobile_feature_dialog_title: "Recurso",
		admin_mobile_feature_dialog_new_title: "Novo Recurso",
		admin_file_type_instructions: "Crie um filtro que os usuários possam usar para limitar a lista de resultados da procura. É possível mapear diversos tipos MIME para o filtro.",
		admin_file_type_filter_place_holder: "Filtrar Tipos MIME",
		admin_new_button_label: "Novo",
		admin_edit_button_label: "Editar",
		admin_delete_button_label: "Excluir",
		admin_copy_button_label: "Copiar",
		admin_verify_button_label: "Verifique",
		admin_availabe_filters_label: "Filtros Disponíveis",
		admin_selected_filters_label: "Filtros Selecionados",

		admin_mobile_access: "Acesso ao aplicativo remoto:",
		admin_mobile_access_hover_help: "Se você desejar usar o IBM Content Navigator de um dispositivo móvel, recomenda-se permitir que os usuários acessem essa área de trabalho do aplicativo remoto.<br /><br />Se você desativar o acesso a essa área de trabalho do aplicativo remoto, os usuários ainda poderão acessar o Web client de seus navegadores remotos. No entanto, o Web client não será projetado para ser acessado de dispositivos móveis.",

		admin_mobile_access_allow_label: "Permite que os usuários:",
		admin_mobile_allow_add_photos: "Incluam fotos da câmera e da biblioteca de fotos",
		admin_mobile_allow_add_docs: "Incluam documentos e criar pastas no repositório",
		admin_mobile_allow_open_docs: "Abram documentos em outros aplicativos",
		admin_mobile_allow_add_docs_hover_help: "Os usuários podem criar pastas ou incluir documentos de outros aplicativos remotos, como um documento que está anexado a um email.",
		admin_mobile_allow_open_docs_hover_help: "Os usuários são solicitados a selecionar o aplicativo a ser usado para visualizar o documento selecionado. Se apenas um aplicativo estiver disponível, ele será usado.",
		admin_mobile_features: "Recursos:",
		admin_mobile_features_hover_help: "Especifique quais recursos dessa área de trabalho são exibidos no aplicativo remoto IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Novo Recurso",
		admin_mobile_move_up_button_label: "Mover para cima",
		admin_mobile_move_down_button_label: "Mover para baixo",
		admin_desktop_mobile_instructions: "A instrução de configurações do dispositivo móvel é incluída aqui",
		admin_desktop_max_number_of_docs_to_add: "Número máximo de documentos a serem incluídos:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Especifique o número máximo de documentos que os usuários podem incluir por vez. O máximo padrão é 50. Entretanto, é possível configurar no máximo 300.",
		admin_desktop_max_number_of_docs_to_modify: "Número máximo de itens a serem modificados:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Especifique o número máximo de itens que os usuários podem modificar por vez. O máximo padrão é 50. Entretanto, é possível configurar no máximo 300.",
		admin_desktop_max_conversion_size: "Quantidade máxima de dados para conversões em PDF (em MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Restrição:</b> Esta definição não é suportado no IBM Content Manager OnDemand.<br/><br/>Especifique a quantidade máxima de dados que podem ser convertidos para PDF. Este limite se aplica quando os usuários fazem download itens como arquivos PDF ou enviar itens através de e-mail como arquivos PDF.<br /><br />Se o tamanho de cada documento não pode ser determinado, os documentos ainda são convertidos para PDF.<br/><br/>O limite padrão é 200 MB. Configurando o limite acima de 200 MB podem afetar o desempenho do sistema.",
		admin_desktop_timeProperties: "Registro de data e hora:",
		admin_desktop_time_properties_hover_help: "<b>Apenas usuários do IBM FileNet P8:</b> Essa configuração se aplica a propriedades customizadas e não se aplica a propriedades de sistema. Por exemplo, a propriedade Modificado Por será ainda mostrará a parte de hora do registro de data e hora se você selecionar <b>Exibir apenas a parte do registro de data e hora</b>.<br/><br/>Esta definição não altera o registro de data e hora no repositório.",
		admin_desktop_disable_time_stamp: "Exibir o registro de data e hora completo",
		admin_desktop_enable_time_stamp: "Exibir apenas a parte da data do registro de data e hora",
		admin_desktop_timezone: "Fuso Horário:",
		admin_desktop_timezone_localuser: "Exibe o usuário do fuso horário local",
		admin_desktop_timezone_alluser: "Exibir o mesmo fuso horário para todos os usuários",
		admin_desktop_timezone_hover_help: "Você pode especificar se os usuários verão um registro de data e hora que é baseado em seu fuso horário local ou se todos os usuários veem o mesmo registro de data e hora.<br/><br/>Esta definição não altera o registro de data e hora no repositório. No entanto, a configuração que você selecionar determina o fuso horário é utilizado para criar o registro de data e hora no repositório quando os usuários incluírem ou modificar itens.",
		admin_desktop_mobile_feature_display_label: "Display",
		admin_desktop_mobile_feature_icon_file_label: "Arquivo de Ícones",
		admin_mobile_feature_dialog_icon_file_label: "Arquivo de Ícones:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nome",
		admin_desktop_mobile_select_feature_label: "Selecionar Recurso",
		admin_desktop_mobile_feature_icon_label: "Ícone de recurso",
		admin_desktop_share_admin_none: "Administrador não configurado.",
		admin_desktop_share_admin_edit_label: "Configurar administrador...",
		admin_browse_icon: "Ícone de Procura",
		admin_search_icon: "Ícone de Procura",
		admin_favorites_icon: "Ícone Favoritos",
		admin_casesearch_icon: "Ícone de Caso",
		admin_datacap_icon: "Ícone de Datacap",
		admin_system_defined: "Definido pelo Sistema",
		admin_icon_file_placeholder_text: "Local do arquivo (ou seja. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Raiz",
		admin_folder_default: "Padrão",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Barras de Ferramentas",
		admin_menu_context_menus: "Menus de contexto",
		admin_menu_office_toolbars: "Comandos de barra da faixa de opções do Microsoft Office",
		admin_menu_office_menus: "Menus de contexto do Microsoft Office",

		admin_file_name_label: "Nome do Arquivo:",
		admin_exportconfiguration_security_label: "Incluir usuários e grupos autorizados a usar esta área de trabalho",
		admin_exportconfiguration_instruction: "É possível exportar suas áreas de trabalho, incluindo as configurações de repositório e as configurações de plug-in associadas às áreas de trabalho selecionadas, para um arquivo que você possa importar em outra instância do IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportar Área de Trabalho",
		admin_exportconfiguration_button_label: "Exportar",
		admin_dialog_select_all: "Selecionar Todos",
		admin_dialog_deselect_all: "Limpar Tudo",

		admin_importconfiguration_instruction: "Os itens no arquivo de configuração selecionado serão importados neste sistema. No entanto, se um item com o mesmo ID já existir no sistema, você deverá decidir se irá preservar ou sobrescrever o item.",
		admin_importconfiguration_dialog_label: "Importar Área de Trabalho",
		admin_importconfiguration_reason_dialog_label: "Importar razões de edição de dados",
		admin_importconfiguration_button_label: "Importar",
		admin_to_be_imported: "Configurar Item para Importar",
		admin_on_target_system: "Item Existente no Sistema de Destino",
		admin_import_short_warning_message: "Os itens a seguir já existem neste sistema. Selecione os itens que deseja substituir neste sistema:",
		admin_import_warning_message: "Os itens de configuração a seguir possuem os mesmos IDs que os itens existentes no sistema de destino. Selecione apenas os itens que deseja importar e sobrescreva no sistema de destino.<br /><br />Se não desejar sobrescrever um item de configuração, crie uma cópia do item na instância a partir da qual você exportou a área de trabalho, forneça-a um ID diferente e associe-a a área de trabalho. Exporte a área de trabalho novamente e, em seguida, importe a área de trabalho nessa instância.",
		admin_choose_file_to_import_label: "Escolha um arquivo para importar:",
		admin_download_imported_log: "Fazer Download de Relatório",
		admin_desktop_import_summary: "Resumo de Importação da Área de Trabalho",
		admin_reason_import_summary: "Resumo de importação da razão de edição de dados",
		admin_rba_import_summary: "Resumo de importação de função de administração",
		admin_import_open_tabs_checking: "Antes de poder importar áreas de, deve-se fechar todas as guias além da guia <bold>Área de Trabalho</bold> na ferramenta de administração.",
		admin_import_no_conflict: "Os seguintes itens serão importados:",
		admin_desktop_invalid: "Área de Trabalho inválida",
		admin_desktop_warning: "A área de trabalho foi salva com avisos.",
		admin_repos_warning: "O repositório foi salvo com avisos.",
		admin_config_type_icon: "Ícone de tipo de item de configuração",

		admin_approval_workflow: "Fluxo de trabalho de aprovação",
		admin_approval_workflow_hover: "Permite que os usuários ativem um fluxo de trabalho de aprovação predefinido. É possível desativar o fluxo de trabalho de aprovação para permitir que os usuários ativem um fluxo de trabalho de aprovação customizado que esteja definido por uma assinatura. Por padrão, o fluxo de trabalho de aprovação está ativado.<br><br><b>Importante:</b> se você ativar um fluxo de trabalho de aprovação, deverá também assegurar que uma ou mais definições de fluxo de trabalho predefinidas (ICNParallelDocumentApproval.pep e ICNSequentialDocumentApproval.pep) sejam incluídas no repositório e transferidas para o Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Não é possível especificar os usuários e grupos que tiverem acesso a essa área de trabalho.",
		admin_cannot_add_desktop_members_error_explanation: "Você não possui as permissões apropriadas para recuperar as informações de usuário e grupo.",
		admin_cannot_add_desktop_members_error_userResponse: "Efetue login com um nome de usuário diferente ou solicite ao seu administrador do sistema IBM Content Manager a conceder o privilégio UserACLOwner, que é necessário para recuperar as informações de usuário e de grupo.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "é possível selecionar usuários e grupos.",
		admin_cannot_select_users_groups_error_explanation: "Você não possui as permissões apropriadas para recuperar as informações de usuário e grupo.",
		admin_cannot_select_users_groups_error_userResponse: "Efetue login com um nome de usuário diferente ou solicite ao seu administrador do sistema IBM Content Manager a conceder o privilégio UserACLOwner, que é necessário para recuperar as informações de usuário e de grupo.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "O cliente OAuth2 não foi localizado.",
		oauth_client_not_found_error_explanation: "O ID do cliente OAuth2 ${0} não foi localizado.",
		oauth_client_not_found_error_userResponse: "Entre em contato com o administrador do sistema e informe que o ID do cliente OAuth2 não foi localizado.",
		oauth_client_not_found_error_adminResponse: "Revise a configuração de repositório e verifique se ele contém o ID do cliente OAuth2 correto.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "O login do repositório falhou.",
		oauth_login_failed_error_explanation: "Uma tentativa de login no repositório ${0} falhou.",
		oauth_login_failed_error_userResponse: "Verifique se o ID do usuário e a senha estão corretos e tente efetuar login novamente.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Ocorreu um erro ao tentar efetuar login no ${0}.",
		oauth_error_return_error_explanation: "A tentativa de autorização ${0} falhou.",
		oauth_error_return_error_userResponse: "Entre em contato com o administrador do sistema com as seguintes informações: a tentativa de autorização ${0} falhou e retornou a mensagem de erro a seguir: <br>${1}<br><b>erro:</b> ${2}.<br><b>descrição:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Informações adicionais sobre o erro estão nos arquivos de log do servidor de aplicativos da web.  Para obter mais informações sobre os arquivos de log, consulte &quot;Arquivos de log do IBM Content Navigator&quot; no IBM Knowledge Center. Usando informações sobre a tentativa de autorização ${0}, tente corrigir o problema e verifique se OAuth2 está ativado.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Aplicativo de destino OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "erro",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Mensagem de erro OAuth não reconhecida.",

		delete_share_permission_error: "O compartilhamento não foi excluído.",
		delete_share_permission_error_explanation: "Você não possui as permissões apropriadas para excluir o compartilhamento.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Você não pode compartilhar esse item.",
		class_not_support_share_error_explanation: "A classe ${0} não foi configurada para suportar compartilhamento.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Você não pode compartilhar esse item.",
		rbr_not_support_share_error_explanation: "Conteúdo sensitivo foi adicionado a este item.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "O dispositivo do qual o usuário está tentando efetuar login não está autorizado a acessar a conta do usuário.",
		box_oauth_error_invalid_request: "A solicitação não tem um parâmetro necessário, inclui um valor de parâmetro inválido, inclui um parâmetro mais de uma vez ou, caso contrário, está malformado.",
		box_oauth_error_unsupported_response_type: "O servidor de autorização não suporta a obtenção de um código de autorização usando este método.  Verifique o valor do parâmetro do código em sua solicitação.",
		box_oauth_error_access_denied: "O proprietário do recurso ou servidor de autorizações negou a solicitação.",
		box_oauth_error_temporarily_unavailable: "O seu dispositivo está sendo taxado como limitado; é necessário diminuir a sua taxa de solicitações de autorização ou aguardar um pouco.",
		box_oauth_error_unknown: "Mensagem de erro Box não reconhecida.",

		admin_default_search_type: "Tipo de procura padrão",
		admin_default_search_type_hover: "Especifique qual opção é selecionada por padrão no <b>Procurar</b> campo no menu <b>Procurar Opções</b> .",
		admin_default_search_type_documents: "Documentos",
		admin_default_search_type_folders: "Pastas",
		admin_default_search_type_folders_and_documents: "Documentos e Pastas",

		admin_restricted_search_type: "Permitir procura em",
		admin_restricted_search_type_hover: "Por padrão, os usuários podem procurar em ambos, documentos e pastas. Se desejar ocultar a opção Procurar em e restringir as procuras a documentos somente, selecione Documentos e desmarque Pastas.</br>,</br> Se você permitir a procura em ambos, documentos e pastas, selecione a opção padrão para exibir quando a área de janela de procura estiver aberta.",
		admin_restricted_search_type_documents: "Documentos",
		admin_restricted_search_type_folders: "Pastas",
		admin_restricted_search_type_folders_and_documents: "Documentos e Pastas",

		admin_default_search_version: "Versão de procura padrão",
		admin_default_search_version_hover: "Especifique qual opção é selecionada, por padrão, no campo <b>Versão</b> no menu <b>Procurar Opções</b> .",

		admin_all_classes_search: "Procurar todas classes",
		admin_all_classes_search_hover: "Especifque se os usuários tem permissão para procurar em todas as classes e, caso tenham, o que deverá ser incluído em procursa de documento.",
		admin_all_classes_search_removed_hover: "As opções para procurar em todas as classes não está disponível porque o parâmetro de contexto allPseudoClassHidden no aplicativo de Navegador web.xml está configurado como verdadeiro.",
		admin_all_classes_search_hide: "Remover as opções de procurar em todas as classes",
		admin_all_classes_search_documents_only_documents: "Uma procura de documento inclui apenas documentos, procuras salvas e modelos de entrada.",
		admin_all_classes_search_documents_non_folders: "Uma procura de documentos inclui quaisquer itens que não sejam pastas",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Visualização em árvore:",
		admin_feature_config_tree_view_hoverhelp: "Especifique se os usuários podem acessar a lista de pastas no repositório através da área de janela Pesquisar. Se você ocultar a área de janela Pesquisar, os usuários devem utilizar a lista de conteúdos para pesquisar nas pastas no repositório.",
		admin_feature_config_selected_repositories_label: "Repositórios:",
		admin_feature_config_selected_repositories_hoverhelp: "Selecione os repositórios que os usuários podem acessar neste recurso.",
		admin_feature_config_selected_repositories_select_state_hdr: "Selecionar Repositório",
		admin_feature_config_selected_repositories_name_hdr: "Nome do Repositório",
		admin_feature_config_selected_repositories_show_hdr: "Exibir",
		admin_feature_config_invalid_icon_title: "O recurso está ausente algumas configurações necessárias",
		admin_feature_config_view_select_hdr: "Visualização Selecionar",
		admin_feature_config_view_hdr: "Visualizar",
		admin_feature_config_view: "Visualizar",
		admin_feature_config_views: "Exibições:",
		admin_feature_config_views_hoverhelp: "Especifique quais visualizações os usuários podem aplicar à lista de conteúdos. As visualizações são exibidas na ordem em que são listadas. A primeira visualização selecionada é a padrão para o recurso.<br><br><b>Importante:</b> Se você ativar a visualização Filmstrip, deverá configurar o visualizador de conversão HTML para ver visualizações de documento.",

		admin_custom_dialog_name: "Nome:",
		admin_custom_dialog_value: "Valor:",
		admin_custom_setting_name_hover: "Digite o nome da definição de Daeja ViewONE que você deseja incluir em sua configuração. Consulte a documentação Daeja ViewONE para obter informações adicionais sobre definições de configuração.",
		admin_custom_setting_value_hover: "Digite o valor que você deseja utilizar para a definição de configuração Daeja ViewONE. Consulte a documentação Daeja ViewONE para obter informações adicionais sobre os valores válidos para a definição de configuração.",

		entry_template_name_required_message: "O campo de nome na Configurações do Modelo de Entrada é necessário.",
		entry_template_name_invalid_message: "O campo de nome em Configurações do modelo de entrada não pode conter os seguintes caracteres: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Quando usuários e grupos específicos for selecionado para o campo em Configurações Compartilhar com o modelo de entrada, então, deve-se especificar pelo menos um usuário ou grupo.",
		entry_template_no_permission_to_save_to_teamspace_message: "Você não tem permissão para incluir modelos de entrada para a equipe (${0}) que foi selecionado na Salvar em Configurações do Modelo de Entrada.",
		entry_template_save_in_destination_required_message: "Deve-se especificar um local de salvamento padrão no <b>Configurar o Item de Localização do Armazenamento</b> seção.",
		entry_template_save_in_destination_must_select_folder: "Se você ocultar o campo <b>Salvar em</b> e exigir que os usuários incluam novos itens para uma pasta, deve-se selecionar uma pasta no campo <b>Salvar em local padrão</b> no <b>Configurar o Item de Localização do Armazenamento</b> seção.",
		entry_template_what_to_save_required_message: "Selecione pelo menos uma opção para o que você deseja salvar em Configurar Opções.",
		entry_template_custom_workflow_empty_message: "Se você selecionar <b>Fluxo de trabalho customizado...</b>, deverá procurar e selecionar o fluxo de trabalho que deseja usar.",

		entry_template_new: "Novo modelo de entrada",
		entry_template_name_hover: "O nome do modelo de entrada não pode conter os seguintes caracteres: * \\ / : ? \" < > |",
		entry_template_name_invalid: "O nome do modelo de entrada não pode conter nenhum dos seguintes caracteres: * \\ / : ? \" < > |",
		entry_template_description_hover: "Forneça uma descrição que permitirá aos usuários distinguir entre este modelo de entrada e os outros modelos.",
		entry_tempalte_save_in_hover: "Especifique onde salvar o modelo de entrada.<br><br><b>Restrição:</b> Se você salvar o modelo de entrada em um espaço de equipe, será possível usar o modelo de entrada apenas no espaço de equipe.",
		entry_template_inherit_hover: "Se você selecionar essa opção, as configurações de segurança da pasta pai serão incluídas na lista de usuários e grupos com os quais o modelo de entrada é compartilhado.",
		entry_template_builder_aria_label: "Construtor de Modelo de Entrada",
		entry_template_builder_layout_aria_label: "Construtor de propriedades de modelo de entrada",

		entry_template_settings_document: "Defina o Modelo de Entrada",
		entry_template_settings_folder: "Configurar o local de armazenamento de item",
		entry_template_settings_folder_intro: "Especifique onde os itens incluídos usando esse modelo de entrada são armazenados.",
		entry_template_settings_properties: "Configure o Propriedades do Item",
		entry_template_settings_properties_intro: "É possível especificar valores padrão ou predefinidos para os itens incluídos usando esse modelo de entrada. Além disso, você pode alterar o layout das propriedades para controlar quais propriedades são exibidas e a ordem na qual exibi-las.",
		entry_template_settings_workflow: "Configure um Fluxo de Trabalho para o Item",
		entty_template_settings_workflow_intro: "É possível especificar se um fluxo de trabalho é ativado quando itens são incluídos usando o modelo de entrada.",
		entry_template_settings_security: "Configurar a Segurança do Item",
		entry_template_settings_security_intro: "É possível especificar a segurança padrão ou predefinida para os itens incluídos usando esse modelo de entrada. Os usuários com as permissões apropriadas poderão estar aptos a alterar a segurança do item depois que ele for incluído.",
		entry_template_settings_options: "Definir Opções para o Item",
		entry_template_xt_warning: "Salvar as mudanças nesse modelo de entrada o converterá de um modelo de entrada IBM Workplace XT para um IBM Content Navigator. O IBM Workplace XT não suporta modelos de entrada IBM Content Navigator.",

		entry_template_properties_edit_layout: "Editar layout...",
		entry_template_properties_read_only: "Somente leitura",
		entry_template_properties_hidden: "Oculto",

		entry_template_destination_show: "Mostrar o campo <b>Salvar em</b>",
		entry_template_destination_show_hover: "Se você exibir o campo <b>Salvar em</b>, os usuários poderão alterar onde os itens são armazenados.",
		entry_template_destination_hide: "Oculte o campo <b>Salvar em</b>",
		entry_template_destination_hide_hover: "Se você ocultar o campo <b>Salvar em</b>, os usuários não poderão alterar onde os itens são armazenados.",
		entry_template_folder_save_in_default: "O padrão <b>Salvar em</b> local:",
		entry_template_folder_save_in_default_hover: "Especifique o local padrão em que os itens são incluídos usando este modelo de entrada.<br><br>O local padrão que você seleciona impõe restrições sobre o comportamento do tempo de execução do modelo de entrada:<ul><li>Os usuários não podem selecionar um repositório diferente.</li><li>Se o local padrão for um espaço de equipe, os usuários não poderão selecionar um espaço de equipe diferente.</li></ul>Entretanto, se os usuários associarem esse modelo de entrada a uma pasta, eles poderão substituir o local de armazenamento configurado para esse modelo de entrada.",
		entry_template_folder_restrict_choice: "Requerer que os usuários incluam itens no local padrão ou em uma pasta filha do local padrão",
		entry_template_folder_file_in_required: "Requerer que os usuários incluiam novos itens em uma pasta",
		entry_template_folder_file_in_required_hover: "Se você não selecionar essa opção, os usuários poderão incluir itens na pasta raiz do repositório.<br><br><b>Restrição:</b> A configuração da área de trabalho pode requerer que os usuários selecionem uma pasta.",

		entry_template_document_type_show: "Mostrar o campo <b>O que você deseja salvar</b>",
		entry_template_document_type_show_hover: "Se você exibir o campo <b>O que você deseja salvar</b>, os itens selecionados serão exibidos como opções no campo <b>O que você deseja salvar</b>.",
		entry_template_document_type_hide: "Oculte o campo <b>O que você deseja salvar</b>",
		entry_template_document_type_hide_hover: "Se você ocultar o campo <b>O que você deseja salvar</b>, o tipo de documento selecionado será sempre usado quando os usuários incluírem documentos usando esse modelo de entrada.",
		entry_template_document_type: "Esse modelo de entrada pode ser utilizado para incluir os seguintes itens:",
		entry_template_document_type_hover: "Se você exibir o campo <b>O que você deseja salvar</b>, os itens selecionados serão exibidos como opções no campo <b>O que você deseja salvar</b>.<br><br>Se você ocultar o campo <b>O que você deseja salvar</b>, o tipo de documento selecionado será sempre usado quando os usuários incluírem documentos usando esse modelo de entrada.",

		entry_template_misc: "Opções adicionais:",
		entry_template_auto_classify_show: "Classificar automaticamente o conteúdo do documento",
		entry_template_auto_classify_show_hover: "Quando um documento é classificado no FileNet Content Manager, o conteúdo do documento é examinado para determinar os valores apropriados de classe e propriedade do documento.<br><br>Fale com o administrador do sistema para determinar se a classificação de conteúdo está ativada no Content Platform Engine.<br><br>Se você ativar essa opção, a classe e as propriedades do documento poderão ser alteradas quando um usuário incluir o documento no repositório.",
		entry_template_allow_duplicate_file_names: "Permitir documentos com nomes de arquivos duplicados",
		entry_template_allow_duplicate_file_names_hover: "Por padrão, você pode incluir documentos com o mesmo nome em uma pasta no FileNet Content Manager. Será possível desmarcar esse opção se você desejar que cada arquivo no local de armazenamento selecionado tenha um nome exclusivo.",
		entry_template_allow_compound_documents: "Permitir que esse documento seja o pai de um documento composto",
		entry_template_version_show: "Mostrar opções de versão para incluir e efetuar o check-in",
		entry_template_version_hide: "Ocultar opções de versão para incluir e efetuar o check-in",
		entry_template_version_to_add_as: "Versão padrão a ser incluída como:",
		entry_template_version_default: "Opção de versão padrão:",
		entry_template_version_default_checked: "Versão principal",
		entry_template_version_default_unchecked: "Versão secundária",
		entry_template_version_display: "Versão do documento:",
		entry_template_version_display_show: "Exibir",
		entry_template_version_display_hide: "Ocultar",
		entry_template_version_default_add: "Versão padrão a ser incluída como:",

		entry_template_checkin_version_show: "Mostrar opções de versão para efetuar o check-in",
		entry_template_checkin_version_hide: "Ocultar opções de versão para efetuar o check-in",

		entry_template_checkin_version_message_no_versions: "A política de versão da classe selecionada impede que os usuários registrem uma nova versão do documento.",
		entry_template_checkin_version_message_always_version: "A política de versão da classe selecionada impede que os usuários substituam a versão atual do documento.",

		entry_template_applied: "Use este modelo de entrada quando os usuários:",
		entry_template_applied_add: "Incluir documentos (obrigatório)",
		entry_template_applied_add_folder: "Criar pastas (obrigatório)",
		entry_template_applied_checkin: "Efetuar Check-In",
		entry_template_applied_properties_group: "Visualizar ou editar propriedades:",
		entry_template_applied_properties: "Na janela Propriedades",
		entry_template_applied_viewer: "No visualizador de applet",
		entry_template_applied_docinfo: "Na área de janela de informações do documento",
		entry_template_applied_no_class_support: "Esse modelo de entrada pode ser utilizado para incluir itens, mas não pode ser utilizado para verificar em documentos ou visualizar e editar propriedades. A classe selecionada deve ser modificado para suportar essas situações. Se precisar utilizar o modelo de entrada nessas situações, peça ao administrador para utilizar a ferramenta de administração para modificar a classe para que ele pode armazenar IDs de modelo de entrada.",
		entry_template_applied_no_child_component_support: "A classe selecionada possui componentes-filhos e um layout de propriedade é definido. Os layouts de propriedade não suportam componentes-filhos. Os componentes-filhos não serão exibidos para o usuário.",
		entry_template_applied_child_component: "A classe selecionada possui componentes-filhos. Eles serão exibidos para o usuário, mas não é possível configurar componentes-filhos neste modelo de entrada.",

		entry_template_properties_show: "Mostrar a seção <b>Propriedades</b>",
		entry_tempalte_properties_show_hover: "Se você exibir a seção <b>Propriedades</b>, os usuários poderão modificar qualquer valor de propriedade exibido no modelo de entrada e que não seja propriedade somente leitura.",
		entry_template_properties_hide: "Ocultar a seção <b>Propriedades</b>",
		entry_template_properties_hide_hover: "Se você ocultar a seção <b>Propriedades</b>, os usuários não poderão modificar nenhum valor de propriedade. O modelo de entrada deve definir todos os valores que você deseja usar quando itens forem incluídos usando esse modelo de entrada.",

		entry_template_security_show: "Mostrar a seção <b>Segurança</b>",
		entry_template_security_show_hover: "Se você exibir a seção <b>Segurança</b>, os usuários que tiverem as permissões apropriadas poderão modificar a segurança do item.",
		entry_template_security_hide: "Ocultar a seção <b>Segurança</b>",
		entry_template_security_hide_hover: "Se você ocultar a seção <b>Segurança</b>, os usuários não poderão modificar a segurança dos itens. O modelo de entrada deve definir todas as configurações de segurança que você deseja usar quando itens forem incluídos ou editados.",
		entry_template_security_policy: "Política de segurança:",
		entry_template_security_policy_hover: "Dependendo da política de segurança selecionada, ela pode:<br><ul><li>Substituir as permissões especificadas em <b>Configurar a segurança de item</b>.</li><li>Incluir as permissões especificadas em <b>Configurar a segurança de item</b>.</li></ul>",
		entry_template_security_policy_none: "Nenhuma política de segurança selecionada",
		entry_template_security_inherit: "Herdar as configurações de segurança da pasta pai",
		entry_tempalte_save_in_hover: "Especifique onde salvar o modelo de entrada.<br><br><b>Restrição:</b> Se você salvar o modelo de entrada em um espaço de equipe, será possível usar o modelo de entrada apenas no espaço de equipe.",
		entry_template_security_inherit_item_security_hover: "Se você selecionar essa opção, as configurações de segurança da pasta pai serão incluídas nas configurações de segurança definidas por um dos itens a seguir:<ul><li>A classe especificada na seção <b>Configurar as propriedades do item</b></li><li>A segurança customizada especificada na seção <b>Configurar a segurança de item</b></li></ul>",
		entry_template_security_change: "Substituir a segurança definida pela classe selecionada",
		entry_template_security_change_hover: "Se você selecionar essa opção, as configurações de segurança definidas para a classe serão exibidas por padrão. Será possível então modificar as configurações de segurança para o modelo de entrada.<br><br>Se você exibir a seção <b>Segurança</b>, os usuários que tiverem as permissões apropriadas poderão modificar a segurança do item.<br><br>Se você selecionar essa opção e optar por herdar as configurações de segurança da pasta pai, todas as permissões herdáveis serão incluídas na segurança especificada.",
		entry_template_security_default_item_security: "Substituir a segurança de item padrão do usuário que inclui o item",
		entry_template_security_policy_message_override: "A política de segurança selecionada está configurado para substituir as permissões que são especificados em Definir segurança.",
		entry_template_security_policy_message_add: "A política de segurança selecionada é configurado para incluir as permissões que são especificados em Definir segurança.",
		entry_template_security_policy_preserve_true_hover: "Preserva permissão direta",
		entry_template_security_policy_preserve_false_hover: "Não preserva permissão direta",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Funções Específicas",
		entry_template_security_class_role_search_title: "Procurar funções:",
		entry_template_secuirty_class_member_title: "Lista de membros para ${0}",
		entry_template_secuirty_class_folder_only: "Estas permissões se aplicam a esta pasta somente",
		entry_template_secuirty_class_folder_and_immediate_children: "Essas permissões se aplicam a esta pasta e aos filhos imediatos configurados para herdar a segurança dessa pasta.",
		entry_template_secuirty_class_folder_and_all_children: "Essas permissões se aplicam a esta pasta e a todos os descendentes configurados para herdar segurança desta pasta. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Essas permissões se aplicam a estes filhos imediatos configurados para herdar segurança desta pasta",
		entry_template_secuirty_class_folder_all_children_not_folder: "Essas permissões se aplicam a todos os descendentes configurados para herdar segurança desta pasta",

		entry_template_class_security_message_no_override: "A segurança da classe selecionada impede que os usuários de substituir a segurança.",
		entry_template_class_security_required_privileges: "<b>Importante</b>: Quando você substituir a segurança da classe selecionada, os usuários que incluir itens utilizando este modelo de entrada deve ter o ItemSetACL e privilégios UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Padrão de Fluxo de Trabalho Sequencial",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Padrão de Fluxo de Trabalho Paralelo",
		entry_template_workflow_type_existing: "Fluxo de trabalho customizado...",
		entry_template_workflow_launch_prompt: "Perguntar aos usuários se o fluxo de trabalho deve ser ativado",
		entry_template_workflow_launch_auto: "Ativar o fluxo de trabalho automaticamente",
		entry_template_workflow_modify_launch: "Permitir que os usuários modifiquem a etapa de ativação",
		entry_template_workflow_modify_launch_hover: "Selecione essa opção se desejar permitir que os usuários alterem como o fluxo de trabalho é ativado.",

		entry_template_optionsButton_title: "Modificar",
		entry_template_optionsButton_readonly_title: "Visualizar Associação",
		entry_template_optionsDialog_title: "Configurações de Pasta",
		entry_template_removeButton_title: "Remover",
		entry_template_addButton_title: "Incluir",
		entry_template_selected_entry_templates: "Modelos de entrada selecionados",
		entry_template_docs_added_to_template_destination: "Os documentos são adicionados ao destino especificado no modelo de entrada.",
		entry_template_docs_added_to_other_object_store: "Esse modelo de entrada inclui itens para armazenar o objeto ${0}.",
		entry_template_inherited_entry_templates_label: "Desejo: ",
		entry_template_inherited_entry_templates: "associações de modelo de entrada de seleção Herdar a partir da pasta: ",
		entry_template_inherited_entry_templates_not: "Criar novas associações para esta pasta",
		entry_template_inherited_folder_path: "Os modelos de entrada na lista de modelos de entrada selecionados estão associados à pasta a seguir: ${0}. <br> O caminho para a pasta é ${1}.",
		entry_template_folder_associations_title: "Associar modelos de entrada",
		entry_template_folder_associations_intro: "Ao associar um modelo de entrada a uma pasta, os usuários devem utilizar o modelo de entrada para incluir itens na pasta. Se você associar modelos de entrada múltiplo com uma pasta, os usuários podem selecionar qual modelo de entrada a ser utilizado.",
		entry_tempalte_folder_associations_entrytemplate: "Modelo de entrada: ",
		entry_template_avaliable_entry_templates: "Modelos de Entrada Disponíveis",
		entry_template_fileTypes_intro_title: "Tipos de arquivos permitidos:",
		entry_template_fileTypes_intro: "Por padrão, um modelo de entrada pode ser utilizado para incluir qualquer tipo de documento no repositório. No entanto, se você selecionar um ou mais tipos de arquivos, os modelos de entrada está disponível apenas quando os usuários incluírem documentos que correspondem a um dos tipos de arquivo especificado.",
		entry_template_fileTypes: "Tipos de Arquivo",
		entry_template_fileType_error: "tipos de arquivo inválido estiver selecionada para uma ou mais associações de modelo de entrada. Deve-se remover os tipos de arquivo inválido antes de estas associações de modelo de entrada pode ser salvo.",
		entry_template_fileTypes_any_type_of_file: " Qualquer tipo de arquivo",
		entry_template_description_label: "Descrição",
		entry_template_ItemInfoPrefix: "Associar com: ",
		entry_template_TargetObjectStoreName: "Armazenamento de Objeto de Destino",
		entry_template_class: "Classe",
		entry_template_current_folder_as_parent: "Utilize pasta como destino",
		entry_template_view_minetypes: "Visualizar os Tipos MIME",
		entry_template_avaliable_MIME_types: "Tipos de Arquivos Disponível",
		entry_template_selected_MIME_types: "Tipos de Arquivo Selecionados",
		entry_template_MIME_type_column: "nome de categoria de tipo de arquivo",
		entry_template_file_type_not_existing: "Remova os tipos de arquivo inválido.",
		entry_template_MIME_types: "Tipos MIME:",
		entry_template_MIME_types_info_dialog_title: "Os tipos MIME para",
		entry_template_destination_label: "Incluir documentos em: ",
		entry_template_destination_help: "Especifique para onde os documentos são armazenados no repositório quando os usuários incluírem documentos nessa pasta, utilizando o modelo de entrada selecionado.",
		entry_template_radioButton_folder_destination: "Pasta selecionada",
		entry_template_radioButton_template_destination: "O destino especificado no modelo de entrada",
		entry_tempalte_teamspace_default: "Modelo de entrada padrão",
		entry_template_folder_associations_save_new: "Você modificou algumas associações de modelo de entrada. Deseja fechar essa janela sem salvar suas alterações?",
		entry_template_mode_binding_label: "Propriedades",
		entry_template_columns_className: "Nome da Classe",
		entry_template_columns_type: "Tipo de Modelo",
		entry_template_columns_workflow: "Nome do fluxo de trabalho",
		entry_template_columns_destination: "Destino",
		entry_template_association_less_than_record: "Há ${0} modelos de entrada não listados nos Modelos de entrada selecionados. Você não tem permissão para vê-los. Ou eles foram excluídos. Entre em contato com o administrador do sistema para obter mais informações.",
		/* Request */

		progress_message_general: "Trabalhando...",
		cancel_message_general: "A ação foi cancelada.",
		ie8_not_supported_browser: "O IE8 não é um navegador suportado.",
		progress_message_getDesktop: "Carregando área de trabalho...",
		progress_message_getActions: "Carregando ações...",
		progress_message_getViewers: "Carregando área de trabalho...",
		progress_message_logon: "Efetuando login...",
		progress_message_logoff: "Efetuando logout...",
		progress_message_getContentClasses: "Recuperando classes...",
		progress_message_openContentClass: "Recuperando detalhes da classe...",
		progress_message_od_getCabinets: "Recuperando gabinetes...",
		progress_message_getSearchTemplates: "Recuperando Procuras...",
		progress_message_od_getTemplates: "Recuperando pastas...",
		progress_message_od_openCabinet: "Recuperando pastas...",
		progress_message_openSearchTemplate: "Abrindo Procura...",
		progress_message_od_openTemplate: "Abrindo pasta...",

		progress_message_getWorklists: "Recuperando listas de trabalhos...",
		progress_message_getWorkItems: "Recuperando itens de trabalho...",
		progress_message_getNextWorkItems: "Recuperando itens de trabalho...",
		progress_message_getStepParameters: "Recuperando informações do item de trabalho...",
		progress_message_getStepAttachmentItems: "Recuperando informações do anexo...",
		progress_message_getDependentParameters: "Recuperando informações de propriedade...",

		progress_message_p8_getProcessApplicationSpaces: "Recuperando espaços do aplicativo...",
		progress_message_p8_getProcessRoles: "Recuperando funções do processo...",
		progress_message_p8_getProcessInbaskets: "Recuperando cestas de entrada...",
		progress_message_p8_getProcessorInformation: "Recuperando informações do processo...",
		progress_message_p8_getFilterCriteria: "Recuperando filtro de cesta de entrada...",
		progress_message_p8_getLaunchParameters: "Recuperando informações do item de trabalho...",
		progress_message_p8_getStepAttachments: "Recuperando anexos do item de trabalho...",
		progress_message_p8_getSubscriptions: "Recuperando inscrições do fluxo de trabalho...",
		progress_message_p8_getTrackerParameters: "Recuperando informações do item de trabalho...",
		progress_message_p8_getTrackerHistory: "Recuperando histórico de item de trabalho...",
		progress_message_p8_getTrackerMilestones: "Recuperando marcos de item de trabalho...",
		progress_message_p8_completeStep: "Concluindo item de trabalho...",
		progress_message_p8_moveToInbox: "Movendo item para a cesta de entrada...",
		progress_message_p8_returnToSender: "Retornando item de trabalho...",
		progress_message_p8_reassign: "Redesignando item de trabalho...",
		progress_message_p8_launchWorkflow: "Ativando o fluxo de trabalho...",
		progress_message_p8_getTransferedWorkflows: "Recuperando informações do fluxo de trabalho...",

		progress_message_cm_getProcesses: "Recuperando informações do fluxo de trabalho...",
		progress_message_cm_completeStep: "Continuando item de trabalho...",
		progress_message_cm_getItemProcessInformation: "Recuperando informações do fluxo de trabalho...",

		progress_message_search: "Pesquisando...",
		cancel_message_search: "A Procura foi cancelada.",
		progress_message_getContentItems: "Recuperando informações do item...",
		progress_message_openFolder: "Abrindo pasta...",
		progress_message_addItem: "Criando item...",
		progress_message_checkIn: "Efetuando o check-in do item...",
		progress_message_changePassword: "Alterando senha...",
		progress_message_getDefaultInstancePermissions: "Recuperando permissões padrão...",
		progress_message_openItem: "Recuperando informações do item...",
		progress_message_saveItem: "Salvando informações de item...",
		progress_message_getPermissions: "Recuperando permissões...",
		progress_message_getEntryTemplates: "Recuperando modelos de entrada...",
		progress_message_openEntryTemplate: "Abrindo modelo de entrada...",
		progress_message_getFavorites: "Recuperando favoritos...",
		progress_message_getFoldersFiledIn: "Recuperando pastas...",
		progress_message_getDocumentVersions: "Recuperando versões...",
		progress_message_getDependentAttributeInfo: "Recuperando informações sobre o atributo...",
		progress_message_packageForDownload: "Empacotando para download...",
		progress_message_convertDocument: "Convertendo conteúdo...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Recuperando tipo de conteúdo ...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Incluindo documento...",

		progress_message_desktop_reload: "O cliente está recarregando sua área de trabalho.<br>Pode ser solicitado que você efetue login novamente.",
		progress_message_email: "Enviando email...",
		cancel_message_email: "O e-mail foi cancelado.",

		progress_message_p8_getOfficeOnlineTemplates: "Recuperando modelos do Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Árvore de Favoritos",
		favorites_content_list_label: "Lista de Conteúdos de Favoritos",
		syncItems_tree_label: "Minha árvore de arquivos sincronizados",
		syncItems_content_list_label: "Minha lista de conteúdos de arquivos sincronizados",
		my_checkouts_content_list_label: "Meus check-Lista de Conteúdo",
		browse_tree_label: "Árvore de Procura",
		browse_content_list_label: "Lista de Conteúdos de Procura",
		repository_selector_label: "Seletor de Repositório",
		teamspaces_content_list_label: "Lista de Conteúdos do Espaço de Equipe",
		templates_content_list_label: "Lista de Conteúdos de Modelos",
		work_content_list_label: "Lista de Conteúdos de Trabalho",
		work_tree_label: "Árvore de Trabalho",
		admin_tree_label: "Árvore de Administração",
		admin_tabs_label: "Guias de Administração",
		search_tabs_label: "Guias de Procura",
		search_selector_label: "Seletor de Procura",
		teamspace_browse_content_list_label: "Lista de Conteúdos de Procura do Espaço de Equipe",
		teamspace_search_tabs_label: "Guias de Procura do Espaço de Equipe",

		/* Desktop */
		undo_description: "Desfazer ${0}",
		redo_description: "Refazer ${0}",

		/* Application Tabs */
		home: "Início",
		repository: "Repositório",
		repository_type: "Tipo de repositório:",
		repository_type_header: "Tipo de Repositório",
		repository_type_any: "Todos os Repositórios",
		repository_type_contains_label: "O tipo de repositório contém",
		document_info: "Informações do Documento",
		team: "Equipe",
		administration: "Administração",

		/* Home Page */
		recent_activity: "Atividade Recente",
		repos_and_wrksp: "Repositórios e Espaços de Equipe",
		workspaces: "Espaços de equipe",
		repositories: "Repositórios",
		templates: "Modelos",
		favorites: "Favoritos",
		my_checkouts: "Meus check-outs",
		mySyncedFiles: "Meus arquivos sincronizados",
		links: "Links",
		name_label: "Nome",
		description_label: "Descrição:",
		type_label: "Tipo:",
		type_heading: "Tipo",
		type_id_label: "ID do Tipo",
		server_type_icon: "Ícone de tipo de servidor",
		server_type_heading: "Tipo de Servidor",
		server_type: "Tipo de Servidor",
		port_heading: "Número da porta",
		port_label: "Número da porta:",
		server_name_heading: "Nome do Servidor",
		server_label: "Nome do servidor:",
		server_url_label: "URL do Servidor:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Conectado:",
		repository_label: "Repositório",
		modified_label: "Modificado por:",
		modified_date_label: "Modificado em:",
		status_label: "Status:",
		last_modified_label: "Última Modificação por:",

		modifier: "Modificado por",
		modified_date: "Modificado em",

		/* Favorites */
		new_favorite_label: "Incluir em Favoritos",
		edit_favorite_label: "Renomear Favorito",
		remove_favorite_label: "Remover dos Favoritos",
		missing_alias_message: "Deve-se especificar um nome.",
		sync_favorite_enable_hover: "Este item está ativado para sincronização.",
		sync_favorite_disable_hover: "Este item não está sendo sincronizado.",
		sync_favorite_sync_unavailable_hover: "A sincronização não está disponível para este tipo de objeto.",
		sync_enable_label: "Sicronizar este item",
		sync_enable_label_hover: "Este item será sincronizado para seus dispositivos.",
		delete_favorite_confirmation_question: "Deseja remover este item de seus favoritos?",
		alias_label: "Nome:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "O item selecionado já está entre seus favoritos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Este item não pode ser incluído em sua lista de favoritos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "É possível armazenar apenas ${0} favoritos.",
		add_favorite_max_reached_response: "Se você desejar incluir esse item em sua lista de favoritos, deverá excluir um favorito existente antes de poder incluir esse item.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Os documentos selecionados não podem ser convertidos para PDF.",
		download_as_pdf_max_content_error_explanation: "Você pode converter apenas ${0} MB de dados para PDF. No entanto, os documentos selecionados excederam ${0} MB.",
		download_as_pdf_max_content_error_response: "Selecione menos documentos ou selecionar documentos menores e fazer download os documentos como arquivos PDF novamente.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Os documentos selecionados não podem ser convertidos em um único arquivo PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Para converter um documento com diversas partes em um único arquivo PDF, cada parte deve ter o mesmo tipo MIME.",
		download_as_pdf_mimetype_check_error_response: "Selecione um documento diferente para converter em PDF.",

		/* Activity Stream */
		show_label: "Mostrar:",
		all_filter: "Todos",
		notifications_filter: "Notificações",
		workitems_filter: "Itens de Trabalho",
		documentes_filter: "Documentos",
		all_favorites_filter: "Todos os Favoritos",
		folders_filter: "Pastas",
		searches_filter: "Pesquisas",
		teamspaces_filter: "Espaços de equipe",

		/* Repository */
		all_search_templates: "Todas as Pesquisas",
		all_od_searches: "Todos os Modelos de Pesquisa",
		recent_searches: "Pesquisas Recentes",
		opened_searches: "Pesquisas Abertas",

		all_worklists: "Todas as Caixas de Entrada",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Uma lista de cada lista de trabalho",

		/* Teamspace */
		all_workspaces: "Todos os Espaços de Equipe",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Uma lista de cada espaço de equipe",
		workspace_title: "Espaço de Equipe",
		workspace_icon: "Ícone de espaço de equipe",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponível",
		workspace_stat_offline: "Indisponível",
		workspace_stat_validate: "Requer validação",
		workspace_stat_pendingDelete: "Exclusão pendente",
		workspace_stat_deleteError: "A exclusão falhou",

		undefined_value: "Não definido",
		undefined_reference_value: "Nenhuma referência foi definida.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Mais resultados podem estar disponíveis no servidor",
		search_all_data: "Procurar todos os dados.",
		search_all_teamspaces: "Pesquisar todos os espaços de equipe.",
		teamspace_filter_results: "Mostrando ${0} resultados. ",
		displaying_filtered_results: "Mostrando resultados filtrados. ",
		displaying_recent_results: "Mostrando apenas espaços que foram modificados nas últimas ${0} dias. Para localizar outros espaços, filtre a lista de espaços de equipe pelo nome ou descrição. ",
		clear_filter: "Limpar filtro",

		/* FolderTreeModel */
		move_item_task: "Mover item",
		copy_item_task: "Copiar item",
		add_item_task: "Incluir item",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "A pasta a seguir não pôde ser localizada: ${0}. Ela pode ter sido excluída ou a pasta não pode ser aberta a partir dessa visualização. Clique no link Mais a partir da visualização em árvore para pesquisar nas pasta. Se não for possível visualizar a pasta, atualize a visualização da lista de conteúdos.",
		more_paging_link: "mais ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
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
		username: "Nome de usuário:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Um nome de usuário é necessário para efetuar login no repositório.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Uma senha é necessária para efetuar login no repositório.",
		password: "Senha:",
		login: "Login",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Sua sessão expirou. Efetue login novamente.",
		login_repository_connection_expired_message: "Sua conexão ao repositório do ${0} expirou. Efetue login novamente.",
		login_site_connection_expired_message: "Sua conexão ao site expirou. Efetue login novamente.",
		login_new_server_message: "Insira um nome de usuário e senha para ${0}.",
		login_error_more_information_message: "Mais informações",

		disconnect_box_account_user: "Desconectar conta de caixa: ${0}",
		disconnect_box_account: "Desconectar conta de caixa",
		disconnect_box_accounts: "Desconectar contas de caixa",

		// OAuth2/Box Login
		login_ssl_connection_required: "Uma conexão SSL é necessária para acesso de repositório do Box.",
		login_oauth_popup_blocked: "A janela pop-up estava bloqueada. É possível que tenha que desbloquear pop-ups em seu navegador para efetuar login.",
		login_oauth_click_here: "Se você não for redirecionado em 5 segundos, clique aqui.",
		login_oauth_title: "Login",
		login_oauth_grant_intro: "Conceder autenticação para ${0}.",
		login_pane_oauth_click_here: "Clique aqui para efetuar login.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Deseja efetuar logout do Web client?",
		logout_confirmation_button: "Efetuar Logout",

		/* ChangeLocaleDialog */
		change_locale: "Alterar Configurações de Idioma e do Código de Idioma",
		change_locale_use_browser_language: "Usar Configuração do Idioma do Navegador (Padrão)",
		change_locale_use_browser_locale: "Usar Configuração do Idioma do Navegador (Padrão)",
		change_locale_description: "Se excluir os cookies do navegador, você deverá redefinir seu idioma e as configurações do código de idioma.",
		change_locale_language_locale: "Idioma do aplicativo:",
		change_locale_language_locale_hover: "Essa configuração altera o idioma do texto no Web client, mas não altera o idioma dos documentos no aplicativo.<br><br>A configuração padrão usa o idioma que é especificado nas suas opções de configuração do navegador da web.",
		change_locale_value_format_locale: "Código de idioma do aplicativo:",
		change_locale_value_format_locale_hover: "O código de idioma determina o formato das datas, horas e números no Web client.<br><br>A configuração padrão usa os formatos que estão associados ao idioma que é especificado nas suas opções de configuração do navegador da web.",
		change_locale_for_office: "Configurações de texto bidirecional:",
		change_locale_bidi_support_flag: "Ativar suporte bidirecional",
		change_locale_bidi_support_flag_hover: "Quando o suporte bidirecional está ativado, o usuário pode definir a direção do texto usado nos campos de entrada.  O texto digitado para itens como pastas, por exemplo, seria exibida na mesma direção que foi digitado.",
		change_locale_base_text_direction: "Direção do texto de base para o conteúdo:",
		change_locale_base_text_direction_hover: "Configure a direção do texto que está sendo digitado nos campos de entrada.  Isso também controla a direção de exibição dos rótulos que foram digitados pelo usuário, como nomes de pastas.",
		change_locale_calendar_type: "Tipo de Calendário:",
		change_locale_calendar_type_hover: "Selecione o tipo de calendário que será usado para a sessão do usuário.",
		change_locale_base_text_direction_default: "Padrão",
		change_locale_base_text_direction_ltr: "Da esquerda para a direita",
		change_locale_base_text_direction_rtl: "Direita à esquerda",
		change_locale_base_text_direction_contextual: "Contextual",
		change_locale_calendar_type_gregorian: "Gregoriano",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebraico",
		change_locale_calendar_type_Umm_al_Qura: "al-Qura Umm",

		/* ChangePasswordDialog */
		change_password: "Alterar Senha",
		change_password_title: "Alterar Senha",
		change_password_expired_title: "Senha Expirada",
		change_password_message: "Insira uma nova senha.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Sua senha expirou. Insira uma nova senha.",
		change_password_password_rules: "Regras de senha",
		change_password_old_password: "Senha antiga:",
		change_password_new_password: "Nova senha:",
		change_password_confirm_password: "Confirmar senha:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Deve-se inserir sua senha antiga.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Deve-se inserir uma nova senha.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Deve-se confirmar sua nova senha.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "As senhas devem corresponder.",

		/* GlobalToolbar */
		actions: "Ações",
		actions_label: "Ações:",
		open_actions_label: "Ações Disponíveis:",

		/* About Dialog */
		about_dialog_title: "Sobre",
		about_product_name_label: "Nome do Produto: ",
		about_product_version_label: "Versão: ",
		about_product_build_label: "Build: ",
		about_product_license: "Materiais Licenciados - Propriedade da IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Todos os direitos reservados. Direitos Restritos para Usuários do Governo dos Estados Unidos. Uso, duplicação ou divulgação restritos pelo documento GSA ADP Schedule Contract com a IBM Corporation. IBM e o logotipo IBM são marcas registradas da International Business Machine Corporation nos Estados Unidos e/ou em outros países. Este Programa é licenciado sob os termos do contrato de licença que acompanha o Programa. Este contrato de licença pode estar localizado em uma pasta do diretório Programa ou biblioteca identificada como \"License\" ou \"Non_IBM_License\", se aplicável, ou pode ser fornecido como um contrato de licença impresso. Leia este contrato atentamente antes de usar o Programa. Ao usar o Programa, você está de acordo com esses termos. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Deseja excluir o item selecionado?",
		delete_single_folder_confirmation_question: "Deseja excluir a pasta de ${0}?",
		delete_multiple_confirmation_question: "Deseja excluir os itens selecionados?<br>${0} itens foram selecionados.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Excluir",
		search_template_delete_confirmation_question: "Deseja excluir a Procura de ${0}?",
		search_template_opened_delete_confirmation_question: "A Procura ${0} está aberta. Se você excluir a Procura, ela será fechada.<br>Deseja excluir esta Procura?",
		delete_multiple_opened_search_template_confirmation_question: "As seguintes Procuras estão abertas: ${0}.<br>Se você excluir as Procuras, elas serão fechadas. Deseja excluir estas Procuras?",
		delete_large_number_items_confirmation_question: "Você selecionou ${0} itens para exclusão.<br/>A exclusão de um grande número de itens pode demorar muito.<br/>Deseja continuar?",
		delete_confirmation_entrytemplate: "Se você excluir este modelo de entrada, ele terá o seguinte impacto sobre os documentos ou pastas que estão associadas ao modelo de entrada:<ul><li>Os itens não estarão mais associados com o modelo de entrada, e os usuários podem ver um aviso quando eles atualizar um item.</li><li>Todas as propriedades que eram controlados pelo modelo de entrada, como o nome ou a ordem das propriedades, não mais se aplicam aos itens que estão associadas ao modelo de entrada.</li></ul>Deseja excluir este modelo de entrada ?",
		delete_confirmation_entrytempalte_with_multi_items: "Os modelos de entrada deve ser excluída individualmente. Os modelos de entrada foram removidos da lista de itens a serem excluídos. Se você deseja excluir os modelos de entrada, deve-se excluir cada modelo de entrada separadamente.",

		/* Create/Apply/Remove Hold */
		hold: "Suspensão",
		createHold: "Nova Suspensão",
		applyHold: "Aplicar Suspensão",
		removeHold: "Remover Suspensão",
		showHolds_title: "Mostrar suspensões",
		applyHoldSelectText: "Selecione as suspensões que deseja aplicar aos itens selecionados.",
		availableHolds: "Suspensões disponíveis:",
		removeHoldSelectText: "Selecione as suspensões que deseja remover dos itens selecionados.",
		appliedHolds: "Suspensões aplicadas:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Criar uma nova suspensão para aplicar aos itens selecionados.",
		holdName: "Nome da suspensão:",
		holdDescription: "Descrição:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Deve-se especificar um nome para a suspensão.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "O nome da suspensão especificado já existe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Um nome da suspensão não pode conter nenhum dos seguintes caracteres: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Sua sessão expirará em ${0} minutos.",
		session_expire: "Sessão expirando",
		logoff: "Logout",
		extend_session: "Sessão estendida",
		admin_custom_settings: "Configurações adicionais:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning é um valor booleano que indica se o aviso de expirar sessão está ativado, o valor padrão é true. sessionExpireWarningTime é um número inteiro entre 2 e 5 para especificar o tempo de aviso de expirar sessão.",
		admin_custom_setting_dialog_title_new: "Nova configuração",
		admin_custom_setting_dialog_title_edit: "Editar configuração",
		admin_custom_setting_dialog_hover_help: "Inclua outros parâmetros especificando o nome e o valor do parâmetro. Por exemplo, é possível especificar “enableSessionExpireWarning” e “true” se deseja ativar o aviso de expirar sessão.",
		admin_custom_setting_dialog_field_hover_help: "Para obter mais informações sobre nomes e valores de parâmetros, consulte o Manual de Referência de Parâmetros do navegador da IBM.",
		admin_custom_setting_dialog_nameInvalid: "Este valor é necessário. O valor não pode conter espaços em branco e não pode ser duplicado.",
		admin_custom_setting_dialog_bool_valueInvalid: "Este valor é necessário. O valor deve ser um booleano.",
		admin_custom_setting_dialog_int_valueInvalid: "Este valor é necessário. O valor deve ser um número inteiro.",
		/* Add Document Dialog */
		add_document_dialog_title: "Incluir Documento",
		add_documents_dialog_title: "Incluir Documentos",
		add_document_general_label: "Gerais",
		add_document_properties_label: "Propriedades",
		add_document_properties_with_ellipsis_label: "Propriedades...",
		add_document_security_label: "Segurança",
		add_document_location_label: "Salvar em:",
		add_document_type_label: "O que você deseja salvar?",
		add_document_localfile_label: "Documento local",
		add_document_metadata_label: "Informações sobre um documento",
		add_document_external_label: "Link para um documento externo",
		add_document_web_link_label: "Link da web",
		add_document_saved_content_label: "Usar arquivo salvo:",
		add_document_saved_content_choice: "Arquivo salvo",
		add_document_file_name_label: "Nome do Arquivo:",
		add_document_entry_template_label: "Modelo de entrada:",
		add_document_delete_file_label: "Excluir arquivo local",
		add_document_delete_file_disabled_label: "Os arquivos que não estão no diretório de rastreamento de arquivos não serão excluídos.",
		add_document_major_version_label: "Versão principal",
		add_document_major_version_hover: "Configura o status do documento para Liberado. O documento é incluído no repositório como version 1.0. Se a opção não estiver selecionada, o documento não estará pronto para ser liberado e será incluído como secundária version 0.1.",
		add_document_save_document_as_unfiled_label: "Não salvar o documento em uma pasta",
		add_document_save_document_as_unfiled_hover: "Se selecionar esta opção, você poderá localizar este documento apenas Procurando. é possível pesquisar por ele.",
		add_document_create_new_version_label: "Criar nova versão",
		add_document_replace_existing_version_label: "Substituir versão existente",
		add_document_start_workflow_label: "Iniciar fluxo de trabalho",
		add_document_auto_classify_label: "Classificar o conteúdo automaticamente",
		add_document_add_label: "Incluir",
		add_document_cancel_label: "Cancelar",
		add_document_document_type_label: "Classe",
		add_document_context_info: "Os valores inseridos para as propriedades do documento podem ser usados para localizar o documento posteriormente.",
		add_documents_context_info: "Os valores inseridos para os documentos podem ser usados para localizar os documentos posteriormente. Se for necessário inserir um valor de propriedade diferente para um documento, deverá incluí-lo separadamente ou editar as propriedades do documento depois de incluí-lo.",
		add_document_url_label: "URL:",
		add_document_template_description: "Descrição do Modelo:",
		add_document_select_entry_template: "Insira ou selecione um modelo de entrada",
		add_document_no_permission_to_associations: "Você não possui permissões para usar um modelo de entrada",
		add_document_no_entry_template_to_use: "Nenhum modelo de entrada pode ser utilizado para arquivos selecionados",
		add_document_no_entry_template_itemtype_permission: "Não é possível incluir itens nesta pasta. Um modelo de entrada deve ser selecionado e você não tem acesso a qualquer modelo de entrada associado a essa pasta. Entre em contato com o administrador do sistema e peça para ele conceder a você acesso aos modelos de entrada associados a essa pasta.",
		add_document_appgroup_name_label: "Nome do Grupo de Aplicativos:",
		add_document_app_name_label: "Nome do Aplicativo:",
		create_folder_dialog_title: "Nova Pasta",
		create_folder_context_info: "Os valores inseridos para as propriedades da pasta podem ser usados para localizar a pasta posteriormente.",
		create_folder_folder_name_label: "Nome da pasta",
		create_folder_save_folder_as_unfiled_label: "Não salvar a pasta em outra pasta",
		create_folder_save_folder_as_unfiled_hover: "Se selecionar esta opção, poderá localizar esta pasta apenas Procurando. é possível pesquisar por ele.",
		add_item_create_in_folder: "Criar na pasta:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Um nome da pasta não pode conter nenhum dos seguintes caracteres: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Um nome da pasta não pode conter nenhum dos caracteres a seguir: \\ / e não pode ser igual a . ou ..",
		invalid_box_file_name_message: "Um nome do arquivo não pode conter nenhum dos caracteres a seguir: \\ / e não pode ser igual a . ou ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Um nome de arquivo não pode conter nenhum dos seguintes caracteres: \\ / : * ? \" < > |",
		external_document_placeholder: "Insira a URL do documento",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "A cor deve ser inserida como um número hexadecimal de 3 ou 6 dígitos, por exemplo, #000 ou #000000.",
		add_document_unfiled: "${0} não arquivado",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Incluir Documento Usando o Modelo de Entrada",
		add_document_using_template_context_info: "Quando incluir um documento usando um modelo de entrada, os valores que inserir para o documento serão consistentes.",
		add_documents_using_template_dialog_title: "Incluir Documentos Usando o Modelo de Entrada",
		add_documents_document_name_is_file_name_hint: "O nome do arquivo será usado para essa propriedade",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nova Pasta Usando o Modelo de Entrada",
		create_folder_using_template_context_info: "Quando criar uma pasta usando um modelo de entrada, os valores que inserir para a pasta serão consistentes.",

		add_documents_batch_results_dialog_title: "Documentos Não Incluídos no Repositório",
		add_documents_batch_results_dialog_context_info: "Os documentos a seguir não foram incluídos no repositório. Selecione um documento e clique em Detalhes para obter informações adicionais sobre por que o documento não foi incluído no repositório.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nome do arquivo",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Mensagem",
		add_documents_batch_results_status_error: "Erro",
		add_documents_batch_results_status_cancelled: "Cancelado",
		add_documents_batch_results_status_cancelled_msg: "O documento não foi incluído porque a solicitação foi cancelada.",

		add_documents_batch_status_title: "Incluindo Documentos",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Incluindo arquivo ${0} de ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Erros: ${0}",
		add_documents_batch_status_completing_msg: "O processo será parado após este documento ser incluído.",

		add_documents_status_uploading_msg: "Fazendo upload do arquivo ${0} de ${1}...",
		add_documents_status_adding_msg: "Incluindo arquivo ${0} de ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "O modelo de entrada foi configurado em outro aplicativo e está configurado para sempre declarar documentos como registros. Entretanto, essa configuração é ignorada porque o Web client não suporta a declaração de documentos como registros.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "O modelo de entrada foi configurado em outro aplicativo e está configurado para permitir que você decida se deseja declarar esse documento como um registro. Entretanto, essa configuração é ignorada porque o Web client não suporta a declaração de documentos como registros.",
		no_selection: "&lt;Selecionar&gt;",

		batch_results_dialog_details_label: "Detalhes",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "O valor não é válido. O valor deve ser um Identificador Exclusivo Global (GUID), por exemplo, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "O valor não é válido. O valor deve ser um número de vírgula flutuante, por exemplo, 1,2 ou 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "O valor não é válido. O valor deve estar no formato ${0}, por exemplo, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "O valor não é válido. O valor deve ser um valor decimal, por exemplo, 1,2 ou 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "O valor não é válido. O valor deve ser um número inteiro, por exemplo, 5 ou 1349.",

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
		property_ext_invalid: "O valor não é válido. O valor pode conter apenas os caracteres a seguir: a-z, A-Z, 0-9, [espaço] e `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "O valor não é válido. O valor deve ser uma data com o seguinte formato: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "O valor não é válido. O valor deve ser um horário com o seguinte formato: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "O valor não é válido. Selecione um valor no menu suspenso.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "O valor não é válido.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "O valor não é válido. O valor deve ter o formato a seguir: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Este valor é necessário.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "O valor é muito longo. A propriedade suporta um comprimento máximo de ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "O valor é muito curto. A propriedade suporta um comprimento mínimo de ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "O valor está fora do intervalo. O valor deve ser um número de vírgula flutuante entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "O valor está fora do intervalo. O valor deve ser um valor decimal entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "O valor está fora do intervalo. O valor deve ser um número inteiro entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "O valor deve ser uma data entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "O valor está fora do intervalo. O valor deve ser uma data entre ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "O valor está fora do intervalo. O valor deve ser uma hora entre ${0} e ${1}.",
		property_and: "and",

		property_invalidValueOrRequired: "O valor a seguir é inválido ou obrigatório: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Propriedades",
		edit_properties_dialog_info: "É possível visualizar ou editar as propriedades deste item. Se você tiver as permissões apropriadas, você também pode modificar a segurança do item. No entanto, você não pode alterar as propriedades de sistema.",
		edit_properties_od_dialog_info: "É possível visualizar ou editar as propriedades deste item. No entanto, você não pode alterar as propriedades de sistema.",
		system_properties_title: "Propriedades do sistema",
		custom_properties_title: "Propriedades",
		/* Folder collaboration tab */
		box_permission_permission: "Permissão",
		box_permission_permissions: "Permissões",
		box_permission_editor: "Editor",
		box_permission_owner: "Proprietário",
		box_permission_co_owner: "Coproprietário",
		box_permission_viewer_uploader: "Carregador visualizador",
		box_permission_previewer_uploader: "Carregador pré-visualizador",
		box_permission_viewer: "Visualizador",
		box_permission_previewer: "Pré-visualizador",
		box_permission_uploader: "Carregador",
		box_permission_add: "Incluir",
		box_permission_upload: "Fazer Upload",
		box_permission_download: "Fazer Download",
		box_permission_preview: "Visualizar",
		box_permission_view: "Visualizar",
		box_permission_send_links: "Enviar links somente visualização",
		box_permission_create_subfolders: "Criar Subpastas",
		box_permission_create_tasks: "Criar Tarefas",
		box_permission_add_comments: "Adicionar Comentários",
		box_collaboration_invite_placeholder: "Inserir um nome, um e-mail ou um grupo para convidar",
		box_collaboration_invite_placeholder_non_admin: "Insira um e-mail para convidar",
		box_collaboration_invalid_email: "Insira um endereço de e-mail válido",
		box_collaboration_user_already_present: "Esse usuário já é um colaborador na pasta",
		box_collaboration_user_name: "Nome",
		box_collaboration_email_address: "Endereço de e-mail",
		box_collaboration_date_added: "Data incluída",
		box_collaboration_remove_collaboration: "Remover",
		box_collaboration_remove_collaboration_title: "Excluir",
		box_collaboration_no_collaborators: "Não há colaboradores",
		box_collaboration_change_owner_title: "Mudar proprietário do item",
		box_collaboration_change_owner_prompt: "Ao tornar esse colaborador o proprietário da pasta, você passará a ser um editor e não será mais o proprietário da pasta. Quaisquer colaboradores que tenham sido diretamente incluídos nessa pasta irão ver tal pasta em suas pastas raiz. Quaisquer colaboradores que tenham sido incluídos no nível da pasta pai ou acima não serão mais colaboradores. Deseja continuar?",
		box_collaboration_remove_self_title: "Autorremoção",
		box_collaboration_remove_self_prompt: "Tem certeza de que deseja se autorremover como um colaborador? Você não terá mais acesso a essa pasta.",
		box_collaboration_user: "Usuário",
		box_collaboration_group: "Grupo",
		box_managing_users_not_configured: "Não é possível procurar usuários e grupos porque o aplicativo Box não está configurado corretamente. Para usar esse recurso, entre em contato com seu administrador e solicite que o aplicativo Box seja configurado para gerenciar usuários e grupos.",
		duplicate_value_error: "Cada valor nesta propriedade deve ser único.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Quaisquer mudanças feitas nos campos a seguir são aplicadas a todos os itens selecionados. Se for necessário inserir um valor de propriedade diferente para um determinado item ou editar a segurança de um item, você deverá editar as propriedades do item individualmente.",
		multi_edit_properties_class_label: "Classe:",
		multi_edit_properties_items_label: "Nomes de Item:",
		multi_edit_properties_properties_label: "Propriedades:",
		multi_edit_batch_status_title: "Atualizando Propriedades",
		multi_edit_batch_status_adding_msg: "Atualizando item ${0} de ${1}...",
		multi_edit_batch_status_verifying_msg: "Verificando item ${0} de ${1}...",
		multi_edit_batch_status_completing_msg: "O processo será interrompido após este item ser atualizado.",
		multi_edit_batch_status_validation_completing_msg: "O processo será interrompido após este item ser verificado.",
		multi_edit_batch_results_status_error: "Erro",
		multi_edit_batch_results_status_cancelled: "Cancelado",
		multi_edit_batch_results_status_cancelled_msg: "O item não foi atualizado porque a solicitação foi cancelada.",
		multi_edit_batch_results_dialog_title: "Itens Não Atualizados",
		multi_edit_batch_results_dialog_context_info: "Os itens a seguir não foram atualizados. Selecione um nome de item e clique em Detalhes para obter mais informações sobre o porquê o item não foi atualizado.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nome do Item",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Mensagem",
		multi_edit_batch_status_errors_msg: "Erros: ${0}",
		multi_edit_batch_permission_error_text: "As alterações nas propriedades não podem ser salvas.",
		multi_edit_invalid_value_error: "Esse valor depende de outro valor da propriedade e não é válido para todos os itens que forem selecionados.",
		multi_edit_batch_permission_error_explanation: "Não é possível modificar as propriedades deste item porque você não tem privilégios suficientes.",
		multi_edit_no_modifiable_properties: "As propriedades dos itens selecionados não podem ser modificadas. Isso poderá ocorrer quando um item incluir apenas propriedades somente leitura ou quando apenas o nome ou o título do item for editável. Quando diversos itens forem selecionados, não será possível modificar o nome ou o título dos itens.",
		multi_edit_mult_classes_dialog_info: "Os itens selecionados estão em repositórios diferentes ou pertencem a classes diferentes. É possível editar apenas os itens que estiverem na mesma classe ou no mesmo repositório. Selecione o subconjunto de itens que deseja editar.",
		multi_edit_class_selector_class_heading: "Classe",
		multi_edit_class_selector_entry_template_heading: "Modelo de entrada",
		multi_edit_class_selector_repository_heading: "Repositório",
		multi_edit_class_selector_items_heading: "Itens",
		multi_edit_some_classes_not_displayed: "Alguns dos itens selecionados não estão incluídos nessa lista porque eles contêm propriedades somente leitura ou porque estão em repositórios que não suportam edição de propriedades.",
		multi_edit_properties_invalid_msg: "Alguns dos valores de propriedades não estão disponíveis para todos os itens selecionados.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Essa propriedade é somente leitura e não pode ser modificada.",
		multi_edit_append_checkbox_label: "Anexar",
		multi_edit_append_checkbox_tooltip: "Selecione essa opção se desejar anexar novos valores de propriedade aos valores existentes ao invés de substituí-los.",
		multi_edit_properties_invalid_childcomponent_msg: "Alguns valores no ${0} propriedade do ${1} componente filho são dependentes de outras propriedades e não são mais válidos com as seleções feitas. Limpe os valores no componente-filho ${1} ou faça mudanças na propriedade dos itens selecionados individualmente.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exportar Propriedades",
		export_properties_dialog_info: "Selecione as propriedades que você deseja exportar e especifique a ordem em que elas serão exibidas.",
		export_properties_dialog_export_button_label: "Exportar",
		export_properties_dialog_export_raw_values: "Exportar valores brutos",

		/* Properties */
		filter_clear_tooltip: "Limpar o filtro",
		properties_new_row: "Novo",
		properties_requiredClass_document_tooltip: "Selecione um documento. O documento deve pertencer à classe ${0}.",
		properties_requiredClass_folder_tooltip: "Selecione uma pasta. A pasta deve pertencer à classe ${0}.",
		properties_dataType_tooltip: "Tipo de dados: ${0}",
		properties_maxLength_tooltip: "Comprimento máximo: ",
		properties_minLength_tooltip: "Comprimento mínimo: ",
		properties_minValue_tooltip: "Valor mínimo: ",
		properties_maxValue_tooltip: "Valor máximo: ",
		properties_format_tooltip: "Formato: ",
		properties_description_tooltip: "Descrição: ",

		properties_type_boolean_tooltip: "Booleano",
		properties_type_date_tooltip: "Data",
		properties_type_time_tooltip: "Horário",
		properties_type_timestamp_tooltip: "Registro de data e hora",
		properties_type_decimal_tooltip: "Valor decimal",
		properties_type_double_tooltip: "Número de vírgula flutuante",
		properties_type_short_tooltip: "Número Inteiro",
		properties_type_integer_tooltip: "Número Inteiro",
		properties_type_long_tooltip: "Número Inteiro",
		properties_type_string_tooltip: "Sequência de texto",
		properties_type_string_alpha_tooltip: "Sequência alfabética",
		properties_type_string_alphanum_tooltip: "Sequência alfanumérica",
		properties_type_string_ext_tooltip: "sequência alfanumérica estendida",
		properties_type_string_num_tooltip: "Sequência numérica",
		properties_type_binary_tooltip: "Binário",
		properties_type_object_tooltip: "Object",
		properties_type_reference_tooltip: "Esta propriedade faz referência a outro item no repositório.",
		properties_type_guid_tooltip: "Identificador Globalmente Exclusivo",
		properties_type_group_tooltip: "Usuários e Grupos",
		properties_type_user_tooltip: "Usuários",
		properties_type_childComponent_tooltip: "Componente-filho",

		properties_childComponent_minCardinalityOnly_tooltip: "Esta propriedade deve ter pelo menos ${0} valores.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Esta propriedade pode ter um máximo de ${0} valores.",
		properties_childComponent_minMaxCardinality_tooltip: "Esta propriedade deve ter pelo menos ${0} valores e um máximo de ${1} valores.",
		properties_childComponent_noCardinality_tooltip: "Esta propriedade pode ter qualquer número de valores.",

		properties_type_guid_example_tooltip: ", por exemplo, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Selecione um valor da lista.",
		properties_single_select_choice_tooltip: "Selecione um valor.",
		properties_multiple_select_typein_tooltip: "Insira um ou mais valores.",
		properties_multiple_select_choice_tooltip: "Selecione um ou mais valores.",
		properties_not_selectable_tooltip: "A categoria não pode ser selecionada.",
		properties_none: "Nenhuma",
		properties_none_tooltip: "Selecione <i>Nenhum</i> para limpar o valor atual para esta propriedade.",
		properties_value_empty: "Sem valor",
		properties_value_read_only: "Somente leitura",
		properties_clear_label: "Limpar",
		properties_clear_tooltip: "Limpar o valor nesse campo limpa o valor no repositório após clicar em <b>Salvar</b>.",
		properties_box_custom_properties: "Propriedades customizadas",
		properties_box_metadata_name_in_use: "Este nome já é utilizado. Insira outro nome para a propriedade customizada.",

		properties_templates: "Modelos",
		properties_add_template: "Incluir modelo",
		properties_remove_template: "Remover",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Efetuar Check-In",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Efetuar Check-In",
		checkin_cancel_label: "Cancelar",
		checkin_file_name_label: "Nome do arquivo",
		checkin_document_status_title: "Check-in do documento",
		checkin_document_status_uploading_msg: "Fazendo upload do arquivo...",
		checkin_document_status_checkingin_msg: "Efetuando check-in do arquivo...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Selecionar modo de edição de dados",
		viewer_redaction_new_document_confirmation_question: "Deseja salvar a edição de dados como um novo documento ou arquivo local?",
		viewer_redaction_new_version_confirmation_question: "Deseja salvar a edição de dados como uma nova versão?",
		viewer_redaction_new_version_confirmation_question_never: "Deseja salvar a edição de dados como um novo conteúdo?",		
		viewer_redaction_new_document_button: "Sim",
		viewer_redaction_new_document_cancel_button: "Não",
		viewer_redaction_add_document_confirmation_question: "Deseja salvar a edição de dados como um novo documento, uma nova versão ou um arquivo local?",
		viewer_redaction_add_document_confirmation_question_version_never: "Deseja salvar a edição de dados como um novo documento, um novo conteúdo ou um arquivo local?",
		viewer_redaction_add_document_button: "Novo Documento",
		viewer_redaction_add_new_version_button: "Nova Versão",
		viewer_redaction_add_new_version_button_version_never: "Novo conteúdo",
		viewer_redaction_add_local_file_button: "Arquivo Local",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Selecionar razão de edição de dados",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "O modelo de entrada que foi usado para incluir este documento no repositório não pode ser localizado. O documento será verificado no repositório sem usar o modelo de entrada.",
		property_entry_template_not_retrieved_warning: "O modelo de entrada que foi usado para incluir este documento no repositório não pode ser localizado. As propriedades do documento será exibido sem usar o modelo de entrada.",
		multi_edit_entry_template_not_found_name: "[Não Localizado]",
		multi_edit_entry_template_not_retrieved_warning: "O modelo de entrada que foi usado para incluir esses itens no repositório não pode ser localizado. As propriedades do item serão modificadas sem usar o modelo de entrada.",
		checkin_major_version_hover: "Incrementa um número da versão do documento e configura o status do documento para Liberado. Se a opção não estiver selecionada, o documento não estará pronto para ser liberado e será registrado como uma versão secundária.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "O documento não pode ser devolvido ao repositório porque ele não foi retirado do repositório.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "O ID do usuário ou a senha não é válida para o servidor.",
		error_bad_userid_password_userResponse: "Certifique-se de que tenha inserido seu ID do usuário e senha corretamente.",
		error_bad_userid_password_adminResponse: "O erro a seguir foi retornado: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Uma conexão com o Web client não pode ser estabelecida usando a URL a seguir: ${0}.",
		http_send_error_explanation: "Este erro pode ser causado por um problema de configuração no servidor de aplicativos da web ou por um problema no aplicativo de Web client.",
		http_send_error_userResponse: "Tente efetuar login novamente. Se o problema persistir, relate o erro para o administrador do sistema.",
		http_send_error_adminResponse: "O seguinte erro de HTTP foi retornado: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Uma conexão com o Web client não pode ser estabelecida usando a URL a seguir: ${0}.",
		http_error_explanation: "Pode ser necessário autenticar-se para um firewall, ou o servidor de aplicativos da web pode não estar em execução ou não pode ser acessado devido a problemas de rede.",
		http_error_userResponse: "Se for necessário autenticar-se em um firewall, autentique-se e tente efetuar login novamente. Se o problema persistir, relate o erro para o administrador do sistema.",
		http_error_adminResponse: "O seguinte erro de HTTP foi retornado: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Uma conexão com o Web client não pode ser estabelecida usando a URL a seguir: ${0}.",
		http_response_bad_explanation: "Este erro pode ser causado por um problema de configuração no servidor de aplicativos da web ou por um problema com o Web client.",
		http_response_bad_userResponse: "Tente efetuar login novamente. Se o problema persistir, relate o erro para o administrador do sistema.",
		http_response_bad_adminResponse: "O erro a seguir foi retornado: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Sem título",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "O applet de e-mail não pode ser iniciado.",
		email_applet_init_failed_explanation: "Este problema pode ocorrer quando seu cliente de e-mail não está instalado e configurado adequadamente ou quando uma versão suportada do Java Runtime Environment (JRE) não está instalada em sua estação de trabalho.",
		email_applet_init_failed_userResponse: "Para resolver o problema:<ul><li>Assegure-se de que seu aplicativo de e-mail esteja instalado e configurado como o cliente de e-mail padrão em sua estação de trabalho.</li><li>Verifique se uma versão suportada do JRE está instalada em sua estação de trabalho inserindo o comando a seguir em um prompt de comandos: java -version</li></ul><p>Uma lista das versões suportadas do JRE está incluída no documento <i>Pré-requisitos de Hardware e Software para o IBM Content Navigator</i> no site de Suporte de Software IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "O aplicativo de e-mail não pôde ser iniciado porque um arquivo DLL necessário não pode ser carregado.",
		email_applet_JNI_LOAD_FAILED_explanation: "O arquivo necessário WCEmailAppletJNI.dll não pode ser carregado porque o diretório temporário em sua estação de trabalho pode estar cheio.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Assegure-se de que o diretório temporário tenha espaço suficiente. Em seguida, tente enviar os arquivos a partir do Web client novamente. Por padrão, o arquivo WCEmailAppletJNI.dll é carregado no diretório temporário especificado nas configurações do navegador da web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "O aplicativo de e-mail não pôde ser iniciado porque o applet de e-mail não pode criar um arquivo temporário.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "O diretório temporário em sua estação de trabalho pode estar cheio.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Assegure-se de que o diretório temporário tenha espaço suficiente. Em seguida, tente enviar os arquivos a partir do Web client novamente.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "O aplicativo de e-mail não pode ser iniciado porque o applet de e-mail não pode acessar o diretório temporário.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "O diretório temporário em sua estação de trabalho pode estar cheio ou talvez você não tenha o acesso apropriado para gravar no diretório temporário.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Certifique-se de que o diretório temporário tenha espaço suficiente e de que você possua permissões de gravação para ele. Em seguida, tente enviar os arquivos a partir do Web client novamente. Se o problema persistir, entre em contato com o administrador do sistema.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "O applet de email não pode excluir um arquivo temporário.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Outro aplicativo pode estar usando o arquivo, ou o arquivo talvez não exista na sua estação de trabalho.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Se o arquivo estiver sendo usado por outro aplicativo, feche esse aplicativo. Se o arquivo estiver no sistema de arquivos local, remova o arquivo a seguir do diretório temporário da estação de trabalho: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "O link para o documento não pode ser criado.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "O repositório retornou a URL em um formato inválido.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Feche o navegador da web, incluindo todas as guias e sessões, e efetue login novamente. Tente enviar o documento a partir do web client novamente. Se este problema persistir, entre em contato com o Suporte de Software IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "O applet de email não pode anexar o arquivo a um email.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "O repositório retornou a URL para o documento em um formato inválido.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Feche o navegador da web, incluindo todas as guias e sessões, e efetue login novamente. Tente enviar o documento a partir do web client novamente. Se este problema persistir, entre em contato com o Suporte de Software IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "O anexo não pode ser criado.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "O applet de e-mail não pode ler a URL para o documento.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Feche o navegador da web, incluindo todas as guias e sessões, e efetue login novamente. Tente enviar o documento a partir do web client novamente. Se este problema persistir, entre em contato com o Suporte de Software IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "O documento não pôde ser recuperado do repositório.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Sua sessão pode ter atingido o tempo limite, o repositório ou o servidor de aplicativos da web pode não estar em execução ou pode haver um problema com a configuração do Web client.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Efetue login e tente enviar o documento por email novamente. Se o problema persistir, solicite ao administrador do sistema que verifique os logs de erro do repositório.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Se configurou o Web client para converter os documentos AFP para outro formato, como PDF, antes de enviar os documentos como anexos, certifique-se de que a conversão esteja configurada corretamente.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "O documento não pôde ser convertido para PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "A ferramenta usada para transformar documentos em PDF não suporta o tipo de arquivo.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Feche esta página e tente fazer email do documento novamente sem convertê-lo em PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "O email não foi criado.",
		email_applet_MAPI_USER_ABORT_explanation: "Abra seu aplicativo de e-mail e assegure-se de que ele esteja funcionando adequadamente. Em seguida, tente enviar os arquivos a partir do Web client novamente. Se o problema persistir, entre em contato com o administrador do sistema para revisar seus logs de evento do sistema operacional.",
		email_applet_MAPI_USER_ABORT_userResponse: "Se você desejava fechar o aplicativo de e-mail, nenhuma ação adicional é necessária. Para enviar o e-mail, efetue login no aplicativo de e-mail e tente enviar o documento do Web client novamente.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "O email não pode ser criado.",
		email_applet_MAPI_FAILURE_explanation: "Seu cliente de e-mail pode não estar aberto ou com login efetuado.",
		email_applet_MAPI_FAILURE_userResponse: "Abra seu aplicativo de e-mail e assegure-se de que ele esteja funcionando adequadamente. Em seguida, tente enviar os arquivos a partir do Web client novamente. Se o problema persistir, entre em contato com o administrador do sistema para revisar seus logs de evento do sistema operacional.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "O email não pode ser criado.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Você não efetuou login no cliente de e-mail. Seu cliente de e-mail deve estar aberto e você deve estar conectado para enviar uma mensagem a partir do Web client.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Abra o cliente de e-mail e efetue login. Em seguida, tente enviar os arquivos a partir do Web client novamente.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "O email não pode ser criado porque o arquivo temporário não pode ser criado em sua estação de trabalho.",
		email_applet_MAPI_DISK_FULL_explanation: "O diretório temporário em sua estação de trabalho pode estar cheio.",
		email_applet_MAPI_DISK_FULL_userResponse: "Assegure-se de que o diretório temporário tenha espaço suficiente. Em seguida, tente enviar os arquivos a partir do Web client novamente.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "O email não pode ser criado porque não há memória do sistema suficiente.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Você pode ter muitos aplicativos abertos.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Feche os aplicativos não utilizados e, em seguida, tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "O acesso à MAPI foi negado.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "acesso à Messaging Application Programming Interface (MAPI) pode não estar ativado ou suportado para seu aplicativo de e-mail. MAPI é o protocolo do sistema de mensagens que é utilizado para ativar a comunicação entre o web client e seu aplicativo de e-mail.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Entre em contato com seu administrador do sistema.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Certifique-se de que o aplicativo de e-mail tenha o acesso à MAPI configurado e esteja configurado corretamente. Se o problema persistir, entre em contato com o Suporte de Software IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "O anexo ou o link para o item não pode ser criado.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Você pode ter muitas sessões do navegador da web abertas.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Feche quaisquer sessões do navegador da web. Em seguida, tente enviar os arquivos a partir do Web client novamente. Se o problema persistir, entre em contato com o administrador do sistema.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "O email não pode ser enviado.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Você pode estar tentando enviar muitos anexos.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Selecione menos arquivos. Em seguida, tente enviar os arquivos a partir do Web client novamente.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "O email não pode ser enviado.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Você pode estar enviando o email para muitos destinatários.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Envie o email para menos destinatários.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "O anexo não pode ser criado.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Alguns arquivos temporários necessários podem ter sido excluídos antes dos anexos pode ser criado. Este erro pode ocorrer se o cache do navegador for limpo antes que o e-mail for enviado.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "O anexo não pode ser criado.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Alguns arquivos temporários necessários podem ter sido excluídos antes dos anexos pode ser criado. Este erro pode ocorrer se o cache do navegador for limpo antes que o e-mail for enviado.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "O anexo não pode ser criado pelo aplicativo de email.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "O email não pode ser enviado para o destinatário especificado.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "O destinatário talvez não exista no catálogo de endereços.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Verifique o nome do destinatário e tente enviar o documento novamente.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "O email não pode ser enviado para o destinatário especificado.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "O endereço de email pode estar formatado incorretamente.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Certifique-se de que tenha inserido um endereço de e-mail válido e tente enviar o documento novamente.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "O email pode não estar composto corretamente.",
		email_applet_MAPI_NO_MESSAGES_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "O email pode não estar composto corretamente.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "O email não pode ser enviado.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "O email talvez seja muito longo.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Reduza o texto do e-mail e tente enviar o email novamente.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "O email não pode ser criado.",
		email_applet_MAPI_INVALID_SESSION_explanation: "O cliente de email pode ter falhado quando tentou criar o email.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Reinicie o cliente de e-mail e tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "O email pode não estar composto corretamente.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "O email pode não estar composto corretamente.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "O email pode não estar composto corretamente.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "O email pode não estar composto corretamente.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "O email pode não estar composto corretamente.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "O email não pode ser enviado para o destinatário especificado.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "O endereço de email pode estar formatado incorretamente.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Assegure-se de ter inserido um endereço de email válido e envie o documento novamente.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "O cliente de email não pode executar a ação solicitada.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "O aplicativo de email retornou um erro inesperado.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Tente enviar o documento a partir do web client novamente.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Uma das propriedades não tem o número necessário de valores.",
		error_property_cardinality_explanation: "Algumas propriedades têm um número mínimo e um número máximo de valores.",
		error_property_cardinality_userResponse: "Use a ajuda instantânea para determinar qual propriedade requer um número mínimo de valores. Em seguida, especifique o número mínimo de valores e tente novamente.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Um nome de arquivo é requerido.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Especifique um nome do arquivo e tente novamente.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "O plug-in ${0} contém erros.",
		plugin_error_explanation: "Ocorreu um erro ao avaliar o JavaScript para o plug-in ${0}. Se você continuar a usar o Web client, poderá encontrar erros adicionais.",
		plugin_error_userResponse: "Entre em contato com seu administrador do sistema.",
		plugin_error_adminResponse: "Há um problema com o plug-in que precisa ser resolvido pelo provedor de plug-in. É recomendado que você remova o plug-in da sua configuração do Web client até que o problema com o plug-in seja resolvido.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "O modelo de entrada não pode ser aberto.",
		open_old_format_entry_template_error_explanation: "O modelo de entrada usa um formato mais antigo que não é suportado no web client.",
		open_old_format_entry_template_error_userResponse: "Solicite que o administrador do sistema atualize o modelo de entrada.",
		open_old_format_entry_template_error_adminResponse: "Use o Application Engine ou o Designer do Modelo de Entrada do Workplace XT para salvar uma versão atualizada do modelo de entrada.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "O modelo de entrada não pode ser aberto.",
		open_custom_object_entry_template_error_explanation: "O Web client não suporta o seguinte tipo de modelo de entrada: modelos de entrada de objeto customizado.",
		open_custom_object_entry_template_error_userResponse: "Abra um modelo de entrada diferente.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "O objeto eforms não pode ser aberto.",
		open_forms_object_error_explanation: "O Web client não suporta os seguintes tipos de objeto eforms: modelo de formulário, dados de formulário, política do documento e política de fluxo de trabalho.",
		open_forms_object_error_userResponse: "Abra um documento diferente.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Não é possível usar o modelo de entrada ${0}.",
		entry_template_folder_restricted_error_explanation: "O modelo de entrada inclui itens na pasta ${1} e você não tem as permissões apropriadas para incluir itens nessa pasta.",
		entry_template_folder_restricted_error_userResponse: "Selecione um modelo de entrada diferente ou solicite que o administrador do sistema conceda-lhe as permissões apropriadas para incluir itens na pasta ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "O modelo de entrada não pode ser aberto.",
		open_records_entry_template_error_explanation: "O Web client não suporta o seguinte tipo de modelo de entrada: modelos de entrada Declarar como Registro.",
		open_records_entry_template_error_userResponse: "Abra um modelo de entrada diferente.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "O fluxo de trabalho não pode ser aberto.",
		open_workflow_error_explanation: "O Web client não suporta a abertura de fluxos de trabalho.",
		open_workflow_error_userResponse: "Abra um documento diferente.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "O documento não pode ser aberto.",
		viewer_unable_to_view_error_explanation: "Nenhum visualizador está configurado para documentos desse tipo ou o visualizador configurado não é compatível com seu sistema.",
		viewer_unable_to_view_error_userResponse: "Peça ao administrador do sistema para configurar um visualizador para documentos desse tipo e certifique-se de que o visualizador configurado funcione com o sistema do usuário.",
		viewer_unable_to_view_error_adminResponse: "Use a ferramenta de administração para configurar um visualizador para este tipo de documento.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "A Procura não pode ser aberta.",
		search_cannot_open_error_explanation: "O recurso de Procura não está configurado para esta área de trabalho.",
		search_cannot_open_error_userResponse: "Peça ao seu administrador do sistema se você pode ter acesso a uma área de trabalho que inclui o recurso de Procura ou se esta área de trabalho pode ser atualizada para incluir o recurso de Procura.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "O documento não foi carregado.",
		viewer_document_load_failed_error_explanation: "O visualizador Daeja ViewONE Professional não pôde abrir o documento.",
		viewer_document_load_failed_error_userResponse: "Para obter mais informações, consulte a mensagem de erro que é exibida no visualizador.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "O documento não pode ser visualizado.",
		viewer_session_expired_explanation: "O conteúdo do documento não pode ser recuperado.",
		viewer_session_expired_userResponse: "Tente efetuar login novamente. Se o problema persistir, é possível que o servidor de aplicativos não esteja em execução. Solicite que o administrador do sistema verifique os logs de erro do IBM Content Navigator ou reinicie o servidor.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "O documento não pode ser visualizado.",
		ajaxViewer_getPage_failed_explanation: "O Visualizador AJAX recebeu uma resposta de erro ao recuperar o conteúdo da página. É possível que o servidor de aplicativos não esteja em execução.",
		ajaxViewer_getPage_failed_userResponse: "Feche o navegador da web e efetue login novamente. Se o problema persistir, solicite que o administrador do sistema revise os arquivos de log do servidor de aplicativos da web ou que reinicie o servidor.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "O Java Runtime Environment (JRE) não foi localizado na estação de trabalho.",
		viewer_java_plugin_not_found_explanation: "O plug-in não foi localizado ou a versão correta do JRE não está instalada.",
		viewer_java_plugin_not_found_userResponse: "Verifique se o JRE está instalado. Por exemplo, em um prompt de comandos, insira o seguinte comando: Java -version. Se JRE não estiver instalado ou estiver instalado no nível de versão errado, instale a versão apropriada do JRE. Uma lista das versões suportadas é incluída no documento <i>Pré-requisitos de Hardware e Software para IBM Content Navigator</i> no site Suporte de Software IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "O documento não pode ser exibido no navegador da web.",
		viewer_pdf_plugin_not_found_explanation: "O plug-in usado para exibir documentos PDF no navegador da web não foi localizado.",
		viewer_pdf_plugin_not_found_userResponse: "O arquivo PDF será transferido por download para sua estação de trabalho em vez de ser exibido na janela do visualizador.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "O item a seguir não pode ser incluído no repositório: ${0}.",
		add_document_single_item_error_explanation: "Esse erro pode ocorrer por um dos motivos a seguir:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Você está tentando incluir um documento que foi movido ou excluído.</li>" + "<li>Você está tentando incluir um documento que foi renomeado.</li>" + "<li>Você está tentando incluir um documento que está corrompido.</li>" + "<li>Você está tentando incluir um documento que está aberto em outro aplicativo.</li>" + "<li>Você está tentando incluir uma pasta no repositório.</li>" + "<li>Você não possui as permissões apropriadas no sistema operacional para acessar o documento.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Tome a ação apropriada para resolver o problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Se o documento foi movido ou renomeado, localize o documento em seu sistema de arquivos e tente incluí-lo novamente.</li>" + "<li>Se o documento estiver aberto em outro aplicativo, feche-o e tente incluí-lo novamente.</li>" + "</ul>" + "<br>Não é possível incluir pastas no repositório.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Os ${0} itens a seguir não podem ser incluídos no repositório: ${1}",
		add_document_multiple_items_error_explanation: "Um problema com um dos itens evita que quaisquer itens sejam incluídos no repositório. Esse erro pode ocorrer por um dos motivos a seguir:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Você está tentando incluir um documento que foi movido ou excluído.</li>" + "<li>Você está tentando incluir um documento que foi renomeado.</li>" + "<li>Você está tentando incluir um documento que está corrompido.</li>" + "<li>Você está tentando incluir um documento que está aberto em outro aplicativo.</li>" + "<li>Você está tentando incluir uma pasta no repositório.</li>" + "<li>Você não possui as permissões apropriadas no sistema operacional para acessar o documento.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Tome a ação apropriada para resolver o problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Se um documento foi movido ou renomeado, localize o documento em seu sistema de arquivos e tente incluir os itens novamente.</li>" + "<li>Se um documento estiver aberto em outro aplicativo, feche-o e tente incluir os itens novamente.</li>" + "<li>Se um documento foi excluído ou está corrompido, cancele a seleção do item e tente incluir os itens restantes novamente.</li>" + "</ul>" + "<br>Não é possível incluir pastas no repositório.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Não é possível arrastar e soltar itens deste local.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "O objeto eforms não pode ser aberto.",
		open_forms_work_object_error_explanation: "O Web client não suporta o tipo de modelo eforms a seguir: política de fluxo de trabalho.",
		open_forms_work_object_error_userResponse: "Abra um documento diferente.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "O documento não pode ser aberto.",
		viewer_privilege_to_view_error_explanation: "Você não tem os privilégios apropriados para visualizar o documento.",
		viewer_privilege_to_view_error_userResponse: "Peça ao proprietário do documento ou ao administrador do sistema para lhe dar as permissões apropriadas para visualizar o documento.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Os itens não podem ser incluídos no repositório.",
		add_document_too_many_items_error_explanation: "É possível incluir até ${0} itens por vez. Você está tentando incluir ${1} itens.",
		add_document_too_many_items_error_userResponse: "Remova alguns dos itens da lista e tente incluir os itens novamente. Também é possível entrar em contato com o administrador do sistema para aumentar o número máximo de documentos que podem ser incluídos por vez nessa área de trabalho.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Uma conexão com o Web client não pode ser estabelecida usando a URL a seguir: ${0}.",
		http_ltpa_expired_explanation: "A chave LTPA que está associada à sua sessão de navegação expirou.",
		http_ltpa_expired_userResponse: "Reinicie o navegador da web e tente efetuar login novamente. Se o problema persistir, relate o erro a seguir ao seu administrador do sistema: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "O documento não pode ser incluído na pasta ${0}.",
		dnd_no_privilege_error_explanation: "As permissões na pasta impedem que qualquer documento seja incluído nela.",
		dnd_no_privilege_error_userResponse: "Inclua o documento em uma pasta diferente.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Os itens não podem ser modificados.",
		modify_document_too_many_items_error_explanation: "É possível modificar até ${0} itens por vez. Você está tentando modificar ${1} itens.",
		modify_document_too_many_items_error_userResponse: "Selecione menos itens e tente modificá-los novamente. Também é possível entrar em contato com o administrador do sistema para aumentar o número máximo de itens que podem ser modificados por vez nessa área de trabalho.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Não é possível usar a classe ${0}.",
		add_document_multiple_unique_values_error_explanation: "A classe ${0} contém uma ou mais propriedades que requerem um valor exclusivo para cada documento. Quando você inclui diversos documentos, todos os documentos usam os mesmos valores.",
		add_document_multiple_unique_values_error_userResponse: "Selecione uma classe diferente ou inclua os documentos separadamente.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Não é possível usar o modelo de entrada ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "O modelo de entrada ${0} requer incluir documentos na classe ${1}. No entanto, a classe ${1} contém uma ou mais propriedades que requerem um valor exclusivo para cada documento. Quando você inclui diversos documentos, todos os documentos usam os mesmos valores.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Selecione um modelo de entrada diferente ou inclua os documentos separadamente.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Não é possível usar o modelo de entrada ${0}.",
		entry_template_class_restricted_error_explanation: "O modelo de entrada inclui itens usando a classe ${1} e você não tem as permissões apropriadas para incluir itens usando essa classe.",
		entry_template_class_restricted_error_userResponse: "Selecione um modelo de entrada diferente ou solicite que o administrador do sistema forneça as permissões apropriadas para que você inclua itens usando a classe ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "O item de trabalho não pode ser redesignado para outro usuário.",
		process_reassign_error_explanation: "Esta ação é proibida pelo fluxo de trabalho.",
		process_reassign_error_userResponse: "É possível abrir o item de trabalho ou concluir a etapa atual no item de trabalho.  Para obter mais informações sobre esse problema, solicite ao proprietário do item verificar se o item de trabalho pode ser redesignado.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "A ação customizada a seguir não pode ser carregada: ${0}.",
		customaction_loadurl_error_explanation: "A ação customizada não está em um local acessível. A URL atual da ação customizada é ${1}.",
		customaction_loadurl_error_userResponse: "Solicite ao seu administrador para mover a ação customizada para um local acessível.",
		customaction_loadurl_error_adminResponse: "O arquivo JSP que define a ação customizada deve ser fornecido como parte do aplicativo da web eClient ou do aplicativo da web IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "O recurso a seguir não pode ser localizado: ${0}.",
		feature_invalid_explanation: "Esse problema poderá ocorrer se o recurso não estiver disponível na área de trabalho especificada ou se o nome do recurso foi digitado incorretamente.",
		feature_invalid_userResponse: "Quando clicar em OK, você será redirecionado para o recurso padrão dessa área de trabalho. Entre em contato com o administrador do sistema para relatar esse problema.",
		feature_invalid_adminResponse: "Se o recurso tiver que estar disponível na área de trabalho, atualize a configuração da área de trabalho na ferramenta de administração. Se o recurso não precisar ser incluído na área de trabalho ou se foi digitado incorretamente, trabalhe com o desenvolvedor de aplicativos que criou a URL para esse recurso para atualizar a URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "A Procura ${0} não pode ser aberta.",
		search_unsupportedTeamspaceSearch_error_explanation: "Deve-se estar em um espaço de equipe para abrir esta procura.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Selecione uma Procura diferente.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "O arquivo a seguir não pode ser importado: ${0}.",
		wrong_import_file_type_error_explanation: "O arquivo deve ser um arquivo de propriedades.",
		wrong_import_file_type_error_userResponse: "Selecione o arquivo de propriedades que você exportou da ferramenta de administração.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "O repositório ${0} não pôde ser localizado na área de trabalho ${1}.",
		browse_repository_not_found_error_explanation: "O repositório deve estar presente na área de trabalho e ativada para o recurso de procura quando for especificado em um parâmetro de URL.",
		browse_repository_not_found_error_userResponse: "Certifique-se de que o id do repositório especificado no URL está correta, o repositório foi incluído na ${1} da área de trabalho, e o recurso pesquisar é ativado para o repositório.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "O ${0} do repositório não está ativado para o recurso de procura no ${1} da área de trabalho.",
		browse_repository_not_enabled_error_explanation: "O repositório deve ser ativada para o recurso de procura quando for especificado em um parâmetro de URL.",
		browse_repository_not_enabled_error_userResponse: "Ative o recurso de procura para o ${0} repositório no ${1} da área de trabalho.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "A Procura não pode ser concluída porque inclui critérios de link inválido.",
		invalid_xt_stored_search_criteria_error_explanation: "O valor a seguir não é válido: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Peça ao administrador do sistema para fornecer um link atualizado.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Edite o apropriados par nome-valor na URL. Se você não souber quais valores são válidos para a propriedade, abra a procura armazenada no projetista da pesquisa FileNet Workplace XT para determinar um valor válido.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "A procura entre repositórios não pode ser aberta.",
		unified_search_invalid_fixed_value_error_explanation: "A procura entre repositórios inclui critérios inválidos. Este problema pode ocorrer quando uma critério tem valor fixo que não é compatível com as outras propriedades em um mapeamento. Por exemplo, esse problema pode ocorrer se o valor fixo é uma cadeia, mas as outras propriedades no mapeamento são inteiros.",
		unified_search_invalid_fixed_value_error_userResponse: "Se tiver as permissões apropriadas para editar a pesquisa, remova os critérios inválidos e salve a Procura novamente. Se não tiver as permissões apropriadas para editar a pesquisa, peça ao proprietário da pesquisa ou a seu administrador do sistema que salve a pesquisa novamente.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Sua solicitação não pode ser concluída.",
		launch_action_invalid_json_error_explanation: "Os dados que foram passados para o Web client não são válidos.",
		launch_action_invalid_json_error_userResponse: "Diga ao seu administrador do sistema qual aplicativo você estava usando quando esse problema ocorreu.",
		launch_action_invalid_json_error_adminResponse: "O aplicativo cliente não enviou um objeto JSON válido ao Web client. Entre em contato com o Suporte de software IBM para obter assistência adicional.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Sua solicitação não pode ser concluída.",
		launch_action_not_found_error_explanation: "A ação ${0} não está configurada para nenhum menu na área de trabalho ${1}.",
		launch_action_not_found_error_userResponse: "Peça ao seu administrador do sistema para configurar a área de trabalho ${1} para usar um menu que contenha a ação ${0} ou para designá-lo a uma área de trabalho que inclua a ação ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Sua solicitação não pode ser concluída.",
		launch_action_repository_not_found_error_explanation: "O repositório ${0} não está associado à área de trabalho ${1}.",
		launch_action_repository_not_found_error_userResponse: "Peça ao seu administrador do sistema para associar o repositório ${0} à área de trabalho ${1} ou para designá-lo a uma área de trabalho que inclua o repositório ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "O espaço de equipe não pode ser aberto.",
		teamspace_cannot_open_error_explanation: "O recurso de espaço de equipe não está configurado para esta área de trabalho.",
		teamspace_cannot_open_error_userResponse: "Peça ao seu administrador do sistema se é possível ter acesso a uma área de trabalho que inclua o recurso de espaço de equipe ou se esta área de trabalho pode ser atualizada para incluir o recurso de espaço de equipe.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Ocorreu um erro ao efetuar check-in do conteúdo da edição de dados.",
		viewer_redaction_checkin_failed_explanation: "O visualizador recebeu uma resposta de erro durante a verificação no conteúdo editado.",
		viewer_redaction_checkin_failed_userResponse: "Solicite ao seu administrador do sistema para revisar os arquivos de log do servidor de aplicativos da web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Não é possível incluir documentos neste repositório.",
		add_document_odserver_odwek_version_od_error_explanation: "A versão atual do servidor IBM Content Manager OnDemand ou do ODWEK não está no nível mínimo que é necessário para suportar a inclusão de documentos em um repositório do Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Peça ao administrador para verificar quais versões do Content Manager OnDemand Server e do ODWEK são necessárias para suportar a inclusão de documentos nos repositórios do Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Os itens não podem ser incluídos no repositório.",
		add_document_too_many_items_od_error_explanation: "Para repositórios do IBM Content Manager OnDemand, é possível incluir somente um item por vez.",
		add_document_too_many_items_od_error_userResponse: "Remova alguns dos itens de sua lista e tente incluir os itens novamente um item por vez.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "O item não pode ser incluído no repositório.",
		add_document_filesize_empty_od_error_explanation: "Não é possível incluir arquivos vazios em um repositório do IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Inclua o conteúdo no arquivo e tente incluir o arquivo novamente ou inclua um item diferente.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "A procura entre repositórios não pode ser aberta.",
		unified_search_repository_not_found_error_explanation: "A procura entre repositórios inclui um ou mais repositórios inválidos. Esse problema pode ocorrer quando os repositórios que estão incluídos na procura forem excluídos do aplicativo ou removidos da área de trabalho atual.",
		unified_search_repository_not_found_error_userResponse: "Se tiver as permissões apropriadas para editar a Procura, salve a Procura novamente. Ao salvar a procura, o Web client remove os repositórios inválidos da procura. Se não tiver as permissões apropriadas para editar a pesquisa, peça ao proprietário da pesquisa ou a seu administrador do sistema que salve a pesquisa novamente.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Não é possível criar um novo documento.",
		edit_document_using_office_online_error: "O documento não pode ser aberto.",
		edit_document_using_office_online_error_explanation: "A URL do Servidor do Microsoft Office Online não está configurada.",
		edit_document_using_office_online_error_userResponse: "Antes de ser possível usar o Office Online, seu administrador deve primeiro ativar o Servidor do Office Online em um repositório e especificar a URL do Servidor do Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "O documento não pode ser aberto em Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Solicite que o administrador atualize o MS Office Online Server Integration.<br><br> Se for necessário acessar este documento no Microsoft Office Online, acesse a página Editar Integração para o repositório e atualize o MS Office Online Server Integration para incluir a classe na lista de classes a serem modificadas para o suporte do Office Online. ",		
		browser_not_support_this_viewer: "O visualizador configurado não é compatível com o seu navegador.",
		browser_not_support_this_viewer_explanation: "O ${0} não é suportado pelo navegador.",
		browser_not_support_this_viewer_userResponse: "Use outro visualizador para abrir o documento. Uma lista dos navegadores suportados está incluída no documento <i>Pré-requisitos de hardware e software para o IBM Content Navigator</i> no site de Suporte de software IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informações do fluxo de trabalho",
		process_information_info_text: "O item selecionado está atualmente em execução nos fluxos de trabalho a seguir.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Igual",
		operator_NOTEQUAL: "Não É Igual",
		operator_LIKE: "Como",
		operator_STARTSWITH: "Começa com",
		operator_ENDSWITH: "Termina com",
		operator_NOTLIKE: "Não Como",
		operator_NULL: "Está Vazio",
		operator_NOTNULL: "Não Está Vazio",
		operator_LESS: "Menor que",
		operator_LESSOREQUAL: "Menor ou Igual",
		operator_GREATER: "Maior que",
		operator_GREATEROREQUAL: "Maior ou Igual",
		operator_BETWEEN: "Entre",
		operator_NOTBETWEEN: "Não Está Entre",
		operator_IN: "Incluir todos",
		operator_INANY: "Incluir qualquer um",
		operator_NOTIN: "Excluir todos",
		operator_CONTAINS: "Contém",

		/* SearchForm widget */
		search_button_tooltip: "Procure documentos que correspondem aos seus critérios.",
		reset_button_tooltip: "Reconfigura a Procura para os valores padrão configurados pelo administrador.",
		clear_button_tooltip: "Remove todos os valores inseridos para a Procura.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Selecionar Pesquisa",
		append_to_search: "Anexar à Pesquisa",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nova Pesquisa",
		new_unified_search: "Nova Procura entre Repositórios",
		searh_name_contains: "A procura de nomes contém",
		keep_search_criteria_expanded: "Manter critérios de Procura abertos",
		showing_results: "Mostrando resultados para:",
		open_in_new_window: "Abrir em uma Nova Janela",
		open_in_new_tab: "Abrir em uma Nova Guia",
		close_tab: "Fechar Guia",
		add_repository: "Incluir Repositório",
		edit_repository: "Editar Repositório",
		remove_repository: "Remover",
		search_scope: "Escopo da Procura",
		search_class_template: "Classe",
		object_type_version: "Tipo e Versão do Objeto",
		not_applicable: "Não aplicável",
		unified_search_including_subfolders: " (Incluindo subpastas)",
		unified_search_dialog_intro_text: "Selecione o repositório e a procura ou as classes que deseja incluir na procura.",
		unified_search_class_or_template: "Classe ou modelo",

		select_object_fieldset_legend: "Como você deseja localizar itens para anexar:",
		select_object_create_new_search: "Nova Procura",
		select_object_search_template: "Procura existente",

		search_criteria: "Critérios de Pesquisa:",
		search_criteria_no_colon: "Critérios de Procura",
		search_in_multiple: "Pesquisar em (${0}):",
		search_location_including_subfolders: "${0} incluindo subpastas",
		search_class: "Classe:",
		search_class_multiple: "Classe (${0}):",
		search_class_including_subclasses: "${0} incluindo subclasses",
		search_class_all_pseudo: "Todos",
		search_results: "Resultados da procura",
		select_operator: "Selecionar um operador",
		ending_value: "O valor final para a propriedade ${0} é:",
		search_options: "Opções de Procura:",
		search_version: "Versão:",
		search_released_version: "Versão liberada",
		search_current_version: "Versão atual",
		search_all_versions: "Todas as versões",
		search_file_type_filter: "Filtro de tipo de arquivo:",
		search_one_file_type: "1 tipo de arquivo",
		search_many_file_types: "${0} tipos de arquivo",
		search_action_filter: "Filtro de ação:",
		search_action_filter_hover_help: "Limite os resultados para incluir apenas os arquivos nos quais os usuários tomaram uma ação específica.<br/>Por exemplo, é possível procurar apenas os documentos incluídos em 20 de setembro de 2012.",
		search_action_filter_enabled: "O filtro de ação está ativado",
		search_enable: "Ativar",
		search_disable: "Desativar",
		search_by: "por",
		search_added: "Incluído",
		search_modified: "Modificado",
		search_checked_out: "Retirado do Repositório",
		search_date_operator_on: "Em",
		search_date_operator_not_on: "Não em",
		search_date_operator_before: "Antes",
		search_date_operator_after: "Depois",
		search_version_hover_help_p8: "Uma versão liberada está disponível para todos os usuários. Um documento que é uma versão atual significa que um ou mais usuários estão editando esse documento.",
		search_version_hover_help_cm: "Uma versão atual é a versão mais recente do item.",
		search_using: "Pesquisar itens que correspondam a:",
		search_property_and_text_criteria: "Ambos, valores de propriedade e critérios de texto",
		search_property_or_text_criteria: "Um ou outro, valores de propriedade ou critérios de texto",
		search_property_and_text: "Ambos, propriedade e critérios de texto",
		search_property_or_text: "Um ou outro, propriedade ou critérios de texto",
		search_property_options: "Opções de propriedade:",
		search_property_option_match_all: "Todas as propriedades",
		search_property_option_match_any: "Qualquer uma das propriedades",
		search_property_option_match_all_summary: "Corresponder a todos",
		search_property_option_match_any_summary: "Corresponder a qualquer um",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Pelo menos",
		search_content_size_filter: "Filtro de tamanho do conteúdo:",
		search_content_size_filter_any: "Qualquer tamanho do conteúdo",

		/* Search work options */
		search_work_filter: "Filtro de item de trabalho:",
		search_work_filter_hover_help: "Limitar resultados para incluir apenas itens que estão em um fluxo de trabalho. Por exemplo, você pode limitar os resultados para incluir apenas os itens de trabalho que estão ativos.<br /><br />Esta opção não se aplica se você desejar ver todas as versões dos itens que são retornados pela procura.",
		search_work_filter_enabled: "filtro de item de trabalho está ativado",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Etapa:",
		search_work_filter_owner: "Proprietário:",
		search_work_filter_status_all: "Todos os itens",
		search_work_filter_status_active: "Itens ativos",
		search_work_filter_status_suspended: "Itens suspensos",
		search_work_filter_process_all: "Todos os workflows",
		search_work_filter_step_all: "Todas as etapas",
		search_work_filter_owner_all: "Todos os usuários",
		search_work_filter_step_error: "O nome da etapa não existe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "A Procura não pode ser concluída sem informações adicionais. Insira um valor para pelo menos uma condição.",
		search_insufficient_input_box: "A Procura não pode ser concluída sem informações adicionais. Insira critérios de procura de texto ou selecione um modelo de metadados.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "A Procura não pode ser configurada para execução quando aberta sem informações adicionais. Insira um valor para pelo menos uma condição.",
		search_member_required: "Para compartilhar essa procura com usuários e grupos específicos, selecione pelo menos um usuário ou grupo com o qual deseja compartilhar essa procura.",
		search_criteria_layout_and: "E",
		search_criteria_layout_or: "OU",
		search_prompt_close_without_save: "Deseja fechar sem salvar suas mudanças?",
		search_prompt_close_all_without_save: "Deseja fechar todas as guias sem salvar suas alterações?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Um dos tipos de critérios de procura a seguir não é válido para esse repositório: ${0}. Para executar a procura no Web client, os critérios inválidos deverão ser removidos. Se você salvar a procura, os critérios inválidos serão removidos. Se não desejar alterar a procura, feche a procura.",
		search_invalid_repository: "Um ou mais repositórios",
		search_invalid_class: "Uma ou mais classes.",
		search_invalid_folder: "Uma ou mais pastas.",
		search_invalid_file_type: "Um ou mais tipos de arquivos",
		search_invalid_property: "Uma ou mais propriedades.",
		search_invalid_text_search: "Critérios de procura de texto",
		search_invalid_work: "Critérios de filtro de item de trabalho",

		search_operator_pulldown_missing: "Um operador é necessário. Selecione um operador no menu drop-down. Se nenhum operador for visto, solicite que o administrador do sistema verifique a guia <b>Pesquisar</b> na ferramenta de administração para ver se todos os operadores estão ocultos. Se essa for uma procura entre repositórios, o menu suspenso não conterá nenhum operador, se as propriedades mapeadas de uma para outra não tiverem nenhum operador comum.",

		/*SearchBuilder */
		open_search_builder: "Nova Pesquisa",
		document_type: "Classe",
		show_all_properties: "Mostrar Todas as Propriedades",
		text_search_label: "Localizar itens com os seguintes termos:",
		text_search_place_holder: "Usar uma combinação de termos e operadores: * ? ou \"frases com correspondência exata\"",
		text_search_place_holder_box: "Use uma combinação de termos e operadores: AND, OR, NOT e \"frases com correspondência exata\"",
		text_search_place_holder_cascade_proximity: "Use uma combinação de termos e operadores: * ou ?",
		text_search_place_holder_common: "Use uma combinação de termos e \"frases com correspondência exata\"",
		text_search_hover_help_p8: "Use o asterisco (*) ou o ponto de interrogação (?) como um caractere curinga. Use aspas duplas (\"\") para correspondências exatas.",
		text_search_hover_help_p8_only_crs: "Use o asterisco (*) ou o ponto de interrogação (?) como um caractere curinga. Use aspas duplas (\"\") para correspondências exatas. Ao especificar vários termos, uma procura de repositório cruzado retorna itens que contém qualquer um dos termos.",
		text_search_hover_help_cm: "Use o asterisco (*) ou o ponto de interrogação (?) como um caractere curinga. Use aspas duplas (\"\") para correspondências exatas. Use o sinal de menos (-) para preceder termos a serem excluídos e o sinal de mais (+) para preceder termos a serem incluídos.",
		text_search_hover_help_box: "Use AND entre os termos para corresponder a todos os termos. Use OR entre os termos para corresponder a qualquer um dos termos. Use aspas duplas (\"\") para correspondências exatas. Preceda um termo com NOT para excluí-lo.",
		text_search_hover_help_common: "Use aspas duplas (\"\") para correspondências exatas. Ao especificar vários termos, uma procura de repositório cruzado retorna itens que contém todos os termos.",
		text_search_options: "Opções de texto:",
		text_search_options_hover_help: "Se usar quaisquer operadores diferentes de caracteres curingas, selecione operadores Avançados.",
		text_search_option_any: "Qualquer um dos termos",
		text_search_option_all: "Todos os termos",
		text_search_option_proximity: "Na proximidade de palavras:",
		text_search_option_none: "Operadores avançados",
		text_search_option_authoring: "A procura de texto é:",
		text_search_option_authoring_hover_help: "Escolha uma opção que determine como deseja tornar os critérios de procura de texto disponíveis aos usuários. Se não desejar incluir critérios de procura de texto na procura, oculte a opção. Caso contrário, será possível permitir que os critérios de procura de texto sejam editados ou obrigatórios aos usuários ou transformados em somente leitura para os usuários.",
		text_search_option_hide: "Ocultar Critérios",
		text_search_option_hide_hover_help: "Selecione esta opção se não desejar incluir nenhum critério de Procura de texto na Procura ou permitir que outros usuários especifiquem critérios de Procura de texto.",
		text_search_option_in: "Na tag HTML/XML ${0}",
		text_search_option_paragraph: "No mesmo parágrafo",
		text_search_option_sentence: "Na mesma sentença",
		text_search_option_vql: "Consulta VQL",
		text_search_option_none_hover_help: "Usar - para preceder termos a serem excluídos.",
		text_search_option_cascade_proximity_hover_help: "Restringe os resultados da Procura a termos que aparecem em um intervalo de palavras que não inclui frases exatas.",

		box_search_metadata: "Metadados:",
		box_search_select_template: "Selecionar modelo",
		box_search_no_templates: "Não há nenhum modelo disponível",
		box_text_search_options_search_within: "Escopo da procura:",
		box_text_search_options_search_within_everything: "Todos",
		box_text_search_options_search_within_file_content: "Conteúdo do documento",
		box_text_search_options_search_within_tags: "Marcações",
		box_text_search_options_limit_to: "Apenas procura:",

		add_property: "Incluir Propriedade",
		edit_template: "Editar Pesquisa",
		save_search: "Salvar Pesquisa",
		search_template_name: "Nome:",
		search_template_desc: "Descrição:",
		auto_run: "Executar a Procura quando aberta",
		show_in_tree: "Mostrar a Procura na estrutura de pasta",
		show_in_tree_hover_help: "Se uma procura for salva em uma pasta, ela será exibida somente na lista de conteúdo por padrão. Se você selecionar essa opção, a procura também será exibida na árvore de pasta na visualização Pesquisar.  No entanto, a procura é mostrada na árvore de pasta somente se você salvar a procura em uma pasta.",
		share_search_with: "Compartilhar Procura com:",
		remove_member: "Remover ${0}",
		ok_button_label: "OK",
		save_template: "Salvar",
		save_template_title: "Se você precisar Pesquisar itens específicos frequentemente, salve seus critérios de Procura.",
		remove_criterion: "Remover",
		apply_button_label: "Aplicar",
		empty_search_results_pane: "Execute uma procura para ver os resultados.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Repositório Todo",

		repository_already_selected: "O repositório ${0} não pode ser incluído na procura entre repositórios porque já está incluído na procura. <br/> Um repositório pode ser incluído na procura entre repositórios somente uma vez. <br/>Selecione um repositório diferente para incluir na procura entre repositórios.",

		repository_limit_reached: "O repositório ${0} não pode ser incluído na procura entre repositórios. É possível incluir no máximo ${1} repositórios na procura.",

		nomore_criteria_toappend: "Todas as propriedades mapeadas já estão incluídas no critério de procura. Nenhuma propriedade foi incluída no critério de procura.",
		nomore_criteria_toappend_regular: "Todas as propriedades já estão incluídas nos critérios de procura. Nenhuma propriedade foi incluída no critério de procura.",

		/* OD Save Search dialog */
		reload_label: "Recarregar",
		od_save_search_help_text: "Digite um nome para a Procura ou selecione uma Procura existente para substituir",
		public_access_label: "Permitir que outros usem esta Procura",
		od_delete_search_help_text: "Selecione uma ou mais Procuras para exclusão",
		delete_save_searches: "Excluir Pesquisas salvas",

		/* Unified Search */
		unified_search_enable_text_search: "Incluir critérios de procura de texto",
		unified_search_text_search_enabled: "Procura de texto incluída",
		unified_search_mapping: "Mapeamento",
		unified_search_new_mapping: "Novo mapeamento",
		unified_search_mapping_name: "Nome do Mapeamento",
		unified_search_mapping_dialog_instructions: "Selecione as propriedades que você deseja mapear. Algumas propriedades podem ser mapeadas para as propriedades com um tipo de dados diferente. Por exemplo, é possível mapear uma propriedade de sequência para uma propriedade de número inteiro. Quando você mapeia uma propriedade para outra, as propriedades são tratadas como uma única propriedade na procura entre repositórios.",
		unified_search_filter_available_properties: "Filtrar propriedades disponíveis",
		unified_search_available_properties: "Propriedades Disponíveis",
		unified_search_mapped_properties: "Propriedades Mapeadas",
		unified_search_single_values: "valores únicos",
		unified_search_multiple_values: "vários valores",
		unified_search_add_mapping: "Incluir Mapeamento",
		unified_search_warn_remove_repository: "O repositório selecionado é usado nos critérios de procura.\nSe você remover o repositório, quaisquer mapeamentos e critérios de procura que incluírem o repositório serão excluídos.\n\nDeseja remover o repositório?",
		unified_search_warn_update_repository_mappings: "Mudar a seleção de propriedade para esse repositório afeta os critérios de procura.\n\nOs critérios de procura incluem um ou mais mapeamentos que incluem uma ou mais propriedades que você está removendo. Quaisquer mapeamentos que incluam propriedades que você está removendo devem ser excluídos. Quaisquer critérios de procura que incluam esses mapeamentos devem ser excluídos para que a procura execute.\n\nDeseja atualizar as opções de repositório e excluir os mapeamentos e critérios de procura?",
		unified_search_warn_update_repository_mappings_reset: "Incluir os critérios de procura de texto para esse repositório afeta os critérios de procura de repositório cruzado.\n\nQuaisquer critérios de procura de propriedade que incluem um mapeamento com propriedades para esse repositório devem ser limpos para executar a procura.\n\nDeseja atualizar as opções de repositório e limpar os critérios de procura?",
		unified_search_warn_update_repository_text_criteria: "Remover os critérios de procura de texto para esse repositório afeta os critérios de procura de repositório cruzado.\n\nOs critérios de procura de texto devem ser excluídos dos critérios de procura de repositório cruzado para que a procura execute.\n\nDeseja atualizar a opção de repositório e excluir os critérios de procura de texto?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Remover os critérios de procura de texto e mudar a seleção de propriedade para esse repositório afeta os critérios de procura de repositório cruzado.\n\nOs critérios de procura de texto devem ser excluídos dos critérios de procura de repositório cruzado para que a procura execute. Também, os critérios de procura de propriedade incluem um ou mais mapeamentos que incluem uma ou mais propriedades que estiver removendo. Quaisquer mapeamentos que incluam propriedades que você está removendo devem ser excluídos. Quaisquer critérios de procura de propriedade que incluam esses mapeamentos devem ser excluídos para que a procura execute.\n\nDeseja atualizar as opções de repositório e excluir os critérios de procura de texto, mapeamentos e propriedade?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Excluir os critérios de procura de texto para esse repositório afeta os critérios de procura de repositório cruzado.\n\nQuaisquer critérios de procura de propriedade que incluem um mapeamento com propriedades para esse repositório devem ser limpos para executar a procura. Os critérios de procura de texto podem ser excluídos dos critérios de procura de repositório cruzado para executar a procura.\n\nDeseja atualizar as opções de repositório e limpar o critério de procura?",
		unified_search_warn_remove_mapping: "Remover esse mapeamento afeta os critérios de procura.\n\nOs critérios de procura que usam o mapeamento devem ser excluídos para que a procura execute.\n\nDeseja atualizar o mapeamento e excluir os critérios de procura?",
		unified_search_warn_update_mapping: "Mudanças nesse mapeamento afetam os critérios de procura.\n\nOs critérios de procura que usam o mapeamento devem ser limpos para assegurar que a procura não inclua operadores inválidos ou valores inválidos.\n\nDeseja atualizar o mapeamento e limpar os critérios de procura?",
		unified_search_warn_update_mapping_not_searchable: "Mudanças nesse mapeamento afetam os critérios de procura.\n\nQuando as propriedades mapeadas são todas somente de exibição, não é possível usar o mapeamento nos critérios de procura. O critério de procura que usa o mapeamento deve ser excluído para que a procura execute.\n\nDeseja atualizar o mapeamento e excluir o critério de procura?",
		unified_search_warn_update_mapping_box_searchable: "Mudanças nesse mapeamento afetam o critério de procura.\n\nO critério de procura já inclui esse mapeamento mais de uma vez e se você incluir a propriedade ${0} do repositório ${1}, o critério de procura incluirá a propriedade ${0} muitas vezes. O critério de procura que usa o mapeamento deve ser excluído para que a procura execute.\n\nDeseja atualizar o mapeamento e excluir o critério de procura?",
		unified_search_details: "Detalhes da procura entre repositórios",
		unified_search_fixed_value_property: "Propriedade de valor fixo",
		unified_search_required_property: "Propriedade necessária",
		unified_search_display_only_property: "Propriedade somente exibição",
		unified_search_missing_required_properities: "A procura não pode ser salva ou executada.<br/>As propriedades a seguir são obrigatórias:${0}Você deve incluir as propriedades em um mapeamento e incluir as propriedades com valores no critério de procura.",
		unified_search_property_repostory: "${0} (Repositório: ${1})",
		unified_search_builder_no_mappings: "A pesquisa não pode ser executada.<br/>Deve-se criar um mapeamento de propriedade e incluí-lo na <b>Exibição de resultados</b> para que a procura possa exibir seus resultados.",
		unified_search_builder_insufficient_criteria_to_run: "A pesquisa não pode ser executada.<br/>O critério de procura não inclui critério de procura de texto ou valores de propriedade para os seguintes repositórios:${0}Para cada repositório que é incluído na procura, deve-se inserir o critério de procura de texto ou criar um mapeamento de propriedade, incluí-lo no critério de propriedade e especificar um valor de propriedade.",
		unified_search_builder_insufficient_criteria_to_save: "A procura não pode ser salva.<br/>A procura não inclui o critério de procura para os seguintes repositórios:${0}Para cada repositório que é incluído na procura, deve-se realizar uma das seguintes opções:.<ol><li>Crie um mapeamento de propriedade e inclua-o no critério de propriedade.</li><li>Modifique o repositório para incluir o critério de procura de texto e crie um mapeamento da propriedade e inclua-o na <b>Exibição de resultados</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "A pesquisa não pode ser executada.<br/>Para cada repositório que é incluído na procura, deve-se especificar pelo menos um valor de propriedade. Por exemplo, é possível especificar valores para as propriedades a seguir: ${0}",
		unified_search_runtime_insufficient_criteria_text: "A pesquisa não pode ser executada.<br/>Critérios de procura de texto são necessários.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "A pesquisa não pode ser executada.<br/>Para cada repositório que é incluído na procura, deve-se especificar pelo menos um valor de propriedade ou inserir critérios de procura de texto. Por exemplo, é possível especificar valores para as propriedades a seguir: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "A pesquisa não pode ser executada.<br/>Critérios de procura de texto são necessários. Para cada repositório que é incluído na procura, deve-se especificar pelo menos um valor de propriedade ou inserir critérios de procura de texto. Por exemplo, é possível especificar valores para as propriedades a seguir: ${0}",
		unified_search_invalid_criteria: "A procura contém critérios inválidos que impedem a procura de ser executada.<br/>Os critérios inválidos foram removidos. No entanto, deve-se salvar as mudanças na procura antes de poder executá-la. Se não quiser salvar as mudanças, feche a procura.<br/><br/>Os itens a seguir foram removidos ou modificados:${0}",
		unified_search_invalid_fixed_values: "A procura não pode ser salva ou executada.<br/>Os critérios de procura a seguir têm valores fixos que não são válidos:${0}Execute uma das seguintes ações para resolver o problema:<ul><li>Remova os critérios de procura que contêm valores inválidos</li><li>Edite os mapeamentos que incluem a propriedade do IBM Content Manager OnDemand com o valor fixo para remover a propriedade.</li><li>Edite os mapeamentos que incluem a propriedade do IBM Content Manager OnDemand com o valor fixo para fazer todas as propriedades compatíveis. Para obter mais informações sobre quais propriedades podem ser mapeadas, consulte o link Saiba mais no texto introdutório na parte superior da janela mapeamento de propriedade.</li></ul>",
		unified_search_cannot_add_properties: "Não é possível incluir propriedades nesta procura.<br/>Todas as suas propriedades mapeadas disponíveis já estão no critério de procura e cada propriedade pode ser incluída na procura somente uma vez.",
		unified_search_mapping_not_viewable: "As propriedades do modelo do Box não podem ser exibidas nos resultados da procura. Caso queira incluir esse mapeamento como uma coluna, deve-se mapear pelo menos uma propriedade que não seja uma propriedade do modelo do Box. Por exemplo, é possível selecionar uma propriedade de outro repositório.",

		unified_search_returned_more: "Pelo menos um repositório excedeu os resultados máximos permitidos.",
		unified_search_partial_failure: "Ocorreu um erro em pelo menos um repositório.",
		unified_search_partial_failure_and_returned_more: "Ocorreu um erro em pelo menos um repositório e pelo menos um repositório excedeu o máximo de resultados permitido.",
		unified_search_see_analysis: "Consulte a análise de resultados.",
		unified_search_analysis_intro_returned_more: "Para cada repositório que excedeu o máximo de resultados permitido, tente refinar seu critério de procura para retornar menos resultados. Ou, você poderia executar uma única procura de repositório para retornar mais resultados do que o máximo permitido para uma procura de repositório cruzado.",
		unified_search_analysis_intro_partial_failure: "Revise as informações de erro que foi retornado pelo repositório ou repositórios. Se apropriado, resolva os erros e execute a procura de repositório cruzado novamente.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Para cada repositório no qual um erro ocorreu, tente resolver o problema e executar a procura novamente.<br/><br/>Para cada repositório que excedeu o máximo de resultados permitido, tente refinar seu critério de procura para retornar menos resultados. Ou, você poderia executar uma única procura de repositório para retornar mais resultados do que o máximo permitido para uma procura de repositório cruzado.",
		unified_search_results_found: "Resultados Localizados",
		unified_search_maximum_allowed: "Máximo permitido",
		unified_search_maximum_exceeded: "Máximo excedido",

		unified_search_mapping_rule_box: "Essa propriedade não pode ser incluída no mapeamento.<p>A propriedade ${0} do repositório ${1} já está em outro mapeamento e as propriedades pesquisáveis desse repositório podem ser incluídas em somente um mapeamento por procura.<br/>Selecione uma propriedade diferente para incluir no mapeamento.</p>",
		unified_search_mapping_rule_repository: "A propriedade não pode ser incluída no mapeamento.<br/>O mapeamento já inclui uma propriedade do repositório ${0}. Um mapeamento pode incluir apenas uma propriedade de um repositório.<br/>Selecione um repositório diferente do qual deseja incluir uma propriedade ou crie um novo mapeamento para a propriedade selecionada.",
		unified_search_mapping_rule_data_type: "A propriedade não pode ser incluída no mapeamento.<br/>Um ${0} propriedade não pode ser mapeado para um ${1}. Selecione uma propriedade diferente para mapeamento, ou crie um novo mapeamento para a propriedade selecionada.<br/>Para obter mais informações sobre quais propriedades podem ser mapeadas, consulte o link Saiba mais no texto introdutório na parte superior dessa janela.",
		unified_search_mapping_rule_cardinality: "A propriedade não pode ser incluída no mapeamento.<br/>Todas as propriedades no mapeamento devem suportar valores únicos ou diversos valores. A propriedade selecionada suporta ${0} e as propriedades no mapeamento suportam ${1}.<br/>Selecione uma propriedade diferente para incluir no mapeamento ou crie um novo mapeamento para a propriedade selecionada.",
		unified_search_mapping_rule_fixed_value: "A propriedade não pode ser incluída no mapeamento.<br/>O mapeamento já inclui uma propriedade com um valor fixo. Um mapeamento pode incluir apenas uma propriedade com um valor fixo.<br/>Selecione uma propriedade diferente para incluir no mapeamento ou crie um novo mapeamento para a propriedade selecionada.",
		unified_search_mapping_rule_child_component: "A propriedade não pode ser incluída no mapeamento.<br/>Uma propriedade com um componente filho não pode ser mapeada para outras propriedades. Se desejar poder procurar nessa propriedade, crie um novo mapeamento para a propriedade selecionada.",
		unified_search_mapping_rule_operator_intersection: "A propriedade não pode ser incluída no mapeamento.<br/>Todas as propriedades no mapeamento devem ter um ou mais operadores em comum. No entanto, a propriedade ${0} não possui nenhum operador em comum com outras propriedades no mapeamento.<br/>Se apropriado, selecione uma propriedade diferente. Se tiver que incluir a propriedade selecionada, trabalhe com seu administrador do sistema para editar os operadores que estão associados à propriedade.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Definições avançadas",
		advanced_search_options_intro: "Configurar opções de critério avançadas.",
		advanced_search_options_editable: "Editável",
		advanced_search_options_readonly: "Somente leitura",
		advanced_search_options_required: "Necessário",
		advanced_search_options_hidden: "Oculto",
		advanced_search_options_property_editable:"A propriedade é:",
		advanced_search_options_operators:"Operadores:",
		advanced_search_options_use_all:"Usar todos",
		advanced_search_options_use_selected:"Utilizar Selecionado",
		advanced_search_options_operators_filtered: "Operadores filtrados",
		// Data types in lowercase
		data_type_boolean: "boolean",
		data_type_date: "date",
		data_type_time: "hora",
		data_type_timestamp: "registro de data e hora",
		data_type_decimal: "valor decimal",
		data_type_double: "número de vírgula flutuante",
		data_type_short: "número inteiro",
		data_type_integer: "número inteiro",
		data_type_long: "número inteiro",
		data_type_string: "sequência de texto",
		data_type_string_alpha: "sequência alfabética",
		data_type_string_alphanum: "sequência alfanumérica",
		data_type_string_ext: "cadeia alfanumérica estendida",
		data_type_string_num: "sequência numérica",
		data_type_binary: "binário",
		data_type_object: "objeto",
		data_type_guid: "identificador globalmente exclusivo",
		data_type_user: "usuários",
		data_type_child_component: "componente-filho",

		/* Print Dialog */
		print_title: "Imprimir",
		print_message: "Imprimindo: ${0}",
		print_print_button: "Imprimir",
		print_clean_margins_button: "Configurar todos para 0",
		print_type: "Tipo de Impressora:",
		print_printer_server_options: "Opções de Impressão do Servidor",
		print_printer_properties: "Propriedades da Impressora",
		print_printer_fax_properties: "Propriedades de Fax",
		print_printer_name: "Nome da Impressora:",
		print_fax_recipient: "Destinatário",
		print_fax_sender: "Remetente",
		print_copies: "Cópias:",
		print_local_orientation: "Orientação",
		print_local_orientation_landscape: "Paisagem",
		print_local_orientation_portrait: "Retrato",
		print_local_margins: "Margens",
		print_local_margins_top: "Superior",
		print_local_margins_bottom: "Parte Inferior",
		print_local_margins_left: "Esquerda",
		print_local_margins_right: "Direita",
		print_printer_server: "Servidor",
		print_printer_local: "Local",
		print_property_class: "Classe:",
		print_property_routing: "Roteamento:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Nó:",
		print_property_writer: "Gravador:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Destinatário:",
		print_property_forms: "Formulários:",
		print_property_faxnotes: "Notas:",
		print_property_faxcompany: "Empresa:",
		print_property_faxnumber: "Número do Fax:",
		print_property_faxname: "Nome:",
		print_property_faxsendertelnumber: "Número do Telefone:",
		print_property_faxcoverpage: "Página de Abertura:",
		print_property_faxsubject: "Assunto:",
		print_saveoptions: "Salvar Opções de Impressão",
		print_property_bannerpage: "Usar página de banner",
		print_print_with_info_fields: "Imprimir com Campos de Informação",
		print_field_from: "From",
		print_field_to: "Até",
		print_invalid_value_class: "Os caracteres válidos são A-Z ou 0-9",
		print_invalid_value_pagedef: "Os caracteres válidos são caracteres alfabéticos ou numéricos, ou os caracteres @, # ou $",
		print_invalid_value_writer: "Os caracteres válidos são caracteres alfabéticos ou numéricos, ou os caracteres @, # ou $",
		print_invalid_value_formdef: "Os caracteres válidos são caracteres alfabéticos ou numéricos, ou os caracteres @, # ou $",
		print_invalid_value_forms: "Os caracteres válidos são caracteres alfabéticos ou numéricos, ou os caracteres @, # ou $",
		print_invalid_value_margin: "Os números válidos estão entre ${0} e ${1}",
		print_status_message: "${0} documentos foram enviados para a impressora ${1}.",

		print_applet_init_error: "O applet de impressão não pode ser iniciado.",
		print_applet_init_error_explanation: "Esse problema pode ocorrer pelas seguintes razões: <br/><br/><ul><li>O Java Runtime Environment (JRE) não está instalada em sua estação de trabalho.</li><li>O plug-in Java não está ativado em seu navegador da Web.</li><li>A versão do JRE na sua estação de trabalho não é compatível com a versão do IBM Content Navigator.</li><li>O navegador atingiu o tempo limite aguardando o início do applet de impressão.</li></ul>",
		print_applet_init_error_userResponse: "É possível concluir as etapas a seguir para resolver o problema com o JRE:<br/><br/><ol><li>Assegure-se que o JRE esteja instalado na sua área de trabalho.</li><li>Certifique-se de que o plug-in Java esteja ativado em seu navegador da web.</li><li>Assegure que a versão do JRE na sua estação de trabalho seja compatível com o IBM Content Navigator e tente novamente. Uma lista das versões suportadas é incluída no documento <i>Pré-requisitos de Hardware e Software para IBM Content Navigator</i> no site Suporte de Software IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Página de Capa",
		daeja_print_selected_documents_title: "Documentos Selecionados",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Corresponder a todos os critérios de Procura",
		match_any_criteria: "Corresponder a qualquer um dos critérios de Procura",
		include_subfolders_summary: "${0} (incluir subpastas)",
		browse_button: "Pesquisar&hellip;",
		search_for: "Procurar por:",
		object_type_documents: "Documentos",
		object_type_folders: "Pastas",
		object_type_documents_folders: "Documentos e Pastas",
		object_type_web_links: "Links da web",
		object_type_documents_folders_web_links: "Documentos, pastas e links da web",

		/* SelectSearchFolderDialog */
		search_in: "Pesquisar em:",
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
		warning_char: "w",

		// used for state icon title in Contentlist
		locked_item_icon_title: "Bloqueado por ${0}",
		checked_out_icon_title: "Retirado por ${0}",
		major_minor_version_icon_title: "Versão principal com versões secundárias",
		suspended_icon_title: "O fluxo de trabalho está suspenso",
		on_hold_icon_title: "Suspenso",
		has_notes_icon_title: "Possui notas",
		record_icon_title: "Declarado como um registro",
		compound_document_icon_title: "Documento composto",
		validateTemplate_icon_title: "O modelo Espaço de Equipe precisa de validação",
		offlineTemplate_icon_title: "O modelo Espaço de Equipe está offline",
		offlineTeamspace_icon_title: "O espaço de equipe está off-line",
		pending_delete_icon_title: "Equipe está com exclusão pendente",
		delete_error_icon_title: "O de equipe não pôde ser excluído",
		defaultTemplate_icon_title: "Modelo de espaço de equipe padrão",
		teamspace_icon_title: "Espaço de Equipe",
		teamspace_template_icon_title: "Modelo de espaço de equipe",
		has_bookmark_icon_title: "Possui um marcador",
		read_only_icon_title: "Somente leitura",
		no_results_were_found: "Nenhum resultado foi localizado.",
		folder_is_empty: "A pasta está vazia.",
		no_checked_out_items: "Você não tem quaisquer itens retirados.",
		inbasket_is_empty: "A cesta de entrada está vazia.",
		worklist_is_empty: "A lista de trabalhos está vazia.",
		tracker_milestone_completed: "Concluído",
		stepprocessor_attachments_title: "Conteúdo",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Bloquear itens",
		unlock_items: "Desbloquear itens",
		checkin_item: "Efetuar check-in do item",

		/* Help */
		learn_more: "Saiba Mais",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Abrir Espaço de Equipe",
		repository_tab_createWorkspace: "Novo Espaço de Equipe",
		repository_tab_createWorkspaceTemplate: "Modelo do Novo Espaço de Equipe",
		repository_tab_DefaultTemplate: "Padrão",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Essa tarefa copia documentos.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Você não possui privilégios de edição para o modelo de espaço de equipe selecionado.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Tem certeza de que deseja excluir o ${0} ? <br><br>Apenas os documentos arquivados em outras pastas no repositório permanecem no repositório. Qualquer documento que estiver arquivado apenas no espaço de equipe será excluído.",
		teamspaceDecommissionLabel: "Excluir:",
		teamspaceDecommissionDescription: "Excluindo o espaço irá remover essa equipe do servidor: Indique como os artefatos de equipe são manipuladas.",
		teamspaceDecommissionOptions: "Excluir opções de equipe",
		teamspaceDecommissionDeleteAll: "Exclua todos os artefatos de equipe",
		teamspaceDecommissionReFileAll: "Refile todos os artificts de equipe",
		teamspaceDecommissionReFileDestination: "Mover para:",
		teamspaceDecommissionReFileIn: "Refile Em",
		teamspaceDecommissionTaskName: "tarefa de exclusão de equipe",
		teamspaceDecommissionTaskDescription: "Esta tarefa exclui um espaço do repositório.",
		teamspaceDecommissionDeletionStarted: "O de equipe foi marcada para exclusão",
		teamspaceDecommissionDeletionConnectionFailed: "A tarefa para excluir um espaço não pôde ser executada porque não pôde se conectar ao repositório. Certifique-se de que as credenciais do administrador do repositório estão corretos.",

		teamspace_edit_properties_notsupported: "Você pode editar as propriedades de espaços apenas a partir da visualização Teamspaces.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "O de equipe está off-line e pode ser aberto apenas por proprietários da equipe",

		/* Teamspace Builder widget */
		workspace_validation_document: "Documento:",
		workspace_validation_folder: "Pasta:",
		workspace_validation_ets: "Os modelos de entrada a seguir não estão disponíveis nesse repositório e foram removidos da lista de modelos de entrada selecionados:",
		workspace_validation_classes: "As classes a seguir não estão disponíveis nesse repositório e foram removidas da lista de classes selecionadas:",
		workspace_validation_searches: "As procuras a seguir não estão disponíveis nesse repositório e foram removidas da lista de procuras selecionadas:",
		workspace_validation_docs_folders: "Os documentos e pastas a seguir não estão disponíveis nesse repositório e foram removidos da lista de itens incluídos:",
		workspace_change_template_confirmation_question: "Se você selecionar um modelo diferente, todas as suas mudanças serão perdidas. Deseja continuar?\n",
		workspace_delete_item_confirmation_question: "Deseja remover o item ${0}?\n",
		workspace_delete_role_confirmation_question: "Deseja remover a função ${0}?\n",
		workspace_delete_confirmation_question: "Se você excluir um espaço de equipe, apenas o contêiner de espaço de equipe é excluído. As pastas e documentos no espaço de equipe permanecem no repositório e é possível localizá-los ao fazer uma procura. Para excluir o conteúdo do espaço de equipe, exclua os itens no primeiro espaço de equipe e, em seguida, exclua o espaço de equipe.<br><br>Deseja excluir o espaço de equipe ${0}?",
		workspacebuilder_instance_template_name_header: "Nome do Modelo do Espaço de Equipe",
		workspacebuilder_instance_template_description_header: "Descrição",

		workspacebuilder_template_tooltip_name: "O nome do modelo não pode conter nenhum dos seguintes caracteres: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "O nome da equipe não pode conter nenhum dos seguintes caracteres: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Forneça uma descrição que permitirá que os usuários façam a seleção correta a partir da lista de modelos. Por exemplo, você pode incluir informações sobre os usuários ou o uso pretendido do modelo.",
		workspacebuilder_instance_tooltip_description: "Forneça uma descrição que permitirá que os usuários façam a distinção entre este espaço de equipe e os outros espaços de equipe.",

		workspacebuilder_template_edit_properties_pane: "Editar Modelo do Espaço de Equipe",
		workspacebuilder_instance_properties_pane: "Definir Espaço de Equipe",
		workspacebuilder_template_properties_pane: "Definir Modelo do Espaço de Equipe",

		workspacebuilder_instance_security_pane: "Configurar Segurança do Espaço de Equipe",
		workspacebuilder_template_security_pane: "Configurar Segurança do Modelo",

		workspacebuilder_layout_pane: "Selecionar Layout",
		workspacebuilder_search_templates_pane: "Selecionar Pesquisas",
		workspacebuilder_document_folders_pane: "Incluir Pastas e Documentos",
		workspacebuilder_doctypes_entryTemplates_pane: "Selecionar Classes ou Modelos de Entrada",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Selecionar Classes",
		workspacebuilder_security: "Segurança do Espaço de Equipe",

		workspacebuilder_roles_pane: "Selecionar funções",
		workspacebuilder_security: "Segurança",

		workspacebuilder_properties_templates: "Modelos disponíveis:",
		workspacebuilder_available_templates: "Pesquisas disponíveis:",
		workspacebuilder_selected_templates: "Pesquisas selecionadas:",
		workspacebuilder_templates_name: "Nome da Pesquisa",

		workspacebuilder_available_entryTemplates: "Modelos de entrada disponíveis:",
		workspacebuilder_selected_entryTemplates: "Modelos de entrada selecionados:",

		workspacebuilder_item_classes: "Classes disponíveis:",
		workspacebuilder_item_classes_selected: "Classes selecionadas:",
		workspacebuilder_properties_select_template: "Selecione um modelo a ser usado para este espaço de equipe.",
		workspacebuilder_template_properties: "Definir Modelo do Espaço de Equipe",
		workspacebuilder_instance_properties: "Definir Espaço de Equipe",
		workspacebuilder_template_introText: "Especifique os componentes comuns que você deseja incluir em cada espaço de equipe criado a partir deste modelo usando as seleções na navegação. Ao concluir, clique em <b>Concluir</b> para disponibilizar o modelo disponível para outros usuários, que podem usá-lo para criar novos espaços de.",
		workspacebuilder_instance_introText: "As equipes usam espaços para compartilhar e trabalhar com conjuntos específicos de documentos. Forneça um nome e descrição significativos para este espaço para permitir que usuários façam a distinção entre este espaço de equipe e outros. É possível customizar o espaço incluindo Procuras adicionais, classes ou modelos de entrada, documentos e pastas.",

		workspacebuilder_template_search_template_introText: "Selecione as Procuras padrão que você deseja incluir em cada de equipe é criado a partir desse modelo. Se nenhuma Procura estiver selecionada, o usuário de equipe verá todas as Procuras às quais eles têm acesso. Com as permissões apropriadas, os usuários podem compartilhar e incluir Procuras no espaço.",
		workspacebuilder_instance_search_template_introText: "Inclua Procuras que permitam que os usuários do espaço de equipe concluam tarefas de forma mais eficiente. Se nenhuma Procura for incluída, os usuários do espaço de equipe verão todas as Procuras às quais têm permissão. Os usuários também podem incluir e compartilhar Procuras no espaço de equipe com as permissões apropriadas.",

		workspacebuilder_template_roles_introText: "usuários de equipe são designados a funções. funções especificam as tarefas que os usuários têm permissão de executar. Clique nos ícones próximos a cada função para ver as tarefas permitidas. Escolha as funções que são apropriadas para o teamspace.",
		workspacebuilder_template_roles_modify_introText: "É possível modificar as permissões que estão associadas a cada função neste espaço de equipe. Deve-se notificar os membros do espaço de equipe quando suas permissões alterarem.",

		workspacebuilder_template_roles_header_name: "Nome da Função",

		workspacebuilder_template_folders_introText: "Selecione os documentos e as pastas padrão a serem incluídos em cada espaço de equipe criado a partir deste modelo. É possível incluir documentos como links ou cópias ou. Use links para apontar para documentos dos quais você não deseja diversas cópias, como políticas ou procedimentos. Crie cópias de documentos que os usuários modificarão, como modelos e formulários.",
		workspacebuilder_instance_folders_introText: "Selecione os documentos e pastas padrão a serem incluídos na equipe. É possível incluir documentos como links ou cópias ou. Use links para apontar para documentos dos quais você não deseja diversas cópias, como políticas ou procedimentos. Crie cópias de documentos que os usuários modificarão, como modelos e formulários.",

		workspacebuilder_template_roles_introText: "Especifique as funções que serão incluídas em cada espaço de equipe que for criado a partir deste modelo. Também é possível criar novas funções que poderão ser usadas quando criar outros modelos de espaço de equipe.",
		workspacebuilder_instance_users_introText: "Em uma equipe, cada usuário é designado a uma ou mais funções que especificam as tarefas que o usuário pode concluir. Inclua usuários no de equipe e designe funções aos usuários.",

		workspacebuilder_instance_navigation_pane_title: "Construtor do Espaço de Equipe",
		workspacebuilder_template_navigation_pane_title: "Construtor do Modelo do Espaço de Equipe",

		workspacebuilder_roles_roles_nopermissions: "Nenhuma permissão selecionada para a função {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Funções selecionadas:",
		workspacebuilder_roles_available_roles: "Funções disponíveis:",
		workspacebuilder_roles_privilege_header: "Permissão",
		workspacebuilder_roles_select_role: "Selecionar Função",
		workspacebuilder_roles_select_permission: "Selecionar Permissão",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Uma função chamada {0} já existe. Deve-se especificar um nome exclusivo para a função. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nome da função:",
		workspacebuilder_roles_edit_dialog_role_description: "Descrição da função:",
		workspacebuilder_roles_edit_dialog_title_new: "Nova Função",
		workspacebuilder_roles_edit_dialog_title_edit: "Editar Função",

		workspacebuilder_roles_privileges_header: "Permissões para a função {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Permissões de documento:",
		workspacebuilder_roles_priv_group_folder: "Permissões de pasta:",
		workspacebuilder_roles_priv_group_teamspace: "Permissões de espaço de equipe:",
		workspacebuilder_roles_priv_group_item: "Permissões de Documento e Pasta:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Gerenciar Permissões",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Os usuários com esta permissão podem gerenciar o acesso aos documentos e pastas no espaço de equipe. Essa permissão inclui permissão para que outros usuários excluam, editem propriedades, criem subpastas, e assim por diante.",

		workspacebuilder_roles_priv_deleteItems: "Excluir",
		workspacebuilder_roles_plbl_deleteItems: "Os usuários com esta permissão podem excluir documentos e pastas no espaço de equipe.",

		workspacebuilder_roles_priv_createItems: "Criar",
		workspacebuilder_roles_plbl_createItems: "Os usuários com esta permissão podem criar documentos e pastas no espaço de equipe.",

		workspacebuilder_roles_priv_viewItemProperties: "Visualizar propriedades",
		workspacebuilder_roles_plbl_viewItemProperties: "Os usuários com esta permissão podem visualizar as propriedades dos documentos e das pastas no espaço de equipe, incluindo as propriedades de sistema.",

		workspacebuilder_roles_priv_modifyItemProperties: "Editar propriedades",
		workspacebuilder_roles_plbl_modifyItemProperties: "Os usuários com esta permissão podem editar as propriedades de documentos e pastas no espaço de equipe.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gerenciar permissões de pasta",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "usuários com esta permissão podem gerenciar o acesso a pastas no espaço. Essa permissão inclui permissão para que outros usuários excluam pastas, editem propriedades da pasta, criem subpastas, e assim por diante.",

		workspacebuilder_roles_priv_deleteFolders: "Excluir pastas",
		workspacebuilder_roles_plbl_deleteFolders: "Os usuários com esta permissão podem excluir pastas no espaço de equipe.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Editar propriedades da pasta",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Os usuários com esta permissão podem editar as propriedades de pastas no espaço de equipe.",

		workspacebuilder_roles_priv_createSubfolders: "Criar subpastas",
		workspacebuilder_roles_plbl_createSubfolders: "Os usuários com esta permissão podem criar pastas no espaço de equipe.",

		workspacebuilder_roles_priv_fileInFolders: "Incluir em pastas",
		workspacebuilder_roles_plbl_fileInFolders: "Os usuários com esta permissão podem incluir um link de pastas no espaço de equipe para documentos.",

		workspacebuilder_roles_priv_viewFolderProperties: "Visualizar propriedades da pasta",
		workspacebuilder_roles_plbl_viewFolderProperties: "Os usuários com esta permissão podem visualizar as propriedades das pastas no espaço de equipe, que inclui as propriedades de sistema.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gerenciar permissões de documento",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "usuários com esta permissão podem gerenciar o acesso a documentos no espaço. Essa permissão inclui permissão para que outros usuários excluam documentos, propriedades do documento, e assim por diante.",

		workspacebuilder_roles_priv_deleteDocuments: "Excluir documentos",
		workspacebuilder_roles_plbl_deleteDocuments: "Os usuários com esta permissão podem excluir documentos no espaço de equipe.",

		workspacebuilder_roles_priv_promoteVersions: "Promover versões",
		workspacebuilder_roles_plbl_promoteVersions: "Os usuários com esta permissão podem designar um novo número da versão a documentos no espaço de equipe.",

		workspacebuilder_roles_priv_modifyContent: "Editar documentos",
		workspacebuilder_roles_plbl_modifyContent: "Os usuários com esta permissão podem editar o conteúdo de documentos no espaço de equipe.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Editar propriedades do documento",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Os usuários com esta permissão podem editar as propriedades de documentos no espaço de equipe.",

		workspacebuilder_roles_priv_viewContent: "Visualizar documentos",
		workspacebuilder_roles_plbl_viewContent: "Os usuários com esta permissão podem visualizar documentos no espaço de equipe.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Visualizar propriedades do documento",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Os usuários com esta permissão podem visualizar as propriedades dos documentos no espaço de equipe, incluindo as propriedades de sistema.",

		workspacebuilder_roles_priv_addNewSearches: "Incluir Procuras",
		workspacebuilder_roles_plbl_addNewSearches: "usuários com esta permissão podem incluir Procuras no de equipe. Por padrão, a Procura não fica disponível para outros usuários.",

		workspacebuilder_roles_priv_createNewSearches: "Criar procuras",
		workspacebuilder_roles_plbl_createNewSearches: "Os usuários com esta permissão podem criar novas procuras, mas não podem salvá-las. Se os usuários não tiverem essa permissão, eles não poderão incluir documentos que já estiverem no repositório no espaço de equipe.",

		workspacebuilder_roles_priv_shareSearches: "Compartilhar Procuras",
		workspacebuilder_roles_plbl_shareSearches: "Os usuários com esta permissão podem compartilhar Procuras que eles criam com outros usuários do espaço de equipe.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gerenciar classes ou modelos de entrada",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Os usuários com esta permissão podem incluir e remover classes ou modelos de entrada do espaço de equipe.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gerenciar Classes",
		workspacebuilder_roles_plbl_addRemoveClasses: "Os usuários com esta permissão podem incluir e remover classes do espaço de equipe.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gerenciar usuários do espaço de equipe",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "usuários com esta permissão podem incluir e remover usuários e grupos da equipe. Além disso, eles podem gerenciar a quais funções os usuários estão designados.",

		workspacebuilder_roles_priv_modifyRoles: "Modificar Funções",
		workspacebuilder_roles_plbl_modifyRoles: "Proprietários com essa permissão podem modificar as permissões de função do espaço de equipe. Essa permissão está disponível apenas para proprietários.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Selecionar Usuários",
		workspacebuilder_users_add_users_and_groups_button: "Incluir Usuários e Grupos...",
		workspacebuilder_users_users_or_group_header: "Usuário e Grupo",
		workspacebuilder_users_roles_header: "Funções",

		workspacebuilder_users_role_header: "Função",
		workspacebuilder_users_role_no_permissions: "Esta função não possui permissões",
		workspacebuilder_users_available_roles_label: "Funções disponíveis:",
		workspacebuilder_users_selected_users_and_groups_label: "Usuários e grupos selecionados:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "O espaço de equipe não pode ser salvo. Deve-se especificar pelo menos um proprietário para este espaço de equipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "O espaço de equipe não pode ser salvo. Todos os usuários devem ser designados com uma função.",
		// end of select users

		workspacebuilder_search_templates: "Selecionar Pesquisas",
		workspacebuilder_search_add: "Incluir Pesquisa",
		workspacebuilder_properties_workspaceName: "Nome do espaço de equipe:",
		workspacebuilder_properties_templateName: "Nome do modelo:",
		workspacebuilder_properties_workspaceDescription: "Descrição do espaço de equipe:",
		workspacebuilder_properties_templateDescription: "Descrição do modelo:",
		workspacebuilder_properties_workspaceTemplate: "Modelo selecionado:",
		workspacebuilder_properties_security: "Compartilhar modelo com:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Mover de equipe:",
		moveTeamspaceDocuments_security: "Compartilhar documento com:",
		moveTeamspaceDocuments_security_change: "Especificar segurança customizada para os itens selecionados",
		moveTeamspaceDocuments_item_type_level: "Você não pode selecionar Substituir a segurança dos itens selecionados porque a classe do item selecionado é configurado para utilizar apenas de nível de classe de segurança",
		moveTeamspaceDocuments_security_inherit: "Herdar a segurança da pasta de destino",
		moveTeamspaceDocuments_file_info_text: "É possível mover itens de uma equipe para outra equipe ou pasta.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Você não possui as permissões apropriadas para mover os itens para a pasta selecionada.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Você não possui as permissões apropriadas para mover os itens da equipe.",
		moveTeamspaceDocuments_move_mixed_items: "Você não pode substituir a segurança dos itens selecionados. Alguns dos itens não são gerenciados pelo espaço de equipe. É possível substituir apenas a segurança de itens gerenciados pelo espaço de equipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Deve-se especificar um nome para o espaço de equipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Deve-se especificar um nome para o espaço de equipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "O nome da equipe não pode conter nenhum dos seguintes caracteres: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "O nome do modelo não pode conter nenhum dos seguintes caracteres: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link para Documento",
		workspacebuilder_folders_makeDocCopy: "Copiar Documento",
		workspacebuilder_folders_newfolder: "Nova Pasta",
		workspacebuilder_folders_local_drive: "Do Diretório Local",
		workspacebuilder_folders_from_repo: "Do Repositório",
		workspacebuilder_folders_add_doc: "Incluir Documento",
		workspacebuilder_folders_grid_name: "Nome",
		workspacebuilder_folders_props: "Propriedades",
		workspacebuilder_folders_remove: "Remover",
		workspacebuilder_folders_delete: "Excluir",
		workspacebuilder_folders_adddoc_local: "Incluir Documento da Unidade Local",
		workspacebuilder_folders_adddoc_repo: "Incluir Documento a partir do Repositório",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "O nome de pasta especificado já existe. Especifique um nome de pasta diferente.",

		workspacebuilder_classes_title: "Selecionar Classes ou Modelos de Entrada",
		workspacebuilder_classes_title_cm: "Selecionar Classes",
		workspacebuilder_classes_template_introText: "Especifique se os espaços de equipe que são criados a partir deste modelo usarão classes ou modelos de entrada para incluir documentos no repositório. Se nenhuma classe estiver selecionada, os espaços de equipe verão todas as classes às quais eles têm acesso.  O usuário pode modificar a lista de classes ou modelos de entrada no espaço se eles tiverem a permissão apropriada.",
		workspacebuilder_classes_template_introText_cm: "Selecione as classes que os usuários podem usar para incluir documentos no repositório. Se nenhuma classe for selecionada, os usuários do espaço de equipe verão todas as classes às quais possuem permissão. Os usuários podem modificar a lista de classes no espaço de equipe, se tiverem as permissões apropriadas.",
		workspacebuilder_classes_instance_introText: "Selecione as classes ou os modelos de entrada que os usuários podem usar para incluir documentos no repositório. Quando nenhuma classe for selecionada, os usuários do espaço de equipe verão todas as classes às quais têm permissão. Os usuários podem modificar a lista de classes ou os modelos de entrada no espaço de equipe, se tiverem as permissões apropriadas.",
		workspacebuilder_classes_instance_introText_cm: "Selecione as classes que os usuários podem usar para incluir documentos no repositório. Quando nenhuma classe for selecionada, os usuários do espaço de equipe verão todas as classes às quais têm permissão. Os usuários podem modificar a lista de classes no espaço de equipe, se tiverem as permissões apropriadas.",
		workspacebuilder_classes_selection: "Selecionar Classes:",
		workspacebuilder_classes_list: "Classes Disponíveis:",
		workspacebuilder_classes_columns_default: "Padrão",
		workspacebuilder_classes_columns_className: "Nome da Classe",
		workspacebuilder_classes_type_classes: "Usar classes para incluir documentos",
		workspacebuilder_classes_type_classes_tooltip: "As classes incluem propriedades associadas para que documentos possam ser localizados para uso posterior.",
		workspacebuilder_classes_type_entryTemplates: "Usar modelos de entrada para incluir documentos",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Os modelos de entrada asseguram que as informações fornecidas para cada documento sejam consistentes e usem valores predefinidos.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nome do Modelo de Entrada",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Descrição",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Deve-se incluir pelo menos um modelo de entrada no espaço de equipe.",

		workspacebuilder_classes_new: "Nova Classe",
		workspacebuilder_classes_add: "Incluir Classe",
		workspacebuilder_entryTemplate_add: "Incluir Modelo de Entrada",
		workspacebuilder_add_list: "Incluir",
		workspacebuilder_makeDefault_list: "Tornar Padrão",
		workspacebuilder_removeDefault_list: "Remover Padrão",

		workspacebuilder_roles_title: "Selecionar funções",
		workspacebuilder_roles_title_modify: "Modificar Funções",

		workspacebuilder_selection_moveup: "Mover para cima",
		workspacebuilder_selection_movedown: "Mover para baixo",
		workspacebuilder_selection_remove: "Remover",
		workspacebuilder_selection_add: "Incluir",
		workspacebuilder_selection_create_new_search: "Nova Pesquisa...",
		workspacebuilder_selection_create_new_role: "Nova Função...",
		workspacebuilder_selection_make_role_available: "Disponibilizar",
		workspacebuilder_selection_make_role_available_tooltip: "Compartilha a função de seleção com outros modelos. Deve-se designar pelo menos uma permissão à função para compartilhá-la.",

		workspacebuilder_navigation_next: "Avançar",
		workspacebuilder_navigation_finish: "Concluir",
		workspacebuilder_navigation_validate: "Validar",
		workspacebuilder_navigation_previous: "Anterior",
		workspacebuilder_navigation_cancel: "Cancelar",
		workspacebuilder_navigation_customize: "Customizar",

		workspacebuilder_search_dialog_title: "Procurar",
		workspacebuilder_dialog_close: "Fechar",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilidade do modelo:",
		workspace_properties_templateState_tooltip: "Tornar o modelo indisponível para evitar que usuários criem espaços de equipe que usam este modelo.",
		workspace_properties_dialog_title: "Propriedades de Modelo",
		workspace_properties_online_radio_option_label: "Disponibilizar",
		workspace_properties_offline_radio_option_label: "Tornar Indisponível",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Deseja cancelar sem salvar suas mudanças?",
		workspacebuilder_cancel_confirmation_button: "Sim",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Quaisquer itens inválidos serão removidos do modelo e o modelo se tornará disponível para os usuários.  Deseja validar esse modelo de espaço de equipe?",
		workspacebuilder_validate_confirmation_button: "Sim",
		workspacebuilder_validate_confirmation_title: "Validar",

		/* Entry templates builder */
		entry_templates: "Gerenciador de modelo de entrada",
		no_entry_templates_were_found: "Não há modelos de entrada",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtro",

		/* Roleselector widget */
		role_selector_name: "Funções:",

		/* User Group picker widget */
		directory_label: "Diretório:",
		scope_label: "Procurar por:",
		name_starts_with_label: "O nome começa com",
		name_contains_label: "O nome contém",
		display_name_contains_label: "Nome de exibição contém",
		starts_with_label: "Começa com:",
		available_label: "Disponível:",
		available_heading: "Disponível",
		selected_label: "Selecionado:",
		selected_heading: "Selecionado",
		available_repositories_label: "Repositórios Disponíveis",
		selected_repositories_label: "Repositórios Selecionados",
		default_repository: "Repositório padrão:",
		default_repository_placeholder: "Selecione um repositório",
		default_role_placeholder: "Selecionar uma atribuição",
		menu_label_placeholder: "Selecione ou insira um rótulo",
		default_repository_hover: "Especifique o repositório que será selecionado por padrão quando os usuários efetuarem login no Web client a partir desta área de trabalho.<br><br><b>Importante:</b> Deve-se incluir repositórios na área de trabalho da lista de repositórios antes de especificar o repositório padrão.",
		default_repository_workflow_hover: "<b>Lembrete:</b> Só é possível configurar os espaços do aplicativo para os repositórios que estão configurados para esta área de trabalho.",
		remove_label: "Remover",
		users_label: "Usuários",
		groups_label: "Grupos",
		user_or_group_name_label: "Nome do usuário ou do grupo:",
		user_or_group_name_hover: "Insira o nome de um usuário ou grupo que seja válido no repositório.  O nome não é validado.",
		user: "Usuário",
		group: "Grupo",
		name: "Nome:",
		displayName: "Nome de exibição",
		display_name: "Nome de exibição:",
		shortName: "Nome Abreviado:",
		distinguishedName: "Nome Distinto:",
		search_tooltip: "Procurar",
		add_tooltip: "Incluir",
		add_selected_tooltip: "Incluir na lista selecionada",
		remove_tooltip: "Remover",
		remove_selected_tooltip: "Remover da lista selecionada",
		add_to_selected_tooltip: "Incluir",
		remove_from_selected_tooltip: "Remover",
		move_up_selected_tooltip: "Mover para cima",
		move_down_selected_tooltip: "Mover para baixo",
		advanced_search_options_tooltip: "Configurações avançadas",
		move_right_selected_tooltip: "Mover para dentro do submenu",
		move_left_selected_tooltip: "Mover para fora do submenu",
		add_separator: "Incluir Separador",
		menu_item_label: "Rótulo do item de menu:",
		add_menu_label: "Incluir Submenu",
		menu_label: "Rótulo do submenu:",
		menu_label_info: "<b>Importante:</b> Deve-se incluir ao menos um item de menu neste submenu antes de salvar o menu.",
		menu_dropdown_label: "Rótulo do botão da lista suspensa:",
		menu_dropdown_label_info: "<b>Importante:</b> Deve-se incluir ao menos um item de menu para este botão de lista suspensa para que você possa salvar esta barra de ferramentas.",
		no_item_found: "Nenhum resultado foi localizado.",
		me: "Eu",
		anyone: "Qualquer um",
		specific_users: "Usuários específicos",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "A procura retornou mais de {0} resultados. Altere seus critérios para limitar sua procura.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Os resultados da procura contêm itens que já foram selecionados. Esses itens não serão exibidos nos resultados da procura.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Mais de {0} resultados foram retornados. Use o filtro para limitar os resultados",

		user_already_selected: "O usuário especificado já está selecionado.  Especifique um usuário diferente.",
		group_already_selected: "O grupo especificado já está selecionado.  Especifique um grupo diferente.",
		user_cannot_select_self: "Não é possível incluir a si mesmo. Especifique um usuário diferente.",

		/* Select User Group dialog */
		select_user_group_add_label: "Incluir",
		select_user_group_cancel_label: "Cancelar",
		add_users_groups_label: "Incluir Usuários e Grupos",
		add_user_group_label: "Incluir Usuário e Grupo",
		add_users_label: "Incluir Usuários",
		add_user_label: "Incluir Usuário",
		add_label: "Incluir:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Os documentos a seguir têm alterações não salvas:",
		viewer_confirm_to_proceed: "Deseja continuar e perder as mudanças?",
		viewer_warn_has_changes: "Suas mudanças não salvas serão descartadas.",
		viewer_warn_is_printing: "A impressão que está em andamento pode não ser concluída.",
		viewer_warn_confirm_exit: "Deseja sair?",
		viewer_prompt_save_changes: "O seguinte documento possui mudanças de anotações não salvas que serão perdidas:<br>${0}<br><br>Deseja salvar as mudanças?",
		viewer_prompt_mergesplit_changes: "Os documentos a seguir têm alterações não salvas:<br>${0}<br><br>Deseja continuar e perder as mudanças?",
		viewer_prompt_mergesplit_tab_changes: "O documento seguinte tem alterações não salvas:<br>${0}<br><br>Deseja continuar e perder as mudanças?",
		viewer_new_item_name: "Novo Documento",
		viewer_top_frame: "Quadro superior:",
		viewer_bottom_frame: "Quadro inferior:",
		viewer_left_frame: "Quadro esquerdo:",
		viewer_right_frame: "Quadro direito:",
		viewer_viewer_frame: "Quadro do visualizador:",
		viewer_properties_frame: "Quadro de propriedades:",
		viewer_comment_frame: "Quadro de comentário:",
		viewer_mergesplit_on: "Visualizar",
		viewer_mergesplit_off: "Mesclar e Dividir",
		viewer_mergesplit_context_menu_move: "Mover",
		viewer_mergesplit_context_menu_rename: "Renomear",
		viewer_mergesplit_context_menu_delete: "Excluir",
		//move to new window
		viewer_move_to_new_window:"Mover para nova janela",
		viewer_continue:"Descartar Alterações",
		viewer_return_to_original_window:"Retornar à janela original",
		viewer_switch_window:"Alternar janela",
		viewer_prompt_lost_changes:"O documento ${0} está atualmente aberto em outra janela. Esse documento possui mudanças não salvas.<br><br>Deseja alternar para essa janela para salvar as mudanças ou deseja descartar as mudanças e abri-lo nesta janela?",
		viewer_mergesplit_fallback_info: "Será possível concluir apenas a ação Mesclar e Dividir em documentos que estiverem no mesmo repositório.",
		viewer_tabbed_layout: "Visualizar como Guias",
		viewer_tabbed_layout_highcontrast: "Guias",
		viewer_split_vertical_layout: "Dividir áreas de janela superior e inferior",
		viewer_split_vertical_layout_highcontrast: "Parte superior e inferior",
		viewer_split_horizontal_layout: "Dividir áreas de janela esquerda e direita",
		viewer_split_horizontal_layout_highcontrast: "Esquerda e direita",
		viewer_add_vertical_layout: "Nova guia na parte inferior",
		viewer_add_vertical_layout_highcontrast: "Guia na parte inferior",
		viewer_add_horizontal_layout: "Nova guia à direita",
		viewer_add_horizontal_layout_highcontrast: "Guia à direita",
		viewer_add_horizontal_layout_rtl: "Nova guia à esquerda",
		viewer_add_horizontal_layout_rtl_highcontrast: "Guia à esquerda",
		viewer_split_properties_layout: "Visualizar Propriedades",
		viewer_split_comment_layout: "Visualizar comentários",
		viewer_split_notelog_layout: "Visualizar notelog",
		viewer_window_title: "Visualizador ${0}",
		viewer_next_hit: "Visualizar o próximo documento na lista",
		viewer_prev_hit: "Visualizar o documento anterior na lista",
		viewer_confrim_more_search_results: "Os resultados da Procura não contêm mais documentos visíveis.  Deseja recuperar mais resultados da Procura ?",
		viewer_confirm_get_next_page: "A lista de resultados não contém mais itens visualizáveis.  Deseja recuperar mais resultados da Procura ?",
		viewer_confirm_get_next_item: "A lista de resultados contém mais itens visualizáveis.  Deseja visualizar o próximo item?",
		viewer_fn_annotation_tooltip: " Criado por: ${0}, criado em: ${1}",
		viewer_box_note_limitation: "É possível abrir e visualizar o Box Notes somente em uma janela separada.",
		viewer_click_to_open_box_note: "Clique aqui para abrir o Box Note.",
		viewer_box_view_expiring: "A quantia máxima de tempo que é possível visualizar seu documento Box é de 60 minutos. Sua sessão vai expirar em ${0} minutos. Se você desejar continuar trabalhando no documento, deverá recarregá-lo agora. Deseja recarregar o documento?",
		viewer_add_dialog_save_as_type: "Salvar como tipo:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflito de check-out",
		viewer_checkout_conflict: "O documento foi retirado por outro usuário.",
		viewer_checkout_confirm: "Uma versão mais recente do documento está disponível. Deseja continuar a verificar o documento ou recarregar o visualizador com a versão mais recente? Se você escolher recarregar o visualizador, todas as mudanças não salvas serão perdidas.",
		viewer_checkout_continue: "Continue com o check-out",
		viewer_checkout_reload: "Recarregar",
		viewer_status_building: "Construindo documento...",
		viewer_status_adding: "Incluindo documento...",
		viewer_status_checking_in: "Verificando no documento...",

		/* Class Selector Widget */
		include_subclasses_label: "Incluir subclasses",
		include_subclasses_label2: "Também procurar em subclasses",
		include_subclasses_note: "(Incluindo subclasses)",
		available_classes_col_header: "Classes Disponíveis",
		single_class_label: "Pesquisar em uma única classe",
		multiple_classes_label: "Pesquisar em diversas classes",
		multiple_classes_hover_help: "Selecione essa opção para procurar em mais de uma classe. As classes podem ser classes-pai ou subclasses. Se você selecionar esta opção, verá apenas as propriedades e os valores que são comuns para as classes selecionadas.",
		selected_classes_col_header: "Classes Selecionadas",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Incluindo subpastas)",
		favorites_pseudo_node: "\\Favoritos\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Deve-se selecionar uma pasta no repositório na qual incluir o documento.",
		no_permission_add_folder: "Você não possui as permissões apropriadas para incluir pastas nesta pasta.",
		no_permission_add_document: "Você não possui as permissões apropriadas para incluir documentos nesta pasta.",
		document_already_in_folder: "O documento já está nesta pasta.",
		cant_move_folder_onto_parent: "A pasta já está nesta pasta.",
		cant_move_folder_onto_self: "Não é possível mover uma pasta para ela mesma ou para suas subpastas.",

		/* Workflow Widgets */
		process_application_space: "Espaço do Aplicativo de Processo",
		process_role: "Função do Processo",
		process_inbasket: "Cesta de Entrada do Processo",
		process_worklist: "Lista de Trabalho",
		process_step_processor: "Processar Item de Trabalho",
		process_tracker: "Item de Trabalho de Controle",
		process_info_subject: "Subject",
		process_info_stepname: "Etapa",
		process_info_is_locked: "Bloqueado",
		process_info_no_access: "Sem acesso",
		process_info_received_on: "Received on",
		process_info_overdue: "Vencido",
		process_info_reminder_sent: "Lembrete enviado",
		process_info_locked_by_user: "Bloqueado por",
		process_work_object_number: "Número do objeto de trabalho",
		process_deadline: "Data de vencimento:",
		process_launchedby: "Iniciado por:",
		process_receivedon: "Recebido em:",
		process_step: "Etapa:",
		process_properties: "Propriedades",
		process_attachments: "Anexos",
		process_attachments_select: "Selecionar um Anexo",
		process_finish_button_label: "Parar o Rastreamento",
		process_tracker_history: "Histórico",
		process_tracker_milestones: "Marcos",
		process_tracker_milestone: "Marco",
		process_tracker_milestone_level: "Nível",
		process_tracker_milestones_empty: "Não há marcos a serem exibidos.",
		process_tracker_level_selector_label: "Mostrar níveis de marco até:",
		process_tracker_map_selector_label: "Filtrar por mapa:",
		process_tracker_message: "Mensagem",
		process_tracker_datereached: "Data atingida",
		process_tracker_stepname: "Etapa",
		process_tracker_cycle: "Ciclo",
		process_tracker_review_cycle: "Ciclo de revisão",
		process_tracker_participant: "Participante",
		process_tracker_completed: "Concluído",
		process_tracker_response: "Resposta",
		process_tracker_comments: "Comentários",
		process_tracker_delete_confirmation: "Deseja parar o rastreamento deste fluxo de trabalho: ${0}?",
		process_tracker_history_allmaps: "Todos os mapas",
		process_tracker_history_workflow: "Fluxo de trabalho",
		process_tracker_history_terminate: "Encerramento",
		process_tracker_history_malfunction: "Mau Funcionamento",
		process_filter_label: "Filtro",
		process_no_filter_summary: "Sem filtros aplicados",
		process_filter_summary: "${0} aplicado",
		process_filter_reset_tooltip: "A reconfiguração limpa o filtro e atualiza a cesta de entrada.",
		process_attachments_add_folder: "Incluir Pasta",
		process_attachments_add_doc: "Incluir Documento",
		process_complete_button_label: "Concluído",
		process_save_button_label: "Salvar",
		process_launch_button_label: "Ativar fluxo de trabalho",
		process_open_button_label: "Abrir",
		process_movetoinbox_button_label: "Mover para Cesta de Entrada",
		process_return_button_label: "Retornar",
		process_return_to_sender_tooltip: "Retornar o item de trabalho para a cesta de entrada de origem",
		process_move_to_inbasket_tooltip: "Mover o item de trabalho para a cesta de entrada pessoal",
		process_reassign_tooltip: "Designar novamente o item de trabalho para outro proprietário",
		process_reassign_button_label: "Redesignar",
		process_preferences_button_label: "Preferências",
		process_manageroles_button_label: "Gerenciar Funções",
		process_manageroles_no_members: "Não há membros.",
		process_responses_button_label: "Mais Respostas",
		process_morecustomaction_button_label: "Mais Ações",
		process_show_instructions: "Visualizar Instruções",
		process_hide_instructions: "Ocultar Instruções",
		process_remove_attachment: "Remover",
		process_close_window: "O item de trabalho foi processado.",
		process_delegate_flag: "Requerer que o proprietário atual aprove o item de trabalho antes de roteá-lo para a próxima etapa no fluxo de trabalho.",
		process_paticipant_voting: "Número de participantes necessários para aprovação por votação:",
		process_get_next_label: "Obter próximo item de trabalho",
		process_no_more_items: "Não há mais itens na cesta de entrada para processar.",
		process_workflow_name: "Nome do Fluxo de Trabalho:",
		process_pattern_process_name: "Revisar para ${0}",
		process_instuctions: "Instruções para revisores:",
		process_pattern_deadline: "Data de vencimento:",
		process_reviewers: "Revisores:",
		process_approvals_required: "Aprovações necessárias:",
		process_on_reject: "Se o item de trabalho for rejeitado:",
		process_return_to_originator: "Retornar para mim",
		process_return_to_previous_reviewer: "Retornar para o revisor anterior",
		process_additional_settings: "Configurações adicionais:",
		process_allow_reassign: "Permitir que revisores designem novamente essa revisão",
		process_complete_notification: "Notificar-me quando a revisão estiver concluída.",
		process_workflow_name_hover_help: "O nome que você especificar para o item de trabalho deve ser fácil para os revisores distinguirem entre esse item de trabalho e outros itens de trabalho em sua cesta de entrada.",
		process_approvals_required_hover_help: "Se o item de trabalho for revisado por diversas pessoas simultaneamente, será possível especificar quantas aprovações serão necessárias para que o item de trabalho seja concluído com sucesso.",
		process_approval_options: "Opções de Aprovação",
		process_all: "Todos",
		process_at_least: "Pelo menos",
		process_at_least_by_count: "Pelo menos ${0} revisores",
		process_at_least_by_percentage: "Pelo menos ${0}% de revisores",
		process_comments: "Comentários:",
		process_review_step_comments_hover_help: "Se rejeitar o item de trabalho, você deverá fornecer informações sobre o porquê ele foi rejeitado. Essas informações permitem que o originador do item de trabalho ou o revisor anterior resolva os seus problemas.",
		process_rework_step_comments_hover_help: "Deve-se fornecer informações sobre como abordar os comentários. Se você discordar dos comentários, forneça a lógica para sua decisão.",
		process_rejection_reason: "Razão para a rejeição:",
		process_summary: "Resumo",
		process_sequential_review: "Revisão sequencial",
		process_sequential_review_description: "O item de trabalho será revisado por cada revisor ordenadamente.",
		process_parallel_review: "Revisão paralela",
		process_parallel_review_description: "O item de trabalho será revisado por todos os revisores ao mesmo tempo.",
		process_parallel_approvals_required_error: "O número de aprovações necessárias é muito alto. Apenas ${0} revisores estão especificados.",
		process_parallel_invalid_required_approvals_count: "O valor não é válido. O valor deve ser ${0}.",
		process_subject_prompt: "Inserir o Assunto",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Item de Trabalho:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Visualizar propriedades",
		view_permissions_level: "Visualizar Permissões",
		view_content_level: "Visualizar documento",
		link_level: "Link",
		modify_properties_level: "Editar propriedades",
		modify_content_level: "Editar documento",
		minor_version_level: "Editar versão secundária",
		major_version_level: "Editar versão principal",
		create_instance_level: "Criar ocorrência",
		delete_document_level: "Excluir documento",
		delete_item_level: "Excluir item",
		modify_document_permissions_level: "Gerenciar Permissões",
		modify_folder_permissions_level: "Gerenciar Permissões",
		modify_owner_level: "Modificar proprietário",
		delete_folder_level: "Excluir pasta",
		file_in_folder_level: "Incluir em pastas",
		create_subfolder_level: "Criar subpastas",
		link_item_level: "Anotar documento, Incluir na pasta", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Somente documento: incluir uma anotação no documento ou remover uma anotação do documento</li><li>Somente pasta: incluir itens na pasta ou remover itens da pasta</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Excluir",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Proprietário",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Leitor",
		/* previously \"Read only\" */
		no_access_privilege: "Sem acesso",
		share_with_label: "Compartilhar com:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Apenas eu",
		public_label: "Todos",
		members_label: "Usuários e grupos específicos",
		select_members_label: "Selecionar...",
		select_user_group_label: "Selecionar Usuários...",
		select_users_groups_label: "Selecione Usuários e Grupos...",
		select_user_label: "Selecione Usuário...",
		propagation_label: "Propagação:",
		access_label: "Permissões:",
		add_permission_add_label: "Incluir",
		security_policy_label: "Política de segurança:",
		includes_inherited_access: "Inclui acesso herdado",
		customize_access_for_label: "Customizar Acesso para:",
		customize: "Customizar",
		direct: "Este Item",
		singleLevelInheritance: "Um Nível",
		infiniteLevelInheritance: "Todos os Níveis",
		inherited: "Herdado",
		direct_hover_help: "As configurações de segurança se aplicam ao item selecionado",
		singleLevelInheritance_hover_help: "Estas permissões se aplicam a esse item e aos filhos imediatos que estão configurados para herdar a segurança desse item.",
		infiniteLevelInheritance_hover_help: "Estas permissões se aplicam a esse item e a todos os descendentes que estão configurados para herdar a segurança desse item.",
		inherited_hover_help: "Estas permissões são herdadas do pai.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Estas permissões para ${0} se aplicam a esse item e aos filhos imediatos que estão configurados para herdar a segurança desse item.",
		infiniteLevelInheritance_member_hover_help: "Estas permissões para ${0} se aplicam a esse item e a todos os descendentes que estão configurados para herdar a segurança desse item.",
		inherited_member_hover_help: "Estas permissões para ${0} são herdadas do pai.",
		partial_hover_help: "As configurações de segurança de item foram alteradas por um usuário",
		allow: "Permitir",
		deny: "Negar",
		basic: "Básico",
		advanced: "Avançado",
		permission_type: "Configurar acesso para:",
		share_with_hover_help: "No momento, o item é compartilhado com os seguintes usuários e grupos.",
		direct_security_policy_hover_help: "As configurações desta política de segurança permitem alterar a segurança deste item.",
		security_policy_hover_help: "A segurança deste item é somente leitura porque as configurações desta política de segurança impedem que altere a segurança deste item.",
		security_remove: "Nenhuma permissão",
		pseudo_group_label: "Contas de Alias",
		marking_hover_help: "A segurança deste item é controlada por um conjunto de marcações, que pode afetar a segurança do item.",
		note_label: "Importante:",
		marking_text: "Este item está marcado como: ${0}. O item pode ter restrições de segurança adicionais.",
		authenticated_users: "Usuários autenticados",
		realm_users: "Usuários de ${0}",
		denyAll: "Negar tudo",
		allowAll: "Permitir Tudo",
		remove_direct_text: "Quando as mudanças forem salvas, as permissões para esse membro serão removidas do item.",
		remove_single_inheritance_text: "Quando as mudanças forem salvas, as permissões para esse membro serão removidas do item e <br>dos filhos imediatos que estão configurados para herdar a segurança do item.<p>Deseja continuar?",
		remove_infinite_inheritance_text: "Quando as mudanças forem salvas, as permissões para esse membro serão removidas do item e <br>de todos os descendentes que estão configurados para herdar a segurança do item.<p>Deseja continuar?",
		remove_inheritance_text: "Quando as mudanças forem salvas, as permissões para esse membro serão removidas do item e <br>de todos os descendentes que estão configurados para herdar a segurança do item. Somente as permissões que <br>forem herdadas por esse item permanecerão.<p>Deseja continuar?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Remover estas permissões para ${0}",

		security_proxy_text: "A segurança deste item é somente leitura.",
		security_proxy_declared_text: "A segurança deste item é somente leitura porque ele está definido por um proxy de segurança.",
		security_proxy_hover_help: "A segurança deste item é controlada pela segurança que está configurada em outro objeto no repositório.",
		add_permissions_label: "Incluir permissões",
		permission_propagation_direct: "Somente esta pasta",
		permission_propagation_onelevel: "Esta pasta e um nível abaixo",
		permission_propagation_alllevels: "Esta pasta e todos os níveis abaixo",
		document_propagation_label: "Configurar acesso para:",
		document_propagation_FOLDER: "Pasta",
		document_propagation_DOCUMENT: "Documento",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Fonte de autenticação:",

		/* Versions Widget */
		object_versions_selector_label: "Versões:",
		object_versions_label: "Versões",
		object_type_document_label: "Documento:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Pastas arquivadas",
		folders_filed_in_folder_col_hdr: "Pasta",
		folders_filed_in_path_col_hdr: "Caminho",
		folders_filed_in_containment_name_col_hdr: "Nome da Restrição",
		folders_filed_in_creator_col_hdr: "Criado por",
		folders_filed_in_date_created_col_hdr: "Criado em",

		/* Parent Documents */
		properties_parent_documents_label: "Documentos-pai",

		/* Select object dialog */
		select_object_title: "Selecionar item",
		select_object_breadCrumb_version_prefix: "Versões para: ",
		show_versions_label: "Mostrar Versões",
		use_current_version_label: "Usar Versão Atual",
		use_released_version_label: "Usar Versão Liberada",

		/* Select content class dialog */
		select_class: "Selecionar classe",
		/* Select Search dialog */
		select_search: "Selecionar Pesquisa",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Visualizar Link",
		show_hyperlink_intro: "É possível copiar e colar o link em emails, bate-papos e páginas da web. Se houver diversas versões do item, especifique a qual versão você deseja vincular-se.",
		show_hyperlink_intro_no_version_select: "É possível copiar e colar o link em emails, bate-papos e páginas da web.",
		show_text_label: "Versão:",
		released_button_label: "Liberado",
		current_button_label: "Atual",
		select_button_label: "Versão Específica",
		show_hyperlink_no_released_version_msg: "Não existe nenhuma versão liberada deste documento.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Ativar fluxo de trabalho",
		edit_workflow_title: "Propriedades do Item de Trabalho",
		start_workflow_intro: "Ative um fluxo de trabalho para processar os itens selecionados. Se desejar designar os itens de trabalho a um usuário específico, especifique um proprietário.",
		edit_workflow_intro: "É possível editar as propriedades dos itens de trabalho selecionados. Se desejar redesignar o item de trabalho a outro usuário, especifique um proprietário.",
		workflow_field_label: "Fluxo de Trabalho",
		priority_field_label: "Prioridade:",
		owner_field_label: "Proprietário:",
		start_button_label: "Início",
		save_button_label: "Salvar",
		owner_value_hint: "Insira uma sequência alfanumérica com no máximo 32 caracteres. A sequência pode conter apenas espaços ou os caracteres a seguir: a-z, A-Z, 0-9, e ` . , : ; ? \\ \" / – _ &amp; +% * = < > () | ! @ # $^",

		properties_content_elements_label: "Elementos de conteúdo",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "O valor não é válido. O valor pode conter apenas espaços ou os seguintes caracteres: a-z, A-Z, 0-9 e ` . , : ; ? \\ \" / – _ &amp; +% * = < > () | ! @ # $^",
		priority_value_hint: "Insira um valor de 1 a 32000 para indicar a importância do item de trabalho.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "O valor não é válido. A prioridade deve ser um valor de 1 a 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "O nome do fluxo de trabalho não existe.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Suspender do fluxo de trabalho",
		suspend_workitems_intro: "Ao suspender um item de trabalho a partir do fluxo de trabalho, o item de trabalho não poderá ser processado até que seja continuado",
		suspend_workitems_options_label: "Suspender os itens de trabalho selecionados:",
		suspend_until_resume_label: "Até que sejam retomados manualmente",
		suspend_until_date_label: "Até",
		suspend_for_duration_label: "De",
		suspend_for_duration_hours: "Horas",
		suspend_for_duration_days: "Dias",
		suspend_for_duration_weeks: "Semanas",
		suspend_for_duration_months: "Meses",
		suspend_for_duration_years: "Anos",
		suspend_button_label: "Suspender",
		suspend_duration_value_hint: "Insira um valor no intervalo de 1 a 99 para a duração.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "O valor não é válido. O valor deve estar no intervalo de 1 a 99.",

		/* Remove from workflow */
		remove_workflow_title: "Remover do Fluxo de Trabalho",
		remove_workflow_confirmation: "Deseja remover os itens selecionados do fluxo de trabalho?<br>${0} itens foram selecionados.",
		remove_workflow_button_label: "Remover",

		/* Unfile dialog */
		unfile_dialog_title: "Remover da Pasta",
		unfile_dialog_remove_from_folder_label: "Remover de:",
		unfile_dialog_info_text: "Você pode remover itens das pastas. No entanto, a remoção de um item de todas as pastas não remove o item do repositório. Ainda é possível recuperar o item executando uma procura. Apenas as pastas para as quais você possui privilégios são mostradas nesta lista.",
		unfile_dialog_select_all: "Selecionar Todos",
		unfile_dialog_deselect_all: "Limpar Tudo",
		unfile_dialog_remove_button_label: "Remover",
		unfile_dialog_select_folder_col_hdr: "Selecionar pasta",
		unfile_dialog_folder_col_hdr: "Pasta",
		unfile_dialog_path_col_hdr: "Caminho",
		unfile_dialog_not_filed_msg: "Este item não está em nenhuma das pastas.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Você não possui as permissões apropriadas para remover este item de nenhuma das pastas nas quais este item está.",
		unfile_dialog_folder_not_selectable_tooltip: "Você não possui as permissões apropriadas para remover este item desta pasta.",
		unfile_multi_prompt: "Deseja remover os itens selecionados da pasta de ${0}?",
		unfile_large_number_items_confirmation_question: "Você selecionou ${0} itens para serem removidos da pasta ${1}.<br/>A remoção de um grande número de itens de uma pasta pode demorar muito.<br/>Deseja continuar?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Abrir",
		move_to_folder_title: "Mover para a Pasta",
		move_to_folder_button_caption: "Mover",
		move_to_folder_label: "Mover para:",
		add_to_folder_title: "Incluir na pasta",
		add_to_folder_button_caption: "Incluir",
		add_to_folder_label: "Incluir em:",
		copy_to_folder_title: "Copiar na pasta",
		copy_to_folder_button_caption: "Copiar",
		copy_to_folder_label: "Copiar em:",
		copy_to_folder_delete_label: "Após a cópia ser concluída, exclua os itens selecionados na Caixa.",
		move_from_folder_label: "Mover de:",
		move_file_info_text: "É possível mover itens de uma pasta para outra.",
		move_folder_info_text: "É possível mover pastas de uma pasta-pai para outra.",
		add_doc_to_folder_info_text: "É possível incluir itens em uma ou mais pastas. Se um item já estiver em uma pasta, ele permanecerá nessa pasta e será incluído em quaisquer pastas adicionais que você especificar.",
		copy_doc_to_folder_info_text: "É possível copiar itens em uma pasta.",
		box_copy: "Cópia do Box",
		box_copy__button_caption: "Copiar",
		box_copy_to_info_text: "Selecione o repositório e a pasta na qual você deseja copiar os seus itens selecionados do Box.",
		box_copy_from_info_text: "Selecione o repositório e a pasta na qual você deseja copiar os seus itens selecionados do Box.",
		box_copy_version_info_text: "Para incluir um novo documento, selecione o repositório e a pasta. Para efetuar check-in de uma nova versão, selecione o repositório e o documento.",
		admin_box_copy: "Cópia do Box",
		admin_box_copy_hover: "Essa opção permite aos usuários copiar documentos para o Box.",

		no_permission_to_copy_version_msg: "Não é possível copiar o documento da Caixa como uma nova versão do documento selecionado. Você não possui as permissões apropriadas para editar o documento selecionado ou o documento selecionado foi retirado por outra pessoa.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Você não possui as permissões apropriadas para remover este item de nenhuma das pastas nas quais este item está.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Você não possui as permissões apropriadas para remover este item desta pasta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Este item não pode ser movido porque não está arquivado em nenhuma pasta. Escolha outro item.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Ativar fluxo de trabalho",
		subscriptions_dialog_available_items_label: "Itens disponíveis:",
		subscriptions_dialog_info_text: "Especifique qual fluxo de trabalho ativar.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nome",
		subscriptions_dialog_desc_col_hdr: "Descrição",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gerenciar Funções",
		manageroles_dialog_info_text: "É possível modificar a lista de usuários de cada função que estiver associada a esse espaço do aplicativo de processo.",
		manageroles_dialog_members_label: "Membros",
		manageroles_dialog_roles_label: "Funções",
		manageroles_dialog_add_button_label: "Incluir Usuários e Grupos",
		manageroles_dialog_remove_button_label: "Remover",
		manageroles_dialog_save_button_label: "Salvar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Nenhum fluxo de trabalho está associado a este item.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferências do Fluxo de Trabalho",
		workflow_pref_dialog_info_text: "Especifique os eventos de fluxo de trabalho para os quais deseja receber notificações por email. Também é possível ativar a opção para rotear seu trabalho para outra pessoa selecionando um usuário para o qual delegar o trabalho.",

		workflow_pref_general: "Gerais",
		workflow_pref_email_address: "Endereço de e-mail",
		workflow_pref_email_address_hover: "Especifique o endereço de e-mail onde deseja receber notificações de fluxo de trabalho.",
		workflow_pref_preferred_locale: "Idioma",
		workflow_pref_preferred_locale_hover: "Especifica o idioma no qual as notificações por email são exibidas.",

		workflow_pref_work_item_notice: "Notificações do Item de Trabalho",
		workflow_pref_step_new_assignment: "Um novo item de trabalho é designado para mim",
		workflow_pref_step_new_assignment_hover: "Notifique-me quando eu receber um novo item de trabalho.",
		workflow_pref_step_expired_deadline: "O prazo final do item de trabalho foi excedido",
		workflow_pref_step_expired_deadline_hover: "Notifique-me quando eu perder um prazo final do item de trabalho.",
		workflow_pref_step_reminders: "Próximo de um prazo final do item de trabalho",
		workflow_pref_step_reminders_hover: "Lembre-me de um item de trabalho quando ele está próximo do prazo final.",

		workflow_pref_originator_notice: "Notificações de Originador",
		workflow_pref_milestone_reached: "O marco é atingido",
		workflow_pref_milestone_reached_hover: "Notifique-me quando um marco for atingido em um fluxo de trabalho que é iniciado.",

		workflow_pref_tracker_notice: "Notificações do Rastreador de Fluxo de Trabalho",
		workflow_pref_tracker_new_assignment: "Um novo item do rastreador é designado para mim",
		workflow_pref_tracker_new_assignment_hover: "Notifique-me quando um fluxo de trabalho que estou rastreando for ativado.",
		workflow_pref_tracker_deadline_reminders: "Perto do prazo final do fluxo de trabalho",
		workflow_pref_tracker_deadline_reminders_hover: "Lembre-me sobre um fluxo de trabalho quando ele está perto do prazo final.",
		workflow_pref_tracker_deadline_expired: "O prazo final do fluxo de trabalho foi excedido",
		workflow_pref_tracker_deadline_expired_hover: "Notifique-me quando o prazo final de um fluxo de trabalho for excedido.",
		workflow_pref_tracker_exception: "Ocorreu um erro de fluxo de trabalho",
		workflow_pref_tracker_exception_hover: "Notifique-me quando ocorrer um erro ou uma exceção do fluxo de trabalho.",
		workflow_pref_tracker_expired_deadline: "O prazo final da etapa passou",
		workflow_pref_tracker_expired_deadline_hover: "Notifique-me quando o prazo final da etapa tiver passado em um fluxo de trabalho que estou rastreando.",
		workflow_pref_tracker_milestone_reached: "O marco é atingido",
		workflow_pref_tracker_milestone_reached_hover: "Notifique-me quando um marco for atingido em um fluxo de trabalho que eu estou rastreando.",

		workflow_pref_out_notice: "Ausente do escritório",
		workflow_pref_proxy_user: "Delegar trabalho a",
		workflow_pref_proxy_user_hover: "Use esta opção para rotear automaticamente seu trabalho para outro usuário, por exemplo, quando você está fora do escritório ou em férias.",
		workflow_pref_workflow: "Fluxo de trabalho",
		workflow_pref_on: "Em",
		workflow_pref_off: "Desligado",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Ativar fluxo de trabalho",
		transfered_workflows_dialog_info_text: "Selecione um fluxo de trabalho para ativar.",
		transfered_workflows_dialog_available_items_label: "Itens disponíveis:",
		transfered_workflows_dialog_select_button_label: "Ativar",
		transfered_workflows_dialog_name_col_hdr: "Nome",
		transfered_workflows_dialog_no_item_found: "Nenhum fluxo de trabalho transferido foi localizado.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transferir fluxo de trabalho",
		transfer_workflow_dialog_info_text: "Selecione um fluxo de a ser transferido para o sistema de fluxo de trabalho.",
		transfer_workflow_dialog_use: "Usar este nome de fluxo de trabalho",
		transfer_workflow_dialog_use_another: "Usar outro nome de fluxo de trabalho",
		transfer_workflow_dialog_in_use: "O nome do fluxo de trabalho é: ",
		transfer_workflow_dialog_transfer_button_label: "Transferir",
		transfer_workflow_dialog_no_items_found: "Nenhum fluxo de trabalho transferido foi localizado.",
		transfer_workflow_dialog_use_hover: "Especifique o nome do fluxo de trabalho atual a partir da definição de fluxo de trabalho.",
		transfer_workflow_dialog_another_hover: "Especifique um nome de fluxo de trabalho diferente ou reutilize um existente transferido.",

		/*Search In control*/
		search_in_title: "Pesquisar em:",
		search_in_teamspaces: "Espaços de equipe",
		search_in_repositories: "Repositórios",
		search_in_thisteamspaces: "Este espaço de equipe",

		ajaxViewer_save: "Salvar Anotações",
		ajaxViewer_print: "Visualizar Impressão",
		ajaxViewer_firstPage: "Primeira página",
		ajaxViewer_previousPage: "Página anterior",
		ajaxViewer_nextPage: "Próxima página",
		ajaxViewer_lastPage: "Última Página",
		ajaxViewer_unknownPageCount: "1 de ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} de ${1}",
		ajaxViewer_zoomOut: "Diminuir Zoom",
		ajaxViewer_zoomIn: "Aumentar Zoom",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Ajustar Largura",
		ajaxViewer_fitHeight: "Ajustar Altura",
		ajaxViewer_fitPage: "Ajustar Página",
		ajaxViewer_rotate270: "Girar 270 Graus",
		ajaxViewer_rotate90: "Girar 90 Graus",
		ajaxViewer_rotate180: "Girar 180 graus",
		ajaxViewer_darken: "Escurecer",
		ajaxViewer_lighten: "Clarear",
		ajaxViewer_lessContrast: "Menos Contraste",
		ajaxViewer_moreContrast: "Mais Contraste",
		ajaxViewer_invert: "Inverter",
		ajaxViewer_createHighlight: "Realçar",
		ajaxViewer_createNote: "Anotar",
		ajaxViewer_editAnnotation: "Editar Propriedades da Anotação",
		ajaxViewer_deleteAnnotation: "Excluir Anotação",
		ajaxViewer_editAnnotationTitle: "Editar Propriedades da Anotação",
		printableView_print: "Imprimir",
		printableView_close: "Fechar",

		search_results_dropdown_button: "Exibição de Resultados",
		search_results_columns_label: "Exibição de Resultados da Pesquisa",
		search_results_columns_description: "Selecione as propriedades que deseja que sejam exibidas nos resultados da Procura.",
		search_results_sortby_label: "Classificar por:",
		search_results_order_label: "Ordem de classificação:",
		search_results_accending_label: "Crescente",
		search_results_descending_label: "Decrescente",
		search_results_available_properties: "Disponível",
		search_results_selected_properties: "Selecionado",
		search_rank_property: "Classificar (Apenas Procura de texto)",
		search_name_attribute: "Nome (${0})",
		search_results_summary_enabled_label: "Ativar os resumos de conteúdo (apenas de texto de procura)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Pesquisas",
		manage_teamspace_classes_tab_title: "Classes",
		manage_teamspace_entry_templates_tab_title: "Modelos de entrada",
		manage_teamspace_team_tab_title: "Equipe",
		manage_teamspace_roles_tab_title: "Funções",
		manage_teamspace_dialog_title: "Modificar Espaço de Equipe",
		manage_teamspace_button_label: "Modificar Espaço de Equipe",
		manage_teamspace_team_pane_heading: "Selecionar Equipe",
		manage_teamspace_classes_pane_heading: "Selecionar Classes",
		manage_teamspace_entry_templates_pane_heading: "Selecionar modelos de entrada",
		manage_teamspace_no_rights_message: "Você não tem as permissões adequadas para modificar este espaço de equipe.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Propriedades do Espaço de Equipe",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Especifique as propriedades que são exibidas para documentos e pastas na lista de conteúdos quando os usuários estiverem navegando no espaço de equipe. Também é possível especificar a ordem na qual as propriedades são exibidas.",
		teamspace_props_sel_cols_use_default_label: "Use as configurações de <b>Procura</b> para este repositório",
		teamspace_props_sel_cols_use_default_tooltip: "Use as configurações que são especificadas na página de Procura para este repositório na ferramenta de administração.",
		teamspace_props_general_tab_label: "Gerais",
		teamspace_props_column_props_tab_label: "Propriedades Exibidas",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Escolher um arquivo para importar",
		teamspace_import_template_instruction: "É possível selecionar um arquivo de exportação de modelo de espaço de equipe para importar.",
		teamspace_import_template_button_label: "Importar",
		teamspace_import_template_dialog_label: "Importar Modelo do Espaço de Equipe",

		/* Annotation Dialog */
		annotationDlg_title: "Anotações",
		annotationDlg_description: "O documento selecionado possui as seguintes anotações:",
		annotationDlg_msg_noAnnotations: "Não existem anotações. Clique em Incluir para criar uma anotação.",
		annotationDlg_pageLabel: "Página: ${pageNum}",
		annotationDlg_accLabel: "ACESSO: ${accType}",
		annotationDlg_accLabel_public: "Público",
		annotationDlg_accLabel_private: "Privado",
		annotationDlg_accLabel_privateGroup: "Privado(${groupName})",
		annotationDlg_copiable: "Pode ser copiada para outro servidor",
		annotationDlg_cannotCopy: "Não pode ser copiada para outro servidor",
		annotationDlg_addButtonLabel: "Incluir",

		/* Share Dialog */
		is_shared: "Compartilhado",
		is_share_pending: "Compartilhamento pendente",
		share_title: "Compartilhamento do Box",
		share_instructions_new: "Envie e-mail que inclui um link para o arquivo compartilhado. Qualquer pessoa com o link pode acessar o arquivo.",
		share_instructions_existing: "Envie e-mail que inclui um link para o arquivo compartilhado. Qualquer pessoa com o link pode acessar o arquivo. Outras pessoas podem ter o link porque alguém já compartilhou esse arquivo.",
		share_instructions_another_version_shared: "Envie e-mail que inclui o link para o arquivo compartilhado. Qualquer pessoa com o link pode acessar o arquivo. Outras pessoas podem ter o link porque alguém já compartilhou outra versão desse arquivo.",
		share_buttonLabel_share: "Compartilhar",
		share_email_addresses: "Enviar para:",
		share_email_addresses_hover: "Quando o compartilhamento é concluído, um link é enviado para esses endereços de e-mail. Se você não inserir nada, o link será enviado para o seu próprio endereço de e-mail.",
		share_email_addresses_reshare_hover: "Quando o compartilhamento é concluído, um link é enviado para esses endereços de e-mail. Se você não inserir nada, nenhum e-mail será enviado.",
		share_password: "Configure a senha:",
		share_password_placeholder: "Opcional",
		share_comments: "Mensagem:",
		share_comments_default: "Eu gostaria de compartilhar meu arquivo com você no Box.",
		share_myEmail: "Enviar de:",
		share_expiration: "Configure a expiração do link:",
		share_expire: "O acesso expira:",
		share_expire_none: "Nunca expira",
		share_allowDownload: "Permitir download",
		share_add: "Incluir",
		share_advanced_instructions: "As configurações de download, expiração e senha se aplicam ao arquivo compartilhado no Box.",
		share_advanced_existing_instructions: "As configurações de download, expiração e senha se aplicam ao arquivo compartilhado no Box.",
		share_options_edit_warning: "Importante: quaisquer mudanças nessas configurações afetam qualquer pessoa com o link, incluindo as pessoas que já têm o link.",
		share_link: "Link:",
		share_email_addresses_placeholder: "Endereços de email",
		share_email_address_placeholder: "Endereço de e-mail",
		share_email_address_invalid: "Insira um endereço de email válido.",
		share_cannot_share_with_self: "Não é possível compartilhar arquivos consigo mesmo. Especifique um usuário diferente.",
		share_selected_version_with_minor_warning_hover: "A versão ${0} do documento é compartilhada. Você selecionou a versão ${1}.<br><br><b>Aviso</b>: se a versão ${1} for compartilhada ninguém poderá compartilhar a versão ${2}, a não ser que o compartilhamento da versão ${1} seja excluído.",
		share_selected_version_hover: "A versão ${0} do documento é compartilhada. Você selecionou a versão ${1}.",
		share_selected_version_message: "Importante: Versão ${0} do documento é compartilhada. Você selecionou a versão ${1}.",
		share_different_version_message: "Importante: você selecionou a versão ${1}, mas a versão ${0} do documento já está compartilhada.  Não é possível compartilhar a versão ${1} a menos que você primeiro exclua o compartilhamento, mas é possível compartilhar o link para a versão ${0} em vez disso.",
		share_version_message: "Importante: Versão ${0} do documento é compartilhada. Selecione qual versão deseja compartilhar.",
		share_version_new: "Compartilhar versão ${0}",
		share_version_new_p8_hover: "O compartilhamento desse documento cria um link de versão específica somente para a versão selecionada.<br><br>Quando um documento já está compartilhado:<ul><li>É possível compartilhar uma versão mais recente e o link é redirecionado para a versão mais recente.</li><li>Não é possível compartilhar uma versão anterior a menos que você primeiro exclua o compartilhamento.</li></ul>",
		share_version_new_cm_hover: "O compartilhamento desse documento cria um link de versão específica somente para a versão selecionada.<br><br>Quando um documento já está compartilhado:<ul><li>É possível compartilhar uma versão mais recente e o link é redirecionado para a versão mais recente.</li><li>Não é possível compartilhar uma versão anterior.</li></ul>",
		share_version_update: "Compartilhar versão ${0} (Atualizar as opções de compartilhamento).",
		share_version_update_p8_hover: "O compartilhamento desse documento mantém o link para a versão específica somente.<br><br>Quando um documento já está compartilhado:<ul><li>É possível compartilhar uma versão mais recente e o link é redirecionado para a versão mais recente.</li><li>Não é possível compartilhar uma versão anterior a menos que você primeiro exclua o compartilhamento.</li></ul>",
		share_version_update_cm_hover: "O compartilhamento desse documento mantém o link para a versão específica somente.<br><br>Quando um documento já está compartilhado:<ul><li>É possível compartilhar uma versão mais recente e o link é redirecionado para a versão mais recente.</li><li>Não é possível compartilhar uma versão anterior.</li></ul>",
		share_version_change_to_current: "Compartilhar versão ${0} (Atualizar o compartilhamento com a versão selecionada).",
		share_version_change_to_current_p8_hover: "O compartilhamento desse documento atualiza o link para apontar para a versão selecionada somente.<br><br>Quando um documento já está compartilhado:<ul><li>É possível compartilhar uma versão mais recente e o link é redirecionado para a versão mais recente.</li><li>Não é possível compartilhar uma versão anterior a menos que você primeiro exclua o compartilhamento.</li></ul>",
		share_version_change_to_current_cm_hover: "O compartilhamento desse documento atualiza o link para apontar para a versão selecionada somente.<br><br>Quando um documento já está compartilhado:<ul><li>É possível compartilhar uma versão mais recente e o link é redirecionado para a versão mais recente.</li><li>Não é possível compartilhar uma versão anterior.</li></ul>",
		share_repository: "Repositório para arquivos compartilhados",
		share_repository_hover: "Se você não vir o repositório do Box que deseja usar, é possível incluir um novo repositório do Box na página de Repositórios.",
		share_options: "Compartilhar Opções",
		unshare_confirm: "Se você excluir o compartilhamento, todos os links de compartilhamento são quebrados, incluindo links de compartilhamento enviados anteriormente por outros usuários. Quaisquer outros usuários que desejam compartilhar o documento devem selecionar o documento original e compartilhá-lo novamente.<br><br>Tem certeza de que deseja excluir o compartilhamento?",
		unshare_button: "Excluir o compartilhamento do Box",
		admin_share: "Serviços de compartilhamento do Box:",
		admin_share_hover: "Permite aos usuários compartilhar um documento a partir de qualquer repositório que tenha o compartilhado do Box ativado. O compartilhamento de um documento inclui copiar o arquivo para o Box, criando um link e enviando o link no e-mail.",
		admin_my_email_modifiable: "Permitir que os usuários modifiquem o Endereço de e-mail de envio",
		admin_my_email_modifiable_hover: "Por padrão, para o Compartilhamento do Box, o endereço de e-mail do usuário é somente leitura e é obtido a partir de um mapeamento de usuários e endereços de e-mail que representam contas de usuário do Box.<br><br>Selecione essa opção para permitir que os usuários editem seu endereço de e-mail quando compartilharem; no entanto, a validade do endereço de e-mail não é verificada.",
		admin_repos_admin_user: "Administrador de compartilhamento:",
		admin_repos_admin_user_hover: "Configure o administrador de compartilhamento se você tiver uma área de trabalho com os serviços de compartilhamento do Box ativados e esse repositório do Box selecionado como o repositório para arquivos compartilhados.<br><br>Clique em Configurar e efetue login no Box usando uma conta do administrador válida do Box.<br><br>O administrador de compartilhamento deve ser um usuário administrador do Box que é configurado para ter armazenamento ilimitado no Box.",
		admin_repos_admin_user_not_set_warning: "O administrador do Box não está configurado para o repositório selecionado.<br><br>Os serviços de compartilhamento do Box são desativados até que você configure o administrador do Box para o repositório selecionado ou selecione outro repositório do Box no qual o administrador do Box está configurado.<br><br>É possível configurar o administrador do Box na seção dos serviços compartilhados do Box na página Geral para o repositório.",
		admin_share_not_configured_warning: "Antes de ser possível usar serviços de compartilhamento do Box, deve-se primeiro incluir e selecionar um repositório do Box com autenticação de servidor.",
		/* Office Online Server settings */
		admin_office_online_title: "Configuração do Office Online",
		admin_office_online_server_enable: "Servidor do Office Online:",
		admin_office_online_server_enable_hover: "Especifique se deseja que os usuários que acessam esta área de trabalho sejam capazes de editar seus documentos do Office usando o Servidor do Office Online.",		
		admin_office_online_allow_collaborative_editing: "Permitir edição colaborativa",
		admin_office_online_allow_collaborative_editing_hover: "Permitir que mais de um usuário trabalhe no mesmo documento. Limpe a opção se desejar restringir a edição de documentos a um usuário.",
		admin_office_online_repository_not_set_warning: "Antes de ser possível ativar o serviço Office Online, deve-se primeiro ativar o serviço em um repositório e especificar a URL do Servidor do Microsoft Office Online. Clique em <b>Repositórios</b>, selecione um repositório e, na guia <b>Editar Integração</b>, ative o serviço. Clique em <b>Configurações > Geral</b> e insira a URL do Servidor do Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Especifique se deseja usar o Servidor do Office Online para trabalhar com documentos do Office.",
		admin_office_online_server_url: "URL do Servidor do Microsoft Office Online",
		admin_office_online_server_url_hover: "Especifique a URL pela qual outros aplicativos possam se comunicar com o Servidor do Office Online. A URL tem o formato http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Verificado",
	    admin_office_online_server_Failed: "<b>Com falha</b>",

		admin_repcfg_office_online_service_p8_hover: "Para inicializar o repositório para usar o Servidor do Office Online, é possível incluir o arquivo de modelo inicial para cada aplicativo do Office. Se um modelo não for especificado, o modelo padrão será usado.",	
		admin_repcfg_office_online_server_integration: "Integração do Servidor do MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Antes de ser possível ativar o Servidor do Office Online, deve-se primeiro especificar a URL do Servidor do Microsoft Office Online. Clique em Configurações > Geral e insira a URL",
		admin_repcfg_office_online_word_template_name: "Modelo de Word padrão",
		admin_repcfg_office_online_excel_template_name: "Modelo de Excel padrão",
		admin_repcfg_office_online_powerpoint_template_name: "Modelo de PowerPoint padrão",
		admin_repcfg_office_online_blank_template_description: "Esse será o modelo padrão usado se você não incluir seu próprio modelo.",
		/* Edit Service settings */
		admin_icn_edit_title: "Editar configuração",	
	    admin_icn_edit_files_cleanup_interval: "Intervalo de limpeza de arquivos temporários (em dias):",
	    admin_icn_edit_files_cleanup_interval_hover: "É possível configurar a quantidade de tempo que os arquivos temporários são mantidos no cliente ICN Edit.  O período padrão é de 20 dias. O período máximo é de 20 dias e o mínimo é de 1 dia.",
	    admin_icn_edit_service_integration: "Integração do Edit Service",
	    admin_icn_edit_service_integration_intro: "O serviço de edição permite que usuários incluam ou editem arquivos facilmente nos aplicativos nativos instalados nos computadores deles.<br><br><b>Importante:</b> Se você ativar o serviço de edição, será necessário salvar a configuração do repositório antes de editar categorias predefinidas.",
		admin_icn_edit_service: "Editar serviço:",
		admin_icn_edit_enable_hover: "Para usar o serviço de edição, é necessário:<ul><li>Ativar o serviço no repositório</li><li>Ativar o serviço nas áreas de trabalho no ambiente</li><li>Instalar o cliente do IBM Content Navigator Edit em estações de trabalho do usuário</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Ativar",
		admin_icn_edit_disable: "Desativar",
		admin_icn_edit_create_new_category: "Nova Categoria",
		admin_icn_edit_delete_category: "Excluir Categoria",
		admin_icn_edit_edit_category: "Editar Categoria",
		admin_icn_edit_disable_category: "Desativar Categoria",
		admin_icn_edit_enable_category: "Ativar Categoria",
		admin_icn_edit_new_category_dialog_title: "Nova Categoria",
		admin_icn_edit_edit_category_dialog_title:"Editar Categoria",
		admin_icn_edit_new_category_dialog_instructions: "Uma categoria do documento permite associar modelos a tipos específicos de MIME para o serviço de edição. Por exemplo, é possível associar um conjunto de modelos com arquivos PDF para que usuários possam aplicar modelos ao incluírem ou editarem arquivos no cliente do IBM Content Navigator Edit. <br><br><b>Importante:</b> É necessário salvar a configuração do repositório antes de incluir modelos na categoria que você criar. ",
		admin_icn_edit_edit_category_dialog_instructions: "É necessário salvar a configuração do repositório antes de incluir modelos nesta categoria. ",
		admin_icn_edit_delete_category_dialog_instructions: "Deseja excluir esta categoria e todos os modelos associados a ela?<br><br><b>Importante:</b> As mudanças não serão permanentes, até que sejam salvas no repositório. ",
		admin_icn_edit_category_label: "Categoria: ",
		admin_icn_edit_category_discription_label:"Descrição: ",
		admin_icn_edit_template_column_head:"Nome do Modelo",
		admin_icn_edit_category_duplicate_error_message: "Uma categoria com este ID já existe. ",
		admin_icn_edit_word_category_description: "Esta categoria define os modelos disponíveis para documentos do Microsoft Word no serviços de edição. ",
		admin_icn_edit_excel_category_description: "Esta categoria define os modelos disponíveis para documentos do Microsoft Excel no serviço de edição. ",
		admin_icn_edit_powerpoint_category_description: "Esta categoria define os modelos disponíveis para documentos do Microsoft PowerPoint no serviço de edição. ",

		icn_edit_add_template_dialog_title:"Incluir um Modelo ${0}",
		icn_edit_add_template_only_one_file_error: "É possível selecionar somente um arquivo.",
		icn_edit_add_template_file_type_error: "É necessário especificar um arquivo de modelo ${0} válido.<br><br>O documento selecionado possui um tipo de MIME de ${1}.<br><br>Tipos de MIME válidos: ${2}.",
		icn_edit_change_template_dialog_title: "Editar Modelo ${0}",
		icn_edit_action_in_new_menu_name:"Documento ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "com Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "com appps para Desktop",
		icn_edit_new_document_dialog_title: "Novo Documento ${0}",
		icn_edit_new_document_dialog_intro: "Crie um novo documento ${0} e inclua-o no repositório. O documento será criado com o modelo de serviço de edição selecionado.", 
		icn_edit_select_edit_service_template: "Selecionar um modelo",
		icn_edit_edit_service_template: "Editar modelo de serviço:",
		icn_edit_new_document_category_no_templates_message:"Não existem modelos nesta categoria. Entre em contato com o administrador para incluir modelos nesta categoria.",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "Configurações de classe e função",
		admin_repcfg_classes_and_roles_warning: "Para especificar classes e usuários ou grupos de usuários que tenham permissão para criar, editar e usar modelos ou criar rascunhos de documentos que trabalham com Office Online Service e Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "clique aqui.",
		/* Edit Service settings END */
		share_no_my_email_error: "Houve um problema ao identificar o endereço de e-mail que é necessário para compartilhar o documento.",
		share_no_my_email_error_explanation: "Você efetuou login com o ID do usuário ${0}, mas o ID do usuário não é mapeado para um endereço de e-mail.",
		share_no_my_email_error_userResponse: "Tente efetuar login novamente ou efetue login usando um ID de usuário diferente. Se o problema persistir, relate o erro para o administrador do sistema.",
		share_no_my_email_error_adminResponse: "O ID do usuário ${0} não é mapeado para um endereço de e-mail e a área de trabalho ${1} não permite aos usuários editar o endereço de e-mail para serviços de compartilhamento do Box.<br><br>Use uma das seguintes soluções:<br>Certifique-se de que o plug-in de Mapeamento de e-mail esteja registrado.<br>Certifique-se de que o arquivo emailMappingPlugin.json inclua o ID do usuário ${0} e o endereço de e-mail do usuário e, então, construa, configure e registre o plug-in de Mapeamento de e-mail.<br>Se não desejar usar o plug-in de Mapeamento de e-mail ou o diretório de endereço de e-mail do FileNet P8, mas em vez disso desejar permitir que os usuários insiram seu próprio endereço de e-mail quando compartilharem um documento, é possível modificar as configurações da área de trabalho para serviços de compartilhamento do Box para permitir aos usuários que enviem o link a partir de outro endereço de e-mail.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Uma versão mais recente desse documento é compartilhada, assim, não é possível compartilhar a versão selecionada desse documento.",
		share_later_version_shared_error_explanation: "Não é possível compartilhar uma versão anterior de um documento que foi previamente compartilhado.",
		share_later_version_shared_error_userResponse: "Para enviar o link para a versão mais recente do documento, deve-se primeiro selecionar a versão mais recente e, depois, usar a ação Compartilhar.<br><br>Para compartilhar a versão do documento selecionada, deve-se primeiro excluir o compartilhamento para a versão mais recente do documento.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nova mensagem",
		email_from: "De:",
		email_to: "Para:",
		email_cc_link: "Cc",
		email_bcc_link: "Cco",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Insira um endereço de email válido.",
		email_subject: "Assunto:",
		email_message: "Mensagem:",
		email_message_placeholder: "Incluir uma mensagem",
		email_attachments: "Anexos:",
		email_links: "Ligações:",
		email_send: "Enviar",
		email_dont_send: "Não Enviar",
		email_subject_reminder: "Lembrete de assunto",
		email_subject_reminder_confirm: "Deseja enviar esta mensagem sem um assunto?",
		email_missing_from_error: "Houve um problema ao identificar o Endereço de e-mail de envio que é necessário para enviar o e-mail.",
		email_missing_from_error_explanation: "Você efetuou login com o ID do usuário ${0}, mas o ID do usuário não é mapeado para um endereço de e-mail.",
		email_missing_from_error_userResponse: "Tente efetuar login novamente ou efetue login usando um ID de usuário diferente. Se o problema persistir, relate o erro para o administrador do sistema.",
		email_missing_from_error_adminResponse: "O ID do usuário ${0} não está mapeado para um endereço de e-mail e a área de trabalho ${1} não permite que os usuários editem o Endereço de origem.<br><br>Use uma das seguintes soluções:<br>Certifique-se de que o plug-in de Mapeamento de e-mail esteja registrado.<br>Certifique-se de que o arquivo emailMappingPlugin.json inclua o ID do usuário ${0} e o endereço de e-mail do usuário e, então, construa, configure e registre o plug-in de Mapeamento de e-mail.<br>Se não desejar usar o plug-in de Mapeamento de e-mail ou o diretório de endereço de e-mail do FileNet P8, mas em vez disso desejar permitir que os usuários insiram seu próprio endereço de e-mail quando enviarem um e-mail, será possível modificar as configurações de E-mail para áreas de trabalho para permitir que os usuários modifiquem o Endereço de origem.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "O documento não pode ser aberto.",
		open_edit_document_with_native_application_error_explanation: "O IBM Content Navigator não pode se conectar ao cliente do IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Instale e inicie o cliente do IBM Content Navigator Edit na estação de trabalho. Tente abrir novamente o documento.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "O documento não pode ser aberto.",
		connect_to_the_streamline_service_error_explanation: "O IBM Content Navigator não pode se conectar ao cliente do IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Instale e inicie o cliente do IBM Content Navigator Edit na estação de trabalho. Tente abrir novamente o documento.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "O IBM Content Navigator não está configurado corretamente para compartilhar documentos.",
		share_not_configured_error_explanation: "O recurso de compartilhamento do Box deve ser configurado apropriadamente antes de poder compartilhar documentos.",
		share_not_configured_error_userResponse: "Entre em contato com o administrador e solicite a configuração do recurso de compartilhamento do Box.",
		share_not_configured_error_adminResponse: "Os itens a seguir devem ser configurados antes de compartilhar documentos:<ul><li>O serviço do gerenciador de tarefa deve ser ativado nas configurações da ferramenta de administração.</li><li>O ID de conexão do gerenciador de tarefa deve ser configurado no repositório.</li><li>O compartilhamento deve ser ativado no repositório.</li><li>Um repositório do Box deve ser selecionado para compartilhar na área de trabalho.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "As mudanças de propriedades não foram salvas para a nova versão",
		checkin_cors_save_attributes_error_explanation: "A versão foi criada, mas as mudanças de propriedades não foram salvas. O documento ainda pode ser verificado.",
		checkin_cors_save_attributes_error_userResponse: "Desbloqueie o documento e atualize as propriedades usando o item do menu de contexto Propriedades.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "As mudanças de propriedades não foram salvas para o novo documento",
		add_cors_save_attributes_error_explanation: "O documento foi criado, mas as mudanças de propriedades não foram salvas.",
		add_cors_save_attributes_error_userResponse: "Atualize propriedades usando o item do menu de contexto Propriedades.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "O documento não pode ser aberto.",		
		edit_document_using_edit_service_error_explanation: "O documento não pode ser aberto no Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Peça ao administrador para atualizar o Edit Service Integration.<br><br> Se o usuário precisar acessar este documento por meio do Edit Service, acesse a página Integração do Edit para o repositório e atualize a Integração do Edit Service para incluir a classe na lista de classes para modificar para o suporte do Edit Service.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "O documento não pode ser aberto.",		
		edit_document_is_editing_by_oos_error_explanation: "O documento está em uso pelo Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Salve e feche o documento no Office Online Service antes de poder abri-lo no Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Ative os uploads do Cross-Origin Resource Sharing (CORS)",

		/* Email Settings */
		admin_email_settings: "Configurações de e-mail:",
		admin_email_settings_hover: "Especifique o tipo de serviço de e-mail que você deseja que os usuários usem. Ao ativar o serviço de e-mail baseado em HTML, você tem a opção de permitir que os usuários modifiquem seu próprio Endereço de e-mail de envio. Se desejar ativar o serviço de e-mail baseado em Java, deverá ter um navegador que suporte Java.",
		admin_email_use_service: "Use o serviço de e-mail baseado em HTML",
		admin_email_use_applet: "Use o serviço de e-mail baseado em Java",
		admin_email_can_modify_from: "Permitir que os usuários modifiquem o Endereço de e-mail de envio",
		admin_email_can_modify_from_hover: "Por padrão, o Endereço de e-mail de envio não pode ser modificado e é obtido a partir de um mapeamento de usuários e endereços de e-mail que representam contas de usuário.<br><br>Selecione essa opção para permitir que os usuários editem seu endereço de e-mail quando enviarem um e-mail; no entanto, a validade do endereço de e-mail não é verificada.",
		admin_email_use_from_as_sender: "Usar o Endereço de e-mail de envio como o remetente do e-mail",
		admin_email_use_from_as_sender_hover: "Por padrão, um Endereço de e-mail de envio válido é usado no e-mail de um usuário. Esse endereço de e-mail é definido pela sessão de e-mail CNMailSession no servidor de aplicativos. Selecione essa opção para especificar que o endereço de e-mail do usuário deve ser usado no e-mail.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Novas Anotações",
		addAnnotationDlg_labelContents: "Conteúdo:",
		addAnnotationDlg_labelAccess: "Acesso:",
		addAnnotationDlg_labelPublic: "Público",
		addAnnotationDlg_labelPrivate: "Privado",
		addAnnotationDlg_labelPrivateGroup: "Privado para o grupo",
		addAnnotationDlg_labelGroup: "Grupo",
		addAnnotationDlg_labelCopiable: "Esta anotação pode ser copiada para outro servidor.",
		addAnnotationDlg_buttonLabel_save: "Salvar",

		/* Skip navigation */
		skipNavigation_title_main: "Ir para conteúdo principal",
		skipNavigation_title_menu: "Ir para botões de navegação",
		skipNavigation_label_main: "Ir para conteúdo principal",
		skipNavigation_label_menu: "Ir para botões de navegação",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gerenciar Espaços de Equipe",
		manage_teamspace_pane_instance_hdr: "Espaços de equipe",
		manage_teamspace_pane_template_hdr: "Modelos",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Rolar para frente",
		scroll_back: "Rolar para trás",

		breadcrumb_separator_open: "Abra o nó",
		breadcrumb_separator_close: "nó Fechar",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nenhum item está selecionado.",

		/* eds */
		eds_url: "URL do Serviço de Dados Externo:",
		eds_request_timeout: "Tempo limite de solicitação de serviço (segundos):",
		eds_is_required: "Evitar que os usuários executem ações que alterem os valores de propriedades quando o EDS não estiver disponível",

		/* eforms */
		eform_signing_pane_welcome: "Assinar o Formulário",
		eform_signing_button_label: "Assinar",
		eform_signing_pane_delete: "Excluir a Assinatura",
		eform_signing_button_label_delete: "Excluir",

		xtplugin_server_label: "URL do servidor IBM FileNet Workplace XT",
		xtplugin_server_hover: "Insira a URL do servidor onde o IBM FileNet Workplace XT está implementado, por exemplo, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL do servidor IBM eClient",
		ecplugin_server_hover: "Insira a URL do servidor onde o IBM eClient está implementado, por exemplo, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Ações em um grande número de itens podem demorar muito. Deseja continuar?",
		large_number_actions_continue_button: "Continuar",

		large_items_actions_confirmation_question: "Ações em grandes itens podem demorar muito. Deseja continuar?",

		viewer_editproperties_title: "Confirmação",
		viewer_editproperties_title_warning: "Aviso",
		viewer_editproperties_save: "Salvar",
		viewer_editproperties_next: "Avançar",
		viewer_editproperties_reset: "Reconfigurar",
		viewer_editproperties_reset_hover: "Todos os dados não salvos serão reconfigurados para os valores salvos anteriormente",
		viewer_editproperties_saveandgetnext: "Salvar e obter o próximo",
		viewer_editproperties_saveandgetnext_hover: "Obter automaticamente o próximo documento depois que eu salvar minhas mudanças",
		viewer_editproperties_prompt_save_changes: "Você alterou as propriedades do documento a seguir<br>${0}<br><br>Deseja salvar suas alterações?",
		viewer_editproperties_prompt_discard_changes: "Você alterou as propriedades do documento a seguir<br>${0}<br><br>No entanto, uma ou mais propriedades têm um valor inválido, portanto, as mudanças não podem ser salvas. É possível corrigir os valores inválidos ou descartar suas mudanças.<br>Deseja corrigir os valores inválidos mostrados na área de janela de propriedades?",
		viewer_comments_prompt_discard_changes: "Você modificou o comentário. Deseja salvar suas alterações?",
		viewer_notelogs_prompt_discard_changes: "Você modificou os notelogs. Deseja salvar suas alterações?",
		social_collaborated_version: "Versão: ${0}",
		social_link_label: "Quem...",

		// social comments
		comments: "Comentários",
		comments_add_hint: "Pressione Enter para incluir seus comentários.",
		comments_hint: "Insira seus comentários.",
		comments_label: "Pressione Enter ou Tab para salvar seus comentários. Pressione Esc para cancelar.",
		comments_delete_confirmation: "Deseja excluir o comentário selecionado?",
		comments_number: "Comentários: ${0}",
		comments_save_new: "Você modificou o comentário. Deseja fechar a janela sem salvar suas alterações?",

		notelogs: "Notelogs",
		notelogs_download: "Fazer Download",
		notelog_modify: "Salvar mudanças",
		notelog_edit: "Editar Notelog",
		notelog_create_newVersion: "Criar uma Nova Versão de Notelog",
		notelog_add_hint: "Insira seus comentários e pressione Enter para incluir.",
		notelog_hint: "Pressione Shift+Enter para feed de linha",
		notelog_add_placeholder: "Pressione Enter para incluir um comentário no notelog.",
		notelog_save_new: "Você modificou o log de notas. Deseja fechar a janela sem salvar suas alterações?",

		// P8 markings related
		cannot_remove_markings: "Você não tem permissão para remover um ou mais valores de marcação: {0}",

		// download count
		downloadcount: "Downloads: {0}",
		downloadcount_single: "1 download",
		downloadcount_multiple: "{0} downloads",
		downloadcount_none: "Ninguém tem transferido por download ainda este",

		// recommendations
		recommendations: "Curtidas: {0}",
		recommendations_recommend: "Curtir esse item",
		recommendations_unrecommend: "Ao contrário este",
		recommendations_you: "Você curtiu",
		recommendations_you_and_another: "Você e outros 1 como esta pessoa",
		recommendations_you_and_others: "Você e {0} outros como esta",
		recommendations_another: "1 pessoa curte esse item",
		recommendations_others: "{0} pessoas curtem este",
		recommendations_none: "Ninguém tem ainda de este",

		// tags
		tags: "Tags: ${0}",
		tags_delete: "Excluir ${0}",
		tags_none: "Não há marcações a serem exibidas.",
		tags_add: "Inclua tags:",
		tags_hint: "Pressione Enter para incluir as tags.",
		tags_hover_help: "Especifique uma tag ou uma lista de tags que podem ser usadas para procurar documentos com a mesma tag. É possível usar uma vírgula (,), um ponto-e-vírgula (;) ou um espaço para separar as tags.",
		tags_hover_help_box: "Especifique uma tag ou uma lista de tags separadas por vírgulas que podem ser usadas para procurar documentos com a mesma tag.",
		tags_no_access: "Você não possui as permissões apropriadas para incluir tags.",

		//task scheduler pane
		taskPane_tooltip: "Abrir Visualização Tarefas Assíncronas",
		taskPane_tree: "Árvore de Navegação de Janela de Tarefa",
		taskPane_allTasks: "Todas as tarefas",
		taskPane_scheduledTasks: "Tarefas Planejadas",
		taskPane_recurringTasks: "Tarefas Recorrentes",
		taskPane_inProgressTasks: "Tarefas em Andamento",
		taskPane_completedTasks: "Tarefas concluídas",
		taskPane_failedTasks: "Tarefas com Falha",
		taskPane_disabledTasks: "Tarefas desativadas",
		taskPane_statusScheduled: "Planejado",
		taskPane_statusInProgress: "Na Progess-",
		taskPane_statusCompleted: "Concluído",
		taskPane_statusFailed: "Com falha",
		taskPane_statusPaused: "Pausado",
		taskPane_noItemSelected: "Nenhum item selecionado",
		taskSchedulerPane_scheduleInformation: "Informações de planejamento",
		taskSchedulerPane_loginInformation: "Informações de login",
		taskSchedulerPane_startImmediately: "Iniciar imediatamente",
		taskSchedulerPane_recurrence: "Recorrência",
		taskSchedulerPane_interval: "Intervalo",
		taskSchedulerPane_scheduleReport: "Relatório de planejamento",
		taskSchedulerPane_nameHoverHelp: "Digite o nome da tarefa.",
		taskSchedulerPane_descriptionHoverHelp: "Insira uma descrição para a tarefa. A descrição deve ajudar a distinguir entre tarefas.",
		taskSchedulerPane_startTimeHoverHelp: "Especifique quando deseja que a tarefa seja executada. Para executar a tarefa agora, selecione Iniciar Imediatamente.",
		taskSchedulerPane_recurrenceHoverHelp: "É possível planejar a tarefa para ser executada de modo recorrente.",
		taskSchedulerPane_endTimeHoverHelp: "Especifique quando deseja que a tarefa pare de ser executada. A tarefa é executada a partir do horário de início planejado até o horário de encerramento planejado.",
		taskSchedulerPane_usernameHoverHelp: "Para tarefas recorrentes, deve-se inserir um nome de usuário para ativar o serviço para autenticar quando a tarefa for executada.",
		taskSchedulerPane_passwordHoverHelp: "Para tarefas recorrentes, deve-se inserir a senha do usuário especificado para ativar o serviço para autenticar quando a tarefa for executada.",
		taskSchedulerPane_notification: "Notificação",
		taskSchedulerPane_emailAddress: "Endereço de e-mail",
		taskSchedulerPane_emailAddressHoverHelp: "Insira o endereço de e-mail no qual você deseja receber notificações sobre o status da tarefa.",
		taskSchedulerPane_intervalHoverHelp: "Especifique por quanto tempo a tarefa recorrente será executada. É possível configurar o intervalo em horas, dias, semanas, ou meses.",
		taskSchedulerPane_scheduledStartTime: "Horário de início planejada",
		taskSchedulerPane_startTime: "Horário de início",
		taskSchedulerPane_title: "Planejamento",
		taskSchedulerPane_runNow: "Executar agora",
		taskSchedulerPane_runOnce: "Executar uma vez",
		taskSchedulerPane_runAtSchedule: "Executar em um planejamento",
		taskSchedulerPane_repeats: "Repetir",
		taskSchedulerPane_repeatsEvery: "Repetir a cada",
		taskSchedulerPane_hourly: "Por hora",
		taskSchedulerPane_daily: "Diariamente",
		taskSchedulerPane_weekly: "A cada semana",
		taskSchedulerPane_monthly: "A cada mês",
		taskSchedulerPane_yearly: "A cada ano",
		taskSchedulerPane_sunday: "C",
		taskSchedulerPane_monday: "u",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "B",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "C",
		taskSchedulerPane_starting: "Data de início",
		taskSchedulerPane_after: "Depois",
		taskSchedulerPane_ending: "Data de encerramento",
		taskSchedulerPane_times: "tempo(s)",
		taskSchedulerPane_days: "dia(s)",
		taskSchedulerPane_hours: "hora(s) dentro do dia",
		taskSchedulerPane_interval: "Intervalo",
		taskSchedulerPane_endingDays: "Encerrando (em dias)",
		taskSchedulerPane_never: "Nunca",
		taskSchedulerPane_categorization: "Categorização",
		taskSchedulerPane_scheduleTask: "Tarefa de Planejamento",
		taskInformationPane_details: "Detalhes",
		taskInformationPane_errors: "Erros",
		taskInformationPane_taskInstances: "Instâncias de Tarefa",
		taskInformationPane_audits: "Auditorias",
		taskInformationPane_results: "Resultados",
		asyncTasks: "Tarefas Assíncronas",

		//entry template pane
		search_all_entry_templates: "Procurar todos os modelos de entrada.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Visualizar site integral",
		mobilesite: "Visualizar site móvel",
		profile: "Gerenciar perfil",
		office_template: "Modelo do Office:",
		select_office_template: "Selecione um modelo do Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Os documentos selecionados não podem ser abertos no visualizador com a ação Mesclar e Dividir.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "O visualizador configurado para PDF e documentos TIFF não suporta a ação Mesclar e Dividir.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Peça ao administrador que configure um visualizador para documentos PDF e TIFF que suporte a ação Mesclar e Dividir, como o visualizador Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Os documentos PDF selecionados não podem ser abertos no visualizador com a ação Mesclar e Dividir.",
		document_builder_pdf_unsupported_viewer_error_explanation: "O visualizador configurado para documentos PDF não suporta a ação Mesclar e Dividir.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Peça ao administrador que configure um visualizador para documentos PDF que suporte a ação Mesclar e Dividir, como o visualizador Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Os documentos TIFF selecionados não podem ser abertos no visualizador com a ação Mesclar e Dividir.",
		document_builder_tiff_unsupported_viewer_error_explanation: "O visualizador configurado para documentos TIFF não suporta a ação Mesclar e Dividir.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Peça ao administrador que configure um visualizador para documentos TIFF que suporte a ação Mesclar e Dividir, como o visualizador Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Os documentos selecionados não podem ser abertos no visualizador com a ação Mesclar e Dividir.",
		document_builder_unsupported_documents_error_explanation: "A ação Mesclar e Dividir funciona somente com documentos PDF e TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Selecione os documentos suportados e tente novamente.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Alguns documentos selecionados não podem ser abertos no visualizador com a ação Mesclar e Dividir.",
		document_builder_some_unsupported_documents_error_explanation: "A ação Mesclar e Dividir funciona somente com documentos PDF e TIFF abertos no mesmo diretório.",
		document_builder_some_unsupported_documents_error_userResponse: "Os documentos suportados serão abertos no visualizador.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Ocorreu um erro ao verificar o conteúdo modificado.",
		document_builder_checkin_failed_explanation: "O visualizador recebeu um erro durante a verificação no conteúdo modificado.",
		document_builder_checkin_failed_userResponse: "Solicite ao seu administrador do sistema para revisar os arquivos de log do servidor de aplicativos da web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "O documento não pode ser aberto.",
		no_viewer_to_view_error_explanation: "O administrador do sistema bloqueou a visualização para este documento. Se for necessário acessar este documento, será possível fazer o download dele.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "O conteúdo não pôde ser construído.",
		document_build_failed_userResponse: "Solicite ao administrador do sistema que revise os arquivos de log do visualizador.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "O documento não pôde ser aberto no modo Mesclar e dividir.",
		document_builder_open_failed_userResponse: "Solicite ao administrador do sistema que revise os arquivos de log do visualizador.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "O sistema não pôde alternar para o modo Mesclar e dividir.",
		document_builder_switch_failed_userResponse: "Solicite ao administrador do sistema que revise os arquivos de log do visualizador.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documentos",
		print_service_page_setup_tab_title: "Configuração da Página",
		print_service_OD_print_tab_title: "Opções de Impressora",
		print_service_status_merging: "Mesclando documentos...",
		print_service_status_converting: "Convertendo documentos...",
		print_service_status_formatting: "Formatando documento para impressão...",
		admin_print_service_maximum_number_to_print: "Número máximo de documentos permitidos para impressão:",
		admin_print_service_maximum_size_to_print: "Quantia máxima de dados permitida para impressão (em MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Especifique o número máximo de documentos que os usuários podem imprimir por vez. O máximo padrão é 50. Se você não desejar limitar a impressão por número de documentos, configure esse limite para 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Restrição:</b> Esta definição não é suportado no IBM Content Manager OnDemand.<br/><br/>Especifique a quantia máxima de dados que podem ser impressos usando o serviço de impressão IBM Daeja ViewONE.<br /><br />O tamanho total de cada documento selecionado não pode ser maior do que essa quantia.<br/><br/>O limite padrão é 200 MB. Configurando o limite acima de 200 MB podem afetar o desempenho do sistema. Se você não desejar limitar a impressão por tamanho do documento, configure esse limite para 0",
		// error printing
		print_service_error_printing: "Ocorreu um erro durante a impressão.",
		print_service_error_printing_userResponse: "Peça ao administrador do sistema que revise os arquivos de log do serviço de impressão.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Os documentos selecionados são muito grandes para imprimir",
		print_service_max_content_error_explanation: "Os documentos selecionados excedem o limite de ${0} MB de dados.",
		print_service_max_content_error_userResponse: "Selecione menos documentos ou documentos menores e imprima novamente. Também é possível entrar em contato com o administrador do sistema para aumentar o tamanho total máximo de itens que podem ser impressos por vez por meio da área de trabalho.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Os itens não podem ser impressos.",
		print_service_max_number_selected_error_explanation: "É possível imprimir até ${0} itens por vez. Você está tentando imprimir ${1} itens.",
		print_service_max_number_selected_error_userResponse: "Selecione menos itens e tente imprimir os itens novamente. Também é possível entrar em contato com o administrador do sistema para aumentar o número máximo de itens que podem ser impressos por vez por meio dessa área de trabalho.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


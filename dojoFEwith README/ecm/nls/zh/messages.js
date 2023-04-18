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
		welcome_user: "欢迎！",
		about: "关于",
		all: "全部",
		help: "帮助",
		user_session: "用户会话",
		user_session_for: "${0} 的用户会话",
		user_session_for_with_container: "${0} 的用户会话 (${1})",
		tools: "工具",
		login: "登录",
		logout: "注销",
		search: "搜索",
		saved_searches: "已保存的搜索",
		content_analytics: "分析内容",
		reset: "重置",
		reset_hover: "所有选项卡中任何未保存的数据都将重置为先前保存的值。",
		reset_default: "全部清除",
		reset_default_hover: "清除所有选项卡上的“当前标签”字段。",
		locale: "语言环境：",
		up: "上移",
		down: "下移",
		restore: "复原",
		maximize: "最大化",
		values_label: "值",
		value_label: "值：",
		path_label: "路径：",
		new_label: "新建：",
		back_label: "返回",
		clear: "清除",
		set: "设置...",
		browse: "浏览",
		work: "工作",
		connect: "连接",
		documents: "文档：",
		copyright: "© Copyright 2012, 2016 IBM Corp. IBM 和 IBM 徽标是 IBM Corporation 在全球多个管辖区域注册的商标。Java 和所有基于 Java 的商标和徽标是 Oracle 和/或其附属机构的商标或注册商标。此处提到的 Oracle Outside In Technology 受到限制使用许可的约束，且仅能与此应用程序配合使用。本程序依照程序附带的许可协议的条款许可使用。本许可证协议可能位于 Program 目录文件夹或标识为“License”或“Non_IBM_License”的库中，或者以许可证协议印刷品形式提供（如果适用）。 在使用程序前，请仔细阅读该条款。使用本程序即表明您同意这些条款。",
		edit: "编辑",
		cancel: "取消",
		close: "关闭",
		close_all: "关闭所有选项卡",
		close_others: "关闭其他选项卡",
		ok: "确定",
		yes: "是",
		no: "否",
		open: "打开",
		refresh: "刷新",
		refresh_cabinets: "刷新所有文件柜",
		delete_text: "删除",
		export_config: "导出配置",
		description: "描述",
		true_label: "True",
		false_label: "False",
		error: "错误",
		error_reference_hover: "在 www.ibm.com 中搜索以找到有关此错误的更多信息。",
		url_label: "URL",
		default_label: "缺省值",
		ibm_label: "IBM",
		light_label: "浅色",
		dark_label: "深色",
		save: "保存",
		saveAs: "另存为...",
		save_and_close: "保存并关闭",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "无",
		Name: "名称",
		"${NAME}": "名称",
		mime_type: "MIME 类型",
		mime_type_contains_label: "MIME 类型包含",
		mime_type_header: "MIME 类型",
		mime_type_icon: "MIME 类型图标",
		casesearch: "案例",
		item: "项",
		no_mime_type: "此项不包含任何内容。",
		items_selected: "已选择 ${0} 个项。",
		requestor: "请求者",
		scheduledStartTime: "计划开始时间",
		isRecurring: "重复发生",
		weeks: "周",
		days: "天数",
		hours: "小时",
		endTime: "结束时间",
		username: "用户名",
		password: "密码",
		serverURL: "服务器 URL",
		enable: "启用",
		disable: "禁用",
		finish: "完成",
		previous: "上一步",
		next: "下一步",
		schedule: "计划",
		removeFromThisList: "从此列表中移除",
		status: "状态",
		scheduledEndTime: "安排结束时间",
		type: "类型",
		mode: "方式",
		startTime: "开始时间",
		createdBy: "创建者",
		nextScheduledTime: "下次计划时间",
		id: "标识",
		duration: "持续时间",
		repeatCycle: "频率",
		taskTypeName: "任务类型",
		to: "到",
		filter: "过滤器：",
		error_message: "错误消息 ",

        file_type: "文档类型",
        word_template_name: "Word 模板名称",
        excel_template_name: "Excel 模板名称",
        powerpoint_template_name: "PowerPoint 模板名称",
        template_description: "模板描述",
        action_add_template: "添加",
        action_change_template: "编辑",      
        action_edit_template_properties: "属性",
        add_presentation_template: "添加演示模板",
    	add_spreadsheet_template: "添加电子表格模板",
    	add_doc_template: "添加文档模板",    	
    	file_type_doc_hover: "必须指定有效的字处理文档模板文件。<br><br>有效 MIME 类型：${0}",
    	file_type_doc_error: "必须指定有效的字处理文档模板文件。<br><br>所选文档 MIME 类型：${0}<br><br>有效 MIME 类型：${1}",
    	file_type_presentation_hover: "必须指定有效的演示模板文件。<br><br>有效 MIME 类型：${0}",
    	file_type_presentation_error: "必须指定有效的演示模板文件。<br><br>所选文档 MIME 类型：${0}<br><br>有效 MIME 类型：${1}",
    	file_type_spreadsheet_hover: "必须指定有效的电子表格模板文件。<br><br>有效 MIME 类型：${0}",
    	file_type_spreadsheet_error: "必须指定有效的电子表格模板文件。<br><br>所选文档 MIME 类型：${0}<br><br>有效 MIME 类型：${1}",
    	office_online_only_one_template_error: "只能选择一个文件。",
    	change_presentation_template: "编辑演示模板",
    	change_spreadsheet_template: "编辑电子表格模板",
    	change_doc_template: "编辑文档模板",
    	change_button: "编辑",
	    new_document_dialog_doc_title: "新建文档",
	    new_document_dialog_presentation_title: "新建演示文稿",
	    new_document_dialog_spreadsheet_title: "新建电子表格",
	    new_document_dialog_title_label: "标题：",
	    new_document_dialog_title_hover: "输入此文档的标题。",
	    new_document_dialog_title_missing_message: "必须指定标题。",
	    office_online_save_before_adding_templates_title: "保存对存储库的更改",
	    office_online_save_before_adding_templates_error: "在保存您对存储库作出的更改之前，无法添加 Office 模板。请单击<b>保存并关闭</b>，然后重新打开存储库以添加 Office 模板。",
	    copy_to_OOS_dialog_doc_title: "新建文档",
	    office_online_checkin_cancelcheckout_message: "正在 Microsoft Office Online 中编辑此文档。此文档在 Microsoft Office Online 中处于打开状态时，无法检入此文档或取消检出。",
	    new_document_classification: "分类：",
	    new_document_classification_help: "重置源文档的类、属性及父文件夹（如果存在）。使用输入模板添加文档时，将自动选中源文档的输入模板（如果存在）。源文档的属性将用作缺省值，但输入模板中指定的文件夹和类将保留。",
		new_document_classification_use_source_document: "使用源文档：",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} 类型图标",
		repository_name_and_type: "${0} 名称和类型",
		select_class_label: "选择 ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "详细视图",
		detail_view_button: "详细信息",
		magazine_view_button_tooltip: "库视图",
		magazine_view_button: "库",
		filmstrip_view_button_tooltip: "“幻灯片”视图",
		filmstrip_view_button: "幻灯片",

		magazine_view_show: "在“杂志”视图中显示",
		detail_view_show: "在“详细信息”视图中显示",

		total_count_item: "项",
		total_count_items: "项",
		total_count_more_items: "超过 ${0} 个项",

		extension_changed: "选择的文件扩展名与原始的文件扩展名不匹配。请选择另一个文件。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "所选查看器并非支持所有文件类型。如果保存此查看器映射，那么在查看文档时可能会遇到问题。当选择了“所有文件类型”选项时，建议您选择一个支持所有文件类型的查看器。<br><br><b>提示：</b>下列查看器支持所有文件类型：<ul><li>Applet 查看器</li><li>AJAX 查看器</li><li>HTML 转换</li><li>PDF 转换</li><li>Web 浏览器</li></ul>",
		file_type_any: "所有文件类型",
		file_type_any_hover: "如果不管是哪种文件类型，您都要使用所选查看器来查看所有文档，请选择此选项。下列查看器支持此选项：<br><br><ul><li>Applet 查看器</li><li>AJAX 查看器</li><li>HTML 转换</li><li>PDF 转换</li><li>Web 浏览器</li></ul><br><br><b>提示：</b>如果要在大部分时间都使用特定的查看器，那么应该将您创建的使用此选项的任何映射都移至查看器映射的末尾。",
		file_type_input: "新文件类型：",

		mime_type_input: "新 MIME 类型：",
		mime_type_input_invalid: "新 MIME 类型不能包含下列任意字符：,",
		mime_type_available: "可用的 MIME 类型",
		mime_type_selected: "所选 MIME 类型",
		file_type_input: "新文件类型：",
		file_type_input_invalid: "新文件类型不能包含下列任何字符：,",
		file_type_available: "可用文件类型",
		file_type_selected: "所选文件类型",
		file_type_header: "文件类型",
		viewer: "查看器：",
		viewer_viewer: "查看器",
		viewer_view: "视图",
		viewer_preview: "预览",
		viewer_merge_and_split: "合并与拆分",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "仅预览",
		preview_only_label: "（预览）",
		preview_only_hover: "仅用户单击<b>预览</b>时，才使用此查看器映射。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "此存储库不支持浏览。选择另一存储库。",

		repository_community_teamspace_message: "另一个存储库已指定为社区文档库存储库。如果要继续将现有存储库用作社区文档库存储库，请在保存更改前选择<b>否</b>以避免现有存储库被替换为此存储库。",

		favorites_empty: "您现在还没有任何收藏夹。",
		syncItems_empty: "您尚无任何已同步文件。",

		root_folder_id: "根文件夹标识",
		unified_searches: "跨存储库搜索：",
		max_results: "结果数：",
		direct_retrieve_enabled: "直接检索：",
		itemTypesToDisplay: "要显示的项类型：",
		allItemTypes: "所有项类型",
		include_attr_group_name: "特性显示名称中的特性组描述：",
		admin_repcfg_include_attr_group_name_hover: "缺省情况下，特性组描述包括在特性组特性的名称中。用户处理特性时，这将帮助用户了解特性组特性属于哪个特性组。<br>例如，用户可能会看到特性组特性的以下名称：Document Settings.Document Type。<br><br>如果您禁用此选项，那么只有特性描述用于特性组特性名称。<br>例如，用户将看到以下名称：Document Type。<br><br>如果没有特性组描述，那么用户可能无法分辨“文档类型”是简单特性还是特性组特性。",
		documentItemTypesOnly: "仅限文档模型项类型",
		object_store: "对象存储库符号名称：",
		object_store_display_name: "对象存储库显示名称：",
		teamspaceUpgradeMsg: "当您保存存储库配置时，将更新团队空间。如果您有许多团队空间，那么可能要耗用几分钟进行更新。",
		synchUpgradeMsg: "当您保存存储库配置时，将更新此存储库上的同步模块。",
		protocol: "协议：",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS 存储库标识：",
		cmis_url: "CMIS AtomPub 绑定服务文档 URL：",
		trace_level: "跟踪级别",
		trace_dir: "跟踪目录",
		temp_dir: "临时目录",
		show_document_location: "显示文档位置",
		max_folders: "最大文件夹数",
		afp_conversion: "AFP 转换",
		line_conversion: "行数据转换",
		max_hits: "最大命中数",
		folder_search_expresssion: "文件夹搜索表达式",
		max_item_types: "最大项类型数",
		max_worklists: "最大工作列表数",
		update_storage_collection: "更新存储器集合",
		include_mime_types_in_search_results: "在搜索结果中包括 MIME 类型",
		object_type: "对象类型",
		object_type_document: "文档",
		object_type_folder: "文件夹",
		file_label: "文件：",
		plugin_jarfile_path_label: "JAR 文件路径：",
		plugin_classfolder_path_label: "类文件路径：",
		plugin_classname_label: "类名称：",
		plugin_id_label: "插件标识：",
		class_label: "类",
		configuration: "配置",
		connect_repository: "连接...",
		server_type: "服务器类型",
		timeout_in_seconds: "超时（以秒计）：",
		default_search_template: "缺省搜索",
		search_filtered_properties: "可搜索的属性",
		property_contains_label: "属性包含",
		class_contains_label: "类包含",
		search_filtered_operators: "搜索运算符",
		default_search_results: "搜索结果",
		data_type: "数据类型",
		status_bar: "状态栏",
		operators_for: "以下内容的运算符：",
		currentUser: "当前用户",
		nameContains: "名称包含",
		searchFor: "搜索对象",
		server_autentication: "服务器认证（带有 JWT 的 OAuth 2.0）",
		standard_authentication: "标准认证（三腿 OAuth2.0）",
		developer_authentication: "开发者认证",
		enterprise_id: "企业标识：",
		public_key_id: "公用密钥标识：",
		private_key_path: "专用密钥文件路径：",
		server_user_email: "服务器用户电子邮件",

		filter_builder_tooltip: "定义过滤器",

		// Launch bar
		launchbar_home: "打开“主页”",
		launchbar_favorites: "打开“收藏夹”",
		launchbar_browse: "打开“浏览”视图",
		launchbar_browse_popup: "打开“浏览”弹出列表",
		launchbar_search: "打开“搜索”视图",
		launchbar_search_popup: "打开“搜索”弹出列表",
		launchbar_teamspaces: "打开“团队空间”视图",
		launchbar_teamspaces_popup: "打开“团队空间”弹出列表",
		launchbar_work: "打开“工作”视图",
		launchbar_work_popup: "打开“工作”弹出列表",
		launchbar_entry_templates: "打开“输入模板”视图",
		launchbar_entry_templates_popup: "打开“输入模板”弹出列表",
		launchbar_admin: "打开“管理”视图",

		admin_sync_server: "Sync Services",
		admin_settings: "设置",
		admin_interface_text: "标签",
		admin_interface_text_desktop: "桌面：",
		admin_desktops: "桌面",
		admin_repositories: "存储库",
		admin_mobile: "移动",
		admin_menus: "菜单",
		admin_reason_codes: "修订原因",
		admin_plugins: "插件",
		admin_plugins_state_enabled: "已启用插件",
		admin_plugins_state_disabled: "已禁用插件",
		admin_plugins_version: "版本：",
		admin_plugins_version_heading: "版本",
		admin_plugins_icon: "插件图标",
		admin_viewer_mapping_icon: "查看器映射图标",
		admin_viewer_defs: "查看器映射",
		admin_viewer_dialog_title: "映射",
		admin_viewer_dialog_new_title: "新建映射",
		admin_viewer_dialog_instructions: "映射会指定要对存储库上的文件使用哪个查看器。您可以创建多个映射以对不同类型的文件指定不同的查看器。可以使用 MIME 类型或文件扩展名来定义映射。带有文件扩展名的映射将映射到文档名。例如，文件类型设置为 gif 的映射将映射到以扩展名 .gif 结束的文档名。",
		admin_desktop_viewer_defs: "查看器映射：",
		admin_desktop_viewer_defs_hover: "查看器映射可指定要将哪个查看器用于打开存储库上不同类型的文档。<br><br>您可以在管理工具的<b>查看器映射</b>部分中创建新的查看器映射。",
		admin_desktops_used: "用在桌面中",
		admin_desktop_additional_settings: "其他设置：",
		admin_default_desktop: "设置为缺省桌面",
		admin_default_desktop_header: "缺省桌面",
		admin_layout_tab_title: "布局",
		admin_desktop_icon: "桌面图标",

		// Themes
		admin_themes: "主题",
		admin_theme_list_instructions: "您可以创建主题以便更易于为您的组织定制 Web 客户端。如果需要对您的环境中的不同桌面使用不同的颜色、字体或者徽标，那么可创建多个主题。<br><br>创建主题后，您可以通过在桌面的<b>外观</b>选项卡上配置主题以将其应用于桌面。",
		admin_theme_instructions: "创建主题来控制 Web 客户端中显示的颜色和字体。此外，您还可以使用主题来更改登录页面和标题中显示的徽标、应用程序名称及版权文本。",
		admin_theme_heading: "主题：<b>${0}</b>",
		admin_new_theme: "新建主题",
		admin_text_theme: "主题",
		admin_delete_confirmation_themes: "您要删除所选主题吗？\n已选择 ${0} 个主题。",
		admin_theme_color: "彩色",
		admin_theme_text: "文本",
		admin_theme_solid: "实心",
		admin_theme_gradient: "渐变",
		admin_theme_box: "Box",
		admin_theme_color_label: "颜色 ${0}：",
		admin_theme_name_invalid: "主题名称不能包含下列任意字符：* \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "主题标识必须是唯一的，并且保存主题后不能更改该标识。<br><br>该标识只能包含字母数字字符。",
		admin_theme_name_hover: "主题名称不能包含下列字符：* \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "自动",
		admin_theme_logo_url_hover: "输入徽标文件的 URL。如果该徽标与 Web 客户端在同一 Web 应用程序服务器上，请输入相对 URL，例如：/mycustomizations/banner_logo.png<br><br>建议徽标具有透明背景。",
		admin_theme_color_palette_title_heading: "调色板",
		admin_theme_color_palette_help_text: "使用十六进制值或颜色选择器为您的主题创建调色板。可添加任意数目的颜色。",
		admin_theme_color_add_button_label: "添加颜色",
		admin_theme_color_remove_button_label: "移除颜色",
		admin_theme_global_title_heading: "应用程序范围的元素",
		admin_theme_global_font: "字体系列：",
		admin_theme_global_font_hover: "选择要在 Web 客户端中使用的字体。字体是按优先顺序列示的；仅当客户端机器上未安装列表中的上一个字体时，才会使用列表中的下一个字体。",
		admin_theme_global_framework_color_label: "框架颜色：",
		admin_theme_global_framework_color_hover: "选择要用于以下元素的颜色：<ul><li>对话框上的标题栏</li><li>所选选项卡顶部的突出显示颜色</li><li>内容列表视图图标（“详细信息”视图、“杂志”视图和“幻灯片”视图）</li></ul><br>此颜色未用于 Web 客户端上各部分之间的分隔区域。如果要更改分隔区域的颜色，那么必须创建插件以提供定制 CSS 文件。",
		admin_theme_color_global_toolbar: "全局工具栏颜色：",
		admin_theme_color_global_toolbar_hover: "如果要将全局工具栏包括在 Web 客户端中，请选择工具栏的颜色。<br><br><b>提示：</b>工具栏显示在 Web 客户端顶部的标题中，所以该工具栏的颜色是对标题颜色的补充。",
		admin_theme_global_selected_color: "所选项颜色：",
		admin_theme_global_selected_color_hover: "选择在浏览树、搜索树及内容列表中选择项时要使用的颜色。<br><br>悬停颜色（用户将光标悬停在某项上时使用的颜色）派生自此颜色。",
		admin_theme_global_link_color: "链接颜色：",
		admin_theme_global_link_color_hover: "选择要用于 Web 客户端中的所有可单击 URL 的颜色。例如，此颜色用于在整个 Web 客户端中显示的“了解更多信息”链接。",
		admin_theme_login_title_heading: "登录页面元素",
		admin_theme_page_background_label: "登录页面背景颜色：",
		admin_theme_login_page_background_hover: "选择要在登录窗格背后显示的颜色。",
		admin_theme_login_pane_background_label: "登录窗格背景颜色：",
		admin_theme_login_pane_background_hover: "选择对登录窗格显示的颜色。此颜色应对登录页面的背景颜色进行补充。",
		admin_theme_text_color: "文本颜色：",
		admin_theme_login_pane_text_color_hover: "选择要用于登录窗格文本的颜色。此颜色用于欢迎文本和字段标签。此颜色对于登录窗格的背景颜色而言应该是易于辨别的。",
		admin_theme_copyright_text: "版权文本：",
		admin_theme_copyright_text_hover: "指定是否在登录页面上显示版权文本。",
		admin_theme_copyright_selection_IBM: "IBM 版权",
		admin_theme_copyright_selection_none: "无版权文本",
		admin_theme_banner_title_heading: "标题元素",
		admin_theme_text_icons_color: "文本和图标颜色：",
		admin_theme_icon_color_label: "图标颜色：",
		admin_theme_shadow_label: "阴影：",
		admin_theme_banner_text_icons_hover: "选择要用于标题上的文本和图标的颜色。此颜色对于标题的背景颜色而言应该是易于辨别的。",
		admin_theme_banner_product_name_label: "产品名：",
		admin_theme_banner_product_name_hover: "创建桌面时，可指定要对应用程序显示的定制名称。如果未指定定制名称，那么 IBM Content Navigator 将用作产品名。指定是否使用桌面或图像中定义的应用程序名称来代替某个名称。",
		admin_theme_banner_product_name_desktop_defined_label: "使用桌面中的名称",
		admin_theme_banner_product_name_image: "使用定制徽标 (URL)",
		admin_theme_background_color_label: "背景颜色：",
		admin_theme_style_label: "样式：",
		admin_theme_banner_color_hover: "选择要用于应用程序顶部标题的颜色。<br><br><b>提示：</b>请确保标题栏上文本的颜色对于标题栏的背景色而言易于辨别。",
		admin_theme_buttons_title_heading: "按钮",
		admin_theme_navigation_title_heading: "导航元素",
		admin_theme_navigation_icon_selected_label: "所选择的图标颜色：",
		admin_theme_navigation_background_hover: "选择要用于功能导航栏的背景的颜色。",
		admin_theme_navigation_icon_color_hover: "选择要用于功能导航栏中的图标的颜色。在桌面上使用缺省布局时，此颜色应当与功能部件下拉菜单的背景色形成一定对比度。在桌面上使用经典布局时，此颜色应当与功能部件导航栏的背景色形成一定对比度。",
		admin_theme_navigation_icon_selected_hover: "选择要用于功能导航栏中所选功能的颜色。该颜色应该对功能导航栏的图标和背景的颜色进行补充。<br><br>在桌面上使用经典布局时，此颜色用作功能部件导航栏中的悬浮帮助颜色。",
		admin_theme_button_background_color_hover: "选择要用于按钮背景的颜色。",
		admin_theme_button_style_hover: "选择按钮样式。",
		admin_theme_button_text_icon_color_hover: "选择要用于按钮上的文本和图像的颜色。",
		admin_theme_no_logo_label: "无徽标",
		admin_theme_custom_logo_label: "定制徽标 (URL)",
		admin_theme_banner_type: "标题栏填充样式：",
		admin_theme_banner_type_hover: "指定标题栏应为纯色还是渐变色。如果您指定采用渐变色的标题栏，那么您指定为标题栏颜色的颜色是该标题栏中最暗的颜色。<br><br><b>提示：</b>请确保标题栏上文本的颜色对于标题栏的背景色而言易于辨别。",
		admin_theme_icon: "主题图标",
		admin_theme_buttons_and_links_title_heading: "按钮、字段和链接",
		admin_theme_button_style_label: "按钮样式：",
		admin_theme_theme_style_label: "主题样式：",
		admin_theme_theme_style_hover: "选择作为主题基础的样式。创建或编辑主题时，您可以随时更改样式。从一种样式更改为另一种样式时，主题设置会重置为缺省值。",
		admin_theme_accent_color_label: "重点色：",
		admin_theme_accent_color_hover: "选择要用于对话框顶部的条形及用于加载微调器的颜色。",
		admin_theme_global_toolbar_text_color_label: "全局工具栏文本颜色：",
		admin_theme_global_toolbar_text_color_hover: "如果要将全局工具栏包括在 Web 客户端中，请选择要用于工具栏中文本的颜色。",
		admin_theme_banner_text_color_hover: "选择要用于条幅中文本的颜色。",
		admin_theme_banner_icon_color_hover: "选择要用于条幅中图标的颜色。",
		admin_theme_button_color_label: "颜色：",
		admin_theme_button_color_hover: "选择要用于以下元素的颜色：<ul><li>对话框上的标题栏</li><li>所选选项卡顶部的突出显示颜色</li><li>内容列表视图图标（“详细信息”视图、“杂志”视图和“幻灯片”视图）</li><li>按钮、字段和链接</li></ul>当用户将鼠标光标悬停在按钮上时所使用的颜色派生自此颜色。此颜色未用于 Web 客户端上各部分之间的分隔区域。如果要更改分隔区域的颜色，那么必须创建插件以提供定制 CSS 文件。",
		admin_theme_theme_style_col_header: "主题样式",

		admin_syncserver_consistency_checker: "一致性校验器：",
		admin_syncserver_consistency_checker_hover: "运行一致性校验器以确保同步服务数据库具有关于服务器上每一项的状态的最新信息。例如，在同步服务数据库停运之后运行一致性校验器，以获取有关停运期间存储库上更新的文档的信息。",
		admin_syncserver_consistency_checker_button: "运行一致性校验器",
		admin_syncserver_consistency_checker_started: "开始时间：",
		admin_syncserver_consistency_checker_ended: "结束时间：",
		admin_syncserver_consistency_checker_duration: "持续时间：",
		admin_syncserver_consistency_checker_items_processed: "已处理同步项数：",
		admin_syncserver_consistency_checker_items_processed_success: "已成功处理同步项数：",
		admin_syncserver_consistency_checker_items_discovered: "已发现新存储库项数：",
		admin_syncserver_consistency_checker_change_updates: "总更新数：",
		admin_syncserver_consistency_checker_state: "状态：",
		admin_syncserver_consistency_checker_state_done: "完成",
		admin_syncserver_consistency_checker_state_running: "正在运行",
		admin_syncserver_consistency_checker_user: "提交者：",
		admin_syncserver_consistency_checker_scheduled: "计划：",

		admin_syncserver_dbcleanup: "数据库清除",
		admin_syncserver_dbcleanup_hover: "运行数据库清除工具以从数据库中移除任何未使用的设备以及不再同步的项。",
		admin_syncserver_dbcleanup_button: "数据库清除",
		admin_syncserver_dbcleanup_state_done: "完成",
		admin_syncserver_dbcleanup_state_running: "正在运行",
		admin_syncserver_dbcleanup_started: "开始时间：",
		admin_syncserver_dbcleanup_ended: "结束时间：",
		admin_syncserver_dbcleanup_state: "状态：",
		admin_syncserver_dbcleanup_repositorydeleted_count: "已删除的存储库：",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "已删除的同步项：",
		admin_syncserver_dbcleanup_devicedeleted_count: "已删除的设备：",
		admin_syncserver_dbcleanup_deviceexpired_count: "已到期的设备：",

		admin_syncserver_publicSyncUrl: "同步服务公用 URL：",
		admin_syncserver_publicSyncUrl_hover: "指定存储库可以用来与 IBM Content Navigator 同步服务进行通信的 URL。URL 的缺省格式为 http://sync_public_URL:port_number/sync/notify。",

		admin_syncserver_managed: "同步客户端设置：",
		admin_syncserver_managed_hover: "用户在 IBM Content Navigator Sync 客户端中无法更改这些设置。",
		admin_syncserver_managed_subfolder: "要同步的文件夹级别",
		admin_syncserver_managed_subfolder_hover: "如果用户对文件夹进行同步，请指定将同步的最大文件夹数。例如，如果用户指定 3 个文件夹级别，那么会同步用户同步的文件夹和两个级别的子文件夹。<br><br>请确保您所在环境已调整为支持此设置所创建的同步流量。",
		admin_syncserver_managed_subfolder_all: "所有子文件夹",
		admin_syncserver_managed_subfolder_none: "没有子文件夹",
		admin_syncserver_managed_subfolder_no_more: "受限级别",
		admin_syncserver_managed_subfolder_levels: "级文件夹",
		admin_syncserver_managed_schedule: "同步时间表",
		admin_syncserver_managed_schedule_hover: "请确保您所在环境已调整为支持同步时间表所创建的同步流量。<br><br>最大时间间隔为 24 小时，也就是 1440 分钟。<br><br>用户可以通过在客户端中单击<b>立即同步</b>来覆盖同步时间表。",
		admin_syncserver_managed_schedule_manual: "手动同步",
		admin_syncserver_managed_schedule_continuous: "连续同步",
		admin_syncserver_managed_schedule_every: "按指定时间间隔同步",
		admin_syncserver_managed_schedule_minutes: "分钟",
		admin_syncserver_managed_schedule_hours: "小时",

		// redaction codes
		admin_new_reason_code: "新建修订原因",		
		admin_reason_code_name_invalid: "修订原因名称不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "描述不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "描述不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "名称不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "描述：",
		admin_reason_code_applications_hover: "要引用此修订原因的数据捕获应用程序的列表。",
		admin_reason_code_applications: "数据捕获应用程序",
		admin_delete_confirmation_reason_codes: "要删除所选择的修订原因吗？",
		admin_delete_confirmation_reason_code: "要删除所选择的修订原因吗？",
		admin_reason_code_heading: "修订原因：<b>${0}</b>",
		admin_reason_code_list_instructions: "修订原因指示保护敏感数据（通过隐藏敏感数据）的原因。每个原因标识对常规用户隐藏的敏感数据的类型。",
		admin_reason_code_instructions: "可以创建每种类型的敏感数据的修订原因。然后，可以在修订策略中使用该原因来定义可以查看该数据的用户以及可以创建或修改修订的用户。",
		admin_reason_code_applications_label: "数据捕获应用程序",
		admin_reason_code_repositories: "存储库",
		admin_reason_code_repositories_label: "存储库",
		admin_reason_code_repositories_hover: "要引用此修订原因的 ICN 存储库的列表。",
		admin_reason_code_repositories_default_value: "未设置",
		admin_reason_code_description_label: "描述",
		admin_reason_code_applications_default_value: "未设置",
		admin_redaction_reasons: "修订原因",
		admin_redactions: "基于角色的修订",
		admin_redactions_policies_roles: "策略和角色",
		admin_reasons: "原因",
		admin_reason_code_id: "标识",
		admin_reason_code_id_hover: "无法编辑标识。可以将标识复制到剪贴板",
		// Role based administration
		admin_rba: "基于角色的桌面管理",
		admin_rba_mobile_access_enabled: "已对此桌面启用移动访问。",
		admin_rba_mobile_access_disabled: "未对此桌面启用移动访问。",
		admin_rba_confirm_delete_multiple: "要删除所选择的管理角色吗？",
		admin_rba_confirm_delete_single: "要删除所选择的管理角色吗？",
		admin_rba_delete_multi_role_desktop: "已将您所选择的一个或多个角色分配给桌面。必须从桌面移除角色之后才能将它们删除。",
		admin_rba_delete_single_role_desktop: "已将您所选择的角色分配给 ${0} 桌面。必须从桌面移除角色之后才能将它删除。",
		admin_desktop: "桌面",
		admin_rba_instructions: "您可以创建和管理桌面管理角色，这些角色与为桌面管理员授予的特权相关联。",
		admin_rba_not_used: "在任何桌面都未使用 ${0}。",
		admin_rba_desktops: "在下列桌面使用了 <b>${0}：</b>",
		admin_rba_new_role: "新建角色",
		admin_rba_name_invalid: "管理角色名称不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "描述不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "描述不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "名称不得包含下列任何字符：* \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>描述：</b> ${0}",
		admin_rba_membership: "成员资格",
		admin_rba_general_priv: "常规",
		admin_rba_appearance_priv: "外观",
		admin_rba_desktop_config_priv: "桌面配置",
		admin_rba_app_name_priv: "应用程序名称",
		admin_rba_theme_priv: "主题",
		admin_rba_viewer_map_priv: "查看器映射",
		admin_rba_merge_split_priv: "合并与拆分",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "菜单",
		admin_rba_edit_svc_priv: "编辑服务",
		admin_rba_toolbars_priv: "工具栏",
		admin_rba_ctx_menus_priv: "上下文菜单",
		admin_rba_office_ribbon_priv: "MS Office 功能导航栏命令",
		admin_rba_office_menues_priv: "MS Office 上下文菜单",
		admin_rba_addl_settings_priv: "其他设置",
		admin_rba_mobile_priv: "移动",
		admin_rba_add_doc_dlg_priv: "添加文档对话框",
		admin_rba_doc_mgmt_priv: "文档管理",
		admin_rba_def_redaction_priv: "缺省编辑选项",
		admin_rba_add_photos_priv: "从相机和照片库添加照片",
		admin_rba_time_stamp_priv: "时间戳记",
		admin_rba_add_docs_folders_priv: "将文档添加到存储库和在存储库中创建文件夹",
		admin_rba_open_docs_priv: "在其他应用程序中打开文档",
		admin_rba_office_config_priv: "Office 配置",
		admin_rba_tab_label_priv: "IBM ECM 选项卡标签",
		admin_rba_feature_sel_priv: "选择功能部件",
		admin_rba_general_config_priv: "常规配置",
		admin_rba_favorites_priv: "收藏夹",
		admin_rba_add_options_priv: "在“编辑”组添加选项",
		admin_rba_browse_priv: "浏览",
		admin_rba_outlook_int_priv: "Outlook 集成",
		admin_rba_search_priv: "搜索",
		admin_rba_layout_priv: "布局",
		admin_rba_case_priv: "案例",
		admin_rba_desktop_feat_priv: "桌面功能部件",
		admin_rba_datacap_priv: "数据捕获",
		admin_rba_displayed_feat_priv: "所显示的功能部件",
		admin_rba_branding_priv: "标记",
		admin_rba_home_priv: "主页",
		admin_rba_main_color_priv: "主要颜色",
		admin_rba_sec_color_priv: "辅助颜色",
		admin_rba_teamspaces_priv: "团队空间",
		admin_rba_rbr_priv: "基于角色的修订",
		admin_rba_et_mgr_priv: "输入模板管理器",
		admin_rba_policies_roles_priv: "管理策略和角色",
		admin_rba_work_priv: "工作",
		admin_rba_reasons_priv: "原因码",
		admin_rba_tasks_priv: "异步任务",
		admin_rba_auth_priv: "认证",
		admin_rba_all_privs: "所有特权",
		admin_rba_some_privs: "某些特权",
		admin_rba_no_privs: "无特权",
		admin_add_users_groups_priv: "添加用户和组",
		admin_url_features_priv: "管理 URL 功能部件",
		admin_plugin_features_priv: "管理插件功能部件",
		admin_addl_components_priv: "其他组件",
		admin_global_toolbar_priv: "全局工具栏",
		admin_status_bar_priv: "状态栏",
		admin_refresh_message: "您必须刷新浏览器才能使用已更新的数据。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "您必须刷新浏览器才能使用已更新的缺省桌面。",
		admin_desktop_refresh_message: "您必须刷新浏览器才能使用已更新的桌面。",
		admin_action_open: "打开",
		admin_action_edit: "编辑",
		admin_action_copy: "复制",
		admin_action_delete: "删除",
		admin_action_copy: "复制",
		admin_action_new: "新建",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "此标识已在使用中。您必须指定唯一标识。",

		admin_searchable_properties_for: "以下内容的可搜索属性：",
		admin_repository_new: "新建存储库",
		admin_desktop_new: "新建桌面",
		admin_desktop_file_documents: "要求用户将新文档和文件夹保存在文件夹中",
		admin_desktop_file_documents_hover: "将项添加至存储库时，如果您想要求用户选择文件夹，请选择此选项。如果您不选择此选项，那么用户可以添加文档 (IBM FileNet P8) 或者添加文档和文件夹 (IBM Content Manager)，而不将它们归档在文件夹中。",
		admin_desktop_show_security_tab: "在执行添加和检入操作期间显示安全性设置",
		admin_desktop_show_security_hover: "<b>仅适用于 IBM FileNet P8 用户。</b>如果向此桌面添加或检入项时允许用户编辑文档和文件夹的安全性，请选择此选项。",
		admin_desktop_configure_security_inheritance: "允许用户配置文件夹的安全性继承",
		admin_desktop_configure_security_inheritance_hover: "<b>仅适用于 IBM FileNet P8 用户。</b>如果您希望用户可以通过控制文件夹的安全性继承来定制对文件夹中的项目的访问权，那么请选择此选项。如果您选择此选项，那么用户可以指定用户或组是否可以从以下位置继承安全性： <ul><li>文件夹</li><li>文件夹及其中间子文件夹</li><li>文件夹及其所有子文件夹</li></ul>",
		admin_desktop_appearance: "外观",
		admin_desktop_appearance_instruction: "您可以通过更改对桌面显示的登录页面和标题来定制桌面的外观。",
		admin_desktop_layout: "布局：",
		admin_desktop_layout_hover: "该布局指定在 Web 客户端中可显示哪些功能部件及如何安排 Web 客户端的内容。<br><br><b>提示：</b>您可以通过创建插件定义定制布局。在选择定制布局前必须在管理工具中注册该插件。",
		admin_desktop_layout_default: "缺省值",
		admin_desktop_layout_custom: "定制",
		admin_desktop_enable_workflow_email: "为 FileNet P8 工作流程电子邮件通知启用此桌面",
		admin_desktop_enable_workflow_email_hover: "仅适用于 FileNet P8 用户。如果您想要使用户能够从处理引擎所生成的电子邮件通知中包含的 URL 打开 Web 客户机，请选择此选项。<br /><br />如果您为任何桌面启用此选项，那么用户无法从通知中包含的 URL 登录到 Web 客户机。<br /><br />如果您在多个桌面上启用此选项并且不止一个桌面符合通知中 URL 中指定的条件，那么 Web 客户机将使用匹配该条件的第一个桌面。",
		admin_desktop_prevent_create_new_search: "防止用户创建搜索",
		admin_desktop_prevent_create_new_search_hover: "此选项会将用户限制为仅使用现有搜索并防止用户创建可能未优化且末端是开放的搜索。</br></br>此设置不会影响团队空间。由用户在所给定的团队空间中具有的角色来控制是否具有在团队空间中创建搜索的权限。",
		admin_desktop_prevent_create_new_unified_search: "阻止用户创建跨存储库搜索",
		admin_desktop_prevent_create_new_unified_search_hover: "此选项会将用户限制为仅使用现有跨存储库搜索并防止用户创建可能未优化且无限制的跨存储库搜索。",
		admin_desktop_hide_entry_template_not_found_warning: "隐藏在找不到相关联的输入模板时所显示的警告",
		admin_desktop_hide_entry_template_not_found_warning_hover: "如果您想要隐藏在编辑项属性时和找不到与该项相关联的输入模板时所显示的警告消息，请选择此选项。",
		admin_desktop_show_class_role_security_selection: "允许用户在输入模板中配置基于角色的安全性",
		admin_desktop_show_class_role_security_selection_hover:	"<b>仅适用于 IBM FileNet P8 用户。</b>当使用输入模板设置文档或者文件夹的安全性时，如果您希望用户配置输入模板以使用基于角色的安全性，那么选择此选项。如果您选择此选项，那么输入模板编辑器可以指定是否将角色安全性对象应用于输入模板定义。",
		admin_desktop_show_primary_multi_part: "仅在查看器中打开主文档",
		admin_desktop_show_primary_multi_part_hover: "<b>仅适用于 IBM FileNet P8 用户。</b>如果您仅希望在查看器中打开主文档文件，那么选择此选项。文档可以有多个文件与其相关联。此选项将仅打开与该文档相关联的主文件。",
		admin_desktop_redaction_save_mode: "缺省修订选项：",
		admin_desktop_redaction_save_mode_hover: "设置缺省 ViewONE 虚拟查看器修订保存方式：</br>* 始终请求用户选择：将会在进入修订方式时显示对话框，询问用户是要作为新版本检入、创建新文档还是下载内容。</br>* 作为新版本检入：始终会将已修订内容重新保存到现有文档的新版本。</br>* 另存为全新文档：始终会将已修订内容重新另存为全新文档。</br>* 在客户机上下载和保存：将已修订内容下载到客户机系统。",
		admin_desktop_redaction_save_mode_user_select: "始终请求用户选择",
		admin_desktop_redaction_save_mode_new_version: "作为新版本检入",
		admin_desktop_redaction_save_mode_new_document: "另存为全新文档",
		admin_desktop_redaction_save_mode_local_content: "在客户机上下载和保存",

		admin_desktop_document_add_mode: "添加文档对话框：",
		admin_desktop_document_add_mode_hover: "指定要在添加 IBM Content Navigator 创建的文档时使用的添加对话框：<ul><li>新建永久已修订文档</li><li>新建合并与拆分文档</li><li>新建 Microsoft Office 文档</li><li>新建 Edit Service 文档</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "添加文档",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "使用输入模板添加文档",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "合并与拆分：",
		admin_desktop_merge_and_split_enable_hover: "指定您是否希望访问此桌面的用户能够使用支持查看器对文档进行合并与拆分。",

		admin_desktop_merge_and_split_show_checkin: "在用户检入对文档的更改时提示用户提供属性值。",
		admin_desktop_merge_and_split_show_checkin_hover_help: "如果您选择此选项，那么在用户检入对文档的“合并与拆分”方式更改时，会显示检入对话框。",

		admin_desktop_available_categories: "可用的功能部件",
		admin_desktop_selected_categories: "所选择的功能部件",

		admin_layout_banner_title: "标题和登录页面",
		admin_layout_title: "布局",

		admin_desktop_application_name: "应用程序名：",
		admin_desktop_application_name_hover: "指定要显示在条幅中的应用程序名称。<br><br>提示：在“标签/桌面标签”选项卡中定义用于其他语言的应用程序名称。",
		admin_desktop_theme: "主题：",
		admin_desktop_theme_hover: "指定是对此桌面使用缺省 IBM Content Navigator 主题还是定制主题。要使用定制主题，您必须在管理工具中的<b>主题</b>部分中创建主题。",
		admin_desktop_login_logo: "登录页面徽标：",
		admin_desktop_login_logo_hover: "如果要更改显示在登录页面上的徽标，那么您可以指定徽标文件的 URL。但是，建议您使用定制主题来更改徽标。",
		admin_desktop_login_logo_url_hover: "输入徽标文件的 URL。如果该徽标与 Web 客户端在同一 Web 应用程序服务器上，请输入相对 URL，例如：/mycustomizations/login_logo.png<br><br>徽标的宽度不应大于 200 个像素，高度不应大于 150 个像素。<br><br>建议徽标具有透明背景。",
		admin_desktop_banner_logo: "标题徽标：",
		admin_desktop_banner_logo_hover: "如果要更改条幅上显示的徽标，那么您可以指定徽标文件的 URL。但是，建议您使用定制主题来更改徽标。",
		admin_desktop_banner_logo_url_hover: "输入徽标文件的 URL。如果该徽标与 Web 客户端在同一 Web 应用程序服务器上，请输入相对 URL，例如：/mycustomizations/banner_logo.png<br><br>徽标的宽度不应大于 72 个像素，高度不应大于 36 个像素。<br><br>建议徽标具有透明背景。",
		admin_desktop_banner_background_color: "标题背景颜色：",
		admin_desktop_banner_background_color_hover: "如果要更改条幅的背景色，那么您可以指定定制颜色。但是，建议您使用定制主题以更改标题的颜色。",
		admin_desktop_banner_background_color_custom_hover: "以十六进制颜色代码指定应用程序标题的颜色。",
		admin_desktop_banner_application_name_color: "应用程序名文本颜色：",
		admin_desktop_banner_application_name_color_hover: "如果要更改应用程序名的颜色，那么您可以指定定制颜色。但是，建议您使用定制主题以更改应用程序名的颜色。",
		admin_desktop_banner_application_name_color_custom_hover: "以十六进制颜色代码指定应用程序名称的颜色。",
		admin_desktop_banner_menu_color: "标题图标颜色：",
		admin_desktop_banner_menu_color_hover: "如果您更改条幅的背景色，那么可能需要更改标题中图标的配色方案才能提高其可视性。指定是否显示标题图标的亮版本或暗版本。<br><br>但是，建议您使用定制主题以更改图标的颜色。",
		admin_desktop_login_page_content: "登录页面内容：",
		admin_desktop_login_page_content_hover: "如果要在登录页面上显示其他信息（例如关于系统停运或用户可从何处取得用户名和密码帮助的声明），那么您可以指定要显示的内容的 URL。",
		admin_desktop_login_page_content_url_hover: "输入登录页面内容的 URL。如果该内容与 Web 客户端在同一 Web 应用程序服务器上，请输入相对 URL，例如：/mycustomizations/login_notices.html",
		admin_desktop_password_rules: "密码规则：",
		admin_desktop_password_rules_hover: "如果要向用户提供有关如何创建密码的准则（例如受限字符或最小字符数），那么您可以指定包含密码规则的页面的 URL。",
		admin_desktop_password_rules_url_hover: "输入密码规则内容的 URL。如果该内容与 Web 客户端在同一 Web 应用程序服务器上，请输入相对 URL，例如：/mycustomizations/passwords.html",
		admin_desktop_help_url: "最终用户帮助 URL：",
		admin_desktop_help_url_hover: "您可以使用 IBM Content Navigator 随附的帮助，也可以通过执行下列其中一项操作将用户重定向到定制帮助内容：<br><br><ul><li>定向至定制帮助系统</li><li>对使用 IBM Content Navigator 部署的 IBM Knowledge Center 实例添加帮助。</li></ul>",
		admin_desktop_help_url_url_hover: "输入定制帮助系统的 URL。IBM Content Navigator 会在您指定的 URL 末尾追加 index.jsp?content=/com.ibm.usingeuc.doc/ 和文件名。要使界面中的“了解更多信息”链接能够工作，帮助系统必须使用与集成最终用户帮助相同的文件名。",
		admin_desktop_deprecated_appearance_title: "不推荐设置",
		admin_desktop_deprecated_appearance_instructions: "如果使用定制主题，那么这些设置会被定制主题覆盖。应该将这些设置迁移至定制主题，定制主题中会提供比此部分更详细的样式。另外，定制主题可以用于多个桌面。",

		admin_desktop_plugins_title: "为此桌面启用或禁用插件。",
		admin_desktop_plugins_enable_all_plugins: "启用所有已部署插件以用于此桌面",
		admin_desktop_plugins_select_plugins: "选择已部署插件以将其启用，用于此桌面",
		admin_desktop_plugins_select_plugin: "选择插件",

		admin_desktop_layout_features: "显示的功能部件：",
		admin_desktop_layout_features_hover: "选择您希望允许用户从此桌面访问的功能部件。这些功能部件按它们的列示顺序显示。<br><br>选择功能部件时，可在桌面内定制该功能部件的一些行为，例如，对该功能部件选择的缺省存储库。",
		admin_desktop_layout_default_repository: "缺省存储库：",
		admin_desktop_layout_default_repository_layout_hover: "指定用户打开此功能部件时缺省情况下选择的存储库。",
		admin_desktop_layout_document_thumbnails: "文档缩略图：",
		admin_desktop_layout_document_thumbnails_hover: "指定是否在“文档信息”窗格中显示文档的缩略图。<br><br>显示缩略图会降低 Web 客户端的性能。",
		admin_desktop_layout_show_filmstrip_view: "“幻灯片”视图：",
		admin_desktop_layout_show_filmstrip_view_hover: "指定是否允许用户将内容列表屏幕切换为“幻灯片”视图。<br><br>“幻灯片”视图会生成用户所选每一个文档的预览。但是，使用“幻灯片”视图会降低 Web 客户端的性能。此外，您必须配置 HTML 转换查看器来查看文档预览。",
		admin_enabled: "启用",
		admin_disabled: "禁用",
		admin_include: "包括",
		admin_exclude: "排除",
		admin_layout_teamspaces_default_repository: "团队空间：",
		admin_layout_entry_templates_default_repository: "输入模板：",
		admin_layout_other_features_default_repository: "搜索和浏览：",
		admin_layout_work_default_repository: "工作：",
		admin_layout_default_feature: "缺省功能部件：",
		admin_default_category_placeholder: "选择功能部件",
		admin_layout_default_feature_hover: "指定用户登录此桌面时显示的功能部件。",
		admin_layout_default_feature_warning: "更改缺省功能部件可能会影响装入应用程序所需要的时间。",
		admin_layout_feature_list_header: "功能部件",
		admin_layout_show_statusbar: "状态栏：",
		admin_layout_show_statusbar_hover: "指定桌面底部是否显示状态栏。<br><br>如果您隐藏状态栏，那么用户无法查看有关非错误事件的信息，例如：<ul><li>该文档已添加至存储库。</li><li>搜索返回了 59 个文档。</li></ul>",
		admin_layout_show_magazineview: "“杂志”视图：",
		admin_layout_show_magazineview_hover: "指定是否允许用户将内容列表屏幕切换为“杂志”视图。<br><br>“杂志”视图增加了内容列表中每个条目的高度，这会减少同时可显示在内容列表中的项数。",
		admin_layout_show_detailsview: "“详细信息”视图：",
		admin_layout_show_detailsview_hover: "指定是否允许用户将内容列表屏幕切换到“详细信息”视图。<br><br>“详细信息”视图将内容列表中可视的行数最大化。",
		admin_feature_config_docinfopane_label: "“文档信息”窗格：",
		admin_feature_config_docinfopane_hoverhelp: "指定用户能否访问此功能部件中的“文档信息”窗格。",
		admin_feature_config_docinfopane_default_label: "缺省行为：",
		admin_feature_config_docinfopane_expanded: "已展开",
		admin_feature_config_docinfopane_collapsed: "已折叠",
		admin_feature_config_docinfopane_expand_on_select: "选中项时展开",
		admin_layout_features_title: "桌面功能部件",
		admin_layout_features_instructions: "指定用户可从此桌面访问的功能部件。此外，您还可以定制桌面中包括的每个功能部件的行为。",
		admin_layout_components_title: "其他桌面组件",
		admin_layout_components_instructions: "如果您希望界面更加流畅或想要提升 Web 客户端的性能，那么您可禁用桌面的某些组件。",
		admin_layout_featureconfig_instructions: "选择要配置的功能部件",
		admin_layout_featureconfig_no_configuration: "未提供任何功能部件配置。",
		admin_layout_featureconfig_label: "功能部件 ${0} 的配置",
		admin_layout_featureconfig_title: "功能部件配置",
		admin_layout_featureconfig_taskManagerURL: "要使用此功能部件，您必须配置 IBM Content Navigator 以连接至任务管理器服务。在此管理工具的<b>设置</b>部分中启用任务管理器服务。",
		admin_feature_config_show_my_checkouts_label: "“我的检出”窗格：",
		admin_feature_config_show_my_checkouts_hoverhelp: "“我的检出”窗格使用户能够对他们已在特定存储库中检出的所有项运行搜索。指定用户是否可以从“主页”功能部件访问“我的检出”窗格。<br/><br/><b>限制：</b>此功能部件要求您至少有一个与此桌面相关联的 IBM Content Manager、 IBM FileNet P8 或 OASIS CMIS 存储库。",

		admin_feature_config_default_repository_icon_text: "缺省存储库",
		admin_show: "显示",
		admin_hide: "隐藏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "不能从“管理员桌面”移除“管理”功能部件",
		admin_warning_label: "警告：",
		admin_layout_show_globaltoolbar: "全局工具栏：",
		admin_layout_show_globaltoolbar_hover: "指定是否在桌面顶部的标题中显示该工具栏。<br><br>全局工具栏包括允许用户将文档、文件夹及包含内容添加至存储库的操作。可用操作取决于用户连接至的存储库。",
		admin_interface_text_name_label: "标签类型",

		admin_interface_text_label_description: "您可以定制显示在 Web 客户端特定区域中的文本。这些标签针对您配置中的所有存储库和桌面进行显示。请在“当前标签”字段中的界面内输入您要查看的文本。<br><br><b>要点：</b>您对标签所做的任何更改都将不显示在管理工具中。",
		admin_interface_text_label_action: "操作标签",
		admin_interface_text_label_action_description: "操作标签显示在整个 Web 客户端中的按钮上和菜单中。您可以对每种类型的存储库定义不同操作标签。",
		admin_interface_text_label_application: "应用程序标签",
		admin_interface_text_label_application_description: "应用程序标签显示在整个 Web 客户端中。",
		admin_interface_text_label_system: "系统属性标签",
		admin_interface_text_label_system_description: "所显示的系统属性根据存储库的不同而变化。您可以针对与存储库中文档和文件夹相关联的系统属性，定制显示的标签。",
		admin_interface_text_label_desktop: "桌面标签",
		admin_interface_text_label_desktop_description: "如果已在桌面中定制应用程序的名称，那么就可以使用英语之外的语言定制该名称。您还可以定制桌面中 IBM FileNet P8 应用程序空间的名称。",

		admin_interface_text_system_label: "系统标签",
		admin_interface_text_current_label: "当前标签",
		admin_interface_text_default_label_heading: "缺省标签",
		admin_interface_text_default_label: "缺省标签：",
		admin_interface_text_displayed_in_label: "针对以下内容显示",
		admin_interface_text_displayed_in_document_folder: "文档和文件夹",
		admin_interface_text_displayed_in_document: "文档",
		admin_interface_text_displayed_in_folder: "文件夹",
		admin_interface_text_displayed_in_admin_application_space: "应用程序空间标签",
		admin_interface_text_displayed_in_desktop: "移动设备的功能部件标签",
		admin_interface_text_displayed_in_admin_application_name: "应用程序名称",

		admin_new_desktop: "新建桌面",
		admin_new_repository: "新建存储库",
		admin_new_menu: "新建菜单",
		admin_new_viewer_mapping: "新建查看器映射",
		admin_new_mapping_label: "新建映射",
		admin_new_icon_mapping: "新建图标映射",
		admin_viewer_mapping_list_instructions: "您可以配置 Web 客户端用于显示不同内容类型的查看器。查看器映射定义哪些 MIME 类型与您要使用的每一个查看器相关联。如果您要对不同桌面使用不同的查看器，那么可以创建多个查看器映射。",
		admin_viewer_mapping_instructions: "指定您要用来打开文件的查看器。如果要使用定制查看器，那么必须先将查看器以插件形式进行集成，才能将其添加到查看器映射。<br><br><b>要点：</b>用户要打开文档时，Web 客户端会基于用户正在运行的操作系统以及用户连接至的存储库，搜索查看器映射列表，以查找可打开此文档的第一个查看器。<br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "新建插件",
		admin_menu_list_instructions: "您可以创建定制工具栏和上下文菜单，以控制哪些操作可供用户使用。虽然您不能编辑缺省菜单，但可以创建现有菜单的副本，以限制可用的操作或添加插件中定义的定制操作。<br><br>如果要创建新类型的菜单，那么必须在插件中定义该菜单。",
		admin_menu_id_hover: "该标识必须是唯一的，并且保存菜单之后，您不能更改该标识。<br><br>该标识只能包含字母数字字符，并且区分大小写。",
		admin_menu_id_disabled_hover: "无法更改菜单标识。如果要使用其他标识，那么必须创建新菜单。",
		admin_menu_default_instructions: "无法编辑此菜单，因为它是一个缺省菜单。如果要编辑此菜单，那么必须创建该菜单的副本。",
		admin_menu_toolbar_instructions: "您可以限制适用于此工具栏的操作，也可以添加插件中定义的定制操作。还可以通过向工具栏添加分隔符来组织这些操作。",
		admin_menu_toolbar_custom_instructions: "此工具栏由插件定义。如果要编辑此工具栏，那么必须更新该插件或创建该工具栏的副本。",
		admin_menu_context_menu_instructions: "您可以限制适用于此上下文菜单的操作，也可以添加插件中定义的定制操作。还可以通过向上下文菜单添加分隔符和子菜单来组织这些操作。",
		admin_menu_context_menu_custom_instructions: "此上下文菜单由插件定义。如果要编辑此上下文菜单，那么必须更新该插件或创建该上下文菜单的一份副本。",
		admin_desktop_list_instructions: "您可以创建多个桌面以允许不同用户访问他们所需要的内容。例如，您可以创建只允许用户搜索内容的桌面，也可以创建允许用户访问单个存储库的桌面。",
		admin_plugin_updated: "所选插件的配置已更改。您必须刷新浏览器才能使更改生效。",
		admin_repository_ci_heading: "Content Integrator 存储库：<b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager 存储库：<b>${0}</b>",
		admin_repository_cm_heading: "Content Manager 存储库：<b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand 存储库：<b>${0}</b>",
		admin_repository_cmis_heading: "内容管理互操作性服务 (CMIS) 存储库：<b>${0}</b>",
		admin_repository_box_heading: "Box 存储库：<b>${0}</b>",
		admin_repository_generic_heading: "存储库：<b>${0}</b>",

		admin_delete_confirmation_desktops: "您要删除所选桌面吗？\n已选择 ${0} 个桌面。",
		admin_delete_confirmation_menus: "您要删除所选菜单吗？\n已选择 ${0} 个菜单。",
		admin_delete_confirmation_repositories: "您要删除所选存储库吗？\n已选择 ${0} 个存储库。",
		admin_delete_confirmation_viewer_mappings: "要删除所选查看器映射吗？已选择 ${0} 个映射。",
		admin_delete_confirmation_icon_mappings: "您要删除所选图标配置吗？\n已选择 ${0} 个图标配置。",
		admin_delete_confirmation_plugins: "您要删除所选插件吗？\n已选择 ${0} 个插件。",
		admin_delete_confirmation: "您要删除所选项吗？\n已选择 ${0} 个项。",

		admin_viewer_mapping_id_hover: "该标识必须是唯一的，并且保存查看器映射之后，您不能更改该标识。<br><br>该标识只能包含字母数字字符，并且区分大小写。",
		admin_viewer_mapping_id_disabled_hover: "无法更改查看器映射标识。如果要使用其他标识，那么必须创建新查看器映射。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "无法删除缺省桌面。",

		admin_desktop_heading: "桌面：<b>${0}</b>",
		admin_menu_toolbar_heading: "工具栏：<b>${0}</b>",
		admin_menu_toolbar_custom_heading: "定制工具栏：<b>${0}</b>",
		admin_menu_context_menu_heading: "上下文菜单：<b>${0}</b>",
		admin_menu_context_menu_custom_heading: "定制上下文菜单：<b>${0}</b>",
		admin_plugin_heading: "插件：<b>${0}</b>",
		admin_plugin_instructions: "插件可以是 JAR 文件或已编译的类文件。<br/><br/><b>要点：</b>IBM Content Navigator Web 应用程序服务器必须能够访问本地文件系统上的插件文件，或者通过 URL 进行访问。",
		admin_plugin_list_instructions: "请使用管理工具来为 Web 客户端注册插件。如果插件需要额外配置，那么会在注册该插件之后显示配置参数。<br /><br /><b>要点：</b>如果您编辑在管理工具（如菜单）的另一区域引用的插件，可能会遇到插件行为方面的问题。此外，会按插件的列示顺序来调用这些插件。如果一个插件需要在另一个插件之前运行，请确保这些插件按照它们运行时必须采用的顺序来列示。",
		admin_plugin_cannot_delete: "无法删除所选择的插件，因为某些插件依赖于这些插件。<br/>所选择的插件：${0}<br/>依赖插件：${1}",
		admin_plugin_cannot_disable: "无法禁用所选择的插件，因为某些插件依赖于这些插件。<br/>所选择的插件：${0}<br/>依赖插件：${1}",
		admin_plugin_cannot_add: "无法添加此插件，因为此插件所依赖的一些插件丢失或已禁用。丢失或禁用的插件：${0}",
		admin_plugin_cannot_enable: "无法启用所选插件，因为这些插件所依赖的一些插件丢失或已禁用。<br/>所选择的插件：${0}<br/>丢失或禁用的插件：${1}",
		admin_plugin_save_order: "保存顺序",
		admin_plugin_load: "载入",
		admin_plugin_load_hover: "指定插件的 URL",
		admin_plugin_file_hover: "如果插件 JAR 文件位于本地文件系统上，那么您可以输入该插件文件的标准路径或 URL。如果插件 JAR 文件位于远程服务器上，那么您必须输入该插件文件的 URL。",
		admin_plugin_classfolderpath_hover: "已编译的类文件必须位于 IBM Content Navigator Web 应用程序服务器上。<br/><br/>请输入在其中进行编译和生成插件类的文件夹的标准路径。<br/><br/>该路径不得包含插件类的软件包名称。例如，Windows 上的样本插件类的缺省路径为 C:\\Program Files (x86)\\IBM\\ECMClient\\bin。",
		admin_plugin_classfoldername_hover: "请输入类文件内应该装入且称为插件类的 Java 类的完整名称。<br/>例如，样本插件的类名为 com.ibm.ecm.extension.sample。<br/>SamplePlugin。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "在指定的 URL 位置找不到插件 JAR 文件。确保该 JAR 文件在 Web 应用程序服务器上并且 URL 和文件名都正确。",
		admin_plugin_for_repository_not_loaded: "不能编辑此存储库。未装入用于定义和支持此存储库类型的插件。在“插件”选项卡上，编辑该插件以验证它是否配置正确及是否已装入。",
		admin_plugin_repository_types: "存储库类型：",
		admin_plugin_viewers: "查看器：",
		admin_plugin_features: "功能部件：",
		admin_plugin_layouts: "布局：",
		admin_plugin_not_available: "不可用",
		admin_plugin_config_params: "配置参数：",
		admin_viewer_def_heading: "查看器映射：<b>${0}</b>",
		admin_users_and_groups: "用户和组",
		admin_general: "常规",
		admin_logging: "日志记录",
		admin_authentication: "认证",		
		admin_rolebase_role: "角色：",
		admin_settings_logging_instructions: "可以使用日志记录来对 Web 客户端的问题进行故障诊断。如果您知道特定 Java 类中发生问题或针对特定用户发生问题，那么您可优化日志记录。错误信息将写至 Web 应用程序服务器错误日志文件。",
		admin_settings_logging_instructions2: "<b>调试日志记录设置</b><br />如果您知道特定客户端主机或用户发生问题，那么可以对该机器或用户执行调试日志记录。您可在生产境中捕获调试信息而不对系统性能产生大幅影响。<br /><br /><b>要点：</b>如果您指定客户端主机或用户，那么此设置将覆盖任何其他日志记录设置。捕获您需要的信息之后，将此选项设置为<b>无</b>以恢复对您所在环境进行的标准日志记录。 ",
		admin_settings_export_config_hover: "将当前系统配置信息导出至文件以与 IBM Support Assistant Data Collector 配合使用。该文件已保存至 user.home Java 系统属性定义的位置。",
		admin_logging_level: "应用程序级别日志记录：",
		admin_logging_level_hover: "日志记录级别会影响存储在服务器上的信息量。如果选择<b>错误</b>，那么将捕获最少的日志记录信息量。如果选择<b>调试</b>，那么将捕获最多的信息。<br /><br />请不要在生产环境中指定<b>调试</b>，除非 IBM 软件支持机构指示您这样操作。",
		admin_logging_level_0: "无日志记录",
		admin_logging_level_1: "错误",
		admin_logging_level_2: "警告",
		admin_logging_level_3: "信息",
		admin_logging_level_4: "调试",
		admin_logging_classes: "Java 类级别日志记录：",
		admin_logging_classes_hover: "缺省情况下，所有 Java 类和包都包含在 Web 应用程序服务器错误日志中。但是，您可以指定要在日志记录中包括或排除的类或包。您可以使用 Web 应用程序服务器错误日志来确定要包括或排除的类。<br><br>如果您知道特定类中发生问题，那么可以在日志文件中专门包括该类。如果在错误日志中包括某个类，那么系统会在日志文件中排除所有其他类。<br><br>如果您知道某个类中未发生问题，并且要降低日志文件的大小，那么可以从日志文件中排除该类。",
		admin_logging_classes_include: "包括",
		admin_logging_classes_include_all: "所有类",
		admin_logging_classes_include_specified: "特定的类",
		admin_logging_classes_include_specified_msg: "指定要包括的类。",
		admin_logging_classes_exclude: "排除",
		admin_logging_classes_exclude_none: "无",
		admin_logging_classes_exclude_specified: "特定的类",
		admin_logging_classes_exclude_specified_msg: "指定要排除的类。",
		admin_logging_debug: "以下内容的调试日志记录：",
		admin_logging_debug_hover: "<b>要点：</b>在您指定客户端机器的主机 IP 地址或用户之前，查看 Web 应用程序服务器日志文件。您提供的值必须与日志文件中显示的值匹配。",
		admin_logging_debug_none: "无（缺省值）",
		admin_logging_debug_host: "客户端主机（IP 地址）",
		admin_logging_debug_host_msg: "指定您想要为其记录调试信息的一个或多个客户端机器的 IP 地址。使用逗号来分隔这些 IP 地址。<br /><br /><b>要点：</b>在指定 IP 地址之前，请查看 Web 应用程序服务器日志文件。您提供的值必须与日志文件中显示的值匹配。",
		admin_logging_debug_user: "用户",
		admin_logging_debug_user_msg: "指定您想要为其记录调试信息的一个或多个用户的用户名。使用逗号来分隔这些用户名。<br /><br /><b>要点：</b>在指定用户名之前，请查看 Web 应用程序服务器日志文件。您提供的值必须与日志文件中显示的值匹配。",

		admin_office_settings_logging_instructions: "可以使用日志记录以对 IBM Content Navigator for Microsoft Office 的问题进行故障诊断。如果您知道特定 Java 类中发生问题或针对特定用户发生问题，那么您可优化日志记录。错误信息将写至 IBM Content Navigator for Microsoft Office 客户端主机上的应用程序日志文件。",
		admin_office_settings_logging_instructions2: "<b>调试日志记录设置</b><br />如果您知道针对特定客户端主机或 IBM Content Navigator for Microsoft Office 用户发生问题，那么可以对该机器或用户执行调试日志记录。您可在生产环境中捕获调试信息而不对系统性能产生大幅影响。<br /><br /><b>要点：</b>如果您指定客户端主机或用户，那么此设置将覆盖任何其他日志记录设置。捕获所需信息后，将此选项设置为<b>无</b>以恢复针对 IBM Content Navigator for Microsoft Office 环境的标准日志记录。",
		admin_office_logging_debug_hover: "<b>要点：</b>在您指定客户端机器的主机 IP 地址或用户之前，查看客户端主机的日志文件。您提供的值必须与日志文件中显示的值匹配。",
		admin_office_logging: "Office 日志记录",
		admin_office_logging_classes: "类级别日志记录：",
		admin_office_logging_classes_hover: "缺省情况下，所有类和包都包括在 IBM Content Navigator for Microsoft Office 错误日志中。但是，您可以指定要在日志记录中包括或排除的类或包。您可以使用客户端机器日志来确定要包括或排除的类。<br /><br />如果您知道特定类中发生问题，那么可以在日志文件中专门包括该类。如果在错误日志中包括某个类，那么系统会在日志文件中排除所有其他类。<br /><br />如果您知道某个类中未发生问题，并且要降低日志文件的大小，那么可以从日志文件中排除该类。",
		admin_office_logging_debug_hover: "<b>要点：</b>在您指定客户端机器的主机 IP 地址或用户之前，查看客户端主机的日志文件。您提供的值必须与日志文件中显示的值匹配。",
		admin_office_logging_additional_settings: "其他设置：",
		admin_office_logging_additional_settings_hover: "指定其他设置",
		admin_office_logging_file_size: "日志文件大小",
		admin_office_logging_file_size_hover: "指定 IBM Content Navigator for Microsoft Office 所创建的新日志文件的大小。日志文件达到最大大小时，当前日志将重命名以包括日期（格式为 YYYYMMdd）和文件增量编号（例如，ICNExcelAddin-20121116-5.log），并创建新的日志文件。",
		admin_office_logging_show_stacktrace_on_dialogs: "在对话框上显示堆栈跟踪",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "（可选）可在消息对话框上显示堆栈跟踪信息以帮助解决问题。即使您不启用此选项，详细堆栈跟踪信息也始终包括在 IBM Content Navigator for Microsoft Office 错误日志中。",

		admin_icon_state_twisty: "状态图标",
		admin_icon_state_icon: "状态图标",
		admin_icon_state: "状态",
		state_contains_label: "状态包含",
		admin_icon_state_instructions: "您可以定制显示在存储库上文档、文件夹以及工作项旁边的图标。<br><br><b>提示：</b>您可以指定是否在环境中显示每一个存储库的状态图标。",
		admin_icon_state_dialog_title: "状态图标映射",
		admin_icon_state_dialog_instructions: "您可以将所选状态映射至随 Web 客户端提供的预定义图标，也可以映射至定制图标。",

		admin_icon_mapping_twisty: "MIME 类型图标",
		admin_icon_mapping_dialog_title: "图标映射",
		admin_icon_mapping: "图标映射",
		admin_icon_mapping_instructions: "您可以将 MIME 类型列表映射至随 Web 客户端提供的预定义图标，也可以映射至定制图标。",
		admin_icon_mapping_list_instructions: "您可以定制针对存储库上存储的不同 MIME 类型显示的图标。Web 客户端按图标列示顺序来使用图标。如果某个 MIME 类型多次列示，那么系统使用与该 MIME 类型相关联的第一个图标。",
		admin_icon_mapping_icon_label: "您要使用哪个图标？",
		admin_icon_mapping_file_name: "定制图标：",
		admin_icon_mapping_file_name_heading: "定制图标",
		admin_icon_mapping_file_name_placeholder: "指定图标的 URL",
		admin_icon_mapping_file_name_hover: "输入图标的 URL。如果该图标与 Web 客户端在同一 Web 应用程序服务器上，请输入相对 URL。例如：/mycustomizations/icon.png",
		admin_icon_mapping_class_name: "预定义图标：",
		admin_icon_mapping_class_name_heading: "预定义图标",
		admin_icon_mapping_class_name_hover: "请选择随 Web 客户端提供的一个图标。",
		admin_icon_mapping_class_name_placeholder: "选择一个图标",

		admin_p8_instructions: "此信息由针对 Web 客户端配置的所有 FileNet Content Manager 存储库共享。",
		admin_p8_collaboration_config: "可选 FileNet Collaboration Services 配置",
		admin_p8_collaboration_config_instructions: "如果要针对 IBM FileNet P8 环境调整 FileNet Collaboration Services，那么您可配置这些参数。",
		admin_p8_use_url_incoming: "使用入局请求上的 URL 来生成响应 URL：",
		admin_p8_use_url_incoming_hover: "在大部分 FileNet Collaboration Services 环境中，您可以使用入局请求的 URL 以在响应中生成 URL。除非您的环境存在下列其中一种情况，否则选择<b>是</b>：<ul><li>您要强制客户端应用程序通过特定 URL 访问 FileNet Collaboration Services。<li>您的代理服务器设置导致 FileNet Collaboration Services 产生无效 URL。</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL：",
		admin_p8_use_url_incoming_http_hover: "使用以下格式，指定客户端应用程序可用来访问 FileNet Collaboration Services 的 URL：http://FNCSserver:port_number。",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL：",
		admin_p8_use_url_incoming_https_hover: "如果 FileNet Collaboration Services 配置为使用 SSL，请使用以下格式指定客户端应用程序可用来访问 FileNet Collaboration Services 的 HTTPS URL：https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "在服务器响应中隐藏用户电子邮件地址：",
		admin_p8_hide_email_addresses_hover: "如果需要遵循隐私政策，那么您可在服务器响应中隐藏用户电子邮件地址。例如，服务器返回文档列表及有关创建或编辑文档的用户的信息时，可隐藏用户电子邮件地址列表。",

		admin_p8_mask_user_ids: "在日志文件中标记用户标识：",
		admin_p8_mask_user_ids_hover: "如果需要遵循隐私政策，那么您可在 FileNet Collaboration Services 日志文件中隐藏用户名。如果您启用此选项，那么用户名替换为散列值。这允许您向外部公司（例如，IBM）提供日志文件以获取支持而不泄露用户的名称或活动记录。",

		admin_p8_soft_delete: "将已删除文件移至恢复容器：",
		admin_p8_soft_delete_hover: "用户删除项时，系统会将这些项移至恢复容器，而不是从存储库中删除这些项。这些项保留在恢复容器中直到它们被清除。如果目标存储库不支持恢复容器，那么此设置会被忽略。<br><br><b>限制：</b>恢复容器在 IBM FileNet P8 V5.2 或更高版本上受支持，并且需要 Social Collaboration Base Extensions 附加组件。",

		admin_p8_download: "内容下载 HTTP 高速缓存配置",
		admin_p8_download_instructions: "如果 IBM FileNet Content Manager 存储库包含许多大型文件，那么您可以配置内容下载 HTTP 高速缓存 (CDHC) 以允许 FileNet Collaboration Services 安全地将针对大型文件的内容请求重定向至专用 Web 服务器。<br/><br/>此功能部件需要 IBM HTTP Server。此外，您必须更新 IBM HTTP Server httpd.conf 文件。",
		admin_p8_download_cache: "内容下载 HTTP 高速缓存：",
		admin_p8_download_cache_hover: "指定是否要对您的环境中的所有 IBM FileNet Content Manager 存储库启用内容下载 HTTP 高速缓存 (CDHC)。您可以指定缓存文件的最小文件大小。",
		admin_p8_download_cache_folder: "标准高速缓存目录：",
		admin_p8_download_cache_folder_hover: "指定要存储已缓存文件的目录的标准路径。该目录可在任何操作系统或设备（例如，共享网络目录）上，只要它可显示为 FileNet Collaboration Services 和 IBM HTTP Server 的文件系统。",
		admin_p8_download_cache_url: "高速缓存位置的别名：",
		admin_p8_download_cache_url_hover: "指定用于从 FileNet Collaboration Services URL 指向高速缓存目录的别名。使用 /alias 格式指定别名，例如，/cdhc。<br/><br/>如果 URL 中包含 /cdhc，那么应用程序重定向至标准高速缓存目录。",
		admin_p8_download_cache_max_files: "最大已缓存文件数：",
		admin_p8_download_cache_max_files_hover: "达到最大文件数时，系统会从高速缓存中移除最旧的文件。<br><br>如果您指定了要缓存的最大文件数和高速缓存的最大大小，那么达到两个条件中的较低条件时系统会从高速缓存中移除最旧的文件。",
		admin_p8_download_cache_max_size: "最大高速缓存大小（以 GB 计）：",
		admin_p8_download_cache_max_size_hover: "达到最大高速缓存大小时，系统会从高速缓存中移除最旧的文件。<br/><br/>如果您指定了要缓存的最大文件数和高速缓存的最大大小，那么达到两个条件中的较低条件时系统会从高速缓存中移除最旧的文件。",
		admin_p8_download_cache_cleanup_duration: "最长清除持续时间（以秒计）：",
		admin_p8_download_cache_cleanup_duration_hover: "指定清除操作可持续的最大时长。缺省持续时间为 5 秒。<br><br>所有在执行清除操作后应删除但仍保留在高速缓存中的文件将在未来清除操作执行期间移除。",
		admin_p8_download_cache_cleanup_min: "高速缓存清除操作之间的最短时间间隔（以秒计）：",
		admin_p8_download_cache_cleanup_min_hover: "指定高速缓存清除操作之间应间隔的最小时长。缺省时长为 3600 秒（1 小时）。<br><br>仅当存在从高速缓存中下载内容的活动请求时，才会发生高速缓存清除操作。如果每分钟出现若干请求，那么清除操作每小时执行一次。但是，如果下载请求之间相隔三个小时，那么直到接收到下一个下载请求时，才会执行清除操作。",
		admin_p8_download_cache_min_lifetime: "保留在高速缓存中的最小时长（以秒计）：",
		admin_p8_download_cache_min_lifetime_hover: "指定文件可被移除之前保留在高速缓存中的最小时长。缺省时长为 3600 秒（1 小时）。<br><br>即使高速缓存达到最大大小或所包含文件达到最大文件数，在最旧文件保存在高速缓存中的时间达到指定时长前，也不能删除该文件。",
		admin_p8_download_cache_size_threshold: "保留在高速缓存中的最小文件大小（以 KB 计）：",
		admin_p8_download_cache_size_threshold_hover: "指定用于高速缓存文件的 CDHC 的最小大小。如果一个文件小于指定的大小，那么该文件通过部署了 FileNet Collaboration Services 的 Web 应用程序服务器发送。缺省大小为 1000 KB。",
		admin_p8_download_guard_header: "用于把关的 HTTP 头：",
		admin_p8_download_guard_header_hover: "如果客户端应用程序未通过 IBM HTTP Server 传送请求，那么不能下载已缓存内容。可指定只有带有特定 HTTP 头（它会添加至来自 IBM HTTP Server 的请求）的入局请求才能访问已缓存内容以避免下载失败。<br><br>HTTP 头是在 IBM HTTP Server 中配置的，并且出现在通过 IBM HTTP Server 传送的所有入局请求上。如果请求没有 HTTP 头，那么内容通过 Web 应用程序服务器而不是 IBM HTTP Server 传送。",
		admin_p8_download_generate_config: "生成配置",
		admin_p8_download_generate_config_label: "IBM HTTP Server 配置：",
		admin_p8_download_generate_config_label_hover: "为使 CHDC 配置工作，必须更新 IBM HTTP Server httpd.conf 文件。单击“生成配置”来生成必须添加至 httpd.conf 文件的语句。",

		admin_logging_viewone_pro: "ViewONE Professional 日志记录：",
		admin_logging_viewone_virtual: "ViewONE Virtual 日志记录：",
		admin_logging_viewone_streamer: "“文档流处理服务器模块”日志记录：",
		admin_logging_viewone_streamer_hover: "仅当您在管理工具的 <b>Daeja ViewONE</b> 部分启用了对 PDF 文件或 TIFF 文件进行流处理时，“文档流处理服务器模块”日志记录选项才适用。",
		admin_logging_viewone_redaction: "“永久修订服务器模块”日志记录：",
		admin_logging_viewone_redaction_hover: "仅当您有权使用 Daeja ViewONE Professional 的“修订”模块时，“永久修订服务器模块”日志记录选项才适用。",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "流线化 PDF 文件：",
		admin_daeja_viewonepro_stream_pdf_hover_help: "如果存储库中有大型 PDF 文档，那么可以启用查看器以使文档内容流线化，从而便于用户更快速地查看这些文档。但是，如果流处理在您的环境中不工作，那么您可以禁用流处理。",
		admin_daeja_viewonepro_stream_tiff_documents: "流线化 TIFF 文件：",
		admin_daeja_viewonepro_stream_tiff_hover_help: "如果存储库中有大型 TIFF 文档，那么可以启用查看器以使文档内容流线化，从而便于用户更快速地查看这些文档。但是，如果流处理在您的环境中不工作，那么您可以禁用流处理。",
		admin_daeja_viewonepro_show_file_buttons: "文件按钮",
		admin_daeja_viewonepro_show_file_menus: "文件菜单",
		admin_daeja_viewonepro_enable_file_keys: "文件热键",
		admin_daeja_viewonepro_file_keys_hover_help: "指定您是否希望用户使用键盘快捷键来处理文件，例如，打开或者保存文件。有关特定热键的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual 中的 FileKeys 参数描述。",
		admin_daeja_viewonepro_show_print_buttons: "打印按钮",
		admin_daeja_viewonepro_show_print_menus: "打印菜单",
		admin_daeja_viewonepro_enable_print_keys: "打印热键",
		admin_daeja_viewonepro_print_keys_hover_help: "指定您是否希望用户使用键盘快捷键来打印文件，例如，打印页面或者打印文档。有关特定热键的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual 中的 PrintKeys 参数描述。",
		admin_daeja_viewonepro_show_invert_buttons: "反转按钮",
		admin_daeja_viewonepro_annotation_tooltip: "缺省定制注释工具提示：",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "输入在没有为定制注释指定工具提示时要显示的文本。文本可以包括可替换的标记。例如，“&lt;creator&gt; created this annotation on &lt;createdateonly&gt;.”。有关可替换标记的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual 中的 customAnnotationsToolTip 参数。",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "使用预定义定制工具提示",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "使用以下文本框中显示的系统定义的定制工具提示",
		admin_daeja_viewonepro_help_url: "帮助 URL：",
		admin_daeja_viewonepro_help_url_hover_help: "指定其中包含查看器的帮助文档的 Web 页面的 URL。查看器工具栏上的帮助按钮以及帮助菜单操作将打开 Web 页面。如果您未指定 URL，那么不会显示帮助按钮和菜单操作。",
		admin_daeja_viewonepro_image_stamp_resource_context: "图像戳记资源上下文：",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "待办事宜",
		admin_daeja_viewonepro_route_docs: "将不受支持的内容传递到浏览器：",
		admin_daeja_viewonepro_route_docs_hover_help: "用户可以通过以下方法来查看不受支持的图像文件：将这些文件传递到浏览器，这将打开适当的应用程序来查看该文件。例如，要打开 Microsoft Word 文档，浏览器将使用 Microsoft Word 查看器。",
		admin_daeja_viewonepro_scale: "自动调整到合适大小的图像：",
		admin_daeja_viewonepro_scale_best: "最合适",
		admin_daeja_viewonepro_scale_ftow: "适合宽度",
		admin_daeja_viewonepro_scale_ftoh: "适合高度",
		admin_daeja_viewonepro_enable_hotkeys: "启用热键：",
		admin_daeja_viewonepro_show_features: "显示按钮和菜单：",
		admin_daeja_custom_settings: "其他设置：",
		admin_daeja_custom_settings_hover_help: "可以通过指定参数名和值来添加其他参数。例如，如果您希望当图像大小缩放到超过显示区域时显示滚动条，那么可以指定“scrollbars”和“true”。 有关参数名和值的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual。",
		admin_daeja_virtual: "虚拟",
		admin_daeja_virtual_annotation_tooltip: "缺省定制注释工具提示：",
		admin_daeja_virtual_annotation_tooltip_hover_help: "输入在没有为定制注释指定工具提示时要显示的文本。文本可以包括可替换的标记。例如，“&lt;creator&gt; created this annotation on &lt;createdateonly&gt;.”。有关可替换标记的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual 中的 customAnnotationsToolTip 参数。",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "使用预定义定制工具提示",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "使用以下文本框中显示的系统定义的定制工具提示",
		admin_daeja_virtual_image_stamp_resource_context: "图像戳记资源上下文：",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "待办事宜",
		admin_daeja_virtual_license_path:"许可证文件路径：",
		admin_daeja_virtual_license_path_hover_help:"指定其中包含 lic-server-virtual.v1 和 lic-server.v1 许可证文件的目录的标准路径。",
		admin_default_license_path:"使用缺省许可证文件路径",
		admin_license_path_specified:"使用定制许可证文件路径",

		admin_daeja_streamer: "服务器",
		admin_daeja_streamer_cache_root: "高速缓存目录：",
		admin_daeja_streamer_cache_root_hover_help: "指定您想要将高速缓存的文件存储到的目录的标准路径，以便更快地访问这些文件。该目录可在任何操作系统或设备（例如，网络目录）上，它可显示为 IBM Content Navigator 和 IBM HTTP Server 的文件系统。使用本地目录来提升性能。",
		admin_daeja_streamer_settings: "其他设置：",
		admin_daeja_streamer_settings_hover_help: "可以通过指定参数名和值来添加其他参数。例如，可以指定“cookieAllowedDomainList”和以逗号分隔的主机服务器列表。有关参数名和值的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual。",

		admin_daeja_redaction: "永久修订",
		admin_daeja_redaction_settings: "设置：",
		admin_daeja_redaction_settings_hover_help: "可以通过指定参数名和值来添加其他参数。例如，可以指定“burnIncrementalAnnotations”和“true”。有关参数名和值的更多信息，请参阅 IBM Daeja ViewONE Parameters Reference Manual。",

		admin_daeja_setting_dialog_title_new: "新建设置",
		admin_daeja_setting_dialog_title_edit: "编辑设置",
		admin_daeja_setting_dialog_hover_help: "通过指定参数名和值来添加其他参数。如果您希望当图像大小缩放到超过显示区域时显示滚动条，那么可以指定“scrollbars”和“true”。",
		admin_daeja_setting_dialog_field_hover_help: "有关参数名和值的更多信息，请参阅 Daeja ViewONE Parameter Reference Manual。",

		admin_daeja_logging: "Daeja ViewONE 日志记录",
		admin_daeja_logging_trace: "启用跟踪日志记录",
		admin_daeja_logging_trace_net: "启用网络日志记录",
		admin_daeja_logging_trace_annotations: "启用注释日志记录",
		admin_daeja_logging_log_file: "日志文件：",
		admin_daeja_logging_instructions: "可以使用日志记录来对 Daeja ViewONE Professional 和 Daeja ViewONE Virtual 存在的问题进行故障诊断。如果您知道特定功能部件发生问题，那么可以对该功能部件进行日志记录。",

		admin_v1pro_logging_trace_hover: "使用此设置对查看器存在的常规问题进行故障诊断。<br><br>日志记录信息会写入客户端机器上的 Java 控制台。可以从操作系统的控制面板 (Windows) 或者系统首选项 (Mac) 来访问 Java 控制台。",
		admin_v1pro_logging_trace_net_hover: "使用此设置对下列问题进行故障诊断：<ul><li>服务器连接问题</li><li>MIME 类型问题</li><li>文件太长问题</li></ul>此外，可以使用网络跟踪日志记录来确定使用 Daeja ViewONE Professional 时产生延迟的位置。<br><br>日志记录信息会写入客户端机器上的 Java 控制台。可以从操作系统的控制面板 (Windows) 或者系统首选项 (Mac) 来访问 Java 控制台。",
		admin_v1pro_logging_trace_annotations_hover: "使用此设置对创建、保存或装入注释时产生的问题进行故障诊断。<br><br>日志记录信息会写入客户端机器上的 Java 控制台。可以从操作系统的控制面板 (Windows) 或者系统首选项 (Mac) 来访问 Java 控制台。",

		admin_virtual_logging_trace_hover: "使用此设置对查看器存在的常规问题进行故障诊断。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 virtual.log 文件。",
		admin_virtual_logging_trace_net_hover: "使用此设置对下列问题进行故障诊断：<ul><li>服务器连接问题</li><li>MIME 类型问题</li><li>文件太长问题</li></ul>此外，可以使用网络跟踪日志记录来确定使用 Daeja ViewONE Virtual 时产生延迟的位置。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 virtual.log 文件。",
		admin_virtual_logging_trace_annotations_hover: "使用此设置对创建、保存或装入注释时产生的问题进行故障诊断。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 virtual.log 文件。",
		admin_virtual_logging_log_file_hover: "如果您为查看器启用日志记录功能，那么您必须指定用于存储记录信息的日志文件的标准路径和名称。建议您将日志文件命名为 virtual.log。",

		admin_streamer_logging_trace_hover: "使用此设置对“文档流处理服务器模块”存在的常规问题进行故障诊断。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 streamer.log 文件。",
		admin_streamer_logging_trace_net_hover: "使用此设置对下列问题进行故障诊断：<ul><li>服务器连接问题</li><li>特定 MIME 类型问题</li><li>文件太长问题</li></ul>此外，可以使用网络跟踪日志记录来确定使用“文档流处理服务器模块”时产生延迟的位置。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 streamer.log 文件。",
		admin_streamer_logging_log_file_hover: "如果您为 Document Streaming Server Module 启用日志记录功能，那么您必须指定用于存储记录信息的日志文件的标准路径和名称。建议您将日志文件命名为 streamer.log。",

		admin_redaction_logging_trace_hover: "使用此设置对“永久修订服务器模块”存在的常规问题进行故障诊断。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 redacttofile.log 文件。",
		admin_redaction_logging_trace_net_hover: "使用此设置对下列问题进行故障诊断：<ul><li>服务器连接问题</li><li>特定 MIME 类型问题</li><li>文件太长问题</li></ul>此外，可以使用网络跟踪日志记录来确定使用“永久修订服务器模块”时产生延迟的位置。<br><br>缺省情况下，日志记录信息会写入 IBM Content Navigator 安装目录的 config 子目录中的 redacttofile.log 文件。",
		admin_redaction_logging_log_file_hover: "如果您为 Permanent Redaction Server Module 启用日志记录功能，那么您必须指定用于存储记录信息的日志文件的标准路径和名称。建议您将日志文件命名为 redacttofile.log。",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "为查看器和服务配置功能部件。",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "如果使用 Web 客户端连接至一个或多个 Content Manager OnDemand 存储库，那么必须指定 OnDemand Web Enablement Kit 正常工作所需的信息。此信息由针对 Web 客户端配置的所有 Content Manager OnDemand 存储库共享。",
		admin_ondemand_language: "语言：",
		admin_ondemand_tempdir: "ODWEK 临时目录：",
		admin_ondemand_tracegrp: "ODWEK 跟踪",
		admin_ondemand_tracedir: "跟踪目录：",
		admin_ondemand_tracelevel: "跟踪级别：",
		admin_ondemand_tracelevel_0: "0 - 无日志记录",
		admin_ondemand_tracelevel_1: "1 - 错误消息日志记录",
		admin_ondemand_tracelevel_2: "2 - 错误和警告消息日志记录",
		admin_ondemand_tracelevel_3: "3 - 错误、警告和参考消息日志记录",
		admin_ondemand_tracelevel_4: "4 - 捕获所有消息（包括功能跟踪）",
		admin_ondemand_max_trace_filesize: "跟踪文件的最大大小：",
		admin_ondemand_max_trace_filesize_unlimited: "无限制",
		admin_ondemand_max_trace_filesize_limited: "有限制（建议）",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "该值已超出范围。该值必须是介于 1 和 1,000,000 之间的整数。",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF 安装目录：",
		admin_ondemand_language_hover: "指定 ODWEK 返回消息时所使用的语言。",
		admin_ondemand_tempdir_hover: "请输入 OnDemand Web 启用工具箱在处理期间用于存储临时文件的目录。必须输入 Web 应用程序服务器上现有目录的标准路径。",
		admin_ondemand_tracedir_hover: "请输入您要在其中存储 ODWEK 跟踪文件 arswww.trace 的目录。必须输入 Web 应用程序服务器上现有目录的标准路径。",
		admin_ondemand_tracelevel_hover: "请指定写入 arswww.trace 文件的日志记录信息的级别。<b>错误消息日志记录</b>将捕获最少的日志记录信息量。<b>捕获所有消息（包括功能跟踪）</b>将捕获最多的信息。<br /><br />请不要在生产环境中指定<b>捕获所有消息（包括功能跟踪）</b>，除非 IBM 软件支持机构指示您这样操作。",
		admin_ondemand_max_trace_filesize_hover: "指定是否要允许 ODWEK 跟踪文件增长到不受限制的大小，或当日志文件达到一定大小时是否想让 Web 客户端创建新的日志文件。在缺省情况下，允许跟踪日志文件增长，直到 Web 应用程序在 Web 应用程序服务器上停止运行。",
		admin_ondemand_max_trace_unlimited_hover: "如果要将 ODWEK 跟踪信息写入到单一日志文件，请选择此选项。如果选择此选项，那么您拥有的日志文件可能过大，无法使用标准文件查看器打开该日志文件。",
		admin_ondemand_max_trace_limited_hover: "如果要将 ODWEK 跟踪信息写至较小的日志文件，请选择此选项。如果日志文件达到最大大小，那么当前日志将重命名以包括日期 (arswww.trace.YYYYMMDD.HHMMSS) 并创建新日志文件。",
		admin_ondemand_afp2pdf_installdir_hover: "如果要使用 AFP2PDF 转换实用程序将 AFP 文档转换为 PDF 文档以进行查看和打印，请指定 AFP2PDF 转换实用程序在 Web 应用程序服务器上的安装目录。例如：C:\\Program Files\\IBM\\AFP2web\\afp2pdf。",

		admin_adminusers: "管理员",
		admin_adminusers_heading_text_multi: "您必须指定在 Web 客户端中具有管理特权的用户。只有管理员才能登录管理桌面。<br /><br /><b>要点：</b>IBM Content Navigator 管理员的用户标识必须匹配：<ul><li>存在于 Web 应用程序服务器上的用户标识。这些用户标识在 Web 应用程序服务器上不必是管理员。</li><li>存在于针对包括管理功能的每一个桌面所配置的缺省存储库上的用户标识。</li></ul>",
		admin_adminusers_heading_text_single: "您必须指定在 Web 客户端中具有管理特权的用户。只有管理员才能登录管理桌面。<br /><br /><b>要点：</b>IBM Content Navigator 管理员的用户标识必须与 Web 应用程序服务器上存在的用户标识相匹配。这些用户标识在 Web 应用程序服务器上不必是管理员。",
		admin_adminusers_newuser: "新建管理员：",
		admin_adminusers_add: "添加",
		admin_adminusers_remove: "移除",
		admin_adminusers_listheading: "管理员",
		admin_adminusers_nameInvalid: "该值不能复制。",

		admin_sync_server_instructions: "<b>仅适用于 FileNet P8 用户：</b>如果您打算对一个或多个存储库启用同步服务，那么必须将 Web 客户端配置为使用同步服务。同步服务配置供您所在环境中的所有存储库共享。",
		admin_settings_instructions: "您在“设置”选项卡上指定的值将应用于您配置中的所有桌面。",
		admin_autocomplete: "自动填充用户名：",
		admin_autocomplete_hover: "指定是否要让 Web 客户端在浏览器 cookie 中存储用户名，以在登录时允许浏览器在 Web 客户端中自动填充用户名。<br><br>如果启用此选项，那么登录 Web 客户端的最后一个用户的用户名将存储在浏览器 cookie 中，并在用户打开 Web 客户端时自动显示在“登录”页面上。<br><br>如果是从共享工作站访问应用程序，或者如果您担心在浏览器 cookie 中存储用户名，那么应该禁用此选项。<br /><br />此选项不适用于移动或定制应用程序。",
		admin_autocomplete_enable: "启用",
		admin_autocomplete_disable: "禁用",
		admin_cultural_collation: "使用特定于语言环境的排序：",
		admin_cultural_collation_hover: "如果启用特定于语言环境的排序，那么排序在存储库服务器上完成。这会降低 Web 客户端的性能。<br><br>禁用特定于语言环境的排序可以提升 Web 客户端的性能。",
		admin_cultural_collation_enable: "启用",
		admin_cultural_collation_disable: "禁用",
		admin_base_ui_style: "主题样式",
		admin_base_ui_style_hover: "指定 Web 客户机中使用的缺省主题的样式。此样式仅在使用<b>缺省</b>主题（如桌面配置的<b>外观</b>选项卡中指定）的桌面上使用。<br/></br><b>限制：</b>如果桌面配置使用定制主题，那么无论您选择何种样式，定制主题都将基于经典样式。",
		admin_base_ui_style_classic: "经典",
		admin_access_control_access: "将访问限制为特定用户和组",
		admin_access_control_access_show: "显示访问控制数据",
		admin_access_control_access_enable: "是",
		admin_access_control_access_disable: "否",
		admin_mobile_access: "允许从移动应用程序访问",
		admin_mobile_access_hover: "缺省情况下，用户可以从 IBM Content Navigator iOS 应用程序访问 Web 客户端。<br /><br /><b>要点：</b>如果您阻止用户从 iOS 应用程序访问 Web 客户端，那么用户仍可从其移动设备上的 Web 浏览器及从通过使用 IBM Content Navigator API 写入并在移动设备上工作的任何定制应用程序访问 Web 客户端。",
		admin_mobile_access_enable: "是",
		admin_mobile_access_disable: "否",
		admin_error: "错误消息信息：",
		admin_error_custom: "搜索定制支持内容",
		admin_error_default: "搜索 IBM Support 内容<BDO DIR='LTR'>（</BDO>缺省<BDO DIR='LTR'>）</BDO>",
		admin_error_hover: "指定当显示错误消息时，用户可以访问哪些位置以了解更多信息。可引导用户访问 IBM Support Portal 上的信息，也可引导用户访问内部资源，例如，技术支持。",
		admin_error_URL: "URL 前缀：",
		admin_error_URL_hover: "输入您希望在用户遇到错误时引导用户访问的资源的 URL，例如，技术支持。例如：http://localhost:port_number。该 Web 客户端将消息编号附加至 URL。",
		admin_prompt_close_without_save: "您要关闭而不保存更改吗？",
		admin_object_expiration_time: "高速缓存刷新时间间隔（以分钟计）：",
		admin_object_expiration_time_hover: "您可以增加将配置对象（例如桌面）保留在高速缓存中的时间量，以提升 Web 客户端的性能。缺省时间为 10 分钟。最大时间为 1440 分钟（1 天）。<br /><br />必须重新启动 Web 应用程序才能使更改生效。<br /><br />如果将 IBM Content Navigator 部署在高度可用的集群环境中，那么不会将配置对象的任何更改传播到集群中的节点，直到刷新高速缓存为止。",
		admin_temp_file_cleanup_interval: "清除查看器高速缓存的扫描时间间隔（以小时计）：",
		admin_temp_file_cleanup_interval_hover: "安排扫描临时目录以查找和删除到期临时文件的频率。缺省情况下，每 6 小时扫描一次临时目录。您可以指定 6 - 48 个小时。",
		admin_temp_file_expiration_interval: "查看器高速缓存到期时间（以小时计）：",
		admin_temp_file_expiration_interval_hover: "指定与查看器中活动相关的临时文件在浏览器高速缓存中保留的时间量。缺省情况下，这些临时文件在 24 小时后到期。您可以指定 12 - 48 个小时。",
		admin_encryption_key_hover: "用于 Navigator 加密功能的密钥。",
		admin_encryption_key: "加密密钥：",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "标记",
		admin_mobile_branding_main_color: "主要颜色：",
		admin_mobile_branding_secondary_color: "次要颜色：",
		admin_mobile_device_title: "MaaS360 管理",
		admin_mobile_device_enable_maas360: "启用 MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "启用在此处显示 MaaS360 悬浮式帮助",
		admin_mobile_device_maas360_developer_id: "MaaS360 开发者标识：",
		admin_mobile_device_maas360_license_key: "MaaS360 许可证密钥：",
		admin_mobile_settings_title: "设置",
		admin_mobile_email_address_hover_help: "用户单击“发送错误报告”时，在移动应用程序中使用电子邮件地址。",
		admin_mobile_email_address: "电子邮件地址：",
		admin_invalid_email_address_message: "所输入的电子邮件地址的格式不正确。请输入正确的地址，然后重试。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "某些数据无效。",
		admin_configuration_parameters: "配置参数",
		admin_configuration_optional_features: "可选功能部件",
		admin_configuration_optional_features_p8_instructions: "选择您想要在此存储库中启用的功能部件。<p><b>要点：</b>如果您启用一个将附加组件安装至存储库的功能部件，那么您必须作为 Content Platform Engine 或 Content Engine 管理员连接至该存储库。</p>",
		admin_configuration_optional_features_cm_instructions: "选择您想要在此存储库中启用的功能部件。<p><b>要点：</b>这些功能部件将修改存储库中的数据模型。要启用这些功能部件，您必须作为库服务器管理员连接至该存储库。</p>",
		admin_system_properties: "系统属性",
		admin_system_properties_for: "以下内容的系统属性：",
		admin_available_properties: "可用属性",
		admin_displayed_properties: "显示的属性",
		admin_selected_properties: "所选属性",
		admin_selected_filtered_properties: "隐藏的属性",
		admin_available_operators: "所显示的运算符",
		admin_selected_filtered_operators: "隐藏的运算符",
		admin_system_properties_shown: "显示的属性",
		admin_system_properties_hidden: "隐藏的属性",
		admin_available_menu_items: "可用操作：",
		admin_selected_menu_items: "已选操作：",
		admin_menu_global: "适用于未选择任何项时：",
		admin_menu_multiple_document: "适用于已选择多个项时：",
		admin_menu_privileges: "必需的特权：",
		admin_menu_plugin: "插件：",
		admin_menu_repository_types: "存储库类型：",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "分隔符",
		admin_browse: "浏览",
		admin_search: "搜索",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "基于角色的修订",
		admin_connections_library_enabled: "已启用 IBM Connections",
		admin_office_conf: "编辑集成",
		admin_desktop_conf_label: "桌面配置",
		admin_ms_office_conf_label: "Office 配置",
		admin_workflows: "工作流程",
		admin_file_types: "文件类型",
		admin_file_type_contains_label: "文件类型包含",
		admin_name_propepty: "名称",
		admin_cm_name_property_default: "使用缺省名称",
		admin_cm_name_property_default_hover: "缺省情况下，如果为项定义了 ICM 分层名称 (ICM$NAME) 属性，那么会将该属性用作项名称。如果 ICM 分层名称 (ICM$NAME) 属性不可用，那么会将第一个标记为“代表”的属性用作项名称。",
		admin_cm_name_property: "指定项名称属性",
		admin_cm_name_property_hover: "指定将哪个属性用作文档和文件夹的名称。",
		admin_name_property: "名称属性：",
		admin_doc_name_property: "文档名属性：",
		admin_doc_name_property_hover: "指定作为文档名称使用的属性。",
		admin_folder_name_property: "文件夹名属性：",
		admin_folder_name_property_hover: "指定作为文件夹名称使用的属性。",
		admin_all_searches_label: "要显示的搜索数：",
		admin_unlimited: "无限制",
		admin_limit: "限制为",
		admin_repository: "存储库：",
		admin_application_space: "应用程序空间",
		admin_available_application_spaces: "可用的应用程序空间：",
		admin_selected_application_spaces: "所选应用程序空间：",
		admin_label: "标签",
		admin_repository_box_placeholder: "选择 Box 存储库",
		admin_repository_placeholder: "选择存储库",
		admin_search_match: "匹配：",
		admin_search_match_all: "匹配所有搜索条件",
		admin_search_match_any: "匹配任意搜索条件",
		admin_search_match_hover: "指定缺省情况下在<b>属性选项</b>菜单中会选择哪个选项。",

		admin_repository_redactions_instructions: "可以为此存储库配置基于角色的修订。",
		admin_repository_redaction_policies_description: "可以创建和管理修订策略，这些策略使修订原因与能够读取敏感数据及可编辑注释以避免显示敏感数据的注释的用户和组相关联。",
		admin_repository_redaction_roles_instruction: "可以创建修订角色，以将所指定的用户和组与读取敏感数据或编辑注释以避免显示敏感数据的能力相关联。该修订角色必须与修订策略中的修订原因相关联，这些用户和组才能读取该数据或编辑这些注释。",
		admin_repository_redaction_reasons_instruction: "可以为存储库配置修订原因。",
		admin_repository_redaction_policies: "修订策略配置",
		admin_repository_redaction_roles: "修订角色配置",
		admin_repository_redaction_reasons: "修订原因配置",
		admin_repository_redaction_roles_type: "类型",
		admin_repository_redaction_roles_type_hover: "使用编辑器可以创建、修改或者删除特定类型的基于角色的修订，而使用查看器可以查看特定类型的敏感数据。",
		admin_repository_redaction_roles_type_editor: "编辑人员",
		admin_repository_redaction_roles_type_viewer: "查看者",
		admin_repository_redaction_roles_membership: "成员资格",
		admin_repository_redaction_roles_membership_hover: "选择您想要具有此角色的编辑器。",
		admin_repository_redaction_roles_user_group_hover: "搜索用户和组，或者选择您想要具有此角色的编辑器。",
		admin_repository_redaction_roles_description: "您可以创建和管理修订角色，这些修订角色使用户和组与读取敏感数据及编辑注释以避免显示敏感数据的能力相关联。",
		admin_repository_redaction_new: "新建修订角色",
		admin_repository_redaction_role_avail_editors: "可用修订编辑器",
		admin_repository_redaction_role_avail_users: "可用用户",
		admin_repository_redaction_role_avail_groups: "可用组",
		admin_repository_redaction_role_selected_editors: "所选择的修订编辑器",
		admin_repository_redaction_role_selected_users_groups: "所选择的用户和组",
		admin_repository_redaction_role_add_editor: "新的编辑器...",
		admin_repository_redaction_role_access_type: "访问",
		admin_repository_redaction_role_access_type_access: "允许",
		admin_repository_redaction_role_access_type_no_access: "拒绝",
		admin_repository_redaction_role_users: "用户",
		admin_repository_redaction_role_groups: "组",
		admin_repository_redaction_role_editors: "编辑者",
		admin_delete_confirmation_redaction_roles: "要删除所选择的修订角色吗？",
		admin_repository_edit_redaction_role: "修订角色：<b>${0}</b>",
		admin_repository_redaction_role_add_as: "缺省访问",
		// RBA
		desktop_user_group_acl: "桌面管理员",
		desktop_user_group_remove: "移除",
		desktop_rba_membership: "成员资格：",
		desktop_rba_membership_list_label: "名称",
		admin_repository_redaction_policy_hover: "请提供使用户能够将此策略与其他策略区别开的描述。",
		admin_repository_new_redaction_policy: "新建修订策略",
		admin_repository_policy_name: "策略名称",
		admin_repository_reason_redactions: "修订原因：",
		admin_repository_role_editors: "编辑者",
		admin_repository_role_viewers: "查看器",
		admin_repository_redaction_policy_instruction: "可以创建修订策略，以使所选择的修订原因与修订编辑器和修订查看器相关联。",
		admin_repository_redaction_reasons_hover: "选择您不希望大多数用户能够查看的一种或多种类型的敏感数据，例如，个人可标识的信息、商业秘密或者属于贵公司机密或专有的信息。",
		admin_repository_readaction_available_reasons: "可用原因",
		admin_repository_readaction_selected_reasons: "所选择的原因",
		admin_repository_readaction_new_reason: "新的原因...",
		admin_repository_redeaction_reasons: "修订原因：",
		admin_repository_readaction_editor_permmission: "修订编辑器：",
		admin_repository_redaction_editors_hover: "选择可以创建和修改所选原因的修订的角色。",
		admin_repository_readaction_new_editor_role: "新的编辑器角色...",
		admin_repository_readaction_available_editors: "可用的编辑器角色",
		admin_repository_readaction_selected_editors: "所选择的编辑器角色",
		admin_repository_readaction_viewer_permmission: "修订查看器：",
		admin_repository_redaction_viewers_hover: "选择可以查看所选原因的敏感数据的角色。修订不适用于具有这些角色的用户和组。",
		admin_repository_readaction_new_viewer_role: "新的查看器角色...",
		admin_repository_readaction_available_viewers: "可用的查看器角色",
		admin_repository_readaction_selected_viewers: "所选择的查看器角色",
		admin_repository_reason_redactions_header: "修订原因",
		admin_delete_confirmation_redaction_policy: "要删除所选择的修订策略吗？",
		admin_role_type_repository: "存储库",
		admin_role_type_administrator: "管理员",
		admin_role_type_template: "模板",
		admin_role_type_teamspace: "团队空间",
		admin_role_type_author: "编辑人员",
		admin_role_type_user: "查看者",
		admin_collaboration_services_instructions: "如果您有 IBM Connections 和 FileNet Collaboration Services Web 应用程序，那么您可为存储库配置社区团队空间和活动流。",
		admin_collaboration_services: "FileNet Collaboration Services：",
		admin_collaboration_community: "社区文档库配置",
		admin_collaboration_community_instruction: "您可以在 IBM FileNet P8 域中配置一个存储库以存储 IBM Connections 社区文档库（也称为团队空间）。用户通过 IBM Connections 创建社区文档库时，该库存储在指定为社区文档库存储库的存储库上。",
		admin_collaboration_community_teamspaces: "对社区文档库使用此存储库：",
		admin_collaboration_community_teamspaces_hover: "只能在 IBM FileNet P8 域中使用一个存储库来存储新社区文档库。如果启用此存储库并且已有存储库，那么系统将禁用现有存储库。但是，任何现有库将保留在当前存储库上。",
		admin_collaboration_connections_anonymous: "允许对公共内容进行匿名访问：",
		admin_collaboration_connections_anonymous_hover: "如果 IBM Connections 服务器包含公共社区或审核社区，那么您可配置 FileNet Collaboration Services 以允许用户浏览和下载这些社区的库中的内容而不必先登录。<br><br>匿名访问社区文档库的用户不能创建、修改或删除内容。<br><br><b>要点：</b>您必须将 IBM FileNet P8 LDAP 用户指定为匿名用户并在 WebSphere Application Server 中将该用户配置为<b>匿名</b>角色。",
		admin_collaboration_connections_url: "IBM Connections URL：",
		admin_collaboration_connections_url_hover: "使用 http://IBMConnectionsServer:port_number 格式指定 IBM Connections 服务器的 URL。如果 IBM Connections 配置为使用 IBM HTTP Server，那么您可在 URL 中省略端口号。<br><br>该 URL 必须对 IBM Connections 用户可访问，因为这是 FileNet Collaboration Services 用于在 IBM Connections 中创建文档登录页面链接的链接。",
		admin_collaboration_connections_url_http_use: "使用 IBM Connections URL",
		admin_collaboration_connections_url_https_use: "使用 IBM Connections HTTPS URL",
		admin_collaboration_connections_url_specify: "指定 URL",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL：",
		admin_collaboration_connections_url_https_hover: "如果 IBM Connections 已配置为使用 SSL，请使用 https://IBMConnectionsServer:port_number 格式指定 IBM Connections 服务器的 HTTPS URL。如果 IBM Connections 配置为使用 IBM HTTP Server，那么您可在 URL 中省略端口号。",

		admin_collaboration_connections_gadget_url: "IBM Connections 配件 URL：",
		admin_collaboration_connections_retrieval_url: "IBM Connections 检索 URL：",
		admin_collaboration_connections_security: "社区管理员：",
		admin_collaboration_connections_security_hover: "指定可管理社区文档库中的内容的用户和组。<br><br>全局管理员可以创建、修改、删除社区文档库及其内容，还可以提供对于社区文档库及其内容的访问权。将用户指定为全局管理员时，该用户在存储库中被授予 ClbGlobalAdministrator 特权。<br><br>全局复审管理员可以批准和拒绝正在复审以便在社区文档库中发布的内容。将用户指定为全局复审管理员时，该用户在存储库中被授予 ClbGloablReviewAdministrator 特权。",

		admin_collaboration_connections_admins: "全局管理员",
		admin_collaboration_connections_admins_review: "全局复审管理员",
		admin_collaboration_connections_seedlist: "对社区文档库内容建立索引：",
		admin_collaboration_connections_seedlist_hover: "指定是否希望 IBM Connections 在此存储库中搜寻社区文档库以创建搜索索引。创建索引会影响存储库的性能。<br><br>如果存储库上安装了 Social Collaboration Search Indexing Extensions，那么缺省情况下会启用此选项。如果未在存储库上安装 Social Collaboration Search Indexing Extensions，那么您启用此选项时会在存储库上安装该附加组件。",
		admin_collaboration_activity_stream: "活动流事件配置",
		admin_collaboration_activity_stream_label: "将事件信息推送至 IBM Connections：",
		admin_collaboration_activity_stream_label_hover: "指定是否要将事件信息（例如，文档创建、检出、检入、注释、标记和共享）推送至 IBM Connections。<br><br><b>要点：</b>将通知推送至 IBM Connections 会影响存储库的性能。",

		admin_collaboration_activity_stream_instruction: "您可以配置此存储库以将事件信息（例如，注释和文档审批）推送至 IBM Connections。事件显示在 IBM Connections 社区中的<b>最近更新</b>页面上。",
		admin_collaboration_activity_stream_ignored_ids: "忽略特定用户和组的事件信息：",
		admin_collaboration_activity_stream_ignored_ids_hover: "您可以忽略特定用户或组（例如，管理员或系统帐户）生成的事件以减少用户见到的通知数。例如，如果您正在迁移内容，那么您可能希望指定忽略用于迁移的帐户生成的事件。",
		admin_collaboration_activity_stream_userid: "IBM Connections 用户名：",
		admin_collaboration_activity_stream_userid_hover: "指定 Content Platform Engine 用于向 IBM Connections 认证并发送事件信息的系统帐户。该用户在 IBM Connections 的“窗口小部件容器”应用程序中必须为 <b>trustedExternalApplication</b> 角色。<br><br><b>提示：</b>缺省情况下，IBM Connections 管理员具有适当特权。可将管理员标识用作用户名",
		admin_collaboration_activity_stream_password: "IBM Connections 用户密码：",

		admin_help_url: "最终用户帮助 URL：",
		admin_help_url_hover: "<b>重点：</b>从 IBM Content Navigator V3.0.0 开始，IBM Knowledge Center Customer Installed 将不会更新。请联系客户服务以了解有关使用定制帮助的更多信息。<br><br>从 IBM Content Navigator V3.0.0 开始，最终用户帮助的 URL 将转至 IBM Knowledge Center。IBM Knowledge Center 的 URL 为：http://www.ibm.com/support/knowledgecenter。<br><br>如果您想要继续使用先前版本的 IBM Knowledge Center Customer Installed，请指定 IBM Content Navigator Configuration and Deployment Tool 所部署的 IBM Knowledge Center Customer Installed 实例的 URL。该 URL 必须可供客户端机器访问。该 URL 具有以下格式：http://server_name:port_number/kc。<br><br>可以从 IBM Content Navigator 安装目录的 KnowledgeCenter/logs 子目录中的 console.log 文件中获取服务器名称和端口号。",

		admin_help_default: "使用由 IBM 提供的缺省帮助",
		admin_custom_help: "使用定制帮助系统",
		admin_help_kc: "使用 IBM Knowledge Center Customer Installed 中的定制帮助",
		admin_help_kc_hover: "<b>重点：</b>从 IBM Content Navigator V3.0.0 开始，IBM Knowledge Center Customer Installed 将不会更新。请联系客户服务以了解有关使用定制帮助的更多信息。<br><br>如果您想要继续使用先前版本的 IBM Knowledge Center Customer Installed，请选择此选项以继续将内容添加至先前所部署的 IBM Knowledge Center Customer Installed 实例。",
		admin_help_taxonomy: "分类法代码：",
		admin_help_taxonomy_hover: "指定定制帮助的分类法代码。<br><br>IBM Content Navigator 的分类法代码为 SSEUEX。如果您想要在 IBM Knowledge Center Customer Installed 中以另外的产品名称显示帮助，那么必须将唯一的分类法代码添加至 IBM Content Navigator 安装目录的 KnowledgeCenter/usr/taxonomy 目录中的 KC_taxonomy.ditamap 文件。",
		admin_help_context: "帮助上下文：",
		admin_help_context_hover: "指定定制帮助的上下文。<br><br>IBM Content Navigator 的帮助位于 IBM Content Navigator 安装目录的 KnowledgeCenter/usr/content/com.ibm.usingeuc.doc 目录中。缺省帮助的上下文为  com.ibm.usingeuc.doc。如果您想要提供定制帮助，请将内容添加至 KnowledgeCenter/usr/content/ 目录中的新子目录。",
		admin_help_welcome: "登录页面：",
		admin_help_welcome_hover: "指定您想要在用户访问帮助时用作登录页面的主题的名称。您必须创建用于指定登录页面位置的属性文件，并将该属性文件添加至 IBM Content Navigator 安装目录的 KnowledgeCenter/usr/conf 目录。",

		admin_settings_mimetype_extensions_jsonfile: "MIME 类型扩展 JSON 文件：",
		admin_settings_mimetype_extensions_jsonfile_hover: "验证 JSON 文件名和该文件的完整路径。该文件可以是文件系统的常规文件，也可以是指向 JSON 文件的URL。<br><br>JSON 文件内容是 MIME 类型定义的数组。<br><br>MIME 类型定义包含四个关键字“mimeTypes”、“extensions”、“fileType”以及“iconName”。前两个关键字“mimeTypes”和“extensions”是必需的，并且它们是可以用“,”分隔的字符串数组。后两个关键字“fileType”和“iconName”是可选项。<br><br>例如：<br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "任务管理器配置",
		admin_taskmanager_service: "任务管理器服务：",
		admin_taskmanager_service_hover: "指定您是否要使用任务管理器服务来创建和运行异步任务。<br><br>如果您更改此设置，那么必须重新启动 Web 应用程序 IBM Content Navigator 才能使更改生效。",
		admin_taskmanager_url: "任务管理器服务 URL：",
		admin_taskmanager_url_hover: "指定其他应用程序可以用来与任务管理器服务进行通信的 URL。该 URL 具有以下格式：http://server_name:port_number/taskManagerWeb/api/v1。",
		admin_taskmanager_logdirectory: "任务管理器日志目录：",
		admin_taskmanager_logdirectory_hover: "缺省情况下，会将任务管理器服务的日志文件与 Web 应用程序服务器日志文件写入同一目录。<br><br>如果您想要将日志记录信息写入 IBM Content Navigator 服务器上的其他目录，请指定您想要将任务管理器组件所生成的日志文件存储到的目录的标准路径。<br><br>如果您更改此设置，那么必须重新启动 Web 应用程序 IBM Content Navigator 才能使更改生效。",
		admin_taskmanager_heartBeatMonitor: "集群脉动信号监视",
		admin_taskmanager_heartBeatMonitor_hover: "仅适用于高可用的集群环境。如果您启用此选项，那么任务管理器服务会将当前关闭的节点中的任务重新传递到当前正在运行的节点。<br><br>如果您更改此设置，那么必须重新启动 Web 应用程序 IBM Content Navigator 才能使更改生效。",

		admin_syncserver_title: "同步服务器配置",
		admin_syncserver_enable: "同步服务：",
		admin_syncserver_enable_hover: "指定您是否希望访问此桌面的用户能够在他们的工作站和移动设备上使他们的项同步。<br><br><b>要点：</b>要使用此功能部件，您还必须完成下列任务：<ul><li>在管理工具的 <b>Sync Services</b> 部分指定<b>同步服务公用 URL</b>。</li><li>将为其启用了同步服务的存储库添加至此桌面。</li></ul>如果您禁用了此选项，但是将为其启用了同步服务的存储库添加至此桌面，那么会忽略存储库的设置。",
		admin_mobileqr_enable: "在登录页面上显示 IBM Navigator QR 代码：",
		admin_mobileqr_enable_hover: "如果您想要在 Web 客户机登录页面上显示 IBM Navigator 移动应用程序的 QR 代码，请启用此选项。<br><br>用户扫描 QR 代码时，系统会将他们引导至对应其设备的应用商店，他们可在其中下载 IBM Navigator 移动应用程序。",

		admin_streamlineservice_enable: "Edit Service：",
		admin_streamlineservice_enable_hover: "仅适用于 FileNet P8 用户。如果您希望桌面用户能够通过其工作站上的本机应用程序轻松添加和编辑文档，请选择此选项。<br><br>要使用此设置，还必须执行以下操作：<ul><li>对与此桌面相关联的一个或多个存储库启用 Edit Service </li><li>在用户工作站上安装 IBM Content Navigator Edit 客户机</li></ul>",

		admin_repository_general_instructions: "必须先连接存储库，才能配置参数、系统属性以及文件夹等等。",
		admin_repository_system_instructions: "指定哪些系统属性要针对此存储库上的文档和文件夹而显示。",

		admin_desktop_general_create_instructions: "桌面确定用户在登录 Web 客户端时可查看的内容及可执行的操作。创建桌面之后，您可以将桌面 URL 发送给用户以便他们可以访问该桌面。",
		admin_desktop_admin_instructions: "管理桌面随 Web 客户端提供以允许管理用户设置 Web 客户端。此桌面有权访问为 Web 客户端配置的所有存储库。",
		admin_desktop_repositories_instructions: "指定您要允许用户从此桌面访问哪些存储库。必须先配置存储库，才能将它们添加到桌面。<br><br><b>提示：</b>您可以限制在配置桌面布局时对每个功能部件可用的存储库。",
		admin_desktop_menus_instructions: "指定您要允许用户从此桌面访问哪些菜单。这些菜单会根据界面中所选的内容来指定可用的操作。<br><br><b>提示：</b>您可以在管理工具的<b>菜单</b>部分中定制菜单的内容，也可以通过创建插件来创建新类型的菜单。",

		admin_desktop_no_repositories: "未配置任何存储库。",

		admin_desktop_id_hover: "桌面标识包括在 Web 客户端 URL 中，用于指定用户登录 Web 客户端时打开的桌面。该标识必须是唯一的，并且保存桌面后不能更改该标识。<br><br>该标识只能包含字母数字字符，并且区分大小写。",
		admin_desktop_id_disabled_hover: "无法更改桌面标识。如果要使用其他标识，那么必须创建新桌面。",
		admin_desktop_name_hover: "桌面名不能包含下列字符：* \\ / : ? \" < > |",
		admin_desktop_default_hover: "您的配置只能包含一个缺省桌面。",

		admin_repository_id_disabled_hover: "无法更改存储库标识。如果要使用其他标识，那么必须创建新存储库连接。",
		admin_printService_enable: "使用 IBM Daeja ViewONE 打印服务进行打印：",
		admin_printService_enable_hover: "如果选择启用 IBM Daeja ViewONE 打印服务，那么文档会转换为 PDF 格式，并且打印操作可以使用任何 Web 浏览器来完成。<br><br>如果选择禁用 IBM Daeja ViewONE 打印服务，那么您只能在支持 Java Applet 的 Web 浏览器中打印文档。某些 Web 浏览器不支持 Java Applet，因此不支持 Applet 打印。<br><br>请参阅受支持浏览器的文档。",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "用户主目录",
		admin_file_tracking_doc_directory_my_documents: "用户文档目录",
		admin_file_tracking_doc_directory_qp: "限定路径",
		admin_file_tracking_section_tile: "文件跟踪配置",
		admin_file_tracking_home_path: "主路径",
		admin_file_tracking_my_documents: "我的文档",
		admin_file_tracking_exact_path: "标准路径：",
		admin_file_tracking_qp: "限定路径",
		admin_file_tracking_ev: "环境变量",
		admin_file_tracking_ev_us: "定制环境变量",
		admin_file_tracking_del_local_copy: "删除本地副本：",
		admin_file_tracking_yes: "是",
		admin_file_tracking_no: "否",
		admin_file_tracking_del_local_copy_rt_state_editable: "允许用户覆盖此设置",
		admin_file_tracking_del_local_copy_rt_state1: "是",
		admin_file_tracking_del_local_copy_rt_state2: "否",
		admin_file_Tracking_label: "文件跟踪：",
		admin_file_Tracking_disable: "禁用",
		admin_file_Tracking_enable: "启用",
		admin_file_tracking_label_hover_help: "文件跟踪使用 applet 来检出文档并将其下载至用户机器上的特定目录。此 applet 还允许 IBM Content Navigator 在用户检入文档时在用户机器上查找文档。",
		admin_file_tracking_doc_directory: "存储位置：",
		admin_file_tracking_open_file: "自动打开文件",
		admin_file_Tracking_append_qualified_path: "附加目录",
		admin_file_Tracking_append_qualified_path_hover_help: "如果要将文档保存至特定子目录，那么可将目录附加至环境变量结尾。<br/><br/>例如，可指定文档下载至用户主目录中的 <i>EnterpriseDocuments</i> 目录。",
		admin_file_Tracking_append_ev: "附加环境变量",
		admin_file_Tracking_append_ev_hover_help: "如果您要将文档保存在动态指定的目录（例如，用户目录）中，那么可附加环境变量。<br/><br/>例如，可指定文档存储在共享网络目录上的 <i>user_name</i> 子目录中。",
		admin_file_tracking_doc_directory_hover_help: "指定检出和下载文档时应存储文档的位置。<br/><br/> <b>提示</b>：如果您要在用户的主目录或缺省文档目录中存储文档，请选择<b>环境变量</b>，它包含指向这些位置的预定义变量。",
		admin_file_tracking_qualified_path_hover_help: "对 Windows 或 Mac 操作系统使用适当的目录结构来指定要在其中存储文档的目录或网络目录。<ul><li>对于  Windows，请在路径中包括盘符，例如，C:\\Enterprise Documents。</li><li>对于共享网络目录，请输入以下格式的路径：\\\\servername\\directory</li></ul><br/><b>要点：</b>要使用此选项，必须能够在环境中的所有客户端工作站上创建您指定的目录结构。",
		admin_file_tracking_environment_variable_path_hover_help: "对 Windows 或 Mac 操作系统使用适当的环境变量来指定要在其中存储文档的目录或网络目录。<br/><br/><b>用户主目录</b>选项将文档存储在以下目录中：<br/><ul><li>Windows：C:\\Users\\User_name</li><li>Mac：/Users/User_name</li></ul><br/><b>用户文档目录</b>选项将文档存储在以下目录中：<br/><ul><li>Windows：C:\\Users\\User_name\\Documents</li><li>Mac：/Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "指定用户将文档添加到或者检入到存储库时是否删除该文档的本地副本。<br/><br/>删除本地副本允许您：<br/><ul><li>遵循 IT 策略</li><li>确保用户使用文档的最新版本</li></ul><br/><b>限制：</b>用户通过拖放文档来添加文档时，不使用此设置。<br/><br/>对于 IBM Content Navigator for Microsoft Office，您必须在桌面的 <b>Office 配置</b>部分选中<b>用户添加或检入文档或者取消检出时删除本地文件</b>。",
		admin_file_tracking_open_file_hover_help: "此设置覆盖用户 Web 浏览器中配置的所有文档处理首选项。</br></br><b>限制：</b>IBM Content Navigator for Microsoft Office 不使用此设置。",
		admin_file_tracking_over_write_file: "覆盖本地副本：",
		admin_file_tracking_over_write_file_hover_help: "指定用户从存储库检出文档时是否覆盖文档的本地副本。<br/><br/>覆盖本地副本允许您：<br/><ul><li>确保用户使用文档的最新版本</li><li>避免在本地副本存在时对用户显示提示</li></ul> </br></br><b>限制：</b>如果您选择<b>允许用户覆盖此设置</b>，那么 IBM Content Navigator for Microsoft Office 不使用此设置。",
		admin_file_tracking_over_write_file_state_editable: "允许用户覆盖此设置",
		admin_file_tracking_inline_help: "文件跟踪简化了在存储库中检入和检出文档的过程。它还允许您管理在用户机器上存储文档的方式。<br/><br/>此外，文件跟踪允许在多个 IBM Content Navigator 组件（例如，Web 客户端和 IBM Content Navigator for Microsoft Office）中跟踪文档。",

		// Box repository admin...
		admin_box_instructions: "连接至存储库之前，必须启用标准认证或服务器认证。",
		admin_box_use_oauth: "认证类型：",
		admin_box_use_oauth_hover: "要允许从 IBM Content Navigator 访问 Box 文档时，请选择标准认证或服务器认证。指定与 IBM Content Navigator 的此部署相关联的客户机标识和 OAuth2 客户机密钥值。为 IBM Content Navigator 服务器创建 Box 应用程序之后，您可以从 Box 获取这些值。<br/><br/>在开发环境中选择“开发者认证”。开发者可以使用其开发者帐户登录 Box，并生成有效期为 60 分钟的开发者令牌。开发者令牌允许开发者将开发者令牌用作任何用户标识的密码来登录 Box。",
		admin_box_oauth_client_id: "客户机标识：",
		admin_box_oauth_client_secret: "客户机密钥：",
		admin_box_oauth_subdomain: "Box 企业帐户子域：",
		admin_box_share: "任务管理器连接标识：",
		admin_box_share_hover: "对于 Box 复制或者 Box 共享，任务管理器使用管理员用户标识和密码来运行用于修改存储库的后台任务。<br/><br/>单击“设置”，并使用有效的 Box 管理员帐户登录 Box。<br/><br/>如果您通过选择此 Box 存储库作为共享文件的存储库来配置桌面，那么必须指定在 Box 中具有无限制的存储器的 Box 管理员用户。",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "自动打开文件",
		file_tracking_runtime_overwrite_hover_help: "如果您未选择此选项，并且本地文件系统上具有同名文档，那么系统将检出但不下载该文档，除非您执行下列其中一项操作：<br/><ul><li> 将该文档下载到缺省目录的一个子目录中。如果您选择子目录，那么该 Web 应用程序可以跟踪该文档所在的位置。</li><li>重命名您要下载的文档。重命名文档以避免文件名冲突。</li></ul>",
		open_file: "自动打开文件",
		over_write_file: "覆盖本地副本",
		checkout_and_download_file: "检出和下载文档",
		download_to_local_directory: "下载至：",
		checkout_and_download_button_title: "检出和下载",
		checkout_without_java_confirmation_dialog: "文件跟踪功能部件无法下载和跟踪该文件。",
		browse_for_directory: "浏览",
		selected_documents: "所选文档",

		checkout_without_java_confirmation_text: "可能因为以下原因发生此问题：<br/><ul><li>Java 运行时环境 (JRE) 未安装在工作站上。</li><li>未在 Web 浏览器中启用 Java 插件。</li><li>Web 浏览器不支持 Java。</li></ul><br/><br/>要解决此问题，请执行相应的操作：<br/><br/><ul><li>如果您要继续下载该文件而不启用文件跟踪，请单击“确定”。</li><li>如果要下载该文件并启用文件跟踪，请取消下载，确保已在工作站上安装 JRE 并且已在 Web 浏览器中启用 Java 插件。</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "已检出并下载该文档，但是无法打开该文档。",
		runtime_file_tracking_open_error_explanation: "工作站上安装的操作系统不支持此类型的文件。",
		runtime_file_tracking_open_error_userResponse: "要解决此问题，请执行下列其中一项操作：<br/><br/><ul><li>如果需要处理该文档，请从具有不同操作系统的另一工作站打开 Web 客户端。</li><li>如果您只需要查看该文档，请在 Web 客户端中右键单击该文档，然后单击“打开”。</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "已检出但未下载该文档。",
		runtime_file_tracking_save_file_error_explanation: "本地文件系统上已有同名文档，但该文档未被覆盖。",
		runtime_file_tracking_save_file_error_userResponse: "如果您要从存储库中下载该文件，那么必须在您从存储库中下载该文档时覆盖该文档的本地副本。",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "已检出该文档，但是无法下载或打开该文档。",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "本地文件系统上已有同名文档。但是，未覆盖此文件，这会导致无法下载和打开存储库上的文档。",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "如果您要从存储库中下载该文件，那么必须在您从存储库中下载该文档时覆盖该文档的本地副本。",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "无法下载文档。",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "未在此客户端机器上定义 ${0} 环境变量，此环境变量是文件跟踪所必需的。",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "要解决此问题，请执行以下操作：<br/><br/><ul><li>将 ${0} 环境变量添加至操作系统环境变量。</li><li>从 Web 客户端注销，并关闭 Web 浏览器。然后再次登录。</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "文件跟踪 applet 无法下载和跟踪该文档。",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "未定义且无法创建 ${0} 目录，此目录是文件跟踪所必需的。",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "要解决此问题，请执行相应的操作：<br/><br/><ul><li>单击“浏览”，然后选择客户端机器上的另一个目录。如果您选择此选项，那么不会跟踪该文件。</li><li>请联系系统管理员并请求他们指定要用于跟踪文件的另一目录。例如，如果所指定目录对应 Windows 操作系统但您在运行 MAC 操作系统，那么此操作可能是必需的。</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "如果从具有不同操作系统的设备来访问此桌面，那么您可以通过执行下列其中一项操作来降低发生问题的可能性：<br/><br/><ul><li>使用环境变量来指定客户端机器上的存储位置。</li><li>针对使用每种设备类型的用户创建不同桌面。例如，为使用 Windows 操作系统的用户创建一个桌面，再为使用 MAC 操作系统的用户创建一个桌面。</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "无法处理您的请求。",
		runtime_file_tracking_generic_error_explanation: "文件跟踪 Applet 中发生错误。",
		runtime_file_tracking_generic_error_userResponse: "请联系系统管理员以获取帮助。",
		runtime_file_tracking_generic_error_adminResponse: "打开 Java 控制台并尝试再次提交您的请求。错误的详细信息将显示在 Java 控制台。<br/><br/>可以从操作系统的控制面板 (Windows) 或者系统首选项 (Macintosh) 来访问 Java 控制台。",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "无法处理您的请求",
		runtime_file_tracking_cannot_delete_file_error_explanation: "已将下列文件添加至存储库，但是未从本地文件系统中删除这些文件：${0}。通常，当这些文件打开或者另一个应用程序正在使用它们时，就会发生这种情况。如果需要，您可以手动删除这些文件。",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "无法下载文档。",
		runtime_file_tracking_ioexception_error_explanation: "无法下载文档。",
		runtime_file_tracking_ioexception_userResponse: "您可能没有相应的权限，无法写至以下目录：${0}。",
		runtime_file_tracking_ioexception_adminResponse: "确保您具有针对指定目录的写许可权。如果您没有针对指定目录的写许可权，请联系系统管理员。",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "无法处理您的请求。",
		runtime_file_tracking_safari_safe_mode_error_explanation: "发生此错误的可能原因如下：<br/><br/><ul><li>您正在 Mac OS 上使用 Safari，而 Java 正在以安全模式运行。</li><li>您对桌面的文件跟踪配置中所指定的目录不具备读/写许可权。</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "您可以继续使用 IBM Content Navigator 而不进行文件跟踪，或者您可以完成下列步骤来解决问题：<br/><br/><ol><li>在 Safari 中启用 Java 非安全模式。</li><li>如果系统提示您是否要信任 IBM Content Navigator Web 站点，请单击<b>信任</b>以装入页面，然后在 Safari 中启用 Java 非安全模式。</li></ol><br/><br/>如果正确配置了 Safari，请完成下列步骤来解决问题：<br/><br/><ol><li>请确保您对桌面的文件跟踪配置中所指定的目录具备读/写许可权。</li><li>如果您对该目录不具备读/写许可权，请编辑对于该目录的许可权。</li><li>如果您无法编辑对于该目录的许可权，那么管理员必须更改所配置的用于文件跟踪的目录，或者为您授予对于配置了不同的文件跟踪目录的桌面的访问权。</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "无法处理您的请求。",
		runtime_file_tracking_java__notfound_error_explanation: "通常会在下列情况下发生此问题：<br/><br/><ul><li>Java 运行时环境 (JRE) 在工作站上不存在或者未启用。</li><li>工作站上的 JRE 版本与 IBM Content Navigator 版本不兼容。</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "您可以继续使用 IBM Content Navigator 而不进行文件跟踪，或者您可以完成下列步骤来解决 JRE 的问题：<br/><br/><ol><li>请确保已在工作站上安装 JRE。</li><li>请确保工作站上的 JRE 版本与 IBM Content Navigator 兼容。支持的版本列表包括在 IBM 软件支持机构站点上的 <i>IBM Content Navigator 必备硬件和软件</i>文档中。</li><li>请确保已在工作站上启用 JRE。</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "无法处理您的请求。",
		runtime_file_tracking_security_error_explanation: "您对桌面的文件跟踪配置中所指定的目录不具备读/写许可权。",
		runtime_file_tracking_security_error_userResponse: "您可以继续使用 IBM Content Navigator 而不进行文件跟踪，或者您可与系统管理员协作完成下列步骤：<ol><li>请确保您对桌面的文件跟踪配置中所指定的目录具备读/写许可权。</li><li>如果您对该目录不具备读/写许可权，请编辑对于该目录的许可权。</li><li>如果您无法编辑对于该目录的许可权，那么管理员必须更改所配置的用于文件跟踪的目录，或者为您授予对于配置了不同的文件跟踪目录的桌面的访问权。</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "已下载以下文档：${0}。",

		admin_file_tracking_inline_help: "文件跟踪简化了将文档添加至存储库以及将文档检入和检出存储库的过程。它还允许您管理在用户的机器上存储文档的方式。<br/><br/>此外，文件跟踪允许在多个 IBM Content Navigator 组件（例如，Web 客户端和 IBM Content Navigator for Microsoft Office）中跟踪文档。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "菜单标识不能以“Default”开头。“Default”是菜单标识的保留前缀。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "该标识只能包含字母数字字符，并且区分大小写。",
		admin_repository_id_hover: "存储库标识包括在 Web 客户端 URL、收藏夹和电子邮件链接中，以用于指定要登录的存储库。该标识必须是唯一的，并且保存存储库后您不能更改该标识。<br><br>该标识只能包含字母数字字符，并且区分大小写。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "该名称不能包含下列任意字符：* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "桌面标识不能包含空格或下列任意字符：* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "桌面名称不能包含下列任意字符：* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "显示名称不能包含下列任意字符：* \\ / : ? \" < > |",
		admin_repository_name_hover: "指定 Web 客户端中要向用户显示的存储库名。<br><br>主题名称不能包含下列字符：* \\ / : ? \" < > |",
		admin_server_od_name_hover: "指定您要连接的 Content Manager OnDemand 服务器的主机名或 IP 地址，例如 server.id.com。",
		admin_server_p8_name_hover: "指定 Content Engine 或 Content Platform Engine 服务器的 URL。该 URL 区分大小写并且格式如下：<br><br><ul><li>在 WebSphere Application Server 上为：iiop://host_name:port_number/FileNet/Engine。在基本部署上，缺省端口号为 2809。</li><li>在 WebLogic 服务器上为：t3://host_name:port_number/FileNet/Engine。缺省端口号为 7001。</li></ul><br><br>要获得高可用性 Content Engine 和 Content Platform Engine 配置，请使用不带 cemp: 前缀的高可用性 EJB 传输 URL。",
		admin_server_p8_protocol_hover: "指定用来与 Content Engine 进行通信的协议。",
		admin_server_cm_name_hover: "指定 Content Manager 数据库的本地目录名称或库服务器连接名称。此名称是为 ICMSERVER 变量指定的值。",
		admin_repository_cmis_hover: "指定要连接至的存储库的标识。AtomPub 绑定服务文档中列示了 CMIS 环境中每个存储库的标识。<br/><br/><b>提示：</b>您还可以输入星号 (*) 以连接到在 Atompub 绑定服务文档中定义的第一个存储库或唯一存储库。",
		admin_url_cmis_hover: "URL 的格式根据服务供应商而不同。请参阅 CMIS 文档或与您的 CMIS 服务器管理员联系以获得 URL。",
		admin_repcfg_cmis_status_columns_hover: "指定您要查看其图标的项状态。状态图标显示在内容列表中的文档旁边。",
		admin_port_hover: "指定 Content Manager OnDemand 服务器所侦听的 TCP/IP 端口号。缺省值为 1445。",
		admin_unified_searches_hover: "指定是否要使用户能够在此存储库上保存跨存储库搜索。<br/><br/>如果不启用此选项，那么用户仍可以创建针对此存储库运行的跨存储库搜索。您可以阻止用户在桌面级别创建跨存储库搜索。<br/><br/>如果启用跨存储库搜索，那么 IBM Content Navigator 将在存储库上创建跨存储库搜索数据模型。<br/><br/>对于 IBM FileNet Content Manager，您必须以 Content Engine 管理员身份连接至该存储库才能启用此选项。",
		admin_unified_searches_cm_hover: "指定是否要使用户能够在此存储库上保存跨存储库搜索。<br/><br/>如果不启用此选项，那么用户仍可以创建针对此存储库运行的跨存储库搜索。您可以阻止用户在桌面级别创建跨存储库搜索。<br/><br/>如果启用跨存储库搜索，那么 IBM Content Navigator 将在存储库上创建跨存储库搜索数据模型。",
		admin_max_results_hover: "指定是否限制由搜索返回的结果数。如果不限制搜索结果数，那么当搜索返回大量结果时，您可能会遇到性能问题。",
		admin_timeout_hover: "指定可对存储库运行搜索的时长（以秒计）。如果搜索未在指定时间内完成，那么 Web 客户端取消该请求。建议的最长超时为 60 秒。",
		admin_object_store_hover: "指定要连接至 Content Engine 服务器的对象存储库。可从 Content Platform Engine 管理控制台获取符号名称。",
		admin_object_store_display_name_hover: "如果要使用 IBM FileNet P8 工作流程，那么需要对象存储库显示名称。可从 Content Platform Engine 管理控制台获取对象存储库显示名称。",
		admin_all_searches_hover: "用户在存储库上搜索时，指定是否限制<b>全部搜索</b>下显示的搜索数。如果您不限制搜索数，那么在存储库包括大量已保存的搜索时您可能会遇到性能问题。",

		admin_text_desktop: "桌面",
		admin_text_repository: "存储库",
		admin_text_plugin: "插件",
		admin_text_theme: "主题",
		admin_text_menu: "菜单",
		admin_text_reason_code: "修订原因",
		admin_text_redactions: "修订",
		admin_text_viewer_mapping: "查看器映射",
		admin_text_mobile_feature: "移动功能",
		admin_test_interface_text: "界面文本",
		admin_text_interface_text_locale: "本地化界面文本",
		admin_text_icon_status: "状态图标",
		admin_text_icon: "图标",
		admin_text_file_type: "文件类型",
		admin_text_viewer: "查看器",
		admin_text_desktop_access: "桌面访问",
		admin_text_mapped_properties_for_office: "Microsoft Office 的映射属性",
		admin_text_desktop_features: "桌面功能部件",
		admin_text_unknown: "未知",
		admin_folder_instruction: "指定用户浏览时，针对内容列表中的文档和文件夹显示的属性。您还可以指定这些属性的显示顺序。",
		admin_search_instruction: "指定缺省情况下用户创建搜索时所选择的选项。",
		admin_repository_office_conf_class_instruction: "如果已将 IBM Content Navigator for Microsoft Office 安装在您环境中的客户端机器上，那么您可以指定将文档添加到或检入此存储库时如何处理这些文档。",
		admin_repository_office_conf_instruction: "将 Microsoft Office 文档属性映射至在此存储库上定义的属性。<br/><br/>对与此存储库关联的桌面启用了属性映射后，用户从 IBM Content Navigator 添加了 Microsoft Office 文档时，在 Microsoft Office 文档中设置的属性会用于填充存储库中的属性。",
		admin_repository_office_conf_prop_mapping_title: "属性映射",
		admin_repository_office_conf_prop_mapping_title1: "MS Office 集成",
		admin_office_conf_instruction: "在客户端机器上安装 IBM Content Navigator for Microsoft Office 时，您可以控制 IBM Content Navigator 与 Microsoft Office 应用程序的集成方式<br /><br /><b>要点：</b>如果选择<b>映射 Office 属性…</b>，那么还必须为与此桌面相关联的每个存储库配置属性映射。可在 <b>Office 属性</b>选项卡上为环境中的每个存储库配置属性映射。",
		admin_desktop_workflows_instruction: "<b>仅适用于 IBM FileNet P8 系统：</b>指定此桌面中显示的应用程序空间。所选应用程序空间的顺序确定这些应用程序空间在 Web 客户端中的显示顺序。<br><br><b>提示：</b>您可以通过在管理工具的<b>标签</b>部分中指定新名称，来更改应用程序空间的显示名称。",
		admin_search_filtered_properties_instruction: "指定用户可以搜索的属性。您可以隐藏不想让用户搜索的任何属性。",
		admin_search_filtered_operators_instruction: "指定用户在搜索特定的数据类型时可以使用的运算符，例如日期和整型。您可以隐藏不希望用户选择的任何运算符。",
		admin_search_default_search_results_instruction: "指定针对搜索结果中的文档和文件夹显示的属性。您可以隐藏不想让其出现在搜索结果中的任何属性。",
		admin_search_default_search_results_p8_cmis_instruction: "指定针对搜索结果中的文档显示的属性。您可以隐藏不想让其出现在结果中的任何属性。",

		admin_datetimeOp: "日期时间",
		admin_floatOp: "浮点数",
		admin_integerOp: "整数",
		admin_stringOp: "字符串",
		admin_binaryOp: "二进制",
		admin_objectOp: "对象",
		admin_idOp: "标识",
		admin_userOp: "用户",
		admin_booleanOp: "布尔值",

		admin_string: "字符串",
		admin_long: "长整型",
		admin_date: "日期",
		admin_double: "双精度",
		admin_object: "对象",
		admin_guid: "GUID",
		admin_boolean: "布尔值",

		admin_repcfg_heading: "您可以通过设置配置参数来覆盖此存储库的缺省行为。",
		admin_repcfg_heading_od: "您可以通过设置配置参数来覆盖此存储库的缺省行为。<br /><br /><b>要点：</b>要将 Web 客户端与 Content Manager OnDemand 配合使用，必须在 <b>Content Manager OnDemand</b> 选项卡的<b>设置</b>下指定所包括的参数的值，这些值将应用于您连接的所有 Content Manager OnDemand 存储库。",
		admin_repcfg_teamspaces: "团队空间管理：",
		admin_repcfg_enable: "启用",
		admin_repcfg_disable: "禁用",

		admin_repcfg_deliver_redacted_pdf_files_as: "已修订的 PDF 文件将按以下形式交付：",
		admin_repcfg_burn_pdf_to_pdf: "PDF 文件",
		admin_repcfg_burn_pdf_to_tiff: "TIFF 文件",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "通过应用基于角色的修订来修订的 PDF 文件可以另一种文件格式交付给客户机。文件格式发生更改时，文件扩展名和 MIME 类型也会发生更改。<br><br>例如，PDF 文件交付为 TIFF 文件，那么文件扩展名将改为 .tiff。",
		admin_repcfg_redaction_allow_merge_and_split: "允许用户合并和拆分具有基于角色的修订的页面",
		admin_repcfg_redaction_allow_merge_and_split_hover: "选择此选项以允许用户合并和拆分具有基于角色的修订的页面。修订编辑者以外的用户无法编辑基于角色的修订并且不会获得与该基于角色的修订关联的敏感数据的访问权，即使已启用此选项也是如此。",
		admin_repcfg_modify_teamspace_roles: "允许所有者修改现有团队空间的角色",
		admin_repcfg_tm_delete_teamspace: "使所有者能够删除团队空间（包括内容）",
		admin_repcfg_tm_delete_teamspace_id_missing: "您必须指定存储库管理员的用户名。",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "您必须指定存储库管理员的密码。",
		admin_repcfg_teamspace_display_Recent: "仅显示最近修改的团队空间",
		admin_repcfg_teamspace_display_Recent_value: "上次修改以来的天数：",

		admin_repcfg_folder_selector: "根文件夹：",
		admin_repcfg_enable_folder_selector: "启用",
		admin_repcfg_disable_folder_selector: "禁用",
		admin_repcfg_SSO: "单点登录：",
		admin_repcfg_teamspace_template_permission_text: "指定团队空间模板创建者：",
		admin_repcfg_teamspace_template_permission_hover_p8: "指定可以创建团队空间模板的组或用户。为用户和组提供了对于必需类和文件夹适当的安全设置。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>了解更多信息</a> <br/><br/><b>建议：</b>使用组来简化团队空间的管理。",
		admin_repcfg_teamspace_template_permission_hover_cm: "指定可以创建团队空间模板的组或用户。已将用户添加至适当的 ACL，并且为其提供了必需的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>了解更多信息</a><br/><br/><b>建议：</b>使用组来简化团队空间的管理。",
		admin_repcfg_teamspace_permission_text: "指定团队空间角色：",
		admin_repcfg_teamspace_permission_hover_p8: "指定可以创建团队空间和使用团队空间的组或用户。为用户提供了适当的对于必需类和文件夹的安全设置。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>了解更多信息</a> <br/><br/><b>建议：</b>使用组来简化团队空间的管理。",
		admin_repcfg_teamspace_permission_hover_cm: "指定可以创建团队空间和使用团队空间的组或用户。已将用户添加至适当的 ACL，并且为其提供了必需的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>了解更多信息</a><br/><br/><b>建议：</b>使用组来简化团队空间的管理。",
		admin_repcfg_entry_template_permission_text: "指定输入模板角色：",
		admin_repcfg_entry_template_permission_hover_p8: "指定可以创建输入模板和使用输入模板的组或用户。为用户提供了适当的对于输入模板文档类的安全设置。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>了解更多信息</a><br/><br/><b>建议：</b>使用组来简化输入模板的管理。",
		admin_repcfg_entry_template_permission_hover_cm: "指定可以创建输入模板和使用输入模板的组或用户。已将用户添加至适当的 ACL，并且为其提供了必需的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>了解更多信息</a><br /><br /><b>建议：</b>使用组来简化输入模板的管理。",
		admin_repcfg_office_template_permission_text: "分配模板角色：",
		admin_repcfg_office_template_permission_hover_cm: "指定可以创建、编辑和使用 Microsoft Office Online 或 Edit Service 模板的组或用户。已将用户添加至适当的 ACL，并且为其提供了必需的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> <br /><br /><b>建议：</b>使用组来简化 Microsoft Office Online 或 Edit Service 模板管理。",
		admin_repcfg_draft_permission_text: "分配草稿角色：",
		admin_repcfg_draft_permission_hover_cm: "指定可以在协同编辑期间创建 Microsoft Office Online 或 Edit Service 文档草稿的组或用户。需要在 Microsoft Office Online 或 Edit Service 中以协作方式编辑文档的任何用户必须具有相应特权以创建草稿。已将用户添加至适当的 ACL，并且为其提供了必需的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> <br /><br /><b>建议：</b>使用组来简化草稿管理。",
		admin_repcfg_search_permission_text: "指定搜索角色：",
		admin_repcfg_search_permission_hover_p8: "指定可以创建或使用已保存的搜索和跨存储库搜索的组或用户。为用户提供了适当的对于必需类的安全设置。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>了解更多信息</a><br /><br /><b>建议：</b>使用组来简化搜索的管理。",
		admin_repcfg_search_permission_hover_cm: "指定可以创建、编辑或使用已保存的搜索和跨存储库搜索的组或用户。已将用户添加至适当的 ACL，并且为其提供了必需的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>了解更多信息</a><br /><br /><b>建议：</b>使用组来简化搜索的管理。",
		admin_repcfg_search_permission_title: "搜索角色",
		admin_repcfg_search_permission_intro_text: "请确保用户有权访问支持他们的角色的桌面。例如，请确保搜索创建者有权访问允许他们创建搜索和跨存储库搜索的桌面。",
		admin_repcfg_teamspace_template_administrators_hover_p8: "团队空间模板管理员是对存储库（对象库）具有<b>完全控制</b>许可权的用户。您无法通过管理工具来更改团队空间模板管理员列表。<p>团队空间模板管理员可以删除或修改任何团队空间模板。创建团队空间模板的用户不需要与团队空间模板管理员共享该模板。</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "将用户或组指定为团队空间模板创建者时，系统会给予该用户或组对该存储库的安全性级别，以便他们创建团队空间模板。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>了解更多信息</a> ",
		admin_repcfg_teamspace_template_others_hover_p8: "分配了一些特权的用户和组，这些特权与管理员和创建者不相关。<p>您可以通过从“其他”角色移除这些用户和组，然后将其指定为团队空间模板创建者，来将其移动到团队空间模板创建者角色。<p>您可以通过使用 IBM Administration Console for Content Engine 查看当前授予这些用户和组的特权。",
		admin_repcfg_teamspace_administrators_hover_p8: "团队空间管理员是对存储库（对象库）具有<b>完全控制</b>许可权的用户。您无法通过管理工具来更改团队空间管理员列表。<p>团队空间管理员可以删除或修改任何团队空间。创建团队空间的用户不需要与团队空间管理员共享该团队空间。</p>",
		admin_repcfg_teamspace_creators_hover_p8: "将用户或组指定为团队空间创建者时，系统会给予该用户或组对该存储库的安全性级别，以便他们创建团队空间。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>了解更多信息</a> ",
		admin_repcfg_teamspace_user_hover_p8: "将用户或组指定为团队空间用户时，系统会给予该用户或组对该存储库的安全性级别，以便他们使用团队空间。但是，用户必须是团队空间的成员才能访问该团队空间。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>了解更多信息</a> <p><b>提示：</b>如果您希望环境中的所有用户都能够查看团队空间，那么可以将 #AUTHENTICATED-USERS 虚拟帐户添加至团队空间用户角色。</p>",
		admin_repcfg_teamspace_others_hover_p8: "分配了一些特权的用户和组，这些特权与管理员、创建者和用户不相关。<p>您可以通过从“其他”角色移除这些用户和组，然后为其指定团队空间角色，来将其移动到预定义角色。<p>您可以通过使用 IBM Administration Console for Content Engine 查看当前授予这些用户和组的特权。",		
		admin_repcfg_entry_template_administrators_hover_p8: "输入模板管理员是对存储库（对象库）具有<b>完全控制</b>许可权的用户。您无法通过管理工具来更改输入模板管理员列表。<p>输入模板管理员可以删除或修改任何输入模板。创建输入模板的用户不需要与输入模板管理员共享该输入模板。</p>",
		admin_repcfg_entry_template_creators_hover_p8: "将用户或组指定为输入模板创建者时，系统会给予该用户或组对该存储库的安全性级别，以便他们创建输入模板。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>了解更多信息</a>",
		admin_repcfg_entry_template_user_hover_p8: "将用户或组指定为输入模板用户时，系统会给予该用户或组对该存储库的安全性级别，以便他们使用输入模板。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>了解更多信息</a><p><b>提示：</b>如果您希望环境中的所有用户都能够使用输入模板，那么可以将 #AUTHENTICATED-USERS 虚拟帐户添加至输入模板用户角色。</p>",
		admin_repcfg_entry_template_others_hover_p8: "分配了一些特权的用户和组，这些特权与管理员、创建者和用户不相关。<p>您可以通过从“其他”角色移除这些用户和组，然后为其指定输入模板角色，来将其移动到预定义角色。<p>您可以通过使用 IBM Administration Console for Content Engine 查看当前授予这些用户和组的特权。",
		admin_repcfg_teamspace_template_creators_hover_cm: "将用户或组指定为团队空间模板创建者时，系统会给予该用户或组相应特权，以便他们在存储库中创建团队空间模板。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>了解更多信息</a>",
		admin_repcfg_teamspace_creators_hover_cm: "将用户或组指定为团队空间创建者时，系统会给予该用户或组相应特权，以便他们在存储库中创建团队空间。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>了解更多信息</a>",
		admin_repcfg_teamspace_user_hover_cm: "将用户或组指定为团队空间创建者时，系统会给予该用户或组相应特权，以便他们在存储库中使用团队空间。但是，用户必须是团队空间的成员才能访问该团队空间。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>了解更多信息</a>",
		admin_repcfg_entry_template_creators_hover_cm: "将用户或组指定为输入模板创建者时，系统会给予该用户或组相应特权，以便他们在存储库中创建输入模板。<br/><br/>但是，特定输入模板的安全设置将确定该用户或组对于该输入模板的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>了解更多信息</a>",
		admin_repcfg_entry_template_editors_hover_cm: "将用户或组指定为输入模板编辑人员时，会为该用户或组提供适当的特权，以修改存储库中的输入模板。<br/><br/>但是，特定输入模板的安全设置将确定该用户或组对于该输入模板的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>了解更多信息</a>",
		admin_repcfg_entry_user_hover_cm: "将用户或组指定为输入模板用户时，系统会给予该用户或组相应特权，以便他们在存储库中使用输入模板。<br/><br/>但是，特定输入模板的安全设置将确定该用户或组对于该输入模板的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>了解更多信息</a>",
		admin_repcfg_office_template_creators_hover_cm: "将用户或组指定为 Microsoft Office Online 或 Edit Service 模板创建者时，系统会给予该用户或组适当特权，以便他们在存储库中创建模板文件。<br/><br/>但是，特定模板文件的安全设置将确定该用户或组针对该模板的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> ",
		admin_repcfg_office_template_editors_hover_cm: "将用户或组指定为 Microsoft Office Online 或 Edit Service 模板编辑者时，系统会给予该用户或组适当特权，以便他们在存储库中修改模板文件。<br/><br/>但是，特定模板文件的安全设置将确定该用户或组针对该模板的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> ",
		admin_repcfg_office_template_user_hover_cm: "将用户或组指定为 Microsoft Office Online 或 Edit Service 模板用户时，系统会给予该用户或组适当特权，以便他们在通过 Web 客户机创建新的 Office Online 或 Edit Service 文档时应用模板。<br/><br/>但是，特定模板文件的安全设置将确定该用户或组针对该模板的特权。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> ",
		admin_repcfg_draft_creators_hover_cm: "需要在 Microsoft Office Online 或 Edit Service 中以协作方式编辑文档的任何用户必须被分配此角色。不要对用户分配编辑者或用户角色。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> ",
		admin_repcfg_draft_editors_hover_cm: "需要在 Microsoft Office Online 或 Edit Service 中以协作方式编辑文档的任何用户必须被分配<b>创建者</b>角色。如果用户被分配编辑者角色，那么他们不能创建协同编辑所需的草稿。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> ",
		admin_repcfg_draft_user_hover_cm: "需要在 Microsoft Office Online 或 Edit Service 中以协作方式编辑文档的任何用户必须被分配<b>创建者</b>角色。如果用户被分配用户角色，那么他们不能创建协同编辑所需的草稿。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>了解更多信息</a> ",		
		admin_repcfg_search_others_hover_p8: "分配了一些特权的用户和组，这些特权与管理员、创建者和用户不相关。<p>您可以通过从“其他”角色移除这些用户和组，然后为其指定搜索角色，来将其移动到预定义角色。<p>您可以通过使用 IBM Administration Console for Content Engine 查看当前授予这些用户和组的特权。",		
		admin_repcfg_search_admins_hover_p8: "搜索管理员是对存储库（对象库）具有<b>完全控制</b>许可权的用户。您无法通过管理工具来更改搜索管理员列表。<br /><br />搜索管理员可以删除或修改任何搜索。创建搜索的用户不需要与搜索管理员共享该搜索。",
		admin_repcfg_search_creators_hover_p8: "将用户或组指定为搜索创建者时，系统会给予该用户或组对该存储库的安全性级别，以便他们创建搜索。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>了解更多信息</a>",
		admin_repcfg_search_user_hover_p8: "将用户或组指定为搜索用户时，系统会给予该用户或组对该存储库的安全性级别，以便他们使用搜索 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>了解更多信息</a><br /><br /><b>提示：</b>如果您希望环境中的所有用户都能够使用搜索，那么可以将 #AUTHENTICATED-USERS 虚拟帐户添加至搜索用户角色。<br/><br />缺省情况下，搜索用户可以创建搜索和跨存储库搜索，但是无法保存搜索。可以通过让搜索用户使用为其选择了下列选项的桌面来防止搜索用户创建搜索：<ul><li><b>防止用户创建搜索</b></li><li><b>阻止用户创建跨存储库搜索</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "将用户或组指定为搜索创建者时，系统会给予该用户或组相应特权，以便他们在存储库中创建并保存搜索和跨存储库搜索。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>了解更多信息</a><br /><br /><b>要点：</b>请确保搜索创建者使用未为其选择下列选项的桌面：<ul><li><b>防止用户创建搜索</b></li><li><b>阻止用户创建跨存储库搜索</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "将用户或组指定为搜索编辑人员时，会为该用户或组提供适当的特权，以修改现有搜索和跨存储库搜索。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>了解更多信息</a><br /><br /><b>提示：</b>缺省情况下，搜索编辑人员可以创建搜索和跨存储库搜索，但是无法保存搜索。可以通过让搜索编辑人员使用为其选择了下列选项的桌面来防止搜索编辑人员创建搜索：<ul><li><b>防止用户创建搜索</b></li><li><b>阻止用户创建跨存储库搜索</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "将用户或组指定为搜索用户时，会为该用户或组提供适当的特权，以打开并运行已保存的搜索和跨存储库搜索。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>了解更多信息</a><br /><br /><b>提示：</b>缺省情况下，搜索用户可以创建搜索和跨存储库搜索，但是无法保存搜索。可以通过让搜索用户使用为其选择了下列选项的桌面来防止搜索用户创建搜索：<ul><li><b>防止用户创建搜索</b></li><li><b>阻止用户创建跨存储库搜索</b></li></ul>",
		admin_repcfg_db_encoding: "服务器数据库字符编码：",
		admin_repcfg_db_encoding_hover: "IBM Content Manager 数据库的缺省字符编码为 UTF-8。",
		admin_repcfg_db_encoding_specify: "指定数据库字符编码",
		admin_repcfg_db_encoding_utf8: "UTF-8 编码",
		admin_repcfg_db_encoding_utf8_hover: "如果您使用 UTF-8 编码的数据库，请指定此选项。IBM Content Navigator 将使用 UTF-8 编码来检查项属性值字符串的长度。",
		admin_repcfg_db_encoding_other: "其他编码",
		admin_repcfg_db_encoding_other_hover: "如果您使用编码并非 UTF-8 的数据库，请指定此选项。IBM Content Navigator 将使用字符计数来检查项属性值字符串的长度。",
		admin_repcfg_language_codes: "服务器语言代码：",
		admin_repcfg_language_codes_avail: "可用",
		admin_repcfg_language_codes_sel: "已选择",
		admin_repcfg_pdf_conversion: "附件中要转换为 PDF 文档的 MIME 类型：",
		admin_repcfg_pdf_conversion_avail: "可用",
		admin_repcfg_pdf_conversion_sel: "已选择",

		admin_repcfg_box_share_enable_classes_label: "要为 Box 共享支持修改的类：",
		admin_repcfg_box_share_enable_classes_hover: "可以修改此类，以便在共享该项时，将文件的标识存储在 Box 中。",
		admin_repcfg_box_share_enable_classes_warning: "要点：您指定的所有类都将修改为支持 Box 共享。保存更改后，不能从类中移除更改。<br><br>您必须作为库服务器管理员连接至该存储库才能修改类。",
		admin_repcfg_box_share_enable_classes_available: "可用类",
		admin_repcfg_box_share_enable_classes_selected: "所选择的类",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "存储 Box 共享标识",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "已修改此类以存储 Box 共享标识。您无法移除此选项。",
		admin_repcfg_box_share_enable_classes_tracking_hover: "修改此类，以便在共享该项时，它将文件的标识存储在 Box 中。",

		admin_repcfg_redaction: "基于角色的修订：",
		admin_repcfg_enable_redaction_hover: "指定是否要对此存储库中的文档使用基于角色的修订。<br/><br/>当由查看器下载、打印和呈示文档或者显示为缩略图时，将应用基于角色的修订。用户查看文档时，哪些用户可以查看该文档取决于他们的角色以及使用的修订策略。",

		admin_repcfg_redaction_policy_permission_text: "指定策略编辑器：",
		admin_repcfg_redaction_policy_editors_hover: "选择将创建、修改以及删除修订策略和修订角色的用户和组。",
		admin_repcfg_redaction_policy_editors_select_hover: "修订策略编辑器可以创建、修改以及删除修订策略和修订角色。",
		admin_repcfg_redaction_policy_administrators_hover_p8: "修订策略管理员可以指定修订策略编辑器。<br/><br/>可以使用 IBM Administration Console for Content Engine 来更改修订策略管理员列表。",
		admin_repcfg_redaction_policy_administrators_hover_cm: "修订策略管理员可以指定修订策略编辑器。<br/><br/>可以使用 IBM Content Manager 系统管理客户机来更改修订策略管理员列表。",

		admin_repcfg_redaction_permission_text: "指定修订编辑器：",
		admin_repcfg_redaction_editors_hover: "选择将创建、修改以及删除基于角色的修订的用户和组。选择用户和组作为编辑器之后，您必须在修订策略中将他们指定为编辑器，然后他们才能修订基于角色的修订。",
   		admin_repcfg_redaction_editors_select_hover: "在修订策略中还将修订编辑器指定为编辑器时，修订编辑器可以创建、修改以及删除基于角色的修订。",
   		admin_repcfg_redaction_administrators_hover_p8: "修订管理员可以指定修订编辑器。<br/><br/>可以使用 IBM Administration Console for Content Engine 来更改修订管理员列表。",
   		admin_repcfg_redaction_administrators_hover_cm: "修订管理员可以指定修订编辑器。<br/><br/>可以使用 IBM Content Manager 系统管理客户机来更改修订管理员列表。",
		admin_repcfg_entry_template: "输入模板管理：",
		admin_repcfg_entry_template_enable_classes_label: "要为输入模板支持修改的类：",
		admin_repcfg_oos_reference_attribute_label: "Office Online 的引用属性：",
		admin_repcfg_entry_template_enable_classes_hover: "要点：您指定的所有类将修改以支持输入模板。保存更改后，不能从类中移除更改。<br><br>您可因为下列其中一个或全部用途而修改该类：<br><ul><li>存储用于添加项的输入模板的标识，以便在修改该项时应用输入模板设置</li><li>仅适用于分层文件夹类：支持输入模板文件夹关联</li></ul>您必须作为库服务器管理员连接至该存储库才能修改类。",
		admin_repcfg_entry_template_enable_classes_warning: "要点：您指定的所有类将修改以支持输入模板。保存更改后，不能从类中移除更改。<br><br>您必须作为库服务器管理员连接至该存储库才能修改类。",
		admin_repcfg_entry_template_enable_classes_available: "可用类",
		admin_repcfg_entry_template_enable_classes_selected: "所选择的类",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "存储输入模板标识",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "修改此类以便它存储用于添加项的输入模板的标识，以便在修改该项时应用输入模板设置。",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "存储文件夹关联",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "修改此类，以便它可支持输入模板文件夹关联。此选项仅对分层文件夹类可用。",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "此类已修改以存储输入模板标识。您无法移除此选项。",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "此类已修改以存储文件夹关联。您无法移除此选项。",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "只能使用分层文件夹类和非分层类来存储文件夹关联。",
		admin_repcfg_entry_template_root_folder_association_title: "根文件夹的输入模板关联：",
		admin_repcfg_entry_template_root_folder_association_hover: "指定您希望与 IBM Content Manager 存储库的根文件夹相关联的输入模板。<br /><br />如果将输入模板与根文件夹相关联，并且用户将项添加至层级文件夹，那么将会始终使用输入模板添加项。",
		admin_repcfg_entry_template_root_folder_association_button: "设置关联",
		admin_repcfg_oos_enable_classes_label: "要修改以获取 Office Online 和 Edit Service 支持的类：",
		admin_repcfg_oos_enable_classes_warning: "要点：您指定的所有类将修改以使用 Microsoft Office Online 或 Edit Service。保存更改后，不能移除自动添加至每个类的引用属性。<br><br>您必须作为库服务器管理员连接至该存储库才能修改类。",
		admin_repcfg_oos_enable_classes_available: "可用类",
		admin_repcfg_oos_enable_classes_selected: "所选择的类",
		admin_repcfg_oos_enable_classes_note: "要点：",
		admin_repcfg_oos_enable_classes_selected_not_support: "Microsoft Office Online 或 Edit Service 不支持此类。",
		admin_repcfg_oos_enable_classes_selected_not_support1: "此类的版本策略设置为始终进行版本控制，Microsoft Office Online 或 Edit Service 不支持此类。请选择另一个类。",
		admin_repcfg_download_recording: "跟踪下载：",
		admin_repcfg_download_recording_hover: "在存储库上安装 Social Collaboration Base Extensions 附加组件后，缺省情况下系统会跟踪下载。但是，禁用此选项可以提升存储库的性能。<br><br>如果禁用此选项，那么用户将看到该选项禁用前发生的下载计数。",
		admin_repcfg_sync_service: "同步服务：",
		admin_repcfg_download_ignored: "忽略特定用户的下载：",
		admin_repcfg_download_ignored_hover: "您可以忽略特定用户（例如，管理员或系统帐户）请求的下载，以便更准确地反映下载文档的用户数。例如，如果您有特定帐户用于下载内容以生成月度报告，那么可以忽略该帐户所请求的下载。<br><br><b>限制：</b>您不能指定组。",

		admin_repcfg_add_as_major_version: "添加为主版本：",
		admin_repcfg_enable_add_as_major_version: "是",
		admin_repcfg_disable_add_as_major_version: "否",
		admin_repcfg_checkin_as_major_version: "检入为主版本：",
		admin_repcfg_enable_checkin_as_major_version: "是",
		admin_repcfg_disable_checkin_as_major_version: "否",
		admin_repcfg_annotation_security: "注释安全性：",
		admin_repcfg_inherit_annotation_security: "复制包含文档的安全性",
		admin_repcfg_default_annotation_security: "使用缺省注释安全性",
		admin_repcfg_connection_point: "工作流程连接点：",
		admin_repcfg_include_workflow_definition: "显示工作流程定义类：",
		admin_repcfg_include_form_template: "显示表单模板类：",
		admin_repcfg_enable_include_workflow_definition: "是",
		admin_repcfg_disable_include_workflow_definition: "否",

		admin_repcfg_status_columns: "状态图标：",
		admin_repcfg_status_columns_hover: "指定您要查看的图标的状态。状态图标显示在内容列表中的文档、文件夹以及工作项旁边。",
		admin_repcfg_status_columns_documents_or_folders: "当文档或文件夹满足以下条件时显示图标：",
		admin_repcfg_status_columns_documents: "当文档满足以下条件时显示图标：",
		admin_repcfg_status_columns_documents_checked_out: "已检出",
		admin_repcfg_status_columns_documents_declared_records: "已声明为记录",
		admin_repcfg_status_columns_documents_minor_versions: "具有次版本",
		admin_repcfg_status_columns_documents_compound_document: "是复合文档",
		admin_repcfg_status_columns_documents_bookmarks: "具有书签",
		admin_repcfg_status_columns_documents_hold: "已挂起",
		admin_repcfg_status_columns_documents_notes: "具有注释",
		admin_repcfg_status_columns_work_items: "当工作项满足以下条件时显示图标：",
		admin_repcfg_status_columns_work_items_locked: "已锁定",
		admin_repcfg_status_columns_work_items_checked_out: "已检出",
		admin_repcfg_status_columns_work_items_deadline: "具有截止期限",
		admin_repcfg_status_columns_work_items_suspended: "已暂挂，不予以处理",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF 配置文件：",
		admin_repcfg_transform_xml_file: "定制转换文件：",
		admin_repcfg_ssl: "SSL：",
		admin_repcfg_enable_ssl: "启用",
		admin_repcfg_disable_ssl: "禁用",
		admin_repcfg_keyringdb_file: "密钥环数据库文件：",
		admin_repcfg_keyringstash_file: "密钥环隐藏文件：",
		admin_repcfg_od_sso: "单点登录",
		admin_repcfg_od_enable_sso: "启用",
		admin_repcfg_od_disable_sso: "禁用",
		admin_repcfg_od_sso_password: "密码",
		admin_repcfg_advanced_label: "高级",
		admin_repcfg_custom_properties_label: "定制属性：",
		admin_repcfg_new_button_label: "新建",
		admin_repcfg_edit_button_label: "编辑",
		admin_repcfg_delete_button_label: "删除",
		admin_repcfg_custom_head1: "名称",
		admin_repcfg_custom_head2: "值",
		admin_repcfg_ecpdialog_title_new: "新建定制属性",
		admin_repcfg_ecpdialog_title_edit: "编辑定制属性",
		admin_repcfg_ecpdialog_name: "名称：",
		admin_repcfg_ecpdialog_value: "值：",
		admin_repcfg_ecpdialog_save: "保存",
		admin_repcfg_ecpdialog_create: "创建",
		admin_repcfg_ecpdialog_cancel: "取消",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "此值为必填项。该值不能包含空白且不能重复。",

		admin_repcfg_cmis_use_gzip_encoding: "使用 GZIP 编码：",

		admin_repcfg_task_mgr_proxy: "任务管理器连接标识：",
		admin_repcfg_task_mgr_proxy_hover: "对于 Box 共享或者团队空间删除，任务管理器使用管理员用户标识和密码来运行用于修改存储库的后台任务。<br><br>单击“设置”，并使用有效的存储库管理员用户标识和密码登录存储库。",
		admin_task_manager_not_enabled_warning: "此选项需要任务管理器服务，但是未启用任务管理器服务。可以在“设置”的“常规”页面上为所有桌面启用任务管理器服务。",
		admin_task_manager_not_enabled_and_user_warning: "此选项需要任务管理器服务，但是未启用任务管理器服务。在此页面上，设置任务管理器连接标识，然后在“设置”的“常规”页面上为所有桌面启用任务管理器服务。",
		admin_task_manager_user_id_pw_not_set_warning: "此选项需要任务管理器服务以及管理员用户标识和密码。在此页面上，设置任务管理器连接标识。",
		admin_repcfg_teamspaces_delete_task_id: "存储库管理员：",
		admin_repcfg_teamspaces_delete_task_password: "密码：",
		admin_repcfg_teamspaces_delete_task_Id_hover: "您必须指定库服务器管理员，以启用任务管理器服务来删除存储库中的团队空间。",
		admin_repcfg_teamspaces_delete_task_hover: "缺省情况下，用户删除团队空间时，只是隐藏该团队空间。该团队空间中的所有文件夹和文档仍保留在存储库中。<br /> <br />当您启用此选项时，只有从存储库中的其他文件夹中归档的文档才会保留在该存储库中。",
		admin_repcfg_display_recent_teamspaces_p8_hover: "如果您所在环境中具有大量团队空间，那么在<b>团队空间</b>选项卡中显示所有团队空间可能要耗用很长时间。您可以选择此选项以缩短填充列表所需的时间。<br /><br />如果用户需要使用的团队空间在您指定的范围以外，那么该用户可以使用<b>过滤器</b>字段来查找该团队空间。",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "如果您选择此选项，那么在团队空间上具有“所有者”角色的用户可以修改与使用低于 IBM Content Navigator V2.0.2 的版本创建的团队空间相关联的角色。<br /><br />此选项不会影响使用 IBM Content Navigator V2.0.2 创建的团队空间。",
		admin_repcfg_use_teamspaces_cm_hover: "指定是否希望用户能够在此存储库上创建团队空间和团队空间模板。<br /><br /><b>要点：</b>该存储库必须支持分层文件夹。<br /><br />如果启用团队空间，那么 IBM Content Navigator 将在存储库上创建团队空间数据模型。该数据模型包括 ACL 对象、特权、特权集以及两个新的项类型。",
		admin_repcfg_folder_selector_hover: "用户浏览文档时，选择您要用作根文件夹的文件夹。如果您没有在存储库上配置分层文件夹，那么此设置通过定义根文件夹可使您能够支持浏览。如果在您的存储库上配置了分层文件夹，那么此设置会覆盖在该存储库上配置的根文件夹。",
		admin_repcfg_cm_use_sso_hover: "指定是否允许具有可信登录特权集的用户进行单点登录。<br /><br /><b>要点：</b>必须在 Content Manager 服务器上启用单点登录，并且必须对 LTPA 配置 WebSphere Application Server，此配置参数才能工作。",
		admin_repcfg_cm_direct_retrieve_hover: "缺省情况下会启用直接检索，因为它允许 Web 客户端迅速从资源管理器中检索内容。<br /><br />如果您不希望客户端应用程序直接访问资源管理器，或者您的防火墙或代理服务器阻止 Web 客户端通过 URL 访问资源管理器，那么您可禁用此选项。例如，启用直接检索后，防火墙可阻止用户在 Applet 查看器中查看文档。",
		admin_repcfg_cmItemTypesToDisplay: "如果您不希望用户看到 IBM Content Manager 服务器上的资源项类型和项项类型，那么可以仅显示文档模型项类型。用户创建搜索、添加文档和创建文件夹时会显示项类型。",
		admin_repcfg_cm_language_codes_hover: "指定从 Content Manager 服务器中返回数据时所使用的语言。可用语言的列表由服务器上的语言定义列表控制。<br /><br /><b>请记住：</b>Web 客户端中的数据以用户 Web 浏览器中设置的语言显示。",
		admin_repcfg_cm_pdf_conversion_hover: "指定用户以电子邮件附件形式发送包含多个部件的文档时，要转换为 PDF 的文档类型。所有部件都将组合到单个 PDF 文档中。",
		admin_repcfg_use_teamspaces_p8_hover: "指定是否希望用户能够在此存储库上创建团队空间和团队空间模板。<br /><br />如果启用团队空间，那么 IBM Content Navigator 将在存储库上创建团队空间数据模型。数据模型包括属性模板、定制对象、文件夹对象和若干文件夹。",
		admin_repcfg_use_entry_template_p8_hover: "指定是否希望用户能够通过 IBM Content Navigator 在此存储库上创建和管理输入模板。如果未启用此功能部件，那么用户可以搜索和使用存储库上已有的输入模板。<br /><br />如果启用输入模板管理，那么 IBM Content Navigator 将在存储库上更新输入模板数据模型。此更新包括新属性。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>了解更多信息</a>",
		admin_repcfg_use_entry_template_cm_hover: "指定是否希望用户能够通过 IBM Content Navigator 在此存储库上创建和管理输入模板。<br /><br />如果启用输入模板管理，那么 IBM Content Navigator 将在存储库上创建输入模板数据模型。该数据模型包括新的 ACL 对象、新的属性和新的项类型。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>了解更多信息</a>",
		admin_repcfg_sync_service_p8_hover: "指定您是否希望用户能够在他们的工作站和移动设备上使他们的收藏项同步。<br><br><b>要点：</b>要使用此功能部件，您还必须完成下列任务：<br><ul><li>在管理工具的 <b>Sync Services</b> 部分指定<b>同步服务公用 URL</b>。</li><li>将此存储库添加至为其启用了同步服务的桌面。</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "指定用户向存储库添加文档时，缺省情况下是否选择主版本选项。<br /><br />如果用户要将文档作为次版本进行添加，那么他们可以选择清除此选项。",
		admin_repcfg_p8_checkin_as_major_version_hover: "指定用户将文档检入存储库时，缺省情况下是否选择主版本选项。<br /><br />如果用户要将文档作为次版本进行检入，那么他们可以选择清除此选项。",
		admin_repcfg_p8_annotation_security_hover: "指定缺省情况下要应用于注释的安全性类型。<br /><br />用户可以选择更改注释的安全性。",
		admin_repcfg_p8_connection_point_hover: "如果要使用 IBM FileNet P8 工作流程，请选择 Process Engine 连接点。您选择的连接点会确定访问此存储库的用户可以使用哪些工作流程。",
		admin_repcfg_p8_include_workflow_definition_hover: "如果在 Web 客户端中显示 IBM FileNet P8 工作流程定义文档类，那么用户可以搜索工作流程定义并将其添加到存储库。",
		admin_repcfg_p8_include_form_template_hover: "如果在 Web 客户端中显示 IBM FileNet P8 表单模板文档类，那么用户可以搜索表单模板并将其添加到存储库。",
		admin_repcfg_od_afp2pdf_config_file_hover: "指定此存储库的 AFP2PDF 配置文件在 Web 应用程序服务器上的标准路径。查看和打印 AFP 数据需要“AFP2PDF 转换”。<br /><br /><b> 提示：</b>必须安装“AFP2PDF 转换”，才能使用此参数。",
		admin_repcfg_od_transform_xml_file_hover: " 如果要使用定制转换来转换 Content Manager OnDemand 内容，请指定用于定义该转换的 XML 文件的标准路径。该 XML 文件必须位于 Web 应用程序服务器上。",
		admin_repcfg_od_ssl_hover: "指定是否使用 SSL 对 IBM Content Navigator 应用程序服务器、Content Manager OnDemand 库服务器与对象服务器之间的通信进行加密。<br /><br /><b>要点：</b>对 Content Manager OnDemand 启用 SSL 时，不包括 IBM Content Navigator 应用程序服务器、Web 服务器或用户工作站之间的通信。",
		admin_repcfg_od_ssl_keyringdb_file_hover: "指定此存储库的密钥环数据库文件在 Web 应用程序服务器上的标准路径。例如，C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb。<br /><br />密钥环数据库文件包含可信根证书。应该使用强大的文件系统保护来阻止对此文件的未经授权的访问。",
		admin_repcfg_od_ssl_keyringstash_file_hover: "指定此存储库的密钥环隐藏文件在 Web 应用程序服务器上的标准路径。例如，C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth。<br /><br />密钥环隐藏文件包含密钥环数据库文件的密码。应该使用强大的文件系统保护来阻止对此文件的未经授权的访问。",
		admin_repcfg_od_sso_password_hover: "指定对 OnDemand 服务器进行单点登录时要使用的密码。",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API 支持定制属性。如果要在通过 Web 客户端连接存储库时使用任何定制属性，请指定定制属性的名称和值。<br /><br />有关支持的定制属性的更多信息，请参阅 ODWEK Java API Javadocs（位于 ODWEK 安装目录的 /api 子目录内）。",
		admin_repcfg_od_custom_properties_name_hover: "输入属性名。",
		admin_repcfg_od_custom_properties_value_hover: "输入属性值。",
		admin_repcfg_od_use_sso_hover: "指定是否允许用户使用单点登录。<br /><br /><b>要点：</b>必须在 Content Manager OnDemand 服务器上启用单点登录，此参数的配置才能工作。",
		admin_repcfg_cmis_use_gzip_encoding_hover: "对此 CMIS 源使用 GZIP 编码。",
		admin_repcfg_cm_use_part_file_name: "下载文档时要使用的文件名：",
		admin_repcfg_cm_use_part_file_name_help: "指定用户下载文档时将如何确定文档的文件名。",
		admin_repcfg_cm_use_part_file_name_enable: "使用文件名",
		admin_repcfg_cm_use_part_file_name_disable: "使用存储库中项的名称",
		admin_repcfg_add_doc_name: "所添加文档的缺省名称：",
		admin_repcfg_add_doc_name_hover: "用户在添加文档之前可以更改文档名称。",
		admin_repcfg_add_doc_name_empty: "无（空白）",
		admin_repcfg_add_doc_name_file_name: "所选择文档的文件名",

		admin_repcfg_compound_documents: "复合文档功能部件：",
		admin_repcfg_compound_documents_hover: "启用 P8 复合文档功能部件，例如，导航。",
		admin_repcfg_cm_action_list_config_enabled: "工作项操作列表：",
		admin_repcfg_cm_action_list_config_hover: "当您配置 Content Manager 系统管理客户机中的路由的文档时，可以指定用户能够对工作项执行的一系列操作。<br /><br />如果您希望使用 Content Manager 服务器中的“操作列表”，那么请启用此选项。这些设置将在上下文菜单以及工作项的“编辑属性”窗口中使用。<br /><br /><b>重点：</b>“操作列表”中的设置将覆盖您在 Content Navigator 管理工具中配置的任何定制菜单。如果“操作列表”中不存在任何设置，那么用户无法对工作项执行任何操作。",

		admin_repcfg_box_share: "Box 共享",
		admin_repcfg_box_share_p8_hover: "允许用户共享此存储库中的文档。共享文档包括将该文件复制到 Box、创建链接以及通过电子邮件发送该链接。<br /><br />如果您启用 Box 共享，那么 IBM Content Navigator 将在存储库上创建 Box 共享数据模型。要安装 IBM Content Navigator Box 共享附加组件，您必须作为库服务器管理员连接至该存储库。",

		admin_menu_type_icon: "菜单类型图标",
		admin_menu_toolbar_hover: "工具栏",
		admin_menu_toolbar_custom_hover: "定制工具栏",
		admin_menu_contextMenu_hover: "上下文菜单",
		admin_menu_contextMenu_custom_hover: "定制上下文菜单",

		admin_menu_contextMenu_custom_empty: "所配置的插件中未定义任何定制上下文菜单。",
		admin_menu_toolbar_custom_empty: "所配置的插件中未定义任何定制工具栏。",

		admin_file_type_category_filters: "文件类型过滤器：",
		admin_file_type_category_filters_hover_help: "指定用户可在以下情况中使用的文件类型的列表：<ul><li>缩小在 IBM Content Navigator for Microsoft Office 中进行搜索和浏览时的结果列表范围<li>缩小在 Web 客户端中搜索 IBM FileNet P8 存储库时的结果列表范围<li>限制在使用输入模板时用户可添加至存储库的文件类型</ul>",
		admin_file_type_only_use_in_et_folder_association: "仅在输入模板文件夹关联中显示",
		admin_office_config_properties_label: "Office 属性",
		admin_office_config_type_label: "数据类型",
		admin_office_config_mapped_property_label: "存储库属性",
		admin_office_config_properties_hover_help: "输入并添加要映射至存储库属性的每个 Microsoft Office 属性的名称。所有属性的数据类型必须匹配",
		admin_office_config_mapped_property_hover_help: "如果要将 Office 属性映射至多个存储库属性，那么必须创建新的属性映射",
		admin_new_property_mapping_title: "新建属性映射",
		admin_property_mapping_title: "编辑属性映射",
		admin_property_mapping_instruction: "指定要映射至存储库上的属性的 Microsoft Office 属性。Office 属性的数据类型必须与存储库上的属性的数据类型相匹配。<br /><br />如果 Office 文档具有来自映射的多个属性，那么 IBM Content Navigator 将使用列表中的第一个属性来填充存储库上的属性。",
		admin_ms_general_settings: "常规配置：",
		admin_ms_delete_local_settings: "用户执行以下操作时删除本地文件：",
		admin_ms_outlook_options: "Outlook 集成：",
		admin_ms_enable_props_mapping: "用户执行以下操作时将 Office 属性映射至存储库属性：",
		admin_ms_open_doc_when_checkout: "当文档处于打开状态时自动将其检出",
		admin_ms_open_doc_when_checkout_hover_help: "选择此选项可防止用户使用存储库上文件的旧版本覆盖该文件。",
		admin_ms_prompt_close_office: "用户关闭 Office 应用程序时提示用户检入文档",
		admin_ms_prompt_close_office_hover_help: "选择此选项可防止用户忘记检入其工作。",
		admin_ms_add_with_entry_template_only: "仅在“使用模板添加”操作中显示",
		admin_ms_delete_local_on_add: "用户添加文档时删除本地文件",
		admin_ms_delete_local_on_checkin: "用户检入文档或者取消检出时删除本地文件",
		admin_ms_delete_local_on_add_hover_help: "用户在 IBM Content Navigator for Microsoft Office 中添加文档时，该文档会添加至存储库，且该文档的本地副本将保持打开，以便用户可以立即检出该文档以进行更改。<br /><br />选择此选项以在将文档添加至存储库之后自动关闭和删除该文档的本地副本。",
		admin_ms_delete_local_on_checkin_hover_help: "用户在 IBM Content Navigator for Microsoft Office 中检入文档时，会将该文档检入存储库，且该文档的本地副本将保持打开。此外，在使用“取消检出”操作之后，该文档的本地副本也将保持打开。在本地副本打开的情况下，用户可以立即再次检出该文档以进行更改。<br /><br />选择此选项以在检入文档或者使用“取消检出”操作之后自动关闭和删除该文档的本地副本。",
		admin_ms_delete_local_on_save: "保存文档",
		admin_ms_prompt_for_props_on_add: "在用户将电子邮件添加到存储库时提示其提供属性值",
		admin_ms_prompt_for_props_on_add_hover_help: "如果未选择此选项，那么 Web 客户端将使用为此存储库定义的 Outlook 属性映射。<br /><br />如果具有与要将电子邮件添加到的文件夹相关联的输入模板，那么可能不会提示用户输入任何属性。",
		admin_ms_delete_email_on_add: "将电子邮件添加到存储库时从电子邮件服务器删除电子邮件",
		admin_ms_send_email_as_link_only: "防止用户将文档作为附件来发送",
		admin_ms_send_email_as_link_only_hover_help: "如果您选择此选项，那么用户只能从 Outlook 中将文档作为链接来发送。此选项确保只有对存储库具有适当特权的用户可以查看文档。",
		admin_ms_enable_prop_mapping_for_add: "用户添加或检入文档时将 Office 属性映射至存储库属性",
		admin_ms_checkout_document_after_add: "将文档添加至存储库之后自动检出文档",
		admin_no_default_document_type_filtering: "用户运行搜索时返回所有文档类型（缺省情况）",
		admin_no_default_document_type_filtering_hover_help: "在 IBM Content Navigator for Microsoft Office 中，缺省行为是该用户在运行搜索时仅见到当前应用程序的文档类型。例如，他们搜索 Microsoft Word 时缺省情况下仅选择 Word 文档类型。<br/><br/>但是，选择此选项会清除“文档类型”复选框，以便用户查看搜索返回的所有文档。用户可以通过在运行搜索之前选择一个或多个文档类型来覆盖此设置。",
		admin_ms_enable_prop_mapping_for_add_hover_help: "指定是否将为 Microsoft Office 文档定义的文档属性映射至在存储库上定义的属性。<br /></br /><b>要点：</b>如果启用此功能，那么您必须为您的环境中的每个存储库配置 Office 属性。如果您未将 Office 属性映射至存储库属性，此功能将无法工作。<br /><br />此设置不适用于 Microsoft Outlook。",
		admin_ms_checkout_document_after_add_hover_help: "选择此选项以减少在将文档添加至存储库之后用户使用这些文档时需要执行的步骤数。<br /></br /><b>提示：</b>要确保用户将文件重新检入到存储库，请选择<b>用户关闭 Office 应用程序时提示用户检入文档</b>。",
		admin_ms_show_details_recently_used: "显示<b>最近所使用</b>项的详细信息",
		admin_ms_show_details_recently_used_hover_help: "缺省情况下，当您查看“最近所使用”项的列表时，会隐藏项的详细信息，这可显示更多项。缺省情况下，选择此选项时，在“最近所使用”项的列表中，会在详细信息窗格中显示第一个文档的详细信息。",
		admin_ms_show_no_permissions_warning: "用户编辑属性或者检入文档，但是没有权限查看该文档的输入模板时会显示警告",
		admin_ms_show_no_permissions_warning_hover_help: "如果存储库中的文档是使用输入模板创建的，但是用户没有权限查看该文档的输入模板，那么检索不到该输入模板。<br /><br/>因此，用户编辑文档属性时，不会使用输入模板来显示属性。并且，用户检入文档时，不会使用输入模板来检入该文档。<br /><br />缺省情况下，执行这些操作时，不会通知未使用输入模板的用户。警告只会记录到日志文件中。<br /><br />如果您想要显示警告，以便在未使用输入模板时立即通知用户，请选择此选项。",
		admin_ms_hide_search_actions: "折叠搜索过滤器部分",
		admin_ms_hide_search_actions_hover_help: "缺省情况下，用户可以应用操作过滤器来指定操作、用户或用户组，并选择执行操作的日期或日期范围。例如，可以搜索只有您在上个月添加的文档。<br /><br />如果您不想允许用户应用操作过滤器，那么选择此选项以隐藏操作过滤器，并减少在定义搜索条件时所显示的字段数。",
		admin_ms_hide_save_document: "在功能导航栏中隐藏<b>保存</b>选项",
		admin_ms_hide_save_document_hover_help: "通过使用<b>保存</b>选项，用户无需检入文档，即可将文档更改保存到存储库。",
		admin_ms_indicate_managed_email_on_add: "指示电子邮件是否已添加至存储库",
		admin_ms_indicate_managed_email_on_add_hover_help: "选择此选项可让用户知道邮件已在存储库中，这可以减少将电子邮件添加到存储库的次数。如果选择此选项，那么会在 Microsoft Outlook 中创建名为 IBM ECM 的新颜色类别。添加到存储库的任何电子邮件将自动添加到“在 IBM ECM 中管理”类别中。",
		admin_ms_edit_group_add_command_configuration: "在“编辑”组添加选项：",
		admin_ms_edit_group_add_command_configuration_hover_help: "指定功能导航栏中的<b>编辑</b>组中的哪些<b>添加</b>选项可用：<ul><li>选择<b>显示所有“添加”选项</b>以显示“添加”按钮及“编辑”组中可用的所有“添加”操作。</li><li>如果要阻止用户将文档添加到存储库或者希望用户仅从团队空间中添加文档，请选择<b>隐藏所有“添加”选项</b>。</li><li>如果要实施输入模板文件夹关联并阻止用户选择另一输入模板，请选择<b>隐藏“使用模板添加”操作</b>。</li><li>如果您希望要求用户使用输入模板来添加文档，请选择<b>仅显示“使用模板添加”操作</b>。</li></ul>",
		admin_ms_show_edit_group_add_button: "显示所有“添加”选项（缺省）",
		admin_ms_hide_edit_group_add_button: "隐藏所有“添加”选项",
		admin_ms_hide_add_with_entry_template: "隐藏“使用模板添加”操作",
		admin_ms_managed_in_ecm: "在 IBM ECM 中管理",
		admin_ms_managed_in_ecm_hover_help: "如果用户在 Microsoft Outlook 中显示类别，那么会对添加至 IBM Content Manager 或者 IBM FileNet Content Manager 存储库的电子邮件显示此标签。",
		admin_ms_managed_in_ibm_ecm_input_invalid: "“在 IBM ECM 中管理”类别名称不能包含逗号 (,) 或分号 (;)。",
		admin_delete_open_docs_after_close: "用户关闭文档时自动删除已打开文档",
		admin_admin_delete_open_docs_after_close_hover_help: "用户在 IBM Content Navigator for Microsoft Office 中打开文档时，该文档将下载到用户文档目录或桌面的文件跟踪设置指定的位置。<br><br>选择此选项以在用户关闭文档时删除已打开但未检出的文件。选择此选项允许您：<ul><li>遵循 IT 策略</li><li>确保用户使用文档的最新版本</li><li>减少用于存储文档的磁盘空间量</li><ul>",
		admin_ms_custom_command_configuration: "定制命令：",
		admin_ms_custom_command_configuration_hover_help: "您可以将最多四个命令添加到 Microsoft Office 应用程序中的 IBM Content Navigator for Microsoft Office 工具栏。这些命令可用于打开 URL。例如，您可以添加命令来打开可用于搜索用户和组的服务。",
		admin_ms_custom_command_dialog_title: "编辑定制命令",
		admin_ms_custom_command_dialog_intro_text: "定义可用于从 Microsoft Office 应用程序中的 IBM Content Navigator for Microsoft Office 工具栏中打开 URL 的命令。",
		admin_ms_custom_command_id: "命令 ${0}",
		admin_ms_custom_command_available_label: "可用",
		admin_ms_custom_command_available_hover_help: "如果对命令定义的 URL 需要脱机以进行维护，那么您可取消选中对应该命令的复选框以便不在 Microsoft Office 中显示该命令。<br/><br/><b>要点：</b>用户必须从桌面注销以便在 IBM Content Navigator for Microsoft Office 中反映更改。",
		admin_ms_custom_command_command_id_label: "命令标识",
		admin_ms_custom_command_id_label: "标识",
		admin_ms_custom_command_label_label: "标签",
		admin_ms_custom_command_label_hover_help: "指定在 Microsoft Office 中要对该命令显示的标签。",
		admin_ms_custom_command_description_label: "描述",
		admin_ms_custom_command_description_hover_help: "指定在 Microsoft Office 中要对该命令显示的描述。",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "指定要从 Microsoft Office 打开的标准 URL。该 URL 可以是 Web 页面或服务。",
		admin_ms_custom_command_icon_label: "图标",
		admin_ms_custom_command_icon_hover_help: "指定要显示的图标的文件名，例如，CommandIcon.png。<br/><br/><b>要点：</b>您必须在每台客户端机器上的 IBM Content Navigator for Microsoft Office 安装目录的 Plugins 子目录中添加该图标文件。<br/><br/>如果该图标文件不在 Plugins 目录中，或者您未指定图标，那么会显示缺省图标，即 customButtonIcon_38.gif。",
		admin_ms_custom_command_group_name: "组标签：",
		admin_ms_custom_command_group_name_hover_help: "您可以指定要在功能导航栏中的定制命令下显示的组标签。<br/><br/>如果未指定标签，那么组标签为<b>定制命令</b>。",
		admin_ms_ribbon_tab_label: "IBM ECM 选项卡标签：",
		admin_ms_ribbon_tab_hover_help: "输入要在 Microsoft Office 功能导航栏中对 IBM Content Navigator for Microsoft Office 选项卡显示的名称。如果未指定名称，那么该选项卡名为“IBM ECM”。",
		admin_ms_close_task_pane_on_open: "用户打开文档时关闭任务窗格",
		admin_ms_close_task_pane_on_open_hover_help: "如果想要在 Microsoft Office 中最大化空间以便用户可在其中查看文档，请选择此选项。<br/><br/>Microsoft Office 2010 用户：要确保对所有文档关闭任务窗格，请通过单击<b>选项</b> &gt; <b>高级</b>并取消选中<b>在任务栏中显示所有窗口</b>选项来启用多文档界面 (MDI) 方式。",
		admin_ms_open_document_options: "打开文档选项：",
		admin_ms_delete_local_file_options: "删除本地文件选项：",
		admin_ms_add_and_checkin_options: "添加和检入选项：",
		admin_ms_search_options: "搜索选项：",
		admin_ms_display_options: "显示选项：",
		admin_ms_bidirection_enable_label: "启用对双向文本的支持",
		admin_ms_bidirection_enable_hover_help: "如果您想要使用户能够按照从左到右之外的方向输入或查看 IBM Content Navigator for Microsoft Office 中的文本，请选择此选项。",
		admin_ms_text_direction_label: "内容的基本文本方向：",
		admin_ms_text_direction_hover_help: "指定在 IBM Content Navigator for Microsoft Office 中将文本输入到输入字段时采用的方向。此设置还将控制如何显示各项（例如，文件夹名称或属性值）。",
		admin_ms_control_threshold_label: "要启用预测的最小项数：",
		admin_ms_control_threshold_hover_help: "缺省情况下，当项数大于或等于 50 时启用了预测，用于搜索或设置在下拉列表中具有预定义的值的属性。您可以更改最小值。",

		admin_ms_default_email_class: "添加电子邮件时要使用的类",
		admin_ms_default_email_class_hover_help: "会将从 Microsoft Outlook 添加到此存储库的任何电子邮件都添加到您指定的类。用户不能更改该类。",
		admin_ms_default_folder_class: "创建文件夹时要使用的类",
		admin_ms_default_folder_class_hover_help: "会将从 Microsoft Office 应用程序在此存储库中创建的任何文件夹都添加到您指定的类。用户不能更改该类。",
		admin_ms_default_folder_warn_title: "创建文件夹时，不能将 ${0} 类用作要使用的类。",
		admin_ms_default_folder_warn_name_prop_invalid: "此类的名称属性不是一个字符串，而文件夹的名称必须是字符串。<br />创建文件夹时选择使用另外一个类，或使用 IBM Content Manager 管理员身份将该类的名称属性更改为字符串。",
		admin_ms_default_folder_warn_req_props: "此类包含不具有值的必需属性。但是，用户从 IBM Content Navigator for Microsoft Office 创建文件夹时，无法指定所需属性的值。<br />创建文件夹时选择使用另一个类，或使用 IBM Content Manager 管理员使所需属性变为可选，也可以使用值预填所需的属性。",
		admin_ms_delimiter_for_office_properties: "多值字符串属性的定界符",
		admin_ms_delimiter_for_office_properties_hover_help: "对您将要映射至多值字符串属性的字符串属性指定要用作定界符的字符。缺省情况下，可为多值字符串属性指定一组值，使用分号 (;) 作为定界符来分隔这些值。但是，如果其中一个字符串值中包括分号，那么除非您将定界符更改为其他字符，否则您将无法添加该字符串值。例如，您可以将定界符更改为逗号 (,)",
		admin_ms_outlookPropertyRemembrance : "添加消息和附件时记住设置",
		admin_ms_outlookPropertyRemembrance_hover_help : "将记住分配给这些消息和附件的属性值、位置、类选择和安全性，将来添加项时，它们将用作缺省设置。",

		admin_file_type_name_hover_help: "“名称”悬浮式帮助",
		admin_file_type_description_hover_help: "“描述”悬浮式帮助",
		admin_file_type_dialog_title: "编辑文件类型过滤器",
		admin_new_file_type_dialog_title: "新建文件类型过滤器",
		admin_mobile_feature_dialog_title: "功能部件",
		admin_mobile_feature_dialog_new_title: "新建功能部件",
		admin_file_type_instructions: "创建用户可用来缩小搜索结果列表的范围的过滤器。您可以将多个 MIME 类型映射到过滤器。",
		admin_file_type_filter_place_holder: "过滤 MIME 类型",
		admin_new_button_label: "新建",
		admin_edit_button_label: "编辑",
		admin_delete_button_label: "删除",
		admin_copy_button_label: "复制",
		admin_verify_button_label: "验证",
		admin_availabe_filters_label: "可用过滤器",
		admin_selected_filters_label: "所选过滤器",

		admin_mobile_access: "移动应用程序访问：",
		admin_mobile_access_hover_help: "如果要从移动设备使用 IBM Content Navigator，那么建议您允许用户从移动应用程序访问此桌面。<br /><br />如果您禁止从移动应用程序访问此桌面，那么用户仍然可以从其移动浏览器访问 Web 客户端。但是，Web 客户端并非旨在供您从移动设备访问。",

		admin_mobile_access_allow_label: "允许用户：",
		admin_mobile_allow_add_photos: "从相机和照片库添加照片",
		admin_mobile_allow_add_docs: "将文档添加到存储库和在存储库中创建文件夹",
		admin_mobile_allow_open_docs: "在其他应用程序中打开文档",
		admin_mobile_allow_add_docs_hover_help: "用户可以从其他移动应用程序创建文件夹或添加文档（例如，附加到电子邮件的文档）。",
		admin_mobile_allow_open_docs_hover_help: "将提示用户选择用于查看所选文档的应用程序。如果仅一个应用程序可用，那么将使用该应用程序。",
		admin_mobile_features: "功能部件：",
		admin_mobile_features_hover_help: "指定在 IBM Content Navigator 移动应用程序中显示的此桌面的功能部件。",
		admin_mobile_new_feature_button_label: "新建功能部件",
		admin_mobile_move_up_button_label: "上移",
		admin_mobile_move_down_button_label: "下移",
		admin_desktop_mobile_instructions: "此处显示移动设置指示信息",
		admin_desktop_max_number_of_docs_to_add: "要添加的最大文档数：",
		admin_desktop_max_number_of_docs_to_add_hover_help: "指定用户一次可添加的最大文档数。缺省最大数目为 50。但是，您可以将最大数目设置为 300。",
		admin_desktop_max_number_of_docs_to_modify: "要修改的最大项数：",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "指定用户一次可以修改的最大项数。缺省最大数目为 50。但是，您可以将最大数目设置为 300。",
		admin_desktop_max_conversion_size: "要进行 PDF 转换的最大数据量（以 MB 计）：",
		admin_desktop_max_conversion_size_hover_help: "<b>限制：</b>此设置在 IBM Content Manager OnDemand 上不受支持。<br/><br/>指定可以转换为 PDF 的最大数据量。用户将项以 PDF 文件形式进行下载，或者通过电子邮件以 PDF 文件形式发送项时，适用此限制。<br /><br />如果无法确定每个文档的大小，那么仍然会将这些文档转换为 PDF。<br/><br/>缺省限制为 200 MB。将限制设置为超过 200 MB 可能会影响系统性能。",
		admin_desktop_timeProperties: "时间戳记：",
		admin_desktop_time_properties_hover_help: "<b>仅适用于 IBM FileNet P8 用户：</b>此设置适用于定制属性，而不适用于系统属性。例如，如果您选择<b>仅显示时间戳记的日期部分</b>，那么“修改者”属性仍将显示时间戳记的时间部分。<br/><br/>此设置不会在存储库中更改时间戳记。",
		admin_desktop_disable_time_stamp: "显示完整的时间戳记",
		admin_desktop_enable_time_stamp: "仅显示时间戳记的日期部分",
		admin_desktop_timezone: "时区：",
		admin_desktop_timezone_localuser: "显示用户的当地时区",
		admin_desktop_timezone_alluser: "对所有用户显示同一时区",
		admin_desktop_timezone_hover_help: "您可以指定用户是看到基于其当地时区的时间戳记，还是所有用户都看到同一时间戳记。<br/><br/>此设置不会在存储库中更改时间戳记。但是，用户添加或修改项时，您选择的设置将确定用来在存储库中创建时间戳记的时区。",
		admin_desktop_mobile_feature_display_label: "显示",
		admin_desktop_mobile_feature_icon_file_label: "图标文件",
		admin_mobile_feature_dialog_icon_file_label: "图标文件：",
		admin_mobile_feature_dialog_url_label: "URL：",
		admin_desktop_mobile_feature_name_label: "名称",
		admin_desktop_mobile_select_feature_label: "选择功能部件",
		admin_desktop_mobile_feature_icon_label: "功能部件图标",
		admin_desktop_share_admin_none: "未设置管理员。",
		admin_desktop_share_admin_edit_label: "设置管理员...",
		admin_browse_icon: "“浏览”图标",
		admin_search_icon: "“搜索”图标",
		admin_favorites_icon: "“收藏夹”图标",
		admin_casesearch_icon: "“案例”图标",
		admin_datacap_icon: "“数据捕获”图标",
		admin_system_defined: "系统定义",
		admin_icon_file_placeholder_text: "文件位置（如 http://icons.com/image.bmp）",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "根",
		admin_folder_default: "缺省",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "工具栏",
		admin_menu_context_menus: "上下文菜单",
		admin_menu_office_toolbars: "Microsoft Office 功能导航栏命令",
		admin_menu_office_menus: "Microsoft Office 上下文菜单",

		admin_file_name_label: "文件名：",
		admin_exportconfiguration_security_label: "包括已获得使用此桌面授权的用户和组",
		admin_exportconfiguration_instruction: "您可以将桌面（包括与所选桌面关联的存储库配置和插件配置）导出到一个文件，然后可将该文件导入到其他 IBM Content Navigator 实例。",
		admin_exportconfiguration_dialog_label: "导出桌面",
		admin_exportconfiguration_button_label: "导出",
		admin_dialog_select_all: "全部选中",
		admin_dialog_deselect_all: "全部清除",

		admin_importconfiguration_instruction: "所选配置文件中的项将导入到此系统。但是，如果系统上已存在具有相同标识的项，那么您必须决定要保留还是覆盖该项。",
		admin_importconfiguration_dialog_label: "导入桌面",
		admin_importconfiguration_reason_dialog_label: "导入修订原因",
		admin_importconfiguration_button_label: "导入",
		admin_to_be_imported: "要导入的配置项",
		admin_on_target_system: "目标系统上的现有项",
		admin_import_short_warning_message: "在此系统上已存在下列项。请选择此系统上要替换的项：",
		admin_import_warning_message: "以下配置项与存在于目标系统上的项具有相同标识。请只选择要在目标系统上导入并覆盖的那些项。<br /><br />如果不想覆盖配置项，请在从中导出桌面的实例上创建该项的副本，为其指定不同的标识并将其与桌面相关联。再次导出该桌面，然后在此实例上导入该桌面。",
		admin_choose_file_to_import_label: "选择文件以导入：",
		admin_download_imported_log: "下载报告",
		admin_desktop_import_summary: "桌面导入摘要",
		admin_reason_import_summary: "修订原因导入摘要",
		admin_rba_import_summary: "管理角色导入摘要",
		admin_import_open_tabs_checking: "必须先关闭管理工具中除<bold>桌面</bold>选项卡以外的所有选项卡，才能导入桌面。",
		admin_import_no_conflict: "将导入以下项：",
		admin_desktop_invalid: "无效的桌面",
		admin_desktop_warning: "已保存桌面，但存在警告。",
		admin_repos_warning: "已保存存储库，但存在警告。",
		admin_config_type_icon: "配置项类型图标",

		admin_approval_workflow: "审批工作流程",
		admin_approval_workflow_hover: "允许用户启动预定义审批工作流程。您可以禁止审批工作流程以允许用户启动预订定义的定制审批工作流程。缺省情况下，已启用审批工作流程。<br><br><b>要点：</b>如果启用审批工作流程，那么还必须确保将一个或两个预定义工作流程定义（ICNParallelDocumentApproval.pep 和 ICNSequentialDocumentApproval.pep）添加到存储库并传输到 Content Process Engine。",

		admin_cannot_add_desktop_members_error: "无法指定对此桌面具有访问权限的用户和组。",
		admin_cannot_add_desktop_members_error_explanation: "您没有相应的许可权，无法检索用户和组信息。",
		admin_cannot_add_desktop_members_error_userResponse: "使用另一用户名登录，或要求您的 IBM Content Manager 系统管理员授予您 UserACLOwner 特权，用于检索用户和组信息。",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "不能选择用户和组。",
		admin_cannot_select_users_groups_error_explanation: "您没有相应的许可权，无法检索用户和组信息。",
		admin_cannot_select_users_groups_error_userResponse: "使用另一用户名登录，或要求您的 IBM Content Manager 系统管理员授予您 UserACLOwner 特权，用于检索用户和组信息。",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "找不到 OAuth2 客户机。",
		oauth_client_not_found_error_explanation: "找不到 OAuth2 客户机标识 ${0}。",
		oauth_client_not_found_error_userResponse: "请联系系统管理员，让他们知道找不到 OAuth2 客户机标识。",
		oauth_client_not_found_error_adminResponse: "请查看存储库配置，并验证它是否包含正确的 OAuth2 客户机标识。",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "客户机标识",

		oauth_login_failed_error: "存储库登录失败。",
		oauth_login_failed_error_explanation: "尝试登录存储库 ${0} 失败。",
		oauth_login_failed_error_userResponse: "请验证用户标识和密码是否正确，然后再次尝试登录。",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "尝试登录 ${0} 时发生错误。",
		oauth_error_return_error_explanation: "${0} 授权尝试失败。",
		oauth_error_return_error_userResponse: "请联系系统管理员，并提供下列信息：${0} 授权尝试失败，返回了以下错误消息：<br>${1}<br><b>错误：</b>${2}。<br><b>描述：</b>${3}。",
		oauth_error_return_error_adminResponse: "有关该错误的其他信息位于 Web 应用程序服务器日志文件内。有关日志文件的更多信息，请参阅 IBM Knowledge Center 中的“IBM Content Navigator 日志文件”。使用有关 ${0} 授权尝试的信息来尝试更正问题，并验证是否启用了 OAuth2。",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth 目标应用程序",
		oauth_error_return_error_1: "错误消息",
		oauth_error_return_error_2: "错误",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "不识别的 OAuth 错误消息。",

		delete_share_permission_error: "未删除共享。",
		delete_share_permission_error_explanation: "您没有相应的许可权来删除共享。",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "无法共享此项。",
		class_not_support_share_error_explanation: "未将类别 ${0} 设置为支持共享。",
		class_not_support_share_error_0: "类名",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "无法共享此项。",
		rbr_not_support_share_error_explanation: "已将敏感内容添加至项。",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "用户试图从其进行登录的设备未被授权访问用户帐户。",
		box_oauth_error_invalid_request: "请求缺少必需参数，包括无效参数值，多次包括某个参数，或者格式不正确。",
		box_oauth_error_unsupported_response_type: "授权服务器不支持使用此方法来获取授权码。请检查请求中的 code 参数的值。",
		box_oauth_error_access_denied: "资源所有者或者授权服务器已拒绝该请求。",
		box_oauth_error_temporarily_unavailable: "设备的速度有限，您需要降低授权请求的速度，或者稍等一会儿。",
		box_oauth_error_unknown: "不识别的 Box 错误消息。",

		admin_default_search_type: "缺省搜索类型",
		admin_default_search_type_hover: "指定缺省情况下在<b>搜索选项</b>菜单的<b>搜索对象</b>字段中会选择哪个选项。",
		admin_default_search_type_documents: "文档",
		admin_default_search_type_folders: "文件夹",
		admin_default_search_type_folders_and_documents: "文档和文件夹",

		admin_restricted_search_type: "允许搜索的位置",
		admin_restricted_search_type_hover: "缺省情况下，用户可以在文档和文件夹中进行搜索。如果您想要隐藏“搜索位置”选项，并且限制为仅在文档中进行搜索，那么选择“文档”，而取消选择“文件夹”。</br> </br>如果您允许在文档和文件夹中都可进行搜索，那么选择在打开搜索窗格时显示的缺省选项。",
		admin_restricted_search_type_documents: "文档",
		admin_restricted_search_type_folders: "文件夹",
		admin_restricted_search_type_folders_and_documents: "文档和文件夹",

		admin_default_search_version: "缺省搜索版本",
		admin_default_search_version_hover: "指定缺省情况下在<b>搜索选项</b>菜单的<b>版本</b>字段中会选择哪个选项。",

		admin_all_classes_search: "搜索所有类",
		admin_all_classes_search_hover: "指定是否允许用户跨所有类进行搜索，如果允许，请指定文档搜索中应该包含哪些内容。",
		admin_all_classes_search_removed_hover: "搜索所有类的选项不可用，因为 Navigator 应用程序 web.xml 中的 context-param allPseudoClassHidden 参数设置为 true。",
		admin_all_classes_search_hide: "移除选项以搜索所有类",
		admin_all_classes_search_documents_only_documents: "文档搜索仅包含文档、保存的搜索和输入模板",
		admin_all_classes_search_documents_non_folders: "文档搜索包含任何不是文件夹的项",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "树形视图：",
		admin_feature_config_tree_view_hoverhelp: "指定用户能否通过“浏览”窗格访问存储库中的文件夹列表。如果隐藏“浏览”窗格，那么用户必须使用内容列表浏览至存储库中的文件夹。",
		admin_feature_config_selected_repositories_label: "存储库：",
		admin_feature_config_selected_repositories_hoverhelp: "选择用户可在此功能部件中访问的存储库。",
		admin_feature_config_selected_repositories_select_state_hdr: "选择存储库",
		admin_feature_config_selected_repositories_name_hdr: "存储库名称",
		admin_feature_config_selected_repositories_show_hdr: "显示",
		admin_feature_config_invalid_icon_title: "此功能部件缺少某些必需设置",
		admin_feature_config_view_select_hdr: "选择视图",
		admin_feature_config_view_hdr: "视图",
		admin_feature_config_view: "视图",
		admin_feature_config_views: "视图：",
		admin_feature_config_views_hoverhelp: "指定用户可以将哪些视图应用于内容列表。这些视图按它们的列示顺序显示。第一个选择的视图就是该功能部件的缺省视图。<br><br><b>要点：</b>如果您启用 Filmstrip 视图，那么您必须配置 HTML 转换查看器来查看文档预览。",

		admin_custom_dialog_name: "名称：",
		admin_custom_dialog_value: "值：",
		admin_custom_setting_name_hover: "输入您想要添加至配置的 Daeja ViewONE 设置的名称。请参阅 Daeja ViewONE 文档，以了解有关配置设置的更多信息。",
		admin_custom_setting_value_hover: "输入您想要用于 Daeja ViewONE 配置设置的值。请参阅 Daeja ViewONE 文档，以了解有关配置设置的有效值的更多信息。",

		entry_template_name_required_message: "“输入模板设置”上的“名称”字段是必需的。",
		entry_template_name_invalid_message: "“输入模板设置”上的“名称”字段不能包含以下字符：* \\ / : ? \" < > |。",
		entry_template_save_in_member_empty_message: "如果对“输入模板设置”上的“与其共享”字段选择了特定用户和组，那么必须指定至少一个用户或组。",
		entry_template_no_permission_to_save_to_teamspace_message: "您没有向团队空间 (${0}) 添加输入模板的许可权，该团队空间是从“输入模板设置”上的“保存位置”中选择的。",
		entry_template_save_in_destination_required_message: "您必须在<b>设置项的存储位置</b>部分指定缺省保存位置。",
		entry_template_save_in_destination_must_select_folder: "如果您隐藏<b>保存位置</b>字段，并且要求用户将新项添加至文件夹，那么您必须在<b>设置项的存储位置</b>部分的<b>缺省保存位置</b>字段中选择一个文件夹。",
		entry_template_what_to_save_required_message: "对“设置选项”上的“您要保存哪些内容”选择至少一个选项。",
		entry_template_custom_workflow_empty_message: "如果您选择<b>定制工作流程...</b>，那么必须搜索并选择要使用的工作流程。",

		entry_template_new: "新建输入模板",
		entry_template_name_hover: "输入模板名称不能包含以下字符：* \\ / : ? \" < > |",
		entry_template_name_invalid: "输入模板名称不能包含以下任意字符：* \\ / : ? \" < > |",
		entry_template_description_hover: "请提供使用户能够将此输入模板与其他输入模板区别开的描述。",
		entry_tempalte_save_in_hover: "指定用于保存输入模板的位置。<br><br><b>限制：</b>如果您将输入模板保存在团队空间中，那么只能在该团队空间中使用该输入模板。",
		entry_template_inherit_hover: "如果您选择此选项，那么会将父文件夹的安全设置添加至共享输入模板的用户和组的列表。",
		entry_template_builder_aria_label: "输入模板构建器",
		entry_template_builder_layout_aria_label: "输入模板属性构建器",

		entry_template_settings_document: "定义输入模板",
		entry_template_settings_folder: "设置项存储位置",
		entry_template_settings_folder_intro: "指定使用此输入模板所添加的项的存储位置。",
		entry_template_settings_properties: "设置项属性",
		entry_template_settings_properties_intro: "可以为使用此输入模板所添加的项指定缺省值或预定义的值。此外，可以更改属性的布局，以控制要显示哪些属性及其显示顺序。",
		entry_template_settings_workflow: "为项配置工作流程",
		entty_template_settings_workflow_intro: "可以指定在使用输入模板添加项时是否启动工作流程。",
		entry_template_settings_security: "设置项安全性",
		entry_template_settings_security_intro: "可以为使用此输入模板所添加的项指定缺省安全性或预定义的安全性。添加项之后，具有适当许可权的用户可能可以更改该项的安全性。",
		entry_template_settings_options: "为项设置选项",
		entry_template_xt_warning: "保存对此输入模板的更改会将其从 IBM Workplace XT 输入模板转换为 IBM Content Navigator 输入模板。IBM Workplace XT 不支持 IBM Content Navigator 输入模板。",

		entry_template_properties_edit_layout: "编辑布局...",
		entry_template_properties_read_only: "只读",
		entry_template_properties_hidden: "隐藏",

		entry_template_destination_show: "显示<b>保存位置</b>字段",
		entry_template_destination_show_hover: "如果您显示<b>保存位置</b>字段，那么用户可以更改项的存储位置。",
		entry_template_destination_hide: "隐藏<b>保存位置</b>字段",
		entry_template_destination_hide_hover: "如果您隐藏<b>保存位置</b>字段，那么用户无法更改项的存储位置。",
		entry_template_folder_save_in_default: "缺省<b>保存位置</b>：",
		entry_template_folder_save_in_default_hover: "指定使用此输入模板所添加的项的缺省位置。<br><br>您选择的缺省位置会对输入模板的运行时行为施加限制：<ul><li>用户无法选择其他存储库。</li><li>如果缺省位置为团队空间，那么用户无法选择其他存储库。</li></ul>但是，如果用户将此输入模板与文件夹相关联，那么用户可以覆盖为此输入模板所配置的存储位置。",
		entry_template_folder_restrict_choice: "要求用户将项添加至缺省位置或者缺省位置的子文件夹",
		entry_template_folder_file_in_required: "要求用户将新项添加至文件夹",
		entry_template_folder_file_in_required_hover: "如果您未选择此选项，那么用户可以将项添加至存储库的根文件夹。<br><br><b>限制：</b>桌面配置可能要求用户选择文件夹。",

		entry_template_document_type_show: "显示<b>您要保存哪些内容</b>字段",
		entry_template_document_type_show_hover: "如果您显示<b>您要保存哪些内容</b>字段，那么您选择的项将作为<b>您要保存哪些内容</b>字段中的选项显示。",
		entry_template_document_type_hide: "隐藏<b>您要保存哪些内容</b>字段",
		entry_template_document_type_hide_hover: "如果您隐藏<b>您要保存哪些内容</b>字段，那么用户使用此输入模板添加文档时，始终使用您选择的文档类型。",
		entry_template_document_type: "此输入模板可用于添加以下项：",
		entry_template_document_type_hover: "如果您显示<b>您要保存哪些内容</b>字段，那么您选择的项将作为<b>您要保存哪些内容</b>字段中的选项显示。<br><br>如果您隐藏<b>您要保存哪些内容</b>字段，那么用户使用此输入模板添加文档时，始终使用您选择的文档类型。",

		entry_template_misc: "其他选项：",
		entry_template_auto_classify_show: "将文档内容自动分类",
		entry_template_auto_classify_show_hover: "在 FileNet Content Manager 上将文档分类之后，会检查文档内容，以确定该文档的适当类和属性值。<br><br>与系统管理员协商以确定是否在 Content Platform Engine 上启用内容分类。<br><br>如果您启用此选项，那么用户将文档添加至存储库时，可能会更改该文档的类和属性。",
		entry_template_allow_duplicate_file_names: "允许具有重复文件名的文档",
		entry_template_allow_duplicate_file_names_hover: "缺省情况下，在 FileNet Content Manager 中可以将同名文档添加至文件夹。如果您希望所选存储位置的每个文件都具有唯一名称，那么可以取消选中此选项。",
		entry_template_allow_compound_documents: "允许此文档作为复合文档的父代",
		entry_template_version_show: "显示用于添加和检入的版本选项",
		entry_template_version_hide: "隐藏用于添加和检入的版本选项",
		entry_template_version_to_add_as: "要添加的缺省版本：",
		entry_template_version_default: "缺省版本选项：",
		entry_template_version_default_checked: "主版本",
		entry_template_version_default_unchecked: "次版本",
		entry_template_version_display: "文档版本：",
		entry_template_version_display_show: "显示",
		entry_template_version_display_hide: "隐藏",
		entry_template_version_default_add: "要添加的缺省版本：",

		entry_template_checkin_version_show: "显示用于检入的版本选项",
		entry_template_checkin_version_hide: "隐藏用于检入的版本选项",

		entry_template_checkin_version_message_no_versions: "所选类的版本策略阻止用户检入文档的新版本。",
		entry_template_checkin_version_message_always_version: "所选类的版本策略阻止用户替换文档的当前版本。",

		entry_template_applied: "用户执行下列操作时使用此输入模板：",
		entry_template_applied_add: "添加文档（必需）",
		entry_template_applied_add_folder: "创建文档（必需）",
		entry_template_applied_checkin: "检入",
		entry_template_applied_properties_group: "查看或编辑属性：",
		entry_template_applied_properties: "在“属性”窗口中",
		entry_template_applied_viewer: "在 Applet 查看器中",
		entry_template_applied_docinfo: "在“文档信息”窗格中",
		entry_template_applied_no_class_support: "可以使用此输入模板来添加项，但是无法用来检入文档或者查看和编辑属性。必须修改所选择的类以支持这些情况。如果您在这些情况下需要使用输入模板，那么请求管理员使用管理工具来修改类，以使它可以存储输入模板标识。",
		entry_template_applied_no_child_component_support: "已为所选类定义子组件和属性布局。属性布局不支持子组件。子组件将不会向用户显示。",
		entry_template_applied_child_component: "所选类具有子组件。将向用户显示这些子组件，但是无法在此输入模板中配置它们。",

		entry_template_properties_show: "显示<b>属性</b>部分",
		entry_tempalte_properties_show_hover: "如果您显示<b>属性</b>部分，那么用户可以修改显示在输入模板中并且不是只读属性的属性值。",
		entry_template_properties_hide: "隐藏<b>属性</b>部分",
		entry_template_properties_hide_hover: "如果您隐藏<b>属性</b>部分，那么用户无法修改任何属性值。输入模板必须定义在使用此输入模板添加项时您想要使用的所有值。",

		entry_template_security_show: "显示<b>安全性</b>部分",
		entry_template_security_show_hover: "如果您显示<b>安全性</b>部分，那么具有适当许可权的用户可以修改该项的安全性。",
		entry_template_security_hide: "隐藏<b>安全性</b>部分",
		entry_template_security_hide_hover: "如果您隐藏<b>安全性</b>部分，那么用户无法修改项的安全性。输入模板必须定义在添加或编辑项时您想要使用的所有安全设置。",
		entry_template_security_policy: "安全策略：",
		entry_template_security_policy_hover: "根据您选择的安全策略，安全策略可以：<br><ul><li>覆盖在<b>设置项安全性</b>下指定的许可权。</li><li>添加至在<b>设置项安全性</b>下指定的许可权。</li></ul>",
		entry_template_security_policy_none: "未选择任何安全策略",
		entry_template_security_inherit: "继承父文件夹中的安全设置",
		entry_tempalte_save_in_hover: "指定用于保存输入模板的位置。<br><br><b>限制：</b>如果您将输入模板保存在团队空间中，那么只能在该团队空间中使用该输入模板。",
		entry_template_security_inherit_item_security_hover: "如果您选择此选项，那么会将父文件夹的安全设置添加至由下列其中一项定义的安全设置：<ul><li>在<b>设置项属性</b>部分中所指定的类</li><li>您在<b>设置项安全性</b>部分中所指定的定制安全性</li></ul>",
		entry_template_security_change: "覆盖所选类定义的安全性",
		entry_template_security_change_hover: "如果您选择此选项，那么缺省情况下会显示为该类定义的安全设置。然后，您可以修改该输入模板的安全设置。<br><br>如果您显示<b>安全性</b>部分，那么具有适当许可权的用户可以修改该项的安全性。<br><br>如果您选择此选项，并且选择继承父文件夹中的安全设置，那么会将任何可继承的许可权添加至您指定的安全性。",
		entry_template_security_default_item_security: "覆盖添加该项的用户的缺省项安全性",
		entry_template_security_policy_message_override: "所选安全策略配置为覆盖在“设置安全性”下指定的许可权。",
		entry_template_security_policy_message_add: "所选安全策略配置为添加至在“设置安全性”下指定的许可权。",
		entry_template_security_policy_preserve_true_hover: "保留直接许可权",
		entry_template_security_policy_preserve_false_hover: "不保留直接许可权",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "特定角色",
		entry_template_security_class_role_search_title: "搜索角色：",
		entry_template_secuirty_class_member_title: "${0} 的成员列表",
		entry_template_secuirty_class_folder_only: "这些许可权仅适用于此文件夹",
		entry_template_secuirty_class_folder_and_immediate_children: "这些许可权适用于此文件夹以及所配置的从此文件夹继承安全性的直系子代。",
		entry_template_secuirty_class_folder_and_all_children: "这些许可权适用于此文件夹以及所配置的从此文件夹继承安全性的所有后代。",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"这些许可权适用于所配置的从此文件夹继承安全性的直系子代。",
		entry_template_secuirty_class_folder_all_children_not_folder: "这些许可权适用于所配置的从此文件夹继承安全性的所有后代。",

		entry_template_class_security_message_no_override: "所选类的安全性阻止用户覆盖安全性。",
		entry_template_class_security_required_privileges: "<b>要点：</b>覆盖所选类的安全性时，使用此输入模板添加项的用户必须具有 ItemSetACL 和 UserACLOwner 特权。",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "顺序模式工作流程",
		entry_template_workflow_type_ICNParallelDocumentApproval: "并行模式工作流程",
		entry_template_workflow_type_existing: "定制工作流程...",
		entry_template_workflow_launch_prompt: "询问用户是否启动工作流程",
		entry_template_workflow_launch_auto: "自动启动工作流程",
		entry_template_workflow_modify_launch: "允许用户修改启动步骤",
		entry_template_workflow_modify_launch_hover: "如果您想要允许用户更改工作流程的启动方式，请选择此选项。",

		entry_template_optionsButton_title: "修改",
		entry_template_optionsButton_readonly_title: "视图关联",
		entry_template_optionsDialog_title: "文件夹关联设置",
		entry_template_removeButton_title: "移除",
		entry_template_addButton_title: "添加",
		entry_template_selected_entry_templates: "所选输入模板",
		entry_template_docs_added_to_template_destination: "文档已添加至输入模板中指定的目标。",
		entry_template_docs_added_to_other_object_store: "此输入模板会将项添加至 ${0} 对象库。",
		entry_template_inherited_entry_templates_label: "我想要：",
		entry_template_inherited_entry_templates: "从文件夹中继承输入模板关联：",
		entry_template_inherited_entry_templates_not: "为此文件夹创建新关联",
		entry_template_inherited_folder_path: "所选输入模板列表中的输入模板与以下文件夹相关联：${0}。<br> 该文件夹的路径为 ${1}。",
		entry_template_folder_associations_title: "关联输入模板",
		entry_template_folder_associations_intro: "使输入模板与文件夹相关联时，用户必须使用输入模板来向该文件夹添加项。如果使多个输入模板与文件夹相关联，那么用户可选择要使用的输入模板。",
		entry_tempalte_folder_associations_entrytemplate: "输入模板：",
		entry_template_avaliable_entry_templates: "可用输入模板",
		entry_template_fileTypes_intro_title: "允许的文件类型：",
		entry_template_fileTypes_intro: "缺省情况下，可使用输入模板向存储库添加任何类型的文档。但是，如果您选择一个或多个文件类型，那么仅用户添加的文档与某个所指定文件类型相匹配时，输入模板才可用。",
		entry_template_fileTypes: "文件类型",
		entry_template_fileType_error: "对一个或多个输入模板关联选择了无效文件类型。必须先移除无效文件类型，才能保存这些输入模板关联。",
		entry_template_fileTypes_any_type_of_file: " 任何类型的文件",
		entry_template_description_label: "描述",
		entry_template_ItemInfoPrefix: "与其关联：",
		entry_template_TargetObjectStoreName: "目标对象存储库",
		entry_template_class: "类",
		entry_template_current_folder_as_parent: "将文件夹用作目标",
		entry_template_view_minetypes: "查看 MIME 类型",
		entry_template_avaliable_MIME_types: "可用的文件类型",
		entry_template_selected_MIME_types: "所选文件类型",
		entry_template_MIME_type_column: "文件类型类别名称",
		entry_template_file_type_not_existing: "请移除无效文件类型。",
		entry_template_MIME_types: "MIME 类型：",
		entry_template_MIME_types_info_dialog_title: "其 MIME 类型",
		entry_template_destination_label: "将文档添加到：",
		entry_template_destination_help: "指定用户通过使用所选输入模板向此文件夹添加文档时，要在存储库上存储文档的位置。",
		entry_template_radioButton_folder_destination: "已选择的文件夹",
		entry_template_radioButton_template_destination: "输入模板中指定的目标",
		entry_tempalte_teamspace_default: "缺省输入模板",
		entry_template_folder_associations_save_new: "您已修改某些输入模板关联。您要关闭此窗口而不保存更改吗？",
		entry_template_mode_binding_label: "属性",
		entry_template_columns_className: "类名",
		entry_template_columns_type: "模板类型",
		entry_template_columns_workflow: "工作流程名称",
		entry_template_columns_destination: "目标",
		entry_template_association_less_than_record: "有 ${0} 个输入模板未列示在“所选择的输入模板”中。您无权查看它们，或者它们已被删除。请联系系统管理员以获取更多信息。",
		/* Request */

		progress_message_general: "正在工作...",
		cancel_message_general: "已取消操作。",
		ie8_not_supported_browser: "IE8 是不受支持的浏览器。",
		progress_message_getDesktop: "正在载入桌面...",
		progress_message_getActions: "正在载入操作...",
		progress_message_getViewers: "正在载入桌面...",
		progress_message_logon: "正在登录...",
		progress_message_logoff: "正在注销...",
		progress_message_getContentClasses: "正在检索类...",
		progress_message_openContentClass: "正在检索类详细信息...",
		progress_message_od_getCabinets: "正在检索文件柜...",
		progress_message_getSearchTemplates: "正在检索搜索...",
		progress_message_od_getTemplates: "正在检索文件夹...",
		progress_message_od_openCabinet: "正在检索文件夹...",
		progress_message_openSearchTemplate: "正在打开搜索...",
		progress_message_od_openTemplate: "正在打开文件夹...",

		progress_message_getWorklists: "正在检索工作列表...",
		progress_message_getWorkItems: "正在检索工作项...",
		progress_message_getNextWorkItems: "正在检索工作项...",
		progress_message_getStepParameters: "正在检索工作项信息...",
		progress_message_getStepAttachmentItems: "正在检索附件信息...",
		progress_message_getDependentParameters: "正在检索属性信息...",

		progress_message_p8_getProcessApplicationSpaces: "正在检索应用程序空间...",
		progress_message_p8_getProcessRoles: "正在检索进程角色...",
		progress_message_p8_getProcessInbaskets: "正在检索收件篮...",
		progress_message_p8_getProcessorInformation: "正在检索进程信息...",
		progress_message_p8_getFilterCriteria: "正在检索收件篮过滤器...",
		progress_message_p8_getLaunchParameters: "正在检索工作项信息...",
		progress_message_p8_getStepAttachments: "正在检索工作项附件...",
		progress_message_p8_getSubscriptions: "正在检索工作流程预订...",
		progress_message_p8_getTrackerParameters: "正在检索工作项信息...",
		progress_message_p8_getTrackerHistory: "正在检索工作项历史记录...",
		progress_message_p8_getTrackerMilestones: "正在检索工作项里程碑...",
		progress_message_p8_completeStep: "正在完成工作项...",
		progress_message_p8_moveToInbox: "正在将项移至收件篮...",
		progress_message_p8_returnToSender: "正在返回工作项...",
		progress_message_p8_reassign: "正在重新分配工作项...",
		progress_message_p8_launchWorkflow: "正在启动工作流程...",
		progress_message_p8_getTransferedWorkflows: "正在检索工作流程信息...",

		progress_message_cm_getProcesses: "正在检索工作流程信息...",
		progress_message_cm_completeStep: "正在继续工作项...",
		progress_message_cm_getItemProcessInformation: "正在检索工作流程信息...",

		progress_message_search: "正在搜索...",
		cancel_message_search: "已取消该搜索。",
		progress_message_getContentItems: "正在检索项信息...",
		progress_message_openFolder: "正在打开文件夹...",
		progress_message_addItem: "正在创建项...",
		progress_message_checkIn: "正在检入项...",
		progress_message_changePassword: "正在更改密码...",
		progress_message_getDefaultInstancePermissions: "正在检索缺省许可权...",
		progress_message_openItem: "正在检索项信息...",
		progress_message_saveItem: "正在保存项信息...",
		progress_message_getPermissions: "正在检索许可权...",
		progress_message_getEntryTemplates: "正在检索输入模板...",
		progress_message_openEntryTemplate: "正在打开输入模板...",
		progress_message_getFavorites: "正在检索收藏夹...",
		progress_message_getFoldersFiledIn: "正在检索文件夹...",
		progress_message_getDocumentVersions: "正在检索版本...",
		progress_message_getDependentAttributeInfo: "正在检索属性信息...",
		progress_message_packageForDownload: "正在打包以便下载...",
		progress_message_convertDocument: "正在转换内容...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "正在检索内容类型...",
		progress_message_SharePointPlugin_SharePointAddDocument: "正在添加文档...",

		progress_message_desktop_reload: "客户端正在重新装入您的桌面。<br>可能会提示您再次登录。",
		progress_message_email: "正在发送电子邮件...",
		cancel_message_email: "已取消电子邮件。",

		progress_message_p8_getOfficeOnlineTemplates: "正在检索 Office 模板...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "收藏夹树",
		favorites_content_list_label: "收藏夹内容列表",
		syncItems_tree_label: "“我的已同步文件”树",
		syncItems_content_list_label: "“我的已同步文件”内容列表",
		my_checkouts_content_list_label: "“我的检出”内容列表",
		browse_tree_label: "浏览树",
		browse_content_list_label: "“浏览”内容列表",
		repository_selector_label: "存储库选择器",
		teamspaces_content_list_label: "“团队空间”内容列表",
		templates_content_list_label: "“模板”内容列表",
		work_content_list_label: "工作内容列表",
		work_tree_label: "工作树",
		admin_tree_label: "管理树",
		admin_tabs_label: "管理选项卡",
		search_tabs_label: "搜索选项卡",
		search_selector_label: "搜索选择器",
		teamspace_browse_content_list_label: "团队空间浏览内容列表",
		teamspace_search_tabs_label: "团队空间搜索选项卡",

		/* Desktop */
		undo_description: "撤销${0}",
		redo_description: "重做${0}",

		/* Application Tabs */
		home: "主页",
		repository: "存储库",
		repository_type: "存储库类型：",
		repository_type_header: "存储库类型",
		repository_type_any: "所有存储库",
		repository_type_contains_label: "存储库类型包含",
		document_info: "文档信息",
		team: "团队",
		administration: "管理",

		/* Home Page */
		recent_activity: "最近的活动",
		repos_and_wrksp: "存储库和团队空间",
		workspaces: "团队空间",
		repositories: "存储库",
		templates: "模板",
		favorites: "收藏夹",
		my_checkouts: "我的检出",
		mySyncedFiles: "我的已同步文件",
		links: "链接",
		name_label: "名称",
		description_label: "描述：",
		type_label: "类型：",
		type_heading: "类型",
		type_id_label: "类型标识",
		server_type_icon: "服务器类型图标",
		server_type_heading: "服务器类型",
		server_type: "服务器类型",
		port_heading: "端口号",
		port_label: "端口号：",
		server_name_heading: "服务器名称",
		server_label: "服务器名：",
		server_url_label: "服务器 URL：",
		id_label: "标识：",
		id_heading: "标识",
		connected_label: "已连接：",
		repository_label: "存储库",
		modified_label: "修改者：",
		modified_date_label: "修改时间：",
		status_label: "状态：",
		last_modified_label: "上次修改者：",

		modifier: "修改者",
		modified_date: "修改时间",

		/* Favorites */
		new_favorite_label: "添加到收藏夹",
		edit_favorite_label: "重命名收藏夹",
		remove_favorite_label: "从收藏夹中移除",
		missing_alias_message: "您必须指定一个名称。",
		sync_favorite_enable_hover: "已对此项启用同步。",
		sync_favorite_disable_hover: "未在同步此项。",
		sync_favorite_sync_unavailable_hover: "同步不可用于此对象类型。",
		sync_enable_label: "对此项进行同步",
		sync_enable_label_hover: "此项将同步至您的设备。",
		delete_favorite_confirmation_question: "要从收藏夹中移除此项吗？",
		alias_label: "名称：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "所选项已经在收藏夹中。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "无法将此项添加至收藏夹列表。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "只能存储 ${0} 个收藏夹。",
		add_favorite_max_reached_response: "如果您想要将此项添加到收藏夹列表，那么必须在删除一个现有收藏夹之后才能添加此项。",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "无法将所选择的文档转换为 PDF。",
		download_as_pdf_max_content_error_explanation: "只能将 ${0} MB 的数据转换为 PDF。但是，所选择的文档超过了 ${0} MB。",
		download_as_pdf_max_content_error_response: "请选择更少文档或者选择较小的文档，然后再次以 PDF 文件形式下载文档。",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "所选文档无法转换为单个 PDF 文档。",
		download_as_pdf_mimetype_check_error_explanation: "要将一个包含多部分的文档转换为单个 PDF 文档，那么每个部分必须具有相同的 MIME 类型。",
		download_as_pdf_mimetype_check_error_response: "选择另外一个文档来转换为 PDF。",

		/* Activity Stream */
		show_label: "显示：",
		all_filter: "全部",
		notifications_filter: "通知",
		workitems_filter: "工作项",
		documentes_filter: "文档",
		all_favorites_filter: "所有收藏夹",
		folders_filter: "文件夹",
		searches_filter: "搜索",
		teamspaces_filter: "团队空间",

		/* Repository */
		all_search_templates: "所有搜索",
		all_od_searches: "所有搜索模板",
		recent_searches: "最新搜索",
		opened_searches: "已打开的搜索",

		all_worklists: "所有收件箱",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "所有工作列表的列表",

		/* Teamspace */
		all_workspaces: "所有团队空间",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "所有团队空间的列表",
		workspace_title: "团队空间",
		workspace_icon: "团队空间图标",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "可用",
		workspace_stat_offline: "不可用",
		workspace_stat_validate: "需要验证",
		workspace_stat_pendingDelete: "删除操作处于暂挂状态",
		workspace_stat_deleteError: "删除失败",

		undefined_value: "未定义",
		undefined_reference_value: "未定义引用。",

		/* Filter teamspaces in content list */
		more_results_on_server: "服务器上可能有更多结果。",
		search_all_data: "搜索所有数据。",
		search_all_teamspaces: "搜索所有团队空间。",
		teamspace_filter_results: "显示 ${0} 个结果。",
		displaying_filtered_results: "显示已过滤的结果。",
		displaying_recent_results: "仅显示过去 ${0} 天进行了修改的团队空间。要查找其他团队空间，请按名称或描述过滤团队空间列表。",
		clear_filter: "清除过滤器。",

		/* FolderTreeModel */
		move_item_task: "移动项",
		copy_item_task: "复制项",
		add_item_task: "添加项",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "找不到以下文件夹：${0}。可能已删除该文件夹，或无法从此视图打开该文件夹。从树形视图中单击“更多”链接以浏览至该文件夹。如果无法查看该文件夹，请刷新内容列表视图。",
		more_paging_link: "更多 ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "状态",
		status_dialog_cancel_label: "取消",

		/* ErrorDialog */
		error_dialog_title: "错误",
		error_dialog_icon_tooltip: "错误",
		error_dialog_stack_trace_title: "堆栈跟踪",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "确认",

		close_browser_msg: "请关闭浏览器窗口。",

		/* MessageDialog */
		message_dialog_title: "信息",
		warning_dialog_title: "警告",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "欢迎使用 ${0}",
		server: "存储库：",
		username: "用户名：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "需要输入用户名才能登录存储库。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "需要输入密码才能登录存储库。",
		password: "密码：",
		login: "登录",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "您的会话已过期。请重新登录。",
		login_repository_connection_expired_message: "对 ${0} 存储库的连接已到期。请重新登录。",
		login_site_connection_expired_message: "对站点的连接已到期。请重新登录。",
		login_new_server_message: "请输入 ${0} 的用户名和密码。",
		login_error_more_information_message: "更多信息",

		disconnect_box_account_user: "断开连接 Box 帐户：${0}",
		disconnect_box_account: "断开连接 Box 帐户",
		disconnect_box_accounts: "断开连接 Box 帐户",

		// OAuth2/Box Login
		login_ssl_connection_required: "需要建立 SSL 连接才能访问 Box 存储库。",
		login_oauth_popup_blocked: "已阻止弹出窗口。您可能需要取消阻止浏览器中的弹出窗口以进行登录。",
		login_oauth_click_here: "如果在 5 秒钟之内未将您重定向，请单击此处。",
		login_oauth_title: "登录",
		login_oauth_grant_intro: "授予对 ${0} 进行认证。",
		login_pane_oauth_click_here: "单击此处以登录。",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "要注销 Web 客户机吗？",
		logout_confirmation_button: "注销",

		/* ChangeLocaleDialog */
		change_locale: "更改语言和语言环境设置",
		change_locale_use_browser_language: "使用浏览器语言设置（缺省）",
		change_locale_use_browser_locale: "使用浏览器语言设置（缺省）",
		change_locale_description: "如果您删除了浏览器 cookies，那么必须重置语言和语言环境设置。",
		change_locale_language_locale: "应用程序语言：",
		change_locale_language_locale_hover: "此设置将更改 Web 客户端中的文本的语言，但是不更改应用程序中的文档的语言。<br><br>缺省设置使用 Web 浏览器配置选项中所指定的语言。",
		change_locale_value_format_locale: "应用程序语言环境：",
		change_locale_value_format_locale_hover: "语言环境将确定 Web 客户端中的日期、时间和数字的格式。<br><br>缺省设置使用与 Web 浏览器配置选项中所指定的语言相关联的格式。",
		change_locale_for_office: "双向文本设置：",
		change_locale_bidi_support_flag: "启用双向支持",
		change_locale_bidi_support_flag_hover: "启用了双向支持时，用户可以设置输入字段中所使用的文本的方向。举例来说，为项（例如，文件夹）输入的文本将按照它的输入方向显示。",
		change_locale_base_text_direction: "内容的基本文本方向：",
		change_locale_base_text_direction_hover: "设置输入到输入字段中的文本的方向。这还会控制由用户输入的标签（例如，文件夹名称）的显示方向。",
		change_locale_calendar_type: "日历类型：",
		change_locale_calendar_type_hover: "选择此用户会话将要使用的日历类型。",
		change_locale_base_text_direction_default: "缺省值",
		change_locale_base_text_direction_ltr: "从左到右",
		change_locale_base_text_direction_rtl: "从右到左",
		change_locale_base_text_direction_contextual: "语境",
		change_locale_calendar_type_gregorian: "格利高里历",
		change_locale_calendar_type_hijri: "西吉来历",
		change_locale_calendar_type_hebrew: "希伯来语",
		change_locale_calendar_type_Umm_al_Qura: "乌姆艾尔古拉历",

		/* ChangePasswordDialog */
		change_password: "更改密码",
		change_password_title: "更改密码",
		change_password_expired_title: "密码已到期",
		change_password_message: "请输入新密码。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "您的密码已到期。 请输入新密码。",
		change_password_password_rules: "密码规则",
		change_password_old_password: "旧密码：",
		change_password_new_password: "新密码：",
		change_password_confirm_password: "确认密码：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "您必须输入旧密码。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "您必须输入一个新密码。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "您必须确认新密码。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "两个密码必须匹配。",

		/* GlobalToolbar */
		actions: "操作",
		actions_label: "操作：",
		open_actions_label: "打开操作：",

		/* About Dialog */
		about_dialog_title: "关于",
		about_product_name_label: "产品名称：",
		about_product_version_label: "版本：",
		about_product_build_label: "构建：",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM 和 IBM 徽标是 International Business Machine Corporation 在美国和/或其他国家或地区的注册商标。本程序依照程序附带的许可协议的条款许可使用。本许可证协议可能位于 Program 目录文件夹或标识为“License”或“Non_IBM_License”的库中，或者以许可证协议印刷品形式提供（如果适用）。使用该程序之前，请仔细阅读本协议。使用本程序即表明您同意这些条款。",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "要删除所选项吗？",
		delete_single_folder_confirmation_question: "要删除 ${0} 文件夹吗？",
		delete_multiple_confirmation_question: "要删除所选项吗？<br>已选 ${0} 项。",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "删除",
		search_template_delete_confirmation_question: "要删除 ${0} 搜索吗？",
		search_template_opened_delete_confirmation_question: "已打开 ${0} 搜索。如果删除该搜索，那么该搜索将关闭。<br>您要删除此搜索吗？",
		delete_multiple_opened_search_template_confirmation_question: "下列搜索为打开状态：${0}。<br>如果您删除这些搜索，它们将关闭。要删除这些搜索吗？",
		delete_large_number_items_confirmation_question: "已选择要删除的 ${0} 项。<br/>删除大量项可能需要较长时间。<br/>要继续吗？",
		delete_confirmation_entrytemplate: "如果您删除此输入模板，那么将对与该输入模板相关联的文档或文件夹具有以下影响：<ul><li>这些项将不再与该输入模板相关联，并且用户在更新项时可能会看到警告。</li><li>由该输入模板控制的任何属性（例如，属性的名称或顺序）将不再适用于与该输入模板相关联的项。</li></ul>要删除此输入模板吗？",
		delete_confirmation_entrytempalte_with_multi_items: "必须逐个删除输入模板。已经从要删除的项列表中移除输入模板。如果您想要删除输入模板，那么必须分别删除每个输入模板。",

		/* Create/Apply/Remove Hold */
		hold: "保留",
		createHold: "新建保留项",
		applyHold: "应用保留",
		removeHold: "移除保留项",
		showHolds_title: "显示挂起",
		applyHoldSelectText: "选择您要应用于所选项的保留项。",
		availableHolds: "可用的保留项：",
		removeHoldSelectText: "选择您要从所选项中移除的保留项。",
		appliedHolds: "已应用的保留项：",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "创建新保留项以应用于所选项。",
		holdName: "保留项名称：",
		holdDescription: "描述：",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "必须为保留项指定名称。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "所指定的保留项名称已经存在。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "保留项名称不能包含下列任意字符：' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "会话将在 ${0} 分钟后到期。",
		session_expire: "会话将到期",
		logoff: "注销",
		extend_session: "延长会话",
		admin_custom_settings: "其他设置：",
		admin_custom_settings_hover_help: "enableSessionExpireWarning 是一个布尔值，用于指示是否启用会话到期，缺省值为 true。sessionExpireWarningTime 是 2 到 5 之间的整数，用于指定会话到期警告时间。",
		admin_custom_setting_dialog_title_new: "新建设置",
		admin_custom_setting_dialog_title_edit: "编辑设置",
		admin_custom_setting_dialog_hover_help: "通过指定参数名和值来添加其他参数。例如，如果要启用会话到期警告，那么可指定“enableSessionExpireWarning”和“true”。",
		admin_custom_setting_dialog_field_hover_help: "有关参数名称和值的更多信息，请参阅 IBM Navigator Parameter Reference Manual。",
		admin_custom_setting_dialog_nameInvalid: "此值为必填项。该值不能包含空白且不能重复。",
		admin_custom_setting_dialog_bool_valueInvalid: "此值为必填项。此值必须为布尔值。",
		admin_custom_setting_dialog_int_valueInvalid: "此值为必填项。此值必须为整数。",
		/* Add Document Dialog */
		add_document_dialog_title: "添加文档",
		add_documents_dialog_title: "添加文档",
		add_document_general_label: "常规",
		add_document_properties_label: "属性",
		add_document_properties_with_ellipsis_label: "属性...",
		add_document_security_label: "安全性",
		add_document_location_label: "保存于：",
		add_document_type_label: "您要保存哪些内容？",
		add_document_localfile_label: "本地文档",
		add_document_metadata_label: "有关文档的信息",
		add_document_external_label: "指向外部文档的链接",
		add_document_web_link_label: "Web 链接",
		add_document_saved_content_label: "使用已保存文件：",
		add_document_saved_content_choice: "已保存文件",
		add_document_file_name_label: "文件名：",
		add_document_entry_template_label: "输入模板：",
		add_document_delete_file_label: "删除本地文件",
		add_document_delete_file_disabled_label: "将不会删除不在文件跟踪目录中的文件。",
		add_document_major_version_label: "主版本",
		add_document_major_version_hover: "将文档状态设为“已发布”。将该文档作为 V1.0 添加到存储库。如果未选择该选项，那么表明该文档尚未准备就绪以供发布，并作为 V0.1 进行添加。",
		add_document_save_document_as_unfiled_label: "请勿在文件夹中保存该文档",
		add_document_save_document_as_unfiled_hover: "如果选择此选项，那么您只能通过搜索来查找此文档。不能浏览此文档。",
		add_document_create_new_version_label: "创建新版本",
		add_document_replace_existing_version_label: "替换现有版本",
		add_document_start_workflow_label: "启动工作流程",
		add_document_auto_classify_label: "自动分类内容",
		add_document_add_label: "添加",
		add_document_cancel_label: "取消",
		add_document_document_type_label: "类",
		add_document_context_info: "为文档属性输入的值稍后可用于查找该文档。",
		add_documents_context_info: "为文档输入的值稍后可用于查找文档。如果需要为某个文档输入另一属性值，必须单独添加该文档或在添加该文档后编辑其属性。",
		add_document_url_label: "URL：",
		add_document_template_description: "模板描述：",
		add_document_select_entry_template: "请输入或选择输入模板",
		add_document_no_permission_to_associations: "您没有使用输入模板的许可权",
		add_document_no_entry_template_to_use: "不能对所选文件使用任何输入模板",
		add_document_no_entry_template_itemtype_permission: "您无法将项添加至此文件夹。必须选择输入模板，您无权访问与此文件夹相关联的任何输入模板。请联系系统管理员，并请求他们授予您访问与此文件夹相关联的输入模板的权限。",
		add_document_appgroup_name_label: "应用程序组名：",
		add_document_app_name_label: "应用程序名称：",
		create_folder_dialog_title: "新建文件夹",
		create_folder_context_info: "为文件夹属性输入的值稍后可用于查找该文件夹。",
		create_folder_folder_name_label: "文件夹名",
		create_folder_save_folder_as_unfiled_label: "请勿在另一个文件夹中保存该文件夹",
		create_folder_save_folder_as_unfiled_hover: "如果选择此选项，那么您只能通过搜索来查找此文件夹。不能浏览此文件夹。",
		add_item_create_in_folder: "在文件夹中创建：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "文件夹名不能包含下列任意字符：\\ / : * ? \" < > |",

		invalid_box_folder_name_message: "文件夹名称不得包含下列任何字符：\\ /，并且不得为 . 或 ..",
		invalid_box_file_name_message: "文件名不得包含下列任何字符：\\ /，并且不得为 . 或 ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "文件名不能包含下列任意字符：\\ / : * ? \" < > |",
		external_document_placeholder: "请输入文档的 URL",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "必须以 3 位或 6 位十六进制数字形式输入颜色，例如 #000 或 #000000。",
		add_document_unfiled: "${0} 未归档",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "通过使用输入模板添加文档",
		add_document_using_template_context_info: "通过使用输入模板添加文档时，您为文档输入的值是一致的。",
		add_documents_using_template_dialog_title: "使用输入模板来添加文档",
		add_documents_document_name_is_file_name_hint: "该文件名将用于此属性",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "通过使用输入模板新建文件夹",
		create_folder_using_template_context_info: "通过使用输入模板创建文件夹时，您为文件夹输入的值是一致的。",

		add_documents_batch_results_dialog_title: "未添加至存储库的文档",
		add_documents_batch_results_dialog_context_info: "下列文档未添加到存储库。请选择文档并单击“详细信息”以了解有关该文档未添加至存储库的原因。",
		add_documents_batch_results_dialog_filename_col_hdr: "文件名",
		add_documents_batch_results_dialog_status_col_hdr: "状态",
		add_documents_batch_results_dialog_message_col_hdr: "消息",
		add_documents_batch_results_status_error: "错误",
		add_documents_batch_results_status_cancelled: "已取消",
		add_documents_batch_results_status_cancelled_msg: "未添加该文档，因为请求已取消。",

		add_documents_batch_status_title: "正在添加文档",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "正在添加第 ${0} 个文件（共 ${1} 个文件）...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "错误：${0}",
		add_documents_batch_status_completing_msg: "添加此文档后，进程将停止。",

		add_documents_status_uploading_msg: "正在上载第 ${0} 个文件（共 ${1} 个文件）...",
		add_documents_status_adding_msg: "正在添加第 ${0} 个文件（共 ${1} 个文件）...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "已在另一应用程序中配置该输入模板，并且该模板配置为始终将文档声明为记录。但是，此设置会被忽略，因为 Web 客户端不支持将文档声明为记录。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "已在另一应用程序中配置该输入模板，并且该模板配置为允许您记录是否将文档声明为记录。但是，此设置会被忽略，因为 Web 客户端不支持将文档声明为记录。",
		no_selection: "&lt;选择&gt;",

		batch_results_dialog_details_label: "详细信息",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "值无效。该值必须是全局唯一标识 (GUID)，例如 {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "值无效。该值必须是浮点数，例如 1.2 或 365。",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "值无效。该值必须为 ${0} 格式，例如，${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "值无效。该值必须是十进制值，例如，1.2 或 365。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "值无效。该值必须是整数，例如 5 或 1349。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "值无效。该值只能包含字母字符，例如 a-z 和 A-Z。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "值无效。该值只能包含字母数字字符，例如 a-z、A-Z 和 0-9。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "值无效。该值只能包含数字字符，例如 0-9。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "值无效。该值只能包含以下字符：a-z、A-Z、0-9、[空格] 和 `.,:;?\"/-_&amp;+%*=<>()|!$#^@。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "值无效。该值必须是采用下列格式的日期：${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "值无效。该值必须是采用下列格式的时间：${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "值无效。请从下拉菜单中选择一个值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "值无效。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "值无效。该值必须采用以下格式：{0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "此值为必填项。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "值太长。属性支持的最大长度为 ${0}。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "该值太短。该属性支持的最大长度为 ${0}。",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "该值已超出范围。该值必须是介于 ${0} 和 ${1} 之间的浮点数。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "该值已超出范围。该值必须是介于 ${0} 和 ${1} 之间的十进制值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "该值已超出范围。该值必须是介于 ${0} 和 ${1} 之间的整数。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "该值必须是介于 ${0} 和 ${1} 之间的日期。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "该值已超出范围。该值必须是介于 ${0} 和 ${1} 之间的日期。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "该值已超出范围。该值必须是介于 ${0} 和 ${1} 之间的时间。",
		property_and: "和",

		property_invalidValueOrRequired: "以下值无效或者是必需的：${0}。",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "属性",
		edit_properties_dialog_info: "可查看或编辑此项的属性。如果您有相应的许可权，那么您还可以修改该项的安全性。但是，您不能更改系统属性。",
		edit_properties_od_dialog_info: "可查看或编辑此项的属性。但是，您不能更改系统属性。",
		system_properties_title: "系统属性",
		custom_properties_title: "属性",
		/* Folder collaboration tab */
		box_permission_permission: "许可权",
		box_permission_permissions: "许可权",
		box_permission_editor: "编辑人员",
		box_permission_owner: "所有者",
		box_permission_co_owner: "共同所有者",
		box_permission_viewer_uploader: "查看者和上载者",
		box_permission_previewer_uploader: "预览者和上载者",
		box_permission_viewer: "查看者",
		box_permission_previewer: "预览者",
		box_permission_uploader: "上载者",
		box_permission_add: "添加",
		box_permission_upload: "上载",
		box_permission_download: "下载",
		box_permission_preview: "预览",
		box_permission_view: "视图",
		box_permission_send_links: "发送只能查看的链接",
		box_permission_create_subfolders: "创建子文件夹",
		box_permission_create_tasks: "创建任务",
		box_permission_add_comments: "添加注释",
		box_collaboration_invite_placeholder: "输入要邀请的名称、电子邮件或组",
		box_collaboration_invite_placeholder_non_admin: "输入要邀请的电子邮件",
		box_collaboration_invalid_email: "请输入有效的电子邮件地址",
		box_collaboration_user_already_present: "此用户已是文件夹中的合作者",
		box_collaboration_user_name: "名称",
		box_collaboration_email_address: "电子邮件地址",
		box_collaboration_date_added: "添加日期",
		box_collaboration_remove_collaboration: "移除",
		box_collaboration_remove_collaboration_title: "删除",
		box_collaboration_no_collaborators: "没有合作者",
		box_collaboration_change_owner_title: "更改项所有者",
		box_collaboration_change_owner_prompt: "通过将此合作者标记为“文件夹所有者”，您就成为“编辑者”，并且不再拥有此文件夹。已直接添加到此文件夹的任何合作者都将在其根文件夹中看到此文件夹。在父文件夹级别或更高级别添加的任何合作者都将不再是合作者。要继续吗？",
		box_collaboration_remove_self_title: "移除自己",
		box_collaboration_remove_self_prompt: "确定要移除您自己的合作者身份吗？您将不再有权访问此文件夹。",
		box_collaboration_user: "用户",
		box_collaboration_group: "组",
		box_managing_users_not_configured: "您无法搜索用户和组，因为未正确配置 Box 应用程序。如果要使用此功能，请联系管理员，然后请求配置 Box 应用程序以管理用户和组。",
		duplicate_value_error: "此属性中的每个值必须唯一。",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "您在以下字段中所做的任何更改都将应用于所有选定项。如果需要为特定项输入一个不同的属性值或编辑项的安全性，那么必须分别编辑该项的属性。",
		multi_edit_properties_class_label: "类：",
		multi_edit_properties_items_label: "项名称：",
		multi_edit_properties_properties_label: "属性：",
		multi_edit_batch_status_title: "正在更新属性",
		multi_edit_batch_status_adding_msg: "正在更新第 ${0} 项（共 ${1} 项）...",
		multi_edit_batch_status_verifying_msg: "正在验证第 ${0} 项（共 ${1} 项）...",
		multi_edit_batch_status_completing_msg: "更新此项之后，过程将停止。",
		multi_edit_batch_status_validation_completing_msg: "验证此项之后，过程将停止。",
		multi_edit_batch_results_status_error: "错误",
		multi_edit_batch_results_status_cancelled: "已取消",
		multi_edit_batch_results_status_cancelled_msg: "未更新该项，因为请求已取消。",
		multi_edit_batch_results_dialog_title: "未更新项",
		multi_edit_batch_results_dialog_context_info: "未更新以下项。请选择项名称并单击“详细信息”以了解有关未更新该项的原因。",
		multi_edit_batch_results_dialog_itemname_col_hdr: "项名称",
		multi_edit_batch_results_dialog_status_col_hdr: "状态",
		multi_edit_batch_results_dialog_message_col_hdr: "消息",
		multi_edit_batch_status_errors_msg: "错误：${0}",
		multi_edit_batch_permission_error_text: "无法保存对属性的更改。",
		multi_edit_invalid_value_error: "此值依赖于另一个属性值，并且不适用于您选择的所有项。",
		multi_edit_batch_permission_error_explanation: "您不能修改此项的属性，因为您没有足够的权限。",
		multi_edit_no_modifiable_properties: "无法修改所选项的属性。当项仅包含只读属性或只能编辑该项的名称或标题时，可能发生该问题。当选中多个项时，您无法修改这些项的名称或标题。",
		multi_edit_mult_classes_dialog_info: "所选项位于不同的存储库上，或者属于不同的类。您只能编辑位于相同类或相同存储库中的项。请选择您要编辑的项的子集。",
		multi_edit_class_selector_class_heading: "类",
		multi_edit_class_selector_entry_template_heading: "输入模板",
		multi_edit_class_selector_repository_heading: "存储库",
		multi_edit_class_selector_items_heading: "项",
		multi_edit_some_classes_not_displayed: "某些所选项未包括在此列表中，因为这些项仅包括只读属性，或者因为这些项位于不支持编辑属性的存储库上。",
		multi_edit_properties_invalid_msg: "某些属性值不适用于所有选定项。",
		multi_edit_properties_readonly_tooltip_text: "${0}：此属性是只读属性，不能修改该属性。",
		multi_edit_append_checkbox_label: "附加",
		multi_edit_append_checkbox_tooltip: "如果要将新属性值附加到现有值（而不是替换现有值），请选择此选项。",
		multi_edit_properties_invalid_childcomponent_msg: "${1} 子组件的 ${0} 属性中的某些值依赖于其他属性，并且对于您所选择的项不再有效。清除 ${1} 子组件中的值，或者逐个更改您所选择的项的属性。",

		/* Export Properties Dialog */
		export_properties_dialog_title: "导出属性",
		export_properties_dialog_info: "选择要导出的属性并指定它们的显示顺序。",
		export_properties_dialog_export_button_label: "导出",
		export_properties_dialog_export_raw_values: "导出原始值",

		/* Properties */
		filter_clear_tooltip: "清除过滤器",
		properties_new_row: "新建",
		properties_requiredClass_document_tooltip: "选择文档。该文档必须属于 ${0} 类。",
		properties_requiredClass_folder_tooltip: "请选择文件夹。该文件夹必须属于 ${0} 类。",
		properties_dataType_tooltip: "数据类型：${0}",
		properties_maxLength_tooltip: "最大长度：",
		properties_minLength_tooltip: "最小长度：",
		properties_minValue_tooltip: "最小值：",
		properties_maxValue_tooltip: "最大值：",
		properties_format_tooltip: "格式：",
		properties_description_tooltip: "描述：",

		properties_type_boolean_tooltip: "布尔值",
		properties_type_date_tooltip: "日期",
		properties_type_time_tooltip: "时间",
		properties_type_timestamp_tooltip: "时间戳记",
		properties_type_decimal_tooltip: "小数值",
		properties_type_double_tooltip: "浮点数",
		properties_type_short_tooltip: "整数",
		properties_type_integer_tooltip: "整数",
		properties_type_long_tooltip: "整数",
		properties_type_string_tooltip: "文本字符串",
		properties_type_string_alpha_tooltip: "字母字符串",
		properties_type_string_alphanum_tooltip: "字母数字字符串",
		properties_type_string_ext_tooltip: "扩展字母数字字符串",
		properties_type_string_num_tooltip: "数字字符串",
		properties_type_binary_tooltip: "二进制",
		properties_type_object_tooltip: "对象",
		properties_type_reference_tooltip: "此属性引用了存储库中的另一个项。",
		properties_type_guid_tooltip: "全局唯一标识",
		properties_type_group_tooltip: "用户和组",
		properties_type_user_tooltip: "用户",
		properties_type_childComponent_tooltip: "子组件",

		properties_childComponent_minCardinalityOnly_tooltip: "此属性必须至少具有 ${0} 个值。",
		properties_childComponent_maxCardinalityOnly_tooltip: "此属性最多可具有 ${0} 个值。",
		properties_childComponent_minMaxCardinality_tooltip: "此属性必须至少具有 ${0} 个值，最多具有 ${1} 个值。",
		properties_childComponent_noCardinality_tooltip: "此属性可具有任意数目的值。",

		properties_type_guid_example_tooltip: "，例如 {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "请从列表中选择一个值。",
		properties_single_select_choice_tooltip: "请选择一个值。",
		properties_multiple_select_typein_tooltip: "请输入一个或多个值。",
		properties_multiple_select_choice_tooltip: "请选择一个或多个值。",
		properties_not_selectable_tooltip: "无法选择该类别。",
		properties_none: "无",
		properties_none_tooltip: "选择<i>无</i>可清除此属性的当前值。",
		properties_value_empty: "没有值",
		properties_value_read_only: "只读",
		properties_clear_label: "清除",
		properties_clear_tooltip: "清除此字段中的值将在您单击<b>保存</b>后清除存储库中的值。",
		properties_box_custom_properties: "定制属性",
		properties_box_metadata_name_in_use: "此名称已被使用。请对定制属性输入另一名称。",

		properties_templates: "模板",
		properties_add_template: "添加模板",
		properties_remove_template: "移除",
		/* Checkin Document Dialog */
		checkin_dialog_title: "检入",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "检入",
		checkin_cancel_label: "取消",
		checkin_file_name_label: "文件名",
		checkin_document_status_title: "检入文档",
		checkin_document_status_uploading_msg: "正在上载文件...",
		checkin_document_status_checkingin_msg: "正在检入文件...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "选择“修订模式”",
		viewer_redaction_new_document_confirmation_question: "要将编辑内容另存为新文档或者本地文件吗？",
		viewer_redaction_new_version_confirmation_question: "要将编辑内容另存为新版本吗？",
		viewer_redaction_new_version_confirmation_question_never: "要将编辑内容另存为新内容吗？",		
		viewer_redaction_new_document_button: "是",
		viewer_redaction_new_document_cancel_button: "否",
		viewer_redaction_add_document_confirmation_question: "要将编辑内容另存为新文档、新版本或者本地文件吗？",
		viewer_redaction_add_document_confirmation_question_version_never: "要将编辑内容另存为新文档、新内容或者本地文件吗？",
		viewer_redaction_add_document_button: "新建文档",
		viewer_redaction_add_new_version_button: "新版本",
		viewer_redaction_add_new_version_button_version_never: "新内容",
		viewer_redaction_add_local_file_button: "本地文件",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "选择修订原因",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "找不到用于将此文档添加到存储库的输入模板。将在不使用输入模板的情况下将该文档检入到存储库中。",
		property_entry_template_not_retrieved_warning: "找不到用于将此文档添加到存储库的输入模板。将在不使用输入模板的情况下显示文档属性。",
		multi_edit_entry_template_not_found_name: "[找不到]",
		multi_edit_entry_template_not_retrieved_warning: "找不到用于将这些项添加到存储库的输入模板。将在不使用输入模板的情况下修改项属性。",
		checkin_major_version_hover: "将文档版本号增加 1 并将文档状态设为“已发布”。如果未选择该选项，那么表明该文档尚未准备就绪以供发布，并作为次版本进行检入。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "由于未检出文档，无法将其检入。",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "用户标识或密码对于该服务器无效。",
		error_bad_userid_password_userResponse: "请确保您正确输入了用户标识和密码。",
		error_bad_userid_password_adminResponse: "返回了下列错误：${0}。",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "错误消息",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "无法使用以下 URL 来建立与 Web 客户端的连接：${0}。",
		http_send_error_explanation: "导致此错误的原因可能是 Web 应用程序服务器上的配置问题或 Web 客户端应用程序的问题。",
		http_send_error_userResponse: "请尝试再次登录。如果问题仍然存在，请将此错误报告给系统管理员。",
		http_send_error_adminResponse: "返回了下列 HTTP 错误：${1}。",
		http_send_error_0: "web 客户端 URL",
		http_send_error_1: "HTTP 错误",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "无法使用以下 URL 来建立与 Web 客户端的连接：${0}。",
		http_error_explanation: "您可能需要向防火墙进行认证，或者 Web 应用程序服务器可能因网络问题而未在运行或无法访问。",
		http_error_userResponse: "如果需要向防火墙进行认证，请认证，然后尝试再次登录。如果问题仍然存在，请将此错误报告给系统管理员。",
		http_error_adminResponse: "返回了下列 HTTP 错误：${1}。",
		http_error_0: "web 客户端 URL",
		http_error_1: "HTTP 错误",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "无法使用以下 URL 来建立与 Web 客户端的连接：${0}。",
		http_response_bad_explanation: "导致此错误的原因可能是 Web 应用程序服务器上的配置问题或 Web 客户端的问题。",
		http_response_bad_userResponse: "请尝试再次登录。如果问题仍然存在，请将此错误报告给系统管理员。",
		http_response_bad_adminResponse: "返回了下列错误：${1}。",
		http_response_bad_0: "web 客户端 URL",
		http_response_bad_1: "HTTP 错误",
		http_response_bad_number: 2002,

		unititled_document_name: "无标题",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "无法启动电子邮件 applet。",
		email_applet_init_failed_explanation: "未正确安装和配置电子邮件客户端或未在工作站上安装受支持的 Java 运行时环境 (JRE) 版本时，可能会发生此问题。",
		email_applet_init_failed_userResponse: "要解决此问题，请执行以下操作：<ul><li>确保电子邮件应用程序已安装并且在工作站上设置为缺省电子邮件客户端。</li><li>通过在命令提示符下输入以下命令来检查是否在工作站上安装了受支持 JRE 版本：java -version</li></ul><p>IBM 软件支持站点上的 <i>IBM Content Navigator 的必备硬件和软件</i>文档中包括受支持 JRE 版本列表。</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "因为无法装入必需的 DLL 文件，所以无法启动电子邮件应用程序。",
		email_applet_JNI_LOAD_FAILED_explanation: "因为工作站上的临时目录可能已满，所以无法装入必需的 WCEmailAppletJNI.dll 文件。",
		email_applet_JNI_LOAD_FAILED_userResponse: "请确保临时目录具有充足的空间。然后，再次尝试从 Web 客户端发送文档。缺省情况下，WCEmailAppletJNI.dll 文件会装入到 Web 浏览器设置中所指定的临时目录。",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "因为电子邮件 applet 无法创建临时文件，所以无法启动电子邮件应用程序。",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "工作站上的临时目录可能已满。",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "请确保临时目录具有充足的空间。然后，再次尝试从 Web 客户端发送文档。",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "因为电子邮件 applet 无法访问临时目录，所以无法启动电子邮件应用程序。",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "工作站上的临时目录可能已满，或者您可能没有适当的访问权，无法写入该临时目录。",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "请确保临时目录具有充足的空间并且您对临时目录具有写许可权。然后，再次尝试从 Web 客户端发送文档。如果问题仍然存在，请与您的系统管理员联系。",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "电子邮件 applet 无法删除临时文件。",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "另一个应用程序可能在使用该文件，或者该文件可能在工作站上不存在。",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "如果文件正在被另一个应用程序使用，那么关闭该应用程序。如果该文件在本地文件系统上，请从工作站上的临时目录中移除以下文件：${0}。",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "无法创建指向文档的链接。",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "存储库所返回的 URL 的格式无效。",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "请关闭 Web 浏览器（包括所有选项卡和会话）并再次登录。请再次尝试从 Web 客户端发送文档。如果此问题仍然存在，请与 IBM 软件支持机构联系。",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "电子邮件 applet 无法将文件附加至电子邮件。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "存储库所返回的 URL（指向文档）的格式无效。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "请关闭 Web 浏览器（包括所有选项卡和会话）并再次登录。请再次尝试从 Web 客户端发送文档。如果此问题仍然存在，请与 IBM 软件支持机构联系。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "无法创建附件。",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "电子邮件 applet 无法读取指向文档的 URL。",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "请关闭 Web 浏览器（包括所有选项卡和会话）并再次登录。请再次尝试从 Web 客户端发送文档。如果此问题仍然存在，请与 IBM 软件支持机构联系。",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "无法从存储库检索该文档。",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "您的会话可能已超时，存储库或 Web 应用程序服务器可能未在运行或 Web 客户端配置可能有问题。",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "请登录，并尝试再次通过电子邮件发送该文档。如果问题仍然存在，应请求系统管理员检查存储库错误日志。",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "如果已配置 Web 客户端以将 AFP 文档转换成另一种格式（例如 PDF），那么在以附件形式发送文档之前，请确保已正确配置了转换。",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "文档无法转换为 PDF。",
		email_applet_CONVERT_DOC_FAILED_explanation: "用于将文档转换为 PDF 的工具不支持该文件类型。",
		email_applet_CONVERT_DOC_FAILED_userResponse: "请关闭此页面并再次尝试通过电子邮件发送此文档而不将其转换为 PDF。",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "未创建电子邮件。",
		email_applet_MAPI_USER_ABORT_explanation: "请打开电子邮件应用程序并确保该应用程序正常工作。然后，再次尝试从 Web 客户端发送文档。如果问题仍然存在，请联系系统管理员以查看您的操作系统事件日志。",
		email_applet_MAPI_USER_ABORT_userResponse: "如果您要关闭电子邮件应用程序，那么无需执行进一步操作。要发送电子邮件，请登录电子邮件应用程序，然后再次尝试从 Web 客户端发送该文档。",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "无法创建电子邮件。",
		email_applet_MAPI_FAILURE_explanation: "可能尚未打开电子邮件客户端，或您可能尚未登录。",
		email_applet_MAPI_FAILURE_userResponse: "请打开电子邮件应用程序并确保该应用程序正常工作。然后，再次尝试从 Web 客户端发送文档。如果问题仍然存在，请联系系统管理员以查看您的操作系统事件日志。",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "无法创建电子邮件。",
		email_applet_MAPI_LOGON_FAILURE_explanation: "您未登录电子邮件客户端。必须打开电子邮件客户端并且登录该客户端才能从 Web 客户机发送消息。",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "请打开电子邮件客户端并登录。然后，再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "因为无法在工作站上创建临时文件，所以无法创建电子邮件。",
		email_applet_MAPI_DISK_FULL_explanation: "工作站上的临时目录可能已满。",
		email_applet_MAPI_DISK_FULL_userResponse: "请确保临时目录具有充足的空间。然后，再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "因为系统内存不足，所以无法创建电子邮件。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "您打开的应用程序可能太多。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "请关闭任何未使用的应用程序，然后再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "已拒绝 MAPI 访问。",
		email_applet_MAPI_ACCESS_DENIED_explanation: "可能未对您的电子邮件应用程序启用消息传递应用程序编程接口 (MAPI) 访问，或者该应用程序不支持此访问。MAPI 是一个消息传递协议，用于启用 Web 客户端与电子邮件应用程序之间的通信。",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "请联系系统管理员。",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "确保电子邮件应用程序已设置 MAPI 访问并已正确配置。如果此问题仍然存在，请与 IBM 软件支持机构联系。",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "无法创建附件或指向项的链接。",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "您打开的 Web 浏览器会话可能太多。",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "关闭任何不使用的 Web 浏览器会话。然后，再次尝试从 Web 客户端发送文档。如果问题仍然存在，请与您的系统管理员联系。",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "无法发送电子邮件。",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "您尝试发送的附件可能太多。",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "请选择较少的文件。然后，再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "无法发送电子邮件。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "您将该电子邮件发送给的收件人可能太多。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "请将电子邮件发送给较少的收件人。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "无法创建附件。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "在创建附件之前可能已删除了某些必需的临时文件。如果在发送电子邮件之前清除了浏览器高速缓存，那么可能会发生此错误。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "无法创建附件。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "在创建附件之前可能已删除了某些必需的临时文件。如果在发送电子邮件之前清除了浏览器高速缓存，那么可能会发生此错误。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "电子邮件应用程序无法创建附件。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "无法将电子邮件发送给指定的收件人。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "该收件人可能不存在于地址簿中。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "请检查收件人姓名，然后再次尝试发送文档。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "无法将电子邮件发送给指定的收件人。",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "电子邮件地址格式可能错误。",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "请确保您输入的电子邮件地址有效，然后再次尝试发送文档。",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "可能未正确编写电子邮件。",
		email_applet_MAPI_NO_MESSAGES_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_NO_MESSAGES_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "可能未正确编写电子邮件。",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "无法发送电子邮件。",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "该电子邮件可能太长。",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "请缩短电子邮件的文本，然后再次尝试发送该电子邮件。",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "无法创建电子邮件。",
		email_applet_MAPI_INVALID_SESSION_explanation: "电子邮件客户端在尝试创建电子邮件时，可能发生故障。",
		email_applet_MAPI_INVALID_SESSION_userResponse: "重新启动电子邮件客户端，然后再次尝试从 Web 客户机发送文档。",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "可能未正确编写电子邮件。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "可能未正确编写电子邮件。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "可能未正确编写电子邮件。",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "可能未正确编写电子邮件。",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "可能未正确编写电子邮件。",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "无法将电子邮件发送给指定的收件人。",
		email_applet_MAPI_INVALID_RECIPS_explanation: "电子邮件地址格式可能错误。",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "请确保您输入的电子邮件地址有效，然后再次发送文档。",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "电子邮件客户端无法执行所请求的操作。",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "电子邮件应用程序返回了意外错误。",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "请再次尝试从 Web 客户端发送文档。",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "其中一个属性丢失必需的值数。",
		error_property_cardinality_explanation: "某些属性具有值数下限和值数上限。",
		error_property_cardinality_userResponse: "请使用悬浮式帮助来确定哪个属性需要最小值数。然后，指定最小值数并重试。",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "文件名是必需的。",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "请指定文件名，然后重试。",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} 插件包含错误。",
		plugin_error_explanation: "针对 ${0} 插件对 JavaScript 求值时发生了错误。如果继续使用 Web 客户端，那么您可能会遇到其他错误。",
		plugin_error_userResponse: "请联系系统管理员。",
		plugin_error_adminResponse: "插件存在问题，需要插件提供者来解决此问题。在解决该插件的问题之前，建议从 Web 客户端配置中移除该插件。",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "无法打开该输入模板。",
		open_old_format_entry_template_error_explanation: "该输入模板使用了在 Web 客户端中不受支持的旧格式。",
		open_old_format_entry_template_error_userResponse: "请求系统管理员更新该输入模板。",
		open_old_format_entry_template_error_adminResponse: "请使用 Application Engine 或 Workplace XT Entry Template Designer 来保存输入模板的更新版本。",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "无法打开该输入模板。",
		open_custom_object_entry_template_error_explanation: "Web 客户端不支持下列输入模板类型：“定制对象”输入模板。",
		open_custom_object_entry_template_error_userResponse: "请打开其他输入模板。",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "无法打开 eForms 对象。",
		open_forms_object_error_explanation: "Web 客户端不支持下列 eForm 对象类型：表单模板、表单数据、文档策略和工作流程策略。",
		open_forms_object_error_userResponse: "请打开其他文档。",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "无法使用 ${0} 输入模板。",
		entry_template_folder_restricted_error_explanation: "该输入模板会向 ${1} 文件夹添加项，但您没有向该文件夹添加项的适当许可权。",
		entry_template_folder_restricted_error_userResponse: "请选择另一输入模板或请求系统管理员授予您向 ${1} 文件夹添加项的适当许可权。",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "文件夹名",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "无法打开该输入模板。",
		open_records_entry_template_error_explanation: "Web 客户端不支持下列输入模板类型：“声明为记录”输入模板。",
		open_records_entry_template_error_userResponse: "请打开其他输入模板。",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "无法打开工作流程。",
		open_workflow_error_explanation: "Web 客户端不支持打开工作流程。",
		open_workflow_error_userResponse: "请打开其他文档。",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "无法打开该文档。",
		viewer_unable_to_view_error_explanation: "未配置适用于此类型文档的查看器，或配置的查看器与您的系统不兼容。",
		viewer_unable_to_view_error_userResponse: "请求系统管理员配置适用于此类型文档的查看器，并确保配置的查看器可用于用户的系统。",
		viewer_unable_to_view_error_adminResponse: "请使用管理工具来配置适用于此类型文档的查看器。",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "无法打开搜索。",
		search_cannot_open_error_explanation: "尚未配置此桌面的搜索功能。",
		search_cannot_open_error_userResponse: "请向系统管理员咨询您是否有权访问包括搜索功能的桌面，或者是否可以更新此桌面以包括搜索功能。",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "未装入该文档。",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional 查看器无法打开该文档。",
		viewer_document_load_failed_error_userResponse: "有关更多信息，请参阅显示在查看器中的错误消息。",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "无法查看此文档。",
		viewer_session_expired_explanation: "无法检索文档内容。",
		viewer_session_expired_userResponse: "请再次尝试登录。如果问题仍然存在，那么可能是因为应用程序服务器未在运行。请求系统管理员检查 IBM Content Navigator 错误日志或重新启动该服务器。",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "无法查看此文档。",
		ajaxViewer_getPage_failed_explanation: "AJAX Viewer 接收到一个错误响应，同时检索页面内容。该应用程序服务器可能未在运行。",
		ajaxViewer_getPage_failed_userResponse: "请关闭 Web 浏览器，然后再次登录。如果问题仍然存在，应请求系统管理员查看 Web 应用程序服务器日志文件或重新启动该服务器。",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "在您的工作站上未发现 Java 运行时环境 (JRE)。",
		viewer_java_plugin_not_found_explanation: "找不到该插件，或者未安装正确的 JRE 版本。",
		viewer_java_plugin_not_found_userResponse: "请检查是否已安装 JRE。例如，在命令提示符中输入下列命令：Java -version。如果未安装 JRE 或安装了错误版本级别的 JRE，请安装适当版本的 JRE。支持的版本列表包括在 IBM 软件支持机构站点上的 <i>IBM Content Navigator 必备硬件和软件</i>文档中。",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "该文档无法在您的 Web 浏览器中显示。",
		viewer_pdf_plugin_not_found_explanation: "找不到 Web 浏览器中用于显示 PDF 文档的插件。",
		viewer_pdf_plugin_not_found_userResponse: "会将该 PDF 文件下载到工作站，而不是在查看器窗口中显示其内容。",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "无法将以下项添加至存储库：${0}。",
		add_document_single_item_error_explanation: "发生此错误的原因可能为下列其中一个：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>您正尝试添加已移动或删除的文档。</li>" + "<li>您正尝试添加已重命名的文档。</li>" + "<li>您正尝试添加已损坏的文档。</li>" + "<li>您正尝试添加已在另一应用程序中打开的文档。</li>" + "<li>您正尝试向存储库添加文件夹。</li>" + "<li>您在操作系统上没有访问该文档文档的适当许可权。</li>" + "</ul>",
		add_document_single_item_error_userResponse: "要解决该问题，请执行适当操作：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>如果该文档已移动或重命名，请在文件系统上找到该文档并重试添加该文档。</li>" + "<li>如果该文档已在另一应用程序中打开，请关闭该文档并重试添加该文档。</li>" + "</ul>" + "<br>不能向该存储库添加文件夹。",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "无法将以下 ${0} 项添加至存储库 ${1}",
		add_document_multiple_items_error_explanation: "其中一项的问题导致无法将任何项添加至存储库。发生此错误的原因可能为下列其中一个：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>您正尝试添加已移动或删除的文档。</li>" + "<li>您正尝试添加已重命名的文档。</li>" + "<li>您正尝试添加已损坏的文档。</li>" + "<li>您正尝试添加已在另一应用程序中打开的文档。</li>" + "<li>您正尝试向存储库添加文件夹。</li>" + "<li>您在操作系统上没有访问该文档文档的适当许可权。</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "要解决该问题，请执行适当操作：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>如果该文档已移动或重命名，请在文件系统上找到该文档并重试添加这些项。</li>" + "<li>如果该文档已在另一应用程序中打开，请关闭该文档并重试添加这些项。</li>" + "<li>如果该文档已删除或损坏，请取消选择该项并重试添加余下项。</li>" + "</ul>" + "<br>不能向该存储库添加文件夹。",
		add_document_multiple_items_error_0: "项数",
		add_document_multiple_items_error_1: "失败的项数",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "您无法从此位置拖放项。",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "无法打开 eForms 对象。",
		open_forms_work_object_error_explanation: "Web 客户端不支持下列 eforms 对象类型：工作流程策略。",
		open_forms_work_object_error_userResponse: "请打开其他文档。",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "无法打开该文档。",
		viewer_privilege_to_view_error_explanation: "您没有查看该文档的适当特权。",
		viewer_privilege_to_view_error_userResponse: "请求文档所有者或系统管理员为您提供相应的许可权以查看该文档。",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "无法将项添加到存储库。",
		add_document_too_many_items_error_explanation: "一次可添加最多 ${0} 个项。您正尝试添加 ${1} 个项。",
		add_document_too_many_items_error_userResponse: "请从列表中移除某些项，然后再次尝试添加这些项。您还可以与系统管理员联系以增大可以一次添加到此桌面的最大文档数。",
		add_document_too_many_items_error_0: "最大项数",
		add_document_too_many_items_error_1: "项数",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "无法使用以下 URL 来建立与 Web 客户端的连接：${0}。",
		http_ltpa_expired_explanation: "与浏览会话关联的 LTPA 密钥已到期。",
		http_ltpa_expired_userResponse: "请重新启动 Web 浏览器，然后再次尝试登录。如果问题仍然存在，请将以下错误报告给系统管理员：${1}。",
		http_ltpa_expired_0: "web 客户端 URL",
		http_ltpa_expired_1: "HTTP 错误",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "无法将文档添加到 ${0} 文件夹。",
		dnd_no_privilege_error_explanation: "该文件夹上的许可权将阻止任何文档添加到其中。",
		dnd_no_privilege_error_userResponse: "请将该文档添加到其他文件夹。",
		dnd_no_privilege_error_0: "项名称",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "无法修改项。",
		modify_document_too_many_items_error_explanation: "一次最多可以修改 ${0} 项。您正尝试修改 ${1} 项。",
		modify_document_too_many_items_error_userResponse: "请选择较少项，然后尝试再次修改这些项。您还可以与系统管理员联系以增大可以一次从此桌面修改的最大项数。",
		modify_document_too_many_items_error_0: "最大项数",
		modify_document_too_many_items_error_1: "项数",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "您不能使用 ${0} 类。",
		add_document_multiple_unique_values_error_explanation: "${0} 类包含一个或多个需要对每一个文档使用唯一值的属性。当您添加多个文档时，所有文档都使用相同的值。",
		add_document_multiple_unique_values_error_userResponse: "请选择其他类，或者分别添加这些文档。",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "无法使用 ${0} 输入模板。",
		add_document_multiple_unique_values_entry_template_error_explanation: "${0} 输入模板要求将文档添加到 ${1} 类。但是，${1} 类包含一个或多个需要对每一个文档使用唯一值的属性。当您添加多个文档时，所有文档都使用相同的值。",
		add_document_multiple_unique_values_entry_template_error_userResponse: "请选择其他输入模板，或者分别添加这些文档。",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "无法使用 ${0} 输入模板。",
		entry_template_class_restricted_error_explanation: "输入模板使用 ${1} 类添加项，并且您不具有使用此类添加项的适当许可权。",
		entry_template_class_restricted_error_userResponse: "请选择另一输入模板或请求系统管理员授予您使用  ${1} 类添加项的适当许可权。",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "无法将该工作项重新分配给另一个用户。",
		process_reassign_error_explanation: "工作流程已禁止执行此操作。",
		process_reassign_error_userResponse: "您可以打开工作项并完成工作项中的当前步骤。有关此问题的更多信息，应请求该项的所有者验证是否可以重新分配该工作项。",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "无法装入以下定制操作：${0}。",
		customaction_loadurl_error_explanation: "定制操作所在位置不可访问。定制操作的当前 URL 为 ${1}。",
		customaction_loadurl_error_userResponse: "要求您的管理员将定制操作转移至可访问位置。",
		customaction_loadurl_error_adminResponse: "定义定制操作的 JSP 文件必须作为 eClient Web 应用程序或 IBM Content Navigator Web 应用程序的一部分提供。",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "找不到以下功能部件：${0}。",
		feature_invalid_explanation: "如果该功能部件在指定的桌面上不可用或者功能部件名称的拼写错误，那么可能会发生此问题。",
		feature_invalid_userResponse: "单击“确定”时，会将您重定向到此桌面的缺省功能部件。请联系系统管理员，以报告此问题。",
		feature_invalid_adminResponse: "如果该功能部件应该在桌面上可用，请在管理工具中更新桌面配置。如果不应在桌面中包括该功能部件或者该功能部件的拼写错误，请与创建此功能部件的 URL 的应用程序开发者协同工作，以更新该 URL。",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "无法打开 ${0} 搜索。",
		search_unsupportedTeamspaceSearch_error_explanation: "必须位于团队空间内，才能打开此搜索。",
		search_unsupportedTeamspaceSearch_error_userResponse: "请选择其他搜索。",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "无法导入以下文件：${0}。",
		wrong_import_file_type_error_explanation: "该文件必须是一个属性文件。",
		wrong_import_file_type_error_userResponse: "请选择从管理工具中导出的属性文件。",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: " ${0} 存储库在 ${1} 桌面上找不到。",
		browse_repository_not_found_error_explanation: "在 URL 参数中指定该存储库时，桌面上必须有该存储库并且必须已对其启用浏览功能。",
		browse_repository_not_found_error_userResponse: "请确保 URL 中指定的存储库标识正确，该存储库已添加至 ${1} 桌面，并且已对该存储库启用浏览功能。",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "未对 ${0} 存储库启用浏览功能（在 ${1} 桌面中）。",
		browse_repository_not_enabled_error_explanation: "在 URL 参数中指定该存储库时，必须已对其启用浏览功能。",
		browse_repository_not_enabled_error_userResponse: "已对 ${0} 存储库启用浏览功能（在 ${1} 桌面中）。",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "无法完成搜索，因为该链接包含无效条件。",
		invalid_xt_stored_search_criteria_error_explanation: "以下值无效： ${0}。",
		invalid_xt_stored_search_criteria_error_userResponse: "请求系统管理员提供已更新链接。",
		invalid_xt_stored_search_criteria_error_adminResponse: "在 URL 中编辑相应的“名称/值”对。如果您不知道哪些值对该属性有效，请在 FileNet Workplace XT 搜索设计器中打开已存储搜索以确定有效值。",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "无法打开跨存储库搜索。",
		unified_search_invalid_fixed_value_error_explanation: "跨存储库搜索包括无效条件。如果条件的固定值与映射中的其他属性不兼容，那么会发生此问题。例如，如果固定值是字符串但映射中的其他属性是整数，那么会发生此问题。",
		unified_search_invalid_fixed_value_error_userResponse: "如果您有相应的许可权来编辑该搜索，请移除无效条件并再次保存该搜索。如果您没有适当的许可权，无法编辑搜索，请要求搜索的所有者或系统管理员再次保存该搜索。",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "无法完成您的请求。",
		launch_action_invalid_json_error_explanation: "传递到 Web 客户端的数据无效。",
		launch_action_invalid_json_error_userResponse: "请告知系统管理员您在发生此问题时所使用的应用程序。",
		launch_action_invalid_json_error_adminResponse: "客户端应用程序未将有效 JSON 对象发送至 Web 客户端。请与 IBM 软件支持机构联系以获取更多帮助。",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "无法完成您的请求。",
		launch_action_not_found_error_explanation: "没有为 ${1} 桌面上的任何菜单配置 ${0} 操作。",
		launch_action_not_found_error_userResponse: "请求系统管理员将 ${1} 桌面配置为使用一个包含 ${0} 操作的菜单，或者为您分配包含 ${0} 操作的桌面。",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "无法完成您的请求。",
		launch_action_repository_not_found_error_explanation: "${0} 存储库与 ${1} 桌面无关联。",
		launch_action_repository_not_found_error_userResponse: "请求系统管理员使 ${0} 存储库与 ${1} 桌面相关联，或者为您分配包含 ${0} 存储库的桌面。",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "无法打开该团队空间。",
		teamspace_cannot_open_error_explanation: "未对此桌面配置团队空间功能部件。",
		teamspace_cannot_open_error_userResponse: "请询问系统管理员您是否有权访问包含团队空间功能部件的桌面，或者此桌面能否更新以包含团队空间功能部件。",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "检入已修订内容时发生错误。",
		viewer_redaction_checkin_failed_explanation: "检入已修订内容时，查看器接收到错误响应。",
		viewer_redaction_checkin_failed_userResponse: "请求系统管理员查看 Web 应用程序服务器日志文件。",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "您无法将文档添加至此存储库。",
		add_document_odserver_odwek_version_od_error_explanation: "IBM Content Manager OnDemand 服务器或 ODWEK 的当前版本不是支持将文档添加到 Content Manager OnDemand 存储库所需的最低级别。",
		add_document_odserver_odwek_version_od_error_userResponse: "请求管理员检查需要哪些 Content Manager OnDemand Server 和 ODWEK 版本以支持将文档添加到 Content Manager OnDemand 存储库。",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "无法将项添加到存储库。",
		add_document_too_many_items_od_error_explanation: "针对 IBM Content Manager OnDemand 存储库，一次仅可添加一个项。",
		add_document_too_many_items_od_error_userResponse: "从列表中移除一些项，然后再次尝试添加项，一次添加一个项。",
		add_document_too_many_items_od_error_0: "最大项数",
		add_document_too_many_items_od_error_1: "项数",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "无法将项添加到存储库。",
		add_document_filesize_empty_od_error_explanation: "无法将空文件添加到 IBM Content Manager OnDemand 存储库。",
		add_document_filesize_empty_od_error_userResponse: "将内容添加到文件，并尝试再次添加文件，或添加其他项。",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "无法打开跨存储库搜索。",
		unified_search_repository_not_found_error_explanation: "跨存储库搜索包括一个或多个无效存储库。当搜索中包括的存储库已从应用程序中删除或从当前桌面移除时，会发生该问题。",
		unified_search_repository_not_found_error_userResponse: "如果您具有相应的许可权来编辑该搜索，请再次保存该搜索。保存搜索时，Web 客户端将从搜索中移除无效存储库。如果您没有适当的许可权，无法编辑搜索，请要求搜索的所有者或系统管理员再次保存该搜索。",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "无法创建新文档。",
		edit_document_using_office_online_error: "无法打开该文档。",
		edit_document_using_office_online_error_explanation: "未配置 Microsoft Office Online Server URL。",
		edit_document_using_office_online_error_userResponse: "管理员必须先对存储库启用 Office Online Server 并指定 Microsoft Office Online Server URL，然后您才能使用 Office Online。",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "无法在 Microsoft Office Online 中打开此文档。",
		edit_document_using_office_online_error_userResponse1: "请求管理员更新 MS Office Online Server Integration。<br><br> 如果用户需要通过 Microsoft Office Online 访问此文档，请转至存储库的“编辑集成”页面，更新 MS Office Online Server Integration 以在类列表中添加此类，并进行修改以获取 Office Online 支持。",		
		browser_not_support_this_viewer: "配置的查看器与您的浏览器不兼容。",
		browser_not_support_this_viewer_explanation: "浏览器不支持 ${0}。",
		browser_not_support_this_viewer_userResponse: "使用另一个查看器来打开该文档。受支持浏览器的列表包括在 IBM 软件支持机构站点上的 <i>IBM Content Navigator 的必备硬件和软件</i>文档中。",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "工作流程信息",
		process_information_info_text: "所选项当前在以下工作流程中运行。",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "等于",
		operator_NOTEQUAL: "不等于",
		operator_LIKE: "相似",
		operator_STARTSWITH: "开头为",
		operator_ENDSWITH: "结尾为",
		operator_NOTLIKE: "不相似",
		operator_NULL: "为空",
		operator_NOTNULL: "不为空",
		operator_LESS: "小于",
		operator_LESSOREQUAL: "小于或等于",
		operator_GREATER: "大于",
		operator_GREATEROREQUAL: "大于或等于",
		operator_BETWEEN: "介于",
		operator_NOTBETWEEN: "不介于",
		operator_IN: "包含所有",
		operator_INANY: "包含任何",
		operator_NOTIN: "排除所有",
		operator_CONTAINS: "包含",

		/* SearchForm widget */
		search_button_tooltip: "搜索与您的条件相匹配的文档。",
		reset_button_tooltip: "请将搜索重置为您的管理员所设置的缺省值。",
		clear_button_tooltip: "请移除您为该搜索输入的所有值。",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "选择搜索",
		append_to_search: "追加至搜索",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "新建搜索",
		new_unified_search: "新建跨存储库搜索",
		searh_name_contains: "搜索名称包含",
		keep_search_criteria_expanded: "保持打开搜索条件",
		showing_results: "显示以下条件的搜索结果：",
		open_in_new_window: "在新窗口中打开",
		open_in_new_tab: "在新选项卡中打开",
		close_tab: "关闭选项卡",
		add_repository: "添加存储库",
		edit_repository: "编辑存储库",
		remove_repository: "移除",
		search_scope: "搜索范围",
		search_class_template: "类",
		object_type_version: "对象类型和版本",
		not_applicable: "不可用",
		unified_search_including_subfolders: " （包括子文件夹）",
		unified_search_dialog_intro_text: "选择存储库和搜索或者要包括在搜索中的类。",
		unified_search_class_or_template: "类或模板",

		select_object_fieldset_legend: "您要如何查找要附加的项：",
		select_object_create_new_search: "新建搜索",
		select_object_search_template: "现有搜索",

		search_criteria: "搜索条件：",
		search_criteria_no_colon: "搜索条件",
		search_in_multiple: "在 (${0}) 中搜索：",
		search_location_including_subfolders: "${0}（包括子文件夹）",
		search_class: "类：",
		search_class_multiple: "类 (${0})：",
		search_class_including_subclasses: "${0}（包括子类）",
		search_class_all_pseudo: "全部",
		search_results: "搜索结果",
		select_operator: "选择运算符",
		ending_value: "${0} 属性的末尾值是：",
		search_options: "搜索选项：",
		search_version: "版本：",
		search_released_version: "已发布版本",
		search_current_version: "当前版本",
		search_all_versions: "所有版本",
		search_file_type_filter: "文件类型过滤器：",
		search_one_file_type: "1 个文件类型",
		search_many_file_types: "${0} 个文件类型",
		search_action_filter: "操作过滤器：",
		search_action_filter_hover_help: "缩小结果范围以仅包括用户已对其执行特定操作的文件。<br/>例如，可仅搜索您在 2012 年 9 月 20 日添加的文档。",
		search_action_filter_enabled: "已启用操作过滤器",
		search_enable: "启用",
		search_disable: "禁用",
		search_by: "操作者",
		search_added: "添加",
		search_modified: "修改",
		search_checked_out: "检出",
		search_date_operator_on: "在",
		search_date_operator_not_on: "不在",
		search_date_operator_before: "先于",
		search_date_operator_after: "晚于",
		search_version_hover_help_p8: "发行的版本可用于所有用户。当前版本的文档表示一个或多个用户正在编辑该文档。",
		search_version_hover_help_cm: "当前版本是该项的最新版本。",
		search_using: "搜索匹配以下条件的项：",
		search_property_and_text_criteria: "属性值和文本条件",
		search_property_or_text_criteria: "属性值或文本条件",
		search_property_and_text: "属性和文本条件",
		search_property_or_text: "属性或文本条件",
		search_property_options: "属性选项：",
		search_property_option_match_all: "所有属性",
		search_property_option_match_any: "任意属性",
		search_property_option_match_all_summary: "全部匹配",
		search_property_option_match_any_summary: "任意匹配",
		search_total_count_type_total: "总数",
		search_total_count_type_atleast: "至少",
		search_content_size_filter: "内容大小过滤器：",
		search_content_size_filter_any: "任何内容大小",

		/* Search work options */
		search_work_filter: "工作项过滤器：",
		search_work_filter_hover_help: "缩小结果范围以仅包括工作流程中的项。例如，您可以缩小结果范围以仅包括活动状态的工作项。<br /><br />如果您想要查看搜索返回的项的所有版本，那么此选项不适用。",
		search_work_filter_enabled: "已启用工作项过滤器",
		search_work_filter_status: "状态：",
		search_work_filter_step: "步骤：",
		search_work_filter_owner: "所有者：",
		search_work_filter_status_all: "所有项",
		search_work_filter_status_active: "活动项",
		search_work_filter_status_suspended: "已暂挂项",
		search_work_filter_process_all: "所有工作流程",
		search_work_filter_step_all: "所有步骤",
		search_work_filter_owner_all: "所有用户",
		search_work_filter_step_error: "步骤名称不存在。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "在没有其他信息的情况下，无法完成搜索。请输入至少一个条件的值。",
		search_insufficient_input_box: "在没有其他信息的情况下，无法完成搜索。请输入文本搜索条件，或者选择元数据模板。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "如果在没有其他信息的情况下打开搜索，那么无法配置该搜索以运行。请输入至少一个条件的值。",
		search_member_required: "要将此搜索与特定用户和组共享，请至少选择一个要共享搜索的用户或组。",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "您要关闭而不保存更改吗？",
		search_prompt_close_all_without_save: "您要关闭所有选项卡而不保存更改吗？",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "下列其中一种类型的搜索条件不适用于此存储库：${0}。要在 Web 客户端中运行搜索，必须移除无效的条件。如果保存搜索，那么将移除无效的条件。如果不想更改搜索，请关闭搜索。",
		search_invalid_repository: "一个或多个存储库",
		search_invalid_class: "一个或多个类",
		search_invalid_folder: "一个或多个文件夹",
		search_invalid_file_type: "一种或多种文件类型",
		search_invalid_property: "一个或多个属性",
		search_invalid_text_search: "文本搜索条件",
		search_invalid_work: "工作项过滤器条件",

		search_operator_pulldown_missing: "需要一个运算符。请从下拉菜单中选择一个运算符。如果没有看到任何运算符，应请求您的系统管理员检查管理工具中的<b>搜索</b>选项卡，以查看是否所有运算符已设置为隐藏。如果这是一个跨存储库搜索，且相互映射的属性之间没有共同运算符，那么下拉菜单可能不包含任何运算符。",

		/*SearchBuilder */
		open_search_builder: "新建搜索",
		document_type: "类",
		show_all_properties: "显示所有属性",
		text_search_label: "查找包含以下词条的项：",
		text_search_place_holder: "使用词条与运算符的组合：* ? 或“完全匹配短语”",
		text_search_place_holder_box: "使用词条与运算符的组合：AND、OR、NOT 和“完全匹配短语”",
		text_search_place_holder_cascade_proximity: "使用词条与运算符的组合：* 或 ?",
		text_search_place_holder_common: "使用词条与“完全匹配短语”的组合",
		text_search_hover_help_p8: "将星号 (*) 或问号 (?) 用作通配符。使用双引号 (\"\") 以进行精确匹配。",
		text_search_hover_help_p8_only_crs: "将星号 (*) 或问号 (?) 用作通配符。使用双引号 (\"\") 以进行精确匹配。指定多个词条时，跨存储库搜索会返回包含任何词条的项。",
		text_search_hover_help_cm: "将星号 (*) 或问号 (?) 用作通配符。使用双引号 (\"\") 以进行精确匹配。将减号 (-) 用作要排除的词条的前缀，并将加号 (+) 用作要包括的词条的前缀。",
		text_search_hover_help_box: "在词条之间使用 AND，以匹配所有词条。在词条之间使用 OR，以匹配任何词条。使用双引号 (\"\") 以进行精确匹配。在词条前面添加 NOT 以排除该词条。",
		text_search_hover_help_common: "使用双引号 (\"\") 以进行精确匹配。指定多个词条时，跨存储库搜索会返回包含所有词条的项。",
		text_search_options: "文本选项：",
		text_search_options_hover_help: "如果使用除通配符之外的任何其他运算符，请选择“高级运算符”。",
		text_search_option_any: "任意词条",
		text_search_option_all: "所有词条",
		text_search_option_proximity: "字数大致在以下范围内：",
		text_search_option_none: "高级运算符",
		text_search_option_authoring: "文本搜索是：",
		text_search_option_authoring_hover_help: "选择确定如何让用户使用文本搜索条件的选项。如果您不想在搜索中包括任何文本搜索条件，请隐藏该选项。否则，您可以允许用户编辑或要求文本搜索条件，或者可以允许使其对用户只读。",
		text_search_option_hide: "隐藏条件",
		text_search_option_hide_hover_help: "如果不想在搜索中包括任何文本搜索条件或不允许其他用户指定文本搜索条件，请选择此选项。",
		text_search_option_in: "在 HTML/XML 标记 ${0} 中",
		text_search_option_paragraph: "在同一段中",
		text_search_option_sentence: "在同一句中",
		text_search_option_vql: "VQL 查询",
		text_search_option_none_hover_help: "将 - 用作要排除的词条的前缀。",
		text_search_option_cascade_proximity_hover_help: "将搜索结果限制为出现在不包括精确匹配短语的单词范围内的词条。",

		box_search_metadata: "元数据：",
		box_search_select_template: "选择模板",
		box_search_no_templates: "无模板可用",
		box_text_search_options_search_within: "搜索范围：",
		box_text_search_options_search_within_everything: "所有项",
		box_text_search_options_search_within_file_content: "文档内容",
		box_text_search_options_search_within_tags: "标记",
		box_text_search_options_limit_to: "仅搜索：",

		add_property: "添加属性",
		edit_template: "编辑搜索",
		save_search: "保存搜索",
		search_template_name: "名称：",
		search_template_desc: "描述：",
		auto_run: "在打开时运行搜索",
		show_in_tree: "在文件夹结构中显示搜索",
		show_in_tree_hover_help: "如果搜索保存在文件夹中，那么缺省情况下它仅显示在内容列表中。如果您选择此选项，那么该搜索也会显示在“浏览”视图的文件夹树中。但是，仅当您将该搜索保存在文件夹中时，该搜索才会显示在文件夹树中。",
		share_search_with: "与以下对象共享搜索：",
		remove_member: "移除 ${0}",
		ok_button_label: "确定",
		save_template: "保存",
		save_template_title: "如果您需要经常搜索特定项，请保存搜索条件。",
		remove_criterion: "移除",
		apply_button_label: "应用",
		empty_search_results_pane: "运行搜索以查看结果。",

		/*Search_in control   */
		folder_tree_repository_root_name: "整个存储库",

		repository_already_selected: "无法将 ${0} 存储库添加到跨存储库搜索，因为搜索中已包括该存储库。<br/> 一个存储库只能包括在跨存储库搜索中一次。<br/>请选择其他存储库以包括在跨存储库搜索中。",

		repository_limit_reached: "无法将 ${0} 存储库添加至跨存储库搜索。您最多可以将 ${1} 个存储库添加至搜索。",

		nomore_criteria_toappend: "所有映射的属性都已包括在搜索条件中。未向搜索条件添加任何属性。",
		nomore_criteria_toappend_regular: "所有属性都已包括在搜索条件中。未向搜索条件添加任何属性。",

		/* OD Save Search dialog */
		reload_label: "重新装入",
		od_save_search_help_text: "请输入搜索的名称或选择要替换的现有搜索",
		public_access_label: "允许其他用户使用此搜索",
		od_delete_search_help_text: "选择要删除的一个或多个搜索",
		delete_save_searches: "删除已保存的搜索",

		/* Unified Search */
		unified_search_enable_text_search: "包括文本搜索条件",
		unified_search_text_search_enabled: "已包括文本搜索",
		unified_search_mapping: "映射",
		unified_search_new_mapping: "新建映射",
		unified_search_mapping_name: "映射名称",
		unified_search_mapping_dialog_instructions: "选择要映射的属性。某些属性可映射到具有不同数据类型的属性。例如，您可以将字符串属性映射到整数属性。将某个属性映射到另一个属性时，会在跨存储库搜索中将这些属性视为单个属性。",
		unified_search_filter_available_properties: "过滤可用的属性",
		unified_search_available_properties: "可用属性",
		unified_search_mapped_properties: "映射的属性",
		unified_search_single_values: "单值",
		unified_search_multiple_values: "多值",
		unified_search_add_mapping: "添加映射",
		unified_search_warn_remove_repository: "所选存储库已用在搜索条件中。\n如果移除该存储库，那么将删除包括该存储库的任何映射和搜索条件。\n\n您要移除该存储库吗？",
		unified_search_warn_update_repository_mappings: "更改此存储库的属性选择会影响搜索条件。\n\n搜索条件包括一个或多个映射，而映射中包括您要移除的一个或多个属性。必须删除其中包括您要移除的属性的所有映射。必须删除其中包括这些映射的所有搜索条件，以便运行搜索。\n\n要更新存储库选项并删除映射和搜索条件吗？",
		unified_search_warn_update_repository_mappings_reset: "为此存储库添加文本搜索条件会影响跨存储库搜索条件。\n\n必须清除包含的映射使用了此存储库属性的所有属性搜索条件，以便运行搜索。\n\n要更新存储库选项并清除搜索条件吗？",
		unified_search_warn_update_repository_text_criteria: "移除此存储库的文本搜索条件会影响跨存储库搜索条件。\n\n必须从跨存储库搜索条件中删除文本搜索条件，以便运行搜索。\n\n要更新存储库选项并删除文本搜索条件吗？",
		unified_search_warn_update_repository_text_criteria_and_mappings: "移除此存储库的文本搜索条件和更改属性选择会影响跨存储库搜索条件。\n\n必须从跨存储库搜索条件中删除文本搜索条件，以便运行搜索。此外，属性搜索条件包括一个或多个映射，而映射中包括您要移除的一个或多个属性。必须删除其中包括您要移除的属性的所有映射。必须删除其中包括这些映射的任何属性搜索条件，以便运行搜索。\n\n要更新存储库选项并删除文本搜索条件和属性搜索条件吗？",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "为此存储库排除文本搜索条件将影响跨存储库搜索条件。\n\n必须清除包含的映射使用了此存储库属性的所有属性搜索条件，以便运行搜索。必须从跨存储库搜索条件中删除文本搜索条件，以便运行搜索。\n\n要更新存储库选项并清除搜索条件吗？",
		unified_search_warn_remove_mapping: "移除此映射会影响搜索条件。\n\n必须删除使用该映射的搜索条件，以便运行搜索。\n\n要更新该映射并删除搜索条件吗？",
		unified_search_warn_update_mapping: "更改此映射会影响搜索条件。\n\n必须清除使用该映射的搜索条件，以确保搜索不包括无效运算符或无效值。\n\n要更新该映射并清除搜索条件吗？",
		unified_search_warn_update_mapping_not_searchable: "更改此映射会影响搜索条件。\n\n当所映射的属性全部都是仅供显示时，您无法在搜索条件中使用该映射。必须删除使用该映射的搜索条件，以便运行搜索。\n\n要更新该映射并删除搜索条件吗？",
		unified_search_warn_update_mapping_box_searchable: "更改此映射会影响搜索条件。\n\n搜索条件已经多次包括此映射，如果您从 ${1} 存储库添加 ${0} 属性，那么该搜索条件将包括 ${0} 属性太多次。必须删除使用该映射的搜索条件，以便运行搜索。\n\n要更新该映射并删除搜索条件吗？",
		unified_search_details: "跨存储库搜索详细信息",
		unified_search_fixed_value_property: "固定值属性",
		unified_search_required_property: "必需属性",
		unified_search_display_only_property: "仅供显示的属性",
		unified_search_missing_required_properities: "无法保存或运行搜索。<br/>下列属性为必需属性：${0}必须在映射中包括这些属性并将具有值的属性添加到搜索条件。",
		unified_search_property_repostory: "${0}（存储库：${1}）",
		unified_search_builder_no_mappings: "无法运行该搜索。<br/>必须创建属性映射，并将其包含在<b>结果显示</b>中，这样搜索才可以显示您的结果。",
		unified_search_builder_insufficient_criteria_to_run: "无法运行该搜索。<br/>搜索条件未包含下列存储库的文本搜索条件或属性值：${0}。对于搜索中包含的任何一个存储库，您必须输入文本搜索条件，或创建属性映射，将其包含在属性条件并指定属性值。",
		unified_search_builder_insufficient_criteria_to_save: "无法保存该搜索。<br/>该搜索未包含下列存储库的搜索条件：${0}。对于搜索中的每个存储库，您必须进行下列选项：<ol><li>创建属性映射，并将其包含在属性条件中。</li><li>修改存储库以包含文本搜索条件，创建属性映射并将其包含在<b>结果显示</b>中。</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "无法运行该搜索。<br/>对于搜索中包括的每个存储库，您必须至少指定一个属性值。例如，您可以指定下列属性的值：${0}",
		unified_search_runtime_insufficient_criteria_text: "无法运行该搜索。<br/>需要文本搜索条件。",
		unified_search_runtime_insufficient_criteria_text_or_properties: "无法运行该搜索。<br/>对于搜索中包括的每个存储库，您必须至少指定一个属性值，或者输入文本搜索条件。例如，您可以指定下列属性的值：${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "无法运行该搜索。<br/>需要文本搜索条件。对于搜索中包括的每个存储库，您必须至少指定一个属性值，或者输入文本搜索条件。例如，您可以指定下列属性的值：${0}",
		unified_search_invalid_criteria: "搜索包含阻止搜索运行的条件。<br/>已移除无效的条件。但是，必须保存对搜索的更改，然后才能运行搜索。如果不想保存更改，请关闭搜索。<br/><br/>已移除或修改下列项：${0}",
		unified_search_invalid_fixed_values: "无法保存或运行搜索。<br/>以下搜索条件具有无效固定值：${0} 请执行下列其中一项操作来解决该问题：<ul><li>移除包含无效值的搜索条件。</li><li>编辑包含带有固定值的 IBM Content Manager OnDemand 属性的映射以移除该属性。</li><li>编辑包含带有固定值的 IBM Content Manager OnDemand 属性的映射以使所有属性可兼容。有关可映射哪些属性的更多信息，请参阅属性映射窗口顶部简介文本中的“了解更多信息”链接。</li></ul>",
		unified_search_cannot_add_properties: "您无法将属性添加至此搜索。<br/>所有可用的已映射属性都已经在搜索条件中，而每个属性都只能添加到搜索中一次。",
		unified_search_mapping_not_viewable: "无法在搜索结果中显示 Box 模板属性。如果要将此映射添加为列，那么必须至少映射一个不是 Box 模板属性的属性。例如，可以从其他存储库中选择属性。",

		unified_search_returned_more: "至少有一个存储库超过了允许的最大结果数。",
		unified_search_partial_failure: "至少一个存储库中发生了错误。",
		unified_search_partial_failure_and_returned_more: "至少有一个存储库发生了错误，并且至少有一个存储库超过了允许的最大结果数。",
		unified_search_see_analysis: "请参阅结果分析。",
		unified_search_analysis_intro_returned_more: "对于每个超过了允许的最大结果数的存储库，请尝试优化搜索条件以返回较少的结果。或者，您可以运行单个存储库搜索，以返回跨存储库搜索允许的最大结果数更多的结果。",
		unified_search_analysis_intro_partial_failure: "请查看由一个或多个存储库返回的错误信息。如果适用，请解决错误，然后再次运行跨存储库搜索。",
		unified_search_analysis_intro_partial_failure_and_returned_more: "对于发生错误的每个存储库，请尝试解决问题，然后再次运行搜索。<br/><br/>对于每个超过了允许的最大结果数的存储库，请尝试优化搜索条件以返回较少的结果。或者，您可以运行单个存储库搜索，以返回跨存储库搜索允许的最大结果数更多的结果。",
		unified_search_results_found: "找到的结果数",
		unified_search_maximum_allowed: "允许的最大值",
		unified_search_maximum_exceeded: "超过最大值",

		unified_search_mapping_rule_box: "无法将此属性添加到映射。<p>${1} 存储库中的 ${0} 属性已经存在于另一个映射中，而对于每个搜索，此存储库中的可搜索属性只能包括在一个映射中。<br/>请选择要添加至该映射的另一个属性。</p>",
		unified_search_mapping_rule_repository: "无法将属性添加到映射。<br/>该映射已包括 ${0} 存储库中的某个属性。映射只能包括某个存储库中的一个属性。<br/>请选择要从其添加属性的其他存储库，或者为所选属性创建新映射。",
		unified_search_mapping_rule_data_type: "无法将属性添加到映射。<br/>${0} 属性不能映射到 ${1} 属性。请选择另一属性以进行映射，或者为所选属性创建新映射。<br/>有关可映射哪些属性的更多信息，请参阅此窗口顶部简介文本中的“了解更多信息”链接。",
		unified_search_mapping_rule_cardinality: "无法将属性添加到映射。<br/>映射中的所有属性都必须支持单个值或多个值。所选属性支持 ${0}，但映射中的属性支持 ${1}。<br/>请选择要添加到映射的其他属性，或者为所选属性创建新映射。",
		unified_search_mapping_rule_fixed_value: "无法将属性添加到映射。<br/>该映射已包括具有固定值的某个属性。映射只能包括一个具有固定值的属性。<br/>请选择要添加到映射的其他属性，或者为所选属性创建新映射。",
		unified_search_mapping_rule_child_component: "无法将属性添加到映射。<br/>无法将具有子组件的属性映射到其他属性。如果要能够搜索此属性，请为所选属性创建新映射。",
		unified_search_mapping_rule_operator_intersection: "无法将属性添加到映射。<br/>映射中的所有属性都必须具有一个或多个公共运算符。但是，${0} 属性与映射中的其他属性没有任何公共运算符。<br/>如果适当，请选择其他属性。如果必须包括所选属性，请与系统管理员协同工作以编辑与该属性相关联的运算符。",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "高级设置",
		advanced_search_options_intro: "设置高级条件选项。",
		advanced_search_options_editable: "可编辑",
		advanced_search_options_readonly: "只读",
		advanced_search_options_required: "必需",
		advanced_search_options_hidden: "隐藏",
		advanced_search_options_property_editable:"属性是：",
		advanced_search_options_operators:"运算符：",
		advanced_search_options_use_all:"全部使用",
		advanced_search_options_use_selected:"使用所选项",
		advanced_search_options_operators_filtered: "过滤的运算符",
		// Data types in lowercase
		data_type_boolean: "布尔值",
		data_type_date: "日期",
		data_type_time: "时间",
		data_type_timestamp: "时间戳记",
		data_type_decimal: "小数值",
		data_type_double: "浮点数",
		data_type_short: "整数",
		data_type_integer: "整数",
		data_type_long: "整数",
		data_type_string: "文本字符串",
		data_type_string_alpha: "字母字符串",
		data_type_string_alphanum: "字母数字字符串",
		data_type_string_ext: "扩展字母数字字符串",
		data_type_string_num: "数字字符串",
		data_type_binary: "二进制",
		data_type_object: "对象",
		data_type_guid: "全局唯一标识",
		data_type_user: "用户",
		data_type_child_component: "子组件",

		/* Print Dialog */
		print_title: "打印",
		print_message: "正在打印：${0}",
		print_print_button: "打印",
		print_clean_margins_button: "将所有项设置为 0",
		print_type: "打印机类型：",
		print_printer_server_options: "服务器打印选项",
		print_printer_properties: "打印机属性",
		print_printer_fax_properties: "传真属性",
		print_printer_name: "打印机名称：",
		print_fax_recipient: "接收方",
		print_fax_sender: "发送方",
		print_copies: "份数：",
		print_local_orientation: "打印方向",
		print_local_orientation_landscape: "横向",
		print_local_orientation_portrait: "纵向",
		print_local_margins: "页边距",
		print_local_margins_top: "顶部",
		print_local_margins_bottom: "底部",
		print_local_margins_left: "左边",
		print_local_margins_right: "右边",
		print_printer_server: "服务器",
		print_printer_local: "本地",
		print_property_class: "类：",
		print_property_routing: "路由：",
		print_property_pagedef: "PageDef：",
		print_property_node: "节点：",
		print_property_writer: "写程序：",
		print_property_formdef: "FormDef：",
		print_property_printerid: "目标：",
		print_property_forms: "打印纸：",
		print_property_faxnotes: "注：",
		print_property_faxcompany: "公司：",
		print_property_faxnumber: "传真号码：",
		print_property_faxname: "名称：",
		print_property_faxsendertelnumber: "电话号码：",
		print_property_faxcoverpage: "封面页：",
		print_property_faxsubject: "主题：",
		print_saveoptions: "保存打印选项",
		print_property_bannerpage: "使用标题页面",
		print_print_with_info_fields: "打印信息字段",
		print_field_from: "发件人",
		print_field_to: "收件人",
		print_invalid_value_class: "有效字符为 A-Z 或 0-9",
		print_invalid_value_pagedef: "有效字符为字母或数字字符，或以下字符：@、# 或 $",
		print_invalid_value_writer: "有效字符为字母或数字字符，或以下字符：@、# 或 $",
		print_invalid_value_formdef: "有效字符为字母或数字字符，或以下字符：@、# 或 $",
		print_invalid_value_forms: "有效字符为字母或数字字符，或以下字符：@、# 或 $",
		print_invalid_value_margin: "有效数字介于 ${0} 和 ${1} 之间",
		print_status_message: "已将 ${0} 个文档发送到 ${1} 打印机。",

		print_applet_init_error: "无法启动打印 Applet。",
		print_applet_init_error_explanation: "可能因为以下原因发生此问题：<br/><br/><ul><li>Java 运行时环境 (JRE) 未安装在工作站上。</li><li>未在 Web 浏览器中启用 Java 插件。</li><li>工作站上的 JRE 版本与 IBM Content Navigator 版本不兼容。</li><li>浏览器在等待该打印 Applet 启动时超时。</li></ul>",
		print_applet_init_error_userResponse: "您可以完成下列步骤来解决 JRE 存在的问题：<br/><br/><ol><li>请确保已在工作站上安装 JRE。</li><li>请确保在 Web 浏览器中已启用 Java 插件。</li><li>请确保工作站上的 JRE 版本与 IBM Content Navigator 兼容，然后重试。支持的版本列表包括在 IBM 软件支持机构站点上的 <i>IBM Content Navigator 必备硬件和软件</i>文档中。</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "封面页",
		daeja_print_selected_documents_title: "所选文档",

		/* change the caps to em for emphasis*/
		match_all_criteria: "匹配所有搜索条件",
		match_any_criteria: "匹配任意搜索条件",
		include_subfolders_summary: "${0}（包括子文件夹）",
		browse_button: "浏览&hellip;",
		search_for: "搜索内容：",
		object_type_documents: "文档",
		object_type_folders: "文件夹",
		object_type_documents_folders: "文档和文件夹",
		object_type_web_links: "Web 链接",
		object_type_documents_folders_web_links: "文档、文件夹和 Web 链接",

		/* SelectSearchFolderDialog */
		search_in: "搜索范围：",
		include_subfolders: "包括子文件夹",

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
		locked_item_icon_title: "锁定者：${0}",
		checked_out_icon_title: "检出者：${0}",
		major_minor_version_icon_title: "包含次版本的主版本",
		suspended_icon_title: "该工作流程已暂挂",
		on_hold_icon_title: "已挂起",
		has_notes_icon_title: "包含注释",
		record_icon_title: "声明为记录",
		compound_document_icon_title: "复合文档",
		validateTemplate_icon_title: "团队空间模板需要验证",
		offlineTemplate_icon_title: "团队空间模板已脱机",
		offlineTeamspace_icon_title: "团队空间已脱机",
		pending_delete_icon_title: "团队空间处于暂挂删除状态",
		delete_error_icon_title: "未能删除团队空间",
		defaultTemplate_icon_title: "缺省团队空间模板",
		teamspace_icon_title: "团队空间",
		teamspace_template_icon_title: "团队空间模板",
		has_bookmark_icon_title: "有一个书签",
		read_only_icon_title: "只读",
		no_results_were_found: "找不到结果。",
		folder_is_empty: "文件夹是空的。",
		no_checked_out_items: "您未检出任何项。",
		inbasket_is_empty: "收件篮是空的。",
		worklist_is_empty: "工作列表是空的。",
		tracker_milestone_completed: "完成时间",
		stepprocessor_attachments_title: "内容",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "锁定项",
		unlock_items: "将项解锁",
		checkin_item: "检入项",

		/* Help */
		learn_more: "了解更多信息",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "打开团队空间",
		repository_tab_createWorkspace: "新建团队空间",
		repository_tab_createWorkspaceTemplate: "新建团队空间模板",
		repository_tab_DefaultTemplate: "缺省",

		/* Cross repository document copy */
		documentCopyTaskDescription: "此任务将复制文档。",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "您对所选团队空间模板没有编辑特权。",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "确定要删除 ${0} 团队空间吗？<br><br>只有从存储库中的其他文件夹中归档的文档才会保留在该存储库中。将会删除团队空间中归档的其他文档。",
		teamspaceDecommissionLabel: "删除：",
		teamspaceDecommissionDescription: "删除团队空间将从服务器中移除此团队空间：指示如何处理团队空间工件。",
		teamspaceDecommissionOptions: "删除团队空间选项",
		teamspaceDecommissionDeleteAll: "删除所有团队空间工件",
		teamspaceDecommissionReFileAll: "重新归档所有团队空间工件",
		teamspaceDecommissionReFileDestination: "移至：",
		teamspaceDecommissionReFileIn: "重新归档的位置",
		teamspaceDecommissionTaskName: "团队空间删除任务",
		teamspaceDecommissionTaskDescription: "此任务从存储库中删除团队空间。",
		teamspaceDecommissionDeletionStarted: "已安排删除此团队空间",
		teamspaceDecommissionDeletionConnectionFailed: "未能运行删除团队空间的任务，因为未能连接至该存储库。请确保存储库管理员的凭证正确。",

		teamspace_edit_properties_notsupported: "您只能从“团队空间”视图中编辑团队空间的属性。",

		/* teamspace offline */
		offlineTeamspace_open_msg: "此团队空间已脱机，只能由团队空间所有者打开",

		/* Teamspace Builder widget */
		workspace_validation_document: "文档：",
		workspace_validation_folder: "文件夹：",
		workspace_validation_ets: "以下输入模板在此存储库中不可用，并且已从所选输入模板的列表中移除：",
		workspace_validation_classes: "以下类在此存储库中不可用，并且已从所选类的列表中移除：",
		workspace_validation_searches: "以下搜索在此存储库中不可用，并且已从所选搜索的列表中移除：",
		workspace_validation_docs_folders: "以下文档和文件夹在此存储库中不可用，并且已从已包括项列表中移除：",
		workspace_change_template_confirmation_question: "如果选择另一模板，那么您的所有更改都将丢失。要继续吗？\n",
		workspace_delete_item_confirmation_question: "要移除 ${0} 项吗？\n",
		workspace_delete_role_confirmation_question: "要移除 ${0} 角色吗？\n",
		workspace_delete_confirmation_question: "如果删除团队空间，那么只删除团队空间容器。团队空间中的文件夹和文档将保留在存储库中，您可以通过执行搜索来查找这些文件夹和文档。要删除团队空间的内容，请先删除团队空间中的项，再删除团队空间。<br><br>您要删除 ${0} 团队空间吗？",
		workspacebuilder_instance_template_name_header: "团队空间模板名称",
		workspacebuilder_instance_template_description_header: "描述",

		workspacebuilder_template_tooltip_name: "模板名称不能包含下列任意字符：\\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "团队空间名不能包含下列任意字符：\\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "请提供使用户能够从模板列表中进行正确选择的描述。例如，您可以包括模板的预定用户或用法的相关信息。",
		workspacebuilder_instance_tooltip_description: "请提供使用户能够将此团队空间与其他团队空间区别开的描述。",

		workspacebuilder_template_edit_properties_pane: "编辑团队空间模板",
		workspacebuilder_instance_properties_pane: "定义团队空间",
		workspacebuilder_template_properties_pane: "定义团队空间模板",

		workspacebuilder_instance_security_pane: "设置团队空间安全性",
		workspacebuilder_template_security_pane: "设置模板安全性",

		workspacebuilder_layout_pane: "选择布局",
		workspacebuilder_search_templates_pane: "选择搜索",
		workspacebuilder_document_folders_pane: "包括文件夹和文档",
		workspacebuilder_doctypes_entryTemplates_pane: "选择类或输入模板",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "选择类",
		workspacebuilder_security: "团队空间安全性",

		workspacebuilder_roles_pane: "选择角色",
		workspacebuilder_security: "安全性",

		workspacebuilder_properties_templates: "可用模板：",
		workspacebuilder_available_templates: "可用搜索：",
		workspacebuilder_selected_templates: "已选搜索：",
		workspacebuilder_templates_name: "搜索名称",

		workspacebuilder_available_entryTemplates: "可用输入模板：",
		workspacebuilder_selected_entryTemplates: "所选择的输入模板：",

		workspacebuilder_item_classes: "可用类：",
		workspacebuilder_item_classes_selected: "已选类：",
		workspacebuilder_properties_select_template: "选择要用于此团队空间的模板。",
		workspacebuilder_template_properties: "定义团队空间模板",
		workspacebuilder_instance_properties: "定义团队空间",
		workspacebuilder_template_introText: "指定您要包括在每个团队空间中的公用组件，这些团队空间通过使用导航中的选择从此模板进行创建。完成之后，请单击<b>完成</b>以使该模板可供其他用户使用，其他用户可使用该模板创建新的团队空间。",
		workspacebuilder_instance_introText: "团队使用团队空间来共享和处理特定的一组文档。请为此团队空间提供有意义的名称和描述，以使用户能够将此团队空间与其他团队空间区别开。您可以通过包括其他搜索、类或输入模板、文档和文件夹来定制团队空间。",

		workspacebuilder_template_search_template_introText: "选择要从此模板创建的每个团队空间中包括的缺省搜索。如果没有选择任何搜索，团队空间用户会查看他们对其有访问权限的所有搜索。使用相应的许可权，用户可以在团队空间中共享和添加搜索。",
		workspacebuilder_instance_search_template_introText: "包括将使团队空间用户能更有效地完成任务的搜索。如果未包括任何搜索，那么团队空间用户将看到他们对其有许可权的所有搜索。用户使用相应权限还可添加和共享团队空间中的搜索。",

		workspacebuilder_template_roles_introText: "已向团队空间用户分配了角色。角色会指定允许用户执行的任务。单击每一个角色旁边的图标可查看所允许执行的任务。请选择适合于团队空间的角色。",
		workspacebuilder_template_roles_modify_introText: "您可以修改与此团队空间中的每一个角色相关联的许可权。当团队空间成员的权限发生更改时，应该通知他们。",

		workspacebuilder_template_roles_header_name: "角色名",

		workspacebuilder_template_folders_introText: "请选择要包括在每一个团队空间中的缺省文档和文件夹，这些团队空间从此模板进行创建。您可以将文档添加为链接或副本。请使用链接来指向您不想为其创建多份副本的文档（例如策略或过程）。创建用户将要修改的文档（例如模板和表单）的副本。",
		workspacebuilder_instance_folders_introText: "请选择要包括在团队空间中的缺省文档和文件夹。您可以将文档添加为链接或副本。请使用链接来指向您不想为其创建多份副本的文档（例如策略或过程）。创建用户将要修改的文档（例如模板和表单）的副本。",

		workspacebuilder_template_roles_introText: "请指定要包括在每一个团队空间中的角色，这些团队空间从此模板进行创建。您还可以创建新角色，供您在创建其他团队空间模板时使用。",
		workspacebuilder_instance_users_introText: "在团队空间中，会向每一个用户都分配一个或多个角色，这些角色可指定该用户可以完成的任务。请将用户添加到团队空间并向用户分配角色。",

		workspacebuilder_instance_navigation_pane_title: "团队空间构建器",
		workspacebuilder_template_navigation_pane_title: "团队空间模板构建器",

		workspacebuilder_roles_roles_nopermissions: "没有为 {0} 角色选择任何许可权。",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "已选角色：",
		workspacebuilder_roles_available_roles: "可用角色：",
		workspacebuilder_roles_privilege_header: "许可权",
		workspacebuilder_roles_select_role: "选择角色",
		workspacebuilder_roles_select_permission: "选择许可权",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "名为 {0} 的角色已经存在。必须为该角色指定唯一名称。",
		workspacebuilder_roles_edit_dialog_role_name: "角色名：",
		workspacebuilder_roles_edit_dialog_role_description: "角色描述：",
		workspacebuilder_roles_edit_dialog_title_new: "新建角色",
		workspacebuilder_roles_edit_dialog_title_edit: "编辑角色",

		workspacebuilder_roles_privileges_header: "{0} 角色的许可权：",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "文档许可权：",
		workspacebuilder_roles_priv_group_folder: "文件夹许可权：",
		workspacebuilder_roles_priv_group_teamspace: "团队空间许可权：",
		workspacebuilder_roles_priv_group_item: "文档和文件夹许可权：",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "管理许可权",
		workspacebuilder_roles_plbl_modifyItemPermissions: "具有此许可权的用户可管理对团队空间中文档和文件夹的访问权限。此许可权包括允许其他用户删除属性、编辑属性和创建子文件夹等。",

		workspacebuilder_roles_priv_deleteItems: "删除",
		workspacebuilder_roles_plbl_deleteItems: "具有此许可权的用户可删除团队空间中的文档和文件夹。",

		workspacebuilder_roles_priv_createItems: "创建",
		workspacebuilder_roles_plbl_createItems: "具有此许可权的用户可以在团队空间中创建文档和文件夹。",

		workspacebuilder_roles_priv_viewItemProperties: "查看属性",
		workspacebuilder_roles_plbl_viewItemProperties: "具有此许可权的用户可查看团队空间中文档和文件夹的属性（包括系统属性）。",

		workspacebuilder_roles_priv_modifyItemProperties: "编辑属性",
		workspacebuilder_roles_plbl_modifyItemProperties: "具有此许可权的用户可编辑团队空间中文档和文件夹的属性。",

		workspacebuilder_roles_priv_modifyFolderPermissions: "管理文件夹许可权",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "具有此许可权的用户可管理对团队空间中文件夹的访问。此许可权包括允许其他用户删除文件夹、编辑文件夹属性和创建子文件夹等。",

		workspacebuilder_roles_priv_deleteFolders: "删除文件夹",
		workspacebuilder_roles_plbl_deleteFolders: "具有此许可权的用户可删除团队空间中的文件夹。",

		workspacebuilder_roles_priv_modifyFolderProperties: "编辑文件夹属性",
		workspacebuilder_roles_plbl_modifyFolderProperties: "具有此许可权的用户可编辑团队空间中文件夹的属性。",

		workspacebuilder_roles_priv_createSubfolders: "创建子文件夹",
		workspacebuilder_roles_plbl_createSubfolders: "具有此许可权的用户可在团队空间中创建文件夹。",

		workspacebuilder_roles_priv_fileInFolders: "添加到文件夹",
		workspacebuilder_roles_plbl_fileInFolders: "具有此许可权的用户可将链接从团队空间中的文件夹添加到文档。",

		workspacebuilder_roles_priv_viewFolderProperties: "查看文件夹属性",
		workspacebuilder_roles_plbl_viewFolderProperties: "具有此许可权的用户可查看团队空间中文件夹的属性（包括系统属性）。",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "管理文档许可权",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "具有此许可权的用户可管理对团队空间中文档的访问。此许可权包括允许其他用户删除文档和编辑文档属性等。",

		workspacebuilder_roles_priv_deleteDocuments: "删除文档",
		workspacebuilder_roles_plbl_deleteDocuments: "具有此许可权的用户可删除团队空间中的文档。",

		workspacebuilder_roles_priv_promoteVersions: "升级版本",
		workspacebuilder_roles_plbl_promoteVersions: "具有此许可权的用户可将新的版本号分配给团队空间中的文档。",

		workspacebuilder_roles_priv_modifyContent: "编辑文档",
		workspacebuilder_roles_plbl_modifyContent: "具有此许可权的用户可编辑团队空间中文档的内容。",

		workspacebuilder_roles_priv_modifyDocumentProperties: "编辑文档属性",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "具有此许可权的用户可编辑团队空间中文档的属性。",

		workspacebuilder_roles_priv_viewContent: "查看文档",
		workspacebuilder_roles_plbl_viewContent: "具有此许可权的用户可查看团队空间中的文档。",

		workspacebuilder_roles_priv_viewDocumentProperties: "查看文档属性",
		workspacebuilder_roles_plbl_viewDocumentProperties: "具有此许可权的用户可查看团队空间中文档的属性（包括系统属性）。",

		workspacebuilder_roles_priv_addNewSearches: "添加搜索",
		workspacebuilder_roles_plbl_addNewSearches: "具有此许可权的用户可向团队空间添加搜索。缺省情况下，该搜索对其他用户不可用。",

		workspacebuilder_roles_priv_createNewSearches: "创建搜索",
		workspacebuilder_roles_plbl_createNewSearches: "具有此许可权的用户可以创建新搜索但不能保存搜索。如果用户没有此许可权，那么他们不能将已经存在于存储库上的文档添加到团队空间。",

		workspacebuilder_roles_priv_shareSearches: "共享搜索",
		workspacebuilder_roles_plbl_shareSearches: "具有此许可权的用户可以与团队空间的其他用户共享他们创建的搜索。",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "管理类或输入模板",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "具有此许可权的用户可从团队空间中添加和移除类或输入模板。",

		workspacebuilder_roles_priv_addRemoveClasses: "管理类",
		workspacebuilder_roles_plbl_addRemoveClasses: "具有此许可权的用户可在团队空间中添加和移除类。",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "管理团队空间用户",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "具有此许可权的用户可在团队空间中添加和移除用户及组。此外，他们还可以管理向用户分配的角色。",

		workspacebuilder_roles_priv_modifyRoles: "修改角色",
		workspacebuilder_roles_plbl_modifyRoles: "具有此许可权的所有者可以修改团队空间的角色许可权。此许可权仅适用于所有者。",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "选择用户",
		workspacebuilder_users_add_users_and_groups_button: "添加用户和组...",
		workspacebuilder_users_users_or_group_header: "用户和组",
		workspacebuilder_users_roles_header: "角色",

		workspacebuilder_users_role_header: "角色",
		workspacebuilder_users_role_no_permissions: "此角色没有许可权",
		workspacebuilder_users_available_roles_label: "可用角色：",
		workspacebuilder_users_selected_users_and_groups_label: "所选用户和组：",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "无法保存团队空间。必须至少为此团队空间指定一个所有者。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "无法保存团队空间。必须向所有用户分配一个角色。",
		// end of select users

		workspacebuilder_search_templates: "选择搜索",
		workspacebuilder_search_add: "添加搜索",
		workspacebuilder_properties_workspaceName: "团队空间名：",
		workspacebuilder_properties_templateName: "模板名称：",
		workspacebuilder_properties_workspaceDescription: "团队空间描述：",
		workspacebuilder_properties_templateDescription: "模板描述：",
		workspacebuilder_properties_workspaceTemplate: "已选模板：",
		workspacebuilder_properties_security: "与以下对象共享模板：",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "从团队空间移动:",
		moveTeamspaceDocuments_security: "与其共享文档：",
		moveTeamspaceDocuments_security_change: "对所选项指定定制安全性",
		moveTeamspaceDocuments_item_type_level: "不能选择“覆盖所选项的安全性”，因为所选项的类配置为仅使用类级别的安全性",
		moveTeamspaceDocuments_security_inherit: "从目标文件夹继承安全性",
		moveTeamspaceDocuments_file_info_text: "可将一个团队空间中的项移至另一个团队空间或文件夹。",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "您没有相应的许可权，无法将这些项移至所选择的文件夹。",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "您没有相应的许可权，无法从团队空间移动这些项。",
		moveTeamspaceDocuments_move_mixed_items: "不能覆盖所选项的安全性。在团队空间中，有一些项未合并。您可以只覆盖该团队空间管理的项的安全性。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "必须为团队空间指定名称。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "必须为团队空间模板指定名称。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "团队空间名不能包含下列任意字符：\\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "模板名称不能包含下列任意字符：\\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "链接到文档",
		workspacebuilder_folders_makeDocCopy: "复制文档",
		workspacebuilder_folders_newfolder: "新建文件夹",
		workspacebuilder_folders_local_drive: "从本地目录",
		workspacebuilder_folders_from_repo: "从存储库",
		workspacebuilder_folders_add_doc: "添加文档",
		workspacebuilder_folders_grid_name: "名称",
		workspacebuilder_folders_props: "属性",
		workspacebuilder_folders_remove: "移除",
		workspacebuilder_folders_delete: "删除",
		workspacebuilder_folders_adddoc_local: "从本地驱动器添加文档",
		workspacebuilder_folders_adddoc_repo: "从存储库添加文档",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "所指定的文件夹名已经存在。请指定其他文件夹名。",

		workspacebuilder_classes_title: "选择类或输入模板",
		workspacebuilder_classes_title_cm: "选择类",
		workspacebuilder_classes_template_introText: "指定通过此模板创建的团队空间是否会使用类或输入模板向存储库添加文档。如果未选择任何类，那么团队空间将看到他们对其具有访问权的所有类。如果用户具有相应的许可权，那么他们可以修改团队空间中类或输入模板的列表。",
		workspacebuilder_classes_template_introText_cm: "请选择用户可用来向存储库添加文档的类。如果没有选择任何类，团队空间用户将查看他们对此有访问权限的所有类。如果用户具有相应的许可权，那么他们可以修改团队空间中的类的列表。",
		workspacebuilder_classes_instance_introText: "请选择用户可用来向存储库添加文档的类或输入模板。如果未选择任何类，那么团队空间用户将看到他们对其有许可权的所有类。如果用户具有相应的许可权，那么他们可以修改团队空间中的类或输入模板的列表。",
		workspacebuilder_classes_instance_introText_cm: "请选择用户可用来向存储库添加文档的类。如果未选择任何类，那么团队空间用户将看到他们对其有许可权的所有类。如果用户具有相应的许可权，那么他们可以修改团队空间中的类的列表。",
		workspacebuilder_classes_selection: "选择类：",
		workspacebuilder_classes_list: "可用类：",
		workspacebuilder_classes_columns_default: "缺省值",
		workspacebuilder_classes_columns_className: "类名",
		workspacebuilder_classes_type_classes: "使用类添加文档",
		workspacebuilder_classes_type_classes_tooltip: "类包括关联的属性，因此可以找到这些文档以供稍后使用。",
		workspacebuilder_classes_type_entryTemplates: "使用输入模板添加文档",
		workspacebuilder_classes_type_entryTemplates_tooltip: "输入模板确保为每个文档提供的信息都一致并使用预定义的值。",
		workspacebuilder_classes_type_entryTemplates_columnName: "输入模板名称",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "描述",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "必须至少向团队空间添加一个输入模板。",

		workspacebuilder_classes_new: "新建类",
		workspacebuilder_classes_add: "添加类",
		workspacebuilder_entryTemplate_add: "添加输入模板",
		workspacebuilder_add_list: "添加",
		workspacebuilder_makeDefault_list: "设置为缺省值",
		workspacebuilder_removeDefault_list: "移除缺省值",

		workspacebuilder_roles_title: "选择角色",
		workspacebuilder_roles_title_modify: "修改角色",

		workspacebuilder_selection_moveup: "上移",
		workspacebuilder_selection_movedown: "下移",
		workspacebuilder_selection_remove: "移除",
		workspacebuilder_selection_add: "添加",
		workspacebuilder_selection_create_new_search: "新建搜索...",
		workspacebuilder_selection_create_new_role: "新建角色...",
		workspacebuilder_selection_make_role_available: "使之可用",
		workspacebuilder_selection_make_role_available_tooltip: "与其他模板共享选择的角色。必须向要共享的角色至少分配一个许可权。",

		workspacebuilder_navigation_next: "下一步",
		workspacebuilder_navigation_finish: "完成",
		workspacebuilder_navigation_validate: "验证",
		workspacebuilder_navigation_previous: "上一步",
		workspacebuilder_navigation_cancel: "取消",
		workspacebuilder_navigation_customize: "定制",

		workspacebuilder_search_dialog_title: "搜索",
		workspacebuilder_dialog_close: "关闭",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "模板可用性：",
		workspace_properties_templateState_tooltip: "将模板设置为不可用，以防止用户创建使用此模板的团队空间。",
		workspace_properties_dialog_title: "模板属性",
		workspace_properties_online_radio_option_label: "使之可用",
		workspace_properties_offline_radio_option_label: "使之不可用",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "您要取消而不保存更改吗？",
		workspacebuilder_cancel_confirmation_button: "是",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "将从模板中移除任何无效项并使该模板供用户使用。您要验证此团队空间模板吗？",
		workspacebuilder_validate_confirmation_button: "是",
		workspacebuilder_validate_confirmation_title: "验证",

		/* Entry templates builder */
		entry_templates: "输入模板管理器",
		no_entry_templates_were_found: "没有输入模板",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "过滤",

		/* Roleselector widget */
		role_selector_name: "角色：",

		/* User Group picker widget */
		directory_label: "目录：",
		scope_label: "搜索内容：",
		name_starts_with_label: "名称的开头为",
		name_contains_label: "名称包含",
		display_name_contains_label: "显示名称包含",
		starts_with_label: "开头为：",
		available_label: "可用：",
		available_heading: "可用",
		selected_label: "已选：",
		selected_heading: "已选择",
		available_repositories_label: "可用存储库",
		selected_repositories_label: "所选存储库",
		default_repository: "缺省存储库：",
		default_repository_placeholder: "选择存储库",
		default_role_placeholder: "选择角色",
		menu_label_placeholder: "选择或输入标签",
		default_repository_hover: "指定用户从此桌面登录 Web 客户端时，缺省情况下所选择的存储库。<br><br><b>要点：</b>必须先向“已选存储库”列表桌面添加存储库，才能指定缺省存储库。",
		default_repository_workflow_hover: "<b>提示：</b>只能配置已为此桌面进行配置的存储库的应用程序空间。",
		remove_label: "移除",
		users_label: "用户",
		groups_label: "组",
		user_or_group_name_label: "用户名或组名：",
		user_or_group_name_hover: "输入在存储库上有效的用户名或组名。将不验证该名称。",
		user: "用户",
		group: "组",
		name: "名称：",
		displayName: "显示名称",
		display_name: "显示名称：",
		shortName: "短名称：",
		distinguishedName: "专有名称：",
		search_tooltip: "搜索",
		add_tooltip: "添加",
		add_selected_tooltip: "添加到已选列表",
		remove_tooltip: "移除",
		remove_selected_tooltip: "从已选列表中移除",
		add_to_selected_tooltip: "添加",
		remove_from_selected_tooltip: "移除",
		move_up_selected_tooltip: "上移",
		move_down_selected_tooltip: "下移",
		advanced_search_options_tooltip: "高级设置",
		move_right_selected_tooltip: "移到子菜单中",
		move_left_selected_tooltip: "移出子菜单",
		add_separator: "添加分隔符",
		menu_item_label: "菜单项标签：",
		add_menu_label: "添加子菜单",
		menu_label: "子菜单标签：",
		menu_label_info: "<b>要点：</b>必须先向此子菜单添加至少一个菜单项，才能保存此菜单。",
		menu_dropdown_label: "下拉按钮标签：",
		menu_dropdown_label_info: "<b>要点：</b>必须先向此下拉按钮添加至少一个菜单项，才能保存此工具栏。",
		no_item_found: "找不到结果。",
		me: "我",
		anyone: "任何人",
		specific_users: "特定用户",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "搜索返回超过 {0} 个结果。请更改条件以缩小搜索范围。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "搜索结果包含已选择的项。这些项将不会显示在搜索结果中。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "返回了超过 {0} 个结果。使用过滤器来缩小结果范围",

		user_already_selected: "所指定的用户已被选中。请指定另一用户。",
		group_already_selected: "所指定的用户已被选中。请指定另一个组。",
		user_cannot_select_self: "您无法添加自身。请指定另一用户。",

		/* Select User Group dialog */
		select_user_group_add_label: "添加",
		select_user_group_cancel_label: "取消",
		add_users_groups_label: "添加用户和组",
		add_user_group_label: "添加用户和组",
		add_users_label: "添加用户",
		add_user_label: "添加用户",
		add_label: "添加：",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "下列文档具有未保存的注释更改：",
		viewer_confirm_to_proceed: "这些更改会丢失，您要继续吗？",
		viewer_warn_has_changes: "未保存的更改将予以废弃。",
		viewer_warn_is_printing: "正在进行的打印工作可能不会完成。",
		viewer_warn_confirm_exit: "要退出吗？",
		viewer_prompt_save_changes: "下列文档具有未保存注释更改，它们将会丢失：<br>${0}<br><br>您要保存这些更改吗？",
		viewer_prompt_mergesplit_changes: "下列文档具有未保存的更改：<br>${0}<br><br>这些更改会丢失，您要继续吗？",
		viewer_prompt_mergesplit_tab_changes: "以下文档具有未保存的更改：<br>${0}<br><br>这些更改会丢失，您要继续吗？",
		viewer_new_item_name: "新建文档",
		viewer_top_frame: "顶部框架：",
		viewer_bottom_frame: "底部框架：",
		viewer_left_frame: "左侧框架：",
		viewer_right_frame: "右侧框架：",
		viewer_viewer_frame: "“查看器”框架：",
		viewer_properties_frame: "“属性”框架：",
		viewer_comment_frame: "“内容”框架：",
		viewer_mergesplit_on: "视图",
		viewer_mergesplit_off: "合并与拆分",
		viewer_mergesplit_context_menu_move: "移动",
		viewer_mergesplit_context_menu_rename: "重命名",
		viewer_mergesplit_context_menu_delete: "删除",
		//move to new window
		viewer_move_to_new_window:"移至新窗口",
		viewer_continue:"废弃更改",
		viewer_return_to_original_window:"返回至原始窗口",
		viewer_switch_window:"切换窗口",
		viewer_prompt_lost_changes:"文档 ${0} 当前已在另一窗口中打开。该文档具有未保存的更改。<br><br>要切换至该窗口以保存更改，还是要废弃更改并在此窗口中打开此文档？",
		viewer_mergesplit_fallback_info: "只能对同一存储库中的文档完成“合并与拆分”操作。",
		viewer_tabbed_layout: "以选项卡方式查看",
		viewer_tabbed_layout_highcontrast: "选项卡",
		viewer_split_vertical_layout: "上下方向拆分窗格",
		viewer_split_vertical_layout_highcontrast: "顶部和底部",
		viewer_split_horizontal_layout: "左右方向拆分窗格",
		viewer_split_horizontal_layout_highcontrast: "左和右",
		viewer_add_vertical_layout: "在底部新建选项卡",
		viewer_add_vertical_layout_highcontrast: "底部选项卡",
		viewer_add_horizontal_layout: "在右侧新建选项卡",
		viewer_add_horizontal_layout_highcontrast: "右侧选项卡",
		viewer_add_horizontal_layout_rtl: "在左侧新建选项卡",
		viewer_add_horizontal_layout_rtl_highcontrast: "左侧选项卡",
		viewer_split_properties_layout: "查看属性",
		viewer_split_comment_layout: "查看评论",
		viewer_split_notelog_layout: "查看注释日志",
		viewer_window_title: "${0} 查看器",
		viewer_next_hit: "查看列表中的下一个文档",
		viewer_prev_hit: "查看列表中的上一个文档",
		viewer_confrim_more_search_results: "搜索结果不包含更多可供查看的文档。您要检索更多搜索结果吗？",
		viewer_confirm_get_next_page: "结果的列表不包含更多可供查看的项。要检索更多搜索结果吗？",
		viewer_confirm_get_next_item: "结果的列表包含更多可供查看的项。要查看下一个项吗？",
		viewer_fn_annotation_tooltip: " 创建者：${0}，创建时间：${1}",
		viewer_box_note_limitation: "只能在单独的窗口中打开和查看 Box 便笺。",
		viewer_click_to_open_box_note: "单击此处以打开 Box 便笺。",
		viewer_box_view_expiring: "您可以查看 Box 文档的最长时间为 60 分钟。当前会话将在 ${0} 分钟后到期。如果要继续处理该文档，必须立即将其重新装入。是否要重新装入该文档？",
		viewer_add_dialog_save_as_type: "另存为以下类型：",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "检出冲突",
		viewer_checkout_conflict: "该文档已由另一个用户检出。",
		viewer_checkout_confirm: "已提供此文档的更高版本。要继续检出该文档还是使用更高版本重新装入查看器？如果选择重新装入查看器，那么所有未保存更改将丢失。",
		viewer_checkout_continue: "继续检出",
		viewer_checkout_reload: "重新装入",
		viewer_status_building: "正在构建文档...",
		viewer_status_adding: "正在添加文档...",
		viewer_status_checking_in: "正在检入文档...",

		/* Class Selector Widget */
		include_subclasses_label: "包括子类",
		include_subclasses_label2: "也在子类中搜索",
		include_subclasses_note: "（包括子类）",
		available_classes_col_header: "可用类",
		single_class_label: "在单个类中搜索",
		multiple_classes_label: "在多个类中搜索",
		multiple_classes_hover_help: "选择此选项以在多个类中搜索。这些类可以是父类或子类。如果选择此选项，那么您只能看到对所选择的类通用的属性和值。",
		selected_classes_col_header: "所选择的类",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;（包括子文件夹）",
		favorites_pseudo_node: "\\收藏夹\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "必须在存储库中选择要向其添加文档的文件夹。",
		no_permission_add_folder: "您没有相应的许可权，无法向此文件夹添加文件夹。",
		no_permission_add_document: "您没有相应的许可权，无法向此文件夹添加文档。",
		document_already_in_folder: "该文档已经位于此文件夹中。",
		cant_move_folder_onto_parent: "该文件夹已经位于此文件夹中。",
		cant_move_folder_onto_self: "不能将文件夹移到它本身或其子文件夹内。",

		/* Workflow Widgets */
		process_application_space: "进程应用程序空间",
		process_role: "进程角色",
		process_inbasket: "进程收件篮",
		process_worklist: "工作列表",
		process_step_processor: "进程工作项",
		process_tracker: "跟踪工作项",
		process_info_subject: "主题",
		process_info_stepname: "步骤",
		process_info_is_locked: "已锁定",
		process_info_no_access: "无访问权",
		process_info_received_on: "接收时间",
		process_info_overdue: "过期",
		process_info_reminder_sent: "已发送提示",
		process_info_locked_by_user: "锁定者",
		process_work_object_number: "工作对象数",
		process_deadline: "截止日期：",
		process_launchedby: "启动者：",
		process_receivedon: "接收时间：",
		process_step: "步骤：",
		process_properties: "属性",
		process_attachments: "附件",
		process_attachments_select: "选择附件",
		process_finish_button_label: "停止跟踪",
		process_tracker_history: "历史记录",
		process_tracker_milestones: "里程碑",
		process_tracker_milestone: "里程碑",
		process_tracker_milestone_level: "级别",
		process_tracker_milestones_empty: "没有要显示的里程碑。",
		process_tracker_level_selector_label: "显示的里程碑级别最高达：",
		process_tracker_map_selector_label: "按映射过滤：",
		process_tracker_message: "消息",
		process_tracker_datereached: "已达到的日期",
		process_tracker_stepname: "步骤",
		process_tracker_cycle: "周期",
		process_tracker_review_cycle: "复审周期",
		process_tracker_participant: "参与者",
		process_tracker_completed: "完成时间",
		process_tracker_response: "响应",
		process_tracker_comments: "注释",
		process_tracker_delete_confirmation: "您要停止跟踪下列工作流程吗：${0}？",
		process_tracker_history_allmaps: "所有映射",
		process_tracker_history_workflow: "工作流程",
		process_tracker_history_terminate: "终止",
		process_tracker_history_malfunction: "故障",
		process_filter_label: "过滤",
		process_no_filter_summary: "未应用过滤器",
		process_filter_summary: "已应用 ${0}",
		process_filter_reset_tooltip: "重置将清除过滤器并刷新收件篮。",
		process_attachments_add_folder: "添加文件夹",
		process_attachments_add_doc: "添加文档",
		process_complete_button_label: "完成",
		process_save_button_label: "保存",
		process_launch_button_label: "启动工作流程",
		process_open_button_label: "打开",
		process_movetoinbox_button_label: "移至收件篮",
		process_return_button_label: "返回",
		process_return_to_sender_tooltip: "将工作项返回至原始收件篮",
		process_move_to_inbasket_tooltip: "将工作项移至您的个人收件篮",
		process_reassign_tooltip: "将工作项重新分配给另一个所有者",
		process_reassign_button_label: "重新分配",
		process_preferences_button_label: "首选项",
		process_manageroles_button_label: "管理角色",
		process_manageroles_no_members: "没有成员。",
		process_responses_button_label: "更多响应",
		process_morecustomaction_button_label: "更多操作",
		process_show_instructions: "查看指示信息",
		process_hide_instructions: "隐藏指示信息",
		process_remove_attachment: "移除",
		process_close_window: "已处理工作项。",
		process_delegate_flag: "要求当前所有者在将工作项路由到工作流程的下一个步骤前核准该工作项。",
		process_paticipant_voting: "表决以进行核准所需的参与者数：",
		process_get_next_label: "获取下一个工作项",
		process_no_more_items: "收件篮中没有其他要处理的项。",
		process_workflow_name: "工作流程名称：",
		process_pattern_process_name: "${0} 的复审",
		process_instuctions: "适用于复审者的指示信息：",
		process_pattern_deadline: "截止日期：",
		process_reviewers: "复审者：",
		process_approvals_required: "所需核准：",
		process_on_reject: "如果工作项遭到拒绝：",
		process_return_to_originator: "返回给我",
		process_return_to_previous_reviewer: "返回给上一个复审者",
		process_additional_settings: "其他设置：",
		process_allow_reassign: "允许复审者重新分配此复审",
		process_complete_notification: "当复审完成时通知我",
		process_workflow_name_hover_help: "您为工作项指定的名称应该便于复审者在其收件篮中的此工作项与其他工作项之间进行辨别。",
		process_approvals_required_hover_help: "如果多个人员同时复审该工作项，那么您可以指定成功完成该工作项所需的批准次数。",
		process_approval_options: "批准选项",
		process_all: "全部",
		process_at_least: "至少",
		process_at_least_by_count: "至少 ${0} 位复审者",
		process_at_least_by_percentage: "至少 ${0}% 的复审者",
		process_comments: "注释：",
		process_review_step_comments_hover_help: "如果拒绝该工作项，那么您必须提供拒绝该工作项的原因的相关信息。此信息使工作项的发起方或上一个复审者解决您的忧虑。",
		process_rework_step_comments_hover_help: "必须提供关于如何解决注释的信息。如果您不同意该注释，请提供您决策的理由。",
		process_rejection_reason: "拒绝原因：",
		process_summary: "摘要",
		process_sequential_review: "有序复审",
		process_sequential_review_description: "将由每一个复审者按顺序复审该工作项。",
		process_parallel_review: "并行复审",
		process_parallel_review_description: "将由所有复审者同时复审该工作项",
		process_parallel_approvals_required_error: "所需的审批数过高。仅指定了 ${0} 个复审者。",
		process_parallel_invalid_required_approvals_count: "值无效。该值必须为 ${0}。",
		process_subject_prompt: "输入主题",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "工作项：",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "查看属性",
		view_permissions_level: "查看许可权",
		view_content_level: "查看文档",
		link_level: "链接",
		modify_properties_level: "编辑属性",
		modify_content_level: "编辑文档",
		minor_version_level: "编辑次要版本",
		major_version_level: "编辑主要版本",
		create_instance_level: "创建实例",
		delete_document_level: "删除文档",
		delete_item_level: "删除项",
		modify_document_permissions_level: "管理许可权",
		modify_folder_permissions_level: "管理许可权",
		modify_owner_level: "修改所有者",
		delete_folder_level: "删除文件夹",
		file_in_folder_level: "添加到文件夹",
		create_subfolder_level: "创建子文件夹",
		link_item_level: "向文档添加注释，添加到文件夹", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>仅文档：向文档添加注释或从文档移除注释</li><li>仅文件夹：向文件夹添加项或从文件夹移除项</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "删除",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "所有者",
		/* previously \"Full control\" */
		edit_privilege: "作者",
		/* previously \"Edit\" */
		read_only_privilege: "读者",
		/* previously \"Read only\" */
		no_access_privilege: "无访问权",
		share_with_label: "共享对象：",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "仅限于我自己",
		public_label: "每个人",
		members_label: "特定用户和组",
		select_members_label: "选择...",
		select_user_group_label: "选择用户...",
		select_users_groups_label: "选择用户和组...",
		select_user_label: "选择用户...",
		propagation_label: "传播：",
		access_label: "许可权：",
		add_permission_add_label: "添加",
		security_policy_label: "安全策略：",
		includes_inherited_access: "包括继承的访问权",
		customize_access_for_label: "定制对以下各项的访问权：",
		customize: "定制",
		direct: "此项",
		singleLevelInheritance: "一个级别",
		infiniteLevelInheritance: "所有级别",
		inherited: "已继承",
		direct_hover_help: "安全设置应用于所选项",
		singleLevelInheritance_hover_help: "这些许可权适用于此项以及配置为从此项继承安全性的中间子代。",
		infiniteLevelInheritance_hover_help: "这些许可权适用于此项以及配置为从此项继承安全性的所有后代。",
		inherited_hover_help: "这些许可权继承自父代。",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0} 的这些许可权适用于此项以及配置为从此项继承安全性的中间子代。",
		infiniteLevelInheritance_member_hover_help: "${0} 的这些许可权适用于此项以及配置为从此项继承安全性的所有后代。",
		inherited_member_hover_help: "${0} 的这些许可权继承自父代。",
		partial_hover_help: "用户更改了项安全设置",
		allow: "允许",
		deny: "拒绝",
		basic: "基本",
		advanced: "高级",
		permission_type: "设置以下各项的访问权：",
		share_with_hover_help: "该项前已在以下用户和组之间共享。",
		direct_security_policy_hover_help: "此安全策略的设置允许您更改此项的安全性。",
		security_policy_hover_help: "此项的安全性是只读的，因为此安全策略的设置阻止您更改此项的安全性。",
		security_remove: "无许可权",
		pseudo_group_label: "别名帐户",
		marking_hover_help: "此项的安全性由标记集控制，该标记集可影响此项的安全性。",
		note_label: "要点：",
		marking_text: "此项已标记为 ${0}。该项可能具有其他安全性限制。",
		authenticated_users: "已认证的用户",
		realm_users: "${0} 个用户",
		denyAll: "全部拒绝",
		allowAll: "全部允许",
		remove_direct_text: "保存更改后，将从此项移除此成员的许可权。",
		remove_single_inheritance_text: "保存更改后，将从此项<br>以及配置为从此项继承安全性的中间子代移除此成员的许可权。<p>要继续吗？",
		remove_infinite_inheritance_text: "保存更改后，将从此项<br>以及配置为从此项继承安全性的所有后代移除此成员的许可权。<p>要继续吗？",
		remove_inheritance_text: "保存更改后，将从此项<br>以及配置为从此项继承安全性的所有后代移除此成员的许可权。将保留此项继承的<br>许可权。<p>要继续吗？",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "移除 ${0} 的这些许可权",

		security_proxy_text: "此项的安全性是只读的。",
		security_proxy_declared_text: "此项的安全性为只读，因为它由安全性代理进行定义。",
		security_proxy_hover_help: "此项的安全性由存储库中另一个对象上设置的安全性控制。",
		add_permissions_label: "添加许可权",
		permission_propagation_direct: "仅限于此文件夹",
		permission_propagation_onelevel: "此文件夹及其下面的一个级别",
		permission_propagation_alllevels: "此文件夹及其下面的所有级别",
		document_propagation_label: "设置以下各项的访问权：",
		document_propagation_FOLDER: "文件夹",
		document_propagation_DOCUMENT: "文档",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "认证源：",

		/* Versions Widget */
		object_versions_selector_label: "版本：",
		object_versions_label: "版本",
		object_type_document_label: "文档：",

		/* Folders Filed In */
		properties_folders_filed_in_label: "文件夹归档位置",
		folders_filed_in_folder_col_hdr: "文件夹",
		folders_filed_in_path_col_hdr: "路径",
		folders_filed_in_containment_name_col_hdr: "包含名称",
		folders_filed_in_creator_col_hdr: "创建者",
		folders_filed_in_date_created_col_hdr: "创建时间",

		/* Parent Documents */
		properties_parent_documents_label: "父文档",

		/* Select object dialog */
		select_object_title: "选择项",
		select_object_breadCrumb_version_prefix: "版本：",
		show_versions_label: "显示版本",
		use_current_version_label: "使用当前版本",
		use_released_version_label: "使用已发布的版本",

		/* Select content class dialog */
		select_class: "选择类",
		/* Select Search dialog */
		select_search: "选择搜索",

		/* Show hyperlink dialog */
		show_hyperlink_title: "查看链接",
		show_hyperlink_intro: "您可以将链接复制并粘贴到电子邮件、交谈和 Web 页面中。如果有多个版本的项，请指定您要链接至的版本。",
		show_hyperlink_intro_no_version_select: "您可以将链接复制并粘贴到电子邮件、交谈和 Web 页面中。",
		show_text_label: "版本：",
		released_button_label: "已发布",
		current_button_label: "当前",
		select_button_label: "特定版本",
		show_hyperlink_no_released_version_msg: "此文档没有已发布版本。",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "启动工作流程",
		edit_workflow_title: "工作项属性",
		start_workflow_intro: "启动工作流程以处理所选项。如果要将该工作项分配给特定用户，请指定所有者。",
		edit_workflow_intro: "您可以编辑已选工作项的属性。如果要将该工作项重新分配给另一个用户，请指定所有者。",
		workflow_field_label: "工作流程：",
		priority_field_label: "优先级：",
		owner_field_label: "所有者：",
		start_button_label: "启动",
		save_button_label: "保存",
		owner_value_hint: "输入字母数字字符串，最大长度为 32 个字符。该字符串只能包含空格或下列字符：a-z、A-Z、0-9 和 ` . , : ; ? \\ \" / - _ &amp;+ % * = < > ( ) | ! $ $ # ^ @",

		properties_content_elements_label: "内容元素",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "值无效。该值只能包含空格或下列字符：a-z、A-Z、0-9 和 ` . , : ; ? \\ \" / - _ &amp;+ % * = < > ( ) | ! $ $ # ^ @",
		priority_value_hint: "请输入从 1 到 32000 的值以指示工作项的重要程度。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "值无效。优先级必须是从 1 到 32000 的值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "该工作流程名称不存在。",

		/* Suspend work items in workflow */
		suspend_workitems_title: "从工作流程暂挂",
		suspend_workitems_intro: "从工作流程中暂挂工作项时，除非恢复该工作项，否则将无法处理该工作项",
		suspend_workitems_options_label: "暂挂所选工作项：",
		suspend_until_resume_label: "直到手动恢复",
		suspend_until_date_label: "直到",
		suspend_for_duration_label: "持续时间",
		suspend_for_duration_hours: "小时",
		suspend_for_duration_days: "天数",
		suspend_for_duration_weeks: "周",
		suspend_for_duration_months: "月",
		suspend_for_duration_years: "年",
		suspend_button_label: "暂挂",
		suspend_duration_value_hint: "请为持续时间输入 1 到 99 范围中的值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "值无效。该值必须在 1 到 99 范围内。",

		/* Remove from workflow */
		remove_workflow_title: "从工作流程中移除",
		remove_workflow_confirmation: "要从工作流程移除所选项吗？<br>已选 ${0} 项。",
		remove_workflow_button_label: "移除",

		/* Unfile dialog */
		unfile_dialog_title: "从文件夹中移除",
		unfile_dialog_remove_from_folder_label: "从以下位置移除：",
		unfile_dialog_info_text: "您可以从文件夹中移除项。但是，从所有文件夹中移除项时都不会从存储库中移除该项。您仍然可以通过运行搜索来检索该项。只有您对其具有查看特权的文件夹才会显示在此列表中。",
		unfile_dialog_select_all: "全部选中",
		unfile_dialog_deselect_all: "全部清除",
		unfile_dialog_remove_button_label: "移除",
		unfile_dialog_select_folder_col_hdr: "选择文件夹 ",
		unfile_dialog_folder_col_hdr: "文件夹",
		unfile_dialog_path_col_hdr: "路径",
		unfile_dialog_not_filed_msg: "此项不在任何文件夹中。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "您没有相应的许可权，无法从此项所在的任何文件夹中移除此项。",
		unfile_dialog_folder_not_selectable_tooltip: "您没有相应的许可权，无法从此文件夹中移除此项。",
		unfile_multi_prompt: "要从 ${0} 文件夹移除所选项吗？",
		unfile_large_number_items_confirmation_question: "已选择移除 ${0} 个项（在 ${1} 文件夹）。<br/>从文件夹移除许多项可能需要较长时间。<br/>要继续吗？",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "打开",
		move_to_folder_title: "移至文件夹",
		move_to_folder_button_caption: "移动",
		move_to_folder_label: "移至：",
		add_to_folder_title: "添加到文件夹",
		add_to_folder_button_caption: "添加",
		add_to_folder_label: "添加至：",
		copy_to_folder_title: "复制到文件夹",
		copy_to_folder_button_caption: "复制",
		copy_to_folder_label: "复制到：",
		copy_to_folder_delete_label: "复制完成之后，请从 Box 中删除所选项。",
		move_from_folder_label: "移动自：",
		move_file_info_text: "您可以将项从一个文件夹移至另一个文件夹。",
		move_folder_info_text: "您可以将文件夹从一个父文件夹移至另一个文件夹。",
		add_doc_to_folder_info_text: "您可以将项添加到一个或多个文件夹。如果项已经在文件夹中，那么会将该项保留在该文件夹中并添加到您指定的任何其他文件夹。",
		copy_doc_to_folder_info_text: "可以将项复制到文件夹。",
		box_copy: "Box 复制",
		box_copy__button_caption: "复制",
		box_copy_to_info_text: "从 Box 中选择要将所选项复制到的存储库和文件夹。",
		box_copy_from_info_text: "从 Box 中选择要将所选项复制到的存储库和文件夹。",
		box_copy_version_info_text: "要添加新的文档，请选择存储库和文件夹。要检入新版本，请选择存储库和文档。",
		admin_box_copy: "Box 复制",
		admin_box_copy_hover: "此选项允许用户将文档复制到 Box。",

		no_permission_to_copy_version_msg: "您无法将从 Box 复制的文档作为所选文档的新版本。您没有相应的许可权，无法编辑所选文档，或者所选文档已被其他人检出。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "您没有相应的许可权，无法从此项所在的任何文件夹中移除此项。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "您没有相应的许可权，无法从此文件夹中移除此项。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "无法移动此项，因为它未归档到任何文件夹中。请选择另一个项。",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "启动工作流程",
		subscriptions_dialog_available_items_label: "可用项：",
		subscriptions_dialog_info_text: "指定要启动的工作流程。",
		subscriptions_dialog_select_button_label: "确定",
		subscriptions_dialog_name_col_hdr: "名称",
		subscriptions_dialog_desc_col_hdr: "描述",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "管理角色",
		manageroles_dialog_info_text: "您可以修改与此过程应用程序空间相关联的每一个角色的用户列表。",
		manageroles_dialog_members_label: "成员",
		manageroles_dialog_roles_label: "角色",
		manageroles_dialog_add_button_label: "添加用户和组",
		manageroles_dialog_remove_button_label: "移除",
		manageroles_dialog_save_button_label: "保存",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "没有工作流程与此项相关联。",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "工作流程首选项",
		workflow_pref_dialog_info_text: "指定要为其接收电子邮件通知的工作流程事件。您还可以通过选择要将工作委托于的用户来将您的工作转交给其他人。",

		workflow_pref_general: "常规",
		workflow_pref_email_address: "电子邮件地址",
		workflow_pref_email_address_hover: "指定要接收工作流程通知的电子邮件地址。",
		workflow_pref_preferred_locale: "语言",
		workflow_pref_preferred_locale_hover: "指定将用来显示电子邮件通知的语言。",

		workflow_pref_work_item_notice: "工作项通知",
		workflow_pref_step_new_assignment: "分配给我一个新工作项",
		workflow_pref_step_new_assignment_hover: "当接收到新工作项时通知我。",
		workflow_pref_step_expired_deadline: "已超过工作项截止期限",
		workflow_pref_step_expired_deadline_hover: "超过工作项截止期限时通知我。",
		workflow_pref_step_reminders: "接近工作项截止期限",
		workflow_pref_step_reminders_hover: "当工作项接近截止期限时提醒我。",

		workflow_pref_originator_notice: "发起方通知",
		workflow_pref_milestone_reached: "已到达里程碑",
		workflow_pref_milestone_reached_hover: "当我启动的工作流程中到达里程碑时通知我。",

		workflow_pref_tracker_notice: "工作流程跟踪程序通知",
		workflow_pref_tracker_new_assignment: "分配给我一个新跟踪程序项",
		workflow_pref_tracker_new_assignment_hover: "当我正在跟踪的工作流程启动时通知我。",
		workflow_pref_tracker_deadline_reminders: "接近工作流程截止期限",
		workflow_pref_tracker_deadline_reminders_hover: "当工作流程接近截止期限时提醒我。",
		workflow_pref_tracker_deadline_expired: "已超过工作流程截止期限",
		workflow_pref_tracker_deadline_expired_hover: "超过工作流程截止期限时通知我。",
		workflow_pref_tracker_exception: "发生工作流程错误",
		workflow_pref_tracker_exception_hover: "发生工作流程异常或错误时通知我。",
		workflow_pref_tracker_expired_deadline: "已超过步骤截止期限",
		workflow_pref_tracker_expired_deadline_hover: "当我正在跟踪的工作流程已超过步骤截止期限时通知我。",
		workflow_pref_tracker_milestone_reached: "已到达里程碑",
		workflow_pref_tracker_milestone_reached_hover: "当我跟踪的工作流程中到达里程碑时通知我。",

		workflow_pref_out_notice: "不在办公室",
		workflow_pref_proxy_user: "将工作委托给",
		workflow_pref_proxy_user_hover: "使用此选项来将您的工作自动转交给另一个用户，例如，当您不在办公室或外出度假时。",
		workflow_pref_workflow: "工作流程",
		workflow_pref_on: "在",
		workflow_pref_off: "关闭",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "启动工作流程",
		transfered_workflows_dialog_info_text: "选择要启动的工作流程。",
		transfered_workflows_dialog_available_items_label: "可用项：",
		transfered_workflows_dialog_select_button_label: "启动",
		transfered_workflows_dialog_name_col_hdr: "名称",
		transfered_workflows_dialog_no_item_found: "找不到已传输的工作流程。",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "传输工作流程",
		transfer_workflow_dialog_info_text: "选择要传输至工作流程系统的工作流程。",
		transfer_workflow_dialog_use: "使用此工作流程名称",
		transfer_workflow_dialog_use_another: "使用另一个工作流程名称",
		transfer_workflow_dialog_in_use: "工作流程名称为：",
		transfer_workflow_dialog_transfer_button_label: "传输",
		transfer_workflow_dialog_no_items_found: "找不到已传输的工作流程。",
		transfer_workflow_dialog_use_hover: "根据工作流程定义指定当前工作流程名称。",
		transfer_workflow_dialog_another_hover: "指定另一工作流程名称或复用现有已传输工作流程名称。",

		/*Search In control*/
		search_in_title: "搜索范围：",
		search_in_teamspaces: "团队空间",
		search_in_repositories: "存储库",
		search_in_thisteamspaces: "此团队空间",

		ajaxViewer_save: "保存注释",
		ajaxViewer_print: "打印预览",
		ajaxViewer_firstPage: "第一页",
		ajaxViewer_previousPage: "上一页",
		ajaxViewer_nextPage: "下一页",
		ajaxViewer_lastPage: "最后一页",
		ajaxViewer_unknownPageCount: "1/？",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} / ${1}",
		ajaxViewer_zoomOut: "缩小",
		ajaxViewer_zoomIn: "放大",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "适合宽度",
		ajaxViewer_fitHeight: "适合高度",
		ajaxViewer_fitPage: "适合页面",
		ajaxViewer_rotate270: "旋转 270 度",
		ajaxViewer_rotate90: "旋转 90 度",
		ajaxViewer_rotate180: "旋转 180 度",
		ajaxViewer_darken: "变暗",
		ajaxViewer_lighten: "变亮",
		ajaxViewer_lessContrast: "减少对比度",
		ajaxViewer_moreContrast: "增加对比度",
		ajaxViewer_invert: "颠倒",
		ajaxViewer_createHighlight: "突出显示",
		ajaxViewer_createNote: "注释",
		ajaxViewer_editAnnotation: "编辑注释属性",
		ajaxViewer_deleteAnnotation: "删除注释",
		ajaxViewer_editAnnotationTitle: "编辑注释属性",
		printableView_print: "打印",
		printableView_close: "关闭",

		search_results_dropdown_button: "结果显示",
		search_results_columns_label: "搜索结果显示",
		search_results_columns_description: "选择您要在搜索结果中显示的属性。",
		search_results_sortby_label: "排序方式：",
		search_results_order_label: "排序顺序：",
		search_results_accending_label: "升序",
		search_results_descending_label: "降序",
		search_results_available_properties: "可用",
		search_results_selected_properties: "已选择",
		search_rank_property: "排名（仅限于文本搜索）",
		search_name_attribute: "名称 (${0})",
		search_results_summary_enabled_label: "启用内容摘要（仅文本搜索）",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "搜索",
		manage_teamspace_classes_tab_title: "类",
		manage_teamspace_entry_templates_tab_title: "输入模板",
		manage_teamspace_team_tab_title: "团队",
		manage_teamspace_roles_tab_title: "角色",
		manage_teamspace_dialog_title: "修改团队空间",
		manage_teamspace_button_label: "修改团队空间",
		manage_teamspace_team_pane_heading: "选择团队",
		manage_teamspace_classes_pane_heading: "选择类",
		manage_teamspace_entry_templates_pane_heading: "选择输入模板",
		manage_teamspace_no_rights_message: "您没有相应的许可权，无法修改此团队空间。",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "团队空间属性",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "用户浏览团队空间时，指定内容列表中针对文档和文件夹的属性。您还可以指定这些属性的显示顺序。",
		teamspace_props_sel_cols_use_default_label: "使用此存储库的<b>浏览</b>设置",
		teamspace_props_sel_cols_use_default_tooltip: "请在管理工具中使用此存储库的“浏览”页面上所指定的设置。",
		teamspace_props_general_tab_label: "常规",
		teamspace_props_column_props_tab_label: "显示的属性",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "选择文件以导入",
		teamspace_import_template_instruction: "您可以选择团队空间模板导出文件以进行导入。",
		teamspace_import_template_button_label: "导入",
		teamspace_import_template_dialog_label: "导入团队空间模板",

		/* Annotation Dialog */
		annotationDlg_title: "注释",
		annotationDlg_description: "所选文档具有下列注释：",
		annotationDlg_msg_noAnnotations: "不存在任何注释。请单击“添加”以创建注释。",
		annotationDlg_pageLabel: "页码：${pageNum}",
		annotationDlg_accLabel: "访问类型：${accType}",
		annotationDlg_accLabel_public: "公用",
		annotationDlg_accLabel_private: "专用",
		annotationDlg_accLabel_privateGroup: "专用 (${groupName})",
		annotationDlg_copiable: "可以复制到另一个服务器",
		annotationDlg_cannotCopy: "不能复制到另一个服务器",
		annotationDlg_addButtonLabel: "添加",

		/* Share Dialog */
		is_shared: "已共享",
		is_share_pending: "共享暂挂",
		share_title: "Box 共享",
		share_instructions_new: "发送其中包括共享文件的链接的电子邮件。拥有此链接的任何人都可以访问该文件。",
		share_instructions_existing: "发送其中包括共享文件的链接的电子邮件。拥有此链接的任何人都可以访问该文件。其他人员可能也具有该链接，因为某些人员已经共享此文件。",
		share_instructions_another_version_shared: "发送其中包括共享文件的链接的电子邮件。拥有此链接的任何人都可以访问该文件。其他人员可能也具有该链接，因为某些人员已经共享此文件的另一个版本。",
		share_buttonLabel_share: "共享",
		share_email_addresses: "发送至：",
		share_email_addresses_hover: "当完成共享时，就会将链接发送至这些电子邮件地址。如果您未输入任何内容，那么会将链接发送至您自己的电子邮件地址。",
		share_email_addresses_reshare_hover: "当完成共享时，就会将链接发送至这些电子邮件地址。如果您未输入任何内容，那么不会发送电子邮件。",
		share_password: "设置密码：",
		share_password_placeholder: "可选",
		share_comments: "消息：",
		share_comments_default: "我想与您在 Box 上共享我的文件。",
		share_myEmail: "发送自：",
		share_expiration: "设置链接到期时间：",
		share_expire: "访问权到期：",
		share_expire_none: "永不到期",
		share_allowDownload: "允许下载",
		share_add: "添加",
		share_advanced_instructions: "下载、到期和密码设置适用于 Box 中的共享文件。",
		share_advanced_existing_instructions: "下载、到期和密码设置适用于 Box 中的共享文件。",
		share_options_edit_warning: "要点：对这些设置所作的任何更改会影响任何具有该链接的人员（包括已经具有该链接的人员）。",
		share_link: "链接：",
		share_email_addresses_placeholder: "电子邮件地址",
		share_email_address_placeholder: "电子邮件地址",
		share_email_address_invalid: "请输入有效的电子邮件地址。",
		share_cannot_share_with_self: "您无法与自己共享文件。请指定另一用户。",
		share_selected_version_with_minor_warning_hover: "已共享文档 V${0}。您选择了 V${1}。<br><br><b>警告</b>：如果您共享 V${1}，那么任何人都无法共享 V${2}，除非删除对 V${1} 的共享。",
		share_selected_version_hover: "已共享文档 V${0}。您选择了 V${1}。",
		share_selected_version_message: "要点：已共享文档 V${0}。您选择了 V${1}。",
		share_different_version_message: "要点：您选择了 V${1}，但是已共享文档 V${0}。无法共享 V${1}，除非先删除该共享，但是您可以共享指向 V${0} 的链接。",
		share_version_message: "要点：已共享文档 V${0}。选择您想要共享的版本。",
		share_version_new: "共享 V${0}",
		share_version_new_p8_hover: "共享此文档将创建仅指向所选版本的特定版本链接。<br><br>当已共享某个文档时：<ul><li>可以共享较新版本和重定向至较新版本的链接。</li><li>无法共享较旧版本，除非先删除该共享。</li></ul>",
		share_version_new_cm_hover: "共享此文档将创建仅指向所选版本的特定版本链接。<br><br>当已共享某个文档时：<ul><li>可以共享较新版本和重定向至较新版本的链接。</li><li>无法共享较旧版本。</li></ul>",
		share_version_update: "共享 V${0}（更新共享选项）。",
		share_version_update_p8_hover: "共享此文档将维持仅指向特定版本的链接。<br><br>当已共享某个文档时：<ul><li>可以共享较新版本和重定向至较新版本的链接。</li><li>无法共享较旧版本，除非先删除该共享。</li></ul>",
		share_version_update_cm_hover: "共享此文档将维持仅指向特定版本的链接。<br><br>当已共享某个文档时：<ul><li>可以共享较新版本和重定向至较新版本的链接。</li><li>无法共享较旧版本。</li></ul>",
		share_version_change_to_current: "共享 V${0}（使用所选版本更新共享）。",
		share_version_change_to_current_p8_hover: "共享此文档将更新仅指向所选版本的链接。<br><br>当已共享某个文档时：<ul><li>可以共享较新版本和重定向至较新版本的链接。</li><li>无法共享较旧版本，除非先删除该共享。</li></ul>",
		share_version_change_to_current_cm_hover: "共享此文档将更新仅指向所选版本的链接。<br><br>当已共享某个文档时：<ul><li>可以共享较新版本和重定向至较新版本的链接。</li><li>无法共享较旧版本。</li></ul>",
		share_repository: "共享文件的存储库",
		share_repository_hover: "如果您未看到想要使用的 Box 存储库，那么可以在“存储库”页面上添加新的 Box 存储库。",
		share_options: "共享选项",
		unshare_confirm: "如果您删除该共享，那么所有共享链接（包括先前由其他用户发送的共享链接）都会断开。任何想要共享该文档的其他用户必须选择原始文档并再次共享该文档。<br><br>确定要删除该共享吗？",
		unshare_button: "删除 Box 共享",
		admin_share: "Box 共享服务：",
		admin_share_hover: "允许用户共享任何启用了 Box 共享的存储库中的文档。共享文档包括将该文件复制到 Box、创建链接以及通过电子邮件发送该链接。",
		admin_my_email_modifiable: "允许用户修改“发件人”电子邮件地址",
		admin_my_email_modifiable_hover: "缺省情况下，对于 Box 共享，用户的电子邮件地址为只读，可从用于表示 Box 用户帐户的用户和电子邮件地址的映射获得。<br><br>选择此选项以允许用户在共享时编辑其电子邮件地址；但是，不会验证电子邮件地址的有效性。",
		admin_repos_admin_user: "共享管理员：",
		admin_repos_admin_user_hover: "如果您具有已启用 Box 共享服务的桌面，并且已选择此 Box 存储库作为共享文件的存储库，那么可以设置共享管理员。<br><br>单击“设置”，并使用有效的 Box 管理员帐户登录 Box。<br><br>共享管理员必须是一个已配置为在 Box 中具有无限制存储器的 Box 管理员用户。",
		admin_repos_admin_user_not_set_warning: "没有为所选择的存储库配置 Box 管理员。<br><br>为所选择的存储库设置 Box 管理员或者选择另一个配置了 Box 管理员的 Box 存储库之前，Box 共享服务处于禁用状态。<br><br>可以在存储库的“常规”页面上的“Box 共享服务”部分设置 Box 管理员。",
		admin_share_not_configured_warning: "必须先通过服务器认证来添加并选择 Box 存储库，然后才能使用 Box 共享服务。",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online 配置",
		admin_office_online_server_enable: "Office Online Server：",
		admin_office_online_server_enable_hover: "指定您是否希望访问此桌面的用户能够使用 Office Online Server 编辑其 Office 文档。",		
		admin_office_online_allow_collaborative_editing: "允许进行协作编辑",
		admin_office_online_allow_collaborative_editing_hover: "允许多个用户处理同一文档。如果要将文档限制为只允许一个用户进行编辑，请取消选中此选项。",
		admin_office_online_repository_not_set_warning: "必须先对存储库启用 Office Online 服务并指定 Microsoft Office Online Server URL，然后才能使用该服务。请单击<b>存储库</b>，选择一个存储库，然后在<b>编辑集成</b>选项卡上启用该服务。单击<b>设置 > 常规</b>，然后输入 Microsoft Office Online Server URL。",
		admin_settings_office_online_server_enable_hover: "指定是否要使用 Office Online Server 来处理 Office 文档。",
		admin_office_online_server_url: "Microsoft Office Online Server URL",
		admin_office_online_server_url_hover: "指定其他应用程序可以用来与 Office Online Server 进行通信的 URL。该 URL 的格式为 http://server_name:port_number/hosting/discovery。",
		admin_office_online_server_Verified: "已验证",
	    admin_office_online_server_Failed: "<b>已失败</b>",

		admin_repcfg_office_online_service_p8_hover: "要初始化存储库以使用 Office Online Server，可以为每个 Office 应用程序添加初始模板文件。如果未指定模板，那么将使用缺省模板。",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server 集成",
		admin_repcfg_office_online_service_url_not_set_warning: "必须先指定 Microsoft Office Online Server URL，然后才能启用 Office Online Server。单击“设置 > 常规”，然后输入 URL。",
		admin_repcfg_office_online_word_template_name: "缺省 Word 模板",
		admin_repcfg_office_online_excel_template_name: "缺省 Excel 模板",
		admin_repcfg_office_online_powerpoint_template_name: "缺省 PowerPoint 模板",
		admin_repcfg_office_online_blank_template_description: "这是在您未添加自己的模板时使用的缺省模板。",
		/* Edit Service settings */
		admin_icn_edit_title: "编辑配置",	
	    admin_icn_edit_files_cleanup_interval: "临时文件清除时间间隔（以天计）：",
	    admin_icn_edit_files_cleanup_interval_hover: "可设置临时文件保留在 ICN Edit 客户机中的时长。缺省时长为 20 天。最大时长为 20 天。最小时长为 1 天。",
	    admin_icn_edit_service_integration: "Edit Service Integration",
	    admin_icn_edit_service_integration_intro: "Edit Service 使用户能够在其计算机上安装的本地应用程序中轻松添加或编辑文件。<br><br><b>要点：</b>如果启用 Edit Service，那么在编辑预定义类别之前，必须保存您的存储库配置。",
		admin_icn_edit_service: "Edit Service：",
		admin_icn_edit_enable_hover: "要使用 Edit Service，必须执行以下操作：<ul><li>在存储库上启用该服务</li><li>在您的环境中的桌面上启用该服务</li><li>在用户工作站上安装 IBM Content Navigator Edit 客户机</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "启用",
		admin_icn_edit_disable: "禁用",
		admin_icn_edit_create_new_category: "新建类别",
		admin_icn_edit_delete_category: "删除类别",
		admin_icn_edit_edit_category: "编辑类别",
		admin_icn_edit_disable_category: "禁用类别",
		admin_icn_edit_enable_category: "启用类别",
		admin_icn_edit_new_category_dialog_title: "新建类别",
		admin_icn_edit_edit_category_dialog_title:"编辑类别",
		admin_icn_edit_new_category_dialog_instructions: "文档类别允许您将模板与 Edit Service 的特定 MIME 类型相关联。例如，可将一组模板与 PDF 文件相关联，以便用户可在通过 IBM Content Navigator Edit 客户机添加或编辑文件时应用模板。<br><br><b>要点：</b>将模板添加至您创建的类别前，必须保存您的存储库配置。",
		admin_icn_edit_edit_category_dialog_instructions: "将模板添加至此类别前，必须保存您的存储库配置。",
		admin_icn_edit_delete_category_dialog_instructions: "要删除此类别及与此类别相关联的所有模板吗？<br><br><b>要点：</b>将更改保存至存储库之前，更改并非永久更改。",
		admin_icn_edit_category_label: "类别：",
		admin_icn_edit_category_discription_label:"描述：",
		admin_icn_edit_template_column_head:"模板名称",
		admin_icn_edit_category_duplicate_error_message: "具有此标识的类别已存在。",
		admin_icn_edit_word_category_description: "此类别在 Edit Service 中为 Microsoft Word 文档定义可用模板。",
		admin_icn_edit_excel_category_description: "此类别在 Edit Service 中为 Microsoft Excel 文档定义可用模板。",
		admin_icn_edit_powerpoint_category_description: "此类别在 Edit Service 中为 Microsoft PowerPoint 文档定义可用模板。",

		icn_edit_add_template_dialog_title:"添加 ${0} 模板",
		icn_edit_add_template_only_one_file_error: "只能选择一个文件。",
		icn_edit_add_template_file_type_error: "必须指定有效 ${0} 模板文件。<br><br>所选文档的 MIME 类型为 ${1}。<br><br>有效 MIME 类型：${2}。",
		icn_edit_change_template_dialog_title: "编辑 ${0} 模板",
		icn_edit_action_in_new_menu_name:"${0} 文档",
		icn_edit_action_in_new_menu_submenu_oo_name: "使用 Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "使用桌面应用程序",
		icn_edit_new_document_dialog_title: "新建 ${0} 文档",
		icn_edit_new_document_dialog_intro: "创建新的 ${0} 文档，并将其添加至存储库。系统将使用所选的 Edit Service 模板创建该文档。", 
		icn_edit_select_edit_service_template: "选择模板",
		icn_edit_edit_service_template: "Edit Service 模板：",
		icn_edit_new_document_category_no_templates_message:"此类别中没有模板。请联系管理员以在此类别中添加模板。",
		icn_edit_installer: "IBM Content Navigator Edit 安装程序",
		admin_icn_cm_classes_and_roles_settings: "类和角色设置",
		admin_repcfg_classes_and_roles_warning: "指定类，及有权创建、编辑和使用模板或者创建使用 Office Online Service 和 Edit Service 的文档草稿的用户或用户组。",
		admin_repcfg_classes_and_roles_click_warning: "单击此处。",
		/* Edit Service settings END */
		share_no_my_email_error: "在确定共享文档时所需要的电子邮件地址时发生问题。",
		share_no_my_email_error_explanation: "您已使用用户标识 ${0} 进行登录，但是该用户标识未映射至电子邮件地址。",
		share_no_my_email_error_userResponse: "尝试再次登录，或者使用另外的用户标识进行登录。如果问题仍然存在，请将此错误报告给系统管理员。",
		share_no_my_email_error_adminResponse: "用户标识 ${0} 未映射至电子邮件地址，并且桌面 ${1} 不允许用户编辑 Box 共享服务的电子邮件地址。<br><br>请尝试下列其中一种解决方案：<br>请确保已注册“电子邮件映射”插件。<br>请确保 emailMappingPlugin.json 文件中包括用户标识 ${0} 和用户电子邮件地址，然后构建、配置和注册“电子邮件映射”插件。<br>如果您不想使用“电子邮件映射”插件或者 FileNet P8 电子邮件地址目录，但是想要允许用户在共享文档时输入他们自己的电子邮件地址，那么您可以修改 Box 共享服务的桌面设置，以允许用户发送来自另一个电子邮件地址的链接。",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "已共享此文档的较新版本，因此无法共享此文档的所选版本。",
		share_later_version_shared_error_explanation: "您无法共享该文档之前所共享的较旧版本。",
		share_later_version_shared_error_userResponse: "要将链接发送至该文档的较新版本，必须先选择较新版本，然后使用“共享”操作。<br><br>要共享该文档的所选版本，必须先删除该文档的较新版本的共享。",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "新的消息",
		email_from: "发件人：",
		email_to: "收件人：",
		email_cc_link: "抄送",
		email_bcc_link: "密件抄送",
		email_cc: "抄送：",
		email_bcc: "密件抄送：",
		email_address_invalid: "请输入有效的电子邮件地址。",
		email_subject: "主题：",
		email_message: "消息：",
		email_message_placeholder: "添加消息",
		email_attachments: "附件：",
		email_links: "链接：",
		email_send: "发送",
		email_dont_send: "请勿发送",
		email_subject_reminder: "主题提示",
		email_subject_reminder_confirm: "要在没有主题的情况下发送此消息？",
		email_missing_from_error: "在确定发送电子邮件时所需的“发件人”电子邮件地址时发生问题。",
		email_missing_from_error_explanation: "您已使用用户标识 ${0} 进行登录，但是该用户标识未映射至电子邮件地址。",
		email_missing_from_error_userResponse: "尝试再次登录，或者使用另外的用户标识进行登录。如果问题仍然存在，请将此错误报告给系统管理员。",
		email_missing_from_error_adminResponse: "用户标识 ${0} 未映射至电子邮件地址，并且桌面 ${1} 不允许用户编辑“发件人”电子邮件地址。<br><br>请尝试下列其中一种解决方案：<br>请确保已注册“电子邮件映射”插件。<br>请确保 emailMappingPlugin.json 文件中包括用户标识 ${0} 和用户电子邮件地址，然后构建、配置和注册“电子邮件映射”插件。<br>如果您不想使用“电子邮件映射”插件或者 FileNet P8 电子邮件地址目录，但是想要允许用户在发送电子邮件时输入他们自己的电子邮件地址，那么您可以修改电子邮件的桌面设置，以允许用户修改“发件人”电子邮件地址。",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "无法打开该文档。",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator 无法连接至 IBM Content Navigator Edit 客户机。",
		open_edit_document_with_native_application_error_userResponse: "在工作站上安装并启动 IBM Content Navigator Edit 客户机。然后重试打开该文档。",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "无法打开该文档。",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator 无法连接至 IBM Content Navigator Edit 客户机。",
		connect_to_the_streamline_service_error_userResponse: "在工作站上安装并启动 IBM Content Navigator Edit 客户机。然后重试打开该文档。",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "未正确配置 IBM Content Navigator，无法共享文档。",
		share_not_configured_error_explanation: "必须先正确配置 Box 共享功能，然后才能共享文档。",
		share_not_configured_error_userResponse: "请与管理员联系，并请求他们配置 Box 共享功能。",
		share_not_configured_error_adminResponse: "在共享文档之前，必须配置下列各项：<ul><li>必须管理工具设置中启用任务管理器服务。</li><li>必须在存储库中配置任务管理器连接标识。</li><li>必须在存储库中启用共享。</li><li>必须选择 Box 存储库，才能在桌面中进行共享。</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "未保存针对新版本的属性更改",
		checkin_cors_save_attributes_error_explanation: "已创建该版本，但未保存属性更改。该文档可能仍被检出。",
		checkin_cors_save_attributes_error_userResponse: "对该文档解锁，然后使用“属性”上下文菜单项来更新属性。",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "未保存针对新文档的属性更改",
		add_cors_save_attributes_error_explanation: "已创建该文档，但未保存属性更改。",
		add_cors_save_attributes_error_userResponse: "使用“属性”上下文菜单项来更新属性。",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "无法打开该文档。",		
		edit_document_using_edit_service_error_explanation: "该文档无法在 Edit Service 中打开。",
		edit_document_using_edit_service_error_userResponse: "请求管理员更新 Edit Service Integration。<br><br> 如果用户需要通过 Edit Service 访问此文档，请转至存储库的“编辑集成”页面，更新 Edit Service Integration 以在要修改以获取 Edit Service 支持的类列表中添加该类。",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "无法打开该文档。",		
		edit_document_is_editing_by_oos_error_explanation: "Office Online Service 正在使用该文档。",
		edit_document_is_editing_by_oos_error_userResponse: "您必须在 Office Online Service 中保存并关闭该文档，然后才能在 Edit Service 中打开该文档。",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "启用跨源资源共享 (CORS) 上载",

		/* Email Settings */
		admin_email_settings: "电子邮件设置：",
		admin_email_settings_hover: "指定希望用户使用的电子邮件服务的类型。启用基于 HTML 的电子邮件服务时，可选择允许用户修改其“发件人”电子邮件地址。如果希望启用基于 Java 的电子邮件服务，那么必须具有支持 Java 的浏览器。",
		admin_email_use_service: "使用基于 HTML 的电子邮件服务",
		admin_email_use_applet: "使用基于 Java 的电子邮件服务",
		admin_email_can_modify_from: "允许用户修改“发件人”电子邮件地址",
		admin_email_can_modify_from_hover: "缺省情况下，无法修改“发件人”电子邮件地址，但是可从表示用户帐户的用户和电子邮件地址的映射获得此地址。<br><br>选择此选项以允许用户在发送电子邮件时编辑其电子邮件地址；但是，不会验证电子邮件地址的有效性。",
		admin_email_use_from_as_sender: "将“发件人”电子邮件地址用作电子邮件的发件人",
		admin_email_use_from_as_sender_hover: "缺省情况下，会在用户的电子邮件中使用有效“发件人”电子邮件地址。此电子邮件地址由应用程序服务器上的 CNMailSession 邮件会话定义。选择此选项以指定在电子邮件中使用的用户电子邮件地址。",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "新注释",
		addAnnotationDlg_labelContents: "内容：",
		addAnnotationDlg_labelAccess: "访问：",
		addAnnotationDlg_labelPublic: "公用",
		addAnnotationDlg_labelPrivate: "专用",
		addAnnotationDlg_labelPrivateGroup: "组专用",
		addAnnotationDlg_labelGroup: "组",
		addAnnotationDlg_labelCopiable: "可将此注释复制到另一个服务器。",
		addAnnotationDlg_buttonLabel_save: "保存",

		/* Skip navigation */
		skipNavigation_title_main: "跳至主内容",
		skipNavigation_title_menu: "跳至导航按钮",
		skipNavigation_label_main: "跳至主内容",
		skipNavigation_label_menu: "跳至导航按钮",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "管理团队空间",
		manage_teamspace_pane_instance_hdr: "团队空间",
		manage_teamspace_pane_template_hdr: "模板",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "向前滚动",
		scroll_back: "向后滚动",

		breadcrumb_separator_open: "打开节点",
		breadcrumb_separator_close: "关闭节点",

		/* DropDownLink */
		drop_down_link_summary: "${0}，${1}",

		/* Properties display pane */
		no_item_selected: "未选择任何项。",

		/* eds */
		eds_url: "外部数据服务 URL：",
		eds_request_timeout: "服务请求超时（以秒计）：",
		eds_is_required: "防止用户在 EDS 不可用时采取会变更属性值的操作",

		/* eforms */
		eform_signing_pane_welcome: "签署表单",
		eform_signing_button_label: "签署",
		eform_signing_pane_delete: "删除签署",
		eform_signing_button_label_delete: "删除",

		xtplugin_server_label: "IBM FileNet Workplace XT 服务器 URL",
		xtplugin_server_hover: "输入部署 IBM FileNet Workplace XT 的服务器的 URL，例如，http://localhost:8080/WorkplaceXT。",

		ecplugin_server_label: "IBM eClient 服务器 URL",
		ecplugin_server_hover: "输入部署 IBM eClient 的服务器的 URL，例如，http://localhost:9080/eClient/s。",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "在大量项上操作可能需要较长时间。要继续吗？",
		large_number_actions_continue_button: "继续",

		large_items_actions_confirmation_question: "对大型项执行操作可能需要较长的时间。要继续吗？",

		viewer_editproperties_title: "确认",
		viewer_editproperties_title_warning: "警告",
		viewer_editproperties_save: "保存",
		viewer_editproperties_next: "下一步",
		viewer_editproperties_reset: "重置",
		viewer_editproperties_reset_hover: "任何未保存的数据都将重置为先前保存的值",
		viewer_editproperties_saveandgetnext: "保存后接着获取下一个",
		viewer_editproperties_saveandgetnext_hover: "在保存更改后接着自动获取下一个文档",
		viewer_editproperties_prompt_save_changes: "您更改了以下文档的属性<br>${0}<br><br>要保存更改吗？",
		viewer_editproperties_prompt_discard_changes: "您更改了以下文档的属性<br>${0}<br><br>但是，一个或多个属性具有无效值，所以无法保存更改。可更正无效值，或废弃更改。<br>要更正“属性”窗格上显示的无效值吗？",
		viewer_comments_prompt_discard_changes: "您已修改注释。要保存更改吗？",
		viewer_notelogs_prompt_discard_changes: "您已修改注释日志。要保存更改吗？",
		social_collaborated_version: "版本：${0}",
		social_link_label: "人员...",

		// social comments
		comments: "注释",
		comments_add_hint: "请按 Enter 键以添加注释。",
		comments_hint: "输入您的注释。",
		comments_label: "请按 Enter 键或 Tab 键以保存注释。按 Esc 键以取消。",
		comments_delete_confirmation: "您要删除所选注释吗？",
		comments_number: "注释：${0}",
		comments_save_new: "您已修改注释。您要关闭窗口而不保存更改吗？",

		notelogs: "注释日志",
		notelogs_download: "下载",
		notelog_modify: "保存更改",
		notelog_edit: "编辑注释日志",
		notelog_create_newVersion: "创建新的注释日志版本",
		notelog_add_hint: "请输入您的注释，然后按 Enter 键进行添加。",
		notelog_hint: "按 Shift+Enter 键以换行",
		notelog_add_placeholder: "请按 Enter 键以将注释添加到注释日志。",
		notelog_save_new: "您已修改注释日志。您要关闭窗口而不保存更改吗？",

		// P8 markings related
		cannot_remove_markings: "您无权移除标记值：{0}",

		// download count
		downloadcount: "下载次数：{0}",
		downloadcount_single: "1 次下载项",
		downloadcount_multiple: "{0} 次下载",
		downloadcount_none: "尚无用户下载此项",

		// recommendations
		recommendations: "推荐：{0}",
		recommendations_recommend: "推荐此内容",
		recommendations_unrecommend: "不推荐此内容",
		recommendations_you: "您推荐此内容",
		recommendations_you_and_another: "您和其他 1 个用户推荐此内容",
		recommendations_you_and_others: "您和其他 {0} 个用户推荐此内容",
		recommendations_another: "共有 1 个人推荐此内容",
		recommendations_others: "{0} 个用户推荐此内容",
		recommendations_none: "尚无用户推荐此内容",

		// tags
		tags: "标记：${0}",
		tags_delete: "删除 ${0}",
		tags_none: "没有要显示的标记。",
		tags_add: "添加标记：",
		tags_hint: "请按 Enter 键以添加标记。",
		tags_hover_help: "指定标记或标记列表，可以用来搜索具有同一标记的文档。可以使用逗号 (,)、分号 (;) 或者空格来分隔标记。",
		tags_hover_help_box: "指定标记或者以逗号分隔的标记列表，可以用来搜索具有同一标记的文档。",
		tags_no_access: "您没有相应的许可权，无法添加标记。",

		//task scheduler pane
		taskPane_tooltip: "打开“异步任务”视图",
		taskPane_tree: "任务窗格导航树",
		taskPane_allTasks: "所有任务",
		taskPane_scheduledTasks: "安排的任务",
		taskPane_recurringTasks: "重现的任务",
		taskPane_inProgressTasks: "正在进行的任务",
		taskPane_completedTasks: "已完成任务",
		taskPane_failedTasks: "失败的任务",
		taskPane_disabledTasks: "已禁用的任务",
		taskPane_statusScheduled: "已安排",
		taskPane_statusInProgress: "正在进行",
		taskPane_statusCompleted: "完成时间",
		taskPane_statusFailed: "已失败",
		taskPane_statusPaused: "已暂停",
		taskPane_noItemSelected: "未选择任何项",
		taskSchedulerPane_scheduleInformation: "进度表信息",
		taskSchedulerPane_loginInformation: "登录信息",
		taskSchedulerPane_startImmediately: "立即启动",
		taskSchedulerPane_recurrence: "重复",
		taskSchedulerPane_interval: "间隔",
		taskSchedulerPane_scheduleReport: "计划报告",
		taskSchedulerPane_nameHoverHelp: "输入任务的名称。",
		taskSchedulerPane_descriptionHoverHelp: "输入对任务的描述。描述可帮助您区分任务。",
		taskSchedulerPane_startTimeHoverHelp: "指定希望任务运行的时间。要立即运行任务，请选择“立即启动”。",
		taskSchedulerPane_recurrenceHoverHelp: "您可以调度任务重复运行。",
		taskSchedulerPane_endTimeHoverHelp: "指定希望任务停止运行的时间。该任务从计划开始时间开始运行到计划结束时间。",
		taskSchedulerPane_usernameHoverHelp: "对于重复任务，必须输入用户名以使服务能够在任务运行时执行认证。",
		taskSchedulerPane_passwordHoverHelp: "对于重复任务，必须输入指定用户的密码以使服务能够在任务运行时执行认证。",
		taskSchedulerPane_notification: "通知",
		taskSchedulerPane_emailAddress: "电子邮件地址",
		taskSchedulerPane_emailAddressHoverHelp: "输入您想要接收有关任务状态通知的电子邮件地址。",
		taskSchedulerPane_intervalHoverHelp: "指定重复任务将运行的时间长度。您可以以小时计、以天计、以周计或以月计来设置时间间隔。",
		taskSchedulerPane_scheduledStartTime: "计划开始时间",
		taskSchedulerPane_startTime: "开始时间",
		taskSchedulerPane_title: "计划",
		taskSchedulerPane_runNow: "立即运行",
		taskSchedulerPane_runOnce: "运行一次",
		taskSchedulerPane_runAtSchedule: "按进度表运行",
		taskSchedulerPane_repeats: "重复次数",
		taskSchedulerPane_repeatsEvery: "重复间隔",
		taskSchedulerPane_hourly: "每小时",
		taskSchedulerPane_daily: "每天",
		taskSchedulerPane_weekly: "每星期",
		taskSchedulerPane_monthly: "每个月",
		taskSchedulerPane_yearly: "每年",
		taskSchedulerPane_sunday: "星期日",
		taskSchedulerPane_monday: "星期一",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "星期三",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "星期日",
		taskSchedulerPane_starting: "起始日期",
		taskSchedulerPane_after: "晚于",
		taskSchedulerPane_ending: "结束日期",
		taskSchedulerPane_times: "次数",
		taskSchedulerPane_days: "天数",
		taskSchedulerPane_hours: "一天中的小时数",
		taskSchedulerPane_interval: "间隔",
		taskSchedulerPane_endingDays: "正在结束（以天计）",
		taskSchedulerPane_never: "从不",
		taskSchedulerPane_categorization: "分类",
		taskSchedulerPane_scheduleTask: "计划任务",
		taskInformationPane_details: "详细信息",
		taskInformationPane_errors: "错误数",
		taskInformationPane_taskInstances: "任务实例",
		taskInformationPane_audits: "审计",
		taskInformationPane_results: "结果",
		asyncTasks: "异步任务",

		//entry template pane
		search_all_entry_templates: "搜索所有输入模板。",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "查看完整站点",
		mobilesite: "查看移动站点",
		profile: "管理概要文件",
		office_template: "Office 模板：",
		select_office_template: "选择 office 模板",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "在查看器中，无法使用“合并与拆分”操作来打开所选文档。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "针对 PDF 和 TIFF 文档配置的查看器不支持“合并与拆分”操作。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "请求管理员为 PDF 和 TIFF 文档配置支持“合并与拆分”操作的查看器，例如，Daeja ViewONE 虚拟查看器。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "在查看器中，无法使用“合并与拆分”操作来打开所选 PDF 文档。",
		document_builder_pdf_unsupported_viewer_error_explanation: "针对 PDF 文档配置的查看器不支持“合并与拆分”操作。",
		document_builder_pdf_unsupported_viewer_error_userResponse: "请求管理员为 PDF 文档配置支持“合并与拆分”操作的查看器，例如，Daeja ViewONE 虚拟查看器。",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "在查看器中，无法使用“合并与拆分”操作来打开所选 TIFF 文档。",
		document_builder_tiff_unsupported_viewer_error_explanation: "针对 TIFF 文档配置的查看器不支持“合并与拆分”操作。",
		document_builder_tiff_unsupported_viewer_error_userResponse: "请求管理员为 TIFF 文档配置支持“合并与拆分”操作的查看器，例如，Daeja ViewONE 虚拟查看器。",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "在查看器中，无法使用“合并与拆分”操作来打开所选文档。",
		document_builder_unsupported_documents_error_explanation: "“合并与拆分”操作仅对 PDF 和 TIFF 文档生效。",
		document_builder_unsupported_documents_error_userResponse: "请选择受支持文档并重试。",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "在查看器中，无法使用“合并与拆分”操作来打开某些所选文档。",
		document_builder_some_unsupported_documents_error_explanation: "“合并与拆分”操作仅对从同一存储库打开的 PDF 和 TIFF 文档生效。",
		document_builder_some_unsupported_documents_error_userResponse: "受支持文档将在查看器中打开。",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "检入已修改内容时发生了错误。",
		document_builder_checkin_failed_explanation: "检入已修改的内容时，查看器接收到错误响应。",
		document_builder_checkin_failed_userResponse: "请求系统管理员查看 Web 应用程序服务器日志文件。",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "无法打开该文档。",
		no_viewer_to_view_error_explanation: "系统管理员已为此文档锁定视图。如果您需要访问此文档，那么可以进行下载。",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "无法构建该内容。",
		document_build_failed_userResponse: "请求系统管理员查看这些查看器日志文件。",
		document_build_failed_number: 3007,

		document_builder_open_failed: "无法以“合并与拆分”方式打开该文档。",
		document_builder_open_failed_userResponse: "请求系统管理员查看这些查看器日志文件。",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "系统无法切换为“合并与拆分”方式。",
		document_builder_switch_failed_userResponse: "请求系统管理员查看这些查看器日志文件。",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "文档",
		print_service_page_setup_tab_title: "页面设置",
		print_service_OD_print_tab_title: "打印机选项",
		print_service_status_merging: "正在合并文档...",
		print_service_status_converting: "正在转换文档...",
		print_service_status_formatting: "正在格式化文档以打印...",
		admin_print_service_maximum_number_to_print: "允许打印的最大文档数：",
		admin_print_service_maximum_size_to_print: "允许打印的最大数据量 (MB)：",
		admin_print_service_maximum_number_to_print_hover_help: "指定用户一次可以打印的最大文档数。缺省最大数目为 50。如果您不希望限制打印的文档数，那么将此限制设置为 0。",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>限制：</b>此设置在 IBM Content Manager OnDemand 上不受支持。<br/><br/>指定可以使用 IBM Daeja ViewONE 打印服务打印的最大数据量。<br /><br />所选择的每个文档的总大小不得超过此数量。<br/><br/>缺省限制为 200 MB。将限制设置为超过 200 MB 可能会影响系统性能。如果您不希望限制打印的文档大小，那么将此限制设置为 0。",
		// error printing
		print_service_error_printing: "打印期间发生错误。",
		print_service_error_printing_userResponse: "请求系统管理员查看打印服务日志文件。",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "所选择的文档太大，无法打印",
		print_service_max_content_error_explanation: "所选择的文档超过了数据量限制（即，${0} MB）。",
		print_service_max_content_error_userResponse: "请选择更少文档或者选择较小的文档，然后再次打印。您还可以与系统管理员联系，以从此桌面增大一次可以打印的项的最大总大小。",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "无法打印这些项。",
		print_service_max_number_selected_error_explanation: "一次最多可以打印 ${0} 项。而您试图打印 ${1} 项。",
		print_service_max_number_selected_error_userResponse: "请选择较少的项，然后再次尝试打印这些项。您还可以与系统管理员联系，以从此桌面增大一次可以打印的项的最大项数。",
		print_service_max_number_selected_error_0: "最大项数",
		print_service_max_number_selected_error_1: "项数",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


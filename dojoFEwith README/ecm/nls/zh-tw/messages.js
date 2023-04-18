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
		welcome_user: "歡迎！",
		about: "關於",
		all: "全部",
		help: "說明",
		user_session: "使用者階段作業",
		user_session_for: "${0} 的使用者階段作業",
		user_session_for_with_container: "${0} 的使用者階段作業 (${1})",
		tools: "工具",
		login: "登入",
		logout: "登出",
		search: "搜尋",
		saved_searches: "已儲存的搜尋",
		content_analytics: "分析內容",
		reset: "重設",
		reset_hover: "所有標籤中任何未儲存的資料將重設為先前儲存的值。",
		reset_default: "全部清除",
		reset_default_hover: "清除所有標籤上的「現行標籤」欄位。",
		locale: "語言環境：",
		up: "上移",
		down: "下移",
		restore: "還原",
		maximize: "最大化",
		values_label: "值",
		value_label: "值：",
		path_label: "路徑：",
		new_label: "新建：",
		back_label: "返回",
		clear: "清除",
		set: "設定...",
		browse: "瀏覽",
		work: "工作",
		connect: "連接",
		documents: "文件：",
		copyright: "© Copyright 2012, 2016 IBM Corp. IBM 及 IBM 標誌是 IBM Corporation 在全球諸多管轄區內註冊的商標。Java 和所有以 Java 為基礎的商標是 Oracle 及/或其子公司的商標。這裡含括的 Oracle Outside In Technology 受使用授權限制，而且只能與本應用程式一起使用。本「程式」係依據本「程式」隨附之授權合約的條款而授權。本授權合約可置於本程式中識別為「軟體使用權」或「非 IBM 軟體使用權」的一個目錄資料夾或檔案庫內（如果適用的話），或提供成印出的授權合約。在使用本「程式」之前，請先詳閱這份合約。貴客戶對本「程式」之使用即表示接受這些條款。",
		edit: "編輯",
		cancel: "取消",
		close: "關閉",
		close_all: "關閉所有標籤",
		close_others: "關閉其他標籤",
		ok: "確定",
		yes: "是",
		no: "否",
		open: "開啟",
		refresh: "重新整理",
		refresh_cabinets: "重新整理全部檔案櫃",
		delete_text: "刪除",
		export_config: "匯出配置",
		description: "說明",
		true_label: "True",
		false_label: "False",
		error: "錯誤",
		error_reference_hover: "如需此錯誤的相關資訊，請搜尋 www.ibm.com。",
		url_label: "URL",
		default_label: "預設",
		ibm_label: "IBM",
		light_label: "明亮",
		dark_label: "暗",
		save: "儲存",
		saveAs: "另存新檔...",
		save_and_close: "儲存並關閉",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "無",
		Name: "名稱",
		"${NAME}": "名稱",
		mime_type: "MIME 類型",
		mime_type_contains_label: "MIME 類型包含",
		mime_type_header: "MIME 類型",
		mime_type_icon: "MIME 類型圖示",
		casesearch: "案例",
		item: "項目",
		no_mime_type: "此項目不包含任何內容。",
		items_selected: "已選取 ${0} 個項目。",
		requestor: "要求者",
		scheduledStartTime: "排定的開始時間",
		isRecurring: "是循環作業",
		weeks: "週",
		days: "天",
		hours: "小時數",
		endTime: "結束時間",
		username: "使用者名稱",
		password: "密碼",
		serverURL: "伺服器 URL",
		enable: "啟用",
		disable: "停用",
		finish: "完成",
		previous: "上一步",
		next: "下一步",
		schedule: "排程",
		removeFromThisList: "從此清單中移除",
		status: "狀態",
		scheduledEndTime: "排定結束時間",
		type: "類型",
		mode: "模式",
		startTime: "開始時間",
		createdBy: "建立者",
		nextScheduledTime: "下次排定時間",
		id: "ID",
		duration: "持續時間",
		repeatCycle: "頻率",
		taskTypeName: "作業類型",
		to: "至",
		filter: "過濾：",
		error_message: "錯誤訊息",

        file_type: "文件類型",
        word_template_name: "Word 範本名稱",
        excel_template_name: "Excel 範本名稱",
        powerpoint_template_name: "PowerPoint 範本名稱",
        template_description: "範本說明",
        action_add_template: "新增",
        action_change_template: "編輯",      
        action_edit_template_properties: "內容",
        add_presentation_template: "新增簡報範本",
    	add_spreadsheet_template: "新增試算表範本",
    	add_doc_template: "新增文件範本",    	
    	file_type_doc_hover: "必須指定有效的文書處理文件範本檔。<br><br>有效的 MIME 類型：${0}",
    	file_type_doc_error: "必須指定有效的文書處理文件範本檔。<br><br>所選文件 MIME 類型：${0}<br><br>有效的 MIME 類型：${1}",
    	file_type_presentation_hover: "必須指定有效的簡報範本檔。<br><br>有效的 MIME 類型：${0}",
    	file_type_presentation_error: "必須指定有效的簡報範本檔。<br><br>所選文件 MIME 類型：${0}<br><br>有效的 MIME 類型：${1}",
    	file_type_spreadsheet_hover: "必須指定有效的試算表範本檔。<br><br>有效的 MIME 類型：${0}",
    	file_type_spreadsheet_error: "必須指定有效的試算表範本檔。<br><br>所選文件 MIME 類型：${0}<br><br>有效的 MIME 類型：${1}",
    	office_online_only_one_template_error: "只能選取一個檔案。",
    	change_presentation_template: "編輯簡報範本",
    	change_spreadsheet_template: "編輯試算表範本",
    	change_doc_template: "編輯文件範本",
    	change_button: "編輯",
	    new_document_dialog_doc_title: "新建文件",
	    new_document_dialog_presentation_title: "新建簡報",
	    new_document_dialog_spreadsheet_title: "新建試算表",
	    new_document_dialog_title_label: "標題：",
	    new_document_dialog_title_hover: "輸入此文件的標題。",
	    new_document_dialog_title_missing_message: "必須指定標題。",
	    office_online_save_before_adding_templates_title: "儲存對儲存庫的變更",
	    office_online_save_before_adding_templates_error: "無法新增 Office 範本，除非您儲存對儲存庫所做的變更。按一下<b>儲存並關閉</b>，然後重新開啟儲存庫來新增 Office 範本。",
	    copy_to_OOS_dialog_doc_title: "新建文件",
	    office_online_checkin_cancelcheckout_message: "此文件正在 Microsoft Office Online 中進行編輯。當文件在 Microsoft Office Online 中處於開啟狀態時，無法移入該文件或取消移出。",
	    new_document_classification: "分類：",
	    new_document_classification_help: "重設來源文件的類別、內容及上層資料夾（如果有的話）。使用項目範本新增文件時，將自動選取來源文件的項目範本（如果有的話）。將使用來源文件的內容作為預設值，但將保留項目範本中指定的資料夾和類別。",
		new_document_classification_use_source_document: "使用來源文件：",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} 類型圖示",
		repository_name_and_type: "${0} 名稱及類型",
		select_class_label: "選取 ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "詳細資料視圖",
		detail_view_button: "詳細資料",
		magazine_view_button_tooltip: "電子刊物視圖",
		magazine_view_button: "電子刊物",
		filmstrip_view_button_tooltip: "幻燈片視圖",
		filmstrip_view_button: "幻燈片",

		magazine_view_show: "顯示在電子刊物視圖中",
		detail_view_show: "顯示在詳細資料視圖中",

		total_count_item: "個項目",
		total_count_items: "個項目",
		total_count_more_items: "超過 ${0} 個項目",

		extension_changed: "所選取檔案的副檔名與原始副檔名不同。請選取不同的檔案。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "所選檢視器並不支援所有檔案類型。如果您儲存此檢視器對映，可能會在檢視文件時遇到問題。當選取「所有檔案類型」選項時，建議您選取一個支援所有檔案類型的檢視器。<br><br><b>提示：</b>支援所有檔案類型的檢視器如下：<ul><li>Applet 檢視器</li><li>AJAX 檢視器</li><li>HTML 轉換</li><li>PDF 轉換</li><li>Web 瀏覽器</li></ul>",
		file_type_any: "所有檔案類型",
		file_type_any_hover: "如果您想使用選取的檢視器來檢視所有文件，而不考慮檔案類型，請選取此選項。支援此選項的檢視器如下：<br><br><ul><li>Applet 檢視器</li><li>AJAX 檢視器</li><li>HTML 轉換</li><li>PDF 轉換</li><li>Web 瀏覽器</li></ul><br><br><b>請謹記：</b>如果您希望在大部分的時間都使用特定的檢視器，應將您所建立並使用此選項的任何對映，移至檢視器對映的尾端。",
		file_type_input: "新的檔案類型：",

		mime_type_input: "新的 MIME 類型：",
		mime_type_input_invalid: "新的 MIME 類型不能包含下列任何字元：",
		mime_type_available: "可用的 MIME 類型",
		mime_type_selected: "選取的 MIME 類型",
		file_type_input: "新的檔案類型：",
		file_type_input_invalid: "新的檔案類型不能包含下列任何字元：",
		file_type_available: "可用的檔案類型",
		file_type_selected: "所選檔案類型",
		file_type_header: "檔案類型",
		viewer: "檢視器：",
		viewer_viewer: "檢視器",
		viewer_view: "檢視",
		viewer_preview: "預覽",
		viewer_merge_and_split: "合併及分割",
		viewer_heading: "${0} - ${1}",
		colon: "：",

		// Created by: TBD
		preview_only: "僅預覽",
		preview_only_label: "（預覽）",
		preview_only_hover: "僅當使用者按一下<b>預覽</b>時，才會使用此檢視器對映。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "此儲存庫不支援瀏覽。請選取另一個儲存庫。",

		repository_community_teamspace_message: "已將其他儲存庫指定為社群檔案庫儲存庫。如果要繼續使用現有儲存庫來作為社群檔案庫儲存庫，請在儲存變更之前選取<b>否</b>，以防止將現有儲存庫取代為此儲存庫。",

		favorites_empty: "您還沒有任何我的最愛。",
		syncItems_empty: "您還沒有任何同步化檔案。",

		root_folder_id: "根資料夾 ID",
		unified_searches: "跨儲存庫搜尋",
		max_results: "結果數：",
		direct_retrieve_enabled: "直接擷取：",
		itemTypesToDisplay: "要顯示的項目類型：",
		allItemTypes: "所有項目類型",
		include_attr_group_name: "屬性顯示名稱中的屬性群組說明：",
		admin_repcfg_include_attr_group_name_hover: "依預設，屬性群組說明包括在屬性群組屬性的名稱中。當使用者使用屬性時，這可以幫助他們查看某個屬性群組屬性所屬的屬性群組。<br>例如，使用者可能會看到某個屬性群組屬性的下列名稱：「文件設定.文件類型」。<br><br>如果停用此選項，則只將屬性說明用於屬性群組屬性名稱。<br>例如，使用者將看到此名稱：「文件類型」。<br><br>如果沒有屬性群組說明，則使用者可能無法辨別「文件類型」是簡式屬性，還是屬性群組屬性。",
		documentItemTypesOnly: "僅文件模型項目類型",
		object_store: "物件儲存庫符號名稱：",
		object_store_display_name: "物件儲存庫顯示名稱：",
		teamspaceUpgradeMsg: "儲存您的儲存庫配置時，將更新您的小組園地。如果具有許多小組園地，則更新作業可能花費數分鐘。",
		synchUpgradeMsg: "儲存您的儲存庫配置時，將更新此儲存庫上的同步模組。",
		protocol: "通訊協定：",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS 儲存庫 ID：",
		cmis_url: "CMIS AtomPub 連結服務文件 URL：",
		trace_level: "追蹤層次",
		trace_dir: "追蹤目錄",
		temp_dir: "暫存目錄",
		show_document_location: "顯示文件位置",
		max_folders: "資料夾數目上限",
		afp_conversion: "AFP 轉換",
		line_conversion: "行資料轉換",
		max_hits: "相符數上限",
		folder_search_expresssion: "資料夾搜尋表示式",
		max_item_types: "項目類型數目上限",
		max_worklists: "工作清單數目上限",
		update_storage_collection: "更新儲存體集合",
		include_mime_types_in_search_results: "在搜尋結果中包括 MIME 類型",
		object_type: "物件類型",
		object_type_document: "文件",
		object_type_folder: "資料夾",
		file_label: "檔案：",
		plugin_jarfile_path_label: "JAR 檔案路徑：",
		plugin_classfolder_path_label: "類別檔路徑",
		plugin_classname_label: "類別名稱：",
		plugin_id_label: "外掛程式 ID：",
		class_label: "類別",
		configuration: "配置",
		connect_repository: "連接...",
		server_type: "伺服器類型",
		timeout_in_seconds: "逾時（以秒為單位）：",
		default_search_template: "預設搜尋",
		search_filtered_properties: "可搜尋的內容",
		property_contains_label: "內容包含",
		class_contains_label: "類別包含",
		search_filtered_operators: "搜尋運算子",
		default_search_results: "搜尋結果",
		data_type: "資料類型",
		status_bar: "狀態列",
		operators_for: "運算子用於：",
		currentUser: "現行使用者",
		nameContains: "名稱包含",
		searchFor: "搜尋目標",
		server_autentication: "伺服器鑑別（含有 JWT 的 OAuth 2.0）",
		standard_authentication: "標準鑑別（三腿 OAuth2.0）",
		developer_authentication: "開發者鑑別",
		enterprise_id: "企業 ID:",
		public_key_id: "公開金鑰 ID：",
		private_key_path: "私密金鑰檔路徑：",
		server_user_email: "伺服器使用者電子郵件",

		filter_builder_tooltip: "定義過濾器",

		// Launch bar
		launchbar_home: "開啟首頁",
		launchbar_favorites: "開啟我的最愛",
		launchbar_browse: "開啟瀏覽視圖",
		launchbar_browse_popup: "開啟瀏覽蹦現清單",
		launchbar_search: "開啟搜尋視圖",
		launchbar_search_popup: "開啟搜尋蹦現清單",
		launchbar_teamspaces: "開啟小組園地視圖",
		launchbar_teamspaces_popup: "開啟小組園地蹦現清單",
		launchbar_work: "開啟工作視圖",
		launchbar_work_popup: "開啟工作蹦現清單",
		launchbar_entry_templates: "開啟項目範本視圖",
		launchbar_entry_templates_popup: "開啟項目範本蹦現清單",
		launchbar_admin: "開啟管理視圖",

		admin_sync_server: "Sync Services",
		admin_settings: "設定",
		admin_interface_text: "標籤",
		admin_interface_text_desktop: "桌面：",
		admin_desktops: "桌面",
		admin_repositories: "儲存庫",
		admin_mobile: "行動式",
		admin_menus: "功能表",
		admin_reason_codes: "修訂原因",
		admin_plugins: "外掛程式",
		admin_plugins_state_enabled: "已啟用外掛程式",
		admin_plugins_state_disabled: "已停用外掛程式",
		admin_plugins_version: "版本：",
		admin_plugins_version_heading: "版本",
		admin_plugins_icon: "外掛程式圖示",
		admin_viewer_mapping_icon: "檢視器對映圖示",
		admin_viewer_defs: "檢視器對映",
		admin_viewer_dialog_title: "對映",
		admin_viewer_dialog_new_title: "新建對映",
		admin_viewer_dialog_instructions: "對映指定對於儲存庫中的檔案，要使用哪些檢視器。您可以建立多項對映，以便為不同類型的檔案指定不同的檢視器。可以使用 MIME 類型或副檔名來定義對映。含有副檔名的對映將對映至文件名稱。例如，檔案類型設為 gif 的對映將對映至以副檔名 .gif 結尾的文件名稱",
		admin_desktop_viewer_defs: "檢視器對映：",
		admin_desktop_viewer_defs_hover: "檢視器對映指定要使用哪些檢視器來開啟儲存庫中不同類型的文件。<br><br>您可以在管理工具的<b>檢視器對映</b>區段中，建立新的檢視器對映。",
		admin_desktops_used: "用於桌面",
		admin_desktop_additional_settings: "其他設定：",
		admin_default_desktop: "設為預設桌面",
		admin_default_desktop_header: "預設桌面",
		admin_layout_tab_title: "佈置",
		admin_desktop_icon: "桌面圖示",

		// Themes
		admin_themes: "佈景主題",
		admin_theme_list_instructions: "您可以建立佈景主題，讓您可以更容易地自訂組織的 Web 用戶端。如果需要將不同的顏色、字型或標誌用於環境中的不同桌面，則可以建立多個佈景主題。<br><br>建立佈景主題後，則可以將此佈景主題套用至桌面，方式是在桌面的<b>外觀</b>標籤上配置此佈景主題。",
		admin_theme_instructions: "建立佈景主題來控制 Web 用戶端中所顯示的顏色及字型。此外，也可以使用此佈景主題來變更登入頁面上以及橫幅中所顯示的標誌、應用程式名稱及著作權文字。",
		admin_theme_heading: "佈景主題：<b>${0}</b>",
		admin_new_theme: "新建佈景主題",
		admin_text_theme: "佈景主題",
		admin_delete_confirmation_themes: "要刪除所選佈景主題嗎？\n已選取 ${0} 個佈景主題。",
		admin_theme_color: "顏色",
		admin_theme_text: "文字",
		admin_theme_solid: "原色",
		admin_theme_gradient: "漸層",
		admin_theme_box: "方框",
		admin_theme_color_label: "顏色 ${0}：",
		admin_theme_name_invalid: "佈景主題名稱不能包含下列任何字元：* \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "佈景主題 ID 必須是唯一的，且在儲存佈景主題之後，不能再變更其 ID。<br><br>ID 只能包含英數字元。",
		admin_theme_name_hover: "名稱不能包含下列任何字元：* \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "自動",
		admin_theme_logo_url_hover: "請輸入標誌檔的 URL。如果標誌位於和 Web 用戶端相同的 Web 應用程式伺服器上，請輸入相對 URL，例如 /mycustomizations/banner_logo.png<br><br>建議標誌採用透明背景。",
		admin_theme_color_palette_title_heading: "調色盤",
		admin_theme_color_palette_help_text: "給佈景主題建立調色盤，並使用十六進位值或顏色選取器。可以根據需要新增任意數量的顏色。",
		admin_theme_color_add_button_label: "新增顏色",
		admin_theme_color_remove_button_label: "移除顏色",
		admin_theme_global_title_heading: "應用程式層面的元素",
		admin_theme_global_font: "字型系列：",
		admin_theme_global_font_hover: "選取要用在 Web 用戶端中的字型。字型是以其優先順序列出；只有在用戶端機器上沒有安裝前一個字型時，才會使用清單中的後一個字型。",
		admin_theme_global_framework_color_label: "架構顏色：",
		admin_theme_global_framework_color_hover: "選取要用於下列元素的顏色：<ul><li>對話框上的標題列</li><li>所選標籤頂端的高亮度色彩</li><li>內容清單視圖圖示（「詳細資料」視圖、「電子刊物」視圖及「幻燈片」視圖）</li></ul><br>Web 用戶端區段之間的分隔字元不使用此顏色。如果要變更分隔字元的顏色，則必須建立外掛程式來提供自訂 CSS 檔。",
		admin_theme_color_global_toolbar: "廣域工具列顏色：",
		admin_theme_color_global_toolbar_hover: "如果在 Web 用戶端中併入廣域工具列，請選取工具列的顏色。<br><br><b>提示：</b>此工具列會顯示在 Web 用戶端頂端的橫幅中，因此工具列的顏色應該與橫幅的顏色互補。",
		admin_theme_global_selected_color: "所選項目顏色：",
		admin_theme_global_selected_color_hover: "選取在瀏覽樹狀結構、搜尋樹狀結構及內容清單中選取項目時使用的顏色。<br><br>浮動說明顏色（使用者將游標移至項目時浮動說明所使用的顏色）衍生自此顏色。",
		admin_theme_global_link_color: "鏈結顏色：",
		admin_theme_global_link_color_hover: "選取要用於 Web 用戶端中所有可點選 URL 的顏色。例如，整個 Web 用戶端裡所顯示「進一步瞭解」鏈結中會使用此顏色。",
		admin_theme_login_title_heading: "登入頁面元素",
		admin_theme_page_background_label: "登入頁面背景顏色：",
		admin_theme_login_page_background_hover: "選取要顯示在登入窗格後面的顏色。",
		admin_theme_login_pane_background_label: "登入窗格背景顏色：",
		admin_theme_login_pane_background_hover: "選取登入窗格所要顯示的顏色。此顏色應該與登入頁面的背景顏色互補。",
		admin_theme_text_color: "文字顏色：",
		admin_theme_login_pane_text_color_hover: "選取要用於登入窗格文字的顏色。此顏色用於歡迎使用文字及欄位標籤。對於登入窗格的背景顏色，此顏色應該是可辨認的。",
		admin_theme_copyright_text: "著作權文字：",
		admin_theme_copyright_text_hover: "指定是否要在登入頁面上顯示著作權文字。",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "無著作權文字",
		admin_theme_banner_title_heading: "橫幅元素",
		admin_theme_text_icons_color: "文字及圖示顏色：",
		admin_theme_icon_color_label: "圖示顏色：",
		admin_theme_shadow_label: "陰影：",
		admin_theme_banner_text_icons_hover: "選取要用於橫幅中文字及圖示的顏色。對於橫幅的背景顏色，此顏色應該是可辨認的。",
		admin_theme_banner_product_name_label: "產品名稱：",
		admin_theme_banner_product_name_hover: "建立桌面時，可以指定應用程式所要顯示的自訂名稱。如果沒有指定自訂名稱，則使用 IBM Content Navigator 來作為產品名稱。指定是要使用桌面中所定義的應用程式名稱，還是要使用影像來代替名稱。",
		admin_theme_banner_product_name_desktop_defined_label: "使用來自桌面的名稱",
		admin_theme_banner_product_name_image: "使用自訂標誌 (URL)",
		admin_theme_background_color_label: "背景顏色：",
		admin_theme_style_label: "樣式：",
		admin_theme_banner_color_hover: "選取要用於應用程式頂端橫幅的顏色。<br><br><b>提示：</b>請確定橫幅上文字的顏色在橫幅背景顏色下是可辨認的。",
		admin_theme_buttons_title_heading: "按鈕",
		admin_theme_navigation_title_heading: "導覽元素",
		admin_theme_navigation_icon_selected_label: "所選圖示顏色：",
		admin_theme_navigation_background_hover: "選取要用於特性導覽列背景的顏色。",
		admin_theme_navigation_icon_color_hover: "選取要用於特性導覽列圖示的顏色。當您在桌面上使用預設佈置時，此顏色應該與特性下拉功能表的背景對照。當您在桌面上使用經典佈置時，此顏色應該與特性導覽列的背景對照。",
		admin_theme_navigation_icon_selected_hover: "選取要用於特性導覽列中選定特性的顏色。此顏色應該與特性導覽列圖示顏色及背景顏色互補。<br><br>當您在桌面上使用經典佈置時，此顏色用作特性導覽列中的浮動顏色。",
		admin_theme_button_background_color_hover: "選取要用於按鈕背景的顏色。",
		admin_theme_button_style_hover: "選取按鈕樣式。",
		admin_theme_button_text_icon_color_hover: "選取要用於按鈕上文字及影像的顏色。",
		admin_theme_no_logo_label: "無標誌",
		admin_theme_custom_logo_label: "自訂標誌 (URL)",
		admin_theme_banner_type: "橫幅填入樣式：",
		admin_theme_banner_type_hover: "指定橫幅應該是原色還是漸層顏色。如果您指定漸層橫幅，則為橫幅顏色指定的顏色是橫幅中最深的顏色。<br><br><b>提示：</b>請確定橫幅上文字的顏色在橫幅背景顏色下是可辨認的。",
		admin_theme_icon: "佈景主題圖示",
		admin_theme_buttons_and_links_title_heading: "按鈕、欄位及鏈結",
		admin_theme_button_style_label: "按鈕樣式：",
		admin_theme_theme_style_label: "佈景主題樣式：",
		admin_theme_theme_style_hover: "選取作為佈景主題基礎的樣式。建立或編輯佈景主題時，您可以隨時變更樣式。從一種樣式變更為另一種樣式時，佈景主題設定會重設為預設值。",
		admin_theme_accent_color_label: "強調色：",
		admin_theme_accent_color_hover: "選取要用於對話框頂端列及用於載入微調按鈕的顏色。",
		admin_theme_global_toolbar_text_color_label: "廣域工具列文字顏色：",
		admin_theme_global_toolbar_text_color_hover: "如果在 Web 用戶端中併入廣域工具列，請選取要用於工具列中文字的顏色。",
		admin_theme_banner_text_color_hover: "選取要用於橫幅中文字的顏色。",
		admin_theme_banner_icon_color_hover: "選取要用於橫幅中圖示的顏色。",
		admin_theme_button_color_label: "顏色：",
		admin_theme_button_color_hover: "選取要用於下列元素的顏色：<ul><li>對話框上的標題列</li><li>所選標籤頂端的高亮度色彩</li><li>內容清單視圖圖示（「詳細資料」視圖、「電子刊物」視圖及「幻燈片」視圖）</li><li>按鈕、欄位及鏈結</li></ul>使用者將游標移至按鈕上方時使用的顏色衍生自此顏色。Web 用戶端區段之間的分隔字元不使用此顏色。如果要變更分隔字元的顏色，則必須建立外掛程式來提供自訂 CSS 檔。",
		admin_theme_theme_style_col_header: "佈景主題樣式",

		admin_syncserver_consistency_checker: "一致性檢查程式：",
		admin_syncserver_consistency_checker_hover: "執行一致性檢查程式，以確保同步服務資料庫具有伺服器上每個項目狀態的最新相關資訊。例如，在同步服務資料庫停機後，執行一致性檢查程式，以取得停機期間儲存庫上所更新文件的相關資訊。",
		admin_syncserver_consistency_checker_button: "執行一致性檢查程式",
		admin_syncserver_consistency_checker_started: "開始時間：",
		admin_syncserver_consistency_checker_ended: "結束時間：",
		admin_syncserver_consistency_checker_duration: "持續時間：",
		admin_syncserver_consistency_checker_items_processed: "已處理的同步項目數：",
		admin_syncserver_consistency_checker_items_processed_success: "已順利處理的同步項目數：",
		admin_syncserver_consistency_checker_items_discovered: "已探索到的新儲存庫項目數：",
		admin_syncserver_consistency_checker_change_updates: "更新項目總計：",
		admin_syncserver_consistency_checker_state: "狀態：",
		admin_syncserver_consistency_checker_state_done: "完成",
		admin_syncserver_consistency_checker_state_running: "執行中",
		admin_syncserver_consistency_checker_user: "提交者：",
		admin_syncserver_consistency_checker_scheduled: "已排程：",

		admin_syncserver_dbcleanup: "資料庫清除",
		admin_syncserver_dbcleanup_hover: "執行資料庫清理工具，以從資料庫移除不再同步化的任何未用的裝置和項目。",
		admin_syncserver_dbcleanup_button: "資料庫清除",
		admin_syncserver_dbcleanup_state_done: "完成",
		admin_syncserver_dbcleanup_state_running: "執行中",
		admin_syncserver_dbcleanup_started: "開始時間：",
		admin_syncserver_dbcleanup_ended: "結束時間：",
		admin_syncserver_dbcleanup_state: "狀態：",
		admin_syncserver_dbcleanup_repositorydeleted_count: "已刪除儲存庫數：",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "已刪除同步化項目數：",
		admin_syncserver_dbcleanup_devicedeleted_count: "已刪除裝置數：",
		admin_syncserver_dbcleanup_deviceexpired_count: "已過期裝置數：",

		admin_syncserver_publicSyncUrl: "同步服務公用 URL：",
		admin_syncserver_publicSyncUrl_hover: "指定儲存庫可用來與 IBM Content Navigator Sync 服務通訊 URL。URL 的預設格式是 http://sync_public_URL:port_number/sync/notify。",

		admin_syncserver_managed: "同步用戶端設定：",
		admin_syncserver_managed_hover: "使用者無法在 IBM Content Navigator Sync 用戶端中變更這些設定。",
		admin_syncserver_managed_subfolder: "要同步的資料夾層次",
		admin_syncserver_managed_subfolder_hover: "如果使用者同步資料夾，請指定將同步的資料夾數目上限。例如，如果使用者指定 3 個資料夾層次，則將同步使用者所同步的資料夾及 2 個子資料夾層次。<br><br>請確保調整您的環境，以支援此設定所建立的同步傳輸數量。",
		admin_syncserver_managed_subfolder_all: "所有子資料夾",
		admin_syncserver_managed_subfolder_none: "沒有子資料夾",
		admin_syncserver_managed_subfolder_no_more: "限制層次",
		admin_syncserver_managed_subfolder_levels: "資料夾",
		admin_syncserver_managed_schedule: "同步排程",
		admin_syncserver_managed_schedule_hover: "請確保調整您的環境，以支援同步排程所建立的同步傳輸數量。<br><br>間隔上限是 24 小時，即 1440 分鐘。<br><br>使用者可以透過按一下用戶端中的<b>立即同步</b>來置換同步排程。",
		admin_syncserver_managed_schedule_manual: "手動同步",
		admin_syncserver_managed_schedule_continuous: "連續同步",
		admin_syncserver_managed_schedule_every: "以指定間隔進行同步",
		admin_syncserver_managed_schedule_minutes: "分鐘數",
		admin_syncserver_managed_schedule_hours: "小時數",

		// redaction codes
		admin_new_reason_code: "新建修訂原因",		
		admin_reason_code_name_invalid: "修訂原因名稱不得包含下列任何一個字元：* \\ / :? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "說明不得包含下列任何一個字元：* \\ / :? \" &lt; &gt; |",
		admin_reason_code_description_hover: "說明不得包含下列任何一個字元：* \\ / :? \" &lt; &gt; |",
		admin_reason_code_name_hover: "此名稱不能包含下列任何字元：* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "說明：",
		admin_reason_code_applications_hover: "正在參照此修訂原因的 Datacap 應用程式清單。",
		admin_reason_code_applications: "Datacap 應用程式",
		admin_delete_confirmation_reason_codes: "您要刪除所選修訂原因嗎？",
		admin_delete_confirmation_reason_code: "您要刪除所選修訂原因嗎？",
		admin_reason_code_heading: "修訂原因：<b>${0}</b>",
		admin_reason_code_list_instructions: "修訂原因指出透過遮蔽機密資料而讓其不可見的方式來保護機密資料的原因。每一個原因都識別一種已針對一般使用者進行隱藏的機密資料。",
		admin_reason_code_instructions: "您可以為每一種類型的機密資料建立一個修訂原因。然後，您可以在修訂原則中使用該原因，以定義可以查看資料的使用者以及可以建立或修改修訂的使用者。",
		admin_reason_code_applications_label: "Datacap 應用程式",
		admin_reason_code_repositories: "儲存庫",
		admin_reason_code_repositories_label: "儲存庫",
		admin_reason_code_repositories_hover: "正在參照此修訂原因的 ICN 儲存庫清單。",
		admin_reason_code_repositories_default_value: "未設定",
		admin_reason_code_description_label: "說明",
		admin_reason_code_applications_default_value: "未設定",
		admin_redaction_reasons: "修訂原因",
		admin_redactions: "角色型修訂",
		admin_redactions_policies_roles: "原則及角色",
		admin_reasons: "原因",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "無法編輯 ID。可以將其複製到剪貼簿",
		// Role based administration
		admin_rba: "基於角色的桌面管理",
		admin_rba_mobile_access_enabled: "已對此桌面啟用行動式存取。",
		admin_rba_mobile_access_disabled: "未對此桌面啟用行動式存取。",
		admin_rba_confirm_delete_multiple: "您要刪除所選管理角色嗎？",
		admin_rba_confirm_delete_single: "您要刪除所選管理角色嗎？",
		admin_rba_delete_multi_role_desktop: "已將您選取的一或多個角色指派給桌面。您必須先從桌面移除角色，然後才能予以刪除。",
		admin_rba_delete_single_role_desktop: "您選取的角色已指派給 ${0} 桌面。您必須先從桌面移除角色，然後才能予以刪除。",
		admin_desktop: "桌面",
		admin_rba_instructions: "您可以建立及管理桌面管理角色，這些角色與授與的專用權與桌面管理者關聯。",
		admin_rba_not_used: "${0} 未用在任何桌面中。",
		admin_rba_desktops: "<b>${0} 已用在下列桌面中：</b>",
		admin_rba_new_role: "新建角色",
		admin_rba_name_invalid: "管理角色名稱不能包含以下任何字元：* \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "說明不得包含下列任何一個字元：* \\ / :? \" &lt; &gt; |",
		admin_rba_description_hover: "說明不得包含下列任何一個字元：* \\ / :? \" &lt; &gt; |",
		admin_rba_name_hover: "此名稱不能包含下列任何字元：* \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>說明：</b> ${0}",
		admin_rba_membership: "成員資格",
		admin_rba_general_priv: "一般",
		admin_rba_appearance_priv: "外觀",
		admin_rba_desktop_config_priv: "桌面配置",
		admin_rba_app_name_priv: "應用程式名稱",
		admin_rba_theme_priv: "佈景主題",
		admin_rba_viewer_map_priv: "檢視器對映",
		admin_rba_merge_split_priv: "合併及分割",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "功能表",
		admin_rba_edit_svc_priv: "編輯服務",
		admin_rba_toolbars_priv: "工具列",
		admin_rba_ctx_menus_priv: "快速功能表",
		admin_rba_office_ribbon_priv: "MS Office 功能區列指令",
		admin_rba_office_menues_priv: "MS Office 快速功能表",
		admin_rba_addl_settings_priv: "其他設定",
		admin_rba_mobile_priv: "行動式",
		admin_rba_add_doc_dlg_priv: "新增文件對話框",
		admin_rba_doc_mgmt_priv: "文件管理",
		admin_rba_def_redaction_priv: "預設修訂選項",
		admin_rba_add_photos_priv: "從相機和照片庫新增照片",
		admin_rba_time_stamp_priv: "時間戳記",
		admin_rba_add_docs_folders_priv: "在儲存庫中新增文件和建立資料夾",
		admin_rba_open_docs_priv: "在其他應用程式中開啟文件",
		admin_rba_office_config_priv: "Office 配置",
		admin_rba_tab_label_priv: "IBM ECM 分頁標籤",
		admin_rba_feature_sel_priv: "功能選擇",
		admin_rba_general_config_priv: "一般配置",
		admin_rba_favorites_priv: "我的最愛",
		admin_rba_add_options_priv: "「編輯」群組中的「新增」選項",
		admin_rba_browse_priv: "瀏覽",
		admin_rba_outlook_int_priv: "Outlook 整合",
		admin_rba_search_priv: "搜尋",
		admin_rba_layout_priv: "佈置",
		admin_rba_case_priv: "案例",
		admin_rba_desktop_feat_priv: "桌面特性",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "顯示的特性",
		admin_rba_branding_priv: "品牌行銷",
		admin_rba_home_priv: "首頁",
		admin_rba_main_color_priv: "主要顏色",
		admin_rba_sec_color_priv: "次要顏色",
		admin_rba_teamspaces_priv: "小組園地",
		admin_rba_rbr_priv: "角色型修訂",
		admin_rba_et_mgr_priv: "項目範本管理程式",
		admin_rba_policies_roles_priv: "管理原則及角色",
		admin_rba_work_priv: "工作",
		admin_rba_reasons_priv: "原因碼",
		admin_rba_tasks_priv: "非同步作業",
		admin_rba_auth_priv: "鑑別",
		admin_rba_all_privs: "所有專用權",
		admin_rba_some_privs: "部分專用權",
		admin_rba_no_privs: "無專用權",
		admin_add_users_groups_priv: "新增使用者及群組",
		admin_url_features_priv: "管理 URL 特性",
		admin_plugin_features_priv: "管理外掛程式特性",
		admin_addl_components_priv: "其他元件",
		admin_global_toolbar_priv: "廣域工具列",
		admin_status_bar_priv: "狀態列",
		admin_refresh_message: "您必須重新整理瀏覽器才能使用更新的資料。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "您必須重新整理瀏覽器，以使用更新的預設桌面。",
		admin_desktop_refresh_message: "您必須重新整理瀏覽器才能使用更新的桌面。",
		admin_action_open: "開啟",
		admin_action_edit: "編輯",
		admin_action_copy: "複製",
		admin_action_delete: "刪除",
		admin_action_copy: "複製",
		admin_action_new: "建立新的項目",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "此 ID 已在使用中。您必須指定一個唯一 ID。",

		admin_searchable_properties_for: "可搜尋的內容用於：",
		admin_repository_new: "新建儲存庫",
		admin_desktop_new: "新建桌面",
		admin_desktop_file_documents: "要求使用者將新文件和資料夾儲存在資料夾中",
		admin_desktop_file_documents_hover: "如果您想要求使用者在將項目新增至儲存庫時選取資料夾，請選取此選項。如果您不選取此選項，則使用者可在新增文件 (IBM FileNet P8) 或文件及資料夾 (IBM Content Manager) 時不必將它們存檔於資料夾中。",
		admin_desktop_show_security_tab: "在執行新增和移入動作期間，顯示安全設定",
		admin_desktop_show_security_hover: "<b>僅限 IBM FileNet P8 使用者。</b>將項目新增或移入至此桌面時，如果您想容許使用者編輯文件和資料夾的安全，請選取此選項。",
		admin_desktop_configure_security_inheritance: "容許使用者配置資料夾的安全繼承",
		admin_desktop_configure_security_inheritance_hover: "<b>僅限 IBM FileNet P8 使用者。</b>如果您希望使用者能夠透過控制資料夾的安全繼承來自訂對資料夾中項目的存取，請選取此選項。如果您選取此選項，則使用者可以指定使用者或群組是否能夠從下列各項繼承安全：<ul><li>資料夾</li><li>資料夾及其直接子資料夾</li><li>資料夾及其所有子資料夾</li></ul>",
		admin_desktop_appearance: "外觀",
		admin_desktop_appearance_instruction: "如果要自訂桌面的外觀，則可以變更桌面所顯示的登入頁面及橫幅。",
		admin_desktop_layout: "佈置：",
		admin_desktop_layout_hover: "佈置指定哪些特性可以顯示在 Web 用戶端中，以及如何安排 Web 用戶端的內容。<br><br><b>提示：</b>您可以建立外掛程式，來定義自訂佈置。您必須先將外掛程式登錄在管理工具中，才能選取自訂佈置。",
		admin_desktop_layout_default: "預設",
		admin_desktop_layout_custom: "自訂",
		admin_desktop_enable_workflow_email: "為 FileNet P8 工作流程電子郵件通知啟用此桌面",
		admin_desktop_enable_workflow_email_hover: "僅限於 FileNet P8 使用者。如果您想要讓使用者可以從 Process Engine 所產生電子郵件通知中包含的 URL 開啟 Web 用戶端，請選取此選項。<br /><br />如果沒有對任何桌面啟用此選項，則使用者無法從通知中的 URL 登入 Web 用戶端。<br /><br />如果您在多個桌面上啟用此選項，且多個桌面符合通知中的 URL 所指定的準則，Web 用戶端會使用第一個符合準則的桌面。",
		admin_desktop_prevent_create_new_search: "防止使用者建立搜尋",
		admin_desktop_prevent_create_new_search_hover: "此選項限制使用者只能使用現有搜尋，而不能建立可能無法最佳化的開放式搜尋。</br></br>此設定不影響小組園地。用於在小組園地中建立搜尋的權限，由對給定小組園地具有角色的使用者進行控制。",
		admin_desktop_prevent_create_new_unified_search: "防止使用者建立跨儲存庫搜尋",
		admin_desktop_prevent_create_new_unified_search_hover: "此選項限制使用者只能使用現有跨儲存庫搜尋，而不能建立可能無法最佳化的開放式跨儲存庫搜尋。",
		admin_desktop_hide_entry_template_not_found_warning: "隱藏找不到相關聯的項目範本時顯示的警告",
		admin_desktop_hide_entry_template_not_found_warning_hover: "如果您想要隱藏已編輯項目內容但找不到與項目相關聯的項目範本時顯示的警告訊息，請選取此選項。",
		admin_desktop_show_class_role_security_selection: "容許使用者在項目範本中配置基於安全的角色",
		admin_desktop_show_class_role_security_selection_hover:	"<b>僅限 IBM FileNet P8 使用者。</b>如果您想要使用者在文件及/或資料夾上利用項目範本設定安全時，配置項目範本以使用基於安全的角色，請選取此選項。如果您選取此選項，則項目範本編輯器可以指定是否將角色安全物件套用至項目範本定義。",
		admin_desktop_show_primary_multi_part: "僅在檢視器中開啟主要文件",
		admin_desktop_show_primary_multi_part_hover: "<b>僅限 IBM FileNet P8 使用者。</b>如果您只想要在檢視器中開啟主要文件檔案，請選取此選項。文件可以具有多個相關聯的檔案。此選項將僅開啟與文件相關聯的主要檔案。",
		admin_desktop_redaction_save_mode: "預設修訂選項：",
		admin_desktop_redaction_save_mode_hover: "選取預設 ViewONE Virtual 檢視器修訂儲存模式：</br>* 一律要求使用者進行選擇：將導致在進入修訂模式時顯示此對話框，以詢問使用者是要移入新版本、建立新文件，還是要下載內容。</br>* 作為新版本進行移入：一律將已修訂的內容儲存到現有文件的新版本。</br>* 另存為全新文件：一律將已修訂的內容儲存到全新文件。</br>* 下載並儲存在用戶端上：將已修訂的內容下載到用戶端系統。",
		admin_desktop_redaction_save_mode_user_select: "一律要求使用者進行選擇",
		admin_desktop_redaction_save_mode_new_version: "作為新版本進行移入",
		admin_desktop_redaction_save_mode_new_document: "另存為全新文件",
		admin_desktop_redaction_save_mode_local_content: "下載並儲存在用戶端上",

		admin_desktop_document_add_mode: "新增文件對話框：",
		admin_desktop_document_add_mode_hover: "指定新增 IBM Content Navigator 所建立之文件時要使用的新增對話框：<ul><li>新增永久修訂文件</li><li>新增合併及分割文件</li><li>新增 Microsoft Office 文件</li><li>新增 Edit Service 文件</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "新增文件",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "使用項目範本新增文件",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "合併及分割：",
		admin_desktop_merge_and_split_enable_hover: "指定您是否想要存取此桌面的使用者能夠使用支援的檢視器來合併及分割文件。",

		admin_desktop_merge_and_split_show_checkin: "在使用者將變更移入文件時，提示使用者提供內容值。",
		admin_desktop_merge_and_split_show_checkin_hover_help: "如果您選取此選項，則當使用者在「合併及分割」模式下將變更移入文件時，會顯示移入對話框。",

		admin_desktop_available_categories: "可用的特性",
		admin_desktop_selected_categories: "選取的特性",

		admin_layout_banner_title: "橫幅和登入頁面",
		admin_layout_title: "佈置",

		admin_desktop_application_name: "應用程式名稱：",
		admin_desktop_application_name_hover: "指定要顯示在橫幅中的應用程式名稱。<br><br>提示：在「標籤/桌面標籤」標籤中，為其他語言定義應用程式名稱。",
		admin_desktop_theme: "佈景主題：",
		admin_desktop_theme_hover: "針對此桌面，指定是要使用預設 IBM Content Navigator 佈景主題，還是要使用自訂佈景主題。如果要使用自訂佈景主題，則必須在管理工具的<b>佈景主題</b>區段中建立佈景主題。",
		admin_desktop_login_logo: "登入頁面標誌：",
		admin_desktop_login_logo_hover: "如果您想變更登入頁面上顯示的標誌，您可以指定標誌檔的 URL。然而，建議您使用自訂佈景主題來變更標誌。",
		admin_desktop_login_logo_url_hover: "請輸入標誌檔的 URL。如果標誌位於和 Web 用戶端相同的 Web 應用程式伺服器上，請輸入相對 URL，例如 /mycustomizations/login_logo.png<br><br>標誌不應超過 200 像素寬度以及 150 像素高度。<br><br>建議標誌採用透明背景。",
		admin_desktop_banner_logo: "橫幅標誌：",
		admin_desktop_banner_logo_hover: "如果您想變更橫幅上顯示的標誌，您可以指定標誌檔的 URL。然而，建議您使用自訂佈景主題來變更標誌。",
		admin_desktop_banner_logo_url_hover: "請輸入標誌檔的 URL。如果標誌位於和 Web 用戶端相同的 Web 應用程式伺服器上，請輸入相對 URL，例如 /mycustomizations/banner_logo.png<br><br>標誌不應超過 72 像素寬度以及 36 像素高度。<br><br>建議標誌採用透明背景。",
		admin_desktop_banner_background_color: "橫幅背景顏色：",
		admin_desktop_banner_background_color_hover: "如果您想變更橫幅的背景顏色，您可以指定自訂顏色。然而，建議您使用自訂佈景主題來變更橫幅的顏色。",
		admin_desktop_banner_background_color_custom_hover: "將應用程式橫幅的顏色指定成一種十六進位顏色。",
		admin_desktop_banner_application_name_color: "應用程式名稱文字顏色：",
		admin_desktop_banner_application_name_color_hover: "如果您想變更應用程式名稱的顏色，您可以指定自訂顏色。然而，建議您使用自訂佈景主題來變更應用程式名稱的顏色。",
		admin_desktop_banner_application_name_color_custom_hover: "將應用程式名稱的顏色指定成一種十六進位顏色。",
		admin_desktop_banner_menu_color: "橫幅圖示顏色：",
		admin_desktop_banner_menu_color_hover: "如果您變更橫幅的背景顏色，您可能需要變更橫幅中的圖示色系，以提高這些圖示能見度。請指定要顯示橫幅圖示的亮色或暗色版本。<br><br>然而，建議您使用自訂佈景主題來變更圖示的顏色。",
		admin_desktop_login_page_content: "登入頁面內容：",
		admin_desktop_login_page_content_hover: "如果您想在登入頁面上顯示其他資訊，例如：系統暫停服務或使用者利用使用者名稱與密碼可以在何處取得說明等相關公告，您可以指定所要顯示之內容的 URL。",
		admin_desktop_login_page_content_url_hover: "請輸入登入頁面內容的 URL。如果內容位於和 Web 用戶端相同的 Web 應用程式伺服器上，請輸入相對 URL，例如 /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "密碼規則：",
		admin_desktop_password_rules_hover: "如果您要向使用者提供用於建立密碼的準則，例如，受限字元或字元數下限，則可指定包含密碼規則的頁面 URL。",
		admin_desktop_password_rules_url_hover: "請輸入密碼規則內容的 URL。如果內容位於和 Web 用戶端相同的 Web 應用程式伺服器上，請輸入相對 URL，例如 /mycustomizations/passwords.html",
		admin_desktop_help_url: "使用者說明 URL：",
		admin_desktop_help_url_hover: "您可以使用 IBM Content Navigator 隨附的說明，或者執行下列其中一個動作將使用者重新導向至自訂說明內容：<br><br><ul><li>導向自訂說明系統</li><li>將說明新增至 IBM Knowledge Center 實例（與 IBM Content Navigator 一起部署）。</li></ul>",
		admin_desktop_help_url_url_hover: "輸入自訂說明系統的 URL。IBM Content Navigator 會附加 index.jsp?content=/com.ibm.usingeuc.doc/ 及檔名至指定 URL 的結尾。為了讓介面中的「進一步瞭解」鏈結順利運作，說明系統必須使用與整合使用者說明相同的檔名。",
		admin_desktop_deprecated_appearance_title: "已淘汰的設定",
		admin_desktop_deprecated_appearance_instructions: "如果使用自訂佈景主題，則自訂佈景主題會置換這些設定。您應該將這些設定移轉至自訂佈景主題，自訂佈景主題在此章節中提供了比設定還要詳細的樣式。此外，多個桌面也可以使用自訂佈景主題。",

		admin_desktop_plugins_title: "啟用或停用此桌面的外掛程式。",
		admin_desktop_plugins_enable_all_plugins: "啟用所有已部署的外掛程式，以與此桌面搭配使用",
		admin_desktop_plugins_select_plugins: "選取要啟用以與此桌面搭配使用的已部署外掛程式",
		admin_desktop_plugins_select_plugin: "選取外掛程式",

		admin_desktop_layout_features: "顯示的特性：",
		admin_desktop_layout_features_hover: "選取您想要使用者從此桌面存取的特性。會按照特性的列出順序顯示特性。<br><br>如果選取特性，則可以自訂此特性在桌面內的部分行為，例如，給此特性選取的預設儲存庫。",
		admin_desktop_layout_default_repository: "預設儲存庫：",
		admin_desktop_layout_default_repository_layout_hover: "指定在使用者開啟此特性時預設選取的儲存庫。",
		admin_desktop_layout_document_thumbnails: "文件縮圖：",
		admin_desktop_layout_document_thumbnails_hover: "指定是否要在「文件資訊」窗格中顯示文件的縮圖。<br><br>顯示縮圖可能會使 Web 用戶端的效能變差。",
		admin_desktop_layout_show_filmstrip_view: "幻燈片視圖",
		admin_desktop_layout_show_filmstrip_view_hover: "指定是否容許使用者切換幻燈片視圖中的內容清單顯示畫面。<br><br>幻燈片視圖會針對使用者選取的每一個文件產生預覽。然而，使用幻燈片視圖可能會使 Web 用戶端的效能變差。此外，您也必須配置 HTML 轉換檢視器才能查看文件預覽。",
		admin_enabled: "啟用",
		admin_disabled: "停用",
		admin_include: "併入",
		admin_exclude: "排除",
		admin_layout_teamspaces_default_repository: "小組園地：",
		admin_layout_entry_templates_default_repository: "項目範本：",
		admin_layout_other_features_default_repository: "搜尋和瀏覽：",
		admin_layout_work_default_repository: "工作：",
		admin_layout_default_feature: "預設特性：",
		admin_default_category_placeholder: "選取特性",
		admin_layout_default_feature_hover: "指定在使用者登入此桌面時顯示的特性。",
		admin_layout_default_feature_warning: "變更預設特性可能影響載入應用程式需要的時間。",
		admin_layout_feature_list_header: "特性",
		admin_layout_show_statusbar: "狀態列：",
		admin_layout_show_statusbar_hover: "指定是否要在桌面底端顯示狀態列。<br><br>如果隱藏狀態列，則使用者看不到非錯誤事件的相關資訊，例如：<ul><li>已將文件新增至儲存庫。</li><li>搜尋傳回了 59 個文件。</li></ul>",
		admin_layout_show_magazineview: "電子刊物視圖：",
		admin_layout_show_magazineview_hover: "指定是否容許使用者將內容清單顯示畫面切換為電子刊物視圖。<br><br>電子刊物視圖增加了內容清單中每個項目的高度，這會減少內容清單中可以同時顯示的項目數。",
		admin_layout_show_detailsview: "詳細資料視圖：",
		admin_layout_show_detailsview_hover: "指定是否容許使用者將內容清單顯示畫面切換為詳細資料視圖。<br><br>詳細資料視圖會最大化內容清單中顯示的列數。",
		admin_feature_config_docinfopane_label: "文件資訊窗格：",
		admin_feature_config_docinfopane_hoverhelp: "指定使用者是否可以存取此特性中的文件資訊窗格。",
		admin_feature_config_docinfopane_default_label: "預設行為：",
		admin_feature_config_docinfopane_expanded: "擴充",
		admin_feature_config_docinfopane_collapsed: "收合",
		admin_feature_config_docinfopane_expand_on_select: "選取項目時展開",
		admin_layout_features_title: "桌面特性",
		admin_layout_features_instructions: "指定使用者可以從此桌面存取的特性。此外，您也可以自訂桌面所隨附之每個特性的行為。",
		admin_layout_components_title: "其他桌面元件",
		admin_layout_components_instructions: "如果需要更為簡化的介面，或者要改進 Web 用戶端的效能，則可以停用桌面的部分元件。",
		admin_layout_featureconfig_instructions: "選取要配置的特性",
		admin_layout_featureconfig_no_configuration: "沒有可用的特性配置。",
		admin_layout_featureconfig_label: "特性 ${0} 的配置",
		admin_layout_featureconfig_title: "特性配置",
		admin_layout_featureconfig_taskManagerURL: "若要使用此特性，則必須啟用和配置連接至作業管理程式服務的 IBM Content Navigator。在此管理工具的<b>設定</b>區段中，啟用作業管理程式服務。",
		admin_feature_config_show_my_checkouts_label: "我的移出窗格：",
		admin_feature_config_show_my_checkouts_hoverhelp: "「我的移出」窗格可讓使用者針對他們已在特定儲存庫上移出的所有項目執行搜尋。指定使用者是否可以從「首頁」特性存取「我的移出」窗格。<br/><br/><b>限制：</b>此特性要求您至少已使一個 IBM Content Manager、IBM FileNet P8 或 OASIS CMIS 儲存庫與此桌面相關聯。",

		admin_feature_config_default_repository_icon_text: "預設儲存庫",
		admin_show: "顯示",
		admin_hide: "隱藏",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "您無法將「管理」特性從「管理桌面」移除。",
		admin_warning_label: "警告：",
		admin_layout_show_globaltoolbar: "廣域工具列：",
		admin_layout_show_globaltoolbar_hover: "指定是否要在桌面頂端的橫幅中顯示工具列。<br><br>廣域工具列隨附的動作可讓使用者在儲存庫中新增文件、資料夾及保留。可用的動作相依於使用者所連接的儲存庫。",
		admin_interface_text_name_label: "標籤類型",

		admin_interface_text_label_description: "您可以自訂顯示在 Web 用戶端特定區域的文字。標籤會顯示在您配置的所有儲存庫及桌面。請在「現行標籤」欄位中，輸入您希望在介面中看到的文字。<br><br><b>重要事項：</b>您對標籤所做的任何變更，不會顯示在管理工具中。",
		admin_interface_text_label_action: "動作標籤",
		admin_interface_text_label_action_description: "動作標籤會顯示在整個 Web 用戶端的按鈕上及功能表中。您可以針對每一種類型的儲存庫，定義不同的動作標籤。",
		admin_interface_text_label_application: "應用程式標籤",
		admin_interface_text_label_application_description: "應用程式標籤會顯示在整個 Web 用戶端中。",
		admin_interface_text_label_system: "系統內容標籤",
		admin_interface_text_label_system_description: "所顯示的系統內容因儲存庫而異。您可以針對與儲存庫中的文件及資料夾相關聯的系統內容，自訂所顯示的標籤。",
		admin_interface_text_label_desktop: "桌面標籤",
		admin_interface_text_label_desktop_description: "如果您在桌面中自訂了應用程式的名稱，您也可以用英文以外的語言來自訂該名稱。您也可以在桌面中自訂 IBM FileNet P8 應用程式空間的名稱。",

		admin_interface_text_system_label: "系統標籤",
		admin_interface_text_current_label: "現行標籤",
		admin_interface_text_default_label_heading: "預設標籤",
		admin_interface_text_default_label: "預設標籤：",
		admin_interface_text_displayed_in_label: "針對下列顯示：",
		admin_interface_text_displayed_in_document_folder: "文件和資料夾",
		admin_interface_text_displayed_in_document: "文件",
		admin_interface_text_displayed_in_folder: "資料夾",
		admin_interface_text_displayed_in_admin_application_space: "應用程式空間標籤",
		admin_interface_text_displayed_in_desktop: "行動式特性標籤",
		admin_interface_text_displayed_in_admin_application_name: "應用程式名稱",

		admin_new_desktop: "新建桌面",
		admin_new_repository: "新建儲存庫",
		admin_new_menu: "新建功能表",
		admin_new_viewer_mapping: "新建檢視器對映",
		admin_new_mapping_label: "新建對映",
		admin_new_icon_mapping: "新建圖示對映",
		admin_viewer_mapping_list_instructions: "可以配置 Web 用戶端用來顯示不同類型內容的檢視器。檢視器對映可定義您要使用之每一個檢視器的相關聯 MIME 類型。如果要將不同的檢視器用於不同的桌面，則可以建立多個檢視器對映。",
		admin_viewer_mapping_instructions: "指定您要用來開啟檔案的檢視器。如果要使用自訂檢視器，則必須將檢視器整合成外掛程式，這樣才能將它新增至檢視器對映。<br><br><b>重要事項：</b>當使用者開啟一個文件，網路用戶端搜尋檢視器對映清單，根據使用者執行的作業系統以及使用者連接的儲存庫找尋可以開啟文件的第一個檢視器。<br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "新建外掛程式",
		admin_menu_list_instructions: "您可以建立自訂工具列和快速功能表，以控制使用者所能使用的動作。您無法編輯預設功能表，但是可以建立現有功能表的副本，來限制可用的動作或新增定義在外掛程式中的自訂動作。<br><br>如果您想建立新類型的功能表，必須將該功能表定義在外掛程式中。",
		admin_menu_id_hover: "ID 必須是唯一的，儲存功能表之後，您就不能再變更 ID。<br><br>ID 只能包含英數字元且區分大小寫。",
		admin_menu_id_disabled_hover: "功能表 ID 無法變更。如果您想要使用不同的 ID，必須建立新的功能表。",
		admin_menu_default_instructions: "您無法編輯此功能表，因為它是預設功能表。如果您想編輯此功能表，您必須建立功能表副本。",
		admin_menu_toolbar_instructions: "您可以限制此工具列的可用動作，或者您可以新增定義在外掛程式中的自訂動作。您也可以在工具列中新增分隔字元，以便組織動作。",
		admin_menu_toolbar_custom_instructions: "此工具列是外掛程式所定義的。如果您想編輯此工具列，必須更新外掛程式，或者建立工具列副本。",
		admin_menu_context_menu_instructions: "您可以限制此快速功能表的可用動作，或者您可以新增定義在外掛程式中的自訂動作。您也可以在快速功能表中新增分隔字元和子功能表，以便組織動作。",
		admin_menu_context_menu_custom_instructions: "此快速功能表是外掛程式所定義的。如果您想編輯此快速功能表，必須更新外掛程式，或者建立快速功能表副本。",
		admin_desktop_list_instructions: "您可以建立多個桌面，以便為不同的使用者，提供其所需內容的存取權。舉例來說，您可以建立一個只容許使用者搜尋內容的桌面，或建立一個提供單一儲存庫存取權給使用者的桌面。",
		admin_plugin_updated: "已變更所選外掛程式的配置。您必須重新整理瀏覽器，變更才會生效。",
		admin_repository_ci_heading: "Content Integrator 儲存庫：<b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager 儲存庫：<b>${0}</b>",
		admin_repository_cm_heading: "Content Manager 儲存庫：<b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand 儲存庫：<b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) 儲存庫：<b>${0}</b>",
		admin_repository_box_heading: "Box 儲存庫：<b>${0}</b>",
		admin_repository_generic_heading: "儲存庫：<b>${0}</b>",

		admin_delete_confirmation_desktops: "您要刪除選取的桌面嗎？\n已選取 ${0} 個桌面。",
		admin_delete_confirmation_menus: "您要刪除選取的功能表嗎？\n已選取 ${0} 個功能表。",
		admin_delete_confirmation_repositories: "您要刪除選取的儲存庫嗎？\n已選取 ${0} 個儲存庫。",
		admin_delete_confirmation_viewer_mappings: "您要刪除選取的檢視器對映嗎？已選取 ${0} 項檢視器對映。",
		admin_delete_confirmation_icon_mappings: "您要刪除選取的圖示配置嗎？\n已選取 ${0} 個圖示配置。",
		admin_delete_confirmation_plugins: "您要刪除選取的外掛程式嗎？\n已選取 ${0} 個外掛程式。",
		admin_delete_confirmation: "您要刪除選取的項目嗎？\n已選取 ${0} 個項目。",

		admin_viewer_mapping_id_hover: "ID 必須是唯一的，儲存檢視器對映之後，您就不能再變更 ID。<br><br>ID 只能包含英數字元且區分大小寫。",
		admin_viewer_mapping_id_disabled_hover: "檢視器對映 ID 無法變更。如果您想要使用不同的 ID，必須建立新的檢視器對映。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "無法刪除預設桌面。",

		admin_desktop_heading: "桌面：<b>${0}</b>",
		admin_menu_toolbar_heading: "工具列：<b>${0}</b>",
		admin_menu_toolbar_custom_heading: "自訂工具列：<b>${0}</b>",
		admin_menu_context_menu_heading: "快速功能表：<b>${0}</b>",
		admin_menu_context_menu_custom_heading: "自訂快速功能表：<b>${0}</b>",
		admin_plugin_heading: "外掛程式：<b>${0}</b>",
		admin_plugin_instructions: "外掛程式可以是 JAR 檔或已編譯的類別檔。<br/><br/><b>重要事項：</b>IBM Content Navigator Web 應用程式伺服器必須能夠存取本端檔案系統上的外掛程式檔案，或透過 URL存取。",
		admin_plugin_list_instructions: "必須使用管理工具來為 Web 用戶端登錄外掛程式。如果外掛程式需要其他配置，則在您登錄外掛程式之後，將會顯示配置參數。<br /><br /><b>重要事項：</b>如果您編輯在管理工具的其他區域（例如功能表）中參照的外掛程式，則外掛程式的行為可能會發生問題。此外，會按照外掛程式的列出順序對其進行呼叫。如果某個外掛程式需要在另一個外掛程式之前執行，請確保這些外掛程式依其必須執行的順序列出。",
		admin_plugin_cannot_delete: "無法刪除選取的外掛程式，因為一些外掛程式相依於這些外掛程式。<br/>選取的外掛程式：${0}<br/>相依外掛程式：${1}",
		admin_plugin_cannot_disable: "無法停用選取的外掛程式，因為一些外掛程式相依於這些外掛程式。<br/>選取的外掛程式：${0}<br/>相依外掛程式：${1}",
		admin_plugin_cannot_add: "無法新增外掛程式，因為遺漏或停用了該外掛程式所依賴的部分外掛程式。遺漏或停用的外掛程式：${0}",
		admin_plugin_cannot_enable: "無法啟用所選外掛程式，因為遺漏或停用了這些外掛程式所依賴的部分外掛程式。<br/>選取的外掛程式：${0}<br/>遺漏或停用的外掛程式：${1}",
		admin_plugin_save_order: "儲存順序",
		admin_plugin_load: "載入",
		admin_plugin_load_hover: "指定外掛程式的 URL",
		admin_plugin_file_hover: "如果外掛程式 JAR 檔位在您的本端檔案系統上，您可以輸入外掛程式檔案的完整路徑或 URL。如果外掛程式 JAR 檔位在遠端伺服器上，則您必須輸入外掛程式檔案的 URL。",
		admin_plugin_classfolderpath_hover: "已編譯的類別檔必須位於 IBM Content Navigator Web 應用程式伺服器上。<br/><br/>請輸入在其中編譯或產生之外掛程式類別的完整路徑。<br/><br/>路徑必須不能包含外掛程式類別的套件名稱。例如，在 Windows 上，範例外掛程式類別的預設路徑為 C:\\Program Files (x86)\\IBM\\ECMClient\\bin。.",
		admin_plugin_classfoldername_hover: "請輸入類別檔中應以外掛程式類別載入及呼叫之 Java 類別的完整名稱。<br/>例如，範例外掛程式的類別名稱為 com.ibm.ecm.extension.sample.<br/>SamplePlugin。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "在指定的 URL 找不到外掛程式 JAR 檔。確定 JAR 檔是在 Web 應用程式伺服器上，且 URL 與檔名正確。",
		admin_plugin_for_repository_not_loaded: "無法編輯此儲存庫。未載入用來定義及支援此類型儲存庫的外掛程式。在「外掛程式」標籤上，編輯外掛程式以確認它已正確配置且已載入。",
		admin_plugin_repository_types: "儲存庫類型：",
		admin_plugin_viewers: "檢視器：",
		admin_plugin_features: "特性：",
		admin_plugin_layouts: "佈置：",
		admin_plugin_not_available: "無法使用",
		admin_plugin_config_params: "配置參數：",
		admin_viewer_def_heading: "檢視器對映：<b>${0}</b>",
		admin_users_and_groups: "使用者和群組",
		admin_general: "一般",
		admin_logging: "記載",
		admin_authentication: "鑑別",		
		admin_rolebase_role: "角色：",
		admin_settings_logging_instructions: "可以使用記載來對 Web 用戶端問題進行疑難排解。如果知道特定 Java 類別或者特定使用者發生問題，則可以改進記載。錯誤資訊會寫入 Web 應用程式伺服器錯誤日誌檔。",
		admin_settings_logging_instructions2: "<b>除錯記載設定</b><br />如果知道特定用戶端主機或使用者發生問題，則可以將除錯記載目標鎖定為該機器或使用者。可以在正式作業環境中擷取除錯資訊，且系統效能不會受到太大影響。<br /><br /><b>重要事項：</b>如果指定用戶端主機或使用者，則此設定會置換任何其他記載設定。擷取所需資訊後，將此選項設為<b>無</b>，可以對您的環境回復標準記載。",
		admin_settings_export_config_hover: "將現行系統配置匯出成為檔案以使用於 IBM Support Assistant Data Collector。檔案會儲存到 user.home Java 系統內容所定義的位置。",
		admin_logging_level: "應用程式層次的記載：",
		admin_logging_level_hover: "記載層次會影響您伺服器上所儲存的資訊量。如果選取<b>錯誤</b>，會擷取最少數量的記載資訊。如果選取<b>除錯</b>，會擷取最多的資訊。<br /><br />除非是受到「IBM 軟體支援中心」的指示，否則在正式作業環境中請勿指定<b>除錯</b>。",
		admin_logging_level_0: "沒有記載",
		admin_logging_level_1: "錯誤",
		admin_logging_level_2: "警告",
		admin_logging_level_3: "資訊",
		admin_logging_level_4: "除錯",
		admin_logging_classes: "Java 類別層次記載：",
		admin_logging_classes_hover: "依預設，所有 Java 類別及套件都會併到 Web 應用程式伺服器錯誤日誌中。然而，您可以指定要在記載中併入或排除的類別或套件。可以使用 Web 應用程式伺服器錯誤日誌來判定要併入或排除的類別。<br><br>如果知道特定類別發生問題，則可以明確地將該類別併到日誌檔中。如果將類別併到錯誤日誌中，則會將所有其他類別都從日誌檔中排除。<br><br>如果知道類別沒有發生問題，但想要縮減日誌檔的大小，則可以將該類別從日誌檔中排除。",
		admin_logging_classes_include: "併入",
		admin_logging_classes_include_all: "所有類別",
		admin_logging_classes_include_specified: "特定的類別",
		admin_logging_classes_include_specified_msg: "指定要包含的類別。",
		admin_logging_classes_exclude: "排除",
		admin_logging_classes_exclude_none: "無",
		admin_logging_classes_exclude_specified: "特定的類別",
		admin_logging_classes_exclude_specified_msg: "指定要排除的類別。",
		admin_logging_debug: "除錯記載用於：",
		admin_logging_debug_hover: "<b>重要事項：</b>在您指定用戶端主機 IP 位址或使用者之前，請先檢閱 Web 應用程式伺服器日誌檔。所提供的值必須符合日誌檔中顯示的值。",
		admin_logging_debug_none: "無（預設值）",
		admin_logging_debug_host: "用戶端主機（IP 位址）",
		admin_logging_debug_host_msg: "指定一個以上要記載其除錯資訊的用戶端機器的 IP 位址。使用逗點來區隔 IP 位址。<br /><br /><b>重要事項：</b>在您指定 IP 位址之前，請先檢閱 Web 應用程式伺服器日誌檔。所提供的值必須符合日誌檔中顯示的值。",
		admin_logging_debug_user: "使用者",
		admin_logging_debug_user_msg: "指定一個以上要記載其除錯資訊的使用者的使用者名稱。使用逗點來區隔使用者名稱。<br /><br /><b>重要事項：</b>在您指定使用者名稱之前，請先檢閱 Web 應用程式伺服器日誌檔。所提供的值必須符合日誌檔中顯示的值。",

		admin_office_settings_logging_instructions: "可以使用記載來對 IBM Content Navigator for Microsoft Office 問題進行疑難排解。如果知道特定類別或者特定使用者發生問題，則可以改進記載。錯誤資訊會寫入 IBM Content Navigator for Microsoft Office 用戶端主機上的應用程式日誌檔。",
		admin_office_settings_logging_instructions2: "<b>除錯記載設定</b><br />如果知道特定用戶端主機或 IBM Content Navigator for Microsoft Office 使用者發生問題，則可以將除錯記載目標鎖定為該機器或使用者。可以在正式作業環境中擷取除錯資訊，且系統效能不會受到太大影響。<br /><br /><b>重要事項：</b>如果指定用戶端主機或使用者，則此設定會置換任何其他記載設定。擷取所需資訊後，將此選項設為<b>無</b>，可以回復 IBM Content Navigator for Microsoft Office 環境的標準記載。",
		admin_office_logging_debug_hover: "<b>重要事項：</b>在您指定用戶端主機 IP 位址或使用者之前，請先檢閱用戶端機器日誌檔。所提供的值必須符合日誌檔中顯示的值。",
		admin_office_logging: "Office 記載",
		admin_office_logging_classes: "類別層次的記載：",
		admin_office_logging_classes_hover: "依預設，所有類別及套件都會併到 IBM Content Navigator for Microsoft Office 錯誤日誌中。然而，您可以指定要在記載中併入或排除的類別或套件。可以使用用戶端機器日誌來判定要併入或排除的類別。<br /><br />如果知道特定類別發生問題，則可以明確地將該類別併到日誌檔中。如果將類別併到錯誤日誌中，則會將所有其他類別都從日誌檔中排除。<br /><br />如果知道類別沒有發生問題，但想要縮減日誌檔的大小，則可以將該類別從日誌檔中排除。",
		admin_office_logging_debug_hover: "<b>重要事項：</b>在您指定用戶端主機 IP 位址或使用者之前，請先檢閱用戶端機器日誌檔。所提供的值必須符合日誌檔中顯示的值。",
		admin_office_logging_additional_settings: "其他設定：",
		admin_office_logging_additional_settings_hover: "指定其他設定",
		admin_office_logging_file_size: "日誌檔大小",
		admin_office_logging_file_size_hover: "指定 IBM Content Navigator for Microsoft Office 據以建立新日誌檔的大小。當日誌檔達到大小上限時，現行日誌會重新命名以包含日期（格式為 YYYYMMdd）及檔案增量號碼（例如 ICNExcelAddin-20121116-5.log），並建立新的日誌檔。",
		admin_office_logging_show_stacktrace_on_dialogs: "在對話框上顯示堆疊追蹤",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "可以選擇性地在訊息對話框上顯示堆疊追蹤資訊，以方便解決問題。即使沒有啟用此選項，也一律將詳細堆疊追蹤資訊併到 IBM Content Navigator for Microsoft Office 錯誤日誌中。",

		admin_icon_state_twisty: "狀態圖示",
		admin_icon_state_icon: "狀態圖示",
		admin_icon_state: "狀態",
		state_contains_label: "狀態包含",
		admin_icon_state_instructions: "您可以自訂顯示在儲存庫中之文件、資料夾和工作項目旁的圖示。<br><br><b>提示：</b>您可以指定是否要顯示您環境中之每一個儲存庫的狀態圖示。",
		admin_icon_state_dialog_title: "狀態圖示對映",
		admin_icon_state_dialog_instructions: "您可以將所選狀態對映至 Web 用戶端提供的預先定義圖示或對映至自訂圖示。",

		admin_icon_mapping_twisty: "MIME 類型圖示",
		admin_icon_mapping_dialog_title: "圖示對映",
		admin_icon_mapping: "圖示對映",
		admin_icon_mapping_instructions: "您可以將 MIME 類型清單對映至 Web 用戶端提供之預先定義的圖示，或是對映至自訂圖示。",
		admin_icon_mapping_list_instructions: "您可以自訂儲存在儲存庫中不同 MIME 類型所顯示的圖示。Web 用戶端在使用圖示時，會依照其列出順序來使用。如果某個 MIME 類型列出多次，則會使用與該 MIME 類型相關聯的第一個圖示。",
		admin_icon_mapping_icon_label: "您要使用哪一個圖示？",
		admin_icon_mapping_file_name: "自訂圖示：",
		admin_icon_mapping_file_name_heading: "自訂圖示",
		admin_icon_mapping_file_name_placeholder: "指定圖示的 URL",
		admin_icon_mapping_file_name_hover: "請輸入圖示的 URL。如果圖示位於和 Web 用戶端相同的 Web 應用程式伺服器上，請輸入相對 URL。例如 /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "預先定義的圖示：",
		admin_icon_mapping_class_name_heading: "預先定義的圖示",
		admin_icon_mapping_class_name_hover: "選取 Web 用戶端提供的圖示。",
		admin_icon_mapping_class_name_placeholder: "選取圖示",

		admin_p8_instructions: "所有配置給此 Web 用戶端的 FileNet Content Manager 儲存庫都會共用此資訊。",
		admin_p8_collaboration_config: "選用的 FileNet Collaboration Services 配置",
		admin_p8_collaboration_config_instructions: "如果要調整用於 IBM FileNet P8 環境的 FileNet Collaboration Services，則可以配置這些參數。",
		admin_p8_use_url_incoming: "使用送入要求上的 URL 來產生回應 URL：",
		admin_p8_use_url_incoming_hover: "在大多數 FileNet Collaboration Services 環境中，可以使用送入要求的 URL，在回應中產生 URL。除非下列其中一種狀況適用於環境，否則，請選取<b>是</b>：<ul><li>您想要強制用戶端應用程式透過特定 URL 來存取 FileNet Collaboration Services。<li>Proxy 伺服器設定會造成 FileNet Collaboration Services 產生無效的 URL。</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL：",
		admin_p8_use_url_incoming_http_hover: "指定 URL，用戶端應用程式可以透過此 URL，以 http://FNCSserver:port_number 形式，取 FileNet Collaboration Services。",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL：",
		admin_p8_use_url_incoming_https_hover: "如果 FileNet Collaboration Services 已配置成使用 SSL，請指定 HTTPS URL，用戶端應用程式可以透過此 URL，以 https://FNCSserver:port_number 形式，存取 FileNet Collaboration Services。",
		admin_p8_hide_email_addresses: "不在伺服器回應中顯示使用者電子郵件位址：",
		admin_p8_hide_email_addresses_hover: "如果需要符合隱私權原則，則可以不在伺服器回應中顯示使用者的電子郵件位址。例如，您可以在伺服器傳回文件清單及使用者（建立或編輯文件）的相關資訊時，隱藏使用者電子郵件位址清單。",

		admin_p8_mask_user_ids: "不在日誌檔中顯示使用者 ID：",
		admin_p8_mask_user_ids_hover: "如果需要符合隱私權原則，則可以不在 FileNet Collaboration Services 日誌檔中顯示使用者名稱。如果啟用此選項，則使用者名稱會取代為雜湊值。這可讓您提供日誌檔給外部公司（例如 IBM），以便取得支援，而不會洩露使用者的名稱或活動記錄。",

		admin_p8_soft_delete: "將刪除的檔案移至復原筒：",
		admin_p8_soft_delete_hover: "使用者刪除項目時，會將項目移至復原筒，而不是將項目從儲存庫中刪除。項目會保留在復原筒中，直到清除為止。如果目標儲存庫不支援復原筒，則會忽略此設定。<br><br><b>限制：</b>IBM FileNet P8 5.2 版或更新版本支援復原筒，並且復原筒需要 Social Collaboration Base Extensions 附加程式。",

		admin_p8_download: "內容下載 HTTP 快取配置",
		admin_p8_download_instructions: "如果 IBM FileNet Content Manager 儲存庫包含許多大型檔案，則可以配置「內容下載 HTTP 快取 (CDHC)」來啟用 FileNet Collaboration Services，以安全地將大型檔案內容要求重新導向至專用 Web 伺服器。<br/><br/>此特性需要 IBM HTTP Server。此外，也必須更新 IBM HTTP Server httpd.conf 檔。",
		admin_p8_download_cache: "內容下載 HTTP 快取：",
		admin_p8_download_cache_hover: "指定是否要對環境中的所有 IBM FileNet Content Manager 儲存庫啟用「內容下載 HTTP 快取 (CDHC)」。可以指定據以快取檔案的檔案大小下限。",
		admin_p8_download_cache_folder: "完整快取目錄：",
		admin_p8_download_cache_folder_hover: "指定要在其中儲存快取檔的目錄完整路徑。此目錄可以位在任何作業系統或裝置（例如共用網路目錄）上，只要 FileNet Collaboration Services 及 IBM HTTP Server 可以看見它是檔案系統。",
		admin_p8_download_cache_url: "快取位置的別名：",
		admin_p8_download_cache_url_hover: "指定用來從 FileNet Collaboration Services URL 指向快取目錄的別名。以格式 /alias 指定別名，例如 /cdhc。<br/><br/>如果在 URL 中併入 /cdhc，則會將應用程式重新導向至完整快取目錄。",
		admin_p8_download_cache_max_files: "快取檔數目上限：",
		admin_p8_download_cache_max_files_hover: "達到檔案數目上限時，會將最舊的檔案從快取中移除。<br><br>如果指定要快取的檔案數目上限，及快取的大小上限，則當符合兩個條件中較小的那個條件時，就會將最舊的檔案從快取中移除。",
		admin_p8_download_cache_max_size: "快取記憶體大小上限 (GB)：",
		admin_p8_download_cache_max_size_hover: "達到快取記憶體大小上限時，會將最舊的檔案從快取中移除。<br/><br/>如果指定要快取的檔案數目上限，及快取的大小上限，則當符合兩個條件中較小的那個條件時，就會將最舊的檔案從快取中移除。",
		admin_p8_download_cache_cleanup_duration: "清理持續時間上限（以秒為單位）：",
		admin_p8_download_cache_cleanup_duration_hover: "指定清理作業可能需要的時間量上限。預設持續時間為 5 秒。<br><br>任何必須刪除，但在清理作業後仍保留在快取中的檔案，都將在未來的清理作業期間移除。",
		admin_p8_download_cache_cleanup_min: "快取清理作業之間的間隔下限（以秒為單位）：",
		admin_p8_download_cache_cleanup_min_hover: "指定快取清理作業之間應該經歷的時間量下限。預設時間為 3,600 秒（1 小時）。<br><br>只有在具有從快取下載內容的作用中要求時，才會進行快取清理作業。如果每分鐘都有要求送入，則將每小時執行清理作業一次。然而，如果下載要求之間經歷了三個小時，則將不會執行清理作業，除非收到下一個下載要求。",
		admin_p8_download_cache_min_lifetime: "保留在快取中的時間下限（以秒為單位）：",
		admin_p8_download_cache_min_lifetime_hover: "指定檔案在可以移除之前保留在快取中的時間量下限。預設時間為 3,600 秒（1 小時）。<br><br>即使快取達到了大小上限或者包含的檔案達到數目上限，快取中的最舊檔案也無法刪除，直到檔案在快取中的保留時間達到了所指定的時間量為止。",
		admin_p8_download_cache_size_threshold: "要快取的檔案大小下限 (KB)：",
		admin_p8_download_cache_size_threshold_hover: "指定大小下限，應該使用 CDHC，根據此值來快取檔案。如果檔案小於所指定的大小，則會透過在其中部署了 FileNet Collaboration Services 的 Web 應用程式伺服器，來導引此檔案。預設大小為 1,000 KB。",
		admin_p8_download_guard_header: "用於閘道管理的 HTTP 標頭：",
		admin_p8_download_guard_header_hover: "如果用戶端應用程式沒有透過 IBM HTTP Server 來遞送要求，則無法下載快取內容。可以指定只有含特定 HTTP 標頭（IBM HTTP Server 發出的要求中會新增此標頭）的送入要求，才能存取快取內容以防止下載失敗。<br><br>HTTP 標頭是在 IBM HTTP Server 中配置，並且存在於透過 IBM HTTP Server 進行遞送的所有送入要求上。如果要求不具有 HTTP 標頭，則會透過 Web 應用程式伺服器（而不是 IBM HTTP Server）來遞送內容。",
		admin_p8_download_generate_config: "產生配置",
		admin_p8_download_generate_config_label: "IBM HTTP Server 配置：",
		admin_p8_download_generate_config_label_hover: "如果要使 CHDC 配置運作，則必須更新 IBM HTTP Server httpd.conf 檔。按一下「產生配置」以產生必須新增至 httpd.conf 檔的陳述式。",

		admin_logging_viewone_pro: "ViewONE Professional 記載：",
		admin_logging_viewone_virtual: "ViewONE Virtual 記載：",
		admin_logging_viewone_streamer: "Document Streaming Server Module 記載：",
		admin_logging_viewone_streamer_hover: "僅當您已在管理工具的 <b>Daeja ViewONE</b> 區段中針對 PDF 或 TIFF 檔案啟用多媒體串流時，Document Streaming Server Module 記載選項才適用。",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module 記載：",
		admin_logging_viewone_redaction_hover: "僅當您獲得使用 Daeja ViewONE Professional 之 Redaction 模組的授權時，Permanent Redaction Server Module 記載選項才適用。",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "以串流方式傳送 PDF 檔：",
		admin_daeja_viewonepro_stream_pdf_hover_help: "如果儲存庫中具有大型 PDF 文件，則可以容許檢視器以串流方式傳送文件內容，讓使用者可以更快地檢視這些文件。然而，如果無法在環境中以串流方式進行傳送，則可以停用串流。",
		admin_daeja_viewonepro_stream_tiff_documents: "以串流方式傳送 TIFF 檔：",
		admin_daeja_viewonepro_stream_tiff_hover_help: "如果儲存庫中具有大型 TIFF 文件，則可以容許檢視器以串流方式傳送文件內容，讓使用者可以更快地檢視這些文件。然而，如果無法在環境中以串流方式進行傳送，則可以停用串流。",
		admin_daeja_viewonepro_show_file_buttons: "檔案按鈕",
		admin_daeja_viewonepro_show_file_menus: "檔案功能表",
		admin_daeja_viewonepro_enable_file_keys: "檔案快速鍵",
		admin_daeja_viewonepro_file_keys_hover_help: "指定您是否希望使用者使用鍵盤快速鍵來使用檔案，例如，開啟或儲存檔案。如需特定快速鍵的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual 中的 FileKeys 參數說明。",
		admin_daeja_viewonepro_show_print_buttons: "列印按鈕",
		admin_daeja_viewonepro_show_print_menus: "列印功能表",
		admin_daeja_viewonepro_enable_print_keys: "列印快速鍵",
		admin_daeja_viewonepro_print_keys_hover_help: "指定您是否希望使用者使用鍵盤快速鍵來列印檔案，例如，列印頁面或列印文件。如需特定快速鍵的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual 中的 PrintKeys 參數說明。",
		admin_daeja_viewonepro_show_invert_buttons: "反轉按鈕",
		admin_daeja_viewonepro_annotation_tooltip: "預設自訂註釋工具提示：",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "輸入在沒有為自訂註釋指定工具提示時要顯示的文字。文字可以包括可取代記號。例如，在&quot;&lt;僅建立日期&gt; 上建立 &lt;建立者&gt;&quot;注釋。如需可取代記號的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual 中的 customAnnotationsToolTip 參數。",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "使用預先定義的自訂工具提示",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "使用下面文字框中顯示的系統定義自訂工具提示",
		admin_daeja_viewonepro_help_url: "說明 URL：",
		admin_daeja_viewonepro_help_url_hover_help: "指定包含檢視器說明文件之網頁的 URL。檢視器工具列上的說明按鈕與說明功能表動作會開啟該網頁。如果您不指定 URL，則不會顯示說明按鈕和功能表動作。",
		admin_daeja_viewonepro_image_stamp_resource_context: "影像戳記資源環境定義：",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "待辦事項",
		admin_daeja_viewonepro_route_docs: "將不受支援的內容路由至瀏覽器：",
		admin_daeja_viewonepro_route_docs_hover_help: "使用者可以檢視不受支援的影像檔案，方法是將這些檔案遞送至瀏覽器，瀏覽器會開啟用於檢視該檔案的適當應用程式。例如，為了開啟 Microsoft Word 文件，瀏覽器會使用 Microsoft Word 檢視器。",
		admin_daeja_viewonepro_scale: "自動調整影像：",
		admin_daeja_viewonepro_scale_best: "最適縮放比",
		admin_daeja_viewonepro_scale_ftow: "符合寬度",
		admin_daeja_viewonepro_scale_ftoh: "符合高度",
		admin_daeja_viewonepro_enable_hotkeys: "啟用快速鍵：",
		admin_daeja_viewonepro_show_features: "顯示按鈕和功能表：",
		admin_daeja_custom_settings: "其他設定：",
		admin_daeja_custom_settings_hover_help: "透過指定參數名稱及值，您可以新增其他參數。例如，如果您希望在將影像放大到大於顯示區域的大小時顯示捲軸，則可以指定 &quot;scrollbars&quot; 和 &quot;true&quot;。如需參數名稱及值的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual。",
		admin_daeja_virtual: "虛擬",
		admin_daeja_virtual_annotation_tooltip: "預設自訂註釋工具提示：",
		admin_daeja_virtual_annotation_tooltip_hover_help: "輸入在沒有為自訂註釋指定工具提示時要顯示的文字。文字可以包括可取代記號。例如，在&quot;&lt;僅建立日期&gt; 上建立 &lt;建立者&gt;&quot;注釋。如需可取代記號的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual 中的 customAnnotationsToolTip 參數。",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "使用預先定義的自訂工具提示",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "使用下面文字框中顯示的系統定義自訂工具提示",
		admin_daeja_virtual_image_stamp_resource_context: "影像戳記資源環境定義：",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "待辦事項",
		admin_daeja_virtual_license_path:"授權檔路徑：",
		admin_daeja_virtual_license_path_hover_help:"指定包含 lic-server-virtual.v1 與 lic-server.v1 授權檔案之目錄的完整路徑。",
		admin_default_license_path:"使用預設授權檔案路徑",
		admin_license_path_specified:"使用自訂授權檔案路徑",

		admin_daeja_streamer: "伺服器",
		admin_daeja_streamer_cache_root: "快取目錄：",
		admin_daeja_streamer_cache_root_hover_help: "指定要在其中儲存快取檔從而加快存取速度的目錄完整路徑。此目錄可以位在任何作業系統或裝置（例如網路目錄）上，只要 IBM Content Navigator 及 IBM HTTP Server 可以看見它是檔案系統。使用本端目錄可改良效能。",
		admin_daeja_streamer_settings: "其他設定：",
		admin_daeja_streamer_settings_hover_help: "透過指定參數名稱及值，您可以新增其他參數。例如，您可以指定 “cookieAllowedDomainList” 以及以逗點區隔的主伺服器清單。如需參數名稱及值的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual。",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "設定：",
		admin_daeja_redaction_settings_hover_help: "透過指定參數名稱及值，您可以新增其他參數。例如，您可以指定 “burnIncrementalAnnotations” 及 “true”。如需參數名稱及值的相關資訊，請參閱 IBM Daeja ViewONE Parameters Reference Manual。",

		admin_daeja_setting_dialog_title_new: "新建設定",
		admin_daeja_setting_dialog_title_edit: "編輯設定",
		admin_daeja_setting_dialog_hover_help: "透過指定參數名稱及值新增其他參數。例如，如果您希望在將影像放大到大於顯示區域的大小時顯示捲軸，則可以指定 “scrollbars” 和 “true”。",
		admin_daeja_setting_dialog_field_hover_help: "如需參數名稱及值的相關資訊，請參閱 Daeja ViewONE Parameter Reference Manual。",

		admin_daeja_logging: "Daeja ViewONE 記載",
		admin_daeja_logging_trace: "啟用追蹤記載",
		admin_daeja_logging_trace_net: "啟用網路記載",
		admin_daeja_logging_trace_annotations: "啟用註釋記載",
		admin_daeja_logging_log_file: "日誌檔：",
		admin_daeja_logging_instructions: "可以使用記載來對 Daeja ViewONE Professional 及 Daeja ViewONE Virtual 問題進行疑難排解。如果知道特定特性發生問題，則可以將記載目標鎖定為該特性。",

		admin_v1pro_logging_trace_hover: "使用此設定來對檢視器一般問題進行疑難排解。<br><br>記載資訊會寫入用戶端機器上的 Java 主控台。您可以從作業系統的「控制台」(Windows) 或「系統偏好」(Mac) 存取 Java 主控台。",
		admin_v1pro_logging_trace_net_hover: "使用此設定對下列問題進行疑難排解：<ul><li>伺服器連線問題</li><li>MIME 類型問題</li><li>檔案太長問題</li></ul>此外，您可以使用網路追蹤記載來判斷使用 Daeja ViewONE Professional 時在何處發生了延遲。<br><br>記載資訊會寫入用戶端機器上的 Java 主控台。您可以從作業系統的「控制台」(Windows) 或「系統偏好」(Mac) 存取 Java 主控台。",
		admin_v1pro_logging_trace_annotations_hover: "使用此設定來對建立、儲存或載入註釋的問題進行疑難排解。<br><br>記載資訊會寫入用戶端機器上的 Java 主控台。您可以從作業系統的「控制台」(Windows) 或「系統偏好」(Mac) 存取 Java 主控台。",

		admin_virtual_logging_trace_hover: "使用此設定來對檢視器一般問題進行疑難排解。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 virtual.log 檔中。",
		admin_virtual_logging_trace_net_hover: "使用此設定對下列問題進行疑難排解：<ul><li>伺服器連線問題</li><li>MIME 類型問題</li><li>檔案太長問題</li></ul>此外，您可以使用網路追蹤記載來判斷使用 Daeja ViewONE Virtual 時在何處發生了延遲。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 virtual.log 檔中。",
		admin_virtual_logging_trace_annotations_hover: "使用此設定來對建立、儲存或載入註釋的問題進行疑難排解。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 virtual.log 檔中。",
		admin_virtual_logging_log_file_hover: "如果您要對檢視器啟用記載功能，則必須指定在其中儲存記載資訊的日誌檔的完整路徑和名稱。建議將日誌檔命名為 virtual.log。",

		admin_streamer_logging_trace_hover: "使用此設定來對 Document Streaming Server Module 一般問題進行疑難排解。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 streamer.log 檔中。",
		admin_streamer_logging_trace_net_hover: "使用此設定對下列問題進行疑難排解：<ul><li>伺服器連線問題</li><li>特定 MIME 類型問題</li><li>檔案太長問題</li></ul>此外，您可以使用網路追蹤記載來判斷使用 Document Streaming Server Module 時在何處發生了延遲。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 streamer.log 檔中。",
		admin_streamer_logging_log_file_hover: "如果您要對 Document Streaming Server Module 啟用記載功能，則必須指定在其中儲存記載資訊的日誌檔的完整路徑和名稱。建議將日誌檔命名為 streamer.log。",

		admin_redaction_logging_trace_hover: "使用此設定來對 Permanent Redaction Server Module 一般問題進行疑難排解。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 redacttofile.log 檔中。",
		admin_redaction_logging_trace_net_hover: "使用此設定對下列問題進行疑難排解：<ul><li>伺服器連線問題</li><li>特定 MIME 類型問題</li><li>檔案太長問題</li></ul>此外，您可以使用網路追蹤記載來判斷使用 Permanent Redaction Server Module 時在何處發生了延遲。<br><br>依預設，記載資訊會寫入 IBM Content Navigator 安裝目錄之 config 子目錄下的 redacttofile.log 檔中。",
		admin_redaction_logging_log_file_hover: "如果您要對 Permanent Redaction Server Module 啟用記載功能，則必須指定在其中儲存記載資訊的日誌檔的完整路徑和名稱。建議將日誌檔命名為 redacttofile.log。",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "配置檢視器及服務的特性。",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "如果您使用 Web 用戶端來連接一或多個 Content Manager OnDemand 儲存庫，您必須指定 OnDemand Web Enablement Kit 運作正確所需的資訊。配置給 Web 用戶端的所有 Content Manager OnDemand 儲存庫會共用這項資訊。",
		admin_ondemand_language: "語言：",
		admin_ondemand_tempdir: "ODWEK 暫存目錄：",
		admin_ondemand_tracegrp: "ODWEK 追蹤",
		admin_ondemand_tracedir: "追蹤目錄：",
		admin_ondemand_tracelevel: "追蹤層次：",
		admin_ondemand_tracelevel_0: "0 - 不記載",
		admin_ondemand_tracelevel_1: "1 - 記載錯誤訊息",
		admin_ondemand_tracelevel_2: "2 - 記載錯誤和警告訊息",
		admin_ondemand_tracelevel_3: "3 - 記載錯誤、警告和參考訊息",
		admin_ondemand_tracelevel_4: "4 - 擷取所有訊息，包括功能追蹤",
		admin_ondemand_max_trace_filesize: "追蹤檔大小上限：",
		admin_ondemand_max_trace_filesize_unlimited: "無限制",
		admin_ondemand_max_trace_filesize_limited: "限制（建議）",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "此值超出範圍。此值必須是 1 到 1,000,000 之間的整數。",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF 安裝目錄：",
		admin_ondemand_language_hover: "指定 ODWEK 傳回訊息時所用的語言。",
		admin_ondemand_tempdir_hover: "輸入 OnDemand Web Enablement Kit 在處理期間用來儲存暫存檔的目錄。您必須輸入 Web 應用程式伺服器上現有目錄的完整路徑。",
		admin_ondemand_tracedir_hover: "輸入要用來儲存 ODWEK 追蹤檔 arswww.trace 的目錄。您必須輸入 Web 應用程式伺服器上現有目錄的完整路徑。",
		admin_ondemand_tracelevel_hover: "指定寫入 arswww.trace 檔的記載資訊層次。<b>錯誤訊息記載</b>會擷取最少數量的記載資訊。<b>擷取所有訊息，包括功能追蹤</b>會擷取最多的資訊。<br /><br />除非有「IBM 軟體支援中心」的指示，否則在正式作業環境中，請勿指定<b>擷取所有訊息，包括功能追蹤</b>。",
		admin_ondemand_max_trace_filesize_hover: "指定您是否要讓 ODWEK 追蹤檔無限制增長，或者要在日誌檔抵達某大小時，讓 Web 用戶端建立新的日誌檔。預設值是讓追蹤日誌檔增長到 Web 應用程式在 Web 應用程式伺服器上停止為止。",
		admin_ondemand_max_trace_unlimited_hover: "如果您想將所有 ODWEK 追蹤資訊寫入至單一日誌檔，請選取此選項。如果您選取此選項，您的日誌檔可能大到無法用標準檔案檢視器來開啟。",
		admin_ondemand_max_trace_limited_hover: "如果您想將 ODWEK 追蹤資訊寫入至較小的日誌檔，請選取此選項。一旦日誌檔抵達大小上限，就會重新命名現行日誌以包含日期 (arswww.trace.YYYYMMDD.HHMMSS)，並且建立新的日誌檔。",
		admin_ondemand_afp2pdf_installdir_hover: "如果您想使用「AFP2PDF 轉換」公用程式，將 AFP 文件轉換為 PDF 文件來檢視和列印，請指定「AFP2PDF 轉換」公用程式在 Web 應用程式伺服器上的安裝目錄。例如：C:\\Program Files\\IBM\\AFP2web\\afp2pdf",

		admin_adminusers: "管理者",
		admin_adminusers_heading_text_multi: "您必須指定哪些使用者在 Web 用戶端中具備管理專用權。只有管理者可以登入管理桌面。<br /><br /><b>重要事項：</b>IBM Content Navigator 管理者的使用者 ID 必須符合：<ul><li>存在於 Web 應用程式伺服器上的使用者 ID。使用者 ID 未必是 Web 應用程式伺服器上的管理者。</li><li>存在於配置給包含「管理」特性之每一個桌面的預設儲存庫上的使用者 ID。</li></ul>",
		admin_adminusers_heading_text_single: "您必須指定哪些使用者在 Web 用戶端中具備管理專用權。只有管理者可以登入管理桌面。<br /><br /><b>重要事項：</b>IBM Content Navigator 管理者的使用者 ID 必須符合存在於您 Web 應用程式伺服器上的使用者 ID。使用者 ID 未必是 Web 應用程式伺服器上的管理者。",
		admin_adminusers_newuser: "新建管理者：",
		admin_adminusers_add: "新增",
		admin_adminusers_remove: "移除",
		admin_adminusers_listheading: "管理者",
		admin_adminusers_nameInvalid: "值不能重複。",

		admin_sync_server_instructions: "<b>僅限 FileNet P8 使用者：</b>如果您打算針對一個以上儲存庫啟用同步服務，則必須將 Web 用戶端配置為使用同步服務。同步服務配置由環境中的所有儲存庫共用。",
		admin_settings_instructions: "您在「設定」標籤上指定的值，會套用至您配置中的所有桌面。",
		admin_autocomplete: "自動移入使用者名稱：",
		admin_autocomplete_hover: "指定 Web 用戶端是否要將使用者名稱儲存在瀏覽器 Cookie 中，以便在登入期間，讓瀏覽器自動將使用者名稱移入至 Web 用戶端。<br><br>如果您啟用此選項，則會將前次登入 Web 用戶端的使用者的使用者名稱儲存在瀏覽器 Cookie 中，並在使用者開啟 Web 用戶端時，將該使用者名稱自動顯示在「登入」頁面上。<br><br>如果是從共用工作站存取應用程式，或者您不放心將使用者名稱儲存在瀏覽器 Cookie 中，則應停用此選項。<br /><br />此選項不適用於行動式或自訂應用程式。",
		admin_autocomplete_enable: "啟用",
		admin_autocomplete_disable: "停用",
		admin_cultural_collation: "使用語言環境特定的排序：",
		admin_cultural_collation_hover: "如果您啟用語言環境特定的排序，則會對儲存庫伺服器進行排序。如此可能降低 Web 用戶端的效能。<br><br>停用語言環境特定的排序，可以增強 Web 用戶端的效能。",
		admin_cultural_collation_enable: "啟用",
		admin_cultural_collation_disable: "停用",
		admin_base_ui_style: "佈景主題樣式",
		admin_base_ui_style_hover: "指定 Web 用戶端中使用的預設佈景主題的樣式。此樣式僅在使用<b>預設</b>佈景主題（如桌面配置的<b>外觀</b>標籤指定）的桌面上使用。<br/></br><b>限制：</b>如果您的桌面配置使用自訂佈景主題，則該自訂佈景主題將基於經典樣式，無論您選取何種樣式都是如此。",
		admin_base_ui_style_classic: "經典",
		admin_access_control_access: "限制存取指定使用者和群組",
		admin_access_control_access_show: "顯示存取控制資料",
		admin_access_control_access_enable: "是",
		admin_access_control_access_disable: "否",
		admin_mobile_access: "容許從行動式應用程式存取",
		admin_mobile_access_hover: "依預設，使用者可以從 IBM Content Navigator iOS 應用程式來存取 Web 用戶端。<br /><br /><b>重要事項：</b>如果您阻止使用者從 iOS 應用程式來存取 Web 用戶端，使用者仍可以從其行動式裝置上的 Web 瀏覽器，以及從使用 IBM Content Navigator API 所撰寫以及在行動式裝置上運作的任何自訂應用程式，來存取 Web 用戶端。",
		admin_mobile_access_enable: "是",
		admin_mobile_access_disable: "否",
		admin_error: "錯誤訊息資訊：",
		admin_error_custom: "搜尋自訂支援內容",
		admin_error_default: "搜尋「IBM 支援中心」內容<BDO DIR='LTR'>（</BDO>預設值<BDO DIR='LTR'>）</BDO>",
		admin_error_hover: "指定當使用者遇到錯誤訊息時，要將使用者引導至何處，以取得相關資訊。可以將使用者導引至「IBM 支援中心入口網站」上的資訊，也可以將使用者導引至內部資源，例如服務台。",
		admin_error_URL: "URL 字首：",
		admin_error_URL_hover: "輸入當使用者遇到錯誤時，要引導使用者前往之資源（例如服務台）的 URL。例如：http://localhost:port_number。Web 用戶端會在 URL 中附加訊息號碼。",
		admin_prompt_close_without_save: "您是否想要關閉而不儲存變更？",
		admin_object_expiration_time: "快取更新間隔（分鐘）：",
		admin_object_expiration_time_hover: "您可以增加配置物件（例如桌面）在快取中保存的時間量，以提高 Web 用戶端的效能。預設時間為 10 分鐘。時間上限為 1440 分鐘（1 天）。<br /><br />您必須重新啟動 Web 應用程式伺服器，變更才會生效。<br /><br />IBM Content Navigator 部署在高可用叢集環境中，在快取更新之前，不會將配置物件的任何變更延伸到叢集中的節點。",
		admin_temp_file_cleanup_interval: "用於清除檢視器快取的掃描間隔（以小時為單位）：",
		admin_temp_file_cleanup_interval_hover: "排程掃描暫存目錄以尋找和刪除已過期暫存檔的頻率。依預設，每 6 個小時掃描一次暫存目錄。您可以指定 6-48 小時。",
		admin_temp_file_expiration_interval: "檢視器快取到期時間（以小時為單位）：",
		admin_temp_file_expiration_interval_hover: "指定與檢視器中的活動相關之暫存檔保留在瀏覽器快取中的時間量。依預設，這些暫存檔會在 24 小時之後到期。您可以指定 12-48 小時。",
		admin_encryption_key_hover: "用於導覽器加密功能的金鑰。",
		admin_encryption_key: "加密金鑰：",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "品牌行銷",
		admin_mobile_branding_main_color: "主要顏色：",
		admin_mobile_branding_secondary_color: "次要顏色：",
		admin_mobile_device_title: "MaaS360 管理",
		admin_mobile_device_enable_maas360: "啟用 MaaS360：",
		admin_mobile_device_enable_maas360_hover_help: "這裡提供啟用 MaaS360 浮動說明",
		admin_mobile_device_maas360_developer_id: "MaaS360 開發者 ID：",
		admin_mobile_device_maas360_license_key: "MaaS360 授權碼：",
		admin_mobile_settings_title: "設定",
		admin_mobile_email_address_hover_help: "當使用者按一下「傳送錯誤報告」時，在行動式應用程式中使用的電子郵件位址。",
		admin_mobile_email_address: "電子郵件位址：",
		admin_invalid_email_address_message: "您輸入的電子郵件位址格式不正確。請輸入正確的位址，然後再試一次。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "部分資料無效。",
		admin_configuration_parameters: "配置參數",
		admin_configuration_optional_features: "選用性功能",
		admin_configuration_optional_features_p8_instructions: "選取要在此儲存庫上啟用的特性。<p><b>重要事項：</b>如果您啟用會將附加程式安裝至儲存庫的特性，則您必須以 Content Platform Engine 或 Content Engine 管理者的身分連接至儲存庫。</p>",
		admin_configuration_optional_features_cm_instructions: "選取要在此儲存庫上啟用的特性。<p><b>重要事項：</b>這些特性會修改儲存庫上的資料模型。若要啟用這些特性，您必須以檔案庫伺服器管理者的身分連接至儲存庫。</p>",
		admin_system_properties: "系統內容",
		admin_system_properties_for: "系統內容用於：",
		admin_available_properties: "可用的內容",
		admin_displayed_properties: "顯示的內容",
		admin_selected_properties: "選取的內容",
		admin_selected_filtered_properties: "隱藏的內容",
		admin_available_operators: "顯示的運算子",
		admin_selected_filtered_operators: "隱藏的運算子",
		admin_system_properties_shown: "顯示的內容",
		admin_system_properties_hidden: "隱藏的內容",
		admin_available_menu_items: "可用的動作：",
		admin_selected_menu_items: "選取的動作：",
		admin_menu_global: "在沒有選取任何項目時套用：",
		admin_menu_multiple_document: "在選取多個項目時套用：",
		admin_menu_privileges: "必要的專用權：",
		admin_menu_plugin: "外掛程式：",
		admin_menu_repository_types: "儲存庫類型：",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "分隔字元",
		admin_browse: "瀏覽",
		admin_search: "搜尋",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "角色型修訂",
		admin_connections_library_enabled: "已啟用 IBM Connections",
		admin_office_conf: "編輯整合",
		admin_desktop_conf_label: "桌面配置",
		admin_ms_office_conf_label: "Office 配置",
		admin_workflows: "工作流程",
		admin_file_types: "檔案類型",
		admin_file_type_contains_label: "檔案類型包含",
		admin_name_propepty: "名稱",
		admin_cm_name_property_default: "使用預設名稱",
		admin_cm_name_property_default_hover: "依預設，以 ICM 階層式名稱 (ICM$NAME) 內容做為項目名稱（如果此內容是針對此項目而定義）。如果 ICM 階層式名稱 (ICM$NAME) 內容無法使用，將以標示為 \"represents\" 的第一個內容做為項目名稱。",
		admin_cm_name_property: "指定項目名稱內容",
		admin_cm_name_property_hover: "指定用來做為文件和資料夾名稱的內容。",
		admin_name_property: "名稱內容：",
		admin_doc_name_property: "文件名稱內容：",
		admin_doc_name_property_hover: "指定要作為文件名稱的內容。",
		admin_folder_name_property: "資料夾名稱內容：",
		admin_folder_name_property_hover: "指定要作為資料夾名稱的內容。",
		admin_all_searches_label: "要顯示的搜尋數目：",
		admin_unlimited: "沒有限制",
		admin_limit: "限制至",
		admin_repository: "儲存庫：",
		admin_application_space: "應用程式空間",
		admin_available_application_spaces: "可用的應用程式空間：",
		admin_selected_application_spaces: "選取的應用程式空間：",
		admin_label: "標籤",
		admin_repository_box_placeholder: "選取 Box 儲存庫",
		admin_repository_placeholder: "選取儲存庫",
		admin_search_match: "符合：",
		admin_search_match_all: "符合所有搜尋準則",
		admin_search_match_any: "符合任何搜尋準則",
		admin_search_match_hover: "在<b>內容選項</b>功能表中指定依預設會選取的選項。",

		admin_repository_redactions_instructions: "您可以為此儲存庫配置角色型修訂。",
		admin_repository_redaction_policies_description: "您可以建立和管理修訂原則，這些修訂原則會將修訂原因與可以讀取機密資料且可以編輯註釋（用來保護機密資料以免於檢視）的使用者和群組建立關聯。",
		admin_repository_redaction_roles_instruction: "您可以建立修訂角色，以將指定的使用者和群組與讀取機密資料的能力建立關聯，或者與編輯註釋（用來保護機密資料以免於檢視）的能力建立關聯。修訂角色必須先與修訂原則中的修訂原因相關聯，然後使用者和群組才可以讀取資料或編輯註釋。",
		admin_repository_redaction_reasons_instruction: "您可以為儲存庫配置修訂原因。",
		admin_repository_redaction_policies: "修訂原則配置",
		admin_repository_redaction_roles: "修訂角色配置",
		admin_repository_redaction_reasons: "修訂原因配置",
		admin_repository_redaction_roles_type: "類型",
		admin_repository_redaction_roles_type_hover: "編輯者可以建立、修改或刪除特定類型的角色型修訂，而檢視者則可以檢視特定類型的機密資料。",
		admin_repository_redaction_roles_type_editor: "編輯者",
		admin_repository_redaction_roles_type_viewer: "檢視器",
		admin_repository_redaction_roles_membership: "成員資格",
		admin_repository_redaction_roles_membership_hover: "選取您要讓其具有此角色的編輯者。",
		admin_repository_redaction_roles_user_group_hover: "搜尋您要讓其具有此角色的使用者和群組，或者選取您要讓其具有此角色的編輯者。",
		admin_repository_redaction_roles_description: "您可以建立和管理修訂角色，這些修訂角色會將使用者和群組與讀取機密資料及編輯註釋（用來保護機密資料以免於檢視）的能力建立關聯。",
		admin_repository_redaction_new: "新建修訂角色",
		admin_repository_redaction_role_avail_editors: "可用的修訂編輯者",
		admin_repository_redaction_role_avail_users: "可用的使用者",
		admin_repository_redaction_role_avail_groups: "可用的群組",
		admin_repository_redaction_role_selected_editors: "所選修訂編輯者",
		admin_repository_redaction_role_selected_users_groups: "所選使用者和群組",
		admin_repository_redaction_role_add_editor: "新建編輯者...",
		admin_repository_redaction_role_access_type: "存取權",
		admin_repository_redaction_role_access_type_access: "容許",
		admin_repository_redaction_role_access_type_no_access: "拒絕",
		admin_repository_redaction_role_users: "使用者",
		admin_repository_redaction_role_groups: "群組",
		admin_repository_redaction_role_editors: "編輯者 ",
		admin_delete_confirmation_redaction_roles: "您要刪除所選修訂角色嗎？",
		admin_repository_edit_redaction_role: "修訂角色：<b>${0}</b>",
		admin_repository_redaction_role_add_as: "預設存取權",
		// RBA
		desktop_user_group_acl: "桌面管理者",
		desktop_user_group_remove: "移除",
		desktop_rba_membership: "成員資格：",
		desktop_rba_membership_list_label: "名稱",
		admin_repository_redaction_policy_hover: "請提供說明，讓使用者能夠區別此原則與其他原則。",
		admin_repository_new_redaction_policy: "新建修訂原則",
		admin_repository_policy_name: "原則名稱",
		admin_repository_reason_redactions: "修訂原因：",
		admin_repository_role_editors: "編輯者 ",
		admin_repository_role_viewers: "檢視者 ",
		admin_repository_redaction_policy_instruction: "您可以建立修訂原則，以將所選修訂原因與修訂編輯者及修訂檢視者建立關聯。",
		admin_repository_redaction_reasons_hover: "選取您不想讓大部分使用者能夠查看的一種以上類型的機密資料，例如個人可識別的資訊、交易秘密或屬於公司機密或專利的資訊。",
		admin_repository_readaction_available_reasons: "可用原因",
		admin_repository_readaction_selected_reasons: "所選原因",
		admin_repository_readaction_new_reason: "新建原因...",
		admin_repository_redeaction_reasons: "修訂原因：",
		admin_repository_readaction_editor_permmission: "修訂編輯者：",
		admin_repository_redaction_editors_hover: "選取可以為所選原因建立和修改修訂的角色。",
		admin_repository_readaction_new_editor_role: "新建編輯者角色...",
		admin_repository_readaction_available_editors: "可用的編輯者角色",
		admin_repository_readaction_selected_editors: "所選編輯者角色",
		admin_repository_readaction_viewer_permmission: "修訂檢視者：",
		admin_repository_redaction_viewers_hover: "選取可以檢視選定原因之機密資料的角色。針對具有這些角色的使用者和群組，不套用修訂。",
		admin_repository_readaction_new_viewer_role: "新建檢視者角色...",
		admin_repository_readaction_available_viewers: "可用的檢視者角色",
		admin_repository_readaction_selected_viewers: "所選檢視者角色",
		admin_repository_reason_redactions_header: "修訂原因",
		admin_delete_confirmation_redaction_policy: "您要刪除所選修訂原則嗎？",
		admin_role_type_repository: "儲存庫",
		admin_role_type_administrator: "管理者",
		admin_role_type_template: "範本",
		admin_role_type_teamspace: "小組園地",
		admin_role_type_author: "編輯者",
		admin_role_type_user: "檢視器",
		admin_collaboration_services_instructions: "如果具有 IBM Connections 及 FileNet Collaboration Services Web 應用程式，則可以給儲存庫配置社群小組園地及活動串流。",
		admin_collaboration_services: "FileNet Collaboration Services：",
		admin_collaboration_community: "社群檔案庫配置",
		admin_collaboration_community_instruction: "可以將 IBM FileNet P8 網域中的一個儲存庫配置成儲存 IBM Connections 社群檔案庫（亦稱為小組園地）。使用者透過 IBM Connections 建立社群檔案庫時，會將檔案庫儲存在指定為社群檔案庫儲存庫的儲存庫中。",
		admin_collaboration_community_teamspaces: "將此儲存庫用於社群檔案庫：",
		admin_collaboration_community_teamspaces_hover: "只能使用 IBM FileNet P8 網域中的一個儲存庫來儲存新的社群檔案庫。如果啟用此儲存庫並且具有一個現有儲存庫，則將停用現有儲存庫。然而，任何現有檔案庫都將保留在現行儲存庫中。",
		admin_collaboration_connections_anonymous: "容許以匿名方式存取公用內容：",
		admin_collaboration_connections_anonymous_hover: "如果 IBM Connections 伺服器包含公用社群或受控管社群，則可以配置 FileNet Collaboration Services，以容許使用者在那些社群的檔案庫中瀏覽及下載內容，而不需要先登入。<br><br>以匿名方式存取社群檔案庫的使用者，無法建立、修改或刪除內容。<br><br><b>重要事項：</b>必須將 IBM FileNet P8 LDAP 使用者指定為匿名使用者，並且將該使用者配置成具有 WebSphere Application Server 中的<b>匿名</b>角色。",
		admin_collaboration_connections_url: "IBM Connections URL：",
		admin_collaboration_connections_url_hover: "以格式 http://IBMConnectionsServer:port_number 指定 IBM Connections 伺服器的 URL。如果 IBM Connections 已配置成使用 IBM HTTP Server，則 URL 中可以省略埠號。<br><br>IBM Connections 使用者必須可以存取此 URL，因為 FileNet Collaboration Services 使用此鏈結來建立 IBM Connections 中文件登入頁面的鏈結。",
		admin_collaboration_connections_url_http_use: "使用 IBM Connections URL",
		admin_collaboration_connections_url_https_use: "使用 IBM Connections HTTPS URL",
		admin_collaboration_connections_url_specify: "指定 URL",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL：",
		admin_collaboration_connections_url_https_hover: "如果 IBM Connections 已配置成使用 SSL，請以格式 https://IBMConnectionsServer:port_number 指定 IBM Connections 伺服器的 HTTPS URL。如果 IBM Connections 已配置成使用 IBM HTTP Server，則 URL 中可以省略埠號。",

		admin_collaboration_connections_gadget_url: "IBM Connections 小工具 URL：",
		admin_collaboration_connections_retrieval_url: "IBM Connections 擷取 URL：",
		admin_collaboration_connections_security: "社群管理者：",
		admin_collaboration_connections_security_hover: "指定可以管理社群檔案庫中內容的使用者和群組。<br><br>廣域管理者可以進行社群檔案庫及其內容的建立、修改、刪除作業，以及提供社群檔案庫及其內容的存取權。如果指定使用者作為廣域管理者，則會將儲存庫的 ClbGlobalAdministrator 專用權授予使用者。<br><br>廣域檢閱管理者可以核准及拒絕狀態為檢閱中以備在社群檔案庫中發佈的內容。如果指定使用者作為廣域檢閱管理者，則會將儲存庫的 ClbGloablReviewAdministrator 專用權授予使用者。",

		admin_collaboration_connections_admins: "廣域管理者",
		admin_collaboration_connections_admins_review: "廣域檢閱管理者",
		admin_collaboration_connections_seedlist: "索引社群檔案庫內容：",
		admin_collaboration_connections_seedlist_hover: "指定您是否想要 IBM Connections 在此儲存庫中搜索社群檔案庫，以建立搜尋索引。建立索引可能會影響儲存庫的效能。<br><br>如果儲存庫上安裝了 Social Collaboration Search Indexing Extensions，則此選項預設為已啟用。如果儲存庫上未安裝 Social Collaboration Search Indexing Extensions，則會在您啟用此選項時將該附加程式安裝在儲存庫上",
		admin_collaboration_activity_stream: "活動串流事件配置",
		admin_collaboration_activity_stream_label: "將事件資訊推送至 IBM Connections：",
		admin_collaboration_activity_stream_label_hover: "指定是否要將事件資訊（例如文件建立、移出、移入、註解、標籤及共用）推送至 IBM Connections。<br><br><b>重要事項：</b>將通知推送至 IBM Connections 可能會影響儲存庫的效能。",

		admin_collaboration_activity_stream_instruction: "可以配置此儲存庫以將事件資訊（例如註解及文件核准）推送至 IBM Connections。IBM Connections 社群中的<b>最近更新</b>頁面上會顯示事件。",
		admin_collaboration_activity_stream_ignored_ids: "忽略特定使用者和群組的事件資訊：",
		admin_collaboration_activity_stream_ignored_ids_hover: "可以忽略由特定使用者或群組（例如管理者或系統帳戶）所產生的事件，以減少使用者看到的通知數目。比方說，如果正在移轉內容，則可能要指定忽略用於移轉作業之帳戶所產生的事件。",
		admin_collaboration_activity_stream_userid: "IBM Connections 使用者名稱：",
		admin_collaboration_activity_stream_userid_hover: "指定 Content Platform Engine 將用來接受 IBM Connections 鑑別並且將事件資訊傳送至 IBM Connections 的系統帳戶。此使用者必須具備 IBM Connections 裡「小組件儲存器」應用程式的 <b>trustedExternalApplication</b> 角色。<br><br><b>提示：</b>依預設，IBM Connections 管理者具有適當的專用權。可以使用管理者 ID 來作為使用者名稱",
		admin_collaboration_activity_stream_password: "IBM Connections 使用者密碼：",

		admin_help_url: "使用者說明 URL：",
		admin_help_url_hover: "<b>重要注意事項：</b>IBM Knowledge Center Customer Installed 將不會從 IBM Content Navigator 3.0.0 版進行更新。如需使用自訂說明的相關資訊，請聯絡客戶服務。<br><br>從 IBM Content Navigator 3.0.0 版開始，一般使用者說明的 URL 會跳至 IBM Knowledge Center。IBM Knowledge Center URL 為 http://www.ibm.com/support/knowledgecenter。<br><br>如果想要繼續使用舊版的 IBM Knowledge Center Customer Installed，請指定由 IBM Content Navigator 配置和部署工具部署之 IBM Knowledge Center Customer Installed 實例的 URL。URL 必須可供用戶端機器存取。URL 的格式如下：http://server_name:port_number/kc。<br><br>您可以從 IBM Content Navigator 安裝目錄中 KnowledgeCenter/logs 子目錄下的 console.log 檔案取得伺服器名稱及埠號。",

		admin_help_default: "使用 IBM 提供的預設說明",
		admin_custom_help: "使用自訂說明系統",
		admin_help_kc: "使用 IBM Knowledge Center Customer Installed 中的自訂說明",
		admin_help_kc_hover: "<b>重要注意事項：</b>IBM Knowledge Center Customer Installed 將不會從 IBM Content Navigator 3.0.0 版進行更新。如需使用自訂說明的相關資訊，請聯絡客戶服務。<br><br>如果想要繼續使用舊版的 IBM Knowledge Center Customer Installed，請選取此選項，以繼續將內容新增至之前已部署的 IBM Knowledge Center Customer Installed 的實例。",
		admin_help_taxonomy: "分類架構代碼：",
		admin_help_taxonomy_hover: "指定自訂說明的分類架構代碼。<br><br>IBM Content Navigator 的分類架構代碼是 SSEUEX。如果您要在 IBM Knowledge Center Customer Installed 中以不同的產品名稱顯示您的說明，則必須將唯一的分類架構代碼新增至 IBM Content Navigator 安裝目錄中 KnowledgeCenter/usr/taxonomy 目錄下的 KC_taxonomy.ditamap 檔案。",
		admin_help_context: "說明文字：",
		admin_help_context_hover: "指定自訂說明的環境定義。<br><br>IBM Content Navigator 的說明位於 IBM Content Navigator 安裝目錄下的 KnowledgeCenter/usr/content/com.ibm.usingeuc.doc 目錄中。預設說明的環境定義是 com.ibm.usingeuc.doc。如果您要提供自訂說明，請將內容新增至 KnowledgeCenter/usr/content/ 目錄中的新子目錄。",
		admin_help_welcome: "登入頁面：",
		admin_help_welcome_hover: "指定要使用作為使用者存取說明時的登入頁面之主題的名稱。必須建立用於指定登入頁面位置的內容檔，並將該內容檔新增至 IBM Content Navigator 安裝目錄下的 KnowledgeCenter/usr/conf 目錄。",

		admin_settings_mimetype_extensions_jsonfile: "MIME 類型延伸 JSON 檔案：",
		admin_settings_mimetype_extensions_jsonfile_hover: "驗證 JSON 檔名和該檔案的完整路徑。該檔案可以是檔案系統的一般檔案，也可以是指向 JSON 檔案的 URL。<br><br>JSON 檔案內容是　MIME 類型定義的陣列。<br><br>MIME 類型定義包含四個索引鍵：\"mimeTypes\"、\"extensions\"、\"fileType\" 和 \"iconName\"。前兩個索引鍵 \"mimeTypes\" 和 \"extensions\" 是必要的，並且它們可以是由 \",\" 區隔的字串陣列。後兩個索引鍵 \"fileType\" 和 \"iconName\" 是選用項目。<br><br>例如：<br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "作業管理程式配置",
		admin_taskmanager_service: "作業管理程式服務：",
		admin_taskmanager_service_hover: "指定是否要使用作業管理程式服務來建立和執行非同步作業。<br><br>如果您變更此設定，則必須重新啟動 IBM Content Navigator Web 應用程式以讓變更生效。",
		admin_taskmanager_url: "作業管理程式服務 URL：",
		admin_taskmanager_url_hover: "指定其他應用程式可用來與作業管理程式服務通訊的 URL。URL 的格式如下：http://server_name:port_number/taskManagerWeb/api/v1。",
		admin_taskmanager_logdirectory: "作業管理程式日誌目錄：",
		admin_taskmanager_logdirectory_hover: "依預設，作業管理程式服務的日誌檔寫入 Web 應用程式伺服器日誌檔所在的相同目錄。<br><br>如果您要將記載資訊寫入 IBM Content Navigator 伺服器上的其他目錄，請指定日誌檔（由作業管理程式元件產生）儲存目錄的完整路徑。<br><br>如果您變更此設定，則必須重新啟動 IBM Content Navigator Web 應用程式以讓變更生效。",
		admin_taskmanager_heartBeatMonitor: "叢集活動訊號監視",
		admin_taskmanager_heartBeatMonitor_hover: "僅限於高可用的叢集環境。如果您啟用此選項，則作業管理程式服務會將作業從目前處於關閉狀態的節點重新路由至目前處於執行中狀態的節點。<br><br>如果您變更此設定，則必須重新啟動 IBM Content Navigator Web 應用程式以讓變更生效。",

		admin_syncserver_title: "Sync Server 配置",
		admin_syncserver_enable: "同步服務：",
		admin_syncserver_enable_hover: "指定您是否想要存取此桌面的使用者能夠在其工作站與行動式裝置之間同步化其項目。<br><br><b>重要事項：</b>若要使用此特性，您還必須完成下列作業：<ul><li>在管理工具的 <b>Sync Services</b> 區段中指定<b>同步服務公用 URL</b>。</li><li>將要針對其啟用同步服務的儲存庫新增至此桌面。</li></ul>如果您停用此選項，但是將要針對其啟用同步服務的儲存庫新增至此桌面，則會忽略儲存庫上的設定。",
		admin_mobileqr_enable: "在登入頁面上顯示 IBM Navigator QR 碼：",
		admin_mobileqr_enable_hover: "如果要在 Web 用戶端登入頁面上顯示 IBM Navigator 行動式應用程式的 QR 碼，請啟用此選項。<br><br>當使用者掃描 QR 碼時，會將他們帶入適用於其裝置的應用程式商店，他們可以在其中下載 IBM Navigator 行動式應用程式。",

		admin_streamlineservice_enable: "Edit Service：",
		admin_streamlineservice_enable_hover: "僅限於 FileNet P8 使用者。如果您希望桌面使用者能夠從其工作站上的原生應用程式輕鬆地新增及編輯文件，請啟用此選項。<br><br>若要使用此設定，您還必須：<ul><li>在與此桌面相關聯的一個以上儲存庫上啟用 Edit Service</li><li>在使用者工作站上安裝 IBM Content Navigator Edit 用戶端</li></ul>",

		admin_repository_general_instructions: "在配置參數、系統內容、資料夾等之前，必須先連接儲存庫。",
		admin_repository_system_instructions: "指定針對此儲存庫的文件和資料夾顯示的系統內容。",

		admin_desktop_general_create_instructions: "桌面決定使用者在登入 Web 用戶端時可看見及執行的項目。建立桌面之後，您可以傳送桌面 URL 給使用者，讓他們可以存取桌面。",
		admin_desktop_admin_instructions: "管理桌面由 Web 用戶端提供，可讓管理使用者設定 Web 用戶端。此桌面可以存取配置給 Web 用戶端的所有儲存庫。",
		admin_desktop_repositories_instructions: "指定您想要使用者從此桌面可以存取的儲存庫。在將儲存庫新增至桌面之前，您必須先配置儲存庫。<br><br><b>提示：</b>配置桌面佈置時，可以限制每個特性可使用的儲存庫。",
		admin_desktop_menus_instructions: "指定您希望使用者可以從此桌面存取的功能表。功能表指定可用的動作，這取決於在介面中的選擇而定。<br><br><b>提示：</b>您可以在管理工具的<b>功能表</b>區段中，自訂功能表的內容，或者您可以建立外掛程式，來建立新類型的功能表。",

		admin_desktop_no_repositories: "未配置任何儲存庫。",

		admin_desktop_id_hover: "桌面 ID 會併到 Web 用戶端 URL，並且指定使用者登入 Web 用戶端時開啟的桌面。此 ID 必須是唯一的，儲存桌面之後，您就不能再變更 ID。<br><br>ID 只能包含英數字元且區分大小寫。",
		admin_desktop_id_disabled_hover: "桌面 ID 無法變更。如果您想要使用不同的 ID，必須建立新的桌面。",
		admin_desktop_name_hover: "桌面名稱不能包含下列任何字元：* \\ / : ? \" < > |",
		admin_desktop_default_hover: "配置只能包含一個預設桌面。",

		admin_repository_id_disabled_hover: "儲存庫 ID 無法變更。如果您想要使用不同的 ID，必須建立新的儲存庫連線。",
		admin_printService_enable: "使用 IBM Daeja ViewONE 列印服務進行列印：",
		admin_printService_enable_hover: "如果選擇啟用 IBM Daeja ViewONE 列印服務，則文件會轉換為 PDF 格式，並且列印可以使用任何 Web 瀏覽器來完成。<br><br>如果選擇停用 IBM Daeja ViewONE 列印服務，則您只能在支援 Java Applet 的 Web 瀏覽器中列印文件。部分 Web 瀏覽器不支援 Java Applet，因此不支援 Applet 列印。<br><br>請參閱說明文件以查看受支援的瀏覽器，。",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "使用者起始目錄",
		admin_file_tracking_doc_directory_my_documents: "使用者文件目錄",
		admin_file_tracking_doc_directory_qp: "完整路徑",
		admin_file_tracking_section_tile: "檔案追蹤配置",
		admin_file_tracking_home_path: "起始目錄路徑",
		admin_file_tracking_my_documents: "我的文件",
		admin_file_tracking_exact_path: "完整路徑：",
		admin_file_tracking_qp: "完整路徑",
		admin_file_tracking_ev: "環境變數",
		admin_file_tracking_ev_us: "自訂環境變數",
		admin_file_tracking_del_local_copy: "刪除本端副本：",
		admin_file_tracking_yes: "是",
		admin_file_tracking_no: "否",
		admin_file_tracking_del_local_copy_rt_state_editable: "容許使用者置換此設定",
		admin_file_tracking_del_local_copy_rt_state1: "是",
		admin_file_tracking_del_local_copy_rt_state2: "否",
		admin_file_Tracking_label: "檔案追蹤：",
		admin_file_Tracking_disable: "停用",
		admin_file_Tracking_enable: "啟用",
		admin_file_tracking_label_hover_help: "檔案追蹤使用小應用程式將文件移出且下載至使用者機器上的特定目錄。當使用者移入文件時，此小應用程式也可讓 IBM Content Navigator 在使用者的機器上尋找文件。",
		admin_file_tracking_doc_directory: "儲存體位置：",
		admin_file_tracking_open_file: "自動開啟檔案",
		admin_file_Tracking_append_qualified_path: "附加目錄",
		admin_file_Tracking_append_qualified_path_hover_help: "如果要將文件儲存至特定子目錄，則可以將目錄附加至環境變數的結尾。<br/><br/>例如，可以指定將文件下載至使用者起始目錄中的 <i>EnterpriseDocuments</i> 目錄。",
		admin_file_Tracking_append_ev: "附加環境變數",
		admin_file_Tracking_append_ev_hover_help: "如果要將文件儲存在動態指定的目錄（例如使用者目錄）中，則可以附加環境變數。<br/><br/>例如，可以指定將文件儲存在共用網路目錄上的 <i>user_name</i> 子目錄中。",
		admin_file_tracking_doc_directory_hover_help: "指定移出及下載時應該在其中儲存文件的位置。<br/><br/> <b>提示</b>：如果要將文件儲存在使用者起始目錄或預設文件目錄中，請選取<b>環境變數</b>，這包含指向那些位置的預先定義變數。",
		admin_file_tracking_qualified_path_hover_help: "使用適合於 Windows 或 Mac 作業系統的目錄結構，來指定要在其中儲存文件的目錄或網路目錄。<ul><li>對於 Windows，請在路徑中併入磁碟機代號，例如 C:\\Enterprise Documents。</li><li>對於共用網路目錄，輸入格式為 \\\\servername\\directory 的路徑</li></ul><br/><b>重要事項：</b>若要使用此選項，您指定的目錄結構必須能夠在您環境中的所有用戶端工作站上建立。",
		admin_file_tracking_environment_variable_path_hover_help: "使用適合於 Windows 或 Mac 作業系統的環境變數，來指定要在其中儲存文件的目錄或網路目錄。<br/><br/><b>使用者起始目錄</b>選項會將文件儲存在下列目錄中：<br/><ul><li>Windows：C:\\Users\\User_name</li><li>Mac：/Users/User_name</li></ul><br/><b>使用者文件目錄</b>選項會將文件儲存在下列目錄中：<br/><ul><li>Windows：C:\\Users\\User_name\\Documents</li><li>Mac：/Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "指定在使用者將文件新增至或移入儲存庫時是否刪除文件的本端副本。<br/><br/>刪除本端副本可讓您：<br/><ul><li>強制符合 IT 原則的標準</li><li>確保使用者是使用最新版本的文件</li></ul><br/><b>限制：</b>當使用者透過拖放來新增文件時，不會使用此設定。<br/><br/>對於 IBM Content Navigator for Microsoft Office，必須在桌面的 <b>Office 配置</b>區段中選取<b>在使用者新增或移入文件或者取消移出時刪除本端檔案</b>。",
		admin_file_tracking_open_file_hover_help: "此設定會置換使用者 Web 瀏覽器中所配置的任何文件處理喜好設定。</br></br><b>限制：</b>IBM Content Navigator for Microsoft Office 不使用此設定。",
		admin_file_tracking_over_write_file: "改寫本端副本：",
		admin_file_tracking_over_write_file_hover_help: "指定在使用者將文件移出儲存庫時是否要改寫文件的本端副本。<br/><br/>改寫本端副本可讓您：<br/><ul><li>確保使用者是使用最新版本的文件</li><li>當本端副本存在時，防止使用者看到提示</li></ul> </br></br><b>限制：</b>如果您選取<b>容許使用者置換此設定</b>，則 IBM Content Navigator for Microsoft Office 不使用此設定。",
		admin_file_tracking_over_write_file_state_editable: "容許使用者置換此設定",
		admin_file_tracking_inline_help: "檔案追蹤簡化了將文件移出及移入儲存庫的程序。它也可讓您管理文件在使用者機器上的儲存方式。<br/><br/>此外，使用檔案追蹤，可以在多個 IBM Content Navigator 元件（例如，Web 用戶端及 IBM Content Navigator for Microsoft Office）中追蹤文件。",

		// Box repository admin...
		admin_box_instructions: "必須先啟用「標準鑑別」或「伺服器鑑別」，然後才能連接至儲存庫。",
		admin_box_use_oauth: "鑑別類型：",
		admin_box_use_oauth_hover: "在正式作業環境中，如果您提供從 IBM Content Navigator 存取 Box 文件的權限，請選取「標準鑑別」或「伺服器鑑別」。指定與此 IBM Content Navigator 部署相關聯的 client_id 和 OAuth2 client_secret 值。您可以在為 IBM Content Navigator 伺服器建立 Box 應用程式之後，從 Box 取得這些值。<br/><br/>在開發環境中選取「開發者鑑別」。開發者可以使用其開發者帳戶登入 Box 並產生有效時間只有 60 分鐘的開發者記號。開發者記號容許開發者使用開發者記號作為任何使用者 ID 的密碼來登入 Box。",
		admin_box_oauth_client_id: "client_id：",
		admin_box_oauth_client_secret: "client_secret：",
		admin_box_oauth_subdomain: "Box 企業帳戶子網域：",
		admin_box_share: "作業管理程式連線 ID：",
		admin_box_share_hover: "對於 Box 複製或 Box 共用，作業管理程式使用管理者使用者 ID 及密碼執行用於修改儲存庫的背景作業。<br/><br/>按一下「設定」並使用有效的 Box 管理者帳戶登入 Box。<br/><br/>如果您透過選取此 Box 儲存庫作為共用檔案的儲存庫來配置桌面，則必須指定在 Box 中具有無限制儲存空間的 Box 管理者使用者。",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "自動開啟檔案",
		file_tracking_runtime_overwrite_hover_help: "如果沒有選取此選項，並且本端檔案系統上存在同名文件，則將移出文件，但不會下載文件，除非您執行下列其中一個動作：<br/><ul><li> 將文件下載至預設目錄的子目錄。如果您選取子目錄，則 Web 應用程式可追蹤文件的位置。</li><li>重新命名您正在下載的文件。重新命名文件會防止檔名衝突。</li></ul>",
		open_file: "自動開啟檔案",
		over_write_file: "改寫本端副本",
		checkout_and_download_file: "移出及下載文件",
		download_to_local_directory: "下載至：",
		checkout_and_download_button_title: "移出及下載",
		checkout_without_java_confirmation_dialog: "檔案追蹤特性無法下載及追蹤檔案。",
		browse_for_directory: "瀏覽",
		selected_documents: "選取的文件",

		checkout_without_java_confirmation_text: "發生此問題的可能原因如下：<br/><ul><li>工作站上沒有安裝「Java 執行時期環境 (JRE)」。</li><li>Web 瀏覽器中沒有啟用 Java 外掛程式。</li><li>Web 瀏覽器不支援 Java。</li></ul><br/><br/>如果要解決此問題，請執行適當的動作：<br/><br/><ul><li>如果要在沒有啟用檔案追蹤時繼續下載檔案，請按一下「確定」。</li><li>如果要在啟用檔案追蹤時下載檔案，請取消下載，並且確保已在工作站上安裝了 JRE，以及在 Web 瀏覽器中啟用了 Java 外掛程式。</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "文件已移出及下載，但無法開啟。",
		runtime_file_tracking_open_error_explanation: "工作站上所安裝的作業系統不支援此類型的檔案。",
		runtime_file_tracking_open_error_userResponse: "如果要解決此問題，請執行下列其中一個動作：<br/><br/><ul><li>如果需要使用此文件，請從其他具有不同作業系統的工作站開啟 Web 用戶端。</li><li>如果只需要檢視文件，請在 Web 用戶端中，用滑鼠右鍵按一下此文件，然後按一下「開啟」。</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "文件已移出，但沒有下載。",
		runtime_file_tracking_save_file_error_explanation: "本端檔案系統上已存在同名文件，但沒有改寫。",
		runtime_file_tracking_save_file_error_userResponse: "如果要從儲存庫下載檔案，則在從儲存庫下載文件時，必須改寫文件的本端副本。",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "文件已移出，但無法下載或開啟。",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "本端檔案系統上已存在同名文件。然而，沒有改寫檔案，這會造成無法下載及開啟儲存庫上的文件。",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "如果要從儲存庫下載檔案，則在從儲存庫下載文件時，必須改寫文件的本端副本。",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "無法下載文件。",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "此用戶端機器上沒有定義檔案追蹤所需的 ${0} 環境變數。",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "如果要解決此問題，請執行下列步驟：<br/><br/><ul><li>將 ${0} 環境變數新增至作業系統環境變數。</li><li>登出 Web 用戶端並關閉 Web 瀏覽器。然後，重新登入。</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "檔案追蹤小應用程式無法下載及追蹤文件。",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "未定義檔案追蹤所需的 ${0} 目錄，因此無法建立。",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "如果要解決此問題，請執行適當的動作：<br/><br/><ul><li>按一下「瀏覽」並選取用戶端機器上的其他目錄。如果選取此選項，則將不會追蹤檔案。</li><li>請聯絡系統管理者，並要求他們指定其他目錄用於追蹤檔案。比方說，如果所指定的目錄適用於 Windows 作業系統，但您執行的是 Mac OS，則必須這樣做。</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "如果從具有其他作業系統的裝置存取此桌面，則可以透過執行下列其中一個動作來減小發生問題的可能性：<br/><br/><ul><li>使用環境變數來指定用戶端機器上的儲存體位置。</li><li>給各類裝置的使用者建立不同桌面。例如，給 Windows 作業系統使用者建立桌面，及給 Mac OS 使用者建立桌面。</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "無法處理您的要求。",
		runtime_file_tracking_generic_error_explanation: "檔案追蹤小應用程式發生錯誤。",
		runtime_file_tracking_generic_error_userResponse: "請聯絡系統管理者，以取得協助。",
		runtime_file_tracking_generic_error_adminResponse: "開啟 Java 主控台，然後再次嘗試提交您的要求。Java 主控台中會顯示錯誤的詳細資料。<br/><br/>您可以從作業系統的「控制台」(Windows) 或「系統偏好」(Macintosh) 存取 Java 主控台。",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "無法處理您的要求",
		runtime_file_tracking_cannot_delete_file_error_explanation: "下列檔案已新增至儲存庫，但是未從本端檔案系統中刪除：${0}。通常在這些檔案處於開啟狀態或者正由其他應用程式使用時會發生這種情況。如果需要，您可以手動刪除這些檔案。",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "無法下載文件。",
		runtime_file_tracking_ioexception_error_explanation: "無法下載文件。",
		runtime_file_tracking_ioexception_userResponse: "您可能沒有適當的權限來寫入下列目錄：${0}。",
		runtime_file_tracking_ioexception_adminResponse: "請確保您具有所指定目錄的寫入權。如果您沒有所指定目錄的寫入權，請聯絡系統管理者。",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "無法處理您的要求。",
		runtime_file_tracking_safari_safe_mode_error_explanation: "此錯誤可能有下列原因：<br/><br/><ul><li>您正在於 Mac OS 上使用 Safari，並且 Java 正在於安全模式下執行。</li><li>對於桌面的存檔追蹤配置中指定的目錄，您不具有讀寫許可權。</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "您可以在不進行檔案追蹤的情況下繼續使用 IBM Content Navigator，或者您可以完成下列步驟來解決問題：<br/><br/><ol><li>在 Safari 中啟用 Java 不安全模式。</li><li>如果系統提示您是否要信任 IBM Content Navigator 網站，請按一下<b>信任</b>以載入頁面，然後在 Safari 中啟用 Java 不安全模式。</li></ol><br/><br/>如果已正確地配置 Safari，請完成下列步驟來解決問題：<br/><br/><ol><li>對於桌面的存檔追蹤配置中指定的目錄，確保您具有讀寫許可權。</li><li>如果您對該目錄沒有讀寫許可權，請編輯該目錄上的許可權。</li><li>如果您無法編輯該目錄上的許可權，則管理者必須變更針對檔案追蹤配置的目錄，或者容許您存取已配置不同檔案追蹤目錄的桌面。</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "無法處理您的要求。",
		runtime_file_tracking_java__notfound_error_explanation: "此問題錯誤通常在下列狀況下發生：<br/><br/><ul><li>工作站上沒有或未啟用「Java 執行時期環境 (JRE)」。</li><li>您工作站上的 JRE 版本與 IBM Content Navigator 版本不相容。</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "您可以在不進行檔案追蹤的情況下繼續使用 IBM Content Navigator，或者您可以完成下列步驟來解決 JRE 的問題：<br/><br/><ol><li>請確保 JRE 已安裝在您的工作站上。</li><li>請確保您工作站上的 JRE 版本與 IBM Content Navigator 相容。「IBM 軟體支援中心」網站的 <i>IBM Content Navigator 的軟硬體需求</i>文件中包含支援的版本清單。</li><li>請確保在您的工作站上已啟用 JRE。</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "無法處理您的要求。",
		runtime_file_tracking_security_error_explanation: "對於桌面的存檔追蹤配置中指定的目錄，您不具有讀寫許可權。",
		runtime_file_tracking_security_error_userResponse: "您可以在不進行檔案追蹤的情況下繼續使用 IBM Content Navigator，或者您可以與系統管理者協作，來完成下列步驟：<ol><li>對於桌面的存檔追蹤配置中指定的目錄，確保您具有讀寫許可權。</li><li>如果您對該目錄沒有讀寫許可權，請編輯該目錄上的許可權。</li><li>如果您無法編輯該目錄上的許可權，則管理者必須變更針對檔案追蹤配置的目錄，或者容許您存取已配置不同檔案追蹤目錄的桌面。</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "已下載下列文件：${0}。",

		admin_file_tracking_inline_help: "檔案追蹤簡化了將文件新增至儲存庫、移出及移入儲存庫的程序。它也可讓您管理文件在使用者機器上的儲存方式。<br/><br/>此外，使用檔案追蹤，可以在多個 IBM Content Navigator 元件（例如，Web 用戶端及 IBM Content Navigator for Microsoft Office）中追蹤文件。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "功能表 ID 的開頭不能是 \"Default\"。\"Default\" 是保留的功能表 ID 字首。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID 只能包含英數字元且區分大小寫。",
		admin_repository_id_hover: "儲存庫 ID 包括在 Web 用戶端 URL 中、我的最愛中，以及用來指定要登入哪一個儲存庫的電子郵件鏈結中。此 ID 必須是唯一的，儲存儲存庫之後，您就不能再變更 ID。<br><br>ID 只能包含英數字元且區分大小寫。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "此名稱不能包含下列任何字元：* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "桌面 ID 不能包含空格或下列任何字元：* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "桌面名稱不能包含下列任何字元：* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "顯示名稱不能包含下列任何字元：* \\ / : ? \" < > |",
		admin_repository_name_hover: "指定要在 Web 用戶端中對使用者顯示的儲存庫名稱。<br><br>名稱不能包含下列任何字元：* \\ / : ? \" < > |",
		admin_server_od_name_hover: "指定您要連接的 Content Manager OnDemand 伺服器的主機名稱或 IP 位址，例如：server.id.com。",
		admin_server_p8_name_hover: "指定 Content Engine 或 Content Platform Engine 伺服器的 URL。URL 區分大小寫並採用下列格式：<br><br><ul><li>在 WebSphere Application Server 上是 iiop://host_name:port_number/FileNet/Engine。在基本部署中，預設埠號是 2809。</li><li>在 WebLogic Server 上是 t3://host_name:port_number/FileNet/Engine。預設埠號為 7001。</li></ul><br><br>對於 Content Engine and Content Platform Engine 的高可用配置，請使用高可用 EJB 傳輸 URL，其中不含 cemp: 字首。",
		admin_server_p8_protocol_hover: "指定要用來與 Content Engine 進行通訊的通訊協定。",
		admin_server_cm_name_hover: "指定 Content Manager 資料庫的本區型錄名稱或檔案庫伺服器連線名稱。此名稱是指定給 ICMSERVER 變數的值。",
		admin_repository_cmis_hover: "指定您要連接之儲存庫的 ID。您 CMIS 環境中每一個儲存庫的 ID 會列在 AtomPub 連結服務文件中。<br/><br/><b>提示：</b>您也可以輸入星號 (*) 來連接第一個儲存庫，或只連接定義在 AtomPub 連結服務文件中的儲存庫。",
		admin_url_cmis_hover: "URL 的格式會因服務提供者而不同。請參閱您的 CMIS 說明文件，或向您的 CMIS 伺服器管理者查詢 URL。",
		admin_repcfg_cmis_status_columns_hover: "指定您要查看其圖示的項目陳述。狀態圖示顯示在內容清單中的文件旁。",
		admin_port_hover: "指定 Content Manager OnDemand 伺服器在其上進行接聽的 TCP/IP 埠號。預設值是 1445。",
		admin_unified_searches_hover: "指定您希望使用者能夠在此儲存庫中儲存跨儲存庫搜尋的地方。<br/><br/>如果未啟用此選項，使用者仍可建立針對此儲存庫執行的跨儲存庫搜尋。您可以防止使用者在桌面層次建立跨儲存庫搜尋。<br/><br/>如果您啟用跨儲存庫搜尋，IBM Content Navigator 會在儲存庫中建立跨儲存庫搜尋模型。<br/><br/>針對 IBM FileNet Content Manager，您必須連接至儲存庫作為 Content Engine 管理者方可啟用此選項。",
		admin_unified_searches_cm_hover: "指定您希望使用者能夠在此儲存庫中儲存跨儲存庫搜尋的地方。<br/><br/>如果未啟用此選項，使用者仍可建立針對此儲存庫執行的跨儲存庫搜尋。您可以防止使用者在桌面層次建立跨儲存庫搜尋。<br/><br/>如果您啟用跨儲存庫搜尋，IBM Content Navigator 會在儲存庫中建立跨儲存庫搜尋模型。",
		admin_max_results_hover: "指定是否限制搜尋要傳回的結果數目。如果您不限制搜尋結果數目，一旦搜尋傳回大量的結果，可能會遇到效能問題。",
		admin_timeout_hover: "指定要在儲存庫上執行搜尋多長時間（以秒為單位）。如果搜尋未在指定時間內完成，Web 用戶端會取消要求。建議的逾時上限為 60 秒。",
		admin_object_store_hover: "指定在 Content Engine 伺服器上您想要連接的物件儲存庫。可以從 Content Platform Engine 管理主控台取得符號名稱。",
		admin_object_store_display_name_hover: "如果要使用 IBM FileNet P8 工作流程，則需要物件儲存庫顯示名稱。可以從 Content Platform Engine 管理主控台取得物件儲存庫顯示名稱。",
		admin_all_searches_hover: "指定當使用者在儲存庫中搜尋時，是否要限制<b>所有搜尋</b>之下所顯示的搜尋數目。如果您不限制搜尋結果數目，一旦儲存庫包含大量的儲存搜尋，您可能會遇到效能問題。",

		admin_text_desktop: "桌面",
		admin_text_repository: "儲存庫",
		admin_text_plugin: "外掛程式",
		admin_text_theme: "佈景主題",
		admin_text_menu: "功能表",
		admin_text_reason_code: "修訂原因",
		admin_text_redactions: "修訂",
		admin_text_viewer_mapping: "檢視器對映",
		admin_text_mobile_feature: "行動式特性",
		admin_test_interface_text: "介面文字",
		admin_text_interface_text_locale: "本地化介面文字",
		admin_text_icon_status: "狀態圖示",
		admin_text_icon: "圖示",
		admin_text_file_type: "檔案類型",
		admin_text_viewer: "檢視器",
		admin_text_desktop_access: "桌面存取",
		admin_text_mapped_properties_for_office: "Microsoft Office 的對映內容",
		admin_text_desktop_features: "桌面特性",
		admin_text_unknown: "不明",
		admin_folder_instruction: "指定當使用者瀏覽時，內容清單中的文件和資料夾所要顯示的內容。您也可以指定顯示內容的順序。",
		admin_search_instruction: "指定當使用者建立搜尋時，依預設會選取的選項。",
		admin_repository_office_conf_class_instruction: "如果您已於所在環境中的用戶端機器上安裝 IBM Content Navigator for Microsoft Office，您可以指定文件在新增或移入此儲存庫時的處理方式。",
		admin_repository_office_conf_instruction: "將 Microsoft Office 文件內容對映至此儲存庫所定義的內容。<br/><br/>桌面啟用內容對映與此儲存庫建立關聯時，使用者從 IBM Content Navigator for Microsoft Office 新增文件，可以使用 Microsoft Office 文件設定內容以移入儲存庫的內容。",
		admin_repository_office_conf_prop_mapping_title: "內容對映",
		admin_repository_office_conf_prop_mapping_title1: "MS Office 整合",
		admin_office_conf_instruction: "當用戶端機器上已安裝 IBM Content Navigator for Microsoft Office 時，您可以控制 IBM Content Navigator 如何整合 Microsoft Office 應用程式。<br /><br /><b>重要事項：</b>如果您選取<b>對映 Office 內容 …</b>，您必須還要針對與此桌面相關聯的每一個儲存庫配置內容對映。您可以在您環境中的 <b>Office 內容</b>標籤中，配置每一個儲存庫的內容對映。",
		admin_desktop_workflows_instruction: "<b>僅適用於 IBM FileNet P8 系統：</b>指定此桌面中所顯示的應用程式空間。所選應用程式空間的順序決定了應用程式空間在 Web 用戶端中的顯示順序。<br><br><b>提示：</b>您可以在管理工具的<b>標籤</b>區段中指定新名稱，來變更應用程式空間的顯示名稱。",
		admin_search_filtered_properties_instruction: "指定可讓使用者進行搜尋的內容。您可以隱藏任何不想讓使用者進行搜尋的內容。",
		admin_search_filtered_operators_instruction: "指定當使用者對特定資料類型（例如：日期或整數）進行搜尋時，可以使用的運算子。您可以隱藏任何不想讓使用者選取的運算子。",
		admin_search_default_search_results_instruction: "指定在搜尋結果中所要顯示的文件和資料夾內容。您可以隱藏任何您不希望出現在搜尋結果中的內容。",
		admin_search_default_search_results_p8_cmis_instruction: "指定在搜尋結果中所要顯示的文件內容。您可以隱藏任何您不希望出現在結果中的內容。",

		admin_datetimeOp: "日期時間",
		admin_floatOp: "浮點數字",
		admin_integerOp: "整數",
		admin_stringOp: "字串",
		admin_binaryOp: "二進位",
		admin_objectOp: "物件",
		admin_idOp: "ID",
		admin_userOp: "使用者",
		admin_booleanOp: "布林值",

		admin_string: "字串",
		admin_long: "長整數",
		admin_date: "日期",
		admin_double: "倍精準數",
		admin_object: "物件",
		admin_guid: "GUID",
		admin_boolean: "布林值",

		admin_repcfg_heading: "您可以設定配置參數，來置換此儲存庫的預設行為。",
		admin_repcfg_heading_od: "您可以設定配置參數，來置換此儲存庫的預設行為。<br /><br /><b>重要事項：</b>如果 Web 用戶端要與 Content Manager OnDemand 搭配使用，您也必須在 <b>Content Manager OnDemand</b> 標籤的<b>設定</b>之下，指定其中參數的值，這些值會套用至您所連接的所有 Content Manager OnDemand 儲存庫。",
		admin_repcfg_teamspaces: "小組園地管理：",
		admin_repcfg_enable: "啟用",
		admin_repcfg_disable: "停用",

		admin_repcfg_deliver_redacted_pdf_files_as: "修訂的 PDF 檔案將以下列格式進行遞送：",
		admin_repcfg_burn_pdf_to_pdf: "PDF 檔案",
		admin_repcfg_burn_pdf_to_tiff: "TIFF 檔案",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "透過利用角色型修訂而進行修訂的 PDF 檔案，可以不同的檔案格式遞送至用戶端。檔案格式發生變更時，副檔名與 MIME 類型也會發生變更。<br><br>例如，PDF 檔案以 TIFF 檔案格式進行遞送時，副檔名會變更為 .tiff。",
		admin_repcfg_redaction_allow_merge_and_split: "容許使用者合併和分割具有角色型修訂的頁面",
		admin_repcfg_redaction_allow_merge_and_split_hover: "選取此選項以容許使用者合併和分割具有角色型修訂的頁面。修訂編輯者以外的使用者無法編輯角色型修訂，並且不會獲取與角色型修訂關聯的機密資料之存取權（即使已啟用此選項）。",
		admin_repcfg_modify_teamspace_roles: "容許擁有者修改現有小組園地的角色",
		admin_repcfg_tm_delete_teamspace: "允許擁有者刪除小組園地，包括內容",
		admin_repcfg_tm_delete_teamspace_id_missing: "您必須指定儲存庫管理者的使用者名稱。",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "您必須指定儲存庫管理者的密碼。",
		admin_repcfg_teamspace_display_Recent: "僅顯示最近修改的小組園地",
		admin_repcfg_teamspace_display_Recent_value: "前次修改之後的天數：",

		admin_repcfg_folder_selector: "根資料夾：",
		admin_repcfg_enable_folder_selector: "啟用",
		admin_repcfg_disable_folder_selector: "停用",
		admin_repcfg_SSO: "單一登入：",
		admin_repcfg_teamspace_template_permission_text: "指派小組園地範本建立者：",
		admin_repcfg_teamspace_template_permission_hover_p8: "指定可以建立小組園地範本的群組或使用者。將會為使用者及群組提供所需類別和資料夾的適當安全設定。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>進一步瞭解</a><br/><br/><b>建議：</b>使用群組來簡化小組園地管理。",
		admin_repcfg_teamspace_template_permission_hover_cm: "指定可以建立小組園地範本的群組或使用者。這些使用者將新增至適當的 ACL 並為他們提供所需的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>進一步瞭解</a><br/><br/><b>建議：</b>使用群組來簡化小組園地管理。",
		admin_repcfg_teamspace_permission_text: "指派小組園地角色：",
		admin_repcfg_teamspace_permission_hover_p8: "指定可以建立和使用小組園地的群組或使用者。將會為使用者提供所需類別和資料夾的適當安全設定。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>進一步瞭解</a><br/><br/><b>建議：</b>使用群組來簡化小組園地管理。",
		admin_repcfg_teamspace_permission_hover_cm: "指定可以建立和使用小組園地的群組或使用者。這些使用者將新增至適當的 ACL 並為他們提供所需的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>進一步瞭解</a><br/><br/><b>建議：</b>使用群組來簡化小組園地管理。",
		admin_repcfg_entry_template_permission_text: "指派項目範本角色：",
		admin_repcfg_entry_template_permission_hover_p8: "指定可以建立和使用項目範本的群組或使用者。將會為使用者提供「項目範本」文件類別的適當安全設定。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>進一步瞭解</a><br/><br/><b>建議：</b>使用群組來簡化項目範本管理。",
		admin_repcfg_entry_template_permission_hover_cm: "指定可以建立和使用項目範本的群組或使用者。這些使用者將新增至適當的 ACL 並為他們提供所需的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>進一步瞭解</a><br /><br /><b>建議：</b>使用群組來簡化項目範本管理。",
		admin_repcfg_office_template_permission_text: "指派範本角色：",
		admin_repcfg_office_template_permission_hover_cm: "指定可以建立、編輯及使用 Microsoft Office Online 或 Edit Service 範本的群組或使用者。這些使用者將新增至適當的 ACL 並為他們提供所需的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a><br /><br /><b>建議：</b>可以使用群組來簡化 Microsoft Office Online 或 Edit Service 範本管理。",
		admin_repcfg_draft_permission_text: "指派草稿角色：",
		admin_repcfg_draft_permission_hover_cm: "指定在協同編輯期間可以建立 Microsoft Office Online 或 Edit Service 文件草稿的群組或使用者。任何需要在 Microsoft Office Online 或 Edit Service 中協同編輯文件的使用者都必須具有建立草稿的適當專用權。這些使用者將新增至適當的 ACL 並為他們提供所需的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a><br /><br /><b>建議：</b>可以使用群組來簡化草稿管理。",
		admin_repcfg_search_permission_text: "指派搜尋角色：",
		admin_repcfg_search_permission_hover_p8: "指定可以建立搜尋及跨儲存庫搜尋或使用這些已儲存搜尋的群組或使用者。將會為這些使用者提供所需類別的適當安全設定。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>進一步瞭解</a><br /><br /><b>建議：</b>使用群組來簡化搜尋管理。",
		admin_repcfg_search_permission_hover_cm: "指定可以建立搜尋及跨儲存庫搜尋，編輯或使用這些已儲存搜尋的群組或使用者。這些使用者將新增至適當的 ACL 並為他們提供所需的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>進一步瞭解</a><br /><br /><b>建議：</b>使用群組來簡化搜尋管理。",
		admin_repcfg_search_permission_title: "搜尋角色",
		admin_repcfg_search_permission_intro_text: "請確定使用者有權存取支援其角色的桌面。例如，請確定搜尋建立者有權存取容許他們建立搜尋及跨儲存庫搜尋的桌面。",
		admin_repcfg_teamspace_template_administrators_hover_p8: "小組園地範本管理者是對儲存庫（物件儲存庫）具有<b>完整控制</b>許可權的使用者。您無法從管理工具中變更小組園地範本管理者清單。<p>小組園地範本管理者可以刪除或修改任何小組園地範本。建立小組園地範本的使用者不需要與小組園地範本管理者共用範本。</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "指定某個使用者或群組作為小組園地範本建立者時，將會為該使用者或群組提供在儲存庫上建立小組園地範本的適當安全。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>進一步瞭解</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "已指派專用權的使用者和群組，這些專用權不是與「管理者」和「建立者」相關聯的專用權。<p>透過從「其他」角色中移除這些使用者和群組，然後將他們指派為小組園地範本建立者，您可以將這些使用者和群組移至小組園地範本建立者角色。<p>您可以使用 IBM Administration Console for Content Engine 來檢閱目前已授與這些使用者和群組的專用權。",
		admin_repcfg_teamspace_administrators_hover_p8: "小組園地管理者是對儲存庫（物件儲存庫）具有<b>完整控制</b>許可權的使用者。您無法從管理工具中變更小組園地管理者清單。<p>小組園地管理者可以刪除或修改任何小組園地。建立小組園地的使用者不需要與小組園地管理者共用小組園地。</p>",
		admin_repcfg_teamspace_creators_hover_p8: "指定某個使用者或群組作為小組園地建立者時，將會為該使用者或群組提供在儲存庫上建立小組園地的適當安全。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>進一步瞭解</a>",
		admin_repcfg_teamspace_user_hover_p8: "指定某個使用者或群組作為小組園地使用者時，將會為該使用者或群組提供在儲存庫上使用小組園地的適當安全。不過，使用者必須是小組園地成員才能存取小組園地。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>進一步瞭解</a><p><b>提示：</b>如果您希望您環境中的所有使用者都能夠看到小組園地，則可以將 #AUTHENTICATED-USERS 虛擬帳戶新增至小組園地使用者角色。</p>",
		admin_repcfg_teamspace_others_hover_p8: "已指派專用權的使用者和群組，這些專用權不是與「管理者」、「建立者」及「使用者」相關聯的專用權。<p>透過從「其他」角色中移除這些使用者和群組，然後將小組園地角色指派給他們，您可以將這些使用者和群組移至預先定義的角色。<p>您可以使用 IBM Administration Console for Content Engine 來檢閱目前已授與這些使用者和群組的專用權。",		
		admin_repcfg_entry_template_administrators_hover_p8: "項目範本管理者是對儲存庫（物件儲存庫）具有<b>完整控制</b>許可權的使用者。您無法從管理工具中變更項目範本管理者清單。<p>項目範本管理者可以刪除或修改任何項目範本。建立項目範本的使用者不需要與項目範本管理者共用項目範本。</p>",
		admin_repcfg_entry_template_creators_hover_p8: "指定某個使用者或群組作為項目範本建立者時，將會為該使用者或群組提供在儲存庫上建立項目範本的適當安全。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>進一步瞭解</a>",
		admin_repcfg_entry_template_user_hover_p8: "指定某個使用者或群組作為項目範本使用者時，將會為該使用者或群組提供在儲存庫上使用項目範本的適當安全。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>進一步瞭解</a><p><b>提示：</b>如果您希望您環境中的所有使用者都能夠使用項目範本，則可以將 #AUTHENTICATED-USERS 虛擬帳戶新增至項目範本使用者角色。</p>",
		admin_repcfg_entry_template_others_hover_p8: "已指派專用權的使用者和群組，這些專用權不是與「管理者」、「建立者」及「使用者」相關聯的專用權。<p>透過從「其他」角色中移除這些使用者和群組，然後將項目範本角色指派給他們，您可以將這些使用者和群組移至預先定義的角色。<p>您可以使用 IBM Administration Console for Content Engine 來檢閱目前已授與這些使用者和群組的專用權。",
		admin_repcfg_teamspace_template_creators_hover_cm: "指定某個使用者或群組作為小組園地範本建立者時，將會為該使用者或群組提供在儲存庫上建立小組園地範本的適當專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>進一步瞭解</a>",
		admin_repcfg_teamspace_creators_hover_cm: "指定某個使用者或群組作為小組園地建立者時，將會為該使用者或群組提供在儲存庫上建立小組園地的適當專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>進一步瞭解</a>",
		admin_repcfg_teamspace_user_hover_cm: "指定某個使用者或群組作為小組園地使用者時，將會為該使用者或群組提供在儲存庫上使用小組園地的適當專用權。不過，使用者必須是小組園地成員才能存取小組園地。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>進一步瞭解</a>",
		admin_repcfg_entry_template_creators_hover_cm: "指定某個使用者或群組作為項目範本建立者時，將會為該使用者或群組提供在儲存庫上建立項目範本的適當專用權。<br/><br/>不過，特定項目範本的安全設定決定該使用者或群組對項目範本擁有的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>進一步瞭解</a>",
		admin_repcfg_entry_template_editors_hover_cm: "指定某個使用者或群組作為項目範本編輯者時，將會為該使用者或群組提供在儲存庫上修改項目範本的適當專用權。<br/><br/>不過，特定項目範本的安全設定決定該使用者或群組對項目範本擁有的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>進一步瞭解</a>",
		admin_repcfg_entry_user_hover_cm: "指定某個使用者或群組作為項目範本使用者時，將會為該使用者或群組提供在儲存庫上使用項目範本的適當專用權。<br/><br/>不過，特定項目範本的安全設定決定該使用者或群組對項目範本擁有的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>進一步瞭解</a>",
		admin_repcfg_office_template_creators_hover_cm: "指定某個使用者或群組作為 Microsoft Office Online 或 Edit Service 範本建立者時，將會為該使用者或群組提供在儲存庫上建立範本檔案的適當專用權。<br/><br/>不過，特定範本檔案的安全設定決定該使用者或群組對範本擁有的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a>",
		admin_repcfg_office_template_editors_hover_cm: "指定某個使用者或群組作為 Microsoft Office Online 或 Edit Service 範本編輯者時，將會為該使用者或群組提供在儲存庫上修改範本檔案的適當專用權。<br/><br/>不過，特定範本檔案的安全設定決定該使用者或群組對範本擁有的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a>",
		admin_repcfg_office_template_user_hover_cm: "指定某個使用者或群組作為 Microsoft Office Online 或 Edit Service 範本使用者時，將會為該使用者或群組提供其從 Web 用戶端建立新 Office Online 或 Edit Service 文件時套用範本的適當專用權。<br/><br/>不過，特定範本檔案的安全設定決定該使用者或群組對範本擁有的專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a>",
		admin_repcfg_draft_creators_hover_cm: "任何需要在 Microsoft Office Online 或 Edit Service 中協同編輯文件的使用者都必須獲指派此角色。請勿為使用者指派編輯者或使用者角色。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a>",
		admin_repcfg_draft_editors_hover_cm: "任何需要在 Microsoft Office Online 或 Edit Service 中協同編輯文件的使用者都必須獲指派<b>建立者</b>角色。如果為使用者指派編輯者角色，則他們無法建立草稿，而草稿是進行協同編輯的必要項目。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a>",
		admin_repcfg_draft_user_hover_cm: "任何需要在 Microsoft Office Online 或 Edit Service 中協同編輯文件的使用者都必須獲指派<b>建立者</b>角色。如果為使用者指派使用者角色，則他們無法建立草稿，而草稿是進行協同編輯的必要項目。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>進一步瞭解</a>",		
		admin_repcfg_search_others_hover_p8: "已指派專用權的使用者和群組，這些專用權不是與「管理者」、「建立者」及「使用者」相關聯的專用權。<p>透過從「其他」角色中移除這些使用者和群組，然後將搜尋角色指派給他們，您可以將這些使用者和群組移至預先定義的角色。<p>您可以使用 IBM Administration Console for Content Engine 來檢閱目前已授與這些使用者和群組的專用權。",		
		admin_repcfg_search_admins_hover_p8: "搜尋管理者是對儲存庫（物件儲存庫）具有<b>完整控制</b>許可權的使用者。您無法從管理工具中變更搜尋管理者清單。<br /><br />搜尋管理者可以刪除或修改任何搜尋。建立搜尋的使用者不需要與搜尋管理者共用搜尋。",
		admin_repcfg_search_creators_hover_p8: "指定某個使用者或群組作為搜尋建立者時，將會為該使用者或群組提供在儲存庫上建立搜尋的適當安全。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>進一步瞭解</a>",
		admin_repcfg_search_user_hover_p8: "指定某個使用者或群組作為搜尋使用者時，將會為該使用者或群組提供在儲存庫上使用搜尋的適當安全。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>進一步瞭解</a><br /><br /><b>提示：</b>如果您希望您環境中的所有使用者都能夠使用搜尋，則可以將 #AUTHENTICATED-USERS 虛擬帳戶新增至搜尋使用者角色。<br/><br />依預設，搜尋使用者可以建立搜尋及跨儲存庫搜尋，但是不能儲存這些搜尋。您可以透過讓搜尋使用者使用為其選取了下列選項的桌面，來防止這些使用者建立搜尋：<ul><li><b>防止使用者建立搜尋</b></li><li><b>防止使用者建立跨儲存庫搜尋</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "指定某個使用者或群組作為搜尋建立者時，將會為該使用者或群組提供在儲存庫上建立和儲存搜尋及跨儲存庫搜尋的適當專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>進一步瞭解</a><br /><br /><b>重要事項：</b>請確定搜尋建立者使用沒有為其選取下列選項的桌面：<ul><li><b>防止使用者建立搜尋</b></li><li><b>防止使用者建立跨儲存庫搜尋</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "指定某個使用者或群組作為搜尋編輯者時，將會為該使用者或群組提供修改現有的搜尋及跨儲存庫搜尋的適當專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>進一步瞭解</a><br /><br /><b>提示：</b>依預設，搜尋編輯者可以建立搜尋及跨儲存庫搜尋，但是不能儲存這些搜尋。您可以透過讓搜尋編輯者使用為其選取了下列選項的桌面，來防止這些編輯者建立搜尋：<ul><li><b>防止使用者建立搜尋</b></li><li><b>防止使用者建立跨儲存庫搜尋</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "指定某個使用者或群組作為搜尋使用者時，將會為該使用者或群組提供開啟和執行已儲存搜尋及跨儲存庫搜尋的適當專用權。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>進一步瞭解</a><br /><br /><b>提示：</b>依預設，搜尋使用者可以建立搜尋及跨儲存庫搜尋，但是不能儲存這些搜尋。您可以透過讓搜尋使用者使用為其選取了下列選項的桌面，來防止這些使用者建立搜尋：<ul><li><b>防止使用者建立搜尋</b></li><li><b>防止使用者建立跨儲存庫搜尋</b></li></ul>",
		admin_repcfg_db_encoding: "伺服器資料庫字元編碼：",
		admin_repcfg_db_encoding_hover: "IBM Content Manager 資料庫的預設字元編碼為 UTF-8。",
		admin_repcfg_db_encoding_specify: "指定資料庫字元編碼",
		admin_repcfg_db_encoding_utf8: "UTF-8 編碼",
		admin_repcfg_db_encoding_utf8_hover: "如果使用 UTF-8 編碼的資料庫，請指定此選項。IBM Content Navigator 將使用 UTF-8 編碼來檢查項目內容值字串的長度。",
		admin_repcfg_db_encoding_other: "其他編碼",
		admin_repcfg_db_encoding_other_hover: "如果使用非 UTF-8 編碼的資料庫，請指定此選項。IBM Content Navigator 將使用字元數來檢查項目內容值字串的長度。",
		admin_repcfg_language_codes: "伺服器語言碼：",
		admin_repcfg_language_codes_avail: "可用",
		admin_repcfg_language_codes_sel: "已選取",
		admin_repcfg_pdf_conversion: "要在附件中轉換成 PDF 文件的 MIME 類型：",
		admin_repcfg_pdf_conversion_avail: "可用",
		admin_repcfg_pdf_conversion_sel: "已選取",

		admin_repcfg_box_share_enable_classes_label: "要針對 Box 共用支援修改的類別：",
		admin_repcfg_box_share_enable_classes_hover: "可以修改此類別，以便在共用該項目時，將檔案的 ID 儲存在 Box 中。",
		admin_repcfg_box_share_enable_classes_warning: "重要事項：將修改所指定的任何類別以支援 Box 共用。儲存變更後，無法將變更從類別中移除。<br><br>您必須以檔案庫伺服器管理者的身分連接至儲存庫才能修改類別。",
		admin_repcfg_box_share_enable_classes_available: "可用的類別",
		admin_repcfg_box_share_enable_classes_selected: "選定類別",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "儲存 Box 共用 ID",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "已修改此類別來儲存 Box 共用 ID。無法移除此選項。",
		admin_repcfg_box_share_enable_classes_tracking_hover: "修改此類別，以便在共用項目時，讓它儲存 Box 中檔案的 ID。",

		admin_repcfg_redaction: "角色型修訂：",
		admin_repcfg_enable_redaction_hover: "指定是否要針對此儲存庫中的文件使用角色型修訂。<br/><br/>當下載或列印文件、由檢視器呈現文件或者文件顯示為縮圖時，將套用角色型修訂。當使用者檢視文件時，哪些使用者可以查看視他們的角色以及適用的修訂原則而定。",

		admin_repcfg_redaction_policy_permission_text: "指派原則編輯者：",
		admin_repcfg_redaction_policy_editors_hover: "選取將建立、修改和刪除修訂原則及修訂角色的使用者和群組。",
		admin_repcfg_redaction_policy_editors_select_hover: "修訂原則編輯者可以建立、修改和刪除修訂原則及修訂角色。",
		admin_repcfg_redaction_policy_administrators_hover_p8: "修訂原則管理者可以指派修訂原則編輯者。<br/><br/>您可以使用 IBM Administration Console for Content Engine 來變更修訂原則管理者清單。",
		admin_repcfg_redaction_policy_administrators_hover_cm: "修訂原則管理者可以指派修訂原則編輯者。<br/><br/>您可以使用 IBM Content Manager 系統管理用戶端來變更修訂原則管理者清單。",

		admin_repcfg_redaction_permission_text: "指派修訂編輯者：",
		admin_repcfg_redaction_editors_hover: "選取將建立、修改和刪除角色型修訂的使用者和群組。選取使用者和群組作為編輯者之後，必須先在修訂原則中指定他們作為編輯者，然後他們才可以編輯角色型修訂。",
   		admin_repcfg_redaction_editors_select_hover: "當也在修訂原則中將修訂編輯者指定作為編輯者時，這些編輯者可以建立、修改和刪除角色型修訂。",
   		admin_repcfg_redaction_administrators_hover_p8: "修訂管理者可以指派修訂編輯者。<br/><br/>您可以使用 IBM Administration Console for Content Engine 來變更修訂管理者清單。",
   		admin_repcfg_redaction_administrators_hover_cm: "修訂管理者可以指派修訂編輯者。<br/><br/>您可以使用 IBM Content Manager 系統管理用戶端來變更修訂管理者清單。",
		admin_repcfg_entry_template: "項目範本管理：",
		admin_repcfg_entry_template_enable_classes_label: "要針對項目範本支援修改的類別：",
		admin_repcfg_oos_reference_attribute_label: "Office Online 的參照屬性：",
		admin_repcfg_entry_template_enable_classes_hover: "重要事項：將修改所指定的任何類別以支援項目範本。儲存變更後，無法將變更從類別中移除。<br><br>可以修改類別，用於下列一個或兩個用途：<br><ul><li>儲存用來新增項目的項目範本 ID，以便在修改項目時套用項目範本設定</li><li>僅限於階層式資料夾類別：支援項目範本資料夾關聯</li></ul>您必須以檔案庫伺服器管理者的身分連接至儲存庫才能修改類別。",
		admin_repcfg_entry_template_enable_classes_warning: "重要事項：將修改所指定的任何類別以支援項目範本。儲存變更後，無法將變更從類別中移除。<br><br>您必須以檔案庫伺服器管理者的身分連接至儲存庫才能修改類別。",
		admin_repcfg_entry_template_enable_classes_available: "可用的類別",
		admin_repcfg_entry_template_enable_classes_selected: "選定類別",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "儲存項目範本 ID",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "修改此類別，讓它儲存用來新增項目的項目範本 ID，以便在修改項目時套用項目範本設定。",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "儲存資料夾關聯",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "修改此類別，讓它可以支援項目範本資料夾關聯。此選項僅適用於階層式資料夾類別。",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "已修改此類別來儲存項目範本 ID。無法移除此選項。",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "已修改此類別來儲存資料夾關聯。無法移除此選項。",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "只能使用階層式資料夾類別及非階層式類別來儲存資料夾關聯。",
		admin_repcfg_entry_template_root_folder_association_title: "與根資料夾相關聯的項目範本：",
		admin_repcfg_entry_template_root_folder_association_hover: "指定 IBM Content Manager 儲存庫上要與根資料夾相關聯的項目範本。<br /><br />如果將項目範本與根資料夾相關聯，使用者將項目新增至階層式資料夾，則項目範本將一律用來新增項目。",
		admin_repcfg_entry_template_root_folder_association_button: "設定關聯",
		admin_repcfg_oos_enable_classes_label: "要針對 Office Online 及 Edit Service 支援修改的類別：",
		admin_repcfg_oos_enable_classes_warning: "重要事項：將修改所指定的任何類別以使用 Microsoft Office Online 或 Edit Service。儲存變更之後，無法移除自動新增至每個類別的參照屬性。<br><br>您必須以檔案庫伺服器管理者的身分連接至儲存庫才能修改類別。",
		admin_repcfg_oos_enable_classes_available: "可用的類別",
		admin_repcfg_oos_enable_classes_selected: "選定類別",
		admin_repcfg_oos_enable_classes_note: "重要事項：",
		admin_repcfg_oos_enable_classes_selected_not_support: "Microsoft Office Online 或 Edit Service 不支援此類別。",
		admin_repcfg_oos_enable_classes_selected_not_support1: "該類別的版本原則設定為一律進行版本控制，Microsoft Office Online 或 Edit Service 不支援此原則。請選取不同類別。",
		admin_repcfg_download_recording: "追蹤下載：",
		admin_repcfg_download_recording_hover: "依預設，將 Social Collaboration Base Extensions 附加程式安裝在儲存庫上時，會追蹤下載。然而，停用此選項可以改進儲存庫的效能。<br><br>如果停用此選項，則使用者將看到停用此選項之前所進行的下載次數。",
		admin_repcfg_sync_service: "同步服務：",
		admin_repcfg_download_ignored: "忽略特定使用者的下載：",
		admin_repcfg_download_ignored_hover: "可以忽略特定使用者（例如管理者或系統帳戶）所要求的下載，以更精確地反映已下載文件的使用者數目。比方說，如果具有用來下載內容以產生每月報告的特定帳戶，則可以忽略該帳戶所要求的下載。<br><br><b>限制：</b>無法指定群組。",

		admin_repcfg_add_as_major_version: "新增為主要版本：",
		admin_repcfg_enable_add_as_major_version: "是",
		admin_repcfg_disable_add_as_major_version: "否",
		admin_repcfg_checkin_as_major_version: "移入作為主要版本：",
		admin_repcfg_enable_checkin_as_major_version: "是",
		admin_repcfg_disable_checkin_as_major_version: "否",
		admin_repcfg_annotation_security: "註釋安全：",
		admin_repcfg_inherit_annotation_security: "複製包含文件的安全",
		admin_repcfg_default_annotation_security: "使用預設註釋安全",
		admin_repcfg_connection_point: "工作流程連線點：",
		admin_repcfg_include_workflow_definition: "顯示工作流程定義類別：",
		admin_repcfg_include_form_template: "從範本類別顯示：",
		admin_repcfg_enable_include_workflow_definition: "是",
		admin_repcfg_disable_include_workflow_definition: "否",

		admin_repcfg_status_columns: "狀態圖示：",
		admin_repcfg_status_columns_hover: "指定您要查看其圖示的狀態。狀態圖示顯示在內容清單中之文件、資料夾和工作項目旁。",
		admin_repcfg_status_columns_documents_or_folders: "當文件或資料夾為下列狀態時，則顯示圖示：",
		admin_repcfg_status_columns_documents: "當文件為下列狀態時，則顯示圖示：",
		admin_repcfg_status_columns_documents_checked_out: "已移出",
		admin_repcfg_status_columns_documents_declared_records: "宣告為記錄",
		admin_repcfg_status_columns_documents_minor_versions: "有次要版本",
		admin_repcfg_status_columns_documents_compound_document: "是複合文件",
		admin_repcfg_status_columns_documents_bookmarks: "具有書籤",
		admin_repcfg_status_columns_documents_hold: "已保留",
		admin_repcfg_status_columns_documents_notes: "具有附註",
		admin_repcfg_status_columns_work_items: "當工作項目為下列狀態時，則顯示圖示：",
		admin_repcfg_status_columns_work_items_locked: "已鎖定",
		admin_repcfg_status_columns_work_items_checked_out: "已移出",
		admin_repcfg_status_columns_work_items_deadline: "有截止時間",
		admin_repcfg_status_columns_work_items_suspended: "暫停處理",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF 配置檔：",
		admin_repcfg_transform_xml_file: "自訂轉換檔案：",
		admin_repcfg_ssl: "SSL：",
		admin_repcfg_enable_ssl: "啟用",
		admin_repcfg_disable_ssl: "停用",
		admin_repcfg_keyringdb_file: "金鑰環資料庫檔案：",
		admin_repcfg_keyringstash_file: "金鑰環隱藏檔：",
		admin_repcfg_od_sso: "單一登入",
		admin_repcfg_od_enable_sso: "啟用",
		admin_repcfg_od_disable_sso: "停用",
		admin_repcfg_od_sso_password: "密碼",
		admin_repcfg_advanced_label: "進階",
		admin_repcfg_custom_properties_label: "自訂內容：",
		admin_repcfg_new_button_label: "新建",
		admin_repcfg_edit_button_label: "編輯",
		admin_repcfg_delete_button_label: "刪除",
		admin_repcfg_custom_head1: "名稱",
		admin_repcfg_custom_head2: "值",
		admin_repcfg_ecpdialog_title_new: "新建自訂內容",
		admin_repcfg_ecpdialog_title_edit: "編輯自訂內容",
		admin_repcfg_ecpdialog_name: "名稱：",
		admin_repcfg_ecpdialog_value: "值：",
		admin_repcfg_ecpdialog_save: "儲存",
		admin_repcfg_ecpdialog_create: "建立",
		admin_repcfg_ecpdialog_cancel: "取消",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "需要此值。值不能包含空白，且不能重複。",

		admin_repcfg_cmis_use_gzip_encoding: "使用 GZIP 編碼：",

		admin_repcfg_task_mgr_proxy: "作業管理程式連線 ID：",
		admin_repcfg_task_mgr_proxy_hover: "對於 Box 共用或小組園地刪除，作業管理程式使用管理者使用者 ID 及密碼執行用於修改儲存庫的背景作業。<br><br>按一下「設定」並使用有效的儲存庫管理者使用者 ID 及密碼登入儲存庫。",
		admin_task_manager_not_enabled_warning: "此選項需要作業管理程式服務，但是未啟用作業管理程式服務。您可以在「設定」的「一般」頁面上，為所有桌面啟用作業管理程式服務。",
		admin_task_manager_not_enabled_and_user_warning: "此選項需要作業管理程式服務，但是未啟用作業管理程式服務。在此頁面上，設定作業管理程式連線 ID，然後在「設定」的「一般」頁面上，為所有桌面啟用作業管理程式服務。",
		admin_task_manager_user_id_pw_not_set_warning: "此選項需要作業管理程式服務，以及管理者使用者 ID 及密碼。在此頁面上，設定作業管理程式連線 ID。",
		admin_repcfg_teamspaces_delete_task_id: "儲存器管理員：",
		admin_repcfg_teamspaces_delete_task_password: "密碼：",
		admin_repcfg_teamspaces_delete_task_Id_hover: "您必須指定檔案庫伺服器管理者，才能啟用作業管理程式服務以刪除儲存庫上的小組園地。",
		admin_repcfg_teamspaces_delete_task_hover: "依預設，在使用者刪除小組園地時，小組園地為隱藏。小組園地中的所有資料夾和文件仍保留在儲存庫上。<br /> <br />在您啟用此選項時，小組園地中只有歸檔在其他資料夾的文件才會保留在儲存庫上。",
		admin_repcfg_display_recent_teamspaces_p8_hover: "如果環境中具有大量小組園地，則可能需要很長時間，才能在<b>小組園地</b>標籤中顯示所有小組園地。可以選取此選項，以減少將資料移入清單所需要的時間量。<br /><br />如果使用者需要使用的小組園地位於所指定範圍外部，則使用者可以使用<b>過濾器</b>欄位來尋找小組園地。",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "如果您使用此選項，擁有小組園地擁有者角色的使用者可以修改利用 IBM Content Navigator 2.0.2 之前版本所建立之小組園地的關聯角色。<br /><br />此選項不會影響利用 IBM Content Navigator 2.0.2 版本建立的小組園地。",
		admin_repcfg_use_teamspaces_cm_hover: "指定使用者是否能夠在此儲存庫中建立小組園地和小組園地範本。<br /><br /><b>重要事項：</b>儲存庫必須支援階層式資料夾。<br /><br />如果您啟用小組園地，IBM Content Navigator 會在儲存庫中建立小組園地資料模型。資料模型包含 ACL 物件、專用權、專用權集，以及兩個新的項目類型。",
		admin_repcfg_folder_selector_hover: "選取在使用者瀏覽文件時，要作為根資料夾的資料夾。如果您的儲存庫上沒有配置階層式資料夾，這項設定可讓您定義根資料夾來支援瀏覽。如果您的儲存庫上有配置階層式資料夾，這項設定會置換儲存庫上所配置的根資料夾。",
		admin_repcfg_cm_use_sso_hover: "指定是否容許具備「信任登入」專用權集的使用者進行單一登入。<br /><br /><b>重要事項：</b>您必須在 Content Manager 伺服器上啟用單一登入，且必須將 WebSphere Application Server 配置給 LTPA，此配置參數才會起作用。",
		admin_repcfg_cm_direct_retrieve_hover: "依預設，會啟用直接擷取，因為它可讓 Web 用戶端快速擷取資源管理程式中的內容。<br /><br />如果您不希望用戶端應用程式直接存取資源管理程式，或者您有防火牆或 Proxy 伺服器，使得 Web 用戶端無法透過 URL 來存取資源管理程式，您可以停用此選項。舉例來說，當啟用直接擷取時，防火牆可能阻止使用者檢視 Applet 檢視器中的文件。",
		admin_repcfg_cmItemTypesToDisplay: "如果您不想讓使用者查看您 IBM Content Manager 伺服器上的資源項目類型和項目項目類型，您可以僅顯示文件模型項目類型。項目類型會在使用者建立搜尋、新增文件及建立資料夾時顯示。",
		admin_repcfg_cm_language_codes_hover: "指定當從 Content Manager 伺服器傳回資料時，要使用的語言。可用的語言清單，是透過伺服器上的語言定義清單來控制。<br /><br /><b>請謹記：</b>Web 用戶端中的資料會以使用者 Web 瀏覽器中所設定的語言顯示。",
		admin_repcfg_cm_pdf_conversion_hover: "如果使用者要傳送的文件，是由許多部分組成一個電子郵件附件，請指定要轉換為 PDF 的文件類型。所有部分會結合成單一 PDF 文件。",
		admin_repcfg_use_teamspaces_p8_hover: "指定使用者是否能夠在此儲存庫中建立小組園地和小組園地範本。<br /><br />如果您啟用小組園地，IBM Content Navigator 會在儲存庫中建立小組園地資料模型。資料模型包含內容範本、自訂物件、資料夾物件，以及數個資料夾。",
		admin_repcfg_use_entry_template_p8_hover: "指定您是否想要使用者能夠從 IBM Content Navigator，在此儲存庫上建立及管理項目範本。如果沒有啟用此特性，則使用者可以搜尋及使用已存在於儲存庫中的項目範本。<br /><br />如果啟用項目範本管理，則 IBM Content Navigator 會更新儲存庫上的項目範本資料模型。此更新會包含新內容。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>進一步瞭解</a>",
		admin_repcfg_use_entry_template_cm_hover: "指定您是否想要使用者能夠從 IBM Content Navigator，在此儲存庫上建立及管理項目範本。<br /><br />如果啟用項目範本管理，則 IBM Content Navigator 會在儲存庫上建立項目範本資料模型。資料模型會包含新 ACL 物件、新內容及新項目類型。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>進一步瞭解</a>",
		admin_repcfg_sync_service_p8_hover: "指定您是否想要使用者能夠在其工作站與行動式裝置之間同步化其最愛的項目。<br><br><b>重要事項：</b>若要使用此特性，您還必須完成下列作業：<br><ul><li>在管理工具的 <b>Sync Services</b> 區段中指定<b>同步服務公用 URL</b>。</li><li>將此儲存庫新增至要針對其啟用同步服務的桌面。</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "指定當使用者將文件新增至儲存庫時，是否依預設選取主要版本選項。<br /><br />如果使用者想新增文件來作為次要版本，他們可以選擇清除此選項。",
		admin_repcfg_p8_checkin_as_major_version_hover: "指定當使用者將文件移入至儲存庫時，是否依預設選取主要版本選項。<br /><br />如果使用者想移入文件來作為次要版本，他們可以選擇清除此選項。",
		admin_repcfg_p8_annotation_security_hover: "指定依預設註釋要套用哪種類型的安全。<br /><br />使用者可以選擇變更註釋的安全。",
		admin_repcfg_p8_connection_point_hover: "如果您想使用 IBM FileNet P8 工作流程，請選取一個 Process Engine 連線點。您選取的連線點，會決定存取此儲存庫的使用者所能使用的工作流程。",
		admin_repcfg_p8_include_workflow_definition_hover: "如果您在 Web 用戶端中顯示 IBM FileNet P8 工作流程定義文件類別，使用者可以搜尋及新增工作流程定義至儲存庫。",
		admin_repcfg_p8_include_form_template_hover: "如果您在 Web 用戶端中顯示 IBM FileNet P8 表單範本文件類別，使用者可以搜尋及新增表單範本至儲存庫。",
		admin_repcfg_od_afp2pdf_config_file_hover: "指定此儲存庫在 Web 應用程式伺服器上的 AFP2PDF 配置檔完整路徑。需要「AFP2PDF 轉換」，才能檢視和列印 AFP 資料。<br /><br /><b>請謹記：</b>必須安裝「AFP2PDF 轉換」，才能使用此參數。",
		admin_repcfg_od_transform_xml_file_hover: " 如果您想使用自訂轉換來轉換 Content Manager OnDemand 內容，請指定用來定義轉換之 XML 檔的完整路徑。XML 檔必須位於 Web 應用程式伺服器上。",
		admin_repcfg_od_ssl_hover: "指定是否使用 SSL，來加密 IBM Content Navigator 應用程式伺服器和 Content Manager OnDemand 檔案庫伺服器與物件伺服器之間的通訊。<br /><br /><b>重要事項：</b>當您對 Content Manager OnDemand 啟用 SSL 時，不會包含 IBM Content Navigator 應用程式伺服器、Web 伺服器或使用者工作站之間的通訊。",
		admin_repcfg_od_ssl_keyringdb_file_hover: "指定此儲存庫在 Web 應用程式伺服器上的金鑰環資料庫檔案完整路徑。例如 C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb。<br /><br />金鑰環資料庫檔案包含您的授信主要憑證。您應該使用高度檔案系統保護，來阻止未獲授權存取此檔案。",
		admin_repcfg_od_ssl_keyringstash_file_hover: "指定此儲存庫在 Web 應用程式伺服器上的金鑰環隱藏檔完整路徑。例如 C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth。<br /><br />金鑰環隱藏檔包含金鑰環資料庫檔案的密碼。您應該使用高度檔案系統保護，來阻止未獲授權存取此檔案。",
		admin_repcfg_od_sso_password_hover: "指定透過 OnDemand 伺服器進行單一登入時，要使用的密碼。",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API 支援自訂內容。在您透過 Web 用戶端連接儲存庫時，如果您想使用任何自訂內容，請指定自訂內容的名稱和值。<br /><br />如需支援的自訂內容的相關資訊，請參閱位於 ODWEK 安裝目錄 /api 子目錄中的 ODWEK Java API Javadoc。",
		admin_repcfg_od_custom_properties_name_hover: "輸入內容名稱。",
		admin_repcfg_od_custom_properties_value_hover: "輸入內容值。",
		admin_repcfg_od_use_sso_hover: "指定是否容許使用者單一登入。<br /><br />，此配置參數才能運作。<b>重要事項：</b>您必須在 Content Manager OnDemand 伺服器上啟用單一登入，此配置參數才能運作。",
		admin_repcfg_cmis_use_gzip_encoding_hover: "對此 CMIS 原始檔使用 GZIP 編碼。",
		admin_repcfg_cm_use_part_file_name: "下載文件時要使用的檔名：",
		admin_repcfg_cm_use_part_file_name_help: "指定使用者下載文件時，如何決定文件的檔名。",
		admin_repcfg_cm_use_part_file_name_enable: "使用檔名",
		admin_repcfg_cm_use_part_file_name_disable: "使用儲存庫中的項目名稱",
		admin_repcfg_add_doc_name: "新增文件的預設名稱：",
		admin_repcfg_add_doc_name_hover: "在新增文件之前，使用者可以變更名稱。",
		admin_repcfg_add_doc_name_empty: "無（空白）",
		admin_repcfg_add_doc_name_file_name: "所選文件的檔名",

		admin_repcfg_compound_documents: "複合文件特性：",
		admin_repcfg_compound_documents_hover: "啟用 P8 複合文件特性，例如導覽。",
		admin_repcfg_cm_action_list_config_enabled: "工作項目動作清單：",
		admin_repcfg_cm_action_list_config_hover: "當您配置 Content Manager 系統管理用戶端中遞送的文件時，可以指定使用者能夠對工作項目執行的一系列動作。<br /><br />如果您想使用 Content Manager 伺服器的動作清單，請選取此選項。這些設定將在快速功能表和工作項目的「編輯內容」視窗中使用。<br /><br /><b>重要事項：</b>「動作清單」中的設定將置換 Content Navigator 管理工具中配置的任何自訂的功能表。如果「動作清單」中不存在任何設定，則使用者無法對工作項目執行任何動作。",

		admin_repcfg_box_share: "Box 共用",
		admin_repcfg_box_share_p8_hover: "容許使用者共用此儲存庫中的文件。共用文件包括將檔案複製到 Box、建立鏈結並在電子郵件中傳送鏈結。<br /><br />如果您啟用 Box 共用，IBM Content Navigator 會在儲存庫中建立 Box 共用資料模型。若要安裝 IBM Content Navigator Box 共用附加程式，您必須以檔案庫伺服器管理者的身分連接至儲存庫。",

		admin_menu_type_icon: "功能表類型圖示",
		admin_menu_toolbar_hover: "工具列",
		admin_menu_toolbar_custom_hover: "自訂工具列",
		admin_menu_contextMenu_hover: "快速功能表",
		admin_menu_contextMenu_custom_hover: "自訂快速功能表",

		admin_menu_contextMenu_custom_empty: "所配置的外掛程式中未定義任何自訂快速功能表。",
		admin_menu_toolbar_custom_empty: "所配置的外掛程式中未定義任何自訂工具列。",

		admin_file_type_category_filters: "檔案類型過濾器：",
		admin_file_type_category_filters_hover_help: "指定使用者可以在下列狀況下使用的檔案類型清單：<ul><li>在 IBM Content Navigator for Microsoft Office 中搜尋或瀏覽時縮小結果清單的範圍<li>在 Web 用戶端中搜尋 IBM FileNet P8 儲存庫時縮小結果清單的範圍<li>限制使用者在使用項目範本時可以新增至儲存庫中的檔案類型</ul>",
		admin_file_type_only_use_in_et_folder_association: "僅在項目範本資料夾關聯中顯示",
		admin_office_config_properties_label: "Office 內容",
		admin_office_config_type_label: "資料類型",
		admin_office_config_mapped_property_label: "儲存庫內容",
		admin_office_config_properties_hover_help: "輸入然後新增您想要對映至儲存庫內容的每一個 Microsoft Office 內容的名稱。所有內容的資料類型必須相符",
		admin_office_config_mapped_property_hover_help: "如果您想將 Office 內容對映至多個儲存庫內容，必須建立新的內容對映",
		admin_new_property_mapping_title: "新建內容對映",
		admin_property_mapping_title: "編輯內容對映",
		admin_property_mapping_instruction: "指定您要將哪些 Microsoft Office 內容對映至儲存庫上的內容。Office 內容的資料類型必須符合儲存庫內容的資料類型。<br /><br />如果 Office 文件有多個內容來自於對映，IBM Content Navigator 會使用清單中的第一個內容來移入儲存庫上的內容。",
		admin_ms_general_settings: "一般配置：",
		admin_ms_delete_local_settings: "當使用者有下列情形時刪除本端檔案：",
		admin_ms_outlook_options: "Outlook 整合：",
		admin_ms_enable_props_mapping: "當使用者有下列情形時，將 Office 內容對映至儲存庫內容：",
		admin_ms_open_doc_when_checkout: "在開啟文件時，自動移出文件",
		admin_ms_open_doc_when_checkout_hover_help: "選取此選項，可防止使用者以檔案舊版改寫儲存庫上的檔案。",
		admin_ms_prompt_close_office: "在使用者關閉 Office 應用程式時，提示他們移入文件。",
		admin_ms_prompt_close_office_hover_help: "選取此選項，可避免使用者忘記移入其工作。",
		admin_ms_add_with_entry_template_only: "僅顯示「以範本新增」動作",
		admin_ms_delete_local_on_add: "當使用者新增文件時刪除本端檔案",
		admin_ms_delete_local_on_checkin: "當使用者移入文件或取消移出時刪除本端檔案",
		admin_ms_delete_local_on_add_hover_help: "當使用者在 IBM Content Navigator for Microsoft Office 中新增文件時，文件會新增至儲存庫，且文件的本端副本會保留開啟，以便使用者可以立即移出文件以進行變更。<br /><br />選取此選項，以在將文件新增至儲存庫之後，自動關閉及刪除文件的本端副本。",
		admin_ms_delete_local_on_checkin_hover_help: "當使用者在 IBM Content Navigator for Microsoft Office 中移入文件時，文件會移入至儲存庫，且文件的本端副本會保留開啟。同時，在使用取消移出動作之後，文件的本端副本會保留開啟。在本端副本開啟的情況下，使用者可以立即再次移出文件以進行變更。<br /><br />選取此選項，以在移入文件或使用取消移出動作之後，自動關閉並刪除文件的本端副本。",
		admin_ms_delete_local_on_save: "儲存文件",
		admin_ms_prompt_for_props_on_add: "在使用者新增電子郵件到儲存庫時，提示使用者提供內容值",
		admin_ms_prompt_for_props_on_add_hover_help: "如果您沒有選取此選項，Web 用戶端會使用定義給儲存庫的 Outlook 內容對映。<br /><br />對於要在其中新增電子郵件的資料夾，如果您有其相關聯的項目範本，可能就不會提示使用者提供任何內容。",
		admin_ms_delete_email_on_add: "將電子郵件新增至儲存庫時，從電子郵件伺服器刪除該電子郵件",
		admin_ms_send_email_as_link_only: "防止使用者以附件形式來傳送文件",
		admin_ms_send_email_as_link_only_hover_help: "如果您選取此選項，使用者只能從 Outlook 以鏈結形式來傳送文件。此選項可確保只有對儲存庫具備適當專用權的使用者才能檢視文件。",
		admin_ms_enable_prop_mapping_for_add: "在使用者新增或移出文件時，將 Office 內容對映到儲存庫內容",
		admin_ms_checkout_document_after_add: "在文件新增至儲存庫之後自動移出文件",
		admin_no_default_document_type_filtering: "在使用者執行搜尋時，依預設傳回所有文件類型",
		admin_no_default_document_type_filtering_hover_help: "在 IBM Content Navigator for Microsoft Office 中，預設行為是在使用者執行搜尋時只會看到現行應用程式的文件類型。例如，在使用者從 Microsoft Word 進行搜尋時，依預設選取 Word 文件類型。<br/><br/>然而，選取此選項會清除「文件類型」勾選框，讓使用者可以看到搜尋所傳回的所有文件。使用者在執行搜尋之前，可以透過選取一個以上的文件類型來置換此設定。",
		admin_ms_enable_prop_mapping_for_add_hover_help: "指定是否將定義給 Microsoft Office 文件的文件內容，對映至儲存庫中所定義的內容。<br /></br /><b>重要事項：</b>如果啟用此特性，則必須給環境中的每個儲存庫配置 Office 內容。如果您沒有將 Office 內容對映至儲存庫內容，此特性就不會起作用。<br /><br />這項設定不適用於 Microsoft Outlook。",
		admin_ms_checkout_document_after_add_hover_help: "選取此選項，以減少將文件新增至儲存庫之後，使用者使用文件所需要採取的步驟數。<br /></br /><b>提示：</b>若要確保使用者將檔案移入回儲存庫，請選取<b>當使用者關閉 Office 應用程式時提示他們移入文件</b>。",
		admin_ms_show_details_recently_used: "顯示<b>最近使用的項目</b>項目的詳細資料",
		admin_ms_show_details_recently_used_hover_help: "依預設，當您檢視「最近使用的項目」清單時，將隱藏項目的詳細資料，以容許顯示更多項目。當您選取此選項時，在「最近使用的項目」清單中，依預設將在詳細資料窗格中顯示首份文件的詳細資料。",
		admin_ms_show_no_permissions_warning: "當使用者編輯內容或移入文件，但是無權檢視文件的項目範本時，會顯示警告",
		admin_ms_show_no_permissions_warning_hover_help: "如果儲存庫中的文件是使用項目範本建立的，但是使用者無權檢視該文件的項目範本，則不會擷取項目範本。<br /><br/>因此，當使用者編輯文件內容時，會顯示內容，而無需使用項目範本。同時，當使用者移入文件時，會移入文件，而無需使用項目範本。<br /><br />依預設，發生這些動作時不會通知使用者未使用項目範本。警告僅會記載至日誌檔中。<br /><br />如果您想要顯示警告，在未使用項目範本時立即通知使用者，請選取此選項。",
		admin_ms_hide_search_actions: "收合搜尋過濾器區段",
		admin_ms_hide_search_actions_hover_help: "依預設，使用者可以套用動作過濾器以指定動作、使用者或使用者群組，以及選取發生動作的日期或日期範圍。例如，您可以僅搜尋在過去一個月中新增的文件。<br /><br />如果您不想要容許使用者套用動作過濾器，請選取此選項，以隱藏動作過濾器，並減少定義搜尋準則時顯示的欄位數目。",
		admin_ms_hide_save_document: "在功能區列中隱藏<b>儲存</b>選項",
		admin_ms_hide_save_document_hover_help: "透過使用<b>儲存</b>選項，使用者可以將文件變更儲存至儲存庫，而無需移入該文件。",
		admin_ms_indicate_managed_email_on_add: "指出是否已將電子郵件新增至儲存庫",
		admin_ms_indicate_managed_email_on_add_hover_help: "選取此選項可讓使用者知道電子郵件已經位於儲存庫中，這可以減少將電子郵件新增至儲存庫的次數。如果選取此選項，則會在 Microsoft Outlook 中建立一個名稱為 IBM ECM 的新顏色種類。任何新增至儲存庫中的電子郵件，都會自動新增至「在 IBM ECM 中管理」種類。",
		admin_ms_edit_group_add_command_configuration: "「編輯」群組中的「新增」選項：",
		admin_ms_edit_group_add_command_configuration_hover_help: "指定功能區列中<b>編輯</b>群組所提供的<b>新增</b>選項：<ul><li>選取<b>顯示所有「新增」選項</b>，以顯示「編輯」群組中提供的「新增」按鈕及所有「新增」動作。</li><li>如果要阻止使用者將文件新增至儲存庫，或者您想要使用者僅從小組園地中新增文件，請選取<b>隱藏所有「新增」選項</b>。</li><li>如果要施行項目範本資料夾關聯，並且阻止使用者選取其他項目範本，請選取<b>隱藏「以範本新增」動作</b>。</li><li>如果您想要要求使用者透過使用項目範本來新增文件，請選取<b>僅顯示「以範本新增」動作</b>。</li></ul>",
		admin_ms_show_edit_group_add_button: "顯示所有「新增」選項（預設值）",
		admin_ms_hide_edit_group_add_button: "隱藏所有「新增」選項",
		admin_ms_hide_add_with_entry_template: "隱藏「以範本新增」動作",
		admin_ms_managed_in_ecm: "在 IBM ECM 中管理",
		admin_ms_managed_in_ecm_hover_help: "如果使用者在 Microsoft Outlook 中顯示種類，則會針對新增至 IBM Content Manager 或 IBM FileNet Content Manager 儲存庫的電子郵件顯示此標籤。",
		admin_ms_managed_in_ibm_ecm_input_invalid: "「在 IBM ECM 中管理」種類名稱不能包含逗點 (,) 或分號 (;)。",
		admin_delete_open_docs_after_close: "使用者關閉已開啟的文件時自動將其刪除",
		admin_admin_delete_open_docs_after_close_hover_help: "如果使用者在 IBM Content Navigator for Microsoft Office 中開啟文件，則會將此文件下載至使用者文件目錄或者桌面的檔案追蹤設定所指定的位置。<br><br>選取此選項以在使用者關閉已開啟但沒有移出的文件時將其刪除。選取此選項可讓您：<ul><li>強制符合 IT 原則的標準</li><li>確保使用者是使用最新版本的文件</li><li>減少用來儲存文件的磁碟空間數量</li><ul>",
		admin_ms_custom_command_configuration: "自訂指令：",
		admin_ms_custom_command_configuration_hover_help: "最多可以將四個指令新增至 Microsoft Office 應用程式的 IBM Content Navigator for Microsoft Office 工具列中。可以使用這些指令來開啟 URL。例如，可以新增指令來開啟可用來搜尋使用者和群組的服務。",
		admin_ms_custom_command_dialog_title: "編輯自訂指令",
		admin_ms_custom_command_dialog_intro_text: "定義一個指令，此指令可用來從 Microsoft Office 應用程式的 IBM Content Navigator for Microsoft Office 工具列中開啟 URL。",
		admin_ms_custom_command_id: "指令 ${0}",
		admin_ms_custom_command_available_label: "可用",
		admin_ms_custom_command_available_hover_help: "如果定義給指令的 URL 需要進行離線維護，則可以清除此指令的勾選框，讓此指令不會顯示在 Microsoft Office 中。<br/><br/><b>重要事項：</b>使用者必須登出桌面，才能使這些變更反映在 IBM Content Navigator for Microsoft Office 中。",
		admin_ms_custom_command_command_id_label: "指令 ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "標籤",
		admin_ms_custom_command_label_hover_help: "指定 Microsoft Office 中此指令所要顯示的標籤。",
		admin_ms_custom_command_description_label: "說明",
		admin_ms_custom_command_description_hover_help: "指定 Microsoft Office 中此指令所要顯示的說明。",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "指定用來從 Microsoft Office 中開啟的完整 URL。此 URL 可以是網頁或服務。",
		admin_ms_custom_command_icon_label: "圖示",
		admin_ms_custom_command_icon_hover_help: "指定所要顯示圖示的檔名，例如 CommandIcon.png。<br/><br/><b>重要事項：</b>必須將圖示檔新增至每個用戶端機器上 IBM Content Navigator for Microsoft Office 安裝目錄中的 Plugins 子目錄。<br/><br/>如果圖示檔不在 Plugins 目錄中，或者您沒有指定圖示，則會顯示預設圖示 customButtonIcon_38.gif。",
		admin_ms_custom_command_group_name: "群組標籤：",
		admin_ms_custom_command_group_name_hover_help: "可以指定要顯示於功能區列中自訂指令下方的群組標籤。<br/><br/>如果沒有指定標籤，則群組標籤為<b>自訂指令</b>。",
		admin_ms_ribbon_tab_label: "IBM ECM 分頁標籤：",
		admin_ms_ribbon_tab_hover_help: "輸入 Microsoft Office 功能區列中 IBM Content Navigator for Microsoft Office 標籤所要顯示的名稱。如果沒有指定名稱，則標籤名稱為 \"IBM ECM\"。",
		admin_ms_close_task_pane_on_open: "使用者開啟文件時關閉作業窗格",
		admin_ms_close_task_pane_on_open_hover_help: "如果要將使用者在 Microsoft Office 中可以查看文件的空間放至最大，請選取此選項。<br/><br/>Microsoft Office 2010 使用者：如果要確保針對所有文件關閉此作業窗格，請啟用多重文件介面 (MDI) 模式，方式是按一下<b>選項</b> &gt; <b>進階</b>，然後清除<b>在工作列中顯示所有視窗</b>選項。",
		admin_ms_open_document_options: "開啟文件選項：",
		admin_ms_delete_local_file_options: "刪除本端檔案選項：",
		admin_ms_add_and_checkin_options: "新增及移入選項：",
		admin_ms_search_options: "搜尋選項：",
		admin_ms_display_options: "顯示選項：",
		admin_ms_bidirection_enable_label: "啟用對雙向文字的支援",
		admin_ms_bidirection_enable_hover_help: "如果您要容許使用者在 IBM Content Navigator for Microsoft Office 中採用從左到右以外的方向輸入或檢視文字，請選取此選項。",
		admin_ms_text_direction_label: "內容的基本文字方向：",
		admin_ms_text_direction_hover_help: "指定在 IBM Content Navigator for Microsoft Office 中的輸入欄位中輸入文字的方向。此設定還控制資料夾名稱或內容值等項目的顯示方式。",
		admin_ms_control_threshold_label: "要啟用提前尋找的項目數下限：",
		admin_ms_control_threshold_hover_help: "依預設，當項目數大於或等於 50 時，會針對在下拉清單中具有預先定義值的搜尋或設定內容啟用提前尋找。您可以變更最小值。",

		admin_ms_default_email_class: "新增電子郵件時所要使用的類別",
		admin_ms_default_email_class_hover_help: "凡是從 Microsoft Outlook 新增至此儲存庫的電子郵件均會新增至您指定的類別中。使用者無法變更此類別。",
		admin_ms_default_folder_class: "建立資料夾時所要使用的類別",
		admin_ms_default_folder_class_hover_help: "凡是從 Microsoft Office 應用程式在此儲存庫中建立的資料夾均會新增至您指定的類別。使用者無法變更此類別。",
		admin_ms_default_folder_warn_title: "在建立資料夾時，無法使用 ${0} 類別來作為要使用的類別。",
		admin_ms_default_folder_warn_name_prop_invalid: "類別的名稱內容不是字串，而且資料夾的名稱必須是字串。<br />在建立資料夾時，請選取使用不同的類別，或請您的 IBM Content Manager 管理者將類別的名稱內容變更為字串。",
		admin_ms_default_folder_warn_req_props: "類別中有些必要內容沒有值。但是，當使用者從 IBM Content Navigator for Microsoft Office 來建立資料夾時，無法指定這些必要內容的值。<br />在建立資料夾時，請選取使用不同的類別，或請您的 IBM Content Manager 管理者將必要內容變為選用，或預先填寫必要內容的值。",
		admin_ms_delimiter_for_office_properties: "多值字串內容的定界字元",
		admin_ms_delimiter_for_office_properties_hover_help: "指定一個字元，該字元將用作要對映到多值字串內容之字串內容的定界字元。依預設，您可以將一組值指派給多值字串內容，並使用分號 (;) 作為定界字元來區隔各值。不過，如果您的其中一個字串值包括分號，則除非將定界字元變更為其他字元，否則將無法新增該字串值。例如，您可以將定界字元變更為逗點 (,)",
		admin_ms_outlookPropertyRemembrance : "新增訊息及附件時記住設定",
		admin_ms_outlookPropertyRemembrance_hover_help : "指派給訊息及附件的內容值、位置、類別選項和安全會由系統記住，並且將用來作為新增未來項目時的預設值。",

		admin_file_type_name_hover_help: "名稱浮動說明",
		admin_file_type_description_hover_help: "說明浮動說明",
		admin_file_type_dialog_title: "編輯檔案類型過濾器",
		admin_new_file_type_dialog_title: "新建檔案類型過濾器",
		admin_mobile_feature_dialog_title: "特性",
		admin_mobile_feature_dialog_new_title: "新增特性",
		admin_file_type_instructions: "建立過濾器，讓使用者用來縮小其搜尋結果清單的範圍。您可以將多個 MIME 類型對映至過濾器。",
		admin_file_type_filter_place_holder: "過濾 MIME 類型",
		admin_new_button_label: "新建",
		admin_edit_button_label: "編輯",
		admin_delete_button_label: "刪除",
		admin_copy_button_label: "複製",
		admin_verify_button_label: "驗證",
		admin_availabe_filters_label: "可用的過濾器",
		admin_selected_filters_label: "選取的過濾器",

		admin_mobile_access: "行動式應用程式的存取：",
		admin_mobile_access_hover_help: "如果您想從行動式裝置使用 IBM Content Navigator，建議您讓使用者能夠從行動式應用程式存取此桌面。<br /><br />如果您不讓使用者從行動式應用程式存取此桌面，使用者仍可以從其行動式瀏覽器存取 Web 用戶端。不過，Web 用戶端並沒有設計成從行動式裝置存取。",

		admin_mobile_access_allow_label: "容許使用者：",
		admin_mobile_allow_add_photos: "從相機和照片庫新增照片",
		admin_mobile_allow_add_docs: "在儲存庫中新增文件和建立資料夾",
		admin_mobile_allow_open_docs: "在其他應用程式中開啟文件",
		admin_mobile_allow_add_docs_hover_help: "使用者可以從其他行動式應用程式建立資料夾或新增文件，例如：電子郵件所附加的文件。",
		admin_mobile_allow_open_docs_hover_help: "會提示使用者選取應用程式，以用來檢視選取的文件。如果只有一個可用的應用程式，則會使用該應用程式。",
		admin_mobile_features: "特性：",
		admin_mobile_features_hover_help: "指定 IBM Content Navigator 行動式應用程式中要顯示此桌面的哪些特性。",
		admin_mobile_new_feature_button_label: "新增特性",
		admin_mobile_move_up_button_label: "上移",
		admin_mobile_move_down_button_label: "下移",
		admin_desktop_mobile_instructions: "這裡提供行動式設定指示",
		admin_desktop_max_number_of_docs_to_add: "要新增的文件數目上限：",
		admin_desktop_max_number_of_docs_to_add_hover_help: "指定使用者一次可以新增的文件數目上限。預設上限為 50。不過，您最高可將上限設為 300。",
		admin_desktop_max_number_of_docs_to_modify: "要修改的項目數上限：",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "指定使用者一次可以修改的項目數上限。預設上限為 50。不過，您最高可將上限設為 300。",
		admin_desktop_max_conversion_size: "PDF 轉換的資料數量上限 (MB)：",
		admin_desktop_max_conversion_size_hover_help: "<b>限制：</b>此設定在 IBM Content Manager OnDemand 上不受支援。<br/><br/>指定可轉換為 PDF 的資料數量上限。當使用者將項目下載為 PDF 檔案或以 PDF 檔案的形式透過電子郵件傳送項目時，此限制適用。<br /><br />如果無法判斷每一個文件的大小，則仍然會將文件轉換為 PDF。<br/><br/>預設限制是 200 MB。設定高於 200 MB 的限制可能會影響系統效能。",
		admin_desktop_timeProperties: "時間戳記：",
		admin_desktop_time_properties_hover_help: "<b>僅限 IBM FileNet P8 使用者：</b>此設定適用於自訂內容，不適用於系統內容。例如，如果您選取<b>僅顯示時間戳記的日期部分</b>，「修改者」內容將仍然顯示時間戳記的時間部分。<br/><br/>此設定不會變更儲存庫中的時間戳記。",
		admin_desktop_disable_time_stamp: "顯示完整的時間戳記",
		admin_desktop_enable_time_stamp: "僅顯示時間戳記的日期部分",
		admin_desktop_timezone: "時區：",
		admin_desktop_timezone_localuser: "顯示使用者的當地時區",
		admin_desktop_timezone_alluser: "針對所有使用者顯示相同的時區",
		admin_desktop_timezone_hover_help: "您可以指定使用者是看到基於其當地時區的時間戳記，還是所有使用者看到相同的時間戳記。<br/><br/>此設定不會變更儲存庫中的時間戳記。不過，您選取的設定決定當使用者新增或修改項目時，用於在儲存庫中建立時間戳記的時區。",
		admin_desktop_mobile_feature_display_label: "顯示",
		admin_desktop_mobile_feature_icon_file_label: "圖示檔",
		admin_mobile_feature_dialog_icon_file_label: "圖示檔：",
		admin_mobile_feature_dialog_url_label: "URL：",
		admin_desktop_mobile_feature_name_label: "名稱",
		admin_desktop_mobile_select_feature_label: "選取功能",
		admin_desktop_mobile_feature_icon_label: "功能圖示",
		admin_desktop_share_admin_none: "未設定管理者。",
		admin_desktop_share_admin_edit_label: "設定管理者...",
		admin_browse_icon: "瀏覽圖示",
		admin_search_icon: "搜尋圖示",
		admin_favorites_icon: "我的最愛圖示",
		admin_casesearch_icon: "案例圖示",
		admin_datacap_icon: "Datacap 圖示",
		admin_system_defined: "系統定義",
		admin_icon_file_placeholder_text: "檔案位置（即 http://icons.com/image.bmp）",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "根",
		admin_folder_default: "預設值",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "工具列",
		admin_menu_context_menus: "快速功能表",
		admin_menu_office_toolbars: "Microsoft Office 功能區列指令",
		admin_menu_office_menus: "Microsoft Office 快速功能表",

		admin_file_name_label: "檔名：",
		admin_exportconfiguration_security_label: "併入獲授權使用此桌面的使用者和群組",
		admin_exportconfiguration_instruction: "您可以將桌面（包括與選定桌面相關聯的儲存庫配置和外掛程式配置）匯出至檔案，以便匯入至 IBM Content Navigator 的另一個實例。",
		admin_exportconfiguration_dialog_label: "匯出桌面",
		admin_exportconfiguration_button_label: "匯出",
		admin_dialog_select_all: "全選",
		admin_dialog_deselect_all: "全部清除",

		admin_importconfiguration_instruction: "選定配置檔中的項目會匯入至此系統。不過，如果系統上已存在使用相同 ID 的項目，則您必須決定要保留或改寫項目。",
		admin_importconfiguration_dialog_label: "匯入桌面",
		admin_importconfiguration_reason_dialog_label: "匯入修訂原因",
		admin_importconfiguration_button_label: "匯入",
		admin_to_be_imported: "要匯入的配置項目",
		admin_on_target_system: "目標系統的現有項目",
		admin_import_short_warning_message: "此系統上已存在下列項目。選取您要在此系統上進行取代的項目。",
		admin_import_warning_message: "下列配置項目的 ID 與目標系統上已存在項目的 ID 相同。僅選取您要匯入目標系統並進行改寫的這些項目。<br /><br />如果您不想改寫配置項目，請在從其匯出桌面的實例上建立項目副本，提供它不同 ID，然後將其與桌面建立關聯。再次匯出桌面，然後在此實例上匯入桌面。",
		admin_choose_file_to_import_label: "選擇要匯入的檔案：",
		admin_download_imported_log: "下載報告",
		admin_desktop_import_summary: "桌面匯入摘要",
		admin_reason_import_summary: "修訂原因匯入摘要",
		admin_rba_import_summary: "管理角色匯入摘要",
		admin_import_open_tabs_checking: "必須關閉管理工具中除<bold>桌面</bold>標籤之外的所有其他標籤，然後才能匯入桌面。",
		admin_import_no_conflict: "將匯入下列項目：",
		admin_desktop_invalid: "無效桌面",
		admin_desktop_warning: "已儲存桌面，但是存在警告。",
		admin_repos_warning: "已儲存儲存庫，但是存在警告。",
		admin_config_type_icon: "配置項目類型圖示",

		admin_approval_workflow: "核准工作流程",
		admin_approval_workflow_hover: "容許使用者啟動預先定義的核准工作流程。您可以停用核准工作流程，以容許使用者啟動由訂閱進行定義的自訂核准工作流程。依預設，已啟用核准工作流程。<br><br><b>重要事項：</b>如果啟用核准工作流程，則還必須確保將一個及/或兩個預先定義的工作流程定義（ICNParallelDocumentApproval.pep 和 ICNSequentialDocumentApproval.pep）新增至儲存庫並傳送至「內容處理引擎」。",

		admin_cannot_add_desktop_members_error: "您無法指定可存取此桌面的使用者和群組。",
		admin_cannot_add_desktop_members_error_explanation: "您沒有適當的權限來擷取使用者和群組資訊。",
		admin_cannot_add_desktop_members_error_userResponse: "請用不同的使用者名稱來登入，或請 IBM Content Manager 系統管理者授予您 UserACLOwner 專用權，這是擷取使用者和群組資訊所必要的專用權。",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "無法選取使用者和群組。",
		admin_cannot_select_users_groups_error_explanation: "您沒有適當的權限來擷取使用者和群組資訊。",
		admin_cannot_select_users_groups_error_userResponse: "請用不同的使用者名稱來登入，或請 IBM Content Manager 系統管理者授予您 UserACLOwner 專用權，這是擷取使用者和群組資訊所必要的專用權。",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "找不到 OAuth2 用戶端。",
		oauth_client_not_found_error_explanation: "找不到 OAuth2 用戶端 ID ${0}。",
		oauth_client_not_found_error_userResponse: "請與系統管理者聯絡，告訴他們找不到 OAuth2 用戶端 ID。",
		oauth_client_not_found_error_adminResponse: "檢閱儲存庫配置，並驗證它是否包含正確的 OAuth2 用戶端 ID。",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "用戶端 ID",

		oauth_login_failed_error: "儲存庫登入失敗。",
		oauth_login_failed_error_explanation: "嘗試登入儲存庫 ${0} 失敗。",
		oauth_login_failed_error_userResponse: "請驗證使用者 ID 及密碼是否正確，然後再次嘗試登入。",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "儲存庫 ID",

		oauth_error_return_error: "嘗試登入 ${0} 時發生錯誤。",
		oauth_error_return_error_explanation: "${0} 授權嘗試失敗。",
		oauth_error_return_error_userResponse: "請聯絡系統管理者，並提供下列資訊：${0} 授權嘗試失敗，並傳回下列錯誤訊息：<br>${1}<br><b>錯誤：</b> ${2}。<br><b>說明：</b> ${3}。",
		oauth_error_return_error_adminResponse: "該錯誤的其他相關資訊位於 Web 應用程式伺服器日誌檔中。如需日誌檔的相關資訊，請參閱 IBM Knowledge Center 中的「IBM Content Navigator 日誌檔」。透過使用 ${0} 授權嘗試的相關資訊，嘗試更正問題，並驗證是否已啟用 OAuth2。",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth 目標應用程式",
		oauth_error_return_error_1: "錯誤訊息",
		oauth_error_return_error_2: "錯誤",
		oauth_error_return_error_3: "錯誤說明",

		oauth_error_unknown: "無法辨識的 OAuth 錯誤訊息。",

		delete_share_permission_error: "未刪除共用。",
		delete_share_permission_error_explanation: "您沒有適當的權限來刪除共用。",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "無法共用此項目。",
		class_not_support_share_error_explanation: "類別 ${0} 未設定為支援共用。",
		class_not_support_share_error_0: "類別名稱",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "無法共用此項目。",
		rbr_not_support_share_error_explanation: "已將機密內容新增至項目。",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "使用者嘗試用來登入的裝置未獲授權來存取使用者的帳戶。",
		box_oauth_error_invalid_request: "要求遺漏必要的參數、包括無效參數值、某個參數包括多次或形態異常。",
		box_oauth_error_unsupported_response_type: "授權伺服器不支援使用此方法取得授權碼。檢查要求中程式碼參數的值。",
		box_oauth_error_access_denied: "資源擁有者或授權伺服器拒絕了要求。",
		box_oauth_error_temporarily_unavailable: "您的裝置受到速率限制，您需要降低授權要求速率，或者稍等片刻。",
		box_oauth_error_unknown: "無法辨識的 Box 錯誤訊息。",

		admin_default_search_type: "預設搜尋類型",
		admin_default_search_type_hover: "在<b>搜尋選項</b>功能表的<b>搜尋</b>欄位中指定依預設會選取的選項。",
		admin_default_search_type_documents: "文件",
		admin_default_search_type_folders: "資料夾",
		admin_default_search_type_folders_and_documents: "文件和資料夾",

		admin_restricted_search_type: "容許搜尋",
		admin_restricted_search_type_hover: "依預設，使用者可以搜尋文件和資料夾。如果您要隱藏「搜尋」選項並將搜尋僅限制為文件，請選取「文件」並取消選取「資料夾」。</br></br> 如果您容許搜尋文件和資料夾，請選取開啟搜尋窗格要顯示的預設選項。",
		admin_restricted_search_type_documents: "文件",
		admin_restricted_search_type_folders: "資料夾",
		admin_restricted_search_type_folders_and_documents: "文件和資料夾",

		admin_default_search_version: "預設搜尋版本",
		admin_default_search_version_hover: "在<b>搜尋選項</b>功能表的<b>版本</b>欄位中指定依預設會選取的選項。",

		admin_all_classes_search: "搜索所有類別",
		admin_all_classes_search_hover: "指定是否允許使用者在所有類別中搜尋，以及如果允許，應該在文件搜尋中包括哪些內容。",
		admin_all_classes_search_removed_hover: "搜尋所有類別的選項不可用，因為 Navigator application web.xml 中的環境參數 allPseudoClassHidden 參數設定為 true。",
		admin_all_classes_search_hide: "移除選擇來搜尋所有類別",
		admin_all_classes_search_documents_only_documents: "文件搜尋僅包括文件、已儲存的搜尋及項目範本",
		admin_all_classes_search_documents_non_folders: "文件搜尋僅包括任何非資料夾項目",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "樹狀視圖：",
		admin_feature_config_tree_view_hoverhelp: "指定使用者是否可以透過「瀏覽」窗格來存取儲存庫中的資料夾清單。如果您隱藏「瀏覽」窗格，則使用者必須使用內容清單來導覽至儲存庫中的資料夾。",
		admin_feature_config_selected_repositories_label: "儲存庫：",
		admin_feature_config_selected_repositories_hoverhelp: "選取使用者可以在此特性中存取的儲存庫。",
		admin_feature_config_selected_repositories_select_state_hdr: "選取儲存庫",
		admin_feature_config_selected_repositories_name_hdr: "儲存庫名稱",
		admin_feature_config_selected_repositories_show_hdr: "顯示",
		admin_feature_config_invalid_icon_title: "此特性遺漏了部分必要設定",
		admin_feature_config_view_select_hdr: "選取視圖",
		admin_feature_config_view_hdr: "檢視",
		admin_feature_config_view: "檢視",
		admin_feature_config_views: "視圖：",
		admin_feature_config_views_hoverhelp: "指定使用者可以將哪些視圖套用至內容清單。會按照視圖的列出順序顯示視圖。第一個選定的視圖是特性的預設視圖。<br><br><b>重要事項：</b>如果您要啟用幻燈片視圖，則必須配置 HTML 轉換檢視器才能查看文件預覽。",

		admin_custom_dialog_name: "名稱：",
		admin_custom_dialog_value: "值：",
		admin_custom_setting_name_hover: "輸入您要新增至配置之 Daeja ViewONE 設定的名稱。如需配置設定的相關資訊，請參閱 Daeja ViewONE 說明文件。",
		admin_custom_setting_value_hover: "輸入要用於 Daeja ViewONE 配置設定的值。如需配置設定有效值的相關資訊，請參閱 Daeja ViewONE 說明文件。",

		entry_template_name_required_message: "「項目範本設定」上的名稱欄位是必要的。",
		entry_template_name_invalid_message: "「項目範本設定」上的名稱欄位不能包含下列字元：* \\ / : ? \" < > |。",
		entry_template_save_in_member_empty_message: "如果給「項目範本設定」上的「共用對象」欄位選取了特定使用者和群組，則必須至少指定一個使用者或群組。",
		entry_template_no_permission_to_save_to_teamspace_message: "您無權將項目範本新增至從「項目範本設定」上的「儲存位置」中選取的小組園地 (${0})。",
		entry_template_save_in_destination_required_message: "您必須在<b>設定項目儲存體位置</b>區段中指定預設儲存位置。",
		entry_template_save_in_destination_must_select_folder: "如果您隱藏了<b>儲存位置</b>欄位並且需要使用者將新項目新增至資料夾，則必須在<b>設定項目儲存體位置</b>區段中的<b>預設儲存位置</b>欄位中選取資料夾。",
		entry_template_what_to_save_required_message: "在「設定選項」上，為您想要儲存的項目至少選取一個選項。",
		entry_template_custom_workflow_empty_message: "如果您選取<b>自訂工作流程...</b>，則您必須搜尋並選取要使用的工作流程。",

		entry_template_new: "新建項目範本",
		entry_template_name_hover: "項目範本名稱不能包含下列字元：* \\ / : ? \" < > |",
		entry_template_name_invalid: "項目範本名稱不能包含下列任何字元：* \\ / : ? \" < > |",
		entry_template_description_hover: "請提供說明，讓使用者能夠區別此項目範本與其他項目範本。",
		entry_tempalte_save_in_hover: "指定項目範本的儲存位置。<br><br><b>限制：</b>如果您將項目範本儲存在小組園地中，則您只能在此小組園地中使用該項目範本。",
		entry_template_inherit_hover: "如果您選取此選項，則會將上層資料夾的安全設定新增至與項目範本共用的使用者及群組清單。",
		entry_template_builder_aria_label: "項目範本建置器",
		entry_template_builder_layout_aria_label: "項目範本內容建置器",

		entry_template_settings_document: "定義項目範本",
		entry_template_settings_folder: "設定項目儲存體位置",
		entry_template_settings_folder_intro: "指定使用此項目範本所新增項目的儲存位置。",
		entry_template_settings_properties: "設定項目內容",
		entry_template_settings_properties_intro: "您可以指定使用此項目範本所新增項目的預設值或預先定義值。此外，您可以變更內容的佈置，以控制所顯示的內容及其顯示順序。",
		entry_template_settings_workflow: "配置項目的工作流程",
		entty_template_settings_workflow_intro: "您可以指定使用此項目範本新增項目時是否啟動工作流程。",
		entry_template_settings_security: "設定項目安全",
		entry_template_settings_security_intro: "您可以指定使用此項目範本所新增項目的預設安全或預先定義安全。具有適當的許可權的使用者可能會在新增項目之後變更項目的安全。",
		entry_template_settings_options: "設定項目的選項",
		entry_template_xt_warning: "儲存此項目範本的變更，會將此項目範本從 IBM Workplace XT 項目範本轉換為 IBM Content Navigator 項目範本。IBM Workplace XT 不支援 IBM Content Navigator 項目範本。",

		entry_template_properties_edit_layout: "編輯佈置...",
		entry_template_properties_read_only: "唯讀",
		entry_template_properties_hidden: "隱藏",

		entry_template_destination_show: "顯示<b>儲存位置</b>欄位",
		entry_template_destination_show_hover: "如果您顯示<b>儲存位置</b>欄位，則使用者可以變更項目儲存位置。",
		entry_template_destination_hide: "隱藏<b>儲存位置</b>欄位",
		entry_template_destination_hide_hover: "如果您隱藏<b>儲存位置</b>欄位，則使用者不能變更項目儲存位置。",
		entry_template_folder_save_in_default: "預設<b>儲存位置</b>：",
		entry_template_folder_save_in_default_hover: "指定使用此項目範本所新增項目的預設位置。<br><br>您選取的預設位置會對項目範本的執行時期行為施加限制：<ul><li>使用者無法選取不同的儲存庫。</li><li>如果預設位置是小組園地，則使用者無法選取不同的小組園地。</li></ul>不過，如果使用者使此項目範本與資料夾相關聯，則使用者可以置換為此項目範本配置的儲存體位置。",
		entry_template_folder_restrict_choice: "需要使用者將項目新增至預設位置或預設位置的子資料夾。",
		entry_template_folder_file_in_required: "需要使用者將新項目新增至資料夾",
		entry_template_folder_file_in_required_hover: "如果您沒有選取此選項，則使用者可以將項目新增至儲存庫的根資料夾。<br><br><b>限制：</b>桌面配置可能需要使用者選取資料夾。",

		entry_template_document_type_show: "顯示<b>要儲存的項目</b>欄位",
		entry_template_document_type_show_hover: "如果您顯示<b>要儲存的項目</b>欄位，則您所選取的項目會顯示為<b>要儲存的項目</b>欄位中的選項。",
		entry_template_document_type_hide: "隱藏<b>要儲存的項目</b>欄位",
		entry_template_document_type_hide_hover: "如果您隱藏<b>要儲存的項目</b>欄位，則當使用者使用此項目範本來新增文件時，會一律使用您所選取的文件類型。",
		entry_template_document_type: "可以使用此項目範本來新增下列項目：",
		entry_template_document_type_hover: "如果您顯示<b>要儲存的項目</b>欄位，則您所選取的項目會顯示為<b>要儲存的項目</b>欄位中的選項。<br><br>如果您隱藏<b>要儲存的項目</b>欄位，則當使用者使用此項目範本來新增文件時，會一律使用您所選取的文件類型。",

		entry_template_misc: "其他選項：",
		entry_template_auto_classify_show: "自動將文件的內容分類",
		entry_template_auto_classify_show_hover: "當在 FileNet Content Manager 上對文件進行分類時，將會檢查文件的內容，以判斷文件的適當類別和內容值。<br><br>請與系統管理者聯絡，以判斷 Content Platform Engine 上是否啟用了內容分類。<br><br>如果您啟用此選項，則當使用者將文件新增至儲存庫時，可能會變更文件的類別和內容。",
		entry_template_allow_duplicate_file_names: "容許檔名重複的文件",
		entry_template_allow_duplicate_file_names_hover: "依預設，您可以將名稱相同的文件新增至 FileNet Content Manager 中的資料夾。如果您希望所選儲存體位置中的每一個檔案都具有唯一名稱，則您可以清除此選項。",
		entry_template_allow_compound_documents: "容許此文件成為複合文件的母項",
		entry_template_version_show: "顯示用於新增及移入的版本選項",
		entry_template_version_hide: "隱藏用於新增及移入的版本選項",
		entry_template_version_to_add_as: "要新增為預設版本：",
		entry_template_version_default: "預設版本選項：",
		entry_template_version_default_checked: "主要版本",
		entry_template_version_default_unchecked: "次要版本",
		entry_template_version_display: "文件版本：",
		entry_template_version_display_show: "顯示",
		entry_template_version_display_hide: "隱藏",
		entry_template_version_default_add: "要新增為預設版本：",

		entry_template_checkin_version_show: "顯示用於移入的版本選項",
		entry_template_checkin_version_hide: "隱藏用於移入的版本選項",

		entry_template_checkin_version_message_no_versions: "選定類別的版本原則會阻止使用者移入文件的新版本。",
		entry_template_checkin_version_message_always_version: "選定類別的版本原則會阻止使用者取代文件的現行版本。",

		entry_template_applied: "當使用者處於下列情況時使用此項目範本：",
		entry_template_applied_add: "新增文件（必要）",
		entry_template_applied_add_folder: "建立資料夾（必要）",
		entry_template_applied_checkin: "移入",
		entry_template_applied_properties_group: "檢視或編輯內容：",
		entry_template_applied_properties: "在內容視窗中",
		entry_template_applied_viewer: "在小應用程式檢視器中",
		entry_template_applied_docinfo: "在文件資訊窗格中",
		entry_template_applied_no_class_support: "此項目範本可用於新增項目，但是不能用於移入文件或檢視和編輯內容。必須修改選定類別才能支援這些狀況。如果您需要在這些狀況下使用該項目範本，請讓管理者使用管理工具修改類別，以便它可以儲存項目範本 ID。",
		entry_template_applied_no_child_component_support: "所選定的類別具有子元件，且定義內容佈置。內容佈置不支援子元件。子元件將不會顯示給使用者。",
		entry_template_applied_child_component: "所選定的類別具有子元件。它們會顯示給使用者，但您無法在項目範本中配置子元件。.",

		entry_template_properties_show: "顯示<b>內容</b>區段",
		entry_tempalte_properties_show_hover: "如果您顯示<b>內容</b>區段，則使用者可以修改項目範本中顯示的且並非唯讀內容的任何內容值。",
		entry_template_properties_hide: "隱藏<b>內容</b>區段",
		entry_template_properties_hide_hover: "如果您隱藏<b>內容</b>區段，則使用者無法修改任何內容值。項目範本必須定義您要在使用此項目範本新增項目時使用的所有值。",

		entry_template_security_show: "顯示<b>安全</b>區段",
		entry_template_security_show_hover: "如果您顯示<b>安全</b>區段，則具有適當權限的使用者可以修改項目的安全。",
		entry_template_security_hide: "隱藏<b>安全</b>區段",
		entry_template_security_hide_hover: "如果您隱藏<b>安全</b>區段，則使用者無法修改項目的安全。項目範本必須定義您要在新增或編輯項目時使用的所有安全設定。",
		entry_template_security_policy: "安全原則：",
		entry_template_security_policy_hover: "根據您選取的安全原則，安全原則可以：<br><ul><li>置換在<b>設定項目安全</b>下方所指定的權限。</li><li>新增至在<b>設定項目安全</b>下方所指定的權限。</li></ul>",
		entry_template_security_policy_none: "未選取安全原則",
		entry_template_security_inherit: "從上層資料夾繼承安全設定",
		entry_tempalte_save_in_hover: "指定項目範本的儲存位置。<br><br><b>限制：</b>如果您將項目範本儲存在小組園地中，則您只能在此小組園地中使用該項目範本。",
		entry_template_security_inherit_item_security_hover: "如果您選取此選項，則會將上層資料夾的安全設定新增至由下列其中一個項目定義的安全設定：<ul><li>在<b>設定項目內容</b>區段中指定的類別</li><li>在<b>設定項目安全</b>區段中指定的自訂安全</li></ul>",
		entry_template_security_change: "置換選定類別所定義的安全",
		entry_template_security_change_hover: "如果選取此選項，則依預設，將會顯示為類別定義的安全設定。然後，您可以修改項目範本的安全設定。<br><br>如果您顯示<b>安全</b>區段，則具有適當權限的使用者可以修改項目的安全。<br><br>如果您選取此選項，並且選擇從上層資料夾繼承安全設定，則會將任何可繼承的權限新增至您指定的安全。",
		entry_template_security_default_item_security: "置換新增項目之使用者的預設項目安全",
		entry_template_security_policy_message_override: "所選安全原則已配置成置換「設定安全」下方所指定的權限。",
		entry_template_security_policy_message_add: "所選安全原則已配置成新增至「設定安全」下方所指定的權限。",
		entry_template_security_policy_preserve_true_hover: "保留直接許可權",
		entry_template_security_policy_preserve_false_hover: "不保留直接許可權",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "特定角色",
		entry_template_security_class_role_search_title: "搜尋角色：",
		entry_template_secuirty_class_member_title: "${0} 的成員清單",
		entry_template_secuirty_class_folder_only: "這些許可權僅套用至此資料夾",
		entry_template_secuirty_class_folder_and_immediate_children: "這些許可權套用至此資料夾，以及已配置成從此資料夾繼承安全的那些原生子項。",
		entry_template_secuirty_class_folder_and_all_children: "這些許可權套用至此資料夾，以及已配置成從此資料夾繼承安全的所有後代。",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"這些許可權套用至已配置成從此資料夾繼承安全的那些原生子項",
		entry_template_secuirty_class_folder_all_children_not_folder: "這些許可權套用至已配置成從此資料夾繼承安全的所有後代",

		entry_template_class_security_message_no_override: "選定類別的安全會阻止使用者置換安全。",
		entry_template_class_security_required_privileges: "<b>重要事項</b>：如果您置換選定類別的安全，則使用此項目範本來新增項目的使用者必須具有 ItemSetACL 及 UserACLOwner 專用權。",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "循序型樣工作流程",
		entry_template_workflow_type_ICNParallelDocumentApproval: "平行型樣工作流程",
		entry_template_workflow_type_existing: "自訂工作流程...",
		entry_template_workflow_launch_prompt: "詢問使用者是否啟動工作流程",
		entry_template_workflow_launch_auto: "自動啟動工作流程",
		entry_template_workflow_modify_launch: "容許使用者修改啟動步驟",
		entry_template_workflow_modify_launch_hover: "如果您要容許使用者變更工作流程的啟動方式，請選取此選項。",

		entry_template_optionsButton_title: "修改",
		entry_template_optionsButton_readonly_title: "視圖關聯",
		entry_template_optionsDialog_title: "資料夾關聯設定",
		entry_template_removeButton_title: "移除",
		entry_template_addButton_title: "新增",
		entry_template_selected_entry_templates: "選取的項目範本",
		entry_template_docs_added_to_template_destination: "文件會新增至項目範本中所指定的目的地。",
		entry_template_docs_added_to_other_object_store: "此項目範本會將項目新增至 ${0} 物件儲存庫。",
		entry_template_inherited_entry_templates_label: "我要：",
		entry_template_inherited_entry_templates: "從資料夾繼承項目範本關聯：",
		entry_template_inherited_entry_templates_not: "給此資料夾建立新關聯",
		entry_template_inherited_folder_path: "所選項目範本清單中的項目範本與下列資料夾相關聯：${0}。<br> 資料夾的路徑為 ${1}。",
		entry_template_folder_associations_title: "關聯項目範本",
		entry_template_folder_associations_intro: "如果您使項目範本與資料夾相關聯，則使用者必須使用項目範本，將項目新增至資料夾。如果您使多個項目範本與一個資料夾相關聯，則使用者可以選取要使用的項目範本。",
		entry_tempalte_folder_associations_entrytemplate: "項目範本：",
		entry_template_avaliable_entry_templates: "可用的項目範本",
		entry_template_fileTypes_intro_title: "容許的檔案類型：",
		entry_template_fileTypes_intro: "依預設，可以使用項目範本，將任何類型的文件新增至儲存庫。然而，如果選取一個以上的檔案類型，則只有在使用者新增符合其中一個指定檔案類型的文件時，這些項目範本才可用。",
		entry_template_fileTypes: "檔案類型",
		entry_template_fileType_error: "為一個以上項目範本關聯所選檔案類型無效。必須移除無效的檔案類型，然後才能儲存這些項目範本關聯。",
		entry_template_fileTypes_any_type_of_file: " 任何類型的檔案",
		entry_template_description_label: "說明",
		entry_template_ItemInfoPrefix: "關聯對象：",
		entry_template_TargetObjectStoreName: "目標物件儲存庫",
		entry_template_class: "類別",
		entry_template_current_folder_as_parent: "使用資料夾來作為目的地",
		entry_template_view_minetypes: "檢視 MIME 類型",
		entry_template_avaliable_MIME_types: "可用的檔案類型",
		entry_template_selected_MIME_types: "所選檔案類型",
		entry_template_MIME_type_column: "檔案類型種類名稱",
		entry_template_file_type_not_existing: "請移除無效的檔案類型。",
		entry_template_MIME_types: "MIME 類型：",
		entry_template_MIME_types_info_dialog_title: "下列項目的 MIME 類型",
		entry_template_destination_label: "將文件新增至：",
		entry_template_destination_help: "指定在使用者使用所選項目範本將文件新增至此資料夾時，文件在儲存庫上的儲存位置。",
		entry_template_radioButton_folder_destination: "所選資料夾",
		entry_template_radioButton_template_destination: "在項目範本中指定的目的地",
		entry_tempalte_teamspace_default: "預設項目範本",
		entry_template_folder_associations_save_new: "您已修改部分項目範本關聯。您是否要關閉此視窗，而不儲存變更？",
		entry_template_mode_binding_label: "內容",
		entry_template_columns_className: "類別名稱",
		entry_template_columns_type: "範本類型",
		entry_template_columns_workflow: "工作流程名稱",
		entry_template_columns_destination: "目的地",
		entry_template_association_less_than_record: "有 ${0} 個項目範本未列出在「已選取的項目範本」中。您沒有查看它們的權限。或者已刪除它們。如需相關資訊，請與系統管理者聯絡。",
		/* Request */

		progress_message_general: "工作中...",
		cancel_message_general: "已取消動作。",
		ie8_not_supported_browser: "IE8 不是受支援的瀏覽器。",
		progress_message_getDesktop: "正在載入桌面...",
		progress_message_getActions: "正在載入動作...",
		progress_message_getViewers: "正在載入桌面...",
		progress_message_logon: "登入中...",
		progress_message_logoff: "登出中...",
		progress_message_getContentClasses: "正在擷取類別...",
		progress_message_openContentClass: "正在擷取類別詳細資料...",
		progress_message_od_getCabinets: "正在擷取檔案櫃...",
		progress_message_getSearchTemplates: "正在擷取搜尋...",
		progress_message_od_getTemplates: "正在擷取資料夾...",
		progress_message_od_openCabinet: "正在擷取資料夾...",
		progress_message_openSearchTemplate: "正在開啟搜尋...",
		progress_message_od_openTemplate: "正在開啟資料夾...",

		progress_message_getWorklists: "正在擷取工作清單...",
		progress_message_getWorkItems: "正在擷取工作項目...",
		progress_message_getNextWorkItems: "正在擷取工作項目...",
		progress_message_getStepParameters: "正在擷取工作項目資訊...",
		progress_message_getStepAttachmentItems: "正在擷取附件資訊...",
		progress_message_getDependentParameters: "正在擷取內容資訊...",

		progress_message_p8_getProcessApplicationSpaces: "正在擷取應用程式空間...",
		progress_message_p8_getProcessRoles: "正在擷取程序角色...",
		progress_message_p8_getProcessInbaskets: "正在擷取收件箱...",
		progress_message_p8_getProcessorInformation: "正在擷取程序資訊...",
		progress_message_p8_getFilterCriteria: "正在擷取收件箱過濾器...",
		progress_message_p8_getLaunchParameters: "正在擷取工作項目資訊...",
		progress_message_p8_getStepAttachments: "正在擷取工作項目附件...",
		progress_message_p8_getSubscriptions: "正在擷取工作流程訂閱...",
		progress_message_p8_getTrackerParameters: "正在擷取工作項目資訊...",
		progress_message_p8_getTrackerHistory: "正在擷取工作項目歷程...",
		progress_message_p8_getTrackerMilestones: "正在擷取工作項目里程碑...",
		progress_message_p8_completeStep: "正在完成工作項目...",
		progress_message_p8_moveToInbox: "正在將項目移至收件箱...",
		progress_message_p8_returnToSender: "正在傳回工作項目...",
		progress_message_p8_reassign: "正在重新指派工作項目...",
		progress_message_p8_launchWorkflow: "正在啟動工作流程...",
		progress_message_p8_getTransferedWorkflows: "正在擷取工作流程資訊...",

		progress_message_cm_getProcesses: "正在擷取工作流程資訊...",
		progress_message_cm_completeStep: "正在繼續工作項目...",
		progress_message_cm_getItemProcessInformation: "正在擷取工作流程資訊...",

		progress_message_search: "搜尋中...",
		cancel_message_search: "已取消搜尋。",
		progress_message_getContentItems: "正在擷取項目資訊...",
		progress_message_openFolder: "正在開啟資料夾...",
		progress_message_addItem: "正在建立項目...",
		progress_message_checkIn: "正在移入項目...",
		progress_message_changePassword: "正在變更密碼...",
		progress_message_getDefaultInstancePermissions: "正在擷取預設權限...",
		progress_message_openItem: "正在擷取項目資訊...",
		progress_message_saveItem: "正在儲存項目資訊...",
		progress_message_getPermissions: "正在擷取權限...",
		progress_message_getEntryTemplates: "正在擷取項目範本...",
		progress_message_openEntryTemplate: "正在開啟項目範本...",
		progress_message_getFavorites: "正在擷取我的最愛...",
		progress_message_getFoldersFiledIn: "正在擷取資料夾...",
		progress_message_getDocumentVersions: "正在擷取版本...",
		progress_message_getDependentAttributeInfo: "正在擷取屬性資訊...",
		progress_message_packageForDownload: "正在包裝以供下載...",
		progress_message_convertDocument: "正在轉換內容...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "正在擷取內容類型...",
		progress_message_SharePointPlugin_SharePointAddDocument: "正在新增文件...",

		progress_message_desktop_reload: "用戶端正在重新裝入您的桌面。<br>可能提示您重新登入。",
		progress_message_email: "正在傳送電子郵件...",
		cancel_message_email: "已取消電子郵件。",

		progress_message_p8_getOfficeOnlineTemplates: "正在擷取 Office 範本...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "我的最愛樹狀結構",
		favorites_content_list_label: "我的最愛內容清單",
		syncItems_tree_label: "我的同步化檔案樹狀結構",
		syncItems_content_list_label: "我的同步化檔案內容清單",
		my_checkouts_content_list_label: "我的移出內容清單",
		browse_tree_label: "瀏覽樹狀結構",
		browse_content_list_label: "瀏覽內容清單",
		repository_selector_label: "儲存庫選取器",
		teamspaces_content_list_label: "小組園地內容清單",
		templates_content_list_label: "範本內容清單",
		work_content_list_label: "工作內容清單",
		work_tree_label: "工作樹狀結構",
		admin_tree_label: "管理樹狀結構",
		admin_tabs_label: "管理標籤",
		search_tabs_label: "搜尋標籤",
		search_selector_label: "搜尋選取器",
		teamspace_browse_content_list_label: "小組園地瀏覽內容清單",
		teamspace_search_tabs_label: "小組園地搜尋標籤",

		/* Desktop */
		undo_description: "復原 ${0}",
		redo_description: "重做 ${0}",

		/* Application Tabs */
		home: "首頁",
		repository: "儲存庫",
		repository_type: "儲存庫類型：",
		repository_type_header: "儲存庫類型",
		repository_type_any: "所有儲存庫",
		repository_type_contains_label: "儲存庫類型包含",
		document_info: "文件資訊",
		team: "小組",
		administration: "管理",

		/* Home Page */
		recent_activity: "最近的活動",
		repos_and_wrksp: "儲存庫及小組園地",
		workspaces: "小組園地",
		repositories: "儲存庫",
		templates: "範本",
		favorites: "我的最愛",
		my_checkouts: "我的移出",
		mySyncedFiles: "我的同步化檔案",
		links: "鏈結",
		name_label: "名稱",
		description_label: "說明：",
		type_label: "類型：",
		type_heading: "類型",
		type_id_label: "類型 ID",
		server_type_icon: "伺服器類型圖示",
		server_type_heading: "伺服器類型",
		server_type: "伺服器類型",
		port_heading: "埠號",
		port_label: "埠號：",
		server_name_heading: "伺服器名稱",
		server_label: "伺服器名稱：",
		server_url_label: "伺服器 URL：",
		id_label: "ID：",
		id_heading: "ID",
		connected_label: "已連線：",
		repository_label: "儲存庫",
		modified_label: "修改者：",
		modified_date_label: "修改時間：",
		status_label: "狀態：",
		last_modified_label: "前次修改者：",

		modifier: "修改者",
		modified_date: "修改時間",

		/* Favorites */
		new_favorite_label: "加到我的最愛",
		edit_favorite_label: "重新命名我的最愛",
		remove_favorite_label: "從我的最愛中移除",
		missing_alias_message: "您必須指定名稱。",
		sync_favorite_enable_hover: "此項目已啟用同步。",
		sync_favorite_disable_hover: "此項目不在同步中。",
		sync_favorite_sync_unavailable_hover: "此物件類型不適合同步。",
		sync_enable_label: "同步此項目",
		sync_enable_label_hover: "此項目將同步到裝置。",
		delete_favorite_confirmation_question: "您要將此項目從「我的最愛」中移除嗎？",
		alias_label: "名稱：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "選取的項目已在「我的最愛」中。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "此項目無法新增至我的最愛清單。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "您只能儲存 ${0} 個我的最愛項目。",
		add_favorite_max_reached_response: "如果您要將此項目新增至我的最愛清單，必須先刪除現有的我的最愛項目才能新增此項目。",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "無法將選取的文件轉換為 PDF。",
		download_as_pdf_max_content_error_explanation: "只能將 ${0} MB 的資料轉換為 PDF。不過，選取的文件超過了 ${0} MB。",
		download_as_pdf_max_content_error_response: "選取較少文件或較小文件，並再次將文件下載為 PDF 檔案。",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "無法將選取的文件轉換為單一 PDF 檔。",
		download_as_pdf_mimetype_check_error_explanation: "要將含有多個組件的文件轉換為單一 PDF 檔，則每個組件必須具有相同的 MIME 類型。",
		download_as_pdf_mimetype_check_error_response: "選取不同的文件來轉換為 PDF。",

		/* Activity Stream */
		show_label: "顯示：",
		all_filter: "全部",
		notifications_filter: "通知",
		workitems_filter: "工作項目",
		documentes_filter: "文件",
		all_favorites_filter: "所有我的最愛",
		folders_filter: "資料夾",
		searches_filter: "搜尋",
		teamspaces_filter: "小組園地",

		/* Repository */
		all_search_templates: "所有搜尋",
		all_od_searches: "所有搜尋範本",
		recent_searches: "最近的搜尋",
		opened_searches: "已開啟的搜尋",

		all_worklists: "所有信箱",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "每一個工作清單的清單",

		/* Teamspace */
		all_workspaces: "所有小組園地",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "每一個小組園地的清單",
		workspace_title: "小組園地",
		workspace_icon: "小組園地圖示",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "可用",
		workspace_stat_offline: "無法使用",
		workspace_stat_validate: "需要驗證",
		workspace_stat_pendingDelete: "刪除擱置",
		workspace_stat_deleteError: "刪除失敗",

		undefined_value: "未定義",
		undefined_reference_value: "未定義參照。",

		/* Filter teamspaces in content list */
		more_results_on_server: "在伺服器上可能可以使用更多結果。",
		search_all_data: "搜尋所有資料。",
		search_all_teamspaces: "搜尋所有小組園地。",
		teamspace_filter_results: "顯示 ${0} 個結果。",
		displaying_filtered_results: "顯示過濾結果。",
		displaying_recent_results: "僅顯示前 ${0} 天修改的小組園地。如果要尋找其他小組園地，請依據名稱或說明來過濾小組園地清單。",
		clear_filter: "清除過濾器",

		/* FolderTreeModel */
		move_item_task: "移動項目",
		copy_item_task: "複製項目",
		add_item_task: "新增項目",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "找不到下列資料夾：${0}。可能已刪除，或者無法從此視圖來開啟該資料夾。請從樹狀結構中按一下「其他」鏈結來導覽至該資料夾。如果看不到資料夾，請重新整理內容清單視圖。",
		more_paging_link: "尚有 ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "狀態",
		status_dialog_cancel_label: "取消",

		/* ErrorDialog */
		error_dialog_title: "錯誤",
		error_dialog_icon_tooltip: "錯誤",
		error_dialog_stack_trace_title: "堆疊追蹤",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "確認",

		close_browser_msg: "關閉瀏覽器視窗。",

		/* MessageDialog */
		message_dialog_title: "資訊",
		warning_dialog_title: "警告",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "歡迎使用 ${0}",
		server: "儲存庫：",
		username: "使用者名稱：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "需要使用者名稱才能登入儲存庫。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "需要密碼才能登入儲存庫",
		password: "密碼：",
		login: "登入",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "您的階段作業已過期。請重新登入。 ",
		login_repository_connection_expired_message: "您與 ${0} 儲存庫的連線已過期。請重新登入。 ",
		login_site_connection_expired_message: "您與網站的連線已過期。請重新登入。 ",
		login_new_server_message: "輸入 ${0} 的使用者名稱及密碼。",
		login_error_more_information_message: "相關資訊",

		disconnect_box_account_user: "中斷 Box 帳戶的連線：${0}",
		disconnect_box_account: "中斷 Box 帳戶的連線",
		disconnect_box_accounts: "中斷 Box 帳戶的連線",

		// OAuth2/Box Login
		login_ssl_connection_required: "Box 儲存庫存取需要 SSL 連線。",
		login_oauth_popup_blocked: "已封鎖蹦現視窗。您可能需要在瀏覽器中解除封鎖蹦現視窗才能登入。",
		login_oauth_click_here: "如果在 5 秒內未重新導向，請按一下這裡。",
		login_oauth_title: "登入",
		login_oauth_grant_intro: "授與 ${0} 的鑑別。",
		login_pane_oauth_click_here: "請按一下這裡以登入。",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "您要從 Web 用戶端登出嗎？",
		logout_confirmation_button: "登出",

		/* ChangeLocaleDialog */
		change_locale: "變更語言及語言環境設定",
		change_locale_use_browser_language: "使用瀏覽器語言設定（預設值）",
		change_locale_use_browser_locale: "使用瀏覽器語言設定（預設值）",
		change_locale_description: "如果刪除瀏覽器 Cookie，則您必須重設語言及語言環境設定。",
		change_locale_language_locale: "應用程式語言：",
		change_locale_language_locale_hover: "此設定會變更 Web 用戶端中文字的語言，但是不會變更應用程式中文件的語言。<br><br>預設值使用在 Web 瀏覽器配置選項中指定的語言。",
		change_locale_value_format_locale: "應用程式語言環境：",
		change_locale_value_format_locale_hover: "語言環境決定 Web 用戶端中日期、時間和數字的格式。<br><br>預設值使用與在 Web 瀏覽器配置選項中指定的語言相關聯的格式。",
		change_locale_for_office: "雙向文字設定：",
		change_locale_bidi_support_flag: "啟用雙向支援",
		change_locale_bidi_support_flag_hover: "啟用雙相支援時，使用者可以設定輸入欄位中所使用的文字方向。例如，為資料夾之類的項目輸入的文字將以輸入文字時所用方向顯示。",
		change_locale_base_text_direction: "內容的基本文字方向：",
		change_locale_base_text_direction_hover: "設定輸入到輸入欄位中文字的方向。此選項還控制使用者輸入之標籤（例如資料夾名稱）的顯示方向。",
		change_locale_calendar_type: "行事曆類型：",
		change_locale_calendar_type_hover: "選取將用於使用者階段作業的行事曆類型。",
		change_locale_base_text_direction_default: "預設值",
		change_locale_base_text_direction_ltr: "從左至右",
		change_locale_base_text_direction_rtl: "從右至左",
		change_locale_base_text_direction_contextual: "環境定義",
		change_locale_calendar_type_gregorian: "格里高里曆",
		change_locale_calendar_type_hijri: "伊斯蘭教教曆",
		change_locale_calendar_type_hebrew: "希伯來文",
		change_locale_calendar_type_Umm_al_Qura: "烏姆艾庫拉行事曆",

		/* ChangePasswordDialog */
		change_password: "變更密碼",
		change_password_title: "變更密碼",
		change_password_expired_title: "密碼已過期",
		change_password_message: "請輸入新密碼。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "您的密碼過期。請輸入新密碼。",
		change_password_password_rules: "密碼規則",
		change_password_old_password: "舊密碼：",
		change_password_new_password: "新密碼：",
		change_password_confirm_password: "確認密碼：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "您必須輸入舊密碼。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "您必須輸入新密碼。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "您必須確認新密碼。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "密碼必須相符。",

		/* GlobalToolbar */
		actions: "動作",
		actions_label: "動作︰",
		open_actions_label: "開啟動作：",

		/* About Dialog */
		about_dialog_title: "關於",
		about_product_name_label: "產品名稱：",
		about_product_version_label: "版本：",
		about_product_build_label: "建置：",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM 及 IBM 標誌是 International Business Machine Corporation 在美國及/或其他國家/地區的註冊商標。本「程式」係依據本「程式」隨附之授權合約的條款而授權。本授權合約可置於本程式中識別為「軟體使用權」或「非 IBM 軟體使用權」的一個目錄資料夾或檔案庫內（如果適用的話），或提供成印出的授權合約。在使用本「程式」之前，請先詳閱這份合約。貴客戶對本「程式」之使用即表示接受這些條款。",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "您要刪除所選取的項目嗎？",
		delete_single_folder_confirmation_question: "您要刪除 ${0} 資料夾嗎？",
		delete_multiple_confirmation_question: "您要刪除所選的項目嗎？<br>已選取 ${0} 個項目。",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "刪除",
		search_template_delete_confirmation_question: "您要刪除 ${0} 搜尋嗎？",
		search_template_opened_delete_confirmation_question: "${0} 搜尋已開啟。如果您刪除搜尋，它將會關閉。<br>您要刪除這項搜尋嗎？",
		delete_multiple_opened_search_template_confirmation_question: "下列搜尋已開啟：${0}。<br>如果您刪除搜尋，它們將會關閉。您要刪除這些搜尋嗎？",
		delete_large_number_items_confirmation_question: "要刪除您所選取的 ${0} 個項目。<br/>刪除大量的項目可能會花很長時間。<br/>要繼續嗎？",
		delete_confirmation_entrytemplate: "如果您刪除此項目範本，則將對與此項目範本相關聯的文件或資料夾產生下列影響：<ul><li>這些項目將不再與該項目範本相關聯，並且使用者在更新項目時可能會看到警告。</li><li>受該項目範本控制的任何內容（例如內容的名稱或順序）將不再套用至與該項目範本相關聯的項目。</li></ul>您要刪除此項目範本嗎？",
		delete_confirmation_entrytempalte_with_multi_items: "項目範本必須個別刪除。已從待刪除項目清單中移除項目範本。如果您要刪除這些項目範本，則必須個別地刪除每一個項目範本。",

		/* Create/Apply/Remove Hold */
		hold: "保留",
		createHold: "新建保留",
		applyHold: "套用保留",
		removeHold: "移除保留",
		showHolds_title: "顯示保留",
		applyHoldSelectText: "選取您要套用至所選項目的保留。",
		availableHolds: "可用的保留：",
		removeHoldSelectText: "選取您要從所選項目移除的保留。",
		appliedHolds: "套用的保留：",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "建立新保留來套用至所選項目。",
		holdName: "保留名稱：",
		holdDescription: "說明：",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "您必須指定保留區的名稱。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "指定的保留區名稱已存在。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "保留區名稱不能包含下列任何字元：' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "您的階段作業將在 ${0} 分鐘後到期。",
		session_expire: "階段作業到期",
		logoff: "登出",
		extend_session: "延長階段作業",
		admin_custom_settings: "其他設定：",
		admin_custom_settings_hover_help: "enableSessionExpireWarning 是一個布林值，指出是否已啟用階段作業到期警告，預設值為 true。 sessionExpireWarningTime 是一個介於 2 到 5 之間的整數，用於指定階段作業到期警告時間。",
		admin_custom_setting_dialog_title_new: "新建設定",
		admin_custom_setting_dialog_title_edit: "編輯設定",
		admin_custom_setting_dialog_hover_help: "透過指定參數名稱及值新增其他參數。例如，如果希望啟用階段作業到期警告，則可指定「enableSessionExpireWarning」和「true」。",
		admin_custom_setting_dialog_field_hover_help: "如需參數名稱及值的相關資訊，請參閱 IBM Navigator Parameter Reference Manual。",
		admin_custom_setting_dialog_nameInvalid: "需要此值。值不能包含空白，且不能重複。",
		admin_custom_setting_dialog_bool_valueInvalid: "需要此值。該值必須是布林值。",
		admin_custom_setting_dialog_int_valueInvalid: "需要此值。該值必須是整數。",
		/* Add Document Dialog */
		add_document_dialog_title: "新增文件",
		add_documents_dialog_title: "新增文件",
		add_document_general_label: "一般",
		add_document_properties_label: "內容",
		add_document_properties_with_ellipsis_label: "內容...",
		add_document_security_label: "安全",
		add_document_location_label: "儲存位置：",
		add_document_type_label: "要儲存的項目",
		add_document_localfile_label: "本端文件",
		add_document_metadata_label: "文件的相關資訊",
		add_document_external_label: "外部文件的鏈結",
		add_document_web_link_label: "Web 鏈結",
		add_document_saved_content_label: "使用已儲存的檔案：",
		add_document_saved_content_choice: "已儲存的檔案",
		add_document_file_name_label: "檔名：",
		add_document_entry_template_label: "項目範本：",
		add_document_delete_file_label: "刪除本端檔案",
		add_document_delete_file_disabled_label: "不在檔案追蹤目錄中的檔案將不予以刪除。",
		add_document_major_version_label: "主要版本",
		add_document_major_version_hover: "將文件狀態設為「已發行」。會將文件新增至儲存庫，以作為 1.0 版。如果沒有選取此選項，就不會準備發行文件，並且會新增它作為次要版本 0.1。",
		add_document_save_document_as_unfiled_label: "不將文件儲存在資料夾中",
		add_document_save_document_as_unfiled_hover: "如果您選取此選項，則只能利用搜尋來尋找這份文件。您無法透過瀏覽來找出它。",
		add_document_create_new_version_label: "建立新版本",
		add_document_replace_existing_version_label: "取代現有的版本",
		add_document_start_workflow_label: "啟動工作流程",
		add_document_auto_classify_label: "自動分類內容",
		add_document_add_label: "新增",
		add_document_cancel_label: "取消",
		add_document_document_type_label: "類別",
		add_document_context_info: "您為文件內容輸入的值，之後可用來尋找該文件。",
		add_documents_context_info: "您為文件輸入的值，之後可用來尋找文件。如果您需要輸入不同的文件內容值，必須另外新增內容，或是在新增文件的內容之後再進行編輯。",
		add_document_url_label: "URL：",
		add_document_template_description: "範本說明：",
		add_document_select_entry_template: "輸入或選取項目範本",
		add_document_no_permission_to_associations: "您無權使用項目範本",
		add_document_no_entry_template_to_use: "無法將任何項目範本用於所選檔案",
		add_document_no_entry_template_itemtype_permission: "無法將項目新增至此資料夾。必須選取項目範本，並且您無權存取與此資料夾相關聯的任何項目範本。請與系統管理者聯絡，並要求他們授與您對與此資料夾相關聯的項目範本的存取權。",
		add_document_appgroup_name_label: "應用程式群組名稱：",
		add_document_app_name_label: "應用程式名稱： ",
		create_folder_dialog_title: "新增資料夾",
		create_folder_context_info: "您為資料夾內容輸入的值，之後可用來尋找該資料夾。",
		create_folder_folder_name_label: "資料夾名稱",
		create_folder_save_folder_as_unfiled_label: "不將資料夾儲存在另一個資料夾中",
		create_folder_save_folder_as_unfiled_hover: "如果您選取此選項，則只能利用搜尋來尋找此資料夾。您無法透過瀏覽來找出它。",
		add_item_create_in_folder: "建立在資料夾內：",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "資料夾名稱不能包含下列任何字元：\\ / : * ? \" < > |",

		invalid_box_folder_name_message: "資料夾名稱不能包含下列任何字元：\\ /，且不能等於 . 或 ..",
		invalid_box_file_name_message: "檔名不能包含下列任何字元：\\ /，且不能等於 . 或 ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "檔名不可包含下列任何字元：\\ / : * ? \" < > |",
		external_document_placeholder: "輸入文件的 URL",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "顏色必須輸入為 3 或 6 位數的十六進位數，例如 #000 或 #000000。",
		add_document_unfiled: "${0} 未存檔",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "使用項目範本來新增文件",
		add_document_using_template_context_info: "當您使用項目範本來新增文件時，您針對文件所輸入的值是一致的。",
		add_documents_using_template_dialog_title: "使用項目範本來新增文件",
		add_documents_document_name_is_file_name_hint: "檔名將用於此內容",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "使用項目範本來新建資料夾",
		create_folder_using_template_context_info: "當您使用項目範本來建立資料夾時，您針對資料夾所輸入的值是一致的。",

		add_documents_batch_results_dialog_title: "文件未新增至儲存庫",
		add_documents_batch_results_dialog_context_info: "下列文件未新增至儲存庫。如需為何文件未新增至儲存庫的相關資訊，請選取文件後按一下「詳細資料」。",
		add_documents_batch_results_dialog_filename_col_hdr: "檔名",
		add_documents_batch_results_dialog_status_col_hdr: "狀態",
		add_documents_batch_results_dialog_message_col_hdr: "訊息",
		add_documents_batch_results_status_error: "錯誤",
		add_documents_batch_results_status_cancelled: "已取消",
		add_documents_batch_results_status_cancelled_msg: "文件未新增，因為要求已取消。",

		add_documents_batch_status_title: "正在新增文件",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "正在新增檔案 ${0} / ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "錯誤：${0}",
		add_documents_batch_status_completing_msg: "處理程序將會在新增此文件後停止。",

		add_documents_status_uploading_msg: "正在上傳檔案 ${0} / ${1}...",
		add_documents_status_adding_msg: "正在新增檔案 ${0} / ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "項目範本是配置在另一個應用程式中，而且是配置為一律將文件宣告為記錄。不過，因為 Web 用戶端不支援將文件宣告為記錄，所以會忽略這項設定。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "項目範本是配置在另一個應用程式中，而且是配置為可讓您決定是否要將此文件宣告為記錄。不過，因為 Web 用戶端不支援將文件宣告為記錄，所以會忽略這項設定。",
		no_selection: "&lt;選取&gt;",

		batch_results_dialog_details_label: "詳細資料",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "值無效。此值必須是「廣域唯一 ID (GUID)」，例如：{F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "值無效。此值必須是浮點數字，例如：1.2 或 365。",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "值無效。此值必須為 ${0} 格式，例如：${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "值無效。此值必須是小數值，例如：1.2 或 365。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "值無效。此值必須是整數，例如：5 或 1349。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "值無效。此值只能包含英文字母，例如：a-z 及 A-Z。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "值無效。此值只能包含英數字元，例如：a-z、A-Z 及 0-9。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "值無效。此值只能包含數值字元，例如：0-9。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "值無效。此值只能包含以下字元：a-z、A-Z、0-9、[空格] 以及 `.,:;?\"/-_&amp;+%*=<>()|!$#^@。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "值無效。此值必須為下列格式的日期：${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "值無效。此值必須為下列格式的時間：${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "值無效。請從下拉功能表中選取值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "值無效。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "值無效。此值必須具有下列格式：{0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "這個值是必要的。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "值太長。此內容支援的長度上限為 ${0}。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "此值太短。此內容支援的長度下限為 ${0}。",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "值超出範圍。此值必須是在 ${0} 和 ${1} 之間的浮點數字。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "值超出範圍。此值必須是在 ${0} 和 ${1} 之間的小數值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "值超出範圍。此值必須是在 ${0} 和 ${1} 之間的整數。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "此值必須是在 ${0} 和 ${1} 之間的日期。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "值超出範圍。此值必須是在 ${0} 和 ${1} 之間的日期。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "值超出範圍。此值必須是在 ${0} 和 ${1} 之間的時間。",
		property_and: "和",

		property_invalidValueOrRequired: "下列值無效或者是必要的：${0}。",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "內容",
		edit_properties_dialog_info: "可以檢視或編輯此項目的內容。如果具有適當的權限，則也可以修改項目的安全。然而，無法變更系統內容。",
		edit_properties_od_dialog_info: "可以檢視或編輯此項目的內容。然而，無法變更系統內容。",
		system_properties_title: "系統內容",
		custom_properties_title: "內容",
		/* Folder collaboration tab */
		box_permission_permission: "權限",
		box_permission_permissions: "權限",
		box_permission_editor: "編輯者",
		box_permission_owner: "擁有者",
		box_permission_co_owner: "共同擁有者",
		box_permission_viewer_uploader: "檢視者和上傳者",
		box_permission_previewer_uploader: "預覽者和上傳者",
		box_permission_viewer: "檢視者",
		box_permission_previewer: "預覽者",
		box_permission_uploader: "上傳者",
		box_permission_add: "新增",
		box_permission_upload: "上傳",
		box_permission_download: "下載",
		box_permission_preview: "預覽",
		box_permission_view: "檢視",
		box_permission_send_links: "傳送僅檢視鏈結",
		box_permission_create_subfolders: "建立子資料夾",
		box_permission_create_tasks: "建立作業",
		box_permission_add_comments: "新增註解",
		box_collaboration_invite_placeholder: "輸入要邀請的名稱、電子郵件或群組",
		box_collaboration_invite_placeholder_non_admin: "輸入電子郵件進行邀請",
		box_collaboration_invalid_email: "輸入有效的電子郵件位址",
		box_collaboration_user_already_present: "此使用者已經是資料夾的合作人員",
		box_collaboration_user_name: "名稱",
		box_collaboration_email_address: "電子郵件位址",
		box_collaboration_date_added: "新增日期",
		box_collaboration_remove_collaboration: "移除",
		box_collaboration_remove_collaboration_title: "刪除",
		box_collaboration_no_collaborators: "沒有合作人員",
		box_collaboration_change_owner_title: "變更項目擁有者",
		box_collaboration_change_owner_prompt: "透過將此合作人員設為「資料夾擁有者」，您會成為「編輯者」，不再擁有此資料夾。任何已直接新增至此資料夾的合作人員都將在其根資料夾中看到此資料夾。在上層資料夾或更高層次新增的任何合作人員都將不再是合作人員。要繼續嗎？",
		box_collaboration_remove_self_title: "移除自己",
		box_collaboration_remove_self_prompt: "您確定要移除您自己的合作人員身分嗎？您將無法再存取此資料夾。",
		box_collaboration_user: "使用者",
		box_collaboration_group: "群組",
		box_managing_users_not_configured: "無法搜尋使用者和群組，因為沒有正確地配置 Box 應用程式。如果要使用此特性，請聯絡管理者並要求配置用於管理使用者和群組的 Box 應用程式。",
		duplicate_value_error: "此內容中的每一個值都必須是唯一的。",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "您在下列欄位中所做的任何變更都會套用至所有的已選取項目。如果您需要針對特定項目輸入不同的內容值，或編輯項目的安全，您必須編輯個別項目的內容。",
		multi_edit_properties_class_label: "類別：",
		multi_edit_properties_items_label: "項目名稱：",
		multi_edit_properties_properties_label: "內容：",
		multi_edit_batch_status_title: "正在更新內容",
		multi_edit_batch_status_adding_msg: "正在更新項目 ${0} / ${1}...",
		multi_edit_batch_status_verifying_msg: "正在驗證項目 ${0} / ${1}...",
		multi_edit_batch_status_completing_msg: "處理程序將會在更新此項目後停止。",
		multi_edit_batch_status_validation_completing_msg: "處理程序將會在驗證此項目後停止。",
		multi_edit_batch_results_status_error: "錯誤",
		multi_edit_batch_results_status_cancelled: "已取消",
		multi_edit_batch_results_status_cancelled_msg: "項目未更新，因為要求已取消。",
		multi_edit_batch_results_dialog_title: "項目未更新",
		multi_edit_batch_results_dialog_context_info: "下列項目未更新。選取項目名稱，然後按一下「詳細資料」以取得為何項目未更新的相關資訊。",
		multi_edit_batch_results_dialog_itemname_col_hdr: "項目名稱",
		multi_edit_batch_results_dialog_status_col_hdr: "狀態",
		multi_edit_batch_results_dialog_message_col_hdr: "訊息",
		multi_edit_batch_status_errors_msg: "錯誤：${0}",
		multi_edit_batch_permission_error_text: "無法儲存內容的變更。",
		multi_edit_invalid_value_error: "此值相依於另一個內容值，而且並非對所有選取項目都有效。",
		multi_edit_batch_permission_error_explanation: "您無法修改此項目的內容，因為您沒有足夠的權限。",
		multi_edit_no_modifiable_properties: "無法修改已選取項目的內容。只有項目併入唯讀內容，或只有項目的名稱或標題可編輯時才會發生。選取多個項目時，則無法修改名稱或項目的標題。",
		multi_edit_mult_classes_dialog_info: "所選取項目位在不同儲存庫或屬於不同類別。您只能編輯屬於相同類別或相同儲存庫的項目。選取您想要編輯的項目子集。",
		multi_edit_class_selector_class_heading: "類別",
		multi_edit_class_selector_entry_template_heading: "項目範本",
		multi_edit_class_selector_repository_heading: "儲存庫",
		multi_edit_class_selector_items_heading: "項目",
		multi_edit_some_classes_not_displayed: "部分選取項目未併入此清單中，因為項目僅包含唯讀內容，或者因為項目位在不支援編輯內容的儲存庫中。",
		multi_edit_properties_invalid_msg: "部分內容值並非對所有選取項目都有效。",
		multi_edit_properties_readonly_tooltip_text: "${0}：此內容為唯讀，而且無法修改。",
		multi_edit_append_checkbox_label: "附加",
		multi_edit_append_checkbox_tooltip: "如果您想要將新內容值附加至現有值而不是取代現有值，請選取此選項。",
		multi_edit_properties_invalid_childcomponent_msg: "${0} 內容的部分值（位於 ${1} 子元件）相依於其他內容，並且不再適用於您選擇的項目。清除 ${1} 子元件中的值，或者個別變更所選項目的內容。",

		/* Export Properties Dialog */
		export_properties_dialog_title: "匯出內容",
		export_properties_dialog_info: "選取您要匯出的內容，並且指定其顯示順序。",
		export_properties_dialog_export_button_label: "匯出",
		export_properties_dialog_export_raw_values: "匯出原始值",

		/* Properties */
		filter_clear_tooltip: "清除過濾器",
		properties_new_row: "新建",
		properties_requiredClass_document_tooltip: "請選取文件。文件必須屬於 ${0} 類別。",
		properties_requiredClass_folder_tooltip: "請選取資料夾。資料夾必須屬於 ${0} 類別。",
		properties_dataType_tooltip: "資料類型：${0}",
		properties_maxLength_tooltip: "長度上限：",
		properties_minLength_tooltip: "長度下限：",
		properties_minValue_tooltip: "最小值：",
		properties_maxValue_tooltip: "最大值：",
		properties_format_tooltip: "格式：",
		properties_description_tooltip: "說明：",

		properties_type_boolean_tooltip: "布林值",
		properties_type_date_tooltip: "日期",
		properties_type_time_tooltip: "時間",
		properties_type_timestamp_tooltip: "時間戳記",
		properties_type_decimal_tooltip: "小數值",
		properties_type_double_tooltip: "浮點數字",
		properties_type_short_tooltip: "整數",
		properties_type_integer_tooltip: "整數",
		properties_type_long_tooltip: "整數",
		properties_type_string_tooltip: "字串",
		properties_type_string_alpha_tooltip: "英文字母字串",
		properties_type_string_alphanum_tooltip: "英數字串",
		properties_type_string_ext_tooltip: "延伸英數字串",
		properties_type_string_num_tooltip: "數值字串",
		properties_type_binary_tooltip: "二進位",
		properties_type_object_tooltip: "物件",
		properties_type_reference_tooltip: "此內容參照儲存庫中的另一個項目。",
		properties_type_guid_tooltip: "廣域唯一 ID",
		properties_type_group_tooltip: "使用者和群組",
		properties_type_user_tooltip: "使用者",
		properties_type_childComponent_tooltip: "子元件",

		properties_childComponent_minCardinalityOnly_tooltip: "此內容至少必須有 ${0} 個值。",
		properties_childComponent_maxCardinalityOnly_tooltip: "此內容不能超過 ${0} 個值。",
		properties_childComponent_minMaxCardinality_tooltip: "此內容至少必須有 ${0} 個值，且不超過 ${1} 個值。",
		properties_childComponent_noCardinality_tooltip: "此內容可以有任何數量的值。",

		properties_type_guid_example_tooltip: "，例如：{F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "請從清單中選取值。",
		properties_single_select_choice_tooltip: "選取值。",
		properties_multiple_select_typein_tooltip: "輸入一個以上的值。",
		properties_multiple_select_choice_tooltip: "選取一個以上的值。",
		properties_not_selectable_tooltip: "無法選取種類。",
		properties_none: "無",
		properties_none_tooltip: "選取<i>無</i>，以清除此內容的現行值。",
		properties_value_empty: "沒有值",
		properties_value_read_only: "唯讀",
		properties_clear_label: "清除",
		properties_clear_tooltip: "若清除此欄位中的值，將會在您按一下<b>儲存</b>之後清除儲存庫中的值。",
		properties_box_custom_properties: "自訂內容",
		properties_box_metadata_name_in_use: "此名稱已被使用。請為自訂內容輸入其他名稱。",

		properties_templates: "範本",
		properties_add_template: "新增範本",
		properties_remove_template: "移除",
		/* Checkin Document Dialog */
		checkin_dialog_title: "移入",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "移入",
		checkin_cancel_label: "取消",
		checkin_file_name_label: "檔名",
		checkin_document_status_title: "移入文件",
		checkin_document_status_uploading_msg: "正在上傳檔案...",
		checkin_document_status_checkingin_msg: "正在移入檔案...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "選取「修訂模式」",
		viewer_redaction_new_document_confirmation_question: "您要將修訂儲存為新文件還是本端檔案？",
		viewer_redaction_new_version_confirmation_question: "您要將修訂儲存為新版本嗎？",
		viewer_redaction_new_version_confirmation_question_never: "您要將修訂儲存為新內容嗎？",		
		viewer_redaction_new_document_button: "是",
		viewer_redaction_new_document_cancel_button: "否",
		viewer_redaction_add_document_confirmation_question: "您要將修訂儲存為新文件、新版本還是本端檔案？",
		viewer_redaction_add_document_confirmation_question_version_never: "您要將修訂儲存為新文件、新內容還是本端檔案？",
		viewer_redaction_add_document_button: "新建文件",
		viewer_redaction_add_new_version_button: "新版本",
		viewer_redaction_add_new_version_button_version_never: "新內容",
		viewer_redaction_add_local_file_button: "本端檔案",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "選取修訂原因",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "找不到用來將此文件新增至儲存庫中的項目範本。將此文件移入儲存庫時將不使用項目範本。",
		property_entry_template_not_retrieved_warning: "找不到用來將此文件新增至儲存庫中的項目範本。將不會使用項目範本來顯示文件內容。",
		multi_edit_entry_template_not_found_name: "[找不到]",
		multi_edit_entry_template_not_retrieved_warning: "找不到用來將這些項目新增至儲存庫的項目範本。將不使用項目範本來修改項目內容。",
		checkin_major_version_hover: "將文件版本號碼遞增一級，並將文件狀態設為「已發行」。如果沒有選取此選項，就不會準備發行文件，並且會移入它作為次要版本。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "無法移入文件，因為其未移出。",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "使用者 ID 或密碼對伺服器無效。",
		error_bad_userid_password_userResponse: "請確保已正確輸入使用者 ID 和密碼。",
		error_bad_userid_password_adminResponse: "傳回了下列錯誤：${0}。",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "錯誤訊息",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "無法使用下列 URL 來建立連線至 Web 用戶端：${0}。",
		http_send_error_explanation: "此錯誤可能由 Web 應用程式伺服器上的配置問題引起，或由 Web 用戶端應用程式問題引起。",
		http_send_error_userResponse: "請嘗試重新登入。如果問題持續發生，請向系統管理者報告此錯誤。",
		http_send_error_adminResponse: "傳回了下列 HTTP 錯誤：${1}。",
		http_send_error_0: "Web 用戶端 URL",
		http_send_error_1: "HTTP 錯誤",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "無法使用下列 URL 來建立連線至 Web 用戶端：${0}。",
		http_error_explanation: "您可能需要在防火牆進行鑑別，或 Web 應用程式伺服器可能不在執行中，或因為網路問題而無法呼叫到 Web 應用程式伺服器。",
		http_error_userResponse: "如果您需要在防火牆進行鑑別，請鑑別並重試登入。如果問題持續發生，請向系統管理者報告此錯誤。",
		http_error_adminResponse: "傳回了下列 HTTP 錯誤：${1}。",
		http_error_0: "Web 用戶端 URL",
		http_error_1: "HTTP 錯誤",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "無法使用下列 URL 來建立連線至 Web 用戶端：${0}。",
		http_response_bad_explanation: "此錯誤可能由 Web 應用程式伺服器上的配置問題引起，或由 Web 用戶端問題引起。",
		http_response_bad_userResponse: "請嘗試重新登入。如果問題持續發生，請向系統管理者報告此錯誤。",
		http_response_bad_adminResponse: "傳回了下列錯誤：${1}。",
		http_response_bad_0: "Web 用戶端 URL",
		http_response_bad_1: "HTTP 錯誤",
		http_response_bad_number: 2002,

		unititled_document_name: "未命名",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "無法啟動電子郵件小應用程式。",
		email_applet_init_failed_explanation: "當工作站上沒有適當安裝及配置您的電子郵件用戶端，或沒有安裝支援的「Java 執行時期環境 (JRE)」版本時，可能會出現此問題。",
		email_applet_init_failed_userResponse: "如果要解決此問題，請執行下列步驟：<ul><li>請確定已安裝您的電子郵件應用程式，而且是設為您工作站上的預設電子郵件用戶端。</li><li>請在命令提示字元下輸入下列指令，檢查您的工作站上是否已安裝支援版本的 JRE：java -version</li></ul><p>「IBM 軟體支援中心」網站的 <i>IBM Content Navigator 的軟硬體需求</i>文件中包含支援的 JRE 版本清單。</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "電子郵件應用程式無法啟動，因為無法載入所需的 DLL 檔案。",
		email_applet_JNI_LOAD_FAILED_explanation: "無法載入所需的 WCEmailAppletJNI.dll 檔案，因為您工作站上的暫存目錄可能已滿。",
		email_applet_JNI_LOAD_FAILED_userResponse: "確定暫存目錄有足夠空間。然後重試從 Web 用戶端傳送文件。依預設，WCEmailAppletJNI.dll 檔案會載入到 Web 瀏覽器設定所指定的暫存目錄中。",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "電子郵件應用程式無法啟動，因為電子郵件小應用程式無法建立暫存檔。",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "您工作站上的暫存目錄可能已滿。",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "確定暫存目錄有足夠空間。然後重試從 Web 用戶端傳送文件。",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "電子郵件應用程式無法啟動，因為電子郵件小應用程式無法建立暫存檔。",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "您工作站上的暫存目錄可能已滿，或您可能沒有適當的存取權來寫入暫存目錄。",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "確定暫存目錄有足夠空間，並確定您對暫存目錄具有寫入權。然後重試從 Web 用戶端傳送文件。如果問題持續發生，請聯絡系統管理者。",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "電子郵件小應用程式無法刪除暫存檔。",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "另一個應用程式可能正在使用檔案，或檔案不存在您的工作站上。",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "如果是另一個應用程式正在使用檔案，請關閉該應用程式。如果該檔案是在本端檔案系統上，請從您工作站上的暫存目錄中移除下列檔案：${0}。",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "無法建立文件的鏈結。",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "儲存庫以無效格式傳回 URL。",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "關閉您的 Web 瀏覽器，包括所有的標籤和階段作業，然後再次登入。重試從 Web 用戶端傳送文件。如果此問題持續發生，請聯絡「IBM 軟體支援中心」。",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "電子郵件小應用程式無法將檔案附加到電子郵件。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "儲存庫以無效格式傳回文件的 URL。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "關閉您的 Web 瀏覽器，包括所有的標籤和階段作業，然後再次登入。重試從 Web 用戶端傳送文件。如果此問題持續發生，請聯絡「IBM 軟體支援中心」。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "無法建立附件。",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "電子郵件小應用程式無法讀取文件的 URL。",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "關閉您的 Web 瀏覽器，包括所有的標籤和階段作業，然後再次登入。重試從 Web 用戶端傳送文件。如果此問題持續發生，請聯絡「IBM 軟體支援中心」。",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "無法從儲存庫擷取文件。",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "階段作業可能已逾時、儲存庫或 Web 應用程式伺服器可能不在執行中，或 Web 用戶端配置可能有問題。",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "請登入並嘗試重新利用電子郵件來傳送文件。如果問題持續發生，請要求系統管理者檢查儲存庫錯誤日誌。",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "如果您將 Web 用戶端配置成將 AFP 文件轉換為另一種格式（例如：PDF），將文件當成附件傳送之前，請確定轉換的配置正確。",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "無法將文件轉換為 PDF。",
		email_applet_CONVERT_DOC_FAILED_explanation: "用來將文件轉換為 PDF 的工具不支援檔案類型。",
		email_applet_CONVERT_DOC_FAILED_userResponse: "請關閉此頁面，然後再次嘗試用電子郵件傳送文件，而不將它轉換為 PDF。",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "未建立電子郵件。",
		email_applet_MAPI_USER_ABORT_explanation: "開啟電子郵件應用程式並且確定可以正常地運行。然後重試從 Web 用戶端傳送文件。如果問題持續發生，請聯絡系統管理者，以檢閱您的作業系統事件日誌。",
		email_applet_MAPI_USER_ABORT_userResponse: "如果您想要關閉電子郵件應用程式，則不需要進一步的動作。如果要傳送電子郵件，請登入電子郵件應用程式，並重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "無法建立電子郵件。",
		email_applet_MAPI_FAILURE_explanation: "您的電子郵件用戶端可能未開啟，或者您可能未登入。",
		email_applet_MAPI_FAILURE_userResponse: "開啟電子郵件應用程式並且確定可以正常地運行。然後重試從 Web 用戶端傳送文件。如果問題持續發生，請聯絡系統管理者，以檢閱您的作業系統事件日誌。",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "無法建立電子郵件。",
		email_applet_MAPI_LOGON_FAILURE_explanation: "您沒有登入電子郵件用戶端。您的電子郵件用戶端必須開啟，並且您必須登入，以便從 Web 用戶端傳送訊息。",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "開啟您的電子郵件用戶端並登入。然後重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "無法建立電子郵件，因為無法在您的工作站上建立暫存檔。",
		email_applet_MAPI_DISK_FULL_explanation: "您工作站上的暫存目錄可能已滿。",
		email_applet_MAPI_DISK_FULL_userResponse: "確定暫存目錄有足夠空間。然後重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "無法建立電子郵件，因為沒有足夠的系統記憶體。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "您可能開啟太多個應用程式。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "關閉任何未使用的應用程式，然後，重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI 存取遭拒。",
		email_applet_MAPI_ACCESS_DENIED_explanation: "可能未對您的電子郵件應用程式啟用或支援「傳訊應用程式設計介面」(Messaging Application Programming Interface, MAPI) 存取。MAPI 是用來啟用 Web 用戶端與電子郵件應用程式之間通訊的傳訊通訊協定。",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "請與系統管理者聯絡。",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "確定電子郵件應用程式已設定 MAPI 存取，並且配置正確。如果問題持續發生，請聯絡「IBM 軟體支援中心」。",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "無法建立附件或項目的鏈結。",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "您可能開啟太多個 Web 瀏覽器階段作業。",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "關閉任何未用的 Web 瀏覽器階段作業。然後重試從 Web 用戶端傳送文件。如果問題持續發生，請聯絡系統管理者。",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "無法傳送電子郵件。",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "您可能嘗試傳送太多附件。",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "選取較少的檔案。然後，重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "無法傳送電子郵件。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "您可能將電子郵件傳送給太多收件者。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "請將電子郵件傳送給較少的收件者。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "無法建立附件。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "在建立附件之前可能已刪除一些必要的暫存檔。如果在傳送電子郵件之前就清除瀏覽器快取，就會發生此錯誤。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "無法建立附件。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "在建立附件之前可能已刪除一些必要的暫存檔。如果在傳送電子郵件之前就清除瀏覽器快取，就會發生此錯誤。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "電子郵件應用程式無法建立附件。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "電子郵件無法傳送給指定的收件者。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "收件者可能不存在通訊錄中。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "請檢查收件者的名稱，然後重試傳送文件。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "電子郵件無法傳送給指定的收件者。",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "電子郵件位址的格式可能不正確。",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "請確定您輸入的是有效的電子郵件位址，然後重試傳送文件。",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_NO_MESSAGES_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_NO_MESSAGES_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "無法傳送電子郵件。",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "電子郵件可能太長。",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "請縮短電子郵件的內文，然後重試傳送電子郵件。",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "無法建立電子郵件。",
		email_applet_MAPI_INVALID_SESSION_explanation: "電子郵件用戶端可能在嘗試建立電子郵件時失敗。",
		email_applet_MAPI_INVALID_SESSION_userResponse: "重新啟動電子郵件用戶端，然後重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "電子郵件的編寫可能不正確。",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "電子郵件無法傳送給指定的收件者。",
		email_applet_MAPI_INVALID_RECIPS_explanation: "電子郵件位址的格式可能不正確。",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "請確定您輸入的是有效的電子郵件位址，然後重新傳送文件。",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "電子郵件用戶端無法執行所要求的動作。",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "電子郵件應用程式傳回非預期的錯誤。",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "重試從 Web 用戶端傳送文件。",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "其中一個內容遺漏所需數量的值。",
		error_property_cardinality_explanation: "某些內容會有值數目下限和上限。",
		error_property_cardinality_userResponse: "使用浮動說明來判斷哪一項內容需要值數目下限。接著，指定值數目下限，然後再試一次。",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "需要檔名。",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "請指定檔名，然後再試一次。",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} 外掛程式包含錯誤。",
		plugin_error_explanation: "對用於 ${0} 外掛程式的 JavaScript 進行求值時，發生錯誤。如果您繼續使用 Web 用戶端，可能會發生其他錯誤。",
		plugin_error_userResponse: "請與系統管理者聯絡。",
		plugin_error_adminResponse: "外掛程式發生問題，需要靠外掛程式提供者來解決。建議您將該外掛程式從 Web 用戶端配置移除，直到解決該外掛程式的問題為止。",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "無法開啟項目範本。",
		open_old_format_entry_template_error_explanation: "項目範本使用的是 Web 用戶端不支援的較舊格式。",
		open_old_format_entry_template_error_userResponse: "請要求系統管理者更新項目範本。",
		open_old_format_entry_template_error_adminResponse: "請使用 Application Engine 或 Workplace XT Entry Template Designer，來儲存已更新的項目範本版本。",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "無法開啟項目範本。",
		open_custom_object_entry_template_error_explanation: "Web 用戶端不支援下列項目範本類型：「自訂物件」項目範本。",
		open_custom_object_entry_template_error_userResponse: "開啟不同的項目範本。",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "無法開啟 eForms 物件。",
		open_forms_object_error_explanation: "Web 用戶端不支援下列的 eForms 物件類型：表單範本、表單資料、文件原則和工作流程原則。",
		open_forms_object_error_userResponse: "請開啟不同的文件。",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "您無法使用 ${0} 項目範本。",
		entry_template_folder_restricted_error_explanation: "項目範本將項目新增至 ${1} 資料夾，但您沒有適當的權限將項目新增至該資料夾。",
		entry_template_folder_restricted_error_userResponse: "選取不同的項目範本，或要求系統管理者提供適當的權限，讓您將項目新增至 ${1} 資料夾。",
		entry_template_folder_restricted_error_0: "項目範本名稱",
		entry_template_folder_restricted_error_1: "資料夾名稱",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "無法開啟項目範本。",
		open_records_entry_template_error_explanation: "Web 用戶端不支援下列項目範本類型：「宣告為記錄」項目範本。",
		open_records_entry_template_error_userResponse: "開啟不同的項目範本。",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "無法開啟工作流程。",
		open_workflow_error_explanation: "Web 用戶端不支援開啟工作流程。",
		open_workflow_error_userResponse: "請開啟不同的文件。",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "無法開啟文件。",
		viewer_unable_to_view_error_explanation: "未針對這種類型的文件配置任何檢視器，或者所配置的檢視器與您的系統不相容。",
		viewer_unable_to_view_error_userResponse: "請要求系統管理者針對這種類型的文件來配置檢視器，並確保所配置的檢視器可以利用使用者的系統。",
		viewer_unable_to_view_error_adminResponse: "請使用管理工具，來配置這種文件類型的檢視器。",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "無法開啟搜尋。",
		search_cannot_open_error_explanation: "未將搜尋特性配置給此桌面。",
		search_cannot_open_error_userResponse: "請詢問您的系統管理者，您對於包含搜尋特性的桌面是否具備存取權，或者此桌面是否已更新成包含搜尋特性。",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "文件未載入。",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional 檢視器無法開啟文件。",
		viewer_document_load_failed_error_userResponse: "如需相關資訊，請參閱檢視器中顯示的錯誤訊息。",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "無法檢視文件。",
		viewer_session_expired_explanation: "無法擷取文件內容。",
		viewer_session_expired_userResponse: "請嘗試重新登入。如果問題持續發生，應用程式伺服器可能不在執行中。請要求系統管理者檢查 IBM Content Navigator 錯誤日誌，或重新啟動伺服器。",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "無法檢視文件。",
		ajaxViewer_getPage_failed_explanation: "「AJAX 檢視器」在擷取頁面內容時，收到錯誤回應。應用程式伺服器可能不在執行中。",
		ajaxViewer_getPage_failed_userResponse: "請關閉 Web 瀏覽器，然後重新登入。如果問題持續發生，請要求系統管理者檢閱 Web 應用程式伺服器日誌檔，或重新啟動伺服器。",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "您的工作站上找不到「Java 執行時期環境 (JRE)」。",
		viewer_java_plugin_not_found_explanation: "找不到外掛程式，或未安裝正確的 JRE 版本。",
		viewer_java_plugin_not_found_userResponse: "請檢查是否已安裝 JRE。例如，在命令提示字元下，輸入下列指令：Java -version。如果未安裝 JRE，或是安裝了錯誤的版本層次，請安裝適當的 JRE 版本。「IBM 軟體支援中心」網站的 <i>IBM Content Navigator 的軟硬體需求</i>文件中包含支援的版本清單。",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "文件無法在您的 Web 瀏覽器中顯示。",
		viewer_pdf_plugin_not_found_explanation: "找不到用來在 Web 瀏覽器中顯示 PDF 文件的外掛程式。",
		viewer_pdf_plugin_not_found_userResponse: "PDF 檔案將會下載至您的工作站，而非顯示在檢視器視窗中。",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "下列項目無法新增至儲存庫：${0}。",
		add_document_single_item_error_explanation: "此錯誤的發生原因可能是下列其中之一：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>嘗試新增已移動或刪除的文件。</li>" + "<li>嘗試新增已重新命名的文件。</li>" + "<li>嘗試新增已毀損的文件。</li>" + "<li>嘗試新增被其他應用程式開啟中的文件。</li>" + "<li>嘗試新增資料夾至儲存庫。</li>" + "<li>您在作業系統上沒有適當的權限可存取文件。</li>" + "</ul>",
		add_document_single_item_error_userResponse: "請執行適當的動作來解決問題：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>如果文件已移動或重新命名，請在檔案系統中尋找該文件然後重試新增。</li>" + "<li>如果文件在另一個應用程式中開啟，請關閉這份文件，再重試新增這份文件。</li>" + "</ul>" + "<br>您無法將資料夾新增至儲存庫。",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "下列 ${0} 個項目無法新增至儲存庫：${1}",
		add_document_multiple_items_error_explanation: "其中一個項目有問題，使所有項目無法新增至儲存庫。此錯誤的發生原因可能是下列其中之一：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>嘗試新增已移動或刪除的文件。</li>" + "<li>嘗試新增已重新命名的文件。</li>" + "<li>嘗試新增已毀損的文件。</li>" + "<li>嘗試新增被其他應用程式開啟中的文件。</li>" + "<li>嘗試新增資料夾至儲存庫。</li>" + "<li>您在作業系統上沒有適當的權限可存取文件。</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "請執行適當的動作來解決問題：" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>如果文件已移動或重新命名，請在檔案系統中尋找該文件然後重試新增項目。</li>" + "<li>如果文件被其他的應用程式開啟中，請關閉該文件然後重試新增項目。</li>" + "<li>如果文件被刪除或毀損，請取消選取該項目，然後重試新增其餘的項目。</li>" + "</ul>" + "<br>您無法將資料夾新增至儲存庫。",
		add_document_multiple_items_error_0: "項目數",
		add_document_multiple_items_error_1: "失敗項目數",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "無法從此位置拖放項目。",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "無法開啟 eForms 物件。",
		open_forms_work_object_error_explanation: "Web 用戶端不支援下列 eForms 物件類型：工作流程原則。",
		open_forms_work_object_error_userResponse: "請開啟不同的文件。",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "無法開啟文件。",
		viewer_privilege_to_view_error_explanation: "您沒有檢視文件的適當許可權。",
		viewer_privilege_to_view_error_userResponse: "請要求文件擁有者或系統管理者給您適當的許可權來檢視文件。",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "無法將項目新增至儲存庫。",
		add_document_too_many_items_error_explanation: "您一次最多可新增 ${0} 個項目。您正在嘗試新增 ${1} 個項目。",
		add_document_too_many_items_error_userResponse: "將某些項目從清單移除，然後嘗試重新新增項目。您也可以聯絡系統管理者，以增加您一次可以新增到此桌面中的文件數上限。",
		add_document_too_many_items_error_0: "項目數上限",
		add_document_too_many_items_error_1: "項目數",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "無法使用下列 URL 來建立連線至 Web 用戶端：${0}。",
		http_ltpa_expired_explanation: "您正在瀏覽的階段作業所關聯的 LTPA 金鑰已過期。",
		http_ltpa_expired_userResponse: "請重新啟動您的 Web 瀏覽器，然後重新登入。如果問題持續發生，請向系統管理者報告下列錯誤：${1}。",
		http_ltpa_expired_0: "Web 用戶端 URL",
		http_ltpa_expired_1: "HTTP 錯誤",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "文件無法新增至 ${0} 資料夾。",
		dnd_no_privilege_error_explanation: "資料夾權限禁止新增任何文件至資料夾。",
		dnd_no_privilege_error_userResponse: "新增文件至不同資料夾。",
		dnd_no_privilege_error_0: "項目名稱",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "項目無法修改。",
		modify_document_too_many_items_error_explanation: "您一次最多可修改 ${0} 個項目。您正在嘗試修改 ${1} 個項目。",
		modify_document_too_many_items_error_userResponse: "請選取比較少的項目，然後嘗試重新修改項目。您也可以聯絡系統管理者，以增加您一次可從桌面新增的項目數上限。",
		modify_document_too_many_items_error_0: "項目數上限",
		modify_document_too_many_items_error_1: "項目數",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "您無法使用 ${0} 類別。",
		add_document_multiple_unique_values_error_explanation: "${0} 類別包含一或多個要求每個文件使用唯一值的內容。當您新增多個文件時，所有文件都使用相同值。",
		add_document_multiple_unique_values_error_userResponse: "請選取不同類別或個別新增文件。",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "您無法使用 ${0} 項目範本。",
		add_document_multiple_unique_values_entry_template_error_explanation: "${0} 項目範本要求您新增文件至 ${1} 類別。不過，${1} 類別包含一或多個要求每個文件使用唯一值的內容。當您新增多個文件時，所有文件都使用相同值。",
		add_document_multiple_unique_values_entry_template_error_userResponse: "請選取不同項目範本或個別新增文件。",
		add_document_multiple_unique_values_entry_template_error_0: "項目範本名稱",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "您無法使用 ${0} 項目範本。",
		entry_template_class_restricted_error_explanation: "項目範本透過使用 ${1} 類別新增項目，並且您沒有透過使用該類別新增項目的適當許可權。",
		entry_template_class_restricted_error_userResponse: "選取不同的項目範本，或要求系統管理者提供適當的權限，讓您透過使用 ${1} 類別來新增項目。",
		entry_template_class_restricted_error_0: "項目範本名稱",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "無法將工作項目重新指派給另一位使用者。",
		process_reassign_error_explanation: "工作流程禁止執行此動作。",
		process_reassign_error_userResponse: "您可以開啟工作項目，然後完成工作項目中的現行步驟。如需此問題的相關資訊，請要求項目的擁有者確認工作項目可以重新指派。",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "無法載入下列自訂動作：${0}。",
		customaction_loadurl_error_explanation: "自訂動作不在可存取的位置。自訂動作的現行 URL 是 ${1}。",
		customaction_loadurl_error_userResponse: "請管理者將自訂動作移至可存取的位置。",
		customaction_loadurl_error_adminResponse: "定義自訂動作的 JSP 檔必須是 eClient Web 應用程式或 IBM Content Navigator Web 應用程式的一部分。",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "找不到下列功能：${0}。",
		feature_invalid_explanation: "如果指定桌面無法使用或功能名稱拼錯，就會發生此問題。",
		feature_invalid_userResponse: "當您按一下「確定」時，您會被重新導向至此桌面的預設功能。請聯絡系統管理者以報告此問題。",
		feature_invalid_adminResponse: "如果功能應該可以在桌面上使用，請更新管理工具中的桌面配置。如果功能不應納入桌面或拼錯，請與建立此功能 URL 的應用程式開發者合作，以便更新 URL。",
		feature_invalid_number: 2066,
		feature_invalid_0: "功能名稱",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "無法開啟 ${0} 搜尋。",
		search_unsupportedTeamspaceSearch_error_explanation: "您必須在小組園地中，才能開啟這項搜尋。",
		search_unsupportedTeamspaceSearch_error_userResponse: "請選取不同的搜尋。",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "無法匯入下列檔案：${0}。",
		wrong_import_file_type_error_explanation: "檔案必須是內容檔。",
		wrong_import_file_type_error_userResponse: "選取您從管理工具匯入的內容檔。",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "找不到 ${0} 儲存庫（位於 ${1} 桌面）。",
		browse_repository_not_found_error_explanation: "如果在 URL 參數中指定了儲存庫，則儲存庫必須存在於桌面上，並且已啟用瀏覽特性。",
		browse_repository_not_found_error_userResponse: "請確保 URL 中所指定的儲存庫 ID 是正確的、儲存庫已新增至 ${1} 桌面，及儲存庫已啟用瀏覽特性。",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "${0} 儲存庫（位於 ${1} 桌面中）沒有啟用瀏覽特性。",
		browse_repository_not_enabled_error_explanation: "如果在 URL 參數中指定了儲存庫，則儲存庫必須啟用瀏覽特性。",
		browse_repository_not_enabled_error_userResponse: "請對 ${0} 儲存庫（位於 ${1} 桌面中）啟用瀏覽特性。",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "無法完成搜尋，因為鏈結包含無效的準則。",
		invalid_xt_stored_search_criteria_error_explanation: "下列值無效：${0}。",
		invalid_xt_stored_search_criteria_error_userResponse: "請要求系統管理者提供已更新的鏈結。",
		invalid_xt_stored_search_criteria_error_adminResponse: "編輯 URL 中的適當名稱/值配對。如果不知道哪些值適用於此內容，請在 FileNet Workplace XT 搜尋設計程式中開啟已儲存的搜尋，以判定有效值。",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "無法開啟跨儲存庫搜尋。",
		unified_search_invalid_fixed_value_error_explanation: "跨儲存庫搜尋包含無效準則。如果準則所具有的固定值與對映中的其他內容不相容，則可能會發生此問題。比方說，如果固定值是字串，但對映中的其他內容是整數，則可能會發生此問題。",
		unified_search_invalid_fixed_value_error_userResponse: "如果具有適當的權限來編輯搜尋，請移除無效準則並重新儲存搜尋。如果不具有編輯搜尋的適當權限，請要求搜尋的擁有者或您的系統管理者重新儲存搜尋。",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "無法完成您的要求。",
		launch_action_invalid_json_error_explanation: "傳遞至 Web 用戶端的資料無效。",
		launch_action_invalid_json_error_userResponse: "請告知系統管理者出現此問題時您正在使用的應用程式。",
		launch_action_invalid_json_error_adminResponse: "用戶端應用程式未將有效的 JSON 物件傳送至 Web 用戶端。如需其他協助，請與「IBM 軟體支援中心」聯絡。",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "無法完成您的要求。",
		launch_action_not_found_error_explanation: "未對 ${1} 桌面上的任何功能表配置 ${0} 動作。",
		launch_action_not_found_error_userResponse: "請要求系統管理者將 ${1} 桌面配置成使用包含 ${0} 動作的功能表，或者向您指派包括 ${0} 動作的桌面。",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "無法完成您的要求。",
		launch_action_repository_not_found_error_explanation: "${0} 儲存庫未與 ${1} 桌面相關聯。",
		launch_action_repository_not_found_error_userResponse: "請要求系統管理者將 ${0} 儲存庫與 ${1} 桌面建立關聯，或者向您指派包括 ${0} 儲存庫的桌面。",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "無法開啟小組園地。",
		teamspace_cannot_open_error_explanation: "未將小組園地特性配置給此桌面。",
		teamspace_cannot_open_error_userResponse: "請詢問您的系統管理者，您對於包含小組園地特性的桌面是否具備存取權，或者此桌面是否已更新成包含小組園地特性。",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "移入已修訂的內容時發生錯誤。",
		viewer_redaction_checkin_failed_explanation: "「檢視器」在移入已修訂的內容時收到錯誤回應。",
		viewer_redaction_checkin_failed_userResponse: "請要求系統管理者檢閱 Web 應用程式伺服器日誌檔。",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "您無法向此儲存庫新增文件。",
		add_document_odserver_odwek_version_od_error_explanation: "IBM Content Manager OnDemand 伺服器或 ODWEK 的現行版本，不是支援向 Content Manager OnDemand 儲存庫新增文件所需的版本下限。",
		add_document_odserver_odwek_version_od_error_userResponse: "請要求管理者來檢查支援向 Content Manager OnDemand 儲存庫新增文件所需的 Content Manager OnDemand 伺服器和 ODWEK 版本。",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "無法將項目新增至儲存庫。",
		add_document_too_many_items_od_error_explanation: "若為 IBM Content Manager OnDemand 儲存庫，您一次只能新增一個項目。",
		add_document_too_many_items_od_error_userResponse: "請從清單中移除部分項目，然後再次嘗試新增項目（一次新增一個）。",
		add_document_too_many_items_od_error_0: "項目數上限",
		add_document_too_many_items_od_error_1: "項目數",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "項目無法新增至儲存庫。",
		add_document_filesize_empty_od_error_explanation: "您無法向 IBM Content Manager OnDemand 儲存庫新增空白檔案。",
		add_document_filesize_empty_od_error_userResponse: "請向該檔案新增內容並再次嘗試新增該檔案，或者新增不同的項目。",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "無法開啟跨儲存庫搜尋。",
		unified_search_repository_not_found_error_explanation: "跨儲存庫搜尋包含一或多個無效儲存庫。當納入搜尋的儲存庫從應用程式刪除，或從現行桌面移除，可能會發生此問題。",
		unified_search_repository_not_found_error_userResponse: "如果具有編輯搜尋的適當權限，請重新儲存搜尋。在您儲存搜尋時，Web 用戶端會將無效的儲存庫從搜尋移除。如果不具有編輯搜尋的適當權限，請要求搜尋的擁有者或您的系統管理者重新儲存搜尋。",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "無法建立新文件。",
		edit_document_using_office_online_error: "無法開啟文件。",
		edit_document_using_office_online_error_explanation: "未配置 Microsoft Office Online Server URL。",
		edit_document_using_office_online_error_userResponse: "管理者必須先在儲存庫上啟用 Office Online Server 並指定 Microsoft Office Online Server URL，您才能使用 Office Online。",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "該文件無法在 Microsoft Office Online 中開啟。",
		edit_document_using_office_online_error_userResponse1: "請要求管理者更新 MS Office Online Server Integration。<br><br> 如果使用者需要從 Microsoft Office Online 存取此文件，請前往儲存庫的 Edit Integration 頁面，更新 MS Office Online Server Integration 以在類別清單中包括此類別，並進行修改以取得 Office Online 支援。",		
		browser_not_support_this_viewer: "所配置的檢視器與您的瀏覽器不相容。",
		browser_not_support_this_viewer_explanation: "${0} 不受此瀏覽器支援。",
		browser_not_support_this_viewer_userResponse: "請使用另一個檢視器來開啟文件。「IBM 軟體支援中心」網站的 <i>IBM Content Navigator 的軟硬體需求</i>文件中包含支援的瀏覽器清單。",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "工作流程資訊",
		process_information_info_text: "所選項目目前執行於下列工作流程。",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "等於",
		operator_NOTEQUAL: "不等於",
		operator_LIKE: "相似",
		operator_STARTSWITH: "開頭為",
		operator_ENDSWITH: "結尾為",
		operator_NOTLIKE: "不相似",
		operator_NULL: "是空的",
		operator_NOTNULL: "不是空的",
		operator_LESS: "小於",
		operator_LESSOREQUAL: "小於或等於",
		operator_GREATER: "大於",
		operator_GREATEROREQUAL: "大於或等於",
		operator_BETWEEN: "介於",
		operator_NOTBETWEEN: "不介於",
		operator_IN: "併入全部",
		operator_INANY: "併入任何項",
		operator_NOTIN: "排除全部",
		operator_CONTAINS: "包含",

		/* SearchForm widget */
		search_button_tooltip: "搜尋符合準則的文件。",
		reset_button_tooltip: "將搜尋重設為管理者設定的預設值。",
		clear_button_tooltip: "移除您對搜尋輸入的所有值。",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "選取搜尋",
		append_to_search: "附加至搜尋",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "新建搜尋",
		new_unified_search: "新建跨儲存庫搜尋",
		searh_name_contains: "搜尋名稱包含",
		keep_search_criteria_expanded: "將搜尋準則保持開啟狀態",
		showing_results: "顯示結果：",
		open_in_new_window: "在新視窗中開啟",
		open_in_new_tab: "在新標籤中開啟",
		close_tab: "關閉標籤",
		add_repository: "新增儲存庫",
		edit_repository: "編輯儲存庫",
		remove_repository: "移除",
		search_scope: "搜尋範圍",
		search_class_template: "類別",
		object_type_version: "物件類型和版本",
		not_applicable: "不適用",
		unified_search_including_subfolders: " （包括子資料夾）",
		unified_search_dialog_intro_text: "選取您要納入搜尋的儲存庫與搜尋或類別。",
		unified_search_class_or_template: "類別或範本",

		select_object_fieldset_legend: "要用於尋找待附加項目的方法：",
		select_object_create_new_search: "新搜尋",
		select_object_search_template: "現有搜尋",

		search_criteria: "搜尋準則：",
		search_criteria_no_colon: "搜尋準則",
		search_in_multiple: "搜尋位置 (${0})：",
		search_location_including_subfolders: "${0} 包含子資料夾",
		search_class: "類別：",
		search_class_multiple: "類別 (${0})：",
		search_class_including_subclasses: "${0} 包含子類別",
		search_class_all_pseudo: "全部",
		search_results: "搜尋結果",
		select_operator: "選取運算子",
		ending_value: "${0} 內容的結尾值為：",
		search_options: "搜尋選項：",
		search_version: "版本：",
		search_released_version: "已發行的版本",
		search_current_version: "現行版本",
		search_all_versions: "所有版本",
		search_file_type_filter: "檔案類型過濾器：",
		search_one_file_type: "1 個檔案類型",
		search_many_file_types: "${0} 個檔案類型",
		search_action_filter: "動作過濾器：",
		search_action_filter_hover_help: "縮小結果範圍，只包含使用者曾執行過特定動作的檔案。<br/>例如，您可以只搜尋在 2012 年 9 月 20 日由您新增的文件。",
		search_action_filter_enabled: "已啟用動作過濾器",
		search_enable: "啟用",
		search_disable: "停用",
		search_by: "執行者",
		search_added: "新增",
		search_modified: "修改",
		search_checked_out: "移出",
		search_date_operator_on: "在",
		search_date_operator_not_on: "不在",
		search_date_operator_before: "早於",
		search_date_operator_after: "晚於",
		search_version_hover_help_p8: "發行的版本可供所有使用者使用。現行版本的文件表示有一或多位使用者正在編輯該文件。",
		search_version_hover_help_cm: "現行版本是項目的最新版本。",
		search_using: "搜尋符合下列條件的項目：",
		search_property_and_text_criteria: "內容值和文字準則",
		search_property_or_text_criteria: "內容值或文字準則",
		search_property_and_text: "內容和文字準則",
		search_property_or_text: "內容或文字準則",
		search_property_options: "內容選項：",
		search_property_option_match_all: "所有內容",
		search_property_option_match_any: "任何內容",
		search_property_option_match_all_summary: "全部相符",
		search_property_option_match_any_summary: "任意相符",
		search_total_count_type_total: "總計",
		search_total_count_type_atleast: "至少",
		search_content_size_filter: "內容大小過濾器：",
		search_content_size_filter_any: "任何內容大小",

		/* Search work options */
		search_work_filter: "工作項目過濾器：",
		search_work_filter_hover_help: "縮小結果範圍以僅包含工作流程中的項目。例如，可以縮小結果範圍以僅包含作用中的工作項目。<br /><br />如果要查看搜尋所傳回的所有項目版本，則此選項不適用。",
		search_work_filter_enabled: "已啟用工作項目過濾器",
		search_work_filter_status: "狀態：",
		search_work_filter_step: "步驟：",
		search_work_filter_owner: "擁有者：",
		search_work_filter_status_all: "所有項目",
		search_work_filter_status_active: "作用中的項目",
		search_work_filter_status_suspended: "已暫停的項目",
		search_work_filter_process_all: "所有工作流程",
		search_work_filter_step_all: "所有步驟",
		search_work_filter_owner_all: "所有使用者",
		search_work_filter_step_error: "步驟名稱不存在。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "資訊不足，無法完成搜尋。請輸入至少一個條件的值。",
		search_insufficient_input_box: "資訊不足，無法完成搜尋。輸入文字搜尋準則或者選取 meta 資料範本。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "如果沒有其他資訊，則無法將搜尋配置成在開啟時執行。請輸入至少一個條件的值。",
		search_member_required: "如果要與特定的使用者和群組共用此搜尋，請選取至少一個使用者或群組來共用此搜尋。",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "您是否想要關閉而不儲存變更？",
		search_prompt_close_all_without_save: "您是否要關閉所有標籤，而不儲存變更？",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "下列其中一項搜尋準則類型對此儲存庫無效：${0}。為了在 Web 用戶端中執行搜尋，請務必移除無效準則。如果您儲存搜尋，無效準則將會遭到移除。如果您不想變更搜尋，請關閉搜尋。",
		search_invalid_repository: "一或多個儲存庫",
		search_invalid_class: "一或多個類別",
		search_invalid_folder: "一或多個資料夾",
		search_invalid_file_type: "一或多個檔案類型",
		search_invalid_property: "一或多個內容",
		search_invalid_text_search: "文字搜尋準則",
		search_invalid_work: "工作項目過濾準則",

		search_operator_pulldown_missing: "需要運算子。請從下拉功能表中選取運算子。如果沒有看到任何運算子，請系統管理者檢查管理工具中的<b>搜尋</b>標籤，以查看是否所有運算子皆為隱藏。如果這是跨儲存庫搜尋，而且對映內容之間沒有配置共同的運算子，下拉功能表中可能會沒有任何運算子。",

		/*SearchBuilder */
		open_search_builder: "新建搜尋",
		document_type: "類別",
		show_all_properties: "顯示所有內容",
		text_search_label: "尋找具有下列詞彙的項目：",
		text_search_place_holder: "使用詞彙和運算子的組合：* ? 或「完全相符詞組」 ",
		text_search_place_holder_box: "使用詞彙和運算子的組合：AND、OR、NOT 及\"完全相符詞組\"",
		text_search_place_holder_cascade_proximity: "使用詞彙和運算子的組合：* 或 ?",
		text_search_place_holder_common: "使用詞彙和\"完全相符詞組\"的組合",
		text_search_hover_help_p8: "請使用星號 (*) 或問號 (?) 來作為萬用字元。使用雙引號 (\"\") 代表完全相符。",
		text_search_hover_help_p8_only_crs: "請使用星號 (*) 或問號 (?) 來作為萬用字元。使用雙引號 (\"\") 代表完全相符。指定多個詞彙時，跨儲存庫搜尋將返回包含其中的任何詞彙的項目。",
		text_search_hover_help_cm: "請使用星號 (*) 或問號 (?) 來作為萬用字元。使用雙引號 (\"\") 代表完全相符。請在要排除的詞彙之前使用減號 (-)，以及在要包含的詞彙之前使用加號 (+)。",
		text_search_hover_help_box: "在詞彙之間使用 AND，以符合所有詞彙。在詞彙之間使用 OR，以符合其中一個詞彙。使用雙引號 (\"\") 代表完全相符。在詞彙之前加上 NOT 以排除它。",
		text_search_hover_help_common: "使用雙引號 (\"\") 代表完全相符。指定多個詞彙時，跨儲存庫搜尋將返回包含其中的任何詞彙的項目。",
		text_search_options: "文字選項：",
		text_search_options_hover_help: "如果您使用萬用字元以外的任何運算子，請選取「進階運算子」。",
		text_search_option_any: "任何詞彙",
		text_search_option_all: "全部詞彙",
		text_search_option_proximity: "包括相似字：",
		text_search_option_none: "進階運算子",
		text_search_option_authoring: "文字搜尋為：",
		text_search_option_authoring_hover_help: "選擇某個選項，從而判定如何讓使用者使用文字搜尋準則。如果您不想在搜尋中包含任何文字搜尋準則，請隱藏此選項。否則，可容許使用者編輯、要求文字搜尋準則，或對使用者而言成為唯讀準則。",
		text_search_option_hide: "隱藏準則",
		text_search_option_hide_hover_help: "如果您不想在搜尋中包含任何文字搜尋準則，請選取此選項，否則會容許其他使用者指定文字搜尋準則。",
		text_search_option_in: "在 HTML/XML 標籤 ${0}",
		text_search_option_paragraph: "在相同段落",
		text_search_option_sentence: "在相同句子",
		text_search_option_vql: "VQL 查詢",
		text_search_option_none_hover_help: "在要排除的詞彙之前使用 -。",
		text_search_option_cascade_proximity_hover_help: "限制搜尋結果的詞彙必須出現在不包含完整字句的單字範圍內。",

		box_search_metadata: "meta 資料：",
		box_search_select_template: "選擇範本",
		box_search_no_templates: "沒有可用的範本",
		box_text_search_options_search_within: "搜尋範圍︰",
		box_text_search_options_search_within_everything: "每個項目",
		box_text_search_options_search_within_file_content: "文件內容",
		box_text_search_options_search_within_tags: "標示",
		box_text_search_options_limit_to: "僅搜尋：",

		add_property: "新增內容",
		edit_template: "編輯搜尋",
		save_search: "儲存搜尋",
		search_template_name: "名稱：",
		search_template_desc: "說明：",
		auto_run: "開啟時執行搜尋",
		show_in_tree: "在資料夾結構中顯示搜尋",
		show_in_tree_hover_help: "如果搜尋儲存在資料夾中，則依預設，它僅顯示在內容清單中。如果選取此選項，則搜尋還會顯示在「瀏覽」視圖中的資料夾樹狀結構中。不過，僅當您將搜尋儲存在資料夾中時，搜尋才會顯示在資料夾樹狀結構中。",
		share_search_with: "共用搜尋對象：",
		remove_member: "移除 ${0}",
		ok_button_label: "確定",
		save_template: "儲存",
		save_template_title: "如果您需要經常搜尋特定項目，請儲存您的搜尋準則。",
		remove_criterion: "移除",
		apply_button_label: "套用",
		empty_search_results_pane: "執行搜尋來查看結果。",

		/*Search_in control   */
		folder_tree_repository_root_name: "整個儲存庫",

		repository_already_selected: "${0} 儲存庫無法新增至跨儲存庫搜尋，因為其已納入搜尋。<br/> 儲存庫只能納入跨儲存庫搜尋一次。<br/>請選取不同儲存庫以納入跨儲存庫搜尋。",

		repository_limit_reached: "無法新增 ${0} 儲存庫至跨儲存庫搜尋。您最多可以將 ${1} 個儲存庫新增至搜尋。",

		nomore_criteria_toappend: "所有對映的內容均已納入搜尋準則中。搜尋準則中未新增任何內容。",
		nomore_criteria_toappend_regular: "所有的內容均已納入搜尋準則中。搜尋準則中未新增任何內容。",

		/* OD Save Search dialog */
		reload_label: "重新載入",
		od_save_search_help_text: "鍵入搜尋的名稱，或選取要取代的現有搜尋",
		public_access_label: "容許他人使用這項搜尋",
		od_delete_search_help_text: "請選取一個以上要刪除的搜尋",
		delete_save_searches: "刪除已儲存的搜尋",

		/* Unified Search */
		unified_search_enable_text_search: "包括文字搜尋準則",
		unified_search_text_search_enabled: "已包括文字搜尋",
		unified_search_mapping: "對映",
		unified_search_new_mapping: "新建對映",
		unified_search_mapping_name: "對映名稱",
		unified_search_mapping_dialog_instructions: "選取要對映的內容。可以將部分內容對映至具有不同資料類型的內容。例如，可以將字串內容對映至整數內容。當您將某個內容對映至另一個內容時，這些內容在跨儲存庫搜尋中視作單一內容。",
		unified_search_filter_available_properties: "過濾可用內容",
		unified_search_available_properties: "可用的內容",
		unified_search_mapped_properties: "對映的內容",
		unified_search_single_values: "單值",
		unified_search_multiple_values: "多值",
		unified_search_add_mapping: "新增對映",
		unified_search_warn_remove_repository: "所選取的儲存庫已在搜尋準則中使用。\n如果您移除儲存庫，納入儲存庫的全部對映和搜尋準則將遭到刪除。\n\n您要移除儲存庫嗎？",
		unified_search_warn_update_repository_mappings: "變更此儲存庫的內容選取會影響搜尋準則。\n\n搜尋準則包括一個以上的對映，而這些對映包括一個以上您要移除的內容。必須刪除包括您要移除的內容的所有對映。必須刪除包括這些對映的所有搜尋準則才能執行搜尋。\n\n您要更新儲存庫選項並刪除對映和搜尋準則嗎？",
		unified_search_warn_update_repository_mappings_reset: "包括此儲存庫的文字搜尋準則會影響跨儲存庫搜尋準則。\n\n必須先清除包含了具有此儲存庫內容的對映的任何內容搜尋準則，然後才能執行搜尋。\n\n您要更新儲存庫選項並清除搜尋準則嗎？",
		unified_search_warn_update_repository_text_criteria: "移除此儲存庫的文字搜尋準則會影響跨儲存庫搜尋準則。\n\n必須從跨儲存庫搜尋準則中刪除文字搜尋準則才能執行搜尋。\n\n您要更新儲存庫選項並刪除文字搜尋準則嗎？",
		unified_search_warn_update_repository_text_criteria_and_mappings: "移除此儲存庫的文字搜尋準則並變更內容選取會影響跨儲存庫搜尋準則。\n\n必須從跨儲存庫搜尋準則中刪除文字搜尋準則才能執行搜尋。此外，內容搜尋準則包括一個以上的對映，而這些對映包括一個以上您要移除的內容。必須刪除包括您要移除的內容的所有對映。必須刪除包括這些對映的所有內容搜尋準則才能執行搜尋。\n\n您要更新儲存庫選項並刪除文字搜尋準則、對映和內容搜尋準則嗎？",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "排除此儲存庫的文字搜尋準則會影響跨儲存庫搜尋準則。\n\n必須先清除包含了具有此儲存庫內容的對映的任何內容搜尋準則，然後才能執行搜尋。可以從跨儲存庫搜尋準則中刪除文字搜尋準則來執行搜尋。\n\n您要更新儲存庫選項並清除搜尋準則嗎？",
		unified_search_warn_remove_mapping: "移除此對映會影響搜尋準則。\n\n必須刪除使用該對映的搜尋準則才能執行搜尋。\n\n您要更新對映並刪除搜尋準則嗎？",
		unified_search_warn_update_mapping: "變更此對映會影響搜尋準則。\n\n必須清除使用該對映的搜尋準則才能確保搜尋不包括無效的運算子或無效的值。\n\n您要更新對映並清除搜尋準則嗎？",
		unified_search_warn_update_mapping_not_searchable: "變更此對映會影響搜尋準則。\n\n當被對映內容全為僅限顯示時，不能在搜尋準則中使用該對映。必須刪除使用該對映的搜尋準則才能執行搜尋。\n\n您要更新對映並刪除搜尋準則嗎？",
		unified_search_warn_update_mapping_box_searchable: "變更此對映會影響搜尋準則。\n\n搜尋準則已包括此對映多次，如果您新增 ${1} 儲存庫中的 ${0} 內容，搜尋準則包括 ${0} 內容的次數就太多了。必須刪除使用該對映的搜尋準則才能執行搜尋。\n\n您要更新對映並刪除搜尋準則嗎？",
		unified_search_details: "跨儲存庫搜尋詳細資料",
		unified_search_fixed_value_property: "固定值內容",
		unified_search_required_property: "必要的內容",
		unified_search_display_only_property: "僅限顯示的內容",
		unified_search_missing_required_properities: "無法儲存或執行搜尋。<br/>下列內容為必要內容：${0}您必須在對映中納入內容，然後將內容與值新增至搜尋準則中。",
		unified_search_property_repostory: "${0}（儲存庫：${1}）",
		unified_search_builder_no_mappings: "無法執行搜尋。<br/>您必須建立內容對映，將其包含在<b>結果顯示</b>以便搜尋可以顯示您的結果。",
		unified_search_builder_insufficient_criteria_to_run: "無法執行搜尋。<br/>該搜尋準則不包含文本搜尋準則或下列儲存庫的內容值：${0}針對搜尋中包含的每個儲存庫，您必須輸入文本搜尋準則，或建立內容對映，將其包含在內容準則中並指定內容值。",
		unified_search_builder_insufficient_criteria_to_save: "無法儲存搜尋。<br/>該搜尋不包含下列儲存庫的搜尋準則：${0}。針對包含在搜尋中的每個儲存庫，您必須進行下列其中一項：<ol><li>建立內容對映，並將其包含在搜尋準則中。</li><li>修改儲存庫以包含文本搜尋準則，建立內容對映並將其包含在<b>結果顯示</b>中。</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "無法執行搜尋。<br/>對於包括在搜尋中的每個儲存庫，至少必須指定一個內容值。例如，您可以指定下列內容的值：${0}",
		unified_search_runtime_insufficient_criteria_text: "無法執行搜尋。<br/>需要文字搜尋準則。",
		unified_search_runtime_insufficient_criteria_text_or_properties: "無法執行搜尋。<br/>對於包括在搜尋中的每個儲存庫，至少必須指定一個內容值，或者輸入文字搜尋準則。例如，您可以指定下列內容的值：${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "無法執行搜尋。<br/>需要文字搜尋準則。對於包括在搜尋中的每個儲存庫，至少必須指定一個內容值，或者輸入文字搜尋準則。例如，您可以指定下列內容的值：${0}",
		unified_search_invalid_criteria: "搜尋包含妨礙搜尋執行的無效準則。<br/>已移除無效的準則。不過，您必須先儲存搜尋的變更，然後才能執行搜尋。如果您不想儲存搜尋，請關閉搜尋。<br/><br/>已移除或修改下列項目：${0}",
		unified_search_invalid_fixed_values: "無法儲存或執行搜尋。<br/>下列搜尋準則所具有的固定值無效：${0}。請執行下列其中一個動作來解決問題：<ul><li>移除包含無效值的搜尋準則</li><li>編輯對映（包含具有固定值的 IBM Content Manager OnDemand 內容）以移除此內容。</li><li>編輯對映（包含具有固定值的 IBM Content Manager OnDemand 內容）以使所有內容相容。如需可以進行對映之內容的相關資訊，請參閱內容對映視窗頂端介紹文字中的「進一步瞭解」鏈結。</li></ul>",
		unified_search_cannot_add_properties: "無法將內容新增至此搜尋。<br/>所有可用的被對映內容均已在搜尋準則中，並且只能將每一個內容新增至搜尋中一次。",
		unified_search_mapping_not_viewable: "Box 範本內容無法顯示在搜尋結果中。如果要將此對映新增為直欄，則必須至少對映一個不是 Box 範本內容的內容。例如，可以從其他儲存庫選取內容。",

		unified_search_returned_more: "至少一個儲存庫超出了容許的結果數上限。",
		unified_search_partial_failure: "至少一個儲存庫發生了錯誤。",
		unified_search_partial_failure_and_returned_more: "至少一個儲存庫發生了錯誤，並且至少一個儲存庫超出了容許的結果數上限。",
		unified_search_see_analysis: "請參閱結果分析。",
		unified_search_analysis_intro_returned_more: "對於超出容許的結果數上限的每一個儲存庫，請嘗試精簡搜尋準則以傳回少一些結果。或者，您可以執行單個儲存庫搜尋，以傳回超過跨儲存庫搜尋的容許上限的結果數。",
		unified_search_analysis_intro_partial_failure: "檢閱一個以上的儲存庫傳回的錯誤資訊。如果適當，請解決錯誤，然後再次執行跨儲存庫搜尋。",
		unified_search_analysis_intro_partial_failure_and_returned_more: "對於發生錯誤的每一個儲存庫，嘗試解決錯誤並再次執行搜尋。<br/><br/>對於超出容許的結果數上限的每一個儲存庫，請嘗試精簡搜尋準則以傳回少一些結果。或者，您可以執行單個儲存庫搜尋，以傳回超過跨儲存庫搜尋的容許上限的結果數。",
		unified_search_results_found: "找到結果",
		unified_search_maximum_allowed: "容許的上限",
		unified_search_maximum_exceeded: "超出上限",

		unified_search_mapping_rule_box: "無法將此內容新增至對映。<p>${1} 儲存庫中的 ${0} 內容已在另一個對映中，並且此儲存庫中的可搜尋內容只能包括在每個搜尋的一個對映中。<br/>請選取不同內容以新增至對映。</p>",
		unified_search_mapping_rule_repository: "內容無法新增至對映中。<br/>對映已納入來自 ${0} 儲存庫的內容。對映只能每個儲存庫納入一個內容。<br/>請選取不同儲存庫以從其新增內容，或幫所選取的內容建立新對映。",
		unified_search_mapping_rule_data_type: "內容無法新增至對映中。<br/>無法將 ${0} 內容對映至 ${1} 內容。請選取其他內容進行對映，或者給所選內容建立新對映。<br/>如需可以進行對映之內容的相關資訊，請參閱此視窗頂端介紹文字中的「進一步瞭解」鏈結。",
		unified_search_mapping_rule_cardinality: "內容無法新增至對映中。<br/>對映當中的全部內容都必須支援單值或多值。所選取的內容支援 ${0}，而對映中的內容支援 ${1}。<br/>請選取不同內容以新增至對映，或幫所選取的內容建立新對映。",
		unified_search_mapping_rule_fixed_value: "內容無法新增至對映中。<br/>對映已包含具有固定值的內容。對映只能包含一個具有固定值的內容。<br/>請選取不同內容以新增至對映，或幫所選取的內容建立新對映。",
		unified_search_mapping_rule_child_component: "內容無法新增至對映中。<br/>具有子元件的內容無法對映至其他內容。如果您想要能夠搜尋此儲存庫，請幫所選取的內容建立新對映。",
		unified_search_mapping_rule_operator_intersection: "內容無法新增至對映中。<br/>對映當中的全部內容都必須具有一或多個共同運算子。不過，${0} 內容與對映中的其他內容沒有任何共同運算子。<br/>如果適當，請選取不同內容。如果您必須納入所選取的內容，請與系統管理者合作，以編輯與內容相關聯的運算子。",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "進階設定",
		advanced_search_options_intro: "設定進階準則選項。",
		advanced_search_options_editable: "可編輯",
		advanced_search_options_readonly: "唯讀",
		advanced_search_options_required: "必要",
		advanced_search_options_hidden: "隱藏",
		advanced_search_options_property_editable:"內容為：",
		advanced_search_options_operators:"操作員：",
		advanced_search_options_use_all:"使用全部",
		advanced_search_options_use_selected:"使用所選項",
		advanced_search_options_operators_filtered: "過濾的操作員",
		// Data types in lowercase
		data_type_boolean: "布林值",
		data_type_date: "日期",
		data_type_time: "時間",
		data_type_timestamp: "時間戳記",
		data_type_decimal: "小數值",
		data_type_double: "浮點數字",
		data_type_short: "整數",
		data_type_integer: "整數",
		data_type_long: "整數",
		data_type_string: "字串",
		data_type_string_alpha: "英文字母字串",
		data_type_string_alphanum: "英數字串",
		data_type_string_ext: "延伸英數字串",
		data_type_string_num: "數值字串",
		data_type_binary: "二進位",
		data_type_object: "物件",
		data_type_guid: "廣域唯一 ID",
		data_type_user: "使用者",
		data_type_child_component: "子元件",

		/* Print Dialog */
		print_title: "列印",
		print_message: "正在列印：${0}",
		print_print_button: "列印",
		print_clean_margins_button: "全部設為 0",
		print_type: "印表機類型：",
		print_printer_server_options: "伺服器列印選項",
		print_printer_properties: "印表機內容",
		print_printer_fax_properties: "傳真內容",
		print_printer_name: "印表機名稱：",
		print_fax_recipient: "收件者",
		print_fax_sender: "寄件者",
		print_copies: "份數：",
		print_local_orientation: "方向",
		print_local_orientation_landscape: "橫印",
		print_local_orientation_portrait: "直印",
		print_local_margins: "邊距",
		print_local_margins_top: "頂部",
		print_local_margins_bottom: "底端",
		print_local_margins_left: "左側",
		print_local_margins_right: "右側",
		print_printer_server: "伺服器",
		print_printer_local: "本端",
		print_property_class: "類別：",
		print_property_routing: "遞送：",
		print_property_pagedef: "頁面定義：",
		print_property_node: "節點：",
		print_property_writer: "寫出器：",
		print_property_formdef: "格式定義：",
		print_property_printerid: "目的地：",
		print_property_forms: "紙張規格：",
		print_property_faxnotes: "附註：",
		print_property_faxcompany: "公司：",
		print_property_faxnumber: "傳真號碼：",
		print_property_faxname: "名稱：",
		print_property_faxsendertelnumber: "電話號碼：",
		print_property_faxcoverpage: "封面：",
		print_property_faxsubject: "主旨：",
		print_saveoptions: "儲存列印選項",
		print_property_bannerpage: "使用橫幅頁",
		print_print_with_info_fields: "一併列印資訊欄位",
		print_field_from: "寄件者",
		print_field_to: "收件者",
		print_invalid_value_class: "有效字元是 A-Z 或 0-9",
		print_invalid_value_pagedef: "有效字元是英文字母或數值字元，或字元 @、# 或 $",
		print_invalid_value_writer: "有效字元是英文字母或數值字元，或字元 @、# 或 $",
		print_invalid_value_formdef: "有效字元是英文字母或數值字元，或字元 @、# 或 $",
		print_invalid_value_forms: "有效字元是英文字母或數值字元，或字元 @、# 或 $",
		print_invalid_value_margin: "有效數字是 ${0} 到 ${1} 之間",
		print_status_message: "${0} 文件已傳送至 ${1} 印表機。",

		print_applet_init_error: "無法啟動列印小應用程式。",
		print_applet_init_error_explanation: "發生此問題的可能原因如下：<br/><br/><ul><li>工作站上沒有安裝「Java 執行時期環境 (JRE)」。</li><li>Web 瀏覽器中沒有啟用 Java 外掛程式。</li><li>您工作站上的 JRE 版本與 IBM Content Navigator 版本不相容。</li><li>等待列印小應用程式啟動時，瀏覽器逾時。</li></ul>",
		print_applet_init_error_userResponse: "您可以完成下列步驟以解決 JRE 問題：<br/><br/><ol><li>請確保 JRE 已安裝在您的工作站上。</li><li>請確保在 Web 瀏覽器中啟用了 Java 外掛程式。</li><li>請確保您工作站上的 JRE 版本與 IBM Content Navigator 相容，然後再試一次。「IBM 軟體支援中心」網站的 <i>IBM Content Navigator 的軟硬體需求</i>文件中包含支援的版本清單。</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "封面",
		daeja_print_selected_documents_title: "選取的文件",

		/* change the caps to em for emphasis*/
		match_all_criteria: "符合所有搜尋準則",
		match_any_criteria: "符合任何搜尋準則",
		include_subfolders_summary: "${0}（包括子資料夾）",
		browse_button: "瀏覽&hellip;",
		search_for: "搜尋目標：",
		object_type_documents: "文件",
		object_type_folders: "資料夾",
		object_type_documents_folders: "文件和資料夾",
		object_type_web_links: "Web 鏈結",
		object_type_documents_folders_web_links: "文件、資料夾及 Web 鏈結",

		/* SelectSearchFolderDialog */
		search_in: "搜尋範圍：",
		include_subfolders: "包括子資料夾",

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
		locked_item_icon_title: "已被 ${0} 鎖定",
		checked_out_icon_title: "已被 ${0} 移出",
		major_minor_version_icon_title: "附次要版本的主要版本",
		suspended_icon_title: "工作流程已暫停",
		on_hold_icon_title: "保留中",
		has_notes_icon_title: "具有附註",
		record_icon_title: "宣告為記錄",
		compound_document_icon_title: "複合文件",
		validateTemplate_icon_title: "小組園地範本需要驗證",
		offlineTemplate_icon_title: "小組園地範本為離線",
		offlineTeamspace_icon_title: "小組園地已離線",
		pending_delete_icon_title: "小組園地處於擱置刪除狀態",
		delete_error_icon_title: "無法刪除小組園地",
		defaultTemplate_icon_title: "預設小組園地範本",
		teamspace_icon_title: "小組園地",
		teamspace_template_icon_title: "小組園地範本",
		has_bookmark_icon_title: "具有書籤",
		read_only_icon_title: "唯讀",
		no_results_were_found: "找不到結果。",
		folder_is_empty: "資料夾是空的。",
		no_checked_out_items: "您尚未移出任何項目。",
		inbasket_is_empty: "收件箱是空的。",
		worklist_is_empty: "工作清單是空的。",
		tracker_milestone_completed: "已完成",
		stepprocessor_attachments_title: "內容",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "鎖定項目",
		unlock_items: "解除鎖定項目",
		checkin_item: "移入項目",

		/* Help */
		learn_more: "進一步瞭解",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "開啟小組園地",
		repository_tab_createWorkspace: "新建小組園地",
		repository_tab_createWorkspaceTemplate: "新建小組園地範本",
		repository_tab_DefaultTemplate: "預設值",

		/* Cross repository document copy */
		documentCopyTaskDescription: "此作業會複製文件。",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "您對選取的小組園地範本不具備編輯權。",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "您確定要刪除 ${0} 小組園地嗎？<br><br>儲存庫中只有歸檔在其他資料夾的文件才會保留在儲存庫上。將會刪除只歸檔在小組園地中的任何文件。",
		teamspaceDecommissionLabel: "刪除：",
		teamspaceDecommissionDescription: "刪除小組園地會將此小組園地從伺服器中移除：指示如何處理小組園地構件。",
		teamspaceDecommissionOptions: "刪除小組園地選項",
		teamspaceDecommissionDeleteAll: "刪除所有小組園地構件",
		teamspaceDecommissionReFileAll: "重新存檔所有小組園地構件",
		teamspaceDecommissionReFileDestination: "移至：",
		teamspaceDecommissionReFileIn: "重新存檔位置",
		teamspaceDecommissionTaskName: "小組園地刪除作業",
		teamspaceDecommissionTaskDescription: "此作業會將小組園地從儲存庫中刪除。",
		teamspaceDecommissionDeletionStarted: "小組園地已排程進行刪除",
		teamspaceDecommissionDeletionConnectionFailed: "刪除小組園地的作業無法執行，因為小組園地無法連接至儲存庫。請確定儲存庫管理者的認證正確。",

		teamspace_edit_properties_notsupported: "您只能從「小組園地」視圖中編輯小組園地的內容。",

		/* teamspace offline */
		offlineTeamspace_open_msg: "小組園地已離線，並且只能由小組園地擁有者開啟",

		/* Teamspace Builder widget */
		workspace_validation_document: "文件：",
		workspace_validation_folder: "資料夾：",
		workspace_validation_ets: "下列項目範本無法在此儲存庫中使用，因此已從所選取項目範本清單中移除。",
		workspace_validation_classes: "下列類別無法在此儲存庫中使用，因此已從所選取類別清單中移除。 ",
		workspace_validation_searches: "下列搜尋無法在此儲存庫中使用，因此已從所選取搜尋清單中移除。",
		workspace_validation_docs_folders: "下列文件和資料夾無法在此儲存庫中使用，因此已從併入項目清單中移除。",
		workspace_change_template_confirmation_question: "如果您選取不同的範本，您所做的所有變更都會遺失。要繼續嗎？\n",
		workspace_delete_item_confirmation_question: "您要移除 ${0} 項目嗎？\n",
		workspace_delete_role_confirmation_question: "您要移除 ${0} 角色嗎？\n",
		workspace_delete_confirmation_question: "如果您刪除小組園地，將只會刪除小組園地儲存器。小組園地中的資料夾和文件將留在儲存庫中，您可以執行搜尋找到它們。若要刪除小組園地的內容，請先刪除小組園地中的項目，然後刪除小組園地。<br><br>您要刪除 ${0} 小組園地嗎？",
		workspacebuilder_instance_template_name_header: "小組園地範本名稱",
		workspacebuilder_instance_template_description_header: "說明",

		workspacebuilder_template_tooltip_name: "範本名稱不能包含下列任何字元：\\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "小組園地名稱不能包含下列任何字元：\\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "請提供說明，讓使用者能夠從範本清單中做出正確選擇。舉例來說，您可以包含範本的預定使用者或範本使用的相關資訊。",
		workspacebuilder_instance_tooltip_description: "請提供說明，讓使用者能夠區別此小組園地與其他小組園地。",

		workspacebuilder_template_edit_properties_pane: "編輯小組園地範本",
		workspacebuilder_instance_properties_pane: "定義小組園地",
		workspacebuilder_template_properties_pane: "定義小組園地範本",

		workspacebuilder_instance_security_pane: "設定小組園地安全",
		workspacebuilder_template_security_pane: "設定範本安全",

		workspacebuilder_layout_pane: "選取佈置",
		workspacebuilder_search_templates_pane: "選取搜尋",
		workspacebuilder_document_folders_pane: "包括資料夾和文件",
		workspacebuilder_doctypes_entryTemplates_pane: "選取類別或項目範本",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "選取類別",
		workspacebuilder_security: "小組園地安全",

		workspacebuilder_roles_pane: "選取角色",
		workspacebuilder_security: "安全",

		workspacebuilder_properties_templates: "可用的範本：",
		workspacebuilder_available_templates: "可用的搜尋：",
		workspacebuilder_selected_templates: "已選取的搜尋：",
		workspacebuilder_templates_name: "搜尋名稱",

		workspacebuilder_available_entryTemplates: "可用的項目範本：",
		workspacebuilder_selected_entryTemplates: "已選取的項目範本：",

		workspacebuilder_item_classes: "可用的類別：",
		workspacebuilder_item_classes_selected: "已選取的類別：",
		workspacebuilder_properties_select_template: "選取要用於此小組園地的範本。",
		workspacebuilder_template_properties: "定義小組園地範本",
		workspacebuilder_instance_properties: "定義小組園地",
		workspacebuilder_template_introText: "對於利用導覽中的選擇，從此範本建立的每一個小組園地，指定您要包括在其中的一般元件。完成時，按一下<b>完成</b>，使該範本可供其他使用者用來建立新的小組園地。",
		workspacebuilder_instance_introText: "團隊使用小組園地來共用及使用特定的文件集。請為此小組園地提供有意義的名稱和說明，讓使用者能夠區別此小組園地和其他小組園地。您可以自訂小組園地來包括其他的搜尋、類別或項目範本、文件及資料夾。",

		workspacebuilder_template_search_template_introText: "選取您要包含在從此範本建立的每一個小組園地中的預設搜尋。如果沒有選取搜尋，小組園地使用者會看到他們有權存取的所有搜尋。只要具備適當的權限，使用者就可以在小組園地中共用和新增搜尋。",
		workspacebuilder_instance_search_template_introText: "請包含可讓小組園地使用者更有效率完成作業的搜尋。如果沒有包含搜尋，小組園地使用者將會看到他們有權使用的所有搜尋。具有適當權限的使用者還可以在小組園地中新增及共用搜尋。",

		workspacebuilder_template_roles_introText: "小組園地使用者會被指派給角色。角色指定使用者能夠執行的作業。按一下每一個角色旁邊的圖示，即可查看容許的作業。請選擇適合該小組園地的角色。",
		workspacebuilder_template_roles_modify_introText: "您可以修改與此小組園地中每一個角色相關聯的權限。您應該在小組園地成員的權限變更時通知他們。",

		workspacebuilder_template_roles_header_name: "角色名稱",

		workspacebuilder_template_folders_introText: "選取要包括在從此範本建立的每一個小組園地中的預設文件和資料夾。您可以把文件新增為鏈結或副本。請使用鏈結指向您不想要有多個副本的文件，例如原則或程序。請建立使用者要修改的文件副本，例如範本及表單。",
		workspacebuilder_instance_folders_introText: "選取要包括在小組園地中的預設文件和資料夾。您可以把文件新增為鏈結或副本。請使用鏈結指向您不想要有多個副本的文件，例如原則或程序。請建立使用者要修改的文件副本，例如範本及表單。",

		workspacebuilder_template_roles_introText: "指定將納入由此範本建立之每個小組園地的角色。您也可以建立新角色，以便在建立其他小組園地範本時使用。",
		workspacebuilder_instance_users_introText: "在小組園地中，每一位使用者會被指派給一個以上的角色，這些角色指定使用者可完成的作業。請將使用者新增至小組園地，並指派角色給使用者。",

		workspacebuilder_instance_navigation_pane_title: "小組園地建置器",
		workspacebuilder_template_navigation_pane_title: "小組園地範本建置器",

		workspacebuilder_roles_roles_nopermissions: "未選取權限給 {0} 角色。",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "已選取的角色：",
		workspacebuilder_roles_available_roles: "可用的角色：",
		workspacebuilder_roles_privilege_header: "權限",
		workspacebuilder_roles_select_role: "選取角色",
		workspacebuilder_roles_select_permission: "選取許可權",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "名稱為 {0} 的角色已存在。您必須指定角色的唯一名稱。",
		workspacebuilder_roles_edit_dialog_role_name: "角色名稱：",
		workspacebuilder_roles_edit_dialog_role_description: "角色說明：",
		workspacebuilder_roles_edit_dialog_title_new: "新建角色",
		workspacebuilder_roles_edit_dialog_title_edit: "編輯角色",

		workspacebuilder_roles_privileges_header: "{0} 角色的權限：",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "文件權限：",
		workspacebuilder_roles_priv_group_folder: "資料夾權限：",
		workspacebuilder_roles_priv_group_teamspace: "小組園地權限：",
		workspacebuilder_roles_priv_group_item: "文件和資料夾權限：",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "管理權限",
		workspacebuilder_roles_plbl_modifyItemPermissions: "具有此權限的使用者可以管理小組園地中之文件和資料夾的存取權。此權限包括可讓其他使用者刪除、編輯內容、建立子資料夾等等。",

		workspacebuilder_roles_priv_deleteItems: "刪除",
		workspacebuilder_roles_plbl_deleteItems: "具有此權限的使用者可以刪除小組園地中的文件和資料夾。",

		workspacebuilder_roles_priv_createItems: "建立",
		workspacebuilder_roles_plbl_createItems: "具有此權限的使用者可以在小組園地中建立文件和資料夾。",

		workspacebuilder_roles_priv_viewItemProperties: "檢視內容",
		workspacebuilder_roles_plbl_viewItemProperties: "具有此權限的使用者可以檢視小組園地中文件和資料夾的內容，其中包括系統內容。",

		workspacebuilder_roles_priv_modifyItemProperties: "編輯內容",
		workspacebuilder_roles_plbl_modifyItemProperties: "具有此權限的使用者可以編輯小組園地中的文件和資料夾內容。",

		workspacebuilder_roles_priv_modifyFolderPermissions: "管理資料夾權限",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "具有此權限的使用者可以管理小組園地中之資料夾的存取權。此權限包括可讓其他使用者刪除資料夾、編輯資料夾內容、建立子資料夾等等。",

		workspacebuilder_roles_priv_deleteFolders: "刪除資料夾",
		workspacebuilder_roles_plbl_deleteFolders: "具有此權限的使用者可以刪除小組園地中的資料夾。",

		workspacebuilder_roles_priv_modifyFolderProperties: "編輯資料夾內容",
		workspacebuilder_roles_plbl_modifyFolderProperties: "具有此權限的使用者可以編輯小組園地中的資料夾內容。",

		workspacebuilder_roles_priv_createSubfolders: "建立子資料夾",
		workspacebuilder_roles_plbl_createSubfolders: "具有此權限的使用者可以在小組園地中建立資料夾。",

		workspacebuilder_roles_priv_fileInFolders: "新增至資料夾",
		workspacebuilder_roles_plbl_fileInFolders: "具有此權限的使用者可以新增鏈結（從小組園地中的資料夾鏈結至文件）。",

		workspacebuilder_roles_priv_viewFolderProperties: "檢視資料夾內容",
		workspacebuilder_roles_plbl_viewFolderProperties: "具有此權限的使用者可以檢視小組園地中資料夾的內容，其中包括系統內容。",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "管理文件權限",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "具有此權限的使用者可以管理小組園地中之文件的存取權。此權限包括可讓其他使用者刪除文件、編輯文件內容等等。",

		workspacebuilder_roles_priv_deleteDocuments: "刪除文件",
		workspacebuilder_roles_plbl_deleteDocuments: "具有此權限的使用者可以刪除小組園地中的文件。",

		workspacebuilder_roles_priv_promoteVersions: "升級版本",
		workspacebuilder_roles_plbl_promoteVersions: "具有此權限的使用者可以將新版本號碼指派給小組園地中的文件。",

		workspacebuilder_roles_priv_modifyContent: "編輯文件",
		workspacebuilder_roles_plbl_modifyContent: "具有此權限的使用者可以編輯小組園地中文件的內文。",

		workspacebuilder_roles_priv_modifyDocumentProperties: "編輯文件內容",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "具有此權限的使用者可以編輯小組園地中文件的內容。",

		workspacebuilder_roles_priv_viewContent: "檢視文件",
		workspacebuilder_roles_plbl_viewContent: "具有此權限的使用者可以檢視小組園地中的文件。",

		workspacebuilder_roles_priv_viewDocumentProperties: "檢視文件內容",
		workspacebuilder_roles_plbl_viewDocumentProperties: "具有此權限的使用者可以檢視小組園地中文件的內容，其中包括系統內容。",

		workspacebuilder_roles_priv_addNewSearches: "新增搜尋",
		workspacebuilder_roles_plbl_addNewSearches: "具有此權限的使用者可以將搜尋新增至小組園地。依預設，其他使用者無法使用搜尋。",

		workspacebuilder_roles_priv_createNewSearches: "建立搜尋",
		workspacebuilder_roles_plbl_createNewSearches: "擁有此權限的使用者可以建立新搜尋，但無法儲存這些搜尋。如果使用者沒有此權限，他們將無法把儲存庫的現有文件新增至小組園地中。",

		workspacebuilder_roles_priv_shareSearches: "共用搜尋",
		workspacebuilder_roles_plbl_shareSearches: "具有此權限的使用者可以將他們建立的搜尋提供給小組園地的其他使用者共用。",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "管理類別或項目範本",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "具有此權限的使用者可以在小組園地中新增及移除類別或項目範本。",

		workspacebuilder_roles_priv_addRemoveClasses: "管理類別",
		workspacebuilder_roles_plbl_addRemoveClasses: "具有此權限的使用者可以在小組園地中新增及移除類別。",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "管理小組園地使用者",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "具有此權限的使用者可以在小組園地中新增及移除使用者和群組。此外，他們還可以管理使用者獲指派哪些角色。",

		workspacebuilder_roles_priv_modifyRoles: "修改角色",
		workspacebuilder_roles_plbl_modifyRoles: "擁有此權限的擁有者可以修改小組園地的角色權限。此權限僅供擁有者使用。",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "選取使用者",
		workspacebuilder_users_add_users_and_groups_button: "新增使用者和群組...",
		workspacebuilder_users_users_or_group_header: "使用者和群組",
		workspacebuilder_users_roles_header: "角色",

		workspacebuilder_users_role_header: "角色",
		workspacebuilder_users_role_no_permissions: "此角色沒有權限",
		workspacebuilder_users_available_roles_label: "可用的角色：",
		workspacebuilder_users_selected_users_and_groups_label: "所選使用者和群組：",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "無法儲存小組園地。您必須為此小組園地指定至少一個擁有者。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "無法儲存小組園地。所有使用者都必須指派一個角色。",
		// end of select users

		workspacebuilder_search_templates: "選取搜尋",
		workspacebuilder_search_add: "新增搜尋",
		workspacebuilder_properties_workspaceName: "小組園地名稱：",
		workspacebuilder_properties_templateName: "範本名稱：",
		workspacebuilder_properties_workspaceDescription: "小組園地說明：",
		workspacebuilder_properties_templateDescription: "範本說明：",
		workspacebuilder_properties_workspaceTemplate: "已選取的範本：",
		workspacebuilder_properties_security: "共用範本對象：",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "從小組園地移動：",
		moveTeamspaceDocuments_security: "文件共用對象：",
		moveTeamspaceDocuments_security_change: "給所選項目指定自訂安全",
		moveTeamspaceDocuments_item_type_level: "無法選取「置換所選項目的安全」，因為所選項目的類別已配置成僅使用類別層次安全",
		moveTeamspaceDocuments_security_inherit: "從目的地資料夾繼承安全",
		moveTeamspaceDocuments_file_info_text: "可以將項目從一個小組園地移至另一個小組園地或資料夾。",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "您不具有將項目移至所選資料夾的適當權限。",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "您不具有從小組園地移動項目的適當權限。",
		moveTeamspaceDocuments_move_mixed_items: "您無法置換所選項目的安全。一些項目不是由小組園地進行管理的。您只能置換由小組園地管理的項目安全。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "您必須指定小組園地的名稱。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "您必須指定小組園地範本的名稱。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "小組園地名稱不能包含下列任何字元：\\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "範本名稱不能包含下列任何字元：\\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "鏈結至文件",
		workspacebuilder_folders_makeDocCopy: "複製文件",
		workspacebuilder_folders_newfolder: "新增資料夾",
		workspacebuilder_folders_local_drive: "從本端目錄",
		workspacebuilder_folders_from_repo: "從儲存庫",
		workspacebuilder_folders_add_doc: "新增文件",
		workspacebuilder_folders_grid_name: "名稱",
		workspacebuilder_folders_props: "內容",
		workspacebuilder_folders_remove: "移除",
		workspacebuilder_folders_delete: "刪除",
		workspacebuilder_folders_adddoc_local: "新增本端磁碟機的文件",
		workspacebuilder_folders_adddoc_repo: "從儲存庫新增文件",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "指定的資料夾名稱已存在。請指定不同的資料夾名稱。",

		workspacebuilder_classes_title: "選取類別或項目範本",
		workspacebuilder_classes_title_cm: "選取類別",
		workspacebuilder_classes_template_introText: "指定從此範本建立的小組園地是使用類別或項目範本，將文件新增至儲存庫。如果沒有選取類別，小組園地會看到他們有權存取的所有類別。只要具備適當的權限，使用者可以修改小組園地中的類別清單或項目範本。",
		workspacebuilder_classes_template_introText_cm: "選取使用者用來將文件新增至儲存庫的類別。如果沒有包含類別，小組園地使用者將會看到他們有權使用的所有類別。如果使用者有適當的權限，他們可以修改小組園地中的類別清單。",
		workspacebuilder_classes_instance_introText: "選取使用者用來將文件新增至儲存庫的類別或項目範本。如果沒有包含類別，小組園地使用者將會看到他們有權使用的所有類別。如果使用者有適當的權限，他們可以修改小組園地中的類別或項目範本清單。",
		workspacebuilder_classes_instance_introText_cm: "選取使用者用來將文件新增至儲存庫的類別。如果沒有包含類別，小組園地使用者將會看到他們有權使用的所有類別。如果使用者有適當的權限，他們可以修改小組園地中的類別清單。",
		workspacebuilder_classes_selection: "選取類別：",
		workspacebuilder_classes_list: "可用的類別：",
		workspacebuilder_classes_columns_default: "預設值",
		workspacebuilder_classes_columns_className: "類別名稱",
		workspacebuilder_classes_type_classes: "使用類別來新增文件",
		workspacebuilder_classes_type_classes_tooltip: "類別包含相關聯的內容，因此，可以找出文件，以便之後使用。",
		workspacebuilder_classes_type_entryTemplates: "使用項目範本來新增文件",
		workspacebuilder_classes_type_entryTemplates_tooltip: "項目範本會確保提供給每一份文件的資訊都是一致的並且使用預定值。",
		workspacebuilder_classes_type_entryTemplates_columnName: "項目範本名稱",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "說明",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "您必須至少新增一個項目範本至小組園地。",

		workspacebuilder_classes_new: "新建類別",
		workspacebuilder_classes_add: "新增類別",
		workspacebuilder_entryTemplate_add: "新增項目範本",
		workspacebuilder_add_list: "新增",
		workspacebuilder_makeDefault_list: "設為預設值",
		workspacebuilder_removeDefault_list: "移除預設值",

		workspacebuilder_roles_title: "選取角色",
		workspacebuilder_roles_title_modify: "修改角色",

		workspacebuilder_selection_moveup: "上移",
		workspacebuilder_selection_movedown: "下移",
		workspacebuilder_selection_remove: "移除",
		workspacebuilder_selection_add: "新增",
		workspacebuilder_selection_create_new_search: "新建搜尋...",
		workspacebuilder_selection_create_new_role: "新建角色...",
		workspacebuilder_selection_make_role_available: "設為可用",
		workspacebuilder_selection_make_role_available_tooltip: "將其他範本提供給選取的角色共用。您必須至少指派一項權限給要共用它的角色。",

		workspacebuilder_navigation_next: "下一步",
		workspacebuilder_navigation_finish: "完成",
		workspacebuilder_navigation_validate: "驗證",
		workspacebuilder_navigation_previous: "上一步",
		workspacebuilder_navigation_cancel: "取消",
		workspacebuilder_navigation_customize: "自訂",

		workspacebuilder_search_dialog_title: "搜尋",
		workspacebuilder_dialog_close: "關閉",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "範本可用性：",
		workspace_properties_templateState_tooltip: "使範本無法使用，以防止使用者建立使用此範本的小組園地。",
		workspace_properties_dialog_title: "範本內容",
		workspace_properties_online_radio_option_label: "設為可用",
		workspace_properties_offline_radio_option_label: "設為無法使用",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "您是否想要取消而不儲存變更？",
		workspacebuilder_cancel_confirmation_button: "是",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "凡是無效項目都會從範本移除，範本將提供使用者運用。您要驗證此小組園地範本嗎？",
		workspacebuilder_validate_confirmation_button: "是",
		workspacebuilder_validate_confirmation_title: "驗證",

		/* Entry templates builder */
		entry_templates: "項目範本管理程式",
		no_entry_templates_were_found: "沒有項目範本",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "過濾器",

		/* Roleselector widget */
		role_selector_name: "角色：",

		/* User Group picker widget */
		directory_label: "目錄：",
		scope_label: "搜尋目標：",
		name_starts_with_label: "名稱開頭為",
		name_contains_label: "名稱包含",
		display_name_contains_label: "顯示名稱包含",
		starts_with_label: "開頭為：",
		available_label: "可用：",
		available_heading: "可用",
		selected_label: "已選取：",
		selected_heading: "已選取",
		available_repositories_label: "可用的儲存庫",
		selected_repositories_label: "選取的儲存庫",
		default_repository: "預設儲存庫：",
		default_repository_placeholder: "選取儲存庫",
		default_role_placeholder: "選取角色",
		menu_label_placeholder: "選取或輸入標籤",
		default_repository_hover: "指定當使用者從此桌面登入 Web 用戶端時，依預設要選取的儲存庫。<br><br><b>重要事項：</b>在指定預設儲存庫之前，您必須先將儲存庫新增至所選取的儲存庫清單桌面。",
		default_repository_workflow_hover: "<b>謹記：</b>您只能針對配置給此桌面的儲存庫，配置應用程式空間。",
		remove_label: "移除",
		users_label: "使用者",
		groups_label: "群組",
		user_or_group_name_label: "使用者或群組名稱：",
		user_or_group_name_hover: "輸入對儲存庫來說有效的使用者或群組名稱。名稱未驗證。",
		user: "使用者",
		group: "群組",
		name: "名稱：",
		displayName: "顯示名稱",
		display_name: "顯示名稱：",
		shortName: "簡稱：",
		distinguishedName: "識別名稱：",
		search_tooltip: "搜尋",
		add_tooltip: "新增",
		add_selected_tooltip: "新增至已選取的清單",
		remove_tooltip: "移除",
		remove_selected_tooltip: "從已選取的清單中移除",
		add_to_selected_tooltip: "新增",
		remove_from_selected_tooltip: "移除",
		move_up_selected_tooltip: "上移",
		move_down_selected_tooltip: "下移",
		advanced_search_options_tooltip: "進階設定",
		move_right_selected_tooltip: "移至子功能表",
		move_left_selected_tooltip: "從子功能表移出",
		add_separator: "新增分隔字元",
		menu_item_label: "功能表項目標籤：",
		add_menu_label: "新增子功能表",
		menu_label: "子功能表標籤：",
		menu_label_info: "<b>重要事項：</b>您必須至少新增一個功能表項目至此子功能表，您才能儲存此功能表。",
		menu_dropdown_label: "下拉按鈕標籤：",
		menu_dropdown_label_info: "<b>重要事項：</b>必須至少將一個功能表項目新增至此下拉按鈕，然後才能儲存此工具列。",
		no_item_found: "找不到結果。",
		me: "我",
		anyone: "任何人",
		specific_users: "特定的使用者",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "搜尋傳回超過 {0} 個結果。請變更準則，以縮小搜尋範圍。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "搜尋結果包含已選取的項目。這些項目將不會顯示在搜尋結果中。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "傳回了超過 {0} 個結果。請使用過濾器來縮小結果範圍",

		user_already_selected: "指定的使用者已選取。請指定不同的使用者。",
		group_already_selected: "指定的群組已選取。請指定不同的群組。",
		user_cannot_select_self: "您無法新增自己。請指定不同的使用者。",

		/* Select User Group dialog */
		select_user_group_add_label: "新增",
		select_user_group_cancel_label: "取消",
		add_users_groups_label: "新增使用者和群組",
		add_user_group_label: "新增使用者和群組",
		add_users_label: "新增使用者",
		add_user_label: "新增使用者",
		add_label: "新增：",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "下列文件具有未儲存註釋變更：",
		viewer_confirm_to_proceed: "將丟失變更，要繼續嗎？",
		viewer_warn_has_changes: "將捨棄您未儲存的變更。",
		viewer_warn_is_printing: "進行中的列印可能未完成。",
		viewer_warn_confirm_exit: "要結束嗎？",
		viewer_prompt_save_changes: "下列文件具有將丟失的未儲存註釋變更：<br>${0}<br><br>要儲存變更嗎？",
		viewer_prompt_mergesplit_changes: "下列文件具有未儲存變更：<br>${0}<br><br>將丟失變更，要繼續嗎？",
		viewer_prompt_mergesplit_tab_changes: "下列文件具有未儲存變更：<br>${0}<br><br>將丟失變更，要繼續嗎？",
		viewer_new_item_name: "新建文件",
		viewer_top_frame: "頂端訊框：",
		viewer_bottom_frame: "底端訊框：",
		viewer_left_frame: "左訊框：",
		viewer_right_frame: "右訊框：",
		viewer_viewer_frame: "檢視器訊框：",
		viewer_properties_frame: "內容訊框：",
		viewer_comment_frame: "註解訊框：",
		viewer_mergesplit_on: "檢視",
		viewer_mergesplit_off: "合併及分割",
		viewer_mergesplit_context_menu_move: "移動",
		viewer_mergesplit_context_menu_rename: "重新命名",
		viewer_mergesplit_context_menu_delete: "刪除",
		//move to new window
		viewer_move_to_new_window:"移至新視窗",
		viewer_continue:"捨棄變更",
		viewer_return_to_original_window:"回到原始視窗",
		viewer_switch_window:"切換視窗",
		viewer_prompt_lost_changes:"文件 ${0} 目前已在其他視窗中開啟。該文件具有未儲存的變更。<br><br>您要切換至該視窗以儲存變更，還是捨棄變更並在此視窗中開啟該文件？",
		viewer_mergesplit_fallback_info: "您只能對同一儲存庫中的文件完成「合併及分割」動作。",
		viewer_tabbed_layout: "以標籤檢視",
		viewer_tabbed_layout_highcontrast: "標籤",
		viewer_split_vertical_layout: "從上到下分割窗格",
		viewer_split_vertical_layout_highcontrast: "從上到下",
		viewer_split_horizontal_layout: "從左到右分割窗格",
		viewer_split_horizontal_layout_highcontrast: "從左到右",
		viewer_add_vertical_layout: "新標籤在底端",
		viewer_add_vertical_layout_highcontrast: "標籤在底端",
		viewer_add_horizontal_layout: "新標籤在右側",
		viewer_add_horizontal_layout_highcontrast: "標籤在右側",
		viewer_add_horizontal_layout_rtl: "新標籤在左側",
		viewer_add_horizontal_layout_rtl_highcontrast: "標籤在左側",
		viewer_split_properties_layout: "檢視內容",
		viewer_split_comment_layout: "檢視註解",
		viewer_split_notelog_layout: "檢視附註日誌",
		viewer_window_title: "${0} 檢視器",
		viewer_next_hit: "檢視清單中的下一份文件",
		viewer_prev_hit: "檢視清單中的前一份文件",
		viewer_confrim_more_search_results: "搜尋結果已無其他可檢視的文件。您想擷取更多的搜尋結果嗎？",
		viewer_confirm_get_next_page: "結果清單已無其他可檢視的文件。您想擷取更多的搜尋結果嗎？",
		viewer_confirm_get_next_item: "結果清單還有其他可檢視的項目。您想檢視下一個項目嗎？",
		viewer_fn_annotation_tooltip: " 建立者：${0}，建立日期：${1}",
		viewer_box_note_limitation: "您只能在個別視窗中開啟並檢視「Box 附註」。",
		viewer_click_to_open_box_note: "請按一下這裡以開啟「Box 附註」。",
		viewer_box_view_expiring: "您可以檢視您的 Box 文件，但檢視時間量上限為 60 分鐘。您的現行階段作業將在 ${0} 分鐘後到期。如果要繼續處理文件，則必須立即重新載入文件。要重新載入文件嗎？",
		viewer_add_dialog_save_as_type: "另存類型：",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "移出衝突",
		viewer_checkout_conflict: "該文件已由其他使用者移出。",
		viewer_checkout_confirm: "該文件有更新版本可用。您是要繼續移出該文件，還是要重新載入具有更新版本的檢視器？如果選擇重新載入檢視器，則將丟失任何未儲存的變更。",
		viewer_checkout_continue: "繼續移出",
		viewer_checkout_reload: "重新載入",
		viewer_status_building: "正在建置文件...",
		viewer_status_adding: "正在新增文件...",
		viewer_status_checking_in: "正在移入文件...",

		/* Class Selector Widget */
		include_subclasses_label: "包括子類別",
		include_subclasses_label2: "同時在子類別中搜尋",
		include_subclasses_note: "（包含子類別）",
		available_classes_col_header: "可用的類別",
		single_class_label: "在單一類別中搜尋",
		multiple_classes_label: "在多個類別中搜尋",
		multiple_classes_hover_help: "選取此選項時，會在多個類別中搜尋。類別可以是母類別或子類別。如果您選取此選項，您只會看到所選類別的共用內容與值。",
		selected_classes_col_header: "選定類別",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;（包括子資料夾）",
		favorites_pseudo_node: "\\我的最愛\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "您必須在儲存庫中選取要在其中新增文件的資料夾。",
		no_permission_add_folder: "您沒有適當的權限可將資料夾新增至此資料夾。",
		no_permission_add_document: "您沒有適當的權限可將文件新增至此資料夾。",
		document_already_in_folder: "該文件已在此資料夾中。",
		cant_move_folder_onto_parent: "該資料夾已在此資料夾中。",
		cant_move_folder_onto_self: "您無法將資料夾移至其本身或其子資料夾。",

		/* Workflow Widgets */
		process_application_space: "程序應用程式空間",
		process_role: "程序角色",
		process_inbasket: "程序收件箱",
		process_worklist: "工作清單",
		process_step_processor: "處理工作項目",
		process_tracker: "追蹤工作項目",
		process_info_subject: "主題",
		process_info_stepname: "步驟",
		process_info_is_locked: "已鎖定",
		process_info_no_access: "不可存取",
		process_info_received_on: "接收日期",
		process_info_overdue: "逾期",
		process_info_reminder_sent: "已傳送提示",
		process_info_locked_by_user: "鎖定者",
		process_work_object_number: "工作物件號碼",
		process_deadline: "到期日：",
		process_launchedby: "啟動者：",
		process_receivedon: "接收日期：",
		process_step: "步驟：",
		process_properties: "內容",
		process_attachments: "附件",
		process_attachments_select: "選取附件",
		process_finish_button_label: "停止追蹤",
		process_tracker_history: "歷程",
		process_tracker_milestones: "里程碑",
		process_tracker_milestone: "里程碑",
		process_tracker_milestone_level: "層次",
		process_tracker_milestones_empty: "沒有里程碑可顯示。",
		process_tracker_level_selector_label: "顯示里程碑最高層次：",
		process_tracker_map_selector_label: "依對映過濾：",
		process_tracker_message: "訊息",
		process_tracker_datereached: "到達日期",
		process_tracker_stepname: "步驟",
		process_tracker_cycle: "週期",
		process_tracker_review_cycle: "檢閱循環",
		process_tracker_participant: "參與者",
		process_tracker_completed: "已完成",
		process_tracker_response: "回應",
		process_tracker_comments: "註解",
		process_tracker_delete_confirmation: "您想停止追蹤下列工作流程嗎：${0}？",
		process_tracker_history_allmaps: "所有對映",
		process_tracker_history_workflow: "工作流程",
		process_tracker_history_terminate: "終止",
		process_tracker_history_malfunction: "故障",
		process_filter_label: "過濾器",
		process_no_filter_summary: "未套用任何過濾器",
		process_filter_summary: "已套用 ${0}",
		process_filter_reset_tooltip: "如果重設，將會清除過濾器，並重新整理收件箱。",
		process_attachments_add_folder: "新增資料夾",
		process_attachments_add_doc: "新增文件",
		process_complete_button_label: "完成",
		process_save_button_label: "儲存",
		process_launch_button_label: "啟動工作流程",
		process_open_button_label: "開啟",
		process_movetoinbox_button_label: "移至收件箱",
		process_return_button_label: "返回",
		process_return_to_sender_tooltip: "將工作項目傳回至原始收件箱",
		process_move_to_inbasket_tooltip: "將工作項目移至個人收件箱",
		process_reassign_tooltip: "將工作項目重新指派給其他擁有者",
		process_reassign_button_label: "重新指派",
		process_preferences_button_label: "喜好設定",
		process_manageroles_button_label: "管理角色",
		process_manageroles_no_members: "無成員。",
		process_responses_button_label: "更多回應",
		process_morecustomaction_button_label: "更多動作",
		process_show_instructions: "檢視指示",
		process_hide_instructions: "隱藏指示",
		process_remove_attachment: "移除",
		process_close_window: "已處理工作項目。",
		process_delegate_flag: "需要現行擁有者核准工作項目，才能將它遞送到工作流程中的下一個步驟。",
		process_paticipant_voting: "需要投票核准的參與者數目：",
		process_get_next_label: "取得下一個工作項目",
		process_no_more_items: "收件箱中沒有項目可處理。",
		process_workflow_name: "工作流程名稱：",
		process_pattern_process_name: "檢閱 ${0}",
		process_instuctions: "檢閱人員指示：",
		process_pattern_deadline: "到期日：",
		process_reviewers: "檢閱人員：",
		process_approvals_required: "所需的核准者：",
		process_on_reject: "如果工作項目遭拒絕：",
		process_return_to_originator: "回到我",
		process_return_to_previous_reviewer: "回到前一個檢閱人員",
		process_additional_settings: "其他設定：",
		process_allow_reassign: "容許檢閱人員重新指派此檢閱",
		process_complete_notification: "當檢閱完成時，請通知我",
		process_workflow_name_hover_help: "您指定的工作項目名稱應方便檢閱人員輕易分辨此工作項目與他們收件箱中的其他工作項目。",
		process_approvals_required_hover_help: "如果多人同時檢閱工作項目，您可以指定必須有多少人核准工作項目才算完成。",
		process_approval_options: "核准選項",
		process_all: "全部",
		process_at_least: "至少",
		process_at_least_by_count: "至少 ${0} 個檢閱人員",
		process_at_least_by_percentage: "至少 ${0}% 的檢閱人員",
		process_comments: "註解：",
		process_review_step_comments_hover_help: "如果您拒絕工作項目，您必須提供為何拒絕的相關資訊。此資訊有助於工作項目的發送者或前一個檢閱人員因應您的疑慮。",
		process_rework_step_comments_hover_help: "您必須提供您如何因應評論的相關資訊。如果您不同意評論，請提供您的決策理由。",
		process_rejection_reason: "拒絕的理由：",
		process_summary: "摘要",
		process_sequential_review: "循序檢閱",
		process_sequential_review_description: "每一個檢閱人員依序檢閱工作項目。",
		process_parallel_review: "平行檢閱",
		process_parallel_review_description: "所有檢閱人員同時檢閱工作項目。",
		process_parallel_approvals_required_error: "所要求的核准數目太高。只能指定 ${0} 位檢閱人員。",
		process_parallel_invalid_required_approvals_count: "值無效。值必須是 ${0}。",
		process_subject_prompt: "輸入主題",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "工作項目：",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "檢視內容",
		view_permissions_level: "檢視許可權",
		view_content_level: "檢視文件",
		link_level: "鏈結",
		modify_properties_level: "編輯內容",
		modify_content_level: "編輯文件",
		minor_version_level: "編輯次要版本",
		major_version_level: "編輯主要版本",
		create_instance_level: "建立實例",
		delete_document_level: "刪除文件",
		delete_item_level: "刪除項目",
		modify_document_permissions_level: "管理權限",
		modify_folder_permissions_level: "管理權限",
		modify_owner_level: "修改擁有者",
		delete_folder_level: "刪除資料夾",
		file_in_folder_level: "新增至資料夾",
		create_subfolder_level: "建立子資料夾",
		link_item_level: "標註文件，新增至資料夾", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>僅限文件：向文件新增註釋，或者從文件中移除註釋</li><li>僅限資料夾：向資料夾新增項目，或者從資料夾中移除項目</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "刪除",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "擁有者",
		/* previously \"Full control\" */
		edit_privilege: "作者",
		/* previously \"Edit\" */
		read_only_privilege: "讀者",
		/* previously \"Read only\" */
		no_access_privilege: "不可存取",
		share_with_label: "共用對象：",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "僅限我",
		public_label: "每個人",
		members_label: "特定的使用者與群組",
		select_members_label: "選取...",
		select_user_group_label: "選取使用者...",
		select_users_groups_label: "選取使用者和群組...",
		select_user_label: "選取使用者...",
		propagation_label: "傳播：",
		access_label: "權限：",
		add_permission_add_label: "新增",
		security_policy_label: "安全原則：",
		includes_inherited_access: "包括已繼承的存取權",
		customize_access_for_label: "自訂存取權：",
		customize: "自訂",
		direct: "此項目",
		singleLevelInheritance: "一個層次",
		infiniteLevelInheritance: "所有層次",
		inherited: "繼承",
		direct_hover_help: "安全設定套用至所選取項目",
		singleLevelInheritance_hover_help: "這些許可權套用至此項目以及已配置成從此項目繼承安全的那些原生子項。",
		infiniteLevelInheritance_hover_help: "這些許可權套用至此項目以及已配置成從此項目繼承安全的所有後代。",
		inherited_hover_help: "這些許可權繼承自母項。",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0} 的這些許可權套用至此項目以及已配置成從此項目繼承安全的那些原生子項。",
		infiniteLevelInheritance_member_hover_help: "${0} 的這些許可權套用至此項目以及已配置成從此項目繼承安全的所有後代。",
		inherited_member_hover_help: "${0} 的這些許可權繼承自母項。",
		partial_hover_help: "某位使用者已變更項目安全設定",
		allow: "容許",
		deny: "拒絕",
		basic: "基本",
		advanced: "進階",
		permission_type: "設定存取權：",
		share_with_hover_help: "此項目目前與下列使用者和群組共用：",
		direct_security_policy_hover_help: "這項安全原則的設定容許您變更此項目的安全。",
		security_policy_hover_help: "此項目的安全是唯讀的，因為這項安全原則的設定會阻止您變更此項目的安全。",
		security_remove: "無權限",
		pseudo_group_label: "別名帳戶",
		marking_hover_help: "此項目的安全由標示組控制，它會影響該項目的安全。",
		note_label: "重要事項：",
		marking_text: "此項目是標示為 ${0}。此項目可能有其他的安全限制。",
		authenticated_users: "已鑑別使用者",
		realm_users: "${0} 個使用者",
		denyAll: "全部拒絕",
		allowAll: "全部容許",
		remove_direct_text: "儲存變更時，將從項目中移除此成員的許可權。",
		remove_single_inheritance_text: "儲存變更時，將從項目以及已配置成從該項目繼承安全的那些原生子項<br>中移除此成員的許可權。<p>要繼續嗎？",
		remove_infinite_inheritance_text: "儲存變更時，將從項目以及已配置成從該項目繼承安全的所有後代<br>中移除此成員的許可權。<p>要繼續嗎？",
		remove_inheritance_text: "儲存變更時，將從項目以及已配置成從該項目繼承安全的所有後代<br>中移除此成員的許可權。將只保留透過此項目<br>繼承的那些許可權。<p>要繼續嗎？",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "移除 ${0} 的這些許可權",

		security_proxy_text: "此項目的安全是唯讀的。",
		security_proxy_declared_text: "此項目的安全為唯讀，因為這是由安全 Proxy 所定義。",
		security_proxy_hover_help: "此項目的安全是由設定在儲存庫中另一個物件上的安全來控制。",
		add_permissions_label: "新增權限",
		permission_propagation_direct: "僅此資料夾",
		permission_propagation_onelevel: "此資料夾和下面的一個層級",
		permission_propagation_alllevels: "此資料夾和下面的所有層級",
		document_propagation_label: "設定存取權：",
		document_propagation_FOLDER: "資料夾",
		document_propagation_DOCUMENT: "文件",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "鑑別來源：",

		/* Versions Widget */
		object_versions_selector_label: "版本：",
		object_versions_label: "版本",
		object_type_document_label: "文件：",

		/* Folders Filed In */
		properties_folders_filed_in_label: "資料夾存檔位置",
		folders_filed_in_folder_col_hdr: "資料夾",
		folders_filed_in_path_col_hdr: "路徑",
		folders_filed_in_containment_name_col_hdr: "包含項目名稱",
		folders_filed_in_creator_col_hdr: "建立者",
		folders_filed_in_date_created_col_hdr: "建立日期",

		/* Parent Documents */
		properties_parent_documents_label: "母項文件",

		/* Select object dialog */
		select_object_title: "選取項目",
		select_object_breadCrumb_version_prefix: "版本：",
		show_versions_label: "顯示版本",
		use_current_version_label: "使用現行版本",
		use_released_version_label: "使用已發行的版本",

		/* Select content class dialog */
		select_class: "選取類別",
		/* Select Search dialog */
		select_search: "選取搜尋",

		/* Show hyperlink dialog */
		show_hyperlink_title: "檢視鏈結",
		show_hyperlink_intro: "您可以複製鏈結並貼到電子郵件、會談及網頁中。如果此項目有多個版本，請指定您要鏈結的版本。",
		show_hyperlink_intro_no_version_select: "您可以複製鏈結並貼到電子郵件、會談及網頁中。",
		show_text_label: "版本：",
		released_button_label: "已發行",
		current_button_label: "現行",
		select_button_label: "特定的版本",
		show_hyperlink_no_released_version_msg: "不存在此文件的已發行版本。",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "啟動工作流程",
		edit_workflow_title: "工作項目內容",
		start_workflow_intro: "啟動工作流程來處理選取的項目。如果您想要將工作項目指派給特定的使用者，請指定擁有者。",
		edit_workflow_intro: "您可以編輯所選取的工作項目的內容。如果您想要將工作項目重新指派給另一位使用者，請指定擁有者。",
		workflow_field_label: "工作流程：",
		priority_field_label: "優先順序：",
		owner_field_label: "擁有者：",
		start_button_label: "開始",
		save_button_label: "儲存",
		owner_value_hint: "輸入一個最多 32 個字元的英數字串。此字串只能包含空格或下列字元：a-z、A-Z、0-9 和 ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "內容元素",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "值無效。此值只能包含空格或下列字元：a-z、A-Z、0-9 和 ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "輸入 1 到 32000 的值，以指出工作項目的重要性。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "值無效。優先順序必須是從 1 到 32000 的值。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "工作流程名稱不存在。",

		/* Suspend work items in workflow */
		suspend_workitems_title: "從工作流程中暫停",
		suspend_workitems_intro: "當您從工作流程中暫停某工作項目時，便無法處理該工作項目，直到它回復為止。",
		suspend_workitems_options_label: "暫停已選取的工作項目：",
		suspend_until_resume_label: "直到手動回復",
		suspend_until_date_label: "截止",
		suspend_for_duration_label: "持續時間",
		suspend_for_duration_hours: "小時數",
		suspend_for_duration_days: "天數",
		suspend_for_duration_weeks: "週",
		suspend_for_duration_months: "月數",
		suspend_for_duration_years: "年數",
		suspend_button_label: "暫停",
		suspend_duration_value_hint: "輸入 1 - 99 範圍內的值來代表期間。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "值無效。值必須在 1 - 99 的範圍內。",

		/* Remove from workflow */
		remove_workflow_title: "從工作流程中移除",
		remove_workflow_confirmation: "您要從工作流程中移除所選項目嗎？<br>已選取 ${0} 個項目。",
		remove_workflow_button_label: "移除",

		/* Unfile dialog */
		unfile_dialog_title: "從資料夾中移除",
		unfile_dialog_remove_from_folder_label: "移除自：",
		unfile_dialog_info_text: "您可以從資料夾移除項目。不過，從所有資料夾移除項目並不會從儲存庫移除該項目。您仍然可以透過執行搜尋來擷取該項目。在此清單中，僅顯示您具有檢視專用權的資料夾。",
		unfile_dialog_select_all: "全選",
		unfile_dialog_deselect_all: "全部清除",
		unfile_dialog_remove_button_label: "移除",
		unfile_dialog_select_folder_col_hdr: "選擇資料夾",
		unfile_dialog_folder_col_hdr: "資料夾",
		unfile_dialog_path_col_hdr: "路徑",
		unfile_dialog_not_filed_msg: "此項目不在任何資料夾中。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "您不具有從此項目所在的任何資料夾中移除此項目的適當權限。",
		unfile_dialog_folder_not_selectable_tooltip: "您不具有從此資料夾中移除此項目的適當權限。",
		unfile_multi_prompt: "您要從 ${0} 資料夾中移除所選項目嗎？",
		unfile_large_number_items_confirmation_question: "您選取了 ${0} 個項目來從 ${1} 資料夾中移除。<br/>從資料夾移除大量項目可能需要很長的時間。<br/>要繼續嗎？",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "開啟",
		move_to_folder_title: "移至資料夾",
		move_to_folder_button_caption: "移動",
		move_to_folder_label: "移至：",
		add_to_folder_title: "新增至資料夾",
		add_to_folder_button_caption: "新增",
		add_to_folder_label: "新增至：",
		copy_to_folder_title: "複製到資料夾",
		copy_to_folder_button_caption: "複製",
		copy_to_folder_label: "複製到：",
		copy_to_folder_delete_label: "在複製完成之後，從 Box 中刪除所選取的項目。",
		move_from_folder_label: "移自：",
		move_file_info_text: "您可以將項目從一個資料夾移至另一個資料夾。",
		move_folder_info_text: "您可以將資料夾從一個上層資料夾移至另一個上層資料夾。",
		add_doc_to_folder_info_text: "您可以將項目新增至一個以上的資料夾。如果項目已在資料夾中，它會留在該資料夾內，並新增至您指定的任何其他資料夾。",
		copy_doc_to_folder_info_text: "您可以將項目複製到資料夾。",
		box_copy: "Box 複製",
		box_copy__button_caption: "複製",
		box_copy_to_info_text: "從 Box 中選取要將所選項目複製到的儲存庫和資料夾。",
		box_copy_from_info_text: "從 Box 中選取要將所選項目複製到的儲存庫和資料夾。",
		box_copy_version_info_text: "若要新增新文件，請選取儲存庫與資料夾。若要移入新版本，請選取儲存庫與文件。",
		admin_box_copy: "Box 複製",
		admin_box_copy_hover: "此選項容許使用者將文件複製到 Box。",

		no_permission_to_copy_version_msg: "您無法從 Box 中將文件作為所選取文件的新版本進行複製。您沒有適當的權限可編輯所選取的文件，或者所選取的文件已由其他使用者移出。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "您不具有從此項目所在的任何資料夾中移除此項目的適當權限。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "您不具有從此資料夾中移除此項目的適當權限。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "因為此項目未存檔在任何資料夾中，所以無法移動此項目。請選擇另一個項目。",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "啟動工作流程",
		subscriptions_dialog_available_items_label: "可用的項目：",
		subscriptions_dialog_info_text: "指定要啟動的工作流程。",
		subscriptions_dialog_select_button_label: "確定",
		subscriptions_dialog_name_col_hdr: "名稱",
		subscriptions_dialog_desc_col_hdr: "說明",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "管理角色",
		manageroles_dialog_info_text: "您可以針對與此程序應用程式空間相關聯的每一個角色，修改其使用者清單。",
		manageroles_dialog_members_label: "成員",
		manageroles_dialog_roles_label: "角色",
		manageroles_dialog_add_button_label: "新增使用者和群組",
		manageroles_dialog_remove_button_label: "移除",
		manageroles_dialog_save_button_label: "儲存",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "沒有與此項目相關聯的工作流程。",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "工作流程喜好設定",
		workflow_pref_dialog_info_text: "指定您想收到其相關電子郵件通知的工作流程事件。您也可以啟用此選項，將您的工作遞送給另一個人員，作法是選取一個使用者，以便將工作委派給他。",

		workflow_pref_general: "一般",
		workflow_pref_email_address: "電子郵件位址",
		workflow_pref_email_address_hover: "指定用來接收工作流程通知的電子郵件位址。",
		workflow_pref_preferred_locale: "語言",
		workflow_pref_preferred_locale_hover: "指定電子郵件通知的顯示語言。",

		workflow_pref_work_item_notice: "工作項目通知",
		workflow_pref_step_new_assignment: "指派新的工作項目給我",
		workflow_pref_step_new_assignment_hover: "在我收到新的工作項目時通知我。",
		workflow_pref_step_expired_deadline: "工作項目截止時間已過",
		workflow_pref_step_expired_deadline_hover: "在我錯過工作項目截止時間時通知我。",
		workflow_pref_step_reminders: "接近工作項目截止時間",
		workflow_pref_step_reminders_hover: "在工作項目接近截止時間時，就該工作項目提醒我。",

		workflow_pref_originator_notice: "發送端通知",
		workflow_pref_milestone_reached: "已抵達里程碑",
		workflow_pref_milestone_reached_hover: "在已抵達我所啟動的工作流程上的里程碑時通知我。",

		workflow_pref_tracker_notice: "工作流程追蹤器通知",
		workflow_pref_tracker_new_assignment: "指派新的追蹤器項目給我",
		workflow_pref_tracker_new_assignment_hover: "當啟動我正在追蹤的工作流程時通知我",
		workflow_pref_tracker_deadline_reminders: "接近工作流程截止時間",
		workflow_pref_tracker_deadline_reminders_hover: "在工作流程接近其截止時間時，就該工作項目提醒我。",
		workflow_pref_tracker_deadline_expired: "工作流程截止時間已過",
		workflow_pref_tracker_deadline_expired_hover: "當工作流程截止時間已過時通知我。",
		workflow_pref_tracker_exception: "發生工作流程錯誤",
		workflow_pref_tracker_exception_hover: "當發生工作流程異常狀況或錯誤時通知我。",
		workflow_pref_tracker_expired_deadline: "步驟截止時間已過",
		workflow_pref_tracker_expired_deadline_hover: "當已過了我正在追蹤之工作流程上的步驟截止時間時，請通知我。",
		workflow_pref_tracker_milestone_reached: "已抵達里程碑",
		workflow_pref_tracker_milestone_reached_hover: "在已抵達我正在追蹤的工作流程上的里程碑時通知我。",

		workflow_pref_out_notice: "不在辦公室",
		workflow_pref_proxy_user: "將工作委派給",
		workflow_pref_proxy_user_hover: "使用此選項時，會自動將您的工作遞送給另一個使用者，例如，當您離開辦公室或休假期間。",
		workflow_pref_workflow: "工作流程",
		workflow_pref_on: "在",
		workflow_pref_off: "關閉",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "啟動工作流程",
		transfered_workflows_dialog_info_text: "選取要啟動的工作流程。",
		transfered_workflows_dialog_available_items_label: "可用的項目：",
		transfered_workflows_dialog_select_button_label: "啟動",
		transfered_workflows_dialog_name_col_hdr: "名稱",
		transfered_workflows_dialog_no_item_found: "找不到已傳送的工作流程。",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "傳送工作流程",
		transfer_workflow_dialog_info_text: "選取要傳送至工作流程系統的工作流程。",
		transfer_workflow_dialog_use: "使用此工作流程名稱",
		transfer_workflow_dialog_use_another: "使用其他工作流程名稱",
		transfer_workflow_dialog_in_use: "工作流程名稱為：",
		transfer_workflow_dialog_transfer_button_label: "傳送",
		transfer_workflow_dialog_no_items_found: "找不到已傳送的工作流程。",
		transfer_workflow_dialog_use_hover: "指定工作流程定義中的現行工作流程名稱。",
		transfer_workflow_dialog_another_hover: "指定其他工作流程名稱，或者重複使用現有的已傳送工作流程名稱。",

		/*Search In control*/
		search_in_title: "搜尋範圍：",
		search_in_teamspaces: "小組園地",
		search_in_repositories: "儲存庫",
		search_in_thisteamspaces: "此小組園地",

		ajaxViewer_save: "儲存註釋",
		ajaxViewer_print: "預覽列印",
		ajaxViewer_firstPage: "首頁",
		ajaxViewer_previousPage: "上一頁",
		ajaxViewer_nextPage: "下一頁",
		ajaxViewer_lastPage: "末頁",
		ajaxViewer_unknownPageCount: "? 之 1",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0}/${1}",
		ajaxViewer_zoomOut: "縮小",
		ajaxViewer_zoomIn: "放大",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "符合頁寬",
		ajaxViewer_fitHeight: "符合頁高",
		ajaxViewer_fitPage: "符合頁面",
		ajaxViewer_rotate270: "旋轉 270 度",
		ajaxViewer_rotate90: "旋轉 90 度",
		ajaxViewer_rotate180: "旋轉 180 度",
		ajaxViewer_darken: "變暗",
		ajaxViewer_lighten: "變亮",
		ajaxViewer_lessContrast: "對比較低",
		ajaxViewer_moreContrast: "對比較高",
		ajaxViewer_invert: "反轉",
		ajaxViewer_createHighlight: "強調顯示",
		ajaxViewer_createNote: "註釋",
		ajaxViewer_editAnnotation: "編輯註釋內容",
		ajaxViewer_deleteAnnotation: "刪除註釋",
		ajaxViewer_editAnnotationTitle: "編輯註釋內容",
		printableView_print: "列印",
		printableView_close: "關閉",

		search_results_dropdown_button: "顯示結果",
		search_results_columns_label: "搜尋結果的顯示內容",
		search_results_columns_description: "選取您想顯示在搜尋結果中的內容。",
		search_results_sortby_label: "排序方式：",
		search_results_order_label: "排序：",
		search_results_accending_label: "升冪",
		search_results_descending_label: "降冪",
		search_results_available_properties: "可用",
		search_results_selected_properties: "已選取",
		search_rank_property: "評等（限文字搜尋）",
		search_name_attribute: "名稱 (${0})",
		search_results_summary_enabled_label: "啟用內容摘要（僅限於文字搜尋）",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "搜尋",
		manage_teamspace_classes_tab_title: "類別",
		manage_teamspace_entry_templates_tab_title: "項目範本",
		manage_teamspace_team_tab_title: "小組",
		manage_teamspace_roles_tab_title: "角色",
		manage_teamspace_dialog_title: "修改小組園地",
		manage_teamspace_button_label: "修改小組園地",
		manage_teamspace_team_pane_heading: "選取團隊",
		manage_teamspace_classes_pane_heading: "選取類別",
		manage_teamspace_entry_templates_pane_heading: "選擇項目範本",
		manage_teamspace_no_rights_message: "您不具有修改此小組園地的適當權限。",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "小組園地內容",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "指定當使用者在小組園地中瀏覽時，內容清單中的文件和資料夾所要顯示的內容。您也可以指定顯示內容的順序。",
		teamspace_props_sel_cols_use_default_label: "使用此儲存庫的<b>瀏覽</b>設定",
		teamspace_props_sel_cols_use_default_tooltip: "在管理工具中，使用「瀏覽」頁面上針對此儲存庫所指定的設定。",
		teamspace_props_general_tab_label: "一般",
		teamspace_props_column_props_tab_label: "顯示的內容",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "選擇要匯入的檔案",
		teamspace_import_template_instruction: "您可以選取要匯入的小組園地範本匯出檔。",
		teamspace_import_template_button_label: "匯入",
		teamspace_import_template_dialog_label: "匯入小組園地範本",

		/* Annotation Dialog */
		annotationDlg_title: "註釋",
		annotationDlg_description: "所選文件含有下列註釋：",
		annotationDlg_msg_noAnnotations: "沒有註釋存在。請按一下「新增」來建立註釋。",
		annotationDlg_pageLabel: "第 ${pageNum} 頁",
		annotationDlg_accLabel: "存取類別：${accType}",
		annotationDlg_accLabel_public: "公用",
		annotationDlg_accLabel_private: "專用",
		annotationDlg_accLabel_privateGroup: "專用(${groupName})",
		annotationDlg_copiable: "可複製到其他伺服器",
		annotationDlg_cannotCopy: "無法複製到其他伺服器",
		annotationDlg_addButtonLabel: "新增",

		/* Share Dialog */
		is_shared: "已共用",
		is_share_pending: "共用擱置中",
		share_title: "Box 共用",
		share_instructions_new: "傳送包括共用檔案之鏈結的電子郵件。具有鏈結的任何人都可以存取該檔案。",
		share_instructions_existing: "傳送包括共用檔案之鏈結的電子郵件。具有鏈結的任何人都可以存取該檔案。其他人可能具有該鏈結，因為某人已共用此檔案。",
		share_instructions_another_version_shared: "傳送包括共用檔案之鏈結的電子郵件。具有鏈結的任何人都可以存取該檔案。其他人可能具有該鏈結，因為某人已共用此檔案的其他版本。",
		share_buttonLabel_share: "共用",
		share_email_addresses: "傳送至：",
		share_email_addresses_hover: "共用完成時，會將鏈結傳送至這些電子郵件位址。如果您不輸入任何內容，則會將鏈結傳送至您自己的電子郵件位址。",
		share_email_addresses_reshare_hover: "共用完成時，會將鏈結傳送至這些電子郵件位址。如果您不輸入任何內容，則不會傳送任何電子郵件。",
		share_password: "設定密碼：",
		share_password_placeholder: "選用",
		share_comments: "訊息：",
		share_comments_default: "我想在 Box 上與您共用我的檔案。",
		share_myEmail: "傳送自：",
		share_expiration: "設定鏈結有效期限：",
		share_expire: "存取權到期：",
		share_expire_none: "永不到期",
		share_allowDownload: "容許下載",
		share_add: "新增",
		share_advanced_instructions: "下載、有效期限和密碼設定適用於 Box 中的共用檔案。",
		share_advanced_existing_instructions: "下載、有效期限和密碼設定適用於 Box 中的共用檔案。",
		share_options_edit_warning: "重要事項：對這些設定的任何變更會影響具有鏈結的任何人，包括已具有該鏈結的人員。",
		share_link: "鏈結：",
		share_email_addresses_placeholder: "電子郵件位址",
		share_email_address_placeholder: "電子郵件位址",
		share_email_address_invalid: "請輸入有效的電子郵件位址。",
		share_cannot_share_with_self: "您無法與自己共用檔案。請指定不同的使用者。",
		share_selected_version_with_minor_warning_hover: "該文件的 ${0} 版已共用。您選取了 ${1} 版。<br><br><b>警告</b>：如果您共用 ${1} 版，沒有其他人可以共用 ${2} 版，除非您刪除 ${1} 版的共用。",
		share_selected_version_hover: "該文件的 ${0} 版已共用。您選取了 ${1} 版。",
		share_selected_version_message: "重要事項：該文件的 ${0} 版已共用。您選取了 ${1} 版。",
		share_different_version_message: "重要事項：您已選取 ${1} 版，而文件的 ${0} 版已共用。在先刪除共用之前，無法共用 ${1} 版，但您可以改為共用 ${0} 版的鏈結。 ",
		share_version_message: "重要事項：該文件的 ${0} 版已共用。選取要共用的版本。",
		share_version_new: "共用 ${0} 版",
		share_version_new_p8_hover: "透過共用此文件，可以建立僅指向所選版本之特定版本的鏈結。<br><br>在文件已共用時：<ul><li>您可以共用更新版本，鏈結也會重新導向至更新版本。</li><li>在先刪除共用之前，無法共用較早版本。</li></ul>",
		share_version_new_cm_hover: "透過共用此文件，可以建立僅指向所選版本之特定版本的鏈結。<br><br>在文件已共用時：<ul><li>您可以共用更新版本，鏈結也會重新導向至更新版本。</li><li>無法共用較早版本。</li></ul>",
		share_version_update: "共用 ${0} 版（更新共同選用項目）。",
		share_version_update_p8_hover: "透過共用此文件，可以維護僅指向特定版本的鏈結。<br><br>在文件已共用時：<ul><li>您可以共用更新版本，鏈結也會重新導向至更新版本。</li><li>在先刪除共用之前，無法共用較早版本。</li></ul>",
		share_version_update_cm_hover: "透過共用此文件，可以維護僅指向特定版本的鏈結。<br><br>在文件已共用時：<ul><li>您可以共用更新版本，鏈結也會重新導向至更新版本。</li><li>無法共用較早版本。</li></ul>",
		share_version_change_to_current: "共用 ${0} 版（使用所選版本更新共用）。",
		share_version_change_to_current_p8_hover: "透過共用此文件，可以更新僅指向所選取版本的鏈結。<br><br>在文件已共用時：<ul><li>您可以共用更新版本，鏈結也會重新導向至更新版本。</li><li>在先刪除共用之前，無法共用較早版本。</li></ul>",
		share_version_change_to_current_cm_hover: "透過共用此文件，可以更新僅指向所選取版本的鏈結。<br><br>在文件已共用時：<ul><li>您可以共用更新版本，鏈結也會重新導向至更新版本。</li><li>無法共用較早版本。</li></ul>",
		share_repository: "共用檔案的儲存庫",
		share_repository_hover: "如果您看不到要使用的 Box 儲存庫，可以在「儲存庫」頁面上新增一個新的 Box 儲存庫。",
		share_options: "共用選項",
		unshare_confirm: "如果您刪除共用，所有共用鏈結都會岔斷，包括先前由其他使用者傳送的共用鏈結。要共用該文件的所有其他使用者都必須再次選取原始文件並共用它。<br><br>您確定要刪除共用嗎？",
		unshare_button: "刪除 Box 共用",
		admin_share: "Box 共用服務：",
		admin_share_hover: "容許使用者共用已啟用 Box 共用的任何儲存庫中的文件。共用文件包括將檔案複製到 Box、建立鏈結並在電子郵件中傳送鏈結。",
		admin_my_email_modifiable: "容許使用者修改「傳送自」電子郵件位址",
		admin_my_email_modifiable_hover: "依預設，對於 Box 共用，使用者的電子郵件位址是唯讀的，是從代表 Box 使用者帳戶的使用者和電子郵件位址對映取得的。<br><br>選取此選項以容許使用者在共用時編輯其電子郵件位址；不過，不會驗證電子郵件位址的有效性。",
		admin_repos_admin_user: "共用管理者：",
		admin_repos_admin_user_hover: "如果您已啟用具有 Box 共用服務的桌上型電腦並且已選取此 Box 儲存庫作為共用檔案的儲存庫，請設定共用管理者。<br><br>按一下「設定」並使用有效的 Box 管理者帳戶登入 Box。<br><br>共用管理者必須是配置為在 Box 中具有無限制儲存空間的 Box 管理者使用者。",
		admin_repos_admin_user_not_set_warning: "未針對所選儲存庫配置 Box 管理者。<br><br>Box 共用服務已停用，直到為所選儲存庫設定 Box 管理者，或者選取已配置 Box 管理者的另一個 Box 儲存庫為止。<br><br>您可以在儲存庫的「一般」頁面上的 Box 共用服務區段中設定 Box 管理者。",
		admin_share_not_configured_warning: "必須先藉由伺服器鑑別來新增並選取 Box 儲存庫，然後才能使用 Box 共用服務。",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online 配置",
		admin_office_online_server_enable: "Office Online Server：",
		admin_office_online_server_enable_hover: "指定您是否想要存取此桌面的使用者能夠使用 Office Online Server 來編輯其 Office 文件。",		
		admin_office_online_allow_collaborative_editing: "容許協同編輯",
		admin_office_online_allow_collaborative_editing_hover: "容許多個使用者處理相同文件。如果您只想讓一個使用者編輯文件，請清除此選項。",
		admin_office_online_repository_not_set_warning: "必須先在儲存庫上啟用 Office Online 服務並指定 Microsoft Office Online Server URL，才能啟用 Office Online 服務。按一下<b>儲存庫</b>，選取儲存庫，然後在 <b>Edit 整合</b>標籤上，啟用此服務。按一下<b>設定 > 一般</b>，並輸入 Microsoft Office Online Server URL。",
		admin_settings_office_online_server_enable_hover: "指定是否要使用 Office Online Server 來處理 Office 文件。",
		admin_office_online_server_url: "Microsoft Office Online Server URL",
		admin_office_online_server_url_hover: "指定其他應用程式可以用來與 Office Online Server 進行通訊的 URL。URL 的格式如下：http://server_name:port_number/hosting/discovery。",
		admin_office_online_server_Verified: "已驗證",
	    admin_office_online_server_Failed: "<b>已失敗</b>",

		admin_repcfg_office_online_service_p8_hover: "若要起始設定儲存庫以使用 Office Online Server，則可以為每個 Office 應用程式新增起始範本檔。如果未指定範本，則將使用預設範本。",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server 整合",
		admin_repcfg_office_online_service_url_not_set_warning: "必須先指定 Microsoft Office Online Server URL，才能啟用 Office Online Server。按一下「設定 > 一般」，並輸入 URL",
		admin_repcfg_office_online_word_template_name: "預設 Word 範本",
		admin_repcfg_office_online_excel_template_name: "預設 Excel 範本",
		admin_repcfg_office_online_powerpoint_template_name: "預設 PowerPoint 範本",
		admin_repcfg_office_online_blank_template_description: "這是您未新增專屬範本時使用的預設範本。",
		/* Edit Service settings */
		admin_icn_edit_title: "編輯配置",	
	    admin_icn_edit_files_cleanup_interval: "暫存檔清理間隔（天）：",
	    admin_icn_edit_files_cleanup_interval_hover: "您可以設定暫存檔保留在 ICN Edit 用戶端中的時間量。預設時間為 20 天。時間上限為 20 天。時間下限為 1 天。",
	    admin_icn_edit_service_integration: "Edit Service Integration",
	    admin_icn_edit_service_integration_intro: "Edit Service 可讓使用者輕鬆地在其電腦上安裝的原生應用程式中新增或編輯檔案。<br><br><b>重要事項：</b>如果啟用 Edit Service，則必須先儲存您的儲存庫配置，然後才能編輯預先定義的種類。",
		admin_icn_edit_service: "Edit Service：",
		admin_icn_edit_enable_hover: "若要使用 Edit Service，您必須：<ul><li>在儲存庫上啟用該服務</li><li>在您環境中的桌面上啟用該服務</li><li>在使用者工作站上安裝 IBM Content Navigator Edit 用戶端</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "啟用",
		admin_icn_edit_disable: "停用",
		admin_icn_edit_create_new_category: "新建種類",
		admin_icn_edit_delete_category: "刪除種類",
		admin_icn_edit_edit_category: "編輯種類",
		admin_icn_edit_disable_category: "停用種類",
		admin_icn_edit_enable_category: "啟用種類",
		admin_icn_edit_new_category_dialog_title: "新建種類",
		admin_icn_edit_edit_category_dialog_title:"編輯種類",
		admin_icn_edit_new_category_dialog_instructions: "文件種類可讓您將範本與 Edit Service 的特定 MIME 類型相關聯。例如，您可以將一組範本與 PDF 檔案相關聯，以便使用者可以在從 IBM Content Navigator Edit 用戶端新增或編輯檔案時套用範本。<br><br><b>重要事項：</b>您必須先儲存您的儲存庫配置，然後才能將範本新增至您建立的種類。",
		admin_icn_edit_edit_category_dialog_instructions: "您必須先儲存您的儲存庫配置，然後才能將範本新增至此種類。",
		admin_icn_edit_delete_category_dialog_instructions: "您要刪除此種類及與此種類相關聯的任何範本嗎？<br><br><b>重要事項：</b>在將變更儲存至儲存庫之前，變更將不是永久性的。",
		admin_icn_edit_category_label: "種類：",
		admin_icn_edit_category_discription_label:"說明：",
		admin_icn_edit_template_column_head:"範本名稱",
		admin_icn_edit_category_duplicate_error_message: "已存在具有此 ID 的種類。",
		admin_icn_edit_word_category_description: "此種類定義 Edit Service 中可用於 Microsoft Word 文件的範本。",
		admin_icn_edit_excel_category_description: "此種類定義 Edit Service 中可用於 Microsoft Excel 文件的範本。",
		admin_icn_edit_powerpoint_category_description: "此種類定義 Edit Service 中可用於 Microsoft PowerPoint 文件的範本。",

		icn_edit_add_template_dialog_title:"新增 ${0} 範本",
		icn_edit_add_template_only_one_file_error: "只能選取一個檔案。",
		icn_edit_add_template_file_type_error: "必須指定有效的 ${0} 範本檔。<br><br>所選文件的 MIME 類型為 ${1}。<br><br>有效的 MIME 類型：${2}。",
		icn_edit_change_template_dialog_title: "編輯 ${0} 範本",
		icn_edit_action_in_new_menu_name:"${0} 文件",
		icn_edit_action_in_new_menu_submenu_oo_name: "使用 Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "使用桌面應用程式",
		icn_edit_new_document_dialog_title: "新增 ${0} 文件",
		icn_edit_new_document_dialog_intro: "新建 ${0} 文件，並將其新增至儲存庫。系統將使用選取的編輯服務範本建立該文件。", 
		icn_edit_select_edit_service_template: "選取範本",
		icn_edit_edit_service_template: "編輯服務範本：",
		icn_edit_new_document_category_no_templates_message:"沒有此種類的範本。請與管理者聯絡以新增此種類的範本。",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "類別及角色設定",
		admin_repcfg_classes_and_roles_warning: "指定類別，以及有權建立、編輯及使用範本或有權建立用於 Office Online Service 及 Edit Service 的文件草稿的使用者或使用者群組。",
		admin_repcfg_classes_and_roles_click_warning: "請按一下這裡。",
		/* Edit Service settings END */
		share_no_my_email_error: "識別共用文件所需的電子郵件位址時發生問題。",
		share_no_my_email_error_explanation: "您已使用使用者 ID ${0} 登入，但是該使用者 ID 未對映到電子郵件位址。",
		share_no_my_email_error_userResponse: "嘗試再次登入，或透過使用另一個使用者 ID 登入。如果問題持續發生，請向系統管理者報告此錯誤。",
		share_no_my_email_error_adminResponse: "使用者 ID ${0} 未對映到電子郵件位址，並且桌上型電腦 ${1} 不容許使用者編輯 Box 共用服務的電子郵件位址。<br><br>嘗試下列其中一種解決方案：<br>確保已登錄「電子郵件對映」外掛程式。<br>確保 emailMappingPlugin.json 檔案包括使用者 ID ${0} 及使用者電子郵件位址，然後建置、配置並登錄「電子郵件對映」外掛程式。<br>如果您不想使用「電子郵件對映」外掛程式或 FileNet P8 電子郵件位址目錄，而是想要容許使用者在共用文件時輸入他們自己的電子郵件位址，則可以修改 Box 共用服務的桌上型電腦設定，以容許使用者從其他電子郵件位址傳送鏈結。",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "已共用此文件的較新版本，因此不能共用此文件的選定版本。",
		share_later_version_shared_error_explanation: "不能共用先前共用過的文件的較早版本。",
		share_later_version_shared_error_userResponse: "若要傳送指向文件較新版本的鏈結，必須先選取較新版本，然後使用「共用」動作。<br><br>若要共用文件的選定版本，必須先刪除文件較新版本的共用。",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "新訊息",
		email_from: "發件人：",
		email_to: "收件人：",
		email_cc_link: "副本",
		email_bcc_link: "副本密送",
		email_cc: "副本抄送：",
		email_bcc: "副本密送：",
		email_address_invalid: "請輸入有效的電子郵件位址。",
		email_subject: "主旨：",
		email_message: "訊息：",
		email_message_placeholder: "新增訊息",
		email_attachments: "附件：",
		email_links: "鏈結：",
		email_send: "傳送",
		email_dont_send: "不傳送",
		email_subject_reminder: "主題提示",
		email_subject_reminder_confirm: "您要傳送這一則不含主題的訊息嗎？",
		email_missing_from_error: "識別「寄件者」電子郵件位址時遇到問題，該電子郵件位址是傳送電子郵件所需要的。",
		email_missing_from_error_explanation: "您已使用使用者 ID ${0} 登入，但是該使用者 ID 未對映到電子郵件位址。",
		email_missing_from_error_userResponse: "嘗試再次登入，或透過使用另一個使用者 ID 登入。如果問題持續發生，請向系統管理者報告此錯誤。",
		email_missing_from_error_adminResponse: "使用者 ID ${0} 未對映至電子郵件位址，並且桌上型電腦 ${1} 不容許使用者編輯「寄件者」電子郵件位址。<br><br>嘗試下列其中一種解決方案：<br>確保已登錄「電子郵件對映」外掛程式。<br>確保 emailMappingPlugin.json 檔案包括使用者 ID ${0} 及使用者電子郵件位址，然後建置、配置並登錄「電子郵件對映」外掛程式。<br>如果您不想使用「電子郵件對映」外掛程式或 FileNet P8 電子郵件位址目錄，而是想要容許使用者在傳送電子郵件時輸入他們自己的電子郵件位址，則您可以修改桌上型電腦的電子郵件設定，以容許使用者修改「寄件者」電子郵件位址。",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "無法開啟文件。",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator 無法連接至 IBM Content Navigator Edit 用戶端。",
		open_edit_document_with_native_application_error_userResponse: "在工作站上安裝及啟動 IBM Content Navigator Edit 用戶端。然後嘗試重新開啟該文件。",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "無法開啟文件。",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator 無法連接至 IBM Content Navigator Edit 用戶端。",
		connect_to_the_streamline_service_error_userResponse: "在工作站上安裝及啟動 IBM Content Navigator Edit 用戶端。然後嘗試重新開啟該文件。",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "未正確地配置 IBM Content Navigator 來共用文件。",
		share_not_configured_error_explanation: "必須正確地配置 Box 共用功能，然後才能共用文件。",
		share_not_configured_error_userResponse: "請聯絡管理者並要求他們配置 Box 共用功能。",
		share_not_configured_error_adminResponse: "必須配置下列項目，然後再共用文件：<ul><li>必須在管理工具設定中啟用作業管理程式服務。</li><li>必須在儲存庫中配置作業管理程式連線 ID。</li><li>必須在儲存庫中啟用共用。</li><li>必須選取 Box 儲存庫，才能在桌面上共用。</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "未儲存新版本的內容變更",
		checkin_cors_save_attributes_error_explanation: "已建立版本，但未儲存內容變更。可能仍會移出文件。",
		checkin_cors_save_attributes_error_userResponse: "使用「內容」快速功能表項目來解除鎖定文件並更新內容。",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "未儲存新文件的內容變更",
		add_cors_save_attributes_error_explanation: "已建立文件，但未儲存內容變更。",
		add_cors_save_attributes_error_userResponse: "使用「內容」快速功能表項目來更新內容。",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "無法開啟文件。",		
		edit_document_using_edit_service_error_explanation: "無法在 Edit Service 中開啟文件。",
		edit_document_using_edit_service_error_userResponse: "請要求管理者更新 Edit Service Integration。<br><br> 如果使用者需要從 Edit Service 存取此文件，請前往儲存庫的 Edit Integration 頁面，更新 Edit Service Integration 以在類別清單中包括該類別，並進行修改以取得 Edit Service 支援。",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "無法開啟文件。",		
		edit_document_is_editing_by_oos_error_explanation: "文件正由 Office Online Service 使用。",
		edit_document_is_editing_by_oos_error_userResponse: "您必須先在 Office Online Service 中儲存並關閉文件，然後才能在 Edit Service 中進行開啟。",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "啟用「跨原點資源共用 (CORS)」上傳",

		/* Email Settings */
		admin_email_settings: "電子郵件設定：",
		admin_email_settings_hover: "指定您要讓使用者使用的電子郵件服務類型。啟用 HTML 型電子郵件服務時，您可以選擇容許使用者修改他們的「寄件者」電子郵件位址。如果要啟用 Java 型電子郵件服務，則您必須具有支援 Java 的瀏覽器。",
		admin_email_use_service: "使用 HTML 型電子郵件服務",
		admin_email_use_applet: "使用 Java 型電子郵件服務",
		admin_email_can_modify_from: "容許使用者修改「寄件者」電子郵件位址",
		admin_email_can_modify_from_hover: "依預設，無法修改「寄件者」電子郵件位址，該電子郵件位址是從代表使用者帳戶的使用者與電子郵件位址對映中取得。<br><br>選取此選項以容許使用者在傳送電子郵件時編輯其電子郵件位址；不過，不會驗證電子郵件位址的有效性。",
		admin_email_use_from_as_sender: "使用「寄件者」電子郵件位址作為電子郵件的寄件者",
		admin_email_use_from_as_sender_hover: "依預設，將在使用者的電子郵件中使用有效的「寄件者」電子郵件位址。該電子郵件位址由應用程式伺服器上的 CNMailSession 郵件階段作業進行定義。選取此選項，以指定在電子郵件中使用使用者的電子郵件位址。",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "新建註釋",
		addAnnotationDlg_labelContents: "內容：",
		addAnnotationDlg_labelAccess: "存取：",
		addAnnotationDlg_labelPublic: "公用",
		addAnnotationDlg_labelPrivate: "專用",
		addAnnotationDlg_labelPrivateGroup: "群組專用",
		addAnnotationDlg_labelGroup: "群組",
		addAnnotationDlg_labelCopiable: "此註釋可以複製到另一部伺服器。",
		addAnnotationDlg_buttonLabel_save: "儲存",

		/* Skip navigation */
		skipNavigation_title_main: "跳到主要內容",
		skipNavigation_title_menu: "跳到導覽按鈕",
		skipNavigation_label_main: "跳到主要內容",
		skipNavigation_label_menu: "跳到導覽按鈕",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "管理小組園地",
		manage_teamspace_pane_instance_hdr: "小組園地",
		manage_teamspace_pane_template_hdr: "範本",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "向前捲動",
		scroll_back: "向後捲動",

		breadcrumb_separator_open: "開啟節點",
		breadcrumb_separator_close: "關閉節點",

		/* DropDownLink */
		drop_down_link_summary: "${0}，${1}",

		/* Properties display pane */
		no_item_selected: "未選取任何項目。",

		/* eds */
		eds_url: "外部資料服務 URL：",
		eds_request_timeout: "服務要求逾時（以秒為單位）",
		eds_is_required: "EDS 不可用時，使用者無法變更內容值。",

		/* eforms */
		eform_signing_pane_welcome: "簽章表單",
		eform_signing_button_label: "簽章",
		eform_signing_pane_delete: "刪除簽章",
		eform_signing_button_label_delete: "刪除",

		xtplugin_server_label: "IBM FileNet Workplace XT 伺服器 URL",
		xtplugin_server_hover: "輸入其中部署 IBM FileNet Workplace XT 之伺服器的 URL，例如 http://localhost:8080/WorkplaceXT。",

		ecplugin_server_label: "IBM eClient 伺服器 URL",
		ecplugin_server_hover: "輸入其中部署 IBM eClient 之伺服器的 URL，例如 http://localhost:9080/eClient/s。",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "對大量項目數執行動作可能需要很長的時間。要繼續嗎？",
		large_number_actions_continue_button: "繼續",

		large_items_actions_confirmation_question: "對大量項目執行動作可能耗時很久。要繼續嗎？",

		viewer_editproperties_title: "確認",
		viewer_editproperties_title_warning: "警告",
		viewer_editproperties_save: "儲存",
		viewer_editproperties_next: "下一步",
		viewer_editproperties_reset: "重設",
		viewer_editproperties_reset_hover: "任何未儲存的資料將重設為先前儲存的值。",
		viewer_editproperties_saveandgetnext: "儲存之後接著取得下一份",
		viewer_editproperties_saveandgetnext_hover: "儲存我的變更之後，自動取得下一份文件",
		viewer_editproperties_prompt_save_changes: "您已變更下列文件的內容<br>${0}<br><br>要儲存變更嗎？",
		viewer_editproperties_prompt_discard_changes: "您已變更下列文件的內容<br>${0}<br><br>不過，一個以上內容具有無效的值，因此無法儲存變更。您可以更正無效的值，或是捨棄變更。<br>您要更正內容窗格上顯示的無效的值嗎？",
		viewer_comments_prompt_discard_changes: "您已修改註解。要儲存變更嗎？",
		viewer_notelogs_prompt_discard_changes: "您已修改附註日誌。要儲存變更嗎？",
		social_collaborated_version: "版本：${0}",
		social_link_label: "對象...",

		// social comments
		comments: "註解",
		comments_add_hint: "按 Enter 鍵可新增註解。",
		comments_hint: "輸入您的註解。",
		comments_label: "按 Enter 或 Tab 鍵以儲存您的註解。按 Esc 鍵取消。",
		comments_delete_confirmation: "您要刪除所選取的註解嗎？",
		comments_number: "註解：${0}",
		comments_save_new: "您已修改註解。您想關閉視窗而不儲存變更嗎？",

		notelogs: "附註日誌",
		notelogs_download: "下載",
		notelog_modify: "儲存變更",
		notelog_edit: "編輯附註日誌",
		notelog_create_newVersion: "建立新附註日誌版本",
		notelog_add_hint: "輸入您的註解，然後按 Enter 鍵以新增。",
		notelog_hint: "按 Shift+Enter 鍵可換行",
		notelog_add_placeholder: "按 Enter 以新增註解至附註日誌。",
		notelog_save_new: "您已修改附註日誌。您想關閉視窗而不儲存變更嗎？",

		// P8 markings related
		cannot_remove_markings: "您無權移除標示值：{0}",

		// download count
		downloadcount: "下載次數：{0}",
		downloadcount_single: "1 個下載",
		downloadcount_multiple: "{0} 個下載",
		downloadcount_none: "尚無人下載此項目",

		// recommendations
		recommendations: "讚：{0}",
		recommendations_recommend: "給此項目點讚",
		recommendations_unrecommend: "不給此項目點讚",
		recommendations_you: "您給此項目點讚",
		recommendations_you_and_another: "您和另一個人給此項目點讚",
		recommendations_you_and_others: "您和其他 {0} 個人給此項目點讚",
		recommendations_another: "1 個人給此項目點讚",
		recommendations_others: "{0} 個人給此項目點讚",
		recommendations_none: "尚無人給此項目點讚",

		// tags
		tags: "標籤：${0}",
		tags_delete: "刪除 ${0}",
		tags_none: "沒有可顯示的標籤。",
		tags_add: "新增標籤：",
		tags_hint: "按 Enter 鍵以新增標籤。",
		tags_hover_help: "指定可以用來以相同標籤搜尋文件的標籤或標籤清單。您可以使用逗點 (,)、分號 (;) 或空格來區隔標籤。",
		tags_hover_help_box: "指定可以用來以相同標籤搜尋文件的標籤或以逗點區隔的標籤清單。",
		tags_no_access: "您沒有適當的權限來新增標籤。",

		//task scheduler pane
		taskPane_tooltip: "開啟非同步作業視圖",
		taskPane_tree: "作業窗格導覽樹狀結構",
		taskPane_allTasks: "所有作業",
		taskPane_scheduledTasks: "排定的作業",
		taskPane_recurringTasks: "循環作業",
		taskPane_inProgressTasks: "進行中作業",
		taskPane_completedTasks: "已完成的作業",
		taskPane_failedTasks: "失敗的作業",
		taskPane_disabledTasks: "已停用的作業",
		taskPane_statusScheduled: "已排程",
		taskPane_statusInProgress: "進行中",
		taskPane_statusCompleted: "已完成",
		taskPane_statusFailed: "已失敗",
		taskPane_statusPaused: "已暫停",
		taskPane_noItemSelected: "未選取項目",
		taskSchedulerPane_scheduleInformation: "排程資訊",
		taskSchedulerPane_loginInformation: "登入資訊",
		taskSchedulerPane_startImmediately: "立即開始",
		taskSchedulerPane_recurrence: "循環",
		taskSchedulerPane_interval: "間隔",
		taskSchedulerPane_scheduleReport: "排程報告",
		taskSchedulerPane_nameHoverHelp: "輸入作業名稱。",
		taskSchedulerPane_descriptionHoverHelp: "輸入作業的說明。說明應可協助您區分作業。",
		taskSchedulerPane_startTimeHoverHelp: "指定您要執行作業的時間。若要立即執行作業，請選取「立即啟動」。",
		taskSchedulerPane_recurrenceHoverHelp: "您可以排程作業循環執行。",
		taskSchedulerPane_endTimeHoverHelp: "指定您要停止執行作業的時間。作業從排定開始時間執行到排定結束時間。",
		taskSchedulerPane_usernameHoverHelp: "對於循環作業，您必須輸入使用者名稱，以便讓服務在作業執行時進行鑑別。",
		taskSchedulerPane_passwordHoverHelp: "對於循環作業，您必須輸入指定使用者的密碼，以便讓服務在作業執行時進行鑑別。",
		taskSchedulerPane_notification: "通知",
		taskSchedulerPane_emailAddress: "電子郵件位址",
		taskSchedulerPane_emailAddressHoverHelp: "輸入您要接收作業狀態相關通知的電子郵件位址。",
		taskSchedulerPane_intervalHoverHelp: "指定執行循環作業的時間長度。您可以使用小時數、天數、週數或月數來設定間隔。",
		taskSchedulerPane_scheduledStartTime: "排定的開始時間",
		taskSchedulerPane_startTime: "開始時間",
		taskSchedulerPane_title: "排程",
		taskSchedulerPane_runNow: "立即執行",
		taskSchedulerPane_runOnce: "執行一次",
		taskSchedulerPane_runAtSchedule: "依照排程執行",
		taskSchedulerPane_repeats: "重複 ",
		taskSchedulerPane_repeatsEvery: "重複間隔",
		taskSchedulerPane_hourly: "每小時",
		taskSchedulerPane_daily: "每日",
		taskSchedulerPane_weekly: "每週",
		taskSchedulerPane_monthly: "每月",
		taskSchedulerPane_yearly: "每年",
		taskSchedulerPane_sunday: "六",
		taskSchedulerPane_monday: "一",
		taskSchedulerPane_tuesday: "四",
		taskSchedulerPane_wednesday: "三",
		taskSchedulerPane_thursday: "四",
		taskSchedulerPane_friday: "五",
		taskSchedulerPane_saturday: "六",
		taskSchedulerPane_starting: "開始日期",
		taskSchedulerPane_after: "晚於",
		taskSchedulerPane_ending: "結束日期",
		taskSchedulerPane_times: "時間",
		taskSchedulerPane_days: "日",
		taskSchedulerPane_hours: "一日中的小時",
		taskSchedulerPane_interval: "間隔",
		taskSchedulerPane_endingDays: "結束（天數）",
		taskSchedulerPane_never: "從未同步",
		taskSchedulerPane_categorization: "分類",
		taskSchedulerPane_scheduleTask: "排程作業",
		taskInformationPane_details: "詳細資料",
		taskInformationPane_errors: "錯誤",
		taskInformationPane_taskInstances: "作業實例",
		taskInformationPane_audits: "審核",
		taskInformationPane_results: "結果",
		asyncTasks: "非同步作業",

		//entry template pane
		search_all_entry_templates: "搜尋所有項目範本。",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "檢視整個網站",
		mobilesite: "檢視行動式網站",
		profile: "管理設定檔",
		office_template: "Office 範本：",
		select_office_template: "選取 Office 範本",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "無法使用「合併及分割」動作在檢視器中開啟所選文件。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "為 PDF 及 TIFF 文件所配置的檢視器不支援「合併及分割」動作。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "請要求管理者為 PDF 及 TIFF 文件配置一個支援「合併及分割」動作的檢視器，例如 Daeja ViewONE Virtual 檢視器。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "無法使用「合併及分割」動作在檢視器中開啟所選 PDF 文件。",
		document_builder_pdf_unsupported_viewer_error_explanation: "為 PDF 文件所配置的檢視器不支援「合併及分割」動作。",
		document_builder_pdf_unsupported_viewer_error_userResponse: "請要求管理者為 PDF 文件配置一個支援「合併及分割」動作的檢視器，例如 Daeja ViewONE Virtual 檢視器。",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "無法使用「合併及分割」動作在檢視器中開啟所選 TIFF 文件。",
		document_builder_tiff_unsupported_viewer_error_explanation: "為 TIFF 文件所配置的檢視器不支援「合併及分割」動作。",
		document_builder_tiff_unsupported_viewer_error_userResponse: "請要求管理者為 TIFF 文件配置一個支援「合併及分割」動作的檢視器，例如 Daeja ViewONE Virtual 檢視器。",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "無法使用「合併及分割」動作在檢視器中開啟所選文件。",
		document_builder_unsupported_documents_error_explanation: "「合併及分割」動作僅適用於 PDF 及 TIFF 文件。",
		document_builder_unsupported_documents_error_userResponse: "請選取支援的文件，然後再試一次。",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "無法使用「合併及分割」動作在檢視器中開啟部分所選文件。",
		document_builder_some_unsupported_documents_error_explanation: "「合併及分割」動作僅適用於從同一儲存庫開啟的 PDF 及 TIFF 文件。",
		document_builder_some_unsupported_documents_error_userResponse: "將在檢視器中開啟支援的文件。",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "移入已修改的內容時發生錯誤。",
		document_builder_checkin_failed_explanation: "「檢視器」在移入已修改的內容時收到錯誤回應。",
		document_builder_checkin_failed_userResponse: "請要求系統管理者檢閱 Web 應用程式伺服器日誌檔。",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "無法開啟文件。",
		no_viewer_to_view_error_explanation: "系統管理者已為此文件封鎖視圖。如果您需要存取此文件，可以進行下載。",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "無法建置內容。",
		document_build_failed_userResponse: "請要求系統管理者檢閱檢視器的日誌檔。",
		document_build_failed_number: 3007,

		document_builder_open_failed: "無法在「合併及分割」模式下開啟文件。",
		document_builder_open_failed_userResponse: "請要求系統管理者檢閱檢視器的日誌檔。",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "系統無法切換至「合併及分割」模式。",
		document_builder_switch_failed_userResponse: "請要求系統管理者檢閱檢視器的日誌檔。",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "文件",
		print_service_page_setup_tab_title: "頁面設定",
		print_service_OD_print_tab_title: "印表機選項",
		print_service_status_merging: "正在合併文件...",
		print_service_status_converting: "正在轉換文件...",
		print_service_status_formatting: "正在格式化文件以進行列印...",
		admin_print_service_maximum_number_to_print: "列印容許的文件數目上限：",
		admin_print_service_maximum_size_to_print: "列印容許的資料數量上限 (MB)：",
		admin_print_service_maximum_number_to_print_hover_help: "指定使用者一次可以列印的文件數目上限。預設上限為 50。如果您不想要按文件數目限制列印，請將此限制設為 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>限制：</b>此設定在 IBM Content Manager OnDemand 上不受支援。<br/><br/>指定可利用 IBM Daeja ViewONE 列印服務列印的資料數量上限。<br /><br />每一個文件選取的大小總計不能超出此數量。<br/><br/>預設限制是 200 MB。設定高於 200 MB 的限制可能會影響系統效能。如果您不想要按文件大小限制列印，請將此限制設為 0",
		// error printing
		print_service_error_printing: "列印期間發生錯誤。",
		print_service_error_printing_userResponse: "請要求系統管理者檢閱列印服務日誌檔。",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "選取的文件太大而無法列印",
		print_service_max_content_error_explanation: "選取的文件超出資料的 ${0} MB 限制。",
		print_service_max_content_error_userResponse: "選取較少文件或選取較小文件，並再次列印。您也可以聯絡系統管理者，以增加您一次可從此桌面列印的項目大小總計上限。",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "無法列印項目。",
		print_service_max_number_selected_error_explanation: "您一次最多可列印 ${0} 個項目。您正在嘗試列印 ${1} 個項目。",
		print_service_max_number_selected_error_userResponse: "請選取比較少的項目，然後嘗試重新列印項目。您也可以聯絡系統管理者，以增加您一次可從此桌面列印的項目數上限。",
		print_service_max_number_selected_error_0: "項目數上限",
		print_service_max_number_selected_error_1: "項目數",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


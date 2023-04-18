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
		welcome_user: "ようこそ、 ",
		about: "バージョン情報",
		all: "すべて",
		help: "ヘルプ",
		user_session: "ユーザー・セッション",
		user_session_for: "${0} のユーザー・セッション",
		user_session_for_with_container: "${0} のユーザー・セッション (${1})",
		tools: "ツール",
		login: "ログイン",
		logout: "ログアウト",
		search: "検索",
		saved_searches: "保存された検索",
		content_analytics: "コンテンツの分析",
		reset: "リセット",
		reset_hover: "すべてのタブの未保存データはすべて、以前保存された値にリセットされます。",
		reset_default: "すべてクリア",
		reset_default_hover: "すべてのタブで、「現在のラベル」フィールドをクリアします。",
		locale: "ロケール:",
		up: "上へ",
		down: "下へ",
		restore: "復元",
		maximize: "最大化",
		values_label: "値",
		value_label: "値:",
		path_label: "パス:",
		new_label: "新規:",
		back_label: "戻る",
		clear: "クリア",
		set: "設定...",
		browse: "参照",
		work: "ワーク",
		connect: "接続",
		documents: "ドキュメント:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM と IBM ロゴは、世界の多くの国で登録された International Business Machines Corporation の商標です。 Java およびすべての Java 関連の商標およびロゴは Oracle やその関連会社の米国およびその他の国における商標または登録商標です。 ここに含まれる Oracle Outside In Technology は、制限付きご使用条件の適用を受け、このアプリケーションとともに使用する場合のみ使用できます。 この「プログラム」は「プログラム」に同梱のご使用条件に基づき使用許諾されます。  この「プログラム」のご使用条件は、「プログラム」のディレクトリー・フォルダーまたはライブラリー内に「License」または「Non_IBM_License」として含まれるか、または印刷物として提供されます。 「プログラム」を使用する前にこの使用条件をお読みください。 「プログラム」をご使用になることで、お客様は「プログラムのご使用条件」に同意されたものとみなされます。 ",
		edit: "編集",
		cancel: "キャンセル",
		close: "閉じる",
		close_all: "すべてのタブを閉じる",
		close_others: "他のタブを閉じる",
		ok: "OK",
		yes: "はい",
		no: "いいえ",
		open: "開く",
		refresh: "最新表示",
		refresh_cabinets: "すべてのキャビネットを最新表示",
		delete_text: "削除",
		export_config: "構成をエクスポートする",
		description: "説明",
		true_label: "True",
		false_label: "False",
		error: "エラー",
		error_reference_hover: "このエラーの詳細については、www.ibm.com を検索してください。",
		url_label: "URL",
		default_label: "デフォルト",
		ibm_label: "IBM",
		light_label: "明るくする",
		dark_label: "暗くする",
		save: "保存",
		saveAs: "名前を付けて保存...",
		save_and_close: "保存して閉じる",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "なし",
		Name: "名前",
		"${NAME}": "名前",
		mime_type: "MIME タイプ",
		mime_type_contains_label: "MIME タイプの内容",
		mime_type_header: "MIME タイプ",
		mime_type_icon: "MIME タイプのアイコン",
		casesearch: "ケース",
		item: "アイテム",
		no_mime_type: "このアイテムにはコンテンツが含まれていません。",
		items_selected: "${0} 個のアイテムが選択されました。",
		requestor: "要求元",
		scheduledStartTime: "スケジュールされた開始時刻",
		isRecurring: "繰り返し",
		weeks: "週",
		days: "日",
		hours: "時間",
		endTime: "終了時刻",
		username: "ユーザー名",
		password: "パスワード",
		serverURL: "サーバー URL",
		enable: "有効化",
		disable: "無効化",
		finish: "終了",
		previous: "前へ",
		next: "次へ",
		schedule: "スケジュール",
		removeFromThisList: "このリストから削除",
		status: "状況",
		scheduledEndTime: "スケジュールされた終了時刻",
		type: "タイプ",
		mode: "モード",
		startTime: "開始時刻",
		createdBy: "作成者",
		nextScheduledTime: "次のスケジュールの時刻",
		id: "ID",
		duration: "期間",
		repeatCycle: "頻度",
		taskTypeName: "タスク・タイプ",
		to: "終了日",
		filter: "フィルター:",
		error_message: "エラー・メッセージ",

        file_type: "文書タイプ",
        word_template_name: "Word テンプレート名",
        excel_template_name: "Excel テンプレート名",
        powerpoint_template_name: "PowerPoint テンプレート名",
        template_description: "テンプレートの説明",
        action_add_template: "追加",
        action_change_template: "編集",      
        action_edit_template_properties: "プロパティー",
        add_presentation_template: "プレゼンテーション・テンプレートの追加",
    	add_spreadsheet_template: "スプレッドシート・テンプレートの追加",
    	add_doc_template: "ドキュメント・テンプレートの追加",    	
    	file_type_doc_hover: "有効なワード・プロセッシング・ドキュメント・テンプレート・ファイルを指定する必要があります。<br><br>有効な MIME タイプ: ${0}",
    	file_type_doc_error: "有効なワード・プロセッシング・ドキュメント・テンプレート・ファイルを指定する必要があります。<br><br>選択されたドキュメント MIME タイプ: ${0}<br><br>有効な MIME タイプ: ${1}",
    	file_type_presentation_hover: "有効なプレゼンテーション・テンプレート・ファイルを指定する必要があります。<br><br>有効な MIME タイプ: ${0}",
    	file_type_presentation_error: "有効なプレゼンテーション・テンプレート・ファイルを指定する必要があります。<br><br>選択されたドキュメント MIME タイプ: ${0}<br><br>有効な MIME タイプ: ${1}",
    	file_type_spreadsheet_hover: "有効なスプレッドシート・テンプレート・ファイルを指定する必要があります。<br><br>有効な MIME タイプ: ${0}",
    	file_type_spreadsheet_error: "有効なスプレッドシート・テンプレート・ファイルを指定する必要があります。<br><br>選択されたドキュメント MIME タイプ: ${0}<br><br>有効な MIME タイプ: ${1}",
    	office_online_only_one_template_error: "1 個のファイルのみ選択できます。",
    	change_presentation_template: "プレゼンテーション・テンプレートの編集",
    	change_spreadsheet_template: "スプレッドシート・テンプレートの編集",
    	change_doc_template: "ドキュメント・テンプレートの編集",
    	change_button: "編集",
	    new_document_dialog_doc_title: "新しいドキュメント",
	    new_document_dialog_presentation_title: "新しいプレゼンテーション",
	    new_document_dialog_spreadsheet_title: "新しいスプレッドシート",
	    new_document_dialog_title_label: "タイトル:",
	    new_document_dialog_title_hover: "このドキュメントのタイトルを入力します。",
	    new_document_dialog_title_missing_message: "タイトルを指定してください。",
	    office_online_save_before_adding_templates_title: "変更内容をリポジトリーに保存",
	    office_online_save_before_adding_templates_error: "リポジトリーに加えた変更を保存するまで、Office テンプレートを追加することはできません。 <b>「保存して閉じる」</b>をクリックしてから、再びリポジトリーを開いて Office テンプレートを追加してください。",
	    copy_to_OOS_dialog_doc_title: "新しいドキュメント",
	    office_online_checkin_cancelcheckout_message: "このドキュメントは、Microsoft Office Online で編集中です。 ドキュメントが Microsoft Office Online で開かれている間は、ドキュメントにチェックインしたり、チェックアウトを取り消したりすることはできません。",
	    new_document_classification: "分類:",
	    new_document_classification_help: "ソース・ドキュメントのクラス、プロパティー、および親フォルダー (存在する場合) をリセットします。 エントリー・テンプレートを使用してドキュメントを追加するときは、ソース・ドキュメントのエントリー・テンプレートが自動的に選択されます (存在する場合)。 ソース・ドキュメントのプロパティーがデフォルト値として使用されますが、エントリー・テンプレートで指定されているフォルダーとクラスはそのまま保持されます。",
		new_document_classification_use_source_document: "ソース・ドキュメントを使用:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} タイプのアイコン",
		repository_name_and_type: "${0} の名前とタイプ",
		select_class_label: "${0} を選択",

		// View toggle buttons
		detail_view_button_tooltip: "詳細ビュー",
		detail_view_button: "詳細",
		magazine_view_button_tooltip: "マガジン・ビュー",
		magazine_view_button: "マガジン",
		filmstrip_view_button_tooltip: "フィルムストリップ・ビュー",
		filmstrip_view_button: "フィルムストリップ",

		magazine_view_show: "マガジン・ビューで表示",
		detail_view_show: "詳細ビューで表示",

		total_count_item: "アイテム",
		total_count_items: "アイテム",
		total_count_more_items: "${0} 個を超えるアイテム",

		extension_changed: "選択したファイルの拡張子が元の拡張子と一致しません。  別のファイルを選択してください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "選択したビューアーは、すべてのファイル・タイプをサポートしていません。 このビューアー・マッピングを保存すると、ドキュメントを表示する際に問題が発生する場合があります。 「すべてのファイル・タイプ」オプションを選択する場合は、すべてのファイル・タイプをサポートするビューアーを選択することをお勧めします。<br><br><b>ヒント:</b> 次のビューアーはすべてのファイル・タイプをサポートしています。<ul><li>アプレット・ビューアー</li><li>Ajax ビューアー</li><li>HTML 変換</li><li>PDF 変換</li><li>Web ブラウザー</li></ul>",
		file_type_any: "すべてのファイル・タイプ",
		file_type_any_hover: "ファイル・タイプに関係なく、選択したビューアーを使用してすべてのドキュメントを表示する場合は、このオプションを選択します。 このオプションは、次のビューアーでサポートされています。<br><br><ul><li>アプレット・ビューアー</li><li>Ajax ビューアー</li><li>HTML 変換</li><li>PDF 変換</li><li>Web ブラウザー</li></ul><br><br><b>注意:</b> おおむね特定のビューアーを使用する場合は、作成するマッピングのうち、このオプションを使用するものをビューアー・マップの最後に移動する必要があります。 ",
		file_type_input: "新規ファイル・タイプ:",

		mime_type_input: "新規 MIME タイプ:",
		mime_type_input_invalid: "新規の MIME タイプに、次の文字を含めることはできません。,",
		mime_type_available: "使用可能な MIME タイプ",
		mime_type_selected: "選択した MIME タイプ",
		file_type_input: "新規ファイル・タイプ:",
		file_type_input_invalid: "新規ファイル・タイプに、次の文字を含めることはできません。,",
		file_type_available: "使用可能なファイル・タイプ",
		file_type_selected: "選択されたファイル・タイプ",
		file_type_header: "ファイル・タイプ",
		viewer: "ビューアー:",
		viewer_viewer: "ビューアー",
		viewer_view: "表示",
		viewer_preview: "プレビュー",
		viewer_merge_and_split: "マージと分割",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "プレビューのみ",
		preview_only_label: "(プレビュー)",
		preview_only_hover: "このビューアー・マッピングは、ユーザーが<b>「プレビュー」</b>をクリックしたときにのみ使用されます。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "このリポジトリーは、表示をサポートしていません。 別のリポジトリーを選択してください。",

		repository_community_teamspace_message: "別のリポジトリーがコミュニティー・ライブラリー・リポジトリーとして既に指定されています。 既存のリポジトリーをコミュニティー・ライブラリー・リポジトリーとして引き続き使用する場合は、既存のリポジトリーがこのリポジトリーに置き換えられないように、変更内容を保存する前に<b>「いいえ」</b>を選択してください。",

		favorites_empty: "まだお気に入りがありません。",
		syncItems_empty: "まだ同期されたファイルがありません。",

		root_folder_id: "ルート・フォルダー ID",
		unified_searches: "リポジトリー間検索",
		max_results: "結果の数:",
		direct_retrieve_enabled: "直接取得:",
		itemTypesToDisplay: "表示するアイテム・タイプ:",
		allItemTypes: "すべてのアイテム・タイプ",
		include_attr_group_name: "属性表示名の属性グループの説明:",
		admin_repcfg_include_attr_group_name_hover: "デフォルトでは、属性グループ属性の名前に属性グループの説明が含まれます。 これにより、ユーザーが属性を処理する際に、属性グループ属性が所属する属性グループがわかりやすくなります。<br>例えば、属性グループ属性の名前として以下が表示されます: Document Settings.Document Type。<br><br>このオプションを無効にすると、属性グループ属性名に属性の説明のみが使用されます。<br>例えば、ユーザーには以下の名前が表示されます: Document Type。<br><br>属性グループの説明がない場合、ユーザーは Document Type が単純属性なのか属性グループ属性なのかを見分けられない可能性があります。",
		documentItemTypesOnly: "ドキュメント・モデルのアイテム・タイプのみ",
		object_store: "オブジェクト・ストアのシンボル名:",
		object_store_display_name: "オブジェクト・ストアの表示名:",
		teamspaceUpgradeMsg: "チームスペースはリポジトリー構成の保存時に更新されます。 チームスペースが多数ある場合、更新に数分かかる場合があります。",
		synchUpgradeMsg: "このリポジトリーの同期モジュールは、リポジトリー構成の保存時に更新されます。",
		protocol: "プロトコル:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS リポジトリー ID:",
		cmis_url: "CMIS AtomPub バインディング・サービス・ドキュメント URL:",
		trace_level: "トレース・レベル",
		trace_dir: "トレース・ディレクトリー",
		temp_dir: "一時ディレクトリー",
		show_document_location: "ドキュメントの場所の表示",
		max_folders: "最大フォルダー数",
		afp_conversion: "AFP 変換",
		line_conversion: "行データ変換",
		max_hits: "最大ヒット数",
		folder_search_expresssion: "フォルダー検索式",
		max_item_types: "最大アイテム・タイプ数",
		max_worklists: "最大ワーク・リスト数",
		update_storage_collection: "ストレージ・コレクションの更新",
		include_mime_types_in_search_results: "MIME タイプを検索結果に含める",
		object_type: "オブジェクト・タイプ",
		object_type_document: "ドキュメント",
		object_type_folder: "フォルダー",
		file_label: "ファイル:",
		plugin_jarfile_path_label: "JAR ファイルのパス:",
		plugin_classfolder_path_label: "クラス・ファイルのパス:",
		plugin_classname_label: "クラス名:",
		plugin_id_label: "プラグイン ID:",
		class_label: "クラス",
		configuration: "構成",
		connect_repository: "接続...",
		server_type: "サーバー・タイプ",
		timeout_in_seconds: "タイムアウト (秒):",
		default_search_template: "デフォルトの検索",
		search_filtered_properties: "検索可能プロパティー",
		property_contains_label: "プロパティーの内容",
		class_contains_label: "クラスの内容",
		search_filtered_operators: "検索演算子",
		default_search_results: "検索結果",
		data_type: "データ型",
		status_bar: "ステータス・バー",
		operators_for: "演算子の対象:",
		currentUser: "現行ユーザー",
		nameContains: "名前の内容",
		searchFor: "検索対象",
		server_autentication: "サーバー認証 (OAuth 2.0 (JWT 適用))",
		standard_authentication: "標準認証 (3-legged OAuth2.0)",
		developer_authentication: "開発者認証",
		enterprise_id: "エンタープライズ ID:",
		public_key_id: "公開鍵 ID:",
		private_key_path: "秘密鍵ファイル・パス:",
		server_user_email: "サーバー・ユーザー E メール",

		filter_builder_tooltip: "フィルターの定義",

		// Launch bar
		launchbar_home: "ホームを開く",
		launchbar_favorites: "お気に入りを開く",
		launchbar_browse: "参照ビューを開く",
		launchbar_browse_popup: "参照ポップアップ・リストを開く",
		launchbar_search: "検索ビューを開く",
		launchbar_search_popup: "検索ポップアップ・リストを開く",
		launchbar_teamspaces: "チームスペース・ビューを開く",
		launchbar_teamspaces_popup: "チームスペース・ポップアップ・リストを開く",
		launchbar_work: "作業ビューを開く",
		launchbar_work_popup: "作業ポップアップ・リストを開く",
		launchbar_entry_templates: "エントリー・テンプレート・ビューを開く",
		launchbar_entry_templates_popup: "エントリー・テンプレート・ポップアップ・リストを開く",
		launchbar_admin: "管理ビューを開く",

		admin_sync_server: "同期サービス",
		admin_settings: "設定",
		admin_interface_text: "ラベル",
		admin_interface_text_desktop: "デスクトップ:",
		admin_desktops: "デスクトップ",
		admin_repositories: "リポジトリー",
		admin_mobile: "モバイル",
		admin_menus: "メニュー",
		admin_reason_codes: "リダクションの理由",
		admin_plugins: "プラグイン",
		admin_plugins_state_enabled: "プラグインは使用可能です",
		admin_plugins_state_disabled: "プラグインは使用不可です",
		admin_plugins_version: "バージョン:",
		admin_plugins_version_heading: "バージョン",
		admin_plugins_icon: "プラグイン・アイコン",
		admin_viewer_mapping_icon: "ビューアー・マッピング・アイコン",
		admin_viewer_defs: "ビューアー・マップ",
		admin_viewer_dialog_title: "マッピング",
		admin_viewer_dialog_new_title: "新規マッピング",
		admin_viewer_dialog_instructions: "マッピングは、リポジトリーでファイルに対してどのビューアーを使用するかを指定します。 複数のマッピングを作成して、ファイル・タイプごとに異なるビューアーを指定できます。 MIME タイプまたはファイル拡張子のどちらかを使用してマッピングを定義できます。 ファイル拡張子を使用したマッピングは、ドキュメント名にマップされます。 例えば、ファイル・タイプが gif に設定されたマッピングは、拡張子 .gif で終わるドキュメント名にマップされます。",
		admin_desktop_viewer_defs: "ビューアー・マップ:",
		admin_desktop_viewer_defs_hover: "ビューアー・マップは、リポジトリーでさまざまなタイプのドキュメントを開くために、どのビューアーを使用するかを指定します。<br><br>管理ツールの<b>「ビューアー・マップ」</b>セクションで新しいビューアー・マップを作成できます。",
		admin_desktops_used: "デスクトップで使用",
		admin_desktop_additional_settings: "追加設定:",
		admin_default_desktop: "デフォルトのデスクトップとして設定",
		admin_default_desktop_header: "デフォルトのデスクトップ",
		admin_layout_tab_title: "レイアウト",
		admin_desktop_icon: "デスクトップ・アイコン",

		// Themes
		admin_themes: "テーマ",
		admin_theme_list_instructions: "テーマを作成すると、組織向けの Web クライアントのカスタマイズが容易になります。 環境内の各種デスクトップに各種の色、フォント、またはロゴを使用する必要がある場合は、複数のテーマを作成できます。<br><br>テーマの作成後、デスクトップの<b>「外観」</b>タブでテーマを構成することでデスクトップに適用できます。",
		admin_theme_instructions: "テーマを作成して、Web クライアントに表示される色とフォントを制御します。 また、テーマを使用して、ログイン・ページとバナーに表示されるロゴ、アプリケーション名、および著作権テキストを変更できます。",
		admin_theme_heading: "テーマ: <b>${0}</b>",
		admin_new_theme: "新規テーマ",
		admin_text_theme: "テーマ",
		admin_delete_confirmation_themes: "選択したテーマを削除しますか?\n${0} 個のテーマが選択されています。",
		admin_theme_color: "色",
		admin_theme_text: "テキスト",
		admin_theme_solid: "ソリッド",
		admin_theme_gradient: "グラデーション",
		admin_theme_box: "Box",
		admin_theme_color_label: "色 ${0}:",
		admin_theme_name_invalid: "テーマ名に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "テーマ ID は一意である必要があり、テーマを保存した後で ID を変更することはできません。<br><br>ID に含めることができるのは英数字のみです。",
		admin_theme_name_hover: "名前に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "自動",
		admin_theme_logo_url_hover: "ロゴ・ファイルの URL を入力します。 ロゴが Web クライアントと同じ Web アプリケーション・サーバー上にある場合は、相対 URL を入力します (例: /mycustomizations/banner_logo.png)。<br><br>ロゴの背景は透明にすることをお勧めします。",
		admin_theme_color_palette_title_heading: "カラー・パレット",
		admin_theme_color_palette_help_text: "16 進値またはカラー・ピッカーを使用して、自分のテーマのカラー・パレットを作成します。 必要な数だけ色を追加できます。",
		admin_theme_color_add_button_label: "色の追加",
		admin_theme_color_remove_button_label: "色の削除",
		admin_theme_global_title_heading: "アプリケーション全体のエレメント",
		admin_theme_global_font: "フォント・ファミリー:",
		admin_theme_global_font_hover: "Web クライアントで使用するフォントを選択します。 フォントは優先度の順にリストされます。リスト内の次のフォントは、前のフォントがクライアント・マシンにインストールされていない場合にのみ使用されます。",
		admin_theme_global_framework_color_label: "フレームワークの色:",
		admin_theme_global_framework_color_hover: "以下のエレメントに使用する色を選択します。<ul><li>ダイアログ・ボックスのタイトル・バー</li><li>選択されたタブ上部の強調表示の色</li><li>コンテンツ・リスト・ビューのアイコン (詳細ビュー、マガジン・ビュー、フィルムストリップ・ビュー)</li></ul><br>この色は、Web クライアントのセクション間の区切り文字には使用されません。 区切り文字の色を変更する場合は、カスタム CSS ファイルを提供するプラグインを作成する必要があります。",
		admin_theme_color_global_toolbar: "グローバル・ツールバーの色:",
		admin_theme_color_global_toolbar_hover: "Web クライアントにグローバル・ツールバーを組み込む場合は、ツールバーの色を選択します。<br><br><b>ヒント:</b> ツールバーは Web クライアントの上部にあるバナーに表示されるため、ツールバーの色はバナーの補色でなければなりません。",
		admin_theme_global_selected_color: "選択されたアイテムの色:",
		admin_theme_global_selected_color_hover: "参照ツリー、検索ツリー、およびコンテンツ・リストでアイテムが選択された場合に使用する色を選択します。<br><br>ホバー色 (ユーザーがアイテムの上にマウスを移動したときに使用される色) は、この色から派生します。",
		admin_theme_global_link_color: "リンクの色:",
		admin_theme_global_link_color_hover: "Web クライアント内のすべてのクリック可能な URL に使用する色を選択します。 例えば、この色は、Web クライアント全体を通じて表示される「詳細を表示」リンクで使用されます。",
		admin_theme_login_title_heading: "ログイン・ページのエレメント",
		admin_theme_page_background_label: "ログイン・ページの背景色:",
		admin_theme_login_page_background_hover: "ログイン・ペインの背後に表示する色を選択します。",
		admin_theme_login_pane_background_label: "ログイン・ペインの背景色:",
		admin_theme_login_pane_background_hover: "ログイン・ペインに表示する色を選択します。 この色は、ログイン・ページの背景色の補色でなければなりません。",
		admin_theme_text_color: "テキストの色:",
		admin_theme_login_pane_text_color_hover: "ログイン・ペインのテキストに使用する色を選択します。 この色は、ウェルカム・テキストとフィールド・ラベルに使用されます。 この色は、ログイン・ペインの背景色に対して読みやすいものでなければなりません。",
		admin_theme_copyright_text: "著作権テキスト:",
		admin_theme_copyright_text_hover: "ログイン・ページに著作権テキストを表示するかどうかを指定します。",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "著作権テキストなし",
		admin_theme_banner_title_heading: "バナーのエレメント",
		admin_theme_text_icons_color: "テキストとアイコンの色:",
		admin_theme_icon_color_label: "アイコンの色:",
		admin_theme_shadow_label: "シャドー:",
		admin_theme_banner_text_icons_hover: "バナー内のテキストとアイコンに使用する色を選択します。 この色は、バナーの背景色に対して読みやすいものでなければなりません。",
		admin_theme_banner_product_name_label: "製品名:",
		admin_theme_banner_product_name_hover: "デスクトップを作成する際に、アプリケーションに表示するカスタム名を指定できます。 カスタム名を指定しない場合は、IBM Content Navigator が製品名として使用されます。 デスクトップで定義されているアプリケーション名を使用するか、名前の代わりにイメージを使用するかを指定します。",
		admin_theme_banner_product_name_desktop_defined_label: "デスクトップから名前を使用",
		admin_theme_banner_product_name_image: "カスタム・ロゴを使用 (URL)",
		admin_theme_background_color_label: "背景色:",
		admin_theme_style_label: "スタイル:",
		admin_theme_banner_color_hover: "アプリケーションの上部にあるバナーに使用する色を選択します。<br><br><b>ヒント:</b> バナー・テキストの色は、バナーの背景色に対して読みやすいものかどうか確認してください。",
		admin_theme_buttons_title_heading: "ボタン",
		admin_theme_navigation_title_heading: "ナビゲーションのエレメント",
		admin_theme_navigation_icon_selected_label: "選択されたアイコンの色:",
		admin_theme_navigation_background_hover: "機能のナビゲーション・バーの背景に使用する色を選択します。",
		admin_theme_navigation_icon_color_hover: "機能のナビゲーション・バー内のアイコンに使用する色を選択します。 デスクトップ上でデフォルト・レイアウトを使用する場合、この色が機能ドロップダウン・メニューの背景と対照的である必要があります。デスクトップ上でクラシック・レイアウトを使用する場合は、この色が機能ナビゲーション・バーの背景と対照的である必要があります。",
		admin_theme_navigation_icon_selected_hover: "機能のナビゲーション・バー内の選択された機能に使用する色を選択します。 この色は、機能のナビゲーション・バーのアイコンの色と背景色の補色でなければなりません。<br><br>デスクトップ上でクラシック・レイアウトを使用する場合、この色が機能ナビゲーション・バーのホバー色として使用されます。",
		admin_theme_button_background_color_hover: "ボタンの背景に使用する色を選択します。",
		admin_theme_button_style_hover: "ボタンのスタイルを選択します。",
		admin_theme_button_text_icon_color_hover: "ボタン上のテキストとイメージに使用する色を選択します。",
		admin_theme_no_logo_label: "ロゴなし",
		admin_theme_custom_logo_label: "カスタム・ロゴ (URL)",
		admin_theme_banner_type: "バナー塗りつぶしスタイル:",
		admin_theme_banner_type_hover: "バナーの色が単一カラーかグラデーションかを指定します。 グラデーション・バナーを指定した場合、バナーに指定する色は、バナーの最も暗い色です。<br><br><b>ヒント:</b> バナー・テキストの色は、バナーの背景色に対して読みやすいものかどうか確認してください。",
		admin_theme_icon: "テーマ・アイコン",
		admin_theme_buttons_and_links_title_heading: "ボタン、フィールド、リンク",
		admin_theme_button_style_label: "ボタンのスタイル:",
		admin_theme_theme_style_label: "テーマのスタイル:",
		admin_theme_theme_style_hover: "テーマの基本となるスタイルを選択します。 テーマの作成時または編集時には、いつでもスタイルを変更できます。 他のスタイルに変更するときに、テーマの設定はデフォルト値にリセットされます。",
		admin_theme_accent_color_label: "アクセントの色:",
		admin_theme_accent_color_hover: "ダイアログ上部のバーおよびロード中のスピナーに使用する色を選択します。",
		admin_theme_global_toolbar_text_color_label: "グローバル・ツールバーのテキストの色:",
		admin_theme_global_toolbar_text_color_hover: "Web クライアントにグローバル・ツールバーを組み込む場合は、ツールバーのテキストに使用する色を選択します。",
		admin_theme_banner_text_color_hover: "バナー内のテキストに使用する色を選択します。",
		admin_theme_banner_icon_color_hover: "バナー内のアイコンに使用する色を選択します。",
		admin_theme_button_color_label: "色:",
		admin_theme_button_color_hover: "以下のエレメントに使用する色を選択します。<ul><li>ダイアログ・ボックスのタイトル・バー</li><li>選択されたタブ上部の強調表示の色</li><li>コンテンツ・リスト・ビューのアイコン (詳細ビュー、マガジン・ビュー、フィルムストリップ・ビュー)</li><li>ボタン、フィールド、リンク</li></ul>ユーザーがボタンの上にマウスを移動すると、この色から派生した色になります。 この色は、Web クライアントのセクション間の区切り文字には使用されません。 区切り文字の色を変更する場合は、カスタム CSS ファイルを提供するプラグインを作成する必要があります。",
		admin_theme_theme_style_col_header: "テーマのスタイル",

		admin_syncserver_consistency_checker: "整合性チェッカー",
		admin_syncserver_consistency_checker_hover: "整合性チェッカーを実行して、同期サービス・データベースに、サーバー上の各アイテムの状況に関する現行情報があることを確認します。 例えば、同期サービス・データベースの停止後に整合性チェッカーを実行して、停止中にリポジトリーで更新されたドキュメントに関する情報を取得します。",
		admin_syncserver_consistency_checker_button: "整合性チェッカーの実行",
		admin_syncserver_consistency_checker_started: "開始:",
		admin_syncserver_consistency_checker_ended: "終了:",
		admin_syncserver_consistency_checker_duration: "期間:",
		admin_syncserver_consistency_checker_items_processed: "処理された同期アイテム:",
		admin_syncserver_consistency_checker_items_processed_success: "正常に処理された同期アイテム:",
		admin_syncserver_consistency_checker_items_discovered: "検出された新規リポジトリー・アイテム:",
		admin_syncserver_consistency_checker_change_updates: "合計更新:",
		admin_syncserver_consistency_checker_state: "状態:",
		admin_syncserver_consistency_checker_state_done: "完了",
		admin_syncserver_consistency_checker_state_running: "実行中",
		admin_syncserver_consistency_checker_user: "送信者:",
		admin_syncserver_consistency_checker_scheduled: "スケジュール済み:",

		admin_syncserver_dbcleanup: "データベース・クリーンアップ",
		admin_syncserver_dbcleanup_hover: "データベース・クリーンアップ・ツールは、データベースから同期を取られていない未使用のデバイスやアイテムを削除するために実行します。",
		admin_syncserver_dbcleanup_button: "データベース・クリーンアップ",
		admin_syncserver_dbcleanup_state_done: "完了",
		admin_syncserver_dbcleanup_state_running: "実行中",
		admin_syncserver_dbcleanup_started: "開始:",
		admin_syncserver_dbcleanup_ended: "終了:",
		admin_syncserver_dbcleanup_state: "状態:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "削除されたリポジトリー:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "削除された同期アイテム:",
		admin_syncserver_dbcleanup_devicedeleted_count: "削除されたデバイス:",
		admin_syncserver_dbcleanup_deviceexpired_count: "期限切れデバイス:",

		admin_syncserver_publicSyncUrl: "同期サービス・パブリック URL:",
		admin_syncserver_publicSyncUrl_hover: "リポジトリーが IBM Content Navigator 同期サービスと通信できる URL を指定します。 URL のデフォルト・フォーマットは http://sync_public_URL:port_number/sync/notify です。",

		admin_syncserver_managed: "同期クライアント設定:",
		admin_syncserver_managed_hover: "ユーザーはこれらの設定を IBM Content Navigator 同期クライアントで変更することはできません。",
		admin_syncserver_managed_subfolder: "同期するフォルダー・レベル",
		admin_syncserver_managed_subfolder_hover: "ユーザーがフォルダーを同期する場合、同期されるフォルダーの最大数を指定します。 例えば、ユーザーが 3 フォルダー・レベルを指定した場合、ユーザーが同期するフォルダーと 2 レベルのサブフォルダーが同期されます。<br><br>この設定により生じる同期トラフィックの量をサポートするようにご使用の環境がスケーリングできることを確認してください。",
		admin_syncserver_managed_subfolder_all: "すべてのサブフォルダー",
		admin_syncserver_managed_subfolder_none: "サブフォルダーなし",
		admin_syncserver_managed_subfolder_no_more: "制限レベル",
		admin_syncserver_managed_subfolder_levels: "フォルダー",
		admin_syncserver_managed_schedule: "同期スケジュール",
		admin_syncserver_managed_schedule_hover: "この同期スケジュールにより生じる同期トラフィックの量をサポートするようにご使用の環境がスケーリングできることを確認してください。<br><br>最大間隔は 24 時間 (1440 分) です。<br><br>ユーザーはクライアントの<b>「今すぐ同期」</b>をクリックしてこの同期スケジュールをオーバーライドできます。",
		admin_syncserver_managed_schedule_manual: "手動で同期",
		admin_syncserver_managed_schedule_continuous: "継続的に同期",
		admin_syncserver_managed_schedule_every: "指定された間隔で同期",
		admin_syncserver_managed_schedule_minutes: "分",
		admin_syncserver_managed_schedule_hours: "時間",

		// redaction codes
		admin_new_reason_code: "新規リダクションの理由",		
		admin_reason_code_name_invalid: "リダクションの理由名に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "説明に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "説明に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "名前に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "説明:",
		admin_reason_code_applications_hover: "このリダクションの理由を参照している Datacap アプリケーションのリスト。",
		admin_reason_code_applications: "Datacap アプリケーション",
		admin_delete_confirmation_reason_codes: "選択したリダクションの理由を削除しますか?",
		admin_delete_confirmation_reason_code: "選択したリダクションの理由を削除しますか?",
		admin_reason_code_heading: "リダクションの理由: <b>${0}</b>",
		admin_reason_code_list_instructions: "リダクションの理由は、機密データを非表示にして保護する理由を示しています。 それぞれの理由により、一般ユーザーには表示されない機密データのタイプが識別されます。",
		admin_reason_code_instructions: "機密データのタイプごとに、リダクションの理由を作成できます。 次に、リダクション・ポリシーでその理由を使用して、そのデータを表示できるユーザーと、リダクションを作成または変更できるユーザーを定義します。",
		admin_reason_code_applications_label: "Datacap アプリケーション",
		admin_reason_code_repositories: "リポジトリー",
		admin_reason_code_repositories_label: "リポジトリー",
		admin_reason_code_repositories_hover: "このリダクションの理由を参照している ICN リポジトリーのリスト。",
		admin_reason_code_repositories_default_value: "未設定",
		admin_reason_code_description_label: "説明",
		admin_reason_code_applications_default_value: "未設定",
		admin_redaction_reasons: "リダクションの理由",
		admin_redactions: "ロール・ベースのリダクション",
		admin_redactions_policies_roles: "ポリシーおよびロール",
		admin_reasons: "理由",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID の編集はできません。  クリップボードへのコピーは可能です",
		// Role based administration
		admin_rba: "ロール・ベースのデスクトップ管理",
		admin_rba_mobile_access_enabled: "このデスクトップではモバイル・アクセスが有効になっています。",
		admin_rba_mobile_access_disabled: "このデスクトップではモバイル・アクセスが有効になっていません。",
		admin_rba_confirm_delete_multiple: "選択した管理ロールを削除しますか?",
		admin_rba_confirm_delete_single: "選択した管理ロールを削除しますか?",
		admin_rba_delete_multi_role_desktop: "デスクトップに割り当てられているロールを 1 つ以上選択しました。 そのロールを削除するには、まずデスクトップへの割り当てを解除してください。",
		admin_rba_delete_single_role_desktop: "${0} デスクトップに割り当てられているロールを選択しました。 そのロールを削除するには、まずデスクトップへの割り当てを解除してください。",
		admin_desktop: "デスクトップ",
		admin_rba_instructions: "デスクトップ管理ロールを作成して管理できます。このロールは、デスクトップ管理者に付与された特権を関連付けます。",
		admin_rba_not_used: "${0} はどのデスクトップでも使用されていません。",
		admin_rba_desktops: "<b>${0} は以下のデスクトップで使用されています: </b>",
		admin_rba_new_role: "新規ロール",
		admin_rba_name_invalid: "管理ロール名に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "説明に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "説明に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "名前に、次の文字を含めることはできません。* \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>説明:</b> ${0}",
		admin_rba_membership: "メンバーシップ",
		admin_rba_general_priv: "一般",
		admin_rba_appearance_priv: "外観",
		admin_rba_desktop_config_priv: "デスクトップ構成",
		admin_rba_app_name_priv: "アプリケーション名",
		admin_rba_theme_priv: "テーマ",
		admin_rba_viewer_map_priv: "ビューアー・マップ",
		admin_rba_merge_split_priv: "マージと分割",
		admin_rba_sync_svc_priv: "同期サービス",
		admin_rba_menus_priv: "メニュー",
		admin_rba_edit_svc_priv: "編集サービス",
		admin_rba_toolbars_priv: "ツールバー",
		admin_rba_ctx_menus_priv: "コンテキスト・メニュー",
		admin_rba_office_ribbon_priv: "MS Office リボン・バー・コマンド",
		admin_rba_office_menues_priv: "MS Office コンテキスト・メニュー",
		admin_rba_addl_settings_priv: "追加設定",
		admin_rba_mobile_priv: "モバイル",
		admin_rba_add_doc_dlg_priv: "ドキュメントの追加ダイアログ",
		admin_rba_doc_mgmt_priv: "ドキュメント管理",
		admin_rba_def_redaction_priv: "デフォルト・リダクション・オプション",
		admin_rba_add_photos_priv: "カメラから写真ライブラリーへの写真の追加",
		admin_rba_time_stamp_priv: "タイム・スタンプ",
		admin_rba_add_docs_folders_priv: "リポジトリーに対するドキュメントの追加とフォルダーの作成",
		admin_rba_open_docs_priv: "他のアプリケーションでのドキュメントのオープン",
		admin_rba_office_config_priv: "Office 構成",
		admin_rba_tab_label_priv: "IBM ECM タブ・ラベル",
		admin_rba_feature_sel_priv: "機能の選択",
		admin_rba_general_config_priv: "一般構成",
		admin_rba_favorites_priv: "お気に入り",
		admin_rba_add_options_priv: "「編集」グループの「追加」オプション",
		admin_rba_browse_priv: "参照",
		admin_rba_outlook_int_priv: "Outlook 統合",
		admin_rba_search_priv: "検索",
		admin_rba_layout_priv: "レイアウト",
		admin_rba_case_priv: "ケース",
		admin_rba_desktop_feat_priv: "デスクトップの機能",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "表示される機能",
		admin_rba_branding_priv: "ブランド設定",
		admin_rba_home_priv: "ホーム",
		admin_rba_main_color_priv: "メインの色",
		admin_rba_sec_color_priv: "2 次色",
		admin_rba_teamspaces_priv: "チームスペース",
		admin_rba_rbr_priv: "ロール・ベースのリダクション",
		admin_rba_et_mgr_priv: "エントリー・テンプレート・マネージャー",
		admin_rba_policies_roles_priv: "ポリシーとロールの管理",
		admin_rba_work_priv: "ワーク",
		admin_rba_reasons_priv: "理由コード",
		admin_rba_tasks_priv: "非同期タスク",
		admin_rba_auth_priv: "認証",
		admin_rba_all_privs: "すべての特権",
		admin_rba_some_privs: "一部の特権",
		admin_rba_no_privs: "特権なし",
		admin_add_users_groups_priv: "ユーザーおよびグループの追加",
		admin_url_features_priv: "URL 機能の管理",
		admin_plugin_features_priv: "プラグイン機能の管理",
		admin_addl_components_priv: "追加コンポーネント",
		admin_global_toolbar_priv: "グローバル・ツールバー",
		admin_status_bar_priv: "ステータス・バー",
		admin_refresh_message: "更新されたデータを使用するには、ブラウザーを最新表示する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "更新されたデフォルトのデスクトップを使用するには、ブラウザーを最新表示する必要があります。",
		admin_desktop_refresh_message: "更新されたデスクトップを使用するには、ブラウザーを最新表示する必要があります。",
		admin_action_open: "開く",
		admin_action_edit: "編集",
		admin_action_copy: "コピー",
		admin_action_delete: "削除",
		admin_action_copy: "コピー",
		admin_action_new: "新規作成",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "この ID は既に使用されています。 一意の ID を指定してください。",

		admin_searchable_properties_for: "検索可能プロパティー:",
		admin_repository_new: "新規リポジトリー",
		admin_desktop_new: "新規デスクトップ",
		admin_desktop_file_documents: "ユーザーに新規ドキュメントおよびフォルダーをフォルダーに保存するように要求する",
		admin_desktop_file_documents_hover: "リポジトリーにアイテムを追加するときに、フォルダーを選択するようにユーザーに要求する場合、このオプションを選択します。 このオプションを選択しない場合、ユーザーはドキュメント (IBM FileNet P8) またはドキュメントとフォルダー (IBM Content Manager) をフォルダーにファイリングせずに追加できます。",
		admin_desktop_show_security_tab: "追加およびチェックインのアクション時にセキュリティーの設定を表示する",
		admin_desktop_show_security_hover: "<b>IBM FileNet P8 ユーザーのみ</b>。  このデスクトップにアイテムを追加またはチェックインする際に、ユーザーがドキュメントとフォルダーのセキュリティーを編集できるようにするには、このオプションを選択します。",
		admin_desktop_configure_security_inheritance: "フォルダーのセキュリティーの継承を構成することをユーザーに許可する",
		admin_desktop_configure_security_inheritance_hover: "<b>IBM FileNet P8 ユーザーのみ</b>。  ユーザーがフォルダーのセキュリティーの継承を制御することによってフォルダー内のアイテムへのアクセスをカスタマイズできるようにする場合、このオプションを選択します。 このオプションを選択すると、ユーザーは、ユーザーまたはグループが以下からセキュリティーを継承できるかどうかを指定できます。<ul><li>フォルダー</li><li>フォルダーおよびその直接のサブフォルダー</li><li>フォルダーおよびそのすべてのサブフォルダー</li></ul>",
		admin_desktop_appearance: "外観",
		admin_desktop_appearance_instruction: "デスクトップに表示されるログイン・ページとバナーを変更することにより、デスクトップの外観をカスタマイズできます。",
		admin_desktop_layout: "レイアウト:",
		admin_desktop_layout_hover: "レイアウトにより、Web クライアントに表示できる機能と、Web クライアントのコンテンツの配置方法が指定されます。<br><br><b>ヒント:</b> カスタム・レイアウトはプラグインを作成することによって定義できます。 カスタム・レイアウトを選択するためには、管理ツールにプラグインを登録しておく必要があります。",
		admin_desktop_layout_default: "デフォルト",
		admin_desktop_layout_custom: "カスタム",
		admin_desktop_enable_workflow_email: "デスクトップで FileNet P8 ワークフローの E メール通知を使用可能にする",
		admin_desktop_enable_workflow_email_hover: "FileNet P8 ユーザーのみ。 Process Engine によって生成された E メール通知内の URL からユーザーが Web クライアントを開くことができるようにするには、このオプションを選択します。<br /><br />すべてのデスクトップについてこのオプションを無効にした場合、ユーザーは、通知内の URL から Web クライアントにログインできなくなります。<br /><br />複数のデスクトップについてこのオプションを有効にし、複数のデスクトップが通知内の URL に指定された条件を満たしている場合、Web クライアントは、この条件を満たしている最初のデスクトップを使用します。 ",
		admin_desktop_prevent_create_new_search: "ユーザーが検索を作成できないようにする",
		admin_desktop_prevent_create_new_search_hover: "このオプションは、ユーザーが既存の検索のみを使用し、最適化されない可能性のある自由記述式の検索を作成できないように制限します。</br></br>この設定はチームスペースには影響しません。 チームスペース内に検索を作成する権限は、ユーザーが特定のチームスペースで所有するロールにより制御されます。",
		admin_desktop_prevent_create_new_unified_search: "ユーザーがリポジトリー間検索を作成できないようにする",
		admin_desktop_prevent_create_new_unified_search_hover: "このオプションは、ユーザーが既存のリポジトリー間検索のみを使用し、最適化されない可能性のある自由記述式のリポジトリー間検索を作成できないように制限します。",
		admin_desktop_hide_entry_template_not_found_warning: "関連付けられたエントリー・テンプレートが見つからないときに表示される警告を非表示にする",
		admin_desktop_hide_entry_template_not_found_warning_hover: "アイテム・プロパティーを編集する際、アイテムに関連付けられたエントリー・テンプレートが見つからない場合に表示される警告メッセージを非表示にするには、このオプションを選択します。",
		admin_desktop_show_class_role_security_selection: "エントリー・テンプレートでロール・ベースのセキュリティーを構成することをユーザーに許可する",
		admin_desktop_show_class_role_security_selection_hover:	"<b>IBM FileNet P8 ユーザーのみ</b>。 エントリー・テンプレートを使用してドキュメントおよびフォルダーのセキュリティーを設定する際、ロール・ベースのセキュリティーを使用するよう、ユーザーにエントリー・テンプレートを構成させたい場合は、このオプションを選択します。このオプションを選択すると、ロール・セキュリティー・オブジェクトをエントリー・テンプレート定義に適用するかどうかを、エントリー・テンプレート・エディターで指定できます。",
		admin_desktop_show_primary_multi_part: "ビューアーで 1 次ドキュメントのみ開く",
		admin_desktop_show_primary_multi_part_hover: "<b>IBM FileNet P8 ユーザーのみ</b>。 ビューアーで 1 次ドキュメント・ファイルのみ開く場合は、このオプションを選択します。ドキュメントは、それに関連付けられた複数のファイルを持つことができます。このオプションによって、ドキュメントに関連付けられた 1 次ファイルのみが開かれます。",
		admin_desktop_redaction_save_mode: "デフォルト・リダクション・オプション:",
		admin_desktop_redaction_save_mode_hover: "デフォルトの ViewONE Virtual ビューアー・リダクション保存モードを以下の中から選択します。</br>* 常にユーザーに選択を求める: リダクション・モードになるときにダイアログを表示して、新しいバージョンとしてチェックインするか、新しいドキュメントを作成するか、コンテンツをダウンロードするかをユーザーに尋ねます。</br>* 新しいバージョンとしてチェックインする: 改訂されたコンテンツを常に既存のドキュメントの新しいバージョンに保存します。</br>* 完全に新しいドキュメントとして保存する: 改訂されたコンテンツを常に完全に新しいドキュメントとして保存します。</br>* ダウンロードしてクライアント上に保存する: 改訂されたコンテンツをクライアント・システムにダウンロードします。",
		admin_desktop_redaction_save_mode_user_select: "常にユーザーに選択を求める",
		admin_desktop_redaction_save_mode_new_version: "新しいバージョンとしてチェックインする",
		admin_desktop_redaction_save_mode_new_document: "完全に新しいドキュメントとして保存する",
		admin_desktop_redaction_save_mode_local_content: "ダウンロードしてクライアント上に保存する",

		admin_desktop_document_add_mode: "ドキュメントの追加ダイアログ:",
		admin_desktop_document_add_mode_hover: "IBM Content Navigator によって作成されたドキュメントを追加するときに使用する追加ダイアログを指定します:<ul><li>永続的に改訂された新しいドキュメント</li><li>新しいマージおよび分割ドキュメント</li><li>新しい Microsoft Office ドキュメント</li><li>新しい編集サービス・ドキュメント</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "ドキュメントの追加",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "エントリー・テンプレートを使用してドキュメントを追加",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "マージと分割:",
		admin_desktop_merge_and_split_enable_hover: "このデスクトップにアクセスするユーザーが、サポートするビューアーを使用してドキュメントをマージおよび分割できるようにするかどうかを指定します。",

		admin_desktop_merge_and_split_show_checkin: "変更内容をドキュメントにチェックインする時にプロパティー値を指定するプロンプトを出す",
		admin_desktop_merge_and_split_show_checkin_hover_help: "このオプションを選択すると、ユーザーが「マージと分割」モードでドキュメントの変更内容をチェックインするときに、チェックイン・ダイアログが表示されます。",

		admin_desktop_available_categories: "使用可能な機能",
		admin_desktop_selected_categories: "選択した機能",

		admin_layout_banner_title: "バナーおよびログイン・ページ",
		admin_layout_title: "レイアウト",

		admin_desktop_application_name: "アプリケーション名:",
		admin_desktop_application_name_hover: "バナーに表示するアプリケーション名を指定してください。<br><br>ヒント: 「ラベル」/「デスクトップ・ラベル」タブで、他の言語用のアプリケーション名を定義します。",
		admin_desktop_theme: "テーマ:",
		admin_desktop_theme_hover: "このデスクトップにデフォルトの IBM Content Navigator テーマを使用するか、カスタム・テーマを使用するかを指定します。 カスタム・テーマを使用するには、管理ツールの<b>「テーマ」</b>セクションでテーマを作成する必要があります。",
		admin_desktop_login_logo: "ログイン・ページのロゴ:",
		admin_desktop_login_logo_hover: "ログイン・ページに表示するロゴを変更する場合、ロゴ・ファイルの URL を指定できます。 ただし、ロゴを変更する場合は、カスタム・テーマを使用することをお勧めします。",
		admin_desktop_login_logo_url_hover: "ロゴ・ファイルの URL を入力します。 ロゴが Web クライアントと同じ Web アプリケーション・サーバー上にある場合は、相対 URL を入力します (例: /mycustomizations/login_logo.png)。<br><br>幅 200 ピクセルおよび高さ 150 ピクセルより大きいロゴは使用できません。<br><br>ロゴの背景は透明にすることをお勧めします。",
		admin_desktop_banner_logo: "バナー・ロゴ:",
		admin_desktop_banner_logo_hover: "バナーに表示するロゴを変更する場合、ロゴ・ファイルの URL を指定できます。 ただし、ロゴを変更する場合は、カスタム・テーマを使用することをお勧めします。",
		admin_desktop_banner_logo_url_hover: "ロゴ・ファイルの URL を入力します。 ロゴが Web クライアントと同じ Web アプリケーション・サーバー上にある場合は、相対 URL を入力します (例: /mycustomizations/banner_logo.png)。<br><br>幅 72 ピクセルおよび高さ 36 ピクセルより大きいロゴは使用できません。<br><br>ロゴの背景は透明にすることをお勧めします。",
		admin_desktop_banner_background_color: "バナーの背景色:",
		admin_desktop_banner_background_color_hover: "バナーの背景色を変更する場合、カスタム色を指定できます。 ただし、バナーの色を変更する場合は、カスタム・テーマを使用することをお勧めします。",
		admin_desktop_banner_background_color_custom_hover: "アプリケーション・バナーの色を 16 進の色として指定します。",
		admin_desktop_banner_application_name_color: "アプリケーション名のテキスト色:",
		admin_desktop_banner_application_name_color_hover: "アプリケーション名の色を変更する場合、カスタム色を指定できます。 ただし、アプリケーション名の色を変更する場合は、カスタム・テーマを使用することをお勧めします。",
		admin_desktop_banner_application_name_color_custom_hover: "アプリケーション名の色を 16 進の色として指定します。",
		admin_desktop_banner_menu_color: "バナーのアイコンの色:",
		admin_desktop_banner_menu_color_hover: "バナーの背景色を変更する場合、バナー内のアイコンを見やすくするために、アイコンのカラー・スキームの変更が必要になることがあります。 バナー・アイコンを明るい色で表示するか暗い色で表示するかを指定してください。<br><br>ただし、アイコンの色を変更する場合は、カスタム・テーマを使用することをお勧めします。",
		admin_desktop_login_page_content: "ログイン・ページのコンテンツ:",
		admin_desktop_login_page_content_hover: "システム停止の告知や、ユーザーがユーザー名とパスワードに関するヘルプを得られる場所など、追加情報をログイン・ページに表示する場合、表示するコンテンツの URL を指定できます。",
		admin_desktop_login_page_content_url_hover: "ログイン・ページのコンテンツの URL を入力します。 コンテンツが Web クライアントと同じ Web アプリケーション・サーバー上にある場合は、相対 URL を入力します (例: /mycustomizations/login_notices.html)。",
		admin_desktop_password_rules: "パスワード・ルール:",
		admin_desktop_password_rules_hover: "制限された文字や最小文字数など、ユーザーにパスワードの作成に関するガイドラインを提供する場合、パスワード・ルールが記載されているページの URL を指定できます。",
		admin_desktop_password_rules_url_hover: "パスワード・ルール・コンテンツの URL を入力します。 コンテンツが Web クライアントと同じ Web アプリケーション・サーバー上にある場合は、相対 URL を入力します (例: /mycustomizations/passwords.html)。",
		admin_desktop_help_url: "エンド・ユーザー・ヘルプの URL:",
		admin_desktop_help_url_hover: "IBM Content Navigator に付属しているヘルプを使用するか、または、次のいずれかを行ってカスタム・ヘルプ・コンテンツにユーザーをリダイレクトします。<br><br><ul><li>カスタム・ヘルプ・システムへの誘導</li><li>IBM Content Navigator と一緒に配備されている IBM Knowledge Center のインスタンスにヘルプを追加します。</li></ul>",
		admin_desktop_help_url_url_hover: "カスタム・ヘルプ・システムの URL を入力します。 指定した URL の末尾に、IBM Content Navigator によって、index.jsp?content=/com.ibm.usingeuc.doc/ およびファイル名が付加されます。  インターフェースで「詳細を表示」リンクが動作するには、ヘルプ・システムで、統合エンド・ユーザー・ヘルプと同じファイル名を使用する必要があります。 ",
		admin_desktop_deprecated_appearance_title: "非推奨の設定",
		admin_desktop_deprecated_appearance_instructions: "カスタムのテーマを使用する場合、これらの設定はカスタムのテーマでオーバーライドされます。 これらの設定は、カスタムのテーマにマイグレーションする必要があります。これを行うと、このセクションで設定するより詳細なスタイル付けを使用できます。 さらに、カスタムのテーマは複数のデスクトップで使用できます。",

		admin_desktop_plugins_title: "このデスクトップのプラグインを有効または無効にします。",
		admin_desktop_plugins_enable_all_plugins: "このデスクトップで使用するために、デプロイされたすべてのプラグインを有効にする",
		admin_desktop_plugins_select_plugins: "このデスクトップで使用するために、デプロイされたプラグインを選択して有効にする",
		admin_desktop_plugins_select_plugin: "プラグインの選択",

		admin_desktop_layout_features: "表示する機能:",
		admin_desktop_layout_features_hover: "ユーザーがこのデスクトップからアクセスできる機能を選択します。 機能はリストされている順番で表示されます。<br><br>機能を選択する場合、デスクトップ内の機能の動作の一部 (この機能に対して選択されるデフォルト・リポジトリーなど) をカスタマイズできます。",
		admin_desktop_layout_default_repository: "デフォルト・リポジトリー:",
		admin_desktop_layout_default_repository_layout_hover: "ユーザーがこの機能を開いたときにデフォルトで選択されるリポジトリーを指定します。",
		admin_desktop_layout_document_thumbnails: "ドキュメントのサムネイル:",
		admin_desktop_layout_document_thumbnails_hover: "「ドキュメント情報」ペインにドキュメントのサムネイルを表示するかどうかを指定します。<br><br>サムネールを表示すると、Web クライアントのパフォーマンスが低下する可能性があります。",
		admin_desktop_layout_show_filmstrip_view: "フィルムストリップ・ビュー:",
		admin_desktop_layout_show_filmstrip_view_hover: "ユーザーがコンテンツ・リスト表示をフィルムストリップ・ビューに切り替えることができるようにするかどうかを指定します。<br><br>フィルムストリップ・ビューは、ユーザーが選択する各ドキュメントのプレビューを生成します。 ただし、フィルムストリップ・ビューを使用すると、Web クライアントのパフォーマンスが低下する可能性があります。 さらに、ドキュメントのプレビューを表示する場合は、HTML 変換ビューアーを構成する必要があります。",
		admin_enabled: "有効化",
		admin_disabled: "無効化",
		admin_include: "含める",
		admin_exclude: "除外する",
		admin_layout_teamspaces_default_repository: "チームスペース:",
		admin_layout_entry_templates_default_repository: "エントリー・テンプレート:",
		admin_layout_other_features_default_repository: "検索および参照:",
		admin_layout_work_default_repository: "作業:",
		admin_layout_default_feature: "デフォルトの機能:",
		admin_default_category_placeholder: "機能の選択",
		admin_layout_default_feature_hover: "ユーザーがこのデスクトップにログインしたときに表示される機能を指定します。",
		admin_layout_default_feature_warning: "デフォルトの機能を変更すると、アプリケーションのロードに要する時間に影響が及ぶ可能性があります。",
		admin_layout_feature_list_header: "機能",
		admin_layout_show_statusbar: "ステータス・バー:",
		admin_layout_show_statusbar_hover: "デスクトップの下部にステータス・バーを表示するかどうかを指定します。<br><br>ステータス・バーを非表示にすると、ユーザーは、以下のような、エラー以外のイベントに関する情報を参照できません。<ul><li>リポジトリーにドキュメントが追加された。</li><li>検索で 59 個のドキュメントが返された。</li></ul>",
		admin_layout_show_magazineview: "マガジン・ビュー:",
		admin_layout_show_magazineview_hover: "ユーザーがコンテンツ・リスト表示をマガジン・ビューに切り替えられるようにするかどうかを指定します。<br><br>マガジン・ビューでは、コンテンツ・リスト内の各項目の高さが増加するため、同時にコンテンツ・リストに表示できるアイテムの数が減少します。",
		admin_layout_show_detailsview: "詳細ビュー:",
		admin_layout_show_detailsview_hover: "ユーザーがコンテンツ・リスト表示を詳細ビューに切り替えられるようにするかどうかを指定します。<br><br>詳細ビューは、コンテンツ・リストに表示できる行の数を最大化します。",
		admin_feature_config_docinfopane_label: "ドキュメント情報ペイン:",
		admin_feature_config_docinfopane_hoverhelp: "ユーザーがこの機能のドキュメント情報ペインにアクセスできるかどうかを指定します。",
		admin_feature_config_docinfopane_default_label: "デフォルトの動作:",
		admin_feature_config_docinfopane_expanded: "展開",
		admin_feature_config_docinfopane_collapsed: "省略",
		admin_feature_config_docinfopane_expand_on_select: "アイテムの選択時に展開",
		admin_layout_features_title: "デスクトップの機能",
		admin_layout_features_instructions: "ユーザーがこのデスクトップからアクセスできる機能を指定します。  さらに、デスクトップに含まれている各機能の動作をカスタマイズできます。",
		admin_layout_components_title: "追加のデスクトップ・コンポーネント",
		admin_layout_components_instructions: "インターフェースの簡素化が必要な場合や、Web クライアントのパフォーマンスを向上させたい場合は、デスクトップのコンポーネントの一部を無効にすることができます。",
		admin_layout_featureconfig_instructions: "構成する機能の選択",
		admin_layout_featureconfig_no_configuration: "構成可能な機能がありません。",
		admin_layout_featureconfig_label: "機能 ${0} の構成",
		admin_layout_featureconfig_title: "機能の構成",
		admin_layout_featureconfig_taskManagerURL: "この機能を使用するには、タスク・マネージャー・サービスに接続するように IBM Content Navigator を有効にして構成する必要があります。 この管理ツールの<b>「設定」</b>セクションで、タスク・マネージャー・サービスを有効にします。",
		admin_feature_config_show_my_checkouts_label: "「マイ・チェックアウト」ペイン:",
		admin_feature_config_show_my_checkouts_hoverhelp: "「マイ・チェックアウト」ペインでは、ユーザーは特定のリポジトリーでチェックアウトしたすべてのアイテムの検索を実行することができます。 ユーザーが「ホーム」機能から「マイ・チェックアウト」ペインにアクセスできるかどうかを指定します。<br/><br/><b>制約事項:</b> この機能には、このデスクトップに関連付けられている少なくとも 1 つの IBM Content Manager、IBM FileNet P8、または OASIS CMIS リポジトリーが必要です。",

		admin_feature_config_default_repository_icon_text: "デフォルト・リポジトリー",
		admin_show: "表示",
		admin_hide: "非表示",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "管理デスクトップから管理機能を削除することはできません",
		admin_warning_label: "警告:",
		admin_layout_show_globaltoolbar: "グローバル・ツールバー:",
		admin_layout_show_globaltoolbar_hover: "デスクトップの上部にあるバナーにツールバーを表示するかどうかを指定します。<br><br>グローバル・ツールバーには、ユーザーがリポジトリーにドキュメント、フォルダー、および保留を追加できるようにするアクションが含まれています。 使用可能なアクションは、ユーザーが接続しているリポジトリーによって異なります。",
		admin_interface_text_name_label: "ラベル・タイプ",

		admin_interface_text_label_description: "Web クライアントの特定の領域に表示されるテキストをカスタマイズできます。 ラベルは、構成内のすべてのリポジトリーおよびデスクトップで表示されます。 インターフェース内に表示するテキストを「現在のラベル」フィールドに入力します。<br><br><b>重要:</b> ラベルに対して行う変更は、管理ツールでは表示されません。",
		admin_interface_text_label_action: "アクション・ラベル",
		admin_interface_text_label_action_description: "アクション・ラベルは、Web クライアント全体を通じて、ボタンおよびメニューに表示されます。 リポジトリーのタイプごとに、異なるアクション・ラベルを定義できます。",
		admin_interface_text_label_application: "アプリケーション・ラベル",
		admin_interface_text_label_application_description: "アプリケーション・ラベルは、Web クライアント全体にわたって表示されます。",
		admin_interface_text_label_system: "システム・プロパティー・ラベル",
		admin_interface_text_label_system_description: "表示されるシステム・プロパティーは、リポジトリーごとに異なります。 リポジトリー内のドキュメントおよびフォルダーに関連付けられているシステム・プロパティーに対して表示されるラベルをカスタマイズできます。",
		admin_interface_text_label_desktop: "デスクトップ・ラベル",
		admin_interface_text_label_desktop_description: "デスクトップのアプリケーションの名前をカスタマイズした場合、英語以外の他の言語でもその名前をカスタマイズできます。 デスクトップにある IBM FileNet P8 アプリケーション・スペースの名前をカスタマイズすることも可能です。",

		admin_interface_text_system_label: "システム・ラベル",
		admin_interface_text_current_label: "現在のラベル",
		admin_interface_text_default_label_heading: "デフォルト・ラベル",
		admin_interface_text_default_label: "デフォルト・ラベル:",
		admin_interface_text_displayed_in_label: "表示対象",
		admin_interface_text_displayed_in_document_folder: "ドキュメントおよびフォルダー",
		admin_interface_text_displayed_in_document: "ドキュメント",
		admin_interface_text_displayed_in_folder: "フォルダー",
		admin_interface_text_displayed_in_admin_application_space: "アプリケーション・スペース・ラベル",
		admin_interface_text_displayed_in_desktop: "モバイル用の機能ラベル",
		admin_interface_text_displayed_in_admin_application_name: "アプリケーション名",

		admin_new_desktop: "新規デスクトップ",
		admin_new_repository: "新規リポジトリー",
		admin_new_menu: "新規メニュー",
		admin_new_viewer_mapping: "新規ビューアー・マップ",
		admin_new_mapping_label: "新規マッピング",
		admin_new_icon_mapping: "新規アイコン・マッピング",
		admin_viewer_mapping_list_instructions: "Web クライアントがさまざまなタイプのコンテンツを表示するために使用するビューアーを構成できます。 ビューアー・マップにより、使用する各ビューアーに関連付ける MIME タイプを定義します。 デスクトップごとに異なるビューアーを使用する場合、複数のビューアー・マップを作成できます。",
		admin_viewer_mapping_instructions: "ファイルを開くために使用するビューアーを指定します。 カスタム・ビューアーを使用する場合、そのビューアーをビューアー・マップに追加する前に、プラグインとして統合する必要があります。<br><br><b>重要:</b> ユーザーがドキュメントを開くと、Web クライアントはビューアー・マッピングのリストを検索して、ユーザーが実行中のオペレーティング・システムと、ユーザーが接続しているリポジトリーに基づいたドキュメントを開くことのできる最初のビューアーを検出します。 <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "新規プラグイン",
		admin_menu_list_instructions: "ユーザーに対して使用可能にするアクションを制御するために、カスタマイズしたツールバーおよびコンテキスト・メニューを作成できます。 デフォルトのメニューは編集できませんが、既存のメニューのコピーを作成することにより、使用可能なアクションの制限、またはプラグインで定義されているカスタム・アクションの追加を行うことができます。<br><br>新しいタイプのメニューを作成する場合、プラグインでメニューを定義する必要があります。",
		admin_menu_id_hover: "ID は一意である必要があり、メニューを保存した後で ID を変更することはできません。<br><br>ID に使用できるのは英数字だけです。大/小文字が区別されます。",
		admin_menu_id_disabled_hover: "メニュー ID は変更できません。 別の ID を使用する場合は、新規メニューを作成する必要があります。",
		admin_menu_default_instructions: "このメニューは、デフォルトのメニューのため編集できません。 このメニューを編集する場合、メニューのコピーを作成する必要があります。",
		admin_menu_toolbar_instructions: "このツールバーで使用可能なアクションの制限、またはプラグインで定義されているカスタム・アクションの追加ができます。 ツールバーに区切り記号を追加することで、アクションを整理することもできます。",
		admin_menu_toolbar_custom_instructions: "このツールバーは、プラグインによって定義されます。 このツールバーを編集する場合、プラグインを更新するか、ツールバーのコピーを作成する必要があります。",
		admin_menu_context_menu_instructions: "このコンテキスト・メニューで使用可能なアクションの制限、またはプラグインで定義されているカスタム・アクションの追加ができます。 コンテキスト・メニューに区切り記号とサブメニューを追加することで、アクションを整理することもできます。",
		admin_menu_context_menu_custom_instructions: "このコンテキスト・メニューは、プラグインによって定義されます。 このコンテキスト・メニューを編集する場合、プラグインを更新するか、コンテキスト・メニューのコピーを作成する必要があります。",
		admin_desktop_list_instructions: "複数のデスクトップを作成して、各ユーザーに、それらのユーザーが必要とするコンテンツへのアクセス権限を付与できます。 例えば、ユーザーにコンテンツの検索のみを許可するデスクトップや、ユーザーに単一のリポジトリーへのアクセス権限を付与するデスクトップを作成できます。 ",
		admin_plugin_updated: "選択されたプラグインの構成が変更されました。 変更を有効にするにはブラウザーをリフレッシュする必要があります。",
		admin_repository_ci_heading: "Content Integrator リポジトリー: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager リポジトリー: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager リポジトリー: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand リポジトリー: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) リポジトリー: <b>${0}</b>",
		admin_repository_box_heading: "Box リポジトリー: <b>${0}</b>",
		admin_repository_generic_heading: "リポジトリー: <b>${0}</b>",

		admin_delete_confirmation_desktops: "選択したデスクトップを削除しますか? \n${0} 個のデスクトップが選択されています。",
		admin_delete_confirmation_menus: "選択したメニューを削除しますか? \n${0} 個のメニューが選択されています。",
		admin_delete_confirmation_repositories: "選択したリポジトリーを削除しますか? \n${0} 個のリポジトリーが選択されています。",
		admin_delete_confirmation_viewer_mappings: "選択したビューアー・マップを削除しますか?  ${0} 個のマップが選択されています。",
		admin_delete_confirmation_icon_mappings: "選択したアイコン構成を削除しますか? \n${0} 個のアイコン構成が選択されています。",
		admin_delete_confirmation_plugins: "選択したプラグインを削除しますか? \n${0} 個のプラグインが選択されています。",
		admin_delete_confirmation: "選択したアイテムを削除しますか? \n${0} 個のアイテムが選択されています。",

		admin_viewer_mapping_id_hover: "ID は一意である必要があり、ビューアー・マップを保存した後で ID を変更することはできません。<br><br>ID に使用できるのは英数字だけです。大/小文字が区別されます。",
		admin_viewer_mapping_id_disabled_hover: "ビューアー・マップ ID は変更できません。 別の ID を使用する場合は、新規ビューアー・マップを作成する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "デフォルトのデスクトップを削除できません。",

		admin_desktop_heading: "デスクトップ: <b>${0}</b>",
		admin_menu_toolbar_heading: "ツールバー: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "カスタム・ツールバー: <b>${0}</b>",
		admin_menu_context_menu_heading: "コンテキスト・メニュー: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "カスタム・コンテキスト・メニュー: <b>${0}</b>",
		admin_plugin_heading: "プラグイン: <b>${0}</b>",
		admin_plugin_instructions: "プラグインは、JAR ファイルまたはコンパイル済みクラス・ファイルの形で提供できます。<br/><br/><b>重要:</b> IBM Content Navigator Web アプリケーション・サーバーが、ローカル・ファイル・システム上で、または URL を通じて、プラグイン・ファイルにアクセスできる必要があります。",
		admin_plugin_list_instructions: "管理ツールを使用して、Web クライアント用のプラグインを登録してください。 プラグインに対して追加の構成が必要な場合には、プラグインの登録後に構成パラメーターが表示されます。<br /><br /><b>重要:</b> 管理ツールの別の領域で参照されているプラグインを編集する場合 (例: メニューなど)、プラグインの動作に問題が発生する場合があります。 さらに、プラグインはリストされている順番で起動されます。 あるプラグインを別のプラグインより先に実行する必要がある場合、実行しなければならない順序でプラグインをリストするようにしてください。",
		admin_plugin_cannot_delete: "選択されたプラグインは、他のプラグインから依存されているものがあるため削除できません。<br/>選択されたプラグイン: ${0}<br/>依存プラグイン: ${1}",
		admin_plugin_cannot_disable: "選択されたプラグインは、他のプラグインから依存されているものがあるため使用不可にできません。<br/>選択されたプラグイン: ${0}<br/>依存プラグイン: ${1}",
		admin_plugin_cannot_add: "依存しているプラグインがないか、使用可能ではないためプラグインを追加できません。 欠落しているか無効なプラグイン: ${0}",
		admin_plugin_cannot_enable: "依存しているプラグインがないか、使用可能ではないため選択したプラグインを使用可能にできません。<br/>選択されたプラグイン: ${0}<br/>欠落しているか無効なプラグイン: ${1}",
		admin_plugin_save_order: "順序の保存",
		admin_plugin_load: "ロード",
		admin_plugin_load_hover: "プラグインの URL を指定します",
		admin_plugin_file_hover: "プラグインの JAR ファイルがローカル・ファイル・システム上にある場合は、プラグイン・ファイルの完全修飾パスまたは URL を入力できます。 プラグインの JAR ファイルがリモート・サーバー上にある場合は、プラグイン・ファイルの URL を入力する必要があります。",
		admin_plugin_classfolderpath_hover: "コンパイル済みクラス・ファイルは、IBM Content Navigator Web アプリケーション・サーバー上に存在している必要があります。<br/><br/>プラグイン・クラスがコンパイルおよび生成されているフォルダーの完全修飾パスを入力します。<br/><br/>このパスには、プラグイン・クラスのパッケージ名が含まれないようにする必要があります。 例えば、Windows におけるサンプル・プラグイン・クラスのデフォルトのパスは、C:\\Program Files (x86)\\IBM\\ECMClient\\bin です。",
		admin_plugin_classfoldername_hover: "プラグイン・クラスとしてロードおよび呼び出しの必要がある、クラス・ファイル内の Java クラスの完全名を入力します。<br/>例えば、サンプル・プラグインのクラス名は、com.ibm.ecm.extension.sample.<br/>SamplePlugin です。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "プラグイン JAR ファイルが、指定した URL に見つかりません。 JAR ファイルが Web アプリケーション・サーバーにあること、および URL とファイル名が正しいことを確認してください。",
		admin_plugin_for_repository_not_loaded: "このリポジトリーは編集できません。 このタイプのリポジトリーを定義およびサポートするプラグインがロードされていません。 「プラグイン」タブで、プラグインを編集し、そのプラグインが正しく構成されていること、およびロードされていることを確認してください。",
		admin_plugin_repository_types: "リポジトリー・タイプ:",
		admin_plugin_viewers: "ビューアー:",
		admin_plugin_features: "機能:",
		admin_plugin_layouts: "レイアウト:",
		admin_plugin_not_available: "使用不可",
		admin_plugin_config_params: "構成パラメーター:",
		admin_viewer_def_heading: "ビューアー・マップ: <b>${0}</b>",
		admin_users_and_groups: "ユーザーおよびグループ",
		admin_general: "一般",
		admin_logging: "ロギング",
		admin_authentication: "認証",		
		admin_rolebase_role: "ロール:",
		admin_settings_logging_instructions: "ロギングを使用して、Web クライアントに関する問題をトラブルシューティングできます。 特定の Java クラス内、または特定のユーザーに対して問題が発生していることが判明している場合、ロギングを絞り込むことができます。 エラーの情報は、Web アプリケーション・サーバーのエラー・ログ・ファイルに書き込まれます。",
		admin_settings_logging_instructions2: "<b>デバッグ・ロギングの設定</b><br />特定のクライアント・ホスト・マシンまたはユーザーに対して問題が発生していることが判明している場合、デバッグ・ロギングの対象をそのマシンまたはユーザーに絞り込むことができます。 システムのパフォーマンスに大きな影響を与えることなく、実稼働環境でデバッグ情報を収集できます。<br /><br /><b>重要:</b> クライアント・ホスト・マシンまたはユーザーを指定する場合、この設定により他のロギング設定が上書きされます。 必要な情報を収集したら、このオプションを<b>「なし」</b>に設定して、環境に対する標準的なロギングを再開してください。",
		admin_settings_export_config_hover: "IBM Support Assistant Data Collector で使用するために、現在のシステム構成情報をファイルにエクスポートします。 このファイルは、user.home Java システム・プロパティーで定義されている場所に保存されます。",
		admin_logging_level: "アプリケーション・レベルのロギング:",
		admin_logging_level_hover: "ロギング・レベルは、サーバーに保存される情報の量に影響します。 <b>「エラー」</b>を選択すると、収集されるロギング情報は最も少量になります。 <b>「デバッグ」</b>を選択すると、収集される情報は最も多量になります。<br /><br />IBM ソフトウェア・サポートの指示がない限り、実稼働環境では<b>「デバッグ」</b>は指定しないでください。",
		admin_logging_level_0: "ロギングなし",
		admin_logging_level_1: "エラー",
		admin_logging_level_2: "警告",
		admin_logging_level_3: "情報",
		admin_logging_level_4: "デバッグ",
		admin_logging_classes: "Java クラス・レベルのロギング:",
		admin_logging_classes_hover: "デフォルトでは、すべての Java クラスとパッケージが Web アプリケーション・サーバーのエラー・ログに含まれます。 ただし、ロギングに含めたり、ロギングから除外したりするクラスやパッケージを指定できます。 Web アプリケーション・サーバーのエラー・ログを使用して、含めるか、除外する対象のクラスを決定できます。<br><br>特定のクラスで問題が発生していることが判明している場合、ログ・ファイルにそのクラスを含めるように特定して指定できます。 エラー・ログにクラスを含めると、他のすべてのクラスがログ・ファイルから除外されます。<br><br>クラスで問題が発生していないことが判明していて、ログ・ファイルのサイズを削減する必要がある場合、ログ・ファイルからそのクラスを除外できます。",
		admin_logging_classes_include: "含める",
		admin_logging_classes_include_all: "すべてのクラス",
		admin_logging_classes_include_specified: "特定のクラス",
		admin_logging_classes_include_specified_msg: "含めるクラスを指定します。",
		admin_logging_classes_exclude: "除外する",
		admin_logging_classes_exclude_none: "なし",
		admin_logging_classes_exclude_specified: "特定のクラス",
		admin_logging_classes_exclude_specified_msg: "除外するクラスを指定します。",
		admin_logging_debug: "デバッグ・ロギング対象:",
		admin_logging_debug_hover: "<b>重要:</b> クライアント・ホスト・マシンの IP アドレスまたはユーザーを指定する前に、Web アプリケーション・サーバーのログ・ファイルを確認してください。 指定する値は、ログ・ファイルに示されている値と一致させる必要があります。",
		admin_logging_debug_none: "なし (デフォルト)",
		admin_logging_debug_host: "クライアント・ホスト・マシン (IP アドレス)",
		admin_logging_debug_host_msg: "デバッグ情報をログに記録する 1 つ以上のクライアント・マシンの IP アドレスを指定します。 コンマを使用して IP アドレスを区切ります。<br /><br /><b>重要:</b> IP アドレスを指定する前に、Web アプリケーション・サーバーのログ・ファイルを確認してください。 指定する値は、ログ・ファイルに示されている値と一致させる必要があります。",
		admin_logging_debug_user: "ユーザー",
		admin_logging_debug_user_msg: "デバッグ情報をログに記録する 1 人以上のユーザーのユーザー名を指定します。 コンマを使用してユーザー名を区切ります。<br /><br /><b>重要:</b> ユーザー名を指定する前に、Web アプリケーション・サーバーのログ・ファイルを確認してください。 指定する値は、ログ・ファイルに示されている値と一致させる必要があります。",

		admin_office_settings_logging_instructions: "ロギングを使用すると、IBM Content Navigator for Microsoft Office に関する問題をトラブルシューティングできます。 特定のクラス内、または特定のユーザーに対して問題が発生していることが判明している場合、ロギング対象を絞り込むことができます。 エラー情報は、IBM Content Navigator for Microsoft Office クライアント・ホスト・マシン上のアプリケーション・ログ・ファイルに書き込まれます。 ",
		admin_office_settings_logging_instructions2: "<b>デバッグ・ロギングの設定</b><br />特定のクライアント・ホスト・マシンまたは IBM Content Navigator for Microsoft Office ユーザーに対して問題が発生していることが判明している場合、デバッグ・ロギングの対象をそのマシンまたはユーザーに絞り込むことができます。 システムのパフォーマンスに大きな影響を与えることなく、実稼働環境でデバッグ情報を収集できます。 <br /><br /><b>重要:</b> クライアント・ホスト・マシンまたはユーザーを指定する場合、この設定により他のロギング設定が上書きされます。 必要な情報を収集したら、このオプションを<b>「なし」</b>に設定して、IBM Content Navigator for Microsoft Office 環境に対する標準的なロギングを再開します。 ",
		admin_office_logging_debug_hover: "<b>重要:</b> クライアント・ホスト・マシンの IP アドレスまたはユーザーを指定する前に、クライアント・マシンのログ・ファイルを確認してください。 指定する値は、ログ・ファイルに示されている値と一致させる必要があります。 ",
		admin_office_logging: "Office のロギング",
		admin_office_logging_classes: "クラス・レベルのロギング:",
		admin_office_logging_classes_hover: "デフォルトでは、すべてのクラスとパッケージが IBM Content Navigator for Microsoft Office のエラー・ログに含まれます。 ただし、ロギングに含めたり、ロギングから除外したりするクラスやパッケージを指定できます。 クライアント・マシンのログを使用して、含めたり除外したりするクラスを決定できます。<br /><br />特定のクラスで問題が発生していることが判明している場合、ログ・ファイルにそのクラスを含めるように特定して指定できます。 エラー・ログにクラスを含めると、他のすべてのクラスがログ・ファイルから除外されます。 <br /><br />クラスで問題が発生していないことが判明していて、ログ・ファイルのサイズを削減する必要がある場合、ログ・ファイルからそのクラスを除外できます。 ",
		admin_office_logging_debug_hover: "<b>重要:</b> クライアント・ホスト・マシンの IP アドレスまたはユーザーを指定する前に、クライアント・マシンのログ・ファイルを確認してください。 指定する値は、ログ・ファイルに示されている値と一致させる必要があります。",
		admin_office_logging_additional_settings: "追加設定:",
		admin_office_logging_additional_settings_hover: "追加設定の指定",
		admin_office_logging_file_size: "ログ・ファイルのサイズ",
		admin_office_logging_file_size_hover: "IBM Content Navigator for Microsoft Office で作成される新規ログ・ファイルのサイズを指定します。 ログ・ファイルが最大サイズに達すると、現在のログの名前が日付 (YYYYMMdd 形式) とファイルの増分数を含めるように変更され (例: ICNExcelAddin-20121116-5.log)、新規ログ・ファイルが作成されます。 ",
		admin_office_logging_show_stacktrace_on_dialogs: "ダイアログにスタック・トレースを表示",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "オプションで、問題解決に役立つスタック・トレース情報をメッセージ・ダイアログに表示できます。 このオプションを有効にしていない場合でも、IBM Content Navigator for Microsoft Office のエラー・ログには常に詳細なスタック・トレース情報が含まれます。 ",

		admin_icon_state_twisty: "状態アイコン",
		admin_icon_state_icon: "状態アイコン",
		admin_icon_state: "状態",
		state_contains_label: "状態の内容",
		admin_icon_state_instructions: "リポジトリーのドキュメント、フォルダー、およびワーク・アイテムの横に表示されるアイコンをカスタマイズできます。<br><br><b>ヒント:</b> 環境内の各リポジトリーに対して状態アイコンを表示するかどうかを指定できます。",
		admin_icon_state_dialog_title: "状態アイコン・マッピング",
		admin_icon_state_dialog_instructions: "選択した状態を、Web クライアントに用意されている事前定義アイコンまたはカスタム・アイコンにマップできます。",

		admin_icon_mapping_twisty: "MIME タイプ・アイコン",
		admin_icon_mapping_dialog_title: "アイコン・マッピング",
		admin_icon_mapping: "アイコン・マッピング",
		admin_icon_mapping_instructions: "MIME タイプのリストを、Web クライアントに用意されている事前定義アイコンまたはカスタム・アイコンにマップできます。",
		admin_icon_mapping_list_instructions: "リポジトリーに保存されるさまざまな MIME タイプに対して表示されるアイコンをカスタマイズできます。 Web クライアントは、アイコンをリストされている順序で使用します。 同じ MIME タイプが複数リストされている場合、その MIME タイプに関連付けられている最初のアイコンが使用されます。",
		admin_icon_mapping_icon_label: "使用するアイコン",
		admin_icon_mapping_file_name: "カスタム・アイコン:",
		admin_icon_mapping_file_name_heading: "カスタム・アイコン",
		admin_icon_mapping_file_name_placeholder: "アイコンの URL を指定します",
		admin_icon_mapping_file_name_hover: "アイコンの URL を入力します。 アイコンが Web クライアントと同じ Web アプリケーション・サーバー上にある場合は、相対 URL を入力します。 例: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "事前定義アイコン:",
		admin_icon_mapping_class_name_heading: "事前定義アイコン",
		admin_icon_mapping_class_name_hover: "Web クライアントに用意されているアイコンを選択します。",
		admin_icon_mapping_class_name_placeholder: "アイコンの選択",

		admin_p8_instructions: "この情報は、Web クライアント用に構成されているすべての  FileNet Content Managerリポジトリーで共有されます。",
		admin_p8_collaboration_config: "オプションの FileNet Collaboration Services 構成",
		admin_p8_collaboration_config_instructions: "FileNet Collaboration Services をご使用の IBM FileNet P8 環境向けに調整する必要がある場合は、これらのパラメーターを構成できます。",
		admin_p8_use_url_incoming: "着信要求の URL を使用して応答 URL を生成:",
		admin_p8_use_url_incoming_hover: "ほとんどの FileNet Collaboration Services 環境では、着信要求の URL を使用して、応答の URL を作成できます。 ご使用の環境が次のいずれかの状況に該当する場合を除き、<b>「はい」</b>を選択します。<ul><li>クライアント・アプリケーションで、強制的に特定の URL から FileNet Collaboration Services  にアクセスする必要がある。<li>プロキシー・サーバーの設定が原因で、FileNet Collaboration Services によって無効な URL が生成される。</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL:",
		admin_p8_use_url_incoming_http_hover: "クライアント・アプリケーションで FileNet Collaboration Services にアクセスするときに使用できる URL を http://FNCSserver:port_number という形式で指定します。",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL:",
		admin_p8_use_url_incoming_https_hover: "FileNet Collaboration Services が SSL を使用するように構成されている場合は、クライアント・アプリケーションで FileNet Collaboration Services にアクセスするときに使用できる HTTPS URL を https://FNCSserver:port_number という形式で指定します。",
		admin_p8_hide_email_addresses: "サーバー応答のユーザーの E メール・アドレスを非表示にする:",
		admin_p8_hide_email_addresses_hover: "プライバシー・ポリシーに準拠する必要がある場合、サーバー応答のユーザーの E メール・アドレスを非表示にすることができます。 例えば、ドキュメントを作成または編集したユーザーに関するドキュメントと情報のリストがサーバーから返された場合に、ユーザーの E メール・アドレスのリストを非表示にすることができます。",

		admin_p8_mask_user_ids: "ログ・ファイル内のユーザー ID のマスク:",
		admin_p8_mask_user_ids_hover: "プライバシー・ポリシーに準拠する必要がある場合、FileNet Collaboration Services のログ・ファイル内のユーザー名を非表示にすることができます。 このオプションを有効にすると、ユーザー名がハッシュ値に置換されます。 これにより、ユーザーの名前やアクティビティー・レコードを漏えいすることなく、サポートのために IBM などの外部企業にログ・ファイルを提供できるようになります。",

		admin_p8_soft_delete: "削除されたファイルをリカバリー bin に移動:",
		admin_p8_soft_delete_hover: "ユーザーがアイテムを削除する際に、アイテムをリポジトリーから削除するのではなく、リカバリー bin に移動します。 アイテムは、パージされるまでリカバリー bin 内に残ります。 ターゲット・リポジトリーでリカバリー bin がサポートされていない場合、この設定は無視されます。<br><br><b>制約事項:</b> リカバリー bin は、IBM FileNet P8 バージョン 5.2 以降でサポートされ、Social Collaboration Base Extensions アドオンを必要とします。",

		admin_p8_download: "コンテンツ・ダウンロード HTTP キャッシュ構成",
		admin_p8_download_instructions: "ご使用の IBM FileNet Content Manager リポジトリーに大きなファイルが多数含まれている場合は、FileNet Collaboration Services で大きなファイルのコンテンツ要求を専用 Web サーバーに安全にリダイレクトできるように、コンテンツ・ダウンロード HTTP キャッシュ (CDHC) を構成できます。<br/><br/>この機能には、IBM HTTP Server が必要です。 さらに、IBM HTTP Server の httpd.conf ファイルを更新する必要があります。",
		admin_p8_download_cache: "コンテンツ・ダウンロード HTTP キャッシュ:",
		admin_p8_download_cache_hover: "環境内のすべての IBM FileNet Content Manager リポジトリーに対してコンテンツ・ダウンロード HTTP キャッシュ (CDHC) を有効にするかどうかを指定します。 キャッシュされるファイルの最小ファイル・サイズを指定できます。",
		admin_p8_download_cache_folder: "完全修飾キャッシュ・ディレクトリー:",
		admin_p8_download_cache_folder_hover: "キャッシュされるファイルを保管するディレクトリーの絶対パスを指定します。 このディレクトリーは、ファイル・システムとして FileNet Collaboration Services と IBM HTTP Server に表示される限り、共有ネットワーク・ディレクトリーなどの任意のオペレーティング・システムやデバイス上に置くことができます。",
		admin_p8_download_cache_url: "キャッシュ・ロケーションの別名:",
		admin_p8_download_cache_url_hover: "FileNet Collaboration Services URL からキャッシュ・ディレクトリーを指すために使用する別名を指定します。 別名は、/alias という形式 (例えば /cdhc) で指定します。<br/><br/>URL に /cdhc が含まれていると、アプリケーションは完全修飾キャッシュ・ディレクトリーにリダイレクトされます。",
		admin_p8_download_cache_max_files: "キャッシュされるファイルの最大数:",
		admin_p8_download_cache_max_files_hover: "ファイルが最大数に達した場合は、最も古いファイルがキャッシュから削除されます。<br><br>キャッシュするファイルの最大数とキャッシュの最大サイズを指定すると、2 つの条件のうち低い方が満たされたときに、最も古いファイルがキャッシュから削除されます。",
		admin_p8_download_cache_max_size: "最大キャッシュ・サイズ (GB):",
		admin_p8_download_cache_max_size_hover: "最大キャッシュ・サイズに達した場合は、最も古いファイルがキャッシュから削除されます。<br/><br/>キャッシュするファイルの最大数とキャッシュの最大サイズを指定すると、2 つの条件のうち低い方が満たされたときに、最も古いファイルがキャッシュから削除されます。",
		admin_p8_download_cache_cleanup_duration: "最大クリーンアップ所要時間 (秒):",
		admin_p8_download_cache_cleanup_duration_hover: "クリーンアップ操作にかけられる最大時間を指定します。 デフォルトの所要時間は 5 秒です。<br><br>削除の対象になっているが、クリーンアップ操作後もキャッシュ内に残っているファイルは、すべて以後のクリーンアップ操作中に削除されます。",
		admin_p8_download_cache_cleanup_min: "キャッシュのクリーンアップ操作間の最小間隔 (秒):",
		admin_p8_download_cache_cleanup_min_hover: "キャッシュのクリーンアップ操作間で経過する必要がある最小時間を指定します。 デフォルトの時間は 3,600 秒 (1 時間) です。<br><br>キャッシュのクリーンアップ操作は、キャッシュからコンテンツをダウンロードするためのアクティブな要求がある場合にのみ行われます。 要求が毎分着信する場合、クリーンアップ操作は毎時間行われます。 ただし、ダウンロード要求間で 3 時間経過した場合、次のダウンロード要求を受け取るまで、クリーンアップ操作は行われません。",
		admin_p8_download_cache_min_lifetime: "キャッシュの最小時間 (秒):",
		admin_p8_download_cache_min_lifetime_hover: "ファイルを削除する前に、そのファイルがキャッシュに保持される最小時間を指定します。 デフォルトの時間は 3,600 秒 (1 時間) です。<br><br>キャッシュが最大サイズに達したり、含まれているファイルが最大数に達したりした場合であっても、キャッシュ内の最も古いファイルはそのファイルがキャッシュに入れられてから指定の時間が経過するまで削除できません。",
		admin_p8_download_cache_size_threshold: "キャッシュする最小ファイル・サイズ (KB):",
		admin_p8_download_cache_size_threshold_hover: "CDHC を使用してキャッシュする必要があるファイルの最小サイズを指定します。 ファイルが指定のサイズより小さい場合、ファイルは FileNet Collaboration Services がデプロイされている Web アプリケーション・サーバーを介してリダイレクトされます。 デフォルト・サイズは 1,000 KB です。",
		admin_p8_download_guard_header: "ゲートキーピング用の HTTP ヘッダー:",
		admin_p8_download_guard_header_hover: "クライアント・アプリケーションで、IBM HTTP Server 経由で要求がルーティングされない場合、キャッシュされたコンテンツはダウンロードできません。 特定の HTTP ヘッダー (IBM HTTP Server から要求に追加されたもの) を持つ着信要求のみが、キャッシュされたコンテンツにアクセスできるように指定すると、ダウンロードの失敗を防ぐことができます。<br><br>HTTP ヘッダーは、IBM HTTP Server で構成され、IBM HTTP Server 経由でルーティングされるすべての着信要求に存在しています。 要求に HTTP ヘッダーがない場合、コンテンツは、IBM HTTP Serverではなく、Web アプリケーション・サーバー経由でルーティングされます。",
		admin_p8_download_generate_config: "構成の生成",
		admin_p8_download_generate_config_label: "IBM HTTP Server 構成:",
		admin_p8_download_generate_config_label_hover: "CHDC 構成が機能するためには、IBM HTTP Server の httpd.conf ファイルを更新する必要があります。 「構成の生成」をクリックして、httpd.conf ファイルに追加する必要のあるステートメントを生成します。",

		admin_logging_viewone_pro: "ViewONE Professional のロギング:",
		admin_logging_viewone_virtual: "ViewONE Virtual のロギング:",
		admin_logging_viewone_streamer: "Document Streaming Server Module のロギング:",
		admin_logging_viewone_streamer_hover: "Document Streaming Server Module のロギング・オプションは、管理ツールの<b>「Daeja ViewONE」</b>セクションで PDF または TIFF ファイルのストリーミングを有効にした場合にのみ該当します。",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module のロギング:",
		admin_logging_viewone_redaction_hover: "Permanent Redaction Server Module のロギング・オプションは、Daeja ViewONE Professional のリダクション・モジュールを使用する資格がある場合のみ該当します。",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "PDF ファイルのストリーミング:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "リポジトリー内に大きな PDF ドキュメントがある場合は、ドキュメントの内容をストリーミングして、ユーザーがこれらのドキュメントをより迅速に表示できるようにビューアーを有効化できます。 ただし、ご使用の環境でストリーミングが機能しない場合は、ストリーミングを無効化することができます。",
		admin_daeja_viewonepro_stream_tiff_documents: "TIFF ファイルのストリーミング:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "リポジトリー内に大きな TIFF ドキュメントがある場合は、ドキュメントの内容をストリーミングして、ユーザーがこれらのドキュメントをより迅速に表示できるようにビューアーを有効化できます。 ただし、ご使用の環境でストリーミングが機能しない場合は、ストリーミングを無効化することができます。",
		admin_daeja_viewonepro_show_file_buttons: "ファイル・ボタン",
		admin_daeja_viewonepro_show_file_menus: "ファイル・メニュー",
		admin_daeja_viewonepro_enable_file_keys: "ファイル・ホット・キー",
		admin_daeja_viewonepro_file_keys_hover_help: "ユーザーがキーボード・ショートカットを使用して、ファイルのオープンや保存などのファイルの操作を実行できるようにするかどうかを指定します。 特定のホット・キーについて詳しくは、「IBM Daeja ViewONE Parameters Reference Manual」の FileKeys パラメーターの説明を参照してください。",
		admin_daeja_viewonepro_show_print_buttons: "印刷ボタン",
		admin_daeja_viewonepro_show_print_menus: "印刷メニュー",
		admin_daeja_viewonepro_enable_print_keys: "印刷ホット・キー",
		admin_daeja_viewonepro_print_keys_hover_help: "ユーザーがキーボード・ショートカットを使用して、ページの印刷やドキュメントの印刷などのファイルの印刷を実行できるようにするかどうかを指定します。 特定のホット・キーについて詳しくは、「IBM Daeja ViewONE Parameters Reference Manual」の PrintKeys パラメーターの説明を参照してください。",
		admin_daeja_viewonepro_show_invert_buttons: "反転ボタン",
		admin_daeja_viewonepro_annotation_tooltip: "デフォルトのカスタム・アノテーション・ツールチップ:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "カスタム・アノテーションにツールチップがない場合に表示するテキストを入力します。 テキストには置き換え可能なトークンを含めることができます。 例えば、「&lt;creator&gt; がこのアノテーションを &lt;createdateonly&gt; に作成しました」などです。置き換え可能なトークンについては、「IBM Daeja ViewONE Parameters Reference Manual」の customAnnotationsToolTip パラメーターを参照してください。",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "事前定義されたカスタム・ツールチップを使用",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "以下のテキスト・ボックスに示されているシステム定義のカスタム・ツールチップを使用します",
		admin_daeja_viewonepro_help_url: "ヘルプ URL:",
		admin_daeja_viewonepro_help_url_hover_help: "ビューアーのヘルプ・ドキュメントを含む Web ページの URL を指定します。 Web ページは、ビューアーのツールバーにあるヘルプ・ボタンおよびヘルプ・メニューを使って開きます。 URL を指定しない場合、ヘルプ・ボタンとメニュー・アクションは表示されません。",
		admin_daeja_viewonepro_image_stamp_resource_context: "イメージ・スタンプのリソース・コンテキスト:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "ToDo",
		admin_daeja_viewonepro_route_docs: "サポートされないコンテンツをブラウザーに送信する:",
		admin_daeja_viewonepro_route_docs_hover_help: "ユーザーは、サポートされないイメージ・ファイルをブラウザーにルーティングすることでそれらを表示できます。ブラウザーはファイルを表示するために適切なアプリケーションを開きます。 例えば、Microsoft Word ドキュメントを開くには、ブラウザーは Microsoft Word ビューアーを使用します。",
		admin_daeja_viewonepro_scale: "イメージの自動調整:",
		admin_daeja_viewonepro_scale_best: "最適化",
		admin_daeja_viewonepro_scale_ftow: "幅に合わせる",
		admin_daeja_viewonepro_scale_ftoh: "高さに合わせる",
		admin_daeja_viewonepro_enable_hotkeys: "ホット・キーを使用可能にする:",
		admin_daeja_viewonepro_show_features: "ボタンおよびメニューを表示する:",
		admin_daeja_custom_settings: "追加設定:",
		admin_daeja_custom_settings_hover_help: "パラメーター名と値を指定することにより別のパラメーターを追加することができます。 例えば、イメージが表示域よりも大きいサイズにスケール調整される場合にスクロール・バーを表示する場合、「scrollbars」および「true」を指定できます。 パラメーターの名前および値については、「IBM Daeja ViewONE Parameters Reference Manual」を参照してください。",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "デフォルトのカスタム・アノテーション・ツールチップ:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "カスタム・アノテーションにツールチップがない場合に表示するテキストを入力します。 テキストには置き換え可能なトークンを含めることができます。 例えば、「&lt;creator&gt; がこのアノテーションを &lt;createdateonly&gt; に作成しました」などです。置き換え可能なトークンについては、「IBM Daeja ViewONE Parameters Reference Manual」の customAnnotationsToolTip パラメーターを参照してください。",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "事前定義されたカスタム・ツールチップを使用",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "以下のテキスト・ボックスに示されているシステム定義のカスタム・ツールチップを使用します",
		admin_daeja_virtual_image_stamp_resource_context: "イメージ・スタンプのリソース・コンテキスト:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "ToDo",
		admin_daeja_virtual_license_path:"ライセンス・ファイル・パス:",
		admin_daeja_virtual_license_path_hover_help:"lic-server-virtual.v1 および lic-server.v1 ライセンス・ファイルが含まれているディレクトリーの完全修飾パスを指定します。",
		admin_default_license_path:"デフォルト・ライセンス・ファイル・パスを使用する",
		admin_license_path_specified:"カスタム・ライセンス・ファイル・パスを使用する",

		admin_daeja_streamer: "サーバー",
		admin_daeja_streamer_cache_root: "キャッシュ・ディレクトリー:",
		admin_daeja_streamer_cache_root_hover_help: "アクセスを高速化するために、キャッシュされるファイルを保管するディレクトリーの絶対パスを指定します。 このディレクトリーは、ファイル・システムとして IBM Content Navigator と IBM HTTP Server に表示される限り、ネットワーク・ディレクトリーなどの任意のオペレーティング・システムやデバイス上に置くことができます。パフォーマンスを向上させるにはローカル・ディレクトリーを使用してください。",
		admin_daeja_streamer_settings: "追加設定:",
		admin_daeja_streamer_settings_hover_help: "パラメーター名と値を指定することにより別のパラメーターを追加することができます。 例えば、「cookieAllowedDomainList」とホスト・サーバーのコンマ区切りリストを指定できます。  パラメーターの名前および値については、「IBM Daeja ViewONE Parameters Reference Manual」を参照してください。",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "設定:",
		admin_daeja_redaction_settings_hover_help: "パラメーター名と値を指定することにより別のパラメーターを追加することができます。 例えば、「burnIncrementalAnnotations」および「true」を指定できます。 パラメーターの名前および値については、「IBM Daeja ViewONE Parameters Reference Manual」を参照してください。",

		admin_daeja_setting_dialog_title_new: "新規設定",
		admin_daeja_setting_dialog_title_edit: "設定の編集",
		admin_daeja_setting_dialog_hover_help: "パラメーター名と値を指定することにより別のパラメーターを追加します。 例えば、イメージが表示域よりも大きいサイズにスケール調整される場合にスクロール・バーを表示するには、「scrollbars」および「true」を指定できます。",
		admin_daeja_setting_dialog_field_hover_help: "パラメーターの名前および値については、「Daeja ViewONE Parameter Reference Manual」を参照してください。",

		admin_daeja_logging: "Daeja ViewONE のロギング",
		admin_daeja_logging_trace: "トレース・ロギングを有効にする",
		admin_daeja_logging_trace_net: "ネットワーク・ロギングを有効にする",
		admin_daeja_logging_trace_annotations: "アノテーション・ロギングを有効にする",
		admin_daeja_logging_log_file: "ログ・ファイル:",
		admin_daeja_logging_instructions: "ロギングを使用すると、Daeja ViewONE Professional および Daeja ViewONE Virtual に関する問題をトラブルシューティングできます。 特定の機能に対して問題が発生していることが判明している場合、ロギングの対象をその機能に絞り込むことができます。",

		admin_v1pro_logging_trace_hover: "この設定を使用してビューアーの一般的な問題に関するトラブルシューティングを行います。<br><br>ロギング情報は、クライアント・マシンの Java コンソールに書き込まれます。 Java コンソールには、ご使用のオペレーティング・システムのコントロール・パネル (Windows) またはシステム環境設定 (Mac) からアクセスできます。",
		admin_v1pro_logging_trace_net_hover: "この設定は、次の問題のトラブルシューティングに使用します。<ul><li>サーバー接続の問題</li><li>MIME タイプの問題</li><li>ファイルが長すぎる問題</li></ul>さらに、ネットワーク・トレース・ロギングを使用して、Daeja ViewONE Professional の使用中に遅延が発生する場所を判別できます。<br><br>ロギング情報は、クライアント・マシンの Java コンソールに書き込まれます。 Java コンソールには、ご使用のオペレーティング・システムのコントロール・パネル (Windows) またはシステム環境設定 (Mac) からアクセスできます。",
		admin_v1pro_logging_trace_annotations_hover: "この設定は、アノテーションの作成、保存、またはロードに関する問題のトラブルシューティングに使用します。<br><br>ロギング情報は、クライアント・マシンの Java コンソールに書き込まれます。 Java コンソールには、ご使用のオペレーティング・システムのコントロール・パネル (Windows) またはシステム環境設定 (Mac) からアクセスできます。",

		admin_virtual_logging_trace_hover: "この設定を使用してビューアーの一般的な問題に関するトラブルシューティングを行います。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの virtual.log ファイルに書き込まれます。",
		admin_virtual_logging_trace_net_hover: "この設定は、次の問題のトラブルシューティングに使用します。<ul><li>サーバー接続の問題</li><li>MIME タイプの問題</li><li>ファイルが長すぎる問題</li></ul>さらに、ネットワーク・トレース・ロギングを使用して、Daeja ViewONE Virtual の使用中に遅延が発生する場所を判別できます。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの virtual.log ファイルに書き込まれます。",
		admin_virtual_logging_trace_annotations_hover: "この設定は、アノテーションの作成、保存、またはロードに関する問題のトラブルシューティングに使用します。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの virtual.log ファイルに書き込まれます。",
		admin_virtual_logging_log_file_hover: "ビューアーのロギングを有効にする場合、ロギング情報を保管するログ・ファイルの完全修飾パスと名前を指定する必要があります。  ログ・ファイル名は virtual.log にすることが推奨されます。",

		admin_streamer_logging_trace_hover: "この設定は、Document Streaming Server Module の一般的な問題のトラブルシューティングに使用します。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの streamer.log ファイルに書き込まれます。",
		admin_streamer_logging_trace_net_hover: "この設定は、次の問題のトラブルシューティングに使用します。<ul><li>サーバー接続の問題</li><li>特定の MIME タイプに関する問題</li><li>ファイルが長すぎる問題</li></ul>さらに、ネットワーク・トレース・ロギングを使用して、Document Streaming Server Module の使用中に遅延が発生する場所を判別できます。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの streamer.log ファイルに書き込まれます。",
		admin_streamer_logging_log_file_hover: "Document Streaming Server Module のロギングを有効にする場合、ロギング情報を保管するログ・ファイルの完全修飾パスと名前を指定する必要があります。  ログ・ファイル名は streamer.log にすることが推奨されます。",

		admin_redaction_logging_trace_hover: "この設定は、Permanent Redaction Server Module の一般的な問題のトラブルシューティングに使用します。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの redacttofile.log ファイルに書き込まれます。",
		admin_redaction_logging_trace_net_hover: "この設定は、次の問題のトラブルシューティングに使用します。<ul><li>サーバー接続の問題</li><li>特定の MIME タイプに関する問題</li><li>ファイルが長すぎる問題</li></ul>さらに、ネットワーク・トレース・ロギングを使用して、Permanent Redaction Server Module の使用中に遅延が発生する場所を判別できます。<br><br>デフォルトでは、ロギング情報は IBM Content Navigator インストール・ディレクトリーの config サブディレクトリーの redacttofile.log ファイルに書き込まれます。",
		admin_redaction_logging_log_file_hover: "Permanent Redaction Server Module のロギングを有効にする場合、ロギング情報を保管するログ・ファイルの完全修飾パスと名前を指定する必要があります。  ログ・ファイル名は redacttofile.log にすることが推奨されます。",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "ビューアーとサービスの機能を構成します。",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Web クライアントを使用して 1 つ以上の Content Manager OnDemand リポジトリーに接続する場合、OnDemand Web Enablement Kit が正しく機能するために必要な情報を指定する必要があります。 この情報は、Web クライアントに対して構成されるすべての Content Manager OnDemand リポジトリーで共有されます。",
		admin_ondemand_language: "言語:",
		admin_ondemand_tempdir: "ODWEK 一時ディレクトリー:",
		admin_ondemand_tracegrp: "ODWEK トレース",
		admin_ondemand_tracedir: "トレース・ディレクトリー:",
		admin_ondemand_tracelevel: "トレース・レベル:",
		admin_ondemand_tracelevel_0: "0 - ロギングなし",
		admin_ondemand_tracelevel_1: "1 - エラー・メッセージのロギング",
		admin_ondemand_tracelevel_2: "2 - エラー・メッセージおよび警告メッセージのロギング",
		admin_ondemand_tracelevel_3: "3 - エラー・メッセージ、警告メッセージ、および情報メッセージのロギング",
		admin_ondemand_tracelevel_4: "4 - 機能トレースを含む、すべてのメッセージを収集",
		admin_ondemand_max_trace_filesize: "トレース・ファイルの最大サイズ:",
		admin_ondemand_max_trace_filesize_unlimited: "無制限",
		admin_ondemand_max_trace_filesize_limited: "制限あり (推奨)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "この値は範囲外です。 値は 1 から 1,000,000 の間の整数である必要があります。",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF インストール・ディレクトリー:",
		admin_ondemand_language_hover: "ODWEK がメッセージを返すときの言語を指定します。",
		admin_ondemand_tempdir_hover: "OnDemand Web Enablement Kit が処理中に一時ファイルを格納するディレクトリーを入力します。 Web アプリケーション・サーバーにある既存のディレクトリーの絶対パスを入力する必要があります。",
		admin_ondemand_tracedir_hover: "ODWEK トレース・ファイル arswww.trace を格納するディレクトリーを入力します。 Web アプリケーション・サーバーにある既存のディレクトリーの絶対パスを入力する必要があります。",
		admin_ondemand_tracelevel_hover: "arswww.trace ファイルに書き込むロギング情報のレベルを指定してください。 <b>「エラー・メッセージのロギング」</b>では、収集されるロギング情報は最も少量になります。 <b>「機能トレースを含む、すべてのメッセージの収集」</b>では、収集される情報は最も多くなります。<br /><br />IBM ソフトウェア・サポートの指示がない限り、実稼働環境では<b>「機能トレースを含む、すべてのメッセージの収集」</b>は指定しないでください。",
		admin_ondemand_max_trace_filesize_hover: "ODWEK トレース・ファイルのサイズを無制限に許可するか、またはログ・ファイルが特定サイズになった場合 Web サーバーが新しいログ・ファイルを作成するか指定してください。 デフォルトでは、トレース・ログ・ファイルは、Web アプリケーションが Web アプリケーション・サーバーで停止するまで増大可能です。",
		admin_ondemand_max_trace_unlimited_hover: "ODWEK トレース情報を単一のログ・ファイルに書き込む場合は、このオプションを選択します。 このオプションを選択すると、容量が大きすぎて標準のファイル・ビューアーでは開くことができないログ・ファイルが生成される場合があります。",
		admin_ondemand_max_trace_limited_hover: "ODWEK トレース情報を小容量のログ・ファイルに書き込む場合は、このオプションを選択します。 ログ・ファイルが最大サイズに達すると、現在のログの名前が日付 (arswww.trace.YYYYMMDD.HHMMSS) を含めるように変更され、新しいログ・ファイルが作成されます。",
		admin_ondemand_afp2pdf_installdir_hover: "AFP2PDF トランスフォーム・ユーティリティーを使用する場合、AFP ドキュメントを表示および印刷するために PDF ドキュメントに変換するには、AFP2PDF トランスフォーム・ユーティリティーがインストールされている Web アプリケーション・サーバー上のディレクトリーを指定します。 例: C:\\Program Files\\IBM\\AFP2web\\afp2pdf。",

		admin_adminusers: "管理者",
		admin_adminusers_heading_text_multi: "Web クライアントの管理権限を持つユーザーを指定する必要があります。 管理者のみが管理デスクトップにログインできます。<br /><br /><b>重要:</b> IBM Content Navigator 管理者のユーザー ID が以下に一致している必要があります。<ul><li>Web アプリケーション・サーバーに存在するユーザー ID。 このユーザー ID が、Web アプリケーション・サーバーの管理者のものである必要はありません。</li><li>管理機能を含むデスクトップごとに構成されている、デフォルトのリポジトリーに存在するユーザー ID。</li></ul>",
		admin_adminusers_heading_text_single: "Web クライアントの管理権限を持つユーザーを指定する必要があります。 管理者のみが管理デスクトップにログインできます。<br /><br /><b>重要:</b> IBM Content Navigator 管理者のユーザー ID が、Web アプリケーション・サーバーに存在するユーザー ID に一致している必要があります。 このユーザー ID が、Web アプリケーション・サーバーの管理者のものである必要はありません。",
		admin_adminusers_newuser: "新規管理者:",
		admin_adminusers_add: "追加",
		admin_adminusers_remove: "削除",
		admin_adminusers_listheading: "管理者",
		admin_adminusers_nameInvalid: "重複する値は指定できません。",

		admin_sync_server_instructions: "<b>FileNet P8 ユーザーのみ:</b> 1 つ以上のリポジトリーの同期サービスを有効にする場合、同期サービスを使用するように Web クライアントを構成する必要があります。 同期サービス構成は、環境内のすべてのリポジトリーで共有されます。",
		admin_settings_instructions: "「設定」タブで指定する値は、構成内のすべてのデスクトップに適用されます。",
		admin_autocomplete: "ユーザー名を自動入力する:",
		admin_autocomplete_hover: "Web クライアントでブラウザーの Cookie にユーザー名を保存するかどうかを指定します。保存すると、ログイン中に Web クライアントで、ブラウザーによりユーザー名が自動入力されます。<br><br>このオプションを有効にすると、Web クライアントにログインした最後のユーザーのユーザー名がブラウザーの Cookie に保存され、ユーザーが Web クライアントを開いたときに「ログイン」ページに自動的に表示されます。<br><br>共有ワークステーションからアプリケーションにアクセスする場合、またはユーザー名をブラウザーの Cookie に保存することに不安がある場合、このオプションを無効にする必要があります。<br /><br />このオプションは、モバイル・アプリケーションまたはカスタム・アプリケーションには適用されません。",
		admin_autocomplete_enable: "有効化",
		admin_autocomplete_disable: "無効化",
		admin_cultural_collation: "ロケール固有のソートを使用する:",
		admin_cultural_collation_hover: "ロケール固有のソートを有効にすると、ソートはリポジトリー・サーバーで実行されます。 これにより、Web クライアントのパフォーマンスが低下する可能性があります。<br><br>ロケール固有のソートを無効にすると、Web クライアントのパフォーマンスを向上させることができます。",
		admin_cultural_collation_enable: "有効化",
		admin_cultural_collation_disable: "無効化",
		admin_base_ui_style: "テーマのスタイル",
		admin_base_ui_style_hover: "Web クライアントで使用されるデフォルト・テーマのスタイルを指定します。 このスタイルは、「<b>デフォルト</b>」テーマを使用するデスクトップのみで使用されます (テーマはデスクトップ構成の「<b>外観</b>」タブで指定されます)。<br/></br><b>制限:</b> デスクトップ構成でカスタム・テーマを使用する場合、ユーザーが選択するスタイルに関わりなく、カスタム・テーマはクラシック・スタイルに基づきます。",
		admin_base_ui_style_classic: "クラシック",
		admin_access_control_access: "特定のユーザーおよびグループにアクセスを制限",
		admin_access_control_access_show: "アクセス制御データの表示",
		admin_access_control_access_enable: "はい",
		admin_access_control_access_disable: "いいえ",
		admin_mobile_access: "モバイル・アプリケーションからのアクセスを許可する",
		admin_mobile_access_hover: "デフォルトでは、IBM Content Navigator iOS アプリケーションから Web クライアントにアクセスが可能です。<br /><br /><b>重要:</b> iOS アプリケーションから Web クライアントへのユーザーのアクセスを禁止した場合でも、ユーザーは、自分のモバイル・デバイスの Web ブラウザーから Web クライアントにアクセスすることができます。また、IBM Content Navigator API を使用して作成された、モバイル・デバイス上で稼働する任意のカスタム・アプリケーションから Web クライアントにアクセスすることもできます。",
		admin_mobile_access_enable: "はい",
		admin_mobile_access_disable: "いいえ",
		admin_error: "エラー・メッセージ情報:",
		admin_error_custom: "カスタム・サポート・コンテンツの検索",
		admin_error_default: "IBM サポート・コンテンツの検索 <BDO DIR='LTR'>(</BDO>デフォルト<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "エラー・メッセージがユーザーに表示されたときに、詳細情報を入手するためにユーザーを誘導する先を指定します。 ユーザーを IBM サポート・ポータルにある情報に誘導することも、ヘルプ・デスクなどの内部リソースに誘導することもできます。",
		admin_error_URL: "URL のプレフィックス:",
		admin_error_URL_hover: "エラーが発生した場合にユーザーを誘導するヘルプ・デスクなどのあて先のリソースの URL を入力します。 例: http://localhost:port_number。 Web クライアントにより、メッセージの番号が URL に追加されます。",
		admin_prompt_close_without_save: "変更を保存せずに閉じますか?",
		admin_object_expiration_time: "キャッシュのリフレッシュ間隔 (分):",
		admin_object_expiration_time_hover: "デスクトップなどの構成オブジェクトがキャッシュに保持される時間を長くすることで、Web クライアントのパフォーマンスを改善できます。 デフォルトの時間は 10 分です。 最長時間は 1440 分 (1 日) です。<br /><br />変更を有効にするには Web アプリケーションを再始動する必要があります。<br /><br />IBM Content Navigator が高可用性クラスター環境にデプロイされている場合は、構成オブジェクトに加えられたすべての変更は、キャッシュがリフレッシュされるまで、クラスター内のノードに伝搬されません。",
		admin_temp_file_cleanup_interval: "ビューアー・キャッシュをクリーンアップするためのスキャン間隔 (時間):",
		admin_temp_file_cleanup_interval_hover: "期限切れの一時ファイルを見つけて削除するために一時ディレクトリーをスキャンする頻度を指定します。 デフォルトで、一時ディレクトリーは 6 時間ごとにスキャンされます。 6 時間から 48 時間までを指定できます。",
		admin_temp_file_expiration_interval: "ビューアー・キャッシュの期限切れ (時間):",
		admin_temp_file_expiration_interval_hover: "ビューアー内のアクティビティーに関連した一時ファイルがブラウザー・キャッシュ内に残る時間を指定します。 デフォルトで、それらの一時ファイルは 24 時間で期限切れになります。 12 時間から 48 時間までを指定できます。",
		admin_encryption_key_hover: "Navigator の暗号化機能に使用する鍵",
		admin_encryption_key: "暗号鍵:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "ブランド設定",
		admin_mobile_branding_main_color: "メインの色:",
		admin_mobile_branding_secondary_color: "2 次色:",
		admin_mobile_device_title: "MaaS360 管理",
		admin_mobile_device_enable_maas360: "MaaS360 を有効にする:",
		admin_mobile_device_enable_maas360_hover_help: "「MaaS360 を有効にする」吹き出しヘルプがここに表示されます",
		admin_mobile_device_maas360_developer_id: "MaaS360 開発者 ID:",
		admin_mobile_device_maas360_license_key: "MaaS360 ライセンス・キー:",
		admin_mobile_settings_title: "設定",
		admin_mobile_email_address_hover_help: "ユーザーが「エラー・レポートの送信」をクリックする際、モバイル・アプリケーションで E メール・アドレスが使用されます。",
		admin_mobile_email_address: "E メール・アドレス:",
		admin_invalid_email_address_message: "入力した E メール・アドレスが正しい形式ではありません。 正しいアドレスを入力し、再試行してください。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "一部のデータが無効です。",
		admin_configuration_parameters: "構成パラメーター",
		admin_configuration_optional_features: "オプション機能",
		admin_configuration_optional_features_p8_instructions: "このリポジトリーで使用可能にする機能を選択します。<p><b>重要:</b> リポジトリーにアドオンをインストールする機能を有効にする場合、Content Platform Engine または Content Engine の管理者としてリポジトリーに接続する必要があります。</p>",
		admin_configuration_optional_features_cm_instructions: "このリポジトリーで使用可能にする機能を選択します。<p><b>重要:</b> これらの機能はリポジトリーのデータ・モデルを変更します。 これらを有効にする場合、ライブラリー・サーバー管理者としてリポジトリーに接続する必要があります。</p>",
		admin_system_properties: "システム・プロパティー",
		admin_system_properties_for: "システム・プロパティー:",
		admin_available_properties: "使用可能なプロパティー",
		admin_displayed_properties: "表示されているプロパティー",
		admin_selected_properties: "選択したプロパティー",
		admin_selected_filtered_properties: "非表示のプロパティー",
		admin_available_operators: "表示されている演算子",
		admin_selected_filtered_operators: "非表示の演算子",
		admin_system_properties_shown: "表示されているプロパティー",
		admin_system_properties_hidden: "非表示のプロパティー",
		admin_available_menu_items: "使用可能なアクション:",
		admin_selected_menu_items: "選択したアクション:",
		admin_menu_global: "アイテムが選択されていないときに適用:",
		admin_menu_multiple_document: "複数のアイテムが選択されているときに適用:",
		admin_menu_privileges: "必要な特権:",
		admin_menu_plugin: "プラグイン:",
		admin_menu_repository_types: "リポジトリー・タイプ:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "セパレーター",
		admin_browse: "参照",
		admin_search: "検索",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "ロール・ベースのリダクション",
		admin_connections_library_enabled: "IBM Connections 有効",
		admin_office_conf: "編集統合",
		admin_desktop_conf_label: "デスクトップ構成",
		admin_ms_office_conf_label: "Office 構成",
		admin_workflows: "ワークフロー",
		admin_file_types: "ファイル・タイプ",
		admin_file_type_contains_label: "ファイル・タイプの内容",
		admin_name_propepty: "名前",
		admin_cm_name_property_default: "デフォルト名を使用",
		admin_cm_name_property_default_hover: "デフォルトでは、アイテムの ICM 階層名 (ICM$NAME) プロパティーが定義されていれば、そのプロパティーがアイテム名として使用されます。  ICM 階層名 (ICM$NAME) プロパティーが使用可能でない場合は、「represents」のフラグが立てられた最初のプロパティーがアイテム名として使用されます。",
		admin_cm_name_property: "アイテム名プロパティーの指定",
		admin_cm_name_property_hover: "ドキュメントおよびフォルダーの名前として使用されるプロパティーを指定します。",
		admin_name_property: "名前のプロパティー:",
		admin_doc_name_property: "ドキュメント名のプロパティー:",
		admin_doc_name_property_hover: "ドキュメント名として使用されているプロパティーを指定します",
		admin_folder_name_property: "フォルダー名のプロパティー:",
		admin_folder_name_property_hover: "フォルダー名として使用されているプロパティーを指定します",
		admin_all_searches_label: "表示する検索の数:",
		admin_unlimited: "制限なし",
		admin_limit: "制限:",
		admin_repository: "リポジトリー:",
		admin_application_space: "アプリケーション・スペース",
		admin_available_application_spaces: "使用可能なアプリケーション・スペース:",
		admin_selected_application_spaces: "選択したアプリケーション・スペース:",
		admin_label: "ラベル",
		admin_repository_box_placeholder: "Box リポジトリーの選択",
		admin_repository_placeholder: "リポジトリーの選択",
		admin_search_match: "一致:",
		admin_search_match_all: "すべての検索条件と一致",
		admin_search_match_any: "いずれかの検索条件と一致",
		admin_search_match_hover: "<b>「プロパティー・オプション」</b>メニューでデフォルトで選択されるオプションを指定します。",

		admin_repository_redactions_instructions: "このリポジトリー用のロール・ベースのリダクションを構成できます。",
		admin_repository_redaction_policies_description: "リダクション・ポリシーを作成および管理できます。これらのポリシーにより、リダクションの理由が、機密データの読み取りや、機密データを非表示にして保護するアノテーションの編集を行うことができるユーザーおよびグループに関連付けられます。",
		admin_repository_redaction_roles_instruction: "リダクション・ロールを作成して、指定したユーザーおよびグループを、機密データの読み取り能力や機密データを非表示にして保護するアノテーションの編集能力に関連付けることができます。 これらのユーザーやグループがデータを読み取ったり、アノテーションを編集したりできるようにするには、リダクション・ポリシー内でリダクション・ロールをリダクションの理由に関連付ける必要があります。",
		admin_repository_redaction_reasons_instruction: "ご使用のリポジトリー用にリダクションの理由を構成できます。",
		admin_repository_redaction_policies: "リダクション・ポリシーの構成",
		admin_repository_redaction_roles: "リダクション・ロールの構成",
		admin_repository_redaction_reasons: "リダクションの理由の構成",
		admin_repository_redaction_roles_type: "タイプ",
		admin_repository_redaction_roles_type_hover: "編集者は特定タイプのロール・ベースのリダクションの作成、変更、削除を行うことができ、ビューアーは特定タイプの機密データを表示できます。",
		admin_repository_redaction_roles_type_editor: "エディター",
		admin_repository_redaction_roles_type_viewer: "ビューアー",
		admin_repository_redaction_roles_membership: "メンバーシップ",
		admin_repository_redaction_roles_membership_hover: "このロールを付与する編集者を選択します。",
		admin_repository_redaction_roles_user_group_hover: "このロールの付与先となるユーザーおよびグループを検索するか、それに該当する編集者を選択します。",
		admin_repository_redaction_roles_description: "ユーザーおよびグループを機密データの読み取りや機密データを非表示にして保護するアノテーションの編集を行う能力に関連付ける、リダクション・ロールを作成および管理できます。",
		admin_repository_redaction_new: "新規リダクション・ロール",
		admin_repository_redaction_role_avail_editors: "選択可能なリダクション編集者",
		admin_repository_redaction_role_avail_users: "選択可能なユーザー",
		admin_repository_redaction_role_avail_groups: "選択可能なグループ",
		admin_repository_redaction_role_selected_editors: "選択されたリダクション編集者",
		admin_repository_redaction_role_selected_users_groups: "選択されたユーザーおよびグループ",
		admin_repository_redaction_role_add_editor: "新規編集者...",
		admin_repository_redaction_role_access_type: "アクセス",
		admin_repository_redaction_role_access_type_access: "許可",
		admin_repository_redaction_role_access_type_no_access: "拒否",
		admin_repository_redaction_role_users: "ユーザー",
		admin_repository_redaction_role_groups: "グループ",
		admin_repository_redaction_role_editors: "編集者",
		admin_delete_confirmation_redaction_roles: "選択したリダクション・ロールを削除しますか?",
		admin_repository_edit_redaction_role: "リダクション・ロール: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "デフォルトのアクセス権限",
		// RBA
		desktop_user_group_acl: "デスクトップ管理者",
		desktop_user_group_remove: "削除",
		desktop_rba_membership: "メンバーシップ",
		desktop_rba_membership_list_label: "名前",
		admin_repository_redaction_policy_hover: "ユーザーがこのポリシーと他のポリシーを区別できるように、説明を入力してください。",
		admin_repository_new_redaction_policy: "新規リダクション・ポリシー",
		admin_repository_policy_name: "ポリシー名",
		admin_repository_reason_redactions: "リダクションの理由:",
		admin_repository_role_editors: "編集者",
		admin_repository_role_viewers: "ビューアー",
		admin_repository_redaction_policy_instruction: "リダクション・ポリシーを作成して、選択したリダクションの理由をリダクション編集者とリダクション・ビューアーの両方に関連付けることができます。",
		admin_repository_redaction_reasons_hover: "ごく一部のユーザーにのみ表示を許可する機密データのタイプ (例えば、個人識別情報、取り引き上の秘密、自社の機密情報、専有情報など) を 1 つ以上選択します。",
		admin_repository_readaction_available_reasons: "選択可能な理由",
		admin_repository_readaction_selected_reasons: "選択された理由",
		admin_repository_readaction_new_reason: "新規理由...",
		admin_repository_redeaction_reasons: "リダクションの理由:",
		admin_repository_readaction_editor_permmission: "リダクション編集者",
		admin_repository_redaction_editors_hover: "選択した理由について、リダクションを作成および変更できるロールを選択します。",
		admin_repository_readaction_new_editor_role: "新規編集者ロール...",
		admin_repository_readaction_available_editors: "選択可能な編集者ロール",
		admin_repository_readaction_selected_editors: "選択された編集者ロール",
		admin_repository_readaction_viewer_permmission: "リダクション・ビューアー",
		admin_repository_redaction_viewers_hover: "選択した理由について、機密データを表示できるロールを選択します。 リダクションは、これらのロールを持つユーザーやグループには適用されません。",
		admin_repository_readaction_new_viewer_role: "新規ビューアー・ロール...",
		admin_repository_readaction_available_viewers: "選択可能なビューアー・ロール",
		admin_repository_readaction_selected_viewers: "選択されたビューアー・ロール",
		admin_repository_reason_redactions_header: "リダクションの理由",
		admin_delete_confirmation_redaction_policy: "選択したリダクション・ポリシーを削除しますか?",
		admin_role_type_repository: "リポジトリー",
		admin_role_type_administrator: "管理者",
		admin_role_type_template: "テンプレート",
		admin_role_type_teamspace: "チームスペース",
		admin_role_type_author: "エディター",
		admin_role_type_user: "ビューアー",
		admin_collaboration_services_instructions: "IBM Connections と FileNet Collaboration Services Web アプリケーションがある場合は、リポジトリーのコミュニティー・チームスペースとアクティビティー・ストリームを構成できます。",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "コミュニティー・ライブラリー構成",
		admin_collaboration_community_instruction: "ご使用の IBM FileNet P8 ドメイン内に 1 つのリポジトリーを構成して、IBM Connections コミュニティー・ライブラリー (チームスペースとも呼ばれます) を保管できます。 ユーザーが IBM Connections を使用してコミュニティー・ライブラリーを作成すると、このコミュニティー・ライブラリーは、コミュニティー・ライブラリー・リポジトリーとして指定されたリポジトリーに保管されます。",
		admin_collaboration_community_teamspaces: "このリポジトリーをコミュニティー・ライブラリーに使用:",
		admin_collaboration_community_teamspaces_hover: "新規コミュニティー・ライブラリーを保管するために IBM FileNet P8 ドメインで使用できるリポジトリーは、1 つだけです。 このリポジトリーを有効にした場合に、既存のリポジトリーがあると、既存のリポジトリーは無効になります。 ただし、既存のライブラリーは、すべて現在のリポジトリー上に残ります。",
		admin_collaboration_connections_anonymous: "公開コンテンツへの匿名アクセスを許可する:",
		admin_collaboration_connections_anonymous_hover: "ご使用の IBM Connections サーバーに公開コミュニティーまたは管理対象コミュニティーが含まれている場合は、ユーザーが最初にログインしなくても、これらのコミュニティー内のライブラリーからコンテンツを参照したり、ダウンロードしたりできるように、FileNet Collaboration Services を構成できます。<br><br>コミュニティー・ライブラリーに匿名でアクセスするユーザーは、コンテンツの作成、変更、削除を行うことはできません。<br><br><b>重要:</b> IBM FileNet P8 LDAP ユーザーを匿名ユーザーとして指定し、WebSphere Application Server で<b>匿名</b>のロールを持つようにそのユーザーを構成する必要があります。",
		admin_collaboration_connections_url: "IBM Connections URL:",
		admin_collaboration_connections_url_hover: "IBM Connections サーバーへの URL を http://IBMConnectionsServer:port_number という形式で指定します。  IBM Connections が IBM HTTP Server を使用するように構成されている場合は、URL からポート番号を省略することができます。<br><br>この URL は、IBM Connections ユーザーによってアクセス可能でなければなりません。これは、この URL が、IBM Connections 内のドキュメントのランディング・ページへのリンクを作成するために FileNet Collaboration Services によって使用されるリンクであるためです。",
		admin_collaboration_connections_url_http_use: "IBM Connections URL の使用",
		admin_collaboration_connections_url_https_use: "IBM Connections HTTPS URL の使用",
		admin_collaboration_connections_url_specify: "URL の指定",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "IBM Connections が SSL を使用するように構成されている場合は、ご使用の IBM Connections サーバーへの HTTPS URL を https://IBMConnectionsServer:port_number という形式で指定します。  IBM Connections が IBM HTTP Server を使用するように構成されている場合は、URL からポート番号を省略することができます。",

		admin_collaboration_connections_gadget_url: "IBM Connections ガジェット URL:",
		admin_collaboration_connections_retrieval_url: "IBM Connections 取得 URL:",
		admin_collaboration_connections_security: "コミュニティー管理者:",
		admin_collaboration_connections_security_hover: "コミュニティー・ライブラリー内のコンテンツを管理できるユーザーとグループを指定します。<br><br>グローバル管理者は、コミュニティー・ライブラリーおよびコミュニティー・ライブラリーのコンテンツに対するアクセス権限の作成、変更、削除、提供を行うことができます。 ユーザーをグローバル管理者として指定すると、そのユーザーにリポジトリーでの ClbGlobalAdministrator 特権が付与されます。<br><br>グローバル・レビュー管理者は、コミュニティー・ライブラリーでの公開に向けてレビュー中のコンテンツを承認したり、拒否したりすることができます。 ユーザーをグローバル・レビュー管理者として指定すると、そのユーザーにはリポジトリー内での ClbGloablReviewAdministrator 特権が付与されます。",

		admin_collaboration_connections_admins: "グローバル管理者",
		admin_collaboration_connections_admins_review: "グローバル・レビュー管理者",
		admin_collaboration_connections_seedlist: "コミュニティー・ライブラリー・コンテンツの索引付け:",
		admin_collaboration_connections_seedlist_hover: "IBM Connections でこのリポジトリー内のコミュニティー・ライブラリーをクロールして、検索索引を作成するかどうかを指定します。 索引を作成すると、リポジトリーのパフォーマンスに影響する可能性があります。<br><br>リポジトリーに Social Collaboration Search Indexing Extensions がインストールされている場合、このオプションはデフォルトで有効になっています。 リポジトリーに Social Collaboration Search Indexing Extensions がインストールされていない場合、このオプションを有効にすると、リポジトリーにアドオンがインストールされます。",
		admin_collaboration_activity_stream: "アクティビティー・ストリーム・イベント構成",
		admin_collaboration_activity_stream_label: "IBM Connections にイベント情報をプッシュ:",
		admin_collaboration_activity_stream_label_hover: "ドキュメントの作成、チェックアウト、チェックイン、コメント、タグ、および共有などのイベント情報を IBM Connections にプッシュする必要があるかどうかを指定します。<br><br><b>重要:</b> IBM Connections に通知をプッシュすると、リポジトリーのパフォーマンスに影響する可能性があります。",

		admin_collaboration_activity_stream_instruction: "このリポジトリーは、コメントやドキュメントの承認などのイベント情報を IBM Connections にプッシュするように構成できます。 イベントは、IBM Connections コミュニティーの<b>「最新の更新」</b>ページに表示されます。 ",
		admin_collaboration_activity_stream_ignored_ids: "特定のユーザーおよびグループのイベント情報を無視する:",
		admin_collaboration_activity_stream_ignored_ids_hover: "管理者やシステム・アカウントなどの、特定のユーザーまたはグループによって生成されたイベントを無視すると、ユーザーに表示される通知の数を削減できます。 例えば、コンテンツのマイグレーションにおいて、マイグレーションに使用されるアカウントによって生成されたイベントを無視するように指定する必要がある場合があります。",
		admin_collaboration_activity_stream_userid: "IBM Connections ユーザー名:",
		admin_collaboration_activity_stream_userid_hover: "Content Platform Engine で IBM Connections に対するイベント情報の認証と送信に使用されるシステム・アカウントを指定します。 ユーザーは、IBM Connections のウィジェット・コンテナー・アプリケーションでの<b> trustedExternalApplication</b> ロールを持っている必要があります。<br><br><b>ヒント:</b> デフォルトでは、IBM Connections 管理者は適切な特権を持っています。 管理者 ID をユーザー名として使用できます。",
		admin_collaboration_activity_stream_password: "IBM Connections ユーザー・パスワード:",

		admin_help_url: "エンド・ユーザー・ヘルプの URL:",
		admin_help_url_hover: "<b>重要:</b> カスタマー・インストールされた IBM Knowledge Center は IBM Content Navigator バージョン 3.0.0 以降更新されません。 カスタム・ヘルプの使用方法については、お客様サポート担当者までご連絡ください。<br><br>IBM Content Navigator バージョン 3.0.0 では、エンド・ユーザー用ヘルプは IBM Knowledge Center に移動します。 IBM Knowledge Center の URL は http://www.ibm.com/support/knowledgecenter です。<br><br>カスタム・インストールされた IBM Knowledge Center の以前のバージョンを使用される場合、IBM Content Navigator 構成とデプロイメント・ツールによってデプロイされたカスタマー・インストールの IBM Knowledge Center インスタンスの URL を指定します。 この URL はクライアント・マシンからアクセス可能である必要があります。 URL の形式は、http://server_name:port_number/kc です。<br><br>IBM Content Navigator インストール・ディレクトリーの KnowledgeCenter/logs サブディレクトリーにある console.log ファイルから、サーバー名およびポート番号を取得できます。",

		admin_help_default: "IBM から提供されたデフォルトのヘルプを使用する",
		admin_custom_help: "カスタム・ヘルプ・システムを使用する",
		admin_help_kc: "カスタマー・インストールされた IBM Knowledge Center のカスタム・ヘルプを使用する",
		admin_help_kc_hover: "<b>重要:</b> カスタマー・インストールされた IBM Knowledge Center は IBM Content Navigator バージョン 3.0.0 以降更新されません。 カスタム・ヘルプの使用方法については、お客様サポート担当者までご連絡ください。<br><br>カスタム・インストールされた IBM Knowledge Center の以前のバージョンを継続使用される場合、このオプションを選択して、カスタマー・インストールして以前デプロイした IBM Knowledge Center のインスタンスにコンテンツを継続して追加してください。",
		admin_help_taxonomy: "分類法コード:",
		admin_help_taxonomy_hover: "カスタム・ヘルプの分類法コードを指定します。<br><br>IBM Content Navigator の分類法コードは SSEUEX です。 カスタマー・インストールされた  IBM Knowledge Center で、ヘルプを別の製品名で表示する場合、IBM Content Navigator インストール・ディレクトリーの KnowledgeCenter/usr/taxonomy ディレクトリーにある KC_taxonomy.ditamap ファイルに固有の分類法コードを追加する必要があります。",
		admin_help_context: "ヘルプ・コンテキスト:",
		admin_help_context_hover: "カスタム・ヘルプのコンテキストを指定します。<br><br>IBM Content Navigator のヘルプは、IBM Content Navigator インストール・ディレクトリーの KnowledgeCenter/usr/content/com.ibm.usingeuc.doc ディレクトリーにあります。 デフォルト・ヘルプのコンテキストは、com.ibm.usingeuc.doc です。 カスタム・ヘルプを提供する場合には、KnowledgeCenter/usr/content/ ディレクトリー以下の新しいサブディレクトリーにコンテンツを追加してください。",
		admin_help_welcome: "ランディング・ページ:",
		admin_help_welcome_hover: "ユーザーがヘルプにアクセスするときにランディング・ページとして使用するトピックの名前を指定します。 ランディング・ページの場所を指定するプロパティー・ファイルを作成し、IBM Content Navigator インストール・ディレクトリーの KnowledgeCenter/usr/conf ディレクトリーにプロパティー・ファイルを追加する必要があります。",

		admin_settings_mimetype_extensions_jsonfile: "Mime タイプ拡張子の JSON ファイル:",
		admin_settings_mimetype_extensions_jsonfile_hover: "JSON ファイル名とファイルの絶対パスを確認します。 ファイルはファイル・システムからの一般的なファイルの場合も、JSON ファイルをポイントする URL の場合もあります。  <br><br>JSON ファイルの内容は MIME タイプ定義の配列です。 <br><br>Mime タイプ定義には \"mimeTypes\"、\"extensions\"、\"fileType\"、\"iconName\" の 4 つのキーが含まれます。 最初の 2 つのキー、\"mimeTypes\" と \"extensions\" は必須キーで、\",\" で区切られる文字列配列にできます。 後の 2 つのキー、\"fileType\" と \"iconName\" はオプションです。 <br><br>次に例を示します。 <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "タスク・マネージャー構成",
		admin_taskmanager_service: "タスク・マネージャー・サービス:",
		admin_taskmanager_service_hover: "タスク・マネージャー・サービスを使用して非同期タスクを作成および実行するかどうかを指定します。 <br><br>この設定を変更する場合、IBM Content Navigator Web アプリケーションを再始動して変更内容を有効にする必要があります。",
		admin_taskmanager_url: "タスク・マネージャーのサービス URL:",
		admin_taskmanager_url_hover: "他のアプリケーションがタスク・マネージャー・サービスと通信可能な URL を指定します。 URL の形式は、http://server_name:port_number/taskManagerWeb/api/v1 です。",
		admin_taskmanager_logdirectory: "タスク・マネージャーのログ・ディレクトリー:",
		admin_taskmanager_logdirectory_hover: "デフォルトでは、タスク・マネージャー・サービスのログ・ファイルは、Web アプリケーション・サーバーのログ・ファイルと同じディレクトリーに書き込まれます。 <br><br>ロギング情報を IBM Content Navigator サーバー上の別のディレクトリーに書き込む場合、タスク・マネージャー・コンポーネントによって生成されるログ・ファイルを保管するディレクトリーの完全修飾パスを指定します。 <br><br>この設定を変更する場合、IBM Content Navigator Web アプリケーションを再始動して変更内容を有効にする必要があります。",
		admin_taskmanager_heartBeatMonitor: "クラスター・ハートビート・モニター",
		admin_taskmanager_heartBeatMonitor_hover: "高可用性クラスター環境専用です。 このオプションを有効にすると、タスク・マネージャー・サービスは、現在停止しているノードから現在稼働しているノードにタスクを転送します。 <br><br>この設定を変更する場合、IBM Content Navigator Web アプリケーションを再始動して変更内容を有効にする必要があります。",

		admin_syncserver_title: "同期サーバー構成",
		admin_syncserver_enable: "同期サービス:",
		admin_syncserver_enable_hover: "このデスクトップにアクセスするユーザーが、自分のアイテムをワークステーションやモバイル・デバイスの間で同期できるようにするかどうかを指定します。<br><br><b>重要:</b> この機能を使用するには、以下のタスクも実行する必要があります。<ul><li>管理ツールの<b>「同期サービス」</b>セクションの<b>「同期サービス・パブリック URL」</b>を指定します。</li><li>このデスクトップに対して同期サービスが有効になっているリポジトリーを追加します。</li></ul>このオプションを無効にし、このデスクトップに対して同期サービスが有効になっているリポジトリーを追加した場合、リポジトリーの設定は無視されます。",
		admin_mobileqr_enable: "ログイン・ページに IBM Navigator の QR コードを表示:",
		admin_mobileqr_enable_hover: "Web クライアントのログイン・ページに IBM Navigator モバイル・アプリケーションの QR コードを表示するには、このオプションを有効にします。<br><br>ユーザーが QR コードをスキャンすると、使用中のデバイスに該当するアプリ・ストアにアクセスし、そこから IBM Navigator モバイル・アプリケーションをダウンロードできます。",

		admin_streamlineservice_enable: "編集サービス:",
		admin_streamlineservice_enable_hover: "FileNet P8 ユーザーのみ。 デスクトップ・ユーザーが自分のワークステーションのネイティブ・アプリケーションからドキュメントを簡単に追加および編集できるようにするには、このオプションを有効にします。 <br><br>この設定を使用するには、次の操作も必要になります。 <ul><li>このデスクトップに関連付けられている 1 つ以上のリポジトリーの編集サービスを有効にする</li><li>IBM Content Navigator 編集クライアントをユーザーのワークステーションにインストールする</li></ul>",

		admin_repository_general_instructions: "パラメーター、システム・プロパティー、フォルダーなどを構成する前に、リポジトリーに接続する必要があります。",
		admin_repository_system_instructions: "このリポジトリー上のドキュメントおよびフォルダーに対して表示されるシステム・プロパティーを指定します。",

		admin_desktop_general_create_instructions: "デスクトップは、ユーザーが Web クライアントにログインしたときに表示および実行できる内容を決定します。 デスクトップを作成したら、ユーザーにデスクトップ URL を送信して、そのデスクトップにアクセスできるようにできます。",
		admin_desktop_admin_instructions: "管理デスクトップが Web クライアントに用意されているため、管理ユーザーは Web クライアントをセットアップできます。 このデスクトップから、Web クライアント用に構成されているすべてのリポジトリーにアクセスできます。",
		admin_desktop_repositories_instructions: "ユーザーがこのデスクトップからアクセスできるリポジトリーを指定します。 リポジトリーをデスクトップに追加する前に、リポジトリーを構成する必要があります。<br><br><b>ヒント:</b> デスクトップ・レイアウトを構成する際に、各機能に使用できるリポジトリーを制限できます。",
		admin_desktop_menus_instructions: "ユーザーがこのデスクトップからアクセスできるメニューを指定します。 このメニューは、インターフェースで選択した内容に応じて、使用できるアクションを指定します。<br><br><b>ヒント:</b> 管理ツールの<b>「メニュー」</b>セクションで、メニューの内容をカスタマイズできます。プラグインを作成して、新しいタイプのメニューを作成することもできます。",

		admin_desktop_no_repositories: "リポジトリーが構成されていません。",

		admin_desktop_id_hover: "デスクトップ ID は、Web クライアント URL に組み込まれ、ユーザーが Web クライアントにログインするときに開くデスクトップを指定します。 ID は一意である必要があり、デスクトップを保存した後で ID を変更することはできません。<br><br>ID に使用できるのは英数字のみで、大文字と小文字が区別されます。",
		admin_desktop_id_disabled_hover: "デスクトップ ID は変更できません。 別の ID を使用する場合は、新規デスクトップを作成する必要があります。",
		admin_desktop_name_hover: "デスクトップ名に、次の文字を含めることはできません: * \\/ :? \" < > |",
		admin_desktop_default_hover: "構成に含めることができるデフォルトのデスクトップは 1 つのみです。",

		admin_repository_id_disabled_hover: "リポジトリー ID は変更できません。 別の ID を使用する場合は、新規リポジトリー接続を作成する必要があります。",
		admin_printService_enable: "IBM Daeja ViewONE 印刷サービスを使用して印刷:",
		admin_printService_enable_hover: "IBM Daeja ViewONE 印刷サービスを有効にすると、ドキュメントが PDF 形式に変換され、どの Web ブラウザーでも印刷を実行できます。<br><br>IBM Daeja ViewONE 印刷サービスを無効にすると、ドキュメントの印刷が、Java アプレットをサポートする Web ブラウザーに限定されます。  一部の Web ブラウザーは Java アプレットをサポートしていないので、アプレット印刷ができません。<br><br>サポート対象のブラウザーについては、資料を参照してください。",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "ユーザーのホーム・ディレクトリー",
		admin_file_tracking_doc_directory_my_documents: "ユーザーのドキュメント・ディレクトリー",
		admin_file_tracking_doc_directory_qp: "修飾パス",
		admin_file_tracking_section_tile: "ファイル・トラッキング構成",
		admin_file_tracking_home_path: "ホーム・パス",
		admin_file_tracking_my_documents: "マイ・ドキュメント",
		admin_file_tracking_exact_path: "絶対パス:",
		admin_file_tracking_qp: "修飾パス",
		admin_file_tracking_ev: "環境変数",
		admin_file_tracking_ev_us: "カスタム環境変数 ",
		admin_file_tracking_del_local_copy: "ローカル・コピーを削除:",
		admin_file_tracking_yes: "はい",
		admin_file_tracking_no: "いいえ",
		admin_file_tracking_del_local_copy_rt_state_editable: "ユーザーにこの設定のオーバーライドを許可",
		admin_file_tracking_del_local_copy_rt_state1: "はい",
		admin_file_tracking_del_local_copy_rt_state2: "いいえ",
		admin_file_Tracking_label: "ファイル・トラッキング:",
		admin_file_Tracking_disable: "無効化",
		admin_file_Tracking_enable: "有効化",
		admin_file_tracking_label_hover_help: "ファイル・トラッキングでは、アプレットを使用して、ユーザーのマシン上の特定のディレクトリーにドキュメントをチェックアウトおよびダウンロードします。 また、このアプレットにより、ユーザーがドキュメントをチェックインする際に、IBM Content Navigator でユーザーのマシン上のドキュメントを検索できるようになります。",
		admin_file_tracking_doc_directory: "ストレージ・ロケーション:",
		admin_file_tracking_open_file: "ファイルを自動的に開く",
		admin_file_Tracking_append_qualified_path: "ディレクトリーの追加",
		admin_file_Tracking_append_qualified_path_hover_help: "ドキュメントを特定のサブディレクトリーに保存する必要がある場合は、環境変数の終わりにディレクトリーを追加できます。 <br/><br/>例えば、ドキュメントをユーザーのホーム・ディレクトリー内の <i>EnterpriseDocuments</i> ディレクトリーにダウンロードするように指定できます。",
		admin_file_Tracking_append_ev: "環境変数の追加",
		admin_file_Tracking_append_ev_hover_help: "ユーザー・ディレクトリーなどの、動的に指定されたディレクトリーにドキュメントを保存する必要がある場合は、環境変数を追加できます。<br/><br/>例えば、ドキュメントを共有ネットワーク・ディレクトリー上の <i>user_name</i> サブディレクトリーに保管するように指定できます。 ",
		admin_file_tracking_doc_directory_hover_help: "ドキュメントをチェックアウトしてダウンロードする際に保管する場所を指定します。<br/><br/> <b>ヒント</b>: ドキュメントをユーザーのホーム・ディレクトリーまたはデフォルトのドキュメント・ディレクトリーに保管する必要がある場合は、これらのロケーションを指す、事前定義された変数が含まれている<b>「環境変数」</b>を選択します。",
		admin_file_tracking_qualified_path_hover_help: "ご使用の Windows または Mac オペレーティング・システム用に適切なディレクトリー構造を使用して、ドキュメントを保管するディレクトリーまたはネットワーク・ディレクトリーを指定します。 <ul><li>Windows の場合は、パスにドライブ名 (C:\\Enterprise Documents など) を含めてください。</li><li>共有ネットワーク・ディレクトリーの場合は、\\\\servername\\directory という形式のパスを入力します。</li></ul><br/><b>重要:</b> このオプションを使用するには、指定するディレクトリー構造が、環境内のすべてのクライアント・ワークステーションで作成可能なものでなければなりません。",
		admin_file_tracking_environment_variable_path_hover_help: "ご使用の Windows または Mac オペレーティング・システム用に適切な環境変数を使用して、ドキュメントを保管するディレクトリーまたはネットワーク・ディレクトリーを指定します。 <br/><br/><b>「ユーザーのホーム・ディレクトリー」</b>オプションを使用すると、ドキュメントは以下のディレクトリーに保管されます。<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/><b>「ユーザーのドキュメント・ディレクトリー」</b>オプションを使用すると、ドキュメントは以下のディレクトリーに保管されます。<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "ユーザーがリポジトリーにドキュメントを追加またはチェックインしたときに、ドキュメントのローカル・コピーを削除するかどうかを指定します。<br/><br/>ローカル・コピーを削除すると、以下のことが可能になります。<br/><ul><li>IT ポリシーへの準拠を行う</li><li>ユーザーが確実に最新バージョンのドキュメントで作業する</li></ul><br/><b>制約事項:</b> ユーザーがドラッグ・アンド・ドロップによってドキュメントを追加する場合、この設定は使用されません。<br/><br/>IBM Content Navigator for Microsoft Office の場合、デスクトップの<b>「Office 構成」</b>構成セクションのセクションから<b>「ユーザーがドキュメントを追加またはチェックインするとき、またはチェックアウトを取り消すときに、ローカル・ファイルを削除する」</b>を選択する必要があります。",
		admin_file_tracking_open_file_hover_help: "この設定は、ユーザーの Web ブラウザーで構成されているすべてのドキュメント処理の設定をオーバーライドします。 </br></br><b>制約事項:</b> この設定は IBM Content Navigator for Microsoft Office では使用されません。",
		admin_file_tracking_over_write_file: "ローカル・コピーの上書き:",
		admin_file_tracking_over_write_file_hover_help: "ユーザーがリポジトリーからドキュメントをチェックアウトするときに、ドキュメントのローカル・コピーを上書きするかどうかを指定します。 <br/><br/>ローカル・コピーを上書きすると、以下のことが可能になります。<br/><ul><li>ユーザーが確実に最新バージョンのドキュメントで作業する</li><li>ローカル・コピーが存在する場合に、ユーザーにプロンプトが表示されないようにする</li></ul> </br></br><b>制約事項:</b> <b>「ユーザーにこの設定のオーバーライドを許可」</b>を選択した場合、この設定は IBM Content Navigator for Microsoft Office では使用されません。",
		admin_file_tracking_over_write_file_state_editable: "ユーザーにこの設定のオーバーライドを許可",
		admin_file_tracking_inline_help: "ファイル・トラッキングにより、ドキュメントをリポジトリーからチェックアウトしたり、リポジトリーにチェックインしたりするプロセスが簡素化されます。 これにより、ドキュメントをユーザーのマシンに保管する方法を管理することも可能になります。 <br/><br/>さらに、ファイル・トラッキングでは、Web クライアントや IBM Content Navigator for Microsoft Office などの、複数の IBM Content Navigator コンポーネントでドキュメントをトラッキングできます。",

		// Box repository admin...
		admin_box_instructions: "リポジトリーに接続する前に標準認証またはサーバー認証を有効にする必要があります。",
		admin_box_use_oauth: "認証タイプ:",
		admin_box_use_oauth_hover: "IBM Content Navigator から Box ドキュメントにアクセスできるようにする場合は、実稼働環境では標準認証またはサーバー認証を選択します。 IBM Content Navigator のデプロイメントに関連付けられている client_id と OAuth2 client_secret の値を指定します。 それらの値は、実際の IBM Content Navigator サーバーの Box アプリケーションの作成後、Box から取得できます。<br/><br/>開発環境では、開発者認証を選択します。 開発者は、自分の開発者アカウントを使用して Box にログインし、60 分間有効な開発者トークンを生成できます。 開発者トークンにより開発者は、その開発者トークンをパスワードとして使用することにより、任意のユーザー ID で Box にログインできます。",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Box エンタープライズ・アカウント・サブドメイン",
		admin_box_share: "タスク・マネージャー接続 ID:",
		admin_box_share_hover: "Box Copy または Box Share の場合、リポジトリーに変更を加えるバックグラウンド・タスクを実行するため、タスク・マネージャーにおいて管理者のユーザー ID とパスワードが使用されます。<br/><br/>「設定」をクリックし、有効な Box 管理者アカウントを使用して Box にログインしてください。<br/><br/>この Box リポジトリーを共有ファイル用リポジトリーとして選択することによってデスクトップを構成する場合、Box で無制限のストレージが割り当てられている Box 管理者ユーザーを指定する必要があります。",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "ファイルを自動的に開く",
		file_tracking_runtime_overwrite_hover_help: "このオプションが選択されていない場合に、ご使用のローカル・ファイル・システム上に同じ名前のドキュメントがあると、そのドキュメントはチェックアウトされますが、以下のいずれかのアクションを実行しない限り、ダウンロードされません。<br/><ul><li> デフォルト・ディレクトリーのサブディレクトリーにドキュメントをダウンロードする。 サブディレクトリーを選択する場合、ドキュメントの場所は Web アプリケーションによってトラッキングできます。</li><li>ダウンロードするドキュメントの名前を変更する。 ドキュメントの名前を変更すると、ファイル名の競合が回避されます。</li></ul>",
		open_file: "ファイルを自動的に開く",
		over_write_file: "ローカル・コピーの上書き",
		checkout_and_download_file: "ドキュメントのチェックアウトおよびダウンロード",
		download_to_local_directory: "ダウンロード先:",
		checkout_and_download_button_title: "チェックアウトおよびダウンロード",
		checkout_without_java_confirmation_dialog: "ファイル・トラッキング機能によるファイルのダウンロードおよびトラッキングを実行できません。",
		browse_for_directory: "参照",
		selected_documents: "選択されたドキュメント",

		checkout_without_java_confirmation_text: "この問題は、以下の理由で発生する場合があります。<br/><ul><li>ワークステーションに Java Runtime Environment (JRE) がインストールされていない。</li><li>Web ブラウザーで Java プラグインが有効になっていない。</li><li>Web ブラウザーで Java がサポートされていない。</li></ul><br/><br/>この問題を解決するには、以下の適切な処置を行ってください。<br/><br/><ul><li>ファイル・トラッキングを有効にせずにファイルのダウンロードを続行する場合は、「OK」をクリックします。</li><li>ファイル・トラッキングを有効にしてファイルをダウンロードする場合は、ダウンロードを取り消して、ワークステーションに JRE がインストールされていること、および Web ブラウザーで Java プラグインが有効になっていることを確認してください。</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "ドキュメントがチェックアウトされてダウンロードされましたが、ドキュメントを開くことができません。",
		runtime_file_tracking_open_error_explanation: "ご使用のワークステーションにインストールされているオペレーティング・システムでは、このタイプのファイルはサポートされていません。",
		runtime_file_tracking_open_error_userResponse: "この問題を解決するには、以下のいずれかの処置を行ってください。<br/><br/><ul><li>ドキュメントで作業する必要がある場合は、オペレーティング・システムが異なる別のワークステーションから Web クライアントを開きます。</li><li>ドキュメントの表示のみが必要な場合は、Web クライアントでそのドキュメントを右クリックして「開く」をクリックします。</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "ドキュメントはチェックアウトされましたが、ダウンロードされませんでした。",
		runtime_file_tracking_save_file_error_explanation: "ローカル・ファイル・システム上に同じ名前のドキュメントが存在しますが、上書きされませんでした。 ",
		runtime_file_tracking_save_file_error_userResponse: "リポジトリーからファイルをダウンロードする場合は、リポジトリーからドキュメントをダウンロードする際に、そのドキュメントのローカル・コピーを上書きする必要があります。",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "ドキュメントはチェックアウトされましたが、ドキュメントをダウンロードしたり、開いたりすることができません。",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "ローカル・ファイル・システム上に同じ名前のドキュメントが存在しています。 しかし、ファイルが上書きされなかったため、リポジトリー上のドキュメントをダウンロードしたり、開いたりすることはできません。",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "リポジトリーからファイルをダウンロードする場合は、リポジトリーからドキュメントをダウンロードする際に、そのドキュメントのローカル・コピーを上書きする必要があります。",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "ドキュメントをダウンロードできません。",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "このクライアント・マシンには、ファイル・トラッキングに必要な ${0} 環境変数が定義されていません。",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "この問題を解決するには、以下の処理を実行します。<br/><br/><ul><li>オペレーティング・システムの環境変数に ${0} 環境変数を追加します。</li><li>Web クライアントからログアウトし、Web ブラウザーを閉じます。 その後、ログインし直します。</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "ファイル・トラッキング・アプレットによるドキュメントのダウンロードおよびトラッキングを実行できません。  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "ファイル・トラッキングに必要な ${0} ディレクトリーが定義されていないため、ディレクトリーを作成できません。",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "この問題を解決するには、以下の適切な処置を行ってください。<br/><br/><ul><li>「参照」をクリックして、クライアント・マシン上の別のディレクトリーを選択します。 このオプションを選択すると、ファイルはトラッキングされません。</li><li>システム管理者に連絡して、ファイルのトラッキング用に別のディレクトリーを指定するように依頼してください。 例えば、指定されたディレクトリーが Windows オペレーティング・システム用だが、Mac OS を実行している場合、このようにする必要が生じることがあります。 </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "このデスクトップがオペレーティング・システムが異なるデバイスからアクセスされる場合は、以下のいずれかの処置を実行すると、問題が発生する可能性を減らすことができます。<br/><br/><ul><li>環境変数を使用して、クライアント・マシン上のストレージ・ロケーションを指定する。</li><li>各タイプのデバイスのユーザー向けに、異なるデスクトップを作成する。 例えば、Windows オペレーティング・システムを使用するユーザー向けにデスクトップを作成し、Mac OS を使用するユーザー向けにデスクトップを作成します。</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "要求を処理できません。",
		runtime_file_tracking_generic_error_explanation: "ファイル・トラッキング・アプレットでエラーが発生しました。",
		runtime_file_tracking_generic_error_userResponse: "システム管理者に連絡して支援を要請してください。",
		runtime_file_tracking_generic_error_adminResponse: "Java コンソールを開き、もう一度要求の送信を試みてください。 エラーの詳細が Java コンソールに表示されます。<br/><br/>Java コンソールには、ご使用のオペレーティング・システムのコントロール・パネル (Windows) またはシステム環境設定 (Macintosh) からアクセスできます。",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "要求を処理できません",
		runtime_file_tracking_cannot_delete_file_error_explanation: "次のファイルがリポジトリーに追加されましたがローカル・ファイル・システムから削除されていません: ${0}。これは通常、ファイルが開いているか、別のアプリケーションで使用されている場合に発生します。 必要であれば、ファイルを手動で削除できます。",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "ドキュメントをダウンロードできません。",
		runtime_file_tracking_ioexception_error_explanation: "ドキュメントをダウンロードできません。",
		runtime_file_tracking_ioexception_userResponse: "次のディレクトリーに書き込むための適切な権限が付与されていない可能性があります: ${0}。",
		runtime_file_tracking_ioexception_adminResponse: "指定されたディレクトリーへの書き込み権限が付与されていること確認してください。 指定されたディレクトリーへの書き込み権限がない場合は、システム管理者に連絡してください。",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "要求を処理できません。",
		runtime_file_tracking_safari_safe_mode_error_explanation: "このエラーは、次の理由で発生する場合があります。<br/><br/><ul><li>Mac OS で Safari を使用しており、Java がセーフ・モードで実行されています。</li><li>デスクトップのファイル・トラッキング構成に指定されているディレクトリーに対する読み取り/書き込み権限がありません。</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "ファイル・トラッキングなしで IBM Content Navigator を使い続けるか、または以下の手順を実行して問題を解決できます。<br/><br/><ol><li>Safari で Java の非セーフ・モードを有効にします。</li><li>IBM Content Navigator Web サイトを信頼するかどうかを確認するプロンプトが出されたら、<b>「信頼する (Trust)」</b>をクリックしてページをロードしてから、Safari で Java の非セーフ・モードを有効にします。</li></ol><br/><br/>Safari が正しく構成されている場合、以下の手順を実行して問題を解決します。<br/><br/><ol><li>デスクトップのファイル・トラッキング構成に指定されているディレクトリーに対する読み取り/書き込み権限があることを確認します。</li><li>このディレクトリーに対する読み取り/書き込み権限がない場合は、ディレクトリーの権限を編集します。</li><li>ディレクトリーの権限を編集できない場合、管理者にファイル・トラッキング用に構成されているディレクトリーを変更してもらうか、または別のファイル・トラッキング・ディレクトリーが構成されているデスクトップに対するアクセス権限を付与してもらう必要があります。</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "要求を処理できません。",
		runtime_file_tracking_java__notfound_error_explanation: "この問題は、通常以下のような状況で発生します。<br/><br/><ul><li>Java Runtime Environment (JRE) がワークステーション上に存在しないか、有効になっていません。</li><li>ワークステーションの JRE バージョンが IBM Content Navigator のバージョンと互換性がない。</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "ファイル・トラッキングなしで IBM Content Navigator を使い続けるか、次の手順を実行し、JRE を使用して問題を解決できます。<br/><br/><ol><li>JRE がワークステーションにインストールされていることを確認してください。</li><li>ワークステーションの JRE バージョンが IBM Content Navigator のバージョンと互換性があることを確認してください。 サポートされるバージョンのリストは、IBM ソフトウェア・サポート・サイト上の「<i>Hardware and software prerequisites for IBM Content Navigator</i>」というドキュメントに記載されています。</li><li>JRE がワークステーションで有効になっていることを確認してください。</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "要求を処理できません。",
		runtime_file_tracking_security_error_explanation: "デスクトップのファイル・トラッキング構成に指定されているディレクトリーに対する読み取り/書き込み権限がありません。",
		runtime_file_tracking_security_error_userResponse: "ファイル・トラッキングなしで IBM Content Navigator を使い続けるか、またはシステム管理者と協力して、以下の手順を実行できます。<ol><li>デスクトップのファイル・トラッキング構成に指定されているディレクトリーに対する読み取り/書き込み権限があることを確認します。 </li><li>このディレクトリーに対する読み取り/書き込み権限がない場合は、ディレクトリーの権限を編集します。</li><li>ディレクトリーの権限を編集できない場合、管理者にファイル・トラッキング用に構成されているディレクトリーを変更してもらうか、または別のファイル・トラッキング・ディレクトリーが構成されているデスクトップに対するアクセス権限を付与してもらう必要があります。</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "次のドキュメントがダウンロードされました: ${0}。",

		admin_file_tracking_inline_help: "ファイル・トラッキングにより、リポジトリーへのドキュメントの追加、およびリポジトリーに対するドキュメントのチェックアウトやチェックインのプロセスが簡素化されます。 これにより、ドキュメントをユーザーのマシンに保管する方法を管理することもできるようになります。<br/><br/>さらに、ファイル・トラッキングでは、Web クライアントや IBM Content Navigator for Microsoft Office などの、複数の IBM Content Navigator コンポーネントでドキュメントをトラッキングできます。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "メニュー ID の開始文字列を「Default」にすることはできません。  「Default」は、メニュー ID の接頭部として予約されています。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID に使用できるのは英数字のみで、大文字と小文字が区別されます。",
		admin_repository_id_hover: "リポジトリー ID は、Web クライアント URL、お気に入り、および E メール・リンクに組み込まれて、ログイン先のリポジトリーを指定します。 ID は一意である必要があり、リポジトリーを保存した後で ID を変更することはできません。<br><br>ID に使用できるのは英数字のみで、大文字と小文字が区別されます。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "名前に、次の文字を含めることはできません。* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "デスクトップ ID に、スペースまたは次の文字を含めることはできません。* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "デスクトップ名に、次の文字を含めることはできません。* \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "表示名に、次の文字を含めることはできません。* \\ / : ? \" < > |",
		admin_repository_name_hover: "Web クライアント内でユーザーに表示するリポジトリー名を指定します。<br><br>名前に、次の文字を含めることはできません。* \\ / : ? \" < > |",
		admin_server_od_name_hover: "接続先の Content Manager OnDemand サーバーのホスト名または IP アドレス (例: server.id.com) を指定します。",
		admin_server_p8_name_hover: "Content Engine サーバー、または Content Platform Engine サーバーの URL を指定します。 URL は大/小文字が区別され、形式は次のとおりです。<br><br><ul><li>WebSphere Application Server での指定: iiop://host_name:port_number/FileNet/Engine。 基本デプロイメントでは、デフォルトのポート番号は 2809 です。</li><li>WebLogic Server での指定: t3://host_name:port_number/FileNet/Engine。 デフォルトのポート番号 7001 です。</li></ul><br><br>Content Engine および Content Platform Engine の高可用性構成の場合は、cemp: プレフィックスなしで高可用性 EJB トランスポートの URL を使用してください。 ",
		admin_server_p8_protocol_hover: "Content Engine との通信に使用するプロトコルを指定します。",
		admin_server_cm_name_hover: "Content Manager データベースのローカル・カタログ名またはライブラリー・サーバー接続名を指定します。 この名前は、ICMSERVER 変数に指定されている値です。",
		admin_repository_cmis_hover: "接続先のリポジトリーの ID を指定します。  ご使用の CMIS 環境内の各リポジトリーの ID は、AtomPub バインディング・サービス・ドキュメントにリストされています。  <br/><br/><b>ヒント:</b> アスタリスク (*) を入力して、Atompub バインディング・サービス・ドキュメントに定義されている最初のリポジトリーまたは唯一のリポジトリーに接続することもできます。",
		admin_url_cmis_hover: "URL の形式は、サービス・プロバイダーによって異なります。 URL については、CMIS ドキュメントを参照するか、CMIS サーバー管理者に問い合わせてください。",
		admin_repcfg_cmis_status_columns_hover: "アイコンの表示対象になるアイテム状態を指定します。 状態アイコンは、コンテンツ・リスト内のドキュメントの横に表示されます。",
		admin_port_hover: "Content Manager OnDemand サーバーが listen する TCP/IP ポート番号を指定します。 デフォルト値は 1445 です。",
		admin_unified_searches_hover: "ユーザーがこのリポジトリーに対するリポジトリー間検索を保存できるようにするかどうかを指定します。<br/><br/>このオプションを有効にしない場合でも、ユーザーはこのリポジトリーに対して実行されるリポジトリー間検索を作成できます。 ユーザーによるリポジトリー間検索の作成は、デスクトップ・レベルで禁止できます。<br/><br/>リポジトリー間検索を有効にすると、IBM Content Navigator は、リポジトリーに対するリポジトリー間検索のデータ・モデルを作成します。<br/><br/>IBM FileNet Content Manager の場合、このオプションを有効にするには、Content Engine 管理者としてリポジトリーに接続する必要があります。",
		admin_unified_searches_cm_hover: "ユーザーがこのリポジトリーに対するリポジトリー間検索を保存できるようにするかどうかを指定します。<br/><br/>このオプションを有効にしない場合でも、ユーザーはこのリポジトリーに対して実行されるリポジトリー間検索を作成できます。 ユーザーによるリポジトリー間検索の作成は、デスクトップ・レベルで禁止できます。<br/><br/>リポジトリー間検索を有効にすると、IBM Content Navigator は、リポジトリーに対するリポジトリー間検索のデータ・モデルを作成します。",
		admin_max_results_hover: "検索で返される結果の数を制限するかどうかを指定します。 検索結果の数を制限しない場合、多数の検索結果が返されるときにパフォーマンスの問題が発生することがあります。",
		admin_timeout_hover: "検索をリポジトリーで実行できる時間の長さ (秒) を指定します。 指定した時間内に検索が完了しない場合、Web クライアントは要求を取り消します。 推奨される最大タイムアウト値は 60 秒です。",
		admin_object_store_hover: "接続する対象である Content Engine サーバー上のオブジェクト・ストアを指定します。 シンボル名は、Content Platform Engine 管理コンソールから取得できます。",
		admin_object_store_display_name_hover: "IBM FileNet P8 ワークフローを使用する場合、オブジェクト・ストアの表示名は必須です。 オブジェクト・ストアの表示名は、Content Platform Engine 管理コンソールから取得できます。",
		admin_all_searches_hover: "ユーザーがリポジトリーを検索する際に、<b>「すべて検索」</b>の下に表示される検索結果の数を制限するかどうかを指定します。 検索結果の数を制限しないと、保存済みの検索結果がリポジトリー内に多数存在する場合に、パフォーマンスの問題が発生する可能性があります。",

		admin_text_desktop: "デスクトップ",
		admin_text_repository: "リポジトリー",
		admin_text_plugin: "プラグイン",
		admin_text_theme: "テーマ",
		admin_text_menu: "メニュー",
		admin_text_reason_code: "リダクションの理由",
		admin_text_redactions: "リダクション",
		admin_text_viewer_mapping: "ビューアー・マッピング",
		admin_text_mobile_feature: "モバイル機能",
		admin_test_interface_text: "インターフェース・テキスト",
		admin_text_interface_text_locale: "ローカライズされたインターフェース・テキスト",
		admin_text_icon_status: "状況アイコン",
		admin_text_icon: "アイコン",
		admin_text_file_type: "ファイル・タイプ",
		admin_text_viewer: "ビューアー",
		admin_text_desktop_access: "デスクトップ・アクセス",
		admin_text_mapped_properties_for_office: "Microsoft Office に対してマップされたプロパティー",
		admin_text_desktop_features: "デスクトップの機能",
		admin_text_unknown: "不明",
		admin_folder_instruction: "ユーザーが参照するときにコンテンツ・リスト内のドキュメントとフォルダーに対して表示されるプロパティーを指定します。 また、プロパティーの表示順序も指定できます。",
		admin_search_instruction: "ユーザーが検索を作成する際に、デフォルトでどのオプションが選択されるかを指定します。",
		admin_repository_office_conf_class_instruction: "IBM Content Navigator for Microsoft Office が環境内のクライアント・マシンにインストールされている場合は、ドキュメントがこのリポジトリーに追加されたとき、またはこのリポジトリーにチェックインされたときの、そのドキュメントの処理方法を指定できます。",
		admin_repository_office_conf_instruction: "Microsoft Office ドキュメント・プロパティーを、このリポジトリーに定義されたプロパティーにマップします。<br/><br/>このリポジトリーが関連付けられているデスクトップでプロパティーのマッピングが有効になっていると、ユーザーが IBM Content Navigator for Microsoft Office からドキュメントを追加するときに、Microst Office ドキュメofントに設定されているプロパティーを使用して、リポジトリーのプロパティーにデータを設定します。",
		admin_repository_office_conf_prop_mapping_title: "プロパティー・マッピング",
		admin_repository_office_conf_prop_mapping_title1: "MS Office 統合",
		admin_office_conf_instruction: "IBM Content Navigator for Microsoft Office をクライアント・マシンにインストールするときに、IBM Content Navigator と Microsoft Office アプリケーションとの統合内容を制御できます<br /><br /><b>重要:</b> <b>「ユーザーが次の操作を行ったときに Office プロパティーをリポジトリー・プロパティーにマップする」</b>を選択した場合は、このデスクトップに関連付けられている各リポジトリーのプロパティー・マッピングも構成する必要があります。 現在の環境内の各リポジトリーの<b>「Office プロパティー」</b>タブで、プロパティー・マッピングを構成できます。",
		admin_desktop_workflows_instruction: "<b>IBM FileNet P8 システムのみ:</b> このデスクトップに表示するアプリケーション・スペースを指定します。 選択したアプリケーション・スペースの順序により、アプリケーション・スペースが Web クライアントに表示される順序が決まります。<br><br><b>ヒント:</b> アプリケーション・スペースの表示名は、管理ツールの<b>「ラベル」</b>セクションに新しい名前を指定することで変更できます。",
		admin_search_filtered_properties_instruction: "ユーザーが検索できるプロパティーを指定します。 ユーザーに検索させないようにするプロパティーを非表示にできます。",
		admin_search_filtered_operators_instruction: "ユーザーが特定のデータ型 (Date、Integer など) を検索するときに使用可能な演算子を指定します。 ユーザーに選択させないようにする演算子を非表示にできます。",
		admin_search_default_search_results_instruction: "検索結果に表示するドキュメントおよびフォルダーのプロパティーを指定します。 検索結果に表示しないようにするプロパティーを非表示にできます。",
		admin_search_default_search_results_p8_cmis_instruction: "検索結果に表示するドキュメントのプロパティーを指定します。 結果に表示しないようにするプロパティーを非表示にできます。",

		admin_datetimeOp: "Date Time",
		admin_floatOp: "浮動小数点数",
		admin_integerOp: "Integer",
		admin_stringOp: "String",
		admin_binaryOp: "バイナリー",
		admin_objectOp: "オブジェクト",
		admin_idOp: "ID",
		admin_userOp: "ユーザー",
		admin_booleanOp: "Boolean",

		admin_string: "String",
		admin_long: "ロング",
		admin_date: "日付",
		admin_double: "Double",
		admin_object: "オブジェクト",
		admin_guid: "GUID",
		admin_boolean: "Boolean",

		admin_repcfg_heading: "構成パラメーターを設定することで、このリポジトリーのデフォルトの動作を上書きできます。",
		admin_repcfg_heading_od: "構成パラメーターを設定することで、このリポジトリーのデフォルトの動作を上書きできます。<br /><br /><b>重要:</b> Web クライアントを Content Manager OnDemand で使用するには、<b>「設定」</b>の下にある<b>「Content Manager OnDemand」</b>タブに含まれるパラメーターにも値を指定する必要があります。これらのパラメーターの値は、接続先のすべての Content Manager OnDemand リポジトリーに適用されます。",
		admin_repcfg_teamspaces: "チームスペースの管理:",
		admin_repcfg_enable: "有効化",
		admin_repcfg_disable: "無効化",

		admin_repcfg_deliver_redacted_pdf_files_as: "改訂された PDF ファイルは次の形式で配信されます:",
		admin_repcfg_burn_pdf_to_pdf: "PDF ファイル",
		admin_repcfg_burn_pdf_to_tiff: "TIFF ファイル",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "ロール・ベースのリダクションを適用することによって改訂される PDF ファイルは、さまざまなファイル形式でクライアントに配信することができます。 ファイル形式が変更されると、ファイル拡張子および MIME タイプも変更されます。<br><br>例えば、PDF ファイルが TIFF ファイルとして配信される場合、ファイル拡張子は .tiff に変更されます。",
		admin_repcfg_redaction_allow_merge_and_split: "ロール・ベースのリダクションがあるページのマージと分割を、ユーザーに許可します。",
		admin_repcfg_redaction_allow_merge_and_split_hover: "ロール・ベースのリダクションがあるページのマージと分割をユーザーに許可するには、このオプションを選択します。 このオプションを有効にした場合でも、リダクション編集者ではないユーザーはロール・ベースのリダクションを編集できず、また、ロール・ベースのリダクションに関連付けられた機密データへのアクセス権限を付与されません。",
		admin_repcfg_modify_teamspace_roles: "所有者が既存のチームスペースのロールを変更できるようにする",
		admin_repcfg_tm_delete_teamspace: "所有者がコンテンツも含めてチームスペースを削除できるようにする",
		admin_repcfg_tm_delete_teamspace_id_missing: "リポジトリー管理者のユーザー名を指定する必要があります。",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "リポジトリー管理者のパスワードを指定する必要があります。",
		admin_repcfg_teamspace_display_Recent: "最近変更されたチームスペースのみを表示 ",
		admin_repcfg_teamspace_display_Recent_value: "最終変更以降の日数:",

		admin_repcfg_folder_selector: "ルート・フォルダー:",
		admin_repcfg_enable_folder_selector: "有効化",
		admin_repcfg_disable_folder_selector: "無効化",
		admin_repcfg_SSO: "シングル・サインオン:",
		admin_repcfg_teamspace_template_permission_text: "チームスペース・テンプレート作成者の割り当て:",
		admin_repcfg_teamspace_template_permission_hover_p8: "チームスペース・テンプレートを作成できるグループまたはユーザーを指定します。 このユーザーおよびグループには、必要なクラスおよびフォルダーに関する適切なセキュリティー設定が指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>詳細</a><br/><br/><b>推奨:</b> グループを使用して、チームスペースの管理を簡素化してください。",
		admin_repcfg_teamspace_template_permission_hover_cm: "チームスペース・テンプレートを作成できるグループまたはユーザーを指定します。 ユーザーは適切な ACL に追加され、必要な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>詳細</a><br/><br/><b>推奨:</b> グループを使用して、チームスペースの管理を簡素化してください。",
		admin_repcfg_teamspace_permission_text: "チームスペース・ロールの割り当て:",
		admin_repcfg_teamspace_permission_hover_p8: "チームスペースを作成および使用できるグループまたはユーザーを指定します。 このユーザーには、必要なクラスおよびフォルダーに関する適切なセキュリティー設定が指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>詳細</a><br/><br/><b>推奨:</b> グループを使用して、チームスペースの管理を簡素化してください。",
		admin_repcfg_teamspace_permission_hover_cm: "チームスペースを作成および使用できるグループまたはユーザーを指定します。 ユーザーは適切な ACL に追加され、必要な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>詳細</a><br/><br/><b>推奨:</b> グループを使用して、チームスペースの管理を簡素化してください。",
		admin_repcfg_entry_template_permission_text: "エントリー・テンプレート・ロールの割り当て:",
		admin_repcfg_entry_template_permission_hover_p8: "エントリー・テンプレートを作成および使用できるグループまたはユーザーを指定します。 このユーザーには、エントリー・テンプレート・ドキュメント・クラスに関する適切なセキュリティー設定が指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>詳細</a><br/><br/><b>推奨:</b> グループを使用して、エントリー・テンプレートの管理を簡素化してください。",
		admin_repcfg_entry_template_permission_hover_cm: "エントリー・テンプレートを作成および使用できるグループまたはユーザーを指定します。 ユーザーは適切な ACL に追加され、必要な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>詳細</a><br /><br /><b>推奨:</b> グループを使用して、エントリー・テンプレートの管理を簡素化してください。",
		admin_repcfg_office_template_permission_text: "テンプレート・ロールの割り当て:",
		admin_repcfg_office_template_permission_hover_cm: "Microsoft Office Online テンプレートまたは編集サービス・テンプレートを作成、編集、および使用できるグループまたはユーザーを指定します。 ユーザーは適切な ACL に追加され、必要な特権が付与されます。  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a><br /><br /><b>推奨:</b> Microsoft Office Online テンプレートまたは編集サービス・テンプレートの管理を簡素化するには、グループを使用します。",
		admin_repcfg_draft_permission_text: "ドラフト・ロールの割り当て:",
		admin_repcfg_draft_permission_hover_cm: "共同編集中に Microsoft Office Online ドキュメントまたは編集サービス・ドキュメントのドラフトを作成できるグループまたはユーザーを指定します。 Microsoft Office Online または編集サービスでドキュメントを共同編集するユーザーには、ドラフトを作成するための適切な特権が必要です。 ユーザーは適切な ACL に追加され、必要な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a><br /><br /><b>推奨:</b> ドラフトの管理を簡素化するには、グループを使用します。",
		admin_repcfg_search_permission_text: "検索ロールの割り当て:",
		admin_repcfg_search_permission_hover_p8: "保存された検索およびリポジトリー間検索を作成または使用できるグループまたはユーザーを指定します。 このユーザーには、必要なクラスに関する適切なセキュリティー設定が指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>詳細</a><br /><br /><b>推奨:</b> グループを使用して、検索の管理を簡素化してください。",
		admin_repcfg_search_permission_hover_cm: "保存された検索およびリポジトリー間検索を作成、編集、使用できるグループまたはユーザーを指定します。 ユーザーは適切な ACL に追加され、必要な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>詳細</a><br /><br /><b>推奨:</b> グループを使用して、検索の管理を簡素化してください。",
		admin_repcfg_search_permission_title: "検索ロール",
		admin_repcfg_search_permission_intro_text: "ユーザーが自分のロールをサポートするデスクトップへのアクセス権限を持つようにします。 例えば、検索の作成者は、検索およびリポジトリー間検索を作成できるデスクトップへのアクセス権限を持つようにしてください。",
		admin_repcfg_teamspace_template_administrators_hover_p8: "チームスペース・テンプレート管理者は、リポジトリー (オブジェクト・ストア) の<b>「フルコントロール」</b>権限を持つユーザーです。 管理ツールからチームスペース・テンプレート管理者のリストを変更することはできません。 <p>チームスペース・テンプレート管理者は、任意のチームスペース・テンプレートを削除または変更できます。 チームスペース・テンプレートを作成するユーザーは、そのテンプレートをチームスペース・テンプレート管理者と共有する必要はありません。</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "ユーザーまたはグループをチームスペース・テンプレート作成者として指定すると、そのユーザーまたはグループには、リポジトリーでチームスペース・テンプレートを作成するための適切なセキュリティーが指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>詳細</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "管理者および作成者に関連付けられた特権以外の特権が割り当てられているユーザーおよびグループ。<p>それらのユーザーおよびグループをチームスペース・テンプレート作成者に移すには、それらを「その他」ロールから削除した後、チームスペース・テンプレート作成者として割り当てます。<p>それらのユーザーおよびグループに現在付与されている特権は、IBM Administration Console for Content Engine を使用することにより確認することができます。",
		admin_repcfg_teamspace_administrators_hover_p8: "チームスペース管理者は、リポジトリー (オブジェクト・ストア) の<b>「フルコントロール」</b>権限を持つユーザーです。 管理ツールからチームスペース管理者のリストを変更することはできません。<p>チームスペース管理者は、任意のチームスペースを削除または変更できます。 チームスペースを作成するユーザーは、そのチームスペースをチームスペース管理者と共有する必要はありません。</p>",
		admin_repcfg_teamspace_creators_hover_p8: "ユーザーまたはグループをチームスペース作成者として指定すると、そのユーザーまたはグループには、リポジトリーでチームスペースを作成するための適切なセキュリティーが指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>詳細</a>",
		admin_repcfg_teamspace_user_hover_p8: "ユーザーまたはグループをチームスペース・ユーザーとして指定すると、そのユーザーまたはグループには、リポジトリーでチームスペースを使用するための適切なセキュリティーが指定されます。 ただし、ユーザーがチームスペースにアクセスするには、そのチームスペースのメンバーでなければなりません。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>詳細</a><p><b>ヒント:</b> 環境内のすべてのユーザーがチームスペースを表示できるようにしたい場合は、チームスペース・ユーザーのロールに #AUTHENTICATED-USERS 疑似アカウントを追加します。</p>",
		admin_repcfg_teamspace_others_hover_p8: "管理者、作成者、およびユーザーに関連付けられた特権以外の特権が割り当てられているユーザーおよびグループ。<p>事前定義されたロールにそれらのユーザーおよびグループを移すには、それらを「その他」ロールから削除した後、チームスペース・ロールを割り当てます。<p>それらのユーザーおよびグループに現在付与されている特権は、IBM Administration Console for Content Engine を使用することにより確認することができます。",		
		admin_repcfg_entry_template_administrators_hover_p8: "エントリー・テンプレート管理者は、リポジトリー (オブジェクト・ストア) の<b>「フルコントロール」</b>権限を持つユーザーです。 管理ツールからエントリー・テンプレート管理者のリストを変更することはできません。 <p>エントリー・テンプレート管理者は、任意のエントリー・テンプレートを削除または変更できます。 エントリー・テンプレートを作成するユーザーは、そのエントリー・テンプレートをエントリー・テンプレート管理者と共有する必要はありません。</p>",
		admin_repcfg_entry_template_creators_hover_p8: "ユーザーまたはグループをエントリー・テンプレート作成者として指定すると、そのユーザーまたはグループには、リポジトリーでエントリー・テンプレートを作成するための適切なセキュリティーが指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>詳細</a>",
		admin_repcfg_entry_template_user_hover_p8: "ユーザーまたはグループをエントリー・テンプレート・ユーザーとして指定すると、そのユーザーまたはグループには、リポジトリーでエントリー・テンプレートを使用するための適切なセキュリティーが指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>詳細</a><p><b>ヒント:</b> 環境内のすべてのユーザーがエントリー・テンプレートを使用できるようにしたい場合は、エントリー・テンプレート・ユーザーのロールに #AUTHENTICATED-USERS 疑似アカウントを追加します。</p>",
		admin_repcfg_entry_template_others_hover_p8: "管理者、作成者、およびユーザーに関連付けられた特権以外の特権が割り当てられているユーザーおよびグループ。<p>事前定義されたロールにそれらのユーザーおよびグループを移すには、それらを「その他」ロールから削除した後、エントリー・テンプレート・ロールを割り当てます。<p>それらのユーザーおよびグループに現在付与されている特権は、IBM Administration Console for Content Engine を使用することにより確認することができます。",
		admin_repcfg_teamspace_template_creators_hover_cm: "ユーザーまたはグループをチームスペース・テンプレート作成者として指定すると、そのユーザーまたはグループには、リポジトリーでチームスペース・テンプレートを作成するための適切な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>詳細</a>",
		admin_repcfg_teamspace_creators_hover_cm: "ユーザーまたはグループをチームスペース作成者として指定すると、そのユーザーまたはグループには、リポジトリーでチームスペースを作成するための適切な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>詳細</a>",
		admin_repcfg_teamspace_user_hover_cm: "ユーザーまたはグループをチームスペース・ユーザーとして指定すると、そのユーザーまたはグループには、リポジトリーでチームスペースを使用するための適切な特権が付与されます。 ただし、ユーザーがチームスペースにアクセスするには、そのチームスペースのメンバーでなければなりません。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>詳細</a>",
		admin_repcfg_entry_template_creators_hover_cm: "ユーザーまたはグループをエントリー・テンプレート作成者として指定すると、そのユーザーまたはグループには、リポジトリーでエントリー・テンプレートを作成するための適切な特権が付与されます。 <br/><br/>ただし、ある特定のエントリー・テンプレートに対してユーザーまたはグループが持つ特権は、そのエントリー・テンプレートのセキュリティー設定によって決まります。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>詳細</a>",
		admin_repcfg_entry_template_editors_hover_cm: "ユーザーまたはグループをエントリー・テンプレート編集者として指定すると、そのユーザーまたはグループには、リポジトリーでエントリー・テンプレートを変更するための適切な特権が付与されます。 <br/><br/>ただし、ある特定のエントリー・テンプレートに対してユーザーまたはグループが持つ特権は、そのエントリー・テンプレートのセキュリティー設定によって決まります。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>詳細</a>",
		admin_repcfg_entry_user_hover_cm: "ユーザーまたはグループをエントリー・テンプレート・ユーザーとして指定すると、そのユーザーまたはグループには、リポジトリーでエントリー・テンプレートを使用するための適切な特権が付与されます。 <br/><br/>ただし、ある特定のエントリー・テンプレートに対してユーザーまたはグループが持つ特権は、そのエントリー・テンプレートのセキュリティー設定によって決まります。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>詳細</a>",
		admin_repcfg_office_template_creators_hover_cm: "ユーザーまたはグループを Microsoft Office Online テンプレート作成者または編集サービス・テンプレート作成者として指定すると、そのユーザーまたはグループには、リポジトリーにテンプレート・ファイルを作成するための適切な特権が付与されます。 <br/><br/>ただし、ある特定のテンプレート・ファイルに対してユーザーまたはグループが持つ特権は、そのテンプレートのセキュリティー設定によって決まります。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a>",
		admin_repcfg_office_template_editors_hover_cm: "ユーザーまたはグループを Microsoft Office Online テンプレート編集者または編集サービス・テンプレート編集者として指定すると、そのユーザーまたはグループには、リポジトリーのテンプレート・ファイルを変更するための適切な特権が付与されます。  <br/><br/>ただし、ある特定のテンプレート・ファイルに対してユーザーまたはグループが持つ特権は、そのテンプレートのセキュリティー設定によって決まります。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a>",
		admin_repcfg_office_template_user_hover_cm: "ユーザーまたはグループを Microsoft Office Online テンプレート・ユーザーまたは編集サービス・テンプレート・ユーザーとして指定すると、そのユーザーまたはグループには、Web クライアントから新しい Office Online ドキュメントまたは編集サービス・ドキュメントを作成するときにテンプレートを適用するための適切な特権が付与されます。  <br/><br/>ただし、ある特定のテンプレート・ファイルに対してユーザーまたはグループが持つ特権は、そのテンプレートのセキュリティー設定によって決まります。  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a>",
		admin_repcfg_draft_creators_hover_cm: "Microsoft Office Online または編集サービスでドキュメントを共同編集するユーザーには、このロールを割り当てる必要があります。 ユーザーに編集者ロールまたはユーザー・ロールを割り当てないでください。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a>",
		admin_repcfg_draft_editors_hover_cm: "Microsoft Office Online または編集サービスでドキュメントを共同編集するユーザーには、<b>作成者</b>ロールを割り当てる必要があります。 ユーザーに編集者ロールを割り当てた場合、そのユーザーはドラフトを作成することができません。ドラフトの作成は、共同編集を行なうために必要です。  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a>",
		admin_repcfg_draft_user_hover_cm: "Microsoft Office Online または編集サービスでドキュメントを共同編集するユーザーには、<b>作成者</b>ロールを割り当てる必要があります。 ユーザーにユーザー・ロールを割り当てた場合、そのユーザーはドラフトを作成することができません。ドラフトの作成は、共同編集を行なうために必要です。  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>詳細</a>",		
		admin_repcfg_search_others_hover_p8: "管理者、作成者、およびユーザーに関連付けられた特権以外の特権が割り当てられているユーザーおよびグループ。<p>事前定義されたロールにそれらのユーザーおよびグループを移すには、それらを「その他」ロールから削除した後、検索ロールを割り当てます。<p>それらのユーザーおよびグループに現在付与されている特権は、IBM Administration Console for Content Engine を使用することにより確認することができます。",		
		admin_repcfg_search_admins_hover_p8: "検索管理者は、リポジトリー (オブジェクト・ストア) の<b>「フルコントロール」</b>権限を持つユーザーです。 管理ツールから検索管理者のリストを変更することはできません。 <br /><br />検索管理者は、任意の検索を削除または変更できます。 検索を作成するユーザーは、その検索を検索管理者と共有する必要はありません。",
		admin_repcfg_search_creators_hover_p8: "ユーザーまたはグループを検索作成者として指定すると、そのユーザーまたはグループには、リポジトリーで検索を作成するための適切なセキュリティーが指定されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>詳細</a>",
		admin_repcfg_search_user_hover_p8: "ユーザーまたはグループを検索ユーザーとして指定すると、そのユーザーまたはグループには、リポジトリーで検索を使用するための適切なセキュリティーが指定されます。<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>詳細</a><br /><br /><b>ヒント:</b> 環境内のすべてのユーザーが検索を使用できるようにしたい場合は、検索ユーザーのロールに #AUTHENTICATED-USERS 疑似アカウントを追加します。<br/><br />デフォルトでは、検索ユーザーは検索およびリポジトリー間検索を作成できますが、検索を保存することはできません。 以下のオプションが選択されたデスクトップを検索ユーザーに使用させることにより、検索ユーザーが検索を作成するのを防止できます。<ul><li><b>ユーザーが検索を作成できないようにする</b></li><li><b>ユーザーがリポジトリー間検索を作成できないようにする</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "ユーザーまたはグループを検索作成者として指定すると、そのユーザーまたはグループには、リポジトリーで検索およびリポジトリー間検索を作成し保存するための適切な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>詳細</a><br /><br /><b>重要:</b> 検索作成者は、以下のオプションが選択されていないデスクトップを使用するようにしてください。<ul><li><b>ユーザーが検索を作成できないようにする</b></li><li><b>ユーザーがリポジトリー間検索を作成できないようにする</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "ユーザーまたはグループを検索編集者として指定すると、そのユーザーまたはグループには、既存の検索およびリポジトリー間検索を変更するための適切な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>詳細</a><br /><br /><b>ヒント:</b> デフォルトでは、検索編集者は検索およびリポジトリー間検索を作成できますが、検索を保存することはできません。 以下のオプションが選択されたデスクトップを検索編集者に使用させることにより、検索編集者が検索を作成するのを防止できます。<ul><li><b>ユーザーが検索を作成できないようにする</b></li><li><b>ユーザーがリポジトリー間検索を作成できないようにする</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "ユーザーまたはグループを検索ユーザーとして指定すると、そのユーザーまたはグループには、保存された検索およびリポジトリー間検索を開いて実行するための適切な特権が付与されます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>詳細</a><br /><br /><b>ヒント:</b> デフォルトでは、検索ユーザーは検索およびリポジトリー間検索を作成できますが、検索を保存することはできません。 以下のオプションが選択されたデスクトップを検索ユーザーに使用させることにより、検索ユーザーが検索を作成するのを防止できます。<ul><li><b>ユーザーが検索を作成できないようにする</b></li><li><b>ユーザーがリポジトリー間検索を作成できないようにする</b></li></ul>",
		admin_repcfg_db_encoding: "サーバー・データベースの文字エンコード:",
		admin_repcfg_db_encoding_hover: "IBM Content Manager データベースのデフォルトの文字エンコードは UTF-8 です。",
		admin_repcfg_db_encoding_specify: "データベースの文字エンコードの指定",
		admin_repcfg_db_encoding_utf8: "UTF-8 エンコード",
		admin_repcfg_db_encoding_utf8_hover: "UTF-8 でエンコードされたデータベースを使用する場合は、このオプションを指定します。 IBM Content Navigator では、UTF-8 エンコードを使用して、アイテム・プロパティー値の文字列の長さが検査されます。",
		admin_repcfg_db_encoding_other: "その他のエンコード",
		admin_repcfg_db_encoding_other_hover: "エンコードが UTF-8 以外のデータベースを使用する場合は、このオプションを指定します。 IBM Content Navigator では、文字カウントを使用して、アイテム・プロパティー値の文字列の長さが検査されます。",
		admin_repcfg_language_codes: "サーバー言語コード:",
		admin_repcfg_language_codes_avail: "使用可能",
		admin_repcfg_language_codes_sel: "選択済み",
		admin_repcfg_pdf_conversion: "添付内で PDF ドキュメントに変換する MIME タイプ:",
		admin_repcfg_pdf_conversion_avail: "使用可能",
		admin_repcfg_pdf_conversion_sel: "選択済み",

		admin_repcfg_box_share_enable_classes_label: "Box Share サポート用に変更を加えるクラス:",
		admin_repcfg_box_share_enable_classes_hover: "アイテム共有時にファイルの ID を Box に格納するためにクラスに変更を加えることができます。",
		admin_repcfg_box_share_enable_classes_warning: "重要: 指定するすべてのクラスに対して、Box Share サポート用の変更が加えられます。 変更内容の保存後に、その変更内容をクラスから削除することはできません。<br><br>クラスを変更するには、ライブラリー・サーバー管理者としてリポジトリーに接続する必要があります。",
		admin_repcfg_box_share_enable_classes_available: "使用可能なクラス",
		admin_repcfg_box_share_enable_classes_selected: "選択したクラス",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Box Share ID の格納",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "このクラスには、Box Share ID を格納するための変更が既に加えられています。 このオプションは削除できません。",
		admin_repcfg_box_share_enable_classes_tracking_hover: "アイテム共有時にファイルの ID を Box に格納するよう、このクラスに変更を加えます。",

		admin_repcfg_redaction: "ロール・ベースのリダクション:",
		admin_repcfg_enable_redaction_hover: "このリポジトリー内のドキュメントに対してロール・ベースのリダクションを使用するかどうかを指定します。<br/><br/>ロール・ベースのリダクションは、ビューアーがドキュメントをダウンロード、印刷、レンダリングしたとき、またはサムネイルとして表示したときに適用されます。 そのドキュメントを表示したときにユーザーに表示される内容は、それらのユーザーのロールと、適用されるリダクション・ポリシーによって異なります。",

		admin_repcfg_redaction_policy_permission_text: "ポリシー編集者の割り当て:",
		admin_repcfg_redaction_policy_editors_hover: "リダクション・ポリシーおよびリダクション・ロールを作成、変更、削除するユーザーおよびグループを選択します。",
		admin_repcfg_redaction_policy_editors_select_hover: "リダクション・ポリシー編集者は、リダクション・ポリシーおよびリダクション・ロールを作成、変更、削除することができます。",
		admin_repcfg_redaction_policy_administrators_hover_p8: "リダクション・ポリシー管理者は、リダクション・ポリシー編集者を割り当てることができます。<br/><br/>リダクション・ポリシー管理者のリストは、IBM Administration Console for Content Engine を使用して変更できます。",
		admin_repcfg_redaction_policy_administrators_hover_cm: "リダクション・ポリシー管理者は、リダクション・ポリシー編集者を割り当てることができます。<br/><br/>リダクション・ポリシー管理者のリストは、IBM Content Manager システム管理クライアントを使用して変更できます。",

		admin_repcfg_redaction_permission_text: "リダクション編集者の割り当て:",
		admin_repcfg_redaction_editors_hover: "ロール・ベースのリダクションを作成、変更、削除するユーザーおよびグループを選択します。 ユーザーおよびグループを編集者として選択した後で、それらのユーザーおよびグループがロール・ベースのリダクションを編集できるようにするには、リダクション・ポリシーで編集者として指定する必要があります。",
   		admin_repcfg_redaction_editors_select_hover: "リダクション編集者についても、リダクション・ポリシーで編集者として指定されている場合は、ロール・ベースのリダクションを作成、変更、削除できます。",
   		admin_repcfg_redaction_administrators_hover_p8: "リダクション管理者は、リダクション編集者を割り当てることができます。<br/><br/>リダクション管理者のリストは、IBM Administration Console for Content Engine を使用して変更できます。",
   		admin_repcfg_redaction_administrators_hover_cm: "リダクション管理者は、リダクション編集者を割り当てることができます。<br/><br/>リダクション管理者のリストは、IBM Content Manager システム管理クライアントを使用して変更できます。",
		admin_repcfg_entry_template: "エントリー・テンプレートの管理:",
		admin_repcfg_entry_template_enable_classes_label: "エントリー・テンプレート・サポートのために変更するクラス:",
		admin_repcfg_oos_reference_attribute_label: "Office Online の参照属性:",
		admin_repcfg_entry_template_enable_classes_hover: "重要: 指定したクラスはすべて、エントリー・テンプレートをサポートするように変更されます。 変更内容の保存後に、その変更内容をクラスから削除することはできません。<br><br>以下のいずれかまたは両方を目的としてクラスを変更できます。<br><ul><li>アイテムの追加に使用したエントリー・テンプレートの ID を保管して、アイテムの変更時にエントリー・テンプレート設定が適用されるようにする。</li><li>階層フォルダー・クラスのみ: エントリー・テンプレート・フォルダーの関連付けをサポートする。</li></ul>クラスを変更するには、ライブラリー・サーバー管理者としてリポジトリーに接続する必要があります。",
		admin_repcfg_entry_template_enable_classes_warning: "重要: 指定したクラスはすべて、エントリー・テンプレートをサポートするように変更されます。 変更内容の保存後に、その変更内容をクラスから削除することはできません。<br><br>クラスを変更するには、ライブラリー・サーバー管理者としてリポジトリーに接続する必要があります。",
		admin_repcfg_entry_template_enable_classes_available: "使用可能なクラス",
		admin_repcfg_entry_template_enable_classes_selected: "選択したクラス",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "エントリー・テンプレート ID の保管",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "アイテムの追加に使用したエントリー・テンプレートの ID を保管し、アイテムの変更時にエントリー・テンプレート設定が適用されるように、このクラスを変更します。",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "フォルダーの関連付けの保管",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "エントリー・テンプレートのフォルダーの関連付けをサポートできるように、このクラスを変更します。 このオプションは、階層フォルダー・クラスでのみ使用可能です。",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "このクラスは、既にエントリー・テンプレート ID を保管するように変更されています。 このオプションは削除できません。",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "このクラスは、既にフォルダーの関連付けを保管するように変更されています。 このオプションは削除できません。",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "フォルダーの関連付けの保管に使用できるのは、階層フォルダー・クラスと非階層クラスだけです。",
		admin_repcfg_entry_template_root_folder_association_title: "ルート・フォルダーに関連付けられているエントリー・テンプレート:",
		admin_repcfg_entry_template_root_folder_association_hover: "IBM Content Manager リポジトリーでルート・フォルダーに関連付けるエントリー・テンプレートを指定します。<br /><br />ルート・フォルダーにエントリー・テンプレートを関連付けているときに、ユーザーが階層フォルダーにアイテムを追加する場合、アイテムの追加にはエントリー・テンプレートが常に使用されます。",
		admin_repcfg_entry_template_root_folder_association_button: "関連付けの設定",
		admin_repcfg_oos_enable_classes_label: "Office Online および編集サービスのサポートのために変更するクラス:",
		admin_repcfg_oos_enable_classes_warning: "重要: 指定したクラスは、Microsoft Office Online または編集サービスで機能するように変更されます。 変更内容を保存した後は、各クラスに自動的に追加された参照属性を削除できません。<br><br>クラスを変更するには、ライブラリー・サーバー管理者としてリポジトリーに接続する必要があります。",
		admin_repcfg_oos_enable_classes_available: "使用可能なクラス",
		admin_repcfg_oos_enable_classes_selected: "選択したクラス",
		admin_repcfg_oos_enable_classes_note: "重要:",
		admin_repcfg_oos_enable_classes_selected_not_support: "このクラスは、Microsoft Office Online または編集サービスではサポートされません。",
		admin_repcfg_oos_enable_classes_selected_not_support1: "このクラスのバージョン・ポリシーは常にバージョンに対して設定されます。これは Microsoft Office Online または編集サービスではサポートされません。 異なるクラスを選択してください。",
		admin_repcfg_download_recording: "ダウンロードのトラッキング:",
		admin_repcfg_download_recording_hover: "Social Collaboration Base Extensions アドオンがリポジトリーにインストールされている場合、ダウンロードはデフォルトでトラッキングされます。 ただし、このオプションを無効にすると、リポジトリーのパフォーマンスを向上させることができます。<br><br>このオプションを無効にすると、このオプションを無効にする前に行われたダウンロードの数がユーザーに表示されます。",
		admin_repcfg_sync_service: "同期サービス:",
		admin_repcfg_download_ignored: "特定のユーザーのダウンロードを無視する:",
		admin_repcfg_download_ignored_hover: "特定のユーザー (管理者またはシステム・アカウントなど) によって要求されたダウンロードを無視することにより、ドキュメントをダウンロードしたユーザーの数をより正確に反映できます。 例えば、月次レポートを生成するためにコンテンツのダウンロードに使用された特定のアカウントがある場合は、そのアカウントが要求したダウンロードを無視できます。<br><br><b>制約事項:</b> グループを指定することはできません。",

		admin_repcfg_add_as_major_version: "メジャー・バージョンとして追加:",
		admin_repcfg_enable_add_as_major_version: "はい",
		admin_repcfg_disable_add_as_major_version: "いいえ",
		admin_repcfg_checkin_as_major_version: "メジャー・バージョンとしてチェックイン:",
		admin_repcfg_enable_checkin_as_major_version: "はい",
		admin_repcfg_disable_checkin_as_major_version: "いいえ",
		admin_repcfg_annotation_security: "アノテーション・セキュリティー:",
		admin_repcfg_inherit_annotation_security: "格納ドキュメントのセキュリティーを複製",
		admin_repcfg_default_annotation_security: "デフォルトのアノテーション・セキュリティーを使用",
		admin_repcfg_connection_point: "ワークフローの接続ポイント:",
		admin_repcfg_include_workflow_definition: "ワークフロー定義クラスの表示:",
		admin_repcfg_include_form_template: "フォーム・テンプレート・クラスの表示:",
		admin_repcfg_enable_include_workflow_definition: "はい",
		admin_repcfg_disable_include_workflow_definition: "いいえ",

		admin_repcfg_status_columns: "状態アイコン:",
		admin_repcfg_status_columns_hover: "アイコンの表示対象になる状態を指定します。 状態アイコンは、コンテンツ・リスト内のドキュメント、フォルダー、およびワーク・アイテムの横に表示されます。",
		admin_repcfg_status_columns_documents_or_folders: "ドキュメントまたはフォルダーの場合にアイコンを表示:",
		admin_repcfg_status_columns_documents: "ドキュメントの場合にアイコンを表示:",
		admin_repcfg_status_columns_documents_checked_out: "チェックアウト済み",
		admin_repcfg_status_columns_documents_declared_records: "レコードとして宣言済み",
		admin_repcfg_status_columns_documents_minor_versions: "マイナー・バージョンあり",
		admin_repcfg_status_columns_documents_compound_document: "複合ドキュメントである",
		admin_repcfg_status_columns_documents_bookmarks: "ブックマークあり",
		admin_repcfg_status_columns_documents_hold: "保留中",
		admin_repcfg_status_columns_documents_notes: "注記あり",
		admin_repcfg_status_columns_work_items: "ワーク・アイテムの場合にアイコンを表示:",
		admin_repcfg_status_columns_work_items_locked: "ロック済み",
		admin_repcfg_status_columns_work_items_checked_out: "チェックアウト済み",
		admin_repcfg_status_columns_work_items_deadline: "期限あり",
		admin_repcfg_status_columns_work_items_suspended: "処理が中断状態",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF 構成ファイル:",
		admin_repcfg_transform_xml_file: "カスタム・トランスフォーム・ファイル:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "有効化",
		admin_repcfg_disable_ssl: "無効化",
		admin_repcfg_keyringdb_file: "鍵リング・データベース・ファイル:",
		admin_repcfg_keyringstash_file: "鍵リング stash ファイル:",
		admin_repcfg_od_sso: "シングル・サインオン",
		admin_repcfg_od_enable_sso: "有効化",
		admin_repcfg_od_disable_sso: "無効化",
		admin_repcfg_od_sso_password: "パスワード",
		admin_repcfg_advanced_label: "拡張設定",
		admin_repcfg_custom_properties_label: "カスタム・プロパティー:",
		admin_repcfg_new_button_label: "新規",
		admin_repcfg_edit_button_label: "編集",
		admin_repcfg_delete_button_label: "削除",
		admin_repcfg_custom_head1: "名前",
		admin_repcfg_custom_head2: "値",
		admin_repcfg_ecpdialog_title_new: "新規カスタム・プロパティー",
		admin_repcfg_ecpdialog_title_edit: "カスタム・プロパティーの編集",
		admin_repcfg_ecpdialog_name: "名前:",
		admin_repcfg_ecpdialog_value: "値:",
		admin_repcfg_ecpdialog_save: "保存",
		admin_repcfg_ecpdialog_create: "作成",
		admin_repcfg_ecpdialog_cancel: "キャンセル",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "この値は必須です。 値に空白を含めること、および値を重複させることはできません。",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP エンコードの使用:",

		admin_repcfg_task_mgr_proxy: "タスク・マネージャー接続 ID:",
		admin_repcfg_task_mgr_proxy_hover: "Box Share またはチームスペースの削除の場合、リポジトリーに変更を加えるバックグラウンド・タスクを実行するため、タスク・マネージャーにおいて管理者のユーザー ID とパスワードが使用されます。<br><br>「設定」をクリックし、有効なリポジトリー管理者ユーザー ID およびパスワードを使用してリポジトリーにログインしてください。",
		admin_task_manager_not_enabled_warning: "このオプションにはタスク・マネージャー・サービスが必要ですが、タスク・マネージャー・サービスが有効になっていません。  タスク・マネージャー・サービスは、「設定」の「一般」ページで、すべてのデスクトップについて有効にすることができます。",
		admin_task_manager_not_enabled_and_user_warning: "このオプションにはタスク・マネージャー・サービスが必要ですが、タスク・マネージャー・サービスが有効になっていません。 このページでタスク・マネージャーの接続 ID を設定した後、「設定」の「一般」ページですべてのデスクトップについてタスク・マネージャー・サービスを有効にしてください。",
		admin_task_manager_user_id_pw_not_set_warning: "このオプションには、タスク・マネージャー・サービス、および管理者のユーザー ID とパスワードが必要です。 このページで、タスク・マネージャー接続 ID を設定してください。",
		admin_repcfg_teamspaces_delete_task_id: "リポジトリー管理者:",
		admin_repcfg_teamspaces_delete_task_password: "パスワード:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "タスク・マネージャー・サービスがリポジトリーのチームスペースを削除できるようにするには、ライブラリー・サーバー管理者を指定する必要があります。",
		admin_repcfg_teamspaces_delete_task_hover: "デフォルトでは、ユーザーがチームスペースを削除した場合、そのチームスペースは非表示になります。 チームスペース内のすべてのフォルダーおよびドキュメントはリポジトリー上に残ります。 <br /> <br />このオプションを有効にすると、リポジトリー内の他のフォルダーにファイリングされたドキュメントのみがリポジトリー上に残ります。",
		admin_repcfg_display_recent_teamspaces_p8_hover: "環境内に多数のチームスペースがある場合は、<b>「チームスペース」</b>タブにすべてのチームスペースが表示されるまで長時間かかる可能性があります。 このオプションを選択すると、リストへのデータの取り込みに要する時間を削減できます。<br /><br />指定された範囲外にあるチームスペースで作業する必要がある場合、ユーザーは<b>「フィルター」</b>フィールドを使用してチームスペースを検索できます。",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "このオプションを選択すると、チームスペースで所有者ロールを持つユーザーが、IBM Content Navigator バージョン 2.0.2 より前に作成されたチームスペースに関連付けられているロールを変更できます。<br /><br />このオプションは、IBM Content Navigator バージョン 2.0.2 で作成されたチームスペースには影響しません。",
		admin_repcfg_use_teamspaces_cm_hover: "ユーザーがこのリポジトリーでチームスペースおよびチームスペース・テンプレートを作成できるようにするかどうかを指定します。<br /><br /><b>重要:</b> リポジトリーは階層型のフォルダーをサポートしている必要があります。<br /><br />チームスペースを有効にすると、IBM Content Navigator により、リポジトリーにチームスペース・データ・モデルが作成されます。 このデータ・モデルには、ACL オブジェクト、特権、特権セット、および 2 つの新しいアイテム・タイプが含まれます。",
		admin_repcfg_folder_selector_hover: "ユーザーがドキュメントを参照する際にルート・フォルダーとして使用するフォルダーを選択します。 リポジトリーに階層フォルダーが構成されていない場合には、この設定でルート・フォルダーを定義することによって参照が可能となります。 リポジトリーに階層フォルダーが構成されている場合には、この設定でリポジトリーに構成されているルート・フォルダーをオーバーライドします。",
		admin_repcfg_cm_use_sso_hover: "トラステッド・ログオン特権セットがあるユーザーにシングル・サインオンを許可するかどうかを指定します。<br /><br /><b>重要:</b> この構成パラメーターが機能するには、シングル・サインオンが Content Manager サーバーで有効になっていて、LTPA 用に WebSphere Application Server が構成されている必要があります。",
		admin_repcfg_cm_direct_retrieve_hover: "デフォルトでは、直接取得が有効になっています。これは、直接取得を有効にすると、リソース・マネージャーのコンテンツを Web クライアントが迅速に取得できるようになるためです。 <br /><br />クライアント・アプリケーションからリソース・マネージャーへの直接アクセスを禁止したい場合、または、URL 経由での Web クライアントからリソース・マネージャーへのアクセスを禁止するファイアウォールまたはプロキシー・サーバーが構成されている場合は、このオプションを無効にすることができます。 例えば、ファイアウォールを使用すると、直接取得が有効になっている場合でも、ユーザーによるアプレット・ビューアーでのドキュメントの表示を禁止することができます。",
		admin_repcfg_cmItemTypesToDisplay: "IBM Content Manager サーバーでリソースのアイテム・タイプおよびアイテムのアイテム・タイプをユーザーに表示しないようにする必要がある場合は、ドキュメント・モデルのアイテム・タイプのみを表示できます。 アイテム・タイプは、ユーザーが検索の作成、ドキュメントの追加、およびフォルダーの作成を行ったときに表示されます。",
		admin_repcfg_cm_language_codes_hover: "Content Manager サーバーからデータを返すための言語を指定します。 使用可能な言語のリストは、サーバーにある言語定義のリストにより制御されます。<br /><br /><b>注意:</b> Web クライアントのデータは、ユーザーの Web ブラウザーで設定されている言語で表示されます。",
		admin_repcfg_cm_pdf_conversion_hover: "複数のパーツで構成されるドキュメントを E メールの添付ファイルとしてユーザーが送信するときに PDF に変換する対象のドキュメントのタイプを指定します。 すべてのパーツが単一の PDF ドキュメントに結合されます。",
		admin_repcfg_use_teamspaces_p8_hover: "ユーザーがこのリポジトリーでチームスペースおよびチームスペース・テンプレートを作成できるようにするかどうかを指定します。<br /><br />チームスペースを有効にすると、IBM Content Navigator により、リポジトリーにチームスペース・データ・モデルが作成されます。 このデータ・モデルには、プロパティー・テンプレート、カスタム・オブジェクト、フォルダー・オブジェクト、および複数のフォルダーが含まれます。",
		admin_repcfg_use_entry_template_p8_hover: "ユーザーが IBM Content Navigator から、このリポジトリーでエントリー・テンプレートを作成および管理できるようにするかどうかを指定します。 この機能を有効にしない場合、ユーザーは、リポジトリー上に既に存在するエントリー・テンプレートを検索して使用できます。<br /><br />エントリー・テンプレート管理を有効にすると、IBM Content Navigator によってリポジトリー上のエントリー・テンプレートのデータ・モデルが更新されます。 この更新には、新規プロパティーが含まれています。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>詳細</a>",
		admin_repcfg_use_entry_template_cm_hover: "ユーザーが IBM Content Navigator から、このリポジトリーでエントリー・テンプレートを作成および管理できるようにするかどうかを指定します。<br /><br />エントリー・テンプレート管理を有効にすると、IBM Content Navigator によってリポジトリー上にエントリー・テンプレートのデータ・モデルが作成されます。 このデータ・モデルには、新規 ACL オブジェクト、新規プロパティー、および新規アイテム・タイプが含まれます。 <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>詳細</a>",
		admin_repcfg_sync_service_p8_hover: "ユーザーがお気に入りのアイテムを複数のワークステーションやモバイル・デバイス間で同期化できるようにするかどうかを指定します。<br><br><b>重要:</b> この機能を使用するには、以下のタスクも実行する必要があります。<br><ul><li>管理ツールの<b>「同期サービス」</b>セクションの<b>「同期サービス・パブリック URL」</b>を指定します。</li><li>同期サービスが有効になっているデスクトップにこのリポジトリーを追加します。</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "ユーザーがリポジトリーにドキュメントを追加するときに、デフォルトでメジャー・バージョン・オプションが選択されるかどうかを指定します。<br /><br />ユーザーには、ドキュメントをマイナー・バージョンとして追加する必要がある場合に、このオプションをクリアするオプションがあります。",
		admin_repcfg_p8_checkin_as_major_version_hover: "ユーザーがリポジトリーにドキュメントをチェックインするときに、デフォルトでメジャー・バージョン・オプションが選択されるかどうかを指定します。<br /><br />ユーザーには、ドキュメントをマイナー・バージョンとしてチェックインする必要がある場合に、このオプションをクリアするオプションがあります。",
		admin_repcfg_p8_annotation_security_hover: "デフォルトでアノテーションに適用するセキュリティーのタイプを指定します。<br /><br />ユーザーには、アノテーションのセキュリティーを変更するオプションがあります。",
		admin_repcfg_p8_connection_point_hover: "IBM FileNet P8 ワークフローを使用する場合、Process Engine 接続ポイントを選択します。 選択する接続ポイントにより、このリポジトリーにアクセスするユーザーが使用可能なワークフローが決まります。",
		admin_repcfg_p8_include_workflow_definition_hover: "Web クライアントに IBM FileNet P8 ワークフロー定義ドキュメント・クラスを表示すると、ユーザーがリポジトリーの検索およびワークフロー定義のリポジトリーへの追加を実行できます。",
		admin_repcfg_p8_include_form_template_hover: "Web クライアントに IBM FileNet P8 フォーム・テンプレート・ドキュメント・クラスを表示すると、ユーザーがリポジトリーの検索およびフォーム・テンプレートのリポジトリーへの追加を実行できます。",
		admin_repcfg_od_afp2pdf_config_file_hover: "このリポジトリーに対する AFP2PDF 構成ファイルの、Web アプリケーション・サーバー上の絶対パスを指定します。 AFP データを表示および印刷するには、AFP2PDF トランスフォームが必要です。<br /><br /><b>注意:</b> このパラメーターを使用するには、AFP2PDF トランスフォームがインストールされている必要があります。",
		admin_repcfg_od_transform_xml_file_hover: " カスタム・トランスフォームを使用して Content Manager OnDemand コンテンツを変換する場合、トランスフォームを定義するために使用する XML ファイルの絶対パスを指定します。 この XML ファイルは、Web アプリケーション・サーバーに配置されている必要があります。",
		admin_repcfg_od_ssl_hover: "IBM Content Navigator アプリケーション・サーバーと Content Manager OnDemand ライブラリー・サーバーおよびオブジェクト・サーバーとの間の通信を SSL を使用して暗号化するかどうかを指定します。<br /><br /><b>重要:</b> Content Manager OnDemand に対して SSL を使用可能にする場合、この設定に、IBM Content Navigator アプリケーション・サーバー、Web サーバー、またはユーザーのワークステーションとの間の通信は含まれません。",
		admin_repcfg_od_ssl_keyringdb_file_hover: "このリポジトリーに対する鍵リング・データベース・ファイルの、Web アプリケーション・サーバー上の絶対パスを指定します。 例: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb。<br /><br />鍵リング・データベース・ファイルには、トラステッド・ルート証明書が格納されます。 このファイルに対する無許可アクセスを防ぐために、強力なファイル・システム保護を使用してください。",
		admin_repcfg_od_ssl_keyringstash_file_hover: "このリポジトリーに対する鍵リング stash ファイルの、Web アプリケーション・サーバー上の絶対パスを指定します。 例: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth。<br /><br />鍵リング stash ファイルには、鍵リング・データベース・ファイルのパスワードが含まれます。 このファイルに対する無許可アクセスを防ぐために、強力なファイル・システム保護を使用してください。",
		admin_repcfg_od_sso_password_hover: "OnDemand サーバーに対するシングル・サインオンに使用するパスワードを指定します。",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API はカスタム・プロパティーをサポートしています。 Web クライアントを通じてリポジトリーに接続するときにカスタム・プロパティーを使用する場合、カスタム・プロパティーの名前と値を指定します。<br /><br />サポートされるカスタム・プロパティーについて詳しくは、ODWEK インストール・ディレクトリーの /api サブディレクトリーにある「ODWEK Java API Javadocs」を参照してください。",
		admin_repcfg_od_custom_properties_name_hover: "プロパティー名を入力します。",
		admin_repcfg_od_custom_properties_value_hover: "プロパティー値を入力します。",
		admin_repcfg_od_use_sso_hover: "ユーザーにシングル・サインオンを許可するかどうかを指定します。<br /><br /><b>重要:</b> この構成パラメーターが機能するには、シングル・サインオンが Content Manager OnDemand サーバーで有効になっている必要があります。",
		admin_repcfg_cmis_use_gzip_encoding_hover: "この CMIS ソースに GZIP エンコードを使用します。",
		admin_repcfg_cm_use_part_file_name: "ドキュメントのダウンロード時に使用するファイル名:",
		admin_repcfg_cm_use_part_file_name_help: "ユーザーがドキュメントをダウンロードするときに、どのようにドキュメントのファイル名が決定されるかを指定します。",
		admin_repcfg_cm_use_part_file_name_enable: "ファイル名を使用",
		admin_repcfg_cm_use_part_file_name_disable: "リポジトリー内のアイテムの名前を使用",
		admin_repcfg_add_doc_name: "追加されるドキュメントのデフォルト名:",
		admin_repcfg_add_doc_name_hover: "ユーザーは、ドキュメント追加の前に名前を変更することができます。",
		admin_repcfg_add_doc_name_empty: "なし (空白)",
		admin_repcfg_add_doc_name_file_name: "選択されているドキュメントのファイル名",

		admin_repcfg_compound_documents: "複合ドキュメント機能:",
		admin_repcfg_compound_documents_hover: "ナビゲーションなどの P8 複合ドキュメント機能を有効にします。",
		admin_repcfg_cm_action_list_config_enabled: "ワーク・アイテムのアクション・リスト:",
		admin_repcfg_cm_action_list_config_hover: "Content Manager システム管理クライアントで文書ルーティングを構成するときに、ユーザーがワーク・アイテムに対して実行できるアクションのリストを指定できます。<br /><br />Content Manager サーバーのアクション・リストを使用する場合は、このオプションを選択します。 これらの設定はワーク・アイテムのコンテキスト・メニューと「プロパティーの編集」ウィンドウで使用されます。<br /><br /><b>重要:</b> 「アクション・リスト」の設定は、Content Navigator 管理ツールで構成したすべてのカスタマイズ・メニューをオーバーライドします。 アクション・リストに全く設定がない場合には、ユーザーはワーク・アイテムに対してアクションを何も実行できません。",

		admin_repcfg_box_share: "Box Share",
		admin_repcfg_box_share_p8_hover: "ユーザーがこのリポジトリーからドキュメントを共有できるようにします。 ドキュメントの共有には、ファイルを Box にコピーしたり、リンクを作成したり、リンクを E メールで送信したりすることが含まれます。<br /><br />Box Share を有効にする場合、IBM Content Navigator によりリポジトリー上に Box Share データ・モデルが作成されます。 IBM Content Navigator Box Share アドオンをインストールするには、ライブラリー・サーバー管理者としてリポジトリーに接続されていることが必要です。",

		admin_menu_type_icon: "メニュー・タイプ・アイコン",
		admin_menu_toolbar_hover: "ツールバー",
		admin_menu_toolbar_custom_hover: "カスタム・ツールバー",
		admin_menu_contextMenu_hover: "コンテキスト・メニュー",
		admin_menu_contextMenu_custom_hover: "カスタム・コンテキスト・メニュー",

		admin_menu_contextMenu_custom_empty: "カスタム・コンテキスト・メニューは、構成されているプラグインに定義されていません。",
		admin_menu_toolbar_custom_empty: "カスタム・ツールバーは、構成されているプラグインに定義されていません。",

		admin_file_type_category_filters: "ファイル・タイプ・フィルター:",
		admin_file_type_category_filters_hover_help: "以下の状況でユーザーが使用できるファイル・タイプのリストを指定します。<ul><li>IBM Content Navigator for Microsoft Office で検索または参照する際に、結果のリストを絞り込む<li>Web クライアントで IBM FileNet P8 リポジトリーを検索する際に、結果のリストを絞り込む<li>エントリー・テンプレートを使用する際に、ユーザーがリポジトリーに追加できるファイルのタイプを制限する</ul>",
		admin_file_type_only_use_in_et_folder_association: "「エントリー・テンプレート・フォルダーの関連付け」にのみ表示",
		admin_office_config_properties_label: "Office プロパティー",
		admin_office_config_type_label: "データ型",
		admin_office_config_mapped_property_label: "リポジトリー・プロパティー",
		admin_office_config_properties_hover_help: "リポジトリー・プロパティーにマップする対象の各 Microsoft Office プロパティーの名前を入力し、追加します。 すべてのプロパティーのデータ型が一致する必要があります",
		admin_office_config_mapped_property_hover_help: "Office プロパティーを複数のリポジトリー・プロパティーにマップする場合、新規のプロパティー・マッピングを作成する必要があります",
		admin_new_property_mapping_title: "新規プロパティー・マッピング",
		admin_property_mapping_title: "プロパティー・マッピングの編集",
		admin_property_mapping_instruction: "リポジトリーのプロパティーにマップする Microsoft Office プロパティーを指定します。 Office プロパティーのデータ型は、リポジトリーのプロパティーのデータ型と一致する必要があります。 <br /><br />Office ドキュメントにマッピングからのプロパティーが複数ある場合、IBM Content Navigator は、リスト内の最初のプロパティーを使用して、リポジトリーのプロパティーにデータを設定します。",
		admin_ms_general_settings: "一般構成:",
		admin_ms_delete_local_settings: "ユーザーが次の操作を行ったときにローカル・ファイルを削除する:",
		admin_ms_outlook_options: "Outlook 統合:",
		admin_ms_enable_props_mapping: "ユーザーが次の操作を行ったときに Office プロパティーをリポジトリー・プロパティーにマップする:",
		admin_ms_open_doc_when_checkout: "ドキュメントを開いたときに自動的にチェックアウトする",
		admin_ms_open_doc_when_checkout_hover_help: "このオプションを選択すると、ファイルの古いバージョンでリポジトリーのファイルをユーザーが上書きできなくなります。",
		admin_ms_prompt_close_office: "ユーザーが Office アプリケーションを閉じるときにドキュメントをチェックインするようプロンプトを出す",
		admin_ms_prompt_close_office_hover_help: "このオプションを選択すると、ユーザーが作業内容をチェックインし忘れることがなくなります。",
		admin_ms_add_with_entry_template_only: "「テンプレートとともに追加」アクションのみを表示",
		admin_ms_delete_local_on_add: "ユーザーがドキュメントを追加するとき、ローカル・ファイルを削除する",
		admin_ms_delete_local_on_checkin: "ユーザーがドキュメントをチェックインするとき、またはチェックアウトを取り消すとき、ローカル・ファイルを削除する",
		admin_ms_delete_local_on_add_hover_help: "ユーザーが IBM Content Navigator for Microsoft Office でドキュメントを追加すると、ドキュメントはリポジトリーに追加され、ユーザーが即座にドキュメントをチェックアウトして変更を加えられるよう、ドキュメントのローカル・コピーは開いたままになります。<br /><br />ドキュメントをリポジトリーに追加した後、ドキュメントのローカル・コピーを自動的に閉じて削除するには、このオプションを選択します。",
		admin_ms_delete_local_on_checkin_hover_help: "ユーザーが IBM Content Navigator for Microsoft Office でドキュメントをチェックインすると、ドキュメントはリポジトリーにチェックインされ、ドキュメントのローカル・コピーは開いたままになります。 また、チェックアウトの取り消しアクションを使用した後も、ドキュメントのローカル・コピーは開いたままになります。 ローカル・コピーを開いたままにしておくと、ユーザーは即座に再びドキュメントをチェックアウトして変更を加えることができます。<br /><br />ドキュメントをチェックインするか、チェックアウトの取り消しアクションを使用した後、ドキュメントのローカル・コピーを自動的に閉じて削除するには、このオプションを選択します。",
		admin_ms_delete_local_on_save: "ドキュメントを保存する",
		admin_ms_prompt_for_props_on_add: "ユーザーがリポジトリーに E メールを追加するときに、プロパティー値を指定するようにプロンプトを出す",
		admin_ms_prompt_for_props_on_add_hover_help: "このオプションを選択しない場合、Web クライアントは、そのリポジトリーに定義されている  Outlook のプロパティー・マッピングを使用します。<br /><br />E メールの追加先のフォルダーに関連付けられているエントリー・テンプレートがある場合、プロパティーの指定を求めるプロンプトがユーザーに出されない可能性があります。",
		admin_ms_delete_email_on_add: "E メールをリポジトリーに追加するときに、E メール・サーバーからその E メールを削除する",
		admin_ms_send_email_as_link_only: "ユーザーがドキュメントを添付ファイルとして送信できないようにする",
		admin_ms_send_email_as_link_only_hover_help: "このオプションを選択すると、ユーザーがドキュメントを送信できるのは、Outlook からのリンクとしてのみになります。 このオプションにより、リポジトリーに対して該当の特権を持つユーザーのみが、ドキュメントを表示できるようになります。",
		admin_ms_enable_prop_mapping_for_add: "ユーザーがドキュメントを追加またはチェックインするときに Office プロパティーをリポジトリー・プロパティーにマップする",
		admin_ms_checkout_document_after_add: "ドキュメントがリポジトリーに追加された後、ドキュメントを自動的にチェックアウトする",
		admin_no_default_document_type_filtering: "ユーザーが検索を実行する際に、デフォルトですべてのドキュメント・タイプを返す",
		admin_no_default_document_type_filtering_hover_help: "IBM Content Navigator for Microsoft Office では、デフォルトの動作として、ユーザーが検索を実行する際に、現在のアプリケーションのドキュメント・タイプのみがユーザーに表示されます。 例えば、Microsoft Word から検索が行われると、Word のドキュメント・タイプがデフォルトで選択されます。<br/><br/>ただし、このオプションを選択すると、「ドキュメント・タイプ」チェック・ボックスがクリアされ、検索で返されたすべてのドキュメントがユーザーに表示されるようになります。 ユーザーは、検索を実行する前にドキュメント・タイプを 1 つ以上選択することで、この設定をオーバーライドできます。",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Microsoft Office ドキュメントに定義されているドキュメント・プロパティーをリポジトリーに定義されているプロパティーにマップするかどうかを指定します。<br /></br /><b>重要:</b> この機能を有効にする場合、環境内のリポジトリーごとに Office プロパティーを構成する必要があります。 Office プロパティーをリポジトリー・プロパティーにマップしない場合、この機能は動作しません。<br /><br />この設定は、Microsoft Outlook には適用されません。",
		admin_ms_checkout_document_after_add_hover_help: "ドキュメントをリポジトリーに追加した後、ユーザーがドキュメントを処理するために実行する必要がある手順の数を減らすには、このオプションを選択します。<br /></br /><b>ヒント:</b> ユーザーが間違いなくファイルをリポジトリーにチェックインするためには、<b>「ユーザーが Office アプリケーションを閉じるときにドキュメントをチェックインするようプロンプトを出す」</b>を選択します。",
		admin_ms_show_details_recently_used: "<b>「最近使用したアイテム」</b>の詳細を表示",
		admin_ms_show_details_recently_used_hover_help: "デフォルトでは、「最近使用したアイテム」のリストを表示する際、アイテムの詳細は非表示になっており、より多くのアイテムが表示されるようになっています。 このオプションを選択すると、「最近使用したアイテム」リストにおいて、詳細ペインの最初のドキュメントの詳細がデフォルトで表示されます。",
		admin_ms_show_no_permissions_warning: "ユーザーがプロパティーを編集するとき、またはドキュメントをチェックインするときに、ドキュメントのエントリー・テンプレートを表示する権限がない場合は警告を表示する",
		admin_ms_show_no_permissions_warning_hover_help: "リポジトリー内のドキュメントがエントリー・テンプレートを使って作成されたものであるにも関わらず、ユーザーがドキュメントのエントリー・テンプレートを表示する権限を持たない場合、エントリー・テンプレートは取得されません。<br /><br/>それで、ユーザーがドキュメントのプロパティーを編集するとき、プロパティーはエントリー・テンプレートを使用せずに表示されます。 そして、ユーザーがドキュメントをチェックインするとき、ドキュメントはエントリー・テンプレートを使用せずにチェックインされます。<br /><br />デフォルトでは、これらのアクションが発生するとき、エントリー・テンプレートが使用されないことはユーザーに通知されません。 警告がログ・ファイルに記録されるに過ぎません。<br /><br />エントリー・テンプレートが使用されない場合に、そのことを即座にユーザーに知らせる警告を表示するには、このオプションを選択します。",
		admin_ms_hide_search_actions: "検索フィルター・セクションの省略",
		admin_ms_hide_search_actions_hover_help: "デフォルトでは、ユーザーはアクション・フィルターを適用して、アクション、ユーザー、またはユーザーのグループを指定したり、アクションが発生した日付または日付範囲を選択したりすることができます。 例えば、自分が先月追加したドキュメントのみを検索することができます。<br /><br />アクション・フィルターの適用をユーザーに許可しない場合は、このオプションを選択して、アクション・フィルターを非表示にし、検索条件を定義するときに表示されるフィールドの数を減らしてください。",
		admin_ms_hide_save_document: "リボン・バーの<b>「保存」</b>オプションを非表示",
		admin_ms_hide_save_document_hover_help: "<b>「保存」</b>オプションを使用することにより、ユーザーはドキュメントをチェックインせずにドキュメントの変更をリポジトリーに保存することができます。",
		admin_ms_indicate_managed_email_on_add: "E メールが既にリポジトリーに追加されているかどうかを示す",
		admin_ms_indicate_managed_email_on_add_hover_help: "このオプションを選択すると、ユーザーは、E メールが既にリポジトリー内にあることが分かるので、E メールをリポジトリーに追加する回数を削減できます。  このオプションを選択すると、IBM ECM と呼ばれる新しい色カテゴリーが Microsoft Outlook に作成されます。 リポジトリーに追加されるすべての E メールが「IBM ECM で管理」カテゴリーに自動的に追加されます。",
		admin_ms_edit_group_add_command_configuration: "「編集」グループの「追加」オプション:",
		admin_ms_edit_group_add_command_configuration_hover_help: "リボン・バーの<b>「編集」</b>グループから使用できる<b>「追加」</b>オプションを指定します。<ul><li>「追加」ボタンと、「編集」グループから使用できるすべての「追加」アクションを表示する場合は、<b>「すべての「追加」オプションを表示」</b>を選択します。</li><li>ユーザーがリポジトリーにドキュメントを追加できないようにしたり、ユーザーがチームスペース内からのみドキュメントを追加できるようにしたりする場合は、<b>「すべての「追加」オプションを非表示」</b>を選択します。</li><li>エントリー・テンプレート・フォルダーの関連付けを適用し、ユーザーが別のエントリー・テンプレートを選択できないようにする場合は、<b>「「テンプレートとともに追加」アクションを非表示」</b>を選択します。</li><li>ユーザーがドキュメントを追加する際にエントリー・テンプレートを使用することを必須にする場合は、<b>「「テンプレートとともに追加」アクションのみを表示」</b>を選択します。</li></ul>",
		admin_ms_show_edit_group_add_button: "すべての「追加」オプションを表示 (デフォルト)",
		admin_ms_hide_edit_group_add_button: "すべての「追加」オプションを非表示",
		admin_ms_hide_add_with_entry_template: "「テンプレートとともに追加」アクションを非表示",
		admin_ms_managed_in_ecm: "IBM ECM で管理",
		admin_ms_managed_in_ecm_hover_help: "ユーザーが Microsoft Outlook でカテゴリーを表示する場合は、IBM Content Manager または IBM FileNet Content Manager リポジトリーに追加された E メールに対してこのラベルが表示されます。",
		admin_ms_managed_in_ibm_ecm_input_invalid: "「IBM ECM で管理」カテゴリー名に、コンマ (,) やセミコロン (;) を含めることはできません。",
		admin_delete_open_docs_after_close: "ユーザーがドキュメントを閉じたときに、開いているドキュメントを自動的に削除",
		admin_admin_delete_open_docs_after_close_hover_help: "ユーザーが IBM Content Navigator for Microsoft Office でドキュメントを開くと、そのドキュメントは、ユーザーのドキュメント・ディレクトリー、またはデスクトップのファイル・トラッキング設定で指定されたロケーションにダウンロードされます。<br><br>ユーザーがドキュメントを閉じたときに、開いているがチェックアウトされていないファイルを削除する場合は、このオプションを選択します。 このオプションを選択すると、以下のことが可能になります。<ul><li>IT ポリシーへの準拠を行う</li><li>ユーザーが確実に最新バージョンのドキュメントで作業する</li><li>ドキュメントの保管に使用されるディスク・スペースの量を削減する</li><ul>",
		admin_ms_custom_command_configuration: "カスタム・コマンド:",
		admin_ms_custom_command_configuration_hover_help: "Microsoft Office アプリケーションの IBM Content Navigator for Microsoft Office ツールバーには、コマンドを 4 つまで追加できます。 これらのコマンドを使用して URL を開くことができます。 例えば、ユーザーとグループの検索に使用できるサービスを開くコマンドを追加できます。",
		admin_ms_custom_command_dialog_title: "カスタム・コマンドの編集",
		admin_ms_custom_command_dialog_intro_text: "Microsoft Office アプリケーションの IBM Content Navigator for Microsoft Office ツールバーから URL を開くときに使用できるコマンドを定義します。",
		admin_ms_custom_command_id: "コマンド ${0}",
		admin_ms_custom_command_available_label: "使用可能",
		admin_ms_custom_command_available_hover_help: "コマンド用に定義された URL をメンテナンスのためにオフラインにする必要がある場合は、コマンドのチェック・ボックスをクリアして、コマンドが Microsoft Office で表示されないようにすることができます。<br/><br/><b>重要:</b> ユーザーは、変更が IBM Content Navigator for Microsoft Office に反映されるように、デスクトップからログアウトする必要があります。",
		admin_ms_custom_command_command_id_label: "コマンド ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "ラベル",
		admin_ms_custom_command_label_hover_help: "Microsoft Office のコマンド用に表示するラベルを指定します。",
		admin_ms_custom_command_description_label: "説明",
		admin_ms_custom_command_description_hover_help: "Microsoft Office のコマンド用に表示する説明を指定します。",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Microsoft Office から開く完全修飾 URL を指定します。 この URL には、Web ページやサービスを指定できます。",
		admin_ms_custom_command_icon_label: "アイコン",
		admin_ms_custom_command_icon_hover_help: "表示するアイコンのファイル名 (例えば CommandIcon.png) を指定します。<br/><br/><b>重要:</b> アイコン・ファイルは、各クライアント・マシン上の IBM Content Navigator for Microsoft Office インストール・ディレクトリーの Plugins サブディレクトリーに追加する必要があります。<br/><br/>Plugins ディレクトリーにアイコン・ファイルがない場合やアイコンを指定しない場合は、デフォルト・アイコンの customButtonIcon_38.gif が表示されます。",
		admin_ms_custom_command_group_name: "グループ・ラベル:",
		admin_ms_custom_command_group_name_hover_help: "リボン・バーのカスタム・コマンドの下に表示するグループ・ラベルを指定できます。<br/><br/>ラベルを指定しない場合、グループ・ラベルは<b>「カスタム・コマンド」</b>になります。",
		admin_ms_ribbon_tab_label: "IBM ECM タブ・ラベル:",
		admin_ms_ribbon_tab_hover_help: "Microsoft Office リボン・バーの IBM Content Navigator for Microsoft Office タブに表示する名前を入力します。 名前を指定しない場合、このタブは「IBM ECM」という名前になります。",
		admin_ms_close_task_pane_on_open: "ユーザーがドキュメントを開いたときにタスク・ペインを閉じる",
		admin_ms_close_task_pane_on_open_hover_help: "ユーザーが Microsoft Office でドキュメントを表示できるスペースを最大化する場合は、このオプションを選択します。<br/><br/>Microsoft Office 2010 ユーザー: すべてのドキュメントに対して確実にタスク・ペインを閉じるには、<b>「オプション」</b>&gt;<b>「詳細設定」</b>をクリックしてから<b>「すべてのウィンドウをタスクバーに表示する」</b>オプションをクリアすることにより、マルチ・ドキュメント・インターフェース (MDI) モードを有効にします。",
		admin_ms_open_document_options: "「ドキュメントを開く」オプション:",
		admin_ms_delete_local_file_options: "「ローカル・ファイルの削除」オプション:",
		admin_ms_add_and_checkin_options: "「追加およびチェックイン」オプション:",
		admin_ms_search_options: "検索オプション:",
		admin_ms_display_options: "表示オプション:",
		admin_ms_bidirection_enable_label: "双方向テキストのサポートを有効にする",
		admin_ms_bidirection_enable_hover_help: "IBM Content Navigator for Microsoft Office で左から右以外の方向のテキストを入力または表示できるようにする場合は、このオプションを選択します。",
		admin_ms_text_direction_label: "コンテンツの基本テキスト方向:",
		admin_ms_text_direction_hover_help: "IBM Content Navigator for Microsoft Office の入力フィールドにテキストを入力する際の方向を指定します。 この設定は、フォルダー名やプロパティー値などのアイテムが表示される方法も制御します。",
		admin_ms_control_threshold_label: "先読みを有効にするアイテムの最小数:",
		admin_ms_control_threshold_hover_help: "デフォルトでは、ドロップダウン・リストの中で値が事前定義されているプロパティーを検索または設定する際、アイテム数が 50 以上の場合に先読み機能が有効になります。 最小値は変更することができます。",

		admin_ms_default_email_class: "E メールの追加時に使用するクラス",
		admin_ms_default_email_class_hover_help: "Microsoft Outlook からこのリポジトリーに追加されるすべての E メールが、指定したクラスに追加されます。 ユーザーはこのクラスを変更できません。",
		admin_ms_default_folder_class: "フォルダーの作成時に使用するクラス",
		admin_ms_default_folder_class_hover_help: "Microsoft Office アプリケーションからこのリポジトリー内に作成されるすべてのフォルダーが、指定したクラスに追加されます。  ユーザーはこのクラスを変更できません。",
		admin_ms_default_folder_warn_title: "${0} クラスは、フォルダー作成時に使用するクラスとしては使用できません。",
		admin_ms_default_folder_warn_name_prop_invalid: "クラスの名前プロパティーが文字列ではありません。フォルダーの名前は文字列であることが必要です。<br />フォルダーの作成時に使用するには別のクラスを選択してください。または、IBM Content Manager 管理者と相談して、クラスの名前プロパティーを文字列に変更してください。",
		admin_ms_default_folder_warn_req_props: "クラスには値を持たない必須プロパティーが含まれています。 ただし、IBM Content Navigator for Microsoft Office からフォルダーを作成する場合、ユーザーは必須プロパティーの値を指定できません。<br />フォルダーの作成時に使用するには別のクラスを選択してください。または、IBM Content Manager 管理者と相談して、必須プロパティーをオプションにするか、必須プロパティーに事前に値を指定してください。",
		admin_ms_delimiter_for_office_properties: "複数値文字列プロパティーの区切り文字",
		admin_ms_delimiter_for_office_properties_hover_help: "複数値文字列プロパティーにマッピングする文字列プロパティーの区切り文字として使用する文字を指定します。 デフォルトでは、値を区切る区切り文字としてセミコロン (;) を使用することにより、一連の値を複数値文字列プロパティーに割り当てることができます。 しかし、文字列値のうちの 1 つにセミコロンが含まれている場合、区切り文字を別の文字に変更しない限り、その文字列値を追加することはできません。 例えば、区切り文字をコンマ (,) に変更することができます。",
		admin_ms_outlookPropertyRemembrance : "メッセージと添付ファイルの追加時に設定を保存する",
		admin_ms_outlookPropertyRemembrance_hover_help : "メッセージと添付ファイルに割り当てられたプロパティー値、ロケーション、クラス選択、およびセキュリティーが記憶され、その後のアイテム追加時にデフォルト設定として使用されます。",

		admin_file_type_name_hover_help: "名前の吹き出しヘルプ",
		admin_file_type_description_hover_help: "説明の吹き出しヘルプ",
		admin_file_type_dialog_title: "ファイル・タイプ・フィルターの編集",
		admin_new_file_type_dialog_title: "新規ファイル・タイプ・フィルター",
		admin_mobile_feature_dialog_title: "機能",
		admin_mobile_feature_dialog_new_title: "新機能",
		admin_file_type_instructions: "ユーザーが検索結果を絞り込むために使用できるフィルターを作成します。 複数の MIME タイプをフィルターにマップできます。",
		admin_file_type_filter_place_holder: "MIME タイプのフィルター",
		admin_new_button_label: "新規",
		admin_edit_button_label: "編集",
		admin_delete_button_label: "削除",
		admin_copy_button_label: "コピー",
		admin_verify_button_label: "検証",
		admin_availabe_filters_label: "使用可能なフィルター",
		admin_selected_filters_label: "選択済みフィルター",

		admin_mobile_access: "モバイル・アプリケーション・アクセス:",
		admin_mobile_access_hover_help: "IBM Content Navigator をモバイル・デバイスから使用する場合、このデスクトップにモバイル・アプリケーションからユーザーがアクセスできるようにすることを推奨します。<br /><br />このデスクトップにモバイル・アプリケーションからアクセスできないようにしても、ユーザーはモバイル・ブラウザーから Web クライアントにはアクセスできます。 ただし、Web クライアントは、モバイル・デバイスからアクセスするようには設計されていません。",

		admin_mobile_access_allow_label: "ユーザーに次の操作を許可する:",
		admin_mobile_allow_add_photos: "カメラから写真ライブラリーへの写真の追加",
		admin_mobile_allow_add_docs: "リポジトリーに対するドキュメントの追加とフォルダーの作成",
		admin_mobile_allow_open_docs: "他のアプリケーションでのドキュメントのオープン",
		admin_mobile_allow_add_docs_hover_help: "ユーザーは、他のモバイル・アプリケーションで、E メールに添付されているドキュメントなどのフォルダーの作成やドキュメントの追加を行うことができます。",
		admin_mobile_allow_open_docs_hover_help: "選択したドキュメントを表示するために使用するアプリケーションを選択するように求めるプロンプトが、ユーザーに出されます。 使用可能なアプリケーションが 1 つのみの場合、そのアプリケーションが使用されます。",
		admin_mobile_features: "機能:",
		admin_mobile_features_hover_help: "このデスクトップの機能のうち、IBM Content Navigator モバイル・アプリケーションに表示する機能を指定します。",
		admin_mobile_new_feature_button_label: "新機能",
		admin_mobile_move_up_button_label: "上に移動",
		admin_mobile_move_down_button_label: "下に移動",
		admin_desktop_mobile_instructions: "モバイル設定の説明がここに表示されます",
		admin_desktop_max_number_of_docs_to_add: "追加できるドキュメントの最大数:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "ユーザーが同時に追加できるドキュメントの最大数を指定します。 デフォルトの最大数は 50 です。 ただし、300 までの最大数を設定できます。",
		admin_desktop_max_number_of_docs_to_modify: "変更できるアイテムの最大数:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "ユーザーが一度に変更できるアイテムの最大数を指定します。 デフォルトの最大数は 50 です。 ただし、300 までの最大数を設定できます。",
		admin_desktop_max_conversion_size: "PDF 変換の最大データ量 (MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>制約事項:</b> この設定は IBM Content Manager OnDemand ではサポートされません。<br/><br/>PDF に変換できる最大データ量を指定します。 ユーザーがアイテムを PDF ファイルとしてダウンロードする場合、またはアイテムを PDF ファイルとして E メールで送信する場合に、この制限が適用されます。<br /><br />各ドキュメントのサイズを判別できない場合でも、それらのドキュメントは PDF に変換されます。<br/><br/>デフォルトの制限は 200 MB です。 この制限に 200 MB を超える値を設定すると、システム・パフォーマンスに影響する恐れがあります。",
		admin_desktop_timeProperties: "タイム・スタンプ:",
		admin_desktop_time_properties_hover_help: "<b>IBM FileNet P8 ユーザーのみ:</b> この設定はカスタム・プロパティーに適用され、システム・プロパティーには適用されません。 例えば、<b>「タイム・スタンプの日付部分のみを表示する」</b>を選択した場合でも、「更新者」プロパティーには、タイム・スタンプの時刻部分が表示されます。<br/><br/>この設定によって、リポジトリー内のタイム・スタンプが変更されることはありません。",
		admin_desktop_disable_time_stamp: "完全なタイム・スタンプを表示",
		admin_desktop_enable_time_stamp: "タイム・スタンプの日付部分のみ表示",
		admin_desktop_timezone: "タイム・ゾーン:",
		admin_desktop_timezone_localuser: "ユーザーのローカル・タイム・ゾーンを表示",
		admin_desktop_timezone_alluser: "すべてのユーザーに同じタイム・ゾーンを表示",
		admin_desktop_timezone_hover_help: "各ユーザーのローカル・タイム・ゾーンに基づいてタイム・スタンプを表示するか、すべてのユーザーに対して同じタイム・スタンプを表示するかを指定できます。<br/><br/>この設定によって、リポジトリー内のタイム・スタンプが変更されることはありません。 ただし、選択する設定によって、ユーザーがアイテムを追加または変更するときのタイム・スタンプをリポジトリー内に作成する際に使用されるタイム・ゾーンが決定します。",
		admin_desktop_mobile_feature_display_label: "表示",
		admin_desktop_mobile_feature_icon_file_label: "アイコン・ファイル",
		admin_mobile_feature_dialog_icon_file_label: "アイコン・ファイル:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "名前",
		admin_desktop_mobile_select_feature_label: "フィーチャーの選択",
		admin_desktop_mobile_feature_icon_label: "フィーチャー・アイコン",
		admin_desktop_share_admin_none: "管理者未設定",
		admin_desktop_share_admin_edit_label: "管理者の設定...",
		admin_browse_icon: "参照アイコン",
		admin_search_icon: "検索アイコン",
		admin_favorites_icon: "お気に入りアイコン",
		admin_casesearch_icon: "ケース・アイコン",
		admin_datacap_icon: "Datacap アイコン",
		admin_system_defined: "システム定義",
		admin_icon_file_placeholder_text: "ファイルの場所 (http://icons.com/image.bmp など)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "ルート",
		admin_folder_default: "デフォルト",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "ツールバー",
		admin_menu_context_menus: "コンテキスト・メニュー",
		admin_menu_office_toolbars: "Microsoft Office リボン・バー・コマンド",
		admin_menu_office_menus: "Microsoft Office コンテキスト・メニュー",

		admin_file_name_label: "ファイル名:",
		admin_exportconfiguration_security_label: "このデスクトップを使用する権限があるユーザーおよびグループを含める",
		admin_exportconfiguration_instruction: "選択したデスクトップに関連付けられているリポジトリー構成とプラグイン構成を含め、デスクトップをファイルにエクスポートできます。このファイルを IBM Content Navigator の別のインスタンスにインポートできます。",
		admin_exportconfiguration_dialog_label: "デスクトップのエクスポート",
		admin_exportconfiguration_button_label: "エクスポート",
		admin_dialog_select_all: "すべてを選択",
		admin_dialog_deselect_all: "すべてクリア",

		admin_importconfiguration_instruction: "選択した構成ファイル内のアイテムが、このシステムにインポートされます。 ただし、同じ ID のアイテムがシステムに既に存在している場合、そのアイテムを保持するか、上書きするかを決定する必要があります。",
		admin_importconfiguration_dialog_label: "デスクトップのインポート",
		admin_importconfiguration_reason_dialog_label: "リダクションの理由のインポート",
		admin_importconfiguration_button_label: "インポート",
		admin_to_be_imported: "インポートする構成アイテム",
		admin_on_target_system: "ターゲット・システムの既存のアイテム",
		admin_import_short_warning_message: "次のアイテムは、このシステムに既に存在します。 このシステムで置き換えるアイテムを選択してください:",
		admin_import_warning_message: "以下の構成アイテムの ID は、ターゲット・システムに存在するアイテムの ID と同じです。 インポートしてターゲット・システム上のアイテムを上書きするアイテムのみ選択してください。<br /><br />構成アイテムを上書きしない場合は、デスクトップのエクスポート元であるインスタンス上でアイテムのコピーを作成し、そのコピーに別の ID を付けて、デスクトップに関連付けてください。 次に、デスクトップを再度エクスポートしてから、このインスタンスにデスクトップをインポートしてください。",
		admin_choose_file_to_import_label: "インポートするファイルを選択:",
		admin_download_imported_log: "レポートのダウンロード",
		admin_desktop_import_summary: "デスクトップ・インポートの要約",
		admin_reason_import_summary: "リダクションの理由のインポートの要約",
		admin_rba_import_summary: "管理ロールのインポートの要約",
		admin_import_open_tabs_checking: "デスクトップをインポートする前に、管理ツールの<bold>「デスクトップ」</bold>タブ以外のすべてのタブを閉じる必要があります。",
		admin_import_no_conflict: "次のアイテムがインポートされます:",
		admin_desktop_invalid: "無効なデスクトップ",
		admin_desktop_warning: "デスクトップが警告付きで保存されました。",
		admin_repos_warning: "リポジトリーが警告付きで保存されました。",
		admin_config_type_icon: "構成項目タイプ・アイコン",

		admin_approval_workflow: "承認ワークフロー",
		admin_approval_workflow_hover: "事前定義された承認ワークフローをユーザーが起動できるようにします。 承認ワークフローを無効にして、サブスクリプションによって定義されたカスタム承認ワークフローをユーザーが起動できるようにすることができます。 デフォルトで、承認ワークフローは有効になっています。<br><br><b>重要:</b> 承認ワークフローを有効にする場合、事前定義されたワークフロー定義 (ICNParallelDocumentApproval.pep と ICNSequentialDocumentApproval.pep) のいずれかまたは両方がリポジトリーに追加されて Content Process Engine に転送されるようにする必要もあります。",

		admin_cannot_add_desktop_members_error: "このデスクトップへのアクセス権限を持つユーザーおよびグループを指定することはできません。",
		admin_cannot_add_desktop_members_error_explanation: "ユーザーおよびグループの情報を取得する適切な権限がありません。",
		admin_cannot_add_desktop_members_error_userResponse: "別のユーザー名でログインするか、IBM Content Manager システム管理者に依頼して、ユーザーおよびグループの情報を取得するために必要な UserACLOwner 特権を付与してもらってください。",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "ユーザーおよびグループを選択できません。",
		admin_cannot_select_users_groups_error_explanation: "ユーザーおよびグループの情報を取得する適切な権限がありません。",
		admin_cannot_select_users_groups_error_userResponse: "別のユーザー名でログインするか、IBM Content Manager システム管理者に依頼して、ユーザーおよびグループの情報を取得するために必要な UserACLOwner 特権を付与してもらってください。",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2 クライアントが見つかりませんでした。",
		oauth_client_not_found_error_explanation: "OAuth2 クライアント ID ${0} が見つかりませんでした。",
		oauth_client_not_found_error_userResponse: "システム管理者に問い合わせて、OAuth2 クライアント ID が見つからなかったことを知らせてください。",
		oauth_client_not_found_error_adminResponse: "リポジトリー構成を確認し、正しい OAuth2 クライアント ID が含まれていることを確認してください。",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "リポジトリー・ログインに失敗しました。",
		oauth_login_failed_error_explanation: "リポジトリー ${0} にログインしようとして失敗しました。",
		oauth_login_failed_error_userResponse: "ユーザー ID とパスワードが正しいことを確認し、ログインを再試行してください。",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "${0} にログインしようとしてエラーが発生しました。",
		oauth_error_return_error_explanation: "${0} 許可試行が失敗しました。",
		oauth_error_return_error_userResponse: "${0} 許可試行が失敗し、以下のエラー・メッセージが返されたという情報を、システム管理者に連絡してください。 <br>${1}<br><b>エラー:</b> ${2}。<br><b>説明:</b> ${3}。",
		oauth_error_return_error_adminResponse: "エラーについての追加情報は、Web アプリケーション・サーバーのログ・ファイルにあります。  ログ・ファイルについて詳しくは、IBM Knowledge Center の『IBM Content Navigator のログ・ファイル』を参照してください。 ${0} 許可試行に関する情報を使用して問題を修正し、OAuth2 が有効になっていることを確認してください。",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth ターゲット・アプリケーション",
		oauth_error_return_error_1: "エラー・メッセージ",
		oauth_error_return_error_2: "エラー",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "認識できない OAuth エラー・メッセージ。",

		delete_share_permission_error: "共有は削除されませんでした。",
		delete_share_permission_error_explanation: "共有を削除するための適切な権限がありません。",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "このアイテムを共有できません。",
		class_not_support_share_error_explanation: "クラス ${0} は、共有をサポートするようにセットアップされていません。",
		class_not_support_share_error_0: "クラス名",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "このアイテムを共有できません。",
		rbr_not_support_share_error_explanation: "アイテムに機密コンテンツが追加されました。",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "ユーザーのログイン試行の実行元デバイスは、ユーザーのアカウントにアクセスすることが許可されていません。",
		box_oauth_error_invalid_request: "要求に必須パラメーターが欠落しているか、無効なパラメーター値が含まれているか、1 つのパラメーターが複数回含まれているか、または形式が誤っています。",
		box_oauth_error_unsupported_response_type: "許可サーバーにおいて、この方式を使用した許可コードの取得がサポートされていません。  要求のコード・パラメーターの値をチェックしてください。",
		box_oauth_error_access_denied: "リソースのオーナーまたは許可サーバーが要求を拒否しました。",
		box_oauth_error_temporarily_unavailable: "使用中のデバイスは速度が制限されています。許可要求の速度を下げるか、またはしばらく待つ必要があります。",
		box_oauth_error_unknown: "認識できない Box エラー・メッセージ。",

		admin_default_search_type: "デフォルトの検索タイプ",
		admin_default_search_type_hover: "<b>「検索オプション」</b>メニューの<b>「検索対象」</b>フィールドにおいてデフォルトで選択されるオプションを指定します。",
		admin_default_search_type_documents: "ドキュメント",
		admin_default_search_type_folders: "フォルダー",
		admin_default_search_type_folders_and_documents: "ドキュメントおよびフォルダー",

		admin_restricted_search_type: "許可する検索先",
		admin_restricted_search_type_hover: "デフォルトでは、ユーザーはドキュメントとフォルダーの両方から検索できます。 検索先のオプションを非表示にして検索をドキュメントのみに制限する場合は、「ドキュメント」を選択し、「フォルダー」の選択を解除してください。</br></br>ドキュメントとフォルダーの両方での検索を可能にする場合は、検索ペインが表示される際にデフォルト・オプションが表示されるように選択してください。",
		admin_restricted_search_type_documents: "ドキュメント",
		admin_restricted_search_type_folders: "フォルダー",
		admin_restricted_search_type_folders_and_documents: "ドキュメントおよびフォルダー",

		admin_default_search_version: "デフォルトの検索バージョン",
		admin_default_search_version_hover: "<b>「検索オプション」</b>メニューの<b>「バージョン」</b>フィールドにおいてデフォルトで選択されるオプションを指定します。",

		admin_all_classes_search: "すべてのクラスを検索",
		admin_all_classes_search_hover: "ユーザーがすべてのクラスにまたがって検索できるかどうかを指定します。また、検索できる場合、ドキュメントの検索に含める内容を指定します。",
		admin_all_classes_search_removed_hover: "ナビゲーター・アプリケーション web.xml のコンテキスト・パラメーター allPseudoClassHidden が true に設定されているため、すべてのクラスを検索するオプションは使用できません。",
		admin_all_classes_search_hide: "すべてのクラスを検索する選択を削除",
		admin_all_classes_search_documents_only_documents: "ドキュメントの検索にドキュメント、保存された検索、エントリー・テンプレートのみを含める",
		admin_all_classes_search_documents_non_folders: "ドキュメントの検索にフォルダー以外のすべてのアイテムを含める",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "ツリー・ビュー:",
		admin_feature_config_tree_view_hoverhelp: "ユーザーが「参照」ペインを使用して、リポジトリー内のフォルダーのリストにアクセスできるかどうかを指定します。 「参照」ペインが非表示にされている場合、ユーザーは、コンテンツ・リストを使用して、リポジトリー内のフォルダーにナビゲートする必要があります。",
		admin_feature_config_selected_repositories_label: "リポジトリー:",
		admin_feature_config_selected_repositories_hoverhelp: "ユーザーがこの機能でアクセスできるリポジトリーを選択します。",
		admin_feature_config_selected_repositories_select_state_hdr: "リポジトリーの選択",
		admin_feature_config_selected_repositories_name_hdr: "リポジトリー名",
		admin_feature_config_selected_repositories_show_hdr: "表示",
		admin_feature_config_invalid_icon_title: "この機能には一部の必須設定がありません",
		admin_feature_config_view_select_hdr: "ビューの選択",
		admin_feature_config_view_hdr: "表示",
		admin_feature_config_view: "表示",
		admin_feature_config_views: "ビュー:",
		admin_feature_config_views_hoverhelp: "ユーザーがコンテンツ・リストに適用できるビューを指定します。 ビューはリストされている順番で表示されます。 最初に選択されたビューが機能のデフォルト・ビューです。<br><br><b>重要:</b> フィルムストリップ・ビューを有効にする場合、ドキュメントのプレビューを表示するには HTML 変換ビューアーを構成する必要があります。",

		admin_custom_dialog_name: "名前:",
		admin_custom_dialog_value: "値:",
		admin_custom_setting_name_hover: "構成に追加する Daeja ViewONE 設定の名前を入力します。 構成設定について詳しくは、Daeja ViewONE の資料を参照してください。",
		admin_custom_setting_value_hover: "Daeja ViewONE 構成設定に使用する値を入力します。 構成設定で有効な値について詳しくは、Daeja ViewONE の資料を参照してください。",

		entry_template_name_required_message: "「エントリー・テンプレート設定」の名前フィールドは必須です。",
		entry_template_name_invalid_message: "「エントリー・テンプレート設定」の名前フィールドに、次の文字を含めることはできません。* \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "「エントリー・テンプレート設定」の「共有先」フィールドに特定のユーザーとグループが選択されている場合は、ユーザーまたはグループを少なくとも 1 つ指定する必要があります。",
		entry_template_no_permission_to_save_to_teamspace_message: "「エントリー・テンプレート設定」の「保存先」から選択されたチームスペース (${0}) にエントリー・テンプレートを追加する権限が付与されていません。",
		entry_template_save_in_destination_required_message: "デフォルトの保存先ロケーションを<b>「アイテムのストレージ・ロケーションの設定」</b>セクションに指定する必要があります。",
		entry_template_save_in_destination_must_select_folder: "<b>「保存先」</b>フィールドを非表示にして、ユーザーに新規アイテムをフォルダーに追加するよう要求する場合は、<b>「アイテムのストレージ・ロケーションの設定」</b>セクションの<b>「デフォルトの保存先ロケーション」</b>フィールドでフォルダーを選択する必要があります。",
		entry_template_what_to_save_required_message: "「設定」オプションの「保存の対象」を少なくとも 1 つ選択してください。",
		entry_template_custom_workflow_empty_message: "<b>「カスタム・ワークフロー...」</b>を選択した場合、使用するワークフローを検索して選択する必要があります。",

		entry_template_new: "新規エントリー・テンプレート",
		entry_template_name_hover: "エントリー・テンプレート名に、次の文字を含めることはできません。* \\ / : ? \" < > |",
		entry_template_name_invalid: "エントリー・テンプレート名に、次の文字を含めることはできません。* \\ / : ? \" < > |",
		entry_template_description_hover: "ユーザーがこのエントリー・テンプレートと他のエントリー・テンプレートを区別できるように、説明を入力してください。",
		entry_tempalte_save_in_hover: "エントリー・テンプレートの保存先を指定します。<br><br><b>制約事項:</b> エントリー・テンプレートをチームスペース内に保存した場合、そのエントリー・テンプレートはそのチームスペース内でのみ使用できます。",
		entry_template_inherit_hover: "このオプションを選択すると、親フォルダーのセキュリティー設定が、エントリー・テンプレートを共有するユーザーおよびグループのリストに追加されます。",
		entry_template_builder_aria_label: "エントリー・テンプレート・ビルダー",
		entry_template_builder_layout_aria_label: "エントリー・テンプレート・プロパティー・ビルダー",

		entry_template_settings_document: "エントリー・テンプレートの定義",
		entry_template_settings_folder: "アイテムのストレージ・ロケーションの設定",
		entry_template_settings_folder_intro: "このエントリー・テンプレートを使用して追加されたアイテムの保管先を指定します。",
		entry_template_settings_properties: "アイテム・プロパティーの設定",
		entry_template_settings_properties_intro: "このエントリー・テンプレートを使用して追加されたアイテムのデフォルト値または事前定義値を指定することができます。 また、プロパティーのレイアウトを変更して、表示されるプロパティーや表示される順序を制御することができます。",
		entry_template_settings_workflow: "アイテムのワークフローの構成",
		entty_template_settings_workflow_intro: "エントリー・テンプレートを使用してアイテムが追加されたときにワークフローが起動するかどうかを指定できます。",
		entry_template_settings_security: "アイテムのセキュリティーの設定",
		entry_template_settings_security_intro: "このエントリー・テンプレートを使用して追加されたアイテムのデフォルト・セキュリティーまたは事前定義セキュリティーを指定することができます。 アイテムが追加された後は、適切な権限を持つユーザーがアイテムのセキュリティーを変更することができます。",
		entry_template_settings_options: "アイテムのオプションの設定",
		entry_template_xt_warning: "このエントリー・テンプレートに対する変更を保存すると、このテンプレートは IBM Workplace XT エントリー・テンプレートから IBM Content Navigator エントリー・テンプレートに変換されます。 IBM Workplace XT では、IBM Content Navigator エントリー・テンプレートはサポートされていません。",

		entry_template_properties_edit_layout: "レイアウトの編集...",
		entry_template_properties_read_only: "読み取り専用",
		entry_template_properties_hidden: "非表示",

		entry_template_destination_show: "<b>「保存先」</b>フィールドを表示",
		entry_template_destination_show_hover: "<b>「保存先」</b>フィールドを表示する場合、ユーザーはアイテムの保管場所を変更できます。",
		entry_template_destination_hide: "<b>「保存先」</b>フィールドを非表示",
		entry_template_destination_hide_hover: "<b>「保存先」</b>フィールドを非表示にする場合、ユーザーはアイテムの保管場所を変更できません。",
		entry_template_folder_save_in_default: "デフォルトの<b>「保存先」</b>のロケーション:",
		entry_template_folder_save_in_default_hover: "このエントリー・テンプレートを使用することによるアイテムの追加先のデフォルトの場所を指定します。<br><br>選択するデフォルトの場所により、エントリー・テンプレートのランタイム動作に制限が課されます。<ul><li>ユーザーは別のリポジトリーを選択できません。</li><li>デフォルト・ロケーションがチームスペースの場合、ユーザーは別のチームスペースを選択できません。</li></ul>ただし、ユーザーがこのエントリー・テンプレートをフォルダーに関連付けた場合、ユーザーはこのエントリー・テンプレートに構成された保管場所をオーバーライドできます。",
		entry_template_folder_restrict_choice: "デフォルト・ロケーションまたはデフォルト・ロケーションの子フォルダーにアイテムを追加することをユーザーに要求する",
		entry_template_folder_file_in_required: "ユーザーに新規アイテムをフォルダーに追加するように要求する",
		entry_template_folder_file_in_required_hover: "このオプションを選択しない場合、ユーザーはリポジトリーのルート・フォルダーにアイテムを追加できます。<br><br><b>制約事項:</b> デスクトップ構成によってはユーザーがフォルダーを選択することが必要な場合もあります。",

		entry_template_document_type_show: "<b>「保存の対象」</b>フィールドを表示",
		entry_template_document_type_show_hover: "<b>「保存の対象」</b>フィールドを表示すると、選択したアイテムがオプションとして<b>「保存の対象」</b>フィールドに表示されます。",
		entry_template_document_type_hide: "<b>「保存の対象」</b>フィールドを非表示",
		entry_template_document_type_hide_hover: "<b>「保存の対象」</b>フィールドを非表示にすると、このエントリー・テンプレートを使用してユーザーがドキュメントを追加する場合、選択されたドキュメントのタイプが常に使用されます。",
		entry_template_document_type: "このエントリー・テンプレートを使用すると、次のアイテムを追加できます。",
		entry_template_document_type_hover: "<b>「保存の対象」</b>フィールドを表示すると、選択したアイテムがオプションとして<b>「保存の対象」</b>フィールドに表示されます。<br><br><b>「保存の対象」</b>フィールドを非表示にすると、このエントリー・テンプレートを使用してユーザーがドキュメントを追加する場合、選択されたドキュメントのタイプが常に使用されます。",

		entry_template_misc: "追加オプション:",
		entry_template_auto_classify_show: "ドキュメントの内容を自動的に分類する",
		entry_template_auto_classify_show_hover: "FileNet Content Manager でドキュメントを分類する場合、ドキュメントの内容が検査され、ドキュメントに対する適切なクラスおよびプロパティー値が決定されます。<br><br>コンテンツの分類が Content Platform Engine で有効になっているかどうかを判別するには、システム管理者に問い合わせてください。<br><br>このオプションを有効にした場合、ユーザーがドキュメントをリポジトリーに追加したときにドキュメントのクラスおよびプロパティーが変更されることがあります。",
		entry_template_allow_duplicate_file_names: "ドキュメントのファイル名の重複を許可する",
		entry_template_allow_duplicate_file_names_hover: "デフォルトでは、同じ名前のドキュメントを FileNet Content Manager のフォルダーに追加できます。 選択された保管場所の各ファイルが固有の名前を持つようにする場合は、このオプションをクリアすることができます。",
		entry_template_allow_compound_documents: "このドキュメントを複合ドキュメントの親とすることを許可する",
		entry_template_version_show: "追加およびチェックインのバージョン・オプションの表示",
		entry_template_version_hide: "追加およびチェックインのバージョン・オプションの非表示",
		entry_template_version_to_add_as: "追加するデフォルト・バージョン:",
		entry_template_version_default: "デフォルト・バージョン・オプション:",
		entry_template_version_default_checked: "メジャー・バージョン",
		entry_template_version_default_unchecked: "マイナー・バージョン",
		entry_template_version_display: "ドキュメント・バージョン:",
		entry_template_version_display_show: "表示",
		entry_template_version_display_hide: "非表示",
		entry_template_version_default_add: "追加するデフォルト・バージョン:",

		entry_template_checkin_version_show: "チェックインのバージョン・オプションの表示",
		entry_template_checkin_version_hide: "チェックインのバージョン・オプションの非表示",

		entry_template_checkin_version_message_no_versions: "選択されたクラスのバージョン・ポリシーにより、ユーザーは新規バージョンのドキュメントをチェックインできなくなります。",
		entry_template_checkin_version_message_always_version: "選択されたクラスのバージョン・ポリシーにより、ユーザーは現在のバージョンのドキュメントを置換できなくなります。",

		entry_template_applied: "ユーザーが次の操作を行うときにこのエントリー・テンプレートを使用:",
		entry_template_applied_add: "ドキュメントの追加 (必須)",
		entry_template_applied_add_folder: "フォルダーの作成 (必須)",
		entry_template_applied_checkin: "チェックイン",
		entry_template_applied_properties_group: "プロパティーの表示または編集:",
		entry_template_applied_properties: "「プロパティー」ウィンドウ内",
		entry_template_applied_viewer: "アプレット・ビューアー内",
		entry_template_applied_docinfo: "ドキュメント情報ペイン内",
		entry_template_applied_no_class_support: "このエントリー・テンプレートは、アイテムの追加に使用できますが、ドキュメントのチェックインやプロパティーの表示および編集には使用できません。 これらの状況がサポートされるように、選択したクラスを変更する必要があります。 これらの状況でエントリー・テンプレートを使用しなければならない場合は、クラスがエントリー・テンプレート ID を格納できるようにするために管理ツールを使用してクラスを変更するよう管理者に依頼してください。",
		entry_template_applied_no_child_component_support: "選択したクラスには子コンポーネントがあり、プロパティー・レイアウトが定義されています。 プロパティー・レイアウトは子コンポーネントをサポートしていません。 子コンポーネントはユーザーには表示されません。",
		entry_template_applied_child_component: "選択したクラスには子コンポーネントがあります。 これらはユーザーに表示されますが、このエントリー・テンプレートでは子コンポーネントは構成できません。",

		entry_template_properties_show: "<b>「プロパティー」</b>セクションを表示",
		entry_tempalte_properties_show_hover: "<b>「プロパティー」</b>セクションを表示する場合、ユーザーは、エントリー・テンプレートに表示される読み取り専用プロパティーではないすべてのプロパティー値を変更できます。",
		entry_template_properties_hide: "<b>「プロパティー」</b>セクションを非表示",
		entry_template_properties_hide_hover: "<b>「プロパティー」</b>セクションを非表示にする場合、ユーザーはすべてのプロパティー値を変更できません。 エントリー・テンプレートには、このエントリー・テンプレートを使用してアイテムが追加されるときに使用するすべての値が定義されていなければなりません。",

		entry_template_security_show: "<b>「セキュリティー」</b>セクションを表示",
		entry_template_security_show_hover: "<b>「セキュリティー」</b>セクションを表示する場合、適切な権限を持つユーザーがアイテムのセキュリティーを変更できます。",
		entry_template_security_hide: "<b>「セキュリティー」</b>セクションを非表示",
		entry_template_security_hide_hover: "<b>「セキュリティー」</b>セクションを非表示にする場合、ユーザーはアイテムのセキュリティーを変更できません。 エントリー・テンプレートには、アイテムが追加または編集されるときに使用するすべてのセキュリティー設定が定義されていなければなりません。",
		entry_template_security_policy: "セキュリティー・ポリシー:",
		entry_template_security_policy_hover: "選択したセキュリティー・ポリシーに応じて、セキュリティー・ポリシーは以下のことを実行できます。<br><ul><li><b>「アイテムのセキュリティーの設定」</b>で指定された権限をオーバーライドします。</li><li><b>「アイテムのセキュリティーの設定」</b>で指定された権限に追加します。</li></ul>",
		entry_template_security_policy_none: "セキュリティー・ポリシーの選択なし",
		entry_template_security_inherit: "親フォルダーからセキュリティー設定を継承",
		entry_tempalte_save_in_hover: "エントリー・テンプレートの保存先を指定します。<br><br><b>制約事項:</b> エントリー・テンプレートをチームスペース内に保存した場合、そのエントリー・テンプレートはそのチームスペース内でのみ使用できます。",
		entry_template_security_inherit_item_security_hover: "このオプションを選択すると、親フォルダーのセキュリティー設定が、以下のいずれかのアイテムによって定義されるセキュリティー設定に追加されます。<ul><li><b>「アイテム・プロパティーの設定」</b>セクションで指定されたクラス</li><li><b>「アイテムのセキュリティーの設定」</b>セクションに指定したカスタム・セキュリティー</li></ul>",
		entry_template_security_change: "選択されたクラスで定義されたセキュリティーをオーバーライド",
		entry_template_security_change_hover: "このオプションを選択すると、クラスに定義されたセキュリティー設定がデフォルトで表示されます。 その後、エントリー・テンプレートのセキュリティー設定を変更できます。<br><br><b>「セキュリティー」</b>セクションを表示する場合、適切な権限を持つユーザーがアイテムのセキュリティーを変更できます。<br><br>このオプションを選択して、セキュリティー設定を親フォルダーから継承することを選択した場合、継承可能なすべての権限が、指定したセキュリティーに追加されます。",
		entry_template_security_default_item_security: "アイテムを追加したユーザーのデフォルト・アイテム・セキュリティーをオーバーライド",
		entry_template_security_policy_message_override: "選択されたセキュリティー・ポリシーは、「セキュリティーの設定」で指定された権限をオーバーライドするように構成されています。",
		entry_template_security_policy_message_add: "選択されたセキュリティー・ポリシーは、「セキュリティーの設定」で指定された権限に追加するように構成されています。",
		entry_template_security_policy_preserve_true_hover: "直接権限を保持",
		entry_template_security_policy_preserve_false_hover: "直接権限を保持しない",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "特定のロール",
		entry_template_security_class_role_search_title: "ロールの検索:",
		entry_template_secuirty_class_member_title: "${0} のメンバー・リスト",
		entry_template_secuirty_class_folder_only: "これらの権限をこのフォルダーのみに適用する",
		entry_template_secuirty_class_folder_and_immediate_children: "これらの権限を、このフォルダーと、このフォルダーからセキュリティーを継承するように構成された直接の子に適用します。",
		entry_template_secuirty_class_folder_and_all_children: "これらの権限を、このフォルダーと、このフォルダーからセキュリティーを継承するように構成されたすべての子孫に適用します。",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"これらの権限を、このフォルダーからセキュリティーを継承するように構成された直接の子に適用します。",
		entry_template_secuirty_class_folder_all_children_not_folder: "これらの権限を、このフォルダーからセキュリティーを継承するように構成されたすべての子孫に適用します。",

		entry_template_class_security_message_no_override: "選択されたクラスのセキュリティーにより、ユーザーはセキュリティーをオーバーライドできなくなります。",
		entry_template_class_security_required_privileges: "<b>重要</b>: 選択されたクラスのセキュリティーがオーバーライドされている場合、このエントリー・テンプレートを使用してアイテムを追加するユーザーには、ItemSetACL 特権と UserACLOwner 特権が必要です。",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "逐次パターン・ワークフロー",
		entry_template_workflow_type_ICNParallelDocumentApproval: "並列パターン・ワークフロー",
		entry_template_workflow_type_existing: "カスタム・ワークフロー...",
		entry_template_workflow_launch_prompt: "ワークフローを起動するかどうかをユーザーに確認する",
		entry_template_workflow_launch_auto: "ワークフローを自動的に起動する",
		entry_template_workflow_modify_launch: "ユーザーによる起動ステップの変更を許可する",
		entry_template_workflow_modify_launch_hover: "ワークフローの起動方法をユーザーが変更できるようにする場合、このオプションを選択します。",

		entry_template_optionsButton_title: "変更",
		entry_template_optionsButton_readonly_title: "関連付けの表示",
		entry_template_optionsDialog_title: "フォルダーの関連付けの設定",
		entry_template_removeButton_title: "削除",
		entry_template_addButton_title: "追加",
		entry_template_selected_entry_templates: "選択されたエントリー・テンプレート",
		entry_template_docs_added_to_template_destination: "ドキュメントは、エントリー・テンプレートで指定された宛先に追加されます。",
		entry_template_docs_added_to_other_object_store: "このエントリー・テンプレートは、アイテムを ${0} オブジェクト・ストアに追加します。",
		entry_template_inherited_entry_templates_label: "作業内容: ",
		entry_template_inherited_entry_templates: "次のフォルダーからエントリー・テンプレートの関連付けを継承: ",
		entry_template_inherited_entry_templates_not: "このフォルダーの新規関連付けを作成",
		entry_template_inherited_folder_path: "選択されたエントリー・テンプレートのリスト内のエントリー・テンプレートは、次のフォルダーと関連付けられます: ${0}。 <br> フォルダーのパスは ${1} です。",
		entry_template_folder_associations_title: "エントリー・テンプレートの関連付け",
		entry_template_folder_associations_intro: "フォルダーにエントリー・テンプレートが関連付けられている場合、ユーザーはそのエントリー・テンプレートを使用してフォルダーにアイテムを追加する必要があります。 フォルダーに複数のエントリー・テンプレートが関連付けられている場合、ユーザーは使用するエントリー・テンプレートを選択できます。",
		entry_tempalte_folder_associations_entrytemplate: "エントリー・テンプレート: ",
		entry_template_avaliable_entry_templates: "利用可能なエントリー・テンプレート",
		entry_template_fileTypes_intro_title: "許可されているファイル・タイプ:",
		entry_template_fileTypes_intro: "デフォルトでは、エントリー・テンプレートを使用して、任意のタイプのドキュメントをリポジトリーに追加できます。 ただし、1 つ以上のファイル・タイプを選択した場合、エントリー・テンプレートが使用可能になるのは、指定されたファイル・タイプのいずれかに一致するドキュメントをユーザーが追加する場合に限られます。",
		entry_template_fileTypes: "ファイル・タイプ",
		entry_template_fileType_error: "1 つ以上のエントリー・テンプレートの関連付けに対して無効なファイル・タイプが選択されています。 これらのエントリー・テンプレートの関連付けを保存するには、無効なファイル・タイプを削除する必要があります。",
		entry_template_fileTypes_any_type_of_file: " 任意のタイプのファイル",
		entry_template_description_label: "説明",
		entry_template_ItemInfoPrefix: "関連付け先: ",
		entry_template_TargetObjectStoreName: "ターゲット・オブジェクト・ストア",
		entry_template_class: "クラス",
		entry_template_current_folder_as_parent: "フォルダーを宛先として使用",
		entry_template_view_minetypes: "MIME タイプの表示",
		entry_template_avaliable_MIME_types: "使用可能なファイル・タイプ",
		entry_template_selected_MIME_types: "選択されたファイル・タイプ",
		entry_template_MIME_type_column: "ファイル・タイプのカテゴリー名",
		entry_template_file_type_not_existing: "無効なファイル・タイプを削除してください。",
		entry_template_MIME_types: "MIME タイプ:",
		entry_template_MIME_types_info_dialog_title: "次の MIME タイプ",
		entry_template_destination_label: "ドキュメントの追加先: ",
		entry_template_destination_help: "選択されたエントリー・テンプレートを使用してユーザーがこのフォルダーにドキュメントを追加した場合の、リポジトリー上のドキュメントの保管場所を指定します。",
		entry_template_radioButton_folder_destination: "選択されたフォルダー",
		entry_template_radioButton_template_destination: "エントリー・テンプレートで指定された宛先",
		entry_tempalte_teamspace_default: "デフォルト・エントリー・テンプレート",
		entry_template_folder_associations_save_new: "エントリー・テンプレートの関連付けのいくつかを変更しました。 変更を保存せずにウィンドウを閉じますか?",
		entry_template_mode_binding_label: "プロパティー",
		entry_template_columns_className: "クラス名",
		entry_template_columns_type: "テンプレート・タイプ",
		entry_template_columns_workflow: "ワークフロー名",
		entry_template_columns_destination: "宛先",
		entry_template_association_less_than_record: "「選択されたエントリー・テンプレート」にリストされていないエントリー・テンプレートが ${0} 個あります。 ユーザーは、参照権限を持っていません。 または、削除されています。 詳しくはシステム管理者に問い合わせてください。",
		/* Request */

		progress_message_general: "処理中です...",
		cancel_message_general: "アクションが取り消されました。",
		ie8_not_supported_browser: "IE8 はサポート対象ブラウザーではありません。",
		progress_message_getDesktop: "デスクトップをロードしています...",
		progress_message_getActions: "アクションをロードしています...",
		progress_message_getViewers: "デスクトップをロードしています...",
		progress_message_logon: "ログインしています...",
		progress_message_logoff: "ログアウトしています...",
		progress_message_getContentClasses: "クラスを取得しています...",
		progress_message_openContentClass: "クラス詳細を取得しています...",
		progress_message_od_getCabinets: "キャビネットを取得しています...",
		progress_message_getSearchTemplates: "検索を取得しています...",
		progress_message_od_getTemplates: "フォルダーを取得しています...",
		progress_message_od_openCabinet: "フォルダーを取得しています...",
		progress_message_openSearchTemplate: "検索を開いています...",
		progress_message_od_openTemplate: "フォルダーを開いています...",

		progress_message_getWorklists: "ワーク・リストを取得しています...",
		progress_message_getWorkItems: "ワーク・アイテムを取得しています...",
		progress_message_getNextWorkItems: "ワーク・アイテムを取得しています...",
		progress_message_getStepParameters: "ワーク・アイテム情報を取得しています...",
		progress_message_getStepAttachmentItems: "添付情報を取得しています...",
		progress_message_getDependentParameters: "プロパティー情報を取得しています...",

		progress_message_p8_getProcessApplicationSpaces: "アプリケーション・スペースを取得しています...",
		progress_message_p8_getProcessRoles: "プロセス・ロールを取得しています...",
		progress_message_p8_getProcessInbaskets: "受信トレイを取得しています...",
		progress_message_p8_getProcessorInformation: "プロセス情報を取得しています...",
		progress_message_p8_getFilterCriteria: "受信トレイ・フィルターを取得しています...",
		progress_message_p8_getLaunchParameters: "ワーク・アイテム情報を取得しています...",
		progress_message_p8_getStepAttachments: "ワーク・アイテム添付を取得しています...",
		progress_message_p8_getSubscriptions: "ワークフロー・サブスクリプションを取得しています...",
		progress_message_p8_getTrackerParameters: "ワーク・アイテム情報を取得しています...",
		progress_message_p8_getTrackerHistory: "ワーク・アイテム履歴を取得しています...",
		progress_message_p8_getTrackerMilestones: "ワーク・アイテムのマイルストーンを取得しています...",
		progress_message_p8_completeStep: "ワーク・アイテムを完了しています...",
		progress_message_p8_moveToInbox: "アイテムを受信トレイに移動しています...",
		progress_message_p8_returnToSender: "ワーク・アイテムを返しています...",
		progress_message_p8_reassign: "ワーク・アイテムを再割り当てしています...",
		progress_message_p8_launchWorkflow: "ワークフローを起動しています...",
		progress_message_p8_getTransferedWorkflows: "ワークフロー情報を取得しています...",

		progress_message_cm_getProcesses: "ワークフロー情報を取得しています...",
		progress_message_cm_completeStep: "ワーク・アイテムを続行しています...",
		progress_message_cm_getItemProcessInformation: "ワークフロー情報を取得しています...",

		progress_message_search: "検索しています...",
		cancel_message_search: "検索が取り消されました。",
		progress_message_getContentItems: "アイテム情報を取得しています...",
		progress_message_openFolder: "フォルダーを開いています...",
		progress_message_addItem: "アイテムを作成しています...",
		progress_message_checkIn: "アイテムをチェックインしています...",
		progress_message_changePassword: "パスワードを変更しています...",
		progress_message_getDefaultInstancePermissions: "デフォルトの権限を取得しています...",
		progress_message_openItem: "アイテム情報を取得しています...",
		progress_message_saveItem: "アイテム情報を保存しています...",
		progress_message_getPermissions: "権限を取得しています...",
		progress_message_getEntryTemplates: "エントリー・テンプレートを取得しています...",
		progress_message_openEntryTemplate: "エントリー・テンプレートを開いています...",
		progress_message_getFavorites: "お気に入りを取得しています...",
		progress_message_getFoldersFiledIn: "フォルダーを取得しています...",
		progress_message_getDocumentVersions: "バージョンを取得しています...",
		progress_message_getDependentAttributeInfo: "属性情報を取得しています...",
		progress_message_packageForDownload: "ダウンロード用にパッケージ化しています...",
		progress_message_convertDocument: "コンテンツを変換しています...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "コンテンツ・タイプを取得しています...",
		progress_message_SharePointPlugin_SharePointAddDocument: "ドキュメントを追加しています...",

		progress_message_desktop_reload: "クライアントはデスクトップを再ロードしています。<br>再度ログインするようプロンプトが出される可能性があります。",
		progress_message_email: "E メールの送信中...",
		cancel_message_email: "E メールは取り消されました。",

		progress_message_p8_getOfficeOnlineTemplates: "Office テンプレートを取得しています...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "お気に入りツリー",
		favorites_content_list_label: "お気に入りコンテンツ・リスト",
		syncItems_tree_label: "マイ同期ファイル・ツリー",
		syncItems_content_list_label: "マイ同期ファイル・コンテンツ・リスト",
		my_checkouts_content_list_label: "マイ・チェックアウト・コンテンツ・リスト",
		browse_tree_label: "ツリーの参照",
		browse_content_list_label: "コンテンツ・リストの参照",
		repository_selector_label: "リポジトリー・セレクター",
		teamspaces_content_list_label: "チームスペース・コンテンツ・リスト",
		templates_content_list_label: "テンプレート・コンテンツ・リスト",
		work_content_list_label: "ワーク・コンテンツ・リスト",
		work_tree_label: "ワーク・ツリー",
		admin_tree_label: "管理ツリー",
		admin_tabs_label: "管理タブ",
		search_tabs_label: "検索タブ",
		search_selector_label: "検索セレクター",
		teamspace_browse_content_list_label: "チームスペース参照コンテンツ・リスト",
		teamspace_search_tabs_label: "チームスペース検索タブ",

		/* Desktop */
		undo_description: "元に戻す ${0}",
		redo_description: "やり直し ${0}",

		/* Application Tabs */
		home: "ホーム",
		repository: "リポジトリー",
		repository_type: "リポジトリー・タイプ:",
		repository_type_header: "リポジトリー・タイプ",
		repository_type_any: "すべてのリポジトリー",
		repository_type_contains_label: "リポジトリー・タイプの内容",
		document_info: "ドキュメント情報",
		team: "チーム",
		administration: "管理",

		/* Home Page */
		recent_activity: "最近のアクティビティー",
		repos_and_wrksp: "リポジトリーおよびチームスペース",
		workspaces: "チームスペース",
		repositories: "リポジトリー",
		templates: "テンプレート",
		favorites: "お気に入り",
		my_checkouts: "マイ・チェックアウト",
		mySyncedFiles: "マイ同期ファイル",
		links: "リンク",
		name_label: "名前",
		description_label: "説明:",
		type_label: "タイプ:",
		type_heading: "タイプ",
		type_id_label: "タイプ ID",
		server_type_icon: "サーバー・タイプ・アイコン",
		server_type_heading: "サーバー・タイプ",
		server_type: "サーバー・タイプ",
		port_heading: "ポート番号",
		port_label: "ポート番号:",
		server_name_heading: "サーバー名",
		server_label: "サーバー名:",
		server_url_label: "サーバー URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "接続済み:",
		repository_label: "リポジトリー",
		modified_label: "更新者:",
		modified_date_label: "最終更新日:",
		status_label: "ステータス:",
		last_modified_label: "最終更新者:",

		modifier: "変更者",
		modified_date: "最終更新日",

		/* Favorites */
		new_favorite_label: "お気に入りに追加",
		edit_favorite_label: "お気に入りの名前の変更",
		remove_favorite_label: "お気に入りから削除",
		missing_alias_message: "名前を指定する必要があります。",
		sync_favorite_enable_hover: "このアイテムは同期が有効です。",
		sync_favorite_disable_hover: "このアイテムは同期されていません。",
		sync_favorite_sync_unavailable_hover: "このオブジェクト・タイプでは、同期は使用できません。",
		sync_enable_label: "このアイテムの同期",
		sync_enable_label_hover: "このアイテムは、ご使用のデバイスに同期されます。",
		delete_favorite_confirmation_question: "このアイテムをお気に入りから削除しますか?",
		alias_label: "名前:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "選択したアイテムはお気に入りに既に存在します。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "このアイテムは、お気に入りのリストに追加できません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "保管できるお気に入りは ${0} 件だけです。",
		add_favorite_max_reached_response: "このアイテムをお気に入りのリストに追加するには、既存のお気に入りを削除してから、このアイテムを追加してください。",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "選択されたドキュメントは、PDF に変換できません。",
		download_as_pdf_max_content_error_explanation: "PDF に変換できるのは、${0} MB のデータまでです。 選択されたドキュメントは ${0} MB を超えています。",
		download_as_pdf_max_content_error_response: "選択するドキュメント数を減らすか、よりサイズの小さいドキュメントを選択して、それらのドキュメントを PDF ファイルとしてもう一度ダウンロードします。",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "選択されたドキュメントは、単一 PDF ファイルに変換できません。",
		download_as_pdf_mimetype_check_error_explanation: "複数パーツで構成されるドキュメントを単一 PDF ファイルに変換するには、各パーツの MIME タイプが同じである必要があります。",
		download_as_pdf_mimetype_check_error_response: "PDF に変換する別のドキュメントを選択してください。",

		/* Activity Stream */
		show_label: "表示:",
		all_filter: "すべて",
		notifications_filter: "通知",
		workitems_filter: "ワーク・アイテム",
		documentes_filter: "ドキュメント",
		all_favorites_filter: "すべてのお気に入り",
		folders_filter: "フォルダー",
		searches_filter: "検索",
		teamspaces_filter: "チームスペース",

		/* Repository */
		all_search_templates: "すべての検索",
		all_od_searches: "すべての検索テンプレート",
		recent_searches: "最近の検索",
		opened_searches: "開いている検索",

		all_worklists: "すべての受信トレイ",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "すべてのワーク・リストのリスト",

		/* Teamspace */
		all_workspaces: "すべてのチームスペース",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "すべてのチームスペースのリスト",
		workspace_title: "チームスペース",
		workspace_icon: "チームスペース・アイコン",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "使用可能",
		workspace_stat_offline: "選択不可",
		workspace_stat_validate: "検証が必要",
		workspace_stat_pendingDelete: "削除の保留中",
		workspace_stat_deleteError: "削除の失敗",

		undefined_value: "定義されていません",
		undefined_reference_value: "参照が定義されていません。",

		/* Filter teamspaces in content list */
		more_results_on_server: "サーバー上にこれ以外の結果が存在する可能性があります。",
		search_all_data: "すべてのデータを検索します。",
		search_all_teamspaces: "すべてのチームスペースを検索します。",
		teamspace_filter_results: "${0} 個の結果を表示しています。 ",
		displaying_filtered_results: "フィルターされた結果を表示しています。 ",
		displaying_recent_results: "過去 ${0} 日間に変更されたチームスペースのみを表示しています。 他のチームスペースを検索するには、名前または説明でチームスペースのリストをフィルターに掛けてください。 ",
		clear_filter: "フィルターをクリアします。",

		/* FolderTreeModel */
		move_item_task: "アイテムの移動",
		copy_item_task: "アイテムのコピー",
		add_item_task: "アイテムの追加",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "次のフォルダーが見つかりませんでした: ${0}。 このフォルダーは削除されている可能性があります。または、このフォルダーをこのビューから開くことができません。 ツリー・ビューの「続き」リンクをクリックして、このフォルダーにナビゲートしてください。 フォルダーを表示できない場合は、コンテンツ・リスト・ビューを最新表示してください。",
		more_paging_link: "続き ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "状況",
		status_dialog_cancel_label: "キャンセル",

		/* ErrorDialog */
		error_dialog_title: "エラー",
		error_dialog_icon_tooltip: "エラー",
		error_dialog_stack_trace_title: "スタック・トレース",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "確認",

		close_browser_msg: "ブラウザー・ウィンドウを閉じてください。",

		/* MessageDialog */
		message_dialog_title: "情報",
		warning_dialog_title: "警告",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "${0} へようこそ",
		server: "リポジトリー:",
		username: "ユーザー名:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "リポジトリーにログインするには、ユーザー名が必要です。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "リポジトリーにログインするには、パスワードが必要です",
		password: "パスワード:",
		login: "ログイン",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "セッションの有効期限が切れています。 ログインし直してください。",
		login_repository_connection_expired_message: "${0} リポジトリーへの接続の有効期限が切れています。 ログインし直してください。",
		login_site_connection_expired_message: "サイトへの接続の有効期限が切れています。 ログインし直してください。",
		login_new_server_message: "${0} のユーザー名とパスワードを入力してください。",
		login_error_more_information_message: "追加情報",

		disconnect_box_account_user: "Box アカウントの切断: ${0}",
		disconnect_box_account: "Box アカウントの切断",
		disconnect_box_accounts: "Box アカウントの切断",

		// OAuth2/Box Login
		login_ssl_connection_required: "Box リポジトリーへのアクセスには SSL 接続が必要です。",
		login_oauth_popup_blocked: "ポップアップ・ウィンドウがブロックされました。 ログインするには、ブラウザーのポップアップのブロック解除が必要な場合があります。",
		login_oauth_click_here: "5 秒以内にリダイレクトされない場合は、ここをクリックしてください。",
		login_oauth_title: "ログイン",
		login_oauth_grant_intro: "${0} に対する認証を付与します。",
		login_pane_oauth_click_here: "ログインするには、ここをクリックしてください。",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Web クライアントからログアウトしますか?",
		logout_confirmation_button: "ログアウト",

		/* ChangeLocaleDialog */
		change_locale: "言語およびロケール設定の変更",
		change_locale_use_browser_language: "ブラウザーの言語設定を使用 (デフォルト)",
		change_locale_use_browser_locale: "ブラウザーの言語設定を使用 (デフォルト)",
		change_locale_description: "ブラウザーの Cookie を削除する場合は、言語およびロケールの設定をリセットする必要があります。",
		change_locale_language_locale: "アプリケーションの言語:",
		change_locale_language_locale_hover: "この設定により、Web クライアント内のテキストの言語は変更されますが、アプリケーション内のドキュメントの言語は変更されません。<br><br>デフォルト設定では、Web ブラウザーの構成オプションで指定された言語が使用されます。",
		change_locale_value_format_locale: "アプリケーションのロケール:",
		change_locale_value_format_locale_hover: "ロケールは、Web クライアント内の日付、時刻、および数値のフォーマットを決定します。<br><br>デフォルト設定では、Web ブラウザーの構成オプションで指定された言語に関連付けられたフォーマットが使用されます。",
		change_locale_for_office: "双方向テキスト設定:",
		change_locale_bidi_support_flag: "双方向表示サポートの有効化",
		change_locale_bidi_support_flag_hover: "双方向表示サポートが有効になっている場合、ユーザーは、入力フィールドで使用するテキストの方向を設定できます。  例えば、フォルダーなどのアイテムに対して入力されたテキストは、入力されたときと同じ方向に表示されます。",
		change_locale_base_text_direction: "コンテンツの基本テキスト方向:",
		change_locale_base_text_direction_hover: "入力フィールドに入力するテキストの方向を設定します。  これにより、フォルダー名などの、ユーザーが入力したラベルの表示方向も制御されます。",
		change_locale_calendar_type: "カレンダー・タイプ:",
		change_locale_calendar_type_hover: "ユーザー・セッションに使用するカレンダーのタイプを選択します。",
		change_locale_base_text_direction_default: "デフォルト",
		change_locale_base_text_direction_ltr: "左から右",
		change_locale_base_text_direction_rtl: "右から左",
		change_locale_base_text_direction_contextual: "コンテキストに依存",
		change_locale_calendar_type_gregorian: "グレゴリオ暦",
		change_locale_calendar_type_hijri: "ヒジュラ暦",
		change_locale_calendar_type_hebrew: "ヘブライ語",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura 暦",

		/* ChangePasswordDialog */
		change_password: "パスワード変更",
		change_password_title: "パスワード変更",
		change_password_expired_title: "パスワード期限切れ",
		change_password_message: "新規パスワードを入力してください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "パスワードの期限が切れています。 新規パスワードを入力してください。",
		change_password_password_rules: "パスワード・ルール",
		change_password_old_password: "古いパスワード:",
		change_password_new_password: "新規パスワード:",
		change_password_confirm_password: "パスワードの確認:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "古いパスワードを入力する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "新規パスワードを入力する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "新規パスワードを確認してください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "2 つのパスワードが一致する必要があります。",

		/* GlobalToolbar */
		actions: "アクション",
		actions_label: "アクション:",
		open_actions_label: "アクションを開く:",

		/* About Dialog */
		about_dialog_title: "バージョン情報",
		about_product_name_label: "製品名: ",
		about_product_version_label: "バージョン: ",
		about_product_build_label: "ビルド: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. IBM、IBM ロゴおよび ibm.com は、世界の多くの国で登録された International Business Machines Corporation の商標です。他の製品名およびサービス名等は、それぞれ IBM または各社の商標である場合があります。現時点での IBM の商標リストについては、http://www.ibm.com/legal/copytrade.shtml をご覧ください。 この「プログラム」は「プログラム」に同梱のご使用条件に基づき使用許諾されます。 この「プログラム」のご使用条件は、「プログラム」のディレクトリー・フォルダーまたはライブラリー内に「License」または「Non_IBM_License」として含まれるか、または印刷物として提供されます。 「プログラム」を使用する前にこの使用条件をお読みください。 「プログラム」をご使用になることで、お客様は「プログラムのご使用条件」に同意されたものとみなされます。 ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "選択したアイテムを削除しますか?",
		delete_single_folder_confirmation_question: "${0} フォルダーを削除しますか?",
		delete_multiple_confirmation_question: "選択したアイテムを削除しますか?<br>${0} 個のアイテムが選択されました。",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "削除",
		search_template_delete_confirmation_question: "${0} 検索を削除しますか?",
		search_template_opened_delete_confirmation_question: "${0} 検索が開いています。 検索を削除すると、その検索は閉じられます。<br>この検索を削除しますか?",
		delete_multiple_opened_search_template_confirmation_question: "次の検索が開いています: ${0}。<br>検索を削除すると、その検索は閉じられます。 これらの検索を削除しますか?",
		delete_large_number_items_confirmation_question: "削除対象として ${0} アイテムを選択しました。<br/>多数のアイテムを削除すると、長時間かかる場合があります。<br/>続行しますか?",
		delete_confirmation_entrytemplate: "このエントリー・テンプレートを削除すると、エントリー・テンプレートに関連付けられたドキュメントやフォルダーに対して次のような影響があります。<ul><li>アイテムとエントリー・テンプレートの関連付けが削除されます。ユーザーがアイテムを更新すると、警告が表示される可能性があります。</li><li>エントリー・テンプレートによって制御されていたプロパティー (名前やプロパティー順など) は、エントリー・テンプレートに関連付けられたアイテムには適用されなくなります。</li></ul>このエントリー・テンプレートを削除しますか?",
		delete_confirmation_entrytempalte_with_multi_items: "エントリー・テンプレートは個別に削除する必要があります。 エントリー・テンプレートは、削除するアイテムのリストから除外されました。 エントリー・テンプレートを削除する場合は、各エントリー・テンプレートを個別に削除してください。",

		/* Create/Apply/Remove Hold */
		hold: "保留",
		createHold: "新しい保留",
		applyHold: "保留の適用",
		removeHold: "保留の解除",
		showHolds_title: "保留の表示",
		applyHoldSelectText: "選択されたアイテムに適用する保留を選択してください。",
		availableHolds: "使用可能な保留:",
		removeHoldSelectText: "選択されたアイテムから削除する保留を選択してください。",
		appliedHolds: "適用されている保留:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "新しい保留を作成して、選択されたアイテムに適用してください。",
		holdName: "保留名:",
		holdDescription: "説明:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "保留に対して名前を指定する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "指定された保留名は既に存在します。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "保留名に次の文字を含めることはできません。' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "${0} 分以内にセッションが期限切れになります。",
		session_expire: "セッション期限切れ",
		logoff: "ログアウト",
		extend_session: "セッションの延長",
		admin_custom_settings: "追加設定:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning は、セッション期限切れの警告を有効にするかどうかを指定するブール値です。デフォルト値は true です。 sessionExpireWarningTime は、セッション期限切れの警告の時間を指定する整数 (2 から 5) です。",
		admin_custom_setting_dialog_title_new: "新規設定",
		admin_custom_setting_dialog_title_edit: "設定の編集",
		admin_custom_setting_dialog_hover_help: "パラメーター名と値を指定することにより別のパラメーターを追加します。 例えば、セッション期限切れの警告を有効にする場合は、「enableSessionExpireWarning」と「true」を指定できます。",
		admin_custom_setting_dialog_field_hover_help: "パラメーターの名前および値については、「IBM Navigator Parameter Reference Manual」を参照してください。",
		admin_custom_setting_dialog_nameInvalid: "この値は必須です。 値に空白を含めること、および値を重複させることはできません。",
		admin_custom_setting_dialog_bool_valueInvalid: "この値は必須です。 この値はブール値でなければなりません。",
		admin_custom_setting_dialog_int_valueInvalid: "この値は必須です。 この値は整数でなければなりません。",
		/* Add Document Dialog */
		add_document_dialog_title: "ドキュメントの追加",
		add_documents_dialog_title: "ドキュメントの追加",
		add_document_general_label: "一般",
		add_document_properties_label: "プロパティー",
		add_document_properties_with_ellipsis_label: "プロパティー...",
		add_document_security_label: "セキュリティー",
		add_document_location_label: "保存先:",
		add_document_type_label: "保存の対象",
		add_document_localfile_label: "ローカル・ドキュメント",
		add_document_metadata_label: "ドキュメントの情報",
		add_document_external_label: "外部ドキュメントへのリンク",
		add_document_web_link_label: "Web リンク",
		add_document_saved_content_label: "保存されたファイルを使用する:",
		add_document_saved_content_choice: "保存されたファイル",
		add_document_file_name_label: "ファイル名:",
		add_document_entry_template_label: "エントリー・テンプレート:",
		add_document_delete_file_label: "ローカル・ファイルの削除",
		add_document_delete_file_disabled_label: "ファイル・トラッキング・ディレクトリーにないファイルは削除されません。",
		add_document_major_version_label: "メジャー・バージョン",
		add_document_major_version_hover: "ドキュメントの状況をリリース済みに設定します。 ドキュメントは、バージョン 1.0 としてリポジトリーに追加されます。 このオプションを選択しない場合、ドキュメントをリリースする準備が完了せず、マイナー・バージョン 0.1 として追加されます。",
		add_document_save_document_as_unfiled_label: "ドキュメントをフォルダーに保存しない",
		add_document_save_document_as_unfiled_hover: "このオプションを選択する場合、このドキュメントを見つける方法は、検索のみとなります。 これを参照することはできません。",
		add_document_create_new_version_label: "新しいバージョンを作成",
		add_document_replace_existing_version_label: "既存のバージョンを置換",
		add_document_start_workflow_label: "ワークフローの起動",
		add_document_auto_classify_label: "コンテンツを自動で分類",
		add_document_add_label: "追加",
		add_document_cancel_label: "キャンセル",
		add_document_document_type_label: "クラス",
		add_document_context_info: "ドキュメント・プロパティーとして入力した値は、後でドキュメントを検索するときに使用できます。",
		add_documents_context_info: "ドキュメント用に入力した値は、後でドキュメントを検索するときに使用できます。 特定のドキュメントに対して異なるプロパティー値を入力する必要がある場合は、そのドキュメントを個別に追加するか、ドキュメントの追加後にそのドキュメントのプロパティーを編集する必要があります。",
		add_document_url_label: "URL:",
		add_document_template_description: "テンプレートの説明:",
		add_document_select_entry_template: "エントリー・テンプレートの入力または選択",
		add_document_no_permission_to_associations: "エントリー・テンプレートを使用する権限がありません",
		add_document_no_entry_template_to_use: "選択されたファイルにエントリー・テンプレートを使用することはできません",
		add_document_no_entry_template_itemtype_permission: "このフォルダーにアイテムを追加することはできません。 エントリー・テンプレートを選択する必要があり、このフォルダーに関連付けられているすべてのエントリー・テンプレートへのアクセス権限を持っていません。 システム管理者に連絡して、このフォルダーに関連付けられているエントリー・テンプレートへのアクセス権限を付与するように依頼してください。",
		add_document_appgroup_name_label: "アプリケーション・グループ名:",
		add_document_app_name_label: "アプリケーション名:",
		create_folder_dialog_title: "新規フォルダー",
		create_folder_context_info: "フォルダー・プロパティーとして入力した値は、後でフォルダーを検索するときに使用できます。",
		create_folder_folder_name_label: "フォルダー名",
		create_folder_save_folder_as_unfiled_label: "フォルダーを別のフォルダーに保存しない",
		create_folder_save_folder_as_unfiled_hover: "このオプションを選択する場合、このフォルダーを見つける方法は、検索のみとなります。 これを参照することはできません。",
		add_item_create_in_folder: "作成先のフォルダー:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "フォルダー名に、次の文字を含めることはできません。\\ / : * ? \" < > |",

		invalid_box_folder_name_message: "フォルダー名に \\ / 文字を含めることはできません。. または .. と等しいフォルダー名を付けることもできません。",
		invalid_box_file_name_message: "ファイル名に \\ / 文字を含めることはできません。. または .. と等しいファイル名を付けることもできません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "ファイル名に、次の文字を含めることはできません。\\ / : * ? \" < > |",
		external_document_placeholder: "ドキュメントの URL の入力",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "色は、3 桁または 6 桁の 16 進数として入力する必要があります (例: #000、#000000)。",
		add_document_unfiled: "${0} 件の未ファイリング",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "エントリー・テンプレートを使用してドキュメントを追加",
		add_document_using_template_context_info: "エントリー・テンプレートを使用してドキュメントを追加すると、ドキュメントに対して入力する値が一貫性を持ちます。",
		add_documents_using_template_dialog_title: "エントリー・テンプレートを使用してドキュメントを追加",
		add_documents_document_name_is_file_name_hint: "このプロパティーにはファイル名が使用されます",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "エントリー・テンプレートを使用して新規フォルダーを作成",
		create_folder_using_template_context_info: "エントリー・テンプレートを使用してフォルダーを作成すると、フォルダーに対して入力する値が一貫性を持ちます。",

		add_documents_batch_results_dialog_title: "ドキュメントはリポジトリーに追加されませんでした",
		add_documents_batch_results_dialog_context_info: "以下のドキュメントがリポジトリーに追加されませんでした。 ドキュメントがリポジトリーに追加されなかった理由に関する詳細を確認するには、ドキュメントを選択し、「詳細」をクリックしてください。",
		add_documents_batch_results_dialog_filename_col_hdr: "ファイル名",
		add_documents_batch_results_dialog_status_col_hdr: "状況",
		add_documents_batch_results_dialog_message_col_hdr: "メッセージ",
		add_documents_batch_results_status_error: "エラー",
		add_documents_batch_results_status_cancelled: "キャンセルされました",
		add_documents_batch_results_status_cancelled_msg: "要求がキャンセルされたため、ドキュメントが追加されませんでした。",

		add_documents_batch_status_title: "ドキュメントを追加しています",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "ファイル ${0} / ${1} を追加しています...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "エラー: ${0}",
		add_documents_batch_status_completing_msg: "このドキュメントの追加後、プロセスは停止します。",

		add_documents_status_uploading_msg: "ファイル ${0} / ${1} をアップロードしています...",
		add_documents_status_adding_msg: "ファイル ${0} / ${1} を追加しています...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "このエントリー・テンプレートは別のアプリケーションで構成されており、ドキュメントを常にレコードとして宣言するように構成されています。 しかし、Web クライアントはドキュメントをレコードとして宣言することをサポートしないため、この設定は無視されます。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "このエントリー・テンプレートは別のアプリケーションで構成されており、このドキュメントをレコードとして宣言するかどうかを指定できるように構成されています。 しかし、Web クライアントはドキュメントをレコードとして宣言することをサポートしないため、この設定は無視されます。",
		no_selection: "&lt;選択&gt;",

		batch_results_dialog_details_label: "詳細",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "値が無効です。 値はグローバル一意識別子 (GUID) である必要があります。例: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "値が無効です。 値は、1.2 や 365 などの浮動小数点数でなければなりません。",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "値が無効です。 値は、${0} の形式でなければなりません (例: ${1})。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "値が無効です。 値は、1.2 や 365 などの 10 進数値でなければなりません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "値が無効です。 値は、5 や 1349 などの整数でなければなりません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "値が無効です。 値には英字のみを使用できます。例: a から z および A から Z。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "値が無効です。 値には英数字のみを使用できます。例: a から z、A から Z、および 0 から 9。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "値が無効です。 値には数字のみを使用できます。例: 0 から 9。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "値が無効です。 値には、次の文字のみを使用できます。a から z、A から Z、0 から 9、[スペース]、および `.,:;?\"/-_&amp;+%*=<>()|!$#^@。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "値が無効です。 値は次の形式の日付である必要があります。${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "値が無効です。 値は次の形式の時刻である必要があります。${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "値が無効です。 ドロップダウン・メニューから値を選択します。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "値が無効です。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "値が無効です。 値は、次の形式でなければなりません: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "この値は必須です。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "値が長すぎます。 プロパティーがサポートする最大長は ${0} です。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "値が短すぎます。 プロパティーがサポートする最小の長さは ${0} です。",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "値が範囲外です。 値は ${0} から ${1} の間の浮動小数点数である必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "値が範囲外です。 値は ${0} から ${1} の間の 10 進数値である必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "値が範囲外です。 値は ${0} から ${1} の間の整数である必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "値は ${0} から ${1} の間の日付である必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "値が範囲外です。 値は ${0} から ${1} の間の日付である必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "値が範囲外です。 値は ${0} から ${1} の間の時刻である必要があります。",
		property_and: "および",

		property_invalidValueOrRequired: "次の値は無効であるか、必須です: ${0}。",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "プロパティー",
		edit_properties_dialog_info: "このアイテムのプロパティーを表示または編集できます。 適切な権限が付与されている場合は、アイテムのセキュリティーを変更することもできます。 ただし、システムのプロパティーを変更することはできません。",
		edit_properties_od_dialog_info: "このアイテムのプロパティーを表示または編集できます。 ただし、システムのプロパティーを変更することはできません。",
		system_properties_title: "システム・プロパティー",
		custom_properties_title: "プロパティー",
		/* Folder collaboration tab */
		box_permission_permission: "権限",
		box_permission_permissions: "権限",
		box_permission_editor: "エディター",
		box_permission_owner: "所有者",
		box_permission_co_owner: "共同所有者",
		box_permission_viewer_uploader: "ビューアー・アップローダー",
		box_permission_previewer_uploader: "プレビューアー・アップローダー",
		box_permission_viewer: "ビューアー",
		box_permission_previewer: "プレビューアー",
		box_permission_uploader: "アップローダー",
		box_permission_add: "追加",
		box_permission_upload: "アップロード",
		box_permission_download: "ダウンロード",
		box_permission_preview: "プレビュー",
		box_permission_view: "表示",
		box_permission_send_links: "表示専用リンクの送信",
		box_permission_create_subfolders: "サブフォルダーの作成",
		box_permission_create_tasks: "タスクの作成",
		box_permission_add_comments: "コメントの追加",
		box_collaboration_invite_placeholder: "招待する名前、E メール、またはグループを入力します",
		box_collaboration_invite_placeholder_non_admin: "招待する E メールを入力してください",
		box_collaboration_invalid_email: "有効な E メール・アドレスを入力してください",
		box_collaboration_user_already_present: "このユーザーはフォルダー上で既にコラボレーターです",
		box_collaboration_user_name: "名前",
		box_collaboration_email_address: "E メール・アドレス",
		box_collaboration_date_added: "追加日",
		box_collaboration_remove_collaboration: "削除",
		box_collaboration_remove_collaboration_title: "削除",
		box_collaboration_no_collaborators: "コラボレーターはありません",
		box_collaboration_change_owner_title: "アイテム所有者の変更",
		box_collaboration_change_owner_prompt: "このコラボレーターをフォルダー所有者にすると、自分は編集者となり、フォルダーの所有者ではなくなります。 このフォルダーに直接追加されたコラボレーターは、自分のルート・フォルダーを見るとそのことが分かります。 親フォルダー以上のレベルで追加されたコラボレーターは、コラボレーターではなくなります。 続行しますか?",
		box_collaboration_remove_self_title: "自分の削除",
		box_collaboration_remove_self_prompt: "自分のコラボレーターとしての役割を取り消しますか? 今後、このフォルダーにアクセスできなくなります。",
		box_collaboration_user: "ユーザー",
		box_collaboration_group: "グループ",
		box_managing_users_not_configured: "Box アプリケーションが正しく構成されていないため、ユーザーおよびグループを検索できません。 この機能を使用するには、管理者と連絡を取り、ユーザーとグループを管理するために Box アプリケーションを構成するよう要求してください。",
		duplicate_value_error: "このプロパティー内の各値は一意でなければなりません。",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "以下のフィールドに加えた変更は、選択したすべてのアイテムに適用されます。 特定のアイテムに異なるプロパティー値を入力する必要がある場合や、アイテムのセキュリティーを編集する必要がある場合は、そのアイテムのプロパティーを個別に編集する必要があります。",
		multi_edit_properties_class_label: "クラス:",
		multi_edit_properties_items_label: "アイテム名:",
		multi_edit_properties_properties_label: "プロパティー:",
		multi_edit_batch_status_title: "プロパティーを更新しています",
		multi_edit_batch_status_adding_msg: "アイテム ${0}/${1} を更新しています...",
		multi_edit_batch_status_verifying_msg: "アイテム ${0}/${1} を検証しています...",
		multi_edit_batch_status_completing_msg: "このアイテムの更新後、プロセスは停止します。",
		multi_edit_batch_status_validation_completing_msg: "このアイテムの検証後、プロセスは停止します。",
		multi_edit_batch_results_status_error: "エラー",
		multi_edit_batch_results_status_cancelled: "キャンセルされました",
		multi_edit_batch_results_status_cancelled_msg: "要求が取り消されたため、アイテムは更新されませんでした。",
		multi_edit_batch_results_dialog_title: "更新されなかったアイテム",
		multi_edit_batch_results_dialog_context_info: "以下のアイテムは更新されませんでした。 アイテム名を選択して「詳細」をクリックすると、そのアイテムが更新されなかった詳細な理由を確認できます。",
		multi_edit_batch_results_dialog_itemname_col_hdr: "アイテム名",
		multi_edit_batch_results_dialog_status_col_hdr: "状況",
		multi_edit_batch_results_dialog_message_col_hdr: "メッセージ",
		multi_edit_batch_status_errors_msg: "エラー: ${0}",
		multi_edit_batch_permission_error_text: "プロパティーに対する変更内容を保存できません。",
		multi_edit_invalid_value_error: "この値は別のプロパティー値に依存しているため、選択したすべてのアイテムに対して有効ではありません。",
		multi_edit_batch_permission_error_explanation: "十分な特権がないため、このアイテムのプロパティーを変更できません。",
		multi_edit_no_modifiable_properties: "選択アイテムのプロパティーを変更できません。 この状態は、アイテムに読み取り専用プロパティーのみが含まれているか、アイテムの名前かタイトルのみが編集可能である場合に発生します。 複数のアイテムが選択されている場合、それらのアイテムの名前またはタイトルを変更することはできません。",
		multi_edit_mult_classes_dialog_info: "選択したアイテムは別のリポジトリー上にあるか、別のクラスに所属しています。 同じクラスのアイテム、または同じリポジトリー上のアイテムのみを編集できます。 編集するアイテムのサブセットを選択してください。",
		multi_edit_class_selector_class_heading: "クラス",
		multi_edit_class_selector_entry_template_heading: "エントリー・テンプレート",
		multi_edit_class_selector_repository_heading: "リポジトリー",
		multi_edit_class_selector_items_heading: "アイテム",
		multi_edit_some_classes_not_displayed: "選択したアイテムの一部に読み取り専用のプロパティーしか含まれていないか、選択したアイテムの一部がプロパティーの編集をサポートしていないリポジトリー上にあるため、これらのアイテムはこのリストに含まれていません。",
		multi_edit_properties_invalid_msg: "一部のプロパティー値が、選択したすべてのアイテムに対して有効ではありません。",
		multi_edit_properties_readonly_tooltip_text: "${0}: このプロパティーは読み取り専用であるため、変更できません。",
		multi_edit_append_checkbox_label: "追加",
		multi_edit_append_checkbox_tooltip: "このオプションは、既存のプロパティー値を置き換えるのではなく、既存のプロパティー値に新しいプロパティー値を追加する場合に選択します。",
		multi_edit_properties_invalid_childcomponent_msg: "${1} 子コンポーネントの ${0} プロパティーの一部の値は他のプロパティーに依存しており、選択された項目に対して有効ではなくなりました。 ${1} 子コンポーネントの値をクリアするか、あるいは、選択したアイテムに対して個別にプロパティー変更を行ってください。",

		/* Export Properties Dialog */
		export_properties_dialog_title: "プロパティーのエクスポート",
		export_properties_dialog_info: "エクスポートするプロパティーを選択し、表示する順序を指定します。",
		export_properties_dialog_export_button_label: "エクスポート",
		export_properties_dialog_export_raw_values: "未加工値のエクスポート",

		/* Properties */
		filter_clear_tooltip: "フィルターのクリア",
		properties_new_row: "新規",
		properties_requiredClass_document_tooltip: "ドキュメントを選択してください。 ドキュメントは ${0} クラスに属している必要があります。",
		properties_requiredClass_folder_tooltip: "フォルダーを選択してください。 フォルダーは ${0} クラスに属している必要があります。",
		properties_dataType_tooltip: "データ型: ${0}",
		properties_maxLength_tooltip: "最大長: ",
		properties_minLength_tooltip: "最小長: ",
		properties_minValue_tooltip: "最小値: ",
		properties_maxValue_tooltip: "最大値: ",
		properties_format_tooltip: "形式: ",
		properties_description_tooltip: "説明: ",

		properties_type_boolean_tooltip: "Boolean",
		properties_type_date_tooltip: "日付",
		properties_type_time_tooltip: "時間",
		properties_type_timestamp_tooltip: "タイム・スタンプ",
		properties_type_decimal_tooltip: "10 進数値",
		properties_type_double_tooltip: "浮動小数点数",
		properties_type_short_tooltip: "Integer",
		properties_type_integer_tooltip: "Integer",
		properties_type_long_tooltip: "Integer",
		properties_type_string_tooltip: "テキスト文字列",
		properties_type_string_alpha_tooltip: "英字文字列",
		properties_type_string_alphanum_tooltip: "英数字文字列",
		properties_type_string_ext_tooltip: "拡張英数字文字列",
		properties_type_string_num_tooltip: "数値文字列",
		properties_type_binary_tooltip: "バイナリー",
		properties_type_object_tooltip: "オブジェクト",
		properties_type_reference_tooltip: "このプロパティーはリポジトリー内の別のアイテムを参照します。",
		properties_type_guid_tooltip: "グローバル一意 ID",
		properties_type_group_tooltip: "ユーザーおよびグループ",
		properties_type_user_tooltip: "ユーザー",
		properties_type_childComponent_tooltip: "子コンポーネント",

		properties_childComponent_minCardinalityOnly_tooltip: "このプロパティーには、${0} 個以上の値を指定する必要があります。",
		properties_childComponent_maxCardinalityOnly_tooltip: "このプロパティーには、${0} 個以下の値を指定する必要があります。",
		properties_childComponent_minMaxCardinality_tooltip: "このプロパティーには、${0} 個以上かつ ${1} 個以下の値を指定する必要があります。",
		properties_childComponent_noCardinality_tooltip: "このプロパティーには、任意の数の値を指定できます。",

		properties_type_guid_example_tooltip: "例: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "リストから値を選択します。",
		properties_single_select_choice_tooltip: "値を選択します。",
		properties_multiple_select_typein_tooltip: "1 つまたは複数の値を入力します。",
		properties_multiple_select_choice_tooltip: "1 つ以上の値を選択してください。",
		properties_not_selectable_tooltip: "カテゴリーは選択できません。",
		properties_none: "なし",
		properties_none_tooltip: "このプロパティーの現在の値をクリアするには、<i>なし</i> を選択します。",
		properties_value_empty: "値なし",
		properties_value_read_only: "読み取り専用",
		properties_clear_label: "クリア",
		properties_clear_tooltip: "このフィールドの値をクリアすると、<b>「保存」</b>をクリックした後に、リポジトリー内の値がクリアされます。",
		properties_box_custom_properties: "カスタム・プロパティー",
		properties_box_metadata_name_in_use: "この名前は既に使用されています。 カスタム・プロパティーに別の名前を入力してください。",

		properties_templates: "テンプレート",
		properties_add_template: "テンプレートの追加",
		properties_remove_template: "削除",
		/* Checkin Document Dialog */
		checkin_dialog_title: "チェックイン",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "チェックイン",
		checkin_cancel_label: "キャンセル",
		checkin_file_name_label: "ファイル名",
		checkin_document_status_title: "ドキュメントのチェックイン",
		checkin_document_status_uploading_msg: "ファイルをアップロードしています...",
		checkin_document_status_checkingin_msg: "ファイルをチェックインしています...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "リダクション・モードの選択",
		viewer_redaction_new_document_confirmation_question: "リダクションを新しいドキュメントとして保存しますか? ローカル・ファイルとして保存しますか?",
		viewer_redaction_new_version_confirmation_question: "リダクションを新しいバージョンとして保存しますか?",
		viewer_redaction_new_version_confirmation_question_never: "リダクションを新しいコンテンツとして保存しますか?",		
		viewer_redaction_new_document_button: "はい",
		viewer_redaction_new_document_cancel_button: "いいえ",
		viewer_redaction_add_document_confirmation_question: "リダクションを新しいドキュメントとして保存しますか? 新しいバージョンとして保存しますか? ローカル・ファイルとして保存しますか?",
		viewer_redaction_add_document_confirmation_question_version_never: "リダクションを新しいドキュメントとして保存しますか? 新しいコンテンツとして保存しますか? ローカル・ファイルとして保存しますか?",
		viewer_redaction_add_document_button: "新しいドキュメント",
		viewer_redaction_add_new_version_button: "新しいバージョン",
		viewer_redaction_add_new_version_button_version_never: "新しいコンテンツ",
		viewer_redaction_add_local_file_button: "ローカル・ファイル",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "リダクションの理由の選択",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "このドキュメントをリポジトリーに追加するために使用されたエントリー・テンプレートが見つかりません。 ドキュメントは、エントリー・テンプレートを使用しないで、リポジトリーにチェックインされます。",
		property_entry_template_not_retrieved_warning: "このドキュメントをリポジトリーに追加するために使用されたエントリー・テンプレートが見つかりません。 ドキュメントのプロパティーは、エントリー・テンプレートを使用せずに表示されます。",
		multi_edit_entry_template_not_found_name: "[見つかりません]",
		multi_edit_entry_template_not_retrieved_warning: "これらのアイテムをリポジトリーに追加するために使用されたエントリー・テンプレートが見つかりません。 アイテムのプロパティーは、エントリー・テンプレートを使用せずに変更されます。",
		checkin_major_version_hover: "ドキュメントのバージョン番号を 1 つ増分し、ドキュメントの状況をリリース済みに設定します。 このオプションを選択しない場合、ドキュメントをリリースする準備が完了せず、マイナー・バージョンとしてチェックインされます。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "ドキュメントをチェックインできません。このドキュメントは、チェックアウトされていません。",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ユーザー ID またはパスワードがサーバーで無効です。",
		error_bad_userid_password_userResponse: "ユーザー ID とパスワードを正しく入力したことを確認してください。",
		error_bad_userid_password_adminResponse: "次のエラー: ${0} が戻されました。",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "エラー・メッセージ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "次の URL: ${0} で Web クライアントへの接続を確立することができません。",
		http_send_error_explanation: "このエラーは、Web アプリケーション・サーバー上の構成の問題または Web クライアント・アプリケーションでの問題が原因で発生することがあります。",
		http_send_error_userResponse: "もう一度ログインしてください。 問題が解決しない場合は、このエラーをシステム管理者に連絡してください。",
		http_send_error_adminResponse: "次の HTTP エラー: ${1} が戻されました。",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "次の URL: ${0} で Web クライアントへの接続を確立することができません。",
		http_error_explanation: "ファイアウォールに対する認証が必要であるか、Web アプリケーション・サーバーが稼働していないか、ネットワーク問題が原因でサーバーに到達できない可能性があります。",
		http_error_userResponse: "ファイアウォールに対する認証が必要である場合は、認証し、ログインを再試行してください。 問題が解決しない場合は、このエラーをシステム管理者に連絡してください。",
		http_error_adminResponse: "次の HTTP エラー: ${1} が戻されました。",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "次の URL: ${0} で Web クライアントへの接続を確立することができません。",
		http_response_bad_explanation: "このエラーは、Web アプリケーション・サーバー上の構成の問題または Web クライアントでの問題が原因で発生することがあります。",
		http_response_bad_userResponse: "もう一度ログインしてください。 問題が解決しない場合は、このエラーをシステム管理者に連絡してください。",
		http_response_bad_adminResponse: "次のエラー: ${1} が戻されました。",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "無題",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "E メール・アプレットを開始できません。",
		email_applet_init_failed_explanation: "この問題は、E メール・クライアントのインストールと構成が正しく実行されていない場合や、サポートされるバージョンの Java ランタイム環境 (JRE) がワークステーションにインストールされていない場合に発生する可能性があります。",
		email_applet_init_failed_userResponse: "この問題を解決するには、以下の処理を実行します。<ul><li>ワークステーションに E メール・アプリケーションがインストールされていて、デフォルトの E メール・クライアントとしてセットアップされていることを確認してください。</li><li>コマンド・プロンプトで java -version コマンドを入力して、サポート対象バージョンの JRE がワークステーションにインストールされていることを確認してください。</li></ul><p>サポート対象バージョンの JRE のリストは、IBM ソフトウェア・サポート・サイトの「<i>Hardware and software prerequisites for IBM Content Navigator</i>」というドキュメントに記載されています。</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "必要な DLL ファイルをロードできないため、E メール・アプリケーションを開始できませんでした。",
		email_applet_JNI_LOAD_FAILED_explanation: "ワークステーション上の一時ディレクトリーがいっぱいである可能性があるため、必要な WCEmailAppletJNI.dll ファイルをロードできません。",
		email_applet_JNI_LOAD_FAILED_userResponse: "一時ディレクトリーに十分なスペースがあることを確認してください。 次に、Web クライアントからドキュメントを送信し直してください。 デフォルトでは、WCEmailAppletJNI.dll ファイルは、Web ブラウザー設定で指定された一時ディレクトリーにロードされます。",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "E メール・アプレットが一時ファイルを作成できないため、E メール・アプリケーションを開始できませんでした。",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "ワークステーション上の一時ディレクトリーがいっぱいである可能性があります。",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "一時ディレクトリーに十分なスペースがあることを確認してください。 次に、Web クライアントからドキュメントを送信し直してください。",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "E メール・アプレットが一時ディレクトリーにアクセスできないため、E メール・アプリケーションを開始できません。",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "ワークステーション上の一時ディレクトリーがいっぱいであるか、一時ディレクトリーに書き込むための適切なアクセス権限が付与されていない可能性があります。",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "一時ディレクトリーに十分なスペースがあること、および一時ディレクトリーへの書き込み権限が付与されていることを確認してください。 次に、Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、システム管理者に連絡してください。",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E メール・アプレットが一時ファイルを削除できません。",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "別のアプリケーションがファイルを使用しているか、ファイルがワークステーション上に存在しない可能性があります。",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "別のアプリケーションがファイルを使用している場合は、そのアプリケーションを終了してください。 ファイルがローカル・ファイル・システムに存在する場合は、次のファイルをワークステーション上の一時ディレクトリーから削除してください: ${0}。",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "ドキュメントへのリンクを作成できません。",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "リポジトリーが無効な形式の URL を返しました。",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Web ブラウザーを閉じて、すべてのタブおよびセッションを終了し、もう一度ログインしてください。 Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、IBM ソフトウェア・サポートにお問い合わせください。",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E メール・アプレットが E メールにファイルを添付できません。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "リポジトリーが無効な形式のドキュメント URL を返しました。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Web ブラウザーを閉じて、すべてのタブおよびセッションを終了し、もう一度ログインしてください。 Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、IBM ソフトウェア・サポートにお問い合わせください。",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "添付ファイルを作成できません。",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E メール・アプレットがドキュメント URL を読み取れません。",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Web ブラウザーを閉じて、すべてのタブおよびセッションを終了し、もう一度ログインしてください。 Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、IBM ソフトウェア・サポートにお問い合わせください。",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "ドキュメントをリポジトリーから取得できませんでした。",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "セッションがタイムアウトになったか、リポジトリーまたは Web アプリケーション・サーバーが稼働していないか、Web クライアント構成に問題がある可能性があります。",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "ログインし、もう一度 E メールでドキュメントを送信してみてください。 問題が解決しない場合は、リポジトリーのエラー・ログを確認するように、システム管理者に依頼してください。",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "AFP ドキュメントを別のフォーマット (PDF など) に変換するように Web クライアントを構成した場合は、ドキュメントを添付ファイルとして送信する前に、変換が正しく構成されていることを確認してください。",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "ドキュメントを PDF に変換できませんでした。",
		email_applet_CONVERT_DOC_FAILED_explanation: "ドキュメントを PDF に変換するために使用されるツールは、このファイル・タイプをサポートしていません。",
		email_applet_CONVERT_DOC_FAILED_userResponse: "このページを閉じ、ドキュメントを PDF に変換せずに、もう一度 E メールでドキュメントを送信してみてください。",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E メールは作成されませんでした。",
		email_applet_MAPI_USER_ABORT_explanation: "E メール・アプリケーションを開き、適切に機能していることを確認してください。 次に、Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、オペレーティング・システムのイベント・ログを確認するように、システム管理者に連絡してください。",
		email_applet_MAPI_USER_ABORT_userResponse: "E メール・アプリケーションを閉じるつもりであった場合は、これ以上のアクションは必要ありません。 E メールを送信するには、E メール・アプリケーションにログインし、Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E メールを作成できません。",
		email_applet_MAPI_FAILURE_explanation: "E メール・クライアントが開かれていないか、ログインしていない可能性があります。",
		email_applet_MAPI_FAILURE_userResponse: "E メール・アプリケーションを開き、適切に機能していることを確認してください。 次に、Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、オペレーティング・システムのイベント・ログを確認するように、システム管理者に連絡してください。",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E メールを作成できません。",
		email_applet_MAPI_LOGON_FAILURE_explanation: "E メール・クライアントにログインしていません。 Web クライアントからメッセージを送信するには、E メール・クライアントを開いていて、ログインしている必要があります。",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "E メール・クライアントを開き、ログインします。 次に、Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "ワークステーション上に一時ファイルを作成できないため、E メールを作成できません。",
		email_applet_MAPI_DISK_FULL_explanation: "ワークステーション上の一時ディレクトリーがいっぱいである可能性があります。",
		email_applet_MAPI_DISK_FULL_userResponse: "一時ディレクトリーに十分なスペースがあることを確認してください。 次に、Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "十分なシステム・メモリーがないため、E メールを作成できません。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "開いているアプリケーションが多すぎる可能性があります。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "使用されていないアプリケーションをすべて閉じ、次に、Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI アクセスは拒否されます。",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Messaging Application Programming Interface (MAPI) アクセスが使用可能に設定されていないか、ご使用の E メール・アプリケーションでサポートされていない可能性があります。 MAPI は、Web クライアントとご使用の E メール・アプリケーションの間の通信を使用可能にするために使用されるメッセージング・プロトコルです。",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "システム管理者に連絡してください。",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "E メール・アプリケーションで MAPI アクセスがセットアップされていること、およびアプリケーションが正しく構成されていることを確認してください。 問題が解決しない場合は、IBM ソフトウェア・サポートにお問い合わせください。",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "添付またはアイテムへのリンクを作成できません。",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "開いている Web ブラウザー・セッションが多すぎる可能性があります。",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "使用されていない Web ブラウザー・セッションをすべて閉じてください。 次に、Web クライアントからドキュメントを送信し直してください。 問題が解決しない場合は、システム管理者に連絡してください。",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E メールを送信できません。",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "送信する添付が多すぎる可能性があります。",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "選択するファイルを少なくしてください。 次に、Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E メールを送信できません。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "E メールの送信先の受信者が多すぎる可能性があります。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "E メールの送信先の受信者の数を減らしてください。",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "添付ファイルを作成できません。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "添付が作成される前にいくつかの必要な一時ファイルが削除された可能性があります。 このエラーは、E メールが送信される前にブラウザー・キャッシュが消去された場合に発生することがあります。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "添付ファイルを作成できません。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "添付が作成される前にいくつかの必要な一時ファイルが削除された可能性があります。 このエラーは、E メールが送信される前にブラウザー・キャッシュが消去された場合に発生することがあります。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "E メール・アプリケーションが添付を作成できません。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "指定された受信者に E メールを送信できません。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "受信者がアドレス帳に存在しない可能性があります。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "受信者の名前を確認し、ドキュメントを再送信してください。",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "指定された受信者に E メールを送信できません。",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E メール・アドレスが正しいフォーマットで指定されていない可能性があります。",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "有効な E メール・アドレスを入力したことを確認して、ドキュメントを再送信してください。",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_NO_MESSAGES_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E メールを送信できません。",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E メール本文が長すぎる可能性があります。",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "本文を短くして、E メールを再送信してください。",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E メールを作成できません。",
		email_applet_MAPI_INVALID_SESSION_explanation: "E メール・クライアントが、E メールの作成を試行したときに失敗した可能性があります。",
		email_applet_MAPI_INVALID_SESSION_userResponse: "E メール・クライアントを再始動し、Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E メールが正しく作成されていない可能性があります。",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "指定された受信者に E メールを送信できません。",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E メール・アドレスが正しいフォーマットで指定されていない可能性があります。",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "有効な E メール・アドレスを入力したことを確認して、ドキュメントを再送信してください。",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E メール・クライアントが要求されたアクションを実行できません。",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E メール・アプリケーションが予期しないエラーを返しました。",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Web クライアントからドキュメントを送信し直してください。",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "プロパティーの 1 つに必要な数の値がありません。",
		error_property_cardinality_explanation: "一部のプロパティーに値の最小数と最大数が指定されています。",
		error_property_cardinality_userResponse: "吹き出しヘルプを使用して、値の最小数が指定されているプロパティーを判別してください。 次に、最小数またはそれより多くの値を指定し、再試行してください。",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "ファイル名は必須です。",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "ファイル名を指定して、再試行してください。",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} プラグインにエラーがあります。",
		plugin_error_explanation: "${0} プラグインの JavaScript の評価中にエラーが発生しました。 Web クライアントの使用を続行した場合は、追加のエラーが発生する可能性があります。",
		plugin_error_userResponse: "システム管理者に連絡してください。",
		plugin_error_adminResponse: "プラグインに問題があります。この問題は、プラグインのプロバイダーが解決する必要があります。 プラグインの問題が解決されるまで、プラグインを Web クライアント構成から削除することをお勧めします。",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "エントリー・テンプレートを開くことができません。",
		open_old_format_entry_template_error_explanation: "エントリー・テンプレートが、Web クライアントでサポートされていない古い形式を使用しています。",
		open_old_format_entry_template_error_userResponse: "エントリー・テンプレートの更新をシステム管理者に依頼してください。",
		open_old_format_entry_template_error_adminResponse: "Application Engine または Workplace XT の Entry Template Designer を使用して、エントリー・テンプレートの更新されたバージョンを保存してください。",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "エントリー・テンプレートを開くことができません。",
		open_custom_object_entry_template_error_explanation: "Web クライアントは、カスタム・オブジェクトのエントリー・テンプレート・タイプをサポートしていません。",
		open_custom_object_entry_template_error_userResponse: "別のエントリー・テンプレートを開きます。",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "eforms オブジェクトを開くことができません。",
		open_forms_object_error_explanation: "Web クライアントは、「フォーム・テンプレート」、「フォーム・データ」、「ドキュメント・ポリシー」、および「ワークフロー・ポリシー」の eforms オブジェクト・タイプをサポートしていません。",
		open_forms_object_error_userResponse: "別のドキュメントを開いてください。",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "${0} エントリー・テンプレートは使用できません。",
		entry_template_folder_restricted_error_explanation: "このエントリー・テンプレートはアイテムを ${1} フォルダーに追加しますが、アイテムをそのフォルダーに追加するための適切な権限が付与されていません。",
		entry_template_folder_restricted_error_userResponse: "別のエントリー・テンプレートを選択するか、アイテムを ${1} フォルダーに追加するための適切な権限を付与するように、システム管理者に依頼してください。",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "フォルダー名",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "エントリー・テンプレートを開くことができません。",
		open_records_entry_template_error_explanation: "Web クライアントは、レコードとして宣言エントリー・テンプレート・タイプをサポートしていません。",
		open_records_entry_template_error_userResponse: "別のエントリー・テンプレートを開きます。",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "ワークフローを開くことができません。",
		open_workflow_error_explanation: "Web クライアントは、ワークフローのオープンをサポートしていません。",
		open_workflow_error_userResponse: "別のドキュメントを開いてください。",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "ドキュメントを開くことができません。",
		viewer_unable_to_view_error_explanation: "このタイプのドキュメント用に構成されたビューアーがないか、または構成されたビューアーにシステムとの互換性がありません。",
		viewer_unable_to_view_error_userResponse: "このタイプのドキュメント用にビューアーを構成するようにシステム管理者に依頼して、構成されたビューアーがユーザーのシステムで稼働することを確認してください。",
		viewer_unable_to_view_error_adminResponse: "管理ツールを使用して、このタイプのドキュメント用にビューアーを構成してください。",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "検索を開くことができません。",
		search_cannot_open_error_explanation: "検索機能は、このデスクトップ用に構成されていません。",
		search_cannot_open_error_userResponse: "システム管理者に、検索機能が組み込まれているデスクトップに対するアクセス権限を取得できるかどうか、またはこのデスクトップを更新して検索機能を組み込むことができるかどうかを問い合わせてください。",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "ドキュメントがロードされませんでした。",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional ビューアーはドキュメントを開くことができませんでした。",
		viewer_document_load_failed_error_userResponse: "詳しくは、ビューアーに表示されているエラー・メッセージを参照してください。",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "ドキュメントは表示できません。",
		viewer_session_expired_explanation: "ドキュメント・コンテンツを取得できません。",
		viewer_session_expired_userResponse: "もう一度ログインしてください。 問題が解決しない場合は、アプリケーション・サーバーが稼働していない可能性があります。 IBM Content Navigator エラー・ログを確認するか、サーバーを再始動するように、システム管理者に依頼してください。",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "ドキュメントは表示できません。",
		ajaxViewer_getPage_failed_explanation: "ページ・コンテンツの取得中に、Ajax ビューアーがエラー応答を受け取りました。 アプリケーション・サーバーが稼働していない可能性があります。",
		ajaxViewer_getPage_failed_userResponse: "Web ブラウザーを閉じてログインし直してください。 問題が解決しない場合は、Web アプリケーション・サーバーのログ・ファイルを確認するか、サーバーを再始動するように、システム管理者に依頼してください。",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) がワークステーション上に見つかりませんでした。",
		viewer_java_plugin_not_found_explanation: "プラグインが見つからなかったか、正しいバージョンの JRE がインストールされていません。",
		viewer_java_plugin_not_found_userResponse: "JRE がインストールされていることを確認してください。 例えば、コマンド・プロンプトで次のコマンドを入力します。Java -version。 JRE がインストールされていないか、正しくないバージョン・レベルでインストールされている場合は、JRE の適切なバージョンをインストールしてください。 サポートされるバージョンのリストは、IBM ソフトウェア・サポート・サイト上の「<i>Hardware and software prerequisites for IBM Content Navigator</i>」というドキュメントに記載されています。",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "ドキュメントを Web ブラウザーに表示できません。",
		viewer_pdf_plugin_not_found_explanation: "PDF ドキュメントを Web ブラウザーに表示するために使用されるプラグインが見つかりませんでした。",
		viewer_pdf_plugin_not_found_userResponse: "PDF ファイルは、ビューアー・ウィンドウに表示される代わりにワークステーションにダウンロードされます。",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "次のアイテムをリポジトリーに追加できません: ${0}。",
		add_document_single_item_error_explanation: "このエラーは、以下のいずれかの理由で発生することがあります。" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>移動または削除されたドキュメントを追加しようとしている。</li>" + "<li>名前が変更されたドキュメントを追加しようとしている。</li>" + "<li>破損したドキュメントを追加しようとしている。</li>" + "<li>別のアプリケーションで開いているドキュメントを追加しようとしている。</li>" + "<li>リポジトリーにフォルダーを追加しようとしている。</li>" + "<li>ドキュメントにアクセスするためのオペレーティング・システム上の適切な権限がない。</li>" + "</ul>",
		add_document_single_item_error_userResponse: "以下に示す適切な処置を行って、問題を解決してください。" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>ドキュメントが移動されている場合、またはドキュメントの名前が変更されている場合は、ファイル・システム上でそのドキュメントを検索してから、もう一度追加してください。</li>" + "<li>ドキュメントを別のアプリケーションで開いている場合は、そのドキュメントを閉じてから、もう一度追加してください。</li>" + "</ul>" + "<br>リポジトリーにフォルダーを追加することはできません。",
		add_document_single_item_error_0: "失敗したアイテム",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "次の ${0} 個のアイテムをリポジトリーに追加できません: ${1}",
		add_document_multiple_items_error_explanation: "これらのアイテムのいずれかに問題があるため、これらのアイテムをリポジトリーに追加できません。 このエラーは、以下のいずれかの理由で発生することがあります。" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>移動または削除されたドキュメントを追加しようとしている。</li>" + "<li>名前が変更されたドキュメントを追加しようとしている。</li>" + "<li>破損したドキュメントを追加しようとしている。</li>" + "<li>別のアプリケーションで開いているドキュメントを追加しようとしている。</li>" + "<li>リポジトリーにフォルダーを追加しようとしている。</li>" + "<li>ドキュメントにアクセスするためのオペレーティング・システム上の適切な権限がない。</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "以下に示す適切な処置を行って、問題を解決してください。" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>ドキュメントが移動されている場合、またはドキュメントの名前が変更されている場合は、ファイル・システム上でそのドキュメントを検索してから、もう一度アイテムを追加してください。</li>" + "<li>ドキュメントを別のアプリケーションで開いている場合は、そのドキュメントを閉じてから、もう一度アイテムを追加してください。</li>" + "<li>ドキュメントが削除されているか破損している場合は、アイテムの選択を解除してから、残りのアイテムをもう一度追加してください。</li>" + "</ul>" + "<br>リポジトリーにフォルダーを追加することはできません。",
		add_document_multiple_items_error_0: "アイテム数",
		add_document_multiple_items_error_1: "失敗したアイテム",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "このロケーションからのアイテムの追加や削除はできません。",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "eforms オブジェクトを開くことができません。",
		open_forms_work_object_error_explanation: "Web クライアントは、「ワークフロー・ポリシー」eforms オブジェクト・タイプをサポートしていません。。",
		open_forms_work_object_error_userResponse: "別のドキュメントを開いてください。",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "ドキュメントを開くことができません。",
		viewer_privilege_to_view_error_explanation: "ドキュメントを表示するための該当の特権がありません。",
		viewer_privilege_to_view_error_userResponse: "ドキュメントを表示するための該当の権限の付与をドキュメントの所有者、またはシステム管理者に依頼してください。",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "アイテムをリポジトリーに追加できません。",
		add_document_too_many_items_error_explanation: "同時に追加できるアイテムの最大数は ${0} です。 ${1} アイテムを追加しようとしています。",
		add_document_too_many_items_error_userResponse: "リストからいくつかのアイテムを削除して、再度アイテムを追加してみてください。 システム管理者に連絡して、このデスクトップに同時に追加できるドキュメントの最大数を増やしてもらうこともできます。",
		add_document_too_many_items_error_0: "最大アイテム数",
		add_document_too_many_items_error_1: "アイテム数",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "次の URL: ${0} で Web クライアントへの接続を確立することができません。",
		http_ltpa_expired_explanation: "参照セッションに関連付けられている LTPA キーは期限切れです。",
		http_ltpa_expired_userResponse: "Web ブラウザーを再始動してログインし直してください。 問題が解決しない場合は、次のエラーをシステム管理者に報告してください: ${1}。",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "ドキュメントを ${0} フォルダーに追加できません。",
		dnd_no_privilege_error_explanation: "フォルダーに設定されている権限により、いずれのドキュメントもフォルダーに追加できません。",
		dnd_no_privilege_error_userResponse: "異なりフォルダーにドキュメントを追加してください。",
		dnd_no_privilege_error_0: "アイテム名",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "アイテムを変更できません。",
		modify_document_too_many_items_error_explanation: "一度に変更できる最大アイテム数は ${0} 個です。 ${1} 個のアイテムを変更しようとしています。",
		modify_document_too_many_items_error_userResponse: "選択アイテムを減らして、アイテムの変更を再試行してください。 システム管理者に連絡して、このデスクトップから一度に変更できるアイテムの最大数を増やしてもらうこともできます。",
		modify_document_too_many_items_error_0: "最大アイテム数",
		modify_document_too_many_items_error_1: "アイテム数",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "${0} クラスを使用できません。",
		add_document_multiple_unique_values_error_explanation: "${0} クラスには、ドキュメントごとに一意の値が必要な 1 つ以上のプロパティーが含まれています。 複数のドキュメントを追加すると、すべてのドキュメントで同じ値が使用されます。",
		add_document_multiple_unique_values_error_userResponse: "別のクラスを選択するか、ドキュメントを個別に追加してください。",
		add_document_multiple_unique_values_error_0: "クラス表示名",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "${0} エントリー・テンプレートは使用できません。",
		add_document_multiple_unique_values_entry_template_error_explanation: "${0} エントリー・テンプレートでは、ドキュメントを ${1} クラスに追加する必要があります。 しかし、${1} クラスには、ドキュメントごとに一意の値が必要な 1 つ以上のプロパティーが含まれています。 複数のドキュメントを追加すると、すべてのドキュメントで同じ値が使用されます。",
		add_document_multiple_unique_values_entry_template_error_userResponse: "別のエントリー・テンプレートを選択するか、ドキュメントを個別に追加してください。",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "クラス表示名",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "${0} エントリー・テンプレートは使用できません。",
		entry_template_class_restricted_error_explanation: "このエントリー・テンプレートは ${1} クラスを使用してアイテムを追加しますが、このクラスを使用してアイテムを追加するための適切な権限がありません。",
		entry_template_class_restricted_error_userResponse: "別のエントリー・テンプレートを選択するか、${1} クラスを使用してアイテムを追加するための適切な権限を付与するように、システム管理者に依頼してください。",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "クラス表示名",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "ワーク・アイテムを別のユーザーに再割り当てできません。",
		process_reassign_error_explanation: "このアクションは、ワークフローにより禁止されています。",
		process_reassign_error_userResponse: "ワーク・アイテムを開いて、ワーク・アイテム内の現在のステップを完了できます。  この問題について詳しくは、アイテムの所有者に問い合わせて、ワーク・アイテムを再割り当てできることを確認してください。",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "次のカスタム・アクションをロードできません: ${0}。",
		customaction_loadurl_error_explanation: "カスタム・アクションがアクセス可能な場所にありません。 カスタム・アクションの現在の URL は ${1} です。",
		customaction_loadurl_error_userResponse: "カスタム・アクションをアクセス可能な場所に移動するよう、管理者に依頼してください。",
		customaction_loadurl_error_adminResponse: "カスタム・アクションを定義する JSP ファイルが、eClient Web アプリケーションまたは IBM Content Navigator Web アプリケーションの一部として提供されている必要があります。",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "次の機能が見つかりません: ${0}。",
		feature_invalid_explanation: "この問題は、指定されたデスクトップでその機能を使用できない場合、または機能名のスペルが正しくない場合に発生する可能性があります。",
		feature_invalid_userResponse: "「OK」をクリックすると、このデスクトップのデフォルトの機能にリダイレクトされます。 システム管理者に問い合わせて、この問題を報告してください。",
		feature_invalid_adminResponse: "デスクトップでこの機能を使用できる場合は、管理ツールでデスクトップの構成を更新してください。 機能がデスクトップに含まれていないか、スペルが正しくない場合は、この機能の URL を作成したアプリケーション開発者と協力して、URL を更新してください。",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "${0} 検索を開くことができません。",
		search_unsupportedTeamspaceSearch_error_explanation: "この検索を開くには、チームスペース内でなければなりません。",
		search_unsupportedTeamspaceSearch_error_userResponse: "別の検索を選択してください。",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "次のファイルをインポートできません: ${0}。",
		wrong_import_file_type_error_explanation: "このファイルはプロパティー・ファイルでなければなりません。",
		wrong_import_file_type_error_userResponse: "管理ツールからエクスポートしたプロパティー・ファイルを選択してください。",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "${0} リポジトリーが ${1} デスクトップに見つかりませんでした。",
		browse_repository_not_found_error_explanation: "URL パラメーターでリポジトリーが指定されている場合は、リポジトリーがデスクトップに存在し、かつ参照機能が有効になっている必要があります。",
		browse_repository_not_found_error_userResponse: "URL で指定されたリポジトリー ID が正しいこと、リポジトリーが ${1} デスクトップに追加されていること、およびリポジトリーで参照機能が有効になっていることを確認してください。",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "${0} リポジトリーで ${1} デスクトップの参照機能が有効になっていません。",
		browse_repository_not_enabled_error_explanation: "URL パラメーターでリポジトリーが指定されている場合は、そのリポジトリーで参照機能が有効になっている必要があります。",
		browse_repository_not_enabled_error_userResponse: "${1} デスクトップの ${0} リポジトリーの参照機能を有効にしてください。",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "リンクに無効な条件が含まれているため、検索を完了できません。",
		invalid_xt_stored_search_criteria_error_explanation: "次の値が無効です: ${0}。",
		invalid_xt_stored_search_criteria_error_userResponse: "更新されたリンクを提供するように、システム管理者に依頼してください。",
		invalid_xt_stored_search_criteria_error_adminResponse: "URL 内の適切な名前と値のペアを編集します。 プロパティーの有効な値が不明な場合は、FileNet Workplace XT Search Designer で保管済み検索を開き、有効な値を判別してください。",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "リポジトリー間検索を開くことができません。",
		unified_search_invalid_fixed_value_error_explanation: "リポジトリー間検索に無効な条件が含まれています。 この問題は、条件に、マッピング内の他のプロパティーとの互換性がない固定値が含まれている場合に発生することがあります。 例えば、この問題は、固定値が文字列であるのに対して、マッピング内の他のプロパティーが整数である場合に発生することがあります。",
		unified_search_invalid_fixed_value_error_userResponse: "検索を編集するための適切な権限がある場合は、無効な条件を削除し、検索をもう一度保存します。 検索を編集するための適切な権限が付与されていない場合は、検索の所有者またはシステム管理者に、検索を再度保存するように依頼してください。",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "要求を完了できません。",
		launch_action_invalid_json_error_explanation: "Web クライアントに渡されたデータが無効です。",
		launch_action_invalid_json_error_userResponse: "この問題が発生したときに使用していたアプリケーションをシステム管理者に報告してください。",
		launch_action_invalid_json_error_adminResponse: "クライアント・アプリケーションは、有効な JSON オブジェクトを Web クライアントに送信しませんでした。 支援が必要な場合は、IBM ソフトウェア・サポートに連絡してください。",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "要求を完了できません。",
		launch_action_not_found_error_explanation: "${0} アクションが ${1} デスクトップ上のどのメニューでも構成されていません。",
		launch_action_not_found_error_userResponse: "${0} アクションを含むメニューを使用するように ${1} デスクトップを構成するか、${0} アクションを含むデスクトップにあなたを割り当てるように、システム管理者に依頼してください。",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "要求を完了できません。",
		launch_action_repository_not_found_error_explanation: "${0} リポジトリーが ${1} デスクトップに関連付けられていません。",
		launch_action_repository_not_found_error_userResponse: "${0} リポジトリーを ${1} デスクトップに関連付けるか、${0} リポジトリーを含むデスクトップにあなたを割り当てるように、システム管理者に依頼してください。",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "チームスペースは開けません。",
		teamspace_cannot_open_error_explanation: "このデスクトップにはチームスペース機能が構成されていません。",
		teamspace_cannot_open_error_userResponse: "システム管理者に、チームスペース機能が組み込まれたデスクトップに対するアクセス権限を取得できるか、またはチームスペース機能を組み込むようにこのデスクトップを更新できるか問い合わせてください。",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "改訂されたコンテンツのチェックイン時にエラーが発生しました。",
		viewer_redaction_checkin_failed_explanation: "改訂されたコンテンツのチェックイン中に、ビューアーがエラー応答を受け取りました。",
		viewer_redaction_checkin_failed_userResponse: "Web アプリケーション・サーバーのログ・ファイルを確認するように、システム管理者に依頼してください。",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "このリポジトリーにはドキュメントを追加できません。",
		add_document_odserver_odwek_version_od_error_explanation: "IBM Content Manager OnDemand サーバーまたは ODWEK の現在のバージョンは、Content Manager OnDemand リポジトリーへのドキュメントの追加をサポートするために必要な最小レベルになっていません。",
		add_document_odserver_odwek_version_od_error_userResponse: "Content Manager OnDemand リポジトリーへのドキュメントの追加をサポートするために必要な Content Manager OnDemand Server および ODWEK のバージョンを確認するように、管理者に依頼してください。",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "アイテムをリポジトリーに追加できません。",
		add_document_too_many_items_od_error_explanation: "IBM Content Manager OnDemand リポジトリーでは、一度に 1 つのアイテムだけを追加できます。",
		add_document_too_many_items_od_error_userResponse: "リストからいくつかのアイテムを削除して、再度アイテムを、一度に 1 つのアイテムずつ追加してみてください。",
		add_document_too_many_items_od_error_0: "最大アイテム数",
		add_document_too_many_items_od_error_1: "アイテム数",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "アイテムをリポジトリーに追加できません。",
		add_document_filesize_empty_od_error_explanation: "空のファイルを IBM Content Manager OnDemand リポジトリーに追加することはできません。",
		add_document_filesize_empty_od_error_userResponse: "ファイルにコンテンツを追加しファイルの追加を再試行するか、または別のアイテムを追加してください。",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "リポジトリー間検索を開くことができません。",
		unified_search_repository_not_found_error_explanation: "リポジトリー間検索に、1 つ以上の無効リポジトリーが含まれています。 この問題は、検索に含まれているリポジトリーがアプリケーションから削除されたか、現在のデスクトップから削除された場合に発生します。",
		unified_search_repository_not_found_error_userResponse: "検索を編集するための適切な権限が付与されている場合は、検索を再度保存してください。 検索を保存すると、Web クライアントが無効なリポジトリーを検索から削除します。 検索を編集するための適切な権限が付与されていない場合は、検索の所有者またはシステム管理者に、検索を再度保存するように依頼してください。",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "新規ドキュメントを作成できません。",
		edit_document_using_office_online_error: "ドキュメントを開くことができません。",
		edit_document_using_office_online_error_explanation: "Microsoft Office Online Server の URL が構成されていません。",
		edit_document_using_office_online_error_userResponse: "Office Online を使用するためには、まず管理者がリポジトリー上の Office Online Server を有効にし、Microsoft Office Online Server の URL を指定しておく必要があります。",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "このドキュメントは Microsoft Office Online で開くことができません。",
		edit_document_using_office_online_error_userResponse1: "MS Office Online Server 統合を更新するように管理者に依頼してください。<br><br> ユーザーが Microsoft Office Online からこのドキュメントにアクセスする必要がある場合は、リポジトリーの「編集サービス」ページに移動し、Office Online サポート用に変更するクラスのリストにこのクラスを含めるように MS Office Online Server 統合を更新してください。 ",		
		browser_not_support_this_viewer: "構成されたビューアーはご使用のブラウザーと互換性がありません。",
		browser_not_support_this_viewer_explanation: "${0} はこのブラウザーでサポートされていません。",
		browser_not_support_this_viewer_userResponse: "別のビューアーでドキュメントを開いてください。 サポート対象のブラウザーのリストは、IBM ソフトウェア・サポート・サイトの「<i>Hardware and software prerequisites for IBM Content Navigator</i>」というドキュメントに記載されています。",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "ワークフロー情報",
		process_information_info_text: "選択したアイテムは、現在、次のワークフローで実行中です。",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "等しい",
		operator_NOTEQUAL: "等しくない",
		operator_LIKE: "LIKE",
		operator_STARTSWITH: "次で始まる",
		operator_ENDSWITH: "次で終了する",
		operator_NOTLIKE: "NOT LIKE",
		operator_NULL: "空である",
		operator_NOTNULL: "空ではない",
		operator_LESS: "より小さい",
		operator_LESSOREQUAL: "以下",
		operator_GREATER: "より大きい",
		operator_GREATEROREQUAL: "以上",
		operator_BETWEEN: "次の範囲",
		operator_NOTBETWEEN: "次の範囲外",
		operator_IN: "すべてを含む",
		operator_INANY: "いずれかを含む",
		operator_NOTIN: "すべてを除外",
		operator_CONTAINS: "次を含む",

		/* SearchForm widget */
		search_button_tooltip: "条件に一致するドキュメントを検索します。",
		reset_button_tooltip: "検索をリセットして、管理者によって設定されたデフォルト値に戻します。",
		clear_button_tooltip: "検索に対して入力した値をすべて削除します。",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "検索の選択",
		append_to_search: "検索に追加",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "新規検索",
		new_unified_search: "新規リポジトリー間検索",
		searh_name_contains: "検索名の内容",
		keep_search_criteria_expanded: "検索条件を開いたままにする",
		showing_results: "次の結果を表示:",
		open_in_new_window: "新規ウィンドウで開く",
		open_in_new_tab: "新規タブで開く",
		close_tab: "タブを閉じる",
		add_repository: "リポジトリーの追加",
		edit_repository: "リポジトリーの編集",
		remove_repository: "削除",
		search_scope: "検索スコープ",
		search_class_template: "クラス",
		object_type_version: "オブジェクトのタイプとバージョン",
		not_applicable: "適用外",
		unified_search_including_subfolders: " (サブフォルダーを含む)",
		unified_search_dialog_intro_text: "検索に含めるリポジトリーと検索、またはクラスを選択してください。",
		unified_search_class_or_template: "クラスまたはテンプレート",

		select_object_fieldset_legend: "添付するアイテムの検索方法:",
		select_object_create_new_search: "新規検索",
		select_object_search_template: "既存の検索",

		search_criteria: "検索条件:",
		search_criteria_no_colon: "検索条件",
		search_in_multiple: "検索場所 (${0}):",
		search_location_including_subfolders: "${0} (サブフォルダーを含める)",
		search_class: "クラス:",
		search_class_multiple: "クラス (${0}):",
		search_class_including_subclasses: "${0} (サブクラスを含める)",
		search_class_all_pseudo: "すべて",
		search_results: "検索結果",
		select_operator: "演算子の選択",
		ending_value: "${0} プロパティーの終了値は次のとおりです。",
		search_options: "検索オプション:",
		search_version: "バージョン:",
		search_released_version: "リリース済みバージョン",
		search_current_version: "現在のバージョン",
		search_all_versions: "すべてのバージョン",
		search_file_type_filter: "ファイル・タイプ・フィルター:",
		search_one_file_type: "1 個のファイル・タイプ",
		search_many_file_types: "${0} 個のファイル・タイプ",
		search_action_filter: "アクション・フィルター:",
		search_action_filter_hover_help: "ユーザーが特定のアクションを実行したファイルだけになるよう、結果を絞り込みます。<br/>例えば、2012 年 9 月 20 日に追加したドキュメントだけを検索することができます。",
		search_action_filter_enabled: "アクション・フィルターは有効です",
		search_enable: "有効化",
		search_disable: "無効化",
		search_by: "担当者",
		search_added: "追加",
		search_modified: "変更",
		search_checked_out: "チェックアウト",
		search_date_operator_on: "次の日付",
		search_date_operator_not_on: "次の日付以外",
		search_date_operator_before: "次の日付より前",
		search_date_operator_after: "次の日付より後",
		search_version_hover_help_p8: "リリース済みバージョンは、すべてのユーザーが使用できます。 現在のバージョンのドキュメントは、1 人以上のユーザーがそのドキュメントを編集していることを意味します。",
		search_version_hover_help_cm: "現在のバージョンとは、そのアイテムの最新バージョンのことです。",
		search_using: "以下の条件に一致するアイテムを検索:",
		search_property_and_text_criteria: "プロパティー値とテキスト条件の両方",
		search_property_or_text_criteria: "プロパティー値またはテキスト条件のいずれか",
		search_property_and_text: "プロパティーとテキスト条件の両方",
		search_property_or_text: "プロパティーまたはテキスト条件のいずれか",
		search_property_options: "プロパティー・オプション",
		search_property_option_match_all: "すべてのプロパティー",
		search_property_option_match_any: "プロパティーのいずれか",
		search_property_option_match_all_summary: "すべてに一致",
		search_property_option_match_any_summary: "いずれかに一致",
		search_total_count_type_total: "合計",
		search_total_count_type_atleast: "最小",
		search_content_size_filter: "コンテンツ・サイズ・フィルター",
		search_content_size_filter_any: "任意のコンテンツ・サイズ",

		/* Search work options */
		search_work_filter: "ワーク・アイテム・フィルター:",
		search_work_filter_hover_help: "ワークフロー内のアイテムのみが含まれるように、結果を絞り込みます。 例えば、アクティブなワーク・アイテムのみが含まれるように、結果を絞り込むことができます。<br /><br />このオプションは、検索で返されるアイテムのすべてのバージョンを表示する場合には適用されません。",
		search_work_filter_enabled: "ワーク・アイテム・フィルターが有効",
		search_work_filter_status: "ステータス:",
		search_work_filter_step: "ステップ:",
		search_work_filter_owner: "所有者:",
		search_work_filter_status_all: "すべてのアイテム",
		search_work_filter_status_active: "アクティブなアイテム",
		search_work_filter_status_suspended: "中断されたアイテム",
		search_work_filter_process_all: "すべてのワークフロー",
		search_work_filter_step_all: "すべてのステップ",
		search_work_filter_owner_all: "すべてのユーザー",
		search_work_filter_step_error: "ステップ名が存在しません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "検索を完了するには、情報が必要です。 少なくとも 1 つの条件に値を入力してください。",
		search_insufficient_input_box: "検索を完了するには、情報が必要です。 テキスト検索条件を入力するか、メタデータ・テンプレートを選択してください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "追加情報なしに開かれたときに実行するように検索を構成できません。 少なくとも 1 つの条件に値を入力してください。",
		search_member_required: "この検索を特定のユーザーおよびグループと共有するには、この検索を共有するユーザーまたはグループを少なくとも 1 つ選択してください。",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "変更を保存せずに閉じますか?",
		search_prompt_close_all_without_save: "変更を保存せずにすべてのタブを閉じますか?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "以下のいずれかの検索条件タイプが、このリポジトリーに対して有効ではありません: ${0}。 Web クライアントで検索を実行するには、無効な条件を削除する必要があります。 検索を保存すると、無効な条件が削除されます。 検索を変更しない場合は、検索を閉じてください。",
		search_invalid_repository: "1 つ以上のリポジトリー",
		search_invalid_class: "1 つ以上のクラス",
		search_invalid_folder: "1 つ以上のフォルダー",
		search_invalid_file_type: "1 つ以上のファイル・タイプ",
		search_invalid_property: "1 つ以上のプロパティー",
		search_invalid_text_search: "テキスト検索条件",
		search_invalid_work: "ワーク・アイテムのフィルター条件",

		search_operator_pulldown_missing: "演算子が必要です。 ドロップダウン・メニューから演算子を選択してください。 演算子が何も表示されていない場合は、システム管理者に、管理ツールの<b>「検索」</b>タブですべての演算子が非表示になっていないか確認するよう依頼してください。 リポジトリー間検索の場合、相互にマップされたプロパティーに、共通する演算子がまったく含まれていないときは、ドロップダウン・メニューにいずれの演算子も含まれていないことがあります。",

		/*SearchBuilder */
		open_search_builder: "新規検索",
		document_type: "クラス",
		show_all_properties: "すべてのプロパティーを表示",
		text_search_label: "次の用語があるアイテムを検索:",
		text_search_place_holder: "用語および演算子の組み合わせを使用: * ? または \"完全一致マッチングの句\"",
		text_search_place_holder_box: "用語および演算子の組み合わせを使用: AND、OR、NOT、および \"完全一致マッチングの句\"",
		text_search_place_holder_cascade_proximity: "用語および演算子の組み合わせを使用: * または ?",
		text_search_place_holder_common: "用語と \"完全一致マッチングの句\" を組み合わせて使用",
		text_search_hover_help_p8: "アスタリスク (*) または疑問符 (?) をワイルドカード文字として使用します。 完全一致マッチングには、二重引用符 (\"\") を使用します。",
		text_search_hover_help_p8_only_crs: "アスタリスク (*) または疑問符 (?) をワイルドカード文字として使用します。 完全一致マッチングには、二重引用符 (\"\") を使用します。 複数の語句を指定すると、リポジトリー間検索は、それらのいずれかの語句が含まれるアイテムを返します。",
		text_search_hover_help_cm: "アスタリスク (*) または疑問符 (?) をワイルドカード文字として使用します。 完全一致マッチングには、二重引用符 (\"\") を使用します。 除外する語句の先頭には負符号 (-) を、含める語句の先頭には正符号 (+) を使用します。",
		text_search_hover_help_box: "すべての用語に一致させるには、用語と用語の間に AND を使用します。 いずれかの用語に一致させるには、用語と用語の間に OR を使用します。 完全一致マッチングには、二重引用符 (\"\") を使用します。 特定の用語を除外するには、その前に NOT を付けます。",
		text_search_hover_help_common: "完全一致マッチングには、二重引用符 (\"\") を使用します。 複数の語句を指定すると、リポジトリー間検索は、それらのすべての語句が含まれるアイテムを返します。",
		text_search_options: "テキスト・オプション:",
		text_search_options_hover_help: "ワイルドカード文字以外の演算子を使用する場合は、拡張演算子を選択します。",
		text_search_option_any: "いずれかの用語",
		text_search_option_all: "すべての用語",
		text_search_option_proximity: "近接する単語内:",
		text_search_option_none: "拡張演算子",
		text_search_option_authoring: "テキスト検索:",
		text_search_option_authoring_hover_help: "テキスト検索条件をユーザーに提供する方法を決定するオプションを選択します。 検索にテキスト検索条件を含めない場合、オプションを非表示にします。 これを含める場合、テキスト検索条件をユーザーが編集できるようにするか、必須にするか、または読み取り専用にすることができます。",
		text_search_option_hide: "条件を非表示",
		text_search_option_hide_hover_help: "検索にテキスト検索条件を含めない場合、または他のユーザーにテキスト検索条件の指定を許可しない場合は、このオプションを選択します。",
		text_search_option_in: "HTML/XML タグ ${0} 内",
		text_search_option_paragraph: "同じパラグラフ内",
		text_search_option_sentence: "同じセンテンス内",
		text_search_option_vql: "VQL 照会",
		text_search_option_none_hover_help: "除外する用語の前には - を付けます。",
		text_search_option_cascade_proximity_hover_help: "検索結果を、完全一致の語句が含まれない語の範囲に出現する用語に制限します。",

		box_search_metadata: "メタデータ:",
		box_search_select_template: "テンプレートの選択",
		box_search_no_templates: "使用可能なテンプレートがありません",
		box_text_search_options_search_within: "検索スコープ",
		box_text_search_options_search_within_everything: "すべて",
		box_text_search_options_search_within_file_content: "ドキュメントの内容",
		box_text_search_options_search_within_tags: "タグ",
		box_text_search_options_limit_to: "検索のみ:",

		add_property: "プロパティーの追加",
		edit_template: "検索の編集",
		save_search: "検索の保存",
		search_template_name: "名前:",
		search_template_desc: "説明:",
		auto_run: "開かれたときに検索を実行",
		show_in_tree: "フォルダー構造で検索を表示",
		show_in_tree_hover_help: "フォルダーに保存された検索は、デフォルトではコンテンツ・リストにのみ表示されます。 このオプションを選択すると、参照ビューのフォルダー・ツリーにも検索が表示されるようになります。  ただし、フォルダー・ツリーに検索が表示されるのは、検索をフォルダーに保存した場合のみです。",
		share_search_with: "検索を共有するユーザー:",
		remove_member: "${0} の削除",
		ok_button_label: "OK",
		save_template: "保存",
		save_template_title: "特定のアイテムを頻繁に検索する必要がある場合、検索条件を保存します。",
		remove_criterion: "削除",
		apply_button_label: "適用",
		empty_search_results_pane: "検索を実行して結果を表示します。",

		/*Search_in control   */
		folder_tree_repository_root_name: "リポジトリー全体",

		repository_already_selected: "${0} リポジトリーは既にリポジトリー間検索に含まれているため、この検索に追加できません。 <br/> リポジトリーをリポジトリー間検索に含めることができるのは 1 回のみです。 <br/>リポジトリー間検索に含める対象として異なるリポジトリーを選択してください。",

		repository_limit_reached: "${0} リポジトリーをリポジトリー間検索に追加できません。 検索に追加できるリポジトリーの最大数は ${1} 個です。",

		nomore_criteria_toappend: "マップされたプロパティーはすべて、検索条件に既に含まれています。 検索条件に追加されたプロパティーはありません。",
		nomore_criteria_toappend_regular: "すべてのプロパティーが既に検索条件に含まれています。 検索条件に追加されたプロパティーはありません。",

		/* OD Save Search dialog */
		reload_label: "再ロード",
		od_save_search_help_text: "検索の名前を入力するか、置換する既存の検索を選択してください",
		public_access_label: "他のユーザーによるこの検索の使用を許可する",
		od_delete_search_help_text: "削除する 1 つ以上の検索を選択してください。",
		delete_save_searches: "保存済みの検索を削除",

		/* Unified Search */
		unified_search_enable_text_search: "テキスト検索条件を含める",
		unified_search_text_search_enabled: "テキスト検索を含む",
		unified_search_mapping: "マッピング",
		unified_search_new_mapping: "新規マッピング",
		unified_search_mapping_name: "マッピング名",
		unified_search_mapping_dialog_instructions: "マップするプロパティーを選択してください。 一部のプロパティーは、異なるデータ型のプロパティーにマップできます。 例えば、文字列プロパティーを整数プロパティーにマップできます。 プロパティーを別のプロパティーにマップすると、それらのプロパティーがリポジトリー間検索で単一のプロパティーとして扱われます。",
		unified_search_filter_available_properties: "使用可能なプロパティーをフィルタリング",
		unified_search_available_properties: "使用可能なプロパティー",
		unified_search_mapped_properties: "マップされたプロパティー",
		unified_search_single_values: "単一値",
		unified_search_multiple_values: "複数値",
		unified_search_add_mapping: "マッピングの追加",
		unified_search_warn_remove_repository: "選択したリポジトリーは検索条件に使用されています。\nこのリポジトリーを削除すると、このリポジトリーを含むすべてのマッピングと検索条件が削除されます。\n\nリポジトリーを削除しますか?",
		unified_search_warn_update_repository_mappings: "このリポジトリーのプロパティー選択を変更すると、検索条件に影響します。\n\n検索条件に、削除するプロパティーが 1 つ以上含まれているマッピングが 1 つ以上含まれています。 削除するプロパティーが含まれているマッピングを削除する必要があります。 検索を実行するには、それらのマッピングが含まれる検索条件を削除することが必要です。\n\nリポジトリーのオプションを更新し、マッピングと検索条件を削除しますか?",
		unified_search_warn_update_repository_mappings_reset: "このリポジトリーのテキスト検索条件を含めると、リポジトリー間検索条件に影響します。\n\n検索を実行するには、プロパティーへのマッピングを含む検索条件をすべてクリアする必要があります。\n\nリポジトリー・オプションを更新して、検索条件をクリアしますか?",
		unified_search_warn_update_repository_text_criteria: "このリポジトリーのテキスト検索条件を削除すると、リポジトリー間検索条件に影響します。\n\n検索を実行するには、リポジトリー間検索条件からテキスト検索条件を削除する必要があります。\n\nリポジトリー・オプションを更新して、テキスト検索条件を削除しますか?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "このリポジトリーのテキスト検索条件を削除してプロパティー選択を変更すると、リポジトリー間検索条件に影響します。\n\n検索を実行するには、リポジトリー間検索条件からテキスト検索条件を削除する必要があります。 また、プロパティー検索条件に、削除するプロパティーが 1 つ以上含まれるマッピングが 1 つ以上含まれています。 削除するプロパティーが含まれているマッピングを削除する必要があります。 検索を実行するには、それらのマッピングが含まれるプロパティー検索条件を削除することが必要です。\n\nリポジトリーのオプションを更新し、テキスト検索条件、マッピング、およびプロパティー検索条件を削除しますか?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "このリポジトリーのテキスト検索条件を除外すると、リポジトリー間検索条件に影響します。\n\n検索を実行するには、プロパティーへのマッピングを含む検索条件をすべてクリアする必要があります。 検索を実行するには、リポジトリー間検索条件からテキスト検索条件を削除する必要があるかもしれません。\n\nリポジトリー・オプションを更新して検索条件をクリアしますか?",
		unified_search_warn_remove_mapping: "このマッピングを削除すると、検索条件に影響します。\n\n検索を実行するには、このマッピングを使用する検索条件を削除する必要があります。\n\nマッピングを更新して、テキスト検索条件を削除しますか?",
		unified_search_warn_update_mapping: "このマッピングに変更を加えると、検索条件に影響します。\n\n検索に無効な演算子や無効な値が含まれないようにするため、このマッピングを使用する検索条件をクリアする必要があります。\n\nマッピングを更新して検索条件をクリアしますか?",
		unified_search_warn_update_mapping_not_searchable: "このマッピングに変更を加えると、検索条件に影響します。\n\nマッピングされているプロパティーがすべて表示専用である場合、検索条件の中でそのマッピングを使用することはできません。 検索を実行するには、このマッピングを使用する検索条件を削除する必要があります。\n\nマッピングを更新して検索条件を削除しますか?",
		unified_search_warn_update_mapping_box_searchable: "このマッピングに変更を加えると、検索条件に影響します。\n\n検索条件には、既にこのマッピングが複数含まれており、${1} リポジトリーからの ${0} プロパティーを追加した場合、検索条件の中に ${0} プロパティーが含まれる回数が多すぎます。 検索を実行するには、このマッピングを使用する検索条件を削除する必要があります。\n\nマッピングを更新して検索条件を削除しますか?",
		unified_search_details: "リポジトリー間検索の詳細",
		unified_search_fixed_value_property: "固定値プロパティー",
		unified_search_required_property: "必須プロパティー",
		unified_search_display_only_property: "表示専用プロパティー",
		unified_search_missing_required_properities: "検索を保存または実行できません。<br/>次のプロパティーは必須プロパティーです:${0}。マッピングにこれらのプロパティーを含めて、これらのプロパティーと値を検索条件に追加する必要があります。",
		unified_search_property_repostory: "${0} (リポジトリー: ${1})",
		unified_search_builder_no_mappings: "検索を実行できません。<br/>プロパティー・マッピングを作成し、それを<b>結果表示</b>に含めることで、検索に結果が表示されるようにしてください。",
		unified_search_builder_insufficient_criteria_to_run: "検索を実行できません。<br/>検索条件には、次のリポジトリーのテキスト検索条件またはプロパティー値が含まれていません:${0}検索に含まれているどのリポジトリーについても、テキスト検索条件を入力するか、プロパティー・マッピングを作成し、それをプロパティー条件に含めてプロパティー値を指定する必要があります。",
		unified_search_builder_insufficient_criteria_to_save: "検索を保存できません。<br/>検索には、次のリポジトリーの検索条件が含まれていません:${0}検索に含まれているどのリポジトリーについても、次のオプションのいずれかを行う必要があります:<ol><li>プロパティー・マッピングを作成し、それをリポジトリー条件に含めてください。</li><li>テキスト検索条件を含むようにリポジトリーを変更し、プロパティー・マッピングを作成して、それを<b>結果表示</b>に含めてください。</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "検索を実行できません。<br/>検索に含まれているどのリポジトリーについても、少なくとも 1 つのプロパティー値を指定する必要があります。 例えば、以下のプロパティーの値を指定できます: ${0}",
		unified_search_runtime_insufficient_criteria_text: "検索を実行できません。<br/>テキスト検索条件が必要です。",
		unified_search_runtime_insufficient_criteria_text_or_properties: "検索を実行できません。<br/>検索に含まれているどのリポジトリーについても、少なくとも 1 つのプロパティー値を指定するか、またはテキスト検索条件を入力する必要があります。 例えば、以下のプロパティーの値を指定できます: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "検索を実行できません。<br/>テキスト検索条件が必要です。 検索に含まれているどのリポジトリーについても、少なくとも 1 つのプロパティー値を指定するか、またはテキスト検索条件を入力する必要があります。 例えば、以下のプロパティーの値を指定できます: ${0}",
		unified_search_invalid_criteria: "検索の実行を妨げる無効な条件が、検索に含まれています。<br/>無効な条件は削除されています。 ただし、検索を実行する前に検索への変更内容を保存する必要があります。 変更内容に保存しない場合は、検索を閉じてください。<br/><br/>次のアイテムが削除されたか、変更されました:${0}",
		unified_search_invalid_fixed_values: "検索を保存または実行できません。<br/>次の検索条件には無効な固定値が含まれています: ${0}。問題を解決するには、以下のいずれかのアクションを実行してください。<ul><li>無効な値が含まれている検索条件を削除する。</li><li>固定値が指定された IBM Content Manager OnDemand プロパティーを含むマッピングを編集して、そのプロパティーを削除する。</li><li>固定値が指定された IBM Content Manager OnDemand プロパティーを含むマッピングを編集して、すべてのプロパティー間の互換性を確保する。 マップできるプロパティーについて詳しくは、プロパティー・マッピング・ウィンドウ上部の概要テキストにある「詳細を表示」リンクを参照してください。</li></ul>",
		unified_search_cannot_add_properties: "この検索にプロパティーを追加することはできません。<br/>マッピングされているプロパティーで使用可能なものすべてが既に検索条件内にあり、プロパティーはそれぞれ 1 回のみ検索に追加可能です。",
		unified_search_mapping_not_viewable: "Box テンプレート・プロパティーは検索結果に表示できません。 このマッピングを列として追加する場合は、Box テンプレート・プロパティーでないプロパティーを少なくとも 1 つマップする必要があります。 例えば、別のリポジトリーからプロパティーを選択できます。",

		unified_search_returned_more: "少なくとも 1 つのリポジトリーにおいて、可能な最大結果数を超えました。",
		unified_search_partial_failure: "少なくとも 1 つのリポジトリーでエラーが発生しました。",
		unified_search_partial_failure_and_returned_more: "少なくとも 1 つのリポジトリーでエラーが発生し、少なくとも 1 つのリポジトリーにおいて可能な最大結果数を超えました。",
		unified_search_see_analysis: "結果分析を参照してください。",
		unified_search_analysis_intro_returned_more: "可能な最大結果数を超えたリポジトリーごとに、返される結果が少なくなるように検索条件を調整してください。 あるいは、リポジトリー間検索で可能な最大数よりも多くの結果を返すことが可能な単一リポジトリー検索を実行することもできます。",
		unified_search_analysis_intro_partial_failure: "リポジトリーによって返されたエラー情報を確認します。 必要に応じて、エラーを解決し、リポジトリー間検索を再実行してください。",
		unified_search_analysis_intro_partial_failure_and_returned_more: "エラーが発生したリポジトリーごとに、問題を解決して検索を再実行してください。<br/><br/>可能な最大結果数を超えたリポジトリーごとに、返される結果が少なくなるように検索条件を調整してください。 あるいは、リポジトリー間検索で可能な最大数よりも多くの結果を返すことが可能な単一リポジトリー検索を実行することもできます。",
		unified_search_results_found: "結果が見つかりました",
		unified_search_maximum_allowed: "可能な最大数",
		unified_search_maximum_exceeded: "最大を超えました",

		unified_search_mapping_rule_box: "このプロパティーをマッピングに追加することはできません。<p>${1} リポジトリーからの ${0} プロパティーは、既に別のマッピングに含まれており、このリポジトリーからの検索可能プロパティーは、1 回の検索で 1 つのマッピングにのみ含めることが可能です。<br/>マッピングに追加する対象として異なるプロパティーを選してください。</p>",
		unified_search_mapping_rule_repository: "プロパティーをマッピングに追加できません。<br/>このマッピングには、${0} リポジトリーのプロパティーが既に含まれています。 マッピングに含めることができるプロパティーは、1 つのリポジトリーにつき 1 つだけです。<br/>プロパティーの追加元として別のリポジトリーを選択するか、選択したプロパティーの新規マッピングを作成してください。",
		unified_search_mapping_rule_data_type: "プロパティーをマッピングに追加できません。<br/>${0} プロパティーは、${1} プロパティーにマップできません。 マッピングの対象として別のプロパティーを選択するか、選択したプロパティーの新規マッピングを作成してください。<br/>マップできるプロパティーについて詳しくは、このウィンドウの上部にある概要テキストの「詳細を表示」リンクを参照してください。",
		unified_search_mapping_rule_cardinality: "プロパティーをマッピングに追加できません。<br/>マッピング内のすべてのプロパティーは、単一値または複数値のいずれかをサポートしていなければなりません。 選択したプロパティーは ${0} をサポートしており、マッピング内のプロパティーは ${1} をサポートしています。<br/>マッピングに追加する対象として別のプロパティーを選択するか、選択したプロパティーの新規マッピングを作成してください。",
		unified_search_mapping_rule_fixed_value: "プロパティーをマッピングに追加できません。<br/>このマッピングには、固定値のプロパティーが既に含まれています。 マッピングに含めることができる固定値のプロパティーは 1 つだけです。<br/>マッピングに追加する対象として別のプロパティーを選択するか、選択したプロパティーの新規マッピングを作成してください。",
		unified_search_mapping_rule_child_component: "プロパティーをマッピングに追加できません。<br/>子コンポーネントを持つプロパティーを他のプロパティーにマップすることはできません。 このプロパティーを基準として検索できるようにするには、選択したプロパティーの新規マッピングを作成してください。",
		unified_search_mapping_rule_operator_intersection: "プロパティーをマッピングに追加できません。<br/>マッピング内のすべてのプロパティーには、1 つ以上の共通する演算子が含まれていなければなりません。 しかし、${0} プロパティーには、マッピング内の他のプロパティーと共通する演算子が含まれていません。<br/>可能な場合は、別のプロパティーを選択してください。 選択したプロパティーを含める必要がある場合は、システム管理者と協力して、そのプロパティーに関連付けられた演算子を編集してください。",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "詳細設定",
		advanced_search_options_intro: "詳細条件オプションを設定します。",
		advanced_search_options_editable: "編集可能",
		advanced_search_options_readonly: "読み取り専用",
		advanced_search_options_required: "必須",
		advanced_search_options_hidden: "非表示",
		advanced_search_options_property_editable:"プロパティー:",
		advanced_search_options_operators:"演算子:",
		advanced_search_options_use_all:"すべて使用",
		advanced_search_options_use_selected:"選択したものを使用",
		advanced_search_options_operators_filtered: "フィルターされた演算子",
		// Data types in lowercase
		data_type_boolean: "boolean",
		data_type_date: "date",
		data_type_time: "time",
		data_type_timestamp: "タイム・スタンプ",
		data_type_decimal: "10 進数値",
		data_type_double: "浮動小数点数",
		data_type_short: "integer",
		data_type_integer: "integer",
		data_type_long: "integer",
		data_type_string: "テキスト文字列",
		data_type_string_alpha: "英字文字列",
		data_type_string_alphanum: "英数字文字列",
		data_type_string_ext: "拡張英数字文字列",
		data_type_string_num: "数値文字列",
		data_type_binary: "バイナリー",
		data_type_object: "オブジェクト",
		data_type_guid: "グローバル一意 ID",
		data_type_user: "ユーザー",
		data_type_child_component: "子コンポーネント",

		/* Print Dialog */
		print_title: "印刷",
		print_message: "印刷中: ${0}",
		print_print_button: "印刷",
		print_clean_margins_button: "すべてを 0 に設定",
		print_type: "プリンター・タイプ:",
		print_printer_server_options: "サーバー印刷オプション",
		print_printer_properties: "プリンター・プロパティー",
		print_printer_fax_properties: "FAX プロパティー",
		print_printer_name: "プリンター名:",
		print_fax_recipient: "受信者",
		print_fax_sender: "送信者",
		print_copies: "印刷部数:",
		print_local_orientation: "用紙の向き",
		print_local_orientation_landscape: "横長",
		print_local_orientation_portrait: "縦長",
		print_local_margins: "余白",
		print_local_margins_top: "トップ",
		print_local_margins_bottom: "ボトム",
		print_local_margins_left: "左",
		print_local_margins_right: "右",
		print_printer_server: "サーバー",
		print_printer_local: "ローカル",
		print_property_class: "クラス:",
		print_property_routing: "ルーティング:",
		print_property_pagedef: "ページ定義:",
		print_property_node: "ノード:",
		print_property_writer: "ライター:",
		print_property_formdef: "書式定義:",
		print_property_printerid: "宛先:",
		print_property_forms: "用紙:",
		print_property_faxnotes: "注記:",
		print_property_faxcompany: "会社名:",
		print_property_faxnumber: "FAX 番号:",
		print_property_faxname: "名前:",
		print_property_faxsendertelnumber: "電話番号:",
		print_property_faxcoverpage: "表紙:",
		print_property_faxsubject: "件名:",
		print_saveoptions: "印刷オプションを保存",
		print_property_bannerpage: "バナー・ページを使用",
		print_print_with_info_fields: "情報フィールドの印刷",
		print_field_from: "差出人",
		print_field_to: "宛先",
		print_invalid_value_class: "有効な文字は、A から Z または 0 から 9 です",
		print_invalid_value_pagedef: "有効な文字は、英数字、あるいは文字 @、#、または $ です",
		print_invalid_value_writer: "有効な文字は、英数字、あるいは文字 @、#、または $ です",
		print_invalid_value_formdef: "有効な文字は、英数字、あるいは文字 @、#、または $ です",
		print_invalid_value_forms: "有効な文字は、英数字、あるいは文字 @、#、または $ です",
		print_invalid_value_margin: "有効な数は ${0} から ${1} です",
		print_status_message: "${0} ドキュメントが ${1} プリンターに送信されました。",

		print_applet_init_error: "印刷アプレットを開始できません。",
		print_applet_init_error_explanation: "この問題は、以下の理由で発生する場合があります。 <br/><br/><ul><li>ワークステーションに Java Runtime Environment (JRE) がインストールされていない。</li><li>Web ブラウザーで Java プラグインが有効になっていない。</li><li>ワークステーションの JRE バージョンが IBM Content Navigator のバージョンと互換性がない。</li><li>ブラウザーが印刷アプレットの開始を待機していてタイムアウトになりました。</li></ul>",
		print_applet_init_error_userResponse: "JRE の問題を解決するには、以下の手順を実行することができます。<br/><br/><ol><li>JRE がワークステーションにインストールされていることを確認してください。</li><li>Web ブラウザーで Java プラグインが有効になっていることを確認します。</li><li>ワークステーション上の JRE のバージョンが、IBM Content Navigator と互換性があることを確認して再試行してください。 サポートされるバージョンのリストは、IBM ソフトウェア・サポート・サイト上の「<i>Hardware and software prerequisites for IBM Content Navigator</i>」というドキュメントに記載されています。</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "表紙",
		daeja_print_selected_documents_title: "選択されたドキュメント",

		/* change the caps to em for emphasis*/
		match_all_criteria: "すべての検索条件と一致",
		match_any_criteria: "いずれかの検索条件と一致",
		include_subfolders_summary: "${0} (サブフォルダーを含める)",
		browse_button: "参照&hellip;",
		search_for: "検索対象:",
		object_type_documents: "ドキュメント",
		object_type_folders: "フォルダー",
		object_type_documents_folders: "ドキュメントおよびフォルダー",
		object_type_web_links: "Web リンク",
		object_type_documents_folders_web_links: "ドキュメント、フォルダー、および Web リンク",

		/* SelectSearchFolderDialog */
		search_in: "検索場所:",
		include_subfolders: "サブフォルダーを含める",

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
		locked_item_icon_title: "${0} によりロック済み",
		checked_out_icon_title: "${0} によりチェックアウト済み",
		major_minor_version_icon_title: "マイナー・バージョンを含むメジャー・バージョン",
		suspended_icon_title: "ワークフローが中断されました",
		on_hold_icon_title: "保留中",
		has_notes_icon_title: "注記あり",
		record_icon_title: "レコードとして宣言済み",
		compound_document_icon_title: "複合ドキュメント",
		validateTemplate_icon_title: "チームスペース・テンプレートの検証が必要です",
		offlineTemplate_icon_title: "チームスペース・テンプレートはオフラインです",
		offlineTeamspace_icon_title: "チームスペースはオフラインです",
		pending_delete_icon_title: "チームスペースの削除を保留中です",
		delete_error_icon_title: "チームスペースを削除できませんでした",
		defaultTemplate_icon_title: "デフォルトのチームスペース・テンプレート",
		teamspace_icon_title: "チームスペース",
		teamspace_template_icon_title: "チームスペース・テンプレート",
		has_bookmark_icon_title: "ブックマークあり",
		read_only_icon_title: "読み取り専用",
		no_results_were_found: "結果が見つかりませんでした。",
		folder_is_empty: "フォルダーが空です。",
		no_checked_out_items: "チェックアウトされたアイテムはありません。",
		inbasket_is_empty: "受信トレイが空です。",
		worklist_is_empty: "ワーク・リストが空です。",
		tracker_milestone_completed: "完了",
		stepprocessor_attachments_title: "コンテンツ",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "アイテムのロック",
		unlock_items: "アイテムのアンロック",
		checkin_item: "アイテムのチェックイン",

		/* Help */
		learn_more: "詳細",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "チームスペースを開く",
		repository_tab_createWorkspace: "新規チームスペース",
		repository_tab_createWorkspaceTemplate: "新規チームスペース・テンプレート",
		repository_tab_DefaultTemplate: "デフォルト",

		/* Cross repository document copy */
		documentCopyTaskDescription: "このタスクでは、ドキュメントがコピーされます。",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "選択したチームスペース・テンプレートの編集特権がありません。",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "${0} チームスペースを削除しますか? <br><br>リポジトリー内の他のフォルダーにファイリングされたドキュメントのみがリポジトリー上に残ります。 チームスペースにのみファイリングされているドキュメントはすべて削除されます。",
		teamspaceDecommissionLabel: "削除:",
		teamspaceDecommissionDescription: "チームスペースを削除すると、サーバーからこのチームスペースが削除されます。チームスペース成果物の処理方法を指定してください。",
		teamspaceDecommissionOptions: "「チームスペースの削除」オプション",
		teamspaceDecommissionDeleteAll: "すべてのチームスペース成果物を削除",
		teamspaceDecommissionReFileAll: "すべてのチームスペース成果物をリファイル",
		teamspaceDecommissionReFileDestination: "移動先:",
		teamspaceDecommissionReFileIn: "リファイル先",
		teamspaceDecommissionTaskName: "チームスペース削除タスク",
		teamspaceDecommissionTaskDescription: "このタスクにより、リポジトリーからチームスペースが削除されます。",
		teamspaceDecommissionDeletionStarted: "チームスペースの削除がスケジュールされています",
		teamspaceDecommissionDeletionConnectionFailed: "チームスペースを削除するタスクは、リポジトリーに接続できないため、実行できませんでした。 リポジトリー管理者の認証情報が正しいことを確認してください。",

		teamspace_edit_properties_notsupported: "チームスペースのプロパティーはチームスペース・ビューからのみ編集できます。",

		/* teamspace offline */
		offlineTeamspace_open_msg: "チームスペースはオフラインであり、チームスペースの所有者のみが開くことができます",

		/* Teamspace Builder widget */
		workspace_validation_document: "ドキュメント:",
		workspace_validation_folder: "フォルダー:",
		workspace_validation_ets: "以下のエントリー・テンプレートはこのリポジトリーでは使用できないため、選択されたエントリー・テンプレートのリストから削除されました:",
		workspace_validation_classes: "以下のクラスはこのリポジトリーでは使用できないため、選択されたクラスのリストから削除されました:",
		workspace_validation_searches: "以下の検索はこのリポジトリーでは使用できないため、選択された検索のリストから削除されました:",
		workspace_validation_docs_folders: "以下のドキュメントおよびフォルダーはこのリポジトリーでは使用できないため、追加されたアイテムのリストから削除されました:",
		workspace_change_template_confirmation_question: "異なるテンプレートを選択すると、すべての変更が失われます。 続行しますか?¥n",
		workspace_delete_item_confirmation_question: "${0} アイテムを削除しますか?\n",
		workspace_delete_role_confirmation_question: "${0} ロールを削除しますか?\n",
		workspace_delete_confirmation_question: "チームスペースを削除すると、チームスペースのコンテナーのみが削除されます。 チームスペース内のフォルダーとドキュメントはリポジトリー内に残るため、検索を実行することでこれらを見つけることができます。 チームスペースの内容を削除するには、まずチームスペース内のアイテムを削除してから、チームスペースを削除します。<br><br>${0} チームスペースを削除しますか?",
		workspacebuilder_instance_template_name_header: "チームスペース・テンプレート名",
		workspacebuilder_instance_template_description_header: "説明",

		workspacebuilder_template_tooltip_name: "テンプレート名に、次の文字を含めることはできません: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "チームスペース名に、次の文字を含めることはできません。\\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "ユーザーがテンプレートのリストから正しく選択できるように、説明を入力してください。 例えば、対象となるユーザーまたはテンプレートの使用法についての情報を含めることが考えられます。",
		workspacebuilder_instance_tooltip_description: "ユーザーがこのチームスペースと他のチームスペースを区別できるように、説明を入力してください。",

		workspacebuilder_template_edit_properties_pane: "チームスペース・テンプレートの編集",
		workspacebuilder_instance_properties_pane: "チームスペースの定義",
		workspacebuilder_template_properties_pane: "チームスペース・テンプレートの定義",

		workspacebuilder_instance_security_pane: "チームスペース・セキュリティーの設定",
		workspacebuilder_template_security_pane: "テンプレート・セキュリティーの設定",

		workspacebuilder_layout_pane: "レイアウトの選択",
		workspacebuilder_search_templates_pane: "検索の選択",
		workspacebuilder_document_folders_pane: "フォルダーおよびドキュメントを含める",
		workspacebuilder_doctypes_entryTemplates_pane: "クラスまたはエントリー・テンプレートの選択",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "クラスの選択",
		workspacebuilder_security: "チームスペース・セキュリティー",

		workspacebuilder_roles_pane: "ロールの選択",
		workspacebuilder_security: "セキュリティー",

		workspacebuilder_properties_templates: "使用可能なテンプレート:",
		workspacebuilder_available_templates: "使用可能な検索:",
		workspacebuilder_selected_templates: "選択された検索:",
		workspacebuilder_templates_name: "検索名",

		workspacebuilder_available_entryTemplates: "利用可能なエントリー・テンプレート:",
		workspacebuilder_selected_entryTemplates: "選択されたエントリー・テンプレート:",

		workspacebuilder_item_classes: "使用可能なクラス:",
		workspacebuilder_item_classes_selected: "選択したクラス:",
		workspacebuilder_properties_select_template: "このチームスペースに使用するテンプレートを選択します。",
		workspacebuilder_template_properties: "チームスペース・テンプレートの定義",
		workspacebuilder_instance_properties: "チームスペースの定義",
		workspacebuilder_template_introText: "ナビゲーション中の選択を使用して、このテンプレートから作成されるすべてのチームスペースに含める共通コンポーネントを指定してください。 終了したら、<b>「完了」</b>をクリックして、このテンプレートを他のユーザーが使用できるようにします。他のユーザーは、このテンプレートを使用して、新規チームスペースを作成できます。",
		workspacebuilder_instance_introText: "チームは、チームスペースを使用して、ドキュメントの特定のセットを共有し、共同で処理します。 ユーザーがこのチームスペースと他のチームスペースを区別できるように、このチームスペースの分かりやすい名前および説明を入力してください。 追加の検索、クラスまたはエントリー・テンプレート、ドキュメント、およびフォルダーを組み込んで、チームスペースをカスタマイズできます。",

		workspacebuilder_template_search_template_introText: "このテンプレートから作成されるすべてのチームスペースに含めるデフォルトの検索を選択してください。 検索が選択されていない場合、チームスペース・ユーザーにはアクセス権が付与されているすべての検索が表示されます。 適切な権限が付与されている場合、ユーザーは、チームスペース内の検索を追加および共有することができます。",
		workspacebuilder_instance_search_template_introText: "チームスペース・ユーザーがタスクをより効率的に完了できるように、検索を組み込みます。 検索が組み込まれていない場合、チームスペース・ユーザーにはアクセス権が付与されているすべての検索が表示されます。 適切な権限が付与されている場合、ユーザーは、チームスペース内で検索を追加および共有することもできます。",

		workspacebuilder_template_roles_introText: "チームスペース・ユーザーは、ロールに割り当てられます。 ロールは、ユーザーが実行を許可されるタスクを指定します。 許可されるタスクを表示するには、各ロールの横にあるアイコンをクリックしてください。 チームスペースに対して適切なロールを選択してください。",
		workspacebuilder_template_roles_modify_introText: "このチームスペース内の各ロールに関連付けられている権限を変更できます。 チームスペース・メンバーの権限が変更されたときは、メンバーに通知する必要があります。",

		workspacebuilder_template_roles_header_name: "ロール名",

		workspacebuilder_template_folders_introText: "このテンプレートから作成されるすべてのチームスペースに含めるデフォルトのドキュメントおよびフォルダーを選択してください。 ドキュメントは、リンクまたはコピーのいずれかとして追加できます。 ポリシーまたは手順など、複数のコピーを作成したくないドキュメントを指示するには、リンクを使用してください。 テンプレートまたはフォームなど、ユーザーが変更するドキュメントについては、コピーを作成してください。",
		workspacebuilder_instance_folders_introText: "チームスペースに含めるデフォルトのドキュメントおよびフォルダーを選択してください。 ドキュメントは、リンクまたはコピーのいずれかとして追加できます。 ポリシーまたは手順など、複数のコピーを作成したくないドキュメントを指示するには、リンクを使用してください。 テンプレートまたはフォームなど、ユーザーが変更するドキュメントについては、コピーを作成してください。",

		workspacebuilder_template_roles_introText: "このテンプレートから作成されるすべてのチームスペースに含めるロールを指定してください。 新規ロールを作成することもできます。このロールは、他のチームスペース・テンプレートを作成するときに使用できます。",
		workspacebuilder_instance_users_introText: "チームスペース内では、各ユーザーは、ユーザーが完了できるタスクを指定する 1 つ以上のロールに割り当てられます。 チームスペースにユーザーを追加し、ユーザーにロールを割り当ててください。",

		workspacebuilder_instance_navigation_pane_title: "チームスペース・ビルダー",
		workspacebuilder_template_navigation_pane_title: "チームスペース・テンプレート・ビルダー",

		workspacebuilder_roles_roles_nopermissions: "{0} ロールに対して権限が選択されていません。",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "選択されたロール:",
		workspacebuilder_roles_available_roles: "選択可能なロール:",
		workspacebuilder_roles_privilege_header: "権限",
		workspacebuilder_roles_select_role: "ロールの選択",
		workspacebuilder_roles_select_permission: "許可の選択",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "{0} という名前のロールは既に存在しています。 ロールの名前は一意である必要があります。 ",
		workspacebuilder_roles_edit_dialog_role_name: "ロール名:",
		workspacebuilder_roles_edit_dialog_role_description: "ロールの説明:",
		workspacebuilder_roles_edit_dialog_title_new: "新規ロール",
		workspacebuilder_roles_edit_dialog_title_edit: "ロールの編集",

		workspacebuilder_roles_privileges_header: "{0} ロールの権限:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "ドキュメント権限:",
		workspacebuilder_roles_priv_group_folder: "フォルダー権限:",
		workspacebuilder_roles_priv_group_teamspace: "チームスペース権限:",
		workspacebuilder_roles_priv_group_item: "ドキュメント権限およびフォルダー権限:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "権限の管理",
		workspacebuilder_roles_plbl_modifyItemPermissions: "この権限を持つユーザーは、チームスペース内のドキュメントおよびフォルダーへのアクセスを管理できます。 この権限には、他のユーザーによるプロパティーの削除、プロパティーの編集、サブフォルダーの作成などを許可する権限が含まれます。",

		workspacebuilder_roles_priv_deleteItems: "削除",
		workspacebuilder_roles_plbl_deleteItems: "この権限を持つユーザーは、チームスペース内でドキュメントおよびフォルダーを削除できます。",

		workspacebuilder_roles_priv_createItems: "作成",
		workspacebuilder_roles_plbl_createItems: "この権限を持つユーザーは、チームスペース内のドキュメントおよびフォルダーを作成できます。",

		workspacebuilder_roles_priv_viewItemProperties: "プロパティーの表示",
		workspacebuilder_roles_plbl_viewItemProperties: "この権限を持つユーザーは、チームスペース内でドキュメントおよびフォルダーのプロパティー (システム・プロパティーを含む) を表示できます。",

		workspacebuilder_roles_priv_modifyItemProperties: "プロパティーの編集",
		workspacebuilder_roles_plbl_modifyItemProperties: "この権限を持つユーザーは、チームスペース内でドキュメントおよびフォルダーのプロパティーを編集できます。",

		workspacebuilder_roles_priv_modifyFolderPermissions: "フォルダー権限の管理",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "この権限を持つユーザーは、チームスペース内のフォルダーへのアクセス権限を管理できます。 この権限には、他のユーザーによるフォルダーの削除、フォルダー・プロパティーの編集、サブフォルダーの作成などを許可する権限が含まれます。",

		workspacebuilder_roles_priv_deleteFolders: "フォルダーの削除",
		workspacebuilder_roles_plbl_deleteFolders: "この権限を持つユーザーは、チームスペース内のフォルダーを削除できます。",

		workspacebuilder_roles_priv_modifyFolderProperties: "フォルダー・プロパティーの編集",
		workspacebuilder_roles_plbl_modifyFolderProperties: "この権限を持つユーザーは、チームスペース内のフォルダーのプロパティーを編集できます。",

		workspacebuilder_roles_priv_createSubfolders: "サブフォルダーの作成",
		workspacebuilder_roles_plbl_createSubfolders: "この権限を持つユーザーは、チームスペース内のフォルダーを作成できます。",

		workspacebuilder_roles_priv_fileInFolders: "フォルダーに追加",
		workspacebuilder_roles_plbl_fileInFolders: "この権限を持つユーザーは、チームスペース内のフォルダーからドキュメントへのリンクを追加できます。",

		workspacebuilder_roles_priv_viewFolderProperties: "フォルダー・プロパティーの表示",
		workspacebuilder_roles_plbl_viewFolderProperties: "この権限を持つユーザーは、チームスペース内のフォルダーのプロパティー (システム・プロパティーを含む) を表示できます。",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "ドキュメント権限の管理",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "この権限を持つユーザーは、チームスペース内のドキュメントへのアクセス権限を管理できます。 この権限には、他のユーザーによるドキュメントの削除、ドキュメント・プロパティーの編集などを許可する権限が含まれます。",

		workspacebuilder_roles_priv_deleteDocuments: "ドキュメントの削除",
		workspacebuilder_roles_plbl_deleteDocuments: "この権限を持つユーザーは、チームスペース内のドキュメントを削除できます。",

		workspacebuilder_roles_priv_promoteVersions: "バージョンの昇格",
		workspacebuilder_roles_plbl_promoteVersions: "この権限を持つユーザーは、チームスペース内のドキュメントに新規バージョン番号を割り当てることができます。",

		workspacebuilder_roles_priv_modifyContent: "ドキュメントの編集",
		workspacebuilder_roles_plbl_modifyContent: "この権限を持つユーザーは、チームスペース内のドキュメントのコンテンツを編集できます。",

		workspacebuilder_roles_priv_modifyDocumentProperties: "ドキュメント・プロパティーの編集",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "この権限を持つユーザーは、チームスペース内のドキュメントのプロパティーを編集できます。",

		workspacebuilder_roles_priv_viewContent: "ドキュメントの表示",
		workspacebuilder_roles_plbl_viewContent: "この権限を持つユーザーは、チームスペース内のドキュメントを表示できます。",

		workspacebuilder_roles_priv_viewDocumentProperties: "ドキュメント・プロパティーの表示",
		workspacebuilder_roles_plbl_viewDocumentProperties: "この権限を持つユーザーは、チームスペース内のドキュメントのプロパティー (システム・プロパティーを含む) を表示できます。",

		workspacebuilder_roles_priv_addNewSearches: "検索の追加",
		workspacebuilder_roles_plbl_addNewSearches: "この権限を持つユーザーは、チームスペースに検索を追加できます。 デフォルトでは、他のユーザーはその検索を使用できません。",

		workspacebuilder_roles_priv_createNewSearches: "検索の作成",
		workspacebuilder_roles_plbl_createNewSearches: "この権限を持つユーザーは、新規検索を作成できますが、検索の保存はできません。 この権限を持たないユーザーは、既にリポジトリー上にあるドキュメントをチームスペースに追加することができません。",

		workspacebuilder_roles_priv_shareSearches: "検索の共有",
		workspacebuilder_roles_plbl_shareSearches: "この権限を持つユーザーは、作成した検索をチームスペースの他のユーザーと共有できます。",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "クラスまたはエントリー・テンプレートの管理",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "この権限を持つユーザーは、チームスペース内のクラスまたはエントリー・テンプレートを追加および削除できます。",

		workspacebuilder_roles_priv_addRemoveClasses: "クラスの管理",
		workspacebuilder_roles_plbl_addRemoveClasses: "この権限を持つユーザーは、チームスペース内のクラスを追加および削除できます。",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "チームスペース・ユーザーの管理",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "この権限を持つユーザーは、チームスペース内のユーザーとグループを追加および削除できます。 さらに、ユーザーをどのロールに割り当てるかを管理できます。",

		workspacebuilder_roles_priv_modifyRoles: "ロールの変更",
		workspacebuilder_roles_plbl_modifyRoles: "この権限を持つ所有者は、チームスペースのロール権限を変更できます。 この権限は所有者にのみ使用可能です。",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "ユーザーの選択",
		workspacebuilder_users_add_users_and_groups_button: "ユーザーおよびグループの追加...",
		workspacebuilder_users_users_or_group_header: "ユーザーおよびグループ",
		workspacebuilder_users_roles_header: "ロール",

		workspacebuilder_users_role_header: "ロール",
		workspacebuilder_users_role_no_permissions: "このロールには権限がありません",
		workspacebuilder_users_available_roles_label: "選択可能なロール:",
		workspacebuilder_users_selected_users_and_groups_label: "選択されたユーザーおよびグループ:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "チームスペースを保存できません。 このチームスペースでは少なくとも 1 つの所有者を指定しなければなりません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "チームスペースを保存できません。 すべてのユーザーにロールを割り当てる必要があります。",
		// end of select users

		workspacebuilder_search_templates: "検索の選択",
		workspacebuilder_search_add: "検索の追加",
		workspacebuilder_properties_workspaceName: "チームスペース名:",
		workspacebuilder_properties_templateName: "テンプレート名:",
		workspacebuilder_properties_workspaceDescription: "チームスペースの説明:",
		workspacebuilder_properties_templateDescription: "テンプレートの説明:",
		workspacebuilder_properties_workspaceTemplate: "選択したテンプレート",
		workspacebuilder_properties_security: "テンプレートを共有するユーザー:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "チームスペースから移動:",
		moveTeamspaceDocuments_security: "ドキュメントの共有先:",
		moveTeamspaceDocuments_security_change: "選択されたアイテムのカスタム・セキュリティーの指定",
		moveTeamspaceDocuments_item_type_level: "選択されたアイテムのクラスは、クラス・レベルのセキュリティーのみを使用するように構成されているため、選択されたアイテムのセキュリティーの「オーバーライド」は選択できません",
		moveTeamspaceDocuments_security_inherit: "宛先フォルダーからセキュリティーを継承",
		moveTeamspaceDocuments_file_info_text: "アイテムは、1 つのチームスペースから別のチームスペースまたはフォルダーに移動できます。",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "選択されたフォルダーにアイテムを移動するための適切な権限がありません。",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "チームスペースからアイテムを移動するための適切な権限がありません。",
		moveTeamspaceDocuments_move_mixed_items: "選択されたアイテムのセキュリティーをオーバーライドできません。 一部のアイテムはチームスペースにより管理されていません。 チームスペースにより管理されているアイテムのセキュリティーのみをオーバーライドできます。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "チームスペースの名前を指定する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "チームスペース・テンプレートの名前を指定する必要があります。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "チームスペース名に、次の文字を含めることはできません。\\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "テンプレート名に、次の文字を含めることはできません: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "ドキュメントへのリンク",
		workspacebuilder_folders_makeDocCopy: "ドキュメントのコピー",
		workspacebuilder_folders_newfolder: "新規フォルダー",
		workspacebuilder_folders_local_drive: "ローカル・ディレクトリーから",
		workspacebuilder_folders_from_repo: "リポジトリーから",
		workspacebuilder_folders_add_doc: "ドキュメントの追加",
		workspacebuilder_folders_grid_name: "名前",
		workspacebuilder_folders_props: "プロパティー",
		workspacebuilder_folders_remove: "削除",
		workspacebuilder_folders_delete: "削除",
		workspacebuilder_folders_adddoc_local: "ローカル・ドライブからドキュメントを追加",
		workspacebuilder_folders_adddoc_repo: "リポジトリーからドキュメントを追加",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "指定されたフォルダー名は既に存在します。 別のフォルダー名を指定してください。",

		workspacebuilder_classes_title: "クラスまたはエントリー・テンプレートの選択",
		workspacebuilder_classes_title_cm: "クラスの選択",
		workspacebuilder_classes_template_introText: "このテンプレートから作成されるチームスペースで、クラスまたはエントリー・テンプレートのどちらを使用してドキュメントをリポジトリーに追加するかを指定してください。 クラスが選択されていない場合には、チームスペース・ユーザーはアクセス権が付与されているすべてのクラスを参照します。  適切な権限が付与されている場合、ユーザーは、チームスペースにあるクラスまたはエントリー・テンプレートのリストを変更できます。",
		workspacebuilder_classes_template_introText_cm: "ユーザーがドキュメントをリポジトリーに追加するために使用できるクラスを選択してください。 クラスが選択されていない場合には、チームスペース・ユーザーはアクセス権が付与されているすべてのクラスを参照します。 適切な権限が付与されている場合、ユーザーは、チームスペースにあるクラスのリストを変更できます。",
		workspacebuilder_classes_instance_introText: "ユーザーがドキュメントをリポジトリーに追加するために使用できるクラスまたはエントリー・テンプレートを選択してください。 クラスが選択されていない場合、チームスペース・ユーザーにはアクセス権が付与されているすべてのクラスが表示されます。 適切な権限が付与されている場合、ユーザーは、チームスペースでクラスまたはエントリー・テンプレートのリストを変更できます。",
		workspacebuilder_classes_instance_introText_cm: "ユーザーがドキュメントをリポジトリーに追加するために使用できるクラスを選択してください。 クラスが選択されていない場合、チームスペース・ユーザーにはアクセス権が付与されているすべてのクラスが表示されます。 適切な権限が付与されている場合、ユーザーは、チームスペースにあるクラスのリストを変更できます。",
		workspacebuilder_classes_selection: "クラスの選択:",
		workspacebuilder_classes_list: "使用可能なクラス:",
		workspacebuilder_classes_columns_default: "デフォルト",
		workspacebuilder_classes_columns_className: "クラス名",
		workspacebuilder_classes_type_classes: "クラスを使用してドキュメントを追加",
		workspacebuilder_classes_type_classes_tooltip: "クラスには、ドキュメントを探して後で使用できるように、関連プロパティーが含まれています。",
		workspacebuilder_classes_type_entryTemplates: "エントリー・テンプレートを使用してドキュメントを追加",
		workspacebuilder_classes_type_entryTemplates_tooltip: "エントリー・テンプレートは各ドキュメントの情報に整合性があり、事前に定義された値を使用しているかどうかを保証します。",
		workspacebuilder_classes_type_entryTemplates_columnName: "エントリー・テンプレート名",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "説明",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "チームスペースには 1 つ以上のエントリー・テンプレートを追加する必要があります。",

		workspacebuilder_classes_new: "新規クラス",
		workspacebuilder_classes_add: "クラスの追加",
		workspacebuilder_entryTemplate_add: "エントリー・テンプレートの追加",
		workspacebuilder_add_list: "追加",
		workspacebuilder_makeDefault_list: "デフォルトにする",
		workspacebuilder_removeDefault_list: "デフォルトの削除",

		workspacebuilder_roles_title: "ロールの選択",
		workspacebuilder_roles_title_modify: "ロールの変更",

		workspacebuilder_selection_moveup: "上に移動",
		workspacebuilder_selection_movedown: "下に移動",
		workspacebuilder_selection_remove: "削除",
		workspacebuilder_selection_add: "追加",
		workspacebuilder_selection_create_new_search: "新規検索...",
		workspacebuilder_selection_create_new_role: "新規ロール...",
		workspacebuilder_selection_make_role_available: "使用可能にする",
		workspacebuilder_selection_make_role_available_tooltip: "選択されたロールを他のテンプレートと共有します。 ロールを共有するには、1 つ以上の権限をそのロールに割り当てる必要があります。",

		workspacebuilder_navigation_next: "次へ",
		workspacebuilder_navigation_finish: "終了",
		workspacebuilder_navigation_validate: "検証",
		workspacebuilder_navigation_previous: "前へ",
		workspacebuilder_navigation_cancel: "キャンセル",
		workspacebuilder_navigation_customize: "カスタマイズ",

		workspacebuilder_search_dialog_title: "検索",
		workspacebuilder_dialog_close: "閉じる",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "テンプレートの可用性:",
		workspace_properties_templateState_tooltip: "ユーザーがこのテンプレートを使用するチームスペースを作成できないようにするには、テンプレートを使用不可にします。",
		workspace_properties_dialog_title: "テンプレート・プロパティー",
		workspace_properties_online_radio_option_label: "使用可能にする",
		workspace_properties_offline_radio_option_label: "選択不可にする",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "変更を保存せずに取り消しますか?",
		workspacebuilder_cancel_confirmation_button: "はい",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "無効なアイテムはすべてテンプレートから削除され、ユーザーがテンプレートを使用できるようになります。  このチームスペース・テンプレートを検証しますか?",
		workspacebuilder_validate_confirmation_button: "はい",
		workspacebuilder_validate_confirmation_title: "検証",

		/* Entry templates builder */
		entry_templates: "エントリー・テンプレート・マネージャー",
		no_entry_templates_were_found: "エントリー・テンプレートがありません",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "フィルター",

		/* Roleselector widget */
		role_selector_name: "ロール:",

		/* User Group picker widget */
		directory_label: "ディレクトリー:",
		scope_label: "検索対象:",
		name_starts_with_label: "名前が検索語で始まる",
		name_contains_label: "名前の内容",
		display_name_contains_label: "表示名の内容",
		starts_with_label: "次で始まる:",
		available_label: "使用可能:",
		available_heading: "使用可能",
		selected_label: "選択済み:",
		selected_heading: "選択済み",
		available_repositories_label: "選択可能なリポジトリー",
		selected_repositories_label: "選択されたリポジトリー",
		default_repository: "デフォルト・リポジトリー:",
		default_repository_placeholder: "リポジトリーの選択",
		default_role_placeholder: "ロールの選択",
		menu_label_placeholder: "ラベルの選択または入力",
		default_repository_hover: "ユーザーがこのデスクトップから Web クライアントにログインしたときにデフォルトで選択されるリポジトリーを指定します。<br><br><b>重要:</b> デフォルトのリポジトリーを指定する前に、選択されたリポジトリー・リスト・デスクトップにリポジトリーを追加する必要があります。",
		default_repository_workflow_hover: "<b>注意:</b> アプリケーション・スペースを構成できるのは、このデスクトップに対して構成されているリポジトリーに対してのみです。",
		remove_label: "削除",
		users_label: "ユーザー",
		groups_label: "グループ",
		user_or_group_name_label: "ユーザーまたはグループ名:",
		user_or_group_name_hover: "リポジトリーで有効なユーザーまたはグループの名前を入力します。  名前は検証されません。",
		user: "ユーザー",
		group: "グループ",
		name: "名前:",
		displayName: "表示名",
		display_name: "表示名:",
		shortName: "短縮名:",
		distinguishedName: "識別名:",
		search_tooltip: "検索",
		add_tooltip: "追加",
		add_selected_tooltip: "選択済みリストに追加",
		remove_tooltip: "削除",
		remove_selected_tooltip: "選択済みリストから削除",
		add_to_selected_tooltip: "追加",
		remove_from_selected_tooltip: "削除",
		move_up_selected_tooltip: "上に移動",
		move_down_selected_tooltip: "下に移動",
		advanced_search_options_tooltip: "詳細設定",
		move_right_selected_tooltip: "サブメニューに移動",
		move_left_selected_tooltip: "サブメニューから移動",
		add_separator: "セパレーターの追加",
		menu_item_label: "メニュー・アイテム・ラベル:",
		add_menu_label: "サブメニューの追加",
		menu_label: "サブメニュー・ラベル:",
		menu_label_info: "<b>重要:</b> このメニューを保存する前に、少なくとも 1 つのメニュー・アイテムをこのサブメニューに追加する必要があります。",
		menu_dropdown_label: "ドロップダウン・ボタン・ラベル:",
		menu_dropdown_label_info: "<b>重要:</b> このツールバーを保存するには、このドロップダウン・ボタンにメニュー・アイテムを少なくとも 1 つ追加する必要があります。",
		no_item_found: "結果が見つかりませんでした。",
		me: "自分",
		anyone: "任意のユーザー",
		specific_users: "特定のユーザー",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "検索で {0} 件を超える結果が返されました。 条件を変更して、検索を絞り込んでください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "検索結果に、既に選択されたアイテムが含まれています。 これらのアイテムは検索結果に表示されません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "{0} 件を超える結果が返されました。 フィルターを使用して検索結果の絞込みをしてください。",

		user_already_selected: "指定のユーザーは既に選択されています。  別のユーザーを指定してください。",
		group_already_selected: "指定のグループは既に選択されています。  別のグループを指定してください。",
		user_cannot_select_self: "自分自身を追加することはできません。 別のユーザーを指定してください。",

		/* Select User Group dialog */
		select_user_group_add_label: "追加",
		select_user_group_cancel_label: "キャンセル",
		add_users_groups_label: "ユーザーおよびグループの追加",
		add_user_group_label: "ユーザーおよびグループの追加",
		add_users_label: "ユーザーの追加",
		add_user_label: "ユーザーの追加",
		add_label: "追加:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "次のドキュメントには保存されていないアノテーションの変更があります:",
		viewer_confirm_to_proceed: "続行して、変更を破棄しますか?",
		viewer_warn_has_changes: "保存されていない変更は廃棄されます。",
		viewer_warn_is_printing: "進行中の印刷が完了しない可能性があります。",
		viewer_warn_confirm_exit: "終了しますか?",
		viewer_prompt_save_changes: "次のドキュメントには保存されていないアノテーションの変更があり、続行するとそれらの変更内容が失われます:<br>${0}<br><br>変更を保存しますか?",
		viewer_prompt_mergesplit_changes: "次のドキュメントには保存されていない変更内容があります:<br>${0}<br><br>続行して、変更を破棄しますか?",
		viewer_prompt_mergesplit_tab_changes: "次のドキュメントには保存されていない変更内容があります:<br>${0}<br><br>続行して、変更を破棄しますか?",
		viewer_new_item_name: "新しいドキュメント",
		viewer_top_frame: "上フレーム:",
		viewer_bottom_frame: "下フレーム:",
		viewer_left_frame: "左フレーム:",
		viewer_right_frame: "右フレーム:",
		viewer_viewer_frame: "ビューアー・フレーム:",
		viewer_properties_frame: "プロパティー・フレーム:",
		viewer_comment_frame: "コメント・フレーム:",
		viewer_mergesplit_on: "表示",
		viewer_mergesplit_off: "マージと分割",
		viewer_mergesplit_context_menu_move: "移動",
		viewer_mergesplit_context_menu_rename: "名前の変更",
		viewer_mergesplit_context_menu_delete: "削除",
		//move to new window
		viewer_move_to_new_window:"新しいウィンドウに移動",
		viewer_continue:"変更の破棄",
		viewer_return_to_original_window:"元のウィンドウに戻る",
		viewer_switch_window:"ウィンドウの切り替え",
		viewer_prompt_lost_changes:"ドキュメント ${0} は現在別のウィンドウで開いています。 そのドキュメントに、保存されていない変更があります。<br><br>そのウィンドウに切り替えて変更を保存するか、変更を破棄してこのウィンドウで開きますか?",
		viewer_mergesplit_fallback_info: "マージおよび分割アクションは、同じリポジトリーに入っているドキュメントに対してのみ実行できます。",
		viewer_tabbed_layout: "タブとして表示",
		viewer_tabbed_layout_highcontrast: "タブ",
		viewer_split_vertical_layout: "ペインを上下に分割",
		viewer_split_vertical_layout_highcontrast: "上下",
		viewer_split_horizontal_layout: "ペインを左右に分割",
		viewer_split_horizontal_layout_highcontrast: "左右",
		viewer_add_vertical_layout: "下に新しいタブ",
		viewer_add_vertical_layout_highcontrast: "下タブ",
		viewer_add_horizontal_layout: "右に新しいタブ",
		viewer_add_horizontal_layout_highcontrast: "右タブ",
		viewer_add_horizontal_layout_rtl: "左に新しいタブ",
		viewer_add_horizontal_layout_rtl_highcontrast: "左タブ",
		viewer_split_properties_layout: "プロパティーの表示",
		viewer_split_comment_layout: "コメントの表示",
		viewer_split_notelog_layout: "注釈ログの表示",
		viewer_window_title: "${0} ビューアー",
		viewer_next_hit: "リスト中の次のドキュメントを表示",
		viewer_prev_hit: "リスト中の前のドキュメントを表示",
		viewer_confrim_more_search_results: "検索結果に、これ以上表示可能なドキュメントはありません。  さらに検索結果を取得しますか?",
		viewer_confirm_get_next_page: "結果リストに、これ以上表示可能なアイテムはありません。  さらに検索結果を取得しますか?",
		viewer_confirm_get_next_item: "結果リストに、さらに表示可能なアイテムがあります。  次のアイテムを表示しますか?",
		viewer_fn_annotation_tooltip: " 作成者: ${0}、作成日: ${1}",
		viewer_box_note_limitation: "Box Note のオープンと表示を行うには、別個のウィンドウが必要になります。",
		viewer_click_to_open_box_note: "Box Note を開くにはここをクリックします。",
		viewer_box_view_expiring: "Box ドキュメントを表示できる最長時間は 60 分です。 現行セッションは ${0} 分で期限切れになります。 ドキュメントの作業を継続するには、今それを再ロードする必要があります。 ドキュメントを再ロードしますか?",
		viewer_add_dialog_save_as_type: "次のタイプで保存:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "チェックアウトの競合",
		viewer_checkout_conflict: "ドキュメントは別のユーザーによってチェックアウトされています。",
		viewer_checkout_confirm: "より新しいバージョンのドキュメントが使用可能です。 ドキュメントのチェックアウトを続行しますか? それとも、より新しいバージョンをビューアーに再ロードしますか? ビューアーに再ロードすると、未保存の変更が失われます。",
		viewer_checkout_continue: "チェックアウトを続行",
		viewer_checkout_reload: "再ロード",
		viewer_status_building: "ドキュメントをビルドしています...",
		viewer_status_adding: "ドキュメントを追加しています...",
		viewer_status_checking_in: "ドキュメントをチェックインしています...",

		/* Class Selector Widget */
		include_subclasses_label: "サブクラスを含める",
		include_subclasses_label2: "サブクラスでも検索",
		include_subclasses_note: "(サブクラスを含む)",
		available_classes_col_header: "使用可能なクラス",
		single_class_label: "単一のクラスで検索",
		multiple_classes_label: "複数のクラスで検索",
		multiple_classes_hover_help: "複数のクラスで検索するには、このオプションを選択します。 クラスは、親クラスでもサブクラスでもかまいません。 このオプションを選択すると、選択したクラスに共通のプロパティーと値のみが表示されます。",
		selected_classes_col_header: "選択したクラス",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(サブフォルダーを含む)",
		favorites_pseudo_node: "\\お気に入り\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "ドキュメントの追加先のリポジトリー内のフォルダーを選択する必要があります。",
		no_permission_add_folder: "このフォルダーにフォルダーを追加するための適切な権限が付与されていません。",
		no_permission_add_document: "このフォルダーにドキュメントを追加するための適切な権限が付与されていません。",
		document_already_in_folder: "ドキュメントはこのフォルダーに既に存在します。",
		cant_move_folder_onto_parent: "フォルダーはこのフォルダーに既に存在します。",
		cant_move_folder_onto_self: "フォルダーをそれ自体またはそのサブフォルダーに移動することはできません。",

		/* Workflow Widgets */
		process_application_space: "プロセス・アプリケーション・スペース",
		process_role: "プロセス・ロール",
		process_inbasket: "プロセス受信トレイ",
		process_worklist: "ワーク・リスト",
		process_step_processor: "プロセス・ワーク・アイテム",
		process_tracker: "ワーク・アイテムのトラッキング",
		process_info_subject: "件名",
		process_info_stepname: "ステップ",
		process_info_is_locked: "ロック済み",
		process_info_no_access: "アクセス権なし",
		process_info_received_on: "受信日",
		process_info_overdue: "期限切れ",
		process_info_reminder_sent: "送信済みメモ",
		process_info_locked_by_user: "ロック実行者",
		process_work_object_number: "ワーク・オブジェクト番号",
		process_deadline: "期限:",
		process_launchedby: "開始者:",
		process_receivedon: "受信日時:",
		process_step: "ステップ:",
		process_properties: "プロパティー",
		process_attachments: "添付ファイル",
		process_attachments_select: "添付ファイルの選択",
		process_finish_button_label: "トラッキングの停止",
		process_tracker_history: "履歴",
		process_tracker_milestones: "マイルストーン",
		process_tracker_milestone: "マイルストーン",
		process_tracker_milestone_level: "レベル",
		process_tracker_milestones_empty: "表示するマイルストーンがありません。",
		process_tracker_level_selector_label: "マイルストーン・レベルを次のレベルまで表示:",
		process_tracker_map_selector_label: "次のマップでフィルター:",
		process_tracker_message: "メッセージ",
		process_tracker_datereached: "到達日",
		process_tracker_stepname: "ステップ",
		process_tracker_cycle: "サイクル",
		process_tracker_review_cycle: "レビューのサイクル",
		process_tracker_participant: "参加者",
		process_tracker_completed: "完了",
		process_tracker_response: "応答",
		process_tracker_comments: "コメント",
		process_tracker_delete_confirmation: "次のワークフローのトラッキングを停止しますか?: ${0}",
		process_tracker_history_allmaps: "すべてのマップ",
		process_tracker_history_workflow: "ワークフロー",
		process_tracker_history_terminate: "終了",
		process_tracker_history_malfunction: "障害",
		process_filter_label: "フィルター",
		process_no_filter_summary: "適用されているフィルターはありません",
		process_filter_summary: "${0} が適用されています",
		process_filter_reset_tooltip: "リセットすると、フィルターがクリアされ、受信トレイが更新されます。",
		process_attachments_add_folder: "フォルダーの追加",
		process_attachments_add_doc: "ドキュメントの追加",
		process_complete_button_label: "完了",
		process_save_button_label: "保存",
		process_launch_button_label: "ワークフローの起動",
		process_open_button_label: "開く",
		process_movetoinbox_button_label: "受信トレイに移動",
		process_return_button_label: "戻る",
		process_return_to_sender_tooltip: "ワーク・アイテムを元の受信トレイに戻します。",
		process_move_to_inbasket_tooltip: "ワーク・アイテムを個人用受信トレイに移動します。",
		process_reassign_tooltip: "別の所有者へのワーク・アイテムの再割り当て",
		process_reassign_button_label: "再割り当て",
		process_preferences_button_label: "設定",
		process_manageroles_button_label: "ロールの管理",
		process_manageroles_no_members: "メンバーがありません。",
		process_responses_button_label: "その他の応答",
		process_morecustomaction_button_label: "その他のアクション",
		process_show_instructions: "インストラクションの表示",
		process_hide_instructions: "インストラクションの非表示",
		process_remove_attachment: "削除",
		process_close_window: "ワーク・アイテムが処理されました。",
		process_delegate_flag: "ワークフロー内の次のステップにワーク・アイテムをルーティングする前に、現在の所有者がそのワーク・アイテムを承認する必要があります。",
		process_paticipant_voting: "投票承認に必要な参加者の数:",
		process_get_next_label: "次のワーク・アイテムを取得",
		process_no_more_items: "受信トレイには、処理対象のアイテムはもうありません。",
		process_workflow_name: "ワークフロー名:",
		process_pattern_process_name: "${0} のレビュー",
		process_instuctions: "レビューアーへの指示:",
		process_pattern_deadline: "期限:",
		process_reviewers: "レビューアー:",
		process_approvals_required: "必要な承認:",
		process_on_reject: "ワーク・アイテムが拒否された場合:",
		process_return_to_originator: "自分に戻す",
		process_return_to_previous_reviewer: "前のレビューアーに戻す",
		process_additional_settings: "追加設定:",
		process_allow_reassign: "レビューアーがこのレビューを再割り当てできるようにする",
		process_complete_notification: "レビュー完了時に通知",
		process_workflow_name_hover_help: "ワーク・アイテムには、レビューアーが自分の受信トレイ内でこのワーク・アイテムと他のワーク・アイテムを簡単に識別できるような名前を指定する必要があります。",
		process_approvals_required_hover_help: "ワーク・アイテムのレビューを複数のレビューアーが同時に行う場合は、ワーク・アイテムの正常な完了に必要な承認数を指定できます。",
		process_approval_options: "承認オプション",
		process_all: "すべて",
		process_at_least: "最小",
		process_at_least_by_count: "少なくとも ${0} 人のレビューアー",
		process_at_least_by_percentage: "少なくとも ${0}% のレビューアー",
		process_comments: "コメント:",
		process_review_step_comments_hover_help: "ワーク・アイテムを拒否する場合は、拒否理由に関する情報を提供する必要があります。 この情報により、ワーク・アイテムのオリジネーターまたは前のレビューアーが、その問題点に対処できるようになります。",
		process_rework_step_comments_hover_help: "コメントにどのように対処したかに関する情報を提供する必要があります。 コメントに賛同しない場合は、その判断の理由を入力してください。",
		process_rejection_reason: "拒否の理由:",
		process_summary: "要約",
		process_sequential_review: "逐次レビュー",
		process_sequential_review_description: "ワーク・アイテムは、各レビューアーによって順にレビューされます。",
		process_parallel_review: "並列レビュー",
		process_parallel_review_description: "ワーク・アイテムは、すべてのレビューアーによって同時にレビューされます。",
		process_parallel_approvals_required_error: "必要な承認数が高すぎます。 指定されているレビューアーは ${0} 人のみです。",
		process_parallel_invalid_required_approvals_count: "値が無効です。 値は ${0} にする必要があります。",
		process_subject_prompt: "件名の入力",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "ワーク・アイテム:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "プロパティーの表示",
		view_permissions_level: "権限の表示",
		view_content_level: "ドキュメントの表示",
		link_level: "リンク",
		modify_properties_level: "プロパティーの編集",
		modify_content_level: "ドキュメントの編集",
		minor_version_level: "マイナー・バージョンの編集",
		major_version_level: "メジャー・バージョンの編集",
		create_instance_level: "インスタンスの作成",
		delete_document_level: "ドキュメントの削除",
		delete_item_level: "アイテムの削除",
		modify_document_permissions_level: "権限の管理",
		modify_folder_permissions_level: "権限の管理",
		modify_owner_level: "所有者の変更",
		delete_folder_level: "フォルダーの削除",
		file_in_folder_level: "フォルダーに追加",
		create_subfolder_level: "サブフォルダーの作成",
		link_item_level: "ドキュメントにアノテーションを付け、フォルダーに追加", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>ドキュメントのみ: アノテーションをドキュメントに追加、またはアノテーションをドキュメントから削除</li><li>フォルダーのみ: アイテムをフォルダーに追加、またはアイテムをフォルダーから削除</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "削除",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "所有者",
		/* previously \"Full control\" */
		edit_privilege: "オーサー",
		/* previously \"Edit\" */
		read_only_privilege: "リーダー",
		/* previously \"Read only\" */
		no_access_privilege: "アクセス権なし",
		share_with_label: "共有先:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "自分専用",
		public_label: "全員",
		members_label: "特定のユーザーおよびグループ",
		select_members_label: "選択...",
		select_user_group_label: "ユーザーの選択...",
		select_users_groups_label: "ユーザーおよびグループの選択...",
		select_user_label: "ユーザーの選択...",
		propagation_label: "伝搬:",
		access_label: "権限:",
		add_permission_add_label: "追加",
		security_policy_label: "セキュリティー・ポリシー:",
		includes_inherited_access: "継承されたアクセス権限を含める",
		customize_access_for_label: "アクセス権限のカスタマイズ対象:",
		customize: "カスタマイズ",
		direct: "このアイテム",
		singleLevelInheritance: "1 レベル",
		infiniteLevelInheritance: "すべてのレベル",
		inherited: "継承",
		direct_hover_help: "選択したアイテムにセキュリティー設定が適用されます",
		singleLevelInheritance_hover_help: "これらの権限の適用先は、このアイテムと、このアイテムからセキュリティーを継承するように構成されている直下の子です。",
		infiniteLevelInheritance_hover_help: "これらの権限の適用先は、このアイテムと、このアイテムからセキュリティーを継承するように構成されているすべての子孫です。",
		inherited_hover_help: "これらの権限は、親から継承されます。",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0} のこれらの権限の適用先は、このアイテムと、このアイテムからセキュリティーを継承するように構成されている直下の子です。",
		infiniteLevelInheritance_member_hover_help: "${0} のこれらの権限の適用先は、このアイテムと、このアイテムからセキュリティーを継承するように構成されているすべての子孫です。",
		inherited_member_hover_help: "${0} のこれらの権限は、親から継承されます。",
		partial_hover_help: "アイテムのセキュリティー設定は、ユーザーによって変更されました",
		allow: "許可",
		deny: "拒否",
		basic: "基本",
		advanced: "拡張設定",
		permission_type: "アクセス権限の設定対象:",
		share_with_hover_help: "アイテムは、次のユーザーおよびグループと現在共有されています。",
		direct_security_policy_hover_help: "このセキュリティー・ポリシーの設定を使用すると、このアイテムのセキュリティーを変更できます。",
		security_policy_hover_help: "このアイテムのセキュリティーは読み取り専用です。このセキュリティー・ポリシーの設定では、アイテムのセキュリティーを変更できません。",
		security_remove: "権限なし",
		pseudo_group_label: "別名アカウント",
		marking_hover_help: "このアイテムのセキュリティーは、アイテムのセキュリティーに影響する可能性があるマーキング・セットによって制御されます。",
		note_label: "重要:",
		marking_text: "このアイテムは ${0} としてマークされています。 アイテムには、追加のセキュリティー制限がある可能性があります。",
		authenticated_users: "認証ユーザー",
		realm_users: "${0} 人のユーザー",
		denyAll: "すべて拒否",
		allowAll: "すべて許可",
		remove_direct_text: "変更内容を保存すると、このメンバーの権限がアイテムから削除されます。",
		remove_single_inheritance_text: "変更内容を保存すると、このメンバーの権限が、アイテムから、またそのアイテムからセキュリティーを<br>継承するように構成されている直下の子から削除されます。<p>続行しますか?",
		remove_infinite_inheritance_text: "変更内容を保存すると、このメンバーの権限が、アイテムから、またそのアイテムからセキュリティーを<br>継承するように構成されているすべての子孫から削除されます。<p>続行しますか?",
		remove_inheritance_text: "変更内容を保存すると、このメンバーの権限が、アイテムから、またそのアイテムからセキュリティーを<br>継承するように構成されているすべての子孫から削除されます。 このアイテムから継承される<br>これらの権限のみが残ります。<p>続行しますか?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "${0} のこれらの権限を削除",

		security_proxy_text: "このアイテムのセキュリティーは読み取り専用です。",
		security_proxy_declared_text: "このアイテムのセキュリティーは、セキュリティー・プロキシーによって定義されているため、読み取り専用です。",
		security_proxy_hover_help: "このアイテムのセキュリティーは、リポジトリー内の別のオブジェクト上で設定されるセキュリティーによって制御されます。",
		add_permissions_label: "権限の追加",
		permission_propagation_direct: "このフォルダーのみ",
		permission_propagation_onelevel: "このフォルダーと 1 つ下のレベル",
		permission_propagation_alllevels: "このフォルダーとすべての下位レベル",
		document_propagation_label: "アクセス権限の設定対象:",
		document_propagation_FOLDER: "フォルダー",
		document_propagation_DOCUMENT: "ドキュメント",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "認証ソース:",

		/* Versions Widget */
		object_versions_selector_label: "バージョン:",
		object_versions_label: "バージョン",
		object_type_document_label: "ドキュメント:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "ファイリングされているフォルダー",
		folders_filed_in_folder_col_hdr: "フォルダー",
		folders_filed_in_path_col_hdr: "パス",
		folders_filed_in_containment_name_col_hdr: "コンテナー名",
		folders_filed_in_creator_col_hdr: "作成者",
		folders_filed_in_date_created_col_hdr: "作成日",

		/* Parent Documents */
		properties_parent_documents_label: "親ドキュメント",

		/* Select object dialog */
		select_object_title: "アイテムを選択",
		select_object_breadCrumb_version_prefix: "バージョン: ",
		show_versions_label: "バージョンの表示",
		use_current_version_label: "現在のバージョンの使用",
		use_released_version_label: "リリース済みバージョンの使用",

		/* Select content class dialog */
		select_class: "クラスの選択",
		/* Select Search dialog */
		select_search: "検索の選択",

		/* Show hyperlink dialog */
		show_hyperlink_title: "リンクの表示",
		show_hyperlink_intro: "リンクは、E メール、チャット、Web ページにコピーして貼り付けることができます。 アイテムに複数のバージョンがある場合は、リンク先にするバージョンを指定してください。",
		show_hyperlink_intro_no_version_select: "リンクは、E メール、チャット、Web ページにコピーして貼り付けることができます。",
		show_text_label: "バージョン:",
		released_button_label: "リリース済み",
		current_button_label: "現行",
		select_button_label: "特定のバージョン",
		show_hyperlink_no_released_version_msg: "このドキュメントのリリース済みバージョンは存在していません。",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "ワークフローの起動",
		edit_workflow_title: "ワーク・アイテムのプロパティー",
		start_workflow_intro: "ワークフローを起動して、選択されたアイテムを処理します。 ワーク・アイテムを特定のユーザーに割り当てる場合は、所有者を指定してください。",
		edit_workflow_intro: "選択したワーク・アイテムのプロパティーを編集できます。 ワーク・アイテムを別のユーザーに再割り当てする場合は、所有者を指定してください。",
		workflow_field_label: "ワークフロー:",
		priority_field_label: "優先順位:",
		owner_field_label: "所有者:",
		start_button_label: "開始",
		save_button_label: "保存",
		owner_value_hint: "最大 32 文字の英数字の文字列を入力します。 文字列にはスペースまたは次の文字のみを使用できます。a-z、A-Z、0-9、および ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "コンテンツ・エレメント",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "値が無効です。 値にはスペースまたは次の文字のみを使用できます。a-z、A-Z、0-9、および ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "ワーク・アイテムの重要度を示す 1 から 32000 までの値を入力してください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "値が無効です。 優先度は 1 から 32000 までの値でなければなりません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "ワークフロー名は存在しません。",

		/* Suspend work items in workflow */
		suspend_workitems_title: "ワークフローの中断",
		suspend_workitems_intro: "ワークフローのワーク・アイテムを中断した場合、それが再開されるまでワーク・アイテムは処理できません",
		suspend_workitems_options_label: "選択されたワーク・アイテムの中断:",
		suspend_until_resume_label: "手動で再開されるまで",
		suspend_until_date_label: "期限",
		suspend_for_duration_label: "期間",
		suspend_for_duration_hours: "時間",
		suspend_for_duration_days: "日",
		suspend_for_duration_weeks: "週",
		suspend_for_duration_months: "月",
		suspend_for_duration_years: "年",
		suspend_button_label: "中断",
		suspend_duration_value_hint: "1 から 99 までの範囲の期間の値を入力してください。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "値が無効です。 値の範囲は 1 から 99 までです。",

		/* Remove from workflow */
		remove_workflow_title: "ワークフローから削除",
		remove_workflow_confirmation: "選択したアイテムをワークフローから削除しますか?<br>${0} 個のアイテムが選択されました。",
		remove_workflow_button_label: "削除",

		/* Unfile dialog */
		unfile_dialog_title: "フォルダーから削除",
		unfile_dialog_remove_from_folder_label: "次から削除:",
		unfile_dialog_info_text: "アイテムをフォルダーから削除できます。 ただし、アイテムをすべてのフォルダーから削除しても、そのアイテムはリポジトリーからは削除されません。 検索を実行することにより、引き続きアイテムを取得できます。 表示特権が付与されているフォルダーのみがこのリストに表示されます。",
		unfile_dialog_select_all: "すべてを選択",
		unfile_dialog_deselect_all: "すべてクリア",
		unfile_dialog_remove_button_label: "削除",
		unfile_dialog_select_folder_col_hdr: "フォルダーの選択",
		unfile_dialog_folder_col_hdr: "フォルダー",
		unfile_dialog_path_col_hdr: "パス",
		unfile_dialog_not_filed_msg: "このアイテムはどのフォルダーにも存在しません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "このアイテムが存在するフォルダーからこのアイテムを削除するための適切な権限が付与されていません。",
		unfile_dialog_folder_not_selectable_tooltip: "このフォルダーからこのアイテムを削除するための適切な権限が付与されていません。",
		unfile_multi_prompt: "選択したアイテムを ${0} フォルダーから削除しますか?",
		unfile_large_number_items_confirmation_question: "${1} フォルダーからの削除対象として ${0} アイテムを選択しました。<br/>多数のアイテムをフォルダーから削除すると、長時間かかる場合があります。<br/>続行しますか?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "開く",
		move_to_folder_title: "フォルダーに移動",
		move_to_folder_button_caption: "移動",
		move_to_folder_label: "移動先:",
		add_to_folder_title: "フォルダーに追加",
		add_to_folder_button_caption: "追加",
		add_to_folder_label: "追加先:",
		copy_to_folder_title: "フォルダーにコピー",
		copy_to_folder_button_caption: "コピー",
		copy_to_folder_label: "コピー先:",
		copy_to_folder_delete_label: "コピーが完了した後、選択したアイテムを Box から削除します。",
		move_from_folder_label: "移動元:",
		move_file_info_text: "アイテムを 1 つのフォルダーから別のフォルダーに移動できます。",
		move_folder_info_text: "フォルダーを 1 つの親フォルダーから別のフォルダーに移動できます。",
		add_doc_to_folder_info_text: "アイテムを 1 つ以上のフォルダーに追加できます。 アイテムが特定のフォルダーに既に存在する場合、アイテムはそのフォルダーではそのまま保持され、指定されたそれ以外のフォルダーに追加されます。",
		copy_doc_to_folder_info_text: "フォルダーにアイテムをコピーできます。",
		box_copy: "Box Copy",
		box_copy__button_caption: "コピー",
		box_copy_to_info_text: "Box から選択されているアイテムをコピーする先のリポジトリーとフォルダーを選択します。",
		box_copy_from_info_text: "Box から選択されているアイテムをコピーする先のリポジトリーとフォルダーを選択します。",
		box_copy_version_info_text: "新規ドキュメントを追加するには、リポジトリーとフォルダーを選択します。 新しいバージョンをチェックインするには、リポジトリーとドキュメントを選択します。",
		admin_box_copy: "Box Copy",
		admin_box_copy_hover: "このオプションによりユーザーは、ドキュメントを Box にコピーできます。",

		no_permission_to_copy_version_msg: "選択したドキュメントの新しいバージョンとしてドキュメントを Box からコピーできません。 選択したドキュメントを編集するための適切な権限がないか、選択したドキュメントが別のだれかによってチェックアウトされています。",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "このアイテムが存在するフォルダーからこのアイテムを削除するための適切な権限が付与されていません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "このフォルダーからこのアイテムを削除するための適切な権限が付与されていません。",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "このアイテムはどのフォルダーにもファイリングされていないため、移動できません。 別のアイテムを選択してください。",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "ワークフローの起動",
		subscriptions_dialog_available_items_label: "使用可能なアイテム:",
		subscriptions_dialog_info_text: "起動するワークフローを指定します。",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "名前",
		subscriptions_dialog_desc_col_hdr: "説明",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "ロールの管理",
		manageroles_dialog_info_text: "このプロセス・アプリケーション・スペースに関連付けられた各ロールのユーザーのリストを変更できます。",
		manageroles_dialog_members_label: "メンバー",
		manageroles_dialog_roles_label: "ロール",
		manageroles_dialog_add_button_label: "ユーザーおよびグループの追加",
		manageroles_dialog_remove_button_label: "削除",
		manageroles_dialog_save_button_label: "保存",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "このアイテムに関連付けられたワークフローはありません。",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "ワークフロー設定",
		workflow_pref_dialog_info_text: "E メール通知を受け取るワークフロー・イベントを指定します。 代行者に指定するユーザーを選択することで別の担当者に作業を送るオプションを有効にすることもできます。",

		workflow_pref_general: "一般",
		workflow_pref_email_address: "E メール・アドレス",
		workflow_pref_email_address_hover: "ワークフロー通知を受け取る E メール・アドレスを指定します。",
		workflow_pref_preferred_locale: "言語",
		workflow_pref_preferred_locale_hover: "E メール通知の表示言語を指定します。",

		workflow_pref_work_item_notice: "ワーク・アイテム通知",
		workflow_pref_step_new_assignment: "新しいワーク・アイテムが自分に割り当てられたとき",
		workflow_pref_step_new_assignment_hover: "新しいワーク・アイテムを受け取ったときに自分に通知してください。",
		workflow_pref_step_expired_deadline: "ワーク・アイテムの期限を過ぎたとき",
		workflow_pref_step_expired_deadline_hover: "ワーク・アイテムの期限に間に合わなかったときに自分に通知してください。",
		workflow_pref_step_reminders: "ワーク・アイテムの期限に近づいたとき",
		workflow_pref_step_reminders_hover: "ワーク・アイテムの期限に近づいたときにワーク・アイテムに関するメモを自分に送信してください。",

		workflow_pref_originator_notice: "オリジネーター通知",
		workflow_pref_milestone_reached: "マイルストーンに到達したとき",
		workflow_pref_milestone_reached_hover: "自分が開始したワークフローでマイルストーンに到達したときに自分に通知してください。",

		workflow_pref_tracker_notice: "ワークフロー・トラッカー通知",
		workflow_pref_tracker_new_assignment: "新しいトラッカー・アイテムが自分に割り当てられたとき",
		workflow_pref_tracker_new_assignment_hover: "自分がトラッキングしているワークフローが起動されたときに自分に通知してください。",
		workflow_pref_tracker_deadline_reminders: "ワークフローの期限が近づいているとき",
		workflow_pref_tracker_deadline_reminders_hover: "ワークフローの期限に近づいたときにワークフローに関するメモを自分に送信してください。",
		workflow_pref_tracker_deadline_expired: "ワークフローの期限を過ぎたとき",
		workflow_pref_tracker_deadline_expired_hover: "ワークフローの期限を過ぎたときに自分に通知してください。",
		workflow_pref_tracker_exception: "ワークフロー・エラーが発生したとき",
		workflow_pref_tracker_exception_hover: "ワークフロー例外またはワークフロー・エラーが発生したときに自分に通知してください。",
		workflow_pref_tracker_expired_deadline: "ステップの有効期限が切れています",
		workflow_pref_tracker_expired_deadline_hover: "自分がトラッキングしているワークフローでステップの期限が切れたときに自分に通知します。",
		workflow_pref_tracker_milestone_reached: "マイルストーンに到達したとき",
		workflow_pref_tracker_milestone_reached_hover: "自分がトラッキングしているワークフローでマイルストーンに到達したときに自分に通知してください。",

		workflow_pref_out_notice: "不在",
		workflow_pref_proxy_user: "代行者に指定",
		workflow_pref_proxy_user_hover: "このオプションは、自分が不在または休暇のときなどに、作業を別のユーザーに自動的に送るために使用します。",
		workflow_pref_workflow: "ワークフロー",
		workflow_pref_on: "次の日付",
		workflow_pref_off: "オフ",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "ワークフローの起動",
		transfered_workflows_dialog_info_text: "起動するワークフローを選択します。",
		transfered_workflows_dialog_available_items_label: "使用可能なアイテム:",
		transfered_workflows_dialog_select_button_label: "起動",
		transfered_workflows_dialog_name_col_hdr: "名前",
		transfered_workflows_dialog_no_item_found: "転送されたワークフローは見つかりませんでした。",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "ワークフローの転送",
		transfer_workflow_dialog_info_text: "ワークフロー・システムに転送するワークフローを選択します。",
		transfer_workflow_dialog_use: "このワークフロー名を使用",
		transfer_workflow_dialog_use_another: "別のワークフロー名を使用",
		transfer_workflow_dialog_in_use: "ワークフロー名: ",
		transfer_workflow_dialog_transfer_button_label: "転送",
		transfer_workflow_dialog_no_items_found: "転送されたワークフローは見つかりませんでした。",
		transfer_workflow_dialog_use_hover: "ワークフロー定義から現在のワークフロー名を指定します。",
		transfer_workflow_dialog_another_hover: "別のワークフロー名を指定するか、既存の転送されたワークフロー名を再利用します。",

		/*Search In control*/
		search_in_title: "検索場所:",
		search_in_teamspaces: "チームスペース",
		search_in_repositories: "リポジトリー",
		search_in_thisteamspaces: "このチームスペース",

		ajaxViewer_save: "アノテーションの保存",
		ajaxViewer_print: "印刷プレビュー",
		ajaxViewer_firstPage: "最初のページ",
		ajaxViewer_previousPage: "前のページ",
		ajaxViewer_nextPage: "次のページ",
		ajaxViewer_lastPage: "最後のページ",
		ajaxViewer_unknownPageCount: "1/?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} / ${1}",
		ajaxViewer_zoomOut: "ズームアウト",
		ajaxViewer_zoomIn: "ズームイン",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "幅に合わせる",
		ajaxViewer_fitHeight: "高さに合わせる",
		ajaxViewer_fitPage: "ページに合わせる",
		ajaxViewer_rotate270: "270 度回転",
		ajaxViewer_rotate90: "90 度回転",
		ajaxViewer_rotate180: "180 度回転",
		ajaxViewer_darken: "暗くする",
		ajaxViewer_lighten: "明るくする",
		ajaxViewer_lessContrast: "コントラストを下げる",
		ajaxViewer_moreContrast: "コントラストを上げる",
		ajaxViewer_invert: "反転",
		ajaxViewer_createHighlight: "ハイライト",
		ajaxViewer_createNote: "アノテーションを付ける",
		ajaxViewer_editAnnotation: "アノテーションのプロパティーを編集",
		ajaxViewer_deleteAnnotation: "アノテーションの削除",
		ajaxViewer_editAnnotationTitle: "アノテーションのプロパティーを編集",
		printableView_print: "印刷",
		printableView_close: "閉じる",

		search_results_dropdown_button: "結果表示",
		search_results_columns_label: "検索結果表示",
		search_results_columns_description: "検索結果に表示するプロパティーを選択してください。",
		search_results_sortby_label: "ソート基準:",
		search_results_order_label: "ソート順序:",
		search_results_accending_label: "昇順",
		search_results_descending_label: "降順",
		search_results_available_properties: "使用可能",
		search_results_selected_properties: "選択済み",
		search_rank_property: "ランク (テキスト検索のみ)",
		search_name_attribute: "名前 (${0})",
		search_results_summary_enabled_label: "コンテンツの要約を有効にする (テキスト検索のみ)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "検索",
		manage_teamspace_classes_tab_title: "クラス",
		manage_teamspace_entry_templates_tab_title: "エントリー・テンプレート",
		manage_teamspace_team_tab_title: "チーム",
		manage_teamspace_roles_tab_title: "ロール",
		manage_teamspace_dialog_title: "チームスペースの変更",
		manage_teamspace_button_label: "チームスペースの変更",
		manage_teamspace_team_pane_heading: "チームの選択",
		manage_teamspace_classes_pane_heading: "クラスの選択",
		manage_teamspace_entry_templates_pane_heading: "エントリー・テンプレートの選択",
		manage_teamspace_no_rights_message: "このチームスペースを変更するための適切な権限が付与されていません。",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "チームスペース・プロパティー",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "ユーザーがチームスペースを参照するときにコンテンツ・リスト内のドキュメントとフォルダーに対して表示されるプロパティーを指定します。 また、プロパティーの表示順序も指定できます。",
		teamspace_props_sel_cols_use_default_label: "このリポジトリーの<b>「参照」</b>設定を使用する",
		teamspace_props_sel_cols_use_default_tooltip: "管理ツールでこのリポジトリーの「参照」ページに指定されている設定を使用します。",
		teamspace_props_general_tab_label: "一般",
		teamspace_props_column_props_tab_label: "表示されているプロパティー",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "インポートするファイルを選択",
		teamspace_import_template_instruction: "インポートするチームスペース・テンプレートのエクスポート・ファイルを選択できます。",
		teamspace_import_template_button_label: "インポート",
		teamspace_import_template_dialog_label: "チームスペース・テンプレートのインポート",

		/* Annotation Dialog */
		annotationDlg_title: "アノテーション",
		annotationDlg_description: "選択したドキュメントに次のアノテーションが設定されています。",
		annotationDlg_msg_noAnnotations: "アノテーションがありません。 「追加」をクリックしてアノテーションを作成してください。",
		annotationDlg_pageLabel: "ページ: ${pageNum}",
		annotationDlg_accLabel: "アクセス: ${accType}",
		annotationDlg_accLabel_public: "公開",
		annotationDlg_accLabel_private: "非公開",
		annotationDlg_accLabel_privateGroup: "非公開 (${groupName})",
		annotationDlg_copiable: "別のサーバーにコピーできます",
		annotationDlg_cannotCopy: "別のサーバーにコピーできません",
		annotationDlg_addButtonLabel: "追加",

		/* Share Dialog */
		is_shared: "共有",
		is_share_pending: "共有処理中",
		share_title: "Box Share",
		share_instructions_new: "共有ファイルのためのリンクを含む E メールを送信します。 このリンクの使用によりだれもがファイルにアクセスできます。",
		share_instructions_existing: "共有ファイルのためのリンクを含む E メールを送信します。 このリンクの使用によりだれもがファイルにアクセスできます。 だれかが既にこのファイルを共有にしていた場合、他の人の手元にもうこのリンクがある可能性があります。",
		share_instructions_another_version_shared: "共有ファイルのためのリンクを含む E メールを送信します。 このリンクの使用によりだれもがファイルにアクセスできます。 だれかが既にこのファイルの別のバージョンを共有にしていた場合、他の人の手元にもうこのリンクがある可能性があります。",
		share_buttonLabel_share: "共有",
		share_email_addresses: "送信先:",
		share_email_addresses_hover: "共有が完了すると、これらの E メール・アドレスにリンクが送信されます。 何も入力しない場合、自分の E メール・アドレスにリンクが送信されます。",
		share_email_addresses_reshare_hover: "共有が完了すると、これらの E メール・アドレスにリンクが送信されます。 何も入力しない場合、E メールは送信されません。",
		share_password: "パスワードの設定:",
		share_password_placeholder: "オプション",
		share_comments: "メッセージ:",
		share_comments_default: "Box 上で私のファイルをあなたと共有したいと思います。",
		share_myEmail: "送信元:",
		share_expiration: "リンクの有効期限の設定:",
		share_expire: "アクセスの有効期限:",
		share_expire_none: "有効期限なし",
		share_allowDownload: "ダウンロードを許可",
		share_add: "追加",
		share_advanced_instructions: "ダウンロード、有効期限、およびパスワードの設定が、Box 内の共有ファイルに適用されます。",
		share_advanced_existing_instructions: "ダウンロード、有効期限、およびパスワードの設定が、Box 内の共有ファイルに適用されます。",
		share_options_edit_warning: "重要: これらの設定値に変更を加えると、以前から既にこのリンクを持っている人も含め、このリンクを使用するすべての人に影響します。",
		share_link: "リンク:",
		share_email_addresses_placeholder: "E メール・アドレス",
		share_email_address_placeholder: "E メール・アドレス",
		share_email_address_invalid: "有効な E メール・アドレスを入力してください。",
		share_cannot_share_with_self: "自分自身とファイルを共有することはできません。 別のユーザーを指定してください。",
		share_selected_version_with_minor_warning_hover: "バージョン ${0} のドキュメントは共有されています。 バージョン ${1} を選択しました。<br><br><b>警告</b>: バージョン ${1} を共有すると、バージョン ${2} はあなたがバージョン ${1} の共有を削除するまで他の誰も共有できません。",
		share_selected_version_hover: "バージョン ${0} のドキュメントは共有されています。 バージョン ${1} を選択しました。",
		share_selected_version_message: "重要: バージョン ${0} のドキュメントは共有されています。 バージョン ${1} を選択しました。",
		share_different_version_message: "重要: バージョン ${1} を選択しましたが、ドキュメントのバージョン ${0} は既に共有されています。  共有を削除してからでなければ、バージョン ${1} を共有することはできません。ただし、その代わりにバージョン ${0} へのリンクを共有することは可能です。",
		share_version_message: "重要: バージョン ${0} のドキュメントは共有されています。 共有するバージョンを選択してください。",
		share_version_new: "共有バージョン ${0}",
		share_version_new_p8_hover: "このドキュメントを共有すると、選択したバージョンのみへの固有のバージョン・リンクが作成されます。<br><br>ドキュメントが既に共有されている場合:<ul><li>それより新しいバージョンを共有できます。リンクはその新しいバージョンにリダイレクトされます。</li><li>共有を削除してからでなければ、それより前のバージョンを共有することはできません。</li></ul>",
		share_version_new_cm_hover: "このドキュメントを共有すると、選択したバージョンのみへの固有のバージョン・リンクが作成されます。<br><br>ドキュメントが既に共有されている場合:<ul><li>それより新しいバージョンを共有できます。リンクはその新しいバージョンにリダイレクトされます。</li><li>それより前のバージョンを共有することはできません。</li></ul>",
		share_version_update: "共有バージョン ${0} (共有オプションを更新してください)。",
		share_version_update_p8_hover: "このドキュメントを共有すると、固有のバージョンのみへのリンクが維持されます。<br><br>ドキュメントが既に共有されている場合:<ul><li>それより新しいバージョンを共有できます。リンクはその新しいバージョンにリダイレクトされます。</li><li>共有を削除してからでなければ、それより前のバージョンを共有することはできません。</li></ul>",
		share_version_update_cm_hover: "このドキュメントを共有すると、固有のバージョンのみへのリンクが維持されます。<br><br>ドキュメントが既に共有されている場合:<ul><li>それより新しいバージョンを共有できます。リンクはその新しいバージョンにリダイレクトされます。</li><li>それより前のバージョンを共有することはできません。</li></ul>",
		share_version_change_to_current: "共有バージョン ${0} (選択したバージョンで共有を更新してください)。",
		share_version_change_to_current_p8_hover: "このドキュメントを共有すると、選択したバージョンのみを指すリンクが更新されます。<br><br>ドキュメントが既に共有されている場合:<ul><li>それより新しいバージョンを共有できます。リンクはその新しいバージョンにリダイレクトされます。</li><li>共有を削除してからでなければ、それより前のバージョンを共有することはできません。</li></ul>",
		share_version_change_to_current_cm_hover: "このドキュメントを共有すると、選択したバージョンのみを指すリンクが更新されます。<br><br>ドキュメントが既に共有されている場合:<ul><li>それより新しいバージョンを共有できます。リンクはその新しいバージョンにリダイレクトされます。</li><li>それより前のバージョンを共有することはできません。</li></ul>",
		share_repository: "共有ファイルのリポジトリー",
		share_repository_hover: "使用する Box リポジトリーが表示されていない場合、「リポジトリー」ページに新しい Box リポジトリーを追加できます。",
		share_options: "共有のオプション",
		unshare_confirm: "共有を削除すると、共有リンクはすべて無効になります。それには、以前に他のユーザーにより送信された共有リンクも含まれます。 他のユーザーのうちこのドキュメントを共有することを望むすべてのユーザーは、もう一度、オリジナルのドキュメントを選択してそれを共有する必要があります。<br><br>共有を削除しますか?",
		unshare_button: "Box Share の削除",
		admin_share: "Box Share のサービス:",
		admin_share_hover: "Box Share が有効なリポジトリーからのドキュメントをユーザーが共有できるようにします。 ドキュメントの共有には、ファイルを Box にコピーしたり、リンクを作成したり、リンクを E メールで送信したりすることが含まれます。",
		admin_my_email_modifiable: "ユーザーが送信元 E メール・アドレスを変更することを許可",
		admin_my_email_modifiable_hover: "デフォルトで、Box Share では、ユーザーの E メール・アドレスは読み取り専用であり、Box ユーザー・アカウントを表すユーザーと E メール・アドレスのマッピングから取得します。<br><br>このオプションを選択すると、ユーザーが共有機能を利用する際に E メール・アドレスを編集できるようになります。ただし、E メール・アドレスの妥当性は検証されません。",
		admin_repos_admin_user: "共有管理者:",
		admin_repos_admin_user_hover: "Box Share のサービスを有効にしたデスクトップがあり、この Box リポジトリーが共有ファイル用リポジトリーとして選択されている場合に、共有管理者を設定します。<br><br>「設定」をクリックし、有効な Box 管理者アカウントを使用して Box にログインしてください。<br><br>共有管理者は、Box 内で無制限のストレージを持つように構成されている Box 管理者ユーザーでなければなりません。",
		admin_repos_admin_user_not_set_warning: "選択されているリポジトリーに対して Box 管理者が構成されていません。<br><br>選択されているリポジトリーの Box 管理者を設定するまで、または Box 管理者が構成されている別の Box リポジトリーを選択するまで、Box Share のサービスは無効です。<br><br>Box 管理者は、リポジトリーの「一般」ページの中の Box Share サービスのセクションで設定できます。",
		admin_share_not_configured_warning: "Box Share サービスを使用するためには、まずサーバー認証がある Box リポジトリーを追加して選択しておく必要があります。",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online の構成",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "このデスクトップにアクセスするユーザーが Office Online Server を使用して Office ドキュメントを編集できるようにするかどうかを指定します。",		
		admin_office_online_allow_collaborative_editing: "共同編集を許可する",
		admin_office_online_allow_collaborative_editing_hover: "複数のユーザーが同じドキュメントの作業をすることを許可します。 ドキュメントの編集を 1 ユーザーに制限する場合は、このオプションをクリアします。",
		admin_office_online_repository_not_set_warning: "Office Online サービスを有効にするためには、まずリポジトリー上のサービスを有効にし、Microsoft Office Online Server の URL を指定しておく必要があります。 <b>「リポジトリー」</b>をクリックし、リポジトリーを選択して、<b>「編集統合」</b>タブで、サービスを有効にします。 <b>「設定」>「一般」</b>をクリックして、Microsoft Office Online Server の URL を入力します。",
		admin_settings_office_online_server_enable_hover: "Office ドキュメントに対して Office Online Server を使用するかどうかを指定します。",
		admin_office_online_server_url: "Microsoft Office Online Server の URL",
		admin_office_online_server_url_hover: "他のアプリケーションが Office Online Server と通信するための URL を指定します。 URL の形式は、http://server_name:port_number/hosting/discovery です。",
		admin_office_online_server_Verified: "検証済み",
	    admin_office_online_server_Failed: "<b>失敗</b>",

		admin_repcfg_office_online_service_p8_hover: "Office Online Server を使用するようにリポジトリーを初期化するには、Office アプリケーションごとに初期テンプレート・ファイルを追加します。 テンプレートが指定されない場合は、デフォルトのテンプレートが使用されます。",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server 統合",
		admin_repcfg_office_online_service_url_not_set_warning: "Office Online Server を有効にするためには、まず Microsoft Office Online Server の URL を指定しておく必要があります。 「設定」>「一般」をクリックして、URL を入力します。",
		admin_repcfg_office_online_word_template_name: "デフォルトの Word テンプレート",
		admin_repcfg_office_online_excel_template_name: "デフォルトの Excel テンプレート",
		admin_repcfg_office_online_powerpoint_template_name: "デフォルトの PowerPoint テンプレート",
		admin_repcfg_office_online_blank_template_description: "これは、ユーザー独自のテンプレートが追加されない場合に使用されるデフォルトのテンプレートです。",
		/* Edit Service settings */
		admin_icn_edit_title: "構成の編集",	
	    admin_icn_edit_files_cleanup_interval: "一時ファイルのクリーンアップ間隔 (日数):",
	    admin_icn_edit_files_cleanup_interval_hover: "一時ファイルを ICN 編集クライアントに保持する時間を設定できます。 デフォルトの時間は 20 日です。 最大の時間は 20 日、最小の時間は 1 日です。",
	    admin_icn_edit_service_integration: "編集サービス統合",
	    admin_icn_edit_service_integration_intro: "編集サービスを使用すると、ユーザーが自分のコンピューターにインストールされたネイティブ・アプリケーションでファイルを簡単に追加または編集できるようになります。<br><br><b>重要:</b> 編集サービスを有効化した場合は、まずリポジトリーの構成を保存する必要があります。その後、事前定義されたカテゴリーを編集できるようになります。",
		admin_icn_edit_service: "編集サービス:",
		admin_icn_edit_enable_hover: "編集サービスを使用するには、次の操作が必要です。<ul><li>リポジトリー上でサービスを有効にする</li><li>使用する環境のデスクトップ上でサービスを有効にする</li><li>IBM Content Navigator 編集クライアントをユーザーのワークステーションにインストールする</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "有効化",
		admin_icn_edit_disable: "無効化",
		admin_icn_edit_create_new_category: "新しいカテゴリー",
		admin_icn_edit_delete_category: "カテゴリーの削除",
		admin_icn_edit_edit_category: "カテゴリーの編集",
		admin_icn_edit_disable_category: "カテゴリーの無効化",
		admin_icn_edit_enable_category: "カテゴリーの有効化",
		admin_icn_edit_new_category_dialog_title: "新しいカテゴリー",
		admin_icn_edit_edit_category_dialog_title:"カテゴリーの編集",
		admin_icn_edit_new_category_dialog_instructions: "ドキュメント・カテゴリーでは、テンプレートを編集サービスの特定の MIME タイプに関連付けることができます。 例えば、一連のテンプレートを PDF ファイルに関連付けることにより、ユーザーが IBM Content Navigator 編集クライアントからファイルを追加または編集するときにテンプレートを適用できるようになります。 <br><br><b>重要:</b> 作成したカテゴリーにテンプレートを追加するには、事前にリポジトリー構成を保存する必要があります。 ",
		admin_icn_edit_edit_category_dialog_instructions: "このカテゴリーにテンプレートを追加するには、事前にリポジトリー構成を保存する必要があります。 ",
		admin_icn_edit_delete_category_dialog_instructions: "このカテゴリーと、このカテゴリーに関連付けられたすべてのテンプレートを削除しますか?<br><br><b>重要:</b> 変更内容をリポジトリーに保存するまでは、変更は永続化されません。 ",
		admin_icn_edit_category_label: "カテゴリー: ",
		admin_icn_edit_category_discription_label:"説明: ",
		admin_icn_edit_template_column_head:"テンプレート名",
		admin_icn_edit_category_duplicate_error_message: "この ID を持つカテゴリーが既に存在しています。 ",
		admin_icn_edit_word_category_description: "このカテゴリーでは、編集サービスで Microsoft Word ドキュメントに対して使用可能なテンプレートを定義します。 ",
		admin_icn_edit_excel_category_description: "このカテゴリーでは、編集サービスで Microsoft Excel ドキュメントに対して使用可能なテンプレートを定義します。 ",
		admin_icn_edit_powerpoint_category_description: "このカテゴリーでは、編集サービスで Microsoft PowerPoint ドキュメントに対して使用可能なテンプレートを定義します。 ",

		icn_edit_add_template_dialog_title:"${0} テンプレートの追加",
		icn_edit_add_template_only_one_file_error: "1 個のファイルのみ選択できます。",
		icn_edit_add_template_file_type_error: "有効な「${0}」のテンプレート・ファイルを指定する必要があります。<br><br>選択された文書の MIME タイプは ${1} です。<br><br>有効な MIME タイプ: ${2}。",
		icn_edit_change_template_dialog_title: "${0} テンプレートの編集",
		icn_edit_action_in_new_menu_name:"${0} ドキュメント",
		icn_edit_action_in_new_menu_submenu_oo_name: "Office Online による",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "Desktop アプリによる",
		icn_edit_new_document_dialog_title: "新しい ${0} ドキュメント",
		icn_edit_new_document_dialog_intro: "新しい ${0} ドキュメントを作成し、リポジトリーに追加します。 選択した編集サービス・テンプレートを使用してドキュメントが作成されます。", 
		icn_edit_select_edit_service_template: "テンプレートを選択",
		icn_edit_edit_service_template: "編集サービスのテンプレート:",
		icn_edit_new_document_category_no_templates_message:"このカテゴリーにはテンプレートがありません。このカテゴリーにテンプレートを追加するには、管理者に連絡してください。",
		icn_edit_installer: "IBM Content Navigator 編集のインストーラー",
		admin_icn_cm_classes_and_roles_settings: "クラスとロールの設定",
		admin_repcfg_classes_and_roles_warning: "Office Online サービスと編集サービスによってテンプレートを作成/編集/使用したりドキュメントのドラフトを作成したりできるクラスとユーザーまたはユーザー・グループを指定します。",
		admin_repcfg_classes_and_roles_click_warning: "ここをクリックしてください。",
		/* Edit Service settings END */
		share_no_my_email_error: "ドキュメントの共有に必要な E メール・アドレスを識別しようとして、問題が発生しました。",
		share_no_my_email_error_explanation: "ユーザー ID ${0} でログインしましたが、このユーザー ID は E メール・アドレスにマップされていません。",
		share_no_my_email_error_userResponse: "再度ログインを試行するか、または別のユーザー ID を使用してログインしてください。 問題が解決しない場合は、このエラーをシステム管理者に連絡してください。",
		share_no_my_email_error_adminResponse: "ユーザー ID ${0} は E メール・アドレスにマップされておらず、デスクトップ ${1} においてユーザーは Box Share のサービスのための E メール・アドレスの編集を許可されていません。<br><br>以下のいずれかの解決方法を試してください。<br>E メール・マッピング・プラグインが登録されていることを確認します。<br>emailMappingPlugin.json ファイルにユーザー ID ${0} とそのユーザーの E メール・アドレスが含まれていることを確認してから、この E メール・マッピング・プラグインをビルド、構成、および登録します。<br>E メール・マッピング・プラグインも FileNet P8 E メール・アドレス・ディレクトリーも使用せず、ユーザーがドキュメント共有時に自分で E メール・アドレスを入力できるようにする場合は、Box Share のサービスに関するデスクトップの設定値に変更を加えて、ユーザーが別の E メール・アドレスからリンクを送信するのを許可します。",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "このドキュメントのうち、さらに新しいバージョンが共有されているため、このドキュメントについて選択されたバージョンを共有することはできません。",
		share_later_version_shared_error_explanation: "以前に共有されたドキュメントについて、より古いバージョンを共有することはできません。",
		share_later_version_shared_error_userResponse: "ドキュメントのさらに新しいバージョンへのリンクを送信するには、まずその新しいバージョンを選択した後、共有アクションを使用する必要があります。<br><br>ドキュメントのうち選択されたバージョンを共有するには、まずそのドキュメントのより新しいバージョンの共有を削除する必要があります。",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "新規メッセージ",
		email_from: "開始:",
		email_to: "終了:",
		email_cc_link: "CC",
		email_bcc_link: "Bcc",
		email_cc: "CC:",
		email_bcc: "Bcc:",
		email_address_invalid: "有効な E メール・アドレスを入力してください。",
		email_subject: "件名:",
		email_message: "メッセージ:",
		email_message_placeholder: "メッセージの追加",
		email_attachments: "添付ファイル:",
		email_links: "リンク:",
		email_send: "送信",
		email_dont_send: "送信しない",
		email_subject_reminder: "件名の確認",
		email_subject_reminder_confirm: "このメッセージを件名なしで送信しますか?",
		email_missing_from_error: "E メールの送信に必要な送信元 E メール・アドレスを識別しようとして、問題が発生しました。",
		email_missing_from_error_explanation: "ユーザー ID ${0} でログインしましたが、このユーザー ID は E メール・アドレスにマップされていません。",
		email_missing_from_error_userResponse: "再度ログインを試行するか、または別のユーザー ID を使用してログインしてください。 問題が解決しない場合は、このエラーをシステム管理者に連絡してください。",
		email_missing_from_error_adminResponse: "ユーザー ID ${0} は E メール・アドレスにマップされておらず、デスクトップ ${1} においてユーザーは送信元 E メール・アドレスの編集を許可されていません。<br><br>以下のいずれかの解決方法を試してください。<br>E メール・マッピング・プラグインが登録されていることを確認します。<br>emailMappingPlugin.json ファイルにユーザー ID ${0} とそのユーザーの E メール・アドレスが含まれていることを確認してから、この E メール・マッピング・プラグインをビルド、構成、および登録します。<br>E メール・マッピング・プラグインも FileNet P8 E メール・アドレス・ディレクトリーも使用せず、ユーザーが E メール送信時に自分の E メール・アドレスを入力できるようにする場合は、デスクトップのための E メール設定値に変更を加えて、ユーザーが送信元 E メール・アドレスを変更するのを許可することができます。",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "ドキュメントを開くことができません。",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator は、IBM Content Navigator 編集クライアントに接続できません。",
		open_edit_document_with_native_application_error_userResponse: "使用しているワークステーションに IBM Content Navigator 編集クライアントをインストールし、開始します。 その後、ドキュメントをもう一度開いてください。",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "ドキュメントを開くことができません。",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator は、IBM Content Navigator 編集クライアントに接続できません。",
		connect_to_the_streamline_service_error_userResponse: "使用しているワークステーションに IBM Content Navigator 編集クライアントをインストールし、開始します。 その後、ドキュメントをもう一度開いてください。",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator でドキュメント共有が正しく構成されていません。",
		share_not_configured_error_explanation: "ドキュメントを共有するには、その前に、Box 共有機能を正しく構成する必要があります。",
		share_not_configured_error_userResponse: "管理者に連絡し、Box 共有機能を構成するように要請してください。",
		share_not_configured_error_adminResponse: "ドキュメント共有の前に、以下のアイテムを構成する必要があります。<ul><li>管理ツールの設定でタスク・マネージャー・サービスを有効にする必要があります。</li><li>リポジトリーの中でタスク・マネージャー接続 ID を構成する必要があります。</li><li>リポジトリーで共有を有効にする必要があります。</li><li>デスクトップでの共有のために Box リポジトリーを選択する必要があります。</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "新しいバージョンでプロパティー変更が保存されませんでした",
		checkin_cors_save_attributes_error_explanation: "バージョンは作成されましたが、プロパティー変更は保存されませんでした。 ドキュメントのチェックアウトはまだ可能です。",
		checkin_cors_save_attributes_error_userResponse: "「プロパティー」コンテキスト・メニュー項目を使用して、ドキュメントをアンロックしてプロパティーを更新してください。",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "新しいドキュメントでプロパティー変更が保存されませんでした",
		add_cors_save_attributes_error_explanation: "ドキュメントは作成されましたが、プロパティー変更は保存されませんでした。",
		add_cors_save_attributes_error_userResponse: "「プロパティー」コンテキスト・メニュー項目を使用して、プロパティーを更新してください。",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "ドキュメントを開くことができません。",		
		edit_document_using_edit_service_error_explanation: "編集サービスでドキュメントを開くことができません。",
		edit_document_using_edit_service_error_userResponse: "編集サービス統合を更新するよう管理者に依頼してください。<br><br> ユーザーが編集サービスからこのドキュメントにアクセスする必要がある場合は、リポジトリーの「編集統合」ページに移動し、編集サービス統合を更新する必要があります。つまり、編集サービスをサポートできるように変更するクラスのリストにそのクラスを含めてください。",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "ドキュメントを開くことができません。",		
		edit_document_is_editing_by_oos_error_explanation: "このドキュメントは Office Online サービスで使用されています。",
		edit_document_is_editing_by_oos_error_userResponse: "ドキュメントを編集サービスで開くには、まず Office Online サービスでドキュメントを保存して閉じる必要があります。",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Cross-Origin Resource Sharing (CORS) アップロードの有効化",

		/* Email Settings */
		admin_email_settings: "E メールの設定:",
		admin_email_settings_hover: "ユーザーに使用してほしい E メール・サービスのタイプを指定します。 HTML ベースの E メール・サービスを有効にする場合、ユーザーが各自の送信元 E メール・アドレスを変更するのを許可するというオプションがあります。 Java ベースの E メール・サービスを有効にする場合は、Java をサポートするブラウザーがなければなりません。",
		admin_email_use_service: "HTML ベースの E メール・サービスを使う",
		admin_email_use_applet: "Java ベースの E メール・サービスを使う",
		admin_email_can_modify_from: "ユーザーが送信元 E メール・アドレスを変更するのを許可",
		admin_email_can_modify_from_hover: "デフォルトでは、送信元 E メール・アドレスは変更不可能になっており、それはユーザー・アカウントを表すユーザーと E メール・アドレスのマッピングから取得されます。<br><br>このオプションを選択すると、ユーザーが E メールを送信する際に E メール・アドレスを編集できるようになります。ただし、E メール・アドレスの妥当性は検証されません。",
		admin_email_use_from_as_sender: "送信元 E メール・アドレスを E メールの送信者として使用",
		admin_email_use_from_as_sender_hover: "デフォルトでは、ユーザーの E メールには、有効な送信元 E メール・アドレスが使用されます。 その E メール・アドレスは、アプリケーション・サーバー上の CNMailSession メール・セッションによって定義されます。 このオプションは、E メールにおいてユーザーの E メール・アドレスを使用するように指定する場合に選択します。",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "新規アノテーション",
		addAnnotationDlg_labelContents: "コンテンツ:",
		addAnnotationDlg_labelAccess: "アクセス:",
		addAnnotationDlg_labelPublic: "公開",
		addAnnotationDlg_labelPrivate: "非公開",
		addAnnotationDlg_labelPrivateGroup: "グループ内のみに公開",
		addAnnotationDlg_labelGroup: "グループ",
		addAnnotationDlg_labelCopiable: "このアノテーションは、別のサーバーにコピーできます。",
		addAnnotationDlg_buttonLabel_save: "保存",

		/* Skip navigation */
		skipNavigation_title_main: "メイン・コンテンツにスキップ",
		skipNavigation_title_menu: "ナビゲーション・ボタンにスキップ",
		skipNavigation_label_main: "メイン・コンテンツにスキップ",
		skipNavigation_label_menu: "ナビゲーション・ボタンにスキップ",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "チームスペースの管理",
		manage_teamspace_pane_instance_hdr: "チームスペース",
		manage_teamspace_pane_template_hdr: "テンプレート",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "前方スクロール",
		scroll_back: "後方スクロール",

		breadcrumb_separator_open: "ノードを開く",
		breadcrumb_separator_close: "ノードを閉じる",

		/* DropDownLink */
		drop_down_link_summary: "${0}、${1}",

		/* Properties display pane */
		no_item_selected: "アイテムが選択されていません。",

		/* eds */
		eds_url: "外部データ・サービス URL:",
		eds_request_timeout: "サービス要求タイムアウト (秒):",
		eds_is_required: "EDS を利用できないときにプロパティーの値を変更するアクションをユーザーが実行するのを防止します",

		/* eforms */
		eform_signing_pane_welcome: "フォームへの署名",
		eform_signing_button_label: "署名",
		eform_signing_pane_delete: "署名の削除",
		eform_signing_button_label_delete: "削除",

		xtplugin_server_label: "IBM FileNet Workplace XT のサーバー URL",
		xtplugin_server_hover: "IBM FileNet Workplace XT のデプロイ先サーバーの URL (例: http://localhost:8080/WorkplaceXT) を入力します。",

		ecplugin_server_label: "IBM eClient のサーバー URL",
		ecplugin_server_hover: "IBM eClient のデプロイ先サーバーの URL (例: http://localhost:9080/eClient/s) を入力します。",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "多数のアイテムに対してアクションを実行すると、長時間かかる場合があります。 続行しますか?",
		large_number_actions_continue_button: "続行",

		large_items_actions_confirmation_question: "大きいアイテムに対してアクションを実行すると長時間かかる場合があります。 続行しますか?",

		viewer_editproperties_title: "確認",
		viewer_editproperties_title_warning: "警告",
		viewer_editproperties_save: "保存",
		viewer_editproperties_next: "次へ",
		viewer_editproperties_reset: "リセット",
		viewer_editproperties_reset_hover: "未保存データはすべて、以前保存された値にリセットされます",
		viewer_editproperties_saveandgetnext: "保存して次を取得",
		viewer_editproperties_saveandgetnext_hover: "変更を保存後、次のドキュメントを自動的に取得します",
		viewer_editproperties_prompt_save_changes: "次のドキュメントのプロパティーを変更しました<br>${0}<br><br>変更を保存しますか?",
		viewer_editproperties_prompt_discard_changes: "次のドキュメントのプロパティーを変更しました<br>${0}<br><br>ただし、1 つ以上のプロパティーに無効な値が含まれているため、変更を保存できません。 無効な値を修正するか、変更を破棄してください。<br>プロパティー・ペインに表示されている無効な値を修正しますか?",
		viewer_comments_prompt_discard_changes: "コメントが変更されました。 変更を保存しますか?",
		viewer_notelogs_prompt_discard_changes: "注釈ログが変更されました。 変更を保存しますか?",
		social_collaborated_version: "バージョン: ${0}",
		social_link_label: "実行者...",

		// social comments
		comments: "コメント",
		comments_add_hint: "コメントを追加するには、Enter キーを押します。",
		comments_hint: "コメントを入力してください。",
		comments_label: "コメントを保存するには、Enter キーまたは Tab キーを押します。 取り消す場合は Esc キーを押します。",
		comments_delete_confirmation: "選択したコメントを削除しますか?",
		comments_number: "コメント: ${0}",
		comments_save_new: "コメントが変更されました。 変更を保存せずにウィンドウを閉じますか?",

		notelogs: "注釈ログ",
		notelogs_download: "ダウンロード",
		notelog_modify: "変更を保存",
		notelog_edit: "注釈ログの編集",
		notelog_create_newVersion: "新規注釈ログ・バージョンの作成",
		notelog_add_hint: "コメントを入力し、Enter キーを押して追加してください。",
		notelog_hint: "改行するには、Shift キーと Enter キーを同時に押します。",
		notelog_add_placeholder: "注釈ログにコメントを追加するには、Enter キーを押します。",
		notelog_save_new: "注釈ログが変更されました。 変更を保存せずにウィンドウを閉じますか?",

		// P8 markings related
		cannot_remove_markings: "マーキング値を削除する権限がありません: {0}",

		// download count
		downloadcount: "ダウンロード: {0}",
		downloadcount_single: "1 件のダウンロード",
		downloadcount_multiple: "{0} 件のダウンロード",
		downloadcount_none: "これをダウンロードしたユーザーはまだいません",

		// recommendations
		recommendations: "いいね: {0}",
		recommendations_recommend: "これに「いいね」を投稿する",
		recommendations_unrecommend: "これの「いいね」を取り消す",
		recommendations_you: "あなたがこれに「いいね」を投稿しています",
		recommendations_you_and_another: "あなたと他 1 人のユーザーがこれに「いいね」を投稿しています",
		recommendations_you_and_others: "あなたと他 {0} 人のユーザーがこれに「いいね」を投稿しています",
		recommendations_another: "1 人のユーザーがこれに「いいね」を投稿しています",
		recommendations_others: "{0} 人のユーザーがこれに「いいね」を投稿しています",
		recommendations_none: "これに「いいね」を投稿したユーザーはまだいません",

		// tags
		tags: "タグ: ${0}",
		tags_delete: "${0} の削除",
		tags_none: "表示するタグがありません。",
		tags_add: "タグの追加:",
		tags_hint: "タグを追加するには、Enter キーを押します。",
		tags_hover_help: "同じタグを持つドキュメントの検索に使用できるタグまたはタグのリストを指定します。 コンマ (,)、セミコロン (;)、またはスペースを使用してタグを区切ることができます。",
		tags_hover_help_box: "同じタグを持つドキュメントの検索に使用できるタグまたはタグのコンマ区切りリストを指定します。",
		tags_no_access: "タグを追加するための適切な権限がありません。",

		//task scheduler pane
		taskPane_tooltip: "非同期タスク・ビューを開く",
		taskPane_tree: "タスク・ペインのナビゲーション・ツリー",
		taskPane_allTasks: "すべてのタスク",
		taskPane_scheduledTasks: "スケジュールされたタスク",
		taskPane_recurringTasks: "繰り返しタスク",
		taskPane_inProgressTasks: "進行中のタスク",
		taskPane_completedTasks: "完了したタスク",
		taskPane_failedTasks: "失敗したタスク",
		taskPane_disabledTasks: "無効なタスク",
		taskPane_statusScheduled: "スケジュール済み",
		taskPane_statusInProgress: "進行中",
		taskPane_statusCompleted: "完了",
		taskPane_statusFailed: "失敗",
		taskPane_statusPaused: "休止",
		taskPane_noItemSelected: "アイテムが選択されていません",
		taskSchedulerPane_scheduleInformation: "スケジュール情報",
		taskSchedulerPane_loginInformation: "ログイン情報",
		taskSchedulerPane_startImmediately: "すぐに開始",
		taskSchedulerPane_recurrence: "繰り返し",
		taskSchedulerPane_interval: "間隔",
		taskSchedulerPane_scheduleReport: "スケジュール・レポート",
		taskSchedulerPane_nameHoverHelp: "タスクの名前を入力します。",
		taskSchedulerPane_descriptionHoverHelp: "タスクの説明を入力します。 説明により、タスクを区別しやすくなります。",
		taskSchedulerPane_startTimeHoverHelp: "タスクを実行するタイミングを指定します。 今すぐタスクを実行するには、「すぐに開始」を選択します。",
		taskSchedulerPane_recurrenceHoverHelp: "繰り返し実行するようにタスクをスケジュールすることもできます。",
		taskSchedulerPane_endTimeHoverHelp: "タスクの実行を停止するタイミングを指定します。 タスクは、スケジュールされた開始時刻からスケジュールされた終了時刻まで実行されます。",
		taskSchedulerPane_usernameHoverHelp: "繰り返しタスクの場合は、タスクの実行時にサービスが認証できるように、ユーザー名を入力する必要があります。",
		taskSchedulerPane_passwordHoverHelp: "繰り返しタスクの場合は、タスクの実行時にサービスが認証できるように、指定したユーザーのパスワードを入力する必要があります。",
		taskSchedulerPane_notification: "通知",
		taskSchedulerPane_emailAddress: "E メール・アドレス",
		taskSchedulerPane_emailAddressHoverHelp: "タスクの状況に関する通知を受信する E メール・アドレスを入力します。",
		taskSchedulerPane_intervalHoverHelp: "繰り返しタスクを実行する経過時間を指定します。 間隔は時間数、日数、週数、または月数で指定できます。",
		taskSchedulerPane_scheduledStartTime: "スケジュールされた開始時刻",
		taskSchedulerPane_startTime: "開始時刻",
		taskSchedulerPane_title: "スケジュール",
		taskSchedulerPane_runNow: "今すぐ実行",
		taskSchedulerPane_runOnce: "1 回実行",
		taskSchedulerPane_runAtSchedule: "スケジュールで実行",
		taskSchedulerPane_repeats: "繰り返し",
		taskSchedulerPane_repeatsEvery: "繰り返し間隔",
		taskSchedulerPane_hourly: "毎時",
		taskSchedulerPane_daily: "毎日",
		taskSchedulerPane_weekly: "毎週",
		taskSchedulerPane_monthly: "毎月",
		taskSchedulerPane_yearly: "毎年",
		taskSchedulerPane_sunday: "日",
		taskSchedulerPane_monday: "月",
		taskSchedulerPane_tuesday: "火",
		taskSchedulerPane_wednesday: "水",
		taskSchedulerPane_thursday: "火",
		taskSchedulerPane_friday: "金",
		taskSchedulerPane_saturday: "日",
		taskSchedulerPane_starting: "開始日",
		taskSchedulerPane_after: "次の日付より後",
		taskSchedulerPane_ending: "終了日",
		taskSchedulerPane_times: "回数",
		taskSchedulerPane_days: "日",
		taskSchedulerPane_hours: "時間 (当日中)",
		taskSchedulerPane_interval: "間隔",
		taskSchedulerPane_endingDays: "終了 (日数)",
		taskSchedulerPane_never: "なし",
		taskSchedulerPane_categorization: "カテゴリー化",
		taskSchedulerPane_scheduleTask: "タスクのスケジュール",
		taskInformationPane_details: "詳細",
		taskInformationPane_errors: "エラー",
		taskInformationPane_taskInstances: "タスク・インスタンス",
		taskInformationPane_audits: "監査",
		taskInformationPane_results: "結果",
		asyncTasks: "非同期タスク",

		//entry template pane
		search_all_entry_templates: "すべてのエントリー・テンプレートを検索します。",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "フル・サイトで表示",
		mobilesite: "モバイル・サイトで表示",
		profile: "プロファイルの管理",
		office_template: "Office テンプレート:",
		select_office_template: "Office テンプレートの選択",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "「マージと分割」アクションでは、選択されたドキュメントをこのビューアーで開くことはできません。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "PDF と TIFF のドキュメント用に構成されているこのビューアーは、「マージと分割」アクションはサポートしていません。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "「マージと分割」アクションをサポートする、PDF と TIFF のドキュメント用のビューアー (Daeja ViewONE Virtual ビューアーなど) を構成するように、管理者に依頼してください。",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "「マージと分割」アクションでは、選択された PDF ドキュメントをこのビューアーで開くことはできません。",
		document_builder_pdf_unsupported_viewer_error_explanation: "PDF ドキュメント用に構成されているこのビューアーは、「マージと分割」アクションはサポートしていません。",
		document_builder_pdf_unsupported_viewer_error_userResponse: "「マージと分割」アクションをサポートする、PDF ドキュメント用のビューアー (Daeja ViewONE Virtual ビューアーなど) を構成するように、管理者に依頼してください。",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "「マージと分割」アクションでは、選択された TIFF ドキュメントをこのビューアーで開くことはできません。",
		document_builder_tiff_unsupported_viewer_error_explanation: "TIFF ドキュメント用に構成されているこのビューアーは、「マージと分割」アクションはサポートしていません。",
		document_builder_tiff_unsupported_viewer_error_userResponse: "「マージと分割」アクションをサポートする、TIFF ドキュメント用のビューアー (Daeja ViewONE Virtual ビューアーなど) を構成するように、管理者に依頼してください。",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "「マージと分割」アクションでは、選択されたドキュメントをこのビューアーで開くことはできません。",
		document_builder_unsupported_documents_error_explanation: "「マージと分割」アクションは、PDF と TIFF のドキュメントだけに対応しています。",
		document_builder_unsupported_documents_error_userResponse: "サポート対象のドキュメントを選択して、やり直してください。",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "「マージと分割」アクションでは、選択されたドキュメントの一部をこのビューアーで開くことはできません。",
		document_builder_some_unsupported_documents_error_explanation: "「マージと分割」アクションは、同じリポジトリーから開いた PDF と TIFF のドキュメントだけに対応しています。",
		document_builder_some_unsupported_documents_error_userResponse: "サポート対象のドキュメントはこのビューアーで開かれます。",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "変更されたコンテンツのチェックイン時にエラーが発生しました。",
		document_builder_checkin_failed_explanation: "変更されたコンテンツのチェックイン中に、ビューアーがエラー応答を受け取りました。",
		document_builder_checkin_failed_userResponse: "Web アプリケーション・サーバーのログ・ファイルを確認するように、システム管理者に依頼してください。",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "ドキュメントを開くことができません。",
		no_viewer_to_view_error_explanation: "システム管理者がこのドキュメントの表示をブロックしました。 このドキュメントにアクセスする必要がある場合はダウンロードできます。",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "コンテンツを作成できませんでした。",
		document_build_failed_userResponse: "ビューアーのログ・ファイルを確認するように、システム管理者に依頼してください。",
		document_build_failed_number: 3007,

		document_builder_open_failed: "ドキュメントを「マージと分割」モードで開くことができませんでした。",
		document_builder_open_failed_userResponse: "ビューアーのログ・ファイルを確認するように、システム管理者に依頼してください。",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "システムを「マージと分割」モードに切り替えることができませんでした。",
		document_builder_switch_failed_userResponse: "ビューアーのログ・ファイルを確認するように、システム管理者に依頼してください。",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "ドキュメント",
		print_service_page_setup_tab_title: "ページ設定",
		print_service_OD_print_tab_title: "プリンター・オプション",
		print_service_status_merging: "ドキュメントをマージしています...",
		print_service_status_converting: "ドキュメントを変換しています...",
		print_service_status_formatting: "ドキュメントを印刷用の形式に設定しています...",
		admin_print_service_maximum_number_to_print: "印刷できるドキュメントの最大数:",
		admin_print_service_maximum_size_to_print: "印刷できるデータの最大量 (MB):",
		admin_print_service_maximum_number_to_print_hover_help: "ユーザーが一度に印刷できるドキュメントの最大数を指定します。デフォルトの最大数は 50 です。 ドキュメント数によって印刷を制限しない場合は、この制限を 0 に設定します。",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>制約事項:</b> この設定は IBM Content Manager OnDemand ではサポートされません。<br/><br/>IBM Daeja ViewONE 印刷サービスを使用して印刷できる最大データ量を指定します。<br /><br />選択された各ドキュメントの合計サイズがこの量を超えることはできません。<br/><br/>デフォルトの制限は 200 MB です。 この制限に 200 MB を超える値を設定すると、システム・パフォーマンスに影響する恐れがあります。ドキュメント・サイズによって印刷を制限しない場合は、この制限を 0 に設定します。",
		// error printing
		print_service_error_printing: "印刷中にエラーが発生しました。",
		print_service_error_printing_userResponse: "印刷サービスのログ・ファイルを確認するよう、システム管理者に依頼してください。",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "選択されたドキュメントは大きすぎて印刷できません",
		print_service_max_content_error_explanation: "選択されたドキュメントはデータ量制限の ${0} MB を超えています。",
		print_service_max_content_error_userResponse: "選択するドキュメント数を減らすか、よりサイズの小さいドキュメントを選択して、再度印刷してください。システム管理者に連絡して、このデスクトップから一度に印刷できるアイテムの最大合計サイズを増やしてもらうこともできます。",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "アイテムを印刷できません。",
		print_service_max_number_selected_error_explanation: "一度に印刷できるアイテムの最大数は ${0} 個です。${1} 個のアイテムを印刷しようとしています。",
		print_service_max_number_selected_error_userResponse: "選択アイテムを減らして、アイテムの印刷を再試行してください。 システム管理者に連絡して、このデスクトップから一度に印刷できるアイテムの最大数を増やしてもらうこともできます。",
		print_service_max_number_selected_error_0: "最大アイテム数",
		print_service_max_number_selected_error_1: "アイテム数",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


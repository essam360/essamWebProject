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
		welcome_user: "시작, ",
		about: "정보",
		all: "모두",
		help: "도움말",
		user_session: "사용자 세션",
		user_session_for: "${0}의 사용자 세션",
		user_session_for_with_container: "${0}의 사용자 세션(${1})",
		tools: "도구",
		login: "로그인",
		logout: "로그아웃",
		search: "검색",
		saved_searches: "저장된 검색",
		content_analytics: "컨텐츠 분석",
		reset: "재설정",
		reset_hover: "모든 탭에서 저장하지 않은 데이터가 이전에 저장된 값으로 재설정됩니다.",
		reset_default: "모두 지우기",
		reset_default_hover: "모든 탭에 있는 현재 레이블 필드를 지웁니다.",
		locale: "로케일:",
		up: "위로",
		down: "아래로",
		restore: "복원",
		maximize: "최대화",
		values_label: "값",
		value_label: "값:",
		path_label: "경로:",
		new_label: "새로 작성:",
		back_label: "이전",
		clear: "지우기",
		set: "설정...",
		browse: "찾아보기",
		work: "작업",
		connect: "연결",
		documents: "문서:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM 및 IBM 로고는 전세계 여러 국가에 등록된 IBM Corporation의 상표입니다. Java 및 모든 Java 기반 상표와 로고는 Oracle 및/또는 그 계열사의 상표 또는 등록상표입니다. 여기에 포함된 Oracle Outside In Technology는 용도가 제한된 라이센스가 적용되며 본 애플리케이션과 연계해서만 사용할 수 있습니다. 본 프로그램은 본 프로그램에 동봉된 라이센스 계약에 의하여 라이센스가 부여됩니다. 본 라이센스 계약은 본 프로그램 디렉토리 폴더 또는 라이브러리의 \"License\" 또는 \"Non_IBM_License\" 파일 안에 존재하거나, 해당되는 경우, 인쇄물로서 제공됩니다. 프로그램을 사용하기 전에 본 계약을 주의깊게 읽으십시오. 본 프로그램을 사용하는 경우 귀하는 본 계약에 동의한 것으로 간주됩니다. ",
		edit: "편집",
		cancel: "취소",
		close: "닫기",
		close_all: "모든 탭 닫기",
		close_others: "기타 탭 닫기",
		ok: "확인",
		yes: "예",
		no: "아니오",
		open: "열기",
		refresh: "새로 고침",
		refresh_cabinets: "모든 캐비닛 새로 고침",
		delete_text: "삭제",
		export_config: "구성 내보내기",
		description: "설명",
		true_label: "True",
		false_label: "False",
		error: "오류",
		error_reference_hover: "이 오류에 대한 자세한 정보는 www.ibm.com을 검색하십시오.",
		url_label: "URL",
		default_label: "기본값",
		ibm_label: "      IBM",
		light_label: "밝게",
		dark_label: "어둡게",
		save: "저장",
		saveAs: "다른 이름으로 저장...",
		save_and_close: "저장하고 닫기",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "없음",
		Name: "이름",
		"${NAME}": "이름",
		mime_type: "MIME 유형",
		mime_type_contains_label: "MIME 유형 포함",
		mime_type_header: "MIME 유형",
		mime_type_icon: "MIME 유형 아이콘",
		casesearch: "케이스",
		item: "항목",
		no_mime_type: "이 항목에 컨텐츠가 없습니다.",
		items_selected: "${0}개의 항목이 선택되었습니다.",
		requestor: "요청자",
		scheduledStartTime: "스케줄된 시작 시간",
		isRecurring: "반복 여부",
		weeks: "주",
		days: "일 수",
		hours: "시간",
		endTime: "종료 시간",
		username: "사용자 이름",
		password: "비밀번호",
		serverURL: "서버 URL",
		enable: "사용",
		disable: "사용 안함",
		finish: "완료",
		previous: "이전",
		next: "다음",
		schedule: "스케줄",
		removeFromThisList: "이 목록에서 제거",
		status: "상태",
		scheduledEndTime: "스케줄된 종료 시간",
		type: "유형",
		mode: "모드",
		startTime: "시작 시간",
		createdBy: "작성자",
		nextScheduledTime: "다음 스케줄된 시간",
		id: "ID",
		duration: "지속기간",
		repeatCycle: "빈도",
		taskTypeName: "태스크 유형",
		to: "대상",
		filter: "필터:",
		error_message: "오류 메시지",

        file_type: "문서 유형",
        word_template_name: "Word 템플리트 이름",
        excel_template_name: "Excel 템플리트 이름",
        powerpoint_template_name: "PowerPoint 템플리트 이름",
        template_description: "템플리트 설명",
        action_add_template: "추가",
        action_change_template: "편집",      
        action_edit_template_properties: "특성",
        add_presentation_template: "프리젠테이션 템플리트 추가",
    	add_spreadsheet_template: "스프레드시트 템플리트 추가",
    	add_doc_template: "문서 템플리트 추가",    	
    	file_type_doc_hover: "유효한 워드 프로세싱 문서 템플리트 파일을 지정해야 합니다.<br><br>유효한 MIME 유형: ${0}",
    	file_type_doc_error: "유효한 워드 프로세싱 문서 템플리트 파일을 지정해야 합니다.<br><br>선택한 문서 MIME 유형: ${0}<br><br>유효한 MIME 유형: ${1}",
    	file_type_presentation_hover: "유효한 프리젠테이션 템플리트 파일을 지정해야 합니다.<br><br>유효한 MIME 유형: ${0}",
    	file_type_presentation_error: "유효한 프리젠테이션 템플리트 파일을 지정해야 합니다.<br><br>선택한 문서 MIME 유형: ${0}<br><br>유효한 MIME 유형: ${1}",
    	file_type_spreadsheet_hover: "유효한 스프레드시트 템플리트 파일을 지정해야 합니다.<br><br>유효한 MIME 유형: ${0}",
    	file_type_spreadsheet_error: "유효한 스프레드시트 템플리트 파일을 지정해야 합니다.<br><br>선택한 문서 MIME 유형: ${0}<br><br>유효한 MIME 유형: ${1}",
    	office_online_only_one_template_error: "하나의 파일만 선택할 수 있습니다.",
    	change_presentation_template: "프리젠테이션 템플리트 편집",
    	change_spreadsheet_template: "스프레드시트 템플리트 편집",
    	change_doc_template: "문서 템플리트 편집",
    	change_button: "편집",
	    new_document_dialog_doc_title: "새 문서",
	    new_document_dialog_presentation_title: "새 프리젠테이션",
	    new_document_dialog_spreadsheet_title: "새 스프레드시트",
	    new_document_dialog_title_label: "제목:",
	    new_document_dialog_title_hover: "이 문서의 제목을 입력하십시오.",
	    new_document_dialog_title_missing_message: "제목을 지정해야 합니다.",
	    office_online_save_before_adding_templates_title: "저장소에 대한 변경사항 저장",
	    office_online_save_before_adding_templates_error: "저장소에 작성한 변경사항을 저장할 때까지 Office 템플리트를 추가할 수 없습니다. <b>저장 후 닫기</b>를 클릭한 후 저장소를 다시 열고 Office 템플리트를 추가하십시오.",
	    copy_to_OOS_dialog_doc_title: "새 문서",
	    office_online_checkin_cancelcheckout_message: "이 문서는 Microsoft Office Online에서 편집 중입니다. 문서가 Microsoft Office Online에서 열려 있는 동안에는 문서를 체크인하거나 체크아웃을 취소할 수 없습니다.",
	    new_document_classification: "분류:",
	    new_document_classification_help: "소스 문서의 클래스, 특성 및 상위 폴더(하나가 있는 경우)로 재설정합니다. 입력 템플리트를 사용하여 문서를 추가할 때 소스 문서의 입력 템플리트 하나가 있는 경우 자동으로 선택됩니다. 소스 문서의 특성이 기본값으로 사용되지만 입력 템플리트에 지정된 폴더 및 클래스는 유지됩니다.",
		new_document_classification_use_source_document: "소스 문서 사용:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} 유형 아이콘",
		repository_name_and_type: "${0} 이름 및 유형",
		select_class_label: "${0} 선택",

		// View toggle buttons
		detail_view_button_tooltip: "세부사항 보기",
		detail_view_button: "세부사항",
		magazine_view_button_tooltip: "매거진 보기",
		magazine_view_button: "매거진",
		filmstrip_view_button_tooltip: "슬라이드 보기",
		filmstrip_view_button: "슬라이드",

		magazine_view_show: "매거진 보기에 표시",
		detail_view_show: "세부사항 보기에 표시",

		total_count_item: "항목",
		total_count_items: "항목",
		total_count_more_items: "${0}개를 초과하는 항목",

		extension_changed: "선택된 파일의 확장자가 기존과 동일하지 않습니다. 다른 파일을 선택하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "선택된 뷰어가 모든 파일 유형을 지원하지 않습니다. 이 뷰어 맵핑을 저장하는 경우, 문서를 볼 때 문제가 생길 수 있습니다. 모든 파일 유형 옵션이 선택된 경우 모든 파일 유형을 지원하는 뷰어를 선택하는 것이 좋습니다.<br><br><b>팁:</b> 다음 뷰어는 모든 파일 유형을 지원합니다.<ul><li>애플릿 뷰어</li><li>AJAX 뷰어</li><li>HTML 변환</li><li>PDF 변환</li><li>웹 브라우저</li></ul>",
		file_type_any: "모든 파일 유형",
		file_type_any_hover: "파일 유형과 상관없이 선택된 뷰어를 사용하여 모든 문서를 보려면 이 옵션을 선택하십시오. 이 옵션은 다음 뷰어에 대해 지원됩니다.<br><br><ul><li>애플릿 뷰어</li><li>AJAX 뷰어</li><li>HTML 변환</li><li>PDF 변환</li><li>웹 브라우저</li></ul><br><br><b>주의사항:</b> 특정 뷰어를 주로 사용하려는 경우 이 옵션을 사용하여 작성하는 모든 맵핑은 뷰어 맵의 끝으로 이동해야 합니다. ",
		file_type_input: "새 파일 유형:",

		mime_type_input: "새 MIME 유형:",
		mime_type_input_invalid: "새 MIME 유형에 , 문자를 사용할 수 없습니다.",
		mime_type_available: "사용 가능한 MIME 유형",
		mime_type_selected: "선택된 MIME 유형",
		file_type_input: "새 파일 유형:",
		file_type_input_invalid: "새 파일 유형에 , 문자를 사용할 수 없습니다.",
		file_type_available: "사용 가능한 파일 유형",
		file_type_selected: "선택된 파일 유형",
		file_type_header: "파일 유형",
		viewer: "뷰어:",
		viewer_viewer: "뷰어",
		viewer_view: "보기",
		viewer_preview: "미리보기",
		viewer_merge_and_split: "병합 및 분리",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "미리보기 전용",
		preview_only_label: "(미리보기)",
		preview_only_hover: "이 뷰어 맵핑은 사용자가 <b>미리보기</b>를 클릭한 경우에만 사용됩니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "이 저장소는 찾아보기를 지원하지 않습니다. 다른 저장소를 선택하십시오.",

		repository_community_teamspace_message: "다른 저장소가 이미 커뮤니티 라이브러리 저장소로 지정되었습니다. 기존 저장소를 커뮤니티 라이브러리 저장소로 계속 사용하려면 기존 저장소를 이 저장소로 대체하지 않도록 변경사항을 저장하기 전에 <b>아니오</b>를 선택하십시오.",

		favorites_empty: "아직 즐겨찾기가 없습니다.",
		syncItems_empty: "아직 동기화된 파일이 없습니다.",

		root_folder_id: "루트 폴더 ID",
		unified_searches: "교차 저장소 검색:",
		max_results: "결과 수:",
		direct_retrieve_enabled: "직접 검색:",
		itemTypesToDisplay: "표시할 항목 유형",
		allItemTypes: "모든 항목 유형",
		include_attr_group_name: "속성 표시 이름의 속성 그룹 설명:",
		admin_repcfg_include_attr_group_name_hover: "기본적으로 속성 그룹 설명이 속성 그룹 속성의 이름에 포함됩니다. 이를 통해 속성 작업을 할 때 속성 그룹 속성이 속해 있는 속성 그룹을 파악할 수 있습니다.<br>예를 들어, 속성 그룹 속성에 대해 다음 이름이 표시될 수 있습니다. Document Settings.Document Type<br><br>이 옵션을 사용 안함으로 설정하면 속성 그룹 속성 이름에 속성 설명만 사용합니다.<br>예를 들어, 다음 이름이 표시됩니다. Document Type.<br><br>속성 그룹 설명이 없으면 문서 유형이 단순 속성인지 속성 그룹 속성인지 알 수 없습니다.",
		documentItemTypesOnly: "문서 모델 항목 유형만",
		object_store: "오브젝트 저장소 기호 이름:",
		object_store_display_name: "오브젝트 저장소 표시 이름:",
		teamspaceUpgradeMsg: "사용자의 저장소 구성을 저장하면 팀 작업영역이 업데이트됩니다. 팀 작업영역이 여러 개인 경우 업데이트하는 데 몇 분 정도 걸립니다.",
		synchUpgradeMsg: "저장소 구성을 저장하면 이 저장소의 동기화 모듈이 업데이트됩니다.",
		protocol: "프로토콜:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS 저장소 ID:",
		cmis_url: "CMIS AtomPub 바인딩 서비스 문서 URL:",
		trace_level: "추적 레벨",
		trace_dir: "디렉토리 추적",
		temp_dir: "임시 디렉토리",
		show_document_location: "문서 위치 표시",
		max_folders: "최대 폴더 수",
		afp_conversion: "AFP 변환",
		line_conversion: "행 데이터 변환",
		max_hits: "최대 액세스 수",
		folder_search_expresssion: "폴더 검색 표현식",
		max_item_types: "최대 항목 유형 수",
		max_worklists: "최대 작업 목록 수",
		update_storage_collection: "스토리지 콜렉션 업데이트",
		include_mime_types_in_search_results: "검색 결과에 MIME 유형 포함",
		object_type: "오브젝트 유형",
		object_type_document: "문서",
		object_type_folder: "폴더",
		file_label: "파일:",
		plugin_jarfile_path_label: "JAR 파일 경로:",
		plugin_classfolder_path_label: "클래스 파일 경로:",
		plugin_classname_label: "클래스 이름:",
		plugin_id_label: "플러그인 ID:",
		class_label: "클래스",
		configuration: "구성",
		connect_repository: "연결...",
		server_type: "서버 유형",
		timeout_in_seconds: "제한시간(초):",
		default_search_template: "기본 검색",
		search_filtered_properties: "검색 가능한 특성",
		property_contains_label: "특성 포함",
		class_contains_label: "클래스 포함",
		search_filtered_operators: "검색 연산자",
		default_search_results: "검색 결과",
		data_type: "데이터 유형",
		status_bar: "상태 표시줄",
		operators_for: "연산자 대상:",
		currentUser: "현재 사용자",
		nameContains: "이름 포함",
		searchFor: "검색 대상",
		server_autentication: "서버 인증(JWT를 사용하는 OAuth 2.0)",
		standard_authentication: "표준 인증(3-legged OAuth2.0)",
		developer_authentication: "개발자 인증",
		enterprise_id: "엔터프라이즈 ID:",
		public_key_id: "공개 키 ID:",
		private_key_path: "개인 키 파일 경로:",
		server_user_email: "서버 사용자 이메일",

		filter_builder_tooltip: "필터 정의",

		// Launch bar
		launchbar_home: "홈 열기",
		launchbar_favorites: "즐겨찾기 열기",
		launchbar_browse: "찾아보기 보기 열기",
		launchbar_browse_popup: "찾아보기 팝업 목록 열기",
		launchbar_search: "검색 보기 열기",
		launchbar_search_popup: "검색 팝업 목록 열기",
		launchbar_teamspaces: "팀 작업영역 보기 열기",
		launchbar_teamspaces_popup: "팀 작업영역 팝업 목록 열기",
		launchbar_work: "작업 보기 열기",
		launchbar_work_popup: "작업 팝업 목록 열기",
		launchbar_entry_templates: "입력 템플리트 보기 열기",
		launchbar_entry_templates_popup: "입력 템플리트 팝업 목록 열기",
		launchbar_admin: "관리 보기 열기",

		admin_sync_server: "동기화 서비스",
		admin_settings: "설정",
		admin_interface_text: "레이블",
		admin_interface_text_desktop: "데스크탑:",
		admin_desktops: "데스크탑",
		admin_repositories: "저장소",
		admin_mobile: "모바일",
		admin_menus: "메뉴",
		admin_reason_codes: "교정 이유",
		admin_plugins: "플러그인",
		admin_plugins_state_enabled: "플러그인 사용 가능",
		admin_plugins_state_disabled: "플러그인 사용 안함",
		admin_plugins_version: "버전:",
		admin_plugins_version_heading: "버전",
		admin_plugins_icon: "플러그인 아이콘",
		admin_viewer_mapping_icon: "뷰어 맵핑 아이콘",
		admin_viewer_defs: "뷰어 맵",
		admin_viewer_dialog_title: "맵핑",
		admin_viewer_dialog_new_title: "새 맵핑",
		admin_viewer_dialog_instructions: "새 맵핑은 저장소의 파일에 사용할 뷰어를 지정합니다. 맵핑을 여러 개 작성하여 여러 유형의 파일에 대해 서로 다른 뷰어를 지정할 수 있습니다.  MIME 유형 또는 파일 확장자를 사용하여 맵핑을 정의할 수 있습니다. 파일 확장자를 사용하는 맵핑은 문서 이름에 맵핑됩니다. 예를 들어, 파일 유형이 gif로 설정된 맵핑은 확장자가 .gif로 끝나는 문서 이름에 맵핑됩니다.",
		admin_desktop_viewer_defs: "뷰어 맵:",
		admin_desktop_viewer_defs_hover: "뷰어 맵은 저장소에서 여러 유형의 문서를 여는 데 사용하는 뷰어를 지정합니다.<br><br>새 뷰어 맵은 관리 도구의 <b>뷰어 맵</b> 섹션에서 작성할 수 있습니다.",
		admin_desktops_used: "데스크탑에서 사용됨",
		admin_desktop_additional_settings: "추가 설정:",
		admin_default_desktop: "기본 데스크탑으로 설정",
		admin_default_desktop_header: "기본 데스크탑",
		admin_layout_tab_title: "레이아웃",
		admin_desktop_icon: "데스크탑 아이콘",

		// Themes
		admin_themes: "테마",
		admin_theme_list_instructions: "사용자 조직에 맞게 웹 클라이언트를 쉽게 사용자 정의할 수 있도록 테마를 작성할 수 있습니다. 사용자 환경에서 다른 데스크탑에 다른 색상, 글꼴 또는 로고를 사용해야 하는 경우 다중 테마를 작성할 수 있습니다.<br><br>테마를 작성한 후 데스크탑의 <b>모양</b> 탭에서 테마를 구성하여 데스크탑에 테마를 적용할 수 있습니다.",
		admin_theme_instructions: "웹 클라이언트에 표시되는 색상 및 글꼴을 제어하도록 테마를 작성하십시오. 또한 테마를 사용하여 로고, 애플리케이션 이름, 로그인 페이지 및 배너에 표시되는 저작권 텍스트를 변경할 수 있습니다.",
		admin_theme_heading: "테마: <b>${0}</b>",
		admin_new_theme: "새 테마",
		admin_text_theme: "테마",
		admin_delete_confirmation_themes: "선택한 테마를 삭제하시겠습니까?\n${0}개의 테마가 선택되었습니다.",
		admin_theme_color: "색상",
		admin_theme_text: "텍스트",
		admin_theme_solid: "단색",
		admin_theme_gradient: "그라데이션",
		admin_theme_box: "Box",
		admin_theme_color_label: "색상 ${0}:",
		admin_theme_name_invalid: "테마 이름에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_theme_id_hover: "테마 ID는 고유해야 하며 테마를 저장한 후 ID를 변경할 수 없습니다.<br><br>ID에는 영숫자만 사용할 수 있습니다.",
		admin_theme_name_hover: "이름에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_theme_automatic_label: "자동",
		admin_theme_logo_url_hover: "로고 파일의 URL을 입력하십시오. 로고가 웹 클라이언트와 동일한 웹 애플리케이션 서버에 있는 경우, 상대 URL을 입력하십시오. 예: /mycustomizations/banner_logo.png<br><br>로고에 투명한 백그라운드가 있는 것이 좋습니다.",
		admin_theme_color_palette_title_heading: "색상표",
		admin_theme_color_palette_help_text: "16진 값 또는 색상 선택도구를 사용하여 테마의 색상표를 작성하십시오. 색상을 원하는 대로 추가할 수 있습니다.",
		admin_theme_color_add_button_label: "색상 추가",
		admin_theme_color_remove_button_label: "색상 제거",
		admin_theme_global_title_heading: "애플리케이션 전체 요소",
		admin_theme_global_font: "글꼴 계열:",
		admin_theme_global_font_hover: "웹 클라이언트에서 사용할 글꼴을 선택하십시오. 글꼴은 우선순위별로 나열되며 목록의 다음 글꼴은 이전 글꼴이 클라이언트 시스템에 설치되지 않은 경우에만 사용됩니다.",
		admin_theme_global_framework_color_label: "프레임워크 색상:",
		admin_theme_global_framework_color_hover: "다음 요소에 사용할 색상을 선택하십시오.<ul><li>대화 상자의 제목 표시줄</li><li>선택된 탭의 맨 위에 있는 강조표시 색상</li><li>컨텐츠 목록 보기 아이콘(세부사항 보기, 매거진 보기, 슬라이드 보기)</li></ul><br>이 색상은 웹 클라이언트의 섹션 간 구분 기호에 사용되지 않습니다. 구분 기호의 색상을 변경하려면 사용자 정의 CSS 파일을 제공하도록 플러그인을 작성해야 합니다.",
		admin_theme_color_global_toolbar: "글로벌 도구 모음 색상:",
		admin_theme_color_global_toolbar_hover: "웹 클라이언트에 글로벌 도구 모음을 포함하는 경우 도구 모음의 색상을 선택하십시오.<br><br><b>팁:</b> 도구 모음이 웹 클라이언트 맨 위의 배너에 표시되므로 도구 모음의 색상은 배너 색상의 보색이어야 합니다.",
		admin_theme_global_selected_color: "선택된 항목 색상:",
		admin_theme_global_selected_color_hover: "찾아보기 트리, 검색 트리, 컨텐츠 목록에서 항목을 선택할 때 사용할 색상을 선택하십시오.<br><br>풍선 색상(사용자가 항목 위에서 마우스를 움직이면 사용되는 색상)은 이 색상에서 파생됩니다.",
		admin_theme_global_link_color: "링크 색상:",
		admin_theme_global_link_color_hover: "웹 클라이언트에서 클릭 가능한 모든 URL에 사용할 색상을 선택하십시오. 예를 들어, 이 색상은 웹 클라이언트 전체에 표시되는 추가 정보 링크에서 사용됩니다.",
		admin_theme_login_title_heading: "로그인 페이지 요소",
		admin_theme_page_background_label: "로그인 페이지 백그라운드 색상:",
		admin_theme_login_page_background_hover: "로그인 분할창 뒤에 표시할 색상을 선택하십시오.",
		admin_theme_login_pane_background_label: "로그인 분할창 백그라운드 색상:",
		admin_theme_login_pane_background_hover: "로그인 분할창에 표시할 색상을 선택하십시오. 이 색상은 로그인 페이지의 백그라운드 색상의 보색이어야 합니다.",
		admin_theme_text_color: "텍스트 색상:",
		admin_theme_login_pane_text_color_hover: "로그인 분할창 텍스트에 사용할 색상을 선택하십시오. 이 색상은 시작 텍스트 및 필드 레이블에 사용됩니다. 이 색상은 로그인 분할창의 백그라운드 색상과 확실하게 구분되어야 합니다.",
		admin_theme_copyright_text: "저작권 텍스트:",
		admin_theme_copyright_text_hover: "로그인 페이지에 저작권 텍스트 표시 여부를 지정하십시오.",
		admin_theme_copyright_selection_IBM: "IBM 저작권",
		admin_theme_copyright_selection_none: "저작권 텍스트 없음",
		admin_theme_banner_title_heading: "배너 요소",
		admin_theme_text_icons_color: "텍스트 및 아이콘 색상:",
		admin_theme_icon_color_label: "아이콘 색상:",
		admin_theme_shadow_label: "새도우:",
		admin_theme_banner_text_icons_hover: "배너에서 텍스트 및 아이콘에 사용할 색상을 선택하십시오. 이 색상은 배너의 백그라운드 색상과 확실하게 구분되어야 합니다.",
		admin_theme_banner_product_name_label: "제품 이름:",
		admin_theme_banner_product_name_hover: "데스크탑을 작성할 때 애플리케이션에 대해 표시할 사용자 정의 이름을 지정할 수 있습니다. 사용자 정의 이름을 지정하지 않으면 IBM Content Navigator가 제품 이름으로 사용됩니다. 데스크탑에 정의된 애플리케이션 이름 또는 이름 대신 이미지를 사용할 것인지 여부를 지정하십시오.",
		admin_theme_banner_product_name_desktop_defined_label: "데스크탑의 이름 사용",
		admin_theme_banner_product_name_image: "사용자 정의 로고(URL) 사용",
		admin_theme_background_color_label: "백그라운드 색상:",
		admin_theme_style_label: "스타일:",
		admin_theme_banner_color_hover: "애플리케이션 맨 위의 배너에 사용할 색상을 선택하십시오.<br><br><b>팁:</b> 배너의 텍스트 색상이 배너의 백그라운드 색상과 확실하게 구분되는지 확인하십시오.",
		admin_theme_buttons_title_heading: "단추",
		admin_theme_navigation_title_heading: "탐색 요소",
		admin_theme_navigation_icon_selected_label: "선택된 아이콘 색상:",
		admin_theme_navigation_background_hover: "기능 탐색줄의 백그라운드에 사용할 색상을 선택하십시오.",
		admin_theme_navigation_icon_color_hover: "기능 탐색줄의 아이콘에 사용할 색상을 선택하십시오. 데스크탑에서 기본 레이아웃을 사용할 때 이 색상은 기능 드롭 다운 메뉴의 백그라운드와 대비되어야 합니다. 데스크탑에서 클래식 레이아웃을 사용할 때 이 색상은 기능 탐색줄의 백그라운드와 대비되어야 합니다.",
		admin_theme_navigation_icon_selected_hover: "기능 탐색줄에서 선택된 기능에 사용할 색상을 선택하십시오. 이 색상은 아이콘의 색상 및 기능 탐색줄의 백그라운드 색상의 보색이어야 합니다.<br><br>데스크탑에서 클래식 레이아웃을 사용할 때 이 색상은 기능 탐색줄의 풍선 색상으로 사용됩니다.",
		admin_theme_button_background_color_hover: "단추 백그라운드에 사용할 색상을 선택하십시오.",
		admin_theme_button_style_hover: "단추 스타일을 선택하십시오.",
		admin_theme_button_text_icon_color_hover: "단추의 텍스트 및 이미지에 사용할 색상을 선택하십시오.",
		admin_theme_no_logo_label: "로고 없음",
		admin_theme_custom_logo_label: "사용자 정의 로고(URL)",
		admin_theme_banner_type: "배너 채우기 스타일:",
		admin_theme_banner_type_hover: "배너가 단색인지 또는 그라데이션 색상인지 여부를 지정하십시오. 그라데이션 배너를 지정하면 배너 색상에 지정한 색상이 배너에서 점점 더 어두워지게 표시됩니다.<br><br><b>팁:</b> 배너의 텍스트 색상이 배너의 백그라운드 색상과 확실하게 구분되는지 확인하십시오.",
		admin_theme_icon: "테마 아이콘",
		admin_theme_buttons_and_links_title_heading: "단추, 필드 및 링크",
		admin_theme_button_style_label: "단추 스타일:",
		admin_theme_theme_style_label: "테마 스타일:",
		admin_theme_theme_style_hover: "테마의 기본 스타일을 선택하십시오. 테마를 작성하거나 편집 중일 때 스타일을 변경할 수 있습니다. 하나의 스타일에서 다른 스타일로 변경하면 테마 설정이 기본값으로 재설정됩니다.",
		admin_theme_accent_color_label: "강조 색상:",
		admin_theme_accent_color_hover: "로드 중인 스피너 및 대화 상자 맨 위의 막대에 사용할 색상을 선택하십시오.",
		admin_theme_global_toolbar_text_color_label: "글로벌 도구 모음 텍스트 색상:",
		admin_theme_global_toolbar_text_color_hover: "웹 클라이언트에 글로벌 도구 모음을 포함하는 경우 도구 모음의 텍스트에 사용할 색상을 선택하십시오.",
		admin_theme_banner_text_color_hover: "배너에서 텍스트에 사용할 색상을 선택하십시오. ",
		admin_theme_banner_icon_color_hover: "배너에서 아이콘에 사용할 색상을 선택하십시오. ",
		admin_theme_button_color_label: "색상:",
		admin_theme_button_color_hover: "다음 요소에 사용할 색상을 선택하십시오.<ul><li>대화 상자의 제목 표시줄</li><li>선택된 탭의 맨 위에 있는 강조표시 색상</li><li>컨텐츠 목록 보기 아이콘(세부사항 보기, 매거진 보기, 슬라이드 보기)</li><li>단추, 필드 및 링크</li></ul>사용자가 단추 위에서 마우스를 움직일 때 사용되는 색상은 이 색상에서 파생됩니다. 이 색상은 웹 클라이언트의 섹션 간 구분 기호에 사용되지 않습니다. 구분 기호의 색상을 변경하려면 사용자 정의 CSS 파일을 제공하도록 플러그인을 작성해야 합니다.",
		admin_theme_theme_style_col_header: "테마 스타일",

		admin_syncserver_consistency_checker: "일관성 확인 프로그램:",
		admin_syncserver_consistency_checker_hover: "일관성 확인 프로그램을 실행하여 서버에 있는 각 항목의 상태에 대한 현재 정보가 동기화 서비스에 있는지 확인하십시오. 예를 들어, 동기화 서비스 가동 중단 이후에 일관성 확인 프로그램을 실행하여 가동 중단 중 저장소에서 업데이트된 문서에 대한 정보를 얻으십시오.",
		admin_syncserver_consistency_checker_button: "일관성 확인 프로그램 실행",
		admin_syncserver_consistency_checker_started: "시작됨:",
		admin_syncserver_consistency_checker_ended: "종료됨:",
		admin_syncserver_consistency_checker_duration: "지속기간:",
		admin_syncserver_consistency_checker_items_processed: "처리된 동기 항목:",
		admin_syncserver_consistency_checker_items_processed_success: "처리 완료된 동기 항목:",
		admin_syncserver_consistency_checker_items_discovered: "발견된 새 저장소 항목:",
		admin_syncserver_consistency_checker_change_updates: "총 업데이트 수:",
		admin_syncserver_consistency_checker_state: "상태:",
		admin_syncserver_consistency_checker_state_done: "완료",
		admin_syncserver_consistency_checker_state_running: "실행 중",
		admin_syncserver_consistency_checker_user: "제출자:",
		admin_syncserver_consistency_checker_scheduled: "스케줄됨:",

		admin_syncserver_dbcleanup: "데이터베이스 정리",
		admin_syncserver_dbcleanup_hover: "데이터베이스 정리 도구를 실행하여 데이터베이스에서 더 이상 동기화되지 않는 사용하지 않는 디바이스와 항목을 제거하십시오.",
		admin_syncserver_dbcleanup_button: "데이터베이스 정리",
		admin_syncserver_dbcleanup_state_done: "완료",
		admin_syncserver_dbcleanup_state_running: "실행 중",
		admin_syncserver_dbcleanup_started: "시작됨:",
		admin_syncserver_dbcleanup_ended: "종료됨:",
		admin_syncserver_dbcleanup_state: "상태:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "삭제된 저장소:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "삭제된 동기화된 항목:",
		admin_syncserver_dbcleanup_devicedeleted_count: "삭제된 디바이스:",
		admin_syncserver_dbcleanup_deviceexpired_count: "만료된 디바이스:",

		admin_syncserver_publicSyncUrl: "동기화 서비스 공용 URL:",
		admin_syncserver_publicSyncUrl_hover: "저장소가 IBM Content Navigator sync services와 통신할 수 있는 URL을 지정하십시오. URL의 기본 형식은 http://sync_public_URL:port_number/sync/notify입니다.",

		admin_syncserver_managed: "동기화 클라이언트 설정:",
		admin_syncserver_managed_hover: "IBM Content Navigator Sync 클라이언트에서 이러한 설정을 변경할 수 없습니다.",
		admin_syncserver_managed_subfolder: "동기화할 폴더 레벨",
		admin_syncserver_managed_subfolder_hover: "사용자가 폴더를 동기화하는 경우, 동기화할 최대 폴더 수를 지정하십시오. 예를 들어, 세 개의 폴더 레벨을 지정하는 경우 사용자가 동기화하는 폴더와 두 레벨의 하위 폴더가 동기화됩니다.<br><br>환경이 이 설정으로 인해 작성되는 동기화 트래픽 용량을 지원할 만큼 확장되는지 확인하십시오.",
		admin_syncserver_managed_subfolder_all: "모든 하위 폴더",
		admin_syncserver_managed_subfolder_none: "하위 폴더 없음",
		admin_syncserver_managed_subfolder_no_more: "제한된 레벨",
		admin_syncserver_managed_subfolder_levels: "폴더",
		admin_syncserver_managed_schedule: "동기화 스케줄",
		admin_syncserver_managed_schedule_hover: "환경이 이 동기화 스케줄로 인해 작성되는 동기화 트래픽 용량을 지원할 만큼 확장되는지 확인하십시오.<br><br>최대 간격은 24시간 또는 1440분입니다.<br><br>사용자는 클라이언트에서 <b>지금 동기화</b>를 클릭하여 동기화 스케줄을 재정의할 수 있습니다.",
		admin_syncserver_managed_schedule_manual: "수동 동기화",
		admin_syncserver_managed_schedule_continuous: "자동 동기화",
		admin_syncserver_managed_schedule_every: "지정된 간격에 따라 동기화",
		admin_syncserver_managed_schedule_minutes: "분",
		admin_syncserver_managed_schedule_hours: "시간",

		// redaction codes
		admin_new_reason_code: "새 교정 이유",		
		admin_reason_code_name_invalid: "교정 이유 이름에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",		
		admin_reason_code_description_invalid: "설명에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_reason_code_description_hover: "설명에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_reason_code_name_hover: "이름에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_reason_code_description: "설명:",
		admin_reason_code_applications_hover: "이 교정 이유를 참조하는 Datacap 애플리케이션의 목록입니다.",
		admin_reason_code_applications: "Datacap 애플리케이션",
		admin_delete_confirmation_reason_codes: "선택된 교정 이유를 삭제하시겠습니까?",
		admin_delete_confirmation_reason_code: "선택된 교정 이유를 삭제하시겠습니까?",
		admin_reason_code_heading: "교정 이유: <b>${0}</b>",
		admin_reason_code_list_instructions: "교정 이유는 민감한 데이터를 보기에서 숨김으로써 보호하는 이유를 표시합니다. 각 이유는 일반 사용자에게 숨기는 민감한 데이터의 유형을 식별합니다.",
		admin_reason_code_instructions: "각 유형의 민감한 데이터에 대한 교정 이유를 작성할 수 있습니다. 그런 다음, 교정 정책에서 해당 이유를 사용하여 해당 데이터를 볼 수 있는 사용자와 교정을 작성하거나 수정할 수 있는 사용자를 정의할 수 있습니다.",
		admin_reason_code_applications_label: "Datacap 애플리케이션",
		admin_reason_code_repositories: "저장소",
		admin_reason_code_repositories_label: "저장소",
		admin_reason_code_repositories_hover: "이 교정 이유를 참조하는 ICN 저장소의 목록입니다.",
		admin_reason_code_repositories_default_value: "설정되지 않음",
		admin_reason_code_description_label: "설명",
		admin_reason_code_applications_default_value: "설정되지 않음",
		admin_redaction_reasons: "교정 이유",
		admin_redactions: "역할 기반 교정",
		admin_redactions_policies_roles: "정책 및 역할",
		admin_reasons: "이유",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID를 편집할 수 없습니다. 클립보드에 복사할 수 있습니다.",
		// Role based administration
		admin_rba: "역할 기반 데스크탑 관리",
		admin_rba_mobile_access_enabled: "이 데스크탑을 모바일 액세스에 사용할 수 있습니다.",
		admin_rba_mobile_access_disabled: "이 데스크탑을 모바일 액세스에 사용할 수 없습니다.",
		admin_rba_confirm_delete_multiple: "선택된 관리 역할을 삭제하시겠습니까?",
		admin_rba_confirm_delete_single: "선택된 관리 역할을 삭제하시겠습니까?",
		admin_rba_delete_multi_role_desktop: "선택한 역할 중 하나 이상이 데스크탑에 지정되었습니다. 역할을 삭제하려면 먼저 데스크탑에서 역할을 제거해야 합니다.",
		admin_rba_delete_single_role_desktop: "선택한 역할이 ${0} 데스크탑에 지정되었습니다. 역할을 삭제하려면 먼저 데스크탑에서 역할을 제거해야 합니다.",
		admin_desktop: "데스크탑",
		admin_rba_instructions: "데스크탑 관리자에 부여된 권한을 연관시키는 데스크탑 관리 역할을 작성하고 관리할 수 있습니다.",
		admin_rba_not_used: "${0}은(는) 데스크탑에서 사용되지 않습니다.",
		admin_rba_desktops: "<b>${0}은(는) 다음 데스크탑에서 사용됩니다.</b>",
		admin_rba_new_role: "새 역할",
		admin_rba_name_invalid: "관리 역할 이름에는 * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "설명에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_rba_description_hover: "설명에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_rba_name_hover: "이름에는 * \\ / : ? \" &lt; &gt; | 문자를 사용할 수 없습니다.",
		admin_rba_description: "<b>설명:</b> ${0}",
		admin_rba_membership: "멤버십",
		admin_rba_general_priv: "일반",
		admin_rba_appearance_priv: "모양",
		admin_rba_desktop_config_priv: "데스크탑 구성",
		admin_rba_app_name_priv: "애플리케이션 이름",
		admin_rba_theme_priv: "테마",
		admin_rba_viewer_map_priv: "뷰어 맵",
		admin_rba_merge_split_priv: "병합 및 분리",
		admin_rba_sync_svc_priv: "동기화 서비스",
		admin_rba_menus_priv: "메뉴",
		admin_rba_edit_svc_priv: "서비스 편집",
		admin_rba_toolbars_priv: "도구 모음",
		admin_rba_ctx_menus_priv: "컨텍스트 메뉴",
		admin_rba_office_ribbon_priv: "MS Office 리본 표시줄 명령",
		admin_rba_office_menues_priv: "MS Office 컨텍스트 메뉴",
		admin_rba_addl_settings_priv: "추가 설정",
		admin_rba_mobile_priv: "모바일",
		admin_rba_add_doc_dlg_priv: "문서 추가 대화 상자",
		admin_rba_doc_mgmt_priv: "문서 관리",
		admin_rba_def_redaction_priv: "기존 교정 옵션",
		admin_rba_add_photos_priv: "카메라 및 사진 라이브러리로부터 사진 추가",
		admin_rba_time_stamp_priv: "시간소인",
		admin_rba_add_docs_folders_priv: "저장소에 문서 추가 및 폴더 작성",
		admin_rba_open_docs_priv: "다른 애플리케이션에서 문서 열기",
		admin_rba_office_config_priv: "Office 구성",
		admin_rba_tab_label_priv: "IBM ECM 탭 레이블",
		admin_rba_feature_sel_priv: "기능 선택",
		admin_rba_general_config_priv: "일반 구성",
		admin_rba_favorites_priv: "즐겨찾기",
		admin_rba_add_options_priv: "편집 그룹의 추가 옵션",
		admin_rba_browse_priv: "찾아보기",
		admin_rba_outlook_int_priv: "Outlook 통합",
		admin_rba_search_priv: "검색",
		admin_rba_layout_priv: "레이아웃",
		admin_rba_case_priv: "케이스",
		admin_rba_desktop_feat_priv: "데스크탑 기능",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "표시된 기능",
		admin_rba_branding_priv: "브랜딩",
		admin_rba_home_priv: "홈",
		admin_rba_main_color_priv: "기본 색상",
		admin_rba_sec_color_priv: "보조 색상",
		admin_rba_teamspaces_priv: "팀 작업영역",
		admin_rba_rbr_priv: "역할 기반 교정",
		admin_rba_et_mgr_priv: "입력 템플리트 관리자",
		admin_rba_policies_roles_priv: "정책 및 역할 관리",
		admin_rba_work_priv: "작업",
		admin_rba_reasons_priv: "이유 코드",
		admin_rba_tasks_priv: "비동기 태스크",
		admin_rba_auth_priv: "인증",
		admin_rba_all_privs: "모든 권한",
		admin_rba_some_privs: "일부 권한",
		admin_rba_no_privs: "권한 없음",
		admin_add_users_groups_priv: "여러 사용자 및 그룹 추가",
		admin_url_features_priv: "URL 기능 관리",
		admin_plugin_features_priv: "플러그인 기능 관리",
		admin_addl_components_priv: "추가 컴포넌트",
		admin_global_toolbar_priv: "글로벌 도구 모음",
		admin_status_bar_priv: "상태 표시줄",
		admin_refresh_message: "업데이트된 데이터를 사용하려면 브라우저를 새로 고쳐야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "업데이트된 기본 데스크탑을 사용하려면 브라우저를 새로 고쳐야 합니다.",
		admin_desktop_refresh_message: "업데이트된 데스크탑을 사용하려면 브라우저를 새로 고쳐야 합니다.",
		admin_action_open: "열기",
		admin_action_edit: "편집",
		admin_action_copy: "복사",
		admin_action_delete: "삭제",
		admin_action_copy: "복사",
		admin_action_new: "새로 작성",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "이 ID는 이미 사용 중입니다. 고유 ID를 지정해야 합니다.",

		admin_searchable_properties_for: "검색 가능한 특성 대상:",
		admin_repository_new: "새 저장소",
		admin_desktop_new: "새 데스크탑",
		admin_desktop_file_documents: "사용자가 폴더에 새 문서 및 폴더를 저장해야 함",
		admin_desktop_file_documents_hover: "항목을 저장소에 추가할 때 사용자가 폴더를 선택하도록 하려면 이 옵션을 선택하십시오. 이 옵션을 선택하지 않으면 사용자가 문서(IBM FileNet P8) 또는 문서와 폴더(IBM Content Manager)를 폴더에 채우지 않고 추가할 수 있습니다.",
		admin_desktop_show_security_tab: "조치 추가 및 체크인 중 보안 설정 표시",
		admin_desktop_show_security_hover: "<b>IBM FileNet P8 사용자만 해당됩니다.</b>  이 데스크탑에 항목을 추가 또는 체크인할 때 사용자가 문서 및 폴더의 보안을 편집할 수 있도록 허용하려면 이 옵션을 선택하십시오.",
		admin_desktop_configure_security_inheritance: "사용자가 폴더의 보안 상속을 구성할 수 있도록 허용",
		admin_desktop_configure_security_inheritance_hover: "<b>IBM FileNet P8 사용자만 해당됩니다.</b>  폴더의 보안 상속을 제어하여 사용자가 폴더의 항목에 대한 액세스 권한을 사용자 정의할 수 있도록 하려면 이 옵션을 선택하십시오. 이 옵션을 선택하는 경우, 사용자는 사용자 또는 그룹이 다음의 보안을 상속할 수 있는지 여부를 지정할 수 있습니다.<ul><li>폴더</li><li>폴더 및 바로 아래의 하위 폴더</li><li>폴더 및 모든 하위 폴더</li></ul>",
		admin_desktop_appearance: "모양",
		admin_desktop_appearance_instruction: "데스크탑에 대해 표시되는 로그인 페이지 및 배너를 변경하여 데스크탑의 모양을 사용자 정의할 수 있습니다.",
		admin_desktop_layout: "레이아웃:",
		admin_desktop_layout_hover: "레이아웃은 웹 클라이언트에 표시할 수 있는 기능 및 웹 클라이언트의 컨텐츠 정렬 방식을 지정합니다.<br><br><b>팁:</b> 플러그인을 작성하여 사용자 정의 레이아웃을 정의할 수 있습니다. 관리 도구에 플러그인을 등록해야 사용자 정의 레이아웃을 선택할 수 있습니다.",
		admin_desktop_layout_default: "기본값",
		admin_desktop_layout_custom: "사용자 정의",
		admin_desktop_enable_workflow_email: "이 데스크탑에서 FileNet P8 워크플로우 이메일 알림 사용",
		admin_desktop_enable_workflow_email_hover: "FileNet P8 사용자만 해당됩니다. 사용자가 Process Engine에서 생성된 이메일 알림에 포함되는 URL에서 웹 클라이언트를 열 수 있게 하려면 이 옵션을 선택하십시오.<br /><br />임의의 데스크탑에 대해 이 옵션을 사용할 수 없게 설정하면, 사용자는 알림의 URL에서 웹 클라이언트에 로그인할 수 없습니다.<br /><br />다중 데스크탑에서 이 옵션을 사용 가능하게 설정하고 둘 이상의 데스크탑이 알림의 URL에서 지정한 기준을 충족하면, 웹 클라이언트는 기준을 충족하는 첫 번째 데스크탑을 사용합니다. ",
		admin_desktop_prevent_create_new_search: "사용자가 검색 작성 방지",
		admin_desktop_prevent_create_new_search_hover: "이 옵션은 기존 검색만 사용하고 최적화할 수 없는 오픈 엔디드 검색을 사용하지 않도록 제한합니다.</br></br>이 설정은 팀 작업영역에 영향을 주지 않습니다. 팀 작업영역에 검색을 작성하는 권한은 지정된 팀 작업영역에서의 사용자 역할로 제어됩니다.",
		admin_desktop_prevent_create_new_unified_search: "교차 저장소 검색 작성 방지",
		admin_desktop_prevent_create_new_unified_search_hover: "이 옵션에서는 최적화될 수 없는 오픈 엔디드 교차 저장소 검색 작성에서 기존 교차 저장소 검색만 사용하도록 사용자를 제한합니다.",
		admin_desktop_hide_entry_template_not_found_warning: "연관된 입력 템플리트를 찾을 수 없는 경우 표시되는 경고 숨기기",
		admin_desktop_hide_entry_template_not_found_warning_hover: "항목 특성이 편집되고 항목과 연관된 입력 템플리트를 찾을 수 없는 경우 표시되는 경고 메시지를 숨기려면 이 옵션을 선택하십시오.",
		admin_desktop_show_class_role_security_selection: "사용자가 항목 템플리트의 역할 기반 보안을 구성할 수 있도록 허용",
		admin_desktop_show_class_role_security_selection_hover:	"<b>IBM FileNet P8 사용자만 해당됩니다.</b>  입력 템플리트를 사용하여 문서 및 폴더의 보안을 설정할 때 사용자가 역할 기반 보안을 사용하도록 입력 템플리트를 구성하려는 경우 이 옵션을 선택하십시오. 이 옵션을 선택하면 입력 템플리트 편집기에서 역할 보안 오브젝트가 입력 템플리트 정의에 적용되는지 여부를 지정할 수 있습니다.",
		admin_desktop_show_primary_multi_part: "뷰어에서 기본 문서만 열기",
		admin_desktop_show_primary_multi_part_hover: "<b>IBM FileNet P8 사용자만 해당됩니다.</b>  뷰어에서 기본 문서 파일만 열려는 경우 이 옵션을 선택하십시오. 문서에는 연관된 다중 파일이 있을 수 있습니다. 이 옵션은 문서와 연관된 기본 파일만 엽니다.",
		admin_desktop_redaction_save_mode: "기본 교정 옵션:",
		admin_desktop_redaction_save_mode_hover: "기본 ViewONE Virtual 뷰어 교정 저장 모드 선택:</br>* 항상 사용자에게 선택하도록 함: 교정 모드의 항목에 대화 상자가 표시되어 새 버전으로 체크인하는지, 새 문서를 작성하거나 컨텐츠를 다운로드하는지 여부를 사용자에 묻습니다.</br>* 새 버전으로 체크인: 항상 기존 문서의 새 버전으로 다시 교정된 컨텐츠를 저장합니다.</br>* 새 문서로 저장: 항상 완전히 새로운 문서로 교정된 컨텐츠를 다시 저장합니다.</br>* 클라이언트에 다운로드 및 저장: 클라이언트 시스템에 교정된 컨텐츠를 다운로드합니다.",
		admin_desktop_redaction_save_mode_user_select: "항상 사용자가 선택하도록 함",
		admin_desktop_redaction_save_mode_new_version: "새 버전으로 체크인",
		admin_desktop_redaction_save_mode_new_document: "새 문서로 저장",
		admin_desktop_redaction_save_mode_local_content: "클라이언트에 다운로드하여 저장",

		admin_desktop_document_add_mode: "문서 대화 상자 추가:",
		admin_desktop_document_add_mode_hover: "IBM Content Navigator에서 작성한 문서를 추가할 때 사용하도록 추가 대화 상자 지정:<ul><li>영구적으로 교정된 새 문서</li><li>새 병합 및 분리 문서</li><li>새 Microsoft Office 문서</li><li>새 편집 서비스 문서</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "문서 추가",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "입력 템플리트를 사용하여 문서 추가",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "병합 및 분리:",
		admin_desktop_merge_and_split_enable_hover: "이 데스크탑에 액세스하는 사용자가 지원 뷰어를 사용하여 문서를 병합하고 분리할 수 있도록 할 것인지 여부를 지정하십시오.",

		admin_desktop_merge_and_split_show_checkin: "사용자가 변경사항을 문서에 체크인할 때 특성 값을 제공하도록 프롬프트",
		admin_desktop_merge_and_split_show_checkin_hover_help: "이 옵션을 선택하면 사용자가 병합 및 분리 모드에서 문서에 변경사항을 체크인할 때 체크인 대화 상자가 표시됩니다.",

		admin_desktop_available_categories: "사용 가능한 기능",
		admin_desktop_selected_categories: "선택된 기능",

		admin_layout_banner_title: "배너 및 로그인 페이지",
		admin_layout_title: "레이아웃",

		admin_desktop_application_name: "애플리케이션 이름:",
		admin_desktop_application_name_hover: "배너에 표시할 애플리케이션 이름을 지정하십시오.<br><br>팁: 레이블/데스크탑 레이블 탭에서 애플리케이션 이름을 다른 언어로 정의하십시오.",
		admin_desktop_theme: "테마:",
		admin_desktop_theme_hover: "기본 IBM Content Navigator 테마를 사용하거나 이 데스크탑의 사용자 정의 테마를 사용할 것인지 여부를 지정하십시오. 사용자 정의 테마를 사용하려면 관리 도구의 <b>테마</b> 섹션에서 테마를 작성해야 합니다.",
		admin_desktop_login_logo: "로그인 페이지 로고:",
		admin_desktop_login_logo_hover: "로그인 페이지에 표시되는 로고를 변경하려면 로고 파일의 URL을 지정할 수 있습니다. 그러나 로고를 변경하려면 사용자 정의 테마를 사용하도록 권장됩니다.",
		admin_desktop_login_logo_url_hover: "로고 파일의 URL을 입력하십시오. 로고가 웹 클라이언트와 동일한 웹 애플리케이션 서버에 있는 경우, 상대 URL을 입력하십시오. 예: /mycustomizations/login_logo.png<br><br>로고는 너비 200픽셀 및 높이 150픽셀을 넘을 수 없습니다.<br><br>로고에 투명한 백그라운드가 있는 것이 좋습니다.",
		admin_desktop_banner_logo: "배너 로고:",
		admin_desktop_banner_logo_hover: "배너에 표시되는 로고를 변경하려면 로고 파일의 URL을 지정할 수 있습니다. 그러나 로고를 변경하려면 사용자 정의 테마를 사용하도록 권장됩니다.",
		admin_desktop_banner_logo_url_hover: "로고 파일의 URL을 입력하십시오. 로고가 웹 클라이언트와 동일한 웹 애플리케이션 서버에 있는 경우, 상대 URL을 입력하십시오. 예: /mycustomizations/banner_logo.png<br><br>로고는 너비 72픽셀 및 높이 36픽셀을 넘을 수 없습니다.<br><br>로고에 투명한 백그라운드가 있는 것이 좋습니다.",
		admin_desktop_banner_background_color: "배너 백그라운드 색상:",
		admin_desktop_banner_background_color_hover: "배너의 백그라운드 색상을 변경하려면 사용자 정의 색상을 지정할 수 있습니다. 그러나 배너의 색상을 변경하려면 사용자 정의 테마를 사용하도록 권장됩니다.",
		admin_desktop_banner_background_color_custom_hover: "애플리케이션 배너의 색상을 16진 색상으로 지정하십시오.",
		admin_desktop_banner_application_name_color: "애플리케이션 이름 텍스트 색상:",
		admin_desktop_banner_application_name_color_hover: "애플리케이션 이름의 색상을 변경하려면 사용자 정의 색상을 지정할 수 있습니다. 그러나 애플리케이션 이름의 색상을 변경하려면 사용자 정의 테마를 사용하도록 권장됩니다.",
		admin_desktop_banner_application_name_color_custom_hover: "애플리케이션 이름의 색상을 16진 색상으로 지정하십시오.",
		admin_desktop_banner_menu_color: "배너 아이콘 색상:",
		admin_desktop_banner_menu_color_hover: "배너의 백그라운드 색상을 변경하면, 배너의 아이콘 색상 스킴을 변경해야 보다 많은 색상을 볼 수 있습니다. 밝거나 어두운 버전의 배너 아이콘 표시 여부를 지정하십시오.<br><br>그러나 아이콘의 색상을 변경하려면 사용자 정의 테마를 사용하도록 권장됩니다.",
		admin_desktop_login_page_content: "로그인 페이지 컨텐츠:",
		admin_desktop_login_page_content_hover: "시스템 가동 중단에 대한 공지사항 또는 사용자가 사용자 이름 및 비밀번호를 찾는 데 유용한 위치와 같이 로그인 페이지에 추가 정보를 표시하려면 표시하려는 컨텐츠의 URL을 지정할 수 있습니다.",
		admin_desktop_login_page_content_url_hover: "로그인 페이지 컨텐츠의 URL을 입력하십시오. 컨텐츠가 웹 클라이언트와 동일한 웹 애플리케이션 서버에 있는 경우, 상대 URL을 입력하십시오. 예: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "비밀번호 규칙:",
		admin_desktop_password_rules_hover: "제한된 문자 또는 최소 문자 수와 같이 사용자에게 비밀번호 작성을 위한 가이드라인을 제공하려면 비밀번호 규칙이 들어있는 페이지의 URL을 지정할 수 있습니다.",
		admin_desktop_password_rules_url_hover: "비밀번호 규칙 컨텐츠의 URL을 입력하십시오. 컨텐츠가 웹 클라이언트와 동일한 웹 애플리케이션 서버에 있는 경우, 상대 URL을 입력하십시오. 예: /mycustomizations/passwords.html",
		admin_desktop_help_url: "일반 사용자 도움말 URL:",
		admin_desktop_help_url_hover: "IBM Content Navigator와 함께 제공되는 도움말을 사용하거나, 다음 조치 중 하나를 수행하여 사용자를 사용자 정의 도움말 컨텐츠로 경로 재지정할 수 있습니다.<br><br><ul><li>사용자 정의 도움말 시스템으로 지정</li><li>IBM Content Navigator와 함께 배치된 IBM Knowledge Center의 인스턴스에 도움말 추가.</li></ul>",
		admin_desktop_help_url_url_hover: "사용자 정의 도움말 시스템의 URL을 입력하십시오. IBM Content Navigator에서는 사용자가 지정한 URL 끝에 index.jsp?content=/com.ibm.usingeuc.doc/ 및 파일 이름이 추가됩니다. 작업할 인터페이스 내의 \"추가 학습\" 링크의 경우, 도움말 시스템이 통합 일반 사용자 도움말과 동일한 파일 이름을 사용해야 합니다. ",
		admin_desktop_deprecated_appearance_title: "더 이상 사용되지 않는 설정",
		admin_desktop_deprecated_appearance_instructions: "사용자 정의 테마를 사용하는 경우 해당 설정은 사용자 정의 테마로 대체됩니다. 이 섹션의 설정보다 저 자세한 스타일링을 제공하는 사용자 정의 테마로 해당 설정을 마이그레이션해야 합니다. 또한 사용자 정의 테마는 다중 데스크탑으로 사용할 수 있습니다.",

		admin_desktop_plugins_title: "이 데스크탑의 플러그인을 사용 또는 사용 안함으로 설정합니다.",
		admin_desktop_plugins_enable_all_plugins: "배치된 모든 플러그인을 이 데스크탑에서 사용하도록 설정",
		admin_desktop_plugins_select_plugins: "이 데스크탑에서 사용할 배치된 플러그인 선택",
		admin_desktop_plugins_select_plugin: "플러그인 선택",

		admin_desktop_layout_features: "표시된 기능:",
		admin_desktop_layout_features_hover: "이 데스크탑에서 사용자가 액세스하도록 허용할 기능을 선택하십시오.  이 기능은 나열된 순서대로 표시됩니다.<br><br>기능을 선택할 때 기능에 대해 선택된 기본 저장소와 같이 데스크탑에서 기능의 일부 동작을 사용자 정의할 수 있습니다.",
		admin_desktop_layout_default_repository: "기본 저장소:",
		admin_desktop_layout_default_repository_layout_hover: "사용자가 이 기능을 열면 기본적으로 선택되는 저장소를 지정하십시오.",
		admin_desktop_layout_document_thumbnails: "문서 썸네일:",
		admin_desktop_layout_document_thumbnails_hover: "문서 정보 분할창에 문서의 썸네일을 표시할 것인지 여부를 지정하십시오.<br><br>썸네일을 표시하면 웹 클라이언트의 성능이 느려질 수 있습니다.",
		admin_desktop_layout_show_filmstrip_view: "슬라이드 보기:",
		admin_desktop_layout_show_filmstrip_view_hover: "사용자가 컨텐츠 목록 표시를 슬라이드 보기로 전환하도록 허용할 것인지 여부를 지정하십시오.<br><br>슬라이드 보기는 사용자가 선택하는 각 문서의 미리보기를 생성합니다. 그러나 슬라이드 보기를 사용하면 웹 클라이언트의 성능이 느려질 수 있습니다. 또한 문서 미리보기를 보려면 HTML 변환 뷰어를 구성해야 합니다.",
		admin_enabled: "사용",
		admin_disabled: "사용 안함",
		admin_include: "포함",
		admin_exclude: "제외",
		admin_layout_teamspaces_default_repository: "팀 작업영역:",
		admin_layout_entry_templates_default_repository: "입력 템플리트:",
		admin_layout_other_features_default_repository: "검색 및 찾아보기:",
		admin_layout_work_default_repository: "작업:",
		admin_layout_default_feature: "기본 기능:",
		admin_default_category_placeholder: "기능 선택",
		admin_layout_default_feature_hover: "사용자가 이 데스크탑에 로그인할 때 표시되는 기능을 지정하십시오.",
		admin_layout_default_feature_warning: "기본 기능을 변경하면 애플리케이션을 로드하는 데 필요한 시간에 영향을 줄 수 있습니다.",
		admin_layout_feature_list_header: "기능",
		admin_layout_show_statusbar: "상태 표시줄:",
		admin_layout_show_statusbar_hover: "데스크탑의 맨 아래에 상태 표시줄 표시 여부를 지정하십시오.<br><br>상태 표시줄을 숨기는 경우 사용자는 다음과 같이 비오류 이벤트에 대한 정보를 볼 수 없습니다.<ul><li>문서가 저장소에 추가되었습니다.</li><li>검색이 59개의 문서를 리턴했습니다.</li></ul>",
		admin_layout_show_magazineview: "매거진 보기:",
		admin_layout_show_magazineview_hover: "사용자가 컨텐츠 목록 표시를 매거진 보기로 전환하도록 허용할 것인지 여부를 지정하십시오.<br><br>매거진 보기는 컨텐츠 목록에서 각 항목의 높이를 늘리므로 컨텐츠 목록에 동시에 표시할 수 있는 항목 수가 줄어듭니다.",
		admin_layout_show_detailsview: "세부사항 보기",
		admin_layout_show_detailsview_hover: "사용자가 컨텐츠 목록 표시를 세부사항 보기로 전환하도록 허용할 것인지 여부를 지정하십시오.<br><br>세부사항 보기는 컨텐츠 목록에서 표시 가능한 행 수를 최대화합니다.",
		admin_feature_config_docinfopane_label: "문서 정보 분할창:",
		admin_feature_config_docinfopane_hoverhelp: "사용자가 이 기능에서 문서 정보 분할창에 액세스할 수 있는지 여부를 지정하십시오.",
		admin_feature_config_docinfopane_default_label: "기본 동작:",
		admin_feature_config_docinfopane_expanded: "펼침",
		admin_feature_config_docinfopane_collapsed: "접힘",
		admin_feature_config_docinfopane_expand_on_select: "항목 선택 시 펼치기",
		admin_layout_features_title: "데스크탑 기능",
		admin_layout_features_instructions: "사용자가 이 데스크탑에서 액세스할 수 있는 기능을 지정하십시오. 또한 데스크탑에 포함되는 각 기능의 동작을 사용자 정의할 수 있습니다.",
		admin_layout_components_title: "추가 데스크탑 컴포넌트",
		admin_layout_components_instructions: "보다 간결한 인터페이스를 원하거나 웹 클라이언트의 성능을 향상시키려면 데스크탑의 일부 컴포넌트를 사용 안함으로 설정할 수 있습니다.",
		admin_layout_featureconfig_instructions: "구성할 기능 선택",
		admin_layout_featureconfig_no_configuration: "사용 가능한 기능 구성이 없습니다.",
		admin_layout_featureconfig_label: "기능 ${0}의 구성",
		admin_layout_featureconfig_title: "기능 구성",
		admin_layout_featureconfig_taskManagerURL: "이 기능을 사용하려면 태스크 관리자 서비스에 연결하도록 IBM Content Navigator를 사용하도록 설정하고 구성해야 합니다. 이 관리 도구의 <b>설정</b> 섹션에서 태스크 관리자 서비스를 사용하도록 설정하십시오.",
		admin_feature_config_show_my_checkouts_label: "내 체크아웃 분할창:",
		admin_feature_config_show_my_checkouts_hoverhelp: "내 체크아웃 분할창을 사용하면 특정 저장소에서 체크아웃된 모든 항목에 대한 검색을 실행할 수 있습니다. 홈 기능에서 내 체크아웃 분할창을 액세스할 수 있는지 여부를 지정하십시오.<br/><br/><b>제한사항:</b> 이 기능을 사용하려면 이 데스크탑과 연관된 하나 이상의 IBM Content Manager, IBM FileNet P8 또는 OASIS CMIS 저장소가 있어야 합니다.",

		admin_feature_config_default_repository_icon_text: "기본 저장소",
		admin_show: "표시",
		admin_hide: "숨기기",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "관리 데스크탑에서 관리 기능을 제거할 수 없습니다.",
		admin_warning_label: "경고:",
		admin_layout_show_globaltoolbar: "글로벌 도구 모음:",
		admin_layout_show_globaltoolbar_hover: "데스크탑 맨 위의 배너에 도구 모음 표시 여부를 지정하십시오.<br><br>글로벌 도구 모음에는 사용자가 저장소에 문서, 폴더, 보류항목을 추가할 수 있는 조치가 포함됩니다. 사용 가능한 조치는 사용자가 연결된 저장소에 따라 다릅니다.",
		admin_interface_text_name_label: "레이블 유형",

		admin_interface_text_label_description: "웹 클라이언트의 특정 영역에 표시되는 텍스트를 사용자 정의할 수 있습니다. 구성에 있는 모든 저장소 및 데스크탑에 대해서는 레이블이 표시됩니다. 현재 레이블 필드에 있는 인터페이스에 표시하려는 텍스트를 입력하십시오.<br><br><b>중요:</b> 레이블을 변경해도 해당 변경사항이 관리 도구에서 표시되지 않습니다.",
		admin_interface_text_label_action: "조치 레이블",
		admin_interface_text_label_action_description: "조치 레이블은 웹 클라이언트의 단추와 메뉴에 표시됩니다. 각 저장소 유형에 대해 다양한 조치 레이블을 정의할 수 있습니다.",
		admin_interface_text_label_application: "애플리케이션 레이블",
		admin_interface_text_label_application_description: "웹 클라이언트 전체에서 애플리케이션 레이블이 표시됩니다.",
		admin_interface_text_label_system: "시스템 특성 레이블",
		admin_interface_text_label_system_description: "시스템 특성은 저장소에 따라 다르게 표시됩니다. 저장소의 문서 및 폴더와 연관된 시스템 특성에 대해 표시되는 레이블을 사용자 정의할 수 있습니다.",
		admin_interface_text_label_desktop: "데스크탑 레이블",
		admin_interface_text_label_desktop_description: "데스크탑에서 애플리케이션의 이름을 사용자 정의한 경우, 영어가 아닌 다른 언어로 이름을 사용자 정의할 수 있습니다. 데스크탑에서 IBM FileNet P8 애플리케이션 공간의 이름을 사용자 정의할 수도 있습니다.",

		admin_interface_text_system_label: "시스템 레이블",
		admin_interface_text_current_label: "현재 레이블",
		admin_interface_text_default_label_heading: "기본 레이블",
		admin_interface_text_default_label: "기본 레이블:",
		admin_interface_text_displayed_in_label: "표시된 대상",
		admin_interface_text_displayed_in_document_folder: "문서 및 폴더",
		admin_interface_text_displayed_in_document: "문서",
		admin_interface_text_displayed_in_folder: "폴더",
		admin_interface_text_displayed_in_admin_application_space: "애플리케이션 공간 레이블",
		admin_interface_text_displayed_in_desktop: "모바일의 기능 레이블",
		admin_interface_text_displayed_in_admin_application_name: "애플리케이션 이름",

		admin_new_desktop: "새 데스크탑",
		admin_new_repository: "새 저장소",
		admin_new_menu: "새 메뉴",
		admin_new_viewer_mapping: "새 뷰어 맵",
		admin_new_mapping_label: "새 맵핑",
		admin_new_icon_mapping: "새 아이콘 맵핑",
		admin_viewer_mapping_list_instructions: "웹 클라이언트가 여러 유형의 컨텐츠를 표시하는 데 사용하는 뷰어를 구성할 수 있습니다. 뷰어 웹은 사용하는 개별 뷰어와 연관된 MIME 유형을 정의합니다. 여러 데스크탑에 서로 다른 뷰어를 사용하려는 경우 여러 뷰어 맵을 작성할 수 있습니다.",
		admin_viewer_mapping_instructions: "파일을 여는 데 사용하려는 뷰어를 지정하십시오. 사용자 정의 뷰어를 사용하려면 뷰어 맵에 추가하기 전에 뷰어를 플러그인으로 통합해야 합니다.<br><br><b>중요:</b> 사용자가 문서를 열 때 웹 클라이언트는 뷰어 맵핑 목록을 검색하여 사용자가 실행 중인 운영 체제 및 사용자가 연결되어 있는 저장소를 기반으로 문서를 열 수 있는 첫 번째 뷰어를 찾습니다. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "새 플러그인",
		admin_menu_list_instructions: "사용자 정의된 도구 모음 및 컨텍스트 메뉴를 작성하여 사용자가 사용할 수 있는 조치를 제어할 수 있습니다. 기본 메뉴를 편집할 수 없지만 기본 메뉴를 복사하여 사용 가능한 조치를 제한하거나 플러그인에 정의된 사용자 정의 조치를 추가할 수 있습니다.<br><br>새 메뉴 유형을 작성하려면 플러그인에 메뉴를 정의해야 합니다.",
		admin_menu_id_hover: "ID는 고유해야 하며 메뉴를 저장한 후에는 ID를 변경할 수 없습니다.<br><br>ID에는 영숫자만 포함될 수 있고 대소문자를 구분합니다.",
		admin_menu_id_disabled_hover: "메뉴 ID는 변경할 수 없습니다. 다른 ID를 사용하려면 새 메뉴를 작성해야 합니다.",
		admin_menu_default_instructions: "기본 메뉴가 아니기 때문에 이 메뉴를 편집할 수 없습니다. 이 메뉴를 편집하려면 메뉴 사본을 작성해야 합니다.",
		admin_menu_toolbar_instructions: "이 도구 모음에 사용할 수 있는 조치를 제한하거나 플러그인에 정의된 사용자 정의 조치를 추가할 수 있습니다. 구분자를 도구 모음에 추가하여 조치를 구성할 수도 있습니다.",
		admin_menu_toolbar_custom_instructions: "이 도구 모음은 플러그인에서 정의합니다. 이 도구 모음을 편집하려면 플러그인을 업데이트하거나 도구 모음의 사본을 작성하십시오.",
		admin_menu_context_menu_instructions: "이 컨텍스트 메뉴에 사용할 수 있는 조치를 제한하거나 플러그인에 정의된 사용자 정의 조치를 추가할 수 있습니다. 구분자와 서브메뉴를 컨텍스트 메뉴에 추가하여 조치를 구성할 수도 있습니다.",
		admin_menu_context_menu_custom_instructions: "이 컨텍스트 메뉴는 플러그인에서 정의합니다. 이 컨텍스트 메뉴를 편집하려면 플러그인을 업데이트하거나 컨텍스트 메뉴의 사본을 작성하십시오.",
		admin_desktop_list_instructions: "데스크탑을 여러 개 구성하여 다른 사용자가 필요한 컨텐츠에 액세스하도록 할 수 있습니다. 예를 들어, 사용자가 컨텐츠만 검색할 수 있도록 하는 데스크탑을 구성하거나 사용자가 단일 저장소에 액세스할 수 있도록 허용하는 데스크탑을 작성할 수 있습니다. ",
		admin_plugin_updated: "선택한 플러그인의 구성이 변경되었습니다. 변경사항을 적용하려면 브라우저를 새로 고쳐야 합니다.",
		admin_repository_ci_heading: "Content Integrator 저장소: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager 저장소: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager 저장소: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand 저장소: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS(Content Management Interoperability Services) 저장소: <b>${0}</b>",
		admin_repository_box_heading: "Box 저장소: <b>${0}</b>",
		admin_repository_generic_heading: "저장소: <b>${0}</b>",

		admin_delete_confirmation_desktops: "선택한 데스크탑을 삭제하시겠습니까?\n${0}개의 데스크탑이 선택되었습니다.",
		admin_delete_confirmation_menus: "선택한 메뉴를 삭제하시겠습니까?\n${0}개의 메뉴가 선택되었습니다.",
		admin_delete_confirmation_repositories: "선택한 저장소를 삭제하시겠습니까?\n${0}개의 저장소가 선택되었습니다.",
		admin_delete_confirmation_viewer_mappings: "선택한 뷰어 맵을 삭제하시겠습니까?  ${0}개의 맵이 선택되었습니다.",
		admin_delete_confirmation_icon_mappings: "선택한 아이콘 구성을 삭제하시겠습니까?\n${0}개의 아이콘 구성이 선택되었습니다.",
		admin_delete_confirmation_plugins: "선택한 플러그인을 삭제하시겠습니까?\n${0} 개의 플러그인이 선택되었습니다.",
		admin_delete_confirmation: "선택한 항목을 삭제하시겠습니까?\n${0}개의 항목이 선택되었습니다.",

		admin_viewer_mapping_id_hover: "ID는 고유해야 하며 뷰어 맵을 저장한 후에는 ID를 변경할 수 없습니다.<br><br>ID에는 영숫자만 포함될 수 있고 대소문자를 구분합니다.",
		admin_viewer_mapping_id_disabled_hover: "뷰어 맵 ID는 변경할 수 없습니다. 다른 ID를 사용하려면 새 뷰어 맵을 작성해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "기본 데스크탑은 삭제할 수 없습니다.",

		admin_desktop_heading: "데스크탑: <b>${0}</b>",
		admin_menu_toolbar_heading: "도구 모음: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "사용자 정의 도구 모음: <b>${0}</b>",
		admin_menu_context_menu_heading: "컨텍스트 메뉴: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "사용자 정의 컨텍스트 메뉴: <b>${0}</b>",
		admin_plugin_heading: "플러그인: <b>${0}</b>",
		admin_plugin_instructions: "플러그인은 JAR 파일 또는 컴파일된 클래스 파일일 수 있습니다.<br/><br/><b>중요:</b> IBM Content Navigator 웹 애플리케이션 서버가 URL을 통하거나 로컬 파일 시스템의 플러그인 파일에 액세스할 수 있어야 합니다.",
		admin_plugin_list_instructions: "관리 도구를 사용하여 웹 클라이언트의 플러그인을 등록해야 합니다. 플러그인이 추가 구성을 필요로 하면 플러그인을 등록한 후 구성 매개변수가 표시됩니다.<br /><br /><b>중요:</b> 메뉴와 같이 관리 도구의 다른 영역에서 참조된 플러그인을 편집하면, 플러그인 동작에 문제가 발생할 수 있습니다. 또한 플러그인은 나열된 순서대로 호출됩니다. 플러그인을 다른 플러그인 이전에 실행하려면 해당 플러그인이 실행되어야 하는 순서로 나열되어 있는지 확인하십시오.",
		admin_plugin_cannot_delete: "일부 플러그인이 종속되어 있어서 선택한 플러그인을 삭제할 수 없습니다.<br/>선택한 플러그인: ${0}<br/>종속 플러그인: ${1}",
		admin_plugin_cannot_disable: "일부 플러그인이 종속되어 있어서 선택한 플러그인을 사용 안함으로 설정할 수 없습니다.<br/>선택한 플러그인: ${0}<br/>종속 플러그인: ${1}",
		admin_plugin_cannot_add: "종속된 일부 플러그인이 누락되거나 사용 안함으로 설정되어 플러그인을 추가할 수 없습니다. 누락되거나 사용 안함으로 설정된 플러그인: ${0}",
		admin_plugin_cannot_enable: "종속된 일부 플러그인이 누락되거나 사용 안함으로 설정되어 선택한 플러그인을 사용으로 설정할 수 없습니다.<br/>선택한 플러그인: ${0}<br/>누락되거나 사용 안함으로 설정된 플러그인: ${1}",
		admin_plugin_save_order: "순서 저장",
		admin_plugin_load: "로드",
		admin_plugin_load_hover: "플러그인 URL 지정",
		admin_plugin_file_hover: "플러그인 JAR 파일이 로컬 파일 시스템에 있는 경우 플러그인 파일의 URL 또는 완전한 경로를 입력할 수 있습니다. 플러그인 JAR 파일이 원격 서버에 있는 경우 플러그인 파일의 URL을 입력해야 합니다.",
		admin_plugin_classfolderpath_hover: "컴파일된 클래스 파일은 IBM Content Navigator 웹 애플리케이션 서버에 있어야 합니다.<br/><br/>플러그인 클래스가 컴파일되어 생성되는 폴더의 완전한 경로를 입력하십시오.<br/><br/>경로는 플러그인 클래스의 패키지 이름을 포함하지 않아야 합니다. 예를 들어, Windows의 샘플 플러그인 클래스의 기본 경로가 C:\\Program Files (x86)\\IBM\\ECMClient\\bin입니다.",
		admin_plugin_classfoldername_hover: "플러그인 클래스로 로드되어 호출되어야 하는 클래스 파일 내에서 Java 클래스의 전체 이름을 입력하십시오.<br/>예를 들어, 샘플 플러그인의 클래스 이름이 com.ibm.ecm.extension.sample.<br/>SamplePlugin입니다.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "지정된 URL에서 플러그인 JAR 파일을 찾을 수 없습니다. JAR 파일이 웹 애플리케이션 서버에 있는지 확인하고 URL 및 파일 이름이 올바른지 확인하십시오.",
		admin_plugin_for_repository_not_loaded: "이 저장소를 편집할 수 없습니다. 이러한 유형의 저장소를 정의하고 지원하는 플러그인이 로드되지 않았습니다. 플러그인 탭에서 플러그인을 편집하여 올바르게 구성되었으며 로드되었는지 확인하십시오.",
		admin_plugin_repository_types: "저장소 유형:",
		admin_plugin_viewers: "뷰어:",
		admin_plugin_features: "기능:",
		admin_plugin_layouts: "레이아웃:",
		admin_plugin_not_available: "사용할 수 없음",
		admin_plugin_config_params: "구성 매개변수:",
		admin_viewer_def_heading: "뷰어 맵: <b>${0}</b>",
		admin_users_and_groups: "사용자 및 그룹",
		admin_general: "일반",
		admin_logging: "로깅",
		admin_authentication: "인증",		
		admin_rolebase_role: "역할:",
		admin_settings_logging_instructions: "로깅을 사용하여 웹 클라이언트의 문제점을 해결할 수 있습니다. 문제점이 특정 Java 클래스 또는 특정 사용자에 한해서 발생하는 경우 로깅을 세분화할 수 있습니다. 오류 정보가 웹 애플리케이션 서버 오류 로그 파일에 기록됩니다.",
		admin_settings_logging_instructions2: "<b>디버그 로깅 설정</b><br />문제점이 특정 클라이언트 호스트 시스템 또는 사용자에 한해서 발생하는 경우 디버그 로깅의 대상을 해당 시스템 또는 사용자로 지정할 수 있습니다. 시스템의 성능에 큰 영향을 미치지 않고 프로덕션 환경에서 디버그 정보를 캡처할 수 있습니다.<br /><br /><b>중요:</b> 클라이언트 호스트 시스템 또는 사용자를 지정하는 경우 이 설정이 다른 로깅 설정을 재정의합니다. 필요한 정보를 캡처한 후 이 옵션을 <b>없음</b>으로 설정하여 사용자 환경의 표준 로깅을 재개하십시오.",
		admin_settings_export_config_hover: "IBM Support Assistant Data Collector와 함께 사용하기 위해 현재 시스템 구성 정보를 파일로 내보내십시오. user.home Java 시스템 특성으로 정의된 위치에 파일이 저장됩니다.",
		admin_logging_level: "애플리케이션 레벨 로깅:",
		admin_logging_level_hover: "로깅 레벨은 서버에 저장되는 정보의 양에 영향을 줍니다. <b>오류</b> 캡처를 선택하면 최소의 로깅 정보를 캡처합니다. <b>디버그</b>는 가장 많은 정보를 캡처합니다.<br /><br />IBM Software Support에서 지침을 제공하는 경우를 제외하고 프로덕션 환경에서 <b>디버그</b>를 지정하지 마십시오.",
		admin_logging_level_0: "로깅 안함",
		admin_logging_level_1: "오류",
		admin_logging_level_2: "경고",
		admin_logging_level_3: "정보",
		admin_logging_level_4: "디버그",
		admin_logging_classes: "Java 클래스 레벨 로깅:",
		admin_logging_classes_hover: "기본적으로 모든 Java 클래스 및 패키지가 웹 애플리케이션 서버 오류 로그에 포함됩니다. 그러나 로깅에서 포함하거나 제외할 클래스 또는 패키지를 지정할 수 있습니다. 웹 애플리케이션 서버 오류 로그를 사용하여 포함하거나 제외할 클래스를 판별할 수 있습니다.<br><br>문제점이 특정 클래스에서 발생하는 경우 특히 해당 클래스를 로그 파일에 포함할 수 있습니다. 오류 로그에 클래스를 포함하는 경우 다른 모든 클래스가 로그 파일에서 제외됩니다.<br><br>문제점이 클래스에서 발생하지 않으며 로그 파일의 크기를 줄이려면 로그 파일에서 해당 클래스를 제외할 수 있습니다.",
		admin_logging_classes_include: "포함",
		admin_logging_classes_include_all: "모든 클래스",
		admin_logging_classes_include_specified: "특정 클래스",
		admin_logging_classes_include_specified_msg: "포함할 클래스를 지정하십시오.",
		admin_logging_classes_exclude: "제외",
		admin_logging_classes_exclude_none: "없음",
		admin_logging_classes_exclude_specified: "특정 클래스",
		admin_logging_classes_exclude_specified_msg: "제외할 클래스를 지정하십시오.",
		admin_logging_debug: "디버그 로깅 대상:",
		admin_logging_debug_hover: "<b>중요:</b> 클라이언트 호스트 시스템 IP 주소 또는 사용자를 지정하기 전에 웹 애플리케이션 서버 로그 파일을 검토하십시오. 입력하는 값은 로그 파일에 표시되는 값과 동일해야 합니다.",
		admin_logging_debug_none: "없음(기본값)",
		admin_logging_debug_host: "클라이언트 호스트 시스템(IP 주소)",
		admin_logging_debug_host_msg: "디버그 정보를 로깅할 클라이언트 시스템의 IP 주소를 하나 이상 지정하십시오. 쉼표를 사용하여 여러 개의 IP 주소를 구분하십시오.<br /><br /><b>중요:</b> IP 주소를 지정하기 전에 웹 애플리케이션 서버 로그 파일을 검토하십시오. 입력하는 값은 로그 파일에 표시되는 값과 동일해야 합니다.",
		admin_logging_debug_user: "사용자",
		admin_logging_debug_user_msg: "디버그 정보를 로깅할 사용자의 이름을 하나 이상 지정하십시오. 쉼표를 사용하여 여러 개의 사용자 이름을 구분하십시오.<br /><br /><b>중요:</b> 사용자 이름을 지정하기 전에 웹 애플리케이션 서버 로그 파일을 검토하십시오. 입력하는 값은 로그 파일에 표시되는 값과 동일해야 합니다.",

		admin_office_settings_logging_instructions: "로깅을 사용하여 IBM Content Navigator for Microsoft Office의 문제점을 해결할 수 있습니다. 문제점이 특정 클래스 또는 특정 사용자에 한해서 발생하는 경우 로깅을 세분화할 수 있습니다. 오류 정보가 IBM Content Navigator for Microsoft Office 클라이언트 호스트 시스템의 애플리케이션 로그 파일에 기록됩니다. ",
		admin_office_settings_logging_instructions2: "<b>디버그 로깅 설정</b><br />문제점이 특정 클라이언트 호스트 시스템 또는 IBM Content Navigator for Microsoft Office 사용자에 한해서 발생하는 경우 디버그 로깅의 대상을 해당 시스템 또는 사용자로 지정할 수 있습니다. 시스템의 성능에 큰 영향을 미치지 않고 프로덕션 환경에서 디버그 정보를 캡처할 수 있습니다. <br /><br /><b>중요:</b> 클라이언트 호스트 시스템 또는 사용자를 지정하는 경우 이 설정이 다른 로깅 설정을 재정의합니다. 필요한 정보를 캡처한 후 이 옵션을 <b>없음</b>으로 설정하여 IBM Content Navigator for Microsoft Office 환경의 표준 로깅을 재개하십시오. ",
		admin_office_logging_debug_hover: "<b>중요:</b> 클라이언트 호스트 시스템 IP 주소 또는 사용자를 지정하기 전에 클라이언트 시스템 로그 파일을 검토하십시오. 입력하는 값은 로그 파일에 표시되는 값과 동일해야 합니다. ",
		admin_office_logging: "Office 로깅",
		admin_office_logging_classes: "클래스 레벨 로깅:",
		admin_office_logging_classes_hover: "기본적으로 모든 클래스 및 패키지가 IBM Content Navigator for Microsoft Office 오류 로그에 포함됩니다. 그러나 로깅에서 포함하거나 제외할 클래스 또는 패키지를 지정할 수 있습니다. 클라이언트 시스템 로그를 사용하여 포함하거나 제외할 클래스를 판별할 수 있습니다.<br /><br />문제점이 특정 클래스에서 발생하는 경우 특히 해당 클래스를 로그 파일에 포함할 수 있습니다. 오류 로그에 클래스를 포함하는 경우 다른 모든 클래스가 로그 파일에서 제외됩니다. <br /><br />문제점이 클래스에서 발생하지 않으며 로그 파일의 크기를 줄이려면 로그 파일에서 해당 클래스를 제외할 수 있습니다. ",
		admin_office_logging_debug_hover: "<b>중요:</b> 클라이언트 호스트 시스템 IP 주소 또는 사용자를 지정하기 전에 클라이언트 시스템 로그 파일을 검토하십시오. 입력하는 값은 로그 파일에 표시되는 값과 동일해야 합니다.",
		admin_office_logging_additional_settings: "추가 설정:",
		admin_office_logging_additional_settings_hover: "추가 설정 지정",
		admin_office_logging_file_size: "로그 파일 크기",
		admin_office_logging_file_size_hover: "IBM Content Navigator for Microsoft Office가 새 로그 파일을 작성하는 크기를 지정하십시오. 로그 파일이 최대 크기에 도달하면 날짜(YYYYMMdd 형식 사용) 및 파일 증분 번호(예: ICNExcelAddin-20121116-5.log)를 포함하여 현재 로그의 이름을 바꾸고 새 로그 파일이 작성됩니다. ",
		admin_office_logging_show_stacktrace_on_dialogs: "대화 상자에 스택 추적 표시",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "선택적으로 메시지 대화 상자에 스택 추적 정보를 표시하면 문제점을 해결하는 데 도움이 됩니다. 이 옵션을 사용하지 않는 경우에도 자세한 스택 추적 정보가 항상 IBM Content Navigator for Microsoft Office 오류 로그에 포함됩니다. ",

		admin_icon_state_twisty: "상태 아이콘",
		admin_icon_state_icon: "상태 아이콘",
		admin_icon_state: "상태",
		state_contains_label: "상태 포함",
		admin_icon_state_instructions: "저장소에서 문서, 폴더 및 작업 항목 옆에 표시되는 아이콘을 사용자 정의할 수 있습니다.<br><br><b>팁:</b> 환경의 개별 저장소에 대한 상태 아이콘을 표시하는지 지정할 수 있습니다.",
		admin_icon_state_dialog_title: "상태 아이콘 맵핑",
		admin_icon_state_dialog_instructions: "선택한 상태를 웹 클라이언트와 함께 제공되는 사전 정의된 아이콘이나 사용자 정의 아이콘에 맵핑할 수 있습니다.",

		admin_icon_mapping_twisty: "MIME 유형 아이콘",
		admin_icon_mapping_dialog_title: "아이콘 맵핑",
		admin_icon_mapping: "아이콘 맵핑",
		admin_icon_mapping_instructions: "MIME 유형 목록을 웹 클라이언트와 함께 제공되는 사전 정의된 아이콘이나 사용자 정의 아이콘에 맵핑할 수 있습니다.",
		admin_icon_mapping_list_instructions: "저장소에 저장되어 있는 여러 MIME 유형에 대해 표시되는 아이콘을 사용자 정의할 수 있습니다. 웹 클라이언트는 아이콘을 나열된 순서대로 사용합니다. MIME 유형이 두 번 이상 표시되면 해당 MIME 유형과 연관된 첫 번째 아이콘을 사용합니다.",
		admin_icon_mapping_icon_label: "어떤 아이콘을 사용하시겠습니까?",
		admin_icon_mapping_file_name: "사용자 정의 아이콘:",
		admin_icon_mapping_file_name_heading: "사용자 정의 아이콘",
		admin_icon_mapping_file_name_placeholder: "아이콘 URL 지정",
		admin_icon_mapping_file_name_hover: "아이콘의 URL을 입력하십시오. 아이콘이 웹 클라이언트와 동일한 웹 애플리케이션 서버에 있는 경우, 상대 URL을 입력하십시오. 예: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "사전 정의된 아이콘:",
		admin_icon_mapping_class_name_heading: "사전 정의된 아이콘",
		admin_icon_mapping_class_name_hover: "웹 클라이언트와 함께 제공되는 아이콘을 선택하십시오.",
		admin_icon_mapping_class_name_placeholder: "아이콘 선택",

		admin_p8_instructions: "이 정보는 웹 클라이언트에 맞게 구성된 모든 FileNet Content Manager 저장소에서 공유합니다.",
		admin_p8_collaboration_config: "선택적 FileNet Collaboration Services 구성",
		admin_p8_collaboration_config_instructions: "IBM FileNet P8 환경에 맞게 FileNet Collaboration Services를 조정할 경우 이러한 매개변수를 구성할 수 있습니다.",
		admin_p8_use_url_incoming: "수신 요청에서 URL을 사용하여 응답 URL을 생성하십시오.",
		admin_p8_use_url_incoming_hover: "대부분의 FileNet Collaboration Services 환경에서 수신 요청의 URL을 사용하여 응답에서 URL을 생성할 수 있습니다. 다음 상황 중 하나가 사용자의 환경에 적용되지 않으면 <b>예</b>를 선택하십시오.<ul><li>클라이언트 애플리케이션이 특정 URL을 통해 FileNet Collaboration Services에 액세스하도록 강제 실행할 수 있습니다.<li>프록시 서버 설정으로 FileNet Collaboration Services가 유효하지 않은 URL을 생성합니다.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL:",
		admin_p8_use_url_incoming_http_hover: "클라이언트 애플리케이션이 http://FNCSserver:port_number 형식으로 FileNet Collaboration Services에 액세스하는 데 사용할 수 있는 URL을 지정하십시오.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL:",
		admin_p8_use_url_incoming_https_hover: "FileNet Collaboration Services가 SSL을 사용하도록 구성된 경우 클라이언트 애플리케이션이 https://FNCSserver:port_number 형식으로 FileNet Collaboration Services에 액세스하는 데 사용할 수 있는 HTTPS URL을 지정하십시오.",
		admin_p8_hide_email_addresses: "서버 응답에서 사용자 이메일 주소 숨기기:",
		admin_p8_hide_email_addresses_hover: "개인정보 보호정책을 준수해야 하는 경우 서버 응답에서 사용자의 이메일 주소를 숨길 수 있습니다. 예를 들어, 서버가 문서 목록 및 문서를 작성하거나 편집한 사용자에 대한 정보를 리턴할 때 사용자의 이메일 주소 목록을 숨길 수 있습니다.",

		admin_p8_mask_user_ids: "로그 파일에서 사용자 ID 감추기:",
		admin_p8_mask_user_ids_hover: "개인정보 보호정책을 준수해야 하는 경우 FileNet Collaboration Services 로그 파일에서 사용자 이름을 숨길 수 있습니다. 이 옵션을 사용하는 경우 사용자 이름이 해시 값으로 대체됩니다. 이 경우 사용자의 이름 또는 활동 레코드를 조정하지 않고 지원 용도로 IBM과 같은 외부 회사에 로그 파일을 제공할 수 있습니다.",

		admin_p8_soft_delete: "삭제된 파일을 복구함으로 이동:",
		admin_p8_soft_delete_hover: "사용자가 항목을 삭제하면 저장소에서 항목을 삭제하지 말고 항목을 복구함으로 이동하십시오. 항목이 제거될 때까지 복구함에 계속 있습니다. 대상 저장소가 복구함을 지원하지 않는 경우 이 설정을 무시합니다.<br><br><b>제한사항:</b> 복구함은 IBM FileNet P8 버전 5.2 이상에서 지원되며 Social Collaboration Base Extensions 추가 기능이 필요합니다.",

		admin_p8_download: "CDHC(Content Download HTTP Cache) 구성",
		admin_p8_download_instructions: "IBM FileNet Content Manager 저장소에 큰 파일이 많이 있는 경우 FileNet Collaboration Services가 큰 파일의 컨텐츠 요청을 전용 웹 서버로 안전하게 경로 재지정할 수 있도록 CDHC(Content Download HTTP Cache)를 구성할 수 있습니다.<br/><br/>이 기능에는 IBM HTTP Server가 필요합니다. 또한 IBM HTTP Server httpd.conf 파일을 업데이트해야 합니다.",
		admin_p8_download_cache: "CDHC(Content Download HTTP Cache):",
		admin_p8_download_cache_hover: "사용자 환경의 모든 IBM FileNet Content Manager 저장소에 CDHC(Content Download HTTP Cache)를 사용할 것인지 여부를 지정하십시오. 파일이 캐시되는 최소 파일 크기를 지정할 수 있습니다.",
		admin_p8_download_cache_folder: "완전한 캐시 디렉토리:",
		admin_p8_download_cache_folder_hover: "캐시된 파일을 저장할 디렉토리의 완전한 경로를 지정하십시오. 디렉토리가 파일 시스템으로 FileNet Collaboration Services 및 IBM HTTP Server에 표시되면 디렉토리는 공유 네트워크 디렉토리와 같은 운영 체제 또는 디바이스일 수 있습니다.",
		admin_p8_download_cache_url: "캐시 위치의 별명:",
		admin_p8_download_cache_url_hover: "FileNet Collaboration Services URL에서 캐시 디렉토리를 가리키는 데 사용되는 별명을 지정하십시오. /별명 형식(예: /cdhc)을 사용하여 별명을 지정하십시오.<br/><br/>/cdhc가 URL에 포함된 경우 애플리케이션은 완전한 캐시 디렉토리로 경로 재지정됩니다.",
		admin_p8_download_cache_max_files: "캐시된 최대 파일 수:",
		admin_p8_download_cache_max_files_hover: "최대 파일 수에 도달하면 가장 오래된 파일이 캐시에서 제거됩니다.<br><br>캐시할 최대 파일 수와 캐시의 최대 크기를 지정하는 경우 두 조건 중 낮은 조건이 충족되면 가장 오래된 파일이 캐시에서 제거됩니다.",
		admin_p8_download_cache_max_size: "최대 캐시 크기(GB):",
		admin_p8_download_cache_max_size_hover: "최대 캐시 크기에 도달하면 가장 오래된 파일이 캐시에서 제거됩니다.<br/><br/>캐시할 최대 파일 수와 캐시의 최대 크기를 지정하는 경우 두 조건 중 낮은 조건이 충족되면 가장 오래된 파일이 캐시에서 제거됩니다.",
		admin_p8_download_cache_cleanup_duration: "최대 정리 지속기간(초):",
		admin_p8_download_cache_cleanup_duration_hover: "정리 오퍼레이션에 소요되는 최대 시간을 지정하십시오. 기본 지속기간은 5초입니다.<br><br>삭제될 수 있지만 정리 오퍼레이션 이후 캐시에 남아 있는 파일은 이후 정리 오퍼레이션 중 제거됩니다.",
		admin_p8_download_cache_cleanup_min: "캐시 정리 오퍼레이션 간 최소 간격(초):",
		admin_p8_download_cache_cleanup_min_hover: "캐시 정리 오퍼레이션 간 경과해야 하는 최소 시간을 지정하십시오. 기본 시간은 3,600초(1시간)입니다.<br><br>캐시 정리 오퍼레이션은 캐시에서 컨텐츠를 다운로드하는 활성 요청이 있는 경우에만 발생합니다. 요청이 1분마다 발생하는 경우 정리 오퍼레이션은 1시간마다 발생합니다. 그러나 다운로드 요청 사이에 3시간이 경과하면 다음 다운로드 요청이 수신될 때까지 정리 오퍼레이션이 발생하지 않습니다.",
		admin_p8_download_cache_min_lifetime: "캐시의 최소 시간(초):",
		admin_p8_download_cache_min_lifetime_hover: "제거될 수 있기 전에 파일이 캐시에 보관되는 최소 기간을 지정하십시오. 기본 시간은 3,600초(1시간)입니다.<br><br>캐시가 최대 크기에 도달하거나 캐시에 최대 파일 수가 포함된 경우에도 파일이 지정된 기간 동안 캐시에 머물러 있을 때까지 캐시에서 가장 오래된 파일은 삭제될 수 없습니다.",
		admin_p8_download_cache_size_threshold: "캐시할 최소 파일 크기(KB):",
		admin_p8_download_cache_size_threshold_hover: "CDHC가 파일을 캐시하는 데 사용해야 하는 최소 크기를 지정하십시오. 파일이 지정된 크기보다 작은 경우 FileNet Collaboration Services가 배치되는 웹 애플리케이션 서버를 통해 파일이 경로 지정됩니다. 기본 크기는 1,000KB입니다.",
		admin_p8_download_guard_header: "게이트키핑을 위한 HTTP 헤더:",
		admin_p8_download_guard_header_hover: "클라이언트 애플리케이션이 IBM HTTP Server를 통해 요청을 라우트하지 않는 경우 캐시된 컨텐츠를 다운로드할 수 없습니다. 다운로드 실패를 방지하기 위해 특정 HTTP 헤더를 사용하는 수신 요청(IBM HTTP Server의 요청에 추가됨)만 캐시된 컨텐츠에 액세스할 수 있도록 지정할 수 있습니다.<br><br>HTTP 헤더는 IBM HTTP Server에서 구성되며 IBM HTTP Server를 통해 라우트되는 모든 수신 요청에 있습니다. 요청에 HTTP 헤더가 없는 경우 IBM HTTP Server가 아닌 웹 애플리케이션 서버를 통해 컨텐츠가 라우트됩니다.",
		admin_p8_download_generate_config: "구성 생성",
		admin_p8_download_generate_config_label: "IBM HTTP Server 구성:",
		admin_p8_download_generate_config_label_hover: "CHDC 구성을 작동하려면 IBM HTTP Server httpd.conf 파일을 업데이트해야 합니다. 구성 생성을 클릭하여 httpd.conf 파일에 추가해야 하는 명령문을 생성하십시오.",

		admin_logging_viewone_pro: "ViewONE Professional 로깅:",
		admin_logging_viewone_virtual: "ViewONE Virtual 로깅:",
		admin_logging_viewone_streamer: "Document Streaming Server Module 로깅:",
		admin_logging_viewone_streamer_hover: "Document Streaming Server Module 로깅 옵션은 관리 도구의 <b>Daeja ViewONE</b> 섹션에서 PDF 또는 TIFF 파일에 대한 스트리밍을 사용으로 설정한 경우에만 적용할 수 있습니다.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module 로깅:",
		admin_logging_viewone_redaction_hover: "Permanent Redaction Server Module 로깅 옵션은 사용자에게 Daeja ViewONE Professional의 교정 모듈을 사용할 자격이 있는 경우에만 적용할 수 있습니다.",

		admin_daeja_viewonepro: "프로페셔널",
		admin_daeja_viewonepro_stream_pdf_documents: "PDF 파일 스트리밍:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "저장소에 대형 PDF 문서가 있는 경우에는 사용자가 이 문서를 보다 빨리 볼 수 있도록 뷰어를 사용하여 문서 컨텐츠를 스트리밍할 수 있습니다. 그러나 사용자 환경에서 스트리밍이 작동하지 않으면 스트리밍을 사용 안할 수 있습니다.",
		admin_daeja_viewonepro_stream_tiff_documents: "TIFF 파일 스트리밍:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "저장소에 대형 TIFF 문서가 있는 경우에는 사용자가 이 문서를 보다 빨리 볼 수 있도록 뷰어를 사용하여 문서 컨텐츠를 스트리밍할 수 있습니다. 그러나 사용자 환경에서 스트리밍이 작동하지 않으면 스트리밍을 사용 안할 수 있습니다.",
		admin_daeja_viewonepro_show_file_buttons: "파일 단추",
		admin_daeja_viewonepro_show_file_menus: "파일 메뉴",
		admin_daeja_viewonepro_enable_file_keys: "파일 단축키",
		admin_daeja_viewonepro_file_keys_hover_help: "사용자가 키보드 단축키를 사용하여 파일 관련 작업(예: 파일 열기 또는 저장)을 수행하도록 하는지 여부를 지정하십시오. 특정 단축키에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼의 FileKeys 매개변수 설명을 참조하십시오.",
		admin_daeja_viewonepro_show_print_buttons: "인쇄 단추",
		admin_daeja_viewonepro_show_print_menus: "인쇄 메뉴",
		admin_daeja_viewonepro_enable_print_keys: "인쇄 단축키",
		admin_daeja_viewonepro_print_keys_hover_help: "사용자가 키보드 단축키를 사용하여 파일을 인쇄(예: 페이지 인쇄 또는 문서 인쇄)하도록 하는지 여부를 지정하십시오. 특정 단축키에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼의 PrintKeys 매개변수 설명을 참조하십시오.",
		admin_daeja_viewonepro_show_invert_buttons: "반전 단추",
		admin_daeja_viewonepro_annotation_tooltip: "기본 사용자 정의 어노테이션 도구 팁:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "사용자 정의 어노테이션에 대해 도구 팁이 지정되지 않을 때 표시할 텍스트를 입력하십시오. 텍스트에는 대체 가능한 토큰이 포함될 수 있습니다. 예를 들어, &quot;&lt;creator&gt;가 &lt;createdateonly&gt;에 이 어노테이션을 작성했습니다.&quot;대체 가능한 토큰에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼의 customAnnotationsToolTip 매개변수를 참조하십시오.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "사전 정의된 사용자 정의 도구 팁 사용",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "아래 텍스트 상자에 표시되는 시스템 정의된 사용자 정의 도구 팁 사용",
		admin_daeja_viewonepro_help_url: "도움말 URL:",
		admin_daeja_viewonepro_help_url_hover_help: "뷰어의 도움말 문서가 포함된 웹 페이지의 URL을 지정하십시오. 뷰어 도구 모음의 도움말 단추 및 도움말 메뉴 수행이 웹 페이지에서 열립니다. URL을 지정하지 않으면 도움말 단추 및 메뉴 수행이 표시되지 않습니다.",
		admin_daeja_viewonepro_image_stamp_resource_context: "이미지 스탬프 자원 컨텍스트:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "수행할 작업",
		admin_daeja_viewonepro_route_docs: "브라우저에 지원되지 않는 컨텐츠 라우팅:",
		admin_daeja_viewonepro_route_docs_hover_help: "사용자는 파일을 보기 위한 적합한 애플리케이션을 여는 브라우저로 라우팅함으로써 지원되지 않는 이미지 파일을 볼 수 있습니다. 예를 들어, Microsoft Word 문서를 열기 위해 브라우저는 Microsoft Word 뷰어를 사용합니다.",
		admin_daeja_viewonepro_scale: "이미지 자동 맞춤:",
		admin_daeja_viewonepro_scale_best: "최적 맞춤",
		admin_daeja_viewonepro_scale_ftow: "너비에 맞춤",
		admin_daeja_viewonepro_scale_ftoh: "높이에 맞춤",
		admin_daeja_viewonepro_enable_hotkeys: "단축키 사용:",
		admin_daeja_viewonepro_show_features: "단추 및 메뉴 표시:",
		admin_daeja_custom_settings: "추가 설정:",
		admin_daeja_custom_settings_hover_help: "매개변수 이름 및 값을 지정하여 기타 매개변수를 추가할 수 있습니다. 예를 들어, &quot;scrollbars&quot; 및 &quot;true&quot;를 지정해서 이미지가 표시 영역보다 큰 크기로 확대될 때 스크롤바를 표시할 수 있습니다. 매개변수 이름 및 값에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼을 참조하십시오.",
		admin_daeja_virtual: "가상",
		admin_daeja_virtual_annotation_tooltip: "기본 사용자 정의 어노테이션 도구 팁:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "사용자 정의 어노테이션에 대해 도구 팁이 지정되지 않을 때 표시할 텍스트를 입력하십시오. 텍스트에는 대체 가능한 토큰이 포함될 수 있습니다. 예를 들어, &quot;&lt;creator&gt;가 &lt;createdateonly&gt;에 이 어노테이션을 작성했습니다.&quot;대체 가능한 토큰에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼의 customAnnotationsToolTip 매개변수를 참조하십시오.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "사전 정의된 사용자 정의 도구 팁 사용",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "아래 텍스트 상자에 표시되는 시스템 정의된 사용자 정의 도구 팁 사용",
		admin_daeja_virtual_image_stamp_resource_context: "이미지 스탬프 자원 컨텍스트:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "수행할 작업",
		admin_daeja_virtual_license_path:"라이센스 파일 경로:",
		admin_daeja_virtual_license_path_hover_help:"lic-server-virtual.v1 및 lic-server.v1 라이센스 파일이 포함된 디렉토리의 완전한 경로를 지정하십시오.",
		admin_default_license_path:"기본 라이센스 파일 경로 사용",
		admin_license_path_specified:"사용자 정의 라이센스 파일 경로 사용",

		admin_daeja_streamer: "서버",
		admin_daeja_streamer_cache_root: "캐쉬 디렉토리:",
		admin_daeja_streamer_cache_root_hover_help: "빠른 액세스를 위해 캐시된 파일을 저장할 디렉토리의 완전한 경로를 지정하십시오. IBM Content Navigator 및 IBM HTTP Server에 파일 시스템으로 표시될 수 있는 경우, 디렉토리는 임의의 운영 체제 또는 디바이스에 있을 수 있습니다(예: 네트워크 디렉토리).성능을 개선하려면 로컬 디렉토리를 사용하십시오.",
		admin_daeja_streamer_settings: "추가 설정:",
		admin_daeja_streamer_settings_hover_help: "매개변수 이름 및 값을 지정하여 기타 매개변수를 추가할 수 있습니다. 예를 들어, “cookieAllowedDomainList” 및 호스트 서버의 쉼표로 분리된 목록을 지정할 수 있습니다. 매개변수 이름 및 값에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼을 참조하십시오.",

		admin_daeja_redaction: "영구 교정",
		admin_daeja_redaction_settings: "설정:",
		admin_daeja_redaction_settings_hover_help: "매개변수 이름 및 값을 지정하여 기타 매개변수를 추가할 수 있습니다. 예를 들어, “burnIncrementalAnnotations” 및 ”true”를 지정할 수 있습니다. 매개변수 이름 및 값에 대한 자세한 정보는 IBM Daeja ViewONE 매개변수 참조 매뉴얼을 참조하십시오.",

		admin_daeja_setting_dialog_title_new: "새 설정",
		admin_daeja_setting_dialog_title_edit: "설정 편집",
		admin_daeja_setting_dialog_hover_help: "매개변수 이름 및 값을 지정하여 기타 매개변수를 추가하십시오. 예를 들어, 이미지가 표시 영역보다 큰 크기로 확대될 때 스크롤바를 표시하고자 하는 경우에는 “scrollbars” 및 “true”를 지정할 수 있습니다.",
		admin_daeja_setting_dialog_field_hover_help: "매개변수 이름 및 값에 대한 자세한 정보는 Daeja ViewONE 매개변수 참조 매뉴얼을 참조하십시오.",

		admin_daeja_logging: "Daeja ViewONE 로깅",
		admin_daeja_logging_trace: "추적 로깅 사용",
		admin_daeja_logging_trace_net: "네트워크 로깅 사용",
		admin_daeja_logging_trace_annotations: "어노테이션 로깅 사용",
		admin_daeja_logging_log_file: "로그 파일:",
		admin_daeja_logging_instructions: "로깅을 사용하여 Daeja ViewONE Professional 및 Daeja ViewONE Virtual의 문제점을 해결할 수 있습니다. 특정한 기능에 문제가 발생하는 경우 해당 기능을 로깅하도록 대상을 지정할 수 있습니다.",

		admin_v1pro_logging_trace_hover: "이 설정을 사용하여 뷰어의 일반적인 문제점을 해결하십시오.<br><br>로깅 정보는 클라이언트 시스템의 Java 콘솔에 작성됩니다. 운영 체제의 제어판(Windows) 또는 시스템 환경 설정(Mac)에서 Java 콘솔에 액세스할 수 있습니다.",
		admin_v1pro_logging_trace_net_hover: "이 설정을 사용하여 다음 문제점을 해결하십시오.<ul><li>서버 연결의 문제점</li><li>MIME 유형의 문제점</li><li>파일이 너무 긴 문제점</li></ul>또한 네트워크 추적 로깅을 사용하여 Daeja ViewONE Professional 사용 중에 지연이 발생하는 위치를 판별할 수 있습니다.<br><br>로깅 정보는 클라이언트 시스템의 Java 콘솔에 작성됩니다. 운영 체제의 제어판(Windows) 또는 시스템 환경 설정(Mac)에서 Java 콘솔에 액세스할 수 있습니다.",
		admin_v1pro_logging_trace_annotations_hover: "이 설정을 사용하여 어노테이션 작성, 저장 또는 로드의 문제점을 해결하십시오.<br><br>로깅 정보는 클라이언트 시스템의 Java 콘솔에 작성됩니다. 운영 체제의 제어판(Windows) 또는 시스템 환경 설정(Mac)에서 Java 콘솔에 액세스할 수 있습니다.",

		admin_virtual_logging_trace_hover: "이 설정을 사용하여 뷰어의 일반적인 문제점을 해결하십시오.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 virtual.log 파일에 작성됩니다.",
		admin_virtual_logging_trace_net_hover: "이 설정을 사용하여 다음 문제점을 해결하십시오.<ul><li>서버 연결의 문제점</li><li>MIME 유형의 문제점</li><li>파일이 너무 긴 문제점</li></ul>또한 네트워크 추적 로깅을 사용하여 Daeja ViewONE Virtual 사용 중에 지연이 발생하는 위치를 판별할 수 있습니다.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 virtual.log 파일에 작성됩니다.",
		admin_virtual_logging_trace_annotations_hover: "이 설정을 사용하여 어노테이션 작성, 저장 또는 로드의 문제점을 해결하십시오.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 virtual.log 파일에 작성됩니다.",
		admin_virtual_logging_log_file_hover: "뷰어의 로깅을 사용하려면 로깅 정보를 저장할 로그 파일의 완전한 경로 및 이름을 지정해야 합니다. 로그 파일의 이름을 virtual.log로 지정하도록 권장합니다.",

		admin_streamer_logging_trace_hover: "이 설정을 사용하여 Document Streaming Server Module의 일반적인 문제점을 해결하십시오.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 streamer.log 파일에 작성됩니다.",
		admin_streamer_logging_trace_net_hover: "이 설정을 사용하여 다음 문제점을 해결하십시오.<ul><li>서버 연결의 문제점</li><li>특정 MIME 유형의 문제점</li><li>파일이 너무 긴 문제점</li></ul>또한 네트워크 추적 로깅을 사용하여 Document Streaming Server Module 사용 중에 지연이 발생하는 위치를 판별할 수 있습니다.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 streamer.log 파일에 작성됩니다.",
		admin_streamer_logging_log_file_hover: "Document Streaming Server Module의 로깅을 사용하려면 로깅 정보를 저장할 로그 파일의 완전한 경로 및 이름을 지정해야 합니다. 로그 파일의 이름을 streamer.log로 지정하도록 권장합니다.",

		admin_redaction_logging_trace_hover: "이 설정을 사용하여 Permanent Redaction Server Module의 일반적인 문제점을 해결하십시오.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 redacttofile.log 파일에 작성됩니다.",
		admin_redaction_logging_trace_net_hover: "이 설정을 사용하여 다음 문제점을 해결하십시오.<ul><li>서버 연결의 문제점</li><li>특정 MIME 유형의 문제점</li><li>파일이 너무 긴 문제점</li></ul>또한 네트워크 추적 로깅을 사용하여 Permanent Redaction Server Module 사용 중에 지연이 발생하는 위치를 판별할 수 있습니다.<br><br>기본적으로 로깅 정보는 IBM Content Navigator 설치 프로그램의 config 서브디렉토리에 있는 redacttofile.log 파일에 작성됩니다.",
		admin_redaction_logging_log_file_hover: "Permanent Redaction Server Module의 로깅을 사용하려면 로깅 정보를 저장할 로그 파일의 완전한 경로 및 이름을 지정해야 합니다. 로그 파일의 이름을 redacttofile.log로 지정하도록 권장합니다.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "뷰어 및 서비스의 기능을 구성하십시오.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "웹 클라이언트를 사용하여 하나 이상의 Content Manager OnDemand 저장소에 연결하는 경우, Content Manager OnDemand Kit에 필요한 정보를 지정해야 올바르게 작동합니다. 이 정보는 웹 클라이언트에 대해 구성된 모든 Content Manager OnDemand 저장소에서 공유됩니다.",
		admin_ondemand_language: "언어:",
		admin_ondemand_tempdir: "ODWEK 임시 디렉토리:",
		admin_ondemand_tracegrp: "ODWEK 추적",
		admin_ondemand_tracedir: "추적 디렉토리:",
		admin_ondemand_tracelevel: "추적 레벨:",
		admin_ondemand_tracelevel_0: "0 - 로깅 없음",
		admin_ondemand_tracelevel_1: "1 - 오류 메시지 로깅",
		admin_ondemand_tracelevel_2: "2 - 오류 및 경고 메시지 로깅",
		admin_ondemand_tracelevel_3: "3 - 오류, 경고 및 정보 메시지 로깅",
		admin_ondemand_tracelevel_4: "4 - 기능 추적을 포함한 모든 메시지를 캡처",
		admin_ondemand_max_trace_filesize: "최대 추적 파일 크기:",
		admin_ondemand_max_trace_filesize_unlimited: "무제한",
		admin_ondemand_max_trace_filesize_limited: "제한(권장)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "이 값은 범위를 벗어났습니다. 값은 1 - 1,000,000 사이의 정수여야 합니다.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF 설치 디렉토리:",
		admin_ondemand_language_hover: "ODWEK가 메시지를 리턴하는 언어를 지정하십시오.",
		admin_ondemand_tempdir_hover: "OnDemand Web Enablement Kit이 처리 중에 임시 파일을 저장하는 디렉토리를 입력하십시오. 웹 애플리케이션 서버에서 기존 디렉토리의 완전한 경로를 입력하십시오.",
		admin_ondemand_tracedir_hover: "ODWEK 추적 파일 arswww.trace를 저장하려는 디렉토리를 입력하십시오. 웹 애플리케이션 서버에서 기존 디렉토리의 완전한 경로를 입력하십시오.",
		admin_ondemand_tracelevel_hover: "arswww.trace 파일에 작성하는 로깅 정보의 레벨을 지정하십시오. <b>오류 메시지 로깅</b>은 최소의 로깅 정보를 캡처합니다. <b>기능 추적을 포함한 모든 메시지를 캡처</b>는 대부분의 정보를 캡처합니다.<br /><br />IBM Software Support에서 지침을 제공하는 경우를 제외하고 프로덕션 환경에서 <b>함수 추적을 포함한 모든 메시지 캡처</b>를 지정하지 마십시오.",
		admin_ondemand_max_trace_filesize_hover: "ODWEK 추적 파일이 무제한 크기로 커지는 것을 허용할지 또는 로그 파일이 특정 크기에 도달할 때 웹 클라이언트가 새 로그 파일을 작성할 지 여부를 지정하십시오. 기본값은 웹 애플리케이션이 웹 애플리케이션 서버에서 중지될 때까지 추적 로그 파일이 커지는 것을 허용하는 것입니다.",
		admin_ondemand_max_trace_unlimited_hover: "ODWEK 추적 정보를 단일 로그 파일에 작성하도록 하려면 이 옵션을 선택하십시오. 이 옵션을 선택하면 로그 파일 크기가 너무 커져서 표준 파일 뷰어로 열지 못할 수 있습니다.",
		admin_ondemand_max_trace_limited_hover: "ODWEK 추적 정보를 더 작은 로그 파일로 작성하려면 이 옵션을 선택하십시오. 로그 파일이 최대 크기에 도달하면 현재 로그의 이름이 날짜(arswww.trace.YYYYMMDD.HHMMSS)를 포함하는 이름으로 변경되고 새 로그 파일이 작성됩니다.",
		admin_ondemand_afp2pdf_installdir_hover: "표시 및 인쇄를 위해 AFP2PDF 변환 유틸리티를 사용하여 AFP 문서를 PDF 문서로 변환하려면 웹 애플리케이션 서버에서 AFP2PDF 변환 유틸리티가 설치된 디렉토리를 지정하십시오(예: C:\\Program Files\\IBM\\AFP2web\\afp2pdf).",

		admin_adminusers: "관리자",
		admin_adminusers_heading_text_multi: "웹 클라이언트에서 관리 권한이 있는 사용자를 지정해야 합니다. 관리자만 관리 데스크탑에 로그인할 수 있습니다.<br /><br /><b>중요:</b> IBM Content Navigator 관리자의 사용자 ID가 일치해야 합니다.<ul><li>웹 애플리케이션 서버에 있는 사용자 ID입니다. 사용자 ID는 웹 애플리케이션 서버에서 관리자가 아니어도 됩니다.</li><li>관리 기능이 있는 개별 데스크탑에 구성된 기본 저장소에 있는 사용자 ID입니다.</li></ul>",
		admin_adminusers_heading_text_single: "웹 클라이언트에서 관리 권한이 있는 사용자를 지정해야 합니다. 관리자만 관리 데스크탑에 로그인할 수 있습니다.<br /><br /><b>중요:</b> IBM Content Navigator 관리자의 사용자 ID는 웹 애플리케이션 서버에 있는 사용자 ID와 일치해야 합니다. 사용자 ID는 웹 애플리케이션 서버에서 관리자가 아니어도 됩니다.",
		admin_adminusers_newuser: "새 관리자:",
		admin_adminusers_add: "추가",
		admin_adminusers_remove: "제거",
		admin_adminusers_listheading: "관리자",
		admin_adminusers_nameInvalid: "값은 중복될 수 없습니다.",

		admin_sync_server_instructions: "<b>FileNet P8 사용자만 해당:</b> 하나 이상의 저장소에 대해 동기화 서비스를 사용하려면 동기화 서비스를 사용할 수 있도록 웹 클라이언트를 구성해야 합니다. 동기화 서비스 구성은 사용자 환경의 모든 저장소에 의해 공유됩니다.",
		admin_settings_instructions: "설정 탭에서 지정하는 값은 구성의 모든 데스크탑에 적용됩니다.",
		admin_autocomplete: "사용자 이름 자동 채우기:",
		admin_autocomplete_hover: "웹 클라이언트가 사용자 이름을 브라우저 쿠키에 저장하여 로그인 중에 웹 클라이언트에서 브라우저가 자동으로 사용자 이름을 채우는지 지정하십시오.<br><br>이 옵션을 사용하면 웹 클라이언트에 로그인한 마지막 사용자의 사용자 이름이 브라우저 쿠키에 저장되어 사용자가 웹 클라이언트를 열 때 로그인 페이지에 자동으로 이 이름이 표시됩니다.<br><br>공유 워크스테이션에서 애플리케이션에 액세스하거나 사용자 이름을 브라우저 쿠키에 저장하지 않으려는 경우에는 이 옵션을 사용하지 마십시오.<br /><br />이 옵션은 모바일 또는 사용자 정의 애플리케이션에 적용되지 않습니다.",
		admin_autocomplete_enable: "사용",
		admin_autocomplete_disable: "사용 안함",
		admin_cultural_collation: "사용자 로케일별 정렬:",
		admin_cultural_collation_hover: "로케일별 정렬을 사용하면 저장소 서버에서 정렬을 수행합니다. 이로 인해서 웹 클라이언트의 성능이 저하될 수 있습니다.<br><br>로케일별 정렬을 사용 안함으로 설정하면 웹 클라이언트 성능이 향상될 수 있습니다.",
		admin_cultural_collation_enable: "사용",
		admin_cultural_collation_disable: "사용 안함",
		admin_base_ui_style: "테마 스타일",
		admin_base_ui_style_hover: "웹 클라이언트에서 사용되는 기본 테마의 스타일을 지정하십시오. 이 스타일은 데스크탑 구성의 <b>모양</b> 탭에서 지정된 대로 <b>기본</b> 테마를 사용하는 데스크탑에서만 사용됩니다.<br/></br><b>제한사항:</b> 데스크탑 구성이 사용자 정의 테마를 사용하는 경우, 사용자 정의 테마는 사용자가 선택한 스타일과 상관없이 클래식 스타일을 기반으로 합니다.",
		admin_base_ui_style_classic: "클래식",
		admin_access_control_access: "특정 사용자 및 그룹에 대한 액세스 권한 제한",
		admin_access_control_access_show: "액세스 제어 데이터 표시",
		admin_access_control_access_enable: "예",
		admin_access_control_access_disable: "아니오",
		admin_mobile_access: "모바일 애플리케이션에서의 액세스 허용",
		admin_mobile_access_hover: "기본적으로, 사용자는 IBM Content Navigator iOS 애플리케이션에서 웹 클라이언트에 액세스할 수 있습니다.<br /><br /><b>중요:</b> 사용자가 iOS 애플리케이션에서 웹 클라이언트에 액세스하지 못하는 경우, 사용자는 모바일 디바이스의 웹 브라우저 및 IBM Content Navigator API를 사용하여 작성된 사용자 정의 애플리케이션 및 모바일 디바이스에서 작동하는 사용자 정의 애플리케이션에서 웹 클라이언트에 액세스할 수 있습니다.",
		admin_mobile_access_enable: "예",
		admin_mobile_access_disable: "아니오",
		admin_error: "오류 메시지 정보:",
		admin_error_custom: "사용자 정의 지원 컨텐츠 검색",
		admin_error_default: "IBM 지원 센터 컨텐츠 검색<BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "사용자가 오류 메시지를 수신했을 때 자세한 정보를 안내할 위치를 지정하십시오. 사용자에게 IBM Support Portal에 있는 정보를 안내하거나 헬프 데스크와 같은 내부 자원을 안내할 수 있습니다.",
		admin_error_URL: "URL 접두부:",
		admin_error_URL_hover: "오류 발생 시 사용자에게 안내할 자원(예: 헬프 데스크)의 URL을 입력하십시오. 예: http://localhost:port_number. 웹 클라이언트가 메시지 번호를 URL에 추가합니다.",
		admin_prompt_close_without_save: "변경사항을 저장하지 않고 닫으시겠습니까?",
		admin_object_expiration_time: "캐시 새로 고침 간격(분):",
		admin_object_expiration_time_hover: "웹 클라이언트의 성능을 개선하기 위해 데스크탑 등의 구성 오브젝트가 캐시에 보관되는 시간을 늘릴 수 있습니다. 기본 시간은 10분입니다. 최대 시간은 1440분(1일)입니다.<br /><br />변경사항을 적용하려면 웹 애플리케이션을 다시 시작해야 합니다.<br /><br />IBM Content Navigator가 가용성이 높은 클러스터형 환경에 배치되면 캐시를 새로 고칠 때까지 구성 오브젝트에 대한 변경사항이 클러스터의 노드에 전파되지 않습니다.",
		admin_temp_file_cleanup_interval: "뷰어 캐시를 정리하기 위한 스캔 간격(시):",
		admin_temp_file_cleanup_interval_hover: "만료된 임시 파일을 찾아 삭제하기 위해 임시 디렉토리를 스캔하는 빈도를 스케줄합니다. 기본적으로 임시 디렉토리는 6시간마다 스캔합니다. 6-48 이내의 시간을 지정할 수 있습니다.",
		admin_temp_file_expiration_interval: "뷰어 캐시 만료 시간(시):",
		admin_temp_file_expiration_interval_hover: "뷰어에서의 활동에 관련된 임시 파일이 브라우저 캐시에 남아 있는 시간을 지정합니다. 기본적으로 이러한 임시 파일은 24시간 이후 만료됩니다. 12-48 이내의 시간을 지정할 수 있습니다.",
		admin_encryption_key_hover: "Navigator 암호화 기능에 사용된 키입니다.",
		admin_encryption_key: "암호화 키:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "브랜딩",
		admin_mobile_branding_main_color: "기본 색상:",
		admin_mobile_branding_secondary_color: "보조 색상:",
		admin_mobile_device_title: "MaaS360 관리",
		admin_mobile_device_enable_maas360: "MaaS360 사용:",
		admin_mobile_device_enable_maas360_hover_help: "MaaS360 사용 풍선 도움말이 여기에 들어갑니다.",
		admin_mobile_device_maas360_developer_id: "MaaS360 개발자 ID:",
		admin_mobile_device_maas360_license_key: "MaaS360 라이센스 키:",
		admin_mobile_settings_title: "설정",
		admin_mobile_email_address_hover_help: "사용자가 \"오류 보고서 송신\"을 클릭하는 경우 이메일 주소가 모바일 애플리케이션에서 사용됩니다.",
		admin_mobile_email_address: "이메일 주소:",
		admin_invalid_email_address_message: "입력한 이메일 주소가 올바른 형식이 아닙니다. 올바른 주소를 입력한 후 다시 시도하십시오.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "일부 데이터가 유효하지 않습니다.",
		admin_configuration_parameters: "구성 매개변수",
		admin_configuration_optional_features: "선택적 기능",
		admin_configuration_optional_features_p8_instructions: "이 저장소에서 사용할 기능을 선택하십시오.<p><b>중요:</b> 저장소에 추가 기능을 설치하는 기능을 사용으로 설정하는 경우 Content Platform Engine 또는 Content Engine 관리자로 저장소를 연결해야 합니다.</p>",
		admin_configuration_optional_features_cm_instructions: "이 저장소에서 사용할 기능을 선택하십시오.<p><b>중요:</b> 이러한 기능은 저장소에서 데이터 모델을 수정합니다. 이를 사용하려면 라이브러리 서버 관리자로 저장소를 연결해야 합니다.</p>",
		admin_system_properties: "시스템 특성",
		admin_system_properties_for: "시스템 특성 대상:",
		admin_available_properties: "사용 가능한 특성",
		admin_displayed_properties: "표시된 특성",
		admin_selected_properties: "선택된 특성",
		admin_selected_filtered_properties: "숨겨진 특성",
		admin_available_operators: "표시된 연산자",
		admin_selected_filtered_operators: "숨겨진 연산자",
		admin_system_properties_shown: "표시된 특성",
		admin_system_properties_hidden: "숨겨진 특성",
		admin_available_menu_items: "사용 가능한 조치:",
		admin_selected_menu_items: "선택된 조치:",
		admin_menu_global: "항목을 선택하지 않은 경우 적용됩니다.",
		admin_menu_multiple_document: "여러 개의 항목을 선택한 경우 적용됩니다.",
		admin_menu_privileges: "필수 권한:",
		admin_menu_plugin: "플러그인:",
		admin_menu_repository_types: "저장소 유형:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "구분자",
		admin_browse: "찾아보기",
		admin_search: "검색",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "역할 기반 교정",
		admin_connections_library_enabled: "IBM Connections 사용",
		admin_office_conf: "편집 통합",
		admin_desktop_conf_label: "데스크탑 구성",
		admin_ms_office_conf_label: "Office 구성",
		admin_workflows: "워크플로우",
		admin_file_types: "파일 유형",
		admin_file_type_contains_label: "파일 유형 포함",
		admin_name_propepty: "이름",
		admin_cm_name_property_default: "기본 이름 사용",
		admin_cm_name_property_default_hover: "기본적으로 특성이 항목에 정의되면 ICM 계층 구조 이름(ICM$NAME) 특성이 항목 이름으로 사용됩니다. ICM 계층 구조 이름(ICM$NAME) 특성이 사용 가능하지 않으면 \"represents\"로 플래그 설정된 첫 번째 특성이 항목 이름으로 사용됩니다.",
		admin_cm_name_property: "항목 이름 특성 지정",
		admin_cm_name_property_hover: "문서 및 폴더의 이름으로 사용되는 특성을 지정하십시오.",
		admin_name_property: "이름 특성:",
		admin_doc_name_property: "문서 이름 특성:",
		admin_doc_name_property_hover: "문서 이름으로 사용되는 특성을 지정하십시오.",
		admin_folder_name_property: "폴더 이름 특성:",
		admin_folder_name_property_hover: "폴더 이름으로 사용되는 특성을 지정하십시오.",
		admin_all_searches_label: "표시할 검색 수:",
		admin_unlimited: "제한 없음",
		admin_limit: "다음으로 제한",
		admin_repository: "저장소:",
		admin_application_space: "애플리케이션 공간",
		admin_available_application_spaces: "사용 가능한 애플리케이션 공간:",
		admin_selected_application_spaces: "선택한 애플리케이션 공간:",
		admin_label: "레이블",
		admin_repository_box_placeholder: "Box 저장소 선택",
		admin_repository_placeholder: "저장소 선택",
		admin_search_match: "일치:",
		admin_search_match_all: "모든 검색 기준 일치",
		admin_search_match_any: "하나 이상의 검색 기준 일치",
		admin_search_match_hover: "<b>특성 옵션</b> 메뉴에서 기본적으로 선택되는 옵션을 지정하십시오.",

		admin_repository_redactions_instructions: "이 저장소에 대한 역할 기반 교정을 구성할 수 있습니다.",
		admin_repository_redaction_policies_description: "민감한 데이터를 읽을 수 있고 해당 민감한 데이터가 표시되지 않도록 보호하는 어노테이션을 편집할 수 있는 사용자 및 그룹과 교정 이유를 연관시킬 교정 정책을 작성하고 관리할 수 있습니다.",
		admin_repository_redaction_roles_instruction: "민감한 데이터를 읽을 수 있는 기능 또는 민감한 데이터가 표시되지 않도록 보호할 수 있는 기능이 있는 지정된 사용자 및 그룹을 연관시킬 교정 역할을 작성할 수 있습니다. 해당 사용자 및 그룹이 데이터를 읽거나 어노테이션을 편집할 수 있으려면 먼저 교정 역할이 교정 정책의 교정 이유와 연관되어야 합니다.",
		admin_repository_redaction_reasons_instruction: "저장소에 대한 교정 이유를 구성할 수 있습니다.",
		admin_repository_redaction_policies: "교정 정책 구성",
		admin_repository_redaction_roles: "교정 역할 구성",
		admin_repository_redaction_reasons: "교정 이유 구성",
		admin_repository_redaction_roles_type: "유형",
		admin_repository_redaction_roles_type_hover: "편집자는 특정 유형의 역할 기반 교정을 작성, 수정 또는 삭제할 수 있지만 뷰어는 특정 유형의 민감한 데이터를 볼 수 있습니다.",
		admin_repository_redaction_roles_type_editor: "편집기",
		admin_repository_redaction_roles_type_viewer: "뷰어",
		admin_repository_redaction_roles_membership: "멤버십",
		admin_repository_redaction_roles_membership_hover: "이 역할을 보유할 편집자를 선택하십시오.",
		admin_repository_redaction_roles_user_group_hover: "이 역할을 보유할 사용자 및 그룹을 검색하거나 편집자를 선택하십시오.",
		admin_repository_redaction_roles_description: "민감한 데이터를 읽고 민감한 데이터가 표시되지 않도록 보호하는 어노테이션을 편집할 수 있는 기능이 있는 사용자 및 그룹과 연관될 교정 역할을 작성하고 관리할 수 있습니다.",
		admin_repository_redaction_new: "새 교정 역할",
		admin_repository_redaction_role_avail_editors: "사용 가능한 교정 편집자",
		admin_repository_redaction_role_avail_users: "사용 가능한 사용자",
		admin_repository_redaction_role_avail_groups: "사용 가능한 그룹",
		admin_repository_redaction_role_selected_editors: "선택된 교정 편집자",
		admin_repository_redaction_role_selected_users_groups: "선택된 사용자 및 그룹",
		admin_repository_redaction_role_add_editor: "새 편집자...",
		admin_repository_redaction_role_access_type: "액세스",
		admin_repository_redaction_role_access_type_access: "허용",
		admin_repository_redaction_role_access_type_no_access: "거부",
		admin_repository_redaction_role_users: "사용자",
		admin_repository_redaction_role_groups: "그룹",
		admin_repository_redaction_role_editors: "편집자",
		admin_delete_confirmation_redaction_roles: "선택된 교정 역할을 삭제하시겠습니까?",
		admin_repository_edit_redaction_role: "교정 역할: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "기본 액세스",
		// RBA
		desktop_user_group_acl: "데스크탑 관리자",
		desktop_user_group_remove: "제거",
		desktop_rba_membership: "멤버십:",
		desktop_rba_membership_list_label: "이름",
		admin_repository_redaction_policy_hover: "사용자가 이 정책과 다른 정책을 구별할 수 있도록 설명을 제공하십시오.",
		admin_repository_new_redaction_policy: "새 교정 정책",
		admin_repository_policy_name: "정책 이름",
		admin_repository_reason_redactions: "교정 이유:",
		admin_repository_role_editors: "편집자",
		admin_repository_role_viewers: "뷰어",
		admin_repository_redaction_policy_instruction: "선택된 교정 이유를 교정 편집자 및 교정 뷰어 모두와 연관시킬 교정 정책을 작성할 수 있습니다.",
		admin_repository_redaction_reasons_hover: "대부분의 사용자가 볼 수 없도록 하려는 하나 이상의 민감한 데이터 유형을 선택하십시오(예: PII(Personally Identifiable Information), 영업 비밀 또는 회사의 기밀 또는 독점 정보).",
		admin_repository_readaction_available_reasons: "사용 가능한 이유",
		admin_repository_readaction_selected_reasons: "선택된 이유",
		admin_repository_readaction_new_reason: "새 이유...",
		admin_repository_redeaction_reasons: "교정 이유:",
		admin_repository_readaction_editor_permmission: "교정 편집자:",
		admin_repository_redaction_editors_hover: "선택된 이유로 교정을 작성하고 수정할 수 있는 역할을 선택하십시오.",
		admin_repository_readaction_new_editor_role: "새 편집자 역할...",
		admin_repository_readaction_available_editors: "사용 가능한 편집자 역할",
		admin_repository_readaction_selected_editors: "선택된 편집자 역할",
		admin_repository_readaction_viewer_permmission: "교정 뷰어:",
		admin_repository_redaction_viewers_hover: "선택된 이유로 민감한 데이터를 볼 수 있는 역할을 선택하십시오. 이러한 역할이 있는 사용자 및 그룹에 대한 교정은 적용되지 않습니다.",
		admin_repository_readaction_new_viewer_role: "새 뷰어 역할...",
		admin_repository_readaction_available_viewers: "사용 가능한 뷰어 역할",
		admin_repository_readaction_selected_viewers: "선택된 뷰어 역할",
		admin_repository_reason_redactions_header: "교정 이유",
		admin_delete_confirmation_redaction_policy: "선택된 교정 정책을 삭제하시겠습니까?",
		admin_role_type_repository: "저장소",
		admin_role_type_administrator: "관리자",
		admin_role_type_template: "템플리트",
		admin_role_type_teamspace: "팀 작업영역",
		admin_role_type_author: "편집기",
		admin_role_type_user: "뷰어",
		admin_collaboration_services_instructions: "IBM Connections 및 FileNet Collaboration Services 웹 애플리케이션이 있는 경우 저장소에 대한 커뮤니티 팀 작업영역 및 활동 스트림을 구성할 수 있습니다.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "커뮤니티 라이브러리 구성",
		admin_collaboration_community_instruction: "IBM Connections 커뮤니티 라이브러리(팀 작업영역이라고도 함)를 저장하기 위해 IBM FileNet P8 도메인에서 하나의 저장소를 구성할 수 있습니다. 사용자가 IBM Connections를 통해 커뮤니티 라이브러리를 작성하는 경우 커뮤니티 라이브러리 저장소로 지정되는 저장소에 저장됩니다.",
		admin_collaboration_community_teamspaces: "커뮤니티 라이브러리에 대해 이 저장소를 사용하십시오.",
		admin_collaboration_community_teamspaces_hover: "새 커뮤니티 라이브러리를 저장하기 위해 IBM FileNet P8 도메인에서 하나의 저장소만 사용할 수 있습니다. 이 저장소를 사용하며 기존 저장소가 있는 경우 기존 저장소가 사용 안함으로 설정됩니다. 그러나 기존 라이브러리가 현재 저장소에 남아 있습니다.",
		admin_collaboration_connections_anonymous: "공용 컨텐츠에 대한 익명 액세스 허용:",
		admin_collaboration_connections_anonymous_hover: "IBM Connections 서버에 공용 또는 운영자 중심의 커뮤니티가 있는 경우 사용자가 먼저 로그인하지 않아도 해당 커뮤니티의 라이브러리에서 컨텐츠를 찾아보고 다운로드할 수 있도록 FileNet Collaboration Services를 구성할 수 있습니다.<br><br>커뮤니티 라이브러리에 익명으로 액세스하는 사용자는 컨텐츠를 작성, 수정 또는 삭제할 수 없습니다.<br><br><b>중요사항:</b> IBM FileNet P8 LDAP 사용자를 익명 사용자로 지정하고 WebSphere Application Server에서 <b>익명</b> 역할로 해당 사용자를 구성해야 합니다.",
		admin_collaboration_connections_url: "IBM Connections URL:",
		admin_collaboration_connections_url_hover: "IBM Connections 서버에 http://IBMConnectionsServer:port_number 형식으로 URL을 지정하십시오. IBM Connections가 IBM HTTP Server를 사용하도록 구성된 경우 URL에서 포트 번호를 생략할 수 있습니다.<br><br>URL은 FileNet Collaboration Services가 IBM Connections에서 문서 랜딩 페이지의 링크를 작성하는 데 사용하는 링크이므로 IBM Connections 사용자가 URL에 액세스할 수 있어야 합니다.",
		admin_collaboration_connections_url_http_use: "IBM Connections URL 사용",
		admin_collaboration_connections_url_https_use: "IBM Connections HTTPS URL 사용",
		admin_collaboration_connections_url_specify: "URL 지정",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "IBM Connections가 SSL을 사용하도록 구성된 경우, https://IBMConnectionsServer:port_number 형식으로 IBM Connections 서버에 HTTPS URL을 지정하십시오. IBM Connections가 IBM HTTP Server를 사용하도록 구성된 경우 URL에서 포트 번호를 생략할 수 있습니다.",

		admin_collaboration_connections_gadget_url: "IBM Connections 가젯 URL:",
		admin_collaboration_connections_retrieval_url: "IBM Connections 검색 URL:",
		admin_collaboration_connections_security: "커뮤니티 관리자:",
		admin_collaboration_connections_security_hover: "커뮤니티 라이브러리에서 컨텐츠를 관리할 수 있는 사용자 및 그룹을 지정하십시오.<br><br>글로벌 관리자는 커뮤니티 라이브러리 및 커뮤니티 라이브러리의 컨텐츠에 대한 액세스를 작성, 수정, 삭제 및 제공할 수 있습니다. 사용자를 글로벌 관리자로 지정하면 사용자에게 저장소의 ClbGlobalAdministrator 권한이 부여됩니다.<br><br>글로벌 검토 관리자는 커뮤니티 라이브러리에 공개하기 위해 검토 중인 컨텐츠를 승인하고 거부할 수 있습니다. 사용자를 글로벌 검토 관리자로 지정하면 사용자에게 저장소의 ClbGloablReviewAdministrator 권한이 부여됩니다.",

		admin_collaboration_connections_admins: "글로벌 관리자",
		admin_collaboration_connections_admins_review: "글로벌 검토 관리자",
		admin_collaboration_connections_seedlist: "커뮤니티 라이브러리 컨텐츠 인덱싱:",
		admin_collaboration_connections_seedlist_hover: "IBM Connections가 검색 인덱스를 작성하기 위해 이 저장소의 커뮤니티 라이브러리를 크롤링할 것인지 여부를 지정하십시오. 인덱스를 작성하면 저장소의 성능에 영향을 줄 수 있습니다.<br><br>Social Collaboration Search Indexing Extensions가 저장소에 설치된 경우 이 옵션은 기본적으로 사용으로 설정됩니다. Social Collaboration Search Indexing Extensions가 저장소에 설치되지 않은 경우 이 옵션을 사용으로 설정하면 추가 기능이 저장소에 설치됩니다.",
		admin_collaboration_activity_stream: "활동 스트림 이벤트 구성",
		admin_collaboration_activity_stream_label: "IBM Connections에 이벤트 정보 푸시:",
		admin_collaboration_activity_stream_label_hover: "문서 작성, 체크아웃, 체크인, 주석, 태그, 공유와 같은 이벤트 정보를 IBM Connections에 푸시할 것인지 여부를 지정하십시오.<br><br><b>중요:</b> IBM Connections에 알림을 푸시하면 저장소의 성능에 영향을 줄 수 있습니다.",

		admin_collaboration_activity_stream_instruction: "주석 및 문서 승인과 같은 이벤트 정보를 IBM Connections에 푸시하도록 이 저장소를 구성할 수 있습니다. 이벤트는 IBM Connections 커뮤니티의 <b>최신 업데이트</b> 페이지에 표시됩니다. ",
		admin_collaboration_activity_stream_ignored_ids: "특정 사용자 및 그룹에 대한 이벤트 정보 무시:",
		admin_collaboration_activity_stream_ignored_ids_hover: "사용자가 보는 알림 수를 줄이기 위해 관리자나 시스템 계정과 같은 특정 사용자 또는 그룹이 생성하는 이벤트를 무시할 수 있습니다. 예를 들어, 컨텐츠를 마이그레이션하는 경우 마이그레이션에 사용되는 계정이 생성하는 이벤트를 무시하도록 지정할 수 있습니다.",
		admin_collaboration_activity_stream_userid: "IBM Connections 사용자 이름:",
		admin_collaboration_activity_stream_userid_hover: "Content Platform Engine이 인증하고 IBM Connections에 이벤트 정보를 보내는 데 사용할 시스템 계정을 지정하십시오. 사용자는 IBM Connections의 위젯 컨테이너 애플리케이션에서 <b>trustedExternalApplication</b> 역할에 있어야 합니다.<br><br><b>팁:</b> 기본적으로 IBM Connections 관리자에게 적합한 권한이 있습니다. 관리자 ID를 사용자 이름으로 사용할 수 있습니다.",
		admin_collaboration_activity_stream_password: "IBM Connections 사용자 비밀번호:",

		admin_help_url: "일반 사용자 도움말 URL:",
		admin_help_url_hover: "<b>중요 노트:</b> IBM Knowledge Center Customer Installed는 IBM Content Navigator 버전 3.0.0으로 업데이트되지 않습니다. 사용자 정의된 도움말 사용에 관한 자세한 정보는 고객 서비스에 문의하십시오.<br><br>IBM Content Navigator Version 3.0.0에서 일반 사용자 도움말 URL은 IBM Knowledge Center로 연결됩니다. IBM Knowledge Center의 URL은 http://www.ibm.com/support/knowledgecenter입니다.<br><br>IBM Knowledge Center Customer Installed의 이전 버전을 계속해서 사용하려면 IBM Content Navigator Configuration and Deployment Tool에서 배치한 IBM Knowledge Center Customer Installed 인스턴스의 URL을 지정하십시오. URL은 클라이언트 시스템에 액세스 가능해야 합니다. URL 형식은 http://server_name:port_number/kc입니다.<br><br>IBM Content Navigator 설치 디렉토리의 KnowledgeCenter/logs 서브디렉토리에 있는 console.log 파일에서 서버 이름 및 포트 번호를 가져올 수 있습니다.",

		admin_help_default: "IBM에서 제공하는 기본 도움말 사용",
		admin_custom_help: "사용자 정의 도움말 시스템 사용",
		admin_help_kc: "IBM Knowledge Center Customer Installed의 사용자 정의 도움말 사용",
		admin_help_kc_hover: "<b>중요 노트:</b> IBM Knowledge Center Customer Installed는 IBM Content Navigator 버전 3.0.0으로 업데이트되지 않습니다. 사용자 정의된 도움말 사용에 관한 자세한 정보는 고객 서비스에 문의하십시오.<br><br>IBM Knowledge Center Customer Installed의 이전 버전을 계속해서 사용하려면 이전에 배치한 IBM Knowledge Center Customer Installed 인스턴스에 계속해서 컨텐츠를 추가하기 위해 이 옵션을 선택하십시오.",
		admin_help_taxonomy: "분류 코드",
		admin_help_taxonomy_hover: "사용자 정의 도움말의 분류 코드를 지정하십시오.<br><br>IBM Content Navigator의 분류 코드는 SSEUEX입니다. IBM Knowledge Center Customer Installed의 다른 제품 이름 아래에 도움말을 표시하려면 IBM Content Navigator 설치 디렉토리의 KnowledgeCenter/usr/taxonomy 디렉토리에 있는 KC_taxonomy.ditamap 파일에 고유 분류 코드를 추가해야 합니다.",
		admin_help_context: "도움말 컨텍스트:",
		admin_help_context_hover: "사용자 정의 도움말의 컨텍스트를 지정하십시오.<br><br>IBM Content Navigator의 도움말은 IBM Content Navigator 설치 디렉토리의 KnowledgeCenter/usr/content/com.ibm.usingeuc.doc 디렉토리에 있습니다. 기본 도움말의 컨텍스트는 com.ibm.usingeuc.doc입니다. 사용자 정의 도움말을 제공하려면 KnowledgeCenter/usr/content/ 디렉토리의 새 서브디렉토리에 컨텐츠를 추가하십시오.",
		admin_help_welcome: "랜딩 페이지",
		admin_help_welcome_hover: "사용자가 도움말에 액세스할 때 랜딩 페이지로 사용할 주제의 이름을 지정하십시오. 랜딩 페이지의 위치를 지정하는 특성 파일을 작성하고 이 특성 파일을 IBM Content Navigator 설치 디렉토리의 KnowledgeCenter/usr/conf 디렉토리에 추가해야 합니다.",

		admin_settings_mimetype_extensions_jsonfile: "MIME 유형 확장 JSON 파일:",
		admin_settings_mimetype_extensions_jsonfile_hover: "JSON 파일 이름 및 파일의 전체 경로를 확인하십시오. 파일은 파일 시스템의 일반 파일 또는 JSON 파일을 가리키는 URL일 수 있습니다. <br><br>JSON 파일 컨텐츠는 MIME 유형 정의의 배열입니다. <br><br>MIME 유형 정의는 \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\"이라는 네 개의 키를 포함합니다. 첫 번째 두 키인 \"mimeTypes\" 및 \"extensions\"는 필수이며 \",\"에 의해 구분되는 문자열 배열일 수 있습니다. 마지막 두 키인 \"fileType\" 및 \"iconName\"은 선택적입니다. <br><br>예: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "태스크 관리자 구성",
		admin_taskmanager_service: "태스크 관리자 서비스:",
		admin_taskmanager_service_hover: "태스크 관리자 서비스를 사용하여 비동기 태스크를 작성하고 실행할 것인지 여부를 지정하십시오. <br><br>이 설정을 변경하는 경우 변경사항을 적용하려면 IBM Content Navigator 웹 애플리케이션을 다시 시작해야 합니다.",
		admin_taskmanager_url: "태스크 관리자 서비스 URL:",
		admin_taskmanager_url_hover: "다른 애플리케이션이 태스크 관리자 서비스와 통신할 수 있는 URL을 지정하십시오. URL 형식은 http://server_name:port_number/taskManagerWeb/api/v1입니다.",
		admin_taskmanager_logdirectory: "태스크 관리자 로그 디렉토리:",
		admin_taskmanager_logdirectory_hover: "기본적으로 태스크 관리자 서비스의 로그 파일은 웹 애플리케이션 서버 로그 파일과 같은 디렉토리에 작성됩니다. <br><br>로깅 정보를 IBM Content Navigator 서버의 다른 디렉토리에 작성할 경우 태스크 관리자 컴포넌트에서 생성되는 로그 파일을 저장할 디렉토리의 완전한 경로를 지정하십시오. <br><br>이 설정을 변경하는 경우 변경사항을 적용하려면 IBM Content Navigator 웹 애플리케이션을 다시 시작해야 합니다.",
		admin_taskmanager_heartBeatMonitor: "클러스터 하트비트 모니터링",
		admin_taskmanager_heartBeatMonitor_hover: "고가용성 클러스터 환경만 해당됩니다. 이 옵션을 사용할 경우 태스크 관리자 서비스는 현재 작동 정지된 노드에서 현재 실행 중인 노드로 태스크를 라우트합니다. <br><br>이 설정을 변경하는 경우 변경사항을 적용하려면 IBM Content Navigator 웹 애플리케이션을 다시 시작해야 합니다.",

		admin_syncserver_title: "동기화 서버 구성",
		admin_syncserver_enable: "동기화 서비스:",
		admin_syncserver_enable_hover: "이 데스크탑에 액세스하는 사용자가 자체 워크스테이션 및 모바일 디바이스에서 자신의 항목을 동기화할 수 있도록 하는지 여부를 지정하십시오.<br><br><b>중요사항:</b> 이 기능을 사용하려면 다음 태스크도 완료해야 합니다.<ul><li>관리 도구의 <b>동기화 서비스</b> 섹션에서 <b>동기화 서비스 공용 URL</b>을 지정하십시오.</li><li>동기화 서비스의 사용 대상인 저장소를 이 데스크탑에 추가하십시오.</li></ul>이 옵션을 사용하지는 않지만 동기화 서비스의 사용 대상인 저장소를 이 데스크탑에 추가하는 경우에는 저장소의 설정이 무시됩니다.",
		admin_mobileqr_enable: "로그인 페이지에서 IBM Navigator QR 코드 표시:",
		admin_mobileqr_enable_hover: "웹 클라이언트 로그인 페이지에서 IBM Navigator 모바일 애플리케이션의 QR 코드를 표시하려면 이 옵션을 사용으로 설정하십시오.<br><br>사용자가 QR 코드를 스캔하면 IBM Navigator 모바일 애플리케이션을 다운로드할 수 있는 디바이스의 해당 앱 스토어로 이동합니다.",

		admin_streamlineservice_enable: "편집 서비스:",
		admin_streamlineservice_enable_hover: "FileNet P8 사용자만 해당됩니다. 데스크탑 사용자가 워크스테이션의 원시 애플리케이션에서 문서를 쉽게 추가하고 편집할 수 있도록 하려면 이 옵션을 사용으로 설정하십시오. <br><br>이 설정을 사용하려면 다음도 수행해야 합니다. <ul><li>이 데스크탑과 연관된 하나 이상의 저장소에 대한 편집 서비스 사용 설정</li><li>사용자 워크스테이션에 IBM Content Navigator Edit 클라이언트 설치</li></ul>",

		admin_repository_general_instructions: "매개변수, 시스템 특성, 폴더 등을 구성하기 전에 저장소에 연결해야 합니다.",
		admin_repository_system_instructions: "이 저장소의 문서와 폴더에 대해 표시할 시스템 특성을 지정하십시오.",

		admin_desktop_general_create_instructions: "데스크탑은 웹 클라이언트에 로그인한 사용자가 무엇을 보고 수행할 수 있는지를 결정합니다. 데스크탑을 작성한 후 사용자에게 데스크탑 URL을 보내 데스크탑에 액세스하도록 할 수 있습니다.",
		admin_desktop_admin_instructions: "관리 사용자가 웹 클라이언트를 설정할 수 있도록 관리 데스크탑은 웹 클라이언트와 함께 제공됩니다. 이 데스크탑은 웹 클라이언트에 대해 구성된 모든 저장소에 액세스할 수 있습니다.",
		admin_desktop_repositories_instructions: "이 데스크탑에서 사용자가 액세스하도록 허용할 저장소를 지정하십시오. 저장소를 데스크탑에 추가하기 전에 먼저 저장소를 구성해야 합니다.<br><br><b>팁:</b> 데스크탑 레이아웃을 구성할 때 각 기능에 사용 가능한 저장소를 제한할 수 있습니다.",
		admin_desktop_menus_instructions: "사용자가 이 데스크탑에서 액세스하도록 허용할 메뉴를 지정하십시오. 메뉴는 인터페이스에서 선택되어 있는 사항에 따라서 사용 가능한 조치를 지정합니다.<br><br><b>팁:</b> 관리 도구의 <b>메뉴</b> 섹션에서 메뉴의 컨텐츠를 사용자 정의하거나 플러그인을 작성하여 새 메뉴 유형을 작성할 수 있습니다.",

		admin_desktop_no_repositories: "저장소가 구성되어 있지 않습니다.",

		admin_desktop_id_hover: "데스크탑 ID는 웹 클라이언트 URL에 포함되며 사용자가 웹 클라이언트에 로그인할 때 열리는 데스크탑을 지정합니다. 데스크탑 ID는 고유해야 하며 데스크탑을 저장한 후에는 ID를 변경할 수 없습니다.<br><br>ID에는 영숫자만 포함될 수 있고 대소문자를 구분합니다.",
		admin_desktop_id_disabled_hover: "데스크탑 ID는 변경할 수 없습니다. 다른 ID를 사용하려면 새 데스크탑을 작성해야 합니다.",
		admin_desktop_name_hover: "데스크탑 이름에 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",
		admin_desktop_default_hover: "구성에는 한 개의 기본 데스크탑만 포함할 수 있습니다.",

		admin_repository_id_disabled_hover: "저장소 ID는 변경할 수 없습니다. 다른 ID를 사용하려면 새 저장소 연결을 작성해야 합니다.",
		admin_printService_enable: "IBM Daeja ViewONE 인쇄 서비스를 사용하여 인쇄:",
		admin_printService_enable_hover: "IBM Daeja ViewONE 인쇄 서비스를 사용하도록 선택한 경우, 문서가 PDF 형식으로 변환되고 웹 브라우저를 사용하여 인쇄를 완료할 수 있습니다.<br><br>IBM Daeja ViewONE 인쇄 서비스를 사용하지 않도록 선택한 경우, Java 애플릿을 지원하는 웹 브라우저에서만 문서를 인쇄할 수  있습니다. 일부 웹 브라우저는 java 애플릿을 지원하지 않으므로 애플릿 인쇄를 지원하지 않습니다.<br><br>지원되는 브라우저는 문서를 참조하십시오.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "사용자 홈 디렉토리",
		admin_file_tracking_doc_directory_my_documents: "사용자 문서 디렉토리",
		admin_file_tracking_doc_directory_qp: "규정된 경로",
		admin_file_tracking_section_tile: "파일 추적 구성",
		admin_file_tracking_home_path: "홈 경로",
		admin_file_tracking_my_documents: "내 문서",
		admin_file_tracking_exact_path: "완전한 경로:",
		admin_file_tracking_qp: "규정된 경로",
		admin_file_tracking_ev: "환경 변수",
		admin_file_tracking_ev_us: "사용자 정의 환경 변수 ",
		admin_file_tracking_del_local_copy: "로컬 사본 삭제:",
		admin_file_tracking_yes: "예",
		admin_file_tracking_no: "아니오",
		admin_file_tracking_del_local_copy_rt_state_editable: "사용자가 이 설정을 재정의하도록 허용",
		admin_file_tracking_del_local_copy_rt_state1: "예",
		admin_file_tracking_del_local_copy_rt_state2: "아니오",
		admin_file_Tracking_label: "파일 추적:",
		admin_file_Tracking_disable: "사용 안함",
		admin_file_Tracking_enable: "사용",
		admin_file_tracking_label_hover_help: "파일 추적은 애플릿을 사용하여 문서를 체크아웃하고 사용자 시스템의 특정 디렉토리에 다운로드합니다. 또한 애플릿을 사용하면 사용자가 문서를 체크인할 때 IBM Content Navigator가 사용자 시스템에서 문서를 찾을 수 있습니다.",
		admin_file_tracking_doc_directory: "스토리지 위치:",
		admin_file_tracking_open_file: "파일 자동 열기",
		admin_file_Tracking_append_qualified_path: "디렉토리 추가",
		admin_file_Tracking_append_qualified_path_hover_help: "문서를 특정 서브디렉토리에 저장할 경우 환경 변수의 끝에 디렉토리를 추가할 수 있습니다. <br/><br/>예를 들어, 문서가 사용자 홈 디렉토리의 <i>EnterpriseDocuments</i> 디렉토리에 다운로드되도록 지정할 수 있습니다.",
		admin_file_Tracking_append_ev: "환경 변수 추가",
		admin_file_Tracking_append_ev_hover_help: "사용자 디렉토리와 같은 동적으로 지정된 디렉토리에 문서를 저장하려면 환경 변수를 추가할 수 있습니다.<br/><br/>예를 들어, 문서가 공유 네트워크 디렉토리의 <i>user_name</i> 서브디렉토리에 저장되도록 지정할 수 있습니다. ",
		admin_file_tracking_doc_directory_hover_help: "체크아웃 및 다운로드될 때 문서가 저장되어야 하는 위치를 지정하십시오.<br/><br/> <b>팁</b>: 사용자의 홈 디렉토리 또는 기본 문서 디렉토리에 문서를 저장하려면 해당 위치를 가리키는 사전정의된 변수를 포함하는 <b>환경 변수</b>를 선택하십시오.",
		admin_file_tracking_qualified_path_hover_help: "Windows 또는 Mac 운영 체제에 적합한 디렉토리 구조를 사용하여 문서를 저장할 디렉토리 또는 네트워크 디렉토리를 지정하십시오. <ul><li>Windows의 경우 경로에 드라이브 이름을 포함하십시오(예: C:\\Enterprise Documents).</li><li>공유 네트워크 디렉토리의 경우 \\\\servername\\directory 형식으로 경로를 입력하십시오.</li></ul><br/><b>중요:</b> 이 옵션을 사용하려면 사용자 환경의 모든 클라이언트 워크스테이션에서 지정한 디렉토리 구조를 작성할 수 있어야 합니다.",
		admin_file_tracking_environment_variable_path_hover_help: "Windows 또는 Mac 운영 체제에 적합한 환경 변수를 사용하여 문서를 저장할 디렉토리 또는 네트워크 디렉토리를 지정하십시오. <br/><br/><b>사용자 홈 디렉토리</b> 옵션은 다음 디렉토리에 문서를 저장합니다.<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/><b>사용자 문서 디렉토리</b> 옵션은 다음 디렉토리에 문서를 저장합니다.<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "사용자가 저장소에 문서를 추가하거나 체크인하면 문서의 로컬 사본이 삭제되는지 여부를 지정하십시오.<br/><br/>로컬 사본을 삭제하면 다음 작업이 가능합니다.<br/><ul><li>IT 정책 준수 적용</li><li>사용자가 최신 버전의 문서에서 작업 가능</li></ul><br/><b>제한사항:</b> 사용자가 문서를 끌어다 놓아서 추가하는 경우에는 이 설정이 사용되지 않습니다.<br/><br/>IBM Content Navigator for Microsoft Office의 경우 데스크탑의 <b>Office 구성</b> 섹션에서 <b>사용자가 문서를 추가 또는 체크인하거나 체크아웃을 취소할 때 로컬 파일 삭제</b>를 선택해야 합니다.",
		admin_file_tracking_open_file_hover_help: "이 설정은 사용자의 웹 브라우저에서 구성된 문서 처리 환경 설정을 재정의합니다. </br></br><b>제한사항:</b> IBM Content Navigator for Microsoft Office에서는 이 설정이 사용되지 않습니다.",
		admin_file_tracking_over_write_file: "로컬 사본 겹쳐쓰기:",
		admin_file_tracking_over_write_file_hover_help: "사용자가 저장소에서 문서를 체크아웃하면 문서의 로컬 사본을 겹쳐쓰는지 여부를 지정하십시오. <br/><br/>로컬 사본을 겹쳐쓰면 다음 작업이 가능합니다.<br/><ul><li>사용자가 최신 버전의 문서에서 작업 가능</li><li>로컬 사본 존재 시 사용자에게 프롬프트 표시 방지</li></ul> </br></br><b>제한사항:</b> <b>사용자가 이 설정을 재정의하도록 허용</b>을 선택한 경우에는 IBM Content Navigator for Microsoft Office에서 이 설정이 사용되지 않습니다.",
		admin_file_tracking_over_write_file_state_editable: "사용자가 이 설정을 재정의하도록 허용",
		admin_file_tracking_inline_help: "파일 추적을 사용하면 저장소로부터 체크아웃하고 저장소로 체크인하는 프로세스가 간단해집니다. 또한 문서가 사용자 시스템에 저장되는 방식을 관리할 수 있습니다. <br/><br/>파일 추적을 사용하면 웹 클라이언트 및 IBM Content Navigator for Microsoft Office와 같은 다중 IBM Content Navigator 컴포넌트에서 문서를 추적할 수도 있습니다.",

		// Box repository admin...
		admin_box_instructions: "저장소에 연결하기 전에 표준 또는 서버 인증을 사용으로 설정해야 합니다.",
		admin_box_use_oauth: "인증 유형:",
		admin_box_use_oauth_hover: "IBM Content Navigator에서 Box 문서에 대한 액세스를 제공할 때 프로덕션 환경에서 표준 또는 서버 인증을 선택하십시오. IBM Content Navigator의 이 배치와 연관된 client_id 및 OAuth2 client_secret 값을 지정하십시오. IBM Content Navigator 서버에 대한 Box 애플리케이션을 작성한 후 Box에서 해당 값을 가져올 수 있습니다.<br/><br/>개발 환경에서는 개발자 인증을 선택하십시오. 개발자는 개발자 계정을 사용하여 Box에 로그인하고 60분 동안 유효한 개발자 토큰을 생성할 수 있습니다. 개발자 토큰은 개발자가 사용자 ID에 대한 비밀번호로 개발자 토큰을 사용하여 Box에 로그인할 수 있도록 허용합니다.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Box 엔터프라이즈 계정 하위 도메인:",
		admin_box_share: "태스크 관리자 연결 ID:",
		admin_box_share_hover: "Box 복사 또는 Box 공유의 경우 태스크 관리자는 저장소를 수정하는 백그라운드 태스크를 실행하기 위해 관리자 ID 및 비밀번호를 사용합니다.<br/><br/>설정을 클릭하고 유효한 Box 관리자 계정을 사용하여 Box에 로그인하십시오.<br/><br/>공유 파일 저장소로 이 Box 저장소를 선택하여 데스크탑을 구성하는 경우 Box에 무제한 스토리지가 있는 Box 관리자를 지정해야 합니다.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "파일 자동 열기",
		file_tracking_runtime_overwrite_hover_help: "이 옵션을 선택하지 않았으며 로컬 파일 시스템에 동일한 이름의 문서가 있는 경우 문서는 체크아웃되지만 다음 조치 중 하나를 수행할 때까지 다운로드되지 않습니다.<br/><ul><li> 문서를 기본 디렉토리의 서브디렉토리에 다운로드하십시오. 서브디렉토리를 선택한 경우 웹 애플리케이션에서 문서의 위치를 추적할 수 있습니다.</li><li>다운로드하는 문서의 이름을 바꾸십시오. 문서의 이름을 바꾸면 파일 이름 충돌이 방지됩니다.</li></ul>",
		open_file: "파일 자동 열기",
		over_write_file: "로컬 사본 겹쳐쓰기",
		checkout_and_download_file: "문서 체크아웃 및 다운로드",
		download_to_local_directory: "다운로드 위치:",
		checkout_and_download_button_title: "체크아웃 및 다운로드",
		checkout_without_java_confirmation_dialog: "파일 추적 기능을 통해 파일을 다운로드하고 추적할 수 없습니다.",
		browse_for_directory: "찾아보기",
		selected_documents: "선택된 문서",

		checkout_without_java_confirmation_text: "다음과 같은 이유로 인해 이 문제가 발생할 수 있습니다.<br/><ul><li>JRE(Java Runtime Environment)가 사용자의 워크스테이션에 설치되지 않았습니다.</li><li>사용자의 웹 브라우저에서 Java 플러그인을 사용할 수 없습니다.</li><li>사용자의 웹 브라우저가 Java를 지원하지 않습니다.</li></ul><br/><br/>이 문제를 해결하려면 적절한 조치를 수행하십시오.<br/><br/><ul><li>파일 추적을 사용하지 않고 파일을 계속 다운로드하려면 확인을 클릭하십시오.</li><li>파일 추적을 사용하여 파일을 다운로드하려면 다운로드를 취소하고 JRE가 사용자의 워크스테이션에 설치되었으며 사용자의 웹 브라우저에서 Java 플러그인을 사용하는지 확인하십시오.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "문서가 체크아웃되고 다운로드되지만 문서를 열 수 없습니다.",
		runtime_file_tracking_open_error_explanation: "사용자의 워크스테이션에 설치되는 운영 체제가 이 유형의 파일을 지원하지 않습니다.",
		runtime_file_tracking_open_error_userResponse: "이 문제를 해결하려면 다음 조치 중 하나를 수행하십시오.<br/><br/><ul><li>문서에 대해 작업해야 하는 경우 다른 운영 체제가 있는 다른 워크스테이션에서 웹 클라이언트를 여십시오.</li><li>문서를 보기만 하려면 웹 클라이언트에서 문서를 마우스 오른쪽 단추로 클릭하고 열기를 클릭하십시오.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "문서가 체크아웃되었지만 다운로드되지 않았습니다.",
		runtime_file_tracking_save_file_error_explanation: "동일한 이름의 문서가 로컬 파일 시스템에 있지만 겹쳐쓰지 않았습니다. ",
		runtime_file_tracking_save_file_error_userResponse: "저장소에서 파일을 다운로드하려면 저장소에서 문서를 다운로드할 때 문서의 로컬 사본을 겹쳐써야 합니다.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "문서가 체크아웃되었지만 문서를 다운로드하거나 열 수 없습니다.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "동일한 이름의 문서가 로컬 파일 시스템에 있습니다. 그러나 파일을 겹쳐쓰지 않았으므로 저장소의 문서가 다운로드되고 열리지 않습니다.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "저장소에서 파일을 다운로드하려면 저장소에서 문서를 다운로드할 때 문서의 로컬 사본을 겹쳐써야 합니다.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "문서를 다운로드할 수 없습니다.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "파일 추적에 필요한 ${0} 환경 변수가 이 클라이언트 시스템에 정의되어 있지 않습니다.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "문제점을 해결하려면 다음을 수행하십시오.<br/><br/><ul><li>운영 체제 환경 변수에 ${0} 환경 변수를 추가하십시오.</li><li>웹 클라이언트에서 로그아웃하고 웹 브라우저를 닫으십시오. 그런 다음, 다시 로그인하십시오.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "파일 추적 애플릿을 통해 문서를 다운로드하고 추적할 수 없습니다. ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "파일 추적에 필요한 ${0} 디렉토리가 정의되지 않았으며 작성할 수 없습니다.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "이 문제를 해결하려면 적절한 조치를 수행하십시오.<br/><br/><ul><li>찾아보기를 클릭하고 클라이언트 시스템에서 다른 디렉토리를 선택하십시오. 이 옵션을 선택하면 파일이 추적되지 않습니다.</li><li>시스템 관리자에게 문의하여 파일 추적에 사용할 다른 디렉토리를 지정하도록 요청하십시오. 예를 들어, 지정된 디렉토리가 Windows 운영 체제에 해당하지만 Mac OS를 실행 중인 경우에 이러한 조치가 필요할 수 있습니다. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "다른 운영 체제를 사용하는 디바이스에서 이 데스크탑에 액세스하는 경우 다음 조치 중 하나를 수행하여 문제가 발생할 가능성을 줄일 수 있습니다.<br/><br/><ul><li>환경 변수를 사용하여 클라이언트 시스템에서 스토리지 위치를 지정하십시오.</li><li>각 디바이스 유형에 대해 다른 데스크탑을 작성하십시오. 예를 들어, Windows 운영 체제를 사용하는 사용자를 위한 데스크탑을 작성하고 Mac OS를 사용하는 사용자를 위한 데스크탑을 작성하십시오.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "요청을 처리할 수 없습니다.",
		runtime_file_tracking_generic_error_explanation: "파일 추적 애플릿에서 오류가 발생했습니다.",
		runtime_file_tracking_generic_error_userResponse: "지원을 받으려면 시스템 관리자에게 문의하십시오.",
		runtime_file_tracking_generic_error_adminResponse: "Java 콘솔을 열고 요청을 다시 제출하십시오. 오류의 세부사항이 Java 콘솔에 표시됩니다.<br/><br/>운영 체제의 제어판(Windows) 또는 시스템 환경 설정(Mac)에서 Java 콘솔에 액세스할 수 있습니다.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "요청을 처리할 수 없습니다.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "${0} 파일이 저장소에 추가되지만 로컬 파일 시스템에서 삭제되지 않습니다. 이는 일반적으로 다른 애플리케이션에서 파일을 열었거나 사용 중인 경우에 발생합니다. 필요한 경우 파일을 수동으로 삭제할 수 있습니다.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "문서를 다운로드할 수 없습니다.",
		runtime_file_tracking_ioexception_error_explanation: "문서를 다운로드할 수 없습니다.",
		runtime_file_tracking_ioexception_userResponse: "다음 디렉토리에 쓸 수 있는 적합한 권한이 없을 수 있습니다. ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "지정된 디렉토리에 대한 쓰기 권한이 있는지 확인하십시오. 지정된 디렉토리에 대한 쓰기 권한이 없는 경우 시스템 관리자에게 문의하십시오.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "요청을 처리할 수 없습니다.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "이 오류는 다음과 같은 이유로 발생할 수 있습니다.<br/><br/><ul><li>Mac OS에서 Safari를 사용하고 있으며 Java를 안전 모드로 실행 중입니다.</li><li>데스크탑의 파일 추적 구성에 지정된 디렉토리에 읽기/쓰기 권한이 없습니다.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "파일 추적 없이 IBM Content Navigator를 계속 사용하거나 다음 단계를 수행하여 이 문제를 해결할 수 있습니다.<br/><br/><ol><li>Safari에서 Java 비안전 모드를 설정하십시오.</li><li>IBM Content Navigator 웹 사이트를 신뢰할 것인지 묻는 프롬프트가 표시되면 <b>신뢰</b>를 클릭하여 페이지를 로드하고 Safari에서 Java 비안전 모드를 설정하십시오.</li></ol><br/><br/>Safari가 올바르게 구성된 경우 다음 단계를 수행하여 문제를 해결하십시오.<br/><br/><ol><li>데스크탑의 파일 추적 구성에 지정된 디렉토리에 읽기/쓰기 권한이 있는지 확인하십시오.</li><li>해당 디렉토리에 대한 읽기/쓰기 권한이 없으면 디렉토리의 권한을 편집하십시오.</li><li>디렉토리의 권한을 편집할 수 없는 경우 관리자가 파일 추적용으로 구성된 디렉토리를 변경하거나 다른 파일 추적 디렉토리가 구성된 데스크탑에 대한 액세스 권한을 부여해야 합니다.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "요청을 처리할 수 없습니다.",
		runtime_file_tracking_java__notfound_error_explanation: "이 문제는 일반적으로 다음 상황에서 발생합니다.<br/><br/><ul><li>JRE(Java Runtime Environment)가 없거나 사용자의 워크스테이션에서 사용 가능하지 않습니다.</li><li>사용자의 워크스테이션의 JRE 버전이 IBM Content Navigator 버전과 호환되지 않습니다.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "파일 추적 없이 IBM Content Navigator를 계속 사용하거나 다음 단계를 수행하여 JRE와 연관된 문제를 해결할 수 있습니다.<br/><br/><ol><li>JRE가 사용자의 워크스테이션에 설치되어 있는지 확인하십시오.</li><li>사용자의 워크스테이션에 있는 JRE 버전이 IBM Content Navigator와 호환 가능한지 확인하십시오. 지원되는 버전의 목록은 IBM Software Support 사이트의 <i>IBM Content Navigator의 하드웨어 및 소프트웨어 전제조건</i> 문서에 나와 있습니다.</li><li>사용자의 워크스테이션에서 JRE가 사용 가능으로 설정되었는지 확인하십시오.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "요청을 처리할 수 없습니다.",
		runtime_file_tracking_security_error_explanation: "데스크탑의 파일 추적 구성에 지정된 디렉토리에 읽기/쓰기 권한이 없습니다.",
		runtime_file_tracking_security_error_userResponse: "파일 추적 없이 IBM Content Navigator를 계속 사용하거나 시스템 관리자와 함께 다음 단계를 수행할 수 있습니다.<ol><li>데스크탑의 파일 추적 구성에 지정된 디렉토리에 읽기/쓰기 권한이 있는지 확인하십시오. </li><li>해당 디렉토리에 대한 읽기/쓰기 권한이 없으면 디렉토리의 권한을 편집하십시오.</li><li>디렉토리의 권한을 편집할 수 없는 경우 관리자가 파일 추적용으로 구성된 디렉토리를 변경하거나 다른 파일 추적 디렉토리가 구성된 데스크탑에 대한 액세스 권한을 부여해야 합니다.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "다음 문서가 다운로드되었습니다. ${0}.",

		admin_file_tracking_inline_help: "파일 추적을 사용하면 문서를 추가하고 저장소로부터 체크아웃하고 저장소로 체크인하는 프로세스가 간단해집니다. 또한 문서가 사용자 시스템에 저장되는 방식을 관리할 수 있습니다.<br/><br/>파일 추적을 사용하면 웹 클라이언트 및 IBM Content Navigator for Microsoft Office와 같은 다중 IBM Content Navigator 컴포넌트에서 문서를 추적할 수도 있습니다.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "메뉴 ID는 \"Default\"로 시작할 수 없습니다. \"Default\"는 메뉴 ID에 예약되어 있는 접두부입니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID에는 영숫자만 포함될 수 있고 대소문자를 구분합니다.",
		admin_repository_id_hover: "저장소 ID는 웹 클라이언트 URL, 즐겨찾기, 이메일 링크에 포함되며 로그인할 저장소를 지정합니다. 저장소 ID는 고유해야 하며 저장소를 저장한 후에는 ID를 변경할 수 없습니다.<br><br>ID에는 영숫자만 포함될 수 있고 대소문자를 구분합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "이름에 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "데스크탑 ID에 공백 또는 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "데스크탑 이름에 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "표시 이름에 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",
		admin_repository_name_hover: "웹 클라이언트에서 사용자에게 표시할 저장소 이름을 지정하십시오.<br><br>이름에 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",
		admin_server_od_name_hover: "연결하려는 Content Manager OnDemand 서버의 호스트 이름이나 IP 주소를 지정하십시오(예: server.id.com).",
		admin_server_p8_name_hover: "Content Engine 또는 Content Platform Engine 서버의 URL을 지정하십시오. URL은 대소문자를 구분하며 형식은 다음과 같습니다.<br><br><ul><li>WebSphere Application Server에서는 iiop://host_name:port_number/FileNet/Engine입니다. 기본 배치에서 기본 포트 번호는 2809입니다.</li><li>WebLogic Server에서는 t3://host_name:port_number/FileNet/Engine입니다. 기본 포트 번호는 7001입니다.</li></ul><br><br>Content Engine 및 Content Platform Engine의 고가용성을 활용할 수 있도록 구성하려면 cemp: 접두부 없이 고가용성 EJB 전송 URL을 사용하십시오. ",
		admin_server_p8_protocol_hover: "Content Engine과 통신하는 데 사용할 프로토콜을 지정하십시오.",
		admin_server_cm_name_hover: "Content Manager 데이터베이스의 로컬 카탈로그 이름 또는 라이브러리 서버 연결 이름을 지정하십시오. 이 이름은 ICMSERVER 변수에 지정되는 값입니다.",
		admin_repository_cmis_hover: "연결할 저장소의 ID를 지정하십시오. CMIS 환경 내에 있는 각 저장소의 ID가 AtomPub 바인딩 서비스 문서에 나열됩니다. <br/><br/><b>팁:</b> Atompub 바인딩 서비스 문서 내에서 정의되는 첫 번째 저장소 또는 유일한 저장소에 연결하려면 별표(*)를 입력할 수 있습니다.",
		admin_url_cmis_hover: "URL의 형식은 서비스 제공업체에 따라 다릅니다. URL에 대해서는 CMIS 문서를 참조하거나 CMIS 서버 관리자에게 문의하십시오.",
		admin_repcfg_cmis_status_columns_hover: "표시할 아이콘의 항목 상태를 지정하십시오. 상태 아이콘은 컨텐츠 목록의 문서 옆에 표시됩니다.",
		admin_port_hover: "Content Manager OnDemand 서버가 청취하는 TCP/IP 포트 번호를 지정하십시오. 기본값은 1445입니다.",
		admin_unified_searches_hover: "이 저장소에서 사용자가 교차 저장소 검색을 저장할 수 있도록 할 것인지 여부를 지정하십시오.<br/><br/>이 옵션을 사용할 수 없는 경우 사용자는 이 저장소에 반하여 실행하는 교차 저장소 검색을 계속 작성할 수 있습니다. 사용자가 데스크탑 레벨에서 교차 저장소 검색을 작성하지 못하게 할 수 있습니다.<br/><br/>교차 저장소 검색을 사용하려면 IBM Content Navigator가 저장소의 교차 저장소 검색 데이터 모델을 작성합니다.<br/><br/>IBM FileNet Content Manager의 경우, 이 옵션을 사용하기 전에 Content Engine 관리자로 저장소에 연결해야 합니다.",
		admin_unified_searches_cm_hover: "이 저장소에서 사용자가 교차 저장소 검색을 저장할 수 있도록 할 것인지 여부를 지정하십시오.<br/><br/>이 옵션을 사용할 수 없는 경우 사용자는 이 저장소에 반하여 실행하는 교차 저장소 검색을 계속 작성할 수 있습니다. 사용자가 데스크탑 레벨에서 교차 저장소 검색을 작성하지 못하게 할 수 있습니다.<br/><br/>교차 저장소 검색을 사용하려면 IBM Content Navigator가 저장소의 교차 저장소 검색 데이터 모델을 작성합니다.",
		admin_max_results_hover: "검색에서 리턴하는 결과 수를 제한하는지 지정하십시오. 검색 결과 수를 제한하지 않으면 검색 시 대량의 결과가 리턴되는 경우 성능 문제가 발생할 수 있습니다.",
		admin_timeout_hover: "저장소에서 검색이 실행될 수 있는 기간(초)을 지정하십시오. 지정된 시간 내에 검색이 완료되지 않으면 웹 클라이언트가 요청을 취소합니다. 권장된 최대 제한시간은 60초입니다.",
		admin_object_store_hover: "Content Engine 서버에서 연결할 오브젝트 저장소를 지정하십시오. 기호 이름은 Content Platform Engine 관리 콘솔에서 확인할 수 있습니다.",
		admin_object_store_display_name_hover: "IBM FileNet P8 워크플로우를 사용하려면 오브젝트 저장소 표시 이름이 필요합니다. 오브젝트 저장소 표시 이름은 Content Platform Engine 관리 콘솔에서 확인할 수 있습니다.",
		admin_all_searches_hover: "사용자가 저장소에서 검색 중인 경우 <b>모든 검색</b>에 표시되는 검색의 수를 제한할 지 여부를 지정하십시오. 검색 수를 제한하지 않은 경우 저장소에 다수의 저장된 검색이 포함되면 성능 문제가 발생할 수 있습니다.",

		admin_text_desktop: "데스크탑",
		admin_text_repository: "저장소",
		admin_text_plugin: "플러그인",
		admin_text_theme: "테마",
		admin_text_menu: "메뉴",
		admin_text_reason_code: "교정 이유",
		admin_text_redactions: "교정",
		admin_text_viewer_mapping: "뷰어 맵핑",
		admin_text_mobile_feature: "모바일 기능",
		admin_test_interface_text: "인터페이스 텍스트",
		admin_text_interface_text_locale: "현지화된 인터페이스 텍스트",
		admin_text_icon_status: "상태 아이콘",
		admin_text_icon: "아이콘",
		admin_text_file_type: "파일 유형",
		admin_text_viewer: "뷰어",
		admin_text_desktop_access: "데스크탑 액세스",
		admin_text_mapped_properties_for_office: "Microsoft Office에 대해 맵핑된 특성",
		admin_text_desktop_features: "데스크탑 기능",
		admin_text_unknown: "알 수 없음",
		admin_folder_instruction: "사용자가 검색할 때 컨텐츠 목록의 문서 및 폴더를 표시하려는 특성을 지정하십시오. 또한 특성이 표시되는 순서를 지정할 수 있습니다.",
		admin_search_instruction: "사용자가 검색을 작성할 때 기본적으로 선택되는 옵션을 지정하십시오.",
		admin_repository_office_conf_class_instruction: "해당 환경에서 클라이언트 시스템에 IBM Content Navigator for Microsoft Office가 설치되어 있는 경우, 이 저장소에 추가되거나 체크인될 때 문서를 처리하는 방식을 지정할 수 있습니다.",
		admin_repository_office_conf_instruction: "Microsoft Office 문서 특성을 이 저장소에 정의되어 있는 특성으로 맵핑하십시오.<br/><br/>이 저장소가 연결되어 있는 데스크탑에 특성 맵핑을 사용하는 경우, 사용자가 IBM Content Navigator for Microsoft Office에서 문서를 추가할 때 Microsoft Office 문서에 설정된 특성을 사용하여 저장소의 특성을 채웁니다.",
		admin_repository_office_conf_prop_mapping_title: "특성 맵핑",
		admin_repository_office_conf_prop_mapping_title1: "MS Office 통합",
		admin_office_conf_instruction: "IBM Content Navigator for Microsoft Office가 클라이언트 시스템에 설치된 경우 IBM Content Navigator가 Microsoft Office 애플리케이션과 통합되는 방식을 제어할 수 있습니다.<br /><br /><b>중요:</b> <b>Office 특성 맵핑…</b>을 선택하는 경우 이 데스크탑과 연관된 각 저장소의 특성 맵핑도 구성해야 합니다. 사용자 환경의 각 저장소의 <b>Office 특성</b> 탭에서 특성 맵핑을 구성할 수 있습니다.",
		admin_desktop_workflows_instruction: "<b>IBM FileNet P8 시스템 전용:</b> 이 데스크탑에 표시할 애플리케이션 공간을 지정하십시오. 선택된 애플리케이션 공간의 순서는 웹 클라이언트에 표시되는 애플리케이션 공간의 순서를 결정합니다.<br><br><b>팁:</b> 관리 도구의 <b>레이블</b> 섹션에서 새 이름을 지정하여 애플리케이션 공간의 표시 이름을 변경할 수 있습니다.",
		admin_search_filtered_properties_instruction: "사용자가 검색할 수 있는 특성을 지정하십시오. 사용자가 검색하지 않도록 하려는 특성은 숨길 수 있습니다.",
		admin_search_filtered_operators_instruction: "사용자가 특정 데이터 유형(예: 날짜 또는 정수)을 검색하려는 경우 사용할 수 있는 연산자를 지정하십시오. 사용자가 선택하지 않도록 하려는 연산자는 숨길 수 있습니다.",
		admin_search_default_search_results_instruction: "검색 결과에서 문서 및 폴더에 대해 표시되는 특성을 지정하십시오. 검색 결과에 표시하지 않을 특성은 숨길 수 있습니다.",
		admin_search_default_search_results_p8_cmis_instruction: "검색 결과에서 문서에 대해 표시되는 특성을 지정하십시오. 결과에 표시하지 않을 특성은 숨길 수 있습니다.",

		admin_datetimeOp: "날짜 시간",
		admin_floatOp: "부동 소수점 수",
		admin_integerOp: "정수",
		admin_stringOp: "문자열",
		admin_binaryOp: "2진",
		admin_objectOp: "오브젝트",
		admin_idOp: "ID",
		admin_userOp: "사용자",
		admin_booleanOp: "부울",

		admin_string: "문자열",
		admin_long: "Long",
		admin_date: "날짜",
		admin_double: "Double",
		admin_object: "오브젝트",
		admin_guid: "GUID",
		admin_boolean: "부울",

		admin_repcfg_heading: "구성 매개변수를 설정하여 이 저장소의 기본 동작을 재정의할 수 있습니다.",
		admin_repcfg_heading_od: "구성 매개변수를 설정하여 이 저장소의 기본 동작을 재정의할 수 있습니다.<br /><br /><b>중요:</b> Content Manager OnDemand로 웹 클라이언트를 사용하려면 <b>설정</b> 아래 <b>Content Manager OnDemand</b> 탭에 포함된 매개변수에 대한 값도 지정해야 합니다. 이는 연결한 모든 Content Manager OnDemand 저장소에 적용됩니다.",
		admin_repcfg_teamspaces: "팀 작업영역 관리:",
		admin_repcfg_enable: "사용",
		admin_repcfg_disable: "사용 안함",

		admin_repcfg_deliver_redacted_pdf_files_as: "교정된 PDF 파일은 다음 형식으로 전달됩니다.",
		admin_repcfg_burn_pdf_to_pdf: "PDF 파일",
		admin_repcfg_burn_pdf_to_tiff: "TIFF 파일",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "역할 기반 교정을 적용하여 교정된 PDF 파일을 다른 파일 형식으로 클라이언트에 전달할 수 있습니다. 파일 형식이 변경되면 파일 확장자 및 MIME 유형도 변경됩니다.<br><br>예를 들어, PDF 파일이 TIFF 파일로 전달되면 파일 확장자가 .tiff로 변경됩니다.",
		admin_repcfg_redaction_allow_merge_and_split: "사용자가 역할 기반 교정이 적용된 페이지를 병합하고 분할할 수 있도록 허용합니다.",
		admin_repcfg_redaction_allow_merge_and_split_hover: "사용자가 역할 기반 교정이 적용된 페이지를 병합하고 분할할 수 있도록 허용하려면 이 옵션을 선택하십시오. 교정 편집자가 아닌 사용자는 이 옵션이 사용 가능한 경우에도 역할 기반 교정을 편집할 수 없으며 역할 기반 교정과 연관된 민감한 데이터에 대한 액세스 권한을 부여 받을 수 없습니다.",
		admin_repcfg_modify_teamspace_roles: "소유자가 기존 팀 작업영역의 역할을 수정하도록 허용",
		admin_repcfg_tm_delete_teamspace: "소유자가 컨텐츠를 포함하여 팀 작업영역을 삭제하도록 허용",
		admin_repcfg_tm_delete_teamspace_id_missing: "저장소 관리자의 사용자 이름을 지정해야 합니다.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "저장소 관리자의 비밀번호를 지정해야 합니다.",
		admin_repcfg_teamspace_display_Recent: "최근에 수정된 팀 작업영역만 표시 ",
		admin_repcfg_teamspace_display_Recent_value: "마지막 수정 이후 경과일:",

		admin_repcfg_folder_selector: "루트 폴더:",
		admin_repcfg_enable_folder_selector: "사용",
		admin_repcfg_disable_folder_selector: "사용 안함",
		admin_repcfg_SSO: "싱글 사인온:",
		admin_repcfg_teamspace_template_permission_text: "팀 작업영역 템플리트 작성자 지정:",
		admin_repcfg_teamspace_template_permission_hover_p8: "팀 작업영역 템플리트를 작성할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자 및 그룹에는 필요한 클래스 및 폴더에서 적절한 보안 설정을 수행할 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>추가 정보</a><br/><br/><b>권장:</b> 팀 작업영역 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_teamspace_template_permission_hover_cm: "팀 작업영역 템플리트를 작성할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자는 적절한 ACL에 추가되고 필요한 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>추가 정보</a><br/><br/><b>권장:</b> 팀 작업영역 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_teamspace_permission_text: "팀 작업영역 역할 지정:",
		admin_repcfg_teamspace_permission_hover_p8: "팀 작업영역을 작성하고 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자에는 필요한 클래스 및 폴더에서 적절한 보안 설정을 수행할 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>추가 정보</a><br/><br/><b>권장:</b> 팀 작업영역 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_teamspace_permission_hover_cm: "팀 작업영역을 작성하고 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자는 적절한 ACL에 추가되고 필요한 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>추가 정보</a><br/><br/><b>권장:</b> 팀 작업영역 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_entry_template_permission_text: "입력 템플리트 역할 지정:",
		admin_repcfg_entry_template_permission_hover_p8: "입력 템플리트를 작성하고 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자에는 필요한 입력 템플리트 문서 클래스에서 적절한 보안 설정을 수행할 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>추가 정보</a><br/><br/><b>권장:</b> 입력 템플리트 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_entry_template_permission_hover_cm: "입력 템플리트를 작성하고 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자는 적절한 ACL에 추가되고 필요한 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>추가 정보</a><br /><br /><b>권장:</b> 입력 템플리트 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_office_template_permission_text: "템플리트 역할 지정:",
		admin_repcfg_office_template_permission_hover_cm: "Microsoft Office Online 또는 편집 서비스 템플리트를 작성, 편집 및 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자는 적절한 ACL에 추가되고 필요한 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a><br /><br /><b>권장:</b> Microsoft Office Online 또는 편집 서비스 템플리트 관리를 단순화하려면 그룹을 사용하십시오.",
		admin_repcfg_draft_permission_text: "드래프트 역할 지정:",
		admin_repcfg_draft_permission_hover_cm: "협업 편집 중에 Microsoft Office Online 또는 편집 서비스 문서의 드래프트를 작성할 수 있는 그룹 또는 사용자를 지정하십시오. Microsoft Office Online 또는 편집 서비스에서 문서를 협업으로 편집해야 하는 사용자에게 드래프트를 작성하는 적절한 권한이 있어야 합니다. 이 사용자는 적절한 ACL에 추가되고 필요한 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a><br /><br /><b>권장:</b> 드래프트 관리를 단순화하려면 그룹을 사용하십시오.",
		admin_repcfg_search_permission_text: "검색 역할 지정:",
		admin_repcfg_search_permission_hover_p8: "저장된 검색 및 교차 저장소 검색을 작성하거나 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자에는 필요한 클래스에서 적절한 보안 설정을 수행할 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>추가 정보</a><br /><br /><b>권장:</b> 검색 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_search_permission_hover_cm: "저장된 검색 및 교차 저장소 검색을 작성, 편집 또는 사용할 수 있는 그룹 또는 사용자를 지정하십시오. 이 사용자는 적절한 ACL에 추가되고 필요한 권한이 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>추가 정보</a><br /><br /><b>권장:</b> 검색 관리를 단순하게 하려면 그룹을 사용하십시오.",
		admin_repcfg_search_permission_title: "검색 역할",
		admin_repcfg_search_permission_intro_text: "사용자에게 해당 역할을 지원하는 데스크탑에 대한 액세스 권한이 있는지 확인하십시오. 예를 들어 검색 및 교차 저장소 검색을 작성할 수 있는 검색 작성자에게 데스크탑에 대한 액세스 권한이 있는지 확인하십시오.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "팀 작업영역 템플리트 관리자는 저장소(오브젝트 저장소)에서 <b>전체 제어</b> 권한이 있는 사용자입니다. 관리 도구에서 팀 작업영역 템플리트 관리자의 목록을 변경할 수 없습니다. <p>팀 작업영역 템플리트 관리자는 팀 작업영역 템플리트를 삭제하거나 수정할 수 있습니다. 팀 작업영역 템플리트를 작성하는 사용자는 팀 작업영역 템플리트 관리자와 템플리트를 공유하지 않아도 됩니다.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "사용자 또는 그룹을 팀 작업영역 템플리트 작성자로 지정한 경우 저장소에서 팀 작업영역 템플리트를 작성하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>추가 정보</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "관리자 및 작성자와 연관된 권한 이외의 권한이 지정된 사용자 및 그룹입니다.<p>이 사용자 및 그룹을 기타 역할에서 제거한 후 팀 작업영역 템플리트 작성자로 지정하여 팀 작업영역 템플리트 작성자로 이동할 수 있습니다.<p>IBM Administration Console for Content Engine을 사용하여 현재 이 사용자 및 그룹에 부여된 권한을 검토할 수 있습니다.",
		admin_repcfg_teamspace_administrators_hover_p8: "팀 작업영역 관리자는 저장소(오브젝트 저장소)에서 <b>전체 제어</b> 권한이 있는 사용자입니다. 관리 도구에서 팀 작업영역 관리자의 목록을 변경할 수 없습니다.<p>팀 작업영역 관리자는 팀 작업영역을 삭제하거나 수정할 수 있습니다. 팀 작업영역을 작성하는 사용자는 팀 작업영역 관리자와 팀 작업영역을 공유하지 않아도 됩니다.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "사용자 또는 그룹을 팀 작업영역 작성자로 지정한 경우 저장소에서 팀 작업영역을 작성하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>추가 정보</a>",
		admin_repcfg_teamspace_user_hover_p8: "사용자 또는 그룹을 팀 작업영역 사용자로 지정한 경우 저장소에서 팀 작업영역을 사용하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. 그러나 팀 작업영역에 액세스하려면 사용자가 팀 작업영역의 구성원이어야 합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>추가 정보</a><p><b>팁:</b> 사용자 환경의 모든 사용자가 팀 작업영역을 볼 수 있도록 하려면 팀 작업영역 사용자 역할에 #AUTHENTICATED-USERS pseudo 계정을 추가할 수 있습니다.</p>",
		admin_repcfg_teamspace_others_hover_p8: "관리자, 작성자 및 사용자와 연관된 권한 이외의 권한이 지정된 사용자 및 그룹입니다.<p>이 사용자 및 그룹을 기타 역할에서 제거한 후 팀 작업영역 역할을 지정하여 사전 정의된 역할로 이동할 수 있습니다.<p>IBM Administration Console for Content Engine을 사용하여 현재 이 사용자 및 그룹에 부여된 권한을 검토할 수 있습니다.",		
		admin_repcfg_entry_template_administrators_hover_p8: "입력 템플리트 관리자는 저장소(오브젝트 저장소)에서 <b>전체 제어</b> 권한이 있는 사용자입니다. 관리 도구에서 입력 템플리트 관리자의 목록을 변경할 수 없습니다. <p>입력 템플리트 관리자는 입력 템플리트를 삭제하거나 수정할 수 있습니다. 입력 템플리트를 작성하는 사용자는 입력 템플리트 관리자와 입력 템플리트를 공유하지 않아도 됩니다.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "사용자 또는 그룹을 입력 템플리트 작성자로 지정한 경우 저장소에서 입력 템플리트를 작성하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>추가 정보</a>",
		admin_repcfg_entry_template_user_hover_p8: "사용자 또는 그룹을 입력 템플리트 사용자로 지정한 경우 저장소에서 입력 템플리트를 사용하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>추가 정보</a><p><b>팁:</b> 사용자 환경의 모든 사용자가 입력 템플리트를 사용할 수 있도록 하려면 입력 템플리트 사용자 역할에 #AUTHENTICATED-USERS pseudo 계정을 추가할 수 있습니다.</p>",
		admin_repcfg_entry_template_others_hover_p8: "관리자, 작성자 및 사용자와 연관된 권한 이외의 권한이 지정된 사용자 및 그룹입니다.<p>이 사용자 및 그룹을 기타 역할에서 제거한 후 입력 템플리트 역할을 지정하여 사전 정의된 역할로 이동할 수 있습니다.<p>IBM Administration Console for Content Engine을 사용하여 현재 이 사용자 및 그룹에 부여된 권한을 검토할 수 있습니다.",
		admin_repcfg_teamspace_template_creators_hover_cm: "사용자 또는 그룹을 팀 작업영역 템플리트 작성자로 지정한 경우 저장소에서 팀 작업영역 템플리트를 작성하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>추가 정보</a>",
		admin_repcfg_teamspace_creators_hover_cm: "사용자 또는 그룹을 팀 작업영역 작성자로 지정한 경우 저장소에서 팀 작업영역을 작성하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>추가 정보</a>",
		admin_repcfg_teamspace_user_hover_cm: "사용자 또는 그룹을 팀 작업영역 사용자로 지정한 경우 저장소에서 팀 작업영역을 사용하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. 그러나 팀 작업영역에 액세스하려면 사용자가 팀 작업영역의 구성원이어야 합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>추가 정보</a>",
		admin_repcfg_entry_template_creators_hover_cm: "사용자 또는 그룹을 입력 템플리트 작성자로 지정한 경우 저장소에서 입력 템플리트를 작성하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <br/><br/>그러나 특정 입력 템플리트의 보안 설정은 입력 템플리트에서 사용자 또는 그룹이 가지고 있는 권한을 판별합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>추가 정보</a>",
		admin_repcfg_entry_template_editors_hover_cm: "사용자 또는 그룹을 입력 템플리트 편집자로 지정한 경우 저장소에서 입력 템플리트를 수정하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <br/><br/>그러나 특정 입력 템플리트의 보안 설정은 입력 템플리트에서 사용자 또는 그룹이 가지고 있는 권한을 판별합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>추가 정보</a>",
		admin_repcfg_entry_user_hover_cm: "사용자 또는 그룹을 입력 템플리트 사용자로 지정한 경우 저장소에서 입력 템플리트를 사용하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <br/><br/>그러나 특정 입력 템플리트의 보안 설정은 입력 템플리트에서 사용자 또는 그룹이 가지고 있는 권한을 판별합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>추가 정보</a>",
		admin_repcfg_office_template_creators_hover_cm: "사용자 또는 그룹을 Microsoft Office Online 또는 편집 서비스 템플리트 작성자로 지정한 경우 저장소에서 템플리트 파일을 작성하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <br/><br/>그러나 특정 템플리트 파일의 보안 설정은 해당 템플리트에 대해 사용자 또는 그룹이 가지고 있는 권한을 판별합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a>",
		admin_repcfg_office_template_editors_hover_cm: "사용자 또는 그룹을 Microsoft Office Online 또는 편집 서비스 템플리트 편집자로 지정한 경우 저장소에서 템플리트 파일을 수정하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <br/><br/>그러나 특정 템플리트 파일의 보안 설정은 해당 템플리트에 대해 사용자 또는 그룹이 가지고 있는 권한을 판별합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a>",
		admin_repcfg_office_template_user_hover_cm: "사용자 또는 그룹을 Microsoft Office Online 또는 편집 서비스 템플리트 사용자로 지정한 경우 웹 클라이언트에서 새 Office Online 문서를 작성할 때 템플리트에 적용되는 적절한 권한이 사용자 또는 그룹에 부여됩니다. <br/><br/>그러나 특정 템플리트 파일의 보안 설정은 해당 템플리트에 대해 사용자 또는 그룹이 가지고 있는 권한을 판별합니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a>",
		admin_repcfg_draft_creators_hover_cm: "Microsoft Office Online 또는 편집 서비스에서 문서를 협업으로 편집해야 하는 사용자에게 이 역할을 지정해야 합니다. 사용자에게 편집자 또는 사용자 역할을 지정하지 마십시오. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a>",
		admin_repcfg_draft_editors_hover_cm: "Microsoft Office Online 또는 편집 서비스에서 문서를 협업으로 편집해야 하는 사용자에게 <b>작성자</b> 역할을 지정해야 합니다. 사용자에게 편집자 역할을 지정한 경우 사용자는 협업 편집에 필요한 드래프트를 작성할 수 없습니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a>",
		admin_repcfg_draft_user_hover_cm: "Microsoft Office Online 또는 편집 서비스에서 문서를 협업으로 편집해야 하는 사용자에게 <b>작성자</b> 역할을 지정해야 합니다. 사용자에게 사용자 역할을 지정한 경우 사용자는 협업 편집에 필요한 드래프트를 작성할 수 없습니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>추가 정보</a>",		
		admin_repcfg_search_others_hover_p8: "관리자, 작성자 및 사용자와 연관된 권한 이외의 권한이 지정된 사용자 및 그룹입니다.<p>이 사용자 및 그룹을 기타 역할에서 제거한 후 검색 역할을 지정하여 사전 정의된 역할로 이동할 수 있습니다.<p>IBM Administration Console for Content Engine을 사용하여 현재 이 사용자 및 그룹에 부여된 권한을 검토할 수 있습니다.",		
		admin_repcfg_search_admins_hover_p8: "검색 관리자는 저장소(오브젝트 저장소)에서 <b>전체 제어</b> 권한이 있는 사용자입니다. 관리 도구에서 검색 관리자의 목록을 변경할 수 없습니다. <br /><br />검색 관리자는 검색을 삭제하거나 수정할 수 있습니다. 검색을 작성하는 사용자는 검색 관리자와 검색을 공유하지 않아도 됩니다.",
		admin_repcfg_search_creators_hover_p8: "사용자 또는 그룹을 검색 작성자로 지정한 경우 저장소에서 검색을 작성하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>추가 정보</a>",
		admin_repcfg_search_user_hover_p8: "사용자 또는 그룹을 검색 사용자로 지정한 경우 저장소에서 검색을 사용하기 위해 필요한 적절한 보안 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>추가 정보</a><br /><br /><b>팁:</b> 사용자 환경의 모든 사용자가 검색을 사용할 수 있도록 하려면 검색 사용자 역할에 #AUTHENTICATED-USERS pseudo 계정을 추가할 수 있습니다.<br/><br />기본적으로 검색 사용자는 검색과 교차 저장소 검색을 작성할 수 있지만 검색을 저장할 수 없습니다. 검색 사용자가 다음 옵션이 선택된 데스크탑을 사용함으로써 검색을 작성하지 않도록 할 수 있습니다.<ul><li><b>사용자가 검색 작성 방지</b></li><li><b>교차 저장소 검색 작성 방지</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "사용자 또는 그룹을 검색 작성자로 지정한 경우 저장소에서 검색과 교차 저장소 검색을 작성하고 저장하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>추가 정보</a><br /><br /><b>중요:</b> 검색 작성자가 다음 옵션이 선택되지 않은 데스크탑을 사용하는지 확인하십시오.<ul><li><b>사용자가 검색 작성 방지</b></li><li><b>교차 저장소 검색 작성 방지</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "사용자 또는 그룹을 검색 편집자로 지정한 경우 기존 검색과 교차 저장소 검색을 수정하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>추가 정보</a><br /><br /><b>팁:</b> 기본적으로 검색 편집자는 검색과 교차 저장소 검색을 작성할 수 있지만 검색을 저장할 수 없습니다. 검색 편집자가 다음 옵션이 선택된 데스크탑을 사용함으로써 검색을 작성하지 않도록 할 수 있습니다.<ul><li><b>사용자가 검색 작성 방지</b></li><li><b>교차 저장소 검색 작성 방지</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "사용자 또는 그룹을 검색 사용자로 지정한 경우 저장된 검색과 교차 저장소 검색을 열고 실행하기 위해 필요한 적절한 권한이 이 사용자 또는 그룹에 부여됩니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>추가 정보</a><br /><br /><b>팁:</b> 기본적으로 검색 사용자는 검색과 교차 저장소 검색을 작성할 수 있지만 검색을 저장할 수 없습니다. 검색 사용자가 다음 옵션이 선택된 데스크탑을 사용함으로써 검색을 작성하지 않도록 할 수 있습니다.<ul><li><b>사용자가 검색 작성 방지</b></li><li><b>교차 저장소 검색 작성 방지</b></li></ul>",
		admin_repcfg_db_encoding: "서버 데이터베이스 문자 인코딩:",
		admin_repcfg_db_encoding_hover: "IBM Content Manager 데이터베이스의 기본 문자 인코딩은 UTF-8입니다.",
		admin_repcfg_db_encoding_specify: "데이터베이스 문자 인코딩 지정",
		admin_repcfg_db_encoding_utf8: "UTF-8 인코딩",
		admin_repcfg_db_encoding_utf8_hover: "UTF-8 인코드된 데이터베이스를 사용하는 경우 이 옵션을 지정하십시오. IBM Content Navigator는 UTF-8 인코딩을 사용하여 항목 특성 값 문자열의 길이를 확인합니다.",
		admin_repcfg_db_encoding_other: "기타 인코딩",
		admin_repcfg_db_encoding_other_hover: "UTF-8이 아닌 인코딩의 데이터베이스를 사용하는 경우 이 옵션을 지정하십시오. IBM Content Navigator는 문자 계수를 사용하여 항목 특성 값 문자열의 길이를 확인합니다.",
		admin_repcfg_language_codes: "서버 언어 코드:",
		admin_repcfg_language_codes_avail: "사용 가능",
		admin_repcfg_language_codes_sel: "선택됨",
		admin_repcfg_pdf_conversion: "첨부 파일에서 PDF 문서로 변환할 MIME 유형:",
		admin_repcfg_pdf_conversion_avail: "사용 가능",
		admin_repcfg_pdf_conversion_sel: "선택됨",

		admin_repcfg_box_share_enable_classes_label: "Box 공유를 지원하도록 수정할 클래스:",
		admin_repcfg_box_share_enable_classes_hover: "항목이 공유되는 경우 Box의 파일 ID를 저장하기 위해 클래스를 수정할 수 있습니다.",
		admin_repcfg_box_share_enable_classes_warning: "중요: 지정하는 클래스는 Box 공유를 지원하도록 수정됩니다. 변경사항을 저장한 후 클래스에서 변경사항을 제거할 수 없습니다.<br><br>클래스를 수정하려면 라이브러리 서버 관리자로 저장소를 연결해야 합니다.",
		admin_repcfg_box_share_enable_classes_available: "사용 가능한 클래스",
		admin_repcfg_box_share_enable_classes_selected: "선택된 클래스",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Box 공유 ID 저장",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "이 클래스는 Box 공유 ID를 저장하도록 이미 수정되었습니다. 이 옵션을 제거할 수 없습니다.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "항목이 공유될 때 Box의 파일 ID를 저장하기 위해 이 클래스를 수정하십시오.",

		admin_repcfg_redaction: "역할 기반 교정:",
		admin_repcfg_enable_redaction_hover: "이 저장소에 있는 문서에 대해 역할 기반 교정을 사용할 것인지 여부를 지정하십시오.<br/><br/>역할 기반 교정은 문서가 다운로드되거나, 인쇄되거나, 뷰어에서 렌더링되거나, 썸네일로 표시될 때 적용됩니다. 사용자가 문서를 볼 때 표시되는 항목은 역할 및 적용 가능한 교정 정책에 따라 달라집니다.",

		admin_repcfg_redaction_policy_permission_text: "정책 편집자 지정:",
		admin_repcfg_redaction_policy_editors_hover: "교정 정책과 교정 역할을 작성, 수정 및 삭제할 사용자 및 그룹을 선택하십시오.",
		admin_repcfg_redaction_policy_editors_select_hover: "교정 정책 편집자는 교정 정책과 교정 역할을 작성, 수정 및 삭제할 수 있습니다.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "교정 정책 관리자는 교정 정책 편집자를 지정할 수 있습니다.<br/><br/>IBM Administration Console for Content Engine을 사용하여 교정 정책 관리자 목록을 변경할 수 있습니다.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "교정 정책 관리자는 교정 정책 편집자를 지정할 수 있습니다.<br/><br/>IBM Content Manager 시스템 관리자 클라이언트를 사용하여 교정 정책 관리자 목록을 변경할 수 있습니다.",

		admin_repcfg_redaction_permission_text: "교정 편집자 지정:",
		admin_repcfg_redaction_editors_hover: "역할 기반 교정을 작성, 수정 및 삭제할 사용자 및 그룹을 선택하십시오. 사용자 및 그룹을 편집자로 선택한 후 해당 사용자 및 그룹이 역할 기반 교정을 편집할 수 있으려면 먼저 교정 정책의 편집자로 지정해야 합니다.",
   		admin_repcfg_redaction_editors_select_hover: "교정 편집자가 교정 정책의 편집자로도 지정된 경우 역할 기반 교정을 작성, 수정 및 삭제할 수 있습니다.",
   		admin_repcfg_redaction_administrators_hover_p8: "교정 관리자는 교정 편집자를 지정할 수 있습니다.<br/><br/>IBM Administration Console for Content Engine을 사용하여 교정 관리자 목록을 변경할 수 있습니다.",
   		admin_repcfg_redaction_administrators_hover_cm: "교정 관리자는 교정 편집자를 지정할 수 있습니다.<br/><br/>IBM Content Manager 시스템 관리자 클라이언트를 사용하여 교정 관리자 목록을 변경할 수 있습니다.",
		admin_repcfg_entry_template: "입력 템플리트 관리:",
		admin_repcfg_entry_template_enable_classes_label: "입력 템플리트를 지원하도록 수정할 클래스:",
		admin_repcfg_oos_reference_attribute_label: "Office Online의 참조 속성:",
		admin_repcfg_entry_template_enable_classes_hover: "중요: 지정하는 클래스는 입력 템플리트를 지원하도록 수정됩니다. 변경사항을 저장한 후 클래스에서 변경사항을 제거할 수 없습니다.<br><br>다음 용도 중 하나 또는 둘 다를 위해 클래스를 수정할 수 있습니다.<br><ul><li>항목이 수정될 때 입력 템플리트 설정이 적용되도록 항목을 추가하는 데 사용된 입력 템플리트의 ID를 저장합니다.</li><li>계층 구조 폴더 클래스만 해당: 입력 템플리트 폴더 연관을 지원합니다.</li></ul>클래스를 수정하려면 라이브러리 서버 관리자로 저장소를 연결해야 합니다.",
		admin_repcfg_entry_template_enable_classes_warning: "중요: 지정하는 클래스는 입력 템플리트를 지원하도록 수정됩니다. 변경사항을 저장한 후 클래스에서 변경사항을 제거할 수 없습니다.<br><br>클래스를 수정하려면 라이브러리 서버 관리자로 저장소를 연결해야 합니다.",
		admin_repcfg_entry_template_enable_classes_available: "사용 가능한 클래스",
		admin_repcfg_entry_template_enable_classes_selected: "선택된 클래스",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "입력 템플리트 ID 저장",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "항목이 수정될 때 입력 템플리트 설정이 적용되도록 항목을 추가하는 데 사용된 입력 템플리트의 ID를 저장하기 위해 이 클래스를 수정하십시오.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "폴더 연관 저장",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "입력 템플리트 폴더 연관을 지원할 수 있도록 이 클래스를 수정하십시오. 이 옵션은 계층 구조 폴더 클래스의 경우에만 사용할 수 있습니다.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "이 클래스는 입력 템플리트 ID를 저장하도록 이미 수정되었습니다. 이 옵션을 제거할 수 없습니다.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "이 클래스는 폴더 연관을 저장하도록 이미 수정되었습니다. 이 옵션을 제거할 수 없습니다.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "계층 구조 폴더 클래스 및 비계층 구조 클래스를 사용하여 폴더 연관을 저장할 수 있습니다.",
		admin_repcfg_entry_template_root_folder_association_title: "루트 폴더와 연관된 입력 템플리트:",
		admin_repcfg_entry_template_root_folder_association_hover: "IBM Content Manager 저장소에서 루트 폴더와 연관시키려는 입력 템플리트를 지정하십시오.<br /><br />입력 템플리트를 루트 폴더와 연관시키는 경우 및 사용자가 항목을 계층 구조 폴더에 추가하는 경우 항목을 추가하는 데 항상 입력 템플리트가 사용됩니다.",
		admin_repcfg_entry_template_root_folder_association_button: "연관 설정",
		admin_repcfg_oos_enable_classes_label: "Office Online 및 편집 서비스를 지원하도록 수정할 클래스:",
		admin_repcfg_oos_enable_classes_warning: "중요: 지정하는 클래스는 Microsoft Office Online 또는 편집 서비스에서 작동하도록 수정됩니다. 변경사항을 저장한 후 각 클래스에 자동으로 추가되는 참조 속성을 제거할 수 없습니다.<br><br>클래스를 수정하려면 라이브러리 서버 관리자로 저장소를 연결해야 합니다.",
		admin_repcfg_oos_enable_classes_available: "사용 가능한 클래스",
		admin_repcfg_oos_enable_classes_selected: "선택된 클래스",
		admin_repcfg_oos_enable_classes_note: "중요:",
		admin_repcfg_oos_enable_classes_selected_not_support: "이 클래스는 Microsoft Office Online 또는 편집 서비스에서 지원되지 않습니다.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "클래스의 버전 정책은 Microsoft Office Online 또는 편집 서비스가 지원하지 않는 버전으로 항상 설정됩니다. 다른 클래스를 선택하십시오.",
		admin_repcfg_download_recording: "다운로드 추적:",
		admin_repcfg_download_recording_hover: "Social Collaboration Base Extensions 추가 기능이 저장소에 설치된 경우 기본적으로 다운로드를 추적합니다. 그러나 이 옵션을 사용 안함으로 설정하면 저장소의 성능이 향상될 수 있습니다.<br><br>이 옵션을 사용 안함으로 설정하면 사용자가 옵션이 사용 안함으로 설정되기 전에 발생한 다운로드 수를 확인할 수 있습니다.",
		admin_repcfg_sync_service: "동기화 서비스:",
		admin_repcfg_download_ignored: "특정 사용자의 다운로드 무시:",
		admin_repcfg_download_ignored_hover: "문서를 다운로드한 사용자 수를 보다 정확하게 반영하기 위해 관리자나 시스템 계정과 같은 특정 사용자가 요청한 다운로드를 무시할 수 있습니다. 예를 들어, 월별 보고서를 생성하기 위해 컨텐츠를 다운로드하는 데 사용되는 특정 계정이 있는 경우 해당 계정이 요청하는 다운로드를 무시할 수 있습니다.<br><br><b>제한사항:</b> 그룹을 지정할 수 없습니다.",

		admin_repcfg_add_as_major_version: "주 버전으로 추가:",
		admin_repcfg_enable_add_as_major_version: "예",
		admin_repcfg_disable_add_as_major_version: "아니오",
		admin_repcfg_checkin_as_major_version: "주 버전으로 체크인:",
		admin_repcfg_enable_checkin_as_major_version: "예",
		admin_repcfg_disable_checkin_as_major_version: "아니오",
		admin_repcfg_annotation_security: "어노테이션 보안:",
		admin_repcfg_inherit_annotation_security: "포함 문서의 보안 복제",
		admin_repcfg_default_annotation_security: "기본 어노테이션 보안 사용",
		admin_repcfg_connection_point: "워크플로우 연결 지점:",
		admin_repcfg_include_workflow_definition: "워크플로우 정의 클래스 표시",
		admin_repcfg_include_form_template: "양식 템플리트 클래스 표시:",
		admin_repcfg_enable_include_workflow_definition: "예",
		admin_repcfg_disable_include_workflow_definition: "아니오",

		admin_repcfg_status_columns: "상태 아이콘:",
		admin_repcfg_status_columns_hover: "표시할 아이콘의 상태를 지정하십시오. 상태 아이콘은 컨텐츠 목록의 문서, 폴더 및 작업 항목 옆에 표시됩니다.",
		admin_repcfg_status_columns_documents_or_folders: "다음 상태의 문서 또는 폴더 아이콘 표시:",
		admin_repcfg_status_columns_documents: "다음 상태의 문서에 아이콘 표시:",
		admin_repcfg_status_columns_documents_checked_out: "체크아웃됨",
		admin_repcfg_status_columns_documents_declared_records: "레코드로 선언됨",
		admin_repcfg_status_columns_documents_minor_versions: "부 버전이 있음",
		admin_repcfg_status_columns_documents_compound_document: "복합 문서임",
		admin_repcfg_status_columns_documents_bookmarks: "책갈피가 있음",
		admin_repcfg_status_columns_documents_hold: "보류항목에 있음",
		admin_repcfg_status_columns_documents_notes: "참고사항이 있음",
		admin_repcfg_status_columns_work_items: "항목 작업 시 아이콘 표시:",
		admin_repcfg_status_columns_work_items_locked: "잠김",
		admin_repcfg_status_columns_work_items_checked_out: "체크아웃됨",
		admin_repcfg_status_columns_work_items_deadline: "데드라인이 있음",
		admin_repcfg_status_columns_work_items_suspended: "처리 중 일시중단됨",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF 구성 파일:",
		admin_repcfg_transform_xml_file: "사용자 정의 변환 파일:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "사용",
		admin_repcfg_disable_ssl: "사용 안함",
		admin_repcfg_keyringdb_file: "키 링 데이터베이스 파일:",
		admin_repcfg_keyringstash_file: "키 링 숨김 파일:",
		admin_repcfg_od_sso: "싱글 사인온",
		admin_repcfg_od_enable_sso: "사용",
		admin_repcfg_od_disable_sso: "사용 안함",
		admin_repcfg_od_sso_password: "비밀번호",
		admin_repcfg_advanced_label: "고급",
		admin_repcfg_custom_properties_label: "사용자 정의 특성:",
		admin_repcfg_new_button_label: "새로 작성",
		admin_repcfg_edit_button_label: "편집",
		admin_repcfg_delete_button_label: "삭제",
		admin_repcfg_custom_head1: "이름",
		admin_repcfg_custom_head2: "값",
		admin_repcfg_ecpdialog_title_new: "새 사용자 정의 특성",
		admin_repcfg_ecpdialog_title_edit: "사용자 정의 특성 편집",
		admin_repcfg_ecpdialog_name: "이름:",
		admin_repcfg_ecpdialog_value: "값:",
		admin_repcfg_ecpdialog_save: "저장",
		admin_repcfg_ecpdialog_create: "작성",
		admin_repcfg_ecpdialog_cancel: "취소",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "이 값은 필수입니다. 이 값에는 공백을 사용할 수 없으며 중복될 수 없습니다.",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP 인코딩 사용:",

		admin_repcfg_task_mgr_proxy: "태스크 관리자 연결 ID:",
		admin_repcfg_task_mgr_proxy_hover: "Box 공유 또는 팀 작업영역 삭제의 경우, 태스크 관리자는 관리자 ID와 비밀번호를 사용하여 저장소를 수정하는 백그라운드 태스크를 실행합니다.<br><br>설정을 클릭하고 유효한 저장소 관리자 ID 및 비밀번호를 사용하여 저장소에 로그인하십시오.",
		admin_task_manager_not_enabled_warning: "이 옵션에는 태스크 관리자 서비스가 필요하지만 태스크 관리자 서비스가 사용으로 설정되지 않았습니다. 설정을 위해 일반 페이지의 모든 데스크탑에 대해 태스크 관리자 서비스를 사용으로 설정할 수 있습니다.",
		admin_task_manager_not_enabled_and_user_warning: "이 옵션에는 태스크 관리자 서비스가 필요하지만 태스크 관리자 서비스가 사용으로 설정되지 않았습니다. 이 페이지에서 태스크 관리자 연결 ID를 설정한 후 설정을 위해 일반 페이지에서 모든 데스크탑에 대해 태스크 관리자 서비스를 사용하십시오.",
		admin_task_manager_user_id_pw_not_set_warning: "이 옵션에는 태스크 관리자 서비스 및 관리자 ID와 비밀번호가 필요합니다. 이 페이지에서 태스크 관리자 연결 ID를 설정하십시오.",
		admin_repcfg_teamspaces_delete_task_id: "저장소 관리자:",
		admin_repcfg_teamspaces_delete_task_password: "비밀번호:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "태스크 관리자 서비스를 사용하여 저장소에서 팀 공간을 삭제하려면 라이브러리 서버 관리자를 지정해야 합니다.",
		admin_repcfg_teamspaces_delete_task_hover: "기본적으로 사용자가 팀 공간을 삭제하면 팀 공간이 숨겨집니다. 팀 공간의 모든 폴더 및 문서는 저장소에 남습니다. <br /> <br />이 옵션을 사용하면 저장소의 다른 폴더에 보관된 문서만 저장소에 남습니다.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "사용자 환경에 팀 작업영역이 많이 있는 경우 <b>팀 작업영역</b> 탭에 모든 팀 작업영역을 표시하는 데 오래 걸릴 수 있습니다. 이 옵션을 선택하면 목록을 채우는 데 걸리는 시간을 줄일 수 있습니다.<br /><br />사용자가 지정된 범위에 속하지 않는 팀 작업영역에 대해 작업해야 하는 경우 사용자는 <b>필터</b> 필드를 사용하여 팀 작업영역을 찾을 수 있습니다.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "이 옵션을 선택하는 경우, 팀 작업영역에 대한 소유자 역할을 가진 사용자가 IBM Content Navigator 2.0.2 버전 이전에 작성된 팀 작업영역과 연관된 역할을 수정할 수 있습니다.<br /><br />이 옵션은 IBM Content Navigator 2.0.2 버전을 사용하여 작성된 팀 작업영역에는 영향을 미치지 않습니다.",
		admin_repcfg_use_teamspaces_cm_hover: "사용자가 이 저장소에서 팀 작업영역 및 팀 작업영역 템플리트를 작성할 수 있는지 지정하십시오.<br /><br /><b>중요:</b> 저장소는 계층 구조 폴더를 지원해야 합니다.<br /><br />팀 작업영역을 사용하는 경우 IBM Content Navigator가 저장소에 팀 작업영역 데이터 모델을 작성합니다.  데이터 모델에는 ACL 오브젝트, 권한, 권한 세트 및 2개의 새 항목 유형이 포함됩니다.",
		admin_repcfg_folder_selector_hover: "사용자가 문서를 찾아볼 때 루트 폴더로 사용할 폴더를 선택하십시오. 저장소에 계층 구조 폴더가 구성되어 있지 않으면, 이 설정으로 루트 폴더를 정의하여 찾아보기를 지원할 수 있습니다. 저장소에 계층 구조 폴더가 구성되어 있으면 이 설정은 저장소에 구성된 루트 폴더를 재정의합니다.",
		admin_repcfg_cm_use_sso_hover: "신뢰 로그온 권한 세트가 있는 사용자에게 싱글 사인온을 허용하는지 지정하십시오.<br /><br /><b>중요:</b> 이 구성 매개변수가 작동하려면 Content Manager 서버에서 싱글 사인온을 사용할 수 있어야 하며 LTPA에 대해 WebSphere Application Server가 구성되어 있어야 합니다.",
		admin_repcfg_cm_direct_retrieve_hover: "웹 클라이언트가 자원 관리자에서 컨텐츠를 신속하게 검색할 수 있기 때문에 기본적으로 직접 검색이 사용 가능합니다. <br /><br />클라이언트 애플리케이션이 자원 관리자에 직접적으로 액세스할 수 없는 경우 또는 URL을 통해 자원 관리자에 액세스할 수 없는 방화벽이나 프록시가 있는 경우 이 옵션을 사용할 수 없습니다. 예를 들어, 직접 검색이 사용 가능한 경우 방화벽으로 인해 사용자가 애플릿 뷰어로 문서를 볼 수 없습니다.",
		admin_repcfg_cmItemTypesToDisplay: "사용자에게 자원 항목 유형 및 IBM Content Manager 서버에 대한 항목 유형을 표시하지 않으려면 문서 모델 항목 유형만 표시할 수 있습니다. 사용자가 검색을 작성하고 문서를 추가하고 폴더를 작성할 때 항목 유형이 표시됩니다.",
		admin_repcfg_cm_language_codes_hover: "Content Manager 서버에서 데이터를 리턴하는 데 사용할 언어를 지정하십시오. 사용 가능한 언어 목록은 서버의 언어 정의 목록에 따라 제어됩니다.<br /><br /><b>주의사항:</b> 웹 클라이언트의 데이터는 사용자의 웹 브라우저에 설정된 언어로 표시됩니다.",
		admin_repcfg_cm_pdf_conversion_hover: "사용자가 여러 부분으로 된 문서를 이메일 첨부로 발송할 때 PDF로 변환할 문서 유형을 지정하십시오. 모든 부분이 단일 PDF 문서로 결합됩니다.",
		admin_repcfg_use_teamspaces_p8_hover: "사용자가 이 저장소에서 팀 작업영역 및 팀 작업영역 템플리트를 작성할 수 있는지 지정하십시오.<br /><br />팀 작업영역을 사용하는 경우 IBM Content Navigator가 저장소에 팀 작업영역 데이터 모델을 작성합니다. 데이터 모델에는 특성 템플리트, 사용자 정의 오브젝트, 폴더 오브젝트 및 여러 폴더가 포함됩니다.",
		admin_repcfg_use_entry_template_p8_hover: "사용자가 IBM Content Navigator에서 이 저장소의 입력 템플리트를 작성하고 관리할 수 있도록 할 것인지 여부를 지정하십시오. 이 기능을 사용하지 않는 경우 사용자가 저장소에 이미 있는 입력 템플리트를 검색하고 사용할 수 있습니다.<br /><br />입력 템플리트 관리를 사용하는 경우 IBM Content Navigator는 저장소에서 입력 템플리트 데이터 모델을 업데이트합니다. 업데이트에는 새 특성이 있습니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>추가 정보</a>",
		admin_repcfg_use_entry_template_cm_hover: "사용자가 IBM Content Navigator에서 이 저장소의 입력 템플리트를 작성하고 관리할 수 있도록 할 것인지 여부를 지정하십시오.<br /><br />입력 템플리트 관리를 사용하는 경우 IBM Content Navigator는 저장소에서 입력 템플리트 데이터 모델을 작성합니다. 데이터 모델에는 새 ACL 오브젝트, 새 특성, 새 항목 유형이 있습니다. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>추가 정보</a>",
		admin_repcfg_sync_service_p8_hover: "워크스테이션과 모바일 디바이스에서 즐겨찾기 항목을 동기화할 수 있도록 할 것인지 여부를 지정하십시오.<br><br><b>중요사항:</b> 이 기능을 사용하려면 다음 태스크도 완료해야 합니다.<br><ul><li>관리 도구의 <b>동기화 서비스</b> 섹션에서 <b>동기화 서비스 공용 URL</b>을 지정하십시오.</li><li>동기화 서비스의 사용 대상인 데스크탑에 이 저장소를 추가하십시오.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "사용자가 문서를 저장소에 추가할 때 기본적으로 주 버전 옵션을 선택하는지 지정하십시오.<br /><br />문서를 부 버전으로 추가하려는 경우 사용자가 이 옵션을 취소할 수 있는 옵션이 있습니다.",
		admin_repcfg_p8_checkin_as_major_version_hover: "사용자가 문서를 저장소에 체크인할 때 기본적으로 주 버전 옵션을 선택하는지 지정하십시오.<br /><br />문서를 부 버전으로 체크인하려는 경우 사용자가 이 옵션을 취소할 수 있는 옵션이 있습니다.",
		admin_repcfg_p8_annotation_security_hover: "어노테이션에 기본적으로 적용할 보안 유형을 지정하십시오.<br /><br />사용자는 어노테이션의 보안을 변경할 수 있는 옵션이 있습니다.",
		admin_repcfg_p8_connection_point_hover: "IBM FileNet P8 워크플로우를 사용하려는 경우 Process Engine 연결 지점을 선택하십시오. 선택하는 연결 지점에 따라서 이 저장소에 액세스하는 사용자가 사용할 수 있는 워크플로우가 결정됩니다.",
		admin_repcfg_p8_include_workflow_definition_hover: "웹 클라이언트에서 IBM FileNet P8 워크플로우 정의 문서 클래스를 표시하는 경우, 사용자가 워크플로우 정의를 검색하고 저장소에 추가할 수 있습니다.",
		admin_repcfg_p8_include_form_template_hover: "웹 클라이언트에서 IBM FileNet P8 양식 템플리트 문서 클래스를 표시하는 경우, 사용자가 양식 템플리트를 검색하고 저장소에 추가할 수 있습니다.",
		admin_repcfg_od_afp2pdf_config_file_hover: "웹 애플리케이션 서버에 있는 이 저장소의 AFP2PDF 구성 파일에 대한 완전한 경로를 지정하십시오. AFP2PDF 변환은 AFP 데이터를 표시하고 인쇄하는 데 필요합니다.<br /><br /><b>주의사항:</b> 이 매개변수를 사용하려면 AFP2PDF 변환을 설치해야 합니다.",
		admin_repcfg_od_transform_xml_file_hover: " 사용자 정의 변환으로 Content Manager OnDemand 컨텐츠를 변환하려면 변환을 정의하는 데 사용하는 XML 파일의 완전한 경로를 지정하십시오. XML 파일은 웹 애플리케이션 서버에 있어야 합니다.",
		admin_repcfg_od_ssl_hover: "SSL을 사용하여 IBM Content Navigator 애플리케이션 서버와 Content Manager OnDemand 라이브러리 서버 및 오브젝트 서버 사이의 통신을 암호화하는지 여부를 지정하십시오.<br /><br /><b>중요:</b> Content Manager OnDemand에 대해 SSL을 사용할 때, 이는 IBM Content Navigator 애플리케이션 서버, 웹 서버 또는 사용자의 워크스테이션 간 통신을 포함하지 않습니다.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "웹 애플리케이션 서버에 있는 이 저장소의 키 링 데이터베이스 파일에 대한 완전한 경로를 지정하십시오. 예: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />>키 링 데이터베이스 파일에 신뢰된 루트 인증서가 들어있습니다. 강력한 파일 시스템 보호를 사용하여 이 파일에 무단 액세스를 방지해야 합니다.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "웹 애플리케이션 서버에 있는 이 저장소의 키 링 숨김 파일에 대한 완전한 경로를 지정하십시오. 예: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />키 링 숨김 파일에 키 링 데이터베이스 파일의 비밀번호가 들어있습니다. 강력한 파일 시스템 보호를 사용하여 이 파일에 무단 액세스를 방지해야 합니다.",
		admin_repcfg_od_sso_password_hover: "OnDemand 서버와의 싱글 사인온에 사용할 비밀번호를 지정하십시오.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API는 사용자 정의 특성을 지원합니다. 웹 클라이언트를 통해서 저장소에 연결할 때 사용자 정의 특성을 사용하려는 경우 사용자 정의 특성의 이름 및 값을 지정하십시오.<br /><br />지원되는 사용자 정의 특성에 대한 정보는 ODWEK 설치 디렉토리의 /api 서브디렉토리에 있는 ODWEK Java API Javadoc을 참조하십시오.",
		admin_repcfg_od_custom_properties_name_hover: "특성 이름을 입력하십시오.",
		admin_repcfg_od_custom_properties_value_hover: "특성 값을 입력하십시오.",
		admin_repcfg_od_use_sso_hover: "사용자에게 싱글 사인온을 허용할 지 여부를 지정하십시오.<br /><br /><b>중요:</b> 이 구성 매개변수가 작동하려면 Content Manager OnDemand 서버에서 싱글 사인온을 사용할 수 있어야 합니다.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "이 CMIS 소스에 GZIP 인코딩을 사용하십시오.",
		admin_repcfg_cm_use_part_file_name: "문서를 다운로드할 때 사용할 파일 이름:",
		admin_repcfg_cm_use_part_file_name_help: "사용자가 문서를 다운로드할 때 문서의 파일 이름이 어떻게 정해지는지 지정합니다.",
		admin_repcfg_cm_use_part_file_name_enable: "파일 이름 사용",
		admin_repcfg_cm_use_part_file_name_disable: "저장소의 항목 이름 사용",
		admin_repcfg_add_doc_name: "추가된 문서의 기본 이름:",
		admin_repcfg_add_doc_name_hover: "사용자는 문서를 추가하기 전에 이름을 변경할 수 있습니다.",
		admin_repcfg_add_doc_name_empty: "없음(공백)",
		admin_repcfg_add_doc_name_file_name: "선택한 파일의 파일 이름",

		admin_repcfg_compound_documents: "복합 문서 기능:",
		admin_repcfg_compound_documents_hover: "탐색과 같은 P8 복합 문서 기능을 사용으로 설정하십시오.",
		admin_repcfg_cm_action_list_config_enabled: "작업 항목 수행 목록:",
		admin_repcfg_cm_action_list_config_hover: "컨텐츠 관리자 시스템 관리 클라이언트에서 문서 라우팅을 구성할 때 사용자가 작업 항목에 대해 수행할 수 있는 조치의 목록을 지정할 수 있습니다.<br /><br />컨텐츠 관리자 서버에서 수행 목록을 사용하려면 이 옵션을 사용하십시오. 이러한 설정은 컨텍스트 메뉴 및 작업 항목에 대한 특성 편집 창에서 사용됩니다.<br /><br /><b>중요:</b> 수행 목록 내의 설정은 사용자가 컨텐츠 네비게이터 관리 도구에서 구성하는 모든 사용자 정의 메뉴를 재정의합니다. 수행 목록에 설정이 없으면 사용자가 작업 항목에 대해 어떠한 조치도 취할 수 없습니다.",

		admin_repcfg_box_share: "Box 공유",
		admin_repcfg_box_share_p8_hover: "사용자가 이 저장소에서 문서를 공유할 수 있도록 허용하십시오. 문서 공유에는 Box에 파일 복사하기, 링크 작성하기 및 이메일로 링크 발송하기가 포함됩니다.<br /><br />Box 공유를 사용하는 경우 IBM Content Navigator가 저장소에 Box 공유 데이터 모델을 작성합니다. IBM Content Navigator Box 공유 추가 기능을 설치하려면 라이브러리 서버 관리자로 저장소에 연결해야 합니다.",

		admin_menu_type_icon: "메뉴 유형 아이콘",
		admin_menu_toolbar_hover: "도구 모음",
		admin_menu_toolbar_custom_hover: "사용자 정의 도구 모음",
		admin_menu_contextMenu_hover: "컨텍스트 메뉴",
		admin_menu_contextMenu_custom_hover: "사용자 정의 컨텍스트 메뉴",

		admin_menu_contextMenu_custom_empty: "구성된 플러그인에 정의된 사용자 정의 컨텍스트 메뉴가 없습니다.",
		admin_menu_toolbar_custom_empty: "구성된 플러그인에 정의된 사용자 정의 도구 모음이 없습니다.",

		admin_file_type_category_filters: "파일 유형 필터:",
		admin_file_type_category_filters_hover_help: "사용자가 다음과 같은 경우에 사용할 수 있는 파일 유형의 목록을 지정하십시오.<ul><li>IBM Content Navigator for Microsoft Office에서 검색 또는 찾아보기를 수행할 때 결과 목록의 범위를 축소하는 경우<li>웹 클라이언트에서 IBM FileNet P8 저장소를 검색할 때 결과 목록의 범위를 축소하는 경우<li>입력 템플리트를 사용할 때 사용자가 저장소에 추가할 수 있는 파일 유형을 제한하는 경우</ul>",
		admin_file_type_only_use_in_et_folder_association: "입력 템플리트 폴더 연관에만 표시",
		admin_office_config_properties_label: "Office 특성",
		admin_office_config_type_label: "데이터 유형",
		admin_office_config_mapped_property_label: "저장소 특성",
		admin_office_config_properties_hover_help: "저장소 특성에 맵핑할 각 Microsoft Office 특성의 이름을 입력하고 추가할 수 있습니다. 모든 특성의 데이터 유형이 일치해야 합니다.",
		admin_office_config_mapped_property_hover_help: "Office 특성을 둘 이상의 저장소 특성에 맵핑하려면 새 특성 맵핑을 작성해야 합니다.",
		admin_new_property_mapping_title: "새 특성 맵핑",
		admin_property_mapping_title: "특성 맵핑 편집",
		admin_property_mapping_instruction: "저장소에 대한 특성에 맵핑할 Microsoft Office 특성을 지정하십시오. Office 특성의 데이터 유형은 저장소에 대한 특성의 데이터 유형과 일치해야 합니다. <br /><br />Office 문서에 맵핑의 특성이 둘 이상인 경우, IBM Content Navigator는 목록 내의 첫 번째 특성을 사용하여 저장소에 대한 특성을 채웁니다.",
		admin_ms_general_settings: "일반 구성:",
		admin_ms_delete_local_settings: "사용자가 다음을 수행하는 경우 로컬 파일 삭제:",
		admin_ms_outlook_options: "Outlook 통합",
		admin_ms_enable_props_mapping: "사용자가 다음을 수행하는 경우 저장소 특성에 대해 Office 특성 맵핑:",
		admin_ms_open_doc_when_checkout: "문서가 열릴 때 자동으로 문서 체크아웃",
		admin_ms_open_doc_when_checkout_hover_help: "이 옵션을 선택하면 사용자가 이전 버전의 파일을 사용하여 저장소에 대한 파일을 겹쳐쓰는 것을 방지합니다.",
		admin_ms_prompt_close_office: "Office 애플리케이션을 닫을 때 문서를 체크인하도록 프롬프트",
		admin_ms_prompt_close_office_hover_help: "이 옵션을 선택하면 사용자가 작업을 체크인하는 것을 잊지 않도록 할 수 있습니다.",
		admin_ms_add_with_entry_template_only: "템플리트와 함께 추가 조치만 표시",
		admin_ms_delete_local_on_add: "사용자가 문서를 추가할 때 로컬 파일 삭제",
		admin_ms_delete_local_on_checkin: "사용자가 문서를 체크인하거나 체크아웃을 취소할 때 로컬 파일 삭제",
		admin_ms_delete_local_on_add_hover_help: "사용자가 IBM Content Navigator for Microsoft Office에서 문서를 추가하면 사용자가 즉시 문서를 체크아웃하여 변경사항을 작성할 수 있도록 문서가 저장소에 추가되고 문서의 로컬 사본이 계속 열려 있습니다.<br /><br />문서를 저장소에 추가한 후 자동으로 문서의 로컬 사본을 닫고 삭제하려면 이 옵션을 선택하십시오.",
		admin_ms_delete_local_on_checkin_hover_help: "사용자가 IBM Content Navigator for Microsoft Office에서 문서를 체크인하면 문서가 저장소에 체크인되고 문서의 로컬 사본이 계속 열려 있습니다. 또한 체크아웃 취소 조치를 사용한 후 문서의 로컬 사본이 계속 열려 있습니다. 로컬 사본이 열려 있으면 사용자가 즉시 문서를 다시 체크아웃하여 변경사항을 작성할 수 있습니다.<br /><br />문서를 체크인하거나 체크아웃 취소 조치를 사용한 후 자동으로 문서의 로컬 사본을 닫고 삭제하려면 이 옵션을 사용하십시오.",
		admin_ms_delete_local_on_save: "문서 저장",
		admin_ms_prompt_for_props_on_add: "사용자가 이메일을 저장소에 추가할 때 특성 값을 제공하도록 프롬프트",
		admin_ms_prompt_for_props_on_add_hover_help: "이 옵션을 선택하지 않으면 웹 클라이언트가 저장소에 대해 정의된 Outlook 특성 맵핑을 사용합니다.<br /><br />이메일이 추가된 폴더와 연관된 입력 템플리트가 있는 경우, 사용자가 어떠한 특성에 대해서도 프롬프트되지 않을 수 있습니다.",
		admin_ms_delete_email_on_add: "이메일이 저장소에 추가될 때 이메일 서버에서 해당 이메일 삭제",
		admin_ms_send_email_as_link_only: "첨부 파일로 문서 송신 방지",
		admin_ms_send_email_as_link_only_hover_help: "이 옵션을 선택하면 사용자가 Outlook으로부터 문서를 링크로만 송신할 수 있습니다. 이 옵션을 사용하면 저장소에 대한 적절한 권한이 있는 사용자만이 문서를 보도록 할 수 있습니다.",
		admin_ms_enable_prop_mapping_for_add: "사용자가 문서를 추가하거나 체크인할 때 저장소 특성에 Office 특성 맵핑",
		admin_ms_checkout_document_after_add: "문서가 저장소에 추가된 후 자동으로 문서 체크아웃",
		admin_no_default_document_type_filtering: "사용자가 검색을 실행할 때 기본적으로 모든 문서 유형 리턴",
		admin_no_default_document_type_filtering_hover_help: "IBM Content Navigator for Microsoft Office에서 기본 동작은 사용자가 검색을 실행할 때 현재 애플리케이션의 문서 유형만 보는 것입니다. 예를 들어, Microsoft Word에서 검색할 때 Word 문서 유형이 기본적으로 선택되어 있습니다.<br/><br/>그러나 이 옵션을 선택하면 사용자가 검색에서 리턴한 모든 문서를 볼 수 있도록 문서 유형 선택란이 선택 취소됩니다. 사용자는 검색을 실행하기 전에 하나 이상의 문서 유형을 선택하여 이 설정을 재정의할 수 있습니다.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Microsoft Office 문서에 대해 정의된 문서 특성을 저장소에 대해 정의된 특성에 맵핑할 것인지 여부를 지정하십시오.<br /></br /><b>중요:</b> 이 기능을 사용하는 경우 사용자 환경에서 각 저장소에 대해 Office 특성을 구성해야 합니다. 저장소 특성에 Office 특성을 맵핑하지 않으면 이 기능이 작동하지 않습니다.<br /><br />이 설정은 Microsoft Outlook에 적용되지 않습니다.",
		admin_ms_checkout_document_after_add_hover_help: "문서가 저장소에 추가된 후 사용자가 문서에 대해 작업하기 위해 수행해야 하는 단계 수를 줄이려면 이 옵션을 선택하십시오.<br /></br /><b>팁:</b> 사용자가 파일을 다시 저장소로 체크인하는지 확인하려면 <b>Office 애플리케이션을 닫을 때 문서를 체크인하도록 프롬프트</b>를 선택하십시오.",
		admin_ms_show_details_recently_used: "<b>최근 사용된 항목</b>의 세부사항 표시",
		admin_ms_show_details_recently_used_hover_help: "기본적으로 최근 사용된 항목의 목록을 확인할 때 항목에 대한 세부사항은 더 많은 항목을 표시하도록 숨겨져 있습니다. 이 옵션을 선택하면 최근 사용된 항목 목록에서 세부사항이 기본적으로 세부사항 분할창의 첫 번째 문서에 대해 표시됩니다.",
		admin_ms_show_no_permissions_warning: "사용자가 특성을 편집하거나 문서를 체크인하지만 문서 입력 템플리트를 볼 수 있는 권한이 없는 경우 경고 표시",
		admin_ms_show_no_permissions_warning_hover_help: "입력 템플리트를 사용하여 저장소에 문서가 작성되었지만 사용자에게 문서 입력 템플리트를 볼 수 있는 권한이 없으면 입력 템플리트가 검색되지 않습니다.<br /><br/>이 경우 사용자가 문서 특성을 편집할 때 입력 템플리트를 사용하지 않고 특성이 표시됩니다. 또한 사용자가 문서를 체크인할 때 입력 템플리트를 사용하지 않고 문서가 체크인됩니다.<br /><br />기본적으로 이러한 조치는 사용자에게 입력 템플리트가 사용되지 않음을 알리지 않고 발생합니다. 경고는 로그 파일에만 로그됩니다.<br /><br />입력 템플리트가 사용되지 않는 경우 즉시 사용자에게 알리는 경고를 표시하려면 이 옵션을 선택하십시오.",
		admin_ms_hide_search_actions: "검색 필터 섹션 접기",
		admin_ms_hide_search_actions_hover_help: "기본적으로 사용자는 조치, 사용자 또는 사용자 그룹을 지정하기 위한 조치 필터를 적용하고 조치가 발생된 날짜 또는 날짜 범위를 선택할 수 있습니다. 예를 들어, 지난 달에 추가한 문서만 검색할 수 있습니다.<br /><br />사용자가 조치 필터를 적용하도록 허용하지 않으려면 이 옵션을 선택하여 조치 필터를 숨기고 검색 기준 정의 시 표시되는 필드의 수를 줄이십시오.",
		admin_ms_hide_save_document: "리본 표시줄에서 <b>저장</b> 옵션 숨기기",
		admin_ms_hide_save_document_hover_help: "<b>저장</b> 옵션을 사용하여 문서를 체크인하지 않고 문서 변경사항을 저장소에 저장할 수 있습니다.",
		admin_ms_indicate_managed_email_on_add: "저장소에 이메일이 이미 추가되었는지 여부 표시",
		admin_ms_indicate_managed_email_on_add_hover_help: "이 옵션을 선택하면 사용자는 저장소에 이메일이 이미 있는지 확인할 수 있으므로 이메일이 저장소에 추가되는 횟수를 줄일 수 있습니다. 이 옵션을 선택하면 IBM ECM이라는 새 색상 카테고리가 Microsoft Outlook에서 작성됩니다. 저장소에 추가되는 이메일은 IBM ECM에서 관리 카테고리에 자동으로 추가됩니다.",
		admin_ms_edit_group_add_command_configuration: "편집 그룹의 추가 옵션:",
		admin_ms_edit_group_add_command_configuration_hover_help: "리본 표시줄의 <b>편집</b> 그룹에서 사용 가능한 <b>추가</b> 옵션을 지정하십시오.<ul><li>추가 단추 및 편집 그룹에서 사용 가능한 모든 추가 조치를 표시하려면 <b>모든 추가 옵션 표시</b>를 선택하십시오.</li><li>사용자가 저장소에 문서를 추가하는 것을 방지하거나 사용자가 팀 작업영역에서만 문서를 추가하도록 하려면 <b>모든 추가 옵션 숨기기</b>를 선택하십시오.</li><li>입력 템플리트 폴더 연관을 적용하고 사용자의 다른 입력 템플리트 선택을 방지하려면 <b>템플리트와 함께 추가 조치 숨기기</b>를 선택하십시오.</li><li>입력 템플리트를 사용하여 문서를 추가하도록 사용자에게 요청하려면 <b>템플리트와 함께 추가 조치만 표시</b>를 선택하십시오.</li></ul>",
		admin_ms_show_edit_group_add_button: "모든 추가 옵션 표시(기본값)",
		admin_ms_hide_edit_group_add_button: "모든 추가 옵션 숨기기",
		admin_ms_hide_add_with_entry_template: "템플리트와 함께 추가 조치 숨기기",
		admin_ms_managed_in_ecm: "IBM ECM에서 관리",
		admin_ms_managed_in_ecm_hover_help: "Microsoft Outlook의 카테고리를 표시하는 경우 IBM Content Manager 또는 IBM FileNet Content Manager 저장소에 추가된 이메일에 대해 이 레이블이 표시됩니다.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "IBM ECM에서 관리 카테고리 이름에는 쉼표(,) 또는 세미콜론(;)을 사용할 수 없습니다.",
		admin_delete_open_docs_after_close: "사용자가 문서를 닫으면 열린 문서 자동 삭제",
		admin_admin_delete_open_docs_after_close_hover_help: "사용자가 IBM Content Navigator for Microsoft Office에서 문서를 열면 사용자의 문서 디렉토리 또는 데스크탑의 파일 추적 설정에 지정된 위치로 문서가 다운로드됩니다.<br><br>사용자가 문서를 닫을 때 열려 있지만 체크아웃되지 않은 파일을 삭제하려면 이 옵션을 선택하십시오. 이 옵션을 선택하면 다음 작업이 가능합니다.<ul><li>IT 정책 준수 적용</li><li>사용자가 최신 버전의 문서에서 작업 가능</li><li>문서를 저장하는 데 사용되는 디스크 공간량 축소</li><ul>",
		admin_ms_custom_command_configuration: "사용자 정의 명령:",
		admin_ms_custom_command_configuration_hover_help: "Microsoft Office 애플리케이션에서 IBM Content Navigator for Microsoft Office 도구 모음에 최대 네 개의 명령을 추가할 수 있습니다. 이러한 명령을 사용하여 URL을 열 수 있습니다. 예를 들어, 사용자 및 그룹을 검색하는 데 사용할 수 있는 서비스를 여는 명령을 추가할 수 있습니다.",
		admin_ms_custom_command_dialog_title: "사용자 정의 명령 편집",
		admin_ms_custom_command_dialog_intro_text: "Microsoft Office 애플리케이션의 IBM Content Navigator for Microsoft Office 도구 모음에서 URL을 여는 데 사용할 수 있는 명령을 정의하십시오.",
		admin_ms_custom_command_id: "명령 ${0}",
		admin_ms_custom_command_available_label: "사용 가능",
		admin_ms_custom_command_available_hover_help: "명령에 대해 정의된 URL을 유지보수를 위해 오프라인으로 전환해야 하는 경우 명령이 Microsoft Office에 표시되지 않도록 명령의 선택란을 선택 취소할 수 있습니다.<br/><br/><b>중요:</b> IBM Content Navigator for Microsoft Office에서 변경사항을 반영하기 위해 사용자가 데스크탑에서 로그아웃해야 합니다.",
		admin_ms_custom_command_command_id_label: "명령 ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "레이블",
		admin_ms_custom_command_label_hover_help: "Microsoft Office에서 명령에 대해 표시할 레이블을 지정하십시오.",
		admin_ms_custom_command_description_label: "설명",
		admin_ms_custom_command_description_hover_help: "Microsoft Office에서 명령에 대해 표시할 설명을 지정하십시오.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "완전한 URL을 지정하여 Microsoft Office에서 열 수 있습니다. URL은 웹 페이지 또는 서비스가 될 수 있습니다.",
		admin_ms_custom_command_icon_label: "아이콘",
		admin_ms_custom_command_icon_hover_help: "표시할 아이콘의 파일 이름(예: CommandIcon.png)을 지정하십시오.<br/><br/><b>중요:</b> 각 클라이언트 시스템에서 IBM Content Navigator for Microsoft Office 설치 디렉토리의 Plugins 서브디렉토리에 아이콘 파일을 추가해야 합니다.<br/><br/>아이콘 파일이 Plugins 디렉토리에 없거나 아이콘을 지정하지 않은 경우 기본 아이콘 customButtonIcon_38.gif가 표시됩니다.",
		admin_ms_custom_command_group_name: "그룹 레이블:",
		admin_ms_custom_command_group_name_hover_help: "리본 표시줄에서 사용자 정의 명령 아래에 표시할 그룹 레이블을 지정할 수 있습니다.<br/><br/>레이블을 지정하지 않은 경우 그룹 레이블은 <b>사용자 정의 명령</b>입니다.",
		admin_ms_ribbon_tab_label: "IBM ECM 탭 레이블:",
		admin_ms_ribbon_tab_hover_help: "Microsoft Office 리본 표시줄에서 IBM Content Navigator for Microsoft Office 탭에 대해 표시할 이름을 입력하십시오. 이름을 지정하지 않으면 탭의 이름은 \“IBM ECM\"으로 지정됩니다.",
		admin_ms_close_task_pane_on_open: "사용자가 문서를 열면 태스크 분할창 닫기",
		admin_ms_close_task_pane_on_open_hover_help: "사용자가 Microsoft Office에서 문서를 볼 수 있는 공간을 최대화하려면 이 옵션을 선택하십시오.<br/><br/>Microsoft Office 2010 사용자: 모든 문서의 태스크 분할창이 닫혔는지 확인하려면 <b>옵션</b> &gt; <b>고급</b>을 클릭하여 MDI(Multiple Document Interface) 모드를 사용으로 설정하고 <b>태스크 표시줄에 모든 창 표시</b> 옵션을 선택 취소하십시오.",
		admin_ms_open_document_options: "문서 열기 옵션:",
		admin_ms_delete_local_file_options: "로컬 파일 삭제 옵션:",
		admin_ms_add_and_checkin_options: "추가 및 체크인 옵션:",
		admin_ms_search_options: "검색 옵션:",
		admin_ms_display_options: "표시 옵션:",
		admin_ms_bidirection_enable_label: "양방향 텍스트 지원 사용",
		admin_ms_bidirection_enable_hover_help: "사용자가 IBM Content Navigator for Microsoft Office에서 왼쪽에서 오른쪽이 아닌 방향으로 텍스트를 입력하거나 볼 수 있도록 하려면 이 옵션을 선택하십시오.",
		admin_ms_text_direction_label: "컨텐츠의 기본 텍스트 방향:",
		admin_ms_text_direction_hover_help: "IBM Content Navigator for Microsoft Office에서 텍스트가 입력 필드에 입력되는 방향을 지정하십시오. 이 설정은 항목(예: 폴더 이름 또는 특성 값)이 표시되는 방법도 제어합니다.",
		admin_ms_control_threshold_label: "미리보기를 사용할 항목의 최소 수:",
		admin_ms_control_threshold_hover_help: "기본적으로 드롭 다운 목록에서 사전 정의된 값이 포함된 특성 검색 또는 설정을 위해 항목 수가 50보다 크거나 같을 때 미리보기가 사용 가능합니다. 최소값을 변경할 수 있습니다.",

		admin_ms_default_email_class: "이메일 추가 시 사용할 클래스",
		admin_ms_default_email_class_hover_help: "Microsoft Outlook에서 이 저장소에 추가되는 이메일이 지정된 클래스에 추가됩니다. 사용자는 클래스를 변경할 수 없습니다.",
		admin_ms_default_folder_class: "폴더 작성 시 사용할 클래스",
		admin_ms_default_folder_class_hover_help: "Microsoft Office 애플리케이션에서 이 저장소에 작성된 폴더가 지정된 클래스에 추가됩니다. 사용자는 클래스를 변경할 수 없습니다.",
		admin_ms_default_folder_warn_title: "폴더를 작성할 때 사용할 클래스로 ${0} 클래스를 사용할 수 없습니다.",
		admin_ms_default_folder_warn_name_prop_invalid: "클래스의 이름 특성은 문자열이 아니며 폴더의 이름이 문자열이어야 합니다.<br />다른 클래스를 선택하여 폴더를 작성할 때 사용하거나 IBM Content Manager 관리자로 작업하여 클래스의 이름 특성을 문자열로 변경하십시오.",
		admin_ms_default_folder_warn_req_props: "클래스에는 값이 없는 필수 특성이 포함되어 있습니다. 그러나, 사용자는 IBM Content Navigator for Microsoft Office에서 폴더를 작성할 때 필수 특성에 대한 값을 지정할 수 없습니다.<br />다른 클래스를 선택하여 폴더를 작성할 때 사용하거나 IBM Content Manager 관리자로 작업하여 필수 특성을 선택적으로 변경하거나 값이 포함된 필수 특성을 미리 입력하십시오.",
		admin_ms_delimiter_for_office_properties: "다중 값 문자열 특성에 대한 구분 기호",
		admin_ms_delimiter_for_office_properties_hover_help: "다중 값 문자열 특성에 맵핑하는 문자열 특성의 구분 기호로 사용할 문자를 지정하십시오. 기본적으로 값을 구분하는 구분 기호로 세미콜론(;)을 사용하여 다중 값 문자열 특성에 값 세트를 지정할 수 있습니다. 그러나 문자열 값 중 하나에 세미콜론이 포함된 경우 구분 기호가 다른 문자로 변경되지 않는 한 해당 문자열 값을 추가할 수 없습니다. 예를 들어, 쉼표(,)로 구분 기호를 변경할 수 있습니다.",
		admin_ms_outlookPropertyRemembrance : "메시지 및 첨부 파일 추가 시 설정 기억",
		admin_ms_outlookPropertyRemembrance_hover_help : "메시지 및 첨부 파일에 지정된 특성 값, 위치, 클래스 선택 및 보안이 기억되고 차후 항목이 추가될 때 기본 설정으로 사용됩니다.",

		admin_file_type_name_hover_help: "이름 풍선 도움말",
		admin_file_type_description_hover_help: "설명 풍선 도움말",
		admin_file_type_dialog_title: "파일 유형 필터 편집",
		admin_new_file_type_dialog_title: "새 파일 유형 필터",
		admin_mobile_feature_dialog_title: "기능",
		admin_mobile_feature_dialog_new_title: "새 기능",
		admin_file_type_instructions: "사용자가 검색 결과 목록을 줄이기 위해 사용할 수 있는 필터를 작성하십시오. 다중 MIME 유형을 필터에 맵핑할 수 있습니다.",
		admin_file_type_filter_place_holder: "MIME 유형 필터",
		admin_new_button_label: "새로 작성",
		admin_edit_button_label: "편집",
		admin_delete_button_label: "삭제",
		admin_copy_button_label: "복사",
		admin_verify_button_label: "검증",
		admin_availabe_filters_label: "사용 가능한 필터",
		admin_selected_filters_label: "선택된 필터",

		admin_mobile_access: "모바일 애플리케이션 액세스:",
		admin_mobile_access_hover_help: "모바일 디바이스에서 IBM Content Navigator를 사용하려면 사용자가 모바일 애플리케이션에서 이 데스크탑에 액세스할 수 있도록 허용할 것을 권장합니다.<br /><br />모바일 애플리케이션에서 이 데스크탑에 액세스할 수 없도록 설정하는 경우에도 사용자는 여전히 자신의 모바일 브라우저에서 웹 클라이언트에 액세스할 수 있습니다. 그러나 웹 클라이언트는 모바일 디바이스에서 액세스되도록 설계되지는 않습니다.",

		admin_mobile_access_allow_label: "사용자에게 다음 작업 허용:",
		admin_mobile_allow_add_photos: "카메라 및 사진 라이브러리로부터 사진 추가",
		admin_mobile_allow_add_docs: "저장소에 문서 추가 및 폴더 작성",
		admin_mobile_allow_open_docs: "다른 애플리케이션에서 문서 열기",
		admin_mobile_allow_add_docs_hover_help: "사용자는 폴더를 작성하거나 기타 모바일 애플리케이션으로부터 문서(예: 이메일에 첨부된 문서)를 추가할 수 있습니다.",
		admin_mobile_allow_open_docs_hover_help: "선택된 문서를 보는 데 사용할 애플리케이션을 선택하도록 프롬프트됩니다. 하나의 애플리케이션만 사용 가능한 경우, 해당 애플리케이션이 사용됩니다.",
		admin_mobile_features: "기능:",
		admin_mobile_features_hover_help: "IBM Content Navigator 모바일 애플리케이션에서 이 데스크탑의 어떤 기능을 표시할지 지정하십시오.",
		admin_mobile_new_feature_button_label: "새 기능",
		admin_mobile_move_up_button_label: "위로 이동",
		admin_mobile_move_down_button_label: "아래로 이동",
		admin_desktop_mobile_instructions: "모바일 설정 지시사항이 여기에 들어갑니다.",
		admin_desktop_max_number_of_docs_to_add: "추가할 최대 문서 수:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "사용자가 한 번에 추가할 수 있는 최대 문서 수를 지정하십시오. 기본 최대값은 50입니다. 그러나 최대 300까지 설정할 수 있습니다.",
		admin_desktop_max_number_of_docs_to_modify: "수정할 최대 항목 수:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "사용자가 한 번에 수정할 수 있는 최대 항목 수를 지정하십시오. 기본 최대값은 50입니다. 그러나 최대 300까지 설정할 수 있습니다.",
		admin_desktop_max_conversion_size: "PDF 변환을 위한 최대 데이터 크기(MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>제한사항:</b> IBM Content Manager OnDemand에서는 이 설정이 지원되지 않습니다.<br/><br/>PDF로 변환할 수 있는 최대 데이터 크기를 지정하십시오. 이 한계는 항목을 PDF 파일로 다운로드하거나 항목을 이메일을 통해 PDF 파일로 발송할 때 적용됩니다.<br /><br />각 문서의 크기를 판별할 수 없는 경우에도 문서가 여전히 PDF로 변환됩니다.<br/><br/>기본 한계는 200MB입니다. 한계를 200MB 이상으로 설정하면 시스템 성능에 영향을 미칠 수 있습니다.",
		admin_desktop_timeProperties: "시간소인:",
		admin_desktop_time_properties_hover_help: "<b>IBM FileNet P8 사용자만 해당:</b> 이 설정은 사용자 정의 특성에 적용되고 시스템 특성에는 적용되지 않습니다. 예를 들어 <b>시간소인의 날짜 부분만 표시</b>을 선택하는 경우 수정자 특성은 시간소인의 시간 부분을 여전히 표시합니다.<br/><br/>이 설정은 저장소의 시간소인을 변경하지 않습니다.",
		admin_desktop_disable_time_stamp: "전체 시간소인 표시",
		admin_desktop_enable_time_stamp: "시간소인의 날짜 부분만 표시",
		admin_desktop_timezone: "시간대:",
		admin_desktop_timezone_localuser: "사용자의 로컬 시간대 표시",
		admin_desktop_timezone_alluser: "모든 사용자에 동일한 시간대 표시",
		admin_desktop_timezone_hover_help: "사용자가 각자의 로컬 시간대를 기반으로 한 시간대를 볼지 또는 모든 사용자가 같은 시간대를 볼지 여부를 지정할 수 있습니다.<br/><br/>이 설정은 저장소의 시간소인을 변경하지 않습니다. 그러나 선택한 설정은 사용자가 항목을 추가하거나 수정할 때 저장소에서 시간소인을 작성하는 데 사용되는 시간대를 판별합니다.",
		admin_desktop_mobile_feature_display_label: "표시",
		admin_desktop_mobile_feature_icon_file_label: "아이콘 파일",
		admin_mobile_feature_dialog_icon_file_label: "아이콘 파일:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "이름",
		admin_desktop_mobile_select_feature_label: "기능 선택",
		admin_desktop_mobile_feature_icon_label: "기능 아이콘",
		admin_desktop_share_admin_none: "관리자가 설정되지 않았습니다.",
		admin_desktop_share_admin_edit_label: "관리자 설정...",
		admin_browse_icon: "찾아보기 아이콘",
		admin_search_icon: "검색 아이콘",
		admin_favorites_icon: "즐겨찾기 아이콘",
		admin_casesearch_icon: "케이스 아이콘",
		admin_datacap_icon: "데이터캡 아이콘",
		admin_system_defined: "시스템 정의",
		admin_icon_file_placeholder_text: "파일 위치(예: http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "루트",
		admin_folder_default: "기본값",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "도구 모음",
		admin_menu_context_menus: "컨텍스트 메뉴",
		admin_menu_office_toolbars: "Microsoft Office 리본 표시줄 명령",
		admin_menu_office_menus: "Microsoft Office 컨텍스트 메뉴",

		admin_file_name_label: "파일 이름:",
		admin_exportconfiguration_security_label: "이 데스크탑을 사용하도록 권한이 부여된 사용자 및 그룹 포함",
		admin_exportconfiguration_instruction: "선택된 데스크탑과 연관된 저장소 구성 및 플러그인 구성을 포함하여 사용자의 데스크탑을 IBM Content Navigator의 또 다른 인스턴스로 가져올 수 있는 파일에 내보낼 수 있습니다.",
		admin_exportconfiguration_dialog_label: "데스크탑 내보내기",
		admin_exportconfiguration_button_label: "내보내기",
		admin_dialog_select_all: "모두 선택",
		admin_dialog_deselect_all: "모두 지우기",

		admin_importconfiguration_instruction: "선택된 구성 파일 내의 항목을 이 시스템으로 가져옵니다. 단, ID가 동일한 항목이 이미 시스템에 있는 경우에는 해당 항목을 유지할 것인지 겹쳐쓸 것인지 결정해야 합니다.",
		admin_importconfiguration_dialog_label: "데스크탑 가져오기",
		admin_importconfiguration_reason_dialog_label: "교정 이유 가져오기",
		admin_importconfiguration_button_label: "가져오기",
		admin_to_be_imported: "가져올 구성 항목",
		admin_on_target_system: "대상 시스템의 기존 항목",
		admin_import_short_warning_message: "다음 항목이 이미 이 시스템에 있습니다. 이 시스템에서 바꿀 항목을 선택하십시오.",
		admin_import_warning_message: "다음 구성 항목의 ID는 대상 시스템에 있는 항목과 동일합니다. 가져와서 대상 시스템에서 겹쳐쓰려는 항목만 선택하십시오.<br /><br />구성 항목을 겹쳐쓰지 않으려면 데스크탑을 내보낸 소스인 인스턴스의 항목 사본을 작성하여 다른 ID를 지정하고 데스크탑과 연관시키십시오. 다시 데스크탑을 내보낸 후 이 인스턴스의 데스크탑을 가져오십시오.",
		admin_choose_file_to_import_label: "가져올 파일 선택",
		admin_download_imported_log: "보고서 다운로드",
		admin_desktop_import_summary: "데스크탑 가져오기 요약",
		admin_reason_import_summary: "교정 이유 가져오기 요약",
		admin_rba_import_summary: "관리 역할 가져오기 요약",
		admin_import_open_tabs_checking: "데스크탑을 가져오기 전에 관리 도구에서 <bold>데스크탑</bold> 탭이 아닌 다른 모든 탭을 닫아야 합니다.",
		admin_import_no_conflict: "다음 항목을 가져옵니다.",
		admin_desktop_invalid: "유효하지 않은 데스크탑",
		admin_desktop_warning: "경고를 표시하며 데스크톱이 저장되었습니다.",
		admin_repos_warning: "경고를 표시하며 저장소가 저장되었습니다.",
		admin_config_type_icon: "구성 항목 유형 아이콘",

		admin_approval_workflow: "승인 워크플로우",
		admin_approval_workflow_hover: "사용자가 사전 정의된 승인 워크플로우를 실행하도록 합니다. 등록에서 정의하는 사용자 정의 승인 워크플로우를 실행할 수 있는 승인 워크플로우를 사용 안함으로 설정할 수 있습니다. 기본적으로 승인 워크플로우는 사용 가능으로 설정됩니다.<br><br><b>중요:</b> 승인 워크플로우를 사용으로 설정하면, 사전 정의된 워크플로우 정의(ICNParallelDocumentApproval.pep 및 ICNSequentialDocumentApproval.pep) 중 하나 또는 모두가 저장소에 추가되고 Content Process Engine으로 전송되었는지도 확인해야 합니다.",

		admin_cannot_add_desktop_members_error: "이 데스크탑에 액세스하는 사용자와 그룹을 지정할 수 없습니다.",
		admin_cannot_add_desktop_members_error_explanation: "사용자 및 그룹 정보를 검색할 수 있는 올바른 권한이 없습니다.",
		admin_cannot_add_desktop_members_error_userResponse: "다른 사용자 이름으로 로그인하거나 IBM Content Manager 시스템 관리자에게 사용자 및 그룹 정보를 검색하는 데 필요한 UserACLOwner 권한을 부여하도록 요청하십시오.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "사용자 및 그룹을 선택할 수 없습니다.",
		admin_cannot_select_users_groups_error_explanation: "사용자 및 그룹 정보를 검색할 수 있는 올바른 권한이 없습니다.",
		admin_cannot_select_users_groups_error_userResponse: "다른 사용자 이름으로 로그인하거나 IBM Content Manager 시스템 관리자에게 사용자 및 그룹 정보를 검색하는 데 필요한 UserACLOwner 권한을 부여하도록 요청하십시오.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2 클라이언트를 찾을 수 없습니다.",
		oauth_client_not_found_error_explanation: "클라이언트 ID ${0}을(를) 찾을 수 없습니다.",
		oauth_client_not_found_error_userResponse: "시스템 관리자에게 문의하여 OAuth2 클라이언트 ID를 찾을 수 없음을 알리십시오.",
		oauth_client_not_found_error_adminResponse: "저장소 구성을 검토하고 올바른 OAuth2 클라이언트 ID가 포함되어 있는지 확인하십시오.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "저장소 로그인이 실패했습니다.",
		oauth_login_failed_error_explanation: "저장소 ${0}에 로그인하는 데 실패했습니다.",
		oauth_login_failed_error_userResponse: "사용자 ID와 비밀번호가 올바른지 확인하고 다시 로그인을 시도하십시오.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "${0}에 로그인을 시도하는 중 오류가 발생했습니다.",
		oauth_error_return_error_explanation: "${0} 권한 부여 시도에 실패했습니다.",
		oauth_error_return_error_userResponse: "다음 정보로 시스템 관리자에게 문의하십시오. ${0} 권한 부여 시도가 실패하고 다음 오류 메시지가 리턴되었습니다. <br>${1}<br><b>오류:</b> ${2}.<br><b>설명:</b> ${3}.",
		oauth_error_return_error_adminResponse: "오류에 대한 자세한 정보는 웹 애플리케이션 서버 로그 파일에 있습니다. 로그 파일에 대한 자세한 정보는 IBM Knowledge Center에서 &quot;IBM Content Navigator 로그 파일&quot;을 참조하십시오. ${0} 권한 부여 시도에 대한 정보를 사용하여 문제를 수정하고 OAuth2가 사용 가능한지 확인하십시오.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth 대상 애플리케이션",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "오류",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "인식되지 않은 OAuth 오류 메시지입니다.",

		delete_share_permission_error: "공유가 삭제되었습니다.",
		delete_share_permission_error_explanation: "공유를 삭제할 수 있는 적절한 권한이 없습니다.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "이 항목을 공유할 수 없습니다.",
		class_not_support_share_error_explanation: "공유를 지원하도록 ${0} 클래스가 설정되지 않았습니다.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "이 항목을 공유할 수 없습니다.",
		rbr_not_support_share_error_explanation: "민감한 컨텐츠가 항목에 추가되었습니다.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "사용자가 로그인하려는 디바이스는 사용자 계정에 액세스할 수 있는 권한이 없습니다.",
		box_oauth_error_invalid_request: "요청에 필수 매개변수가 누락되고 유효하지 않은 매개변수 값이 포함되고 매개변수가 두 번 이상 포함되거나 형식이 잘못되었습니다.",
		box_oauth_error_unsupported_response_type: "권한 부여 서버는 이 방법을 사용하여 권한 부여 코드를 가져오는 것을 지원하지 않습니다. 요청에서 코드 매개변수의 값을 확인하십시오.",
		box_oauth_error_access_denied: "자원 소유자 또는 권한 부여 서버가 요청을 거부했습니다.",
		box_oauth_error_temporarily_unavailable: "디바이스 등급이 제한되고 있어 권한 부여 요청을 줄이거나 잠시 대기해야 합니다.",
		box_oauth_error_unknown: "인식되지 않은 Box 오류 메시지입니다.",

		admin_default_search_type: "기본 검색 유형",
		admin_default_search_type_hover: "<b>검색 옵션</b> 메뉴의 <b>검색 대상</b> 필드에서 기본적으로 선택되는 옵션을 지정하십시오.",
		admin_default_search_type_documents: "문서",
		admin_default_search_type_folders: "폴더",
		admin_default_search_type_folders_and_documents: "문서 및 폴더",

		admin_restricted_search_type: "검색 허용",
		admin_restricted_search_type_hover: "기본적으로 사용자는 문서 및 폴더 모두를 검색할 수 있습니다. 옵션에서 검색을 숨기고 문서에 대한 검색을 제한하려는 경우에만 문서를 선택하고 폴더를 선택 취소하십시오.</br>,</br> 문서 및 폴더 모두에서 검색을 허용하는 경우 검색 분할창이 열리면 표시할 기본 옵션을 선택하십시오.",
		admin_restricted_search_type_documents: "문서",
		admin_restricted_search_type_folders: "폴더",
		admin_restricted_search_type_folders_and_documents: "문서 및 폴더",

		admin_default_search_version: "기본 검색 버전",
		admin_default_search_version_hover: "<b>검색 옵션</b> 메뉴의 <b>버전</b> 필드에서 기본적으로 선택되는 옵션을 지정하십시오.",

		admin_all_classes_search: "모든 클래스 검색",
		admin_all_classes_search_hover: "사용자가 모든 클래스를 검색하는 것에 허락되었다면 지정하십시오. 그리고 필요하다면 문서 검색에 들어갈 것을 지정하십시오",
		admin_all_classes_search_removed_hover: "Navigator 애플리케이션 web.xml의 컨텍스트 매개변수 allPseudoClassHidden parameter 이 참으로 지정되지 않아 모든 클래스 검색을 위한 옵션 사용이 불가능합니다.",
		admin_all_classes_search_hide: "모든 클래스 검색을 하려면 선택사항을 제거",
		admin_all_classes_search_documents_only_documents: "문서 검색은 문서, 저장된 검색 및 입력 템플리트만 포함",
		admin_all_classes_search_documents_non_folders: "문서 검색은 폴더가 아닌 항목 포함",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "트리 보기:",
		admin_feature_config_tree_view_hoverhelp: "사용자가 찾아보기 분할창을 통해 저장소의 폴더 목록에 액세스할 수 있는지 여부를 지정하십시오. 찾아보기 분할창을 숨기는 경우 사용자는 컨텐츠 목록을 사용하여 저장소에서 폴더를 탐색해야 합니다.",
		admin_feature_config_selected_repositories_label: "저장소:",
		admin_feature_config_selected_repositories_hoverhelp: "이 기능에서 사용자가 액세스할 수 있는 저장소를 선택하십시오.",
		admin_feature_config_selected_repositories_select_state_hdr: "저장소 선택",
		admin_feature_config_selected_repositories_name_hdr: "저장소 이름",
		admin_feature_config_selected_repositories_show_hdr: "표시",
		admin_feature_config_invalid_icon_title: "기능에 일부 필수 설정이 누락됨",
		admin_feature_config_view_select_hdr: "보기 선택",
		admin_feature_config_view_hdr: "보기",
		admin_feature_config_view: "보기",
		admin_feature_config_views: "보기:",
		admin_feature_config_views_hoverhelp: "사용자가 컨텐츠 목록에 적용할 수 있는 보기를 지정하십시오. 이 보기는 나열된 순서대로 표시됩니다. 첫 번째로 선택된 보기는 기능의 기본 보기입니다.<br><br><b>중요사항:</b> 슬라이드 보기를 사용하는 경우에는 문서 미리 보기를 볼 수 있도록 HTML 변환 뷰어를 구성해야 합니다.",

		admin_custom_dialog_name: "이름:",
		admin_custom_dialog_value: "값:",
		admin_custom_setting_name_hover: "구성에 추가할 Daeja ViewONE 설정의 이름을 입력하십시오. 구성 설정에 대한 자세한 정보는 Daeja ViewONE 문서를 참조하십시오.",
		admin_custom_setting_value_hover: "Daeja ViewONE 구성 설정에 사용할 값을 입력하십시오. 구성 설정에 유효한 값에 대한 자세한 정보는 Daeja ViewONE 문서를 참조하십시오.",

		entry_template_name_required_message: "입력 템플리트 설정의 이름 필드는 필수 필드입니다.",
		entry_template_name_invalid_message: "입력 템플리트 설정의 이름 필드에 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",
		entry_template_save_in_member_empty_message: "입력 템플리트 설정의 공유 대상 필드에 대해 특정 사용자 및 그룹이 선택된 경우 하나 이상의 사용자 또는 그룹을 지정해야 합니다.",
		entry_template_no_permission_to_save_to_teamspace_message: "입력 템플리트 설정의 저장 위치에서 선택된 팀 작업영역(${0})에 입력 템플리트를 추가할 수 있는 권한이 없습니다.",
		entry_template_save_in_destination_required_message: "<b>항목 스토리지 위치 설정</b> 섹션에서 기본 저장 위치를 지정해야 합니다.",
		entry_template_save_in_destination_must_select_folder: "<b>저장 위치</b> 필드를 숨기고 사용자가 폴더에 새 항목을 추가해야 하는 경우 <b>항목 스토리지 위치</b> 섹션의 <b>기본 저장 위치</b> 필드에서 폴더를 선택해야 합니다.",
		entry_template_what_to_save_required_message: "옵션 설정에서 저장할 내용에 대한 하나 이상의 선택사항을 선택하십시오.",
		entry_template_custom_workflow_empty_message: "<b>사용자 정의 워크플로우...</b>를 선택하는 경우에는 사용할 워크플로우를 검색하고 선택해야 합니다.",

		entry_template_new: "새 입력 템플리트",
		entry_template_name_hover: "입력 템플리트 이름에는 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",
		entry_template_name_invalid: "입력 템플리트 이름에는 * \\ / : ? \" < > | 문자를 사용할 수 없습니다.",
		entry_template_description_hover: "사용자가 이 입력 템플리트와 기타 입력 템플리트를 구별할 수 있도록 하는 설명을 제공하십시오.",
		entry_tempalte_save_in_hover: "입력 템플리트를 저장할 위치를 지정하십시오.<br><br><b>제한사항:</b> 입력 템플리트를 팀 작업영역에 저장하는 경우에는 입력 템플리트를 팀 작업영역 내에서만 사용할 수 있습니다.",
		entry_template_inherit_hover: "이 옵션을 선택하는 경우, 상위 폴더의 보안 설정이 입력 템플리트가 공유되는 사용자 및 그룹의 목록에 추가됩니다.",
		entry_template_builder_aria_label: "입력 템플리트 빌더",
		entry_template_builder_layout_aria_label: "입력 템플리트 특성 빌더",

		entry_template_settings_document: "입력 템플리트 정의",
		entry_template_settings_folder: "항목 스토리지 위치 설정",
		entry_template_settings_folder_intro: "이 입력 템플리트를 사용하여 추가된 항목이 저장되는 위치를 지정하십시오.",
		entry_template_settings_properties: "항목 특성 설정",
		entry_template_settings_properties_intro: "이 입력 템플리트를 사용하여 추가된 항목에 대해 기본 또는 사전 정의된 값을 지정할 수 있습니다. 또한 표시되는 특성 및 해당 특성이 표시되는 순서를 제어할 수 있도록 특성의 레이아웃을 변경할 수 있습니다.",
		entry_template_settings_workflow: "항목의 워크플로우 구성",
		entty_template_settings_workflow_intro: "이 입력 템플리트를 사용하여 항목이 추가될 때 워크플로우가 실행되는지 여부를 지정할 수 있습니다.",
		entry_template_settings_security: "항목 보안 설정",
		entry_template_settings_security_intro: "이 입력 템플리트를 사용하여 추가된 항목에 대해 기본 또는 사전 정의된 보안을 지정할 수 있습니다. 적합한 권한이 있는 사용자는 추가된 이후에 항목의 보안을 변경할 수 있습니다.",
		entry_template_settings_options: "항목의 옵션 설정",
		entry_template_xt_warning: "이 입력 템플리트에 대한 변경사항을 저장하면 입력 템플리트가 Workplace XT 입력 템플리트에서 IBM Content Navigator 입력 템플리트로 변환됩니다. IBM Workplace XT는 IBM Content Navigator 입력 템플리트를 지원하지 않습니다.",

		entry_template_properties_edit_layout: "레이아웃 편집...",
		entry_template_properties_read_only: "읽기 전용",
		entry_template_properties_hidden: "숨김",

		entry_template_destination_show: "<b>저장 위치</b> 필드 표시",
		entry_template_destination_show_hover: "<b>저장 위치</b> 필드를 표시하는 경우에는 사용자가 항목이 저장되는 위치를 변경할 수 있습니다.",
		entry_template_destination_hide: "<b>저장 위치</b> 필드 숨기기",
		entry_template_destination_hide_hover: "<b>저장 위치</b> 필드를 숨기는 경우에는 사용자가 항목이 저장되는 위치를 변경할 수 없습니다.",
		entry_template_folder_save_in_default: "기본 <b>저장 위치</b>:",
		entry_template_folder_save_in_default_hover: "이 입력 템플리트를 사용하여 항목이 추가되는 기본 위치를 지정하십시오.<br><br>선택하는 기본 위치는 입력 템플리트의 런타임 동작을 제한합니다.<ul><li>사용자는 다른 저장소를 선택할 수 없습니다.</li><li>기본 위치가 팀 작업영역이면 사용자는 다른 팀 작업영역을 선택할 수 없습니다.</li></ul>그러나 사용자가 이 입력 템플리트를 폴더와 연관시키는 경우에 사용자는 이 입력 템플리트에 대해 구성된 스토리지 위치를 재정의할 수 있습니다.",
		entry_template_folder_restrict_choice: "사용자가 항목을 기본 위치 또는 기본 위치의 하위 폴더에 추가해야 함",
		entry_template_folder_file_in_required: "사용자가 폴더에 새 항목을 추가해야 함",
		entry_template_folder_file_in_required_hover: "이 옵션을 선택하지 않으면 사용자가 저장소의 루트 폴더에 항목을 추가할 수 있습니다.<br><br><b>제한사항:</b> 데스크탑 구성에서 사용자가 폴더를 선택해야 할 수 있습니다.",

		entry_template_document_type_show: "<b>저장할 내용</b> 필드 표시",
		entry_template_document_type_show_hover: "<b>저장할 내용</b> 필드를 표시하는 경우, 선택하는 항목은 <b>저장할 내용</b> 필드의 옵션으로 표시됩니다.",
		entry_template_document_type_hide: "<b>저장할 내용</b> 필드 숨기기",
		entry_template_document_type_hide_hover: "<b>저장할 내용</b> 필드를 숨기는 경우, 선택하는 문서의 유형이 이 입력 템플리트를 사용하여 사용자가 문서를 추가할 때 항상 사용됩니다.",
		entry_template_document_type: "이 입력 템플리트를 사용하여 다음 항목을 추가할 수 있습니다.",
		entry_template_document_type_hover: "<b>저장할 내용</b> 필드를 표시하는 경우, 선택하는 항목은 <b>저장할 내용</b> 필드의 옵션으로 표시됩니다.<br><br><b>저장할 내용</b> 필드를 숨기는 경우, 선택하는 문서의 유형이 이 입력 템플리트를 사용하여 사용자가 문서를 추가할 때 항상 사용됩니다.",

		entry_template_misc: "추가 옵션:",
		entry_template_auto_classify_show: "문서의 컨텐츠 자동 분류",
		entry_template_auto_classify_show_hover: "FileNet Content Manager에서 문서가 분류되는 경우, 문서에 대한 적합한 클래스 및 특성 값을 판별할 수 있도록 문서의 컨텐츠가 검사됩니다.<br><br>시스템 관리자에게 연락하여 Content Platform Engine에서 컨텐츠 분류를 사용하는지 여부를 판별하십시오.<br><br>이 옵션을 사용하는 경우에는 사용자가 저장소에 문서를 추가할 때 문서의 클래스 및 특성이 변경될 수 있습니다.",
		entry_template_allow_duplicate_file_names: "중복된 파일 이름의 문서 허용",
		entry_template_allow_duplicate_file_names_hover: "기본적으로, 동일한 이름의 문서를 FileNet Content Manager의 폴더에 추가할 수 있습니다. 선택된 스토리지 위치의 각 파일이 고유 이름을 갖도록 하려면 이 옵션을 선택 취소할 수 있습니다.",
		entry_template_allow_compound_documents: "이 문서가 복합 문서의 상위가 되도록 허용",
		entry_template_version_show: "추가 및 체크인할 버전 옵션 표시",
		entry_template_version_hide: "추가 및 체크인할 버전 옵션 숨기기",
		entry_template_version_to_add_as: "추가할 기본 버전:",
		entry_template_version_default: "기본 버전 옵션:",
		entry_template_version_default_checked: "주 버전",
		entry_template_version_default_unchecked: "부 버전",
		entry_template_version_display: "문서 버전:",
		entry_template_version_display_show: "표시",
		entry_template_version_display_hide: "숨기기",
		entry_template_version_default_add: "추가할 기본 버전:",

		entry_template_checkin_version_show: "체크인할 버전 옵션 표시",
		entry_template_checkin_version_hide: "체크인할 버전 옵션 숨기기",

		entry_template_checkin_version_message_no_versions: "선택된 클래스의 버전 정책으로 인해 사용자가 문서의 새 버전을 체크인할 수 없습니다.",
		entry_template_checkin_version_message_always_version: "선택된 클래스의 버전 정책으로 인해 사용자가 문서의 현재 버전을 대체할 수 없습니다.",

		entry_template_applied: "사용자가 다음을 수행할 때 이 입력 템플리트 사용:",
		entry_template_applied_add: "문서 추가(필수)",
		entry_template_applied_add_folder: "폴더 작성(필수)",
		entry_template_applied_checkin: "체크인",
		entry_template_applied_properties_group: "특성 보기 또는 편집:",
		entry_template_applied_properties: "특성 창에서",
		entry_template_applied_viewer: "애플릿 뷰어에서",
		entry_template_applied_docinfo: "문서 정보 분할창에서",
		entry_template_applied_no_class_support: "이 입력 템플리트를 사용하여 항목을 추가할 수 있지만 문서를 체크인하거나 특성을 보고 편집할 수 없습니다. 선택한 클래스는 이러한 상황을 지원하도록 수정되어야 합니다. 이러한 상황에서 입력 템플리트를 사용해야 하는 경우 관리자에게 입력 템플리트 ID를 저장할 수 있도록 관리 도구를 사용하여 클래스를 수정할 것을 요청하십시오.",
		entry_template_applied_no_child_component_support: "선택된 클래스에 하위 컴포넌트가 있으며 특성 레이아웃이 정의되어 있습니다. 특성 레이아웃은 하위 컴포넌트를 지원하지 않습니다. 하위 컴포넌트는 사용자에게 표시되지 않습니다.",
		entry_template_applied_child_component: "선택된 클래스에 하위 컴포넌트가 있습니다. 이는 사용자에게 표시되지만 이 입력 템플리트에서 하위 컴포넌트를 구성할 수 없습니다.",

		entry_template_properties_show: "<b>특성</b> 섹션 표시",
		entry_tempalte_properties_show_hover: "<b>특성</b> 섹션을 표시하는 경우, 사용자는 입력 템플리트에 표시되며 읽기 전용 특성이 아닌 특성 값을 수정할 수 있습니다.",
		entry_template_properties_hide: "<b>특성</b> 섹션 숨기기",
		entry_template_properties_hide_hover: "<b>특성</b> 섹션을 숨기는 경우, 사용자는 특성 값을 수정할 수 없습니다. 입력 템플리트는 이 입력 템플리트를 사용하여 항목이 추가될 때 사용할 모든 값을 정의해야 합니다.",

		entry_template_security_show: "<b>보안</b> 섹션 표시",
		entry_template_security_show_hover: "<b>보안</b> 섹션을 표시하는 경우, 적합한 권한이 있는 사용자는 항목의 보안을 수정할 수 있습니다.",
		entry_template_security_hide: "<b>보안</b> 섹션 숨기기",
		entry_template_security_hide_hover: "<b>보안</b> 섹션을 숨기는 경우, 사용자는 항목의 보안을 수정할 수 없습니다. 입력 템플리트는 항목이 추가되거나 편집될 때 사용할 모든 보안 설정을 정의해야 합니다.",
		entry_template_security_policy: "보안 정책:",
		entry_template_security_policy_hover: "선택하는 보안 정책에 따라 보안 정책은 다음을 수행할 수 있습니다.<br><ul><li><b>항목 보안 설정</b> 아래에 지정된 권한을 재정의합니다.</li><li><b>항목 보안 설정</b> 아래에 지정된 권한에 추가합니다.</li></ul>",
		entry_template_security_policy_none: "보안 정책이 선택되지 않음",
		entry_template_security_inherit: "상위 폴더의 보안 설정 상속",
		entry_tempalte_save_in_hover: "입력 템플리트를 저장할 위치를 지정하십시오.<br><br><b>제한사항:</b> 입력 템플리트를 팀 작업영역에 저장하는 경우에는 입력 템플리트를 팀 작업영역 내에서만 사용할 수 있습니다.",
		entry_template_security_inherit_item_security_hover: "이 옵션을 선택하는 경우, 상위 폴더의 보안 설정이 다음 항목 중 하나에 의해 정의된 보안 설정에 추가됩니다.<ul><li><b>항목 특성 설정</b> 섹션에서 지정된 클래스</li><li><b>항목 보안 설정</b> 섹션에서 지정된 사용자 정의 보안</li></ul>",
		entry_template_security_change: "선택된 클래스에서 정의한 보안 재정의",
		entry_template_security_change_hover: "이 옵션을 선택하는 경우, 클래스에 대해 정의된 보안 설정이 기본적으로 표시됩니다. 그리고 입력 템플리트의 보안 설정을 수정할 수 있습니다.<br><br><b>보안</b> 섹션을 표시하는 경우, 적합한 권한이 있는 사용자는 항목의 보안을 수정할 수 있습니다.<br><br>이 옵션을 선택하며 상위 폴더의 보안 설정을 상속하도록 선택한 경우, 상속 가능한 권한이 지정된 보안에 추가됩니다.",
		entry_template_security_default_item_security: "항목을 추가하는 사용자의 기본 항목 보안 재정의",
		entry_template_security_policy_message_override: "선택된 보안 정책은 보안 설정에 지정된 권한을 재정의하도록 구성되어 있습니다.",
		entry_template_security_policy_message_add: "선택된 보안 정책은 보안 설정에 지정된 권한에 추가하도록 구성되어 있습니다.",
		entry_template_security_policy_preserve_true_hover: "직접 권한 유지",
		entry_template_security_policy_preserve_false_hover: "직접 권한을 유지하지 않음",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "특정 역할",
		entry_template_security_class_role_search_title: "역할 검색:",
		entry_template_secuirty_class_member_title: "${0}의 구성원 목록",
		entry_template_secuirty_class_folder_only: "이 권한은 이 폴더에만 적용됩니다.",
		entry_template_secuirty_class_folder_and_immediate_children: "이 권한은 이 폴더 및 이 폴더에서 보안이 상속되도록 구성된 인접 하위에 적용됩니다.",
		entry_template_secuirty_class_folder_and_all_children: "이 권한은 이 폴더 및 이 폴더에서 보안이 상속되도록 구성된 모든 하위에 적용됩니다.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"이 권한은 이 폴더에서 보안이 상속되도록 구성된 인접 하위에 적용됩니다.",
		entry_template_secuirty_class_folder_all_children_not_folder: "이 권한은 이 폴더에서 보안이 상속되도록 구성된 하위에 적용됩니다.",

		entry_template_class_security_message_no_override: "선택된 클래스의 보안으로 인해 사용자가 보안을 재정의할 수 없습니다.",
		entry_template_class_security_required_privileges: "<b>중요</b>: 선택된 클래스의 보안을 재정의할 때 이 입력 템플리트를 사용하여 항목을 추가하는 사용자에게 ItemSetACL 및 UserACLOwner 권한이 있어야 합니다.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "순차 패턴 워크플로우",
		entry_template_workflow_type_ICNParallelDocumentApproval: "병렬 패턴 워크플로우",
		entry_template_workflow_type_existing: "사용자 정의 워크플로우...",
		entry_template_workflow_launch_prompt: "워크플로우 실행 여부를 사용자에게 묻기",
		entry_template_workflow_launch_auto: "워크플로우 자동 실행",
		entry_template_workflow_modify_launch: "사용자가 실행 단계를 수정할 수 있도록 허용",
		entry_template_workflow_modify_launch_hover: "사용자가 워크플로우 실행 방법을 변경할 수 있도록 허용하려는 경우 이 옵션을 선택하십시오.",

		entry_template_optionsButton_title: "수정",
		entry_template_optionsButton_readonly_title: "연관 보기",
		entry_template_optionsDialog_title: "폴더 연관 설정",
		entry_template_removeButton_title: "제거",
		entry_template_addButton_title: "추가",
		entry_template_selected_entry_templates: "선택된 입력 템플리트",
		entry_template_docs_added_to_template_destination: "문서가 입력 템플리트에 지정된 대상에 추가됩니다.",
		entry_template_docs_added_to_other_object_store: "이 입력 템플리트는 ${0} 오브젝트 저장소에 항목을 추가합니다.",
		entry_template_inherited_entry_templates_label: "수행할 작업: ",
		entry_template_inherited_entry_templates: "폴더로부터 입력 템플리트 연관 상속: ",
		entry_template_inherited_entry_templates_not: "이 폴더의 새 연관 작성",
		entry_template_inherited_folder_path: "선택된 입력 템플리트 목록의 입력 템플리트가 다음 폴더와 연관되어 있습니다. ${0}. <br> 폴더의 경로는 ${1}입니다.",
		entry_template_folder_associations_title: "입력 템플리트 연관시키기",
		entry_template_folder_associations_intro: "입력 템플리트를 폴더와 연관시킬 때 사용자는 입력 템플리트를 사용하여 폴더에 항목을 추가해야 합니다. 다중 입력 템플리트를 폴더와 연관시키는 경우 사용자는 사용할 입력 템플리트를 선택할 수 있습니다.",
		entry_tempalte_folder_associations_entrytemplate: "입력 템플리트: ",
		entry_template_avaliable_entry_templates: "사용 가능한 입력 템플리트",
		entry_template_fileTypes_intro_title: "허용된 파일 유형:",
		entry_template_fileTypes_intro: "기본적으로 입력 템플리트를 사용하여 문서의 유형을 저장소에 추가할 수 있습니다. 그러나 하나 이상의 파일 유형을 선택하는 경우 사용자가 지정된 파일 유형 중 하나와 일치하는 문서를 추가할 때에만 입력 템플리트가 사용 가능합니다.",
		entry_template_fileTypes: "파일 유형",
		entry_template_fileType_error: "하나 이상의 입력 템플리트 연관에 대해 유효하지 않은 파일 유형이 선택되어 있습니다. 이러한 입력 템플리트 연관을 저장하기 전에 유효하지 않은 파일 유형을 제거해야 합니다.",
		entry_template_fileTypes_any_type_of_file: " 모든 유형의 파일",
		entry_template_description_label: "설명",
		entry_template_ItemInfoPrefix: "연관 대상: ",
		entry_template_TargetObjectStoreName: "대상 오브젝트 저장소",
		entry_template_class: "클래스",
		entry_template_current_folder_as_parent: "대상으로 폴더 사용",
		entry_template_view_minetypes: "MIME 유형 보기",
		entry_template_avaliable_MIME_types: "사용 가능한 파일 유형",
		entry_template_selected_MIME_types: "선택된 파일 유형",
		entry_template_MIME_type_column: "파일 유형 카테고리 이름",
		entry_template_file_type_not_existing: "유효하지 않은 파일 유형을 제거하십시오.",
		entry_template_MIME_types: "MIME 유형:",
		entry_template_MIME_types_info_dialog_title: "해당 MIME 유형",
		entry_template_destination_label: "문서 추가 대상: ",
		entry_template_destination_help: "사용자가 선택된 입력 템플리트를 사용하여 이 폴더에 문서를 추가할 때 저장소에서 문서가 저장되는 위치를 지정하십시오.",
		entry_template_radioButton_folder_destination: "선택된 폴더",
		entry_template_radioButton_template_destination: "입력 템플리트에 지정된 대상",
		entry_tempalte_teamspace_default: "기본 입력 템플리트",
		entry_template_folder_associations_save_new: "일부 입력 템플리트 연관을 수정했습니다. 변경사항을 저장하지 않고 이 창을 닫으시겠습니까?",
		entry_template_mode_binding_label: "특성",
		entry_template_columns_className: "클래스 이름",
		entry_template_columns_type: "템플리트 유형",
		entry_template_columns_workflow: "워크플로우 이름",
		entry_template_columns_destination: "대상",
		entry_template_association_less_than_record: "선택된 입력 템플리트에 나열되지 않은 ${0} 입력 템플리트가 있습니다. 이를 볼 수 있는 권한이 없습니다. 또는 삭제되었습니다. 자세한 정보는 시스템 관리자에게 문의하십시오.",
		/* Request */

		progress_message_general: "작업 중...",
		cancel_message_general: "조치가 취소되었습니다.",
		ie8_not_supported_browser: "IE8은 지원되지 않는 브라우저입니다.",
		progress_message_getDesktop: "데스크탑 로드 중...",
		progress_message_getActions: "조치 로드 중...",
		progress_message_getViewers: "데스크탑 로드 중...",
		progress_message_logon: "로그인 중...",
		progress_message_logoff: "로그아웃 중...",
		progress_message_getContentClasses: "클래스 검색 중...",
		progress_message_openContentClass: "클래스 세부사항 검색 중...",
		progress_message_od_getCabinets: "캐비닛 검색 중...",
		progress_message_getSearchTemplates: "검색 검색 중...",
		progress_message_od_getTemplates: "폴더 검색 중...",
		progress_message_od_openCabinet: "폴더 검색 중...",
		progress_message_openSearchTemplate: "검색 여는 중...",
		progress_message_od_openTemplate: "폴더 여는 중...",

		progress_message_getWorklists: "작업 목록 검색 중...",
		progress_message_getWorkItems: "작업 항목 검색 중...",
		progress_message_getNextWorkItems: "작업 항목 검색 중...",
		progress_message_getStepParameters: "작업 항목 정보 검색 중...",
		progress_message_getStepAttachmentItems: "첨부 정보 검색 중...",
		progress_message_getDependentParameters: "특성 정보 검색 중...",

		progress_message_p8_getProcessApplicationSpaces: "애플리케이션 공간 검색 중...",
		progress_message_p8_getProcessRoles: "프로세스 역할 검색 중...",
		progress_message_p8_getProcessInbaskets: "작업함 검색 중...",
		progress_message_p8_getProcessorInformation: "프로세스 정보 검색 중...",
		progress_message_p8_getFilterCriteria: "작업함 필터 검색 중...",
		progress_message_p8_getLaunchParameters: "작업 항목 정보 검색 중...",
		progress_message_p8_getStepAttachments: "작업 항목 첨부 파일 검색 중...",
		progress_message_p8_getSubscriptions: "워크플로우 등록 검색 중...",
		progress_message_p8_getTrackerParameters: "작업 항목 정보 검색 중...",
		progress_message_p8_getTrackerHistory: "작업 항목 히스토리 검색 중...",
		progress_message_p8_getTrackerMilestones: "작업 항목 이정표 검색 중...",
		progress_message_p8_completeStep: "작업 항목 완료 중...",
		progress_message_p8_moveToInbox: "작업함으로 항목 이동 중...",
		progress_message_p8_returnToSender: "작업 항목을 되돌리는 중...",
		progress_message_p8_reassign: "작업 항목 재지정 중...",
		progress_message_p8_launchWorkflow: "워크플로우 실행 중...",
		progress_message_p8_getTransferedWorkflows: "워크플로우 정보 검색 중...",

		progress_message_cm_getProcesses: "워크플로우 정보 검색 중...",
		progress_message_cm_completeStep: "작업 항목 계속...",
		progress_message_cm_getItemProcessInformation: "워크플로우 정보 검색 중...",

		progress_message_search: "검색 중...",
		cancel_message_search: "검색이 취소되었습니다.",
		progress_message_getContentItems: "항목 정보 검색 중...",
		progress_message_openFolder: "폴더 여는 중...",
		progress_message_addItem: "항목 작성 중...",
		progress_message_checkIn: "항목 체크인 중...",
		progress_message_changePassword: "비밀번호 변경 중...",
		progress_message_getDefaultInstancePermissions: "기본 권한 검색 중...",
		progress_message_openItem: "항목 정보 검색 중...",
		progress_message_saveItem: "항목 정보 저장 중...",
		progress_message_getPermissions: "권한 검색 중...",
		progress_message_getEntryTemplates: "입력 템플리트 검색 중...",
		progress_message_openEntryTemplate: "입력 템플리트 여는 중...",
		progress_message_getFavorites: "즐겨찾기 검색 중...",
		progress_message_getFoldersFiledIn: "폴더 검색 중...",
		progress_message_getDocumentVersions: "버전 검색 중...",
		progress_message_getDependentAttributeInfo: "속성 정보 검색 중...",
		progress_message_packageForDownload: "다운로드를 위해 패키지 중...",
		progress_message_convertDocument: "컨텐츠 변환 중...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "컨텐츠 유형 검색 중...",
		progress_message_SharePointPlugin_SharePointAddDocument: "문서 추가 중...",

		progress_message_desktop_reload: "클라이언트가 사용자 데스크탑을 다시 로드하는 중입니다.<br>다시 로그인하라는 프롬프트가 표시될 수 있습니다.",
		progress_message_email: "이메일 발송 중...",
		cancel_message_email: "이메일이 취소되었습니다.",

		progress_message_p8_getOfficeOnlineTemplates: "Office 템플리트 검색 중...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "즐겨찾기 트리",
		favorites_content_list_label: "즐겨찾기 컨텐츠 목록",
		syncItems_tree_label: "내 동기화된 파일 트리",
		syncItems_content_list_label: "내 동기화된 파일 컨텐츠 목록",
		my_checkouts_content_list_label: "내 체크아웃 컨텐츠 목록",
		browse_tree_label: "찾아보기 트리",
		browse_content_list_label: "찾아보기 컨텐츠 목록",
		repository_selector_label: "저장소 선택기",
		teamspaces_content_list_label: "팀 작업영역 컨텐츠 목록",
		templates_content_list_label: "템플리트 컨텐츠 목록",
		work_content_list_label: "작업 컨텐츠 목록",
		work_tree_label: "작업 트리",
		admin_tree_label: "관리 트리",
		admin_tabs_label: "관리 탭",
		search_tabs_label: "검색 탭",
		search_selector_label: "검색 선택기",
		teamspace_browse_content_list_label: "팀 작업영역 찾아보기 컨텐츠 목록",
		teamspace_search_tabs_label: "팀 작업영역 검색 탭",

		/* Desktop */
		undo_description: "${0} 실행 취소",
		redo_description: "${0} 다시 실행",

		/* Application Tabs */
		home: "홈",
		repository: "저장소",
		repository_type: "저장소 유형:",
		repository_type_header: "저장소 유형",
		repository_type_any: "모든 저장소",
		repository_type_contains_label: "저장소 유형 포함",
		document_info: "문서 정보",
		team: "팀",
		administration: "관리",

		/* Home Page */
		recent_activity: "최근 활동",
		repos_and_wrksp: "저장소 및 팀 작업영역",
		workspaces: "팀 작업영역",
		repositories: "저장소",
		templates: "템플리트",
		favorites: "즐겨찾기",
		my_checkouts: "내 체크아웃",
		mySyncedFiles: "내 동기화된 파일",
		links: "링크",
		name_label: "이름",
		description_label: "설명:",
		type_label: "유형:",
		type_heading: "유형",
		type_id_label: "유형 ID",
		server_type_icon: "서버 유형 아이콘",
		server_type_heading: "서버 유형",
		server_type: "서버 유형",
		port_heading: "포트 번호",
		port_label: "포트 번호:",
		server_name_heading: "서버 이름",
		server_label: "서버 이름:",
		server_url_label: "서버 URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "연결됨:",
		repository_label: "저장소",
		modified_label: "수정자:",
		modified_date_label: "수정일:",
		status_label: "상태:",
		last_modified_label: "마지막 수정자:",

		modifier: "수정자",
		modified_date: "수정 날짜",

		/* Favorites */
		new_favorite_label: "즐겨찾기에 추가",
		edit_favorite_label: "즐겨찾기 이름 바꾸기",
		remove_favorite_label: "즐겨찾기에서 제거",
		missing_alias_message: "이름을 지정해야 합니다.",
		sync_favorite_enable_hover: "이 항목을 동기화에 사용할 수 있습니다.",
		sync_favorite_disable_hover: "이 항목을 동기화하지 않습니다.",
		sync_favorite_sync_unavailable_hover: "이 오브젝트 유형에 동기화할 수 없습니다.",
		sync_enable_label: "이 항목 동기화",
		sync_enable_label_hover: "이 항목을 디바이스에 동기화합니다.",
		delete_favorite_confirmation_question: "즐겨찾기에서 이 항목을 제거하시겠습니까?",
		alias_label: "이름:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "선택한 항목이 이미 즐겨찾기에 있습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "이 항목을 즐겨찾기 목록에 추가할 수 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "${0}개의 즐겨찾기만 저장할 수 있습니다.",
		add_favorite_max_reached_response: "이 항목을 즐겨찾기 목록에 추가할 경우 기존 즐겨찾기를 삭제해야 이 항목을 추가할 수 있습니다.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "선택한 문서를 PDF로 변환할 수 없습니다.",
		download_as_pdf_max_content_error_explanation: "${0}MB의 데이터만 PDF로 변환할 수 있습니다. 그러나 선택한 문서는 ${0}MB를 초과합니다.",
		download_as_pdf_max_content_error_response: "더 적은 수의 문서를 선택하거나 크기가 더 작은 문서를 선택한 후 문서를 PDF 파일로 다시 다운로드하십시오.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "선택된 문서를 단일 PDF 파일로 변환할 수 없습니다.",
		download_as_pdf_mimetype_check_error_explanation: "여러 파트가 있는 문서를 단일 PDF 파일로 변환하려면 각 파트의 MIME 유형이 동일해야 합니다.",
		download_as_pdf_mimetype_check_error_response: "다른 문서를 선택하여 PDF로 변환하십시오.",

		/* Activity Stream */
		show_label: "표시:",
		all_filter: "모두",
		notifications_filter: "알림",
		workitems_filter: "작업 항목",
		documentes_filter: "문서",
		all_favorites_filter: "모든 즐겨찾기",
		folders_filter: "폴더",
		searches_filter: "검색",
		teamspaces_filter: "팀 작업영역",

		/* Repository */
		all_search_templates: "모든 검색",
		all_od_searches: "모든 검색 템플리트",
		recent_searches: "최근 검색",
		opened_searches: "열린 검색",

		all_worklists: "모든 인박스",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "모든 작업 목록의 목록입니다.",

		/* Teamspace */
		all_workspaces: "모든 팀 작업영역",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "모든 팀 작업영역의 목록입니다.",
		workspace_title: "팀 작업영역",
		workspace_icon: "팀 작업영역 아이콘",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "사용 가능",
		workspace_stat_offline: "사용 불가능",
		workspace_stat_validate: "유효성 검증 필수",
		workspace_stat_pendingDelete: "삭제 보류 중",
		workspace_stat_deleteError: "삭제 실패함",

		undefined_value: "정의되지 않음",
		undefined_reference_value: "정의된 참조가 없습니다.",

		/* Filter teamspaces in content list */
		more_results_on_server: "서버에 추가 결과가 있을 수 있습니다.",
		search_all_data: "모든 데이터 검색.",
		search_all_teamspaces: "모든 팀 작업영역 검색",
		teamspace_filter_results: "${0} 결과 표시 ",
		displaying_filtered_results: "필터링된 결과 표시 ",
		displaying_recent_results: "이전 ${0}일 동안 수정된 팀 작업영역만 표시합니다. 다른 팀 작업영역을 찾으려면 이름 또는 설명에 따라 팀 작업영역 목록을 필터하십시오. ",
		clear_filter: "필터 지우기",

		/* FolderTreeModel */
		move_item_task: "항목 이동",
		copy_item_task: "항목 복사",
		add_item_task: "항목 추가",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "다음 폴더를 찾을 수 없음: ${0}. 폴더가 삭제되었거나 이 보기에서 폴더를 열 수 없습니다. 트리 보기에서 계속 링크를 클릭하여 폴더를 탐색할 수 있습니다. 폴더를 조회할 수 없는 경우 컨텐츠 목록 보기를 새로 고치십시오.",
		more_paging_link: "계속 ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "상태",
		status_dialog_cancel_label: "취소",

		/* ErrorDialog */
		error_dialog_title: "오류",
		error_dialog_icon_tooltip: "오류",
		error_dialog_stack_trace_title: "스택 추적",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "확인",

		close_browser_msg: "브라우저 창을 닫으십시오.",

		/* MessageDialog */
		message_dialog_title: "정보",
		warning_dialog_title: "경고",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "${0} 시작",
		server: "저장소:",
		username: "사용자 이름:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "저장소에 로그인하려면 사용자 이름이 필요합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "저장소에 로그인하려면 비밀번호가 필요합니다.",
		password: "비밀번호:",
		login: "로그인",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "세션이 만료되었습니다. 다시 로그인하십시오.",
		login_repository_connection_expired_message: "${0} 저장소에 대한 연결이 만료되었습니다. 다시 로그인하십시오.",
		login_site_connection_expired_message: "사이트에 대한 연결이 만료되었습니다. 다시 로그인하십시오.",
		login_new_server_message: "${0}의 사용자 이름 및 비밀번호를 입력하십시오.",
		login_error_more_information_message: "자세한 정보",

		disconnect_box_account_user: "Box 계정 연결 끊기: ${0}",
		disconnect_box_account: "Box 계정 연결 끊기",
		disconnect_box_accounts: "Box 계정 연결 끊기",

		// OAuth2/Box Login
		login_ssl_connection_required: "Box 저장소에 액세스하려면 SSL 연결이 필요합니다.",
		login_oauth_popup_blocked: "팝업 창이 차단되었습니다. 로그인하려면 브라우저의 팝업 차단을 해제해야합니다.",
		login_oauth_click_here: "5초 안에 경로 재지정되지 않으면 여기를 클릭하십시오.",
		login_oauth_title: "로그인",
		login_oauth_grant_intro: "${0}에 대한 인증을 승인합니다.",
		login_pane_oauth_click_here: "로그인하려면 여기를 클릭하십시오.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "웹 클라이언트를 로그아웃하시겠습니까?",
		logout_confirmation_button: "로그아웃",

		/* ChangeLocaleDialog */
		change_locale: "언어 및 로케일 설정 변경",
		change_locale_use_browser_language: "브라우저 언어 설정 사용(기본값)",
		change_locale_use_browser_locale: "브라우저 언어 설정 사용(기본값)",
		change_locale_description: "브라우저 쿠키를 삭제할 경우 언어 및 로케일 설정을 재설정해야 합니다.",
		change_locale_language_locale: "애플리케이션 언어:",
		change_locale_language_locale_hover: "이 설정은 웹 클라이언트에서 텍스트의 언어를 변경합니다. 그러나 애플리케이션의 문서 언어는 변경하지 않습니다.<br><br>기본 설정은 웹 브라우저 구성 옵션에서 지정한 언어를 사용합니다.",
		change_locale_value_format_locale: "애플리케이션 로케일:",
		change_locale_value_format_locale_hover: "로케일은 웹 클라이언트의 날짜, 시간, 번호를 결정합니다.<br><br>기본 설정은 웹 브라우저 구성 옵션에서 지정한 언어와 연관된 형식을 사용합니다.",
		change_locale_for_office: "양방향 텍스트 설정:",
		change_locale_bidi_support_flag: "양방향 지원 사용",
		change_locale_bidi_support_flag_hover: "양방향 지원이 사용 가능한 경우, 사용자는 입력 필드에서 사용되는 텍스트의 방향을 설정할 수 있습니다. 폴더와 같은 항목에 대해 텍스트가 입력됩니다(예: 입력된 방향과 동일한 방향으로 표시됨).",
		change_locale_base_text_direction: "컨텐츠의 기본 텍스트 방향:",
		change_locale_base_text_direction_hover: "입력 필드에 입력할 텍스트의 방향을 설정합니다. 또한 폴더 이름과 같이 사용자가 입력하는 레이블의 표시 방향도 제어합니다.",
		change_locale_calendar_type: "달력 유형:",
		change_locale_calendar_type_hover: "사용자 세션에 사용될 달력의 유형을 선택하십시오.",
		change_locale_base_text_direction_default: "기본값",
		change_locale_base_text_direction_ltr: "왼쪽에서 오른쪽",
		change_locale_base_text_direction_rtl: "오른쪽에서 왼쪽",
		change_locale_base_text_direction_contextual: "문맥",
		change_locale_calendar_type_gregorian: "Gregorian",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "히브리어",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "비밀번호 변경",
		change_password_title: "비밀번호 변경",
		change_password_expired_title: "비밀번호 만료됨",
		change_password_message: "새 비밀번호를 입력하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "비밀번호가 만료되었습니다. 새 비밀번호를 입력하십시오.",
		change_password_password_rules: "비밀번호 규칙",
		change_password_old_password: "이전 비밀번호:",
		change_password_new_password: "새 비밀번호:",
		change_password_confirm_password: "비밀번호 확인:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "이전 비밀번호를 입력해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "새 비밀번호를 입력해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "새 비밀번호를 확인해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "비밀번호가 일치해야 합니다.",

		/* GlobalToolbar */
		actions: "조치",
		actions_label: "조치:",
		open_actions_label: "조치 열기:",

		/* About Dialog */
		about_dialog_title: "정보",
		about_product_name_label: "제품 이름: ",
		about_product_version_label: "버전: ",
		about_product_build_label: "빌드: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM 및 IBM 로고는 미국 또는 기타 국가에서 사용되는 International Business Machine Corporation의 등록상표입니다. 본 프로그램은 본 프로그램에 동봉된 라이센스 계약에 의하여 라이센스가 부여됩니다. 본 라이센스 계약은 본 프로그램 디렉토리 폴더 또는 라이브러리의 \"License\" 또는 \"Non_IBM_License\" 파일 안에 존재하거나, 해당되는 경우, 인쇄물로서 제공됩니다. 프로그램을 사용하기 전에 본 계약을 주의깊게 읽으십시오. 본 프로그램을 사용하는 경우 귀하는 본 계약에 동의한 것으로 간주됩니다. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "선택된 항목을 삭제하시겠습니까?",
		delete_single_folder_confirmation_question: "${0} 폴더를 삭제하시겠습니까?",
		delete_multiple_confirmation_question: "선택된 항목을 삭제하시겠습니까?<br>${0}개의 항목이 선택되었습니다.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "삭제",
		search_template_delete_confirmation_question: "${0} 검색을 삭제하시겠습니까?",
		search_template_opened_delete_confirmation_question: "${0} 검색이 열려 있습니다. 이 검색을 삭제하면 검색이 닫힙니다.<br>이 검색을 삭제하시겠습니까?",
		delete_multiple_opened_search_template_confirmation_question: "다음 검색이 열려 있습니다: ${0}.<br>검색을 삭제하면 닫힙니다. 이 검색을 삭제하시겠습니까?",
		delete_large_number_items_confirmation_question: "${0}개 항목을 삭제하도록 선택했습니다.<br/>다수의 항목을 삭제하는 데 오랜 시간이 걸릴 수 있습니다.<br/>계속하시겠습니까?",
		delete_confirmation_entrytemplate: "이 입력 템플리트를 삭제하면 입력 템플리트와 연관된 문서 또는 폴더에 다음과 같은 영향을 미칠 수 있습니다.<ul><li>항목이 입력 템플리트와 더 이상 연관되지 않고 항목을 업데이트했을 때 경고가 표시될 수 있습니다.</li><li>이름 또는 특성 순서와 같이 입력 템플리트에서 제어하는 특성이 더 이상 입력 템플리트와 연관된 항목에 적용되지 않습니다.</li></ul>이 입력 템플리트를 삭제하시겠습니까?",
		delete_confirmation_entrytempalte_with_multi_items: "입력 템플리트는 개별적으로 삭제해야 합니다. 삭제할 항목 목록에서 입력 템플리트가 제거되었습니다. 입력 템플리트를 삭제하려면 각 입력 템플리트를 별도로 삭제해야 합니다.",

		/* Create/Apply/Remove Hold */
		hold: "보류",
		createHold: "새 보류항목",
		applyHold: "보류항목 적용",
		removeHold: "보류항목 제거",
		showHolds_title: "보류항목 표시",
		applyHoldSelectText: "선택된 항목에 적용할 보류항목을 선택하십시오.",
		availableHolds: "사용 가능한 보류항목:",
		removeHoldSelectText: "선택된 항목에서 제거할 보류항목을 선택하십시오.",
		appliedHolds: "적용된 보류항목:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "선택된 항목에 적용할 새 보류항목을 작성하십시오.",
		holdName: "보류항목 이름:",
		holdDescription: "설명:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "보류항목에 이름을 지정해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "지정된 보류항목 이름이 이미 존재합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "보류항목 이름에 ' % [ ] \" \\ , 문자를 사용할 수 없습니다.",
		/*Session expire warning dialog*/
		session_expire_warning: "세션이 ${0}분 후에 만료됩니다.",
		session_expire: "세션 만료",
		logoff: "로그아웃",
		extend_session: "세션 연장",
		admin_custom_settings: "추가 설정:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning은 세션 만료 경고가 사용 가능하며 기본값이 true인지 여부를 표시하는 부울 값입니다. sessionExpireWarningTime은 세션 만료 경고 시간을 지정하는 2 - 5 사이의 정수입니다.",
		admin_custom_setting_dialog_title_new: "새 설정",
		admin_custom_setting_dialog_title_edit: "설정 편집",
		admin_custom_setting_dialog_hover_help: "매개변수 이름 및 값을 지정하여 기타 매개변수를 추가하십시오. 예를 들어, 세션 만료 경고를 사용하려는 경우에는 “enableSessionExpireWarning” 및 “true”를 지정할 수 있습니다.",
		admin_custom_setting_dialog_field_hover_help: "매개변수 이름 및 값에 대한 자세한 정보는 IBM navigator 매개변수 참조 매뉴얼을 참조하십시오.",
		admin_custom_setting_dialog_nameInvalid: "이 값은 필수입니다. 이 값에는 공백을 사용할 수 없으며 중복될 수 없습니다.",
		admin_custom_setting_dialog_bool_valueInvalid: "이 값은 필수입니다. 값은 부울이어야 합니다.",
		admin_custom_setting_dialog_int_valueInvalid: "이 값은 필수입니다. 값은 정수여야 합니다.",
		/* Add Document Dialog */
		add_document_dialog_title: "문서 추가",
		add_documents_dialog_title: "문서 추가",
		add_document_general_label: "일반",
		add_document_properties_label: "특성",
		add_document_properties_with_ellipsis_label: "특성...",
		add_document_security_label: "보안",
		add_document_location_label: "저장 위치:",
		add_document_type_label: "무엇을 저장하시겠습니까?",
		add_document_localfile_label: "로컬 문서",
		add_document_metadata_label: "문서에 대한 정보",
		add_document_external_label: "외부 문서로 링크",
		add_document_web_link_label: "웹 링크",
		add_document_saved_content_label: "저장된 파일 사용:",
		add_document_saved_content_choice: "저장된 파일",
		add_document_file_name_label: "파일 이름:",
		add_document_entry_template_label: "입력 템플리트:",
		add_document_delete_file_label: "로컬 파일 삭제",
		add_document_delete_file_disabled_label: "파일 추적 디렉토리에 없는 파일은 삭제되지 않습니다.",
		add_document_major_version_label: "주 버전",
		add_document_major_version_hover: "문서 상태를 릴리스됨으로 설정합니다. 문서가 버전 1.0으로 저장소에 추가됩니다. 옵션을 선택하지 않으면 문서를 릴리스할 준비가 되지 않아서 부 버전 0.1로 추가됩니다.",
		add_document_save_document_as_unfiled_label: "문서를 폴더에 저장하지 않음",
		add_document_save_document_as_unfiled_hover: "이 옵션을 선택하면 검색으로만 이 문서를 찾을 수 있으며 찾아볼 수는 없습니다.",
		add_document_create_new_version_label: "새 버전 작성",
		add_document_replace_existing_version_label: "기존 버전 바꾸기",
		add_document_start_workflow_label: "워크플로우 시작",
		add_document_auto_classify_label: "자동으로 컨텐츠 분류",
		add_document_add_label: "추가",
		add_document_cancel_label: "취소",
		add_document_document_type_label: "클래스",
		add_document_context_info: "문서 특성에 입력하는 값은 이후 문서 찾기에 사용됩니다.",
		add_documents_context_info: "문서에 입력한 값을 사용하여 나중에 문서를 찾을 수 있습니다. 문서에 대해 다른 특성 값을 입력해야 할 경우 별도로 추가하거나 추가한 후 문서의 특성을 편집해야 합니다.",
		add_document_url_label: "URL:",
		add_document_template_description: "템플리트 설명:",
		add_document_select_entry_template: "입력하거나 입력 템플리트를 선택하십시오.",
		add_document_no_permission_to_associations: "입력 템플리트를 사용할 수 있는 권한이 없습니다.",
		add_document_no_entry_template_to_use: "선택된 파일에 대해 입력 템플리트를 사용할 수 없습니다.",
		add_document_no_entry_template_itemtype_permission: "항목을 이 폴더에 추가할 수 없습니다. 입력 템플리트를 선택해야 하며 이 폴더와 연관된 입력 템플리트에 대한 액세스 권한이 없습니다. 시스템 관리자에게 문의하여 이 폴더와 연관된 입력 템플리트에 대한 액세스 권한을 부여하도록 요청하십시오.",
		add_document_appgroup_name_label: "애플리케이션 그룹 이름:",
		add_document_app_name_label: "애플리케이션 이름:",
		create_folder_dialog_title: "새 폴더",
		create_folder_context_info: "폴더 특성에 입력하는 값은 이후에 폴더 찾기에 사용됩니다.",
		create_folder_folder_name_label: "폴더 이름",
		create_folder_save_folder_as_unfiled_label: "폴더를 다른 폴더에 저장하지 않음",
		create_folder_save_folder_as_unfiled_hover: "이 옵션을 선택하면 검색으로만 이 폴더를 찾을 수 있으며 찾아볼 수는 없습니다.",
		add_item_create_in_folder: "폴더에 작성:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "폴더 이름에 \\ / : * ? \" < > | 문자를 사용할 수 없습니다.",

		invalid_box_folder_name_message: "폴더 이름에 \\ / 문자를 사용할 수 없으며 . 또는 ..와 동일할 수 없습니다.",
		invalid_box_file_name_message: "파일 이름에 \\ / 문자를 사용할 수 없으며 . 또는 ..와 동일할 수 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "파일 이름에 \\ / : * ? \" < > | 문자를 사용할 수 없습니다.",
		external_document_placeholder: "문서 URL 입력",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "색상은 3자리 또는 6자리 16진수로 입력해야 합니다(예: #000 또는 #000000).",
		add_document_unfiled: "${0} 보관 해제됨",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "입력 템플리트를 사용하여 문서 추가",
		add_document_using_template_context_info: "입력 템플리트를 사용하여 문서를 추가할 때 문서에 대해 입력하는 값은 일관성이 있습니다.",
		add_documents_using_template_dialog_title: "입력 템플리트를 사용하여 문서 추가",
		add_documents_document_name_is_file_name_hint: "파일 이름이 이 특성에 사용됩니다.",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "입력 템플리트를 사용하여 폴더 대로 작성",
		create_folder_using_template_context_info: "입력 템플리트를 사용하여 폴더를 작성할 때 폴더에 대해 입력하는 값은 일관성이 있습니다.",

		add_documents_batch_results_dialog_title: "저장소에 추가되지 않은 문서",
		add_documents_batch_results_dialog_context_info: "다음 문서가 저장소에 추가되지 않았습니다. 문서가 저장소에 추가되지 않은 이유에 대한 추가 정보를 보려면 문서를 선택하고 세부사항을 클릭하십시오.",
		add_documents_batch_results_dialog_filename_col_hdr: "파일 이름",
		add_documents_batch_results_dialog_status_col_hdr: "상태",
		add_documents_batch_results_dialog_message_col_hdr: "메시지",
		add_documents_batch_results_status_error: "오류",
		add_documents_batch_results_status_cancelled: "취소됨",
		add_documents_batch_results_status_cancelled_msg: "요청이 취소되었기 때문에 문서가 추가되지 않았습니다.",

		add_documents_batch_status_title: "문서 추가",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "${1} 중 ${0} 파일 추가 중...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "오류: ${0}",
		add_documents_batch_status_completing_msg: "이 문서를 추가한 후 프로세스를 중지합니다.",

		add_documents_status_uploading_msg: "${1} 중 ${0} 파일 업로드 중...",
		add_documents_status_adding_msg: "${1} 중 ${0} 파일 추가 중...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "입력 템플리트가 다른 애플리케이션에 구성되어 있고, 항상 문서를 레코드로 선언하도록 구성되어 있습니다. 그러나 웹 클라이언트가 문서를 레코드로 선언하도록 지원하지 않으므로 이 설정은 무시됩니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "입력 템플리트가 다른 애플리케이션에 구성되어 있고, 이 문서를 레코드로 선언할지 여부를 사용자가 결정하도록 구성되어 있습니다. 그러나 웹 클라이언트가 문서를 레코드로 선언하도록 지원하지 않으므로 이 설정은 무시됩니다.",
		no_selection: "&lt;선택&gt;",

		batch_results_dialog_details_label: "세부사항",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "값이 유효하지 않습니다. 값은 GUID(Globally Unique Identifier)여야 합니다(예: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}).",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "값이 유효하지 않습니다. 값은 부동 소수점 숫자여야 합니다(예: 1.2 또는 365).",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "N",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "값이 유효하지 않습니다. 값은 ${0} 형식이어야 합니다(예: ${1})",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "값이 유효하지 않습니다. 값은 10진수 값이어야 합니다(예: 1.2 또는 365).",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "값이 유효하지 않습니다. 값은 정수여야 합니다(예: 5 또는 1349).",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "값이 유효하지 않습니다. 값은 알파벳 문자만 사용할 수 있습니다(예: a-z, A-Z).",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "값이 유효하지 않습니다. 값은 영숫자만 포함할 수 있습니다(예: a-z, A-Z, 0-9).",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "값이 유효하지 않습니다. 값은 숫자만 포함할 수 있습니다(예: 0-9).",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "값이 유효하지 않습니다. 값은 a-z, A-Z, 0-9, [공백] 및 `.,:;?\"/-_&amp;+%*=<>()|!$#^@ 문자만 사용할 수 있습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "값이 유효하지 않습니다. 값은 ${0} 형식의 날짜여야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "값이 유효하지 않습니다. 값은 ${0} 형식의 시간이어야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "값이 유효하지 않습니다. 드롭 다운 메뉴에서 값을 선택하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "값이 유효하지 않습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "값이 유효하지 않습니다. 값은 {0} 형식이어야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "이 값은 필수입니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "값이 너무 깁니다. 이 특성에서 지원하는 최대 길이는 ${0}입니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "값이 너무 짧습니다. 특성에서 지원하는 최소 길이는 ${0}입니다.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "값이 범위를 벗어났습니다. 해당 값은 ${0} - ${1} 사이의 부동 소수점 숫자여야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "값이 범위를 벗어났습니다. 해당 값은 ${0} - ${1} 사이의 10진 값이어야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "값이 범위를 벗어났습니다. 해당 값은 ${0} - ${1} 사이의 정수여야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "값은 ${0} - ${1} 사이의 날짜여야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "값이 범위를 벗어났습니다. 값은 ${0} - ${1} 사이의 날짜여야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "값이 범위를 벗어났습니다. 해당 값은 ${0} - ${1} 사이의 시간이어야 합니다.",
		property_and: "및",

		property_invalidValueOrRequired: "다음 값이 유효하지 않거나 필요합니다. ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "특성",
		edit_properties_dialog_info: "이 항목의 특성을 보거나 편집할 수 있습니다. 적절한 권한이 있는 경우, 항목의 보안을 수정할 수도 있습니다. 그러나 시스템 특성은 변경할 수 없습니다.",
		edit_properties_od_dialog_info: "이 항목의 특성을 보거나 편집할 수 있습니다. 그러나 시스템 특성은 변경할 수 없습니다.",
		system_properties_title: "시스템 특성",
		custom_properties_title: "특성",
		/* Folder collaboration tab */
		box_permission_permission: "권한",
		box_permission_permissions: "권한",
		box_permission_editor: "편집기",
		box_permission_owner: "소유자",
		box_permission_co_owner: "공동 소유자",
		box_permission_viewer_uploader: "뷰어 업로더",
		box_permission_previewer_uploader: "미리보기 프로그램 업로더",
		box_permission_viewer: "뷰어",
		box_permission_previewer: "미리보기 프로그램",
		box_permission_uploader: "업로더",
		box_permission_add: "추가",
		box_permission_upload: "업로드",
		box_permission_download: "다운로드",
		box_permission_preview: "미리보기",
		box_permission_view: "보기",
		box_permission_send_links: "보기 전용 링크 송신",
		box_permission_create_subfolders: "하위 폴더 작성",
		box_permission_create_tasks: "태스크 작성",
		box_permission_add_comments: "주석 추가",
		box_collaboration_invite_placeholder: "초대할 이름, 이메일 또는 그룹 입력",
		box_collaboration_invite_placeholder_non_admin: "초대할 이메일 입력",
		box_collaboration_invalid_email: "유효한 이메일 주소 입력",
		box_collaboration_user_already_present: "이 사용자는 이미 폴더의 협업자입니다.",
		box_collaboration_user_name: "이름",
		box_collaboration_email_address: "이메일 주소",
		box_collaboration_date_added: "추가된 날짜",
		box_collaboration_remove_collaboration: "제거",
		box_collaboration_remove_collaboration_title: "삭제",
		box_collaboration_no_collaborators: "협업자가 없음",
		box_collaboration_change_owner_title: "항목 소유자 변경",
		box_collaboration_change_owner_prompt: "이 협업자를 폴더 소유자로 설정하면 사용자는 편집자가 되고 더 이상 폴더를 소유하지 않습니다. 이 폴더에 직접 추가된 모든 협업자의 루트 폴더에 이 폴더가 표시됩니다. 상위 폴더 레벨 이상에 추가된 모든 협업자는 더 이상 협업자가 아닙니다. 계속하시겠습니까?",
		box_collaboration_remove_self_title: "자신 제거",
		box_collaboration_remove_self_prompt: "협업자인 자신을 제거하시겠습니까? 더 이상 이 폴더에 액세스할 수 없습니다.",
		box_collaboration_user: "사용자",
		box_collaboration_group: "그룹",
		box_managing_users_not_configured: "Box 애플리케이션이 제대로 구성되지 않았으므로 사용자 및 그룹을 검색할 수 없습니다. 이 기능을 사용하려면 관리자에게 문의하여 사용자 및 그룹 관리용으로 Box 애플리케이션을 구성하도록 요청하십시오.",
		duplicate_value_error: "이 특성의 각 값은 고유해야 합니다.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "다음 필드에서 작성하는 변경사항이 선택된 항목 모두에 적용됩니다. 특정 항목에 대해 다른 특성 값을 입력해야 하거나 항목의 보안을 편집해야 하는 경우, 개별적으로 항목의 특성을 편집해야 합니다.",
		multi_edit_properties_class_label: "클래스:",
		multi_edit_properties_items_label: "항목 이름:",
		multi_edit_properties_properties_label: "특성:",
		multi_edit_batch_status_title: "특성 업데이트",
		multi_edit_batch_status_adding_msg: "${1}의 ${0} 항목 업데이트 중...",
		multi_edit_batch_status_verifying_msg: "${1}의 ${0} 항목 확인 중...",
		multi_edit_batch_status_completing_msg: "이 항목을 업데이트한 후 프로세스를 중지합니다.",
		multi_edit_batch_status_validation_completing_msg: "이 항목을 확인한 후 프로세스를 중지합니다.",
		multi_edit_batch_results_status_error: "오류",
		multi_edit_batch_results_status_cancelled: "취소됨",
		multi_edit_batch_results_status_cancelled_msg: "요청이 취소되었기 때문에 항목이 업데이트되지 않았습니다.",
		multi_edit_batch_results_dialog_title: "항목이 업데이트되지 않음",
		multi_edit_batch_results_dialog_context_info: "다음 항목이 업데이트되지 않았습니다. 항목이 업데이트되지 않은 이유에 대한 추가 정보를 보려면 항목 이름을 선택하고 세부사항을 클릭하십시오.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "항목 이름",
		multi_edit_batch_results_dialog_status_col_hdr: "상태",
		multi_edit_batch_results_dialog_message_col_hdr: "메시지",
		multi_edit_batch_status_errors_msg: "오류: ${0}",
		multi_edit_batch_permission_error_text: "특성의 변경사항을 저장할 수 없습니다.",
		multi_edit_invalid_value_error: "이 값은 다른 특성 값에 종속되고 선택한 일부 항목에는 유효하지 않습니다.",
		multi_edit_batch_permission_error_explanation: "권한이 충분하지 않으므로 이 항목의 특성을 수정할 수 없습니다.",
		multi_edit_no_modifiable_properties: "선택된 항목의 특성을 수정할 수 없습니다. 이것은 항목에 읽기 전용 특성이 포함되어 있거나 항목의 이름 또는 제목이 편집 가능할 때 발생합니다. 여러 항목이 선택된 경우, 항목의 이름 또는 제목을 수정할 수 없습니다.",
		multi_edit_mult_classes_dialog_info: "선택한 항목이 다른 저장소에 있거나 다른 클래스에 속합니다. 동일한 클래스 또는 동일한 저장소에 있는 항목만 편집할 수 있습니다. 편집할 항목의 서브세트를 선택하십시오.",
		multi_edit_class_selector_class_heading: "클래스",
		multi_edit_class_selector_entry_template_heading: "입력 템플리트",
		multi_edit_class_selector_repository_heading: "저장소",
		multi_edit_class_selector_items_heading: "항목",
		multi_edit_some_classes_not_displayed: "일부 선택된 항목은 읽기 전용 특성만 포함하거나 편집 특성을 지원하지 않는 저장소에 있으므로 이 목록에 포함되지 않습니다.",
		multi_edit_properties_invalid_msg: "일부 특성 값은 일부 선택된 항목에 유효하지 않습니다.",
		multi_edit_properties_readonly_tooltip_text: "${0}: 이 특성은 읽기 전용이고 수정할 수 없습니다.",
		multi_edit_append_checkbox_label: "추가",
		multi_edit_append_checkbox_tooltip: "기존 값을 바꾸지 않고 새 특성 값을 기존 값에 추가하려는 경우 이 옵션을 선택하십시오.",
		multi_edit_properties_invalid_childcomponent_msg: "${1} 하위 컴포넌트의 ${0} 특성에서 일부 값이 다른 특성에 종속되어 있어서 선택사항에서 더 이상 유효하지 않습니다. ${1} 하위 컴포넌트에서 값을 지우거나 선택한 항목에서 개별적으로 특성을 변경하십시오.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "특성 내보내기",
		export_properties_dialog_info: "내보낼 특성을 선택하고 표시할 순서를 지정하십시오.",
		export_properties_dialog_export_button_label: "내보내기",
		export_properties_dialog_export_raw_values: "원시 값 내보내기",

		/* Properties */
		filter_clear_tooltip: "필터 지우기",
		properties_new_row: "새로 작성",
		properties_requiredClass_document_tooltip: "문서를 선택하십시오. 문서가 ${0} 클래스에 속해야 합니다.",
		properties_requiredClass_folder_tooltip: "폴더를 선택하십시오. 폴더가 ${0} 클래스에 속해야 합니다.",
		properties_dataType_tooltip: "데이터 유형: ${0}",
		properties_maxLength_tooltip: "최대 길이: ",
		properties_minLength_tooltip: "최소 길이: ",
		properties_minValue_tooltip: "최소값: ",
		properties_maxValue_tooltip: "최대값: ",
		properties_format_tooltip: "형식: ",
		properties_description_tooltip: "설명: ",

		properties_type_boolean_tooltip: "부울",
		properties_type_date_tooltip: "날짜",
		properties_type_time_tooltip: "시간",
		properties_type_timestamp_tooltip: "시간소인",
		properties_type_decimal_tooltip: "10진 값",
		properties_type_double_tooltip: "부동 소수점 수",
		properties_type_short_tooltip: "정수",
		properties_type_integer_tooltip: "정수",
		properties_type_long_tooltip: "정수",
		properties_type_string_tooltip: "텍스트 문자열",
		properties_type_string_alpha_tooltip: "알파벳 문자열",
		properties_type_string_alphanum_tooltip: "영숫자 문자열",
		properties_type_string_ext_tooltip: "확장 영숫자 문자열",
		properties_type_string_num_tooltip: "숫자 문자열",
		properties_type_binary_tooltip: "2진",
		properties_type_object_tooltip: "오브젝트",
		properties_type_reference_tooltip: "이 특성은 저장소에 있는 다른 항목을 참조합니다.",
		properties_type_guid_tooltip: "GUID(Globally Unique Identifier)",
		properties_type_group_tooltip: "사용자 및 그룹",
		properties_type_user_tooltip: "사용자",
		properties_type_childComponent_tooltip: "하위 컴포넌트",

		properties_childComponent_minCardinalityOnly_tooltip: "이 특성의 값은 ${0}개 이상이어야 합니다.",
		properties_childComponent_maxCardinalityOnly_tooltip: "이 특성의 값은 ${0}개를 넘을 수 없습니다.",
		properties_childComponent_minMaxCardinality_tooltip: "이 특성의 값은 ${0} - ${1}개여야 합니다.",
		properties_childComponent_noCardinality_tooltip: "이 특성은 값 수에 제한이 없습니다.",

		properties_type_guid_example_tooltip: "예: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "목록에서 값을 선택하십시오.",
		properties_single_select_choice_tooltip: "값을 선택하십시오.",
		properties_multiple_select_typein_tooltip: "하나 이상의 값을 입력하십시오.",
		properties_multiple_select_choice_tooltip: "하나 이상의 값을 선택하십시오.",
		properties_not_selectable_tooltip: "카테고리를 선택할 수 없습니다.",
		properties_none: "없음",
		properties_none_tooltip: "이 특성의 현재 값을 지우려면 <i>없음</i>을 선택하십시오.",
		properties_value_empty: "값 없음",
		properties_value_read_only: "읽기 전용",
		properties_clear_label: "지우기",
		properties_clear_tooltip: "이 필드의 값을 지우면 사용자가 <b>저장</b>을 클릭한 후 저장소에서 해당 값이 지워집니다.",
		properties_box_custom_properties: "사용자 정의 특성",
		properties_box_metadata_name_in_use: "이 이름은 이미 사용되고 있습니다. 사용자 정의 특성의 다른 이름을 입력하십시오.",

		properties_templates: "템플리트",
		properties_add_template: "템플리트 추가",
		properties_remove_template: "제거",
		/* Checkin Document Dialog */
		checkin_dialog_title: "체크인",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "체크인",
		checkin_cancel_label: "취소",
		checkin_file_name_label: "파일 이름",
		checkin_document_status_title: "문서 체크인",
		checkin_document_status_uploading_msg: "파일 업로드 중...",
		checkin_document_status_checkingin_msg: "파일 체크인 중...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "교정 모드 선택",
		viewer_redaction_new_document_confirmation_question: "교정을 새 문서 또는 로컬 파일로 저장하시겠습니까?",
		viewer_redaction_new_version_confirmation_question: "교정을 새 버전으로 저장하시겠습니까?",
		viewer_redaction_new_version_confirmation_question_never: "교정을 새 컨텐츠로 저장하시겠습니까?",		
		viewer_redaction_new_document_button: "예",
		viewer_redaction_new_document_cancel_button: "아니오",
		viewer_redaction_add_document_confirmation_question: "교정을 새 문서, 새 버전 또는 로컬 파일로 저장하시겠습니까?",
		viewer_redaction_add_document_confirmation_question_version_never: "교정을 새 문서, 새 컨텐츠 또는 로컬 파일로 저장하시겠습니까?",
		viewer_redaction_add_document_button: "새 문서",
		viewer_redaction_add_new_version_button: "새 버전",
		viewer_redaction_add_new_version_button_version_never: "새 컨텐츠",
		viewer_redaction_add_local_file_button: "로컬 파일",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "교정 모드 선택",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "이 문서를 저장소에 추가하는 데 사용된 입력 템플리트를 찾을 수 없습니다. 입력 템플리트를 사용하지 않고 문서가 저장소에 체크인됩니다.",
		property_entry_template_not_retrieved_warning: "이 문서를 저장소에 추가하는 데 사용된 입력 템플리트를 찾을 수 없습니다. 입력 템플리트를 사용하지 않고 문서 특성이 표시됩니다.",
		multi_edit_entry_template_not_found_name: "[찾을 수 없음]",
		multi_edit_entry_template_not_retrieved_warning: "이 항목을 저장소에 추가하는 데 사용된 입력 템플리트를 찾을 수 없습니다. 입력 템플리트를 사용하지 않고 항목 특성이 수정됩니다.",
		checkin_major_version_hover: "문서 버전 번호가 1만큼 증분되고 문서 상태가 릴리스됨으로 설정됩니다. 옵션을 선택하지 않으면 문서를 릴리스할 준비가 되지 않아서 부 버전으로 체크인됩니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "문서가 체크아웃되지 않았으므로 체크인할 수 없습니다.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "서버의 사용자 ID 또는 비밀번호가 유효하지 않습니다.",
		error_bad_userid_password_userResponse: "사용자 ID와 비밀번호를 올바르게 입력했는지 확인하십시오.",
		error_bad_userid_password_adminResponse: "다음과 같은 오류가 발생했습니다. ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "다음 URL을 사용하여 웹 클라이언트에 연결을 설정할 수 없음: ${0}.",
		http_send_error_explanation: "이 오류는 웹 애플리케이션 서버의 구성 문제점이나 웹 클라이언트 애플리케이션 문제점으로 인해 발생할 수 있습니다.",
		http_send_error_userResponse: "다시 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 이 오류를 보고하십시오.",
		http_send_error_adminResponse: "다음과 같은 HTTP 오류가 발생했습니다. ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "다음 URL을 사용하여 웹 클라이언트에 연결을 설정할 수 없음: ${0}.",
		http_error_explanation: "방화벽에 대해 인증해야 할 수도 있습니다. 그렇지 않을 경우 네트워크 문제점으로 인해 웹 애플리케이션 서버가 실행되지 않거나 서버에 도달하지 못할 수 있습니다.",
		http_error_userResponse: "방화벽에 대해 인증해야 하는 경우 인증 후에 다시 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 이 오류를 보고하십시오.",
		http_error_adminResponse: "다음과 같은 HTTP 오류가 발생했습니다. ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "다음 URL을 사용하여 웹 클라이언트에 연결을 설정할 수 없음: ${0}.",
		http_response_bad_explanation: "이 오류는 웹 애플리케이션 서버의 구성 문제점이나 웹 클라이언트 문제점으로 인해 발생할 수 있습니다.",
		http_response_bad_userResponse: "다시 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 이 오류를 보고하십시오.",
		http_response_bad_adminResponse: "다음과 같은 오류가 발생했습니다. ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "제목 없음",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "이메일 애플릿을 시작할 수 없습니다.",
		email_applet_init_failed_explanation: "이메일 클라이언트가 올바로 설치 및 구성되지 않거나 지원되는 버전의 JRE(Java Runtime Environment)가 워크스테이션에 설치되지 않은 경우 이 문제점이 발생할 수 있습니다.",
		email_applet_init_failed_userResponse: "문제점을 해결하려면 다음을 수행하십시오.<ul><li>이메일 애플리케이션이 설치되어 있으며 워크스테이션에서 기본 이메일 클라이언트로 설정되어 있는지 확인하십시오.</li><li>명령 프롬프트에 java -version 명령을 입력하여 지원되는 버전의 JRE가 워크스테이션에 설치되어 있는지 확인하십시오.</li></ul><p>지원되는 JRE 버전 목록은 IBM Software Support 사이트의 <i>IBM Content Navigator의 하드웨어 및 소프트웨어 전제조건</i> 문서에 포함되어 있습니다.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "필수 DLL 파일을 로드할 수 없으므로 이메일 애플리케이션을 시작할 수 없습니다.",
		email_applet_JNI_LOAD_FAILED_explanation: "필수 WCEmailAppletJNI.dll 파일을 로드할 수 없습니다. 워크스테이션의 임시 디렉토리가 가득 찼을 수 있습니다.",
		email_applet_JNI_LOAD_FAILED_userResponse: "임시 디렉토리의 공간이 충분한지 확인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오. 기본적으로, WCEmailAppletJNI.dll 파일은 웹 브라우저 설정에 지정된 임시 디렉토리에 로드됩니다.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "이메일 애플릿에서 임시 파일을 작성할 수 없으므로 이메일 애플리케이션을 시작할 수 없습니다.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "워크스테이션의 임시 디렉토리가 가득 찼을 수 있습니다.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "임시 디렉토리의 공간이 충분한지 확인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "이메일 애플릿에서 임시 디렉토리에 액세스할 수 없으므로 이메일 애플리케이션을 시작할 수 없습니다.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "워크스테이션의 임시 디렉토리가 가득 찼거나 임시 디렉토리에 쓸 수 있는 적절한 액세스 권한이 없을 수도 있습니다.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "임시 디렉토리에 충분한 공간이 있는지 확인하고 임시 디렉토리에 대한 쓰기 권한이 있는지 확인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 시스템 관리자에게 문의하십시오.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "이메일 애플릿에서 임시 파일을 삭제할 수 없습니다.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "다른 애플리케이션에서 파일을 사용 중이거나, 워크스테이션에 파일이 존재하지 않을 수 있습니다.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "다른 애플리케이션에서 파일을 사용 중인 경우 애플리케이션을 닫으십시오. 파일이 로컬 파일 시스템에 있으면 워크스테이션의 임시 디렉토리에서 ${0} 파일을 제거하십시오.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "문서에 대한 링크를 작성할 수 없습니다.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "저장소에서 유효하지 않은 형식의 URL을 리턴했습니다.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "모든 탭과 세션을 비롯하여 웹 브라우저를 닫고 다시 로그인하십시오. 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 IBM Software Support에 문의하십시오.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "이메일 애플릿에서 파일을 이메일에 첨부할 수 없습니다.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "저장소에서 유효하지 않은 형식의 문서 URL을 리턴했습니다.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "모든 탭과 세션을 비롯하여 웹 브라우저를 닫고 다시 로그인하십시오. 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 IBM Software Support에 문의하십시오.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "첨부를 작성할 수 없습니다.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "이메일 애플릿에서 문서에 대한 URL을 읽을 수 없습니다.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "모든 탭과 세션을 비롯하여 웹 브라우저를 닫고 다시 로그인하십시오. 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 IBM Software Support에 문의하십시오.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "저장소에서 문서를 찾을 수 없습니다.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "세션이 제한시간을 초과했거나, 저장소 또는 웹 애플리케이션 서버가 실행 중이지 않거나, 웹 클라이언트 구성에 문제점이 있을 수 있습니다.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "로그인하여 이메일로 문서를 다시 발송하십시오. 문제점이 지속되면 시스템 관리자에게 문의하여 저장소 오류 로그를 확인하십시오.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "웹 클라이언트를 구성하여 AFP 문서를 PDF와 같이 다른 형식으로 변환했다면 문서를 첨부 파일로 전송하기 전에 변환이 올바르게 구성되도록 하십시오.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "문서를 PDF로 변환할 수 없습니다.",
		email_applet_CONVERT_DOC_FAILED_explanation: "문서를 PDF로 변환하는 데 사용되는 도구가 파일 유형을 지원하지 않습니다.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "이 페이지를 닫고 문서를 PDF로 변환하지 않고 다시 이메일로 보내십시오.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "이메일이 작성되지 않았습니다.",
		email_applet_MAPI_USER_ABORT_explanation: "이메일 애플리케이션을 열어 올바르게 작동되고 있는지 확인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 시스템 관리자에게 운영 체제 이벤트 로그를 검토하도록 문의하십시오.",
		email_applet_MAPI_USER_ABORT_userResponse: "이메일 애플리케이션을 닫으려는 경우, 추가적인 조치가 필요하지 않습니다. 이메일을 발송하려면 이메일 애플리케이션에 로그인하여 웹 클라이언트에서 문서를 다시 발송하십시오.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "이메일을 작성할 수 없습니다.",
		email_applet_MAPI_FAILURE_explanation: "이메일 클라이언트가 열릴 수 없거나 로그인하지 않았을 수 있습니다.",
		email_applet_MAPI_FAILURE_userResponse: "이메일 애플리케이션을 열어 올바르게 작동되고 있는지 확인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 시스템 관리자에게 운영 체제 이벤트 로그를 검토하도록 문의하십시오.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "이메일을 작성할 수 없습니다.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "이메일 클라이언트에 로그인하지 않았습니다. 이메일 클라이언트가 열려 있어야 하며 웹 클라이언트에서 메시지를 보내려면 로그인해야 합니다.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "이메일 클라이언트를 열고 로그인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "워크스테이션에 임시 파일을 작성할 수 없으므로 이메일을 작성할 수 없습니다.",
		email_applet_MAPI_DISK_FULL_explanation: "워크스테이션의 임시 디렉토리가 가득 찼을 수 있습니다.",
		email_applet_MAPI_DISK_FULL_userResponse: "임시 디렉토리의 공간이 충분한지 확인하십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "시스템 메모리가 부족하여 이메일을 작성할 수 없습니다.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "너무 많은 애플리케이션이 열려 있을 수 있습니다.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "사용하지 않는 애플리케이션을 닫고 웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI 액세스가 거부되었습니다.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "이메일 애플리케이션에서 MAPI(Messaging Application Programming Interface)를 사용 가능하도록 설정하지 않았거나 MAPI가 지원되지 않을 수 있습니다. MAPI는 웹 클라이언트와 이메일 애플리케이션이 통신할 수 있게 해주는 메시징 프로토콜입니다.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "시스템 관리자에게 문의하십시오.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "이메일 애플리케이션에 MAPI 액세스가 설정되어 있으며 올바르게 구성되어 있는지 확인하십시오. 문제점이 지속되면 IBM Software Support에 문의하십시오.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "항목에 대한 링크나 첨부를 작성할 수 없습니다.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "너무 많은 웹 브라우저 세션이 열려 있을 수 있습니다.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "사용하지 않는 웹 브라우저 세션을 닫으십시오. 그런 다음 웹 클라이언트에서 문서를 다시 보내십시오. 문제점이 지속되면 시스템 관리자에게 문의하십시오.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "이메일을 보낼 수 없습니다.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "보내려는 첨부 파일의 수가 너무 많습니다.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "파일 수를 줄인 후 웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "이메일을 보낼 수 없습니다.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "이메일을 너무 많은 수신인에게 발송했습니다.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "이메일의 수신인 수를 줄인 후 발송하십시오.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "첨부를 작성할 수 없습니다.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "첨부를 작성하기 전에 일부 필수 임시 파일이 삭제되었을 수 있습니다. 이 오류는 이메일이 전송되기 전에 브라우저 캐시가 지워진 경우에 발생할 수 있습니다.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "첨부를 작성할 수 없습니다.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "첨부를 작성하기 전에 일부 필수 임시 파일이 삭제되었을 수 있습니다. 이 오류는 이메일이 전송되기 전에 브라우저 캐시가 지워진 경우에 발생할 수 있습니다.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "이메일 애플리케이션에서 첨부를 작성할 수 없습니다.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "지정된 수신인에게 이메일을 보낼 수 없습니다.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "수신인이 주소록에 존재하지 않을 수 있습니다.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "수신인의 이름을 확인한 후 문서를 다시 보내십시오.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "지정된 수신인에게 이메일을 보낼 수 없습니다.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "이메일 주소 형식이 올바르지 않습니다.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "유효한 이메일 주소를 입력했는지 확인한 후 문서를 다시 발송하십시오.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_NO_MESSAGES_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "이메일을 보낼 수 없습니다.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "이메일이 너무 깁니다.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "이메일의 텍스트를 줄인 후 이메일을 다시 발송하십시오.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "이메일을 작성할 수 없습니다.",
		email_applet_MAPI_INVALID_SESSION_explanation: "이메일 작성을 시도할 때 이메일 클라이언트가 실패했습니다.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "이메일 클라이언트를 다시 시작하고 웹 클라이언트에서 문서를 다시 발송하십시오.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "이메일이 올바르게 작성되지 않았습니다.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "지정된 수신인에게 이메일을 보낼 수 없습니다.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "이메일 주소 형식이 올바르지 않습니다.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "올바른 이메일 주소를 입력했는지 확인한 후 문서를 다시 발송하십시오.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "요청된 조치를 이메일 클라이언트가 수행할 수 없습니다.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "이메일 애플리케이션이 예상치 못한 오류를 리턴했습니다.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "웹 클라이언트에서 문서를 다시 보내십시오.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "특성 중 하나의 필수 값 수가 누락되었습니다.",
		error_property_cardinality_explanation: "일부 특성에는 최소 및 최대 값 수가 있습니다.",
		error_property_cardinality_userResponse: "풍선 도움말을 사용하여 최소 값 수가 필요한 특성을 판별하십시오. 그런 다음 최소 값 수를 지정하고 다시 시도하십시오.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "파일 이름을 지정해야 합니다.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "파일 이름을 지정하고 다시 시도하십시오.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} 플러그인에 오류가 있습니다.",
		plugin_error_explanation: "${0} 플러그인에 대한 JavaScript를 평가하는 중에 오류가 발생했습니다. 웹 클라이언트를 계속 사용할 경우, 추가적인 오류가 발생할 수 있습니다.",
		plugin_error_userResponse: "시스템 관리자에게 문의하십시오.",
		plugin_error_adminResponse: "플러그인에 플러그인 제공자가 해결해야 하는 문제점이 있습니다. 플러그인에 문제점이 해결될 때까지 웹 클라이언트 구성에서 플러그인을 제거하는 것이 좋습니다.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "입력 템플리트를 열 수 없습니다.",
		open_old_format_entry_template_error_explanation: "입력 템플리트가 웹 클라이언트에서 지원되지 않는 이전 형식을 사용합니다.",
		open_old_format_entry_template_error_userResponse: "시스템 관리자에게 입력 템플리트를 업데이트하도록 요청하십시오.",
		open_old_format_entry_template_error_adminResponse: "Application Engine 또는 Workplace XT 입력 템플리트 디자이너를 사용하여 업데이트된 입력 템플리트 버전을 저장하십시오.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "입력 템플리트를 열 수 없습니다.",
		open_custom_object_entry_template_error_explanation: "웹 클라이언트가 다음 입력 템플리트 유형을 지원하지 않습니다: 사용자 정의 오브젝트 입력 템플리트",
		open_custom_object_entry_template_error_userResponse: "다른 입력 템플리트를 여십시오.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "eforms 오브젝트를 열 수 없습니다.",
		open_forms_object_error_explanation: "웹 클라이언트가 다음 eforms 오브젝트 유형을 지원하지 않습니다: 양식 템플리트, 양식 데이터, 문서 정책 및 워크플로우 정책",
		open_forms_object_error_userResponse: "다른 문서를 여십시오.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "입력 템플리트 ${0}을(를) 사용할 수 없습니다.",
		entry_template_folder_restricted_error_explanation: "입력 템플리트는 ${1} 폴더에 항목을 추가하며, 해당 폴더에 항목을 추가할 수 있는 권한이 없습니다.",
		entry_template_folder_restricted_error_userResponse: "다른 입력 템플리트를 선택하거나, 시스템 관리자에게 ${1} 폴더에 항목을 추가할 수 있는 권한을 부여하도록 요청하십시오.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "입력 템플리트를 열 수 없습니다.",
		open_records_entry_template_error_explanation: "웹 클라이언트가 다음 입력 템플리트 유형을 지원하지 않습니다: 레코드로 선언 입력 템플리트",
		open_records_entry_template_error_userResponse: "다른 입력 템플리트를 여십시오.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "워크플로우를 열 수 없습니다.",
		open_workflow_error_explanation: "웹 클라이언트가 워크플로우 열기를 지원하지 않습니다.",
		open_workflow_error_userResponse: "다른 문서를 여십시오.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "문서를 열 수 없습니다.",
		viewer_unable_to_view_error_explanation: "이 유형의 문서에 대해 구성된 뷰어가 없거나 구성된 뷰어가 사용자 시스템과 호환되지 않습니다.",
		viewer_unable_to_view_error_userResponse: "시스템 관리자에게 이 유형의 문서에 맞게 뷰어를 구성하도록 요청하고, 구성된 뷰어가 사용자 시스템에서 작동하는지 확인하십시오.",
		viewer_unable_to_view_error_adminResponse: "관리 도구를 사용하여 이 문서 유형에 대해 뷰어를 구성하십시오.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "검색을 열 수 없습니다.",
		search_cannot_open_error_explanation: "검색 기능이 이 데스크탑에 대해 구성되지 않았습니다.",
		search_cannot_open_error_userResponse: "시스템 관리자에게 검색 기능을 포함하는 데스크탑에 액세스 권한이 있는지 또는 이 데스크탑이 검색 기능을 포함하도록 업데이트될 수 있는지 요청하십시오.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "문서가 로드되지 않았습니다.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional 뷰어에서 문서를 열 수 없습니다.",
		viewer_document_load_failed_error_userResponse: "자세한 정보는 뷰어에 표시되는 오류 메시지를 참조하십시오.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "문서를 볼 수 없습니다.",
		viewer_session_expired_explanation: "문서 컨텐츠를 검색할 수 없습니다.",
		viewer_session_expired_userResponse: "다시 로그인하십시오. 문제가 지속되는 경우 애플리케이션 서버가 실행 중이지 않을 수 있습니다. 시스템 관리자에게 요청하여 IBM Content Navigator 로그를 확인하거나 서버를 다시 시작하십시오.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "문서를 볼 수 없습니다.",
		ajaxViewer_getPage_failed_explanation: "페이지 컨텐츠를 검색하는 동안 AJAX 뷰어에서 오류 응답을 수신했습니다. 애플리케이션 서버가 실행 중이지 않을 수 있습니다.",
		ajaxViewer_getPage_failed_userResponse: "웹 브라우저를 닫고 다시 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 요청하여 웹 애플리케이션 서버 로그 파일을 검토하거나 서버를 다시 시작하십시오.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "워크스테이션에서 JRE(Java Runtime Environment)를 찾을 수 없습니다.",
		viewer_java_plugin_not_found_explanation: "플러그인이 없는지 또는 올바른 버전의 JER가 설치되지 않았는지 확인하십시오.",
		viewer_java_plugin_not_found_userResponse: "JRE가 설치되어 있는지 확인하십시오. 예를 들어 명령 프롬프트에 Java -version 명령을 입력하십시오. JRE가 설치되지 않았거나 잘못된 버전 레벨이 설치되어 있는 경우, 적절한 버전의 JRE를 설치하십시오. 지원되는 버전의 목록은 IBM Software Support 사이트의 <i>IBM Content Navigator의 하드웨어 및 소프트웨어 전제조건</i> 문서에 나와 있습니다.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "사용자의 웹 브라우저에서 문서를 표시할 수 없습니다.",
		viewer_pdf_plugin_not_found_explanation: "웹 브라우저에서 PDF 문서를 표시하는 데 사용되는 플러그인을 찾을 수 없습니다.",
		viewer_pdf_plugin_not_found_userResponse: "PDF 파일이 뷰어 창에 표시되는 대신 워크스테이션에 다운로드됩니다.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "다음 항목을 저장소에 추가할 수 없습니다: ${0}.",
		add_document_single_item_error_explanation: "이 오류는 다음 원인 중 하나로 인해 발생할 수 있습니다." + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>이동하거나 삭제한 문서를 추가하려고 합니다.</li>" + "<li>이름을 바꾼 문서를 추가하려고 합니다.</li>" + "<li>손상된 문서를 추가하려고 합니다.</li>" + "<li>다른 애플리케이션에서 연 문서를 추가하려고 합니다.</li>" + "<li>저장소에 폴더를 추가하려고 합니다.</li>" + "<li>운영 체제에서 문서에 액세스할 수 있는 적절한 권한을 갖고 있지 않습니다.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "문제를 해결하기 위한 적절한 조치를 수행하십시오." + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>문서를 이동했거나 이름을 바꾼 경우 파일 시스템에서 문서를 찾아서 다시 추가해 보십시오.</li>" + "<li>문서를 다른 애플리케이션에서 연 경우 닫고 다시 추가해 보십시오.</li>" + "</ul>" + "<br>폴더를 저장소에 추가할 수 없습니다.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "다음 ${0} 항목을 저장소에 추가할 수 없습니다: ${1}",
		add_document_multiple_items_error_explanation: "항목 중 하나의 문제점으로 항목을 저장소에 추가하지 못합니다. 이 오류는 다음 원인 중 하나로 인해 발생할 수 있습니다." + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>이동하거나 삭제한 문서를 추가하려고 합니다.</li>" + "<li>이름을 바꾼 문서를 추가하려고 합니다.</li>" + "<li>손상된 문서를 추가하려고 합니다.</li>" + "<li>다른 애플리케이션에서 연 문서를 추가하려고 합니다.</li>" + "<li>저장소에 폴더를 추가하려고 합니다.</li>" + "<li>운영 체제에서 문서에 액세스할 수 있는 적절한 권한을 갖고 있지 않습니다.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "문제를 해결하기 위한 적절한 조치를 수행하십시오." + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>문서를 이동했거나 이름을 바꾼 경우 파일 시스템에서 문서를 찾아서 항목을 다시 추가해 보십시오.</li>" + "<li>문서를 다른 애플리케이션에서 연 경우 항목을 닫고 다시 추가해 보십시오.</li>" + "<li>문서가 삭제되거나 손상된 경우 항목을 선택 취소하고 나머지 항목을 추가해 보십시오.</li>" + "</ul>" + "<br>폴더를 저장소에 추가할 수 없습니다.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "이 위치에서 항목을 끌어서 놓을 수 없습니다.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "eforms 오브젝트를 열 수 없습니다.",
		open_forms_work_object_error_explanation: "웹 클라이언트가 다음 eForms 오브젝트 유형을 지원하지 않습니다: 워크플로우 정책",
		open_forms_work_object_error_userResponse: "다른 문서를 여십시오.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "문서를 열 수 없습니다.",
		viewer_privilege_to_view_error_explanation: "문서를 볼 수 있는 적절한 권한이 없습니다.",
		viewer_privilege_to_view_error_userResponse: "문서 소유자 또는 시스템 관리자에게 문의하여 문서를 볼 수 있는 적절한 권한을 받으십시오.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "항목을 저장소에 추가할 수 없습니다.",
		add_document_too_many_items_error_explanation: "한 번에 최대 ${0}개의 항목을 추가할 수 있습니다. ${1}개의 항목을 추가하려고 합니다.",
		add_document_too_many_items_error_userResponse: "일부 항목을 목록에서 제거한 후 항목을 다시 추가하십시오. 또한 시스템 관리자에게 문의하여 한 번에 이 데스크탑에 추가할 수 있는 문서의 최대 수를 늘릴 수 있습니다.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "다음 URL을 사용하여 웹 클라이언트에 연결을 설정할 수 없음: ${0}.",
		http_ltpa_expired_explanation: "찾아보기 세션에 연결된 LTPA 키가 만료되었습니다.",
		http_ltpa_expired_userResponse: "웹 브라우저를 다시 시작하고 다시 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 오류(${1})를 보고하십시오.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "${0} 폴더에 문서를 추가할 수 없습니다.",
		dnd_no_privilege_error_explanation: "폴더에 대한 권한이 해당 폴더에 어떠한 문서도 추가할 수 없도록 방지합니다.",
		dnd_no_privilege_error_userResponse: "문서를 다른 폴더에 추가하십시오.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "항목을 수정할 수 없습니다.",
		modify_document_too_many_items_error_explanation: "한 번에 최대 ${0}개의 항목을 수정할 수 있습니다. ${1}개의 항목을 수정하려고 합니다.",
		modify_document_too_many_items_error_userResponse: "더 적은 항목을 선택하여 다시 수정하십시오. 또한 시스템 관리자에게 문의하여 이 데스크탑에서 한 번에 수정할 수 있는 항목의 최대 수를 늘릴 수 있습니다.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "${0} 클래스를 사용할 수 없습니다.",
		add_document_multiple_unique_values_error_explanation: "${0} 클래스에 각 문서마다 고유한 값이 필요한 하나 이상의 특성이 있습니다. 여러 문서를 추가하면 모든 문서에서 동일한 값을 사용합니다.",
		add_document_multiple_unique_values_error_userResponse: "다른 클래스를 선택하거나 별도로 문서를 추가하십시오.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "입력 템플리트 ${0}을(를) 사용할 수 없습니다.",
		add_document_multiple_unique_values_entry_template_error_explanation: "${0} 입력 템플리트에서 사용자가 ${1} 클래스에 문서를 추가해야 합니다. 그러나 ${1} 클래스에는 각 문서마다 고유한 값이 필요한 하나 이상의 특성이 있습니다. 여러 문서를 추가하면 모든 문서에서 동일한 값을 사용합니다.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "다른 입력 템플리트를 선택하거나 별도로 문서를 추가하십시오.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "입력 템플리트 ${0}을(를) 사용할 수 없습니다.",
		entry_template_class_restricted_error_explanation: "입력 템플리트는 ${1} 클래스를 사용하여 항목을 추가하며 해당 클래스를 사용하여 항목을 추가할 적절한 권한이 없습니다.",
		entry_template_class_restricted_error_userResponse: "다른 입력 템플리트를 선택하거나 시스템 관리자에게 ${1} 클래스를 사용하여 항목을 추가할 적절한 권한을 부여하도록 요청하십시오.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "작업 항목을 다른 사용자에게 재지정할 수 없습니다.",
		process_reassign_error_explanation: "워크플로우에서 이 조치를 금지합니다.",
		process_reassign_error_userResponse: "작업 항목을 열고 작업 항목의 현재 단계를 완료할 수 있습니다. 이 문제에 대한 자세한 정보를 보려면 작업 항목을 재지정할 수 있음을 확인하도록 항목의 소유자에게 요청하십시오.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "사용자 정의 조치(${0})를 로드할 수 없습니다.",
		customaction_loadurl_error_explanation: "사용자 정의 조치가 액세스 가능한 위치에 없습니다. 사용자 정의 조치의 현재 URL은 ${1}입니다.",
		customaction_loadurl_error_userResponse: "관리자에게 사용자 정의 조치를 액세스 가능한 위치로 이동하도록 요청하십시오.",
		customaction_loadurl_error_adminResponse: "사용자 정의 조치를 정의한 JSP 파일은 eClient 웹 애플리케이션 또는 IBM Content Navigator 웹 애플리케이션의 일부로 제공되어야 합니다.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "다음 기능을 찾을 수 없습니다. ${0}",
		feature_invalid_explanation: "지정된 데스크탑에서 기능을 사용할 수 없거나 기능 이름이 잘못 표기된 경우 이 문제점이 발생할 수 있습니다.",
		feature_invalid_userResponse: "확인을 클릭하면 이 데스크탑의 기본 기능으로 경로가 재지정됩니다. 시스템 관리자에게 문의하여 이 문제점을 보고하십시오.",
		feature_invalid_adminResponse: "기능이 데스크탑에서 사용 가능해야 하는 경우 관리 도구에서 데스크탑 구성을 업데이트하십시오. 기능이 데스크탑에 포함되지 않아야 하거나 잘못 표기된 경우, 이 기능에 대한 URL을 작성한 애플리케이션 개발자와 작업하여 URL을 업데이트하십시오.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "${0} 검색을 열 수 없습니다.",
		search_unsupportedTeamspaceSearch_error_explanation: "이 검색을 열려면 팀 작업영역에 있어야 합니다.",
		search_unsupportedTeamspaceSearch_error_userResponse: "다른 검색을 선택하십시오.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "다음 파일을 가져올 수 없습니다. ${0}",
		wrong_import_file_type_error_explanation: "파일은 특성 파일이어야 합니다.",
		wrong_import_file_type_error_userResponse: "관리 도구에서 내보낸 특성 파일을 선택하십시오.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "${0} 저장소를 ${1} 데스크탑에서 찾을 수 없습니다.",
		browse_repository_not_found_error_explanation: "저장소가 데스크탑에 있어야 하며 URL 매개변수에 지정될 때 찾아보기 기능에 대해 사용으로 설정해야 합니다.",
		browse_repository_not_found_error_userResponse: "URL에 지정된 저장소 ID가 올바르고 저장소가 ${1} 데스크탑에 추가되었으며 저장소에 대한 찾아보기 기능이 사용으로 설정되었는지 확인하십시오.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "${0} 저장소가 ${1} 데스크탑의 찾아보기 기능에 대해 사용으로 설정되지 않았습니다.",
		browse_repository_not_enabled_error_explanation: "찾아보기 기능이 URL 매개변수에 지정된 경우 저장소를 찾아보기 기능에 대해 사용으로 설정해야 합니다.",
		browse_repository_not_enabled_error_userResponse: "${1} 데스크탑에서 ${0} 저장소에 대해 찾아보기 기능을 사용으로 설정하십시오.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "링크에 유효하지 않은 기준이 있으므로 검색을 완료할 수 없습니다.",
		invalid_xt_stored_search_criteria_error_explanation: "다음 값이 유효하지 않습니다. ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "시스템 관리자에게 업데이트된 링크를 제공하도록 요청하십시오.",
		invalid_xt_stored_search_criteria_error_adminResponse: "URL에서 적합한 이름-값 쌍을 편집하십시오. 특성에 대해 유효한 값을 모르는 경우 FileNet Workplace XT 검색 디자이너에서 저장된 검색을 열어서 유효한 값을 판별하십시오.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "교차 저장소 검색을 열 수 없습니다.",
		unified_search_invalid_fixed_value_error_explanation: "교차 저장소 검색에 유효하지 않은 기준이 있습니다. 기준에 맵핑의 다른 특성과 호환되지 않는 고정 값이 있는 경우 이 문제가 발생할 수 있습니다. 예를 들어, 고정 값이 문자열이지만 맵핑의 다른 특성이 정수인 경우 이 문제가 발생할 수 있습니다.",
		unified_search_invalid_fixed_value_error_userResponse: "검색을 편집할 수 있는 적합한 권한이 있는 경우 유효하지 않은 기준을 제거하고 검색을 다시 저장하십시오. 검색을 편집할 수 있는 권한이 없는 경우, 검색 소유자나 시스템 관리자에게 검색을 다시 저장하도록 요청하십시오.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "사용자 요청을 완료할 수 없습니다.",
		launch_action_invalid_json_error_explanation: "웹 클라이언트에 전달된 데이터가 유효하지 않습니다.",
		launch_action_invalid_json_error_userResponse: "시스템 관리자에게 이 문제점이 발생했을 때 사용 중이던 애플리케이션을 알리십시오.",
		launch_action_invalid_json_error_adminResponse: "클라이언트 애플리케이션이 웹 클라이언트에 유효한 JSON 오브젝트를 송신하지 않았습니다. 추가 지원에 대해서는 IBM Software Support에 문의하십시오.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "사용자 요청을 완료할 수 없습니다.",
		launch_action_not_found_error_explanation: "${0} 조치가 ${1} 데스크탑의 메뉴에 구성되지 않았습니다.",
		launch_action_not_found_error_userResponse: "시스템 관리자에게 ${0} 조치가 포함된 메뉴를 사용하도록 ${1} 데스크탑을 구성하거나 ${0} 조치를 포함하는 데스크탑에 사용자를 지정하도록 요청하십시오.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "사용자 요청을 완료할 수 없습니다.",
		launch_action_repository_not_found_error_explanation: "${0} 저장소가 ${1} 데스크탑과 연관되어 있지 않습니다.",
		launch_action_repository_not_found_error_userResponse: "시스템 관리자에게 ${0} 저장소와 ${1} 데스크탑을 연관시키거나 ${0} 저장소를 포함하는 데스크탑에 사용자를 지정하도록 요청하십시오.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "팀 작업영역을 열 수 없습니다.",
		teamspace_cannot_open_error_explanation: "팀 작업영역 기능이 이 데스크탑에 구성되지 않았습니다.",
		teamspace_cannot_open_error_userResponse: "팀 작업영역 기능을 포함하는 데스크탑에 대한 액세스 권한이 있는지 또는 팀 작업영역 기능을 포함하도록 이 데스크탑을 업데이트할 수 있는지 여부를 시스템 관리자에게 문의하십시오.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "교정된 컨텐츠를 체크인하는 중에 오류가 발생했습니다.",
		viewer_redaction_checkin_failed_explanation: "교정된 컨텐츠를 체크인하는 중에 뷰어에서 오류 응답을 수신했습니다.",
		viewer_redaction_checkin_failed_userResponse: "시스템 관리자에게 문의하여 웹 애플리케이션 서버 로그 파일을 검토하십시오.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "이 저장소에 문서를 추가할 수 없습니다.",
		add_document_odserver_odwek_version_od_error_explanation: "IBM Content Manager OnDemand 서버 또는 ODWEK의 현재 버전이 Content Manager OnDemand 저장소에 문서 추가를 지원하는 데 필요한 최소 레벨 이하입니다.",
		add_document_odserver_odwek_version_od_error_userResponse: "관리자에게 Content Manager OnDemand 저장소에 문서 추가를 지원하는 데 필요한 Content Manager OnDemand Server 및 ODWEK의 버전을 확인하도록 하십시오.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "항목을 저장소에 추가할 수 없습니다.",
		add_document_too_many_items_od_error_explanation: "IBM Content Manager OnDemand 저장소의 경우 한 번에 하나의 항목만 추가할 수 있습니다.",
		add_document_too_many_items_od_error_userResponse: "목록에서 항목 일부를 제거한 후 한 번에 하나씩 항목을 다시 추가하십시오.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "항목을 저장소에 추가할 수 없습니다.",
		add_document_filesize_empty_od_error_explanation: "IBM Content Manager OnDemand 저장소에 빈 파일을 추가할 수 없습니다.",
		add_document_filesize_empty_od_error_userResponse: "파일에 컨텐츠를 추가하고 파일을 다시 추가하거나 다른 항목을 추가하십시오.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "교차 저장소 검색을 열 수 없습니다.",
		unified_search_repository_not_found_error_explanation: "교차 저장소 검색에 하나 이상의 유효하지 않은 저장소가 포함되어 있습니다. 이 문제는 검색에 포함된 저장소가 애플리케이션에서 삭제되었거나 현재 데스크탑에서 제거된 경우에 발생할 수 있습니다.",
		unified_search_repository_not_found_error_userResponse: "검색을 편집할 수 있는 권한이 있는 경우, 검색을 다시 저장하십시오. 검색을 저장하면, 웹 클라이언트가 검색에 유효하지 않은 저장소를 제거합니다. 검색을 편집할 수 있는 권한이 없는 경우, 검색 소유자나 시스템 관리자에게 검색을 다시 저장하도록 요청하십시오.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "새 문서를 작성할 수 없습니다.",
		edit_document_using_office_online_error: "문서를 열 수 없습니다.",
		edit_document_using_office_online_error_explanation: "Microsoft Office Online Server URL이 구성되지 않았습니다.",
		edit_document_using_office_online_error_userResponse: "Office Online을 사용하기 전에 관리자가 먼저 저장소에서 Office Online Server를 사용으로 설정하고 Microsoft Office Online Server URL을 지정해야 합니다.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Microsoft Office Online에서 문서를 열 수 없습니다.",
		edit_document_using_office_online_error_userResponse1: "MS Office Online Server Integration을 업데이트하려면 관리자에게 요청하십시오.<br><br> 사용자가 Microsoft Office Online에서 이 문서에 액세스해야 하는 경우, 저장소의 편집 통합 페이지로 이동하여 Office Online 지원을 위해 수정할 클래스 목록에서 해당 클래스를 포함하도록 MS Office Online Server Integration을 업데이트하십시오. ",		
		browser_not_support_this_viewer: "구성된 뷰어가 브라우저와 호환 불가능합니다.",
		browser_not_support_this_viewer_explanation: "${0}이(가) 브라우저에서 지원되지 않습니다.",
		browser_not_support_this_viewer_userResponse: "문서를 열려면 다른 뷰어를 사용하십시오. 지원되는 브라우저의 목록은 IBM Software Support 사이트의 <i>IBM Content Navigator의 하드웨어 및 소프트웨어 전제조건</i> 문서에 포함되어 있습니다.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "워크플로우 정보",
		process_information_info_text: "선택된 항목이 현재 다음 워크플로우에서 실행되고 있습니다.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "같음",
		operator_NOTEQUAL: "같지 않음",
		operator_LIKE: "포함",
		operator_STARTSWITH: "시작",
		operator_ENDSWITH: "종료",
		operator_NOTLIKE: "포함하지 않음",
		operator_NULL: "비어 있음",
		operator_NOTNULL: "비어 있지 않음",
		operator_LESS: "미만",
		operator_LESSOREQUAL: "같거나 미만",
		operator_GREATER: "초과",
		operator_GREATEROREQUAL: "같거나 초과",
		operator_BETWEEN: "사이",
		operator_NOTBETWEEN: "사이 외",
		operator_IN: "모두 포함",
		operator_INANY: "임의 포함",
		operator_NOTIN: "모두 제외",
		operator_CONTAINS: "포함",

		/* SearchForm widget */
		search_button_tooltip: "기준과 일치하는 문서를 검색합니다.",
		reset_button_tooltip: "관리자가 설정한 기본값으로 검색을 재설정합니다.",
		clear_button_tooltip: "검색에 입력한 값을 모두 제거합니다.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "검색 선택",
		append_to_search: "검색에 추가",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "새 검색",
		new_unified_search: "새 교차 저장소 검색",
		searh_name_contains: "검색 이름 포함",
		keep_search_criteria_expanded: "검색 기준을 열린 채로 두기",
		showing_results: "결과 표시 대상:",
		open_in_new_window: "새 창에서 열기",
		open_in_new_tab: "새 탭에서 열기",
		close_tab: "탭 닫기",
		add_repository: "저장소 추가",
		edit_repository: "저장소 편집",
		remove_repository: "제거",
		search_scope: "검색 범위",
		search_class_template: "클래스",
		object_type_version: "오브젝트 유형 및 버전",
		not_applicable: "해당 사항 없음",
		unified_search_including_subfolders: " (하위 폴더 포함)",
		unified_search_dialog_intro_text: "검색에 포함할 클래스 또는 검색 및 저장소를 선택하십시오.",
		unified_search_class_or_template: "클래스 또는 템플리트",

		select_object_fieldset_legend: "첨부할 항목을 찾는 방법:",
		select_object_create_new_search: "새 검색",
		select_object_search_template: "기존 검색",

		search_criteria: "검색 기준:",
		search_criteria_no_colon: "검색 기준",
		search_in_multiple: "검색 위치(${0}):",
		search_location_including_subfolders: "서브폴더를 포함한 ${0}",
		search_class: "클래스:",
		search_class_multiple: "클래스 (${0}):",
		search_class_including_subclasses: "서브클래스를 포함한 ${0}",
		search_class_all_pseudo: "모두",
		search_results: "검색 결과",
		select_operator: "연산자 선택",
		ending_value: "${0} 특성의 마지막 값:",
		search_options: "검색 옵션:",
		search_version: "버전:",
		search_released_version: "릴리스된 버전",
		search_current_version: "현재 버전",
		search_all_versions: "모든 버전",
		search_file_type_filter: "파일 유형 필터:",
		search_one_file_type: "1개의 파일 유형",
		search_many_file_types: "${0}개의 파일 유형",
		search_action_filter: "조치 필터:",
		search_action_filter_hover_help: "사용자가 특정 조치를 수행한 파일만 포함하도록 결과를 좁히십시오.<br/>예를 들어, 2012년 9월 20일에 추가한 문서만 검색할 수 있습니다.",
		search_action_filter_enabled: "조치 필터 사용",
		search_enable: "사용",
		search_disable: "사용 안함",
		search_by: "기준",
		search_added: "추가됨",
		search_modified: "수정됨",
		search_checked_out: "체크아웃됨",
		search_date_operator_on: "다음 날짜",
		search_date_operator_not_on: "다음 날짜 제외",
		search_date_operator_before: "이전",
		search_date_operator_after: "이후",
		search_version_hover_help_p8: "릴리스된 버전이 모든 사용자에게 사용 가능합니다. 현재 버전인 문서는 하나 이상의 사용자가 문서를 편집 중임을 의미합니다.",
		search_version_hover_help_cm: "현재 버전은 항목의 최신 버전입니다.",
		search_using: "일치하는 항목 검색:",
		search_property_and_text_criteria: "특성 값 및 텍스트 기준 모두",
		search_property_or_text_criteria: "특성 값 또는 텍스트 기준",
		search_property_and_text: "특성 및 텍스트 기준 모두",
		search_property_or_text: "특성 또는 텍스트 기준",
		search_property_options: "특성 옵션:",
		search_property_option_match_all: "모든 특성",
		search_property_option_match_any: "하나 이상의 특성",
		search_property_option_match_all_summary: "모두 일치",
		search_property_option_match_any_summary: "하나 이상 일치",
		search_total_count_type_total: "전체",
		search_total_count_type_atleast: "최소",
		search_content_size_filter: "컨텐츠 크기 필터:",
		search_content_size_filter_any: "임의의 컨텐츠 크기",

		/* Search work options */
		search_work_filter: "작업 항목 필터:",
		search_work_filter_hover_help: "워크플로우에 있는 항목만 포함하도록 결과 범위를 축소하십시오. 예를 들어, 활성 작업 항목만 포함하도록 결과 범위를 축소할 수 있습니다.<br /><br />검색에서 리턴하는 모든 버전의 항목을 볼 경우 이 옵션이 적용되지 않습니다.",
		search_work_filter_enabled: "작업 항목 필터가 사용됨",
		search_work_filter_status: "상태:",
		search_work_filter_step: "단계:",
		search_work_filter_owner: "소유자:",
		search_work_filter_status_all: "모든 항목",
		search_work_filter_status_active: "활성 항목",
		search_work_filter_status_suspended: "일시중단된 항목",
		search_work_filter_process_all: "모든 워크플로우",
		search_work_filter_step_all: "모든 단계",
		search_work_filter_owner_all: "모든 사용자",
		search_work_filter_step_error: "단계 이름이 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "추가 정보가 있어야 검색을 완료할 수 있습니다. 최소 한 개 이상의 조건 값을 입력하십시오.",
		search_insufficient_input_box: "추가 정보가 있어야 검색을 완료할 수 있습니다. 텍스트 검색 기준을 입력하거나 메타데이터 템플리트를 선택하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "추가 정보 없이 열 때 검색을 실행하도록 구성할 수 없습니다. 최소 한 개 이상의 조건 값을 입력하십시오.",
		search_member_required: "이 검색을 특정 사용자 및 그룹과 공유하려면 이 검색을 공유할 수 있는 사용자나 그룹을 하나 이상 선택하십시오.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "변경사항을 저장하지 않고 닫으시겠습니까?",
		search_prompt_close_all_without_save: "변경사항을 저장하지 않고 모든 탭을 닫으시겠습니까?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "다음 유형의 검색 기준 중 하나가 다음 저장소에 유효하지 않습니다. ${0}. 웹 클라이언트에서 검색을 실행하려면 유효하지 않은 기준을 제거해야 합니다. 검색을 저장하는 경우 유효하지 않은 기준이 제거됩니다. 검색을 변경하지 않으려는 경우 검색을 닫으십시오.",
		search_invalid_repository: "하나 이상의 저장소",
		search_invalid_class: "하나 이상의 클래스",
		search_invalid_folder: "하나 이상의 폴더",
		search_invalid_file_type: "하나 이상의 파일 유형",
		search_invalid_property: "하나 이상의 특성",
		search_invalid_text_search: "텍스트 검색 기준",
		search_invalid_work: "작업 항목 필터 기준",

		search_operator_pulldown_missing: "연산자는 필수입니다. 드롭 다운 메뉴에서 연산자를 선택하십시오. 연산자를 찾을 수 없으면 모든 연산자가 숨김으로 설정되어 있는지 여부를 알 수 있도록 시스템 관리자에게 관리 도구에서 <b>검색</b> 탭을 확인할 것을 요청하십시오. 이것이 교차 저장소 검색일 경우 맵핑된 특성에 공통 연산자가 없으면 드롭 다운 메뉴에 연산자가 포함되지 않을 수 있습니다.",

		/*SearchBuilder */
		open_search_builder: "새 검색",
		document_type: "클래스",
		show_all_properties: "모든 특성 표시",
		text_search_label: "다음 용어로 항목 찾기:",
		text_search_place_holder: "용어와 연산자의 조합 사용: * ? 또는 \"\" 또는 \"정확한 일치 문구\"",
		text_search_place_holder_box: "용어와 연산자의 조합 사용: AND, OR, NOT 및 \"정확한 일치 문구\"",
		text_search_place_holder_cascade_proximity: "용어와 연산자의 조합 사용: * 또는 ?",
		text_search_place_holder_common: "용어와 \"정확한 일치 문구\"의 조합 사용",
		text_search_hover_help_p8: "별표(*) 또는 질문 부호(?)를 와일드카드 문자로 사용하십시오. 완전 일치에 큰따옴표 부호(\"\")를 사용하십시오.",
		text_search_hover_help_p8_only_crs: "별표(*) 또는 질문 부호(?)를 와일드카드 문자로 사용하십시오. 완전 일치에 큰따옴표 부호(\"\")를 사용하십시오. 여러 용어를 지정하는 경우 교차 저장소 검색에서 임의의 용어가 포함된 항목을 리턴합니다.",
		text_search_hover_help_cm: "별표(*) 또는 질문 부호(?)를 와일드카드 문자로 사용하십시오. 완전 일치에 큰따옴표 부호(\"\")를 사용하십시오. 제외할 용어 앞에 빼기 기호(-)를, 포함시킬 용어 앞에 더하기 기호(-)를 사용하십시오.",
		text_search_hover_help_box: "모든 용어를 일치시키려면 용어 사이에 AND를 사용하십시오. 임의의 용어를 일치시키려면 용어 사이에 OR를 사용하십시오. 완전 일치에 큰따옴표 부호(\"\")를 사용하십시오. 용어를 제외하려면 용어 앞에 NOT을 사용하십시오.",
		text_search_hover_help_common: "완전 일치에 큰따옴표 부호(\"\")를 사용하십시오. 여러 용어를 지정하는 경우 교차 저장소 검색에서 모든 용어가 포함된 항목을 리턴합니다.",
		text_search_options: "텍스트 옵션:",
		text_search_options_hover_help: "와일드카드 문자 이외의 어느 연산자나 사용하는 경우, 고급 연산자를 선택하십시오.",
		text_search_option_any: "하나 이상의 용어 포함",
		text_search_option_all: "모든 용어 포함",
		text_search_option_proximity: "다음과 유사한 단어:",
		text_search_option_none: "고급 연산자",
		text_search_option_authoring: "텍스트 검색:",
		text_search_option_authoring_hover_help: "사용자가 사용할 수 있는 텍스트 검색 기준을 작성하는 방법을 판별하는 옵션을 선택하십시오. 검색에 텍스트 검색 기준을 포함하지 않으려는 경우 해당 옵션을 숨기십시오. 그렇지 않으면 사용자가 텍스트 검색 기준을 편집 또는 요청하거나 사용자만 읽을 수 있도록 허용할 수 있습니다.",
		text_search_option_hide: "기준 숨기기",
		text_search_option_hide_hover_help: "검색에 어느 텍스트 검색 기준도 포함하지 않거나 다른 사용자들이 텍스트 검색 기준을 지정하도록 허용하지 않으려면 이 옵션을 선택하십시오.",
		text_search_option_in: "HTML/XML 태그 ${0}에",
		text_search_option_paragraph: "같은 단락에",
		text_search_option_sentence: "같은 문장에",
		text_search_option_vql: "VQL 쿼리",
		text_search_option_none_hover_help: "제외할 용어 앞에 -를 사용하십시오.",
		text_search_option_cascade_proximity_hover_help: "정확한 문구를 포함하지 않는 단어 범위에 나타나는 용어로 검색 결과를 제한합니다.",

		box_search_metadata: "메타데이터:",
		box_search_select_template: "템플리트 선택",
		box_search_no_templates: "사용 가능한 템플리트가 없음",
		box_text_search_options_search_within: "검색 범위:",
		box_text_search_options_search_within_everything: "모두",
		box_text_search_options_search_within_file_content: "문서 컨텐츠",
		box_text_search_options_search_within_tags: "태그",
		box_text_search_options_limit_to: "검색만:",

		add_property: "특성 추가",
		edit_template: "검색 편집",
		save_search: "검색 저장",
		search_template_name: "이름:",
		search_template_desc: "설명:",
		auto_run: "열리는 경우 검색 실행",
		show_in_tree: "폴더 구조에 검색 표시",
		show_in_tree_hover_help: "검색이 폴더에 저장된 경우 검색은 기본적으로 컨텐츠 목록에만 표시됩니다. 이 옵션을 선택하면 검색이 브라우저 보기의 폴더 트리에도 표시됩니다. 그러나 검색을 폴더에 저장하는 경우에만 폴더 트리에 검색이 표시됩니다.",
		share_search_with: "검색 공유 대상:",
		remove_member: "${0} 제거",
		ok_button_label: "확인",
		save_template: "저장",
		save_template_title: "특정 항목을 자주 검색해야 하는 경우 검색 기준을 저장하십시오.",
		remove_criterion: "제거",
		apply_button_label: "적용",
		empty_search_results_pane: "결과를 보려면 검색을 실행하십시오.",

		/*Search_in control   */
		folder_tree_repository_root_name: "전체 저장소",

		repository_already_selected: "${0} 저장소가 검색에 이미 포함되어 있으므로 교차 저장소 검색에 추가할 수 없습니다. <br/> 저장소는 한 번만 교차 저장소 검색에 포함할 수 있습니다. <br/>교차 저장소 검색에 포함할 다른 저장소를 선택하십시오.",

		repository_limit_reached: "${0} 저장소에 교차 저장소 검색에 추가할 수 없습니다. 검색에 최대 ${1}개의 저장소를 추가할 수 있습니다.",

		nomore_criteria_toappend: "맵핑된 모든 특성이 이미 검색 기준에 포함되어 있습니다. 따라서 어떠한 특성도 검색 기준에 추가되지 않았습니다.",
		nomore_criteria_toappend_regular: "모든 특성이 이미 검색 기준에 포함되어 있습니다. 따라서 어떠한 특성도 검색 기준에 추가되지 않았습니다.",

		/* OD Save Search dialog */
		reload_label: "다시 로드",
		od_save_search_help_text: "검색의 이름을 입력하거나 교체할 기존 검색을 선택하십시오.",
		public_access_label: "다른 사용자가 이 검색을 사용하도록 허용",
		od_delete_search_help_text: "삭제할 검색을 하나 이상 선택하십시오.",
		delete_save_searches: "저장된 검색 삭제",

		/* Unified Search */
		unified_search_enable_text_search: "텍스트 검색 기준 포함",
		unified_search_text_search_enabled: "텍스트 검색이 포함됨",
		unified_search_mapping: "맵핑",
		unified_search_new_mapping: "새 맵핑",
		unified_search_mapping_name: "맵핑 이름",
		unified_search_mapping_dialog_instructions: "맵핑할 특성을 선택하십시오. 일부 특성을 다른 데이터 유형이 있는 특성에 맵핑할 수 있습니다. 예를 들어, 문자열 특성을 정수 특성에 맵핑할 수 있습니다. 특성을 다른 특성에 맵핑하면 해당 특성들은 교차 저장소 검색에서 단일 특성으로 취급됩니다.",
		unified_search_filter_available_properties: "필터 사용 가능 특성",
		unified_search_available_properties: "사용 가능한 특성",
		unified_search_mapped_properties: "맵핑된 특성",
		unified_search_single_values: "단일 값",
		unified_search_multiple_values: "다중 값",
		unified_search_add_mapping: "맵핑 추가",
		unified_search_warn_remove_repository: "선택된 저장소가 검색 기준에 사용됩니다.\n저장소를 제거하면 저장소를 포함하는 맵핑 및 검색 기준이 삭제됩니다.\n\n저장소를 제거하시겠습니까?",
		unified_search_warn_update_repository_mappings: "이 저장소에 대한 특성 선택 사항을 변경하면 검색 기준에 영향을 미칩니다.\n\n검색 기준에는 제거하는 특성을 하나 이상 포함하는 하나의 이상의 맵핑이 포함되어 있습니다. 제거하는 특성이 포함된 맵핑은 삭제해야 합니다. 이러한 맵핑이 포함된 검색 기준은 검색을 실행하기 위해 삭제해야 합니다.\n\n저장소 옵션을 업데이트하고 맵핑과 검색 기준을 삭제하시겠습니까?",
		unified_search_warn_update_repository_mappings_reset: "이 저장소의 텍스트 검색 기준을 포함시키면 교차 저장소 검색 기준에 영향을 미칩니다.\n\n검색을 실행하려면 이 저장소의 특성에 대한 맵핑이 포함된 특성 검색 기준을 해제해야 합니다.\n\n저장소 옵션을 업데이트하고 검색 기준을 해제하시겠습니까?",
		unified_search_warn_update_repository_text_criteria: "이 저장소의 텍스트 검색 기준을 제거하면 교차 저장소 검색 기준에 영향을 미칩니다.\n\n텍스트 검색 기준은 검색을 실행하기 위해 교차 저장소 검색 기준에서 삭제해야 합니다.\n\n저장소 옵션을 업데이트하고 텍스트 검색 기준을 삭제하시겠습니까?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "텍스트 검색 기준을 제거하고 이 저장소의 특성 선택사항을 변경하면 교차 저장소 검색 기준에 영향을 미칩니다.\n\n텍스트 검색 기준은 검색을 실행하기 위해 교차 저장소 검색 기준에서 삭제해야 합니다. 또한 특성 검색 기준에는 제거하는 특성을 하나 이상 포함하는 하나의 이상의 맵핑이 포함되어 있습니다. 제거하는 특성이 포함된 맵핑은 삭제해야 합니다. 이러한 맵핑이 포함된 특성 검색 기준은 검색을 실행하기 위해 삭제해야 합니다.\n\n저장소 옵션을 업데이트하고 텍스트 검색 기준, 맵핑 및 특성 검색 기준을 삭제하시겠습니까?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "이 저장소의 텍스트 검색 기준을 제외하면 교차 저장소 검색 기준에 영향을 미칩니다.\n\n검색을 실행하려면 이 저장소의 특성에 대한 맵핑이 포함된 특성 검색 기준을 해제해야 합니다. 검색을 실행하기 위해 교차 저장소 검색 기준에서 해당 텍스트 검색 기준이 삭제되었을 수 있습니다.\n\n저장소를 업데이트하고 검색 기준을 해제하시겠습니까?",
		unified_search_warn_remove_mapping: "이 맵핑을 제거하면 검색 기준에 영향을 미칩니다.\n\n맵핑을 사용하는 검색 기준은 검색을 실행하기 위해 삭제해야 합니다.\n\n맵핑을 업데이트하고 검색 기준을 삭제하시겠습니까?",
		unified_search_warn_update_mapping: "이 맵핑을 변경하면 검색 기준에 영향을 미칩니다.\n\n맵핑을 사용하는 검색 기준은 검색에 유효하지 않은 연산자 또는 유효하지 않은 값이 포함되어 있지 않는지 확인하기 위해 지워져야 합니다.\n\n맵핑을 업데이트하고 검색 기준을 지우시겠습니까?",
		unified_search_warn_update_mapping_not_searchable: "이 맵핑에 대한 변경은 검색 기준에 영향을 미칩니다.\n\n맵핑된 특성이 모두 표시 전용일 때 검색 기준에서 맵핑을 사용할 수 없습니다. 맵핑을 사용하는 검색 기준은 검색을 실행하기 위해 삭제해야 합니다.\n\n맵핑을 업데이트하고 검색 기준을 삭제하시겠습니까?",
		unified_search_warn_update_mapping_box_searchable: "이 맵핑을 변경하면 검색 기준에 영향을 미칩니다.\n\n검색 기준에 이 맵핑이 이미 두 번 이상 포함되어 있으며 ${1} 저장소에서 ${0} 특성을 추가하는 경우 검색 기준에 ${0} 특성이 너무 많이 포함됩니다. 맵핑을 사용하는 검색 기준은 검색을 실행하기 위해 삭제해야 합니다.\n\n맵핑을 업데이트하고 검색 기준을 삭제하시겠습니까?",
		unified_search_details: "교차 저장소 검색 세부사항",
		unified_search_fixed_value_property: "수정된 값 특성",
		unified_search_required_property: "필수 특성",
		unified_search_display_only_property: "표시 전용 특성",
		unified_search_missing_required_properities: "검색을 저장하거나 실행할 수 없습니다.<br/>필수 특성은 다음과 같습니다.${0}맵핑에 특성을 포함하고 값이 포함된 특성을 검색 기준에 추가해야 합니다.",
		unified_search_property_repostory: "${0} (저장소: ${1})",
		unified_search_builder_no_mappings: "검색을 실행할 수 없습니다.<br/>검색에서 결과를 표시할 수 있도록 특성 맵핑을 작성하여 <b>결과 표시</b>에 포함시켜야 합니다.",
		unified_search_builder_insufficient_criteria_to_run: "검색을 실행할 수 없습니다.<br/>검색 기준에 다음 저장소의 텍스트 검색 기준이나 특성 값이 포함되지 않습니다.${0}검색에 포함된 저장소마다 텍스트 검색 기준을 입력하거나 특성 맵핑을 작성하고, 특성 기준에 포함한 다음 특성 값을 지정해야 합니다.",
		unified_search_builder_insufficient_criteria_to_save: "검색을 저장할 수 없습니다.<br/>검색에 다음 저장소의 검색 기준이 포함되지 않습니다.${0}검색에 포함된 저장소마다 다음 옵션 중 하나를 수행해야 합니다.<ol><li>특성 맵핑을 작성한 다음 특성 기준에 포함하십시오.</li><li>텍스트 검색 기준을 포함하도록 저장소를 수정하고 특성 맵핑을 작성한 다음 <b>결과 표시</b>에 포함하십시오.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "검색을 실행할 수 없습니다.<br/>검색에 포함되는 모든 저장소의 경우 하나 이상의 특성 값을 지정해야 합니다. 예를 들어, 다음 특성 값을 지정할 수 있습니다. ${0}",
		unified_search_runtime_insufficient_criteria_text: "검색을 실행할 수 없습니다.<br/>텍스트 검색 기준은 필수입니다.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "검색을 실행할 수 없습니다.<br/>검색에 포함되는 모든 저장소의 경우 하나 이상의 특성 값을 지정하거나 텍스트 검색 기준을 입력해야 합니다. 예를 들어, 다음 특성 값을 지정할 수 있습니다. ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "검색을 실행할 수 없습니다.<br/>텍스트 검색 기준은 필수입니다. 검색에 포함되는 모든 저장소의 경우 하나 이상의 특성 값을 지정하거나 텍스트 검색 기준을 입력해야 합니다. 예를 들어, 다음 특성 값을 지정할 수 있습니다. ${0}",
		unified_search_invalid_criteria: "검색에 유효하지 않은 기준이 포함되어 있어 검색을 실행할 수 없습니다.<br/>유효하지 않은 기준이 제거되었습니다. 그러나 검색을 실행하려면 먼저 검색에 대한 변경사항을 저장해야 합니다. 변경사항을 저장하지 않으려면 검색을 닫으십시오.<br/><br/>다음 항목이 제거되거나 수정되었습니다:${0}",
		unified_search_invalid_fixed_values: "검색을 저장하거나 실행할 수 없습니다.<br/>다음 검색 기준에 유효하지 않은 고정 값이 있습니다. ${0} 다음 조치 중 하나를 수행하여 문제를 해결하십시오.<ul><li>유효하지 않은 값이 포함된 검색 기준을 제거하십시오.</li><li>특성을 제거하기 위해 고정 값이 있는 IBM Content Manager OnDemand 특성이 포함된 맵핑을 편집하십시오.</li><li>모든 특성을 호환 가능하게 하기 위해 고정 값이 있는 IBM Content Manager OnDemand 특성이 포함된 맵핑을 편집하십시오. 맵핑할 수 있는 특성에 대한 자세한 정보는 특성 맵핑 창의 맨 위에 있는 소개 텍스트의 추가 정보 링크를 참조하십시오.</li></ul>",
		unified_search_cannot_add_properties: "특성을 이 검색에 추가할 수 없습니다.<br/>사용 가능한 맵핑된 모든 특성이 이미 검색 기준에 있고 각 특성은 검색에 한 번만 추가할 수 있습니다.",
		unified_search_mapping_not_viewable: "Box 템플리트 특성은 검색 결과에 표시할 수 없습니다. 이 맵핑을 열로 추가하려면 Box 템플리트 특성이 아닌 특성을 하나 이상 맵핑해야 합니다. 예를 들어, 다른 저장소에서 특성을 선택할 수 있습니다.",

		unified_search_returned_more: "하나 이상의 저장소가 허용되는 최대 결과 수를 초과했습니다.",
		unified_search_partial_failure: "하나 이상의 저장소에서 오류가 발생했습니다.",
		unified_search_partial_failure_and_returned_more: "하나 이상의 저장소에서 오류가 발생했고 하나 이상의 저장소가 허용되는 최대 결과 수를 초과했습니다.",
		unified_search_see_analysis: "결과 분석을 참조하십시오.",
		unified_search_analysis_intro_returned_more: "허용되는 최대 결과를 초과한 각 저장소의 경우 더 적은 결과가 리턴되도록 검색 기준을 세분화하십시오. 또는 교차 저장소 검색에 허용된 최대값보다 더 많은 결과를 리턴하도록 단일 저장소 검색을 실행할 수 있습니다.",
		unified_search_analysis_intro_partial_failure: "저장소에서 리턴된 오류 정보를 검토하십시오. 적절한 경우 오류를 해결하고 교차 저장소 검색을 다시 실행하십시오.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "오류가 발생하는 각 저장소의 경우 문제점을 해결하고 검색을 다시 실행하십시오.<br/><br/>허용되는 최대 결과를 초과한 각 저장소의 경우 더 적은 결과가 리턴되도록 검색 기준을 세분화하십시오. 또는 교차 저장소 검색에 허용된 최대값보다 더 많은 결과를 리턴하도록 단일 저장소 검색을 실행할 수 있습니다.",
		unified_search_results_found: "발견된 결과",
		unified_search_maximum_allowed: "최대 허용",
		unified_search_maximum_exceeded: "최대 초과",

		unified_search_mapping_rule_box: "특성을 맵핑에 추가할 수 없습니다.<p>${1} 저장소의 ${0} 특성이 이미 다른 맵핑에 있는 경우 이 저장소에서 검색 가능한 특성은 검색당 하나의 맵핑에만 포함될 수 있습니다.<br/>맵핑에 추가할 다른 특성을 선택하십시오.</p>",
		unified_search_mapping_rule_repository: "특성을 맵핑에 추가할 수 없습니다.<br/>맵핑이 이미 ${0} 저장소에서 특성을 포함합니다. 맵핑이 저장소에서 하나의 특성만 포함할 수 있습니다.<br/>특성을 포함할 소스인 다른 저장소를 선택하거나 선택된 특성에 새 맵핑을 작성하십시오.",
		unified_search_mapping_rule_data_type: "특성을 맵핑에 추가할 수 없습니다.<br/>${0} 특성을 ${1} 특성에 맵핑할 수 없습니다. 맵핑할 다른 특성을 선택하거나 선택된 특성에 대한 새 맵핑을 작성하십시오.<br/>맵핑할 수 있는 특성에 대한 자세한 정보는 이 창의 맨 위에 있는 소개 텍스트의 추가 정보 링크를 참조하십시오.",
		unified_search_mapping_rule_cardinality: "특성을 맵핑에 추가할 수 없습니다.<br/>맵핑의 모든 특성은 단일 값 또는 다중 값을 지원해야 합니다. 선택된 특성은 ${0}을(를) 지원하고 맵핑의 특성은 ${1}을(를) 지원합니다.<br/>맵핑에 추가할 다른 특성을 선택하거나 선택된 특성에 새 맵핑을 작성하십시오.",
		unified_search_mapping_rule_fixed_value: "특성을 맵핑에 추가할 수 없습니다.<br/>맵핑이 이미 고정된 값이 있는 특성을 포함합니다. 맵핑이 고정된 값이 있는 하나의 특성만 포함할 수 있습니다.<br/>맵핑에 추가할 다른 특성을 선택하거나 선택된 특성에 새 맵핑을 작성하십시오.",
		unified_search_mapping_rule_child_component: "특성을 맵핑에 추가할 수 없습니다.<br/>하위 컴포넌트가 포함된 특성을 기타 특성에 맵핑할 수 없습니다. 이 특성에서 검색할 수 있으려면 선택된 특성에 새 맵핑을 작성하십시오.",
		unified_search_mapping_rule_operator_intersection: "특성을 맵핑에 추가할 수 없습니다.<br/>맵핑의 모든 특성은 하나 이상의 연산자를 공유해야 합니다. 그러나 ${0} 특성은 기타 특성이 맵핑에 있어 연산자를 공유하지 않습니다.<br/>가능한 경우 다른 특성을 선택하십시오. 선택된 특성을 포함해야 하는 경우 시스템 관리자와 작업하여 특성과 연관된 연산자를 편집하십시오.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "고급 설정",
		advanced_search_options_intro: "고급 기준 옵션을 설정합니다.",
		advanced_search_options_editable: "편집 가능",
		advanced_search_options_readonly: "읽기 전용",
		advanced_search_options_required: "필수",
		advanced_search_options_hidden: "숨김",
		advanced_search_options_property_editable:"특성:",
		advanced_search_options_operators:"연산자:",
		advanced_search_options_use_all:"모두 사용",
		advanced_search_options_use_selected:"선택사항 사용",
		advanced_search_options_operators_filtered: "필터링된 연산자",
		// Data types in lowercase
		data_type_boolean: "부울",
		data_type_date: "날짜",
		data_type_time: "시간",
		data_type_timestamp: "시간소인",
		data_type_decimal: "10진 값",
		data_type_double: "부동 소수점 수",
		data_type_short: "정수",
		data_type_integer: "정수",
		data_type_long: "정수",
		data_type_string: "텍스트 문자열",
		data_type_string_alpha: "알파벳 문자열",
		data_type_string_alphanum: "영숫자 문자열",
		data_type_string_ext: "확장 영숫자 문자열",
		data_type_string_num: "숫자 문자열",
		data_type_binary: "2진",
		data_type_object: "오브젝트",
		data_type_guid: "GUID(globally unique identifier)",
		data_type_user: "사용자",
		data_type_child_component: "하위 컴포넌트",

		/* Print Dialog */
		print_title: "인쇄",
		print_message: "인쇄 중: ${0}",
		print_print_button: "인쇄",
		print_clean_margins_button: "모두 0으로 설정",
		print_type: "프린터 유형:",
		print_printer_server_options: "서버 인쇄 옵션",
		print_printer_properties: "프린터 특성",
		print_printer_fax_properties: "팩스 특성",
		print_printer_name: "프린터 이름:",
		print_fax_recipient: "수신인",
		print_fax_sender: "발신인",
		print_copies: "사본:",
		print_local_orientation: "방향",
		print_local_orientation_landscape: "가로",
		print_local_orientation_portrait: "세로",
		print_local_margins: "여백",
		print_local_margins_top: "맨 위",
		print_local_margins_bottom: "맨 아래",
		print_local_margins_left: "왼쪽",
		print_local_margins_right: "오른쪽",
		print_printer_server: "서버",
		print_printer_local: "로컬",
		print_property_class: "클래스:",
		print_property_routing: "라우팅:",
		print_property_pagedef: "페이지 정의:",
		print_property_node: "노드:",
		print_property_writer: "기록기:",
		print_property_formdef: "양식 정의:",
		print_property_printerid: "대상:",
		print_property_forms: "양식:",
		print_property_faxnotes: "참고:",
		print_property_faxcompany: "회사:",
		print_property_faxnumber: "팩스 번호:",
		print_property_faxname: "이름:",
		print_property_faxsendertelnumber: "전화번호:",
		print_property_faxcoverpage: "표지:",
		print_property_faxsubject: "주제:",
		print_saveoptions: "인쇄 옵션 저장",
		print_property_bannerpage: "배너 페이지 사용:",
		print_print_with_info_fields: "정보 필드와 함께 인쇄",
		print_field_from: "발신인",
		print_field_to: "수신인",
		print_invalid_value_class: "유효한 문자는 A-Z 또는 0-9입니다.",
		print_invalid_value_pagedef: "유효한 문자는 알파벳 또는 숫자 문자 또는 @, #, $ 문자입니다.",
		print_invalid_value_writer: "유효한 문자는 알파벳 또는 숫자 문자 또는 @, #, $ 문자입니다.",
		print_invalid_value_formdef: "유효한 문자는 알파벳 또는 숫자 문자 또는 @, #, $ 문자입니다.",
		print_invalid_value_forms: "유효한 문자는 알파벳 또는 숫자 문자 또는 @, #, $ 문자입니다.",
		print_invalid_value_margin: "유효한 숫자는 ${0} - ${1} 사이입니다.",
		print_status_message: "${0}개의 문서를 ${1} 프린터로 보냈습니다.",

		print_applet_init_error: "인쇄 애플릿을 시작할 수 없습니다.",
		print_applet_init_error_explanation: "다음과 같은 이유로 인해 이 문제가 발생할 수 있습니다. <br/><br/><ul><li>JRE(Java Runtime Environment)가 사용자의 워크스테이션에 설치되지 않았습니다.</li><li>사용자의 웹 브라우저에서 Java 플러그인을 사용할 수 없습니다.</li><li>사용자의 워크스테이션의 JRE 버전이 IBM Content Navigator 버전과 호환되지 않습니다.</li><li>인쇄 애플릿이 시작되기를 기다리는 동안 브라우저에서 제한시간이 초과되었습니다.</li></ul>",
		print_applet_init_error_userResponse: "다음 단계를 완료하여 JRE와 연관된 문제를 해결할 수 있습니다.<br/><br/><ol><li>JRE가 사용자의 워크스테이션에 설치되어 있는지 확인하십시오.</li><li>사용자의 웹 브라우저에서 Java 플러그인을 사용할 수 있는지 확인하십시오.</li><li>사용자의 워크스테이션에 있는 JRE 버전이 IBM Content Navigator와 호환 가능한지 확인하고 다시 시도하십시오. 지원되는 버전의 목록은 IBM Software Support 사이트의 <i>IBM Content Navigator의 하드웨어 및 소프트웨어 전제조건</i> 문서에 나와 있습니다.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "겉표지",
		daeja_print_selected_documents_title: "선택된 문서",

		/* change the caps to em for emphasis*/
		match_all_criteria: "모든 검색 기준 일치",
		match_any_criteria: "하나 이상의 검색 기준 일치",
		include_subfolders_summary: "${0}(하위 폴더 포함)",
		browse_button: "찾아보기&hellip;",
		search_for: "검색 대상:",
		object_type_documents: "문서",
		object_type_folders: "폴더",
		object_type_documents_folders: "문서 및 폴더",
		object_type_web_links: "웹 링크",
		object_type_documents_folders_web_links: "문서, 폴더 및 웹 링크",

		/* SelectSearchFolderDialog */
		search_in: "검색 위치:",
		include_subfolders: "하위 폴더 포함",

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
		locked_item_icon_title: "${0}님이 잠금",
		checked_out_icon_title: "${0}님이 체크아웃함",
		major_minor_version_icon_title: "부 버전이 있는 주 버전",
		suspended_icon_title: "워크플로우가 일시중단됩니다.",
		on_hold_icon_title: "보류 중",
		has_notes_icon_title: "참고사항이 있음",
		record_icon_title: "레코드로 선언됨",
		compound_document_icon_title: "복합 문서",
		validateTemplate_icon_title: "팀 작업영역 템플리트에 유효성 검증이 필요함",
		offlineTemplate_icon_title: "팀 작업영역 템플리트가 오프라인임",
		offlineTeamspace_icon_title: "팀 작업영역이 오프라인임",
		pending_delete_icon_title: "팀 작업영역 삭제 보류 중임",
		delete_error_icon_title: "팀 작업영역을 삭제할 수 없음",
		defaultTemplate_icon_title: "기본 팀 작업영역 템플리트",
		teamspace_icon_title: "팀 작업영역",
		teamspace_template_icon_title: "팀 작업영역 템플리트",
		has_bookmark_icon_title: "책갈피가 있음",
		read_only_icon_title: "읽기 전용",
		no_results_were_found: "결과가 없습니다.",
		folder_is_empty: "폴더가 비어 있습니다.",
		no_checked_out_items: "체크아웃된 항목이 없습니다.",
		inbasket_is_empty: "작업함이 비어 있습니다.",
		worklist_is_empty: "작업 목록이 비어 있습니다.",
		tracker_milestone_completed: "완료됨",
		stepprocessor_attachments_title: "컨텐츠",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "항목 잠금",
		unlock_items: "항목 잠금 해제",
		checkin_item: "항목 체크인",

		/* Help */
		learn_more: "추가 정보",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "팀 작업영역 열기",
		repository_tab_createWorkspace: "새 팀 작업영역",
		repository_tab_createWorkspaceTemplate: "새 팀 작업영역 템플리트",
		repository_tab_DefaultTemplate: "기본값",

		/* Cross repository document copy */
		documentCopyTaskDescription: "이 태스크는 문서를 복사합니다.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "선택한 팀 작업영역 템플리트에 대한 편집 권한이 없습니다.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "${0} 팀 작업영역을 삭제하시겠습니까? <br><br>저장소의 다른 폴더에 보관된 문서만 저장소에 남습니다. 팀 공간에만 보관된 문서는 삭제됩니다.",
		teamspaceDecommissionLabel: "삭제:",
		teamspaceDecommissionDescription: "팀 작업영역을 삭제하면 서버에서 이 팀 작업영역이 제거됩니다. 팀 작업영역 아티팩트가 처리되는 방식을 표시하십시오.",
		teamspaceDecommissionOptions: "팀 작업영역 옵션 삭제",
		teamspaceDecommissionDeleteAll: "모든 팀 작업영역 아티팩트 삭제",
		teamspaceDecommissionReFileAll: "모든 팀 작업영역 아티팩트 재보관",
		teamspaceDecommissionReFileDestination: "다음 위치로 이동:",
		teamspaceDecommissionReFileIn: "재보관 위치",
		teamspaceDecommissionTaskName: "팀 작업영역 삭제 태스크",
		teamspaceDecommissionTaskDescription: "이 태스크는 저장소에서 팀 작업영역을 삭제합니다.",
		teamspaceDecommissionDeletionStarted: "팀 작업영역을 삭제하도록 스케줄되었습니다.",
		teamspaceDecommissionDeletionConnectionFailed: "저장소에 연결되지 않아서 팀 작업영역을 삭제하는 태스크를 실행할 수 없습니다. 저장소 관리자의 신임 정보가 올바른지 확인하십시오.",

		teamspace_edit_properties_notsupported: "팀 작업영역 보기에서만 팀 작업영역의 특성을 편집할 수 있습니다.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "팀 작업영역이 오프라인 상태이며 팀 작업영역의 소유자만 열 수 있습니다.",

		/* Teamspace Builder widget */
		workspace_validation_document: "문서:",
		workspace_validation_folder: "폴더:",
		workspace_validation_ets: "다음 입력 템플리트가 이 저장소에서 사용 가능하지 않고 선택된 입력 템플리트의 목록에서 제거되었습니다.",
		workspace_validation_classes: "다음 클래스가 이 저장소에서 사용 가능하지 않고 선택된 클래스의 목록에서 제거되었습니다.",
		workspace_validation_searches: "다음 검색이 이 저장소에서 사용 가능하지 않고 선택된 검색의 목록에서 제거되었습니다.",
		workspace_validation_docs_folders: "다음 문서 및 폴더가 이 저장소에서 사용 가능하지 않고 포함된 항목의 목록에서 제거되었습니다.",
		workspace_change_template_confirmation_question: "다른 템플리트를 선택하면 모든 변경사항이 손실됩니다. 계속하시겠습니까?\n",
		workspace_delete_item_confirmation_question: "${0} 항목을 제거하시겠습니까?\n",
		workspace_delete_role_confirmation_question: "${0} 역할을 제거하시겠습니까?\n",
		workspace_delete_confirmation_question: "팀 작업영역을 삭제하면 팀 작업영역 컨테이너만 삭제됩니다. 팀 작업영역의 폴더 및 문서가 저장소에 남아 있어서 검색을 수행하여 찾을 수 있습니다. 팀 작업영역의 컨텐츠를 삭제하려면 먼저 팀 작업영역의 항목을 삭제한 후 팀 작업영역을 삭제하십시오.<br><br>${0} 팀 작업영역을 삭제하시겠습니까?",
		workspacebuilder_instance_template_name_header: "팀 작업영역 템플리트 이름",
		workspacebuilder_instance_template_description_header: "설명",

		workspacebuilder_template_tooltip_name: "템플리트 이름에 \\ / : * ? \" < > | 문자를 사용할 수 없습니다.",
		workspacebuilder_instance_tooltip_name: "팀 작업영역 이름에 \\ / : * ? \" < > | 문자를 사용할 수 없습니다.",

		workspacebuilder_template_tooltip_description: "사용자가 템플리트 목록에서 적절한 선택을 할 수 있도록 설명을 제공하십시오. 예를 들어 사용자 대상 또는 템플리트 용도에 대한 정보를 포함시킬 수 있습니다.",
		workspacebuilder_instance_tooltip_description: "사용자가 이 팀 작업영역과 다른 팀 작업영역을 구별할 수 있도록 설명을 제공하십시오.",

		workspacebuilder_template_edit_properties_pane: "팀 작업영역 템플리트 편집",
		workspacebuilder_instance_properties_pane: "팀 작업영역 정의",
		workspacebuilder_template_properties_pane: "팀 작업영역 템플리트 정의",

		workspacebuilder_instance_security_pane: "팀 작업영역 보안 설정",
		workspacebuilder_template_security_pane: "템플리트 보안 설정",

		workspacebuilder_layout_pane: "레이아웃 선택",
		workspacebuilder_search_templates_pane: "검색 선택",
		workspacebuilder_document_folders_pane: "폴더 및 문서 포함",
		workspacebuilder_doctypes_entryTemplates_pane: "클래스 또는 입력 템플리트 선택",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "클래스 선택",
		workspacebuilder_security: "팀 작업영역 보안",

		workspacebuilder_roles_pane: "역할 선택",
		workspacebuilder_security: "보안",

		workspacebuilder_properties_templates: "사용 가능한 템플리트:",
		workspacebuilder_available_templates: "사용 가능한 검색:",
		workspacebuilder_selected_templates: "선택된 검색:",
		workspacebuilder_templates_name: "검색 이름",

		workspacebuilder_available_entryTemplates: "사용 가능한 입력 템플리트:",
		workspacebuilder_selected_entryTemplates: "선택된 입력 템플리트:",

		workspacebuilder_item_classes: "사용 가능한 클래스:",
		workspacebuilder_item_classes_selected: "선택된 클래스:",
		workspacebuilder_properties_select_template: "이 팀 작업영역에 사용할 템플리트를 선택하십시오.",
		workspacebuilder_template_properties: "팀 작업영역 템플리트 정의",
		workspacebuilder_instance_properties: "팀 작업영역 정의",
		workspacebuilder_template_introText: "탐색에 있는 선택항목을 사용하여 이 템플리트에서 작성되는 모든 팀 작업영역에 포함할 공통 컴포넌트를 지정하십시오. 컴포넌트를 지정한 후 <b>완료</b>를 클릭하면 이 템플리트로 새 팀 작업영역을 작성할 수 있는 다른 사용자가 템플리트를 사용할 수 있습니다.",
		workspacebuilder_instance_introText: "팀은 팀 작업영역을 사용하여 특정 문서 세트로 작업하고 이를 공유할 수 있습니다. 사용자가 다른 팀 작업영역과 구별할 수 있도록 이 팀 작업영역에 의미 있는 이름과 설명을 제공하십시오. 추가적인 검색, 클래스 또는 입력 템플리트, 문서 및 폴더를 포함시켜 팀 작업영역을 사용자 정의할 수 있습니다.",

		workspacebuilder_template_search_template_introText: "이 템플리트에서 작성되는 모든 팀 작업영역에 포함할 기본 검색을 선택하십시오. 선택된 검색이 없는 경우, 팀 작업영역 사용자가 액세스 권한이 있는 모든 검색을 봅니다. 적절한 권한으로 사용자는 팀 작업영역에 검색을 공유하고 추가할 수 있습니다.",
		workspacebuilder_instance_search_template_introText: "팀 작업영역 사용자가 태스크를 보다 효율적으로 완료할 수 있도록 검색을 포함하십시오. 검색이 포함되지 않은 경우 팀 작업영역 사용자에게 권한이 있는 모든 검색이 표시됩니다. 또한 사용자는 적절한 권한이 있는 팀 작업영역에서 검색을 추가하고 공유할 수 있습니다.",

		workspacebuilder_template_roles_introText: "팀 작업영역 사용자에게는 역할이 지정됩니다. 역할은 사용자가 수행할 수 있는 태스크를 지정합니다. 허용된 태스크를 보려면 각 역할 옆에 있는 아이콘을 클릭하십시오. 팀 작업영역에 적합한 역할을 선택하십시오.",
		workspacebuilder_template_roles_modify_introText: "이 팀 작업영역에서 각 역할과 연관된 권한을 수정할 수 있습니다. 권한이 변경되면 팀 작업영역 구성원에 알려야 합니다.",

		workspacebuilder_template_roles_header_name: "역할 이름",

		workspacebuilder_template_folders_introText: "이 템플리트에서 작성되는 모든 팀 작업영역에 포함할 기본 문서 및 폴더를 선택하십시오. 문서에 대한 링크나 사본을 추가할 수 있습니다. 여러 번 복사하기에 적합하지 않은 문서(예: 정책 또는 절차)는 링크로 연결하십시오. 사용자가 수정하게 될 문서(예: 템플리트 및 양식)는 사본을 작성하십시오.",
		workspacebuilder_instance_folders_introText: "팀 작업영역에 포함할 기본 문서 및 폴더를 선택하십시오. 문서에 대한 링크나 사본을 추가할 수 있습니다. 여러 번 복사하기에 적합하지 않은 문서(예: 정책 또는 절차)는 링크로 연결하십시오. 사용자가 수정하게 될 문서(예: 템플리트 및 양식)는 사본을 작성하십시오.",

		workspacebuilder_template_roles_introText: "이 템플리트에서 작성된 모든 팀 작업영역에 포함되는 역할을 지정하십시오. 새 역할을 작성할 수도 있으며 다른 팀 작업영역 템플리트를 작성할 때 이 새 역할을 사용할 수 있습니다.",
		workspacebuilder_instance_users_introText: "팀 작업영역에서는 사용자가 완료할 수 있는 태스크를 지정하는 하나 이상의 역할이 사용자에게 지정됩니다. 팀 작업영역에 사용자를 추가하고 사용자에게 역할을 지정하십시오.",

		workspacebuilder_instance_navigation_pane_title: "팀 작업영역 빌더",
		workspacebuilder_template_navigation_pane_title: "팀 작업영역 템플리트 빌더",

		workspacebuilder_roles_roles_nopermissions: "{0} 역할에 대해 선택한 권한이 없습니다.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "선택된 역할:",
		workspacebuilder_roles_available_roles: "사용 가능한 역할:",
		workspacebuilder_roles_privilege_header: "권한",
		workspacebuilder_roles_select_role: "역할 선택",
		workspacebuilder_roles_select_permission: "권한 선택",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "{0} 이름의 역할이 이미 있습니다. 역할에 고유한 이름을 지정해야 합니다. ",
		workspacebuilder_roles_edit_dialog_role_name: "역할 이름:",
		workspacebuilder_roles_edit_dialog_role_description: "역할 설명:",
		workspacebuilder_roles_edit_dialog_title_new: "새 역할",
		workspacebuilder_roles_edit_dialog_title_edit: "역할 편집",

		workspacebuilder_roles_privileges_header: "{0} 역할에 대한 권한:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "문서 권한:",
		workspacebuilder_roles_priv_group_folder: "폴더 권한:",
		workspacebuilder_roles_priv_group_teamspace: "팀 작업영역 권한:",
		workspacebuilder_roles_priv_group_item: "문서 및 폴더 권한:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "권한 관리",
		workspacebuilder_roles_plbl_modifyItemPermissions: "이 권한을 가진 사용자는 팀 작업영역에서 문서 및 폴더에 대한 액세스를 관리할 수 있습니다. 이 권한으로 다른 사용자에게 특성 삭제, 특성 편집, 서브폴더 작성 등의 권한을 부여할 수 있습니다.",

		workspacebuilder_roles_priv_deleteItems: "삭제",
		workspacebuilder_roles_plbl_deleteItems: "이 권한을 가진 사용자는 팀 작업영역에서 문서 및 폴더를 삭제할 수 있습니다.",

		workspacebuilder_roles_priv_createItems: "작성",
		workspacebuilder_roles_plbl_createItems: "이 권한을 가진 사용자는 팀 작업영역에서 문서 및 폴더를 작성할 수 있습니다.",

		workspacebuilder_roles_priv_viewItemProperties: "특성 보기",
		workspacebuilder_roles_plbl_viewItemProperties: "이 권한을 가진 사용자는 팀 작업영역에서 시스템 특성을 포함한 문서 및 폴더 특성을 볼 수 있습니다.",

		workspacebuilder_roles_priv_modifyItemProperties: "특성 편집",
		workspacebuilder_roles_plbl_modifyItemProperties: "이 권한을 가진 사용자는 팀 작업영역에서 문서 및 폴더의 특성을 편집할 수 있습니다.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "폴더 권한 관리",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "이 권한을 가진 사용자는 팀 작업영역에서 폴더에 대한 액세스를 관리할 수 있습니다. 또한 다른 사용자에게 폴더 삭제, 폴더 특성 편집 또는 하위 폴더 작성 등의 권한을 부여할 수 있습니다.",

		workspacebuilder_roles_priv_deleteFolders: "폴더 삭제",
		workspacebuilder_roles_plbl_deleteFolders: "이 권한을 가진 사용자는 팀 작업영역에서 폴더를 삭제할 수 있습니다.",

		workspacebuilder_roles_priv_modifyFolderProperties: "폴더 특성 편집",
		workspacebuilder_roles_plbl_modifyFolderProperties: "이 권한을 가진 사용자는 팀 작업영역에서 폴더 특성을 편집할 수 있습니다.",

		workspacebuilder_roles_priv_createSubfolders: "하위 폴더 작성",
		workspacebuilder_roles_plbl_createSubfolders: "이 권한을 가진 사용자는 팀 작업영역에서 폴더를 작성할 수 있습니다.",

		workspacebuilder_roles_priv_fileInFolders: "폴더에 추가",
		workspacebuilder_roles_plbl_fileInFolders: "이 권한을 가진 사용자는 팀 작업영역에 있는 폴더에 대한 링크를 문서에 추가할 수 있습니다.",

		workspacebuilder_roles_priv_viewFolderProperties: "폴더 특성 보기",
		workspacebuilder_roles_plbl_viewFolderProperties: "이 권한을 가진 사용자는 팀 작업영역에서 시스템 특성을 포함한 폴더 특성을 볼 수 있습니다.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "문서 권한 관리",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "이 권한을 가진 사용자는 팀 작업영역에서 문서에 대한 액세스를 관리할 수 있습니다. 또한 이 권한으로 다른 사용자에게 문서 삭제, 문서 특성 편집 등의 권한을 부여할 수 있습니다.",

		workspacebuilder_roles_priv_deleteDocuments: "문서 삭제",
		workspacebuilder_roles_plbl_deleteDocuments: "이 권한을 가진 사용자는 팀 작업영역에서 문서를 삭제할 수 있습니다.",

		workspacebuilder_roles_priv_promoteVersions: "버전 올리기",
		workspacebuilder_roles_plbl_promoteVersions: "이 권한을 가진 사용자는 팀 작업영역에서 문서에 새 버전 번호를 지정할 수 있습니다.",

		workspacebuilder_roles_priv_modifyContent: "문서 편집",
		workspacebuilder_roles_plbl_modifyContent: "이 권한을 가진 사용자는 팀 작업영역에서 문서의 내용을 편집할 수 있습니다.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "문서 특성 편집",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "이 권한을 가진 사용자는 팀 작업영역에서 문서 특성을 편집할 수 있습니다.",

		workspacebuilder_roles_priv_viewContent: "문서 보기",
		workspacebuilder_roles_plbl_viewContent: "이 권한을 가진 사용자는 팀 작업영역에서 문서를 볼 수 있습니다.",

		workspacebuilder_roles_priv_viewDocumentProperties: "문서 특성 보기",
		workspacebuilder_roles_plbl_viewDocumentProperties: "이 권한을 가진 사용자는 팀 작업영역에서 시스템 특성을 포함한 문서 특성을 볼 수 있습니다.",

		workspacebuilder_roles_priv_addNewSearches: "검색 추가",
		workspacebuilder_roles_plbl_addNewSearches: "이 권한을 가진 사용자는 팀 작업영역에 검색을 추가할 수 있습니다. 기본적으로 다른 사용자는 검색을 사용할 수 없습니다.",

		workspacebuilder_roles_priv_createNewSearches: "검색 작성",
		workspacebuilder_roles_plbl_createNewSearches: "이 권한을 가진 사용자는 새 검색을 작성할 수 있지만 검색을 저장할 수 없습니다. 사용자에게 이 권한이 없으면 저장소에 이미 있는 문서를 팀 작업영역에 추가할 수 없습니다.",

		workspacebuilder_roles_priv_shareSearches: "검색 공유",
		workspacebuilder_roles_plbl_shareSearches: "이 권한을 가진 사용자는 자신이 작성한 검색을 팀 작업영역의 다른 사용자와 공유할 수 있습니다.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "클래스 또는 입력 템플리트 관리",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "이 권한을 가진 사용자는 팀 작업영역에서 클래스 또는 입력 템플리트를 추가하거나 제거할 수 있습니다.",

		workspacebuilder_roles_priv_addRemoveClasses: "클래스 관리",
		workspacebuilder_roles_plbl_addRemoveClasses: "이 권한을 가진 사용자는 팀 작업영역에서 클래스를 추가하거나 제거할 수 있습니다.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "팀 작업영역 사용자 관리",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "이 권한을 가진 사용자는 팀 작업영역에서 사용자와 그룹을 추가하거나 제거할 수 있습니다. 또한 사용자에게 지정된 역할을 관리할 수도 있습니다.",

		workspacebuilder_roles_priv_modifyRoles: "역할 수정",
		workspacebuilder_roles_plbl_modifyRoles: "이 권한이 있는 소유자는 팀 작업영역의 역할 권한을 수정할 수 있습니다. 이 권한은 소유자에게만 사용 가능합니다.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "사용자 선택",
		workspacebuilder_users_add_users_and_groups_button: "여러 사용자 및 그룹 추가...",
		workspacebuilder_users_users_or_group_header: "사용자 및 그룹",
		workspacebuilder_users_roles_header: "역할",

		workspacebuilder_users_role_header: "역할",
		workspacebuilder_users_role_no_permissions: "이 역할에는 권한이 없습니다.",
		workspacebuilder_users_available_roles_label: "사용 가능한 역할:",
		workspacebuilder_users_selected_users_and_groups_label: "선택된 사용자 및 그룹:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "팀 작업영역을 저장할 수 없습니다. 이 작업영역에 한 명 이상의 소유자를 지정해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "팀 작업영역을 저장할 수 없습니다. 모든 사용자에게 역할을 지정해야 합니다.",
		// end of select users

		workspacebuilder_search_templates: "검색 선택",
		workspacebuilder_search_add: "검색 추가",
		workspacebuilder_properties_workspaceName: "팀 작업영역 이름:",
		workspacebuilder_properties_templateName: "템플리트 이름:",
		workspacebuilder_properties_workspaceDescription: "팀 작업영역 설명:",
		workspacebuilder_properties_templateDescription: "템플리트 설명:",
		workspacebuilder_properties_workspaceTemplate: "선택된 템플리트:",
		workspacebuilder_properties_security: "템플리트 공유 대상:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "팀 작업영역에서 이동:",
		moveTeamspaceDocuments_security: "문서 공유 대상:",
		moveTeamspaceDocuments_security_change: "선택된 항목의 사용자 정의 보안 지정",
		moveTeamspaceDocuments_item_type_level: "선택된 항목의 클래스가 클래스 레벨 보안만 사용하도록 구성되어 있으므로 선택된 항목의 보안 재정의를 선택할 수 없습니다.",
		moveTeamspaceDocuments_security_inherit: "대상 폴더에서 보안 상속",
		moveTeamspaceDocuments_file_info_text: "하나의 팀 작업영역에서 다른 팀 작업영역 또는 폴더로 항목을 이동할 수 있습니다.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "선택된 폴더로 항목을 이동할 수 있는 적합한 권한이 없습니다.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "팀 작업영역에서 항목을 이동할 수 있는 적합한 권한이 없습니다.",
		moveTeamspaceDocuments_move_mixed_items: "선택된 항목의 보안을 재정의할 수 없습니다. 일부 항목은 팀 공간에서 관리되지 않습니다. 팀 공간에서 관리되는 항목의 보안만 재정의할 수 있습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "팀 작업영역의 이름을 지정해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "팀 작업영역 템플리트의 이름을 지정해야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "팀 작업영역 이름에 \\ / : * ? \" < > | 문자를 사용할 수 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "템플리트 이름에 \\ / : * ? \" < > | 문자를 사용할 수 없습니다.",

		workspacebuilder_folders_makeDocLink: "문서로 링크",
		workspacebuilder_folders_makeDocCopy: "문서 복사",
		workspacebuilder_folders_newfolder: "새 폴더",
		workspacebuilder_folders_local_drive: "로컬 디렉토리에서",
		workspacebuilder_folders_from_repo: "저장소에서",
		workspacebuilder_folders_add_doc: "문서 추가",
		workspacebuilder_folders_grid_name: "이름",
		workspacebuilder_folders_props: "특성",
		workspacebuilder_folders_remove: "제거",
		workspacebuilder_folders_delete: "삭제",
		workspacebuilder_folders_adddoc_local: "로컬 드라이브에서 문서 추가",
		workspacebuilder_folders_adddoc_repo: "저장소에서 문서 추가",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "지정된 폴더 이름이 이미 존재합니다. 다른 폴더 이름을 지정하십시오.",

		workspacebuilder_classes_title: "클래스 또는 입력 템플리트 선택",
		workspacebuilder_classes_title_cm: "클래스 선택",
		workspacebuilder_classes_template_introText: "이 템플리트에서 작성된 팀 작업영역에서 저장소에 문서를 추가할 때 클래스나 입력 템플리트를 사용할 것인지 여부를 지정하십시오. 선택된 클래스가 없으면 팀 작업영역은 액세스 권한이 있는 모든 클래스를 표시합니다. 적절한 권한이 있는 경우 사용자는 팀 작업영역에서 입력 템플리트 또는 클래스의 목록을 수정할 수 있습니다.",
		workspacebuilder_classes_template_introText_cm: "사용자가 저장소에 문서를 추가할 때 사용할 수 있는 클래스를 선택하십시오. 클래스가 선택되지 않은 경우, 팀 작업영역 사용자에게 액세스 권한이 있는 모든 클래스가 표시됩니다. 적절한 권한을 가진 사용자는 팀 작업영역에서 클래스 목록을 수정할 수 있습니다.",
		workspacebuilder_classes_instance_introText: "사용자가 저장소에 문서를 추가할 때 사용할 수 있는 클래스 또는 입력 템플리트를 선택하십시오. 클래스가 선택되지 않은 경우 팀 작업영역 사용자에게 권한이 있는 모든 클래스가 표시됩니다. 적절한 권한을 가진 사용자는 팀 작업영역에서 클래스 또는 입력 템플리트 목록을 수정할 수 있습니다.",
		workspacebuilder_classes_instance_introText_cm: "사용자가 저장소에 문서를 추가할 때 사용할 수 있는 클래스를 선택하십시오. 클래스가 선택되지 않은 경우 팀 작업영역 사용자에게 권한이 있는 모든 클래스가 표시됩니다. 적절한 권한을 가진 사용자는 팀 작업영역에서 클래스 목록을 수정할 수 있습니다.",
		workspacebuilder_classes_selection: "클래스 선택:",
		workspacebuilder_classes_list: "사용 가능한 클래스:",
		workspacebuilder_classes_columns_default: "기본값",
		workspacebuilder_classes_columns_className: "클래스 이름",
		workspacebuilder_classes_type_classes: "클래스를 사용하여 문서 추가",
		workspacebuilder_classes_type_classes_tooltip: "나중에 사용하기 위해 문서를 찾을 수 있도록 클래스는 연관된 특성을 포함합니다.",
		workspacebuilder_classes_type_entryTemplates: "입력 템플리트를 사용하여 문서 추가",
		workspacebuilder_classes_type_entryTemplates_tooltip: "입력 템플리트는 각 문서에 제공된 정보가 일관성 있고 사전 정의된 값을 사용하는지 확인합니다.",
		workspacebuilder_classes_type_entryTemplates_columnName: "입력 템플리트 이름",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "설명",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "하나 이상의 입력 템플리트를 팀 작업영역에 추가해야 합니다.",

		workspacebuilder_classes_new: "새 클래스",
		workspacebuilder_classes_add: "클래스 추가",
		workspacebuilder_entryTemplate_add: "입력 템플리트 추가",
		workspacebuilder_add_list: "추가",
		workspacebuilder_makeDefault_list: "기본값으로 설정",
		workspacebuilder_removeDefault_list: "기본값 제거",

		workspacebuilder_roles_title: "역할 선택",
		workspacebuilder_roles_title_modify: "역할 수정",

		workspacebuilder_selection_moveup: "위로 이동",
		workspacebuilder_selection_movedown: "아래로 이동",
		workspacebuilder_selection_remove: "제거",
		workspacebuilder_selection_add: "추가",
		workspacebuilder_selection_create_new_search: "새 검색...",
		workspacebuilder_selection_create_new_role: "새 역할...",
		workspacebuilder_selection_make_role_available: "사용 가능하도록 설정",
		workspacebuilder_selection_make_role_available_tooltip: "선택 역할을 다른 템플리트와 공유하십시오. 공유하려면 하나 이상의 권한을 역할에 지정해야 합니다.",

		workspacebuilder_navigation_next: "다음",
		workspacebuilder_navigation_finish: "완료",
		workspacebuilder_navigation_validate: "유효성 검증",
		workspacebuilder_navigation_previous: "이전",
		workspacebuilder_navigation_cancel: "취소",
		workspacebuilder_navigation_customize: "사용자 정의",

		workspacebuilder_search_dialog_title: "검색",
		workspacebuilder_dialog_close: "닫기",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "템플리트 가용성:",
		workspace_properties_templateState_tooltip: "사용자가 이 템플리트를 사용하는 팀 작업영역을 작성하지 못하게 하려면 템플리트를 사용 불가능하도록 설정하십시오.",
		workspace_properties_dialog_title: "템플리트 특성",
		workspace_properties_online_radio_option_label: "사용 가능하도록 설정",
		workspace_properties_offline_radio_option_label: "사용 불가능하도록 설정",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "변경사항을 저장하지 않고 취소하시겠습니까?",
		workspacebuilder_cancel_confirmation_button: "예",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "유효하지 않은 항목이 템플리트에서 제거되어 사용자가 이를 사용할 수 있습니다. 이 팀 작업영역 템플리트의 유효성을 검증하시겠습니까?",
		workspacebuilder_validate_confirmation_button: "예",
		workspacebuilder_validate_confirmation_title: "유효성 검증",

		/* Entry templates builder */
		entry_templates: "입력 템플리트 관리자",
		no_entry_templates_were_found: "입력 템플리트가 없음",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "필터",

		/* Roleselector widget */
		role_selector_name: "역할:",

		/* User Group picker widget */
		directory_label: "디렉토리:",
		scope_label: "검색 대상:",
		name_starts_with_label: "이름 시작 부분",
		name_contains_label: "이름 포함",
		display_name_contains_label: "표시 이름 포함",
		starts_with_label: "시작 단어:",
		available_label: "사용 가능:",
		available_heading: "사용 가능",
		selected_label: "선택됨:",
		selected_heading: "선택됨",
		available_repositories_label: "사용 가능한 저장소",
		selected_repositories_label: "선택된 저장소",
		default_repository: "기본 저장소:",
		default_repository_placeholder: "저장소 선택",
		default_role_placeholder: "역할 선택",
		menu_label_placeholder: "레이블 선택 또는 입력",
		default_repository_hover: "사용자가 이 데스크탑에서 웹 클라이언트에 로그인할 때 기본적으로 선택하는 저장소를 지정하십시오.<br><br><b>중요:</b> 기본 저장소를 지정하기 위해서는 선택된 저장소 목록 데스크탑에 저장소를 추가해야 합니다.",
		default_repository_workflow_hover: "<b>주의사항:</b> 이 데스크탑을 위해 구성된 저장소에만 애플리케이션 공간을 구성할 수 있습니다.",
		remove_label: "제거",
		users_label: "사용자",
		groups_label: "그룹",
		user_or_group_name_label: "사용자 또는 그룹 이름",
		user_or_group_name_hover: "저장소에 유효한 사용자 또는 그룹 이름을 입력하십시오. 이름이 유효성 검증되지 않습니다.",
		user: "사용자",
		group: "그룹",
		name: "이름:",
		displayName: "표시 이름",
		display_name: "표시 이름:",
		shortName: "단축 이름:",
		distinguishedName: "구별 이름:",
		search_tooltip: "검색",
		add_tooltip: "추가",
		add_selected_tooltip: "선택된 목록에 추가",
		remove_tooltip: "제거",
		remove_selected_tooltip: "선택된 목록에서 제거",
		add_to_selected_tooltip: "추가",
		remove_from_selected_tooltip: "제거",
		move_up_selected_tooltip: "위로 이동",
		move_down_selected_tooltip: "아래로 이동",
		advanced_search_options_tooltip: "고급 설정",
		move_right_selected_tooltip: "하위 메뉴로 이동",
		move_left_selected_tooltip: "하위 메뉴 밖으로 이동",
		add_separator: "구분자 추가",
		menu_item_label: "메뉴 항목 레이블:",
		add_menu_label: "하위 메뉴 추가",
		menu_label: "하위 메뉴 레이블:",
		menu_label_info: "<b>중요:</b> 이 메뉴를 저장하기 전에 하나 이상의 메뉴 항목을 이 하위 메뉴에 추가해야 합니다.",
		menu_dropdown_label: "드롭 다운 단추 레이블:",
		menu_dropdown_label_info: "<b>중요:</b> 이 도구 모음을 저장하기 전에 이 드롭 다운 단추에 하나 이상의 메뉴 항목을 추가해야 합니다.",
		no_item_found: "결과가 없습니다.",
		me: "사용자",
		anyone: "모두",
		specific_users: "특정 사용자",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "검색에서 {0}개 보다 많은 결과를 리턴했습니다. 검색 범위를 좁히려면 기준을 변경하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "검색 결과에 이미 선택된 항목이 포함되어 있습니다. 해당 항목은 검색 결과에 표시되지 않습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "{0}개가 넘는 결과가 리턴되었습니다. 필터를 사용하여 결과를 좁히십시오.",

		user_already_selected: "지정된 사용자가 이미 선택되어 있습니다. 다른 사용자를 지정하십시오.",
		group_already_selected: "지정된 그룹이 이미 선택되어 있습니다. 다른 그룹을 지정하십시오.",
		user_cannot_select_self: "자신을 추가할 수는 없습니다. 다른 사용자를 지정하십시오.",

		/* Select User Group dialog */
		select_user_group_add_label: "추가",
		select_user_group_cancel_label: "취소",
		add_users_groups_label: "여러 사용자 및 그룹 추가",
		add_user_group_label: "사용자 및 그룹 추가",
		add_users_label: "여러 사용자 추가",
		add_user_label: "사용자 추가",
		add_label: "추가:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "다음 문서에는 저장하지 않은 어노테이션 변경사항이 포함되어 있습니다.",
		viewer_confirm_to_proceed: "변경사항이 유실되어도 계속하시겠습니까?",
		viewer_warn_has_changes: "저장하지 않은 변경사항은 적용되지 않습니다.",
		viewer_warn_is_printing: "진행 중인 인쇄가 완료되지 않았을 수 있습니다.",
		viewer_warn_confirm_exit: "종료하시겠습니까?",
		viewer_prompt_save_changes: "다음 문서에는 유실될 저장하지 않은 어노테이션 변경사항이 포함되어 있습니다.<br>${0}<br><br>변경사항을 저장하시겠습니까?",
		viewer_prompt_mergesplit_changes: "다음 문서에는 저장하지 않은 변경사항이 포함되어 있습니다.<br>${0}<br><br>변경사항이 유실되어도 계속하시겠습니까?",
		viewer_prompt_mergesplit_tab_changes: "다음 문서에는 저장하지 않은 변경사항이 포함되어 있습니다.<br>${0}<br><br>변경사항이 유실되어도 계속하시겠습니까?",
		viewer_new_item_name: "새 문서",
		viewer_top_frame: "맨 위 프레임:",
		viewer_bottom_frame: "맨 아래 프레임:",
		viewer_left_frame: "왼쪽 프레임:",
		viewer_right_frame: "오른쪽 프레임:",
		viewer_viewer_frame: "뷰어 프레임:",
		viewer_properties_frame: "특성 프레임:",
		viewer_comment_frame: "주석 프레임:",
		viewer_mergesplit_on: "보기",
		viewer_mergesplit_off: "병합 및 분리",
		viewer_mergesplit_context_menu_move: "이동",
		viewer_mergesplit_context_menu_rename: "이름 바꾸기",
		viewer_mergesplit_context_menu_delete: "삭제",
		//move to new window
		viewer_move_to_new_window:"새 창으로 이동",
		viewer_continue:"변경사항 버리기",
		viewer_return_to_original_window:"원래 창으로 돌아가기",
		viewer_switch_window:"창 전환",
		viewer_prompt_lost_changes:"${0} 문서는 현재 다른 창에 열려 있습니다. 문서에 저장되지 않은 변경사항이 있습니다. <br><br>해당 창으로 전환하여 변경사항을 저장하거나 변경사항을 버리고 이 창에서 여시겠습니까?",
		viewer_mergesplit_fallback_info: "동일한 저장소에 있는 문서에 대한 병합 및 분리 조치만 완료할 수 있습니다.",
		viewer_tabbed_layout: "탭으로 보기",
		viewer_tabbed_layout_highcontrast: "탭",
		viewer_split_vertical_layout: "위아래로 분할창 분리",
		viewer_split_vertical_layout_highcontrast: "맨 위 및 맨 아래",
		viewer_split_horizontal_layout: "좌우로 분할창 분리",
		viewer_split_horizontal_layout_highcontrast: "왼쪽 및 오른쪽",
		viewer_add_vertical_layout: "맨 아래에 새 탭",
		viewer_add_vertical_layout_highcontrast: "맨 아래 탭",
		viewer_add_horizontal_layout: "오른쪽에 새 탭",
		viewer_add_horizontal_layout_highcontrast: "오른쪽 탭",
		viewer_add_horizontal_layout_rtl: "왼쪽에 새 탭",
		viewer_add_horizontal_layout_rtl_highcontrast: "왼쪽 탭",
		viewer_split_properties_layout: "특성 보기",
		viewer_split_comment_layout: "주석 보기",
		viewer_split_notelog_layout: "메모 로그 보기",
		viewer_window_title: "${0} 뷰어",
		viewer_next_hit: "목록의 다음 문서 보기",
		viewer_prev_hit: "목록의 이전 문서 보기",
		viewer_confrim_more_search_results: "검색 결과에 표시 가능한 문서가 더 이상 없습니다. 추가 검색 결과를 검색하시겠습니까?",
		viewer_confirm_get_next_page: "결과 목록에 표시 가능한 항목이 더 이상 없습니다. 추가 검색 결과를 검색하시겠습니까?",
		viewer_confirm_get_next_item: "결과 목록에 더 이상 표시 가능한 항목이 없습니다. 다음 항목을 보시겠습니까?",
		viewer_fn_annotation_tooltip: " 작성자: ${0}, 작성일: ${1}",
		viewer_box_note_limitation: "별도의 창에서 Box Notes를 열고 볼 수만 있습니다.",
		viewer_click_to_open_box_note: "Box Notes를 열려면 여기를 클릭하십시오.",
		viewer_box_view_expiring: "Box 문서를 볼 수 있는 최대 시간은 60분입니다. 현재 세션이 ${0}분 후에 만료됩니다. 계속해서 문서에 대해 작업하려면 지금 다시 로드해야 합니다. 문서를 다시 로드하시겠습니까?",
		viewer_add_dialog_save_as_type: "다음 유형으로 저장:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "체크아웃 충돌",
		viewer_checkout_conflict: "다른 사용자가 문서를 체크아웃했습니다.",
		viewer_checkout_confirm: "문서의 최신 버전을 사용할 수 있습니다. 문서 체크아웃을 계속하시겠습니까 아니면 최신 버전의 뷰어를 다시 로드하시겠습니까? 뷰어를 다시 로드하는 경우 저장하지 않은 변경사항은 유실됩니다.",
		viewer_checkout_continue: "체크아웃 계속",
		viewer_checkout_reload: "다시 로드",
		viewer_status_building: "문서 빌드 중...",
		viewer_status_adding: "문서 추가 중...",
		viewer_status_checking_in: "문서 체크인 중...",

		/* Class Selector Widget */
		include_subclasses_label: "서브클래스 포함",
		include_subclasses_label2: "서브클래스에서도 검색",
		include_subclasses_note: "(서브클래스 포함)",
		available_classes_col_header: "사용 가능한 클래스",
		single_class_label: "단일 클래스에서 검색",
		multiple_classes_label: "다중 클래스에서 검색",
		multiple_classes_hover_help: "둘 이상의 클래스에서 검색하려면 이 옵션을 선택하십시오. 클래스는 상위 클래스 또는 서브클래스가 될 수 있습니다. 이 옵션을 선택하면 선택된 클래스에 공통된 특성 및 값만 볼 수 있습니다.",
		selected_classes_col_header: "선택된 클래스",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(하위 폴더 포함)",
		favorites_pseudo_node: "\\즐겨찾기\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "저장소에서 문서를 추가할 폴더를 선택하십시오.",
		no_permission_add_folder: "이 폴더에 폴더를 추가할 수 있는 권한이 없습니다.",
		no_permission_add_document: "이 폴더에 문서를 추가할 수 있는 권한이 없습니다.",
		document_already_in_folder: "이 문서는 이미 이 폴더에 있습니다.",
		cant_move_folder_onto_parent: "이 폴더는 이미 이 폴더에 있습니다.",
		cant_move_folder_onto_self: "폴더를 동일한 폴더나 하위 폴더로 이동할 수 없습니다.",

		/* Workflow Widgets */
		process_application_space: "프로세스 애플리케이션 공간",
		process_role: "프로세스 역할",
		process_inbasket: "프로세스 작업함",
		process_worklist: "작업 목록",
		process_step_processor: "프로세스 작업 항목",
		process_tracker: "작업 항목 추적",
		process_info_subject: "주제",
		process_info_stepname: "단계",
		process_info_is_locked: "잠김",
		process_info_no_access: "액세스 권한 없음",
		process_info_received_on: "수신 날짜",
		process_info_overdue: "만기일 경과",
		process_info_reminder_sent: "리마인더 송신",
		process_info_locked_by_user: "잠근 사람",
		process_work_object_number: "작업 오브젝트 번호",
		process_deadline: "만기 날짜:",
		process_launchedby: "시작한 사람:",
		process_receivedon: "수신 날짜:",
		process_step: "단계:",
		process_properties: "특성",
		process_attachments: "첨부",
		process_attachments_select: "첨부 선택",
		process_finish_button_label: "추적 중지",
		process_tracker_history: "히스토리",
		process_tracker_milestones: "이정표",
		process_tracker_milestone: "이정표",
		process_tracker_milestone_level: "레벨",
		process_tracker_milestones_empty: "표시할 이정표가 없습니다.",
		process_tracker_level_selector_label: "표시할 최대 이정표 레벨",
		process_tracker_map_selector_label: "맵별 필터링:",
		process_tracker_message: "메시지",
		process_tracker_datereached: "도달한 날짜",
		process_tracker_stepname: "단계",
		process_tracker_cycle: "주기",
		process_tracker_review_cycle: "검토 주기",
		process_tracker_participant: "참가자",
		process_tracker_completed: "완료됨",
		process_tracker_response: "응답",
		process_tracker_comments: "주석",
		process_tracker_delete_confirmation: "다음 워크플로우의 추적을 중지하시겠습니까? ${0}",
		process_tracker_history_allmaps: "모든 맵",
		process_tracker_history_workflow: "워크플로우",
		process_tracker_history_terminate: "종료",
		process_tracker_history_malfunction: "오작동",
		process_filter_label: "필터",
		process_no_filter_summary: "적용된 필터 없음",
		process_filter_summary: "${0}개 적용됨",
		process_filter_reset_tooltip: "재설정하면 필터를 삭제하고 작업함을 새로 고칩니다.",
		process_attachments_add_folder: "폴더 추가",
		process_attachments_add_doc: "문서 추가",
		process_complete_button_label: "완료",
		process_save_button_label: "저장",
		process_launch_button_label: "워크플로우 시작",
		process_open_button_label: "열기",
		process_movetoinbox_button_label: "작업함으로 이동",
		process_return_button_label: "돌아가기",
		process_return_to_sender_tooltip: "작업 항목을 원래 작업함으로 되돌리기",
		process_move_to_inbasket_tooltip: "작업 항목을 개인 작업함으로 이동",
		process_reassign_tooltip: "다른 소유자에 작업 항목 재지정",
		process_reassign_button_label: "재지정",
		process_preferences_button_label: "환경설정",
		process_manageroles_button_label: "역할 관리",
		process_manageroles_no_members: "구성원이 없습니다.",
		process_responses_button_label: "추가 응답",
		process_morecustomaction_button_label: "추가 수행",
		process_show_instructions: "지시사항 보기",
		process_hide_instructions: "지시사항 숨기기",
		process_remove_attachment: "제거",
		process_close_window: "작업 항목이 처리되었습니다.",
		process_delegate_flag: "워크플로우의 다음 단계로 라우팅하기 전에 현재 소유자에게 작업 항목을 승인하도록 요청하십시오.",
		process_paticipant_voting: "승인 투표에 필요한 참가자 수:",
		process_get_next_label: "다음 작업 항목 가져오기",
		process_no_more_items: "작업함에 처리할 추가 항목이 없습니다.",
		process_workflow_name: "워크플로우 이름:",
		process_pattern_process_name: "${0}의 검토",
		process_instuctions: "검토자를 위한 지시사항:",
		process_pattern_deadline: "만기 날짜:",
		process_reviewers: "검토자:",
		process_approvals_required: "승인 필수:",
		process_on_reject: "작업 항목이 거부되는 경우:",
		process_return_to_originator: "돌아오기",
		process_return_to_previous_reviewer: "이전의 검토자로 돌아가기",
		process_additional_settings: "추가 설정:",
		process_allow_reassign: "검토자가 이 검토를 재지정하도록 허용",
		process_complete_notification: "검토가 완료되면 나에게 알림",
		process_workflow_name_hover_help: "작업 항목에 지정하는 이름으로 검토자가 작업함에서 기타 작업 항목과 이 작업 항목 간에 쉽게 구별할 수 있어야 합니다.",
		process_approvals_required_hover_help: "작업 항목을 동시에 여러 사용자가 검토하는 경우 작업 항목을 완료하는 데 필요한 승인 수를 지정할 수 있습니다.",
		process_approval_options: "승인 옵션",
		process_all: "모두",
		process_at_least: "최소",
		process_at_least_by_count: "최소 ${0} 수의 검토자",
		process_at_least_by_percentage: "최소 ${0}%명의 검토자",
		process_comments: "주석:",
		process_review_step_comments_hover_help: "작업 항목을 거부하면 해당 이유에 대한 정보를 제공해야 합니다. 이 정보를 통해 작업 항목의 기안자나 이전의 검토자가 해당 문제를 해결할 수 있습니다.",
		process_rework_step_comments_hover_help: "주석을 해결한 방법에 대한 정보를 제공해야 합니다. 주석에 동의하지 않는 경우 본인 의사결정에 대한 근거를 제공하십시오.",
		process_rejection_reason: "거부 이유:",
		process_summary: "요약",
		process_sequential_review: "순차 검토",
		process_sequential_review_description: "순서대로 각 검토자가 작업 항목을 검토합니다.",
		process_parallel_review: "병렬 검토",
		process_parallel_review_description: "동시에 모든 검토자가 작업 항목을 검토합니다.",
		process_parallel_approvals_required_error: "필요한 승인 수가 너무 높습니다. ${0}명의 검토자만 지정되었습니다.",
		process_parallel_invalid_required_approvals_count: "값이 유효하지 않습니다. 값이 ${0}여야 합니다.",
		process_subject_prompt: "주제를 입력하십시오.",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "작업 항목:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "특성 보기",
		view_permissions_level: "권한 보기",
		view_content_level: "문서 보기",
		link_level: "링크",
		modify_properties_level: "특성 편집",
		modify_content_level: "문서 편집",
		minor_version_level: "부 버전 편집",
		major_version_level: "주 버전 편집",
		create_instance_level: "인스턴스 작성",
		delete_document_level: "문서 삭제",
		delete_item_level: "항목 삭제",
		modify_document_permissions_level: "권한 관리",
		modify_folder_permissions_level: "권한 관리",
		modify_owner_level: "소유자 수정",
		delete_folder_level: "폴더 삭제",
		file_in_folder_level: "폴더에 추가",
		create_subfolder_level: "하위 폴더 작성",
		link_item_level: "문서에 어노테이션 작성, 폴더에 추가", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>문서 전용: 문서에 어노테이션 추가 또는 문서에서 어노테이션 제거</li><li>폴더 전용: 폴더에 항목 추가 또는 폴더에서 항목 제거</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "삭제",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "소유자",
		/* previously \"Full control\" */
		edit_privilege: "작성자",
		/* previously \"Edit\" */
		read_only_privilege: "리더",
		/* previously \"Read only\" */
		no_access_privilege: "액세스 권한 없음",
		share_with_label: "공유 대상:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "나만",
		public_label: "모든 사용자",
		members_label: "특정 사용자 및 그룹",
		select_members_label: "선택...",
		select_user_group_label: "사용자 선택...",
		select_users_groups_label: "사용자 및 그룹 선택...",
		select_user_label: "사용자 선택...",
		propagation_label: "전파:",
		access_label: "권한:",
		add_permission_add_label: "추가",
		security_policy_label: "보안 정책:",
		includes_inherited_access: "상속된 액세스 포함",
		customize_access_for_label: "액세스 사용자 정의 대상:",
		customize: "사용자 정의",
		direct: "이 항목",
		singleLevelInheritance: "하나의 레벨",
		infiniteLevelInheritance: "모든 레벨",
		inherited: "상속됨",
		direct_hover_help: "선택된 항목에 보안 설정 적용",
		singleLevelInheritance_hover_help: "이 권한은 이 항목 및 이 항목에서 보안이 상속되도록 구성된 인접 하위에 적용됩니다.",
		infiniteLevelInheritance_hover_help: "이 권한은 이 항목 및 이 항목에서 보안이 상속되도록 구성된 모든 하위에 적용됩니다.",
		inherited_hover_help: "이 권한은 상위에서 상속됩니다.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0}에 대한 권한은 이 항목 및 이 항목에서 보안이 상속되도록 구성된 인접 하위에 적용됩니다.",
		infiniteLevelInheritance_member_hover_help: "${0}에 대한 권한은 이 항목 및 이 항목에서 보안이 상속되도록 구성된 모든 하위에 적용됩니다.",
		inherited_member_hover_help: "${0}에 대한 권한은 상위에서 상속됩니다.",
		partial_hover_help: "항목 보안 설정이 사용자에 의해 변경되었습니다.",
		allow: "허용",
		deny: "거부",
		basic: "기본",
		advanced: "고급",
		permission_type: "액세스 설정 대상:",
		share_with_hover_help: "이 항목은 현재 다음 사용자 및 그룹과 공유됩니다.",
		direct_security_policy_hover_help: "이 보안 정책의 설정에서 이 항목의 보안을 변경하도록 허용합니다.",
		security_policy_hover_help: "이 보안 정책의 설정에서 이 항목의 보안을 변경하는 것을 방지하므로 이 항목의 보안은 읽기 전용입니다.",
		security_remove: "권한 없음",
		pseudo_group_label: "별명 계정",
		marking_hover_help: "이 항목의 보안은 마킹 세트에 의해 제어되며 항목의 보안에 영향을 줄 수 있습니다.",
		note_label: "중요:",
		marking_text: "이 항목은 ${0}(으)로 표시됩니다. 이 항목에 추가적인 보안 제한사항이 있을 수 있습니다.",
		authenticated_users: "인증된 사용자",
		realm_users: "${0} 사용자",
		denyAll: "모두 거부",
		allowAll: "모두 허용",
		remove_direct_text: "변경사항을 저장할 때 이 구성원에 대한 권한이 항목에서 제거됩니다.",
		remove_single_inheritance_text: "변경사항을 저장할 때 이 구성원에 대한 권한이 이 항목 및 <br>이 항목에서 보안이 상속되도록 구성된 인접 하위에서 제거됩니다.<p>계속하시겠습니까?",
		remove_infinite_inheritance_text: "변경사항을 저장할 때 이 구성원에 대한 권한이 이 항목 및 <br>이 항목에서 보안이 상속되도록 구성된 모든 하위에서 제거됩니다.<p>계속하시겠습니까?",
		remove_inheritance_text: "변경사항을 저장할 때 이 구성원에 대한 권한이 이 항목 및 <br>이 항목에서 보안이 상속되도록 구성된 모든 하위에서 제거됩니다. 이 항목에서 상속된 권한만 <br>유지됩니다.<p>계속하시겠습니까?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "${0}에 대한 해당 권한 제거",

		security_proxy_text: "이 항목의 보안은 읽기 전용입니다.",
		security_proxy_declared_text: "이 항목의 보안은 보안 프록시에서 정의되므로 읽기 전용입니다.",
		security_proxy_hover_help: "이 항목의 보안은 저장소 내 다른 오브젝트에 설정된 보안에 의해 제어됩니다.",
		add_permissions_label: "권한 추가",
		permission_propagation_direct: "현재 폴더만",
		permission_propagation_onelevel: "이 폴더와 한 단계 아래 레벨",
		permission_propagation_alllevels: "이 폴더와 그 아래 모든 레벨",
		document_propagation_label: "액세스 설정 대상:",
		document_propagation_FOLDER: "폴더",
		document_propagation_DOCUMENT: "문서",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "인증 소스:",

		/* Versions Widget */
		object_versions_selector_label: "버전:",
		object_versions_label: "버전",
		object_type_document_label: "문서:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "보관된 폴더",
		folders_filed_in_folder_col_hdr: "폴더",
		folders_filed_in_path_col_hdr: "경로",
		folders_filed_in_containment_name_col_hdr: "포함 이름",
		folders_filed_in_creator_col_hdr: "작성자",
		folders_filed_in_date_created_col_hdr: "작성일",

		/* Parent Documents */
		properties_parent_documents_label: "상위 문서",

		/* Select object dialog */
		select_object_title: "항목 선택",
		select_object_breadCrumb_version_prefix: "다음 항목의 버전: ",
		show_versions_label: "버전 표시",
		use_current_version_label: "현재 버전 사용",
		use_released_version_label: "릴리스된 버전 사용",

		/* Select content class dialog */
		select_class: "클래스 선택",
		/* Select Search dialog */
		select_search: "검색 선택",

		/* Show hyperlink dialog */
		show_hyperlink_title: "링크 보기",
		show_hyperlink_intro: "이메일, 차트 및 웹 페이지에 링크를 복사하여 붙여넣을 수 있습니다. 항목의 버전이 여러 개인 경우, 링크할 버전을 지정하십시오.",
		show_hyperlink_intro_no_version_select: "이메일, 차트 및 웹 페이지에 링크를 복사하여 붙여넣을 수 있습니다.",
		show_text_label: "버전:",
		released_button_label: "릴리스됨",
		current_button_label: "현재",
		select_button_label: "특정 버전",
		show_hyperlink_no_released_version_msg: "이 문서의 릴리스된 버전이 없습니다.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "워크플로우 시작",
		edit_workflow_title: "작업 항목 특성",
		start_workflow_intro: "워크플로우를 실행하여 선택된 항목을 처리하십시오. 작업 항목을 특정 사용자에게 지정하려면 소유자를 지정하십시오.",
		edit_workflow_intro: "선택된 작업 항목의 특성을 편집할 수 있습니다. 작업 항목을 다른 사용자에게 재지정하려면 소유자를 지정하십시오.",
		workflow_field_label: "워크플로우:",
		priority_field_label: "우선순위:",
		owner_field_label: "소유자:",
		start_button_label: "시작",
		save_button_label: "저장",
		owner_value_hint: "영숫자 문자열을 입력하십시오(최대 32자). 이 문자열은 공백 또는 a-z, A-Z, 0-9, ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @ 문자만 사용할 수 있습니다.",

		properties_content_elements_label: "컨텐츠 요소",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "값이 유효하지 않습니다. 이 값은 공백 또는 a-z, A-Z, 0-9, ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @ 문자만 사용할 수 있습니다.",
		priority_value_hint: "1 - 32000 범위의 값을 입력하여 작업 항목의 중요도를 표시하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "값이 유효하지 않습니다. 우선순위는 1 - 32000 범위의 값이어야 합니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "워크플로우 이름이 존재하지 않습니다.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "워크플로우에서 일시중단",
		suspend_workitems_intro: "워크플로우에서 작업 항목을 일시중단하면 재개할 때까지 작업 항목을 처리할 수 없습니다.",
		suspend_workitems_options_label: "선택된 작업 항목 일시중단:",
		suspend_until_resume_label: "수동 재개 시까지",
		suspend_until_date_label: "종료",
		suspend_for_duration_label: "기간",
		suspend_for_duration_hours: "시간",
		suspend_for_duration_days: "일 수",
		suspend_for_duration_weeks: "주",
		suspend_for_duration_months: "달",
		suspend_for_duration_years: "년",
		suspend_button_label: "일시중단",
		suspend_duration_value_hint: "지속기간에 1 - 99 범위의 값을 입력하십시오.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "값이 유효하지 않습니다. 1 - 99 범위의 값이어야 합니다.",

		/* Remove from workflow */
		remove_workflow_title: "워크플로우에서 제거",
		remove_workflow_confirmation: "선택된 항목을 워크플로우에서 제거하시겠습니까?<br>${0}개의 항목이 선택되었습니다.",
		remove_workflow_button_label: "제거",

		/* Unfile dialog */
		unfile_dialog_title: "폴더에서 제거",
		unfile_dialog_remove_from_folder_label: "제거 위치:",
		unfile_dialog_info_text: "폴더에서 항목을 제거할 수 있습니다. 그러나 모든 폴더에서 항목을 제거하는 경우 저장소에서 항목이 제거되지 않습니다. 검색을 실행하여 여전히 항목을 검색할 수 있습니다. 보기 권한이 있는 폴더만 이 목록에 표시됩니다.",
		unfile_dialog_select_all: "모두 선택",
		unfile_dialog_deselect_all: "모두 지우기",
		unfile_dialog_remove_button_label: "제거",
		unfile_dialog_select_folder_col_hdr: "폴더 선택",
		unfile_dialog_folder_col_hdr: "폴더",
		unfile_dialog_path_col_hdr: "경로",
		unfile_dialog_not_filed_msg: "이 항목은 어떤 폴더에도 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "이 항목이 있는 어떠한 폴더에서도 이 항목을 제거할 수 있는 권한이 없습니다.",
		unfile_dialog_folder_not_selectable_tooltip: "이 폴더에서 이 항목을 제거할 수 있는 권한이 없습니다.",
		unfile_multi_prompt: "선택된 항목을 ${0} 폴더에서 제거하시겠습니까?",
		unfile_large_number_items_confirmation_question: "${1} 폴더에서 ${0}개 항목을 제거하도록 선택했습니다.<br/>폴더에서 다수의 항목을 제거하는 데 오랜 시간이 걸릴 수 있습니다.<br/>계속하시겠습니까?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "열기",
		move_to_folder_title: "폴더로 이동",
		move_to_folder_button_caption: "이동",
		move_to_folder_label: "다음 위치로 이동:",
		add_to_folder_title: "폴더에 추가",
		add_to_folder_button_caption: "추가",
		add_to_folder_label: "다음 위치에 추가:",
		copy_to_folder_title: "폴더에 복사",
		copy_to_folder_button_caption: "복사",
		copy_to_folder_label: "복사 대상:",
		copy_to_folder_delete_label: "복사가 완료된 후에 Box에서 선택한 항목을 삭제하십시오.",
		move_from_folder_label: "다음 위치에서 이동:",
		move_file_info_text: "한 폴더에서 다른 폴더로 항목을 이동할 수 있습니다.",
		move_folder_info_text: "하나의 상위 폴더에서 다른 상위 폴더로 폴더를 이동할 수 있습니다.",
		add_doc_to_folder_info_text: "하나 이상의 폴더에 항목을 추가할 수 있습니다. 이미 폴더에 있는 항목은 해당 폴더에 유지되며 사용자가 지정하는 추가적인 폴더에 추가됩니다.",
		copy_doc_to_folder_info_text: "폴더에 항목을 복사할 수 있습니다.",
		box_copy: "Box 복사",
		box_copy__button_caption: "복사",
		box_copy_to_info_text: "Box에서 선택된 항목을 복사할 저장소 및 폴더를 선택하십시오.",
		box_copy_from_info_text: "Box에서 선택된 항목을 복사할 저장소 및 폴더를 선택하십시오.",
		box_copy_version_info_text: "새 문서를 추가하려면 저장소 및 폴더를 선택하십시오. 새 버전에서 체크인하려면 저장소 및 문서를 선택하십시오.",
		admin_box_copy: "Box 복사",
		admin_box_copy_hover: "이 옵션을 사용하여 사용자가 Box에 문서를 복사할 수 있습니다.",

		no_permission_to_copy_version_msg: "선택한 문서의 새 버전으로 Box에서 문서를 복사할 수 없습니다. 선택한 문서를 편집할 수 있는 적합한 권한이 없거나 선택한 문서가 다른 사용자에 의해 체크아웃되었습니다.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "이 항목이 있는 어떠한 폴더에서도 이 항목을 제거할 수 있는 권한이 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "이 폴더에서 이 항목을 제거할 수 있는 권한이 없습니다.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "이 항목은 폴더에 보관되어 있지 않으므로 이동할 수 없습니다. 다른 항목을 선택하십시오.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "워크플로우 시작",
		subscriptions_dialog_available_items_label: "사용 가능한 항목:",
		subscriptions_dialog_info_text: "실행할 워크플로우를 지정하십시오.",
		subscriptions_dialog_select_button_label: "확인",
		subscriptions_dialog_name_col_hdr: "이름",
		subscriptions_dialog_desc_col_hdr: "설명",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "역할 관리",
		manageroles_dialog_info_text: "이 프로세스 애플리케이션 공간과 연관된 각 역할마다 사용자의 목록을 수정할 수 있습니다.",
		manageroles_dialog_members_label: "구성원",
		manageroles_dialog_roles_label: "역할",
		manageroles_dialog_add_button_label: "여러 사용자 및 그룹 추가",
		manageroles_dialog_remove_button_label: "제거",
		manageroles_dialog_save_button_label: "저장",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "이 항목과 연관된 워크플로우가 없습니다.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "워크플로우 환경 설정",
		workflow_pref_dialog_info_text: "이메일 알림을 수신할 워크플로우 이벤트를 지정하십시오. 작업을 위임할 사용자를 선택하여 다른 사용자에게 작업을 라우트하는 옵션을 사용할 수 있습니다.",

		workflow_pref_general: "일반",
		workflow_pref_email_address: "이메일 주소",
		workflow_pref_email_address_hover: "워크플로우 알림을 수신할 이메일 주소를 지정하십시오.",
		workflow_pref_preferred_locale: "언어",
		workflow_pref_preferred_locale_hover: "이메일 알림을 표시할 언어를 지정합니다.",

		workflow_pref_work_item_notice: "작업 항목 알림",
		workflow_pref_step_new_assignment: "새 작업 항목이 나에게 지정됨",
		workflow_pref_step_new_assignment_hover: "새 작업 항목을 수신하면 나에게 알림",
		workflow_pref_step_expired_deadline: "작업 항목 데드라인이 경과했음",
		workflow_pref_step_expired_deadline_hover: "작업 항목 데드라인이 경과하면 나에게 알림",
		workflow_pref_step_reminders: "작업 항목 데드라인 근접",
		workflow_pref_step_reminders_hover: "작업 항목 데드라인에 근접하면 작업 항목에 대해 나에게 알림",

		workflow_pref_originator_notice: "기안자 알림",
		workflow_pref_milestone_reached: "이정표에 도달함",
		workflow_pref_milestone_reached_hover: "내가 시작한 워크플로우에서 이정표에 도달한 경우 나에게 알림",

		workflow_pref_tracker_notice: "워크플로우 트래커 알림",
		workflow_pref_tracker_new_assignment: "새 트래커 항목이 나에게 지정됨",
		workflow_pref_tracker_new_assignment_hover: "내가 추적 중인 워크플로우가 실행되면 나에게 알림",
		workflow_pref_tracker_deadline_reminders: "워크플로우 데드라인 근접",
		workflow_pref_tracker_deadline_reminders_hover: "워크플로우 데드라인에 근접하면 워크플로우에 대해 나에게 알림",
		workflow_pref_tracker_deadline_expired: "워크플로우 데드라인이 경과했음",
		workflow_pref_tracker_deadline_expired_hover: "워크플로우 데드라인이 경과하면 나에게 알림",
		workflow_pref_tracker_exception: "워크플로우 오류가 발생함",
		workflow_pref_tracker_exception_hover: "워크플로우 예외 또는 오류가 발생하면 나에게 알림",
		workflow_pref_tracker_expired_deadline: "단계 데드라인이 경과했습니다.",
		workflow_pref_tracker_expired_deadline_hover: "내가 추적 중인 워크플로우에서 단계 데드라인이 경과하면 나에게 알림",
		workflow_pref_tracker_milestone_reached: "이정표에 도달함",
		workflow_pref_tracker_milestone_reached_hover: "내가 추적 중인 워크플로우에서 이정표에 도달한 경우 나에게 알림",

		workflow_pref_out_notice: "부재 중",
		workflow_pref_proxy_user: "작업 위임 대상",
		workflow_pref_proxy_user_hover: "사무실에서 멀리 있거나 휴가 중인 경우 등 다른 사용자에게 작업을 자동으로 라우트하려면 이 옵션을 사용하십시오.",
		workflow_pref_workflow: "워크플로우",
		workflow_pref_on: "다음 날짜",
		workflow_pref_off: "해제",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "워크플로우 시작",
		transfered_workflows_dialog_info_text: "실행할 워크플로우를 선택하십시오.",
		transfered_workflows_dialog_available_items_label: "사용 가능한 항목:",
		transfered_workflows_dialog_select_button_label: "실행",
		transfered_workflows_dialog_name_col_hdr: "이름",
		transfered_workflows_dialog_no_item_found: "전송된 워크플로우를 찾지 못했습니다.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "워크플로우 전송",
		transfer_workflow_dialog_info_text: "워크플로우 시스템으로 전송할 워크플로우를 선택하십시오.",
		transfer_workflow_dialog_use: "이 워크플로우 이름 사용",
		transfer_workflow_dialog_use_another: "다른 워크플로우 이름 사용",
		transfer_workflow_dialog_in_use: "워크플로우 이름: ",
		transfer_workflow_dialog_transfer_button_label: "전송",
		transfer_workflow_dialog_no_items_found: "전송된 워크플로우를 찾지 못했습니다.",
		transfer_workflow_dialog_use_hover: "워크플로우 정의에서 현재 워크플로우 이름을 지정하십시오.",
		transfer_workflow_dialog_another_hover: "다른 워크플로우 이름을 지정하거나 기존의 전송된 워크플로우 이름을 재사용하십시오.",

		/*Search In control*/
		search_in_title: "검색 위치:",
		search_in_teamspaces: "팀 작업영역",
		search_in_repositories: "저장소",
		search_in_thisteamspaces: "이 팀 작업영역",

		ajaxViewer_save: "어노테이션 저장",
		ajaxViewer_print: "인쇄 미리보기",
		ajaxViewer_firstPage: "첫 번째 페이지",
		ajaxViewer_previousPage: "이전 페이지",
		ajaxViewer_nextPage: "다음 페이지",
		ajaxViewer_lastPage: "마지막 페이지",
		ajaxViewer_unknownPageCount: "1 / ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0}/${1}",
		ajaxViewer_zoomOut: "축소",
		ajaxViewer_zoomIn: "확대",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "너비에 맞춤",
		ajaxViewer_fitHeight: "높이에 맞춤",
		ajaxViewer_fitPage: "페이지에 맞춤",
		ajaxViewer_rotate270: "270도 회전",
		ajaxViewer_rotate90: "90도 회전",
		ajaxViewer_rotate180: "180도 회전",
		ajaxViewer_darken: "어둡게",
		ajaxViewer_lighten: "밝게",
		ajaxViewer_lessContrast: "명암: 어둡게",
		ajaxViewer_moreContrast: "명암: 밝게",
		ajaxViewer_invert: "반전",
		ajaxViewer_createHighlight: "강조",
		ajaxViewer_createNote: "어노테이션 작성",
		ajaxViewer_editAnnotation: "어노테이션 특성 편집",
		ajaxViewer_deleteAnnotation: "어노테이션 삭제",
		ajaxViewer_editAnnotationTitle: "어노테이션 특성 편집",
		printableView_print: "인쇄",
		printableView_close: "닫기",

		search_results_dropdown_button: "결과 표시",
		search_results_columns_label: "검색 결과 표시",
		search_results_columns_description: "검색 결과에 표시하려는 특성을 선택하십시오.",
		search_results_sortby_label: "정렬 기준:",
		search_results_order_label: "정렬 순서:",
		search_results_accending_label: "오름차순",
		search_results_descending_label: "내림차순",
		search_results_available_properties: "사용 가능",
		search_results_selected_properties: "선택됨",
		search_rank_property: "순위(텍스트 검색만 해당)",
		search_name_attribute: "이름(${0})",
		search_results_summary_enabled_label: "컨텐츠 요약 사용(텍스트 검색만 해당)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "검색",
		manage_teamspace_classes_tab_title: "클래스",
		manage_teamspace_entry_templates_tab_title: "입력 템플리트",
		manage_teamspace_team_tab_title: "팀",
		manage_teamspace_roles_tab_title: "역할",
		manage_teamspace_dialog_title: "팀 작업영역 수정",
		manage_teamspace_button_label: "팀 작업영역 수정",
		manage_teamspace_team_pane_heading: "팀 선택",
		manage_teamspace_classes_pane_heading: "클래스 선택",
		manage_teamspace_entry_templates_pane_heading: "입력 템플리트 선택",
		manage_teamspace_no_rights_message: "이 팀 작업영역을 수정할 수 있는 권한이 없습니다.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "팀 작업영역 특성",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "사용자가 팀 작업영역에서 찾아보기를 수행하는 중에 컨텐츠 목록의 문서 및 폴더를 표시하려는 특성을 지정하십시오. 또한 특성이 표시되는 순서를 지정할 수 있습니다.",
		teamspace_props_sel_cols_use_default_label: "이 저장소에 대해 <b>찾아보기</b> 설정 사용",
		teamspace_props_sel_cols_use_default_tooltip: "관리 도구에서 이 저장소에 대한 찾아보기 페이지에 지정된 설정을 사용하십시오.",
		teamspace_props_general_tab_label: "일반",
		teamspace_props_column_props_tab_label: "표시된 특성",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "가져올 파일 선택",
		teamspace_import_template_instruction: "팀 작업영역 템플리트 내보내기 파일을 선택하여 가져올 수 있습니다.",
		teamspace_import_template_button_label: "가져오기",
		teamspace_import_template_dialog_label: "팀 작업영역 템플리트 가져오기",

		/* Annotation Dialog */
		annotationDlg_title: "어노테이션",
		annotationDlg_description: "선택한 문서에 다음 어노테이션이 있습니다.",
		annotationDlg_msg_noAnnotations: "어노테이션이 없습니다. 추가를 클릭하여 어노테이션을 작성하십시오.",
		annotationDlg_pageLabel: "페이지: ${pageNum}",
		annotationDlg_accLabel: "액세스: ${accType}",
		annotationDlg_accLabel_public: "공용",
		annotationDlg_accLabel_private: "개인용",
		annotationDlg_accLabel_privateGroup: "개인용(${groupName})",
		annotationDlg_copiable: "다른 서버에 복사할 수 있음",
		annotationDlg_cannotCopy: "다른 서버에 복사할 수 없음",
		annotationDlg_addButtonLabel: "추가",

		/* Share Dialog */
		is_shared: "공유",
		is_share_pending: "보류 중인 공유",
		share_title: "Box 공유",
		share_instructions_new: "공유 파일에 대한 링크가 포함된 이메일을 발송하십시오. 링크가 있는 사용자는 파일에 액세스할 수 있습니다.",
		share_instructions_existing: "공유 파일에 대한 링크가 포함된 이메일을 발송하십시오. 링크가 있는 사용자는 파일에 액세스할 수 있습니다. 누군가 이미 이 파일을 공유했기 때문에 다른 사용자가 링크를 소유할 수 있습니다.",
		share_instructions_another_version_shared: "공유 파일에 대한 링크가 포함된 이메일을 발송하십시오. 링크가 있는 사용자는 파일에 액세스할 수 있습니다. 누군가 이미 이 파일의 다른 버전을 공유했기 때문에 다른 사용자가 링크를 소유할 수 있습니다.",
		share_buttonLabel_share: "공유",
		share_email_addresses: "송신처:",
		share_email_addresses_hover: "공유가 완료되면 링크가 해당 이메일 주소로 송신됩니다. 아무 것도 입력하지 않은 경우 링크가 사용자 자신의 이메일 주소로 송신됩니다.",
		share_email_addresses_reshare_hover: "공유가 완료되면 링크가 해당 이메일 주소로 송신됩니다. 아무 것도 입력하지 않은 경우 이메일이 송신되지 않습니다.",
		share_password: "비밀번호 설정:",
		share_password_placeholder: "선택적",
		share_comments: "메시지:",
		share_comments_default: "Box에서 내 파일을 공유하고 싶습니다.",
		share_myEmail: "발신처:",
		share_expiration: "링크 만기 설정:",
		share_expire: "액세스 만료 시기:",
		share_expire_none: "만료되지 않음",
		share_allowDownload: "다운로드 허용",
		share_add: "추가",
		share_advanced_instructions: "다운로드, 만기 및 비밀번호 설정은 Box의 공유 파일에 적용됩니다.",
		share_advanced_existing_instructions: "다운로드, 만기 및 비밀번호 설정은 Box의 공유 파일에 적용됩니다.",
		share_options_edit_warning: "중요: 이러한 설정을 변경하면 이미 링크가 있는 사용자를 포함하여 링크가 있는 모든 사용자에게 영향을 미칩니다.",
		share_link: "링크:",
		share_email_addresses_placeholder: "이메일 주소",
		share_email_address_placeholder: "이메일 주소",
		share_email_address_invalid: "올바른 이메일 주소를 입력하십시오.",
		share_cannot_share_with_self: "자신과 파일을 공유할 수 없습니다. 다른 사용자를 지정하십시오.",
		share_selected_version_with_minor_warning_hover: "${0} 버전의 문서가 공유됩니다. ${1} 버전을 선택했습니다.<br><br><b>경고</b>: ${1} 버전을 공유하는 경우 ${1} 버전에 대한 공유를 삭제하지 않는 한 ${2} 버전을 공유할 수 없습니다.",
		share_selected_version_hover: "${0} 버전의 문서가 공유됩니다. ${1} 버전을 선택했습니다.",
		share_selected_version_message: "중요: ${0} 버전의 문서를 공유합니다. ${1} 버전을 선택했습니다.",
		share_different_version_message: "중요: ${1} 버전을 선택했지만 ${0} 버전의 문서가 이미 공유되었습니다. 공유를 먼저 삭제하지 않는 한 ${1} 버전을 공유할 수 없지만 대신 ${0} 버전에 대한 링크를 공유할 수 있습니다.",
		share_version_message: "중요: ${0} 버전의 문서를 공유합니다. 공유할 버전을 선택하십시오.",
		share_version_new: "공유 버전 ${0}",
		share_version_new_p8_hover: "이 문서를 공유하면 선택한 버전에 대해서만 특정 버전 링크를 생성합니다.<br><br>문서가 이미 공유된 경우:<ul><li>최신 버전을 공유할 수 있으면 최신 버전에 대한 링크 경로를 재지정합니다.</li><li>공유를 먼저 삭제하지 않는 한 이전 버전을 공유할 수 없습니다.</li></ul>",
		share_version_new_cm_hover: "이 문서를 공유하면 선택한 버전에 대해서만 특정 버전 링크를 생성합니다.<br><br>문서가 이미 공유된 경우:<ul><li>최신 버전을 공유할 수 있으면 최신 버전에 대한 링크 경로를 재지정합니다.</li><li>이전 버전을 공유할 수 없습니다.</li></ul>",
		share_version_update: "공유 버전 ${0}(공유 옵션을 업데이트하십시오.)",
		share_version_update_p8_hover: "이 문서를 공유하면 특정 버전에 대해서만 링크를 유지보수합니다.<br><br>문서가 이미 공유된 경우:<ul><li>최신 버전을 공유할 수 있으면 최신 버전에 대한 링크 경로를 재지정합니다.</li><li>공유를 먼저 삭제하지 않는 한 이전 버전을 공유할 수 없습니다.</li></ul>",
		share_version_update_cm_hover: "이 문서를 공유하면 특정 버전에 대해서만 링크를 유지보수합니다.<br><br>문서가 이미 공유된 경우:<ul><li>최신 버전을 공유할 수 있으면 최신 버전에 대한 링크 경로를 재지정합니다.</li><li>이전 버전을 공유할 수 없습니다.</li></ul>",
		share_version_change_to_current: "공유 버전 ${0}(선택한 버전으로 공유를 업데이트하십시오.)",
		share_version_change_to_current_p8_hover: "이 문서를 공유하면 선택한 버전 대해서만 연결하도록 링크를 업데이트합니다.<br><br>문서가 이미 공유된 경우:<ul><li>최신 버전을 공유할 수 있으면 최신 버전에 대한 링크 경로를 재지정합니다.</li><li>공유를 먼저 삭제하지 않는 한 이전 버전을 공유할 수 없습니다.</li></ul>",
		share_version_change_to_current_cm_hover: "이 문서를 공유하면 선택한 버전 대해서만 연결하도록 링크를 업데이트합니다.<br><br>문서가 이미 공유된 경우:<ul><li>최신 버전을 공유할 수 있으면 최신 버전에 대한 링크 경로를 재지정합니다.</li><li>이전 버전을 공유할 수 없습니다.</li></ul>",
		share_repository: "공유 파일 저장소",
		share_repository_hover: "사용할 Box 저장소를 확인하지 못한 경우 저장소 페이지에 새 Box 저장소를 추가할 수 있습니다.",
		share_options: "공유 옵션",
		unshare_confirm: "공유를 삭제한 경우 다른 사용자가 이전에 송신한 공유 링크를 포함하여 모든 공유 링크가 중단됩니다. 문서를 공유할 다른 사용자는 원래 문서를 선택하여 다시 공유해야 합니다.<br><br>공유를 삭제하시겠습니까?",
		unshare_button: "Box 공유 삭제",
		admin_share: "Box 공유 서비스:",
		admin_share_hover: "사용자가 Box 공유를 사용할 수 있는 저장소에서 문서를 공유할 수 있도록 허용하십시오. 문서 공유에는 Box에 파일 복사하기, 링크 작성하기 및 이메일로 링크 발송하기가 포함됩니다.",
		admin_my_email_modifiable: "사용자가 발신처 이메일 주소를 수정하도록 허용",
		admin_my_email_modifiable_hover: "기본적으로 Box 공유의 경우 사용자의 이메일 주소는 읽기 전용이고 사용자 및 Box 사용자 계정을 표시하는 이메일 주소의 맵핑에서 가져옵니다.<br><br>사용자가 공유할 때 이메일 주소를 편집하도록 하려면 이 옵션을 선택하십시오. 그러나 이메일 주소의 유효성은 확인되지 않습니다.",
		admin_repos_admin_user: "공유 관리자:",
		admin_repos_admin_user_hover: "공유 서비스가 사용 가능한 Box가 포함된 데스크탑이 있고 이 Box 저장소가 공유 파일의 저장소로 선택된 경우 공유 관리자를 설정하십시오.<br><br>설정을 클릭하고 유효한 Box 관리자 계정을 사용하여 Box에 로그인하십시오.<br><br>공유 관리자는 Box의 무제한 스토리지를 포함하도록 구성된 Box 관리자여야 합니다.",
		admin_repos_admin_user_not_set_warning: "선택한 저장소에 대한 Box 관리자가 구성되지 않았습니다.<br><br>선택한 저장소에 대한 Box 관리자를 설정하거나 Box 관리자가 구성되어 있는 다른 Box 저장소를 선택할 때까지 Box 공유 서비스를 사용할 수 없습니다.<br><br>저장소에 대한 일반 페이지의 Box 공유 서비스 섹션에 Box 관리자를 설정할 수 있습니다.",
		admin_share_not_configured_warning: "Box 공유 서비스를 사용하기 전에 먼저 서버 인증이 포함된 Box 저장소를 추가하고 선택해야 합니다.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online 구성",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "이 데스크탑에 액세스하는 사용자가 Office Online Server를 사용하여 Office 문서를 편집할 수 있도록 할 것인지 여부를 지정하십시오.",		
		admin_office_online_allow_collaborative_editing: "협업 편집 허용",
		admin_office_online_allow_collaborative_editing_hover: "둘 이상의 사용자가 동일한 문서에 대해 작업할 수 있도록 허용합니다. 문서 편집을 한 명의 사용자로 제한하려는 경우 이 옵션을 선택 취소하십시오.",
		admin_office_online_repository_not_set_warning: "Office Online 서비스를 사용하기 전에 먼저 저장소에서 서비스를 사용으로 설정하고 Microsoft Office Online Server URL을 지정해야 합니다. <b>저장소</b>를 클릭하고 저장소를 선택한 후 <b>편집 통합</b> 탭에서 서비스를 사용으로 설정하십시오. <b>설정 > 일반</b>을 클릭하고 Microsoft Office Online Server URL을 입력하십시오.",
		admin_settings_office_online_server_enable_hover: "Office Online Server를 사용하여 Office 문서에 대해 작업할 것인지 여부를 지정하십시오.",
		admin_office_online_server_url: "Microsoft Office Online Server URL",
		admin_office_online_server_url_hover: "다른 애플리케이션이 Office Online Server와 통신할 수 있는 URL을 지정하십시오. URL 형식은 http://server_name:port_number/hosting/discovery입니다.",
		admin_office_online_server_Verified: "검증됨",
	    admin_office_online_server_Failed: "<b>실패함</b>",

		admin_repcfg_office_online_service_p8_hover: "Office Online Server를 사용하도록 저장소를 초기화하기 위해 각 Office 애플리케이션에 대한 초기 템플리트 파일을 추가할 수 있습니다. 템플리트가 지정되지 않으면 기본 템플리트가 사용됩니다.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server 통합",
		admin_repcfg_office_online_service_url_not_set_warning: "Office Online Server를 사용하기 전에 먼저 Microsoft Office Online Server URL을 지정해야 합니다. 설정 > 일반을 클릭하고 URL을 입력하십시오.",
		admin_repcfg_office_online_word_template_name: "기본 Word 템플리트",
		admin_repcfg_office_online_excel_template_name: "기본 Excel 템플리트",
		admin_repcfg_office_online_powerpoint_template_name: "기본 PowerPoint 템플리트",
		admin_repcfg_office_online_blank_template_description: "이것은 자체 템플리트를 추가하지 않는 경우 사용되는 기본 템플리트입니다.",
		/* Edit Service settings */
		admin_icn_edit_title: "편집 구성",	
	    admin_icn_edit_files_cleanup_interval: "임시 파일 정리 간격(일):",
	    admin_icn_edit_files_cleanup_interval_hover: "임시 파일이 ICN 편집 클라이언트에 보관되는 시간을 설정할 수 있습니다. 기본 시간은 20일입니다. 최대 시간은 20일입니다. 최소 시간은 1일입니다.",
	    admin_icn_edit_service_integration: "편집 서비스 통합",
	    admin_icn_edit_service_integration_intro: "편집 서비스를 사용하여 사용자는 컴퓨터에 설치된 원시 앱에서 파일을 쉽게 추가하거나 편집할 수 있습니다.<br><br><b>중요:</b> 편집 서비스를 사용하는 경우, 사전 정의된 카테고리를 편집하려면 먼저 저장소 구성을 저장해야 합니다.",
		admin_icn_edit_service: "편집 서비스:",
		admin_icn_edit_enable_hover: "편집 서비스를 사용하려면 다음을 수행해야 합니다.<ul><li>저장소에 대한 해당 서비스 사용 설정</li><li>사용 중인 환경의 데스크탑에 대한 해당 서비스 사용 설정</li><li>사용자 워크스테이션에 IBM Content Navigator Edit 클라이언트 설치</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "사용",
		admin_icn_edit_disable: "사용 안함",
		admin_icn_edit_create_new_category: "새 카테고리",
		admin_icn_edit_delete_category: "카테고리 삭제",
		admin_icn_edit_edit_category: "카테고리 편집",
		admin_icn_edit_disable_category: "카테고리 사용 안함",
		admin_icn_edit_enable_category: "카테고리 사용",
		admin_icn_edit_new_category_dialog_title: "새 카테고리",
		admin_icn_edit_edit_category_dialog_title:"카테고리 편집",
		admin_icn_edit_new_category_dialog_instructions: "문서 카테고리를 통해 템플리트를 편집 서비스의 특정 MIME 유형과 연관할 수 있습니다. 예를 들어, 템플리트 세트를 PDF 파일과 연관하여 사용자가 IBM Content Navigator Edit 클라이언트에서 파일을 추가하거나 편집할 때 템플리트를 적용하도록 할 수 있습니다. <br><br><b>중요:</b> 작성한 카테고리에 템플리트를 추가하려면 먼저 저장소 구성을 저장해야 합니다. ",
		admin_icn_edit_edit_category_dialog_instructions: "이 카테고리에 템플리트를 추가하려면 먼저 저장소 구성을 저장해야 합니다. ",
		admin_icn_edit_delete_category_dialog_instructions: "이 카테고리와 이 카테고리에 연관된 템플리트를 삭제하시겠습니까?<br><br><b>중요:</b> 변경사항은 저장소에 저장될 때까지 영구적이지 않습니다. ",
		admin_icn_edit_category_label: "카테고리: ",
		admin_icn_edit_category_discription_label:"설명: ",
		admin_icn_edit_template_column_head:"템플리트 이름",
		admin_icn_edit_category_duplicate_error_message: "이 ID의 카테고리가 이미 있습니다. ",
		admin_icn_edit_word_category_description: "이 카테고리는 편집 서비스에서 Microsoft Word 문서에 사용 가능한 템플리트를 정의합니다. ",
		admin_icn_edit_excel_category_description: "이 카테고리는 편집 서비스에서 Microsoft Excel 문서에 사용 가능한 템플리트를 정의합니다. ",
		admin_icn_edit_powerpoint_category_description: "이 카테고리는 편집 서비스에서 Microsoft PowerPoint 문서에 사용 가능한 템플리트를 정의합니다. ",

		icn_edit_add_template_dialog_title:"${0} 템플리트 추가",
		icn_edit_add_template_only_one_file_error: "하나의 파일만 선택할 수 있습니다.",
		icn_edit_add_template_file_type_error: "유효한 ${0} 템플리트 파일을 지정해야 합니다.<br><br>선택한 문서는 ${1}의 MIME 유형입니다.<br><br>유효한 MIME 유형: ${2}.",
		icn_edit_change_template_dialog_title: "${0} 템플리트 편집",
		icn_edit_action_in_new_menu_name:"${0} 문서",
		icn_edit_action_in_new_menu_submenu_oo_name: "Office Online으로",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "데스크탑 앱으로",
		icn_edit_new_document_dialog_title: "새 ${0} 문서",
		icn_edit_new_document_dialog_intro: "새 ${0} 문서를 작성하여 저장소에 추가하십시오. 선택한 편집 서비스 템플리트를 사용하여 문서가 작성됩니다.", 
		icn_edit_select_edit_service_template: "템플리트 선택",
		icn_edit_edit_service_template: "편집 서비스 템플리트:",
		icn_edit_new_document_category_no_templates_message:"이 카테고리에 템플리트가 없습니다. 이 카테고리에 템플리트를 추가하려면 관리자에게 문의하십시오.",
		icn_edit_installer: "IBM Content Navigator Edit 설치 프로그램",
		admin_icn_cm_classes_and_roles_settings: "클래스 및 역할 설정",
		admin_repcfg_classes_and_roles_warning: "템플리트를 작성, 편집 및 사용하거나 Office Online 서비스 및 편집 서비스에서 작동하는 문서의 드래프트를 작성할 수 있는 클래스 및 사용자 또는 사용자 그룹을 지정하려는 경우",
		admin_repcfg_classes_and_roles_click_warning: "여기를 클릭하십시오.",
		/* Edit Service settings END */
		share_no_my_email_error: "문서를 공유하는 데 필요한 이메일 주소를 식별하는 중 문제가 발생했습니다.",
		share_no_my_email_error_explanation: "사용자 ID ${0}(으)로 로그인했지만 사용자 ID가 이메일 주소에 맵핑되지 않습니다.",
		share_no_my_email_error_userResponse: "다시 로그인하거나 다른 사용자 ID를 사용하여 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 이 오류를 보고하십시오.",
		share_no_my_email_error_adminResponse: "사용자 ID ${0}은(는) 이메일 주소에 맵핑되지 않고 데스크탑 ${1}은(는) 사용자가 Box 공유 서비스의 이메일 주소를 편집할 수 있도록 허용하지 않습니다.<br><br>다음 솔루션 중 하나를 시도하십시오.<br>이메일 맵핑 플러그인이 등록되어 있는지 확인하십시오.<br>emailMappingPlugin.json 파일에 사용자 ID ${0} 및 사용자 이메일 주소가 포함되어 있는지 확인한 후 이메일 맵핑 플러그인을 빌드하고 구성하고 등록하십시오.<br>이메일 맵핑 플러그인 또는 FileNet P8 이메일 주소 디렉토리를 사용하지 않지만 대신 사용자가 문서를 공유할 때 자신의 이메일 주소를 입력할 수 있도록 허용하는 경우 Box 공유 서비스에 대한 데스크탑 설정을 수정하여 사용자가 다른 이메일 주소에서 링크를 발송할 수 있도록 허용할 수 있습니다.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "이 문서의 이후 버전이 공유되어 이 문서의 선택된 버전을 공유할 수 없습니다.",
		share_later_version_shared_error_explanation: "이전에 공유된 문서의 이전 버전을 공유할 수 없습니다.",
		share_later_version_shared_error_userResponse: "문서의 이후 버전에 링크를 송신하려면 먼저 이후 버전을 선택한 후 공유 조치를 사용해야 합니다.<br><br>문서의 선택된 버전을 공유하려면 먼저 문서의 이후 버전에 대한 공유를 삭제해야 합니다.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "새 메시지",
		email_from: "시작:",
		email_to: "끝:",
		email_cc_link: "참조",
		email_bcc_link: "숨은 참조",
		email_cc: "참조:",
		email_bcc: "숨은 참조:",
		email_address_invalid: "올바른 이메일 주소를 입력하십시오.",
		email_subject: "주제:",
		email_message: "메시지:",
		email_message_placeholder: "메시지 추가",
		email_attachments: "첨부 파일:",
		email_links: "링크:",
		email_send: "송신",
		email_dont_send: "보내지 않음",
		email_subject_reminder: "제목 리마인더",
		email_subject_reminder_confirm: "제목 없이 이 메시지를 보내시겠습니까?",
		email_missing_from_error: "이메일을 발송하는 데 필요한 발신인 이메일 주소를 식별하는 중 문제가 발생했습니다.",
		email_missing_from_error_explanation: "사용자 ID ${0}(으)로 로그인했지만 사용자 ID가 이메일 주소에 맵핑되지 않습니다.",
		email_missing_from_error_userResponse: "다시 로그인하거나 다른 사용자 ID를 사용하여 로그인하십시오. 문제점이 지속되면 시스템 관리자에게 이 오류를 보고하십시오.",
		email_missing_from_error_adminResponse: "사용자 ID ${0}은(는) 이메일 주소에 맵핑되지 않고 데스크탑 ${1}은(는) 사용자가 발신인 이메일 주소를 편집할 수 있도록 허용하지 않습니다.<br><br>다음 솔루션 중 하나를 시도하십시오.<br>이메일 맵핑 플러그인이 등록되어 있는지 확인하십시오.<br>emailMappingPlugin.json 파일에 사용자 ID ${0} 및 사용자 이메일 주소가 포함되어 있는지 확인한 후 이메일 맵핑 플러그인을 빌드하고 구성하고 등록하십시오.<br>이메일 맵핑 플러그인 또는 FileNet P8 이메일 주소 디렉토리의 사용을 원하지 않지만 사용자가 이메일을 발송할 때 자신의 이메일 주소를 입력할 수 있도록 허용하고자 하는 경우, 데스크탑의 이메일 설정을 수정하여 사용자가 발신인 이메일 주소를 수정하도록 허용할 수 있습니다.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "문서를 열 수 없습니다.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator는 IBM Content Navigator Edit 클라이언트에 연결할 수 없습니다.",
		open_edit_document_with_native_application_error_userResponse: "워크스테이션에서 IBM Content Navigator Edit 클라이언트를 설치하고 시작하십시오. 그런 다음 문서를 다시 열어 보십시오.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "문서를 열 수 없습니다.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator는 IBM Content Navigator Edit 클라이언트에 연결할 수 없습니다.",
		connect_to_the_streamline_service_error_userResponse: "워크스테이션에서 IBM Content Navigator Edit 클라이언트를 설치하고 시작하십시오. 그런 다음 문서를 다시 열어 보십시오.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator가 문서를 공유하도록 올바르게 구성되지 않았습니다.",
		share_not_configured_error_explanation: "문서를 공유하기 전에 Box 공유 기능을 올바르게 구성해야 합니다.",
		share_not_configured_error_userResponse: "관리자에게 문의하여 Box 공유 기능을 구성하도록 요청하십시오.",
		share_not_configured_error_adminResponse: "문서를 공유하기 전에 다음 항목을 구성해야 합니다.<ul><li>관리 도구 설정에서 태스크 관리자 서비스를 사용으로 설정해야 합니다.</li><li>저장소에 태스크 관리자 연결 ID를 구성해야 합니다.</li><li>저장소에서 공유가 사용 가능해야 합니다.</li><li>데스크탑에서 공유할 Box 저장소를 선택해야 합니다.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "특성 변경사항이 새 버전에 저장되지 않았습니다.",
		checkin_cors_save_attributes_error_explanation: "버전이 작성되었지만 특성 변경사항이 저장되지 않았습니다. 이 문서는 아직 체크아웃된 상태일 수 있습니다.",
		checkin_cors_save_attributes_error_userResponse: "특성 컨텍스트 메뉴 항목을 사용하여 문서를 잠금 해제하고 특성을 업데이트하십시오.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "특성 변경사항이 새 문서에 저장되지 않았습니다.",
		add_cors_save_attributes_error_explanation: "문서가 작성되었지만 특성 변경사항이 저장되지 않았습니다.",
		add_cors_save_attributes_error_userResponse: "특성 컨텍스트 메뉴 항목을 사용하여 특성을 업데이트하십시오.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "문서를 열 수 없습니다.",		
		edit_document_using_edit_service_error_explanation: "편집 서비스에서 문서를 열 수 없습니다. ",
		edit_document_using_edit_service_error_userResponse: "편집 서비스 통합을 업데이트하려면 관리자에게 요청하십시오.<br><br> 사용자가 편집 서비스에서 이 문서에 액세스해야 하는 경우, 저장소의 편집 통합 페이지로 이동하여 편집 서비스 지원을 위해 수정할 클래스 목록에 해당 클래스를 포함하도록 편집 서비스 통합을 업데이트하십시오.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "문서를 열 수 없습니다.",		
		edit_document_is_editing_by_oos_error_explanation: "Office Online 서비스에서 문서를 사용 중입니다.",
		edit_document_is_editing_by_oos_error_userResponse: "편집 서비스에서 열기 전에 Office Online 서비스에서 문서를 저장한 후 닫아야 합니다.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "CORS(Cross-Origin Resource Sharing) 업로드 사용",

		/* Email Settings */
		admin_email_settings: "이메일 설정:",
		admin_email_settings_hover: "사용자가 사용할 이메일 서비스의 유형을 지정하십시오. HTML 기반 이메일 서비스를 사용으로 설정하면 사용자가 발신인 이메일 주소를 수정하도록 하는 옵션을 사용할 수 있습니다. Java 기반 이메일 서비스를 사용으로 설정할 경우 Java를 지원하는 브라우저가 있어야 합니다.",
		admin_email_use_service: "HTML 기반 이메일 서비스 사용",
		admin_email_use_applet: "Java 기반 이메일 서비스 사용",
		admin_email_can_modify_from: "사용자가 발신인 이메일 주소를 수정할 수 있도록 허용",
		admin_email_can_modify_from_hover: "기본적으로 발신인 이메일 주소는 수정할 수 없고 사용자 및 사용자 계정을 표시하는 이메일 주소의 맵핑에서 가져옵니다.<br><br>사용자가 이메일을 발송할 때 이메일 주소를 편집하도록 하려면 이 옵션을 선택하십시오. 그러나 이메일 주소의 유효성은 확인되지 않습니다.",
		admin_email_use_from_as_sender: "발신인 이메일 주소를 이메일의 발신인으로 사용",
		admin_email_use_from_as_sender_hover: "기본적으로 유효한 발신인 이메일 주소가 사용자의 이메일에 사용됩니다. 해당 이메일 주소는 애플리케이션 서버의 CNMailSession 메일 세션에 의해 정의됩니다. 사용자의 이메일 주소를 해당 이메일에서 사용하도록 지정하려면 이 옵션을 선택하십시오.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "새 어노테이션",
		addAnnotationDlg_labelContents: "컨텐츠",
		addAnnotationDlg_labelAccess: "액세스:",
		addAnnotationDlg_labelPublic: "공용",
		addAnnotationDlg_labelPrivate: "개인용",
		addAnnotationDlg_labelPrivateGroup: "그룹의 개인용",
		addAnnotationDlg_labelGroup: "그룹",
		addAnnotationDlg_labelCopiable: "이 어노테이션을 다른 서버에 복사할 수 있습니다.",
		addAnnotationDlg_buttonLabel_save: "저장",

		/* Skip navigation */
		skipNavigation_title_main: "기본 컨텐츠로 건너뛰기",
		skipNavigation_title_menu: "탐색 단추로 건너뛰기",
		skipNavigation_label_main: "기본 컨텐츠로 건너뛰기",
		skipNavigation_label_menu: "탐색 단추로 건너뛰기",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "팀 작업영역 관리",
		manage_teamspace_pane_instance_hdr: "팀 작업영역",
		manage_teamspace_pane_template_hdr: "템플리트",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "앞으로 스크롤",
		scroll_back: "뒤로 스크롤",

		breadcrumb_separator_open: "노드 열기",
		breadcrumb_separator_close: "노드 닫기",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "항목이 선택되지 않았습니다.",

		/* eds */
		eds_url: "외부 데이터 서비스 URL:",
		eds_request_timeout: "서비스 요청 제한시간(초):",
		eds_is_required: "EDS가 사용 불가능한 경우 사용자의 특성 값 변경 조치 수행 방지",

		/* eforms */
		eform_signing_pane_welcome: "양식 서명",
		eform_signing_button_label: "서명",
		eform_signing_pane_delete: "서명 삭제",
		eform_signing_button_label_delete: "삭제",

		xtplugin_server_label: "IBM FileNet Workplace XT 서버 URL",
		xtplugin_server_hover: "IBM FileNet Workplace XT가 배치된 서버의 URL(예: http://localhost:8080/WorkplaceXT)을 입력하십시오.",

		ecplugin_server_label: "IBM eClient 서버 URL",
		ecplugin_server_hover: "IBM eClient가 배치된 서버의 URL(예: http://localhost:9080/eClient/s)을 입력하십시오.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "다수의 항목에 대한 조치에는 오랜 시간이 걸릴 수 있습니다. 계속하시겠습니까?",
		large_number_actions_continue_button: "계속",

		large_items_actions_confirmation_question: "대량의 항목에 대한 조치에는 많은 시간이 소요될 수 있습니다. 계속하시겠습니까?",

		viewer_editproperties_title: "확인",
		viewer_editproperties_title_warning: "경고",
		viewer_editproperties_save: "저장",
		viewer_editproperties_next: "다음",
		viewer_editproperties_reset: "재설정",
		viewer_editproperties_reset_hover: "저장하지 않은 데이터가 이전에 저장된 값으로 재설정됩니다.",
		viewer_editproperties_saveandgetnext: "저장 후 다음 가져오기",
		viewer_editproperties_saveandgetnext_hover: "내 변경사항을 저장한 후에 자동으로 다음 문서 가져오기",
		viewer_editproperties_prompt_save_changes: "다음 문서의 특성을 변경했습니다.<br>${0}<br><br>변경사항을 저장하시겠습니까?",
		viewer_editproperties_prompt_discard_changes: "다음 문서의 특성을 변경했습니다.<br>${0}<br><br>그러나 하나 이상의 특성에 유효하지 않은 값이 있어 변경사항을 저장할 수 없습니다. 유효하지 않은 값을 정정하거나 변경사항을 버릴 수 있습니다.<br>특성 분할창에 표시된 유효하지 않은 값을 정정하시겠습니까?",
		viewer_comments_prompt_discard_changes: "주석을 수정했습니다. 변경사항을 저장하시겠습니까?",
		viewer_notelogs_prompt_discard_changes: "메모 로그를 수정했습니다. 변경사항을 저장하시겠습니까?",
		social_collaborated_version: "버전: ${0}",
		social_link_label: "사용자...",

		// social comments
		comments: "주석",
		comments_add_hint: "Enter를 눌러서 주석을 추가하십시오.",
		comments_hint: "주석을 입력하십시오.",
		comments_label: "Enter 또는 Tab을 눌러서 주석을 저장하십시오. 취소하려면 Esc를 누르십시오.",
		comments_delete_confirmation: "선택된 주석을 삭제하시겠습니까?",
		comments_number: "주석: ${0}",
		comments_save_new: "주석을 수정했습니다. 변경사항을 저장하지 않고 창을 닫으시겠습니까?",

		notelogs: "메모 로그",
		notelogs_download: "다운로드",
		notelog_modify: "변경사항 저장",
		notelog_edit: "메모 로그 편집",
		notelog_create_newVersion: "새 메모 로그 버전 작성",
		notelog_add_hint: "주석을 입력하고 Enter를 눌러서 추가하십시오.",
		notelog_hint: "줄 바꾸기에 대해 Shift+Enter를 누르십시오.",
		notelog_add_placeholder: "메모 로그에 주석을 추가하려면 Enter를 누르십시오.",
		notelog_save_new: "메모 로그를 수정했습니다. 변경사항을 저장하지 않고 창을 닫으시겠습니까?",

		// P8 markings related
		cannot_remove_markings: "마킹 값을 제거할 권한이 없습니다. {0}",

		// download count
		downloadcount: "다운로드: {0}",
		downloadcount_single: "하나의 다운로드",
		downloadcount_multiple: "{0}개의 다운로드",
		downloadcount_none: "이를 다운로드한 사용자가 아직 없음",

		// recommendations
		recommendations: "추천: {0}",
		recommendations_recommend: "이 항목 추천",
		recommendations_unrecommend: "이 항목을 추천하지 않음",
		recommendations_you: "사용자가 이 항목을 추천함",
		recommendations_you_and_another: "사용자와 다른 사용자가 이 항목을 추천함",
		recommendations_you_and_others: "사용자와 {0}명의 다른 사용자가 이 항목을 추천함",
		recommendations_another: "1명의 사용자가 이 항목을 추천함",
		recommendations_others: "{0}명의 사용자가 이 항목을 추천함",
		recommendations_none: "이 항목을 추천한 사용자가 아직 없음",

		// tags
		tags: "태그: ${0}",
		tags_delete: "${0} 삭제",
		tags_none: "표시할 태그가 없습니다.",
		tags_add: "태그 추가:",
		tags_hint: "Enter를 눌러서 태그를 추가하십시오.",
		tags_hover_help: "동일한 태그를 사용하는 문서를 검색하는 데 사용할 수 있는 태그 또는 태그 목록을 지정하십시오. 쉼표(,), 세미콜론(;) 또는 공백을 사용하여 태그를 구분할 수 있습니다.",
		tags_hover_help_box: "동일한 태그를 사용하는 문서를 검색하는 데 사용할 수 있는 태그 또는 쉼표로 구분된 태그 목록을 지정하십시오.",
		tags_no_access: "태그를 추가하는 데 필요한 적절한 권한이 없습니다.",

		//task scheduler pane
		taskPane_tooltip: "비동기 태스크 보기 열기",
		taskPane_tree: "태스크 분할창 탐색 트리",
		taskPane_allTasks: "모든 태스크",
		taskPane_scheduledTasks: "스케줄된 태스크",
		taskPane_recurringTasks: "반복 태스크",
		taskPane_inProgressTasks: "진행 중인 태스크",
		taskPane_completedTasks: "완료된 태스크",
		taskPane_failedTasks: "실패한 태스크",
		taskPane_disabledTasks: "사용 안하는 태스크",
		taskPane_statusScheduled: "스케줄됨",
		taskPane_statusInProgress: "진행 중",
		taskPane_statusCompleted: "완료됨",
		taskPane_statusFailed: "실패함",
		taskPane_statusPaused: "일시정지됨",
		taskPane_noItemSelected: "항목이 선택되지 않음",
		taskSchedulerPane_scheduleInformation: "스케줄 정보",
		taskSchedulerPane_loginInformation: "로그인 정보",
		taskSchedulerPane_startImmediately: "즉시 시작",
		taskSchedulerPane_recurrence: "반복",
		taskSchedulerPane_interval: "간격",
		taskSchedulerPane_scheduleReport: "스케줄 보고서",
		taskSchedulerPane_nameHoverHelp: "태스크의 이름을 입력하십시오.",
		taskSchedulerPane_descriptionHoverHelp: "태스크에 대한 설명을 입력하십시오. 설명은 태스크를 구별하는 데 도움이 되어야 합니다.",
		taskSchedulerPane_startTimeHoverHelp: "태스크를 실행할 시기를 지정하십시오. 지금 태스크를 실행하려면 즉시 시작을 선택하십시오.",
		taskSchedulerPane_recurrenceHoverHelp: "반복하여 태스크를 실행하도록 스케줄을 지정할 수 있습니다.",
		taskSchedulerPane_endTimeHoverHelp: "태스크 실행을 중지할 시기를 지정하십시오. 태스크는 스케줄된 시작 시간부터 스케줄된 종료 시간까지 실행됩니다.",
		taskSchedulerPane_usernameHoverHelp: "반복 태스크의 경우, 태스크가 실행될 때 서비스가 인증될 수 있도록 사용자 이름을 입력해야 합니다.",
		taskSchedulerPane_passwordHoverHelp: "반복 태스크의 경우, 태스크가 실행될 때 서비스가 인증될 수 있도록 지정된 사용자의 비밀번호를 입력해야 합니다.",
		taskSchedulerPane_notification: "알림",
		taskSchedulerPane_emailAddress: "이메일 주소",
		taskSchedulerPane_emailAddressHoverHelp: "태스크의 상태에 대한 알림을 수신할 이메일 주소를 입력하십시오.",
		taskSchedulerPane_intervalHoverHelp: "반복 태스크가 실행될 기간을 지정하십시오. 시간, 일, 주 또는 월 간격으로 설정할 수 있습니다.",
		taskSchedulerPane_scheduledStartTime: "스케줄된 시작 시간",
		taskSchedulerPane_startTime: "시작 시간",
		taskSchedulerPane_title: "스케줄",
		taskSchedulerPane_runNow: "지금 실행",
		taskSchedulerPane_runOnce: "한 번만 실행",
		taskSchedulerPane_runAtSchedule: "스케줄 실행",
		taskSchedulerPane_repeats: "반복",
		taskSchedulerPane_repeatsEvery: "반복 간격",
		taskSchedulerPane_hourly: "매시간",
		taskSchedulerPane_daily: "매일",
		taskSchedulerPane_weekly: "매주",
		taskSchedulerPane_monthly: "매월",
		taskSchedulerPane_yearly: "매년",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "시작 날짜",
		taskSchedulerPane_after: "이후",
		taskSchedulerPane_ending: "종료 날짜",
		taskSchedulerPane_times: "횟수",
		taskSchedulerPane_days: "일",
		taskSchedulerPane_hours: "일의 시간",
		taskSchedulerPane_interval: "간격",
		taskSchedulerPane_endingDays: "종료(일)",
		taskSchedulerPane_never: "없음",
		taskSchedulerPane_categorization: "범주화",
		taskSchedulerPane_scheduleTask: "스케줄 태스크",
		taskInformationPane_details: "세부사항",
		taskInformationPane_errors: "오류",
		taskInformationPane_taskInstances: "태스크 인스턴스",
		taskInformationPane_audits: "감사",
		taskInformationPane_results: "결과",
		asyncTasks: "비동기 태스크",

		//entry template pane
		search_all_entry_templates: "모든 입력 템플리트를 검색합니다.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "전체 사이트 보기",
		mobilesite: "모바일 사이트 보기",
		profile: "프로파일 관리",
		office_template: "Office 템플리트:",
		select_office_template: "Office 템플리트 선택",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "선택한 문서는 병합 및 분리 조치로 뷰어에서 열 수 없습니다.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "PDF 및 TIFF 문서용으로 구성된 뷰어는 병합 및 분리 조치를 지원하지 않습니다.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "관리자에게 Daeja ViewONE Virtual 뷰어와 같이 병합 및 분리 조치를 지원하는 PDF 및 TIFF 문서에 대해 뷰어를 구성하도록 요청하십시오.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "선택한 PDF 문서는 병합 및 분리 조치로 뷰어에서 열 수 없습니다.",
		document_builder_pdf_unsupported_viewer_error_explanation: "PDF 문서용으로 구성된 뷰어는 병합 및 분리 조치를 지원하지 않습니다.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "관리자에게 Daeja ViewONE Virtual 뷰어와 같이 병합 및 분리 조치를 지원하는 PDF 문서에 대해 뷰어를 구성하도록 요청하십시오.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "선택한 TIFF 문서는 병합 및 분리 조치로 뷰어에서 열 수 없습니다.",
		document_builder_tiff_unsupported_viewer_error_explanation: "TIFF 문서용으로 구성된 뷰어는 병합 및 분리 조치를 지원하지 않습니다.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "관리자에게 Daeja ViewONE Virtual 뷰어와 같이 병합 및 분리 조치를 지원하는 TIFF 문서에 대해 뷰어를 구성하도록 요청하십시오.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "선택한 문서는 병합 및 분리 조치로 뷰어에서 열 수 없습니다.",
		document_builder_unsupported_documents_error_explanation: "병합 및 분리 조치는 PDF 및 TIFF 문서에서만 작업합니다.",
		document_builder_unsupported_documents_error_userResponse: "지원되는 문서를 선택하고 다시 시도하십시오.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "선택한 문서 중 일부는 병합 및 분리 조치로 뷰어에서 열 수 없습니다.",
		document_builder_some_unsupported_documents_error_explanation: "병합 및 분리 조치를 동일한 저장소에서 열리는 PDF 및 TIFF 문서에서만 작업합니다.",
		document_builder_some_unsupported_documents_error_userResponse: "지원되는 문서는 뷰어에서 열립니다.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "수정된 컨텐츠를 체크인하는 중에 오류가 발생했습니다.",
		document_builder_checkin_failed_explanation: "수정된 컨텐츠를 체크인하는 중에 뷰어에서 오류 응답을 수신했습니다.",
		document_builder_checkin_failed_userResponse: "시스템 관리자에게 문의하여 웹 애플리케이션 서버 로그 파일을 검토하십시오.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "문서를 열 수 없습니다.",
		no_viewer_to_view_error_explanation: "시스템 관리자가 이 문서 보기를 차단했습니다. 이 문서에 액세스해야 하는 경우, 이를 다운로드할 수 있습니다.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "컨텐츠를 빌드할 수 없습니다.",
		document_build_failed_userResponse: "시스템 관리자에게 문의하여 뷰어 로그 파일을 검토하십시오.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "병합 및 분리 모드에서 문서를 열 수 없습니다.",
		document_builder_open_failed_userResponse: "시스템 관리자에게 문의하여 뷰어 로그 파일을 검토하십시오.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "병합 및 분리 모드에서 시스템을 전환할 수 없습니다.",
		document_builder_switch_failed_userResponse: "시스템 관리자에게 문의하여 뷰어 로그 파일을 검토하십시오.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "문서",
		print_service_page_setup_tab_title: "페이지 설정",
		print_service_OD_print_tab_title: "프린터 옵션",
		print_service_status_merging: "문서 병합 중...",
		print_service_status_converting: "문서 변환 중...",
		print_service_status_formatting: "인쇄를 위해 문서 형식화 중...",
		admin_print_service_maximum_number_to_print: "인쇄할 수 있는 최대 문서 수:",
		admin_print_service_maximum_size_to_print: "인쇄할 수 있는 최대 데이터 크기(MB):",
		admin_print_service_maximum_number_to_print_hover_help: "사용자가 한 번에 인쇄할 수 있는 최대 문서 수를 지정하십시오. 기본 최대값은 50입니다. 문서 수로 인쇄를 제한하지 않으려는 경우 이 한계를 0으로 설정하십시오.",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>제한사항:</b> IBM Content Manager OnDemand에서는 이 설정이 지원되지 않습니다.<br/><br/>IBM Daeja ViewONE 인쇄 서비스를 사용하여 인쇄할 수 있는 최대 데이터 크기를 지정하십시오.<br /><br />선택한 각 문서의 총 크기는 이 크기를 초과할 수 없습니다.<br/><br/>기본 한계는 200MB입니다. 한계를 200MB 이상으로 설정하면 시스템 성능에 영향을 미칠 수 있습니다.문서 크기로 인쇄를 제한하지 않으려는 경우 이 한계를 0으로 설정하십시오.",
		// error printing
		print_service_error_printing: "인쇄 중에 오류가 발생했습니다.",
		print_service_error_printing_userResponse: "시스템 관리자에게 문의하여 인쇄 서비스 로그 파일을 검토하십시오.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "선택한 문서가 너무 커서 인쇄할 수 없습니다.",
		print_service_max_content_error_explanation: "선택한 문서가 ${0}MB의 데이터 한계를 초과합니다.",
		print_service_max_content_error_userResponse: "더 적은 수의 문서를 선택하거나 크기가 더 작은 문서를 선택한 후 다시 인쇄하십시오. 또한 시스템 관리자에게 문의하여 이 데스크탑에서 한 번에 인쇄할 수 있는 항목의 최대 총 크기를 늘릴 수 있습니다.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "항목을 인쇄할 수 없습니다.",
		print_service_max_number_selected_error_explanation: "한 번에 최대 ${0}개의 항목을 인쇄할 수 있습니다. ${1}개의 항목을 인쇄하려고 합니다.",
		print_service_max_number_selected_error_userResponse: "더 적은 항목을 선택하여 항목을 다시 인쇄하십시오. 또한 시스템 관리자에게 문의하여 이 데스크탑에서 한 번에 인쇄할 수 있는 항목의 최대 수를 늘릴 수 있습니다.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


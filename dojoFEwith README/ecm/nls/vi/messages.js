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
		welcome_user: "Chào mừng, ",
		about: "Giới thiệu",
		all: "Tất cả",
		help: "Trợ giúp",
		user_session: "Phiên người dùng",
		user_session_for: "Phiên người dùng cho ${0}",
		user_session_for_with_container: "Phiên người dùng cho ${0} (${1})",
		tools: "Công cụ",
		login: "Ðăng nhập",
		logout: "Ðăng xuất",
		search: "Tìm kiếm",
		saved_searches: "Tìm kiếm đã lưu",
		content_analytics: "Phân tích nội dung",
		reset: "Ðặt lại",
		reset_hover: "Bất kỳ dữ liệu chưa lưu nào trong tất cả tab đều được đặt lại thành giá trị đã lưu trước đó.",
		reset_default: "Xóa tất cả",
		reset_default_hover: "Xóa trường Nhãn hiện tại trên tất cả tab.",
		locale: "Bản địa:",
		up: "Lên",
		down: "Xuống",
		restore: "Khôi phục",
		maximize: "Tối đa",
		values_label: "Giá trị",
		value_label: "Giá trị:",
		path_label: "Ðường dẫn:",
		new_label: "Mới:",
		back_label: "Trở về",
		clear: "Xóa",
		set: "Ðặt...",
		browse: "Duyệt",
		work: "Làm việc",
		connect: "Kết nối",
		documents: "Tài liệu:",
		copyright: "(c) Bản quyền 2012, 2016 IBM Corp. IBM và logo IBM là thương hiệu của IBM Corporation, được đăng ký tại nhiều quốc gia trên toàn thế giới. Java và tất cả thương hiệu và logo liên quan đến Java là thương hiệu hoặc thương hiệu đăng ký của Oracle và/hoặc chi nhánh của Oracle. Công nghệ Oracle Outside In được nêu ở đây tuân theo giấy phép sử dụng hạn chế và chỉ có thể được sử dụng kèm theo ứng dụng này. Chương trình này được cấp phép theo điều khoản của thỏa thuận cấp phép kèm theo Chương trình.  Thỏa thuận cấp phép này có thể nằm trong một thư mục hoặc thư viện của Chương trình được đặt tên là \"License\" or \"Non_IBM_License\", nếu có, hoặc được cung cấp ở dạng bản in. Vui lòng đọc kỹ thỏa thuận này trước khi sử dụng Chương trình. Sử dụng Chương trình này nghĩa là bạn đã đồng ý với các điều khoản này. ",
		edit: "Sửa",
		cancel: "Hủy",
		close: "Ðóng",
		close_all: "Ðóng tất cả tab",
		close_others: "Ðóng các tab khác",
		ok: "OK",
		yes: "Có",
		no: "Không",
		open: "Mở",
		refresh: "Làm mới",
		refresh_cabinets: "Làm mới tất cả cabinet",
		delete_text: "Xóa",
		export_config: "Xuất cấu hình",
		description: "Mô tả",
		true_label: "Ðúng",
		false_label: "Sai",
		error: "Lỗi",
		error_reference_hover: "Truy cập www.ibm.com để biết thêm thông tin về lỗi này.",
		url_label: "URL",
		default_label: "Mặc định",
		ibm_label: "IBM",
		light_label: "Sáng",
		dark_label: "Tối",
		save: "Lưu",
		saveAs: "Lưu thành...",
		save_and_close: "Lưu và đóng",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Không có",
		Name: "Tên",
		"${NAME}": "Tên",
		mime_type: "Kiểu MIME",
		mime_type_contains_label: "Kiểu MIME chứa",
		mime_type_header: "Kiểu MIME",
		mime_type_icon: "Biểu tượng kiểu MIME",
		casesearch: "Hồ sơ",
		item: "Mục",
		no_mime_type: "Mục này không chứa nội dung.",
		items_selected: "${0} mục được chọn.",
		requestor: "Yêu cầu bởi",
		scheduledStartTime: "Thời gian bắt đầu được lên lịch",
		isRecurring: "Ðang lặp lại",
		weeks: "Tuần",
		days: "Ngày",
		hours: "Giờ",
		endTime: "Thời gian kết thúc",
		username: "Tên người dùng",
		password: "Mật khẩu",
		serverURL: "URL máy chủ",
		enable: "Bật",
		disable: "Tắt",
		finish: "Hoàn tất",
		previous: "Trước",
		next: "Kế tiếp",
		schedule: "Lên lịch",
		removeFromThisList: "Xóa khỏi danh sách này",
		status: "Trạng thái",
		scheduledEndTime: "Thời gian kết thúc được lên lịch",
		type: "Kiểu",
		mode: "Chế độ",
		startTime: "Thời gian bắt đầu",
		createdBy: "Tạo bởi",
		nextScheduledTime: "Thời gian được lên lịch kế tiếp",
		id: "ID",
		duration: "Thời gian",
		repeatCycle: "Tần suất",
		taskTypeName: "Kiểu tác vụ",
		to: "đến",
		filter: "Bộ lọc:",
		error_message: "Thông báo lỗi",

        file_type: "Kiểu tài liệu",
        word_template_name: "Tên mẫu Word",
        excel_template_name: "Tên mẫu Excel",
        powerpoint_template_name: "Tên mẫu PowerPoint",
        template_description: "Mô tả mẫu",
        action_add_template: "Thêm",
        action_change_template: "Sửa",      
        action_edit_template_properties: "Thuộc tính",
        add_presentation_template: "Thêm mẫu trình bày",
    	add_spreadsheet_template: "Thêm mẫu bảng tính",
    	add_doc_template: "Thêm mẫu tài liệu",    	
    	file_type_doc_hover: "Bạn phải định rõ một tập tin mẫu tài liệu xử lý văn bản hợp lệ.<br><br>Kiểu MIME hợp lệ: ${0}",
    	file_type_doc_error: "Bạn phải định rõ một tập tin mẫu tài liệu xử lý văn bản hợp lệ.<br><br>Kiểu MIME tài liệu đã chọn: ${0}<br><br>Kiểu MIME hợp lệ: ${1}",
    	file_type_presentation_hover: "Bạn phải định rõ một tập tin mẫu trình bày hợp lệ.<br><br>Kiểu MIME hợp lệ: ${0}",
    	file_type_presentation_error: "Bạn phải định rõ một tập tin mẫu trình bày hợp lệ.<br><br>Kiểu MIME tài liệu đã chọn: ${0}<br><br>Kiểu MIME hợp lệ: ${1}",
    	file_type_spreadsheet_hover: "Bạn phải định rõ một tập tin mẫu bảng tính hợp lệ.<br><br>Kiểu MIME hợp lệ: ${0}",
    	file_type_spreadsheet_error: "Bạn phải định rõ một tập tin mẫu bảng tính hợp lệ.<br><br>Kiểu MIME tài liệu đã chọn: ${0}<br><br>Kiểu MIME hợp lệ: ${1}",
    	office_online_only_one_template_error: "Bạn chỉ có thể chọn một tập tin.",
    	change_presentation_template: "Sửa mẫu trình bày",
    	change_spreadsheet_template: "Sửa mẫu bảng tính",
    	change_doc_template: "Sửa mẫu tài liệu",
    	change_button: "Sửa",
	    new_document_dialog_doc_title: "Tài liệu mới",
	    new_document_dialog_presentation_title: "Bản trình bày mới",
	    new_document_dialog_spreadsheet_title: "Bảng tính mới",
	    new_document_dialog_title_label: "Tiêu đề:",
	    new_document_dialog_title_hover: "Nhập tiêu đề cho tài liệu này.",
	    new_document_dialog_title_missing_message: "Bạn phải định rõ tiêu đề.",
	    office_online_save_before_adding_templates_title: "Lưu thay đổi đến kho lưu trữ",
	    office_online_save_before_adding_templates_error: "Bạn không thể thêm mẫu Office nếu chưa lưu thay đổi đã thực hiện đến kho lưu trữ. Nhấp vào <b>Lưu và đóng</b>, rồi mở lại kho lưu trữ để thêm mẫu Office.",
	    copy_to_OOS_dialog_doc_title: "Tài liệu mới",
	    office_online_checkin_cancelcheckout_message: "Tài liệu này đang được hiệu chỉnh trong Microsoft Office Online. Bạn không thể kiểm nhập tài liệu này hoặc hủy kiểm xuất khi tài liệu đang mở trong Microsoft Office Online.",
	    new_document_classification: "Phân loại:",
	    new_document_classification_help: "Thiết lập lại lớp, thuộc tính, và thư mục cha, nếu có, của tài liệu nguồn. Khi thêm tài liệu bằng cách sử dụng mẫu nhập, mẫu nhập của tài liệu nguồn sẽ tự động được chọn nếu tồn tại. Thuộc tính của tài liệu nguồn sẽ được dùng làm giá trị mặc định, nhưng thư mục và lớp đã xác định trong mẫu nhập sẽ được giữ nguyên.",
		new_document_classification_use_source_document: "Sử dụng tài liệu nguồn:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Biểu tượng kiểu ${0}",
		repository_name_and_type: "Tên và kiểu ${0}",
		select_class_label: "Chọn ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Xem chi tiết",
		detail_view_button: "Chi tiết",
		magazine_view_button_tooltip: "Xem dạng Magazine",
		magazine_view_button: "Magazine",
		filmstrip_view_button_tooltip: "Xem dạng Filmstrip",
		filmstrip_view_button: "Filmstrip",

		magazine_view_show: "Hiện ở dạng xem Magazine",
		detail_view_show: "Hiện ở dạng xem Chi tiết",

		total_count_item: "mục",
		total_count_items: "mục",
		total_count_more_items: "Hơn ${0} mục",

		extension_changed: "Phần mở rộng của tập tin mà bạn đã chọn không khớp với phần mở rộng của tập tin gốc.  Hãy chọn một tập tin khác.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Trình xem đã chọn không hỗ trợ tất cả các kiểu tập tin. Nếu lưu ánh xạ trình xem này, bạn có thể gặp vấn đề khi xem tài liệu. Bạn nên chọn trình xem hỗ trợ tất cả các kiểu tập tin khi chọn tùy chọn là Tất cả các kiểu tập tin.<br><br><b>Mẹo:</b> Những trình xem sau đây hỗ trợ tất cả các kiểu tập tin:<ul><li>Trình xem Applet</li><li>Trình xem AJAX</li><li>Chuyển đổi HTML</li><li>Chuyển đổi PDF</li><li>Trình duyệt web</li></ul>",
		file_type_any: "Tất cả các kiểu tập tin",
		file_type_any_hover: "Chọn tùy chọn này nếu bạn muốn sử dụng trình xem đã chọn để xem tất cả tài liệu, bất kể kiểu tập tin là gì. Tùy chọn này được hỗ trợ cho các trình xem sau đây:<br><br><ul><li>Trình xem Applet</li><li>Trình xem AJAX</li><li>Chuyển đổi HTML</li><li>Chuyển đổi PDF</li><li>Trình duyệt web</li></ul><br><br><b>Ghi nhớ:</b> Nếu muốn dùng trình xem cụ thể trong phần lớn thời gian, phải di chuyển bất kỳ ánh xạ nào đã tạo bằng tùy chọn này đến cuối bản đồ trình xem của bạn. ",
		file_type_input: "Kiểu tập tin mới:",

		mime_type_input: "Kiểu MIME mới:",
		mime_type_input_invalid: "Kiểu MIME mới không thể chứa bất kỳ ký tự nào sau đây: ,",
		mime_type_available: "Kiểu MIME có sẵn",
		mime_type_selected: "Kiểu MIME đã chọn",
		file_type_input: "Kiểu tập tin mới:",
		file_type_input_invalid: "Kiểu tập tin mới không thể chứa các ký tự sau đây: ,",
		file_type_available: "Kiểu tập tin sẵn có",
		file_type_selected: "Kiểu tập tin đã chọn",
		file_type_header: "Kiểu tập tin",
		viewer: "Trình xem:",
		viewer_viewer: "Trình xem",
		viewer_view: "Hiện",
		viewer_preview: "Xem trước",
		viewer_merge_and_split: "Kết hợp và chia tách",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Chỉ xem trước",
		preview_only_label: "(xem trước)",
		preview_only_hover: "Ánh xạ trình xem này sẽ chỉ được dùng khi người dùng nhấp vào <b>Xem trước</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Kho lưu trữ này không hỗ trợ duyệt. Chọn kho lưu trữ khác.",

		repository_community_teamspace_message: "Ðã chỉ định một kho lưu trữ khác làm kho lưu trữ thư viện cộng đồng. Nếu muốn tiếp tục dùng kho lưu trữ đang tồn tại làm kho lưu trữ thư viện cộng đồng, chọn <b>Không</b> trước khi lưu các thay đổi để tránh cho kho lưu trữ đang tồn tại bị thay thế bởi kho lưu trữ này.",

		favorites_empty: "Chưa có bất kỳ yêu thích nào.",
		syncItems_empty: "Bạn chưa có bất kỳ tập tin đồng bộ nào.",

		root_folder_id: "ID thư mục gốc",
		unified_searches: "Tìm kiếm kho lưu trữ chéo:",
		max_results: "Số lượng kết quả:",
		direct_retrieve_enabled: "Truy xuất trực tiếp:",
		itemTypesToDisplay: "Kiểu mục sẽ hiển thị:",
		allItemTypes: "Tất cả kiểu mục",
		include_attr_group_name: "Mô tả nhóm thuộc tính theo tên hiển thị thuộc tính:",
		admin_repcfg_include_attr_group_name_hover: "Theo mặc định, mô tả nhóm thuộc tính được bao gồm trong tên cho thuộc tính của nhóm thuộc tính. Ðiều này giúp người dùng xem nhóm thuộc tính nào mà thuộc tính của nhóm thuộc tính thuộc về khi người dùng làm việc với thuộc tính.<br>Ví dụ, người dùng có thể thấy tên sau đây cho một thuộc tính của nhóm thuộc tính: Thiết lập tài liệu.Kiểu tài liệu.<br><br>Nếu bạn tắt tùy chọn này, chỉ phần mô tả thuộc tính được sử dụng cho tên thuộc tính của nhóm thuộc tính.<br>Ví dụ, người dùng sẽ thấy tên này: Kiểu tài liệu.<br><br>Nếu không có mô tả nhóm thuộc tính, có thể người dùng không thể xác định liệu Kiểu tài liệu là thuộc tính đơn hoặc thuộc tính của nhóm thuộc tính.",
		documentItemTypesOnly: "Chỉ kiểu mục mô hình tài liệu",
		object_store: "Tên ký hiệu kho đối tượng:",
		object_store_display_name: "Tên hiển thị kho đối tượng:",
		teamspaceUpgradeMsg: "Không gian nhóm của bạn sẽ được cập nhật khi bạn lưu cấu hình kho lưu trữ. Nếu bạn có nhiều không gian nhóm, việc cập nhật có thể mất vài phút.",
		synchUpgradeMsg: "Mô-đun đồng bộ trên kho lưu trữ này sẽ được cập nhật khi bạn lưu cấu hình kho lưu trữ của bạn.",
		protocol: "Giao thức:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID kho lưu trữ CMIS:",
		cmis_url: "URL tài liệu dịch vụ kết nối CMIS AtomPub:",
		trace_level: "Mức theo dõi",
		trace_dir: "Thư mục theo dõi",
		temp_dir: "Thư mục tạm",
		show_document_location: "Hiện vị trí tài liệu",
		max_folders: "Thư mục tối đa",
		afp_conversion: "Chuyển đổi AFP",
		line_conversion: "Chuyển đổi dữ liệu dòng",
		max_hits: "So khớp tối đa",
		folder_search_expresssion: "Biểu thức tìm kiếm thư mục",
		max_item_types: "Kiểu mục tối đa",
		max_worklists: "Danh sách công việc tối đa",
		update_storage_collection: "Nâng cấp tập hợp lưu trữ",
		include_mime_types_in_search_results: "Bao gồm kiểu MIME trong kết quả tìm kiếm",
		object_type: "Kiểu đối tượng",
		object_type_document: "Tài liệu",
		object_type_folder: "Thư mục",
		file_label: "Tập tin:",
		plugin_jarfile_path_label: "Ðường dẫn tập tin JAR:",
		plugin_classfolder_path_label: "Ðường dẫn tập tin lớp:",
		plugin_classname_label: "Tên lớp:",
		plugin_id_label: "ID Plug-in:",
		class_label: "Lớp",
		configuration: "Cấu hình",
		connect_repository: "Kết nối...",
		server_type: "Kiểu máy chủ",
		timeout_in_seconds: "Thời gian chờ (tính theo giây):",
		default_search_template: "Tìm kiếm mặc định",
		search_filtered_properties: "Thuộc tính có thể tìm kiếm",
		property_contains_label: "Thuộc tính chứa",
		class_contains_label: "Lớp chứa",
		search_filtered_operators: "Toán tử tìm kiếm",
		default_search_results: "Kết quả tìm kiếm",
		data_type: "Kiểu dữ liệu",
		status_bar: "Thanh trạng thái",
		operators_for: "Toán tử cho:",
		currentUser: "Người dùng hiện tại",
		nameContains: "Tên chứa",
		searchFor: "Tìm kiếm",
		server_autentication: "Xác thực Máy chủ (OAuth 2.0 với JWT)",
		standard_authentication: "Xác thực Chuẩn (OAuth2.0 3 bên)",
		developer_authentication: "Xác thực Lập trình viên",
		enterprise_id: "ID doanh nghiệp:",
		public_key_id: "ID khóa chung:",
		private_key_path: "Ðường dẫn tập tin khóa riêng:",
		server_user_email: "Email của người dùng máy chủ",

		filter_builder_tooltip: "Xác định bộ lọc",

		// Launch bar
		launchbar_home: "Mở Trang chủ",
		launchbar_favorites: "Mở Yêu thích",
		launchbar_browse: "Mở Xem duyệt",
		launchbar_browse_popup: "Mở danh sách pop-up duyệt",
		launchbar_search: "Mở Xem tìm kiếm",
		launchbar_search_popup: "Mở danh sách pop-up tìm kiếm",
		launchbar_teamspaces: "Mở Xem vùng nhóm",
		launchbar_teamspaces_popup: "Mở danh sách pop-up vùng nhóm",
		launchbar_work: "Mở Xem công việc",
		launchbar_work_popup: "Mở danh sách pop-up công việc",
		launchbar_entry_templates: "Mở Xem mẫu nhập",
		launchbar_entry_templates_popup: "Mở danh sách pop-up mẫu nhập",
		launchbar_admin: "Mở Xem quản trị",

		admin_sync_server: "Dịch vụ đồng bộ",
		admin_settings: "Cài đặt",
		admin_interface_text: "Nhãn",
		admin_interface_text_desktop: "Máy khách:",
		admin_desktops: "Máy khách",
		admin_repositories: "Kho lưu trữ",
		admin_mobile: "Di động",
		admin_menus: "Trình đơn",
		admin_reason_codes: "Lý do soạn thảo",
		admin_plugins: "Plug-in",
		admin_plugins_state_enabled: "Plug-in đang bật",
		admin_plugins_state_disabled: "Plug-in đang tắt",
		admin_plugins_version: "Phiên bản:",
		admin_plugins_version_heading: "Phiên bản",
		admin_plugins_icon: "Biểu tượng Plug-in",
		admin_viewer_mapping_icon: "Biểu tượng ánh xạ trình xem",
		admin_viewer_defs: "Bản đồ trình xem",
		admin_viewer_dialog_title: "Ánh xạ",
		admin_viewer_dialog_new_title: "Ánh xạ mới",
		admin_viewer_dialog_instructions: "Một ánh xạ định rõ sẽ dùng trình xem nào cho các tập tin trên một kho lưu trữ. Có thể tạo nhiều ánh xạ để định rõ nhiều trình xem khác nhau cho nhiều kiểu tập tin khác nhau. Bạn có thể sử dụng kiểu MIME hoặc phần mở rộng tập tin để định nghĩa ánh xạ. Ánh xạ có phần mở rộng tập tin sẽ được ánh xạ đến tên tài liệu. Ví dụ, ánh xạ có kiểu tập tin được thiết lập là gif sẽ được ánh xạ đến tên tài liệu kết thúc với phần mở rộng là .gif",
		admin_desktop_viewer_defs: "Bản đồ trình xem:",
		admin_desktop_viewer_defs_hover: "Bản đồ trình xem định rõ sẽ dùng trình xem nào để mở các kiểu tài liệu khác nhau trên kho lưu trữ.<br><br>Có thể tạo bản đồ trình xem mới trong phần <b>Bản đồ trình xem</b> của công cụ quản trị.",
		admin_desktops_used: "Ðược dùng trong máy khách",
		admin_desktop_additional_settings: "Cài đặt bổ sung:",
		admin_default_desktop: "Ðặt làm máy khách mặc định",
		admin_default_desktop_header: "Máy khách mặc định",
		admin_layout_tab_title: "Bố cục",
		admin_desktop_icon: "Biểu tượng máy khách",

		// Themes
		admin_themes: "Chủ đề",
		admin_theme_list_instructions: "Có thể tạo một chủ đề để tùy chỉnh web khách cho tổ chức bạn dễ dàng hơn. Có thể tạo nhiều chủ đề nếu cần dùng màu, phông chữ hoặc logo khác nhau cho các máy khách khác nhau trong môi trường.<br><br>Sau khi tạo chủ đề, có thể áp dụng chủ đề này cho một máy khách bằng cách cấu hình chủ đề trên tab <b>Dạng thể hiện</b> của máy khách.",
		admin_theme_instructions: "Tạo chủ đề để kiểm soát màu và phông chữ hiển thị trên web khách. Ngoài ra, cũng có thể dùng chủ đề để thay đổi logo, tên ứng dụng và văn bản bản quyền hiển thị trên nhật ký trên trang và trong cờ hiệu.",
		admin_theme_heading: "Chủ đề: <b>${0}</b>",
		admin_new_theme: "Chủ đề mới",
		admin_text_theme: "Chủ đề",
		admin_delete_confirmation_themes: "Bạn có muốn xóa chủ đề đã chọn?\n${0} chủ đề được chọn.",
		admin_theme_color: "Màu",
		admin_theme_text: "Văn bản",
		admin_theme_solid: "Khối",
		admin_theme_gradient: "Gradien",
		admin_theme_box: "Box",
		admin_theme_color_label: "Màu ${0}:",
		admin_theme_name_invalid: "Tên chủ đề không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID chủ đề phải là duy nhất và không thể thay đổi sau khi đã lưu chủ đề.<br><br>ID chỉ có thể chứa ký tự kiểu chữ và số.",
		admin_theme_name_hover: "Tên không thể chứa các ký tự sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Tự động",
		admin_theme_logo_url_hover: "Nhập URL của tập tin logo. Nếu logo nằm trên cùng máy chủ ứng dụng web như web khách,  nhập URL liên quan, ví dụ: /mycustomizations/banner_logo.png<br><br>Logo nên có nền trong suốt.",
		admin_theme_color_palette_title_heading: "Bảng màu",
		admin_theme_color_palette_help_text: "Tạo bảng màu cho chủ đề của bạn, sử dụng giá trị thập lục phân hoặc công cụ chọn màu. Có thể thêm bao nhiêu màu tùy thích.",
		admin_theme_color_add_button_label: "Thêm màu",
		admin_theme_color_remove_button_label: "Xóa màu",
		admin_theme_global_title_heading: "Yếu tố ứng dụng mở rộng",
		admin_theme_global_font: "Họ phông chữ:",
		admin_theme_global_font_hover: "Chọn phông chữ để dùng trong web khách. Phông chữ được liệt kê theo thứ tự ưu tiên; chỉ dùng phông kế tiếp trong danh sách nếu phông phía trước không được cài đặt trên máy khách.",
		admin_theme_global_framework_color_label: "Màu khung:",
		admin_theme_global_framework_color_hover: "Chọn màu để dùng cho các yếu tố sau đây:<ul><li>Thanh tiêu đề trên hộp thoại</li><li>Màu tô đậm ở phía trên tab đã chọn</li><li>Biểu tượng xem danh sách nội dung (Xem chi tiết, xem dạng Magazine, xem dạng Filmstrip)</li></ul><br>Không dùng màu này cho các dấu tách giữa hai phần của web khách. Nếu muốn thay đổi màu của dấu tách, phải tạo một plug-in để cung cấp một tập tin CSS tùy chỉnh.",
		admin_theme_color_global_toolbar: "Màu thanh công cụ chung:",
		admin_theme_color_global_toolbar_hover: "Nếu đưa thanh công cụ chung vào web khách, chọn màu thanh công cụ.<br><br><b>Mẹo:</b> Thanh công cụ hiển thị trong cờ hiệu ở phía trên web khách, vì vậy màu thanh công cụ phải bổ sung cho màu cờ hiệu.",
		admin_theme_global_selected_color: "Màu mục đã chọn:",
		admin_theme_global_selected_color_hover: "Chọn màu để dùng khi đã chọn các mục trong cây duyệt, cây tìm kiếm và danh sách nội dung.<br><br>Màu rê chuột (màu này được dùng khi người dùng rê chuột lên một mục) xuất phát từ màu này.",
		admin_theme_global_link_color: "Màu liên kết:",
		admin_theme_global_link_color_hover: "Chọn màu để dùng cho tất cả URL có thể nhấp trong web khách. Ví dụ, màu này được dùng trong các liên kết Tìm hiểu thêm được hiển thị trên web khách.",
		admin_theme_login_title_heading: "Yếu tố trang đăng nhập",
		admin_theme_page_background_label: "Màu nền trang đăng nhập:",
		admin_theme_login_page_background_hover: "Chọn màu để hiển thị phía sau ô đăng nhập.",
		admin_theme_login_pane_background_label: "Màu nền ô đăng nhập:",
		admin_theme_login_pane_background_hover: "Chọn màu để hiển thị cho ô đăng nhập. Màu này phải bổ sung màu nền của trang đăng nhập.",
		admin_theme_text_color: "Màu văn bản:",
		admin_theme_login_pane_text_color_hover: "Chọn màu để dùng cho văn bản ô đăng nhập. Màu này được dùng cho văn bản chào đón và nhãn trường. Màu này phải dễ đọc trên màu nền của ô đăng nhập.",
		admin_theme_copyright_text: "Văn bản bản quyền:",
		admin_theme_copyright_text_hover: "Ðịnh rõ có hiển thị văn bản bản quyền trên trang đăng nhập không.",
		admin_theme_copyright_selection_IBM: "Bản quyền IBM",
		admin_theme_copyright_selection_none: "Không có văn bản bản quyềnt",
		admin_theme_banner_title_heading: "Yếu tố cờ hiệu",
		admin_theme_text_icons_color: "Màu văn bản và biểu tượng:",
		admin_theme_icon_color_label: "Màu biểu tượng:",
		admin_theme_shadow_label: "Bóng mờ:",
		admin_theme_banner_text_icons_hover: "Chọn màu để dùng cho văn bản và biểu tượng trong cờ hiệu. Màu này phải dễ đọc trên màu nền của cờ hiệu.",
		admin_theme_banner_product_name_label: "Tên sản phẩm:",
		admin_theme_banner_product_name_hover: "Khi tạo máy khách, có thể định rõ tên tùy chỉnh để hiển thị cho ứng dụng. Nếu không muốn định rõ một tên tùy chỉnh, Trình điều hướng nội dung IBM Content Navigator sẽ được dùng làm tên sản phẩm. Ðịnh rõ có dùng tên ứng dụng đã xác định trong máy khách hoặc hình ảnh thay vì tên hay không.",
		admin_theme_banner_product_name_desktop_defined_label: "Dùng tên từ máy khách",
		admin_theme_banner_product_name_image: "Sử dụng logo tùy chỉnh (URL)",
		admin_theme_background_color_label: "Màu nền:",
		admin_theme_style_label: "Kiểu:",
		admin_theme_banner_color_hover: "Chọn màu để dùng cho cờ hiệu nằm phía trên ứng dụng.<br><br><b>Mẹo:</b>Đảm bảo màu văn bản trên cờ hiệu phải dễ đọc trên màu nền của cờ hiệu.",
		admin_theme_buttons_title_heading: "Nút",
		admin_theme_navigation_title_heading: "Yếu tố điều hướng",
		admin_theme_navigation_icon_selected_label: "Màu biểu tượng đã chọn:",
		admin_theme_navigation_background_hover: "Chọn màu để dùng cho nền của thanh điều hướng tính năng.",
		admin_theme_navigation_icon_color_hover: "Chọn màu để dùng cho biểu tượng trong thanh điều hướng tính năng. Khi sử dụng bố cục mặc định trên máy khách, thì màu này sẽ tương phản với nền của trình đơn thả xuống tính năng. Khi sử dụng bố cục cổ điển trên máy khách, thì màu này sẽ tương phản với nền của thanh điều hướng tính năng.",
		admin_theme_navigation_icon_selected_hover: "Chọn màu dùng cho tính năng đã chọn trong thanh điều hướng tính năng. Màu phải bổ sung cho màu của biểu tượng và màu nền của thanh điều hướng tính năng.<br><br>Khi sử dụng bố cục cổ điển trên máy khách, thì màu này sẽ được dùng làm màu hiển thị khi rê chuột trên thanh điều hướng tính năng.",
		admin_theme_button_background_color_hover: "Chọn màu để dùng cho nền của nút.",
		admin_theme_button_style_hover: "Chọn kiểu nút.",
		admin_theme_button_text_icon_color_hover: "Chọn màu để dùng cho văn bản và hình ảnh trên nút.",
		admin_theme_no_logo_label: "Không có logo",
		admin_theme_custom_logo_label: "Logo tùy chỉnh (URL)",
		admin_theme_banner_type: "Kiểu phủ màu cờ hiệu:",
		admin_theme_banner_type_hover: "Ðịnh rõ cờ hiệu sẽ có màu thuần hoặc màu chuyển sắc. Nếu xác định cờ hiệu thuộc dạng có màu chuyển sắc, màu xác định cho màu cờ hiệu phải là sậm nhất trong cờ hiệu.<br><br><b>Mẹo:</b>Đảm bảo màu văn bản trên cờ hiệu phải dễ đọc trên màu nền của cờ hiệu.",
		admin_theme_icon: "Biểu tượng chủ đề",
		admin_theme_buttons_and_links_title_heading: "Nút, Trường, và Liên kết",
		admin_theme_button_style_label: "Kiểu nút:",
		admin_theme_theme_style_label: "Kiểu chủ đề:",
		admin_theme_theme_style_hover: "Chọn kiểu làm cơ sở cho chủ đề. Bạn có thể thay đổi kiểu vào thời điểm bất kỳ khi tạo hoặc sửa chủ đề. Khi bạn thay đổi từ kiểu này sang kiểu khác, thiết lập chủ đề sẽ được khôi phục về giá trị mặc định.",
		admin_theme_accent_color_label: "Màu điểm nhấn:",
		admin_theme_accent_color_hover: "Chọn màu dùng cho thanh nằm trên cùng trong hộp thoại và công cụ xoay khi tải.",
		admin_theme_global_toolbar_text_color_label: "Màu văn bản thanh công cụ toàn cục:",
		admin_theme_global_toolbar_text_color_hover: "Nếu bạn đưa thanh công cụ toàn cục vào máy khách web, thì chọn màu dùng cho văn bản trong thanh công cụ.",
		admin_theme_banner_text_color_hover: "Chọn màu dùng cho văn bản trong biểu ngữ.",
		admin_theme_banner_icon_color_hover: "Chọn màu dùng cho biểu tượng trong biểu ngữ.",
		admin_theme_button_color_label: "Màu sắc:",
		admin_theme_button_color_hover: "Chọn màu để dùng cho các yếu tố sau đây:<ul><li>Thanh tiêu đề trên hộp thoại</li><li>Màu tô đậm ở phía trên tab đã chọn</li><li>Biểu tượng xem danh sách nội dung (Xem chi tiết, xem dạng Magazine, xem dạng Filmstrip)</li><li>Nút, trường, và liên kết</li></ul>Màu được sử dụng khi người dùng rê chuột lên trên nút sẽ xuất phát từ màu này. Không dùng màu này cho các dấu tách giữa hai phần của web khách. Nếu muốn thay đổi màu của dấu tách, phải tạo một plug-in để cung cấp một tập tin CSS tùy chỉnh.",
		admin_theme_theme_style_col_header: "Kiểu chủ đề",

		admin_syncserver_consistency_checker: "Trình kiểm tra tính đồng nhất:",
		admin_syncserver_consistency_checker_hover: "Chạy trình kiểm tra tính đồng nhất để đảm bảo cơ sở dữ liệu của dịch vụ đồng bộ có thông tin hiện tại về tình trạng của từng mục trên máy chủ. Ví dụ, chạy trình kiểm tra tính đồng nhất sau khi có mất điện ở cơ sở dữ liệu của dịch vụ đồng bộ để lấy thông tin về các tài liệu đã được cập nhập trên kho lưu trữ trong thời gian mất điện.",
		admin_syncserver_consistency_checker_button: "Chạy trình kiểm tra tính đồng nhất",
		admin_syncserver_consistency_checker_started: "Ðã bắt đầu:",
		admin_syncserver_consistency_checker_ended: "Ðã kết thúc:",
		admin_syncserver_consistency_checker_duration: "Thời gian:",
		admin_syncserver_consistency_checker_items_processed: "Các mục đồng bộ đã xử lý:",
		admin_syncserver_consistency_checker_items_processed_success: "Các mục đồng bộ đã xử lý thành công:",
		admin_syncserver_consistency_checker_items_discovered: "Mục kho lưu trữ mới được phát hiện:",
		admin_syncserver_consistency_checker_change_updates: "Tổng cập nhật:",
		admin_syncserver_consistency_checker_state: "Trạng thái:",
		admin_syncserver_consistency_checker_state_done: "Hoàn tất",
		admin_syncserver_consistency_checker_state_running: "Ðang chạy",
		admin_syncserver_consistency_checker_user: "Ðược gửi bởi:",
		admin_syncserver_consistency_checker_scheduled: "Ðược lên lịch:",

		admin_syncserver_dbcleanup: "Hủy dữ liệu thừa ở cơ sở dữ liệu",
		admin_syncserver_dbcleanup_hover: "Chạy công cụ hủy dữ liệu thừa ở cơ sở dữ liệu để xóa bất kỳ mục hoặc thiết bị nào không dùng mà không còn được đồng bộ từ cơ sở dữ liệu.",
		admin_syncserver_dbcleanup_button: "Hủy dữ liệu thừa ở cơ sở dữ liệu",
		admin_syncserver_dbcleanup_state_done: "Hoàn tất",
		admin_syncserver_dbcleanup_state_running: "Ðang chạy",
		admin_syncserver_dbcleanup_started: "Ðã bắt đầu:",
		admin_syncserver_dbcleanup_ended: "Ðã kết thúc:",
		admin_syncserver_dbcleanup_state: "Trạng thái:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Kho lưu trữ đã xóa:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Mục đồng bộ đã xóa:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Thiết bị đã xóa:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Thiết bị đã hết hạn:",

		admin_syncserver_publicSyncUrl: "URL chung của dịch vụ đồng bộ:",
		admin_syncserver_publicSyncUrl_hover: "Ðịnh rõ URL mà kho lưu trữ dùng để giao tiếp với dịch vụ đồng bộ IBM Content Navigator. Ðịnh dạng mặc định của URL là http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Ðồng bộ thiết lập máy khách:",
		admin_syncserver_managed_hover: "Người dùng không thể thay đổi những thiết lập này trong Máy khách đồng bộ của IBM Content Navigator.",
		admin_syncserver_managed_subfolder: "Mức thư mục để đồng bộ hóa",
		admin_syncserver_managed_subfolder_hover: "Nếu người dùng đồng bộ một thư mục, định rõ số lượng thư mục tối đa sẽ được đồng bộ. Ví dụ, nếu người dùng định rõ 3 mức thư mục, thư mục mà người dùng đồng bộ và 2 mức thư mục con được đồng bộ.<br><br>Ðảm bảo môi trường của bạn được mở rộng để hỗ trợ số lượng đồng bộ được tạo bởi thiết lập này.",
		admin_syncserver_managed_subfolder_all: "Tất cả thư mục con",
		admin_syncserver_managed_subfolder_none: "Không có thư mục con",
		admin_syncserver_managed_subfolder_no_more: "Mức giới hạn",
		admin_syncserver_managed_subfolder_levels: "thư mục",
		admin_syncserver_managed_schedule: "Lịch đồng bộ",
		admin_syncserver_managed_schedule_hover: "Ðảm bảo môi trường của bạn được mở rộng để hỗ trợ số lượng đồng bộ được tạo bởi lịch đồng bộ.<br><br>Khoảng tối đa là 24 giờ hoặc 1440 phút.<br><br>Người dùng có thể ghi đè lịch đồng bộ bằng cách nhấp <b>Đồng bộ ngay</b> trong máy khách.",
		admin_syncserver_managed_schedule_manual: "Ðồng bộ thủ công",
		admin_syncserver_managed_schedule_continuous: "Ðồng bộ liên tục",
		admin_syncserver_managed_schedule_every: "Ðồng bộ ở các khoảng đã xác định",
		admin_syncserver_managed_schedule_minutes: "Phút",
		admin_syncserver_managed_schedule_hours: "Giờ",

		// redaction codes
		admin_new_reason_code: "Lý do soạn thảo mới",		
		admin_reason_code_name_invalid: "Tên lý do soạn thảo không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Mô tả không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Mô tả không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Tên không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Mô tả:",
		admin_reason_code_applications_hover: "Danh sách ứng dụng Datacap đang tham chiếu lý do soạn thảo này.",
		admin_reason_code_applications: "Ứng dụng Datacap",
		admin_delete_confirmation_reason_codes: "Bạn có muốn xóa lý do soạn thảo đã chọn không?",
		admin_delete_confirmation_reason_code: "Bạn có muốn xóa lý do soạn thảo đã chọn không?",
		admin_reason_code_heading: "Lý do soạn thảo: <b>${0}</b>",
		admin_reason_code_list_instructions: "Lý do soạn thảo cho biết tại sao dữ liệu nhạy cảm được bảo vệ bằng cách làm mờ dữ liệu để không thể xem. Mỗi lý do nhận dạng loại dữ liệu nhạy cảm được che khuất đối với người dùng chung.",
		admin_reason_code_instructions: "Bạn có thể tạo lý do soạn thảo đối với mỗi loại dữ liệu nhạy cảm. Sau đó bạn có thể sử dụng lý do đó trong chính sách soạn thảo để xác định xem ai có thể xem dữ liệu và ai có thể tạo hoặc điều chỉnh soạn thảo.",
		admin_reason_code_applications_label: "Ứng dụng Datacap",
		admin_reason_code_repositories: "Kho lưu trữ",
		admin_reason_code_repositories_label: "Kho lưu trữ",
		admin_reason_code_repositories_hover: "Danh sách kho lưu trữ ICN đang tham chiếu lý do soạn thảo này.",
		admin_reason_code_repositories_default_value: "Không đặt",
		admin_reason_code_description_label: "Mô tả",
		admin_reason_code_applications_default_value: "Không đặt",
		admin_redaction_reasons: "Lý do soạn thảo",
		admin_redactions: "Soạn thảo dựa trên vai trò",
		admin_redactions_policies_roles: "Chính sách và vai trò",
		admin_reasons: "Lý do",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Không thể hiệu chỉnh ID.  Nó có thể được sao chép vào bản ghi tạm",
		// Role based administration
		admin_rba: "Quản trị máy khách dựa trên vai trò",
		admin_rba_mobile_access_enabled: "Máy khách này bật truy cập di động.",
		admin_rba_mobile_access_disabled: "Máy khách này không bật truy cập di động.",
		admin_rba_confirm_delete_multiple: "Bạn có muốn xóa vai trò quản trị đã chọn không?",
		admin_rba_confirm_delete_single: "Bạn có muốn xóa vai trò quản trị đã chọn không?",
		admin_rba_delete_multi_role_desktop: "Một hoặc nhiều vai trò mà bạn đã chọn được gán cho máy khách. Bạn phải loại bỏ vai trò khỏi máy khách trước khi có thể xóa chúng.",
		admin_rba_delete_single_role_desktop: "Vai trò mà bạn đã chọn được gán cho máy khách ${0}. Bạn phải loại bỏ vai trò khỏi máy khách trước khi có thể xóa.",
		admin_desktop: "Máy khách",
		admin_rba_instructions: "Bạn có thể tạo và quản lý các vai trò quản trị máy khách, liên kết những đặc quyền được cấp cho quản trị viên máy khách.",
		admin_rba_not_used: "${0} không được sử dụng trong máy khách.",
		admin_rba_desktops: "<b>${0} được sử dụng trong máy khách sau đây:</b>",
		admin_rba_new_role: "Vai trò mới",
		admin_rba_name_invalid: "Tên vai trò quản trị không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Mô tả không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Mô tả không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Tên không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Mô tả:</b> ${0}",
		admin_rba_membership: "Thành viên",
		admin_rba_general_priv: "Chung",
		admin_rba_appearance_priv: "Dạng thể hiện",
		admin_rba_desktop_config_priv: "Cấu hình máy khách",
		admin_rba_app_name_priv: "Tên ứng dụng",
		admin_rba_theme_priv: "Chủ đề",
		admin_rba_viewer_map_priv: "Ánh xạ trình xem",
		admin_rba_merge_split_priv: "Kết hợp và chia tách",
		admin_rba_sync_svc_priv: "Dịch vụ đồng bộ",
		admin_rba_menus_priv: "Trình đơn",
		admin_rba_edit_svc_priv: "Dịch vụ Sửa",
		admin_rba_toolbars_priv: "Thanh công cụ",
		admin_rba_ctx_menus_priv: "Trình đơn ngữ cảnh",
		admin_rba_office_ribbon_priv: "Lệnh thanh ribbon MS Office",
		admin_rba_office_menues_priv: "Trình đơn ngữ cảnh MS Office",
		admin_rba_addl_settings_priv: "Thiết lập bổ sung",
		admin_rba_mobile_priv: "Di động",
		admin_rba_add_doc_dlg_priv: "Hộp thoại thêm tài liệu",
		admin_rba_doc_mgmt_priv: "Quản lý tài liệu",
		admin_rba_def_redaction_priv: "Tùy chọn biên tập mặc định",
		admin_rba_add_photos_priv: "Thêm ảnh từ máy chụp và thư viện ảnh",
		admin_rba_time_stamp_priv: "Mốc thời gian",
		admin_rba_add_docs_folders_priv: "Thêm tài liệu và tạo thư mục vào kho lưu trữ",
		admin_rba_open_docs_priv: "Mở tài liệu trong các ứng dụng khác",
		admin_rba_office_config_priv: "Cấu hình Office",
		admin_rba_tab_label_priv: "Nhãn tab IBM ECM",
		admin_rba_feature_sel_priv: "Lựa chọn tính năng",
		admin_rba_general_config_priv: "Cấu hình chung",
		admin_rba_favorites_priv: "Yêu thích",
		admin_rba_add_options_priv: "Thêm tùy chọn trong nhóm Sửa",
		admin_rba_browse_priv: "Duyệt",
		admin_rba_outlook_int_priv: "Tích hợp Outlook",
		admin_rba_search_priv: "Tìm kiếm",
		admin_rba_layout_priv: "Bố cục",
		admin_rba_case_priv: "Hồ sơ",
		admin_rba_desktop_feat_priv: "Tính năng máy khách",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Tính năng được hiển thị",
		admin_rba_branding_priv: "Tạo nhãn hiệu",
		admin_rba_home_priv: "Phím Home",
		admin_rba_main_color_priv: "Màu chính",
		admin_rba_sec_color_priv: "Màu phụ",
		admin_rba_teamspaces_priv: "Vùng nhóm",
		admin_rba_rbr_priv: "Soạn thảo dựa trên vai trò",
		admin_rba_et_mgr_priv: "Trình quản lý mẫu nhập liệu",
		admin_rba_policies_roles_priv: "Quản lý chính sách và vai trò",
		admin_rba_work_priv: "Làm việc",
		admin_rba_reasons_priv: "Mã lý do",
		admin_rba_tasks_priv: "Tác vụ không đồng bộ",
		admin_rba_auth_priv: "Xác thực",
		admin_rba_all_privs: "Tất cả đặc quyền",
		admin_rba_some_privs: "Một số đặc quyền",
		admin_rba_no_privs: "Không có đặc quyền",
		admin_add_users_groups_priv: "Thêm người dùng và nhóm",
		admin_url_features_priv: "Quản lý tính năng URL",
		admin_plugin_features_priv: "Quản lý tính năng plugin",
		admin_addl_components_priv: "Thành phần bổ sung",
		admin_global_toolbar_priv: "Thanh công cụ chung",
		admin_status_bar_priv: "Thanh trạng thái",
		admin_refresh_message: "Phải làm mới lại trình duyệt để dùng dữ liệu đã cập nhật.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Phải làm mới lại trình duyệt để dùng máy khách mặc định đã cập nhật.",
		admin_desktop_refresh_message: "Phải làm mới lại trình duyệt để dùng máy khách desktop đã cập nhật.",
		admin_action_open: "Mở",
		admin_action_edit: "Sửa",
		admin_action_copy: "Sao chép",
		admin_action_delete: "Xóa",
		admin_action_copy: "Sao chép",
		admin_action_new: "Tạo mới",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "ID này đang được dùng. Phải định rõ một ID duy nhất.",

		admin_searchable_properties_for: "Thuộc tính có thể tìm kiếm cho:",
		admin_repository_new: "Kho lưu trữ mới",
		admin_desktop_new: "Máy khách mới",
		admin_desktop_file_documents: "Yêu cầu người dùng lưu thư mục và tài liệu mới trong một thư mục",
		admin_desktop_file_documents_hover: "Chọn tùy chọn này nếu muốn yêu cầu người dùng chọn một thư mục khi thêm mục vào kho lưu trữ. Nếu không chọn tùy chọn này, người dùng có thể thêm tài liệu (IBM FileNet P8) hoặc tài liệu và thư mục (IBM Content Manager) mà không lưu chúng trong một thư mục.",
		admin_desktop_show_security_tab: "Hiện cài đặt bảo mật trong các thao tác thêm và kiểm nhập",
		admin_desktop_show_security_hover: "<b>Chỉ người dùng IBM FileNet P8.</b>  Chọn tùy chọn này nếu muốn cho phép người dùng sửa bảo mật của tài liệu và thư mục khi thêm hoặc kiểm nhập các mục vào máy khách này.",
		admin_desktop_configure_security_inheritance: "Cho phép người dùng cấu hình kế thừa bảo mật của thư mục",
		admin_desktop_configure_security_inheritance_hover: "<b>Chỉ người dùng IBM FileNet P8.</b>  Chọn tùy chọn này nếu bạn muốn người dùng có thể tùy chỉnh truy cập vào các mục trong thư mục bằng cách kiểm soát kế thừa bảo mật của các thư mục. Nếu bạn chọn tùy chọn này, người dùng có thể định rõ liệu người dùng hoặc nhóm có thể kế thừa bảo mật từ:<ul><li>Thư mục</li><li>Thư mục và các thư mục con trực tiếp của nó</li><li>Thư mục và toàn bộ thư mục con của nó</li></ul>",
		admin_desktop_appearance: "Dạng thể hiện",
		admin_desktop_appearance_instruction: "Có thể tùy chỉnh dạng thể hiện của máy khách bằng cách thay đổi trang đăng nhập và cờ hiệu hiển thị trên máy khách.",
		admin_desktop_layout: "Bố cục:",
		admin_desktop_layout_hover: "Bố cục định rõ tính năng nào có thể hiển thị trong web khách và nội dung của web khách được sắp xếp như thế nào.<br><br><b>Mẹo:</b> Có thể xác định bố cục tùy chỉnh bằng cách tạo plug-in. Phải đăng ký plug-in trong công cụ quản trị trước khi chọn một bố cục tùy chỉnh.",
		admin_desktop_layout_default: "Mặc định",
		admin_desktop_layout_custom: "Tùy chỉnh",
		admin_desktop_enable_workflow_email: "Bật máy khách này cho thông báo email luồng công việc FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Chỉ người dùng FileNet P8. Chọn tùy chọn này nếu muốn cho phép người dùng mở web khách từ các URL bao gồm trong thông báo email tạo bởi Công cụ xử lý.<br /><br />Nếu không bật tùy chọn này cho bất kỳ máy khách nào, người dùng không thể đăng nhập vào web khách từ các URL trong thông báo.<br /><br />Nếu bật tùy chọn này trên nhiều máy khách và có hơn một máy khách đáp ứng tiêu chuẩn được định rõ trong URL trong thông báo, web khách sẽ dùng máy khách đầu tiên đáp ứng tiêu chuẩn. ",
		admin_desktop_prevent_create_new_search: "Ngăn người dùng tạo các tìm kiếm",
		admin_desktop_prevent_create_new_search_hover: "Tùy chọn này hạn chế người dùng chỉ sử dụng tìm kiếm hiện hữu và tạo tìm kiếm kết thúc mở có thể không được tối ưu hóa.</br></br>Thiết lập này không ảnh hưởng đến không gian nhóm. Quyền tạo tìm kiếm trong không gian nhóm bị kiểm soát bởi vai trò người dùng có trong một không gian nhóm nhất định.",
		admin_desktop_prevent_create_new_unified_search: "Ngăn người dùng tạo tìm kiếm kho lưu trữ chéo",
		admin_desktop_prevent_create_new_unified_search_hover: "Tùy chọn này hạn chế người dùng chỉ dùng các tìm kiếm hiện có ở kho lưu trữ chéo và ngăn người dùng tạo tìm kiếm kho lưu trữ chéo mở mà có thể không được tối ưu hóa.",
		admin_desktop_hide_entry_template_not_found_warning: "Ẩn cảnh báo sẽ hiển thị khi không tìm thấy mẫu nhập có liên quan",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Chọn tùy chọn này nếu bạn muốn ẩn thông báo cảnh báo hiển thị khi chỉnh sửa thuộc tính mục và không tìm thấy mẫu nhập có liên quan đến mục.",
		admin_desktop_show_class_role_security_selection: "Cho phép người dùng cấu hình bảo mật dựa trên vai trò trong mẫu nhập",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Chỉ người dùng IBM FileNet P8.</b> Chọn tùy chọn này nếu bạn muốn người dùng cấu hình mẫu nhập để sử dụng bảo mật dựa trên vai trò khi thiết lập bảo mật trên các tài liệu và/hoặc các thư mục sử dụng mẫu nhập.  Nếu bạn chọn tùy chọn này, thì người chỉnh sửa mẫu có thể chỉ định xem các đối tượng bảo mật dựa trên vai trò có được áp dụng cho định nghĩa mẫu nhập hay không.",
		admin_desktop_show_primary_multi_part: "Chỉ mở tài liệu chính trong trình xem",
		admin_desktop_show_primary_multi_part_hover: "<b>Chỉ người dùng IBM FileNet P8.</b> Chọn tùy chọn này nếu bạn chỉ muốn mở tập tin chính trong trình xem.  Tài liệu có thể có nhiều tập tin liên kết với chúng.  Tùy chọn này sẽ chỉ có thể mở tài liệu chính đi kèm với tài liệu này.",
		admin_desktop_redaction_save_mode: "Tùy chọn biên tập mặc định:",
		admin_desktop_redaction_save_mode_hover: "Chọn chế độ lưu biên tập trình xem ViewONE Virtual mặc định:</br>* Luôn luôn hỏi lựa chọn của người dùng: sẽ làm hiển thị hộp thoại khi vào chế độ biên tập, để hỏi người dùng xem họ muốn kiểm nhập dưới dạng phiên bản mới, tạo tài liệu mới, hay tải nội dung xuống.</br>* Kiểm nhập dưới dạng phiên bản mới: sẽ luôn luôn lưu nội dung đã biên tập làm phiên bản mới của tài liệu hiện có.</br>* Lưu làm tài liệu hoàn toàn mới: sẽ luôn luôn lưu nội dung đã biên tập làm tài liệu hoàn toàn mới.</br>* Tải xuống và lưu trên máy khách: sẽ tải nội dung đã biên tập xuống hệ thống máy khách.",
		admin_desktop_redaction_save_mode_user_select: "Luôn luôn hỏi lựa chọn của người dùng",
		admin_desktop_redaction_save_mode_new_version: "Kiểm nhập làm phiên bản mới",
		admin_desktop_redaction_save_mode_new_document: "Lưu làm tài liệu hoàn toàn mới",
		admin_desktop_redaction_save_mode_local_content: "Tải xuống và lưu trên máy khách",

		admin_desktop_document_add_mode: "Hộp thoại Thêm tài liệu:",
		admin_desktop_document_add_mode_hover: "Ðịnh rõ hộp thoại Thêm để sử dụng khi thêm tài liệu được tạo bởi IBM Content Navigator:<ul><li>Tài liệu được biên tập cố định mới</li><li>Tài liệu kết hợp và chia tách mới</li><li>Tài liệu Microsoft Office mới</li><li>Tài liệu dịch vụ sửa mới</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Thêm tài liệu",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Thêm tài liệu bằng cách dùng mẫu nhập liệu",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Kết hợp và chia tách:",
		admin_desktop_merge_and_split_enable_hover: "Ðịnh rõ xem bạn có muốn người dùng truy cập máy khách này có thể kết hợp và chia tách tài liệu bằng trình xem hỗ trợ hay không.",

		admin_desktop_merge_and_split_show_checkin: "Nhắc người dùng cung cấp giá trị thuộc tính khi kiểm nhập thay đổi vào tài liệu.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Nếu bạn chọn tùy chọn này, thì hộp thoại kiểm nhập sẽ được hiển thị khi người dùng kiểm nhập thay đổi vào tài liệu ở chế độ Kết hợp và Chia tách.",

		admin_desktop_available_categories: "Các tính năng có sẵn",
		admin_desktop_selected_categories: "Các tính năng đã chọn",

		admin_layout_banner_title: "Cờ hiệu và trang đăng nhập",
		admin_layout_title: "Bố cục",

		admin_desktop_application_name: "Tên ứng dụng:",
		admin_desktop_application_name_hover: "Ðịnh rõ tên ứng dụng để hiển thị trong cờ hiệu.<br><br>Mẹo: Xác định tên ứng dụng cho các ngôn ngữ khác trong tab Nhãn / Nhãn Máy khách.",
		admin_desktop_theme: "Chủ đề:",
		admin_desktop_theme_hover: "Định rõ dùng chủ đề mặc định của IBM Content Navigator hoặc một chủ đề tùy chỉnh cho máy khách này. Ðể dùng chủ đề tùy chỉnh, phải tạo chủ đề trong phần <b>Chủ đề</b> của công cụ quản trị.",
		admin_desktop_login_logo: "Logo trang đăng nhập:",
		admin_desktop_login_logo_hover: "Nếu muốn thay đổi logo hiển thị trên trang đăng nhập, có thể định rõ URL của tập tin logo. Tuy nhiên, nên dùng chủ đề tùy chỉnh để thay đổi logo.",
		admin_desktop_login_logo_url_hover: "Nhập URL của tập tin logo. Nếu logo nằm trên cùng máy chủ ứng dụng web như web khách, nhập URL liên quan, ví dụ: /mycustomizations/login_logo.png<br><br>Logo không được rộng hơn 200 pixel và cao hơn 150 pixel.<br><br>Logo nên có nền trong suốt.",
		admin_desktop_banner_logo: "Logo cờ hiệu:",
		admin_desktop_banner_logo_hover: "Nếu muốn thay đổi logo hiển thị trên cờ hiệu, có thể định rõ URL của tập tin logo. Tuy nhiên, nên dùng chủ đề tùy chỉnh để thay đổi logo.",
		admin_desktop_banner_logo_url_hover: "Nhập URL của tập tin logo. Nếu logo nằm trên cùng máy chủ ứng dụng web như web khách,  nhập URL liên quan, ví dụ: /mycustomizations/banner_logo.png<br><br>Logo không được rộng hơn 72 pixel và cao hơn 36 pixel.<br><br>Logo nên có nền trong suốt.",
		admin_desktop_banner_background_color: "Màu nền cờ hiệu:",
		admin_desktop_banner_background_color_hover: "Nếu muốn thay đổi màu nền cờ hiệu, có thể định rõ màu tùy chỉnh. Tuy nhiên, nên dùng chủ đề tùy chỉnh để thay đổi màu cờ hiệu.",
		admin_desktop_banner_background_color_custom_hover: "Ðịnh rõ màu nền cờ hiệu ứng dụng ở dạng màu thập lục phân.",
		admin_desktop_banner_application_name_color: "Màu văn bản tên ứng dụng:",
		admin_desktop_banner_application_name_color_hover: "Nếu muốn thay đổi màu tên ứng dụng, có thể định rõ màu tùy chỉnh. Tuy nhiên, nên dùng chủ đề tùy chỉnh để thay đổi màu tên ứng dụng.",
		admin_desktop_banner_application_name_color_custom_hover: "Ðịnh rõ màu tên ứng dụng ở dạng màu thập lục phân.",
		admin_desktop_banner_menu_color: "Màu biểu tượng cờ hiệu:",
		admin_desktop_banner_menu_color_hover: "Nếu muốn thay đổi màu nền cờ hiệu, có thể cần phải thay đổi phương thức màu của biểu tượng trong cờ hiệu để có thể thấy rõ hơn. Ðịnh rõ hiển thị phiên bản sáng hay tối của các biểu tượng cờ hiệu.<br><br>Tuy nhiên, nên dùng chủ đề tùy chỉnh để thay đổi màu biểu tượng.",
		admin_desktop_login_page_content: "Nội dung trang đăng nhập:",
		admin_desktop_login_page_content_hover: "Nếu muốn hiển thị thông tin bổ sung trên trang đăng nhập, như các thông báo về việc mất điện của hệ thống hoặc người dùng có thể được giúp đỡ về tên người dùng và mật khẩu ở đâu, có thể định rõ URL của nội dung muốn hiển thị.",
		admin_desktop_login_page_content_url_hover: "Nhập URL của nội dung trang đăng nhập. Nếu nội dung nằm trên cùng máy chủ ứng dụng web như web khách, nhập URL liên quan, ví dụ: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Quy tắc về mật khẩu:",
		admin_desktop_password_rules_hover: "Nếu muốn cung cấp cho người dùng các hướng dẫn về việc tạo mật khẩu, ví dụ ký tự cấm hoặc số ký tự tối thiểu, có thể định rõ URL của trang có chứa quy tắc về mật khẩu của bạn.",
		admin_desktop_password_rules_url_hover: "Nhập URL của nội dung quy tắc về mật khẩu. Nếu nội dung nằm trên cùng máy chủ ứng dụng web như web khách, nhập URL liên quan, ví dụ: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL trợ giúp người dùng cuối:",
		admin_desktop_help_url_hover: "Bạn có thể sử dụng trợ giúp gửi kèm với IBM Content Navigator, hoặc có thể chuyển hướng người dùng đến nội dung trợ giúp tùy chỉnh bằng cách thực hiện một trong các thao tác sau:<br><br><ul><li>Hướng đến hệ thống trợ giúp tùy chỉnh</li><li>Thêm trợ giúp vào thực thể của IBM Knowledge Center được triển khai bằng IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Nhập URL của hệ thống trợ giúp tùy chỉnh. IBM Content Navigator có gắn kèm index.jsp?content=/com.ibm.usingeuc.doc/ và tên tập tin vào cuối URL mà bạn xác định.  Ðể liên kết \"Tìm hiểu thêm\" trong giao diện có thể làm việc, hệ thống trợ giúp phải dùng cùng tên tập tin như trợ giúp người dùng cuối được tích hợp. ",
		admin_desktop_deprecated_appearance_title: "Thiết lập bị từ chối",
		admin_desktop_deprecated_appearance_instructions: "Nếu bạn sử dụng chủ đề tùy chỉnh, các thiết lập này bị ghi đè bởi chủ đề tùy chỉnh đó. Bạn nên chuyển những thiết lập này sang một chủ đề tùy chỉnh, cung  cấp cách tạo kiểu chi tiết hơn so với các thiết lập trong phần này. Ngoài ra, một chủ đề tùy chỉnh có thể được sử dụng bởi nhiều máy khách.",

		admin_desktop_plugins_title: "Bật hoặc tắt plug-in cho máy khách này.",
		admin_desktop_plugins_enable_all_plugins: "Bật tất cả plug-in đã triển khai để sử dụng với máy khách này",
		admin_desktop_plugins_select_plugins: "Chọn plug-in đã triển khai để bật để sử dụng với máy khách này",
		admin_desktop_plugins_select_plugin: "Chọn Plug-in",

		admin_desktop_layout_features: "Tính năng hiển thị:",
		admin_desktop_layout_features_hover: "Chọn tính năng mà bạn muốn người dùng truy cập vào từ máy khách này. Các tính năng được hiển thị theo thứ tự được liệt kê.<br><br>Khi chọn một tính năng, bạn có thể tùy chỉnh một số kiểu chạy của tính năng trong máy khách, như chọn kho lưu trữ mặc định cho tính năng.",
		admin_desktop_layout_default_repository: "Kho lưu trữ mặc định:",
		admin_desktop_layout_default_repository_layout_hover: "Ðịnh rõ kho lưu trữ nào sẽ được chọn mặc định khi người dùng mở tính năng này.",
		admin_desktop_layout_document_thumbnails: "Hình thu nhỏ tài liệu:",
		admin_desktop_layout_document_thumbnails_hover: "Ðịnh rõ có hiển thị dạng hình thu nhỏ cho các tài liệu trong ngăn Thông tin tài liệu không.<br><br>Hiển thị hình thu nhỏ có thể làm chậm hiệu suất của web khách.",
		admin_desktop_layout_show_filmstrip_view: "Xem dạng Filmstrip:",
		admin_desktop_layout_show_filmstrip_view_hover: "Ðịnh rõ có cho phép người dùng chuyển hiển thị danh sách nội dung thành xem dạng filmstrip không.<br><br>Xem dạng filmstrip tạo ra một kiểu xem trước từng tài liệu mà người dùng chọn. Tuy nhiên, dùng xem dạng filmstrip có thể làm chậm hiệu suất của web khách. Ngoài ra, bạn phải cấu hình trình xem chuyển đổi HTML để xem trước tài liệu.",
		admin_enabled: "Bật",
		admin_disabled: "Tắt",
		admin_include: "Bao gồm",
		admin_exclude: "Loại ra",
		admin_layout_teamspaces_default_repository: "Vùng nhóm:",
		admin_layout_entry_templates_default_repository: "Mẫu nhập:",
		admin_layout_other_features_default_repository: "Tìm kiếm và duyệt:",
		admin_layout_work_default_repository: "Công việc:",
		admin_layout_default_feature: "Tính năng mặc định:",
		admin_default_category_placeholder: "Chọn tính năng",
		admin_layout_default_feature_hover: "Ðịnh rõ tính năng nào sẽ được hiển thị khi người dùng đăng nhập vào máy khách này.",
		admin_layout_default_feature_warning: "Việc thay đổi tính năng mặc định có thể ảnh hưởng đến thời gian cần để tải ứng dụng.",
		admin_layout_feature_list_header: "Tính năng",
		admin_layout_show_statusbar: "Thanh trạng thái:",
		admin_layout_show_statusbar_hover: "Ðịnh rõ có hiển thị thanh trạng thái ở cuối máy khách không.<br><br>Nếu ẩn thanh trạng thái, người dùng không thể xem thông tin về các sự kiện không có lỗi, như:<ul><li>Tài liệu đã được thêm vào kho lưu trữ.</li><li>Tìm kiếm trả về 59 tài liệu.</li></ul>",
		admin_layout_show_magazineview: "Xem dạng Magazine:",
		admin_layout_show_magazineview_hover: "Ðịnh rõ có cho phép người dùng chuyển hiển thị danh sách nội dung thành xem dạng magazine không.<br><br>Xem dạng magazine làm tăng chiều cao của từng mục nhập trong danh sách nội dung, do đó sẽ làm giảm số lượng mục có thể được hiển thị cùng lúc trong danh sách nội dung.",
		admin_layout_show_detailsview: "Xem dạng Chi tiết:",
		admin_layout_show_detailsview_hover: "Ðịnh rõ có cho phép người dùng chuyển hiển thị danh sách nội dung thành xem dạng chi tiết không.<br><br>Xem dạng chi tiết tăng tối đa số lượng hàng thấy được trong danh sách nội dung.",
		admin_feature_config_docinfopane_label: "Ngăn thông tin tài liệu:",
		admin_feature_config_docinfopane_hoverhelp: "Ðịnh rõ xem người dùng có thể truy cập ngăn thông tin tài liệu trong tính năng này không.",
		admin_feature_config_docinfopane_default_label: "Ðộng thái mặc định:",
		admin_feature_config_docinfopane_expanded: "Mở rộng",
		admin_feature_config_docinfopane_collapsed: "Thu hẹp",
		admin_feature_config_docinfopane_expand_on_select: "Mở rộng khi mục được chọn",
		admin_layout_features_title: "Tính năng máy khách",
		admin_layout_features_instructions: "Ðịnh rõ người dùng có thể truy cập tính năng nào từ máy khách này.  Ngoài ra, cũng có thể tùy chỉnh kiểu chạy của từng tính năng được bao gồm trong máy khách.",
		admin_layout_components_title: "Thành phần bổ sung của máy khách",
		admin_layout_components_instructions: "Có thể tắt một số thành phần của máy khách nếu muốn có giao diện hợp lý hơn hoặc muốn cải thiện hiệu suất của web khách.",
		admin_layout_featureconfig_instructions: "Chọn tính năng để cấu hình",
		admin_layout_featureconfig_no_configuration: "Không có cấu hình tính năng.",
		admin_layout_featureconfig_label: "Cấu hình cho tính năng ${0}",
		admin_layout_featureconfig_title: "Cấu hình tính năng",
		admin_layout_featureconfig_taskManagerURL: "Để sử dụng tính năng này, bạn phải bật và cấu hình IBM Content Navigator để kết nối đến dịch vụ trình quản lý tác vụ. Bật dịch vụ trình quản lý tác vụ trong phần <b>Thiết lập</b> của công cụ quản trị này.",
		admin_feature_config_show_my_checkouts_label: "Ngăn Kiểm xuất của tôi:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Ngăn Kiểm xuất của tôi giúp người dùng chạy tìm kiếm cho tất cả mục mà họ đã kiểm xuất ở một kho lưu trữ cụ thể. Ðịnh rõ xem người dùng có thể truy cập ngăn Kiểm xuất của tôi từ tính năng Trang chủ không.<br/><br/><b>Giới hạn:</b> Tính năng này yêu cầu phải có ít nhất một kho lưu trữ IBM Content Manager, IBM FileNet P8 hoặc OASIS CMIS có liên kết với máy khách này.",

		admin_feature_config_default_repository_icon_text: "Kho lưu trữ mặc định",
		admin_show: "Hiện",
		admin_hide: "Ẩn",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Không thể xóa tính năng Quản trị khỏi Máy khách quản trị",
		admin_warning_label: "Cảnh báo:",
		admin_layout_show_globaltoolbar: "Thanh công cụ chung:",
		admin_layout_show_globaltoolbar_hover: "Định rõ có hiển thị thanh công cụ trong cờ hiệu ở phía trên máy khách không.<br><br>Thanh công cụ chung bao gồm các thao tác giúp người dùng thêm tài liệu, thư mục và các mục giữ lại vào kho lưu trữ. Các thao tác sẵn có tùy theo kho lưu trữ mà người dùng được kết nối đến.",
		admin_interface_text_name_label: "Kiểu nhãn",

		admin_interface_text_label_description: "Bạn có thể tùy chỉnh văn bản hiển thị ở một số vùng nhất định của web khách. Nhãn được hiển thị cho tất cả kho lưu trữ và máy khách trong cấu hình của bạn. Nhập văn bản muốn xem trong giao diện vào trường Nhãn hiện tại.<br><br><b>Quan trọng:</b> Bất kỳ thay đổi nào ở nhãn cũng sẽ không được hiển thị trong công cụ quản trị.",
		admin_interface_text_label_action: "Nhãn thao tác",
		admin_interface_text_label_action_description: "Nhãn thao tác được hiển thị trên các nút và trong trình đơn trên web khách. Có thể xác định các nhãn thao tác khác nhau cho từng kiểu kho lưu trữ.",
		admin_interface_text_label_application: "Nhãn ứng dụng",
		admin_interface_text_label_application_description: "Nhãn ứng dụng được hiển thị trên web khách.",
		admin_interface_text_label_system: "Nhãn thuộc tính hệ thống",
		admin_interface_text_label_system_description: "Thuộc tính hệ thống được hiển thị khác nhau theo kho lưu trữ. Có thể tùy chỉnh nhãn hiển thị cho các thuộc tính hệ thống liên quan đến tài liệu và thư mục trong kho lưu trữ của bạn.",
		admin_interface_text_label_desktop: "Nhãn máy khách",
		admin_interface_text_label_desktop_description: "Nếu đã tùy chỉnh tên ứng dụng trong một máy khách, có thể tùy chỉnh tên này ở các ngôn ngữ khác tiếng Anh. Cũng có thể tùy chỉnh tên của các vùng ứng dụng IBM FileNet P8 trong một máy khách.",

		admin_interface_text_system_label: "Nhãn hệ thống",
		admin_interface_text_current_label: "Nhãn hiện tại",
		admin_interface_text_default_label_heading: "Nhãn mặc định",
		admin_interface_text_default_label: "Nhãn mặc định:",
		admin_interface_text_displayed_in_label: "Hiển thị cho",
		admin_interface_text_displayed_in_document_folder: "Tài liệu và thư mục",
		admin_interface_text_displayed_in_document: "Tài liệu",
		admin_interface_text_displayed_in_folder: "Thư mục",
		admin_interface_text_displayed_in_admin_application_space: "Nhãn vùng ứng dụng",
		admin_interface_text_displayed_in_desktop: "Nhãn tính năng cho di động",
		admin_interface_text_displayed_in_admin_application_name: "Tên ứng dụng",

		admin_new_desktop: "Máy khách mới",
		admin_new_repository: "Kho lưu trữ mới",
		admin_new_menu: "Trình đơn mới",
		admin_new_viewer_mapping: "Bản đồ trình xem mới",
		admin_new_mapping_label: "Ánh xạ mới",
		admin_new_icon_mapping: "Ánh xạ biểu tượng mới",
		admin_viewer_mapping_list_instructions: "Có thể cấu hình web khách sử dụng trình xem nào để hiển thị các kiểu nội dung khác nhau. Bản đồ trình xem xác định kiểu MIME nào có liên quan đến từng trình xem mà bạn muốn dùng. Có thể tạo nhiều bản đồ trình xem nếu muốn dùng các trình xem khác nhau cho các máy khách khác nhau.",
		admin_viewer_mapping_instructions: "Ðịnh rõ trình xem mà bạn muốn dùng để mở tập tin. Nếu muốn dùng trình xem tùy chỉnh, phải tích hợp trình xem làm plug-in trước khi thêm vào bản đồ trình xem.<br><br><b>Quan trọng:</b> Khi người dùng mở một tài liệu, web khách sẽ tìm kiếm danh sách ánh xạ trình xem để tìm trình xem đầu tiên có thể mở tài liệu theo hệ điều hành mà người dùng đang chạy và kho lưu trữ mà người dùng kết nối đến. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Plug-in mới",
		admin_menu_list_instructions: "Có thể tạo thanh công cụ tùy chỉnh và trình đơn ngữ cảnh để kiểm soát thao tác nào là có sẵn cho người dùng. Không thể sửa trình đơn mặc định, nhưng có thể tạo các bản sao của trình đơn đang tồn tại để hạn chế thao tác có sẵn hoặc để thêm thao tác tùy chỉnh được xác định trong các plug-in.<br><br>Nếu muốn tạo một kiểu trình đơn mới, phải xác định trình đơn đó trong một plug-in.",
		admin_menu_id_hover: "ID phải là duy nhất và không thể thay đổi sau khi lưu trình đơn.<br><br>ID chỉ có thể chứa ký tự kiểu chữ và số và thuộc dạng có phân biệt chữ hoa và chữ thường.",
		admin_menu_id_disabled_hover: "Không thể thay đổi ID trình đơn. Nếu muốn dùng một ID khác, phải tạo một trình đơn mới.",
		admin_menu_default_instructions: "Không thể sửa trình đơn này vì đây là trình đơn mặc định. Nếu muốn chỉnh sửa trình đơn này, phải tạo một bản sao của trình đơn.",
		admin_menu_toolbar_instructions: "Có thể hạn chế thao tác có sẵn cho thanh công cụ này hoặc có thể thêm thao tác tùy chỉnh được xác định trong một plug-in. Cũng có thể sắp xếp các thao tác bằng cách thêm dấu tách vào thanh công cụ.",
		admin_menu_toolbar_custom_instructions: "Thanh công cụ này được xác định bởi một plug-in. Nếu muốn sửa thanh công cụ này, phải cập nhật plug-in hoặc tạo một bản sao của thanh công cụ.",
		admin_menu_context_menu_instructions: "Có thể hạn chế thao tác có sẵn cho trình đơn ngữ cảnh này hoặc có thể thêm thao tác tùy chỉnh được xác định trong một plug-in. Cũng có thể sắp xếp các thao tác bằng cách thêm dấu tách và trình đơn con vào trình đơn ngữ cảnh.",
		admin_menu_context_menu_custom_instructions: "Trình đơn ngữ cảnh này được xác định bởi một plug-in. Nếu muốn chỉnh sửa trình đơn ngữ cảnh này, phải cập nhật plug-in hoặc tạo một bản sao của trình đơn ngữ cảnh.",
		admin_desktop_list_instructions: "Có thể tạo nhiều máy khách để cho phép những người dùng khác nhau truy cập vào nội dung mà họ cần. Ví dụ, có thể tạo một máy khách chỉ cho phép người dùng tìm kiếm nội dung hoặc tạo một máy khách cho phép người dùng truy cập vào một kho lưu trữ. ",
		admin_plugin_updated: "Cấu hình của plug-in đã chọn đã được thay đổi. Bạn phải làm mới lại trình duyệt để các thay đổi này có hiệu lực.",
		admin_repository_ci_heading: "Kho lưu trữ Trình tích hợp nội dung: <b>${0}</b>",
		admin_repository_p8_heading: "Kho lưu trữ Trình quản lý nội dung FileNet: <b>${0}</b>",
		admin_repository_cm_heading: "Kho lưu trữ Trình quản lý nội dung: <b>${0}</b>",
		admin_repository_od_heading: "Kho lưu trữ Trình quản lý nội dung OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Kho lưu trữ Dịch vụ tương kết trình quản lý nội dung (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Kho lưu trữ Hộp: <b>${0}</b>",
		admin_repository_generic_heading: "Kho lưu trữ: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Bạn có muốn xóa máy khách đã chọn không?\n${0} máy khách được chọn.",
		admin_delete_confirmation_menus: "Bạn có muốn xóa trình đơn đã chọn không?\n${0} trình đơn được chọn.",
		admin_delete_confirmation_repositories: "Bạn có muốn xóa kho lưu trữ đã chọn không?\n${0} kho lưu trữ được chọn.",
		admin_delete_confirmation_viewer_mappings: "Bạn có muốn xóa bản đồ trình xem đã chọn không?  ${0} bản đồ được chọn.",
		admin_delete_confirmation_icon_mappings: "Bạn có muốn xóa cấu hình biểu tượng đã chọn không?\n${0} cấu hình biểu tượng được chọn.",
		admin_delete_confirmation_plugins: "Bạn có muốn xóa plug-in đã chọn không?\n${0} plug-in được chọn.",
		admin_delete_confirmation: "Bạn có muốn xóa mục đã chọn không?\n${0} mục được chọn.",

		admin_viewer_mapping_id_hover: "ID phải là duy nhất và không thể thay đổi sau khi lưu bản đồ trình xem.<br><br>ID chỉ có thể chứa ký tự kiểu chữ và số và thuộc dạng có phân biệt chữ hoa và chữ thường.",
		admin_viewer_mapping_id_disabled_hover: "Không thể thay đổi ID bản đồ trình xem. Nếu muốn dùng một ID khác, phải tạo một bản đồ trình xem mới.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Không thể xóa máy khách mặc định.",

		admin_desktop_heading: "Máy khách: <b>${0}</b>",
		admin_menu_toolbar_heading: "Thanh công cụ: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Thanh công cụ tùy chỉnh: <b>${0}</b>",
		admin_menu_context_menu_heading: "Trình đơn ngữ cảnh: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Trình đơn ngữ cảnh tùy chỉnh: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Plug-in có thể là một tập tin JAR hoặc tập tin lớp biên dịch.<br/><br/><b>Quan trọng:</b> Máy chủ ứng dụng web IBM Content Navigator phải có thể truy cập vào tập tin plug-in trên hệ thống tập tin nội bộ hoặc qua một URL.",
		admin_plugin_list_instructions: "Phải dùng công cụ quản trị để đăng ký các plug-in cho web khách. Nếu plug-in yêu cầu cấu hình thêm, tham số cấu hình sẽ được hiển thị sau khi đăng ký plug-in.<br /><br /><b>Quan trọng:</b> Nếu sửa plug-in được tham chiếu trong một vùng khác của công cụ quản trị, ví dụ như trình đơn, bạn có thể gặp vấn đề ở kiểu chạy của plug-in. Ngoài ra, các plug-in được gọi lên theo thứ tự được liệt kê. Nếu cần chạy một plug-in trước một plug-in khác, đảm bảo phải liệt kê các plug-in theo thứ tự mà chúng phải chạy.",
		admin_plugin_cannot_delete: "Không thể xóa các plug-in đã chọn vì có một số plug-in phụ thuộc vào các plug-in này.<br/>Plug-in đã chọn: ${0}<br/>Plug-in phụ thuộc: ${1}",
		admin_plugin_cannot_disable: "Không thể tắt các plug-in đã chọn vì có một số plug-in phụ thuộc vào các plug-in này.<br/>Plug-in đã chọn: ${0}<br/>Plug-in phụ thuộc: ${1}",
		admin_plugin_cannot_add: "Không thể thêm plug-in vì một số plug-in mà nó phụ thuộc bị thiếu hoặc bị hủy kích hoạt. Plug-in bị thiếu hoặc bị hủy kích hoạt: ${0}",
		admin_plugin_cannot_enable: "Không thể kích hoạt plug-in đã chọn vì một số plug-in mà chúng phụ thuộc bị thiếu hoặc bị hủy kích hoạt.<br/>Plug-in đã chọn: ${0}<br/>Plug-in bị thiếu hoặc bị hủy kích hoạt: ${1}",
		admin_plugin_save_order: "Thứ tự lưu",
		admin_plugin_load: "Tải",
		admin_plugin_load_hover: "Ðịnh rõ URL của plug-in",
		admin_plugin_file_hover: "Nếu tập tin JAR plug-in nằm trên hệ thống tập tin nội bộ của bạn, có thể nhập đường dẫn tuyệt đối hoặc URL của tập tin plug-in. Nếu tập tin JAR plug-in nằm trên máy chủ từ xa, phải nhập URL của tập tin plug-in.",
		admin_plugin_classfolderpath_hover: "Tập tin lớp biên dịch phải nằm trên máy chủ ứng dụng web của IBM Content Navigator.<br/><br/>Nhập đường dẫn tuyệt đối của thư mục nơi các lớp plug-in được biên dịch và tạo.<br/><br/>Ðường dẫn không được chứa tên gói của lớp plug-in. Ví dụ, đường dẫn mặc định cho lớp plug-in mẫu trên Windows là C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Nhập tên đầy đủ của lớp Java bên trong tập tin lớp cần được tải và gọi làm lớp plug-in.<br/>Ví dụ, tên lớp cho plug-in mẫu là com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Không tìm thấy tập tin JAR plug-in tại URL đã xác định. Ðảm bảo tập tin JAR nằm trên máy chủ ứng dụng web và URL và tên tập tin là đúng.",
		admin_plugin_for_repository_not_loaded: "Không thể sửa kho lưu trữ này. Plug-in xác định và hỗ trợ kiểu kho lưu trữ này đã không được tải. Trên tab Plug-ins, sửa plug-in để xác minh nó được cấu hình đúng và được tải.",
		admin_plugin_repository_types: "Kiểu kho lưu trữ:",
		admin_plugin_viewers: "Trình xem:",
		admin_plugin_features: "Tính năng:",
		admin_plugin_layouts: "Bố cục:",
		admin_plugin_not_available: "Không có sẵn",
		admin_plugin_config_params: "Tham số cấu hình:",
		admin_viewer_def_heading: "Bản đồ trình xem: <b>${0}</b>",
		admin_users_and_groups: "Người dùng và nhóm",
		admin_general: "Chung",
		admin_logging: "Ghi chép",
		admin_authentication: "Xác thực",		
		admin_rolebase_role: "Vai trò:",
		admin_settings_logging_instructions: "Có thể dùng ghi chép để xử lý sự cố ở web khách. Có thể lọc ghi chép nếu biết sự cố xảy ra trong một lớp Java cụ thể hoặc cho một người dùng cụ thể. Thông tin về lỗi được ghi vào tập tin nhật ký lỗi máy chủ ứng dụng web.",
		admin_settings_logging_instructions2: "<b>Cài đặt ghi chép gỡ lỗi</b><br />Nếu biết sự cố xảy ra cho người dùng hoặc máy chủ của khách cụ thể, có thể đặt ghi chép gỡ lỗi vào máy hoặc người dùng đó. Có thể lấy thông tin gỡ lỗi trong môi trường sản xuất mà không làm ảnh hưởng đáng kể đến hiệu suất của hệ thống.<br /><br /><b>Quan trọng:</b> Nếu định rõ người dùng hoặc máy chủ của khách, cài đặt này sẽ ghi đè bất kỳ cài đặt ghi chép nào khác. Sau khi lấy được thông tin cần thiết, đặt tùy chọn này thành <b>Không</b> để tiếp tục ghi chép chuẩn cho môi trường của bạn.",
		admin_settings_export_config_hover: "Xuất thông tin cấu hình hệ thống hiện tại ra một tập tin để dùng với Trình thu thập dữ liệu hỗ trợ IBM Support Assistant Data Collector. Tập tin được lưu vào vị trí được xác định bởi thuộc tính hệ thống Java user.home.",
		admin_logging_level: "Ghi chép mức ứng dụng:",
		admin_logging_level_hover: "Mức ghi chép ảnh hưởng đến lượng thông tin được lưu trữ trên máy chủ của bạn. Chọn <b>Lỗi</b> sẽ lấy được lượng thông tin ghi chép ít nhất. Chọn <b>Gỡ lỗi</b> sẽ lấy được nhiều thông tin nhất.<br /><br />Không định rõ <b>Gỡ lỗi</b> trong môi trường sản xuất trừ khi được hướng dẫn phải thực hiện bởi IBM Software Support.",
		admin_logging_level_0: "Không ghi chép",
		admin_logging_level_1: "Lỗi",
		admin_logging_level_2: "Cảnh báo",
		admin_logging_level_3: "Thông tin",
		admin_logging_level_4: "Gỡ lỗi",
		admin_logging_classes: "Ghi chép mức lớp Java :",
		admin_logging_classes_hover: "Theo mặc định, tất cả gói và lớp Java được gồm trong nhật ký lỗi máy chủ ứng dụng web. Tuy nhiên, có thể định rõ gói hoặc lớp nào được bao gồm hoặc loại ra khỏi ghi chép của bạn. Có thể dùng nhật ký lỗi máy chủ ứng dụng web để xác định lớp nào được bao gồm hoặc loại ra.<br><br>Nếu biết sự cố xảy ra trong một lớp cụ thể, có thể bao gồm một cách cụ thể lớp này trong tập tin nhật ký. Khi bao gồm một lớp trong nhật ký lỗi, tất cả các lớp khác sẽ bị loại ra khỏi tập tin nhật ký.<br><br>Nếu biết lỗi không xảy ra ở một lớp và muốn giảm kích cỡ của tập tin nhật ký, có thể loại trừ lớp đó khỏi tập tin nhật ký.",
		admin_logging_classes_include: "Bao gồm",
		admin_logging_classes_include_all: "Tất cả lớp",
		admin_logging_classes_include_specified: "Lớp cụ thể",
		admin_logging_classes_include_specified_msg: "Ðịnh rõ lớp nào được bao gồm.",
		admin_logging_classes_exclude: "Loại ra",
		admin_logging_classes_exclude_none: "Không có",
		admin_logging_classes_exclude_specified: "Lớp cụ thể",
		admin_logging_classes_exclude_specified_msg: "Ðịnh rõ lớp nào bị loại ra.",
		admin_logging_debug: "Ghi chép gỡ lỗi cho:",
		admin_logging_debug_hover: "<b>Quan trọng:</b> Xem lại tập tin nhật ký máy chủ ứng dụng web trước khi xác định địa chỉ IP máy chủ của khách hoặc người dùng. Giá trị cung cấp phải khớp với giá trị hiển thị trong tập tin nhật ký.",
		admin_logging_debug_none: "Không (mặc định)",
		admin_logging_debug_host: "Máy chủ khách (địa chỉ IP)",
		admin_logging_debug_host_msg: "Ðịnh rõ địa chỉ IP của một hoặc nhiều máy khách mà bạn muốn ghi chép thông tin gỡ lỗi. Dùng dấu phẩy để tách các địa chỉ IP.<br /><br /><b>Quan trọng:</b> Xem lại tập tin nhật ký máy chủ ứng dụng web trước khi xác định địa chỉ IP. Giá trị cung cấp phải khớp với giá trị hiển thị trong tập tin nhật ký.",
		admin_logging_debug_user: "Người dùng",
		admin_logging_debug_user_msg: "Ðịnh rõ tên người dùng của một hoặc nhiều người dùng mà bạn muốn ghi chép thông tin gỡ lỗi. Dùng dấu phẩy để tách các tên người dùng.<br /><br /><b>Quan trọng:</b> Xem lại tập tin nhật ký máy chủ ứng dụng web trước khi định rõ tên người dùng. Giá trị cung cấp phải khớp với giá trị hiển thị trong tập tin nhật ký.",

		admin_office_settings_logging_instructions: "Có thể dùng ghi chép để xử lý sự cố ở IBM Content Navigator cho Microsoft Office. Có thể lọc ghi chép nếu biết sự cố xảy ra trong một lớp cụ thể hoặc cho một  người dùng cụ thể. Thông tin lỗi được ghi vào tập tin nhật ký ứng dụng trên IBM Content Navigator cho máy chủ khách Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Cài đặt ghi chép gỡ lỗi</b><br />Nếu biết sự cố xảy ra cho máy chủ của khách cụ thể hoặc người dùng IBM Content Navigator cho Microsoft Office, có thể đặt ghi chép gỡ lỗi vào máy hoặc người dùng đó. Có thể lấy thông tin gỡ lỗi trong môi trường sản xuất mà không làm ảnh hưởng đáng kể đến hiệu suất của hệ thống. <br /><br /><b>Quan trọng:</b> Nếu định rõ người dùng hoặc máy chủ của khách, cài đặt này sẽ ghi đè bất kỳ cài đặt ghi chép nào khác. Sau khi lấy được thông tin cần thiết, đặt tùy chọn này thành <b>Không</b> để tiếp tục ghi chép chuẩn cho môi trường IBM Content Navigator cho Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Quan trọng:</b> Xem lại tập tin nhật ký máy khách trước khi xác định địa chỉ IP máy chủ khách hoặc người dùng. Giá trị cung cấp phải khớp với giá trị hiển thị trong tập tin nhật ký. ",
		admin_office_logging: "Ghi chép Office",
		admin_office_logging_classes: "Ghi chép mức lớp:",
		admin_office_logging_classes_hover: "Theo mặc định, tất cả gói và lớp được bao gồm trong nhật ký lỗi IBM Content Navigator cho Microsoft Office. Tuy nhiên, có thể định rõ gói hoặc lớp nào được bao gồm hoặc loại ra khỏi ghi chép của bạn. Có thể dùng nhật ký máy khách để xác định lớp nào được bao gồm hoặc loại ra.<br /><br />Nếu biết sự cố xảy ra trong một lớp cụ thể, có thể bao gồm một cách cụ thể lớp này trong tập tin nhật ký. Khi bao gồm một lớp trong nhật ký lỗi, tất cả các lớp khác sẽ bị loại ra khỏi tập tin nhật ký. <br /><br />Nếu biết sự cố không xảy ra ở một lớp và muốn giảm kích cỡ của tập tin nhật ký, có thể loại lớp đó ra khỏi tập tin nhật ký. ",
		admin_office_logging_debug_hover: "<b>Quan trọng:</b> Xem lại tập tin nhật ký máy khách trước khi xác định địa chỉ IP máy chủ khách hoặc người dùng. Giá trị cung cấp phải khớp với giá trị hiển thị trong tập tin nhật ký.",
		admin_office_logging_additional_settings: "Cài đặt bổ sung:",
		admin_office_logging_additional_settings_hover: "Ðịnh rõ cài đặt bổ sung",
		admin_office_logging_file_size: "Kích thước tập tin nhật ký",
		admin_office_logging_file_size_hover: "Ðịnh rõ kích thước mà IBM Content Navigator cho Microsoft Office tạo tập tin nhật ký mới. Khi tập tin nhật ký đạt kích thước tối đa, nhật ký hiện tại được đặt lại tên gồm có ngày (với định dạng YYYYMMdd) và số gia tập tin (ví dụ, ICNExcelAddin-20121116-5.log) và một tập tin nhật ký mới sẽ được tạo. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Hiện theo dõi ngăn xếp trên hội thoại",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Có thể chọn hiện thông tin theo dõi ngăn xếp trên hội thoại thông báo để giúp giải quyết vấn đề. Ngay cả khi không bật tùy chọn này, thông tin theo dõi ngăn xếp chi tiết cũng luôn được bao gồm trong nhật ký lỗi IBM Content Navigator cho Microsoft Office. ",

		admin_icon_state_twisty: "Biểu tượng trạng thái",
		admin_icon_state_icon: "Biểu tượng trạng thái",
		admin_icon_state: "Trạng thái",
		state_contains_label: "Trạng thái chứa",
		admin_icon_state_instructions: "Có thể tùy chỉnh biểu tượng hiển thị bên cạnh tài liệu, thư mục và mục làm việc trên kho lưu trữ của bạn.<br><br><b>Mẹo:</b> Có thể định rõ có hiển thị biểu tượng trạng thái cho từng kho lưu trữ trong môi trường của bạn hay không.",
		admin_icon_state_dialog_title: "Ánh xạ biểu tượng trạng thái",
		admin_icon_state_dialog_instructions: "Có thể ánh xạ trạng thái đã chọn đến một biểu tượng xác định trước được cung cấp với web khách hoặc đến một biểu tượng tùy chỉnh.",

		admin_icon_mapping_twisty: "Biểu tượng kiểu MIME",
		admin_icon_mapping_dialog_title: "Ánh xạ biểu tượng",
		admin_icon_mapping: "Ánh xạ biểu tượng",
		admin_icon_mapping_instructions: "Có thể ánh xạ danh sách các kiểu MIME đến một biểu tượng xác định trước được cung cấp với web khách hoặc đến một biểu tượng tùy chỉnh.",
		admin_icon_mapping_list_instructions: "Có thể tùy chỉnh biểu tượng hiển thị cho các kiểu MIME khác nhau lưu trên kho lưu trữ của bạn. Web khách dùng biểu tượng theo thứ tự được liệt kê. Nếu một kiểu MIME được liệt kê nhiều hơn một lần, biểu tượng đầu tiên liên quan đến kiểu MIME đó sẽ được dùng.",
		admin_icon_mapping_icon_label: "Bạn muốn dùng biểu tượng gì?",
		admin_icon_mapping_file_name: "Biểu tượng tùy chỉnh:",
		admin_icon_mapping_file_name_heading: "Biểu tượng tùy chỉnh",
		admin_icon_mapping_file_name_placeholder: "Ðịnh rõ URL của biểu tượng",
		admin_icon_mapping_file_name_hover: "Nhập URL của biểu tượng. Nếu biểu tượng nằm trên cùng máy chủ ứng dụng web như web khách, nhập URL liên quan. Ví dụ: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Biểu tượng xác định trước:",
		admin_icon_mapping_class_name_heading: "Biểu tượng xác định trước",
		admin_icon_mapping_class_name_hover: "Chọn biểu tượng được cung cấp với web khách.",
		admin_icon_mapping_class_name_placeholder: "Chọn biểu tượng",

		admin_p8_instructions: "Thông tin này được chia sẻ bởi tất cả kho lưu trữ FileNet Content Manager được cấu hình cho web khách.",
		admin_p8_collaboration_config: "Cấu hình Dịch vụ cộng tác FileNet tùy chọn",
		admin_p8_collaboration_config_instructions: "Có thể cấu hình các tham số này nếu muốn chỉnh Dịch vụ cộng tác FileNet cho môi trường IBM FileNet P8 của bạn.",
		admin_p8_use_url_incoming: "Dùng URL trên các yêu cầu đang đến để tạo các URL phản hồi:",
		admin_p8_use_url_incoming_hover: "Ở hầu hết các môi trường của Dịch vụ cộng tác FileNet, có thể dùng URL của yêu cầu đang đến để tạo URL trong một phản hồi. Chọn <b>Có</b> trừ khi áp dụng một trong những tình huống sau đây vào môi trường của bạn:<ul><li>Muốn buộc ứng dụng khách truy cập Dịch vụ cộng tác FileNet qua một URL cụ thể.<li>Cài đặt máy chủ proxy khiến Dịch vụ cộng tác FileNet cung cấp các URL không hợp lệ.</ul>",

		admin_p8_use_url_incoming_http: "URL của Dịch vụ cộng tác FileNet:",
		admin_p8_use_url_incoming_http_hover: "Ðịnh rõ URL mà có thể dùng ứng dụng khách nào để truy cập Dịch vụ cộng tác FileNet với dạng http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "URL của HTTPS Dịch vụ cộng tác FileNet:",
		admin_p8_use_url_incoming_https_hover: "Nếu Dịch vụ cộng tác FileNet được cấu hình để dùng SSL, định rõ URL HTTPS mà có thể dùng ứng dụng khách nào để truy cập Dịch vụ cộng tác FileNet với dạng https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Ẩn địa chỉ email người dùng trong phản hồi máy chủ:",
		admin_p8_hide_email_addresses_hover: "Có thể ẩn địa chỉ email người dùng trong phản hồi máy chủ nếu cần tuân thủ chính sách bảo mật. Ví dụ, có thể ẩn danh sách địa chỉ email người dùng khi máy chủ trả về danh sách tài liệu và thông tin về người dùng đã tạo hoặc sửa tài liệu.",

		admin_p8_mask_user_ids: "Che ID người dùng trong tập tin nhật ký:",
		admin_p8_mask_user_ids_hover: "Có thể ẩn tên người dùng trong tập tin nhật ký của Dịch vụ cộng tác FileNet nếu cần tuân thủ chính sách bảo mật. Khi bật tùy chọn này, tên người dùng được thay thế bằng giá trị băm. Ðiều này giúp bạn cung cấp tập tin nhật ký cho các công ty ngoài, như IBM, cho mục đích hỗ trợ mà không làm hại đến tên người dùng hoặc các bản ghi hoạt động.",

		admin_p8_soft_delete: "Di chuyển tập tin đã xóa vào thùng rác:",
		admin_p8_soft_delete_hover: "Khi người dùng xóa mục, di chuyển mục vào thùng rác hơn là xóa mục khỏi kho lưu trữ. Mục vẫn còn trong thùng rác đến khi được dọn dẹp. Cài đặt này sẽ bị bỏ qua nếu kho lưu trữ đích không hỗ trợ thùng rác.<br><br><b>Hạn chế:</b> Thùng rác được hỗ trợ trên IBM FileNet P8 Phiên bản 5.2 hoặc phiên bản mới hơn và yêu cầu add-on Mở rộng dựa trên cộng tác xã hội Social Collaboration Base Extensions.",

		admin_p8_download: "Cấu hình bộ nhớ đệm HTTP tải xuống nội dung",
		admin_p8_download_instructions: "Nếu kho lưu trữ IBM FileNet Content Manager của bạn chứa nhiều tập tin lớn, có thể cấu hình Bộ nhớ đệm HTTP tải xuống nội dung Content Download HTTP Cache (CDHC) để giúp Dịch vụ cộng tác FileNet đổi hướng các yêu cầu nội dung một cách an toàn cho các tập tin lớn đến máy chủ web dành riêng.<br/><br/>Tính năng này yêu cầu máy chủ HTTP IBM. Ngoài ra, phải cập nhật máy chủ HTTP IBM httpd.conf file.",
		admin_p8_download_cache: "Bộ nhớ đệm HTTP tải xuống nội dung:",
		admin_p8_download_cache_hover: "Xác định có muốn bật bộ nhớ đệm Content Download HTTP Cache (CDHC) cho tất cả kho lưu trữ IBM FileNet Content Manager trong môi trường của bạn hay không. Có thể xác định kích thước tối thiểu của tập tin mà các tập tin được nhớ đệm.",
		admin_p8_download_cache_folder: "Thư mục bộ nhớ đệm tuyệt đối:",
		admin_p8_download_cache_folder_hover: "Ðịnh rõ đường dẫn tuyệt đối của thư mục muốn lưu các tập tin đã nhớ đệm. Ðường dẫn có thể nằm trên bất kỳ hệ điều hành hoặc thiết bị nào, như thư mục mạng chia sẻ, miễn là có thể thấy ở dạng hệ thống tập tin ở Dịch vụ cộng tác FileNet và máy chủ IBM HTTP Server.",
		admin_p8_download_cache_url: "Biệt hiệu cho vị trí bộ nhớ đệm:",
		admin_p8_download_cache_url_hover: "Ðịnh rõ biệt hiệu dùng để chỉ vào thư mục bộ nhớ đệm từ URL của Dịch vụ cộng tác FileNet. Ðịnh rõ biệt hiệu có định dạng /biệt hiệu, ví dụ, /cdhc.<br/><br/>Khi /cdhc được bao gồm trong URL, ứng dụng được chuyển hướng đến thư mục bộ nhớ đệm tuyệt đối.",
		admin_p8_download_cache_max_files: "Số lượng tập tin nhớ đệm tối đa:",
		admin_p8_download_cache_max_files_hover: "Khi đạt số lượng tập tin tối đa, tập tin cũ nhất sẽ bị xóa khỏi bộ nhớ đệm.<br><br>Nếu định rõ số lượng tập tin tối đa để nhớ đệm và kích thước tối đa của bộ nhớ đệm, tập tin cũ nhất sẽ bị xóa khỏi bộ nhớ đệm khi đạt điều kiện nào có mức thấp hơn.",
		admin_p8_download_cache_max_size: "Kích thước tối đa của bộ nhớ đệm (tính theo GB):",
		admin_p8_download_cache_max_size_hover: "Khi đạt kích thước tối đa của bộ nhớ đệm, tập tin cũ nhất sẽ bị xóa khỏi bộ nhớ đệm.<br/><br/>Nếu định rõ số lượng tập tin tối đa để nhớ đệm và kích thước tối đa của bộ nhớ đệm, tập tin cũ nhất sẽ bị xóa khỏi bộ nhớ đệm khi đạt điều kiện nào có mức thấp hơn.",
		admin_p8_download_cache_cleanup_duration: "Thời gian hủy dữ liệu thừa tối đa (tính bằng giây):",
		admin_p8_download_cache_cleanup_duration_hover: "Ðịnh rõ thời lượng tối đa để có thể tiến hành thao tác hủy dữ liệu thừa. Thời gian mặc định là 5 giây.<br><br>Bất kỳ tập tin nào thuộc dạng được xóa nhưng vẫn còn lại trong bộ nhớ đệm sau khi hủy dữ liệu thừa sẽ được xóa trong lần hủy dữ liệu thừa sau.",
		admin_p8_download_cache_cleanup_min: "Khoảng thời gian tối thiểu giữa hai lần hủy dữ liệu thừa (tính bằng giây):",
		admin_p8_download_cache_cleanup_min_hover: "Ðịnh rõ thời lượng tối thiểu cần thiết giữa hai lần hủy dữ liệu thừa. Thời gian mặc định là 3.600 giây (1 giờ).<br><br>Thao tác hủy dữ liệu thừa bộ nhớ đệm chỉ diễn ra khi có một yêu cầu kích hoạt để tải xuống nội dung từ bộ nhớ đệm. Nếu yêu cầu này xuất hiện mỗi phút, thao tác hủy dữ liệu thừa sẽ diễn ra ở mỗi giờ. Tuy nhiên, nếu giữa hai yêu cầu tải xuống cách nhau ba giờ, thao tác hủy dữ liệu thừa sẽ không diễn ra cho đến khi nhận được yêu cầu tải xuống kế tiếp.",
		admin_p8_download_cache_min_lifetime: "Thời gian tối thiểu trong bộ nhớ đệm (tính bằng giây):",
		admin_p8_download_cache_min_lifetime_hover: "Ðịnh rõ thời lượng tối thiểu mà một tập tin được giữ trong bộ nhớ đệm trước khi bị xóa. Thời gian mặc định là 3.600 giây (1 giờ).<br><br>Không thể xóa tập tin cũ nhất trong bộ nhớ đệm cho đến khi tập tin đã ở trong bộ nhớ đệm trong thời lượng đã xác định, ngay cả khi bộ nhớ đệm đã đạt kích thước tối đa hoặc chứa số lượng tập tin tối đa.",
		admin_p8_download_cache_size_threshold: "Kích thước tối thiểu của tập tin để nhớ đệm (tính bằng KB):",
		admin_p8_download_cache_size_threshold_hover: "Ðịnh rõ kích thước tối thiểu mà CDHC sẽ dùng để nhớ đệm tập tin. Nếu một tập tin nhỏ hơn kích thước đã xác định, tập tin sẽ được chuyển hướng qua máy chủ ứng dụng web mà Dịch vụ cộng tác FileNet được triển khai trên đó. Kích thước mặc định là 1.000 KB.",
		admin_p8_download_guard_header: "Phần đầu HTTP để bảo vệ:",
		admin_p8_download_guard_header_hover: "Nếu ứng dụng khách không định tuyến yêu cầu qua máy chủ IBM HTTP Server, không thể tải xuống nội dung đã nhớ đệm. Có thể định rõ chỉ các yêu cầu đang đến có phần đầu HTTP cụ thể (được thêm vào yêu cầu từ máy chủ IBM HTTP Server) mới có thể truy cập nội dung đã nhớ đệm, tránh tình trạng không thể tải xuống.<br><br>Phần đầu HTTP được cấu hình trong máy chủ IBM HTTP Server và hiện diện trên tất cả yêu cầu đang đến được định tuyến qua máy chủ IBM HTTP Server. Nếu một yêu cầu không có phần đầu HTTP, nội dung sẽ được định tuyến qua máy chủ ứng dụng web thay vì máy chủ IBM HTTP server.",
		admin_p8_download_generate_config: "Tạo cấu hình",
		admin_p8_download_generate_config_label: "Cấu hình máy chủ IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Ðể cho cấu hình CHDC làm việc, phải cập nhật máy chủ IBM HTTP Server httpd.conf file. Nhấp Tạo cấu hình để tạo các tuyên bố cần thêm vào tập tin httpd.conf.",

		admin_logging_viewone_pro: "Ðăng nhập ViewONE Professional:",
		admin_logging_viewone_virtual: "Ðăng nhập ViewONE Virtual:",
		admin_logging_viewone_streamer: "Ðăng nhập mô-đun máy chủ tạo dòng tài liệu:",
		admin_logging_viewone_streamer_hover: "Chỉ có thể áp dụng tùy chọn đăng nhập mô-đun máy chủ tạo dòng tài liệu nếu đã bật tạo dòng cho tập tin PDF hoặc TIFF trong phần <b>Daeja ViewONE</b> của công cụ quản trị.",
		admin_logging_viewone_redaction: "Ðăng nhâp mô-đun máy chủ soạn thảo cố định:",
		admin_logging_viewone_redaction_hover: "Chỉ có thể áp dụng tùy chọn đăng nhập mô-đun máy chủ soạn thảo cố định nếu được quyền dùng mô-đun Soạn thảo của Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Chuyên nghiệp",
		admin_daeja_viewonepro_stream_pdf_documents: "Tạo dòng tập tin PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Nếu có các tài liệu PDF lớn trong kho lưu trữ, bạn có thể cho phép trình xem tạo dòng nội dung tài liệu, giúp người dùng có thể xem các tài liệu này nhanh hơn. Tuy nhiên, nếu tạo dòng không làm việc trong môi trường của bạn, bạn có thể tắt tạo dòng.",
		admin_daeja_viewonepro_stream_tiff_documents: "Tạo dòng tập tin TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Nếu có các tài liệu TIFF lớn trong kho lưu trữ, bạn có thể cho phép trình xem tạo dòng nội dung tài liệu, giúp người dùng có thể xem các tài liệu này nhanh hơn. Tuy nhiên, nếu tạo dòng không làm việc trong môi trường của bạn, bạn có thể tắt tạo dòng.",
		admin_daeja_viewonepro_show_file_buttons: "Nút tập tin",
		admin_daeja_viewonepro_show_file_menus: "Trình đơn tập tin",
		admin_daeja_viewonepro_enable_file_keys: "Phím tắt tập tin",
		admin_daeja_viewonepro_file_keys_hover_help: "Ðịnh rõ bạn có muốn người dùng sử dụng lối tắt bàn phím để làm việc với tập tin, mở hoặc lưu tập tin hay không. Ðể biết thêm thông tin về các phím tắt cụ thể, xem mô tả tham số FileKeys trong Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Nút in",
		admin_daeja_viewonepro_show_print_menus: "Trình đơn in",
		admin_daeja_viewonepro_enable_print_keys: "Phím tắt in",
		admin_daeja_viewonepro_print_keys_hover_help: "Ðịnh rõ bạn có muốn người dùng sử dụng lối tắt bàn phím để in tập tin, ví dụ, in trang hoặc in tài liệu hay không. Ðể biết thêm thông tin về các phím tắt cụ thể, xem mô tả tham số PrintKeys trong Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Nút hoán đổi",
		admin_daeja_viewonepro_annotation_tooltip: "Chú giải công cụ chú thích tùy chỉnh mặc định:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Nhập văn bản để hiển thị khi không có chú giải công cụ được định rõ cho chú thích tùy chỉnh. Văn bản có thể bao gồm token thay thế được. Ví dụ, &quot;&lt;trình tạo&gt; tạo chú thích này vào ngày &lt;createdateonly&gt;.&quot; Để biết thêm thông tin về thẻ xác thực thay thế, xem tham số customAnnotationsToolTip trong Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Sử dụng chú giải công cụ tùy chỉnh xác định trước",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Sử dụng chú giải công cụ tùy chỉnh xác định trước của hệ thống hiển thị trong hộp văn bản bên dưới",
		admin_daeja_viewonepro_help_url: "URL trợ giúp:",
		admin_daeja_viewonepro_help_url_hover_help: "Ðịnh rõ URL của trang web chứa tài liệu trợ giúp cho người xem. Nút trợ giúp trên thanh công cụ trình xem và thao tác trình đơn trợ giúp mở trang web. Nếu bạn không định rõ URL, nút trợ giúp và thao tác trình đơn không được hiển thị.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Ngữ cảnh tài nguyên đóng dấu ảnh:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Ðịnh tuyến nội dung không được hỗ trợ đến trình duyệt:",
		admin_daeja_viewonepro_route_docs_hover_help: "Người dùng có thể xem các tập tin hình ảnh không được hỗ trợ bằng cách định tuyến chúng tới trình duyệt để mở ứng dụng phù hợp cho xem tập tin. Ví dụ, để mở tài liệu Microsoft Word, trình duyệt sử dụng trình xem Microsoft Word.",
		admin_daeja_viewonepro_scale: "Tự động khớp ảnh:",
		admin_daeja_viewonepro_scale_best: "Khớp tốt nhất",
		admin_daeja_viewonepro_scale_ftow: "Khớp chiều rộng",
		admin_daeja_viewonepro_scale_ftoh: "Khớp chiều cao",
		admin_daeja_viewonepro_enable_hotkeys: "Cho phép phím tắt:",
		admin_daeja_viewonepro_show_features: "Hiển thị nút và trình đơn:",
		admin_daeja_custom_settings: "Cài đặt bổ sung:",
		admin_daeja_custom_settings_hover_help: "Bạn có thể bổ sung các tham số khác bằng cách định rõ giá trị và tên tham số. Ví dụ, bạn có thể định rõ &quot;thanh cuộn&quot; và &quot;đúng&quot; nếu muốn thanh cuộn được hiển thị khi hình ảnh được co giãn tới kích cỡ lớn hơn vùng hiển thị. Ðể biết thêm thông tin về các giá trị và tên tham số, xem Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",
		admin_daeja_virtual: "Ảo",
		admin_daeja_virtual_annotation_tooltip: "Chú giải công cụ chú thích tùy chỉnh mặc định:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Nhập văn bản để hiển thị khi không có chú giải công cụ được định rõ cho chú thích tùy chỉnh. Văn bản có thể bao gồm token thay thế được. Ví dụ, &quot;&lt;trình tạo&gt; tạo chú thích này vào ngày &lt;createdateonly&gt;.&quot; Để biết thêm thông tin về thẻ xác thực thay thế, xem tham số customAnnotationsToolTip trong Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Sử dụng chú giải công cụ tùy chỉnh xác định trước",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Sử dụng chú giải công cụ tùy chỉnh xác định trước của hệ thống hiển thị trong hộp văn bản bên dưới",
		admin_daeja_virtual_image_stamp_resource_context: "Ngữ cảnh tài nguyên đóng dấu ảnh:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Ðường dẫn tập tin cấp phép:",
		admin_daeja_virtual_license_path_hover_help:"Ðịnh rõ đường dẫn tuyệt đối của thư mục chứa tập tin cấp phép lic-server-virtual.v1 và lic-server.v1.",
		admin_default_license_path:"Sử dụng đường dẫn tập tin cấp phép mặc định",
		admin_license_path_specified:"Sử dụng đường dẫn tập tin cấp phép tùy chỉnh",

		admin_daeja_streamer: "Máy chủ",
		admin_daeja_streamer_cache_root: "Thư mục bộ nhớ đệm:",
		admin_daeja_streamer_cache_root_hover_help: "Ðịnh rõ đường dẫn tuyệt đối của thư mục mà bạn muốn lưu các tập tin đã nhớ đệm để truy cập nhanh hơn. Thư mục có thể nằm trên bất kỳ hệ điều hành hoặc thiết bị nào, như thư mục mạng, miễn là có thể thấy ở dạng hệ thống tập tin cho IBM Content Navigator và IBM HTTP Server.  Sử dụng thư mục cục bộ để nâng cao hiệu năng.",
		admin_daeja_streamer_settings: "Cài đặt bổ sung:",
		admin_daeja_streamer_settings_hover_help: "Bạn có thể bổ sung các tham số khác bằng cách định rõ giá trị và tên tham số. Ví dụ, bạn có thể định rõ “cookieAllowedDomainList”  và danh sách máy chủ host được tách bằng dấu phẩy.  Ðể biết thêm thông tin về các giá trị và tên tham số, xem Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",

		admin_daeja_redaction: "Soạn thảo cố định",
		admin_daeja_redaction_settings: "Cài đặt:",
		admin_daeja_redaction_settings_hover_help: "Bạn có thể bổ sung các tham số khác bằng cách định rõ giá trị và tên tham số. Ví dụ, bạn có thể định rõ “burnIncrementalAnnotations” và ”đúng”. Ðể biết thêm thông tin về các giá trị và tên tham số, xem Tài liệu tham khảo các tham số của IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Cài đặt mới",
		admin_daeja_setting_dialog_title_edit: "Chỉnh sửa cài đặt",
		admin_daeja_setting_dialog_hover_help: "Thêm các tham số khác bằng cách định rõ giá trị và tên tham số. Ví dụ, bạn có thể định rõ “thanh cuộn” và “đúng” nếu muốn thanh cuộn được hiển thị khi hình ảnh được co giãn tới kích cỡ lớn hơn vùng hiển thị.",
		admin_daeja_setting_dialog_field_hover_help: "Ðể biết thêm thông tin về các giá trị và tên tham số, xem Tài liệu tham khảo tham số của Daeja ViewONE.",

		admin_daeja_logging: "Ghi chép Daeja ViewONE",
		admin_daeja_logging_trace: "Bật đăng nhập theo dõi",
		admin_daeja_logging_trace_net: "Bật đăng nhập mạng",
		admin_daeja_logging_trace_annotations: "Bật đăng nhập chú thích",
		admin_daeja_logging_log_file: "Tập tin nhật ký:",
		admin_daeja_logging_instructions: "Có thể dùng đăng nhập để xử lý sự cố ở Daeja ViewONE Professional và Daeja ViewONE Virtual. Nếu biết sự cố xảy ra ở một tính năng cụ thể, có thể hướng đăng nhập đến tính năng đó.",

		admin_v1pro_logging_trace_hover: "Dùng cài đặt này để xử lý các vấn đề chung ở trình xem.<br><br>Thông tin đăng nhập được ghi trong bàn điều khiển Java trên máy khách. Có thể truy cập bàn điều khiển Java từ Bảng điều khiển (Windows) hoặc Tùy chọn hệ thống (Mac) cho hệ điều hành của bạn.",
		admin_v1pro_logging_trace_net_hover: "Dùng cài đặt này để xử lý các vấn đề sau:<ul><li>Vấn đề ở kết nối máy chủ của bạn</li><li>Vấn đề ở kiểu MIME</li><li>Vấn đề ở tập tin quá dài</li></ul>Ngoài ra, có thể dùng đăng nhập theo dõi mạng để xác định nơi xảy ra chậm trễ khi dùng Daeja ViewONE Professional.<br><br>Thông tin đăng nhập được ghi trong bàn điều khiển Java trên máy khách. Có thể truy cập bàn điều khiển Java từ Bảng điều khiển (Windows) hoặc Tùy chọn hệ thống (Mac) cho hệ điều hành của bạn.",
		admin_v1pro_logging_trace_annotations_hover: "Dùng cài đặt này để xử lý các vấn đề khi tạo, lưu hoặc tải chú thích.<br><br>Thông tin đăng nhập được ghi trong bàn điều khiển Java trên máy khách. Có thể truy cập bàn điều khiển Java từ Bảng điều khiển (Windows) hoặc Tùy chọn hệ thống (Mac) cho hệ điều hành của bạn.",

		admin_virtual_logging_trace_hover: "Dùng cài đặt này để xử lý các vấn đề chung ở trình xem.<br><br>Theo mặc định, thông tin đăng nhập được ghi trong tập tin virtual.log trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Dùng cài đặt này để xử lý các vấn đề sau:<ul><li>Vấn đề ở kết nối máy chủ của bạn</li><li>Vấn đề ở kiểu MIME</li><li>Vấn đề ở tập tin quá dài</li></ul>Ngoài ra, có thể dùng đăng nhập theo dõi mạng để xác định nơi xảy ra chậm trễ khi dùng Daeja ViewONE Virtual.<br><br>Theo mặc định, thông tin đăng nhập được ghi trong tập tin virtual.log trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Dùng cài đặt này để xử lý các vấn đề khi tạo, lưu hoặc tải chú thích.<br><br>Theo mặc định, thông tin đăng nhập được ghi trong tập tin virtual.log trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Nếu bạn bật ghi chép cho trình xem, bạn phải định rõ đường dẫn hoàn toàn hợp lệ và tên tập tin nhật ký mà bạn muốn lưu trữ thông tin ghi chép.  Bạn nên đặt tên tập tin nhật ký là virtual.log.",

		admin_streamer_logging_trace_hover: "Dùng cài đặt này để xử lý các vấn đề chung ở Mô-đun máy chủ tạo dòng tài liệu.<br><br>Theo mặc định, thông tin đăng nhập được ghi trong tập tin streamer.log, nằm trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Dùng cài đặt này để xử lý các vấn đề sau:<ul><li>Vấn đề ở kết nối máy chủ của bạn</li><li>Vấn đề ở kiểu MIME cụ thể</li><li>Vấn đề ở tập tin quá dài</li></ul>Ngoài ra, có thể dùng đăng nhập theo dõi mạng để xác định nơi xảy ra chậm trễ khi dùng Mô-đun máy chủ tạo dòng tài liệu.<br><br>Theo mặc định, thông tin đăng nhập được ghi trong tập tin streamer.log, nằm trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Nếu bạn bật ghi chép cho Mô-đun máy chủ tạo dòng tài liệu, bạn phải định rõ đường dẫn hoàn toàn hợp lệ và tên tập tin nhật ký mà bạn muốn lưu trữ thông tin ghi chép.  Bạn nên đặt tên tập tin nhật ký là streamer.log.",

		admin_redaction_logging_trace_hover: "Dùng cài đặt này để xử lý các vấn đề chung ở Mô-đun máy chủ soạn thảo cố định.<br><br>Theo  mặc định, thông tin đăng nhập được ghi trong tập tin redacttofile.log, nằm trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Dùng cài đặt này để xử lý các vấn đề sau:<ul><li>Vấn đề ở kết nối máy chủ của bạn</li><li>Vấn đề ở kiểu MIME cụ thể</li><li>Vấn đề ở tập tin quá dài</li></ul>Ngoài ra, có thể dùng đăng nhập theo dõi mạng để xác định nơi xảy ra chậm trễ khi dùng Mô-đun máy chủ soạn thảo cố định.<br><br>Theo  mặc định, thông tin đăng nhập được ghi trong tập tin redacttofile.log, nằm trong thư mục con config của thư mục cài đặt IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Nếu bạn bật ghi chép cho Mô-đun máy chủ biên tập cố định, bạn phải định rõ đường dẫn hoàn toàn hợp lệ và tên tập tin nhật ký mà bạn muốn lưu trữ thông tin ghi chép.  Bạn nên đặt tên tập tin nhật ký là redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Cấu hình các tính năng cho trình xem và dịch vụ.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Nếu dùng web khách để kết nối một hoặc nhiều kho lưu trữ Content Manager OnDemand, phải định rõ thông tin mà Bộ kích hoạt web OnDemand yêu cầu để thực hiện đúng chức năng. Thông tin này được chia sẻ bởi tất cả kho lưu trữ Content Manager OnDemand cấu hình cho web khách.",
		admin_ondemand_language: "Ngôn ngữ:",
		admin_ondemand_tempdir: "Thư mục tạm ODWEK:",
		admin_ondemand_tracegrp: "Theo dõi ODWEK",
		admin_ondemand_tracedir: "Thư mục theo dõi:",
		admin_ondemand_tracelevel: "Mức theo dõi:",
		admin_ondemand_tracelevel_0: "0 - Không ghi chép",
		admin_ondemand_tracelevel_1: "1 - Ghi chép thông báo lỗi",
		admin_ondemand_tracelevel_2: "2 - Ghi chép thông báo lỗi và cảnh báo",
		admin_ondemand_tracelevel_3: "3 - Ghi chép thông báo lỗi, cảnh báo và thông tin",
		admin_ondemand_tracelevel_4: "4 - Tất cả thông báo đều được lấy, bao gồm theo dõi chức năng",
		admin_ondemand_max_trace_filesize: "Kích thước tối đa tập tin theo dõi:",
		admin_ondemand_max_trace_filesize_unlimited: "Không giới hạn",
		admin_ondemand_max_trace_filesize_limited: "Giới hạn (Khuyến nghị)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Giá trị này nằm ngoài phạm vi. Giá trị phải là số nguyên từ 1 đến 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Thư mục cài đặt AFP2PDF:",
		admin_ondemand_language_hover: "Ðịnh rõ ngôn ngữ mà ODWEK sẽ trả thông báo về.",
		admin_ondemand_tempdir_hover: "Nhập thư mục trong đó Bộ kích hoạt web OnDemand lưu các tập tin tạm trong khi xử lý. Phải nhập đường dẫn tuyệt đối của thư mục đang tồn tại trên máy chủ ứng dụng web.",
		admin_ondemand_tracedir_hover: "Nhập thư mục muốn lưu tập tin theo dõi ODWEK arswww.trace. Phải nhập đường dẫn tuyệt đối của thư mục đang tồn tại trên máy chủ ứng dụng web.",
		admin_ondemand_tracelevel_hover: "Ðịnh rõ mức thông tin ghi chép được ghi vào tập tin arswww.trace. <b>Ghi chép thông báo lỗi</b> lấy được lượng thông tin ghi chép tối thiểu. <b>Tất cả thông báo đều được lấy, bao gồm theo dõi chức năng</b> lấy nhiều thông tin nhất.<br /><br />Không xác định <b>Tất cả thông báo đều được lấy, bao gồm theo dõi chức năng</b> trong môi trường sản xuất trừ khi được hướng dẫn phải thực hiện bởi IBM Software Support.",
		admin_ondemand_max_trace_filesize_hover: "Ðịnh rõ có muốn cho phép tập tin theo dõi ODWEK lớn đến kích thước không giới hạn hoặc muốn web khách tạo tập tin nhật ký mới khi tập tin nhật ký đạt đến một kích thước nào đó. Mặc định là cho phép tập tin nhật ký theo dõi lớn đến khi ứng dụng web bị ngừng trên máy chủ ứng dụng web.",
		admin_ondemand_max_trace_unlimited_hover: "Chọn tùy chọn này nếu muốn ghi thông tin theo dõi ODWEK được ghi vào một tập tin nhật ký. Nếu chọn tùy chọn này, có thể sẽ có một tập tin nhật ký quá lớn, không thể mở bằng trình xem tập tin chuẩn.",
		admin_ondemand_max_trace_limited_hover: "Chọn tùy chọn này nếu muốn ghi thông tin theo dõi ODWEK vào các tập tin nhật ký nhỏ hơn. Khi tập tin nhật ký đạt đến kích thước tối đa, nhật ký hiện tại sẽ được đặt lại tên để bao gồm ngày (arswww.trace.YYYYMMDD.HHMMSS) và một tập tin nhật ký mới sẽ được tạo.",
		admin_ondemand_afp2pdf_installdir_hover: "Nếu muốn dùng tiện ích chuyển đổi AFP2PDF Transform để chuyển tài liệu AFP thành tài liệu PDF để xem và in, định rõ thư mục trong đó có cài đặt tiện ích AFP2PDF Transform trên máy chủ ứng dụng web. Ví dụ: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Quản trị viên",
		admin_adminusers_heading_text_multi: "Phải định rõ người dùng nào có đặc quyền quản trị trong web khách. Chỉ quản trị viên mới có thể đăng nhập vào máy khách quản trị.<br /><br /><b>Quan trọng:</b> ID người dùng của quản trị viên IBM Content Navigator phải khớp:<ul><li>ID người dùng hiện có trên máy chủ ứng dụng web. ID người dùng không được là quản trị viên trên máy chủ ứng dụng web.</li><li>ID người dùng hiện có trên kho lưu trữ mặc định được cấu hình cho từng máy khách có bao gồm tính năng quản trị.</li></ul>",
		admin_adminusers_heading_text_single: "Phải định rõ người dùng nào có đặc quyền quản trị trong web khách. Chỉ quản trị viên mới có thể đăng nhập vào máy khách quản trị.<br /><br /><b>Quan trọng:</b> ID người dùng của quản trị viên IBM Content Navigator phải khớp ID người dùng hiện có trên máy chủ ứng dụng web. ID người dùng không được là quản trị viên trên máy chủ ứng dụng web.",
		admin_adminusers_newuser: "Quản trị viên mới:",
		admin_adminusers_add: "Thêm",
		admin_adminusers_remove: "Xóa",
		admin_adminusers_listheading: "Quản trị viên",
		admin_adminusers_nameInvalid: "Giá trị không thể trùng lặp.",

		admin_sync_server_instructions: "<b>Chỉ người dùng FileNet P8:</b> Nếu muốn bật dịch vụ đồng bộ cho một hoặc nhiều kho lưu trữ, bạn phải cấu hình máy khách web để sử dụng các dịch vụ đồng bộ. Cấu hình dịch vụ đồng bộ được chia sẻ bởi tất cả kho lưu trữ trong môi trường của bạn.",
		admin_settings_instructions: "Giá trị được xác định trên tab Cài đặt áp dụng cho tất cả máy khách trong cấu hình.",
		admin_autocomplete: "Tự động bung tên người dùng:",
		admin_autocomplete_hover: "Ðịnh rõ có muốn web khách lưu trữ tên người dùng trong cookie trình duyệt để cho phép trình duyệt tự động bung tên người dùng trong web khách trong khi đăng nhập.<br><br>Nếu bật tùy chọn này, tên người dùng của người dùng cuối đăng nhập vào web khách sẽ được lưu trong cookie trình duyệt và được tự động hiển thị trên trang Đăng nhập khi một người dùng mở web khách.<br><br>Phải tắt tùy chọn này nếu ứng dụng được truy cập từ máy trạm chia sẻ, hoặc nếu lo lắng về việc lưu tên người dùng trong cookie trình duyệt.<br /><br />Tùy chọn này không áp dụng cho các ứng dụng di động hoặc tùy chỉnh.",
		admin_autocomplete_enable: "Bật",
		admin_autocomplete_disable: "Tắt",
		admin_cultural_collation: "Dùng phân loại theo bản địa:",
		admin_cultural_collation_hover: "Nếu bật phân loại theo bản địa, phân loại sẽ được thực hiện trên máy chủ kho lưu trữ. Ðiều này có thể làm giảm hiệu suất của web khách.<br><br>Tắt phân loại theo bản địa có thể làm tăng hiệu suất của web khách.",
		admin_cultural_collation_enable: "Bật",
		admin_cultural_collation_disable: "Tắt",
		admin_base_ui_style: "Kiểu chủ đề",
		admin_base_ui_style_hover: "Ðịnh rõ kiểu chủ đề mặc định được dùng trong máy khách web. Kiểu này chỉ được dùng trên những máy khách sử dụng chủ đề <b>Mặc định</b> (được xác định trên tab <b>Dạng thể hiện</b> của cấu hình máy khách).<br/></br><b>Hạn chế:</b> Nếu cấu hình máy khách của bạn sử dụng các chủ đề tùy chỉnh, thì chủ đề tùy chỉnh sẽ dựa trên kiểu cổ điển, bất kể kiểu bạn chọn là gì.",
		admin_base_ui_style_classic: "Cổ điển",
		admin_access_control_access: "Truy cập giới hạn đến người dùng và nhóm cụ thể",
		admin_access_control_access_show: "Hiện dữ liệu kiểm soát truy cập",
		admin_access_control_access_enable: "Có",
		admin_access_control_access_disable: "Không",
		admin_mobile_access: "Cho phép truy cập từ ứng dụng di động",
		admin_mobile_access_hover: "Theo mặc định, người dùng có thể truy cập web khách từ ứng dụng iOS của IBM Content Navigator.<br /><br /><b>Quan trọng:</b> Nếu ngăn người dùng truy cập web khách từ ứng dụng iOS, người dùng vẫn có thể truy cập web khách từ trình duyệt web trên thiết bị di động của họ và từ bất kỳ ứng dụng tùy chỉnh nào được ghi bằng các API của IBM Content Navigator và hoạt động được trên các thiết bị di động.",
		admin_mobile_access_enable: "Có",
		admin_mobile_access_disable: "Không",
		admin_error: "Thông tin thông báo lỗi:",
		admin_error_custom: "Tìm kiếm nội dung hỗ trợ tùy chỉnh",
		admin_error_default: "Tìm kiếm nội dung IBM Support<BDO DIR='LTR'>(</BDO>mặc định<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Ðịnh rõ vị trí muốn hướng người dùng đến để biết thêm thông tin khi họ gặp một thông báo lỗi. Có thể hướng người dùng đến thông tin trên cổng hỗ trợ IBM Support Portal, hoặc có thể hướng người dùng đến một tài nguyên ngoài, như nhân viên hỗ trợ.",
		admin_error_URL: "Tiền tố URL:",
		admin_error_URL_hover: "Nhập URL của tài nguyên mà bạn muốn hướng người dùng đến khi họ gặp lỗi, như nhân viên hỗ trợ. Ví dụ: http://localhost:port_number. Web khách gắn kèm số thông báo đến URL.",
		admin_prompt_close_without_save: "Bạn có muốn đóng mà không lưu các thay đổi không?",
		admin_object_expiration_time: "Khoảng làm mới bộ nhớ đệm (tính bằng phút):",
		admin_object_expiration_time_hover: "Có thể tăng thời lượng mà các đối tượng cấu hình, như máy khách, được giữ trong bộ nhớ đệm để cải thiện hiệu suất của web khách. Thời gian mặc định là 10 phút. Thời gian tối đa là 1440 phút (1 ngày).<br /><br />Phải khởi động lại ứng dụng web để các thay đổi có tác dụng.<br /><br />Nếu IBM Content Navigator được triển khai trong một môi trường theo cụm cao, bất kỳ thay đổi nào ở đối tượng cấu hình cũng sẽ không được nhân bản thành các nút trong cụm cho đến khi bộ nhớ đệm được làm mới.",
		admin_temp_file_cleanup_interval: "Khoảng thời gian quét để dọn dẹp bộ nhớ đệm của trình xem (theo giờ):",
		admin_temp_file_cleanup_interval_hover: "Lên lịch tần suất quét thư mục tạm thời để tìm và xóa tập tin tạm thời đã hết hạn. Theo mặc định, thư mục tạm thời được quét mỗi sáu giờ. Bạn có thể chỉ định 6-48 giờ.",
		admin_temp_file_expiration_interval: "Hết hạn bộ nhớ đệm của trình xem (theo giờ):",
		admin_temp_file_expiration_interval_hover: "Xác định thời lượng duy trì những tập tin tạm thời liên quan đến hoạt động của trình xem trong bộ nhớ đệm của trình duyệt. Theo mặc định, những tập tin tạm thời này hết hạn sau 24 giờ. Bạn có thể chỉ định 12-48 giờ.",
		admin_encryption_key_hover: "Phím dùng cho chức năng cài mã của Trình điều hướng.",
		admin_encryption_key: "Phím cài mã:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Tạo nhãn hiệu",
		admin_mobile_branding_main_color: "Màu chính:",
		admin_mobile_branding_secondary_color: "Màu phụ:",
		admin_mobile_device_title: "Quản lý MaaS360",
		admin_mobile_device_enable_maas360: "Bật MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Bật hướng dẫn di động MaaS360 đến đây",
		admin_mobile_device_maas360_developer_id: "ID lập trình viên MaaS360:",
		admin_mobile_device_maas360_license_key: "Mã khóa giấy phép MaaS360:",
		admin_mobile_settings_title: "Cài đặt",
		admin_mobile_email_address_hover_help: "Ðịa chỉ email sẽ được dùng trong ứng dụng di động khi người dùng nhấp \"Gửi báo cáo lỗi.\"",
		admin_mobile_email_address: "Ðịa chỉ email:",
		admin_invalid_email_address_message: "Ðịa chỉ email đã nhập không có định dạng đúng. Hãy nhập địa chỉ đúng và thử lại.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Một số dữ liệu không hợp lệ.",
		admin_configuration_parameters: "Tham số cấu hình",
		admin_configuration_optional_features: "Tính năng tùy chọn",
		admin_configuration_optional_features_p8_instructions: "Chọn tính năng mà bạn muốn bật trên kho lưu trữ này.<p><b>Quan trọng:</b> Nếu bật tính năng cài đặt một add-on vào kho lưu trữ, bạn phải được kết nối đến kho lưu trữ ở dạng quản trị viên Công cụ nền tảng nội dung hoặc Công cụ nội dung.</p>",
		admin_configuration_optional_features_cm_instructions: "Chọn tính năng mà bạn muốn bật trên kho lưu trữ này.<p><b>Quan trọng:</b> Các tính năng này điều chỉnh mô hình dữ liệu trên kho lưu trữ của bạn. Ðể bật chúng, bạn phải được kết nối đến kho lưu trữ ở dạng quản trị viên máy chủ thư viện.</p>",
		admin_system_properties: "Thuộc tính hệ thống",
		admin_system_properties_for: "Thuộc tính hệ thống cho:",
		admin_available_properties: "Thuộc tính có sẵn",
		admin_displayed_properties: "Thuộc tính hiển thị",
		admin_selected_properties: "Thuộc tính đã chọn",
		admin_selected_filtered_properties: "Thuộc tính ẩn",
		admin_available_operators: "Toán tử hiển thị",
		admin_selected_filtered_operators: "Toán tử ẩn",
		admin_system_properties_shown: "Thuộc tính hiện",
		admin_system_properties_hidden: "Thuộc tính ẩn",
		admin_available_menu_items: "Thao tác có sẵn:",
		admin_selected_menu_items: "Thao tác đã chọn:",
		admin_menu_global: "Áp dụng khi không có mục nào được chọn:",
		admin_menu_multiple_document: "Áp dụng khi có nhiều mục được chọn:",
		admin_menu_privileges: "Ðặc quyền yêu cầu:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Kiểu kho lưu trữ:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Dấu tách",
		admin_browse: "Duyệt",
		admin_search: "Tìm kiếm",
		admin_collaboration: "Kết nối IBM Connections",
		admin_role_based_redaction: "Soạn thảo dựa trên vai trò",
		admin_connections_library_enabled: "Bật kết nối IBM Connections",
		admin_office_conf: "Sửa Tích hợp",
		admin_desktop_conf_label: "Cấu hình máy khách",
		admin_ms_office_conf_label: "Cấu hình Office",
		admin_workflows: "Luồng công việc",
		admin_file_types: "Kiểu tập tin",
		admin_file_type_contains_label: "Kiểu tập tin chứa",
		admin_name_propepty: "Tên",
		admin_cm_name_property_default: "Dùng tên mặc định",
		admin_cm_name_property_default_hover: "Theo mặc định, thuộc tính tên phân cấp ICM (ICM$NAME) được dùng làm tên mục, nếu thuộc tính được xác định cho mục.  Nếu không có sẵn thuộc tính tên phân cấp ICM (ICM$NAME), thuộc tính đầu tiên được đánh dấu là \"represents\" được dùng làm tên mục.",
		admin_cm_name_property: "Ðịnh rõ thuộc tính tên mục",
		admin_cm_name_property_hover: "Ðịnh rõ thuộc tính nào được dùng làm tên cho tài liệu và thư mục.",
		admin_name_property: "Thuộc tính tên:",
		admin_doc_name_property: "Thuộc tính tên tài liệu:",
		admin_doc_name_property_hover: "Ðịnh rõ thuộc tính nào được dùng làm tên tài liệu.",
		admin_folder_name_property: "Thuộc tính tên thư mục:",
		admin_folder_name_property_hover: "Ðịnh rõ thuộc tính nào được dùng làm tên thư mục.",
		admin_all_searches_label: "Số lượng tìm kiếm sẽ hiển thị:",
		admin_unlimited: "Không giới hạn",
		admin_limit: "Giới hạn đến",
		admin_repository: "Kho lưu trữ:",
		admin_application_space: "Vùng ứng dụng",
		admin_available_application_spaces: "Vùng ứng dụng có sẵn:",
		admin_selected_application_spaces: "Vùng ứng dụng đã chọn:",
		admin_label: "Nhãn",
		admin_repository_box_placeholder: "Chọn kho lưu trữ Box",
		admin_repository_placeholder: "Chọn kho lưu trữ",
		admin_search_match: "Khớp:",
		admin_search_match_all: "Khớp tất cả tiêu chí tìm kiếm",
		admin_search_match_any: "Khớp tiêu chí tìm kiếm bất kỳ",
		admin_search_match_hover: "Ðịnh rõ tùy chọn nào được chọn theo mặc định trong trình đơn <b>Tùy chọn thuộc tính</b>.",

		admin_repository_redactions_instructions: "Bạn có thể cấu hình soạn thảo dựa trên vai trò cho kho lưu trữ này.",
		admin_repository_redaction_policies_description: "Bạn có thể tạo và quản lý chính sách soạn thảo, liên kết lý do soạn thảo với người dùng và nhóm có thể đọc dữ liệu nhạy cảm và có thể hiệu chỉnh chú thích nhằm bảo vệ dữ liệu nhạy cảm đó khỏi việc truy cập.",
		admin_repository_redaction_roles_instruction: "Bạn có thể tạo vai trò soạn thảo để liên kết người dùng và nhóm xác định với khả năng đọc dữ liệu nhạy cảm hoặc khả năng hiệu chỉnh chú thích để bảo vệ dữ liệu nhạy cảm không bị truy cập. Vai trò soạn thảo phải được liên kết với lý do soạn thảo trong chính sách soạn thảo trước khi những người dùng và nhóm đó có thể đọc dữ liệu hoặc hiệu chỉnh chú thích.",
		admin_repository_redaction_reasons_instruction: "Bạn có thể cấu hình lý do soạn thảo cho kho lưu trữ của bạn.",
		admin_repository_redaction_policies: "Cấu hình chính sách soạn thảo",
		admin_repository_redaction_roles: "Cấu hình vai trò soạn thảo",
		admin_repository_redaction_reasons: "Cấu hình lý do soạn thảo",
		admin_repository_redaction_roles_type: "Kiểu",
		admin_repository_redaction_roles_type_hover: "Người chỉnh sửa có thể tạo, điều chỉnh, hoặc xóa kiểu soạn thảo theo vai trò cụ thể trong khi người xem có thể xem loại dữ liệu nhạy cảm cụ thể.",
		admin_repository_redaction_roles_type_editor: "Người chỉnh sửa",
		admin_repository_redaction_roles_type_viewer: "Trình xem",
		admin_repository_redaction_roles_membership: "Thành viên",
		admin_repository_redaction_roles_membership_hover: "Chọn người chỉnh sửa mà bạn muốn có vai trò này.",
		admin_repository_redaction_roles_user_group_hover: "Tìm kiếm người dùng và nhóm, hoặc chọn người chỉnh sửa mà bạn muốn có vai trò này.",
		admin_repository_redaction_roles_description: "Bạn có thể tạo và quản lý vai trò soạn thảo để liên kết người dùng và nhóm với khả năng đọc dữ liệu nhạy cảm và hiệu chỉnh chú thích để bảo vệ dữ liệu nhạy cảm không bị truy cập.",
		admin_repository_redaction_new: "Vai trò soạn thảo mới",
		admin_repository_redaction_role_avail_editors: "Người chỉnh sửa có sẵn",
		admin_repository_redaction_role_avail_users: "Người dùng có sẵn",
		admin_repository_redaction_role_avail_groups: "Nhóm có sẵn",
		admin_repository_redaction_role_selected_editors: "Người chỉnh sửa soạn thảo được chọn",
		admin_repository_redaction_role_selected_users_groups: "Người dùng và nhóm được chọn",
		admin_repository_redaction_role_add_editor: "Người chỉnh sửa mới...",
		admin_repository_redaction_role_access_type: "Truy cập",
		admin_repository_redaction_role_access_type_access: "Cho phép",
		admin_repository_redaction_role_access_type_no_access: "Từ chối",
		admin_repository_redaction_role_users: "Người dùng",
		admin_repository_redaction_role_groups: "Nhóm",
		admin_repository_redaction_role_editors: "Người chỉnh sửa",
		admin_delete_confirmation_redaction_roles: "Bạn có muốn xóa vai trò soạn thảo đã chọn không?",
		admin_repository_edit_redaction_role: "Vai trò soạn thảo: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Truy cập mặc định",
		// RBA
		desktop_user_group_acl: "Quản trị viên máy khách",
		desktop_user_group_remove: "Xóa",
		desktop_rba_membership: "Thành viên:",
		desktop_rba_membership_list_label: "Tên",
		admin_repository_redaction_policy_hover: "Cung cấp mô tả cho phép người dùng phân biệt chính sách này với các chính sách khác.",
		admin_repository_new_redaction_policy: "Chính sách soạn thảo mới",
		admin_repository_policy_name: "Tên chính sách",
		admin_repository_reason_redactions: "Lý do soạn thảo:",
		admin_repository_role_editors: "Người chỉnh sửa",
		admin_repository_role_viewers: "Người xem",
		admin_repository_redaction_policy_instruction: "Bạn có thể tạo chính sách soạn thảo để liên kết lý do soạn thảo đã chọn với cả người chỉnh sửa soạn thảo và người xem soạn thảo.",
		admin_repository_redaction_reasons_hover: "Lựa chọn một hoặc nhiều loại dữ liệu nhạy cảm mà bạn không muốn hầu hết người dùng có thể xem, ví dụ, thông tin nhận dạng cá nhân, bí mật thương mại, hoặc thông tin bảo mật hoặc độc quyền đối với công ty của bạn.",
		admin_repository_readaction_available_reasons: "Lý do có sẵn",
		admin_repository_readaction_selected_reasons: "Lý do đã chọn",
		admin_repository_readaction_new_reason: "Lý do mới...",
		admin_repository_redeaction_reasons: "Lý do soạn thảo:",
		admin_repository_readaction_editor_permmission: "Người chỉnh sửa soạn thảo:",
		admin_repository_redaction_editors_hover: "Chọn vai trò có thể tạo và điều chỉnh soạn thảo cho lý do đã chọn.",
		admin_repository_readaction_new_editor_role: "Vai trò người chỉnh sửa mới...",
		admin_repository_readaction_available_editors: "Vai trò người chỉnh sửa có sẵn",
		admin_repository_readaction_selected_editors: "Vai trò người chỉnh sửa đã chọn",
		admin_repository_readaction_viewer_permmission: "Người xem soạn thảo:",
		admin_repository_redaction_viewers_hover: "Chọn vai trò có thể xem dữ liệu nhạy cảm cho lý do đã chọn. Việc soạn thảo không được áp dụng cho người dùng và nhóm có các vai trò này.",
		admin_repository_readaction_new_viewer_role: "Vai trò người xem mới...",
		admin_repository_readaction_available_viewers: "Vai trò người xem có sẵn",
		admin_repository_readaction_selected_viewers: "Vai trò người xem đã chọn",
		admin_repository_reason_redactions_header: "Lý do soạn thảo",
		admin_delete_confirmation_redaction_policy: "Bạn có muốn xóa chính sách soạn thảo đã chọn không?",
		admin_role_type_repository: "Kho lưu trữ",
		admin_role_type_administrator: "Quản trị viên",
		admin_role_type_template: "Mẫu",
		admin_role_type_teamspace: "Vùng nhóm",
		admin_role_type_author: "Người chỉnh sửa",
		admin_role_type_user: "Trình xem",
		admin_collaboration_services_instructions: "Nếu có kết nối IBM Connections và một ứng dụng web của Dịch vụ cộng tác FileNet, bạn có thể cấu hình vùng nhóm cộng đồng và dòng hoạt động cho kho lưu trữ.",
		admin_collaboration_services: "Dịch vụ cộng tác FileNet:",
		admin_collaboration_community: "Cấu hình thư viện cộng đồng",
		admin_collaboration_community_instruction: "Có thể cấu hình một kho lưu trữ trong miền IBM FileNet P8 của bạn để lưu trữ các thư viện cộng đồng của kết nối IBM Connections (còn được gọi là vùng nhóm). Khi người dùng tạo một thư viện cộng đồng qua kết nối IBM Connections, thư viện này sẽ được lưu trên kho lưu trữ được gán làm kho lưu trữ thư viện cộng đồng.",
		admin_collaboration_community_teamspaces: "Dùng kho lưu trữ này cho các thư viện cộng đồng:",
		admin_collaboration_community_teamspaces_hover: "Chỉ có thể dùng một kho lưu trữ trong miền IBM FileNet P8 của bạn để lưu trữ các thư viện cộng đồng mới. Nếu kích hoạt kho lưu trữ này và đang có một kho lưu trữ khác tồn tại, kho lưu trữ đang tồn tại sẽ bị tắt. Tuy nhiên, bất kỳ thư viện đang tồn tại nào cũng vẫn còn trên kho lưu trữ hiện tại.",
		admin_collaboration_connections_anonymous: "Cho phép truy cập ẩn danh đến nội dung công cộng:",
		admin_collaboration_connections_anonymous_hover: "Nếu máy chủ IBM Connections chứa các cộng đồng công cộng hoặc trung gian, bạn có thể cấu hình dịch vụ cộng tác FileNet để cho phép người dùng duyệt và tải xuống nội dung từ các thư viện trong các cộng đồng đó mà không cần phải đăng nhập trước.<br><br>Người dùng truy cập ẩn danh đến thư viện cộng đồng sẽ không thể tạo, điều chỉnh hoặc xóa nội dung.<br><br><b>Lưu ý:</b> Bạn phải gán người dùng LDAP của IBM FileNet P8 là người dùng ẩn danh và cấu hình người dùng này bằng vai trò <b>Ẩn danh</b> trong Máy chủ ứng dụng WebSphere.",
		admin_collaboration_connections_url: "URL của kết nối IBM Connections:",
		admin_collaboration_connections_url_hover: "Ðịnh rõ URL đến máy chủ kết nối IBM Connections của bạn với định dạng http://IBMConnectionsServer:port_number.  Nếu IBM Connections được cấu hình để dùng máy chủ IBM HTTP Server, bạn có thể bỏ qua số cổng từ URL.<br><br>Người dùng IBM Connections phải có thể truy cập được URL vì đây là liên kết mà Dịch vụ cộng tác FileNet dùng để tạo các liên kết đến các trang đích của tài liệu trong IBM Connections.",
		admin_collaboration_connections_url_http_use: "Dùng URL của IBM Connections",
		admin_collaboration_connections_url_https_use: "Dùng URL HTTPS của IBM Connections",
		admin_collaboration_connections_url_specify: "Ðịnh rõ URL",
		admin_collaboration_connections_url_https: "URL HTTPS của IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Nếu IBM Connections được cấu hình để dùng SSL, định rõ URL HTTPS đến máy chủ IBM Connections của bạn với định dạng https://IBMConnectionsServer:port_number.  Nếu IBM Connections được cấu hình để dùng máy chủ IBM HTTP Server, bạn có thể bỏ qua số cổng từ URL.",

		admin_collaboration_connections_gadget_url: "URL của tiện ích IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL truy xuất IBM Connections:",
		admin_collaboration_connections_security: "Quản trị viên cộng đồng:",
		admin_collaboration_connections_security_hover: "Ðịnh rõ người dùng và nhóm có thể quản trị nội dung trong thư viện cộng đồng.<br><br>Quản trị viên chung có thể tạo, điều chỉnh, xóa và cung cấp truy cập đến thư viện cộng đồng và nội dung của thư viện cộng đồng. Khi định rõ một người dùng làm quản trị viên chung, người dùng này sẽ được cấp các đặc quyền ClbGlobalAdministrator trong kho lưu trữ.<br><br>Quản trị viên đánh giá chung có thể phê duyệt và từ chối nội dung đang chờ đánh giá để xuất bản trong thư viện cộng đồng. Khi định rõ một người dùng làm quản trị viên đánh giá chung, người dùng này sẽ được cấp các đặc quyền ClbGloablReviewAdministrator trong kho lưu trữ.",

		admin_collaboration_connections_admins: "Quản trị viên chung",
		admin_collaboration_connections_admins_review: "Quản trị viên đánh giá chung",
		admin_collaboration_connections_seedlist: "Lập chỉ mục nội dung thư viện cộng đồng:",
		admin_collaboration_connections_seedlist_hover: "Ðịnh rõ có muốn IBM Connections di chuyển chậm qua các thư mục cộng đồng trong kho lưu trữ này để tạo chỉ mục tìm kiếm hay không. Tạo một chỉ mục có thể gây ảnh hưởng đến hiệu suất của kho lưu trữ.<br><br>Nếu có cài đặt Mở rộng lập chỉ mục tìm kiếm cộng tác xã hội trên kho lưu trữ, tùy chọn này sẽ được mặc định kích hoạt. Nếu không cài đặt Mở rộng lập chỉ mục tìm kiếm cộng tác xã hội trên kho lưu trữ, add-on sẽ được cài đặt trên kho lưu trữ khi kích hoạt tùy chọn này",
		admin_collaboration_activity_stream: "Cấu hình sự kiện luồng hoạt động",
		admin_collaboration_activity_stream_label: "Ðẩy thông tin sự kiện đến IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Ðịnh rõ có muốn đẩy thông tin sự kiện, như tạo tài liệu, kiểm xuất, kiểm nhập, nhận xét, đánh dấu và chia sẻ, đến IBM Connections không.<br><br><b>Quan trọng:</b> Đẩy thông báo đến IBM Connections có thể gây ảnh hưởng đến hiệu suất của kho lưu trữ.",

		admin_collaboration_activity_stream_instruction: "Có thể cấu hình kho lưu trữ này để đẩy thông tin sự kiện, như nhận xét và phê duyệt tài liệu, đến IBM Connections. Sự kiện được hiển thị trên trang <b>Cập nhật gần đây</b> trong cộng đồng IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Bỏ qua thông tin sự kiện đối với người dùng và nhóm cụ thể:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Có thể bỏ qua các sự kiện do người dùng hoặc nhóm cụ thể tạo, như quản trị viên hoặc tài khoản hệ thống, để giảm số lượng thông báo mà người dùng thấy. Ví dụ, nếu đang chuyển nội dung, có thể bạn muốn chọn bỏ qua các sự kiện được tạo bởi tài khoản dùng để chuyển.",
		admin_collaboration_activity_stream_userid: "Tên người dùng IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Ðịnh rõ tài khoản hệ thống mà Công cụ nền tảng nội dung sẽ dùng để xác thực và gửi thông tin sự kiện đến IBM Connections. Người dùng phải ở vai trò <b>trustedExternalApplication</b> trong ứng dụng Vùng chứa tiện ích trong IBM Connections.<br><br><b>Mẹo:</b> Theo mặc định, quản trị viên IBM Connections có các đặc quyền phù hợp. Có thể dùng ID quản trị viên làm tên người dùng",
		admin_collaboration_activity_stream_password: "Mật khẩu người dùng IBM Connections:",

		admin_help_url: "URL trợ giúp người dùng cuối:",
		admin_help_url_hover: "<b>Ghi chú quan trọng:</b> IBM Knowledge Center Customer Installed sẽ không được cập nhật tính đến IBM Content Navigator Phiên bản 3.0.0. Liên hệ dịch vụ khách hàng để biết thêm thông tin về việc sử dụng trợ giúp tùy chỉnh.<br><br>Tính đến IBM Content Navigator Phiên bản 3.0.0, URL để trợ giúp người dùng cuối đã được chuyển đến IBM Knowledge Center. URL dành cho IBM Knowledge Center là: http://www.ibm.com/support/knowledgecenter.<br><br>Nếu bạn muốn tiếp tục sử dụng phiên bản trước của IBM Knowledge Center Customer Installed, hãy định rõ URL của thực thể IBM Knowledge Center Customer Installed được Công cụ Cấu hình và Triển khai của IBM Content Navigator triển khai. URL phải truy cập được vào máy khách. URL có định dạng http://server_name:port_number/kc.<br><br>Bạn có thể lấy tên máy chủ và số hiệu cổng từ tập tin console.log trong thư mục con KnowledgeCenter/logs của thư mục cài đặt IBM Content Navigator.",

		admin_help_default: "Sử dụng trợ giúp mặc định do IBM cung cấp",
		admin_custom_help: "Sử dụng hệ thống trợ giúp tùy chỉnh",
		admin_help_kc: "Sử dụng trợ giúp tùy chỉnh trong IBM Knowledge Center Khách hàng đã cài đặt",
		admin_help_kc_hover: "<b>Ghi chú quan trọng:</b> IBM Knowledge Center Customer Installed sẽ không được cập nhật tính đến IBM Content Navigator Phiên bản 3.0.0. Liên hệ dịch vụ khách hàng để biết thêm thông tin về việc sử dụng trợ giúp tùy chỉnh.<br><br>Nếu bạn muốn tiếp tục sử dụng phiên bản trước của IBM Knowledge Center Customer Installed, hãy chọn tùy chọn này để tiếp tục thêm nội dung vào thực thể IBM Knowledge Center Customer Installed mà bạn đã triển khai lúc trước.",
		admin_help_taxonomy: "Mã phân loại:",
		admin_help_taxonomy_hover: "Ðịnh rõ mã phân loại cho trợ giúp tùy chỉnh của bạn.<br><br>Mã phân loại cho IBM Content Navigator là SSEUEX. Nếu bạn muốn hiển thị trợ giúp dưới tên sản phẩm khác trong IBM Knowledge Center Khách hàng đã cài đặt, bạn phải thêm mã phân loại duy nhất vào tập tin KC_taxonomy.ditamap trong thư mục KnowledgeCenter/usr/taxonomy của thư mục cài đặt IBM Content Navigator.",
		admin_help_context: "Ngữ cảnh trợ giúp:",
		admin_help_context_hover: "Ðịnh rõ ngữ cảnh cho trợ giúp tùy chỉnh của bạn.<br><br>Trợ giúp cho IBM Content Navigator nằm trong thư mục KnowledgeCenter/usr/content/com.ibm.usingeuc.doc của thư mục cài đặt IBM Content Navigator. Ngữ cảnh của trợ giúp mặc định là com.ibm.usingeuc.doc. Nếu bạn muốn cung cấp trợ giúp tùy chỉnh, thêm nội dung vào thư mục con mới trong thư mục KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Trang đích:",
		admin_help_welcome_hover: "Ðịnh rõ tên chủ đề mà bạn muốn dùng làm trang đích khi người dùng truy cập trợ giúp. Bạn phải tạo các tập tin thuộc tính định rõ vị trí trang đích và thêm các tập tin thuộc tính vào thư mục KnowledgeCenter/usr/conf của thư mục cài đặt IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Tập tin JSON phần mở rộng kiểu MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Xác minh tên tập tin JSON và đường dẫn đầy đủ đến tập tin. Tập tin này có thể là tập tin chung từ hệ thống tập tin hoặc URL trỏ đến tập tin JSON.  <br><br>Nội dung tập tin JSON là mảng những định nghĩa kiểu MIME. <br><br>Một định nghĩa kiểu MIME bao gồm bốn khóa \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Hai khóa đầu tiên \"mimeTypes\", \"extensions\" là cần thiết, và chúng có thể là các mảng chuỗi được phân tách bằng \",\". Hai khóa cuối \"fileType\", \"iconName\" là tùy chọn. <br><br>Ví dụ: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Cấu hình Trình quản lý tác vụ",
		admin_taskmanager_service: "Dịch vụ Trình quản lý tác vụ:",
		admin_taskmanager_service_hover: "Ðịnh rõ bạn có muốn dùng dịch vụ trình quản lý tác vụ để tạo và chạy các tác vụ không đồng bộ không. <br><br>Nếu thay đổi cài đặt này, bạn phải khởi động lại ứng dụng web IBM Content Navigator để các thay đổi có hiệu lực.",
		admin_taskmanager_url: "URL dịch vụ trình quản lý tác vụ:",
		admin_taskmanager_url_hover: "Ðịnh rõ URL mà các ứng dụng khác có thể giao tiếp với dịch vụ trình quản lý tác vụ. URL có định dạng http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Thư mục nhật ký trình quản lý tác vụ:",
		admin_taskmanager_logdirectory_hover: "Theo mặc định, tập tin nhật ký của dịch vụ trình quản lý tác vụ được ghi trong cùng thư mục với tập tin nhật ký máy chủ ứng dụng. <br><br>Nếu muốn ghi thông tin đăng nhập vào một thư mục khác trên máy chủ IBM Content Navigator, định rõ đường dẫn tuyệt đối của thư mục muốn lưu tập tin nhật ký được tạo bởi thành phần trình quản lý tác vụ. <br><br>Nếu thay đổi cài đặt này, bạn phải khởi động lại ứng dụng web IBM Content Navigator để các thay đổi có hiệu lực.",
		admin_taskmanager_heartBeatMonitor: "Kiểm soát heartbeat nhóm",
		admin_taskmanager_heartBeatMonitor_hover: "Chỉ có khả năng sẵn sàng cao ở môi trường nhóm. Nếu bật tùy chọn này, dịch vụ trình quản lý tác vụ sẽ định tuyến các tác vụ từ nút đang ngừng đến các nút đang chạy. <br><br>Nếu thay đổi cài đặt này, bạn phải khởi động lại ứng dụng web IBM Content Navigator để các thay đổi có hiệu lực.",

		admin_syncserver_title: "Cấu hình Máy chủ đồng bộ",
		admin_syncserver_enable: "Dịch vụ đồng bộ:",
		admin_syncserver_enable_hover: "Ðịnh rõ xem bạn có muốn người dùng truy cập máy khách này có khả năng đồng bộ hóa các mục của họ trên máy trạm và thiết bị di động hay không.<br><br><b>Lưu ý:</b> Để sử dụng tính năng này bạn cũng phải hoàn tất các tác vụ sau:<ul><li>Ðịnh rõ <b>URL chung của dịch vụ đồng bộ</b> trong phần <b>Dịch vụ đồng bộ</b> của công cụ quản trị.</li><li>Thêm kho lưu trữ cho dịch vụ đồng bộ được bật vào máy khách này.</li></ul>Nếu bạn tắt tùy chọn này nhưng lại thêm kho lưu trữ cho dịch vụ đồng bộ được bật vào máy khách này, cài đặt trên kho lưu trữ sẽ được bỏ qua.",
		admin_mobileqr_enable: "Hiển thị mã IBM Navigator QR trên trang đăng nhập:",
		admin_mobileqr_enable_hover: "Bật tùy chọn này nếu bạn muốn hiển thị mã QR cho ứng dụng di động IBM Navigator trên trang đăng nhập máy khách web. <br><br>Khi người dùng quét mã QR, họ được đưa đến cửa hàng ứng dụng phù hợp với thiết bị của họ, tại đó họ có thể tải xuống ứng dụng di động IBM Navigator.",

		admin_streamlineservice_enable: "Dịch vụ sửa:",
		admin_streamlineservice_enable_hover: "Chỉ người dùng FileNet P8. Bật tùy chọn này nếu bạn muốn người dùng máy khách có thể dễ dàng thêm và sửa tài liệu từ các ứng dụng cục bộ trên máy trạm của họ. <br><br>Ðể sử dụng thiết lập này, bạn cũng phải: <ul><li>Bật dịch vụ sửa trên một hoặc nhiều kho lưu trữ kết hợp với máy khách này</li><li>Cài đặt máy khách Sửa IBM Content Navigator trên máy trạm của người dùng</li></ul>",

		admin_repository_general_instructions: "Phải kết nối với kho lưu trữ trước khi cấu hình tham số, thuộc tính hệ thống, thư mục, v.v...",
		admin_repository_system_instructions: "Ðịnh rõ thuộc tính hệ thống nào sẽ được hiển thị cho tài liệu và thư mục trên kho lưu trữ này.",

		admin_desktop_general_create_instructions: "Máy khách xác định người dùng có thể thấy và làm gì khi họ đăng nhập vào web khách. Sau khi tạo máy khách, bạn có thể gửi URL máy khách đến người dùng để họ có thể truy cập vào máy khách.",
		admin_desktop_admin_instructions: "Máy khách quản trị được cung cấp với web khách cho phép người dùng quản trị cài đặt web khách. Máy khách này truy cập đến tất cả kho lưu trữ được cấu hình cho web khách.",
		admin_desktop_repositories_instructions: "Ðịnh rõ kho lưu trữ nào muốn cho người dùng truy cập từ máy khách này. Phải cấu hình kho lưu trữ trước khi thêm vào máy khách.<br><br><b>Mẹo:</b> Có thể giới hạn kho lưu trữ nào có sẵn cho từng tính năng khi cấu hình bố cục máy khách.",
		admin_desktop_menus_instructions: "Ðịnh rõ trình đơn nào bạn muốn cho phép người dùng truy cập từ máy khách này. Trình đơn nêu rõ thao tác nào hiện có tùy vào thao tác được chọn trong giao diện.<br><br><b>Mẹo:</b> Có thể tùy chỉnh nội dung của trình đơn trong phần <b>Trình đơn</b> của công cụ quản trị hoặc có thể tạo kiểu trình đơn mới bằng cách tạo các plug-in.",

		admin_desktop_no_repositories: "Không có kho lưu trữ được cấu hình.",

		admin_desktop_id_hover: "ID máy khách được bao gồm trong URL web khách và định rõ máy khách nào sẽ được mở khi người dùng đăng nhập vào web khách. ID phải là duy nhất và không thể thay đổi sau khi lưu máy khách.<br><br>ID chỉ có thể chứa ký tự kiểu chữ và số và thuộc dạng có phân biệt chữ hoa và chữ thường.",
		admin_desktop_id_disabled_hover: "Không thể thay đổi ID máy khách. Nếu muốn dùng một ID khác, phải tạo một máy khách mới.",
		admin_desktop_name_hover: "Tên máy khách không thể chứa các ký tự sau đây: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Cấu hình của bạn chỉ có thể chứa một máy khách mặc định.",

		admin_repository_id_disabled_hover: "Không thể thay đổi ID kho lưu trữ. Nếu muốn dùng một ID khác, phải tạo một kết nối kho lưu trữ mới.",
		admin_printService_enable: "In bằng dịch vụ in ấn IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Nếu bạn chọn bật dịch vụ in ấn IBM Daeja ViewONE, thì tài liệu được chuyển đổi sang định dạng PDF và việc in ấn có thể được hoàn tất bằng trình duyệt web bất kỳ.<br><br>Nếu bạn chọn tắt dịch vụ in ấn IBM Daeja ViewONE, thì bạn chỉ có thể in tài liệu trong những trình duyệt web hỗ trợ Java applet.  Một số trình duyệt web không hỗ trợ Java applet, và do đó không hỗ trợ in ấn applet.<br><br>Xem tài liệu để biết những trình duyệt có hỗ trợ.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Thư mục Trang chủ người dùng",
		admin_file_tracking_doc_directory_my_documents: "Thư mục Tài liệu người dùng",
		admin_file_tracking_doc_directory_qp: "Ðường dẫn tuyệt đối",
		admin_file_tracking_section_tile: "Cấu hình dò tập tin",
		admin_file_tracking_home_path: "Ðường dẫn trang chủ",
		admin_file_tracking_my_documents: "Tài liệu của tôi",
		admin_file_tracking_exact_path: "Ðường dẫn tuyệt đối:",
		admin_file_tracking_qp: "Ðường dẫn tuyệt đối",
		admin_file_tracking_ev: "Biến môi trường",
		admin_file_tracking_ev_us: "Biến môi trường tùy chỉnh ",
		admin_file_tracking_del_local_copy: "Xóa bản sao nội bộ:",
		admin_file_tracking_yes: "Có",
		admin_file_tracking_no: "Không",
		admin_file_tracking_del_local_copy_rt_state_editable: "Cho phép người dùng ghi đè cài đặt này",
		admin_file_tracking_del_local_copy_rt_state1: "Có",
		admin_file_tracking_del_local_copy_rt_state2: "Không",
		admin_file_Tracking_label: "Theo dõi tập tin:",
		admin_file_Tracking_disable: "Tắt",
		admin_file_Tracking_enable: "Bật",
		admin_file_tracking_label_hover_help: "Theo dõi tập tin dùng một applet để kiểm xuất và tải xuống các tài liệu vào một thư mục cụ thể trên máy người dùng. Applet cũng cho phép IBM Content Navigator tìm tài liệu trên máy người dùng khi người dùng kiểm nhập tài liệu.",
		admin_file_tracking_doc_directory: "Vị trí lưu trữ:",
		admin_file_tracking_open_file: "Mở tập tin tự động",
		admin_file_Tracking_append_qualified_path: "Ðính kèm thư mục",
		admin_file_Tracking_append_qualified_path_hover_help: "Có thể đính kèm một thư mục vào phần cuối của biến môi trường nếu muốn lưu tài liệu trong một thư mục con cụ thể. <br/><br/>Ví dụ, có thể định rõ tài liệu được tải xuống một thư mục <i>EnterpriseDocuments</i> trong thư mục trang chủ người dùng.",
		admin_file_Tracking_append_ev: "Ðính kèm biến môi trường",
		admin_file_Tracking_append_ev_hover_help: "Có thể đính kèm biến môi trường nếu muốn lưu các tài liệu trong một thư mục động đã định, như thư mục người dùng.<br/><br/>Ví dụ, có thể định rõ tài liệu được lưu trữ trong một thư mục con <i>user_name</i> trên thư mục mạng chia sẻ. ",
		admin_file_tracking_doc_directory_hover_help: "Ðịnh rõ vị trí lưu tài liệu khi được kiểm xuất và tải xuống.<br/><br/> <b>Mẹo</b>: Nếu muốn lưu trữ tài liệu trong thư mục trang chủ của người dùng hoặc thư mục tài liệu mặc định, chọn <b>Biến môi trường</b>, gồm các biến xác định trước chỉ đến những vị trí này.",
		admin_file_tracking_qualified_path_hover_help: "Dùng cấu trúc thư mục phù hợp cho hệ điều hành Windows hoặc Mac của bạn để định rõ thư mục hoặc thư mục mạng mà bạn muốn lưu tài liệu vào. <ul><li>Ðối với Windows, thêm vào một chữ ổ đĩa trong đường dẫn, ví dụ như C:\\Enterprise Documents.</li><li>Ðối với thư mục mạng chia sẻ, nhập đường dẫn với định dạng \\\\servername\\directory</li></ul><br/><b>Quan trọng:</b> Để dùng tùy chọn này, cấu trúc thư mục mà bạn định rõ phải có thể được tạo trên tất cả máy trạm của khách trong môi trường của bạn.",
		admin_file_tracking_environment_variable_path_hover_help: "Dùng biến môi trường phù hợp cho hệ điều hành Windows hoặc Mac của bạn để định rõ thư mục hoặc thư mục mạng mà bạn muốn lưu tài liệu vào. <br/><br/>Tùy chọn <b>Thư mục Trang chủ người dùng</b> lưu trữ tài liệu trong thư mục sau:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>Tùy chọn <b>Thư mục Tài liệu người dùng</b> lưu trữ tài liệu trong thư mục sau:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Ðịnh rõ bản sao nội bộ có bị xóa khi người dùng thêm hoặc kiểm nhập tài liệu vào kho lưu trữ hay không.<br/><br/>Xóa bản sao nội bội cho phép:<br/><ul><li>Tăng cường sự tuân thủ với chính sách IT</li><li>Ðảm bảo người dùng đang làm việc với các phiên bản mới nhất của tài liệu</li></ul><br/><b>Hạn chế:</b> Cài đặt này không được dùng khi người dùng thêm tài liệu bằng cách kéo và thả tài liệu.<br/><br/>Ðối với IBM Content Navigator cho Microsoft Office, bạn phải chọn <b>Xóa tập tin nội bộ khi người dùng thêm hoặc kiểm nhập tài liệu hoặc hủy kiểm xuất</b> trong phần <b>Cấu hình Office</b> của máy khách.",
		admin_file_tracking_open_file_hover_help: "Cài đặt này ghi đè bất kỳ tùy chọn xử lý tài liệu nào được cấu hình trong trình duyệt web của người dùng. </br></br><b>Hạn chế:</b> Cài đặt này không được dùng bởi IBM Content Navigator cho Microsoft Office.",
		admin_file_tracking_over_write_file: "Ghi đè bản sao nội bộ:",
		admin_file_tracking_over_write_file_hover_help: "Ðịnh rõ có ghi đè bản sao nội bộ của một tài liệu hay không khi người dùng kiểm xuất tài liệu khỏi kho lưu trữ. <br/><br/>Ghi đè bản sao nội bộ cho phép:<br/><ul><li>Ðảm bảo người dùng đang làm việc với các phiên bản mới nhất của tài liệu</li><li>Tránh cho người dùng phải thấy lời nhắc khi đang có một bản sao nội bộ</li></ul> </br></br><b>Hạn chế:</b> Cài đặt này không được dùng bởi IBM Content Navigator cho Microsoft Office nếu chọn <b>Cho phép người dùng ghi đè cài đặt này</b>.",
		admin_file_tracking_over_write_file_state_editable: "Cho phép người dùng ghi đè cài đặt này",
		admin_file_tracking_inline_help: "Theo dõi tập tin sắp xếp hợp lý quy trình kiểm xuất và kiểm nhập tài liệu ở kho lưu trữ. Nó cũng cho phép quản lý cách lưu trữ tài liệu trên máy người dùng. <br/><br/>Ngoài ra, theo dõi tập tin cho phép tài liệu sẽ được theo dõi trong nhiều thành phần của IBM Content Navigator, như web khách và IBM Content Navigator cho Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Bạn phải bật xác thực Chuẩn hoặc xác thực Máy chủ trước khi kết nối với kho lưu trữ.",
		admin_box_use_oauth: "Kiểu xác thực:",
		admin_box_use_oauth_hover: "Chọn xác thực Chuẩn hoặc xác thực Máy chủ trong môi trường sản xuất khi bạn đang cung cấp truy cập đến tài liệu Box từ IBM Content Navigator. Định rõ các giá trị client_id và OAuth2 client_secret có liên quan đến triển khai này của IBM Content Navigator. Bạn có thể lấy những giá trị này từ Box sau khi tạo ứng dụng Box cho máy chủ IBM Content Navigator.<br/><br/>Chọn xác thực Lập trình viên trong môi trường phát triển. Lập trình viên có thể đăng nhập vào Box bằng tài khoản lập trình viên và tạo token lập trình viên có hiệu lực trong 60 phút. Các token lập trình viên cho phép lập trình viên đăng nhập vào Box với token lập trình viên là mật khẩu cho bất kỳ ID người dùng nào.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Miền con tài khoản doanh nghiệp Box:",
		admin_box_share: "ID kết nối trình quản lý tác vụ:",
		admin_box_share_hover: "Với Box sao chép hoặc Box chia sẻ, trình quản lý tác vụ dùng ID và mật khẩu của người dùng quản trị để chạy các tác vụ nền dùng để điều chỉnh kho lưu trữ.<br/><br/>Nhấp Đặt và đăng nhập vào Box bằng một tài khoản hợp lệ dành cho quản trị viên Box.<br/><br/>Nếu bạn cấu hình máy khách bằng cách chọn kho lưu trữ Box này làm kho lưu trữ các tập tin chia sẻ, bạn phải định rõ một người dùng quản trị Box có khả năng lưu trữ không giới hạn trong Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Mở tập tin tự động",
		file_tracking_runtime_overwrite_hover_help: "Nếu không chọn tùy chọn này và đang có một tài liệu có cùng tên trên hệ tống tập tin nội bộ, tài liệu sẽ được kiểm xuất nhưng không được tải xuống trừ khi thực hiện một trong các thao tác sau:<br/><ul><li> Tải tài liệu xuống thư mục con của thư mục mặc định. Nếu chọn thư mục con, vị trí của tài liệu có thể được theo dõi bởi ứng dụng web.</li><li>Ðặt lại tên tài liệu đang tải xuống. Ðặt lại tên tài liệu sẽ tránh xung đột tên tài liệu.</li></ul>",
		open_file: "Mở tập tin tự động",
		over_write_file: "Ghi đè bản sao nội bộ",
		checkout_and_download_file: "Kiểm xuất và tải xuống tài liệu",
		download_to_local_directory: "Tải xuống :",
		checkout_and_download_button_title: "Kiểm xuất và tải xuống",
		checkout_without_java_confirmation_dialog: "Không thể tải xuống và theo dõi tập tin bằng tính năng theo dõi tập tin.",
		browse_for_directory: "Duyệt",
		selected_documents: "Tài liệu đã chọn",

		checkout_without_java_confirmation_text: "Có thể xảy ra sự cố này do các nguyên nhân sau:<br/><ul><li>Không cài đặt Môi trường thời gian chạy Java (JRE) trên máy trạm của bạn.</li><li>Plug-in Java không được kích hoạt trong trình duyệt web của bạn.</li><li>Trình duyệt web của bạn không hỗ trợ Java.</li></ul><br/><br/>Ðể khắc phục sự cố này, thực hiện thao tác phù hợp:<br/><br/><ul><li>Nếu muốn tiếp tục tải tập tin xuống mà không kích hoạt theo dõi tập tin, nhấp OK.</li><li>Nếu muốn tải tập tin xuống có kích hoạt theo dõi tập tin, hủy tải xuống và chắc chắn rằng đã cài đặt JRE trên máy trạm và đã kích hoạt plug-in Java trong trình duyệt web của bạn.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Tài liệu được kiểm xuất và tải xuống nhưng không thể mở.",
		runtime_file_tracking_open_error_explanation: "Hệ điều hành được cài đặt trên máy trạm của bạn không hỗ trợ tập tin thuộc kiểu này.",
		runtime_file_tracking_open_error_userResponse: "Ðể khắc phục sự cố, thực hiện một trong các thao tác sau:<br/><br/><ul><li>Nếu cần làm việc với tài liệu, mở web khách từ một máy trạm khác có hệ điều hành khác.</li><li>Nếu chỉ cần xem tài liệu, nhấp chuột phải trong web khách và nhấp Mở.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Tài liệu được kiểm xuất nhưng không được tải xuống.",
		runtime_file_tracking_save_file_error_explanation: "Một tài liệu có cùng tên đang tồn tại trên hệ thống tập tin nội bộ của bạn nhưng đã không được ghi đè. ",
		runtime_file_tracking_save_file_error_userResponse: "Nếu muốn tải xuống tập tin từ kho lưu trữ, phải ghi đè bản sao nội bộ của tài liệu khi tải tài liệu xuống từ kho lưu trữ.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Tài liệu được kiểm xuất nhưng không thể tải xuống hoặc mở.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Một tài liệu có cùng tên đang tồn tại trên hệ thống tập tin nội bộ của bạn. Tuy nhiên, tập tin đã không bị ghi đè, điều này đã ngăn việc tải xuống hoặc mở tài liệu trên kho lưu trữ.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Nếu muốn tải xuống tập tin từ kho lưu trữ, phải ghi đè bản sao nội bộ của tài liệu khi tải tài liệu xuống từ kho lưu trữ.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Không thể tải xuống tài liệu.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Biến môi trường ${0}, được yêu cầu để theo dõi tập tin, không được xác định trên máy khách này.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Ðể khắc phục sự cố:<br/><br/><ul><li>Thêm biến môi trường ${0} vào biến môi trường của hệ điều hành.</li><li>Ðăng xuất web khách và đóng trình duyệt web của bạn. Sau đó, đăng nhập lại.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Không thể tải xuống và theo dõi tài liệu bằng applet theo dõi tập tin.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Thư mục ${0}, được yêu cầu để theo dõi tập tin, không được xác định và không thể tạo.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Ðể khắc phục sự cố này, thực hiện thao tác phù hợp:<br/><br/><ul><li>Nhấp vào Duyệt và chọn thư mục khác trên máy khách. Nếu chọn tùy chọn này, sẽ không theo dõi được tập tin.</li><li>Liên hệ quản trị viên hệ thống và yêu cầu xác định một thư mục khác để dò tập tin. Ví dụ, điều này có thể cần thiết nếu thư mục đã xác định là dành cho hệ điều hành Windows, nhưng bạn đang chạy hệ điều hành Mac. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Nếu truy cập máy khách này từ thiết bị có hệ điều hành khác, bạn có thể giảm khả năng xảy ra sự cố bằng cách thực hiện một trong những thao tác sau:<br/><br/><ul><li>Dùng biến môi trường để định rõ vị trí lưu trữ trên máy khách.</li><li>Tạo các máy khách khác cho người dùng của từng kiểu thiết bị. Ví dụ, tạo một máy khách cho người dùng có hệ điều hành Windows và một máy khách cho người dùng có hệ điều hành Mac.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Không thể xử lý yêu cầu của bạn.",
		runtime_file_tracking_generic_error_explanation: "Ðã xảy ra lỗi trong applet theo dõi tập tin.",
		runtime_file_tracking_generic_error_userResponse: "Liên hệ quản trị viên để được hỗ trợ.",
		runtime_file_tracking_generic_error_adminResponse: "Mở bàn điều khiển Java và thử gửi lại yêu cầu. Chi tiết lỗi được hiển thị trong bàn điều khiển Java.<br/><br/>Có thể truy cập bàn điều khiển Java từ Bảng điều khiển (Windows) hoặc Tùy chọn hệ thống (Macintosh) cho hệ điều hành của bạn.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Không thể xử lý yêu cầu của bạn",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Các tập tin sau đây đã được thêm vào kho lưu trữ nhưng không bị xóa khỏi hệ thống tập tin nội bộ của bạn: ${0}.Điều này thường xảy ra khi các tập tin đang mở hoặc đang được một ứng dụng khác sử dụng. Nếu cần, có thể xóa thủ công các tập tin này.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Không thể tải xuống tài liệu.",
		runtime_file_tracking_ioexception_error_explanation: "Không thể tải xuống tài liệu.",
		runtime_file_tracking_ioexception_userResponse: "Có thể bạn không có quyền phù hợp để ghi đối với thư mục sau: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Ðảm bảo bạn có quyền ghi đối với thư mục đã xác định. Nếu bạn không có quyền ghi đối với thư mục đã xác định, liên hệ quản trị viên hệ thống.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Không thể xử lý yêu cầu của bạn.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Lỗi này có thể xảy ra vì lý do sau đây:<br/><br/><ul><li>Bạn đang sử dụng Safari trên Mac OS và Java đang chạy trong chế độ an toàn.</li><li>Bạn không có quyền đọc/ghi cho thư mục được định rõ trong cấu hình theo dõi tập tin cho máy khách của bạn.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Bạn có thể tiếp tục sử dụng IBM Content Navigator mà không cần theo dõi tập tin, hoặc bạn có thể hoàn tất các bước sau đây để giải quyết vấn đề này:<br/><br/><ol><li>Bật chế độ không an toàn Java trong Safari.</li><li>Nếu được hỏi liệu bạn có tin trang web IBM Content Navigator không, nhấp <b>Tin</b> để tải trang này, rồi bật chế độ không an toàn Java trong Safari.</li></ol><br/><br/>Nếu Safari được cấu hình chính xác, hoàn tất các bước sau đây để giải quyết vấn đề này:<br/><br/><ol><li>Ðảm bảo bạn có quyền đọc/ghi cho thư mục được định rõ trong cấu hình theo dõi tập tin cho máy khách của bạn.</li><li>Nếu bạn không có quyền đọc/ghi trên thư mục này, điều chỉnh quyền trên thư mục này.</li><li>Nếu bạn không thể điều chỉnh quyền của bạn trên thư mục này, quản trị viên phải thay đổi thư mục được cấu hình để theo dõi tập tin hoặc cung cấp cho bạn quyền truy cập vào một máy khách có thư mục theo dõi tập tin khác được cấu hình.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Không thể xử lý yêu cầu của bạn.",
		runtime_file_tracking_java__notfound_error_explanation: "Lỗi sự cố này thường xả ra trong các tình huống sau:<br/><br/><ul><li>Java Runtime Environment (JRE) không hiện diện hoặc được kích hoạt trên trạm làm việc của bạn.</li><li>Phiên bản JRE trên máy trạm của bạn không tương thích với phiên bản IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Bạn có thể tiếp tục sử dụng IBM Content Navigator mà không cần theo dõi tập tin, hoặc bạn có thể hoàn tất các bước sau đây để giải quyết vấn đề với JRE:<br/><br/><ol><li>Ðảm bảo JRE đã được cài đặt trên máy trạm của bạn.</li><li>Ðảm bảo phiên bản JRE trên máy trạm của bạn tương thích với IBM Content Navigator. Danh sách các phiên bản hỗ trợ được liệt kê trong tài liệu <i>Điều kiện tiên quyết về phần cứng và phần mềm cho IBM Content Navigator</i> trên trang hỗ trợ phần mềm IBM Software Support.</li><li>Ðảm bảo JRE đã bật trên máy trạm của bạn.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Không thể xử lý yêu cầu của bạn.",
		runtime_file_tracking_security_error_explanation: "Bạn không có quyền đọc/ghi cho thư mục được định rõ trong cấu hình theo dõi tập tin cho máy khách của bạn.",
		runtime_file_tracking_security_error_userResponse: "Bạn có thể tiếp tục sử dụng IBM Content Navigator mà không cần theo dõi tập tin, hoặc bạn có thể phối hợp với quản trị viên hệ thống để hoàn tất các bước sau đây:<ol><li>Ðảm bảo bạn có quyền đọc/ghi cho thư mục được định rõ trong cấu hình theo dõi tập tin cho máy khách của bạn. </li><li>Nếu bạn không có quyền đọc/ghi trên thư mục này, điều chỉnh quyền trên thư mục này.</li><li>Nếu bạn không thể điều chỉnh quyền của bạn trên thư mục này, quản trị viên phải thay đổi thư mục được cấu hình để theo dõi tập tin hoặc cung cấp cho bạn quyền truy cập vào một máy khách có thư mục theo dõi tập tin khác được cấu hình.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Tài liệu sau đây đã được tải xuống: ${0}.",

		admin_file_tracking_inline_help: "Theo dõi tập tin sắp xếp hợp lý quy trình thêm tài liệu và kiểm xuất và kiểm nhập tài liệu ở kho lưu trữ. Tính năng này cũng giúp quản lý cách lưu trữ tài liệu trên máy người dùng.<br/><br/>Ngoài ra, theo dõi tập tin cho phép tài liệu sẽ được theo dõi trong nhiều thành phần của IBM Content Navigator, như web khách và IBM Content Navigator cho Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID trình đơn không thể bắt đằu bằng \"Default\".  \"Default\" là tiền tố dành riêng cho các ID trình đơn.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID chỉ có thể chứa ký tự kiểu chữ và số và thuộc dạng có phân biệt chữ hoa và chữ thường.",
		admin_repository_id_hover: "ID kho lưu trữ được gồm trong URL web khách, yêu thích và liên kết email để định rõ kho lưu trữ nào để đăng nhập vào. ID phải là duy nhất và không thể thay đổi sau khi lưu kho lưu trữ.<br><br>ID chỉ có thể chứa ký tự kiểu chữ và số và thuộc dạng có phân biệt chữ hoa và chữ thường.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Tên không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID máy khách không thể chứa khoảng trắng hoặc bất kỳ ký tự nào sau đây: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Tên máy khách không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Tên hiển thị không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Ðịnh rõ tên kho lưu trữ để hiển thị cho người dùng trong web khách.<br><br>Tên không thể chứa các ký tự sau đây: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Ðịnh rõ tên máy chủ hoặc địa chỉ IP của máy chủ Content Manager OnDemand muốn kết nối, ví dụ như server.id.com.",
		admin_server_p8_name_hover: "Ðịnh rõ URL của máy chủ Công cụ nội dung hoặc Công cụ nền tảng nội dung. URL có phân biệt chữ hoa và chữ thường và có định dạng như sau:<br><br><ul><li>Trên Máy chủ ứng dụng WebSphere, iiop://host_name:port_number/FileNet/Engine. Trên triển khai cơ bản, số cổng mặc định là 2809.</li><li>Trên máy chủ WebLogic, t3://host_name:port_number/FileNet/Engine. số cổng mặc định là 7001.</li></ul><br><br>Với các cấu hình sẵn sàng cao của Công cụ nội dung hoặc Công cụ nền tảng nội dung, dùng URL chuyển EJB sẵn sàng cao mà không có tiền tố cemp:. ",
		admin_server_p8_protocol_hover: "Xác định giao thức dùng để giao tiếp với Công cụ nội dung.",
		admin_server_cm_name_hover: "Ðịnh rõ tên danh mục nội bộ của cơ sở dữ liệu hoặc tên kết nối máy chủ thư viện của Trình quản lý nội dung. Tên này là giá trị được xác định cho biến ICMSERVER.",
		admin_repository_cmis_hover: "Ðịnh rõ ID của kho lưu trữ muốn kết nối.  ID của từng kho lưu trữ trong môi trường CMIS được liệt  kê trong tài liệu dịch vụ kết nối AtomPub.  <br/><br/><b>Mẹo:</b>Cũng có thể nhập dấu hoa thị (*) để kết nối kho lưu trữ đầu tiên hoặc chỉ với kho lưu trữ được xác định trong tài liệu dịch vụ kết nối Atompub.",
		admin_url_cmis_hover: "Ðịnh dạng URL khác nhau tùy theo nhà cung cấp dịch vụ. Xem tài liệu CMIS hoặc liên hệ quản trị viên máy chủ CMIS về URL.",
		admin_repcfg_cmis_status_columns_hover: "Ðịnh rõ trạng thái mục mà bạn muốn xem biểu tượng. Biểu tượng trạng thái được hiển thị bên cạnh tài liệu trong danh sách nội dung.",
		admin_port_hover: "Ðịnh rõ số cổng TCP/IP mà máy chủ Trình quản lý nội dung OnDemand nghe trên đó. Giá trị mặc định là 1445.",
		admin_unified_searches_hover: "Ðịnh rõ có muốn người dùng có thể lưu các tìm kiếm kho lưu trữ chéo trên kho lưu trữ này hay không.<br/><br/>Nếu không bật tùy chọn này, người dùng vẫn có thể tạo các tìm kiếm kho lưu trữ chéo chạy trên kho lưu trữ này. Có thể ngăn người dùng tạo tìm kiếm kho lưu trữ chéo tại cấp máy khách.<br/><br/>Nếu kích hoạt tìm kiếm kho lưu trữ chéo, IBM Content Navigator tạo mẫu dữ liệu tìm kiếm kho lưu trữ chéo trên kho lưu trữ.<br/><br/>Với IBM FileNet Content Manager, bạn phải kết nối kho lưu trữ ở dạng quản trị viên Công cụ nội dung trước khi kích hoạt tùy chọn này.",
		admin_unified_searches_cm_hover: "Ðịnh rõ có muốn người dùng có thể lưu các tìm kiếm kho lưu trữ chéo trên kho lưu trữ này hay không.<br/><br/>Nếu không bật tùy chọn này, người dùng vẫn có thể tạo các tìm kiếm kho lưu trữ chéo chạy trên kho lưu trữ này. Có thể ngăn người dùng tạo tìm kiếm kho lưu trữ chéo tại cấp máy khách.<br/><br/>Nếu kích hoạt tìm kiếm kho lưu trữ chéo, IBM Content Navigator tạo mẫu dữ liệu tìm kiếm kho lưu trữ chéo trên kho lưu trữ.",
		admin_max_results_hover: "Ðịnh rõ có giới hạn số lượng kết quả mà một tìm kiếm trả về hay không. Nếu không giới hạn số lượng kết quả tìm kiếm, bạn có thể gặp sự cố về hiệu suất nếu tìm kiếm trả về một số lượng lớn kết quả.",
		admin_timeout_hover: "Ðịnh rõ một tìm kiếm có thể chạy trên kho dữ liệu trong bao lâu, tính bằng giây. Nếu tìm kiếm không hoàn tất trong khoảng thời gian đã định, web khách sẽ hủy yêu cầu. Thời gian hết hạn tối đa được khuyến nghị là 60 giây.",
		admin_object_store_hover: "Ðịnh rõ kho đối tượng muốn kết nối với máy chủ Công cụ nội dung. Có thể thu được tên ký hiệu từ bàn điều khiển quản trị Công cụ nền tảng nội dung.",
		admin_object_store_display_name_hover: "Phải có tên hiển thị của kho đối tượng nếu muốn dùng luồng công việc IBM FileNet P8. Có thể lấy tên hiển thị kho đối tượng từ bàn điều khiển quản trị Công cụ nền tảng nội dung.",
		admin_all_searches_hover: "Ðịnh rõ có giới hạn số lượng tìm kiếm được hiển thị ở <b>Tất cả tìm kiếm</b> khi người dùng đang tìm kiếm trên kho lưu trữ. Nếu không giới hạn số lượng tìm kiếm, bạn có thể gặp sự cố về hiệu suất nếu kho lưu trữ gồm một số lượng lớn các tìm kiếm đã lưu.",

		admin_text_desktop: "Máy khách",
		admin_text_repository: "Kho lưu trữ",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Chủ đề",
		admin_text_menu: "Trình đơn",
		admin_text_reason_code: "Lý do soạn thảo",
		admin_text_redactions: "Soạn thảo",
		admin_text_viewer_mapping: "Ánh xạ trình xem",
		admin_text_mobile_feature: "Tính năng di động",
		admin_test_interface_text: "Văn bản giao diện",
		admin_text_interface_text_locale: "Văn bản giao diện bản địa hóa",
		admin_text_icon_status: "Biểu tượng trạng thái",
		admin_text_icon: "Biểu tượng",
		admin_text_file_type: "Kiểu tập tin",
		admin_text_viewer: "Trình xem",
		admin_text_desktop_access: "Truy cập máy khách",
		admin_text_mapped_properties_for_office: "Thuộc tính được ánh xạ cho Microsoft Office",
		admin_text_desktop_features: "Tính năng máy khách",
		admin_text_unknown: "Không biết",
		admin_folder_instruction: "Ðịnh rõ thuộc tính được hiển thị cho tài liệu và thư mục trong danh sách nội dung khi người dùng đang duyệt. Cũng có thể định rõ thứ tự hiển thị của thuộc tính .",
		admin_search_instruction: "Ðịnh rõ tùy chọn nào sẽ được chọn theo mặc định khi người dùng tạo một tìm kiếm.",
		admin_repository_office_conf_class_instruction: "Nếu có cài đặt IBM Content Navigator cho Microsoft Office trên máy khách trong môi trường, có thể định rõ cách xử lý các tài liệu khi thêm hoặc kiểm vào kho lưu trữ này.",
		admin_repository_office_conf_instruction: "Ánh xạ thuộc tính tài liệu Microsoft Office vào thuộc tính được xác định trên kho lưu trữ này.<br/><br/>Khi bật ánh xạ thuộc tính cho một máy khách liên quan đến kho lưu trữ này, thuộc tính được đặt trên tài liệu Microsoft Office được dùng để bung các thuộc tính trên kho lưu trữ khi người dùng thêm một tài liệu từ IBM Content Navigator cho Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Ánh xạ thuộc tính",
		admin_repository_office_conf_prop_mapping_title1: "Tích hợp MS Office",
		admin_office_conf_instruction: "Có thể kiểm soát cách IBM Content Navigator tích hợp với các ứng dụng Microsoft Office khi IBM Content Navigator cho Microsoft Office được cài đặt trên máy khách<br /><br /><b>Quan trọng:</b> Nếu chọn <b>Ánh xạ thuộc tính Office…</b>, cũng phải cấu hình ánh xạ thuộc tính cho từng kho lưu trữ có liên quan đến máy khách này. Có thể cấu hình ánh xạ thuộc tính trên tab <b>Thuộc tính Office</b> cho từng kho lưu trữ trong môi trường của bạn.",
		admin_desktop_workflows_instruction: "<b>Chỉ hệ thống IBM FileNet P8:</b> Định rõ vùng ứng dụng nào được hiển thị trên máy khách này. Thứ tự của các vùng ứng dụng đã chọn xác định thứ tự mà các vùng ứng dụng được hiển thị trong web khách.<br><br><b>Mẹo:</b> Có thể thay đổi tên hiển thị của vùng ứng dụng bằng cách định rõ tên mới trong phần <b>Nhãn</b> của công cụ quản trị.",
		admin_search_filtered_properties_instruction: "Ðịnh rõ thuộc tính mà người dùng có thể tìm kiếm trên đó. Có thể ẩn bất kỳ thuộc tính nào mà bạn không muốn người dùng tìm kiếm trên đó.",
		admin_search_filtered_operators_instruction: "Ðịnh rõ toán tử có sẵn khi người dùng đang tìm kiếm trên một kiểu dữ liệu cụ thể, như ngày hoặc số nguyên. Có thể ẩn bất kỳ toán tử nào mà bạn không muốn người dùng chọn.",
		admin_search_default_search_results_instruction: "Ðịnh rõ thuộc tính được hiển thị cho tài liệu và thư mục trong kết quả tìm kiếm. Có thể ẩn bất kỳ thuộc tính nào mà bạn không muốn xuất hiện trong kết quả tìm kiếm.",
		admin_search_default_search_results_p8_cmis_instruction: "Ðịnh rõ thuộc tính được hiển thị cho tài liệu trong kết quả tìm kiếm. Có thể ẩn bất kỳ thuộc tính nào mà bạn không muốn xuất hiện trong kết quả.",

		admin_datetimeOp: "Ngày giờ",
		admin_floatOp: "Số thực dấu chấm động",
		admin_integerOp: "Số nguyên",
		admin_stringOp: "Chuỗi",
		admin_binaryOp: "Nhị phân",
		admin_objectOp: "Ðối tượng",
		admin_idOp: "ID",
		admin_userOp: "Người dùng",
		admin_booleanOp: "Kiểu Boolean",

		admin_string: "Chuỗi",
		admin_long: "Dài",
		admin_date: "Ngày",
		admin_double: "Kép",
		admin_object: "Ðối tượng",
		admin_guid: "GUID",
		admin_boolean: "Kiểu Boolean",

		admin_repcfg_heading: "Có thể ghi đè kiểu chạy mặc định của kho lưu trữ này bằng cách cài đặt các tham số cấu hình.",
		admin_repcfg_heading_od: "Có thể ghi đè kiểu chạy mặc định của kho lưu trữ này bằng cách cài đặt các tham số cấu hình.<br /><br /><b>Quan trọng:</b> Để dùng web khách với Content Manager OnDemand, cũng phải định rõ giá trị cho các tham số bao gồm trên tab <b>Content Manager OnDemand</b> ở <b>Cài đặt</b>, áp dụng cho tất cả kho lưu trữ Content Manager OnDemand mà đang bạn kết nối.",
		admin_repcfg_teamspaces: "Quản lý vùng nhóm:",
		admin_repcfg_enable: "Bật",
		admin_repcfg_disable: "Tắt",

		admin_repcfg_deliver_redacted_pdf_files_as: "Tập tin PDF đã soạn thảo sẽ được bàn giao dưới dạng:",
		admin_repcfg_burn_pdf_to_pdf: "Tập tin PDF",
		admin_repcfg_burn_pdf_to_tiff: "Tập tin TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Tập tin PDF được soạn thảo bằng cách áp dụng soạn thảo dựa trên vai trò có thể được bàn giao cho máy khách ở định dạng khác. Khi định dạng tập tin thay đổi, thì phần mở rộng tập tin và kiểu MIME cũng thay đổi.<br><br>Ví dụ, khi tập tin PDF được bàn giao dưới dạng tập tin TIFF, thì phần mở rộng tập tin được đổi thành .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Cho phép người dùng kết hợp và chia tách trang có soạn thảo theo vai trò",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Chọn tùy chọn này để cho phép người dùng kết hợp và chia tách trang có soạn thảo theo vai trò. Người dùng nào không phải là người chỉnh sửa soạn thảo thì sẽ không thể hiệu chỉnh soạn thảo theo vai trò và không được trao quyền truy cập dữ liệu nhạy cảm liên kết với soạn thảo theo vai trò đó ngay cả khi tùy chọn này được bật.",
		admin_repcfg_modify_teamspace_roles: "Cho phép chủ sở hữu điều chỉnh vai trò của vùng nhóm đang tồn tại",
		admin_repcfg_tm_delete_teamspace: "Giúp chủ sở hữu xóa vùng nhóm, kể cả nội dung",
		admin_repcfg_tm_delete_teamspace_id_missing: "Phải định rõ tên người dùng của quản trị viên kho lưu trữ.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Phải định rõ mật khẩu của quản trị viên kho lưu trữ.",
		admin_repcfg_teamspace_display_Recent: "Chỉ hiện các vùng nhóm được điều chỉnh gần đây ",
		admin_repcfg_teamspace_display_Recent_value: "Ngày kể từ lần điều chỉnh cuối:",

		admin_repcfg_folder_selector: "Thư mục gốc:",
		admin_repcfg_enable_folder_selector: "Bật",
		admin_repcfg_disable_folder_selector: "Tắt",
		admin_repcfg_SSO: "Ðăng nhập đơn:",
		admin_repcfg_teamspace_template_permission_text: "Gán người tạo mẫu vùng nhóm:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Ðịnh rõ nhóm hoặc người dùng có thể tạo mẫu vùng nhóm. Người dùng và nhóm được cấp cài đặt bảo mật phù hợp trên lớp và thư mục yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Tìm hiểu thêm/a><br/><br/><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý vùng nhóm.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Ðịnh rõ nhóm hoặc người dùng có thể tạo mẫu vùng nhóm. Người dùng được thêm các ACL phù hợp và được cấp các đặc quyền yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Tìm hiểu thêm</a><br/><br/><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý vùng nhóm.",
		admin_repcfg_teamspace_permission_text: "Gán vai trò vùng nhóm:",
		admin_repcfg_teamspace_permission_hover_p8: "Ðịnh rõ nhóm hoặc người dùng có thể tạo vùng nhóm và dùng vùng nhóm. Người dùng được cấp cài đặt bảo mật phù hợp trên lớp và thư mục yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Tìm hiểu thêm/a><br/><br/><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý vùng nhóm.",
		admin_repcfg_teamspace_permission_hover_cm: "Ðịnh rõ nhóm hoặc người dùng có thể tạo vùng nhóm và dùng vùng nhóm. Người dùng được thêm các ACL phù hợp và được cấp các đặc quyền yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Tìm hiểu thêm</a><br/><br/><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý vùng nhóm.",
		admin_repcfg_entry_template_permission_text: "Gán vai trò mẫu nhập:",
		admin_repcfg_entry_template_permission_hover_p8: "Ðịnh rõ nhóm hoặc người dùng có thể tạo mẫu nhập và dùng mẫu nhập. Người dùng được cấp cài đặt bảo mật phù hợp trên lớp tài liệu mẫu nhập. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Tìm hiểu thêm</a><br/><br/><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý mẫu nhập.",
		admin_repcfg_entry_template_permission_hover_cm: "Ðịnh rõ nhóm hoặc người dùng có thể tạo mẫu nhập và dùng mẫu nhập. Người dùng được thêm các ACL phù hợp và được cấp các đặc quyền yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Tìm hiểu thêm</a><br /><br /><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý mẫu nhập.",
		admin_repcfg_office_template_permission_text: "Gán vai trò mẫu:",
		admin_repcfg_office_template_permission_hover_cm: "Ðịnh rõ nhóm hoặc người dùng có thể tạo, sửa, và sử dụng mẫu Microsoft Office Online hoặc Dịch vụ Sửa. Người dùng được thêm các ACL phù hợp và được cấp các đặc quyền yêu cầu.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a><br /><br /><b>Khuyến nghị:</b> Sử dụng nhóm để đơn giản hóa việc quản lý mẫu Microsoft Office Online hoặc Dịch vụ Sửa.",
		admin_repcfg_draft_permission_text: "Gán vai trò đối với bản thảo:",
		admin_repcfg_draft_permission_hover_cm: "Ðịnh rõ nhóm hoặc người dùng có thể tạo bản thảo tài liệu Microsoft Office Online hoặc Dịch vụ Sửa trong khi cộng tác sửa. Bất kỳ người dùng nào cần cộng tác sửa tài liệu trong Microsoft Office Online hoặc Dịch vụ Sửa đều phải có đặc quyền phù hợp để tạo bản thảo. Người dùng được thêm các ACL phù hợp và được cấp các đặc quyền yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a><br /><br /><b>Khuyến nghị:</b> Sử dụng nhóm để đơn giản hóa việc quản lý bản thảo.",
		admin_repcfg_search_permission_text: "Gán vai trò tìm kiếm:",
		admin_repcfg_search_permission_hover_p8: "Ðịnh rõ nhóm hoặc người dùng có thể tạo hoặc dùng tìm kiếm đã lưu hoặc tìm kiếm kho lưu trữ chéo. Người dùng được cấp cài đặt bảo mật phù hợp trên lớp yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Tìm hiểu thêm</a><br /><br /><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý tìm kiếm.",
		admin_repcfg_search_permission_hover_cm: "Ðịnh rõ nhóm hoặc người dùng có thể tạo, sửa hoặc dùng tìm kiếm đã lưu hoặc tìm kiếm kho lưu trữ chéo. Người dùng được thêm các ACL phù hợp và được cấp các đặc quyền yêu cầu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Tìm hiểu thêm</a><br /><br /><b>Khuyến nghị:</b> Dùng nhóm để đơn giản hóa việc quản lý tìm kiếm.",
		admin_repcfg_search_permission_title: "Vai trò tìm kiếm",
		admin_repcfg_search_permission_intro_text: "Ðảm bảo người dùng truy cập vào máy khách có hỗ trợ vai trò của họ. Ví dụ, đảm bảo người tạo tìm kiếm truy cập và một máy khách cho phép họ tạo tìm kiếm và tìm kiếm kho lưu trữ chéo.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Quản trị viên mẫu vùng nhóm là người dùng có quyền <b>Kiểm soát toàn bộ</b> trên kho lưu trữ (kho đối tượng). Bạn không thể thay đổi danh sách quản trị viên mẫu vùng nhóm từ công cụ quản trị. <p>Quản trị viên mẫu vùng nhóm có thể xóa hoặc điều chỉnh mẫu vùng nhóm bất kỳ. Người dùng tạo mẫu vùng nhóm không cần thiết phải chia sẻ mẫu với quản trị viên mẫu vùng nhóm.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo mẫu vùng nhóm, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để tạo mẫu vùng nhóm. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Tìm hiểu thêm/a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Người dùng và nhóm được gán quyền ngoài các quyền đi kèm với Quản trị viên và Người tạo.<p>Bạn có thể di chuyển người dùng và nhóm này đến vai trò người tạo mẫu vùng nhóm bằng cách loại bỏ họ khỏi vai trò Khác rồi gán họ làm người tạo mẫu vùng nhóm.<p>Bạn có thể xem lại quyền mà người dùng và nhóm này hiện đang được cho phép bằng cách sử dụng IBM Administration Console dành cho Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Quản trị viên vùng nhóm là người dùng có quyền <b>Kiểm soát toàn bộ</b> trên kho lưu trữ (kho đối tượng). Bạn không thể thay đổi danh sách quản trị viên vùng nhóm từ công cụ quản trị.<p>Quản trị viên vùng nhóm có thể xóa hoặc điều chỉnh vùng nhóm bất kỳ. Người dùng tạo vùng nhóm không cần thiết phải chia sẻ vùng nhóm với quản trị viên vùng nhóm.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo vùng nhóm, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để tạo vùng nhóm. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Tìm hiểu thêm/a>",
		admin_repcfg_teamspace_user_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo vùng nhóm, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để tạo vùng nhóm Người dùng tạo vùng nhóm không cần thiết phải chia sẻ vùng nhóm với quản trị viên vùng nhóm <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Tìm hiểu thêm/a><p><b>Mẹo:</b> Nếu muốn tất cả người dùng trong môi trường có thể xem vùng nhóm, bạn có thể thêm tài khoản giả #NGƯỜI DÙNG ĐÃ XÁC THỰC vào vai trò người dùng vùng nhóm.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Người dùng và nhóm được gán quyền ngoài các quyền đi kèm với Quản trị viên, Người tạo, và Người dùng.<p>Bạn có thể di chuyển người dùng và nhóm này đến vai trò định trước bằng cách loại bỏ họ khỏi vai trò Khác rồi gán vai trò vùng nhóm cho họ.<p>Bạn có thể xem lại quyền mà người dùng và nhóm này hiện đang được cho phép bằng cách sử dụng IBM Administration Console dành cho Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Quản trị viên vùng nhóm là người dùng có quyền <b>Kiểm soát toàn bộ</b> trên kho lưu trữ (kho đối tượng). Bạn không thể thay đổi danh sách quản trị viên mẫu nhập từ công cụ quản trị. <p>Quản trị viên mẫu nhập có thể xóa hoặc điều chỉnh mẫu nhập bất kỳ. Người dùng tạo mẫu nhập không cần thiết phải chia sẻ mẫu nhập với quản trị viên mẫu nhập.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo mẫu nhập, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để tạo mẫu nhập. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_entry_template_user_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người dùng mẫu nhập, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để dùng mẫu nhập. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Tìm hiểu thêm</a><p><b>Mẹo:</b> Nếu muốn tất cả người dùng trong môi trường có thể dùng mẫu nhập, bạn có thể thêm tài khoản giả #NGƯỜI DÙNG ĐÃ XÁC THỰC vào vai trò người dùng mẫu nhập.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Người dùng và nhóm được gán quyền ngoài các quyền đi kèm với Quản trị viên, Người tạo, và Người dùng.<p>Bạn có thể di chuyển người dùng và nhóm này đến vai trò định trước bằng cách loại bỏ họ khỏi vai trò Khác rồi gán vai trò mẫu nhập liệu cho họ.<p>Bạn có thể xem lại quyền mà người dùng và nhóm này hiện đang được cho phép bằng cách sử dụng IBM Administration Console dành cho Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo mẫu vùng nhóm, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để tạo mẫu vùng nhóm trên kho lưu trữ. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo vùng nhóm, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để tạo vùng nhóm trên kho lưu trữ. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_teamspace_user_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người dùng vùng nhóm, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để dùng vùng nhóm trên kho lưu trữ. Người dùng tạo vùng nhóm không cần thiết phải chia sẻ vùng nhóm với quản trị viên vùng nhóm <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo mẫu nhập, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để tạo mẫu nhập trên kho lưu trữ. <br/><br/>Tuy nhiên, cài đặt bảo mật cho một mẫu nhập cụ thể sẽ xác định đặc quyền người dùng hoặc nhóm có trên mẫu nhập. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người chỉnh sửa mẫu nhập, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để điều chỉnh mẫu nhập trên kho lưu trữ. <br/><br/>Tuy nhiên, cài đặt bảo mật cho một mẫu nhập cụ thể sẽ xác định đặc quyền người dùng hoặc nhóm có trên mẫu nhập. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_entry_user_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người dùng mẫu nhập, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để dùng mẫu nhập trên kho lưu trữ. <br/><br/>Tuy nhiên, cài đặt bảo mật cho một mẫu nhập cụ thể sẽ xác định đặc quyền người dùng hoặc nhóm có trên mẫu nhập. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_office_template_creators_hover_cm: "Khi bạn chỉ định người dùng hoặc nhóm làm người tạo mẫu Microsoft Office Online hoặc Dịch vụ Sửa, thì người dùng hoặc nhóm đó sẽ được trao đặc quyền phù hợp để tạo tập tin mẫu trên kho lưu trữ. <br/><br/>Tuy nhiên, thiết lập bảo mật cho tập tin mẫu cụ thể sẽ xác định đặc quyền mà người dùng hoặc nhóm có đối với mẫu đó. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_office_template_editors_hover_cm: "Khi bạn chỉ định người dùng hoặc nhóm làm người chỉnh sửa mẫu Microsoft Office Online hoặc Dịch vụ Sửa, thì người dùng hoặc nhóm đó sẽ được trao đặc quyền phù hợp để chỉnh sửa tập tin mẫu trên kho lưu trữ.  <br/><br/>Tuy nhiên, thiết lập bảo mật cho tập tin mẫu cụ thể sẽ xác định đặc quyền mà người dùng hoặc nhóm có đối với mẫu đó. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_office_template_user_hover_cm: "Khi bạn chỉ định người dùng hoặc nhóm làm người dùng mẫu Microsoft Office Online hoặc Dịch vụ Sửa, thì người dùng hoặc nhóm đó sẽ được trao đặc quyền phù hợp để áp dụng mẫu khi họ tạo tài liệu Office Online hoặc Dịch vụ Sửa mới từ máy khách web.  <br/><br/>Tuy nhiên, thiết lập bảo mật cho tập tin mẫu cụ thể sẽ xác định đặc quyền mà người dùng hoặc nhóm có đối với mẫu đó.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_draft_creators_hover_cm: "Bất kỳ người dùng nào cần cộng tác sửa tài liệu trong Microsoft Office Online hoặc Dịch vụ Sửa đều phải được gán vai trò này. Không được gán người dùng vào vai trò người biên tập hoặc người dùng. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_draft_editors_hover_cm: "Bất kỳ người dùng nào cần cộng tác sửa tài liệu trong Microsoft Office Online hoặc Dịch vụ Sửa đều phải được gán vai trò <b>người tạo</b>. Nếu người dùng được gán vai trò người biên tập, thì họ không thể tạo bản thảo, trong khi đây là thao tác cần thiết cho việc cộng tác sửa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_draft_user_hover_cm: "Bất kỳ người dùng nào cần cộng tác sửa tài liệu trong Microsoft Office Online hoặc Dịch vụ Sửa đều phải được gán vai trò <b>người tạo</b>. Nếu người dùng được gán vai trò người dùng, thì họ không thể tạo bản thảo, trong khi đây là thao tác cần thiết cho việc cộng tác sửa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Tìm hiểu thêm</a>",		
		admin_repcfg_search_others_hover_p8: "Người dùng và nhóm được gán quyền ngoài các quyền đi kèm với Quản trị viên, Người tạo, và Người dùng.<p>Bạn có thể di chuyển người dùng và nhóm này đến vai trò định trước bằng cách loại bỏ họ khỏi vai trò Khác rồi gán vai trò tìm kiếm cho họ.<p>Bạn có thể xem lại quyền mà người dùng và nhóm này hiện đang được cho phép bằng cách sử dụng IBM Administration Console dành cho Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Quản trị viên tìm kiếm là người dùng có quyền <b>Kiểm soát toàn bộ</b> trên kho lưu trữ (kho đối tượng). Bạn không thể thay đổi danh sách quản trị viên tìm kiếm từ công cụ quản trị. <br /><br />Quản trị viên tìm kiếm có thể xóa hoặc điều chỉnh tìm kiếm bất kỳ. Người dùng tạo tìm kiếm không cần thiết phải chia sẻ tìm kiếm với quản trị viên tìm kiếm.",
		admin_repcfg_search_creators_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo tìm kiếm, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để tạo tìm kiếm. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_search_user_hover_p8: "Khi bạn gán cho người dùng hoặc nhóm làm người dùng tìm kiếm, người dùng hoặc nhóm này sẽ được cấp bảo mật phù hợp trên kho lưu trữ để dùng tìm kiếm <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Tìm hiểu thêm</a><br /><br /><b>Mẹo:</b> Nếu muốn tất cả người dùng trong môi trường có thể dùng tìm kiếm, bạn có thể thêm tài khoản giả #NGƯỜI DÙNG ĐÃ XÁC THỰC vào vai trò người dùng tìm kiếm.<br/><br />Theo mặc định, người dùng tìm kiếm có thể tạo tìm kiếm và tìm kiếm kho lưu trữ chéo nhưng không thể lưu tìm kiếm. Bạn có thể ngăn người dùng tìm kiếm tạo tìm kiếm bằng cách để họ dùng máy khách đã chọn các tùy chọn sau đây:<ul><li><b>Ngăn người dùng tạo các tìm kiếm</b></li><li><b>Ngăn người dùng tạo tìm kiếm kho lưu trữ chéo</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người tạo tìm kiếm, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để tạo và lưu tìm kiếm và tìm kiếm kho lưu trữ chéo trên kho lưu trữ. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Tìm hiểu thêm</a><br /><br /><b>Quan trọng:</b> Đảm bảo người tạo tìm kiếm dùng máy khách đã chọn các tùy chọn sau đây:<ul><li><b>Ngăn người dùng tạo các tìm kiếm</b></li><li><b>Ngăn người dùng tạo tìm kiếm kho lưu trữ chéo</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người chỉnh sửa tìm kiếm, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để điều chỉnh tìm kiếm và tìm kiếm kho lưu trữ chéo đang tồn tại. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Tìm hiểu thêm</a><br /><br /><b>Mẹo:</b> Theo mặc định, người dùng tìm kiếm có thể tạo tìm kiếm và tìm kiếm kho lưu trữ chéo nhưng không thể lưu tìm kiếm. Bạn có thể ngăn người chỉnh sửa tìm kiếm tạo tìm kiếm bằng cách để họ dùng máy khách đã chọn các tùy chọn sau đây:<ul><li><b>Ngăn người dùng tạo các tìm kiếm</b></li><li><b>Ngăn người dùng tạo tìm kiếm kho lưu trữ chéo</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Khi bạn gán cho người dùng hoặc nhóm làm người dùng tìm kiếm, người dùng hoặc nhóm này sẽ được cấp đặc quyền phù hợp để mở và chạy tìm kiếm và tìm kiếm kho lưu trữ chéo đã lưu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Tìm hiểu thêm</a><br /><br /><b>Mẹo:</b> Theo mặc định, người dùng tìm kiếm có thể tạo tìm kiếm và tìm kiếm kho lưu trữ chéo nhưng không thể lưu tìm kiếm. Bạn có thể ngăn người dùng tìm kiếm tạo tìm kiếm bằng cách để họ dùng máy khách đã chọn các tùy chọn sau đây:<ul><li><b>Ngăn người dùng tạo các tìm kiếm</b></li><li><b>Ngăn người dùng tạo tìm kiếm kho lưu trữ chéo</b></li></ul>",
		admin_repcfg_db_encoding: "Mã hóa ký tự cơ sở dữ liệu máy chủ:",
		admin_repcfg_db_encoding_hover: "Mã hóa ký tự mặc định cho cơ sở dữ liệu IBM Content Manager là UTF-8.",
		admin_repcfg_db_encoding_specify: "Ðịnh rõ mã hóa ký tự cơ sở dữ liệu",
		admin_repcfg_db_encoding_utf8: "Mã hóa UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Ðịnh rõ tùy chọn này nếu dùng cơ sở dữ liệu mã hóa UTF-8. IBM Content Navigator sẽ dùng mã hóa UTF-8 để kiểm tra độ dài của chuỗi giá trị thuộc tính mục.",
		admin_repcfg_db_encoding_other: "Mã hóa khác",
		admin_repcfg_db_encoding_other_hover: "Ðịnh rõ tùy chọn này nếu dùng cơ sở dữ liệu có mã hóa không phải là UTF-8. IBM Content Navigator sẽ dùng bộ đếm ký tự để kiểm độ dài của chuỗi giá trị thuộc tính mục.",
		admin_repcfg_language_codes: "Mã ngôn ngữ máy chủ:",
		admin_repcfg_language_codes_avail: "Khả dụng",
		admin_repcfg_language_codes_sel: "Ðã chọn",
		admin_repcfg_pdf_conversion: "Kiểu MIME để chuyển đổi sang tài liệu PDF ở các đính kèm:",
		admin_repcfg_pdf_conversion_avail: "Khả dụng",
		admin_repcfg_pdf_conversion_sel: "Ðã chọn",

		admin_repcfg_box_share_enable_classes_label: "Các lớp sẽ điều chỉnh hỗ trợ Box chia sẻ:",
		admin_repcfg_box_share_enable_classes_hover: "Bạn có thể điều chỉnh lớp để lưu trữ ID của tập tin trong Box khi mục được chia sẻ.",
		admin_repcfg_box_share_enable_classes_warning: "Lưu ý: Bất kỳ lớp nào mà bạn xác định cũng sẽ được điều chỉnh để hỗ trợ Box chia sẻ. Sau khi lưu các thay đổi, sẽ không thể xóa các thay đổi khỏi lớp.<br><br>Bạn phải được kết nối đến kho lưu trữ ở dạng quản trị viên máy chủ thư viện để điều chỉnh lớp.",
		admin_repcfg_box_share_enable_classes_available: "Lớp có sẵn",
		admin_repcfg_box_share_enable_classes_selected: "Lớp đã chọn",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Lưu trữ ID Box chia sẻ",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Lớp này đã được điều chỉnh để lưu trữ ID Box chia sẻ. Không thể xóa tùy chọn này.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Ðiều chỉnh lớp này sao cho nó lưu trữ ID của tập tin trong Box khi mục được chia sẻ.",

		admin_repcfg_redaction: "Soạn thảo dựa trên vai trò:",
		admin_repcfg_enable_redaction_hover: "Ðịnh rõ liệu bạn có muốn sử dụng soạn thảo dựa trên vai trò trên các tài liệu trong kho lưu trữ này hay không.<br/><br/>Soạn thảo dựa trên vai trò được áp dụng khi tài liệu được tải xuống, được in, được hoàn trả bởi người xem, hoặc được hiển thị qua ảnh thu nhỏ. Những gì người dùng nhìn thấy khi họ xem tài liệu phụ thuộc vào vai trò của họ và chính sách soạn thảo được áp dụng.",

		admin_repcfg_redaction_policy_permission_text: "Gán người chỉnh sửa chính sách:",
		admin_repcfg_redaction_policy_editors_hover: "Chọn người dùng và nhóm sẽ tạo, điều chỉnh và xóa chính sách soạn thảo và vai trò soạn thảo.",
		admin_repcfg_redaction_policy_editors_select_hover: "Người chỉnh sửa soạn thảo có thể tạo, điều chỉnh và xóa chính sách soạn thảo và vai trò soạn thảo.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Quản trị viên chính sách soạn thảo có thể gán người chỉnh sửa chính sách soạn thảo.<br/><br/>Bạn có thể thay đổi danh sách quản trị viên chính sách soạn thảo bằng cách sử dụng IBM Administration Console cho Công cụ Nội dung.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Quản trị viên chính sách soạn thảo có thể gán người chỉnh sửa chính sách soạn thảo.<br/><br/>Bạn có thể thay đổi danh sách quản trị viên chính sách soạn thảo bằng cách sử dụng máy khách quản trị hệ thống IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Gán người chỉnh sửa soạn thảo:",
		admin_repcfg_redaction_editors_hover: "Chọn người dùng và nhóm sẽ tạo, điều chỉnh và xóa soạn thảo dựa trên vai trò. Sau khi chọn người dùng và nhóm làm người chỉnh sửa, bạn phải định rõ họ là người chỉnh sửa trong chính sách soạn thảo trước khi họ có thể chỉnh sửa soạn thảo dựa trên vai trò.",
   		admin_repcfg_redaction_editors_select_hover: "Người chỉnh sửa soạn thảo có thể tạo, điều chỉnh và xóa soạn thảo dựa trên vai trò khi họ cũng được xác định là người chỉnh sửa trong chính sách soạn thảo.",
   		admin_repcfg_redaction_administrators_hover_p8: "Quản trị viên soạn thảo có thể gán người chỉnh sửa soạn thảo.<br/><br/>Bạn có thể thay đổi danh sách quản trị viên soạn thảo bằng cách sử dụng IBM Administration Console cho Công cụ Nội dung.",
   		admin_repcfg_redaction_administrators_hover_cm: "Quản trị viên soạn thảo có thể gán người chỉnh sửa soạn thảo.<br/><br/>Bạn có thể thay đổi danh sách quản trị viên soạn thảo bằng cách sử dụng máy khách quản trị hệ thống IBM Content Manager.",
		admin_repcfg_entry_template: "Quản lý mẫu nhập:",
		admin_repcfg_entry_template_enable_classes_label: "Lớp để điều chỉnh hỗ trợ mẫu nhập:",
		admin_repcfg_oos_reference_attribute_label: "Thuộc tính tham chiếu cho Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Quan trọng: Bất kỳ lớp nào được định rõ sẽ được điều chỉnh để hỗ trợ mẫu nhập. Sau khi lưu các thay đổi, sẽ không thể xóa các thay đổi khỏi lớp.<br><br>Có thể điều chỉnh lớp cho một hoặc cả hai mục đích sau:<br><ul><li>Ðể lưu trữ ID của mẫu nhập đã dùng để thêm mục sao cho cài đặt mẫu nhập được áp dụng khi điều chỉnh mục</li><li>Chỉ lớp thư mục phân cấp: Để hỗ trợ liên kết thư mục mẫu nhập</li></ul>Bạn phải được kết nối đến kho lưu trữ ở dạng quản trị viên máy chủ thư viện để điều chỉnh lớp.",
		admin_repcfg_entry_template_enable_classes_warning: "Quan trọng: Bất kỳ lớp nào được định rõ sẽ được điều chỉnh để hỗ trợ mẫu nhập. Sau khi lưu các thay đổi, sẽ không thể xóa các thay đổi khỏi lớp.<br><br>Bạn phải được kết nối đến kho lưu trữ ở dạng quản trị viên máy chủ thư viện để điều chỉnh lớp.",
		admin_repcfg_entry_template_enable_classes_available: "Lớp có sẵn",
		admin_repcfg_entry_template_enable_classes_selected: "Lớp đã chọn",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Lưu trữ ID mẫu nhập",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Ðiều chỉnh lớp này sao cho nó lưu trữ ID mẫu nhập đã dùng để thêm mục sao cho cài đặt mẫu nhập được áp dụng khi điều chỉnh mục.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Lưu trữ liên kết thư mục",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Ðiều chỉnh lớp này sao cho nó có thể hỗ trợ liên kết thư mục mẫu nhập. Tùy chọn này chỉ có ở các lớp thư mục phân cấp.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Lớp này đã được điều chỉnh để lưu trữ ID mẫu nhập. Không thể xóa tùy chọn này.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Lớp này đã được điều chỉnh để lưu trữ liên kết thư mục. Không thể xóa tùy chọn này.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Chỉ có thể sử dụng lớp thư mục phân cấp và không phân cấp để lưu trữ liên kết thư mục.",
		admin_repcfg_entry_template_root_folder_association_title: "Các mẫu nhập liên quan đến thư mục gốc:",
		admin_repcfg_entry_template_root_folder_association_hover: "Định rõ mẫu nhập mà bạn muốn kết hợp với thư mục gốc trên kho lưu trữ IBM Content Manager của bạn.<br /><br />Nếu bạn kết hợp mẫu nhập với thư mục gốc và người dùng thêm các mục vào thư mục phân cấp, mẫu nhập sẽ luôn được sử dụng để thêm các mục.",
		admin_repcfg_entry_template_root_folder_association_button: "Ðặt liên kết",
		admin_repcfg_oos_enable_classes_label: "Các lớp điều chỉnh để hỗ trợ Office Online và Dịch vụ Sửa:",
		admin_repcfg_oos_enable_classes_warning: "Thông báo: Bất kỳ lớp nào mà bạn chỉ định sẽ được điều chỉnh để làm việc với Microsoft Office Online hoặc Dịch vụ Sửa. Sau khi bạn lưu thay đổi của bạn, thì thuộc tính tham chiếu tự động được thêm vào từng lớp không thể bị loại bỏ.<br><br>Bạn phải được kết nối đến kho lưu trữ ở dạng quản trị viên máy chủ thư viện để điều chỉnh lớp.",
		admin_repcfg_oos_enable_classes_available: "Lớp có sẵn",
		admin_repcfg_oos_enable_classes_selected: "Lớp đã chọn",
		admin_repcfg_oos_enable_classes_note: "Quan trọng:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Lớp này không được hỗ trợ với Microsoft Office Online hoặc Dịch vụ sửa.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Chính sách phiên bản dành cho lớp này được thiết lập thành phiên bản 'luôn luôn', không được Microsoft Office Online hoặc Dịch vụ Sửa hỗ trợ. Chọn lớp khác.",
		admin_repcfg_download_recording: "Theo dõi tải xuống:",
		admin_repcfg_download_recording_hover: "Tải xuống được theo dõi mặc định khi có cài đặt add-on Mở rộng cơ sở cộng tác xã hội trên kho lưu trữ. Tuy nhiên, nếu tắt tùy chọn này thì có thể tăng hiệu suất của kho lưu trữ.<br><br>Nếu tắt tùy chọn này, người dùng sẽ thấy tổng số tải xuống xảy ra trước khi tắt tùy chọn.",
		admin_repcfg_sync_service: "Dịch vụ đồng bộ:",
		admin_repcfg_download_ignored: "Bỏ qua tải xuống đối với người dùng cụ thể:",
		admin_repcfg_download_ignored_hover: "Có thể bỏ qua tải xuống do người dùng cụ thể yêu cầu, như quản trị viên hoặc tài khoản hệ thống để phản ánh chính xác hơn số lượng người dùng đã tải tài liệu xuống. Ví dụ, nếu có một tài khoản cụ thể dùng để tải nội dung xuống để tạo báo cáo tháng, có thể bỏ qua các tải xuống do tài khoản đó yêu cầu.<br><br><b>Hạn chế:</b> Không thể định rõ nhóm.",

		admin_repcfg_add_as_major_version: "Thêm ở dạng phiên bản chính:",
		admin_repcfg_enable_add_as_major_version: "Có",
		admin_repcfg_disable_add_as_major_version: "Không",
		admin_repcfg_checkin_as_major_version: "Kiểm nhập ở dạng phiên bản chính:",
		admin_repcfg_enable_checkin_as_major_version: "Có",
		admin_repcfg_disable_checkin_as_major_version: "Không",
		admin_repcfg_annotation_security: "Bảo mật chú thích:",
		admin_repcfg_inherit_annotation_security: "Sao chép bảo mật của tài liệu chứa",
		admin_repcfg_default_annotation_security: "Dùng bảo mật chú thích mặc định",
		admin_repcfg_connection_point: "Ðiểm kết nối luồng công việc:",
		admin_repcfg_include_workflow_definition: "Hiển thị lớp định nghĩa luồng công việc:",
		admin_repcfg_include_form_template: "Hiển thị lớp mẫu biểu mẫu:",
		admin_repcfg_enable_include_workflow_definition: "Có",
		admin_repcfg_disable_include_workflow_definition: "Không",

		admin_repcfg_status_columns: "Biểu tượng trạng thái:",
		admin_repcfg_status_columns_hover: "Ðịnh rõ trạng thái mà bạn muốn xem biểu tượng. Biểu tượng trạng thái được hiển thị bên cạnh tài liệu, thư mục và mục làm việc trong danh sách nội dung.",
		admin_repcfg_status_columns_documents_or_folders: "Hiển thị biểu tượng khi tài liệu hoặc thư mục:",
		admin_repcfg_status_columns_documents: "Hiển thị biểu tượng khi tài liệu:",
		admin_repcfg_status_columns_documents_checked_out: "Ðược kiểm xuất",
		admin_repcfg_status_columns_documents_declared_records: "Ðược khai báo ở dạng bản ghi",
		admin_repcfg_status_columns_documents_minor_versions: "Có các phiên bản phụ",
		admin_repcfg_status_columns_documents_compound_document: "Là tài liệu phức",
		admin_repcfg_status_columns_documents_bookmarks: "Có đánh dấu trang",
		admin_repcfg_status_columns_documents_hold: "Ðang được giữ",
		admin_repcfg_status_columns_documents_notes: "Có ghi chú",
		admin_repcfg_status_columns_work_items: "Hiển thị biểu tượng khi mục làm việc:",
		admin_repcfg_status_columns_work_items_locked: "Bị khóa",
		admin_repcfg_status_columns_work_items_checked_out: "Ðược kiểm xuất",
		admin_repcfg_status_columns_work_items_deadline: "Có hạn chót",
		admin_repcfg_status_columns_work_items_suspended: "Ðang chờ xử lý",

		admin_repcfg_afp2pdf_config_file: "Tập tin cấu hình AFP2PDF:",
		admin_repcfg_transform_xml_file: "Tập tin chuyển tùy chỉnh:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Bật",
		admin_repcfg_disable_ssl: "Tắt",
		admin_repcfg_keyringdb_file: "Tập tin cơ sở dữ liệu vòng khóa:",
		admin_repcfg_keyringstash_file: "Tập tin tạm vòng khóa:",
		admin_repcfg_od_sso: "Ðăng nhập đơn",
		admin_repcfg_od_enable_sso: "Bật",
		admin_repcfg_od_disable_sso: "Tắt",
		admin_repcfg_od_sso_password: "Mật khẩu",
		admin_repcfg_advanced_label: "Nâng cao",
		admin_repcfg_custom_properties_label: "Thuộc tính tùy chỉnh:",
		admin_repcfg_new_button_label: "Mới",
		admin_repcfg_edit_button_label: "Sửa",
		admin_repcfg_delete_button_label: "Xóa",
		admin_repcfg_custom_head1: "Tên",
		admin_repcfg_custom_head2: "Giá trị",
		admin_repcfg_ecpdialog_title_new: "Thuộc tính tùy chỉnh mới",
		admin_repcfg_ecpdialog_title_edit: "Sửa thuộc tính tùy chỉnh",
		admin_repcfg_ecpdialog_name: "Tên:",
		admin_repcfg_ecpdialog_value: "Giá trị:",
		admin_repcfg_ecpdialog_save: "Lưu",
		admin_repcfg_ecpdialog_create: "Tạo",
		admin_repcfg_ecpdialog_cancel: "Hủy",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Giá trị này được yêu cầu. Giá trị không thể có khoảng trắng và không thể trùng lắp.",

		admin_repcfg_cmis_use_gzip_encoding: "Dùng mã hóa GZIP:",

		admin_repcfg_task_mgr_proxy: "ID kết nối trình quản lý tác vụ:",
		admin_repcfg_task_mgr_proxy_hover: "Với Box chia sẻ hoặc xóa Vùng nhóm, trình quản lý tác vụ dùng ID và mật khẩu của người dùng quản trị để chạy các tác vụ nền dùng để điều chỉnh kho lưu trữ.<br><br>Nhấp Đặt và đăng nhập vào kho lưu trữ bằng một ID và mật khẩu hợp lệ dành cho người dùng quản trị kho lưu trữ.",
		admin_task_manager_not_enabled_warning: "Tùy chọn này yêu cầu phải có dịch vụ trình quản lý tác vụ, nhưng trình quản lý tác vụ lại không được bật.  Bạn có thể bật dịch vụ trình quản lý tác vụ cho tất cả máy khách trên trang Chung của phần Thiết lập.",
		admin_task_manager_not_enabled_and_user_warning: "Tùy chọn này yêu cầu phải có dịch vụ trình quản lý tác vụ, nhưng trình quản lý tác vụ lại không được bật. Trên trang này, đặt ID kết nối trình quản lý tác vụ, và sau đó trên trang Chung của phần Thiết lập, bật dịch vụ trình quản lý tác vụ cho tất cả máy khách.",
		admin_task_manager_user_id_pw_not_set_warning: "Tùy chọn này yêu cầu phải có dịch vụ trình quản lý tác vụ và một ID và mật khẩu người dùng quản trị. Trên trang này, đặt ID kết nối trình quản lý tác vụ.",
		admin_repcfg_teamspaces_delete_task_id: "Quản trị viên kho lưu trữ:",
		admin_repcfg_teamspaces_delete_task_password: "Mật khẩu:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Bạn phải định rõ quản trị viên máy chủ thư viện để cho phép dịch vụ trình quản lý tác vụ xóa vùng nhóm trên kho lưu trữ.",
		admin_repcfg_teamspaces_delete_task_hover: "Theo mặc định, khi người dùng xóa một vùng nhóm, thì vùng nhóm này bị ẩn đi. Tất cả thư mục và tài liệu trong vùng nhóm vẫn còn trên kho lưu trữ. <br /> <br />Khi bật tùy chọn này, chỉ những tài liệu được lưu ở thư mục khác trong kho lưu trữ được duy trì trong kho lưu trữ.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Nếu có nhiều vùng nhóm trong môi trường, có thể mất nhiều thời gian để hiển thị tất cả vùng nhóm trong tab <b>Vùng nhóm</b>. Có thể chọn tùy chọn này để giảm thời gian bung danh sách.<br /><br />Nếu người dùng cần làm việc với một vùng nhóm nằm ngoài phạm vi đã xác định, người dùng có thể dùng trường <b>Bộ lọc</b> để tìm vùng nhóm đó.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Nếu chọn tùy chọn này, người dùng có vai trò chủ sở hữu trên vùng nhóm có thể điều chỉnh vai trò liên quan đến vùng nhóm đã được tạo trước phiên bản 2.0.2 của IBM Content Navigator.<br /><br />Tùy chọn này không ảnh hưởng đến các vùng nhóm đã tạo với IBM Content Navigator, Phiên bản 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Ðịnh rõ có muốn người dùng có thể tạo vùng nhóm và mẫu vùng nhóm trên kho lưu trữ này hay không.<br /><br /><b>Quan trọng:</b> Kho lưu trữ phải hỗ trợ thư mục phân cấp.<br /><br />Nếu kích hoạt vùng nhóm, IBM Content Navigator sẽ tạo mô hình dữ liệu vùng nhóm trên kho lưu trữ này. Mô hình dữ liệu bao gồm đối tượng ACL, đặc quyền, bộ đặc quyền và hai kiểu mục mới.",
		admin_repcfg_folder_selector_hover: "Chọn thư mục muốn dùng làm thư mục gốc khi người dùng duyệt tài liệu. Nếu không có thư mục phân cấp cấu hình trên kho lưu trữ của bạn, cài đặt này cho phép hỗ trợ duyệt bằng cách xác định một thư mục gốc. Nếu có thư mục phân cấp cấu hình trên kho lưu trữ của bạn, cài đặt này sẽ ghi đè thư mục gốc cấu hình trên kho lưu trữ.",
		admin_repcfg_cm_use_sso_hover: "Ðịnh rõ có cho phép đăng nhập đơn đối với người dùng có bộ đặc quyền Đăng nhập tin cậy hay không.<br /><br /><b>Quan trọng:</b> Phải bật đăng nhập đơn trên máy chủ Content Manager, và Máy chủ ứng dụng WebSphere phải được cấu hình LTPA để tham số cấu hình này làm việc.",
		admin_repcfg_cm_direct_retrieve_hover: "Truy xuất trực tiếp được bật mặc định vì nó cho phép web khách nhanh chóng truy xuất nội dung từ trình quản lý tài nguyên. <br /><br />Có thể tắt tùy chọn này nếu không muốn ứng dụng khách truy cập trực tiếp vào trình quản lý tài nguyên hoặc nếu bạn có tường lửa hoặc máy chủ proxy ngăn web khách truy cập trình quản lý tài nguyên qua các URL. Ví dụ, tường lửa có thể ngăn người dùng xem tài liệu trong trình xem applet khi bật truy xuất trực tiếp.",
		admin_repcfg_cmItemTypesToDisplay: "Nếu không muốn người dùng xem kiểu mục tài nguyên và kiểu mục mục trên máy chủ IBM Content Manager, có thể chỉ hiển thị kiểu mục mô hình tài liệu. Kiểu mục sẽ được hiển thị khi người dùng tạo tìm kiếm, thêm tài liệu và tạo thư mục.",
		admin_repcfg_cm_language_codes_hover: "Ðịnh rõ ngôn ngữ mà máy chủ Content Manager trả dữ liệu về. Danh sách ngôn ngữ có sẵn được kiểm soát bằng danh sách định nghĩa ngôn ngữ trên máy chủ.<br /><br /><b>Ghi nhớ:</b> Dữ liệu trong web khách được hiển thị bằng ngôn ngữ được đặt trong trình duyệt web của người dùng.",
		admin_repcfg_cm_pdf_conversion_hover: "Ðịnh rõ kiểu tài liệu sẽ được chuyển đổi sang dạng PDF khi người dùng gửi một tài liệu có nhiều phần ở dạng đính kèm theo email. Tất cả các phần được kết hợp thành một tài liệu PDF duy nhất.",
		admin_repcfg_use_teamspaces_p8_hover: "Ðịnh rõ có muốn người dùng có thể tạo vùng nhóm và mẫu vùng nhóm trên kho lưu trữ này hay không.<br /><br />Nếu kích hoạt vùng nhóm, IBM Content Navigator sẽ tạo mô hình dữ liệu vùng nhóm trên kho lưu trữ này. Mô hình dữ liệu bao gồm mẫu thuộc tính, đối tượng tùy chỉnh, đối tượng thư mục và một số thư mục.",
		admin_repcfg_use_entry_template_p8_hover: "Ðịnh rõ có muốn người dùng có thể tạo và quản lý mẫu nhập trên kho lưu trữ này từ IBM Content Navigator hay không. Nếu không bật tính năng này, người dùng có thể tìm kiếm và dùng mẫu nhập đã có trên kho lưu trữ.<br /><br />Nếu bật quản lý mẫu nhập, IBM Content Navigator sẽ cập nhật mô hình dữ liệu mẫu nhập trên kho lưu trữ. Cập nhật sẽ bao gồm các thuộc tính mới. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_use_entry_template_cm_hover: "Ðịnh rõ có muốn người dùng có thể tạo và quản lý mẫu nhập trên kho lưu trữ này từ IBM Content Navigator hay không.<br /><br />Nếu bật quản lý mẫu nhập, IBM Content Navigator sẽ tạo mô hình dữ liệu mẫu nhập trên kho lưu trữ. Mô hình dữ liệu bao gồm một đối tượng ACL mới, các thuộc tính mới và một kiểu mục mới. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Tìm hiểu thêm</a>",
		admin_repcfg_sync_service_p8_hover: "Ðịnh rõ có muốn người dùng có thể đồng bộ các mục yêu thích của họ qua máy trạm và thiết bị di động của họ hay không.<br><br><b>Lưu ý:</b> Để sử dụng tính năng này bạn cũng phải hoàn tất các tác vụ sau:<br><ul><li>Ðịnh rõ <b>URL chung của dịch vụ đồng bộ</b> trong phần <b>Dịch vụ đồng bộ</b> của công cụ quản trị.</li><li>Thêm kho lưu trữ này vào máy khách được bật dịch vụ đồng bộ.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Ðịnh rõ có chọn tùy chọn phiên bản chính theo mặc định khi người dùng thêm tài liệu vào kho lưu trữ hay không.<br /><br />Người dùng có thể chọn xóa tùy chọn này nếu muốn thêm tài liệu ở dạng phiên bản phụ.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Ðịnh rõ có chọn tùy chọn phiên bản chính theo mặc định khi người dùng kiểm nhập tài liệu vào kho lưu trữ hay không.<br /><br />Người dùng có thể chọn xóa tùy chọn này nếu muốn kiểm nhập tài liệu ở dạng phiên bản phụ.",
		admin_repcfg_p8_annotation_security_hover: "Ðịnh rõ kiểu bảo mật để áp dụng cho chú thích theo mặc định.<br /><br />Người dùng có thể chọn thay đổi bảo mật của chú thích.",
		admin_repcfg_p8_connection_point_hover: "Nếu muốn dùng luồng công việc IBM FileNet P8, chọn điểm kết nối Công cụ xử lý. Ðiểm kết nối đã chọn sẽ xác định luồng công việc nào có sẵn cho người dùng truy cập kho lưu trữ này.",
		admin_repcfg_p8_include_workflow_definition_hover: "Nếu hiển thị lớp tài liệu định nghĩa luồng công việc IBM FileNet P8 trong web khách, người dùng có thể tìm kiếm và thêm định nghĩa luồng công việc vào kho lưu trữ.",
		admin_repcfg_p8_include_form_template_hover: "Nếu hiển thị lớp tài liệu mẫu biểu mẫu IBM FileNet P8 trong web khách, người dùng có thể tìm kiếm và thêm mẫu biểu mẫu vào kho lưu trữ.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Ðịnh rõ đường dẫn tuyệt đối của tập tin cấu hình AFP2PDF cho kho lưu trữ này trên máy chủ ứng dụng web. Chuyển AFP2PDF được yêu cầu để xem và in dữ liệu AFP.<br /><br /><b>Ghi nhớ:</b> Phải cài đặt Chuyển AFP2PDF để dùng tham số này.",
		admin_repcfg_od_transform_xml_file_hover: " Nếu muốn dùng chuyển tùy chỉnh để chuyển đổi nội dung Content Manager OnDemand, định rõ đường dẫn tuyệt đối của tập tin XML được dùng để định nghĩa chuyển. Phải định vị tập tin XML trên máy chủ ứng dụng web.",
		admin_repcfg_od_ssl_hover: "Ðịnh rõ có dùng SSL để mã hóa giao tiếp giữa máy chủ ứng dụng IBM Content Navigator và máy chủ thư viện Content Manager OnDemand với các máy chủ đối tượng hay không.<br /><br /><b>Quan trọng:</b> Khi bật SSL cho Content Manager OnDemand, nó sẽ không gồm giao tiếp giữa máy chủ ứng dụng IBM Content Navigator, máy chủ web hoặc máy trạm của người dùng.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Ðịnh rõ đường dẫn tuyệt đối của tập tin cơ sở dữ liệu vòng khóa cho kho lưu trữ này trên máy chủ ứng dụng web. Ví dụ, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Tập tin cơ sở dữ liệu vòng khóa chứa các chứng nhận gốc tin cậy của bạn. Phải bảo vệ hệ thống tập tin ở mức cao để ngăn việc truy cập không được ủy quyền vào tập tin này.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Ðịnh rõ đường dẫn tuyệt đối của tập tin tạm vòng khóa cho kho lưu trữ này trên máy chủ ứng dụng web. Ví dụ, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Tập tin tạm vòng khóa chứa mật khẩu của tập tin cơ sở dữ liệu vòng khóa. Phải bảo vệ hệ thống tập tin ở mức cao để ngăn việc truy cập không được ủy quyền vào tập tin này.",
		admin_repcfg_od_sso_password_hover: "Ðịnh rõ mật khẩu dùng cho đăng nhập đơn với máy chủ OnDemand.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API hỗ trợ các thuộc tính tùy chỉnh. Nếu muốn dùng bất kỳ thuộc tính tùy chỉnh nào khi kết nối với kho lưu trữ qua web khách, định rõ tên và giá trị của thuộc tính tùy chỉnh.<br /><br />Ðể biết thêm thông tin về các thuộc tính tùy chỉnh được hỗ trợ, xem ODWEK Java API Javadocs, nằm trong thư mục con /api của thư mục cài đặt ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Nhập tên thuộc tính.",
		admin_repcfg_od_custom_properties_value_hover: "Nhập giá trị thuộc tính.",
		admin_repcfg_od_use_sso_hover: "Ðịnh rõ có cho phép người dùng đăng nhập đơn hay không.<br /><br /><b>Quan trọng:</b> Phải bật đăng nhập đơn trên máy chủ Content Manager OnDemand để tham số cấu hình này làm việc.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Dùng mã hóa GZIP cho nguồn CMIS này.",
		admin_repcfg_cm_use_part_file_name: "Tên tập tin sử dụng khi tải xuống tài liệu:",
		admin_repcfg_cm_use_part_file_name_help: "Ðịnh rõ cách thức xác định tên tập tin của tài liệu khi người dùng tải xuống tài liệu.",
		admin_repcfg_cm_use_part_file_name_enable: "Sử dụng tên tập tin",
		admin_repcfg_cm_use_part_file_name_disable: "Sử dụng tên mục trong kho lưu trữ",
		admin_repcfg_add_doc_name: "Tên mặc định cho chứng từ đã thêm:",
		admin_repcfg_add_doc_name_hover: "Người dùng có thể thay đổi tên trước khi thêm chứng từ.",
		admin_repcfg_add_doc_name_empty: "Không có (để trống)",
		admin_repcfg_add_doc_name_file_name: "Tên tập tin của tài liệu đã chọn",

		admin_repcfg_compound_documents: "Tính năng tài liệu phức:",
		admin_repcfg_compound_documents_hover: "Bật tính năng tài liệu phức P8, ví dụ như điều hướng.",
		admin_repcfg_cm_action_list_config_enabled: "Danh sách thao tác trên mục công việc:",
		admin_repcfg_cm_action_list_config_hover: "Khi bạn cấu hình định tuyến tài liệu trong máy khách quản trị hệ thống Content Manager, bạn có thể định rõ danh sách thao tác mà người dùng có thể thực hiện trên mục công việc.<br /><br />Bật tùy chọn này nếu bạn muốn sử dụng Danh sách Thao tác từ máy chủ Content Manager. Những thiết lập này được dùng trong trình đơn ngữ cảnh và trong cửa sổ Hiệu chỉnh Thuộc tính của mục công việc.<br /><br /><b>Quan trọng:</b> Thiết lập trong Danh sách Thao tác sẽ ghi đè mọi trình đơn tùy chỉnh mà bạn cấu hình trong công cụ quản trị Content Navigator. Nếu không có thiết lập trong Danh sách Thao tác, thì người dùng sẽ không thể thực hiện bất kỳ thao tác nào trên các mục công việc.",

		admin_repcfg_box_share: "Box chia sẻ",
		admin_repcfg_box_share_p8_hover: "Cho phép người dùng chia sẻ tài liệu từ kho lưu trữ này. Việc chia sẻ một tài liệu bao gồm sao chép tập tin vào Box, tạo một liên kết và gửi liên kết trong email.<br /><br />Nếu bạn bật Box chia sẻ, IBM Content Navigator sẽ tạo mô hình dữ liệu Box chia sẻ trên kho lưu trữ. Ðể cài đặt bổ trợ Box chia sẻ của IBM Content Navigator, bạn phải kết nối với kho lưu trữ ở vai trò quản trị viên máy chủ thư viện.",

		admin_menu_type_icon: "Biểu tượng kiểu trình đơn",
		admin_menu_toolbar_hover: "Thanh công cụ",
		admin_menu_toolbar_custom_hover: "Thanh công cụ tùy chỉnh",
		admin_menu_contextMenu_hover: "Trình đơn ngữ cảnh",
		admin_menu_contextMenu_custom_hover: "Trình đơn ngữ cảnh tùy chỉnh",

		admin_menu_contextMenu_custom_empty: "Không có trình đơn ngữ cảnh tùy chỉnh được xác định trong các plug-in đã cấu hình.",
		admin_menu_toolbar_custom_empty: "Không có thanh công cụ tùy chỉnh được xác định trong các plug-in đã cấu hình.",

		admin_file_type_category_filters: "Bộ lọc kiểu tập tin:",
		admin_file_type_category_filters_hover_help: "Ðịnh rõ danh sách kiểu tập tin mà người dùng có thể dùng trong các tình huống sau:<ul><li>Thu hẹp danh sách kết quả khi tìm kiếm hoặc duyệt trong IBM Content Navigator cho Microsoft Office<li>Thu hẹp danh sách kết quả khi tìm kiếm kho lưu trữ IBM FileNet P8 trong web khách<li>Ðể giới hạn kiểu tập tin mà người dùng có thểm thêm vào kho lưu trữ khi dùng một mẫu nhập</ul>",
		admin_file_type_only_use_in_et_folder_association: "Chỉ hiện trong Liên kết thư mục mẫu nhập",
		admin_office_config_properties_label: "Thuộc tính Office",
		admin_office_config_type_label: "Kiểu dữ liệu",
		admin_office_config_mapped_property_label: "Thuộc tính kho lưu trữ",
		admin_office_config_properties_hover_help: "Nhập và sau đó thêm tên của từng thuộc tính Microsoft Office muốn ánh xạ đến thuộc tính kho lưu trữ. Kiểu dữ liệu của tất cả thuộc tính phải khớp",
		admin_office_config_mapped_property_hover_help: "Nếu muốn ánh xạ các thuộc tính Office đến nhiều hơn một thuộc tính kho lưu trữ, phải tạo một ánh xạ thuộc tính mới",
		admin_new_property_mapping_title: "Ánh xạ thuộc tính mới",
		admin_property_mapping_title: "Sửa ánh xạ thuộc tính",
		admin_property_mapping_instruction: "Ðịnh rõ muốn ánh xạ thuộc tính Microsoft Office nào đến thuộc tính trên kho lưu trữ. Kiểu dữ liệu của thuộc tính Office phải khớp kiểu dữ liệu của thuộc tính trên kho lưu trữ. <br /><br />Nếu một tài liệu Office có nhiều hơn một thuộc tính từ ánh xạ, IBM Content Navigator dùng thuộc tính đầu tiên trong danh sách để bung thuộc tính trên kho lưu trữ.",
		admin_ms_general_settings: "Cấu hình chung:",
		admin_ms_delete_local_settings: "Xóa tập tin nội bộ khi người dùng:",
		admin_ms_outlook_options: "Tích hợp Outlook:",
		admin_ms_enable_props_mapping: "Ánh xạ thuộc tính Office đến thuộc tính kho lưu trữ khi người dùng:",
		admin_ms_open_doc_when_checkout: "Kiểm xuất tự động khi mở một tài liệu",
		admin_ms_open_doc_when_checkout_hover_help: "Chọn tùy chọn này sẽ ngăn người dùng ghi đè tập tin trên kho lưu trữ bằng phiên bản cũ hơn của tập tin.",
		admin_ms_prompt_close_office: "Nhắc người dùng kiểm nhập tài liệu khi đóng ứng dụng Office",
		admin_ms_prompt_close_office_hover_help: "Chọn tùy chọn này giúp người dùng không quên kiểm nhập công việc.",
		admin_ms_add_with_entry_template_only: "Chỉ hiện thao tác Thêm với mẫu",
		admin_ms_delete_local_on_add: "Xóa các tập tin nội bộ khi người dùng thêm tài liệu",
		admin_ms_delete_local_on_checkin: "Xóa các tập tin nội bộ khi người dùng kiểm nhập tài liệu hoặc hủy kiểm xuất",
		admin_ms_delete_local_on_add_hover_help: "Khi người dùng thêm một tài liệu trong IBM Content Navigator dành cho Microsoft Office, tài liệu này sẽ được thêm vào kho lưu trữ, và bản sao nội bộ của tài liệu sẽ vẫn được mở để người dùng có thể kiểm xuất tài liệu ngay lập tức để thực hiện các thay đổi.<br /><br />Chọn tùy chọn này để đóng và xóa tự động bản sao nội bộ của tài liệu sau khi thêm tài liệu vào kho lưu trữ.",
		admin_ms_delete_local_on_checkin_hover_help: "Khi người dùng kiểm nhập tài liệu trong IBM Content Navigator dành cho Microsoft Office, tài liệu này sẽ được kiểm nhập vào kho lưu trữ, và bản sao nội bộ của tài liệu sẽ vẫn được mở. Ðồng thời, sau khi thực hiện thao tác hủy kiểm xuất, bản sao nội bộ của tài liệu sẽ vẫn được mở. Với bản sao nội bộ vẫn để mở, người dùng có thể kiểm xuất lại tài liệu ngay lập tức để thực hiện các thay đổi.<br /><br />Chọn tùy chọn này để đóng và xóa tự động bản sao nội bộ của tài liệu sau khi kiểm nhập tài liệu hoặc thực hiện thao tác hủy kiểm xuất.",
		admin_ms_delete_local_on_save: "Lưu tài liệu",
		admin_ms_prompt_for_props_on_add: "Nhắc người dùng cung cấp giá trị thuộc tính khi thêm email vào kho lưu trữ",
		admin_ms_prompt_for_props_on_add_hover_help: "Nếu không chọn tùy chọn này, web khách sẽ dùng ánh xạ thuộc tính Outlook được xác định cho kho lưu trữ.<br /><br />Nếu có mẫu nhập liên kết với thư mục dùng để thêm email, có thể người dùng sẽ không được nhắc về bất kỳ thuộc tính nào.",
		admin_ms_delete_email_on_add: "Xóa email khỏi máy chủ email khi thêm email vào kho lưu trữ",
		admin_ms_send_email_as_link_only: "Ngăn người dùng gửi tài liệu ở dạng đính kèm",
		admin_ms_send_email_as_link_only_hover_help: "Nếu chọn tùy chọn này, người dùng chỉ có thể gửi tài liệu ở dạng liên kết từ Outlook. Tùy chọn này đảm bảo rằng chỉ người dùng có đặc quyền phù hợp trên kho lưu trữ mới có thể xem tài liệu.",
		admin_ms_enable_prop_mapping_for_add: "Ánh xạ thuộc tính Office đến thuộc tính kho lưu trữ khi người dùng thêm hoặc kiểm nhập tài liệu",
		admin_ms_checkout_document_after_add: "Kiểm xuất tài liệu tự động sau khi đã thêm vào kho lưu trữ",
		admin_no_default_document_type_filtering: "Trả về tất cả kiểu tài liệu theo mặc định khi người dùng chạy tìm kiếm",
		admin_no_default_document_type_filtering_hover_help: "Trong IBM Content Navigator cho Microsoft Office, kiểu chạy mặc định là người dùng chỉ thấy kiểu tài liệu của ứng dụng hiện tại khi chạy tìm kiếm. Ví dụ, kiểu tài liệu Word được chọn theo mặc định khi tìm kiếm từ Microsoft Word.<br/><br/>Tuy nhiên, chọn tùy chọn này sẽ xóa ô chọn kiểu tài liệu để người dùng thấy tất cả tài liệu được tìm kiếm trả về. Người dùng có thể ghi đè cài đặt này bằng cách chọn một hoặc nhiều kiểu tài liệu trước khi chạy tìm kiếm.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Ðịnh rõ có ánh xạ thuộc tính tài liệu được xác định cho tài liệu Microsoft Office đến thuộc tính được xác định trên kho lưu trữ hay không.<br /></br /><b>Quan trọng:</b> Nếu bật tính năng này, phải cấu hình thuộc tính Office cho từng kho lưu trữ trong môi trường. Nếu không ánh xạ thuộc tính Office đến thuộc tính kho lưu trữ của bạn, tính năng này sẽ không làm việc.<br /><br />Cài đặt này không áp dụng cho Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Chọn tùy chọn này để giảm số bước mà người dùng cần phải thực hiện để làm việc với các tài liệu sau khi thêm tài liệu vào kho lưu trữ.<br /></br /><b>Mẹo:</b> Để đảm bảo người dùng kiểm nhập trở lại các tập tin về kho lưu trữ, hãy chọn <b>Nhắc người dùng kiểm nhập tài liệu khi đóng ứng dụng Office</b>.",
		admin_ms_show_details_recently_used: "Hiển thị chi tiết của mục <b>Sử dụng gần đây</b>",
		admin_ms_show_details_recently_used_hover_help: "Theo mặc định, khi bạn xem danh sách mục Sử dụng gần đây, chi tiết của các mục này sẽ được ẩn để cho phép hiển thị nhiều mục hơn. Khi bạn chọn tùy chọn này, trong danh sách mục Sử dụng gần đây, chi tiết sẽ được hiển thị đối với tài liệu đầu tiên trong ngăn chi tiết theo mặc định.",
		admin_ms_show_no_permissions_warning: "Hiển thị cảnh báo khi người dùng chỉnh sửa thuộc tính hoặc kiểm nhập một tài liệu mà không có quyền xem mẫu nhập của tài liệu",
		admin_ms_show_no_permissions_warning_hover_help: "Nếu một tài liệu trong kho lưu trữ được tạo bằng mẫu nhập, nhưng người dùng không có quyền xem mẫu nhập của tài liệu thì không thể truy xuất mẫu nhập.<br /><br/>Vì vậy, khi người dùng chỉnh sửa thuộc tính tài liệu, thuộc tính sẽ được hiển thị mà không dùng mẫu nhập. Và, khi người dùng kiểm nhập tài liệu, tài liệu sẽ được kiểm nhập mà không dùng mẫu nhập.<br /><br />Theo mặc định, các thao tác này sẽ xảy ra mà không thông báo cho người dùng việc mẫu nhập đã không được sử dụng. Cảnh báo chỉ được ghi lại trong tập tin nhật ký.<br /><br />Chọn tùy chọn này nếu bạn muốn hiển thị cảnh báo thông báo người dùng ngay khi mẫu nhập không được sử dụng.",
		admin_ms_hide_search_actions: "Thu hẹp phần bộ lọc tìm kiếm",
		admin_ms_hide_search_actions_hover_help: "Theo mặc định, người dùng có thể áp dụng một bộ lọc thao tác để xác định một thao tác, một người dùng hoặc nhóm người dùng, và chọn ngày hoặc phạm vi ngày khi thao tác xảy ra. Ví dụ, bạn có thể tìm kiếm tài liệu mà chỉ bạn thêm vào trong tháng vừa qua.<br /><br />Nếu không muốn người dùng áp dụng bộ lọc thao tác, hãy chọn tùy chọn này để ẩn bộ lọc thao tác và giảm số trường hiển thị khi xác định tiêu chí tìm kiếm.",
		admin_ms_hide_save_document: "Ẩn tùy chọn <b>Lưu</b> trong thanh thuộc tính",
		admin_ms_hide_save_document_hover_help: "Bằng cách sử dụng tùy chọn <b>Lưu</b> này, người dùng có thể lưu những thay đổi tài liệu vào kho lưu trữ mà không cần phải kiểm tra trong tài liệu.",
		admin_ms_indicate_managed_email_on_add: "Chỉ ra email đã được thêm vào kho dữ liệu hay chưa",
		admin_ms_indicate_managed_email_on_add_hover_help: "Chọn tùy chọn này sẽ cho người dùng biết một email đã có trong kho lưu trữ chưa, giúp giảm số lần thêm email vào kho lưu trữ.  Khi chọn tùy chọn này, danh mục màu mới gọi là IBM ECM sẽ được tạo trong Microsoft Outlook. Bất kỳ email nào được thêm vào kho lưu trữ cũng sẽ được tự động thêm vào danh mục Được quản lý trong IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Thêm tùy chọn trong nhóm Sửa:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Ðịnh rõ có sẵn tùy chọn <b>Thêm</b> nào từ nhóm <b>Sửa</b> trong thanh ribbon:<ul><li>Chọn <b>Hiện tất cả tùy chọn thêm</b> để hiện nút Thêm và tất cả thao tác Thêm có sẵn từ nhóm Sửa.</li><li>Chọn <b>Ẩn tất cả tùy chọn Thêm</b> để ngăn người dùng thêm tài liệu vào kho lưu trữ hoặc nếu muốn người dùng chỉ thêm tài liệu từ một vùng nhóm.</li><li>Chọn <b>Ẩn thao tác thêm với mẫu</b> nếu muốn tạo hiệu lực liên kết thư mục mẫu nhập và ngăn người dùng chọn một mẫu nhập khác.</li><li>Chọn <b>Chỉ hiện thao tác Thêm với mẫu</b> nếu muốn yêu cầu người dùng thêm tài liệu bằng cách dùng mẫu nhập.</li></ul>",
		admin_ms_show_edit_group_add_button: "Hiện tất cả tùy chọn thêm (mặc định)",
		admin_ms_hide_edit_group_add_button: "Ẩn tất cả tùy chọn thêm",
		admin_ms_hide_add_with_entry_template: "Ẩn thao tác Thêm với mẫu",
		admin_ms_managed_in_ecm: "Ðược quản lý trong IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Nếu người dùng hiển thị danh mục trong Microsoft Outlook, nhãn này sẽ được hiển thị cho email đã được thêm vào kho lưu trữ IBM Content Manager hoặc IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Tên danh mục Được quản lý trong IBM ECM không thể chứa dấu phẩy (,) hoặc dấu chấm phẩy (;).",
		admin_delete_open_docs_after_close: "Tự động xóa tài liệu mở khi người dùng đóng tài liệu",
		admin_admin_delete_open_docs_after_close_hover_help: "Khi người dùng mở một tài liệu trong IBM Content Navigator cho Microsoft Office, tài liệu được tải xuống thư mục tài liệu của người dùng hoặc vị trí được xác định bởi cài đặt dò tập tin cho máy khách.<br><br>Chọn tùy chọn này để xóa các tập tin được mở nhưng không được kiểm xuất khi người dùng đóng tài liệu. Chọn tùy chọn này sẽ cho phép:<ul><li>Tăng cường sự tuân thủ với chính sách IT</li><li>Ðảm bảo người dùng đang làm việc với các phiên bản mới nhất của tài liệu</li><li>Giảm dung lượng đĩa dùng để lưu tài liệu</li><ul>",
		admin_ms_custom_command_configuration: "Lệnh tùy chỉnh:",
		admin_ms_custom_command_configuration_hover_help: "Có thể thêm đến bốn lệnh vào thanh công cụ IBM Content Navigator cho Microsoft Office trong ứng dụng Microsoft Office. Có thể dùng lệnh để mở các URL. Ví dụ, có thể thêm một lệnh để mở một dịch vụ dùng để tìm kiếm người dùng và nhóm.",
		admin_ms_custom_command_dialog_title: "Sửa Lệnh tùy chỉnh",
		admin_ms_custom_command_dialog_intro_text: "Xác định lệnh có thể dùng để mở một URL từ thanh công cụ IBM Content Navigator cho Microsoft Office trong ứng dụng Microsoft Office.",
		admin_ms_custom_command_id: "Lệnh ${0}",
		admin_ms_custom_command_available_label: "Khả dụng",
		admin_ms_custom_command_available_hover_help: "Nếu cần phải ngoại tuyến để bảo trì URL dùng để xác định lệnh, có thể xóa ô chọn cho lệnh để lệnh không hiển thị trong Microsoft Office.<br/><br/><b>Quan trọng:</b> Người dùng phải đăng xuất khỏi máy khách để các thay đổi có hiệu lực trong IBM Content Navigator cho Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID lệnh",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Nhãn",
		admin_ms_custom_command_label_hover_help: "Ðịnh rõ nhãn để hiển thị cho lệnh trong Microsoft Office.",
		admin_ms_custom_command_description_label: "Mô tả",
		admin_ms_custom_command_description_hover_help: "Ðịnh rõ mô tả để hiển thị cho lệnh trong Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Ðịnh rõ URL tuyệt đối để mở từ Microsoft Office. URL có thể là một trang web hoặc dịch vụ.",
		admin_ms_custom_command_icon_label: "Biểu tượng",
		admin_ms_custom_command_icon_hover_help: "Ðịnh rõ tên tập tin của biểu tượng để hiển thị, ví dụ như CommandIcon.png.<br/><br/><b>Quan trọng:</b> Phải thêm tập tin biểu tượng vào thư mục con Plugins của thư mục cài đặt IBM Content Navigator cho Microsoft Office trên từng máy khách.<br/><br/>Nếu tập tin biểu tượng không nằm trong thư mục Plugins, hoặc nếu không định rõ biểu tượng, biểu tượng mặc định, customButtonIcon_38.gif, sẽ hiển thị.",
		admin_ms_custom_command_group_name: "Nhãn nhóm:",
		admin_ms_custom_command_group_name_hover_help: "Có thể xác định nhãn nhóm để hiển thị bên dưới lệnh tùy chỉnh trong thanh ribbon.<br/><br/>Nếu không định rõ nhãn, nhãn nhóm sẽ là <b>Custom Commands</b>.",
		admin_ms_ribbon_tab_label: "Nhãn tab IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Nhập tên muốn hiển thị cho tab IBM Content Navigator cho Microsoft Office trong thanh ribbon Microsoft Office. Nếu không định rõ tên, tab sẽ được đặt tên là \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Ðóng ngăn tác vụ khi người dùng mở tài liệu",
		admin_ms_close_task_pane_on_open_hover_help: "Chọn tùy chọn này nếu muốn mở lớn tối đa vùng mà người dùng có thể xem tài liệu trong Microsoft Office.<br/><br/>Người dùng Microsoft Office 2010: Để đảm bảo đóng ngăn tác vụ ở tất cả tài liệu, bật chế độ giao diện nhiều tài liệu (MDI) bằng cách nhấp <b>Tùy chọn</b> &gt; <b>Nâng cao</b> và xóa tùy chọn <b>Hiện tất cả cửa sổ trong thanh tác vụ</b>.",
		admin_ms_open_document_options: "Tùy chọn mở tài liệu:",
		admin_ms_delete_local_file_options: "Tùy chọn xóa tập tin nội bộ:",
		admin_ms_add_and_checkin_options: "Tùy chọn thêm và kiểm nhập:",
		admin_ms_search_options: "Tùy chọn tìm kiếm:",
		admin_ms_display_options: "Tùy chọn hiển thị:",
		admin_ms_bidirection_enable_label: "Cho phép hỗ trợ văn bản hai chiều",
		admin_ms_bidirection_enable_hover_help: "Chọn tùy chọn này nếu bạn muốn cho phép người dùng nhập hoặc xem văn bản trong IBM Content Navigator for Microsoft Office theo chiều khác ngoài chiều từ trái sang phải.",
		admin_ms_text_direction_label: "Hướng văn bản cơ sở cho nội dung:",
		admin_ms_text_direction_hover_help: "Ðịnh rõ hướng văn bản được nhập vào trường nhập trong IBM Content Navigator for Microsoft Office. Cài đặt này cũng kiểm soát cách hiển thị các mục, như tên thư mục hoặc giá trị thuộc tính.",
		admin_ms_control_threshold_label: "Số lượng mục tối thiểu để bật đoán trước:",
		admin_ms_control_threshold_hover_help: "Theo mặc định, chức năng đoán trước sẽ được bật khi số lượng mục là lớn hơn hoặc bằng 50, để tìm kiếm hoặc thiết lập các thuộc tính có giá trị định sẵn trong trong danh sách thả xuống. Bạn có thể thay đổi giá trị tối thiểu.",

		admin_ms_default_email_class: "Lớp sẽ dùng khi thêm email",
		admin_ms_default_email_class_hover_help: "Bất kỳ email nào được thêm vào kho lưu trữ này từ Microsoft Outlook sẽ được thêm vào lớp đã định rõ. Người dùng không thể thay đổi lớp.",
		admin_ms_default_folder_class: "Lớp sẽ dùng khi tạo thư mục",
		admin_ms_default_folder_class_hover_help: "Bất kỳ thư mục nào được tạo trong kho lưu trữ này từ một ứng dụng Microsoft Office sẽ được thêm vào lớp đã được định rõ.  Người dùng không thể thay đổi lớp.",
		admin_ms_default_folder_warn_title: "Không thể dùng lớp ${0} làm lớp sẽ dùng khi tạo tài liệu.",
		admin_ms_default_folder_warn_name_prop_invalid: "Thuộc tính tên lớp không phải là chuỗi, và tên thư mục phải là chuỗi.<br />Chọn một lớp khác để dùng khi tạo thư mục hoặc làm việc với quản trị viên IBM Content Manager để thay đổi thuộc tính tên lớp thành một chuỗi.",
		admin_ms_default_folder_warn_req_props: "Lớp bao gồm các thuộc tính yêu cầu mà không có giá trị. Tuy nhiên, người dùng không thể định rõ giá trị của thuộc tính yêu cầu khi họ tạo các thư mục từ IBM Content Navigator cho Microsoft Office.<br />Chọn một lớp khác để dùng khi tạo thư mục hoặc làm việc với quản trị viên IBM Content Manager để chuyển các thuộc tính yêu cầu thành tùy chọn hoặc điền trước giá trị cho các thuộc tính yêu cầu.",
		admin_ms_delimiter_for_office_properties: "Dấu tách cho thuộc tính chuỗi đa giá trị",
		admin_ms_delimiter_for_office_properties_hover_help: "Ðịnh rõ ký tự sẽ dùng làm dấu tách cho các thuộc tính chuỗi mà bạn đang ánh xạ thành thuộc tính chuỗi đa giá trị. Theo mặc định, bạn có thể gán một bộ giá trị cho một thuộc tính chuỗi đa giá trị bằng cách sử dụng dấu chấm phẩy (;) làm dấu tách để tách biệt các giá trị. Tuy nhiên, nếu một trong các giá trị chuỗi có chứa dấu chấm phẩy, bạn sẽ không thể thêm giá trị chuỗi đó vào trừ khi đổi một ký tự khác làm dấu tách. Ví dụ, bạn có thể thay đổi dấu tách sang dạng dấu phẩy (,)",
		admin_ms_outlookPropertyRemembrance : "Lưu ý thiết lập khi thêm thông báo và phần đính kèm",
		admin_ms_outlookPropertyRemembrance_hover_help : "Giá trị thuộc tính, vị trí, lựa chọn lớp và bảo mật được gán cho thông báo và phần đính kèm được ghi nhớ và sẽ được sử dụng làm thiết lập mặc định khi bổ sung các mục trong tương lai.",

		admin_file_type_name_hover_help: "Tên trợ giúp khi rê chuột",
		admin_file_type_description_hover_help: "Mô tả trợ giúp khi rê chuột",
		admin_file_type_dialog_title: "Sửa bộ lọc kiểu tập tin",
		admin_new_file_type_dialog_title: "Bộ lọc kiểu tập tin mới",
		admin_mobile_feature_dialog_title: "Tính năng",
		admin_mobile_feature_dialog_new_title: "Tính năng mới",
		admin_file_type_instructions: "Tạo bộ lọc mà người dùng có thể dùng để thu hẹp danh sách kết quả tìm kiếm. Có thể ánh xạ nhiều kiểu MIME vào bộ lọc.",
		admin_file_type_filter_place_holder: "Lọc kiểu MIME",
		admin_new_button_label: "Mới",
		admin_edit_button_label: "Sửa",
		admin_delete_button_label: "Xóa",
		admin_copy_button_label: "Sao chép",
		admin_verify_button_label: "Xác minh",
		admin_availabe_filters_label: "Bộ lọc có sẵn",
		admin_selected_filters_label: "Bộ lọc đã chọn",

		admin_mobile_access: "Truy cập ứng dụng di động:",
		admin_mobile_access_hover_help: "Nếu muốn dùng IBM Content Navigator từ thiết bị di động, nên cho phép người dùng truy cập máy khách này từ ứng dụng di động.<br /><br />Nếu tắt truy cập đến máy khách này từ ứng dụng di động, người dùng vẫn có thể truy cập web khách từ trình duyệt di động của họ. Tuy nhiên, web khách không được thiết kế để truy cập từ các thiết bị di động.",

		admin_mobile_access_allow_label: "Cho phép người dùng:",
		admin_mobile_allow_add_photos: "Thêm ảnh từ máy chụp và thư viện ảnh",
		admin_mobile_allow_add_docs: "Thêm tài liệu và tạo thư mục vào kho lưu trữ",
		admin_mobile_allow_open_docs: "Mở tài liệu trong các ứng dụng khác",
		admin_mobile_allow_add_docs_hover_help: "Người dùng có thể tạo thư mục hoặc thêm tài liệu từ các ứng dụng di động khác, như một tài liệu được đính kèm vào một email.",
		admin_mobile_allow_open_docs_hover_help: "Người dùng được nhắc chọn ứng dụng dùng để xem tài liệu đã chọn. Nếu chỉ có sẵn một ứng dụng, ứng dụng đó sẽ được dùng.",
		admin_mobile_features: "Tính năng:",
		admin_mobile_features_hover_help: "Ðịnh rõ tính năng nào của máy khách này được hiển thị trong ứng dụng di động IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Tính năng mới",
		admin_mobile_move_up_button_label: "Chuyển lên",
		admin_mobile_move_down_button_label: "Chuyển xuống",
		admin_desktop_mobile_instructions: "Hướng dẫn cài đặt di động đến đây",
		admin_desktop_max_number_of_docs_to_add: "Số lượng tài liệu tối đa có thể thêm:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Ðịnh rõ số lượng tài liệu tối đa mà người dùng có thể thêm trong một lần. Mặc định tối đa là 50. Tuy nhiên, có thể đặt tối đa đến 300.",
		admin_desktop_max_number_of_docs_to_modify: "Số lượng mục tối đa có thể điều chỉnh:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Ðịnh rõ số lượng mục tối đa mà người dùng có thể điều chỉnh trong một lần. Mặc định tối đa là 50. Tuy nhiên, có thể đặt tối đa đến 300.",
		admin_desktop_max_conversion_size: "Lượng dữ liệu tối đa để chuyển đổi PDF (theo MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Hạn chế:</b> Cài đặt này không được hỗ trợ trên IBM Content Manager OnDemand.<br/><br/>Ðịnh rõ số lượng dữ liệu tối đa có thể chuyển đổi thành PDF. Giới hạn này áp dụng khi người dùng tải xuống các mục ở dạng tập tin hoặc gửi các mục qua email ở dạng tập tin PDF.<br /><br />Nếu không thể xác định kích thước của từng tài liệu, tài liệu vẫn được chuyển sang dạng PDF.<br/><br/>Giới hạn mặc định là 200 MB. Cài đặt giới hạn trên 200 MB có thể gây ảnh hưởng đến hiệu suất hệ thống.",
		admin_desktop_timeProperties: "Nhãn thời gian:",
		admin_desktop_time_properties_hover_help: "<b>Chỉ người dùng IBM FileNet P8:</b> Cài đặt này áp dụng cho thuộc tính tùy chỉnh và không áp dụng cho thuộc tính hệ thống. Ví dụ, thuộc tính Được điều chỉnh bởi sẽ vẫn hiện phần thời gian của nhãn thời gian nếu chọn <b>Chỉ hiển thị phần ngày của nhãn thời gian</b>.<br/><br/>Cài đặt này không thay đổi nhãn thời gian trong kho lưu trữ.",
		admin_desktop_disable_time_stamp: "Hiển thị toàn bộ nhãn thời gian",
		admin_desktop_enable_time_stamp: "Chỉ hiển thị phần ngày trong nhãn thời gian",
		admin_desktop_timezone: "Múi giờ:",
		admin_desktop_timezone_localuser: "Hiển thị múi giờ địa phương của người dùng",
		admin_desktop_timezone_alluser: "Hiển thị cùng một múi giờ cho tất cả người dùng",
		admin_desktop_timezone_hover_help: "Bạn có thể định rõ người dùng thấy nhãn thời gian theo múi giời địa phương của họ hoặc tất cả người dùng thấy cùng nhãn thời gian.<br/><br/>Cài đặt này không thay đổi nhãn thời gian trong kho lưu trữ. Tuy nhiên, cài đặt được chọn sẽ xác định múi giờ được dùng để tạo nhãn thời gian trong kho lưu trữ khi người dùng thêm hoặc điều chỉnh mục.",
		admin_desktop_mobile_feature_display_label: "Hiển thị",
		admin_desktop_mobile_feature_icon_file_label: "Tập tin biểu tượng",
		admin_mobile_feature_dialog_icon_file_label: "Tập tin biểu tượng:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Tên",
		admin_desktop_mobile_select_feature_label: "Chọn tính năng",
		admin_desktop_mobile_feature_icon_label: "Biểu tượng tính năng",
		admin_desktop_share_admin_none: "Chưa đặt quản trị viên.",
		admin_desktop_share_admin_edit_label: "Ðặt quản trị viên...",
		admin_browse_icon: "Biểu tượng Duyệt",
		admin_search_icon: "Biểu tượng Tìm kiếm",
		admin_favorites_icon: "Biểu tượng Yêu thích",
		admin_casesearch_icon: "Biểu tượng hồ sơ",
		admin_datacap_icon: "Biểu tượng Datacap",
		admin_system_defined: "Hệ thống đã xác định",
		admin_icon_file_placeholder_text: "Vị trí tập tin (nghĩa là http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Gốc",
		admin_folder_default: "Mặc định",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Thanh công cụ",
		admin_menu_context_menus: "Trình đơn ngữ cảnh",
		admin_menu_office_toolbars: "Lệnh thanh ribbon Microsoft Office",
		admin_menu_office_menus: "Trình đơn ngữ cảnh Microsoft Office",

		admin_file_name_label: "Tên tập tin:",
		admin_exportconfiguration_security_label: "Bao gồm người dùng và nhóm được quyền sử dụng máy khách này",
		admin_exportconfiguration_instruction: "Có thể xuất máy khách, bao gồm cấu hình kho lưu trữ và cấu hình plug-in có liên quan với máy khách đã chọn, vào một tập tin mà có thể nhập vào một thực thể khác của IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Xuất máy khách",
		admin_exportconfiguration_button_label: "Xuất",
		admin_dialog_select_all: "Chọn tất cả",
		admin_dialog_deselect_all: "Xóa tất cả",

		admin_importconfiguration_instruction: "Mục trong tập tin cấu hình đã chọn sẽ được nhập vào hệ thống này. Tuy nhiên, nếu đã tồn tại một mục có cùng ID trên hệ thống, phải quyết định giữ lại hoặc ghi đè mục này.",
		admin_importconfiguration_dialog_label: "Nhập máy khách",
		admin_importconfiguration_reason_dialog_label: "Nhập lý do soạn thảo",
		admin_importconfiguration_button_label: "Nhập",
		admin_to_be_imported: "Mục cấu hình để nhập",
		admin_on_target_system: "Mục đang tồn tại trên hệ thống đích",
		admin_import_short_warning_message: "Các mục sau đã tồn tại trên hệ thống này. Chọn mục muốn thay thế trên hệ thống này:",
		admin_import_warning_message: "Các mục cấu hình sau có cùng ID với các mục đang tồn tại trên hệ thống đích. Chỉ chọn các mục muốn nhập hoặc ghi đè trên hệ thống đích.<br /><br />Nếu không muốn ghi đè một mục cấu hình, tạo bản sao của mục trên thực thể đã xuất máy khách, cho mục một ID khác và liên kết mục với máy khách. Xuất lại máy khách, sau đó nhập máy khách trên thực thể này.",
		admin_choose_file_to_import_label: "Chọn tập tin để nhập:",
		admin_download_imported_log: "Báo cáo tải xuống",
		admin_desktop_import_summary: "Tóm tắt nhập máy khách",
		admin_reason_import_summary: "Tóm tắt nhập lý do soạn thảo",
		admin_rba_import_summary: "Tóm tắt nhập vai trò quản trị",
		admin_import_open_tabs_checking: "Trước khi nhập máy khách, phải đóng tất cả tab thay vì chỉ tab <bold>Máy khách</bold> trong công cụ quản trị.",
		admin_import_no_conflict: "Các tài liệu sau đây sẽ được nhập:",
		admin_desktop_invalid: "Máy khách không hợp lệ",
		admin_desktop_warning: "Máy khách đã lưu có kèm cảnh báo.",
		admin_repos_warning: "Kho lưu trữ đã lưu có kèm cảnh báo.",
		admin_config_type_icon: "Biểu tượng kiểu mục cấu hình",

		admin_approval_workflow: "Luồng công việc phê duyệt",
		admin_approval_workflow_hover: "Cho phép người dùng khởi chạy luồng công việc phê duyệt xác định trước. Bạn có thể tắt luồng công việc phê duyệt để cho phép người dùng khởi chạy luồng công việc phê duyệt tùy chỉnh được xác định bằng cách đăng ký. Theo mặc định, luồng công việc phê duyệt được bật.<br><br><b>Quan trọng:</b> Nếu bạn bật luồng công việc phê duyệt, bạn cũng phải đảm bảo một hoặc cả hai định nghĩa luồng công việc xác định trước (ICNParallelDocumentApproval.pep và ICNSequentialDocumentApproval.pep) được thêm vào kho lưu trữ và chuyển đến Công cụ Xử lý Nội dung.",

		admin_cannot_add_desktop_members_error: "Không thể định rõ người dùng và nhóm có truy cập vào máy khách này.",
		admin_cannot_add_desktop_members_error_explanation: "Bạn không có quyền phù hợp để truy xuất thông tin người dùng và nhóm.",
		admin_cannot_add_desktop_members_error_userResponse: "Ðăng nhập bằng tên người dùng khác hoặc yêu cầu quản trị viên hệ thống IBM Content Manager cấp cho bạn đặc quyền UserACLOwner, yêu cầu phải có để truy xuất thông tin người dùng và nhóm.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Không thể chọn người dùng và nhóm.",
		admin_cannot_select_users_groups_error_explanation: "Bạn không có quyền phù hợp để truy xuất thông tin người dùng và nhóm.",
		admin_cannot_select_users_groups_error_userResponse: "Ðăng nhập bằng tên người dùng khác hoặc yêu cầu quản trị viên hệ thống IBM Content Manager cấp cho bạn đặc quyền UserACLOwner, yêu cầu phải có để truy xuất thông tin người dùng và nhóm.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Không tìm thấy máy khách OAuth2.",
		oauth_client_not_found_error_explanation: "Không tìm thấy ID máy khách OAuth2 ${0}.",
		oauth_client_not_found_error_userResponse: "Hãy liên hệ quản trị viên hệ thống để báo về việc không tìm thấy ID máy khách OAuth2.",
		oauth_client_not_found_error_adminResponse: "Xem lại cấu hình kho lưu trữ và xác minh nó có chứa ID máy khách OAuth2 đúng.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Ðăng nhập kho lưu trữ bị lỗi.",
		oauth_login_failed_error_explanation: "Cố gắng đăng nhập vào kho lưu trữ ${0} đã bị lỗi.",
		oauth_login_failed_error_userResponse: "Xác minh ID và mật khẩu người dùng là đúng và thử đăng nhập lại.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Ðã xảy ra lỗi khi đang thử đăng nhập vào ${0}.",
		oauth_error_return_error_explanation: "Cố gắng xác thực ${0} bị lỗi.",
		oauth_error_return_error_userResponse: "Liên hệ quản trị viên hệ thống với thông tin sau: Cố gắng xác thực ${0} đã bị lỗi và trả về thông báo lỗi sau: <br>${1}<br><b>lỗi:</b> ${2}.<br><b>mô tả:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Thông tin thêm về lỗi nằm trong tập tin nhật ký máy chủ ứng dụng web.  Ðể biết thêm thông tin về tập tin nhật ký, xem &quot;tập tin nhật ký IBM Content Navigator&quot; tại IBM Knowledge Center. Dùng thông tin về cố gắng xác thực ${0}, hãy thử sửa lỗi và xác minh OAuth2 đã bật.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Ứng dụng đích OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "lỗi",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Không thể xác định thông báo lỗi OAuth.",

		delete_share_permission_error: "Chia sẻ đã không được xóa.",
		delete_share_permission_error_explanation: "Bạn không có quyền phù hợp để xóa chia sẻ.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Bạn không thể chia sẻ thư mục này.",
		class_not_support_share_error_explanation: "Lớp ${0} không được thiết lập để hỗ trợ chia sẻ.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Bạn không thể chia sẻ thư mục này.",
		rbr_not_support_share_error_explanation: "Nội dung nhạy cảm đã được thêm vào mục.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Thiết bị mà người dùng đang cố gắng đăng nhập vào từ đó không có quyền truy cập tài khoản người dùng.",
		box_oauth_error_invalid_request: "Yêu cầu đã bị thiếu một tham số bắt buộc, có chứa một giá trị tham số không hợp lệ, có chứa tham số lặp lại hoặc có thể có dạng không đúng.",
		box_oauth_error_unsupported_response_type: "Máy chủ xác thực không hỗ trợ việc lấy mã xác thực bằng phương thức này.  Hãy kiểm tra tham số mã trong yêu cầu của bạn.",
		box_oauth_error_access_denied: "Chủ tài nguyên hoặc máy chủ xác thực đã từ chối yêu cầu.",
		box_oauth_error_temporarily_unavailable: "Thiết bị của bạn bị giới hạn về tốc độ, bạn cần giảm tốc độ yêu cầu xác thực hoặc chờ trong giây lát.",
		box_oauth_error_unknown: "Không thể xác định thông báo lỗi Box.",

		admin_default_search_type: "Kiểu tìm kiếm mặc định",
		admin_default_search_type_hover: "Ðịnh rõ tùy chọn nào được chọn theo mặc định trong trường <b>Tìm kiếm cho</b> trong trình đơn <b>Tùy chọn tìm kiếm</b>.",
		admin_default_search_type_documents: "Tài liệu",
		admin_default_search_type_folders: "Thư mục",
		admin_default_search_type_folders_and_documents: "Tài liệu và thư mục",

		admin_restricted_search_type: "Cho phép tìm kiếm trên",
		admin_restricted_search_type_hover: "Theo mặc định, người dùng có thể tìm kiếm trên cả tài liệu lẫn thư mục. Nếu bạn muốn ẩn tùy chọn 'Tìm kiếm trên' và chỉ cho phép tìm kiếm ở tài liệu, hãy chọn 'Tài liệu' và hủy chọn 'Thư mục'.</br>,</br> Nếu bạn cho phép tìm kiếm trên cả tài liệu lẫn thư mục, hãy chọn tùy chọn mặc định hiển thị khi ô cửa sổ tìm kiếm mở ra.",
		admin_restricted_search_type_documents: "Tài liệu",
		admin_restricted_search_type_folders: "Thư mục",
		admin_restricted_search_type_folders_and_documents: "Tài liệu và thư mục",

		admin_default_search_version: "Phiên bản tìm kiếm mặc định",
		admin_default_search_version_hover: "Ðịnh rõ tùy chọn nào được chọn theo mặc định trong trường <b>Phiên bản</b> trong trình đơn <b>Tùy chọn tìm kiếm</b>.",

		admin_all_classes_search: "Tìm kiếm tất cả lớp",
		admin_all_classes_search_hover: "Xác định xem người dùng có được phép tìm kiếm trên tất cả các lớp, và nếu được phép, cần phải bao gồm những gì trong các tìm kiếm tài liệu.",
		admin_all_classes_search_removed_hover: "Tùy chọn để tìm kiếm tất cả các lớp không có sẵn do tham số context-param allPseudoClassHidden trong ứng dụng Trình điều hướng web.xml được đặt là true.",
		admin_all_classes_search_hide: "Gỡ bỏ chọn lựa để tìm kiếm tất cả các lớp",
		admin_all_classes_search_documents_only_documents: "Một tìm kiếm tài liệu chỉ bao gồm tài liệu, tìm kiếm đã lưu và mẫu nhập",
		admin_all_classes_search_documents_non_folders: "Một tìm kiếm tài liệu bao bồm bất kỳ mục nào không phải là thư mục",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Xem dạng cây:",
		admin_feature_config_tree_view_hoverhelp: "Ðịnh rõ người dùng có thể truy cập danh sách thư mục trong kho lưu trữ qua ngăn Duyệt hay không. Nếu ẩn ngăn Duyệt, người dùng phải dùng danh sách nội dung để điều hướng đến các thư mục trong kho lưu trữ.",
		admin_feature_config_selected_repositories_label: "Kho lưu trữ:",
		admin_feature_config_selected_repositories_hoverhelp: "Chọn kho lưu trữ mà người dùng có thể truy cập trong tính năng này.",
		admin_feature_config_selected_repositories_select_state_hdr: "Chọn kho lưu trữ",
		admin_feature_config_selected_repositories_name_hdr: "Tên kho lưu trữ",
		admin_feature_config_selected_repositories_show_hdr: "Hiện",
		admin_feature_config_invalid_icon_title: "Tính năng thiếu một số cài đặt yêu cầu",
		admin_feature_config_view_select_hdr: "Chọn màn hình",
		admin_feature_config_view_hdr: "Hiện",
		admin_feature_config_view: "Hiện",
		admin_feature_config_views: "Hiện:",
		admin_feature_config_views_hoverhelp: "Ðịnh rõ dạng xem nào người dùng có thể áp dụng cho danh sách nội dung. Các dạng xem được hiển thị theo thứ tự được liệt kê. Dạng xem được chọn đầu tiên là dạng xem mặc định cho tính năng.<br><br><b>Lưu ý:</b> Nếu bật dạng xem Cuộn phim, bạn phải cấu hình trình xem chuyển đổi HTML để xem trước tài liệu.",

		admin_custom_dialog_name: "Tên:",
		admin_custom_dialog_value: "Giá trị:",
		admin_custom_setting_name_hover: "Nhập tên của cài đặt Daeja ViewONE mà bạn muốn thêm vào cấu hình. Xem tài liệu Daeja ViewONE để biết thêm thông tin về cài đặt cấu hình.",
		admin_custom_setting_value_hover: "Nhập giá trị mà bạn muốn dùng cho cài đặt cấu hình Daeja ViewONE. Xem tài liệu Daeja ViewONE để biết thêm thông tin về giá trị hợp lệ cho cài đặt cấu hình.",

		entry_template_name_required_message: "Yêu cầu phải có trường tên trên Cài đặt mẫu mục nhập.",
		entry_template_name_invalid_message: "Trường tên trên Cài đặt mẫu mục nhập không thể chứa các ký tự sau đây: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Khi nhóm và người dùng cụ thể được chọn cho trường Chia sẻ với trên Cài đặt mẫu mục nhập, phải định rõ ít nhất một nhóm hoặc người dùng.",
		entry_template_no_permission_to_save_to_teamspace_message: "Bạn không có quyền thêm mẫu nhập vào vùng nhóm (${0}) được chọn từ Lưu vào trên Cài đặt mẫu nhập.",
		entry_template_save_in_destination_required_message: "Bạn phải định rõ vị trí lưu mặc định trong phần <b>Đặt vị trí lưu mục</b>.",
		entry_template_save_in_destination_must_select_folder: "Nếu ẩn trường <b>Lưu vào</b> và yêu cầu người dùng thêm mục mới vào thư mục, bạn phải chọn thư mục trong trường <b>Vị trí lưu mặc định</b> trong phần <b>Đặt vị trí lưu mục</b>.",
		entry_template_what_to_save_required_message: "Chọn ít nhất một lựa chọn cho bạn muốn lưu gì trên Đặt tùy chọn.",
		entry_template_custom_workflow_empty_message: "Nếu chọn <b>Luồng công việc tùy chỉnh...</b>, bạn phải tìm kiếm và chọn luồng công việc muốn sử dụng.",

		entry_template_new: "Mẫu nhập mới",
		entry_template_name_hover: "Tên mẫu nhập không thể chứa các ký tự sau đây: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Tên mẫu nhập không thể chứa bất kỳ ký tự nào sau đây: * \\ / : ? \" < > |",
		entry_template_description_hover: "Cung cấp mô tả sẽ giúp người dùng phân biệt giữa mẫu nhập này và các mẫu nhập khác.",
		entry_tempalte_save_in_hover: "Ðịnh rõ vị trí lưu mẫu nhập.<br><br><b>Hạn chế:</b> Nếu lưu mẫu nhập trong vùng nhóm, bạn chỉ có thể sử dụng mẫu nhập trong vùng nhóm đó.",
		entry_template_inherit_hover: "Nếu bạn chọn tùy chọn này, cài đặt bảo mật cho thư mục mẹ sẽ được thêm vào danh sách người dùng và nhóm được chia sẻ mẫu nhập.",
		entry_template_builder_aria_label: "Trình tạo mẫu nhập",
		entry_template_builder_layout_aria_label: "Trình tạo thuộc tính mẫu nhập",

		entry_template_settings_document: "Xác định mẫu nhập",
		entry_template_settings_folder: "Ðặt vị trí lưu trữ mục",
		entry_template_settings_folder_intro: "Ðịnh rõ vị trí lưu các mục được thêm bằng mẫu nhập này.",
		entry_template_settings_properties: "Ðặt thuộc tính mục",
		entry_template_settings_properties_intro: "Bạn có thể định rõ các giá trị mặc định hoặc xác định trước cho mục được thêm bằng mẫu nhập này. Ngoài ra, bạn có thể thay đổi bố cục của các thuộc tính để kiểm soát thuộc tính nào sẽ được hiển thị và thứ tự hiển thị.",
		entry_template_settings_workflow: "Cấu hình luồng công việc cho mục",
		entty_template_settings_workflow_intro: "Bạn có thể định rõ luồng công việc có được chạy hay không khi các mục được thêm bằng mẫu nhập này.",
		entry_template_settings_security: "Ðặt bảo mật cho mục",
		entry_template_settings_security_intro: "Bạn có thể định rõ bảo mật mặc định hoặc xác định trước cho các mục được thêm bằng mẫu nhập này. Người dùng có quyền phù hợp có thể thay đổi bảo mật của mục sau khi thêm.",
		entry_template_settings_options: "Ðặt tùy chọn cho mục",
		entry_template_xt_warning: "Lưu thay đổi cho mẫu nhập này sẽ chuyển đổi mẫu từ mẫu nhập của IBM Workplace XT thành mẫu nhập của IBM Content Navigator. IBM Workplace XT không hỗ trợ các mẫu nhập của IBM Content Navigator.",

		entry_template_properties_edit_layout: "Sửa bố cục...",
		entry_template_properties_read_only: "Chỉ đọc",
		entry_template_properties_hidden: "Ẩn",

		entry_template_destination_show: "Hiện trường <b>Lưu vào</b>",
		entry_template_destination_show_hover: "Nếu bạn hiển thị trường <b>Lưu vào</b>, người dùng có thể thay đổi vị trí lưu các mục.",
		entry_template_destination_hide: "Ẩn trường <b>Lưu vào</b>",
		entry_template_destination_hide_hover: "Nếu bạn ẩn trường <b>Lưu vào</b>, người dùng không thể thay đổi vị trí lưu các mục.",
		entry_template_folder_save_in_default: "Vị trí <b>Lưu vào</b> mặc định:",
		entry_template_folder_save_in_default_hover: "Ðịnh rõ vị trí mặc định thêm các mục bằng mẫu nhập này.<br><br>Vị trí mặc định đã chọn chịu các hạn chế về trạng thái thời gian chạy của mẫu nhập:<ul><li>Người dùng không thể chọn kho lưu trữ khác.</li><li>Nếu vị trí mặc định là vùng nhóm, người dùng không thể chọn vùng nhóm khác.</li></ul>Tuy nhiên, nếu người dùng liên kết mẫu nhập này với thư mục, người dùng có thể ghi đè vị trí lưu trữ được cấu hình cho mẫu nhập này.",
		entry_template_folder_restrict_choice: "Yêu cầu người dùng thêm các mục vào vị trí mặc định hoặc thư mục con của vị trí mặc định",
		entry_template_folder_file_in_required: "Yêu cầu người dùng thêm mục mới vào thư mục",
		entry_template_folder_file_in_required_hover: "Nếu bạn không chọn tùy chọn này, người dùng có thể thêm các mục vào thư mục gốc của kho lưu trữ.<br><br><b>Hạn chế:</b> Cấu hình máy khách có thể yêu cầu người dùng phải chọn thư mục.",

		entry_template_document_type_show: "Hiện trường <b>Bạn muốn lưu gì</b>",
		entry_template_document_type_show_hover: "Nếu bạn hiển thị trường <b>Bạn muốn lưu gì</b>, các mục đã chọn sẽ được hiển thị làm tùy chọn trong trường <b>Bạn muốn lưu gì</b>.",
		entry_template_document_type_hide: "Ẩn trường <b>Bạn muốn lưu gì</b>",
		entry_template_document_type_hide_hover: "Nếu bạn ẩn trường <b>Bạn muốn lưu gì</b>, loại tài liệu đã chọn sẽ luôn được sử dụng khi người dùng thêm tài liệu bằng mẫu nhập này.",
		entry_template_document_type: "Có thể dùng mẫu nhập này để thêm các mục sau:",
		entry_template_document_type_hover: "Nếu bạn hiển thị trường <b>Bạn muốn lưu gì</b>, các mục đã chọn sẽ được hiển thị làm tùy chọn trong trường <b>Bạn muốn lưu gì</b>.<br><br>Nếu bạn ẩn trường <b>Bạn muốn lưu gì</b>, loại tài liệu đã chọn sẽ luôn được sử dụng khi người dùng thêm tài liệu bằng mẫu nhập này.",

		entry_template_misc: "Tùy chọn bổ sung:",
		entry_template_auto_classify_show: "Tự động phân loại nội dung tài liệu",
		entry_template_auto_classify_show_hover: "Khi tài liệu được phân loại trên Trình quản lý nội dung FileNet, nội dung của tài liệu sẽ được kiểm tra để xác định các giá trị thuộc tính và lớp thích hợp cho tài liệu.<br><br>Trao đổi với quản trị viên hệ thống để xác định phân loại nội dung có được bật trên Công cụ nền tảng nội dung hay không.<br><br>Nếu bạn cho phép tùy chọn này, lớp và các thuộc tính của tài liệu có thể bị thay đổi khi người dùng thêm tài liệu vào kho lưu trữ.",
		entry_template_allow_duplicate_file_names: "Cho phép tài liệu trùng tên tập tin",
		entry_template_allow_duplicate_file_names_hover: "Theo mặc định, bạn có thể thêm tài liệu có cùng tên vào thư mục trong Trình quản lý nội dung FileNet. Bạn có thể bỏ tùy chọn này nếu muốn từng tập tin trong vị trí lưu trữ đã chọn có tên duy nhất.",
		entry_template_allow_compound_documents: "Cho phép tài liệu này là tài liệu gốc của tài liệu kết hợp",
		entry_template_version_show: "Hiện tùy chọn phiên bản để thêm và kiểm nhập",
		entry_template_version_hide: "Ẩn tùy chọn phiên bản để thêm và kiểm nhập",
		entry_template_version_to_add_as: "Phiên bản mặc định để thêm làm:",
		entry_template_version_default: "Tùy chọn phiên bản mặc định:",
		entry_template_version_default_checked: "Phiên bản chính",
		entry_template_version_default_unchecked: "Phiên bản phụ",
		entry_template_version_display: "Phiên bản tài liệu:",
		entry_template_version_display_show: "Hiện",
		entry_template_version_display_hide: "Ẩn",
		entry_template_version_default_add: "Phiên bản mặc định để thêm làm:",

		entry_template_checkin_version_show: "Hiện tùy chọn phiên bản để kiểm nhập",
		entry_template_checkin_version_hide: "Ẩn tùy chọn phiên bản để kiểm nhập",

		entry_template_checkin_version_message_no_versions: "Chính sách phiên bản của lớp đã chọn ngăn người dùng kiểm nhập một phiên bản mới của tài liệu.",
		entry_template_checkin_version_message_always_version: "Chính sách phiên bản của lớp đã chọn ngăn người dùng thay thế phiên bản hiện tại của tài liệu.",

		entry_template_applied: "Sử dụng mẫu nhập này khi người dùng:",
		entry_template_applied_add: "Thêm tài liệu (yêu cầu)",
		entry_template_applied_add_folder: "Tạo thư mục (theo yêu cầu)",
		entry_template_applied_checkin: "Kiểm nhập",
		entry_template_applied_properties_group: "Xem hoặc sửa thuộc tính:",
		entry_template_applied_properties: "Trong cửa sổ Thuộc tính",
		entry_template_applied_viewer: "Trong tiểu trình xem",
		entry_template_applied_docinfo: "Trong ngăn thông tin tài liệu",
		entry_template_applied_no_class_support: "Có thể dùng mẫu nhập này để thêm mục nhưng không thể dùng để kiểm nhập tài liệu hoặc xem và sửa thuộc tính. Phải điều chỉnh lớp đã chọn để hỗ trợ các tình huống này. Nếu cần dùng mẫu nhập trong các tình huống này, yêu cầu quản trị viên dùng công cụ quản trị để điều chỉnh lớp sao cho lớp có thể lưu các ID mẫu nhập.",
		entry_template_applied_no_child_component_support: "Lớp đã chọn có thành phần con và bố cục thuộc tính được xác định. Bố cục thuộc tính không hỗ trợ thành phần con. Thành phần con sẽ không được hiển thị cho người dùng.",
		entry_template_applied_child_component: "Lớp đã chọn có thành phần con. Chúng sẽ được hiển thị cho người dùng, nhưng bạn không thể cấu hình thành phần con trong mẫu nhập này.",

		entry_template_properties_show: "Hiện phần <b>Thuộc tính</b>",
		entry_tempalte_properties_show_hover: "Nếu bạn hiển thị phần <b>Thuộc tính</b>, người dùng có thể điều chỉnh bất kỳ giá trị thuộc tính nào được hiển thị trong mẫu nhập và không phải là thuộc tính chỉ đọc.",
		entry_template_properties_hide: "Ẩn phần <b>Thuộc tính</b>",
		entry_template_properties_hide_hover: "Nếu bạn ẩn phần <b>Thuộc tính</b>, người dùng không thể điều chỉnh bất kỳ giá trị thuộc tính nào. Mẫu nhập phải xác định tất cả các giá trị mà bạn muốn sử dụng khi các mục được thêm bằng mẫu nhập này.",

		entry_template_security_show: "Hiện phần <b>Bảo mật</b>",
		entry_template_security_show_hover: "Nếu bạn hiển thị phần <b>Bảo mật</b>, người dùng có quyền phù hợp có thể điều chỉnh bảo mật của mục.",
		entry_template_security_hide: "Ẩn phần <b>Bảo mật</b>",
		entry_template_security_hide_hover: "Nếu bạn ẩn phần <b>Bảo mật</b>, người dùng không thể điều chỉnh bảo mật của các mục. Mẫu nhập phải xác định toàn bộ cài đặt bảo mật mà bạn muốn dùng khi các mục được thêm hoặc chỉnh sửa.",
		entry_template_security_policy: "Chính sách bảo mật:",
		entry_template_security_policy_hover: "Tùy thuộc vào chính sách bảo mật mà bạn chọn, chính sách bảo mật có thể:<br><ul><li>Ghi đè các quyền được xác định trong <b>Thiết lập bảo mật mục</b>.</li><li>Thêm vào các quyền được xác định trong <b>Thiết lập bảo mật mục</b>.</li></ul>",
		entry_template_security_policy_none: "Không có chính sách bảo mật nào được chọn",
		entry_template_security_inherit: "Kế thừa cài đặt bảo mật từ thư mục mẹ",
		entry_tempalte_save_in_hover: "Ðịnh rõ vị trí lưu mẫu nhập.<br><br><b>Hạn chế:</b> Nếu lưu mẫu nhập trong vùng nhóm, bạn chỉ có thể sử dụng mẫu nhập trong vùng nhóm đó.",
		entry_template_security_inherit_item_security_hover: "Nếu bạn chọn tùy chọn này, cài đặt bảo mật cho thư mục mẹ sẽ được thêm vào cài đặt bảo mật được xác định bởi một trong các mục sau:<ul><li>Lớp được định rõ trong phần <b>Thiết lập thuộc tính mục</b></li><li>Bảo mật tùy chỉnh đã xác định trong phần <b>Thiết lập bảo mật mục</b></li></ul>",
		entry_template_security_change: "Ghi đè bảo mật được xác định bằng lớp đã chọn",
		entry_template_security_change_hover: "Nếu bạn chọn tùy chọn này, cài đặt bảo mật được xác định cho lớp sẽ được hiển thị theo mặc định. Sau đó bạn có thể điều chỉnh cài đặt bảo mật cho mẫu nhập.<br><br>Nếu bạn hiển thị phần <b>Bảo mật</b>, người dùng có quyền phù hợp có thể điều chỉnh bảo mật của mục.<br><br>Nếu bạn chọn tùy chọn này và chọn kế thừa cài đặt bảo mật từ thư mục mẹ, bất kỳ quyền nào có thể kế thừa sẽ được thêm vào bảo mật mà bạn xác định.",
		entry_template_security_default_item_security: "Ghi đè bảo mật mục mặc định của người dùng đã thêm mục",
		entry_template_security_policy_message_override: "Chính sách bảo mật đã chọn được cấu hình để ghi đè các quyền đã được xác định ở Bảo mật đã đặt.",
		entry_template_security_policy_message_add: "Chính sách bảo mật đã chọn được cấu hình để thêm các quyền đã được xác định ở Bảo mật đã đặt.",
		entry_template_security_policy_preserve_true_hover: "Bảo lưu quyền trực tiếp",
		entry_template_security_policy_preserve_false_hover: "Không bảo lưu quyền trực tiếp",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Vai trò cụ thể",
		entry_template_security_class_role_search_title: "Tìm kiếm vai trò:",
		entry_template_secuirty_class_member_title: "Danh sách thành viên dành cho ${0}",
		entry_template_secuirty_class_folder_only: "Những quyền này chỉ áp dụng cho thư mục này",
		entry_template_secuirty_class_folder_and_immediate_children: "Những quyền này áp dụng cho thư mục này và những thư mục con trực hệ được cấu hình để kế thừa bảo mật từ thư mục này.",
		entry_template_secuirty_class_folder_and_all_children: "Những quyền này áp dụng cho thư mục này và tất cả những thư mục con được cấu hình để kế thừa bảo mật từ thư mục này. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Những quyền này áp dụng cho những thư mục con trực hệ được cấu hình để kế thừa bảo mật từ thư mục này",
		entry_template_secuirty_class_folder_all_children_not_folder: "Những quyền này áp dụng cho tất cả những thư mục con được cấu hình để kế thừa bảo mật từ thư mục này",

		entry_template_class_security_message_no_override: "Bảo mật của lớp đã chọn ngăn người dùng ghi đè bảo mật.",
		entry_template_class_security_required_privileges: "<b>Quan trọng</b>: Khi ghi đè bảo mật của lớp đã chọn, người dùng đã thêm mục bằng mẫu nhập này phải có đặc quyền ItemSetACL và UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Luồng công việc theo kiểu liên tiếp",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Luồng công việc theo kiểu song song",
		entry_template_workflow_type_existing: "Luồng công việc tùy chỉnh...",
		entry_template_workflow_launch_prompt: "Hỏi người dùng có chạy luồng công việc hay không",
		entry_template_workflow_launch_auto: "Tự động chạy luồng công việc",
		entry_template_workflow_modify_launch: "Cho phép người dùng điều chỉnh bước khởi chạy",
		entry_template_workflow_modify_launch_hover: "Chọn tùy chọn này nếu bạn muốn cho phép người dùng thay đổi cách khởi chạy luồng công việc.",

		entry_template_optionsButton_title: "Chỉnh sửa",
		entry_template_optionsButton_readonly_title: "Xem liên kết",
		entry_template_optionsDialog_title: "Cài đặt liên kết thư mục",
		entry_template_removeButton_title: "Xóa",
		entry_template_addButton_title: "Thêm",
		entry_template_selected_entry_templates: "Mẫu nhập đã chọn",
		entry_template_docs_added_to_template_destination: "Tài liệu được thêm vào đích đã xác định trong mẫu nhập.",
		entry_template_docs_added_to_other_object_store: "Mẫu nhập này thêm mục vào kho đối tượng ${0}.",
		entry_template_inherited_entry_templates_label: "Tôi muốn: ",
		entry_template_inherited_entry_templates: "Kế thừa liên kết mẫu nhập từ thư mục: ",
		entry_template_inherited_entry_templates_not: "Tạo liên kết mới cho thư mục này",
		entry_template_inherited_folder_path: "Mẫu nhập trong danh sách mẫu nhập đã chọn có liên kết với thư mục sau: ${0}. <br> Ðường dẫn đến thư mục là ${1}.",
		entry_template_folder_associations_title: "Liên kết mẫu nhập",
		entry_template_folder_associations_intro: "Khi liên kết một mẫu nhập với một thư mục, người dùng phải dùng mẫu nhập để thêm các mục vào thư mục. Nếu liên kết nhiều mẫu nhập với một thư mục, người dùng có thể chọn dùng mẫu nhập nào.",
		entry_tempalte_folder_associations_entrytemplate: "Mẫu nhập: ",
		entry_template_avaliable_entry_templates: "Mẫu nhập có sẵn",
		entry_template_fileTypes_intro_title: "Kiểu tập tin cho phép:",
		entry_template_fileTypes_intro: "Theo mặc định, có thể dùng một mẫu nhập để thêm bất kỳ kiểu tài liệu nào vào kho lưu trữ. Tuy nhiên, nếu chọn một hoặc nhiều kiểu tập tin, chỉ có thể dùng mẫu nhập khi người dùng thêm tài liệu khớp với một trong những kiểu tập tin đã xác định.",
		entry_template_fileTypes: "Kiểu tập tin",
		entry_template_fileType_error: "Ðã chọn kiểu tập tin không hợp lệ cho một hoặc nhiều liên kết mẫu nhập. Phải xóa các kiểu tập tin không hợp lệ trước khi lưu các liên kết mẫu nhập này.",
		entry_template_fileTypes_any_type_of_file: " Kiểu tập tin bất kỳ",
		entry_template_description_label: "Mô tả",
		entry_template_ItemInfoPrefix: "Liên kết với: ",
		entry_template_TargetObjectStoreName: "Kho đối tượng đích",
		entry_template_class: "Lớp",
		entry_template_current_folder_as_parent: "Dùng thư mục làm đích",
		entry_template_view_minetypes: "Xem kiểu MIME",
		entry_template_avaliable_MIME_types: "Kiểu tập tin có sẵn",
		entry_template_selected_MIME_types: "Kiểu tập tin đã chọn",
		entry_template_MIME_type_column: "tên danh mục kiểu tập tin",
		entry_template_file_type_not_existing: "Vui lòng xóa các kiểu tập tin không hợp lệ.",
		entry_template_MIME_types: "Kiểu MIME:",
		entry_template_MIME_types_info_dialog_title: "Kiểu MIME để",
		entry_template_destination_label: "Thêm tài liệu vào: ",
		entry_template_destination_help: "Ðịnh rõ vị trí lưu trữ tài liệu trên kho lưu trữ khi người dùng thêm tài liệu vào thư mục này bằng cách dùng mẫu nhập đã chọn.",
		entry_template_radioButton_folder_destination: "Thư mục đã chọn",
		entry_template_radioButton_template_destination: "Ðích được xác định trong mẫu nhập",
		entry_tempalte_teamspace_default: "Mẫu nhập mặc định",
		entry_template_folder_associations_save_new: "Bạn đã điều chỉnh một số liên kết mẫu nhập. Bạn có muốn đóng cửa sổ này mà không lưu các thay đổi không?",
		entry_template_mode_binding_label: "Thuộc tính",
		entry_template_columns_className: "Tên lớp",
		entry_template_columns_type: "Loại mẫu",
		entry_template_columns_workflow: "Tên luồng công việc",
		entry_template_columns_destination: "Ðích",
		entry_template_association_less_than_record: "Có ${0} mẫu nhập không được liệt kê trong Các mẫu nhập được chọn. Bạn không có quyền xem chúng. Hoặc các mẫu nhập này đã bị xóa. Liên hệ quản trị viên hệ thống để lấy thêm thông tin.",
		/* Request */

		progress_message_general: "Ðang làm việc...",
		cancel_message_general: "Thao tác đã bị hủy.",
		ie8_not_supported_browser: "IE8 không phải là trình duyệt được hỗ trợ.",
		progress_message_getDesktop: "Ðang tải máy khách...",
		progress_message_getActions: "Ðang tải thao tác...",
		progress_message_getViewers: "Ðang tải máy khách...",
		progress_message_logon: "Ðang đăng nhập...",
		progress_message_logoff: "Ðang đăng xuất...",
		progress_message_getContentClasses: "Ðang truy xuất lớp...",
		progress_message_openContentClass: "Ðang truy xuất chi tiết lớp...",
		progress_message_od_getCabinets: "Ðang truy xuất cabinet...",
		progress_message_getSearchTemplates: "Ðang truy xuất tìm kiếm...",
		progress_message_od_getTemplates: "Ðang truy xuất thư mục...",
		progress_message_od_openCabinet: "Ðang truy xuất thư mục...",
		progress_message_openSearchTemplate: "Ðang mở tìm kiếm...",
		progress_message_od_openTemplate: "Ðang mở thư mục...",

		progress_message_getWorklists: "Ðang truy xuất danh sách công việc...",
		progress_message_getWorkItems: "Ðang truy xuất mục công việc...",
		progress_message_getNextWorkItems: "Ðang truy xuất mục công việc...",
		progress_message_getStepParameters: "Ðang truy xuất thông tin mục công việc...",
		progress_message_getStepAttachmentItems: "Ðang truy xuất thông tin đính kèm...",
		progress_message_getDependentParameters: "Ðang truy xuất thông tin thuộc tính...",

		progress_message_p8_getProcessApplicationSpaces: "Ðang truy xuất vùng ứng dụng...",
		progress_message_p8_getProcessRoles: "Ðang truy xuất vai trò xử lý...",
		progress_message_p8_getProcessInbaskets: "Ðang truy xuất trong rổ...",
		progress_message_p8_getProcessorInformation: "Ðang truy xuất thông tin xử lý...",
		progress_message_p8_getFilterCriteria: "Ðang truy xuất bộ lọc trong rổ...",
		progress_message_p8_getLaunchParameters: "Ðang truy xuất thông tin mục công việc...",
		progress_message_p8_getStepAttachments: "Ðang truy xuất đính kèm mục công việc...",
		progress_message_p8_getSubscriptions: "Ðang truy xuất đăng ký luồng công việc...",
		progress_message_p8_getTrackerParameters: "Ðang truy xuất thông tin mục công việc...",
		progress_message_p8_getTrackerHistory: "Ðang truy xuất lịch sử mục công việc...",
		progress_message_p8_getTrackerMilestones: "Ðang truy xuất mốc mục công việc...",
		progress_message_p8_completeStep: "Ðang hoàn tất mục công việc...",
		progress_message_p8_moveToInbox: "Ðang chuyển mục vào trong rổ...",
		progress_message_p8_returnToSender: "Ðang trả về mục công việc...",
		progress_message_p8_reassign: "Ðang gán lại mục công việc...",
		progress_message_p8_launchWorkflow: "Ðang khởi chạy luồng công việc...",
		progress_message_p8_getTransferedWorkflows: "Ðang truy xuất thông tin luồng công việc...",

		progress_message_cm_getProcesses: "Ðang truy xuất thông tin luồng công việc...",
		progress_message_cm_completeStep: "Tiếp tục mục công việc...",
		progress_message_cm_getItemProcessInformation: "Ðang truy xuất thông tin luồng công việc...",

		progress_message_search: "Ðang tìm...",
		cancel_message_search: "Tìm kiếm đã bị hủy.",
		progress_message_getContentItems: "Ðang truy xuất thông tin mục...",
		progress_message_openFolder: "Ðang mở thư mục...",
		progress_message_addItem: "Ðang tạo mục...",
		progress_message_checkIn: "Ðang kiểm nhập mục...",
		progress_message_changePassword: "Ðang đổi mật khẩu...",
		progress_message_getDefaultInstancePermissions: "Ðang truy xuất quyền mặc định...",
		progress_message_openItem: "Ðang truy xuất thông tin mục...",
		progress_message_saveItem: "Ðang lưu thông tin mục...",
		progress_message_getPermissions: "Ðang truy xuất quyền...",
		progress_message_getEntryTemplates: "Ðang truy xuất mẫu mục nhập...",
		progress_message_openEntryTemplate: "Ðang mở mẫu mục nhập...",
		progress_message_getFavorites: "Ðang truy xuất yêu thích...",
		progress_message_getFoldersFiledIn: "Ðang truy xuất thư mục...",
		progress_message_getDocumentVersions: "Ðang truy xuất phiên bản...",
		progress_message_getDependentAttributeInfo: "Ðang truy xuất thông tin thuộc tính...",
		progress_message_packageForDownload: "Ðang đóng gói để tải xuống...",
		progress_message_convertDocument: "Ðang chuyển đổi nội dung...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Ðang truy xuất kiểu nội dung...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Ðang thêm tài liệu...",

		progress_message_desktop_reload: "Máy khách đang tải lại máy khách của bạn.<br>Bạn có thể được nhắc phải đăng nhập lại.",
		progress_message_email: "Ðang gửi email...",
		cancel_message_email: "Email đã bị hủy.",

		progress_message_p8_getOfficeOnlineTemplates: "Ðang truy xuất mẫu Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Cây yêu thích",
		favorites_content_list_label: "Danh sách nội dung yêu thích",
		syncItems_tree_label: "Cây tập tin đồng bộ của tôi",
		syncItems_content_list_label: "Danh sách nội dung tập tin đồng bộ của tôi",
		my_checkouts_content_list_label: "Danh sách nội dung kiểm xuất của tôi",
		browse_tree_label: "Cây duyệt",
		browse_content_list_label: "Danh sách nội dung duyệt",
		repository_selector_label: "Trình chọn kho lưu trữ",
		teamspaces_content_list_label: "Danh sách nội dung vùng nhóm",
		templates_content_list_label: "Danh sách nội dung mẫu",
		work_content_list_label: "Danh sách nội dung công việc",
		work_tree_label: "Cây công việc",
		admin_tree_label: "Cây quản trị",
		admin_tabs_label: "Tab quản trị",
		search_tabs_label: "Tab tìm kiếm",
		search_selector_label: "Trình chọn tìm kiếm",
		teamspace_browse_content_list_label: "Danh sách nội dung duyệt vùng nhóm",
		teamspace_search_tabs_label: "Tab tìm kiếm vùng nhóm",

		/* Desktop */
		undo_description: "Hoàn tác ${0}",
		redo_description: "Làm lại ${0}",

		/* Application Tabs */
		home: "Phím Home",
		repository: "Kho lưu trữ",
		repository_type: "Kiểu kho lưu trữ:",
		repository_type_header: "Kiểu kho lưu trữ",
		repository_type_any: "Tất cả kho lưu trữ",
		repository_type_contains_label: "Kiểu kho lưu trữ chứa",
		document_info: "Thông tin tài liệu",
		team: "Nhóm",
		administration: "Quản trị",

		/* Home Page */
		recent_activity: "Hoạt động gần đây",
		repos_and_wrksp: "Kho lưu trữ và vùng nhóm",
		workspaces: "Vùng nhóm",
		repositories: "Kho lưu trữ",
		templates: "Mẫu",
		favorites: "Yêu thích",
		my_checkouts: "Kiểm xuất của tôi",
		mySyncedFiles: "Tập tin đồng bộ của tôi",
		links: "Liên kết",
		name_label: "Tên",
		description_label: "Mô tả:",
		type_label: "Kiểu:",
		type_heading: "Kiểu",
		type_id_label: "ID kiểu",
		server_type_icon: "Biểu tượng kiểu máy chủ",
		server_type_heading: "Kiểu máy chủ",
		server_type: "Kiểu máy chủ",
		port_heading: "Số cổng",
		port_label: "Số cổng:",
		server_name_heading: "Tên máy chủ",
		server_label: "Tên máy chủ:",
		server_url_label: "URL máy chủ:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Ðã kết nối:",
		repository_label: "Kho lưu trữ",
		modified_label: "Ðược điều chỉnh bởi:",
		modified_date_label: "Ðược điều chỉnh vào:",
		status_label: "Trạng thái:",
		last_modified_label: "Ðiều chỉnh lần cuối bởi:",

		modifier: "Ðược điều chỉnh bởi",
		modified_date: "Ðược điều chỉnh vào",

		/* Favorites */
		new_favorite_label: "Thêm vào Yêu thích",
		edit_favorite_label: "Ðặt lại tên yêu thích",
		remove_favorite_label: "Xóa khỏi yêu thích",
		missing_alias_message: "Phải định rõ tên.",
		sync_favorite_enable_hover: "Mục này cho phép đồng bộ.",
		sync_favorite_disable_hover: "Mục này đang không được đồng bộ.",
		sync_favorite_sync_unavailable_hover: "Không có đồng bộ đối với kiểu đối tượng này.",
		sync_enable_label: "Ðồng bộ mục này",
		sync_enable_label_hover: "Mục này sẽ được đồng bộ với thiết bị của bạn.",
		delete_favorite_confirmation_question: "Bạn có muốn xóa mục này khỏi yêu thích không?",
		alias_label: "Tên:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Ðã có mục được chọn trong yêu thích.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Không thể thêm mục này vào danh sách yêu thích.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Chỉ có thể lưu trữ ${0} yêu thích.",
		add_favorite_max_reached_response: "Nếu muốn thêm mục này vào danh sách yêu thích, phải xóa một yêu thích đang tồn tại trước khi thêm mục này.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Không thể chuyển tài liệu đã chọn sang dạng PDF.",
		download_as_pdf_max_content_error_explanation: "Bạn chỉ có thể chuyển ${0} MB dữ liệu sang dạng PDF. Tuy nhiên, tài liệu đã chọn vượt quá ${0} MB.",
		download_as_pdf_max_content_error_response: "Chọn ít tài liệu hơn hoặc chọn tài liệu nhỏ hơn và tải xuống lại tài liệu ở dạng PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Không thể chuyển các tài liệu đã chọn thành một tập tin PDF duy nhất.",
		download_as_pdf_mimetype_check_error_explanation: "Để chuyển đổi tài liệu có nhiều phần thành một tập tin PDF duy nhất, mỗi phần phải có cùng kiểu MIME.",
		download_as_pdf_mimetype_check_error_response: "Chọn tài liệu khác để chuyển đổi sang PDF.",

		/* Activity Stream */
		show_label: "Hiện:",
		all_filter: "Tất cả",
		notifications_filter: "Thông báo",
		workitems_filter: "Mục công việc",
		documentes_filter: "Tài liệu",
		all_favorites_filter: "Tất cả yêu thích",
		folders_filter: "Thư mục",
		searches_filter: "Tìm kiếm",
		teamspaces_filter: "Vùng nhóm",

		/* Repository */
		all_search_templates: "Tất cả tìm kiếm",
		all_od_searches: "Mẫu tất cả tìm kiếm",
		recent_searches: "Tìm kiếm gần đây",
		opened_searches: "Tìm kiếm đã mở",

		all_worklists: "Tất cả hộp thư đến",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Danh sách từng danh sách công việc",

		/* Teamspace */
		all_workspaces: "Tất cả vùng nhóm",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Danh sách từng vùng nhóm",
		workspace_title: "Vùng nhóm",
		workspace_icon: "Biểu tượng vùng nhóm",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Khả dụng",
		workspace_stat_offline: "Không có sẵn",
		workspace_stat_validate: "Yêu cầu xác thực",
		workspace_stat_pendingDelete: "Xóa đang chờ xử lý",
		workspace_stat_deleteError: "Không thể xóa",

		undefined_value: "Không được xác định",
		undefined_reference_value: "Không xác định được tham chiếu.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Có thể có nhiều kết quả hơn trên máy chủ.",
		search_all_data: "Tìm kiếm tất cả dữ liệu.",
		search_all_teamspaces: "Tìm kiếm tất cả vùng nhóm.",
		teamspace_filter_results: "Hiện ${0} kết quả. ",
		displaying_filtered_results: "Hiện tất cả kết quả đã lọc. ",
		displaying_recent_results: "Chỉ hiện vùng nhóm đã được điều chỉnh trong vòng ${0} ngày vừa qua. Ðể tìm các vùng nhóm khác, lọc danh sách vùng nhóm theo tên hoặc theo mô tả. ",
		clear_filter: "Xóa bộ lọc.",

		/* FolderTreeModel */
		move_item_task: "Di chuyển mục",
		copy_item_task: "Sao chép mục",
		add_item_task: "Thêm mục",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Không tìm thấy thư mục sau: ${0}. Có thể thư mục đã bị xóa, hoặc không thể mở thư mục từ dạng xem này. Nhấp vào Thêm liên kết từ hiển thị cây để điều hướng đến thư mục. Nếu không thể xem thư mục, làm mới lại xem danh sách nội dung.",
		more_paging_link: "thêm ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Trạng thái",
		status_dialog_cancel_label: "Hủy",

		/* ErrorDialog */
		error_dialog_title: "Lỗi",
		error_dialog_icon_tooltip: "Lỗi",
		error_dialog_stack_trace_title: "Theo dõi ngăn xếp",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Xác nhận",

		close_browser_msg: "Ðóng cửa sổ trình duyệt.",

		/* MessageDialog */
		message_dialog_title: "Thông tin",
		warning_dialog_title: "Cảnh báo",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Chào mừng đến ${0}",
		server: "Kho lưu trữ:",
		username: "Tên người dùng:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Cần phải có tên người dùng để đăng nhập vào kho lưu trữ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Cần phải có mật khẩu để đăng nhập vào kho lưu trữ",
		password: "Mật khẩu:",
		login: "Ðăng nhập",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Phiên đã hết hạn. Hãy đăng nhập lại.",
		login_repository_connection_expired_message: "Kết nối với kho lưu trữ ${0} đã hết hạn. Hãy đăng nhập lại.",
		login_site_connection_expired_message: "Kết nối đến trang của bạn đã hết hạn. Hãy đăng nhập lại.",
		login_new_server_message: "Nhập tên người dùng và mật khẩu cho ${0}.",
		login_error_more_information_message: "Thêm thông tin",

		disconnect_box_account_user: "Ngắt kết nối tài khoản Box: ${0}",
		disconnect_box_account: "Ngắt kết nối tài khoản Box",
		disconnect_box_accounts: "Ngắt kết nối các tài khoản Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Yêu cầu phải có kết nối SSL để truy cập kho lưu trữ Box.",
		login_oauth_popup_blocked: "Cửa sổ pop-up đã bị chặn. Có thể bạn phải hủy chặn các pop-up trong trình duyệt của bạn để đăng nhập.",
		login_oauth_click_here: "Nếu bạn không được điều hướng lại trong 5 giây, hãy nhấp vào đây.",
		login_oauth_title: "Ðăng nhập",
		login_oauth_grant_intro: "Cấp xác thực cho ${0}.",
		login_pane_oauth_click_here: "Nhấp vào đây để đăng nhập.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Bạn có muốn đăng xuất web khách không?",
		logout_confirmation_button: "Ðăng xuất",

		/* ChangeLocaleDialog */
		change_locale: "Thay đổi cài đặt ngôn ngữ và bản địa",
		change_locale_use_browser_language: "Dùng cài đặt ngôn ngữ trình duyệt (Mặc định)",
		change_locale_use_browser_locale: "Dùng cài đặt ngôn ngữ trình duyệt (Mặc định)",
		change_locale_description: "Nếu xóa cookie trình duyệt, phải đặt lại cài đặt ngôn ngữ và bản địa.",
		change_locale_language_locale: "Ngôn ngữ ứng dụng:",
		change_locale_language_locale_hover: "Cài đặt này thay đổi ngôn ngữ của văn bản trong web khách nhưng không thay đổi ngôn ngữ của tài liệu trong ứng dụng.<br><br>Cài đặt mặc định dùng ngôn ngữ được xác định trong tùy chọn cấu hình trình duyệt web của bạn.",
		change_locale_value_format_locale: "Bản địa ứng dụng:",
		change_locale_value_format_locale_hover: "Bản địa quyết định định dạng ngày, giờ và số trong web khách.<br><br>Cài đặt mặc định dùng định dạng liên kết với ngôn ngữ được xác định trong tùy chọn cấu hình trình duyệt web của bạn.",
		change_locale_for_office: "Thiết lập văn bản hai chiều:",
		change_locale_bidi_support_flag: "Bật hỗ trợ hai hướng",
		change_locale_bidi_support_flag_hover: "Khi bật hỗ trợ hai hướng, người dùng có thể đặt hướng văn bản sử dụng trong trường đầu vào.  Văn bản đã nhập cho các mục như thư mục có thể hiển thị cùng hướng như đã nhập.",
		change_locale_base_text_direction: "Hướng văn bản cơ sở cho nội dung:",
		change_locale_base_text_direction_hover: "Ðặt hướng của nội dung được nhập vào trường đầu vào.  Việc này cũng kiểm soát hướng hiển thị của nhãn đã được người dùng nhập, ví dụ như tên thư mục.",
		change_locale_calendar_type: "Kiểu lịch:",
		change_locale_calendar_type_hover: "Chọn kiểu lịch sẽ dùng cho phiên người dùng.",
		change_locale_base_text_direction_default: "Mặc định",
		change_locale_base_text_direction_ltr: "Trái sang phải",
		change_locale_base_text_direction_rtl: "Phải sang trái",
		change_locale_base_text_direction_contextual: "Theo ngữ cảnh",
		change_locale_calendar_type_gregorian: "Theo dạng Gregory",
		change_locale_calendar_type_hijri: "Theo dạng Hồi giáo",
		change_locale_calendar_type_hebrew: "Do thái",
		change_locale_calendar_type_Umm_al_Qura: "Theo dạng Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Thay đổi mật khẩu",
		change_password_title: "Thay đổi mật khẩu",
		change_password_expired_title: "Mật khẩu hết hạn",
		change_password_message: "Nhập mật khẩu mới.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Mật khẩu đã hết hạn. Nhập mật khẩu mới.",
		change_password_password_rules: "Quy tắc về mật khẩu",
		change_password_old_password: "Mật khẩu cũ:",
		change_password_new_password: "Mật khẩu mới:",
		change_password_confirm_password: "Xác nhận mật khẩu:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Phải nhập mật khẩu cũ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Phải nhập mật khẩu mới.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Phải xác nhận mật khẩu mới.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Mật khẩu phải khớp.",

		/* GlobalToolbar */
		actions: "Thao tác",
		actions_label: "Thao tác:",
		open_actions_label: "Mở thao tác:",

		/* About Dialog */
		about_dialog_title: "Giới thiệu",
		about_product_name_label: "Tên sản phẩm: ",
		about_product_version_label: "Phiên bản: ",
		about_product_build_label: "Tạo: ",
		about_product_license: "Tài liệu được cấp phép - Tài sản của IBM Corp. &copy; Bản quyền IBM Corp. 2012, 2016. Bảo lưu mọi quyền. Quyền bị giới hạn của người dùng của chính phủ Hoa Kỳ. Sử dụng, sao chép hoặc tiết lộ bị giới hạn bởi Hợp đồng Danh mục GSA ADP với IBM Corporation. IBM và logo IBM là thương hiệu được đăng ký của International Business Machine Corporation tại Hoa Kỳ, các quốc gia khác hoặc cả hai. Chương trình này được cấp phép theo điều khoản của thỏa thuận cấp phép kèm theo Chương trình. Thỏa thuận cấp phép này có thể nằm trong một thư mục hoặc thư viện của Chương trình được đặt tên là \"License\" or \"Non_IBM_License\", nếu có, hoặc được cung cấp ở dạng bản in. Vui lòng đọc kỹ thỏa thuận này trước khi sử dụng Chương trình. Sử dụng Chương trình này nghĩa là bạn đã đồng ý với các điều khoản này. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Bạn có muốn xóa mục chọn không?",
		delete_single_folder_confirmation_question: "Bạn có muốn xóa thư mục ${0} không?",
		delete_multiple_confirmation_question: "Bạn có muốn xóa mục chọn không?<br>${0} mục được chọn.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Xóa",
		search_template_delete_confirmation_question: "Bạn có muốn xóa tìm kiếm ${0} không?",
		search_template_opened_delete_confirmation_question: "Tìm kiếm ${0} được mở. Tìm kiếm sẽ đóng nếu bị xóa.<br>Bạn có muốn xóa tìm kiếm này không?",
		delete_multiple_opened_search_template_confirmation_question: "Các tìm kiếm sau được mở: ${0}.<br>Tìm kiếm sẽ đóng nếu bị xóa. Bạn có muốn xóa các tìm kiếm này không?",
		delete_large_number_items_confirmation_question: "Bạn đã chọn ${0} mục cần được xóa.<br/>Xóa một số lượng lớn mục có thể mất nhiều thời gian.<br/>Bạn có muốn tiếp tục không?",
		delete_confirmation_entrytemplate: "Nếu xóa mẫu nhập này, sẽ có ảnh hưởng sau đây lên tài liệu hoặc thư mục liên kết với mẫu nhập:<ul><li>Mục sẽ không còn liên kết với mẫu nhập và người dùng có thể thấy cảnh báo khi cập nhật mục.</li><li>Bất kỳ thuộc tính nào do mẫu nhập kiểm soát, ví dụ như tên hoặc thứ tự thuộc tính, sẽ không còn áp dụng cho mục có liên kết với mẫu nhập.</li></ul>Bạn có muốn xóa mẫu nhập này không?",
		delete_confirmation_entrytempalte_with_multi_items: "Phải xóa riêng biệt từng mẫu nhập. Mẫu nhập đã được xóa khỏi danh sách mục để xóa. Nếu muốn xóa mẫu nhập, bạn phải xóa riêng biệt từng mẫu nhập.",

		/* Create/Apply/Remove Hold */
		hold: "Mục giữ lại",
		createHold: "Mục giữ lại mới",
		applyHold: "Áp dụng mục giữ lại",
		removeHold: "Xóa mục giữ lại",
		showHolds_title: "Hiện mục giữ lại",
		applyHoldSelectText: "Chọn mục giữ lại muốn áp dụng cho các mục đã chọn.",
		availableHolds: "Mục giữ lại có sẵn:",
		removeHoldSelectText: "Chọn mục giữ lại muốn xóa từ các mục đã chọn.",
		appliedHolds: "Mục giữ lại đã áp dụng:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Tạo mục giữ lại mới để áp dụng cho các mục đã chọn.",
		holdName: "Tên mục giữ lại:",
		holdDescription: "Mô tả:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Phải định rõ tên mục giữ lại.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Ðã tồn tại tên mục giữ lại được xác định.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Tên mục giữ lại không thể chứa bất kỳ ký tự nào sau đây : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Phiên của bạn sẽ hết hạn sau ${0} phút.",
		session_expire: "Phiên đang hết hạn",
		logoff: "Ðăng xuất",
		extend_session: "Gia hạn phiên",
		admin_custom_settings: "Cài đặt bổ sung:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning là giá trị kiểu boolean cho biết cảnh báo phiên hết hạn có được bật hay không, giá trị mặc định là có (true). sessionExpireWarningTime là số nguyên từ 2 đến 5 dùng để chỉ định thời gian cảnh báo phiên hết hạn.",
		admin_custom_setting_dialog_title_new: "Cài đặt mới",
		admin_custom_setting_dialog_title_edit: "Chỉnh sửa cài đặt",
		admin_custom_setting_dialog_hover_help: "Thêm các tham số khác bằng cách định rõ giá trị và tên tham số. Ví dụ, bạn có thể chỉ định “enableSessionExpireWarning” và “true” nếu muốn bật cảnh báo phiên hết hạn.",
		admin_custom_setting_dialog_field_hover_help: "Ðể biết thêm thông tin về tên và giá trị tham số, xem Tài liệu Tham khảo Tham số IBM navigator.",
		admin_custom_setting_dialog_nameInvalid: "Giá trị này được yêu cầu. Giá trị không thể có khoảng trắng và không thể trùng lắp.",
		admin_custom_setting_dialog_bool_valueInvalid: "Giá trị này được yêu cầu. Giá trị này phải thuộc kiểu boolean.",
		admin_custom_setting_dialog_int_valueInvalid: "Giá trị này được yêu cầu. Giá trị này phải là số nguyên.",
		/* Add Document Dialog */
		add_document_dialog_title: "Thêm tài liệu",
		add_documents_dialog_title: "Thêm tài liệu",
		add_document_general_label: "Chung",
		add_document_properties_label: "Thuộc tính",
		add_document_properties_with_ellipsis_label: "Thuộc tính...",
		add_document_security_label: "Bảo mật",
		add_document_location_label: "Lưu vào:",
		add_document_type_label: "Bạn muốn lưu gì?",
		add_document_localfile_label: "Tài liệu nội bộ",
		add_document_metadata_label: "Thông tin về tài liệu",
		add_document_external_label: "Liên kết đến tài liệu ngoài",
		add_document_web_link_label: "Liên kết web",
		add_document_saved_content_label: "Sử dụng tập tin đã lưu:",
		add_document_saved_content_choice: "Tập tin đã lưu",
		add_document_file_name_label: "Tên tập tin:",
		add_document_entry_template_label: "Mẫu mục nhập:",
		add_document_delete_file_label: "Xóa tập tin nội bộ",
		add_document_delete_file_disabled_label: "Tập tin không ở trong thư mục theo dõi tập tin sẽ không được xóa.",
		add_document_major_version_label: "Phiên bản chính",
		add_document_major_version_hover: "Ðặt trạng thái tài liệu là Đã phát hành. Tài liệu được thêm vào kho lưu trữ ở dạng phiên bản 1.0. Nếu không chọn tùy chọn, tài liệu sẽ không sẵn sàng để phát hành và được thêm vào ở dạng phiên bản phụ 0.1.",
		add_document_save_document_as_unfiled_label: "Không lưu tài liệu trong một thư mục",
		add_document_save_document_as_unfiled_hover: "Nếu chọn tùy chọn này, chỉ có thể tìm thấy tài liệu bằng cách tìm kiếm. Không thể duyệt tài liệu.",
		add_document_create_new_version_label: "Tạo phiên bản mới",
		add_document_replace_existing_version_label: "Thay thế phiên bản đang tồn tại",
		add_document_start_workflow_label: "Khởi chạy luồng công việc",
		add_document_auto_classify_label: "Tự động phân loại nội dung",
		add_document_add_label: "Thêm",
		add_document_cancel_label: "Hủy",
		add_document_document_type_label: "Lớp",
		add_document_context_info: "Không thể dùng giá trị đã nhập cho thuộc tính tài liệu để tìm tài liệu về sau.",
		add_documents_context_info: "Có thể dùng giá trị đã nhập cho tài liệu để tìm tài liệu về sau. Nếu cần nhập một giá trị thuộc tính khác cho tài liệu, phải thêm giá trị này riêng biệt hoặc sửa thuộc tính tài liệu sau khi thêm.",
		add_document_url_label: "URL:",
		add_document_template_description: "Mô tả mẫu:",
		add_document_select_entry_template: "Nhập hoặc chọn mẫu nhập",
		add_document_no_permission_to_associations: "Bạn không có quyền sử dụng mẫu nhập",
		add_document_no_entry_template_to_use: "Không có mẫu nhập có thể dùng cho các tập tin đã chọn",
		add_document_no_entry_template_itemtype_permission: "Bạn không thể thêm các mục vào thư mục này. Mẫu nhập phải được chọn và bạn không có truy cập vào bất kỳ mẫu nhập nào liên kết với thư mục này. Liên hệ quản trị viên hệ thống và yêu cầu được cấp quyền truy cập vào các mẫu nhập liên kết với thư mục này.",
		add_document_appgroup_name_label: "Tên nhóm ứng dụng:",
		add_document_app_name_label: "Tên ứng dụng:",
		create_folder_dialog_title: "Thư mục mới",
		create_folder_context_info: "Có thể dùng giá trị đã nhập cho thuộc tính thư mục để tìm thư mục về sau.",
		create_folder_folder_name_label: "Tên thư mục",
		create_folder_save_folder_as_unfiled_label: "Không lưu thư mục trong một thư mục khác",
		create_folder_save_folder_as_unfiled_hover: "Nếu chọn tùy chọn này, chỉ có thể tìm thư mục này bằng cách tìm kiếm. Không thể duyệt tài liệu.",
		add_item_create_in_folder: "Tạo trong thư mục:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Tên thư mục không thể chứa bất kỳ ký tự nào sau đây: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Tên thư mục không thể chứa bất kỳ ký tự nào sau đây: \\ / và không thể bằng . hoặc ..",
		invalid_box_file_name_message: "Tên tập tin không thể chứa bất kỳ ký tự nào sau đây: \\ / và không thể bằng . hoặc ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Tên tập tin không thể chứa bất kỳ ký tự nào sau đây: \\ / : * ? \" < > |",
		external_document_placeholder: "Nhập URL của tài liệu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Màu phải được nhập ở định dạng số thập lục phân có 3 hoặc 6 chữ số, ví dụ như #000 hoặc #000000.",
		add_document_unfiled: "${0} hủy lưu",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Thêm tài liệu bằng mẫu nhập",
		add_document_using_template_context_info: "Khi thêm tài liệu bằng cách dùng mẫu nhập, giá trị nhập cho tài liệu là thống nhất.",
		add_documents_using_template_dialog_title: "Thêm tài liệu bằng mẫu nhập",
		add_documents_document_name_is_file_name_hint: "Tên tập tin sẽ được dùng cho thuộc tính này",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Thư mục mới bằng cách dùng mẫu nhập",
		create_folder_using_template_context_info: "Khi tạo một thư mục bằng cách dùng mẫu nhập, giá trị nhập cho thư mục là thống nhất.",

		add_documents_batch_results_dialog_title: "Tài liệu không được thêm vào kho lưu trữ",
		add_documents_batch_results_dialog_context_info: "Các tài liệu sau đây không được thêm vào kho lưu trữ. Chọn tài liệu và nhấp Chi tiết để biết thêm thông tin về việc tại sao tài liệu không được thêm vào kho lưu trữ.",
		add_documents_batch_results_dialog_filename_col_hdr: "Tên tập tin",
		add_documents_batch_results_dialog_status_col_hdr: "Trạng thái",
		add_documents_batch_results_dialog_message_col_hdr: "Thông báo",
		add_documents_batch_results_status_error: "Lỗi",
		add_documents_batch_results_status_cancelled: "Ðã hủy",
		add_documents_batch_results_status_cancelled_msg: "Tài liệu không được thêm vì yêu cầu đã bị hủy.",

		add_documents_batch_status_title: "Ðang thêm tài liệu",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Ðang thêm tập tin ${0} của ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Lỗi: ${0}",
		add_documents_batch_status_completing_msg: "Quy trình sẽ dừng sau khi thêm tài liệu này.",

		add_documents_status_uploading_msg: "Ðang tải lên tập tin ${0} của ${1}...",
		add_documents_status_adding_msg: "Ðang thêm tập tin ${0} của ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Mẫu nhập được cấu hình trong một ứng dụng khác và được cấu hình để luôn khai báo tài liệu ở dạng bản ghi. Tuy nhiên, cài đặt này bị bỏ qua vì web khách không hỗ trợ khai báo tài liệu ở dạng bản ghi.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Mẫu nhập được cấu hình trong một ứng dụng khác và được cấu hình để bạn sẽ quyết định có nên khai báo tài liệu này ở dạng bản ghi hay không. Tuy nhiên, cài đặt này bị bỏ qua vì web khách không hỗ trợ khai báo tài liệu ở dạng bản ghi.",
		no_selection: "&lt;Chọn&gt;",

		batch_results_dialog_details_label: "Chi tiết",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Giá trị không hợp lệ. Giá trị phải là một mã nhận dạng duy nhất toàn cầu (GUID), ví dụ, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Giá trị không hợp lệ. Giá trị phải là một số dấu chấm động, ví dụ 1.2 hoặc 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Giá trị không hợp lệ. Giá trị phải ở định dạng ${0}, ví dụ, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Giá trị không hợp lệ. Giá trị phải là giá trị thập phân, ví dụ, 1.2 hoặc 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Giá trị không hợp lệ. Giá trị phải là một số nguyên, ví dụ, 5 hoặc 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Giá trị không hợp lệ. Giá trị chỉ có thể chứa các ký tự chữ, ví dụ a-z và A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Giá trị không hợp lệ. Giá trị chỉ có thể chứa các ký tự chữ và số, ví dụ a-z, A-Z và 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Giá trị không hợp lệ. Giá trị chỉ có thể chứa các ký tự số, ví dụ 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Giá trị không hợp lệ. Giá trị chỉ có thể chứa các ký tự sau đây: a-z, A-Z, 0-9, [khoảng trắng] và `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Giá trị không hợp lệ. Giá trị phải là ngày có định dạng sau đây: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Giá trị không hợp lệ. Giá trị phải là giờ có định dạng sau đây: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Giá trị không hợp lệ. Chọn giá trị từ trình đơn thả xuống.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Giá trị không hợp lệ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Giá trị không hợp lệ. Giá trị phải có định dạng sau: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Giá trị này được yêu cầu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Giá trị quá dài. Thuộc tính hỗ trợ độ dài tối đa là ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Giá trị quá ngắn. Thuộc tính hỗ trợ độ dài tối thiểu là ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Giá trị nằm ngoài phạm vi. Giá trị phải là số dấu chấm động trong khoảng ${0} và ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Giá trị nằm ngoài phạm vi. Giá trị phải là giá trị thập phân trong khoảng ${0} và ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Giá trị nằm ngoài phạm vi. Giá trị phải là số nguyên trong khoảng ${0} và ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Giá trị phải là ngày trong khoảng ${0} và ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Giá trị nằm ngoài phạm vi. Giá trị phải là ngày trong khoảng ${0} và ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Giá trị nằm ngoài phạm vi. Giá trị phải là giờ trong khoảng ${0} và ${1}.",
		property_and: "và",

		property_invalidValueOrRequired: "Giá trị sau đây không hợp lệ hoặc được yêu cầu: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Thuộc tính",
		edit_properties_dialog_info: "Có thể xem hoặc sửa thuộc tính của mục này. Nếu có quyền phù hợp, bạn cũng có thể điều chỉnh bảo mật của mục. Tuy nhiên, không thể thay đổi thuộc tính hệ thống.",
		edit_properties_od_dialog_info: "Có thể xem hoặc sửa thuộc tính của mục này. Tuy nhiên, không thể thay đổi thuộc tính hệ thống.",
		system_properties_title: "Thuộc tính hệ thống",
		custom_properties_title: "Thuộc tính",
		/* Folder collaboration tab */
		box_permission_permission: "Quyền",
		box_permission_permissions: "Quyền",
		box_permission_editor: "Người chỉnh sửa",
		box_permission_owner: "Chủ sở hữu",
		box_permission_co_owner: "Người cùng sở hữu",
		box_permission_viewer_uploader: "Người tải lên và xem",
		box_permission_previewer_uploader: "Người tải lên và xem trước",
		box_permission_viewer: "Trình xem",
		box_permission_previewer: "Người xem trước",
		box_permission_uploader: "Người tải lên",
		box_permission_add: "Thêm",
		box_permission_upload: "Tải lên",
		box_permission_download: "Tải xuống",
		box_permission_preview: "Xem trước",
		box_permission_view: "Hiện",
		box_permission_send_links: "Gửi liên kết chỉ xem",
		box_permission_create_subfolders: "Tạo thư mục con",
		box_permission_create_tasks: "Tạo tác vụ",
		box_permission_add_comments: "Thêm đánh giá",
		box_collaboration_invite_placeholder: "Nhập tên, email, hoặc nhóm để mời",
		box_collaboration_invite_placeholder_non_admin: "Nhập email để mời",
		box_collaboration_invalid_email: "Nhập địa chỉ email hợp lệ",
		box_collaboration_user_already_present: "Người dùng này đã là người cộng tác trên thư mục",
		box_collaboration_user_name: "Tên",
		box_collaboration_email_address: "Ðịa chỉ email",
		box_collaboration_date_added: "Ngày thêm",
		box_collaboration_remove_collaboration: "Xóa",
		box_collaboration_remove_collaboration_title: "Xóa",
		box_collaboration_no_collaborators: "Không có người cộng tác",
		box_collaboration_change_owner_title: "Thay đổi người sở hữu mục",
		box_collaboration_change_owner_prompt: "Nếu cho người cộng tác này làm Chủ thư mục thì bạn trở thành Người chỉnh sửa và không còn sở hữu thư mục này nữa. Người cộng tác nào được thêm trực tiếp vào thư mục này sẽ thấy nó trong thư mục gốc của họ. Người cộng tác nào được thêm ở cấp thư mục cha hoặc cao hơn sẽ không còn là người cộng tác. Bạn có muốn tiếp tục không?",
		box_collaboration_remove_self_title: "Loại bỏ bản thân",
		box_collaboration_remove_self_prompt: "Bạn có chắc là muốn loại bỏ bản thân khỏi cương vị người cộng tác không? Bạn sẽ không còn quyền truy cập thư mục này.",
		box_collaboration_user: "Người dùng",
		box_collaboration_group: "Nhóm",
		box_managing_users_not_configured: "Bạn không thể tìm kiếm người dùng và nhóm vì cấu hình ứng dụng Box không đúng. Ðể sử dụng tính năng này, hãy liên hệ quản trị viên của bạn và yêu cầu cấu hình ứng dụng Box để quản lý người dùng và nhóm.",
		duplicate_value_error: "Mỗi giá trị trong thuộc tính này phải là duy nhất.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Bất kỳ thay đổi nào thực hiện trong các trường sau đây đều sẽ áp dụng cho tất cả mục đã chọn. Nếu cần nhập một giá trị thuộc tính khác cho một mục cụ thể hoặc sửa bảo mật của mục, phải sửa từng thuộc tính của mục.",
		multi_edit_properties_class_label: "Lớp:",
		multi_edit_properties_items_label: "Tên mục:",
		multi_edit_properties_properties_label: "Thuộc tính:",
		multi_edit_batch_status_title: "Cập nhật thuộc tính",
		multi_edit_batch_status_adding_msg: "Ðang cập nhật mục ${0} của ${1}...",
		multi_edit_batch_status_verifying_msg: "Ðang xác minh mục ${0} của ${1}...",
		multi_edit_batch_status_completing_msg: "Quy trình sẽ dừng sau khi cập nhật mục này.",
		multi_edit_batch_status_validation_completing_msg: "Quy trình sẽ dừng sau khi xác minh mục này.",
		multi_edit_batch_results_status_error: "Lỗi",
		multi_edit_batch_results_status_cancelled: "Ðã hủy",
		multi_edit_batch_results_status_cancelled_msg: "Mục không được cập nhật vì yêu cầu đã bị hủy.",
		multi_edit_batch_results_dialog_title: "Mục không được cập nhật",
		multi_edit_batch_results_dialog_context_info: "Các mục sau đây không được cập nhật. Chọn tên mục và nhấp Chi tiết để biết thêm thông tin về việc tại sao mục không được cập nhật.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Tên mục",
		multi_edit_batch_results_dialog_status_col_hdr: "Trạng thái",
		multi_edit_batch_results_dialog_message_col_hdr: "Thông báo",
		multi_edit_batch_status_errors_msg: "Lỗi: ${0}",
		multi_edit_batch_permission_error_text: "Không thể lưu các thay đổi ở thuộc tính.",
		multi_edit_invalid_value_error: "Giá trị này phụ thuộc vào một giá trị thuộc tính khác và không hợp lệ với các mục đã chọn.",
		multi_edit_batch_permission_error_explanation: "Bạn không thể điều chỉnh thuộc tính của mục này vì không có đủ đặc quyền.",
		multi_edit_no_modifiable_properties: "Không thể điều chỉnh thuộc tính của mục đã chọn. Ðiều này có thể xảy ra khi mục chỉ gồm các thuộc tính chỉ đọc hoặc khi tên hoặc tiêu đề mục là có thể sửa. Khi chọn nhiều mục, không thể điều chỉnh tên hoặc tiêu đề mục.",
		multi_edit_mult_classes_dialog_info: "Mục đã chọn nằm trên các kho lưu trữ khác nhau hoặc thuộc các lớp khác nhau. Chỉ có thể sửa các mục nằm trong cùng lớp hoặc trên cùng kho lưu trữ. Chọn tập con của mục muốn sửa.",
		multi_edit_class_selector_class_heading: "Lớp",
		multi_edit_class_selector_entry_template_heading: "Mẫu nhập",
		multi_edit_class_selector_repository_heading: "Kho lưu trữ",
		multi_edit_class_selector_items_heading: "Mục",
		multi_edit_some_classes_not_displayed: "Một số mục đã chọn không được gồm trong danh sách này vì mục chỉ chứa thuộc tính chỉ đọc hoặc vì mục nằm trên các kho lưu trữ không hỗ trợ sửa thuộc tính.",
		multi_edit_properties_invalid_msg: "Một số giá trị thuộc tính không hợp lệ cho tất cả mục đã chọn.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Đây là thuộc tính chỉ đọc và không thể điều chỉnh.",
		multi_edit_append_checkbox_label: "Gắn kèm",
		multi_edit_append_checkbox_tooltip: "Chọn tùy chọn này nếu muốn gắn thêm giá trị mới vào các giá trị hiện có thay vì thay thế các giá trị này.",
		multi_edit_properties_invalid_childcomponent_msg: "Một số giá trị trong thuộc tính ${0} của thành phần con ${1} phụ thuộc vào các thuộc tính khác và không còn hợp lệ với các lựa chọn của bạn. Xóa giá trị trong thành phần con ${1} hoặc thay đổi thuộc tính ở các mục mà bạn đã chọn riêng biệt.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Xuất thuộc tính",
		export_properties_dialog_info: "Chọn thuộc tính muốn xuất và định rõ thứ tự hiển thị các thuộc tính này.",
		export_properties_dialog_export_button_label: "Xuất",
		export_properties_dialog_export_raw_values: "Xuất giá trị thô",

		/* Properties */
		filter_clear_tooltip: "Xóa bộ lọc",
		properties_new_row: "Mới",
		properties_requiredClass_document_tooltip: "Chọn tài liệu. Tài liệu phải thuộc lớp ${0}.",
		properties_requiredClass_folder_tooltip: "Chọn thư mục. Thư mục phải thuộc lớp ${0}.",
		properties_dataType_tooltip: "Loại dữ liệu: ${0}",
		properties_maxLength_tooltip: "Ðộ dài tối đa: ",
		properties_minLength_tooltip: "Ðộ dài tối thiểu: ",
		properties_minValue_tooltip: "Giá trị tối thiểu: ",
		properties_maxValue_tooltip: "Giá trị tối đa: ",
		properties_format_tooltip: "Ðịnh dạng: ",
		properties_description_tooltip: "Mô tả: ",

		properties_type_boolean_tooltip: "Kiểu Boolean",
		properties_type_date_tooltip: "Ngày",
		properties_type_time_tooltip: "Thời gian",
		properties_type_timestamp_tooltip: "Nhãn thời gian",
		properties_type_decimal_tooltip: "Giá trị thập phân",
		properties_type_double_tooltip: "Số thực dấu chấm động",
		properties_type_short_tooltip: "Số nguyên",
		properties_type_integer_tooltip: "Số nguyên",
		properties_type_long_tooltip: "Số nguyên",
		properties_type_string_tooltip: "Chuỗi văn bản",
		properties_type_string_alpha_tooltip: "Chuỗi chữ",
		properties_type_string_alphanum_tooltip: "Chuỗi số và chữ",
		properties_type_string_ext_tooltip: "Chuỗi số và chữ mở rộng",
		properties_type_string_num_tooltip: "Chuỗi số",
		properties_type_binary_tooltip: "Nhị phân",
		properties_type_object_tooltip: "Ðối tượng",
		properties_type_reference_tooltip: "Thuộc tính này tham chiếu một mục khác trong kho lưu trữ.",
		properties_type_guid_tooltip: "Mã nhận dạng duy nhất toàn cầu",
		properties_type_group_tooltip: "Người dùng và nhóm",
		properties_type_user_tooltip: "Người dùng",
		properties_type_childComponent_tooltip: "Thành phần con",

		properties_childComponent_minCardinalityOnly_tooltip: "Thuộc tính này phải có ít nhất ${0} giá trị.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Thuộc tính này không thể có nhiều hơn ${0} giá trị.",
		properties_childComponent_minMaxCardinality_tooltip: "Thuộc tính này phải có ít nhất ${0} giá trị và không nhiều hơn ${1} giá trị.",
		properties_childComponent_noCardinality_tooltip: "Thuộc tính này có thể có số lượng giá trị bất kỳ.",

		properties_type_guid_example_tooltip: ", ví dụ {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Chọn giá trị từ danh sách.",
		properties_single_select_choice_tooltip: "Chọn giá trị.",
		properties_multiple_select_typein_tooltip: "Nhập một hoặc nhiều giá trị.",
		properties_multiple_select_choice_tooltip: "Chọn một hoặc nhiều giá trị.",
		properties_not_selectable_tooltip: "Không thể chọn danh mục.",
		properties_none: "Không có",
		properties_none_tooltip: "Chọn <i>Không</i> để xóa giá trị hiện tại của thuộc tính này.",
		properties_value_empty: "Không có giá trị",
		properties_value_read_only: "Chỉ đọc",
		properties_clear_label: "Xóa",
		properties_clear_tooltip: "Xóa giá trị trong trường này sẽ xóa giá trị trong kho lưu trữ sau khi nhấp <b>Lưu</b>.",
		properties_box_custom_properties: "Thuộc tính tùy chỉnh",
		properties_box_metadata_name_in_use: "Tên này đã được sử dụng từ trước. Nhập tên khác cho thuộc tính tùy chỉnh.",

		properties_templates: "Mẫu",
		properties_add_template: "Thêm mẫu",
		properties_remove_template: "Xóa",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Kiểm nhập",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Kiểm nhập",
		checkin_cancel_label: "Hủy",
		checkin_file_name_label: "Tên tập tin",
		checkin_document_status_title: "Kiểm nhập tài liệu",
		checkin_document_status_uploading_msg: "Ðang tải lên tập tin...",
		checkin_document_status_checkingin_msg: "Ðang kiểm nhập tập tin...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Chọn chế độ biên tập",
		viewer_redaction_new_document_confirmation_question: "Bạn muốn lưu nội dung soạn thảo làm tài liệu mới hay là tập tin cục bộ?",
		viewer_redaction_new_version_confirmation_question: "Bạn có muốn lưu nội dung soạn thảo làm phiên bản mới không?",
		viewer_redaction_new_version_confirmation_question_never: "Bạn có muốn lưu nội dung soạn thảo làm nội dung mới không?",		
		viewer_redaction_new_document_button: "Có",
		viewer_redaction_new_document_cancel_button: "Không",
		viewer_redaction_add_document_confirmation_question: "Bạn muốn lưu nội dung soạn thảo làm tài liệu mới, phiên bản mới, hay là tập tin cục bộ?",
		viewer_redaction_add_document_confirmation_question_version_never: "Bạn muốn lưu nội dung soạn thảo làm tài liệu mới, nội dung mới, hay là tập tin cục bộ?",
		viewer_redaction_add_document_button: "Tài liệu mới",
		viewer_redaction_add_new_version_button: "Phiên bản mới",
		viewer_redaction_add_new_version_button_version_never: "Nội dung mới",
		viewer_redaction_add_local_file_button: "Tập tin cục bộ",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Chọn lý do soạn thảo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Không tìm thấy mẫu nhập dùng để thêm tài liệu này vào kho lưu trữ. Tài liệu sẽ được kiểm trong kho lưu trữ mà không dùng mẫu nhập.",
		property_entry_template_not_retrieved_warning: "Không tìm thấy mẫu nhập dùng để thêm tài liệu này vào kho lưu trữ. Thuộc tính tài liệu sẽ được hiển thị mà không dùng mẫu nhập.",
		multi_edit_entry_template_not_found_name: "[Không tìm thấy]",
		multi_edit_entry_template_not_retrieved_warning: "Không tìm thấy mẫu nhập liệu từng được dùng để thêm các mục này vào kho lưu trữ. Thuộc tính mục sẽ được điều chỉnh mà không dùng mẫu nhập liệu.",
		checkin_major_version_hover: "Tăng số phiên bản tài liệu theo gia số một và đặt trạng thái tài liệu là Đã phát hành. Nếu không chọn tùy chọn, tài liệu sẽ không sẵn sàng để phát hành và sẽ được kiểm nhập ở dạng phiên bản phụ.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Không thể kiểm nhập tài liệu vì tài liệu không được kiểm xuất.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID người dùng hoặc mật khẩu không hợp lệ đối với máy chủ.",
		error_bad_userid_password_userResponse: "Ðảm bảo đã nhập đúng ID người dùng và mật khẩu.",
		error_bad_userid_password_adminResponse: "Lỗi sau đây được trả về: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Không thể thiết lập kết nối đến web khách bằng URL sau: ${0}.",
		http_send_error_explanation: "Lỗi này có thể do sự cố cấu hình trên máy chủ ứng dụng web hoặc do sự cố ở ứng dụng web.",
		http_send_error_userResponse: "Thử đăng nhập lại. Nếu sự cố vẫn còn, thông báo với quản trị viên hệ thống về lỗi này.",
		http_send_error_adminResponse: "Lỗi HTTP sau được trả về: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Không thể thiết lập kết nối đến web khách bằng URL sau: ${0}.",
		http_error_explanation: "Có thể cần phải xác thực tường lửa, hoặc máy chủ ứng dụng web có thể không chạy hoặc không thể tiếp cận do có sự cố về mạng.",
		http_error_userResponse: "Nếu cần xác thực tường lửa, xác thực và thử đăng nhập lại. Nếu sự cố vẫn còn, thông báo với quản trị viên hệ thống về lỗi này.",
		http_error_adminResponse: "Lỗi HTTP sau được trả về: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Không thể thiết lập kết nối đến web khách bằng URL sau: ${0}.",
		http_response_bad_explanation: "Lỗi này có thể do sự cố cấu hình trên máy chủ ứng dụng hoặc do sự cố ở web khách.",
		http_response_bad_userResponse: "Thử đăng nhập lại. Nếu sự cố vẫn còn, thông báo với quản trị viên hệ thống về lỗi này.",
		http_response_bad_adminResponse: "Lỗi sau đây được trả về: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Không có tiêu đề",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Không thể khởi động applet email.",
		email_applet_init_failed_explanation: "Sự cố này xảy ra khi email khách không được cài đặt và cấu hình đúng hoặc khi phiên bản hỗ trợ của Môi trường thời gian chạy Java (JRE) không được cài đặt trên máy trạm của bạn.",
		email_applet_init_failed_userResponse: "Ðể khắc phục sự cố:<ul><li>Ðảm bảo đã cài đặt ứng dụng email và được đặt là email khách mặc định trên máy trạm.</li><li>Kiểm tra phiên bản hỗ trợ của JRE được cài đặt trên máy trạm bằng cách nhập lệnh sau đây tại dấu nhắc lệnh: java -phiên bản</li></ul><p>Danh sách các phiên bản hỗ trợ của JRE được liệt kê trong tài liệu <i>Điều kiện tiên quyết về phần cứng và phần mềm cho IBM Content Navigator</i> trên trang Hỗ trợ phần mềm IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Không thể khởi động ứng dụng email vì không thể tải tập tin DLL yêu cầu.",
		email_applet_JNI_LOAD_FAILED_explanation: "Không thể tải tập tin WCEmailAppletJNI.dll yêu cầu vì thư mục tạm trên máy trạm có thể đã đầy.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Ðảm bảo thư mục tạm còn đủ dung lượng. Sau đó, thử gửi lại tài liệu từ web khách. Theo mặc định, tập tin WCEmailAppletJNI.dll tải trong thư mục tạm được xác định trong cài đặt trình duyệt web của bạn.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Không thể khởi động ứng dụng email vì applet email không thể tạo tập tin tạm.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Thư mục tạm trên máy trạm có thể đã đầy.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Ðảm bảo thư mục tạm còn đủ dung lượng. Sau đó, thử gửi lại tài liệu từ web khách.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Không thể khởi động ứng dụng email vì applet email không thể truy cập thư mục tạm.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Thư mục tạm trên máy trạm có thể đã đầy, hoặc có thể bạn không có truy cập phù hợp để ghi vào thư mục tạm.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Ðảm bảo thư mục tạm còn đủ dung lượng và đảm bảo bạn có quyền ghi vào thư mục tạm. Sau đó, thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ quản trị viên hệ thống.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Applet email không thể xóa tập tin tạm.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Một ứng dụng khác có thể đang dùng tập tin, hoặc có thể tập tin không tồn tại trên máy trạm.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Nếu một ứng dụng khác đang sử dùng tập tin, hãy đóng ứng dụng này. Nếu tập tin nằm trên hệ thống tập tin nội bộ của bạn, xóa tập tin sau khỏi thư mục tạm trên máy trạm: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Không thể tạo liên kết đến tài liệu.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Kho lưu trữ trả về URL ở định dạng không hợp lệ.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Ðóng trình duyệt web gồm cả các tab và phiên và đăng nhập lại. Thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ bộ phận Hỗ trợ phần mềm IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Applet email không thể đính kèm tập tin vào một email.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Kho lưu trữ trả về URL của tài liệu ở định dạng không hợp lệ.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Ðóng trình duyệt web gồm cả các tab và phiên và đăng nhập lại. Thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ bộ phận Hỗ trợ phần mềm IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Không thể tạo đính kèm.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Applet email không thể đọc URL của tài liệu.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Ðóng trình duyệt web gồm cả các tab và phiên và đăng nhập lại. Thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ bộ phận Hỗ trợ phần mềm IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Không thể truy xuất tài liệu từ kho lưu trữ.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Phiên của bạn có thể hết thời gian, kho lưu trữ hoặc máy chủ ứng dụng web có thể không chạy, hoặc có thể có sự cố ở cấu hình web khách.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Ðăng nhập và thử gửi lại tài liệu bằng email. Nếu sự cố vẫn tiếp tục, yêu cầu quản trị viên hệ thống kiểm tra nhật ký lỗi kho lưu trữ.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Nếu đã cấu hình web khách để chuyển đổi tài liệu AFP thành định dạng khác, như PDF, trước khi gửi tài liệu ở dạng đính kèm, đảm bảo chuyển đổi đã được cấu hình đúng.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Không thể chuyển đổi tài liệu sang dạng PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Công cụ dùng để chuyển đổi tài liệu sang dạng PDF không hỗ trợ kiểu tập tin này.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Ðóng trang này và thử email lại tài liệu mà không chuyển đổi tài liệu sang dạng PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Email đã không được tạo.",
		email_applet_MAPI_USER_ABORT_explanation: "Mở ứng dụng email và đảm bảo ứng dụng hoạt động đúng. Sau đó, thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ quản trị viên hệ thống để xem lại nhật ký sự kiện hệ điều hành của bạn.",
		email_applet_MAPI_USER_ABORT_userResponse: "Nếu dự định đóng ứng dụng email, không có thao tác nào khác được yêu cầu. Ðể gửi email, đăng nhập vào ứng dụng email và thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Không thể tạo email.",
		email_applet_MAPI_FAILURE_explanation: "Email khách có thể đã được mở hoặc có thể bạn đã đăng nhập.",
		email_applet_MAPI_FAILURE_userResponse: "Mở ứng dụng email và đảm bảo ứng dụng hoạt động đúng. Sau đó, thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ quản trị viên hệ thống để xem lại nhật ký sự kiện hệ điều hành của bạn.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Không thể tạo email.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Bạn không đăng nhập vào email khách. Phải mở email khách và phải đăng nhập để gửi thông điệp từ web khách.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Mở email khách và đăng nhập. Sau đó, thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Không thể tạo email vì không thể tạo tập tin tạm trên máy trạm.",
		email_applet_MAPI_DISK_FULL_explanation: "Thư mục tạm trên máy trạm có thể đã đầy.",
		email_applet_MAPI_DISK_FULL_userResponse: "Ðảm bảo thư mục tạm còn đủ dung lượng. Sau đó, thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Không thể tạo email vì không đủ bộ nhớ hệ thống.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Có thể bạn có quá nhiều ứng dụng đang mở.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Ðóng bất kỳ ứng dụng nào không dùng và sau đó thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Truy cập MAPI bị từ chối.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Truy cập Giao diện lập trình ứng dụng nhắn tin (MAPI) có thể không được bật hoặc hỗ trợ cho ứng dụng email của bạn. MAPI là giao thức nhắn tin dùng để kích hoạt giao tiếp giữa web khách và ứng dụng email của bạn.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Liên hệ quản trị viên hệ thống.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Ðảm bảo ứng dụng email có đặt truy cập MAPI và được cấu hình đúng. Nếu sự cố vẫn tiếp tục, liên hệ bộ phận hỗ trợ phần mềm IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Không thể tạo đính kèm hoặc liên kết của mục.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Có thể bạn có quá nhiều phiên trình duyệt web đang mở.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Ðóng bất kỳ phiên trình duyệt web nào không sử dụng. Sau đó, thử gửi lại tài liệu từ web khách. Nếu sự cố vẫn tiếp tục, liên hệ quản trị viên hệ thống.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Không thể gửi email.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Có thể bạn đang cố gửi quá nhiều đính kèm.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Chọn ít tập tin hơn. Sau đó, thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Không thể gửi email.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Có thể bạn đang gửi email cho quá nhiều người nhận.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Gửi email cho ít người nhận hơn.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Không thể tạo đính kèm.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Một số tập tin tạm được yêu cầu có thể đã bị xóa trước khi tạo đính kèm. Lỗi này có thể xảy ra nếu bộ nhớ đệm trình duyệt bị xóa trước khi gửi email.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Không thể tạo đính kèm.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Một số tập tin tạm được yêu cầu có thể đã bị xóa trước khi tạo đính kèm. Lỗi này có thể xảy ra nếu bộ nhớ đệm trình duyệt bị xóa trước khi gửi email.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Không thể tạo đính kèm bằng ứng dụng email.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Không thể gửi email đến người nhận đã xác định.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Người nhận có thể không tồn tại trong sổ địa chỉ.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Kiểm tra tên người nhận và thử gửi lại tài liệu.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Không thể gửi email đến người nhận đã xác định.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Ðịa chỉ email có thể được định dạng không đúng.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Ðảm bảo đã nhập địa chỉ email hợp lệ và thử gửi lại tài liệu.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Không thể gửi email.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Email có thể quá dài.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Rút gọn văn bản email và thử gửi lại.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Không thể tạo email.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Email khách có thể đã thất bại khi cố tạo email.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Khởi động lại email khách và thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Email có thể được soạn thảo không đúng.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Không thể gửi email đến người nhận đã xác định.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Ðịa chỉ email có thể được định dạng không đúng.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Ðảm bảo đã nhập địa chỉ email hợp lệ và gửi lại tài liệu.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Email khách không thể thực hiện thao tác được yêu cầu.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Ứng dụng email trả về một lỗi ngoài dự kiến.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Thử gửi lại tài liệu từ web khách.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Một trong các thuộc tính thiếu số lượng giá trị yêu cầu.",
		error_property_cardinality_explanation: "Một số thuộc tính có số lượng giá trị tối đa và tối thiểu.",
		error_property_cardinality_userResponse: "Sử dụng trợ giúp di chuột để xác định thuộc tính nào yêu cầu số lượng giá trị tối thiểu. Sau đó, định rõ số lượng giá trị tối thiểu và thử lại.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Yêu cầu phải có tên.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Xác định tên và thử lại.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Plug-in ${0} có chứa lỗi.",
		plugin_error_explanation: "Ðã xảy ra lỗi khi đánh giá JavaScript cho plug-in ${0}. Nếu tiếp tục dùng web khách, có thể gặp thêm lỗi.",
		plugin_error_userResponse: "Liên hệ quản trị viên hệ thống.",
		plugin_error_adminResponse: "Có sự cố ở plug-in cần phải được nhà cung cấp plug-in khắc phục. Nếu xóa plug-in khỏi cấu hình web khách cho đến khi khắc phục được sự cố ở plug-in.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Không thể mở mẫu nhập.",
		open_old_format_entry_template_error_explanation: "Mẫu nhập dùng một định dạng cũ không được hỗ trợ trong web khách.",
		open_old_format_entry_template_error_userResponse: "Yêu cầu quản trị viên hệ thống cập nhật mẫu nhập.",
		open_old_format_entry_template_error_adminResponse: "Dùng Công cụ ứng dụng hoặc Trình thiết kế mẫu nhập Workplace XT để lưu phiên bản cập nhật của mẫu nhập.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Không thể mở mẫu nhập.",
		open_custom_object_entry_template_error_explanation: "Web khách không hỗ trợ kiểu mẫu nhập sau: mẫu nhập Đối tượng tùy chỉnh.",
		open_custom_object_entry_template_error_userResponse: "Mở mẫu nhập khác.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Không thể mở đối tượng biểu mẫu điện tử trực tuyến.",
		open_forms_object_error_explanation: "Web khách không hỗ trợ các kiểu đối tượng biểu mẫu điện tử trực tuyến sau: mẫu biểu mẫu, dữ liệu biểu mẫu, chính sách tài liệu và chính sách luồng công việc.",
		open_forms_object_error_userResponse: "Mở một tài liệu khác.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Không thể dùng mẫu nhập ${0}.",
		entry_template_folder_restricted_error_explanation: "Mẫu nhập thêm các mục vào thư mục ${1}, và bạn không có quyền phù hợp để thêm mục vào thư mục này.",
		entry_template_folder_restricted_error_userResponse: "Chọn một mẫu nhập khác hoặc yêu cầu quản trị viên hệ thống cấp các quyền phù hợp để thêm mục vào thư mục ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Không thể mở mẫu nhập.",
		open_records_entry_template_error_explanation: "Web khách không hỗ trợ kiểu mẫu nhập sau: Mẫu nhập Khai báo ở dạng bản ghi.",
		open_records_entry_template_error_userResponse: "Mở mẫu nhập khác.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Không thể mở luồng công việc.",
		open_workflow_error_explanation: "Web khách không hỗ trợ mở luồng công việc.",
		open_workflow_error_userResponse: "Mở một tài liệu khác.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Không thể mở tài liệu.",
		viewer_unable_to_view_error_explanation: "Chưa cấu hình trình xem cho tài liệu có kiểu này, hoặc trình xem đã cấu hình không tương thích với hệ thống của bạn.",
		viewer_unable_to_view_error_userResponse: "Yêu cầu quản trị viên hệ thống cấu hình trình xem cho tài liệu có kiểu này, và đảm bảo trình xem được cấu hình hoạt động với hệ thống của người dùng.",
		viewer_unable_to_view_error_adminResponse: "Dùng công cụ quản trị để cấu hình một trình xem cho kiểu tài liệu này.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Không thể mở tìm kiếm.",
		search_cannot_open_error_explanation: "Tính năng tìm kiếm không được cấu hình cho máy khách này.",
		search_cannot_open_error_userResponse: "Hỏi quản trị viên hệ thống xem bạn có quyền truy cập vào một máy khách có tính năng tìm kiếm hoặc có thể cập nhật tính năng tìm kiếm cho máy khách này hay không.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Tài liệu không được tải.",
		viewer_document_load_failed_error_explanation: "Trình xem Daeja ViewONE Professional không thể mở tài liệu.",
		viewer_document_load_failed_error_userResponse: "Ðể biết thêm thông tin, xem thông báo lỗi hiển thị trên trình xem.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Không thể xem tài liệu.",
		viewer_session_expired_explanation: "Không thể truy xuất nội dung tài liệu.",
		viewer_session_expired_userResponse: "Thử đăng nhập lại. Nếu sự cố vẫn tiếp tục, có thể máy chủ không chạy. Yêu cầu quản trị viên hệ thống kiểm tra nhật ký lỗi của IBM Content Navigator hoặc khởi động lại máy chủ.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Không thể xem tài liệu.",
		ajaxViewer_getPage_failed_explanation: "Trình xem AJAX nhận được phản hồi lỗi khi đang truy xuất nội dung trang. Có thể máy chủ ứng dụng không chạy.",
		ajaxViewer_getPage_failed_userResponse: "Ðóng trình duyệt web và thử đăng nhập lại. Nếu sự cố vẫn tiếp tục, yêu cầu quản trị viên hệ thống xem lại tập tin nhật ký máy chủ ứng dụng web hoặc khởi động lại máy chủ.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Không tìm thấy Môi trường thời gian chạy Java (JRE) trên máy trạm của bạn.",
		viewer_java_plugin_not_found_explanation: "Không tìm được plug-in hoặc không cài đặt đúng phiên bản JRE.",
		viewer_java_plugin_not_found_userResponse: "Kiểm tra đã cài đặt JRE. Ví dụ, trong dấu nhắc lệnh, nhập lệnh sau: Java -phiên bản. Nếu không cài đặt JRE hoặc JRE được cài đặt ở mức phiên bản sai, cài đặt phiên bản JRE phù hợp. Danh sách các phiên bản hỗ trợ được liệt kê trong tài liệu <i>Điều kiện tiên quyết về phần cứng và phần mềm cho IBM Content Navigator</i> trên trang hỗ trợ phần mềm IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Không thể hiển thị tài liệu trong trình duyệt web của bạn.",
		viewer_pdf_plugin_not_found_explanation: "Không tìm thấy plug-in dùng để hiển thị tài liệu PDF trong trình duyệt web.",
		viewer_pdf_plugin_not_found_userResponse: "Tập tin PDF có thể được tải xuống máy trạm của bạn thay vì hiển thị trong cửa sổ trình xem.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Không thể thêm mục sau đây vào kho lưu trữ: ${0}.",
		add_document_single_item_error_explanation: "Có thể xảy ra lỗi này do một trong những nguyên nhân sau:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Bạn đang cố thêm một tài liệu đã bị di chuyển hoặc xóa.</li>" + "<li>Bạn đang cố thêm một tài liệu đã bị đặt lại tên.</li>" + "<li>Bạn đang cố thêm một tài liệu đã bị hỏng.</li>" + "<li>Bạn đang cố thêm một tài liệu đang được mở trong một ứng dụng khác.</li>" + "<li>Bạn đang cố thêm một thư mục vào kho lưu trữ.</li>" + "<li>Bạn không có quyền phù hợp trên hệ điều hành để truy cập tài liệu.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Thực hiện thao tác phù hợp để khắc phục sự cố:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Nếu tài liệu đã bị di chuyển hoặc đặt lại tên, tìm tài liệu trên hệ thống tập tin và thử thêm lại.</li>" + "<li>Nếu tài liệu được mở trong một ứng dụng khác, đóng tài liệu và thử thêm lại.</li>" + "</ul>" + "<br>Không thể thêm thư mục vào kho lưu trữ.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Không thể thêm các mục sau đây ${0} vào kho lưu trữ: ${1}",
		add_document_multiple_items_error_explanation: "Sự cố ở một trong các mục đã ngăn việc thêm mục bất kỳ vào kho lưu trữ. Có thể xảy ra lỗi này do một trong những nguyên nhân sau:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Bạn đang cố thêm một tài liệu đã bị di chuyển hoặc xóa.</li>" + "<li>Bạn đang cố thêm một tài liệu đã bị đặt lại tên.</li>" + "<li>Bạn đang cố thêm một tài liệu đã bị hỏng.</li>" + "<li>Bạn đang cố thêm một tài liệu đang được mở trong một ứng dụng khác.</li>" + "<li>Bạn đang cố thêm một thư mục vào kho lưu trữ.</li>" + "<li>Bạn không có quyền phù hợp trên hệ điều hành để truy cập tài liệu.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Thực hiện thao tác phù hợp để khắc phục sự cố:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Nếu tài liệu đã bị di chuyển hoặc đặt lại tên, tìm tài liệu trên hệ thống tập tin và thử thêm lại mục.</li>" + "<li>Nếu tài liệu được mở trong một ứng dụng khác, đóng tài liệu và thử thêm lại mục.</li>" + "<li>Nếu tài liệu bị xóa hoặc bị hỏng, bỏ chọn mục và thử thêm lại các mục còn lại.</li>" + "</ul>" + "<br>Không thể thêm thư mục vào kho lưu trữ.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Bạn không thể kéo và thả các mục từ vị trí này.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Không thể mở đối tượng biểu mẫu điện tử trực tuyến.",
		open_forms_work_object_error_explanation: "Web khách không hỗ trợ kiểu đối tượng biểu mẫu điện tử trực tuyến sau: chính sách luồng công việc.",
		open_forms_work_object_error_userResponse: "Mở một tài liệu khác.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Không thể mở tài liệu.",
		viewer_privilege_to_view_error_explanation: "Bạn không có đặc quyền phù hợp để xem tài liệu.",
		viewer_privilege_to_view_error_userResponse: "Yêu cầu chủ sở hữu tài liệu hoặc quản trị viên hệ thống cấp quyền phù hợp để xem tài liệu.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Không thể thêm mục vào kho lưu trữ.",
		add_document_too_many_items_error_explanation: "Có thể thêm đến ${0} mục trong một lần. Bạn đang cố thêm ${1} mục.",
		add_document_too_many_items_error_userResponse: "Xóa một số mục khỏi danh sách và thử thêm lại mục. Bạn cũng có thể liên hệ quản trị viên hệ thống để tăng số lượng tài liệu tối đa có thể thêm trong một lần vào máy khách này.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Không thể thiết lập kết nối đến web khách bằng URL sau: ${0}.",
		http_ltpa_expired_explanation: "Khóa LTPA liên kết với phiên duyệt của bạn đã hết hạn.",
		http_ltpa_expired_userResponse: "Khởi động lại trình duyệt web và thử đăng nhập lại. Nếu sự cố vẫn tiếp tục, thông báo với quản trị viên hệ thống về lỗi sau: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Không thể thêm tài liệu vào thư mục ${0}.",
		dnd_no_privilege_error_explanation: "Quyền trên thư mục ngăn việc thêm bất kỳ tài liệu nào vào thư mục.",
		dnd_no_privilege_error_userResponse: "Thêm tài liệu vào một thư mục khác.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Không thể điều chỉnh mục.",
		modify_document_too_many_items_error_explanation: "Có thể điều chỉnh đến ${0} mục trong một lần. Bạn đang cố điều chỉnh ${1} mục.",
		modify_document_too_many_items_error_userResponse: "Chọn ít mục hơn và thử điều chỉnh lại mục. Bạn cũng có thể liên hệ quản trị viên hệ thống để tăng số lượng mục tối đa có thể điều chỉnh trong một lần từ máy khách này.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Bạn không thể dùng lớp ${0}.",
		add_document_multiple_unique_values_error_explanation: "Lớp ${0} chứa một hoặc nhiều thuộc tính yêu cầu giá trị duy nhất cho từng tài liệu. Khi thêm nhiều tài liệu, tất cả tài liệu dùng cùng giá trị.",
		add_document_multiple_unique_values_error_userResponse: "Chọn một lớp khác hoặc thêm riêng biệt từng tài liệu.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Không thể dùng mẫu nhập ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Mẫu mục nhập ${0} yêu cầu thêm tài liệu vào lớp ${1}. Tuy nhiên, lớp ${1} chứa một hoặc nhiều thuộc tính yêu cầu giá trị duy nhất cho từng tài liệu. Khi thêm nhiều tài liệu, tất cả tài liệu dùng cùng giá trị.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Chọn một mẫu mục nhập khác hoặc thêm riêng biệt từng tài liệu.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Không thể dùng mẫu nhập ${0}.",
		entry_template_class_restricted_error_explanation: "Mẫu nhập thêm mục bằng cách sử dụng lớp ${1}, và bạn không có quyền phù hợp để thêm mục bằng cách sử dụng lớp đó.",
		entry_template_class_restricted_error_userResponse: "Chọn mẫu nhập khác hoặc yêu cầu quản trị viên hệ thống cấp cho bạn quyền phù hợp để thêm mục bằng cách sử dụng lớp ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Không thể gán lại mục làm việc cho người dùng khác.",
		process_reassign_error_explanation: "Thao tác này bị cấm bởi luồng công việc.",
		process_reassign_error_userResponse: "Bạn có thể mở mục làm việc và hoàn tất bước hiện tại trong mục làm việc.  Ðể biết thêm thông tin về vấn đề này, yêu cầu chủ sở hữu mục xác minh có thể gán lại mục làm việc.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Không thể tải thao tác tùy chỉnh sau: ${0}.",
		customaction_loadurl_error_explanation: "Thao tác tùy chỉnh không nằm ở vị trí có thể tiếp cận. URL hiện tại của thao tác tùy chỉnh là ${1}.",
		customaction_loadurl_error_userResponse: "Yêu cầu quản trị viên chuyển thao tác tùy chỉnh đến một vị trí có thể tiếp cận.",
		customaction_loadurl_error_adminResponse: "Tập tin JSP xác định thao tác tùy chỉnh phải được cung cấp như một phần của của ứng dụng web eClient hoặc ứng dụng web IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Không tìm thấy tính năng sau: ${0}.",
		feature_invalid_explanation: "Có thể xảy ra sự cố này nếu không có tính năng này trên máy khách đã xác định hoặc đã gõ tên tính năng không đúng.",
		feature_invalid_userResponse: "Khi nhấp OK, bạn sẽ được chuyển hướng đến tính năng mặc định cho máy khách này. Liên hệ quản trị viên hệ thống để thông báo về sự cố này.",
		feature_invalid_adminResponse: "Nếu phải có tính năng này trên máy khách, cập nhật cấu hình máy khách trong công cụ quản trị. Nếu không phải đưa tính năng này vào máy khách hoặc gõ tên tính năng không đúng, liên hệ với người phát triển ứng dụng đã tạo URL cho tính năng này để cập nhật URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Không thể mở tìm kiếm ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "Bạn phải ở trong vùng nhóm để mở tìm kiếm này.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Chọn tìm kiếm khác.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Không thể nhập tập tin sau: ${0}.",
		wrong_import_file_type_error_explanation: "Tập tin phải là một tập tin thuộc tính.",
		wrong_import_file_type_error_userResponse: "Chọn tập tin thuộc tính đã xuất từ công cụ quản trị.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Không thể tìm thấy kho lưu trữ ${0} trên máy khách ${1}.",
		browse_repository_not_found_error_explanation: "Kho lưu trữ phải hiện diện trên máy khách và được kích hoạt cho tính năng duyệt khi được xác định trong một tham số URL.",
		browse_repository_not_found_error_userResponse: "Ðảm bảo ID kho lưu trữ được xác định trong URL là đúng, kho lưu trữ đã được thêm vào máy khách ${1}, và đã bật tính năng duyệt của kho lưu trữ.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Kho lưu trữ ${0} không được bật tính năng duyệt trong máy khách ${1}.",
		browse_repository_not_enabled_error_explanation: "Phải bật tính năng duyệt của kho lưu trữ khi nó được xác định trong một tham số URL.",
		browse_repository_not_enabled_error_userResponse: "Bật tính năng duyệt cho kho lưu trữ ${0} trong máy khách ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Không thể hoàn tất tìm kiếm vì liên kết có tiêu chuẩn không hợp lệ.",
		invalid_xt_stored_search_criteria_error_explanation: "Giá trị sau đây không hợp lệ: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Yêu cầu quản trị viên hệ thống cung cấp một liên kết cập nhật.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Sửa cặp tên-giá trị phù hợp trong URL. Nếu không biết giá trị nào là hợp lệ cho thuộc tính, mở tìm kiếm đã lưu trong trình thiết kế tìm kiếm FileNet Workplace XT để xác định giá trị hợp lệ.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Không thể mở tìm kiếm kho lưu trữ chéo.",
		unified_search_invalid_fixed_value_error_explanation: "Tìm kiếm kho lưu trữ chéo có chứa giá trị không hợp lệ. Có thể xảy ra sự cố này khi một tiêu chuẩn đã cố định giá trị không tương thích với các thuộc tính khác trong ánh xạ. Ví dụ, có thể xảy ra sự cố này nếu giá trị cố định là một chuỗi nhưng các thuộc tính khác trong ánh xạ là số nguyên.",
		unified_search_invalid_fixed_value_error_userResponse: "Nếu có quyền phù hợp để sửa tìm kiếm, hãy xóa tiêu chuẩn không hợp lệ và lưu lại tìm kiếm. Nếu không có quyền phù hợp để sửa tìm kiếm, yêu cầu chủ sở hữu tìm kiếm hoặc quản trị viên hệ thống lưu lại tìm kiếm.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Không thể hoàn tất yêu cầu.",
		launch_action_invalid_json_error_explanation: "Dữ liệu được chuyển qua máy khách web không hợp lệ.",
		launch_action_invalid_json_error_userResponse: "Thông báo cho quản trị viên hệ thống biết khi xảy ra sự cố này, bạn đang sử dụng ứng dụng nào.",
		launch_action_invalid_json_error_adminResponse: "Ứng dụng máy khách chưa gửi đối tượng JSON hợp lệ vào máy khách web. Liên hệ bộ phận hỗ trợ phần mềm của IBM (IBM Software Support) để được hỗ trợ thêm.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Không thể hoàn tất yêu cầu.",
		launch_action_not_found_error_explanation: "Thao tác ${0} chưa được cấu hình cho mọi trình đơn trên máy khách ${1}.",
		launch_action_not_found_error_userResponse: "Yêu cầu quản trị viên hệ thống cấu hình máy khách ${1} để sử dụng trình đơn chứa thao tác ${0} hoặc gán cho bạn một máy khách chứa thao tác ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Không thể hoàn tất yêu cầu.",
		launch_action_repository_not_found_error_explanation: "Kho lưu trữ ${0} chưa liên kết với máy khách ${1}.",
		launch_action_repository_not_found_error_userResponse: "Yêu cầu quản trị viên hệ thống liên kết kho lưu trữ ${0} với máy khách ${1} hoặc gán cho bạn một máy khách chứa kho lưu trữ ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Không thể mở vùng nhóm.",
		teamspace_cannot_open_error_explanation: "Tính năng vùng nhóm chưa được cấu hình cho máy khách này.",
		teamspace_cannot_open_error_userResponse: "Hỏi quản trị viên hệ thống xem bạn có quyền truy cập vào một máy khách có tính năng vùng nhóm hoặc có thể cập nhật máy khách này để bao gồm tính năng vùng chứa hay không.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Ðã xảy ra lỗi khi kiểm nhập nội dung đã soạn thảo.",
		viewer_redaction_checkin_failed_explanation: "Trình xem nhận được phản hồi lỗi khi đang kiểm nhập nội dung đã soạn thảo.",
		viewer_redaction_checkin_failed_userResponse: "Yêu cầu người quản trị hệ thống xem lại tập tin nhật ký của máy chủ ứng dụng web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Bạn không thể thêm tài liệu vào kho lưu trữ này.",
		add_document_odserver_odwek_version_od_error_explanation: "Phiên bản hiện tại của máy chủ IBM Content Manager OnDemand hoặc ODWEK không đạt cấp tối thiểu cần thiết để hỗ trợ thêm tài liệu vào kho lưu trữ Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Yêu cầu quản trị viên kiểm tra phiên bản nào là cần thiết cho máy chủ Content Manager OnDemand và ODWEK để hỗ trợ thêm tài liệu vào kho lưu trữ Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Không thể thêm mục vào kho lưu trữ.",
		add_document_too_many_items_od_error_explanation: "Với kho lưu trữ IBM Content Manager OnDemand, một lúc bạn chỉ có thể thêm một mục.",
		add_document_too_many_items_od_error_userResponse: "Loại bỏ một số mục khỏi danh sách và cố gắng thêm lại mục, từng mục một.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Không thể thêm mục vào kho lưu trữ.",
		add_document_filesize_empty_od_error_explanation: "Bạn không thể thêm tập tin trống vào kho lưu trữ IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Thêm nội dung vào tập tin và cố gắng thêm tập tin lại, hoặc thêm mục khác.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Không thể mở tìm kiếm kho lưu trữ chéo.",
		unified_search_repository_not_found_error_explanation: "Tìm kiếm kho lưu trữ chéo bao gồm một hoặc nhiều kho lưu trữ không hợp lệ. Có thể xảy ra sự cố này khi kho lưu trữ được gồm trong tìm kiếm đã bị xóa khỏi ứng dụng hoặc xóa khỏi máy khách hiện tại.",
		unified_search_repository_not_found_error_userResponse: "Nếu bạn có quyền phù hợp để sửa tìm kiếm, hãy lưu tìm kiếm thêm lần nữa. Khi bạn lưu tìm kiếm, máy khách web sẽ loại bỏ kho lưu trữ không hợp lệ khỏi tìm kiếm. Nếu không có quyền phù hợp để sửa tìm kiếm, yêu cầu chủ sở hữu tìm kiếm hoặc quản trị viên hệ thống lưu lại tìm kiếm.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Không thể tạo tài liệu mới.",
		edit_document_using_office_online_error: "Không thể mở tài liệu.",
		edit_document_using_office_online_error_explanation: "Chưa cấu hình URL của Microsoft Office Online Server.",
		edit_document_using_office_online_error_userResponse: "Để bạn có thể sử dụng Office Online, quản trị viên của bạn phải kích hoạt Office Online Server trên kho lưu trữ và định rõ URL của Microsoft Office Online Server trước.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Tài liệu này không mở được trong Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Yêu cầu quản trị viên của bạn cập nhật Tích hợp MS Office Online Server.<br><br> Nếu người dùng cần truy cập tài liệu này từ Microsoft Office Online, thì đi đến trang Sửa Tích hợp của kho lưu trữ và cập nhật Tích hợp MS Office Online Server để đưa lớp vào danh sách các lớp để điều chỉnh cho hỗ trợ Office Online. ",		
		browser_not_support_this_viewer: "Trình xem đã được cấu hình không tương thích với trình duyệt của bạn.",
		browser_not_support_this_viewer_explanation: "${0} không được trình duyệt hỗ trợ.",
		browser_not_support_this_viewer_userResponse: "Sử dụng trình xem khác để mở tài liệu. Danh sách trình duyệt có hỗ trợ được bao gồm trong tài liệu <i>Điều kiện tiên quyết về phần cứng và phần mềm cho IBM Content Navigator</i> trên trang Hỗ trợ Phần mềm IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Thông tin luồng công việc",
		process_information_info_text: "Mục được chọn đang chạy trên các luồng công việc sau.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Bằng",
		operator_NOTEQUAL: "Không bằng",
		operator_LIKE: "Giống",
		operator_STARTSWITH: "Bắt đầu bằng",
		operator_ENDSWITH: "Kết thúc bằng",
		operator_NOTLIKE: "Không giống",
		operator_NULL: "Trống",
		operator_NOTNULL: "Không trống",
		operator_LESS: "Nhỏ hơn",
		operator_LESSOREQUAL: "Nhỏ hơn hoặc bằng",
		operator_GREATER: "Lớn hơn",
		operator_GREATEROREQUAL: "Lớn hơn hoặc bằng",
		operator_BETWEEN: "Nằm giữa",
		operator_NOTBETWEEN: "Không nằm giữa",
		operator_IN: "Bao gồm tất cả",
		operator_INANY: "Bao gồm bất kỳ",
		operator_NOTIN: "Loại trừ tất cả",
		operator_CONTAINS: "Chứa",

		/* SearchForm widget */
		search_button_tooltip: "Tìm kiếm các tài liệu khớp với tiêu chuẩn của bạn.",
		reset_button_tooltip: "Ðặt lại tài liệu về các giá trị mặc định do quản trị viên đã đặt.",
		clear_button_tooltip: "Xóa tất cả giá trị đã nhập cho tìm kiếm.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Chọn tìm kiếm",
		append_to_search: "Gắn kèm vào tìm kiếm",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Tìm kiếm mới",
		new_unified_search: "Tìm kiếm kho lưu trữ chéo mới",
		searh_name_contains: "Tên tìm kiếm chứa",
		keep_search_criteria_expanded: "Ðể mở các tiêu chuẩn tìm kiếm",
		showing_results: "Hiện kết quả cho:",
		open_in_new_window: "Mở trong cửa sổ mới",
		open_in_new_tab: "Mở trong tab mới",
		close_tab: "Ðóng tab",
		add_repository: "Thêm kho lưu trữ",
		edit_repository: "Sửa kho lưu trữ",
		remove_repository: "Xóa",
		search_scope: "Phạm vi tìm kiếm",
		search_class_template: "Lớp",
		object_type_version: "Phiên bản và kiểu đối tượng",
		not_applicable: "Không áp dụng",
		unified_search_including_subfolders: " (Bao gồm thư mục con)",
		unified_search_dialog_intro_text: "Chọn kho lưu trữ và tìm kiếm hoặc các lớp mà bạn muốn bao gồm trong tìm kiếm.",
		unified_search_class_or_template: "Lớp hoặc mẫu",

		select_object_fieldset_legend: "Bạn muốn tìm mục để đính kèm như thế nào:",
		select_object_create_new_search: "Tìm kiếm mới",
		select_object_search_template: "Tìm kiếm đang tồn tại",

		search_criteria: "Tiêu chuẩn tìm kiếm:",
		search_criteria_no_colon: "Tiêu chuẩn tìm kiếm",
		search_in_multiple: "Tìm kiếm trong (${0}):",
		search_location_including_subfolders: "${0} bao gồm các thư mục con",
		search_class: "Lớp:",
		search_class_multiple: "Lớp (${0}):",
		search_class_including_subclasses: "${0} bao gồm các lớp con",
		search_class_all_pseudo: "Tất cả",
		search_results: "Kết quả tìm kiếm",
		select_operator: "Chọn toán tử",
		ending_value: "Giá trị kết thúc của thuộc tính ${0} là:",
		search_options: "Tùy chọn tìm kiếm:",
		search_version: "Phiên bản:",
		search_released_version: "Phiên bản đã phát hành",
		search_current_version: "Phiên bản hiện tại",
		search_all_versions: "Tất cả phiên bản",
		search_file_type_filter: "Bộ lọc kiểu tập tin:",
		search_one_file_type: "1 kiểu tập tin",
		search_many_file_types: "${0} kiểu tập tin",
		search_action_filter: "Bộ lọc thao tác:",
		search_action_filter_hover_help: "Thu hẹp kết quả để chỉ bao gồm những tập tin mà người dùng đã thực hiện thao tác cụ thể trên đó.<br/>Ví dụ, có thể chỉ tìm những tài liệu đã được thêm vào ngày 20 tháng 9 năm 2012.",
		search_action_filter_enabled: "Bộ lọc thao tác được bật",
		search_enable: "Bật",
		search_disable: "Tắt",
		search_by: "bởi",
		search_added: "Ðã thêm",
		search_modified: "Ðã điều chỉnh",
		search_checked_out: "Ðã kiểm xuất",
		search_date_operator_on: "Bật",
		search_date_operator_not_on: "Không vào ngày",
		search_date_operator_before: "Trước",
		search_date_operator_after: "Sau",
		search_version_hover_help_p8: "Có sẵn một phiên bản đã phát hành cho tất cả người dùng. Một tài liệu là phiên bản hiện tại nghĩa là một hoặc nhiều người dùng đang sửa tài liệu đó.",
		search_version_hover_help_cm: "Phiên bản hiện tại là phiên bản mới nhất của mục.",
		search_using: "Tìm kiếm các mục khớp với:",
		search_property_and_text_criteria: "Cả giá trị thuộc tính và tiêu chuẩn văn bản",
		search_property_or_text_criteria: "Giá trị thuộc tính hoặc tiêu chuẩn văn bản",
		search_property_and_text: "Cả thuộc tính và tiêu chuẩn văn bản",
		search_property_or_text: "Thuộc tính hoặc tiêu chuẩn văn bản",
		search_property_options: "Tùy chọn thuộc tính:",
		search_property_option_match_all: "Tất cả thuộc tính",
		search_property_option_match_any: "Thuộc tính bất kỳ",
		search_property_option_match_all_summary: "Khớp tất cả",
		search_property_option_match_any_summary: "Khớp bất kỳ",
		search_total_count_type_total: "Tổng",
		search_total_count_type_atleast: "Tối thiểu",
		search_content_size_filter: "Bộ lọc kích thước nội dung:",
		search_content_size_filter_any: "Bất kỳ kích thước nào",

		/* Search work options */
		search_work_filter: "Bộ lọc mục làm việc:",
		search_work_filter_hover_help: "Thu hẹp kết quả để chỉ bao gồm các mục có trong luồng công việc. Ví dụ, có thể thu hẹp kết quả để chỉ bao gồm các mục làm việc đang được kích hoạt.<br /><br />Tùy chọn này sẽ không áp dụng nếu bạn muốn xem tất cả phiên bản của mục được tìm kiếm trả về.",
		search_work_filter_enabled: "Bộ lọc mục làm việc được bật",
		search_work_filter_status: "Trạng thái:",
		search_work_filter_step: "Bước:",
		search_work_filter_owner: "Chủ sở hữu:",
		search_work_filter_status_all: "Tất cả mục",
		search_work_filter_status_active: "Mục kích hoạt",
		search_work_filter_status_suspended: "Mục chờ xử lý",
		search_work_filter_process_all: "Tất cả luồng công việc",
		search_work_filter_step_all: "Tất cả bước",
		search_work_filter_owner_all: "Tất cả người dùng",
		search_work_filter_step_error: "Tên bước không tồn tại.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Không thể hoàn tất tìm kiếm nếu không có thông tin bổ sung. Nhập giá trị cho ít nhất một điều kiện.",
		search_insufficient_input_box: "Không thể hoàn tất tìm kiếm nếu không có thông tin bổ sung. Nhập tiêu chí tìm kiếm văn bản hoặc chọn mẫu siêu dữ liệu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Không thể cấu hình tìm kiếm để chạy khi tìm kiếm được mở mà không có thông tin bổ sung. Nhập giá trị cho ít nhất một điều kiện.",
		search_member_required: "Ðể chia sẻ tìm kiếm này với  người dùng và nhóm cụ thể, chọn ít nhất một người dùng hoặc nhóm để chia sẻ tìm kiếm này.",
		search_criteria_layout_and: "VÀ",
		search_criteria_layout_or: "HOẶC",
		search_prompt_close_without_save: "Bạn có muốn đóng mà không lưu các thay đổi không?",
		search_prompt_close_all_without_save: "Bạn có muốn đóng tất cả tab mà không lưu các thay đổi không",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Một trong các kiểu tiêu chuẩn tìm kiếm sau đây không hợp lệ đối với kho lưu trữ này: ${0}. Ðể chạy tìm kiếm trong web khách, phải xóa tiêu chuẩn không hợp lệ. Nếu lưu tìm kiếm, tiêu chuẩn không hợp lệ sẽ bị xóa. Nếu không muốn thay đổi tìm kiếm, hãy đóng tìm kiếm.",
		search_invalid_repository: "Một hoặc nhiều kho lưu trữ",
		search_invalid_class: "Một hoặc nhiều lớp",
		search_invalid_folder: "Một hoặc nhiều thư mục",
		search_invalid_file_type: "Một hoặc nhiều kiểu tập tin",
		search_invalid_property: "Một hoặc nhiều thuộc tính",
		search_invalid_text_search: "Tiêu chuẩn tìm kiếm văn bản",
		search_invalid_work: "Tiêu chuẩn bộ lọc mục làm việc",

		search_operator_pulldown_missing: "Yêu cầu phải có một toán tử. Chọn một toán tử từ trình đơn thả xuống. Nếu không thấy bất kỳ toán tử nào, yêu cầu quản trị viên hệ thống kiểm tra tab <b>Tìm kiếm</b> trong công cụ quản trị để xem tất cả toán tử có bị ẩn hay không. Nếu đây là tìm kiếm kho lưu trữ chéo, trình đơn thả xuống có thể không chứa bất kỳ toán tử nào nếu các thuộc tính được ánh xạ với nhau không có bất kỳ toán tử chung nào.",

		/*SearchBuilder */
		open_search_builder: "Tìm kiếm mới",
		document_type: "Lớp",
		show_all_properties: "Hiện tất cả thuộc tính",
		text_search_label: "Tìm mục có các thuật ngữ sau:",
		text_search_place_holder: "Dùng kết hợp thuật ngữ và toán tử: * ? hoặc \"cụm từ so khớp chính xác\"",
		text_search_place_holder_box: "Dùng kết hợp giữa thuật ngữ và toán tử: AND, OR, NOT, và \"cụm từ so khớp chính xác\"",
		text_search_place_holder_cascade_proximity: "Dùng kết hợp thuật ngữ và toán tử: * hoặc ?",
		text_search_place_holder_common: "Dùng kết hợp thuật ngữ và \"cụm từ so khớp chính xác\"",
		text_search_hover_help_p8: "Dùng dấu hoa thị (*) hoặc dấu hỏi (?) làm ký tự đại diện. Dùng dấu ngoặc kép (\"\") cho các so khớp chính xác.",
		text_search_hover_help_p8_only_crs: "Dùng dấu hoa thị (*) hoặc dấu hỏi (?) làm ký tự đại diện. Dùng dấu ngoặc kép (\"\") cho các so khớp chính xác. Khi bạn xác định nhiều thuật ngữ, tìm kiếm kho lưu trữ chéo sẽ trả về các mục có chứa bất kỳ thuật ngữ nào trong số các thuật ngữ này.",
		text_search_hover_help_cm: "Dùng dấu hoa thị (*) hoặc dấu hỏi (?) làm ký tự đại diện. Dùng dấu ngoặc kép (\"\") cho các so khớp chính xác. Dùng dấu trừ (-) để đặt trước các thuật ngữ sẽ loại ra, và dấu cộng (+) để đặt trước các thuật ngữ sẽ thêm vào.",
		text_search_hover_help_box: "Dùng AND giữa các thuật ngữ để khớp tất cả thuật ngữ. Dùng OR giữa các thuật ngữ để khớp tất cả thuật ngữ. Dùng dấu ngoặc kép (\"\") cho các so khớp chính xác. Đặt NOT trước một thuật ngữ để loại trừ nó.",
		text_search_hover_help_common: "Dùng dấu ngoặc kép (\"\") cho các so khớp chính xác. Khi bạn xác định nhiều thuật ngữ, tìm kiếm kho lưu trữ chéo sẽ trả về các mục có chứa tất cả thuật ngữ này.",
		text_search_options: "Tùy chọn văn bản:",
		text_search_options_hover_help: "Nếu dùng bất kỳ toán tử nào khác với các ký tự đại diện, chọn toán tử Nâng cao.",
		text_search_option_any: "Bất kỳ thuật ngữ nào",
		text_search_option_all: "Tất cả thuật ngữ",
		text_search_option_proximity: "Trong phạm vi các từ lân cận:",
		text_search_option_none: "Toán tử nâng cao",
		text_search_option_authoring: "Dạng tiêu chí tìm kiếm văn bản:",
		text_search_option_authoring_hover_help: "Chọn cách mà bạn muốn áp dụng tiêu chí tìm kiếm văn bản cho người dùng. Nếu bạn không muốn đưa bất kỳ tiêu chí tìm kiếm văn bản nào vào tìm kiếm, thì hãy ẩn tùy chọn này. Ngược lại, bạn có thể cho phép người dùng sửa, bắt buộc họ phải chọn hoặc khiến họ chỉ có thể đọc tiêu chí tìm kiếm văn bản.",
		text_search_option_hide: "Ẩn tiêu chí",
		text_search_option_hide_hover_help: "Chọn tùy chọn này nếu bạn không muốn đưa bất kỳ tiêu chí tìm kiếm văn bản nào vào tìm kiếm hoặc cho phép người dùng khác xác định tiêu chí tìm kiếm văn bản.",
		text_search_option_in: "Trong đánh dấu HTML/XML ${0}",
		text_search_option_paragraph: "Trong cùng đoạn",
		text_search_option_sentence: "Trong cùng câu",
		text_search_option_vql: "Truy vấn VQL",
		text_search_option_none_hover_help: "Dùng - để đặt trước thuật ngữ sẽ loại ra.",
		text_search_option_cascade_proximity_hover_help: "Hạn chế kết quả tìm kiếm đối với các thuật ngữ xuất hiện trong phạm vi từ không chứa nhóm từ chính xác.",

		box_search_metadata: "Siêu dữ liệu:",
		box_search_select_template: "Chọn mẫu",
		box_search_no_templates: "Không có sẵn mẫu",
		box_text_search_options_search_within: "Phạm vi tìm kiếm:",
		box_text_search_options_search_within_everything: "Mọi thứ",
		box_text_search_options_search_within_file_content: "Nội dung tài liệu",
		box_text_search_options_search_within_tags: "Ðánh dấu",
		box_text_search_options_limit_to: "Chỉ tìm kiếm:",

		add_property: "Thêm thuộc tính",
		edit_template: "Sửa tìm kiếm",
		save_search: "Lưu tìm kiếm",
		search_template_name: "Tên:",
		search_template_desc: "Mô tả:",
		auto_run: "Chạy tìm kiếm khi được mở",
		show_in_tree: "Hiện tìm kiếm trong cấu trúc thư mục",
		show_in_tree_hover_help: "Nếu một lượt tìm kiếm được lưu trong một thư mục, nó chỉ được hiển thị trong danh sách nội dung theo mặc định. Nếu chọn tùy chọn này, lượt tìm kiếm cũng được hiển thị trong cây thư mục trong màn hình Trình duyệt.  Tuy nhiên, lượt tìm kiếm được hiển thị trong cây thư mục chỉ khi bạn lưu nó trong một thư mục.",
		share_search_with: "Chia sẻ tìm kiếm với:",
		remove_member: "Xóa ${0}",
		ok_button_label: "OK",
		save_template: "Lưu",
		save_template_title: "Nếu bạn thường xuyên cần tìm kiếm các mục cụ thể, hãy lưu tiêu chuẩn tìm kiếm của bạn.",
		remove_criterion: "Xóa",
		apply_button_label: "Áp dụng",
		empty_search_results_pane: "Chạy tìm kiếm để xem kết quả.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Toàn bộ kho lưu trữ",

		repository_already_selected: "Không thể thêm kho lưu trữ ${0} vào tìm kiếm kho lưu trữ chéo vì nó đã được bao gồm trong tìm kiếm. <br/> Chỉ có thể bao gồm kho lưu trữ trong tìm kiếm kho lưu trữ chéo một lần. <br/>Chọn kho lưu trữ khác để bao gồm trong tìm kiếm kho lưu trữ chéo.",

		repository_limit_reached: "Không thể thêm kho lưu trữ ${0} vào tìm kiếm kho lưu trữ chéo. Bạn có thể thêm tối đa ${1} kho lưu trữ vào tìm kiếm.",

		nomore_criteria_toappend: "Tất cả thuộc tính đã ánh xạ đều đã bao gồm trong tiêu chuẩn tìm kiếm. Không có thuộc tính nào được thêm vào tiêu chuẩn tìm kiếm.",
		nomore_criteria_toappend_regular: "Tất cả thuộc tính đều đã bao gồm trong tiêu chuẩn tìm kiếm. Không có thuộc tính nào được thêm vào tiêu chuẩn tìm kiếm.",

		/* OD Save Search dialog */
		reload_label: "Tải lại",
		od_save_search_help_text: "Gõ tên tìm kiếm hoặc chọn một tìm kiếm đã có để thay thế",
		public_access_label: "Cho phép người khác dùng tìm kiếm này",
		od_delete_search_help_text: "Chọn một hoặc nhiều tìm kiếm để xóa",
		delete_save_searches: "Xóa tìm kiếm đã lưu",

		/* Unified Search */
		unified_search_enable_text_search: "Bao gồm tiêu chí tìm kiếm văn bản",
		unified_search_text_search_enabled: "Ðã bao gồm tìm kiếm văn bản",
		unified_search_mapping: "Ánh xạ",
		unified_search_new_mapping: "Ánh xạ mới",
		unified_search_mapping_name: "Tên ánh xạ",
		unified_search_mapping_dialog_instructions: "Chọn thuộc tính muốn ánh xạ. Một số thuộc tính có thể được ánh xạ thành thuộc tính với kiểu dữ liệu khác. Ví dụ, có thể ánh xạ một thuộc tính chuỗi thành một thuộc tính số nguyên. Khi ánh xạ một thuộc tính thành một thuộc tính khác, thuộc tính được xem như là một thuộc tính đơn trong tìm kiếm kho lưu trữ chéo.",
		unified_search_filter_available_properties: "Lọc các thuộc tính có sẵn",
		unified_search_available_properties: "Thuộc tính có sẵn",
		unified_search_mapped_properties: "Thuộc tính đã ánh xạ",
		unified_search_single_values: "giá trị đơn",
		unified_search_multiple_values: "đa giá trị",
		unified_search_add_mapping: "Thêm ánh xạ",
		unified_search_warn_remove_repository: "Kho lưu trữ đã chọn được dùng trong tiêu chí tìm kiếm.\nNếu xóa kho lưu trữ, bất kỳ ánh xạ và tiêu chí tìm kiếm nào có chứa kho lưu trữ này cũng sẽ bị xóa.\n\nBạn có muốn xóa kho lưu trữ hay không?",
		unified_search_warn_update_repository_mappings: "Việc thay đổi lựa chọn thuộc tính cho kho lưu trữ này sẽ ảnh hưởng đến tiêu chí tìm kiếm.\n\nTiêu chí tìm kiếm bao gồm một hoặc nhiều ánh xạ mà trong đó có một hoặc nhiều thuộc tính mà bạn đang gỡ bỏ. Bất kỳ ánh xạ nào có bao gồm các thuộc tính mà bạn đang gỡ bỏ cũng phải được xóa. Bất kỳ tiêu chí tìm kiếm nào có bao gồm các ánh xạ này cũng phải được xóa để chạy tìm kiếm.\n\nBạn có muốn cập nhật các tùy chọn kho lưu trữ và xóa các ánh xạ và tiêu chí tìm kiếm không?",
		unified_search_warn_update_repository_mappings_reset: "Bao gồm tiêu chí tìm kiếm văn bản cho kho lưu trữ này sẽ ảnh hưởng đến tiêu chí tìm kiếm kho lưu trữ chéo.\n\nBất kỳ tiêu chí tìm kiếm thuộc tính nào bao gồm một ánh xạ có các thuộc tính cho kho lưu trữ này sẽ phải được xóa để chạy tìm kiếm.\n\nBạn có muốn cập nhật tùy chọn kho lưu trữ và xóa tiêu chí tìm kiếm không?",
		unified_search_warn_update_repository_text_criteria: "Gỡ bỏ tiêu chí tìm kiếm văn bản cho kho lưu trữ này sẽ ảnh hưởng đến tiêu chí tìm kiếm kho lưu trữ chéo.\n\nTiêu chí tìm kiếm văn bản sẽ phải được xóa khỏi tiêu chí tìm kiếm kho lưu trữ chéo để chạy tìm kiếm.\n\nBạn có muốn cập nhật tùy chọn kho lưu trữ và xóa tiêu chí tìm kiếm văn bản không?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Gỡ bỏ tiêu chí tìm kiếm văn bản và thay đổi lựa chọn thuộc tính cho kho lưu trữ này sẽ ảnh hưởng đến tiêu chí tìm kiếm kho lưu trữ chéo.\n\nTiêu chí tìm kiếm văn bản phải được xóa khỏi tiêu chí tìm kiếm kho lưu trữ chéo để chạy tìm kiếm. Ðồng thời, tiêu chí tìm kiếm thuộc tính bao gồm một hoặc nhiều ánh xạ có một hoặc nhiều thuộc tính mà bạn đang gỡ bỏ. Bất kỳ ánh xạ nào có bao gồm các thuộc tính mà bạn đang gỡ bỏ cũng phải được xóa. Bất kỳ tiêu chí tìm kiếm thuộc tính nào có chứa các ánh xạ này cũng đều bị xóa để chạy tìm kiếm.\n\nBạn có muốn cập nhật các tùy chọn kho lưu trữ và xóa tiêu chí tìm kiếm văn bản, ánh xạ và tiêu chí tìm kiếm thuộc tính không?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Loại trừ tiêu chí tìm kiếm văn bản cho kho lưu trữ này sẽ ảnh hưởng tiêu chí tìm kiếm kho lưu trữ chéo.\n\nBất kỳ tiêu chí tìm kiếm thuộc tính nào bao gồm một ánh xạ có các thuộc tính cho kho lưu trữ này sẽ phải được xóa để chạy tìm kiếm. Tiêu chí tìm kiếm văn bản có thể được xóa khỏi tiêu chí tìm kiếm kho lưu trữ chéo để chạy tìm kiếm.\n\nBạn có muốn cập nhật tùy chọn kho lưu trữ và xóa tiêu chí tìm kiếm không?",
		unified_search_warn_remove_mapping: "Gỡ bỏ ánh xạ này sẽ ảnh hưởng đến tiêu chí tìm kiếm.\n\nTiêu chí tìm kiếm dùng ánh xạ này sẽ phải bị xóa để chạy tìm kiếm.\n\nBạn có muốn cập nhật ánh xạ và xóa tiêu chí tìm kiếm không?",
		unified_search_warn_update_mapping: "Thay đổi ở ánh xạ này sẽ ảnh hưởng đến tiêu chí tìm kiếm.\n\nTiêu chí tìm kiếm dùng ánh xạ này sẽ phải bị xóa để đảm bảo rằng tìm kiếm không chứa các toán tử hoặc giá trị không hợp lệ.\n\nBạn có muốn cập nhật ánh xạ và xóa tiêu chí tìm kiếm không?",
		unified_search_warn_update_mapping_not_searchable: "Thay đổi ở ánh xạ này sẽ ảnh hưởng đến tiêu chí tìm kiếm.\n\nKhi thuộc tính đã ánh xạ đều ở dạng chỉ hiển thị, bạn sẽ không thể dùng ánh xạ trong tiêu chí tìm kiếm. Tiêu chí tìm kiếm dùng ánh xạ này sẽ phải bị xóa để chạy tìm kiếm.\n\nBạn có muốn cập nhật ánh xạ và xóa tiêu chí tìm kiếm không?",
		unified_search_warn_update_mapping_box_searchable: "Thay đổi ở ánh xạ này sẽ ảnh hưởng đến tiêu chí tìm kiếm.\n\nTiêu chí tìm kiếm đã bao gồm ánh xạ này nhiều hơn một lần, và nếu bạn thêm thuộc tính ${0} từ kho lưu trữ ${1}, tiêu chí tìm kiếm sẽ bao gồm thuộc tính ${0} rất nhiều lần. Tiêu chí tìm kiếm dùng ánh xạ này sẽ phải bị xóa để chạy tìm kiếm.\n\nBạn có muốn cập nhật ánh xạ và xóa tiêu chí tìm kiếm không?",
		unified_search_details: "Chi tiết tìm kiếm kho lưu trữ chéo",
		unified_search_fixed_value_property: "Thuộc tính giá trị cố định",
		unified_search_required_property: "Thuộc tính yêu cầu",
		unified_search_display_only_property: "Thuộc tính chỉ hiển thị",
		unified_search_missing_required_properities: "Không thể lưu hoặc chạy tìm kiếm.<br/>Các thuộc tính sau đây là thuộc tính yêu cầu:${0}Phải bao gồm thuộc tính trong ánh xạ và thêm thuộc tính có giá trị vào tiêu chí tìm kiếm.",
		unified_search_property_repostory: "${0} (Kho lưu trữ: ${1})",
		unified_search_builder_no_mappings: "Không thể chạy tìm kiếm.<br/>Bạn phải tạo một ánh xạ thuộc tính và đưa nó vào <b>Hiển thị kết quả</b> để tìm kiếm có thể hiển thị kết quả của bạn.",
		unified_search_builder_insufficient_criteria_to_run: "Không thể chạy tìm kiếm.<br/>Tiêu chí tìm kiếm không gồm tiêu chí tìm kiếm văn bản hoặc giá trị thuộc tính cho các kho lưu trữ sau:${0}Với mỗi kho lưu trữ được đưa vào trong tìm kiếm, bạn phải nhập tiêu chí tìm kiếm văn bản, hoặc tạo ánh xạ thuộc tính, đưa nó vào tiêu chí thuộc tính và xác định giá trị thuộc tính.",
		unified_search_builder_insufficient_criteria_to_save: "Không thể lưu tìm kiếm.<br/>Tìm kiếm không bao gồm tiêu chí tìm kiếm cho các kho lưu trữ sau:${0}Với mỗi kho lưu trữ được đưa vào trong tìm kiếm, bạn phải thực hiện một trong các tùy chọn sau:<ol><li>Tạo ánh xạ thuộc tính và đưa nó vào tiêu chí thuộc tính.</li><li>Ðiều chỉnh kho lưu trữ để đưa vào tiêu chí tìm kiếm văn bản, và tạo ánh xạ thuộc tính và đưa nó vào <b>Hiển thị kết quả</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Không thể chạy tìm kiếm.<br/>Với mỗi kho lưu trữ được bao gồm trong tìm kiếm, bạn phải xác định ít nhất một giá trị thuộc tính. Ví dụ, bạn có thể định rõ giá trị cho các thuộc tính sau: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Không thể chạy tìm kiếm.<br/>Yêu cầu phải có tiêu chí tìm kiếm văn bản.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Không thể chạy tìm kiếm.<br/>Với mỗi kho lưu trữ được bao gồm trong tìm kiếm, bạn phải định rõ ít nhất một giá trị thuộc tính hoặc nhập tiêu chí tìm kiếm văn bản. Ví dụ, bạn có thể định rõ giá trị cho các thuộc tính sau: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Không thể chạy tìm kiếm.<br/>Yêu cầu phải có tiêu chí tìm kiếm văn bản. Với mỗi kho lưu trữ được bao gồm trong tìm kiếm, bạn phải định rõ ít nhất một giá trị thuộc tính hoặc nhập tiêu chí tìm kiếm văn bản. Ví dụ, bạn có thể định rõ giá trị cho các thuộc tính sau: ${0}",
		unified_search_invalid_criteria: "Tìm kiếm có chứa tiêu chí không hợp lệ làm ngăn việc chạy tìm kiếm.<br/>Tiêu chí không hợp lệ đã bị xóa. Tuy nhiên, phải lưu các thay đổi ở tìm kiếm trước khi chạy tìm kiếm. Nếu không muốn lưu thay đổi, hãy đóng tìm kiếm.<br/><br/>Các mục sau đây đã bị xóa hoặc điều chỉnh:${0}",
		unified_search_invalid_fixed_values: "Không thể lưu hoặc chạy tìm kiếm.<br/>Tiêu chí tìm kiếm sau đây có các giá trị cố định không hợp lệ:${0}Thực hiện một trong những thao tác sau để khắc phục sự cố:<ul><li>Xóa tiêu chí tìm kiếm chứa giá trị không hợp lệ</li><li>Sửa ánh xạ có chứa thuộc tính IBM Content Manager OnDemand với giá trị cố định để xóa thuộc tính.</li><li>Sửa ánh xạ có chứa thuộc tính IBM Content Manager OnDemand với giá trị cố định để tương thích tất cả thuộc tính. Ðể biết thêm thông tin về thuộc tính nào có thể được ánh xạ, xem liên kết Tìm hiểu thêm trong văn bản hướng dẫn nằm phía trên cùng cửa sổ ánh xạ thuộc tính.</li></ul>",
		unified_search_cannot_add_properties: "Bạn không thể thêm thuộc tính vào tìm kiếm này.<br/>Tất cả thuộc tính đã ánh xạ có sẵn của bạn đều đã có trong tiêu chí tìm kiếm, và chỉ có thêm mỗi thuộc tính một lần duy nhất vào tìm kiếm.",
		unified_search_mapping_not_viewable: "Không thể hiển thị thuộc tính mẫu Box trong kết quả tìm kiếm. Nếu bạn muốn thêm ánh xạ này làm một cột, bạn phải ánh xạ ít nhất một thuộc tính không phải là thuộc tính mẫu Box. Ví dụ, bạn có thể chọn một thuộc tính từ kho lưu trữ khác.",

		unified_search_returned_more: "Có ít nhất một kho lưu trữ đã vượt quá kết quả tối đa cho phép.",
		unified_search_partial_failure: "Ðã xảy ra lỗi ở ít nhất một kho lưu trữ.",
		unified_search_partial_failure_and_returned_more: "Ðã xảy ra lỗi ở ít nhất một kho lưu trữ, và có ít nhất một kho lưu trữ đã vượt quá kết quả tối đa cho phép.",
		unified_search_see_analysis: "Xem phân tích kết quả.",
		unified_search_analysis_intro_returned_more: "Với mỗi kho lưu trữ vượt quá kết quả tối đa cho phép, hãy thử lọc lại tiêu chí tìm kiếm để trả về ít kết quả hơn. Hoặc bạn có thể chạy tìm kiếm một kho lưu trữ để trả về nhiều kết quả hơn so với số lượng tối đa cho phép ở tìm kiếm kho lưu trữ chéo.",
		unified_search_analysis_intro_partial_failure: "Xem lại thông tin lỗi do một hoặc nhiều kho lưu trữ trả về. Nếu thích hợp, khắc phục lỗi và chạy lại tìm kiếm kho lưu trữ chéo.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Với mỗi kho lưu trữ bị lỗi, hãy cố gắng xử lý vấn đề và chạy lại tìm kiếm.<br/><br/>Với mỗi kho lưu trữ vượt quá kết quả tối đa cho phép, hãy thử lọc lại tiêu chí tìm kiếm để trả về ít kết quả hơn. Hoặc bạn có thể chạy tìm kiếm một kho lưu trữ để trả về nhiều kết quả hơn so với số lượng tối đa cho phép ở tìm kiếm kho lưu trữ chéo.",
		unified_search_results_found: "Kết quả tìm thấy",
		unified_search_maximum_allowed: "Tối đa cho phép",
		unified_search_maximum_exceeded: "Ðã vượt mức tối đa",

		unified_search_mapping_rule_box: "Không thể thêm thuộc tính này vào ánh xạ.<p>Thuộc tính ${0} từ kho lưu trữ ${1} đã có ở một ánh xạ khác, và chỉ có thể bao gồm thuộc tính có thể tìm kiếm từ kho lưu trữ này vào một ánh xạ ở mỗi lần tìm kiếm.<br/>Chọn một thuộc tính khác để thêm vào ánh xạ.</p>",
		unified_search_mapping_rule_repository: "Không thể thêm thuộc tính vào ánh xạ.<br/>Ánh xạ đã bao gồm một thuộc tính từ kho lưu trữ ${0}. Một ánh xạ chỉ có thể bao gồm một thuộc tính từ một kho lưu trữ.<br/>Chọn kho lưu trữ khác để thêm thuộc tính từ đó, hoặc tạo ánh xạ mới cho thuộc tính đã chọn.",
		unified_search_mapping_rule_data_type: "Không thể thêm thuộc tính vào ánh xạ.<br/>Không thể ánh xạ thuộc tính ${0} thành thuộc tính ${1}. Chọn thuộc tính khác để ánh xạ, hoặc tạo ánh xạ mới cho thuộc tính đã chọn.<br/>Ðể biết thêm thông tin về thuộc tính nào có thể được ánh xạ, xem liên kết Tìm hiểu thêm trong văn bản hướng dẫn ở phía trên cùng cửa sổ này.",
		unified_search_mapping_rule_cardinality: "Không thể thêm thuộc tính vào ánh xạ.<br/>Tất cả thuộc tính trong ánh xạ phải hỗ trợ các giá trị đơn hoặc đa giá trị. Thuộc tính đã chọn hỗ trợ ${0}, và thuộc tính trong ánh xạ hỗ trợ ${1}.<br/>Chọn thuộc tính khác để thêm vào ánh xạ, hoặc tạo ánh xạ mới cho thuộc tính đã chọn.",
		unified_search_mapping_rule_fixed_value: "Không thể thêm thuộc tính vào ánh xạ.<br/>Ánh xạ đã bao gồm một thuộc tính có giá trị cố định. Một ánh xạ chỉ có thể bao gồm một thuộc tính có giá trị cố định.<br/>Chọn thuộc tính khác để thêm vào ánh xạ, hoặc tạo ánh xạ mới cho thuộc tính đã chọn.",
		unified_search_mapping_rule_child_component: "Không thể thêm thuộc tính vào ánh xạ.<br/>Không thể ánh xạ thuộc tính có thành phần con thành các thuộc tính khác. Nếu muốn có thể tìm kiếm trên thuộc tính này, tạo một ánh xạ mới cho thuộc tính đã chọn.",
		unified_search_mapping_rule_operator_intersection: "Không thể thêm thuộc tính vào ánh xạ.<br/>Tất cả thuộc tính trong ánh xạ phải có một hoặc nhiều toán tử chung. Tuy nhiên, thuộc tính ${0} không có bất kỳ toán tử chung nào với các thuộc tính khác trong ánh xạ.<br/>Nếu được, chọn một thuộc tính khác. Nếu phải bao gồm thuộc tính đã chọn, liên hệ với quản trị viên hệ thống để sửa lại toán tử có liên quan đến thuộc tính.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Thiết lập nâng cao",
		advanced_search_options_intro: "Thiết lập tùy chọn tiêu chí nâng cao.",
		advanced_search_options_editable: "Có thể hiệu chỉnh",
		advanced_search_options_readonly: "Chỉ đọc",
		advanced_search_options_required: "Bắt buộc",
		advanced_search_options_hidden: "Ẩn",
		advanced_search_options_property_editable:"Thuộc tính là:",
		advanced_search_options_operators:"Toán tử:",
		advanced_search_options_use_all:"Sử dụng tất cả",
		advanced_search_options_use_selected:"Sử dụng mục đã chọn",
		advanced_search_options_operators_filtered: "Toán tử đã lọc",
		// Data types in lowercase
		data_type_boolean: "kiểu boolean",
		data_type_date: "ngày",
		data_type_time: "giờ",
		data_type_timestamp: "nhãn thời gian",
		data_type_decimal: "giá trị thập phân",
		data_type_double: "số dấu chấm động",
		data_type_short: "số nguyên",
		data_type_integer: "số nguyên",
		data_type_long: "số nguyên",
		data_type_string: "chuỗi văn bản",
		data_type_string_alpha: "chuỗi chữ",
		data_type_string_alphanum: "chuỗi số và chữ",
		data_type_string_ext: "chuỗi số và chữ mở rộng",
		data_type_string_num: "chuỗi số",
		data_type_binary: "nhị phân",
		data_type_object: "đối tượng",
		data_type_guid: "mã nhận dạng duy nhất toàn cầu",
		data_type_user: "người dùng",
		data_type_child_component: "thành phần con",

		/* Print Dialog */
		print_title: "In",
		print_message: "In: ${0}",
		print_print_button: "In",
		print_clean_margins_button: "Thiết lập Tất cả thành 0",
		print_type: "Kiểu máy in:",
		print_printer_server_options: "Tùy chọn in máy chủ",
		print_printer_properties: "Thuộc tính máy in",
		print_printer_fax_properties: "Thuộc tính fax",
		print_printer_name: "Tên máy in:",
		print_fax_recipient: "Người nhận",
		print_fax_sender: "Người gửi",
		print_copies: "Bản sao:",
		print_local_orientation: "Ðịnh hướng",
		print_local_orientation_landscape: "Phong cảnh",
		print_local_orientation_portrait: "Chân dung",
		print_local_margins: "Lề",
		print_local_margins_top: "Trên",
		print_local_margins_bottom: "Dưới",
		print_local_margins_left: "Trái",
		print_local_margins_right: "Phải",
		print_printer_server: "Máy chủ",
		print_printer_local: "Nội bộ",
		print_property_class: "Lớp:",
		print_property_routing: "Ðịnh tuyến:",
		print_property_pagedef: "Ðịnh nghĩa trang:",
		print_property_node: "Nút:",
		print_property_writer: "Trình ghi:",
		print_property_formdef: "Ðịnh nghĩa biểu mẫu:",
		print_property_printerid: "Ðích:",
		print_property_forms: "Biểu mẫu:",
		print_property_faxnotes: "Ghi chú:",
		print_property_faxcompany: "Công ty:",
		print_property_faxnumber: "Số fax:",
		print_property_faxname: "Tên:",
		print_property_faxsendertelnumber: "Số điện thoại:",
		print_property_faxcoverpage: "Trang bìa:",
		print_property_faxsubject: "Chủ đề:",
		print_saveoptions: "Lưu tùy chọn in",
		print_property_bannerpage: "Dùng trang cờ hiệu",
		print_print_with_info_fields: "In với trường thông tin",
		print_field_from: "Từ",
		print_field_to: "Ðến",
		print_invalid_value_class: "Ký tự hợp lệ là A-Z hoặc 0-9",
		print_invalid_value_pagedef: "Ký tự hợp lệ là số hoặc chữ, hoặc ký tự @, #, hoặc $",
		print_invalid_value_writer: "Ký tự hợp lệ là số hoặc chữ, hoặc ký tự @, #, hoặc $",
		print_invalid_value_formdef: "Ký tự hợp lệ là số hoặc chữ, hoặc ký tự @, #, hoặc $",
		print_invalid_value_forms: "Ký tự hợp lệ là số hoặc chữ, hoặc ký tự @, #, hoặc $",
		print_invalid_value_margin: "Số hợp lệ là giữa ${0} và ${1}",
		print_status_message: "${0} tài liệu được gửi đến máy in ${1}.",

		print_applet_init_error: "Không thể khởi động applet in.",
		print_applet_init_error_explanation: "Có thể xảy ra sự cố này do các nguyên nhân sau: <br/><br/><ul><li>Không cài đặt Môi trường thời gian chạy Java (JRE) trên máy trạm của bạn.</li><li>Plug-in Java không được kích hoạt trong trình duyệt web của bạn.</li><li>Phiên bản JRE trên máy trạm của bạn không tương thích với phiên bản IBM Content Navigator.</li><li>Trình duyệt đã hết thời gian chờ applet in khởi động.</li></ul>",
		print_applet_init_error_userResponse: "Bạn có thể hoàn tất các bước sau đây để xử lý vấn đề này với JRE:<br/><br/><ol><li>Ðảm bảo JRE đã được cài đặt trên máy trạm của bạn.</li><li>Ðảm bảo đã bật plug-in Java trong trình duyệt web của bạn.</li><li>Ðảm bảo phiên bản JRE trên máy trạm của bạn tương thích với IBM Content Navigator và thử lại. Danh sách các phiên bản hỗ trợ được liệt kê trong tài liệu <i>Điều kiện tiên quyết về phần cứng và phần mềm cho IBM Content Navigator</i> trên trang hỗ trợ phần mềm IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Trang bìa",
		daeja_print_selected_documents_title: "Tài liệu đã chọn",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Khớp tất cả tiêu chí tìm kiếm",
		match_any_criteria: "Khớp tiêu chí tìm kiếm bất kỳ",
		include_subfolders_summary: "${0} (bao gồm thư mục con)",
		browse_button: "Duyệt&hellip;",
		search_for: "Tìm kiếm cho:",
		object_type_documents: "Tài liệu",
		object_type_folders: "Thư mục",
		object_type_documents_folders: "Tài liệu và thư mục",
		object_type_web_links: "Liên kết web",
		object_type_documents_folders_web_links: "Chứng từ, thư mục và liên kết web",

		/* SelectSearchFolderDialog */
		search_in: "Tìm kiếm trong:",
		include_subfolders: "Bao gồm thư mục con",

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
		locked_item_icon_title: "Được khóa bởi ${0}",
		checked_out_icon_title: "Ðược kiểm xuất bởi ${0}",
		major_minor_version_icon_title: "Phiên bản chính có các phiên bản phụ",
		suspended_icon_title: "Luồng công việc đang chờ xử lý",
		on_hold_icon_title: "Ðang giữ",
		has_notes_icon_title: "Có ghi chú",
		record_icon_title: "Khai báo ở dạng bản ghi",
		compound_document_icon_title: "Tài liệu phức",
		validateTemplate_icon_title: "Mẫu vùng nhóm cần xác thực",
		offlineTemplate_icon_title: "Mẫu vùng nhóm đang ngoại tuyến",
		offlineTeamspace_icon_title: "Vùng nhóm đang ngoại tuyến",
		pending_delete_icon_title: "Vùng nhóm đang chờ xử lý xóa",
		delete_error_icon_title: "Vùng nhóm không thể xóa được",
		defaultTemplate_icon_title: "Mẫu vùng nhóm mặc định",
		teamspace_icon_title: "Vùng nhóm",
		teamspace_template_icon_title: "Mẫu vùng nhóm",
		has_bookmark_icon_title: "Có đánh dấu trang",
		read_only_icon_title: "Chỉ đọc",
		no_results_were_found: "Không tìm thấy kết quả nào.",
		folder_is_empty: "Thư mục trống.",
		no_checked_out_items: "Bạn không có bất kỳ mục nào được kiểm xuất.",
		inbasket_is_empty: "Trong rổ đã đầy.",
		worklist_is_empty: "Danh sách công việc trống.",
		tracker_milestone_completed: "Ðã hoàn tất",
		stepprocessor_attachments_title: "Nội dung",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Khóa mục",
		unlock_items: "Mở khóa mục",
		checkin_item: "Kiểm nhập mục",

		/* Help */
		learn_more: "Tìm hiểu thêm",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Mở vùng nhóm",
		repository_tab_createWorkspace: "Vùng nhóm mới",
		repository_tab_createWorkspaceTemplate: "Mẫu vùng nhóm mới",
		repository_tab_DefaultTemplate: "Mặc định",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Tác vụ này sao chép các tài liệu.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Bạn không có quyền sửa đối với mẫu vùng nhóm đã chọn.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Bạn có chắc chắn là muốn xóa vùng nhóm ${0} không? <br><br>Chỉ tài liệu được lưu ở thư mục khác trong kho lưu trữ được duy trì trong kho lưu trữ. Mọi tài liệu được lưu trong vùng nhóm sẽ bị xóa.",
		teamspaceDecommissionLabel: "Xóa:",
		teamspaceDecommissionDescription: "Xóa vùng nhóm sẽ xóa vùng nhóm này khỏi máy chủ: Cho biết cách xử lý thành phần phát sinh của vùng nhóm.",
		teamspaceDecommissionOptions: "Xóa tùy chọn vùng nhóm",
		teamspaceDecommissionDeleteAll: "Xóa tất cả thành phần phát sinh của vùng nhóm",
		teamspaceDecommissionReFileAll: "Lưu lại tất cả thành phần phát sinh của vùng nhóm",
		teamspaceDecommissionReFileDestination: "Chuyển đến:",
		teamspaceDecommissionReFileIn: "Lưu lại trong",
		teamspaceDecommissionTaskName: "Tác vụ xóa vùng nhóm",
		teamspaceDecommissionTaskDescription: "Tác vụ này xóa một vùng nhóm khỏi kho lưu trữ.",
		teamspaceDecommissionDeletionStarted: "Vùng nhóm đã được lên lịch để xóa",
		teamspaceDecommissionDeletionConnectionFailed: "Tác vụ xóa vùng nhóm không thể chạy vì nó không thể kết nối với kho lưu trữ. Ðảm bảo chứng danh của quản trị viên kho lưu trữ là đúng.",

		teamspace_edit_properties_notsupported: "Bạn chỉ có thể sửa thuộc tính của vùng nhóm từ màn hình Vùng nhóm.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Vùng nhóm đang ngoại tuyến và chỉ có thể mở bởi chủ sở hữu vùng nhóm",

		/* Teamspace Builder widget */
		workspace_validation_document: "Tài liệu:",
		workspace_validation_folder: "Thư mục:",
		workspace_validation_ets: "Mẫu nhập sau đây không có trong kho lưu trữ này và đã bị xóa khỏi danh sách mẫu nhập đã chọn:",
		workspace_validation_classes: "Lớp sau đây không có trong kho lưu trữ này và đã bị xóa khỏi danh sách lớp đã chọn:",
		workspace_validation_searches: "Tìm kiếm sau đây không có trong kho lưu trữ này và đã bị xóa khỏi danh sách tìm kiếm đã chọn:",
		workspace_validation_docs_folders: "Tài liệu và thư mục sau đây không có trong kho lưu trữ này và đã bị xóa khỏi danh sách các mục được bao gồm:",
		workspace_change_template_confirmation_question: "Nếu chọn một mẫu khác, tất cả thay đổi của bạn sẽ bị mất. Bạn có muốn tiếp tục không?\n",
		workspace_delete_item_confirmation_question: "Bạn có muốn xóa mục ${0} không?\n",
		workspace_delete_role_confirmation_question: "Bạn có muốn xóa vai trò ${0} không?\n",
		workspace_delete_confirmation_question: "Nếu xóa vùng nhóm, chỉ vùng chứa vùng nhóm bị xóa. Tài liệu và thư mục trong vùng nhóm vẫn còn trên kho lưu trữ và có thể tìm thấy bằng tìm kiếm. Ðể xóa nội dung của vùng nhóm, xóa mục trong vùng nhóm trước và sau đó xóa vùng nhóm.<br><br>Bạn có muốn xóa vùng nhóm ${0} không?",
		workspacebuilder_instance_template_name_header: "Tên mẫu vùng nhóm",
		workspacebuilder_instance_template_description_header: "Mô tả",

		workspacebuilder_template_tooltip_name: "Tên mẫu không thể chứa bất kỳ ký tự nào sau đây: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Tên vùng nhóm không thể chứa bất kỳ ký tự nào sau đây: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Cung cấp mô tả giúp người dùng thực hiện chọn lựa đúng từ danh sách mẫu. Ví dụ, bạn có thể bao gồm thông tin về người dùng dự định hoặc việc sử dụng mẫu.",
		workspacebuilder_instance_tooltip_description: "Cung cấp mô tả giúp người dùng phân biệt giữa vùng nhóm này và các vùng nhóm khác.",

		workspacebuilder_template_edit_properties_pane: "Sửa mẫu vùng nhóm",
		workspacebuilder_instance_properties_pane: "Xác định vùng nhóm",
		workspacebuilder_template_properties_pane: "Xác định mẫu vùng nhóm",

		workspacebuilder_instance_security_pane: "Đặt bảo mật vùng nhóm",
		workspacebuilder_template_security_pane: "Ðặt bảo mật mẫu",

		workspacebuilder_layout_pane: "Chọn bố cục",
		workspacebuilder_search_templates_pane: "Chọn tìm kiếm",
		workspacebuilder_document_folders_pane: "Bao gồm thư mục và tài liệu",
		workspacebuilder_doctypes_entryTemplates_pane: "Chọn lớp hoặc mẫu nhập",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Chọn lớp",
		workspacebuilder_security: "Bảo mật vùng nhóm",

		workspacebuilder_roles_pane: "Chọn vai trò",
		workspacebuilder_security: "Bảo mật",

		workspacebuilder_properties_templates: "Mẫu có sẵn:",
		workspacebuilder_available_templates: "Tìm kiếm có sẵn:",
		workspacebuilder_selected_templates: "Tìm kiếm đã chọn:",
		workspacebuilder_templates_name: "Tìm kiếm tên",

		workspacebuilder_available_entryTemplates: "Mẫu nhập có sẵn:",
		workspacebuilder_selected_entryTemplates: "Mẫu nhập đã chọn:",

		workspacebuilder_item_classes: "Lớp có sẵn:",
		workspacebuilder_item_classes_selected: "Lớp đã chọn:",
		workspacebuilder_properties_select_template: "Chọn mẫu để dùng cho vùng nhóm này.",
		workspacebuilder_template_properties: "Xác định mẫu vùng nhóm",
		workspacebuilder_instance_properties: "Xác định vùng nhóm",
		workspacebuilder_template_introText: "Ðịnh rõ các thành phần chung mà bạn muốn bao gồm trong mỗi vùng nhóm được tạo từ mẫu này bằng cách dùng các lựa chọn trong điều hướng. Khi thực hiện xong, nhấp <b>Hoàn tất</b> để những người dùng khác có thể dùng mẫu này để tạo các vùng nhóm mới.",
		workspacebuilder_instance_introText: "Nhóm dùng vùng nhóm để chia sẻ và làm việc với các tập hợp tài liệu cụ thể. Cung cấp mô tả và tên có nghĩa cho vùng nhóm này để giúp người dùng phân biệt vùng nhóm này với các vùng nhóm khác. Có thể tùy chỉnh vùng nhóm bằng cách bao gồm thêm các tìm kiếm, lớp hoặc mẫu nhập, tài liệu và thư mục.",

		workspacebuilder_template_search_template_introText: "Chọn tìm kiếm mặc định muốn bao gồm trong mỗi vùng nhóm được tạo từ mẫu này. Nếu không có tìm kiếm nào được chọn, người dùng vùng nhóm sẽ thấy tất cả tìm kiếm mà họ có truy cập đến. Với quyền phù hợp, người dùng có thể chia sẻ và thêm tìm kiếm trong vùng nhóm.",
		workspacebuilder_instance_search_template_introText: "Bao gồm tìm kiếm giúp người dùng vùng nhóm hoàn tất tác vụ hiệu quả hơn. Nếu không có tìm kiếm nào được bao gồm, người dùng vùng nhóm sẽ thấy tất cả tìm kiếm mà họ có quyền. Người dùng cũng có thể thêm và chia sẻ trong vùng nhóm với quyền thích hợp.",

		workspacebuilder_template_roles_introText: "Người dùng vùng nhóm được gán các vai trò. Vai trò định rõ tác vụ mà người dùng được phép thực hiện. Nhấp biểu tượng kế bên mỗi vai trò để xem tác vụ cho phép. Chọn vai trò phù hợp cho vùng nhóm.",
		workspacebuilder_template_roles_modify_introText: "Có thể điều chỉnh quyền liên quan đến từng vai trò trong vùng nhóm này. Bạn phải thông báo cho thành viên vùng nhóm khi quyền của họ thay đổi.",

		workspacebuilder_template_roles_header_name: "Tên vai trò",

		workspacebuilder_template_folders_introText: "Chọn tài liệu và thư mục mặc định để đưa vào mỗi vùng nhóm được tạo từ mẫu này. Bạn có thể thêm tài liệu ở dạng liên kết hoặc bản sao. Dùng liên kết để chỉ đến tài liệu muốn sao chép nhiều bản, ví dụ như chính sách hoặc quy trình. Tạo bản sao của tài liệu mà người dùng sẽ điều chỉnh, như mẫu hoặc biểu mẫu.",
		workspacebuilder_instance_folders_introText: "Chọn tài liệu và thư mục mặc định để đưa vào vùng nhóm. Bạn có thể thêm tài liệu ở dạng liên kết hoặc bản sao. Dùng liên kết để chỉ đến tài liệu muốn sao chép nhiều bản, ví dụ như chính sách hoặc quy trình. Tạo bản sao của tài liệu mà người dùng sẽ điều chỉnh, như mẫu hoặc biểu mẫu.",

		workspacebuilder_template_roles_introText: "Ðịnh rõ vai trò sẽ được bao gồm trong mỗi vùng nhóm được tạo từ mẫu này. Bạn cũng có thể tạo ra vai trò mới để có thể dùng khi tạo các mẫu vùng nhóm khác.",
		workspacebuilder_instance_users_introText: "Trong một vùng nhóm, mỗi người dùng được gán cho một hoặc nhiều vai trò định rõ tác vụ mà người dùng có thể hoàn tất. Thêm người dùng vào vùng nhóm và gán vai trò cho người dùng.",

		workspacebuilder_instance_navigation_pane_title: "Trình tạo vùng nhóm",
		workspacebuilder_template_navigation_pane_title: "Trình tạo mẫu vùng nhóm",

		workspacebuilder_roles_roles_nopermissions: "Không có quyền nào được chọn cho vai trò {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Vai trò đã chọn:",
		workspacebuilder_roles_available_roles: "Vai trò có sẵn:",
		workspacebuilder_roles_privilege_header: "Quyền",
		workspacebuilder_roles_select_role: "Chọn vai trò",
		workspacebuilder_roles_select_permission: "Chọn quyền",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Ðã tồn tại vai trò có tên {0}. Phải định rõ một tên duy nhất cho vai trò. ",
		workspacebuilder_roles_edit_dialog_role_name: "Tên vai trò:",
		workspacebuilder_roles_edit_dialog_role_description: "Mô tả vai trò:",
		workspacebuilder_roles_edit_dialog_title_new: "Vai trò mới",
		workspacebuilder_roles_edit_dialog_title_edit: "Sửa vai trò",

		workspacebuilder_roles_privileges_header: "Quyền đối với vai trò {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Quyền tài liệu:",
		workspacebuilder_roles_priv_group_folder: "Quyền thư mục:",
		workspacebuilder_roles_priv_group_teamspace: "Quyền vùng nhóm:",
		workspacebuilder_roles_priv_group_item: "Quyền tài liệu và thư mục:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Quản lý quyền",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Người dùng có quyền này có thể quản lý truy cập đến tài liệu và thư mục trong vùng nhóm. Quyền này bao gồm việc cho phép những người dùng khác xóa, sửa thuộc tính, tạo thư mục con, v.v...",

		workspacebuilder_roles_priv_deleteItems: "Xóa",
		workspacebuilder_roles_plbl_deleteItems: "Người dùng có quyền này có thể xóa tài liệu và thư mục trong vùng nhóm.",

		workspacebuilder_roles_priv_createItems: "Tạo",
		workspacebuilder_roles_plbl_createItems: "Người dùng có quyền này có thể tạo tài liệu và thư mục trong vùng nhóm.",

		workspacebuilder_roles_priv_viewItemProperties: "Xem thuộc tính",
		workspacebuilder_roles_plbl_viewItemProperties: "Người dùng có quyền này có thể xem thuộc tính của tài liệu và thư mục trong vùng nhóm, bao gồm cả thuộc tính hệ thống.",

		workspacebuilder_roles_priv_modifyItemProperties: "Sửa thuộc tính",
		workspacebuilder_roles_plbl_modifyItemProperties: "Người dùng có quyền này có thể sửa thuộc tính của tài liệu và thư mục trong vùng nhóm.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Quyền quản lý thư mục",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Người dùng có quyền này có thể quản lý truy cập đến thư mục trong vùng nhóm. Quyền này bao gồm việc cho phép những người dùng khác xóa thư mục, sửa thuộc tính thư mục, tạo thư mục con, v.v...",

		workspacebuilder_roles_priv_deleteFolders: "Xóa thư mục",
		workspacebuilder_roles_plbl_deleteFolders: "Người dùng có quyền này có thể xóa thư mục trong vùng nhóm.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Sửa thuộc tính thư mục",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Người dùng có quyền này có thể sửa thuộc tính thư mục trong vùng nhóm.",

		workspacebuilder_roles_priv_createSubfolders: "Tạo thư mục con",
		workspacebuilder_roles_plbl_createSubfolders: "Người dùng có quyền này có thể tạo thư mục trong vùng nhóm.",

		workspacebuilder_roles_priv_fileInFolders: "Thêm vào thư mục",
		workspacebuilder_roles_plbl_fileInFolders: "Người dùng có quyền này có thể thêm liên kết từ thư mục trong vùng nhóm vào tài liệu.",

		workspacebuilder_roles_priv_viewFolderProperties: "Xem thuộc tính thư mục",
		workspacebuilder_roles_plbl_viewFolderProperties: "Người dùng có quyền này có thể xem thuộc tính thư mục trong vùng nhóm, bao gồm cả thuộc tính hệ thống.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Quyền quản lý tài liệu",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Người dùng có quyền này có thể quản lý truy cập đến tài liệu trong vùng nhóm. Quyền này bao gồm việc cho phép những người dùng khác xóa tài liệu, sửa thuộc tính tài liệu, v.v...",

		workspacebuilder_roles_priv_deleteDocuments: "Xóa tài liệu",
		workspacebuilder_roles_plbl_deleteDocuments: "Người  dùng có quyền này có thể xóa tài liệu trong vùng nhóm.",

		workspacebuilder_roles_priv_promoteVersions: "Nâng cấp phiên bản",
		workspacebuilder_roles_plbl_promoteVersions: "Người dùng có quyền này có thể gán số phiên bản mới vào tài liệu trong vùng nhóm.",

		workspacebuilder_roles_priv_modifyContent: "Sửa tài liệu",
		workspacebuilder_roles_plbl_modifyContent: "Người dùng có quyền này có thể sửa nội dung tài liệu trong vùng nhóm.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Sửa thuộc tính tài liệu",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Người dùng có quyền này có thể sửa thuộc tính tài liệu trong vùng nhóm.",

		workspacebuilder_roles_priv_viewContent: "Xem tài liệu",
		workspacebuilder_roles_plbl_viewContent: "Người dùng có quyền này có thể xem tài liệu trong vùng nhóm.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Xem thuộc tính tài liệu",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Người dùng có quyền này có thể xem thuộc tính tài liệu trong vùng nhóm, bao gồm cả thuộc tính hệ thống.",

		workspacebuilder_roles_priv_addNewSearches: "Thêm tìm kiếm",
		workspacebuilder_roles_plbl_addNewSearches: "Người dùng có quyền này có thể thêm tìm kiếm vào vùng nhóm. Theo mặc định, tìm kiếm không có sẵn cho các người dùng khác.",

		workspacebuilder_roles_priv_createNewSearches: "Tạo tìm kiếm",
		workspacebuilder_roles_plbl_createNewSearches: "Người dùng có quyền này có thể tạo tìm kiếm mới nhưng không thể lưu tìm kiếm. Nếu người dùng không có quyền này thì không thể thêm tài liệu đã có trên kho lưu trữ vào vùng nhóm.",

		workspacebuilder_roles_priv_shareSearches: "Chia sẻ tìm kiếm",
		workspacebuilder_roles_plbl_shareSearches: "Người dùng có quyền này có thể chia sẻ tìm kiếm đã tạo với các người dùng khác trong vùng nhóm.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Quản lý lớp hoặc mẫu nhập",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Người dùng có quyền này có thể thêm và xóa lớp hoặc mẫu nhập khỏi vùng nhóm.",

		workspacebuilder_roles_priv_addRemoveClasses: "Quản lý lớp",
		workspacebuilder_roles_plbl_addRemoveClasses: "Người dùng có quyền này có thể thêm và xóa lớp khỏi vùng nhóm.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Quản lý người dùng vùng nhóm",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Người dùng có quyền này có thể thêm và xóa người dùng và nhóm khỏi vùng nhóm. Ngoài ra, họ có thể quản lý vai trò nào được gán cho người dùng.",

		workspacebuilder_roles_priv_modifyRoles: "Ðiều chỉnh vai trò",
		workspacebuilder_roles_plbl_modifyRoles: "Chủ sở hữu có quyền này có thể điều chỉnh quyền về vai trò cho vùng nhóm. Quyền này chỉ dành cho chủ sở hữu.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Chọn người dùng",
		workspacebuilder_users_add_users_and_groups_button: "Thêm người dùng và nhóm...",
		workspacebuilder_users_users_or_group_header: "Người dùng và nhóm",
		workspacebuilder_users_roles_header: "Vai trò",

		workspacebuilder_users_role_header: "Vai trò",
		workspacebuilder_users_role_no_permissions: "Vai trò này không có quyền nào",
		workspacebuilder_users_available_roles_label: "Vai trò có sẵn:",
		workspacebuilder_users_selected_users_and_groups_label: "Người dùng và nhóm đã chọn:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Không thể lưu vùng nhóm. Phải định rõ ít nhất một chủ sở hữu cho vùng nhóm này.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Không thể lưu vùng nhóm. Tất cả người dùng đều phải được gán một vai trò.",
		// end of select users

		workspacebuilder_search_templates: "Chọn tìm kiếm",
		workspacebuilder_search_add: "Thêm tìm kiếm",
		workspacebuilder_properties_workspaceName: "Tên vùng nhóm:",
		workspacebuilder_properties_templateName: "Tên mẫu:",
		workspacebuilder_properties_workspaceDescription: "Mô tả vùng nhóm:",
		workspacebuilder_properties_templateDescription: "Mô tả mẫu:",
		workspacebuilder_properties_workspaceTemplate: "Mẫu đã chọn:",
		workspacebuilder_properties_security: "Chia sẻ mẫu với:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Chuyển từ vùng nhóm:",
		moveTeamspaceDocuments_security: "Chia sẻ tài liệu với:",
		moveTeamspaceDocuments_security_change: "Ðịnh rõ bảo mật tùy chỉnh cho mục đã chọn",
		moveTeamspaceDocuments_item_type_level: "Bạn không thể chọn Ghi đè bảo mật của mục đã chọn vì lớp của mục đã chọn được cấu hình chỉ để dùng bảo mật mức lớp",
		moveTeamspaceDocuments_security_inherit: "Kế thừa bảo mật từ thư mục đích",
		moveTeamspaceDocuments_file_info_text: "Bạn có thể di chuyển mục từ vùng nhóm này đến vùng nhóm hoặc thư mục khác.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Bạn không có quyền phù hợp để di chuyển mục đến thư mục đã chọn.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Bạn không có quyền phù hợp để di chuyển mục từ vùng nhóm.",
		moveTeamspaceDocuments_move_mixed_items: "Bạn không thể ghi đè bảo mật của mục đã chọn. Một số mục không được quản lý bởi vùng nhóm. Bạn chỉ có thể ghi đè bảo mật của mục được quản lý bởi vùng nhóm.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Phải định rõ tên cho vùng nhóm.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Phải định rõ tên cho mẫu vùng nhóm.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Tên vùng nhóm không thể chứa bất kỳ ký tự nào sau đây: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Tên mẫu không thể chứa bất kỳ ký tự nào sau đây: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Liên kết đến tài liệu",
		workspacebuilder_folders_makeDocCopy: "Sao chép tài liệu",
		workspacebuilder_folders_newfolder: "Thư mục mới",
		workspacebuilder_folders_local_drive: "Từ thư mục nội bộ",
		workspacebuilder_folders_from_repo: "Từ kho lưu trữ",
		workspacebuilder_folders_add_doc: "Thêm tài liệu",
		workspacebuilder_folders_grid_name: "Tên",
		workspacebuilder_folders_props: "Thuộc tính",
		workspacebuilder_folders_remove: "Xóa",
		workspacebuilder_folders_delete: "Xóa",
		workspacebuilder_folders_adddoc_local: "Thêm tài liệu từ ổ đĩa nội bộ",
		workspacebuilder_folders_adddoc_repo: "Thêm tài liệu từ kho lưu trữ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Ðã tồn tại tên thư mục được xác định. Xác định một tên thư mục khác.",

		workspacebuilder_classes_title: "Chọn lớp hoặc mẫu nhập",
		workspacebuilder_classes_title_cm: "Chọn lớp",
		workspacebuilder_classes_template_introText: "Ðịnh rõ vùng nhóm được tạo từ mẫu này sẽ dùng lớp hoặc mẫu nhập để thêm tài liệu vào kho lưu trữ. Nếu không có lớp nào được chọn, vùng nhóm sẽ thấy tất cả lớp mà nó có truy cập.  Người dùng có thể điều chỉnh danh sách lớp hoặc mẫu nhập trong vùng nhóm nếu họ có quyền phù hợp.",
		workspacebuilder_classes_template_introText_cm: "Chọn lớp mà người dùng có thể dùng để thêm tài liệu vào kho lưu trữ. Nếu không có lớp nào được chọn, vùng nhóm sẽ thấy tất cả lớp mà nó có truy cập đến. Người dùng có thể điều chỉnh danh sách lớp trong vùng nhóm nếu họ có quyền phù hợp.",
		workspacebuilder_classes_instance_introText: "Chọn lớp hoặc mẫu nhập mà người dùng có thể dùng để thêm tài liệu vào kho lưu trữ. Khi không có lớp nào được chọn, người dùng vùng nhóm sẽ thấy tất cả lớp mà họ có quyền. Người dùng có thể điều chỉnh danh sách lớp hoặc mẫu nhập trong vùng nhóm nếu họ có quyền phù hợp.",
		workspacebuilder_classes_instance_introText_cm: "Chọn lớp mà người dùng có thể dùng để thêm tài liệu vào kho lưu trữ. Khi không có lớp nào được chọn, người dùng vùng nhóm sẽ thấy tất cả lớp mà họ có quyền. Người dùng có thể điều chỉnh danh sách lớp trong vùng nhóm nếu họ có quyền phù hợp.",
		workspacebuilder_classes_selection: "Chọn lớp:",
		workspacebuilder_classes_list: "Lớp có sẵn:",
		workspacebuilder_classes_columns_default: "Mặc định",
		workspacebuilder_classes_columns_className: "Tên lớp",
		workspacebuilder_classes_type_classes: "Dùng lớp để thêm tài liệu",
		workspacebuilder_classes_type_classes_tooltip: "Lớp bao gồm các thuộc tính có liên quan để có thể định vị tài liệu để sử dụng sau này.",
		workspacebuilder_classes_type_entryTemplates: "Dùng mẫu nhập để thêm tài liệu",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Mẫu nhập đảm bảo thông tin được cấp cho từng tài liệu là thống nhất và dùng giá trị được xác định trước.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Tên mẫu nhập",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Mô tả",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Phải thêm ít nhất một mẫu nhập vào vùng nhóm.",

		workspacebuilder_classes_new: "Lớp mới",
		workspacebuilder_classes_add: "Thêm lớp",
		workspacebuilder_entryTemplate_add: "Thêm mẫu nhập",
		workspacebuilder_add_list: "Thêm",
		workspacebuilder_makeDefault_list: "Tạo mặc định",
		workspacebuilder_removeDefault_list: "Xóa mặc định",

		workspacebuilder_roles_title: "Chọn vai trò",
		workspacebuilder_roles_title_modify: "Ðiều chỉnh vai trò",

		workspacebuilder_selection_moveup: "Chuyển lên",
		workspacebuilder_selection_movedown: "Chuyển xuống",
		workspacebuilder_selection_remove: "Xóa",
		workspacebuilder_selection_add: "Thêm",
		workspacebuilder_selection_create_new_search: "Tìm kiếm mới...",
		workspacebuilder_selection_create_new_role: "Vai trò mới...",
		workspacebuilder_selection_make_role_available: "Tạo tính sẵn dùng",
		workspacebuilder_selection_make_role_available_tooltip: "Chia sẻ vai trò đã chọn với các mẫu khác. Phải gán ít nhất một quyền vào vai trò để chia sẻ nó.",

		workspacebuilder_navigation_next: "Kế tiếp",
		workspacebuilder_navigation_finish: "Hoàn tất",
		workspacebuilder_navigation_validate: "Xác thực",
		workspacebuilder_navigation_previous: "Trước",
		workspacebuilder_navigation_cancel: "Hủy",
		workspacebuilder_navigation_customize: "Tùy chỉnh",

		workspacebuilder_search_dialog_title: "Tìm kiếm",
		workspacebuilder_dialog_close: "Ðóng",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Tính sẵn dùng của mẫu:",
		workspace_properties_templateState_tooltip: "Chuyển mẫu sang dạng không có sẵn để dùng để ngăn người dùng tạo vùng nhóm dùng mẫu này.",
		workspace_properties_dialog_title: "Thuộc tính mẫu",
		workspace_properties_online_radio_option_label: "Tạo tính sẵn dùng",
		workspace_properties_offline_radio_option_label: "Tạo tính không sẵn dùng",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Bạn có muốn hủy mà không lưu các thay đổi không?",
		workspacebuilder_cancel_confirmation_button: "Có",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Bất kỳ mục không hợp lệ nào cũng sẽ bị xóa khỏi mẫu và mẫu đã sẵn sàng cho người dùng.  Bạn có muốn xác thực mẫu vùng nhóm này không?",
		workspacebuilder_validate_confirmation_button: "Có",
		workspacebuilder_validate_confirmation_title: "Xác thực",

		/* Entry templates builder */
		entry_templates: "Trình quản lý mẫu nhập liệu",
		no_entry_templates_were_found: "Không có mẫu nhập",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Bộ lọc",

		/* Roleselector widget */
		role_selector_name: "Vai trò:",

		/* User Group picker widget */
		directory_label: "Thư mục:",
		scope_label: "Tìm kiếm cho:",
		name_starts_with_label: "Tên bắt đầu bằng",
		name_contains_label: "Tên chứa",
		display_name_contains_label: "Tên hiển thị chứa",
		starts_with_label: "Bắt đầu bằng:",
		available_label: "Có sẵn:",
		available_heading: "Khả dụng",
		selected_label: "Ðã chọn:",
		selected_heading: "Ðã chọn",
		available_repositories_label: "Kho lưu trữ có sẵn",
		selected_repositories_label: "Kho lưu trữ đã chọn",
		default_repository: "Kho lưu trữ mặc định:",
		default_repository_placeholder: "Chọn kho lưu trữ",
		default_role_placeholder: "Chọn vai trò",
		menu_label_placeholder: "Chọn hoặc nhập nhãn",
		default_repository_hover: "Ðịnh rõ kho lưu trữ được chọn mặc định khi người dùng đăng nhập vào web khách từ máy khách này.<br><br><b>Quan trọng:</b> Phải thêm kho lưu trữ vào danh sách kho lưu trữ của máy khách đã chọn trước khi định rõ kho lưu trữ mặc định.",
		default_repository_workflow_hover: "<b>Ghi nhớ:</b> Chỉ có thể cấu hình vùng ứng dụng cho kho lưu trữ được cấu hình cho máy khách này.",
		remove_label: "Xóa",
		users_label: "Người dùng",
		groups_label: "Nhóm",
		user_or_group_name_label: "Tên người dùng hoặc nhóm:",
		user_or_group_name_hover: "Nhập tên người dùng hoặc nhóm hợp lệ trên kho lưu trữ.  Tên không được xác thực.",
		user: "Người dùng",
		group: "Nhóm",
		name: "Tên:",
		displayName: "Tên hiển thị",
		display_name: "Tên hiển thị:",
		shortName: "Tên ngắn:",
		distinguishedName: "Tên có phân biệt:",
		search_tooltip: "Tìm kiếm",
		add_tooltip: "Thêm",
		add_selected_tooltip: "Thêm vào danh sách chọn",
		remove_tooltip: "Xóa",
		remove_selected_tooltip: "Xóa khỏi danh sách chọn",
		add_to_selected_tooltip: "Thêm",
		remove_from_selected_tooltip: "Xóa",
		move_up_selected_tooltip: "Chuyển lên",
		move_down_selected_tooltip: "Chuyển xuống",
		advanced_search_options_tooltip: "Thiết lập nâng cao",
		move_right_selected_tooltip: "Chuyển vào trình đơn con",
		move_left_selected_tooltip: "Chuyển ra trình đơn con",
		add_separator: "Thêm dấu tách",
		menu_item_label: "Nhãn mục trình đơn:",
		add_menu_label: "Thêm trình đơn con",
		menu_label: "Nhãn trình đơn con:",
		menu_label_info: "<b>Quan trọng:</b> Phải thêm ít nhất một mục trình đơn vào trình đơn con này trước khi lưu trình đơn này.",
		menu_dropdown_label: "Nhãn nút thả xuống:",
		menu_dropdown_label_info: "<b>Quan trọng:</b> Phải thêm ít nhất một mục trình đơn vào nút thả xuống này trước khi lưu thanh công cụ này.",
		no_item_found: "Không tìm thấy kết quả nào.",
		me: "Tôi",
		anyone: "Bất kỳ ai",
		specific_users: "Người dùng cụ thể",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Tìm kiếm trả về hơn {0} kết quả. Thay đổi tiêu chí để thu hẹp tìm kiếm.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Kết quả tìm kiếm có chứa mục đã chọn. Các mục đó sẽ không được hiển thị trong kết quả tìm kiếm.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Có hơn {0} kết quả được trả về. Dùng bộ lọc để thu hẹp kết quả",

		user_already_selected: "Người dùng được xác định đã được chọn.  Xác định người dùng khác.",
		group_already_selected: "Nhóm được xác định đã được chọn.  Xác định nhóm khác.",
		user_cannot_select_self: "Bạn không thể thêm chính mình. Xác định người dùng khác.",

		/* Select User Group dialog */
		select_user_group_add_label: "Thêm",
		select_user_group_cancel_label: "Hủy",
		add_users_groups_label: "Thêm người dùng và nhóm",
		add_user_group_label: "Thêm người dùng và nhóm",
		add_users_label: "Thêm người dùng",
		add_user_label: "Thêm người dùng",
		add_label: "Thêm:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Những tài liệu sau đây có thay đổi chưa lưu ở phần chú thích:",
		viewer_confirm_to_proceed: "Bạn có muốn tiếp tục và bỏ các thay đổi không?",
		viewer_warn_has_changes: "Thay đổi chưa được lưu của bạn sẽ bị hủy bỏ.",
		viewer_warn_is_printing: "Có thể không hoàn tất được việc in đang tiến hành.",
		viewer_warn_confirm_exit: "Bạn có muốn thoát không?",
		viewer_prompt_save_changes: "Tài liệu sau đây có thay đổi chưa lưu ở phần chú thích, sẽ bị mất:<br>${0}<br><br>Bạn có muốn lưu các thay đổi không?",
		viewer_prompt_mergesplit_changes: "Những tài liệu sau đây có thay đổi chưa lưu:<br>${0}<br><br>Bạn có muốn tiếp tục và bỏ các thay đổi không?",
		viewer_prompt_mergesplit_tab_changes: "Tài liệu sau đây có thay đổi chưa lưu:<br>${0}<br><br>Bạn có muốn tiếp tục và bỏ các thay đổi không?",
		viewer_new_item_name: "Tài liệu mới",
		viewer_top_frame: "Khung trên:",
		viewer_bottom_frame: "Khung dưới:",
		viewer_left_frame: "Khung trái:",
		viewer_right_frame: "Khung phải:",
		viewer_viewer_frame: "Khung trình xem:",
		viewer_properties_frame: "Khung thuộc tính:",
		viewer_comment_frame: "Khung nhận xét:",
		viewer_mergesplit_on: "Hiện",
		viewer_mergesplit_off: "Kết hợp và chia tách",
		viewer_mergesplit_context_menu_move: "Chuyển",
		viewer_mergesplit_context_menu_rename: "Ðặt lại tên",
		viewer_mergesplit_context_menu_delete: "Xóa",
		//move to new window
		viewer_move_to_new_window:"Chuyển đến cửa sổ mới",
		viewer_continue:"Hủy bỏ thay đổi",
		viewer_return_to_original_window:"Trở về cửa sổ gốc",
		viewer_switch_window:"Chuyển cửa sổ",
		viewer_prompt_lost_changes:"Tài liệu ${0} hiện đang mở trong cửa sổ khác. Tài liệu này có thay đổi chưa lưu.<br><br>Bạn muốn chuyển sang cửa sổ đó để lưu thay đổi, hay hủy bỏ thay đổi và mở tài liệu trong cửa sổ này?",
		viewer_mergesplit_fallback_info: "Bạn chỉ có thể hoàn tất thao tác Kết hợp và Chia tách trên những tài liệu nằm trong cùng một kho lưu trữ.",
		viewer_tabbed_layout: "Xem dạng tab",
		viewer_tabbed_layout_highcontrast: "Tab",
		viewer_split_vertical_layout: "Chia ngăn trên cùng và dưới cùng",
		viewer_split_vertical_layout_highcontrast: "Trên cùng và dưới cùng",
		viewer_split_horizontal_layout: "Chia ngăn sang trái và phải",
		viewer_split_horizontal_layout_highcontrast: "Trái và phải",
		viewer_add_vertical_layout: "Tab mới ở dưới cùng",
		viewer_add_vertical_layout_highcontrast: "Tab dưới cùng",
		viewer_add_horizontal_layout: "Tab mới ở bên phải",
		viewer_add_horizontal_layout_highcontrast: "Tab bên phải",
		viewer_add_horizontal_layout_rtl: "Tab mới ở bên trái",
		viewer_add_horizontal_layout_rtl_highcontrast: "Tab bên trái",
		viewer_split_properties_layout: "Xem thuộc tính",
		viewer_split_comment_layout: "Xem nhận xét",
		viewer_split_notelog_layout: "Xem Nhật ký ghi chép",
		viewer_window_title: "Trình xem ${0}",
		viewer_next_hit: "Xem tài liệu kế tiếp trong danh sách",
		viewer_prev_hit: "Xem tài liệu trước đó trong danh sách",
		viewer_confrim_more_search_results: "Kết quả tìm kiếm không còn chứa tài liệu có thể xem.  Bạn có muốn truy xuất thêm kết quả tìm kiếm không?",
		viewer_confirm_get_next_page: "Danh sách kết quả không còn chứa mục có thể xem.  Bạn có muốn truy xuất thêm kết quả tìm kiếm không?",
		viewer_confirm_get_next_item: "Danh sách kết quả còn chứa mục có thể xem.  Bạn có muốn xem mục kế tiếp không?",
		viewer_fn_annotation_tooltip: " Tạo bởi: ${0},  Tạo vào ngày: ${1}",
		viewer_box_note_limitation: "Bạn chỉ có thể mở và xem Box Ghi chú trong màn hình riêng biệt.",
		viewer_click_to_open_box_note: "Nhấp vào đây để mở Box Ghi chú.",
		viewer_box_view_expiring: "Thời gian tối đa có thể xem tài liệu Box là 60 phút. Phiên hiện tại của bạn sẽ hết hạn sau ${0} phút. Nếu muốn tiếp tục xử lý tài liệu này, bạn phải tải lại ngay. Bạn có muốn tải lại tài liệu này không?",
		viewer_add_dialog_save_as_type: "Lưu dưới dạng:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Xung đột kiểm xuất",
		viewer_checkout_conflict: "Tài liệu đang được người dùng khác kiểm xuất.",
		viewer_checkout_confirm: "Đã có phiên bản mới hơn của tài liệu này. Bạn muốn tiếp tục kiểm xuất tài liệu này hay tải lại trình xem với phiên bản mới hơn? Nếu bạn chọn tải lại trình xem, thì mọi thay đổi chưa lưu sẽ mất.",
		viewer_checkout_continue: "Tiếp tục kiểm xuất",
		viewer_checkout_reload: "Tải lại",
		viewer_status_building: "Ðang xây dựng tài liệu...",
		viewer_status_adding: "Ðang thêm tài liệu...",
		viewer_status_checking_in: "Ðang kiểm nhập tài liệu...",

		/* Class Selector Widget */
		include_subclasses_label: "Bao gồm lớp con",
		include_subclasses_label2: "Cũng tìm kiếm trong lớp con",
		include_subclasses_note: "(Bao gồm lớp con)",
		available_classes_col_header: "Lớp có sẵn",
		single_class_label: "Tìm kiếm trong một lớp",
		multiple_classes_label: "Tìm kiếm trong nhiều lớp",
		multiple_classes_hover_help: "Chọn tùy chọn này để tìm kiếm trong nhiều hơn một lớp. Lớp có thể là lớp mẹ hoặc lớp con. Nếu chọn tùy chọn này, chỉ có thể thấy được thuộc tính và giá trị chung đối với các lớp đã chọn.",
		selected_classes_col_header: "Lớp đã chọn",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Bao gồm thư mục con)",
		favorites_pseudo_node: "\\Yêu thích\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Phải chọn một thư mục trong kho lưu trữ để thêm tài liệu vào.",
		no_permission_add_folder: "Bạn không có quyền phù hợp để thêm thư mục vào thư mục này.",
		no_permission_add_document: "Bạn không có quyền phù hợp để thêm tài liệu vào thư mục này.",
		document_already_in_folder: "Ðã có tài liệu trong thư mục này.",
		cant_move_folder_onto_parent: "Ðã có thư mục trong thư mục này.",
		cant_move_folder_onto_self: "Không thể di chuyển thư mục vào chính thư mục đó hoặc vào thư mục con của nó.",

		/* Workflow Widgets */
		process_application_space: "Xử lý vùng ứng dụng",
		process_role: "Xử lý vai trò",
		process_inbasket: "Xử lý trong rổ",
		process_worklist: "Danh sách công việc",
		process_step_processor: "Xử lý mục công việc",
		process_tracker: "Dò mục công việc",
		process_info_subject: "Chủ đề",
		process_info_stepname: "Bước",
		process_info_is_locked: "Ðã khóa",
		process_info_no_access: "Không có quyền truy cập",
		process_info_received_on: "Ðã nhận vào ngày",
		process_info_overdue: "Quá hạn",
		process_info_reminder_sent: "Ðã gửi nhắc nhở",
		process_info_locked_by_user: "Ðược khóa bởi",
		process_work_object_number: "Số đối tượng công việc",
		process_deadline: "Ngày đến hạn:",
		process_launchedby: "Bắt đầu bởi:",
		process_receivedon: "Ðã nhận vào:",
		process_step: "Bước:",
		process_properties: "Thuộc tính",
		process_attachments: "Ðính kèm",
		process_attachments_select: "Chọn đính kèm",
		process_finish_button_label: "Dừng theo dõi",
		process_tracker_history: "Lịch sử",
		process_tracker_milestones: "Mốc",
		process_tracker_milestone: "Mốc",
		process_tracker_milestone_level: "Mức",
		process_tracker_milestones_empty: "Không có mốc để hiển thị.",
		process_tracker_level_selector_label: "Hiện mức mốc đến:",
		process_tracker_map_selector_label: "Lọc theo bản đồ:",
		process_tracker_message: "Thông báo",
		process_tracker_datereached: "Ngày đạt",
		process_tracker_stepname: "Bước",
		process_tracker_cycle: "Chu kỳ",
		process_tracker_review_cycle: "Chu kỳ đánh giá",
		process_tracker_participant: "Người tham gia",
		process_tracker_completed: "Ðã hoàn tất",
		process_tracker_response: "Phản hồi",
		process_tracker_comments: "Ðánh giá",
		process_tracker_delete_confirmation: "Bạn có muốn dừng theo dõi luồng công việc sau không: ${0}?",
		process_tracker_history_allmaps: "Tất cả bản đồ",
		process_tracker_history_workflow: "Luồng công việc",
		process_tracker_history_terminate: "Kết thúc",
		process_tracker_history_malfunction: "Sai hỏng",
		process_filter_label: "Bộ lọc",
		process_no_filter_summary: "Không áp dụng bộ lọc",
		process_filter_summary: "${0} được áp dụng",
		process_filter_reset_tooltip: "Ðặt lại sẽ xóa bộ lọc và làm mới trong rổ.",
		process_attachments_add_folder: "Thêm thư mục",
		process_attachments_add_doc: "Thêm tài liệu",
		process_complete_button_label: "Hoàn tất",
		process_save_button_label: "Lưu",
		process_launch_button_label: "Khởi chạy luồng công việc",
		process_open_button_label: "Mở",
		process_movetoinbox_button_label: "Chuyển đến trong rổ",
		process_return_button_label: "Trả về",
		process_return_to_sender_tooltip: "Trả mục công việc về trong rổ xuất phát",
		process_move_to_inbasket_tooltip: "Chuyển mục làm việc đến trong rổ cá nhân của bạn",
		process_reassign_tooltip: "Gán lại mục làm việc cho chủ sở hữu khác",
		process_reassign_button_label: "Gán lại",
		process_preferences_button_label: "Tùy chọn",
		process_manageroles_button_label: "Quản lý vai trò",
		process_manageroles_no_members: "Không có thành viên nào.",
		process_responses_button_label: "Thêm phản hồi",
		process_morecustomaction_button_label: "Thêm thao tác",
		process_show_instructions: "Xem hướng dẫn",
		process_hide_instructions: "Ẩn hướng dẫn",
		process_remove_attachment: "Xóa",
		process_close_window: "Mục công việc đã được tiến hành.",
		process_delegate_flag: "Yêu cầu chủ sở hữu hiện tại phê duyệt mục công việc trước khi định tuyến mục đến bước kế tiếp trong luồng công việc.",
		process_paticipant_voting: "Số lượng người tham gia cần có để bỏ phiếu phê duyệt:",
		process_get_next_label: "Lấy mục công việc kế tiếp",
		process_no_more_items: "Không có thêm mục trong rổ để xử lý.",
		process_workflow_name: "Tên luồng công việc:",
		process_pattern_process_name: "Ðánh giá cho ${0}",
		process_instuctions: "Chỉ dẫn dành cho người đánh giá:",
		process_pattern_deadline: "Ngày đến hạn:",
		process_reviewers: "Người đánh giá:",
		process_approvals_required: "Phê duyệt yêu cầu:",
		process_on_reject: "Nếu mục công việc bị từ chối:",
		process_return_to_originator: "Trả về cho tôi",
		process_return_to_previous_reviewer: "Trả về cho người đánh giá trước",
		process_additional_settings: "Cài đặt bổ sung:",
		process_allow_reassign: "Cho phép người đánh giá gán lại đánh giá này",
		process_complete_notification: "Thông báo cho tôi khi đánh giá đã hoàn tất",
		process_workflow_name_hover_help: "Tên đã xác định cho mục công việc phải giúp người đánh giá dễ dàng phân biệt giữa mục công việc này và các mục công việc khác trong rổ của họ.",
		process_approvals_required_hover_help: "Nếu mục công việc được nhiều người đánh giá cùng lúc, bạn có thể định rõ mục công việc cần phải có bao nhiêu phê duyệt để hoàn tất thành công.",
		process_approval_options: "Tùy chọn phê duyệt",
		process_all: "Tất cả",
		process_at_least: "Tối thiểu",
		process_at_least_by_count: "Ít nhất ${0} số người đánh giá",
		process_at_least_by_percentage: "Ít nhất ${0}% người đánh giá",
		process_comments: "Nhận xét:",
		process_review_step_comments_hover_help: "Nếu từ chối mục công việc, bạn phải cung cấp thông tin nêu lý do về việc từ chối. Thông tin này giúp người tạo mục công việc hoặc người đánh giá trước xử lý mối quan tâm của bạn.",
		process_rework_step_comments_hover_help: "Bạn phải cung cấp thông tin về cách bạn đã xử lý nhận xét. Nếu không đồng ý với nhận xét, nêu lý do về quyết định của bạn.",
		process_rejection_reason: "Lý do từ chối:",
		process_summary: "Tóm tắt",
		process_sequential_review: "Ðánh giá tuần tự",
		process_sequential_review_description: "Mục công việc sẽ được từng người đánh giá theo thứ tự.",
		process_parallel_review: "Ðánh giá song song",
		process_parallel_review_description: "Mục công việc sẽ được tất cả mọi người đánh giá cùng lúc",
		process_parallel_approvals_required_error: "Số lượng phê duyệt yêu cầu quá cao. Chỉ ${0} người đánh giá được yêu cầu.",
		process_parallel_invalid_required_approvals_count: "Giá trị không hợp lệ. Giá trị phải là ${0}.",
		process_subject_prompt: "Nhập chủ đề",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Mục công việc:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Xem thuộc tính",
		view_permissions_level: "Xem quyền",
		view_content_level: "Xem tài liệu",
		link_level: "Liên kết",
		modify_properties_level: "Sửa thuộc tính",
		modify_content_level: "Sửa tài liệu",
		minor_version_level: "Sửa phiên bản phụ",
		major_version_level: "Sửa phiên bản chính",
		create_instance_level: "Tạo thực thể",
		delete_document_level: "Xóa tài liệu",
		delete_item_level: "Xóa mục",
		modify_document_permissions_level: "Quản lý quyền",
		modify_folder_permissions_level: "Quản lý quyền",
		modify_owner_level: "Ðiều chỉnh chủ sở hữu",
		delete_folder_level: "Xóa thư mục",
		file_in_folder_level: "Thêm vào thư mục",
		create_subfolder_level: "Tạo thư mục con",
		link_item_level: "Chú giải tài liệu, Thêm vào thư mục", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Chỉ dành cho tài liệu: Thêm chú giải vào tài liệu hoặc loại bỏ chú giải khỏi tài liệu</li><li>Chỉ dành cho thư mục: Thêm mục vào thư mục hoặc loại bỏ mục khỏi thư mục</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Xóa",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Chủ sở hữu",
		/* previously \"Full control\" */
		edit_privilege: "Tác giả",
		/* previously \"Edit\" */
		read_only_privilege: "Người đọc",
		/* previously \"Read only\" */
		no_access_privilege: "Không có quyền truy cập",
		share_with_label: "Chia sẻ với:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Chỉ với tôi",
		public_label: "Mọi người",
		members_label: "Người dùng và nhóm cụ thể",
		select_members_label: "Chọn...",
		select_user_group_label: "Chọn người dùng...",
		select_users_groups_label: "Chọn người dùng và nhóm...",
		select_user_label: "Chọn người dùng...",
		propagation_label: "Nhân bản:",
		access_label: "Quyền:",
		add_permission_add_label: "Thêm",
		security_policy_label: "Chính sách bảo mật:",
		includes_inherited_access: "Bao gồm truy cập được kế thừa",
		customize_access_for_label: "Tùy chỉnh truy cập cho:",
		customize: "Tùy chỉnh",
		direct: "Mục này",
		singleLevelInheritance: "Một mức",
		infiniteLevelInheritance: "Tất cả mức",
		inherited: "Kế thừa",
		direct_hover_help: "Cài đặt bảo mật áp dụng cho mục chọn",
		singleLevelInheritance_hover_help: "Những quyền này áp dụng cho mục này và các mục con trực tiếp đã được cấu hình để kế thừa bảo mật từ mục này.",
		infiniteLevelInheritance_hover_help: "Những quyền này áp dụng cho mục này và tất cả mục con đã được cấu hình để kế thừa bảo mật từ mục này.",
		inherited_hover_help: "Những quyền này được kế thừa từ mục cha.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Những quyền dành cho ${0} này áp dụng cho mục này và các mục con trực tiếp đã được cấu hình để kế thừa bảo mật từ mục này.",
		infiniteLevelInheritance_member_hover_help: "Những quyền dành cho ${0} này áp dụng cho mục này và tất cả mục con đã được cấu hình để kế thừa bảo mật từ mục này.",
		inherited_member_hover_help: "Những quyền dành cho ${0} này được kế thừa từ mục cha.",
		partial_hover_help: "Cài đặt bảo mật cho mục đã được người dùng thay đổi",
		allow: "Cho phép",
		deny: "Từ chối",
		basic: "Cơ bản",
		advanced: "Nâng cao",
		permission_type: "Ðặt truy cập cho:",
		share_with_hover_help: "Mục đang được chia sẻ với người dùng và nhóm sau.",
		direct_security_policy_hover_help: "Cài đặt của chính sách bảo mật này cho phép thay đổi bảo mật của mục này.",
		security_policy_hover_help: "Bảo mật của mục này là chỉ đọc vì cài đặt của chính sách bảo mật này không cho phép thay đổi bảo mật của mục này.",
		security_remove: "Không có quyền",
		pseudo_group_label: "Tài khoản biệt hiệu",
		marking_hover_help: "Bảo mật của mục này được kiểm soát bởi bộ đánh dấu, có thể ảnh hưởng đến bảo mật của mục.",
		note_label: "Quan trọng:",
		marking_text: "Mục này được đánh dấu là: ${0}. Mục có thể có các giới hạn bảo mật bổ sung.",
		authenticated_users: "Người dùng đã xác thực",
		realm_users: "${0} người dùng",
		denyAll: "Từ chối hết",
		allowAll: "Cho phép hết",
		remove_direct_text: "Khi bạn lưu thay đổi, quyền dành cho thành viên này sẽ bị loại bỏ khỏi mục.",
		remove_single_inheritance_text: "Khi bạn lưu thay đổi, quyền dành cho thành viên này sẽ bị loại bỏ khỏi mục và <br>các mục con trực tiếp đã được cấu hình để kế thừa bảo mật từ mục này.<p>Bạn có muốn tiếp tục không?",
		remove_infinite_inheritance_text: "Khi bạn lưu thay đổi, quyền dành cho thành viên này sẽ bị loại bỏ khỏi mục và <br>tất cả mục con đã được cấu hình để kế thừa bảo mật từ mục này.<p>Bạn có muốn tiếp tục không?",
		remove_inheritance_text: "Khi bạn lưu thay đổi, quyền dành cho thành viên này sẽ bị loại bỏ khỏi mục và <br>tất cả mục con đã được cấu hình để kế thừa bảo mật từ mục này. Chỉ có những quyền <br>mà mục này kế thừa sẽ còn lại.<p>Bạn có muốn tiếp tục không?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Loại bỏ những quyền này dành cho ${0}",

		security_proxy_text: "Bảo mật của mục này là chỉ đọc.",
		security_proxy_declared_text: "Bảo mật của mục này là chỉ đọc vì được xác định bằng proxy bảo mật.",
		security_proxy_hover_help: "Bảo mật của mục này được kiểm soát bởi một bảo mật được đặt trên một đối tượng khác trong kho lưu trữ.",
		add_permissions_label: "Thêm quyền",
		permission_propagation_direct: "Chỉ thư mục này",
		permission_propagation_onelevel: "Thư mục này và một mức dưới",
		permission_propagation_alllevels: "Thư mục này và tất cả mức dưới",
		document_propagation_label: "Ðặt truy cập cho:",
		document_propagation_FOLDER: "Thư mục",
		document_propagation_DOCUMENT: "Tài liệu",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Nguồn xác thực:",

		/* Versions Widget */
		object_versions_selector_label: "Phiên bản:",
		object_versions_label: "Phiên bản",
		object_type_document_label: "Tài liệu:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Thư mục được lưu trong",
		folders_filed_in_folder_col_hdr: "Thư mục",
		folders_filed_in_path_col_hdr: "Ðường dẫn",
		folders_filed_in_containment_name_col_hdr: "Tên vùng chứa",
		folders_filed_in_creator_col_hdr: "Tạo bởi",
		folders_filed_in_date_created_col_hdr: "Tạo ngày",

		/* Parent Documents */
		properties_parent_documents_label: "Tài liệu mẹ",

		/* Select object dialog */
		select_object_title: "Chọn mục",
		select_object_breadCrumb_version_prefix: "Phiên bản cho: ",
		show_versions_label: "Hiện phiên bản",
		use_current_version_label: "Dùng phiên bản hiện tại",
		use_released_version_label: "Dùng phiên bản đã phát hành",

		/* Select content class dialog */
		select_class: "Chọn lớp",
		/* Select Search dialog */
		select_search: "Chọn tìm kiếm",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Xem liên kết",
		show_hyperlink_intro: "Có thể chép và dán liên kết vào email, trò chuyện và trang web. Nếu mục có nhiều phiên bản, định rõ muốn liên kết đến phiên bản nào.",
		show_hyperlink_intro_no_version_select: "Có thể sao chép và dán liên kết vào email, trò chuyện và trang web.",
		show_text_label: "Phiên bản:",
		released_button_label: "Ðã phát hành",
		current_button_label: "Hiện tại",
		select_button_label: "Phiên bản cụ thể",
		show_hyperlink_no_released_version_msg: "Tài liệu này không có phiên bản đã phát hành.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Khởi chạy luồng công việc",
		edit_workflow_title: "Các đặc tính của mục công việc",
		start_workflow_intro: "Khởi chạy luồng công việc để xử lý mục đã chọn. Nếu muốn gán mục công việc cho một người dùng cụ thể, định rõ chủ sở hữu.",
		edit_workflow_intro: "Có thể sửa thuộc tính của mục công việc đã chọn. Nếu muốn gán lại mục công việc cho một người dùng cụ thể khác, định rõ chủ sở hữu.",
		workflow_field_label: "Luồng công việc:",
		priority_field_label: "Ưu tiên:",
		owner_field_label: "Chủ sở hữu:",
		start_button_label: "Bắt đầu",
		save_button_label: "Lưu",
		owner_value_hint: "Nhập chuỗi số và chữ có tối đa 32 ký tự. Chuỗi chỉ có thể chứa khoảng trắng hoặc các ký tự sau đây: a-z, A-Z, 0-9, và ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Yếu tố nội dung",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Giá trị không hợp lệ. Giá trị chỉ có thể chứa khoảng trắng hoặc các ký tự sau đây: a-z, A-Z, 0-9, và ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Nhập giá trị từ 1 đến 32000 để thể hiện tầm quan trọng của mục công việc.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Giá trị không hợp lệ. Ưu tiên phải là một giá trị từ 1 đến 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Tên luồng công việc không tồn tại.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Ðang chờ xử lý từ luồng công việc",
		suspend_workitems_intro: "Khi cho một mục chờ xử lý từ luồng công việc, mục công việc sẽ không được xử lý cho đến khi tiếp tục trở lại",
		suspend_workitems_options_label: "Chờ xử lý mục công việc đã chọn:",
		suspend_until_resume_label: "Cho đến khi khôi phục lại theo cách thủ công",
		suspend_until_date_label: "Cho đến khi",
		suspend_for_duration_label: "Cho",
		suspend_for_duration_hours: "Giờ",
		suspend_for_duration_days: "Ngày",
		suspend_for_duration_weeks: "Tuần",
		suspend_for_duration_months: "Tháng",
		suspend_for_duration_years: "Năm",
		suspend_button_label: "Tạm hoãn",
		suspend_duration_value_hint: "Nhập giá trị trong khoảng 1 - 99 cho thời gian.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Giá trị không hợp lệ. Giá trị phải nằm trong khoảng 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Xóa khỏi luồng công việc",
		remove_workflow_confirmation: "Bạn có muốn xóa mục chọn khỏi luồng công việc không?<br>${0} mục được chọn.",
		remove_workflow_button_label: "Xóa",

		/* Unfile dialog */
		unfile_dialog_title: "Xóa khỏi thư mục",
		unfile_dialog_remove_from_folder_label: "Xóa khỏi:",
		unfile_dialog_info_text: "Chỉ có thể xóa mục khỏi thư mục. Tuy nhiên, xóa một mục khỏi tất cả thư mục sẽ không làm mục bị xóa khỏi kho lưu trữ. Bạn vẫn có thể truy xuất mục bằng cách chạy tìm kiếm. Chỉ những thư mục mà bạn có đặc quyền xem mới được hiển thị trong danh sách này.",
		unfile_dialog_select_all: "Chọn tất cả",
		unfile_dialog_deselect_all: "Xóa tất cả",
		unfile_dialog_remove_button_label: "Xóa",
		unfile_dialog_select_folder_col_hdr: "Chọn thư mục",
		unfile_dialog_folder_col_hdr: "Thư mục",
		unfile_dialog_path_col_hdr: "Ðường dẫn",
		unfile_dialog_not_filed_msg: "Mục này không có trong bất kỳ thư mục nào.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Bạn không có quyền phù hợp để xóa mục này khỏi bất kỳ thư mục nào có mục này.",
		unfile_dialog_folder_not_selectable_tooltip: "Bạn không có quyền phù hợp để xóa mục này khỏi thư mục này.",
		unfile_multi_prompt: "Bạn có muốn xóa mục chọn khỏi thư mục ${0} không?",
		unfile_large_number_items_confirmation_question: "Bạn đã chọn ${0} mục để xóa từ thư mục ${1}.<br/>Xóa một số lượng lớn mục từ một thư mục có thể mất nhiều thời gian.<br/>Bạn có muốn tiếp tục không?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Mở",
		move_to_folder_title: "Chuyển đến thư mục",
		move_to_folder_button_caption: "Chuyển",
		move_to_folder_label: "Chuyển đến:",
		add_to_folder_title: "Thêm vào thư mục",
		add_to_folder_button_caption: "Thêm",
		add_to_folder_label: "Thêm vào:",
		copy_to_folder_title: "Sao chép vào thư mục",
		copy_to_folder_button_caption: "Sao chép",
		copy_to_folder_label: "Sao chép vào:",
		copy_to_folder_delete_label: "Sau khi hoàn tất sao chép, xóa mục đã chọn khỏi Box.",
		move_from_folder_label: "Chuyển từ:",
		move_file_info_text: "Bạn có thể chuyển mục từ thư mục này đến thư mục khác.",
		move_folder_info_text: "Bạn có thể chuyển thư mục từ một thư mục mẹ sang thư mục khác.",
		add_doc_to_folder_info_text: "Bạn có thể thêm mục vào một hoặc nhiều thư mục. Nếu đã có mục trong thư mục, mục sẽ vẫn ở trong thư mục đó và được thêm vào bất kỳ thư mục bổ sung nào đã được xác định.",
		copy_doc_to_folder_info_text: "Bạn có thể sao chép các mục vào một thư mục.",
		box_copy: "Box sao chép",
		box_copy__button_caption: "Sao chép",
		box_copy_to_info_text: "Chọn kho lưu trữ và thư mục nơi bạn muốn sao chép các mục đã chọn từ Box.",
		box_copy_from_info_text: "Chọn kho lưu trữ và thư mục nơi bạn muốn sao chép các mục đã chọn từ Box.",
		box_copy_version_info_text: "Ðể thêm tài liệu mới, cho kho lưu trữ và thư mục. Ðể kiểm nhập phiên bản mới, chọn kho lưu trữ và tài liệu.",
		admin_box_copy: "Box sao chép",
		admin_box_copy_hover: "Tùy chọn này cho phép người dùng sao chép tài liệu vào Box.",

		no_permission_to_copy_version_msg: "Bạn không thể sao chép tài liệu từ Box thành phiên bản mới của tài liệu đã chọn. Bạn không có quyền phù hợp để sửa tài liệu đã chọn, hoặc tài liệu đã chọn được kiểm xuất bởi một người khác.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Bạn không có quyền phù hợp để xóa mục này khỏi bất kỳ thư mục nào có mục này.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Bạn không có quyền phù hợp để xóa mục này khỏi thư mục này.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Không thể di chuyển mục này vì mục không được lưu trong bất kỳ thư mục nào. Chọn mục khác.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Khởi chạy luồng công việc",
		subscriptions_dialog_available_items_label: "Mục có sẵn:",
		subscriptions_dialog_info_text: "Ðịnh rõ luồng công việc nào muốn khởi chạy.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Tên",
		subscriptions_dialog_desc_col_hdr: "Mô tả",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Quản lý vai trò",
		manageroles_dialog_info_text: "Có thể điều chỉnh danh sách người dùng cho từng vai trò có liên quan đến vùng ứng dụng quy trình.",
		manageroles_dialog_members_label: "Thành viên",
		manageroles_dialog_roles_label: "Vai trò",
		manageroles_dialog_add_button_label: "Thêm người dùng và nhóm",
		manageroles_dialog_remove_button_label: "Xóa",
		manageroles_dialog_save_button_label: "Lưu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Không có luồng công việc liên quan đến mục này.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Tùy chọn luồng công việc",
		workflow_pref_dialog_info_text: "Ðịnh rõ sự kiện luồng công việc nào mà bạn muốn nhận thông báo email. Bạn cũng có thể bật tùy chọn để định tuyến công việc của bạn đến một người khác bằng cách chọn một người dùng để ủy quyền công việc.",

		workflow_pref_general: "Chung",
		workflow_pref_email_address: "Ðịa chỉ email",
		workflow_pref_email_address_hover: "Ðịnh rõ địa chỉ email mà bạn muốn nhận thông báo luồng công việc.",
		workflow_pref_preferred_locale: "Ngôn ngữ",
		workflow_pref_preferred_locale_hover: "Ðịnh rõ ngôn ngữ mà bạn muốn hiển thị thông báo email.",

		workflow_pref_work_item_notice: "Thông báo mục công việc",
		workflow_pref_step_new_assignment: "Một mục công việc mới được gán cho tôi",
		workflow_pref_step_new_assignment_hover: "Thông báo cho tôi khi nhận mục công việc mới.",
		workflow_pref_step_expired_deadline: "Ðã qua thời hạn mục công việc",
		workflow_pref_step_expired_deadline_hover: "Thông báo cho tôi khi tôi lỡ thời hạn mục công việc.",
		workflow_pref_step_reminders: "Gần đến thời hạn của mục công việc",
		workflow_pref_step_reminders_hover: "Nhắc tôi về mục công việc khi gần đến thời hạn.",

		workflow_pref_originator_notice: "Thông báo người tạo",
		workflow_pref_milestone_reached: "Ðã đạt mốc",
		workflow_pref_milestone_reached_hover: "Thông báo cho tôi khi đã đạt mốc một luồng công việc đã bắt đầu.",

		workflow_pref_tracker_notice: "Thông báo trình theo dõi luồng công việc",
		workflow_pref_tracker_new_assignment: "Mục trình theo dõi mới được gán cho tôi",
		workflow_pref_tracker_new_assignment_hover: "Thông báo cho tôi khi luồng công việc đang theo dõi được khởi chạy.",
		workflow_pref_tracker_deadline_reminders: "Gần đến thời hạn luồng công việc",
		workflow_pref_tracker_deadline_reminders_hover: "Nhắc tôi về luồng công việc khi gần đến thời hạn luồng công việc.",
		workflow_pref_tracker_deadline_expired: "Ðã qua thời hạn luồng công việc",
		workflow_pref_tracker_deadline_expired_hover: "Thông báo cho tôi khi đã qua thời hạn luồng công việc.",
		workflow_pref_tracker_exception: "Xảy ra lỗi luồng công việc",
		workflow_pref_tracker_exception_hover: "Thông báo cho tôi khi có một ngoại lệ hoặc xảy ra lỗi ở luồng công việc.",
		workflow_pref_tracker_expired_deadline: "Ðã qua thời hạn bước",
		workflow_pref_tracker_expired_deadline_hover: "Thông báo cho tôi khi đã qua thời hạn bước của luồng công việc đang dò.",
		workflow_pref_tracker_milestone_reached: "Ðã đạt mốc",
		workflow_pref_tracker_milestone_reached_hover: "Thông báo cho tôi khi đã đạt mốc một luồng công việc đang dò.",

		workflow_pref_out_notice: "Không có ở văn phòng",
		workflow_pref_proxy_user: "Ủy quyền công việc cho",
		workflow_pref_proxy_user_hover: "Dùng tùy chọn này để tự động định tuyến công việc của bạn cho một người dùng khác, ví dụ khi bạn ra khỏi văn phòng hoặc khi đang nghỉ phép.",
		workflow_pref_workflow: "Luồng công việc",
		workflow_pref_on: "Bật",
		workflow_pref_off: "Tắt",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Khởi chạy luồng công việc",
		transfered_workflows_dialog_info_text: "Chọn luồng công việc để khởi chạy.",
		transfered_workflows_dialog_available_items_label: "Mục có sẵn:",
		transfered_workflows_dialog_select_button_label: "Khởi chạy",
		transfered_workflows_dialog_name_col_hdr: "Tên",
		transfered_workflows_dialog_no_item_found: "Không tìm thấy luồng công việc đã chuyển.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Chuyển luồng công việc",
		transfer_workflow_dialog_info_text: "Chọn luồng công việc để chuyển vào hệ thống luồng công việc.",
		transfer_workflow_dialog_use: "Dùng tên luồng công việc này",
		transfer_workflow_dialog_use_another: "Dùng tên luồng công việc khác",
		transfer_workflow_dialog_in_use: "Tên luồng công việc là: ",
		transfer_workflow_dialog_transfer_button_label: "Chuyển",
		transfer_workflow_dialog_no_items_found: "Không tìm thấy luồng công việc đã chuyển.",
		transfer_workflow_dialog_use_hover: "Ðịnh rõ tên luồng công việc hiện tại từ định nghĩa luồng công việc.",
		transfer_workflow_dialog_another_hover: "Ðịnh rõ tên luồng công việc khác hoặc dùng lại tên luồng công việc đã chuyển đang tồn tại.",

		/*Search In control*/
		search_in_title: "Tìm kiếm trong:",
		search_in_teamspaces: "Vùng nhóm",
		search_in_repositories: "Kho lưu trữ",
		search_in_thisteamspaces: "Vùng nhóm này",

		ajaxViewer_save: "Lưu chú thích",
		ajaxViewer_print: "Xem trước khi in",
		ajaxViewer_firstPage: "Trang đầu tiên",
		ajaxViewer_previousPage: "Trang trước",
		ajaxViewer_nextPage: "Trang kế tiếp",
		ajaxViewer_lastPage: "Trang cuối cùng",
		ajaxViewer_unknownPageCount: "1 của ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} của ${1}",
		ajaxViewer_zoomOut: "Thu nhỏ",
		ajaxViewer_zoomIn: "Phóng to",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Khớp chiều rộng",
		ajaxViewer_fitHeight: "Khớp chiều cao",
		ajaxViewer_fitPage: "Khớp trang",
		ajaxViewer_rotate270: "Xoay 270 độ",
		ajaxViewer_rotate90: "Xoay 90 độ",
		ajaxViewer_rotate180: "Xoay 180 độ",
		ajaxViewer_darken: "Tối hơn",
		ajaxViewer_lighten: "Sáng hơn",
		ajaxViewer_lessContrast: "Tương phản ít hơn",
		ajaxViewer_moreContrast: "Tương phản nhiều hơn",
		ajaxViewer_invert: "Ðảo ngược",
		ajaxViewer_createHighlight: "Tô đậm",
		ajaxViewer_createNote: "Chú thích",
		ajaxViewer_editAnnotation: "Sửa thuộc tính chú thích",
		ajaxViewer_deleteAnnotation: "Xóa chú thích",
		ajaxViewer_editAnnotationTitle: "Sửa thuộc tính chú thích",
		printableView_print: "In",
		printableView_close: "Ðóng",

		search_results_dropdown_button: "Hiển thị kết quả",
		search_results_columns_label: "Hiển thị kết quả tìm kiếm",
		search_results_columns_description: "Chọn thuộc tính mà bạn muốn hiển thị trong kết quả tìm kiếm.",
		search_results_sortby_label: "Phân loại theo:",
		search_results_order_label: "Thứ tự phân loại:",
		search_results_accending_label: "Tăng dần",
		search_results_descending_label: "Giảm dần",
		search_results_available_properties: "Khả dụng",
		search_results_selected_properties: "Ðã chọn",
		search_rank_property: "Hạng (Chỉ tìm kiếm văn bản)",
		search_name_attribute: "Tên (${0})",
		search_results_summary_enabled_label: "Bật tóm tắt nội dung (Chỉ tìm kiếm văn bản)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Tìm kiếm",
		manage_teamspace_classes_tab_title: "Lớp",
		manage_teamspace_entry_templates_tab_title: "Mẫu mục nhập",
		manage_teamspace_team_tab_title: "Nhóm",
		manage_teamspace_roles_tab_title: "Vai trò",
		manage_teamspace_dialog_title: "Ðiều chỉnh vùng nhóm",
		manage_teamspace_button_label: "Ðiều chỉnh vùng nhóm",
		manage_teamspace_team_pane_heading: "Chọn nhóm",
		manage_teamspace_classes_pane_heading: "Chọn lớp",
		manage_teamspace_entry_templates_pane_heading: "Chọn mẫu mục nhập",
		manage_teamspace_no_rights_message: "Bạn không có quyền phù hợp để điều chỉnh vùng nhóm này.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Thuộc tính vùng nhóm",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Ðịnh rõ thuộc tính được hiển thị cho tài liệu và thư mục trong danh sách nội dung khi người dùng duyệt trong vùng nhóm. Cũng có thể định rõ thứ tự hiển thị của thuộc tính .",
		teamspace_props_sel_cols_use_default_label: "Dùng cài đặt <b>Duyệt</b> cho kho lưu trữ này",
		teamspace_props_sel_cols_use_default_tooltip: "Dùng cài đặt được định rõ trên trang Duyệt cho kho lưu trữ này trong công cụ quản trị.",
		teamspace_props_general_tab_label: "Chung",
		teamspace_props_column_props_tab_label: "Thuộc tính hiển thị",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Chọn tập tin để nhập",
		teamspace_import_template_instruction: "Có thể chọn tập tin xuất mẫu vùng nhóm để nhập.",
		teamspace_import_template_button_label: "Nhập",
		teamspace_import_template_dialog_label: "Nhập mẫu vùng nhóm",

		/* Annotation Dialog */
		annotationDlg_title: "Chú thích",
		annotationDlg_description: "Tài liệu chọn có các chú thích sau:",
		annotationDlg_msg_noAnnotations: "Không tồn tại chú thích. Nhấp Thêm để tạo chú thích.",
		annotationDlg_pageLabel: "Trang: ${pageNum}",
		annotationDlg_accLabel: "TRUY CẬP: ${accType}",
		annotationDlg_accLabel_public: "Công cộng",
		annotationDlg_accLabel_private: "Riêng",
		annotationDlg_accLabel_privateGroup: "Riêng(${groupName})",
		annotationDlg_copiable: "Có thể sao chép vào máy chủ khác",
		annotationDlg_cannotCopy: "Không thể sao chép vào máy chủ khác",
		annotationDlg_addButtonLabel: "Thêm",

		/* Share Dialog */
		is_shared: "Ðược chia sẻ",
		is_share_pending: "Chia sẻ đang chờ xử lý",
		share_title: "Box chia sẻ",
		share_instructions_new: "Gửi email có bao gồm một liên kết cho tập tin chia sẻ. Bất kỳ ai có liên kết này cũng đều có thể truy cập tập tin.",
		share_instructions_existing: "Gửi email có bao gồm một liên kết cho tập tin chia sẻ. Bất kỳ ai có liên kết này cũng đều có thể truy cập tập tin. Những người khác cũng có thể có liên kết này do một ai đó đã chia sẻ tập tin này.",
		share_instructions_another_version_shared: "Gửi email có bao gồm một liên kết cho tập tin chia sẻ. Bất kỳ ai có liên kết này cũng đều có thể truy cập tập tin. Những người khác cũng có thể có liên kết này do một ai đó đã chia sẻ một phiên bản khác của tập tin này.",
		share_buttonLabel_share: "Chia sẻ",
		share_email_addresses: "Gửi đến:",
		share_email_addresses_hover: "Khi đã hoàn tất chia sẻ, một liên kết sẽ được gửi đến các địa chỉ email này. Nếu bạn không nhập bất kỳ địa chỉ nào, liên kết sẽ được gửi đến địa chỉ email của bạn.",
		share_email_addresses_reshare_hover: "Khi đã hoàn tất chia sẻ, một liên kết sẽ được gửi đến các địa chỉ email này. Nếu bạn không nhập bất kỳ địa chỉ nào, sẽ không có email nào được gửi.",
		share_password: "Ðặt mật khẩu:",
		share_password_placeholder: "Tùy chọn",
		share_comments: "Thông báo:",
		share_comments_default: "Tôi muốn chia sẻ tập tin của tôi với bạn trên Box.",
		share_myEmail: "Gửi từ:",
		share_expiration: "Ðặt hết hạn cho liên kết:",
		share_expire: "Quyền truy cập hết hạn:",
		share_expire_none: "Không bao giờ hết hạn",
		share_allowDownload: "Cho phép tải xuống",
		share_add: "Thêm",
		share_advanced_instructions: "Thiết lập tải xuống, hết hạn và mật khẩu áp dụng cho tập tin chia sẻ trong Box.",
		share_advanced_existing_instructions: "Thiết lập tải xuống, hết hạn và mật khẩu áp dụng cho tập tin chia sẻ trong Box.",
		share_options_edit_warning: "Lưu ý: Bất kỳ thay đổi nào ở các thiết lập này cũng sẽ ảnh hưởng đến bất kỳ ai có liên kết, kể cả những người đã có liên kết.",
		share_link: "Liên kết:",
		share_email_addresses_placeholder: "Ðịa chỉ email",
		share_email_address_placeholder: "Ðịa chỉ email",
		share_email_address_invalid: "Nhập địa chỉ email hợp lệ.",
		share_cannot_share_with_self: "Bạn không thể chia sẻ tập tin với chính mình. Xác định người dùng khác.",
		share_selected_version_with_minor_warning_hover: "Phiên bản ${0} của tài liệu đã được chia sẻ. Bạn đã chọn phiên bản ${1}.<br><br><b>Cảnh báo</b>: Nếu bạn chia sẻ phiên bản ${1}, không ai có thể chia sẻ phiên bản ${2} trừ khi bạn xóa chia sẻ phiên bản ${1}.",
		share_selected_version_hover: "Phiên bản ${0} của tài liệu đã được chia sẻ. Bạn đã chọn phiên bản ${1}.",
		share_selected_version_message: "Lưu ý: Phiên bản ${0} của tài liệu đã được chia sẻ. Bạn đã chọn phiên bản ${1}.",
		share_different_version_message: "Lưu ý: Bạn đã chọn phiên bản ${1}, nhưng phiên bản ${0} của tài liệu đã được chia sẻ.  Bạn không thể chia sẻ phiên bản ${1} trừ khi bạn xóa chia sẻ trước, nhưng thay vì vậy bạn có thể chia sẻ liên kết của phiên bản ${0}.",
		share_version_message: "Lưu ý: Phiên bản ${0} của tài liệu đã được chia sẻ. Chọn phiên bản mà bạn muốn chia sẻ.",
		share_version_new: "Phiên bản chia sẻ ${0}",
		share_version_new_p8_hover: "Chia sẻ tài liệu này sẽ tạo ra một liên kết phiên bản cụ thể chỉ dành cho phiên bản đã chọn.<br><br>Khi một tài liệu đã được chia sẻ:<ul><li>Bạn có thể chia sẻ một phiên bản mới hơn và liên kết sẽ dẫn đến phiên bản mới hơn đó.</li><li>Bạn không thể chia sẻ một phiên bản cũ hơn trừ khi bạn xóa chia sẻ trước.</li></ul>",
		share_version_new_cm_hover: "Chia sẻ tài liệu này sẽ tạo ra một liên kết phiên bản cụ thể chỉ dành cho phiên bản đã chọn.<br><br>Khi một tài liệu đã được chia sẻ:<ul><li>Bạn có thể chia sẻ một phiên bản mới hơn và liên kết sẽ dẫn đến phiên bản mới hơn đó.</li><li>Bạn không thể chia sẻ một phiên bản cũ hơn.</li></ul>",
		share_version_update: "Phiên bản chia sẻ ${0} (Cập nhật tùy chọn chia sẻ).",
		share_version_update_p8_hover: "Chia sẻ tài liệu này sẽ chỉ duy trì liên kết của phiên bản đã xác định.<br><br>Khi một tài liệu đã được chia sẻ:<ul><li>Bạn có thể chia sẻ một phiên bản mới hơn và liên kết sẽ dẫn đến phiên bản mới hơn đó.</li><li>Bạn không thể chia sẻ một phiên bản cũ hơn trừ khi bạn xóa chia sẻ trước.</li></ul>",
		share_version_update_cm_hover: "Chia sẻ tài liệu này sẽ chỉ duy trì liên kết của phiên bản đã xác định.<br><br>Khi một tài liệu đã được chia sẻ:<ul><li>Bạn có thể chia sẻ một phiên bản mới hơn và liên kết sẽ dẫn đến phiên bản mới hơn đó.</li><li>Bạn không thể chia sẻ một phiên bản cũ hơn.</li></ul>",
		share_version_change_to_current: "Phiên bản chia sẻ ${0} (Cập nhật chia sẻ với phiên bản đã chọn).",
		share_version_change_to_current_p8_hover: "Chia sẻ tài liệu này sẽ chỉ cập nhật liên kết đến điểm dẫn đến phiên bản đã chọn.<br><br>Khi một tài liệu đã được chia sẻ:<ul><li>Bạn có thể chia sẻ một phiên bản mới hơn và liên kết sẽ dẫn đến phiên bản mới hơn đó.</li><li>Bạn không thể chia sẻ một phiên bản cũ hơn trừ khi bạn xóa chia sẻ trước.</li></ul>",
		share_version_change_to_current_cm_hover: "Chia sẻ tài liệu này sẽ chỉ cập nhật liên kết đến điểm dẫn đến phiên bản đã chọn.<br><br>Khi một tài liệu đã được chia sẻ:<ul><li>Bạn có thể chia sẻ một phiên bản mới hơn và liên kết sẽ dẫn đến phiên bản mới hơn đó.</li><li>Bạn không thể chia sẻ một phiên bản cũ hơn.</li></ul>",
		share_repository: "Kho lưu trữ cho tập tin chia sẻ",
		share_repository_hover: "Nếu không thấy kho lưu trữ Box muốn dùng, bạn có thể thêm một kho lưu trữ Box mới trên trang Kho lưu trữ.",
		share_options: "Tùy chọn chia sẻ",
		unshare_confirm: "Nếu bạn xóa chia sẻ, tất cả liên kết chia sẻ sẽ bị đứt, kể cả liên kết chia sẻ đã được gửi trước đó bởi những người dùng khác. Bất kỳ người dùng nào khác muốn chia sẻ tài liệu phải chọn tài liệu gốc và chia sẻ lại.<br><br>Bạn có chắc là muốn xóa chia sẻ không?",
		unshare_button: "Xóa Box chia sẻ",
		admin_share: "Dịch vụ Box chia sẻ:",
		admin_share_hover: "Cho phép người dùng chia sẻ tài liệu từ bất kỳ kho lưu trữ nào đã bật Box chia sẻ. Việc chia sẻ một tài liệu bao gồm sao chép tập tin vào Box, tạo một liên kết và gửi liên kết trong email.",
		admin_my_email_modifiable: "Cho phép người dùng điều chỉnh địa chỉ email 'Gửi từ'",
		admin_my_email_modifiable_hover: "Theo mặc định, với Box chia sẻ, địa chỉ email của người dùng là chỉ đọc và được lấy từ một ánh xạ của người dùng và địa chỉ email đại diện cho tài khoản người dùng Box.<br><br>Chọn tùy chọn này để cho phép người dùng hiệu chỉnh địa chỉ email của họ khi họ chia sẻ; tuy nhiên, tính hợp lệ của địa chỉ email này không được xác minh.",
		admin_repos_admin_user: "Quản trị viên chia sẻ:",
		admin_repos_admin_user_hover: "Ðặt quản trị viên chia sẻ nếu bạn có một máy khách có dịch vụ Box chia sẻ đã bật và kho lưu trữ của Box này được chọn làm kho lưu trữ cho các tập tin chia sẻ.<br><br>Nhấp Đặt và đăng nhập vào Box bằng một tài khoản hợp lệ dành cho quản trị viên Box.<br><br>Quản trị viên chia sẻ phải là người dùng quản trị Box được cấu hình có khả năng lưu trữ không giới hạn trong Box.",
		admin_repos_admin_user_not_set_warning: "Quản trị viên Box không được cấu hình cho kho lưu trữ đã chọn.<br><br>Dịch vụ Box chia sẽ bị tắt đến khi bạn đặt quản trị viên Box cho kho lưu trữ đã chọn, hoặc chọn một kho lưu trữ Box khác đã cấu hình quản trị viên Box.<br><br>Bạn có thể đặt quản trị viên Box trong phần dịch vụ Box chia sẻ trên trang Chung của kho lưu trữ.",
		admin_share_not_configured_warning: "Ðể có thể sử dụng dịch vụ chia sẻ Box, bạn phải thêm và chọn kho lưu trữ Box có xác thực máy chủ trước.",
		/* Office Online Server settings */
		admin_office_online_title: "Cấu hình Office Online",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Định rõ xem bạn có muốn người dùng truy cập máy khách này có thể sửa tài liệu Office của họ bằng Office Online Server hay không.",		
		admin_office_online_allow_collaborative_editing: "Cho phép hiệu chỉnh cộng tác",
		admin_office_online_allow_collaborative_editing_hover: "Cho phép nhiều người dùng cùng xử lý một tài liệu. Xóa tùy chọn này nếu bạn muốn giới hạn việc sửa tài liệu cho một người dùng.",
		admin_office_online_repository_not_set_warning: "Để có thể bật dịch vụ Office Online, bạn phải bật dịch vụ trên kho lưu trữ và định rõ URL của Microsoft Office Online Server trước. Nhấp vào <b>Kho lưu trữ</b>, chọn kho lưu trữ, sau đó bật dịch vụ trong tab <b>Sửa tích hợp</b>. Nhấp vào <b>Thiết lập > Tổng quát</b> và nhập URL của Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Ðịnh rõ xem bạn có muốn sử dụng Office Online Server để xử lý tài liệu Office hay không.",
		admin_office_online_server_url: "URL của Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Ðịnh rõ URL để các ứng dụng khác có thể giao tiếp với Office Online Server. URL này có định dạng http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Ðã xác minh",
	    admin_office_online_server_Failed: "<b>Đã thất bại</b>",

		admin_repcfg_office_online_service_p8_hover: "Ðể khởi tạo kho lưu trữ nhằm sử dụng Office Online Server, bạn có thể thêm tập tin mẫu ban đầu cho từng ứng dụng Office. Nếu không định rõ mẫu, thì mẫu mặc định sẽ được sử dụng.",	
		admin_repcfg_office_online_server_integration: "Tích hợp MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Ðể có thể bật Office Online Server, bạn phải định rõ URL của Microsoft Office Online Server trước. Nhấp vào Thiết lập > Tổng quát và nhập URL",
		admin_repcfg_office_online_word_template_name: "Mẫu Word mặc định",
		admin_repcfg_office_online_excel_template_name: "Mẫu Excel mặc định",
		admin_repcfg_office_online_powerpoint_template_name: "Mẫu PowerPoint mặc định",
		admin_repcfg_office_online_blank_template_description: "Ðây là mẫu mặc định sẽ được sử dụng nếu bạn không thêm mẫu của riêng bạn.",
		/* Edit Service settings */
		admin_icn_edit_title: "Sửa cấu hình",	
	    admin_icn_edit_files_cleanup_interval: "Khoảng thời gian dọn dẹp tập tin tạm thời (theo ngày):",
	    admin_icn_edit_files_cleanup_interval_hover: "Bạn có thể thiết lập khoảng thời gian giữ tập tin tạm thời trong máy khách Sửa ICN.  Thời gian mặc định là 20 ngày. Thời gian tối đa là 20 ngày. Thời gian tối thiểu là 1 ngày.",
	    admin_icn_edit_service_integration: "Tích hợp dịch vụ sửa",
	    admin_icn_edit_service_integration_intro: "Dịch vụ sửa cho phép người dùng dễ dàng thêm hoặc sửa tập tin trong các ứng dụng cục bộ được cài đặt trên máy tính của họ.<br><br><b>Quan trọng:</b> Nếu bật dịch vụ sửa, thì bạn phải lưu cấu hình kho lưu trữ trước khi có thể sửa những danh mục định trước.",
		admin_icn_edit_service: "Dịch vụ sửa:",
		admin_icn_edit_enable_hover: "Ðể sử dụng dịch vụ sửa, bạn phải:<ul><li>Bật dịch vụ trên kho lưu trữ</li><li>Bật dịch vụ trên máy khách trong môi trường của bạn</li><li>Cài đặt máy khách Sửa IBM Content Navigator trên máy trạm của người dùng</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Bật",
		admin_icn_edit_disable: "Tắt",
		admin_icn_edit_create_new_category: "Danh mục mới",
		admin_icn_edit_delete_category: "Xóa danh mục",
		admin_icn_edit_edit_category: "Sửa danh mục",
		admin_icn_edit_disable_category: "Tắt danh mục",
		admin_icn_edit_enable_category: "Bật danh mục",
		admin_icn_edit_new_category_dialog_title: "Danh mục mới",
		admin_icn_edit_edit_category_dialog_title:"Sửa danh mục",
		admin_icn_edit_new_category_dialog_instructions: "Danh mục tài liệu cho phép bạn kết hợp mẫu với kiểu MIME cụ thể cho dịch vụ sửa. Ví dụ, bạn có thể kết hợp một bộ gồm nhiều mẫu với các tập tin PDF để người dùng có thể áp dụng mẫu khi họ thêm hoặc sửa tập tin từ máy khách Sửa IBM Content Navigator. <br><br><b>Quan trọng:</b> Bạn phải lưu cấu hình kho lưu trữ của bạn trước khi có thể thêm mẫu vào danh mục mà bạn tạo. ",
		admin_icn_edit_edit_category_dialog_instructions: "Bạn phải lưu cấu hình kho lưu trữ của bạn trước khi có thể thêm mẫu vào danh mục này. ",
		admin_icn_edit_delete_category_dialog_instructions: "Bạn có muốn xóa danh mục này và mọi mẫu kết hợp với danh mục này không?<br><br><b>Quan trọng:</b> Thay đổi của bạn sẽ không là vĩnh viễn nếu bạn chưa lưu thay đổi đối với kho lưu trữ. ",
		admin_icn_edit_category_label: "Danh mục: ",
		admin_icn_edit_category_discription_label:"Mô tả: ",
		admin_icn_edit_template_column_head:"Tên mẫu",
		admin_icn_edit_category_duplicate_error_message: "Danh mục có ID này đã tồn tại từ trước. ",
		admin_icn_edit_word_category_description: "Danh mục này xác định những mẫu có sẵn cho tài liệu Microsoft Word trong dịch vụ sửa. ",
		admin_icn_edit_excel_category_description: "Danh mục này xác định những mẫu có sẵn cho tài liệu Microsoft Excel trong dịch vụ sửa. ",
		admin_icn_edit_powerpoint_category_description: "Danh mục này xác định những mẫu có sẵn cho tài liệu Microsoft PowerPoint trong dịch vụ sửa. ",

		icn_edit_add_template_dialog_title:"Thêm mẫu ${0}",
		icn_edit_add_template_only_one_file_error: "Bạn chỉ có thể chọn một tập tin.",
		icn_edit_add_template_file_type_error: "Bạn phải định rõ tập tin mẫu ${0} hợp lệ.<br><br>Tài liệu đã chọn có kiểu MIME thuộc dạng ${1}.<br><br>Kiểu MIME hợp lệ: ${2}.",
		icn_edit_change_template_dialog_title: "Sửa mẫu ${0}",
		icn_edit_action_in_new_menu_name:"Tài liệu ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "với Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "với ứng dụng Máy khách",
		icn_edit_new_document_dialog_title: "Tài liệu ${0} mới",
		icn_edit_new_document_dialog_intro: "Tạo tài liệu ${0} mới và thêm nó vào kho lưu trữ. Tài liệu này sẽ được tạo theo mẫu dịch vụ sửa đã chọn.", 
		icn_edit_select_edit_service_template: "Chọn mẫu",
		icn_edit_edit_service_template: "Mẫu dịch vụ sửa:",
		icn_edit_new_document_category_no_templates_message:"Không có mẫu nào trong danh mục này. Vui lòng liên hệ quản trị viên của bạn để thêm mẫu vào danh mục này.",
		icn_edit_installer: "Bộ cài đặt Sửa IBM Content Navigator",
		admin_icn_cm_classes_and_roles_settings: "Thiết lập lớp và vai trò",
		admin_repcfg_classes_and_roles_warning: "Định rõ lớp và người dùng hoặc nhóm người dùng có quyền tạo, sửa, và sử dụng mẫu hoặc tạo bản thảo tài liệu làm việc với Dịch vụ Office Online và Dịch vụ Sửa.",
		admin_repcfg_classes_and_roles_click_warning: "nhấp vào đây.",
		/* Edit Service settings END */
		share_no_my_email_error: "Có sự cố khi nhận dạng địa chỉ email cần phải có để chia sẻ tài liệu.",
		share_no_my_email_error_explanation: "Bạn đã đăng nhập bằng ID người dùng ${0}, nhưng ID người dùng không được ánh xạ đến một địa chỉ email.",
		share_no_my_email_error_userResponse: "Hãy thử đăng nhập lại, hoặc đăng nhập bằng một ID người dùng khác. Nếu sự cố vẫn còn, thông báo với quản trị viên hệ thống về lỗi này.",
		share_no_my_email_error_adminResponse: "ID người dùng ${0} không được ánh xạ đến một địa chỉ email, và máy khách ${1} không cho phép người dùng sửa địa chỉ email cho dịch vụ Box chia sẻ.<br><br>Hãy thử một trong các giải pháp sau:<br>Ðảm bảo plug-in Ánh xạ Email đã được đăng ký.<br>Ðảm bảo tập tin emailMappingPlugin.json có bao gồm ID người dùng ${0} và địa chỉ email người dùng, và sau đó xây dựng, cấu hình và đăng ký plug-in Ánh xạ Email.<br>Nếu bạn không muốn dùng plug-in Ánh xạ email hoặc thư mục địa chỉ email FileNet P8, mà bạn lại muốn cho phép người dùng nhập địa chỉ email riêng của họ khi chia sẻ tài liệu, bạn có thể điều chỉnh thiết lập máy khách cho dịch vụ Box chia sẻ để cho phép người dùng gửi liên kết từ một địa chỉ email khác.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Một phiên bản mới của tài liệu này đã được chia sẻ, vì vậy bạn không thể chia sẻ phiên bản đã chọn của tài liệu này.",
		share_later_version_shared_error_explanation: "Bạn không thể chia sẻ phiên bản cũ hơn của một tài liệu đã được chia sẻ trước đó.",
		share_later_version_shared_error_userResponse: "Ðể gửi liên kết cho phiên bản mới nhất của tài liệu, đầu tiên bạn phải chọn phiên bản mới nhất, và sau đó dùng thao tác Chia sẻ.<br><br>Ðể chia sẻ phiên bản đã chọn của tài liệu, đầu tiên bạn phải xóa chia sẻ phiên bản mới nhất của tài liệu.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Thông báo mới",
		email_from: "Từ:",
		email_to: "Ðến:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Nhập địa chỉ email hợp lệ.",
		email_subject: "Chủ đề:",
		email_message: "Thông báo:",
		email_message_placeholder: "Thêm thông báo",
		email_attachments: "Ðính kèm:",
		email_links: "Liên kết:",
		email_send: "Gửi",
		email_dont_send: "Không gửi",
		email_subject_reminder: "Lời nhắc chủ đề",
		email_subject_reminder_confirm: "Bạn có muốn gửi thông báo này mà không có chủ đề không?",
		email_missing_from_error: "Có sự cố khi nhận dạng địa chỉ email 'Từ' cần phải có để gửi email.",
		email_missing_from_error_explanation: "Bạn đã đăng nhập bằng ID người dùng ${0}, nhưng ID người dùng không được ánh xạ đến một địa chỉ email.",
		email_missing_from_error_userResponse: "Hãy thử đăng nhập lại, hoặc đăng nhập bằng một ID người dùng khác. Nếu sự cố vẫn còn, thông báo với quản trị viên hệ thống về lỗi này.",
		email_missing_from_error_adminResponse: "ID người dùng ${0} chưa được ánh xạ đến địa chỉ email, và máy khách ${1} không cho phép người dùng hiệu chỉnh địa chỉ email 'Từ'.<br><br>Hãy thử một trong các giải pháp sau:<br>Ðảm bảo plug-in Ánh xạ Email đã được đăng ký.<br>Ðảm bảo tập tin emailMappingPlugin.json có bao gồm ID người dùng ${0} và địa chỉ email người dùng, và sau đó xây dựng, cấu hình và đăng ký plug-in Ánh xạ Email.<br>Nếu bạn không muốn dùng plug-in Ánh xạ Email hoặc thư mục địa chỉ email FileNet P8, mà muốn cho phép người dùng nhập địa chỉ email của riêng họ khi gửi email, thì bạn có thể điều chỉnh thiết lập Email cho máy khách để cho phép người dùng điều chỉnh địa chỉ email 'Từ'.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Không thể mở tài liệu.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator không thể kết nối đến máy khách Sửa IBM Content Navigator.",
		open_edit_document_with_native_application_error_userResponse: "Cài đặt và khởi động máy khách Sửa IBM Content Navigator trên máy trạm của bạn. Sau đó thử mở lại tài liệu.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Không thể mở tài liệu.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator không thể kết nối đến máy khách Sửa IBM Content Navigator.",
		connect_to_the_streamline_service_error_userResponse: "Cài đặt và khởi động máy khách Sửa IBM Content Navigator trên máy trạm của bạn. Sau đó thử mở lại tài liệu.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator được cấu hình để chia sẻ tài liệu không đúng.",
		share_not_configured_error_explanation: "Tính năng chia sẻ Box phải được cấu hình đúng thì bạn mới có thể chia sẻ tài liệu.",
		share_not_configured_error_userResponse: "Liên hệ quản trị viên của bạn và yêu cầu họ cấu hình tính năng chia sẻ Box.",
		share_not_configured_error_adminResponse: "Những mục sau đây phải được cấu hình trước khi chia sẻ tài liệu:<ul><li>Phải bật dịch vụ trình quản lý tác vụ trong thiết lập công cụ quản trị.</li><li>Phải cấu hình ID kết nối trình quản lý tác vụ trong kho lưu trữ.</li><li>Phải bật chia sẻ trong kho lưu trữ.</li><li>Phải chọn kho lưu trữ Box để chia sẻ trong máy khách.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Thay đổi thuộc tính chưa được lưu đối với phiên bản mới",
		checkin_cors_save_attributes_error_explanation: "Phiên bản đã được tạo, nhưng thay đổi thuộc tính chưa được lưu. Tài liệu vẫn có thể được kiểm xuất.",
		checkin_cors_save_attributes_error_userResponse: "Mở khóa tài liệu và cập nhật thuộc tính bằng mục trình đơn ngữ cảnh Thuộc tính.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Thay đổi thuộc tính chưa được lưu đối với tài liệu mới",
		add_cors_save_attributes_error_explanation: "Tài liệu đã được tạo, nhưng thay đổi thuộc tính chưa được lưu.",
		add_cors_save_attributes_error_userResponse: "Cập nhật thuộc tính bằng mục trình đơn ngữ cảnh Thuộc tính.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Không thể mở tài liệu.",		
		edit_document_using_edit_service_error_explanation: "Không thể mở tài liệu này trong Dịch vụ Sửa.",
		edit_document_using_edit_service_error_userResponse: "Yêu cầu quản trị viên của bạn cập nhật Tích hợp Dịch vụ Sửa.<br><br> Nếu người dùng cần truy cập tài liệu này từ Dịch vụ Sửa, thì đi đến trang Sửa Tích hợp của kho lưu trữ và cập nhật Tích hợp Dịch vụ Sửa để đưa lớp này vào danh sách lớp cần điều chỉnh để hỗ trợ Dịch vụ Sửa.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Không thể mở tài liệu.",		
		edit_document_is_editing_by_oos_error_explanation: "Tài liệu đang được sử dụng bởi Dịch vụ Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Bạn phải lưu và đóng tài liệu trong Dịch vụ Office Online trước khi có thể mở nó trong Dịch vụ Sửa.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Bật tải lên theo kiểu Chia sẻ Tài nguyên Xuyên Nguồn gốc (Cross-Origin Resource Sharing - CORS)",

		/* Email Settings */
		admin_email_settings: "Thiết lập email:",
		admin_email_settings_hover: "Ðịnh rõ kiểu dịch vụ email mà bạn muốn người dùng sử dụng. Khi bạn kích hoạt dịch vụ email trên nền HTML, bạn sẽ có tùy chọn cho phép người dùng hiệu chỉnh địa chỉ email 'Từ' của họ. Nếu bạn muốn kích hoạt dịch vụ email trên nền Java, bạn phải có trình duyệt hỗ trợ Java.",
		admin_email_use_service: "Sử dụng dịch vụ email trên nền HTML",
		admin_email_use_applet: "Sử dụng dịch vụ email trên nền Java",
		admin_email_can_modify_from: "Cho phép người dùng hiệu chỉnh địa chỉ email 'Từ",
		admin_email_can_modify_from_hover: "Theo mặc định, địa chỉ email 'Từ' là không thể điều chỉnh và được lấy từ ánh xạ giữa người dùng với địa chỉ email đại diện cho tài khoản người dùng.<br><br>Chọn tùy chọn này để cho phép người dùng hiệu chỉnh địa chỉ email của họ khi gửi email; tuy nhiên, tính hợp lệ của địa chỉ email này không được xác minh.",
		admin_email_use_from_as_sender: "Sử dụng địa chỉ email 'Từ' làm người gửi email",
		admin_email_use_from_as_sender_hover: "Theo mặc định, email của người dùng sẽ sử dụng một địa chỉ email 'Từ' hợp lệ. Ðịa chỉ email này được phiên thư CNMailSession xác định trên máy chủ ứng dụng. Chọn tùy chọn này để định rõ rằng địa chỉ email của người dùng sẽ được sử dụng trong email.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Chú thích mới",
		addAnnotationDlg_labelContents: "Nội dung:",
		addAnnotationDlg_labelAccess: "Truy cập:",
		addAnnotationDlg_labelPublic: "Công cộng",
		addAnnotationDlg_labelPrivate: "Riêng",
		addAnnotationDlg_labelPrivateGroup: "Riêng cho nhóm",
		addAnnotationDlg_labelGroup: "Nhóm",
		addAnnotationDlg_labelCopiable: "Có thể sao chép chú thích này vào máy chủ khác.",
		addAnnotationDlg_buttonLabel_save: "Lưu",

		/* Skip navigation */
		skipNavigation_title_main: "Nhảy đến nội dung chính",
		skipNavigation_title_menu: "Nhảy đến nút điều hướng",
		skipNavigation_label_main: "Nhảy đến nội dung chính",
		skipNavigation_label_menu: "Nhảy đến nút điều hướng",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Quản lý vùng nhóm",
		manage_teamspace_pane_instance_hdr: "Vùng nhóm",
		manage_teamspace_pane_template_hdr: "Mẫu",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Cuộn lên",
		scroll_back: "Cuộn về",

		breadcrumb_separator_open: "Mở nút",
		breadcrumb_separator_close: "Ðóng nút",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Không có mục chọn.",

		/* eds */
		eds_url: "URL dịch vụ dữ liệu ngoài:",
		eds_request_timeout: "Thời gian chờ yêu cầu dịch vụ (tính bằng giây):",
		eds_is_required: "Ngăn không cho người dùng thực hiện thao tác thay đổi giá trị thuộc tính khi EDS không có sẵn",

		/* eforms */
		eform_signing_pane_welcome: "Ký biểu mẫu",
		eform_signing_button_label: "Ký",
		eform_signing_pane_delete: "Xóa chữ ký",
		eform_signing_button_label_delete: "Xóa",

		xtplugin_server_label: "URL máy chủ IBM FileNet Workplace XT",
		xtplugin_server_hover: "Nhập URL của máy chủ đã triển khai IBM FileNet Workplace XT, ví dụ http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL máy chủ IBM eClient",
		ecplugin_server_hover: "Nhập URL của máy chủ đã triển khai IBM eClient, ví dụ http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Thao tác trên một số lượng lớn mục có thể mất nhiều thời gian. Bạn có muốn tiếp tục không?",
		large_number_actions_continue_button: "Tiếp tục",

		large_items_actions_confirmation_question: "Thao tác trên một số lượng lớn mục có thể mất nhiều thời gian. Bạn có muốn tiếp tục không?",

		viewer_editproperties_title: "Xác nhận",
		viewer_editproperties_title_warning: "Cảnh báo",
		viewer_editproperties_save: "Lưu",
		viewer_editproperties_next: "Kế tiếp",
		viewer_editproperties_reset: "Ðặt lại",
		viewer_editproperties_reset_hover: "Bất kỳ dữ liệu chưa lưu nào cũng sẽ được đặt lại thành giá trị đã lưu trước đó",
		viewer_editproperties_saveandgetnext: "Lưu và lấy kế tiếp",
		viewer_editproperties_saveandgetnext_hover: "Tự động lấy tài liệu kế tiếp sau khi lưu thay đổi",
		viewer_editproperties_prompt_save_changes: "Bạn đã thay đổi thuộc tính của tài liệu sau<br>${0}<br><br>Bạn có muốn lưu các thay đổi không?",
		viewer_editproperties_prompt_discard_changes: "Bạn đã thay đổi thuộc tính của tài liệu sau<br>${0}<br><br>Tuy nhiên, một hoặc nhiều thuộc tính có giá trị không hợp lệ, do đó không thể lưu thay đổi. Bạn có thể điều chỉnh giá trị không hợp lệ, hoặc hủy bỏ thay đổi của bạn.<br>Bạn có muốn điều chỉnh giá trị không hợp lệ hiển thị trên ngăn thuộc tính không?",
		viewer_comments_prompt_discard_changes: "Bạn đã điều chỉnh nhận xét. Bạn có muốn lưu các thay đổi không?",
		viewer_notelogs_prompt_discard_changes: "Bạn đã điều chỉnh nhật ký ghi chú. Bạn có muốn lưu các thay đổi không?",
		social_collaborated_version: "Phiên bản: ${0}",
		social_link_label: "Ai...",

		// social comments
		comments: "Ðánh giá",
		comments_add_hint: "Nhấn Enter để thêm nhận xét.",
		comments_hint: "Nhập nhận xét.",
		comments_label: "Nhấn Enter hoặc Tab để lưu nhận xét. Nhấn Esc để hủy.",
		comments_delete_confirmation: "Bạn có muốn xóa nhận xét đã chọn không?",
		comments_number: "Nhận xét: ${0}",
		comments_save_new: "Bạn đã điều chỉnh nhận xét. Bạn có muốn đóng cửa sổ mà không lưu các thay đổi không?",

		notelogs: "Nhật ký ghi chép",
		notelogs_download: "Tải xuống",
		notelog_modify: "Lưu thay đổi",
		notelog_edit: "Sửa nhật ký ghi chép",
		notelog_create_newVersion: "Tạo phiên bản nhật ký ghi chép mới",
		notelog_add_hint: "Nhập nhận xét và nhấn Enter để thêm.",
		notelog_hint: "Nhấn Shift+Enter để xuống dòng",
		notelog_add_placeholder: "Nhấn Enter để thêm nhận xét vào nhật ký ghi chép.",
		notelog_save_new: "Bạn đã điều chỉnh nhật ký ghi chép. Bạn có muốn đóng cửa sổ mà không lưu các thay đổi không?",

		// P8 markings related
		cannot_remove_markings: "Bạn không có quyền để xóa (các) giá trị đánh dấu: {0}",

		// download count
		downloadcount: "Tải xuống: {0}",
		downloadcount_single: "1 tải xuống",
		downloadcount_multiple: "{0} tải xuống",
		downloadcount_none: "Không có ai tải xuống mục này",

		// recommendations
		recommendations: "Thích: {0}",
		recommendations_recommend: "Thích điều này",
		recommendations_unrecommend: "Không thích điều này",
		recommendations_you: "Bạn thích điều này",
		recommendations_you_and_another: "Bạn và 1 người khác thích điều này",
		recommendations_you_and_others: "Bạn và {0} người khác thích điều này",
		recommendations_another: "1 người thích điều này",
		recommendations_others: "{0} người thích điều này",
		recommendations_none: "Chưa ai thích điều này",

		// tags
		tags: "Ðánh dấu: ${0}",
		tags_delete: "Xóa ${0}",
		tags_none: "Không có đánh dấu để hiển thị.",
		tags_add: "Thêm đánh dấu:",
		tags_hint: "Nhấn Enter để thêm đánh dấu.",
		tags_hover_help: "Xác định một đánh dấu hoặc danh sách đánh dấu có thể dùng để tìm kiếm tài liệu có cùng đánh dấu. Bạn có thể dùng dấu phẩy (,), dấu chấm phẩy (;) hoặc khoảng trắng để tách các đánh dấu.",
		tags_hover_help_box: "Xác định một đánh dấu hoặc danh sách đánh dấu được tách bằng dấu phẩy mà có thể dùng để tìm kiếm tài liệu có cùng đánh dấu.",
		tags_no_access: "Bạn không có quyền phù hợp để thêm đánh dấu.",

		//task scheduler pane
		taskPane_tooltip: "Mở màn hình Tác vụ không đồng bộ",
		taskPane_tree: "Cây điều hướng ngăn tác vụ",
		taskPane_allTasks: "Tất cả tác vụ",
		taskPane_scheduledTasks: "Tác vụ đã lên lịch",
		taskPane_recurringTasks: "Tác vụ lặp lại",
		taskPane_inProgressTasks: "Tác vụ đang diễn ra",
		taskPane_completedTasks: "Tác vụ hoàn tất",
		taskPane_failedTasks: "Tác vụ thất bại",
		taskPane_disabledTasks: "Tác vụ đã vô hiệu",
		taskPane_statusScheduled: "Lên lịch",
		taskPane_statusInProgress: "Ðang diễn ra",
		taskPane_statusCompleted: "Ðã hoàn tất",
		taskPane_statusFailed: "Thất bại",
		taskPane_statusPaused: "Tạm dừng",
		taskPane_noItemSelected: "Không có mục chọn",
		taskSchedulerPane_scheduleInformation: "Thông tin lên lịch",
		taskSchedulerPane_loginInformation: "Thông tin đăng nhập",
		taskSchedulerPane_startImmediately: "Bắt đầu ngay lập tức",
		taskSchedulerPane_recurrence: "Lặp lại",
		taskSchedulerPane_interval: "Khoảng",
		taskSchedulerPane_scheduleReport: "Báo cáo lên lịch",
		taskSchedulerPane_nameHoverHelp: "Nhập tên tác vụ.",
		taskSchedulerPane_descriptionHoverHelp: "Nhập mô tả cho tác vụ. Mô tả sẽ giúp bạn phân biệt giữa các tác vụ.",
		taskSchedulerPane_startTimeHoverHelp: "Ðịnh rõ khi nào muốn chạy tác vụ. Ðể chạy tác vụ bây giờ, chọn Bắt đầu ngay lập tức.",
		taskSchedulerPane_recurrenceHoverHelp: "Có thể lên lịch để tác vụ chạy theo chế độ lặp lại.",
		taskSchedulerPane_endTimeHoverHelp: "Ðịnh rõ khi nào muốn dừng chạy tác vụ. Tác vụ chạy từ thời điểm bắt đầu được lên lịch cho đến thời điểm kết thúc được lên lịch.",
		taskSchedulerPane_usernameHoverHelp: "Ðể lặp lại tác vụ, phải nhập tên người dùng để cho phép dịch vụ xác thực khi tác vụ chạy.",
		taskSchedulerPane_passwordHoverHelp: "Ðể lặp lại tác vụ, phải nhập mật khẩu của người dùng cụ thể để cho phép dịch vụ xác thực khi tác vụ chạy.",
		taskSchedulerPane_notification: "Thông báo",
		taskSchedulerPane_emailAddress: "Ðịa chỉ email",
		taskSchedulerPane_emailAddressHoverHelp: "Nhập địa chỉ email mà bạn muốn nhận các thông báo về trạng thái của tác vụ.",
		taskSchedulerPane_intervalHoverHelp: "Ðịnh rõ thời lượng mà tác vụ lặp lại sẽ chạy. Bạn có thể thiết lập thời lượng theo giờ, ngày, tuần, hoặc tháng.",
		taskSchedulerPane_scheduledStartTime: "Thời gian bắt đầu được lên lịch",
		taskSchedulerPane_startTime: "Thời gian bắt đầu",
		taskSchedulerPane_title: "Lên lịch",
		taskSchedulerPane_runNow: "Chạy bây giờ",
		taskSchedulerPane_runOnce: "Chạy một lần",
		taskSchedulerPane_runAtSchedule: "Chạy theo lịch",
		taskSchedulerPane_repeats: "Lặp lại",
		taskSchedulerPane_repeatsEvery: "Lặp lại mỗi",
		taskSchedulerPane_hourly: "Hàng giờ",
		taskSchedulerPane_daily: "Hàng ngày",
		taskSchedulerPane_weekly: "Hàng tuần",
		taskSchedulerPane_monthly: "Hàng tháng",
		taskSchedulerPane_yearly: "Hàng năm",
		taskSchedulerPane_sunday: "Thứ bảy",
		taskSchedulerPane_monday: "Thứ hai",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "Thứ tư",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "Thứ sáu",
		taskSchedulerPane_saturday: "Thứ bảy",
		taskSchedulerPane_starting: "Ngày bắt đầu",
		taskSchedulerPane_after: "Sau",
		taskSchedulerPane_ending: "Ngày kết thúc",
		taskSchedulerPane_times: "lần",
		taskSchedulerPane_days: "ngày",
		taskSchedulerPane_hours: "giờ trong ngày",
		taskSchedulerPane_interval: "Khoảng",
		taskSchedulerPane_endingDays: "Kết thúc (tính bằng ngày)",
		taskSchedulerPane_never: "Không bao giờ",
		taskSchedulerPane_categorization: "Phân loại",
		taskSchedulerPane_scheduleTask: "Lên lịch tác vụ",
		taskInformationPane_details: "Chi tiết",
		taskInformationPane_errors: "Lỗi",
		taskInformationPane_taskInstances: "Thực thể tác vụ",
		taskInformationPane_audits: "Kiểm toán",
		taskInformationPane_results: "Kết quả",
		asyncTasks: "Tác vụ không đồng bộ",

		//entry template pane
		search_all_entry_templates: "Tìm kiếm tất cả mẫu mục nhập.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Xem toàn bộ trang",
		mobilesite: "Xem trang di động",
		profile: "Quản lý cấu hình",
		office_template: "Mẫu Office:",
		select_office_template: "Chọn mẫu Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Không thể mở tài liệu đã chọn trong trình xem với thao tác Kết hợp và Chia tách.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Trình xem đã cấu hình cho tài liệu PDF và TIFF không hỗ trợ thao tác Kết hợp và Chia tách.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Yêu cầu quản trị viên của bạn cấu hình trình xem tài liệu PDF và TIFF có hỗ trợ thao tác Kết hợp và Chia tách như trình xem Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Không thể mở tài liệu PDF đã chọn trong trình xem với thao tác Kết hợp và Chia tách.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Trình xem đã cấu hình cho tài liệu PDF không hỗ trợ thao tác Kết hợp và Chia tách.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Yêu cầu quản trị viên của bạn cấu hình trình xem tài liệu PDF có hỗ trợ thao tác Kết hợp và Chia tách như trình xem Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Không thể mở tài liệu TIFF đã chọn trong trình xem với thao tác Kết hợp và Chia tách.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Trình xem đã cấu hình cho tài liệu TIFF không hỗ trợ thao tác Kết hợp và Chia tách.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Yêu cầu quản trị viên của bạn cấu hình trình xem tài liệu TIFF có hỗ trợ thao tác Kết hợp và Chia tách như trình xem Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Không thể mở tài liệu đã chọn trong trình xem với thao tác Kết hợp và Chia tách.",
		document_builder_unsupported_documents_error_explanation: "Thao tác Kết hợp và Chia tách chỉ có hiệu lực với tài liệu PDF và TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Chọn tài liệu được hỗ trợ và thử lại.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Không thể mở một số tài liệu đã chọn trong trình xem với thao tác Kết hợp và Chia tách.",
		document_builder_some_unsupported_documents_error_explanation: "Thao tác Kết hợp và Chia tách chỉ có hiệu lực với tài liệu PDF và TIFF được mở từ cùng một kho dữ liệu.",
		document_builder_some_unsupported_documents_error_userResponse: "Tài liệu có hỗ trợ sẽ được mở trong trình xem.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Xảy ra lỗi khi kiểm nhập nội dung đã điều chỉnh.",
		document_builder_checkin_failed_explanation: "Trình xem nhận được phản hồi lỗi khi đang kiểm nhập nội dung đã điều chỉnh.",
		document_builder_checkin_failed_userResponse: "Yêu cầu người quản trị hệ thống xem lại tập tin nhật ký của máy chủ ứng dụng web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Không thể mở tài liệu.",
		no_viewer_to_view_error_explanation: "Quản trị viên hệ thống đã chặn xem tài liệu này. Nếu bạn cần truy cập tài liệu này thì có thể tải xuống.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Không thể tạo nội dung này.",
		document_build_failed_userResponse: "Yêu cầu quản trị viên hệ thống xem lại tập tin nhật ký của trình xem.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Không thể mở tài liệu này ở chế độ Kết hợp và Chia tách.",
		document_builder_open_failed_userResponse: "Yêu cầu quản trị viên hệ thống xem lại tập tin nhật ký của trình xem.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Hệ thống không thể chuyển sang chế độ Kết hợp và Chia tách.",
		document_builder_switch_failed_userResponse: "Yêu cầu quản trị viên hệ thống xem lại tập tin nhật ký của trình xem.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Tài liệu",
		print_service_page_setup_tab_title: "Cài đặt trang",
		print_service_OD_print_tab_title: "Tùy chọn máy in",
		print_service_status_merging: "Ðang kết hợp tài liệu...",
		print_service_status_converting: "Ðang chuyển đổi tài liệu...",
		print_service_status_formatting: "Ðang định dạng tài liệu để in ấn...",
		admin_print_service_maximum_number_to_print: "Số lượng tài liệu tối đa được phép in ấn:",
		admin_print_service_maximum_size_to_print: "Lượng dữ liệu tối đa được phép in ấn (theo MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Ðịnh rõ số lượng tài liệu tối đa mà người dùng có thể in trong một lần. Mặc định tối đa là 50. Nếu bạn không muốn giới hạn in ấn theo số lượng tài liệu, thì thiết lập giới hạn này là 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Hạn chế:</b> Cài đặt này không được hỗ trợ trên IBM Content Manager OnDemand.<br/><br/>Ðịnh rõ lượng dữ liệu tối đa có thể được in ấn bằng dịch vụ in ấn IBM Daeja ViewONE.<br /><br />Tổng kích thước của mỗi tài liệu đã chọn không thể lớn hơn số lượng này.<br/><br/>Giới hạn mặc định là 200 MB. Cài đặt giới hạn trên 200 MB có thể gây ảnh hưởng đến hiệu suất hệ thống. Nếu bạn không muốn giới hạn in ấn theo kích thước tài liệu, thì thiết lập giới hạn này là 0",
		// error printing
		print_service_error_printing: "Xảy ra lỗi trong khi in ấn.",
		print_service_error_printing_userResponse: "Yêu cầu quản trị viên hệ thống xem lại tập tin nhật ký của dịch vụ in ấn.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Tài liệu đã chọn quá lớn nên không in được",
		print_service_max_content_error_explanation: "Tài liệu đã chọn vượt quá giới hạn ${0} MB dữ liệu.",
		print_service_max_content_error_userResponse: "Chọn ít tài liệu hơn hoặc chọn tài liệu nhỏ hơn và in lại. Bạn cũng có thể liên hệ quản trị viên hệ thống để tăng tổng kích thước tối đa của các hạng mục mà bạn có thể in trong một lần từ máy khách này.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Những mục này không thể in được.",
		print_service_max_number_selected_error_explanation: "Bạn có thể in tối đa ${0} hạng mục trong một lần. Bạn đang cố gắng in ${1} hạng mục.",
		print_service_max_number_selected_error_userResponse: "Chọn ít hạng mục hơn và thử in lại. Bạn cũng có thể liên hệ quản trị viên hệ thống để tăng số lượng hạng mục tối đa mà bạn có thể in trong một lần từ máy khách này.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


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
		welcome_user: "ยินดีต้อนรับ, ",
		about: "เกี่ยวกับ",
		all: "ทั้งหมด",
		help: "วิธีใช้",
		user_session: "เซสชันผู้ใช้",
		user_session_for: "เซสชันผู้ใช้สำหรับ ${0}",
		user_session_for_with_container: "เซสชันผู้ใช้สำหรับ ${0} (${1})",
		tools: "เครื่องมือ",
		login: "ล็อกอิน",
		logout: "ออกจากระบบ",
		search: "การค้นหา",
		saved_searches: "การค้นหาที่บันทึกไว้",
		content_analytics: "วิเคราะห์เนื้อหา",
		reset: "ตั้งค่าใหม่",
		reset_hover: "ข้อมูลใดๆ ในแท็บทั้งหมดที่ยังไม่ได้บันทึกจะถูกรีเซ็ตเป็นค่าที่บันทึกไว้ก่อนหน้านี้",
		reset_default: "ลบทั้งหมด",
		reset_default_hover: "เคลียร์ฟิลด์ เลเบลปัจจุบัน บนทุกแท็บ",
		locale: "โลแคล:",
		up: "ขึ้น",
		down: "ลง",
		restore: "เรียกคืน",
		maximize: "ขนาดใหญ่สุด",
		values_label: "ค่า",
		value_label: "ค่า:",
		path_label: "พาธ:",
		new_label: "ใหม่:",
		back_label: "ย้อนกลับ",
		clear: "ล้าง",
		set: "ตั้งค่า...",
		browse: "เรียกดู",
		work: "ที่ทำงาน",
		connect: "เชื่อมต่อ",
		documents: "เอกสาร:",
		copyright: "(c) ลิขสิทธิ์ 2012, 2016 IBM Corp. IBM และตราสัญลักษณ์ IBM เป็นเครื่องหมายการค้าของ IBM ที่จดทะเบียนไว้ในหลายประเทศทั่วโลก Java และเครื่องหมายทางการค้าทั้งหมดที่เกี่ยวข้อง Java-based และโลโก้ เป็นเครื่องหมายการค้าหรือจดทะเบียนเครื่องหมายการค้าของ Oracle และ/หรือ บริษัทในเครือ Oracle Outside In Technology ที่รวมอยู่ในที่นี่เป็นไปตามลิขสิทธิ์การใช้งานแบบจำกัดและสามารถใช้ร่วมกับแอ็พพลิเคชันนี้ โปรแกรมนี้เป็นลิขสิทธิ์ภายใต้เงื่อนไขของข้อตกลงใบอนุญาตที่มาพร้อมกับโปรแกรม  ข้อตกลงการอนุญาตนี้อาจจะอยู่ทั้งในโฟลเดอร์ไดเร็กทอรีโปรแกรมหรือห้องไลบรารีระบุว่า \"License\" หรือ \"Non_IBM_License\",  ถ้าเหมาะสม หรือให้เป็นข้อตกลงใบอนุญาตพิมพ์ โปรดอ่านข้อตกลงนี้โดยละเอียดก่อนใช้โปรแกรม โดยการใช้โปรแกรมนี้ ถือว่าคุณเห็นด้วยกับเงื่อนไขเหล่านี้ ",
		edit: "แก้ไข",
		cancel: "ยกเลิก",
		close: "ปิด",
		close_all: "ปิดทุกแท็บ",
		close_others: "ปิดแท็บอื่น",
		ok: "ตกลง",
		yes: "ใช่",
		no: "ไม่",
		open: "เปิด",
		refresh: "รีเฟรช",
		refresh_cabinets: "รีเฟรชคาบิเนตทั้งหมด",
		delete_text: "ลบออก",
		export_config: "เอ็กซ์พอร์ตคอนฟิกูเรชัน",
		description: "คำอธิบาย",
		true_label: "True",
		false_label: "False",
		error: "ข้อผิดพลาด",
		error_reference_hover: "ค้นหา www.ibm.com สำหรับข้อมูลเพิ่มเติมเกี่ยวกับข้อผิดพลาดนี้",
		url_label: "URL",
		default_label: "ดีฟอลต์",
		ibm_label: "IBM",
		light_label: "อ่อน",
		dark_label: "เข้ม",
		save: "บันทึก",
		saveAs: "บันทึกเป็น...",
		save_and_close: "บันทึกและปิด",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "ไม่ได้กำหนด",
		Name: "ชื่อ",
		"${NAME}": "ชื่อ",
		mime_type: "ชนิด MIME",
		mime_type_contains_label: "ชนิด MIME ประกอบด้วย",
		mime_type_header: "ชนิด MIME",
		mime_type_icon: "ไอคอนชนิด MIME",
		casesearch: "ขนาดตัวอักษร",
		item: "ไอเท็ม",
		no_mime_type: "ไอเท็มนี้ไม่มีเนื้อหา",
		items_selected: "${0} ไอเท็มที่เลือก",
		requestor: "ร้องขอโดย",
		scheduledStartTime: "เวลาเริ่มต้นที่กำหนดเวลาไว้",
		isRecurring: "เป็นประจำ",
		weeks: "สัปดาห์",
		days: "วัน",
		hours: "ชั่วโมง",
		endTime: "เวลาสิ้นสุด",
		username: "ชื่อผู้ใช้",
		password: "รหัสผ่าน",
		serverURL: "URL ของเซิร์ฟเวอร์",
		enable: "เปิดใช้งาน",
		disable: "ปิดใช้งาน",
		finish: "เสร็จสิ้น",
		previous: "ก่อนหน้า",
		next: "ถัดไป",
		schedule: "กำหนดตารางเวลา",
		removeFromThisList: "ลบจากรายการนี้",
		status: "สถานะ",
		scheduledEndTime: "สิ้นสุดเวลาตามที่กำหนดตารางเวลาไว้",
		type: "ชนิด:",
		mode: "โหมด",
		startTime: "เวลาเริ่มต้น",
		createdBy: "สร้างโดย",
		nextScheduledTime: "เวลาที่กำหนดตารางเวลาถัดไป",
		id: "ID",
		duration: "ระยะเวลา",
		repeatCycle: "ความถี่",
		taskTypeName: "ชนิดงาน",
		to: "ถึง",
		filter: "ตัวกรอง:",
		error_message: "ข้อความแสดงความผิดพลาด",

        file_type: "ชนิดเอกสาร",
        word_template_name: "ชื่อเท็มเพลต Word",
        excel_template_name: "ชื่อเท็มเพลต Excel",
        powerpoint_template_name: "ชื่อเท็มเพลต PowerPoint",
        template_description: "คำอธิบายเท็มเพลต",
        action_add_template: "เพิ่ม",
        action_change_template: "แก้ไข",      
        action_edit_template_properties: "คุณสมบัติ",
        add_presentation_template: "เพิ่มเท็มเพลตการนำเสนอ",
    	add_spreadsheet_template: "เพิ่มเท็มเพลตสเปร็ดชีต",
    	add_doc_template: "เพิ่มเท็มเพลตเอกสาร",    	
    	file_type_doc_hover: "คุณต้องระบุไฟล์เท็มเพลตเอกสารการประมวลผลคำที่ถูกต้อง<br><br>ชนิด MIME ที่ถูกต้อง: ${0}",
    	file_type_doc_error: "คุณต้องระบุไฟล์เท็มเพลตเอกสารการประมวลผลคำที่ถูกต้อง<br><br>ชนิด mime ของเอกสารที่เลือก: ${0}<br><br>ชนิด MIME ที่ถูกต้อง: ${1}",
    	file_type_presentation_hover: "คุณต้องระบุไฟล์เท็มเพลตการนำเสนอที่ถูกต้อง<br><br>ชนิด MIME ที่ถูกต้อง: ${0}",
    	file_type_presentation_error: "คุณต้องระบุไฟล์เท็มเพลตการนำเสนอที่ถูกต้อง<br><br>ชนิด mime ของเอกสารที่เลือก: ${0}<br><br>ชนิด MIME ที่ถูกต้อง: ${1}",
    	file_type_spreadsheet_hover: "คุณต้องระบุไฟล์เท็มเพลตสเปร็ดชีตที่ถูกต้อง<br><br>ชนิด MIME ที่ถูกต้อง: ${0}",
    	file_type_spreadsheet_error: "คุณต้องระบุไฟล์เท็มเพลตสเปร็ดชีตที่ถูกต้อง<br><br>ชนิด mime ของเอกสารที่เลือก: ${0}<br><br>ชนิด MIME ที่ถูกต้อง: ${1}",
    	office_online_only_one_template_error: "คุณสามารถเลือกได้ไฟล์เดียวเท่านั้น",
    	change_presentation_template: "แก้ไขเท็มเพลตการนำเสนอ",
    	change_spreadsheet_template: "แก้ไขเท็มเพลตสเปร็ดชีต",
    	change_doc_template: "แก้ไขเท็มเพลตเอกสาร",
    	change_button: "แก้ไข",
	    new_document_dialog_doc_title: "เอกสารใหม่",
	    new_document_dialog_presentation_title: "สร้างการนำเสนอใหม่",
	    new_document_dialog_spreadsheet_title: "สร้างสเปร็ดชีตใหม่",
	    new_document_dialog_title_label: "หัวเรื่อง:",
	    new_document_dialog_title_hover: "ป้อนหัวเรื่องสำหรับเอกสารนี้",
	    new_document_dialog_title_missing_message: "คุณต้องระบุหัวเรื่อง",
	    office_online_save_before_adding_templates_title: "บันทึกการเปลี่ยนแปลงไปยังที่เก็บ",
	    office_online_save_before_adding_templates_error: "คุณไม่สามารถเพิ่มเท็มเพลต Office ได้จนกว่าคุณจะบันทึกการเปลี่ยนแปลงที่คุณทำไว้กับที่เก็บ คลิก <b>บันทึกและปิด</b> และจากนั้น เปิดที่เก็บอีกครั้งเพื่อเพิ่มเท็มเพลต Office",
	    copy_to_OOS_dialog_doc_title: "เอกสารใหม่",
	    office_online_checkin_cancelcheckout_message: "เอกสารนี้กำลังถูกแก้ไขใน Microsoft Office Online คุณไม่สามารถเช็คอินเอกสารหรือยกเลิกการเช็กเอาต์ขณะที่เอกสารนั้นเปิดอยู่ใน Microsoft Office Online",
	    new_document_classification: "การจำแนกประเภท:",
	    new_document_classification_help: "รีเซ็ตคลาส คุณสมบัติ และโฟลเดอร์พาเรนต์ของเอกสารต้นฉบับ หากมีอยู่ เมื่อเพิ่มเอกสารโดยใช้เท็มเพลตรายการแล้ว เท็มเพลตรายการของเอกสารต้นฉบับจะถูกเลือกโดยอัตโนมัติ หากมีอยู่ คุณสมบัติของเอกสารต้นฉบับถูกใช้เป็นค่าแบบร่าง แต่โฟลเดอร์และคลาสที่ระบุไว้ในเท็มเพลตรายการจะถูกสงวนไว้",
		new_document_classification_use_source_document: "ใช้เอกสารต้นฉบับ:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "ไอคอนชนิด ${0}",
		repository_name_and_type: "ชื่อ ${0} และชนิด",
		select_class_label: "เลือก ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "มุมมองรายละเอียด",
		detail_view_button: "รายละเอียด",
		magazine_view_button_tooltip: "มุมมองแม็กกาซีน",
		magazine_view_button: "แม็กกาซีน",
		filmstrip_view_button_tooltip: "มุมมองฟิล์มภาพยนตร์",
		filmstrip_view_button: "ฟิล์มภาพยนตร์",

		magazine_view_show: "แสดงในมุมมองนิตยสาร",
		detail_view_show: "แสดงในมุมมองรายละเอียด",

		total_count_item: "ไอเท็ม",
		total_count_items: "ไอเท็ม",
		total_count_more_items: "มากกว่า ${0} ไอเท็ม",

		extension_changed: "นามสกุลของไฟล์ที่คุณเลือกไม่ตรงกับไฟล์ดั้งเดิม  เลือกไฟล์อื่น",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "วิวเวอร์ที่เลือกไว้ไม่สนับสนุนไฟล์ทุกชนิด ถ้าคุณมีการแม็พวิวเวอร์นี้ คุณอาจพบปัญหาเมื่อดูเอกสาร แนะนำให้คุณเลือกวิวเวอร์ที่สนับสนุนไฟล์ทุกชนิดเมื่อเลือกอ็อพชัน ไฟล์ทุกชนิด<br><br><b>เคล็ดลับ:</b> วิวเวอร์ต่อไปนี้สนับสนุนไฟล์ทุกชนิด:<ul><li>แอ็พเพลตวิวเวอร์</li><li>AJAX วิวเวอร์</li><li>การแปลง HTML</li><li>การแปลง PDF</li><li>เว็บเบราว์เซอร์</li></ul>",
		file_type_any: "ไฟล์ทุกชนิด",
		file_type_any_hover: "เลือกอ็อพชันนี้หากคุณต้องการใช้วิวเวอร์ที่เลือกไว้เพื่อดูเอกสารทุกฉบับโดยไม่พิจารณาถึงชนิดไฟล์ อ็อพชันนี้สนับสนุน วิวเวอร์ต่อไปนี้:<br><br><ul><li>แอ็พเพลตวิวเวอร์</li><li>AJAX วิวเวอร์</li><li>การแปลง HTML</li><li>การแปลง PDF</li><li>เว็บเบราว์เซอร์</li></ul><br><br><b>โปรดจำไว้ว่า:</b> ถ้าคุณใช้วิวเวอร์เฉพาะบ่อยๆ การแม็พใดๆ ที่คุณสร้างที่ใช้อ็อพชันนี้ควรถูกย้ายไปยังท้ายของการแม็พวิวเวอร์ของคุณ ",
		file_type_input: "ชนิดไฟล์ใหม่:",

		mime_type_input: "ชนิด MIME ใหม่:",
		mime_type_input_invalid: "ชนิด MIME ใหม่ห้ามใช้อักขระใดๆ ต่อไปนี้:",
		mime_type_available: "ชนิด MIME ที่พร้อมใช้งาน",
		mime_type_selected: "ชนิด MIME ที่เลือก",
		file_type_input: "ชนิดไฟล์ใหม่:",
		file_type_input_invalid: "ชนิดไฟล์ไหม่ไม่สามารถมีอักขระใดๆ ต่อไปนี้: ,",
		file_type_available: "ชนิดไฟล์ที่มีอยู่",
		file_type_selected: "ชนิดไฟล์ที่เลือกไว้",
		file_type_header: "ชนิดไฟล์",
		viewer: "วิวเวอร์:",
		viewer_viewer: "ผู้ดู",
		viewer_view: "ดู",
		viewer_preview: "แสดงตัวอย่าง",
		viewer_merge_and_split: "การผสานและการแยก",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "แสดงตัวอย่างเท่านั้น",
		preview_only_label: "(แสดงตัวอย่าง)",
		preview_only_hover: "การแม็พวิวเวอร์นี้จะถูกใช้เมื่อผู้ใช้คลิก <b>แสดงตัวอย่าง</b> เท่านั้น",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "ที่เก็บนี้ไม่สนับสนุนการเรียกดู โปรดเลือกที่เก็บอื่น",

		repository_community_teamspace_message: "ที่เก็บอื่นถูกกำหนดไว้เป็นที่เก็บไลบรารีชุมชนแล้ว หากคุณต้องการดำเนินการต่อโดยใช้ที่เก็บที่มีอยู่เป็นที่เก็บไลบรารีชุมชน, ให้เลือก <b>ไม่ใช่</b> ก่อนที่คุณจะบันทึกการเปลี่ยนแปลงของคุณเพื่อปกป้องที่เก็บที่มีอยู่จากการแทนที่ด้วยที่เก็บนี้",

		favorites_empty: "คุณยังไม่มีรายการโปรด",
		syncItems_empty: "คุณยังไม่มีไฟล์ที่ซิงค์ใดๆ",

		root_folder_id: "ID โฟลเดอร์รูท",
		unified_searches: "การค้นหาข้ามที่เก็บ:",
		max_results: "จำนวนของผลลัพธ์:",
		direct_retrieve_enabled: "ดึงข้อมูลโดยตรง:",
		itemTypesToDisplay: "ชนิดไอเท็มที่จะแสดง:",
		allItemTypes: "ชนิดไอเท็มทั้งหมด",
		include_attr_group_name: "คำอธิบายกลุ่มแอ็ตทริบิวต์ในชื่อในการแสดงแอ็ตทริบิวต์:",
		admin_repcfg_include_attr_group_name_hover: "โดยดีฟอลต์ คำอธิบายกลุ่มแอ็ตทริบิวต์รวมอยู่ในชื่อสำหรับแอ็ตทริบิวต์ของกลุ่มแอ็ตทริบิวต์ ซึ่งช่วยให้ผู้ใช้ทราบว่าแอ็ตทริบิวต์ของกลุ่มแอ็ตทริบิวต์เป็นสมาชิกของกลุ่มแอ็ตทริบิวต์ใด เมื่อผู้ใช้ทำงานกับแอ็ตทริบิวต์<br>ตัวอย่างเช่น ผู้ใช้อาจเห็นชื่อต่อไปนี้สำหรับแอ็ตทริบิวต์ของกลุ่มแอ็ตทริบิวต์: Document Settings.Document Type<br><br>ถ้าคุณปิดใช้งานอ็อพชันนี้ จะใช้เฉพาะคำอธิบายแอ็ตทริบิวต์สำหรับชื่อแอ็ตทริบิวต์ของกลุ่มแอ็ตทริบิวต์<br>ตัวอย่างเช่น ผู้ใช้จะเห็นชื่อนี้: Document Type<br><br>หากไม่มีคำอธิบายกลุ่มแอ็ตทริบิวต์ ผู้ใช้อาจไม่สามารถบอกได้ว่า Document Type เป็นแอ็ตทริบิวต์แบบง่าย หรือแอ็ตทริบิวต์ของกลุ่มแอ็ตทริบิวต์",
		documentItemTypesOnly: "ชนิดไอเท็มโมเดลเอกสารเท่านั้น",
		object_store: "ชื่อสัญลักษณ์ของที่เก็บอ็อบเจ็กต์:",
		object_store_display_name: "ชื่อที่แสดงของที่เก็บอ็อบเจ็กต์:",
		teamspaceUpgradeMsg: "Teamspace ของคุณจะมีการอัพเดตเมื่อคุณบันทึกคอนฟิกูเรชันที่เก็บ ถ้าคุณมี Teamspace จำนวนมาก การอัพเดตอาจใช้เวลาหลายนาที",
		synchUpgradeMsg: "โมดูลซิงค์บนที่เก็บนี้จะมีการอัพเดตเมื่อคุณบันทึกคอนฟิกูเรชันที่เก็บ",
		protocol: "โปรโตคอล:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID ที่เก็บของ CMIS:",
		cmis_url: "URL ของเอกสารเซอร์วิสไบน์ดิง CMIS AtomPub:",
		trace_level: "ระดับการติดตาม",
		trace_dir: "ไดเร็กทอรีการติดตาม",
		temp_dir: "ไดเร็กทอรีชั่วคราว",
		show_document_location: "แสดงตำแหน่งของเอกสาร",
		max_folders: "โฟลเดอร์สูงสุด",
		afp_conversion: "การแปลง AFP",
		line_conversion: "การแปลงข้อมูลบรรทัด",
		max_hits: "ความนิยมสูงสุด",
		folder_search_expresssion: "นิพจน์การค้นหาโฟลเดอร์",
		max_item_types: "ชนิดของไอเท็มสูงสุด",
		max_worklists: "รายการงานสูงสุด",
		update_storage_collection: "อัพเดตคอลเล็กชันหน่วยเก็บข้อมูล",
		include_mime_types_in_search_results: "รวมชนิด MIME ในผลลัพธ์การค้นหา",
		object_type: "ชนิดอ็อบเจ็กต์",
		object_type_document: "เอกสาร",
		object_type_folder: "โฟลเดอร์",
		file_label: "ไฟล์:",
		plugin_jarfile_path_label: "พาธไฟล์ JAR:",
		plugin_classfolder_path_label: "พาธไฟล์คลาส:",
		plugin_classname_label: "ชื่อคลาส:",
		plugin_id_label: "ID ปลั๊กอิน:",
		class_label: "คลาส",
		configuration: "การกำหนดคอนฟิก",
		connect_repository: "เชื่อมต่อ...",
		server_type: "ชนิดเซิร์ฟเวอร์",
		timeout_in_seconds: "หมดเวลา (วินาที):",
		default_search_template: "การค้นหาดีฟอลต์",
		search_filtered_properties: "คุณสามารถที่สามารถค้นหาได้",
		property_contains_label: "คุณสมบัติประกอบด้วย",
		class_contains_label: "คลาสมี",
		search_filtered_operators: "โอเปอเรเตอร์การค้นหา",
		default_search_results: "ผลของการค้นหา",
		data_type: "ชนิดข้อมูล",
		status_bar: "แถบแสดงสถานะ",
		operators_for: "โอเปอเรเตอร์สำหรับ:",
		currentUser: "ผู้ใช้ปัจจุบัน",
		nameContains: "ชื่อประกอบด้วย",
		searchFor: "ค้นหา",
		server_autentication: "Server Authentication (OAuth 2.0 พร้อมกับ JWT)",
		standard_authentication: "Standard Authentication (OAuth2.0 3 ขา)",
		developer_authentication: "Developer Authentication",
		enterprise_id: "Enterprise ID:",
		public_key_id: "Public Key ID:",
		private_key_path: "พาธไฟล์ไพรเวตคีย์:",
		server_user_email: "เซอร์เวอร์อีเมลผู้ใช้",

		filter_builder_tooltip: "กำหนดตัวกรอง",

		// Launch bar
		launchbar_home: "เปิดโฮม",
		launchbar_favorites: "เปิดรายการโปรด",
		launchbar_browse: "เปิดมุมมองเรียกดู",
		launchbar_browse_popup: "เปิดรายการเรียกดูแบบป็อปอัพ",
		launchbar_search: "เปิดมุมมองค้นหา",
		launchbar_search_popup: "เปิดรายการค้นหาแบบป็อปอัพ",
		launchbar_teamspaces: "เปิดมุมมอง Teamspace",
		launchbar_teamspaces_popup: "เปิดรายการ Teamspace แบบป็อปอัพ",
		launchbar_work: "เปิดมุมมองงาน",
		launchbar_work_popup: "เปิดรายการงานแบบป็อปอัพ",
		launchbar_entry_templates: "เปิดมุมมองเท็มเพลตรายการ",
		launchbar_entry_templates_popup: "เปิดรายการป็อปอัพเท็มเพลตรายการ",
		launchbar_admin: "เปิดมุมมองการจัดการ",

		admin_sync_server: "ซิงค์เซิร์ฟเวอร์",
		admin_settings: "ค่าติดตั้ง",
		admin_interface_text: "เลเบล",
		admin_interface_text_desktop: "เดสก์ท็อป:",
		admin_desktops: "เดสก์ท็อป",
		admin_repositories: "ที่เก็บ",
		admin_mobile: "โทรศัพท์มือถือ",
		admin_menus: "เมนู",
		admin_reason_codes: "เหตุผลในการเขียน",
		admin_plugins: "ปลั๊กอิน",
		admin_plugins_state_enabled: "เปิดใช้งานปลั๊กอิน",
		admin_plugins_state_disabled: "ปิดใช้งานปลั๊กอิน",
		admin_plugins_version: "เวอร์ชัน:",
		admin_plugins_version_heading: "เวอร์ชัน",
		admin_plugins_icon: "ไอคอนปลั๊กอิน",
		admin_viewer_mapping_icon: "ไอคอนการแม็พวิวเวอร์",
		admin_viewer_defs: "การแม็พวิวเวอร์",
		admin_viewer_dialog_title: "การแม็พ",
		admin_viewer_dialog_new_title: "การแม็พใหม่",
		admin_viewer_dialog_instructions: "การแม็พจะระบุวิวเวอร์ที่ใช้สำหรับไฟล์บนที่เก็บ คุณสามารถสร้างการแม็พจำนวนมากเพื่อระบุวิวเวอร์ต่างกันสำหรับชนิดของไฟล์ที่ต่างกัน คุณสามารถใช้ชนิด MIME หรือส่วนขยายไฟล์อย่างใดอย่างหนึ่งเพื่อนิยามการแม็พ การแม็พด้วยส่วนขยายไฟล์จะถูกแม็พกับชื่อเอกสาร ตัวอย่างเช่น การแม็พกับชนิดไฟล์ที่ตั้งค่าเป็น gif จะถูกแม็พกับชื่อเอกสารที่ลงท้ายด้วยส่วนขยาย .gif",
		admin_desktop_viewer_defs: "การแม็พวิวเวอร์:",
		admin_desktop_viewer_defs_hover: "การแม็พวิวเวอร์จะระบุว่าวิวเวอร์ใดที่ใช้เพื่อเปิดเอกสารชนิดอื่นบนที่เก็บ<br><br>คุณสามารถ สร้างวิวเวอร์แม็พใหม่ในส่วน <b>วิวเวอร์แม็พ</b> ของเครื่องมือการจัดการ",
		admin_desktops_used: "ใช้ในเดสก์ท็อป",
		admin_desktop_additional_settings: "ค่าติดตั้งเพิ่มเติม:",
		admin_default_desktop: "ตั้งเป็นเดสก์ท็อปดีฟอลต์",
		admin_default_desktop_header: "เดสก์ท็อปดีฟอลต์",
		admin_layout_tab_title: "โครงร่าง",
		admin_desktop_icon: "ไอคอนเดสก์ท็อป",

		// Themes
		admin_themes: "ธีม",
		admin_theme_list_instructions: "คุณสามารถสร้างธีมเพื่อให้ง่ายต่อการปรับแต่งเว็บไคลเอ็นต์สำหรับองค์กรของคุณ คุณสามารถสร้างธีมจำนวนมากหากคุณต้องการใช้สี, ฟอนต์, หรือตราสัญลักษณ์อื่นๆ สำหรับเดสก์ท็อปอื่นๆ ในสภาวะแวดล้อมของคุณ<br><br>หลังจากที่คุณสร้างธีมแล้ว, คุณสามารถใช้กับเดสก์ท็อปโดยกำหนดคอนฟิกธีมบนแท็บ <b>ลักษณะที่ปรากฏ</b> ของเดสก์ท็อป",
		admin_theme_instructions: "สร้างธีมเพื่อควบคุมสีและฟอนต์ที่ถูกแสดงอยู่ในเว็บไคลเอ็นต์ นอกจากนี้, คุณสามารถใช้ธีมเพื่อเปลี่ยนตราสัญลักษณ์, ชื่อแอ็พพลิเคชัน, และข้อความลิขสิทธิ์ที่ถูกแสดงบนบันทึกในเพจและในแบนเนอร์",
		admin_theme_heading: "ธีม: <b>${0}</b>",
		admin_new_theme: "สร้างธีม",
		admin_text_theme: "ธีม",
		admin_delete_confirmation_themes: "คุณต้องการลบธีมที่เลือกไว้หรือไม่?\n${0} ธีมถูกเลือกไว้",
		admin_theme_color: "สี",
		admin_theme_text: "Text",
		admin_theme_solid: "ทึบ",
		admin_theme_gradient: "ไล่ระดับสี",
		admin_theme_box: "กล่อง",
		admin_theme_color_label: "สี ${0}:",
		admin_theme_name_invalid: "ชื่อธีมไม่สามารถมีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID ธีมต้องเป็นค่าเฉพาะ, และคุณไม่สามารถเปลี่ยน ID ได้หลังจากที่คุณบันทึกธีม<br><br>ID สามารถมีอักขระตัวอักษรผสมตัวเลขเท่านั้น",
		admin_theme_name_hover: "ชื่อไม่สามารถมีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatic",
		admin_theme_logo_url_hover: "ป้อน URL ของไฟล์ตราสัญลักษณ์ ถ้าตราสัญลักษณ์อยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เดียวกับเว็บไคลเอ็นต์ ให้ป้อน URL แบบสัมพันธ์ เช่น: /mycustomizations/banner_logo.png<br><br>แนะนำให้ใช้ตราสัญลักษณ์ที่มีพื้นหลังโปร่งใส",
		admin_theme_color_palette_title_heading: "ถาดสี",
		admin_theme_color_palette_help_text: "สร้างถาดสีสำหรับธีมของคุณ โดยใช้ค่าฐานสิบหกหรือตัวเลือกสี คุณสามารถเพิ่มสีได้มากเท่าที่คุณต้องการ",
		admin_theme_color_add_button_label: "เพิ่มสี",
		admin_theme_color_remove_button_label: "ลบสี",
		admin_theme_global_title_heading: "อิลิเมนต์แอ็พพลิเคชันหลายแบบ",
		admin_theme_global_font: "ตระกูลฟอนต์:",
		admin_theme_global_font_hover: "เลือกฟอนต์เพื่อใช้ในเว็บไคลเอ็นต์ สีถูกแสดงตามลำดับการมาก่อนหลัง; ฟอนต์ถัดไปในรายการจะถูกใช้หากฟอนต์ก่อนหน้านี้ไม่ได้ติดตั้งไว้บนเครื่องไคลเอ็นต์",
		admin_theme_global_framework_color_label: "สีกรอบงาน:",
		admin_theme_global_framework_color_hover: "เลือกสีเพื่อใช้สำหรับอิลิเมนต์ต่อไปนี้:<ul><li>แถบหัวเรื่องบนไดอะล็อกบ็อกซ์</li><li>สีไฮไลต์ที่ด้านบนสุดของแท็บที่เลือกไว้</li><li>ไอคอนมุมมองรายการเนื้อหา (มุมมองรายการ, มุมมองนิตยสาร, มุมมองภาพยนต์)</li></ul><br>สีนี้ไม่ได้ใช้สำหรับตัวคั่นระหว่างส่วนของเว็บไคลเอ็นต์ หากคุณต้องการเปลี่ยนสีของตัวคั่น, คุณต้องสร้างปลั๊กอินเพื่อจัดเตรียมไฟล์ CSS แบบกำหนดเอง",
		admin_theme_color_global_toolbar: "สีแถบเครื่องมือโกลบอล:",
		admin_theme_color_global_toolbar_hover: "หากคุณรวมแถบเครื่องมือโกลบอลไว้ในเว็บไคลเอ็นต์, ให้เลือกสีของแถบเครื่องมือ<br><br><b>เคล็ดลับ:</b> แถบเครื่องมือถูกแสดงในแบนเนอร์ที่ด้านบนสุดของเว็บไคลเอ็นต์, ดังนั้น สีของแถบเครื่องมือควรเป็นสีของแบนเนอร์ที่เติมเต็มให้สมบูรณ์",
		admin_theme_global_selected_color: "สีไอเท็มที่เลือกไว้:",
		admin_theme_global_selected_color_hover: "เลือกสีที่ต้องการใช้เมื่อเลือกไอเท็มในแผนผังการเรียกดู, แผนผังการค้นหา, และรายการเนื้อหา<br><br>สีการวางเมาส์ (สีที่ใช้เมื่อผู้ใช้ลอยอยู่เหนือไอเท็ม) ได้รับมาจากสีนี้",
		admin_theme_global_link_color: "สีของลิงก์:",
		admin_theme_global_link_color_hover: "เลือกสีที่ต้องการใช้สำหรับ URL ที่สามารถคลิกได้ทั้งหมดในเว็บไคลเอ็นต์ ตัวอย่างเช่น, สีนี้ถูกใช้ในลิงก์ ศึกษาเพิ่มเติม ซึ่งถูกแสดงตลอดทั้งเว็บไคลเอ็นต์",
		admin_theme_login_title_heading: "อิลิเมนต์เพจล็อกอิน",
		admin_theme_page_background_label: "สีพื้นหลังของเพจล็อกอิน:",
		admin_theme_login_page_background_hover: "เลือกสีที่ต้องการแสดงซึ่งอยู่หลังบานหน้าต่างล็อกอิน",
		admin_theme_login_pane_background_label: "สีพื้นหลังบานหน้าต่างล็อกอิน:",
		admin_theme_login_pane_background_hover: "เลือกสีที่ต้องการแสดงสำหรับบานหน้าต่างล็อกอิน สีนี้ควรเป็นสีที่มองเห็นเมื่อเทียบกับสีพื้นหลังของเพจล็อกอิน",
		admin_theme_text_color: "สีข้อความ:",
		admin_theme_login_pane_text_color_hover: "เลือกสีเพื่อใช้สำหรับข้อความบานหน้าต่างล็อกอิน สีนี้ถูกใช้สำหรับข้อความ ยินดีต้อนรับ และเลเบลฟิลด์ สีนี้ควรใช้เป็นสีพื้นหลังของบานหน้าต่างล็อกอิน",
		admin_theme_copyright_text: "ข้อความลิขสิทธิ์:",
		admin_theme_copyright_text_hover: "ระบุว่าให้แสดงข้อความลิขสิทธิ์บนเพจล็อกอิน",
		admin_theme_copyright_selection_IBM: "ลิขสิทธิ์ IBM",
		admin_theme_copyright_selection_none: "ไม่มีข้อความลิขสิทธิ์",
		admin_theme_banner_title_heading: "อิลิเมนต์แบนเนอร์",
		admin_theme_text_icons_color: "สีข้อความและไอคอน:",
		admin_theme_icon_color_label: "สีไอคอน:",
		admin_theme_shadow_label: "เงา:",
		admin_theme_banner_text_icons_hover: "เลือกสีเพื่อใช้สำหรับข้อความและไอคอนในแบนเนอร์ สีนี้ควรเป็นสีที่มองเห็นเมื่อเทียบกับสีพื้นหลังของแบนเนอร์",
		admin_theme_banner_product_name_label: "ชื่อผลิตภัณฑ์:",
		admin_theme_banner_product_name_hover: "เมื่อคุณสร้างเดสก์ท็อป, คุณสามารถระบุชื่อแบบกำหนดเองเพื่อแสดงไว้สำหรับแอ็พพลิเคชัน หากคุณไม่ได้ระบุชื่อแบบกำหนดเองไว้, IBM Content Navigator ถูกใช้เป็นชื่อผลิตภัณฑ์ ระบุว่าให้ใช้ชื่อแอ็พพลิเคชันที่นิยามอยู่ในเดสก์ท็อปหรืออิมเมจในตำแหน่งของชื่อ",
		admin_theme_banner_product_name_desktop_defined_label: "ใช้ชื่อจากเดสก์ท็อป",
		admin_theme_banner_product_name_image: "ใช้ตราสัญลักษณ์แบบกำหนดเอง (URL)",
		admin_theme_background_color_label: "สีพื้นหลัง:",
		admin_theme_style_label: "สไตล์:",
		admin_theme_banner_color_hover: "เลือกสีที่ต้องการใช้สำหรับแบนเนอร์ที่ด้านบนสุดของแอ็พพลิเคชัน<br><br><b>คำแนะนำ:</b>ตรวจสอบว่าว่าสีของข้อความบนแถบป้ายมองเห็นได้เทียบกับสีพื้นหลังของแถบป้าย",
		admin_theme_buttons_title_heading: "ปุ่ม",
		admin_theme_navigation_title_heading: "อิลิเมนต์การนำทาง",
		admin_theme_navigation_icon_selected_label: "สีไอคอนที่เลือก:",
		admin_theme_navigation_background_hover: "เลือกสีที่ต้องการใช้สำหรับพื้นหลังของแถบการนำทางคุณลักษณะ",
		admin_theme_navigation_icon_color_hover: "เลือกสีที่ต้องการใช้สำหรับไอคอนในแถบการนำทางคุณลักษณะ เมื่อใช้โครงร่างดีฟอลต์บนเดสก์ท็อป สีนี้ควรตรงข้ามกับพื้นหลังของเมนูดร็อปดาวน์คุณลักษณะ เมื่อใช้โครงร่างคลาสสิคบนเดสก์ท็อป สีนี้ควรตรงข้ามกับพื้นหลังของแถบการนำทางคุณลักษณะ",
		admin_theme_navigation_icon_selected_hover: "เลือกสีเพื่อใช้สำหรับคุณลักษณะที่เลือกไว้ในแถบการนำทางคุณลักษณะ สีควรเป็นสีของไอคอนและสีพื้นหลังของแถบการนำทางคุณลักษณะที่เติมเต็มความสมบูรณ์<br><br>เมื่อใช้โครงร่างคลาสสิคบนเดสก์ท็อป สีนี้ถูกใช้เป็นสีของเมาส์ในแถบการนำทางคุณลักษณะ",
		admin_theme_button_background_color_hover: "เลือกสีที่ต้องการใช้สำหรับพื้นหลังของปุ่ม",
		admin_theme_button_style_hover: "เลือกสไตล์ของปุ่ม",
		admin_theme_button_text_icon_color_hover: "เลือกสีที่ต้องการใช้สำหรับข้อความและอิมเมจบนปุ่ม",
		admin_theme_no_logo_label: "ไม่มีตราสัญลักษณ์",
		admin_theme_custom_logo_label: "ตราสัญลักษณ์แบบกำหนดเอง (URL)",
		admin_theme_banner_type: "ลักษณะการเติมแถบป้าย:",
		admin_theme_banner_type_hover: "ระบุว่าแถบป้ายควรเป็นสีทึบหรือสีไล่ระดับ ถ้าคุณระบุแถบป้ายแบบไล่ระดับสี สีที่คุณระบุสำหรับสีแถบป้ายคือสีที่เข้มที่สุดในแถบป้าย<br><br><b>คำแนะนำ:</b>ตรวจสอบว่าว่าสีของข้อความบนแถบป้ายมองเห็นได้เทียบกับสีพื้นหลังของแถบป้าย",
		admin_theme_icon: "ไอคอนธีม",
		admin_theme_buttons_and_links_title_heading: "ปุ่ม ฟิลด์ และลิงก์",
		admin_theme_button_style_label: "สไตล์ปุ่ม:",
		admin_theme_theme_style_label: "สไตล์ธีม:",
		admin_theme_theme_style_hover: "เลือกสไตล์ตามธีม คุณสามารถเปลี่ยนสไตล์ได้ตลอดเวลาเมื่อสร้างหรือแก้ไขธีม เมื่อคุณเปลี่ยนจากสไตล์หนึ่งไปอีกสไตล์หนึ่ง การตั้งค่าธีมจะถูกรีเซ็ตเป็นค่าดีฟอลต์",
		admin_theme_accent_color_label: "สีของการเน้นเสียง:",
		admin_theme_accent_color_hover: "เลือกสีเพื่อใช้สำหรับแถบที่ด้านบนของไดอะล็อกและสำหรับการโหลดสปินเนอร์",
		admin_theme_global_toolbar_text_color_label: "สีข้อความแถบเครื่องมือโกลบอล:",
		admin_theme_global_toolbar_text_color_hover: "ถ้าคุณรวมแถบเครื่องมือโกลบอลไว้ในเว็บไคลเอ็นต์ ให้เลือกสีที่จะใช้สำหรับข้อความในแถบเครื่องมือ",
		admin_theme_banner_text_color_hover: "เลือกสีที่จะใช้สำหรับข้อความในแบนเนอร์",
		admin_theme_banner_icon_color_hover: "เลือกสีที่จะใช้สำหรับไอคอนในแบนเนอร์",
		admin_theme_button_color_label: "สี:",
		admin_theme_button_color_hover: "เลือกสีเพื่อใช้สำหรับอิลิเมนต์ต่อไปนี้:<ul><li>แถบหัวเรื่องบนไดอะล็อกบ็อกซ์</li><li>สีไฮไลต์ที่ด้านบนสุดของแท็บที่เลือกไว้</li><li>ไอคอนมุมมองรายการเนื้อหา (มุมมองรายการ, มุมมองนิตยสาร, มุมมองภาพยนต์)</li><li>ปุ่ม ฟิลด์ และลิงก์</li></ul>สีที่ใช้เมื่อวางเมาส์เหนือปุ่มสืบทอดมาจากสีนี้ สีนี้ไม่ได้ใช้สำหรับตัวคั่นระหว่างส่วนของเว็บไคลเอ็นต์ หากคุณต้องการเปลี่ยนสีของตัวคั่น, คุณต้องสร้างปลั๊กอินเพื่อจัดเตรียมไฟล์ CSS แบบกำหนดเอง",
		admin_theme_theme_style_col_header: "สไตล์ธีม",

		admin_syncserver_consistency_checker: "โปรแกรมตรวจสอบความสอดคล้องกัน:",
		admin_syncserver_consistency_checker_hover: "รันโปรแกรมตรวจสอบความสอดคล้องกันเพื่อมั่นใจว่าฐานข้อมูลเซอร์วิสซิงค์มีข้อมูลปัจจุบันเกี่ยวกับสถานะของแต่ละไอเท็มที่อยู่บนเซิร์ฟเวอร์ ตัวอย่างเช่น, รันโปรแกรมตรวจสอบความสอดคล้องกันหลังจากฐานข้อมูลเซอร์วิสซิงค์หยุดทำงานเพื่อขอรับข้อมูลเกี่ยวกับเอกสารที่ถูกอัพเดตบนที่เก็บในระหว่างที่หยุดทำงาน",
		admin_syncserver_consistency_checker_button: "รันโปรแกรมตรวจสอบความสอดคล้องกัน",
		admin_syncserver_consistency_checker_started: "เริ่มต้นแล้ว:",
		admin_syncserver_consistency_checker_ended: "สิ้นสุดแล้ว:",
		admin_syncserver_consistency_checker_duration: "ระยะเวลา:",
		admin_syncserver_consistency_checker_items_processed: "ไอเท็มซิงค์ที่ประมวลผลแล้ว:",
		admin_syncserver_consistency_checker_items_processed_success: "ไอเท็มซิงค์ที่ประมวลผลเสร็จสมบูรณ์แล้ว:",
		admin_syncserver_consistency_checker_items_discovered: "ค้นพบไอเท็มที่เก็บใหม่:",
		admin_syncserver_consistency_checker_change_updates: "ผลรวมการอัพเดต:",
		admin_syncserver_consistency_checker_state: "สถานะ:",
		admin_syncserver_consistency_checker_state_done: "ทำเสร็จแล้ว",
		admin_syncserver_consistency_checker_state_running: "การรัน",
		admin_syncserver_consistency_checker_user: "ส่งโดย:",
		admin_syncserver_consistency_checker_scheduled: "กำหนดตารางเวลา:",

		admin_syncserver_dbcleanup: "Database Cleanup",
		admin_syncserver_dbcleanup_hover: "รันเครื่องมือ database cleanup เพื่อลบอุปกรณ์และไอเท็มที่ไม่ได้ใช้ซึ่งไม่ได้มีการซิงค์แล้ว ออกจากฐานข้อมูล",
		admin_syncserver_dbcleanup_button: "Database Cleanup",
		admin_syncserver_dbcleanup_state_done: "ทำเสร็จแล้ว",
		admin_syncserver_dbcleanup_state_running: "การรัน",
		admin_syncserver_dbcleanup_started: "เริ่มต้นแล้ว:",
		admin_syncserver_dbcleanup_ended: "สิ้นสุดแล้ว:",
		admin_syncserver_dbcleanup_state: "สถานะ:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "ที่เก็บที่ลบ:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "ไอเท็มที่ซิงค์ที่ลบ:",
		admin_syncserver_dbcleanup_devicedeleted_count: "อุปกรณ์ที่ลบ:",
		admin_syncserver_dbcleanup_deviceexpired_count: "อุปกรณ์ที่หมดอายุ:",

		admin_syncserver_publicSyncUrl: "URL แบบพับลิกของเซอร์วิสซิงค์:",
		admin_syncserver_publicSyncUrl_hover: "ระบุ URL ซึ่งที่เก็บสามารถสื่อสารกับเซอร์วิสซิงค์ IBM Content Navigator รูปแบบดีฟอลต์ของ URL คือ http://sync_public_URL:port_number/sync/notify",

		admin_syncserver_managed: "ค่าติดตั้งไคลเอ็นต์ Sync:",
		admin_syncserver_managed_hover: "ผู้ใช้ไม่สามารถเปลี่ยนค่าติดตั้งเหล่านี้ในไคลเอ็นต์ IBM Content Navigator Sync",
		admin_syncserver_managed_subfolder: "ระดับโฟลเดอร์ที่จะซิงค์",
		admin_syncserver_managed_subfolder_hover: "ถ้าผู้ใช้ซิงค์โฟลเดอร์ ให้ระบุจำนวนโฟลเดอร์สูงสุดที่จะถูกซิงค์ ตัวอย่างเช่น ถ้าผู้ใช้ระบุระดับโฟลเดอร์ 3, โฟลเดอร์ที่ผู้ใช้ซิงค์และโฟลเดอรย่อยระดับ 2 จะถูกซิงค์<br><br>ให้แน่ใจว่าสภาวะแวดล้อมของคุณถูกปรับขนาดให้รองรับปริมาณทราฟิกการซิงค์ที่ถูกสร้างขึ้นโดยค่าติดตั้งนี้",
		admin_syncserver_managed_subfolder_all: "โฟลเดอร์ย่อยทั้งหมด",
		admin_syncserver_managed_subfolder_none: "ไม่มีโฟลเดอร์ย่อย",
		admin_syncserver_managed_subfolder_no_more: "ระดับที่จำกัด",
		admin_syncserver_managed_subfolder_levels: "โฟลเดอร์",
		admin_syncserver_managed_schedule: "กำหนดเวลาซิงค์",
		admin_syncserver_managed_schedule_hover: "ให้แน่ใจว่าสภาวะแวดล้อมของคุณถูกปรับขนาดให้รองรับปริมาณทราฟิกการซิงค์ที่ถูกสร้างขึ้นโดยการกำหนดเวลาซิงค์<br><br>ช่วงเวลาสูงสุดคือ 24 ชั่วโมงหรือ 1440 นาที<br><br>ผู้ใช้สามารถลบล้างกำหนดเวลาซิงค์ได้โดยคลิก <b>ซิงค์เดี๋ยวนี้</b> ในไคลเอ็นต์",
		admin_syncserver_managed_schedule_manual: "ซิงค์แบบแมนวล",
		admin_syncserver_managed_schedule_continuous: "ซิงค์อย่างต่อเนื่อง",
		admin_syncserver_managed_schedule_every: "ซิงคืในช่วงเวลาที่ระบุ",
		admin_syncserver_managed_schedule_minutes: "นาที",
		admin_syncserver_managed_schedule_hours: "ชั่วโมง",

		// redaction codes
		admin_new_reason_code: "เหตุผลในการเขียนใหม่",		
		admin_reason_code_name_invalid: "ชื่อเหตุผลในการเขียนต้องไม่มีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "คำอธิบายต้องไม่มีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "คำอธิบายต้องไม่มีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "ชื่อไม่สามารถใช้อักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "รายละเอียด",
		admin_reason_code_applications_hover: "รายการของแอ็พพลิเคชัน Datacap ที่กำลังอ้างอิงเหตุผลในการเขียนนี้",
		admin_reason_code_applications: "แอ็พพลิเคชัน Datacap",
		admin_delete_confirmation_reason_codes: "คุณต้องการลบเหตุผลในการเขียนที่เลือกหรือไม่?",
		admin_delete_confirmation_reason_code: "คุณต้องการลบเหตุผลในการเขียนที่เลือกหรือไม่?",
		admin_reason_code_heading: "เหตุผลในการเขียน: <b>${0}</b>",
		admin_reason_code_list_instructions: "เหตุผลในการเขียนบ่งชี้ว่า เพราะเหตุใดข้อมูลที่ละเอียดอ่อนจึงได้รับการปกป้องโดยถูกซ่อนไว้ไม่ให้มองเห็น แต่ละเหตุผลระบุชนิดของข้อมูลที่ละเอียดอ่อน ซึ่งถูกปกปิกจากผู้ใช้ทั่วไป",
		admin_reason_code_instructions: "คุณสามารถสร้างเหตุผลในการเขียนสำหรับข้อมูลที่ละเอียดอ่อนแต่ละชนิด จากนั้น คุณสามารถใช้เหตุผลนั้นในนโยบายการเขียน เพื่อกำหนดบุคคลที่สามารถมองเห็นข้อมูลนั้น และบุคคลที่สามารถสร้างหรือปรับเปลี่ยนการเขียนได้",
		admin_reason_code_applications_label: "แอ็พพลิเคชัน Datacap",
		admin_reason_code_repositories: "ที่เก็บ",
		admin_reason_code_repositories_label: "ที่เก็บ",
		admin_reason_code_repositories_hover: "รายการของที่เก็บ ICN ที่อ้างถึงเหตุผลในการเขียนนี้",
		admin_reason_code_repositories_default_value: "ไม่ได้ตั้งค่า",
		admin_reason_code_description_label: "คำอธิบาย",
		admin_reason_code_applications_default_value: "ไม่ได้ตั้งค่า",
		admin_redaction_reasons: "เหตุผลในการเขียน",
		admin_redactions: "การเขียนตามบทบาท",
		admin_redactions_policies_roles: "นโยบายและบทบาท",
		admin_reasons: "เหตุผล",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ไม่สามารถแก้ไข ID ได้  แต่สามารถคัดลอกไปยังคลิปบอร์ด",
		// Role based administration
		admin_rba: "การควบคุมดูแลเดสก์ท็อปแบบใช้บทบาท",
		admin_rba_mobile_access_enabled: "เดสก์ท็อปนี้ถูกเปิดใช้งานสำหรับการเข้าถึงโมบายล์",
		admin_rba_mobile_access_disabled: "เดสก์ท็อปนี้ไม่ได้เปิดใช้งานสำหรับการเข้าถึงโมบายล์",
		admin_rba_confirm_delete_multiple: "คุณต้องการลบบทบาทการควบคุมดูแลที่เลือกไว้หรือไม่?",
		admin_rba_confirm_delete_single: "คุณต้องการลบบทบาทการควบคุมดูแลที่เลือกไว้หรือไม่?",
		admin_rba_delete_multi_role_desktop: "บทบาทตั้งแต่หนึ่งบทบาทขึ้นไปที่คุณได้เลือกไว้จะถูกกำหนดให้กับเดสก์ท็อป คุณต้องลบบทบาทออกจากเดสก์ท็อปก่อนที่คุณจะสามารถลบบทบาททิ้งได้",
		admin_rba_delete_single_role_desktop: "บทบาทที่คุณเลือกไว้ถูกกำหนดให้กับเดสก์ท็อป ${0} คุณต้องลบบทบาทออกจากเดสก์ท็อปก่อนที่คุณจะสามารถลบบทบาททิ้งได้",
		admin_desktop: "เดสก์ท็อป",
		admin_rba_instructions: "คุณสามารถสร้างและจัดการกับบทบาทการควบคุมดูแลเดสก์ท็อป ซึ่งสัมพันธ์กับสิทธิพิเศษที่กำหนดให้กับผู้ดูแลระบบเดสก์ท็อป",
		admin_rba_not_used: "${0} ไม่ได้ใช้ในเดสก์ท็อปใดๆ",
		admin_rba_desktops: "<b>${0} ถูกใช้ในเดสก์ท็อปต่อไปนี้:</b>",
		admin_rba_new_role: "บทบาทใหม่",
		admin_rba_name_invalid: "ชื่อบทบาทการควบคุมดูแลไม่สามารถมีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "คำอธิบายต้องไม่มีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "คำอธิบายต้องไม่มีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "ชื่อไม่สามารถใช้อักขระใดๆ ต่อไปนี้: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>รายละเอียด: </b> ${0}",
		admin_rba_membership: "การเป็นสมาชิก",
		admin_rba_general_priv: "General",
		admin_rba_appearance_priv: "ลักษณะที่ปรากฏ",
		admin_rba_desktop_config_priv: "คอนฟิกูเรชันเดสก์ท็อป",
		admin_rba_app_name_priv: "ชื่อแอ็พพลิเคชัน",
		admin_rba_theme_priv: "ธีม",
		admin_rba_viewer_map_priv: "วิวเวอร์แม็พ",
		admin_rba_merge_split_priv: "การผสานและการแยก",
		admin_rba_sync_svc_priv: "ซิงค์เซิร์ฟเวอร์",
		admin_rba_menus_priv: "เมนู",
		admin_rba_edit_svc_priv: "แก้ไขเซอร์วิส",
		admin_rba_toolbars_priv: "แถบเครื่องมือ",
		admin_rba_ctx_menus_priv: "เมนูบริบท",
		admin_rba_office_ribbon_priv: "MS Office Ribbon Bar Commands",
		admin_rba_office_menues_priv: "MS Office Context Menus",
		admin_rba_addl_settings_priv: "ค่าติดตั้งเพิ่มเติม",
		admin_rba_mobile_priv: "โทรศัพท์มือถือ",
		admin_rba_add_doc_dlg_priv: "ไดอะล็อกเพิ่มเอกสาร",
		admin_rba_doc_mgmt_priv: "การจัดการกับเอกสาร",
		admin_rba_def_redaction_priv: "อ็อพชันการเขียนดีฟอลต์",
		admin_rba_add_photos_priv: "เพิ่มรูปภาพจากกล้องและไลบรารีรูปถ่าย",
		admin_rba_time_stamp_priv: "เวลาประทับ",
		admin_rba_add_docs_folders_priv: "เพิ่มเอกสารและสร้างโฟลเดอร์ลงในที่เก็บ",
		admin_rba_open_docs_priv: "เปิดเอกสารในแอ็พพลิเคชันอื่นๆ",
		admin_rba_office_config_priv: "คอนฟิกูเรชัน Office",
		admin_rba_tab_label_priv: "เลเบลแท็บ IBM ECM",
		admin_rba_feature_sel_priv: "การเลือกคุณลักษณะ",
		admin_rba_general_config_priv: "คอนฟิกูเรชันทั่วไป",
		admin_rba_favorites_priv: "รายการโปรด",
		admin_rba_add_options_priv: "เพิ่มอ็อพชันในกลุ่มแก้ไข",
		admin_rba_browse_priv: "เรียกดู",
		admin_rba_outlook_int_priv: "การรวม Outlook",
		admin_rba_search_priv: "การค้นหา",
		admin_rba_layout_priv: "โครงร่าง",
		admin_rba_case_priv: "ขนาดตัวอักษร",
		admin_rba_desktop_feat_priv: "คุณลักษณะเดสก์ท็อป",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "คุณลักษณะที่แสดง",
		admin_rba_branding_priv: "การสร้างตราผลิตภัณฑ์",
		admin_rba_home_priv: "ที่อยู่ทางบ้าน",
		admin_rba_main_color_priv: "สีหลัก",
		admin_rba_sec_color_priv: "สีรอง",
		admin_rba_teamspaces_priv: "Teamspace",
		admin_rba_rbr_priv: "การเขียนตามบทบาท",
		admin_rba_et_mgr_priv: "โปรแกรมจัดการเท็มเพลตรายการ",
		admin_rba_policies_roles_priv: "จัดการกับนโยบายและบทบาท",
		admin_rba_work_priv: "ที่ทำงาน",
		admin_rba_reasons_priv: "โค้ดแสดงเหตุผล",
		admin_rba_tasks_priv: "ภารกิจอะซิงโครนัส",
		admin_rba_auth_priv: "การพิสูจน์ตัวตน",
		admin_rba_all_privs: "สิทธิพิเศษทั้งหมด",
		admin_rba_some_privs: "สิทธิพิเศษบางส่วน",
		admin_rba_no_privs: "ไม่มีสิทธิพิเศษ",
		admin_add_users_groups_priv: "เพิ่มผู้ใช้และกลุ่ม",
		admin_url_features_priv: "จัดการกับคุณลักษณะ URL",
		admin_plugin_features_priv: "จัดการกับคุณลักษณะปลั๊กอิน",
		admin_addl_components_priv: "คอมโพเนนต์เพิ่มเติม",
		admin_global_toolbar_priv: "แถบเครื่องมือโกลบอล",
		admin_status_bar_priv: "แถบสถานะ",
		admin_refresh_message: "คุณต้องรีเฟรชเบราว์เซอร์ของคุณเพื่อใช้ข้อมูลที่อัพเดต",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "คุณต้องรีเฟรชเบราว์เซอร์ของคุณเพื่อใช้เดสก์ท็อปดีฟอลต์ที่อัพเดต",
		admin_desktop_refresh_message: "คุณต้องรีเฟรชเบราว์เซอร์ของคุณเพื่อใช้เดสก์ท็อปที่อัพเดต",
		admin_action_open: "เปิด",
		admin_action_edit: "แก้ไข",
		admin_action_copy: "คัดลอก",
		admin_action_delete: "ลบออก",
		admin_action_copy: "คัดลอก",
		admin_action_new: "สร้างใหม่",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "ID นี้ถูกใช้แล้ว คุณต้องระบุ ID ที่ไม่ซ้ำกัน",

		admin_searchable_properties_for: "คุณสมบัติที่สามารถค้นหาได้สำหรับ:",
		admin_repository_new: "ที่เก็บใหม่",
		admin_desktop_new: "เดสก์ท็อปใหม่",
		admin_desktop_file_documents: "ผู้ใช้จำเป็นต้องบันทึกเอกสารและโฟลเดอร์ใหม่ในโฟลเดอร์",
		admin_desktop_file_documents_hover: "เลือกอ็อพชันนี้ถ้าคุณต้องการเลือกโฟลเดอร์เมื่อเพิ่มไอเท็มเข้ากับที่เก็บ ถ้าคุณไม่เลือกอ็อพชันนี้ผู้ใช้สามารถเพิ่มเอกสาร (IBM FileNet P8) หรือเอกสารและโฟลเดอร์ (IBM Content Manager) โดยไม่ต้องเพิ่มลงในโฟลเดอร์",
		admin_desktop_show_security_tab: "แสดงค่าติดตั้งการรักษาความปลอดภัยระหว่างแอ็คชันเพิ่ม และเช็คอิน",
		admin_desktop_show_security_hover: "<b>เฉพาะผู้ใช้ IBM FileNet P8 เท่านั้น</b>  เลือกอ็อพชันนี้ถ้าคุณต้องการอนุญาตให้ผู้ใช้สามารถแก้ไขการรักษาความปลอดภัยของเอกสารและโฟลเดอร์เมื่อเพิ่มหรือเช็กอินไอเท็มเข้ากับเดสก์ท็อปนี้",
		admin_desktop_configure_security_inheritance: "อนุญาตให้ผู้ใช้กำหนดคอนฟิกการสืบทอดความปลอดภัยของโฟลเดอร์",
		admin_desktop_configure_security_inheritance_hover: "<b>เฉพาะผู้ใช้ IBM FileNet P8 เท่านั้น</b>  เลือกอ็อพชันนี้หากคุณต้องการให้ผู้ใช้สามารถปรับแต่งการเข้าถึงไอเท็มในโฟลเดอร์ได้โดยควบคุมการสืบทอดความปลอดภัยของโฟลเดอร์ หากคุณเลือกอ็อพชันนี้ ผู้ใช้สามารถระบุผู้ใช้และกลุ่มที่สามารถสืบทอดความปลอดภัยได้:<ul><li>โฟลเดอร์ A</li><li>โฟลเดอร์ A และโฟลเดอร์ย่อยที่อยู่ภายใต้</li><li>โฟลเดอร์ A และโฟลเดอร์ย่อยทั้งหมด</li></ul>",
		admin_desktop_appearance: "ลักษณะที่ปรากฏ",
		admin_desktop_appearance_instruction: "คุณสามารถปรับแต่งลักษณะที่ปรากฏของเดสก์ท็อปได้โดยเปลี่ยนเพจล็อกอินและแบนเนอร์ที่ถูกแสดงสำหรับเดสก์ท็อป",
		admin_desktop_layout: "โครงร่าง:",
		admin_desktop_layout_hover: "โครงร่างระบุว่าคุณลักษณะใดที่สามารถแสดงในเว็บไคลเอ็นต์ และวิธีจัดเรียงเนื้อหาของเว็บไคลเอ็นต์<br><br><b>เคล็ดลับ:</b> คุณสามารถกำหนดโครงร่างที่กำหนดเองโดยการสร้างปลั๊กอิน คุณต้องลงทะเบียนปลั๊กอินในเครื่องมือการจัดการก่อนที่คุณจะสามารถเลือกโครงร่างที่กำหนดเองได้",
		admin_desktop_layout_default: "ดีฟอลต์",
		admin_desktop_layout_custom: "กำหนดเอง",
		admin_desktop_enable_workflow_email: "เปิดใช้งานเดสก์ท็อปนี้สำหรับการแจ้งเตือนอีเมลเวิร์กโฟลว์ FileNet P8",
		admin_desktop_enable_workflow_email_hover: "เฉพาะผู้ใช้ FileNet P8 เท่านั้น เลือกอ็อพชันนี้ถ้าคุณต้องการให้ผู้ใช้สามารถเปิดเว็บไคลเอ็นต์จาก URL ที่อยู่ในการแจ้งเตือนทางอีเมลที่สร้างขึ้นโดยเอ็นจินกระบวนการ<br /><br />ถ้าคุณไม่ได้เปิดใช้งานอ็อพชันนี้สำหรับไคลเอ็นต์ใดๆ ผู้ใช้จะไม่สามารถล็อกอินเว็บไคลเอ็นต์จาก URL ในการแจ้งเตือน<br /><br />ถ้าคุณเปิดใช้งานอ็อพชันนี้บนหลายเดสก์ท็อปและมีมากกว่าหนึ่งเดสก์ท็อปที่ตรงตามเกณฑ์ที่ระบุไว้ใน URL ในการแจ้งเตือน เว็บไคลเอ็นต์จะใช้เดสก์ท็อปแรกที่ตรงตามเกณฑ์ ",
		admin_desktop_prevent_create_new_search: "ป้องกันไม่ให้ผู้ใช้สร้างการค้นหา",
		admin_desktop_prevent_create_new_search_hover: "อ็อพชันนี้จำกัดผู้ใช้ให้ใช้เฉพาะการค้นหาที่มีอยู่ และจำกัดการสร้างการค้นหาปลายเปิดที่อาจไม่ได้รับการปรับให้ดีที่สุด</br></br>ค่าติดตั้งนี้ไม่กระทบต่อ Teamspace สิทธิในการสร้างการค้นหาใน Teamspace ถูกควบคุมโดยบทบาทของผู้ใช้ใน Teamspace ที่กำหนด",
		admin_desktop_prevent_create_new_unified_search: "ป้องกันมิให้ผู้ใช้สร้างการค้นหาข้ามที่เก็บ",
		admin_desktop_prevent_create_new_unified_search_hover: "อ็อพชันนี้จำกัดให้ผู้ใช้ได้ใช้เฉพาะการค้นหาข้ามที่เก็บที่มีอยู่ และจากการสร้างการค้นหาแบบปลายเปิดที่อาจไม่ได้รับการปรับให้ดีที่สุด",
		admin_desktop_hide_entry_template_not_found_warning: "ซ่อนคำเตือนที่แสดงขึ้นเมื่อไม่พบเท็มเพลตรายการที่เชื่อมโยง",
		admin_desktop_hide_entry_template_not_found_warning_hover: "เลือกอ็อพชันนี้ถ้าคุณต้องการซ่อนข้อความคำเตือน ที่แสดงขึ้นเมื่อแก้ไขคุณสมบัติไอเท็ม และไม่พบเท็มเพลตรายการที่เชื่อมโยงกับไอเท็ม",
		admin_desktop_show_class_role_security_selection: "อนุญาตให้ผู้ใช้กำหนดคอนฟิกบทบาทโดยอ้างอิงตามความปลอดภัยในเท็มเพลตรายการ",
		admin_desktop_show_class_role_security_selection_hover:	"<b>เฉพาะผู้ใช้ IBM FileNet P8 เท่านั้น</b> เลือกอ็อพชันนี้หากคุณต้องการให้ผู้ใช้กำหนดคอนฟิกเท็มเพลตรายการเพื่อใช้บทบาทที่อ้างอิงตามความปลอดภัยเมื่อตั้งค่าความปลอดภัยบนเอกสารและ/หรือโฟลเดอร์โดยใช้เท็มเพลตรายการ  หากคุณเลือกอ็อพชันนี้ เอดิเตอร์เท็มเพลตรายการสามารถระบุให้ใช้อ็อบเจ็กต์บทบาทความปลอดภัยกับนิยามเท็มเพลตรายการ",
		admin_desktop_show_primary_multi_part: "เปิดเอกสารหลักในวิวเวอร์เท่านั้น",
		admin_desktop_show_primary_multi_part_hover: "<b>เฉพาะผู้ใช้ IBM FileNet P8 เท่านั้น</b> เลือกอ็อพชันนี้หากคุณต้องการให้ไฟล์เอกสารหลักเปิดในวิวเวอร์  เอกสารสามารถมีไฟล์ที่เชื่อมโยงได้หลายไฟล์  อ็อพชันนี้จะเปิดไฟล์หลักที่เชื่อมโยงกับเอกสารเท่านั้น",
		admin_desktop_redaction_save_mode: "อ็อพชันการเขียนดีฟอลต์:",
		admin_desktop_redaction_save_mode_hover: "เลือกโหมดบันทึกการเขียนของวิวเวอร์ ViewONE Virtual ดีฟอลต์:</br>* ถามผู้ใช้ให้เลือกเสมอ: จะทำให้ไดอะล็อกแสดงอยู่บนรายการในโหมดการเขียน เพื่อถามผู้ใช้ว่าต้องการเช็กอินเป็นเวอร์ชันใหม่ สร้างเอกสารใหม่ หรือดาวน์โหลดเนื้อหา</br>* เช็กอินเป็นเวอร์ชันใหม่: จะบันทึกเนื้อหาที่เขียนกลับไปยังเวอร์ชันใหม่ของเอกสารที่มีอยู่เสมอ</br>* บันทึกเป็นเอกสารใหม่โดยสมบูรณ์: จะบันทึกเนื้อหาที่เขียนกลับไปเป็นเอกสารใหม่โดยสมบูรณ์เสมอ</br>* ดาวน์โหลดและบันทึกบนไคลเอ็นต์: จะดาวน์โหลดเนื้อหาที่เขียนไปยังระบบไคลเอ็นต์",
		admin_desktop_redaction_save_mode_user_select: "ถามผู้ใช้ให้เลือกเสมอ",
		admin_desktop_redaction_save_mode_new_version: "เช็กอินเป็นเวอร์ชันใหม่",
		admin_desktop_redaction_save_mode_new_document: "บันทึกเป็นเอกสารใหม่โดยสมบูรณ์",
		admin_desktop_redaction_save_mode_local_content: "ดาวน์โหลดและบันทึกบนไคลเอ็นต์",

		admin_desktop_document_add_mode: "ไดอะล็อกเพิ่มเอกสาร:",
		admin_desktop_document_add_mode_hover: "ระบุไดอะล็อกเพิ่มที่ต้องการใช้เมื่อเพิ่มเอกสารที่สร้างขึ้นโดย IBM Content Navigator:<ul><li>สร้างเอกสารที่เขียนแล้วขึ้นใหม่แบบถาวร</li><li>สร้างเอกสารที่ผสานและแยกใหม่</li><li>สร้างเอกสาร Microsoft Office ใหม่</li><li>สร้างเอกสารการแก้ไขเซอร์วิสใหม่</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "เพิ่มเอกสาร",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "เพิ่มเอกสารโดยใช้เท็มเพลตรายการ",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "ผสานและแยก:",
		admin_desktop_merge_and_split_enable_hover: "ระบุว่าคุณต้องการให้ผู้ใช้ผู้ที่เข้าถึงเดสก์ท็อปนี้เพื่อให้สามารถผสานและแยกเอกสารได้โดยใช้วิวเวอร์ที่สนับสนุน",

		admin_desktop_merge_and_split_show_checkin: "แสดงพร้อมต์ให้ผู้ใช้จัดเตรียมค่าคุณสมบัติเมื่อพวกเขาเช็คอินการเปลี่ยนแปลงในเอกสาร",
		admin_desktop_merge_and_split_show_checkin_hover_help: "หากคุณเลือกอ็อพชันนี้ ไดอะล็อกเช็กอินจะแสดงขึ้นเมื่อผู้ใช้เช็กอินการเปลี่ยนแปลงในเอกสารในโหมดการผสานและการแยก",

		admin_desktop_available_categories: "คุณลักษณะที่พร้อมใช้งาน",
		admin_desktop_selected_categories: "คุณลักษณะที่เลือก",

		admin_layout_banner_title: "หน้าแบนเนอร์และล็อกอิน",
		admin_layout_title: "โครงร่าง",

		admin_desktop_application_name: "ชื่อแอ็พพลิเคชัน",
		admin_desktop_application_name_hover: "ระบุชื่อแอ็พพลิเคชันที่จะแสดงในแบนเนอร์<br><br>เคล็ดลับ: กำหนดชื่อแอ็พพลิเคชันสำหรับภาษาอื่นในแท็บ เลเบล / เดสก์ท็อปเลเบล",
		admin_desktop_theme: "ธีม:",
		admin_desktop_theme_hover: "ระบุว่าให้ใช้ธีม IBM Content Navigator ดีฟอลต์หรือใช้ธีมแบบกำหนดเองสำหรับเดสก์ท็อปนี้ เมื่อต้องการใช้ธีมแบบกำหนดเอง, คุณต้องสร้างธีมในส่วนของ <b>ธีม</b> ของเครื่องมือการดูแลจัดการ",
		admin_desktop_login_logo: "ตราสัญลักษณ์หน้าล็อกอิน:",
		admin_desktop_login_logo_hover: "ถ้าคุณต้องการเปลี่ยนตราสัญลักษณ์ที่แสดงบนหน้าล็อกอิน คุณสามารถระบุ URL ของไฟล์ตราสัญลักษณ์ได้ อย่างไรก็ตาม, ขอแนะนำให้คุณใช้ธีมแบบกำหนดเองเพื่อเปลี่ยนตราสัญลักษณ์",
		admin_desktop_login_logo_url_hover: "ป้อน URL ของไฟล์ตราสัญลักษณ์ ถ้าตราสัญลักษณ์อยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เดียวกับเว็บไคลเอ็นต์ ให้ป้อน URL แบบสัมพันธ์ เช่น: /mycustomizations/login_logo.png<br><br>ตราสัญลักษณ์ไม่ควรมีขนาดกว้างกว่า 200 พิกเซลและสูง 150 พิกเซล<br><br>แนะนำให้ใช้ตราสัญลักษณ์ที่มีพื้นหลังโปร่งใส",
		admin_desktop_banner_logo: "ตราสัญลักษณ์แบนเนอร์:",
		admin_desktop_banner_logo_hover: "ถ้าคุณต้องการเปลี่ยนตราสัญลักษณ์ที่แสดงบนแบนเนอร์ คุณสามารถระบุ URL ของไฟล์ตราสัญลักษณ์ได้ อย่างไรก็ตาม, ขอแนะนำให้คุณใช้ธีมแบบกำหนดเองเพื่อเปลี่ยนตราสัญลักษณ์",
		admin_desktop_banner_logo_url_hover: "ป้อน URL ของไฟล์ตราสัญลักษณ์ ถ้าตราสัญลักษณ์อยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เดียวกับเว็บไคลเอ็นต์ ให้ป้อน URL แบบสัมพันธ์ เช่น: /mycustomizations/banner_logo.png<br><br>ตราสัญลักษณ์ไม่ควรมีขนาดกว้างกว่า 72 พิกเซลและสูง 36 พิกเซล<br><br>แนะนำให้ใช้ตราสัญลักษณ์ที่มีพื้นหลังโปร่งใส",
		admin_desktop_banner_background_color: "สีพื้นหลังของแบนเนอร์:",
		admin_desktop_banner_background_color_hover: "ถ้าคุณต้องการเปลี่ยนสีพื้นหลังของแบนเนอร์ คุณสามารถระบุสีเองได้ อย่างไรก็ตาม, ขอแนะนำให้คุณใช้ธีมแบบกำหนดเองเพื่อเปลี่ยนสีของแบนเนอร์",
		admin_desktop_banner_background_color_custom_hover: "ระบุสีของแบนเนอร์แอ็พพลิเคชันเป็นสีเลขฐานสิบหก",
		admin_desktop_banner_application_name_color: "สีข้อความของชื่อแอ็พพลิเคชัน:",
		admin_desktop_banner_application_name_color_hover: "ถ้าคุณต้องการเปลี่ยนสีของชื่อแอ็พพลิเคชัน คุณสามารถระบุสีเองได้ อย่างไรก็ตาม, ขอแนะนำให้คุณใช้ธีมแบบกำหนดเองเพื่อเปลี่ยนสีของชื่อแอ็พพลิเคชัน",
		admin_desktop_banner_application_name_color_custom_hover: "ระบุสีของชื่อแอ็พพลิเคชันเป็นสีเลขฐานสิบหก",
		admin_desktop_banner_menu_color: "สีไอคอนของแบนเนอร์:",
		admin_desktop_banner_menu_color_hover: "ถ้าคุณเปลี่ยนสีพื้นหลังของแบนเนอร์ คุณอาจต้องเปลี่ยนรูปแบบของสีของไอคอนในแบนเนอร์เพื่อให้สามารถเห็นได้ง่ายขึ้น ระบุว่าต้องการแสดงไอคอนแบนเนอร์ในเวอร์ชันที่สว่างหรือมืด<br><br>อย่างไรก็ตาม, ขอแนะนำให้คุณใช้ธีมแบบกำหนดเองเพื่อเปลี่ยนสีของไอคอน",
		admin_desktop_login_page_content: "เนื้อหาของหน้าล็อกอิน:",
		admin_desktop_login_page_content_hover: "ถ้าคุณต้องการแสดงข้อมูลเพิ่มเติมบนหน้าล็อกอิน เช่น การประกาศเกี่ยวกับ การปิดระบบ หรือที่ที่ผู้ใช้สามารถขอรับความช่วยเหลือเกี่ยวกับชื่อผู้ใช้และรหัสผ่าน คุณสามารถระบุ URL ของเนื้อหาที่คุณต้องการแสดงได้",
		admin_desktop_login_page_content_url_hover: "ป้อน URL ของเนื้อหาหน้าล็อกอิน ถ้าเนื้อหาอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เดียวกับเว็บไคลเอ็นต์ ให้ป้อน URL แบบสัมพันธ์ เช่น: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "กฏเกี่ยวกับรหัสผ่าน:",
		admin_desktop_password_rules_hover: "ถ้าคุณต้องการให้แนวทางเกี่ยวกับการสร้างรหัสผ่าน เช่น อักขระที่ถูกจำกัด หรือจำนวนขั้นต่ำของอักขระ คุณสามารถระบุ URL ของหน้าที่มีกฏเกี่ยวกับรหัสผ่านได้",
		admin_desktop_password_rules_url_hover: "ป้อน URL ของเนื้อหากฏสำหรับรหัสผ่าน ถ้าเนื้อหาอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เดียวกับเว็บไคลเอ็นต์ ให้ป้อน URL แบบสัมพันธ์ เช่น: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL วิธีใช้ของผู้ใช้:",
		admin_desktop_help_url_hover: "คุณสามารถใช้วิธีใช้ที่มาพร้อมกับ IBM Content Navigator หรือคุณสามารถเปลี่ยนทิศทางผู้ใช้ไปยังเนื้อหาวิธีใช้แบบกำหนดเองโดยทำหนึ่งในแอ็คชันต่อไปนี้:<br><br><ul><li>การนำทางไปยังระบบวิธีใช้แบบกำหนดเอง</li><li>การเพิ่มวิธีใช้ลงในอินสแตนซ์ของ IBM Knowledge Center ที่ถูกปรับใช้กับ IBM Content Navigator</li></ul>",
		admin_desktop_help_url_url_hover: "ป้อน URL ของระบบวิธีใช้ที่กำหนดเอง IBM Content Navigator ผนวก index.jsp?content=/com.ibm.usingeuc.doc/ และชื่อไฟล์ที่ท้ายของ URL ที่คุณระบุ  เพื่อให้ลิงก์ \"ศึกษาเพิ่มเติม\" ในส่วนติดต่อทำงานได้ ระบบวิธีใช้ต้องใช้ชื่อไฟล์เดียวกับวิธีใช้ของผู้ใช้ที่รวมอยู่ ",
		admin_desktop_deprecated_appearance_title: "ค่าติดตั้งที่ไม่มีค่า",
		admin_desktop_deprecated_appearance_instructions: "หากคุณใช้ธีมแบบกำหนดเอง ค่าติดตั้งเหล่านี้จะถูกแทนทับด้วยธีมแบบกำหนดเอง คุณควรโอนย้ายค่าติดตั้งเหล่านี้ไปยังธีมแบบกำหนดเอง ซึ่งจัดเตรียมลักษณะต่างๆ โดยรายละเอียดได้มากกว่าค่าติดตั้งในส่วนนี้ นอกจากนี้ ธีมแบบกำหนดเองยังสามารถใช้ได้โดยเดสก์ท็อปจำนวนมาก",

		admin_desktop_plugins_title: "เปิดใช้งาน หรือปิดใช้งานปลั๊กอินสำหรับเดสก์ท็อปนี้",
		admin_desktop_plugins_enable_all_plugins: "เปิดใช้งานปลั๊กอินที่ปรับใช้ทั้งหมดสำหรับใช้กับเดสก์ท็อปนี้",
		admin_desktop_plugins_select_plugins: "เลือกปลั๊กอินที่ปรับใช้เพื่อเปิดใช้งานกับเดสก์ท็อปนี้",
		admin_desktop_plugins_select_plugin: "เลือกปลั๊กอิน",

		admin_desktop_layout_features: "คุณลักษณะที่แสดง:",
		admin_desktop_layout_features_hover: "เลือกคุณลักษณะที่คุณต้องการให้ผู้ใช้เข้าถึงได้จากเดสก์ท็อปนี้ คุณลักษณะต่างๆ จะแสดงตามลำดับที่คุณลักษณะเหล่านั้นแสดงรายการไว้<br><br>เมื่อคุณเลือกคุณลักษณะ, คุณสามารถปรับแต่งลักษณะการทำงานบางอย่างของคุณลักษณะภายในเดสก์ท็อป, เช่น ที่เก็บดีฟอลต์ที่ถูกเลือกไว้สำหรับคุณลักษณะ",
		admin_desktop_layout_default_repository: "ที่เก็บดีฟอลต์:",
		admin_desktop_layout_default_repository_layout_hover: "ระบุที่เก็บที่เลือกไว้ตามค่าดีฟอลต์เมื่อผู้ใช้เปิดคุณลักษณะนี้",
		admin_desktop_layout_document_thumbnails: "รูปขนาดเล็กของเอกสาร:",
		admin_desktop_layout_document_thumbnails_hover: "ระบุว่าจะแสดงรูปขนาดเล็กสำหรับเอกสารในบานหน้าต่างข้อมูลเอกสารหรือไม่<br><br>การแสดงรูปขนาดเล็กสามารถทำให้ประสิทธิภาพของเว็บไคลเอ็นต์ช้าลงได้",
		admin_desktop_layout_show_filmstrip_view: "มุมมองแถบฟิลม์:",
		admin_desktop_layout_show_filmstrip_view_hover: "ระบุว่าจะอนุญาตให้ผู้ใช้สลับการแสดงรายการเนื้อหาเป็นมุมมองแถบฟิล์มหรือไม่<br><br>มุมมองแถบฟิล์มจะสร้างการแสดงตังอย่างของแต่ละเอกสารที่ผู้ใช้เลือก อย่างไรก็ตาม, การใช้ฟิลม์ภาพยนต์สามารถทำให้ประสิทธิภาพการทำงานของเว็บไคลเอ็นต์ช้าลง นอกจากนี้, คุณต้องกำหนดคอนฟิกวิวเวอร์การแปลง HTML เพื่อดูการแสดงตัวอย่างเอกสาร",
		admin_enabled: "เปิดใช้งาน",
		admin_disabled: "ปิดใช้งาน",
		admin_include: "รวม",
		admin_exclude: "ไม่รวม",
		admin_layout_teamspaces_default_repository: "Teamspace:",
		admin_layout_entry_templates_default_repository: "เท็มเพลตรายการ:",
		admin_layout_other_features_default_repository: "ค้นหาและเรียกดู:",
		admin_layout_work_default_repository: "งาน:",
		admin_layout_default_feature: "คุณลักษณะดีฟอลต์:",
		admin_default_category_placeholder: "เลือกคุณลักษณะ",
		admin_layout_default_feature_hover: "ระบุคุณลักษณะที่ต้องการแสดงเมื่อผู้ใช้ล็อกอินเข้าสู่เดสก์ท็อปนี้",
		admin_layout_default_feature_warning: "การเปลี่ยนคุณลักษณะดีฟอลต์อาจมีผลต่อเวลาที่จำเป็นต่อการโหลดแอ็พพลิเคชัน",
		admin_layout_feature_list_header: "คุณลักษณะ",
		admin_layout_show_statusbar: "แถบสถานะ:",
		admin_layout_show_statusbar_hover: "ระบุว่าให้แสดงแถบสถานะที่ด้านล่างของเดสก์ท็อป<br><br>หากคุณซ่อนแถบสถานะ, ผู้ใช้จะไม่สามารถมองเห็นข้อมูลเกี่ยวกับเหตุการณ์ที่ไม่ใช่ข้อผิดพลาด, เช่น:<ul><li>เพิ่มเอกสารไปยังที่เก็บแล้ว</li><li>การค้นหาส่งคืนเอกสาร 59 ฉบับ</li></ul>",
		admin_layout_show_magazineview: "มุมมองนิตยสาร:",
		admin_layout_show_magazineview_hover: "ระบุว่ายอมให้ผู้ใช้สลับรายการเนื้อหาที่แสดงไปเป็นมุมมองนิตยสาร<br><br>มุมมองนิตยสารเพิ่มความสูงของแต่ละรายการในรายการเนื้อหา, ซึ่งจะลดจำนวนไอเท็มที่สามารถแสดงอยู่ในรายการเนื้อหาได้ในเวลาเดียวกัน",
		admin_layout_show_detailsview: "มุมมองรายละเอียด:",
		admin_layout_show_detailsview_hover: "ระบุว่ายอมให้ผู้ใช้สลับรายการเนื้อหาที่แสดงไปเป็นมุมมองรายละเอียด<br><br>มุมมองรายละเอียดขยายจำนวนแถวที่จะมองเห็นได้ในรายชื่อเนื้อหา",
		admin_feature_config_docinfopane_label: "บานหน้าต่างข้อมูลเอกสาร:",
		admin_feature_config_docinfopane_hoverhelp: "ระบุว่าผู้ใช้สามารถเข้าถึงบานหน้าต่างข้อมูลเอกสารในคุณลักษณะนี้",
		admin_feature_config_docinfopane_default_label: "ลักษณะการทำงานดีฟอลต์:",
		admin_feature_config_docinfopane_expanded: "ขยายแล้ว",
		admin_feature_config_docinfopane_collapsed: "ยุบแล้ว",
		admin_feature_config_docinfopane_expand_on_select: "ขยายเมื่อเลือกไอเท็ม",
		admin_layout_features_title: "คุณลักษณะเดสก์ท็อป",
		admin_layout_features_instructions: "ระบุผู้ใช้คุณลักษณะที่สามารถเข้าถึงได้จากเดสก์ท็อปนี้  นอกจากนี้, คุณสามารถปรับแต่งลักษณะการทำงานของแต่ละคุณลักษณะที่ถูกรวมไว้ในเดสก์ท็อป",
		admin_layout_components_title: "คอมโพเนนต์เดสก์ท็อปเพิ่มเติม",
		admin_layout_components_instructions: "คุณสามารถปิดใช้งานคอมโพเนนต์บางตัวของเดสก์ท็อป หากคุณต้องการปรับปรุงอินเตอร์เฟสหรือหากคุณต้องการปรับปรุงประสิทธิภาพการทำงานของเว็บไคลเอ็นต์",
		admin_layout_featureconfig_instructions: "เลือกคุณลักษณะที่ต้องการกำหนดคอนฟิก",
		admin_layout_featureconfig_no_configuration: "ไม่มีคอนฟิกูเรชันคุณลักษณะที่พร้อมใช้งาน",
		admin_layout_featureconfig_label: "คอนฟิกูเรชันสำหรับคุณลักษณะ ${0}",
		admin_layout_featureconfig_title: "คอนฟิกูเรชันคุณลักษณะ",
		admin_layout_featureconfig_taskManagerURL: "เมื่อต้องการใช้คุณลักษณะนี้ คุณต้องเปิดใช้และกำหนดคอนฟิก IBM Content Navigator เพื่อเชื่อมต่อเซอร์วิสโปรแกรมจัดการงาน เปิดใช้เซอร์วิสโปรแกรมจัดการงานในส่วน <b>ค่าติดตั้ง</b> ของเครื่องมือการควบคุมดูแลนี้",
		admin_feature_config_show_my_checkouts_label: "บานหน้าต่าง เช็กเอาต์ของฉัน:",
		admin_feature_config_show_my_checkouts_hoverhelp: "บานหน้าต่าง My เช็กเอาต์ของฉัน ช่วยให้ผู้ใช้รันการค้นหาสำหรับไอเท็มทั้งหมดที่ถูกเช็คเอาต์บนที่เก็บเฉพาะ ระบุว่าผู้ใช้สามารถเข้าถึงบานหน้าต่าง เช็กเอาต์ของฉัน จากคุณลักษณะโฮมได้หรือไม่<br/><br/><b>ข้อจำกัด:</b> คุณลักษณะนี้คุณต้องมีอย่างน้อยหนึ่งที่เก็บ IBM Content Manager, IBM FileNet P8 หรือ OASIS CMIS ที่เชื่อมโยงกับเดสก์ท็อปนี้",

		admin_feature_config_default_repository_icon_text: "ที่เก็บดีฟอลต์",
		admin_show: "Show",
		admin_hide: "ซ่อน",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "คุณไม่สามารถลบคุณลักษณะการจัดการจาก Admin Desktop",
		admin_warning_label: "คำเตือน:",
		admin_layout_show_globaltoolbar: "แถบเครื่องมือโกลบอล:",
		admin_layout_show_globaltoolbar_hover: "ระบว่าให้แสดงแถบเครื่องมือในแบนเนอร์ที่ด้านบนสุดของเดสก์ท็อป<br><br>แถบเครื่องมือโกลบอลรวมแอ็คชันที่ช่วยให้ผู้ใช้เพิ่มเอกสาร, โฟลเดอร์, และพักไว้ในที่เก็บ แอ็คชันที่มีอยู่ขึ้นอยู่กับที่เก็บที่ผู้ใช้เชื่อมต่อ",
		admin_interface_text_name_label: "ชนิดเลเบล",

		admin_interface_text_label_description: "คุณสามารถกำหนดข้อความที่แสดงในพื้นที่หนึ่งๆ ของเว็บไคลเอ็นต์ได้เอง เลเบลจะถูกแสดงสำหรับที่เก็บและเดสก์ท็อปทั้งหมดในคอนฟิกูเรชันของคุณ ป้อนข้อความที่คุณต้องการเห็นในอินเตอร์เฟสในฟิลด์เลเบลปัจจุบัน<br><br><b>สิ่งสำคัญ:</b> การเปลี่ยนแปลงใดๆ ที่คุณทำกับเลเบลจะไม่แสดงในเครื่องมือการจัดการ",
		admin_interface_text_label_action: "เลเบลแอ็คชัน",
		admin_interface_text_label_action_description: "เลเบลแอ็คชันจะถูกแสดงบนปุ่มและในเมนูตลอดทั้งเว็บไคลเอ็นต์ คุณสามารถกำหนดเลเบลแอ็คชันที่ต่างกันสำหรับแต่ละชนิดของที่เก็บ",
		admin_interface_text_label_application: "เลเบลแอ็พพลิเคชัน",
		admin_interface_text_label_application_description: "เลเบลแอ็พพลิเคชันจะถูกแสดงตลอดทั้งเว็บไคลเอ็นต์",
		admin_interface_text_label_system: "เลเบลคุณสมบัติระบบ",
		admin_interface_text_label_system_description: "คุณสมบัติระบบที่ถูกแสดงจะแตกต่างกันตามที่เก็บ คุณสามารถกำหนดเลเบลที่แสดงสำหรับคุณสมบัติระบบที่เชื่อมโยงกับเอกสารและโฟลเดอร์ในที่เก็บของคุณได้เอง",
		admin_interface_text_label_desktop: "เลเบลเดสก์ท็อป",
		admin_interface_text_label_desktop_description: "ถ้าคุณกำหนดชื่อของแอ็พพลิเคชันในเดสก์ท็อปเอง คุณสามารถกำหนดชื่อนั้นในภาษาอื่นที่ไม่ใช่ภาษาอังกฤษ คุณยังสามารถกำหนดชื่อของพื้นที่แอ็พพลิเคชัน IBM FileNet P8 ในเดสก์ท็อปได้เอง",

		admin_interface_text_system_label: "เลเบลระบบ",
		admin_interface_text_current_label: "เลเบลปัจจุบัน",
		admin_interface_text_default_label_heading: "เลเบลดีฟอลต์",
		admin_interface_text_default_label: "เลเบลดีฟอลต์:",
		admin_interface_text_displayed_in_label: "แสดงสำหรับ",
		admin_interface_text_displayed_in_document_folder: "เอกสารและโฟลเดอร์",
		admin_interface_text_displayed_in_document: "เอกสาร",
		admin_interface_text_displayed_in_folder: "โฟลเดอร์",
		admin_interface_text_displayed_in_admin_application_space: "เลเบลพื้นที่แอ็พพลิเคชัน",
		admin_interface_text_displayed_in_desktop: "เลเบลคุณลักษณะสำหรับมือถือ",
		admin_interface_text_displayed_in_admin_application_name: "ชื่อแอ็พพลิเคชัน",

		admin_new_desktop: "เดสก์ท็อปใหม่",
		admin_new_repository: "ที่เก็บใหม่",
		admin_new_menu: "เมนูใหม่",
		admin_new_viewer_mapping: "สร้างการแม็พวิวเวอร์ใหม่",
		admin_new_mapping_label: "การแม็พใหม่",
		admin_new_icon_mapping: "การแม็พไอคอนใหม่",
		admin_viewer_mapping_list_instructions: "คุณสามารถกำหนดคอนฟิกวิวเวอร์ที่เว็บไคลเอ็นต์ใช้เพื่อแสดงชนิดของเนื้อหาที่ต่างกัน วิวเวอร์แม็พจะกำหนดชนิด MIME ที่เชื่อมโยงกับแต่ละวิวเวอร์ที่คุณต้องการใช้ คุณสามารถสร้างหลายวิวเวอร์แม็พ ถ้าคุณต้องการใช้วิวเวอร์ที่ต่างกันสำหรับเดสก์ท็อปที่ต่างกัน",
		admin_viewer_mapping_instructions: "ระบุวิวเวอร์ที่คุณต้องการใช้เพื่อเปิดไฟล์ ถ้าคุณต้องการใช้วิวเวอร์ที่กำหนดเอง คุณต้องรวมวิวเวอร์เป็นปลั๊กอินก่อนที่คุณจะสามารถเพิ่มวิวเวอร์เข้ากับวิวเวอร์แม็พ<br><br><b>ข้อสำคัญ:</b> เมื่อผู้ใช้เปิดเอกสาร เว็บไคลเอ็นต์จะค้นหารายการของการแม็พวิวเวอร์ เพื่อค้นหาวิวเวอร์แรกที่สามารถเปิดเอกสารได้ตามระบบปฎิบัติการที่ผู้ใช้กำลังรัน และที่เก็บที่ผู้ใช้ถูกเชื่อมต่อ <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "ปลั๊กอินใหม่",
		admin_menu_list_instructions: "คุณสามารถสร้างแถบเครื่องมือและเมนูบริบทที่กำหนดเองเพื่อควบคุมแอ็คชันที่จะพร้อมใช้งานสำหรับผู้ใช้ คุณไม่สามารถแก้ไขเมนูดีฟอลต์ได้ แต่คุณสามารถสร้างสำเนาของเมนูที่มีอยู่เพื่อจำกัดแอ็คชันที่จะพร้อมใช้งานหรือเพื่อเพิ่มแอ็คชันที่กำหนดเองที่กำหนดไว้ในปลั๊กอิน<br><br>ถ้าคุณต้องการสร้างเมนูชนิดใหม่ คุณต้องกำหนดเมนูในปลั๊กอิน",
		admin_menu_id_hover: "ID ต้องไม่ซ้ำกัน และคุณไม่สามารถเปลี่ยน ID ได้หลังจากบันทึกเมนูแล้ว<br><br>ID สามารถประกอบด้วยอักขระตัวอักษรและตัวเลขเท่านั้นและเป็นแบบคำนึงถึงชนิดตัวพิมพ์เล็กหรือใหญ่",
		admin_menu_id_disabled_hover: "ID ของเมนูไม่สามารถเปลี่ยนแปลงได้ ถ้าคุณต้องการใช้ ID อื่น คุณต้องสร้างเมนูใหม่",
		admin_menu_default_instructions: "คุณไม่สามารถแก้ไขเมนูนี้ได้ เนื่องจากนี่เป็นเมนูดีฟอลต์ ถ้าคุณต้องการแก้ไขเมนูนี้ คุณต้องสร้างสำเนาของเมนู",
		admin_menu_toolbar_instructions: "คุณสามารถจำกัดแอ็คชันที่พร้อมใช้งานสำหรับแถบเครื่องมือนี้ หรือคุณสามารถเพิ่มแอ็คชันที่กำหนดเองที่กำหนดไว้ในปลั๊กอิน คุณยังสามารถจัดหมวดหมู่แอ็คชันโดยการเพิ่มตัวคั่นเข้ากับแถบเครื่องมือ",
		admin_menu_toolbar_custom_instructions: "แถบเครื่องมือนี้ถูกกำหนดโดยปลั๊กอิน ถ้าคุณต้องการแก้ไขแถบเครื่องมือนี้ คุณต้องอัพเดตปลั๊กอินหรือสร้างสำเนาของแถบเครื่องมือ",
		admin_menu_context_menu_instructions: "คุณสามารถจำกัดแอ็คชันที่พร้อมใช้งานสำหรับเมนูบริบท หรือคุณสามารถเพิ่มแอ็คชันที่กำหนดเองที่กำหนดไว้ในปลั๊กอิน คุณยังสามารถจัดหมวดหมู่แอ็คชันโดยการเพิ่มตัวคั่นและเมนูย่อยเข้ากับเมนูบริบท",
		admin_menu_context_menu_custom_instructions: "เมนูบริบทนี้ถูกกำหนดโดยปลั๊กอิน ถ้าคุณต้องการแก้ไขเมนูบริบทนี้ คุณต้องอัพเดตปลั๊กอินหรือสร้างสำเนาของเมนูบริบท",
		admin_desktop_list_instructions: "คุณสามารถสร้างหลายเดสก์ท็อปเพื่อให้สิทธิ์สำหรับผู้ใช้ที่ต่างกันเพื่อเข้าถึงเนื้อหาที่ผู้ใช้ตั้งการ ตัวอย่างเช่น คุณสามารถสร้างเดสก์ท็อปที่อนุญาตให้ผู้ใช้ค้นหาเนื้อหาหรือเดสก์ท็อปที่ให้สิทธิ์ผู้ใช้เพื่อเข้าถึงที่เก็บเดียวเท่านั้น ",
		admin_plugin_updated: "คอนฟิกูเรชันของปลั๊กอินที่เลือกมีการเปลี่ยนแปลง คุณต้องรีเฟรชเบราว์เซอร์ของคุณเพื่อให้การเปลี่ยนแปลงของคุณมีผล",
		admin_repository_ci_heading: "ที่เก็บตัวรวมเนื้อหา: <b>${0}</b>",
		admin_repository_p8_heading: "ที่เก็บโปรแกรมจัดการเนื้อหา FileNet: <b>${0}</b>",
		admin_repository_cm_heading: "ที่เก็บโปรแกรมจัดการเนื้อหา: <b>${0}</b>",
		admin_repository_od_heading: "ที่เก็บ Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "ที่เก็บ Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "ที่เก็บกล่อง: <b>${0}</b>",
		admin_repository_generic_heading: "ที่เก็บ: <b>${0}</b>",

		admin_delete_confirmation_desktops: "คุณต้องการลบเดสก์ท็อปที่เลือกหรือไม่?\n${0} มีการเลือกเดสก์ท็อป",
		admin_delete_confirmation_menus: "คุณต้องการลบเมนูที่เลือกหรือไม่?\n${0} มีการเลือกเมนู",
		admin_delete_confirmation_repositories: "คุณต้องการลบที่เก็บที่เลือกหรือไม่?\n${0} มีการเลือกที่เก็บ",
		admin_delete_confirmation_viewer_mappings: "คุณแน่ใจว่าต้องการลบวิวเวอร์แม็พที่เลือก?  ${0} แม็พถูกเลือก",
		admin_delete_confirmation_icon_mappings: "คุณต้องการลบคอนฟิกูเรชันไอคอนที่เลือกหรือไม่?\n${0} มีการเลือกคอนฟิกูเรชันไอคอน",
		admin_delete_confirmation_plugins: "คุณต้องการลบปลั๊กอินที่เลือกหรือไม่?\n${0} มีการเลือกปลั๊กอิน",
		admin_delete_confirmation: "คุณต้องการลบไอเท็มที่เลือกหรือไม่?\n${0} มีการเลือกไอเท็ม",

		admin_viewer_mapping_id_hover: "ID ต้องไม่ซ้ำกัน และคุณไม่สามารถเปลี่ยน ID ได้หลังจากบันทึกการแม็พวิวเวอร์<br><br>ID สามารถประกอบด้วยอักขระตัวอักษรและตัวเลขเท่านั้นและเป็นแบบคำนึงถึงชนิดตัวพิมพ์เล็กหรือใหญ่",
		admin_viewer_mapping_id_disabled_hover: "ID ของวิวเวอร์แม็พไม่สามารถเปลี่ยนแปลงได้ ถ้าคุณต้องการใช้ ID อื่น คุณต้องสร้างวิวเวอร์แม็พใหม่",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "ไม่สามารถลบเดสก์ท็อปดีฟอลต์",

		admin_desktop_heading: "เดสก์ท็อป: <b>${0}</b>",
		admin_menu_toolbar_heading: "แถบเครื่องมือ: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "แถบเครื่องมือที่กำหนดเอง: <b>${0}</b>",
		admin_menu_context_menu_heading: "เมนูบริบท: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "เมนูบริบทที่กำหนดเอง: <b>${0}</b>",
		admin_plugin_heading: "ปลั๊กอิน: <b>${0}</b>",
		admin_plugin_instructions: "ปลั๊กอินสามารถเป็นไฟล์ JAR หรือไฟล์คลาสที่คอมไพล์แล้ว<br/><br/><b>สิ่งสำคัญ:</b> IBM Content Navigator เว็บแอ็พพลิเคชันเซิร์ฟเวอร์ต้องสามารถเข้าถึงไฟล์ปลั๊กอินบนระบบไฟล์โลคัลหรือผ่าน URL",
		admin_plugin_list_instructions: "คุณต้องใช้เครื่องมือการจัดการเพื่อลงทะเบียนปลั๊กอินสำหรับเว็บไคลเอ็นต์ ถ้าปลั๊กอินต้องการคอนฟิกูเรชันเพิ่มเติม คอนฟิกูเรชันพารามิเตอร์จะถูกแสดงหลังจากที่คุณลงทะเบียนปลั๊กอิน<br /><br /><b>สิ่งสำคัญ:</b> ถ้าคุณแก้ไขปลั๊กอินที่อ้างถึงพื้นที่อื่นของเครื่องมือการจัดการ เช่น เมนู คุณอาจพบปัญหากับลักษณะการทำงานของปลั๊กอิน นอกจากนี้ ปลั๊กอินถูกเรียกตามลำดับที่ถูกแสดง ถ้ามีปลั๊กอินจำเป็นต้องถูกรันก่อนปลั๊กอินอื่น ให้ตรวจสอบว่าปลั๊กอินถูกแสดงตามลำดับ ที่ต้องถูกรัน",
		admin_plugin_cannot_delete: "ปลั๊กอินที่เลือกไม่สามารถลบออกได้เนื่องจากมีปลั๊กอินเชื่อมโยงกันอยู่<br/>ปลั๊กอินที่เลือก: ${0}<br/>ปลั๊กอินที่เชื่อมโยง: ${1}",
		admin_plugin_cannot_disable: "ปลั๊กอินที่เลือกไม่สามารถถูกปิดใช้งานได้เนื่องจากมีปลั๊กอินเชื่อมโยงกันอยู่<br/>ปลั๊กอินที่เลือก: ${0}<br/>ปลั๊กอินที่เชื่อมโยง: ${1}",
		admin_plugin_cannot_add: "ไม่สามารถเพิ่มปลั๊กอินได้เนื่องจากบางปลั๊กอินที่ปลั๊กอินนี้พึ่งพาหายไป หรือถูกปิดใช้งาน ปลั๊กอินหายไปหรือถูกปิดใช้งาน: ${0}",
		admin_plugin_cannot_enable: "ไม่สามารถเปิดใช้งานปลั๊กอินที่เลือกเนื่องจากบางปลักอินที่ปลั๊กอินเหล่านี้พึ่งพาหายไปหรือถูกปิดใช้งาน<br/>ปลั๊กอินที่เลือก: ${0}<br/>ปลั๊กอินหายไป หรือถูกปิดใช้งาน: ${1}",
		admin_plugin_save_order: "ลำดับการบันทึก",
		admin_plugin_load: "โหลด",
		admin_plugin_load_hover: "ระบุ URL ของปลั๊กอิน",
		admin_plugin_file_hover: "หากไฟล์ JAR ปลั๊กอินอยู่บนระบบไฟล์โลคัล คุณสามารถป้อนพาธหรือ URL แบบเต็มของไฟล์ปลั๊กอิน หากไฟล์ JAR ปลั๊กอินอยู่บนรีโมตเซิร์ฟเวอร์ คุณต้องป้อน URL ของไฟล์ปลั๊กอิน",
		admin_plugin_classfolderpath_hover: "ไฟล์คลาสที่คอมไพล์แล้วต้องอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ IBM Content Navigator<br/><br/>ป้อนพาธแบบเต็มของโฟลเดอร์ที่คลาสปลั๊กอินถูกคอมไพล์และสร้างขึ้น<br/><br/>พาธต้องไม่มีชื่อแพ็กเกจของคลาสปลั๊กอิน ตัวอย่างเช่น พาธดีฟอลต์สำหรับคลาสปลั๊กอินตัวอย่างบน Windows คือ C:\\Program Files (x86)\\IBM\\ECMClient\\bin",
		admin_plugin_classfoldername_hover: "ป้อนชื่อที่สมบูรณ์ของคลาส Java ภายในไฟล์คลาสที่ควรถูกโหลด และเรียกใช้เป็นคลาสปลั๊กอิน<br/>ตัวอย่างเช่น ชื่อคลาสสำหรับปลั๊กอินตัวอย่างคือ com.ibm.ecm.extension.sample<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "ไม่พบไฟล์ JAR ปลั๊กอินที่ URL ที่ระบุ ต้องแน่ใจว่าไฟล์ JAR อยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์และ URL และชื่อไฟล์ถูกต้อง",
		admin_plugin_for_repository_not_loaded: "ไม่สามารถแก้ไขที่เก็บนี้ได้ ปลั๊กอินที่นิยามและสนับสนุนที่เก็บชนิดนี้ไม่ได้ถูกโหลดไว้ บนแท็บ ปลั๊กอิน, ให้แก้ไขปลั๊กอินเพื่อตรวจสอบว่าถูกตั้งค่าไว้อย่างถูกต้องและถูกโหลดแล้ว",
		admin_plugin_repository_types: "ชนิดของที่เก็บ:",
		admin_plugin_viewers: "วิวเวอร์:",
		admin_plugin_features: "คุณลักษณะ:",
		admin_plugin_layouts: "โครงร่าง:",
		admin_plugin_not_available: "ไม่มีอยู่",
		admin_plugin_config_params: "พารามิเตอร์การกำหนดค่า:",
		admin_viewer_def_heading: "การแม็พวิวเวอร์: <b>${0}</b>",
		admin_users_and_groups: "ผู้ใช้และกลุ่ม",
		admin_general: "General",
		admin_logging: "การบันทึก",
		admin_authentication: "การพิสูจน์ตัวตน",		
		admin_rolebase_role: "บทบาท:",
		admin_settings_logging_instructions: "คุณสามารถใช้การบันทึกการทำงานเพื่อแก้ไขปัญหากับเว็บไคลเอ็นต์ คุณสามารถกรองการจดบันทึกของคุณหากคุณทราบว่า ปัญหาเกิดขึ้นภายในคลาส Java ที่ระบุเฉพาะหรือสำหรับผู้ใช้เฉพาะ ข้อมูลข้อผิดพลาดจะถูกเขียนไปยังล็อกไฟล์ข้อผิดพลาดของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		admin_settings_logging_instructions2: "<b>ค่าติดตั้งบันทึกการทำงานสำหรับการดีบัก</b><br />ถ้าคุณทราบว่าปัญหาเกิดขึ้นสำหรับเครื่องโฮสต์ของไคลเอ็นต์หรือผู้ใช้ที่เฉพาะเจาะจง คุณสามารถกำหนดเป้าหมายบันทึกการทำงานเพื่อการดีบักของคุณสำหรับเครื่องหรือผู้ใช้นั้น คุณสามารถดักจับข้อมูลการดีบักในสภาวะแวดล้อมที่ใช้งานจริงโดยไม่มีผลกระทบกับประสิทธิภาพของระบบของคุณมากนัก<br /><br /><b>สิ่งสำคัญ:</b> ถ้าคุณระบุเครื่องโฮสต์ของไคลเอ็นต์หรือผู้ใช้ ค่าติดตั้งนี้จะลบล้างค่าติดตั้งบันทึกการทำงานอื่น หลังจากที่คุณดักจับข้อมูลที่คุณต้องการแล้ว ให้ตั้งอ็อพชันนี้เป็น <b>None</b> เพื่อเรียกคืนการบันทึกการทำงานมาตรฐานสำหรับสภาวะแวดล้อมของคุณ",
		admin_settings_export_config_hover: "เอ็กซ์พอร์ตข้อมูลคอนฟิกูเรชันระบบปัจจุบันไปยังไฟล์เพื่อใช้กับ IBM Support Assistant Data Collector ไฟล์มีการบันทึกไว้ที่ตำแหน่งซึ่งกำหนดโดยคุณสมบัติระบบ user.home Java",
		admin_logging_level: "การบันทึกการทำงานระดับแอ็พพลิเคชัน:",
		admin_logging_level_hover: "ระดับของบันทึกการทำงานจะมีผลกับข้อมูลที่เก็บไว้บนเซิร์ฟเวอร์ของคุณ การเลือก <b>ข้อผิดพลาด</b> จะดักจับข้อมูลบันทึกการทำงานจำนวนน้อยที่สุด การเลือก <b>ดีบัก</b> จะดักจับข้อมูลมากที่สุด<br /><br />ห้ามระบุ <b>ดีบัก</b> ใน สภาวะแวดล้อมที่ใช้งานจริงยกเว้นคุณได้รับคำแนะนำโดย IBM Software Support",
		admin_logging_level_0: "ไม่มีการบันทึก",
		admin_logging_level_1: "ข้อผิดพลาด",
		admin_logging_level_2: "เตือน",
		admin_logging_level_3: "แจ้งให้ทราบ",
		admin_logging_level_4: "ดีบัก",
		admin_logging_classes: "การจดบันทึกระดับคลาส Java:",
		admin_logging_classes_hover: "ตามค่าดีฟอลต์แล้ว, คลาส Java และแพ็กเกจทั้งหมดถูกรวมไว้ในบันทึกข้อผิดพลาดของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ อย่างไรก็ตาม, คุณสามารถระบุคลาสหรือแพ็กเกจที่รวมหรือแยกออกจากการจดบันทึกของคุณ คุณสามารถใช้บันทึกข้อผิดพลาดของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เพื่อกำหนดว่าคลาสใดจะถูกรวมหรือแยกออก<br><br>ถ้าคุณทราบว่าปัญหาเกิดขึ้นในคลาสที่เฉพาะเจาะจง คุณสามารถรวมคลาสนั้นในล็อกไฟล์ได้ เมื่อคุณรวมคลาสในบันทึกข้อผิดพลาดของคุณ คลาสอื่นทั้งหมดจะถูกแยกออกจากล็อกไฟล์<br><br>ถ้าคุณทราบว่าปัญหาไม่ได้เกิดขึ้นในคลาสและคุณต้องการลดขนาดของล็อกไฟล์ คุณสามารถแยกคลาสนั้นออกจากล็อกไฟล์ได้",
		admin_logging_classes_include: "รวม",
		admin_logging_classes_include_all: "คลาสทั้งหมด",
		admin_logging_classes_include_specified: "คลาสเฉพาะเจาะจง",
		admin_logging_classes_include_specified_msg: "ระบุว่าคลาสใดที่ต้องการรวม",
		admin_logging_classes_exclude: "ไม่รวม",
		admin_logging_classes_exclude_none: "ไม่ได้กำหนด",
		admin_logging_classes_exclude_specified: "คลาสเฉพาะเจาะจง",
		admin_logging_classes_exclude_specified_msg: "ระบุว่าคลาสใดที่ต้องการแยกออก",
		admin_logging_debug: "บันทึกการดีบักสำหรับ:",
		admin_logging_debug_hover: "<b>สิ่งสำคัญ:</b> ตรวจทานล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ก่อนที่คุณจะระบุ IP แอดเดรสของเครื่องหรือผู้ใช้ไคลเอ็นต์โฮสต์ ค่าที่คุณป้อนต้องตรงกับค่าที่แสดงในล็อกไฟล์",
		admin_logging_debug_none: "ไม่มี (ดีฟอลต์)",
		admin_logging_debug_host: "เครื่องไคลเอ็นต์โฮสต์ (IP แอดเดรส)",
		admin_logging_debug_host_msg: "ระบุ IP แอดเดรสของเครื่องไคลเอ็นต์หนึ่งเครื่องหรือมากกว่าที่คุณต้องการบันทึกข้อมูลสำหรับการดีบัก ใช้เครื่องหมายคอมมาเพื่อคั่น IP แอดเดรส<br /><br /><b>สิ่งสำคัญ:</b> ตรวจสอบล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ก่อนที่คุณจะระบุ IP แอดเดรส ค่าที่คุณป้อนต้องตรงกับค่าที่แสดงในล็อกไฟล์",
		admin_logging_debug_user: "ผู้ใช้",
		admin_logging_debug_user_msg: "ระบุชื่อผู้ใช้ของผู้ใช้หนึ่งคนหรือมากกว่าที่คุณต้องการบันทึกข้อมูลสำหรับการดีบัก ใช้เครื่องหมายคอมมาเพื่อคั่นชื่อผู้ใช้<br /><br /><b>สิ่งสำคัญ:</b> ตรวจสอบล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ก่อนที่คุณจะระบุชื่อผู้ใช้ ค่าที่คุณป้อนต้องตรงกับค่าที่แสดงในล็อกไฟล์",

		admin_office_settings_logging_instructions: "คุณสามารถใช้การจดบันทึกเพื่อแก้ปัญหากับ IBM Content Navigator สำหรับ Microsoft Office คุณสามารถปรับแต่งบันทึกการทำงานของคุณได้ ถ้าคุณทราบว่าปัญหาเกิดขึ้นภายในคลาสที่เฉพาะเจาะจงหรือสำหรับผู้ใช้นั้นๆ ข้อมูลแสดงข้อผิดพลาดถูกเขียนไปยังล็อกไฟล์ของแอ็พพลิเคชันบน IBM Content Navigator สำหรับเครื่องไคลเอ็นต์โฮสต์ Microsoft Office ",
		admin_office_settings_logging_instructions2: "<b>ค่าติดตั้งบันทึกการทำงานสำหรับการดีบัก</b><br />หากคุณทราบว่าปัญหาเกิดขึ้นสำหรับเครื่องไคลเอ็นต์โฮสต์ที่ระบุเฉพาะหรือ IBM Content Navigator สำหรับผู้ใช้ Microsoft Office, คุณสามารถกำหนดเป้าหมายการจดบันทึกการดีบักไปยังเครื่องหรือผู้ใช้นั้น คุณสามารถดักจับข้อมูลการดีบักในสภาวะแวดล้อมที่ใช้งานจริงโดยไม่มีผลกระทบกับประสิทธิภาพของระบบของคุณมากนัก <br /><br /><b>สิ่งสำคัญ:</b> ถ้าคุณระบุเครื่องโฮสต์ของไคลเอ็นต์หรือผู้ใช้ ค่าติดตั้งนี้จะลบล้างค่าติดตั้งบันทึกการทำงานอื่น หลังจากที่คุณดักจับข้อมูลที่คุณต้องการ, ให้ตั้งค่าอ็อพชันนี้เป็น  <b>ไม่มี</b> เพื่อกลับสู่การจดบันทึกมาตรฐานสำหรับสภาวะแวดล้อม IBM Content Navigator สำหรับ Microsoft Office ของคุณ ",
		admin_office_logging_debug_hover: "<b>สิ่งสำคัญ:</b> ตรวจทานล็อกไฟล์ของเครื่องไคลเอ็นต์ก่อนที่คุณจะระบุ IP แอดเดรสของเครื่องไคลเอ็นต์โฮสต์หรือผู้ใช้ ค่าที่คุณป้อนต้องตรงกับค่าที่แสดงในล็อกไฟล์ ",
		admin_office_logging: "การจดบันทึก Office",
		admin_office_logging_classes: "การบันทึกระดับคลาส:",
		admin_office_logging_classes_hover: "ตามค่าดีฟอลต์แล้ว, คลาสและแพ็กเกจทั้งหมดถูกรวมไว้ในบันทึกข้อผิดพลาดของ IBM Content Navigator สำหรับ Microsoft Office อย่างไรก็ตาม, คุณสามารถระบุคลาสหรือแพ็กเกจที่รวมหรือแยกออกจากการจดบันทึกของคุณ คุณสามารถใช้ล็อกเครื่องไคลเอ็นต์เพื่อกำหนดคลาสที่ต้องการรวมหรือแยกออก<br /><br />ถ้าคุณทราบว่าปัญหาเกิดขึ้นในคลาสที่เฉพาะเจาะจง คุณสามารถรวมคลาสนั้นในล็อกไฟล์ได้ เมื่อคุณรวมคลาสในบันทึกข้อผิดพลาดของคุณแล้ว, คลาสอื่นๆ ทั้งหมดจะถูกแยกออกจากล็อกไฟล์ <br /><br />ถ้าคุณทราบว่าปัญหาไม่ได้เกิดขึ้นในคลาสและคุณต้องการลดขนาดของล็อกไฟล์ คุณสามารถแยกคลาสนั้นออกจากล็อกไฟล์ได้ ",
		admin_office_logging_debug_hover: "<b>สิ่งสำคัญ:</b> ตรวจทานล็อกไฟล์ของเครื่องไคลเอ็นต์ก่อนที่คุณจะระบุ IP แอดเดรสของเครื่องไคลเอ็นต์โฮสต์หรือผู้ใช้ ค่าที่คุณป้อนต้องตรงกับค่าที่แสดงในล็อกไฟล์",
		admin_office_logging_additional_settings: "ค่าติดตั้งเพิ่มเติม:",
		admin_office_logging_additional_settings_hover: "ระบุค่าติดตั้งเพิ่มเติม",
		admin_office_logging_file_size: "ขนาดล็อกไฟล์",
		admin_office_logging_file_size_hover: "ระบุขนาดที่ IBM Content Navigator สำหรับ Microsoft Office สร้างล็อกไฟล์ใหม่ เมื่อล็อกไฟล์เข้าถึงขนาดสูงสุดแล้ว, ล็อกปัจจุบันจะถูกเปลี่ยนชื่อเพื่อรวมวันที่ (ด้วยรูปแบบ YYYYMMdd) และหมายเลขไฟล์ที่เพิ่มขึ้น (ตัวอย่างเช่น, ICNExcelAddin-20121116-5.log) และล็อกไฟล์ใหม่จะถูกสร้างขึ้น ",
		admin_office_logging_show_stacktrace_on_dialogs: "แสดงการติดตามแบบสแต็กบนไดอะล็อก",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "คุณสามารถแสดงข้อมูลการติดตามสแต็กบนไดอะล็อกข้อความเพื่ออำนวยความสะดวกในการแก้ปัญหา แม้ว่าคุณไม่ได้เปิดใช้งานอ็อพชันนี้, ข้อมูลการติดตามสแต็กจะถูกรวมไว้ในบันทึกข้อผิดพลาดของ IBM Content Navigator สำหรับ Microsoft Office เสมอ ",

		admin_icon_state_twisty: "ไอคอนสถานะ",
		admin_icon_state_icon: "ไอคอนสถานะ",
		admin_icon_state: "ภาวะ",
		state_contains_label: "สถานะประกอบด้วย",
		admin_icon_state_instructions: "คุณสามารถกำหนดไอคอนที่แสดงข้างเอกสาร โฟลเดอร์ หรือไอเท็มงานบนที่เก็บของคุณได้เอง<br><br><b>เคล็ดลับ:</b> คุณสามารถระบุว่าจะแสดงไอคอนสถานะสำหรับแต่ละที่เก็บในสภาวะแวดล้อมของคุณหรือไม่",
		admin_icon_state_dialog_title: "การแม็พไอคอนสถานะ",
		admin_icon_state_dialog_instructions: "คุณสามารถแม็พสถานะที่เลือกกับไอคอนที่กำหนดไว้ล่วงหน้าที่จัดเตรียมไว้กับเว็บไคลเอ็นต์หรือกับไอคอนที่กำหนดเอง",

		admin_icon_mapping_twisty: "ไอคอนชนิด MIME",
		admin_icon_mapping_dialog_title: "การแม็พไอคอน",
		admin_icon_mapping: "การแม็พไอคอน",
		admin_icon_mapping_instructions: "คุณสามารถแม็พรายการของชนิด MIME กับไอคอนที่กำหนดไว้ล่วงหน้าที่จัดเตรียมมาพร้อมกับเว็บไคลเอ็นต์หรือกับไอคอนที่กำหนดเอง",
		admin_icon_mapping_list_instructions: "คุณสามารถกำหนดไอคอนที่ถูกแสดงสำหรับชนิด MIME ที่ต่างกันที่เก็บไว่บนที่เก็บของคุณได้เอง เว็บไคลเอ็นต์ใช้ไอคอนตามลำดับที่ไอคอนถูกแสดงรายการ ถ้าชนิด MIME ถูกแสดงรายการมากกว่าหนึ่งครั้ง ไอคอนแรกที่เชื่อมโยงกับชนิด MIME ดังกล่าวจะถูกใช้",
		admin_icon_mapping_icon_label: "คุณต้องการใช้ไอคอนใด?",
		admin_icon_mapping_file_name: "ไอคอนที่กำหนดเอง:",
		admin_icon_mapping_file_name_heading: "ไอคอนที่กำหนดเอง",
		admin_icon_mapping_file_name_placeholder: "ระบุ URL ของไอคอน",
		admin_icon_mapping_file_name_hover: "ป้อน URL ของไอคอน ถ้าไอคอนอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์เดียวกับเว็บไคลเอ็นต์ ให้ป้อน URL แบบสัมพันธ์ ตัวอย่างเช่น: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "ไอคอนที่กำหนดไว้ล่วงหน้า:",
		admin_icon_mapping_class_name_heading: "ไอคอนที่กำหนดไว้ล่วงหน้า",
		admin_icon_mapping_class_name_hover: "เลือกไอคอนที่จัดเตรียมไว้กับเว็บไคลเอ็นต์",
		admin_icon_mapping_class_name_placeholder: "เลือกไอคอน",

		admin_p8_instructions: "ข้อมูลนี้ถูกแบ่งใช้โดยที่เก็บ FileNet Content Manager ทั้งหมดที่กำหนดคอนฟิกไว้สำหรับเว็บไคลเอ็นต์",
		admin_p8_collaboration_config: "คอนฟิกูเรชันเซอร์วิสการทำงานร่วมกันกับ FileNet เผื่อเลือก",
		admin_p8_collaboration_config_instructions: "คุณสามารถกำหนดพารามิเตอร์เหล่านี้หากคุณต้องการปรับเซอร์วิสการทำงานร่วมกันกับ FileNet สำหรับสภาวะแวดล้อม IBM FileNet P8 ของคุณ",
		admin_p8_use_url_incoming: "ใช้ URL บนคำร้องขอขาเข้าเพื่อสร้าง URL การตอบกลับ:",
		admin_p8_use_url_incoming_hover: "ในสภาวะแวดล้อมเซอร์วิสการทำงานร่วมกันกับ FileNet โดยส่วนใหญ่, คุณสามารถใช้ URL ของคำร้องขอขาเข้าเพื่อสร้าง URL ในการตอบกลับ เลือก <b>ใช่</b> ยกเว้นว่าหนึ่งในสถานการณ์ต่อไปนี้ใช้กับสภาวะแวดล้อมของคุณ:<ul><li>คุณต้องการบังคับใช้ไคลเอ็นต์แอ็พพลิเคชันเพื่อเข้าถึงเซอร์วิสการทำงานร่วมกันกับ FileNet ผ่าน URL ที่ระบุเฉพาะ<li>ค่าติดตั้งพร็อกซีเซิร์ฟเวอร์ของคุณอาจเป็นสาเหตุให้เซอร์วิสการทำงานร่วมกันกับ FileNet สร้าง URL ที่ไม่ถูกต้อง</ul>",

		admin_p8_use_url_incoming_http: "URL เซอร์วิสการทำงานร่วมกันกับ FileNet:",
		admin_p8_use_url_incoming_http_hover: "ระบุ URL ที่ไคลเอ็นต์แอ็พพลิเคชันสามารถเข้าถึงเซอร์วิสการทำงานร่วมกันกับ FileNet ด้วยรูปแบบ http://FNCSserver:port_number",
		admin_p8_use_url_incoming_https: "HTTPS URL เซอร์วิสการทำงานร่วมกันกับ FileNet:",
		admin_p8_use_url_incoming_https_hover: "หากกำหนดคอนฟิกเซอร์วิสการทำงานร่วมกันกับ FileNet ไว้เพื่อใช้ SSL, ให้ระบุ HTTPS URL ที่ไคลเอ็นต์แอ็พพลิเคชันสามารถเข้าถึงเซอร์วิสการทำงานร่วมกันกับ FileNet ด้วยรูปแบบ https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "ซ่อนอีเมลแอดเดรสของผู้ใช้ในการตอบกลับเซิร์ฟเวอร์:",
		admin_p8_hide_email_addresses_hover: "คุณสามารถซ่อนอีเมลแอดเดรสของผู้ใช้ในการตอบกลับเซิร์ฟเวอร์หากคุณต้องการทำให้สอดคล้องกับนโยบายความเป็นส่วนตัว ตัวอย่างเช่น, คุณสามารถซ่อนรายการของอีเมลแอดเดรสของผู็ใช้เมื่อเซิร์ฟเวอร์ส่งคืนรายการของเอกสารและข้อมูลเกี่ยวกับผู้ใช้ที่สร้างหรือแก้ไขเอกสาร",

		admin_p8_mask_user_ids: "มาร์ก ID ผู้ใช้ในล็อกไฟล์:",
		admin_p8_mask_user_ids_hover: "คุณสามารถซ่อนชื่อผู้ใช้ในล็อกไฟล์ของเซอร์วิสการทำงานร่วมกันกับ FileNet หากคุณต้องการทำให้สอดคล้องกับนโยบายความปลอดภัย เมื่อคุณเปิดใช้งานอ็อพชันนี้, ชื่อผู้ใช้จะถูกแทนที่ด้วยค่าแฮช ซึ่งช่วยให้คุณจัดเตรียมล็อกไฟล์ไปยังบริษัทภายนอก, เช่น IBM, สำหรับวัตถุประสงค์ในการสนับสนุนดยไม่ส่งผลต่อชื่อของผู้ใช้หรือเร็กคอร์ดกิจกรรมใดๆ",

		admin_p8_soft_delete: "ย้ายไฟล์ที่ลบไปยังถังกู้คืน:",
		admin_p8_soft_delete_hover: "เมื่อผู้ใช้ลบไอเท็ม, ให้ย้ายไอเท็มไปยังถังกู้คืน, แทนที่จะลบไอเท็มออกจากที่เก็บ ไอเท็มยังคงอยู่ในถังกู้คืนจนกว่าจะถูกจำกัดทิ้ง ค่าติดตั้งนี้ถูกละเว้นหากที่เก็บเป้าหมายไม่สนับสนุนถังกู้คืน<br><br><b>ข้อจำกัด:</b> ถังกู้คืนได้รับการสนับสนุนใน IBM FileNet P8 เวอร์ชัน 5.2 หรือถัดมาและต้องการ Social Collaboration Base Extensions add-on",

		admin_p8_download: "คอนฟิกูเรชัน Content Download HTTP Cache",
		admin_p8_download_instructions: "หากที่เบ IBM FileNet Content Manager ของคุณมีไฟล์ขนาดใหญ่จำนวนมาก, คุณสามารถกำหนดคอนฟิก Content Download HTTP Cache (CDHC) เพื่อเปิดใช้งานเซอร์วิสการทำงานร่วมกันกับ FileNet เพื่อเปลี่ยนทิศทางคำร้องขอเนื้อหาสำหรับไฟล์ที่มีขนาดใหญ่ไปยังเว็บเซิร์ฟเวอร์เฉพาะงาน<br/><br/>คุณลักษณะนี้ต้องการ IBM HTTP Server นอกจากนี้, คุณต้องอัพเดตไฟล์ IBM HTTP Server httpd.conf",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "ระบุว่าคุณต้องการเปิดใช้งาน Content Download HTTP Cache (CDHC) สำหรับที่เก็บ IBM FileNet Content Manager ทั้งหมดในสภาวะแวดล้อมของคุณ คุณสามารถระบุขนาดไฟล์ต่ำสุดที่แคชไฟล์",
		admin_p8_download_cache_folder: "ไดเร็กทอรีแคชที่ระบุไว้:",
		admin_p8_download_cache_folder_hover: "ระบุพาธที่ถูกต้องของไดเร็กทอรีที่คุณต้องการเก็บไฟล์แคช ไดเร็กทอรีสามารถอยู่บนระบบปฏิบัติการหรืออุปกรณ์ใดๆ, เช่น ไดเร็กทอรีเครือข่ายที่แบ่งใช้, ตราบเท่าที่ยังสามารถมองเห็นได้เป็นระบบไฟล์ในเซอร์วิสการทำงานร่วมกันกับ FileNet และ IBM HTTP Server",
		admin_p8_download_cache_url: "นามแฝงสำหรับตำแหน่งแคช:",
		admin_p8_download_cache_url_hover: "ระบุนามแฝงที่ใช้เพื่อชี้ไปยังไดเร็กทอรีแคชจาก URL เซอร์วิสการทำงานร่วมกันกับ FileNet ระบุนามแฝงด้วยรูปแบบ /นามแฝง, ตัวอย่างเช่น, /cdhc<br/><br/>เมื่อรวม /cdhc ไว้ใน URL, แอ็พพลิเคชันจะเปลี่ยนทิศทางไปยังไดเร็กทอรีแคชที่ระบุไว้อย่างถูกต้อง",
		admin_p8_download_cache_max_files: "จำนวนสูงสุดของไฟล์ที่แคช:",
		admin_p8_download_cache_max_files_hover: "เมื่อเข้าถึงจำนวนสูงสุดของไฟล์ที่แคชแล้ว, ไฟล์ที่เก่าที่สุดจะถูกลบออกจากแคช<br><br>หากคุณระบุจำนวนสูงสุดของไฟล์ที่ต้องการแคชและขนาดสูงสุดของแคช, ไฟล์ที่เก่าที่สุดจะถูกลบออกจากแคช เมื่อพบสองแคชที่ต่ำกว่าสองเงื่อนไขนี้",
		admin_p8_download_cache_max_size: "ขนาดสูงสุดของแคช (ในหน่วย GB):",
		admin_p8_download_cache_max_size_hover: "เมื่อเข้าถึงขนาดสูงสุดของแคชแล้ว, ไฟล์ที่เก่าที่สุดจะถูกลบออกจากแคช<br/><br/>หากคุณระบุจำนวนสูงสุดของไฟล์ที่ต้องการแคชและขนาดสูงสุดของแคช, ไฟล์ที่เก่าที่สุดจะถูกลบออกจากแคช เมื่อพบสองแคชที่ต่ำกว่าสองเงื่อนไขนี้",
		admin_p8_download_cache_cleanup_duration: "ระยะเวลาสูงสุดในการล้างข้อมูล (ในหน่วยวินาที):",
		admin_p8_download_cache_cleanup_duration_hover: "ระบุระยะเวลาสูงสุดที่การดำเนินการล้างข้อมูลสามารถใช้ได้ ช่วงเวลาดีฟอลต์คือ 5 วินาที<br><br>ไฟล์ใดๆ ที่เกี่ยวข้องกับการลบแต่ยังคงอยู่ในแคชหลังจากที่การดำเนินการล้างข้อมูลจะถูกลบในระหว่างการดำเนินการล้างข้อมูลในอนาคต",
		admin_p8_download_cache_cleanup_min: "ช่วงเวลาต่ำสุดระหว่างการดำเนินการล้างข้อมูลแคช (ในหน่วยวินาที):",
		admin_p8_download_cache_cleanup_min_hover: "ระบุระยะเวลาต่ำสุดที่ผ่านไประหว่างการดำเนินการล้างข้อมูลแคช เวลาดีฟอลต์คือ 3,600 วินาที (1 ชั่วโมง)<br><br>การดำเนินการล้างข้อมูลเกิดขึ้นเมื่อมีคำร้องขอที่แอ็คทีฟเพื่อดาวน์โหลดเนื้อหาจากแคช หากคำร้องขอมาในทุกนาที, การดำเนินการล้างข้อมูลจะเกิดขึ้นทุกชั่วโมง อย่างไรก็ตาม, หากคำร้องขอการดาวน์โหลดผ่านไปสามชั่วโมง, การดำเนินการร้องขอจะไม่เกิดขึ้นจนกว่าคำร้องขอให้ดาวน์โหลดในครั้งถัดไปจะได้รับ",
		admin_p8_download_cache_min_lifetime: "เวลาต่ำสุดในแคช (ในหน่วยวินาที):",
		admin_p8_download_cache_min_lifetime_hover: "ระบุระยะเวลาต่ำสุดที่เก็บไฟล์ไว้ในแคชก่อนที่จะสามารถลบทิ้งได้ เวลาดีฟอลต์คือ 3,600 วินาที (1 ชั่วโมง)<br><br>แม้ว่าแคชจะมีขนาดสูงสุดหรือมีจำนวนไฟล์สูงสุด ไฟล์ที่เก่าที่สุดในแคชจะไม่สามารถลบทิ้งได้จนกว่าไฟล์เหล่านั้นจะอยู่ในแคชตามระยะเวลาที่ระบุไว้",
		admin_p8_download_cache_size_threshold: "ขนาดไฟล์ต่ำสุดที่ต้องการแคช (ในหน่วย KB):",
		admin_p8_download_cache_size_threshold_hover: "ระบุขนาดต่ำสุดที่ CDHC ควรใช้เพื่อแคชไฟล์ หากไฟล์มีขนาดเล็กกว่าขนาดที่ระบุไว้, ไฟล์จะถูกควบคุมผ่านเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ที่เซอร์วิสการทำงานร่วมกันกับ FileNet ปรับใช้ ขนาดไฟล์ดีฟอลต์คือ 1,000 KB",
		admin_p8_download_guard_header: "ส่วนหัว HTTP สำหรับ gatekeeping:",
		admin_p8_download_guard_header_hover: "หากไคลเอ็นต์แอ็พพลิเคชันไม่ได้จัดเส้นทางคำร้องขอผ่าน IBM HTTP Server, เนื้อหาที่แคชไม่สามารถดาวน์โหลดได้ คุณสามารถระบุให้คำร้องขอขาเข้าที่มีส่วนหัว HTTP ที่ระบุเฉพาะ (ซึ่งเพิ่มไปยังคำร้องขอจาก IBM HTTP Server) สามารถเข้าถึงเนื้อหาที่แคชแล้วเพื่อปกป้องความล้มเหลวในการดาวน์โหลด<br><br>ส่วนหัว HTTP ถูกกำหนดคอนฟิกใน IBM HTTP Server และแสดงอยู่บนคำร้องขอขาเข้าทั้งหมดที่จัดเส้นทางผ่าน IBM HTTP Server หากคำร้องขอไม่มีส่วนหัว HTTP, เนื้อหาจะถูกจัดเส้นทางผ่านเว็บแอ็พพลิเคชันเซิร์ฟเวอร์แทนเซิร์ฟเวอร์ IBM HTTP",
		admin_p8_download_generate_config: "สร้างคอนฟิกูเรชัน",
		admin_p8_download_generate_config_label: "คอนฟิกูเรชัน IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "สำหรับคอนฟิกูเรชัน CHDC เพื่อทำงาน, คุณต้องอัพเดตไฟล์ IBM HTTP Server httpd.conf คลิก สร้างคอนฟิกูเรชัน เพื่อสร้างข้อความสั่งที่ต้องเพิ่มไปยังไฟล์ httpd.conf",

		admin_logging_viewone_pro: "การบันทึก ViewONE Professional:",
		admin_logging_viewone_virtual: "การบันทึก ViewONE Virtual:",
		admin_logging_viewone_streamer: "การบันทึก Document Streaming Server Module :",
		admin_logging_viewone_streamer_hover: "อ็อพชันการล็อก Document Streaming Server Module ใช้ได้เฉพาะถ้าคุณได้เปิดใช้งานการสตรีมมิงสำหรับไฟล์ PDF หรือ TIFF ในเซสชัน <b>Daeja ViewONE</b> ของเครื่องมือการดูแลระบบ",
		admin_logging_viewone_redaction: "การล็อก Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "อ็อพชันการล็อก Permanent Redaction Server Module ใช้ได้เฉพาะถ้าคุณถูกกำหนดให้ใช้โมดูลของ Daeja ViewONE Professional",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "ไฟล์ Stream PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "หากคุณมีเอกสาร PDF ที่มีขนาดใหญ่ในที่เก็บของคุณ คุณสามารถเปิดใช้งานวิวเวอร์กับสตรีมเนื้อหาเอกสารเพื่อทำให้ผู้ใช้ดูเอกสารเหล่านี้ได้เร็วขึ้น อย่างไรก็ตาม หากสตรีมไม่ทำงานในสภาวะแวดล้อมของคุณ คุณสามารถปิดใช้งานการสตรีมได้",
		admin_daeja_viewonepro_stream_tiff_documents: "ไฟล์ Stream TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "หากคุณมีเอกสาร TIFF ที่มีขนาดใหญ่ในที่เก็บของคุณ คุณสามารถเปิดใช้งานวิวเวอร์กับสตรีมเนื้อหาเอกสารเพื่อทำให้ผู้ใช้ดูเอกสารเหล่านี้ได้เร็วขึ้น อย่างไรก็ตาม หากสตรีมไม่ทำงานในสภาวะแวดล้อมของคุณ คุณสามารถปิดใช้งานการสตรีมได้",
		admin_daeja_viewonepro_show_file_buttons: "ปุ่มไฟล์",
		admin_daeja_viewonepro_show_file_menus: "เมนูไฟล์",
		admin_daeja_viewonepro_enable_file_keys: "ฮ็อตคีย์ไฟล์",
		admin_daeja_viewonepro_file_keys_hover_help: "ระบุว่าคุณต้องการให้ผู้ใช้ใช้ช็อตคัตคีย์บอร์ดเพื่อทำงานกับไฟล์ ตัวอย่างเช่น เพื่อเปิดหรือบันทึกไฟล์ สำหรับข้อมูลเพิ่มเติมเกี่ยวกับฮ็อตคีย์ที่ระบุเฉพาะ โปรดดูคำอธิบายพารามิเตอร์ FileKeys ใน IBM Daeja ViewONE Parameters Reference Manual",
		admin_daeja_viewonepro_show_print_buttons: "ปุ่มพิมพ์",
		admin_daeja_viewonepro_show_print_menus: "เมนูพิมพ์",
		admin_daeja_viewonepro_enable_print_keys: "ฮ็อตคีย์พิมพ์",
		admin_daeja_viewonepro_print_keys_hover_help: "ระบุว่าคุณต้องการให้ผู้ใช้ใช้ช็อตคัตคีย์บอร์ดเพื่อพิมพ์ไฟล์ ตัวอย่างเช่น พิมพ์เอกสาร สำหรับข้อมูลเพิ่มเติมเกี่ยวกับฮ็อตคีย์ที่ระบุเฉพาะ โปรดดูคำอธิบายพารามิเตอร์ PrintKeys ใน IBM Daeja ViewONE Parameters Reference Manual",
		admin_daeja_viewonepro_show_invert_buttons: "ปุ่มกลับด้าน",
		admin_daeja_viewonepro_annotation_tooltip: "คำแนะนำเครื่องมือหมายเหตุประกอบแบบกำหนดเองที่เป็นค่าดีฟอลต์:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "ป้อนข้อความที่ต้องการแสดงเมื่อไม่ได้ระบุคำแนะนำเครื่องมือสำหรับหมายเหตุประกอบแบบกำหนดเอง ข้อความสามารถมีโทเค็นที่สามารถแทนที่ได้ ตัวอย่างเช่น, &quot;&lt;creator&gt; สร้างหมายเหตุประกอบนี้บน &lt;createdateonly&gt;.&quot; สำหรับข้อมูลเพิ่มเติมเกี่ยวกับโทเค็นที่สามารถเปลี่ยนได้ โปรดดูพารามิเตอร์ customAnnotationsToolTip ในคู่มือ IBM Daeja ViewONE Parameters Reference",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "ใช้เคล็ดลับเครื่องมือแบบกำหนดเองที่กำหนดไว้ล่วงหน้า",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "ใช้เคล็ดลับเครื่องมือแบบกำหนดเองที่ระบบกำหนดไว้ ซึ่งแสดงอยู่ในกล่องข้อความด้านล่าง",
		admin_daeja_viewonepro_help_url: "URL วิธีใช้:",
		admin_daeja_viewonepro_help_url_hover_help: "ระบุ URL ของเว็บเพจที่มีเอกสารคู่มือวิธีใช้สำหรับวิวเวอร์ ปุ่มวิธีใช้บนแถบเครื่องมือวิวเวอร์และแอ็คชันเมนูวิธีใช้เปิดเว็บเพจ หากคุณไม่ได้ระบุ URL ปุ่มวิธีใช้และแอ็คชันเมูจะไม่แสดง",
		admin_daeja_viewonepro_image_stamp_resource_context: "บริบทของรีซอร์สการประทับอิมเมจ:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "ส่งเนื้อหาที่ไม่สนับสนุนไปที่เบราว์เซอร์:",
		admin_daeja_viewonepro_route_docs_hover_help: "ผู้ใช้สามารถดูไฟล์อิมเมจที่ไม่สนับสนุนได้โดยจัดเส้นทางไฟล์เหล่านั้นไปยังเบราว์เซอร์ ซึ่งเปิดแอ็พพลิเคชันที่เหมาะสมสำหรับการดูไฟล์ ตัวอย่างเช่น เปิดเอกสาร Microsoft Word เบราว์เซอร์จะใช้วิวเวอร์ Microsoft Word",
		admin_daeja_viewonepro_scale: "จัดรูปภาพพอดีอัตโนมัติ:",
		admin_daeja_viewonepro_scale_best: "พอดีที่สุด",
		admin_daeja_viewonepro_scale_ftow: "พอดีกับความกว้าง",
		admin_daeja_viewonepro_scale_ftoh: "พอดีกับความสูง",
		admin_daeja_viewonepro_enable_hotkeys: "เปิดใช้งานฮ็อตคีย์:",
		admin_daeja_viewonepro_show_features: "แสดงปุ่มและเมนู:",
		admin_daeja_custom_settings: "ค่าติดตั้งเพิ่มเติม:",
		admin_daeja_custom_settings_hover_help: "คุณสามารถเพิ่มพารามิเตอร์อื่นๆ ได้โดยระบุชื่อและค่าพารามิเตอร์ ตัวอย่างเช่น คุณสามารถระบุ &quot;scrollbars&quot; และ &quot;true&quot; หากคุณต้องการให้แสดงแถบเลื่อนเมื่อปรับสเกลอิมเมจให้ใหญ่กว่าพื้นที่การแสดงผล สำหรับบข้อมูลเพิ่มเติมเกี่ยวกับชื่อและค่าพารามิเตอร์ โปรดดู IBM Daeja ViewONE Parameters Reference Manual",
		admin_daeja_virtual: "เสมือน",
		admin_daeja_virtual_annotation_tooltip: "คำแนะนำเครื่องมือหมายเหตุประกอบแบบกำหนดเองที่เป็นค่าดีฟอลต์:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "ป้อนข้อความที่ต้องการแสดงเมื่อไม่ได้ระบุคำแนะนำเครื่องมือสำหรับหมายเหตุประกอบแบบกำหนดเอง ข้อความสามารถมีโทเค็นที่สามารถแทนที่ได้ ตัวอย่างเช่น, &quot;&lt;creator&gt; สร้างหมายเหตุประกอบนี้บน &lt;createdateonly&gt;.&quot; สำหรับข้อมูลเพิ่มเติมเกี่ยวกับโทเค็นที่สามารถเปลี่ยนได้ โปรดดูพารามิเตอร์ customAnnotationsToolTip ในคู่มือ IBM Daeja ViewONE Parameters Reference",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "ใช้เคล็ดลับเครื่องมือแบบกำหนดเองที่กำหนดไว้ล่วงหน้า",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "ใช้เคล็ดลับเครื่องมือแบบกำหนดเองที่ระบบกำหนดไว้ ซึ่งแสดงอยู่ในกล่องข้อความด้านล่าง",
		admin_daeja_virtual_image_stamp_resource_context: "บริบทของรีซอร์สการประทับอิมเมจ:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"พาธไฟล์ไลเซนส์:",
		admin_daeja_virtual_license_path_hover_help:"ระบุพาธแบบเต็มของไดเร็กทอรีที่มีไฟล์ไลเซนส์ lic-server-virtual.v1 and lic-server.v1",
		admin_default_license_path:"ใช้พาธไฟล์ไลเซนส์ดีฟอลต์",
		admin_license_path_specified:"ใช้พาธไฟล์ไลเซนส์แบบกำหนดเอง",

		admin_daeja_streamer: "เซิร์ฟเวอร์",
		admin_daeja_streamer_cache_root: "ไดเร็กทอรีแคช:",
		admin_daeja_streamer_cache_root_hover_help: "ระบุพาธที่ถูกต้องของไดเร็กทอรีที่คุณต้องการเก็บไฟล์ที่แคชแล้วเพื่อเข้าถึงได้เร็วกว่า ไดเร็กทอรีสามารถอยู่บนระบบปฏิบัติการใดๆ หรืออุปกรณ์ใดๆ ได้ เช่น ไดเร็กทอรีเครือข่าย หาก IBM Content Navigator และ IBM HTTP Server มองเห็นเป็นระบบไฟล์  ใช้ไดเร็กทอรีโลคัลเพื่อปรับปรุงประสิทธิภาพการทำงาน",
		admin_daeja_streamer_settings: "ค่าติดตั้งเพิ่มเติม:",
		admin_daeja_streamer_settings_hover_help: "คุณสามารถเพิ่มพารามิเตอร์อื่นๆ ได้โดยระบุชื่อและค่าพารามิเตอร์ ตัวอย่างเช่น คุณสามารถระบุ “cookieAllowedDomainList”  และรายการของเซิร์ฟเวอร์โฮสต์ที่คั่นด้วยเครื่องหมายคอมมา  สำหรับบข้อมูลเพิ่มเติมเกี่ยวกับชื่อและค่าพารามิเตอร์ โปรดดู IBM Daeja ViewONE Parameters Reference Manual",

		admin_daeja_redaction: "การแก้ไขแบบถาวร",
		admin_daeja_redaction_settings: "ค่าติดตั้ง:",
		admin_daeja_redaction_settings_hover_help: "คุณสามารถเพิ่มพารามิเตอร์อื่นๆ ได้โดยระบุชื่อและค่าพารามิเตอร์ ตัวอย่างเช่น คุณสามารถระบุ “burnIncrementalAnnotations” และ ”true” สำหรับบข้อมูลเพิ่มเติมเกี่ยวกับชื่อและค่าพารามิเตอร์ โปรดดู IBM Daeja ViewONE Parameters Reference Manual",

		admin_daeja_setting_dialog_title_new: "สร้างค่าติดตั้งใหม่",
		admin_daeja_setting_dialog_title_edit: "แก้ไขค่าติดตั้ง",
		admin_daeja_setting_dialog_hover_help: "เพิ่มพารามิเตอร์อื่นๆ ได้โดยระบุชื่อและค่าพารามิเตอร์ ตัวอย่างเช่น คุณสามารถระบุ “scrollbars” และ “true” หากคุณต้องการให้แสดงแถบเลื่อนเมื่อกำหนดมาตราส่วนอิมเมจให้มีขนาดใหญ่กว่าพื้นที่การแสดงผล",
		admin_daeja_setting_dialog_field_hover_help: "สำหรับข้อมูลเพิ่มเติมเกี่ยวกับชื่อและค่าพารามิเตอร์ โปรดดู Daeja ViewONE Parameter Reference Manual",

		admin_daeja_logging: "การจดบันทึก Daeja ViewONE",
		admin_daeja_logging_trace: "เปิดใช้งานการบันทึกการติดตาม",
		admin_daeja_logging_trace_net: "เปิดใช้งานการบันทึกเครือข่าย",
		admin_daeja_logging_trace_annotations: "เปิดใช้งานการบันทึกหมายเหตุประกอบ",
		admin_daeja_logging_log_file: "ล็อกไฟล์:",
		admin_daeja_logging_instructions: "คุณสามารถใช้การทำบันทึกเพื่อแก้ปัญหาเบื้องต้นกับ Daeja ViewONE Professional และ Daeja ViewONE Virtual ถ้าคุณทราบว่าปัญหาเกิดขึ้นสำหรับคุณลักษณะที่เจาะจง คุณสามารถกำหนดการบันทึกไปที่คุณลักษณะนั้น",

		admin_v1pro_logging_trace_hover: "ใช้การตั้งค่านี้เพื่อแก้ไขปัญหาทั่วไปกับ viewer<br><br>ข้อมูลการบันทึกถูกเขียนไปที่คอนโซล Java บนเครื่องไคลเอ็นต์ คุณสามารถเข้าถึงคอนโซล Java จาก Control Panel (Windows) หรือ System Preferences (Mac) สำหรับระบบปฏิบัติการของคุณ",
		admin_v1pro_logging_trace_net_hover: "ใช้ค่าติดตั้งนี้เพื่อแก้ไขปัญหาต่อไปนี้:<ul><li>ปัญหากับการเชื่อมต่อเซิร์ฟเวอร์</li><li>ปัญหากับชนิด MIME</li><li>ปัญหากับไฟล์มีความยาวเกินไป</li></ul>นอกจากนี้ คุณสามารถใช้การบันทึกการติดตามเครือข่ายเพื่อกำหนดจุดที่มีการดีเลย์เกิดขึ้นเมื่อใช้ Daeja ViewONE Professional<br><br>ข้อมูลการบันทึกถูกเขียนไปที่คอนโซล Java บนเครื่องไคลเอ็นต์ คุณสามารถเข้าถึงคอนโซล Java จาก Control Panel (Windows) หรือ System Preferences (Mac) สำหรับระบบปฏิบัติการของคุณ",
		admin_v1pro_logging_trace_annotations_hover: "ใช้การตั้งค่านี้กับการสร้าง การบันทึกหรือการโหลดหมายเหตุประกอบ<br><br>ข้อมูลการบันทึกถูกเขียนไปที่คอนโซล Java บนเครื่องไคลเอ็นต์ คุณสามารถเข้าถึงคอนโซล Java จาก Control Panel (Windows) หรือ System Preferences (Mac) สำหรับระบบปฏิบัติการของคุณ",

		admin_virtual_logging_trace_hover: "ใช้การตั้งค่านี้เพื่อแก้ไขปัญหาทั่วไปกับ viewer<br><br>โดยดีฟอลต์ ข้อมูลการบันทึกถูกเขียนไปที่ไฟล์ virtual.log ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_virtual_logging_trace_net_hover: "ใช้ค่าติดตั้งนี้เพื่อแก้ไขปัญหาต่อไปนี้:<ul><li>ปัญหากับการเชื่อมต่อเซิร์ฟเวอร์</li><li>ปัญหากับชนิด MIME</li><li>ปัญหากับไฟล์มีความยาวเกินไป</li></ul>นอกจากนี้ คุณสามารถใช้การบันทึกการติดตามเครือข่ายเพื่อกำหนดจุดที่มีการดีเลย์เกิดขึ้นเมื่อใช้ Daeja ViewONE Virtual<br><br>โดยดีฟอลต์ ข้อมูลการบันทึกถูกเขียนไปที่ไฟล์ virtual.log ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_virtual_logging_trace_annotations_hover: "ใช้การตั้งค่านี้กับการสร้าง การบันทึกหรือการโหลดหมายเหตุประกอบ<br><br>โดยดีฟอลต์ ข้อมูลการบันทึกถูกเขียนไปที่ไฟล์ virtual.log ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_virtual_logging_log_file_hover: "ถ้าคุณเปิดใช้งานการบันทึกล็อกสำหรับวิวเวอร์ คุณต้องระบุพาธและชื่อล็อกแบบเต็มที่คุณต้องการเก็บข้อมูลล็อก  ขอแนะนำให้คุณตั้งชื่อล็อกไฟล์ว่า virtual.log.",

		admin_streamer_logging_trace_hover: "ใช้ค่าติดตั้งนี้เพื่อแก้ไขปัญหาทั่วไปกับ Document Streaming Server Module<br><br>โดยดีฟอลต์ข้อมูลล็อกจะถูกเขียนไปที่ไฟล์ streamer.log ซึ่งอยู่ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_streamer_logging_trace_net_hover: "ใช้ค่าติดตั้งนี้เพื่อแก้ไขปัญหาต่อไปนี้:<ul><li>ปัญหากับการเชื่อมต่อเซิร์ฟเวอร์</li><li>ปัญหากับชนิด MIME ที่เจาะจง</li><li>ปัญหากับไฟล์มีความยาวเกินไป</li></ul>นอกจากนี้ คุณสามารถใช้การบันทึกการติดตามเครือข่ายเพื่อกำหนดจุดที่มีการดีเลย์เกิดขึ้นเมื่อใช้ Document Streaming Server Module<br><br>โดยดีฟอลต์ข้อมูลล็อกจะถูกเขียนไปที่ไฟล์ streamer.log ซึ่งอยู่ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_streamer_logging_log_file_hover: "ถ้าคุณเปิดใช้งานการบันทึกล็อกสำหรับ Document Streaming Server Module คุณต้องระบุพาธแบบเต็มและตั้งชื่อล็อกไฟล์ตามตำแหน่งที่คุณต้องการเก็บข้อมูลล็อก  ขอแนะนำให้คุณตั้งชื่อล็อกไฟล์ว่า streamer.log",

		admin_redaction_logging_trace_hover: "ใช้ค่าติดตั้งนี้เพื่อแก้ไขปัญหาทั่วไปกับ Permanent Redaction Server Module<br><br>โดยดีฟอลต์ข้อมูลล็อกจะถูกเขียนไปที่ไฟล์ redacttofile.log ซึ่งอยู่ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_redaction_logging_trace_net_hover: "ใช้ค่าติดตั้งนี้เพื่อแก้ไขปัญหาต่อไปนี้:<ul><li>ปัญหากับการเชื่อมต่อเซิร์ฟเวอร์</li><li>ปัญหากับชนิด MIME ที่เจาะจง</li><li>ปัญหากับไฟล์มีความยาวเกินไป</li></ul>นอกจากนี้ คุณสามารถใช้การบันทึกการติดตามเครือข่ายเพื่อกำหนดจุดที่มีการดีเลย์เกิดขึ้นเมื่อใช้ Permanent Redaction Server Module<br><br>โดยดีฟอลต์ข้อมูลล็อกจะถูกเขียนไปที่ไฟล์ redacttofile.log ซึ่งอยู่ในไดเร็กทอรีย่อยของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_redaction_logging_log_file_hover: "ถ้าคุณเปิดใช้งานการบันทึกล็อกสำหรับ Permanent Redaction Server Module คุณต้องระบุพาธแบบเต็มและตั้งชื่อล็อกไฟล์ตามตำแหน่งที่คุณต้องการเก็บข้อมูลล็อก  ขอแนะนำให้คุณตั้งชื่อล็อกไฟล์ว่า redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "กำหนดคอนฟิกคุณลักษณะสำหรับวิวเวอร์และเซอร์วิสของคุณ",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "ถ้าคุณใช้เว็บไคลเอ็นต์เพื่อเชื่อมต่อกับที่เก็บ Content Manager OnDemand หนึ่งที่เก็บหรือมากกว่า คุณต้องระบุข้อมูลที่ OnDemand Web Enablement Kit ต้องการเพื่อทำงานได้ถูกต้อง ข้อมูลนี้จะถูกแบ่งใช้โดยที่เก็บ Content Manager OnDemand ทั้งหมดที่กำหนดคอนฟิกไว้สำหรับเว็บไคลเอ็นต์",
		admin_ondemand_language: "ภาษา:",
		admin_ondemand_tempdir: "ไดเร็กทอรีชั่วคราว ODWEK:",
		admin_ondemand_tracegrp: "การติดตาม ODWEK",
		admin_ondemand_tracedir: "ไดเร็กทอรีการติดตาม:",
		admin_ondemand_tracelevel: "ระดับการติดตาม:",
		admin_ondemand_tracelevel_0: "0 - ไม่มีการบันทึก",
		admin_ondemand_tracelevel_1: "1 - บันทึกข้อความแสดงข้อผิดพลาด",
		admin_ondemand_tracelevel_2: "2 - บันทึกข้อความแสดงข้อผิดพลาด และการเตือน",
		admin_ondemand_tracelevel_3: "3 - บันทึกข้อความแสดงข้อผิดพลาด การเตือน และที่เป็นข้อมูล",
		admin_ondemand_tracelevel_4: "4 - ข้อความทั้งหมดจะถูกดักจับรวมถึงการติดตามฟังก์ชัน",
		admin_ondemand_max_trace_filesize: "ขนาดไฟล์การติดตามสูงสุด:",
		admin_ondemand_max_trace_filesize_unlimited: "ไม่จำกัด",
		admin_ondemand_max_trace_filesize_limited: "จำกัด (แนะนำ)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "ค่านี้ไม่อยู่ในช่วง ค่าต้องเป็นจำนวนเต็มที่อยู่ระหว่าง 1 และ 1,000,000",
		admin_ondemand_afp2pdf_installdir: "ไดเร็กทอรีการติดตั้ง AFP2PDF:",
		admin_ondemand_language_hover: "ระบุภาษาที่ ODWEK จะส่งคืนข้อความ",
		admin_ondemand_tempdir_hover: "ป้อนไดเร็กทอรีที่ OnDemand Web Enablement Kit เก็บไฟล์ชั่วคราวระหว่างการประมวลผลไว้ คุณต้องป้อนพาธแบบเต็มของไดเร็กทอรีที่มีอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		admin_ondemand_tracedir_hover: "ป้อนไดเร็กทอรีที่คุณต้องการใช้เพื่อเก็บไฟล์ติดตาม ODWEK  arswww.trace คุณต้องป้อนพาธแบบเต็มของไดเร็กทอรีที่มีอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		admin_ondemand_tracelevel_hover: "ระบุระดับของการบันทึกข้อมูลที่เขียนลงในไฟล์ arswww.trace <b>การบันทึกข้อความแสดงข้อผิดพลาด</b> จะดักจับข้อมูลบันทึกการทำงานที่น้อยที่สุด <b>ข้อความทั้งหมดจะถูกดักจับ รวมถึงการติดตามฟังก์ชัน</b> จะดักจับข้อมูลมากที่สุด<br /><br />ห้ามระบุ <b>ดักจับข้อความทั้งหมด รวมถึง การติดตามฟังก์ชัน</b> ในสภาวะแวดล้อมที่ใช้งานจริงยกเว้นคุณได้รับคำแนะนำโดย IBM Software Support.",
		admin_ondemand_max_trace_filesize_hover: "ระบุว่าคุณต้องการอนุญาตให้ไฟล์ติดตาม ODWEK มีขนาดใหญ่ไม่จำกัด หรือคุณต้องการให้เว็บไคลเอ็นต์สร้างล็อกไฟล์ใหม่เมื่อล็อกไฟล์มีขนาดถึงขนาดที่กำหนด ค่าดีฟอลต์คืออนุญาตให้ล็อกไฟล์การติดตามโตจนกว่าเว็บแอ็พพลิเคชันจะถูกหยุดการทำงานบนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		admin_ondemand_max_trace_unlimited_hover: "เลือกอ็อพชันนี้ถ้าคุณต้องการให้ข้อมูลการติดตาม ODWEK ถูกเขียนไปยังล็อกไฟล์เดียว ถ้าคุณเลือกอ็อพชันนี้ คุณอาจมีล็อกไฟล์ที่มีขนาดใหญ่เกินกว่าที่จะเปิดได้ด้วยไฟล์วิวเวอร์มาตรฐาน",
		admin_ondemand_max_trace_limited_hover: "เลือกอ็อพชันนี้ ถ้าคุณต้องการให้ข้อมูลการติดตาม ODWEK ถูกเขียนไปยังล็อกไฟล์ที่เล็กกว่า เมื่อล็อกไฟล์ถึงขนาดสูงสุด บันทึกการทำงานปัจจุบันจะถูกเปลี่ยนชื่อเพื่อรวมวันที่ (arswww.trace.YYYYMMDD.HHMMSS) และล็อกไฟล์ใหม่จะถูกสร้างขึ้น",
		admin_ondemand_afp2pdf_installdir_hover: "ถ้าคุณต้องการใช้ยูทิลีตี AFP2PDF Transform เพื่อแปลงเอกสาร AFP เป็นเอกสาร PDF สำหรับการดูหรือการพิมพ์ ให้ระบุไดเร็กทอรีที่ติดตั้งยูทิลีตี AFP2PDF Transform บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ ตัวอย่างเช่น: C:\\Program Files\\IBM\\AFP2web\\afp2pdf",

		admin_adminusers: "ผู้ดูแลระบบ",
		admin_adminusers_heading_text_multi: "คุณต้องระบุผู้ใช้ที่มีสิทธิ์ผู้ดูแลระบบในเว็บไคลเอ็นต์ เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถล็อกอินเข้าสู่เดสก์ท็อปการจัดการ<br /><br /><b>สิ่งสำคัญ:</b> ID ผู้ใช้ของผู้ดูแลระบบ IBM Content Navigator ต้องตรงกับ:<ul><li>ID ผู้ใช้ที่มีอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ของคุณ ID ผู้ใช้ไม่จำเป็นต้องเป็นผู้ดูแลระบบบนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์</li><li>ID ผู้ใช้ที่มีอยู่บนที่เก็บดีฟอลต์ที่กำหนดคอนฟิกไว้สำหรับแต่ละเดสก์ท็อปที่มีคุณลักษณะการจัดการ</li></ul>",
		admin_adminusers_heading_text_single: "คุณต้องระบุผู้ใช้ที่มีสิทธิ์ผู้ดูแลระบบในเว็บไคลเอ็นต์ เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถล็อกอินเข้าสู่เดสก์ท็อปการจัดการ<br /><br /><b>สิ่งสำคัญ:</b> ID ผู้ใช้ของผู้ดูแลระบบ IBM Content Navigator ต้องตรงกับ ID ผู้ใช้ที่มีอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ของคุณ ID ผู้ใช้ไม่จำเป็นต้องเป็นผู้ดูแลระบบบนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		admin_adminusers_newuser: "ผู้ดูแลระบบใหม่:",
		admin_adminusers_add: "บวก",
		admin_adminusers_remove: "ลบ",
		admin_adminusers_listheading: "ผู้ดูแลระบบ",
		admin_adminusers_nameInvalid: "ค่าไม่สามารถซ้ำกัน",

		admin_sync_server_instructions: "<b>ผู้ใช้ FileNet P8 เท่านั้น:</b> หากคุณวางแผนที่จะเปิดใช้งานเซอร์วิสการซิงค์สำหรับที่เก็บที่มากกว่าหนึ่งที่ คุณต้องกำหนดคอนฟิกเว็บไคลเอ็นต์เพื่อใช้เซอร์วิสการซิงค์ คอนฟิกูเรชันเซอร์วิสการซิงค์ถูกแบ่งใช้โดยที่เก็บทั้งหมดในสภาวะแวดล้อมของคุณ",
		admin_settings_instructions: "ค่าที่คุณระบุบนแท็บค่าติดตั้งจะใช้กับเดสก์ท็อปทั้งหมดในคอนฟิกูเรชันของคุณ",
		admin_autocomplete: "เติมชื่อผู้ใช้โดยอัตโนมัติ:",
		admin_autocomplete_hover: "ระบุว่าคุณต้องการให้เว็บไคลเอ็นต์เก็บชื่อผู้ใช้ในคุ๊กกี้ของเบราว์เซอร์เพื่อให้เบราว์เซอร์สามารถเติมชื่อผู้ใช้ในเว็บไคลเอ็นต์ขณะล็อกอินโดยอัตโนมัติ<br><br>ถ้าคุณเปิดใช้งานอ็อพชันนี้ ชื่อผู้ใช้ของผู้ใช้ที่ล็อกอินเข้าสู่เว็บไคลเอ็นต์ล่าสุดจะถูกเก็บไว้ในคุ๊กกี้ของเบราว์เซอร์ และจะถูกแสดงบนหน้าล็อกอินโดยอัตโนมัติเมื่อผู้ใช้เปิดเว็บไคลเอ็นต์<br><br>คุณควรปิดใช้งานอ็อพชันนี้ ถ้าแอ็พพลิเคชันถูกเข้าถึงจากเวิร์กสเตชันแบบแบ่งใช้ หรือถ้าคุณกังวลเกี่ยวกับการเก็บชื่อผู้ใช้ในคุ๊กกี้ของเบราว์เซอร์<br /><br />อ็อพชันนี้ใช้ไม่ได้กับแอ็พพลิเคชันโมนายหรือแอ็พพลิเคชันที่กำหนดเอง",
		admin_autocomplete_enable: "เปิดใช้งาน",
		admin_autocomplete_disable: "ปิดใช้งาน",
		admin_cultural_collation: "ใช้การเรียงลำดับตามโลแคล:",
		admin_cultural_collation_hover: "ถ้าคุณเปิดใช้งานการเรียงลำดับตามโลแคล การเรียงลำดับจะถูกทำบนเซิร์ฟเวอร์ที่เก็บ ซึ่งสามารถลดประสิทธิภาพของเว็บไคลเอ็นต์<br><br>การปิดใช้งานการเรียงลำดับตามโลแคลสามารถเพิ่มประสิทธิภาพของเว็บไคลเอ็นต์ได้",
		admin_cultural_collation_enable: "เปิดใช้งาน",
		admin_cultural_collation_disable: "ปิดใช้งาน",
		admin_base_ui_style: "สไตล์ธีม",
		admin_base_ui_style_hover: "ระบุสไตล์ของธีมดีฟอลต์ที่ถูกใช้ในเว็บไคลเอ็นต์ สไตล์นี้ถูกใช้เฉพาะบนเดสก์ท็อปที่ใช้ธีม <b>ดีฟอลต์</b> (เนื่องจากระบุไว้บนแท็บ <b>ลักษณะที่ปรากฏ</b> ของคอนฟิกูเรชันดสก์ท็อป)<br/></br><b>ข้อจำกัด:</b> หากคอนฟิกูเรชันเดสก์ท็อปของคุณใช้ธีมแบบกำหนดเอง ธีมแบบกำหนดเองนั้นจะอ้างอิงตามสไตล์คลาสลิค โดยไม่พิจารณาถึงสไตล์ที่คุณเลือกไว้",
		admin_base_ui_style_classic: "คลาสสิค",
		admin_access_control_access: "จำกัดการเข้าถึงสำหรับผู้ใช้และกลุ่มเฉพาะ",
		admin_access_control_access_show: "แสดงข้อมูลการควบคุมการเข้าถึง",
		admin_access_control_access_enable: "ใช่",
		admin_access_control_access_disable: "ไม่",
		admin_mobile_access: "อนุญาตให้เข้าถึงจากแอ็พพลิเคชันบนมือถือ",
		admin_mobile_access_hover: "โดยดีฟอลต์ ผู้ใช้สามารถเข้าถึงเว็บไคลเอ็นต์จากแอ็พพลิเคชัน IBM Content Navigator iOS<br /><br /><b>สิ่งสำคัญ:</b> ถ้าคุณป้องกันไม่ให้ผู้ใช้เข้าถึงเว็บไคลเอ็นต์จากแอ็พพลิเคชัน iOS ผู้ใช้ยังสามารถเข้าถึงเว็บไคลเอ็นต์จากเว็บเบราว์เซอร์บนอุปกรณ์มือถือของผู้ใช้ และจากแอ็พพลิเคชันที่กำหนดเองที่เขียนขึ้นโดยใช้ IBM Content Navigator APIs และที่ทำงานบนอุปกรณ์มือถือ",
		admin_mobile_access_enable: "ใช่",
		admin_mobile_access_disable: "ไม่",
		admin_error: "ข้อมูลข้อความที่เป็นข้อมูล:",
		admin_error_custom: "ค้นหาเนื้อหาส่วนสนับสนุนแบบกำหนดเอง",
		admin_error_default: "ค้นหาเนื้อหา IBM Support <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "ระบุตำแหน่งที่คุณต้องการให้ข้อมูลแก่ผู้ใช้เมื่อผู้ใช้พบข้อความแสดงข้อผิดพลาด คุณสามารถนำผู้ใช้ไปยังข้อมูลบน IBM Support Portal, หรือคุณสามารถนำผู้ใช้ไปยังรีซอร์สภายใน, เช่น help desk",
		admin_error_URL: "ส่วนนำหน้า URL:",
		admin_error_URL_hover: "ป้อน URL ของรีซอร์สที่คุณต้องการนำผู้ใช้ไปเมื่อผู้ใช้พบข้อผิดพลาด เช่น help desk ตัวอย่างเช่น: http://localhost:port_number เว็บไคลเอ็นต์จะผนวกหมายเลขของข้อความเข้ากับ URL",
		admin_prompt_close_without_save: "คุณแน่ใจว่าต้องการปิดโดยไม่บันทึกการเปลี่ยนแปลงของคุณหรือไม่?",
		admin_object_expiration_time: "ช่วงเวลาการรีเฟรชแคช (ในหน่วยนาที):",
		admin_object_expiration_time_hover: "คุณสามารถเพิ่มจำนวนเวลาที่อ็อบเจ็กต์คอนฟิกูเรชัน เช่น เดสก์ท็อป จะถูกเก็บไว้ในแคชเพื่อเพิ่มประสิทธิภาพของเว็บไคลเอ็นต์ เวลาดีฟอลต์คือ 10 นาที เวลาสูงสุดคือ 1440 นาที (1 วัน)<br /><br />คุณต้องรีสตาร์ทเว็บแอ็พพลิเคชันเพื่อให้การเปลี่ยนแปลงของคุณมีผล<br /><br />หาก IBM Content Navigator ถูกนำไปใช้งานในสภาวะแวดล้อมคลัสเตอร์ที่มีความพร้อมใช้งานสูง การเปลี่ยนแปลงใดๆ กับคอนฟิกูเรชันอ็อบเจ็กต์จะไม่ถูกเผยแพร่ไปยังโหนดในคลัสเตอร์จนกว่าแคชจะถูกรีเฟรช",
		admin_temp_file_cleanup_interval: "สแกนช่วงเวลาสำหรับการล้างแคชของวิวเวอร์ (ในหน่วยชั่วโมง):",
		admin_temp_file_cleanup_interval_hover: "จัดตารางเวลาความถี่ในการสแกนไดเร็กทอรีชั่วคราวเพื่อค้นหา และลบไฟล์ชั่วคราวที่หมดอายุแล้ว โดยดีฟอลต์ ไดเร็กทอรีชั่วคราวมีการสแกนทุกหกชั่วโมง คุณสามารถระบุ 6-48 ชั่วโมง",
		admin_temp_file_expiration_interval: "แคชของวิวเวอร์หมดอายุ (ในหน่วยชั่วโมง):",
		admin_temp_file_expiration_interval_hover: "ระบุระยะเวลาที่ไฟล์ชั่วคราวซึ่งเกี่ยวข้องกับกิจกรรมวิวเวอร์ยังคงอยู่ในแคชของเบราว์เซอร์ โดยดีฟอลต์ ไฟล์ชั่วคราวเหล่านี้จะหมดอายุหลังจาก 24 ชั่วโมง คุณสามารถระบุ 12-48 ชั่วโมง",
		admin_encryption_key_hover: "คีย์ที่ใช้สำหรับฟังก์ชันการเข้ารหัส Navigator",
		admin_encryption_key: "คีย์การเข้ารหัส:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "การสร้างตราผลิตภัณฑ์",
		admin_mobile_branding_main_color: "สีหลัก:",
		admin_mobile_branding_secondary_color: "สีรอง:",
		admin_mobile_device_title: "การจัดการ MaaS360",
		admin_mobile_device_enable_maas360: "เปิดใช้งาน MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "เปิดใช้งานวิธีใช้ MaaS360 hover ที่นี่",
		admin_mobile_device_maas360_developer_id: "ID ผู้พัฒนา MaaS360:",
		admin_mobile_device_maas360_license_key: "ไลเซนส์คีย์ของ MaaS360:",
		admin_mobile_settings_title: "ค่าติดตั้ง",
		admin_mobile_email_address_hover_help: "อีเมลแอดเดรสมีการใช้ในแอ็พพลิเคชันโมบายล์เมื่อผู้ใช้คลิก \"ส่งรายงานข้อผิดพลาด\"",
		admin_mobile_email_address: "อีเมลแอดเดรส:",
		admin_invalid_email_address_message: "อีเมลแอดเดรสที่คุณป้อนไม่ได้อยู่ในรูปแบบที่ถูกต้อง ป้อนแอดเดรสที่ถูกต้อง และลองอีกครั้ง",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "ข้อมูลบางอย่างไม่ถูกต้อง",
		admin_configuration_parameters: "พารามิเตอร์คอนฟิกูเรชัน",
		admin_configuration_optional_features: "คุณลักษณะเป็นทางเลือก",
		admin_configuration_optional_features_p8_instructions: "เลือกคุณลักษณะที่คุณต้องการเปิดใช้บนที่เก็บนี้<p><b>สิ่งสำคัญ:</b> ถ้าคุณเปิดใช้งานคุณลักษณะที่ติดตั้งโปรแกรม add-on กับที่เก็บ คุณต้องถูกเชื่อมต่อกับที่เก็บเป็นผู้ดูแลระบบ Content Platform Engine หรือ Content Engine</p>",
		admin_configuration_optional_features_cm_instructions: "เลือกคุณลักษณะที่คุณต้องการเปิดใช้บนที่เก็บนี้<p><b>สิ่งสำคัญ:</b> คุณลักษณะเหล่านี้แก้ไขโมเดลข้อมูลบนที่เก็บของคุณ เมื่อต้องการเปิดใช้งาน คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารี</p>",
		admin_system_properties: "คุณสมบัติระบบ",
		admin_system_properties_for: "คุณสมบัติระบบสำหรับ:",
		admin_available_properties: "คุณสมบัติที่มี",
		admin_displayed_properties: "คุณสมบัติที่ถูกแสดง",
		admin_selected_properties: "คุณสมบัติที่เลือก",
		admin_selected_filtered_properties: "คุณสมบัติที่ถูกซ่อน",
		admin_available_operators: "โอเปอเรเตอร์ที่ถูกแสดง",
		admin_selected_filtered_operators: "โอเปอเรเตอร์ที่ถูกซ่อน",
		admin_system_properties_shown: "คุณสมบัติที่ถูกแสดง",
		admin_system_properties_hidden: "คุณสมบัติที่ถูกซ่อน",
		admin_available_menu_items: "แอ็คชันที่พร้อมใช้งาน:",
		admin_selected_menu_items: "แอ็คชันที่เลือก:",
		admin_menu_global: "ใช้เมื่อไม่มีไอเท็มที่ถูกเลือก:",
		admin_menu_multiple_document: "ใช้เมื่อเลือกหลายไอเท็ม:",
		admin_menu_privileges: "สิทธิ์ที่จำเป็น:",
		admin_menu_plugin: "ปลั๊กอิน:",
		admin_menu_repository_types: "ชนิดของที่เก็บ:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "ตัวคั่น",
		admin_browse: "เรียกดู",
		admin_search: "การค้นหา",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "การเขียนตามบทบาท",
		admin_connections_library_enabled: "เปิดใช้งาน IBM Connections แล้ว",
		admin_office_conf: "แก้ไขการรวม",
		admin_desktop_conf_label: "คอนฟิกูเรชันเดสก์ท็อป",
		admin_ms_office_conf_label: "คอนฟิกูเรชัน Office",
		admin_workflows: "วิร์กโฟลว์",
		admin_file_types: "ชนิดของไฟล์",
		admin_file_type_contains_label: "ชนิดไฟล์มี",
		admin_name_propepty: "ชื่อ",
		admin_cm_name_property_default: "ใช้ชื่อดีฟอลต์",
		admin_cm_name_property_default_hover: "โดยดีฟอลต์ คุณสมบัติชื่อแบบลำดับชั้นของ ICM (ICM$NAME) ถูกใช้เป็นชื่อไอเท็ม หากคุณสมบัติถูกกำหนดไว้สำหรับไอเท็ม  หากคุณสมบัติชื่อแบบลำดับชั้นของ ICM (ICM$NAME) ไม่พร้อมใช้งาน คุณสมบัติแรกที่ถูกแฟล็กเป็น \"แสดง\" จะถูกใช้เป็นชื่อไอเท็ม",
		admin_cm_name_property: "ระบุคุณสมบัติชื่อไอเท็ม",
		admin_cm_name_property_hover: "ระบุคุณสมบัติที่ใช้เป็นชื่อสำหรับเอกสารและโฟลเดอร์",
		admin_name_property: "คุณสมบัติชื่อ:",
		admin_doc_name_property: "คุณสมบัติของชื่อเอกสาร:",
		admin_doc_name_property_hover: "ระบุคุณสมบัติที่ใช้เป็นชื่อเอกสาร",
		admin_folder_name_property: "คุณสมบัติของชื่อโฟลเดอร์:",
		admin_folder_name_property_hover: "ระบุคุณสมบัติที่ใช้เป็นชื่อโฟลเดอร์",
		admin_all_searches_label: "จำนวนของการค้นหาที่ต้องการแสดง:",
		admin_unlimited: "ไม่จำกัด",
		admin_limit: "จำกัดเป็น",
		admin_repository: "ที่เก็บ:",
		admin_application_space: "พื้นที่แอ็พพลิเคชัน",
		admin_available_application_spaces: "พื้นที่แอ็พพลิเคชันที่พร้อมใช้งาน:",
		admin_selected_application_spaces: "พื้นที่แอ็พพลิเคชันที่เลือก:",
		admin_label: "เลเบล",
		admin_repository_box_placeholder: "เลือกที่เก็บ Box",
		admin_repository_placeholder: "เลือกที่เก็บ",
		admin_search_match: "ข้อมูลที่ตรงกัน:",
		admin_search_match_all: "ตรงกับเงื่อนไขการค้นหาทั้งหมด",
		admin_search_match_any: "ตรงกับเงื่อนไขการค้นหาใดๆ",
		admin_search_match_hover: "ระบุอ็อพชันที่ถูกเลือกโดยดีฟอลต์ในเมนู <b>อ็อพชันคุณสมบัติ</b>",

		admin_repository_redactions_instructions: "คุณสามารถกำหนดคอนฟิกการเขียนตามบทบาทสำหรับที่เก็บนี้",
		admin_repository_redaction_policies_description: "คุณสามารถสร้างและจัดการนโยบายการเขียน ซึ่งเชื่อมโยงเหตุผลในการเขียนกับผู้ใช้และกลุ่ม ซึ่งสามารถอ่านข้อมูลที่ละเอียดอ่อน และสามารถแก้ไขคำอธิบายประกอบที่ป้องกันไม่ให้มองเห็นข้อมูลที่ละเอียดอ่อน",
		admin_repository_redaction_roles_instruction: "คุณสามารถสร้างบทบาทการเขียนเพื่อเชื่อมโยงผู้ใช้และกลุ่มที่ระบุกับความสามารถในการอ่านข้อมูลที่ละเอียดอ่อน หรือความสามารถในการแก้ไขคำอธิบายประกอบที่ป้องกันไม่ให้มองเห็นข้อมูลที่ละเอียดอ่อน ต้องเชื่อมโยงบทบาทการเขียนกับเหตุผลในการเขียนในนโยบายการเขียน ก่อนผู้ใช้และกลุ่มดังกล่าวสามารถอ่านข้อมูล หรือแก้ไขคำอธิบายประกอบ",
		admin_repository_redaction_reasons_instruction: "คุณสามารถกำหนดคอนฟิกเหตุผลในการเขียนสำหรับที่เก็บของคุณ",
		admin_repository_redaction_policies: "คอนฟิกูเรชันนโยบายการเขียน",
		admin_repository_redaction_roles: "คอนฟิกูเรชันบทบาทการเขียน",
		admin_repository_redaction_reasons: "คอนฟิกูเรชันเหตุผลในการเขียน",
		admin_repository_redaction_roles_type: "ชนิด:",
		admin_repository_redaction_roles_type_hover: "เอดิเตอร์สามารถสร้าง ปรับเปลี่ยน หรือลบชนิดเฉพาะของการเขียนตามบทบาท ในขณะที่วิวเวอร์สามารถดูชนิดเฉพาะของข้อมูลที่ละเอียดอ่อน",
		admin_repository_redaction_roles_type_editor: "เอดิเตอร์",
		admin_repository_redaction_roles_type_viewer: "ผู้ดู",
		admin_repository_redaction_roles_membership: "การเป็นสมาชิก",
		admin_repository_redaction_roles_membership_hover: "เลือกเอดิเตอร์ที่คุณต้องการให้มีบทบาทนี้",
		admin_repository_redaction_roles_user_group_hover: "ค้นหาผู้ใช้และกลุ่ม หรือเลือกเอดิเตอร์ ที่คุณต้องการให้มีบทบาทนี้",
		admin_repository_redaction_roles_description: "คุณสามารถสร้างและจัดการบทบาทการเขียน ซึ่งเชื่อมโยงผู้ใช้และกลุ่ม กับความสามารถในการอ่านข้อมูลที่ละเอียดอ่อน และแก้ไขคำอธิบายประกอบที่ป้องกันไม่ให้มองเห็นข้อมูลที่ละเอียดอ่อน",
		admin_repository_redaction_new: "บทบาทการเขียนใหม่",
		admin_repository_redaction_role_avail_editors: "เอดิเตอร์การเขียนที่พร้อมใช้งาน",
		admin_repository_redaction_role_avail_users: "ผู้ใช้ที่พร้อมใช้งาน",
		admin_repository_redaction_role_avail_groups: "กลุ่มที่พร้อมใช้งาน",
		admin_repository_redaction_role_selected_editors: "เอดิเตอร์การเขียนที่เลือกไว้",
		admin_repository_redaction_role_selected_users_groups: "ผู้ใช้และกลุ่มที่เลือกไว้",
		admin_repository_redaction_role_add_editor: "เอดิเตอร์ใหม่...",
		admin_repository_redaction_role_access_type: "การเข้าถึง",
		admin_repository_redaction_role_access_type_access: "อนุญาต",
		admin_repository_redaction_role_access_type_no_access: "ปฏิเสธ",
		admin_repository_redaction_role_users: "ผู้ใช้",
		admin_repository_redaction_role_groups: "จัดกลุ่ม",
		admin_repository_redaction_role_editors: "เอดิเตอร์",
		admin_delete_confirmation_redaction_roles: "คุณต้องการลบบทบาทการเขียนที่เลือกไว้หรือไม่?",
		admin_repository_edit_redaction_role: "บทบาทการเขียน: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "การเข้าถึงดีฟอลต์",
		// RBA
		desktop_user_group_acl: "ผู้ดูแลระบบเดสก์ท็อป",
		desktop_user_group_remove: "ลบ",
		desktop_rba_membership: "การเป็นสมาชิก:",
		desktop_rba_membership_list_label: "ชื่อ",
		admin_repository_redaction_policy_hover: "จัดเตรียมคำอธิบายที่จะช่วยให้ผู้ใช้สามารถแยกความแตกต่างระหว่างนโยบายนี้และนโยบายอื่น",
		admin_repository_new_redaction_policy: "นโยบายการเขียนใหม่",
		admin_repository_policy_name: "ชื่อนโยบาย",
		admin_repository_reason_redactions: "เหตุผลในการเขียน:",
		admin_repository_role_editors: "เอดิเตอร์",
		admin_repository_role_viewers: "วิวเวอร์",
		admin_repository_redaction_policy_instruction: "คุณสามารถสร้างนโยบายการเขียน เพื่อเชื่อมโยงเหตุผลในการเขียนที่เลือกไว้กับทั้งเอดิเตอร์การเขียนและวิวเวอร์การเขียน",
		admin_repository_redaction_reasons_hover: "เลือกข้อมูลที่ละเอียดอ่อนหนึ่งชนิดขึ้นไป ซึ่งคุณต้องการให้ผู้ใช้ส่วนใหญ่สามารถมองเห็นได้ ตัวอย่างเช่น ข้อมูลที่สามารถระบุตัวบุคคลได้ ความลับทางการค้า หรือข้อมูลซึ่งเป็นความลับหรือเป็นกรรมสิทธิ์ของบริษัทของคุณ",
		admin_repository_readaction_available_reasons: "เหตุผลที่พร้อมใช้งาน",
		admin_repository_readaction_selected_reasons: "เหตุผลที่เลือกไว้",
		admin_repository_readaction_new_reason: "เหตุผลใหม่...",
		admin_repository_redeaction_reasons: "เหตุผลในการเขียน:",
		admin_repository_readaction_editor_permmission: "เอดิเตอร์การเขียน:",
		admin_repository_redaction_editors_hover: "เลือกบทบาทที่สามารถสร้าง และปรับเปลี่ยนการเขียนสำหรับเหตุผลที่เลือกไว้",
		admin_repository_readaction_new_editor_role: "บทบาทเอดิเตอร์ใหม่...",
		admin_repository_readaction_available_editors: "บทบาทเอดิเตอร์ที่พร้อมใช้งาน",
		admin_repository_readaction_selected_editors: "บทบาทเอดิเตอร์ที่เลือกไว้",
		admin_repository_readaction_viewer_permmission: "วิวเวอร์การเขียน:",
		admin_repository_redaction_viewers_hover: "เลือกบทบาทที่สามารถดูข้อมูลที่ละเอียดอ่อนสำหรับเหตุผลที่เลือกไว้ ไม่ใช้การเขียนสำหรับผู้ใช้และกลุ่มที่มีบทบาทนี้",
		admin_repository_readaction_new_viewer_role: "บทบาทวิวเวอร์ใหม่...",
		admin_repository_readaction_available_viewers: "บทบาทวิวเวอร์ที่พร้อมใช้งาน",
		admin_repository_readaction_selected_viewers: "บทบาทวิวเวอร์ที่เลือกไว้",
		admin_repository_reason_redactions_header: "เหตุผลในการเขียน",
		admin_delete_confirmation_redaction_policy: "คุณต้องการลบนโยบายการเขียนที่เลือกไว้หรือไม่?",
		admin_role_type_repository: "ที่เก็บ",
		admin_role_type_administrator: "ผู้ดูแลระบบ",
		admin_role_type_template: "เท็มเพลต",
		admin_role_type_teamspace: "Teamspace",
		admin_role_type_author: "เอดิเตอร์",
		admin_role_type_user: "ผู้ดู",
		admin_collaboration_services_instructions: "หากคุณมี  IBM Connections และเว็บแอ็พพลิเคชัน FileNet Collaboration Services, คุณสามารถกำหนดคอนฟิก Teamspace ชุมชนและสตรีมกิจกรรมสำหรับที่เก็บ",
		admin_collaboration_services: "เซอร์วิสการทำงานร่วมกันกับ FileNet:",
		admin_collaboration_community: "คอนฟิกูเรชันไลบรารีชุมชน",
		admin_collaboration_community_instruction: "คุณสามารถกำหนดคอนฟิกหนึ่งที่เก็บในโดเมน IBM FileNet P8 ของคุณเพื่อเก็บไลบรารีชุมชน IBM Connections (ซึ่งเรียกว่า Teamspace) เมื่อผู้ใช้สร้างไลบรารีชุมชนผ่าน IBM Connections, ไลบรารีชุมชนถูกเก็บอยู่บนที่เก็บที่ถูกกำหนดไว้เป็นที่เก็บไลบรารีชุมชน",
		admin_collaboration_community_teamspaces: "ใช้ที่เก็บนี้สำหรับไลบรารีชุมชน:",
		admin_collaboration_community_teamspaces_hover: "คุณสามารถใช้ได้เพียงหนึ่งที่เก็บในโดเมน IBM FileNet P8 ของคุณเพื่อเก็บไลบรารีชุมชนใหม่ หากคุณเปิดใช้งานที่เก็บนี้และคุณมีที่เก็บอยู่ก่อนแล้ว, ที่เก็บที่มีอยู่จะถูกปิดใช้งาน อย่างไรก็ตาม, ไลบรารีที่มีอยู่เดิมจะยังคงอยู่บนที่เก็บปัจจุบัน",
		admin_collaboration_connections_anonymous: "อนุญาตให้ใช้การเข้าถึงแบบไม่ระบุชื่อเพื่อเผยแพร่เนื้อหา:",
		admin_collaboration_connections_anonymous_hover: "หากเซิร์ฟเวอร์ IBM Connections ของคุณมีชุมชนแบบพับลิกหรือชุมชนแบบควบคุม, คุณสามารถกำหนดคอนฟิกเซอร์วิสการทำงานร่วมกันกับ FileNet เพื่ออนุญาตให้ผู้ใช้เรียกดูและดาวน์โหลดเนื้อหาจากไลบรารีในชุมชนเหล่านั้นโดยไม่ต้องล็อกอินก่อน<br><br>ผู้ใช้ที่มีสิทธิเข้าถึงไลบรารีชุมชนแบบไม่ระบุชื่อไม่สามารถสร้าง, ปรับเปลี่ยน, หรือลบเนื้อหาได้<br><br><b>สิ่งสำคัญ:</b> คุณต้องกำหนดให้ผู้ใช้ IBM FileNet P8 LDAP เป็นผู้ใช้แบบไม่ระบุชื่อและกำหนดคอนฟิกผู้ใช้ด้วยบทบาท <b>Anonymous</b> ใน WebSphere Application Server",
		admin_collaboration_connections_url: "IBM Connections URL:",
		admin_collaboration_connections_url_hover: "ระบุ URL ไปยังเซิร์ฟเวอร์ IBM Connections ของคุณด้วยรูปแบบ http://IBMConnectionsServer:port_number  หากกำหนดคอนฟิก IBM Connections ไว้เพื่อใช้ IBM HTTP Server, คุณสามารถละเว้นหมายเลขพอร์ตจาก URL<br><br>URL ต้องสามารถเข้าถึงได้กับผู้ใช้ IBM Connections เนื่องจากนี่คือลิงก์ที่ FileNet Collaboration Services ใช้เพื่อสร้างลิงก์ไปยังเอกสารที่จัดพื้นที่เพจใน IBM Connections",
		admin_collaboration_connections_url_http_use: "ใช้ IBM Connections URL",
		admin_collaboration_connections_url_https_use: "ใช้ IBM Connections HTTPS URL",
		admin_collaboration_connections_url_specify: "ระบุ URL",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "หากกำหนดคอนฟิก IBM Connections เพื่อใช้ SSL, ให้ระบุ HTTPS URL ไปยังเซิร์ฟเวอร์ IBM Connections ของคุณด้ายรูปแบบ https://IBMConnectionsServer:port_number  หากกำหนดคอนฟิก IBM Connections ไว้เพื่อใช้ IBM HTTP Server, คุณสามารถละเว้นหมายเลขพอร์ตจาก URL",

		admin_collaboration_connections_gadget_url: "URL แก็ตเจ็ตของ IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL การดึงข้อมูล IBM Connections:",
		admin_collaboration_connections_security: "ผู้ดูแลระบบชุมชน:",
		admin_collaboration_connections_security_hover: "ระบุผู้ใช้หรือกลุ่มที่สามารถดูแลจัดการเนื้อหาในไลบรารีชุมชนได้<br><br>ผู้ดูแลระบบโกลบอลสามารถสร้าง, ปรับเปลี่ยน, ลบ และจัดเตรียมสิทธิเข้าถึงไลบรารีชุมชนและเนื้อหาของไลบรารีชุมชน เมื่อคุณระบุผู้ใช้เป็นผู้ดูแลระบบโกลบอล, ผู้ใช้จะได้รับสิทธิพิเศษ ClbGlobalAdministrator ในที่เก็บ<br><br>ผู้ดูแลระบบการตรวจทานแบบโกลบอลสามารถอนุมัติและปฏิเสธเนื้อหาที่อยู่ภายใต้การตรวจทานสำหรับการเผยแพร่ในไลบรารีชุมชน เมื่อคุณระบุผู้ใช้เป็นผู้ดูแลระบบการตรวจทานแบบโกลบอล, ผู้ใช้จะได้รับสิทธิพิเศษ ClbGloablReviewAdministrator ในที่เก็บ",

		admin_collaboration_connections_admins: "ผู้ดูแลระบบโกลบอล",
		admin_collaboration_connections_admins_review: "ผู้ดูแลระบบการตรวจทานแบบโกลบอล",
		admin_collaboration_connections_seedlist: "ดัชนีเนื้อหาไลบรารีชุมชน:",
		admin_collaboration_connections_seedlist_hover: "ระบุว่าคุณต้องการให้ IBM Connections ทำ crawl ไลบรารีชุมชนในที่เก็บเพื่อสร้างดัชนีการค้นหา การสร้างดัชนีอาจมีผลต่อประสิทธิภาพการทำงานของที่เก็บ<br><br>หากติดตั้ง Social Collaboration Search Indexing Extensions ไว้บนที่เก็บ, อ็อพชันี้จะถูกเปิดใช้งานตามค่าดีฟอลต์ หากไม่ได้ติดตั้ง Social Collaboration Search Indexing Extensions บนที่เก็บ, add-on จะถูกติดตั้งบนที่เก็บเมื่อคุณเปิดใช้งานอ็อพชันนี้",
		admin_collaboration_activity_stream: "คอนฟิกูเรชัน Activity Stream Event",
		admin_collaboration_activity_stream_label: "ส่งข้อมูลเหตุการณ์ไปยัง IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "ระบุว่าคุณต้องการส่งข้อมูลเหตุการณ์, เช่น การสร้างเอกสาร, เช็กเอาต์, เช็กอิน, ข้อคิดเห็น, แท็ก, และแบ่งใช้, กับ IBM Connections<br><br><b>สิ่งสำคัญ:</b> การส่งการแจ้งเตือนไปยัง IBM Connections อาจมีผลต่อประสิทธิภาพของที่เก็บ",

		admin_collaboration_activity_stream_instruction: "คุณสามารถกำหนดคอนฟิกที่เก็บนี้เพื่อส่งข้อมูลเหตุการณ์, เช่น ข้อคิดเห็น และการอนุมัติเอกสาร, ไปยัง IBM Connections เหตุการณ์จะถูกแสดงบนเพจ <b>อัพเดตล่าสุด</b> ใน IBM Connections communities ",
		admin_collaboration_activity_stream_ignored_ids: "ละเว้นข้อมูลเหตุการณ์สำหรับผู้ใช้และกลุ่มที่ระบุเฉพาะ:",
		admin_collaboration_activity_stream_ignored_ids_hover: "คุณสามารถละเว้นเหตุการณ์ที่ถูกสร้างขึ้นโดยผู้ใช้หรือกลุ่มที่ระบุเฉพาะ, เช่น ผู้ดูแลระบบหรือแอคเคาต์ระบบ, เพื่อลดจำนวนการแจ้งเตือนที่ผู้ใช้มองเห็น ตัวอย่างเช่น, หากคุณกำลังโอนย้ายเนื้อหา, คุณอาจต้องการระบุว่า เหตุการณ์ที่สร้างขึ้นโดยแอคเคาต์ซึ่งใช้สำหรับการโอนย้ายถูกละเว้น",
		admin_collaboration_activity_stream_userid: "ชื่อผู้ใช้ IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "ระบุว่าแอ็คเคาต์ระบบที่ Content Platform Engine จะใช้เพื่อพิสูจน์ตัวตนและส่งข้อมูลเหตุการณ์ไปยัง IBM Connections ผู้ใช้ต้องอยู่ในบทบาท <b>trustedExternalApplication</b> ในแอ็พพลิเคชัน Widget Container ใน IBM Connections<br><br><b>เคล็ดลับ:</b> ตามค่าดีฟอลต์แล้ว, ผู้ดูแลระบบ IBM Connections มีสิทธิพิเศษที่เหมาะสม คุณสามารถใช้ ID ผู้ดูแลระบบเป็นชื่อผู้ใช้ได้",
		admin_collaboration_activity_stream_password: "รหัสผ่านผู้ใช้ IBM Connections:",

		admin_help_url: "URL วิธีใช้ของผู้ใช้:",
		admin_help_url_hover: "<b>หมายเหตุสำคัญ:</b> IBM Knowledge Center Customer ที่ติดตั้งจะไม่ถูกอัพเดตสำหรับ IBM Content Navigator เวอร์ชัน 3.0.0 โปรดติดต่อฝ่ายบริการลูกค้าสำหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีใช้ที่กำหนดเอง<br><br>สำหรับ IBM Content Navigator เวอร์ชัน 3.0.0 URL สำหรับวิธีใช้ของผู้ใช้ขั้นปลายไปยัง IBM Knowledge Center URL สำหรับ IBM Knowledge Center คือ: http://www.ibm.com/support/knowledgecenter<br><br>หากคุณต้องการใช้เวอร์ชันก่อนหน้าของ IBM Knowledge Center Customer ที่ติดตั้ง ให้ระบุ URL ของอินสแตนซ์ของ IBM Knowledge Center Customer ที่ติดตั้งซึ่งถูกใช้งานโดย IBM Content Navigator Configuration and Deployment Tool URL ต้องสามารถเข้าถึงได้กับเครื่องไคลเอ็นต์ URL มีรูปแบบเป็น http://server_name:port_number/kc<br><br>คุณสามารถขอรับชื่อเซิร์ฟเวอร์และหมายเลขพอร์ตได้จากไฟล์ console.log ในไดเร็กทอรีย่อย KnowledgeCenter/logs ของไดเร็กทอรีการติดตั้ง IBM Content Navigator",

		admin_help_default: "ใช้วิธีใช้ที่เป็นค่าดีฟอลต์ที่จัดเตรียมไว้โดย IBM",
		admin_custom_help: "ใช้ระบบวิธีใช้แบบกำหนดเอง",
		admin_help_kc: "ใช้วิธีใช้แบบกำหนดเองใน IBM Knowledge Center Customer ที่ติดตั้งไว้",
		admin_help_kc_hover: "<b>หมายเหตุสำคัญ:</b> IBM Knowledge Center Customer ที่ติดตั้งจะไม่ถูกอัพเดตสำหรับ IBM Content Navigator เวอร์ชัน 3.0.0 โปรดติดต่อฝ่ายบริการลูกค้าสำหรับข้อมูลเพิ่มเติมเกี่ยวกับวิธีใช้ที่กำหนดเอง<br><br>หากคุณต้องการใช้เวอร์ชันก่อนหน้าของ IBM Knowledge Center Customer ที่ติดตั้ง ให้ระบุ option ของอินสแตนซ์ของ IBM Knowledge Center Customer ที่ติดตั้งซึ่งถูกใช้งานโดย IBM Content Navigator Configuration and Deployment Tool",
		admin_help_taxonomy: "รหัส Taxonomy:",
		admin_help_taxonomy_hover: "ระบุรหัส taxonomy สำหรับวิธีใช้แบบกำหนดเองของคุณ<br><br>รหัส taxonomy สำหรับ IBM Content Navigator คือ SSEUEX หากคุณต้องการแสดงวิธีใช้ของคุณภายใต้ชื่อผลิตภัณฑ์ที่แตกต่างกันใน IBM Knowledge Center Customer ที่ติดตั้งไว้ คุณต้องเพิ่มรหัส taxonomy เฉพาะให้กับไฟล์ KC_taxonomy.ditamap ในไดเร็กทอรี KnowledgeCenter/usr/taxonomy ของไดเร็กทอรีการติดตั้ง IBM Content Navigator",
		admin_help_context: "บริบทวิธีใช้:",
		admin_help_context_hover: "ระบุบริบทสำหรับวิธีใช้แบบกำหนดเอง<br><br>วิธีใช้สำหรับ IBM Content Navigator อยู่ในไดเร็กทอรี KnowledgeCenter/usr/content/com.ibm.usingeuc.doc ของไดเร็กทอรีการติดตั้ง IBM Content Navigator บริบทของวิธีใช้ดีฟอลต์คือ com.ibm.usingeuc.doc หากคุณต้องการเตรียมวิธีใช้แบบกำหนดเอง ให้เพิ่มเนื้อหาไปยังไดเร็กทอรีย่อยในไดเร็กทอรี KnowledgeCenter/usr/content/",
		admin_help_welcome: "การจัดพื้นที่เพจ:",
		admin_help_welcome_hover: "ระบุชื่อของหัวข้อที่คุณต้องการใช้เป็นการจัดพื้นที่เพจเมื่อผู้ใช้เข้าถึงวิธีใช้ คุณต้องสร้างไฟล์คุณสมบัติที่ระบุตำแหน่งของการจัดพื้นที่เพจและเพิ่มไฟล์คุณสมบัติไปยังไดเร็กทอรี KnowledgeCenter/usr/conf ของไดเร็กทอรีการติดตั้ง IBM Content Navigator",

		admin_settings_mimetype_extensions_jsonfile: "Mime Type Extensions JSON File:",
		admin_settings_mimetype_extensions_jsonfile_hover: "ตรวจสอบชื่อไฟล์ JSON และพาธไปยังไฟล์แบบเต็ม ไฟล์สามารถเป็นไฟล์ทั่วไปที่มีอยู่ในระบบไฟล์หรือ URL ที่ชี้ไปยังไฟล์ JSON  <br><br>เนื้อหาไฟล์ JSON เป็นอาร์เรย์สำหรับนิยามชนิด mime <br><br>นิยามชนิด Mime ประกอบด้วยคีย์สี่ตัว \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\" คีย์สองตัวแรก \"mimeTypes\", \"extensions\" จำเป็นต้องมี และคีย์เหล่านี้สามารถเป็นอาร์เรย์แบบสตริงที่คั่นด้วย \",\" คีย์สองตัวสุดท้าย \"fileType\", \"iconName\" เป็นตัวเลือก <br><br>ตัวอย่างเช่น: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Task Manager Configuration",
		admin_taskmanager_service: "เซอร์วิส Task manager:",
		admin_taskmanager_service_hover: "ระบุว่าคุณต้องการใช้เซอร์วิส task manager เพื่อสร้างและรันภารกิจอะซิงโครนัส <br><br>ถ้าคุณเปลี่ยนการตั้งค่านี้ คุณต้องรีสตาร์ทเว็บแอ็พพลิเคชัน IBM Content Navigator เพื่อให้การเปลี่ยนแปลงมีผล",
		admin_taskmanager_url: "URL เซอร์วิส Task manager:",
		admin_taskmanager_url_hover: "ระบุ URL ที่แอ็พพลิเคชันอื่นสามารถสื่อสารกับเซอร์วิส task manager URL มีรูปแบบเป็น  http://server_name:port_number/taskManagerWeb/api/v1",
		admin_taskmanager_logdirectory: "ไดเร็กทอรีไฟล์บันทึก Task manager:",
		admin_taskmanager_logdirectory_hover: "โดยดีฟอลต์ล็อกไฟล์สำหรับเซอร์วิส task manager ถูกเขียนไปที่ไดเร็กทอรีเดียวกับล็อกไฟล์เซิร์ฟเวอร์เว็บแอ็พพลิเคชัน <br><br>ถ้าคุณต้องการให้ข้อมูลการบันทึกเขียนไปที่ไดเร็กทอรีอื่นบนเซิร์ฟเวอร์ IBM Content Navigator ให้ระบุพาธแบบเต็มของไดเร็กทอรีที่คุณต้องการเก็บล็อกไฟล์ที่ถูกสร้างโดยคอมโพเนนต์ task manager <br><br>ถ้าคุณเปลี่ยนการตั้งค่านี้ คุณต้องรีสตาร์ทเว็บแอ็พพลิเคชัน IBM Content Navigator เพื่อให้การเปลี่ยนแปลงมีผล",
		admin_taskmanager_heartBeatMonitor: "การมอนิเตอร์ Cluster heartbeat",
		admin_taskmanager_heartBeatMonitor_hover: "ใช้งานได้ในสภาวะแวดล้อมคลัสเตอร์เท่านั้น ถ้าคุณเปิดใช้งานอ็อพชันนี้เซอร์วิส task manager จะส่งภารกิจจากโหนดที่ปิดอยู่ไปที่โหนดที่รันอยู่ในปัจจุบัน <br><br>ถ้าคุณเปลี่ยนการตั้งค่านี้ คุณต้องรีสตาร์ทเว็บแอ็พพลิเคชัน IBM Content Navigator เพื่อให้การเปลี่ยนแปลงมีผล",

		admin_syncserver_title: "คอนฟิกูเรชันเซิร์ฟเวอร์ซิงค์",
		admin_syncserver_enable: "เซอร์วิสซิงค์:",
		admin_syncserver_enable_hover: "ระบุว่าคุณต้องการให้ผู้ใช้ที่เข้าถึงเดสก์ท็อปนี้สามารถซิงโครไนซ์รายการของตนระหว่างเวิร์กสเตชันและอุปกรณ์มือถือหรือไม่<br><br><b>สิ่งสำคัญ:</b> เมื่อต้องการใช้คุณลักษณะนี้ คุณต้องทำภารกิจต่อไปนี้ให้เสร็จสิ้น:<ul><li>ระบุ <b>URL แบบพับลิกของเซอร์วิสซิงค์</b> ในส่วน <b>เซอร์วิสซิงค์</b> ของเครื่องมือการดูแลจัดการระบบ</li><li>เพิ่มที่เก็บที่เซอร์วิสซิงค์ต้องถูกเปิดใช้งานในเดสก์ท็อปนี้</li></ul>หากคุณปิดใช้งานอ็อพชันนี้แต่เพิ่มที่เก็บที่เซอร์วิสซิงค์ถูกเปิดใช้งานกับเดสก์ท็อปนี้ ค่าติดตั้งบนที่เก็บจะถูกละทิ้ง",
		admin_mobileqr_enable: "แสดงโค้ด IBM Navigator QR บนเพจล็อกอิน:",
		admin_mobileqr_enable_hover: "เปิดใช้งานอ็อพชันนี้หากคุณต้องการแสดงโค้ด QR สำหรับโมบายล์แอ็พพลิเคชัน IBM Navigator บนเพจล็อกอินเว็บไคลเอ็นต์<br><br>เมื่อผู้ใช้สแกนโค้ด QR พวกเขาควรใช้ app store ที่เหมาะสมกับอุปกรณ์ของพวกเขา ซึ่งพวกเขาสามารถดาวน์โหลดโมบายล์แอ็พพลิเคชัน IBM Navigator",

		admin_streamlineservice_enable: "แก้ไขเซอร์วิส:",
		admin_streamlineservice_enable_hover: "เฉพาะผู้ใช้ FileNet P8 เท่านั้น เปิดใช้งานอ็อพชันนี้หากคุณต้องการให้ผู้ใช้งานเดสก์ท็อปสามารถเพิ่มและแก้ไขเอกสารได้อย่างง่ายดายจากแอ็พพลิเคชันเนทีฟบนเวิร์กสเตชันของพวกเขา <br><br>เมื่อต้องการใช้ค่าติดตั้งนี้ คุณต้อง: <ul><li>เปิดใช้งานการแก้ไขเซอร์วิสบนที่เก็บตั้งแต่หนึ่งที่ขึ้นไปซึ่งเชื่อมโยงกับเดสก์ท็อปนี้</li><li>ติดตั้งไคลเอ็นต์ IBM Content Navigator Edit บนเวิร์กสเตชันของผู้ใช้</li></ul>",

		admin_repository_general_instructions: "คุณต้องเชื่อมต่อกับที่เก็บก่อนที่คุณจะกำหนดคอนฟิกพารามิเตอร์ คุณสมบัติระบบ โฟลเดอร์ และอื่นๆ",
		admin_repository_system_instructions: "ระบุว่าคุณสมบัติระบบใดจะถูกแสดงสำหรับเอกสาร และโฟลเดอร์บนที่เก็บนี้",

		admin_desktop_general_create_instructions: "เดสก์ท็อปจะกำหนดสิ่งที่ผู้ใช้สามารถเห็นและทำได้เมื่อผู้ใช้ล็อกอินเข้าสู่เว็บไคลเอ็นต์ หลังจากที่คุณสร้างเดสก์ท็อป คุณสามารถส่ง URL ของเดสก์ท็อปให้กับผู้ใช้ที่สามารถเข้าถึงเดสก์ท็อป",
		admin_desktop_admin_instructions: "เดสก์ท็อปการจัดการจะถูกจัดเตรียมกับเว็บไคลเอ็นต์เพื่อให้ผู้ใช้การจัดการสามารถตั้งค่าเว็บไคลเอ็นต์ เดสก์ท็อปนี้สามารถเข้าถึงที่เก็บทั้งหมดที่กำหนดคอนฟิกไว้สำหรับเว็บไคลเอ็นต์",
		admin_desktop_repositories_instructions: "ระบุที่เก็บที่คุณต้องการให้ผู้ใช้เข้าถึงจากเดสก์ท็อปนี้ คุณต้องกำหนดคอนฟิกที่เก็บของคุณก่อนที่คุณจะสามารถเพิ่มเข้ากับเดสก์ท็อป<br><br><b>เคล็ดลับ:</b> คุณสามารถจำกัดที่เก็บที่พร้อมใช้งานสำหรับแต่ละคุณลักษณะได้เมื่อคุณกำหนดคอนฟิกโครงร่างเดสก์ท็อป",
		admin_desktop_menus_instructions: "ระบุเมนูที่คุณต้องการให้ผู้ใช้เข้าถึงจากเดสก์ท็อปนี้ เมนูจะระบุแอ็คชันที่พร้อมใช้งานขึ้นอยู่กับสิ่งที่คุณเลือกในอินเตอร์เฟส<br><br><b>เคล็ดลับ:</b> คุณสามารถกำหนดเนื้อหาของเมนูได้เองในส่วน <b>เมนู</b> ของเครื่องมือ การจัดการ หรือคุณสามารถสร้างเมนูชนิดใหม่ได้โดยการสร้างเนื้อหา",

		admin_desktop_no_repositories: "ไม่มีที่เก็บที่กำหนดค่าไว้",

		admin_desktop_id_hover: "ID เดสก์ท็อปจะถูกรวมใน URL ของเว็บไคลเอ็นต์ที่เดสก์ท็อปถูกเปิดเมื่อผู้ใช้ล็อกอินเข้าสู่เว็บไคลเอ็นต์ ID ต้องไม่ซ้ำกัน และคุณไม่สามารถเปลี่ยน ID ได้หลังจากที่คุณบันทึกเดสก์ท็อปแล้ว<br><br>ID สามารถมีได้เฉพาะอักขระแบบตัวอักษรและตัวเลข และเป็นแบบคำนึงถึงชนิดตัวพิมพ์เล็กหรือใหญ่",
		admin_desktop_id_disabled_hover: "ID เดสก์ท็อปไม่สามารถเปลี่ยนได้ ถ้าคุณต้องการใช้ ID อื่น คุณต้องสร้างเดสก์ท็อปใหม่",
		admin_desktop_name_hover: "ชื่อเดสก์ท็อปต้องไม่มีอักขระต่อไปนี้: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "คอนฟิกูเรชันของคุณสามารถมีได้เพียงหนึ่งเดสก์ท็อปดีฟอลต์",

		admin_repository_id_disabled_hover: "ID ที่เก็บไม่สามารถเปลี่ยนได้ ถ้าคุณต้องการใช้ ID อื่น คุณต้องสร้างการเชื่อมต่อที่เก็บใหม่",
		admin_printService_enable: "พิมพ์โดยใช้เซอร์วิสการพิมพ์ของ IBM Daeja ViewONE:",
		admin_printService_enable_hover: "ถ้าคุณเลือกเปิดใช้งานเซอร์วิสการพิมพ์ IBM Daeja ViewONE เอกสารจะถูกแปลงให้เป็นรูปแบบ PDF และสามารถพิมพ์ได้จากเว็บเบราว์เซอร์ทุกแบบ<br><br>หากคุณเลือกปิดใช้งานเซอร์วิสการพิมพ์ของ IBM Daeja ViewONE คุณอาจถูกจำกัดในการพิมพ์เอกสารเฉพาะในเว็บเบราว์เซอร์ที่สนับสนุน Java applets เท่านั้น  เว็บเบราว์เซอร์บางส่วนไม่สนับสนุน Java applets ดังนั้นจึงไม่สนับสนุนแอ็พเพล็ตการพิมพ์ด้วยเช่นกัน<br><br>โปรดดูเอกสารคู่มือสำหรับเบราว์เซอร์ที่สนับสนุน",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "ไดเร็กทอรีโฮมของผู้ใช้",
		admin_file_tracking_doc_directory_my_documents: "ไดเร็กทอรีเอกสารของผู้ใช้",
		admin_file_tracking_doc_directory_qp: "พาธที่ระบุ",
		admin_file_tracking_section_tile: "คอนฟิกูเรชันการติดตามไฟล์",
		admin_file_tracking_home_path: "พาธหลัก",
		admin_file_tracking_my_documents: "เอกสารของฉัน",
		admin_file_tracking_exact_path: "พาธที่ถูกต้อง:",
		admin_file_tracking_qp: "พาธที่ระบุ",
		admin_file_tracking_ev: "ตัวแปรสภาวะแวดล้อม",
		admin_file_tracking_ev_us: "ตัวแปรสภาวะแวดล้อมแบบกำหนดเอง ",
		admin_file_tracking_del_local_copy: "ลบการคัดลอกโลคัล:",
		admin_file_tracking_yes: "ใช่",
		admin_file_tracking_no: "ไม่",
		admin_file_tracking_del_local_copy_rt_state_editable: "อนุญาตให้ผู้ใช้ลบล้างการตั้งค่านี้",
		admin_file_tracking_del_local_copy_rt_state1: "ใช่",
		admin_file_tracking_del_local_copy_rt_state2: "ไม่",
		admin_file_Tracking_label: "การติดตามไฟล์:",
		admin_file_Tracking_disable: "ปิดใช้งาน",
		admin_file_Tracking_enable: "เปิดใช้งาน",
		admin_file_tracking_label_hover_help: "การติดตามไฟล์ใช้แอ็พเพล็ตเพื่อเช็กเอาต์และดาวน์โหลดเอกสารไปยังไดเร็กทอรีที่ระบุเฉพาะบนเครื่องของผู้ใช้ แอ็พเพล็ตยังเช่วย IBM Content Navigator ในการค้นหาเอกสารบนเครื่องของผู้ใช้เมื่อผู้ใช้เช็กอินเอกสาร",
		admin_file_tracking_doc_directory: "ตำแหน่งหน่วยเก็บข้อมูล:",
		admin_file_tracking_open_file: "เปิดไฟล์แบบอัตโนมัติ",
		admin_file_Tracking_append_qualified_path: "เพิ่มไดเร็กทอรี",
		admin_file_Tracking_append_qualified_path_hover_help: "คุณสามารถเพิ่มไดเร็กทอรีไปยังส่วนท้ายของตัวแปรสภาวะแวดล้อมหากคุณต้องการให้เอกสารบันทึกไปยังไดเร็กทอรีย่อยที่ระบุเฉพาะ <br/><br/>ตัวอย่างเช่น, คุณสามารถระบุให้ดาวน์โหลดเอกสารไปยังไดเร็กทอรี <i>EnterpriseDocuments</i> ภายในไดเร็กทอรีโฮมของผู้ใช้",
		admin_file_Tracking_append_ev: "ผนวกตัวแปรสภาวะแวดล้อม",
		admin_file_Tracking_append_ev_hover_help: "คุณสามารถเพิ่มตัวแปรสภาวะแวดล้อมหากคุณต้องการให้เอกสารบันทึกลงในไดเร็กทอรีที่ระบุเฉพาะแบบไดนามิก, เช่น ไดเร็กทอรีผู้ใช้<br/><br/>ตัวอย่างเช่น, คุณสามารถระบุให้เก็บเอกสารนั้นในไดเร็กทอรีย่อย <i>user_name</i> บนไดเร็กทอรีเครือข่ายทีแบ่งใช้ ",
		admin_file_tracking_doc_directory_hover_help: "ระบุเอกสารที่ควรถูกเก็บเมื่อเช็กเอาต์และดาวน์โหลดเอกสารเหล่านั้น<br/><br/> <b>เคล็ดลับ</b>: หากคุณต้องการเก็บเอกสารในไดเร็กทอรีโฮมของผู้ใช้หรือไดเร็กทอรีเอกสารที่เป็นค่าดีฟอลต์, ให้เลือก <b>ตัวแปรสภาวะแวดล้อม</b>, ซึ่งประกอบด้วยตัวแปรที่นิยามไว้ล่วงหน้าซึ่งชี้ไปยังตำแหน่งเหล่านั้น",
		admin_file_tracking_qualified_path_hover_help: "ใช้โครงสร้างไดเร็กทอรีที่เหมาะสมสำหรับระบบปฏิบัติการ Windows หรือ Mac ของคุณเพื่อระบุไดเร็กทอรีหรือไดเร็กทอรีเครือข่ายที่คุณต้องการเก็บเอกสาร <ul><li>สำหรับ Windows, ให้สอดแทรกตัวอักษรแสดงไดรฟ์ในพาธ, เช่น C:\\Enterprise Documents</li><li>สำหรับไดเร็กทอรีเครือข่ายที่แบ่งใช้, ให้ป้อนพาธที่มีรูปแบบ \\\\servername\\directory</li></ul><br/><b>สิ่งสำคัญ:</b> เมื่อต้องการใช้อ็อพชันนี้ โครงสร้างไดเร็กทอรีที่คุณระบุต้องสามารถถูกสร้างบนไคลเอ็นต์เวิร์กสเตชันทั้งหมดในสภาวะแวดล้อมของคุณ",
		admin_file_tracking_environment_variable_path_hover_help: "ใช้ตัวแปรสภาวะแวดล้อมที่เหมาะสมสำหรับระบบปฏิบัติการ Windows หรือ Mac ของคุณเพื่อระบุไดเร็กทอรีหรือไดเร็กทอรีเครือข่ายที่คุณต้องการเก็บเอกสาร <br/><br/>อ็อพชัน <b>ไดเร็กทอรีโฮมของผู้ใช้</b> เก็บเอกสารในไดเร็กทอรีต่อไปนี้:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>อ็อพชัน <b>ไดเร็กทอรีเอกสารของผู้ใช้</b> เก็บเอกสารในไดเร็กทอรีต่อไปนี้:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "ระบุว่าให้ลบสำเนาโลคัลของเอกสารเมื่อผู้ใช้เพิ่มหรือเช็กอินเอกสารไปยังที่เก็บ<br/><br/>การลบสำเนาโลคัลช่วยคุณ:<br/><ul><li>บังคับใช้นโยบายที่สอดคล้องกับ IT</li><li>มั่นใจได้ว่าผู้ใช้กำลังทำงานกับเวอร์ชันล่าสุดของเอกสาร</li></ul><br/><b>ข้อจำกัด:</b> การตั้งค่านี้ไม่ถูกใช้เมื่อผู้ใช้เพิ่มเอกสารโดยการลากแล้วปล่อย<br/><br/>สำหรับ IBM Content Navigator สำหรับ Microsoft Office คุณต้องเลือก <b>ลบโลคัลไฟล์เมื่อผู้ใช้เพิ่มหรือเช็กอินเอกสารหรือยกเลิกการเช็กเอาต์</b> ในส่วน <b>Office Configuration</b> ของเดสก์ท็อป",
		admin_file_tracking_open_file_hover_help: "ค่าติดตั้งนี้ลบล้างการกำหนดค่าตามความชอบในการจัดการกับเอกสารใดๆ ที่ถูกกำหนดคอนฟิกไว้ในเว็บเบราว์เซอร์ของผู้ใช้ </br></br><b>ข้อจำกัด:</b> การตั้งค่านี้ไม่ถูกใช้โดย IBM Content Navigator สำหรับ Microsoft Office",
		admin_file_tracking_over_write_file: "เขียนทับสำเนาโลคัล:",
		admin_file_tracking_over_write_file_hover_help: "ระบุว่าให้เขียนทับสำเนาโลคัลของเอกสารเมื่อผู้ใช้เช็กเอาต์เอกสารที่อยู่นอกที่เก็บ <br/><br/>การเขียนทับสำเนาโลคัลช่วยคุณ:<br/><ul><li>มั่นใจได้ว่าผู้ใช้กำลังทำงานกับเวอร์ชันล่าสุดของเอกสาร</li><li>ปกป้องผู้ใช้จากการมองเห็นพร้อมต์เมื่อมีสำเนาโลคัลอยู่</li></ul> </br></br><b>ข้อจำกัด:</b>  การตั้งค่านี้ไม่ถูกใช้โดย IBM Content Navigator สำหรับ Microsoft Office ถ้าคุณเลือก <b>อนุญาตให้ผู้ใช้แทนที่การตั้งค่านี้</b>",
		admin_file_tracking_over_write_file_state_editable: "อนุญาตให้ผู้ใช้ลบล้างการตั้งค่านี้",
		admin_file_tracking_inline_help: "ไฟล์การติดตามการสตรีมไลน์ที่กระบวนการตรวจสอบเอกสารอยู่ภายนอกและอยู่ในที่เก็บ ซึ่งยังช่วยคุณจัดการกับวิธีการเก็บเอกสารต่างๆ บนเครื่องของผู้ใช้ <br/><br/>นอกจากนี้, ไฟล์การติดตามช่วยติดตามเอกสารในคอมโพเนนนต์ IBM Content Navigator จำนวนมาก, เช่น เว็บไคลเอ็นต์ และ IBM Content Navigator สำหรับ Microsoft Office",

		// Box repository admin...
		admin_box_instructions: "คุณต้องเปิดใช้งานการพิสูจน์ตัวตนแบบมาตรฐานหรือการพิสูจน์ตัวตนเซิร์ฟเวอร์ก่อนที่คุณจะเชื่อมต่อกับที่เก็บ",
		admin_box_use_oauth: "ชนิดการพิสูจน์ตัวตน:",
		admin_box_use_oauth_hover: "เลือกการพิสูจน์ตัวตนแบบมาตรฐานหรือการพิสูจน์ตัวตนเซิร์ฟเวอร์ในสภาวะแวดล้อมที่ใช้งานจริงเมื่อคุณกำลังจัดเตรียมการเข้าถึงเอกสาร Box จาก IBM Content Navigator ระบุค่า client_id และ OAuth2 client_secret ที่เชื่อมโยงกับการปรับใช้ IBM Content Navigator นี้ คุณสามารถรับค่าเหล่านี้จาก Box หลังจากคุณสร้างแอ็พพลิเคชัน Box สำหรับเซิร์ฟเวอร์ IBM Content Navigator ของคุณ<br/><br/>เลือกการพิสูจน์ตัวตนผู้พัฒนาในสภาวะแวดล้อมการพัฒนา ผู้พัฒนาสามารถล็อกอินเข้าสู่ Box ได้โดยใช้แอคเคาต์ผู้พัฒนาและสร้างโทเค็นผู้พัฒนาที่สามารถใช้ได้นาน 60 นาที โทเค็นผู้พัฒนาช่วยให้ผู้พัฒนาสามารถล็อกอินเข้าสู่ Box โดยใช้โทเค็นผู้พัฒนาเป็นรหัสผ่านสำหรับ ID ผู้ใช้ใดๆ",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "โดเมนย่อยของแอคเคาต์ Box enterprise:",
		admin_box_share: "ID การเชื่อมต่อ Task manager:",
		admin_box_share_hover: "สำหรับการคัดลอก Box หรือการแบ่งใช้ Box, task manager ใช้ ID ผู้ใช้ที่เป็นผู้ดูแลระบบ และรหัสผ่านเพื่อรันภารกิจพื้นหลังซึ่งปรับเปลี่ยนที่เก็บ<br/><br/>คลิก ตั้งค่า และล็อกอินเข้าสู่ Box โดยใช้แอคเคาต์ผู้ดูแลระบบ Box ที่ถูกต้อง<br/><br/>ถ้าคุณกำหนดคอนฟิกเดสก์ท็อปโดยการเลือกที่เก็บ Box นี้เป็นที่เก็บสำหรับไฟล์ที่แบ่งใช้ คุณต้องระบุผู้ใช้ที่เป็นผู้ดูแลระบบ Box ซึ่งมีหน่วยเก็บข้อมูลที่ไม่จำกัดใน Box",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "เปิดไฟล์แบบอัตโนมัติ",
		file_tracking_runtime_overwrite_hover_help: "หากคุณไม่ได้เลือกอ็อพชันนี้และคุณมีเอกสารอยู่บนระบบโลคัลไฟล์ของคุณซึ่งมีชื่อที่เหมือนกัน, เอกสารจะถูกเช็กเอาต์แต่ไม่ถูกดาวน์โหลดยกเว้นว่าคุณใช้หนึ่งในแอ็คชันต่อไปนี้:<br/><ul><li> ดาวน์โหลดเอกสารไปที่ไดเร็กทอรีย่อยของดีฟอลต์ไดเร็กทอรี ถ้าคุณเลือกไดเร็กทอรีย่อย ตำแหน่งของเอกสารสามารถถูกติดตามได้โดยเว็บแอ็พพลิเคชัน</li><li>เปลี่ยนชื่อเอกสารที่คุณกำลังดาวน์โหลด การเปลี่ยนชื่อเอกสารจะป้องกันความขัดแย้งของชื่อไฟล์</li></ul>",
		open_file: "เปิดไฟล์แบบอัตโนมัติ",
		over_write_file: "เขียนทับการคัดลอกโลคัล",
		checkout_and_download_file: "เช็กเอาต์และดาวน์โหลดเอกสาร",
		download_to_local_directory: "ดาวน์โหลดไปยัง:",
		checkout_and_download_button_title: "เช็กเอาต์และดาวน์โหลด",
		checkout_without_java_confirmation_dialog: "ไม่สามารถดาวน์โหลดและติดตามไฟล์ด้วยคุณลักษณะการติดตามไฟล์",
		browse_for_directory: "เรียกดู",
		selected_documents: "เอกสารที่เลือกไว้",

		checkout_without_java_confirmation_text: "ปัญหานี้เกิดขึ้นได้ด้วยเหตุผลต่อไปนี้:<br/><ul><li>ไม่ได้ติดตั้ง Java Runtime Environment (JRE) บนเวิร์กสเตชันของคุณ</li><li>ไม่ได้เปิดใช้ปลั๊กอิน Java ในเว็บเบราว์เซอร์ของคุณ</li><li>เว็บเบราว์เซอร์ของคุณไม่สนับสนุน Java</li></ul><br/><br/>เมื่อต้องการแก้ปัญหานี้, ให้ทำแอ็คชันที่เหมาะสม:<br/><br/><ul><li>หากคุณต้องการดำเนินการดาวน์โหลดไฟล์ต่อโดยไม่เปิดใช้งานการติดตามไฟล์, ให้คลิก ตกลง</li><li>หากคุณต้องการดาวน์โหลดไฟล์พร้อมกับเปิดใช้งานการติดตามไฟล์, ให้ยกเลิกการดาวน์โหลดและตรวจสอบว่า คุณได้ติดตั้ง JRE บนเวิร์กสเตชันของคุณและเปิดใช้งานปลั๊กอิน Java ในเว็บเบราว์เซอร์ของคุณ</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "เช็กเอาต์และดาวน์โหลดเอกสารแล้ว, แต่ไม่สามารถเปิดเอกสารได้",
		runtime_file_tracking_open_error_explanation: "ระบบปฏิบัติการที่ติดตั้งบนเวิร์กสเตชันของคุณไม่สนับสนุนไฟล์ชนิดนี้",
		runtime_file_tracking_open_error_userResponse: "เมื่อต้องการแก้ปัญหา, ให้ทำหนึ่งในแอ็คชันต่อไปนี้:<br/><br/><ul><li>หากคุณต้องการทำงานกับเอกสาร, ให้เปิดเว็บไคลเอ็นต์จากเวิร์กสเตชันอื่นที่มีระบบปฏิบัติการอื่น</li><li>หากคุณต้องการดูเอกสารเท่านั้น, ให้คลิกขวาที่เอกสารในเว็บไคลเอ็นต์ และคลิก เปิด</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "เช็กเอาต์เอกสารแล้วแต่ไม่สามารถดาวน์โหลดได้",
		runtime_file_tracking_save_file_error_explanation: "มีเอกสารที่มีชื่อที่เหมือนกันอยู่บนระบบโลคัลไฟล์ของคุณ, แต่ไม่ได้ถูกเขียนทับ ",
		runtime_file_tracking_save_file_error_userResponse: "หากคุณต้องการดาวน์โหลดไฟล์จากที่เก็บ, คุณต้องเขียนทับสำเนาโลคัลของเอกสารเมื่อคุณดาวน์โหลดเอกสารจากที่เก็บ",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "เช็กเอาต์เอกสารแล้วแต่ไม่สามารถดาวน์โหลดหรือเปิดเอกสารได้",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "มีเอกสารที่มีชื่อที่เหมือนกันนี้อยู่บนระบบโลคัลไฟล์ของคุณ อย่างไรก็ตาม, ไฟล์ไม่ได้ถูกเขียนทับ, ซึ่งปกป้องเอกสารบนที่เก็บจากการดาวน์โหลดและการเปิด",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "หากคุณต้องการดาวน์โหลดไฟล์จากที่เก็บ, คุณต้องเขียนทับสำเนาโลคัลของเอกสารเมื่อคุณดาวน์โหลดเอกสารจากที่เก็บ",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "ไม่สามารถดาวน์โหลดเอกสารได้",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "ตัวแปรสภาวะแวดล้อม ${0}, ซึ่งจำเป็นต่อการติดตามไฟล์, ไม่ได้นิยามไว้บนเครื่องไคลเอ็นต์นี้",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "เมื่อต้องการแก้ปัญหา:<br/><br/><ul><li>เพิ่มตัวแปรสภาวะแวดล้อม ${0} ให้กับตัวแปรสภาวะแวดล้อมระบบปฏิบัติการ</li><li>ล็อกเอาต์ออกจากเว็บไคลเอ็นต์และปิดเว็บเบราว์เซอร์ของคุณ จากนั้น, ล็อกอินใหม่</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "ไม่ได้ดาวน์โหลดเอกสารและติดตามโดยแอ็พเพล็ตการติดตามไฟล์  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "ไดเร็กทอรี ${0}, ซึ่งจำเป็นต่อการติดตามไฟล์, ไม่ได้นิยามไว้และไม่สามารถสร้างขึ้นได้",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "เมื่อต้องการแก้ปัญหานี้ ให้ดำเนินการตามความเหมาะสม:<br/><br/><ul><li>คลิก เรียกดู และเลือกไดเร็กทอรีอื่นบนเครื่องไคลเอ็นต์ หากคุณเลือกอ็อพชันนี้, ไฟล์จะไม่ถูกติดตาม</li><li>โปรดติดต่อผู้ดูแลระบบของคุณและแจ้งให้ผู้ดูแลระบบทราบเพื่อระบุไดเร็กทอรีอื่นที่ต้องการใช้สำหรับการติดตาม ตัวอย่างเช่น, อาจมีความจำเป็นหากไดเร็กทอรีที่ระบุไว้ใช้สำหรับระบบปฏิบัติการ Windows แต่คุณกำลังรัน Mac OS </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "หากเดสก์ท็อปนี้เข้าถึงได้จากอุปกรณ์ที่มีระบบปฏิบัติการที่แตกต่างกัน, คุณสามารถลดปัญหาได้โดยทำหนึ่งในแอ็คชันต่อไปนี้:<br/><br/><ul><li>ใช้ตัวแปรสภาวะแวดล้อมเพื่อระบุตำแหน่งหน่วยเก็บข้อมูลบนเครื่องไคลเอ็นต์</li><li>สร้างเดสก์ท็อปสำหรับผู้ใช้ของแต่ละชนิดอุปกรณ์ ตัวอย่างเช่น, สร้างเดสก์ท็อปสำหรับผู้ใช้ที่ใช้ระบบปฏิบัติการ Windows และเดสก์ท็อปสำหรับผู้ใช้ที่ใช้ Mac OS</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "ไม่สามารถดำเนินการคำขอของคุณได้",
		runtime_file_tracking_generic_error_explanation: "เกิดข้อผิดพลาในแอ็พเพล็ตการติดตามไฟล์",
		runtime_file_tracking_generic_error_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณสำหรับความช่วยเหลือ",
		runtime_file_tracking_generic_error_adminResponse: "เปิดคอนโซล Java และลองส่งคำร้องขออีกครั้ง รายละเอียดของข้อผิดพลาดถูกแสดงในคอนโซล Java<br/><br/>คุณสามารถเข้าถึงคอนโซล Java จาก Control Panel (Windows) หรือ System Preferences (Macintosh) สำหรับระบบปฏิบัติการของคุณ",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "ไม่สามารถประมวลผลการร้องขอของคุณได้",
		runtime_file_tracking_cannot_delete_file_error_explanation: "ไฟล์ต่อไปนี้ถูกเพิ่มให้กับที่เก็บแต่ไม่ถูกลบจากระบบไฟล์ระบบไฟล์ของคุณ: ${0}ซึ่งปกติเกิดขึ้นเมื่อไฟล์ถูกเปิดหรือถูกปิดโดยแอ็พพลิเคชันอื่น ถ้าจำเป็น คุณสามารถลบไฟล์ด้วยตัวเอง",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "ไม่สามารถดาวน์โหลดเอกสารได้",
		runtime_file_tracking_ioexception_error_explanation: "ไม่สามารถดาวน์โหลดเอกสารได้",
		runtime_file_tracking_ioexception_userResponse: "คุณอาจไม่มีสิทธิ์เพียงพอต่อการเขียนไปยังไดเร็กทอรีต่อไปนี้: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "ตรวจสอบให้แน่ใจว่าคุณมีสิทธิแบบเขียนไปยังไดเร็กทอรีที่ระบุ หากคุณไม่มีสิทธิแบบเขียนไปยังไดเร็กทอรีที่ระบุ, โปรดติดต่อผู้ดูแลระบบของคุณ",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "ไม่สามารถดำเนินการคำขอของคุณได้",
		runtime_file_tracking_safari_safe_mode_error_explanation: "ข้อผิดพลาดนี้สามารถเกิดขึ้นเนื่องจากเหตุผลต่อไปนี้:<br/><br/><ul><li>คุณกำลังใช้ Safari on Mac OS และ Java กำลังรันในโหมดปลอดภัย</li><li>คุณไม่มีสิทธิอ่าน/เขียนในไดเร็กทอรีที่ระบุในคอนฟิกูเรชันการติดตามไฟล์สำหรับเดสก์ท็อปของคุณ</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "คุณยังคงสามารถใช้ IBM Content Navigator ต่อไปโดยไม่มีการติดตามไฟล์ หรือคุณสามารถทำขั้นตอนต่อไปนี้เพื่อแก้ไขปัญหา:<br/><br/><ol><li>เปิดใช้งานโหมดไม่ปลอดภัยของ Java ใน Safari</li><li>ถ้ามีการพร้อมต์ถามว่าคุณต้องการเชื่อถือเว็บไซต์ IBM Content Navigator หรือไม่ ให้คลิก <b>Trust</b> เพื่อโหนดหน้า จากนั้น เปิดใช้งานโหมดไม่ปลอดภัยของ Java ใน Safari</li></ol><br/><br/>ถ้ากำหนดคอนฟิก Safari ไว้อย่างถูกต้อง ให้ทำขั้นตอนต่อไปนี้เพื่อแก้ไขปัญหา:<br/><br/><ol><li>ตรวจสอบให้แน่ใจว่าคุณมีสิทธิอ่าน/เขียนในไดเร็กทอรีที่ระบุในคอนฟิกูเรชันการติดตามไฟล์สำหรับเดสก์ท็อปของคุณ</li><li>ถ้าคุณไม่มีสิทธิอ่าน/เขียนในไดเร็กทอรี ให้แก้ไขสิทธิในไดเร็กทอรี</li><li>หากคุณไม่สามารถแก้ไขสิทธิของคุณในไดเร็กทอรี ผู้ดูแลระบบต้องเปลี่ยนไดเร็กทอรีที่กำหนดคอนฟิกไว้สำหรับการติดตามไฟล์ หรือให้สิทธิแก่คุณในเดสก์ท็อปซึ่งมีการกำหนดคอนฟิกไดเร็กทอรีการติดตามไฟล์อื่น</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "ไม่สามารถดำเนินการคำขอของคุณได้",
		runtime_file_tracking_java__notfound_error_explanation: "โดยปกติ ข้อผิดพลาดปัญหานี้เกิดขึ้นในสถานการณ์ต่อไปนี้:<br/><br/><ul><li>Java Runtime Environment (JRE) ไม่มีอยู่ หรือไม่ได้เปิดใช้งานบนเวิร์กสเตชันของคุณ</li><li>เวอร์ชัน JRE บนเวิร์กสเตชันของคุณไม่เข้ากันกับเวอร์ชัน IBM Content Navigator</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "คุณยังคงสามารถใช้ IBM Content Navigator ต่อไปโดยไม่มีการติดตามไฟล์ หรือคุณสามารถทำขั้นตอนต่อไปนี้เพื่อแก้ไขปัญหาด้วย JRE:<br/><br/><ol><li>Ensureตรวจสอบให้แน่ใจว่า JRE ได้ถูกติดตั้งบนเวิร์กสเตชันของคุณ</li><li>ตรวจสอบให้แน่ใจว่าเวอร์ชัน JRE บนเวิร์กสเตชันของคุณเข้ากันได้กับ IBM Content Navigator. รายการของเวอร์ชันที่สนับสนุนจะรวมอยู่ในเอกสาร <i>สิ่งที่จำเป็นต้องมีสำหรับฮาร์ดแวร์และซอฟต์แวร์สำหรับ IBM Content Navigator</i> บนไซต์ IBM Software Support</li><li>ตรวจสอบให้แน่ใจว่า JRE ได้ถูกเปิดใช้งานบนเวิร์กสเตชันของคุณ</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "ไม่สามารถดำเนินการคำขอของคุณได้",
		runtime_file_tracking_security_error_explanation: "คุณไม่มีสิทธิอ่าน/เขียนในไดเร็กทอรีที่ระบุในคอนฟิกูเรชันการติดตามไฟล์สำหรับเดสก์ท็อปของคุณ",
		runtime_file_tracking_security_error_userResponse: "คุณยังคงสามารถใช้ IBM Content Navigator ต่อไปโดยไม่มีการติดตามไฟล์ หรือคุณสามารถทำขั้นตอนต่อไปนี้ร่วมกับผู้ดูแลระบบ:<ol><li>ตรวจสอบให้แน่ใจว่าคุณมีสิทธิอ่าน/เขียนในไดเร็กทอรีที่ระบุในคอนฟิกูเรชันการติดตามไฟล์สำหรับเดสก์ท็อปของคุณ </li><li>ถ้าคุณไม่มีสิทธิอ่าน/เขียนในไดเร็กทอรี ให้แก้ไขสิทธิในไดเร็กทอรี</li><li>หากคุณไม่สามารถแก้ไขสิทธิของคุณในไดเร็กทอรี ผู้ดูแลระบบต้องเปลี่ยนไดเร็กทอรีที่กำหนดคอนฟิกไว้สำหรับการติดตามไฟล์ หรือให้สิทธิแก่คุณในเดสก์ท็อปซึ่งมีการกำหนดคอนฟิกไดเร็กทอรีการติดตามไฟล์อื่น</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "เอกสารต่อไปนี้ถูกดาวน์โหลด: ${0}",

		admin_file_tracking_inline_help: "สตรีมไลน์การติดตามไฟล์ของการเพิ่มเอกสารและการเช็คเอาต์และเช็คอินกับที่เก็บ ซึ่งยังช่วยคุณจัดการกับวิธีการเก็บเอกสารต่างๆ บนเครื่องของผู้ใช้<br/><br/>นอกจากนี้, ไฟล์การติดตามช่วยติดตามเอกสารในคอมโพเนนนต์ IBM Content Navigator จำนวนมาก, เช่น เว็บไคลเอ็นต์ และ IBM Content Navigator สำหรับ Microsoft Office",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID ของเมนูไม่สามารถเริ่มต้นด้วย \"Default\"  \"Default\" เป็นส่วนนำหน้าที่สงวนไว้สำหรับ ID ของเมนู",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID สามารถมีได้เฉพาะอักขระแบบตัวอักษรและตัวเลข และเป็นแบบคำนึงถึงชนิดตัวพิมพ์เล็กหรือใหญ่",
		admin_repository_id_hover: "ID ที่เก็บจะถูกรวมใน URL ของเว็บไคลเอ็นต์ และลิงก์อีเมลไปเพื่อระบุที่เก็บที่ต้องการล็อกอิน ID ต้องไม่ซ้ำกัน และคุณไม่สามารถเปลี่ยน ID หลังจากที่คุณบันทึกที่เก็บแล้ว<br><br>ID สามารถมีได้เฉพาะอักขระแบบตัวอักษรและตัวเลข และเป็นแบบคำนึงถึงชนิดตัวพิมพ์เล็กหรือใหญ่",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "ชื่อไม่สามารถใช้อักขระใดๆ ต่อไปนี้: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID เดสก์ท็อปไม่สามารถใช้ช่องว่างหรืออักขระใดๆ ต่อไปนี้: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "ชื่อเดสก์ท็อปไม่สามารถใช้อักขระใดๆ ต่อไปนี้: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "ชื่อจอแสดงผลไม่สามารถมีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" < > |",
		admin_repository_name_hover: "ระบุชื่อที่เก็บที่ต้องการแสดงให้แก่ผู้ใช้ในเว็บไคลเอ็นต์<br><br>ชื่อไม่สามารถมีอักขระใดๆ ต่อไปนี้: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "ระบุชื่อโฮสต์หรือ IP แอดเดรสของเซิร์ฟเวอร์ Content Manager OnDemand ที่คุณต้องการเชื่อมต่อด้วย เช่น server.id.com",
		admin_server_p8_name_hover: "ระบุ URL ของเซิร์ฟเวอร์ Content Engine หรือ Content Platform Engine URL จะคำนึงถึงชนิดตัวพิมพ์เล็กหรือใหญ่ และมีรูปแบบต่อไปนี้:<br><br><ul><li>บน WebSphere Application Server, iiop://host_name:port_number/FileNet/Engine บนการนำไปใช้งานพื้นฐาน หมายเลขพอร์ตดีฟอลต์คือ 2809</li><li>บน WebLogic Server, t3://host_name:port_number/FileNet/Engine หมายเลขพอร์ตดีฟอลต์ คือ 7001</li></ul><br><br>สำหรับการกำหนดค่าที่มีอยู่ของ Content Engine และ Content Platform Engine ให้ใช้ URL การส่งผ่าน EJB ที่มีอยู่โดยไม่ต้องมีส่วนนำหน้า cemp: ",
		admin_server_p8_protocol_hover: "ระบุโปรโตคอลที่จะใช้สื่อสารกับ Content Engine",
		admin_server_cm_name_hover: "ระบุชื่อแค็ตตาล็อกโลคัลของฐานข้อมูล Content Manager หรือชื่อการเชื่อมต่อเซิร์ฟเวอร์ไลบรารี ชื่อนี้เป็นค่าที่ระบุไว้สำหรับตัวแปร ICMSERVER",
		admin_repository_cmis_hover: "ระบุ ID ของที่เก็บที่คุณต้องการเชื่อมต่อ  ID ของแต่ละที่เก็บในสภาวะแวดล้อม CMIS ของคุณถูกแสดงไว้ในเอกสารเซอร์วิสการรวม AtomPub  <br/><br/><b>เคล็ดลับ:</b>คุณสามารถใช้เครื่องหมายดอกจัน (*) เพื่อเชื่อมต่อกับที่เก็บแรก หรือที่เก็บเฉพาะที่กำหนดไว้ในเอกสารเซอร์วิสการรวม Atompub",
		admin_url_cmis_hover: "รูปแบบของ URL เปลี่ยนแปลงตามผู้ให้บริการ โปรดดูที่ เอกสาร CMIS หรือติดต่อผู้ดูแลระบบเซิร์ฟเวอร์ของ CMISสำหรับ URL",
		admin_repcfg_cmis_status_columns_hover: "ระบุสภาวะไอเท็มที่คุณต้องการเป็นไอคอน ไอคอนสถานะจะปรากฏอยู่หน้าเอกสารในรายการเนื้อหา",
		admin_port_hover: "ระบุหมายเลขพอร์ต TCP/IP ที่เซิร์ฟเวอร์ Content Manager แบบ OnDemand รับฟัง ค่าดีฟอลต์ คือ 1445",
		admin_unified_searches_hover: "ระบุว่าคุณต้องการให้ผู้ใช้สามารถบันทึกการค้นหาแบบข้ามที่เก็บบนที่เก็บนี้หรือไม่<br/><br/>หากคุณไม่ได้เปิดใช้งานอ็อพชันนี้ ผู้ใช้ยังสามารถสร้างการค้นหาแบบข้ามที่เก็บที่รันกับที่เก็บนี้ได้ คุณสามารถป้องกันมิให้ผู้ใช้สร้างการค้นหาแบบข้ามที่เก็บที่ระดับเดสก์ท็อป<br/><br/>หากคุณเปิดใช้งานการค้นหาแบบข้ามที่เก็บ IBM Content Navigator จะสร้างโมเดลข้อมูลการค้นหาแบบข้ามที่เก็บบนที่เก็บ<br/><br/>สำหรับ IBM FileNet Content Manager คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบContent Engine administrator ก่อนที่คุณจะเปิดใช้งานอ็อพชันนี้",
		admin_unified_searches_cm_hover: "ระบุว่าคุณต้องการให้ผู้ใช้สามารถบันทึกการค้นหาแบบข้ามที่เก็บบนที่เก็บนี้หรือไม่<br/><br/>หากคุณไม่ได้เปิดใช้งานอ็อพชันนี้ ผู้ใช้ยังสามารถสร้างการค้นหาแบบข้ามที่เก็บที่รันกับที่เก็บนี้ได้ คุณสามารถป้องกันมิให้ผู้ใช้สร้างการค้นหาแบบข้ามที่เก็บที่ระดับเดสก์ท็อป<br/><br/>หากคุณเปิดใช้งานการค้นหาแบบข้ามที่เก็บ IBM Content Navigator จะสร้างโมเดลข้อมูลการค้นหาแบบข้ามที่เก็บบนที่เก็บ",
		admin_max_results_hover: "ระบุว่าต้องการจำกัดจำนวนของผลลัพธ์ที่ส่งคืนโดยการค้นหาหรือไม่ ถ้าคุณไม่จำกัดจำนวนของผลลัพธ์การค้นหา คุณอาจพบปัญหาเกี่ยวกับประสิทธิภาพถ้าการค้นหาส่งคืนผลลัพธ์จำนวนมาก",
		admin_timeout_hover: "ระบุระยะเวลาหน่วยเป็นวินาที ที่การค้นหาสามารถรันบนที่เก็บ ถ้าการค้นหาไม่เสร็จสิ้นในเวลาที่ระบุ เว็บไคลเอ็นต์จะยกเลิกการร้องขอ ค่าหมดเวลาสูงสุดที่แนะนำคือ 60 วินาที",
		admin_object_store_hover: "ระบุที่เก็บอ็อบเจ็กต์ที่คุณต้องการเชื่อมต่อบนเซิร์ฟเวอร์ Content Engine คุณสามารถขอรับชื่อสัญลักษณ์จากคอนโซลการดูแลระบบ Content Platform Engine",
		admin_object_store_display_name_hover: "คุณจำเป็นต้องใช้ชื่อที่แสดงของที่เก็บอ็อบเจ็กต์ถ้าคุณต้องการใช้เวิร์กโฟลว์ IBM FileNet P8 คุณสามารถขอรับชื่อการแสดงผลที่เก็บอ็อบเจ็กต์จากคอนโซลการดูแลระบบ Content Platform Engine",
		admin_all_searches_hover: "ระบุว่าต้องการจำกัดจำนวนของการค้นหาที่แสดงภายใต้ <b>การค้นหาทั้งหมด</b> เมื่อผู้ใช้ค้นหาบนที่เก็บ ถ้าคุณไม่จำกัดจำนวนของการค้นหา คุณอาจพบปัญหาเกี่ยวกับประสิทธิภาพถ้าที่เก็บมีการค้นหาที่บันทึกไว้จำนวนมาก",

		admin_text_desktop: "เดสก์ท็อป",
		admin_text_repository: "ที่เก็บ",
		admin_text_plugin: "ปลั๊กอิน",
		admin_text_theme: "ธีม",
		admin_text_menu: "เมนู",
		admin_text_reason_code: "เหตุผลในการเขียน",
		admin_text_redactions: "การเขียน",
		admin_text_viewer_mapping: "การแม็พวิวเวอร์",
		admin_text_mobile_feature: "คุณลักษณะโมบายล์",
		admin_test_interface_text: "ข้อความอินเตอร์เฟส",
		admin_text_interface_text_locale: "ข้อความอินเตอร์เฟสที่แปล",
		admin_text_icon_status: "ไอคอนสถานะ",
		admin_text_icon: "ไอคอน",
		admin_text_file_type: "ชนิดของไฟล์",
		admin_text_viewer: "ผู้ดู",
		admin_text_desktop_access: "การเข้าถึงเดสก์ท็อป",
		admin_text_mapped_properties_for_office: "คุณสมบัติที่แม็พสำหรับ Microsoft Office",
		admin_text_desktop_features: "คุณลักษณะเดสก์ท็อป",
		admin_text_unknown: "ไม่รู้จัก",
		admin_folder_instruction: "ระบุคุณสมบัติที่ถูกแสดงสำหรับเอกสารและโฟลเดอร์ในรายการเนื้อหาเมื่อผู้ใช้เรียกดู คุณยังสามารถระบุลำดับที่แสดงคุณสมบัติ",
		admin_search_instruction: "ระบุอ็อพชันที่ถูกเลือกโดยดีฟอลต์เมื่อผู้ใช้สร้างการค้นหา",
		admin_repository_office_conf_class_instruction: "หากคุณติดตั้ง IBM Content Navigator สำหรับ Microsoft Office บนเครื่องไคลเอ็นต์ในสภาวะแวดล้อมของคุณ คุณสามารถระบุวิธีการจัดการกับเอกสารเมื่อเอกสารถูกเพิ่มหรือเช็กอินเข้าสู่ที่เก็บนี้",
		admin_repository_office_conf_instruction: "แม็พคุณสมบัติเอกสาร Microsoft Office เข้ากับเอกสารที่ถูกกำหนดบนที่เก็บนี้<br/><br/>เมื่อการแม็พคุณสมบัติถูกเปิดใช้งานสำหรับเดสก์ท็อปซึ่งที่เก็บนี้เชื่อมโยงกับคุณสมบัติที่ถูกกำหนดค่าบนเอกสาร Microsoft Office ที่ถูกใช้เพื่อป็อปปูเลตคุณสมบัติบนที่เก็บเมื่อผู้ใช้เพิ่มเอกสารจาก   IBM Content Navigator สำหรับ Microsoft Office",
		admin_repository_office_conf_prop_mapping_title: "การแม็พคุณสมบัติ",
		admin_repository_office_conf_prop_mapping_title1: "MS Office Integration",
		admin_office_conf_instruction: "คุณสามารถควบคุมวิธีการที่ IBM Content Navigator รวมเข้ากับแอ็พพลิเคชัน Microsoft Office เมื่อมีการติดตั้ง IBM Content Navigator สำหรับ Microsoft Office ถูกติดตั้งไว้บนเครื่องไคลเอ็นต์<br /><br /><b>สิ่งสำคัญ:</b> ถ้าคุณเลือก <b>Map Office properties…</b> คุณต้องกำหนดค่าการแม็พคุณสมบัติสำหรับที่เก็บแต่ละที่ที่เกี่ยวข้องกับเดสก์ท็อปนี้ด้วย คุณสามารถกำหนดคอนฟิกการแม็พคุณสมบัติบนแท็บ <b>คุณสมบัติ Office</b> สำหรับแต่ละที่เก็บในสภาวะแวดล้อมของคุณ",
		admin_desktop_workflows_instruction: "<b>เฉพาะระบบ IBM FileNet P8 เท่านั้น:</b> ระบุพื้นที่แอ็พพลิเคชันที่จะแสดงในเดสก์ท็อปนี้ ลำดับของพื้นที่แอ็พพลิเคชันที่เลือกจะกำหนดลำดับที่พื้นที่แอ็พพลิเคชันจะถูกแสดงในเว็บไคลเอ็นต์<br><br><b>เคล็ดลับ:</b> คุณสามารถเปลี่ยนชื่อที่แสดงได้โดยการระบุชื่อใหม่ในส่วน <b>เลเบล</b> ของเครื่องมือการจัดการ",
		admin_search_filtered_properties_instruction: "ระบุคุณสมบัติที่ผู้ใช้สามารถค้นหา คุณสามารถซ่อนคุณสมบัติใดๆ ที่คุณไม่ต้องการให้ผู้ใช้ค้นหา",
		admin_search_filtered_operators_instruction: "ระบุโอเปอเรเตอร์ที่พร้อมใช้งานเมื่อผู้ใช้ค้นหาชนิดของข้อมูลที่เฉพาะเจาะจง เช่น วันที่หรือจำนวนเต็ม คุณสามารถซ่อนโอเปอเรเตอร์ใดๆ ที่คุณไม่ต้องการให้ผู้ใช้เลือก",
		admin_search_default_search_results_instruction: "ระบุคุณสมบัติที่แสดงสำหรับเอกสารและโฟลเดอร์ในผลลัพธ์การค้นหา คุณสามารถซ่อนคุณสมบัติใดๆ ที่คุณไม่ต้องการให้ปรากฏในผลลัพธ์การค้นหา",
		admin_search_default_search_results_p8_cmis_instruction: "ระบุคุณสมบัติที่แสดงสำหรับเอกสารในผลลัพธ์การค้นหา คุณสามารถซ่อนคุณสมบัติใดๆ ที่คุณไม่ต้องการให้ปรากฏในผลลัพธ์",

		admin_datetimeOp: "Date Time",
		admin_floatOp: "จำนวนทศนิยม",
		admin_integerOp: "จำนวนเต็ม",
		admin_stringOp: "สตริง",
		admin_binaryOp: "ไบนารี",
		admin_objectOp: "อ็อบเจ็กต์",
		admin_idOp: "ID",
		admin_userOp: "ผู้ใช้",
		admin_booleanOp: "บูลีน",

		admin_string: "สตริง",
		admin_long: "Long",
		admin_date: "วันที่",
		admin_double: "Double",
		admin_object: "อ็อบเจ็กต์",
		admin_guid: "GUID",
		admin_boolean: "บูลีน",

		admin_repcfg_heading: "คุณสามารถแทนที่ลักษณะการทำงานดีฟอลต์ของที่เก็บนี้ได้โดยการตั้งค่าคอนฟิกูเรชันพารามิเตอร์",
		admin_repcfg_heading_od: "คุณสามารถแทนที่ลักษณะการทำงานดีฟอลต์ของที่เก็บนี้ได้โดยการตั้งค่าคอนฟิกูเรชันพารามิเตอร์<br /><br /><b>สิ่งสำคัญ:</b> เมื่อต้องการใช้เว็บไคลเอ็นต์กับ Content Manager OnDemand คุณยังต้องระบุค่าสำหรับพารามิเตอร์ที่ถูกรวมบนแท็บ <b>Content Manager OnDemand</b> ภายใต้ <b>ค่าติดตั้ง</b> ซึ่งใช้กับที่เก็บ Content Manager OnDemand ทั้งหมดที่คุณเชื่อมต่อด้วย",
		admin_repcfg_teamspaces: "การจัดการ Teamspace:",
		admin_repcfg_enable: "เปิดใช้งาน",
		admin_repcfg_disable: "ปิดใช้งาน",

		admin_repcfg_deliver_redacted_pdf_files_as: "ไฟล์ PDF ที่เขียนขึ้นจะถูกนำส่งเป็น:",
		admin_repcfg_burn_pdf_to_pdf: "ไฟล์ PDF",
		admin_repcfg_burn_pdf_to_tiff: "ไฟล์ TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "ไฟล์ PDF ที่เขียนขึ้นโดยการใช้การเขียนที่อิงบทบาทสามารถนำส่งให้กับไคลเอ็นต์ในรูปแบบไฟล์ที่แตกต่างกัน เมื่อรูปแบบไฟล์เปลี่ยนแปลง นามสกุลไฟล์และชนิด MIME จะเปลี่ยนแปลงด้วย<br><br>เช่น เมื่อไฟล์ PDF ถูกนำส่งเป็นไฟล์ TIFF นามสกุลไฟล์จะเปลี่ยนเป็น .tiff",
		admin_repcfg_redaction_allow_merge_and_split: "อนุญาตให้ผู้ใช้ผสานและแยกเพจที่มีการเขียนแบบอิงบทบาท",
		admin_repcfg_redaction_allow_merge_and_split_hover: "เลือกอ็อพชันนี้เพื่ออนุญาตให้ผู้ใช้ผสานและแยกเพจที่มีการเขียนแบบอิงบทบาท ผู้ใช้ที่ไม่ใช่เอดิเตอร์สำหรับการเขียนจะไม่สามารถแก้ไขการเขียนแบบอิงบทบาท และไม่ได้รับสิทธิเข้าถึงข้อมูลที่สำคัญที่เชื่อมโยงกับการเขียนแบบอิงบทบาทแม้ว่าอ็อพชันนี้ถูกเปิดใช้งานแล้วก็ตาม",
		admin_repcfg_modify_teamspace_roles: "อนุญาตให้เจ้าของแก้ไขบทบาทของ Teamspace ที่มีอยู่",
		admin_repcfg_tm_delete_teamspace: "เปิดให้เจ้าของลบ Teamspace รวมทั้งเนื้อหา",
		admin_repcfg_tm_delete_teamspace_id_missing: "คุณต้องระบุชื่อผู้ใช้ของผู้ดูแลระบบที่เก็บ",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "คุณต้องระบุรหัสผ่านของผู้ดูแลระบบที่เก็บ",
		admin_repcfg_teamspace_display_Recent: "แสดง Teamspace ที่ปรับเปลี่ยนล่าสุดเท่านั้น ",
		admin_repcfg_teamspace_display_Recent_value: "วันตั้งแต่ที่ปรับเปลี่ยนล่าสุด:",

		admin_repcfg_folder_selector: "โฟลเดอร์รูท:",
		admin_repcfg_enable_folder_selector: "เปิดใช้งาน",
		admin_repcfg_disable_folder_selector: "ปิดใช้งาน",
		admin_repcfg_SSO: "การลงชื่อใช้งานแบบครั้งเดียว:",
		admin_repcfg_teamspace_template_permission_text: "กำหนดผู้สร้างเท็มเพลต Teamspace:",
		admin_repcfg_teamspace_template_permission_hover_p8: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้างเท็มเพลต Teamspace ผู้ใช้และกลุ่มถูกกำหนดการตั้งค่าการรักษาความปลอดภัยที่เหมาะสมตามคลาสและโฟลเดอร์ที่ต้องการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>ศึกษาเพิ่มเติม</a><br/><br/><b>ข้อแนะนำ:</b> ให้ใช้กลุ่มเพื่อทำให้การจัดการ Teamspace ทำได้ง่าย",
		admin_repcfg_teamspace_template_permission_hover_cm: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้างเท็มเพลต Teamspace ผู้ใช้ถูกเพิ่มให้กับ ACL ที่เหมาะสมและกำหนดสิทธิใช้งานที่จำเป็น <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>ศึกษาเพิ่มเติม</a><br/><br/><b>ข้อแนะนำ:</b> ให้ใช้กลุ่มเพื่อทำให้การจัดการ Teamspace ทำได้ง่าย",
		admin_repcfg_teamspace_permission_text: "กำหนดบทบาท Teamspace:",
		admin_repcfg_teamspace_permission_hover_p8: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้าง Teamspace และใช้ Teamspace ผู้ใช้ถูกกำหนดการตั้งค่าการรักษาความปลอดภัยที่เหมาะสมตามคลาสและโฟลเดอร์ที่ต้องการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>ศึกษาเพิ่มเติม</a><br/><br/><b>ข้อแนะนำ:</b> ให้ใช้กลุ่มเพื่อทำให้การจัดการ Teamspace ทำได้ง่าย",
		admin_repcfg_teamspace_permission_hover_cm: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้าง Teamspace และใช้ Teamspace ผู้ใช้ถูกเพิ่มให้กับ ACL ที่เหมาะสมและกำหนดสิทธิใช้งานที่จำเป็น <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>ศึกษาเพิ่มเติม</a><br/><br/><b>ข้อแนะนำ:</b> ให้ใช้กลุ่มเพื่อทำให้การจัดการ Teamspace ทำได้ง่าย",
		admin_repcfg_entry_template_permission_text: "กำหนดบทบาทเท็มเพลตรายการ:",
		admin_repcfg_entry_template_permission_hover_p8: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้างเท็มเพลตรายการและใช้เท็มเพลตรายการ ผู้ใช้ถูกกำหนดการตั้งค่าการรักษาความปลอดภัยที่เหมาะสมตามคลาส Entry Template document <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>ศึกษาเพิ่มเติม</a><br/><br/><b>ข้อแนะนำ:</b> ใช้กลุ่มเพื่อทำให้การจัดการเท็มเพลตรายการทำได้ง่าย",
		admin_repcfg_entry_template_permission_hover_cm: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้างเท็มเพลตรายการและใช้เท็มเพลตรายการ ผู้ใช้ถูกเพิ่มให้กับ ACL ที่เหมาะสมและกำหนดสิทธิใช้งานที่จำเป็น <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>ข้อแนะนำ:</b> ใช้กลุ่มเพื่อทำให้การจัดการเท็มเพลตรายการทำได้ง่าย",
		admin_repcfg_office_template_permission_text: "กำหนดบทบาทเท็มเพลต:",
		admin_repcfg_office_template_permission_hover_cm: "ระบุกลุ่มและผู้ใช้ที่สามารถสร้าง แก้ไข และใช้เท็มเพลต Microsoft Office Online หรือ Edit Service ผู้ใช้ถูกเพิ่มให้กับ ACL ที่เหมาะสมและกำหนดสิทธิใช้งานที่จำเป็น  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>ข้อแนะนำ:</b> ใช้กลุ่มเพื่อทำให้การจัดการกับเท็มเพลต Microsoft Office Online หรือ Edit Service เป็นไปได้โดยง่าย",
		admin_repcfg_draft_permission_text: "กำหนดบทบาทแบบร่าง:",
		admin_repcfg_draft_permission_hover_cm: "ระบุกลุ่มหรือผู้ใช้ผู้ที่สามารถสร้างแบบร่างของเอกสาร Microsoft Office Online หรือ Edit Service ในระหว่างการแก้ไขร่วม ผู้ใช้ใดๆ ที่ต้องการแก้ไขเอกสารร่วมใน Microsoft Office Online หรือ Edit Service ต้องมีสิทธิพิเศษที่เหมาะสมเพื่อสร้างแบบร่าง ผู้ใช้ถูกเพิ่มให้กับ ACL ที่เหมาะสมและกำหนดสิทธิใช้งานที่จำเป็น <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>ข้อแนะนำ:</b> ใช้กลุ่มเพื่อทำให้การจัดการแบบร่างเป็นไปโดยง่าย",
		admin_repcfg_search_permission_text: "กำหนดบทบาทการค้นหา:",
		admin_repcfg_search_permission_hover_p8: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้างหรือใช้การค้นหาที่บันทึกและการค้นหาข้ามที่เก็บ ผู้ใช้ถูกกำหนดการตั้งค่าการรักษาความปลอดภัยที่เหมาะสมตามคลาสที่ต้องการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>ข้อแนะนำ:</b> ให้ใช้กลุ่มเพื่อทำให้การจัดการการค้นหาทำได้ง่าย",
		admin_repcfg_search_permission_hover_cm: "ระบุกลุ่มหรือผู้ใช้ซึ่งสามารถสร้าง แก้ไขหรือใช้การค้นหาที่บันทึกและการค้นหาข้ามที่เก็บ ผู้ใช้ถูกเพิ่มให้กับ ACL ที่เหมาะสมและกำหนดสิทธิใช้งานที่จำเป็น <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>ข้อแนะนำ:</b> ให้ใช้กลุ่มเพื่อทำให้การจัดการการค้นหาทำได้ง่าย",
		admin_repcfg_search_permission_title: "บทบาทการค้นหา",
		admin_repcfg_search_permission_intro_text: "ตรวจสอบว่าว่าผู้ใช้มีสิทธิเข้าถึงเดสก์ท็อปที่สนับสนุนบทบาทของผู้ใช้ ตัวอย่างเช่น ตรวจสอบว่าผู้สร้างการค้นหามีสิทธิเข้าถึงเดสก์ท็อปซึ่งอนุญาตให้ผู้ใช้สร้างการค้นหาและการค้นหาข้ามที่เก็บ",
		admin_repcfg_teamspace_template_administrators_hover_p8: "ผู้ดูแลระบบเท็มเพลต Teamspace คือผู้ใช้ซึ่งมีสิทธิ <b>Full Control</b> กับที่เก็บ (ที่เก็บอ็อบเจ็กต์) คุณไม่สามารถเปลี่ยนรายชื่อของผู้ดูแลระบบเท็มเพลต Teamspace จากเครื่องมือการดูแลระบบ <p>ผู้ดูแลระบบเท็มเพลต Teamspace สามารถลบหรือแก้ไขเท็มเพลต Teamspace ทั้งหมด ผู้ใช้ที่สร้างเท็มเพลต Teamspace ไม่จำเป็นต้องแบ่งใช้เท็มเพลตกับผู้ดูแลระบบเท็มเพลต Teamspace</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้างเท็มเพลต Teamspace ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการสร้างเท็มเพลต Teamspace <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "ผู้ใช้และกลุ่มที่มีสิทธิ์ที่ได้รับการกำหนดอื่นที่ไม่ใช่สิทธิ์ที่เชื่อมโยงกับ Administrators และ Creators<p>คุณสามารถย้ายผู้ใช้และกลุ่มเหล่านี้ไปยังบทบาทผู้สร้างเท็มเพลต Teamspace โดยการลบออกจากบทบาทอื่นๆ และจากนั้นกำหนดเป็นผู้สร้างเท็มเพลต Teamspace<p>คุณสามารถตรวจทานสิทธิ์ที่กำหนดให้กับผู้ใช้และกลุ่มเหล่านี้ในปัจจุบันโดยใช้ IBM Administration Console for Content Engine",
		admin_repcfg_teamspace_administrators_hover_p8: "ผู้ดูแลระบบ Teamspace คือผู้ใช้ซึ่งมีสิทธิ <b>Full Control</b> กับที่เก็บ (ที่เก็บอ็อบเจ็กต์) คุณไม่สามารถเปลี่ยนรายชื่อของผู้ดูแลระบบ Teamspace จากเครื่องมือการดูแลระบบ<p>ผู้ดูแลระบบ Teamspace สามารถลบหรือแก้ไข Teamspace ทั้งหมด ผู้ใช้ที่สร้าง Teamspace ไม่จำเป็นต้องแบ่งใช้ Teamspace กับผู้ดูแลระบบ Teamspace</p>",
		admin_repcfg_teamspace_creators_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้าง Teamspace ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการสร้าง Teamspace <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_teamspace_user_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้ใช้ Teamspace ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการใช้ Teamspace อย่างไรก็ตาม ผู้ใช้ต้องเป็นสมาชิกของ Teamspace เพื่อเข้าถึง Teamspace <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>ศึกษาเพิ่มเติม</a><p><b>คำแนะนำ:</b> ถ้าคุณต้องการให้ผู้ใช้ทั้งหมดในสภาวะแวดล้อมของคุณสามารถเห็น Teamspace ได้ คุณสามารถเพิ่ม #AUTHENTICATED-USERS pseudo-account ให้กับบทบาทผู้ใช้ Teamspace</p>",
		admin_repcfg_teamspace_others_hover_p8: "ผู้ใช้และกลุ่มที่มีสิทธิ์ที่ได้รับการกำหนดอื่นที่ไม่ใช่สิทธิ์ที่เชื่อมโยงกับ Administrators, Creators และ Users<p>คุณสามารถย้ายผู้ใช้และกลุ่มเหล่านี้ไปยังบทบาทที่กำหนดไว้ล่วงหน้าโดยการลบออกจากบทบาทอื่นๆ และจากนั้นกำหนดบทบาท Teamspace ให้<p>คุณสามารถตรวจทานสิทธิ์ที่กำหนดให้กับผู้ใช้และกลุ่มเหล่านี้ในปัจจุบันโดยใช้ IBM Administration Console for Content Engine",		
		admin_repcfg_entry_template_administrators_hover_p8: "ผู้ดูแลระบบเท็มเพลตรายการ คือผู้ใช้ซึ่งมีสิทธิ <b>Full Control</b> กับที่เก็บ (ที่เก็บอ็อบเจ็กต์) คุณไม่สามารถเปลี่ยนรายชื่อของผู้ดูแลระบบเท็มเพลตรายการ จากเครื่องมือการดูแลระบบ <p>ผู้ดูแลระบบเท็มเพลตรายการ สามารถลบหรือแก้ไขเท็มเพลตรายการทั้งหมด ผู้ใช้ที่สร้างเท็มเพลตรายการไม่จำเป็นต้องแชร์เท็มเพลตรายการกับผู้ดูแลระบบเท็มเพลตรายการ</p>",
		admin_repcfg_entry_template_creators_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้างเท็มเพลตรายการ ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการสร้างเท็มเพลตรายการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_entry_template_user_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้ใช้เท็มเพลตรายการ ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการใช้เท็มเพลตรายการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>ศึกษาเพิ่มเติม</a><p><b>คำแนะนำ:</b> ถ้าคุณต้องการให้ผู้ใช้ทั้งหมดในสภาวะแวดล้อมของคุณสามารถใช้เท็มเพลตรายการได้คุณสามารถเพิ่ม #AUTHENTICATED-USERS pseudo-account ให้กับบทบาทผู้ใช้เท็มเพลตรายการ</p>",
		admin_repcfg_entry_template_others_hover_p8: "ผู้ใช้และกลุ่มที่มีสิทธิ์ที่ได้รับการกำหนดอื่นที่ไม่ใช่สิทธิ์ที่เชื่อมโยงกับ Administrators, Creators และ Users<p>คุณสามารถย้ายผู้ใช้และกลุ่มเหล่านี้ไปยังบทบาทที่กำหนดไว้ล่วงหน้าโดยการลบออกจากบทบาทอื่นๆ และจากนั้นกำหนดบทบาทเท็มเพลตรายการให้<p>คุณสามารถตรวจทานสิทธิ์ที่กำหนดให้กับผู้ใช้และกลุ่มเหล่านี้ในปัจจุบันโดยใช้ IBM Administration Console for Content Engine",
		admin_repcfg_teamspace_template_creators_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้างเท็มเพลต Teamspace ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิใช้งานที่เหมาะสมในการสร้างเท็มเพลต Teamspace บนที่เก็บ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_teamspace_creators_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้าง Teamspace ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิใช้งานที่เหมาะสมในการสร้าง Teamspace บนที่เก็บ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_teamspace_user_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้ใช้ Teamspace ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิใช้งานที่เหมาะสมในการใช้ Teamspace บนที่เก็บ อย่างไรก็ตาม ผู้ใช้ต้องเป็นสมาชิกของ Teamspace เพื่อเข้าถึง Teamspace <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_entry_template_creators_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้างเท็มเพลตรายการ ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิใช้งานที่เหมาะสมในการสร้างเท็มเพลตรายการบนที่เก็บ <br/><br/>อย่างไรก็ตาม การตั้งค่าการรักษาความปลอดภัยสำหรับเท็มเพลตรายการที่เจาะจงกำหนดสิทธิใช้งานผู้ใช้หรือกลุ่มจะมีบนเท็มเพลตรายการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_entry_template_editors_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นเอดิเตอร์เท็มเพลตรายการ ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิใช้งานที่เหมาะสมในการแก้ไขเท็มเพลตรายการบนที่เก็บ <br/><br/>อย่างไรก็ตาม การตั้งค่าการรักษาความปลอดภัยสำหรับเท็มเพลตรายการที่เจาะจงกำหนดสิทธิใช้งานผู้ใช้หรือกลุ่มจะมีบนเท็มเพลตรายการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_entry_user_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้ใช้เท็มเพลตรายการ ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิใช้งานที่เหมาะสมในการใช้เท็มเพลตรายการบนที่เก็บ <br/><br/>อย่างไรก็ตาม การตั้งค่าการรักษาความปลอดภัยสำหรับเท็มเพลตรายการที่เจาะจงกำหนดสิทธิใช้งานผู้ใช้หรือกลุ่มจะมีบนเท็มเพลตรายการ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_office_template_creators_hover_cm: "เมื่อคุณมอบหมายสิทธิ์ให้กับผู้ใช้หรือกลุ่มเป็นผู้สร้างเท็มเพลต Microsoft Office Online หรือ Edit Service ผู้ใช้หรือกลุ่มถูกกำหนดสิทธิพิเศษที่เหมาะสมเพื่อสร้างไฟล์เท็มเพลตบนที่เก็บ <br/><br/>อย่างไรก็ตาม ค่าติดตั้งด้านความปลอดภัยสำหรับไฟล์เท็มเพลตที่ระบุเฉพาะจะถูกกำหนดสิทธิพิเศษให้กับผู้ใช้หรือกลุ่มที่มีอยู่บนเท็มเพลต <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_office_template_editors_hover_cm: "เมื่อคุณมอบหมายสิทธิ์ให้กับผู้ใช้หรือกลุ่มเป็นผู้แก้ไขเท็มเพลต Microsoft Office Online หรือ Edit Service ผู้ใช้หรือกลุ่มจะถูกกำหนดสิทธิพิเศษที่เหมาะสมเพื่อปรับเปลี่ยนเท็มเพลตไฟล์บนที่เก็บ  <br/><br/>อย่างไรก็ตาม ค่าติดตั้งด้านความปลอดภัยสำหรับไฟล์เท็มเพลตที่ระบุเฉพาะจะถูกกำหนดสิทธิพิเศษให้กับผู้ใช้หรือกลุ่มที่มีอยู่บนเท็มเพลต <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_office_template_user_hover_cm: "เมื่อคุณมอบหมายสิทธิ์ให้กับผู้ใช้หรือกลุ่มเป็นผู้ใช้เท็มเพลต Microsoft Office Online หรือ Edit Service ผุ้ใช้หรือกลุ่มจะถูกกำหนดสิทธิพิเศษที่เหมาะสมเพื่อใช้เท็มเพลตเมื่อผู้ใช้เหล่านั้นสร้างเอกสาร Office Online หรือ Edit Service ฉบับใหม่จากเว็บไคลเอ็นต์  <br/><br/>อย่างไรก็ตาม ค่าติดตั้งด้านความปลอดภัยสำหรับไฟล์เท็มเพลตที่ระบุเฉพาะจะถูกกำหนดสิทธิพิเศษให้กับผู้ใช้หรือกลุ่มที่มีอยู่บนเท็มเพลต  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_draft_creators_hover_cm: "ผู้ใช้ใดๆ ที่ต้องการแก้ไขเอกสารร่วมกันใน Microsoft Office Online หรือ Edit Service ต้องถูกกำหนดบทบาทนี้ไว้ ห้ามกำหนดบทบาทเอดิเตอร์หรือบทบาทผู้ใช้ให้กับผู้ใช้ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_draft_editors_hover_cm: "ผู้ใช้ใดๆ ผู้ที่ต้องการแก้ไขเอกสารร่วมกันใน Microsoft Office Online หรือ Edit Service ต้องถูกกำหนดบทบาท <b>ผู้สร้าง</b> ไว้ หากผู้ใช้ถูกกำหนดบทบาทเอดิเตอร์ไว้ พวกเขาจะไม่สามารถสร้างแบบร่าง ซึ่งต้องการการแก้ไขร่วมกัน  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_draft_user_hover_cm: "ผู้ใช้ใดๆ ผู้ที่ต้องการแก้ไขเอกสารร่วมกันใน Microsoft Office Online หรือ Edit Service ต้องถูกกำหนดบทบาท <b>ผู้สร้าง</b> ไว้ หากผู้ใช้ถูกกำหนดบทบาทผู้ใช้ไว้ พวกเขาจะไม่สามารถสร้างแบบร่าง ซึ่งต้องการการแก้ไขร่วมกัน  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>ศึกษาเพิ่มเติม</a>",		
		admin_repcfg_search_others_hover_p8: "ผู้ใช้และกลุ่มที่มีสิทธิ์ที่ได้รับการกำหนดอื่นที่ไม่ใช่สิทธิ์ที่เชื่อมโยงกับ Administrators, Creators และ Users<p>คุณสามารถย้ายผู้ใช้และกลุ่มเหล่านี้ไปยังบทบาทที่กำหนดไว้ล่วงหน้าโดยการลบออกจากบทบาทอื่นๆ และจากนั้นกำหนดบทบาทการค้นหาให้<p>คุณสามารถตรวจทานสิทธิ์ที่กำหนดให้กับผู้ใช้และกลุ่มเหล่านี้ในปัจจุบันโดยใช้ IBM Administration Console for Content Engine",		
		admin_repcfg_search_admins_hover_p8: "ผู้ดูแลระบบการค้นหาคือผู้ใช้ซึ่งมีสิทธิ <b>Full Control</b> กับที่เก็บ (ที่เก็บอ็อบเจ็กต์) คุณไม่สามารถเปลี่ยนรายชื่อของผู้ดูแลระบบการค้นหาจากเครื่องมือการดูแลระบบ <br /><br />ผู้ดูแลระบบการค้นหาสามารถลบหรือแก้ไขการค้นหาทั้งหมด ผู้ใช้ที่สร้างการค้นหาไม่จำเป็นต้องแชร์การค้นหากับผู้ดูแลระบบการค้นหา",
		admin_repcfg_search_creators_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้างการค้นหา ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการสร้างการค้นหา <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_search_user_hover_p8: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้ใช้การค้นหา ผู้ใช้หรือกลุ่มถูกกำหนดการรักษาความปลอดภัยที่เหมาะสมบนที่เก็บในการใช้การค้นหา <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>เรียนรู้เพิ่มเติม</a><br /><br /><b>คำแนะนำ:</b> ถ้าคุณต้องการให้ผู้ใช้ทั้งหมดในสภาวะแวดล้อมของคุณสามารถใช้การค้นหาได้คุณสามารถเพิ่ม #AUTHENTICATED-USERS pseudo-account ให้กับบทบาทผู้ใช้การค้นหา<br/><br />โดยดีฟอลต์ ผู้ใช้การค้นหาสามารถสร้างการค้นหาและการค้นหาข้ามที่เก็บ แต่ไม่สามารถบันทึกการค้นหา คุณสามารถป้องกันผู้ใช้การค้นหาไม่ให้สร้างการค้นหาโดยให้ผู้ใช้ใช้เดสก์ท็อปซึ่งมีการเลือกอ็อพชันต่อไปนี้:<ul><li><b>ป้องกันไม่ให้ผู้ใช้สร้างการค้นหา</b></li><li><b>ป้องกันมิให้ผู้ใช้สร้างการค้นหาข้ามที่เก็บ</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้สร้างการค้นหา ผู้ใช้หรือกลุ่มถูกกำหนด privileges ที่เหมาะสมในการสร้างและบันทึกการค้นหาและการค้นหาข้ามที่เก็บบนที่เก็บ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>สิ่งสำคัญ:</b> ตรวจสอบว่าว่าผู้สร้างการค้นหาใช้เดสก์ท็อปที่มีการเลือกอ็อพชันต่อไปนี้:<ul><li><b>ป้องกันไม่ให้ผู้ใช้สร้างการค้นหา</b></li><li><b>ป้องกันมิให้ผู้ใช้สร้างการค้นหาข้ามที่เก็บ</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นเอดิเตอร์การค้นหา ผู้ใช้หรือกลุ่มถูกกำหนด privileges ที่เหมาะสมในการแก้ไขการค้นหาที่มีอยู่และการค้นหาข้ามที่เก็บ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>คำแนะนำ:</b> โดยดีฟอลต์ เอดิเตอร์การค้นหาสามารถสร้างการค้นหาและการค้นหาข้ามที่เก็บ แต่ไม่สามารถบันทึกการค้นหา คุณสามารถป้องกันเอดิเตอร์การค้นหาไม่ให้สร้างการค้นหาโดยให้ผู้ใช้ใช้เดสก์ท็อปซึ่งมีการเลือกอ็อพชันต่อไปนี้:<ul><li><b>ป้องกันไม่ให้ผู้ใช้สร้างการค้นหา</b></li><li><b>ป้องกันมิให้ผู้ใช้สร้างการค้นหาข้ามที่เก็บ</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "เมื่อคุณกำหนดผู้ใช้หรือกลุ่มเป็นผู้ใช้การค้นหา ผู้ใช้หรือกลุ่มถูกกำหนด privileges ที่เหมาะสมในการเปิดและรันการค้นหาและการค้นหาข้ามที่เก็บ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>ศึกษาเพิ่มเติม</a><br /><br /><b>คำแนะนำ:</b> โดยดีฟอลต์ ผู้ใช้การค้นหาสามารถสร้างการค้นหาและการค้นหาข้ามที่เก็บ แต่ไม่สามารถบันทึกการค้นหา คุณสามารถป้องกันผู้ใช้การค้นหาไม่ให้สร้างการค้นหาโดยให้ผู้ใช้ใช้เดสก์ท็อปซึ่งมีการเลือกอ็อพชันต่อไปนี้:<ul><li><b>ป้องกันไม่ให้ผู้ใช้สร้างการค้นหา</b></li><li><b>ป้องกันมิให้ผู้ใช้สร้างการค้นหาข้ามที่เก็บ</b></li></ul>",
		admin_repcfg_db_encoding: "การเข้ารหัสอักขระฐานข้อมูลเซิร์ฟเวอร์:",
		admin_repcfg_db_encoding_hover: "การเข้ารหัสอักขระดีฟอลต์สำหรับฐานข้อมูล IBM Content Manager คือ UTF-8",
		admin_repcfg_db_encoding_specify: "ระบุการเข้ารหัสอักขระฐานข้อมูล",
		admin_repcfg_db_encoding_utf8: "การเข้ารหัส UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "ระบุอ็อพชันนี้หากคุณใช้ฐานข้อมูลที่เข้ารหัส UTF-8 IBM Content Navigator จะใช้การเข้ารหัส UTF-8 เพื่อตรวจสอบความยาวของสตริงค่าคุณสมบัติไอเท็ม",
		admin_repcfg_db_encoding_other: "การเข้ารหัสอื่นๆ",
		admin_repcfg_db_encoding_other_hover: "ระบุอ็อพชันนี้หากคุณใช้ฐานข้อมูลที่มีการเข้ารหัสที่ไม่ใช่ UTF-8 IBM Content Navigator จะใช้จำนวนอักขระเพื่อตรวจสอบความยาวของสตริงค่าคุณสมบัติไอเท็ม",
		admin_repcfg_language_codes: "โค้ดภาษาของเซิร์ฟเวอร์:",
		admin_repcfg_language_codes_avail: "มีอยู่",
		admin_repcfg_language_codes_sel: "ที่เลือกไว้",
		admin_repcfg_pdf_conversion: "ชนิด MIME เพื่อแปลงเอกสาร PDF ในสิ่งที่แนบ:",
		admin_repcfg_pdf_conversion_avail: "มีอยู่",
		admin_repcfg_pdf_conversion_sel: "ที่เลือกไว้",

		admin_repcfg_box_share_enable_classes_label: "คลาสที่จะปรับเปลี่ยนสำหรับการสนับสนุนการแบ่งใช้ Box:",
		admin_repcfg_box_share_enable_classes_hover: "คุณสามารถปรับเปลื่ยนคลาสเป็นที่เก็บ ID ของไฟล์ใน Box เมื่อไอเท็มถูกแบ่งใช้",
		admin_repcfg_box_share_enable_classes_warning: "สิ่งสำคัญ: คลาสใดๆ ที่คุณระบุจะถูกปรับเปลี่ยนเพื่อสนับสนุนการแบ่งใช้ Box หลังจากที่คุณบันทึกการเปลี่ยนแปลงแล้ว, การเปลี่ยนแปลงนั้นไม่สามารถลบออกจากคลาสได้<br><br>คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารีเพื่อแก้ไขคลาส",
		admin_repcfg_box_share_enable_classes_available: "คลาสที่มีอยู่",
		admin_repcfg_box_share_enable_classes_selected: "คลาสที่เลือก",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "จัดเก็บ ID การแบ่งใช้ Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "คลาสนี้ถูกปรับเปลี่ยนเพื่อจัดเก็บ ID การแบ่งใช้ Box แล้ว คุณไม่สามารถลบอ็อพชันนี้",
		admin_repcfg_box_share_enable_classes_tracking_hover: "ปรับเปลี่ยนคลาสนี้เพื่อจัดเก็บ ID ของไฟล์ใน Box เมื่อแบ่งใช้ไอเท็ม",

		admin_repcfg_redaction: "การเขียนตามบทบาท:",
		admin_repcfg_enable_redaction_hover: "ระบุว่าคุณต้องการใช้การเขียนตามบทบาทบนเอกสารในที่เก็บนี้หรือไม่<br/><br/>ใช้การเขียนตามบทบาทเมื่อเอกสารถูกดาวน์โหลด พิมพ์ จัดแสดงตามวิวเวอร์ หรือแสดงขึ้นเป็นภาพขนาดเล็ก สิ่งที่ผู้ใช้มองเห็นเมื่อดูเอกสารขึ้นอยู่กับบทบาทของผู้ใช้ และนโยบายการเขียนที่สามารถใช้ได้",

		admin_repcfg_redaction_policy_permission_text: "กำหนดเอดิเตอร์นโยบาย:",
		admin_repcfg_redaction_policy_editors_hover: "เลือกผู้ใช้และกลุ่มที่จะสร้าง ปรับเปลี่ยน และลบนโยบายการเขียนและบทบาทการเขียน",
		admin_repcfg_redaction_policy_editors_select_hover: "เอดิเตอร์นโยบายการเขียนสามารถสร้าง ปรับเปลี่ยน และลบนโยบายการเขียนและบทบาทการเขียน",
		admin_repcfg_redaction_policy_administrators_hover_p8: "ผู้ดูแลระบบนโยบายการเขียนสามารถกำหนดเอดิเตอร์นโยบายการเขียน<br/><br/>คุณสามารถเปลี่ยนรายการของผู้ดูแลระบบนโยบายการเขียนโดยใช้ IBM Administration Console for Content Engine",
		admin_repcfg_redaction_policy_administrators_hover_cm: "ผู้ดูแลระบบนโยบายการเขียนสามารถกำหนดเอดิเตอร์นโยบายการเขียน<br/><br/>คุณสามารถเปลี่ยนรายการของผู้ดูแลระบบนโยบายการเขียนโดยใช้ไคลเอ็นต์การควบคุมดูแลระบบ IBM Content Manager",

		admin_repcfg_redaction_permission_text: "กำหนดเอดิเตอร์การเขียน:",
		admin_repcfg_redaction_editors_hover: "เลือกผู้ใช้และกลุ่มที่จะสร้าง ปรับเปลี่ยน และลบการเขียนตามบทบาท หลังจากคุณเลือกผู้ใช้และกลุ่มเป็นเอดิเตอร์แล้ว คุณต้องระบุพวกเขาเป็นเอดิเตอร์ในนโยบายการเขียนก่อนผู้ใช้และกลุ่มดังกล่าวจะสามารถแก้ไขการเขียนตามบทบาทได้",
   		admin_repcfg_redaction_editors_select_hover: "เอดิเตอร์การเขียนสามารถสร้าง ปรับเปลี่ยน และลบการเขียนตามบทบาท เมื่อมีการระบุพวกเขาเป็นเอดิเตอร์ในนโยบายการเขียนด้วย",
   		admin_repcfg_redaction_administrators_hover_p8: "ผู้ดูแลระบบการเขียนสามารถกำหนดเอดิเตอร์การเขียน<br/><br/>คุณสามารถเปลี่ยนรายการของผู้ดูแลระบบการเขียนโดยใช้ IBM Administration Console for Content Engine",
   		admin_repcfg_redaction_administrators_hover_cm: "ผู้ดูแลระบบการเขียนสามารถกำหนดเอดิเตอร์การเขียน<br/><br/>คุณสามารถเปลี่ยนรายการของผู้ดูแลระบบการเขียนโดยใช้ไคลเอ็นต์การควบคุมดูแลระบบ IBM Content Manager",
		admin_repcfg_entry_template: "การจัดการกับเท็มเพลตรายการ:",
		admin_repcfg_entry_template_enable_classes_label: "คลาสที่จะแก้ไขเพื่อการสนับสนุนเท็มเพลตรายการ:",
		admin_repcfg_oos_reference_attribute_label: "แอ็ตทริบิวต์การอ้างอิงสำหรับ Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "สิ่งสำคัญ: คลาสที่คุณระบุจะถูกปรับเปลี่ยนเพื่อสนับสนุนเท็มเพลตรายการ หลังจากที่คุณบันทึกการเปลี่ยนแปลงแล้ว, การเปลี่ยนแปลงนั้นไม่สามารถลบออกจากคลาสได้<br><br>คุณสามารถปรับเปลี่ยนคลาสสำหรับวัตถุประสงค์หนึ่งในสองข้อต่อไปนี้:<br><ul><li>เพื่อเก็บ ID ของเท็มเพลตรายการที่ถูกใช้เพื่อเพิ่มไอเท็ม ดังนั้นค่าติดตั้งเท็มเพลตรายการจะถูกใช้เมื่อไอเท็มถูกปรับเปลี่ยน</li><li>คลาสโฟลเดอร์ลำดับชั้นเท่านั้น: เพื่อสนับสนุนการเชื่อมโยงโฟลเดอร์เท็มเพลตรายการ</li></ul>คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารีเพื่อแก้ไขคลาส",
		admin_repcfg_entry_template_enable_classes_warning: "สิ่งสำคัญ: คลาสที่คุณระบุจะถูกปรับเปลี่ยนเพื่อสนับสนุนเท็มเพลตรายการ หลังจากที่คุณบันทึกการเปลี่ยนแปลงแล้ว, การเปลี่ยนแปลงนั้นไม่สามารถลบออกจากคลาสได้<br><br>คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารีเพื่อแก้ไขคลาส",
		admin_repcfg_entry_template_enable_classes_available: "คลาสที่มีอยู่",
		admin_repcfg_entry_template_enable_classes_selected: "คลาสที่เลือก",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "เก็บ ID เท็มเพลตรายการ",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "ปรับเปลี่ยนคลาสนี้เพื่อเก็บ ID ของเท็มเพลตรายการที่ถูกใช้เพื่อเพิ่มไอเท็ม ดังนั้น ค่าติดตั้งเท็มเพลตรายการถูกใช้เมื่อปรับเปลี่ยนไอเท็ม",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "เก็บการเชื่อมโยงโฟลเดอร์",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "ปรับเปลี่ยนคลาสนี้เพื่อให้สามารถสนับสนุนการเชื่อมโยงโฟลเดอร์เท็มเพลตรายการ อ็อพชันนี้พร้อมใช้งานสำหรับคลาสโฟลเดอร์เชิงลำดับชั้นเท่านั้น",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "คลาสนี้ถูกปรับเปลี่ยนเพื่อเก็บ ID เท็มเพลตรายการ คุณไม่สามารถลบอ็อพชันนี้",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "คลาสนี้ถูกปรับเปลี่ยนเพื่อเก็บการเชื่อมโยงโฟลเดอร์ คุณไม่สามารถลบอ็อพชันนี้",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "เฉพาะคลาสโฟลเดอร์แบบลำดับชั้นและคลาสแบบไม่มีลำดับชั้นเท่านั้นที่สามารถใช้เพื่อเก็บการเชื่อมโยงโฟลเดอร์ที่เก็บ",
		admin_repcfg_entry_template_root_folder_association_title: "เท็มเพลตการรายการที่เชื่อมโยงกับโฟลเดอร์รูท:",
		admin_repcfg_entry_template_root_folder_association_hover: "ระบุเท็มเพลตรายการที่คุณต้องการให้เชื่อมโยงกับโฟลเดอร์รูทบนที่เก็บ IBM Content Manager ของคุณ<br /><br />หากคุณเชื่อมโยงเท็มเพลตรายการกับโฟลเดอร์รูทและผู้ใช้เพิ่มไอเท็มไปยังโฟลเดอร์เชิงลำดับชั้น เท็มเพลตรายการจะยังคงถูกใช้เพื่อเพิ่มไอเท็ม",
		admin_repcfg_entry_template_root_folder_association_button: "ตั้งค่าความสัมพันธ์",
		admin_repcfg_oos_enable_classes_label: "คลาสที่ต้องการปรับเปลี่ยนสำหรับส่วนสนับสนุน Office Online และ Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "สิ่งสำคัญ: คลาสใดๆ ที่คุณระบุจะถูกปรับเปลี่ยนเพื่อให้ทำงานกับ Microsoft Office Online หรือ Edit Service หลังจากที่คุณบันทึกการเปลี่ยนแปลงของคุณ แอ็ตทริบิวต์การอ้างอิงที่ถูกเพิ่มไปยังแต่ละคลาสโดยอัตโนมัติจะไม่สามารถลบทิ้งได้<br><br>คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารีเพื่อแก้ไขคลาส",
		admin_repcfg_oos_enable_classes_available: "คลาสที่มีอยู่",
		admin_repcfg_oos_enable_classes_selected: "คลาสที่เลือก",
		admin_repcfg_oos_enable_classes_note: "สิ่งสำคัญ:",
		admin_repcfg_oos_enable_classes_selected_not_support: "คลาสนี้ไม่สนับสนุน Microsoft Office Online หรือ Edit Service",
		admin_repcfg_oos_enable_classes_selected_not_support1: "นโยบายเวอร์ชันสำหรับคลาสถูกตั้งค่าเป็นเวอร์ชันเสมอ ซึ่ง Microsoft Office Online หรือ Edit Service ไม่สนับสนุน เลือกคลาสอื่น",
		admin_repcfg_download_recording: "ดาวน์โหลดการติดตาม:",
		admin_repcfg_download_recording_hover: "ดาวน์โหลดถูกติดตามโดยค่าดีฟอลต์เมื่อติดตั้ง Social Collaboration Base Extensions add-on บนที่เก็บ อย่างไรก็ตาม, การปิดใช้งานอ็อพชันนี้สามารถปรับปรุงประสิทธิภาพการทำงานของที่เก็บได้<br><br>หากคุณปิดใช้งานอ็อพชันนี้, ผู้ใช้จะมองเห็นจำนวนของการดาวน์โหลดที่เกิดขึ้นก่อนที่จะปิดอ็อพชันนี้",
		admin_repcfg_sync_service: "เซอร์วิสซิงค์:",
		admin_repcfg_download_ignored: "ละเว้นดาวน์โหลดสำหรับผู้ใช้ที่ระบุเฉพาะ:",
		admin_repcfg_download_ignored_hover: "คุณสามารถละเว้นการดาวน์โหลดที่ร้องขอโดยผู้ใช้ที่ระบุเฉพาะ, เช่น ผู้ดูแลระบบหรือแอคเคาต์ระบบเพื่อให้สะท้อนถึงจำนวนของผู้ใช้ที่แท้จริงซึ่งเป็นผู้ดาวน์โหลดเอกสาร ตัวอย่างเช่น, หากคุณมีแอคเคาต์ที่ระบุไว้ซึ่งใช้เพื่อดาวน์โหลดเนื้อหาที่ต้องการสร้างรายงานแบบรายเดือน, คุณสามารถละเว้นการดาวน์โหลดที่ถูกร้องขอโดยแอคเคาต์นั้น<br><br><b>ข้อจำกัด:</b> คุณไม่สามารถระบุกลุ่มได้",

		admin_repcfg_add_as_major_version: "เพิ่มเป็นเวอร์ชันหลัก:",
		admin_repcfg_enable_add_as_major_version: "ใช่",
		admin_repcfg_disable_add_as_major_version: "ไม่",
		admin_repcfg_checkin_as_major_version: "เช็กอินเป็นเวอร์ชันหลัก:",
		admin_repcfg_enable_checkin_as_major_version: "ใช่",
		admin_repcfg_disable_checkin_as_major_version: "ไม่",
		admin_repcfg_annotation_security: "การรักษาความปลอดภัยหมายเหตุประกอบ:",
		admin_repcfg_inherit_annotation_security: "ทำซ้ำความปลอดภัยของเอกสารที่มี",
		admin_repcfg_default_annotation_security: "ใช้การรักษาความปลอดภัยหมายเหตุประกอบดีฟอลต์",
		admin_repcfg_connection_point: "จุดการเชื่อมต่อเวิร์กโฟลว์:",
		admin_repcfg_include_workflow_definition: "แสดงคลาสนิยามเวิร์กโฟลว์:",
		admin_repcfg_include_form_template: "แสดงคลาสเท็มเพลตแบบฟอร์ม:",
		admin_repcfg_enable_include_workflow_definition: "ใช่",
		admin_repcfg_disable_include_workflow_definition: "ไม่",

		admin_repcfg_status_columns: "ไอคอนสถานะ:",
		admin_repcfg_status_columns_hover: "ระบุสถานะที่คุณต้องการดูไอคอน ไอคอนสถานะจะแสดงข้างๆ เอกสาร โฟลเดอร์ และไอเท็มงานในรายการเนื้อหา",
		admin_repcfg_status_columns_documents_or_folders: "แสดงไอคอนเมื่อเอกสารหรือโฟลเดอร์:",
		admin_repcfg_status_columns_documents: "แสดงไอคอนเมื่อเอกสาร:",
		admin_repcfg_status_columns_documents_checked_out: "ถูกเช็กเอาต์",
		admin_repcfg_status_columns_documents_declared_records: "ถูกประกาศเป็นเร็กคอร์ด",
		admin_repcfg_status_columns_documents_minor_versions: "มีเวอร์ชันรอง",
		admin_repcfg_status_columns_documents_compound_document: "เป็นเอกสารประกอบ",
		admin_repcfg_status_columns_documents_bookmarks: "มีบุ๊กมาร์ก",
		admin_repcfg_status_columns_documents_hold: "ถูกพัก",
		admin_repcfg_status_columns_documents_notes: "มีบันทึกย่อ",
		admin_repcfg_status_columns_work_items: "แสดงไอคอนเมื่อไอเท็มงาน:",
		admin_repcfg_status_columns_work_items_locked: "ถูกล็อค",
		admin_repcfg_status_columns_work_items_checked_out: "ถูกเช็กเอาต์",
		admin_repcfg_status_columns_work_items_deadline: "มีกำหนดเวลา",
		admin_repcfg_status_columns_work_items_suspended: "ถูกระงับจากการประมวลผล",

		admin_repcfg_afp2pdf_config_file: "ไฟล์คอนฟิกูเรชัน AFP2PDF:",
		admin_repcfg_transform_xml_file: "ไฟล์การแปลงที่กำหนดเอง:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "เปิดใช้งาน",
		admin_repcfg_disable_ssl: "ปิดใช้งาน",
		admin_repcfg_keyringdb_file: "ไฟล์ฐานข้อมูล Keyring:",
		admin_repcfg_keyringstash_file: "ไฟล์ Keyring stash:",
		admin_repcfg_od_sso: "การลงชื่อใช้งานแบบครั้งเดียว",
		admin_repcfg_od_enable_sso: "เปิดใช้งาน",
		admin_repcfg_od_disable_sso: "ปิดใช้งาน",
		admin_repcfg_od_sso_password: "รหัสผ่าน",
		admin_repcfg_advanced_label: "ขั้นสูง",
		admin_repcfg_custom_properties_label: "คุณสมบัติที่กำหนดเอง:",
		admin_repcfg_new_button_label: "สร้าง",
		admin_repcfg_edit_button_label: "แก้ไข",
		admin_repcfg_delete_button_label: "ลบออก",
		admin_repcfg_custom_head1: "ชื่อ",
		admin_repcfg_custom_head2: "ค่า",
		admin_repcfg_ecpdialog_title_new: "สร้างคุณสมบัติที่กำหนดเองใหม่",
		admin_repcfg_ecpdialog_title_edit: "แก้ไขคุณสมบัติที่กำหนดเอง",
		admin_repcfg_ecpdialog_name: "ชื่อ:",
		admin_repcfg_ecpdialog_value: "ค่า:",
		admin_repcfg_ecpdialog_save: "บันทึก",
		admin_repcfg_ecpdialog_create: "สร้าง",
		admin_repcfg_ecpdialog_cancel: "ยกเลิก",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "ค่านี้เป็นค่าที่จำเป็น ค่าไม่สามารถมีช่องว่างและไม่สามารถซ้ำกัน",

		admin_repcfg_cmis_use_gzip_encoding: "ใช้การเข้ารหัส GZIP:",

		admin_repcfg_task_mgr_proxy: "ID การเชื่อมต่อ Task manager:",
		admin_repcfg_task_mgr_proxy_hover: "สำหรับการแบ่งใช้ Box หรือการลบ Teamspace, task manager ใช้ ID ผู้ใช้ที่เป็นผู้ดูแลระบบ และรหัสผ่านเพื่อรันภารกิจพื้นหลังซึ่งปรับเปลี่ยนที่เก็บ<br><br>คลิก ตั้งค่า และล็อกอินเข้าสู่ที่เก็บโดยใช้ ID ผู้ใช้ที่เป็นผู้ดูแลระบบที่เก็บ และรหัสผ่านซึ่งถูกต้อง",
		admin_task_manager_not_enabled_warning: "อ็อพชันนี้ต้องการเซอร์วิส task manager แต่เซอร์วิส task manager ไม่เปิดใช้งาน  คุณสามารถเปิดใช้งานเซอร์วิส task manager สำหรับเดสก์ท็อปทั้งหมดบนหน้า ข้อมูลทั่วไป สำหรับค่าติดตั้ง",
		admin_task_manager_not_enabled_and_user_warning: "อ็อพชันนี้ต้องการเซอร์วิส task manager แต่เซอร์วิส task manager ไม่เปิดใช้งาน บนหน้านี้ ตั้งค่า ID การเชื่อมต่อ task manager จากนั้น บนหน้า ข้อมูลทั่วไป สำหรับค่าติดตั้ง เปิดใช้งานเซอร์วิส task manager สำหรับเดสก์ท็อปทั้งหมด",
		admin_task_manager_user_id_pw_not_set_warning: "อ็อพชันนี้ต้องการเซอร์วิส task manager และ ID ผู้ใช้ที่เป็นผู้ดูแลระบบ และรหัสผ่าน บนหน้านี้ ตั้งค่า ID การเชื่อมต่อ task manager",
		admin_repcfg_teamspaces_delete_task_id: "ผู้ดูแลระบบที่เก็บ:",
		admin_repcfg_teamspaces_delete_task_password: "รหัสผ่าน:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "คุณต้องระบุผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารีเพื่อเปิดใช้งานเซอร์วิสโปรแกรมจัดการงานในการลบ Teamspace บนที่เก็บ",
		admin_repcfg_teamspaces_delete_task_hover: "โดยดีฟอลต์ เมื่อผู้ใช้ลบ Teamspace แล้ว Teamspace จะถูกซ่อน โฟลเดอร์และเอกสารทั้งหมดใน Teamspace จะยังคงอยู่บนที่เก็บ <br /> <br />เมื่อคุณเปิดใช้งานอ็อพชันนี้ เฉพาะเอกสารที่จัดเก็บในโฟลเดอร์อื่นในที่เก็บเท่านั้นที่ยังคงอยู่ในที่เก็บ",
		admin_repcfg_display_recent_teamspaces_p8_hover: "หากคุณมีจำนวน Teamspace ขนาดใหญ่ในสภาวะแวดล้อมของคุณ ระบบอาจใช้เวลาในการแสดง Teamspace ทั้งหมดในแท็บ <b>Teamspace</b> คุณสามารถเลือกอ็อพชันนี้เพื่อลดระยะเวลาที่ใช้ในการแสดงรายการ<br /><br />หากผู้ใช้ต้องการทำงานกับ Teamspace ที่อยู่ภายนอกช่วงที่คุณระบุ, ผู้ใช้สามารถใช้ฟิลด์ <b>ตัวกรอง</b> เพื่อค้นหา Teamspace",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "ถ้าคุณเลือกอ็อพชันนี้ ผู้ใช้ที่มีบทบาทเป็นเจ้าของบน Teamspace สามารถแก้ไขบทบาทที่เกี่ยวข้องกับ Teamspace ที่สร้างก่อน IBM Content Navigator เวอร์ชัน 2.0.2<br /><br />อ็อพชันนี้ไม่มีผลต่อ Teamspace ที่สร้างด้วย IBM Content Navigator เวอร์ชัน 2.0.2",
		admin_repcfg_use_teamspaces_cm_hover: "ระบุว่าคุณต้องการให้ผู้ใช้สามารถสร้าง Teamspace และเท็มเพลต Teamspace บนที่เก็บนี้หรือไม่<br /><br /><b>สิ่งสำคัญ:</b> ที่เก็บต้องสนับสนุนโฟลเดอร์แบบลำดับชั้น<br /><br />ถ้าคุณเปิดใช้งาน Teamspace, IBM Content Navigator จะสร้างโมเดลข้อมูล Teamspace บนที่เก็บ โมเดลข้อมูลประกอบด้วยอ็อบเจ็กต์ ACL สิทธิ์ ชุดของสิทธิ์ และไอเท็มใหม่สองชนิด",
		admin_repcfg_folder_selector_hover: "เลือกโฟลเดอร์ที่คุณต้องการใช้เป็นโฟลเดอร์รูทเมื่อผู้ใช้เรียกดูเอกสาร ถ้าคุณไม่ได้กำหนดคอนฟิกโฟลเดอร์แบบลำดับชั้นบนที่เก็บของคุณ ค่าติดตั้งนี้จะทำให้คุณสนับสนุนการเรียกดูโดยการกำหนดโฟลเดอร์รูท ถ้าคุณกำหนดคอนฟิกโฟลเดอร์แบบลำดับชั้นไว้บนที่เก็บของคุณ ค่าติดตั้งนี้จะแทนที่โฟลเดอร์รูทที่กำหนดคอนฟิกไว้บนที่เก็บของคุณ",
		admin_repcfg_cm_use_sso_hover: "ระบุว่าคุณจะให้ใช้การลงชื่อใช้งานแบบครั้งเดียวสำหรับผู้ใช้ที่มีชุดสิทธิ์ Trusted Logon หรือไม่<br /><br /><b>สิ่งสำคัญ:</b> การลงชื่อใช้งานแบบครั้งเดียวต้องถูกเปิดใช้งานบนเซิร์ฟเวอร์ Content Manager และต้องกำหนดคอนฟิก WebSphere Application Server สำหรับ LTPA เพื่อให้พารามิเตอร์คอนฟิกูเรชันนี้ทำงาน",
		admin_repcfg_cm_direct_retrieve_hover: "การดึงข้อมูลโดยตรงจะถูกเปิดใช้งานโดยดีฟอลต์ เนื่องจากจะทำให้สามารถดึงเนื้อหาจาก resource manager ได้อย่างรวดเร็ว <br /><br />คุณสามารถปิดใช้งานอ็อพชันนี้ได้ถ้าคุณไม่ต้องการให้ไคลเอ็นต์แอ็พพลิเคชันเข้าถึง resource manager ได้โดยตรง หรือถ้าคุณมีไฟร์วอลล์ (firewall) หรือพร็อกซีเซิร์ฟเวอร์ที่ป้องกันไม่ให้เว็บไคลเอ็นต์เข้าถึง resource manager ผ่าน URL ตัวอย่างเช่น ไฟร์วอลล์สามารถป้องกันไม่ให้ผู้ใช้ดูเอกสารในแอ็พเล็ตวิวเวอร์เมื่อเปิดใช้งานการดึงข้อมูลโดยตรง",
		admin_repcfg_cmItemTypesToDisplay: "ถ้าคุณไม่ต้องการให้ผู้ใช้เห็นชนิดรีซอร์สไอเท็มบนเซิร์ฟเวอร์ IBM Content Manager ของคุณ คุณสามารถแสดงเฉพาะชนิดโมเดลไอเท็มเอกสาร ชนิดไอเท็มที่แสดงเมื่อผู้ใช้สร้างการค้นหา เพิ่มเอกสาร และสร้างโฟลเดอร์",
		admin_repcfg_cm_language_codes_hover: "ระบุภาษาที่ส่งคืนข้อมูลจากเซิร์ฟเวอร์ Content Manager รายการของภาษาที่สามารถใช้ได้จะถูกควบคุมโดยรายการนิยามของภาษาบนเซิร์ฟเวอร์<br /><br /><b>โปรดจำไว้ว่า:</b> ข้อมูลในเว็บไคลเอ็นต์จะแสดงในภาษาที่ตั้งค่าไว้ในเว็บเบราว์เซอร์ของผู้ใช้",
		admin_repcfg_cm_pdf_conversion_hover: "ระบุชนิดของเอกสารที่ต้องการแปลงเป็น PDF เมื่อผู้ใช้ส่งเอกสารที่มีหลายส่วนเป็นสิ่งที่แนบกับอีเมล ส่วนทั้งหมดจะถูกรวมในเอกสาร PDF เดียว",
		admin_repcfg_use_teamspaces_p8_hover: "ระบุว่าคุณต้องการให้ผู้ใช้สามารถสร้าง Teamspace และเท็มเพลต Teamspace บนที่เก็บนี้หรือไม่<br /><br />ถ้าคุณเปิดใช้งาน Teamspace, IBM Content Navigator จะสร้างโมเดลข้อมูล Teamspace บนที่เก็บ โมเดลข้อมูลประกอบด้วยเท็มเพลตคุณสมบัติ อ็อบเจ็กต์ที่กำหนดเอง อ็อบเจ็กต์โฟลเดอร์ และโฟลเดอร์จำนวนมาก",
		admin_repcfg_use_entry_template_p8_hover: "ระบุว่าคุณต้องการให้ผู้ใช้เปิดใช้าชงานเพื่อสร้างและจัดการกับเท็มเพลตรายการบนที่เก็บนี้จาก IBM Content Navigator หากคุณไม่ได้เปิดใช้งานคุณลักษณะนี้, ผู้ใช้สามารถค้นหาและใช้เท็มเพลตรายการที่มีอยู่แล้วบนที่เก็บ<br /><br />หากคุณเปิดใช้งานการจัดการเท็มเพลตรายการ, IBM Content Navigator จะอัพเดตโมเดลข้อมูลเท็มเพลตรายการบนที่เก็บ อัพเดตจะสอดแทรกคุณสมบัติใหม่ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_use_entry_template_cm_hover: "ระบุว่าคุณต้องการให้ผู้ใช้เปิดใช้าชงานเพื่อสร้างและจัดการกับเท็มเพลตรายการบนที่เก็บนี้จาก IBM Content Navigator<br /><br />หากคุณเปิดใช้งานการจัดการกับเท็มเพลตรายการ, IBM Content Navigator จะสร้างโมเดลข้อมูลเท็มเพลตรายการบนที่เก็บ โมเดลข้อมูลสอดแทรกอ็อบเจ็กต์ ACL ใหม่, คุณสมบัติใหม่, และชนิดไอเท็มใหม่ <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>ศึกษาเพิ่มเติม</a>",
		admin_repcfg_sync_service_p8_hover: "ระบุว่าคุณต้องการให้ผู้ใช้สามารถซิงโครไนซ์ไอเท็มรายการโปรดข้ามเวิร์กสเตชันและอุปกรณ์โมบายล์<br><br><b>สิ่งสำคัญ:</b> เมื่อต้องการใช้คุณลักษณะนี้ คุณต้องทำภารกิจต่อไปนี้ให้เสร็จสิ้น:<br><ul><li>ระบุ <b>URL แบบพับลิกของเซอร์วิสซิงค์</b> ในส่วน <b>เซอร์วิสซิงค์</b> ของเครื่องมือการดูแลจัดการระบบ</li><li>เพิ่มที่เก็บนี้ไปยังเดสก์ท็อปที่เซอร์วิสการซิงค์ถูกเปิดใช้งาน</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "ระบุว่าอ็อพชันเวอร์ชันหลักจะถูกเลือกโดยดีฟอลต์เมื่อผู้ใช้เพิ่มเอกสารเข้ากับที่เก็บหรือไม่<br /><br />ผู้ใช้มีอ็อพชันที่จะเคลียร์อ็อพชันนี้ถ้าผู้ใช้ต้องการเพิ่มเอกสารเป็นเวอร์ชันรอง",
		admin_repcfg_p8_checkin_as_major_version_hover: "ระบุว่าอ็อพชันเวอร์ชันหลักจะถูกเลือกโดยดีฟอลต์เมื่อผู้ใช้เช็กอินเอกสารเข้ากับที่เก็บหรือไม่<br /><br />ผู้ใช้มีอ็อพชันที่จะเคลียร์อ็อพชันนี้ถ้าผู้ใช้ต้องการเช็กอินเอกสารเป็นเวอร์ชันรอง",
		admin_repcfg_p8_annotation_security_hover: "ระบุชนิดของการรักษาความปลอดภัยที่จะใช้กับหมายเหตุประกอบโดยดีฟอลต์<br /><br />ผู้ใช้มีอ็อพชันที่จะเปลี่ยนการรักษาความปลอดภัยของหมายเหตุประกอบ",
		admin_repcfg_p8_connection_point_hover: "ถ้าคุณต้องการใช้เวิร์กโฟลว์ IBM FileNet P8 ให้เลือกจุดการเชื่อมต่อ Process Engine จุดการเชื่อมต่อที่คุณเลือกจะกำหนดเวิร์กโฟลว์ที่ พร้อมใช้งานสำหรับผู้ใช้ที่เข้าถึงที่เก็บนี้",
		admin_repcfg_p8_include_workflow_definition_hover: "ถ้าคุณแสดงคลาสเอกสารนิยามเวิร์กโฟลว์ IBM FileNet P8 ในเว็บไคลเอ็นต์ ผู้ใช้สามารถค้นหา และเพิ่มนิยามเวิร์กโฟลว์ไปยังที่เก็บ",
		admin_repcfg_p8_include_form_template_hover: "ถ้าคุณแสดงคลาสเอกสารฟอร์มเท็มเพลต IBM FileNet P8 ในเว็บไคลเอ็นต์ ผู้ใช้สามารถค้นหา และเพิ่มฟอร์มเท็มเพลตไปยังที่เก็บ",
		admin_repcfg_od_afp2pdf_config_file_hover: "ระบุพาธแบบเต็มของไฟล์คอนฟิกูเรชัน AFP2PDF สำหรับที่เก็บนี้บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ จำเป็นต้องใช้ AFP2PDF Transform เพื่อดูและพิมพ์ข้อมูล AFP<br /><br /><b>โปรดจำไว้ว่า:</b> ต้องติดตั้ง AFP2PDF Transform เพื่อใช้พารามิเตอร์นี้",
		admin_repcfg_od_transform_xml_file_hover: " ถ้าคุณต้องการใช้ transform ที่กหนดเองเพื่อแปลงเนื้อหา Content Manager OnDemand ให้ระบุพาธแบบเต็มของไฟล์ XML ที่ใช้เพื่อกำหนด transform ไฟล์ XML ต้องอยู่บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		admin_repcfg_od_ssl_hover: "ระบุว่าจะใช้ SSL เพื่อเข้ารหัสการสื่อสารระหว่างแอ็พพลิเคชันเซิร์ฟเวอร์ IBM Content Navigator และไลบรารีเซิร์ฟเวอร์ Content Manager OnDemand และอ็อบเจ็กต์เซิร์ฟเวอร์หรือไม่<br /><br /><b>สิ่งสำคัญ:</b> เมื่อคุณเปิดใช้งาน SSL สำหรับ Content Manager OnDemand จะไม่รวมถึงการสื่อสารระหว่างแอ็พพลิเคชันเซิร์ฟเวอร์ IBM Content Navigator เว็บเซิร์ฟเวอร์ หรือเวิร์กสเตชันของผู้ใช้",
		admin_repcfg_od_ssl_keyringdb_file_hover: "ระบุพาธแบบเต็มของไฟล์ฐานข้อมูล keyring สำหรับที่เก็บนี้บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ ตัวอย่างเช่น C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb<br /><br />ไฟล์ฐานข้อมูล keyring ประกอบด้วยใบรับรองรูทที่เชื่อถือของคุณ คุณควรใช้การป้องกันระบบไฟล์ที่มีประสิทธิภาพเพื่อป้องกันการเข้าถึงไฟล์นี้โดยไม่มีสิทธิ์",
		admin_repcfg_od_ssl_keyringstash_file_hover: "ระบุพาธแบบเต็มของไฟล์ keyring stash สำหรับที่เก็บนี้บนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์ ตัวอย่างเช่น C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth<br /><br />ไฟล์ keyring stash ประกอบด้วยรหัสผ่านสำหรับไฟล์ฐานข้อมูล keyring คุณควรใช้การป้องกันระบบไฟล์ที่มีประสิทธิภาพเพื่อป้องกันการเข้าถึงไฟล์นี้โดยไม่มีสิทธิ์",
		admin_repcfg_od_sso_password_hover: "ระบุรหัสผ่านที่ใช้สำหรับการลงชื่อใช้งานแบบครั้งเดียวกับเซิร์ฟเวอร์ OnDemand",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API สนับสนุนคุณสมบัติที่กำหนดเอง ถ้าคุณต้องการใช้คุณสมบัติที่กำหนดเองใดๆ เมื่อเชื่อมต่อกับที่เก็บผ่านเว็บไคลเอ็นต์ ให้ระบุชื่อและค่าของคุณสมบัติที่กำหนดเอง<br /><br />สำหรับข้อมูลเกี่ยวกับคุณสมบัติที่กำหนดเองที่สนับสนุน โปรดดูที่ ODWEK Java API Javadocs ซึ่งอยู่ในไดเร็กทอรีย่อย /api ของไดเร็กทอรีการติดตั้ง ODWEK",
		admin_repcfg_od_custom_properties_name_hover: "ป้อนชื่อคุณสมบัติ",
		admin_repcfg_od_custom_properties_value_hover: "ป้อนค่าคุณสมบัติ",
		admin_repcfg_od_use_sso_hover: "ระบุว่าจะอนุญาต single sign-on สำหรับผู้ใช้หรือไม่<br /><br /><b>สิ่งสำคัญ:</b> Single sign-on ต้องถูกเปิดใช้งานบนเซิร์ฟเวอร์ Content Manager OnDemand server และ WebSphere Application Server ต้องถูกกำหนดค่าสำหรับ LTPA เพื่อให้พารามิเตอร์การกำหนดคอนฟิกนี้ทำงาน",
		admin_repcfg_cmis_use_gzip_encoding_hover: "ใช้การเข้ารหัส GZIP สำหรับ CMIS ต้นฉบับนี้",
		admin_repcfg_cm_use_part_file_name: "ชื่อไฟล์ที่จะใช้เมื่อดาวน์โหลดเอกสาร:",
		admin_repcfg_cm_use_part_file_name_help: "ระบุวิธีกำหนดชื่อไฟล์ของเอกสารเมื่อผู้ใช้ดาวน์โหลดเอกสาร",
		admin_repcfg_cm_use_part_file_name_enable: "ใช้ชื่อไฟล์",
		admin_repcfg_cm_use_part_file_name_disable: "ใช้ชื่อของไอเท็มในที่เก็บ",
		admin_repcfg_add_doc_name: "ชื่อดีฟอลต์สำหรับเอกสารที่เพิ่ม:",
		admin_repcfg_add_doc_name_hover: "ผู้ใช้สามารถเปลี่ยนชื่อก่อนจะเพิ่มเอกสาร",
		admin_repcfg_add_doc_name_empty: "ไม่มี (ว่างเปล่า)",
		admin_repcfg_add_doc_name_file_name: "ชื่อไฟล์ของเอกสารที่เลือก",

		admin_repcfg_compound_documents: "คุณลักษณะเอกสารประกอบ:",
		admin_repcfg_compound_documents_hover: "เปิดใช้งานคุณลักษณะเอกสารประกอบ P8, เช่น การนำทาง",
		admin_repcfg_cm_action_list_config_enabled: "รายการแอ็คชันไอเท็มงาน:",
		admin_repcfg_cm_action_list_config_hover: "เมื่อคุณกำหนดคอนฟิกการจัดเส้นทางเอกสารในไคลเอ็นต์การควบคุมดูแลระบบ Content Manager แล้ว คุณสามารถระบุรายการแอ็คชันที่ผู้ใช้สามารถดำเนินการกับไอเท็มงานได้<br /><br />เปิดใช้งานอ็อพชันนี้หากคุณต้องการใช้ รายการแอ็คชัน จากเซิร์ฟเวอร์ Content Manager ค่าติดตั้งเหล่านี้ถูกใช้ในเมนูบริบท และในหน้าต่าง แก้ไขคุณสมบัติ สำหรับไอเท็มงาน<br /><br /><b>สิ่งสำคัญ:</b> ค่าติดตั้งต่างๆ ใน รายการแอ็คชัน จะแทนที่ด้วยเมนูที่ปรับแต่งแล้วซึ่งคุณกำหนดคอนฟิกไว้ในเครื่องมือการควบคุมดูแล Content Navigator หากไม่มีค่าติดตั้งเหล่านี้ใน รายการแอ็คชัน ผู้ใช้จะไม่สามารถทำแอ็คชันใดๆ บนไอเท็มงานได้",

		admin_repcfg_box_share: "การแบ่งใช้ Box",
		admin_repcfg_box_share_p8_hover: "ช่วยให้ผู้ใช้สามารถแบ่งใช้เอกสารจากที่เก็บนี้ การแบ่งใช้เอกสารรวมถึงการคัดลอกไฟล์ไปยัง Box, การสร้างลิงก์ และการส่งลิงก์ในอีเมล<br /><br />ถ้าคุณเปิดใช้งานการแบ่งใช้ Box, IBM Content Navigator จะสร้างโมเดลข้อมูลการแบ่งใช้ Box บนที่เก็บ เมื่อต้องการติดตั้งโปรแกรมเสริมการแบ่งใช้ IBM Content Navigator Box คุณต้องเชื่อมต่อกับที่เก็บในฐานะผู้ดูแลระบบเซิร์ฟเวอร์ไลบรารี",

		admin_menu_type_icon: "ไอคอนชนิดเมนู",
		admin_menu_toolbar_hover: "แถบเครื่องมือ",
		admin_menu_toolbar_custom_hover: "แถบเครื่องมือที่กำหนดเอง",
		admin_menu_contextMenu_hover: "เมนูบริบท",
		admin_menu_contextMenu_custom_hover: "เมนูบริบทที่กำหนดเอง",

		admin_menu_contextMenu_custom_empty: "ไม่มีเมนูบริบทที่กำหนดเองที่กำหนดไว้ในปลั๊กอินที่กำหนดคอนฟิกไว้",
		admin_menu_toolbar_custom_empty: "ไม่มีแถบเครื่องมือที่กำหนดเองที่กำหนดไว้ในปลั๊กอินที่กำหนดคอนฟิกไว้",

		admin_file_type_category_filters: "ตัวกรองชนิดไฟล์:",
		admin_file_type_category_filters_hover_help: "ระบุรายการของชนิดไฟล์ที่ผู้ใช้สามารถใช้ได้ในสถานการณ์ต่อไปนี้:<ul><li>จำกัดรายการผลลัพธ์เมื่อค้นหาหรือเรียกดูใน IBM Content Navigator สำหรับ Microsoft Office<li>จำกัดรายการของผลลัพธ์เมื่อค้นหาที่เก็บ IBM FileNet P8 ในเว็บไคลเอ็นต์<li>เมื่อต้องการจำกัดชนิดไฟล์ที่ผู้ใช้สามารถเพิ่มไปยังที่เก็บเมื่อใช้เท็มเพลตรายการ</ul>",
		admin_file_type_only_use_in_et_folder_association: "แสดงเฉพาะในการเชื่อมโยงโฟลเดอร์เท็มเพลตรายการ",
		admin_office_config_properties_label: "คุณสมบัติออฟฟิศ",
		admin_office_config_type_label: "ชนิดข้อมูล",
		admin_office_config_mapped_property_label: "คุณสมบัติที่เก็บ",
		admin_office_config_properties_hover_help: "ป้อนแล้วเพิ่มชื่อของแต่ละคุณสมบัติของ Microsoft Office ที่คุณต้องการแม็พกับคุณสมบัติของที่เก็บ ชนิดข้อมูลของคุณสมบัติทั้งหมดต้องตรงกัน",
		admin_office_config_mapped_property_hover_help: "ถ้าคุณต้องการแม็พคุณสมบัติออฟฟิศกับคุณสมบัติของที่เก็บมากกว่าหนึ่งคุณสมบัติ คุณต้องสร้างการแม็พคุณสมบัติใหม่",
		admin_new_property_mapping_title: "การแม็พคุณสมบัติใหม่",
		admin_property_mapping_title: "แก้ไขการแม็พคุณสมบัติ",
		admin_property_mapping_instruction: "ระบุคุณสมบัติ Microsoft Office ที่คุณต้องการแม็พกับคุณสมบัติบนที่เก็บ ชนิดข้อมูลของคุณสมบัติออฟฟิศต้องตรงกับชนิดข้อมูลของคุณสมบัติบนที่เก็บ <br /><br />ถ้าเอกสาร Office มีคุณสมบัติมากกว่าหนึ่งจากการแม็พ IBM Content Navigator ใช้คุณสมบัติแรกในรายการเพื่อเติมข้อมูลคุณสมบัติบนที่เก็บ",
		admin_ms_general_settings: "กำหนดคอนฟิกทั่วไป:",
		admin_ms_delete_local_settings: "ลบไฟล์โลคัลเมื่อผู้ใช้:",
		admin_ms_outlook_options: "การรวม Outlook:",
		admin_ms_enable_props_mapping: "แม็พคุณสมบัติ Office กับคุณสมบัติของที่เก็บเมื่อผู้ใช้:",
		admin_ms_open_doc_when_checkout: "เช็กเอาต์เอกสารโดยอัตโนมัติเมื่อเปิดเอกสาร",
		admin_ms_open_doc_when_checkout_hover_help: "การเลือกอ็อพชันนี้จะป้องกันผู้ใช้ไม่ให้เขียนทับไฟล์บนที่เก็บด้วยไฟล์เวอร์ชันเก่า",
		admin_ms_prompt_close_office: "พร้อมต์ให้ผู้ใช้เช็กอินเอกสารเมื่อปิดแอ็พพลิเคชัน Office",
		admin_ms_prompt_close_office_hover_help: "การเลือกอ็อพชันนี้ป้องกันไม่ให้ผู้ใช้ลืมเช็กอินงานของพวกเขา",
		admin_ms_add_with_entry_template_only: "แสดงเฉพาะแอ็คชัน เพิ่มด้วยเท็มเพลต",
		admin_ms_delete_local_on_add: "ลบโลคัลไฟล์เมื่อผู้ใช้เพิ่มเอกสาร",
		admin_ms_delete_local_on_checkin: "ลบโลคัลไฟล์เมื่อผู้ใช้เช็กอินเอกสาร หรือยกเลิกเช็กเอาต์",
		admin_ms_delete_local_on_add_hover_help: "เมื่อผู้ใช้เพิ่มเอกสารลงใน IBM Content Navigator for Microsoft Office, เอกสารจะถูกเพิ่มลงในที่เก็บ และสำเนาโลคัลของเอกสารยังคงเปิดอยู่เพื่อให้ผู้ใช้สามารถเช็กเอาต์เอกสารได้ทันทีเพื่อทำการเปลี่ยนแปลง<br /><br />เลือกอ็อพชันนี้เพื่อปิด และลบสำเนาโลคัลของเอกสารโดยอัตโนมัติ หลังจากเพิ่มเอกสารลงในที่เก็บ",
		admin_ms_delete_local_on_checkin_hover_help: "เมื่อผู้ใช้เช็กอินเอกสารใน IBM Content Navigator for Microsoft Office, เอกสารจะถูกเช็กอินในที่เก็บ และสำเนาโลคัลของเอกสารยังคงเปิดอยู่ นอกจากนี้ หลังจากใช้แอ็คชันยกเลิกเช็กเอาต์ สำเนาโลคัลของเอกสารยังคงเปิดอยู่เช่นกัน ในขณะที่สำเนาโลคัลเปิดอยู่ ผู้ใช้สามารถเช็กเอาต์เอกสารอีกครั้งได้ทันทีเพื่อทำการเปลี่ยนแปลง<br /><br />เลือกอ็อพชันนี้เพื่อปิด และลบสำเนาโลคัลของเอกสารโดยอัตโนมัติ หลังจากเช็กอินเอกสาร หรือใช้แอ็คชันยกเลิกเช็กเอาต์",
		admin_ms_delete_local_on_save: "บันทึกเอกสาร",
		admin_ms_prompt_for_props_on_add: "แสดงพร้อมต์ให้ผู้ใช้ป้อนค่าคุณสมบัติเมื่อพวกเขาเพิ่มอีเมลลงในที่เก็บ",
		admin_ms_prompt_for_props_on_add_hover_help: "ถ้าคุณไม่ได้เลือกอ็อพชันนี้ เว็บไคลเอ็นต์ใช้การแม็พคุณสมบัติ Outlook ที่กำหนดไว้สำหรับที่เก็บ<br /><br />ถ้าคุณมีเท็มเพลตรายการที่เชื่อมโยงกับโฟลเดอร์ซึ่งเพิ่มอีเมลไว้ ผู้ใช้อาจไม่ได้รับพร้อมต์สำหรับคุณสมบัติต่างๆ",
		admin_ms_delete_email_on_add: "ลบอีเมลจากอีเมลเซิร์ฟเวอร์เมื่อเพิ่มอีเมลลงในที่เก็บ",
		admin_ms_send_email_as_link_only: "ป้องกันไม่ให้ผู้ใช้ส่งเอกสารเป็นสิ่งที่แนบ",
		admin_ms_send_email_as_link_only_hover_help: "ถ้าคุณเลือกอ็อพชันชันนี้ ผู้ใช้สามารถส่งเอกสารเป็นลิงก์จาก Outlook เท่านั้น อ็อพชันนี้ทำให้แน่ใจว่าเฉพาะผู้ใช้ที่มีสิทธิใช้งานที่เหมาะสมบนที่เก็บเท่านั้นที่สามารถดูเอกสารนั้นได้",
		admin_ms_enable_prop_mapping_for_add: "แม็พคุณสมบัติ Office กับคุณสมบัติที่เก็บเมื่อผู้ใช้เพิ่มหรือเช็กอินเอกสาร",
		admin_ms_checkout_document_after_add: "เช็กเอาต์เอกสารโดยอัตโนมัติหลังจากเพิ่มเอกสารลงในที่เก็บ",
		admin_no_default_document_type_filtering: "ส่งคืนชนิดเอกสารทั้งหมดตามค่าดีฟอลต์เมื่อผู้ใช้รันการค้นหา",
		admin_no_default_document_type_filtering_hover_help: "ใน IBM Content Navigator สำหรับ Microsoft Office, ลักษณะการทำงานดีฟอลต์คือ ผู้ใช้มองเห็นเฉพาะชนิดเอกสารสำหรับแอ็พพลิเคชันปัจจุบันเมื่อผู้ใช้รันการค้นหา ตัวอย่างเช่น, ชนิดเอกสาร Word ถูกเลือกตามค่าดีฟอลต์เมื่อผู้ใช้ค้นหาจาก Microsoft Word<br/><br/>อย่างไรก็ตาม, การเลือกอ็อพชันนี้จะล้างเช็กบ็อกซ์ชนิดเอกสารเพื่อให้ผู้ใช้มองเห็นเอกสารทั้งหมดที่ถูกส่งคืนโดยการค้นหา ผู้ใช้สามารถเขียนทับค่าติดตั้งนี้โดยเลือกชนิดเอกสารตั้งแต่หนึ่งชนิดขึ้นไปก่อนที่ผู้ใช้จะรันการค้นหา",
		admin_ms_enable_prop_mapping_for_add_hover_help: "ระบุว่าแม็พคุณสมบัติเอกสารที่กำหนดสำหรับเอกสาร Microsoft Office กับคุณสมบัติที่กำหนดบนที่เก็บ<br /></br /><b>สิ่งสำคัญ:</b> หากคุณเปิดใช้งานคุณลักษณะนี้, คุณต้องกำหนดคอนฟิกคุณสมบัติ Office สำหรับแต่ละที่เก็บในสภาวะแวดล้อมของคุณ หากคุณไม่ได้แม็พคุณสมบัติ Office เข้ากับคุณสมบัติที่เก็บ คุณลักษณะนี้จะไม่ทำงาน<br /><br />ค่าติดตั้งนี้ไม่สามารถใช้กับ Microsoft Outlook",
		admin_ms_checkout_document_after_add_hover_help: "เลือกอ็อพชันนี้เพื่อลดจำนวนของผู้ใช้ที่ตามมา ซึ่งต้องใช้เพื่อทำงานกับเอกสาร หลังจากเพิ่มเอกสารลงในที่เก็บ<br /></br /><b>เคล็ดลับ:</b> เพื่อให้แน่ใจว่าผู้ใช้เช็กอินไฟล์กลับในที่เก็บ ให้เลือก <b>พร้อมต์ผู้ใช้ให้เช็กอินเอกสารเมื่อผู้ใช้ปิดแอ็พพลิเคชัน Office</b>",
		admin_ms_show_details_recently_used: "แสดงรายละเอียดของไอเท็ม <b>ที่ใช้ล่าสุด</b>",
		admin_ms_show_details_recently_used_hover_help: "โดยดีฟอลต์ เมื่อคุณดูรายการของไอเท็มที่ใช้ล่าสุด รายละเอียดสำหรับไอเท็มจะถูกซ่อนเพื่อให้สามารถแสดงดีฟอลต์ได้มากขึ้น เมื่อคุณเลือกอ็อพชันนี้ ในรายการของไอเท็มที่ใช้ล่าสุด โดยดีฟอลต์ รายละเอียดสำหรับเอกสารแรกจะถูกแสดงในบานหน้าต่างรายละเอียด",
		admin_ms_show_no_permissions_warning: "แสดงคำเตือนเมื่อผู้ใช้แก้ไขคุณสมบัติ หรือเช็กอินเอกสาร แต่ไม่มีสิทธิดูเท็มเพลตรายการของเอกสาร",
		admin_ms_show_no_permissions_warning_hover_help: "หากเอกสารในที่เก็บมีการสร้างขึ้นโดยใช้เท็มเพลตรายการ แต่ผู้ใช้ไม่มีสิทธิดูเท็มเพลตรายการของเอกสาร ระบบจะไม่ดึงข้อมูลเท็มเพลตรายการ<br /><br/>ดังนั้น เมื่อผู้ใช้แก้ไขคุณสมบัติเอกสาร คุณสมบัติจึงแสดงขึ้นโดยไม่ใช้เท็มเพลตรายการ และเมื่อผู้ใช้เช็กอินเอกสาร เอกสารมีการเช็กอินโดยไม่ใช้เท็มเพลตรายการ<br /><br />โดยดีฟอลต์ แอ็คชันเหล่านี้เกิดขึ้นโดยไม่มีการแจ้งผู้ใช้ว่าเท็มเพลตรายการกำลังถูกใช้อยู่ คำเตือนมีการบันทึกไว้ในล็อกไฟล์เท่านั้น<br /><br />เลือกอ็อพชันนี้ถ้าคุณต้องการแสดงคำเตือน ที่แจ้งให้ผู้ใช้ทราบในทันทีเมื่อไม่ได้ใช้เท็มเพลตรายการ",
		admin_ms_hide_search_actions: "ยุบส่วนตัวกรองการค้นหา",
		admin_ms_hide_search_actions_hover_help: "โดยดีฟอลต์ ผู้ใช้สามารถใช้ตัวกรองแอ็คชันเพื่อระบุแอ็คชัน ผู้ใช้ กลุ่มของผู้ใช้ และเลือกวันที่หรือช่วงวันที่ซึ่งแอ็คชันเกิดขึ้น ตัวอย่างเช่น คุณสามารถค้นหาเฉพาะเอกสารที่คุณเพิ่มระหว่างเดือนที่แล้ว<br /><br />ถ้าคุณไม่ต้องการอนุญาตให้ผู้ใช้ใช้ตัวกรองแอ็คชัน ให้เลือกอ็อพชันนี้เพื่อซ่อนตัวกรองแอ็คชัน และลดจำนวนฟิลด์ที่แสดงขึ้นขณะกำหนดเกณฑ์การค้นหา",
		admin_ms_hide_save_document: "ซ่อนอ็อพชัน <b>บันทึก</b> ในแถบริบบอน",
		admin_ms_hide_save_document_hover_help: "โดยใช้อ็อพชัน <b>บันทึก</b> ผู้ใช้สามารถบันทึกการเปลี่ยนแปลงของเอกสารลงในที่เก็บได้โดยไม่ต้องเช็คอินเอกสาร",
		admin_ms_indicate_managed_email_on_add: "บ่งชี้ว่าได้เพิ่มอีเมลไปยังที่เก็บแล้ว",
		admin_ms_indicate_managed_email_on_add_hover_help: "การเลือกอ็อพชันนี้อนุญาตให้ผู้ใช้ทราบว่าอีเมลมีอยู่แล้วในที่เก็บ, ซึ่งสามารถลดจำนวนครั้งที่เพิ่มอีเมลไปยังที่เก็บได้  เมื่อเลือกอ็อพชันนี้, หมวดหมู่สีใหม่ที่เรียกว่า IBM ECM จะถูกสร้างใน Microsoft Outlook อีเมลใดๆ ที่เพิ่มไปยังที่เก็บจะถูกเพิ่มไยปังหมวดหมู จัดการใน IBM ECM โดยอัตโนมัติ",
		admin_ms_edit_group_add_command_configuration: "เพิ่มอ็อพชันในกลุ่ม แก้ไข:",
		admin_ms_edit_group_add_command_configuration_hover_help: "ระบุว่า อ็อพชัน <b>เพิ่ม</b> พร้อมใช้งานจากกลุ่ม <b>แก้ไข</b> ในแถบริบบอน:<ul><li>เลือก <b>แสดงอ็อพชันเพิ่มทั้งหมด</b> เพื่อแสดงปุ่ม เพิ่ม และแอ็คชัน เพิ่ม ทั้งหมดที่มีอยู่จากกลุ่ม แก้ไข</li><li>เลือก <b>ซ่อนอ็อพชันเพิ่มทั้งหมด</b> เพื่อปกป้องผู้ใช้จากการเพิ่มเอกสารไปยังที่เก็บหรือหากคุณต้องการให้ผู้ใช้เพิ่มเอกสารภายใน Teamspace เท่านั้น</li><li>เลือก <b>แอ็คชัน ซ่อน เพิ่มด้วยเท็มเพลต</b> หากคุณต้องการบังคับให้ใช้การเชื่อมโยงโฟลเดอร์เท็มเพลตรายการและปกป้องผู้ใช้จากการเลือกเท็มเพลตรายการอื่น</li><li>เลือก <b>แอ็คชันแสดง เพิ่มด้วยเท็มเพลต เท่านั้น</b> หากคุณต้องการให้ผู้ใช้เพิ่มเอกสารโดยใช้เท็มเพลตรายการเท่านั้น</li></ul>",
		admin_ms_show_edit_group_add_button: "แสดงอ็อพชันเพิ่มทั้งหมด (ดีฟอลต์)",
		admin_ms_hide_edit_group_add_button: "ซ่อนอ็อพชันเพิ่มทั้งหมด",
		admin_ms_hide_add_with_entry_template: "แอ็คชัน ซ่อน เพิ่มด้วยเท็มเพลต",
		admin_ms_managed_in_ecm: "ถูกจัดการใน IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "ถ้าผู้ใช้แสดงหมวดหมู่ใน Microsoft Outlook เลเบลนี้ถูกแสดงสำหรับอีเมลที่ถูกเพิ่มให้กับที่เก็บ IBM Content Manager หรือ IBM FileNet Content Manager",
		admin_ms_managed_in_ibm_ecm_input_invalid: "ชื่อหมวดหมู่ ถูกจัดการใน IBM ECM ไม่สามารถมีเครื่องหมายคอมมา (,) หรือเซมิโคลอน (;)",
		admin_delete_open_docs_after_close: "ลบเอกสารที่เปิดไว้โดยอัตโนมัติเมื่อผู้ใช้ปิดเอกสาร",
		admin_admin_delete_open_docs_after_close_hover_help: "เมื่อผู้ใช้เปิดเอกสารใน IBM Content Navigator สำหรับ Microsoft Office, เอกสารจะถูกดาวน์โหลดไปยังไดเร็กทอรีเอกสารของผู้ใช้หรือไปยังตำแหน่งที่ระบุไว้ตามค่าติดตั้งการติดตามไฟล์สำหรับเดสก์ท็อป<br><br>เลือกอ็อพชันนี้เพื่อลบไฟล์ที่เปิดอยู่แต่ไม่ได้เช็กเอาต์เมื่อผู้ใช้ปิดเอกสาร การเลือกอ็อพชันนี้ช่วยคุณ:<ul><li>บังคับใช้นโยบายที่สอดคล้องกับ IT</li><li>มั่นใจได้ว่าผู้ใช้กำลังทำงานกับเวอร์ชันล่าสุดของเอกสาร</li><li>ลดจำนวนพื้นที่ดิสก์ที่ถูกใช้เพื่อเก็บเอกสาร</li><ul>",
		admin_ms_custom_command_configuration: "คำสั่งแบบกำหนดเอง:",
		admin_ms_custom_command_configuration_hover_help: "คุณสามารถเพิ่มได้สูงสุดสี่คำสั่งในแถบเครื่องมือ IBM Content Navigator สำหรับ  Microsoft Office ในแอ็พพลิเคชัน Microsoft Office คำสั่งสามารถใช้เพื่อเปิด URL ตัวอย่างเช่น, คุณสามารถเพิ่มคำสั่งเพื่อเปิดเซอร์วิสที่สามารถใช้เพื่อค้นหาผู้ใช้และกลุ่ม",
		admin_ms_custom_command_dialog_title: "แก้ไขคำสั่งแบบกำหนดเอง",
		admin_ms_custom_command_dialog_intro_text: "นิยามคำสั่งที่สามารถใช้เพื่อเปิด URL จากแถบเครื่องมือ IBM Content Navigator สำหรับ Microsoft Office ในแอ็พพลิเคชัน Microsoft Office",
		admin_ms_custom_command_id: "คำสั่ง ${0}",
		admin_ms_custom_command_available_label: "มีอยู่",
		admin_ms_custom_command_available_hover_help: "หาก URL ที่นิยามไว้สำหรับคำสั่งต้องการให้ออฟไลน์เพื่อการบำรุงรักษา, คุณสามารถล้างเช็กบ็อกซ์สำหรับคำสั่งเพื่อให้คำสั่งไม่แสดงอยูใน Microsoft Office<br/><br/><b>สิ่งสำคัญ:</b> ผู้ใช้ต้องล็อกเอาต์ออกจากเดสก์ท็อปสำหรับเพื่อให้การเปลี่ยนแปลงมีผลบังคับใช้ใน IBM Content Navigator สำหรับ Microsoft Office",
		admin_ms_custom_command_command_id_label: "ID คำสั่ง",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "เลเบล",
		admin_ms_custom_command_label_hover_help: "ระบุเลเบลที่ต้องการแสดงสำหรับคำสั่งใน Microsoft Office",
		admin_ms_custom_command_description_label: "คำอธิบาย",
		admin_ms_custom_command_description_hover_help: "ระบุคำอธิบายเพื่อแสดงคำสั่งใน Microsoft Office",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "ระบ URL ที่ถูกต้องเพื่อเปิดจาก Microsoft Office URL สามารถเป็นเว็บเพจหรือเซอร์วิส",
		admin_ms_custom_command_icon_label: "ไอคอน",
		admin_ms_custom_command_icon_hover_help: "ระบุชื่อไฟล์ของไอคอนที่ต้องการแสดง, ตัวอย่างเช่น, CommandIcon.png<br/><br/><b>สิ่งสำคัญ:</b> คุณต้องเพิ่มไฟล์ไอคอนที่ไดเร็กทอรี Plugins ของไดเร็กทอรีการติดตั้ง IBM Content Navigator สำหรับ Microsoft Office บนแต่ละเครื่องไคลเอ็นต์<br/><br/>หากไฟล์ไอคอนไม่ได้อยู่ในไดเร็กทอรี Plugins, หรือหากคุณไม่ได้ระบุไอคอนไว้, ไอคอนดีฟอลต์, customButtonIcon_38.gif, จะแสดง",
		admin_ms_custom_command_group_name: "เลเบลกลุ่ม:",
		admin_ms_custom_command_group_name_hover_help: "คุณสามารถระบุเลเบลกลุ่มที่ต้องการแสดงด้านล่างคำสั่งแบบกำหนดเองในแถบริบบอน<br/><br/>หากคุณไม่ได้ระบุเลเบลไว้, เลเบลกลุ่มคือ <b>คำสั่งแบกำหนดเอง</b>",
		admin_ms_ribbon_tab_label: "เลเบลแท็บ IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "ป้อนชื่อที่คุณต้องการแสดงสำหรับแท็บ IBM Content Navigator สำหรับ Microsoft Office ในแถบริบบอน Microsoft Office หากคุณไม่ได้ระบุชื่อไว้, แท็บจะตั้งชื่อ \“IBM ECM\"",
		admin_ms_close_task_pane_on_open: "ปิดบานหน้าต่างภารกิจเมื่อผู้ใช้เปิดเอกสาร",
		admin_ms_close_task_pane_on_open_hover_help: "เลือกอ็อพชันนี้หากคุณต้องการขยายพื้นที่ให้ใหญ่สุดเพื่อให้ผู้ใช้มองเห็นเอกสารใน Microsoft Office<br/><br/>ผู้ใช้ Microsoft Office 2010: เพื่อให้มั่นใจว่าบานหน้าต่างภารกิจถูกปิดสำหรับทุกเอกสาร, ให้เปิดใช้งานโหมดอินเตอร์เฟสเอกสารจำนวนมาก (MDI) โดยคลิก <b>อ็อพชัน</b> &gt; <b>ระดับสูง</b> และล้างอ็อพชัน <b>แสดงหน้าต่างทั้งหมดในแถบภารกิจ</b>",
		admin_ms_open_document_options: "อ็อพชันเปิดเอกสาร:",
		admin_ms_delete_local_file_options: "อ็อพชันลบโลคัลไฟล์:",
		admin_ms_add_and_checkin_options: "อ็อพชันเพิ่มและเช็กอิน:",
		admin_ms_search_options: "อ็อพชันการค้นหา:",
		admin_ms_display_options: "อ็อพชันการแสดงผล:",
		admin_ms_bidirection_enable_label: "เปิดใช้งานส่วนสนับสนุนสำหรับข้อความแบบสองทิศทาง",
		admin_ms_bidirection_enable_hover_help: "เลือกอ็อพชันนี้หากคุณต้องการให้ผู้ใช้ป้อนหรือดูข้อความใน IBM Content Navigator สำหรับ Microsoft Office ในทิศทางที่ไม่ใช่จากซ้ายไปขวา",
		admin_ms_text_direction_label: "ทิศทางข้อความหลักสำหรับเนื้อหา:",
		admin_ms_text_direction_hover_help: "ระบุทิศทางที่ข้อความถูกป้อนลงในฟิลด์อินพุตใน IBM Content Navigator สำหรับ Microsoft Office ค่าติดตั้งนี้ยังควบคุมวิธีการแสดงไอเท็ม เช่น ชื่อโฟลเดอร์หรือค่าคุณสมบัติ",
		admin_ms_control_threshold_label: "จำนวนไอเท็มต่ำสุดที่จะเปิดใช้งานการดูล่วงหน้า:",
		admin_ms_control_threshold_hover_help: "โดยดีฟอลต์ การดูล่วงหน้าเปิดใช้งานเมื่อจำนวนไอเท็มมากกว่า หรือเท่ากับ 50 สำหรับการค้นหา หรือการตั้งค่าคุณสมบัติที่มีค่าซึ่งกำหนดไว้ล่วงหน้าในรายการดร็อปดาวน์ คุณสามารถเปลี่ยนค่าต่ำสุด",

		admin_ms_default_email_class: "คลาสที่ใช้เมื่อเพิ่มอีเมล",
		admin_ms_default_email_class_hover_help: "อีเมลใดๆ ที่เพิ่มเข้ากับที่เก็บนี้จาก Microsoft Outlook จะถูกเพิ่มเข้ากับคลาสที่คุณระบุ ผู้ใช้ไม่สามารถเปลี่ยนคลาส",
		admin_ms_default_folder_class: "คลาสที่ใช้เมื่อสร้างโฟลเดอร์",
		admin_ms_default_folder_class_hover_help: "โฟลเดอร์ใดๆ ที่สร้างในที่เก็บนี้จากแอ็พพลิเคชัน Microsoft Office จะถูกเพิ่มเข้ากับคลาสที่คุณระบุ  ผู้ใช้ไม่สามารถเปลี่ยนคลาส",
		admin_ms_default_folder_warn_title: "คุณไม่สามารถใช้คลาส ${0} เป็นคลาสเพื่อใช้งานเมื่อสร้างโฟเดอร์",
		admin_ms_default_folder_warn_name_prop_invalid: "คุณสมบัติชื่อของคลาสไม่ใช่สตริง และชื่อของโฟลเดอร์ต้องเป็นสตริง<br />เลือกคลาสอื่นที่จะใช้เมื่อสร้างโฟลเดอร์ หรือทำงานกับผู้ดูแลระบบ IBM Content Manager ของคุณเพื่อเปลี่ยนคุณสมบัติชื่อของคลาสให้เป็นสตริง",
		admin_ms_default_folder_warn_req_props: "คลาสมีคุณสมบัติที่จำเป็น ซึ่งไม่ได้กำหนดค่า อย่างไรก็ตาม ผู้ใช้ไม่สามารถระบุค่าสำหรับคุณสมบัติที่จำเป็นเมื่อพวกเขาสร้างโฟลเดอร์จาก IBM Content Navigator สำหรับ Microsoft Office<br />เลือกคลาสอื่นที่จะใช้เมื่อสร้างโฟลเดอร์ หรือทำงานกับผู้ดูแลระบบ IBM Content Manager ของคุณเพื่อทำให้ฟิลด์ที่จำเป็นกลายเป็นฟิลด์ทางเลือก หรือกรอกข้อมูลฟิลด์ที่จำเป็นไว้ล่วงหน้าด้วยค่า",
		admin_ms_delimiter_for_office_properties: "ตัวคั่นสำหรับคุณสมบัติสตริงแบบหลายค่า",
		admin_ms_delimiter_for_office_properties_hover_help: "ระบุอักขระที่จะใช้เป็นตัวคั่นสำหรับคุณสมบัติสตริง ซึ่งคุณกำลังแม็พกับคุณสมบัติสตริงแบบหลายค่า โดยดีฟอลต์ คุณสามารถกำหนดชุดของค่าให้กับคุณสมบัติสตริงแบบหลายค่า โดยใช้เครื่องหมายเซมิโคลอน (;) เป็นตัวคั่นเพื่อแบ่งแยกค่า อย่างไรก็ตาม ถ้าค่าสตริงค่าใดค่าหนึ่งมีเครื่องหมายเซมิโคลอน คุณไม่สามารถเพิ่มค่าสตริงนั้น ยกเว้นว่าจะเปลี่ยนตัวคั่นเป็นอักขระอื่น ตัวอย่างเช่น คุณอาจเปลี่ยนตัวคั่นเป็นเครื่องหมายคอมมา (,)",
		admin_ms_outlookPropertyRemembrance : "จดจำค่าติดตั้งเมื่อเพิ่มข้อความและสิ่งที่แนบ",
		admin_ms_outlookPropertyRemembrance_hover_help : "ค่าคุณสมบัติ ตำแหน่ง การเลือกคลาส และความปลอดภัยที่ถูกกำหนดให้กับข้อความและสิ่งที่แนบมีการจดจำไว้ และจะถูกใช้เป็นค่าติดตั้งดีฟอลต์เมื่อเพิ่มไอเท็มในอนาคต",

		admin_file_type_name_hover_help: "วิธีใช้การวางเมาส์บนชื่อ",
		admin_file_type_description_hover_help: "วิธีใช้การวางเมาส์บนคำอธิบาย",
		admin_file_type_dialog_title: "แก้ไขตัวกรองชนิดไฟล์",
		admin_new_file_type_dialog_title: "สร้างตัวกรองชนิดไฟล์",
		admin_mobile_feature_dialog_title: "คุณลักษณะ",
		admin_mobile_feature_dialog_new_title: "คุณลักษณะใหม่",
		admin_file_type_instructions: "สร้างตัวกรองที่ผู้ใช้สามารถจำกัดรายการของผลการค้นหา คุณสามารถแม็พชนิด MIME หลายๆ ชนิดเข้ากับตัวกรอง",
		admin_file_type_filter_place_holder: "กรองชนิด MIME",
		admin_new_button_label: "สร้าง",
		admin_edit_button_label: "แก้ไข",
		admin_delete_button_label: "ลบออก",
		admin_copy_button_label: "คัดลอก",
		admin_verify_button_label: "ตรวจสอบ",
		admin_availabe_filters_label: "ตัวกรองที่พร้อมใช้งาน",
		admin_selected_filters_label: "ตัวกรองที่เลือก",

		admin_mobile_access: "การเข้าถึงแอ็พพลิเคชันโมบายล์:",
		admin_mobile_access_hover_help: "ถ้าคุณต้องการใช้ IBM Content Navigator จากอุปกรณ์โมบายล์ ขอแนะนำให้คุณอนุญาตให้ผู้ใช้เข้าถึงเดสก์ท็อปของพวกเขาได้จากโมบายล์แอ็พพลิเคชัน<br /><br />ถ้าคุณปิดใช้งานการเข้าถึงเดสก์ท็อปนี้จากโมบายล์แอ็พพลิเคชัน ผู้ใช้จะยังสามารถเข้าถึงเว็บไคลเอ็นต์ได้จากแอ็พพลิเคชันเบราว์เซอร์ของพวกเขา อย่างไรก็ตาม เว็บไคลเอ็นต์ไม่ได้ถูกออกแบบมาเพื่อเข้าถึงจากอุปกรณ์โมบายล์",

		admin_mobile_access_allow_label: "อนุญาตให้ผู้ใช้:",
		admin_mobile_allow_add_photos: "เพิ่มรูปภาพจากกล้องและไลบรารีรูปถ่าย",
		admin_mobile_allow_add_docs: "เพิ่มเอกสารและสร้างโฟลเดอร์ลงในที่เก็บ",
		admin_mobile_allow_open_docs: "เปิดเอกสารในแอ็พพลิเคชันอื่นๆ",
		admin_mobile_allow_add_docs_hover_help: "ผู้ใช้สามารถสร้างโฟลเดอร์ หรือเพิ่มเอกสารจากโมบายล์แอ็พพลิเคชันอื่นๆ เช่น เอกสารที่แนบมากับอีเมล",
		admin_mobile_allow_open_docs_hover_help: "ผู้ใช้ได้รับพร้อมต์ให้เลือกแอ็พพลิเคชันที่จะใช้ดูเอกสารที่เลือก ถ้ามีเพียงแอ็พพลิเคชันเดียวที่พร้อมใช้งาน แอ็พพลิเคชันนั้นจะถูกใช้",
		admin_mobile_features: "คุณลักษณะ:",
		admin_mobile_features_hover_help: "ระบุคุณลักษณะของเดสก์ท็อปนี้ที่จะแสดงผลในโมบายล์แอ็พพลิเคชัน IBM Content Navigator",
		admin_mobile_new_feature_button_label: "คุณลักษณะใหม่",
		admin_mobile_move_up_button_label: "ย้ายขึ้น",
		admin_mobile_move_down_button_label: "ย้ายลง",
		admin_desktop_mobile_instructions: "คำแนะนำสำหรับค่าติดตั้งโมบายล์พิมพ์ที่นี่",
		admin_desktop_max_number_of_docs_to_add: "จำนวนสูงสุดของเอกสารที่ต้องการเพิ่ม:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "ระบุจำนวนเอกสารสูงสุดที่ผู้ใช้สามารถเพิ่มในหนึ่งครั้ง ค่าสูงสุดดีฟอลต์คือ 50 อย่างไรก็ตาม คุณสามารถตั้งค่าสูงสุดได้ถึง 300",
		admin_desktop_max_number_of_docs_to_modify: "จำนวนสูงสุดของไอเท็มที่ต้องการปรับเปลี่ยน:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "ระบุจำนวนสูงสุดของไอเท็มที่ผู้ใช้สามารถปรับเปลี่ยนในหนึ่งครั้ง ค่าสูงสุดดีฟอลต์คือ 50 อย่างไรก็ตาม คุณสามารถตั้งค่าสูงสุดได้ถึง 300",
		admin_desktop_max_conversion_size: "จำนวนสูงสุดของข้อมูลสำหรับการแปลง PDF (ในหน่วย MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>ข้อจำกัด:</b> การตั้งค่านี้ไม่สนับสนุนบน IBM Content Manager OnDemand<br/><br/>ระบุจำนวนสูงสุดของข้อมูลที่สามารถถูกแปลงเป็น PDF ข้อจำกัดนี้ใช้เมื่อผู้ใช้ดาวน์โหลดไอเท็มเป็นไฟล์ PDF หรือส่งไอเท็มผ่านอีเมลเป็นไฟล์ PDF<br /><br />ถ้าขนาดของแต่ละเอกสารไม่สามารถถูกระบุได้ เอกสารจะยังคงถูกแปลงเป็น PDF<br/><br/>ค่าจำกัดดีฟอลต์คือ 200 MB การตั้งค่าค่าจำกัดที่มากกว่า 200 MB อาจมีผลต่อผลการทำงานของระบบ",
		admin_desktop_timeProperties: "การประทับเวลา:",
		admin_desktop_time_properties_hover_help: "<b>ผู้ใช้ IBM FileNet P8 เท่านั้น:</b> การตั้งค่านี้ใช้กับคุณสมบัติแบบกำหนดเองและไม่ใช้กับคุณสมบัติระบบ ตัวอย่างเช่นคุณสมบัติ Modified By จะยังคงแสดงส่วนของเวลาของการประทับเวลาถ้าคุณเลือก <b>แสดงเฉพาะส่วนวันที่ของการประทับเวลา</b><br/><br/>การตั้งค่านี้ไม่เปลี่ยนการประทับเวลาในที่เก็บ",
		admin_desktop_disable_time_stamp: "แสดงการประทับเวลาแบบเต็ม",
		admin_desktop_enable_time_stamp: "แสดงเฉพาะส่วนวันที่ของการประทับเวลา",
		admin_desktop_timezone: "เขตเวลา:",
		admin_desktop_timezone_localuser: "แสดงเขตเวลาโลคัลของผู้ใช้",
		admin_desktop_timezone_alluser: "แสดงเขตเวลาเดียวกันสำหรับผู้ใช้ทั้งหมด",
		admin_desktop_timezone_hover_help: "คุณสามารถระบุว่าผู้ใช้เห็นการประทับเวลาที่ขึ้นกับเขตเวลาโลคัลของผู้ใช้ หรือว่าผู้ใช้ทั้งหมดเห็นการประทับเวลาเดียวกัน<br/><br/>การตั้งค่านี้ไม่เปลี่ยนการประทับเวลาในที่เก็บ อย่างไรก็ตาม การตั้งค่าที่คุณเลือกกำหนดเขตเวลาที่ถูกใช้เพื่อสร้างการประทับเวลาในที่เก็บเมื่อผู้ใช้เพิ่มหรือแก้ไขไอเท็ม",
		admin_desktop_mobile_feature_display_label: "แสดงผล",
		admin_desktop_mobile_feature_icon_file_label: "ไฟล์ไอคอน",
		admin_mobile_feature_dialog_icon_file_label: "ไฟล์ไอคอน:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "ชื่อ",
		admin_desktop_mobile_select_feature_label: "เลือกคุณลักษณะ",
		admin_desktop_mobile_feature_icon_label: "ไอคอนคุณลักษณะ",
		admin_desktop_share_admin_none: "ไม่ได้ตั้งค่าผู้ดูแลระบบ",
		admin_desktop_share_admin_edit_label: "ตั้งค่าผู้ดูแลระบบ...",
		admin_browse_icon: "เรียกดูไอคอน",
		admin_search_icon: "ค้นหาไอคอน",
		admin_favorites_icon: "ไอคอนโปรด",
		admin_casesearch_icon: "ไอคอนขนาดตัวพิมพ์",
		admin_datacap_icon: "ไอคอน Datacap",
		admin_system_defined: "ระบบกำหนด",
		admin_icon_file_placeholder_text: "ตำแหน่งไฟล์ (เช่น http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "รูท",
		admin_folder_default: "ดีฟอลต์",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "แถบเครื่องมือ",
		admin_menu_context_menus: "เมนูบริบท",
		admin_menu_office_toolbars: "คำสั่งแถบริบบอนของ Microsoft Office",
		admin_menu_office_menus: "เมนูบริบทของ Microsoft Office",

		admin_file_name_label: "ชื่อไฟล์:",
		admin_exportconfiguration_security_label: "รวมผู้ใช้และกลุ่มที่ได้รับอนุญาตให้ใช้เดสก์ท็อปนี้",
		admin_exportconfiguration_instruction: "คุณสามารถเอ็กซ์พอร์ตเดสก์ท็อปของคุณ รวมถึงการกำหนดคอนฟิกที่เก็บ และการกำหนดคอนฟิกปลั๊กอินที่เกี่ยวข้องกับเดสก์ท็อปที่เลือก ไปยังไฟล์ที่คุณสามารถอิมพอร์ตไปยังอินสแตนซ์ IBM Content Navigator อื่น",
		admin_exportconfiguration_dialog_label: "เดสก์ท็อปเอ็กซ์พอร์ต",
		admin_exportconfiguration_button_label: "เอ็กซ์พอร์ต",
		admin_dialog_select_all: "เลือกทั้งหมด",
		admin_dialog_deselect_all: "ลบทั้งหมด",

		admin_importconfiguration_instruction: "ไอเท็มในไฟล์คอนฟิกูเรชันที่เลือกจะถูกอิมพอร์ตไปยังระบบนี้ อย่างไรก็ตาม ถ้ามีไอเท็มที่มี ID เดียวกันอยู่แล้วบนระบบ คุณต้องตัดสินใช้ว่าจะเก็บไว้ หรือเขียนทับไอเท็ม",
		admin_importconfiguration_dialog_label: "อิมพอร์ตเดสก์ท็อป",
		admin_importconfiguration_reason_dialog_label: "อิมพอร์ตเหตุผลในการเขียน",
		admin_importconfiguration_button_label: "อิมพอร์ต",
		admin_to_be_imported: "ไอเท็มคอนฟิกูเรชันที่ต้องการอิมพอร์ต",
		admin_on_target_system: "ไอเท็มที่มีอยู่บนระบบเป้าหมาย",
		admin_import_short_warning_message: "ไอเท็มต่อไปนี้มีอยู่แล้วบนระบบนี้ เลือกไอเท็มที่คุณต้องการแทนที่บนระบบนี้:",
		admin_import_warning_message: "ไอเท็มคอนฟิกูเรชันต่อไปนี้มี ID เดียวกับที่มีอยู่บนระบบเป้าหมาย เลือกเฉพาะไอเท็มที่คุณต้องการอิมพอร์ตและเขียนทับบนระบบเป้าหมาย<br /><br />หากคุณไม่ต้องการเขียนทับไอเท็มคอนฟิกูเรชันที่มีอยู่แล้ว ให้สร้างสำเนาของไอเท็มบนอินสแตนซ์ที่คุณเอ็กซ์พอร์ตเดสก์ท็อป กำหนด ID อื่นและเชื่อมโยงกับเดสก์ท็อป เอ็กซ์พอร์ตเดสก์ท็อปอีกครั้ง และจากนั้นอิมพอร์ตเดสก์ท็อปบนอินสแตนซ์นี้",
		admin_choose_file_to_import_label: "เลือกไฟล์สำหรับอิมพอร์ต:",
		admin_download_imported_log: "ดาวน์โหลดรายงาน",
		admin_desktop_import_summary: "สรุปอิมพอร์ตเดสก์ท็อป",
		admin_reason_import_summary: "สรุปอิมพอร์ตเหตุผลในการเขียน",
		admin_rba_import_summary: "สรุปอิมพอร์ตบทบาทการควบคุมดูแล",
		admin_import_open_tabs_checking: "ก่อนที่คุณจะสามารถอิมพอร์ตเดสก์ท็อป, คุณต้องปิดแท็บทั้งหมดที่ไม่ใช่แท็บ <bold>เดสก์ท็อป</bold> ในเครื่องมือการดูแลระบบ",
		admin_import_no_conflict: "ไอเท็มต่อไปนี้จะถูกอิมพอร์ต:",
		admin_desktop_invalid: "เดสก์ท็อปไม่ถูกต้อง",
		admin_desktop_warning: "เดสก์ท็อปถูกบันทึกไว้พร้อมกับคำเตือน",
		admin_repos_warning: "ที่เก็บถูกบันทึกไว้พร้อมกับคำเตือน",
		admin_config_type_icon: "ไอคอนชนิดไอเท็มคอนฟิกูเรชัน",

		admin_approval_workflow: "เวิร์กโฟลว์การอนุมัติ",
		admin_approval_workflow_hover: "ช่วยให้ผู้ใช้สามารถเรียกทำงานเวิร์กโฟลว์การอนุมัติที่กำหนดไว้ล่วงหน้า คุณสามารถปิดใช้งานเวิร์กโฟลว์การอนุมัติเพื่อให้ผู้ใช้สามารถเรียกทำงานเวิร์กโฟลว์การอนุมัติแบบกำหนดเอง ซึ่งกำหนดไว้โดยการสมัครสมาชิก โดยดีฟอลต์ เวิร์กโฟลว์การอนุมัติเปิดใช้งาน<br><br><b>ข้อสำคัญ:</b> ถ้าคุณเปิดใช้งานเวิร์กโฟลว์การอนุมัติ คุณยังต้องตรวจสอบให้แน่ใจว่ามีการเพิ่มคำนิยามเวิร์กโฟลว์ที่กำหนดไว้ล่วงหน้าหนึ่งหรือทั้งสองรายการ (ICNParallelDocumentApproval.pep และ ICNSequentialDocumentApproval.pep) ลงในที่เก็บ และโอนย้ายไปยัง Content Process Engine แล้ว",

		admin_cannot_add_desktop_members_error: "คุณไม่สามารถระบุผู้ใช้และกลุ่มที่มีสิทธิเข้าถึงเดสก์ท็อปนี้",
		admin_cannot_add_desktop_members_error_explanation: "คุณไมใมีสิทธิใช้งานที่เหมาะสมในการเรียกค้นข้อมูลผู้ใช้และกลุ่ม",
		admin_cannot_add_desktop_members_error_userResponse: "ล็อกอินด้วยชื่อผู้ใช้อื่น หรือขอผู้ดูแลระบบ IBM Content Manager ของคุณให้มอบสิทธิใช้งาน UserACLOwner ให้กับคุณ ซึ่งจำเป็นต่อการเรียกค้นข้อมูลผู้ใช้และกลุ่ม",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "คุณไม่สามารถเลือกผู้ใช้หรือกลุ่ม",
		admin_cannot_select_users_groups_error_explanation: "คุณไมใมีสิทธิใช้งานที่เหมาะสมในการเรียกค้นข้อมูลผู้ใช้และกลุ่ม",
		admin_cannot_select_users_groups_error_userResponse: "ล็อกอินด้วยชื่อผู้ใช้อื่น หรือขอผู้ดูแลระบบ IBM Content Manager ของคุณให้มอบสิทธิใช้งาน UserACLOwner ให้กับคุณ ซึ่งจำเป็นต่อการเรียกค้นข้อมูลผู้ใช้และกลุ่ม",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "ไม่พบไคลเอ็นต์ OAuth2",
		oauth_client_not_found_error_explanation: "ไม่พบ ID ไคลเอ็นต์ OAuth2 ${0}",
		oauth_client_not_found_error_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณ และแจ้งให้พวกเขาทราบว่าไม่พบ ID ไคลเอ็นต์ OAuth2",
		oauth_client_not_found_error_adminResponse: "ตรวจทานคอนฟิกูเรชันที่เก็บ และตรวจสอบว่าคอนฟิกูเรชันมี ID ไคลเอ็นต์ OAuth2 ที่ถูกต้อง",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "การล็อกอินที่เก็บล้มเหลว",
		oauth_login_failed_error_explanation: "ความพยายามล็อกอินเข้าสู่ที่เก็บ ${0} ล้มเหลว",
		oauth_login_failed_error_userResponse: "ตรวจสอบว่า id ผู้ใช้และรหัสผ่านถูกต้อง และลองล็อกอินอีกครั้ง",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "มีข้อผิดพลาดเกิดขึ้นขณะพยายามล็อกอินเข้าสู่ ${0}",
		oauth_error_return_error_explanation: "ความพยายามอนุญาต ${0} ล้มเหลว",
		oauth_error_return_error_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณพร้อมกับข้อมูลต่อไปนี้: ความพยายามอนุญาต ${0} ล้มเหลว และส่งคืนข้อความแสดงความผิดพลาดต่อไปนี้: <br>${1}<br><b>ข้อผิดพลาด:</b> ${2}<br><b>คำอธิบาย:</b> ${3}",
		oauth_error_return_error_adminResponse: "ข้อมูลเพิ่มเติมเกี่ยวกับข้อผิดพลาดจะอยู่ในล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์  สำหรับข้อมูลเพิ่มเติมเกี่ยวกับล็อกไฟล์ โปรดดู &quot;ล็อกไฟล์ของ IBM Content Navigator&quot; ใน IBM Knowledge Center ลองแก้ไขปัญหาโดยใช้ข้อมูลเกี่ยวกับความพยายามอนุญาต ${0} และตรวจสอบว่า OAuth2 เปิดใช้งาน",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "แอ็พพลิเคชันปลายทาง OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "error",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "ข้อความแสดงความผิดพลาด OAuth ที่ไม่รู้จัก",

		delete_share_permission_error: "ไม่ได้ลบการแบ่งใช้",
		delete_share_permission_error_explanation: "คุณไม่มีสิทธิที่เหมาะสมในการลบการแบ่งใช้",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "คุณไม่สามารถแบ่งใช้ไอเท็มนี้ได้",
		class_not_support_share_error_explanation: "คลาส ${0} ไม่ได้ตั้งค่าไว้เพื่อสนับสนุนการแบ่งใช้",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "คุณไม่สามารถแบ่งใช้ไอเท็มนี้ได้",
		rbr_not_support_share_error_explanation: "เนื้อหาที่เป็นความลับได้ถูกเพิ่มลงในไอเท็ม",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "อุปกรณ์ที่ผู้ใช้กำลังพยายามใช้ล็อกอินไม่ได้รับอนุญาตให้เข้าถึงแอคเคาต์ของผู้ใช้",
		box_oauth_error_invalid_request: "คำร้องขอไม่มีพารามิเตอร์ที่จำเป็น แต่มีค่าพารามิเตอร์ที่ไม่ถูกต้อง มีพารามิเตอร์มากกว่าหนึ่งครั้ง หรือผิดรูป",
		box_oauth_error_unsupported_response_type: "เซิร์ฟเวอร์การอนุญาตไม่สนับสนุนการขอรับโค้ดการอนุญาตโดยใช้เมธอดนี้  ตรวจสอบค่าของโค้ด param ในคำร้องขอของคุณ",
		box_oauth_error_access_denied: "เจ้าของรีซอร์สหรือเซิร์ฟเวอร์การอนุญาตปฏิเสธคำร้องขอ",
		box_oauth_error_temporarily_unavailable: "อุปกรณ์ของคุณถูกจำกัดอัตรา คุณต้องลดอัตราของคำร้องขอการอนุญาต หรือรอสักครู่หนึ่ง",
		box_oauth_error_unknown: "ข้อความแสดงความผิดพลาด Box ที่ไม่รู้จัก",

		admin_default_search_type: "ชนิดการค้นหาดีฟอลต์",
		admin_default_search_type_hover: "ระบุอ็อพชันที่ถูกเลือกโดยดีฟอลต์ในฟิลด์ <b>ค้นหา</b> ในเมนู <b>อ็อพชันการค้นหา</b>",
		admin_default_search_type_documents: "เอกสาร",
		admin_default_search_type_folders: "โฟลเดอร์",
		admin_default_search_type_folders_and_documents: "เอกสารและโฟลเดอร์",

		admin_restricted_search_type: "อนุญาตการค้นหาบน",
		admin_restricted_search_type_hover: "โดยดีฟอลต์ ผู้ใช้สามารถค้นหาบนทั้งเอกสารและโฟลเดอร์ ถ้าคุณต้องการซ่อนอ็อพชัน ค้นหาบน และจำกัดการค้นหาในเอกสารเท่านั้น ให้เลือก เอกสาร และยกเลิกการเลือก โฟลเดอร์</br>,</br> ถ้าคุณอนุญาตให้ค้นหาบนทั้งเอกสารและโฟลเดอร์ ให้เลือกอ็อพชันดีฟอลต์ที่จะแสดงขึ้นเมื่อเปิดหน้าต่างย่อยค้นหา",
		admin_restricted_search_type_documents: "เอกสาร",
		admin_restricted_search_type_folders: "โฟลเดอร์",
		admin_restricted_search_type_folders_and_documents: "เอกสารและโฟลเดอร์",

		admin_default_search_version: "เวอร์ชันการค้นหาดีฟอลต์",
		admin_default_search_version_hover: "ระบุอ็อพชันที่ถูกเลือกโดยดีฟอลต์ในฟิลด์ <b>เวอร์ชัน</b> ในเมนู <b>อ็อพชันการค้นหา</b>",

		admin_all_classes_search: "ค้นหา คลาส ทั้งหมด",
		admin_all_classes_search_hover: "ระบุหากผู้ใช้ได้รับการอนุญาตให้ค้นหาในทุก คลาส ,และดังนั้นควรถูกรวมอยู่ในการค้นหาเอกสาร",
		admin_all_classes_search_removed_hover: "อ็อพชันการค้นหาทุก คลาส ไม่สามารถใช้ได้เนื่องจากพารามิเตอร์ context-param allPseudoClassHidden ในแอ็พพลิเคชัน Navigator  web.xml ถูกตั้งค่าเป็น true.",
		admin_all_classes_search_hide: "ลบตัวเลือกการค้นหาในทุก คลาส",
		admin_all_classes_search_documents_only_documents: "การค้นหาเอกสารรวมเฉพาะเอกสาร การค้นหาที่บันทึกไว้ และเท็มเพลตรายการ",
		admin_all_classes_search_documents_non_folders: "การค้นหาเอกสารรวมไอเท็มใดๆ ที่ไม่ใช่โฟลเดอร์",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "มุมมองแผนผัง:",
		admin_feature_config_tree_view_hoverhelp: "ระบุว่าผู้ใช้สามารถเข้าถึงรายการของโฟลเดอร์ในที่เก็บได้ตลอดทั้งบานหน้าต่างเรียกดู หากคุณซ่อนบานหน้าต่างเรียกดู, ผู้ใช้ต้องใช้รายการเนื้อหาเพื่อนำทางไปยังโฟลเดอร์ในที่เก็บ",
		admin_feature_config_selected_repositories_label: "ที่เก็บ:",
		admin_feature_config_selected_repositories_hoverhelp: "เลือกที่เก็บที่ผู้ใช้สามารถเข้าถึงคุณลักษณะนี้",
		admin_feature_config_selected_repositories_select_state_hdr: "เลือกที่เก็บ",
		admin_feature_config_selected_repositories_name_hdr: "ชื่อที่เก็บ",
		admin_feature_config_selected_repositories_show_hdr: "Show",
		admin_feature_config_invalid_icon_title: "คุณลักษณะมีค่าติดตั้งที่จำเป็นบางส่วนหายไป",
		admin_feature_config_view_select_hdr: "เลือกมุมมอง",
		admin_feature_config_view_hdr: "ดู",
		admin_feature_config_view: "ดู",
		admin_feature_config_views: "มุมมอง:",
		admin_feature_config_views_hoverhelp: "ระบุมุมมองที่ผู้ใช้สามารถใช้ได้กับรายการเนื้อหา มุมมองถูกแสดงตามลำดับที่ถูกแสดง มุมมองที่เลือกไว้อันดับแรกจะเป็นมุมมองดีฟอลต์สำหรับคุณลักษณะ<br><br><b>สิ่งสำคัญ:</b> หากคุณเปิดใช้งานมุมมอง Filmstrip คุณต้องกำหนดคอนฟิกวิวเวอร์การแปลง HTML เพื่อดูการแสดงตัวอย่างเอกสาร",

		admin_custom_dialog_name: "ชื่อ:",
		admin_custom_dialog_value: "ค่า:",
		admin_custom_setting_name_hover: "ป้อนชื่อของการตั้งค่า Daeja ViewONE ที่คุณต้องการเพิ่มให้กับคอนฟิกูเรชันของคุณ ให้ดูที่เอกสารคู่มือ Daeja ViewONE สำหรับข้อมูลเพิ่มเติมเกี่ยวกับการตั้งค่าคอนฟิกูเรชัน",
		admin_custom_setting_value_hover: "ป้อนค่าที่คุณต้องการใช้สำหรับการตั้งค่าคอนฟิกูเรชัน Daeja ViewONE ให้ดูที่เอกสารคู่มือ Daeja ViewONE สำหรับข้อมูลเพิ่มเติมเกี่ยวกับค่าที่ใช้ได้สำหรับการตั้งค่าคอนฟิกูเรชัน",

		entry_template_name_required_message: "จำเป็นต้องมีฟิลด์ชื่อบน ค่าติดตั้งเท็มเพลตรายการ",
		entry_template_name_invalid_message: "ฟิลด์ชื่อบน ค่าติดตั้งเท็มเพลตรายการ ไม่สามารถมีอักขระต่อไปนี้: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "เมื่อเลือกผู้ใช้หรือกลุ่มที่ระบุเฉพาะสำหรับฟิลด์ แบ่งใช้กับ บน ค่าติดตั้งเท็มเพลตรายการ, คุณต้องระบุอย่างน้อยหนึ่งผู้ใช้หรือกลุ่ม",
		entry_template_no_permission_to_save_to_teamspace_message: "คุณไม่มีสิทธิ์ในการเพิ่มเท็มเพลตรายการไปยัง Teamspace (${0}) ซึ่งถูกเลือกไว้จาก บันทึกใน บน ค่าติดตั้งเท็มเพลตรายการ",
		entry_template_save_in_destination_required_message: "คุณต้องระบุการบันทึกดีฟอลต์ในตำแหน่ง ในส่วน <b>ตั้งค่าตำแหน่งหน่วยเก็บข้อมูลไอเท็ม</b>",
		entry_template_save_in_destination_must_select_folder: "ถ้าคุณซ่อนฟิลด์ <b>บันทึกใน</b> และต้องการให้ผู้ใช้เพิ่มไอเท็มใหม่ให้กับโฟลเดอร์ คุณต้องเลือกโฟลเดอร์ในฟิลด์ <b>การบันทึกดีฟอลต์ในตำแหน่ง</b> ในส่วน <b>ตั้งค่าตำแหน่งหน่วยเก็บข้อมูลไอเท็ม</b>",
		entry_template_what_to_save_required_message: "เลือกอย่างน้อยหนึ่งตัวเลือกที่คุณต้องการบันทึกบน ตั้งค่าอ็อพชัน",
		entry_template_custom_workflow_empty_message: "หากคุณเลือก <b>เวิร์กโฟลว์แบบกำหนดเอง...</b>, คุณต้องค้นหาและเลือกเวิร์กโฟลว์ที่คุณต้องการใช้",

		entry_template_new: "สร้างเท็มเพลตรายการ",
		entry_template_name_hover: "ชื่อเท็มเพลตรายการไม่สามารถมีอักขระต่อไปนี้: * \\ / : ? \" < > |",
		entry_template_name_invalid: "ชื่อเท็มเพลตรายการไม่สามารถมีอักขระต่อไปนี้: * \\ / : ? \" < > |",
		entry_template_description_hover: "จัดเตรียมคำอธิบายที่จะให้ผู้ใช้แยกความแตกต่างระหว่างเท็มเพลตรายการนี้และเท็มเพลตรายการอื่น",
		entry_tempalte_save_in_hover: "ระบุตำแหน่งที่ต้องการบันทึกเท็มเพลตรายการ<br><br><b>ข้อจำกัด:</b> หากคุณบันทึกเท็มเพลตรายการใน Teamspace คุณสามารถใช้เท็มเพลตรายการภายใน Teamspace ได้เท่านั้น",
		entry_template_inherit_hover: "หากคุณเลือกอ็อพชันนี้ ค่าติดตั้งความปลอดภัยสำหรับโฟลเดอร์พาเรนต์ถูกเพิ่มไปยังรายชื่อผู้ใช้หรือกลุ่มที่เท็มเพลตรายการที่ถูกแบ่งใช้",
		entry_template_builder_aria_label: "เครื่องมือบิวด์เท็มเพลตรายการ",
		entry_template_builder_layout_aria_label: "เครื่องมือบิวด์คุณสมบัติเท็มเพลตรายการ",

		entry_template_settings_document: "นิยามเท็มเพลตรายการ",
		entry_template_settings_folder: "ตั้งค่าตำแหน่งหน่วยเก็บข้อมูลไอเท็ม",
		entry_template_settings_folder_intro: "ระบุตำแหน่งที่เก็บไอเท็มที่เพิ่มไว้โดยใช้เท็มเพลตนี้",
		entry_template_settings_properties: "ตั้งค่าคุณสมบัติไอเท็ม",
		entry_template_settings_properties_intro: "คุณสามารถระบุค่าดีฟอลต์หรือค่าที่กำหนดไว้ล่วงหน้าสำหรับไอเท็มที่ถูกเพิ่มไว้โดยใช้เท็มเพลตรายการนี้ นอกจากนี้ คุณสามารถเปลี่ยนโครงร่างของคุณสมบัติเพื่อควบคุมคุณสมบัติที่ถูกแสดงและลำดับที่ถูกแสดง",
		entry_template_settings_workflow: "กำหนดคอนฟิกเวิร์กโฟลว์สำหรับไอเท็ม",
		entty_template_settings_workflow_intro: "คุณสามารถระบุเวิร์กโฟลว์ที่ถูกเรียกทำงานเมื่อเพิ่มไอเท็มโดยใช้เท็มเพลตรายการ",
		entry_template_settings_security: "ตั้งค่าความปลอดภัยของไอเท็ม",
		entry_template_settings_security_intro: "คุณสามารถระบุความปลอดภัยที่เป็นค่าดีฟอลต์หรือที่กำหนดไว้ล่วงหน้าสำหรับไอเท็มที่ถูกเพิ่มไว้โดยใช้เท็มเพลตรายการนี้ ผู้ใช้ที่มีสิทธิที่เหมาะสมอาจสามารถเปลี่ยนความปลอดภัยของไอเท็มได้หลังจากที่เพิ่มแล้ว",
		entry_template_settings_options: "ตั้งค่าอ็อพชันสำหรับไอเท็ม",
		entry_template_xt_warning: "การบันทึกการเปลี่ยนแปลงไปยังเท็มเพลตรายการนี้จะแปลงจากเท็มเพลตรายการ IBM Workplace XT ไปเป็นเท็มเพลตรายการ IBM Content Navigator IBM Workplace XT ไม่สนับสนุนเท็มเพลตรายการ IBM Content Navigator",

		entry_template_properties_edit_layout: "แก้ไขโครงร่าง...",
		entry_template_properties_read_only: "อ่านอย่างเดียว",
		entry_template_properties_hidden: "ซ่อนไว้",

		entry_template_destination_show: "แสดงฟิลด์ <b>บันทึกใน</b>",
		entry_template_destination_show_hover: "หากคุณแสดงฟิลด์ <b>บันทึกใน</b> ผู้ใช้สามารถเปลี่ยนตำแหน่งที่เก็บไอเท็ม",
		entry_template_destination_hide: "ซ่อนฟิลด์ <b>บันทึกใน</b>",
		entry_template_destination_hide_hover: "หากคุณซ่อนฟิลด์ <b>บันทึกใน</b> ผู้ใช้ไม่สามารถเปลี่ยนตำแหน่งที่เก็บไอเท็มได้",
		entry_template_folder_save_in_default: "ตำแหน่ง <b>บันทึกใน</b> ดีฟอลต์:",
		entry_template_folder_save_in_default_hover: "ระบุตำแหน่งดีฟอลต์ที่เพิ่มไอเท็มโดยใช้เท็มเพลตรายการนี้<br><br>ตำแหน่งดีฟอลต์ที่คุณเลือกไว้จะกำหนดข้อจำกัดเกี่ยวกับลักษณะการทำงานแบบรันไทม์ของเท็มเพลตรายการ:<ul><li>ผู้ใช้ไม่สามารถเลือกที่เก็บที่แตกต่างกัน</li><li>หากตำแหน่งดีฟอลต์คือ Teamspace ผู้ใช้ไม่สามารถเลือก Teamspace ที่แตกต่างกันได้</li></ul>อย่างไรก็ตาม หากผู้ใช้เชื่อมโยงเท็มเพลตรายการนี้กับโฟลเดอร์ ผู้ใช้สามารถแทนทับตำแหน่งหน่วยเก็บข้อมูลที่ถูกกำหนดคอนฟิกไว้สำหรับเท็มเพลตรายการนี้",
		entry_template_folder_restrict_choice: "ต้องการให้ผู้ใช้เพิ่มไอเท็มไปยังตำแหน่งดีฟอลต์หรือโฟลเดอร์ชายด์ของตำแหน่งดีฟอลต์",
		entry_template_folder_file_in_required: "ต้องการให้ผู้ใช้เพิ่มไอเท็มใหม่ในโฟลเดอร์",
		entry_template_folder_file_in_required_hover: "หากคุณไม่ได้เลือกอ็อพชันนี้ ผู้ใช้สามารถเพิ่มไอเท็มไปยังโฟลเดอร์รูทของที่เก็บได้<br><br><b>ข้อจำกัด:</b> คอนฟิกูเรชันเดสก์ท็อปอาจต้องการให้ผู้ใช้เลือกโฟลเดอร์ได้",

		entry_template_document_type_show: "แสดงฟิลด์ <b>คุณต้องการบันทึกสิ่งใด</b>",
		entry_template_document_type_show_hover: "หากคุณแสดงฟิลด์ <b>สิ่งที่คุณต้องการบันทึก</b> ไอเท็มที่คุณเลือกถูกแสดงเป็นอ็อพชันในฟิลด์ <b>สิ่งที่คุณต้องการบันทึก</b>",
		entry_template_document_type_hide: "ซ่อนฟิลด์ <b>คุณต้องการบันทึกสิ่งใด</b>",
		entry_template_document_type_hide_hover: "หากคุณซ่อนฟิลด์ <b>สิ่งที่คุณต้องการบันทึก</b> ชนิดของเอกสารที่คุณเลือกไว้ยังถูกใช้เมื่อผู้ใช้เพิ่มเอกสารโดยใช้เท็มเพลตรายการนี้",
		entry_template_document_type: "เท็มเพลตรายการนี้สามารถใช้เพื่อเพิ่มไอเท็มต่อไปนี้:",
		entry_template_document_type_hover: "หากคุณแสดงฟิลด์ <b>สิ่งที่คุณต้องการบันทึก</b> ไอเท็มที่คุณเลือกถูกแสดงเป็นอ็อพชันในฟิลด์ <b>สิ่งที่คุณต้องการบันทึก</b><br><br>หากคุณซ่อนฟิลด์ <b>สิ่งที่คุณต้องการบันทึก</b> ชนิดของเอกสารที่คุณเลือกไว้ยังถูกใช้เมื่อผู้ใช้เพิ่มเอกสารโดยใช้เท็มเพลตรายการนี้",

		entry_template_misc: "อ็อพชันเพิ่มเติม:",
		entry_template_auto_classify_show: "จัดหมวดหมู่เนื้อหาของเอกสารโดยอัตโนมัติ",
		entry_template_auto_classify_show_hover: "เมื่อเอกสารถูกจัดหมวดหมู่บน FileNet Content Manager เนื้อหาของเอกสารถูกตรวจสอบเพื่อกำหนดคลาสและค่าคุณสมบัติที่เหมาะสมสำหรับเอกสาร<br><br>ให้ติดต่อผู้ดูแลระบบของคุณเพื่อกำหนดการจัดหมวดหมู่เนื้อหาที่ถูกเปิดใช้งานบน Content Platform Engine<br><br>หากคุณเปิดใช้งานอ็อพชันนี้ คลาสและคุณสมบัติของเอกสารอาจเปลี่ยนแปลงไปเมื่อผู้ใช้เพิ่มเอกสารให้กับที่เก็บ",
		entry_template_allow_duplicate_file_names: "อนุยาตให้เอกสารมีชื่อไฟล์ที่ซ้ำกันได้",
		entry_template_allow_duplicate_file_names_hover: "ตามค่าดีฟอลต์ คุณสามารถเพิ่มเอกสารด้วยชื่อที่เหมือนกันได้ในโฟลเดอร์ FileNet Content Manager คุณสามารถเคลียร์อ็อพชันนี้หากคุณต้องการให้แต่ละไฟล์ในตำแหน่งหน่วยเก็บข้อมูลที่เลือกไว้มีชื่อเฉพาะ",
		entry_template_allow_compound_documents: "อนุญาตให้เอกสารนี้เป็นพาเรนต์ของเอกสารประกอบ",
		entry_template_version_show: "แสดงอ็อพชันเวอร์ชันสำหรับเพิ่มและเช็กอิน",
		entry_template_version_hide: "ซ่อนอ็อพชันเวอร์ชันสำหรับเพิ่มและเช็กอิน",
		entry_template_version_to_add_as: "เวอร์ชันดีฟอลต์ที่ต้องการเพิ่มเป็น:",
		entry_template_version_default: "อ็อพชันเวอร์ชันดีฟอลต์:",
		entry_template_version_default_checked: "เวอร์ชันหลัก",
		entry_template_version_default_unchecked: "เวอร์ชันรอง",
		entry_template_version_display: "เวอร์ชันเอกสาร:",
		entry_template_version_display_show: "Show",
		entry_template_version_display_hide: "ซ่อน",
		entry_template_version_default_add: "เวอร์ชันดีฟอลต์ที่ต้องการเพิ่มเป็น:",

		entry_template_checkin_version_show: "แสดงอ็อพชันเวอร์ชันสำหรับเช็กอิน",
		entry_template_checkin_version_hide: "ซ่อนอ็อพชันเวอร์ชันสำหรับเช็กอิน",

		entry_template_checkin_version_message_no_versions: "นโยบายเวอร์ชันของคลาสที่เลือกไว้ปกป้องผู้ใช้จากการเช็กอินเวอร์ชันใหม่ของเอกสาร",
		entry_template_checkin_version_message_always_version: "นโยบายเวอร์ชันของคลาสที่เลือกไว้ปกป้องผู้ใช้จากการแทนที่เวอร์ชันปัจจุบันของเอกสาร",

		entry_template_applied: "ใช้เท็มเพลตรายการนี้เมื่อผู้ใช้:",
		entry_template_applied_add: "เพิ่มเอกสาร (ต้องมี)",
		entry_template_applied_add_folder: "สร้างโฟลเดอร์ (ต้องมี)",
		entry_template_applied_checkin: "เช็กอิน",
		entry_template_applied_properties_group: "ดูหรือแก้ไขคุณสมบัติ:",
		entry_template_applied_properties: "ในหน้าต่าง คุณสมบัติ",
		entry_template_applied_viewer: "ในวิวเวอร์แอ็พเพล็ต",
		entry_template_applied_docinfo: "ในบานหน้าต่างข้อมูลเอกสาร",
		entry_template_applied_no_class_support: "เท็มเพลตรายการนี้สามารถใช้เพื่อเพิ่มไอเท็ม แต่ไม่สามารถถูกใช้เพื่อเช็คอินเอกสารหรือดูและแก้ไขคุณสมบัติ คลาสที่เลือกต้องถูกแก้ไขเพื่อสนับสนุนสถานการณ์เหล่านี้ ถ้าคุณต้องการใช้เท็มเพลตรายการในสถานการณ์เหล่านี้ ให้ขอให้ผู้ดูแลระบบใช้เครื่องมือการดูแลระบบเพื่อแก้ไขคลาสเพื่อให้สามารถเก็บ ID เท็มเพลตรายการ",
		entry_template_applied_no_child_component_support: "คลาสที่เลือกมีคอมโพเนนต์ย่อยและโครงร่างคุณสมบัติถูกนิยามไว้แล้ว โครงร่างคุณสมบัติไม่สนับสนุนคอมโพเนนต์ย่อย คอมโพเนนต์ย่อยจะไม่แสดงผลให้กับผู้ใช้",
		entry_template_applied_child_component: "คลาสที่เลือกมีคอมโพเนนต์ย่อย คลาสจะแสดงผลให้กับผู้ใช้ แต่คุณไม่สามารถกำหนดคอนฟิกคอมโพเนนต์ย่อยในเท็มเพลตรายการนี้",

		entry_template_properties_show: "แสดงส่วนของ <b>คุณสมบัติ</b>",
		entry_tempalte_properties_show_hover: "หากคุณแสดงส่วน <b>คุณสมบัติ</b> ผู้ใช้สามารถปรับเปลี่ยนค่าคุณสมบัติใดๆ ที่ถูกแสดงในเท็มเพลตรายการและไม่ใช่คุณสมบัติแบบอ่านอย่างเดียว",
		entry_template_properties_hide: "ซ่อนส่วนของ <b>คุณสมบัติ</b>",
		entry_template_properties_hide_hover: "หากคุณซ่อนส่วน <b>คุณสมบัติ</b> ผู้ใช้ไม่สามารถแก้ไขค่าคุณสมบัติใดๆ ได้ เท็มเพลตรายการต้องการนิยามค่าทั้งหมดที่คุณต้องการใช้เมื่อเพิ่มไอเท็มโดยใช้เท็มเพลตรายการนี้",

		entry_template_security_show: "แสดงส่วนของ <b>ความปลอดภัย</b>",
		entry_template_security_show_hover: "หากคุณแสดงส่วน <b>ความปลอดภัย</b> ผู้ใช้ที่มีสิทธิที่เหมาะสมสามารถปรับเปลี่ยนความปลอดภัยของไอเท็ม",
		entry_template_security_hide: "ซ่อนส่วนของ <b>ความปลอดภัย</b>",
		entry_template_security_hide_hover: "หากคุณซ่อนส่วน <b>ความปลอดภัย</b> ผู้ใช้ไม่สามารถปรับเปลี่ยนความปลอดภัยของไอเท็ม เท็มเพลตรายการต้องนิยามค่าติดตั้งความปลอดภัยทั้งหมดที่คุณต้องการใช้เมื่อเพิ่มหรือแก้ไขไอเท็ม",
		entry_template_security_policy: "นโยบายความปลอดภัย:",
		entry_template_security_policy_hover: "ขึ้นอยู่กับนโยบายความปลอดภัยที่คุณเลือกไว้ นโยบายความปลอดภัยสามารถ:<br><ul><li>แทนทับสิทธิ์ที่ระบุไว้ภายใต้ <b>ตั้งค่าความปลอดภัยของไอเท็ม</b></li><li>เพิ่มไปยังสิทธิ์ที่ถูกระบุไว้ภายใต้ <b>ตั้งค่าความปลอดภัยของไอเท็ม</b></li></ul>",
		entry_template_security_policy_none: "ไม่ได้เลือกนโยบายความปลอดภัยไว้",
		entry_template_security_inherit: "สืบทอดค่าติดตั้งความปลอดภัยจากโฟลเดอร์พาเรนต์",
		entry_tempalte_save_in_hover: "ระบุตำแหน่งที่ต้องการบันทึกเท็มเพลตรายการ<br><br><b>ข้อจำกัด:</b> หากคุณบันทึกเท็มเพลตรายการใน Teamspace คุณสามารถใช้เท็มเพลตรายการภายใน Teamspace ได้เท่านั้น",
		entry_template_security_inherit_item_security_hover: "หากคุณเลือกอ็อพชันนี้ ค่าติดตั้งความปลอดภัยสำหรับโฟลเดอร์พาเรนต์ถูกเพิ่มให้กับค่าติดตั้งความปลอดภัยที่ถูกนิยามไว้โดยหนึ่งในไอเท็มต่อไปนี้:<ul><li>คลาสที่ถูกระบุไว้ในส่วน <b>ตั้งค่าคุณสมบัติไอเท็ม</b></li><li>ความปลอดภัยแบบกำหนดเองที่คุณระบุไว้ในส่วน <b>ตั้งค่าความปลอดภัยของไอเท็ม</b></li></ul>",
		entry_template_security_change: "เขียนทับความปลอดภัยที่นิยามโดยคลาสที่เลือกไว้",
		entry_template_security_change_hover: "หากคุณเลือกอ็อพชันนี้ ค่าติดตั้งความปลอดภัยที่ถูกนิยามไว้สำหรับคลาสถูกแสดงตามค่าดีฟอลต์ คุณสามารถปรับเปลี่ยนค่าติดตั้งความปลอดภัยสำหรับเท็มเพลตรายการ<br><br>หากคุณแสดงส่วน <b>ความปลอดภัย</b> ผู้ใช้ที่มีสิทธิที่เหมาะสมสามารถปรับเปลี่ยนความปลอดภัยของไอเท็ม<br><br>หากคุณเลือกอ็อพชันนี้และเลือกเพื่อสืบทอดค่าติดตั้งความปลอดภัยจากโฟลเดอร์พาเรนต์ การให้สิทธิ์ที่สามารถสืบทอดได้ใดๆ จะถูกเพิ่มให้กับความปลอดภัยที่คุณระบุไว้",
		entry_template_security_default_item_security: "ลบล้างความปลอดภัยไอเท็มดีฟอลต์ของผู้ใช้ที่เพิ่มไอเท็มไว้",
		entry_template_security_policy_message_override: "นโยบายความปลอดภัยที่เลือกไว้ถูกกำหนดคอนฟิกไว้เพื่อลบล้างสิทธิ์ที่ถูกระบุอยู่ภายใต้ ตั้งค่าความปลอดภัย",
		entry_template_security_policy_message_add: "นโยบายความปลอดภัยที่เลือกไว้ถูกกำหนดคอนฟิกเพื่อเพิ่มสิทธิ์ที่ถูกระบุอยู่ภายใต้ ตั้งค่าความปลอดภัย",
		entry_template_security_policy_preserve_true_hover: "สงวนสิทธิโดยตรง",
		entry_template_security_policy_preserve_false_hover: "ไม่สงวนสิทธิโดยตรง",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "บทบาทที่ระบุเฉพาะ",
		entry_template_security_class_role_search_title: "ค้นหาบทบาท:",
		entry_template_secuirty_class_member_title: "รายการของสมาชิกสำหรับ ${0}",
		entry_template_secuirty_class_folder_only: "สิทธิ์เหล่านี้นำไปใช้กับโฟลเดอร์นี้เท่านั้น",
		entry_template_secuirty_class_folder_and_immediate_children: "สิทธิ์เหล่านี้นำไปใช้กับโฟลเดอร์นี้และกับชายด์ที่ถูกกำหนดไว้ซึ่งถูกกำหนดคอนฟิกไว้เพื่อสืบทอดความปลอดภัยจากโฟลเดอร์นี้",
		entry_template_secuirty_class_folder_and_all_children: "สิทธิ์เหล่านี้นำไปใช้กับโฟลเดอร์นี้และกับรายการลำดับถัดมาทั้งหมดซึ่งถูกกำหนดคอนฟิกไว้เพื่อสืบทอดความปลอดภัยจากโฟลเดอร์นี้ ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"สิทธิ์เหล่านี้นำไปใช้กับชายด์ที่ถูกกำหนดคอนฟิกไว้เพื่อสืบทอดความปลอดภัยจากโฟลเดอร์นี้",
		entry_template_secuirty_class_folder_all_children_not_folder: "สิทธิ์เหล่านี้นำไปใช้กับรายการลำดับถัดมาทั้งหมดซึ่งถูกกำหนดคอนฟิกไว้เพื่อสืบทอดความปลอดภัยจากโฟลเดอร์นี้",

		entry_template_class_security_message_no_override: "ความปลอดภัยของคลาสที่เลือกไว้ปกป้องผู้ใช้จากการเขียนทับความปลอดภัย",
		entry_template_class_security_required_privileges: "<b>สิ่งสำคัญ</b>: เมื่อคุณลบล้างความปลอดภัยของคลาสที่เลือกไว้, ผู้ใช้ผู้ที่เพิ่มไอเท็มโดยใช้เท็มเพลตรายการนี้ต้องมีสิทธิพิเศษ ItemSetACL และ UserACLOwner",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "เวิร์กโฟลว์รูปแบบตามลำดับ",
		entry_template_workflow_type_ICNParallelDocumentApproval: "เวิร์กโฟลว์รูปแบบขนาน",
		entry_template_workflow_type_existing: "เวิร์กโฟลว์แบบกำหนดเอง...",
		entry_template_workflow_launch_prompt: "แจ้งให้ผู้ใช้ทราบเพื่อเรียกทำงานเวิร์กโฟลว์",
		entry_template_workflow_launch_auto: "เรียกทำงานเวิร์กโฟลว์แบบอัตโนมัติ",
		entry_template_workflow_modify_launch: "อนุญาตให้ผู้ใช้ปรับเปลี่ยนขั้นตอนการเรียกทำงาน",
		entry_template_workflow_modify_launch_hover: "เลือกอ็อพชันนี้หากคุณต้องการให้ผู้ใช้เปลี่ยนวิธีการเรียกทำงานเวิร์กโฟลว์",

		entry_template_optionsButton_title: "ปรับเปลื่ยน",
		entry_template_optionsButton_readonly_title: "ดูการเชื่อมโยง",
		entry_template_optionsDialog_title: "ค่าติดตั้งการเชื่อมโยงโฟลเดอร์",
		entry_template_removeButton_title: "ลบ",
		entry_template_addButton_title: "บวก",
		entry_template_selected_entry_templates: "เท็มเพลตรายการที่เลือกไว้",
		entry_template_docs_added_to_template_destination: "เพิ่มเอกสารไปยังปลายทางที่ระบุไว้ในเท็มเพลตรายการ",
		entry_template_docs_added_to_other_object_store: "เท็มเพลตรายการนี้เพิ่มไอเท็มกับที่เก็บอ็อบเจ็กต์ ${0}",
		entry_template_inherited_entry_templates_label: "ฉันต้องการ: ",
		entry_template_inherited_entry_templates: "สืบทอดความสัมพันธืเท็มเพลตรายการจากโฟลเดอร์: ",
		entry_template_inherited_entry_templates_not: "สร้างความสัมพันธ์ใหม่สำหรับโฟลเดอร์นี้",
		entry_template_inherited_folder_path: "เท็มเพลตรายการในรายการของเท็มเพลตรายการที่เลือกไว้ถูกเชื่อมโยงกับโฟลเดอร์ต่อไปนี้: ${0} <br> พาธไปยังโฟลเดอร์คือ ${1}",
		entry_template_folder_associations_title: "เชื่อมโยงเท็มเพลตรายการ",
		entry_template_folder_associations_intro: "เมื่อคุณเชื่อมโยงเท็มเพลตรายการกับโฟลเดอร์, ผู้ใช้ต้องใช้เท็มเพลตรายการเพื่อเพิ่มไอเท็มไปยังโฟลเดอร์ หากคุณเชื่อมโยงเท็มเพลตรายการจำนวนมาก, ผู้ใช้สามารถเลือกเท็มเพลตรายการที่ต้องการใช้ได้",
		entry_tempalte_folder_associations_entrytemplate: "เท็มเพลตรายการ: ",
		entry_template_avaliable_entry_templates: "เท็มเพลตรายการที่มีอยู่",
		entry_template_fileTypes_intro_title: "ชนิดไฟล์ที่อนุญาตให้ใช้:",
		entry_template_fileTypes_intro: "ตามค่าดีฟอลต์แล้ว เท็มเพลตรายการไม่สามารถใช้เพื่อเพิ่มชนิดเอกสารใดๆ ไปยังที่เก็บ อย่างไรก็ตาม, หากคุณเลือกชนิดไฟล์ตั้งแต่หนึ่งชนิดขึ้นไป, เท็มเพลตรายการพร้อมใช้งานเมื่อผู้ใช้เพิ่มเอกสารที่ตรงกับหนึ่งในชนิดไฟล์ที่ระบุไว้",
		entry_template_fileTypes: "ชนิดของไฟล์",
		entry_template_fileType_error: "เลือกชนิดไฟล์ที่ไม่ถูกต้องสำหรับความสัมพันธ์เท็มเพลตรายการตั้งแต่หนึ่งการเชื่อมโยงขึ้นไป คุณต้องลบชนิดไฟล์ที่ไม่ถูกต้องก่อนที่ความสัมพันธ์เท็มเพลตรายการเหล่านี้สามารถบันทึกได้",
		entry_template_fileTypes_any_type_of_file: " ชนิดของไฟล์ใดๆ",
		entry_template_description_label: "คำอธิบาย",
		entry_template_ItemInfoPrefix: "เชื่อมโยงกับ: ",
		entry_template_TargetObjectStoreName: "ที่เก็บอ็อบเจ็กต์เป้าหมาย",
		entry_template_class: "คลาส",
		entry_template_current_folder_as_parent: "ใช้โฟลเดอร์เป็นปลายทาง",
		entry_template_view_minetypes: "ดูชนิด MIME",
		entry_template_avaliable_MIME_types: "ชนิดไฟล์ที่พร้อมใช้งาน",
		entry_template_selected_MIME_types: "ชนิดไฟล์ที่เลือกไว้",
		entry_template_MIME_type_column: "ชื่อหมวดหมู่ชนิดไฟล์",
		entry_template_file_type_not_existing: "โปรดลบชนิดไฟล์ที่ไม่ถูกต้อง",
		entry_template_MIME_types: "ชนิด MIME:",
		entry_template_MIME_types_info_dialog_title: "ชนิด MIME สำหรับ",
		entry_template_destination_label: "เพิ่มเอกสารไปยัง: ",
		entry_template_destination_help: "ระบุตำแหน่งที่เก็บเอกสารบนที่เก็บเมื่อผู้ใช้เพิ่มเอกสารไปยังโฟลเดอร์นี้โดยใช้เท็มเพลตรายการที่เลือกไว้",
		entry_template_radioButton_folder_destination: "โฟลเดอร์ที่เลือกไว้",
		entry_template_radioButton_template_destination: "ปลายทางที่ระบุในเท็มเพลตรายการ",
		entry_tempalte_teamspace_default: "เท็มเพลตรายการดีฟอลต์",
		entry_template_folder_associations_save_new: "คุณได้แก้ไขความสัมพันธ์เท็มเพลตรายการ คุณแน่ใจว่าต้องการปิดหน้าต่างโดยไม่บันทึกการเปลี่ยนแปลงหรือไม่?",
		entry_template_mode_binding_label: "คุณสมบัติ",
		entry_template_columns_className: "ชื่อคลาส",
		entry_template_columns_type: "ชนิดเท็มเพลต",
		entry_template_columns_workflow: "ชื่อเวิร์กโฟลว์",
		entry_template_columns_destination: "ปลายทาง",
		entry_template_association_less_than_record: "มี ${0} เท็มเพลตรายการที่ไม่แสดงใน เท็มเพลตรายการที่เลือกไว้ คุณไม่มีสิทธิ์ในการมองเห็นเท็มเพลตเหล่านี้ หรือเท็มเพลตเหล่านี้ถูกลบทิ้งแล้ว โปรดติดต่อผู้ดูแลระบบของคุณเพื่อขอรับข้อมูลเพิ่มเติม",
		/* Request */

		progress_message_general: "กำลังทำงาน...",
		cancel_message_general: "แอ็คชันถูกยกเลิกแล้ว",
		ie8_not_supported_browser: "IE8 ไม่ใช่เบราว์เซอร์ที่สนับสนุน",
		progress_message_getDesktop: "กำลังโหลดเดสก์ท็อป...",
		progress_message_getActions: "กำลังโหลดแอ็คชัน...",
		progress_message_getViewers: "กำลังโหลดเดสก์ท็อป...",
		progress_message_logon: "กำลังเข้าสู่ระบบ...",
		progress_message_logoff: "กำลังล็อกเอาต์...",
		progress_message_getContentClasses: "กำลังดึงคลาส...",
		progress_message_openContentClass: "กำลังดึงรายละเอียดของคลาส...",
		progress_message_od_getCabinets: "กำลังดึง cabinets...",
		progress_message_getSearchTemplates: "กำลังดึงการค้นหา...",
		progress_message_od_getTemplates: "กำลังดึงโฟลเดอร์...",
		progress_message_od_openCabinet: "กำลังดึงโฟลเดอร์...",
		progress_message_openSearchTemplate: "กำลังเปิดการค้นหา...",
		progress_message_od_openTemplate: "กำลังเปิดโฟลเดอร์...",

		progress_message_getWorklists: "กำลังดึงรายการงาน...",
		progress_message_getWorkItems: "กำลังดึงไอเท็มงาน...",
		progress_message_getNextWorkItems: "กำลังดึงไอเท็มงาน...",
		progress_message_getStepParameters: "กำลังดึงข้อมูลไอเท็มงาน...",
		progress_message_getStepAttachmentItems: "กำลังดึงข้อมูลสิ่งที่แนบ...",
		progress_message_getDependentParameters: "กำลังดึงข้อมูลคุณสมบัติ...",

		progress_message_p8_getProcessApplicationSpaces: "กำลังดึงพื้นที่แอ็พพลิเคชัน...",
		progress_message_p8_getProcessRoles: "กำลังดึงบทบาทกระบวนการ...",
		progress_message_p8_getProcessInbaskets: "กำลังดึง in-baskets...",
		progress_message_p8_getProcessorInformation: "กำลังดึงข้อมูลกระบวนการ...",
		progress_message_p8_getFilterCriteria: "กำลังดึงตัวกรอง in-basket...",
		progress_message_p8_getLaunchParameters: "กำลังดึงข้อมูลไอเท็มงาน...",
		progress_message_p8_getStepAttachments: "กำลังดึงสิ่งที่แนบกับไอเท็มงาน...",
		progress_message_p8_getSubscriptions: "กำลังดึงการสมัครสมาชิกเวิร์กโฟลว์...",
		progress_message_p8_getTrackerParameters: "กำลังดึงข้อมูลไอเท็มงาน...",
		progress_message_p8_getTrackerHistory: "กำลังดึงข้อมูลประวัติไอเท็มงาน...",
		progress_message_p8_getTrackerMilestones: "กำลังดึงข้อมูลไมล์สโตนไอเท็มงาน...",
		progress_message_p8_completeStep: "กำลังทำไอเท็มงานให้เสร็จสมบูรณ์...",
		progress_message_p8_moveToInbox: "กำลังย้ายไอเท็มไปยัง in-basket...",
		progress_message_p8_returnToSender: "กำลังส่งคืนไอเท็มงาน...",
		progress_message_p8_reassign: "กำลังกำหนดไอเท็มงานใหม่...",
		progress_message_p8_launchWorkflow: "การเรียกทำงานเวิร์กโฟลว์...",
		progress_message_p8_getTransferedWorkflows: "กำลังดึงข้อมูลเวิร์กโฟลว์...",

		progress_message_cm_getProcesses: "กำลังดึงข้อมูลเวิร์กโฟลว์...",
		progress_message_cm_completeStep: "ทำไอเท็มงานต่อ...",
		progress_message_cm_getItemProcessInformation: "กำลังดึงข้อมูลเวิร์กโฟลว์...",

		progress_message_search: "กำลังค้นหา...",
		cancel_message_search: "การค้นหาถูกยกเลิก",
		progress_message_getContentItems: "กำลังดึงข้อมูลไอเท็ม...",
		progress_message_openFolder: "กำลังเปิดโฟลเดอร์...",
		progress_message_addItem: "การสร้างไอเท็ม...",
		progress_message_checkIn: "กำลังเช็กอินไอเท็ม...",
		progress_message_changePassword: "กำลังเปลี่ยนรหัสผ่าน...",
		progress_message_getDefaultInstancePermissions: "กำล้งดึงสิทธิ์ดีฟอลต์...",
		progress_message_openItem: "กำลังดึงข้อมูลไอเท็ม...",
		progress_message_saveItem: "กำลังบันทึกข้อมูลไอเท็ม...",
		progress_message_getPermissions: "กำลังดึงสิทธิ์...",
		progress_message_getEntryTemplates: "กำลังดึงเท็มเพลตรายการ...",
		progress_message_openEntryTemplate: "กำลังเปิดเท็มเพลตรายการ...",
		progress_message_getFavorites: "กำลังดึงรายการโปรด...",
		progress_message_getFoldersFiledIn: "กำลังดึงโฟลเดอร์...",
		progress_message_getDocumentVersions: "กำลังดึงเวอร์ชัน...",
		progress_message_getDependentAttributeInfo: "กำลังดึงข้อมูลแอ็ตทริบิวต์...",
		progress_message_packageForDownload: "กำลังจัดทำแพ็กเกจสำหรับดาวน์โหลด...",
		progress_message_convertDocument: "กำลังแปลงเนื้อหา...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "กำลังดึงข้อมูลชนิดเนื้อหา...",
		progress_message_SharePointPlugin_SharePointAddDocument: "กำลังเพิ่มเอกสาร...",

		progress_message_desktop_reload: "ไคล์เอ็นต์กำลังรีโหลดเดสก์ท็อปของคุณ<br>คุณอาจถูกพร้อมต์ให้ล็อกอินอีกครั้ง",
		progress_message_email: "กำลังส่งอีเมล...",
		cancel_message_email: "อีเมลถูกยกเลิก",

		progress_message_p8_getOfficeOnlineTemplates: "กำลังดึงเท็มเพลต Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "แผนผังรายการโปรด",
		favorites_content_list_label: "รายการเนื้อหารายการโปรด",
		syncItems_tree_label: "แผนผังไฟล์ที่ซิงค์ของฉัน",
		syncItems_content_list_label: "รายการเนื้อหาไฟล์ที่ซิงค์ของฉัน",
		my_checkouts_content_list_label: "รายชื่อเนื้อหา My Checkouts",
		browse_tree_label: "เรียกดูแผนผัง",
		browse_content_list_label: "เรียกดูรายการเนื้อหา",
		repository_selector_label: "ตัวเลือกที่เก็บ",
		teamspaces_content_list_label: "รายการเนื้อหา Teamspace",
		templates_content_list_label: "รายการเนื้อหาเท็มเพลต",
		work_content_list_label: "รายการเนื้อหางาน",
		work_tree_label: "แผนผังงาน",
		admin_tree_label: "แผนผังการดูแลระบบ",
		admin_tabs_label: "แท็บการดูแลระบบ",
		search_tabs_label: "แท็บค้นหา",
		search_selector_label: "ตัวเลือกการค้นหา",
		teamspace_browse_content_list_label: "รายการเนื้อหาเรียกดู Teamspace",
		teamspace_search_tabs_label: "แท็บค้นหา Teamspace",

		/* Desktop */
		undo_description: "เลิกทำ ${0}",
		redo_description: "ทำซ้ำ ${0}",

		/* Application Tabs */
		home: "ที่อยู่ทางบ้าน",
		repository: "ที่เก็บ",
		repository_type: "ชนิดที่เก็บ:",
		repository_type_header: "ชนิดที่เก็บ",
		repository_type_any: "ที่เก็บทั้งหมด",
		repository_type_contains_label: "ชนิดของที่เก็บประกอบด้วย",
		document_info: "ข้อมูลเอกสาร",
		team: "ทีม",
		administration: "การควบคุมดูแล",

		/* Home Page */
		recent_activity: "กิจกรรมล่าสุด",
		repos_and_wrksp: "ที่เก็บและ Teamspace",
		workspaces: "Teamspace",
		repositories: "ที่เก็บ",
		templates: "เท็มเพลต",
		favorites: "รายการโปรด",
		my_checkouts: "เช็กเอาต์ของฉัน",
		mySyncedFiles: "ไฟล์ที่ซิงค์ของฉัน",
		links: "ลิงก์",
		name_label: "ชื่อ",
		description_label: "รายละเอียด",
		type_label: "ชนิด:",
		type_heading: "ชนิด:",
		type_id_label: "ชนิดของ ID",
		server_type_icon: "ไอคอนชนิดเซิร์ฟเวอร์",
		server_type_heading: "ชนิดเซิร์ฟเวอร์",
		server_type: "ชนิดเซิร์ฟเวอร์",
		port_heading: "หมายเลขพอร์ต",
		port_label: "หมายเลขพอร์ต:",
		server_name_heading: "ชื่อเซิร์ฟเวอร์",
		server_label: "ชื่อเซิร์ฟเวอร์:",
		server_url_label: "URL เซิร์ฟเวอร์:",
		id_label: "ID",
		id_heading: "ID",
		connected_label: "เชื่อมต่อแล้ว:",
		repository_label: "ที่เก็บ",
		modified_label: "ปรับเปลี่ยนโดย:",
		modified_date_label: "ปรับเปลี่ยนเมื่อ:",
		status_label: "สถานะ:",
		last_modified_label: "ปรับเปลี่ยนล่าสุดโดย:",

		modifier: "ปรับเปลี่ยนโดย",
		modified_date: "ปรับเปลี่ยนเมื่อ",

		/* Favorites */
		new_favorite_label: "เพิ่มในรายการโปรด",
		edit_favorite_label: "เปลี่ยนชื่อรายการโปรด",
		remove_favorite_label: "ลบออกจากรายการโปรด",
		missing_alias_message: "คุณต้องระบุชื่อ",
		sync_favorite_enable_hover: "เปิดใช้งานไอเท็มนี้สำหรับซิงค์",
		sync_favorite_disable_hover: "ไอเท็มนี้ไม่ได้ถูกซิงค์",
		sync_favorite_sync_unavailable_hover: "ซิงค์ไม่พร้อมใช้งานสำหรับชนิดอ็อบเจ็กต์นี้",
		sync_enable_label: "ซิงค์ไอเท็มนี้",
		sync_enable_label_hover: "ไอเท็มนี้จะถูกซิงค์กับอุปกรณ์ของคุณ",
		delete_favorite_confirmation_question: "คุณต้องการลบไอเท็มนี้ออกจากรายการโปรดของคุณหรือไม่?",
		alias_label: "ชื่อ:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "ไอเท็มที่เลือกมีอยู่แล้วในรายการโปรดของคุณ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "ไม่สามารถเพิ่มไอเท็มนี้ลงในรายการของรายการโปรดของคุณ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "คุณสามารถจัดเก็บรายการโปรดได้เพียง ${0} รายการเท่านั้น",
		add_favorite_max_reached_response: "ถ้าคุณต้องการเพิ่มไอเท็มนี้ลงในรายการของรายการโปรดของคุณ คุณต้องลบรายการโปรดที่มีอยู่ก่อนจะสามารถเพิ่มไอเท็มนี้ได้",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "เอกสารที่เลือกไม่สามารถถูกแปลงเป็น PDF",
		download_as_pdf_max_content_error_explanation: "คุณสามารถแปลงจาก ${0} MB ของข้อมูลไปเป็น PDF อย่างไรก็ตาม เอกสารที่เลือกไว้มีขนาดเกิน ${0} MB",
		download_as_pdf_max_content_error_response: "เลือกเอกสารให้น้อยลงหรือเลือกเอกสารที่ขนาดเล็กลงและดาวน์โหลดเอกสารเป็นไฟล์ PDF อีกครั้ง",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "ไม่สามารถแปลงเอกสารที่เลือกเป็นไฟล์ PDF เดี่ยว",
		download_as_pdf_mimetype_check_error_explanation: "เมื่อต้องการแปลงเอกสารที่มีหลายๆ ส่วนให้เป็นไฟล์ PDF เดี่ยว แต่ละส่วนต้องมีชนิด MIME เหมือนกัน",
		download_as_pdf_mimetype_check_error_response: "เลือกเอกสารอื่นเพื่อแปลงเป็น PDF",

		/* Activity Stream */
		show_label: "แสดง:",
		all_filter: "All",
		notifications_filter: "การแจ้งเตือน",
		workitems_filter: "ไอเท็มงาน",
		documentes_filter: "เอกสาร",
		all_favorites_filter: "รายการโปรดทั้งหมด",
		folders_filter: "โฟลเดอร์",
		searches_filter: "ค้นหา",
		teamspaces_filter: "Teamspace",

		/* Repository */
		all_search_templates: "การค้นหาทั้งหมด",
		all_od_searches: "เท็มเพลตการค้นหาทั้งหมด",
		recent_searches: "การค้นหาล่าสุด",
		opened_searches: "การค้นหาที่ถูกเปิด",

		all_worklists: "กล่องขาเข้าทั้งหมด",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "รายการของทุกรายการงาน",

		/* Teamspace */
		all_workspaces: "Teamspace ทั้งหมด",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "รายการของทุกTeamspace",
		workspace_title: "Teamspace",
		workspace_icon: "ไอคอน Teamspace",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "มีอยู่",
		workspace_stat_offline: "ไม่มีอยู่",
		workspace_stat_validate: "ต้องการการตรวจสอบ",
		workspace_stat_pendingDelete: "การลบค้างอยู่",
		workspace_stat_deleteError: "การลบล้มเหลว",

		undefined_value: "ไม่ได้กำหนด",
		undefined_reference_value: "ไม่ได้กำหนดการอ้างอิง",

		/* Filter teamspaces in content list */
		more_results_on_server: "ผลลัพธ์เพิ่มเติมอาจมีอยู่บนเซิร์ฟเวอร์",
		search_all_data: "ค้นหาข้อมูลทั้งหมด",
		search_all_teamspaces: "ค้นหา Teamspace ทั้งหมด",
		teamspace_filter_results: "กำลังแสดงผลลัพธ์ ${0} รายการ ",
		displaying_filtered_results: "กำลังแสดงผลลัพธ์ที่ถูกกรอง ",
		displaying_recent_results: "การแสดง Teamspace ที่ถูกปรับเปลี่ยนใน ${0} วันที่ผ่านมา เมื่อต้องการค้นหา Teamspace อื่นๆ, กรองรายการ Teamspace ตามชื่อหรือคำอธิบาย ",
		clear_filter: "เคลียร์ตัวกรอง",

		/* FolderTreeModel */
		move_item_task: "ย้ายไอเท็ม",
		copy_item_task: "คัดลอกไอเท็ม",
		add_item_task: "เพิ่มไอเท็ม",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "ไม่พบโฟลเดอร์ต่อไปนี้: ${0} โฟลเดอร์อาจถูกลบออกแล้ว หรือไม่สามารถเปิดโฟลเดอร์จากมุมมองนี้ คลิกลิงก์ เพิ่มเติม จากมุมมองแผนผังเพื่อนำทางไปยังโฟลเดอร์ ถ้าคุณไม่สามารถดูโฟลเดอร์ ให้รีเฟรชมุมมองรายการเนื้อหา",
		more_paging_link: "เพิ่มเติม ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "สถานะ",
		status_dialog_cancel_label: "ยกเลิก",

		/* ErrorDialog */
		error_dialog_title: "ข้อผิดพลาด",
		error_dialog_icon_tooltip: "ข้อผิดพลาด",
		error_dialog_stack_trace_title: "การติดตามสแต็ก",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "คำยืนยัน",

		close_browser_msg: "ปิดหน้าต่างเบราว์เซอร์",

		/* MessageDialog */
		message_dialog_title: "แจ้งให้ทราบ",
		warning_dialog_title: "เตือน",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "ยินดีต้อนรับสู่ ${0}",
		server: "ที่เก็บ:",
		username: "ชื่อผู้ใช้:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "ต้องการชื่อผู้ใช้เพื่อล็อกอินเข้าสู่ที่เก็บ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "ต้องการรหัสผ่านเพื่อล็อกอินเข้าสู่ที่เก็บ",
		password: "รหัสผ่าน:",
		login: "ล็อกอิน",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "เซสชันของคุณหมดอายุ โปรดล็อกอินอีกครั้ง",
		login_repository_connection_expired_message: "การเชื่อมต่อกับที่เก็บ ${0} ของคุณหมดอายุแล้ว โปรดล็อกอินอีกครั้ง",
		login_site_connection_expired_message: "การเชื่อมต่อของคุณไปที่ไซต์หมดเวลา โปรดล็อกอินอีกครั้ง",
		login_new_server_message: "ป้อนชื่อและรหัสผ่านสำหรับ ${0}",
		login_error_more_information_message: "ข้อมูลเพิ่มเติม",

		disconnect_box_account_user: "ยกเลิกการเชื่อมต่อแอคเคาต์ Box: ${0}",
		disconnect_box_account: "ยกเลิกการเชื่อมต่อแอคเคาต์ Box",
		disconnect_box_accounts: "ยกเลิกการเชื่อมต่อแอคเคาต์ Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "การเชื่อมต่อ SSL เป็นสิ่งจำเป็นสำหรับการเข้าถึงที่เก็บ Box",
		login_oauth_popup_blocked: "หน้าต่างป๊อปอัพถูกบล็อกไว้ คุณอาจต้องปลดล็อคการป๊อปอัพในเบราว์เซอร์เพื่อล็อกอิน",
		login_oauth_click_here: "ถ้าคุณไม่ได้รับการเปลี่ยนทิศทางใน 5 วินาที ให้คลิกที่นี่",
		login_oauth_title: "ล็อกอิน",
		login_oauth_grant_intro: "อนุญาตการพิสูจน์ตัวตนสำหรับ ${0}",
		login_pane_oauth_click_here: "คลิกที่นี่เพื่อล็อกอิน",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "คุณต้องการล็อกเอาต์จากเว็บไคลเอ็นต์หรือไม่?",
		logout_confirmation_button: "ออกจากระบบ",

		/* ChangeLocaleDialog */
		change_locale: "เปลี่ยนค่าติดตั้งภาษาและโลแคล",
		change_locale_use_browser_language: "ใช้ค่าติดตั้งภาษาของเบราว์เซอร์ (ดีฟอลต์)",
		change_locale_use_browser_locale: "ใช้ค่าติดตั้งภาษาของเบราว์เซอร์ (ดีฟอลต์)",
		change_locale_description: "ถ้าคุณลบคุ๊กกี้ของเบราว์เซอร์ คุณต้องรีเซ็ตค่าติดตั้งภาษาและโลแคลของคุณ",
		change_locale_language_locale: "ภาษาของแอ็พพลิเคชัน:",
		change_locale_language_locale_hover: "ค่าติดตั้งนี้จะเปลี่ยนภาษาของข้อความในเว็บไคลเอ็นต์ แต่ไม่เปลี่ยนแปลงภาษาของเอกสารในแอ็พพลิเคชัน<br><br>การตั้งค่าดีฟอลต์จะใช้ภาษาที่ระบุในอ็อพชันการกำหนดคอนฟิกเบราว์เซอร์ของคุณ",
		change_locale_value_format_locale: "โลแคลของแอ็พพลิเคชัน:",
		change_locale_value_format_locale_hover: "โลแคลจะกำหนดรูปแบบของวันที่ เวลา และตัวเลขในเว็บไคลเอ็นต์<br><br>ค่าติดตั้งดีฟอลต์ใช้รูปแบบที่เชื่อมโยงกับภาษาที่ระบุไว้ในอ็อพชันการกำหนดคอนฟิกของเว็บเบราว์เซอร์ของคุณ",
		change_locale_for_office: "ค่าติดตั้งข้อความแบบสองทิศทาง:",
		change_locale_bidi_support_flag: "เปิดใช้งานส่วนสนับสนุนแบบสองทิศทาง",
		change_locale_bidi_support_flag_hover: "เมื่อเปิดใช้งานส่วนสนับสนุนแบบสองทิศทาง, ผู้ใช้สามารถตั้งค่าทิศทางของข้อความที่ใช้ในฟิลด์อินพุต  ข้อความที่ป้อนสำหรับไอเท็ม เช่น โฟลเดอร์ จะถูกแสดงอยู่ในทิศทางเดียวกันกับที่ป้อนไว้",
		change_locale_base_text_direction: "ทิศทางข้อความหลักสำหรับเนื้อหา:",
		change_locale_base_text_direction_hover: "ตั้งค่าทิศทางของข้อความที่ป้อนลงในฟิลด์อินพุต  ซึ่งยังควบคุมทิศทางการแสดงผลของเลเบลที่ป้อนไว้โดยผู้ใช้ เช่น ชื่อโฟลเดอร์",
		change_locale_calendar_type: "ชนิดปฏิทิน:",
		change_locale_calendar_type_hover: "เลือกชนิดปฏิทินที่จะใช้สำหรับเซสชันผู้ใช้",
		change_locale_base_text_direction_default: "ดีฟอลต์",
		change_locale_base_text_direction_ltr: "ซ้ายไปขวา",
		change_locale_base_text_direction_rtl: "ขวาไปซ้าย",
		change_locale_base_text_direction_contextual: "คอนเท็กซ์",
		change_locale_calendar_type_gregorian: "คริสต์ศักราช",
		change_locale_calendar_type_hijri: "ฮิจญ์เราะฮ์ศักราช",
		change_locale_calendar_type_hebrew: "ฮิบรู",
		change_locale_calendar_type_Umm_al_Qura: "อุมมุนกูรอฮ",

		/* ChangePasswordDialog */
		change_password: "เปลี่ยนรหัสผ่าน",
		change_password_title: "เปลี่ยนรหัสผ่าน",
		change_password_expired_title: "รหัสผ่านหมดอายุแล้ว",
		change_password_message: "ป้อนรหัสผ่านใหม่",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "รหัสผ่านของคุณหมดอายุ ป้อนรหัสผ่านใหม่",
		change_password_password_rules: "กฏรหัสผ่าน",
		change_password_old_password: "รหัสผ่านเก่า:",
		change_password_new_password: "รหัสผ่านใหม่:",
		change_password_confirm_password: "ยืนยันรหัสผ่าน:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "คุณต้องป้อนรหัสผ่านเก่าของคุณ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "คุณต้องป้อนรหัสผ่านใหม่",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "คุณต้องยืนยันรหัสผ่านใหม่ของคุณ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "รหัสผ่านต้องตรงกัน",

		/* GlobalToolbar */
		actions: "การดำเนินการ",
		actions_label: "การดำเนินการ:",
		open_actions_label: "เปิดแอ็คชัน:",

		/* About Dialog */
		about_dialog_title: "เกี่ยวกับ",
		about_product_name_label: "ชื่อผลิตภัณฑ์: ",
		about_product_version_label: "เวอร์ชัน: ",
		about_product_build_label: "บิลด์: ",
		about_product_license: "งานอันมีลิขสิทธิ์ - ทรัพย์สินของ IBM Corp. &copy; ลิขสิทธิ์ IBM Corp. 2012, 2016 สงวนสิทธิ์ทั้งหมด สิทธิ์จำกัดผู้ใช้ของรัฐบาลสหรัฐอเมริกา การใช้ การทำซ้ำ หรือการเปิดเผยข้อมูลในที่นี้ถูกจำกัดโดยสัญญา GSA ADP Schedule Contract กับบริษัท IBM IBM และโลโก้ของ IBM เป็นเครื่องหมายการค้าจดทะเบียนของบริษัท International Business Machine ในสหรัฐอเมริกา ประเทศอื่นๆ หรือทั้งสองกรณี โปรแกรมนี้เป็นลิขสิทธิ์ภายใต้เงื่อนไขของข้อตกลงใบอนุญาตที่มาพร้อมกับโปรแกรม ข้อตกลงการอนุญาตนี้อาจจะอยู่ทั้งในโฟลเดอร์ไดเร็กทอรีโปรแกรมหรือห้องไลบรารีระบุว่า \"License\" หรือ \"Non_IBM_License\",  ถ้าเหมาะสม หรือให้เป็นข้อตกลงใบอนุญาตพิมพ์ โปรดอ่านข้อตกลงนี้โดยละเอียดก่อนใช้โปรแกรม โดยการใช้โปรแกรมนี้ ถือว่าคุณเห็นด้วยกับเงื่อนไขเหล่านี้ ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "คุณต้องการลบไอเท็มที่เลือกหรือไม่?",
		delete_single_folder_confirmation_question: "คุณต้องการลบโฟลเดอร์ ${0} หรือไม่?",
		delete_multiple_confirmation_question: "คุณต้องการลบไอเท็มที่เลือกหรือไม่?<br>${0} ไอเท็มที่ถูกเลือก",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "ลบออก",
		search_template_delete_confirmation_question: "คุณต้องการลบการค้นหา ${0} หรือไม่?",
		search_template_opened_delete_confirmation_question: "เปิดการค้นหา ${0} ถ้าคุณลบการค้นหา การค้นหาจะปิด<br>คุณต้องการลบการค้นหานี้หรือไม่?",
		delete_multiple_opened_search_template_confirmation_question: "การค้นหาต่อไปนี้จะเปิดขึ้น: ${0}<br>ถ้าคุณลบการค้นหา การค้นหาจะปิด คุณแน่ใจว่าต้องการลบการค้นหาเหล่านี้?",
		delete_large_number_items_confirmation_question: "คุณเลือก ${0} ไอเท็มที่จะลบ<br/>การลบไอเท็มจำนวนมากอาจใช้เวลานาน<br/>คุณต้องการทำต่อหรือไม่?",
		delete_confirmation_entrytemplate: "ถ้าคุณลบเท็มเพลตรายการนี้ จะมีผลกระทบต่อไปนี้บนเอกสารหรือโฟลเดอร์ที่ถูกเชื่อมโยงกับเท็มเพลตรายการ:<ul><li>ไอเท็มจะไม่ถูกเชื่อมโยงกับเท็มเพลตรายการแล้ว และผู้ใช้อาจเห็นคำเตือนเมื่อผู้ใช้อัพเดตไอเท็ม</li><li>คุณสมบัติที่ถูกควบคุมโดยเท็มเพลตรายการ เช่นชื่อหรือลำดับของคุณสมบัติ จะไม่ถูกใช้กับไอเท็มที่ถูกเชื่อมโยงกับเท็มเพลตรายการ</li></ul>คุณต้องการลบเท็มเพลตรายการนี้หรือไม่?",
		delete_confirmation_entrytempalte_with_multi_items: "เท็มเพลตรายการต้องถูกลบแยกกัน เท็มเพลตรายการถูกลบออกจากรายชื่อของไอเท็มที่จะลบ ถ้าคุณต้องการลบเท็มเพลตรายการคุณต้องลบเท็มเพลตรายการแยกต่างหาก",

		/* Create/Apply/Remove Hold */
		hold: "ที่พัก",
		createHold: "ที่พักใหม่",
		applyHold: "ใช้ที่พัก",
		removeHold: "ลบการพัก",
		showHolds_title: "แสดงการพัก",
		applyHoldSelectText: "เลือกที่พักที่คุณต้องการนำไปใช้กับไอเท็มที่เลือก",
		availableHolds: "ที่พักที่พร้อมใช้งาน",
		removeHoldSelectText: "เลือกที่พักที่คุณต้องการลบออกจากไอเท็มที่เลือก",
		appliedHolds: "ที่พักที่นำไปใช้:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "สร้างที่พักใหม่เพื่อนำไปใช้กับไอเท็มที่เลือก",
		holdName: "ชื่อที่พัก:",
		holdDescription: "รายละเอียด",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "คุณต้องระบุชื่อสำหรับที่พัก",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "ชื่อที่พักที่ระบุมีอยู่แล้ว",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "ชื่อที่พักไม่สามารถมีอักขระต่อไปนี้ : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "เซสชันของคุณจะหมดอายุใน ${0} นาที",
		session_expire: "การหมดอายุเซสชัน",
		logoff: "ล็อกเอาต์",
		extend_session: "ขยายเซสชัน",
		admin_custom_settings: "ค่าติดตั้งเพิ่มเติม:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning เป็นค่าบูลีนที่ระบุว่า จะเปิดใช้งานคำเตือนเซสชันหมดอายุหรือไม่ ค่าดีฟอลต์ คือ true sessionExpireWarningTime เป็นจำนวนจริงระหว่าง 2 ถึง 5 เพื่อระบุเวลาคำเตือนเซสชันหมดอายุ",
		admin_custom_setting_dialog_title_new: "สร้างค่าติดตั้งใหม่",
		admin_custom_setting_dialog_title_edit: "แก้ไขค่าติดตั้ง",
		admin_custom_setting_dialog_hover_help: "เพิ่มพารามิเตอร์อื่นๆ ได้โดยระบุชื่อและค่าพารามิเตอร์ เช่น คุณสามารถระบุ “enableSessionExpireWarning” และ “true” หากคุณต้องการเปิดใช้งานคำเตือนการหมดอายุเซสชัน",
		admin_custom_setting_dialog_field_hover_help: "สำหรับข้อมูลเพิ่มเติมเกี่ยวกับชื่อและค่าของพารามิเตอร์ โปรดดูที่คู่มืออ้างอิงพารามิเตอร์สำหรับ IBM navigator",
		admin_custom_setting_dialog_nameInvalid: "ค่านี้เป็นค่าที่จำเป็น ค่าไม่สามารถมีช่องว่างและไม่สามารถซ้ำกัน",
		admin_custom_setting_dialog_bool_valueInvalid: "ค่านี้เป็นค่าที่จำเป็น ค่าต้องเป็นบูลีน",
		admin_custom_setting_dialog_int_valueInvalid: "ค่านี้เป็นค่าที่จำเป็น ค่าต้องเป็นเลขจำนวนเต็ม",
		/* Add Document Dialog */
		add_document_dialog_title: "เพิ่มเอกสาร",
		add_documents_dialog_title: "เพิ่มเอกสาร",
		add_document_general_label: "General",
		add_document_properties_label: "คุณสมบัติ",
		add_document_properties_with_ellipsis_label: "คุณสมบัติ...",
		add_document_security_label: "การรักษาความปลอดภับ",
		add_document_location_label: "บันทึกใน:",
		add_document_type_label: "คุณต้องการบันทึกอะไร?",
		add_document_localfile_label: "เอกสารโลคัล",
		add_document_metadata_label: "ข้อมูลเกี่ยวกับเอกสาร",
		add_document_external_label: "ลิงก์ไปยังเอกสารภายนอก",
		add_document_web_link_label: "เว็บลิงก์",
		add_document_saved_content_label: "ใช้ไฟล์ที่บันทึกไว้:",
		add_document_saved_content_choice: "ไฟล์ที่บันทึกไว้",
		add_document_file_name_label: "ชื่อไฟล์:",
		add_document_entry_template_label: "เท็มเพลตรายการ:",
		add_document_delete_file_label: "ลบโลคัลไฟล์",
		add_document_delete_file_disabled_label: "ไฟล์ที่ไม่ได้อยู่ในไดเร็กทอรีการติดตามไฟล์จะไม่ถูกลบ",
		add_document_major_version_label: "เวอร์ชันหลัก",
		add_document_major_version_hover: "ตั้งสถานะเอกสารเป็น Released เอกสารจะถูกเพิ่มเข้ากับที่เก็บเป็นเวอร์ชัน 1.0 ถ้าไม่ได้เลือกอ็อพชัน เอกสารจะไม่พร้อมที่จะรีลีสและถูกเพิ่มเป็นเวอร์ชันรอง 0.1",
		add_document_save_document_as_unfiled_label: "ต้องไม่บันทึกเอกสารในโฟลเดอร์",
		add_document_save_document_as_unfiled_hover: "ถ้าคุณเลือกอ็อพชันนี้ คุณสามารถหาเอกสารได้โดยการค้นหาเท่านั้น คุณไม่สามารถเรียกดูเอกสารได้",
		add_document_create_new_version_label: "สร้างเวอร์ชันใหม่",
		add_document_replace_existing_version_label: "แทนที่เวอร์ชันที่มีอยู่",
		add_document_start_workflow_label: "เรียกทำงานเวิร์กโฟลว์",
		add_document_auto_classify_label: "จัดหมวดหมู่เนื้อหาโดยอัตโนมัติ",
		add_document_add_label: "บวก",
		add_document_cancel_label: "ยกเลิก",
		add_document_document_type_label: "คลาส",
		add_document_context_info: "ค่าที่คุณป้อนสำหรับคุณสมบัติของเอกสารสามารถใช้เพื่อหาเอกสารได้ในภายหลัง",
		add_documents_context_info: "ค่าที่คุณป้อนสำหรับเอกสารสามารถใช้เพื่อหาเอกสารได้ในภายหลัง ถ้าคุณต้องการป้อนค่าคุณสมบัติอื่นสำหรับเอกสาร คุณต้องเพิ่มค่าคุณสมบัตินั้นแยกต่างหาก หรือแก้ไขคุณสมบัติของเอกสารหลังจากคุณเพิ่ม",
		add_document_url_label: "URL:",
		add_document_template_description: "คำอธิบายเท็มเพลต:",
		add_document_select_entry_template: "ป้อนหรือเลือกเท็มเพลตรายการ",
		add_document_no_permission_to_associations: "คุณไม่มีสิทธิ์ใช้เท็มเพลตรายการ",
		add_document_no_entry_template_to_use: "ไม่มีเท็มเพลตรายการที่สามารถใช้สำหรับไฟล์ที่เลือกไว้",
		add_document_no_entry_template_itemtype_permission: "คุณไม่สามารถเพิ่มไอเท็มไปยังโฟลเดอร์นี้ได้ เท็มเพลตรายการต้องถูกเลือกและคุณไม่มีสิทธิเข้าถึงเท็มเพลตรายการใดๆ ที่เชื่อมโยงกับโฟลเดอร์นี้ โปรดติดต่อผู้ดูแลระบบของคุณและแจ้งให้ผู้ดูแลระบบกำหนดสิทธิเข้าถึงเท็มเพลตรายการที่เชื่อมโยงกับโฟลเดอร์นี้",
		add_document_appgroup_name_label: "ชื่อกลุ่มแอ็พพลิเคชัน:",
		add_document_app_name_label: "ชื่อแอ็พพลิเคชัน:",
		create_folder_dialog_title: "สร้างโฟลเดอร์",
		create_folder_context_info: "ค่าที่คุณป้อนสำหรับคุณสมบัติของโฟลเดอร์สามารถใช้เพื่อหาโฟลเดอร์ได้ในภายหลัง",
		create_folder_folder_name_label: "ชื่อโฟลเดอร์",
		create_folder_save_folder_as_unfiled_label: "ต้องไม่บันทึกโฟลเดอร์ในโฟลเดอร์อื่น",
		create_folder_save_folder_as_unfiled_hover: "ถ้าคุณเลือกอ็อพชันนี้ คุณสามารถหาโฟลเดอร์นี้ได้โดยการค้นหาเท่านั้น คุณไม่สามารถเรียกดูเอกสารได้",
		add_item_create_in_folder: "สร้างในโฟลเดอร์:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "ชื่อโฟลเดอร์ไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "ชื่อโฟลเดอร์ไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / และไม่สามารถเท่ากับ . หรือ ..",
		invalid_box_file_name_message: "ชื่อไฟล์ไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / และไม่สามารถเท่ากับ . หรือ ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "ชื่อไฟล์ไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / : * ? \" < > |",
		external_document_placeholder: "ป้อน URL ของเอกสาร",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "ต้องป้อนสีเป็นเลขฐานสิบหก 3 หรือ 6 หลัก ตัวอย่างเช่น #000 หรือ #000000",
		add_document_unfiled: "${0} ช่องว่าง",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "เพิ่มเอกสารโดยใช้เท็มเพลตรายการ",
		add_document_using_template_context_info: "เมื่อคุณเพิ่มเอกสารโดยใช้เท็มเพลตรายการ ค่าที่คุณป้อนสำหรับเอกสารจะแน่นอน",
		add_documents_using_template_dialog_title: "เพิ่มเอกสารโดยใช้เท็มเพลตรายการ",
		add_documents_document_name_is_file_name_hint: "จะใช้ชื่อไฟล์สำหรับคุณสมบัตินี้",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "สร้างโฟลเดอร์ใหม่โดยใช้เท็มเพลตรายการ",
		create_folder_using_template_context_info: "เมื่อคุณสร้างโฟลเดอร์โดยใช้เท็มเพลตรายการ ค่าที่คุณป้อนสำหรับโฟลเดอร์จะแน่นอน",

		add_documents_batch_results_dialog_title: "เอกสารไม่ถูกเพิ่มไปยังที่เก็บ",
		add_documents_batch_results_dialog_context_info: "เอกสารต่อไปนี้ไม่ถูกเพิ่มไปยังที่เก็บ เลือกเอกสารและคลิก Details สำหรับรายละเอียดเพิ่มเติมเกี่ยวกับสาเหตุที่เอกสารไม่ถูกเพิ่มไปยังที่เก็บ",
		add_documents_batch_results_dialog_filename_col_hdr: "ชื่อไฟล์",
		add_documents_batch_results_dialog_status_col_hdr: "สถานะ",
		add_documents_batch_results_dialog_message_col_hdr: "ข้อความ",
		add_documents_batch_results_status_error: "ข้อผิดพลาด",
		add_documents_batch_results_status_cancelled: "ถูกยกเลิก",
		add_documents_batch_results_status_cancelled_msg: "เอกสารไม่ถูกเพิ่มเนื่องจากคำขอถูกยกเลิก",

		add_documents_batch_status_title: "การเพิ่มเอกสาร",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "กำลังเพิ่มไฟล์ ${0} จาก ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "ข้อผิดพลาด: ${0}",
		add_documents_batch_status_completing_msg: "กระบวนการจะหยุดทำงานหลังจากเอกสารถูกเพิ่ม",

		add_documents_status_uploading_msg: "กำลังอัพโหลดไฟล์ ${0} จาก ${1}...",
		add_documents_status_adding_msg: "กำลังเพิ่มไฟล์ ${0} จาก ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "เท็มเพลตรายการมีการกำหนดคอนฟิกในแอ็พพลิเคชันอื่น และมีการกำหนดคอนฟิกเพื่อประกาศเอกสารเป็นเร็กคอร์ดเสมอ อย่างไรก็ตาม ค่าติดตั้งนี้จะถูกข้าม เนื่องจากเว็บไคลเอ็นต์ไม่สนับสนุนการประกาศเอกสารเป็นเร็กคอร์ด",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "เท็มเพลตรายการมีการกำหนดคอนฟิกในแอ็พพลิเคชันอื่น และมีการกำหนดคอนฟิกเพื่อให้คุณตัดสินใจว่าจะประกาศเอกสารนี้เป็นเร็กคอร์ดหรือไม่ อย่างไรก็ตาม ค่าติดตั้งนี้จะถูกข้าม เนื่องจากเว็บไคลเอ็นต์ไม่สนับสนุนการประกาศเอกสารเป็นเร็กคอร์ด",
		no_selection: "&lt;เลือก&gt;",

		batch_results_dialog_details_label: "รายละเอียด",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "ค่าไม่ถูกต้อง ค่าต้องเป็น Globally Unique Identifier (GUID) เช่น {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "ค่าไม่ถูกต้อง ค่าต้องเป็นจำนวน floating point ตัวอย่างเช่น 1.2 หรือ 365",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "ค่าไม่ถูกต้อง ค่าต้องอยู่ในรูปแบบ ${0} ตัวอย่างเช่น ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "ค่าไม่ถูกต้อง ค่าต้องเป็นค่าทศนิยม ตัวอย่างเช่น 1.2 หรือ 365",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "ค่าไม่ถูกต้อง ค่าต้องเป็นเลขจำนวนเต็ม ตัวอย่างเช่น 5 หรือ 1349",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "ค่าไม่ถูกต้อง ค่าสามารถมีอักขระตัวอักษรเท่านั้น เช่น a-z และ A-Z",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "ค่าไม่ถูกต้อง ค่าสามารถมีอักขระตัวอักษรผสมตัวเลขเท่านั้น เช่น a-z, A-Z และ 0-9",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "ค่าไม่ถูกต้อง ค่าสามารถมีอักขระตัวเลขเท่านั้น เช่น 0-9",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "ค่าไม่ถูกต้อง ค่าสามารถประกอบด้วยอักขระต่อไปนี้เท่านั้น: a-z, A-Z, 0-9, [ช่องว่าง] และ `.,:;?\"/-_&amp;+%*=<>()|!$#^@",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "ค่าไม่ถูกต้อง ค่าต้องเป็นวันที่ที่มีรูปแบบต่อไปนี้: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "ค่าไม่ถูกต้อง ค่าต้องเป็นเวลาที่มีรูปแบบต่อไปนี้: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "ค่าไม่ถูกต้อง เลือกค่าจากเมนูแบบดร็อปดาวน์",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "ค่าไม่ถูกต้อง",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "ค่าไม่ถูกต้อง ค่าต้องมีรูปแบบต่อไปนี้: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "จำเป็นต้องมีค่านี้",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "ค่ายาวเกินไป คุณสมบัติสนับสนุนความยาวสูงสุด ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "ค่าสั้นเกินไป คุณสมบัติสนับสนุนความยาวต่ำสุด ${0}",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "ค่าไม่อยู่ในช่วงที่กำหนด ค่าต้องเป็นจำนวนทศนิยม ระหว่าง ${0} และ ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "ค่าไม่อยู่ในช่วงที่กำหนด ค่าต้องเป็นค่าทศนิยมระหว่าง ${0} และ ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "ค่าไม่อยู่ในช่วงที่กำหนด ค่าต้องเป็นจำนวนเต็มระหว่าง ${0} และ ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "ค่าต้องเป็นวันที่ระหว่าง ${0} และ ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "ค่าไม่อยู่ในช่วงที่กำหนด ค่าต้องเป็นวันที่ระหว่าง ${0} และ ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "ค่าไม่อยู่ในช่วงที่กำหนด ค่าต้องเป็นเวลาระหว่าง ${0} และ ${1}",
		property_and: "and",

		property_invalidValueOrRequired: "ค่าต่อไปนี้ไม่ถูกต้องหรือจำเป็นต้องมี: ${0}",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "คุณสมบัติ",
		edit_properties_dialog_info: "คุณสามารถดูหรือแก้ไขคุณสมบัติของไอเท็มนี้ ถ้าคุณมีสิทธิ์ที่เหมาะสม คุณยังสามารถแก้ไขความปลอดภัยของไอเท็ม อย่างไรก็ตาม คุณไม่สามารถเปลี่ยนคุณสมบัติระบบได้",
		edit_properties_od_dialog_info: "คุณสามารถดูหรือแก้ไขคุณสมบัติของไอเท็มนี้ อย่างไรก็ตาม คุณไม่สามารถเปลี่ยนคุณสมบัติระบบได้",
		system_properties_title: "คุณสมบัติระบบ",
		custom_properties_title: "คุณสมบัติ",
		/* Folder collaboration tab */
		box_permission_permission: "สิทธิ์",
		box_permission_permissions: "สิทธิ",
		box_permission_editor: "เอดิเตอร์",
		box_permission_owner: "เจ้าของ",
		box_permission_co_owner: "เจ้าของร่วม",
		box_permission_viewer_uploader: "ผู้อัพโหลดวิวเวอร์",
		box_permission_previewer_uploader: "ผู้อัพโหลดผู้แสดงตัวอย่าง",
		box_permission_viewer: "ผู้ดู",
		box_permission_previewer: "ผู้แสดงตัวอย่าง",
		box_permission_uploader: "ผู้อัพโหลด",
		box_permission_add: "บวก",
		box_permission_upload: "อัพโหลด",
		box_permission_download: "ดาวน์โหลด",
		box_permission_preview: "แสดงตัวอย่าง",
		box_permission_view: "ดู",
		box_permission_send_links: "ส่งลิงก์แบบดูได้อย่างเดียว",
		box_permission_create_subfolders: "สร้างโฟลเดอร์ย่อย",
		box_permission_create_tasks: "สร้างภารกิจ",
		box_permission_add_comments: "เพิ่มข้อคิดเห็น",
		box_collaboration_invite_placeholder: "ป้อนชื่อ อีเมล หรือกลุ่มเพื่อเชิญ",
		box_collaboration_invite_placeholder_non_admin: "ป้อนอีเมลที่ต้องการเชิญ",
		box_collaboration_invalid_email: "ป้อนอีเมลแอดเดรสที่ถูกต้อง",
		box_collaboration_user_already_present: "ผู้ใช้นี้เป็นผู้ทำงานร่วมกันบนโฟลเดอร์อยู่แล้ว",
		box_collaboration_user_name: "ชื่อ",
		box_collaboration_email_address: "อีเมลแอดเดรส",
		box_collaboration_date_added: "วันที่ที่เพิ่ม",
		box_collaboration_remove_collaboration: "ลบ",
		box_collaboration_remove_collaboration_title: "ลบออก",
		box_collaboration_no_collaborators: "ไม่มีผู้ทำงานร่วมกัน",
		box_collaboration_change_owner_title: "เปลี่ยนเจ้าของไอเท็ม",
		box_collaboration_change_owner_prompt: "โดยการทำให้ผู้ทำงานร่วมกันนี้เป็นเจ้าของโฟลเดอร์ คุณจะกลายเป็นเอดิเตอร์ และไม่ได้เป็นเจ้าของโฟลเดอร์อีกต่อไป ผู้ทำงานร่วมกันใดๆ ที่ถูกเพิ่มเข้ากับโฟลเดอร์นี้โดยตรงจะเห็นโฟลเดอร์ในโฟลเดอร์รูท ผู้ทำงานร่วมกันใดๆ ที่ถูกเพิ่มที่ระดับพาเรนต์โฟลเดอร์ หรือสูงกว่าจะไม่เป็นผู้ทำงานร่วมกันอีกต่อไป คุณต้องการทำต่อหรือไม่?",
		box_collaboration_remove_self_title: "ลบตัวเอง",
		box_collaboration_remove_self_prompt: "คุณแน่ใจหรือไม่ว่าต้องการลบตัวเองออกจากการเป็นผู้ทำงานร่วมกัน? คุณจะไม่สามารถเข้าถึงโฟลเดอร์นี้ได้อีก",
		box_collaboration_user: "ผู้ใช้",
		box_collaboration_group: "Group",
		box_managing_users_not_configured: "คุณไม่สามารถค้นหาผู้ใช้และกลุ่มได้เนื่องจากแอ็พพลิเคชัน Box ไม่ถูกกำหนดค่าอย่างถูกต้อง เมื่อต้องการใช้คุณลักษณะนี้ โปรดติดต่อผู้ดูแลระบบ และขอให้กำหนดค่าแอ็พพลิเคชัน Box สำหรับการจัดการผู้ใช้และกลุ่ม",
		duplicate_value_error: "แต่ละค่าในคุณสมบัตินี้ต้องไม่ซ้ำกัน",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "การเปลี่ยนแปลงใด ๆ ที่คุณทำในฟิลด์ต่อไปนี้จะถูกนำไปใช้กับไอเท็มที่ถูกเลือกทั้งหมด ถ้าคุณต้องการป้อนค่าคุณสมบัติอื่นสำหรับไอเท็มเฉพาะ คุณต้องแก้ไขคุณสมบัติของแต่ละไอเท็ม",
		multi_edit_properties_class_label: "คลาส:",
		multi_edit_properties_items_label: "ชื่อไอเท็ม:",
		multi_edit_properties_properties_label: "คุณสมบัติ :",
		multi_edit_batch_status_title: "กำลังอัพเดตคุณสมบัติ",
		multi_edit_batch_status_adding_msg: "กำลังอัพเดต ${0} ไอเท็มจาก ${1}...",
		multi_edit_batch_status_verifying_msg: "กำลังตรวจสอบ ${0} ไอเท็มจาก ${1}...",
		multi_edit_batch_status_completing_msg: "กระบวนการจะหยุดหลังจากไอเท็มถูกอัพเดต",
		multi_edit_batch_status_validation_completing_msg: "กระบวนการจะหยุดหลังจากไอเท็มถูกตรวจสอบ",
		multi_edit_batch_results_status_error: "ข้อผิดพลาด",
		multi_edit_batch_results_status_cancelled: "ถูกยกเลิก",
		multi_edit_batch_results_status_cancelled_msg: "ไอเท็มไม่ถูกอัพเดตเนื่องจากคำร้องขอถูกยกเลิก",
		multi_edit_batch_results_dialog_title: "ไอเท็มไม่ถูกอัพเดต",
		multi_edit_batch_results_dialog_context_info: "ไอเท็มต่อไปนี้ไม่ถูกอัพเดต เลือกชื่อไอเท็มและคลิกที่ รายละเอียด สำหรับข้อมูลเพิ่มเติมว่าทำไมไอเท็มจึงไม่ถูกอัพเดต",
		multi_edit_batch_results_dialog_itemname_col_hdr: "ชื่อไอเท็ม",
		multi_edit_batch_results_dialog_status_col_hdr: "สถานะ",
		multi_edit_batch_results_dialog_message_col_hdr: "ข้อความ",
		multi_edit_batch_status_errors_msg: "ข้อผิดพลาด: ${0}",
		multi_edit_batch_permission_error_text: "ไม่สามารถบันทึกการเปลี่ยนแปลงที่กระทำกับคุณสมบัติได้",
		multi_edit_invalid_value_error: "ค่านี้ขึ้นอยู่กับค่าคุณสมบัติอื่น และใช้ไม่ได้สำหรับไอเท็มที่คุณเลือก",
		multi_edit_batch_permission_error_explanation: "คุณไม่สามารถแก้ไขคุณสมบัติของไอเท็มนี้เนื่องจากคุณไม่มีสิทธิ์ที่เพียงพอ",
		multi_edit_no_modifiable_properties: "คุณสมบัติของไอเท็มที่เลือกถูกอัพเดต เกิดขึ้นต่อเมื่อไอเท็มรวมเอาเฉพาะคุณสมบัติแบบอ่านอย่างเดียว เมื่อสามารถแก้ไขได้เฉพาะชื่อหรือชื่อเรื่องของไอเท็ม เมื่อเลือกหลายไอเท็ม คุณไม่สามารถแก้ไขชื่อหรือชื่อเรื่องของไอเท็มได้",
		multi_edit_mult_classes_dialog_info: "ไอเท็มที่เลือกอยู่บนที่เก็บอื่น หรือเป็นของคลาสอื่น คุณสามารถแก้ไขได้เฉพาะไอเท็มที่อยู่ในคลาสเดียวกัน หรืออยู่บนที่เก็บเดียวกันเท่านั้น เลือกชุดย่อยของไอเท็มที่คุณต้องการแก้ไข",
		multi_edit_class_selector_class_heading: "คลาส",
		multi_edit_class_selector_entry_template_heading: "เท็มเพลตรายการ",
		multi_edit_class_selector_repository_heading: "ที่เก็บ",
		multi_edit_class_selector_items_heading: "ไอเท็ม",
		multi_edit_some_classes_not_displayed: "บางไอเท็มที่เลือกไม่รวมอยู่ในรายการนี้เนื่องจากไอเท็มมีคุณสมบัติที่อย่างได้อย่างเดียว หรือเนื่องจากไอเท็มอยู่บนที่เก็บที่ไม่สนับสนุนการแก้ไขคุณสมบัติ",
		multi_edit_properties_invalid_msg: "ค่าคุณสมบัติบางรายการใช้ไม่ได้สำหรับไอเท็มที่เลือกทั้งหมด",
		multi_edit_properties_readonly_tooltip_text: "${0}: คุณสมบัตินี้อ่านได้อย่างเดียวและไม่สามารถปรับเปลี่ยนได้",
		multi_edit_append_checkbox_label: "ผนวก",
		multi_edit_append_checkbox_tooltip: "เลือกอ็อพชันนี้ หากคุณต้องการผนวกค่าคุณสมบัติเข้ากับค่าที่มีอยู่แทนที่จะเขียนทับ",
		multi_edit_properties_invalid_childcomponent_msg: "บางค่าในคุณสมบัติ ${0} ของคอมโพเนนต์ย่อย ${1} ขึ้นกับคุณสมบัติอื่นและใช้ไม่ได้แล้วกับการเลือกที่คุณทำขึ้น ล้างค่าในคอมโพเนนต์ย่อย ${1} หรือเปลี่ยนคุณสมบัติเป็นไอเท็มที่คุณเลือกทีละรายการ",

		/* Export Properties Dialog */
		export_properties_dialog_title: "เอ็กซ์พอร์ตคุณสมบัติ",
		export_properties_dialog_info: "เลือกคุณสมบัติที่คุณต้องการเอ็กซ์พอร์ต และระบุลำดับในการแสดงผล",
		export_properties_dialog_export_button_label: "เอ็กซ์พอร์ต",
		export_properties_dialog_export_raw_values: "เอ็กซ์พอร์ตค่าดิบ",

		/* Properties */
		filter_clear_tooltip: "เคลียร์ตัวกรอง",
		properties_new_row: "สร้าง",
		properties_requiredClass_document_tooltip: "เลือกเอกสาร เอกสารต้องเป็นสมาชิกของคลาส ${0}",
		properties_requiredClass_folder_tooltip: "เลือกโฟลเดอร์ โฟลเดอร์ต้องเป็นสมาชิกของคลาส ${0}",
		properties_dataType_tooltip: "ชนิดข้อมูล: ${0}",
		properties_maxLength_tooltip: "ความยาวสูงสุด: ",
		properties_minLength_tooltip: "ความยาวต่ำสุด: ",
		properties_minValue_tooltip: "ค่าต่ำสุด: ",
		properties_maxValue_tooltip: "ค่าสูงสุด: ",
		properties_format_tooltip: "รูปแบบ: ",
		properties_description_tooltip: "คำอธิบาย: ",

		properties_type_boolean_tooltip: "บูลีน",
		properties_type_date_tooltip: "วันที่",
		properties_type_time_tooltip: "เวลา",
		properties_type_timestamp_tooltip: "เวลาประทับ",
		properties_type_decimal_tooltip: "ค่าทศนิยม",
		properties_type_double_tooltip: "จำนวนทศนิยม",
		properties_type_short_tooltip: "จำนวนเต็ม",
		properties_type_integer_tooltip: "จำนวนเต็ม",
		properties_type_long_tooltip: "จำนวนเต็ม",
		properties_type_string_tooltip: "สตริงข้อความ",
		properties_type_string_alpha_tooltip: "สตริงตัวอักษร",
		properties_type_string_alphanum_tooltip: "สตริงตัวเลขผสมตัวอักษร",
		properties_type_string_ext_tooltip: "สตริงตัวอักษรผสมตัวเลขที่ขยายเพิ่ม",
		properties_type_string_num_tooltip: "สตริงตัวเลข",
		properties_type_binary_tooltip: "ไบนารี",
		properties_type_object_tooltip: "อ็อบเจ็กต์",
		properties_type_reference_tooltip: "คุณสมบัตินี้อ้างถึงไอเท็มอื่นในที่เก็บ",
		properties_type_guid_tooltip: "ตัวระบุเฉพาะแบบโกลบอล",
		properties_type_group_tooltip: "ผู้ใช้และกลุ่ม",
		properties_type_user_tooltip: "ผู้ใช้",
		properties_type_childComponent_tooltip: "คอมโพเนนต์ลูก",

		properties_childComponent_minCardinalityOnly_tooltip: "คุณสมบัตินี้ต้องมีอย่างน้อย ${0} ค่า",
		properties_childComponent_maxCardinalityOnly_tooltip: "คุณสมบัตินี้ไม่สามารถมีมากกว่า ${0} ค่า",
		properties_childComponent_minMaxCardinality_tooltip: "คุณสมบัตินี้ต้องมีอย่างน้อย ${0} ค่าและไม่มากกว่า ${1} ค่า",
		properties_childComponent_noCardinality_tooltip: "คุณสมบัตินี้สามารถมีค่าจำนวนเท่าใดก็ได้",

		properties_type_guid_example_tooltip: "ตัวอย่างเช่น {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "เลือกค่าจากรายการ",
		properties_single_select_choice_tooltip: "เลือกค่า",
		properties_multiple_select_typein_tooltip: "ป้อนค่าหนึ่งค่าหรือมากกว่า",
		properties_multiple_select_choice_tooltip: "เลือกค่าหนึ่งค่าหรือมากกว่า",
		properties_not_selectable_tooltip: "ไม่สามารถเลือกหมวดหมู่ได้",
		properties_none: "ไม่ได้กำหนด",
		properties_none_tooltip: "เลือก <i>ไม่มี</i> เพื่อเคลียร์ค่าปัจจุบันสำหรับคุณสมบัตินี้",
		properties_value_empty: "ไม่มีค่า",
		properties_value_read_only: "อ่านอย่างเดียว",
		properties_clear_label: "ล้าง",
		properties_clear_tooltip: "การเคลียร์ค่าในฟิลด์นี้จะล้างค่าในที่เก็บหลังจากที่คุณคลิก <b>บันทึก</b>",
		properties_box_custom_properties: "คุณสมบัติแบบกำหนดเอง",
		properties_box_metadata_name_in_use: "ชื่อนี้ถูกใช้อยู่แล้ว ป้อนชื่ออื่นสำหรับคุณสมบัติที่กำหนดเอง",

		properties_templates: "เท็มเพลต",
		properties_add_template: "เพิ่มเท็มเพลต",
		properties_remove_template: "ลบ",
		/* Checkin Document Dialog */
		checkin_dialog_title: "เช็กอิน",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "เช็กอิน",
		checkin_cancel_label: "ยกเลิก",
		checkin_file_name_label: "ชื่อไฟล์",
		checkin_document_status_title: "เช็คอินเอกสาร",
		checkin_document_status_uploading_msg: "กำลังอัพโหลดไฟล์...",
		checkin_document_status_checkingin_msg: "กำลังเช็กอินไฟล์...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "เลือกโหมดการแก้ไข",
		viewer_redaction_new_document_confirmation_question: "คุณต้องการบันทึกการเขียนเป็นเอกสารใหม่หรือโลคัลไฟล์?",
		viewer_redaction_new_version_confirmation_question: "คุณต้องการบันทึกการเขียนเป็นเวอร์ชันใหม่หรือไม่?",
		viewer_redaction_new_version_confirmation_question_never: "คุณต้องการบันทึกการเขียนเป็นเนื้อหาใหม่หรือไม่?",		
		viewer_redaction_new_document_button: "ใช่",
		viewer_redaction_new_document_cancel_button: "ไม่",
		viewer_redaction_add_document_confirmation_question: "คุณต้องการบันทึกการเขียนเป็นเอกสารใหม่ เวอร์ชันใหม่ หรือโลคัลไฟล์?",
		viewer_redaction_add_document_confirmation_question_version_never: "คุณต้องการบันทึกการเขียนเป็นเอกสารใหม่ เนื้อหาใหม่ หรือโลคัลไฟล์?",
		viewer_redaction_add_document_button: "เอกสารใหม่",
		viewer_redaction_add_new_version_button: "เวอร์ชันใหม่",
		viewer_redaction_add_new_version_button_version_never: "เนื้อหาใหม่",
		viewer_redaction_add_local_file_button: "โลคัลไฟล์",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "เลือกเหตุผลในการเขียน",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "ไม่พบเท็มเพลตรายการที่ใช้เพื่อเพิ่มเอกสารนี้เข้ากับที่เก็บ เอกสารจะถูกเช็กอินเข้าสู่ที่เก็บโดยไม่ใช้เท็มเพลตรายการ",
		property_entry_template_not_retrieved_warning: "ไม่พบเท็มเพลตรายการที่ใช้เพื่อเพิ่มเอกสารนี้เข้ากับที่เก็บ คุณสมบัติเอกสารจะถูกแสดงโดยไม่ได้ใช้เท็มเพลตรายการ",
		multi_edit_entry_template_not_found_name: "[ไม่พบ]",
		multi_edit_entry_template_not_retrieved_warning: "ไม่พบเท็มเพลตรายการที่ใช้เพื่อเพิ่มไอเท็มเหล่านี้เข้ากับที่เก็บ คุณสมบัติของไอเท็มอาจถูกปรับเปลี่ยนโดยไม่ได้ใช้เท็มเพลตรายการ",
		checkin_major_version_hover: "เพิ่มหมายเลขเวอร์ชันของเอกสารขึ้นหนึ่ง และตั้งสถานะของเอกสารเป็นรีลีส ถ้าไม่ได้เลือกอ็อพชัน เอกสารจะไม่พร้อมที่จะรีลีสและจะถูกเช็กอินเป็นเวอร์ชันรอง",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "ไม่สามารถเช็กอินเอกสารเนื่องจากไม่ได้เช็กเอาต์เอกสาร",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID ผู้ใช้หรือรหัสผ่านไม่ถูกต้องสำหรับเซิร์ฟเวอร์",
		error_bad_userid_password_userResponse: "โปรดตรวจสอบให้แน่ใจว่าคุณป้อน ID ผู้ใช้และรหัสผ่านของคุณอย่างถูกต้อง",
		error_bad_userid_password_adminResponse: "ข้อผิดพลาดต่อไปนี้ถูกส่งคืน: ${0}",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "ไม่สามารถสร้างการเชื่อมต่อไปยังเว็บไคลเอ็นต์โดยใช้ URL ต่อไปนี้: ${0}",
		http_send_error_explanation: "ข้อผิดพลาดนี้เกิดขึ้นจากปัญหาเกี่ยวกับการกำหนดคอนฟิกบนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์หรือโดยปัญหากับเว็บไคลเอ็นต์แอ็พพลิเคชัน",
		http_send_error_userResponse: "ลองล็อกอินอีกครั้ง ถ้าปัญหายังคงอยู่ ให้รายงานปัญหานี้กับผู้ดูแลระบบของคุณ",
		http_send_error_adminResponse: "ข้อผิดพลาด HTTP ต่อไปนี้ถูกส่งคืน: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "ไม่สามารถสร้างการเชื่อมต่อไปยังเว็บไคลเอ็นต์โดยใช้ URL ต่อไปนี้: ${0}",
		http_error_explanation: "คุณอาจต้องพิสูจน์ตัวตนกับไฟร์วอลล์ หรือเว็บแอ็พพลิเคชันเซิร์ฟเวอร์อาจไม่ได้รันอยู่ หรือไม่สามารถเข้าถึงได้ เนื่องจากปัญหาเกี่ยวกับเครือข่าย",
		http_error_userResponse: "ถ้าคุณต้องพิสูจน์ตัวตนกับไฟร์วอลล์ ให้พิสูจน์ตัวตนและลองล็อกอินอีกครั้ง ถ้าปัญหายังคงอยู่ ให้รายงานปัญหานี้กับผู้ดูแลระบบของคุณ",
		http_error_adminResponse: "ข้อผิดพลาด HTTP ต่อไปนี้ถูกส่งคืน: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "ไม่สามารถสร้างการเชื่อมต่อไปยังเว็บไคลเอ็นต์โดยใช้ URL ต่อไปนี้: ${0}",
		http_response_bad_explanation: "ข้อผิดพลาดนี้อาจเกิดจากปัญหาเกี่ยวกับการกำหนดคอนฟิกบนเว็บแอ็พพลิเคชันเซิร์ฟเวอร์หรือปัญหากับเว็บไคลเอ็นต์",
		http_response_bad_userResponse: "ลองล็อกอินอีกครั้ง ถ้าปัญหายังคงอยู่ ให้รายงานปัญหานี้กับผู้ดูแลระบบของคุณ",
		http_response_bad_adminResponse: "ข้อผิดพลาดต่อไปนี้ถูกส่งคืน: ${1}",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "ไม่มีชื่อเรื่อง",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "ไม่สามารถเริ่มต้นอีเมลแอ็พเพล็ต",
		email_applet_init_failed_explanation: "ปัญหานี้อาจเกิดขึ้นเมื่อไม่ได้ติดตั้งและกำหนดคอนฟิกอีเมลไคลเอ็นต์อย่างถูกต้อง หรือเมื่อไม่ได้ติดตั้งเวอร์ชันที่สนับสนุนของ Java Runtime Environment (JRE) บนเวิร์กสเตชันของคุณ",
		email_applet_init_failed_userResponse: "เมื่อต้องการแก้ปัญหา:<ul><li>ตรวจสอบให้แน่ใจว่าแอ็พพลิเคชันอีเมลของคุณมีการติดตั้งและตั้งค่าเป็นดีฟอลต์อีเมลไคลเอ็นต์บนเวิร์กสเตชัน</li><li>ตรวจสอบว่ามีการติดตั้งเวอร์ชันที่สนับสนุนของ JRE บนเวิร์กสเตชันโดยป้อนคำสั่งต่อไปนี้ในพร้อมต์คำสั่ง: java -version</li></ul><p>รายการของเวอร์ชันที่สนับสนุนของ JRE มีอยู่ในเอกสาร <i>สิ่งที่จำเป็นต้องมีสำหรับฮาร์ดแวร์และซอฟต์แวร์สำหรับ IBM Content Navigator</i> บนไซต์ IBM Software Support</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "ไม่สามารถเริ่มต้นแอ็พพลิเคชันอีเมลได้ เนื่องจากไม่สามารถโหลดไฟล์ DLL ที่ต้องการได้",
		email_applet_JNI_LOAD_FAILED_explanation: "ไม่สามารถโหลดไฟล์ WCEmailAppletJNI.dll ที่ต้องการได้ เนื่องจากไดเร็กทอรีชั่วคราวบนเวิร์กสเตชันของคุณอาจเต็ม",
		email_applet_JNI_LOAD_FAILED_userResponse: "ตรวจสอบให้แน่ใจว่าไดเร็กทอรีชั่วคราวมีพื้นที่ว่างเพียงพอ จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง โดยดีฟอลต์ ไฟล์ WCEmailAppletJNI.dll จะโหลดในไดเร็กทอรีชั่วคราวที่ระบุไว้ในค่าติดตั้งเว็บเบราว์เซอร์ของคุณ",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "ไม่สามารถเริ่มต้นแอ็พพลิเคชันอีเมลได้ เนื่องจากอีเมลแอ็พเพล็ตไม่สามารถสร้างไฟล์ชั่วคราวได้",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "ไดเร็กทอรีชั่วคราวบนเวิร์กสเตชันอาจเต็ม",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "ตรวจสอบให้แน่ใจว่าไดเร็กทอรีชั่วคราวมีพื้นที่ว่างเพียงพอ จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "ไม่สามารถเริ่มต้นแอ็พพลิเคชันอีเมลได้ เนื่องจากอีเมลแอ็พเพล็ตไม่สามารถเข้าถึงไดเร็กทอรีชั่วคราวได้",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "ไดเร็กทอรีชั่วคราวบนเวิร์กสเตชันของคุณอาจเต็ม หรือคุณอาจไม่มีสิทธิ์ที่เหมาะสมเพื่อเขียนไดเร็กทอรีชั่วคราว",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "ตรวจสอบให้แน่ใจว่าไดเร็กทอรีชั่วคราวมีพื้นที่ว่างเพียงพอ และแน่ใจว่าคุณมีสิทธิ์เขียนในไดเร็กทอรีชั่วคราว จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงเกิดขึ้นอีก โปรดติดต่อผู้ดูแลระบบ",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "อีเมลแอ็พเพล็ตไม่สามารถลบไฟล์ชั่วคราวได้",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "แอ็พพลิเคชันอื่นอาจกำลังใช้ไฟล์ หรืออาจไม่มีไฟล์บนเวิร์กสเตชันของคุณ",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "ถ้าไฟล์ถูกใช้โดยแอ็พพลิเคชันอื่น ให้ปิดแอ็พพลิเคชัน ถ้าไฟล์อยู่บนระบบไฟล์โลคัลของคุณ ให้ลบไฟล์ต่อไปนี้จากไดเร็กทอรีชั่วคราวบนเวิร์กสเตชัน: ${0}",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "ไม่สามารถลบลิงก์ไปยังเอกสารได้",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "ที่เก็บส่งคืน URL ในรูปแบบที่ไม่ถูกต้อง",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "ปิดเว็บเบราว์เซอร์ของคุณรวมถึงแท็บและเซสชันทั้งหมดและล็อกอินอีกครั้ง ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงอยู่ โปรดติดต่อ IBM Software Support",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "อีเมลแอ็พเพล็ตไม่สามารถแนบไฟล์กับอีเมลได้",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "ที่เก็บส่งคืน URL ไปยังเอกสารในรูปแบบที่ไม่ถูกต้อง",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "ปิดเว็บเบราว์เซอร์ของคุณรวมถึงแท็บและเซสชันทั้งหมดและล็อกอินอีกครั้ง ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงอยู่ โปรดติดต่อ IBM Software Support",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "ไม่สามารถสร้างสิ่งที่ส่งมาด้วยกับข้อความ",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "อีเมลแอ็พเพล็ตไม่สามารถอ่าน URL ไปยังเอกสารได้",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "ปิดเว็บเบราว์เซอร์ของคุณรวมถึงแท็บและเซสชันทั้งหมดและล็อกอินอีกครั้ง ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงอยู่ โปรดติดต่อ IBM Software Support",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "ไม่สามารถดึงเอกสารจากที่เก็บได้",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "เซสชันของคุณอาจหมดเวลา ที่เก็บหรือเว็บแอ็พพลิเคชันเซิร์ฟเวอร์อาจไม่ได้รันอยู่ หรืออาจมีปัญหากับคอนฟิกูเรชันเว็บไคลเอ็นต์",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "ล็อกอินและลองส่งเอกสารโดยอีเมลอีกครั้ง ถ้าปัญหายังคงอยู่ โปรดแจ้งผู้ดูแลระบบเพื่อตรวจสอบบันทึกข้อผิดพลาดของที่เก็บ",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "ถ้าคุณกำหนดคอนฟิกเว็บไคลเอ็นต์เพื่อให้แปลงเอกสาร AFP เป็นรูปแบบอื่น เช่น PDF ก่อนที่จะส่งเอกสารเป็นสิ่งที่แนบ ต้องแน่ใจว่าการแปลงถูกกำหนดคอนฟิกไว้อย่างถูกต้อง",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "ไม่สามารถแปลงเอกสารเป็น PDF",
		email_applet_CONVERT_DOC_FAILED_explanation: "เครื่องมือที่ถูกใช้เพื่อแปลงสภาพเอกสารเป็น PDF ไม่สนับสนุนชนิดไฟล์",
		email_applet_CONVERT_DOC_FAILED_userResponse: "ปิดเพจนี้และลองอีเมลเอกสารอีกครั้งโดยไม่มีการแปลงไปเป็น PDF",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "อีเมลไม่ถูกสร้าง",
		email_applet_MAPI_USER_ABORT_explanation: "เปิดแอ็พพลิเคชันอีเมลของคุณและตรวจสอบให้แน่ใจว่าทำงานอย่างถูกต้อง จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงอยู่ โปรดติดต่อผู้ดูแลระบบของคุณเพื่อตรวจสอบบันทึกเหตุการณ์ของระบบปฏิบัติการของคุณ",
		email_applet_MAPI_USER_ABORT_userResponse: "ถ้าคุณตั้งใจปิดแอ็พพลิเคชันอีเมล ดังนั้นไม่ต้องทำแอ็คชันใดๆ เพิ่มเติม เมื่อต้องการส่งอีเมล ให้ล็อกอินเข้าสู่แอ็พพลิเคชันอีเมลและลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "ไม่สามารถสร้างอีเมลได้",
		email_applet_MAPI_FAILURE_explanation: "อีเมลไคลเอ็นต์ของคุณอาจไม่ได้เปิด หรือคุณอาจไม่ได้ล็อกอิน",
		email_applet_MAPI_FAILURE_userResponse: "เปิดแอ็พพลิเคชันอีเมลของคุณและตรวจสอบให้แน่ใจว่าทำงานอย่างถูกต้อง จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงอยู่ โปรดติดต่อผู้ดูแลระบบของคุณเพื่อตรวจสอบบันทึกเหตุการณ์ของระบบปฏิบัติการของคุณ",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "ไม่สามารถสร้างอีเมลได้",
		email_applet_MAPI_LOGON_FAILURE_explanation: "คุณไม่ได้ล็อกอินเข้าสู่อีเมลไคลเอ็นต์ อีเมลไคลเอ็นต์ของคุณต้องถูกเปิดและคุณต้องล็อกอินเพื่อส่งข้อความจากเว็บไคลเอ็นต์",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "เปิดอีเมลไคลเอ็นต์และล็อกอิน จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "ไม่สามารถสร้างอีเมลได้ เนื่องจากไม่สามารถสร้างไฟล์ชั่วคราวบนเวิร์กสเตชันของคุณ",
		email_applet_MAPI_DISK_FULL_explanation: "ไดเร็กทอรีชั่วคราวบนเวิร์กสเตชันอาจเต็ม",
		email_applet_MAPI_DISK_FULL_userResponse: "ตรวจสอบให้แน่ใจว่าไดเร็กทอรีชั่วคราวมีพื้นที่ว่างเพียงพอ จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "ไม่สามารถสร้างอีเมลได้ เนื่องจากหน่วยความจำระบบไม่เพียงพอ",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "คุณอาจเปิดแอ็พพลิเคชันมากเกินไป",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "ให้ปิดแอ็พพลิเคชันใดๆ ที่ไม่ได้ใช้ และจากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "การเข้าถึง MAPI ถูกปฏิเสธ",
		email_applet_MAPI_ACCESS_DENIED_explanation: "การเข้าถึง Messaging Application Programming Interface (MAPI) อาจไม่ได้เปิดใช้งานหรือสนับสนุนแอ็พพลิเคชันอีเมลของคุณ MAPI เป็นโปรโตคอลการส่งข้อความที่ใช้เพื่อเปิดใช้งานการสื่อสารระหว่างเว็บไคลเอ็นต์และแอ็พพลิเคชันอีเมลของคุณ",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "ติดต่อผู้ดูแลระบบของคุณ",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "ตรวจสอบให้แน่ใจว่าแอ็พพลิเคชันอีเมลมีการตั้งค่าการเข้าถึง MAPI และกำหนดคอนฟิกไว้อย่างถูกต้อง ถ้าปัญหายังคงอยู่ โปรดติดต่อ IBM Software Support",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "ไม่สามารถสร้างสิ่งที่แนบหรือลิงก์ไปยังไอเท็มได้",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "คุณอาจเปิดเซสชันเว็บเบราว์เซอร์มากเกินไป",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "ปิดเซสชันเว็บเบราว์เซอร์ใดๆ ที่ไม้ได้ใช้ จากนั้น ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง ถ้าปัญหายังคงมีอยู่ โปรดติดต่อผู้ดูแลระบบของคุณ",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "ไม่สามารถส่งอีเมลได้",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "คุณอาจลองส่งสิ่งที่แนบมากเกินไป",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "เลือกไฟล์ให้น้อยลง จากนั้น ลองส่งเอกสารจากเว็บอีกครั้ง",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "ไม่สามารถส่งอีเมลได้",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "คุณอาจส่งอีเมลไปยังผู้รับมากเกินไป",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "ส่งอีเมลไปยังผู้รับให้น้อยลง",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "ไม่สามารถสร้างสิ่งที่ส่งมาด้วยกับข้อความ",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "ไฟล์ชั่วคราวที่ต้องใช้บางไฟล์อาจถูกลบออกก่อนที่สิ่งที่แนบจะถูกสร้าง ข้อผิดพลาดนี้สามารถเกิดขึ้นได้ ถ้าแคชถูกเคลียร์ก่อนที่อีเมลจะถูกส่ง",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "ไม่สามารถสร้างสิ่งที่ส่งมาด้วยกับข้อความ",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "ไฟล์ชั่วคราวที่ต้องใช้บางไฟล์อาจถูกลบออกก่อนที่สิ่งที่แนบจะถูกสร้าง ข้อผิดพลาดนี้สามารถเกิดขึ้นได้ ถ้าแคชถูกเคลียร์ก่อนที่อีเมลจะถูกส่ง",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "แอ็พพลิเคชันอีเมลไม่สามารถสร้างสิ่งที่แนบได้",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "ไม่สามารถส่งอีเมลไปยังผู้รับที่ระบุ",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "อาจไม่มีผู้รับในสมุดที่อยู่",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "ตรวจสอบชื่อของผู้รับ และลองส่งเอกสารอีกครั้ง",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "ไม่สามารถส่งอีเมลไปยังผู้รับที่ระบุ",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "อีเมลแอดเดรสอาจมีรูปแบบที่ไม่ถูกต้อง",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "ตรวจสอบว่าคุณป้อนอีเมลแอดเดรสที่ถูกต้อง และลองส่งเอกสารอีกครั้ง",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_NO_MESSAGES_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_NO_MESSAGES_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "ไม่สามารถส่งอีเมลได้",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "อีเมลอาจยาวเกินไป",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "ตัดข้อความของอีเมลให้สั้นลง และลองส่งเอกสารอีกครั้ง",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "ไม่สามารถสร้างอีเมลได้",
		email_applet_MAPI_INVALID_SESSION_explanation: "อีเมลไคลเอ็นต์อาจล้มเหลวเมื่อพยายามสร้างอีเมล",
		email_applet_MAPI_INVALID_SESSION_userResponse: "ให่รีสตาร์ทอีเมลไคลเอ็นต์ของคุณ และลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "อีเมลอาจสร้างขึ้นอย่างไม่ถูกต้อง",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "ไม่สามารถส่งอีเมลไปยังผู้รับที่ระบุ",
		email_applet_MAPI_INVALID_RECIPS_explanation: "อีเมลแอดเดรสอาจมีรูปแบบที่ไม่ถูกต้อง",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "ตรวจสอบให้แน่ใจว่าคุณป้อนอีเมลแอดเดรสที่ถูกต้อง และส่งเอกสารอีกครั้ง",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "อีเมลไคลเอ็นต์ไม่สามารถดำเนินการแอ็คชันที่ร้องขอ",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "แอ็พพลิเคชันอีเมลส่งคืนข้อผิดพลาดที่ไม่คาดคิด",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "ลองส่งเอกสารจากเว็บไคลเอ็นต์อีกครั้ง",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "จำนวนของค่าของคุณสมบัติใดคุณสมบัติหนึ่งหายไป",
		error_property_cardinality_explanation: "บางคุณสมบัติมีจำนวนของค่าที่น้อยที่สุดและมากที่สุด",
		error_property_cardinality_userResponse: "ใช้วิธีใช้แบบลอยเพื่อตรวจสอบว่าคุณสมบัติใดที่ต้องการจำนวนของค่าที่น้อยที่สุด จากนั้น ระบุจำนวนของค่าที่น้อยที่สุดและลองอีกครั้ง",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "จำเป็นต้องใส่ชื่อไฟล์",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "ระบุชื่อไฟล์และลองอีกครั้ง",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "ปลั๊กอิน ${0} มีข้อผิดพลาด",
		plugin_error_explanation: "เกิดข้อผิดพลาดเมื่อประเมินผล JavaScript สำหรับปลั๊กอิน ${0} ถ้าคุณใช้เว็บไคลเอ็นต์ต่อ คุณอาจพบข้อผิดพลาดเพิ่มขึ้น",
		plugin_error_userResponse: "ติดต่อผู้ดูแลระบบของคุณ",
		plugin_error_adminResponse: "มีปัญหากับปลั๊กอินที่ต้องได้รับการแก้ไขโดยผู้เตรียมปลั๊กอิน แนะนำให้คุณลบปลั๊กอินออกจากคอนฟิกูเรชันของเว็บไคลเอ็นต์จนกว่าปัญหาที่เกี่ยวกับปลั๊กอินจะถูกแก้ไข",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "ไม่สามารถเปิดเท็มเพลตรายการ",
		open_old_format_entry_template_error_explanation: "เท็มเพลตรายการใช้รูปแบบเก่าที่ไม่สนับสนุนในเว็บไคลเอ็นต์",
		open_old_format_entry_template_error_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณเพื่ออัพเดตเท็มเพลตรายการ",
		open_old_format_entry_template_error_adminResponse: "ใช้ Application Engine หรือ Workplace XT Entry Template Designer เพื่อบันทึกเวอร์ชันที่แอ็พพลิเคชันของเท็มเพลตรายการ",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "ไม่สามารถเปิดเท็มเพลตรายการ",
		open_custom_object_entry_template_error_explanation: "เว็บไคลเอ็นต์ไม่สนับสนุนชนิดของเท็มเพลตรายการต่อไปนี้: เท็มเพลตรายการอ็อบเจ็กต์ที่กำหนดเอง",
		open_custom_object_entry_template_error_userResponse: "เปิดเท็มเพลตรายการอื่น",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "ไม่สามารถเปิดอ็อบเจ็กต์ eforms ได้",
		open_forms_object_error_explanation: "เว็บไคลเอ็นต์ไม่สนับสนุนอ็อบเจ็กต์ eforms ชนิดต่อไปนี้: เท็มเพลต form, ข้อมูล form, นโยบายเอกสารและนโยบายเวิร์กโฟลว์",
		open_forms_object_error_userResponse: "เปิดเอกสารอื่น",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "คุณไม่สามารถใช้เท็มเพลตรายการ ${0}",
		entry_template_folder_restricted_error_explanation: "เท็มเพลตรายการเพิ่มไอเท็มลงในโฟลเดอร์ ${1} และคุณไม่มีสิทธิที่เหมาะสมในการเพิ่มไอเท็ม  ลงในโฟลเดอร์นั้น",
		entry_template_folder_restricted_error_userResponse: "เลือกเท็มเพลตรายการอื่นหรือขอให้ผู้ดูแลระบบให้สิทธิที่เหมาะสมแก่คุณ เพื่อเพิ่มไอเท็มลงใน ${1} โฟลเดอร์",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "ไม่สามารถเปิดเท็มเพลตรายการ",
		open_records_entry_template_error_explanation: "เว็บไคลเอ็นต์ไม่สนับสนุนชนิดของเท็มเพลตรายการต่อไปนี้ : เท็มเพลตรายการประกาศเป็นเร็กคอร์ด",
		open_records_entry_template_error_userResponse: "เปิดเท็มเพลตรายการอื่น",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "ไม่สามารถเปิดเวิร์กโฟลว์ได้",
		open_workflow_error_explanation: "เว็บไคลเอ็นต์ไม่สนับสนุนเวิร์กโฟลว์ที่เกิดขึ้น",
		open_workflow_error_userResponse: "เปิดเอกสารอื่น",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "ไม่สามารถเปิดเอกสาร",
		viewer_unable_to_view_error_explanation: "ไม่ได้กำหนดคอนฟิกวิวเวอร์สำหรับเอกสารชนิดนี้ หรือวิวเวอร์ที่กำหนดคอนฟิกไว้ไม่เข้ากันกับระบบของคุณ",
		viewer_unable_to_view_error_userResponse: "ขอให้ผู้ดูแลระบบของคุณกำหนดคอนฟิกวิวเวอร์สำหรับเอกสารชนิดนี้ และตรวจสอบให้แน่ใจว่าวิวเวอร์ที่กำหนดคอนฟิกไว้ใช้ได้กับระบบของผู้ใช้",
		viewer_unable_to_view_error_adminResponse: "ใช้เครื่องมือการจัดการเพื่อกำหนดคอนฟิกวิวเวอร์สำหรับเอกสารชนิดนี้",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "ไม่สามารถเปิดการค้นหาได้",
		search_cannot_open_error_explanation: "ไม่ได้กำหนดคอนฟิกคุณลักษณะการค้นหาสำหรับเดสก์ท็อปนี้",
		search_cannot_open_error_userResponse: "โปรดแจ้งผู้ดูแลระบบของคุณถ้าคุณมีการเข้าถึงเดสก์ท็อปที่มีคุณลักษณะการค้นหา หรือถ้าเดสก์ท็อปนี้ถูกอัพเดตเพื่อรวมคุณลักษณะการค้นหา",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "เอกสารไม่ถูกโหลด",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional viewer ไม่สามารถเปิดเอกสาร",
		viewer_document_load_failed_error_userResponse: "สำหรับข้อมูลเพิ่มเติม ดูที่ข้อความแสดงข้อผิดพลาดที่แสดงในวิวเวอร์",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "ไม่สามารถดูเอกสารได้",
		viewer_session_expired_explanation: "ไม่สามารถรับเนื้อหาเอกสาร",
		viewer_session_expired_userResponse: "ลองล็อกอินอีกครั้ง ถ้าปัญหายังคงเกิดขึ้นอีก แอ็พพลิเคชันเซิร์ฟเวอร์อาจไม่ทำงาน แจ้งผู้ดูแลระบบของคุณเพื่อตรวจสอบบันทึกข้อผิดพลาดของ IBM Content Navigator หรือรีสตาร์ทเซิร์ฟเวอร์",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "ไม่สามารถดูเอกสารได้",
		ajaxViewer_getPage_failed_explanation: "AJAX วิวเวอร์ได้รับการตอบสนองที่มีข้อผิดพลาดขณะดึงเนื้อหาของเพจ แอ็พพลิเคชันเซิร์ฟเวอร์อาจไม่ได้รันอยู่",
		ajaxViewer_getPage_failed_userResponse: "ปิดเว็บเบราว์เซอร์ของคุณและล็อกอินอีกครั้ง ถ้าปัญหายังคงอยู่ ให้แจ้งผู้ดูแลระบบของคุณเพื่อตรวจสอบล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์หรือเพื่อรีสตาร์ทเซิร์ฟเวอร์",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "ไม่พบ Java Runtime Environment (JRE) บนเวิร์กสเตชันของคุณ",
		viewer_java_plugin_not_found_explanation: "ไม่พบปลั๊กอิน หรือไม่ได้ติดตั้งเวอร์ชันที่ถูกต้องของ JRE",
		viewer_java_plugin_not_found_userResponse: "ตรวจสอบว่า JRE ถูกติดตั้งแล้ว ตัวอย่างเช่น ในพร้อมต์รับคำสั่ง ให้ป้อนคำสั่งต่อไปนี้: Java -version ถ้า JRE ไม่ถูกติดตั้งหรือติดตั้งที่ระดับเวอร์ชันที่ไม่ถูกต้อง ให้ติดตั้งเวอร์ชันที่เหมาะสมของ JRE รายการของเวอร์ชันที่สนับสนุนจะรวมอยู่ในเอกสาร <i>สิ่งที่จำเป็นต้องมีสำหรับฮาร์ดแวร์และซอฟต์แวร์สำหรับ IBM Content Navigator</i> บนไซต์ IBM Software Support",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "ไม่สามารถแสดงเอกสารในเว็บเบราว์เซอร์ของคุณ",
		viewer_pdf_plugin_not_found_explanation: "ไม่พบปลั๊กอินที่ใช้แสดงเอกสาร PDF ในเว็บเบราว์เซอร์",
		viewer_pdf_plugin_not_found_userResponse: "ไฟล์ PDF จะถูกดาวน์โหลดไปยังเวิร์กสเตชันของคุณแทนการแสดงในหน้าต่างวิวเวอร์",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "ไม่สามารถเพิ่มไอเท็มต่อไปนี้ลงในที่เก็บ: ${0}",
		add_document_single_item_error_explanation: "ข้อผิดพลาดนี้อาจเกิดขึ้นเนื่องจากเหตุผลอย่างใดอย่างหนึ่งต่อไปนี้:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่ถูกย้ายหรือลบออกแล้ว</li>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่ถูกเปลี่ยนชื่อ</li>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่เสียหาย</li>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่เปิดในแอ็พพลิเคชันอื่น</li>" + "<li>คุณกำลังพยายามเพิ่มโฟลเดอร์ลงในที่เก็บ</li>" + "<li>คุณไม่มีสิทธิที่เหมาะสมบนระบบปฏิบัติการในการเข้าถึงเอกสาร</li>" + "</ul>",
		add_document_single_item_error_userResponse: "ใช้แอ็คชันที่เหมาะสมเพื่อแก้ไขปัญหา:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>ถ้าเอกสารถูกย้ายหรือเปลี่ยนชื่อ ให้ค้นหาเอกสารบนระบบไฟล์ของคุณ และลองเพิ่มอีกครั้ง</li>" + "<li>ถ้าเอกสารเปิดในแอ็พพลิเคชันอื่น ให้ปิดและลองเพิ่มอีกครั้ง</li>" + "</ul>" + "<br>คุณไม่สามารถเพิ่มโฟลเดอร์ลงในที่เก็บ",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "ไม่สามารถเพิ่มไอเท็ม ${0} ต่อไปนี้ลงในที่เก็บ: ${1}",
		add_document_multiple_items_error_explanation: "ปัญหาเกี่ยวกับไอเท็มอย่างใดอย่างหนึ่งทำให้ไม่สามารถเพิ่มไอเท็มลงในที่เก็บ ข้อผิดพลาดนี้อาจเกิดขึ้นเนื่องจากเหตุผลอย่างใดอย่างหนึ่งต่อไปนี้:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่ถูกย้ายหรือลบออกแล้ว</li>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่ถูกเปลี่ยนชื่อ</li>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่เสียหาย</li>" + "<li>คุณกำลังพยายามเพิ่มเอกสารที่เปิดในแอ็พพลิเคชันอื่น</li>" + "<li>คุณกำลังพยายามเพิ่มโฟลเดอร์ลงในที่เก็บ</li>" + "<li>คุณไม่มีสิทธิที่เหมาะสมบนระบบปฏิบัติการในการเข้าถึงเอกสาร</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "ใช้แอ็คชันที่เหมาะสมเพื่อแก้ไขปัญหา:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>ถ้าเอกสารถูกย้ายหรือเปลี่ยนชื่อ ให้ค้นหาเอกสารบนระบบไฟล์ของคุณ และลองเพิ่มไอเท็มอีกครั้ง</li>" + "<li>ถ้าเอกสารเปิดในแอ็พพลิเคชันอื่น ให้ปิดและลองเพิ่มไอเท็มอีกครั้ง</li>" + "<li>ถ้าเอกสารถูกลบออกหรือเสียหาย ให้ยกเลิกการเลือกไอเท็ม และลองเพิ่มไอเท็มที่เหลืออีกครั้ง</li>" + "</ul>" + "<br>คุณไม่สามารถเพิ่มโฟลเดอร์ลงในที่เก็บ",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "คุณไม่สามารถลากหรือวางไอเท็มจากตำแหน่งนี้ได้",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "ไม่สามารถเปิดอ็อบเจ็กต์ eforms ได้",
		open_forms_work_object_error_explanation: "ไม่สนับสนุนเว็บไคลเอ็นต์ชนิดอ็อบเจ็กต์ eforms ต่อไปนี้: นโยบายเวิร์กโฟลว์",
		open_forms_work_object_error_userResponse: "เปิดเอกสารอื่น",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "ไม่สามารถเปิดเอกสาร",
		viewer_privilege_to_view_error_explanation: "คุณไม่มีสิทธิใช้งานที่เหมาะสมเพื่อดูเอกสาร",
		viewer_privilege_to_view_error_userResponse: "ขอให้เจ้าของเอกสารหรือผู้ดูแลระบบของคุณมอบสิทธิใช้งานที่เหมาะสมในการดูเอกสารแก่คุณ",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "ไม่สามารถเพิ่มไอเท็มลงในที่เก็บ",
		add_document_too_many_items_error_explanation: "คุณสามารถเพิ่มได้สูงสุด ${0} ไอเท็มต่อครั้ง คุณกำลังพยายามเพิ่ม ${1} ไอเท็ม",
		add_document_too_many_items_error_userResponse: "ลบบางไอเท็มออกจากรายการของคุณ และลองเพิ่มไอเท็มอีกครั้ง คุณสามารถติดต่อผู้ดูแลระบบให้เพิ่มจำนวนเอกสารสูงสุดที่คุณสามารถเพิ่มลงเดสก์ท็อปนี้ในแต่ละครั้ง",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "ไม่สามารถสร้างการเชื่อมต่อไปยังเว็บไคลเอ็นต์โดยใช้ URL ต่อไปนี้: ${0}",
		http_ltpa_expired_explanation: "คีย์ LTPA ที่เชื่อมโยงกับเซสชันการเรียกดูของคุณหมดอายุแล้ว",
		http_ltpa_expired_userResponse: "รีสตาร์ทเว็บเบราว์เซอร์ของคุณ และลองล็อกอินใหม่อีกครั้ง ถ้าปัญหายังคงอยู่ ให้แจ้งข้อผิดพลาดต่อไปนี้กับผู้ดูแลระบบของคุณ: ${1}",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "ไม่สามารเพิ่มเอกสารไปยังโฟลเดอร์ ${0}",
		dnd_no_privilege_error_explanation: "สิทธิ์บนโฟลเดอร์จะป้องกันมิให้เอกสารถูกเพิ่มในโฟลเดอร์",
		dnd_no_privilege_error_userResponse: "เพิ่มเอกสารไปยังโฟลเดอร์อื่น",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "ไอเท็มไม่สามารถปรับเปลี่ยนได้",
		modify_document_too_many_items_error_explanation: "คุณสามารถปรับเปลี่ยนได้ถึง ${0} ไอเท็มในครั้งเดียว คุณกำลังพยายามปรับเปลี่ยน ${1} ไอเท็ม",
		modify_document_too_many_items_error_userResponse: "เลือกไอเท็มให้น้อยลงและลองปรับเปลี่ยนไอเท็มอีกครั้ง คุณยังสามารถติดต่อผู้ดูแลระบบของคุณเพื่อให้เพิ่มจำนวนสูงสุดของไอเท็มที่คุณสามารถปรับเปลี่ยนในแต่ละครั้งจากเดสก์ท็อปนี้",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "คุณไม่สามารถใช้คลาส ${0}",
		add_document_multiple_unique_values_error_explanation: "คลาส ${0} มีคุณสมบัติมากกว่าหนึ่งรายการที่ต้องการค่าเฉพาะสำหรับแต่ละเอกสาร เมื่อเพิ่มเอกสารจำนวนมาก เอกสารทั้งหมดใช้ค่าเดียวกัน",
		add_document_multiple_unique_values_error_userResponse: "เลือกคลาสอื่นหรือเพิ่มเอกสารแยกต่างหาก",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "คุณไม่สามารถใช้เท็มเพลตรายการ ${0}",
		add_document_multiple_unique_values_entry_template_error_explanation: "เท็มเพลตรายการ ${0} ต้องการให้คุณเพิ่มเอกสารเข้ากับคลาส ${1} อย่างไรก็ตาม คลาส ${1} มีคุณสมบัติมากกว่าหนึ่งรายการที่ต้องการค่าเฉพาะสำหรับแต่ละเอกสาร เมื่อเพิ่มเอกสารจำนวนมาก เอกสารทั้งหมดใช้ค่าเดียวกัน",
		add_document_multiple_unique_values_entry_template_error_userResponse: "เลือกเท็มเพลตรายการอื่นหรือเพิ่มเอกสารแยกต่างหาก",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "คุณไม่สามารถใช้เท็มเพลตรายการ ${0}",
		entry_template_class_restricted_error_explanation: "เท็มเพลตรายการเพิ่มไอเท็มโดยใช้คลาส ${1} และคุณไม่มีสิทธิใช้งานที่เหมาะสมเพื่อเพิ่มไอเท็มโดยใช้คลาสนั้น",
		entry_template_class_restricted_error_userResponse: "เลือกเท็มเพลตรายการอื่น หรือขอให้ผู้ดูแลระบบกำหนดสิทธิใช้งานที่เหมาะสมให้กับคุณเพื่อเพิ่มไอเท็มโดยใช้คลาส ${1}",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "ไม่สามารถกำหนดไอเท็มงานให้กับผู้ใช้อื่นได้อีกครั้ง",
		process_reassign_error_explanation: "แอ็คชันนี้ถูกห้ามโดยเวิร์กโฟลว์",
		process_reassign_error_userResponse: "คุณสามารถเปิดไอเท็มงานและทำขั้นตอนปัจจุบันในไอเท็มงานให้สมบูรณ์  สำหรับข้อมูลเพิ่มเติมเกี่ยวกับปัญหานี้ โปรดแจ้งให้เจ้าของไอเท็มงานตรวจสอบว่าไอเท็มงานสามารถมอบหมายใหม่ได้หรือใหม่",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "ไม่สามารถโหลดแอ็คชันกำหนดเองต่อไปนี้: ${0}",
		customaction_loadurl_error_explanation: "แอ็คชันกำหนดเองไม่อยู่ในตำแหน่งที่เข้าถึงได้ URL ปัจจุบันของแอ็คชันกำหนดเองคือ ${1}",
		customaction_loadurl_error_userResponse: "ขอให้ผู้ดูแลระบบของคุณย้ายแอ็คชันกำหนดเองไปยังตำแหน่งที่สามารถเข้าถึงได้",
		customaction_loadurl_error_adminResponse: "ไฟล์ JSP ที่กำหนดแอ็คชันกำหนดเองไว้ต้องถูกจัดเตรียมไว้เป็นส่วนหนึ่งของเว็บแอ็พพลิเคชัน eClient หรือเว็บแอ็พพลิเคชัน IBM Content Navigator",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "ไม่พบคุณลักษณะต่อไปนี้: ${0}.",
		feature_invalid_explanation: "ปัญหานี้สามารถเกิดขึ้นได้ ถ้าคุณลักษณะไม่มีอยู่บนเดสก์ท็อปที่ระบุ หรือสะกดชื่อคุณลักษณะไม่ถูกต้อง",
		feature_invalid_userResponse: "เมื่อคุณคลิก ตกลง คุณจะถูกเปลี่ยนทิศทางไปยังคุณลักษณะดีฟอลต์สำหรับเดสก์ท็อปนี้ โปรดติดต่อผู้ดูแลระบบของคุณเพื่อรายงานปัญหานี้",
		feature_invalid_adminResponse: "หากคุณลักษณะนี้ควรอยู่บนเดสก์ท็อป ให้อัพเดตคอนฟิกูเรชันของเดสก์ท็อปในเครื่องมือคอนฟิกูเรชัน หากคุณลักษณะไม่ควรถูกรวมในเดสก์ท็อป หรือสะกดไม่ถูกต้อง ให้ทำงานกับนักพัฒนาแอ็พพลิเคชันที่สร้าง URL ไปยังคุณลักษณะนี้เพื่ออัพเดต URL",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "ไม่สามารถเปิดการค้นหา ${0}",
		search_unsupportedTeamspaceSearch_error_explanation: "คุณต้องอยู่ใน Teamspace เพื่อเปิดเอกสารนี้",
		search_unsupportedTeamspaceSearch_error_userResponse: "เลือกการค้นหาอื่น",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "ไม่สามารถอิมพอร์ตไฟล์ต่อไปนี้: ${0}",
		wrong_import_file_type_error_explanation: "ไฟล์ต้องเป็นไฟล์คุณสมบัติ",
		wrong_import_file_type_error_userResponse: "เลือกไฟล์คุณสมบัติที่คุณเอ็กซ์พอร์ตจากเครื่องมือการควบคุมดูแล",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "ไม่สามารถพบที่เก็บ ${0} บนเดสก์ท็อป ${1}",
		browse_repository_not_found_error_explanation: "ที่เก็บต้องแสดงอยู่บนเดสก์ท็อปและเปิดใช้งานสำหรับคุณลักษณะเรียกดูเมื่อถูกระบุไว้ในพารามิเตอร์ URL",
		browse_repository_not_found_error_userResponse: "ตรวจสอบ id ที่เก็บที่ระบุอยู่ใน URL ว่าถูกต้อง, ที่เก็บได้ถูกเพิ่มไปยังเดสก์ท็อป ${1}, และคุณลักษณะเรียกดูถูกเปิดใช้งานสำหรับที่เก็บ",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "ไม่ได้เปิดใช้งานที่เก็บ ${0} สำหรับคุณลักษณะเรียกดูในเดสก์ท็อป ${1}",
		browse_repository_not_enabled_error_explanation: "ต้องเปิดใช้งานที่เก็บสำหรับคุณลักษณะเรียกดูเมื่อถูกระบุไว้ในพารามิเตอร์ URL",
		browse_repository_not_enabled_error_userResponse: "เปิดใช้งานคุณลักษณะเรียกดูสำหรับที่เก็บ ${0} ในเดสก์ท็อป ${1}",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "ไม่สามารถทำการค้นหาให้เสร็จสิ้นได้เนื่องจากลิงก์ประกอบด้วยเกณฑ์ที่ไม่ถูกต้อง",
		invalid_xt_stored_search_criteria_error_explanation: "ค่าต่อไปนี้ไม่ถูกต้อง: ${0}",
		invalid_xt_stored_search_criteria_error_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณเพื่อจัดเตรียมลิงก์ที่อัพเดต",
		invalid_xt_stored_search_criteria_error_adminResponse: "แก้ไขคู่ของ ชื่อ-ค่า ตามความเหมาะสมใน URL หากคุณไม่ทราบค่าที่ถูกต้องสำหรับคุณสมบัติ, ให้เปิดการค้นหาที่เก็บไว้ในโปรแกรมออกแบบการค้นหา FileNet Workplace XT เพื่อกำหนดค่าที่ถูกต้อง",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "ไม่สามารถเปิดการค้นหาแบบข้ามที่เก็บ",
		unified_search_invalid_fixed_value_error_explanation: "การค้นหาระหว่างที่เก็บสอดแทรกเกณฑ์ที่ไม่ถูกต้อง ปัญหานี้สามารถเกิดขึ้นเมื่อเกณฑ์มีค่าคงที่ที่ทำงานร่วมกันไม่ได้กับคุณสมบัติอื่นในการแม็พ ตัวอย่างเช่น, ปัญหานี้สามารถเกิดขึ้นได้หากค่าคงที่เป็นสตริงแต่คุณสมบัติอื่นในการแม็พเป็นเลขจำนวนเต็ม",
		unified_search_invalid_fixed_value_error_userResponse: "หากคุณมีสิทธิ์ที่เหมาะสมเพื่อแก้ไขการค้นหา, ให้ลบเกณฑ์ที่ไม่ถูกต้องและบันทึกการค้นหาอีกครั้ง ถ้าคุณไม่มีสิทธิ์ที่เหมาะสมเพื่อแก้ไขการค้นหา ให้แจ้งเจ้าของการค้นหาหรือผู้ดูแลระบบของคุณเพื่อบันทึกการค้นหาอีกครั้ง",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "ไม่สามารถทำคำร้องขอของคุณให้เสร็จสิ้น",
		launch_action_invalid_json_error_explanation: "ข้อมูลที่ผ่านไปยังเว็บไคลเอ็นต์ไม่ถูกต้อง",
		launch_action_invalid_json_error_userResponse: "แจ้งผู้ดูแลระบบของคุณเกี่ยวกับแอ็พพลิเคชันที่คุณใช้เมื่อปัญหานี้เกิดขึ้น",
		launch_action_invalid_json_error_adminResponse: "ไคลเอ็นต์แอ็พพลิเคชันไม่ส่งอ็อบเจ็กต์ JSON ที่ถูกต้องไปยังเว็บไคลเอ็นต์ โปรดติดต่อฝ่ายสนับสนุนซอฟต์แวร์ของ IBM สำหรับความช่วยเหลือเพิ่มเติม",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "ไม่สามารถทำคำร้องขอของคุณให้เสร็จสิ้น",
		launch_action_not_found_error_explanation: "ไม่ได้กำหนดคอนฟิกแอ็คชัน ${0} สำหรับเมนูใดๆ บนเดสก์ท็อป ${1}",
		launch_action_not_found_error_userResponse: "โปรดแจ้งผู้ดูแลระบบของคุณเพื่อกำหนดคอนฟิกเดสก์ท็อป ${1} เพื่อใช้เมนูที่มีแอ็คชัน ${0} หรือเพื่อกำหนดคุณให้กับเดสก์ท็อปที่มีแอ็คชัน ${0}",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "ไม่สามารถทำคำร้องขอของคุณให้เสร็จสิ้น",
		launch_action_repository_not_found_error_explanation: "ที่เก็บ ${0} ไม่เชื่อมโยงกับเดสก์ท็อป ${1}",
		launch_action_repository_not_found_error_userResponse: "โปรดแจ้งผู้ดูแลระบบของคุณเพื่อเชื่อมโยงที่เก็บ ${0} กับเดสก์ท็อป ${1} หรือเพื่อกำหนดคุณให้กับเดสก์ท็อปที่มีที่เก็บ ${0}",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "ไม่สามารถเปิด Teamspace",
		teamspace_cannot_open_error_explanation: "ไม่ได้กำหนดคอนฟิกคุณลักษณะ Teamspace สำหรับเดสก์ท็อปนี้",
		teamspace_cannot_open_error_userResponse: "โปรดแจ้งผู้ดูแลระบบของคุณถ้าคุณมีการเข้าถึงเดสก์ท็อปที่มีคุณลักษณะ Teamspace หรือถ้าเดสก์ท็อปนี้สามารถมีการอัพเดตเพื่อรวมคุณลักษณะ Teamspace",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "มีข้อผิดพลาดเกิดขึ้นขณะเช็กอินเนื้อหาที่แก้ไข",
		viewer_redaction_checkin_failed_explanation: "วิวเวอร์ได้รับการตอบกลับด้วยข้อผิดพลาดขณะที่เช็กอินเนื้อหาที่เขียนไว้",
		viewer_redaction_checkin_failed_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณเพื่อตรวจสอบล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "คุณไม่สามารถเพิ่มเอกสารลงในที่เก็บนี้",
		add_document_odserver_odwek_version_od_error_explanation: "เวอร์ชันปัจจุบันของเซิร์ฟเวอร์ IBM Content Manager OnDemand หรือ ODWEK ไม่ใช่ระดับต่ำสุดที่จำเป็นเพื่อสนับสนุนการเพิ่มเอกสารลงในที่เก็บ Content Manager OnDemand",
		add_document_odserver_odwek_version_od_error_userResponse: "ขอให้ผู้ดูแลระบบของคุณตรวจสอบเวอร์ชันของ Content Manager OnDemand Server และ ODWEK ที่จำเป็นเพื่อสนับสนุนการเพิ่มเอกสารลงในที่เก็บ Content Manager OnDemand",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "ไม่สามารถเพิ่มไอเท็มลงในที่เก็บ",
		add_document_too_many_items_od_error_explanation: "สำหรับที่เก็บ IBM Content Manager OnDemand คุณสามารถเพิ่มได้ครั้งละหนึ่งไอเท็มเท่านั้น",
		add_document_too_many_items_od_error_userResponse: "ลบบางไอเท็มออกจากรายการของคุณ และลองเพิ่มไอเท็มอีกครั้งโดยเพิ่มครั้งละหนึ่งไอเท็ม",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "ไม่สามารถเพิ่มไอเท็มในที่เก็บ",
		add_document_filesize_empty_od_error_explanation: "คุณไม่สามารถเพิ่มไฟล์ที่ว่างลงในที่เก็บ IBM Content Manager OnDemand",
		add_document_filesize_empty_od_error_userResponse: "เพิ่มเนื้อหาลงในไฟล์ และลองเพิ่มไฟล์อีกครั้ง หรือเพิ่มไอเท็มที่แตกต่างอื่น",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "ไม่สามารถเปิดการค้นหาแบบข้ามที่เก็บ",
		unified_search_repository_not_found_error_explanation: "การค้นหาแบบข้ามที่เก็บมีที่เก็บที่มีถูกต้องอย่างน้อยหนึ่งที่เก็บ ปัญหานี้สามารถเกิดขึ้นได้เมื่อมีอย่างน้อยหนึ่งที่เก็บที่อยู่ในการค้นหาถูกลบออกไป หรือคุณไม่มีสิทธิ์ในการเข้าถึงที่เก็บนั้น",
		unified_search_repository_not_found_error_userResponse: "ถ้าคุณมีสิทธิ์ที่เหมาะสมเพื่อแก้ไขการค้นหา ให้ลองค้นหาอีกครั้ง เมื่อคุณบันทึกการค้นหา เว็บไคลเอ็นต์จะลบเกณฑ์ที่ไม่ถูกต้องออกจากการค้นหา ถ้าคุณไม่มีสิทธิ์ที่เหมาะสมเพื่อแก้ไขการค้นหา ให้แจ้งเจ้าของการค้นหาหรือผู้ดูแลระบบของคุณเพื่อบันทึกการค้นหาอีกครั้ง",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "ไม่สามารถสร้างเอกสารใหม่ได้",
		edit_document_using_office_online_error: "ไม่สามารถเปิดเอกสาร",
		edit_document_using_office_online_error_explanation: "ไม่ได้กำหนดคอนฟิก Microsoft Office Online Server URL",
		edit_document_using_office_online_error_userResponse: "ก่อนที่คุณจะสามารถใช้  Office Online ได้ ผู้ดูแลระบบของคุณต้องเปิดใช้งาน Office Online Server บนที่เก็บและระบุ Microsoft Office Online Server URL",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "ไม่สามารถเปิดเอกสารได้ใน Microsoft Office Online",
		edit_document_using_office_online_error_userResponse1: "แจ้งผู้ดูแลระบบของคุณเพื่ออัพเดต MS Office Online Server Integration<br><br> หากผู้ใช้ต้องการเข้าถึงเอกสารนี้จาก Microsoft Office Online ให้ไปที่เพจ แก้ไขการรวม สำหรับที่เก็บ และอัพเดต MS Office Online Server Integration เพื่อสอดแทรกคลาสในรายการของคลาสที่ต้องการปรับเปลี่ยนสำหรับส่วนสนับสนุน Office Online ",		
		browser_not_support_this_viewer: "วิวเวอร์ที่กำหนดคอนฟิกไว้ไม่เข้ากันกับเบราว์เซอร์ของคุณ",
		browser_not_support_this_viewer_explanation: "${0} ไม่สนับสนุนโดยเบราว์เซอร์",
		browser_not_support_this_viewer_userResponse: "ใช้วิวเวอร์อื่นเพื่อเปิดเอกสาร รายการเบราว์เซอร์ที่สนับสนุนถูกสอดแทรกในเอกสาร <i>สิ่งที่จำเป็นต้องมีด้านฮาร์ดแวร์และซอฟต์แวร์สำหรับ IBM Content Navigator</i> บนไซต์ IBM Software Support",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "ข้อมูลเวิร์กโฟลว์",
		process_information_info_text: "ไอเท็มที่เลือกขณะนี้กำลังรันอยู่บนเวิร์กโฟลว์ต่อไปนี้",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "เท่ากับ",
		operator_NOTEQUAL: "ไม่เท่ากับ",
		operator_LIKE: "เหมือน",
		operator_STARTSWITH: "เริ่มต้นด้วย",
		operator_ENDSWITH: "ลงท้ายด้วย",
		operator_NOTLIKE: "ไม่เหมือน",
		operator_NULL: "ว่างเปล่า",
		operator_NOTNULL: "ไม่ว่างเปล่า",
		operator_LESS: "น้อยกว่า",
		operator_LESSOREQUAL: "น้อยกว่าหรือเท่ากับ",
		operator_GREATER: "มากกว่า",
		operator_GREATEROREQUAL: "มากกว่าหรือเท่ากับ",
		operator_BETWEEN: "ระหว่าง",
		operator_NOTBETWEEN: "ไม่อยู่ระหว่าง",
		operator_IN: "รวมไว้ทั้งหมด",
		operator_INANY: "รวมบางค่า",
		operator_NOTIN: "แยกออกทั้งหมด",
		operator_CONTAINS: "ประกอบด้วย",

		/* SearchForm widget */
		search_button_tooltip: "ค้นหาเอกสารที่ตรงกับเงื่อนไขของคุณ",
		reset_button_tooltip: "รีเซ็ตการค้นหาเป็นค่าดีฟอลต์ที่ตั้งไว้โดยผู้ดูแลระบบของคุณ",
		clear_button_tooltip: "ลบค่าทั้งหมดที่คุณป้อนสำหรับการค้นหา",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "เลือกการค้นหา",
		append_to_search: "ผนวกเข้ากับการค้นหา",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "สร้างการค้นหา",
		new_unified_search: "สร้างการค้นหาแบบข้ามที่เก็บ",
		searh_name_contains: "ชื่อที่ใช้ค้นหาประกอบด้วย",
		keep_search_criteria_expanded: "ปล่อยให้เงื่อนไขการค้นหาเปิดไว้",
		showing_results: "กำลังแสดงผลลัพธ์สำหรับ:",
		open_in_new_window: "เปิดในหน้าต่างใหม่",
		open_in_new_tab: "เปิดในแท็บใหม่",
		close_tab: "ปิดแท็บ",
		add_repository: "เพิ่มที่เก็บ",
		edit_repository: "แก้ไขที่เก็บ",
		remove_repository: "ลบ",
		search_scope: "ขอบเขตการค้นหา",
		search_class_template: "คลาส",
		object_type_version: "ชนิดของอ็อบเจ็กต์และเวอร์ชัน",
		not_applicable: "ไม่สามารถใช้ได้",
		unified_search_including_subfolders: " (รวมถึงโฟลเดอร์ย่อย)",
		unified_search_dialog_intro_text: "เลือกที่เก็บ และการค้นหา หรือคลาสที่คุณต้องการรวมในการค้นหา",
		unified_search_class_or_template: "คลาสหรือเท็มเพลต",

		select_object_fieldset_legend: "คุณต้องการค้นหาไอเท็มที่จะแนบอย่างไร:",
		select_object_create_new_search: "การค้นหาใหม่",
		select_object_search_template: "การค้นหาที่มีอยู่",

		search_criteria: "เงื่อนไขการค้นหา:",
		search_criteria_no_colon: "เงื่อนไขการค้นหา",
		search_in_multiple: "ค้นหาใน (${0}):",
		search_location_including_subfolders: "${0} รวมถึงโฟลเดอร์ย่อย",
		search_class: "คลาส:",
		search_class_multiple: "คลาส (${0}):",
		search_class_including_subclasses: "${0} รวมถึงคลาสย่อย",
		search_class_all_pseudo: "All",
		search_results: "ผลของการค้นหา",
		select_operator: "เลือกโอเปอเรเตอร์",
		ending_value: "ค่าสุดท้ายสำหรับคุณสมบัติ ${0} คือ:",
		search_options: "อ็อพชันการค้นหา:",
		search_version: "เวอร์ชัน:",
		search_released_version: "เวอร์ชันที่ถูกรีลีส",
		search_current_version: "เวอร์ชันปัจจุบัน",
		search_all_versions: "ทุกเวอร์ชัน",
		search_file_type_filter: "ตัวกรองชนิดไฟล์:",
		search_one_file_type: "1 ชนิดไฟล์",
		search_many_file_types: "${0} ชนิดไฟล์",
		search_action_filter: "ตัวกรองแอ็คชัน:",
		search_action_filter_hover_help: "จำกัดผลลัพธ์ให้แคบลงเพื่อรวมเฉพาะไฟล์ที่ผู้ใช้ใช้แอ็คชันเฉพาะ<br/>ตัวอย่างเช่น คุณสามารถค้นหาเฉพาะเอกสารที่คุณเพิ่มในวันที่ 20 กันยายน 2012",
		search_action_filter_enabled: "เปิดใช้งานตัวกรองแอ็คชัน",
		search_enable: "เปิดใช้งาน",
		search_disable: "ปิดใช้งาน",
		search_by: "โดย",
		search_added: "เพิ่ม",
		search_modified: "ปรับเปลื่ยน",
		search_checked_out: "เช็กเอาต์",
		search_date_operator_on: "เปิด",
		search_date_operator_not_on: "ไม่ใช่เมื่อ",
		search_date_operator_before: "ก่อนหน้า",
		search_date_operator_after: "หลังจาก",
		search_version_hover_help_p8: "เวอร์ชันที่รีลีสพร้อมใช้งานสำหรับผู้ใช้ทั้งหมด เอกสารที่เป็นเวอร์ชันปัจจุบันหมายความว่ามีผู้ใช้มากกว่าหนึ่งคนที่กำลังแก้ไขเอกสารนั้น",
		search_version_hover_help_cm: "เวอร์ชันปัจจุบันเป็นเวอร์ชันล่าสุดของไอเท็ม",
		search_using: "ค้นหาไอเท็มที่ตรงกับ:",
		search_property_and_text_criteria: "ทั้งค่าคุณสมบัติและเกณฑ์ข้อความ",
		search_property_or_text_criteria: "ค่าคุณสมบัติหรือเกณฑ์ข้อความ",
		search_property_and_text: "ทั้งคุณสมบัติและเกณฑ์ข้อความ",
		search_property_or_text: "คุณสมบัติหรือเกณฑ์ข้อความ",
		search_property_options: "อ็อพชันคุณสมบัติ:",
		search_property_option_match_all: "คุณสมบัติทั้งหมด",
		search_property_option_match_any: "คุณสมบัติใดๆ",
		search_property_option_match_all_summary: "ตรงกันทั้งหมด",
		search_property_option_match_any_summary: "ตรงกับคุณสมบัติใดๆ",
		search_total_count_type_total: "ทั้งหมด",
		search_total_count_type_atleast: "อย่างน้อย",
		search_content_size_filter: "ตัวกรองขนาดเนื้อหา:",
		search_content_size_filter_any: "ขนาดเนื้อหาใดๆ",

		/* Search work options */
		search_work_filter: "ตัวกรองไอเท็มงาน:",
		search_work_filter_hover_help: "จำกัดผลลัพธ์เพื่อสอดแทรกเฉพาะไอเท็มที่อยู่ในเวิร์กโฟลว์ ตัวอย่างเช่น, คุณสามารถจำกัดผลลัพธ์เพื่อสอดแทรกเฉพาะไอเท็มงานที่แอ็คทีฟ<br /><br />อ็อพชันนี้ไม่ถูกนำมาใช้หากคุณต้องการดูเวอร์ชันทั้งหมดของไอเท็มที่ถูกส่งคืนโดยการค้นหา",
		search_work_filter_enabled: "เปิดใช้งานตัวกรองไอเท็มงานแล้ว",
		search_work_filter_status: "สถานะ:",
		search_work_filter_step: "ขั้นตอน:",
		search_work_filter_owner: "เจ้าของ",
		search_work_filter_status_all: "ไอเท็มทั้งหมด",
		search_work_filter_status_active: "ไอเท็มที่แอ็คทีฟ",
		search_work_filter_status_suspended: "ไอเท็มที่ถูกระงับ",
		search_work_filter_process_all: "เวิร์กโฟลว์ทั้งหมด",
		search_work_filter_step_all: "ขั้นตอนทั้งหมด",
		search_work_filter_owner_all: "ผู้ใช้ทั้งหมด",
		search_work_filter_step_error: "ชื่อขั้นตอนไม่มีอยู่",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "ไม่สามารถทำการค้นหาโดยไม่มีข้อมูลเพิ่มเติม ป้อนค่าสำหรับหนึ่งเงื่อนไขเป็นอย่างน้อย",
		search_insufficient_input_box: "ไม่สามารถทำการค้นหาโดยไม่มีข้อมูลเพิ่มเติม ป้อนเงื่อนไขการค้นหาหรือเลือกเท็มเพลตข้อมูลเมตา",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "ไม่สามารถตังค่าการค้นหาเพื่อให้รันเมื่อถูกเปิดโดยไม่มีข้อมูลเพิ่มเติม ป้อนค่าสำหรับหนึ่งเงื่อนไขเป็นอย่างน้อย",
		search_member_required: "เมื่อต้องการแบ่งใช้การค้นหานี้กับบุคคลและกลุ่มจำเพาะ ให้เลือกผู้ใช้หรือกลุ่มอย่างน้อยหนึ่งรายที่จะแบ่งใช้ด้วย",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "คุณแน่ใจว่าต้องการปิดโดยไม่บันทึกการเปลี่ยนแปลงของคุณหรือไม่?",
		search_prompt_close_all_without_save: "คุณแน่ใจว่าต้องการปิดแท็บทั้งหมดโดยไม่บันทึกการเปลี่ยนแปลงหรือไม่?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "หนึ่งในชนิดของเกณฑ์การค้นหาต่อไปนี้ใช้ไม่ได้สำหรับที่เก็บนี้: ${0} เมื่อต้องการรันการค้นหาในเว็บไคลเอ็นต์ เกณฑ์ที่ไม่ถูกต้องต้องถูกลบออก หากคุณบันทึกการค้นหา เกณฑ์ที่ไม่ถูกต้องจะถูกลบออก หากคุณไม่ต้องการเปลี่ยนแปลงการค้นหา ให้ปิดการค้นหา",
		search_invalid_repository: "ที่เก็บอย่างน้อยหนึ่งรายการ",
		search_invalid_class: "คลาสอย่างน้อยหนึ่งคลาส",
		search_invalid_folder: "โฟลเดอร์อย่างน้อยหนึ่งโฟลเดอร์",
		search_invalid_file_type: "ชนิดของไฟล์อย่างน้อยหนึ่งชนิด",
		search_invalid_property: "คุณสมบัติอย่างน้อยหนึ่งรายการ",
		search_invalid_text_search: "เกณฑ์การค้นหาข้อความ",
		search_invalid_work: "เกณฑ์ตัวกรองไอเท็มงาน",

		search_operator_pulldown_missing: "จำเป็นต้องมีโอเปอเรเตอร์ เลือกโอเปอเรเตอร์จากเมนูแบบดร็อปดาวน์ ถ้าคุณไม่พบโอเปอเรเตอร์ใดๆ ให้ขอผู้ดูแลระบบของคุณให้ตรวจสอบแท็บ <b>ค้นหา</b> ในเครื่องมือการควบคุมดูแลเพื่อดูว่าโอเปอเรเตอร์ทั้งหมดถูกตั้งค่าเป็นซ่อนไว้หรือไม่ ถ้านี่เป็นการค้นหาข้ามที่เก็บข้อมูล เมนูแบบดร็อปดาวน์อาจไม่มีโอเปอเรเตอร์ใดๆ ถ้าไม่มีการกำหนดคอนฟิกโอเปอเรเตอร์ร่วมระหว่างที่เก็บข้อมูลของคุณสมบัติที่แม็พ",

		/*SearchBuilder */
		open_search_builder: "สร้างการค้นหา",
		document_type: "คลาส",
		show_all_properties: "แสดงคุณสมบัติทั้งหมด",
		text_search_label: "หาไอเท็มที่มีคำต่อไปนี้:",
		text_search_place_holder: "ใช้การรวมกันของคำและโอเปอเรเตอร์: * ? หรือ \"exact match phrases\"",
		text_search_place_holder_box: "ใช้ชุดของคำและตัวดำเนินการ: AND, OR, NOT และ \"exact match phrases\"",
		text_search_place_holder_cascade_proximity: "ใช้การรวมคำและโอเปอเรเตอร์: * หรือ ?",
		text_search_place_holder_common: "ใช้ชุดของคำและ \"exact match phrases\"",
		text_search_hover_help_p8: "ใช้เครื่องหมายดอกจัน (*) หรือเครื่องหมายคำถาม (?) เป็นอักขระไวด์การ์ด ใช้เครื่องหมายฟันหนูคู่ (\"\") สำหรับคำที่ตรงกัน",
		text_search_hover_help_p8_only_crs: "ใช้เครื่องหมายดอกจัน (*) หรือเครื่องหมายคำถาม (?) เป็นอักขระไวด์การ์ด ใช้เครื่องหมายฟันหนูคู่ (\"\") สำหรับคำที่ตรงกัน เมื่อคุณระบุคำจำนวนมา การค้นหาระหว่างที่เก็บจะส่งคืนไอเท็มที่มีคำใดๆ เหล่านั้น",
		text_search_hover_help_cm: "ใช้เครื่องหมายดอกจัน (*) หรือเครื่องหมายคำถาม (?) เป็นอักขระไวด์การ์ด ใช้เครื่องหมายฟันหนูคู่ (\"\") สำหรับคำที่ตรงกัน ใช้เครื่องหมายลบ (-) เพื่อนำหน้าคำที่ต้องการแยกออก และเครื่องหมายบวก (+) เพื่อนำหน้าคำที่ต้องการรวม",
		text_search_hover_help_box: "ใช้ AND ระหว่างคำเพื่อจับคู่คำทั้งหมด ใช้ OR ระหว่างคำเพื่อจับคู่คำใดๆ ใช้เครื่องหมายฟันหนูคู่ (\"\") สำหรับคำที่ตรงกัน ใส่ NOT นำหน้าคำเพื่อแยกคำนั้น",
		text_search_hover_help_common: "ใช้เครื่องหมายฟันหนูคู่ (\"\") สำหรับคำที่ตรงกัน เมื่อคุณระบุคำจำนวนมาก การค้นหาระหว่างที่เก้ฐจะส่งคืนไอเท็มที่มีคำเหล่านี้ทั้งหมด",
		text_search_options: "อ็อพชันข้อความ:",
		text_search_options_hover_help: "ถ้าคุณใช้โอเปอเรเตอร์ใดๆ ที่ไม่ใช่อักขระไวด์การ์ด ให้เลือกโอเปอเรเตอร์ขั้นสูง",
		text_search_option_any: "คำใดๆ",
		text_search_option_all: "คำทั้งหมด",
		text_search_option_proximity: "ภายในคำที่ใกล้เคียง:",
		text_search_option_none: "โอเปอเรเตอร์ระดับสูง",
		text_search_option_authoring: "การค้นหาข้อความคือ:",
		text_search_option_authoring_hover_help: "เลือกอ็อพชันที่กำหนดวิธีที่คุณต้องการทำให้เกณฑ์การค้นหาข้อความพร้อมใช้งานสำหรับผู้ใช้ หากคุณไม่ต้องการรวมเกณฑ์การค้นหาข้อความใดๆ ในการค้นหา ให้ซ่อนอ็อพชัน ไม่เช่นนั้น คุณสามารถอนุญาตให้เกณฑ์การค้นหาข้อความแก้ไขหรือต้องการโดยผู้ใช้ หรือทำให้ผู้ใช้สามารถอ่านได้อย่างเดียว",
		text_search_option_hide: "ซ่อนเกณฑ์",
		text_search_option_hide_hover_help: "เลือกอ็อพชันนี้ถ้าคุณต้องการรวมเกณฑ์การค้นหาข้อความใดๆในการค้นหา หรืออนุญาตให้ผู้ใช้อื่นระบุเกณฑ์การค้นหาข้อความ",
		text_search_option_in: "ในแท็ก HTML/XML ${0}",
		text_search_option_paragraph: "ในย่อหน้าเดียวกัน",
		text_search_option_sentence: "ในประโยคเดียวกัน",
		text_search_option_vql: "เคียวรี VQL",
		text_search_option_none_hover_help: "ใช้ - เพื่อนำหน้าคำที่ต้องการแยกออก",
		text_search_option_cascade_proximity_hover_help: "จำกัดผลลัพธ์การค้นหาเฉพาะคำที่ปรากฏในช่วงของคำที่ไม่ถูกรวมในวลีที่ตรงกัน",

		box_search_metadata: "ข้อมูลเมตา:",
		box_search_select_template: "เลือกเท็มเพลต",
		box_search_no_templates: "ไม่มีเท็มเพลตที่พร้อมใช้งาน",
		box_text_search_options_search_within: "ขอบเขตการค้นหา:",
		box_text_search_options_search_within_everything: "ทุกอย่าง",
		box_text_search_options_search_within_file_content: "เนื้อหาเอกสาร",
		box_text_search_options_search_within_tags: "แท็ก",
		box_text_search_options_limit_to: "ค้นหาเท่านั้น:",

		add_property: "เพิ่มคุณสมบัติ",
		edit_template: "แก้ไขการค้นหา",
		save_search: "บันทึกการค้นหา",
		search_template_name: "ชื่อ:",
		search_template_desc: "รายละเอียด",
		auto_run: "รันการค้นหาเมื่อถูกเปิด",
		show_in_tree: "แสดงการค้นหาในโครงสร้างโฟลเดอร์",
		show_in_tree_hover_help: "ถ้าการค้นหามีการบันทึกไว้ในโฟลเดอร์ การค้นหาแสดงขึ้นเฉพาะในรายการเนื้อหาโดยดีฟอลต์ ถ้าคุณเลือกอ็อพชันนี้ การค้นหายังแสดงขึ้นในแผนผังโฟลเดอร์ในมุมมอง เรียกดู อีกด้วย  อย่างไรก็ตาม การค้นหาแสดงขึ้นในแผนผังโฟลเดอร์เฉพาะถ้าคุณบันทึกการค้นหาไว้ในโฟลเดอร์",
		share_search_with: "แบ่งใช้การค้นหากับ:",
		remove_member: "ลบ ${0}",
		ok_button_label: "ตกลง",
		save_template: "บันทึก",
		save_template_title: "ถ้าคุณต้องการค้นหาไอเท็มเฉพาะบ่อยๆ ให้บันทึกเกณฑ์การค้นหาของคุณ",
		remove_criterion: "ลบ",
		apply_button_label: "ปรับใช้",
		empty_search_results_pane: "รันการค้นหาเพื่อดูผลลัพธ์",

		/*Search_in control   */
		folder_tree_repository_root_name: "ทั้งที่เก็บ",

		repository_already_selected: "ไม่สามารถเพิ่มที่เก็บ ${0} ไปยังการค้นหาแบบข้ามที่เก็บเนื่องจากรวมอยู่แล้วในการค้นหานั้น <br/> ที่เก็บสามารถถูกรวมในการค้นหาแบบข้ามที่เก็บได้หนึ่งครั้งเท่านั้น <br/>เลือกที่เก็บอื่นเพื่อรวมในการค้นหาแบบข้ามที่เก็บ",

		repository_limit_reached: "ไม่สามารเพิ่มที่เก็บ ${0} ไปยังการค้นหาแบบข้ามที่เก็บ คุณสามารถเพิ่มได้สูงสุด ${1} ที่เก็บเข้ากับการค้นหา",

		nomore_criteria_toappend: "คุณสมบัติที่แม็พทั้งหมดถูกรวมอยู่แล้วในเกณฑ์การค้นหา ไม่มีคุณสมบัติถูกเพิ่มในเกณฑ์การค้นหา",
		nomore_criteria_toappend_regular: "คุณสมบัติทั้งหมดถูกรวมไว้แล้วในเกณฑ์การค้นหา ไม่มีคุณสมบัติถูกเพิ่มในเกณฑ์การค้นหา",

		/* OD Save Search dialog */
		reload_label: "รีโหลด",
		od_save_search_help_text: "พิมพ์ชื่อสำหรับค้นหาหรือเลือกการค้นหาที่มีอยู่เพื่อแทนที่",
		public_access_label: "อนุญาตให้ผู้อื่นใช้การค้นหานี้",
		od_delete_search_help_text: "เลือกการค้นหาที่ต้องการลบออกหนึ่งรายการหรือมากกว่า",
		delete_save_searches: "ลบการค้นหาที่บันทึกไว้",

		/* Unified Search */
		unified_search_enable_text_search: "รวมเกณฑ์การค้นหาข้อความ",
		unified_search_text_search_enabled: "รวมการค้นหาข้อความ",
		unified_search_mapping: "การแม็พ",
		unified_search_new_mapping: "การแม็พใหม่",
		unified_search_mapping_name: "ชื่อการแม็พ",
		unified_search_mapping_dialog_instructions: "เลือกคุณสมบัติที่คุณต้องการแม็พ คุณสมบัติบางส่วนสามารถแม็พกับคุณสมบัติที่มีชนิดข้อมูลแบบอื่นได้ ตัวอย่างเช่น, คุณสามารถแม็พคุณสมบัติสตริงกับคุณสมบัติเลขจำนวนเต็ม เมื่อคุณแม็พคุณสมบัติกับคุณสมบัติอื่น คุณสมบัติจะถูกถือว่าเป็นคุณสมบัติเดี่ยวในการค้นหาแบบข้ามที่เก็บ",
		unified_search_filter_available_properties: "กรองคุณสมบัติที่พร้อมใช้งาน",
		unified_search_available_properties: "คุณสมบัติที่มี",
		unified_search_mapped_properties: "คุณสมบัติที่ถูกแม็พ",
		unified_search_single_values: "ค่าเดี่ยว",
		unified_search_multiple_values: "หลายค่า",
		unified_search_add_mapping: "เพิ่มการแม็พ",
		unified_search_warn_remove_repository: "ที่เก็บที่เลือกถูกใช้ในเกณฑ์การค้นหา\nหากคุณลบที่เก็บออก การแม็พและเกณฑ์การค้นหาใดๆ ที่มีที่เก็บจะถูกลบออก\n\nคุณต้องการลบที่เก็บหรือไม่?",
		unified_search_warn_update_repository_mappings: "การเปลี่ยนรายการเลือกคุณสมบัติสำหรับที่เก็บนี้ส่งผลกระทบต่อเกณฑ์การค้นหา\n\nเกณฑ์การค้นหามีการแม็พหนึ่งรายการขึ้นไป ซึ่งมีคุณสมบัติหนึ่งรายการขึ้นไปที่คุณกำลังจะลบ การแม็พใดๆ ที่มีคุณสมบัติซึ่งคุณกำลังจะลบต้องถูกลบออก เกณฑ์การค้นหาใดๆ ที่มีการแม็พเหล่านี้ต้องถูกลบออกเพื่อรันการค้นหา\n\nคุณต้องการอัพเดตอ็อพชันที่เก็บ และลบการแม็พและเกณฑ์การค้นหาหรือไม่?",
		unified_search_warn_update_repository_mappings_reset: "รวมถึงเกณฑ์การค้นหาข้อความสำหรับที่เก็บนี้ส่งผลกระทบต่อเกณฑ์การค้าหาที่เก็บแบบข้าม.\n\nเกณฑ์การค้นหาคุณสมบัติใดๆ ที่รวมถึงการแม็พกับคุณสมบัติต้องถึกเคลียร์ตามลำดับเพื่อรันการค้นหา\n\nคุณต้องการอัพเดทอ็อพชันที่เก็บและเคลียร์เกณฑ์การค้นหาหรือไม่?",
		unified_search_warn_update_repository_text_criteria: "การลบเกณฑ์การค้นหาข้อความสำหรับที่เก็บนี้ส่งผลกระทบต่อเกณฑ์การค้นหาข้ามที่เก็บ\n\nเกณฑ์การค้นหาข้อความต้องถูกลบออกจากเกณฑ์การค้นหาข้ามที่เก็บ เพื่อรันการค้นหา\n\nคุณต้องการอัพเดตอ็อพชันที่เก็บ และลบเกณฑ์การค้นหาข้อความหรือไม่?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "การลบเกณฑ์การค้นหาข้อความ และการเปลี่ยนรายการเลือกคุณสมบัติสำหรับที่เก็บนี้ส่งผลกระทบต่อเกณฑ์การค้นหาข้ามที่เก็บ\n\nเกณฑ์การค้นหาข้อความต้องถูกลบออกจากเกณฑ์การค้นหาข้ามที่เก็บ เพื่อรันการค้นหา นอกจากนี้ เกณฑ์การค้นหาคุณสมบัติมีการแม็พหนึ่งรายการขึ้นไป ซึ่งมีคุณสมบัติหนึ่งรายการขึ้นไปที่คุณกำลังจะลบ การแม็พใดๆ ที่มีคุณสมบัติซึ่งคุณกำลังจะลบต้องถูกลบออก เกณฑ์การค้นหาคุณสมบัติใดๆ ที่มีการแม็พเหล่านี้ต้องถูกลบออกเพื่อรันการค้นหา\n\nคุณต้องการอัพเดตอ็อพชันที่เก็บ และลบเกณฑ์การค้นหาข้อความ การแม็พ และเกณฑ์การค้นหาคุณสมบัติหรือไม่?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "ไม่รวมเกณฑ์การค้นหาข้อความสำหรับที่เก็บนี้ส่งผลกระทบต่อเกณฑ์การค้าหาที่เก็บแบบข้าม.\n\nเกณฑ์การค้นหาคุณสมบัติใดๆ ที่รวมถึงการแม็พกับคุณสมบัติต้องเคลียร์ตามลำดับเพื่อรันการค้นหา\n\nคุณต้องการอัพเดทอ็อพชันที่เก็บและเคลียร์เกณฑ์การค้นหาหรือไม่? เกณฑ์การค้นหาข้อความอาจถูกลบจากเกณฑ์การค้นหาแบบข้ามที่เก็บเพื่อรันการค้นหา\n\nคุณต้องการอัพเดทที่อ็อพชันที่เก็บและเคลียร์เกณฑ์การค้นหาหรือไม่?",
		unified_search_warn_remove_mapping: "การลบการแม็พนี้ส่งผลกระทบต่อเกณฑ์การค้นหา\n\nเกณฑ์การค้นหาที่ใช้การแม็พต้องถูกลบออก เพื่อรันการค้นหา\n\nคุณต้องการอัพเดตการแม็พ และลบเกณฑ์การค้นหาหรือไม่?",
		unified_search_warn_update_mapping: "การเปลี่ยนแปลงในการแม็พนี้ส่งผลกระทบต่อเกณฑ์การค้นหา\n\nเกณฑ์การค้นหาที่ใช้การแม็พต้องถูกเคลียร์เพื่อให้แน่ใจว่า การค้นหาไม่มีตัวดำเนินการที่ไม่ถูกต้อง หรือค่าที่ไม่ถูกต้อง\n\nคุณต้องการอัพเดตการแม็พ และเคลียร์เกณฑ์การค้นหาหรือไม่?",
		unified_search_warn_update_mapping_not_searchable: "การเปลี่ยนแปลงในการแม็พนี้ส่งผลกระทบต่อเกณฑ์การค้นหา\n\nเมื่อคุณสมบัติที่แม็พทั้งหมดเป็นแบบแสดงอย่างเดียว คุณไม่สามารถใช้การแม็พในเกณฑ์การค้นหา เกณฑ์การค้นหาที่ใช้การแม็พต้องถูกลบออกเพื่อรันการค้นหา\n\nคุณต้องการอัพเดตการแม็พ และลบเกณฑ์การค้นหาหรือไม่?",
		unified_search_warn_update_mapping_box_searchable: "การเปลี่ยนแปลงในการแม็พนี้ส่งผลกระทบต่อเกณฑ์การค้นหา\n\nเกณฑ์การค้นหามีการแม็พนี้มากกว่าหนึ่งครั้งแล้ว และถ้าคุณเพิ่มคุณสมบัติ ${0} จากที่เก็บ ${1} เกณฑ์การค้นหาจะมีคุณสมบัติ ${0} หลายครั้งเกินไป เกณฑ์การค้นหาที่ใช้การแม็พต้องถูกลบออกเพื่อรันการค้นหา\n\nคุณต้องการอัพเดตการแม็พ และลบเกณฑ์การค้นหาหรือไม่?",
		unified_search_details: "รายละเอียดการค้นหาแบบข้ามที่เก็บ",
		unified_search_fixed_value_property: "คุณสมบัติค่าแบบแน่นอน",
		unified_search_required_property: "คุณสมบัติที่จำเป็น",
		unified_search_display_only_property: "แสดงคุณสมบัติอย่างเดียว",
		unified_search_missing_required_properities: "ไม่สามารถบันทึกหรือรันการค้นหา<br/>คุณสมบัติต่อไปนี้เป็นคุณสมบัติที่จำเป็นต้องมี:${0}คุณต้องรวมคุณสมบัติในการแม็พ และเพิ่มคุณสมบัติที่มีค่าให้กับเกณฑ์การค้นหา",
		unified_search_property_repostory: "${0} (ที่เก็บ: ${1})",
		unified_search_builder_no_mappings: "ไม่สามารถรันการค้นหา<br/>คุณต้องสร้างการแม็พคุณสมบัติ และสอดแทรกใน <b>การแสดงผลลัพธ์</b> เพื่อให้การค้นหาสามารถแสดงผลลัพธ์ของคุณได้",
		unified_search_builder_insufficient_criteria_to_run: "ไม่สามารถรันการค้นหา<br/>เกณฑ์การค้นหาไม่ได้รวมเกณฑ์การค้นหาข้อความหรือค่าคุณสมบัติสำหรับที่เก็บต่อไปนี้:${0}สำหรับทุกที่เก็บที่สอดแทรกอยู่ในการค้นหา คุณต้องป้อนเกณฑ์การค้นหาข้อความ หรือสร้างการแม็พคุณสมบัติ สอดแทรกไว้ในเกณฑ์คุณสมบัติ และระบุค่าคุณสมบัติ",
		unified_search_builder_insufficient_criteria_to_save: "ไม่สามารถบันทึกการค้นหา<br/>การค้นหาไม่ได้รวมอยู่ในเกณฑ์การค้นหาสำหรับที่เก็บต่อไปนี้:${0}สำหรับทุกที่เก็บที่สอดแทรกอยู่ในการค้นหา คุณต้องทำหนึ่งในอ็อพชันต่อไปนี้:<ol><li>สร้างการแม็พคุณสมบัติ และสอดแทรกไว้ในเกณฑ์คุณสมบัติ</li><li>ปรับเปลี่ยนที่เก็บเพื่อสอดแทรกเกณฑ์การค้นหาข้อความ และสร้างการแม็พคุณสมบัติและสอดแทรกไว้ใน <b>การแสดงผลลัพธ์</b></li></ol>",
		unified_search_runtime_insufficient_criteria_property: "ไม่สามารถรันการค้นหา<br/>สำหรับทุกที่เก็บซึ่งรวมไว้ในการค้นหา คุณต้องระบุค่าคุณสมบัติอย่างน้อยหนึ่งค่า ตัวอย่างเช่น คุณสามารถระบุค่าสำหรับคุณสมบัติต่อไปนี้: ${0}",
		unified_search_runtime_insufficient_criteria_text: "ไม่สามารถรันการค้นหา<br/>เกณฑ์การค้นหาข้อความเป็นสิ่งจำเป็น",
		unified_search_runtime_insufficient_criteria_text_or_properties: "ไม่สามารถรันการค้นหา<br/>สำหรับทุกที่เก็บซึ่งรวมไว้ในการค้นหา คุณต้องระบุค่าคุณสมบัติอย่างน้อยหนึ่งค่า หรือป้อนเกณฑ์การค้นหาข้อความ ตัวอย่างเช่น คุณสามารถระบุค่าสำหรับคุณสมบัติต่อไปนี้: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "ไม่สามารถรันการค้นหา<br/>เกณฑ์การค้นหาข้อความเป็นสิ่งจำเป็น สำหรับทุกที่เก็บซึ่งรวมไว้ในการค้นหา คุณต้องระบุค่าคุณสมบัติอย่างน้อยหนึ่งค่า หรือป้อนเกณฑ์การค้นหาข้อความ ตัวอย่างเช่น คุณสามารถระบุค่าสำหรับคุณสมบัติต่อไปนี้: ${0}",
		unified_search_invalid_criteria: "การค้นหามีเกณฑ์ที่ไม่ถูกต้องที่ทำให้ไม่สามารถรันการค้นหา<br/>เกณฑ์ที่ไม่ถูกต้องถูกลบออก อย่างไรก็ตาม คุณต้องบันทึกการเปลี่ยนแปลงไปยังการค้นหาก่อนที่คุณจะสามารถรันการค้นหา ถ้าคุณไม่ต้องการบันทึกการเปลี่ยนแปลง ให้ปิดการค้นหา<br/><br/>ไอเท็มต่อไปนี้ถูกลบออก หรือแก้ไข:${0}",
		unified_search_invalid_fixed_values: "ไม่สามารถบันทึกหรือรันการค้นหา<br/>เกณฑ์การค้นหาต่อไปนี้มีค่าคงที่ที่ไม่ถูกต้อง:${0}ใช้หนึ่งในแอ็คชันต่อไปนี้เพื่อแก้ปัญหา:<ul><li>ลบเกณฑ์การค้นหาที่มีค่าที่ไม่ถูกต้อง</li><li>แก้ไขการแม็พที่สอดแทรกคุณสมบัติ IBM Content Manager OnDemand ที่มีค่าคงที่เพื่อลบคุณสมบัติ</li><li>แก้ไขการแม็พที่สอดแทรกคุณสมบัติ IBM Content Manager OnDemand ที่มีค่าคงที่เพื่อทำให้คุณสมบัติทั้งหมดทำงานร่วมกันได้ สำหรับข้อมูลเพิ่มเติมเกี่ยวกับคุณสมบัติที่สามารถแม็พได้, โปรดดูลิงก์ เรียนรู้เพิ่มเติม ในข้อความส่วนนำที่ด้านบนของหน้าต่างการแม็พคุณสมบัติ</li></ul>",
		unified_search_cannot_add_properties: "คุณไม่สามารถเพิ่มคุณสมบัติลงในการค้นหานี้<br/>คุณสมบัติที่แม็พซึ่งพร้อมใช้งานทั้งหมดของคุณอยู่ในเกณฑ์การค้นหาแล้ว และสามารถเพิ่มแต่ละคุณสมบัติลงในการค้นหาเพียงครั้งเดียวเท่านั้น",
		unified_search_mapping_not_viewable: "คุณสมบัติเท็มเพลต Box ไม่สามารถแสดงในผลลัพธ์การค้นหา หากคุณต้องการเพิ่มการแม็พนี้ในรูปคอลัมน์ คุณต้องแม็พอย่างน้อยหนึ่งคุณสมบัติที่ไม่ใช่คุณสมบัติเท็มเพลต Box ตัวอย่างเช่น คุณสามารถเลือกคุณสมบัติจากที่เก็บอื่นๆ",

		unified_search_returned_more: "อย่างน้อยหนึ่งที่เก็บมีผลลัพธ์เกินกว่าจำนวนผลลัพธ์สูงสุดที่อนุญาต",
		unified_search_partial_failure: "มีข้อผิดพลาดเกิดขึ้นกับที่เก็บอย่างน้อยหนึ่งที่เก็บ",
		unified_search_partial_failure_and_returned_more: "มีข้อผิดพลาดเกิดขึ้นบนที่เก็บอย่างน้อยหนึ่งรายการ และอย่างน้อยหนึ่งที่เก็บมีผลลัพธ์เกินกว่าจำนวนผลลัพธ์สูงสุดที่อนุญาต",
		unified_search_see_analysis: "ดูที่การวิเคราะห์ผลลัพธ์",
		unified_search_analysis_intro_returned_more: "สำหรับแต่ละที่เก็บซึ่งมีผลลัพธ์เกินกว่าจำนวนผลลัพธ์สูงสุดที่อนุญาต ลองปรับเกณฑ์การค้นหาของคุณเพื่อให้ส่งคืนผลลัพธ์น้อยลง หรือคุณสามารถรันการค้นหาที่เก็บเดียว เพื่อส่งคืนผลลัพธ์มากกว่าจำนวนสูงสุดที่อนุญาตสำหรับการค้นหาข้ามที่เก็บ",
		unified_search_analysis_intro_partial_failure: "ตรวจทานข้อมูลข้อผิดพลาดที่ถูกส่งคืนโดยที่เก็บเดียวหรือหลายที่เก็บ ถ้าเหมาะสม ให้แก้ไขข้อผิดพลาดและรันการค้นหาข้ามที่เก็บอีกครั้ง",
		unified_search_analysis_intro_partial_failure_and_returned_more: "สำหรับแต่ละที่เก็บซึ่งข้อผิดพลาดเกิดขึ้น ลองแก้ไขปัญหา และรันการค้นหาอีกครั้ง<br/><br/>สำหรับแต่ละที่เก็บซึ่งมีผลลัพธ์เกินกว่าจำนวนผลลัพธ์สูงสุดที่อนุญาต ลองปรับเกณฑ์การค้นหาของคุณเพื่อให้ส่งคืนผลลัพธ์น้อยลง หรือคุณสามารถรันการค้นหาที่เก็บเดียว เพื่อส่งคืนผลลัพธ์มากกว่าจำนวนสูงสุดที่อนุญาตสำหรับการค้นหาข้ามที่เก็บ",
		unified_search_results_found: "ผลลัพธ์ที่พบ",
		unified_search_maximum_allowed: "ค่าสูงสุดที่อนุญาต",
		unified_search_maximum_exceeded: "ค่าสูงสุดที่เกิน",

		unified_search_mapping_rule_box: "ไม่สามารถเพิ่มคุณสมบัตินี้ลงในการแม็พ<p>คุณสมบัติ ${0} จากที่เก็บ ${1} อยู่ในการแม็พอื่นแล้ว และสามารถรวมคุณสมบัติซึ่งสามารถค้นหาได้จากที่เก็บนี้ในหนึ่งการแม็พต่อการค้นหาเท่านั้น<br/>เลือกคุณสมบัติอื่นเพื่อเพิ่มลงในการแม็พ</p>",
		unified_search_mapping_rule_repository: "ไม่สามารถเพิ่มคุณสมบัติเข้ากับการแม็พ<br/>การแม็พมีคุณสมบัติจากที่เก็บ ${0} อยู่แล้ว การแม็พสามารถมีเพียงคุณสมบัติเดียวจากที่เก็บ<br/>เลือกที่เก็บเพื่อเพิ่มคุณสมบัติ หรือสร้างการแม็พใหม่สำหรับคุณสมบัติที่เลือก",
		unified_search_mapping_rule_data_type: "ไม่สามารถเพิ่มคุณสมบัติเข้ากับการแม็พ<br/>คุณสมบัติ ${0} ไม่สามารถแม็พกับคุณสมบัติ ${1} เลือกคุณสมบัติอื่นที่ต้องการแม็พ, หรือสร้างการแม็พใหม่สำหรับคุณสมบัติที่เลือกไว้<br/>สำหรับข้อมูลเพิ่มเติมเกี่ยวกับคุณสมบัติที่สามารถแม็พได้, โปรดดูลิงก์ เรียนรู้เพิ่มเติม ในข้อความส่วนนำที่ด้านบนของหน้าต่างนี้",
		unified_search_mapping_rule_cardinality: "ไม่สามารถเพิ่มคุณสมบัติเข้ากับการแม็พ<br/>คุณสมบัติทั้งหมดในการแม็พต้องสนับสนุนค่าเดี่ยวหรือหลายค่า คุณสมบัติที่เลือกสนับสนุน ${0} และคุณสมบัติในการแม็พสนับสนุน ${1}<br/>เลือกคุณสมบัติอื่นเพื่อเพิ่มเข้ากับการแม็พ หรือสร้างการแม็พใหม่สำหรับคุณสมบัติที่เลือก",
		unified_search_mapping_rule_fixed_value: "ไม่สามารถเพิ่มคุณสมบัติเข้ากับการแม็พ<br/>การแม็พมีคุณสมบัติที่มีค่าคงที่อยู่แล้ว การแม็พสามารถมีคุณสมบัติที่มีค่าที่คงที่รายการเดียวเท่านั้น<br/>เลือกคุณสมบัติอื่นเพื่อเพิ่มเข้ากับการแม็พ หรือสร้างการแม็พใหม่สำหรับคุณสมบัติที่เลือก",
		unified_search_mapping_rule_child_component: "ไม่สามารถเพิ่มคุณสมบัติเข้ากับการแม็พ<br/>ไม่สามารถแม็พคุณสมบัติที่มีคอมโพเนนต์ชายน์กับคุณสมบัติอื่น หากคุณต้องการให้สามารถค้นหาบนคุณสมบัตินี้ได้ ให้สร้างการแม็พใหม่สำหรับคุณสมบัติที่เลือก",
		unified_search_mapping_rule_operator_intersection: "ไม่สามารถเพิ่มคุณสมบัติเข้ากับการแม็พ<br/>คุณสมบัติทั้งหมดในการแม็พต้องมีตัวดำเนินการที่เหมือนกันอย่างน้อยหนึ่งตัว อย่างไรก็ตาม คุณสมบัติ ${0} ไม่มีตัวดำเนินการที่เหมือนกันกับคุณสมบัติอื่นในการแม็พ<br/>หากเป็นไปได้ ให้เลือกคุณสมบัติอื่น หากคุณต้องรวมคุณสมบัติที่เลือก ให้ทำงานกับผู้ดูแลระบบของคุณเพื่อแก้ไขตัวดำเนินการที่เชื่อมโยงกับคุณสมบัติ",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "ค่าติดตั้งระดับสูง",
		advanced_search_options_intro: "ตั้งค่าอ็อพชันเกณฑ์ระดับสูง",
		advanced_search_options_editable: "สามารถแก้ไขได้",
		advanced_search_options_readonly: "อ่านอย่างเดียว",
		advanced_search_options_required: "จำเป็น",
		advanced_search_options_hidden: "ซ่อนไว้",
		advanced_search_options_property_editable:"คุณสมบัติคือ:",
		advanced_search_options_operators:"ตัวดำเนินการ:",
		advanced_search_options_use_all:"ใช้ทั้งหมด",
		advanced_search_options_use_selected:"ใช้ค่าที่เลือก",
		advanced_search_options_operators_filtered: "ผู้ปฏิบัติการที่ถูกกรอง",
		// Data types in lowercase
		data_type_boolean: "บูลีน",
		data_type_date: "date",
		data_type_time: "time",
		data_type_timestamp: "เวลาประทับ",
		data_type_decimal: "ค่าทศนิยม",
		data_type_double: "จำนวน floating-point",
		data_type_short: "เลขจำนวนเต็ม",
		data_type_integer: "เลขจำนวนเต็ม",
		data_type_long: "เลขจำนวนเต็ม",
		data_type_string: "สตริงข้อความ",
		data_type_string_alpha: "สตริงตัวอักษร",
		data_type_string_alphanum: "สตริงตัวเลขผสมตัวอักษร",
		data_type_string_ext: "สตริงตัวอักษรผสมตัวเลขที่ขยายเพิ่ม",
		data_type_string_num: "สตริงตัวเลข",
		data_type_binary: "ไบนารี",
		data_type_object: "อ็อบเจ็กต์",
		data_type_guid: "ตัวบ่งชี้เฉพาะแบบโกลบอล",
		data_type_user: "users",
		data_type_child_component: "คอมโพเนนต์ชายน์",

		/* Print Dialog */
		print_title: "พิมพ์",
		print_message: "การพิมพ์: ${0}",
		print_print_button: "พิมพ์",
		print_clean_margins_button: "ตั้งค่าทั้งหมดเป็น 0",
		print_type: "ชนิดเครื่องพิมพ์:",
		print_printer_server_options: "อ็อพชันการพิมพ์ของเซิร์ฟเวอร์",
		print_printer_properties: "คุณสมบัติของเครื่องพิมพ์",
		print_printer_fax_properties: "คุณสมบัติของเครื่องแฟ็กซ์",
		print_printer_name: "ชื่อเครื่องพิมพ์:",
		print_fax_recipient: "ผู้รับ",
		print_fax_sender: "ผู้ส่ง",
		print_copies: "คัดลอก:",
		print_local_orientation: "การจัดวาง",
		print_local_orientation_landscape: "แนวนอน",
		print_local_orientation_portrait: "แนวตั้ง",
		print_local_margins: "ระยะขอบ",
		print_local_margins_top: "บนสุด",
		print_local_margins_bottom: "ล่างสุด",
		print_local_margins_left: "ด้านซ้าย",
		print_local_margins_right: "ด้านขวา",
		print_printer_server: "เซิร์ฟเวอร์",
		print_printer_local: "เฉพาะที่",
		print_property_class: "คลาส:",
		print_property_routing: "การกำหนดเส้นทาง:",
		print_property_pagedef: "PageDef:",
		print_property_node: "โหนด:",
		print_property_writer: "ผู้เขียน:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Dest:",
		print_property_forms: "ฟอร์ม:",
		print_property_faxnotes: "บันทึก:",
		print_property_faxcompany: "บริษัท:",
		print_property_faxnumber: "หมายเลขแฟ็กซ์:",
		print_property_faxname: "ชื่อ:",
		print_property_faxsendertelnumber: "หมายเลขโทรศัพท์:",
		print_property_faxcoverpage: "หน้าปก:",
		print_property_faxsubject: "ชื่อเรื่อง:",
		print_saveoptions: "บันทึกอ็อพชันการพิมพ์",
		print_property_bannerpage: "ใช้หน้าแบนเนอร์",
		print_print_with_info_fields: "พิมพ์ด้วยฟิลด์ข้อมูล",
		print_field_from: "จาก",
		print_field_to: "หากต้องการ",
		print_invalid_value_class: "อักขระที่ใช้ได้คือ A-Z หรือ 0-9",
		print_invalid_value_pagedef: "อักขระที่ใช้ได้เป็นอักขระตัวเลขหรือตัวอักษร หรืออักขระ @, # หรือ $",
		print_invalid_value_writer: "อักขระที่ใช้ได้เป็นอักขระตัวเลขหรือตัวอักษร หรืออักขระ @, # หรือ $",
		print_invalid_value_formdef: "อักขระที่ใช้ได้เป็นอักขระตัวเลขหรือตัวอักษร หรืออักขระ @, # หรือ $",
		print_invalid_value_forms: "อักขระที่ใช้ได้เป็นอักขระตัวเลขหรือตัวอักษร หรืออักขระ @, # หรือ $",
		print_invalid_value_margin: "ตัวเลขที่ใช้ได้อยู่ระหว่าง ${0} และ ${1}",
		print_status_message: "${0} เอกสารถูกส่งไปยัง ${1} เครื่องพิมพ์",

		print_applet_init_error: "ไม่สามารถเริ่มต้นแอ็พเพล็ตการพิมพ์",
		print_applet_init_error_explanation: "ปัญหานี้เกิดขึ้นได้ด้วยเหตุผลต่อไปนี้: <br/><br/><ul><li>ไม่ได้ติดตั้ง Java Runtime Environment (JRE) บนเวิร์กสเตชันของคุณ</li><li>ไม่ได้เปิดใช้ปลั๊กอิน Java ในเว็บเบราว์เซอร์ของคุณ</li><li>เวอร์ชัน JRE บนเวิร์กสเตชันของคุณไม่เข้ากันกับเวอร์ชัน IBM Content Navigator</li><li>เบราว์เซอร์หมดเวลาการรอให้แอ็พเพล็ตการพิมพ์เริ่มต้น</li></ul>",
		print_applet_init_error_userResponse: "คุณสามารถทำขั้นตอนต่อไปนี้เพื่อแก้ไขปัญหาเกี่ยวกับ JRE:<br/><br/><ol><li>Ensureตรวจสอบให้แน่ใจว่า JRE ได้ถูกติดตั้งบนเวิร์กสเตชันของคุณ</li><li>ตรวจสอบให้แน่ใจว่าปลั๊กอิน Java เปิดใช้งานในเว็บเบราว์เซอร์ของคุณ</li><li>ตรวจสอบให้แน่ใจว่าเวอร์ชัน JRE บนเวิร์กสเตชันของคุณเข้ากันได้กับ IBM Content Navigator และลองอีกครั้ง รายการของเวอร์ชันที่สนับสนุนจะรวมอยู่ในเอกสาร <i>สิ่งที่จำเป็นต้องมีสำหรับฮาร์ดแวร์และซอฟต์แวร์สำหรับ IBM Content Navigator</i> บนไซต์ IBM Software Support</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "ใบปะหน้า",
		daeja_print_selected_documents_title: "เอกสารที่เลือกไว้",

		/* change the caps to em for emphasis*/
		match_all_criteria: "ตรงกับเงื่อนไขการค้นหาทั้งหมด",
		match_any_criteria: "ตรงกับเงื่อนไขการค้นหาใดๆ",
		include_subfolders_summary: "${0} (รวมโฟลเดอร์ย่อย)",
		browse_button: "เรียกดู&hellip;",
		search_for: "ค้นหาสำหรับ:",
		object_type_documents: "เอกสาร",
		object_type_folders: "โฟลเดอร์",
		object_type_documents_folders: "เอกสารและโฟลเดอร์",
		object_type_web_links: "เว็บลิงก์",
		object_type_documents_folders_web_links: "เอกสาร โฟลเดอร์ และเว็บลิงก์",

		/* SelectSearchFolderDialog */
		search_in: "ค้นหาใน:",
		include_subfolders: "รวมโฟลเดอร์ย่อย",

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
		locked_item_icon_title: "ล็อคโดย ${0}",
		checked_out_icon_title: "เช็กเอาต์โดย ${0}",
		major_minor_version_icon_title: "เวอร์ชันหลักที่มีเวอร์ชันรอง",
		suspended_icon_title: "เวิร์กโฟลว์ถูกหยุดทำงานชั่วคราว",
		on_hold_icon_title: "พักอยู่",
		has_notes_icon_title: "มีบันทึกย่อ",
		record_icon_title: "ประกาศเป็นเร็กคอร์ด",
		compound_document_icon_title: "เอกสารประกอบ",
		validateTemplate_icon_title: "เท็มเพลต Teamspace ต้องการการตรวจสอบความถูกต้อง",
		offlineTemplate_icon_title: "เท็มเพลต Teamspace ออฟไลน์",
		offlineTeamspace_icon_title: "Teamspace ออฟไลน์",
		pending_delete_icon_title: "Teamspace ระงับการลบ",
		delete_error_icon_title: "ไม่สามารถลบ Teamspace",
		defaultTemplate_icon_title: "เท็มเพลต Teamspace ดีฟอลต์",
		teamspace_icon_title: "Teamspace",
		teamspace_template_icon_title: "เท็มเพลต Teamspace",
		has_bookmark_icon_title: "มีบุ๊กมาร์ก",
		read_only_icon_title: "อ่านอย่างเดียว",
		no_results_were_found: "ไม่พบผลลัพธ์",
		folder_is_empty: "โฟลเดอร์ว่างเปล่า",
		no_checked_out_items: "คุณไม่ได้เช็กเอาต์ไอเท็มใด",
		inbasket_is_empty: "in-basket ว่างเปล่า",
		worklist_is_empty: "รายการงานว่างเปล่า",
		tracker_milestone_completed: "เสร็จสมบูรณ์",
		stepprocessor_attachments_title: "สารบัญ",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "ล็อคไอเท็ม",
		unlock_items: "ปลดล็อคไอเท็ม",
		checkin_item: "เช็กอินไอเท็ม",

		/* Help */
		learn_more: "ศึกษาเพิ่มเติม",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "เปิด Teamspace",
		repository_tab_createWorkspace: "Teamspace ใหม่",
		repository_tab_createWorkspaceTemplate: "เท็มเพลต Teamspace ใหม่",
		repository_tab_DefaultTemplate: "ดีฟอลต์",

		/* Cross repository document copy */
		documentCopyTaskDescription: "ภารกิจนี้จะคัดลอกเอกสาร",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "คุณไม่มีสิทธิ์แก้ไขสำหรับเท็มเพลต Teamspace ที่เลือก",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "คุณแน่ใจว่าต้องการลบ ${0} Teamspace หรือไม่? <br><br>เฉพาะเอกสารที่จัดเก็บในโฟลเดอร์อื่นในที่เก็บเท่านั้นที่ยังคงอยู่ในที่เก็บ เอกสารใดๆ ที่จัดเก็บไว้เฉพาะใน Teamspace จะถูกลบ",
		teamspaceDecommissionLabel: "ลบ:",
		teamspaceDecommissionDescription: "การลบ Teamspace จะลบ Teamspace นี้ออกจากเซิร์ฟเวอร์: บ่งชี้วิธีการจัดการกับ Teamspace ที่สร้างขึ้น",
		teamspaceDecommissionOptions: "ลบอ็อพชัน Teamspace",
		teamspaceDecommissionDeleteAll: "ลบ Teamspace ทั้งหมดที่สร้างขึ้น",
		teamspaceDecommissionReFileAll: "จัดเก็บไฟล์ Teamspace ทั้งหมดที่สร้างขึ้น",
		teamspaceDecommissionReFileDestination: "ย้ายไปยัง:",
		teamspaceDecommissionReFileIn: "จัดเก็บไฟล์อีกครั้งใน",
		teamspaceDecommissionTaskName: "ภารกิจการลบ Teamspace",
		teamspaceDecommissionTaskDescription: "ภารกิจนี้ลบ Teamspace ออกจากที่เก็บ",
		teamspaceDecommissionDeletionStarted: "Teamspace ได้ถูกกำหนดตารางเวลาไว้สำหรับการลบ",
		teamspaceDecommissionDeletionConnectionFailed: "ไม่สามารถรันภารกิจที่จะลบ Teamspace ได้เนื่องจากไม่สามารถเชื่อมต่อไปที่ที่เก็บ ให้ตรวจสอบว่าว่าหนังสือรับรองของผู้ดูแลระบบที่เก็บถูกต้อง",

		teamspace_edit_properties_notsupported: "คุณสามารถแก้ไขคุณสมบัติของ Teamspace ได้จากมุมมอง Teamspace เท่านั้น",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Teamspace ออฟไลน์และสามารถเปิดขึ้นโดยเจ้าของ Teamspace ได้เท่านั้น",

		/* Teamspace Builder widget */
		workspace_validation_document: "เอกสาร:",
		workspace_validation_folder: "โฟลเดอร์:",
		workspace_validation_ets: "เท็มเพลตรายการต่อไปนี้ไม่พร้อมใช้งานในที่เก็บนี้ และถูกลบออกจากรายการของเท็มเพลตรายการที่เลือกแล้ว:",
		workspace_validation_classes: "คลาสต่อไปนี้ไม่พร้อมใช้งานในที่เก็บนี้ และถูกลบออกจากรายการของคลาสที่เลือกแล้ว:",
		workspace_validation_searches: "การค้นหาต่อไปนี้ไม่พร้อมใช้งานในที่เก็บนี้ และถูกลบออกจากรายการของการค้นหาที่เลือกแล้ว:",
		workspace_validation_docs_folders: "เอกสารและโฟลเดอร์ต่อไปนี้ไม่พร้อมใช้งานในที่เก็บนี้ และถูกลบออกจากรายการของไอเท็มที่ถูกรวมแล้ว:",
		workspace_change_template_confirmation_question: "ถ้าคุณเลือกเท็มเพลตอื่น การเปลี่ยนแปลงทั้งหมดของคุณจะหายไป คุณต้องการทำต่อไปหรือไม่?\n",
		workspace_delete_item_confirmation_question: "คุณต้องการลบไอเท็ม ${0} หรือไม่?\n",
		workspace_delete_role_confirmation_question: "คุณต้องการลบบทบาท ${0} หรือไม่?\n",
		workspace_delete_confirmation_question: "หากคุณลบ Teamspace เฉพาะคอนเทนเนอร์ Teamspace เท่านั้นที่จะถูกลบออก โฟลเดอร์และเอกสารใน Teamspace จะยังคงอยู่ในที่เก็บ และคุณสามารถค้นหาได้โดยการค้นหา เมื่อต้องการลบเนื้อหาของ Teamspace ให้ลบไอเท็มใน Teamspace ก่อนและจากนั้นลบ Teamspace<br><br>คุณต้องการลบ Teamspace ${0} หรือไม่?",
		workspacebuilder_instance_template_name_header: "ชื่อเท็มเพลต Teamspace",
		workspacebuilder_instance_template_description_header: "คำอธิบาย",

		workspacebuilder_template_tooltip_name: "ชื่อเท็มเพลตไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "ชื่อ Teamspace ไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "ให้คำอธิบายที่ช่วยให้ผู้ใช้สามารถเลือกจากรายการของเท็มเพลตได้อย่างถูกต้อง ตัวอย่างเช่น คุณอาจรวมข้อมูลเกี่ยวกับผู้ใช้ที่ตั้งใจ หรือใช้เท็มเพลต",
		workspacebuilder_instance_tooltip_description: "ให้คำอธิบายที่ช่วยให้ผู้ใช้สามารถแยกความแตกต่างระหว่าง Teamspace นี้และ Teamspace อื่น",

		workspacebuilder_template_edit_properties_pane: "แก้ไขเท็มเพลต Teamspace",
		workspacebuilder_instance_properties_pane: "กำหนด Teamspace",
		workspacebuilder_template_properties_pane: "กำหนดเท็มเพลต Teamspace",

		workspacebuilder_instance_security_pane: "ตั้งค่าความปลอดภัย Teamspace",
		workspacebuilder_template_security_pane: "ตั้งค่าความปลอดภัยเท็มเพลต",

		workspacebuilder_layout_pane: "เลือกโครงร่าง",
		workspacebuilder_search_templates_pane: "เลือกการค้นหา",
		workspacebuilder_document_folders_pane: "รวมโฟลเดอร์และเอกสาร",
		workspacebuilder_doctypes_entryTemplates_pane: "เลือกคลาสหรือเท็มเพลตรายการ",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "เลือกคลาส",
		workspacebuilder_security: "ความปลอดภัย Teamspace",

		workspacebuilder_roles_pane: "เลือกบทบาท",
		workspacebuilder_security: "การรักษาความปลอดภับ",

		workspacebuilder_properties_templates: "เท็มเพลตที่พร้อมใช้งาน:",
		workspacebuilder_available_templates: "การค้นหาที่พร้อมใช้งาน:",
		workspacebuilder_selected_templates: "การค้นหาที่เลือก:",
		workspacebuilder_templates_name: "ชื่อการค้นหา",

		workspacebuilder_available_entryTemplates: "เท็มเพลตรายการที่พร้อมใช้งาน:",
		workspacebuilder_selected_entryTemplates: "เท็มเพลตรายการที่เลือก:",

		workspacebuilder_item_classes: "คลาสที่พร้อมใช้งาน:",
		workspacebuilder_item_classes_selected: "คลาสที่เลือก:",
		workspacebuilder_properties_select_template: "เลือกเท็มเพลตเพื่อใช้สำหรับ Teamspace นี้",
		workspacebuilder_template_properties: "กำหนดเท็มเพลต Teamspace",
		workspacebuilder_instance_properties: "กำหนด Teamspace",
		workspacebuilder_template_introText: "ระบุคอมโพเนนต์ทั่วไปที่คุณต้องการรวมในทุก Teamspace ที่สร้างขึ้นจากเท็มเพลตนี้โดยใช้การเลือกในการนำทาง เมื่อทำเสร็จ ให้คลิก <b>เสร็จสิ้น</b> เพื่อทำให้เท็มเพลตพร้อมใช้งานสำหรับผู้ใช้อื่นที่สามารถใช้เท็มเพลตเพื่อสร้าง Teamspace ใหม่",
		workspacebuilder_instance_introText: "ทีมใช้ Teamspace เพื่อแบ่งใช้และทำงานกับชุดของเอกสารเฉพาะ จัดเตรียมชื่อที่มีความหมายและคำอธิบายสำหรับ Teamspace นี้เพื่อช่วยให้ผู้ใช้สามารถแยกความแตกต่างระหว่าง Teamspace นี้จาก Teamspace อื่น คุณสามารถปรับแต่ง Teamspace ได้โดยการรวมการค้นหา คลาส หรือเท็มเพลตรายการ เอกสารและเท็มเพลตเพิ่มเติม",

		workspacebuilder_template_search_template_introText: "เลือกการค้นหาดีฟอลต์ที่คุณต้องการรวมในทุก Teamspace ที่สร้างขึ้นจากเท็มเพลตนี้ ถ้าไม่มีการเลือกการค้นหา ผู้ใช้ Teamspace จะเห็นการค้นหาทั้งหมดที่ผู้ใช้สามารถเข้าถึง โดยการให้สิทธิ์ที่เหมาะสม ผู้ใช้สามารถแบ่งใช้หรือเพิ่มการค้นหาใน Teamspace ได้",
		workspacebuilder_instance_search_template_introText: "รวมการค้นหาที่จะช่วยให้ผู้ใช้ Teamspace สามารถทำงานให้เสร็จสมบูรณ์อย่างมีประสิทธิภาพมากขึ้น ถ้าไม่มีการค้นหาที่ถูกรวม ผู้ใช้ Teamspace จะเห็นการค้นหาทั้งหมดที่ผู้ใช้สามารถเข้าถึง ผู้ใช้ยังสามารถเพิ่มและแบ่งใช้การค้นหาใน Teamspace ที่มีสิทธิ์ที่เหมาะสม",

		workspacebuilder_template_roles_introText: "ผู้ใช้ Teamspace ถูกกำหนดเข้ากับบทบาท บทบาทจะระบุงานที่ผู้ใช้ได้รับอนุญาตให้ทำ คลิกที่ไอคอนที่อยู่ถัดจากแต่ละบทบาทเพื่อดูงานที่ได้รับอนุญาต เลือกบทบาทที่เหมาะสมสำหรับ Teamspace",
		workspacebuilder_template_roles_modify_introText: "คุณสามารถแก้ไขสิทธิ์ที่เกี่ยวข้องกับแต่ละบทบาทได้ใน Teamspace นี้ คุณควรแจ้งสมาชิก Teamspace เมื่อสิทธิ์ของสมาชิกเปลี่ยนแปลง",

		workspacebuilder_template_roles_header_name: "ชื่อบทบาท",

		workspacebuilder_template_folders_introText: "เลือกเอกสารและโฟลเดอร์ดีฟอลต์เพื่อรวมในทุก Teamspace ที่สร้างขึ้นจากเท็มเพลตนี้ คุณสามารถเพิ่มเอกสารเป็นลิงก์หรือสำเนา ใช้ลิงก์เพื่อชี้ไปยังเอกสารที่คุณไม่ต้องการมีหลายสำเนา เช่น นโยบายหรือโพรซีเดอร์ สร้างสำเนาของเอกสารที่ผู้ใช้จะแก้ไข เช่น เท็มเพลตและฟอร์ม",
		workspacebuilder_instance_folders_introText: "เลือกเอกสารและโฟลเดอร์ดีฟอลต์เพื่อรวมใน Teamspace คุณสามารถเพิ่มเอกสารเป็นลิงก์หรือสำเนา ใช้ลิงก์เพื่อชี้ไปยังเอกสารที่คุณไม่ต้องการมีหลายสำเนา เช่น นโยบายหรือโพรซีเดอร์ สร้างสำเนาของเอกสารที่ผู้ใช้จะแก้ไข เช่น เท็มเพลตและฟอร์ม",

		workspacebuilder_template_roles_introText: "ระบุบทบาทที่จะถูกรวมในทุก Teamspace ที่สร้างขึ้นจากเท็มเพลตนี้ คุณยังสามารถสร้างบทบาทใหม่ซึ่งคุณสามารถใช้เมื่อคุณสร้างเท็มเพลต Teamspace อื่น",
		workspacebuilder_instance_users_introText: "ใน Teamspace ผู้ใช้แต่ละรายจะถูกกำหนดอย่างน้อยหนึ่งบทบาทที่ระบุงานที่ผู้ใช้นั้นสามารถทำได้ เพิ่มผู้ใช้เข้ากับ Teamspace และกำหนดบทบาทให้กับผู้ใช้",

		workspacebuilder_instance_navigation_pane_title: "Teamspace Builder",
		workspacebuilder_template_navigation_pane_title: "Teamspace Template Builder",

		workspacebuilder_roles_roles_nopermissions: "ไม่ได้เลือกสิทธิสำหรับบทบาท {0}",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "บทบาทที่เลือก:",
		workspacebuilder_roles_available_roles: "บทบาทที่พร้อมใช้งาน:",
		workspacebuilder_roles_privilege_header: "สิทธิ์",
		workspacebuilder_roles_select_role: "เลือกบทบาท",
		workspacebuilder_roles_select_permission: "เลือกการอนุญาต",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "บทบาทที่ชื่อ {0} มีอยู่แล้ว คุณต้องระบุชื่อที่ไม่ซ้ำกันสำหรับบทบาท ",
		workspacebuilder_roles_edit_dialog_role_name: "ชื่อบทบาท:",
		workspacebuilder_roles_edit_dialog_role_description: "คำอธิบายบทบาท:",
		workspacebuilder_roles_edit_dialog_title_new: "บทบาทใหม่",
		workspacebuilder_roles_edit_dialog_title_edit: "แก้ไขบทบาท",

		workspacebuilder_roles_privileges_header: "สิทธิสำหรับบทบาท {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "สิทธิ์สำหรับเอกสาร:",
		workspacebuilder_roles_priv_group_folder: "สิทธ์สำหรับโฟลเดอร์:",
		workspacebuilder_roles_priv_group_teamspace: "สิทธิ์สำหรับ Teamspace:",
		workspacebuilder_roles_priv_group_item: "สิทธิ์สำหรับเอกสารและโฟลเดอร์:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "จัดการสิทธิ์",
		workspacebuilder_roles_plbl_modifyItemPermissions: "ผู้ใช้ที่มีสิทธิใช้งานสามารถจัดการเข้าถึงเอกสารและโฟลเดอร์ใน Teamspace ได้ สิทธิ์นี้รวมถึงการอนุญาตให้ผู้ใช้อื่นลบ แก้ไขคุณสมบัติ สร้างโฟลเดอร์ย่อย และอื่นๆ",

		workspacebuilder_roles_priv_deleteItems: "ลบออก",
		workspacebuilder_roles_plbl_deleteItems: "ผู้ใช้ที่มีสิทธิ์นี้สามารถลบเอกสารและโฟลเดอร์ใน Teamspace",

		workspacebuilder_roles_priv_createItems: "สร้าง",
		workspacebuilder_roles_plbl_createItems: "ผู้ใช้ที่มีสิทธิ์นี้สามารถสร้างเอกสารและโฟลเดอร์ใน Teamspace ได้",

		workspacebuilder_roles_priv_viewItemProperties: "คุณสมบัติมุมมอง",
		workspacebuilder_roles_plbl_viewItemProperties: "ผู้ใช้ที่มีสิทธิ์นี้สามารถดูคุณสมบัติของเอกสารและโฟลเดอร์ใน Teamspace ซึ่งรวมถึงคุณสมบัติระบบ",

		workspacebuilder_roles_priv_modifyItemProperties: "แก้ไขคุณสมบัติ",
		workspacebuilder_roles_plbl_modifyItemProperties: "ผู้ใช้ที่มีสิทธิ์นี้สามารถแก้ไขคุณสมบัติของเอกสารและโฟลเดอร์ใน Teamspace",

		workspacebuilder_roles_priv_modifyFolderPermissions: "จัดการสิทธิ์สำหรับโฟลเดอร์",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "ผู้ใช้ที่มีสิทธิ์นี้สามารถจัดการการเข้าถึงเอกสารและโฟลเดอร์ใน Teamspace สิทธิ์นี้รวมถึงการอนุญาตให้ผู้ใช้อื่นลบโฟลเดอร์ แก้ไขคุณสมบัติของโฟลเดอร์ สร้างโฟลเดอร์ย่อย และอื่นๆ",

		workspacebuilder_roles_priv_deleteFolders: "ลบโฟลเดอร์",
		workspacebuilder_roles_plbl_deleteFolders: "ผู้ใช้ที่มีสิทธิ์นี้สามารถลบโฟลเดอร์ใน Teamspace ได้",

		workspacebuilder_roles_priv_modifyFolderProperties: "แก้ไขคุณสมบัติของโฟลเดอร์",
		workspacebuilder_roles_plbl_modifyFolderProperties: "ผู้ใช้ที่มีสิทธิ์นี้สามารถแก้ไขคุณสมบัติของโฟลเดอร์ใน Teamspace ได้",

		workspacebuilder_roles_priv_createSubfolders: "สร้างโฟลเดอร์ย่อย",
		workspacebuilder_roles_plbl_createSubfolders: "ผู้ใช้ที่มีสิทธิ์นี้สามารถสร้างโฟลเดอร์ใน Teamspace ได้",

		workspacebuilder_roles_priv_fileInFolders: "เพิ่มเข้ากับโฟลเดอร์",
		workspacebuilder_roles_plbl_fileInFolders: "ผู้ใช้ที่มีสิทธิ์นี้สามารถเพิ่มลิงก์จากโฟลเดอร์ใน Teamspace เข้ากับเอกสารได้",

		workspacebuilder_roles_priv_viewFolderProperties: "ดูคุณสมบัติของโฟลเดอร์",
		workspacebuilder_roles_plbl_viewFolderProperties: "ผู้ใช้ที่มีสิทธิ์นี้สามารถดูคุณสมบัติของโฟลเดอร์ใน Teamspace ซึ่งรวมถึงคุณสมบัติของระบบ",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "จัดการสิทธิ์ของเอกสาร",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "ผู้ใช้ที่มีสิทธิ์นี้สามารถจัดการการเข้าถึงเอกสารใน Teamspace สิทธิ์นี้รวมถึงการอนุญาตให้ผู้ใช้อื่นลบเอกสาร แก้ไขคุณสมบัติของเอกสาร และอื่นๆ",

		workspacebuilder_roles_priv_deleteDocuments: "ลบเอกสาร",
		workspacebuilder_roles_plbl_deleteDocuments: "ผู้ใช้ที่มีสิทธิ์นี้สามารถลบเอกสารใน Teamspace ได้",

		workspacebuilder_roles_priv_promoteVersions: "เลื่อนระดับเวอร์ชัน",
		workspacebuilder_roles_plbl_promoteVersions: "ผู้ใช้ที่มีสิทธิ์นี้สามารถกำหนดหมายเลขเวอร์ชันใหม่ให้กับเอกสารใน Teamspace ได้",

		workspacebuilder_roles_priv_modifyContent: "แก้ไขเอกสาร",
		workspacebuilder_roles_plbl_modifyContent: "ผู้ใช้ที่มีสิทธิ์นี้สามารถแก้ไขเนื้อหาของเอกสารใน Teamspace ได้",

		workspacebuilder_roles_priv_modifyDocumentProperties: "แก้ไขคุณสมบัติของเอกสาร",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "ผู้ใช้ที่มีสิทธิ์นี้สามารถแก้ไขคุณสมบัติของเอกสารใน Teamspace ได้",

		workspacebuilder_roles_priv_viewContent: "ดูเอกสาร",
		workspacebuilder_roles_plbl_viewContent: "ผู้ใช้ที่มีสิทธิ์นี้สามารถดูเอกสารใน Teamspace ได้",

		workspacebuilder_roles_priv_viewDocumentProperties: "ดูคุณสมบัติของเอกสาร",
		workspacebuilder_roles_plbl_viewDocumentProperties: "ผู้ใช้ที่มีสิทธิ์นี้สามารถดูคุณสมบัติของเอกสารใน Teamspace รวมถึงคุณสมบัติของระบบ",

		workspacebuilder_roles_priv_addNewSearches: "เพิ่มการค้นหา",
		workspacebuilder_roles_plbl_addNewSearches: "ผู้ใช้ที่มีสิทธิ์นี้สามารถเพิ่มการค้นหาเข้ากับ Teamspace โดยดีฟอลต์การค้นหาจะไม่พร้อมใช้งานสำหรับผู้ใช้อื่น",

		workspacebuilder_roles_priv_createNewSearches: "สร้างการค้นหา",
		workspacebuilder_roles_plbl_createNewSearches: "ผู้ใช้ที่มีสิทธิ์สามารถสร้างการค้นหาใหม่แต่ไม่สามารถบันทึกการค้นหา หากผู้ใช้ไม่มีสิทธิ์นี้ ผู้ใช้จะไม่สามารถเพิ่มเอกสารที่มีอยู่แล้วบนที่เก็บเข้ากับ Teamspace",

		workspacebuilder_roles_priv_shareSearches: "แบ่งใช้การค้นหา",
		workspacebuilder_roles_plbl_shareSearches: "ผู้ใช้ที่มีสิทธิ์นี้สามารถแบ่งใช้การค้นหาที่สร้างขึ้นกับผู้ใช้อื่นของ Teamspace",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "จัดการคลาสหรือเท็มเพลตรายการ",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "ผู้ใช้ที่มีสิทธิ์นี้สามารถเพิ่มและลบคลาสหรือเท็มเพลตรายการจาก Teamspace ได้",

		workspacebuilder_roles_priv_addRemoveClasses: "จัดการคลาส",
		workspacebuilder_roles_plbl_addRemoveClasses: "ผู้ใช้ที่มีสิทธินี้สามารถเพิ่มและลบคลาสออกจาก Teamspace",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "จัดการผู้ใช้ Teamspace",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "ผู้ใช้ที่มีสิทธิ์นี้สามารถเพิ่มและลบผู้ใช้และกลุ่มออกจาก Teamspace ได้ นอกจากนี้ ผู้ใช้สามารถจัดการบทบาทที่กำหนดให้กับผู้ใช้",

		workspacebuilder_roles_priv_modifyRoles: "ปรับเปลี่ยนบทบาท",
		workspacebuilder_roles_plbl_modifyRoles: "เจ้าของที่มีสิทธิ์นี้สามารถปรับเปลี่ยนสิทธิ์บทบาทสำหรับ Teamspace สิทธิ์นี้มีเฉพาะสำหรับเจ้าของ",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "เลือกผู้ใช้",
		workspacebuilder_users_add_users_and_groups_button: "เพิ่มผู้ใช้และกลุ่ม...",
		workspacebuilder_users_users_or_group_header: "ผู้ใช้และกลุ่ม",
		workspacebuilder_users_roles_header: "บทบาท",

		workspacebuilder_users_role_header: "บทบาท",
		workspacebuilder_users_role_no_permissions: "บทบาทนี้ไม่มีสิทธิ์",
		workspacebuilder_users_available_roles_label: "บทบาทที่พร้อมใช้งาน:",
		workspacebuilder_users_selected_users_and_groups_label: "เลือกผู้ใช้และกลุ่ม:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "ไม่สามารถบันทึก Teamspace คุณต้องระบุอย่างน้อยหนึ่งเจ้าของสำหรับ Teamspace นี้",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "ไม่สามารถบันทึก Teamspace ผู้ใช้ทั้งหมดต้องได้รับการกำหนดบทบาท",
		// end of select users

		workspacebuilder_search_templates: "เลือกการค้นหา",
		workspacebuilder_search_add: "เพิ่มการค้นหา",
		workspacebuilder_properties_workspaceName: "ชื่อ Teamspace:",
		workspacebuilder_properties_templateName: "ชื่อเท็มเพลต:",
		workspacebuilder_properties_workspaceDescription: "คำอธิบาย Teamspace:",
		workspacebuilder_properties_templateDescription: "คำอธิบายเท็มเพลต:",
		workspacebuilder_properties_workspaceTemplate: "เท็มเพลตที่เลือก:",
		workspacebuilder_properties_security: "แบ่งใช้เท็มเพลตกับ:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "ย้ายจาก Teamspace:",
		moveTeamspaceDocuments_security: "แบ่งใช้เอกสารกับ:",
		moveTeamspaceDocuments_security_change: "ระบุความปลอดภัยแบบกำหนดเองสำหรับไอเท็มที่เลือกไว้",
		moveTeamspaceDocuments_item_type_level: "คุณไม่สามารถเลือก ลบล้างความปลอดภัยของไอเท็มที่เลือกไว้ เนื่องจากคลาสของไอเท็มที่เลือกไว้ถูกกำหนดคอนฟิกไว้เพื่อใช้เฉพาะความปลอดภัยระดับคลาสเท่านั้น",
		moveTeamspaceDocuments_security_inherit: "สืบทอดความปลอดภัยจากโฟลเดอร์ปลายทาง",
		moveTeamspaceDocuments_file_info_text: "คุณสามารถย้ายไอเท็มจากหนึ่ง Teamspace ไปยัง Teamspace หรือโฟลเดอร์อื่น",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "คุณไม่มีสิทธิ์ที่เหมาะสมในการย้ายไอเท็มไปยังโฟลเดอร์ที่เลือกไว้",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "คุณไม่มีสิทธิ์ที่เหมาะสมในการย้ายไอเท็มจาก Teamspace",
		moveTeamspaceDocuments_move_mixed_items: "คุณไม่สามารถลบล้างความปลอดภัยของไอเท็มที่เลือกไว้ บางไอเท็มไม่ถูกจัดการโดย Teamspace คุณสามารถลบล้างเฉพาะความปลอดภัยของไอเท็มที่ถูกจัดการโดย  Teamspace เท่านั้น",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "คุณต้องระบุชื่อสำหรับ Teamspace",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "คุณต้องระบุชื่อสำหรับเท็มเพลต Teamspace",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "ชื่อ Teamspace ไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "ชื่อเท็มเพลตไม่สามารถมีอักขระใดๆ ต่อไปนี้: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "ลิงก์ไปยังเอกสาร",
		workspacebuilder_folders_makeDocCopy: "คัดลอกเอกสาร",
		workspacebuilder_folders_newfolder: "สร้างโฟลเดอร์",
		workspacebuilder_folders_local_drive: "จากไดเร็กทอรีโลคัล",
		workspacebuilder_folders_from_repo: "จากที่เก็บ",
		workspacebuilder_folders_add_doc: "เพิ่มเอกสาร",
		workspacebuilder_folders_grid_name: "ชื่อ",
		workspacebuilder_folders_props: "คุณสมบัติ",
		workspacebuilder_folders_remove: "ลบ",
		workspacebuilder_folders_delete: "ลบออก",
		workspacebuilder_folders_adddoc_local: "เพิ่มเอกสารจากโลคัลไดร์ฟ",
		workspacebuilder_folders_adddoc_repo: "เพิ่มเอกสารจากที่เก็บ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "ชื่อโฟลเดอร์ที่ระบุมีอยู่แล้ว ระบุชื่อโฟลเดอร์อื่น",

		workspacebuilder_classes_title: "เลือกคลาสหรือเท็มเพลตรายการ",
		workspacebuilder_classes_title_cm: "เลือกคลาส",
		workspacebuilder_classes_template_introText: "ระบุว่า Teamspace ที่สร้างขึ้นจากเท็มเพลตนี้จะใช้คลาสหรือเท็มเพลตรายการเพื่อเพิ่มเอกสารเข้ากับที่เก็บ ถ้าไม่มีการเลือกคลาส ผู้ใช้ Teamspace จะเห็นคลาสทั้งหมดที่ผู้ใช้สามารถเข้าถึง  ผู้ใช้สามารถแก้ไขรายการของคลาสหรือเท็มเพลตรายการใน Teamspace ได้ถ้าผู้ใช้มีสิทธิ์ที่เหมาะสม",
		workspacebuilder_classes_template_introText_cm: "เลือกคลาสที่ผู้ใช้สามารถใช้เพื่อเพิ่มเอกสารเข้ากับที่เก็บ ถ้าไม่มีการเลือกคลาส ผู้ใช้ Teamspace จะเห็นคลาสทั้งหมดที่ผู้ใช้สามารถเข้าถึง ผู้ใช้สามารถแก้ไขรายการของคลาสใน Teamspace ได้ถ้าผู้ใช้มีสิทธิ์ที่เหมาะสม",
		workspacebuilder_classes_instance_introText: "เลือกคลาสหรือเท็มเพลตรายการที่ผู้ใช้สามารถใช้เพื่อเพิ่มเอกสารเข้ากับที่เก็บ เมื่อไม่มีการเลือกคลาส ผู้ใช้ Teamspace จะเห็นคลาสทั้งหมดที่ผู้ใช้มีสิทธิ์ ผู้ใช้สามารถแก้ไขรายการของคลาสหรือเท็มเพลตรายการใน Teamspace ได้ถ้าผู้ใช้มีสิทธิ์ที่เหมาะสม",
		workspacebuilder_classes_instance_introText_cm: "เลือกคลาสที่ผู้ใช้สามารถใช้เพื่อเพิ่มเอกสารเข้ากับที่เก็บ เมื่อไม่มีการเลือกคลาส ผู้ใช้ Teamspace จะเห็นคลาสทั้งหมดที่ผู้ใช้มีสิทธิ์ ผู้ใช้สามารถแก้ไขรายการของคลาสใน Teamspace ได้ถ้าผู้ใช้มีสิทธิ์ที่เหมาะสม",
		workspacebuilder_classes_selection: "เลือกคลาส:",
		workspacebuilder_classes_list: "คลาสที่พร้อมใช้งาน:",
		workspacebuilder_classes_columns_default: "ดีฟอลต์",
		workspacebuilder_classes_columns_className: "ชื่อคลาส",
		workspacebuilder_classes_type_classes: "ใช้คลาสเพื่อเพิ่มเอกสาร",
		workspacebuilder_classes_type_classes_tooltip: "คลาสประกอบด้วยคุณสมบัติที่เหมาะสมที่เอกสารสามารถหาได้สำหรับใช้ในภายหลัง",
		workspacebuilder_classes_type_entryTemplates: "ใช้เท็มเพลตรายการเพื่อเพิ่มเอกสาร",
		workspacebuilder_classes_type_entryTemplates_tooltip: "เท็มเพลตรายการทำให้แน่ใจว่าข้อมูลที่มีให้สำหรับแต่ละเอกสารมีความถูกต้องและใช้ค่าที่ผู้ใช้กำหนดไว้ล่วงหน้า",
		workspacebuilder_classes_type_entryTemplates_columnName: "ชื่อเท็มเพลตรายการ",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "คำอธิบาย",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "คุณต้องเพิ่มเท็มเพลตรายการอย่างน้อยหนึ่งรายการเข้ากับ Teamspace",

		workspacebuilder_classes_new: "คลาสใหม่",
		workspacebuilder_classes_add: "เพิ่มคลาส",
		workspacebuilder_entryTemplate_add: "เพิ่มเท็มเพลตรายการ",
		workspacebuilder_add_list: "บวก",
		workspacebuilder_makeDefault_list: "ทำให้เป็นดีฟอลต์",
		workspacebuilder_removeDefault_list: "ลบค่าดีฟอลต์",

		workspacebuilder_roles_title: "เลือกบทบาท",
		workspacebuilder_roles_title_modify: "ปรับเปลี่ยนบทบาท",

		workspacebuilder_selection_moveup: "ย้ายขึ้น",
		workspacebuilder_selection_movedown: "ย้ายลง",
		workspacebuilder_selection_remove: "ลบ",
		workspacebuilder_selection_add: "บวก",
		workspacebuilder_selection_create_new_search: "การค้นหาใหม่...",
		workspacebuilder_selection_create_new_role: "บทบาทใหม่...",
		workspacebuilder_selection_make_role_available: "ทำให้พร้อมใช้งาน",
		workspacebuilder_selection_make_role_available_tooltip: "แบ่งใช้บทบาทที่เลือกกับเท็มเพลตอื่น คุณต้องกำหนดอย่างน้อยหนึ่งสิทธิ์ให้กับบทบาทที่ต้องการแบ่งใช้",

		workspacebuilder_navigation_next: "ถัดไป",
		workspacebuilder_navigation_finish: "เสร็จสิ้น",
		workspacebuilder_navigation_validate: "ตรวจสอบ",
		workspacebuilder_navigation_previous: "ก่อนหน้า",
		workspacebuilder_navigation_cancel: "ยกเลิก",
		workspacebuilder_navigation_customize: "ปรับตามความต้องการ",

		workspacebuilder_search_dialog_title: "การค้นหา",
		workspacebuilder_dialog_close: "ปิด",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "ความพร้อมใช้งานของเท็มเพลต:",
		workspace_properties_templateState_tooltip: "ทำให้เท็มเพลตไม่พร้อมใช้งานเพื่อป้องกันไม่ให้ผู้ใช้สร้าง Teamspace ที่ใช้เท็มเพลตนี้",
		workspace_properties_dialog_title: "คุณสมบัติของเท็มเพลต",
		workspace_properties_online_radio_option_label: "ทำให้พร้อมใช้งาน",
		workspace_properties_offline_radio_option_label: "ทำให้ไม่พร้อมใช้งาน",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "คุณต้องการยกเลิกโดยไม่บันทึกการเปลี่ยนแปลงของคุณหรือไม่?",
		workspacebuilder_cancel_confirmation_button: "ใช่",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "ไอเท็มใดๆ ที่ไม่ถูกต้องจะถูกลบออกจากเท็มเพลตและเท็มเพลตจะพร้อมใช้งานสำหรับผู้ใช้  คุณต้องการตรวจสอบความถูกต้องเท็มเพลต Teamspace นี้หรือไม่?",
		workspacebuilder_validate_confirmation_button: "ใช่",
		workspacebuilder_validate_confirmation_title: "ตรวจสอบ",

		/* Entry templates builder */
		entry_templates: "โปรแกรมจัดการเท็มเพลตรายการ",
		no_entry_templates_were_found: "ไม่มีเท็มเพลตรายการ",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "ตัวกรอง",

		/* Roleselector widget */
		role_selector_name: "บทบาท:",

		/* User Group picker widget */
		directory_label: "ไดเร็กทอรี:",
		scope_label: "ค้นหาสำหรับ:",
		name_starts_with_label: "ชื่อเริ่มต้นด้วย",
		name_contains_label: "ชื่อประกอบด้วย",
		display_name_contains_label: "ชื่อที่แสดงประกอบด้วย",
		starts_with_label: "เริ่มต้นด้วย:",
		available_label: "พร้อมใช้งาน:",
		available_heading: "มีอยู่",
		selected_label: "ที่เลือกไว้:",
		selected_heading: "ที่เลือกไว้",
		available_repositories_label: "ที่เก็บที่พร้อมใช้งาน",
		selected_repositories_label: "ที่เก็บที่เลือก",
		default_repository: "ที่เก็บดีฟอลต์:",
		default_repository_placeholder: "เลือกที่เก็บ",
		default_role_placeholder: "เลือกบทบาท",
		menu_label_placeholder: "เลือกหรือป้อนเลเบล",
		default_repository_hover: "ระบุที่เก็บที่ถูกเลือกโดยดีฟอลต์เมื่อผู้ใช้ล็อกอินเข้าสู่เว็บไคลเอ็นต์จากเดสก์ท็อปนี้<br><br><b>สิ่งสำคัญ:</b> คุณต้องเพิ่มที่เก็บเข้ากับเดสก์ท็อปรายการที่เก็บที่เลือกไว้ก่อนที่คุณจะสามารถระบุที่เก็บดีฟอลต์",
		default_repository_workflow_hover: "<b>โปรดจำไว้ว่า:</b> คุณสามารถกำหนดคอนฟิกพื้นที่แอ็พพลิเคชันสำหรับที่เก็บที่กำหนดคอนฟิกไว้สำหรับเดสก์ท็อปนี้เท่านั้น",
		remove_label: "ลบ",
		users_label: "ผู้ใช้",
		groups_label: "จัดกลุ่ม",
		user_or_group_name_label: "ชื่อผู้ใช้หรือกลุ่ม:",
		user_or_group_name_hover: "ป้อนชื่อของผู้ใช้หรือกลุ่มที่ถูกต้องบนที่เก็บ  ชื่อจะไม่ถูกตรวจสอบ",
		user: "ผู้ใช้",
		group: "Group",
		name: "ชื่อ:",
		displayName: "ชื่อแสดงผล",
		display_name: "ชื่อที่แสดง:",
		shortName: "ชื่อแบบสั้น:",
		distinguishedName: "ชื่อจำเพาะ:",
		search_tooltip: "การค้นหา",
		add_tooltip: "บวก",
		add_selected_tooltip: "เพิ่มเข้ากับรายการที่เลือก",
		remove_tooltip: "ลบ",
		remove_selected_tooltip: "ลบออกจากรายการที่เลือก",
		add_to_selected_tooltip: "บวก",
		remove_from_selected_tooltip: "ลบ",
		move_up_selected_tooltip: "ย้ายขึ้น",
		move_down_selected_tooltip: "ย้ายลง",
		advanced_search_options_tooltip: "ค่าติดตั้งขั้นสูง",
		move_right_selected_tooltip: "ย้ายไปยังเมนูย่อย",
		move_left_selected_tooltip: "ย้ายออกจากเมนูย่อย",
		add_separator: "เพิ่มตัวคั่น",
		menu_item_label: "เลเบลไอเท็มเมนู:",
		add_menu_label: "เพิ่มเมนูย่อย",
		menu_label: "เลเบลเมนูย่อย:",
		menu_label_info: "<b>สิ่งสำคัญ:</b> คุณต้องเพิ่มอย่างน้อยหนึ่งไอเท็มเมนูเข้ากับเมนูย่อยนี้ก่อนที่จะสามารถบันทึกเมนูนี้ได้",
		menu_dropdown_label: "เลเบลปุ่มดร็อปดาวน์:",
		menu_dropdown_label_info: "<b>สิ่งสำคัญ:</b> คุณต้องเพิ่มอย่างน้อยหนึ่งไอเท็มเมนูไปยังปุ่มดร็อปดาวน์นี้ก่อนที่คุณจะสามารถบันทึกแถบเครื่องมือนี้",
		no_item_found: "ไม่พบผลลัพธ์",
		me: "ฉัน",
		anyone: "ทุกคน",
		specific_users: "ผู้ใช้เฉพาะ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "การค้นหาส่งคืนมากกว่า {0} ผลลัพธ์ เปลี่ยนเกณฑ์ของคุณเพื่อจำกัดการค้นหาของคุณ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "ผลการค้นหามีไอเท็มที่เลือกแล้ว ไอเท็มดังกล่าวจะไม่แสดงขึ้นในผลการค้นหา",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "มีการส่งคืนมากกว่า {0} ผลลัพธ์ ใช้ตัวกรองเพื่อจำกัดผลลัพธ์",

		user_already_selected: "ผู้ใช้ที่ระบุถูกเลือกไว้แล้ว  ให้ระบุผู้ใช้อื่น",
		group_already_selected: "กลุ่มที่ระบุถูกเลือกไว้แล้ว  ให้ระบุกลุ่มอื่น",
		user_cannot_select_self: "คุณไม่สามารถเพิ่มตัวคุณเอง ให้ระบุผู้ใช้อื่น",

		/* Select User Group dialog */
		select_user_group_add_label: "บวก",
		select_user_group_cancel_label: "ยกเลิก",
		add_users_groups_label: "เพิ่มผู้ใช้และกลุ่ม",
		add_user_group_label: "เพิ่มผู้ใช้และกลุ่ม",
		add_users_label: "เพิ่มผู้ใช้",
		add_user_label: "เพิ่มผู้ใช้",
		add_label: "เพิ่ม:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "เอกสารต่อไปนี้มีการเปลี่ยนแปลงหมายเหตุประกอบที่ยังไม่ได้บันทึกไว้:",
		viewer_confirm_to_proceed: "คุณต้องการดำเนินการต่อและไม่บันทึกการเปลี่ยนแปลงหรือไม่?",
		viewer_warn_has_changes: "การเปลี่ยนแปลงที่ยังไม่ได้บันทึกของคุณจะถูกยกเลิก",
		viewer_warn_is_printing: "การพิมพ์ที่กำลังดำเนินการอาจไม่สมบูรณ์",
		viewer_warn_confirm_exit: "คุณต้องการออกใช่หรือไม่?",
		viewer_prompt_save_changes: "เอกสารต่อไปนี้มีการเปลี่ยนแปลงหมายเหตุประกอบที่ยังไม่ได้บันทึกไว้ซึ่งจะหายไป:<br>${0}<br><br>คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?",
		viewer_prompt_mergesplit_changes: "เอกสารต่อไปนี้มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึกไว้:<br>${0}<br><br>คุณต้องการดำเนินการต่อและไม่บันทึกการเปลี่ยนแปลงหรือไม่?",
		viewer_prompt_mergesplit_tab_changes: "เอกสารต่อไปนี้มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึกไว้:<br>${0}<br><br>คุณต้องการดำเนินการต่อและไม่บันทึกการเปลี่ยนแปลงหรือไม่?",
		viewer_new_item_name: "เอกสารใหม่",
		viewer_top_frame: "กรอบบนสุด:",
		viewer_bottom_frame: "กรอบล่างสุด:",
		viewer_left_frame: "กรอบซ้าย:",
		viewer_right_frame: "กรอบขวา:",
		viewer_viewer_frame: "กรอบวิวเวอร์:",
		viewer_properties_frame: "กรอบคุณสมบัติ:",
		viewer_comment_frame: "กรอบข้อคิดเห็น:",
		viewer_mergesplit_on: "ดู",
		viewer_mergesplit_off: "การผสานและการแยก",
		viewer_mergesplit_context_menu_move: "ย้าย",
		viewer_mergesplit_context_menu_rename: "เปลี่ยนชื่อ",
		viewer_mergesplit_context_menu_delete: "ลบออก",
		//move to new window
		viewer_move_to_new_window:"ย้ายไปยังหน้าต่างใหม่",
		viewer_continue:"ละทิ้งการเปลี่ยนแปลง",
		viewer_return_to_original_window:"กลับสู่หน้าต่างเดิม",
		viewer_switch_window:"สลับหน้าต่าง",
		viewer_prompt_lost_changes:"เอกสาร ${0} ถูกเปิดอยู่ในหน้าต่างในตอนนี้ เอกสารนั้นมีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก<br><br>คุณต้องการสลับไปยังหน้าต่างนั้นเพื่อบันทึกการเปลี่ยนแปลง หรือละทิ้งการเปลี่ยนแปลงนั้นและเปิดเอกสารในหน้าต่างนี้หรือไม่?",
		viewer_mergesplit_fallback_info: "คุณสามารถทำแอ็คชัน ผสานและแยก ได้บนเอกสารที่อยู่ในที่เก็บเดียวกัน",
		viewer_tabbed_layout: "ดูเป็นแท็บ",
		viewer_tabbed_layout_highcontrast: "แท็บ",
		viewer_split_vertical_layout: "แยกหน้าต่างย่อยบนและล่าง",
		viewer_split_vertical_layout_highcontrast: "ด้านบนและด้านล่าง",
		viewer_split_horizontal_layout: "แยกหน้าต่างย่อยซ้ายและขวา",
		viewer_split_horizontal_layout_highcontrast: "ด้านซ้ายและด้านขวา",
		viewer_add_vertical_layout: "สร้างแท็บใหม่ด้านล่าง",
		viewer_add_vertical_layout_highcontrast: "แท็บด้านล่าง",
		viewer_add_horizontal_layout: "สร้างแท็บใหม่ทางขวา",
		viewer_add_horizontal_layout_highcontrast: "แท็บด้านขวา",
		viewer_add_horizontal_layout_rtl: "สร้างแท็บใหม่ทางด้านซ้าย",
		viewer_add_horizontal_layout_rtl_highcontrast: "แท็บด้านซ้าย",
		viewer_split_properties_layout: "ดูคุณสมบัติ",
		viewer_split_comment_layout: "ดูข้อคิดเห็น",
		viewer_split_notelog_layout: "ดู Notelog",
		viewer_window_title: "${0} วิวเวอร์",
		viewer_next_hit: "ดูเอกสารถัดไปในรายการ",
		viewer_prev_hit: "ดูเอกสารก่อนหน้านี้ในรายการ",
		viewer_confrim_more_search_results: "ผลลัพธ์การค้นหาไม่มีเอกสารที่สามารถดูได้แล้ว  คุณต้องการดึงผลลัพธ์การค้นหาเพิ่มเติมหรือไม่?",
		viewer_confirm_get_next_page: "รายการของผลลัพธ์ไม่มีไอเท็มที่สามารถดูได้แล้ว  คุณต้องการดึงผลลัพธ์การค้นหาเพิ่มเติมหรือไม่?",
		viewer_confirm_get_next_item: "รายการของผลลัพธ์มีไอเท็มที่สามารถดูได้อีก  คุณต้องการดูไอเท็มถัดไปหรือไม่?",
		viewer_fn_annotation_tooltip: " สร้างขึ้นโดย: ${0},  สร้างขึ้นเมื่อ: ${1}",
		viewer_box_note_limitation: "คุณสามารถเปิดและดู Box Notes ในหน้าต่างแยกต่างหากเท่านั้น",
		viewer_click_to_open_box_note: "คลิกที่นี่เพื่อเปิด Box Note",
		viewer_box_view_expiring: "จำนวนครั้งสูงสุดที่คุณสามารถดูเอกสาร Box ของคุณ คือ 60 นาที เซสชันปัจจุบันจะหมดอายุลงใน ${0} นาที หากคุณต้องการทำงานกับเอกสารต่อ คุณต้องรีโหลดเอกสารตอนนี้ คุณต้องการรีโหลดเอกสารหรือไม่?",
		viewer_add_dialog_save_as_type: "บันทึกเป็นชนิด:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "เช็กเอาต์เกิดข้อขัดแย้ง",
		viewer_checkout_conflict: "เอกสารถูกเช็กเอาต์โดยผู้ใช้รายอื่น",
		viewer_checkout_confirm: "เวอร์ชันที่ใหม่กว่าของเอกสารนี้พร้อมสำหรับใช้งาน คุณต้องการดำเนินการเช็กเอาต์เอกสารหรือคุณต้องการรีโหลดวิวเวอร์ด้วยเวอร์ชันที่ใหม่กว่า? หากคุณเลือกรีโหลดวิวเวอร์ การเปลี่ยนแปลงที่ยังไม่ได้บันทึกไว้จะหายไป",
		viewer_checkout_continue: "ดำเนินการเช็กเอาต์",
		viewer_checkout_reload: "รีโหลด",
		viewer_status_building: "กำลังบิลด์เอกสาร...",
		viewer_status_adding: "กำลังเพิ่มเอกสาร...",
		viewer_status_checking_in: "กำลังเช็กอินเอกสาร...",

		/* Class Selector Widget */
		include_subclasses_label: "รวมคลาสย่อย",
		include_subclasses_label2: "ค้นหาในคลาสย่อยด้วย",
		include_subclasses_note: "(รวมถึงคลาสย่อย)",
		available_classes_col_header: "คลาสที่มีอยู่",
		single_class_label: "ค้นหาในคลาสเดียว",
		multiple_classes_label: "ค้นหาในหลายคลาส",
		multiple_classes_hover_help: "เลือกอ็อพชันนี้เพื่อค้นหามากกว่าหนึ่งคลาส คลาสสามารถเป็นคลาสหลักหรือคลาสย่อย ถ้าคุณเลือกอ็อพชันนี้ คุณจะเห็นเฉพาะคุณสมบัติและค่าที่มีร่วมกันกับคลาสที่เลือก",
		selected_classes_col_header: "คลาสที่เลือก",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(รวมถึงโฟลเดอร์ย่อย)",
		favorites_pseudo_node: "\\รายการโปรด\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "คุณต้องเลือกโฟลเดอร์ในที่เก็บเพื่อเพิ่มเอกสารเข้ากับ",
		no_permission_add_folder: "คุณไม่มีสิทธิ์ที่เหมาะสมเพื่อเพิ่มโฟลเดอร์เข้ากับโฟลเดอร์นี้",
		no_permission_add_document: "คุณไม่มีสิทธิ์ที่เหมาะสมเพื่อเพิ่มเอกสารเข้ากับโฟลเดอร์นี้",
		document_already_in_folder: "เอกสารมีอยู่แล้วในโฟลเดอร์นี้",
		cant_move_folder_onto_parent: "โฟลเดอร์มีอยู่แล้วในโฟลเดอร์นี้",
		cant_move_folder_onto_self: "คุณไม่สามารถย้ายโฟลเดอร์ไปยังตัวเองหรือโฟลเดอร์ย่อย",

		/* Workflow Widgets */
		process_application_space: "ประมวลผลพื้นที่แอ็พพลิเคชัน",
		process_role: "ประมวลผลบทบาท",
		process_inbasket: "ประมวลผล In-basket",
		process_worklist: "รายการงาน",
		process_step_processor: "ประมวลผลไอเท็มงาน",
		process_tracker: "ติดตามไอเท็มงาน",
		process_info_subject: "เรื่อง",
		process_info_stepname: "ขั้นตอน",
		process_info_is_locked: "ถูกล็อค",
		process_info_no_access: "ไม่มีการเข้าถึง",
		process_info_received_on: "ได้รับเมื่อ",
		process_info_overdue: "เกินกำหนด",
		process_info_reminder_sent: "ส่งการเตือน",
		process_info_locked_by_user: "ถูกล็อคโดย",
		process_work_object_number: "หมายเลขอ็อบเจ็กต์งาน",
		process_deadline: "วันที่ครบกำหนด:",
		process_launchedby: "เริ่มต้นโดย:",
		process_receivedon: "ได้รับเมื่อ:",
		process_step: "ขั้นตอน:",
		process_properties: "คุณสมบัติ",
		process_attachments: "สิ่งที่แนบมา",
		process_attachments_select: "เลือกสิ่งที่แนบ",
		process_finish_button_label: "หยุดการติดตาม",
		process_tracker_history: "ประวัติ",
		process_tracker_milestones: "ไมล์สโตน",
		process_tracker_milestone: "ช่วงเวลาสำคัญ",
		process_tracker_milestone_level: "ระดับ",
		process_tracker_milestones_empty: "ไม่มีไมล์สโตนที่จะแสดงผล",
		process_tracker_level_selector_label: "แสดงระดับของไมล์สโตนจนถึง:",
		process_tracker_map_selector_label: "กรองโดยแม็พ:",
		process_tracker_message: "ข้อความ",
		process_tracker_datereached: "ถึงวันที่",
		process_tracker_stepname: "ขั้นตอน",
		process_tracker_cycle: "รอบ",
		process_tracker_review_cycle: "ตรวจทานวงรอบ",
		process_tracker_participant: "ผู้เข้าร่วม",
		process_tracker_completed: "เสร็จสมบูรณ์",
		process_tracker_response: "การตอบกลับ",
		process_tracker_comments: "ข้อความคิดเห็น",
		process_tracker_delete_confirmation: "คุณต้องการหยุดการติดตามเวิร์กโฟลว์ต่อไปนี้หรือไม่: ${0}?",
		process_tracker_history_allmaps: "แผนที่ทั้งหมด",
		process_tracker_history_workflow: "เวิร์กโฟลว์",
		process_tracker_history_terminate: "ยุติ",
		process_tracker_history_malfunction: "ความผิดปกติ",
		process_filter_label: "ตัวกรอง",
		process_no_filter_summary: "ไม่มีตัวกรองที่ถูกนำมาใช้",
		process_filter_summary: "นำ ${0} ไปใช้",
		process_filter_reset_tooltip: "รีเซ็ตจะเคลียร์ตัวกรอง และรีเฟรช in-basket",
		process_attachments_add_folder: "เพิ่มโฟลเดอร์",
		process_attachments_add_doc: "เพิ่มเอกสาร",
		process_complete_button_label: "Complete",
		process_save_button_label: "บันทึก",
		process_launch_button_label: "เรียกทำงานเวิร์กโฟลว์",
		process_open_button_label: "เปิด",
		process_movetoinbox_button_label: "ย้ายไปยัง In-basket",
		process_return_button_label: "กลับไป",
		process_return_to_sender_tooltip: "ส่งคืนไอเท็มงานไปยัง in-basket ต้นทาง",
		process_move_to_inbasket_tooltip: "ย้ายไอเท็มงานไปยัง in-basket ส่วนตัวของคุณ",
		process_reassign_tooltip: "กำหนดไอเท็มงานให้กับเจ้าของอื่นอีกครั้ง",
		process_reassign_button_label: "กำหนดใหม่",
		process_preferences_button_label: "การกำหนดค่าตามความชอบ",
		process_manageroles_button_label: "จัดการบทบาท",
		process_manageroles_no_members: "ไม่มีสมาชิก",
		process_responses_button_label: "การตอบกลับเพิ่มเติม",
		process_morecustomaction_button_label: "แอ็คชันเพิ่มเติม",
		process_show_instructions: "ดูคำแนะนำ",
		process_hide_instructions: "ซ่อนคำแนะนำ",
		process_remove_attachment: "ลบ",
		process_close_window: "ไอเท็มงานถูกประมวลผล",
		process_delegate_flag: "ต้องการให้เจ้าของในปัจจุบันอนุมัติไอเท็มงานก่อนที่จะส่งไอเท็มงานไปยังขั้นตอนถัดไปในเวิร์กโฟลว์",
		process_paticipant_voting: "จำนวนของผู้เข้าร่วมที่ต้องการสำหรับการอนุมัติการลงคะแนน:",
		process_get_next_label: "ขอรับไอเท็มงานถัดไป",
		process_no_more_items: "ไม่มีไอเท็มเพิ่มเติมใน in-basket ที่จะประมวลผล",
		process_workflow_name: "ชื่อเวิร์กโฟลว์:",
		process_pattern_process_name: "ตรวจทานสำหรับ ${0}",
		process_instuctions: "คำแนะนำสำหรับผู้ตรวจทาน:",
		process_pattern_deadline: "วันที่ครบกำหนด:",
		process_reviewers: "ผู้ตรวจทาน:",
		process_approvals_required: "ต้องใช้การอนุมัติ:",
		process_on_reject: "หากไอเท็มงานถูกปฏิเสธ:",
		process_return_to_originator: "กลับมาที่ฉัน",
		process_return_to_previous_reviewer: "กลับไปยังผู้ตรวจทานก่อนหน้านี้",
		process_additional_settings: "ค่าติดตั้งเพิ่มเติม:",
		process_allow_reassign: "อนุญาตให้มีผู้ตรวจทานกำหนดตรวจทานนี้ใหม่",
		process_complete_notification: "แจ้งฉันเมื่อการตรวจทานเสร็จสมบูรณ์",
		process_workflow_name_hover_help: "ชื่อที่คุณระบุสำหรับไอเท็มงานควรทำให้ง่ายเพื่อให้ผู้ตรวจทานสามารถแยกระหว่างไอเท็มงานนี้และไอเท็มงานอื่นใน in-basket",
		process_approvals_required_hover_help: "หากไอเท็มงานได้รับการตรวจทานโดยหลายคนพร้อมกัน คุณสามารถระบุจำนวนการอนุมัติที่ต้องการเพื่อให้ไอเท็มงานเสร็จสมบูรณ์",
		process_approval_options: "อ็อพชันการอนุมัติ",
		process_all: "All",
		process_at_least: "อย่างน้อย",
		process_at_least_by_count: "อย่างน้อย ${0} คนของผู้ตรวจทาน",
		process_at_least_by_percentage: "อย่างน้อย ${0}% ของผู้ตรวจทาน",
		process_comments: "ข้อคิดเห็น:",
		process_review_step_comments_hover_help: "หากคุณปฏิเสธไอเท็มงาน คุณต้องให้ข้อมูลว่าทำไมคุณจึงปฏิเสธ ข้อมูลนี้ทำให้ผู้ริเริ่มของไอเท็มงานหรือผู้ตรวจทานก่อนหน้านี้ทราบสิ่งที่คุณกังวล",
		process_rework_step_comments_hover_help: "คุณต้องให้ข้อมูลเกี่ยวกับวิธีที่ระบุข้อคิดเห็น ถ้าคุณไม่เห็นด้วยกับข้อคิดเห็น ให้ระบุเหตุผลสำหรับการตัดสินใจของคุณ",
		process_rejection_reason: "เหตุผลสำหรับการปฏิเสธ:",
		process_summary: "ข้อสรุป",
		process_sequential_review: "การตรวจทานแบบเรียงลำดับ",
		process_sequential_review_description: "ไอเท็มงานจะถูกตรวจทานโดยผู้ตรวจทานแต่ละรายตามลำดับ",
		process_parallel_review: "การตรวจทานแบบขนาน",
		process_parallel_review_description: "ไอเท็มงานจะถูกตรวจทานโดยผู้ตรวจทานทั้งหมดพร้อมกัน",
		process_parallel_approvals_required_error: "จำนวนการอนุมัติที่ต้องการนั้นสูงเกินไป ระบุผู้ตรวจทาน ${0} รายเท่านั้น",
		process_parallel_invalid_required_approvals_count: "ค่าไม่ถูกต้อง ค่าต้องเป็น ${0}",
		process_subject_prompt: "ป้อนหัวเรื่อง",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "ไอเท็มงาน:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "คุณสมบัติมุมมอง",
		view_permissions_level: "สิทธิ์ดู",
		view_content_level: "ดูเอกสาร",
		link_level: "ลิงก์",
		modify_properties_level: "แก้ไขคุณสมบัติ",
		modify_content_level: "แก้ไขเอกสาร",
		minor_version_level: "แก้ไขเวอร์ชันรอง",
		major_version_level: "แก้ไขเวอร์ชันหลัก",
		create_instance_level: "สร้างอินสแตนซ์",
		delete_document_level: "ลบเอกสาร",
		delete_item_level: "ลบไอเท็ม",
		modify_document_permissions_level: "จัดการสิทธิ์",
		modify_folder_permissions_level: "จัดการสิทธิ์",
		modify_owner_level: "ปรับเปลี่ยนเจ้าของ",
		delete_folder_level: "ลบโฟลเดอร์",
		file_in_folder_level: "เพิ่มเข้ากับโฟลเดอร์",
		create_subfolder_level: "สร้างโฟลเดอร์ย่อย",
		link_item_level: "ทำหมายเหตุประกอบเอกสาร เพิ่มเข้ากับโฟลเดอร์", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>เฉพาะเอกสาร: เพิ่มหมายเหตุประกอบเข้ากับเอกสาร หรือลบหมายเหตุประกอบออกจากเอกสาร</li><li>เฉพาะโฟลเดอร์: เพิ่มไอเท็มเข้ากับโฟลเดอร์หรือลบไอเท็มออจากโฟลเดอร์</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "ลบออก",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "เจ้าของ",
		/* previously \"Full control\" */
		edit_privilege: "ผู้เขียน",
		/* previously \"Edit\" */
		read_only_privilege: "ผู้อ่าน",
		/* previously \"Read only\" */
		no_access_privilege: "ไม่มีการเข้าถึง",
		share_with_label: "แบ่งใช้กับ:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "ฉันเท่านั้น",
		public_label: "ทุกคน",
		members_label: "ผู้ใช้และกลุ่มเฉพาะ",
		select_members_label: "เลือก...",
		select_user_group_label: "เลือกผู้ใช้...",
		select_users_groups_label: "เลือกผู้ใช้และกลุ่ม...",
		select_user_label: "เลือกผู้ใช้...",
		propagation_label: "การเผยแพร่:",
		access_label: "การอนุญาต:",
		add_permission_add_label: "เพิ่ม",
		security_policy_label: "นโยบายความปลอดภัย:",
		includes_inherited_access: "รวมเข้าถึงที่ถูกสืบทอด",
		customize_access_for_label: "ปรับแต่งการเข้าถึงสำหรับ:",
		customize: "ปรับตามความต้องการ",
		direct: "ไอเท็มนี้",
		singleLevelInheritance: "หนึ่งระดับ",
		infiniteLevelInheritance: "ทุกระดับ",
		inherited: "สืบทอด",
		direct_hover_help: "ค่าติดตั้งการรักษาความปลอดภัยใช้กับไอเท็มที่เลือก",
		singleLevelInheritance_hover_help: "สิทธิ์เหล่านี้ใช้กับไอเท็มนี้ และชายด์ที่ถูกกำหนดค่าเพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็มนี้",
		infiniteLevelInheritance_hover_help: "สิทธิ์เหล่านี้ใช้กับไอเท็มนี้ และลำดับถัดมาที่ถูกกำหนดค่าเพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็มนี้",
		inherited_hover_help: "สิทธิ์เหล่านี้สืบทอดจากพาเรนต์",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "สิทธิ์เหล่านี้สำหรับ ${0} ใช้กับไอเท็มนี้ และชายด์ที่กำหนดค่าเพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็มนี้",
		infiniteLevelInheritance_member_hover_help: "สิทธิ์เหล่านี้สำหรับ ${0} ใช้กับไอเท็มนี้ และลำดับถัดมาทั้งหมดที่กำหนดค่าเพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็มนี้",
		inherited_member_hover_help: "สิทธิ์เหล่านี้สำหรับ ${0} ถูกสืบทอดจากพาเรนต์",
		partial_hover_help: "ค่าติดตั้งการรักษาความปลอดภัยไอเท็มถูกเปลี่ยนโดยผู้ใช้",
		allow: "อนุญาต",
		deny: "ปฏิเสธ",
		basic: "พื้นฐาน",
		advanced: "ขั้นสูง",
		permission_type: "ตั้งการเข้าถึงสำหรับ:",
		share_with_hover_help: "ไอเท็มถูกแบ่งใช้กับผู้ใช้และกลุ่มต่อไปนี้อยู่ในขณะนี้",
		direct_security_policy_hover_help: "ค่าติดตั้งของนโยบายความปลอดภัยนี้อนุญาตให้คุณเปลี่ยนการรักษาความปลอดภัยของไอเท็มนี้",
		security_policy_hover_help: "การรักษาความปลอดภัยของไอเท็มนี้อ่านได้อย่างเดียว เนื่องจากค่าติดตั้งของนโยบายความปลอดภัยนี้ป้องกันไม่ให้คุณเปลี่ยนแปลงการรักษาความปลอดภัยของไอเท็มนี้",
		security_remove: "ไม่มีสิทธิ์",
		pseudo_group_label: "แอคเคาต์นามแฝง",
		marking_hover_help: "ความปลอดภัยของไอเท็มนี้ถูกควบคุมโดยชุดการทำเครื่องหมาย ซึ่งสามารถมีผลกับความปลอดภัยของไอเท็ม",
		note_label: "สิ่งสำคัญ:",
		marking_text: "ไอเท็มนี้ถูกทำเครื่องหมายเป็น: ${0} ไอเท็มอาจมีข้อจำกัดเกี่ยวกับการรักษาความปลอดภัยเพิ่มเติม",
		authenticated_users: "ผู้ใช้ที่ได้รับการพิสูจน์ตัวตน",
		realm_users: "${0} ผู้ใช้",
		denyAll: "ปฏิเสธทั้งหมด",
		allowAll: "อนุญาตทั้งหมด",
		remove_direct_text: "เมื่อคุณบันทึกการเปลี่ยนแปลงของคุณ สิทธิ์สำหรับสมาชิกนี้จะถูกลบออกจากไอเท็ม",
		remove_single_inheritance_text: "เมื่อคุณบันทึกการเปลี่ยนแปลงของคุณ สิทธิ์สำหรับสมาชิกจะถูกลบออกจากไอเท็ม และออกจาก <br>ชายน์ที่กำหนดค่าไว้เพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็ม<p>คุณต้องการทำต่อหรือไม่?",
		remove_infinite_inheritance_text: "เมื่อคุณบันทึกการเปลี่ยนแปลงของคุณ สิทธิ์สำหรับสมาชิกจะถูกลบออกจากไอเท็ม และออกจาก <br>ลำดับถัดมาที่กำหนดค่าไว้เพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็ม<p>คุณต้องการทำต่อหรือไม่?",
		remove_inheritance_text: "เมื่อคุณบันทึกการเปลี่ยนแปลงของคุณ สิทธิ์สำหรับสมาชิกจะถูกลบออกจากไอเท็ม และออกจาก <br>ลำดับถัดมาที่กำหนดค่าไว้เพื่อสืบทอดการรักษาความปลอดภัยจากไอเท็ม เฉพาะสิทธิ์ที่ <br>สืบทอดโดยไอเท็มนี้เท่านั้นที่จะเหลืออยู่<p>คุณต้องการทำต่อหรือไม่?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "ลบสิทธิ์เหล่านี้สำหรับ ${0}",

		security_proxy_text: "การรักษาความปลอดภัยของไอเท็มนี้อ่านได้อย่างเดียว",
		security_proxy_declared_text: "การรักษาความปลอดภัยของไอเท็มนี้อ่านได้อย่างเดียวเนื่องจากถูกกำหนดโดยพร็อกซีการรักษาความปลอดภัย",
		security_proxy_hover_help: "การรักษาความปลอดภัยของไอเท็มนี้ถูกควบคุมโดยการรักษาความปลอดภัยที่ตั้งค่าไว้ในอ็อบเจ็กต์อื่นในที่เก็บ",
		add_permissions_label: "เพิ่มสิทธิ์",
		permission_propagation_direct: "โฟลเดอร์นี้เท่านั้น",
		permission_propagation_onelevel: "โฟลเดอร์นี้และระดับล่างหนึ่งระดับ",
		permission_propagation_alllevels: "โฟลเดอร์นี้และระดับล่างทุกระดับ",
		document_propagation_label: "ตั้งการเข้าถึงสำหรับ:",
		document_propagation_FOLDER: "โฟลเดอร์",
		document_propagation_DOCUMENT: "เอกสาร",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "แหล่งการพิสูจน์ตัวตน:",

		/* Versions Widget */
		object_versions_selector_label: "เวอร์ชัน:",
		object_versions_label: "เวอร์ชัน",
		object_type_document_label: "เอกสาร:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "โฟลเดอร์ถูกเก็บเป็นไฟล์ใน",
		folders_filed_in_folder_col_hdr: "โฟลเดอร์",
		folders_filed_in_path_col_hdr: "พาธ",
		folders_filed_in_containment_name_col_hdr: "ชื่อ Containment",
		folders_filed_in_creator_col_hdr: "สร้างโดย",
		folders_filed_in_date_created_col_hdr: "สร้างเมื่อ",

		/* Parent Documents */
		properties_parent_documents_label: "เอกสารพาเรนต์",

		/* Select object dialog */
		select_object_title: "เลือกรายการ",
		select_object_breadCrumb_version_prefix: "เวอร์ชันสำหรับ: ",
		show_versions_label: "แสดงเวอร์ชัน",
		use_current_version_label: "ใช้เวอร์ชันปัจจุบัน",
		use_released_version_label: "ใช้รีลีสที่ถูกรีลีส",

		/* Select content class dialog */
		select_class: "เลือกคลาส",
		/* Select Search dialog */
		select_search: "เลือกการค้นหา",

		/* Show hyperlink dialog */
		show_hyperlink_title: "ดูลิงก์",
		show_hyperlink_intro: "คุณสามารถคัดลอกและวางลิงก์ลงในอีเมล, chats และเว็บเพจ ถ้ามีเวอร์ชันของไอเท็มจำนวนมาก ให้ระบุเวอร์ชันที่คุณต้องการลิงก์",
		show_hyperlink_intro_no_version_select: "คุณสามารถคัดลอกและวางลิงก์ลงในอีเมล, chats และเว็บเพจ",
		show_text_label: "เวอร์ชัน:",
		released_button_label: "รีลีส",
		current_button_label: "ปัจจุบัน",
		select_button_label: "เวอร์ชันที่ระบุ",
		show_hyperlink_no_released_version_msg: "ไม่มีเวอร์ชันที่รีลีสของเอกสารนี้อยู่",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "เรียกทำงานเวิร์กโฟลว์",
		edit_workflow_title: "คุณสมบัติไอเท็มงาน",
		start_workflow_intro: "เรียกทำงานเวิร์กโฟลว์เพื่อประมวลผลไอเท็มที่เลือก ถ้าคุณต้องการกำหนดไอเท็มงานให้กับผู้ใช้เฉพาะ ให้ระบุเจ้าของ",
		edit_workflow_intro: "คุณสามารถแก้ไขคุณสมบัติของไอเท็มงานที่เลือก ถ้าคุณต้องการกำหนดไอเท็มงานให้กับผู้ใช้อื่นอีกครั้ง ให้ระบุเจ้าของ",
		workflow_field_label: "เวิร์กโฟลว์:",
		priority_field_label: "ลำดับความสำคัญ",
		owner_field_label: "เจ้าของ",
		start_button_label: "เริ่มต้น",
		save_button_label: "บันทึก",
		owner_value_hint: "ป้อนสตริงตัวอักษรผสมตัวเลขที่มีจำนวนไม่เกิน 32 อักขระ สตริงสามารถมีเฉพาะช่องว่าง หรืออักขระต่อไปนี้: a-z, A-Z, 0-9 และ ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "อิลิเมนต์เนื้อหา",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "ค่าไม่ถูกต้อง ค่าสามารถมีเฉพาะช่องว่างหรืออักขระใดๆ ต่อไปนี้: a-z, A-Z, 0-9 และ ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "ป้อนค่าจาก 1 ถึง 32000 เพื่อระบุความสำคัญของไอเท็มงาน",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "ค่าไม่ถูกต้อง ลำดับความสำคัญต้องเป็นค่าจาก 1 ถึง 32000",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "ชื่อเวิร์กโฟลว์มีอยู่แล้ว",

		/* Suspend work items in workflow */
		suspend_workitems_title: "ระงับจากเวิร์กโฟลว์",
		suspend_workitems_intro: "เมื่อคุณหยุดไอเท็มงานจากเวิร์กโฟลว์ไว้ชั่วคราว ไอเท็มงานจะไม่สามารถประมวลผลได้จนกว่าจะถูกเรียกคืน",
		suspend_workitems_options_label: "ระงับไอเท็มงานที่เลือก:",
		suspend_until_resume_label: "จนกว่าจะถูกเรียกคืนแบบแมนนวล",
		suspend_until_date_label: "จนกระทั่ง",
		suspend_for_duration_label: "สำหรับ",
		suspend_for_duration_hours: "ชั่วโมง",
		suspend_for_duration_days: "วัน",
		suspend_for_duration_weeks: "สัปดาห์",
		suspend_for_duration_months: "เดือน",
		suspend_for_duration_years: "ปี",
		suspend_button_label: "ระงับ",
		suspend_duration_value_hint: "ป้อนค่าสำหรับช่วงเวลาในช่วง 1 - 99",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "ค่าไม่ถูกต้อง ค่าต้องอยู่ในช่วง 1 - 99",

		/* Remove from workflow */
		remove_workflow_title: "ลบจากเวิร์กโฟลว์",
		remove_workflow_confirmation: "คุณแน่ใจหรือไม่ว่าต้องการลบไอเท็มที่เลือกออกจากเวิร์กโฟลว์?<br>${0} ไอเท็มที่ถูกเลือก",
		remove_workflow_button_label: "ลบ",

		/* Unfile dialog */
		unfile_dialog_title: "ลบออกจากโฟลเดอร์",
		unfile_dialog_remove_from_folder_label: "ลบออกจาก:",
		unfile_dialog_info_text: "คุณสามารถลบไอเท็มจากโฟลเดอร์ แต่ การลบไอเท็มจากโฟลเดอร์ทั้งหมดจะไม่ลบไอเท็มจากที่เก็บ คุณยังสามารถดึงไอเท็มได้โดยการรันการค้นหา เฉพาะโฟลเดอร์ที่คุณมีสิทธิ์ดูเท่านั้นที่จะแสดงในรายการนี้",
		unfile_dialog_select_all: "เลือกทั้งหมด",
		unfile_dialog_deselect_all: "ลบทั้งหมด",
		unfile_dialog_remove_button_label: "ลบ",
		unfile_dialog_select_folder_col_hdr: "เลือกโฟลเดอร์",
		unfile_dialog_folder_col_hdr: "โฟลเดอร์",
		unfile_dialog_path_col_hdr: "พาธ",
		unfile_dialog_not_filed_msg: "ไอเท็มนี้ไม่อยู่ในโฟลเดอร์ใดๆ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "คุณไม่มีสิทธิ์ที่เหมาะสมเพื่อลบไอเท็มนี้ออกจากโฟลเดอร์ใดๆ ที่มีไอเท็มนี้",
		unfile_dialog_folder_not_selectable_tooltip: "คุณไม่มีสิทธิ์ที่เหมาะสมที่จะลบไอเท็มนี้ออกจากโฟลเดอร์นี้",
		unfile_multi_prompt: "คุณแน่ใจหรือไม่ว่าต้องการลบไอเท็มที่เลือกออกจากโฟลเดอร์ ${0} ?",
		unfile_large_number_items_confirmation_question: "คุณเลือก ${0} ที่จะลบออกจากโฟลเดอร์ ${1}<br/>การลบไอเท็มจำนวนมากออกจากโฟลเดอร์อาจใช้เวลานาน<br/>คุณต้องการทำต่อหรือไม่?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "เปิด",
		move_to_folder_title: "ย้ายไปยังโฟลเดอร์",
		move_to_folder_button_caption: "ย้าย",
		move_to_folder_label: "ย้ายไปยัง:",
		add_to_folder_title: "เพิ่มในโฟลเดอร์",
		add_to_folder_button_caption: "บวก",
		add_to_folder_label: "เพิ่มเข้ากับ:",
		copy_to_folder_title: "คัดลอกไปยังโฟลเดอร์",
		copy_to_folder_button_caption: "คัดลอก",
		copy_to_folder_label: "คัดลอกไปยัง:",
		copy_to_folder_delete_label: "หลังจากคัดลอกเสร็จสิ้น, ลบไอเท็มที่เลือกจาก Box.",
		move_from_folder_label: "ย้ายจาก:",
		move_file_info_text: "คุณสามารถย้ายไอเท็มจากโฟลเดอร์หนึ่งไปยังโฟลเดอร์อื่น",
		move_folder_info_text: "คุณสามารถย้ายโฟลเดอร์จากโฟลเดอร์พาเรนต์หนึงไปยังโฟลเดอร์อื่น",
		add_doc_to_folder_info_text: "คุณสามารถเพิ่มไอเท็มเข้ากับโฟลเดอร์ได้มากกว่าหนึ่งโฟลเดอร์ ถ้าไอเท็มมีอยู่ในโฟลเดอร์อยู่แล้ว ไอเท็มจะยังคงอยู่ในโฟลเดอร์นั้นและถูกเพิ่มเข้ากับโฟลเดอร์เพิ่มเติมที่คุณระบุ",
		copy_doc_to_folder_info_text: "คุณสามารถคัดลอกไอเท็มไปยังโฟลเดอร์",
		box_copy: "คัดลอก Box",
		box_copy__button_caption: "คัดลอก",
		box_copy_to_info_text: "เลือกที่เก็บ และโฟลเดอร์ซึ่งคุณต้องการคัดลอกไอเท็มที่เลือกของคุณจาก Box",
		box_copy_from_info_text: "เลือกที่เก็บ และโฟลเดอร์ซึ่งคุณต้องการคัดลอกไอเท็มที่เลือกของคุณจาก Box",
		box_copy_version_info_text: "เพื่อเพิ่มเอกสารใหม่, เลือกที่เก็บและโฟลเดอร์ เพื่อเซ็กอินเวอร์ชันใหม่, เลือกที่เก็บและเอกสาร",
		admin_box_copy: "คัดลอก Box",
		admin_box_copy_hover: "อ็อพชันนี้อนุญาตให้ผู้ใช้คัดลอกเอกสารไปยัง Box",

		no_permission_to_copy_version_msg: "คุณไม่สามารถคัดลอกเอกสารจาก Box เป็นเวอร์ชันใหม่ของเอกสารที่ถูกเลือก คุณอาจไม่มีสิทธิที่เหมาะสมในการแก้ไขเอกสารที่ถูกเลือก หรือเอกสารที่ถูกเลือกเช็คเอาต์แล้วโดยคนอื่น",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "คุณไม่มีสิทธิ์ที่เหมาะสมเพื่อลบไอเท็มนี้ออกจากโฟลเดอร์ใดๆ ที่มีไอเท็มนี้",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "คุณไม่มีสิทธิ์ที่เหมาะสมที่จะลบไอเท็มนี้ออกจากโฟลเดอร์นี้",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "ไอเท็มนี้ไม่สามารถย้ายได้ เนื่องจากไม่ได้อยู่ในโฟลเดอร์ใดๆ ให้เลือกไอเท็มอื่น",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "เรียกทำงานเวิร์กโฟลว์",
		subscriptions_dialog_available_items_label: "ไอเท็มที่พร้อมใช้งาน:",
		subscriptions_dialog_info_text: "ระบุเวิร์กโฟลว์ที่ต้องการเรียกทำงาน",
		subscriptions_dialog_select_button_label: "ตกลง",
		subscriptions_dialog_name_col_hdr: "ชื่อ",
		subscriptions_dialog_desc_col_hdr: "คำอธิบาย",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "จัดการบทบาท",
		manageroles_dialog_info_text: "คุณสามารถปรับเปลี่ยนรายการของผู้ใช้สำหรับแต่ละบทบาทที่เชื่อมโยงกับพื้นที่แอ็พพลิเคชันกระบวนการนี้",
		manageroles_dialog_members_label: "สมาชิก",
		manageroles_dialog_roles_label: "บทบาท",
		manageroles_dialog_add_button_label: "เพิ่มผู้ใช้และกลุ่ม",
		manageroles_dialog_remove_button_label: "ลบ",
		manageroles_dialog_save_button_label: "บันทึก",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "ไม่มีเวิร์กโฟลว์ที่เชื่อมโยงกับไอเท็มนี้",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "การกำหนดค่าตามความชอบเวิร์กโฟลว์",
		workflow_pref_dialog_info_text: "ระบุเหตุการณ์เวิร์กโฟลว์ที่คุณต้องการรับการแจ้งเตือนทางอีเมล คุณสามารถเปิดใช้อ็อพชันเพื่อจัดเส้นทางงานของคุณไปยังบุคคลอื่นได้โดยเลือกผู้ใช้ที่จะมอบหมายงาน",

		workflow_pref_general: "General",
		workflow_pref_email_address: "อีเมลแอดเดรส",
		workflow_pref_email_address_hover: "ระบุอีเมลแอดเดรสที่คุณต้องการรับการแจ้งเตือนเวิร์กโฟลว์",
		workflow_pref_preferred_locale: "ภาษา",
		workflow_pref_preferred_locale_hover: "ระบุภาษาที่การแจ้งเตือนทางอีเมลแสดงผล",

		workflow_pref_work_item_notice: "การแจ้งเตือนไอเท็มงาน",
		workflow_pref_step_new_assignment: "ไอเท็มงานใหม่ถูกมอบหมายให้ฉัน",
		workflow_pref_step_new_assignment_hover: "แจ้งฉันเมื่อฉันได้รับไอเท็มงานใหม่",
		workflow_pref_step_expired_deadline: "วันครบกำหนดของไอเท็มงานผ่านไปแล้ว",
		workflow_pref_step_expired_deadline_hover: "แจ้งฉันเมื่อฉันพลาดวันครบกำหนดของไอเท็มงาน",
		workflow_pref_step_reminders: "ใกล้ถึงวันครบกำหนดของไอเท็มงานแล้ว",
		workflow_pref_step_reminders_hover: "เตือนฉันเกี่ยวกับไอเท็มงานเมื่อใกล้ถึงวันครบกำหนด",

		workflow_pref_originator_notice: "แจ้งเตือนผู้ริเริ่ม",
		workflow_pref_milestone_reached: "ถึงไมล์สโตนแล้ว",
		workflow_pref_milestone_reached_hover: "แจ้งฉันเมื่อถึงไมล์สโตนบนเวิร์กโฟลว์ที่ฉันเริ่มต้น",

		workflow_pref_tracker_notice: "แจ้งเตือนตัวติดตามเวิร์กโฟลว์",
		workflow_pref_tracker_new_assignment: "ไอเท็มตัวติดตามใหม่ถูกกำหนดให้ฉัน",
		workflow_pref_tracker_new_assignment_hover: "แจ้งฉันเมื่อเวิร์กโฟลว์ที่ฉันติดตามถูกเรียกใช้",
		workflow_pref_tracker_deadline_reminders: "ใกล้วันครบกำหนดของเวิร์กโฟลว์",
		workflow_pref_tracker_deadline_reminders_hover: "เตือนฉันเกี่ยวกับเวิร์กโฟลว์เมื่อใกล้ถึงวันครบกำหนดเวิร์กโฟลว์",
		workflow_pref_tracker_deadline_expired: "ผ่านวันครบกำหนดเวิร์กโฟลว์แล้ว",
		workflow_pref_tracker_deadline_expired_hover: "แจ้งฉันเมื่อผ่านวันครบกำหนดเวิร์กโฟลว์แล้ว",
		workflow_pref_tracker_exception: "เกิดข้อผิดพลาดของเวิร์กโฟลว์",
		workflow_pref_tracker_exception_hover: "แจ้งฉันเมื่อเกิดข้อยกเว้นหรือข้อผิดพลาดของเวิร์กโฟลว์",
		workflow_pref_tracker_expired_deadline: "ผ่านวันครบกำหนดขั้นตอนไปแล้ว",
		workflow_pref_tracker_expired_deadline_hover: "แจ้งฉันเมื่อผ่านวันครบกำหนดขั้นตอนบนเวิร์กโฟลว์ที่ฉันกำลังติดตาม",
		workflow_pref_tracker_milestone_reached: "ถึงไมล์สโตนแล้ว",
		workflow_pref_tracker_milestone_reached_hover: "แจ้งฉันเมื่อถึงไมล์สโตนบนเวิร์กโฟลว์ที่ฉันกำลังติดตามอยู่",

		workflow_pref_out_notice: "ไม่อยู่ในออฟฟิศ",
		workflow_pref_proxy_user: "มอบหมายงานให้กับ",
		workflow_pref_proxy_user_hover: "ใช้อ็อพชันนี้เพื่อจัดเส้นทางงานของคุณไปให้ผู้ใช้อื่นโดยอัตโนมัติ ตัวอย่างเช่น เมื่อคุณไม่อยู่ในออฟฟิศหรือพักร้อน",
		workflow_pref_workflow: "เวิร์กโฟลว์",
		workflow_pref_on: "เปิด",
		workflow_pref_off: "ปิด",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "เรียกทำงานเวิร์กโฟลว์",
		transfered_workflows_dialog_info_text: "เลือกเวิร์กโฟลว์ที่จะเรียกใช้",
		transfered_workflows_dialog_available_items_label: "ไอเท็มที่พร้อมใช้งาน:",
		transfered_workflows_dialog_select_button_label: "เรียกใช้",
		transfered_workflows_dialog_name_col_hdr: "ชื่อ",
		transfered_workflows_dialog_no_item_found: "ไม่พบเวิร์กโฟลว์ที่ถูกถ่ายโอน",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "ถ่ายโอนเวิร์กโฟลว์",
		transfer_workflow_dialog_info_text: "เลือกเวิร์กโฟลว์เพื่อโอนย้ายไปยังระบบเวิร์กโฟลว์",
		transfer_workflow_dialog_use: "ใช้ชื่อเวิร์กโฟลว์นี้",
		transfer_workflow_dialog_use_another: "ใช้ชื่อเวิร์กโฟลว์อื่น",
		transfer_workflow_dialog_in_use: "ชื่อเวิร์กโฟลว์คือ: ",
		transfer_workflow_dialog_transfer_button_label: "ถ่ายโอน",
		transfer_workflow_dialog_no_items_found: "ไม่พบเวิร์กโฟลว์ที่ถูกถ่ายโอน",
		transfer_workflow_dialog_use_hover: "ระบุชื่อเวิร์กโฟลว์ปัจจุบันจากนิยามเวิร์กโฟลว์",
		transfer_workflow_dialog_another_hover: "ระบุชื่อเวิร์กโฟลว์อื่นหรือใช้ชื่อเวิร์กโฟลว์ที่โอนย้ายอีกครั้ง",

		/*Search In control*/
		search_in_title: "ค้นหาใน:",
		search_in_teamspaces: "Teamspace",
		search_in_repositories: "ที่เก็บ",
		search_in_thisteamspaces: "Teamspace นี้",

		ajaxViewer_save: "บันทึกหมายเหตุประกอบ",
		ajaxViewer_print: "ตัวอย่างก่อนพิมพ์",
		ajaxViewer_firstPage: "เพจแรก",
		ajaxViewer_previousPage: "เพจก่อนหน้า",
		ajaxViewer_nextPage: "เพจถัดไป",
		ajaxViewer_lastPage: "เพจสุดท้าย",
		ajaxViewer_unknownPageCount: "1 จาก ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} จาก ${1}",
		ajaxViewer_zoomOut: "ย่อ",
		ajaxViewer_zoomIn: "ขยาย",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "พอดีกับความกว้าง",
		ajaxViewer_fitHeight: "พอดีกับความสูง",
		ajaxViewer_fitPage: "พอดีกับหน้า",
		ajaxViewer_rotate270: "หมุน 270 องศา",
		ajaxViewer_rotate90: "หมุน 90 องศา",
		ajaxViewer_rotate180: "หมุน 180 องศา",
		ajaxViewer_darken: "มืดลง",
		ajaxViewer_lighten: "สว่างขึ้น",
		ajaxViewer_lessContrast: "ลดความคมชัด",
		ajaxViewer_moreContrast: "เพิ่มความคมชัด",
		ajaxViewer_invert: "กลับด้าน",
		ajaxViewer_createHighlight: "ไฮไลต์",
		ajaxViewer_createNote: "คำอธิบายประกอบ",
		ajaxViewer_editAnnotation: "แก้ไขคุณสมบัติของหมายเหตุประกอบ",
		ajaxViewer_deleteAnnotation: "ลบหมายเหตุประกอบ",
		ajaxViewer_editAnnotationTitle: "แก้ไขคุณสมบัติของหมายเหตุประกอบ",
		printableView_print: "พิมพ์",
		printableView_close: "ปิด",

		search_results_dropdown_button: "แสดงผลลัพธ์",
		search_results_columns_label: "ค้นหาการแสดงผลลัพธ์",
		search_results_columns_description: "เลือกคุณสมบัติที่คุณต้องการแสดงในผลลัพธ์การค้นหา",
		search_results_sortby_label: "เรียงลำดับตาม:",
		search_results_order_label: "ลำดับการเรียงลำดับ:",
		search_results_accending_label: "จากน้อยไปมาก",
		search_results_descending_label: "จากมากไปน้อย",
		search_results_available_properties: "มีอยู่",
		search_results_selected_properties: "ที่เลือกไว้",
		search_rank_property: "อันดับ (การค้นหาข้อความเท่านั้น)",
		search_name_attribute: "ชื่อ (${0})",
		search_results_summary_enabled_label: "เปิดใช้งานสรุปเนื้อหา (ค้นหาข้อความเท่านั้น)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "ค้นหา",
		manage_teamspace_classes_tab_title: "คลาส",
		manage_teamspace_entry_templates_tab_title: "เท็มเพลตว่าง",
		manage_teamspace_team_tab_title: "ทีม",
		manage_teamspace_roles_tab_title: "บทบาท",
		manage_teamspace_dialog_title: "ปรับเปลื่ยน Teamspace",
		manage_teamspace_button_label: "ปรับเปลื่ยน Teamspace",
		manage_teamspace_team_pane_heading: "เลือกทีม",
		manage_teamspace_classes_pane_heading: "เลือกคลาส",
		manage_teamspace_entry_templates_pane_heading: "เลือกเท็มเพลตรายการ",
		manage_teamspace_no_rights_message: "คุณไม่มีสิทธิ์ที่เหมาะสมเพื่อแก้ไข Teamspace นี้",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "คุณสมบัติของ Teamspace",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "ระบุคุณสมบัติที่ถูกแสดงสำหรับเอกสารและโฟลเดอร์ในรายการเนื้อหาเมื่อผู้ใช้เรียกดูใน Teamspace คุณยังสามารถระบุลำดับที่แสดงคุณสมบัติ",
		teamspace_props_sel_cols_use_default_label: "ใช้ค่าติดตั้ง <b>เรียกดู</b> สำหรับที่เก็บนี้",
		teamspace_props_sel_cols_use_default_tooltip: "ใช้ค่าติดตั้งที่ระบุไว้บนเพจ เรียกดู สำหรับที่เก็บนี้ในเครื่องมือการจัดการ",
		teamspace_props_general_tab_label: "General",
		teamspace_props_column_props_tab_label: "คุณสมบัติที่ถูกแสดง",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "เลือกไฟล์สำหรับอิมพอร์ต",
		teamspace_import_template_instruction: "คุณสามารถเลือกไฟล์เอ็กซ์พอร์ตเท็มเพลต Teamspace เพื่ออิมพอร์ต",
		teamspace_import_template_button_label: "อิมพอร์ต",
		teamspace_import_template_dialog_label: "อิมพอร์ตเท็มเพลต Teamspace",

		/* Annotation Dialog */
		annotationDlg_title: "หมายเหตุประกอบ",
		annotationDlg_description: "เอกสารที่เลือกมีหมายเหตุประกอบดังต่อไปนี้:",
		annotationDlg_msg_noAnnotations: "ไม่มีหมายเหตุประกอบ คลิก เพิ่ม เพื่อสร้างหมายเหตุประกอบ",
		annotationDlg_pageLabel: "หน้า: ${pageNum}",
		annotationDlg_accLabel: "เข้าถึง: ${accType}",
		annotationDlg_accLabel_public: "พับลิก",
		annotationDlg_accLabel_private: "ไพรเวต",
		annotationDlg_accLabel_privateGroup: "ไพรเวต(${groupName})",
		annotationDlg_copiable: "สามารถคัดลอกไปยังเซิร์ฟเวอร์อื่น",
		annotationDlg_cannotCopy: "ไม่สามารถคัดลอกไปยังเซิร์ฟเวอร์อื่น",
		annotationDlg_addButtonLabel: "บวก",

		/* Share Dialog */
		is_shared: "แบ่งใช้แล้ว",
		is_share_pending: "การแบ่งใช้ค้างอยู่",
		share_title: "การแบ่งใช้ Box",
		share_instructions_new: "ส่งอีเมลซึ่งมีลิงก์สำหรับไฟล์ที่แบ่งใช้ ทุกคนที่มีลิงก์นี้สามารถเข้าถึงไฟล์ได้",
		share_instructions_existing: "ส่งอีเมลซึ่งมีลิงก์สำหรับไฟล์ที่แบ่งใช้ ทุกคนที่มีลิงก์นี้สามารถเข้าถึงไฟล์ได้ บุคคลอื่นอาจมีลิงก์ เนื่องจากบางคนแบ่งใช้ไฟล์นี้แล้ว",
		share_instructions_another_version_shared: "ส่งอีเมลซึ่งมีลิงก์สำหรับไฟล์ที่แบ่งใช้ ทุกคนที่มีลิงก์นี้สามารถเข้าถึงไฟล์ได้ บุคคลอื่นอาจมีลิงก์ เนื่องจากบางคนแบ่งใช้เวอร์ชันอื่นของไฟล์นี้แล้ว",
		share_buttonLabel_share: "ใช้ร่วมกัน",
		share_email_addresses: "ส่งไปยัง :",
		share_email_addresses_hover: "เมื่อการแบ่งใช้เสร็จสมบูรณ์ ลิงก์จะถูกส่งไปยังอีเมลแอดเดรสเหล่านี้ ถ้าคุณไม่ได้ป้อนข้อมูลใดๆ ลิงก์จะถูกส่งไปยังอีเมลแอดเดรสของคุณเอง",
		share_email_addresses_reshare_hover: "เมื่อการแบ่งใช้เสร็จสมบูรณ์ ลิงก์จะถูกส่งไปยังอีเมลแอดเดรสเหล่านี้ ถ้าคุณไม่ได้ป้อนข้อมูลใดๆ จะไม่มีการส่งอีเมล",
		share_password: "ตั้งค่ารหัสผ่าน:",
		share_password_placeholder: "เป็นทางเลือก",
		share_comments: "ข้อความ:",
		share_comments_default: "ฉันต้องการแบ่งใช้ไฟล์ของคุณกับคุณบน Box",
		share_myEmail: "ส่งจาก:",
		share_expiration: "ตั้งค่าการหมดอายุของลิงก์:",
		share_expire: "การเข้าถึงหมดอายุ:",
		share_expire_none: "ไม่หมดอายุ",
		share_allowDownload: "อนุญาตให้ดาวน์โหลด",
		share_add: "บวก",
		share_advanced_instructions: "ค่าติดตั้งดาวน์โหลด การหมดอายุ และรหัสผ่านใช้กับไฟล์ที่แบ่งใช้ใน Box",
		share_advanced_existing_instructions: "ค่าติดตั้งดาวน์โหลด การหมดอายุ และรหัสผ่านใช้กับไฟล์ที่แบ่งใช้ใน Box",
		share_options_edit_warning: "ข้อสำคัญ: การเปลี่ยนแปลงใดๆ ในค่าติดตั้งเหล่านี้ส่งผลกระทบต่อทุกคนที่มีลิงก์ รวมถึงบุคคลซึ่งมีลิงก์อยู่แล้ว",
		share_link: "ลิงก์:",
		share_email_addresses_placeholder: "อีเมลแอดเดรส",
		share_email_address_placeholder: "อีเมลแอดเดรส",
		share_email_address_invalid: "ป้อนอีเมลแอดเดรสที่ถูกต้อง",
		share_cannot_share_with_self: "คุณไม่สามารถแบ่งใช้ไฟล์กับตัวคุณเอง ให้ระบุผู้ใช้อื่น",
		share_selected_version_with_minor_warning_hover: "เวอร์ชัน ${0} ของเอกสารที่ถูกแบ่งใช้ คุณเลือกเวอร์ชัน ${1}.<br><br><b>คำเตือน</b>: ถ้าคุณแบ่งใช้เวอร์ชัน ${1}, ไม่มีใครสามารถแบ่งใช้เวอร์ชัน ${2} จนกว่าคุณจะลบการแบ่งใช้สำหรับรุ่น ${1}.",
		share_selected_version_hover: "เวอร์ชัน ${0} ของเอกสารที่ถูกแบ่งใช้ คุณเลือกเวอร์ชัน ${1}.",
		share_selected_version_message: "สำคัญ: เวอร์ชัน ${0} ของเอกสารถูกแบ่งใช้ คุณเลือกเวอร์ชัน ${1}.",
		share_different_version_message: "สำคัญ: คุณเลือกเวอร์ชัน ${1}, แต่เวอร์ชัน ${0} ของเอกสารถูกแบ่งใช้แล้ว  คุณไม่สามารถแบ่งใช้เวอร์ชัน ${1} จนกว่าคุณจะลบการแบ่งใช้ก่อน, แต่คุณสามารถแบ่งใช้ลิงก์ไปที่เวอร์ชัน ${0} แทน",
		share_version_message: "สำคัญ: เวอร์ชัน ${0} ของเอกสารถูกแบ่งใช้ เลือกเวอร์ชันที่คุณต้องการแบ่งใช้",
		share_version_new: "แบ่งใช้เวอร์ชัน ${0}",
		share_version_new_p8_hover: "แบ่งใช้เอกสารนี้ สร้างโดยระบุลิงก์เวอร์ชันเพื่อเลือกเวอร์ชันเท่านั้น<br><br>เมื่อเอกสารถูกแบ่งใช้แล้ว:<ul><li>คุณสามารถแบ่งใช้เวอร์ชันที่ใหม่กว่าและลิงก์ตรงไปยังเวอร์ชันที่ใหม่กว่าได้</li><li>คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าได้จนกว่าคุณจะลบที่แบ่งใช้ก่อน</li></ul>",
		share_version_new_cm_hover: "แบ่งใช้เอกสารนี้ สร้างโดยระบุลิงก์เวอร์ชันเพื่อเลือกเวอร์ชันเท่านั้น<br><br>เมื่อเอกสารถูกแบ่งใช้แล้ว:<ul><li>คุณสามารถแบ่งใช้เวอร์ชันที่ใหม่กว่าและลิงก์ตรงไปยังเวอร์ชันที่ใหม่กว่าได้</li><li>คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าได้</li></ul>",
		share_version_update: "แบ่งใช้เวอร์ชัน ${0} (อัพเดตอ็อพชันการแบ่งใช้)",
		share_version_update_p8_hover: "แบ่งใช้เอกสารนี้โดยรักษาลิงก์เพื่อระบุเวอร์ชันเท่านั้น<br><br>เมื่อเอกสารถูกแบ่งใช้แล้ว:<ul><li>คุณสามารถแบ่งใช้เวอร์ชันที่ใหม่กว่าและลิงก์ตรงไปยังเวอร์ชันที่ใหม่กว่าได้</li><li>คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าได้จนกว่าคุณจะลบที่แบ่งใช้ก่อน</li></ul>",
		share_version_update_cm_hover: "แบ่งใช้เอกสารนี้โดยรักษาลิงก์เพื่อระบุเวอร์ชันเท่านั้น<br><br>เมื่อเอกสารถูกแบ่งใช้แล้ว:<ul><li>คุณสามารถแบ่งใช้เวอร์ชันที่ใหม่กว่าและลิงก์ตรงไปยังเวอร์ชันที่ใหม่กว่าได้</li><li>คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าได้</li></ul>",
		share_version_change_to_current: "แบ่งใช้เวอร์ชัน ${0} (อัพเดตการแบ่งใช้กับเวอร์ชันที่เลือก)",
		share_version_change_to_current_p8_hover: "แบ่งใช้เอกสาร อัพเดทลิงก์เพื่อชี้ไปยังเวอร์ชันที่เลือกเท่านั้น<br><br>เมื่อเอกสารถูกแบ่งใช้แล้ว:<ul><li>คุณสามารถแบ่งใช้เวอร์ชันที่ใหม่กว่าและลิงก์ตรงไปยังเวอร์ชันที่ใหม่กว่าได้</li><li>คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าได้จนกว่าคุณจะลบที่แบ่งใช้ก่อน</li></ul>",
		share_version_change_to_current_cm_hover: "แบ่งใช้เอกสาร อัพเดทลิงก์เพื่อชี้ไปยังเวอร์ชันที่เลือกเท่านั้น<br><br>เมื่อเอกสารถูกแบ่งใช้แล้ว:<ul><li>คุณสามารถแบ่งใช้เวอร์ชันที่ใหม่กว่าและลิงก์ตรงไปยังเวอร์ชันที่ใหม่กว่าได้</li><li>คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าได้</li></ul>",
		share_repository: "ที่เก็บสำหรับไฟล์ที่แบ่งใช้",
		share_repository_hover: "ถ้าคุณไม่เห็นที่เก็บ Box ซึ่งคุณต้องการใช้ คุณสามารถเพิ่มที่เก็บ Box ใหม่บนหน้า ที่เก็บ",
		share_options: "อ็อพชันการแบ่งใช้",
		unshare_confirm: "ถ้าคุณลบการแบ่งใช้ ลิงก์การแบ่งใช้ทั้งหมดจะเสียหาย รวมถึงลิงก์การแบ่งใช้ที่ส่งก่อนหน้านี้โดยผู้ใช้อื่น ผู้ใช้อื่นที่ต้องการแบ่งใช้เอกสารต้องเลือกเอกสารต้นฉบับ และแบ่งใช้อีกครั้ง<br><br>คุณแน่ใจว่าต้องการลบการแบ่งใช้หรือไม่?",
		unshare_button: "ลบการแบ่งใช้ Box",
		admin_share: "เซอร์วิสการแบ่งใช้ Box:",
		admin_share_hover: "ช่วยให้ผู้ใช้สามารถแบ่งใช้เอกสารจากที่เก็บใดๆ ซึ่งมีการเปิดใช้งานการแบ่งใช้ Box การแบ่งใช้เอกสารรวมถึงการคัดลอกไฟล์ไปยัง Box, การสร้างลิงก์ และการส่งลิงก์ในอีเมล",
		admin_my_email_modifiable: "อนุญาตให้ผู้ใช้ปรับเปลี่ยนอีเมลแอดเดรส ส่งจาก",
		admin_my_email_modifiable_hover: "โดยดีฟอลต์ สำหรับการแบ่งใช้ Box, อีเมลแอดเดรสของผู้ใช้เป็นแบบอ่านอย่างเดียว และได้รับมาจากการแม็พผู้ใช้และอีเมลแอดเดรสที่แสดงถึงแอคเคาต์ผู้ใช้ Box<br><br>เลือกอ็อพชันนี้เพื่ออนุญาตให้ผู้ใช้แก้ไขอีเมลแอดเดรสเมื่อผู้ใช้แบ่งใช้ อย่างไรก็ตาม จะไม่มีการตรวจสอบความถูกต้องของอีเมลแอดเดรส",
		admin_repos_admin_user: "ผู้ดูแลระบบการแบ่งใช้:",
		admin_repos_admin_user_hover: "ตั้งค่าผู้ดูแลระบบการแบ่งใช้ ถ้าคุณมีเดสก์ท็อปที่มีการเปิดใช้งานเซอร์วิสการแบ่งใช้ Box และเลือกที่เก็บ Box นี้เป็นที่เก็บสำหรับไฟล์ซึ่งแบ่งใช้<br><br>คลิก ตั้งค่า และล็อกอินเข้าสู่ Box โดยใช้แอคเคาต์ผู้ดูแลระบบ Box ที่ถูกต้อง<br><br>ผู้ดูแลระบบการแบ่งใช้ต้องเป็นผู้ใช้ที่เป็นผู้ดูแลระบบ Box ซึ่งมีการกำหนดคอนฟิกให้มีหน่วยเก็บข้อมูลที่ไม่จำกัดใน Box",
		admin_repos_admin_user_not_set_warning: "ไม่ได้กำหนดคอนฟิกผู้ดูแลระบบ Box สำหรับที่เก็บที่เลือกไว้<br><br>เซอร์วิสการแบ่งใช้ Box ปิดใช้งานจนกว่าคุณตั้งค่าผู้ดูแลระบบ Box สำหรับที่เก็บที่เลือกไว้ หรือเลือกที่เก็บ Box อื่นซึ่งกำหนดคอนฟิกผู้ดูแลระบบ Box ไว้<br><br>คุณสามารถตั้งค่าผู้ดูแลระบบ Box ในส่วนเซอร์วิสการแบ่งใช้ Box บนหน้า ข้อมูลทั่วไป สำหรับที่เก็บ",
		admin_share_not_configured_warning: "ก่อนที่คุณจะสามารถใช้เซอร์วิสการแบ่งใช้ Box คุณต้องเพิ่มและเลือกที่เก็บ Box ที่มีการพิสูจน์ตัวตนเซิร์ฟเวอร์เป็นอันดับแรก",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online Configuration",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "ระบุว่าคุณต้องการให้ผู้ใช้เข้าถึงเดสก์ท็อปนี้เพื่อให้สามารถแก้ไขเอกสาร Office โดยใช้ Office Online Server",		
		admin_office_online_allow_collaborative_editing: "อนุญาตให้แก้ไขการทำงานร่วมกัน",
		admin_office_online_allow_collaborative_editing_hover: "อนุญาตให้ผู้ใช้มากกว่าหนึ่งรายทำงานบนเอกสารฉบับเดียวกันได้ เคลียร์อ็อพชันหากคุณต้องการจำกัดเอกสารการแก้ไขกับผู้ใช้เพียงหนึ่งราย",
		admin_office_online_repository_not_set_warning: "ก่อนที่คุณจะสามารถเปิดใช้งานเซอร์วิส Office Online คุณต้องเปิดใช้งานเซอร์วิสบนที่เก็บและระบุ Microsoft Office Online Server URL เป็นอันดับแรก คลิก <b>ที่เก็บ</b> เลือกที่เก็บ และจากนั้น บนแท็บ <b>แก้ไขการรวม</b> ให้เปิดใช้งานเซอร์วิส คลิก <b>ค่าติดตั้ง > ทั่วไป</b> และป้อน Microsoft Office Online Server URL",
		admin_settings_office_online_server_enable_hover: "ระบุว่าคุณต้องการใช้ Office Online Server เพื่อทำงานกับเอกสาร Office",
		admin_office_online_server_url: "Microsoft Office Online Server URL",
		admin_office_online_server_url_hover: "ระบุ URL ที่แอ็พพลิเคชันอื่นสามารถสื่อสารกับ Office Online Server URL มีรูปแบบ http://server_name:port_number/hosting/discovery",
		admin_office_online_server_Verified: "ตรวจสอบแล้ว",
	    admin_office_online_server_Failed: "<b>ล้มเหลว</b>",

		admin_repcfg_office_online_service_p8_hover: "เมื่อต้องการเริ่มต้นที่เก็บเพื่อใช้ Office Online Server คุณสามารถเพิ่มไฟล์เท็มเพลตเริ่มต้นสำหรับแต่ละแอ็พพลิเคชัน Office หากไม่ได้ระบุเท็มเพลตไว้ เท็มเพลตดีฟอลต์จะถูกนำมาใช้",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server Integration",
		admin_repcfg_office_online_service_url_not_set_warning: "ก่อนที่คุณจะสามารถเปิดใช้งาน Office Online Server คุณต้องระบุ Microsoft Office Online Server URL เป็นอันดับแรก คลิก ค่าติดตั้ง > ทั่วไป และป้อน URL",
		admin_repcfg_office_online_word_template_name: "เท็มเพลต Word ดีฟอลต์",
		admin_repcfg_office_online_excel_template_name: "เท็มเพลต Excel ดีฟอลต์",
		admin_repcfg_office_online_powerpoint_template_name: "เท็มเพลต PowerPoint  ดีฟอลต์",
		admin_repcfg_office_online_blank_template_description: "นี่คือเท็มเพลตดีฟอลต์ที่ใช้หากคุณไม่ต้องการเพิ่มเท็มเพลตของคุณเอง",
		/* Edit Service settings */
		admin_icn_edit_title: "แก้ไขคอนฟิกูเรชัน",	
	    admin_icn_edit_files_cleanup_interval: "ช่วงเวลาการล้างข้อมูลไฟล์ชั่วคราว (หน่วยเป็นวัน):",
	    admin_icn_edit_files_cleanup_interval_hover: "คุณสามารถจั้งค่าจำนวนเวลาที่จะเก็บไฟล์ชั่วคราวไว้ในไคลเอ็นต์ ICN Edit เวลาดีฟอลต์ คือ 20 วัน เวลาสูงสุด คือ 20 วัน เวลาที่น้อยที่สุด คือ 1 วัน",
	    admin_icn_edit_service_integration: "แก้ไขการรวมเซอร์วิส",
	    admin_icn_edit_service_integration_intro: "การแก้ไขเซอร์วิสช่วยให้ผู้ใช้เพิ่มหรือแก้ไขไฟล์ได้ง่ายขึ้นในแอ็พเนทีฟที่ติดตั้งไว้บนคอมพิวเตอร์ของพวกเขา<br><br><b>สิ่งสำคัญ:</b> หากคุณเปิดใช้งานการแก้ไขเซอร์วิส คุณต้องบันทึกคอนฟิกูเรชันที่เก็บของคุณไว้ก่อนที่คุณจะสามารถแก้ไขหมวดหมู่ที่นิยามไว้ก่อน",
		admin_icn_edit_service: "แก้ไขเซอร์วิส:",
		admin_icn_edit_enable_hover: "เมื่อต้องการใช้การแก้ไขเซอร์วิส คุณต้อง:<ul><li>เปิดใช้งานเซอร์วิสบนที่เก็บ</li><li>เปิดใช้งานเซอร์วิสบนเดสก์ท็อปในสภาวะแวดล้อมของคุณ</li><li>ติดตั้งไคลเอ็นต์ IBM Content Navigator Edit บนเวิร์กสเตชันของผู้ใช้</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "เปิดใช้งาน",
		admin_icn_edit_disable: "ปิดใช้งาน",
		admin_icn_edit_create_new_category: "สร้างหมวดหมู่ใหม่",
		admin_icn_edit_delete_category: "ลบหมวดหมู่",
		admin_icn_edit_edit_category: "แก้ไขหมวดหมู่",
		admin_icn_edit_disable_category: "ปิดใช้งานหมวดหมู่",
		admin_icn_edit_enable_category: "เปิดใช้งานหมวดหมู่",
		admin_icn_edit_new_category_dialog_title: "สร้างหมวดหมู่ใหม่",
		admin_icn_edit_edit_category_dialog_title:"แก้ไขหมวดหมู่",
		admin_icn_edit_new_category_dialog_instructions: "หมวดหมู่เอกสารช่วยคุณเชื่อมโยงเท็มเพลตกับชนิด MIME ที่ระบุเฉพาะสำหรับการแก้ไขเซอร์วิส ตัวอย่างเช่น คุณสามารถเชื่อมโยงชุดของเท็มเพลตกับไฟล์ PDF เพื่อให้ผู้ใช้สามารถใช้เท็มเพลตได้เมื่อพวกเขาเพิ่มหรือแก้ไขไฟล์จากไคลเอ็นต์ IBM Content Navigator Edit <br><br><b>สิ่งสำคัญ:</b> คุณต้องบันทึกคอนฟิกูเรชันที่เก็บของคุณก่อนที่คุณจะสามารถเพิ่มเท็มเพลตไปยังหมวดหมู่ที่คุณสร้างขึ้นได้ ",
		admin_icn_edit_edit_category_dialog_instructions: "คุณต้องบันทึกคอนฟิกูเรชันที่เก็บก่อนที่คุณจะสามารถเพิ่มเท็มเพลตไปยังหมวดหมู่นี้ได้ ",
		admin_icn_edit_delete_category_dialog_instructions: "คุณต้องการลบหมวดหมู่นี้รวมถึงเท็มเพลตที่เชื่อมโยงกับหมวดหมู่หรือไม่?<br><br><b>สิ่งสำคัญ:</b> การเปลี่ยนแปลงของคุณจะไม่เป็นแบบถาวรจนกว่าคุณจะบันทึกการเปลี่ยนแปลงของคุณไปยังที่เก็บ ",
		admin_icn_edit_category_label: "หมวดหมู่: ",
		admin_icn_edit_category_discription_label:"คำอธิบาย: ",
		admin_icn_edit_template_column_head:"ชื่อเท็มเพลต",
		admin_icn_edit_category_duplicate_error_message: "มีหมวดหมู่ที่มี ID นี้อยู่ก่อนแล้ว ",
		admin_icn_edit_word_category_description: "หมวดหมู่นี้กำหนดเท็มเพลตที่พร้อมใช้งานสำหรับเอกสาร Microsoft Word ในการแก้ไขเซอร์วิส ",
		admin_icn_edit_excel_category_description: "หมวดหมู่นี้กำหนดเท็มเพลตที่พร้อมใช้งานสำหรับเอกสาร Microsoft Excel ในการแก้ไขเซอร์วิส ",
		admin_icn_edit_powerpoint_category_description: "หมวดหมู่นี้กำหนดเท็มเพลตที่พร้อมใช้งานสำหรับเอกสาร Microsoft PowerPoint ในการแก้ไขเซอร์วิส ",

		icn_edit_add_template_dialog_title:"เพิ่มเท็มเพลต ${0}",
		icn_edit_add_template_only_one_file_error: "คุณสามารถเลือกได้ไฟล์เดียวเท่านั้น",
		icn_edit_add_template_file_type_error: "คุณต้องระบุไฟล์เท็มเพลต ${0} ที่ถูกต้อง<br><br>เอกสารที่เลือกไว้มีชนิด MIME ${1}<br><br>ชนิด MIME ที่ถูกต้อง: ${2}",
		icn_edit_change_template_dialog_title: "แก้ไข ${0} เท็มเพลต",
		icn_edit_action_in_new_menu_name:"เอกสาร ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "ด้วย Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "ด้วยแอ็พ Desktop",
		icn_edit_new_document_dialog_title: "สร้างเอกสาร ${0} ใหม่",
		icn_edit_new_document_dialog_intro: "สร้างเอกสาร ${0} ใหม่ และเพิ่มเอกสารไปยังที่เก็บ เอกสารจะถูกสร้างขึ้นด้วยเท็มเพลตเซอร์วิสการแก้ไขที่เลือกไว้", 
		icn_edit_select_edit_service_template: "เลือกเท็มเพลต",
		icn_edit_edit_service_template: "เท็มเพลตการแก้ไขเซอร์วิส:",
		icn_edit_new_document_category_no_templates_message:"ไม่มีเท็มเพลตในหมวดหมู่นี้ โปรดติดต่อผู้ดูแลระบบของคุณเพื่อเพิ่มเท็มเพลตในหมวดหมู่นี้",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "ค่าติดตั้งคลาสและบทบาท",
		admin_repcfg_classes_and_roles_warning: "เมื่อต้องการระบุคลาสและผู้ใช้ หรือกลุ่มผู้ใช้ที่มีสิทธิในการสร้าง แก้ไข และใช้เท็มเพลต หรือสร้างแบบร่างของเอกสารที่ทำงานกับ Office Online Service และ Edit Service",
		admin_repcfg_classes_and_roles_click_warning: "คลิกที่นี่",
		/* Edit Service settings END */
		share_no_my_email_error: "มีปัญหาในการระบุอีเมลแอดเดรสที่จำเป็นในการแบ่งใช้เอกสาร",
		share_no_my_email_error_explanation: "คุณล็อกอินด้วย ID ผู้ใช้ ${0} แต่ไม่ได้แม็พ ID ผู้ใช้กับอีเมลแอดเดรส",
		share_no_my_email_error_userResponse: "ลองล็อกอินอีกครั้ง หรือล็อกอินโดยใช้ ID ผู้ใช้อื่น ถ้าปัญหายังคงอยู่ ให้รายงานปัญหานี้กับผู้ดูแลระบบของคุณ",
		share_no_my_email_error_adminResponse: "ไม่ได้แม็พ ID ผู้ใช้ ${0} กับอีเมลแอดเดรส และเดสก์ท็อป ${1} ไม่อนุญาตให้ผู้ใช้แก้ไขอีเมลแอดเดรสสำหรับเซอร์วิสการแบ่งใช้ Box<br><br>ลองโซลูชันอย่างใดอย่างหนึ่งต่อไปนี้:<br>ตรวจสอบให้แน่ใจว่าลงทะเบียนปลั๊กอินการแม็พอีเมลแล้ว<br>ตรวจสอบให้แน่ใจว่าไฟล์ emailMappingPlugin.json มี ID ผู้ใช้ ${0} และอีเมลแอดเดรสของผู้ใช้ จากนั้นสร้าง กำหนดคอนฟิก และลงทะเบียนปลั๊กอินการแม็พอีเมล<br>ถ้าคุณไม่ต้องการใช้ปลั๊กอินการแม็พอีเมล หรือไดเร็กทอรีอีเมลแอดเดรส FileNet P8 แต่คุณต้องการอนุญาตให้ผู้ใช้ป้อนอีเมลแอดเดรสของตนเองแทนเมื่อพวกเขาแบ่งใช้เอกสาร คุณสามารถปรับเปลี่ยนค่าติดตั้งเดสก์ท็อปสำหรับเซอร์วิสการแบ่งใช้ Box เพื่ออนุญาตให้ผู้ใช้ส่งลิงก์จากอีเมลแอดเดรสอื่น",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "แบ่งใช้เวอร์ชันล่าสุดของเอกสารนี้แล้ว ดังนั้น คุณจึงไม่สามารถแบ่งใช้เวอร์ชันที่เลือกของเอกสารนี้",
		share_later_version_shared_error_explanation: "คุณไม่สามารถแบ่งใช้เวอร์ชันก่อนหน้าของเอกสารที่แบ่งใช้ก่อนหน้านี้แล้ว",
		share_later_version_shared_error_userResponse: "เมื่อต้องการส่งลิงก์ไปยังเวอร์ชันล่าสุดของเอกสาร คุณต้องเลือกเวอร์ชันล่าสุดก่อน จากนั้น ใช้แอ็คชันแบ่งใช้<br><br>เมื่อต้องการแบ่งใช้เวอร์ชันที่เลือกของเอกสาร คุณต้องลบการแบ่งใช้สำหรับเวอร์ชันล่าสุดของเอกสารก่อน",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "ข้อความใหม่",
		email_from: "จาก:",
		email_to: "ถึง:",
		email_cc_link: "สำเนาถึง",
		email_bcc_link: "สำเนาลับถึง",
		email_cc: "สำเนาถึง:",
		email_bcc: "สำเนาลับถึง:",
		email_address_invalid: "ป้อนอีเมลแอดเดรสที่ถูกต้อง",
		email_subject: "ชื่อเรื่อง:",
		email_message: "ข้อความ:",
		email_message_placeholder: "เพิ่มข้อความ",
		email_attachments: "สิ่งที่แนบ:",
		email_links: "ลิงก์:",
		email_send: "ส่ง",
		email_dont_send: "ไม่ส่ง",
		email_subject_reminder: "การเตือนเกี่ยวกับเรื่อง",
		email_subject_reminder_confirm: "คุณต้องการส่งข้อความนี้โดยไม่มีเรื่องหรือไม่?",
		email_missing_from_error: "มีปัญหาในการระบุอีเมลแอดเดรส จาก ที่จำเป็นในการส่งแอดเดรส",
		email_missing_from_error_explanation: "คุณล็อกอินด้วย ID ผู้ใช้ ${0} แต่ไม่ได้แม็พ ID ผู้ใช้กับอีเมลแอดเดรส",
		email_missing_from_error_userResponse: "ลองล็อกอินอีกครั้ง หรือล็อกอินโดยใช้ ID ผู้ใช้อื่น ถ้าปัญหายังคงอยู่ ให้รายงานปัญหานี้กับผู้ดูแลระบบของคุณ",
		email_missing_from_error_adminResponse: "ID ผู้ใช้ ${0} ไม่ถูกแม็พกับอีเมลแอดเดรส และเดสก์ท็อป${1} ไม่อนุญาตให้ผู้ใช้แก้ไขอีเมลแอดเดรส จาก<br><br>ลองโซลูชันอย่างใดอย่างหนึ่งต่อไปนี้:<br>ตรวจสอบให้แน่ใจว่าลงทะเบียนปลั๊กอินการแม็พอีเมลแล้ว<br>ตรวจสอบให้แน่ใจว่าไฟล์ emailMappingPlugin.json มี ID ผู้ใช้ ${0} และอีเมลแอดเดรสของผู้ใช้ จากนั้นสร้าง กำหนดคอนฟิก และลงทะเบียนปลั๊กอินการแม็พอีเมล<br>หากคุณไม่ต้องการใบ้ปลั๊กอิน Email Mapping หรือไดเร็กทอรีอีเมลแอดเดรส FileNet P8 แต่คุณต้องการอนุญาตให้ผู้ใช้ป้อนอีเมลแอดเดรสของผู้ใช้เองเมื่อส่งอีเมล คุณสามารถปรับเปลี่ยนค่าติดตั้ง อีเมล เพื่ออนุญาตให้ผู้ใช้ปรับเปลี่ยนอีเมลแอดเดรส จาก ได้",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "ไม่สามารถเปิดเอกสาร",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator ไม่สามารถเชื่อมต่อกับไคลเอ็นต์ IBM Content Navigator Edit",
		open_edit_document_with_native_application_error_userResponse: "ติดตั้งและสตาร์ทไคลเอ็นต์ IBM Content Navigator Edit บนเวิร์กสเตเชันของคุณ จากนั้น ลองเปิดเอกสารอีกครั้ง",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "ไม่สามารถเปิดเอกสาร",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator ไม่สามารถเชื่อมต่อกับไคลเอ็นต์ IBM Content Navigator Edit",
		connect_to_the_streamline_service_error_userResponse: "ติดตั้งและสตาร์ทไคลเอ็นต์ IBM Content Navigator Edit บนเวิร์กสเตเชันของคุณ จากนั้น ลองเปิดเอกสารอีกครั้ง",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator ไม่ได้กำหนดคอนฟิกไว้อย่างถูกตอ้งสำหรับการแบ่งใช้เอกสาร",
		share_not_configured_error_explanation: "คุณลักษณะการแบ่งใช้ Box ต้องได้รับการกำหนดค่าอย่างถูกต้องก่อนที่คุณจะสามารถแบ่งใช้เอกสาร",
		share_not_configured_error_userResponse: "โปรดติดต่อผู้ดูแลระบบ และขอให้ผู้ดูแลระบบกำหนดค่าคุณลักษณะการแบ่งใช้ Box",
		share_not_configured_error_adminResponse: "ไอเท็มต่อไปนี้ต้องถูกกำหนดคอฟนิกก่อนที่จะแบ่งใช้เอกสาร:<ul><li>เซอร์วิส task manager ต้องถูกเปิดใช้งานในการตั้งค่าเครื่องมือการบริหารระบบ</li><li>ID การเชื่อมต่อ task manager ต้องถูกกำหนดค่าในที่เก็บ</li><li>การแบ่งใช้ต้องถูกเปิดใช้งานในที่เก็บ</li><li>ที่เก็บ Box ต้องถูกเลือกไว้ก่อนแบ่งใช้ในเดสก์ท็อป</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "การเปลี่ยนแปลงคุณสมบัติไม่ถูกบันทึกสำหรับเวอร์ชันใหม่",
		checkin_cors_save_attributes_error_explanation: "เวอร์ชันถูกสร้างขึ้น แต่การเปลี่ยนแปลงคุณสมบัติไม่ถูกบันทึกไว้ เอกสารอาจยังถูกเช็กเอาต์",
		checkin_cors_save_attributes_error_userResponse: "ปลดล็อคเอกสารและอัพเดตคุณสมบัติโดยใช้ไอเท็มเมนูบริบท คุณสมบัติ",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "การเปลี่ยนแปลงคุณสมบัติไม่ถูกบันทึกสำหรับเอกสารใหม่",
		add_cors_save_attributes_error_explanation: "เอกสารถูกสร้างขึ้น แต่การเปลี่ยนแปลงคุณสมบัติไม่ถูกบันทึกไว้",
		add_cors_save_attributes_error_userResponse: "อัพเดตคุณสมบัติโดยใช้ไอเท็มเมนูบริบท คุณสมบัติ",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "ไม่สามารถเปิดเอกสาร",		
		edit_document_using_edit_service_error_explanation: "เอกสารไม่สามารถเปิดใน Edit Service",
		edit_document_using_edit_service_error_userResponse: "แจ้งผู้ดูแลระบบเพื่ออัพเดต Edit Service Integration<br><br> หากผู้ใช้ต้องการสิทธิเข้าถึงเอกสารนี้จาก Edit Service ให้ไปที่เพจ การรวมการแก้ไข สำหรับที่เก็บและอัพเดต Edit Service Integration เพื่อสอดแทรกคลาสในรายการของคลาสเพื่อปรับเปลี่ยนส่วนสนับสนุน Edit Service",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "ไม่สามารถเปิดเอกสาร",		
		edit_document_is_editing_by_oos_error_explanation: "เอกสารถูกใช้โดย Office Online Service",
		edit_document_is_editing_by_oos_error_userResponse: "คุณต้องบันทึกและปิดเอกสารใน Office Online Service ก่อนที่คุณจะสามารถเปิดเอกสารนั้นได้ใน Edit Service",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "เปิดใช้งานการอัพโหลด Cross-Origin Resource Sharing (CORS)",

		/* Email Settings */
		admin_email_settings: "ค่าติดตั้งอีเมล:",
		admin_email_settings_hover: "ระบุชนิดของอีเมลเซอร์วิสที่คุณต้องการให้ผู้ใช้ใช้ เมื่อคุณเปิดใช้งานอีเมลเซอร์วิสที่ใช้ HTML คุณมีอ็อพชันที่จะอนุญาตให้ผู้ใช้ปรับเปลี่ยนอีเมลแอดเดรส จาก หากคุณต้องการเปิดใช้งานอีเมลเซอร์วิสที่ใช้ Java คุณต้องมีเบราว์เซอร์ที่สนับสนุน Java",
		admin_email_use_service: "ใช้อีเมลเซอร์วิสที่ใช้ HTML",
		admin_email_use_applet: "ใช้อีเมลเซอร์วิสที่ใช้ Java",
		admin_email_can_modify_from: "อนุญาตให้ผู้ใช้ปรับเปลี่ยนอีเมลแอดเดรส จาก",
		admin_email_can_modify_from_hover: "โดยดีฟอลต์ อีเมลแอดเดรส จาก ไม่สามารถปรับเปลี่ยนได้ และได้รับจากการแม็พผู้ใช้และอีเมลแอดเดรสที่แทนแอคเคาต์ผู้ใช้<br><br>เลือกอ็อพชันนี้เพื่ออนุญาตให้ผู้ใช้แก้ไขอีเมลแอดเดรสของตนเมื่อส่งอีเมล อย่างไรก็ตาม จะไม่มีการตรวจสอบความถูกต้องของอีเมลแอดเดรส",
		admin_email_use_from_as_sender: "ใช้อีเมลแอดเดรส จาก เป็นผู้ส่งอีเมล",
		admin_email_use_from_as_sender_hover: "โดยดีฟอลต์ อีเมลแอดเดรส จาก ที่ถูกต้องจะถูกใช้ในอีเมลของผู้ใช้ อีเมลแอดเดรสดังกล่าวถูกกำหนดโดยเมลเซสชัน CNMailSession บนแอ็พพลิเคชันเซิร์ฟเวอร์ เลือกอ็อพชันนี้เพื่อระบุว่าอีเมลแอดเดรสของผู้ใช้จะถูกใช้ในอีเมล",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "สร้างหมายเหตุประกอบใหม่",
		addAnnotationDlg_labelContents: "เนื้อหา",
		addAnnotationDlg_labelAccess: "เข้าถึง",
		addAnnotationDlg_labelPublic: "พับลิก",
		addAnnotationDlg_labelPrivate: "ไพรเวต",
		addAnnotationDlg_labelPrivateGroup: "ไพรเวตสำหรับกลุ่ม",
		addAnnotationDlg_labelGroup: "Group",
		addAnnotationDlg_labelCopiable: "หมายเหตุประกอบนี้สามารถคัดลอกไปยังเซิร์ฟเวอร์อื่น",
		addAnnotationDlg_buttonLabel_save: "บันทึก",

		/* Skip navigation */
		skipNavigation_title_main: "ข้ามไปยังเนื้อหาหลัก",
		skipNavigation_title_menu: "ข้ามไปยังปุ่มการนำทาง",
		skipNavigation_label_main: "ข้ามไปยังเนื้อหาหลัก",
		skipNavigation_label_menu: "ข้ามไปยังปุ่มการนำทาง",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "จัดการ Teamspace",
		manage_teamspace_pane_instance_hdr: "Teamspace",
		manage_teamspace_pane_template_hdr: "เท็มเพลต",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "เลื่อนไปข้างหน้า",
		scroll_back: "เลื่อนย้อนกลับ",

		breadcrumb_separator_open: "เปิดโหนด",
		breadcrumb_separator_close: "ปิดโหนด",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "ไม่ได้เลือกไอเท็ม",

		/* eds */
		eds_url: "External Data Service URL:",
		eds_request_timeout: "หมดเวลาคำร้องขอเซอร์วิส (วินาที):",
		eds_is_required: "ปกป้องผู้ใช้จากการใช้แอ็คชันที่เปลี่ยนค่าของคุณสมบัติเมื่อ EDS ไม่พร้อมใช้งาน",

		/* eforms */
		eform_signing_pane_welcome: "ลงชื่อในแบบฟอร์ม",
		eform_signing_button_label: "ลงชื่อ",
		eform_signing_pane_delete: "ลบลายเซ็น",
		eform_signing_button_label_delete: "ลบออก",

		xtplugin_server_label: "URL เซิร์ฟเวอร์ IBM FileNet Workplace XT",
		xtplugin_server_hover: "ป้อน URL ของเซิร์ฟเวอร์ที่ IBM FileNet Workplace XT ถูกปรับใช้ ตัวอย่างเช่น http://localhost:8080/WorkplaceXT",

		ecplugin_server_label: "URL เซิร์ฟเวอร์ IBM eClient",
		ecplugin_server_hover: "ป้อน URL ของเซิร์ฟเวอร์ที่ IBM eClient ถูกปรับใช้ ตัวอย่างเช่น http://localhost:9080/eClient/s",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "การดำเนินการกับไอเท็มจำนวนมากอาจใช้เวลานาน คุณต้องการทำต่อหรือไม่?",
		large_number_actions_continue_button: "ดำเนินต่อ",

		large_items_actions_confirmation_question: "แอ็คชันกับไอเท็มขนาดใหญ่อาจใช้เวลานาน คุณต้องการทำต่อหรือไม่?",

		viewer_editproperties_title: "คำยืนยัน",
		viewer_editproperties_title_warning: "เตือน",
		viewer_editproperties_save: "บันทึก",
		viewer_editproperties_next: "ถัดไป",
		viewer_editproperties_reset: "ตั้งค่าใหม่",
		viewer_editproperties_reset_hover: "ข้อมูลที่ไม่ได้บันทึกต่างๆ จะถูกรีเซ็ตกลับเป็นค่าที่บันทึกไว้ก่อนหน้านี้",
		viewer_editproperties_saveandgetnext: "บันทึกจากนั้นไปยังรายการถัดไป",
		viewer_editproperties_saveandgetnext_hover: "ขอรับเอกสารถัดไปโดยอัตโนมัติหลังจากที่ฉันบันทึกการเปลี่ยนแปลง",
		viewer_editproperties_prompt_save_changes: "คุณเปลี่ยนแปลงคุณสมบัติของเอกสารต่อไปนี้<br>${0}<br><br>คุณต้องการบันทึกการเปลี่ยนแปลงของคุณหรือไม่?",
		viewer_editproperties_prompt_discard_changes: "คุณเปลี่ยนแปลงคุณสมบัติของเอกสารต่อไปนี้<br>${0}<br><br>อย่างไรก็ตาม คุณสมบัติหนึ่งรายการขึ้นไปมีค่าที่ไม่ถูกต้อง ดังนั้น จึงไม่สามารถบันทึกการเปลี่ยนแปลง คุณสามารถแก้ไขค่าที่ไม่ถูกต้อง หรือทิ้งการเปลี่ยนแปลงของคุณ<br>คุณต้องการแก้ไขค่าที่ไม่ถูกต้องซึ่งแสดงบนหน้าต่างย่อยคุณสมบัติหรือไม่?",
		viewer_comments_prompt_discard_changes: "คุณได้แก้ไขข้อคิดเห็น คุณต้องการบันทึกการเปลี่ยนแปลงของคุณหรือไม่?",
		viewer_notelogs_prompt_discard_changes: "คุณปรับเปลี่ยน notelogs คุณต้องการบันทึกการเปลี่ยนแปลงของคุณหรือไม่?",
		social_collaborated_version: "เวอร์ชัน: ${0}",
		social_link_label: "ใคร...",

		// social comments
		comments: "ข้อความคิดเห็น",
		comments_add_hint: "กด Enter เพื่อเพิ่มข้อคิดเห็นของคุณ",
		comments_hint: "ป้อนข้อคิดเห็นของคุณ",
		comments_label: "กด Enter หรือแท็บเพื่อบันทึกข้อคิดเห็นของคุณ กด Esc เพื่อยกเลิก",
		comments_delete_confirmation: "คุณต้องการลบข้อคิดเห็นที่เลือกหรือไม่?",
		comments_number: "ข้อคิดเห็น: ${0}",
		comments_save_new: "คุณได้แก้ไขข้อคิดเห็น คุณต้องการปิดหน้าต่างโดยไม่บันทึกการเปลี่ยนแปลงหรือไม่?",

		notelogs: "Notelogs",
		notelogs_download: "ดาวน์โหลด",
		notelog_modify: "บันทึกการเปลี่ยนแปลง",
		notelog_edit: "แก้ไข Notelog",
		notelog_create_newVersion: "สร้างเวอร์ชัน Notelog ใหม่",
		notelog_add_hint: "ป้อนข้อคิดเห็นของคุณและกด Enter เพื่อเพิ่ม",
		notelog_hint: "กด Shift+Enter เพื่อขึ้นบรรทัดใหม่",
		notelog_add_placeholder: "กด Enter เพื่อเพิ่มข้อคิดเห็นใน notelog",
		notelog_save_new: "คุณได้แก้ไข notelog คุณต้องการปิดหน้าต่างโดยไม่บันทึกการเปลี่ยนแปลงหรือไม่?",

		// P8 markings related
		cannot_remove_markings: "คุณไม่มีสิทธิ์ลบค่าการทำเครื่องหมาย: {0}",

		// download count
		downloadcount: "ดาวน์โหลด: {0}",
		downloadcount_single: "1 ดาวน์โหลด",
		downloadcount_multiple: "{0} ดาวน์โหลด",
		downloadcount_none: "ไม่มีการดาวน์โหลดในตอนนี้",

		// recommendations
		recommendations: "ชื่นชอบ: {0}",
		recommendations_recommend: "ชื่นชอบสิ่งนี้",
		recommendations_unrecommend: "ไม่ชื่นชอบสิ่งนี้",
		recommendations_you: "คุณชื่นชอบสิ่งนี้",
		recommendations_you_and_another: "คุณและอีก 1 คนชื่นชอบสิ่งนี้",
		recommendations_you_and_others: "คุณและอีก {0} คนชื่นชอบสิ่งนี้",
		recommendations_another: "1 คนชื่นชอบสิ่งนี้",
		recommendations_others: "{0} คนชื่นชอบสิ่งนี้",
		recommendations_none: "ไม่มีใครชื่นชอบสิ่งนี้",

		// tags
		tags: "แท็ก: ${0}",
		tags_delete: "ลบ ${0}",
		tags_none: "ไม่มีแท็กที่จะแสดง",
		tags_add: "เพิ่มแท็ก:",
		tags_hint: "กด Enter เพื่อเพิ่มแท็กของคุณ",
		tags_hover_help: "ระบุแท็ก หรือรายการแท็กที่สามารถใช้ค้นหาเอกสารซึ่งมีแท็กเดียวกัน คุณสามารถใช้คอมมา (,), เซมิโคลอน (;) หรือช่องว่างเพื่อคั่นแท็ก",
		tags_hover_help_box: "ระบุแท็ก หรือรายการแท็กที่คั่นด้วยคอมมา ที่สามารถใช้ค้นหาเอกสารซึ่งมีแท็กเดียวกัน",
		tags_no_access: "คุณไม่มีสิทธิที่เหมาะสมในการเพิ่มแท็ก",

		//task scheduler pane
		taskPane_tooltip: "เปิดมุมมองภารกิจอะซิงโครนัส",
		taskPane_tree: "แผนผังการนำทางบานหน้าต่างภารกิจ",
		taskPane_allTasks: "ภารกิจทั้งหมด",
		taskPane_scheduledTasks: "ภารกิจที่กำหนดตารางเวลาแล้ว",
		taskPane_recurringTasks: "ภารกิจที่เกิดซ้ำ",
		taskPane_inProgressTasks: "ภารกิจที่ดำเนินการอยู่",
		taskPane_completedTasks: "ภารกิจที่เสร็จสิ้นแล้ว",
		taskPane_failedTasks: "ภารกิจที่ล้มเหลว",
		taskPane_disabledTasks: "ภารกิจที่ปิดใช้งาน",
		taskPane_statusScheduled: "กำหนดเวลา",
		taskPane_statusInProgress: "ดำเนินการอยู่",
		taskPane_statusCompleted: "เสร็จสมบูรณ์",
		taskPane_statusFailed: "ล้มเหลว",
		taskPane_statusPaused: "หยุดชั่วคราว",
		taskPane_noItemSelected: "ไม่ได้เลือกไอเท็ม",
		taskSchedulerPane_scheduleInformation: "ข้อมูลการจัดตารางเวลา",
		taskSchedulerPane_loginInformation: "ข้อมูลการล็อกอิน",
		taskSchedulerPane_startImmediately: "เริ่มทำงานในทันที",
		taskSchedulerPane_recurrence: "การวนซ้ำ",
		taskSchedulerPane_interval: "ช่วงเวลา",
		taskSchedulerPane_scheduleReport: "กำหนดเวลารายงาน",
		taskSchedulerPane_nameHoverHelp: "ป้อนชื่อของงาน",
		taskSchedulerPane_descriptionHoverHelp: "ป้อนคำอธิบายสำหรับภารกิจ คำอธิบายควรช่วยคุณแยกความแตกต่างระหว่างภารกิจ",
		taskSchedulerPane_startTimeHoverHelp: "ระบุเวลาที่คุณต้องการให้รันงาน ดำเนินงานรันงานเดี๋ยวนี้ ให้เลือก Start Immediately",
		taskSchedulerPane_recurrenceHoverHelp: "คุณไม่สามารถกำหนดเวลารันงานในรูปแบบการเกิดซ้ำ",
		taskSchedulerPane_endTimeHoverHelp: "ระบุเวลาที่คุณต้องการให้งานหยุดรัน งานรันจากเวลาเริ่มต้นที่กำหนดไว้ถึงเวลาสิ้นสุดที่กำหนดไว้",
		taskSchedulerPane_usernameHoverHelp: "สำหรับการทำให้งานเกิดซ้ำ คุณต้องป้อนชื่อผู้ใช้เพื่อเปิดใช้งานเซอร์วิสในการพิสูจน์ตัวตนเมื่องานรัน",
		taskSchedulerPane_passwordHoverHelp: "สำหรับการทำให้งานเกิดซ้ำ คุณต้องป้อนรหัสผ่านเพื่อเปิดใช้งานเซอร์วิสในการพิสูจน์ตัวตนเมื่องานรัน",
		taskSchedulerPane_notification: "การแจ้งเตือน",
		taskSchedulerPane_emailAddress: "อีเมลแอดเดรส",
		taskSchedulerPane_emailAddressHoverHelp: "ป้อนอีเมลแอดเดรสที่คุณได้รับการแจ้งเตือนเกี่ยวกับสถานะของภารกิจ",
		taskSchedulerPane_intervalHoverHelp: "ระบุระยะเวลาที่งานที่เกิดซ้ำจะรัน คุณสามารถตั้งค่าช่วงเวลาเป็นชั่วโมง วัน สัปดาห์ หรือเดือน",
		taskSchedulerPane_scheduledStartTime: "เวลาเริ่มต้นที่กำหนดเวลาไว้",
		taskSchedulerPane_startTime: "เวลาเริ่มต้น",
		taskSchedulerPane_title: "กำหนดตารางเวลา",
		taskSchedulerPane_runNow: "รันเดี๋ยวนี้",
		taskSchedulerPane_runOnce: "รันเพียงครั้งเดียว",
		taskSchedulerPane_runAtSchedule: "รันตามกำหนดตารางเวลา",
		taskSchedulerPane_repeats: "ทำซ้ำ",
		taskSchedulerPane_repeatsEvery: "ทำซ้ำทุกๆ",
		taskSchedulerPane_hourly: "รายชั่วโมง",
		taskSchedulerPane_daily: "รายวัน",
		taskSchedulerPane_weekly: "รายสัปดาห์",
		taskSchedulerPane_monthly: "รายเดือน",
		taskSchedulerPane_yearly: "รายปี",
		taskSchedulerPane_sunday: "ส.",
		taskSchedulerPane_monday: "จ.",
		taskSchedulerPane_tuesday: "พฤ.",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "พฤ.",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "ส.",
		taskSchedulerPane_starting: "วันที่เริ่มต้น",
		taskSchedulerPane_after: "หลังจาก",
		taskSchedulerPane_ending: "วันที่สิ้นสุด",
		taskSchedulerPane_times: "เวลา",
		taskSchedulerPane_days: "วัน",
		taskSchedulerPane_hours: "ชั่วโมงในวัน",
		taskSchedulerPane_interval: "ช่วงเวลา",
		taskSchedulerPane_endingDays: "สิ้นสุด (ในหน่วยวัน)",
		taskSchedulerPane_never: "ไม่เคย",
		taskSchedulerPane_categorization: "การจัดหมวดหมู่",
		taskSchedulerPane_scheduleTask: "กำหนดตารางเวลาภารกิจ",
		taskInformationPane_details: "รายละเอียด",
		taskInformationPane_errors: "Errors",
		taskInformationPane_taskInstances: "อินสแตนซ์ของภารกิจ",
		taskInformationPane_audits: "ตรวจสอบ",
		taskInformationPane_results: "ผลลัพธ์",
		asyncTasks: "ภารกิจอะซิงโครนัส",

		//entry template pane
		search_all_entry_templates: "ค้นหาเท็มเพลตรายการทั้งหมด",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "ดูไซต์แบบเต็ม",
		mobilesite: "ดูไซต์แบบโมบายล์",
		profile: "จัดการโปรไฟล์",
		office_template: "เท็มเพลต Office:",
		select_office_template: "เลือกเท็มเพลต office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "ไม่สามารถเปิดเอกสารที่เลือกในวิวเวอร์โดยใช้แอ็คชัน ผสานและแยก",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "วิวเวอร์ที่กำหนดค่าไว้สำหรับเอกสาร PDF และ TIFF ไม่สนับสนุนแอ็คชัน ผสานและแยก",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "โปรดขอให้ผู้ดูแลระบบกำหนดค่าวิวเวอร์สำหรับเอกสาร PDF และ TIFF ที่สนับสนุนแอ็คชัน ผสานและเลือก เช่น วิวเวอร์ Daeja ViewONE Virtual",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "ไม่สามารถเปิดเอกสาร PDF ที่เลือกในวิวเวอร์โดยใช้แอ็คชัน ผสานและแยก",
		document_builder_pdf_unsupported_viewer_error_explanation: "วิวเวอร์ที่กำหนดค่าไว้สำหรับเอกสาร PDF ไม่สนับสนุนแอ็คชัน ผสานและแยก",
		document_builder_pdf_unsupported_viewer_error_userResponse: "โปรดขอให้ผู้ดูแลระบบกำหนดค่าวิวเวอร์สำหรับเอกสาร PDF ที่สนับสนุนแอ็คชัน ผสานและเลือก เช่น วิวเวอร์ Daeja ViewONE Virtual",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "ไม่สามารถเปิดเอกสาร TIFF ที่เลือกในวิวเวอร์โดยใช้แอ็คชัน ผสานและแยก",
		document_builder_tiff_unsupported_viewer_error_explanation: "วิวเวอร์ที่กำหนดค่าไว้สำหรับเอกสาร TIFF ไม่สนับสนุนแอ็คชัน ผสานและแยก",
		document_builder_tiff_unsupported_viewer_error_userResponse: "โปรดขอให้ผู้ดูแลระบบกำหนดค่าวิวเวอร์สำหรับเอกสาร TIFF ที่สนับสนุนแอ็คชัน ผสานและเลือก เช่น วิวเวอร์ Daeja ViewONE Virtual",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "ไม่สามารถเปิดเอกสารที่เลือกในวิวเวอร์โดยใช้แอ็คชัน ผสานและแยก",
		document_builder_unsupported_documents_error_explanation: "แอ็คชัน ผสานและแยก ใช้ได้กับเอกสาร PDF และ TIFF เท่านั้น",
		document_builder_unsupported_documents_error_userResponse: "เลือกเอกสารที่สนับสนุนและลองอีกครั้ง",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "ไม่สามารถเปิดเอกสารที่เลือกบางรายการในวิวเวอร์โดยใช้แอ็คชัน ผสานและแยก",
		document_builder_some_unsupported_documents_error_explanation: "แอ็คชัน ผสานและแยก ใช้ได้กับเอกสาร PDF และ TIFF ที่เปิดจากที่เก็บเดียวกันเท่านั้น",
		document_builder_some_unsupported_documents_error_userResponse: "เอกสารที่เลือกจะเปิดในวิวเวอร์",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "เกิดข้อผิดพลาดขณะกำลังเช็กอินเนื้อหาที่มีการแก้ไข",
		document_builder_checkin_failed_explanation: "วิวเวอร์ได้รับการตอบกลับที่มีข้อผิดพลาดขณะที่เช็กอินเนื้อหาที่ปรับเปลี่ยน",
		document_builder_checkin_failed_userResponse: "โปรดติดต่อผู้ดูแลระบบของคุณเพื่อตรวจสอบล็อกไฟล์ของเว็บแอ็พพลิเคชันเซิร์ฟเวอร์",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "ไม่สามารถเปิดเอกสาร",
		no_viewer_to_view_error_explanation: "ผู้ดูแลระบบบล็อกการดูเอกสารนี้ หากคุณจำเป็นต้องเข้าถึงเอกสารนี้ คุณสามารถดาวน์โหลดเอกสารนี้ได้",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "ไม่สามารถบิลด์เนื้อหาได้",
		document_build_failed_userResponse: "ถามผู้ดูแลระบบของคุณเพื่อตรวจทานล็อกไฟล์วิวเวอร์",
		document_build_failed_number: 3007,

		document_builder_open_failed: "ไม่สามารถเปิดเอกสารในโหมดผสานและแยกได้",
		document_builder_open_failed_userResponse: "ถามผู้ดูแลระบบของคุณเพื่อตรวจทานล็อกไฟล์วิวเวอร์",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "ระบบไม่สามารถสลับไปเป็นโหมดผสานและแยกได้",
		document_builder_switch_failed_userResponse: "ถามผู้ดูแลระบบของคุณเพื่อตรวจทานล็อกไฟล์วิวเวอร์",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "เอกสาร",
		print_service_page_setup_tab_title: "ตั้งค่าหน้ากระดาษ",
		print_service_OD_print_tab_title: "อ็อพชันเครื่องพิมพ์",
		print_service_status_merging: "กำลังผสานเอกสาร...",
		print_service_status_converting: "กำลังแปลงเอกสาร...",
		print_service_status_formatting: "กำลังจัดรูปแบบเอกสารสำหรับการพิมพ์...",
		admin_print_service_maximum_number_to_print: "จำนวนสูงสุดของเอกสารที่อนุญาตให้ใช้สำหรับการพิมพ์:",
		admin_print_service_maximum_size_to_print: "จำนวนสูงสุดของข้อมูลที่อนุญาตให้ใช้สำหรับการพิมพ์ (ในหน่วย MB):",
		admin_print_service_maximum_number_to_print_hover_help: "ระบุจำนวนสูงสุดของเอกสารที่สามารถพิมพ์ได้ในแต่ละครั้ง ค่าสูงสุดดีฟอลต์คือ 50 หากคุณไม่ต้องการจำกัดการพิมพ์ตามจำนวนของเอกสาร ให้ตั้งค่าขีดจำกัดนี้เป็น 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>ข้อจำกัด:</b> การตั้งค่านี้ไม่สนับสนุนบน IBM Content Manager OnDemand<br/><br/>ระบุจำนวนสูงสุดของข้อมูลที่สามารถพิมพ์ได้โดยใช้เซอร์วิสการพิมพ์  IBM Daeja ViewONE<br /><br />ขนาดทั้งหมดของเอกสารแต่ละฉบับที่เลือกไว้ไม่สามารถมีได้มากกว่าจำนวนนี้<br/><br/>ค่าจำกัดดีฟอลต์คือ 200 MB การตั้งค่าค่าจำกัดที่มากกว่า 200 MB อาจมีผลต่อผลการทำงานของระบบ หากคุณไม่ต้องการจำกัดการพิมพ์ตามขนาดของเอกสาร ให้ตั้งค่าขีดจำกัดนี้เป็น 0",
		// error printing
		print_service_error_printing: "เกิดข้อผิดพลาดขึ้นขณะพิมพ์",
		print_service_error_printing_userResponse: "ติดต่อผู้ดูแลระบบของคุณเพื่อตรวจสอบล็อกไฟล์ของเซอร์วิสการพิมพ์",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "เอกสารที่เลือกไว้มีขนาดใหญ่เกินกว่าที่จะพิมพ์ได้",
		print_service_max_content_error_explanation: "เอกสารที่เลือกไว้เกินขีดจำกัดของข้อมูล ${0} MB",
		print_service_max_content_error_userResponse: "เลือกเอกสารให้น้อยลงหรือเลือกเอกสารที่มีขนาดเล็กและพิมพ์ใหม่อีกครั้ง คุณยังสามารถติดต่อผู้ดูแลระบบของคุณเพื่อเพิ่มขนาดสูงสุดของรายการที่คุณสามารถพิมพ์ได้ในแต่ละครั้งจากเดสก์ท็อปนี้",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "ไม่สามารถพิมพ์ไอเท็มได้",
		print_service_max_number_selected_error_explanation: "คุณสามารถพิมพ์ได้สูงสุด ${0} ไอเท็มในแต่ละครั้ง คุณกำลังพยายามพิมพ์ ${1} ไอเท็ม",
		print_service_max_number_selected_error_userResponse: "เลือกไอเท็มให้น้อยลงและลองพิมพ์ไอเท็มใหม่อีกครั้ง คุณยังสามารถติดต่อผู้ดูแลระบบของคุณเพื่อเพิ่มจำนวนสูงสุดของไอเท็มที่คุณสามารถพิมพ์ได้ในแต่ละครั้งจากเดสก์ท็อปนี้",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


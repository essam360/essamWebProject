/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"ecm/model/admin/SettingsConfig",
	"dijit/form/CheckBox",
	"ecm/widget/RadioButton",
	"ecm/widget/ValidationTextBox",
	"dojo/store/Memory",
	"dojo/text!./templates/SettingLogging.html"
], //

function(declare, lang, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, ContentPane, BorderContainer, MessagesMixin, LoggerMixin, FilteringSelect, HoverHelp, SettingsConfig, CheckBox, RadioButton, ValidationTextBox, MemoryStore, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.SettingLogging
	 * @class Provides a widget that is used to customize the logging that is performed by the web client.
	 */
	var SettingLogging = declare("ecm.widget.admin.SettingLogging", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.SettingLogging.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);

			this.msOfficeLoggingSection.set("title", this.messages.admin_office_logging);
			this.loggingTwisty.set("title", this.messages.admin_daeja_logging);

			this.loggingLevel.setHoverHelp(this.loggingLevelHoverHelp);
			this.logClassesIncludeAll.setHoverHelp(this.logClassesFieldHoverHelp);
			this.logClassesIncludeSpecified.setHoverHelp(this.logClassesFieldHoverHelp);
			this.logClassesIncludeSpecifiedList.setHoverHelp(this.logClassesFieldHoverHelp);
			this.logClassesExcludeNone.setHoverHelp(this.logClassesFieldHoverHelp);
			this.logClassesExcludeSpecified.setHoverHelp(this.logClassesFieldHoverHelp);
			this.logClassesExcludeSpecifiedList.setHoverHelp(this.logClassesFieldHoverHelp);
			this.logDebugNone.setHoverHelp(this.logDebugFieldHoverHelp);
			this.logDebugHost.setHoverHelp(this.logDebugFieldHoverHelp);
			this.logDebugHostList.setHoverHelp(this.logDebugFieldHoverHelp);
			this.logDebugUser.setHoverHelp(this.logDebugFieldHoverHelp);
			this.logDebugUserList.setHoverHelp(this.logDebugFieldHoverHelp);

			this.logClassesIncludeSpecifiedList.promptMessage = this.messages.admin_logging_classes_include_specified_msg;
			this.logClassesExcludeSpecifiedList.promptMessage = this.messages.admin_logging_classes_exclude_specified_msg;
			this.logDebugHostList.promptMessage = this.messages.admin_logging_debug_host_msg;
			this.logDebugUserList.promptMessage = this.messages.admin_logging_debug_user_msg;

			this.daejaTraceEnable.setHoverHelp(this.v1proLoggingTraceHover);
			this.daejaTraceNetEnable.setHoverHelp(this.v1proLoggingTraceNetHover);
			this.daejaTraceAnnotationsEnable.setHoverHelp(this.v1proLoggingTraceAnnotationsHover);
			this.daejaVirtualTraceEnable.setHoverHelp(this.virtualLoggingTraceHover);
			this.daejaVirtualTraceNetEnable.setHoverHelp(this.virtualLoggingTraceNetHover);
			this.daejaVirtualTraceAnnotationsEnable.setHoverHelp(this.virtualLoggingTraceAnnotationsHover);
			this.daejaVirtualLogFile.setHoverHelp(this.virtualLoggingLogFileHover);
			this.daejaStreamerTraceEnable.setHoverHelp(this.streamerLoggingTraceHover);
			this.daejaStreamerTraceNetEnable.setHoverHelp(this.streamerLoggingTraceNetHover);
			this.daejaStreamerLogFile.setHoverHelp(this.streamerLoggingLogFileHover);
			this.daejaRedactionTraceEnable.setHoverHelp(this.redactionLoggingTraceHover);
			this.daejaRedactionTraceNetEnable.setHoverHelp(this.redactionLoggingTraceNetHover);
			this.daejaRedactionLogFile.setHoverHelp(this.redactionLoggingLogFileHover);
			
			this.officeLoggingLevel.setHoverHelp(this.officeLoggingLevelHoverHelp);
			this.officeLogClassesIncludeAll.setHoverHelp(this.officeLogClassesFieldHoverHelp);
			this.officeLogClassesIncludeSpecified.setHoverHelp(this.officeLogClassesFieldHoverHelp);
			this.officeLogClassesExcludeNone.setHoverHelp(this.officeLogClassesFieldHoverHelp);
			this.officeLogClassesExcludeSpecified.setHoverHelp(this.officeLogClassesFieldHoverHelp);
			this.officeLogDebugNone.setHoverHelp(this.officeLogDebugFieldHoverHelp);
			this.officeLogDebugHost.setHoverHelp(this.officeLogDebugFieldHoverHelp);
			this.officeLogDebugUser.setHoverHelp(this.officeLogDebugFieldHoverHelp);
			this.officeLoggingFileSize.setHoverHelp(this.officeLoggingFileSizeHoverHelp);
			this.officeShowStacktraceOnDialogs.setHoverHelp(this.officeShowStacktraceOnDialogsHoverHelp);
		},

		setAdminModel: function(adminModel) {
			this._settingsConfig = adminModel;
		},

		// Called when the user hits the Reset button 
		loadData: function() {
			this._init = false;
			this._loadDebugLevel();
			var loggingClassIncludes = this._settingsConfig.getLoggingClassIncludes();
			if (!loggingClassIncludes || (loggingClassIncludes.length < 1)) {
				this.logClassesIncludeAll.set('checked', true);
				loggingClassIncludes = "";
				this._settingsConfig.setLoggingClassIncludes("");
			} else {
				this.logClassesIncludeSpecified.set('checked', true);
			}
			this.logClassesIncludeSpecifiedList.set('value', loggingClassIncludes);

			var loggingClassExcludes = this._settingsConfig.getLoggingClassExcludes();
			if (!loggingClassExcludes || (loggingClassExcludes.length < 1)) {
				this.logClassesExcludeNone.set('checked', true);
				loggingClassExcludes = "";
				this._settingsConfig.setLoggingClassExcludes("");
			} else {
				this.logClassesExcludeSpecified.set('checked', true);
			}
			this.logClassesExcludeSpecifiedList.set('value', loggingClassExcludes);

			this.logDebugHostList.set('value', "");
			this.logDebugUserList.set('value', "");
			var loggingDebugHosts = this._settingsConfig.getLoggingDebugHosts();
			var loggingDebugUsers = this._settingsConfig.getLoggingDebugUsers();
			if (loggingDebugHosts && (loggingDebugHosts.length > 0)) {
				this.logDebugHost.set('checked', true);
				this.logDebugHostList.set('value', loggingDebugHosts);
				this._settingsConfig.setLoggingDebugUsers("");
			} else if (loggingDebugUsers && (loggingDebugUsers.length > 0)) {
				this.logDebugUser.set('checked', true);
				this.logDebugUserList.set('value', loggingDebugUsers);
				this._settingsConfig.setLoggingDebugHosts("");
			} else {
				this.logDebugNone.set('checked', true);
				this._settingsConfig.setLoggingDebugHosts("");
				this._settingsConfig.setLoggingDebugUsers("");
			}

			// Daeja ViewONE
			var daejaTraceEnable = this._settingsConfig.getDaejaViewONEProTrace();
			if (daejaTraceEnable) {
				this.daejaTraceEnable.set("checked", true);
			} else {
				this.daejaTraceEnable.set("checked", false);
			}

			var daejaTraceNetEnable = this._settingsConfig.getDaejaViewONEProTraceNet();
			if (daejaTraceNetEnable) {
				this.daejaTraceNetEnable.set("checked", true);
			} else {
				this.daejaTraceNetEnable.set("checked", false);
			}

			var daejaTraceAnnotationsEnable = this._settingsConfig.getDaejaViewONEProTraceAnnotations();
			if (daejaTraceAnnotationsEnable) {
				this.daejaTraceAnnotationsEnable.set("checked", true);
			} else {
				this.daejaTraceAnnotationsEnable.set("checked", false);
			}

			var daejaVirtualTraceEnable = this._settingsConfig.getDaejaVirtualTrace();
			if (daejaVirtualTraceEnable) {
				this.daejaVirtualTraceEnable.set("checked", true);
			} else {
				this.daejaVirtualTraceEnable.set("checked", false);
			}

			var daejaVirtualTraceNetEnable = this._settingsConfig.getDaejaVirtualTraceNet();
			if (daejaVirtualTraceNetEnable) {
				this.daejaVirtualTraceNetEnable.set("checked", true);
			} else {
				this.daejaVirtualTraceNetEnable.set("checked", false);
			}

			var daejaVirtualTraceAnnotationsEnable = this._settingsConfig.getDaejaVirtualTraceAnnotations();
			if (daejaVirtualTraceAnnotationsEnable) {
				this.daejaVirtualTraceAnnotationsEnable.set("checked", true);
			} else {
				this.daejaVirtualTraceAnnotationsEnable.set("checked", false);
			}

			this.daejaVirtualLogFile.set("value", this._settingsConfig.getDaejaVirtualLogFile());

			var daejaStreamerTraceEnable = this._settingsConfig.getDaejaStreamerTrace();
			if (daejaStreamerTraceEnable) {
				this.daejaStreamerTraceEnable.set("checked", true);
			} else {
				this.daejaStreamerTraceEnable.set("checked", false);
			}

			var daejaStreamerTraceNetEnable = this._settingsConfig.getDaejaStreamerTraceNet();
			if (daejaStreamerTraceNetEnable) {
				this.daejaStreamerTraceNetEnable.set("checked", true);
			} else {
				this.daejaStreamerTraceNetEnable.set("checked", false);
			}

			this.daejaStreamerLogFile.set("value", this._settingsConfig.getDaejaStreamerLogFile());

			var daejaRedactionTraceEnable = this._settingsConfig.getDaejaRedactionTrace();
			if (daejaRedactionTraceEnable) {
				this.daejaRedactionTraceEnable.set("checked", true);
			} else {
				this.daejaRedactionTraceEnable.set("checked", false);
			}

			var daejaRedactionTraceNetEnable = this._settingsConfig.getDaejaRedactionTraceNet();
			if (daejaRedactionTraceNetEnable) {
				this.daejaRedactionTraceNetEnable.set("checked", true);
			} else {
				this.daejaRedactionTraceNetEnable.set("checked", false);
			}

			this.daejaRedactionLogFile.set("value", this._settingsConfig.getDaejaRedactionLogFile());

			//office integration 
			var officeLoggingClassIncludes = this._settingsConfig.getOfficeLoggingClassIncludes();
			if (!officeLoggingClassIncludes || (officeLoggingClassIncludes.length < 1)) {
				this.officeLogClassesIncludeAll.set('checked', true);
				officeLoggingClassIncludes = "";
				this._settingsConfig.setOfficeLoggingClassIncludes("");
			} else {
				this.officeLogClassesIncludeSpecified.set('checked', true);
			}
			this.officeLogClassesIncludeSpecifiedList.set('value', officeLoggingClassIncludes);

			var officeLoggingClassExcludes = this._settingsConfig.getOfficeLoggingClassExcludes();
			if (!officeLoggingClassExcludes || (officeLoggingClassExcludes.length < 1)) {
				this.officeLogClassesExcludeNone.set('checked', true);
				officeLoggingClassExcludes = "";
				this._settingsConfig.setOfficeLoggingClassExcludes("");
			} else {
				this.officeLogClassesExcludeSpecified.set('checked', true);
			}
			this.officeLogClassesExcludeSpecifiedList.set('value', officeLoggingClassExcludes);

			this.officeLogDebugHostList.set('value', "");
			this.officeLogDebugUserList.set('value', "");
			var officeLoggingDebugHosts = this._settingsConfig.getOfficeLoggingDebugHosts();
			var officeLoggingDebugUsers = this._settingsConfig.getOfficeLoggingDebugUsers();
			if (officeLoggingDebugHosts && (officeLoggingDebugHosts.length > 0)) {
				this.officeLogDebugHost.set('checked', true);
				this.officeLogDebugHostList.set('value', officeLoggingDebugHosts);
				this._settingsConfig.setOfficeLoggingDebugUsers("");
			} else if (officeLoggingDebugUsers && (officeLoggingDebugUsers.length > 0)) {
				this.officeLogDebugUser.set('checked', true);
				this.officeLogDebugUserList.set('value', officeLoggingDebugUsers);
				this._settingsConfig.setOfficeLoggingDebugHosts("");
			} else {
				this.officeLogDebugNone.set('checked', true);
				this._settingsConfig.setOfficeLoggingDebugHosts("");
				this._settingsConfig.setOfficeLoggingDebugUsers("");
			}

			var officeLoggingFileSize = this._settingsConfig.getOfficeLoggingFileSize();
			if (officeLoggingFileSize > 0)
				this.officeLoggingFileSize.set('value', officeLoggingFileSize);
			else
				this.officeLoggingFileSize.set('value', 10);

			var officeShowStacktraceOnDialogs = this._settingsConfig.getOfficeShowStacktraceOnDialogs();
			if (officeShowStacktraceOnDialogs == "true")
				this.officeShowStacktraceOnDialogs.set('checked', true);
			else
				this.officeShowStacktraceOnDialogs.set('checked', false);
			// end of office

			this._enableFields();
			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 200);
		},

		_loadDebugLevel: function() {
			this.loggingLevel.set("store", new MemoryStore({
				data: [
					{
						"id": "0",
						"label": this.messages.admin_logging_level_0
					},
					{
						"id": "1",
						"label": this.messages.admin_logging_level_1
					},
					{
						"id": "2",
						"label": this.messages.admin_logging_level_2
					},
					{
						"id": "3",
						"label": this.messages.admin_logging_level_3
					},
					{
						"id": "4",
						"label": this.messages.admin_logging_level_4
					}
				]
			}));
			var loggingLevel = this._settingsConfig.getLoggingLevel();
			if (loggingLevel != null) {
				this.loggingLevel.set('value', loggingLevel);
			} else {
				this.loggingLevel.set('value', 2);
			}

			//office integration
			this.officeLoggingLevel.set("store", new MemoryStore({
				data: [
					{
						"id": "0",
						"label": this.messages.admin_logging_level_0
					},
					{
						"id": "1",
						"label": this.messages.admin_logging_level_1
					},
					{
						"id": "2",
						"label": this.messages.admin_logging_level_2
					},
					{
						"id": "3",
						"label": this.messages.admin_logging_level_3
					},
					{
						"id": "4",
						"label": this.messages.admin_logging_level_4
					}
				]
			}));
			var officeLoggingLevel = this._settingsConfig.getOfficeLoggingLevel();
			if (officeLoggingLevel) {
				this.officeLoggingLevel.set('value', officeLoggingLevel);
			} else {
				this.officeLoggingLevel.set('value', 2);
			}
			// end of office
		},

		// overridable
		onMarkDirty: function() {
		},

		loadWithFieldValues: function(adminModel) {
			adminModel.setLoggingLevel(this.loggingLevel.get('value').toString());

			var loggingClassIncludes = "";
			if (this.logClassesIncludeSpecified.get('checked')) {
				loggingClassIncludes = this.logClassesIncludeSpecifiedList.get('value');
			}
			adminModel.setLoggingClassIncludes(loggingClassIncludes);

			var loggingClassExcludes = "";
			if (this.logClassesExcludeSpecified.get('checked')) {
				loggingClassExcludes = this.logClassesExcludeSpecifiedList.get('value');
			}
			adminModel.setLoggingClassExcludes(loggingClassExcludes);

			var loggingDebugHosts = "";
			var loggingDebugUsers = "";
			if (this.logDebugHost.get('checked')) {
				loggingDebugHosts = this.logDebugHostList.get('value');
			} else if (this.logDebugUser.get('checked')) {
				loggingDebugUsers = this.logDebugUserList.get('value');
			}
			adminModel.setLoggingDebugHosts(loggingDebugHosts);
			adminModel.setLoggingDebugUsers(loggingDebugUsers);

			// Daeja ViewONE
			adminModel.setDaejaViewONEProTrace(this.daejaTraceEnable.get("checked"));
			adminModel.setDaejaViewONEProTraceNet(this.daejaTraceNetEnable.get("checked"));
			adminModel.setDaejaViewONEProTraceAnnotations(this.daejaTraceAnnotationsEnable.get("checked"));

			adminModel.setDaejaVirtualTrace(this.daejaVirtualTraceEnable.get("checked"));
			adminModel.setDaejaVirtualTraceNet(this.daejaVirtualTraceNetEnable.get("checked"));
			adminModel.setDaejaVirtualTraceAnnotations(this.daejaVirtualTraceAnnotationsEnable.get("checked"));
			adminModel.setDaejaVirtualLogFile(this.daejaVirtualLogFile.get("value"));

			adminModel.setDaejaStreamerTrace(this.daejaStreamerTraceEnable.get("checked"));
			adminModel.setDaejaStreamerTraceNet(this.daejaStreamerTraceNetEnable.get("checked"));
			adminModel.setDaejaStreamerLogFile(this.daejaStreamerLogFile.get("value"));

			adminModel.setDaejaRedactionTrace(this.daejaRedactionTraceEnable.get("checked"));
			adminModel.setDaejaRedactionTraceNet(this.daejaRedactionTraceNetEnable.get("checked"));
			adminModel.setDaejaRedactionLogFile(this.daejaRedactionLogFile.get("value"));

			//office integration
			adminModel.setOfficeLoggingLevel(this.officeLoggingLevel.get('value').toString());

			var officeLoggingClassIncludes = "";
			if (this.officeLogClassesIncludeSpecified.get('checked')) {
				officeLoggingClassIncludes = this.officeLogClassesIncludeSpecifiedList.get('value');
			}
			adminModel.setOfficeLoggingClassIncludes(officeLoggingClassIncludes);

			var officeLoggingClassExcludes = "";
			if (this.officeLogClassesExcludeSpecified.get('checked')) {
				officeLoggingClassExcludes = this.officeLogClassesExcludeSpecifiedList.get('value');
			}
			adminModel.setOfficeLoggingClassExcludes(officeLoggingClassExcludes);

			var officeLoggingDebugHosts = "";
			var officeLoggingDebugUsers = "";
			if (this.officeLogDebugHost.get('checked')) {
				officeLoggingDebugHosts = this.officeLogDebugHostList.get('value');
			} else if (this.officeLogDebugUser.get('checked')) {
				officeLoggingDebugUsers = this.officeLogDebugUserList.get('value');
			}
			adminModel.setOfficeLoggingDebugHosts(officeLoggingDebugHosts);
			adminModel.setOfficeLoggingDebugUsers(officeLoggingDebugUsers);

			var officeShowStacktraceOnDialogs = "";
			if (this.officeShowStacktraceOnDialogs.get('checked'))
				officeShowStacktraceOnDialogs = true;
			else
				officeShowStacktraceOnDialogs = false;

			adminModel.setOfficeShowStacktraceOnDialogs(officeShowStacktraceOnDialogs);

			var officeLoggingFileSize = this.officeLoggingFileSize.get('value');
			adminModel.setOfficeLoggingFileSize(officeLoggingFileSize);
			//end of office
		},

		isResetingFields: function(modelItem) {
			var noChange = true;
			if (!modelItem || (modelItem == null)) {
				modelItem = this._settingsConfig;
			}

			if (modelItem.getLoggingLevel() != this.loggingLevel.get('value')) {
				noChange = false;
			}
			if (noChange) {
				var loggingClassIncludes = "";
				if (this.logClassesIncludeSpecified.get('checked')) {
					loggingClassIncludes = this.logClassesIncludeSpecifiedList.get('value');
					if (loggingClassIncludes.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				}
				if (modelItem.getLoggingClassIncludes() != loggingClassIncludes) {
					noChange = false;
				}
			}
			if (noChange) {
				var loggingClassExcludes = "";
				if (this.logClassesExcludeSpecified.get('checked')) {
					loggingClassExcludes = this.logClassesExcludeSpecifiedList.get('value');
					if (loggingClassExcludes.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				}
				if (modelItem.getLoggingClassExcludes() != loggingClassExcludes) {
					noChange = false;
				}
			}
			if (noChange) {
				var loggingDebugHosts = "";
				var loggingDebugUsers = "";
				if (this.logDebugHost.get('checked')) {
					loggingDebugHosts = this.logDebugHostList.get('value');
					if (loggingDebugHosts.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				} else if (this.logDebugUser.get('checked')) {
					loggingDebugUsers = this.logDebugUserList.get('value');
					if (loggingDebugUsers.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				}
				if ((modelItem.getLoggingDebugHosts() != loggingDebugHosts) || (modelItem.getLoggingDebugUsers() != loggingDebugUsers)) {
					noChange = false;
				}
			}

			//office integration
			if (modelItem.getOfficeLoggingLevel() != this.officeLoggingLevel.get('value')) {
				noChange = false;
			}
			if (noChange) {
				var officeLoggingClassIncludes = "";
				if (this.officeLogClassesIncludeSpecified.get('checked')) {
					officeLoggingClassIncludes = this.officeLogClassesIncludeSpecifiedList.get('value');
					if (officeLoggingClassIncludes.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				}
				if (modelItem.getOfficeLoggingClassIncludes() != officeLoggingClassIncludes) {
					noChange = false;
				}
			}
			if (noChange) {
				var officeLoggingClassExcludes = "";
				if (this.officeLogClassesExcludeSpecified.get('checked')) {
					officeLoggingClassExcludes = this.officeLogClassesExcludeSpecifiedList.get('value');
					if (officeLoggingClassExcludes.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				}
				if (modelItem.getOfficeLoggingClassExcludes() != officeLoggingClassExcludes) {
					noChange = false;
				}
			}
			if (noChange) {
				var officeLoggingDebugHosts = "";
				var officeLoggingDebugUsers = "";
				if (this.officeLogDebugHost.get('checked')) {
					officeLoggingDebugHosts = this.officeLogDebugHostList.get('value');
					if (officeLoggingDebugHosts.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				} else if (this.officeLogDebugUser.get('checked')) {
					officeLoggingDebugUsers = this.officeLogDebugUserList.get('value');
					if (officeLoggingDebugUsers.length < 1) { // not valid; radio button must have changed
						noChange = false;
					}
				}
				if ((modelItem.getOfficeLoggingDebugHosts() != officeLoggingDebugHosts) || (modelItem.getOfficeLoggingDebugUsers() != officeLoggingDebugUsers)) {
					noChange = false;
				}
			}

			if (noChange) {
				var officeLoggingFileSize = this.officeLoggingFileSize.get('value');
				if (officeLoggingFileSize.length < 1)
					noChange = false;
			}
			//end of office
			return noChange;
		},

		_onFieldChange: function() {
			if (this._init) {
				this.onMarkDirty();
			}
		},

		onHelp: function() { // invoked when the help link is clicked
			ecm.model.admin.appCfg.openSupport2HelpWindow("eucts003.htm");
		},

		_enableFields: function() {
			this.logClassesIncludeSpecifiedList.set('disabled', !this.logClassesIncludeSpecified.get('checked'));
			this.logClassesExcludeSpecifiedList.set('disabled', !this.logClassesExcludeSpecified.get('checked'));
			this.logDebugHostList.set('disabled', !this.logDebugHost.get('checked'));
			this.logDebugUserList.set('disabled', !this.logDebugUser.get('checked'));

			//office integration
			this.officeLogClassesIncludeSpecifiedList.set('disabled', !this.officeLogClassesIncludeSpecified.get('checked'));
			this.officeLogClassesExcludeSpecifiedList.set('disabled', !this.officeLogClassesExcludeSpecified.get('checked'));
			this.officeLogDebugHostList.set('disabled', !this.officeLogDebugHost.get('checked'));
			this.officeLogDebugUserList.set('disabled', !this.officeLogDebugUser.get('checked'));
		},

		_onLogClassesIncludeAll: function() {
			this.logClassesIncludeSpecifiedList.set('disabled', true);
			if (!this.logClassesIncludeSpecifiedList.get('value'))
				this.logClassesIncludeSpecifiedList.reset();
		},
		//office integration
		_onOfficeLogClassesIncludeAll: function() {
			this.officeLogClassesIncludeSpecifiedList.set('disabled', true);
			if (!this.officeLogClassesIncludeSpecifiedList.get('value'))
				this.officeLogClassesIncludeSpecifiedList.reset();
		},

		_onLogClassesIncludeSpecified: function() {
			this.logClassesIncludeSpecifiedList.set('disabled', false);
		},

		_onOfficeLogClassesIncludeSpecified: function() {
			this.officeLogClassesIncludeSpecifiedList.set('disabled', false);
		},

		_onLogClassesExcludeNone: function() {
			this.logClassesExcludeSpecifiedList.set('disabled', true);
			if (!this.logClassesExcludeSpecifiedList.get('value'))
				this.logClassesExcludeSpecifiedList.reset();
		},

		_onOfficeLogClassesExcludeNone: function() {
			this.officeLogClassesExcludeSpecifiedList.set('disabled', true);
			if (!this.officeLogClassesExcludeSpecifiedList.get('value'))
				this.officeLogClassesExcludeSpecifiedList.reset();
		},

		_onLogClassesExcludeSpecified: function() {
			this.logClassesExcludeSpecifiedList.set('disabled', false);
		},

		_onOfficeLogClassesExcludeSpecified: function() {
			this.officeLogClassesExcludeSpecifiedList.set('disabled', false);
		},
//end of office
		_onLogDebugNone: function() {
			this.logDebugHostList.set('disabled', true);
			if (!this.logDebugHostList.get('value'))
				this.logDebugHostList.reset();
			this.logDebugUserList.set('disabled', true);
			if (!this.logDebugUserList.get('value'))
				this.logDebugUserList.reset();
		},

		_onOfficeLogDebugNone: function() {
			this.officeLogDebugHostList.set('disabled', true);
			if (!this.officeLogDebugHostList.get('value'))
				this.officeLogDebugHostList.reset();
			this.officeLogDebugUserList.set('disabled', true);
			if (!this.officeLogDebugUserList.get('value'))
				this.officeLogDebugUserList.reset();
		},

		_onLogDebugHost: function() {
			this.logDebugHostList.set('disabled', false);
			this.logDebugUserList.set('disabled', true);
		},

		_onOfficeLogDebugHost: function() {
			this.officeLogDebugHostList.set('disabled', false);
			this.officeLogDebugUserList.set('disabled', true);
		},

		_onLogDebugUser: function() {
			this.logDebugUserList.set('disabled', false);
			this.logDebugHostList.set('disabled', true);
		},

		_onOfficeLogDebugUser: function() {
			this.officeLogDebugUserList.set('disabled', false);
			this.officeLogDebugHostList.set('disabled', true);
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			var isValid = true;
			if (!this.loggingLevel.isValid()) {
				isValid = false;
			}
			if (isValid && this.logClassesIncludeSpecified.get('checked')) {
				if (this.logClassesIncludeSpecifiedList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid && this.logClassesExcludeSpecified.get('checked')) {
				if (this.logClassesExcludeSpecifiedList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid && this.logDebugHost.get('checked')) {
				if (this.logDebugHostList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid && this.logDebugUser.get('checked')) {
				if (this.logDebugUserList.get('value').length < 1) {
					isValid = false;
				}
			}

			//office integration
			if (!this.officeLoggingLevel.isValid()) {
				isValid = false;
			}
			if (isValid && this.officeLogClassesIncludeSpecified.get('checked')) {
				if (this.officeLogClassesIncludeSpecifiedList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid && this.officeLogClassesExcludeSpecified.get('checked')) {
				if (this.officeLogClassesExcludeSpecifiedList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid && this.officeLogDebugHost.get('checked')) {
				if (this.officeLogDebugHostList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid && this.officeLogDebugUser.get('checked')) {
				if (this.officeLogDebugUserList.get('value').length < 1) {
					isValid = false;
				}
			}
			if (isValid) {
				if (this.officeLoggingFileSize.get('value').length < 1) {
					isValid = false;
				}
			}
			//end of office
			return isValid;
		},

		resize: function() {
			this.borderContainer.resize();
		}
	});

	return SettingLogging;
});

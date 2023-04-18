/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/string",
	"dojo/_base/sniff",
	"dojo/keys",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/FilteringSelect",
	"ecm/widget/HoverHelp",
	"ecm/widget/RadioButton",
	"ecm/widget/CheckBox",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/NumberSpinner",
	"idx/layout/TitlePane",
	"ecm/model/Request",
	"ecm/model/Desktop",
	"ecm/model/admin/SyncServerData",
	"ecm/model/admin/SyncConfig",
	"ecm/widget/layout/TabController",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabSyncServer.html"
], //

function(declare, lang, array, aspect, domClass, string, has, keys, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, TabContainer, BorderContainer, //
MessagesMixin, _NavigatorAdminTabBase, FilteringSelect, HoverHelp, RadioButton, CheckBox, ValidationTextBox, NumberSpinner, TitlePane, Request, Desktop, SyncServerData, SyncConfig, //
TabController, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabSyncServer
	 * @class Provides a widget that contains the widgets that are used to set values that apply to the sync server.
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.TabSyncServer", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.TabSyncServer.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_SECURITY_TOPIC: {
			category: "sync.sync"
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.syncServerData = SyncServerData.createSyncServerData(this._SECURITY_TOPIC);
			this._init = false;
			this.generalContentPane.set("title", this.messages.admin_general);
			this._disableSave();
			this._disableReset();
			this._setHoverHelp();
			this._loadData();
		},

		/**
		 * Overwritten to load the application configuration data from the database.
		 */
		_loadData: function() {
			this.syncServerData.loadData(lang.hitch(this, function() {
				this._loadUI();
				this._checkSave();
			}));
		},

		_loadUI: function() {
			this._init = false;
			this.publicSyncUrl.set("value", this.syncServerData.publicSyncUrl);
			this._loadAdminConfigUI();
			this.runConsistencyCheckerButton.set("disabled", true);
			this.runDBCleanUpButton.set("disabled", true);

			this._checkConsistencyProgress();
			this._checkDBCleanUpProgress();

			setTimeout(lang.hitch(this, function() {
				this._init = true;
			}), 200);
		},

		_loadAdminConfigUI: function() {
			this.subfolderLevelsCheckbox.set("checked", this.syncServerData.syncConfig.getManageSubfolderLevels());
			this.subfolderLevelsSelect.set("value", this.syncServerData.syncConfig.getManageSubfolderLevelType());
			this.subfolderLevelNumber.set("value", this.syncServerData.syncConfig.getManageSubfolderLevelNoMoreNumber());
			this._onClickSubfolderLevels();

			this.scheduleCheckbox.set("checked", this.syncServerData.syncConfig.getManageSchedule());
			this.scheduleSelect.set("value", this.syncServerData.syncConfig.getManageScheduleType());
			this.scheduleEveryNumber.set("value", this.syncServerData.syncConfig.getManageScheduleEveryNumber());
			this.scheduleEveryMinutesOrHours.set("value", this.syncServerData.syncConfig.getManageScheduleEveryTime());
			this._onClickSchedule();
			this._onScheduleEveryMinutesOrHoursChange();
		},

		_setHoverHelp: function() {
			this.publicSyncUrl.setHoverHelp(this.publicSyncUrlHoverHelp);
			this.scheduleCheckbox.setHoverHelp(this.scheduleCheckboxHoverHelp);
			this.subfolderLevelsCheckbox.setHoverHelp(this.subfolderLevelsCheckboxHoverHelp);
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			var isResetting = true;
			return isResetting;
		},

		_loadWithFieldValues: function(adminModel) {
			adminModel.publicSyncUrl = this.publicSyncUrl.get("value");

			// save the managed settings data
			adminModel.syncConfig.setManageSubfolderLevels(this.subfolderLevelsCheckbox.get("checked"));
			adminModel.syncConfig.setManageSubfolderLevelType(this.subfolderLevelsSelect.get("value"));
			if (adminModel.syncConfig.getManageSubfolderLevelType() == "interval") {
				adminModel.syncConfig.setManageSubfolderLevelNoMoreNumber(this.subfolderLevelNumber.get("value"));
			}

			adminModel.syncConfig.setManageSchedule(this.scheduleCheckbox.get("checked"));
			adminModel.syncConfig.setManageScheduleType(this.scheduleSelect.get("value"));
			if (adminModel.syncConfig.getManageScheduleType() == "every") {
				adminModel.syncConfig.setManageScheduleEveryNumber(this.scheduleEveryNumber.get("value"));
				adminModel.syncConfig.setManageScheduleEveryTime(this.scheduleEveryMinutesOrHours.get("value"));
			}
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(onComplete) {
			this._loadWithFieldValues(this.syncServerData);
			this.syncServerData.save(function() {
				if (onComplete) {
					onComplete(true);
				}
			});
		},

		resize: function() {
			this.borderContainer.resize();
			this.inherited(arguments);
		},

		_onClickSubfolderLevels: function() {
			var bool = !this.subfolderLevelsCheckbox.get("checked");
			this.subfolderLevelsSelect.set("disabled", bool);
			if (bool) {
				this.subfolderLevelNumber.set("disabled", true);
			} else {
				this.subfolderLevelNumber.set("disabled", this.subfolderLevelsSelect.get("value") != "interval");
			}
			this.onChange();
		},
		_onChangeSubfolderLevelsSelect: function() {
			var subfolderLevelsCheckbox = this.subfolderLevelsCheckbox.get("checked");
			if (!subfolderLevelsCheckbox || this.subfolderLevelsSelect.get("value") != "interval") {
				this.subfolderLevelNumber.set("disabled", true);
			} else {
				this.subfolderLevelNumber.set("disabled", false);
			}
			this.onChange();
		},

		_onClickSchedule: function() {
			var bool = !this.scheduleCheckbox.get("checked");
			this.scheduleSelect.set("disabled", bool);
			if (bool) {
				this.scheduleEveryNumber.set("disabled", true);
				this.scheduleEveryMinutesOrHours.set("disabled", true);
			} else {
				bool = this.scheduleSelect.get("value") != "every";
				this.scheduleEveryNumber.set("disabled", bool);
				this.scheduleEveryMinutesOrHours.set("disabled", bool);
			}
			this.onChange();
		},
		_onChangeScheduleSelect: function() {
			var scheduleCheckbox = this.scheduleCheckbox.get("checked");
			var val = this.scheduleSelect.get("value");
			if (!scheduleCheckbox || val != "every") {
				this.scheduleEveryNumber.set("disabled", true);
				this.scheduleEveryMinutesOrHours.set("disabled", true);
			} else {
				this.scheduleEveryNumber.set("disabled", false);
				this.scheduleEveryMinutesOrHours.set("disabled", false);
			}
			this.onChange();
		},
		_onScheduleEveryMinutesOrHoursChange: function() {
			var value = this.scheduleEveryMinutesOrHours.get("value");
			var constraints = this.scheduleEveryNumber.get("constraints");
			if (value == "hours") {
				constraints.max = 24;
			} else {
				constraints.max = 1440;
			}
			this.scheduleEveryNumber.set("constraints", constraints);
			this.onChange();
		},

		_onClickRunConsistencyChecker: function() {
			var params = {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			};
			var request = Request.invokeService("sync/startSyncConsistencyChecker", null, params, lang.hitch(this, function(response) {
				var data = {};
				if (response && response.states) {
					data = response.states;
				}
				this._showConsistencyProgress(data);
				this.runConsistencyCheckerButton.set("disabled", true);
				this._checkConsistencyProgress();
			}), null, null, lang.hitch(this, function(response) {
				this.runConsistencyCheckerButton.set("disabled", false);
				this._showConsistencyProgress();
			}));
		},

		_onClickRunDBCleanUpButton: function() {
			var params = {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			};
			var request = Request.invokeService("sync/startSyncDBCleaner", null, params, lang.hitch(this, function(response) {
				var data = {};
				if (response && response.states) {
					data = response.states;
				}
				this._showDBCleanUpProgress(data);
				this.runDBCleanUpButton.set("disabled", true);
				this._checkDBCleanUpProgress();
			}), null, null, lang.hitch(this, function(response) {
				this.runDBCleanUpButton.set("disabled", false);
				this._showDBCleanUpProgress();
				//this._showDBCleanUpProgress({"submitter":"P8Admin","scheduled_time":"2014-05-30T20:34:31Z"});
			}));
		},

		/**
		 * Overwritten to check if all fields are valid.
		 */
		_validateData: function() {
			if (!this.publicSyncUrl.isValid()) {
				return false;
			}
			if (this.subfolderLevelsCheckbox.get("checked") && this.subfolderLevelsSelect.get("value") == "interval" && !this.subfolderLevelNumber.isValid()) {
				return false;
			}
			if (this.scheduleCheckbox.get("checked")) {
				if (!this.scheduleSelect.isValid()) {
					return false;
				}
				if (this.scheduleSelect.get("value") == "every") {
					if (!this.scheduleEveryMinutesOrHours.isValid()) {
						return false;
					}
					if (!this.scheduleEveryNumber.isValid()) {
						return false;
					}
				}
			}
			return true;
		},

		onChange: function() {
			if (this._init) {
				this._markDirty();
			}
		},

		_checkConsistencyProgress: function() {
			var params = {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			};
			var request = Request.invokeService("sync/getSyncConsistencyCheckerProgress", null, params, lang.hitch(this, function(response) {
				var data = null;
				if (response && response.states) {
					data = response.states;
				}
				this._showConsistencyProgress(data);

				var running = (data && data.state == "running");
				if (running) {
					this.runConsistencyCheckerButton.set("disabled", true);
					setTimeout(lang.hitch(this, function() {
						this._checkConsistencyProgress();
					}), 24000);
				} else {
					this.runConsistencyCheckerButton.set("disabled", false);
				}
			}), null, null, lang.hitch(this, function(response) {
				this.runConsistencyCheckerButton.set("disabled", false);
				this._showConsistencyProgress();
				/* this._showConsistencyProgress({
					"total_counter": 4,
					"state": "done",
					"changed_items_counter": 0,
					"processed_successfully_counter": 4,
					"newly_discovered_counter": 0,
					"stop_time": "2013-05-30T07:00:00Z",
					"start_time": "2013-05-30T07:00:00Z",
					"submitter": "carolyn",
					"scheduled_time": "2013-05-30T07:00:00Z"
				});  */
			}));
		},

		_checkDBCleanUpProgress: function() {
			var params = {
				application: ecm.model.admin.appCfg.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				securityTopic: this._SECURITY_TOPIC.category
			};
			var request = Request.invokeService("sync/getSyncDBCleanerProgress", null, params, lang.hitch(this, function(response) {
				var data = null;
				if (response && response.states) {
					data = response.states;
				}
				this._showDBCleanUpProgress(data);

				var running = (data && data.state == "running");
				if (running) {
					this.runDBCleanUpButton.set("disabled", true);
					setTimeout(lang.hitch(this, function() {
						this._checkDBCleanUpProgress();
					}), 24000);
				} else {
					this.runDBCleanUpButton.set("disabled", false);
				}
			}), null, null, lang.hitch(this, function(response) {
				this.runDBCleanUpButton.set("disabled", false);
				this._showDBCleanUpProgress();
			}));
		},

		_showConsistencyProgress: function(data) {
			if (data && data.state) {
				domClass.remove(this.stateRow, "dijitHidden");
				var label = ecm.messages["admin_syncserver_consistency_checker_state_" + data.state] || data.state;
				this.stateTD.innerHTML = label;
				domClass.remove(this.stateRow, "dijitHidden");
			} else {
				domClass.add(this.stateRow, "dijitHidden");
			}
			if (data && data.start_time) {
				this.startTimeTD.innerHTML = Desktop.valueFormatter.formatValue(data.start_time, "xs:timestamp");
				domClass.remove(this.startTimeRow, "dijitHidden");
			} else {
				domClass.add(this.startTimeRow, "dijitHidden");
			}
			if (data && data.stop_time) {
				this.stopTimeTD.innerHTML = Desktop.valueFormatter.formatValue(data.stop_time, "xs:timestamp");
				domClass.remove(this.stopTimeRow, "dijitHidden");
			} else {
				domClass.add(this.stopTimeRow, "dijitHidden");
			}
			if (data && data.changed_items_counter != undefined) {
				this.changedItemsTD.innerHTML = Desktop.valueFormatter.formatValue(data.changed_items_counter, "xs:integer");
				domClass.remove(this.changedItemsRow, "dijitHidden");
			} else {
				domClass.add(this.changedItemsRow, "dijitHidden");
			}
			if (data && data.processed_successfully_counter != undefined) {
				this.processedSuccessTD.innerHTML = Desktop.valueFormatter.formatValue(data.processed_successfully_counter, "xs:integer");
				domClass.remove(this.processedSuccessRow, "dijitHidden");
			} else {
				domClass.add(this.processedSuccessRow, "dijitHidden");
			}
			if (data && data.newly_discovered_counter != undefined) {
				this.newlyDiscoveredTD.innerHTML = Desktop.valueFormatter.formatValue(data.newly_discovered_counter, "xs:integer");
				domClass.remove(this.newlyDiscoveredRow, "dijitHidden");
			} else {
				domClass.add(this.newlyDiscoveredRow, "dijitHidden");
			}
			if (data && data.total_counter != undefined) {
				this.totalTD.innerHTML = Desktop.valueFormatter.formatValue(data.total_counter, "xs:integer");
				domClass.remove(this.totalRow, "dijitHidden");
			} else {
				domClass.add(this.totalRow, "dijitHidden");
			}
			if (data && data.submitter) {
				this.submitterTD.innerHTML = data.submitter;
				domClass.remove(this.scheduledRow, "dijitHidden");
			} else {
				domClass.add(this.submitterRow, "dijitHidden");
			}
			if (data && data.scheduled_time) {
				this.scheduledTD.innerHTML = Desktop.valueFormatter.formatValue(data.scheduled_time, "xs:timestamp");
				domClass.remove(this.scheduledRow, "dijitHidden");
			} else {
				domClass.add(this.scheduledRow, "dijitHidden");
			}
		},

		_showDBCleanUpProgress: function(data) {
			if (data && data.state) {
				var label = ecm.messages["admin_syncserver_dbcleanup_state_" + data.state] || data.state;
				this.dbCleanUp_stateTD.innerHTML = label;
				domClass.remove(this.dbCleanUp_stateRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_stateRow, "dijitHidden");
			}

			if (data && data.start_time) {
				this.dbCleanUp_startTimeTD.innerHTML = Desktop.valueFormatter.formatValue(data.start_time, "xs:timestamp");
				domClass.remove(this.dbCleanUp_startTimeRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_startTimeRow, "dijitHidden");
			}

			if (data && data.stop_time) {
				this.dbCleanUp_stopTimeTD.innerHTML = Desktop.valueFormatter.formatValue(data.stop_time, "xs:timestamp");
				domClass.remove(this.dbCleanUp_stopTimeRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_stopTimeRow, "dijitHidden");
			}

			if (data && data.repository_deleted_count != undefined) {
				this.dbCleanUp_repositoryDeletedCountTD.innerHTML = Desktop.valueFormatter.formatValue(data.repository_deleted_count, "xs:integer");
				domClass.remove(this.dbCleanUp_repositoryDeletedCountRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_repositoryDeletedCountRow, "dijitHidden");
			}

			if (data && data.syncitem_deleted_count != undefined) {
				this.dbCleanUp_syncItemDeletedCountTD.innerHTML = Desktop.valueFormatter.formatValue(data.syncitem_deleted_count, "xs:integer");
				domClass.remove(this.dbCleanUp_syncItemDeletedCountRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_syncItemDeletedCountRow, "dijitHidden");
			}

			if (data && data.device_deleted_count != undefined) {
				this.dbCleanUp_deviceDeletedCountTD.innerHTML = Desktop.valueFormatter.formatValue(data.device_deleted_count, "xs:integer");
				domClass.remove(this.dbCleanUp_deviceDeletedCountRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_deviceDeletedCountRow, "dijitHidden");
			}

			if (data && data.device_expired_count != undefined) {
				this.dbCleanUp_deviceExpiredCountTD.innerHTML = Desktop.valueFormatter.formatValue(data.device_expired_count, "xs:integer");
				domClass.remove(this.dbCleanUp_deviceExpiredCountRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_deviceExpiredCountRow, "dijitHidden");
			}

			if (data && data.submitter) {
				this.dbCleanUp_submitterTD.innerHTML = data.submitter;
				domClass.remove(this.dbCleanUp_scheduledRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_submitterRow, "dijitHidden");
			}

			if (data && data.scheduled_time) {
				this.dbCleanUp_scheduledTD.innerHTML = Desktop.valueFormatter.formatValue(data.scheduled_time, "xs:timestamp");
				domClass.remove(this.dbCleanUp_scheduledRow, "dijitHidden");
			} else {
				domClass.add(this.dbCleanUp_scheduledRow, "dijitHidden");
			}
		}
	});
});

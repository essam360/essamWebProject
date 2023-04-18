/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ConfigurationObject"
], function(declare, lang, _ConfigurationObject) {

	/**
	 * @name ecm.model.admin.SyncConfig
	 * @class Represents the configuration information for sync settings.
	 * @augments ecm.model.admin._ConfigurationObject
	 * @since 2.0.3
	 * @public
	 */
	var SyncConfig = declare("ecm.model.admin.SyncConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.SyncConfig.prototype */

		MANAGE_SUBFOLDER_LEVELS: "manage.subfolderLevels",
		MANAGE_SUBFOLDER_LEVEL_TYPE: "manage.subfolderLevelType",
		MANAGE_SUBFOLDER_LEVEL_NO_MORE_NUMBER: "manage.subfolderLevelNoMoreNumber",

		MANAGE_SCHEDULE: "manage.schedule",
		MANAGE_SCHEDULE_TYPE: "manage.scheduleType",
		MANAGE_SCHEDULE_EVERY_NUMBER: "manage.scheduleEveryNumber",
		MANAGE_SCHEDULE_EVERY_TIME: "manage.scheduleEveryTime",

		constructor: function(id, name) {
			//this.logDebug("SyncConfig constructor");
		},

		getManageSubfolderLevels: function() {
			return this.getValue(this.MANAGE_SUBFOLDER_LEVELS, false);
		},

		setManageSubfolderLevels: function(v) {
			this.setValue(this.MANAGE_SUBFOLDER_LEVELS, v);
		},

		getManageSubfolderLevelType: function() {
			return this.getValue(this.MANAGE_SUBFOLDER_LEVEL_TYPE, "interval");
		},

		setManageSubfolderLevelType: function(v) {
			this.setValue(this.MANAGE_SUBFOLDER_LEVEL_TYPE, v);
		},

		getManageSubfolderLevelNoMoreNumber: function() {
			return this.getValue(this.MANAGE_SUBFOLDER_LEVEL_NO_MORE_NUMBER, "2");
		},

		setManageSubfolderLevelNoMoreNumber: function(v) {
			this.setValue(this.MANAGE_SUBFOLDER_LEVEL_NO_MORE_NUMBER, v);
		},

		getManageSchedule: function() {
			return this.getValue(this.MANAGE_SCHEDULE, false);
		},

		setManageSchedule: function(v) {
			this.setValue(this.MANAGE_SCHEDULE, v);
		},

		getManageScheduleType: function() {
			return this.getValue(this.MANAGE_SCHEDULE_TYPE, "every");
		},

		setManageScheduleType: function(v) {
			this.setValue(this.MANAGE_SCHEDULE_TYPE, v);
		},

		getManageScheduleEveryNumber: function() {
			return this.getValue(this.MANAGE_SCHEDULE_EVERY_NUMBER, "15");
		},

		setManageScheduleEveryNumber: function(v) {
			this.setValue(this.MANAGE_SCHEDULE_EVERY_NUMBER, v);
		},

		getManageScheduleEveryTime: function() {
			return this.getValue(this.MANAGE_SCHEDULE_EVERY_TIME, "minutes");
		},

		setManageScheduleEveryTime: function(v) {
			this.setValue(this.MANAGE_SCHEDULE_EVERY_TIME, v);
		}
	});

	/**
	 * Static function that constructs a application sync config object.
	 * 
	 * @param id
	 *            Sync identifier
	 * @memberof ecm.model.admin.SyncConfig
	 */
	SyncConfig.createSyncConfig = function(id) {
		return new SyncConfig(id, "SyncConfig");
	};
	return SyncConfig;
});

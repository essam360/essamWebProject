/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"./_ConfigurationObject"
], function(declare, _ConfigurationObject) {
	var UserActionMacroConfig = declare("ecm.model.admin.UserActionMacroConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.UserActionMacroConfig.prototype */

		NAME: "name",
		SERVER_TYPE: "serverType",
		USER_PROPERTY: "userProperty",
		DATE_PROPERTY: "dateProperty",
		RESERVED: "reserved",

		constructor: function(id, name) {
			this.logDebug("UserActionMacroConfig constructor");
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getServerType: function() {
			return this.getValue(this.SERVER_TYPE);
		},

		setServerType: function(serverType) {
			this.setValue(this.SERVER_TYPE, serverType);
		},

		getUserProperty: function() {
			return this.getValues(this.USER_PROPERTY);
		},

		setUserProperty: function(userProperty) {
			this.setValue(this.USER_PROPERTY, userProperty);
		},

		getDateProperty: function() {
			return this.getValues(this.DATE_PROPERTY);
		},

		setDateProperty: function(dateProperty) {
			this.setValue(this.DATE_PROPERTY, dateProperty);
		},

		getReserved: function() {
			return this.getValues(this.RESERVED);
		},

		setReserved: function(reserved) {
			this.setValue(this.RESERVED, reserved);
		}
	});

	/**
	 * Static function that constructs a new user action macro configuration object.
	 * 
	 * @param id
	 *            User action macro identifier
	 * @memberof ecm.model.admin.UserActionMacroConfig
	 */
	UserActionMacroConfig.createUserActionMacroConfig = function(id) {
		return new UserActionMacroConfig(id, "UserActionMacroConfig");
	};

	return UserActionMacroConfig;
});

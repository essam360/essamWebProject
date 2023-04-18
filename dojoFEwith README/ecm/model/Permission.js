/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/string",
	"./_ModelObject",
	"./UserGroup",
	"./User"
], function(declare, string, _ModelObject, UserGroup, User) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Permission
	 * @class Represents the permission information that is used to grant access to an item.
	 * @augments ecm.model._ModelObject
	 */
	var Permission = declare("ecm.model.Permission", [
		_ModelObject
	], {
		/** @lends ecm.model.Permission.prototype */

		/**
		 * The grantee type. The type equals "2000" if it is a user, otherwise it is a group.
		 */
		granteeType: null,

		/**
		 * The access mask.
		 */
		accessMask: null,

		/**
		 * The access type.
		 */
		accessType: null,

		/**
		 * The inheritable depth.
		 */
		inheritableDepth: null,

		/**
		 * The permission source.
		 */
		permissionSource: null,

		/**
		 * The role name.
		 */
		roleName: null,

		/**
		 * The grantee object, either (@link ecm.model.User} or {@link ecm.model.UserGroup}
		 */
		grantee: null,

		/**
		 * @private Constructor used internally
		 */
		constructor: function() {
			this.logDebug("constructor", "arguments=" + arguments);

			if (this.granteeName) {
				this.name = this.granteeName;
				delete this.granteeName;
			}

			// Create grantee.
			if (this.granteeType == "2000") {
				this.grantee = new User({
					id: this.id,
					name: this.name,
					shortName: this.name,
					displayName: this.displayName,
					emailAddress: this.emailAddress
				});
			} else {
				this.grantee = new UserGroup({
					id: this.id,
					name: this.name,
					shortName: this.name,
					displayName: this.displayName
				});
			}
		},

		/**
		 * Returns boolean true if the permission source includes the security proxy permission.
		 */
		isSecurityProxyPermission: function() {
			return this.permissionSource == ecm.model.Permission.PERMISSION_SOURCE.SECURITY_PROXY;
		},

		json: function() {
			var jsonPermission = {};
			jsonPermission.granteeName = this.grantee.name;
			jsonPermission.accessType = this.accessType;
			jsonPermission.accessMask = this.accessMask;
			jsonPermission.granteeType = this.granteeType;
			jsonPermission.inheritableDepth = this.inheritableDepth;
			if (this.roleName)
				jsonPermission.roleName = this.roleName;
			else
				jsonPermission.roleName = null;

			return jsonPermission;
		},

		_nop: null
	});

	/**
	 * @private
	 */
	Permission.createFromJSON = function(permissionsJSON) {
		var permissions = [];
		for ( var i in permissionsJSON) {
			var permissionJSON = permissionsJSON[i];
			if (permissionJSON.id == UserGroup.AUTHENTICATED_USERS) {
				permissionJSON.displayName = ecm.messages.authenticated_users;
			}
			else if ((permissionJSON.id.lastIndexOf(UserGroup.REALM_GROUP_PREFIX), 0) === 0){
				var closingParenIndex = permissionJSON.id.indexOf(")", UserGroup.REALM_GROUP_PREFIX.length);
				if (closingParenIndex > 0){
					var realmName = permissionJSON.id.substring(UserGroup.REALM_GROUP_PREFIX.length, closingParenIndex);
					permissionJSON.displayName = string.substitute(ecm.messages.realm_users, [
					    realmName
					])
				}
			}
			if (permissionJSON.granteeType == -1)
			{
				permissionJSON.roleName = permissionJSON.displayName;
			}

			permissions.push(new Permission(permissionJSON));
		}

		return permissions;
	};

	Permission.GRANTEE_TYPE = {
		USER: 2000,
		GROUP: 2001
	};

	Permission.ACCESS_TYPE = {
		ALLOW: 1,
		DENY: 2,
		DELEGATE: 3
	};

	Permission.PERMISSION_SOURCE = {
		CLASS: 0,
		DIRECT: 1,
		POLICY: 2,
		INHERITED: 3,
		SECURITY_PROXY: 255
	};

	return Permission;
});

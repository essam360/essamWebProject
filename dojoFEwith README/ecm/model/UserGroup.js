/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/string",
	"./_ModelObject",
	"./Role"
], function(declare, array, string, _ModelObject, Role) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.UserGroup
	 * @class Represents a group of repository users. Private functions should not be used to access public members of
	 *        the class. Access member variables directly. For example:
	 *        <p>
	 *        var userGrp = new UserGroup({ id: "usergroup1", name: "usergroup1", displayName: "User Group 1" });<br>
	 *        console.debug("Display name=" + userGrp.displayName);
	 *        </p>
	 * @augments ecm.model._ModelObject
	 */
	var UserGroup = declare("ecm.model.UserGroup", [
		_ModelObject
	], {
		/** @lends ecm.model.UserGroup.prototype */

		/**
		 * The group display name (may be null).
		 */
		displayName: null,

		/**
		 * The group short name (may be null).
		 */
		shortName: null,

		/**
		 * An array of {@link ecm.model.User} objects for the users associated with this group.
		 */
		users: null,

		/**
		 * An array of {@link ecm.model.Role} objects this group is a member of.
		 */
		roles: null,

		/**
		 * @private Constructor used internally
		 */
		constructor: function(params) {
			if (params) {
				this._setRoles(params.roles);
			}
		},

		/**
		 * Sets the roles associated with this user from a roles JSON definition.
		 * 
		 * @private
		 * @param roles
		 *            JSON to read to extract role definitions.
		 */
		_setRoles: function(roles) {
			this.roles = [];

			if (roles) {
				array.forEach(roles, function(obj) {
					if (obj) {
						this.logDebug("_setRolesFromJSON", "adding role= " + obj.name);
						var roleParams = {};
						if (obj.name)
							roleParams.name = obj.name;
						if (obj.desc)
							roleParams.description = obj.desc;
						if (obj.privs)
							roleParams.privileges = obj.privs;

						var role = new Role(roleParams);
						this.roles.push(role);
					}
				}, this);
			}
		},

		/**
		 * Determines if the group has the given user.
		 * 
		 * @param userId
		 *            The ID of the user to search for in the group.
		 */
		hasUser: function(userId) {
			var hasUsr = false;

			if (this.users != null) {
				array.forEach(this.users, function(user) {
					if (user.id == userId || user.name == userId)
						hasUsr = true;
				}, this);
			}

			return hasUsr;
		},

		/**
		 * Generates a JSON representation of this user group.
		 */
		toJSON: function() {
			var jsonUser = {};
			jsonUser.id = this.id;
			jsonUser.name = this.name;
			jsonUser.shortName = this.shortName;
			jsonUser.displayName = this.displayName;
			jsonUser.isGroup = true;
			return jsonUser;
		}

	});

	UserGroup.AUTHENTICATED_USERS = "#AUTHENTICATED-USERS";

	/**
	 * Static function that creates a new pseudo user group object
	 * 
	 * @memberof ecm.model.UserGroup
	 */
	UserGroup.getAuthenticatedUsersPseudoGroup = function() {
		return new UserGroup({
			id: UserGroup.AUTHENTICATED_USERS,
			name: UserGroup.AUTHENTICATED_USERS,
			shortName: UserGroup.AUTHENTICATED_USERS,
			displayName: ecm.messages.authenticated_users
		});
	};

	UserGroup.REALM_GROUP = "#REALM-USERS(${0})";
	UserGroup.REALM_GROUP_PREFIX = UserGroup.REALM_GROUP.substring(0, UserGroup.REALM_GROUP.indexOf("(") + 1);

	/**
	 * Static function that creates a new realm pseudo group for the given realm name.
	 * For example, a user group with ID "#REALM-USERS(Internal)" is created given the realm name "Internal".
	 *
	 * @since 2.0.3.3
	 */
	UserGroup.getRealmUsersPseudoGroup = function(realmName) {
		var realmId = string.substitute(UserGroup.REALM_GROUP, [
			realmName
		]);
		return new UserGroup({
			id: realmId,
			name: realmId,
			shortName: realmId,
			displayName: string.substitute(ecm.messages.realm_users, [
				realmName
			])
		});
	};

	return UserGroup;
});

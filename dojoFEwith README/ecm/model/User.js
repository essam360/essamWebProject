/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"./_ModelObject",
	"./Role"
], function(declare, array, _ModelObject, Role) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.User
	 * @class Represents a user of the repository. Private functions should not be used to access public members of the
	 *        class. Access member variables directly. For example:
	 *        <p>
	 *        var user = new User({ id: "user1", name: "user1", emailAddress: "user1@myplace.com" });<br>
	 *        console.debug("Email address=" + user.emailAddress);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getEmailAddress, <b>will be removed</b> in a future
	 *        release.
	 * @augments ecm.model._ModelObject
	 */
	var User = declare("ecm.model.User", [
		_ModelObject
	], {
		/** @lends ecm.model.User.prototype */

		/**
		 * The user short name (may be null).
		 */
		shortName: null,

		/**
		 * The user display name (may be null).
		 */
		displayName: null,

		/**
		 * The email address of the user (if any).
		 */
		emailAddress: null,

		/**
		 * A list of the privileges the user has within the repository.
		 */
		maxPrivs: null,

		/**
		 * An array of {@link ecm.model.Role} objects this user is a member of.
		 */
		roles: null,
		/**
		 * An boolean that indicates if the user is a member of the owner role.
		 * 
		 * @since 2.0.3
		 */
		owner: false,
		/**
		 * @private
		 */
		constructor: function(params) {
			if (!this.roles) {
				this.roles = [];
			}
			if (params && params.roles) {
				this._setRoles(params.roles);
			}
		},

		/**
		 * Generates the list of roles granted to this user from the specified roles JSON object.
		 * 
		 * @param roles
		 *            JSON object defining the roles for this user.
		 */
		_setRoles: function(roles) {
			this.roles = [];

			if (roles) {
				array.forEach(roles, function(obj) {
					if (obj) {
						this.logDebug("_setRolesFromJSON", "adding role= " + obj.name);
						if (obj.owner)
							this.owner = true;
						var role = new Role({
							id: obj.id,
							name: obj.name,
							description: obj.desc,
							privileges: obj.privs
						});
						this.roles.push(role);
					}
				}, this);
			}
		},

		/**
		 * Returns true if the user has the specified privilege and false if they do not.
		 * 
		 * @param privilege
		 *            The privilege to lookup.
		 */
		hasPrivilege: function(/* String */privilege) {
			var hasPriv = false;

			if (this.maxPrivs != null) {
				array.forEach(this.maxPrivs, function(priv) {
					if (priv == privilege)
						hasPriv = true;
				}, this);
			}

			return hasPriv;
		},

		/**
		 * Generates a JSON representation of this user.
		 */
		toJSON: function() {
			var jsonUser = {};
			jsonUser.id = this.id;
			jsonUser.name = this.name;
			jsonUser.shortName = this.shortName;
			jsonUser.displayName = this.displayName;
			return jsonUser;
		},
		
		/**
		 * @since 3.0
		 * 
		 * Compare if 2 User objects have same values
		 */
		
		compare: function( user ){
			if( user && user.declaredClass && user.declaredClass == "ecm.model.User" && this.id == user.id && this.shortName == user.shortName){
				return true;
			}else{
				return false;
			}
		}
		
	});

	User.CREATOR_OWNER = "#CREATOR-OWNER";

	/**
	 * Static function that creates a new creator/owner pseudo user object
	 * 
	 * @memberof ecm.model.User
	 */
	User.getCreatorOwnerPseudoUser = function() {
		return new User({
			id: User.CREATOR_OWNER,
			name: User.CREATOR_OWNER,
			shortName: User.CREATOR_OWNER,
			displayName: User.CREATOR_OWNER
		});
	};

	return User;
});

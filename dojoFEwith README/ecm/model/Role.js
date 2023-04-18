/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"./_ModelObject"
], function(declare, array, _ModelObject) {

	/**
	 * Constructor
	 * 
	 * @param properties
	 *            The properties for the model object. The properties can be any of the public fields as defined below
	 *            and on ecm.model._ModelObject.
	 * @name ecm.model.Role
	 * @class Represents a role to which users or groups can be assigned.
	 * @augments ecm.model._ModelObject
	 */
	var Role = declare("ecm.model.Role", [
		_ModelObject
	], {
		/** @lends ecm.model.Role.prototype */

		/**
		 * The role description text.
		 */
		description: "",

		/**
		 * The privileges for this role.
		 */
		privileges: null,

		/**
		 * A boolean indicating whether the current user is an owner of this role.
		 */
		owner: false,

		/**
		 * A boolean indicating whether the role is predefined.
		 */
		preDefined: false,

		/**
		 * The privileges for the current user.
		 */
		currentUserPrivileges: null,

		/**
		 * The message Id.
		 */
		messageId: "",

		/**
		 * @private
		 */
		constructor: function() {
			if (!this.privileges) {
				this.privileges = [];
			}
			if (!this.currentUserPrivileges) {
				this.currentUserPrivileges = [];
			}
		},

		/**
		 * Generates a JSON representation of this role.
		 */
		toJSON: function() {
			this.logEntry("toJSON");

			var json = {};
			json.id = this.id;
			json.name = this.name;
			json.description = this.description;
			json.owner = this.owner;
			json.preDefined = this.preDefined;
			json.privileges = this.privileges;
			json.messageId = (this.messageId ? this.messageId : "");

			this.logExit("toJSON");
			return json;
		},

		/**
		 * Returns true if this item has the specified privilege.
		 */
		hasPrivilege: function(privilege) {
			if (this.currentUserPrivileges) {
				var position = array.indexOf(this.currentUserPrivileges, privilege);
				var hasPriv = position != -1;
				return hasPriv;
			}
			return false;
		}
	});
	
	Role.ROLE_TYPE = {
		REPOSITORY: 1,
		TEMPLATE: 2,
		TEAMSPACE: 3,
		AUTHOR: 4,
		ADMIN: 5,
		USER: 6
	};

	/**
	 * Static function that returns the label for the give privilege.
	 * 
	 * @param privName
	 *            The privilege to lookup
	 * @memberof ecm.model.Role
	 */
	Role.lookupPrivilegeLabel = function(privName) {
		return ecm.messages["workspacebuilder_roles_priv_" + privName];
	};

	/**
	 * Static function that returns the description for the give privilege.
	 * 
	 * @param privName
	 *            The privilege to lookup
	 * @memberof ecm.model.Role
	 */
	Role.lookupPrivilegeDescription = function(privName) {
		return ecm.messages["workspacebuilder_roles_plbl_" + privName];
	};

	Role.PRIVILEGE_CATEGORIES = {

		//folder and document can be removed, not used now that they are combined
		folder: [
			"modifyFolderPermissions",
			"deleteFolders",
			"modifyFolderProperties",
			"createSubfolders",
			"fileInFolders",
			"viewFolderProperties"
		],
		document: [
			"modifyDocumentPermissions",
			"deleteDocuments",
			"promoteVersions",
			"modifyContent",
			"modifyDocumentProperties",
			"viewContent",
			"viewDocumentProperties"
		],
		p8Teamspace: [
			"addNewSearches",
			"createNewSearches",
			"addRemoveClassesOrEntryTemplates",
			"addRemoveRoleParticipants"

		],
		cmTeamspace: [
			"addNewSearches",
			"createNewSearches",
			"addRemoveClasses",
			"addRemoveRoleParticipants"
		],
		ownerTeamspace: [
			"modifyRoles"
		],
		p8Item: [
			"modifyItemPermissions",
			"deleteItems",
			"promoteVersions",
			"modifyContent",
			"modifyItemProperties",
			"createSubfolders",
			"fileInFolders",
			"viewContent",
			"viewItemProperties"
		],
		cmItem: [
			"createItems",
			"deleteItems",
			"modifyItemProperties",
			"modifyItemPermissions",
			"viewContent",
			"viewItemProperties"
		]
	};

	(function() {
		var privCategories = Role.PRIVILEGE_CATEGORIES;
		var privileges = [];
		for ( var privCategory in privCategories) {
			if (typeof privCategories[privCategory] !== "function") {
				privileges = privileges.concat(privCategories[privCategory]);
			}
		}
		Role.AVAILABLE_PRIVILEGES = privileges;
	})();

	return Role;
});

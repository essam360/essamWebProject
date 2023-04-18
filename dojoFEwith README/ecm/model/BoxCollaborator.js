/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"ecm/model/User",
], function(declare, User) {
    /**
	 * @private
     * Constructs a box collaborator object.  A box collaborator represents a box user who has access to a
	 * box folder.
     *
     * @param updateAction
     *    represents an action to be done on this user. Acceptable values: "add", "remove" and "modify".
     * @param statusCode
     *    represents the http response code returned from mid-tier after perform the updateAction. 200=success code.
     * @param errorMsg
     *    represents the error message (if any) returned from mid-tier after perform the updateAction.
     * @param permission
     *    represents box defined permission that the box user has on (or to be given to) the collaboration folder.
     * @param dateAdded
     *    represents the date that the box user was added as collaborator on the collaboration folder.
     *          
     * @name ecm.model.BoxCollaborator
     * @class Represents a box user who has access to the box folder.
     * @augments ecm.model.User
     */
	var BoxCollaborator = declare("ecm.model.BoxCollaborator", [User], {
	   /** @lends icm.model.BoxCollaborator.prototype */
		
        /**
         * The action to be done on this box user, values: "add", "remove", "modify".
         * @private
         */
		updateAction: null,

        /**
         * The http response code returned from mid-tier. Note: anything other than 200 is a possible error code.
         * @private
         */
		statusCode: null,

        /**
         * The error message (if any) returned from mid-tier after perform the updateAction.
         * @private
         */
		errorMsg: null,

        /**
         * The box defined permission that the box user has (or to be given) on the collaboration folder.
         * @private
         */
		permission: null,
		
		/**
         * The box collaborator type(ie., user or group) on the collaboration folder.
         * @private
         */
		isGroup: false,
		
        /**
         * The JS date that the box user was added as collaborator on the collaboration folder.
         * @private
         */
		dateAdded: null,
		
		/**
         * The collaboration folder Id.
         * @private
         */
		boxFolderId: null,

		/**
         * The collaboration folder name.
         * @private
         */
		boxFolderName: null,

		hasPrivilege: function(/* String */privilege) {
		},
		
		getBoxRole: function () {
			return permission;
		},
		
		/**
		 * Generates a JSON representation of this user.
		 */
		toJSON: function() {
			var jsonUser = {};
			jsonUser.id = this.id;
			jsonUser.name = this.name;
			jsonUser.role = this.permission;
			jsonUser.isGroup = this.isGroup;
			jsonUser.emailId = this.emailAddress;
			jsonUser.updateAction = this.updateAction;
			jsonUser.boxFolderId = this.boxFolderId;
			jsonUser.boxFolderName = this.boxFolderName;
			return jsonUser;
		}
		
	});	
	
	// supported actions for box user.
	BoxCollaborator._ACTIONS = ["add", "remove", "modify"];
	BoxCollaborator.add 	 = BoxCollaborator._ACTIONS[0];
	BoxCollaborator.remove 	 = BoxCollaborator._ACTIONS[1];
	BoxCollaborator.modify   = BoxCollaborator._ACTIONS[2];
	
	// supported permissions for box user.
	BoxCollaborator.PERMISSIONS	= ["box_permission_owner", "box_permission_co_owner", "box_permission_editor", 
	                            	   "box_permission_viewer_uploader", "box_permission_previewer_uploader", "box_permission_viewer",
	                            	   "box_permission_previewer", "box_permission_uploader"];
	BoxCollaborator.owner = BoxCollaborator.PERMISSIONS[0];
	BoxCollaborator.co_owner = BoxCollaborator.PERMISSIONS[1];
	BoxCollaborator.editor = BoxCollaborator.PERMISSIONS[2];
	BoxCollaborator.viewer_uploader	= BoxCollaborator.PERMISSIONS[3];
	BoxCollaborator.previewer_uploader = BoxCollaborator.PERMISSIONS[4];
	BoxCollaborator.viewer = BoxCollaborator.PERMISSIONS[5];
	BoxCollaborator.previewer = BoxCollaborator.PERMISSIONS[6];
	BoxCollaborator.uploader = BoxCollaborator.PERMISSIONS[7];
	
	/**
	 * Static function that creates a new box collaborator object.
	 * 
	 * @memberof ecm.model.BoxCollaborator
	 */
	BoxCollaborator.getCollaborator = function(boxUserId, emailId, action, role, displayName, isGroup) {
		return new BoxCollaborator({
			id: boxUserId,
			name: displayName,
			displayName: displayName,
			permission: role,
			isGroup: isGroup,
			updateAction: action,
			emailAddress: emailId
		});
	};
	
	/**
	 * Static function that creates a new box collaborator from a json object.
	 * 
	 * @memberof ecm.model.BoxCollaborator
	 */
	BoxCollaborator.fromJSON = function(jsonCollaborator) {
		return new BoxCollaborator({
			id: jsonCollaborator.id,
			name: jsonCollaborator.name,
			displayName: jsonCollaborator.name,
			emailAddress: jsonCollaborator.emailId,
			permission: jsonCollaborator.role,
			isGroup: jsonCollaborator.isGroup,
			dateAdded: jsonCollaborator.dateAdded,
			statusCode: jsonCollaborator.statusCode,
			boxFolderId: jsonCollaborator.boxFolderId,
			boxFolderName: jsonCollaborator.boxFolderName,
			errorMsg: jsonCollaborator.errorMsg
		});
	};
	
	return BoxCollaborator;
});

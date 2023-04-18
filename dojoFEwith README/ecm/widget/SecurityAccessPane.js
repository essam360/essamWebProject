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
	"dojo/dom-attr",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/string",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/Select",
	"ecm/LoggerMixin",
	"ecm/MessagesMixin",
	"ecm/model/Permission",
	"ecm/model/UserGroup",
	"ecm/model/Repository",
	"ecm/widget/_SecurityMixin",
	"ecm/widget/CompositeButton",
	"ecm/widget/dialog/SelectUserGroupDialog",
	"dojo/text!./templates/SecurityAccessPane.html"
], //
function(declare, lang, array, aspect, domClass, domAttr, domConstruct, domGeometry, string, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, Select, LoggerMixin, MessagesMixin, Permission, UserGroup, Repository, _SecurityMixin, CompositeButton, SelectUserGroupDialog, template) {

	/**
	 * @name ecm.widget.SecurityAccessPane
	 * @class Provides a access type pull down. If the user selects specific users and groups access type, then the add
	 *        users and groups dialog displays allowing the user to add users and groups. After closing the add users
	 *        and groups dialog, the selected users and groups display as composite buttons below the access type pull
	 *        down.
	 * @augments dijit._Widget
	 * @since 2.0.3
	 */
	return declare("ecm.widget.SecurityAccessPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_SecurityMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.SecurityAccessPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,
		/**
		 * Used for accessibility to set the aria-labelledby.
		 */
		labelId: null,
		/**
		 * Used for accessibility to set the dropdown id.
		 */
		dropdownid: null,

		/**
		 * @private
		 */
		_allUsersGroupId: UserGroup.AUTHENTICATED_USERS,

		/**
		 * Constructor.
		 */
		constructor: function() {
			this._members = new Array();
			this._memberButtons = new Array();
		},

		/**
		 * Post mixin.
		 */
		postMixInProperties: function() {
			if (!this.dropdownid) {
				this.dropdownid = this.id + "_dropdown";
			}
		},

		/**
		 * Post create.
		 */
		postCreate: function() {
			this.inherited(arguments);
			if (this.repository) {
				this._accessTypeSelect.addOption(this.getAccessTypes(this.repository));
			}
			if (this.labelId) {
				domAttr.set(this._accessTypeSelect.focusNode, "aria-labelledby", this.labelId);
			}
		},

		/**
		 * Set the {@link ecm.model.Repository} and loads the pulldown with the access types specified for the
		 * repository.
		 */
		setRepository: function(repository) {
			this.repository = repository;
			this.cleanUp();
			if (this.repository) {
				if (this.repository._isP8()) {
					this.repository.getDirectories(lang.hitch(this, function(directories) {
						array.forEach(directories, function(dir) {
							if (dir.principalCategory && dir.principalCategory == "internal searchable" && dir.symbolicName) {
								// Look for the internal searchable realm.
								var allUsersGroup = UserGroup.getRealmUsersPseudoGroup(dir.symbolicName);
								this._allUsersGroupId = allUsersGroup.id;

							}
						}, this);
						this._accessTypeSelect.addOption(this.getAccessTypes(this.repository));
					}));
				} else {
					this._accessTypeSelect.addOption(this.getAccessTypes(this.repository));
				}
			}
		},

		/**
		 * @private Returns the index in the members array for the input id.
		 */
		_getMemberIndex: function(id) {
			for (var i = 0; i < this._members.length; i++) {
				if (this._members[i].id == id) {
					return i;
				}
			}
			return -1;
		},

		/**
		 * @private Adds the members as composite buttons.
		 */
		_addMembers: function(members) {
			array.forEach(members, function(member) {
				var id = member.id;
				if (this._getMemberIndex(id) >= 0) { // present
					return;
				}

				var label = this.repository._isCM() ? member.id : member.displayName; // For CM, always use Id
				var button = new CompositeButton({
					label: label,
					"class": "member",
					actionIconClass: "removeMemberIcon",
					actionAltText: string.substitute(this.messages.remove_member, [
						label
					])
				});
				this.own(aspect.after(button, "_onActionButtonClick", lang.hitch(this, function() {
					var index = this._getMemberIndex(id);
					this._members.splice(index, 1);
					this._memberButtons.splice(index, 1)[0].destroyRecursive();
					this.onMemberRemoved();
				})));
				this._membersNode.appendChild(button.domNode);
				this._memberButtons.push(button);
				this._members.push(member);
				this.onMemberAdded();
			}, this);
		},

		/**
		 * Event fired when a member is removed.
		 */
		onMemberRemoved: function() {
		},

		/**
		 * Event fired when a member is added.
		 */
		onMemberAdded: function() {
		},

		/**
		 * Returns the selected access type from the pulldown.
		 */
		getAccessType: function() {
			return this._accessTypeSelect.get("value");
		},

		/**
		 * Returns the number of members.
		 */
		getNumberOfMembers: function() {
			return this._members.length;
		},

		/**
		 * Returns an array of {@link ecm.model.Permission} based on the values selected on this pane.
		 */
		getPermissions: function() {
			var permissions = new Array();
			var permission = new Permission({
				id: "#CREATOR-OWNER",
				name: "#CREATOR-OWNER",
				displayName: "",
				granteeType: Permission.GRANTEE_TYPE.USER,
				accessMask: this._getAccessMask("FULL_CONTROL"),
				accessType: Permission.ACCESS_TYPE.ALLOW,
				inheritableDepth: 0,
				permissionSource: Permission.PERMISSION_SOURCE.DIRECT
			});
			permissions.push(permission.json());

			var accessType = this.getAccessType();
			if (accessType == this._ACCESS_TYPE.PUBLIC) {
				// Grant read-only access to authenticated users
				permission = new Permission({
					id: this._allUsersGroupId,
					name: this._allUsersGroupId,
					displayName: "",
					granteeType: Permission.GRANTEE_TYPE.GROUP,
					accessMask: this._getAccessMask("READ_ONLY"),
					accessType: Permission.ACCESS_TYPE.ALLOW,
					inheritableDepth: 0,
					permissionSource: Permission.PERMISSION_SOURCE.DIRECT
				});
				permissions.push(permission.json());
			} else if (accessType == this._ACCESS_TYPE.MEMBERS && this._members.length > 0) {
				// Grant read-only access to the selected members
				var accessMask = this._getAccessMask("READ_ONLY");
				for (var i = 0; i < this._members.length; i++) {
					var member = this._members[i];
					var granteeType = (member.isInstanceOf && member.isInstanceOf(UserGroup)) ? Permission.GRANTEE_TYPE.GROUP : Permission.GRANTEE_TYPE.USER;
					permission = new Permission({
						id: member.id,
						name: member.name,
						displayName: member.displayName,
						granteeType: granteeType,
						accessMask: accessMask,
						accessType: Permission.ACCESS_TYPE.ALLOW,
						inheritableDepth: 0,
						permissionSource: Permission.PERMISSION_SOURCE.DIRECT
					});
					permissions.push(permission.json());
				}
			}
			return permissions;
		},

		/**
		 * @private
		 */
		_getAccessMask: function(priviligeId) {
			var mask = 0;
			var privileges = this._getDocumentPrivileges(this.repository);
			if (privileges) {
				array.some(privileges, function(privilege) {
					if (privilege.id == priviligeId) {
						mask = privilege.mask;
						return true;
					}
				});
			}
			return mask;
		},

		/**
		 * @private Shows the add user and group dialog.
		 */
		_onSelectMembers: function() {
			var dialog = new SelectUserGroupDialog({
				defaultScope: "groups",
				callback: lang.hitch(this, this._addMembers)
			});
			dialog.show(this.repository);
		},

		/**
		 * @private Called when the access type changes.
		 */
		_onAccessTypeChange: function() {
			if (this.getAccessType() == this._ACCESS_TYPE.MEMBERS) {
				this._selectMembersButton.set("disabled", false);

				// Show the list of selected members
				//var size = domGeometry.getContentBox(this.domNode);
				//this.setSize(size.w, size.h + 91); // resize it to stop excessive growth in IE
				domClass.remove(this._membersNode, "dijitHidden");

				// Open the user/group dialog if no members have been selected
				if (this._members.length == 0) {
					this._onSelectMembers();
				}
			} else if (!this._selectMembersButton.get("disabled")) {
				this._selectMembersButton.set("disabled", true);

				// Hide the list of selected members
				//var size = domGeometry.getContentBox(this.domNode);
				//this.setSize(size.w, size.h - 91);
				domClass.add(this._membersNode, "dijitHidden");
			}
			this.onAccessTypeChange();
		},

		/**
		 * Fired when the access type changed.
		 */
		onAccessTypeChange: function() {
		},

		/**
		 * Cleans up the member composite buttons.
		 */
		cleanUp: function() {
			if (this._memberButtons) {
				array.forEach(this._memberButtons, function(button) {
					if (!button._destroyed) {
						button.destroyRecursive();
					}
					delete button;
				});
			}
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			this.inherited(arguments);
			this.cleanUp();
			this._memberButtons = null;
		}
	});

});

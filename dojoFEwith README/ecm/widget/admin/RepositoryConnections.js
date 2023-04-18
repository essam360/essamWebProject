/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/on",
	"dojo/aspect",
	"dijit/Tooltip",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Desktop",
	"ecm/model/Repository",
	"ecm/model/User",
	"ecm/model/UserGroup",
	"ecm/widget/HoverHelp",
	"ecm/widget/UserGroupPane",
	"ecm/widget/UserGroupPrivilegePane",
	"ecm/widget/RadioButton",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/dialog/SelectUserGroupDialog",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"ecm/widget/dialog/ErrorDialog",
	"idx/layout/TitlePane",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"dojo/text!./templates/RepositoryConnections.html"
],

function(declare, lang, array, string, domConstruct, domClass, on, aspect, Tooltip, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, Button, MessagesMixin, LoggerMixin, Desktop, Repository, User, UserGroup, HoverHelp, UserGroupPane, UserGroupPrivilegePane, RadioButton, ValidationTextBox, SelectUserGroupDialog, UserGroupPermissionDialog, ErrorDialog, TitlePane, _NavigatorAdminTabBase, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.RepositoryConnections
	 * @class Provides a widget that is used to configure the IBM Connections repository property.
	 * @since 2.0.3
	 */
	return declare("ecm.widget.admin.RepositoryConnections", [
		ContentPane,
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.RepositoryConnections.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this._isLoaded = false;
			this.inherited(arguments);
			this._setHoverHelp();
			this._activityStreamTitlePane.set("title", this.messages.admin_collaboration_activity_stream);
			this._communityTitlePane.set("title", this.messages.admin_collaboration_community);
			
			this.own(aspect.after(this._anonymousUsersPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._adminDataPane, "onChange", lang.hitch(this, "onMarkDirty"), true));
			this.own(aspect.after(this._activityStreamIgnoreUsersPane, lang.hitch(this, "onMarkDirty"), true));
		},

		_setHoverHelp: function() {
			this.teamspacesEnable.setHoverHelp(this.teamspacesEnableHover);
			this.teamspacesDisable.setHoverHelp(this.teamspacesEnableHover);
			this.connectionsUrl.setHoverHelp(this.connectionsUrlHover);
			this.connectionsUrlHttps.setHoverHelp(this.connectionsUrlHttpsHover);
			this.seedlistEnable.setHoverHelp(this.seedlistEnableHover);
			this.seedlistDisable.setHoverHelp(this.seedlistEnableHover);
			this.anonymousEnable.setHoverHelp(this.anonymousEnableHover);
			this.anonymousDisable.setHoverHelp(this.anonymousEnableHover);

			this.activityStreamEnable.setHoverHelp(this.activityStreamEnableHover);
			this.activityStreamDisable.setHoverHelp(this.activityStreamEnableHover);
			this.activityStreamConnectionsUrl.setHoverHelp(this.activityStreamUrlHover);
			this.connectionsUserId.setHoverHelp(this.connectionsUserIdHover);
		},

		destroy: function() {
			this.inherited(arguments);
			if (this._accessControlDialog) {
				this._accessControlDialog.destroy();
				this._accessControlDialog = null;
			}
			if (this._selectUsersDialog) {
				this._selectUsersDialog.destroy();
				this._selectUsersDialog = null;
			}
			if (this._errorDialog) {
				this._errorDialog.destroy();
				this._errorDialog = null;
			}
			if (this._anonymousUsers) {
				this._anonymousUsers = null;
			}
			if (this._admins) {
				this._admins = null;
			}
			if (this._globalAdminUserGroups) {
				this._globalAdminUserGroups = null;
			}
			if (this._reviewAdminUserGroups) {
				this._reviewAdminUserGroups = null;
			}
		},

		/**
		 * @private User clicked the select administrations users button.
		 */
		_onSelectAdmin: function() {
			this._showAddUsersAndGroupsDialog(this._admins, lang.hitch(this, function() {
				this.onMarkDirty();
				this._adminDataPane.render();
			}));
		},

		/**
		 * @private User clicked the select anonymous users button.
		 */
		_onSelectAnonymousUser: function() {
			this._showSelectAnonymousUsersDialog(this._anonymousUsers, lang.hitch(this, function() {
				this.onMarkDirty();
				this._anonymousUsersPane.render();
			}));
		},

		/**
		 * @private User clicked the select activity stream ignore users button.
		 */
		_onSelectActivityStreamIgnoreIds: function() {
			this._showSelectUsersDialog(this._activityStreamIgnoreUsers, lang.hitch(this, function(selectedMembers) {
				this.onMarkDirty();
				this._activityStreamIgnoreUsersPane.render();
			}));
		},

		/**
		 * @private User clicked the enable activity stream radio button.
		 */
		_onEnableActivityStream: function() {
			this._setDisableActivityStream(false);
		},

		/**
		 * @private User clicked the disable activity stream radio button.
		 */
		_onDisableActivityStream: function() {
			this._setDisableActivityStream(true);
		},

		/**
		 * @private Disables all the activity stream fields.
		 */
		_setDisableActivityStream: function(disable) {
			this.activityStreamIgnoreIdsButton.set("disabled", disable);
			this.connectionsUserId.set("disabled", disable);
			this.connectionsPassword.set("disabled", disable);
			this.activityStreamConnectionsUrl.set("disabled", disable);
			this.set("iconClass", disable ? "" : "required");
		},

		/**
		 * @private
		 */
		_enableCommunityLib: function() {
			if (this.repositoryData.getCommunityLibraryRepositories(this.repositoryData.repositoryConfig.id).length > 0) {
				this.inlineMessageText.innerHTML = this.messages.repository_community_teamspace_message;
				domClass.remove(this.inlineMessageRow, "dijitHidden");
			} else {
				domClass.add(this.inlineMessageRow, "dijitHidden");
			}
		},

		/**
		 * @private
		 */
		_disableCommunityLib: function() {
			domClass.add(this.inlineMessageRow, "dijitHidden");
		},

		/**
		 * @private User clicked the enable anonymous users radio button.
		 */
		_onEnableAnonymous: function() {
			domClass.remove(this.anonymousUsersDiv, "dijitHidden");
		},

		/**
		 * @private User clicked the disable anonymous users radio button.
		 */
		_onDisableAnonymous: function() {
			domClass.add(this.anonymousUsersDiv, "dijitHidden");
		},

		/**
		 * Loads the UI with the model data. Called when the user hits the Reset button.
		 */
		loadData: function(container, callback) {
			this.logEntry("loadData");

			if (this.repositoryData.repositoryConfig.getConnectionsCommunityLibrary()) {
				this.teamspacesEnable.set("checked", true);
				this._enableCommunityLib();
			} else {
				this.teamspacesDisable.set("checked", true);
				this._disableCommunityLib();
			}
			this.connectionsUrl.set("value", this.repositoryData.repositoryConfig.getConnectionsUrlHttp());
			this.connectionsUrlHttps.set("value", this.repositoryData.repositoryConfig.getConnectionsUrlHttps());
			if (this.repositoryData.repositoryConfig.getConnectionsSeedlistEnable()) {
				this.seedlistEnable.set("checked", true);
			} else {
				this.seedlistDisable.set("checked", true);
			}

			if (this.repositoryData.repositoryConfig.getConnectionsAnonymousEnable()) {
				this.anonymousEnable.set("checked", true);
				this._onEnableAnonymous();
			} else {
				this.anonymousDisable.set("checked", true);
				this._onDisableAnonymous();
			}
			this._anonymousUsers = [];
			if (this.repositoryData.repositoryConfig.getConnectionsAnonymousUserObj() && this.repositoryData.repositoryConfig.getConnectionsAnonymousUserObj().id) {
				var id = this.repositoryData.repositoryConfig.getConnectionsAnonymousUserObj().id;
				var shortName = this.repositoryData.repositoryConfig.getConnectionsAnonymousUserObj().shortName;
				var displayName = this.repositoryData.repositoryConfig.getConnectionsAnonymousUserObj().displayName;
				this._anonymousUsers.push(new User({
					id: id,
					name: shortName,
					shortName: shortName,
					displayName: displayName
				}));
			}
			this._anonymousUsersPane.set("userGroupData", this._anonymousUsers);

			this._admins = [];
			this._globalAdminUserGroups = [];
			if (this.repositoryData.repositoryConfig.getConnectionsGlobalAdminUserObjs() && lang.isArray(this.repositoryData.repositoryConfig.getConnectionsGlobalAdminUserObjs()) && this.repositoryData.repositoryConfig.getConnectionsGlobalAdminUserObjs().length > 0) {
				for (var i = 0; i < this.repositoryData.repositoryConfig.getConnectionsGlobalAdminUserObjs().length; i++) {
					var obj = this.repositoryData.repositoryConfig.getConnectionsGlobalAdminUserObjs()[i];
					this._globalAdminUserGroups.push(new User({
						id: obj.id,
						name: obj.shortName || obj.id,
						shortName: obj.shortName || obj.id,
						displayName: obj.displayName || obj.id
					}));
				}
			}
			if (this.repositoryData.repositoryConfig.getConnectionsGlobalAdminGroupObjs() && lang.isArray(this.repositoryData.repositoryConfig.getConnectionsGlobalAdminGroupObjs()) && this.repositoryData.repositoryConfig.getConnectionsGlobalAdminGroupObjs().length > 0) {
				for (var i = 0; i < this.repositoryData.repositoryConfig.getConnectionsGlobalAdminGroupObjs().length; i++) {
					var obj = this.repositoryData.repositoryConfig.getConnectionsGlobalAdminGroupObjs()[i];
					this._globalAdminUserGroups.push(new UserGroup({
						id: obj.id,
						name: obj.shortName || obj.id,
						shortName: obj.shortName || obj.id,
						displayName: obj.displayName || obj.id
					}));
				}
			}
			this._admins.push({
				label: ecm.messages.admin_collaboration_connections_admins,
				id: "global",
				usersGroups: this._globalAdminUserGroups
			});

			this._reviewAdminUserGroups = [];
			if (this.repositoryData.repositoryConfig.getConnectionsReviewAdminUserObjs() && lang.isArray(this.repositoryData.repositoryConfig.getConnectionsReviewAdminUserObjs()) && this.repositoryData.repositoryConfig.getConnectionsReviewAdminUserObjs().length > 0) {
				for (var i = 0; i < this.repositoryData.repositoryConfig.getConnectionsReviewAdminUserObjs().length; i++) {
					var obj = this.repositoryData.repositoryConfig.getConnectionsReviewAdminUserObjs()[i];
					this._reviewAdminUserGroups.push(new User({
						id: obj.id,
						name: obj.shortName || obj.id,
						shortName: obj.shortName || obj.id,
						displayName: obj.displayName || obj.id
					}));
				}
			}
			if (this.repositoryData.repositoryConfig.getConnectionsReviewAdminGroupObjs() && lang.isArray(this.repositoryData.repositoryConfig.getConnectionsReviewAdminGroupObjs()) && this.repositoryData.repositoryConfig.getConnectionsReviewAdminGroupObjs().length > 0) {
				for (var i = 0; i < this.repositoryData.repositoryConfig.getConnectionsReviewAdminGroupObjs().length; i++) {
					var obj = this.repositoryData.repositoryConfig.getConnectionsReviewAdminGroupObjs()[i];
					this._reviewAdminUserGroups.push(new UserGroup({
						id: obj.id,
						name: obj.shortName || obj.id,
						shortName: obj.shortName || obj.id,
						displayName: obj.displayName || obj.id
					}));
				}
			}
			this._admins.push({
				label: ecm.messages.admin_collaboration_connections_admins_review,
				id: "review",
				usersGroups: this._reviewAdminUserGroups
			});
			this._adminDataPane.set("userGroupData", this._admins);

			if (this.repositoryData.repositoryConfig.getConnectionsActivityStreamEnable()) {
				this.activityStreamEnable.set("checked", true);
				this._setDisableActivityStream(false);
			} else {
				this.activityStreamDisable.set("checked", true);
				this._setDisableActivityStream(true);
			}

			this.activityStreamConnectionsUrl.set("value", this.repositoryData.repositoryConfig.getConnectionsActivityStreamConnectionsUrl());

			this._activityStreamIgnoreUsers = [];
			if (this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreUserObjs() && lang.isArray(this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreUserObjs()) && this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreUserObjs().length > 0) {
				for (var i = 0; i < this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreUserObjs().length; i++) {
					var obj = this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreUserObjs()[i];
					this._activityStreamIgnoreUsers.push(new User({
						id: obj.id,
						name: obj.shortName || obj.id,
						shortName: obj.shortName || obj.id,
						displayName: obj.displayName || obj.id
					}));
				}
			}
			if (this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreGroupObjs() && lang.isArray(this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreGroupObjs()) && this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreGroupObjs().length > 0) {
				for (var i = 0; i < this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreGroupObjs().length; i++) {
					var obj = this.repositoryData.repositoryConfig.getConnectionsActivityStreamIgnoreGroupObjs()[i];
					this._activityStreamIgnoreUsers.push(new UserGroup({
						id: obj.id,
						name: obj.shortName || obj.id,
						shortName: obj.shortName || obj.id,
						displayName: obj.displayName || obj.id
					}));
				}
			}
			this._activityStreamIgnoreUsersPane.set("userGroupData", this._activityStreamIgnoreUsers);

			this.connectionsUserId.set("value", this.repositoryData.repositoryConfig.getConnectionsActivityStreamUserId());
			this.connectionsPassword.set("value", this.repositoryData.repositoryConfig.getConnectionsActivityStreamPassword());

			this.resize();
			if (callback) {
				callback();
			}
			setTimeout(lang.hitch(this, function() {
				this._isLoaded = true;
			}), 400);
			this.logExit("loadData");
		},

		/**
		 * @private Shows the add user and group dialog.
		 */
		_showSelectUsersDialog: function(data, callback) {
			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._selectUsersDialog) {
					this._selectUsersDialog.destroy();
				}
				this._selectUsersDialog = new SelectUserGroupDialog({
					defaultScope: "groups",
					filteredItems: data,
					callback: lang.hitch(this, lang.hitch(this, function(selectedMembers) {
						for ( var j in selectedMembers) {
							var userGroup = selectedMembers[j];
							if (this._getMemberIndex(userGroup.id, data) == -1) {
								data.push(userGroup);
							}
						}
						if (callback) {
							callback();
						}
					}))
				});
				this._selectUsersDialog.show(repository);
			}
		},

		/**
		 * @private Shows the add user dialog to select an anonymous user.
		 */
		_showSelectAnonymousUsersDialog: function(data, callback) {
			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._selectUsersDialog) {
					this._selectUsersDialog.destroy();
				}
				this._selectUsersDialog = new SelectUserGroupDialog({
					queryMode: "users",
					selectionMode: "single",
					callback: lang.hitch(this, lang.hitch(this, function(selectedMembers) {
						data.length = 0;
						for ( var j in selectedMembers) {
							data.push(selectedMembers[j]);
						}
						if (callback) {
							callback();
						}
					}))
				});
				this._selectUsersDialog.show(repository);
			}
		},

		/**
		 * @private Returns the index in the members array for the input id.
		 */
		_getMemberIndex: function(id, data) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].id == id) {
					return i;
				}
			}
			return -1;
		},

		/**
		 * @private Shows the add users and groups dialog.
		 */
		_showAddUsersAndGroupsDialog: function(data, callback) {
			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._accessControlDialog) {
					this._accessControlDialog.destroy();
				}
				var permissions = [];
				var selectedUserGroups = [];
				array.forEach(data, lang.hitch(this, function(accessControlItem) {
					permissions.push({
						value: accessControlItem.id,
						label: accessControlItem.label
					});
					array.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup) {
						selectedUserGroups.push(userGroup);
					}));
				}));

				this._accessControlDialog = new UserGroupPermissionDialog({
					permissions: permissions,
					filteredItems: selectedUserGroups,
					defaultScope: "groups",
					repository: repository,
					callback: lang.hitch(this, lang.hitch(this, function(permissionId, selectedUserGroups) {
						for ( var j in data) {
							var accessControlItem = data[j];
							if (accessControlItem.id == permissionId) {
								for (var i = 0; i < selectedUserGroups.length; i++) {
									accessControlItem.usersGroups.push(selectedUserGroups[i]);
								}
								break;
							}
						}
						if (callback) {
							callback();
						}
					}))
				});
				this._accessControlDialog.show();
			}
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		isResetingFields: function() {
			return false;
		},

		/**
		 * Reset button selected.
		 */
		resetData: function() {
			if (!this.isResetingFields()) {
				this.loadData();
			}
		},

		/**
		 * Called before save to load the model with the UI data.
		 */
		loadWithFieldValues: function(repositoryConfig) {
			this.logEntry("loadWithFieldValues");
			repositoryConfig.setConnectionsCommunityLibrary(this.teamspacesEnable.get("checked"));
			repositoryConfig.setConnectionsUrlHttp(this.connectionsUrl.get("value"));
			repositoryConfig.setConnectionsUrlHttps(this.connectionsUrlHttps.get("value"));
			repositoryConfig.setConnectionsSeedlistEnable(this.seedlistEnable.get("checked"));
			repositoryConfig.setConnectionsAnonymousEnable(this.anonymousEnable.get("checked"));
			repositoryConfig.setConnectionsAnonymousUserId(this._anonymousUsers && this._anonymousUsers.length > 0 ? this._anonymousUsers[0].id : null);

			var globalAdminGroups = [];
			var globalAdminUsers = [];
			for (var i = 0; i < this._globalAdminUserGroups.length; i++) {
				var userGroup = this._globalAdminUserGroups[i];
				if (userGroup.isInstanceOf(UserGroup)) {
					globalAdminGroups.push(userGroup.id);
				} else {
					globalAdminUsers.push(userGroup.id);
				}
			}
			repositoryConfig.setConnectionsGlobalAdminUserIds(globalAdminUsers);
			repositoryConfig.setConnectionsGlobalAdminGroupIds(globalAdminGroups);

			var reviewAdminGroups = [];
			var reviewAdminUsers = [];
			for (var i = 0; i < this._reviewAdminUserGroups.length; i++) {
				var userGroup = this._reviewAdminUserGroups[i];
				if (userGroup.isInstanceOf(UserGroup)) {
					reviewAdminGroups.push(userGroup.id);
				} else {
					reviewAdminUsers.push(userGroup.id);
				}
			}
			repositoryConfig.setConnectionsReviewAdminUserIds(reviewAdminUsers);
			repositoryConfig.setConnectionsReviewAdminGroupIds(reviewAdminGroups);

			repositoryConfig.setConnectionsActivityStreamEnable(this.activityStreamEnable.get("checked"));
			repositoryConfig.setConnectionsActivityStreamConnectionsUrl(this.activityStreamConnectionsUrl.get("value"));

			var streamGroups = [];
			var streamUsers = [];
			for (var i = 0; i < this._activityStreamIgnoreUsers.length; i++) {
				var userGroup = this._activityStreamIgnoreUsers[i];
				if (userGroup.isInstanceOf(UserGroup)) {
					streamGroups.push(userGroup.id);
				} else {
					streamUsers.push(userGroup.id);
				}
			}
			repositoryConfig.setConnectionsActivityStreamIgnoreUserIds(streamUsers);
			repositoryConfig.setConnectionsActivityStreamIgnoreGroupIds(streamGroups);

			repositoryConfig.setConnectionsActivityStreamUserId(this.connectionsUserId.get("value"));
			repositoryConfig.setConnectionsActivityStreamPassword(this.connectionsPassword.get("value"));
			this.logExit("loadWithFieldValues");
		},

		/**
		 * Fired when a field is marked dirty.
		 */
		onMarkDirty: function() {
		},

		/**
		 * Determines if the save button should be enabled.
		 */
		validateData: function() {
			return true;
		},

		/**
		 * @private Field changed.
		 */
		_onFieldChange: function() {
			if (this._isLoaded && !this.isResetingFields()) {
				this.onMarkDirty();
			}
		},

		/**
		 * Sets the repository data model.
		 */
		setData: function(data) {
			this.repositoryData = data;
		}
	});

});

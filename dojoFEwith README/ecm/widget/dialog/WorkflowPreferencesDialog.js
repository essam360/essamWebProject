/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/json",
	"dojo/string",
	"dojo/store/DataStore",
	"dojo/data/ItemFileWriteStore",
	"dijit/layout/BorderContainer",
	"ecm/model/Repository",
	"ecm/model/User",
	"../Button",
	"../FilteringSelect",
	"../HoverHelp",
	"../RadioButton",
	"../TextBox",
	"./BaseDialog",
	"./MessageDialog",
	"./SelectUserGroupDialog",
	"dojo/text!./templates/WorkflowPreferencesDialogContent.html"
],

function(declare, lang, domClass, dojojson, string, DataStore, ItemFileWriteStore, BorderContainer, Repository, User, Button, FilteringSelect, HoverHelp, RadioButton, TextBox, BaseDialog, MessageDialog, SelectUserGroupDialog, template) {

	/**
	 * Displays a dialog where the user can change their IBM FileNet P8 workflow user preferences.
	 * 
	 * @name ecm.widget.dialog.WorkflowPreferencesDialog
	 * @class Provides a dialog box that is used to view FileNet P8 workflow user preferences.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.WorkflowPreferencesDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.WorkflowPreferencesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		_callback: null,
		_selectedUser: null,

		constructor: function(args) {
			if (args) {
				this.repository = args.repository;
			}
			this._members = new Array();
			this._memberButtons = new Array();
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmWorkflowPreferencesDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			this.setTitle(this.messages.workflow_pref_dialog_title);
			this.setIntroText(this.messages.workflow_pref_dialog_info_text);

			this._saveButton = this.addButton(this.messages.save, "_onSave", false, false, "SAVE");
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param callback
		 *            A callback function to be called after the workflow preferences are saved.
		 */
		show: function(callback) {
			this._callback = callback;
			var showCallback = lang.hitch(this, function() {
				this.inherited("show", []);
				this.resize();
			});

			this._getPreferences(showCallback);
		},

		/**
		 * Destroys the dialog.
		 */
		destroy: function() {
			if (this.preferredLocale) {
				this.preferredLocale.save();
				this.preferredLocale.close();
				delete this.preferredLocale;
			}
			this.inherited(arguments);
		},

		resize: function() {
			this.inherited(arguments);
		},

		_getPreferences: function(callback) {
			this.logEntry("_getPreferences");
			var self = this;
			var request = ecm.model.Request.invokeService("getUserInformation", this.repository.type, {
				repositoryId: this.repository.id,
				connectionPoint: this.repository.connectionPoint
			}, function(response) {
				self._loadData(response, callback);
			});
			this.logExit("_getPreferences");
		},

		/*
		 * Load fields from the model.
		 */
		_loadData: function(response, callback) {
			this.logEntry("_loadData");
			this._init = false;
			this._setHoverHelp();

			var preferences = response.preferences;

			this.emailAddress.set("value", preferences.emailAddress);

			this._setPreferredLocaleField(preferences);

			if (preferences.stepNewAssignment) {
				this.enableStepNewAssignment.set('checked', true);
			} else {
				this.disableStepNewAssignment.set('checked', true);
			}
			if (preferences.stepExpiredDeadline) {
				this.enableStepExpiredDeadline.set('checked', true);
			} else {
				this.disableStepExpiredDeadline.set('checked', true);
			}
			if (preferences.stepReminders) {
				this.enableStepReminders.set('checked', true);
			} else {
				this.disableStepReminders.set('checked', true);
			}

			if (preferences.stepMilestoneReached) {
				this.enableStepMilestoneReached.set('checked', true);
			} else {
				this.disableStepMilestoneReached.set('checked', true);
			}

			if (preferences.trackerNewAssignment) {
				this.enableTrackerNewAssignment.set('checked', true);
			} else {
				this.disableTrackerNewAssignment.set('checked', true);
			}
			if (preferences.trackerDeadlineReminders) {
				this.enableTrackerDeadlineReminders.set('checked', true);
			} else {
				this.disableTrackerDeadlineReminders.set('checked', true);
			}
			if (preferences.trackerDeadlineExpired) {
				this.enableTrackerDeadlineExpired.set('checked', true);
			} else {
				this.disableTrackerDeadlineExpired.set('checked', true);
			}
			if (preferences.trackerException) {
				this.enableTrackerException.set('checked', true);
			} else {
				this.disableTrackerException.set('checked', true);
			}
			if (preferences.trackerExpiredDeadline) {
				this.enableTrackerExpiredDeadline.set('checked', true);
			} else {
				this.disableTrackerExpiredDeadline.set('checked', true);
			}
			if (preferences.trackerMilestoneReached) {
				this.enableTrackerMilestoneReached.set('checked', true);
			} else {
				this.disableTrackerMilestoneReached.set('checked', true);
			}

			if (preferences.proxyUserDisplayName != null) {
				var user = new User({
					id: preferences.proxyUserDisplayName,
					name: preferences.proxyUserDisplayName,
					shortName: preferences.proxyUserShortName,
					displayName: preferences.proxyUserDisplayName
				});

				this._addMember(user);
			}
			this._selectUserButton.set("disabled", false);

			if (callback) {
				callback();
			}
			this.logExit("_loadData");
		},

		_setPreferredLocaleField: function(preferences) {

			var list = preferences.preferredLocales;
			var value = preferences.selectedLocale;

			if (this.preferredLocale.store && this.preferredLocale.store.store) {
				this.preferredLocale.store.store.close();
			}
			var storeData = [];
			for (var i = 0; i < list.length; i++) {
				storeData.push({
					"value": list[i],
					"label": list[i]
				});
			}

			this.preferredLocale.store = new DataStore({
				"store": new ItemFileWriteStore({
					data: {
						identifier: 'value',
						label: 'label',
						items: storeData
					}
				})
			});

			if (value) {
				this.preferredLocale.set('value', value);
			}
		},

		_setHoverHelp: function() {

			this.emailAddress.setHoverHelp(this.rcEmailAddressHoverHelp);
			this.preferredLocale.setHoverHelp(this.rcPreferredLocaleHoverHelp);

			this.enableStepNewAssignment.setHoverHelp(this.rcStepNewAssignmentFieldHoverHelp);
			this.disableStepNewAssignment.setHoverHelp(this.rcStepNewAssignmentFieldHoverHelp);
			this.enableStepExpiredDeadline.setHoverHelp(this.rcStepExpiredDeadlineFieldHoverHelp);
			this.disableStepExpiredDeadline.setHoverHelp(this.rcStepExpiredDeadlineFieldHoverHelp);
			this.enableStepReminders.setHoverHelp(this.rcStepRemindersFieldHoverHelp);
			this.disableStepReminders.setHoverHelp(this.rcStepRemindersFieldHoverHelp);
			this.enableStepMilestoneReached.setHoverHelp(this.rcStepMilestoneReachedFieldHoverHelp);
			this.disableStepMilestoneReached.setHoverHelp(this.rcStepMilestoneReachedFieldHoverHelp);
			this.enableTrackerNewAssignment.setHoverHelp(this.rcTrackerNewAssignmentFieldHoverHelp);
			this.disableTrackerNewAssignment.setHoverHelp(this.rcTrackerNewAssignmentFieldHoverHelp);
			this.enableTrackerDeadlineReminders.setHoverHelp(this.rcTrackerDeadlineRemindersFieldHoverHelp);
			this.disableTrackerDeadlineReminders.setHoverHelp(this.rcTrackerDeadlineRemindersFieldHoverHelp);
			this.enableTrackerDeadlineExpired.setHoverHelp(this.rcTrackerDeadlineExpiredFieldHoverHelp);
			this.disableTrackerDeadlineExpired.setHoverHelp(this.rcTrackerDeadlineExpiredFieldHoverHelp);
			this.enableTrackerException.setHoverHelp(this.rcTrackerExceptionFieldHoverHelp);
			this.disableTrackerException.setHoverHelp(this.rcTrackerExceptionFieldHoverHelp);
			this.enableTrackerExpiredDeadline.setHoverHelp(this.rcTrackerExpiredDeadlineFieldHoverHelp);
			this.disableTrackerExpiredDeadline.setHoverHelp(this.rcTrackerExpiredDeadlineFieldHoverHelp);
			this.enableTrackerMilestoneReached.setHoverHelp(this.rcTrackerMilestoneReachedFieldHoverHelp);
			this.disableTrackerMilestoneReached.setHoverHelp(this.rcTrackerMilestoneReachedFieldHoverHelp);
		},

		_onFieldChange: function() {
		},

		_onSelectUser: function(event) {
			var selectUserDialog = new SelectUserGroupDialog({
				queryMode: "users",
				selectionMode: "single",
				callback: lang.hitch(this, function(user) {
					this._addMember(user[0]);
				})
			});
			selectUserDialog.show(this.repository);
		},

		_addMember: function(user) {
			this.logEntry("_addMember");
			this._selectedUser = user;
			var label = user.displayName;
			var id = user.id;
			if (this._getMemberIndex(id) >= 0) {
				return; // selected same user, don't change anything
			} else {
				// Selected a different user, delete the current user
				if (this._members.length > 0) {
					this._members.splice(0, 1);
					this._memberButtons.splice(0, 1)[0].destroyRecursive();
				}
			}
			var button = new ecm.widget.CompositeButton({
				label: label,
				"class": "member",
				actionIconClass: "removeMemberIcon",
				actionAltText: string.substitute(this.messages.remove_member, [
					label
				])
			});
			this.connect(button, "_onActionButtonClick", function() {
				var index = this._getMemberIndex(id);
				this._members.splice(index, 1);
				this._memberButtons.splice(index, 1)[0].destroyRecursive();
				domClass.remove(this._userNameNode, "ecmWorkflowUserNameDisplay");
				domClass.add(this._userNameNode, "ecmWorkflowUserNameNone");
				this._selectedUser = null;
			});
			this._userNameNode.appendChild(button.domNode);
			domClass.remove(this._userNameNode, "ecmWorkflowUserNameNone");
			domClass.add(this._userNameNode, "ecmWorkflowUserNameDisplay");
			this._memberButtons.push(button);
			this._members.push(user);

			this.logExit("_addMember");
		},

		_getMemberIndex: function(id) {
			for (var i = 0; i < this._members.length; i++) {
				if (this._members[i].id == id) {
					return i;
				}
			}
			return -1;
		},

		_onSave: function() {
			this.logEntry("_onSave");

			var preferences = {
				repositoryId: this.repository.id,
				emailAddress: this.emailAddress.get("value"),
				preferredLocale: this.preferredLocale.get("value"),
				stepNewAssignment: this.enableStepNewAssignment.get("checked"),
				expiredStepDeadline: this.enableStepExpiredDeadline.get("checked"),
				stepReminders: this.enableStepReminders.get("checked"),
				stepMilestoneReached: this.enableStepMilestoneReached.get("checked"),
				trackerNewAssignment: this.enableTrackerNewAssignment.get("checked"),
				trackerDeadlineReminders: this.enableTrackerDeadlineReminders.get("checked"),
				trackerDeadlineExpired: this.enableTrackerDeadlineExpired.get("checked"),
				trackerException: this.enableTrackerException.get("checked"),
				trackerExpiredDeadline: this.enableTrackerExpiredDeadline.get("checked"),
				trackerMilestoneReached: this.enableTrackerMilestoneReached.get("checked")
			};

			if (this._selectedUser) {
				preferences.proxyUserDisplayName = this._selectedUser.displayName;
				preferences.proxyUserShortName = this._selectedUser.shortName;
			} else {
				preferences.proxyUserDisplayName = "";
				preferences.proxyUserShortName = "";
			}

			this.onCancel();

			var self = this;
			var request = ecm.model.Request.postService("getUserInformation", this.repository.type, {
				repositoryId: this.repository.id,
				connectionPoint: this.repository.connectionPoint,
				mode: "save"
			}, "text/json", dojojson.stringify(preferences), lang.hitch(this, function(response) {
				self._completeSave(response);
			}));
			this.logExit("_onSave");
		},

		_completeSave: function(response) {

		}
	});
});

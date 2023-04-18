/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/TabContainer",
	"dijit/layout/ContentPane",
	"dijit/registry",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Teamspace",
	"ecm/widget/teamspaceBuilder/SearchTemplatesPane",
	"ecm/widget/teamspaceBuilder/UsersPane",
	"ecm/widget/teamspaceBuilder/ClassesPane",
	"ecm/widget/teamspaceBuilder/RolesPane",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/MessageDialog",
	"dojo/text!./templates/ManageTeamspaceDialogContent.html"
],

function(declare, //
lang, //
domStyle, //
domClass, //
window, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
TabContainer, //
ContentPane, //
registry, //
LoggerMixin, //
Messages, //
Teamspace, //
SearchTemplatesPane, //
UsersPane, //
ClassesPane, //
RolesPane, //
BaseDialog, //
MessageDialog, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.ManageTeamspaceDialog
	 * @class Provides a widget that lists the teamspaces and teamspace templates that are defined for a repository.
	 *        <p>
	 *        In IBM Content Navigator, this widget defines the <strong>Teamspaces View</strong> pane.
	 *        </p>
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.teamspaceBuilder.ManageTeamspaceDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.teamspaceBuilder.ManageTeamspaceDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * The type of teamspace, can be either "instance" or "template".
		 */
		type: "instance",

		/**
		 * An instance of {@link ecm.model.Teamspace} that represents the teamspace that is to be associated with this
		 * dialog.
		 */
		model: null,
		_userPaneLoaded: false,
		_classesPaneLoaded: false,
		_searchPaneLoaded: false,
		_rolesPaneLoaded: false,

		/**
		 * Constructor
		 * 
		 * @param args
		 *            The {@link ecm.model.Teamspace} object associated with this dialog can be passed in as a property
		 *            called <code>model</code>. For example:<br>
		 *            new ManageTeamspaceDialog({ model: teamspace});
		 */
		constructor: function(args) {
			this.model = args.model;
		},

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmManageTeamspaceDialog");
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			this.addButton(this.messages.ok, "onOK", false, false);
			this.setTitle(this.messages.manage_teamspace_dialog_title);
			this.usersPane.heading.innerHTML = this.messages.manage_teamspace_team_pane_heading;
			if (this.model.usesClasses) {
				this.classesPane.heading.innerHTML = this.messages.manage_teamspace_classes_pane_heading;
			} else {
				this.classesPane.heading.innerHTML = this.messages.manage_teamspace_entry_templates_pane_heading;
				this._classesTab.set("title", this.messages.manage_teamspace_entry_templates_tab_title);
			}

			this.connect(this._searchTemplatesTab, "onShow", function() {
				if (!this._searchPaneLoaded) {
					this._searchPaneLoaded = true;
					this.searchTemplatesPane.setModel(this.model);
					this.searchTemplatesPane.render();
				}
			});

			this.connect(this._classesTab, "onShow", function() {
				if (!this._classesPaneLoaded) {
					this._classesPaneLoaded = true;
					this.classesPane.setModel(this.model);
					this.classesPane.render();
				}
			});
			this.connect(this._manageTeamTab, "onShow", function() {
				if (!this._userPaneLoaded) {
					this._userPaneLoaded = true;
					this.usersPane.mode = this.usersPane.MODE_TYPE.MODIFY;
					this.usersPane.setModel(this.model);
					this.usersPane.render();
				}
			});
			this.connect(this._manageRolesTab, "onShow", function() {
				if (!this._rolesPaneLoaded) {
					this._rolesPaneLoaded = true;
					this.rolesPane.mode = this.rolesPane.MODE_TYPE.MODIFY;
					this.rolesPane.setModel(this.model);
					this.rolesPane.render();
				}
			});
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param startingTab
		 *            The initial tab to display (<code>search</code>, <code>team</code>, or <code>classes</code>).
		 */
		show: function(startingTab) {
			this._disableTab();
			this._oldEntryTemplates = this.model.entryTemplates;
			if (!this._allDisabled) {
				switch (startingTab) {
				case "search":
					this._searchTemplatesTab.set("selected", "true");
					this._searchTemplatesTab.startup();
					break;
				case "team":
					this._manageTeamTab.set("selected", "true");
					this._manageTeamTab.startup();
					break;
				case "classes":
					this._classesTab.set("selected", "true");
					this._classesTab.startup();
					break;
				case "roles":
					this._manageRolesTab.set("selected", "true");
					this._manageRolesTab.startup();
					break;
				}
				this.inherited(arguments);
				this.resize();
			} else {
				// user does not have any rights to view any of the tabs, so show an error dialog
				var dialog = new MessageDialog({
					text: this.messages.manage_teamspace_no_rights_message
				});
				dialog.show();
			}
		},

		/**
		 * Returns the associated {@link ecm.model.Teamspace} object.
		 * 
		 * @return {@link ecm.model.Teamspace} object.
		 */
		getModel: function() {
			return this.model;
		},

		/**
		 * @private
		 */
		_disableTab: function() {
			// remove tabs the user does not have access to
			var classesDisabled = false;
			var teamDisabled = false;
			var searchDisabled = false;
			var rolesDisabled = false;
			var currentUserId = this.model.repository.userId;
			var currentUser = this.model.getTeamMemberById(currentUserId);
			if (this.model.repository._isP8() && !this.model.repository.getPrivilege("addModifyTeamspaceRole")) {
				rolesDisabled = true;
				teamDisabled = true;
			} else if (!this.model.repository.getPrivilege("addTeamspace") && this.model.repository.type == "cm") {
				rolesDisabled = true;
			}
			if (!this.model.getPrivilege("addRemoveClassesOrEntryTemplates")) {
				this._tabContainer.removeChild(this._classesTab);
				classesDisabled = true;
			}
			if (teamDisabled || !this.model.getPrivilege("addRemoveRoleParticipants")) {
				this._tabContainer.removeChild(this._manageTeamTab);
				teamDisabled = true;
			}
			if (!this.model.getPrivilege("addNewSearches")) {
				this._tabContainer.removeChild(this._searchTemplatesTab);
				searchDisabled = true;
			}
			if (rolesDisabled || (!this.model.getPrivilege("modifyRoles") || !this.model.currentUserIsOwner)) {
				this._tabContainer.removeChild(this._manageRolesTab);
				rolesDisabled = true;
			}

			this._allDisabled = classesDisabled && teamDisabled && searchDisabled && rolesDisabled;
		},

		/**
		 * @private Check if entry templates were added/changed
		 */
		_entryTemplatesChanged: function() {
			var changed = false;
			var newET = this.model.entryTemplates;
			if (this._oldEntryTemplates && newET && this._oldEntryTemplates.length && newET.length) {
				if (this._oldEntryTemplates.length != newET.length) {
					changed = true;
				} else {
					for (var i = 0; i < newET.length; i++) {
						if (this._oldEntryTemplates[i].id != newET[i].id) {
							changed = true;
							break;
						}
					}
				}
			}

			return changed;
		},

		/**
		 * Saves changes and closes the dialog.
		 */
		onOK: function() {
			var isValid = true;
			var modifyUsers = false;
			var modifyRoles = false;
			if (this._userPaneLoaded) {
				isValid = this.usersPane.onSaveState(); // save users to the model
				modifyUsers = this.usersPane.getIsDirty(); // to avoid unnecessarily updating the security OVP 
			}
			if (this._rolesPaneLoaded) {
				isValid = this.rolesPane.onSaveState(); // save roles to the model
				modifyRoles = this.rolesPane.getIsDirty(); // to avoid unnecessarily updating  roles 
			}
			if (isValid) {
				var repository = this.model.repository;
				// see if we need to refresh the ET cache
				if (this._entryTemplatesChanged()) {
					repository.clearEntryTemplateCache(null, true);
				}

				var self = this;
				repository.editTeamspaceTemplate(this.model, function(response) {
					self.onCancel();
				}, modifyUsers, modifyRoles);

			}
		}

	});
});

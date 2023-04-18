/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/data/ItemFileReadStore",
	"dojo/dom",
	"dojo/dom-attr",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/string",
	"dojo/window",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/form/MultiSelect",
	"dijit/form/Select",
	"dijit/form/ValidationTextBox",
	"dijit/registry",
	"dijit/Tooltip",
	"idx/html",
	"idx/form/Link",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Desktop",
	"ecm/model/Permission",
	"ecm/model/UserGroup",
	"ecm/model/Teamspace",
	"ecm/widget/CompositeButton",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/MultiColumnList",
	"ecm/widget/HoverHelp",
	"ecm/widget/_SecurityMixin",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/widget/dialog/SelectUserGroupDialog",
	"dojo/text!./templates/PropertiesPane.html"
],

function(declare, //
array, //
connect, //
lang, //
has, //
ItemFileReadStore, //
dom, //
domAttr, //
domClass, //
domGeom, //
domStyle, //
string, //
window, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
MultiSelect, //
Select, //
ValidationTextBox, //
registry, //
Tooltip, //
html, //
Link, //
LoggerMixin, //
Messages, //
Desktop, //
Permission, //
UserGroup, //
Teamspace, //
CompositeButton, //
ecmValidationTextBox, //
MultiColumnList, //
HoverHelp, //
_SecurityMixin, //
Pane, //
SelectUserGroupDialog, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.PropertiesPane
	 * @class Provides a widget that is used to specify properties for teamspaces and teamspace templates. For a
	 *        teamspace, this widget is used to specify the name, description, and template. For a teamspace template,
	 *        this widget is used to specify the name, description, and security.
	 *        <p>
	 *        In IBM Content Navigator, this widget defines the <strong>Define Teamspace</strong> pane and the
	 *        <strong>Define Teamspace Template</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	return declare("ecm.widget.teamspaceBuilder.PropertiesPane", [
		Pane,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.PropertiesPane.prototype */

		// Parameters
		// Template settings
		templateString: template,
		selectedTemplateName: "",
		messages: ecm.messages,
		model: null,
		_currentTemplateId: null,
		_mode: "create",
		_allUsersGroupId: UserGroup.AUTHENTICATED_USERS,

		ACCESS_TYPE: {
			PRIVATE: 1,
			PUBLIC: 2,
			MEMBERS: 3
		},

		_members: null,
		_memberButtons: null,
		_securityUtil: new _SecurityMixin(),

		constructor: function() {
			if (!this._members) {
				this._members = [];
			}
			if (!this._memberButtons) {
				this._memberButtons = [];
			}
		},

		/** Overrides dijit._Widget.postCreate to create the Teamspace Builder. */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			var repository = this.model.repository;
			if (repository && repository._isP8()) {
				repository.getDirectories(lang.hitch(this, function(directories) {
					array.forEach(directories, function(dir) {
						if (dir.principalCategory && dir.principalCategory == "internal searchable" && dir.symbolicName) {
							// We are looking for the internal searchable realm.
							var allUsersGroup = UserGroup.getRealmUsersPseudoGroup(dir.symbolicName);
							this._allUsersGroupId = allUsersGroup.id;
						}
					}, this);
					this._initialize();
				}));
			} else {
				this._initialize();
			}

			this.logExit("postCreate");
		},

		_initialize: function() {
			this.name.textDir = this.description.textDir = this.textDir = has("text-direction");

			this.resetPane();

			connect.connect(this.name, "_onInput", this, function() {
				this.model.name = this.name.get("value");
				this.model.onChange(this.model);
				this.model.onNameChange(this.model);
			});
			connect.connect(this.description, "_onInput", this, function() {
				this.model.desc = this.description.get("value");
				this.model.onChange(this.model);
			});

			this.contentList = registry.byId(this.id + "_workspaceTemplateList");
			this.connect(this.contentList, "onSelection", "onSelection");
			// var nameFieldTooltip = this.id + "_tooltipIcon";

			var options = [
				{
					label: this.messages.private_label,
					value: this.ACCESS_TYPE.PRIVATE
				},
				{
					label: this.messages.public_label,
					value: this.ACCESS_TYPE.PUBLIC
				},
				{
					label: this.messages.members_label,
					value: this.ACCESS_TYPE.MEMBERS
				}
			];

			var repository = this.model.repository;
			if (repository && repository.type == "cm") {
				options = [
					{
						label: this.messages.private_label,
						value: this.ACCESS_TYPE.PRIVATE
					},
					{
						label: this.messages.members_label,
						value: this.ACCESS_TYPE.MEMBERS
					}
				];
			}

			this._accessTypeSelect.addOption(options);

			this.name.setHoverHelp(this.nameHoverHelp);
			this.description.setHoverHelp(this.descriptionHoverHelp);

			var self = this;
			//if (ecm.model.desktop.isDesktopLoaded()) {
			//	domAttr.set(this.learnMoreLink, "href", this.getHelpURL());
			//} else {
			//	connect.connect(ecm.model.desktop, "onDesktopLoaded", function() {
			//		domAttr.set(self.learnMoreLink, "href", self.getHelpURL());
			///	});
			//}

			this.logExit("postCreate");
		},

		/* invoked when the help link is clicked */
		onHelp: function() {
			this.openNewHelpWindow(this.getHelpFile());
		},

		resetPane: function() {
			if (this.modelHandle) {
				connect.disconnect(this.modelHandle);
				this.modelHandle = null;
			}

			this.configureInstanceBuilderParts();

			this.name.set("value", this.model.name);
			this.description.set("value", this.model.desc);

			if (this.model.type == "instance") {
				var self = this;
				this.modelHandle = connect.connect(this.model.repository, "onTeamspaceTemplateListChange", this, function() {
					// this will prevent the template list from appearing when editing teamspaces
					if (self._mode == "create") {
						self._loaded = false;
						self.load();
					}
				});
			}

			this._setLabels();
			this._clearMembers();
			this.titleElement.innerHTML = html.escapeHTML(this._propertiesTitle);
			this.introText.innerHTML = this._propertiesIntroText;
			this.teamspaceName.innerHTML = html.escapeHTML(this._propertiesTeamspaceName);
			this.descriptionLabel.innerHTML = html.escapeHTML(this._propertiesTeamspaceDescription);
		},

		setModel: function(model) {
			this.model = model;
			this.type = model.type;
			this._setLabels();
		},

		focusOnEmptyName: function() {
			this.name.focus();
			this.name.set('value', "");
			this.description.focus();
			this.name.focus();
		},

		focusOnEmptyTemplate: function() {
			dom.byId(this.id + "_selectedTemplateName").innerHTML = ecm.messages.workspacebuilder_properties_select_template;
			dom.byId(this.id + "_selectedTemplateName").style.color = "#CC0000";
		},

		onReset: function() {
			this.name.reset();
			this.description.reset();
			dom.byId(this.id + "_selectedTemplateName").innerHTML = "";
		},

		postMixInProperties: function() {
			this.init();
			this._setLabels();
		},

		_setLabels: function() {
			if (this.type == Teamspace.TEMPLATE) {
				this._propertiesTitle = ecm.messages.workspacebuilder_template_properties;
				this._propertiesIntroText = ecm.messages.workspacebuilder_template_introText;
				this._propertiesTeamspaceName = ecm.messages.workspacebuilder_properties_templateName;
				this._propertiesTeamspaceDescription = ecm.messages.workspacebuilder_properties_templateDescription;
				this._teamspaceNameTooltip = ecm.messages.workspacebuilder_template_tooltip_name;
				this._teamspaceDescriptionTooltip = ecm.messages.workspacebuilder_template_tooltip_description;
				this._missingName = ecm.messages.workspacebuilder_name_missing_template;
				this._invalidName = ecm.messages.workspacebuilder_name_invalid_template;
			} else {
				if (this.parent.mode == "create") {
					this._propertiesTitle = ecm.messages.workspacebuilder_instance_properties;
					this._propertiesIntroText = ecm.messages.workspacebuilder_instance_introText;
					this._propertiesTeamspaceName = ecm.messages.workspacebuilder_properties_workspaceName;
					this._propertiesTeamspaceDescription = ecm.messages.workspacebuilder_properties_workspaceDescription;
					this._teamspaceNameTooltip = ecm.messages.workspacebuilder_instance_tooltip_name;
					this._teamspaceDescriptionTooltip = ecm.messages.workspacebuilder_instance_tooltip_description;
					this._missingName = ecm.messages.workspacebuilder_name_missing;
					this._invalidName = ecm.messages.workspacebuilder_name_invalid;

				} else {
					this._propertiesTitle = ecm.messages.workspacebuilder_template_edit_properties_pane;
					this._propertiesIntroText = ecm.messages.workspacebuilder_template_introText;
					this._propertiesTeamspaceName = ecm.messages.workspacebuilder_properties_templateName;
					this._propertiesTeamspaceDescription = ecm.messages.workspacebuilder_properties_templateDescription;
					this._teamspaceNameTooltip = ecm.messages.workspacebuilder_template_tooltip_name;
					this._teamspaceDescriptionTooltip = ecm.messages.workspacebuilder_template_tooltip_description;
					this._missingName = ecm.messages.workspacebuilder_name_missing_template;
					this._invalidName = ecm.messages.workspacebuilder_name_invalid_template;

				}
			}
		},

		edit: function() {
			this.instance.style.visibility = "hidden";
			this._mode = "edit";
			var json = this.model.templateJSON;
			var id = this.model.id;
			this.model.createFromTemplateJson(json);
			this.model.id = id; // don't use the ID from the json template.
		},

		load: function() {

			if (!this._loaded) {
				this.contentList = registry.byId(this.id + "_workspaceTemplateList");
				if (this.contentList) {
					this.contentList.grid._clearData();
				}
				var self = this;

				var repository = this.model.repository;
				if (repository && repository.teamspacesEnabled) {
					repository.retrieveTeamspaceTemplateFolder(function(items) {
						self._loadData(items);
						if (self.defaultTemplateId) {
							self._selectTemplateById(self.defaultTemplateId);
							self.contentList.grid.selection.comfirm = true;
						}

					});
				}
			}

		},

		_selectTemplateById: function(id) {
			var items = this.contentList.grid.store._arrayOfAllItems;
			for (var i = 0; i < items.length; i++) {
				var storeItem = items[i];
				if (storeItem && storeItem.id[0] == id) {
					var templateId = storeItem.id[0];
					var name = storeItem.name[0];
					var json = storeItem.json[0];
					var model = this.getModel();
					var repo = model.repository;
					//
					this._changeTemplate(repo, model, templateId, name);					
					this.contentList.grid.scrollToRow(i);
					this.contentList.addToSelection(i);
					break;
					//return storeItem;
				}
			}
			return null;
		},

		_loadData: function(items) {
			dom.byId(this.id + "_selectedTemplateName").innerHTML = ecm.messages.workspacebuilder_properties_select_template;
			dom.byId(this.id + "_selectedTemplateName").style.color = "#CC0000";

			var response = {};
			var _identifier = "id";
			var _label = "description";
			var _items = [];
			var _item;
			for (var i = 0; i < items.length; i++) { //TODO - fix duplicate names
				if (items[i].state != "offline" && items[i].state != "validate") {

					if (items[i].state == "default") {
						//e.grid.store.getValue(selectedItem, 'type')
						this.defaultTemplateId = items[i].id;
						//dom.byId(this.id + "_selectedTemplateName").style.color = "";
						//dom.byId(this.id + "_selectedTemplateName").innerHTML = has("dojo-bidi") ? self.enforceTextDirWithUcc(null, html.escapeHTML(items[i].name)) : html.escapeHTML(items[i].name);
					}
					_item = {
						"id": items[i].id,
						"name": items[i].name,
						"description": items[i].desc,
						"json": items[i].templateJSON
					};
					_items.push(_item);
				}
			}
			var store = new ItemFileReadStore({
				data: {
					identifier: _identifier,
					label: _label,
					items: _items
				}
			});

			this.contentList = registry.byId(this.id + "_workspaceTemplateList");
			this.contentList.setSelectionMode("single");
			this.contentList.comfirmSelection = true;
			this.contentList.comfirmMsg = ecm.messages.workspace_change_template_confirmation_question;
			if (_items)
				this.contentList.pageSize = _items.length;
			this.contentList.setModel([
				{
					field: 'name',
					name: ecm.messages.workspacebuilder_instance_template_name_header,
					"width": "50%"
				},
				{
					field: 'description',
					name: ecm.messages.workspacebuilder_instance_template_description_header,
					"width": "50%"
				}
			], store);

			//this.contentList.addToSelection(0); // auto select first row
			this._loaded = true;
			this.contentList.domNode.style.visibility = "visible";
			this.contentList.resize();
		},

		resize: function() {
			if (this.contentList)
				this.contentList.resize();
		},

		onSelection: function(selectedItems) {
			var self = this;
			array.forEach(selectedItems, function(entry, i) {
				if (entry && entry["id"]) {
					var templateId = entry.id[0];
					var name = entry.name[0];
					var json = entry.json[0];
					self.logDebug("onSelection", name);
					self.logDebug("onSelection", "entry.json = " + json);
					// do a single item retrieve to fetch the json data
					var model = self.getModel();
					var repo = model.repository;
					//
					self._changeTemplate(repo, model, templateId, name);
					self.contentList.grid.selection.comfirm = true;
				}
			});
		},

		_changeTemplate: function(repo, model, templateId, name) {
			this.previousSelectedItem = templateId;
			var self = this;
			repo.retrieveTeamspaceById(templateId, "template", function(teamspace) {
				model.createFromTemplateJson(teamspace.templateJSON);
				model.id = teamspace.id;
				model.teamspaceTemplateName = teamspace.name;
				dom.byId(self.id + "_selectedTemplateName").style.color = "";
				dom.byId(self.id + "_selectedTemplateName").innerHTML = has("dojo-bidi") ? self.enforceTextDirWithUcc(null, html.escapeHTML(name)) : html.escapeHTML(name);

				if (self._currentTemplateId != templateId) {
					self.getParent().onChangeTemplate(); // fire an event on the builder
				}

				self._currentTemplateId = templateId;

			});

		},

		getHelpFile: function() {
			//var helpFile = "defn_workspace_temp.html";
			var helpFile = "euche010.htm";
			if (this._mode == "edit") {
				helpFile = "euche010.htm";
			} else if (this.model.type == "instance") {
				helpFile = "euche019.htm";
			}
			return helpFile;
		},
		// security
		_onAccessTypeChange: function() {
			if (this._accessTypeSelect.get("value") == this.ACCESS_TYPE.MEMBERS) {
				this._selectMembersButton.set("disabled", false);

				// Show the list of selected members
				// var size = domGeom.getContentBox(this.domNode);
				// this.setSize(size.w, size.h + 91); // resize it to stop excessive growth in IE
				domStyle.set(this._membersNode, "display", "");

				// Open the user/group dialog if no members have been selected
				if (this._members.length == 0) {
					this._onSelectMembers();
				}
			} else if (!this._selectMembersButton.get("disabled")) {
				this._selectMembersButton.set("disabled", true);

				// Hide the list of selected members
				// var size = domGeom.getContentBox(this.domNode);
				// this.setSize(size.w, size.h - 91);
				domStyle.set(this._membersNode, "display", "none");
			}
		},

		_onSelectMembers: function() {
			var dialog = new SelectUserGroupDialog({
				callback: lang.hitch(this, this._addMembers)
			});
			var repo = this.model.repository;
			dialog.show(repo);
		},

		_getMemberIndex: function(id) {
			for (var i = 0; i < this._members.length; i++) {
				if (this._members[i].id == id) {
					return i;
				}
			}

			return -1;
		},

		_addMembers: function(members) {
			var self = this;
			array.forEach(members, function(member) {
				var id = member.id;
				if (self._getMemberIndex(id) >= 0) { // present
					return;
				}

				var button = new CompositeButton({
					label: member.displayName,
					"class": "member",
					actionIconClass: "removeMemberIcon",
					actionAltText: string.substitute(self.messages.remove_member, [
						member.displayName
					])
				});
				self.connect(button, "_onActionButtonClick", function() {
					var index = self._getMemberIndex(id);
					self._members.splice(index, 1);
					self._memberButtons.splice(index, 1)[0].destroyRecursive();
				});
				self._membersNode.appendChild(button.domNode);
				self._memberButtons.push(button);
				self._members.push(member);
			});
		},

		_clearMembers: function() {
			this._accessTypeSelect.set("value", this.ACCESS_TYPE.PRIVATE);

			if (this._memberButtons) {
				array.forEach(this._memberButtons, function(button) {
					if (!button._destroyed) {
						button.destroyRecursive();
					}
					delete button;
				});
				this._memberButtons = [];
			}

			this._members = [];
		},

		_getPermissions: function() {
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

			var accessType = this._accessTypeSelect.get("value");
			if (accessType == this.ACCESS_TYPE.PUBLIC) {
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
			} else if (accessType == this.ACCESS_TYPE.MEMBERS && this._members.length > 0) {
				// Grant read-only access to the selected members
				var accessMask = this._getAccessMask("READ_ONLY");
				for (var i = 0; i < this._members.length; i++) {
					var member = this._members[i];
					var granteeType = (member.isInstanceOf && member.isInstanceOf(ecm.model.UserGroup)) ? Permission.GRANTEE_TYPE.GROUP : Permission.GRANTEE_TYPE.USER;
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

		_getAccessMask: function(priviligeId) {
			var mask = 0;
			var repository = this.model.repository;
			var privs = this._securityUtil._getDocumentPrivileges(repository);

			array.some(privs, function(privilege) {
				if (privilege.id == priviligeId) {
					mask = privilege.mask;
					return true;
				}
			});
			return mask;
		},

		// refresh the name and description fields
		updateFields: function() {
			this.name.set("value", this.model.name);
			this.description.set("value", this.model.desc);
		},

		onSaveState: function() {
			var permissions = this._getPermissions();
			this.model.permissions = permissions;
		}

	});
});

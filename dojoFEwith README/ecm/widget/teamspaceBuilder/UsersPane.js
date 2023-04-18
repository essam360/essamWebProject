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
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/window",
	"dojo/data/ItemFileWriteStore",
	"dojox/grid/DataGrid",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
    "dijit/form/CheckBox",
	"dijit/registry",
	"idx/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/UserGroup",
	"ecm/model/Role",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"ecm/widget/teamspaceBuilder/Pane",
	"dojo/text!./templates/UsersPane.html",
	"idx/html",
	"idx/layout/BorderContainer"
],

function(declare, //
array, //
connect, //
lang, //
has, //
domStyle, //
domClass, //
window, //
ItemFileWriteStore, //
DataGrid, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
CheckBox, //
registry, //
ContentPane, //
LoggerMixin, //
Messages, //
UserGroup, //
Role, //
MessageDialog, //
UserGroupPermissionDialog, //
Pane, //
template, //
idxHtml) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.UsersPane
	 * @class Provides a widget that is used to add users to the teamspace and to assign roles to these users.
	 *        <p>
	 *        In IBM Content Navigator, this widget provides the <strong>Select Users</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	var UserPane = declare("ecm.widget.teamspaceBuilder.UsersPane", [
		Pane,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.UsersPane */

		templateString: template,

		_loaded: false,
		_userStore: null,
		_roleStore: null,
		_selectedMember: null,
		_tooltipNode: null,
		_isDirty: false,
		mode: "addUsers",

		MODE_TYPE: {
			MODIFY: "modifyUsers",
			ADD: "addUsers"
		},

		postMixInProperties: function() {
			this.init();
		},

		setModel: function(model) {
			this.model = model;
		},
		resize: function() {
			this.userGridBcontainer.resize();
			this.roleSection.resize();
		},

		_formatCheckBox: function(value, rowIndex) {
			var input = "", checked = "";
			var disabled = "";
			if (value && value.granted[0] == true) {
				checked = "checked";
			}
			if ((this._filterOwnerRole() && value.owner[0]) || (this._currentSelectedUserIsOwner() && value.owner[0])) {
				disabled = "disabled";
			}

			if (rowIndex != -1) {
				input = new CheckBox({"checked":checked == "checked" ? true : false, "disabled": disabled == "disabled" ? true : false});
				
				input.connect(input, "onChange", lang.hitch(this, function() {
					this._updateRole(rowIndex);
				}));
				input.connect(input, "onKeyDown", lang.hitch(this, function(event) {
				if (event.keyCode == dojo.keys.SPACE){
						input.set("checked", !input.get("checked"));
					}
				}));
			}
			return input;
		},

		_currentSelectedUserIsOwner: function() {
			var members = this._selectedMember, _this = this, currentUserSelectedIsOwner = false;
			var multiUsers = members ? lang.isArray(members) : false;
			if (multiUsers) {
				array.forEach(members, function(teamMember) {
					var grantedOwner = teamMember.roles ? array.indexOf(teamMember.roles, _this.ownerRoleid) != -1 : false;
					if (_this._isMemberCurrentUser(teamMember) && grantedOwner) {
						currentUserSelectedIsOwner = true;
					}
				});
			} else {
				if (this._selectedMember && this._isMemberCurrentUser(this._selectedMember)) {
					var grantedOwner = this._selectedMember.roles ? array.indexOf(this._selectedMember.roles, this.ownerRoleid) != -1 : false;
					if (grantedOwner)
						currentUserSelectedIsOwner = true;
				}
			}

			return currentUserSelectedIsOwner;
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			var editable = false;
			this.textDir = has("text-direction");
			this.roleGrid.set("structure", [
				{
					field: "granted",
					name: " ",
					attrs: "aria-label='" + this.messages.workspacebuilder_roles_select_role + "'",
					width: "15%",
					type: editable ? dojox.grid.cells.Bool : null,
					editable: editable,
					formatter: editable ? null : lang.hitch(this, function(data, rowIndex) {
						return this._formatCheckBox(this.roleGrid.getItem(rowIndex), rowIndex);
					})

				},
				{
					field: "name",
					name: ecm.messages.workspacebuilder_users_role_header,
					width: "85%"
				}
			]);

			this.roleGrid.set("textDir", this.textDir);
			connect.connect(this.roleGrid, "onCellMouseOver", this, function(e) {
				var roleItem = e.cellIndex == 0 ? null : this.roleGrid.getItem(e.rowIndex); // only for the second sell, not for the checkbox
				if (roleItem) {
					this._tooltipNode = e.cellNode;
					var toolTip = "";
					array.forEach(roleItem.privileges, function(priv, i) {
						var lbl = Role.lookupPrivilegeLabel(priv);
						if (lbl) {
							toolTip += lbl + "<br>\r\n";
						}
					});

					if (toolTip == "") {
						toolTip = ecm.messages.workspacebuilder_users_role_no_permissions;
					}

					var tooltipText = "<div class='tooltipValue'>" + toolTip + "</div>";
					dijit.showTooltip(tooltipText, e.cellNode, this.tooltipPosition);

				} else {
					dijit.hideTooltip(e.cellNode);
					this._tooltipNode = null;
				}
			});

			connect.connect(this.roleGrid, "onCellMouseOut", this, function(e) {
				dijit.hideTooltip(e.cellNode);
				this._tooltipNode = null;
			});

			this.logExit("postCreate");
		},
		_selectUserRow: function(row) {
			this.userGrid.selection.addToSelection(row);
			this._onUserSelectionChange();
		},
		_onUserSelectionChange: function() {
			var items = this.userGrid.selection.getSelected();
			this.removeButton.set('disabled', items.length == 0); // disable remove is nothing is selected
			//var obj = this._itemToObject(this._userStore, items[0]);
			if (this._isMemberCurrentUser(items[0], this._userStore))
				this.removeButton.set('disabled', true); // disable remove for current user
			//var member = items.length == 1 ? items[0] : items; // only show roles if one is selected
			var currentUserSelected = false;
			var _this = this;

			var member = items.length == 1 ? items[0] : items;

			this._displayRolesForMember(member);

		},

		_isMemberCurrentUser: function(obj, store) {
			var userDisplayName = this.model.repository.userDisplayName != null ? this.model.repository.userDisplayName : this.model.repository.user_displayname;
			if (obj && (obj.id[0] == "CURRENT_USER" || obj.displayName[0] == userDisplayName))
				return true;
			else
				return false;
		},
		_itemToObject: function(store, selectedItem) {
			var obj = {};
			if (selectedItem !== null) {
				array.forEach(store.getAttributes(selectedItem), function(attribute) {
					var isArray = attribute == "privileges"; // these properties contain arrays
					var value = isArray ? store.getValues(selectedItem, attribute) : store.getValue(selectedItem, attribute);
					obj[attribute] = value;
				});
			}
			return obj;
		},

		_displayRolesForMember: function(member) {

			// multiple users selected
			var multiUsers = member ? lang.isArray(member) : false;
			this._selectedMember = member;

			if (this._selectedMember == null) {
				// hide the privileges section of role is null
				this.roleSection.domNode.style.display = "none";
				var rowCount = this.userGrid.get('rowCount');
				if (rowCount > 0)
					this._selectUserRow(0);
			} else {
				this.roleSection.domNode.style.display = "block"; // show the section

				// populate roles for the user
				var items = [];
				var roles = this.model.roles;
				for (var i = 0; i < roles.length; i++) {
					var role = roles[i];
					var roleName = role.name;
					var roleId = role.id;
					// check if member.roles contains the current role
					var isGranted = false;
					if (!multiUsers) {
						isGranted = this._selectedMember.roles ? array.indexOf(this._selectedMember.roles, roleId) != -1 : false;
						if (this._isMemberCurrentUser(this._selectedMember, this._userStore) && role.owner) {
							isGranted = true; // the creator is always owner, can't be changed.
						}
					} else {
						var members = member, allSelected = true;
						array.forEach(members, function(teamMember) {
							var granted = teamMember.roles ? array.indexOf(teamMember.roles, roleId) != -1 : false;
							if (!granted) {
								allSelected = false;
							}
						});
						isGranted = allSelected;
					}
					items.push({
						"id": role.id,
						"granted": isGranted,
						"name": roleName,
						"owner": role.owner,
						"privileges": role.privileges
					});
				}

				this._roleStore = new ItemFileWriteStore({
					data: {
						identifier: "id",
						label: "name",
						items: items
					}
				});

				connect.connect(this._roleStore, "onSet", this, "onChangeSelectedRoles"); // connect to the changes to the checkboxes
				this.roleGrid.setStore(this._roleStore);
			}
		},

		_updateRole: function(rowId) {
			var item = this.roleGrid.getItem(rowId);
			var granted = item["granted"][0];
			this._roleStore.setValue(item, "granted", !granted);
			this._roleStore.save();
		},

		_getRolebyId: function(itemId) {
			var role;
			var roleStore = this._roleStore;
			this._roleStore.fetch({
				onComplete: function(items, request) {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						var id = roleStore.getValue(item, "id");
						if (id == itemId) {
							role = item;
						}
					}
				}
			});
			return role;
		},
		onChangeSelectedRoles: function(item, attribute, oldValue, newValue) {
			//  change the permissions on the current role
			var roleStore = this._roleStore;
			var member = this._selectedMember;

			var multiUsers = member ? lang.isArray(member) : false;
			var isOwnerRoleSelected = roleStore.getValue(item, "owner");

			var userStore = this._userStore;
			var _this = this;
			this._roleStore.fetch({
				onComplete: function(items, request) {
					var selectedRoles = [];
					var selectedRoleNames = [];

					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						var granted = roleStore.getValue(item, "granted");
						var isOwner = roleStore.getValue(item, "owner");

						if (!multiUsers && _this._isMemberCurrentUser(_this._selectedMember, _this._userStore) && isOwner) {
							granted = true; // the creator is always owner, can't be changed.

						} else {

							var members = member, currentUserSelected = false;

							array.forEach(members, function(teamMember) {
								if (_this._isMemberCurrentUser(teamMember)) {
									currentUserSelected = true;
								}
							});
							if (currentUserSelected && isOwner && isOwnerRoleSelected) {
								granted = true; // the creator is always owner, can't be changed.
								/*if (_this.messageDialog) {
									_this.messageDialog.destroy();
								}
								_this.messageDialog = new MessageDialog({
									text: "multi selected not support when the current user is selected"
								});
								_this.messageDialog.show();*/
							}

						}
						if (granted) {
							var id = roleStore.getValue(item, "id");
							var name = roleStore.getValue(item, "name");
							selectedRoles.push(id);
							if (_this.textDir && _this.enforceTextDirWithUcc) {
								selectedRoleNames.push(_this.enforceTextDirWithUcc(null, name));
							} else {
								selectedRoleNames.push(name);
							}
						}
					}

					var rolesDisplay = selectedRoleNames.length == 0 ? "" : selectedRoleNames.join(", ");

					if (multiUsers) {
						var members = member;
						array.forEach(members, function(teamMember, i) {
							userStore.setValues(teamMember, "roles", selectedRoles);
							userStore.setValue(teamMember, "rolesDisplay", rolesDisplay);
						});
					} else {
						userStore.setValues(member, "roles", selectedRoles);
						userStore.setValue(member, "rolesDisplay", rolesDisplay);
					}

				}
			});

			this._isDirty = true;
			this._displayRolesForMember(member);
			//this._validate();
		},

		onChangeTemplate: function() {
			this._loadData(true);
			if (this.userGrid) {
				this.userGrid.selection.clear();
			}
		},

		onSaveState: function() {
			// hide tooltip just in case it's somehow still visible
			if (this._tooltipNode) {
				dijit.hideTooltip(this._tooltipNode);
			}

			if (!this._validate()) {
				return false;
			}

			var model = this.model;
			var userStore = this._userStore;
			userStore.fetch({
				onComplete: function(items, request) {
					// populate list of members
					var members = [];
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						var member = {
							id: userStore.getValue(item, "id"),
							name: userStore.getValue(item, "shortName") ? userStore.getValue(item, "shortName") : userStore.getValue(item, "name"),
							displayName: userStore.getValue(item, "name"),
							type: userStore.getValue(item, "type"), // "user" or "group"
							roles: userStore.getValues(item, "roles")
						};
						members.push(member);
					}
					model.members = members;
					model.onChange(model);
				}
			});

			return true;
		},

		onAddUser: function(role) {
			// invoke the dialog
			var allRoles = this.model.roles;
			var roles = [];
			for (var i = 0; i < allRoles.length; i++) {
				if (this._filterOwnerRole() && allRoles[i].owner)
					continue;
				roles.push({
					value: allRoles[i].id,
					label: allRoles[i].name
				});
			}
			var selectUsers = new UserGroupPermissionDialog({
				permissionLabel: ecm.messages.role_selector_name,
				repository: this.model.repository,
				showPseudoGroups: (this.model.repository.type == "p8"),
				callback: lang.hitch(this, this._addUserWork),
				permissions: roles
			});
			selectUsers.show(this.model.repository);
		},
		// Filter out owner role for non owners.  Those use should not be able to add owners
		_filterOwnerRole: function() {
			//var currentUserId = this.model.repository.userId;
			//var currentUser = this.model.getTeamMemberById(currentUserId);
			var isOwner = this.model["currentUserIsOwner"] == true ? true : false;
			if (this.mode == this.MODE_TYPE.ADD)
				return false;
			else if (isOwner)
				return false;
			else
				return true;

		},

		_addUserWork: function(roleId, items) {
			var userStore = this._userStore;
			var roleNames = new Array("");
			if (roleId) {
				var role = this._getRolebyId(roleId);
				if (role)
					roleNames = new Array(role.name);
			}
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				var id = item.id;

				if (this._userStore._getItemByIdentity(id)) {
					var oldItem = this._userStore._getItemByIdentity(id)
					userStore.deleteItem(oldItem);
					userStore.save();
				}
				var _roles = roleId ? new Array(roleId) : [];

				var obj = {
					name: item.name,
					shortName: item.shortName,
					displayName: item.displayName,
					id: id,
					roles: _roles,
					rolesDisplay: roleNames,
					type: (item.isInstanceOf && item.isInstanceOf(UserGroup)) ? "group" : "user"
				};
				this._userStore.newItem(obj);

			}
			this._userStore.save();
			this._isDirty = true;
			var rowCount = this.userGrid.get('rowCount');
			if (rowCount == 1)
				this._selectUserRow(0);
		},

		_formatCell: function(item) {
			var cellValue = "";
			if (item.type[0] == "group") {
				cellValue = "<span class='groupIcon'><img src='dojo/resources/blank.gif' alt='" + ecm.messages.group + "'></img></span>";
			} else {
				cellValue = "<span class='userIconSpan'><img src='dojo/resources/blank.gif' alt='" + ecm.messages.user + "'></img></span>";
			}
			cellValue += "<span class='nameText'>" + item.displayName + "</span>";

			return cellValue;
		},

		onRemoveUser: function(role) {
			this.userGrid.removeSelectedRows();
			this._userStore.save();
			this._onUserSelectionChange();
			this._isDirty = true;
		},

		/* invoked when the help link is clicked */
		onHelp: function() {
			this.openNewHelpWindow("euche017.htm");
		},

		_validate: function() {
			// check if there is at least one user with an owner role
			var isValid = false;

			// if the userStore hasn't been loaded, then load it now
			if (!this._userStore) {
				this._loadData();
			}

			var errMsg = "";
			if (this._userStore) {
				var userStore = this._userStore;
				var allRoles = this.model.roles;
				userStore.fetch({
					onComplete: function(userItems, request) {
						// validate that there is an owner:
						isValid = array.some(userItems, function(userItem) {
							var roleIds = userStore.getValues(userItem, "roles"); // get the user's roles
							var hasAnOwnerRole = array.some(roleIds, function(roleId) {
								return array.some(allRoles, function(role) {
									return role.owner && role.id == roleId;
								}); // loop through allRoles
							}); // loop through roleIds
							return hasAnOwnerRole;
						}); // loop through userItems

						if (!isValid) {
							errMsg = ecm.messages.workspacebuilder_users_no_owner_error;
						} else {
							// validate each user has a role:
							isValid = !array.some(userItems, function(userItem) {
								return (userItem.roles == null || userItem.roles.length == 0);
							});
							if (!isValid) {
								errMsg = ecm.messages.workspacebuilder_users_no_role_error;
							}
						}
					} // onComplete
				}); // fetch
			}

			if (!isValid && errMsg) {
				var dialog = new MessageDialog({
					text: errMsg
				});
				dialog.show();
			}

			return isValid;
		},

		render: function() {
			this._loadData();
			this._buildUserGrid();
			this._selectUserRow(0);
		},

		_buildUserGrid: function() {
			if (this.userGrid) {
				this.userGrid.destroy();
			}

			var layout = [
				{
					field: "name",
					name: ecm.messages.workspacebuilder_users_users_or_group_header,
					width: "50%",
					formatter: lang.hitch(this, function(data, rowIndex) {
						return this._formatCell(this.userGrid.getItem(rowIndex));
					})
				},
				{
					field: "rolesDisplay",
					name: ecm.messages.workspacebuilder_users_roles_header,
					width: "50%"
				}
			];

			this.userGrid = new DataGrid({
				structure: layout,
				selectionMode: "extended",
				sortInfo: 1,
				canSort: function() {
					return true;
				},
				textDir: this.textDir,
				store: this._userStore
			});
			this.userGridContainer.addChild(this.userGrid);

			this.connect(this.userGrid.selection, "onChanged", "_onUserSelectionChange");

			// Connects the userGrid first column to show the user information tooltip.
			if (this.model.repository._isP8()) {
				connect.connect(this.userGrid, "onCellMouseOver", this, function(e) {
					var memberItem = e.cellIndex == 0 ? this.userGrid.getItem(e.rowIndex) : null; // only for the second sell, not for the checkbox
					if (memberItem) {
						this._tooltipNode = e.cellNode;
						var toolTip = [];
						toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(ecm.messages.display_name) + "</span> ");
						toolTip.push("<span class='tooltipValue'>");
						toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(memberItem.displayName[0])) : idxHtml.escapeHTML(memberItem.displayName[0]));
						toolTip.push("</span></div>");
						toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(ecm.messages.name) + "</span> ");
						toolTip.push("<span class='tooltipValue'>");
						toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(memberItem.name[0])) : idxHtml.escapeHTML(memberItem.name[0]));
						toolTip.push("</span></div>");
						if (memberItem.shortName) {
							toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(ecm.messages.shortName) + "</span> ");
							toolTip.push("<span class='tooltipValue'>");
							toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(memberItem.shortName[0])) : idxHtml.escapeHTML(memberItem.shortName[0]));
							toolTip.push("</span></div>");
						}
						dijit.showTooltip(toolTip.join(""), e.cellNode, this.tooltipPosition);
					} else {
						dijit.hideTooltip(e.cellNode);
						this._tooltipNode = null;
					}
				});

				connect.connect(this.userGrid, "onCellMouseOut", this, function(e) {
					dijit.hideTooltip(e.cellNode);
					this._tooltipNode = null;
				});
			}
		},

		_loadData: function(forceReload) {
			if (!this._loaded || forceReload) {

				// find owner role
				var ownerRole;
				var roles = this.model.roles;
				for (var i = 0; i < roles.length; i++) {
					var r = roles[i];
					if (r.owner) {
						ownerRole = r;
						this.ownerRoleid = r.id;
						break;
					}
				}

				// use existing members if defined otherwise use default current user as owner
				var members = this.model.members;
				if (members && members.length > 0) {
					// set the role display 
					for (member in members) {
						members[member].rolesDisplay = this._getRoleDisplay(members[member], roles);
					}
				} else {
					// create store for the list of users
					var currentUserId = this.model.repository.userId;
					var userDisplayName = this.model.repository.userDisplayName != null ? this.model.repository.userDisplayName : this.model.repository.user_displayname;

					if (!userDisplayName)
						userDisplayName = currentUserId;
					var currentUser = {
						id: "CURRENT_USER",
						type: "user",
						name: currentUserId,
						shortName: currentUserId,
						displayName: userDisplayName,
						rolesDisplay: "",
						roles: []
					};

					// set the current user as an owner
					if (ownerRole) {
						currentUser.roles.push(ownerRole.id);
						currentUser.rolesDisplay = ownerRole.name;
					}
					members = [
						currentUser
					];
				}

				this._userStore = new ItemFileWriteStore({
					data: {
						identifier: "id",
						label: "name",
						items: members
					}
				});

				this._loaded = true;
			}
		},

		// build the role display name
		_getRoleDisplay: function(member, roles) {
			var roleDisplay = [];
			var memberRoles = member.roles;
			if (memberRoles && memberRoles.length > 0) {
				for (memberRole in memberRoles) {
					for (role in roles) {
						if (memberRoles[memberRole] == roles[role].id) {
							if (this.textDir && this.enforceTextDirWithUcc) {
								roleDisplay.push(this.enforceTextDirWithUcc(null, roles[role].name));
							} else {
								roleDisplay.push(roles[role].name);
							}
						}
					}
				}
			}
			return (roleDisplay.length == 0 ? "" : roleDisplay.join(", "));
		},

		getIsDirty: function() {
			return this._isDirty;
		},

		destroy: function() {
			this.inherited(arguments);
		}
	});

	/**
	 * Calls the specified method on the widget.
	 */
	UserPane.callMethod = function(widgetId, method) {
		var widget = registry.byId(widgetId);
		if (widget && widget[method]) {
			var args = [];
			for (var i = 2; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			widget[method].apply(widget, args);
		}
	};

	return UserPane;
});

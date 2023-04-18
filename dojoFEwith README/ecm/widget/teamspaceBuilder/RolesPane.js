/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/dom-construct",
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/data/ItemFileWriteStore",
	"dojo/keys",
	"dojo/string",
	"dojox/grid/EnhancedGrid",
	"dojox/grid/enhanced/plugins/CellMerge",
	"dojox/uuid/Uuid",
	"dojox/uuid/generateRandomUuid",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/BorderContainer",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/registry",
    "dijit/form/CheckBox",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Role",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/widget/teamspaceBuilder/TeamspaceBuilder",
	"ecm/widget/teamspaceBuilder/EditRoleDialog",
	"./RoleSloshBucket",
	"dojo/text!./templates/RolesPane.html"
],

function(domConstruct, //
declare, //
array, //		
connect, //
lang, //
has, //
ItemFileWriteStore, //
keys, //
string, //
EnhancedGrid, //
CellMerge, //
Uuid, //
generateRandomUuid, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
BorderContainer, //
Menu, //
MenuItem, //
registry, //
CheckBox, //
idxHtml, //
LoggerMixin, //
Messages, //
Role, //
ConfirmationDialog, //
MessageDialog, //
Pane, //
TeamspaceBuilder, //
EditRoleDialog, //
RoleSloshBucket, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.RolesPane
	 * @class Provides a widget that is used to add users to the teamspace and assign roles to the users.
	 *        <p>
	 *        In IBM Content Navigator, this widget provides the <strong>Select Users</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	var RolesPane = declare("ecm.widget.teamspaceBuilder.RolesPane", [
		Pane,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.RolesPane */

		templateString: template,
		_isDirty: false,
		_loaded: false,
		_privStore: null,
		_selectionStore: null,
		_grid: null,
		_tooltipNode: null,

		ADD_SEARCHES: [
			"fileInFolders",
			"addNewSearches"
		],
		PROMOTE_VERSIONS: [
			"promoteVersions",
			"modifyContent",
			"modifyItemProperties",
			"viewContent"
		],
		MANAGE_PERMISSIONS_P8: [
			"deleteItems",
			"modifyItemPermissions",
			"promoteVersions",
			"modifyContent",
			"modifyItemProperties",
			"createSubfolders",
			"fileInFolders",
			"viewContent"
		],
		MANAGE_PERMISSIONS_CM: [
			"deleteItems",
			"modifyItemPermissions",
			"modifyContent",
			"modifyItemProperties",
			"viewContent"
		],

		MANAGE_USERS_P8: [
			"addNewSearches",
			"createNewSearches",
			"addRemoveClassesOrEntryTemplates",
			"addRemoveRoleParticipants",
			"modifyItemPermissions",
			"fileInFolders",
			"viewContent"
		],

		MANAGE_USERS_CM: [
			"addNewSearches",
			"createNewSearches",
			"addRemoveClasses",
			"addRemoveRoleParticipants",
			"modifyItemPermissions",
			"viewContent"
		],

		mode: "addModifyRoles",

		MODE_TYPE: {
			MODIFY: "modifyRoles",
			ADD: "addModifyRoles"
		},

		postMixInProperties: function() {
			this.init();
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.textDir = has("text-direction");
			this.connect(this.sloshBucket, "onSelectSelection", "onSelectSelection");
			this.connect(this.sloshBucket, "onSelectAvailable", "onSelectAvailable");
			this.connect(this.sloshBucket, "onCreateNewItem", "onCreateNewRole");
			this.connect(this.sloshBucket, "onMakeAvailable", "onMakeAvailable");
			this.connect(this.sloshBucket, "onEdit", "onEdit");
			this._selectionStore = this._buildStore([]);
			this.logExit("postCreate");
		},

		setModel: function(model) {
			this.model = model;
		},

		_renderBasedOnMode: function() {
			if (this.mode == this.MODE_TYPE.MODIFY) {
				this.sloshBucket.availableList.domNode.style.visibility = "hidden";
				this.sloshBucket.addButton.domNode.style.visibility = "hidden";
				this.sloshBucket.selectionList.topPane.domNode.style.display = "none";
				this.sloshBucket.selectionToolbar.domNode.style.display = "none";
				this.sloshBucket.selectionToolbar.addNew.domNode.style.display = "none";
				this.rolesTitle.innerHTML = ecm.messages.workspacebuilder_roles_title_modify;
				this.introText.innerHTML = ecm.messages.workspacebuilder_template_roles_modify_introText;
			}
		},

		onEdit: function(item) {
			var roleName = this._selectionStore.getValue(item, "name");
			var roleDescription = this._selectionStore.getValue(item, "description");

			var dlg = new EditRoleDialog({
				roleName: roleName,
				roleDescription: roleDescription,
				item: item,
				callback: lang.hitch(this, this.onAfterEditRole)
			});
			dlg.show();
		},

		onAfterEditRole: function(args) {
			this._selectionStore.setValue(args.item, "name", args.name);
			this._selectionStore.setValue(args.item, "description", args.description);
		},

		onAfterAddNewRole: function(role) {
			var sb = this.sloshBucket;
			sb.addItemToSelection(role);
		},

		onMakeAvailable: function(r) {
			var bucket = this.sloshBucket;
			// generate new id so we can add it to the available list
			r.id = new Uuid(generateRandomUuid()).toString();
			var repo = this.model.repository;
			var self = this;
			repo.addSystemRole(r.name, r.description, r.privileges, function(role) {
				r.id = role.id; // set the role on the store item
				//r.setCurrentUserPrivileges(role.getCurrentUserPrivileges());
				r.privDelete = role.hasPrivilege("privDelete");
				bucket.addItemToAvailableList(r);
				// disable make available button
				bucket.selectionToolbar.makeAvailable.set('disabled', true);

				// set a flag on the selected item  
				var selectedItem = bucket.selectionList.grid.selection.getSelected();
				if (selectedItem) {
					self._selectionStore.setValue(selectedItem[0], "available", true);
				}
			});

		},

		onCreateNewRole: function() {
			var dlg = new EditRoleDialog({
				callback: lang.hitch(this, this.onAfterAddNewRole)
			});
			dlg.show();
		},

		// one of the roles in the top list was selected
		onSelectSelection: function(items) {
			var role = items.length == 1 ? items[0] : null;
			var convertItemToObject = this.sloshBucket._itemToObject;
			var store = this._selectionStore;
			var obj = convertItemToObject(store, role);
			if (obj.owner) {
				this._displayPrivileges(role, false);
			} else {
				this._displayPrivileges(role, true);
			}
		},

		// one of the roles in the bottom list of available roles was selected
		onSelectAvailable: function(items) {
			var role = items.length == 1 ? items[0] : null;
			this._displayPrivileges(role, false);
		},
		_validate: function() {
			// check if there is at least one user with an owner role
			var isValid = true;
			var hasOwner = false;

			var errMsg = "";

			var model = this.model;
			var convertItemToObject = this.sloshBucket._itemToObject;
			var store = this._selectionStore;

			store.fetch({

				onComplete: function(items) {
					var roles = [];
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						var obj = convertItemToObject(store, item);
						if (obj.owner) {
							hasOwner = true;
						}
						if (obj.privileges == null || obj.privileges.length == 0) {
							errMsg = lang.replace(ecm.messages.workspacebuilder_roles_roles_nopermissions, [
								idxHtml.escapeHTML(obj.name)
							]);
							isValid = false;
							break;
						}
					}

				}
			});

			if (!hasOwner) {
				errMsg = ecm.messages.workspacebuilder_users_no_owner_error;
				isValid = false;
			}
			if (!isValid && errMsg) {
				var dialog = new MessageDialog({
					text: errMsg
				});
				dialog.show();
			}

			return isValid;
		},
		onSaveState: function() {

			var model = this.model;
			var convertItemToObject = this.sloshBucket._itemToObject;
			var store = this._selectionStore;

			store.fetch({

				onComplete: function(items) {
					var roles = [];
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						var obj = convertItemToObject(store, item);
						var role = new Role(obj);
						roles.push(role);
					}
					if (roles.length > 0) // only set if there are roles. The owner roles should always be set on the model so don't override it with an empty list
					{
						model.roles = roles;
						model.onChange(model);
					}
				}
			});

			// hide tooltip just in case it's somehow still visible
			if (this._tooltipNode) {
				dijit.hideTooltip(this._tooltipNode);
			}

			return true;
		},

		_displayPrivileges: function(role, /* bool */editable) {
			if (role == null) {
				// hide the privileges section of role is null
				this.privSection.style.display = "none";
				return;
			}

			this._currentRole = role;
			this.privHeader.innerHTML = lang.replace(ecm.messages.workspacebuilder_roles_privileges_header, [
				!this.textDir ? idxHtml.escapeHTML(role.name) : this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(role.name))
			]);
			this.privSection.style.display = "block"; // show the section 

			var self = this;
			var privItems = [];
			var rowsToMerge = [];

			var addPrivileges = function(privs, header) {

				rowsToMerge.push(privItems.length);

				// add header
				privItems.push({
					id: "header_" + header,
					granted: null,
					description: ecm.messages["workspacebuilder_roles_priv_group_" + header]
				});

				var hasModifyRoles = array.indexOf(role.privileges, "modifyRoles") != -1;
				var hasManageUsers = array.indexOf(role.privileges, "addRemoveRoleParticipants") != -1;

				for (var i = 0; i < privs.length; i++) {
					var priv = privs[i];

					var isGranted = array.indexOf(role.privileges, priv) != -1;

					if (priv == "viewItemProperties")
						isGranted = true;
					else if (self._isTeamspacePrivEnabled(priv) && hasModifyRoles)
						isGranted = true;

					if (hasManageUsers && priv == "fileInFolders")
						isGranted = true;

					privItems.push({
						"id": priv,
						"granted": isGranted,
						"description": Role.lookupPrivilegeLabel(priv)
					});
				}
			};

			var repo = this.model.repository;
			var tempPrivs, teamspacePrivs;

			if (repo._isCM()) {
				if (role.owner[0]) { // only owner can have owner permissions
					tempPrivs = Role.PRIVILEGE_CATEGORIES.cmTeamspace;
					teamspacePrivs = tempPrivs.concat(Role.PRIVILEGE_CATEGORIES.ownerTeamspace);
				} else
					teamspacePrivs = Role.PRIVILEGE_CATEGORIES.cmTeamspace;
				addPrivileges(Role.PRIVILEGE_CATEGORIES.cmItem, "item");
			} else {
				if (role.owner[0]) { // only owner can have owner permissions
					tempPrivs = Role.PRIVILEGE_CATEGORIES.p8Teamspace;
					teamspacePrivs = tempPrivs.concat(Role.PRIVILEGE_CATEGORIES.ownerTeamspace);
				} else
					teamspacePrivs = Role.PRIVILEGE_CATEGORIES.p8Teamspace;
				addPrivileges(Role.PRIVILEGE_CATEGORIES.p8Item, "item");

			}
			addPrivileges(teamspacePrivs, "teamspace");

			this._privStore = new ItemFileWriteStore({
				data: {
					identifier: "id",
					label: "description",
					items: privItems
				}
			});
			connect.connect(this._privStore, "onSet", this, "onPermissionChanged");

			// set up privileges list
			if (this._grid) {
				this._grid.destroy();
			}

			// build the grid
			this._grid = new EnhancedGrid({
				canEdit: function(inCell, inRowIndex) {
					var item = this.getItem(inRowIndex);
					var id = this.store.getValues(item, "id"); // convert from object value
					if (id == "viewItemProperties")
						return false;
					else
						return this._canEdit;
				},

				structure: [
					{
						field: "granted",
						name: " ",
						attrs: "aria-label='" + this.messages.workspacebuilder_roles_select_permission + "'",
						width: "15%",
						type: false ? dojox.grid.cells.Bool : null,
						editable: editable,
						formatter: lang.hitch(this, function(data, rowIndex) {
							return this._formatDisabledCheckbox(this._grid.getItem(rowIndex), rowIndex, role, editable);
						})

					},
					{
						field: "description",
						name: ecm.messages.workspacebuilder_roles_privilege_header,
						width: "85%"
					}
				],
				canSort: function() {
					return false;
				},
				selectionMode: "none",
				plugins: {
					cellMerge: true
				}
			}, document.createElement("div"));
			this._grid.resize({
				h: 460,
				w: 250
			});
			this.privGridContainer.appendChild(this._grid.domNode);
			this._grid.startup();

			connect.connect(this._grid, "onCellMouseOver", this, function(e) {
				var roleItem = e.cellIndex == 0 ? null : this._grid.getItem(e.rowIndex);
				if (roleItem) {
					var roleId = this._privStore.getValue(roleItem, "id");
					if (roleId.indexOf("header") != 0) {
						this._tooltipNode = e.cellNode;
						var toolTip = Role.lookupPrivilegeDescription(roleId);
						var tooltipText = "<div class='tooltipValue'>" + toolTip + "</div>";
						dijit.showTooltip(tooltipText, e.cellNode, this.tooltipPosition);
						return;
					}
				}
				dijit.hideTooltip(e.cellNode);
				this._tooltipNode = null;

			});

			connect.connect(this._grid, "onCellMouseOut", this, function(e) {
				dijit.hideTooltip(e.cellNode);
				this._tooltipNode = null;
			});

			this._grid.setStore(this._privStore);

			for (var i = 0; i < rowsToMerge.length; i++) {
				this._grid.mergeCells(rowsToMerge[i], 0, 1, 1); // merge the header cells
			}
		},

		_isTeamspacePrivEnabled: function(priv) {
			if (priv == "addRemoveRoleParticipants" || priv == "addRemoveClasses" || priv == "createNewSearches" || priv == "addNewSearches" || priv == "addRemoveClassesOrEntryTemplates") {
				return true;
			} else
				return false;

		},

		_isTeamspaceAddNewSearchPrivEnabled: function(priv) {
			if (priv == "addNewSearches") {
				return true;
			} else
				return false;

		},
		_buildStore: function(roles) {
			var storeItems = [];
			for (var i = 0; i < roles.length; i++) {
				var r = roles[i];
				var item = this._buildItem(r);
				this.logDebug("_buildStore", "add role[" + i + "]: " + item["name"] + ", messageId: " + item["messageId"]);
				storeItems.push(item);
			}

			var store = new ItemFileWriteStore({
				data: {
					identifier: "id",
					label: "description",
					items: storeItems
				}
			});
			return store;
		},

		_buildItem: function(r) {
			var item = {
				"id": r.id,
				"name": r.name,
				"description": r.description,
				"privileges": r.privileges,
				"owner": r.owner,
				"preDefined": r.preDefined,
				"messageId": (r.messageId ? r.messageId : ""),
				"privDelete": r.hasPrivilege("privDelete")
			};
			return item;
		},

		/* invoked when the help link is clicked */
		onHelp: function() {
			this.openNewHelpWindow("euche017.htm");
		},

		/**
		 * Invoked when a role selection is checked
		 */
		_updateRole: function(rowId, rowItem) {
			var store = this._privStore, _this = this;
			var repo = this.model.repository;
			var role = this._currentRole;
			var item = rowItem == null ? this._grid.getItem(rowId) : rowItem;
			var granted = item["granted"][0];
			var grantAllTeamspacePrivs = false, grantForAddSearchesPermissions = false, grantForManagePermissions = false, grantForPromoteVersions = false, grantForManageUsers = false, grantForTeamspacePrivs = false;

			if (item.id[0] == "modifyRoles" && !granted) {
				grantAllTeamspacePrivs = true;
			} else if (item.id[0] == "addNewSearches" && !granted) {
				grantForAddSearchesPermissions = true;
			} else if (item.id[0] == "addRemoveRoleParticipants" && !granted) {
				grantForManageUsers = true;
			}

			if (repo._isCM() && !granted && (item.id[0] == "addRemoveClasses" || item.id[0] == "addNewSearches")) {
				grantForTeamspacePrivs = true;
			}
			var MANAGE_PERMISSIONS = this.MANAGE_PERMISSIONS_P8;
			var MANAGE_USERS = this.MANAGE_USERS_P8;
			var ADD_SEARCHES = this.ADD_SEARCHES;

			if (repo._isCM()) {
				MANAGE_PERMISSIONS = this.MANAGE_PERMISSIONS_CM;
				MANAGE_USERS = this.MANAGE_USERS_CM;

			}
			store.setValue(item, "granted", !granted);
			store.save();

			store.fetch({
				onComplete: function(items, request) {

					var dependentsCheckedStatus = _this._checkForAllDependentPrivs(items);

					if (!grantForManageUsers && !dependentsCheckedStatus.allManangeUsersGranted)
						_this._unCheckParent(items, "addRemoveRoleParticipants");
					if (!grantForAddSearchesPermissions && !dependentsCheckedStatus.allAddSearchesGranted)
						_this._unCheckParent(items, "addNewSearches");

				}

			});
			store.fetch({
				onComplete: function(items, request) {
					var grantedPrivileges = [];

					for (var i = 0; i < items.length; i++) {
						var tempItem = items[i];
						var granted = store.getValue(tempItem, "granted");
						if (grantAllTeamspacePrivs && _this._isTeamspacePrivEnabled(tempItem.id[0])) {
							granted = true;
						}
						if (grantForAddSearchesPermissions) {
							array.forEach(ADD_SEARCHES, function(priv, i) {
								if (priv == tempItem.id[0])
									granted = true;
							});

						}
						/*if (grantForPromoteVersions) {
							array.forEach(_this.PROMOTE_VERSIONS, function(priv, i) {
								if (priv == tempItem.id[0])
									granted = true;
							});
						}/
						if (grantForManagePermissions) {
							array.forEach(MANAGE_PERMISSIONS, function(priv, i) {
								if (priv == tempItem.id[0])
									granted = true;
							});
						}*/
						if (grantForManageUsers) {
							array.forEach(MANAGE_USERS, function(priv, i) {
								if (priv == tempItem.id[0])
									granted = true;
							});
						}
						if (grantForTeamspacePrivs && tempItem.id[0] == "modifyItemProperties") {
							granted = true;
						}

						store.setValue(tempItem, "granted", granted);
						store.save();
					}
				}
			});
			this.onPermissionChanged(item);

		},
		_checkForAllDependentPrivs: function(items) {
			var repo = this.model.repository;
			var MANAGE_PERMISSIONS = this.MANAGE_PERMISSIONS_P8;
			var MANAGE_USERS = this.MANAGE_USERS_P8;
			var ADD_SEARCHES = this.ADD_SEARCHES;
			var PROMOTE_VERSIONS = this.PROMOTE_VERSIONS;
			var allManangePermissionsGranted = true, allManangeUsersGranted = true, allAddSearchesGranted = true, allPromoteVersionGranted = true;

			if (repo._isCM()) {
				MANAGE_PERMISSIONS = this.MANAGE_PERMISSIONS_CM;
				MANAGE_USERS = this.MANAGE_USERS_CM;
				PROMOTE_VERSIONS = [];
			}

			allManangePermissionsGranted = this._areAllGranted(items, MANAGE_PERMISSIONS);
			allManangeUsersGranted = this._areAllGranted(items, MANAGE_USERS);
			allAddSearchesGranted = this._areAllGranted(items, ADD_SEARCHES);
			allPromoteVersionGranted = this._areAllGranted(items, PROMOTE_VERSIONS);
			return {
				allManangePermissionsGranted: allManangePermissionsGranted,
				allManangeUsersGranted: allManangeUsersGranted,
				allAddSearchesGranted: allAddSearchesGranted,
				allPromoteVersionGranted: allPromoteVersionGranted
			};

		},
		/**
		 * @private
		 */
		_areAllGranted: function(items, permissions) {
			var allGranted = true, store = this._privStore;
			array.forEach(permissions, function(priv, i) {
				array.forEach(items, function(item, count) {
					if (priv == item.id[0] && !store.getValue(item, "granted"))
						allGranted = false;
				});
			});
			return allGranted;
		},

		_unCheckParent: function(items, checkPriv) {
			var store = this._privStore, _this = this, allGranted = true;

			for (var j = 0; j < items.length; j++) {
				var id = store.getValue(items[j], "id");
				if (id == checkPriv) {

					var tempItem = items[j];
					store.setValue(tempItem, "granted", false);
					store.save();

					break;
				}
			}

		},

		_grantAdditionalPrivs: function(store, items, checkPriv, grant) {
			for (var j = 0; j < items.length; j++) {
				var id = store.getValue(items[j], "id");
				if (id == checkPriv && store.getValue(items[j], "granted")) {
					grant = true;
					break;
				}
			}
			return grant;
		},

		onPermissionChanged: function(item, attribute, oldValue, newValue) {
			// change the permissions on the current role
			var store = this._privStore;
			var role = this._currentRole;
			var _this = this;

			store.fetch({
				onComplete: function(items, request) {
					var grantedPrivileges = [];

					for (var i = 0; i < items.length; i++) {
						var tempItem = items[i];
						var granted = store.getValue(tempItem, "granted");
						if (granted) {
							var id = store.getValue(tempItem, "id");
							grantedPrivileges.push(id);
						}

					}

					role.privileges = grantedPrivileges;
				}
			});
			this._isDirty = true;
		},

		_formatDisabledCheckbox: function(value, rowId, role, editable) {
			var checked = value ? "checked" : "";
			var disabled = editable ? "" : "disabled";
			if (role.owner[0]) {
				if (value["id"][0] == "modifyRoles" || value["id"][0] == "addRemoveRoleParticipants" || value["id"][0] == "addRemoveClasses" || value["id"][0] == "createNewSearches" || value["id"][0] == "addNewSearches" || value["id"][0] == "addRemoveClassesOrEntryTemplates") {
					if (value.granted[0] == true)
						checked = "checked";
					else
						checked = "";
					disabled = "";
				} else
					disabled = "disabled";
			} else {
				if (value["granted"] && value.granted[0] == true || value["id"][0] == "viewItemProperties") {

				} else
					checked = "";
			}
			if (value["id"][0] == "viewItemProperties")
				disabled = "disabled";

			var checkBox = new CheckBox({"checked":checked == "checked" ? true : false, "disabled": disabled == "disabled" ? true : false});
			checkBox.connect(checkBox, "onClick", lang.hitch(this, function() {
				this._updateRole(rowId);
			}));
			checkBox.connect(checkBox, "onKeyDown", lang.hitch(this, function(event) {
				if (event.keyCode == dojo.keys.SPACE){
					checkBox.set("checked", !checkBox.get("checked"));
				}
			}));
			return checkBox;		
		},
		// Called when right click within the grid.  Shows the item(s) content menu.
		_availableListContextMenu: function(evt) {
			var self = this;
			var grid = this.sloshBucket.availableList.grid;

			if (evt.cellIndex < 0) {
				return; // If right click on empty right area of the grid, ignore it
			}

			var items = grid.selection.getSelected();

			if (items && items.length > 0) {
				var store = this._availableStore;
				var convertItemToObject = this.sloshBucket._itemToObject;
				var item = convertItemToObject(store, items[0]);//items[0]; // item is a ContentItem here
				this._menu = new Menu({});

				(function() { // for scoping of action
					var disableAction = false;
					if (item.preDefined || items.length > 1 || item["privDelete"] != true) {
						disableAction = true;
					}
					var removeItem = new MenuItem({
						disabled: disableAction,
						label: ecm.messages.workspacebuilder_folders_delete,
						onClick: function(evt) {
							var confirmDelete = new ConfirmationDialog({
								text: string.substitute(ecm.messages.workspace_delete_role_confirmation_question, [
									idxHtml.escapeHTML(item.name)
								]),
								buttonLabel: ecm.messages.delete_confirmation_button,
								title: ecm.messages.confirmation_icon_tooltip,
								cancelButtonDefault: true,
								onExecute: function() {
									self._deleteRole(item);
								}
							});
							confirmDelete.show();
						}
					});
					self._menu.addChild(removeItem);

				})();

				var coords = null;
				if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
					coords = {
						x: evt.pageX,
						y: evt.pageY
					};
				}
				self._menu._openMyself({
					target: evt.target,
					coords: coords
				});
			}
		},
		getIsDirty: function() {
			return this._isDirty;
		},
		// delete role from grid, which removes the role repository.
		_deleteRole: function(item) {
			var repo = this.model.repository;
			var sb = this.sloshBucket;
			repo.deleteSystemRole(item.id, function(role) {

				sb.removeItemFromAvailableList(item);
			});

		},

		_loadRoles: function(roles) {
			if (!this._loaded) {
				// set up the sloshBucket
				var columns = [
					{
						field: "name",
						name: ecm.messages.workspacebuilder_template_roles_header_name,
						width: "30%"
					},
					{
						field: "description",
						name: ecm.messages.description,
						width: "70%"
					}
				];

				// find the owner role
				var ownerRoles = [], nonOwnerRoles = [];

				for (var i = 0; i < roles.length; i++) {
					var r = roles[i];
					if (r.owner) {
						ownerRoles.push(r);
					} else {
						nonOwnerRoles.push(r);
					}
				}

				// if this is edit teamspace template, use the roles from the model
				if (this.parent.mode == "edit" || this.mode == this.MODE_TYPE.MODIFY) {

					var tempRoles = this.getModel().roles;
					this.preProcessR3FP2_Roles(tempRoles);
					this._selectionStore = this._buildStore(tempRoles);

				} else {
					// build the store of selected roles
					this._selectionStore = this._buildStore(ownerRoles);
				}

				var availableStore = this._buildStore(nonOwnerRoles);
				this._availableStore = availableStore;
				this.sloshBucket.setModels(availableStore, this._selectionStore, columns, columns);

				this.connect(this.sloshBucket.availableList.grid, "onRowContextMenu", "_availableListContextMenu");
				this.sloshBucket.domNode.style.visibility = "visible";

			}
			this._loaded = true;

		},
		// Update older roles with new dependent privileges.  Ther user may never click the role in the UI so we need to update the value here so when 
		// a save is done all roles are updated.
		preProcessR3FP2_Roles: function(roles) {
			var store = this._privStore, _this = this;
			var repo = this.model.repository;
			var MANAGE_USERS = this.MANAGE_USERS_P8;
			var ADD_SEARCHES = this.ADD_SEARCHES;

			if (repo._isCM()) {
				MANAGE_USERS = this.MANAGE_USERS_CM;
			}

			array.forEach(roles, function(role, i) {

				var hasManageUsers = array.indexOf(role.privileges, "addRemoveRoleParticipants") != -1;
				var hasModifySearch = array.indexOf(role.privileges, "addNewSearches") != -1;
				var DEPENDENTS = ADD_SEARCHES;

				if (hasManageUsers)
					DEPENDENTS = MANAGE_USERS;

				if (hasModifySearch || hasManageUsers) {
					array.forEach(DEPENDENTS, function(priv, i) {
						var hasPriv = array.indexOf(role.privileges, priv) != -1;
						if (!hasPriv)
							role.privileges.push(priv);
					});
				}
			});

		},
		render: function() {
			var repo = this.model.repository;
			var _this = this;
			if (this.mode == this.MODE_TYPE.MODIFY)
				_this._loadRoles([]);
			else {
				repo.retrieveRoles(lang.hitch(this, function(roles) {
					_this._loadRoles(roles);
				}));
			}
			this._renderBasedOnMode();
		}
	});

	/**
	 * Calls the specified method on the widget.
	 */
	RolesPane.callMethod = function(widgetId, method) {
		var widget = registry.byId(widgetId);
		if (widget && widget[method]) {
			var args = [];
			for (var i = 2; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			widget[method].apply(widget, args);
		}
	};

	return RolesPane;
});

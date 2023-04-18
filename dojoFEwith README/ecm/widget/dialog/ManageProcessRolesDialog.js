/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/store/Memory",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"../listView/gridModules/ExtendedSelectRow",
	"../listView/gridModules/SingleSort",
	"gridx/modules/CellWidget",
	"gridx/modules/Body",
	"dijit/Tooltip",
	"idx/html",
	"ecm/Messages",
	"ecm/model/Repository",
	"./BaseDialog",
	"./MessageDialog",
	"./SelectUserGroupDialog",
	"dojo/text!./templates/ManageProcessRolesDialogContent.html"
],

function(declare, lang, connect, domClass, domStyle, MemoryStore, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, SingleSort, CellWidget, Body, Tooltip, idxHtml, Messages, Repository, BaseDialog, MessageDialog, SelectUserGroupDialog, template) {

	/**
	 * @name ecm.widget.dialog.ManageProcessRolesDialog
	 * @class Provides a dialog box that is used to modify P8 process role members.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.dialog.ManageProcessRolesDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ManageProcessRolesDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		_callback: null,
		_memberStores: null,
		_rolesStore: null,
		_selectedRole: null,

		constructor: function(args) {
			if (args) {
				this.repository = args.repository;
			}
			if (!this._memberStores) {
				this._memberStores = [];
			}
		},

		postCreate: function() {
			this.inherited(arguments);
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			domClass.add(this.domNode, "ecmManageProcessRolesDialog");
			this.setTitle(this.messages.manageroles_dialog_title);
			this.setIntroText(this.messages.manageroles_dialog_info_text);

			this._saveButton = this.addButton(this.messages.manageroles_dialog_save_button_label, "onSave", false, false, "SAVE");
			this._saveButton.set("disabled", true);
			this._removeButton.set("disabled", true);
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param applicationSpace
		 *            An {@link ecm.model.ProcessApplicationSpace} object.
		 * @param callback
		 *            A callback function called when the manage roles have been saved.
		 * @param showApplicationSpaceName
		 *            A boolean flag indicating whether to display the application space name in the dialog.
		 */
		show: function(applicationSpace, callback, showApplicationSpaceName) {
			this._applicationSpace = applicationSpace;
			this._callback = callback;

			if (showApplicationSpaceName) {
				this._applicationSpaceName.innerHTML = idxHtml.escapeHTML(this._applicationSpace.name);
			} else {
				domStyle.set(this._appSpacePane.domNode, "display", "none");
			}

			var showCallback = lang.hitch(this, function() {
				this.inherited("show", []);
				this.resize();
			});

			this._createRolesGrid();
			this._createRolesList(applicationSpace, showCallback);
		},

		_createRolesList: function(applicationSpace, showCallback) {
			this.logEntry("_createRolesList");
			var self = this;
			this._applicationSpace.retrieveWorklists(lang.hitch(this, function(processRoles) {
				self._rolesStore = self._createRolesStore(processRoles, showCallback);
				self._rolesGrid.select.row.selectById(processRoles[0].name);
			}), true, "write");
			showCallback();
			this.logExit("_createRolesList");
		},

		_createRolesStore: function(processRoles, showCallback) {
			this.logEntry("_createRolesStore");
			var items = [];
			for (i in processRoles) {
				var role = processRoles[i];
				items.push({
					name: idxHtml.escapeHTML(role.name),
					id: idxHtml.escapeHTML(this._getIdentityId(role.name)),
					selected: false,
					canSelect: true,
					modified: false,
					role: role
				});
			}
			var rolesStore = new MemoryStore({
				data: items
			});
			this._rolesGrid.model.setStore(rolesStore);
			this.logExit("_createRolesStore");
			return rolesStore;
		},

		_getIdentityId: function(id) {
			// The idx gridx cannot handle some special chars in the identifier
			// Fix to prevent id="" and grid failure
			//var newId = id.replace(/\"/g, "").replace(/\&/g, "").replace(/\+/g, "").replace(/=/g, "").replace(/~/g, "").replace(/>/g, "").replace(/]/g, "").replace(/'/g, "");
			//id in gridx cannot have '\', replace '\' with its unicode equivalent
			var newId = id.replace(/\\/g,"&#92");
			return newId;
		},

		_createRolesGrid: function() {
			this.logEntry("_createRolesGrid");
			var structure = [
				{
					id: "name",
					field: "name",
					name: this.messages.manageroles_dialog_roles_label,
					width: "100%"
				}
			];

			this._rolesGrid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: this._createStore(),
				structure: structure,
				selectRowTriggerOnCell: true,
				modules: [
					CellWidget,
					Focus,
					{
						moduleClass: SelectRow,
						multiple: false,
						triggerOnCell: true
					}
				]
			});

			domClass.add(this._rolesPane.domNode, "compact gridxWholeRow");

			this._rolesPane.domNode.appendChild(this._rolesGrid.domNode);
			this._rolesGrid.startup();

			this.connect(this._rolesGrid.select.row, "onSelected", lang.hitch(this, this._onRoleSelected));

			this._connectGridTooltip(this._rolesGrid);

			this.logExit("_createRolesGrid");
		},

		_createStore: function() {
			var items = [];
			return new MemoryStore({
				data: items
			});
		},

		_createMembersGrid: function(membersStore) {
			this.logEntry("_createMembersGrid");
			if (this._membersGrid) {
				this._membersGrid.destroy();
			}
			var structure = [
				{
					id: "name",
					field: "name",
					name: this.messages.manageroles_dialog_members_label,
					formatter: lang.hitch(this, function(data, rowIndex) {
						return this._getCellValue(data);
					}),
					width: "100%"
				}
			];

			this._membersGrid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: membersStore,
				structure: structure,
				selectRowTriggerOnCell: true,
				modules: [
					CellWidget,
					Focus,
					{
						moduleClass: ExtendedSelectRow,
						multiple: true,
						triggerOnCell: true
					},
					{
						moduleClass: Body,
						emptyInfo: this.messages.process_manageroles_no_members
					},
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: "name",
								descending: false
							}
						]
					}
				]
			});

			this.connect(this._membersGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				setTimeout(lang.hitch(this, function() {
					var visualIndex = this._membersGrid.row(id).visualIndex();
					this._membersGrid.vScroller.scrollToRow(visualIndex, true);
				}, 500));
			}));

			domClass.add(this._membersContent.domNode, "compact gridxWholeRow");

			this._membersContent.domNode.appendChild(this._membersGrid.domNode);
			this._membersGrid.startup();

			this.connect(this._membersGrid, "onRowClick", lang.hitch(this, this._onMemberSelected));

			this.resize();
			this.logExit("_createMembersGrid");
		},

		_createMembersStore: function(members) {
			this.logEntry("_createMembersStore");
			var items = [];
			if (members != null) {
				for (i in members) {
					var member = members[i];
					items.push({
						id: idxHtml.escapeHTML(this._getIdentityId(member.name)),
						name: idxHtml.escapeHTML(member.displayName),
						selected: false,
						canSelect: true,
						newMember: false,
						member: member
					});
				}
			}
			var memberStore = new MemoryStore({
				data: items
			});
			this.logExit("_createMembersStore");
			return memberStore;
		},

		_onRoleSelected: function(selected) {
			this.logEntry("_onRoleSelected");
			if (selected != null) {
				if (this._selectedRole == null || this._selectedRole.id != selected.id) {
					var selectedRoles = this._rolesGrid.select.row.getSelected();
					this._selectedRole = this._rolesGrid.row(selectedRoles[0]); // only one role can be selected

					var memberStore = this._memberStores[selected.index()];
					if (memberStore != null) {
						this._createMembersGrid(memberStore);
					} else {
						var members = selected.item().role.participants;
						memberStore = this._createMembersStore(members);
						this._memberStores[selected.index()] = memberStore;
						this._createMembersGrid(memberStore);
					}
					this.resize();
					this._removeButton.set("disabled", true);
				}
			}
			this.logExit("_onRoleSelected");
		},

		_onMemberSelected: function(selected) {
			this.logEntry("_onMemberSelected");
			if (selected != null) {
				this._removeButton.set("disabled", false);
			}
			this.logExit("_onMemberSelected");
		},

		_onStyleRow: function(inRow) {
			// This event handler is really for support of keyboarding, specifically using the ENTR key to
			// select one of the row items, need to make sure the "Select" button is enabled as well.
//			var role = this._rolesGrid.getItem(inRow.index);
//			if (role) {
//				inRow.customClasses += " rowSelected";
//			}
		},

		onAddMembers: function() {
			this.logEntry("onAddMembers");
			var selectUserDialog = new SelectUserGroupDialog({
				callback: lang.hitch(this, function(member) {
					this._addMembers(member);
				})
			});
			selectUserDialog.show(this.repository);
			this.logExit("onAddMembers");
		},

		_addMembers: function(members) {
			this.logEntry("_addMembers");
			if (members != null && members.length > 0) {
				var roles = this._rolesGrid.select.row.getSelected();
				var role = this._rolesGrid.row(roles[0]); // only one role can be selected
				role.item().modified = true;

				for (i in members) {
					var member = members[i];
					var new_member = {
						id: idxHtml.escapeHTML(this._getIdentityId(member.name)),
						name: idxHtml.escapeHTML(member.displayName),
						selected: false,
						canSelect: true,
						newMember: true,
						member: member
					};
					// See if member is already in the list first, skip them if they are
					var checkMember = this._membersGrid.model.store.get(new_member.id);
					if (checkMember == null) {
						// Make a second check to be sure that the member does not exist using the distinguishedName as the id
						if (new_member.member.distinguishedName) {
							var distId = this._getIdentityId(new_member.member.distinguishedName.toLowerCase());
							checkMember = this._membersGrid.model.store.get(distId);
							if (checkMember == null) {
								this._membersGrid.model.store.add(new_member);
							}
						} else {
							this._membersGrid.model.store.add(new_member);
						}
					}
				}
				this._saveButton.set("disabled", false);
			}
			this.logExit("_addMembers");
		},

		onRemoveMembers: function() {
			this.logEntry("onRemoveMembers");
			var selectedMembers = this._membersGrid.select.row.getSelected();
			if (selectedMembers != null && selectedMembers.length > 0) {
				var roles = this._rolesGrid.select.row.getSelected();
				var role = this._rolesGrid.row(roles[0]); // only one role can be selected
				role.item().modified = true;

				for (i in selectedMembers) {
					var member = selectedMembers[i];
					this._membersGrid.model.store.remove(member);
				}
				this._removeButton.set("disabled", true); // set remove back to disabled, cause nothing is selected
				this._saveButton.set("disabled", false);
			}
			this.logExit("onRemoveMembers");
		},

		onSave: function() {
			this.logEntry("onSave");
			// Get the JSON from the Stores
			var processRolesJson = [];
			//var items = this._rolesGrid.store.data;
			var items = this._rolesStore.data;
			for (i in items) {
				if (items[i].modified) {
					var role = items[i].role;
					var roleJson = {
						"dataType": "xs:group",
						"label": role.name,
						"id": role.id,
						"name": role.auth_name
					};
					if (this._memberStores[i] != null) {
						var membersJson = [];
						var members = this._memberStores[i].data;
						for (j in members) {
							if (members[j] && members[j].newMember) {
								this._addMemberToJson(membersJson, members[j].member, "add");
							}
						}
						// Look through list of participants on real ProcessRole object to find removed items.
						if (role.participants != null) {
							for (i in role.participants) {
								var participant = role.participants[i];
								// Check against shortName
								var found = false;
								for (j in members) {
									if (members[j] && members[j].member.shortName == participant.shortName) {
										found = true;
										break;
									}
								}
								if (!found) {
									// Item has been removed, add as removed member.
									this._addMemberToJson(membersJson, participant, "remove");
								}
							}
						}

						roleJson.value = membersJson;
						processRolesJson.push(roleJson);
					}
				}
			}

			this._applicationSpace.saveProcessRoles(processRolesJson);

			this.onCancel();
			if (this._callback) {
				this._callback(this._applicationSpace);
			}
			this.logExit("onSave");
		},

		_addMemberToJson: function(membersJson, member, mode) {
			membersJson.push({
				"name": member.name,
				"shortName": member.shortName,
				"displayName": member.displayName,
				"mode": mode
			});
		},

		/**
		 * @private
		 */
		_getCellValue: function(item) {
			var cellValue = "";
			var member = item.member;
			if (member.isInstanceOf && member.isInstanceOf(ecm.model.UserGroup)) {
				cellValue = "<span class=\"groupIcon\"><img src=\"dojo/resources/blank.gif\" alt=\"" + idxHtml.escapeHTML(this.messages.group) + "\"></img></span>";
			} else {
				cellValue = "<span class=\"userIconSpan\"><img src=\"dojo/resources/blank.gif\" alt=\"" + idxHtml.escapeHTML(this.messages.user) + "\"></img></span>";
			}
			cellValue += "<span class=\"nameText\">" + idxHtml.escapeHTML(member.displayName) + "</span>";
			return cellValue;
		},

		/**
		 * @private
		 */
		_connectGridTooltip: function(grid) {
			this._gridTooltipTimer = {};
			connect.connect(grid, "onRowMouseOver", this, function(e) {
				if (this._gridTooltipTimer[grid.id]) {
					clearTimeout(this._gridTooltipTimer[grid.id]);
				}
				this._gridTooltipTimer[grid.id] = setTimeout(lang.hitch(this, function() {
					this._showTooltip(e, grid);
				}), 700);
			});
			connect.connect(grid, "onRowMouseOut", this, function(e) {
				this._dimissGridToolTip(grid, e);
			});
		},

		/**
		 * @private
		 */
		_dimissGridToolTip: function(grid, e) {
			clearTimeout(this._gridTooltipTimer[grid.id]);
			delete this._gridTooltipTimer[grid.id];
			this._hideTooltip(e);
		},

		/**
		 * @private
		 */
		_showTooltip: function(event, grid) {
			var role = this._rolesStore.data[event.rowIndex];
			if (role) {
				var toolTip = [];
				toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(this.messages.name) + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(role.name);
				toolTip.push("</span></div>");
				Tooltip.show(toolTip.join(""), event.cellNode, [
					"after",
					"before",
					"above",
					"below"
				], !this.isLeftToRight(), this.textDir);//38360
			}
		},

		/**
		 * @private
		 */
		_hideTooltip: function(event) {
			Tooltip.hide(event.cellNode);
		},

		resize: function() {
			this.inherited(arguments);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (this._rolesGrid)
				this._rolesGrid.destroy();
			if (this._membersGrid)
				this._membersGrid.destroy();

			this._memberStores = null;
			this._rolesStore = null;

			this.inherited(arguments);
		}

	});
});

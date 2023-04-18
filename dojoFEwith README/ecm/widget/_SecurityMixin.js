/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Permission"
], function(declare, lang, array, LoggerMixin, Messages, Permission) {
	/**
	 * @name ecm.widget._SecurityMixin
	 * @class Provides a base class that contains methods for working with IBM FileNet P8 security data.
	 * @public
	 */
	var _SecurityMixin = declare("ecm.widget._SecurityMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget._SecurityMixin.prototype */
		_documentTemplate: null,
		_folderTemplate: null,

		constructor: function() {
			this._STATE = _SecurityMixin._STATE;
			this._ACCESS_TYPE = _SecurityMixin._ACCESS_TYPE;
			this._P8_ACCESS_RIGHT = _SecurityMixin._P8_ACCESS_RIGHT;
			this._privilegeNoAccess = _SecurityMixin._privilegeNoAccess;
			this._privilegeRoles = _SecurityMixin._privilegeRoles;
			this._documentTemplate = _SecurityMixin._documentTemplate;
			this._folderTemplate = _SecurityMixin._folderTemplate;

			this._privilegeList = [];
			this._inheritanceOnlyPermissions = [];
		},

		_loadPrivileges: function(repository, isDocument, isForInheritance) {
			var template = isDocument ? this._getDocumentTemplate(repository) : this._getFolderTemplate(repository, isForInheritance);								
			this._levels = template.levels;
			this._privileges = template.privileges;
		},

		_getDocumentTemplate: function(repository) {
			var template;
			if (_SecurityMixin._getTemplateHandlers) {
				array.some(_SecurityMixin._getTemplateHandlers, function(getTemplate) {
					template = getTemplate({
						repository: repository,
						forDocument: true,
						item: this._item
					});
					return (template != null);
				}, this);
			}
			if (template == null) {
				if (repository && repository._isCM()) {
					template = this._documentTemplate.cm;
				} else {
					template = this._documentTemplate.p8;
				}
			}
			return template;
		},

		_getFolderTemplate: function(repository, isForInheritance) {
			var template;
			if (_SecurityMixin._getTemplateHandlers) {
				array.some(_SecurityMixin._getTemplateHandlers, function(getTemplate) {
					template = getTemplate({
						repository: repository,
						forDocument: false,
						item: this._item
					});
					return (template != null);
				}, this);
			}
			if (template == null) {
				if (repository && repository._isCM()) {
					template = this._folderTemplate.cm;
				} else {
					if (isForInheritance)
						template = this._folderTemplate.p8.inheritance;
					else 
						template = this._folderTemplate.p8.direct;
				}
			}
			return template;
		},

		_getDocumentPrivileges: function(repository) {
			return this._getDocumentTemplate(repository).privileges;
		},

		_getFolderPrivileges: function(repository) {
			return this._getFolderTemplate(repository).privileges;
		},

		getAccessTypes: function(repository) {
			var accessTypes = [];

			accessTypes.push({
				label: ecm.messages.private_label,
				value: this._ACCESS_TYPE.PRIVATE
			});

			if (repository.type == "p8") {
				accessTypes.push({
					label: ecm.messages.public_label,
					value: this._ACCESS_TYPE.PUBLIC
				});
			}

			accessTypes.push({
				label: ecm.messages.members_label,
				value: this._ACCESS_TYPE.MEMBERS
			});

			return accessTypes;
		},

		_getPrivilegeState: function(mask) {
			var state;
			array.some(this._privileges, function(privilege, index) {
				state = this._getPermissionState(privilege, mask);
				if (state.status != this._STATE.NONE) {
					return true;
				}
			}, this);

			return state;
		},

		_getPermissionState: function(privilege, mask) {
			this.logEntry("_getPermissionState");
			var state;
			// Calculate the status of the required levels
			var requiredLevels = privilege.required;
			if (requiredLevels) {
				var isRequired = function() {
					for (i = 0; i < requiredLevels.length; i++) {
						if (requiredLevels[i].required)
							return true;
					}
					return false;
				};
				state = this._calculateState(requiredLevels, mask, null, privilege.minMask);
				if (state.status != this._STATE.NONE || !isRequired()) {
					if (state.status != this._STATE.FULL) {
						state = this._calculateState(privilege.levels, mask, state, privilege.minMask);
						if (state.status == this._STATE.FULL) {
							state.status = this._STATE.PARTIAL;
						}
					} else {
						state = this._calculateState(privilege.levels, mask, state, privilege.minMask);
					}
				}
			} else {
				state = this._calculateState(privilege.levels, mask, state, privilege.minMask);
			}
			// Set the privilege
			state.privilege = privilege;

			this.logExit("_getPermissionState");

			return state;
		},

		_hasPermissions: function(permission) {
			return !!permission && (!!permission.allow || !!permission.deny || !!permission.delegate);

		},

		_getTotalAllowMask: function(permission) {
			this.logEntry("_getTotalAllowMask");
			var allow = 0;

			// Determine the inherited allow permissions (lowest precedence). Includes removing inherited denied permissions.
			// Direct allow permissions assigned below supersede inherited deny permissions.
			allow = this._getEffectiveAccessMask(permission.inherited);

			// Policy permissions are applied after inherited permissions.
			allow |= this._getPermittedAccessMask(permission.policy);

			// Remove denied policy permissions.
			if (allow > 0) {
				var deny = this._getMask(permission.policy.deny);
				allow ^= (allow & deny);
			}

			// Calculate direct permissions (highest precedence).
			// Apply all permitted permissions first, then remove the denied permissions.
			allow |= this._getPermittedAccessMask(permission.direct) //
					| this._getPermittedAccessMask(permission.inheritance) //
					| this._getPermittedAccessMask(permission.infiniteInheritance);

			// Remove denied direct permissions.
			if (allow > 0) {
				var deny = this._getMask(permission.direct.deny) //
						| this._getMask(permission.inheritance.deny) //
						| this._getMask(permission.infiniteInheritance.deny);
				allow ^= (allow & deny);
			}

			this.logExit("_getTotalAllowMask");

			return allow;
		},

		_getMask: function(permission) {
			return (permission && permission.accessMask != null) ? permission.accessMask : 0;
		},

		_getPermittedAccessMask: function(permission) {
			return permission ? this._getMask(permission.allow) | this._getMask(permission.delegate) : 0;
		},

		_getEffectiveAccessMask: function(permission) {
			var mask = this._getPermittedAccessMask(permission);
			if (mask > 0 && permission && permission.deny) {
				mask ^= (mask & this._getMask(permission.deny));
			}
			return mask;
		},

		_getPrivilegeMask: function(id, maskName) {
			if (!maskName)
				maskName = "mask";
			var mask = 0;
			if (id == this._privilegeNoAccess.id ) {
				// Collect all of the permissions for all of the levels.
				array.forEach(this._levels, function(level) {
					mask |= level.mask;
				});
			} else {
				var privilege = this._getPrivilege(id);
				if (privilege) {
					mask = privilege[maskName] || 0;
				}
			}
			return mask;
		},

		_calculateState: function(levels, mask, state, minMask) {

			this.logEntry("_calculateState");

			var currentState;
			if (state) {
				var currentState = state;
			} else {
				currentState = {
					status: this._STATE.NONE,
					levels: []
				};
			}
			var count = 0;
			array.some(levels, function(privilegeLevel) {
				var level = this._getLevel(privilegeLevel.level);
				if (level) {
					var matched = (level.mask & mask) == level.mask;
					// If the mask does not match the level mask, check if the mask 
					// contains the minimum access mask privileges for this level.
					var partial = !matched && !!level.minMask && ((level.minMask & mask) == level.minMask);
					currentState.levels.push({
						level: level,
						enabled: matched,
						partial: partial
					});
					// Don't count levels that are excluded from the privilege default levels when checking against the no access allow mask.
					if (matched || (mask != 0 && privilegeLevel.excludeFromDefaults)) {
						count++;
					} else if (privilegeLevel.required) {
						count = 0;
						return true;
					}
				}
			}, this);

			if (count == levels.length) {
				currentState.status = this._STATE.FULL;
			} else if (count > 0) {
				currentState.status = this._STATE.PARTIAL;
			} else {
				currentState.status = this._STATE.NONE;
			}
			
			// One last check. If the current state is NONE, if the mask contains all 
			// of the minimum access mask privileges then assign the PARTIAL state. 
			if (currentState.status == this._STATE.NONE && minMask && ((minMask & mask) == minMask)) {
				currentState.status = this._STATE.PARTIAL;
			}

			this.logExit("_calculateState");

			return currentState;
		},

		_hasDirectPermissions: function(permission) {
			return !!permission && (this._hasPermissions(permission.direct) || 
					this._hasPermissions(permission.inheritance) || 
					this._hasPermissions(permission.infiniteInheritance) ||
					this._hasPermissions(permission.noFolderInheritance) || 
					this._hasPermissions(permission.noFolderInfiniteInheritance) 
					);
		},

		_hasInheritedPermissions: function(permission) {
			return !!permission && (this._hasPermissions(permission.inherited) || this._hasPermissions(permission.policy));
		},

		_hasDenyPermissions: function(permission) {
			return this._getMask(permission.direct.deny) > 0 || this._getMask(permission.inheritance.deny) > 0 || this._getMask(permission.infiniteInheritance.deny) > 0;
		},

		_getPrivilege: function(id) {
			var privilege;
			array.some(this._privileges, function(item) {
				if (item.id == id) {
					privilege = item;
					return true;
				}
			});

			return privilege;
		},

		_getLevel: function(id) {
			var accessLevel;
			array.some(this._levels, function(level) {
				if (level.id == id) {
					accessLevel = level;
					return true;
				}
			});

			if (accessLevel) {
				return accessLevel;
			} else {
				return null;
			}
		},

		_getPermissions: function() {
			this.logEntry("_getPermissions");
			var permissionArray = [];
			array.forEach(this._privilegeList, function(privilege) {
				array.forEach(privilege.permissions, function(entry) {
					if (entry.permission.direct.allow) {
						permissionArray.push(entry.permission.direct.allow.json());
					}
					if (entry.permission.direct.deny) {
						permissionArray.push(entry.permission.direct.deny.json());
					}
					if (entry.permission.direct.delegate) {
						permissionArray.push(entry.permission.direct.delegate.json());
					}
					if (entry.permission.inheritance.allow) {
						permissionArray.push(entry.permission.inheritance.allow.json());
					}
					if (entry.permission.inheritance.deny) {
						permissionArray.push(entry.permission.inheritance.deny.json());
					}
					if (entry.permission.inheritance.delegate) {
						permissionArray.push(entry.permission.inheritance.delegate.json());
					}
					if (entry.permission.infiniteInheritance.allow) {
						permissionArray.push(entry.permission.infiniteInheritance.allow.json());
					}
					if (entry.permission.infiniteInheritance.deny) {
						permissionArray.push(entry.permission.infiniteInheritance.deny.json());
					}
					if (entry.permission.infiniteInheritance.delegate) {
						permissionArray.push(entry.permission.infiniteInheritance.delegate.json());
					}
					if (entry.permission.noFolderInheritance.allow) {
						permissionArray.push(entry.permission.noFolderInheritance.allow.json());
					}
					if (entry.permission.noFolderInheritance.deny) {
						permissionArray.push(entry.permission.noFolderInheritance.deny.json());
					}
					if (entry.permission.noFolderInheritance.delegate) {
						permissionArray.push(entry.permission.noFolderInheritance.delegate.json());
					}
					if (entry.permission.noFolderInfiniteInheritance.allow) {
						permissionArray.push(entry.permission.noFolderInfiniteInheritance.allow.json());
					}
					if (entry.permission.noFolderInfiniteInheritance.deny) {
						permissionArray.push(entry.permission.noFolderInfiniteInheritance.deny.json());
					}
					if (entry.permission.noFolderInfiniteInheritance.delegate) {
						permissionArray.push(entry.permission.noFolderInfiniteInheritance.delegate.json());
					}
				});
			});
			// Also returns the inheritance only permissions
			if (this._inheritanceOnlyPermissions.length > 0) {
				array.forEach(this._inheritanceOnlyPermissions, function(permission) {
					permissionArray.push(permission.json());
				});
			}
			this.logExit("_getPermissions");

			return permissionArray;
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			this._privilegeList = null;
			this._inheritanceOnlyPermissions = null;
			this._levels = null;
			this._privileges = null;
		}
	});

	_SecurityMixin._STATE = {
		FULL: 2,
		PARTIAL: 1,
		NONE: 0
	};

	_SecurityMixin._ACCESS_TYPE = {
		PRIVATE: 1,
		PUBLIC: 2,
		MEMBERS: 3,
		DEFAULT: 4
	};

	_SecurityMixin._P8_ACCESS_RIGHT = {
		READ: /*                */0x00000001,
		WRITE: /*               */0x00000002,
		MAJOR_VERSION: /*       */0x00000004,
		DELEGATE_ACCESS: /*     */0x00000008,
		LINK: /*                */0x00000010,
		UNLINK: /*              */0x00000020,
		MINOR_VERSION: /*       */0x00000040,
		VIEW_CONTENT: /*        */0x00000080,
		CREATE_INSTANCE: /*     */0x00000100,
		CREATE_CHILD: /*        */0x00000200,
		CHANGE_STATE: /*        */0x00000400,
		PUBLISH: /*             */0x00000800,
		RESERVED12: /*          */0x00001000,
		RESERVED13: /*          */0x00002000,
		DELETE: /*              */0x00010000,
		READ_ACL: /*            */0x00020000,
		WRITE_ACL: /*           */0x00040000,
		WRITE_OWNER: /*         */0x00080000,
		CONNECT: /*             */0x00100000,
		STORE_OBJECTS: /*       */0x00200000,
		MODIFY_OBJECTS: /*      */0x00400000,
		REMOVE_OBJECTS: /*      */0x00800000,
		WRITE_ANY_OWNER: /*     */0x01000000,
		ADD_MARKING: /*         */0x02000000,
		REMOVE_MARKING: /*      */0x04000000,
		USE_MARKING: /*         */0x08000000,
		PRIVILEGED_WRITE: /*    */0x10000000,
		MODIFY_RETENTION: /*    */0x20000000,
		VIEW_RECOVERABLE_OBJECTS: 0x40000000
	};

	_SecurityMixin._privilegeNoAccess = {
		id: "NO_ACCESS",
		labelKey: "no_access_privilege",
		mask: 0,
		levels: []
	};

	_SecurityMixin._privilegeRoles = {
		id: "ROLES",
		labelKey: "workspacebuilder_users_role_header",
		mask: 0,
		levels: []
	};
	
	/**
	 * @private Returns a string containing the set permissions. Set permissions are grouped by hexadecimal digit,
	 *          separated by a '|'. Zero digits are skipped. See the access mask comments below for examples.
	 */
	var getP8PermissionComment = function(mask) {
		var accessRightsMap = {};
		for ( var property in _SecurityMixin._P8_ACCESS_RIGHT) {
			accessRightsMap[_SecurityMixin._P8_ACCESS_RIGHT[property]] = property;
		}

		var accessRightsArray = [];
		for ( var property in _SecurityMixin._P8_ACCESS_RIGHT) {
			accessRightsArray.push(_SecurityMixin._P8_ACCESS_RIGHT[property]);
		}
		accessRightsArray = accessRightsArray.reverse();

		var namesList = "";
		var dumpMask = 0xF0000000;
		for (var x = 0; x < 8; x++) {
			var names = ""
			for (var y = 0; y < accessRightsArray.length; y++) {
				if ((accessRightsArray[y] & (mask & dumpMask)) == accessRightsArray[y]) {
					if (names !== "")
						names += " ";
					names += accessRightsMap[accessRightsArray[y]];
				}
			}
			dumpMask >>>= 4;
			if (names !== "") {
				if (namesList !== "") {
					namesList += " | "
				}
				namesList += names;
			}
		}
		return namesList;
	};

	_SecurityMixin._documentTemplate = {
		cm: {
			privileges: [
				{
					id: "FULL_CONTROL",
					labelKey: "full_control_privilege",
					mask: 0x000F05D3, // 984531
					unsetMask: 0,
					required: [
						{
							level: "VIEW_PROPERTIES",
							required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						},
						{
							level: "MODIFY_PROPERTIES",
							required: false
						},
						{
							level: "MODIFY_CONTENT",
							required: false
						}
					],
					levels: [
						{
							level: "DELETE_DOCUMENT",
							required: false
						},
						{
							level: "MODIFY_PERMISSIONS",
							required: false
						}
					]
				},
				{
					id: "EDIT",
					labelKey: "edit_privilege",
					mask: 0x000205D3, // 132563
					unsetMask: 0x000D0000, // 851968
					required: [
						{
							level: "VIEW_PROPERTIES",
							required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						}
					],
					levels: [
						{
							level: "MODIFY_PROPERTIES",
							required: false
						},
						{
							level: "MODIFY_CONTENT",
							required: false
						}
					]
				},
				{
					id: "READ_ONLY",
					labelKey: "read_only_privilege",
					mask: 0x00020081, // 131201
					unsetMask: 0x000D0552, // 853330
					levels: [
						{
							level: "VIEW_PROPERTIES",
							required: true
						},
						{
							level: "VIEW_CONTENT",
							required: false
						}
					]
				}
			],
			levels: [
				{
					id: "VIEW_PROPERTIES",
					name: ecm.messages.view_properties_level,
					mask: 0x00020001
				// 131073
				},
				{
					id: "VIEW_CONTENT",
					name: ecm.messages.view_content_level,
					mask: 0x00000080
				// 128
				},
				{
					id: "MODIFY_PROPERTIES",
					name: ecm.messages.modify_properties_level,
					mask: 0x00000512
				// 1298
				},
				{
					id: "MODIFY_CONTENT",
					name: ecm.messages.modify_content_level,
					mask: 0x00000040
				// 64
				},
				{
					id: "DELETE_DOCUMENT",
					name: ecm.messages.delete_document_level,
					mask: 0x00010000
				// 65536
				},
				{
					id: "MODIFY_PERMISSIONS",
					name: ecm.messages.modify_document_permissions_level,
					mask: 0x000C0000
				// 786432
				}
			]
		},
		p8: {
			privileges: [
				{
					id: "FULL_CONTROL",
					labelKey: "full_control_privilege",
					mask: 0x000F3DF7, // 998903 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					minMask: 0x00060003, // 393219 WRITE_ACL READ_ACL | WRITE READ
					unsetMask: 0, // unsetDenyMask is modified by the share plug-in
					unsetDenyMask: 0x000F3DF7, // 998903 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					required: [
						{
							level: "VIEW_PROPERTIES",
							required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						},
						{
							level: "MODIFY_PROPERTIES",
							required: false
						},
						{
							level: "MODIFY_MINOR_VERSION",
							required: false
						},
						{
							level: "MODIFY_MAJOR_VERSION",
							required: false
						}
					],
					levels: [
						{
							level: "DELETE_DOCUMENT",
							required: false
						},
						{
							level: "MODIFY_PERMISSIONS",
							required: false
						}
					]
				},
				{
					id: "EDIT",
					labelKey: "edit_privilege",
					mask: 0x000205F7, // 132599 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					minMask: 0x00000003, // 3 WRITE READ
					unsetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
					unsetDenyMask: 0x000205F7, // 132599 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					required: [
						{
							level: "VIEW_PROPERTIES",
							required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						}
					],
					levels: [
						{
							level: "MODIFY_PROPERTIES",
							required: false
						},
						{
							level: "MODIFY_MINOR_VERSION",
							required: false
						},
						{
							level: "MODIFY_MAJOR_VERSION",
							required: false
						}
					]
				},
				{
					id: "READ_ONLY",
					labelKey: "read_only_privilege",
					mask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ
					minMask: 0x00000001, // 1 READ
					unsetMask: 0x000D3D76, // 867702 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE
					unsetDenyMask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ 
					levels: [
						{
							level: "VIEW_PROPERTIES",
							required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						}
					]
				}
			],
			levels: [
				{
					id: "VIEW_PROPERTIES",
					name: ecm.messages.view_properties_level,
					mask: 0x00020001, // 131073 READ_ACL | READ
					minMask: 0x00000001, // 1 READ
					allowSetMask: 0x00020001, // 131073 READ_ACL | READ
					allowSetUnsetDenyMask: 0x00020001, // 131073 READ_ACL | READ
					// allowUnsetMask is modified by the share plug-in
					allowUnsetMask: 0x000F3FF7, // 999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					denySetMask: 0x000E3801, // 931841 WRITE_OWNER WRITE_ACL READ_ACL | RESERVED13 RESERVED12 | PUBLISH | READ
					denyUnsetMask: 0x00020001
				// 131073 READ_ACL | READ
				},
				{
					id: "VIEW_CONTENT",
					name: ecm.messages.view_content_level,
					mask: 0x00000080, // 128 VIEW_CONTENT
					allowSetMask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ
					allowSetUnsetDenyMask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ
					// allowUnsetMask is modified by the share plug-in
					allowUnsetMask: 0x0000D3DF6, // 867830 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE
					denySetMask: 0x000C3880, // 800896 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH | VIEW_CONTENT
					denyUnsetMask: 0x00000080
				// 128 VIEW_CONTENT
				},
				{
					id: "MODIFY_PROPERTIES",
					name: ecm.messages.modify_properties_level,
					mask: 0x00000512, // 1298 CHANGE_STATE CREATE_INSTANCE | LINK | WRITE
					minMask: 0x00000002, // 2 WRITE
					allowSetMask: 0x000205B3, // 132531 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT UNLINK LINK | WRITE READ
					allowSetUnsetDenyMask: 0x000205B3, // 132531 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT UNLINK LINK | WRITE READ
					allowUnsetMask: 0x000D3D76, // 867702 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE
					denySetMask: 0x000C3D32, // 802098 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | UNLINK LINK | WRITE
					denyUnsetMask: 0x00000532
				// 1330 CHANGE_STATE CREATE_INSTANCE | UNLINK LINK | WRITE
				},
				{
					id: "MODIFY_MINOR_VERSION",
					name: ecm.messages.minor_version_level,
					mask: 0x00000040, // 64 MINOR_VERSION
					allowSetMask: 0x000205F3, // 132595 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | WRITE READ
					allowSetUnsetDenyMask: 0x000205F3, // 132595 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | WRITE READ
					allowUnsetMask: 0x000D3840, // 866368 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH | MINOR_VERSION
					denySetMask: 0x000C3840, // 800832 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH | MINOR_VERSION
					denyUnsetMask: 0x00000040
				// 64 MINOR_VERSION
				},
				{
					id: "MODIFY_MAJOR_VERSION",
					name: ecm.messages.major_version_level,
					mask: 0x00000004, // 4 MAJOR_VERSION
					allowSetMask: 0x000205B7, // 132535 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT UNLINK LINK | MAJOR_VERSION WRITE READ
					allowSetUnsetDenyMask: 0x000205B7, // 132535 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT UNLINK LINK | MAJOR_VERSION WRITE READ
					allowUnsetMask: 0x000D3804, // 866308 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH | MAJOR_VERSION
					denySetMask: 0x000C3804, // 800772 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH | MAJOR_VERSION
					denyUnsetMask: 0x00000004
				// 4 MAJOR_VERSION
				},
				{
					id: "DELETE_DOCUMENT",
					name: ecm.messages.delete_document_level,
					mask: 0x00010000, // 65536 DELETE
					allowSetMask: 0x000305F7, // 198135 READ_ACL DELETE | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					allowSetUnsetDenyMask: 0x000305F7, // 198135 READ_ACL DELETE | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					allowUnsetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
					denySetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
					denyUnsetMask: 0x00010000
				// 65536 DELETE
				},
				{
					id: "MODIFY_PERMISSIONS",
					name: ecm.messages.modify_document_permissions_level,
					mask: 0x000C0000, // 786432 WRITE_OWNER WRITE_ACL
					minMask: 0x00040000, // 262144 WRITE_ACL
					allowSetMask: 0x000F3DF7, // 998903 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					allowSetUnsetDenyMask: 0x000F3DF7, // 998903 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					// allowSetUnsetDenyMask is modified by the share plug-in
					allowUnsetMask: 0x000C3800, // 800768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH
					denySetMask: 0x000C3800, // 800768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH
					// denyUnsetMask is modified by the share plug-in
					denyUnsetMask: 0x000F3DF7
				// 998903 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
				}
			]
		}
	};

	_SecurityMixin._folderTemplate = {
		cm: {
			privileges: [
				{
					id: "FULL_CONTROL",
					labelKey: "full_control_privilege",
					mask: 0x000F0733, // 984883
					unsetMask: 0,
					required: [
						{
							level: "VIEW_PROPERTIES",
							required: true
						},
						{
							level: "FILE_IN_FOLDER",
							required: false
						},
						{
							level: "CREATE_SUBFOLDER",
							required: false
						},
						{
							level: "MODIFY_PROPERTIES",
							required: false
						}
					],
					levels: [
						{
							level: "DELETE_FOLDER",
							required: false
						},
						{
							level: "MODIFY_PERMISSIONS",
							required: false
						}
					]
				},
				{
					id: "EDIT",
					labelKey: "edit_privilege",
					mask: 0x00020733, // 132915
					unsetMask: 0x000D0000, // 851968
					required: [
						{
							level: "VIEW_PROPERTIES",
							required: true
						}
					],
					levels: [
						{
							level: "FILE_IN_FOLDER",
							required: true
						},
						{
							level: "CREATE_SUBFOLDER",
							required: false
						},
						{
							level: "MODIFY_PROPERTIES",
							required: false
						}
					]
				},
				{
					id: "READ_ONLY",
					labelKey: "read_only_privilege",
					mask: 0x00020001, // 131073
					unsetMask: 0x000D0732, // 853810
					levels: [
						{
							level: "VIEW_PROPERTIES",
							required: true
						}
					]
				}
			],
			levels: [
				{
					id: "VIEW_PROPERTIES",
					name: ecm.messages.view_properties_level,
					mask: 0x00020001
				// 131073
				},
				{
					id: "FILE_IN_FOLDER",
					name: ecm.messages.file_in_folder_level,
					mask: 0x00000030
				// 48
				},
				{
					id: "CREATE_SUBFOLDER",
					name: ecm.messages.create_subfolder_level,
					mask: 0x00000200
				// 512
				},
				{
					id: "MODIFY_PROPERTIES",
					name: ecm.messages.modify_properties_level,
					mask: 0x00000512
				// 1298
				},
				{
					id: "DELETE_FOLDER",
					name: ecm.messages.delete_folder_level,
					mask: 0x00010000
				// 65536
				},
				{
					id: "MODIFY_PERMISSIONS",
					name: ecm.messages.modify_folder_permissions_level,
					mask: 0x000C0000
				// 786432
				}
			]
		},
		p8: {
			direct: {
				privileges: [{
						id: "FULL_CONTROL",
						labelKey: "full_control_privilege",
						mask: 0x000F3733, // 997171 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | UNLINK LINK | WRITE READ
						minMask: 0x00060033, // 393267 WRITE_ACL READ_ACL | UNLINK LINK | WRITE READ
						unsetMask: 0,
						unsetDenyMask: 0x000F3733, // 997171 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | UNLINK LINK | WRITE READ
						required: [
							{
								level: "VIEW_PROPERTIES",
								required: false
							},
							{
								level: "FILE_IN_FOLDER",
								required: false
							}
						],
						levels: [
							{
								level: "CREATE_SUBFOLDER",
								required: false
							},
							{
								level: "MODIFY_PROPERTIES",
								required: false
							},
							{
								level: "DELETE_FOLDER",
								required: false
							},
							{
								level: "MODIFY_PERMISSIONS",
								required: false
							}
						]
					},
					{
						id: "EDIT",
						labelKey: "edit_privilege",
						mask: 0x00020031, // 131121 READ_ACL | UNLINK LINK | READ
						minMask: 0x00000031, // 49 UNLINK LINK | READ
						unsetMask: 0x000D3F46, // 868166 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | MINOR_VERSION | MAJOR_VERSION WRITE
						unsetDenyMask: 0x00020031, // 131121 READ_ACL | UNLINK LINK | READ
						required: [
							{
								level: "VIEW_PROPERTIES",
								required: false
							}
						],
						levels: [
							{
								level: "FILE_IN_FOLDER",
								required: false
							}
						]
					},
					{
						id: "READ_ONLY",
						labelKey: "read_only_privilege",
						mask: 0x00020001, // 131073 READ_ACL | READ
						minMask: 0x00000001, // 1 READ
						unsetMask: 0x000D3F76, // 868214 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE
						unsetDenyMask: 0x00020001, // 131073 READ_ACL | READ
						levels: [
							{
								level: "VIEW_PROPERTIES",
								required: true
							}
						]
					}
				],
				levels: [
					{
						id: "VIEW_PROPERTIES",
						name: ecm.messages.view_properties_level,
						mask: 0x00020001, // 131073 READ_ACL | READ
						minMask: 0x00000001, // 1 READ
						allowSetMask: 0x00020001, // 131073 READ_ACL | READ
						allowSetUnsetDenyMask: 0x00020001, // 131073 READ_ACL | READ
						allowUnsetMask: 0x000F3FF7, // 999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
						denySetMask: 0x000E3001, // 929793 WRITE_OWNER WRITE_ACL READ_ACL | RESERVED13 RESERVED12 | READ
						denyUnsetMask: 0x00020001
					// 131073 READ_ACL | READ
					},
					{
						id: "FILE_IN_FOLDER",
						name: ecm.messages.file_in_folder_level,
						mask: 0x00000030, // 48 UNLINK LINK
						minMask: 0x00000010, // 16 LINK
						allowSetMask: 0x00020031, // 131121 READ_ACL | UNLINK LINK | READ
						allowSetUnsetDenyMask: 0x00020031, // 131121 READ_ACL | UNLINK LINK | READ
						allowUnsetMask: 0x000C3030, // 798768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | UNLINK LINK
						denySetMask: 0x000C3030, // 798768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | UNLINK LINK
						denyUnsetMask: 0x00000030
					// 48 UNLINK LINK
					},
					{
						id: "CREATE_SUBFOLDER",
						name: ecm.messages.create_subfolder_level,
						mask: 0x00000200, // 512 CREATE_CHILD
						allowSetMask: 0x00020231, // 131633 READ_ACL | CREATE_CHILD | UNLINK LINK | READ
						allowSetUnsetDenyMask: 0x00020231, // 131633 READ_ACL | CREATE_CHILD | UNLINK LINK | READ
						allowUnsetMask: 0x000C3200, // 799232 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | CREATE_CHILD
						denySetMask: 0x000C3200, // 799232 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | CREATE_CHILD
						denyUnsetMask: 0x00000200
					// 512 CREATE_CHILD
					},
					{
						id: "MODIFY_PROPERTIES",
						name: ecm.messages.modify_properties_level,
						mask: 0x00000502, // 1298 CHANGE_STATE CREATE_INSTANCE | WRITE
						minMask: 0x00000002, // 2 WRITE
						allowSetMask: 0x00020503, // 132403 READ_ACL | CHANGE_STATE CREATE_INSTANCE | WRITE READ 
						allowSetUnsetDenyMask: 0x00020503, // 132403 READ_ACL | CHANGE_STATE CREATE_INSTANCE | WRITE READ
						allowUnsetMask: 0x000D3D46, // 867654 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | MINOR_VERSION | MAJOR_VERSION WRITE
						denySetMask: 0x000C3502, // 800050 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | CHANGE_STATE CREATE_INSTANCE | WRITE 
						denyUnsetMask: 0x00000502
					// 1330 CHANGE_STATE CREATE_INSTANCE | WRITE
					},
					{
						id: "DELETE_FOLDER",
						name: ecm.messages.delete_folder_level,
						mask: 0x00010000, // 65536 DELETE
						allowSetMask: 0x00030001, // 196609 READ_ACL DELETE | READ
						allowSetUnsetDenyMask: 0x00030001, // 196609 READ_ACL DELETE | READ
						allowUnsetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
						denySetMask: 0x000D3000, // 864256 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12
						denyUnsetMask: 0x00010000
					// 65536 DELETE
					},
					{
						id: "MODIFY_PERMISSIONS",
						name: ecm.messages.modify_folder_permissions_level,
						mask: 0x000C0000, // 786432 WRITE_OWNER WRITE_ACL
						minMask: 0x00040000, // 262144 WRITE_ACL
						allowSetMask: 0x000F3733, // 997171 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | UNLINK LINK | WRITE READ
						allowSetUnsetDenyMask: 0x000F3733, // 997171 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | UNLINK LINK | WRITE READ
						allowUnsetMask: 0x000C3800, // 800768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH
						denySetMask: 0x000C3000, // 798720 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12
						denyUnsetMask: 0x000F3733
					// 997171 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | UNLINK LINK | WRITE READ
					}
				]
			},		
			inheritance: {	
				privileges: [{
					id: "FULL_CONTROL",
					labelKey: "full_control_privilege",
					mask: 0x000F3FF7, // 999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					minMask: 0x00000001, // 1 WRITE_ACL READ_ACL | UNLINK LINK | WRITE READ
					unsetMask: 0,
					unsetDenyMask: 0x000F3FF7, // 999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ														
					required: [{
						level: "VIEW_PROPERTIES",
						required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						},
						{
							level: "FILE_IN_FOLDER",
							required: false
						}, 
						{
							level: "MODIFY_PROPERTIES",
							required: false
						},
						{
							level: "MODIFY_MINOR_VERSION",
							required: false
						},
						{
							level: "MODIFY_MAJOR_VERSION",
							required: false
						}
					],
					levels: [
					{
						level: "CREATE_SUBFOLDER",
						required: false
					},
					{
						level: "DELETE_DOCUMENT",
						required: false
					},
					{
						level: "MODIFY_PERMISSIONS",
						required: false
					}]
				}, {
					id: "EDIT",
					labelKey: "edit_privilege",
					mask: 0x000205F7, // 132599 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					minMask: 0x00000003, // 3 WRITE READ
					unsetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
					unsetDenyMask: 0x000205F7, // 132599 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					required: [{
						level: "VIEW_PROPERTIES",
						required: false
						},
						{
							level: "VIEW_CONTENT",
							required: false
						}						
					],
					levels: [{
						level: "FILE_IN_FOLDER",
						required: false
					},
					{
						level: "MODIFY_PROPERTIES",
						required: false
					},
					{
						level: "MODIFY_MINOR_VERSION",
						required: false
					},
					{
						level: "MODIFY_MAJOR_VERSION",
						required: false
					}]
				}, {
					id: "READ_ONLY",
					labelKey: "read_only_privilege",
					mask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ
					minMask: 0x00000001, // 1 READ
					unsetMask: 0x000D3D76, // 867702 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE
					unsetDenyMask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ 
					levels: [{
						level: "VIEW_PROPERTIES",
						required: false
					},
					{
						level: "VIEW_CONTENT",
						required: false
					}]
				}],
				levels: [{					
					id: "VIEW_PROPERTIES",
					name: ecm.messages.view_properties_level,
					mask: 0x00020001, // 131073 READ_ACL | READ
					minMask: 0x00000001, // 1 READ
					allowSetMask: 0x00020001, // 131073 READ_ACL | READ
					allowSetUnsetDenyMask: 0x00020001, // 131073 READ_ACL | READ // allowUnsetMask is modified by the share plug-in
					allowUnsetMask: 0x000F3FF7, //999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					denySetMask: 0x000E3801,  // 931841 WRITE_OWNER WRITE_ACL READ_ACL | RESERVED13 RESERVED12 | PUBLISH | READ
					denyUnsetMask: 0x00020001, // 131073 READ_ACL | READ
					enabledForAllPrivileges: true
				},
				{					
					id: "VIEW_CONTENT",
					name: ecm.messages.view_content_level,
					mask: 0x00000080, 		   // 128 VIEW_CONTENT
					allowSetMask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ
					allowSetUnsetDenyMask: 0x00020081, // 131201 READ_ACL | VIEW_CONTENT | READ // allowUnsetMask is modified by the share plug-in 
					allowUnsetMask: 0x0000D3DC6, // 867830 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION | MAJOR_VERSION WRITE
					denySetMask: 0x000C3880,  // 800896 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH | VIEW_CONTENT
					denyUnsetMask: 0x00000080, // 128 VIEW_CONTENT	
					enabledForAllPrivileges: true
				},
				{
					id: "FILE_IN_FOLDER",
					name: ecm.messages.link_item_level,
					hoverHelp: ecm.messages.link_item_level_hover_help,
					mask: 0x00000030, // 48 UNLINK LINK
					minMask: 0x00000010, // 16 LINK
					allowSetMask: 0x00020031, // 131121 READ_ACL | UNLIN KLINK | READ
					allowSetUnsetDenyMask: 0x00020031, // 131121 READ_ACL | UNLINK LINK | READ
					allowUnsetMask: 0x000C3030, // 798768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | UNLINK LINK
					denySetMask: 0x000C3030,  // 798768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | UNLINK LINK
					denyUnsetMask: 0x00000030, // 48 UNLINK LINK
					enabledForAllPrivileges: true
			    },
				{
					id: "MODIFY_PROPERTIES",
					name: ecm.messages.modify_properties_level,
					mask: 0x00000502, // 1298 CHANGE_STATE CREATE_INSTANCE | WRITE
					minMask: 0x00000002, // 2 WRITE
					allowSetMask: 0x00020583, // 132531 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT | WRITE READ
					allowSetUnsetDenyMask: 0x00020583, // 132531 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT | WRITE READ
					allowUnsetMask: 0x000D3D46, // 867702 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | MINOR_VERSION  | MAJOR_VERSION WRITE
					denySetMask: 0x000C3D02,   // 802098 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_INSTANCE | WRITE
					denyUnsetMask: 0x00000502,  // 1330 CHANGE_STATE CREATE_INSTANCE | WRITE
					enabledForAllPrivileges: true
				},
				{
					id: "MODIFY_MINOR_VERSION",
					name: ecm.messages.minor_version_level,
					mask: 0x00000040, // 64 MINOR_VERSION
					allowSetMask: 0x000205C3, // 132595 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION | WRITE READ
					allowSetUnsetDenyMask: 0x000205C3, // 132595 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | WRITE READ
					allowUnsetMask: 0x000D3840, // 866368 WRITE_OWNE RWRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH | MINOR_VERSION
					denySetMask: 0x000C3840,  // 800832 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH | MINOR_VERSION
					denyUnsetMask: 0x00000040, // 64 MINOR_VERSION
					enabledForAllPrivileges: true
				},
				{
					id: "MODIFY_MAJOR_VERSION",
					name: ecm.messages.major_version_level,
					mask: 0x00000004, // 4 MAJOR_VERSION
					allowSetMask: 0x00020587, // 132535 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT | MAJOR_VERSION WRITE READ
					allowSetUnsetDenyMask: 0x00020587, // 132535 READ_ACL | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT | MAJOR_VERSION WRITE READ
					allowUnsetMask: 0x000D3804, // 866308 WRITE_OWNER WRITE_ACLD ELETE | RESERVED13 RESERVED12 | PUBLISH | MAJOR_VERSION
					denySetMask: 0x000C3804,  // 800772 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH | MAJOR_VERSION
					denyUnsetMask: 0x00000004, // 4 MAJOR_VERSION
					enabledForAllPrivileges: true
				},
				{
					id: "CREATE_SUBFOLDER",
					name: ecm.messages.create_subfolder_level,
					mask: 0x00000200, // 512 CREATE_CHILD
					allowSetMask: 0x00020231, // 131633 READ_ACL|CREATE_CHILD|UNLINK LINK|READ
					allowSetUnsetDenyMask: 0x00020231, // 131633 READ_ACL|CREATE_CHILD|UNLINK LINK|READ
					allowUnsetMask: 0x000C3200,	// 799232 WRITE_OWNER WRITE_ACL|RESERVED13 RESERVED12|CREATE_CHILD
					denySetMask: 0x000C3200, // 799232 WRITE_OWNER WRITE_ACL|RESERVED13 RESERVED12|CREATE_CHILD
					denyUnsetMask: 0x00000200, // 512 CREATE_CHILD
					enabledForAllPrivileges: true
				},	
				{
					id: "DELETE_DOCUMENT",
					name: ecm.messages.delete_level,
					mask: 0x00010000, // 65536 DELETE
					allowSetMask: 0x000305F7, // 198135 READ_ACL DELETE | CHANGE_STATE CREATE_INSTANCE CREATE_CHILD | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					allowSetUnsetDenyMask: 0x000305F7, // 198135 READ_ACLD ELETE | CHANGE_STATE CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					allowUnsetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
					denySetMask: 0x000D3800, // 866304 WRITE_OWNER WRITE_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH
					denyUnsetMask: 0x00010000, // 65536 DELETE
					enabledForAllPrivileges: true
				},
				{
					id: "MODIFY_PERMISSIONS",
					name: ecm.messages.modify_document_permissions_level,
					mask: 0x000C0000, // 786432 WRITE_OWNER WRITE_ACL
					minMask: 0x00040000, //262144 WRITE_ACL 
					allowSetMask: 0x000F3FF7, //  999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					allowSetUnsetDenyMask: 0x000F3FF7, // 999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ // allowSetUnsetDenyMask is modified by the share plug-in
					allowUnsetMask: 0x000C3800, // 800768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH
					denySetMask: 0x000C3800, // 800768 WRITE_OWNER WRITE_ACL | RESERVED13 RESERVED12 | PUBLISH // denyUnsetMask is modified by the share plug-in
					denyUnsetMask: 0x000F3FF7, //  999415 WRITE_OWNER WRITE_ACL READ_ACL DELETE | RESERVED13 RESERVED12 | PUBLISH CHANGE_STATE CREATE_CHILD CREATE_INSTANCE | VIEW_CONTENT MINOR_VERSION UNLINK LINK | MAJOR_VERSION WRITE READ
					enabledForAllPrivileges: true
				}]
			}
		}
	};

	/**
	 * @private
	 */
	_SecurityMixin._registerGetTemplateHandler = function(getTemplate) {
		if (!_SecurityMixin._getTemplateHandlers) {
			_SecurityMixin._getTemplateHandlers = []
		}
		_SecurityMixin._getTemplateHandlers.push(getTemplate);
	};

	/**
	 * @private
	 */
	_SecurityMixin._modifyPrivilegesTemplate = function(params) {
		var template = params.forFolder ? _SecurityMixin._folderTemplate : _SecurityMixin._documentTemplate;

		// Create a copy of the existing template.
		var repoTemplate = lang.clone(template[params.repositoryType]);

		array.forEach(params.addLevels, function(addLevel) {
			// Insert the level.
			var insertLevelIndex;
			array.some(repoTemplate.levels, function(level, i) {
				if (level.id == addLevel.insertAfterLevel) {
					insertLevelIndex = i + 1;
					return true;
				}
			});
			if (insertLevelIndex == null)
				return;
			repoTemplate.levels.splice(insertLevelIndex, 0, addLevel.level);

			// Apply level mask changes.
			array.forEach(repoTemplate.levels, function(level) {
				for ( var mask in addLevel.addToLevelMasks[level.id]) {
					if (addLevel.addToLevelMasks[level.id].hasOwnProperty(mask)) {
						level[mask] += addLevel.addToLevelMasks[level.id][mask];
					}
				}
			});

			// Insert into privilegeLevels.
			array.forEach(repoTemplate.privileges, function(privilege) {
				array.some([
					"required",
					"levels"
				], function(privilegeLevels) {
					var insertPrivilegeLevelIndex = null;
					array.some(privilege[privilegeLevels], function(level, i) {
						if (level.level == addLevel.insertAfterLevel) {
							insertPrivilegeLevelIndex = i + 1;
							return true;
						}
					});
					if (insertPrivilegeLevelIndex != null)
						privilege[privilegeLevels].splice(insertPrivilegeLevelIndex, 0, addLevel.privilegeLevel);
				});
			});
		});

		array.forEach(params.addPrivileges, function(addPrivilege) {
			// Apply privilege mask changes.
			array.forEach(repoTemplate.privileges, function(privilege) {
				for ( var mask in addPrivilege.addToPrivilegeMasks[privilege.id]) {
					if (addPrivilege.addToPrivilegeMasks[privilege.id].hasOwnProperty(mask)) {
						privilege[mask] += addPrivilege.addToPrivilegeMasks[privilege.id][mask];
					}
				}
			});
		});

		return repoTemplate;
	};

	return _SecurityMixin;
});

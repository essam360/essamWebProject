/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/kernel",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/event",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/has",
	"dojo/keys",
	"dojo/query",
	"dojo/string",
	"dojo/dom-geometry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/popup",
	"dijit/Tooltip",
	"dijit/layout/ContentPane",
	"dijit/form/RadioButton",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/widget/Button",
	"ecm/widget/_SecurityMixin",
	"ecm/widget/CompositeButton",
	"ecm/widget/MultiIconCompositeButton",
	"ecm/widget/DropDownDialog",
	"ecm/widget/dialog/AddPermissionDialog",
	"ecm/widget/dialog/AddRolesDialog",
	"ecm/widget/ModifyPermissionAccessPane",
	"ecm/widget/HoverHelp",
	"ecm/model/Permission",
	"idx/html",
	"ecm/widget/dialog/ConfirmationDialog",
	"dojo/text!./templates/SecurityPane.html"
], function(declare, kernel, lang, array, event, aspect, domClass, construct, domGeom, domStyle, has, keys, query, string, geometry, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, popup, Tooltip, ContentPane, RadioButton, LoggerMixin, Messages, Button, _SecurityMixin, CompositeButton, MultiIconCompositeButton, DropDownDialog, AddPermissionDialog, AddRolesDialog, ModifyPermissionAccessPane, HoverHelp, Permission, idxHtml, ConfirmationDialog, template) {
	/**
	 * @name ecm.widget.SecurityPane
	 * @class Provides a widget that contains a list of users and groups that have access to an item. The users and
	 *        groups are displayed based on their current permission settings.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.SecurityPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_SecurityMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.SecurityPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		/**
		 * Indicates if the security pane should be resized to fit within its parent container.
		 */
		fitToParent: false,

		/**
		 * Indicates if the security pane should show icons for the various permission types: Inherited, One Level and
		 * All Levels. The dialog will also show tabs for One Level and All Levels when modifying the existing
		 * permissions. (P8 repository types only)
		 * 
		 * @since 2.0.2
		 */
		enableShowPermissionTypeIcons: true,

		/**
		 * Indicates if the security pane will show permission propagation abilities for folders. If this option is
		 * enabled, the dialog will an additional dropdown to propagate folder permissions when adding a new user or
		 * group. The security pane will also allow users to propagate to One Level and All Levels when modifying an
		 * existing permissions. (p8 repository types only). If this is enabled, enableShowPermissionTypeIcons will
		 * automatically be enabled.
		 * 
		 * @since 2.0.2
		 */
		enableFolderPropagationOptions: false,

		/**
		 * Indicates if the security pane should allow users to propagate document permissions from folder level. (p8
		 * repository types only)
		 * 
		 * @since 2.0.2
		 */
		enableDocumentPermissionPropagationOptions: false,

		/**
		 * Indicates if the security support adding the #CREATOR-OWNER account for P8. The default is false.
		 * 
		 * @since 2.0.3.1
		 */
		showCreatorOwnerAccount: false,
		_messages: ecm.messages,
		_isReadonly: true,

		postCreate: function() {
			this.inherited(arguments);
			// Set up Share with hover help
			var hoverHelp = this._createHoverHelp(this._messages.share_with_hover_help);
			if (this._shareWith)
				this._shareWith.appendChild(hoverHelp.domNode);
		},

		/**
		 * Sets the repository of the selected item.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 */
		setRepository: function(repository) {
			this.repository = repository;
		},

		/**
		 * Sets the item.
		 * 
		 * @param item
		 *            Instance of {@link ecm.model.ContentItem}
		 */
		setItem: function(item) {
			this._item = item;
		},

		/**
		 * Displays the permissions of the current selected item.
		 * 
		 * @param permissions
		 *            An array of {@link ecm.model.Permission}. The array contains the current permissions of the
		 *            selected item.
		 * @param parentPermissions
		 *            An array of {@link ecm.model.Permission}. The array contains the current permissions from the
		 *            parent folder.
		 * @param securityPolicy
		 *            A {@link ecm.model.SecurityPolicy} object that is the current security policy assigned to the
		 *            item.
		 * @param isDocument
		 *            A boolean value indicating document permissions.
		 * @param isReadonly
		 *            A boolean value indicating if the permissions are shown as read only.
		 * @param applySecurityPolicy
		 *            A boolean value indicating if the security policy permissions should be included in the item
		 *            permissions.
		 * @param useReleasedTemplate
		 *            A boolean value indicating if we are using the security policy Released Template permissions.
		 */
		renderPermissions: function(permissions, parentPermissions, securityPolicy, isDocument, isReadonly, applySecurityPolicy, useReleasedTemplate, fromDesigner) {
			this.logEntry("renderPermission");

			this._isDocument = isDocument;
			this._isReadonly = isReadonly;
			this._isDisabled = isReadonly && this.repository._isCM();
			this._securityPolicy = securityPolicy;
			this._applySecurityPolicy = applySecurityPolicy;
			this._useReleasedTemplate = useReleasedTemplate;

			if (this._isReadonly) {
				domClass.add(this._shareWith, "labelReadOnly");
				domClass.add(this._members, "labelReadOnly");
			} else {
				domClass.remove(this._shareWith, "labelReadOnly");
				domClass.remove(this._members, "labelReadOnly");
			}

			this._isSecurityProxySet = this._isSecurityProxy(permissions);
			if (this._isSecurityProxySet) {
				this._isReadonly = true;
				if (this._item && this._item.declaredAsRecord) {
					this._renderNote(this._messages.security_proxy_declared_text);
				} else {
					this._renderNote(this._messages.security_proxy_text, this._messages.security_proxy_hover_help);
				}
			}

			if (securityPolicy) {
				this._securityPolicyName.innerHTML = idxHtml.escapeHTML(securityPolicy.displayName);
				domClass.remove(this._policySection, "dijitHidden");
				var hoverHelp = this._createHoverHelp(this._messages.direct_security_policy_hover_help);
				if (applySecurityPolicy) {
					var policyPermissions = this._getTemplatePermissions(securityPolicy, useReleasedTemplate);
					var hoverHelp;
					if (policyPermissions && !securityPolicy.preserveDirectPermissions) {
						this._categorizePermission(null, parentPermissions, policyPermissions, isDocument);
						this._isReadonly = true; // Make it read only 
						hoverHelp = this._createHoverHelp(this._messages.security_policy_hover_help);
					} else {
						this._categorizePermission(permissions, parentPermissions, policyPermissions, isDocument);
					}
				} else {
					this._categorizePermission(permissions, parentPermissions, null, isDocument);
				}
				// Add to security policy hover help node
				construct.place(hoverHelp.domNode, this._securityPolicyLabel, "only");
			} else {
				domClass.add(this._policySection, "dijitHidden");
				this._categorizePermission(permissions, parentPermissions, null, isDocument);
			}

			if (fromDesigner && 
				ecm.model.desktop.showRoleSecurity && 
				this.repository._isP8() && 
				this.repository.CEmajorVersion() >= 22 && 
			    this._isDocument ) {
				domClass.remove(this._securityRolesection, "dijitHidden");
			}
			
			this._addButton.set("disabled", !!this._isReadonly);
			this._addRoleButton.set("disabled", !!this._isReadonly);
			this.logExit("renderPermission");
		},

		/**
		 * @private
		 */
		_normalizeMergePermissions: function(existingPermision, permission) {
			if (existingPermision) {
				existingPermision.accessMask |= permission.accessMask;
				return existingPermision;
			}
			return permission;
		},

		/**
		 * @private
		 */
		_normalize: function(directPermissions, parentPermissions, policyPermissions) {
			this.logEntry("_normalize");

			var permissions = this._mergePermissions(directPermissions, parentPermissions, policyPermissions);
			this._sortPermissions(permissions);

			var normalizeList = [];
			var displayName;
			array.forEach(permissions, function(permission) {
				// permission source:  class= 0 direct = 1 policy: 2 inherited = 3
				var inheritableDepth = permission.inheritableDepth;
	//			if (inheritableDepth != -3 && inheritableDepth != -2) {

					var filteredPermission;
					array.some(normalizeList, function(item) {
						if (item.grantee.id == permission.id) {
							filteredPermission = item;
						}
					});
					var listItem;
					if (filteredPermission) {
						listItem = filteredPermission;
					} else {
						displayName = permission.displayName;
						if (!displayName || (displayName == "")) {
							displayName = permission.grantee.name;
						}
						listItem = {
							grantee: permission.grantee,
							direct: {},
							readOnly: permission["readOnly"],
							inheritance: {},
							infiniteInheritance: {},
							policy: {},
							inherited: {},
							noFolderInheritance: {},
							noFolderInfiniteInheritance: {}
						};
						normalizeList.push(listItem);
					}

					var permissionSource = permission.permissionSource;
					var accessType = permission.accessType;
					if (permissionSource == ecm.model.Permission.PERMISSION_SOURCE.CLASS || permissionSource == ecm.model.Permission.PERMISSION_SOURCE.DIRECT || permissionSource == ecm.model.Permission.PERMISSION_SOURCE.SECURITY_PROXY) {
						if (inheritableDepth == 0) { // This object only
							if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
								listItem.direct.allow = this._normalizeMergePermissions(listItem.direct.allow, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
								listItem.direct.deny = this._normalizeMergePermissions(listItem.direct.deny, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
								listItem.direct.delegate = this._normalizeMergePermissions(listItem.direct.delegate, permission);
							}
						} else if (inheritableDepth == 1) {
							if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
								listItem.inheritance.allow = this._normalizeMergePermissions(listItem.inheritance.allow, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
								listItem.inheritance.deny = this._normalizeMergePermissions(listItem.inheritance.deny, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
								listItem.inheritance.delegate = this._normalizeMergePermissions(listItem.inheritance.delegate, permission);
							}
						}  else if (inheritableDepth == -1) { // This object and descendants.  They are for inheritance
							if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
								listItem.infiniteInheritance.allow = this._normalizeMergePermissions(listItem.infiniteInheritance.allow, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
								listItem.infiniteInheritance.deny = this._normalizeMergePermissions(listItem.infiniteInheritance.deny, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
								listItem.infiniteInheritance.delegate = this._normalizeMergePermissions(listItem.infiniteInheritance.delegate, permission);
							}
						} else if (inheritableDepth == -2) { // This object and descendants.  They are for inheritance
							if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
								listItem.noFolderInfiniteInheritance.allow = this._normalizeMergePermissions(listItem.noFolderInfiniteInheritance.allow, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
								listItem.noFolderInfiniteInheritance.deny = this._normalizeMergePermissions(listItem.noFolderInfiniteInheritance.deny, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
								listItem.noFolderInfiniteInheritance.delegate = this._normalizeMergePermissions(listItem.noFolderInfiniteInheritance.delegate, permission);
							}
						} else if (inheritableDepth == -3) { // This object and descendants.  They are for inheritance
							if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
								listItem.noFolderInheritance.allow = this._normalizeMergePermissions(listItem.noFolderInheritance.allow, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
								listItem.noFolderInheritance.deny = this._normalizeMergePermissions(listItem.noFolderInheritance.deny, permission);
							} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
								listItem.noFolderInheritance.delegate = this._normalizeMergePermissions(listItem.noFolderInheritance.delegate, permission);
							}
						} 
					} else if (permissionSource == ecm.model.Permission.PERMISSION_SOURCE.POLICY) {
						if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
							listItem.policy.allow = this._normalizeMergePermissions(listItem.policy.allow, permission);
						} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
							listItem.policy.deny = this._normalizeMergePermissions(listItem.policy.deny, permission);
						} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
							listItem.policy.delegate = this._normalizeMergePermissions(listItem.policy.delegate, permission);
						}
					} else if (permissionSource == ecm.model.Permission.PERMISSION_SOURCE.INHERITED) {
						if (accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
							listItem.inherited.allow = this._normalizeMergePermissions(listItem.inherited.allow, permission);
						} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
							listItem.inherited.deny = this._normalizeMergePermissions(listItem.inherited.deny, permission);
						} else if (accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
							listItem.inherited.delegate = this._normalizeMergePermissions(listItem.inherited.delegate, permission);
						}
					}
	//			} else {
	//				this._inheritanceOnlyPermissions.push(permission);
	//			}
			}, this);

			this.logExit("_normalize");

			return normalizeList;
		},

		/**
		 * @private
		 */
		_mergePermissions: function(directPermissions, parentPermissions, policyPermissions) {
			var permissions = [];
			if (directPermissions) {
				permissions = lang.clone(directPermissions);
			}
			if (parentPermissions) { // Merge in parent folder permissions
				permissions = array.filter(permissions, function(item) {
					return item.permissionSource != ecm.model.Permission.PERMISSION_SOURCE.INHERITED;
				});
				var ip = array.filter(parentPermissions, function(item) {
					return item.inheritableDepth != 0;
				});
				ip = array.map(ip, function(item) {
					var cloneItem = lang.clone(item);
					cloneItem.permissionSource = ecm.model.Permission.PERMISSION_SOURCE.INHERITED;
					cloneItem.inheritableDepth = 0;
					return cloneItem;
				}, this);
				permissions = permissions.concat(ip);
			}
			if (policyPermissions) { // Merge in security policy permissions
				var sp = array.map(policyPermissions, function(item) {
					var cloneItem = lang.clone(item);
					cloneItem.permissionSource = ecm.model.Permission.PERMISSION_SOURCE.POLICY;
					return cloneItem;
				}, this);
				return permissions.concat(sp);
			} else {
				return permissions;
			}
		},

		/**
		 * @private
		 */
		_sortPermissions: function(permissions) {
			var sortArray = function(a, b) {
				if (a.displayName > b.displayName) {
					return 1;
				}
				if (a.displayName < b.displayName) {
					return -1;
				}
				return 0;
			};
			// Sort permissions
			permissions.sort(sortArray);
		},

		/**
		 * @private
		 */
		_containsRole: function(permissions)  {
			var contains = false;
			array.forEach(permissions, function(perm, index) {
				if (perm.granteeType == -1 ) {
					contains = true;
				}
			});
			return contains;
		},
		
		/**
		 * @private
		 */
		_categorizePermission: function(permissions, parentPermissions, policyPermissions, isDocument) {

			this.logEntry("_categorizePermission");

			this._privilegeList = [];
			this._loadPrivileges(this.repository, isDocument);
			ecm.model.desktop.getConfiguredLabels(lang.hitch(this, function(configuredLabels) {
								
				var offset = 0;
				
				// Add a no access pseudo category to assign roles 
				if (( (ecm.model.desktop.showRoleSecurity && isDocument) || this._containsRole(permissions)) && 
					this.repository._isP8() && 
					(this.repository.CEmajorVersion() >= 22) ) {
					this._privilegeList.push({
						id: this._privilegeRoles.id,
						name: idxHtml.escapeHTML(configuredLabels.getLabelValue(this._privilegeRoles.labelKey, kernel.locale)),
						permissions: []
					});
					offset = 1;
				}
				
				// Create privilege bucket to assign the permission.
				array.forEach(this._privileges, function(privilege) {
					this._privilegeList.push({
						id: privilege.id,
						name: idxHtml.escapeHTML(configuredLabels.getLabelValue(privilege.labelKey, kernel.locale)),
						permissions: []
					});
				}, this);

				// Add a no access pseudo category to assign all no access (state.status == NONE).		
				this._privilegeList.push({
					id: this._privilegeNoAccess.id,
					name: idxHtml.escapeHTML(configuredLabels.getLabelValue(this._privilegeNoAccess.labelKey, kernel.locale)),
					permissions: []
				});

				// Loop through the permissions and assign it to the appropriate privilege bucket.				
				var normalizePermissionList = this._normalize(permissions, parentPermissions, policyPermissions);
				if (normalizePermissionList.length > 0) {
					array.forEach(normalizePermissionList, function(permissionItem) {
						this._assignItem(permissionItem, offset); // Assign the item to privilege bucket					
					}, this);
				}

				this._renderPermissionGrouping(this._privilegeList);
			}));

			this.logExit("_categorizePermission");

			return this._privilegeList;
		},

		/**
		 * @private
		 */
		_isSecurityProxy: function(permissions) {
			if (!permissions || permissions.length == 0)
				return false;
			return (permissions[0].isSecurityProxyPermission && permissions[0].isSecurityProxyPermission());
		},

		/**
		 * @private
		 */
		_renderNote: function(note, hoverHelpText, hoverHelpLink) {
			if (note) {
				domClass.remove(this._noteSection, "dijitHidden");
				if (this._noteHoverHelp) {
					this._noteHoverHelp.destroy();
				}
				// Add hover help to note node
				if (hoverHelpText) {
					this._noteHoverHelp = this._createHoverHelp(hoverHelpText, hoverHelpLink);
					this._noteText.appendChild(this._noteHoverHelp.domNode);
				}
				this._noteValue.innerHTML = idxHtml.escapeHTML(note);
			} else {
				domClass.add(this._noteSection, "dijitHidden");
			}
		},

		/**
		 * Sets the item marking values if markings are current assigned to the selected item.
		 * 
		 * @param values
		 *            An array of marking values.
		 */
		setMarkingValues: function(values) {
			if (!this._isSecurityProxySet) {
				if (values && values.length > 0) {
					this._renderNote(string.substitute(this._messages.marking_text, [
						values.join(", ")
					]), this._messages.marking_hover_help, "euche014.htm");
				} else {
					this._renderNote("");
				}
			}
		},

		/**
		 * Updates the item parent permissions and re-render the item permissions with the new updated parent
		 * permissions. The parent permissions could have changed on add document when selecting a different folder.
		 * 
		 * @param permissions
		 *            An array of {@link ecm.model.Permission}. The array contains the current permissions from the
		 *            parent folder.
		 */
		updateParentPermissions: function(permissions) {
			// Parent permissions has changed so re-render the permissions with the new parent permissions.
			if (this._privilegeList) {
				var directPermissions = this._getDirectPermissions();
				this.renderPermissions(directPermissions, permissions, this._securityPolicy, this._isDocument, this._isReadOnly, this._applySecurityPolicy, this._useReleasedTemplate);
			}
		},

		/**
		 * @private
		 */
		_getDirectPermissions: function() {
			var permissions = [];
			array.forEach(this._privilegeList, function(privilege) {
				array.forEach(privilege.permissions, function(entry) {
					if (entry.permission.direct.allow) {
						permissions.push(entry.permission.direct.allow);
					}
					if (entry.permission.direct.deny) {
						permissions.push(entry.permission.direct.deny);
					}
					if (entry.permission.direct.delegate) {
						permissions.push(entry.permission.direct.delegate);
					}
					if (entry.permission.inheritance.allow) {
						permissions.push(entry.permission.inheritance.allow);
					}
					if (entry.permission.inheritance.deny) {
						permissions.push(entry.permission.inheritance.deny);
					}
					if (entry.permission.inheritance.delegate) {
						permissions.push(entry.permission.inheritance.delegate);
					}
					if (entry.permission.infiniteInheritance.allow) {
						permissions.push(entry.permission.infiniteInheritance.allow);
					}
					if (entry.permission.infiniteInheritance.deny) {
						permissions.push(entry.permission.infiniteInheritance.deny);
					}
					if (entry.permission.infiniteInheritance.delegate) {
						permissions.push(entry.permission.infiniteInheritance.delegate);
					}
					if (entry.permission.noFolderInheritance.allow) {
						permissions.push(entry.permission.noFolderInheritance.allow);
					}
					if (entry.permission.noFolderInheritance.deny) {
						permissions.push(entry.permission.noFolderInheritance.deny);
					}
					if (entry.permission.noFolderInheritance.delegate) {
						permissions.push(entry.permission.noFolderInheritance.delegate);
					}
					if (entry.permission.noFolderInfiniteInheritance.allow) {
						permissions.push(entry.permission.noFolderInfiniteInheritance.allow);
					}
					if (entry.permission.noFolderInfiniteInheritance.deny) {
						permissions.push(entry.permission.noFolderInfiniteInheritance.deny);
					}
					if (entry.permission.noFolderInfiniteInheritance.delegate) {
						permissions.push(entry.permission.noFolderInfiniteInheritance.delegate);
					}
				});
			});

			return permissions;
		},

		/**
		 * @private
		 */
		_getTemplatePermissions: function(securityPolicy, useReleasedTemplate) {
			var policyPermissions;
			if (useReleasedTemplate) {
				policyPermissions = securityPolicy.getReleasedTemplatePermissions();
			} else {
				policyPermissions = securityPolicy.getInProcessTemplatePermissions();
			}

			if (!policyPermissions) {
				policyPermissions = securityPolicy.getReservationTemplatePermissions();
			}
			return policyPermissions;
		},
		
		/**
		 * @private
		 */
		_renderPermissionGrouping: function(permissionList, selectedPermission) {
			this.logEntry("_renderPermissionGrouping");
			// Renders privilege categories and their members
			var self = this;

			ecm.model.desktop.getConfiguredLabels(function(configuredLabels) {
				self._clear();
				self._widgets = [];
				var membersDiv = construct.create("div");
				construct.place(membersDiv, self._centerPane, "only");
				array.forEach(permissionList, function(item, index) {
					if (self.repository._isP8() || item.id != self._privilegeNoAccess.id ) {
						var div = construct.create("fieldset", {
							'class': 'privilegeContainer'
						}, membersDiv);
						var leftPaneDiv = construct.create("legend", {
							'class': self._isReadonly ? 'leftPane labelReadOnly' : 'leftPane ecmLabel',
							innerHTML: string.substitute(self._messages.append_colon, [
                            	item.name
							])
						}, div);
                 					
						var members = construct.create("div", {
							'class': 'rightPane'
						}, div);

						array.forEach(item.permissions, function(perm, index) {
							var member = construct.create("div", {
								'class': self._isReadonly ? "member labelReadOnly" : "member"
							}, members);

							var button;
							var buttonLabel = self.repository._isCM() ? perm.permission.grantee.id : perm.permission.grantee.displayName;

							var iconsClass = [];
							var iconsAltText = [];
							if (self.repository._isP8() && (self.enableShowPermissionTypeIcons || self.enableFolderPropagationOptions)) {
								if (self._hasPermissions(perm.permission.inherited) || self._hasPermissions(perm.permission.policy)) {
									iconsClass.push("inheritedIcon");
									iconsAltText.push(self._messages.inherited_hover_help);
								}
								if (self._hasPermissions(perm.permission.inheritance)) {
									iconsClass.push("singleInheritanceIcon");
									iconsAltText.push(self._messages.singleLevelInheritance_hover_help);
								}
								if (self._hasPermissions(perm.permission.infiniteInheritance)) {
									iconsClass.push("infiniteInheritanceIcon");
									iconsAltText.push(self._messages.infiniteLevelInheritance_hover_help);
								}
								if (self._hasPermissions(perm.permission.noFolderInheritance)) {
									iconsClass.push("singleInheritanceIcon");
									iconsAltText.push(self._messages.entry_template_secuirty_class_folder_Immediate_children_not_folder);
								}
								if (self._hasPermissions(perm.permission.noFolderInfiniteInheritance)) {
									iconsClass.push("infiniteInheritanceIcon");
									iconsAltText.push(self._messages.entry_template_secuirty_class_folder_all_children_not_folder);
								}
							}
							if (perm.state.status == self._STATE.PARTIAL) {
								iconsClass.push("partialIcon");
								iconsAltText.push(self._messages.partial_hover_help);
							}

							if (0 < iconsClass.length) {
								button = new ecm.widget.MultiIconCompositeButton({
									label: buttonLabel,
									disabled: self._isDisabled,
									iconsClass: iconsClass,
									iconsAltText: iconsAltText,
									actionIconClass: self._isPermissionReadOnly(perm.permission) ? null : "removeIcon",
									tooltip: ( item.id != self._privilegeRoles.id )? self._getToolTip(perm) : null,
									actionAltText: self._isReadonly ? null : string.substitute(self._messages.remove_member, [
										buttonLabel
									])
								});
							} else {
								button = new ecm.widget.CompositeButton({
									label: buttonLabel,
									disabled: self._isDisabled,
									actionIconClass: self._isPermissionReadOnly(perm.permission) ? null : "removeIcon",
									tooltip:  ( item.id != self._privilegeRoles.id )? self._getToolTip(perm) : null,
									actionAltText: self._isReadonly ? null : string.substitute(self._messages.remove_member, [
										buttonLabel
									])
								});
							}

							// Connect to the remove button of the composite button to handle deleting permission
							if (!self.disabled) {
								self.connect(button, "onActionButtonClick", function(evt) {
									if (!self._hasDirectPermissionOnly(perm.permission)) {
										var currentTarget = evt.currentTarget;
										if (self._confirmDelete) {
											self._confirmDelete.destroy();
										}
										self._confirmDelete = new ConfirmationDialog({
											text: ecm.messages.remove_inheritance_text,
											buttonLabel: ecm.messages.delete_text,
											title: ecm.messages.confirmation_icon_tooltip,
											cancelButtonDefault: true,
											onExecute: function() {
												self._deleteDirectPermissions(item, index);
											},
											onCancel: function() {
												setTimeout(function() {
													currentTarget.focus();
												}, 250);
											}
										});
										self._confirmDelete.show();
									} else {
										self._deleteDirectPermissions(item, index);
									}
									event.stop(evt);
								});

								if ( item.id != self._privilegeRoles.id ) {
									self.connect(button, "onTitleClick", function(evt) {
										self._onModify(evt, perm);
										event.stop(evt);
									});
								} 
							}
							member.appendChild(button.domNode); // Add member
							self._widgets.push(button);

							if (selectedPermission && perm.permission.grantee.id == selectedPermission.grantee.id) {
								button.focus();
							}
						});		
						members.appendChild(construct.create("div", {
							'class': "member",
							innerHTML: "&nbsp;"
						}));
					}
				});
			});

			this.resize();

			this.logExit("_renderPermissionGrouping");
		},

		_deleteDirectPermissions: function(item, index) {
			var permissionItem = item.permissions[index];
			// If other permissions apply...
			if (this._hasInheritedPermissions(permissionItem.permission)) {
				var permission = lang.clone(permissionItem.permission);
				permission.direct.allow = null;
				permission.direct.deny = null;
				permission.direct.delegate = null;
				permission.inheritance.allow = null;
				permission.inheritance.deny = null;
				permission.inheritance.delegate = null;
				permission.infiniteInheritance.allow = null;
				permission.infiniteInheritance.deny = null;
				permission.infiniteInheritance.delegate = null;
				permission.noFolderInheritance.allow = null;
				permission.noFolderInheritance.deny = null;
				permission.noFolderInheritance.delegate = null;
				permission.noFolderInfiniteInheritance.allow = null;
				permission.noFolderInfiniteInheritance.deny = null;
				permission.noFolderInfiniteInheritance.delegate = null;			
				this._applyUpdatedPermission(permissionItem, permission);
			} else { // ...else no permissions
				item.permissions.splice(index, 1);
				this._renderPermissionGrouping(this._privilegeList);
				this.onChange();
				setTimeout(lang.hitch(this, function() {
					this._addButton.focus();
				}), 250);
			}
		},

		/**
		 * @private
		 */
		_isPermissionReadOnly: function(permission) {
			return this._isReadonly || !this._hasDirectPermissions(permission) || permission["readOnly"];
		},

		_hasDirectPermissionOnly: function(permission) {
			return (this._hasPermissions(permission.direct) //
			&& !this._hasPermissions(permission.inherited) //
			&& !this._hasPermissions(permission.inheritance) //
	        && !this._hasPermissions(permission.infiniteInheritance) //
			&& !this._hasPermissions(permission.noFolderInheritance) //
			&& !this._hasPermissions(permission.noFolderInfiniteInheritance));
		},

		/**
		 * @private
		 */
		_applyUpdatedPermission: function(permissionItem, updatedPermission) {
			var mask = this._getTotalAllowMask(updatedPermission);
			var newState = this._getPrivilegeState(mask);
			if (permissionItem.state.privilege != newState.privilege || ((permissionItem.state.status != newState.status) && (permissionItem.state.status == this._STATE.NONE || newState.status == this._STATE.NONE))) {
				this._removeItem(updatedPermission.grantee.id);
				if (this._hasDirectPermissions(updatedPermission) || this._hasInheritedPermissions(updatedPermission)) {
					this._assignItem(updatedPermission); // Reassign the item to bucket
				}
			} else {
				permissionItem.permission = updatedPermission;
				permissionItem.state = newState;
			}
			this._renderPermissionGrouping(this._privilegeList, updatedPermission);
			this.onChange();
		},

		/**
		 * @private
		 */
		_onModify: function(evt, permissionItem) {
			this.logEntry("_onModify");

			// Ensure all undo deny change tracking is cleared.
			delete permissionItem.permission.direct._undoDenyChange;
			delete permissionItem.permission.inheritance._undoDenyChange;
			delete permissionItem.permission.infiniteInheritance._undoDenyChange;

			this._showModifyPermissionPane(evt.currentTarget, permissionItem.permission, false, false, lang.hitch(this, function(updatedPermission) {
				this._applyUpdatedPermission(permissionItem, updatedPermission);
			}));
			this.logExit("_onModify");
		},

		/**
		 * @private
		 */
		_showModifyPermissionPane: function(currentTarget, permission, customizeMode, showAdvancedOptions, callback) {
			if (this.repository) {
				var self = this;
				var updatedPermission;
				if (self._modifyPermissionPane) {
					self._modifyPermissionPane.destroy();
				}
				if (self._hasDenyPermissions(permission)) {
					customizeMode = true;
				}
				self._modifyPermissionPane = new ModifyPermissionAccessPane({
					type: self._isDocument ? "document" : "folder",
					isReadOnly: self._isReadonly,
					permission: permission,
					repository: self.repository,
					customizeMode: customizeMode,
					item: self._item,
					enableShowPermissionTypeIcons: self.enableShowPermissionTypeIcons,
					enableFolderPropagationOptions: self.enableFolderPropagationOptions,
					enableDocumentPermissionPropagationOptions: self.enableDocumentPermissionPropagationOptions
				});
				self.connect(self._modifyPermissionPane, "_onCustomize", function() {
					updatedPermission = self._modifyPermissionPane.getUpdatedPermission();
					var isAdvancedMode = self._modifyPermissionPane._isAdvancedMode();
					self._dismissPermissionPane(self._modifyPermissionDialog);
					self._showModifyPermissionPane(currentTarget, updatedPermission, true, isAdvancedMode, callback); // Reopen it in advanced mode
				});

				self.connect(self._modifyPermissionPane, "_onChangeLevel", function(permission) {
					if (!domClass.contains(self._modifyPermissionPane._customizePane, "dijitHidden") && self._modifyPermissionPane._isAdvancedMode()) {
						self._modifyPermissionDialog.setDisabledOKButton(self._hasDenyPermissions(permission));
					}
					if (self._modifyPermissionPane._isAdvancedMode()) {
						self._modifyPermissionDialog.setOKButtonLabel(self._messages.basic);
					} else {
						self._modifyPermissionDialog.setOKButtonLabel(self._messages.advanced);
					}
				});

				if (self._modifyPermissionDialog) {
					self._modifyPermissionDialog.destroy();
				}
				self._modifyPermissionDialog = new DropDownDialog({
					content: self._modifyPermissionPane,
					autofocus: false,
					applyButtonLabel: self._messages.ok_button_label,
					okButtonLabel: self._messages.advanced,
					onBlur: function(evt) {
						if (!customizeMode) {
							self._dismissPermissionPane(self._modifyPermissionDialog);
						}
					},
					onClickCancel: function(e) {
						self._dismissPermissionPane(self._modifyPermissionDialog);
					},
					onClickApply: function() {
						currentTarget = null;
						updatedPermission = self._modifyPermissionPane.getUpdatedPermission();

						// Clear undo deny change tracking.
						delete updatedPermission.direct._undoDenyChange;
						delete updatedPermission.inheritance._undoDenyChange;
						delete updatedPermission.infiniteInheritance._undoDenyChange;

						callback(updatedPermission);
						self._dismissPermissionPane(self._modifyPermissionDialog);
					},
					onClickOK: function() {
						if (self._modifyPermissionPane._isAdvancedMode()) {
							self._modifyPermissionDialog.setOKButtonLabel(self._messages.advanced);
						} else {
							self._modifyPermissionDialog.setOKButtonLabel(self._messages.basic);
							self._modifyPermissionDialog.setDisabledOKButton(self._hasDenyPermissions(permission));
						}
						self._modifyPermissionPane._toggleAdvancedPane();
					}
				});

				self._modifyPermissionDialog.setShowApplyButton(!self._isReadonly);
				if (customizeMode) {
					if (self._modifyPermissionPane._isAdvancedMode()) {
						self._modifyPermissionDialog.setOKButtonLabel(self._messages.basic);
						self._modifyPermissionDialog.setDisabledOKButton(self._hasDenyPermissions(permission));
					} else {
						self._modifyPermissionDialog.setDisabledOKButton(false);
					}
					self._modifyPermissionDialog.setShowOKButton(true);
				} else {
					self._modifyPermissionDialog.setDisabledOKButton(false);
					self._modifyPermissionDialog.setShowOKButton(false);
				}

				self.own(aspect.before(self._modifyPermissionDialog, "onOpen", function() {
					self._modifyPermissionDialog.startup();
					setTimeout(function() {
						self._modifyPermissionDialog.setAlignLeftOKButton(true);
						self._modifyPermissionPane.focus();
					}, 0);
				}));
				popup.open({
					parent: self,
					popup: self._modifyPermissionDialog,
					around: currentTarget,
					onCancel: lang.hitch(self, function() {
						popup.close(self._modifyPermissionDialog);
						if (currentTarget) {
							currentTarget.focus();
						} else {
							self._addButton.focus();
						}
					})
				});
			}
		},

		/**
		 * @private
		 */
		_onAdd: function(evt) {
			if (this._addPermissionDialog) {
				this._addPermissionDialog.destroy();
			}
			this._addPermissionDialog = new ecm.widget.dialog.AddPermissionDialog({
				type: this._isDocument ? "document" : "folder",
				showCreatorOwnerAccount: this.showCreatorOwnerAccount,
				repository: this.repository,
				filteredItems: this._getCurrentGrantees(),
				callback: lang.hitch(this, this._addPermissions),
				enableFolderPropagationOptions: this.enableFolderPropagationOptions
			});

			this._addPermissionDialog.show();
		},

		/**
		 * @private
		 */
		_onRoleAdd: function(evt) {
			if (this._addPermissionDialog) {
				this._addPermissionDialog.destroy();
			}
			this._addRolesDialog = new ecm.widget.dialog.AddRolesDialog({
				type: this._isDocument ? "document" : "folder",
				showCreatorOwnerAccount: this.showCreatorOwnerAccount,
				repository: this.repository,
				filteredItems: this._getCurrentGrantees(),
				callback: lang.hitch(this, this._addPermissions),
				enableFolderPropagationOptions: this.enableFolderPropagationOptions
			});

			this._addRolesDialog.show();
		},		
		
		/**
		 * @private
		 */
		_getCurrentGrantees: function() {
			this.logEntry("_getCurrentGrantees");
			var currentGrantees = [];
			array.forEach(this._privilegeList, function(privilege) {
				array.forEach(privilege.permissions, function(entry) {
					currentGrantees.push(entry.permission.grantee);
				});
			});

			return currentGrantees;

			this.logExit("_getCurrentGrantees");
		},

		/**
		 * @private
		 */
		_dismissPermissionPane: function(pane) {
			this.logEntry("_dismissPermissionPane");
			pane.onCancel();
			this.logExit("_dismissPermissionPane");
		},

		/**
		 * @private
		 */
		_addPermissions: function(privilegeId, permissions, propagation) {
			this.logEntry("_addPermissions");
			var privilege;
			array.some(this._privilegeList, function(item) {
				if (item.id == privilegeId) {
					privilege = item;
					return true;
				}
			});

			if (privilege) {
				var levels = array.map(this._getLevels(privilegeId), function(item) {
					// Add item level, enable it if it's not excluded from the default levels for the privilege
					return {
						level: item,
						enabled: !item.excludeFromDefaults
					};
				});

				array.forEach(permissions, function(permission) {
					var item = this._getItem(permission);
					if (!item) {
						var itemPermission = {
							grantee: permission.grantee,
							direct: {},
							inheritance: {},
							infiniteInheritance: {},
							policy: {},
							inherited: {},
							noFolderInheritance: {},
							noFolderInfiniteInheritance: {}
						};
						itemPermission[propagation] = {
							allow: permission.accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW ? permission : null,
							deny: permission.accessType == ecm.model.Permission.ACCESS_TYPE.DENY ? permission : null,
							delegate: permission.accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE ? permission : null
						};
						// Inheritance AUTHOR level also set the Modify properties right so call reassign to assign it to the right bucket.
						if (privilege.id == "EDIT" && (propagation == "inheritance" || 
								                       propagation == "infiniteInheritance" ||
								                       propagation == "noFolderInfiniteInheritance" ||
								                       propagation == "noFolderInheritance" )) {
							this._assignItem(itemPermission); // Assign the item to bucket	
						} else {							
							// Add to the category list
							privilege.permissions.push({
								state: {
									status: (privilegeId == this._privilegeNoAccess.id) ? this._STATE.NONE : this._STATE.FULL,
									levels: levels
								},
								permission: itemPermission
							});
						}
					} else if (item.permission[propagation].allow == null && item.permission[propagation].deny == null && item.permission[propagation].delegate == null) {
						this._removeItem(permission.id);
						if (permission.accessType == ecm.model.Permission.ACCESS_TYPE.ALLOW) {
							item.permission[propagation].allow = permission;
						} else if (permission.accessType == ecm.model.Permission.ACCESS_TYPE.DENY) {
							item.permission[propagation].deny = permission;
						} else if (permission.accessType == ecm.model.Permission.ACCESS_TYPE.DELEGATE) {
							item.permission[propagation].delegate = permission;
						}
						this._assignItem(item.permission); // Reassign the item to bucket					
					}
				}, this);

				this.onChange();
			}
			this._renderPermissionGrouping(this._privilegeList);
			this.logExit("_addPermissions");
		},

		/**
		 * @private
		 */
		_getLevels: function(id) {
			this.logEntry("_getLevels");
			var levels = [];

			var privilege = this._getPrivilege(id);
			if (privilege) {
				var requiredLevels = privilege.required;
				if (requiredLevels) {
					array.forEach(requiredLevels, function(requiredLevel, index) {
						var level = this._getLevel(requiredLevel.level);
						levels.push(level);
					}, this);
				}
				array.forEach(privilege.levels, function(privilegeLevel) {
					var level = this._getLevel(privilegeLevel.level);
					if (level) {
						levels.push(level);
					}
				}, this);
			}
			this.logExit("_getLevels");

			return levels;
		},

		/**
		 * @private
		 */
		_assignItem: function(item, offset) {
			var offsetIndex = offset;
			if (offsetIndex == null) {
				offsetIndex = 0;
			}	
			this.logEntry("_assignItem");
			array.some(this._privileges, function(privilege, index) {
				var privilegeBucket = this._privilegeList[index + offsetIndex];
				var allowMask = this._getTotalAllowMask(item);
				var state = this._getPermissionState(privilege, allowMask);
				if (state.status != this._STATE.NONE) {
					privilegeBucket.permissions.push({
						state: state,
						permission: item
					});
					return true;
				} else if (index == (this._privileges.length - 1) && 
						((item.direct.allow && item.direct.allow.granteeType != -1) || 
						 (item.inherited.allow && item.inherited.allow.granteeType != -1) ||
						 (item.noFolderInheritance.allow && item.noFolderInheritance.allow.granteeType != -1) ||
						 (item.noFolderInfiniteInheritance.allow && item.noFolderInfiniteInheritance.allow.granteeType != -1) ||
						 (item.inheritance.allow && item.inheritance.allow.granteeType != -1) ||
						 (item.infiniteInheritance.allow && item.infiniteInheritance.allow.granteeType != -1))) {
					this._privilegeList[index + offsetIndex].permissions.push({
						state: state,
						permission: item
					});
				} else  if ((item.direct.allow && item.direct.allow.granteeType == -1) || 
						(item.inheritance.allow && item.inheritance.allow.granteeType == -1) ||
						(item.noFolderInheritance.allow && item.noFolderInheritance.allow.granteeType == -1) ||
						(item.noFolderInfiniteInheritance.allow && item.noFolderInfiniteInheritance.allow.granteeType == -1) ||
						(item.infiniteInheritance.allow && item.infiniteInheritance.allow.granteeType == -1) ||
						(item.inherited.allow && item.inherited.allow.granteeType == -1)) {
					if ( offsetIndex == 1) {
						this._privilegeList[0].permissions.push({
							state: state,
							permission: item
						});
					}
					return true;
				}
			}, this);

			this.logExit("_assignItem");
		},

		/**
		 * @private
		 */
		_getItem: function(permission) {
			this.logEntry("_getItem");
			var item = null;
			array.some(this._privilegeList, function(privilege) {
				array.some(privilege.permissions, function(entry) {
					if (entry.permission.grantee.id == permission.id) {
						item = entry;
						return true;
					}
				});

				if (item) {
					return true;
				}
			});

			this.logExit("_getItem");

			return item;
		},

		/**
		 * @private
		 */
		_removeItem: function(id) {
			this.logEntry("_removeItem");
			array.some(this._privilegeList, function(privilege) {
				var filteredPermissions = array.filter(privilege.permissions, function(entry) {
					return entry.permission.grantee.id != id;
				});

				if (filteredPermissions.length != privilege.permissions.length) {
					privilege.permissions = filteredPermissions;
					return true;
				}
			});

			this.logExit("_removeItem");
		},

		/**
		 * @private
		 */
		_getToolTip: function(permissionItem) {
			this.logEntry("_getToolTip");
			var tooltip = [];
			var self = this;

			var state = permissionItem.state;
			if (state.status != self._STATE.NONE) { // Generate the tooltip from the state object
				var repo = this.repository;
				array.forEach(state.levels, function(stateLevel) {
					var isEnabled = stateLevel.enabled || (stateLevel.level.supersedingLevel && array.some(state.levels, function(innerStatelevel) {
						if (innerStatelevel.level.id == stateLevel.level.supersedingLevel) {
							return innerStatelevel.enabled;
						}
					}));
					tooltip.unshift(self._getLevelToolTipText(stateLevel.level.name, isEnabled, stateLevel.partial));
				});
			} else {
				array.forEach(self._levels, function(level) { // Get the tooltip from the levels
					if (level) {
						tooltip.unshift(self._getLevelToolTipText(level.name, false));
					} else {
						tooltip.unshift(self._getLevelToolTipText(privilegeLevel, false)); // display using the id since cannot find the level definition
					}
				});
			}

			// Displays the grantee name at the top of the tooltip pane
			var name = permissionItem.permission.grantee.emailAddress ? permissionItem.permission.grantee.emailAddress : permissionItem.permission.grantee.name;
			tooltip.unshift("<div style='white-space:nowrap;'>" + idxHtml.escapeHTML(name) + "</div><hr/>");

			this.logExit("_getToolTip");
			return tooltip.join("");
		},

		/**
		 * @private
		 */
		_getLevelToolTipText: function(name, enabled, partial) {
			var tooltip;
			var name = has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(name)) : idxHtml.escapeHTML(name);
			if (enabled) {
				tooltip = ("<div class='ecmSecurityPaneTooltip' style='white-space:nowrap;'>" + name + "</div>");
			} else {
				if (partial) {
					tooltip = ("<div class='ecmSecurityPaneTooltip' style='white-space:nowrap;'><span class='stateIcon'><img tabindex='0' alt='" + this._messages.partial_hover_help + "' class='partialIcon' src='dojo/resources/blank.gif'></span>" + name + "</div><div style='clear: both;'></div>");
				} else {
					tooltip = ("<div class='ecmSecurityPaneTooltip' style='text-decoration:line-through; white-space:nowrap;'>" + name + "</div>");
				}
			}
			return tooltip;
		},

		/**
		 * @private
		 */
		_createHoverHelp: function(hoverHelpText, hoverHelpLink) {
			var hoverHelp = new ecm.widget.HoverHelp({
				message: hoverHelpText,
				isFocusable: true,
				href: hoverHelpLink ? hoverHelpLink : null
			});
			hoverHelp.startup();
			if (!this._hoverHelpArray) {
				this._hoverHelpArray = [];
			}
			this._hoverHelpArray.push(hoverHelp);
			return hoverHelp;
		},

		/**
		 * Resizes the widget
		 */
		resize: function() {
			this.logEntry("resize");
			if (this.fitToParent) { // Resize height
				var box = geometry.getMarginBox(this.domNode);
				if (box.h > 0) {
					var topPaneMarginBox = domGeom.getMarginBox(this._topPane);
					geometry.setMarginBox(this._centerPane, {
						h: box.h - topPaneMarginBox.h
					});
				}
			}
			// Resize the left pane
			var width = 0;
			var items = query(".leftPane", this.domNode);
			array.forEach(items, function(item) {
				var w = geometry.getMarginBox(item).w;
				if (w > width) {
					width = w;
				}
			});

			if (width > 0) {
				array.forEach(items, function(item) {
					geometry.setMarginBox(item, {
						w: width
					});
				});
			}

			this.logExit("resize");
		},

		/**
		 * @private
		 */
		_clear: function() {
			this.logEntry("clear");
			if (this._widgets) {
				array.forEach(this._widgets, function(item) {
					if (!item._destroyed) {
						item.destroyRecursive();
					}
					delete item;
				});
				this._widgets = null;
			}
			if (this._centerPane && this._centerPane.firstChild)
				this._centerPane.removeChild(this._centerPane.firstChild);
			this.logExit("clear");
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			this.inherited(arguments);

			this._clear();
			if (this._addPermissionDialog) {
				this._addPermissionDialog.destroy();
				this._addPermissionDialog = null;
			}
			if (this._modifyPermissionDialog) {
				this._modifyPermissionDialog.destroy();
				this._modifyPermissionDialog = null;
			}
			if (this._modifyPermissionPane) {
				this._modifyPermissionPane.destroy();
				this._modifyPermissionPane = null;
			}
			if (this._confirmDelete) {
				this._confirmDelete.destroy();
				this._confirmDelete = null;
			}
			if (this._hoverHelpArray) {
				array.forEach(this._hoverHelpArray, function(item) {
					if (!item._destroyed) {
						item.destroyRecursive();
					}
					delete item;
				});
			}
		},

		/**
		 * Returns the current permission array.
		 * 
		 * @return Returns an array of {@link ecm.model.Permission}
		 */
		getPermissions: function() {
			this.logEntry("getPermissions");
			var permissions = null;
			if (!this._isReadonly) {
				permissions = this._getPermissions();
			}
			this.logExit("getPermissions");
			return permissions;
		},

		/**
		 * An event that gets trigger when a permission item has been modified, added, or removed from the permission
		 * array.
		 */
		onChange: function() {
		},

		/**
		 * Resets the security pane to its default values.
		 */
		reset: function() {
			this._isReadonly = true;
			this._privilegeList = [];
			this._inheritanceOnlyPermissions = [];
			this._securityPolicy = null;
			this._applySecurityPolicy = false;
			this._useReleasedTemplate = false;
			this._addButton.set("disabled", true);
			this._addRoleButton.set("disabled", true);
			this._clear();
		}
	});
});

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
	"dojo/has",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/query",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	"idx/form/TriStateCheckBox",
	"dijit/form/RadioButton",
	"dijit/form/Select",
	"dijit/Tooltip",
	"ecm/model/Desktop",
	"ecm/model/Permission",
	"ecm/model/User",
	"ecm/widget/StateSelect",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/widget/_SecurityMixin",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/Ellipsis",
	"ecm/model/Permission",
	"ecm/widget/HoverHelp",
	"idx/html",
	"dojo/text!./templates/ModifyPermissionPane.html"
],

function(declare, //
kernel, //
lang, //
array, //
has, //
domClass, //
construct, //
geometry, //
domStyle, //
query, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Menu, //
MenuItem, //
ContentPane, //
TabContainer, //
TriStateCheckBox, //
RadioButton, //
Select, //
Tooltip, //
Desktop, //
Permission, //
User, //
StateSelect, //
LoggerMixin, //
Messages, //
_SecurityMixin, //
ConfirmationDialog, //
Ellipsis, //
Permission, //
HoverHelp, //
idxHtml, //
template) {

	/**
	 * @private Part of the SecurityPane widget
	 * @name ecm.widget.ModifyPermissionPane
	 * @class Provides a pane that is used to edit the permissions for accessing a document or folder.
	 * @augments dijit.layout.ContentPane
	 */
	return declare("ecm.widget.ModifyPermissionPane", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_SecurityMixin,
		LoggerMixin
	], {

		/** @lends ecm.widget.ModifyPermissionPane.prototype */

		// Path to the template
		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,
		_iconClass: "",
		_altText: "",
		/**
		 * If true then the permissions are shown as read only. The default is false.
		 */
		isReadOnly: false,

		_PERMISSION_TYPES: {
			direct: "direct",
			oneLevel: "oneLevel",
			allLevels: "allLevels",
			inherited: "inherited"
		},

		_PERMISSION_LABELS: {
			direct: "direct",
			oneLevel: "singleLevelInheritance",
			allLevels: "infiniteLevelInheritance",
			inherited: "inherited"
		},

		_PERMISSION_TOOLTIPS: {
			direct: "direct_hover_help",
			oneLevel: "singleLevelInheritance_hover_help",
			allLevels: "infiniteLevelInheritance_hover_help",
			inherited: "inherited_hover_help"
		},

		_PERMISSION_NAMES: {
			direct: "direct",
			oneLevel: "inheritance",
			allLevels: "infiniteInheritance"
		},

		_PERMISSION_TAB_ORDER: [
			"inherited",
			"direct",
			"oneLevel",
			"allLevels"
		],

		/**
		 * Creates a new Modified Permission Pane
		 * 
		 * @param args
		 *            An object that contains the item permission settings.
		 * 
		 * <pre>
		 *     args = {
		 *      	grantee: An object of {@link ecm.model.User} or {@link ecm.model.UserGroup},
		 *      	direct: {
		 *      		allow: An object of {@link ecm.model.Permission} that is the item direct permission,
		 *      		deny: An object of {@link ecm.model.Permission} that is the item direct permission
		 *      		delegate: An object of {@link ecm.model.Permission} that is the item direct permission
		 *      	},
		 *      	inheritance: {
		 *      		allow: An of {@link ecm.model.Permission} that is the single depth inheritance permission,
		 *      		deny: An of {@link ecm.model.Permission} that is the single depth inheritance permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the single depth inheritance permission
		 *      	},
		 *      	infiniteInheritance: {
		 *      		allow: An of {@link ecm.model.Permission} that is the infinite depth inheritance permission
		 *      		deny: An of {@link ecm.model.Permission} that is the infinite depth inheritance permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the infinite depth inheritance permission
		 *      	},
		 *      	policy: {
		 *      		allow: An of {@link ecm.model.Permission} that is the security policy permission,
		 *      		deny:An of {@link ecm.model.Permission} that is the security policy permission
		 *      		delegate:An of {@link ecm.model.Permission} that is the security policy permission
		 *      	},
		 *      	inherited: {
		 *      		allow: An of {@link ecm.model.Permission} that is the inherited permission,
		 *      		deny: An of {@link ecm.model.Permission} that is the inherited permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the inherited permission
		 *      	}
		 *     }
		 * </pre>
		 */
		constructor: function(args) {
			if (args.permission) {
				this._permission = lang.clone(args.permission);
				if (this._getGranteeType(this._permission.grantee) == Permission.GRANTEE_TYPE.USER) {
					this._iconClass = "userIconSpan";
					this._altText = this._messages.user;
				} else {
					this._iconClass = "groupIcon";
					this._altText = this._messages.group;
				}
				this.name = idxHtml.escapeHTML(this._permission.grantee.displayName);
				this._shortName = this._permission.grantee.emailAddress ? this._permission.grantee.emailAddress : this._permission.grantee.name;
			}
			this._item = args.item;
			this._itemName = (args.item && idxHtml.escapeHTML(args.item.name)) || "";
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			// Update the ellipsis containers.
			this._itemNameContainer.layout();
			this._nameContainer.layout();
			this._shortNameContainer.layout();

			this._tabContentPane = null;
			this._tabContentPanes = {};

			this._loadPrivileges(this.repository, this.type == "document");
			if (this._permission) {
				if (!this._hasPermissions(this._permission.direct) && !this._hasPermissions(this._permission.inheritance) //
						&& !this._hasPermissions(this._permission.infiniteInheritance) && !this._hasPermissions(this._permission.inherited)) {
					this._permission.direct.allow = new Permission({
						id: this._permission.grantee.id,
						name: this._permission.grantee.name,
						displayName: this._permission.grantee.displayName,
						granteeType: this._getGranteeType(this._permission.grantee),
						accessMask: 0,
						accessType: Permission.ACCESS_TYPE.ALLOW,
						inheritableDepth: 0,
						permissionSource: Permission.PERMISSION_SOURCE.DIRECT
					});
				}
				if (this.customizeMode) {
					this._showCustomizePane();
				} else {
					this._renderBasicPermissionsBox();
					// Show the Includes inherited access text
					if (this._hasPermissions(this._permission.inherited) || this._hasPermissions(this._permission.policy)) {
						domClass.remove(this._inheritedAccess, "dijitHidden");
					}
				}
			}
			// Only shows the Name header for P8
			if (!this.repository._isP8())
				domClass.add(this._shortNameTable, "dijitHidden");
			this.logExit("postCreate");
		},

		_showTooltip: function() {
			var toolTip = [];
			toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(this._messages.display_name) + "</span> ");
			toolTip.push("<span class='tooltipValue'>");
			toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(this._permission.grantee.displayName)) : idxHtml.escapeHTML(this._permission.grantee.displayName));
			toolTip.push("</span></div>");
			if (this.repository._isP8()) {
				toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(this._messages.name) + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				var name = this._permission.grantee.emailAddress ? this._permission.grantee.emailAddress : this._permission.grantee.name;
				toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(name)) : idxHtml.escapeHTML(name));
				toolTip.push("</span></div>");
				toolTip.push("<div><span class='tooltipLabel'>" + idxHtml.escapeHTML(this._messages.shortName) + "</span> ");
				toolTip.push("<span class='tooltipValue'>");
				toolTip.push(has("dojo-bidi") ? this.enforceTextDirWithUcc(null, idxHtml.escapeHTML(this._permission.grantee.shortName)) : idxHtml.escapeHTML(this._permission.grantee.shortName));
				toolTip.push("</span></div>");
			}
			Tooltip.show(toolTip.join(""), this.granteeTypeIcon, [
				"after",
				"before",
				"above",
				"below"
			], !this.isLeftToRight(), has("text-direction"));
		},

		_hideTooltip: function() {
			Tooltip.hide(this.granteeTypeIcon);
		},

		/**
		 * Resizes the widget
		 */
		resize: function() {
			this.logEntry("resize");
			this.inherited(arguments);

			// Update the ellipsis containers.
			this._itemNameContainer.layout();
			this._nameContainer.layout();
			this._shortNameContainer.layout();

			if (this.customizeMode) {
				this.tabContainer.resize();
				// Adjust height of tabs in tab container
				var height = 0;
				var items = query(".dijitTabListContainer-top", this.tabContainer.domNode);
				array.forEach(items, function(item) {
					var h = geometry.getMarginBox(item).h;
					if (height < h) {
						height = h;
					}
				});
				if (0 < height) {
					geometry.setMarginBox(this.tabContainer.domNode, {
						h: height
					});
				}
				// Hide contents of tabs in tab container
				items = query(".dijitTabContainerTop-container", this.tabContainer.domNode);
				array.forEach(items, function(item) {
					domStyle.set(item, "display", "none");
				});
			}
			this.logExit("resize");
		},

		/**
		 * @private
		 */
		_getGranteeType: function(grantee) {
			if (grantee.isInstanceOf && grantee.isInstanceOf(User)) {
				return Permission.GRANTEE_TYPE.USER;
			} else {
				return Permission.GRANTEE_TYPE.GROUP;
			}
		},

		/**
		 * @private
		 */
		_renderBasicPermissionsBox: function() {
			var mask = this._getTotalAllowMask(this._permission);
			this._state = this._getPrivilegeState(mask);
			this._createPermissionsBox(this._state, lang.hitch(this, function(value) {
				if (value != "customize") {
					this._setPrivilege(value, this._permission.direct || this._permission.inheritance || this._permission.infiniteInheritance);
				} else {
					this._onCustomize();
				}
			}), this.repository._isP8(), this.isReadOnly || !this._canEditOnBasicPane());
		},

		/**
		 * @private
		 */
		_canEditOnBasicPane: function(permission) {
			return (!this.repository._isP8() //
					|| (!this.enableShowPermissionTypeIcons && !this.enableFolderPropagationOptions) //
			/*    */|| (!this._hasPermissions(this._permission.inheritance) && !this._hasPermissions(this._permission.infiniteInheritance) && !this._hasPermissions(this._permission.inherited)));
		},

		/**
		 * @private
		 */
		_createPermissionsBox: function(state, callback, showCustomize, isReadOnly, showRemoveAction, isRemoveActionDisabled, isRemoved) {

			Desktop.getConfiguredLabels(lang.hitch(this, function(configuredLabels) {
				if (this._selectBox) {
					this._selectBox.destroy();
				}

				this._selectBox = new StateSelect();
				var options = [];
				// Add Remove action
				if (!isReadOnly) {
					var self = this;
					// Add privilege levels				
					array.forEach(this._privileges, function(privilege, index) {
						var label = configuredLabels.getLabelValue(privilege.labelKey, kernel.locale);
						options.push({
							label: idxHtml.escapeHTML(label),
							value: privilege.id,
							selected: !isRemoved && (state.status == this._STATE.FULL) && (state.privilege.id == privilege.id)
						});
						options.push({
							label: "<span class=\"partialIcon\"><img src=\"dojo/resources/blank.gif\" alt=\"" + this._messages.partial + "\"></img></span><span>" + idxHtml.escapeHTML(label) + "</span>",
							value: "partial-" + privilege.id,
							selected: !isRemoved && (state.status == this._STATE.PARTIAL) && (state.privilege.id == privilege.id),
							hidden: true
						});
					}, this);
					// Add a pseudo NO_ACCESS privilege to the list for setting up deny permission
					if (this.repository._isP8()) {
						options.push({
							label: idxHtml.escapeHTML(configuredLabels.getLabelValue(this._privilegeNoAccess.labelKey, kernel.locale)),
							value: this._privilegeNoAccess.id,
							selected: !isRemoved && (state.status == this._STATE.NONE)
						});
						if (showRemoveAction) {
							// Put Remove action at the top of items
							options.unshift({
								type: "separator"
							});
							options.unshift({
								label: idxHtml.escapeHTML(this._messages.security_remove),
								value: "remove",
								disabled: isRemoveActionDisabled,
								selected: isRemoved
							});
						}
					}
				} else {
					if (state.status == this._STATE.NONE) {
						// Add a pseudo NO_ACCESS privilege to the list for setting up deny permission
						options.push({
							label: idxHtml.escapeHTML(configuredLabels.getLabelValue(this._privilegeNoAccess.labelKey, kernel.locale)),
							value: this._privilegeNoAccess.id,
							selected: true
						});
					} else {
						var label = configuredLabels.getLabelValue(state.privilege.labelKey, kernel.locale);
						options.push({
							label: state.status == this._STATE.PARTIAL ? "<span class=\"partialIcon\"><img alt=\"\" src=\"dojo/resources/blank.gif\"></img></span><span>" + idxHtml.escapeHTML(label) + "</span>" : idxHtml.escapeHTML(label),
							value: state.privilege.id,
							selected: true
						});
					}
				}
				// Add the Customize action to the list
				if (showCustomize) {
					options.push({
						type: "separator"
					});
					options.push({
						label: idxHtml.escapeHTML(this._messages.customize),
						value: "customize"
					});
				}
				this._selectBox.addOption(options);

				if (callback) {
					this.connect(this._selectBox, "onChange", function(value) {
						callback(value);
					});
				}
				this._accessBox.appendChild(this._selectBox.domNode);
			}));
		},

		/**
		 * @private
		 */
		_unsetPrivilege: function(accessId, permission) {
			if (this._permission && permission) {
				/* 
				 * Clear any existing role name and let the mid-tier reset based on the access rights 
				 * granted here in the UI. This is for CM8-only and is ignored by P8. The role name
				 * represents the existing privilege set assigned to the user/group on the ACL. We store
				 * it to account for custom privilege sets applied to the ACL. If no changes are made
				 * in this client the existing privilege set name is still maintained and the mid-tier
				 * can ensure we do not overwrite it.
				 */
				if (permission.allow)
					permission.allow.roleName = null;
				
				var mask = this._getPrivilegeMask(accessId);
				
				// Undo the changes to deny from the previous _setPrivilege() call.
				if (permission.deny && permission._undoDenyChange != null) {
					permission.deny.accessMask ^= permission._undoDenyChange;
					delete permission._undoDenyChange;
					if (permission.deny.accessMask == 0) {
						delete permission.deny;
					}
				}
				
				if (accessId != this._privilegeNoAccess.id) {
					if (permission.allow) {
						// Turn off all the allow unset bits in accessId that are set in the current access mask.
						permission.allow.accessMask ^= permission.allow.accessMask & mask;
					} 					
				} else {			
					if (permission.deny) {
						var turnOff = permission.deny.accessMask & mask;
						permission.deny.accessMask ^= turnOff;
						permission._undoDenyChange = turnOff;
					}
				}
			}
		},
			
		/**
		 * @private
		 */
		_setPrivilege: function(accessId, permission) {
			if (this._permission && permission) {
				/* 
				 * Clear any existing role name and let the mid-tier reset based on the access rights 
				 * granted here in the UI. This is for CM8-only and is ignored by P8. The role name
				 * represents the existing privilege set assigned to the user/group on the ACL. We store
				 * it to account for custom privilege sets applied to the ACL. If no changes are made
				 * in this client the existing privilege set name is still maintained and the mid-tier
				 * can ensure we do not overwrite it.
				 */
				if (permission.allow)
					permission.allow.roleName = null;

				var mask = this._getPrivilegeMask(accessId);

				// Undo the changes to deny from the previous _setPrivilege() call.
				if (permission.deny && permission._undoDenyChange != null) {
					permission.deny.accessMask ^= permission._undoDenyChange;
					delete permission._undoDenyChange;
					if (permission.deny.accessMask == 0) {
						delete permission.deny;
					}
				}

				if (accessId != this._privilegeNoAccess.id) {
					// Do not clear all deny permissions.
					// Deny permissions will be cleared for granted allow permissions below. 
					if (permission.allow) {
						// Turn off all the allow unset bits in accessId that are set in the current access mask.
						permission.allow.accessMask ^= permission.allow.accessMask & this._getPrivilegeMask(accessId, "unsetMask");
						// Set the bits for this choice.
						permission.allow.accessMask |= mask;
					} else {
						permission.allow = new Permission({
							id: this._permission.grantee.id,
							name: this._permission.grantee.name,
							displayName: this._permission.grantee.displayName,
							granteeType: this._getGranteeType(this._permission.grantee),
							accessMask: mask,
							accessType: Permission.ACCESS_TYPE.ALLOW,
							inheritableDepth: this._getInheritableDepth(permission),
							permissionSource: Permission.PERMISSION_SOURCE.DIRECT
						});
					}
					if (permission.deny) {
						var turnOff = permission.deny.accessMask & this._getPrivilegeMask(accessId, "unsetDenyMask");
						permission.deny.accessMask ^= turnOff;
						permission._undoDenyChange = turnOff;
					}
				} else {
					// Clear allow permissions.
					if (permission.allow)
						permission.allow.accessMask = 0;

					if (permission.deny) {
						var turnOn = mask & (permission.deny.accessMask ^ mask);
						permission.deny.accessMask |= turnOn;
						permission._undoDenyChange = turnOn;
					} else {
						permission._undoDenyChange = mask;
						this._denyChange = mask;
						permission.deny = new Permission({
							id: this._permission.grantee.id,
							name: this._permission.grantee.name,
							displayName: this._permission.grantee.displayName,
							granteeType: this._getGranteeType(this._permission.grantee),
							accessMask: mask,
							accessType: Permission.ACCESS_TYPE.DENY,
							inheritableDepth: this._getInheritableDepth(permission),
							permissionSource: Permission.PERMISSION_SOURCE.DIRECT
						});
					}
				}
			}
			if (this._hasDenyPermissions(this._permission)) {
				if (domClass.contains(this._customizePane, "dijitHidden")) {
					this._onCustomize();
				} else if (!this._showAdvancedPermission) {
					this._toggleAdvancedPane();
				}
			}
			this._onChangeLevel(this._permission);
		},

		/**
		 * @private
		 */
		_onChangeLevel: function(permission) {
		},

		/**
		 * @private
		 */
		_onCustomize: function() {
			this._showCustomizePane();
			this.tabContainer.tablist.pane2button(this._tabContentPane.id).focus();
		},

		/**
		 * @private
		 */
		_showCustomizePane: function() {
			domClass.add(this._basicInfoPane, "dijitHidden");
			domClass.remove(this._advanceInfoPane, "dijitHidden");
			domClass.remove(this._customizePane, "dijitHidden");
			domClass.remove(this._mainPane, "basicPane");
			domClass.add(this._mainPane, this.type == "document" ? "documentPane" : "folderPane");

			if (!this._tabContentPane) {
				var tabNames = [];

				if (this._hasPermissions(this._permission.inherited) || this._hasPermissions(this._permission.policy)) {
					tabNames.push(this._PERMISSION_TYPES.inherited);
				}
				tabNames.push(this._PERMISSION_TYPES.direct);
				if (this.enableShowPermissionTypeIcons || this.enableFolderPropagationOptions) {
					if (this._hasPermissions(this._permission.inheritance)) {
						tabNames.push(this._PERMISSION_TYPES.oneLevel);
					}
					if (this._hasPermissions(this._permission.infiniteInheritance)) {
						tabNames.push(this._PERMISSION_TYPES.allLevels);
					}
				}

				array.forEach(tabNames, function(name, index) {
					this._getTabContentPane(name);
				}, this);

				if (!this.isReadOnly && this.enableFolderPropagationOptions && this.type != "document") {
					// Show the menu button in tab container always
					var menuBtn = this.tabContainer.tablist._menuBtn;
					menuBtn.set("tabIndex", "0");
					domStyle.set(menuBtn.domNode, "display", "");

					// Override the action of menu button to show our own customized menu
					menuBtn.loadDropDown = lang.hitch(this, function(callback) {
						// Cleans up menu items
						if (this._menuArray) {
							for ( var i in this._menuArray) {
								this._menuArray[i].destroyRecursive();
							}							
						} 
						this._menuArray = [];
						
						var permission = this._permission;
						var menu = new Menu();
						menuBtn.dropDown = menu;
						this._menuArray.push(menu);
						var disabledOneLevel = (this._hasPermissions(permission.inheritance) && !permission.inheritance.isRemoved) ? true : false;
						var menuItem = new MenuItem({
							label: this._messages.permission_propagation_onelevel,
							disabled: disabledOneLevel,
							onClick: lang.hitch(this, function() {
								this._addPermission(this._PERMISSION_TYPES.oneLevel);
							})
						});
						menuBtn.dropDown.addChild(menuItem);
						this._menuArray.push(menuItem);
						var disabledAllLevels = (this._hasPermissions(permission.infiniteInheritance) && !permission.infiniteInheritance.isRemoved) ? true : false;
						menuItem = new MenuItem({
							label: this._messages.permission_propagation_alllevels,
							disabled: disabledAllLevels,
							onClick: lang.hitch(this, function() {
								this._addPermission(this._PERMISSION_TYPES.allLevels);
							})
						});
						menuBtn.dropDown.addChild(menuItem);
						this._menuArray.push(menuItem);
						callback();
					});
				}
			}
			
			if (this._hasDenyPermissions(this._permission)) {
				this._showAdvancedPermission = true;
			}
		},

		/**
		 * @private
		 */
		_getTabContentPane: function(name) {
			var pane = this._tabContentPanes[name];
			if (!pane) {
				if (!this._paneArray)
					this._paneArray = [];
				pane = new dijit.layout.ContentPane({
					title: idxHtml.escapeHTML(this._messages[this._PERMISSION_LABELS[name]]),
					tooltip: idxHtml.escapeHTML(this._messages[this._PERMISSION_TOOLTIPS[name]]),
					closable: !this.isReadOnly && name != this._PERMISSION_TYPES.inherited && name != this._PERMISSION_TYPES.direct
				});
				this.connect(this.tabContainer.tablist, "onSelectChild", function(childPane) {
					if (this._tabContentPane !== childPane && pane === childPane) {
						this._tabContentPane = childPane;
						this._renderCustomizePane(name);
					}
				});
				this.connect(pane, "onClose", function() {
					var permission = this._getSelectedPermission(name);
					if (!this._isRemoved(permission)) {
						this._remove(permission, lang.hitch(this, function() {
							pane.getParent().closeChild(pane);
							delete this._tabContentPanes[name];
						}));
						return false;
					}
				});

				var insertIndex = 0;
				array.some(this._PERMISSION_TAB_ORDER, function(tabName) {
					if (name === tabName) {
						return true;
					}
					if (this._tabContentPanes[tabName]) {
						insertIndex++;
					}
				}, this);
				this.tabContainer.addChild(pane, insertIndex);

				this._tabContentPanes[name] = pane;
				this._paneArray.push(pane);
			}
			return pane;
		},				

		/**
		 * @private
		 */
		_renderCustomizePane: function(type) {
			if (true || this._radioFolder) {
				if (type !== this._permissionType) {
					if (type === this._PERMISSION_TYPES.oneLevel || type === this._PERMISSION_TYPES.allLevels) {																		
						if (this.type != "document")
							domClass.add(this._levelSection, "dijitHidden");					// Hides the level combo box when viewing folder inheritance permissions	
						this._loadPrivileges(this.repository, this.type == "document", true);	// Loads inheritance type template
					} else {
						domClass.remove(this._levelSection, "dijitHidden");						// Shows the level combo box for all direct type permissions
						this._loadPrivileges(this.repository, this.type == "document", false);	// Loads direct type template
					}
				}
			}
			this._permissionType = type;
			var permission = this._getSelectedPermission(type);
			this._createPermissionContentPane(permission, this.isReadOnly || type == this._PERMISSION_TYPES.inherited, type == this._PERMISSION_TYPES.direct, this._isRemoveActionDisabled(type));
			if (this._showAdvancedPermission) {
				this._showAdvancedPane();
			}
		},

		/**
		 * @private
		 */
		_getInheritableDepth: function(permission) {
			if (permission === this._permission.inheritance) {
				return 1;
			} else if (permission === this._permission.infiniteInheritance) {
				return -1;
			} else if (permission === this._permission.inherited) {
				return -1;
			} else {
				return 0;
			}
		},

		/**
		 * @private
		 */
		_getSelectedPermission: function(type) {
			if (type == this._PERMISSION_TYPES.direct) {
				return this._permission.direct;
			} else if (type == this._PERMISSION_TYPES.oneLevel) {
				return this._permission.inheritance;
			} else if (type == this._PERMISSION_TYPES.allLevels) {
				return this._permission.infiniteInheritance;
			} else {
				return this._getInheritedPermission(this._permission);
			}
		},

		/**
		 * @private
		 */
		_getInheritedPermission: function(permission) {
			// Navigator treats policy permissions as inherited (read only),
			// but they are direct permissions so override inherited deny permissions.
			// Calculate the inherited permissions by combining inherited then policy permissions.
			var inheritedPermissions = {};

			// Includes removing denied permissions from the returned mask.
			var allow = this._getEffectiveAccessMask(permission.inherited);

			// Apply the policy allow access (higher precedence then inherited)
			allow |= this._getPermittedAccessMask(permission.policy);

			// Retrieve the inherited deny access.
			var deny = this._getMask(permission.inherited.deny);

			// Access permitted by the policy overrides inherited deny access.
			deny ^= (allow & deny);

			// Apply the policy deny access
			deny |= this._getMask(permission.policy.deny);

			// Construct the allow and deny permissions.
			if (allow > 0) {
				inheritedPermissions.allow = new Permission({
					id: permission.grantee.id,
					name: permission.grantee.name,
					displayName: permission.grantee.displayName,
					granteeType: this._getGranteeType(permission.grantee),
					accessMask: allow,
					accessType: Permission.ACCESS_TYPE.ALLOW,
					inheritableDepth: -1,
					permissionSource: Permission.PERMISSION_SOURCE.INHERITED
				});
			}
			if (deny > 0) {
				inheritedPermissions.deny = new Permission({
					id: permission.grantee.id,
					name: permission.grantee.name,
					displayName: permission.grantee.displayName,
					granteeType: this._getGranteeType(permission.grantee),
					accessMask: deny,
					accessType: Permission.ACCESS_TYPE.DENY,
					inheritableDepth: -1,
					permissionSource: Permission.PERMISSION_SOURCE.INHERITED
				});
			}
			return inheritedPermissions;
		},

		/**
		 * @private
		 */
		_remove: function(permission, callback, render) {
			this._confirmRemove(lang.hitch(this, function() {
				if (!this._isRemoved(permission)) {
					permission.isRemoved = true;
				}
				if (callback) {
					callback();
				}
				if (render) {
					var allowMask = this._getEffectiveAccessMask(permission);
					var state = this._getPrivilegeState(allowMask);
					this._renderCheckboxesPane(permission, state, permission.isRemoved, this._showAdvancedPermission);
				}
			}));
		},

		/**
		 * @private
		 */
		_confirmRemove: function(callback) {
			var removedText = this._messages.remove_direct_text;
			if (this._permissionType == this._PERMISSION_TYPES.oneLevel) {
				removedText = this._messages.remove_single_inheritance_text;
			} else if (this._permissionType == this._PERMISSION_TYPES.allLevels) {
				removedText = this._messages.remove_infinite_inheritance_text;
			}
			if (this._confirmDelete)
				this._confirmDelete.destroy();
			this._confirmDelete = new ConfirmationDialog({
				text: removedText,
				buttonLabel: this._messages.delete_confirmation_button,
				cancelButtonDefault: true,
				refocus: false,
				onExecute: function() {
					if (callback) {
						callback();
					}
					this.onCancel();
				}
			});

			// Adjust z-index of the dialog because it is behind the pane as default
			var node = this.domNode;
			var zIndex;
			while (node != null) {
				zIndex = domStyle.get(node, "zIndex");
				if (zIndex && zIndex !== "auto") {
					setTimeout(lang.hitch(this, function() {
						domStyle.set(this._confirmDelete.domNode, "zIndex", parseInt(zIndex) + 100);
					}, 0));
					break;
				}
				node = node.parentNode;
			}
			this._confirmDelete.show();
		},

		/**
		 * @private
		 */
		_createPermissionContentPane: function(permission, isReadOnly, showRemoveAction, isRemoveActionDisabled) {
			var allowMask = this._getEffectiveAccessMask(permission);
			var state = this._getPrivilegeState(allowMask);
			this._renderAdvancedPermissionsBox(state, permission, isReadOnly, showRemoveAction, isRemoveActionDisabled);
			this._renderCheckboxesPane(permission, state, isReadOnly || this._isRemoved(permission), this._showAdvancedPermission);
		},

		/**
		 * @private
		 */
		_renderCheckboxesPane: function(permission, state, isReadOnly, showDeny) {
			// Render checkboxes pane
			if (this._permissionPane) {
				this._permissionPane.destroy();
			}
			this._permissionPane = new dijit.layout.ContentPane();
			this._createPermissionCheckBoxes(this._permissionPane.domNode, permission, state, isReadOnly, showDeny);
			this._customizePane.appendChild(this._permissionPane.domNode);
		},

		/**
		 * @private
		 */
		_renderAdvancedPermissionsBox: function(state, permission, isReadOnly, showRemoveAction, isRemoveActionDisabled) {
			this._createPermissionsBox(state, lang.hitch(this, function(value) {
				if (value == "remove") {
					this._remove(permission, null, true);
				} else {
					this._setPrivilege(value, permission);
					if (permission.isRemoved) {
						permission.isRemoved = false;
						this._createPermissionContentPane(permission, false, true, false);
					} else {
						this._updateContentPane(permission);
					}
				}
			}), false, isReadOnly, showRemoveAction, isRemoveActionDisabled, this._isRemoved(permission));

			this._selectBox.set("disabled", isReadOnly);
		},

		/**
		 * @private
		 */
		_addPermission: function(value) {
			var name = this._PERMISSION_NAMES[value];
			if (name && this._permission[name]) {
				var permission = this._permission[name];
				if (permission.isRemoved) {
					permission.isRemoved = false;
				}
				if (!permission.allow && !permission.deny) {
					permission.allow = new Permission({
						id: this._permission.grantee.id,
						name: this._permission.grantee.name,
						displayName: this._permission.grantee.displayName,
						granteeType: this._getGranteeType(this._permission.grantee),
						accessMask: 0,
						accessType: Permission.ACCESS_TYPE.ALLOW,
						inheritableDepth: this._getInheritableDepth(permission),
						permissionSource: Permission.PERMISSION_SOURCE.DIRECT
					});
				}
				var pane = this._getTabContentPane(this._PERMISSION_TYPES[value]);
				this.tabContainer.selectChild(pane);
			}
		},

		/**
		 * @private
		 */
		_createPermissionCheckBoxes: function(container, permission, state, isReadOnly, showDeny) {
			var self = this;
			// Cleans up checkboxes
			this._destroyCheckboxes();
			
			var levelDiv;			
			// For inheritance permission pane only, add a deny all and allow all checkboxes so that the user can quickly set everything level to deny.
			// The direct permission pane has permissions box that allows the user to select NO_ACCESS. so it doesn't need the deny all checkbox.
			var inheritableDepth = this._getInheritableDepth(permission);
			if (inheritableDepth != 0) {	
				levelDiv = construct.create("div", null, container);
				// Adds allow all checkbox
				self._allowAllChkBox = self._createSelectAllCheckbox(levelDiv, permission, "FULL_CONTROL", "allowAllCheckbox", self._getAllowAllCheckboxValue(permission), 
					self._messages.allow, self._allowToolTip, self._messages.allowAll);							
				// Adds deny all checkbox
				self._denyAllChkBox = self._createSelectAllCheckbox(levelDiv, permission, self._privilegeNoAccess.id, showDeny ? "denyAllCheckbox" : "denyAllCheckbox dijitHidden", 
					self._getDenyAllCheckboxValue(permission), self._messages.deny, self._denyToolTip, self._messages.denyAll);
				// Adds separator
				construct.create("hr", {"class": "chkAllSeparator"}, container);
			} else {
				levelDiv = construct.create("div", {
					"class": "customizeBox"
				}, container);
				// deny
				var denyDiv = construct.create("div", {
					"class": showDeny ? "ecmLabel denyBoxLabel" : "ecmLabel denyBoxLabel dijitHidden",
					innerHTML: idxHtml.escapeHTML(this._messages.deny)
				}, levelDiv);
				
				// allow 
				var allowDiv = construct.create("div", {
					"class": "ecmLabel allowBoxLabel",
					innerHTML: idxHtml.escapeHTML(this._messages.allow)
				}, levelDiv);							
			}						
			
			var chkBox;			
			self._checkBoxArray = [];
			array.forEach(this._privileges, function(privilege, index) {
				var levels = privilege.levels;
				// Only show separator for non inheritance permissions
				if (inheritableDepth == 0 && levels.length > 0 && index > 0) {
					construct.create("hr", null, container);
				}
				for (var i = levels.length - 1; i >= 0; i--) {
					var level = this._getLevel(levels[i].level);					
					// Gets the checkbox value (true, mixed and false) for the current level
					var checkboxValue = this._getCheckBoxValue(permission, state, level);
					levelDiv = construct.create("div", {
						"class": "customizeBox"
					}, container);
					
					// allow checkbox div
					allowDiv = construct.create("div", {
						"class": "allowBox"
					}, levelDiv);
					// Adds allow checkbox
					chkBox = new TriStateCheckBox({
						"class": "accessCheckBox",
						id: self.id + "_" + level.id,
						name: level.id,
						value: level.id,
						checked: checkboxValue,
						disabled: isReadOnly || (!level.enabledForAllPrivileges && state.privilege.id != privilege.id),
						_privilege: privilege.id,
						_accessType: Permission.ACCESS_TYPE.ALLOW,												
						onClick: function() {
							if (this.get("checked")) {
								self._grantLevel(this.get("name"), permission);
							} else {
								self._revokeLevel(this.get("name"), permission, Permission.ACCESS_TYPE.ALLOW);
							}
							self._updateContentPane(permission, true);
						}
					});
					self._checkBoxArray.push(chkBox);
					allowDiv.appendChild(chkBox.domNode);
					// Adds checkbox label
					var label = construct.create("label", {
						"for": self.id + "_" + level.id,
						"class": "levelLabel",
						innerHTML: idxHtml.escapeHTML(level.name)
					}, allowDiv);
					// Adds hover help
					if (level.hoverHelp) {
						var hoverHelp = new HoverHelp({
							message: level.hoverHelp,
							isFocusable: true
						});
						hoverHelp.startup();
						allowDiv.appendChild(hoverHelp.domNode);
						if (!self._hoverHelpArray) {
							self._hoverHelpArray = [];
						}
						self._hoverHelpArray.push(hoverHelp);
					}			
					
					// deny checkbox div
					denyDiv = construct.create("div", {
						"class": showDeny ? "denyBox" : "denyBox dijitHidden"
					}, levelDiv);					
					// Add deny checkbox				
					chkBox = new TriStateCheckBox({
						"class": "accessCheckBox",
						name: level.id,
						value: level.id,
						checked: self._isEnabled(level.id, permission.deny),
						disabled: isReadOnly,
						_privilege: privilege.id,
						_accessType: Permission.ACCESS_TYPE.DENY,
						"aria-label": idxHtml.escapeHTML(self._messages.deny) + ": " + idxHtml.escapeHTML(level.name),									
						onClick: function() {
							if (this.get("checked")) {
								self._denyLevel(this.get("name"), permission);
							} else {
								self._revokeLevel(this.get("name"), permission, Permission.ACCESS_TYPE.DENY);								
							}
							self._updateContentPane(permission, true);
						},
						label: idxHtml.escapeHTML(this._messages.deny) // Add the Deny label to make the alignment line up with header.
					});					
					self._checkBoxArray.push(chkBox);
					denyDiv.appendChild(chkBox.domNode);
					// Adds level line separator
					if (level.addSeparator) {
						construct.create("hr", null, container);
					}
				}
			}, this);
		},		
		
		/**
		 * @private
		 */
		_createSelectAllCheckbox: function(container, permission, privilege, chkBoxClass, checked, label, tooltip, tooltipLabel) {
			var self = this;
			var chkBox = new TriStateCheckBox({
				"class": chkBoxClass? chkBoxClass : "",
				id: self.id + "_" + privilege,
				name: privilege,
				value: privilege,
				checked: checked,		
				label: idxHtml.escapeHTML(label),
				onClick: function() {
					var checked = this.get("checked");
					if (checked) {
						self._setPrivilege(privilege, permission);		
						if (checked == "mixed") {
							self.set("checked", true);
						}							
					} else {
						self._unsetPrivilege(privilege, permission);
					}
					self._updateContentPane(permission, true);
				}				
			});		
			container.appendChild(chkBox.domNode);	
			if (tooltip) {
				tooltip.destroy();
			}
			tooltip = new dijit.Tooltip({
				position: [
					"above",
					"below",
					"after",
					"before"
				],
				textDir: has("text-direction"),
				connectId: [
				    chkBox.domNode
				],
				label: idxHtml.escapeHTML(tooltipLabel)
			});
			
			return chkBox;
		},
		
		_getDenyAllCheckboxValue: function(permission) {
			var count = 0;		
			var totalCount = 0;
			if (permission.deny) {
				array.forEach(this._privileges, lang.hitch(this, function(privilege, index) {
					var levels = privilege.levels;				
					for (var i = 0; i < levels.length; i++) {
						var level = this._getLevel(levels[i].level);
						if (this._isEnabled(level.id, permission.deny))
							count++;
					}
					totalCount += levels.length;
				}));
			}
			if (count == 0)
				return false;
			else if (count == totalCount) 
				return true;
			else 
				return "mixed";			
		},
		
		_getAllowAllCheckboxValue: function(permission) {
			var count = 0;		
			var totalCount = 0;
			if (permission.allow) {
				array.forEach(this._privileges, lang.hitch(this, function(privilege, index) {
					var levels = privilege.levels;				
					for (var i = 0; i < levels.length; i++) {
						var level = this._getLevel(levels[i].level);
						if (this._isEnabled(level.id, permission.allow))
							count++;
					}
					totalCount += levels.length;
				}));
			}
			if (count == 0)
				return false;
			else if (count == totalCount) 
				return true;
			else 
				return "mixed";			
		},
		
		
		/**
		 * @private
		 */
		_isEnabled: function(levelId, permission) {
			var levelMask = this._getLevel(levelId).mask;
			var mask = 0;
			if (permission) {
				mask = permission.accessMask;
			}
			return (levelMask & mask) == levelMask;
		},
		
		/**
		 * @private
		 */
		_grantLevel: function(levelId, permission) {
			if (permission) {
				var level = this._getLevel(levelId);
				var mask = level.allowSetMask;
				if (permission.allow) {
					var allowMask = permission.allow.accessMask;
					permission.allow.accessMask = (allowMask | mask);
				} else {
					permission.allow = new Permission({
						id: this._permission.grantee.id,
						name: this._permission.grantee.name,
						displayName: this._permission.grantee.displayName,
						granteeType: this._getGranteeType(this._permission.grantee),
						accessMask: mask,
						accessType: Permission.ACCESS_TYPE.ALLOW,
						inheritableDepth: this._getInheritableDepth(permission),
						permissionSource: Permission.PERMISSION_SOURCE.DIRECT
					});
				}
				if (permission.deny) {
					permission.deny.accessMask ^= (permission.deny.accessMask & level.allowSetUnsetDenyMask);
				}
				this._onChangeLevel(this._permission);
			}
		},

		/**
		 * @private
		 */
		_revokeLevel: function(levelId, permission, accessType) {
			if (permission) {
				var level = this._getLevel(levelId);
				if (accessType == Permission.ACCESS_TYPE.ALLOW) {
					var allowMask = permission.allow.accessMask;
					permission.allow.accessMask = (allowMask ^ (allowMask & level.allowUnsetMask));
				} else {
					var denyMask = permission.deny.accessMask;
					if (permission._undoDenyChange != null) {
						var newOriginalDenyMask = denyMask ^ permission._undoDenyChange;
						newOriginalDenyMask ^= (newOriginalDenyMask & level.denyUnsetMask);
						permission._undoDenyChange = newOriginalDenyMask ^ (denyMask ^ (denyMask & level.denyUnsetMask));
					}
					permission.deny.accessMask ^= (denyMask & level.denyUnsetMask);
				}
				this._onChangeLevel(this._permission);
			}
		},

		/**
		 * @private
		 */
		_denyLevel: function(levelId, permission) {
			if (permission) {
				var levelDenyMask = this._getLevel(levelId).denySetMask;
				if (permission._undoDenyChange != null) {
					var denyMask = permission.deny.accessMask;
					var newOriginalDenyMask = (denyMask ^ permission._undoDenyChange) | levelDenyMask;
					permission._undoDenyChange = newOriginalDenyMask ^ (denyMask | levelDenyMask);
				}
				if (permission.deny) {
					permission.deny.accessMask |= levelDenyMask;
				} else {
					permission.deny = new Permission({
						id: this._permission.grantee.id,
						name: this._permission.grantee.name,
						displayName: this._permission.grantee.displayName,
						granteeType: this._getGranteeType(this._permission.grantee),
						accessMask: levelDenyMask,
						accessType: Permission.ACCESS_TYPE.DENY,
						inheritableDepth: this._getInheritableDepth(permission),
						permissionSource: Permission.PERMISSION_SOURCE.DIRECT
					});
				}
				if (permission.allow) {
					this._revokeLevel(levelId, permission, Permission.ACCESS_TYPE.ALLOW);
				}
				this._onChangeLevel(this._permission);
			}
		},

		/**
		 * @private
		 */
		_updateContentPane: function(permission, updatePermissionBox) {
			var allowMask = this._getEffectiveAccessMask(permission);
			var state = this._getPrivilegeState(allowMask);
			var contentDijits = this._permissionPane.getChildren();
			if (updatePermissionBox) {
				var removeOption = this._selectBox.getOptions("remove");
				if (removeOption) {
					this._renderAdvancedPermissionsBox(state, permission, this._selectBox.get("disabled"), true, removeOption.disabled);
				} else {
					this._renderAdvancedPermissionsBox(state, permission, this._selectBox.get("disabled"));
				}
			}
			// Update the checkbox selected value
			array.forEach(contentDijits, function(contentDijit, index) {
				if (contentDijit.isInstanceOf && contentDijit.isInstanceOf(idx.form.TriStateCheckBox)) {
					if (contentDijit.get("_accessType")) {
						if (contentDijit.get("_accessType") == Permission.ACCESS_TYPE.ALLOW || contentDijit.get("_accessType") == Permission.ACCESS_TYPE.DELEGATE) {
							var level = this._getLevel(contentDijit.get("name"));
							// Gets the checkbox value (true, mixed and false) for the current level
							var checkboxValue = this._getCheckBoxValue(permission, state, level);
							contentDijit.set("checked", checkboxValue);
							contentDijit.set("disabled", this.isReadOnly || (!level.enabledForAllPrivileges && (!this._showAdvancedPermission && (state.privilege.id != contentDijit.get("_privilege")))));
						} else {
							contentDijit.set("checked", this._isEnabled(contentDijit.get("name"), permission.deny));
						}
					}
				}
			}, this);	
			
			if (this._allowAllChkBox) {
				this._allowAllChkBox.set("checked", this._getAllowAllCheckboxValue(permission));
				this._denyAllChkBox.set("checked", this._getDenyAllCheckboxValue(permission));
			}
		},

		_getCheckBoxValue: function(permission, state, level) {
			var value;
			// Check to see if the level is currently set by checking the state.
			var getValue = function(stateLevel) {
				return stateLevel.enabled? 2 : (stateLevel.partial? 1 : 0);
			}
			if (state.status != this._STATE.NONE) {
				array.some(state.levels, function(stateLevel) {
					if (stateLevel.level.id == level.id) {
						if (level.supersedingLevel) {
							value = array.some(state.levels, function(stateLevel) {
								if (stateLevel.level.id == level.supersedingLevel) {
									return getValue(stateLevel);									
								}
							}) | getValue(stateLevel);
						} else {
							value = getValue(stateLevel);					
						}
						return true;
					}
				});
				// The level is not found in the current stateLevel.level list .  It is from a higher level.  For example, the current state (state) is set to the AUTHOR group 
				// which has only "Add to Folders" and "View Properties" levels.  However, the current "level" is from the OWNER group so we need to match with the level minMask since
				// we are now supporting partial access right matching.
				// This happens when the permission doesn't match the minMask of the OWNER, AUTHOR or READER group but some of the levels within the group match with their minMasks. 
				if (value === undefined) {	
					var mask = this._getEffectiveAccessMask(permission);
					if (level.minMask && ((level.minMask & mask) == level.minMask))
						value = 1;
					else
						value = 0;
				}
			}
			return (value & 2) == 2? true : ((value & 1) == 1? "mixed" : false);
		},		
		
		/**
		 * @private
		 */
		_toggleAdvancedPane: function() {
			if (this._showAdvancedPermission) {
				this._showAdvancedPermission = false;
				this._hideAdvancedPane();
			} else {
				this._showAdvancedPermission = true;
				this._showAdvancedPane();
			}
		},

		/**
		 * @private
		 */
		_hideAdvancedPane: function() {
			query(".denyBoxLabel, .denyBox", this._mainPane).addClass("dijitHidden");
			if (this._permissionType != this._PERMISSION_TYPES.inherited) {
				this._selectBox.set("disabled", this.isReadOnly);
				this._updateContentPane(this._getSelectedPermission(this._permissionType));
			} 
			query(".denyAllCheckbox, .denyBox", this._mainPane).addClass("dijitHidden");
		},

		/**
		 * @private
		 */
		_showAdvancedPane: function() {
			if (this._permissionPane) {
				query(".denyBoxLabel, .denyBox", this._mainPane).removeClass("dijitHidden");
				if (this._permissionType != this._PERMISSION_TYPES.inherited) {
					var contentDijits = this._permissionPane.getChildren();
					array.forEach(contentDijits, function(contentDijit) {
						if (contentDijit.isInstanceOf && contentDijit.isInstanceOf(idx.form.TriStateCheckBox)) {
							contentDijit.set("disabled", this.isReadOnly);
						}
					}, this);
				}
				query(".denyAllCheckbox, .denyBox", this._mainPane).removeClass("dijitHidden");
			}
		},

		/**
		 * @private
		 */
		_isAdvancedMode: function() {
			return this._showAdvancedPermission;
		},

		/**
		 * Return the modified permission settings
		 * 
		 * @return An object that contains the item permission settings. Direct, inheritance and infinite inheritance
		 *         permissions can be modified.
		 * 
		 * <pre>
		 *     {
		 *      	grantee: An object of {@link ecm.model.User} or {@link ecm.model.UserGroup},
		 *      	direct: {
		 *      		allow: An object of {@link ecm.model.Permission} that is the item direct permission,
		 *      		deny: An object of {@link ecm.model.Permission} that is the item direct permission
		 *      		delegate: An object of {@link ecm.model.Permission} that is the item direct permission,
		 *      	},
		 *      	inheritance: {
		 *      		allow: An of {@link ecm.model.Permission} that is the single depth inheritance permission,
		 *      		deny: An of {@link ecm.model.Permission} that is the single depth inheritance permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the single depth inheritance permission
		 *      	},
		 *      	infiniteInheritance: {
		 *      		allow: An of {@link ecm.model.Permission} that is the infinite depth inheritance permission,
		 *      		deny: An of {@link ecm.model.Permission} that is the infinite depth inheritance permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the infinite depth inheritance permission
		 *      	},
		 *      	policy: {
		 *      		allow: An of {@link ecm.model.Permission} that is the security policy permission,
		 *      		deny: An of {@link ecm.model.Permission} that is the security policy permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the security policy permission
		 *      	},
		 *      	inherited: {
		 *      		allow: An of {@link ecm.model.Permission} that is the inherited permission,
		 *      		deny: An of {@link ecm.model.Permission} that is the inherited permission
		 *      		delegate: An of {@link ecm.model.Permission} that is the inherited permission
		 *      	}
		 *     }
		 * </pre>
		 */
		getUpdatedPermission: function() {
			if (this._permission.direct.isRemoved) {
				this._permission.direct.isRemoved = null;
				this._permission.direct.allow = null;
				this._permission.direct.deny = null;
				this._permission.direct.delegate = null;
			} else if (!this.permission.direct.allow) {
				var mask = this._getMask(this._permission.direct.allow);
				if (mask == 0) {
					this._permission.direct.allow = null;
				}
			}
			if (this._permission.inheritance.isRemoved) {
				this._permission.inheritance.isRemoved = null;
				this._permission.inheritance.allow = null;
				this._permission.inheritance.deny = null;
				this._permission.inheritance.delegate = null;
			}
			if (this._permission.infiniteInheritance.isRemoved) {
				this._permission.infiniteInheritance.isRemoved = null;
				this._permission.infiniteInheritance.allow = null;
				this._permission.infiniteInheritance.deny = null;
				this._permission.infiniteInheritance.delegate = null;
			}

			return this._permission;
		},

		/**
		 * @private
		 */
		_isRemoved: function(permission) {
			return !permission || (!permission.allow && !permission.deny && !permission.delegate) || permission.isRemoved;
		},

		/**
		 * @private
		 */
		_isRemoveActionDisabled: function(type) {
			if (type && type == this._PERMISSION_TYPES.direct) {
				var perm = this.permission[this._PERMISSION_NAMES[type]];
				return !this._isRemoved(perm) && this._getMask(perm.allow) == 0 && this._getMask(perm.deny) == 0 && this._getMask(perm.delegate) == 0;
			} else {
				return false;
			}
		},

		/**
		 * Sets the focus in the form input.
		 */
		focus: function() {
			this.logEntry("focus");
			if (this.customizeMode) {
				this.tabContainer.tablist.pane2button(this._tabContentPane.id).focus();
			} else {
				this._selectBox.focus();
			}
			this.logExit("focus");
		},
		
		destroy: function() {
			this._destroyCheckboxes();
			if (this._selectBox) {
				this._selectBox.destroyRecursive();
				this._selectBox = null;
			}
			
			if (this._confirmDelete) {
				this._confirmDelete.destroyRecursive();
				this._confirmDelete = null;
			}
			
			if (this._paneArray) {
				for ( var i in this._paneArray) {
					this._paneArray[i].destroyRecursive();
				}
				this._paneArray = null;
			}
			
			if (this._menuArray) {
				for ( var i in this._menuArray) {
					this._menuArray[i].destroyRecursive();
				}
				this._menuArray = null;
			}
			
			if (this._hoverHelpArray) {
				for ( var i in this._hoverHelpArray) {
					this._hoverHelpArray[i].destroyRecursive();
				}
				this._hoverHelpArray = null;
			}
			
			if (this._allowToolTip) {
				this._allowToolTip.destroyRecursive();
				this._allowToolTip = null;
				this._denyToolTip.destroyRecursive();
				this._denyToolTip = null;
			}
			
			if (this._permissionPane) {
				this._permissionPane.destroyRecursive();
				this._permissionPane = null;
			}
		}, 
		
		_destroyCheckboxes: function() {
			if (this._checkBoxArray) {
				for ( var i in this._checkBoxArray) {
					this._checkBoxArray[i].destroyRecursive();
					delete this._checkBoxArray[i];
				}
				this._checkBoxArray = null;
			}
			if (this._allowAllChkBox) {
				this._allowAllChkBox.destroyRecursive();
				this._allowAllChkBox = null;
				this._denyAllChkBox.destroyRecursive();
				this._denyAllChkBox = null;
			}			
		}
	});
});

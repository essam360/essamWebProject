/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/connect", //
	"dojo/_base/sniff", //	
	"dojo/_base/array", //
	"dojo/aspect", //
	"dojo/dom-class", //
	"dojo/dom-style", //
	"dojo/keys", //
	"dijit/form/Select", //
	"dijit/layout/BorderContainer", //
	"dijit/layout/ContentPane", //
	"idx/html", //
	"./BaseDialog", //
	"./MessageDialog", //
	"../FolderSelector", //
	"../FolderSelectorCallback", //
	"ecm/widget/_SecurityMixin", //
	"ecm/model/Permission",
	"ecm/model/Teamspace", //
	"../UnselectableFolder", //
	"dojo/text!./templates/MoveTeamspaceFileDialogContent.html"
], //
function(declare, //
lang, //
connect, //
has, //
array, //
aspect, //
domClass, //
domStyle, //
keys, //
Select, //
BorderContainer, //
ContentPane, //
idxHtml, //
BaseDialog, //
MessageDialog, //
FolderSelector, //
FolderSelectorCallback, //
_SecurityMixin, //
Permission, //
Teamspace, //
UnselectableFolder, //
template) {

	/**
	 * @name ecm.widget.dialog.MoveTeamspaceFileDialog
	 * @class Provides a dialog box that is used to move a document or folder from a teamspace to another folder.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.3
	 */
	return declare("ecm.widget.dialog.MoveTeamspaceFileDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.MoveTeamspaceFileDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A string "actionMoveTeamspaceDocumentToFolder" depending on the desired action.
		 * 
		 * @public
		 */
		action: "actionMoveTeamspaceDocumentToFolder",

		/**
		 * The teamspace object. Instance of {@link ecm.model.Teamspace}
		 * 
		 * @public
		 */
		teamspace: null,

		/**
		 * The repository object. Instance of {@link ecm.model.Repository}
		 * 
		 * @public
		 */
		repository: null,

		_itemName: null,
		_unselectableFolders: null,
		_parentFolders: null,
		_newSourceFolder: null,
		_hasPermissionToPerformActionOnSelectedFolder: true,
		_hasPermissionToMoveFromAnyFolder: true,
		_initialResize: false,
		_securityUtil: new _SecurityMixin(),

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);
			domClass.add(this.domNode, "ecmMoveTeamspaceFileDialog");
			this.setResizable(true);
			this.setMaximized(true);
			//this.fileInDropDown.setStyle("inline");

			domStyle.set(this.domNode, "maxHeight", "none");

			this.textDir = has("text-direction");
			this.fileInDropDown.set("title", this.messages.teamspaceDecommissionReFileIn);

			this.logDebug(methodName, "Action is " + this.action);
			var actionCaption = "";
			if (this.action == "actionMoveTeamspaceDocumentToFolder") {
				this.setTitle(this.messages.moveTeamspaceDocuments_from_folder_label);
				actionCaption = this.messages.move_to_folder_button_caption;
			} else if (this.action == "actionAddToFolder") {
				this.setTitle(this.messages.add_to_folder_title);
				actionCaption = this.messages.add_to_folder_button_caption;
			}

			this.okButton = this.addButton(actionCaption, "_action", false, true);

			// Enable the OK button when the user selects a folder in the selector.
			this.okButton.set("disabled", true);

			this.watch("repository", lang.hitch(this, function() {
				this.fileInDropDown.setRoot(this.repository);
			}));
			this.connect(this.fileInDropDown, "onFolderSelect", lang.hitch(this, function(/*ecm.model.Item*/item) {

			}));
			this.own(aspect.after(this._securityPane, "onChange", lang.hitch(this, "onFieldChange")));

			this._securityPane.enableFolderPropagationOptions = this._securityPane.enableDocumentPermissionPropagationOptions = ecm.model.desktop.showSecurityInheritanceUI;

			this.logExit(methodName);
		},

		/**
		 * Displays the dialog
		 * 
		 * @public
		 * @param folder
		 *            The {@link ecm.model.ContentItem} object representing the parent folder of an item being moved or
		 *            added to another folder.
		 * @param items
		 *            An array of {@link ecm.model.ContentItem} objects to be added or moved to another folder.
		 */
		show: function(folder, items) {
			var methodName = "show";
			this.logEntry(methodName);
			if (this.repository) {
				this.fileInDropDown.rootItemToFilter = this.teamspace.id;
				this.fileInDropDown.setRoot(this.repository);
				//this.fileInDropDown._selectTeamspaces();
			}
			this._folder = folder;
			this._items = items;
			this._objectStore = items && items.length > 0 && items[0].getObjectStore ? items[0].getObjectStore() : null;

			this.parentFolders = new Array();
			this._unselectableFolders = new Array();

			this.logDebug(methodName, "Repository type is" + this.repository.type);
			this._createRendering();
			this.logExit(methodName);
		},

		_displayNoPermissionOnTarget: function() {
			var methodName = "_displayNoPermissionOnTarget";
			this.logEntry(methodName);

			var msg = this.messages.moveTeamspaceDocuments_move_no_permission_to_move_to_target;
			var dialog = new MessageDialog({
				text: msg
			});
			dialog.show();

			this.logExit(methodName);
		},

		_displayNoPermissionMessage: function() {
			var methodName = "_displayNoPermissionMessage";
			this.logEntry(methodName);

			//var msg = this.messages.moveTeamspaceDocuments_move_no_permission_to_move_document;
			//var dialog = new MessageDialog({
			//	text: msg
			//});
			//dialog.show();
			this.setMessage(this.messages.moveTeamspaceDocuments_move_no_permission_to_move_document, "info");

			this.logExit(methodName);
		},

		_displayMixedItemsdMessage: function() {
			var methodName = "_displayNotFiledMessage";
			this.logEntry(methodName);

			//var msg = this.messages.moveTeamspaceDocuments_move_mixed_items;
			//var dialog = new MessageDialog({
			//	text: msg
			//});
			//dialog.show();
			this.setMessage(this.messages.moveTeamspaceDocuments_move_mixed_items, "info");

			this.logExit(methodName);
		},

		_createRendering: function() {
			var methodName = "_createRendering";
			this.logEntry(methodName);

			this.inherited("show", []);

			this.resize();

			this.overrideClassSecurity.set("checked", true);

			this.repository
			this._onChangeOverrideClassSecurity();
/*
			// If the item has multiple parent folders, display them in a dropdown.
			if (this.parentFolders.length > 0 && this._folder == null) {
				this._folder = this.parentFolders[0];
			} */
			if (this.parentFolders.length <= 1) {
				domStyle.set(this._folderNameLabel.id, "display", "inline");
				//domStyle.set(this._parentFolderSelect.id, "display", "none");
				this.logDebug(methodName, "Single parent folder");
			}

			// If we are moving from the root folder, use the repository name
			if ((this._folder["rootFolder"] == true) || (this._folder["attributes"] && this._folder.attributes.PathName != null && this._folder.attributes.PathName == "/")) {
				this._folderNameLabel.innerHTML = idxHtml.escapeHTML(this.repository.name);
			} else {
				this._folderNameLabel.innerHTML = idxHtml.escapeHTML(this._folder.name);
			}
			this.applyTextDir(this._folderNameLabel);

			this.setIntroText(this.messages.moveTeamspaceDocuments_file_info_text);
			//this._destinationLabel.innerHTML = this.messages.move_to_folder_label;

			this.logExit(methodName);
		},

		/**
		 * @private
		 */
		_action: function() {
			var methodName = "_action";
			this.logEntry(methodName);

			var permissions = this.getPermissions() != null ? this.getPermissions() : null;
			var inheritSecurity = this.inheritSecurity.get("checked");

			var newFolder = this.fileInDropDown.getSelected();

			var havePermissionsOnAll = this._hasPermissionsToMoveAllSelected();

			if (this._hasPermissionToPerformActionOnSelectedFolder == true) {
				if (newFolder != null) {
					if (this.action == "actionAddToFolder") {
						newFolder.item.addToFolder(this._items);
					} else {
						if (havePermissionsOnAll) {
							// Get the new source folder if the user selected another folder in the dropdown. If it is the default, don't change
							// it to avoid refresh issues.
							//if (this._hasMixedDocuments())
							//	this._displayMixedItemsdMessage();

							var sourceFolder = null;
							if (this._newSourceFolder == null) {
								sourceFolder = this._folder;
							} else {
								if (this._folder != null && this._folder.id == this._newSourceFolder.id) {
									sourceFolder = this._folder;
								} else {
									sourceFolder = this._newSourceFolder;
								}
							}

							newFolder.isTeamspaceSubFolder != null ? newFolder.item.isTeamspaceSubFolder = newFolder.isTeamspaceSubFolder : newFolder.item.isTeamspaceSubFolder = false;
							newFolder.item.moveToFolder(this._items, sourceFolder, function() {
							}, permissions, inheritSecurity);
						} else {
							this._displayNoPermissionMessage();
						}
					}
				}
				this.onCancel();
			} else {
				// If they double click on a folder when they don't have permision to remove from the parent in the Move to Folder 
				// scenario, display the warning message.
				this.setMessage(this.messages.moveTeamspaceDocuments_move_no_permission_to_move_to_target, "info");
			}

			this.logExit(methodName);
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

		/**
		 * @private
		 */
		_onFileInChange: function() {
			var _this = this;
			this.onChangeDestination(this.fileInDropDown.getSelected());
			this.clearMessage();
			this.selectedDestinationFolder = this.fileInDropDown.getSelected().item;
			//var hasPermissionOnTargetFolder = this.selectedDestinationFolder.hasPrivilege("privAddToFolder");

			this._hasPermissionsOnTargetItem(lang.hitch(this, function(value) {
				this._hasPermissionToPerformActionOnSelectedFolder = value;

				var readOnly = this._isSecurityReadOnly();

				if ((this.fileInDropDown.getSelected().isTeamspaceSubFolder || this.selectedDestinationFolder.template == "Teamspace" || this.selectedDestinationFolder.template == "ICMTeamspace") && this._hasAllTeamspaceDocuments()) {
					this.inheritSecurity.set("checked", true);
					if (!this.repository._isCM()) {
						this.inheritSecurity.set("checked", true);
						this.inheritSecurity.set("disabled", false);
					} else {
						this.inheritSecurity.set("checked", false);
						this.inheritSecurity.set("disabled", false);
					}
				} else {
					if (this.selectedDestinationFolder["rootFolder"] || (this.repository && this.repository._isCM())) {
						this.inheritSecurity.set("checked", false);
						this.inheritSecurity.set("disabled", true);
					} else {
						this.inheritSecurity.set("disabled", false);
					}
				}
				//if (!readOnly) {
				//	this.overrideClassSecurity.set("checked", false);
				//	this.overrideClassSecurity.set("disabled", true);
				//}
				//this._renderSecurityOptions();
				if (!this._hasPermissionToPerformActionOnSelectedFolder)
					this.setMessage(this.messages.moveTeamspaceDocuments_move_no_permission_to_move_to_target, "info");
				//this._displayNoPermissionOnTarget();
				this._onFieldChange();
			}));
		},
		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (this.fileInDropDown)
				this.fileInDropDown.destroy();
			if (this._securityPane)
				this._securityPane.destroy();
			this._securityPane = null;
			this.fileInDropDown = null;
			this.inherited(arguments);
		},
		_hasPermissionsOnTargetItem: function(callback) {
			var item = this.selectedDestinationFolder;
			var _this = this;

			if (item["rootFolder"])
				callback(item.hasPrivilege("privAddToFolder"));
			else if (item.getContentClass().name == Teamspace.TEAMSPACE_NAME || item.getContentClass().name == Teamspace.TEAMSPACE_CONTENTCLASS_P8 || item.getContentClass().name == ecm.model.Teamspace.TEAMSPACE_CONTENTCLASS_CM8) {
				item.repository.retrieveItem(item.id, function(teamspaceItem) {
					_this.selectedDestinationFolder.privileges = teamspaceItem.privileges;
					callback(teamspaceItem.hasPrivilege("privAddToFolder"));
				});

			} else
				callback(item.hasPrivilege("privAddToFolder"));

		},
		/**
		 * @private
		 */
		_hasPermissionsToMoveAllSelected: function() {
			var allItemsHasPriv = true;
			array.forEach(this._items, function(item, i) {
				if (!item.hasPrivilege("privAddToFolder"))
					allItemsHasPriv = false;
			});
			return allItemsHasPriv;
		},
		/**
		 * @private
		 */
		_isValid: function() {
			var targetFolder = this.selectedDestinationFolder;
			return targetFolder.hasPrivilege("privAddToFolder");
		},
		/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._isValid() && this._hasPermissionsToMoveAllSelected())
				this._enableFinishButton(true);
			else
				this._enableFinishButton(false);

			if (this._initialized) {
				this.onFieldChange();
			}
		},

		_enableFinishButton: function(disabled) {
			this.okButton.set("disabled", !disabled);
		},
		/**
		 * Fired when save in value changes.
		 * 
		 * @param saveInValue
		 *            The selected {@link ecm.model.SelectedFolder} object.
		 */
		onChangeDestination: function(selectedValue) {
		},

		/**
		 * Fired when a field changes value.
		 */
		onFieldChange: function() {
			this.logEntry("onFieldChange");
		},

		/**
		 * @private Called when the checkbox for selecting users and groups is changed. Re-display the security pane.
		 */
		_onChangeOverrideClassSecurity: function() {
			this._renderDefaultPermission();
			this.onFieldChange();
		},
		/**
		 * @private Retrieves and renders the default permissions for the content class.
		 */
		_renderDefaultPermission: function() {
			var currentUserId = this.repository.userId;
			var userDisplayName = this.repository.userDisplayName != null ? this.repository.userDisplayName : this.repository.user_displayname;
			//var userDisplayName = this.repository.userDisplayName != null ? this.repository.userDisplayName : this.repository.user_displayname;
			var currentUser = {
				id: "CURRENT_USER",
				type: "user",
				name: currentUserId,
				shortName: currentUserId,
				displayName: userDisplayName,
				rolesDisplay: "",
				roles: []
			};

			var permissions = new Array();
			var permission = new Permission({
				id: currentUserId,
				name: currentUserId,
				displayName: userDisplayName,
				granteeType: Permission.GRANTEE_TYPE.USER,
				accessMask: this._getAccessMask("FULL_CONTROL"),
				accessType: Permission.ACCESS_TYPE.ALLOW,
				grantee: currentUser,
				readOnly: true,
				inheritableDepth: 0,
				permissionSource: Permission.PERMISSION_SOURCE.DIRECT
			});

			permissions.push(permission);

			this._permissions = permissions;
			this._securityPane.setRepository(this.repository);
			this._renderSecurityOptions();

		},

		/**
		 * @private
		 */
		_allSelectedDocumentsHasModifyPriv: function() {

			if (this._items.length == 1) {
				var item = this._items[0];
				var readOnly = item.repository.type == "cm" ? !item.hasPrivilege("privEditProperties") || !item.hasPrivilege("privCheckOutDoc") : !item.hasPrivilege("privEditProperties");
				var canModifyPermissions = item.repository.type == "cm" ? !readOnly : item.hasPrivilege("privModifyPermissions");

				return canModifyPermissions;
			} else {
				var allCanModifyPermissions = true;
				array.forEach(this._items, function(item, i) {
					var readOnly = item.repository.type == "cm" ? !item.hasPrivilege("privEditProperties") || !item.hasPrivilege("privCheckOutDoc") : !item.hasPrivilege("privEditProperties");
					var canModifyPermissions = item.repository.type == "cm" ? !readOnly : item.hasPrivilege("privModifyPermissions");
					if (!canModifyPermissions)
						allCanModifyPermissions = false;
				});

				return allCanModifyPermissions;
			}
		},
		/**
		 * @private
		 */
		_hasSomeTeamspaceReferencDocuments: function() {
			var _this = this;
			if (this._items.length == 1) {
				var isTeamspaceSecurityProxy = false;
				var item = this._items[0];
				if (this.repository._isCM() && item.parent)
					isTeamspaceSecurityProxy = item["aclName"] == item.parent["aclName"] ? true : false;
				else
					isTeamspaceSecurityProxy = item["securityFolderId"] == _this.teamspace.id ? true : false;
				return !isTeamspaceSecurityProxy;
			} else {
				var hasReferenceDoc = false;
				var isTeamspaceSecurityProxy = false;
				array.forEach(this._items, function(item, i) {
					if (_this.repository._isCM() && item.parent)
						isTeamspaceSecurityProxy = item["aclName"] == item.parent["aclName"] ? true : false;
					else
						isTeamspaceSecurityProxy = item["securityFolderId"] == _this.teamspace.id ? true : false;
					if (!isTeamspaceSecurityProxy)
						hasReferenceDoc = true;
				});

				return hasReferenceDoc;
			}
		},

		/**
		 * @private
		 */
		_hasSomeTeamspaceDocuments: function() {
			var _this = this;
			if (this._items.length == 1) {
				var isTeamspaceSecurityProxy = false;
				var item = this._items[0];
				if (this.repository._isCM() && item.parent)
					isTeamspaceSecurityProxy = item["aclName"] == item.parent["aclName"] ? true : false;
				else
					isTeamspaceSecurityProxy = item["securityFolderId"] == _this.teamspace.id ? true : false;

				return isTeamspaceSecurityProxy;
			} else {
				var hasTeamspaceDocument = false;
				var isTeamspaceSecurityProxy = false;
				array.forEach(this._items, function(item, i) {
					if (_this.repository._isCM() && item.parent)
						isTeamspaceSecurityProxy = item["aclName"] == item.parent["aclName"] ? true : false;
					else
						isTeamspaceSecurityProxy = item["securityFolderId"] == _this.teamspace.id ? true : false;

					if (isTeamspaceSecurityProxy)
						hasTeamspaceDocument = true;
				});

				return hasTeamspaceDocument;
			}
		},
		/**
		 * @private
		 */
		_hasAllTeamspaceDocuments: function() {
			var _this = this;
			if (this._items.length == 1) {
				var isTeamspaceSecurityProxy = false;
				var item = this._items[0];
				if (this.repository._isCM() && item.parent)
					isTeamspaceSecurityProxy = item["aclName"] == item.parent["aclName"] ? true : false;
				else
					isTeamspaceSecurityProxy = item["securityFolderId"] == _this.teamspace.id ? true : false;

				return isTeamspaceSecurityProxy;
			} else {
				var allHasSecurityFolder = true;
				var isTeamspaceSecurityProxy = false;
				array.forEach(this._items, function(item, i) {
					if (_this.repository._isCM() && item.parent)
						isTeamspaceSecurityProxy = item["aclName"] == item.parent["aclName"] ? true : false;
					else
						isTeamspaceSecurityProxy = item["securityFolderId"] == _this.teamspace.id ? true : false;

					if (isTeamspaceSecurityProxy)
						allHasSecurityFolder = false;
				});

				return allHasSecurityFolder;
			}
		},
		/**
		 * @private
		 */
		_hasCM8ItemTypeACLDocuments: function() {
			var _this = this;

			if (!this.repository._isCM())
				return false
			else if (this._items.length == 1) {
				var isItemTypeLevelACL = this._items[0]["isItemTypeLevelACL"] == true ? true : false;
				if (isItemTypeLevelACL)
					this.setMessage(this.messages.moveTeamspaceDocuments_item_type_level, "info");
				return isItemTypeLevelACL;
			} else {
				var isItemTypeLevelACL = false;
				array.forEach(this._items, function(item, i) {
					isItemTypeLevelACL = item["isItemTypeLevelACL"] == true ? true : false;
				});
				if (isItemTypeLevelACL)
					this.setMessage(this.messages.moveTeamspaceDocuments_item_type_level, "info");
				return isItemTypeLevelACL;
			}
		},

		_isSecurityReadOnly: function() {
			var isReadOnly = false;// !this.overrideClassSecurity.get("checked"); //&& this._canModifyPermissions;
			if (this.repository && this.repository._isCM()) {
				domStyle.set(this.inheritSecuritySection, "display", "none");
				isReadOnly = this._hasCM8ItemTypeACLDocuments();
			}
			if (!isReadOnly && this._hasSomeTeamspaceReferencDocuments()) {
				isReadOnly = true; // this._allSelectedDocumentsHasModifyPriv();
			}
			isReadOnly = !this.overrideClassSecurity.get("checked");
			return isReadOnly;
		},

		/**
		 * @private Renders the permissions in the security pane.
		 */
		_renderSecurityOptions: function() {
			this._securityPane.reset();
			var securityPolicy = null;

			var isReadOnly = this._isSecurityReadOnly();
			if (this._hasSomeTeamspaceDocuments() && this._hasSomeTeamspaceReferencDocuments()) {
				this.overrideClassSecurity.set("checked", false);
				this.overrideClassSecurity.set("disabled", true);
				this.inheritSecurity.set("checked", false);
				this.inheritSecurity.set("disabled", true);
				isReadOnly = true;
				if (!this._hasCM8ItemTypeACLDocuments()) // if we already displaying item type level ACL message
					this._displayMixedItemsdMessage();
			} else if (this._hasSomeTeamspaceReferencDocuments()) {
				isReadOnly = true;
				if (isReadOnly) {
					this.overrideClassSecurity.set("checked", false);
					this.overrideClassSecurity.set("disabled", true);
					this.inheritSecurity.set("checked", false);
					this.inheritSecurity.set("disabled", true);

				}

				if (!this._hasCM8ItemTypeACLDocuments()) { // if we already displaying item type level ACL message
					if (this._allSelectedDocumentsHasModifyPriv())
						this.setMessage(this.messages.moveTeamspaceDocuments_move_mixed_items, "info");
					else
						this.setMessage(this.messages.moveTeamspaceDocuments_move_no_permission_to_move_document, "info");
				}

			}

			this._securityPane.renderPermissions(this._permissions, null, securityPolicy, true, isReadOnly, false, false);
			if (!this._initialized) {
				setTimeout(lang.hitch(this, function() {
					this._initialized = true;
				}), 500);
			}
		},
		/**
		 * Returns the current permission array.
		 * 
		 * @return Returns an array of {@link ecm.model.Permission}
		 */
		getPermissions: function() {
			if (this._initialized && this.overrideClassSecurity.get("checked")) {
				return this._securityPane.getPermissions();
			}

			return null;
		},

		/**
		 * @Private
		 */
		_getAccessMask: function(priviligeId) {
			var mask = 0;
			var privs = this._securityUtil._getDocumentPrivileges(this.repository);

			array.some(privs, function(privilege) {
				if (privilege.id == priviligeId) {
					mask = privilege.mask;
					return true;
				}
			});
			return mask;
		}

	});
});

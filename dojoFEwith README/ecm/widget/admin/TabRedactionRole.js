/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/string",
	"dojo/dom-construct",
	"dojo/_base/array",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/_base/sniff",
	"dojo/dom-class",
	"dojo/aspect",
	"dojo/store/Memory",
	"dojo/json",
	"dojo/keys",
	"dojox/uuid/Uuid",
	"dojox/uuid/generateRandomUuid",	
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"idx/html",
	"gridx/modules/SingleSort",
	"dijit/form/DropDownButton",
	"dijit/Dialog",
	"idx/widget/SloshBucket",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Permission",
	"ecm/model/Role",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/RepositoryData",
	"ecm/widget/admin/_RedactionAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/RadioButton",
	"ecm/widget/Select",
	"ecm/widget/dialog/UserGroupPermissionDialog",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"dojo/text!./templates/TabRedactionRole.html"
], function(declare, lang, string, domConstruct, dojoArray, attr, style, has, domClass, aspect, MemoryStore, json, keys, Uuid, generateRandomUuid,  _Widget, _TemplatedMixin, //
_WidgetsInTemplateMixin, Button, ContentPane, BorderContainer, idxHtml, SingleSort, DropDownButton, Dialog, //
SloshBucket, MessagesMixin, LoggerMixin, Permission, Role, AdminData, RepositoryData, _RedactionAdminTabBase, HoverHelp, ValidationTextBox, //
RadioButton, Select, UserGroupPermissionDialog, BidiComplex, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRedactionRole
	 * @class Provides a widget that is used to add a redaction role or edit the values for a redaction role.
	 */
	return declare("ecm.widget.admin.TabRedactionRole", [
		_RedactionAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabRedactionRole.prototype */

		templateString: template,
		widgetsInTemplate: true,
		
		repository: null,
		roleType: null,
		repositoryData: null,
		selectedMembers: [],
		
		_directoriesById: {},
		_addedDirectories: false,
		_MAX_SEARCH_ROWS: 500,
		_editingViewerRole: false,
		_settingAccess: false,

		postCreate: function() {
			this.colorList = [];
			this.hoverHelpList = [];

			this.resetButton.set("title", this.messages.reset_hover);

			this._setHoverHelp();
			if (has("dojo-bidi")) {
				this.set("textDir", has("text-direction"));
			}
			this._isSloshBucketLoaded = false;
			//this.sloshBucket.getGridTooltipText = lang.hitch(this, "_getGridTooltipText");
			this.own(aspect.after(this.sloshBucket, "onAddRemove", lang.hitch(this, "_onAddRemoveItems")));
			this.own(aspect.after(this.sloshBucket, "onMoved", lang.hitch(this, "_onFieldChange")));			
			var filterDataFunc = lang.hitch(this, "_filterData");
			this.own(aspect.after(this._filter, "_onInput", filterDataFunc));
			this.own(aspect.after(this._filter, "_setValueAttr", filterDataFunc));
			
			style.set(this.sloshBucket._moveUpDownButtonContainer, "display", "none");
			
			var accessOptions = [{
				value: Permission.ACCESS_TYPE.ALLOW,
				label: this.messages.admin_repository_redaction_role_access_type_access,
				selected: true
			}, 
			{
				value: Permission.ACCESS_TYPE.DENY,
				label: this.messages.admin_repository_redaction_role_access_type_no_access,
			}];
			this.access.addOption(accessOptions);
			this.addAs.addOption(accessOptions);
		
			this._filter.set("placeholder", this.messages.name_contains_label);
		},

		destroy: function() {
			this.inherited(arguments);

			if (this.hoverHelpList) {
				dojoArray.forEach(this.hoverHelpList, function(hoverHelp) {
					if (hoverHelp)
						hoverHelp.destroy();
				}, this);
			}
		},

		/**
		 * Addes the strikethrough for access denied members.
		 * 
		 * @private
		 */
		_onAddRemoveItems: function() {
			
			// Copy the current members array, then add new with access level.
			var previousMembers = this.selectedMembers.slice(0);
			this.selectedMembers = [];
			var selectedData = this.sloshBucket.getSelectedItems();
			for (var i = 0; i < selectedData.length; i++) {
				var selectedMember = selectedData[i];
				if (dojo.indexOf(previousMembers, selectedMember) == -1){
					selectedMember = this._formatSelectedUserGroup(selectedMember, this.addAs.value);
				}
				this.selectedMembers.push(selectedMember);
			}
			this._onFieldChange();
		},
		
		/**
		 * @private
		 */
		_formatSelectedUserGroup: function(selectedMember, access){
			
			// Add HTML for strikethrough for denied access
			var html = "<span ";
			if (access == Permission.ACCESS_TYPE.DENY){
				html += "class='ecmRoleDenied'"
			}
			html += ">";
			html += selectedMember.displayName;
			html += "</span>";
			selectedMember.formattedDisplayName = html;
			selectedMember.access = access;
			return selectedMember;
		},
		
		/**
		 * @private
		 */
		_onReset: function(){
			
			// Need to re-initialize the selected items list so all items in the available list will be shown.
			this._initialized = false;
			this._initializeSelectedItems("");
			this.inherited(arguments);
			this._initialized = true;
		},
		
		/**
		 * Handles adding new redaction editors.
		 * 
		 * @private
		 */
		_selectRedactionUserGroupClick: function(){
			var data = this.repositoryData.repositoryConfig.getRedactionPermissions();
			this._showSelectUserGroupPermissionDialog(data, lang.hitch(this, function() {
				this._onFieldChange();
				this.repositoryData.repositoryConfig.setRedactionPermissions(json.stringify(data));
				this.repositoryData.repositoryConfig.setRedactionPolicyPermissions(json.stringify(this.repositoryData.repositoryConfig.getRedactionPolicyPermissions()));
				this.repositoryData.updateRedactionPermissions(true, lang.hitch(this, function(){
					this.repositoryData.loadData(lang.hitch(this, function() {
					}));
				}));
			}));
		},
		
		/**
		 * Shows the add users dialog.
		 * 
		 * @private 
		 */
		_showSelectUserGroupPermissionDialog: function(data, callback, defaultPermission) {
			var repository = this.repositoryData.repository;
			if (!repository.privileges.findUsersAndGroups) {
				if (!this._errorDialog) {
					this._errorDialog = new ErrorDialog();
				}
				this._errorDialog.showMessage(Message.createErrorMessage("admin_cannot_select_users_groups_error"));

			} else {
				if (this._userGroupPermissionDialog) {
					this._userGroupPermissionDialog.destroy();
				}

				var selectedUserGroups = [];
				var permissions = [];
				dojoArray.forEach(data, lang.hitch(this, function(accessControlItem) {
					if (accessControlItem.selectable) {
						permissions.push({
							value: accessControlItem.id,
							label: accessControlItem.label
						});
					}
					dojoArray.forEach(accessControlItem.usersGroups, lang.hitch(this, function(userGroup) {
						selectedUserGroups.push(userGroup);
					}));
				}));

				this._userGroupPermissionDialog = new UserGroupPermissionDialog({
					permissions: permissions,
					filteredItems: selectedUserGroups,
					defaultScope: "groups",
					defaultPermission: defaultPermission,
					showPseudoGroups: false,
					repository: repository,
					callback: lang.hitch(this, function(permissionId, selectedUserGroups) {
						for ( var j in data) {
							var accessControlItem = data[j];
							if (accessControlItem.id == permissionId) {
								for (k in selectedUserGroups) {
									accessControlItem.usersGroups.push(selectedUserGroups[k]);
									this.sloshBucket.availableGrid.model.store.add(selectedUserGroups[k]);
									this.sloshBucket.addToSelected(selectedUserGroups[k]);
								}
								break;
							}
						}
						if (callback) {
							callback();
						}
					})
				});
				this._userGroupPermissionDialog.show(repository);
			}
		},
		
		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this._initialized = false;
			this._disableSave();
			this._disableReset();
			var name = this._myAdminModel ? this._myAdminModel.name : this.messages.admin_repository_redaction_new;

			if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				this.action = "copy";
				this.setTitle(this.messages.admin_repository_redaction_new);
				if (this._myAdminModelForCopy.type == Role.ROLE_TYPE.USER){
					this._editingViewerRole = true;
				}
			} else if (this._myAdminModel && this._myAdminModel.id) {
				this.id = this._myAdminModel.id;
				this.action = "edit";
				this.setTitle(this._myAdminModel.name);
				if (this._myAdminModel.type == Role.ROLE_TYPE.USER){
					this._editingViewerRole = true;
				}
			} else {
				this.action = "new";
				this.setTitle(this.messages.admin_repository_redaction_new);
				if (this.roleType == Role.ROLE_TYPE.USER){
					this._editingViewerRole = true;
				}
			}

			this.setInstructions(this.getInstructions());
			
			// Display the repository name.
			if (this.repository){

				this._updateName(name);
				
				var repositoryName = this.repository.name;
				if (has("text-direction")) {
					repositoryName = this.enforceTextDirWithUcc(null, repositoryName);
				}
				domConstruct.place("<label>" + string.substitute(this.messages.admin_repository_generic_heading, [
				    repositoryName
				]) + "</label>", this.repositoryText, "only");
				
				this._checkSave();
				
				// Get the repository data associated with the current repository.
				this.repositoryData = RepositoryData.createRepositoryData(this.repository.id, "edit", this.repository.type, "repos.repos");
				this.repositoryData.repository = this.repository;
				this.repositoryData.loadData(lang.hitch(this, function() {
					this._loadData();
					setTimeout(lang.hitch(this, function() {
						this._initialized = true;
					}), 300);
				}));
			}
			this.resize();
		},
		
		/**
		 * @private
		 */
		_updateName: function(name) {
			if (has("text-direction")) {
				name = this.enforceTextDirWithUcc(null, name);
			}
			domConstruct.place("<label>" + string.substitute(this.messages.admin_repository_edit_redaction_role, [
			                                name
			]) + "</label>", this.headingText, "only");
		},
		
		setRepository: function(repository){
			this.repository = repository;
		},
		
		setInstructions: function(msg) {
			this.instructions.appendChild(document.createTextNode(msg));
		},
		
		getInstructions: function() {
			return this.messages.admin_repository_redaction_roles_instruction;
		},
		/**
		 * @private
		 */
		_setHoverHelp: function() {
			this.descriptionField.setHoverHelp(this.descriptionFieldHoverHelp);
			this.nameField.setHoverHelp(this.nameFieldHoverHelp);
			
		},

		// Called when the tab is selected
		onSelect: function() {
			if (!this._isSloshBucketLoaded) {
				this._loadData();
			}
		},
		
		// override
		onMarkDirty: function() {
		},

		// override 
		onCheckSave: function() {
		},
		
		_loadData: function() {
			this._isSloshBucketLoaded = false;
			
			// Populating any existing data in the  model
			var adminModel = this._myAdminModel ? this._myAdminModel : this._myAdminModelForCopy;
			if (adminModel) {
				if (this.action == "edit"){
					this.nameField.set("value", adminModel.name);
				}
				else {
					this.nameField.set("value", "");
				}
				this.descriptionField.set("value", adminModel.description);
				
				if (adminModel.type == Role.ROLE_TYPE.AUTHOR){
					this.enableTypeEditor.set("checked", true);
					this.enableTypeViewer.set("checked", false);
				}
				else {
					this.enableTypeViewer.set("checked", true);
					this.enableTypeEditor.set("checked", false);
				}
				this.enableTypeEditor.set("disabled", true);
				this.enableTypeViewer.set("disabled", true);
				
				// Get members.
				this.selectedMembers = [];
				for (var i = 0; i < adminModel.assignees.length; i++){
					var userGroup = dojo.clone(adminModel.assignees[i]);
					userGroup = this._formatSelectedUserGroup(userGroup, userGroup.accessType);
					this.selectedMembers.push(userGroup);
				}
				this._loadSloshBucket(!this._editingViewerRole, this.selectedMembers.slice());
			}  
			else {
				this.nameField.set("value", "");
				this.descriptionField.set("value", "");
				this.enableTypeEditor.set("checked", true);
				
				if (this.roleType != null){
					if (this.roleType == Role.ROLE_TYPE.AUTHOR){
						this.enableTypeEditor.set("checked", true);
						this.enableTypeViewer.set("checked", false);
					}
					else if (this.roleType == Role.ROLE_TYPE.USER){
						this.enableTypeViewer.set("checked", true);
						this.enableTypeEditor.set("checked", false);
					}
					this.enableTypeEditor.set("disabled", true);
					this.enableTypeViewer.set("disabled", true);
				}
				this._loadSloshBucket(!this._editingViewerRole);
			}
			this.descriptionField.pattern = '([^"*|<>?:\\\\/])*';
			this.descriptionField.invalidMessage = this.messages.admin_reason_code_description_invalid;
			
			this.nameField.pattern = '([^"*|<>?:\\\\/])*';
			this.nameField.invalidMessage = this.messages.admin_reason_code_name_invalid;
			
			setTimeout(lang.hitch(this, function() {
				this.onCheckSave();
				//if (onComplete) {
				//	onComplete();
				//}
				this._isSloshBucketLoaded = true;
			}), 100);
		},
		
		_filterData: function() {
			var value = this._filter.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this.sloshBucket.filter({
					name: value
				});
			}
		},
		
		/**
		 * @private
		 */
		_loadSloshBucket: function(editor, selectedUsersGroups) {
			var availableHeader;
			var selectedHeader;
			var availItems = [];
			if (editor){
				availableHeader = this.messages.admin_repository_redaction_role_avail_editors;
				selectedHeader = this.messages.admin_repository_redaction_role_selected_editors;
				availItems = this._getClonedRedactionEditors();
			}
			else {
				availableHeader = this.messages.admin_repository_redaction_role_avail_users;
				selectedHeader = this.messages.admin_repository_redaction_role_selected_users_groups;
			}

			this._initializeAvailableItems(availItems, availableHeader);

			this._filter.set('value', '');
			
			this._initializeSelectedItems(selectedHeader, selectedUsersGroups);
			
			if (has("text-direction") && this.sloshBucket.selectedGrid) {
				this.sloshBucket.selectedGrid.set("textDir", has("text-direction"));
			}
			
			this.own(aspect.after(this.sloshBucket.selectedGrid.select.row, "onSelectionChange", lang.hitch(this, "_setAccessControl")));
		},
		
		/**
		 * Gets the set of redaction editors for displaying in the slosh bucket.
		 * 
		 * @private
		 */
		_getClonedRedactionEditors: function(){
			var clonedEditors = [];
			var redactionPermissions = this.repositoryData.repositoryConfig.getRedactionPermissions();
			for (var i = 0; i < redactionPermissions.length; i++){
				var permission = redactionPermissions[i];
				if (permission.id == "creators" || permission.id == "owners") {
					for (var j = 0; j < permission.usersGroups.length; j++){
						var userGroup = permission.usersGroups[j]; 
						// It doesn't make sense to use #CREATOR-OWNER in a role.
						// The purpose of a #CREATOR-OWNER assignment in the ClbRoleBasedRedaction annotation class definition security 
						// is to grant the creator of child classes of ClbRoleBasedRedaction owner level access to the child classes.
						if (userGroup.isGroup || userGroup.id != "#CREATOR-OWNER") {
							clonedEditors.push(dojo.clone(userGroup));
						}
					}
				}
			}
			return clonedEditors;
		},
		
		/**
		 * Initializes the available items part of the slosh bucket.
		 * 
		 * @private
		 */
		_initializeAvailableItems: function(items, header){
			var availableColumnsStructure = [
			{
				field: "displayName",
				name: header,
				width: "100%"
			}];
			
			// Remove any items already selected from the items we will make available.
			var filteredItems
			var selectedItems = this.sloshBucket.getSelectedItems();
			if (selectedItems.length == 0){
				filteredItems = items;
			}
			else {
				filteredItems = dojo.filter(items, function(item){
					var found = false;
					for (var i = 0; i < selectedItems.length; i++){
						var selectedItem = selectedItems[i];
						if (selectedItem.id == item.id){
							found = true;
							break;
						}
					}
					if (!found){
						return item;
					}
				});
			}
			
			var modules = [{
				moduleClass: SingleSort,
				initialOrder: [{
						colId: 1,
						descending: false
					}]
			}];
			this.sloshBucket.availableGridModules = modules;
			
			var store = new MemoryStore({
				data: filteredItems,
				comparatorMap: {
					"displayName": this._localeCompare
				}
			});
			this.sloshBucket.setAvailableGridData(store, availableColumnsStructure);
			if (has("text-direction") && this.sloshBucket.availableGrid) {
				this.sloshBucket.availableGrid.set("textDir", has("text-direction"));
			}
		},
		
		/**
		 * Initializes the selected items part of the slosh bucket.
		 * 
		 * @private
		 */
		_initializeSelectedItems: function(header, selectedUsersGroups){
			var selectedItems = [];
			if (selectedUsersGroups){
				selectedItems = selectedUsersGroups;
			}
			
			var selectedStore = new MemoryStore({
				data: selectedItems,
				comparatorMap: {
					"formattedDisplayName": this._localeCompare
				}
			});
			var selectedColumnsStructure = [
				{
					field: "formattedDisplayName",
					name: header,
					decorator: function(data){
						return data;
					}
				}
			];
			
			var modules = [{
				moduleClass: SingleSort,
				initialOrder: [{
						colId: 1,
						descending: false
					}]
			}];
			this.sloshBucket.selectedGridModules = modules;
			
			var fixedArray = [];
			this.sloshBucket.setSelectedGridData(selectedStore, selectedColumnsStructure, fixedArray);
		},
		
		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			return false;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			
			if (this.action == "edit" && this._myAdminModel) {
				this._loadWithFieldValues(this._myAdminModel);
				this.repository.updateRedactionRole(this._myAdminModel, lang.hitch(this, function(){
					this._updateName(this._myAdminModel.name);
					this.setTitle(this._myAdminModel.name);
					if (onComplete) {
						onComplete(true);
					}
				}));
			}
			else{
				var newRole = new Role();
				this._loadWithFieldValues(newRole);
				this.repository.createRedactionRole(newRole, lang.hitch(this, function(addedRole){
					this._myAdminModelForCopy = null;
					this._myAdminModel = addedRole;
					this._updateName(addedRole.name);
					this.setTitle(addedRole.name);
					this.action = "edit";
					this._checkSave();
					this.addedRole(addedRole);
					if (onComplete) {
						onComplete(true);
					}
				}));
			}
		},
		
		addedRole: function(newRole){			
		},

		_loadWithFieldValues: function(adminModel) {
			
			adminModel.name = idxHtml.escapeHTML(this.nameField.get("value"));
			adminModel.description = idxHtml.escapeHTML(this.descriptionField.get("value"));
			
			// Create the set of members that will be added/modified
			var members = [];
			for (var i = 0; i < this.selectedMembers.length; i++){
				var member = {};
				var selectedMember = this.selectedMembers[i];
				member.name = selectedMember.shortName ? selectedMember.shortName : selectedMember.name;
				member.access = selectedMember.access;
				member.displayName = selectedMember.displayName;
				member.id = selectedMember.id;
				
				if (selectedMember.principalType == 1){
					member.isGroup = false;
				}
				else if (selectedMember.principalType == 2){
					member.isGroup = true;
				} else if (selectedMember.declaredClass ==  "ecm.model.User"){
					member.isGroup = false;
				}
				else if (selectedMember.declaredClass ==  "ecm.model.UserGroup"){
					member.isGroup = true
				}
				else if (selectedMember.isGroup != null){
					member.isGroup = selectedMember.isGroup;
				}
				members.push(member);
			}
			adminModel.assignees = members;
			
			var roleType;
			if (this.enableTypeEditor.get("checked") == true){
				roleType = Role.ROLE_TYPE.AUTHOR;
			}
			else {
				roleType = Role.ROLE_TYPE.USER;
			}
			adminModel.type = roleType;
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			if (!this.nameField.isValid()) {
				return false;
			}
			else if (this.sloshBucket.getSelectedItems().length == 0){
				return false;
			}
			return true;
		},

		/**
		 * Handles the resize of this widget.
		 */
		resize: function() {
			this.inherited(arguments);
			this.borderContainer.resize();
		},
		
			/**
		 * @private
		 */
		_onFieldChange: function() {
			if (this._isSloshBucketLoaded) {
				this.onMarkDirty();
			}
			if (this._initialized) {
				this._markDirty();
			}
		},
		
		/**
		 * Called when the Editor or  Viewer radio buttons are clicked
		 * 
		 * @private
		 */
		_onTypeChange: function(){
			if (this.enableTypeEditor.checked){
				this._displayEditorIU(true, false);				
				this.membershipFieldHoverHelp.set("message", this.messages.admin_repository_redaction_roles_membership_hover);
				if (this._initialized){
					this.selectedMembers = [];
					this._loadSloshBucket(true);
				}
			}
			else {
				this.typeUser.set("checked", true);
				this._displayEditorIU(false, true);
				this.membershipFieldHoverHelp.set("message", this.messages.admin_repository_redaction_roles_user_group_hover);
					
				if (this._directoryName.options.length == 0){
						
					// Get the directories in the repository. Display the selector if there is more than one.
					this.repository.getDirectories(lang.hitch(this, function(domains){
						this._directoriesById = {};
						dojoArray.forEach(domains, function(dir) {
							this._directoriesById[dir.id] = dir;
						}, this);
	
						var selectOptions = [];
						for ( var i = 0; i < domains.length; i++) {
							var directory = domains[i];
							var selectOption = {
								value: directory.id,
								label: idxHtml.escapeHTML(directory.name)
							};
							selectOptions.push(selectOption);
						}
						
						if (!this._addedDirectories){
							this._directoryName.addOption(selectOptions);
							this._directoryName.selected = true;
						}
						this._addedDirectories = true;

						// Don't display the realm selector if there is only one realm listed.
						if (this._directoryName.options.length < 2) {
							domClass.add(this._directorySection, "dijitHidden");
						}
					}));
				}
				if (this._initialized){
					this._loadSloshBucket(false);
				}
			}
		},
		
		/**
		 * Called when the user clicks on one of the viewer type radio buttons
		 * 
		 * @private
		 */
		_onUserTypeChange: function(){
			if (this.typeEditor.checked){
				this._displayEditorIU(true, true);
				var availItems = this._getClonedRedactionEditors();
				this._initializeAvailableItems(availItems, this.messages.admin_repository_redaction_role_avail_editors);
			}
			else {
				this._displayEditorIU(false, true);
				
				var header;
				if (this.typeUser.checked){
					header = this.messages.admin_repository_redaction_role_avail_users;
				}
				else {
					header = this.messages.admin_repository_redaction_role_avail_groups;
				}
				this._initializeAvailableItems([], header);
			}
		},
		
		/**
		 * Displays or hides the editor UI
		 * 
		 * @private
		 */
		_displayEditorIU: function(display, displayTypes){
			if (display){
				// Display the editor UI
				style.set(this._filterDiv, "display", "inline");
				style.set(this._cmRedactionAccessControlButton.domNode, "display", "inline");
				
				style.set(this.userGroupSearchSection, "display", "none");
			}
			else {
				// Hide the editor UI
				style.set(this._filterDiv, "display", "none");
				style.set(this._cmRedactionAccessControlButton.domNode, "display", "none");
				
				style.set(this.userGroupSearchSection, "display", "inline");
			}
			
			if (displayTypes){
				style.set(this.typeMemberSection, "display", "inline");
			}
			else {
				style.set(this.typeMemberSection, "display", "none");
			}
		},
		
		/**
		 * Handles key press events for the search text box.
		 * 
		 * @private
		 */
		_onSearchKeyPress: function() {
			if (this._criteriaTextBox.get("value").length > 0) {
				if (event.keyCode == keys.ENTER) {
					this._onSearch(event);
				}
				this._searchButton.set("disabled", false);
			} else {
				this._searchButton.set("disabled", true);
			}
		},
		
		/**
		 * Executes a user or group search
		 * 
		 * @private
		 */
		_onSearch: function(){
			style.set(this._searchMessageSection, "display", "none");
			var query = this._criteriaTextBox.get("value");
			var directoryName = null;
			if (query.length > 0) {
				directoryName = this._directoryName.value;

				if (this.typeUser.checked){
					this.repository.findUsers(lang.hitch(this, "_onUserGroupSearchComplete"), directoryName, query, null, null, (this._MAX_SEARCH_ROWS + 1).toString(), null, false, false);
				} else{
					this.repository.findGroups(lang.hitch(this, "_onUserGroupSearchComplete"), directoryName, query, null, null, (this._MAX_SEARCH_ROWS + 1).toString(), null, false);
				}
			}
		},
		
		/**
		 * Displays user or group search results in the available items list.
		 * 
		 * @private
		 */
		_onUserGroupSearchComplete: function(response){
			// Display a warning message if there are more results.
			if (response.length > this._MAX_SEARCH_ROWS) {
				var warningMessage = idxHtml.escapeHTML(lang.replace(this._messages.more_items, [
				                             			                     					this._MAX_SEARCH_ROWS
				                             				                     				]));
				this._searchMessageLabel.innerHTML = warningMessage;
				style.set(this._searchMessageSection, "display", "inline");
			}
			
			var header;
			if (this.typeUser.checked){
				header = this.messages.admin_repository_redaction_role_avail_users;
			}
			else {
				header = this.messages.admin_repository_redaction_role_avail_groups;
			}
			this._initializeAvailableItems(response, header);
		},
		
		_onSearchMouseOut: function(){
			this._searchButton.set("disabled", this._criteriaTextBox.get("value").length == 0);
		},
		
		_setAccessControl: function(){
			var selected = this.sloshBucket.selectedGrid.select.row.getSelected();
			if (selected.length > 0){
				this.access.set("disabled", false);
				var row = this.sloshBucket.selectedGrid.row(selected[0]);
				if (row) {
					var item = row.item();
					if (this.access.get("value") != item.access){
						this._settingAccess = true;
						this.access.set("value", item.access);
					}
				}
			}
			else {
				this.access.set("disabled", true);
			}
		},
		
		_onAccessChange: function(){
			if (!this._settingAccess){
				var access = this.access.value;
				
				// Get the selected items in the right pane.
				var selectedItemsRightPane = {};
				var selected = this.sloshBucket.selectedGrid.select.row.getSelected();
				for ( var i = 0; i < selected.length; i++) {
					var row = this.sloshBucket.selectedGrid.row(selected[i]);
					if (row) {
						selectedItemsRightPane[row.id] = row.item();
					}
				}
				
				// Iterate through the selected items array and change access.
				for (var i = 0; i < this.selectedMembers.length; i++){
					var selectedMember = this.selectedMembers[i];
					if (selectedItemsRightPane[selectedMember.id]){
						selectedMember = this._formatSelectedUserGroup(selectedMember, access);
						this.sloshBucket.selectedGrid.model.store.put(selectedMember, {overwrite: true});
						this._onFieldChange();
					}
				}
			}
			this._settingAccess = false;
		}
	});
});

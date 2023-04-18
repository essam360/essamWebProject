/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
    	"dojo/_base/declare",
    	"dojo/_base/lang",
    	"dojo/_base/connect",
        "dojo/_base/Deferred",
    	"dojo/date/locale",
    	"dojo/dom-class",
    	"dojo/dom-style",
    	"dojo/store/Memory",
    	"dojo/aspect",
    	"dojo/string",
    	"dojo/on",
    	"dojo/store/util/QueryResults",
    	"dijit/_Widget", 
    	"dijit/_TemplatedMixin", 
    	"dijit/_WidgetsInTemplateMixin",
    	"dojox/validate/web",
    	"gridx/Grid",
    	"gridx/core/model/cache/Sync",
    	"gridx/modules/Focus",
    	"gridx/modules/select/Row",
    	"gridx/modules/SingleSort",
    	"gridx/modules/ColumnResizer",
    	"gridx/modules/CellWidget",
    	"gridx/modules/Body",
    	"gridx/modules/Edit",
    	"gridx/modules/Filter",
    	"dijit/Tooltip",
    	"idx/html",
    	"ecm/LoggerMixin",
    	"ecm/MessagesMixin",
    	"ecm/widget/Button",
    	"dijit/form/Select",
    	"ecm/widget/DropDownLink",
    	"ecm/widget/DropDownDialog",
    	"./EditorPermissionLink",
    	"dijit/layout/ContentPane",
    	"dijit/layout/BorderContainer",
    	"ecm/widget/ComboBox",
    	"ecm/widget/HoverHelp",
    	"ecm/model/BoxCollaborator",
    	"ecm/widget/dialog/ConfirmationDialog",
    	"dojo/text!./templates/ItemCollaborationPane.html",
], function(declare, lang, connect, Deferred, locale, domClass, domStyle, MemoryStore, aspect, string, on, QueryResults, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, web, 
		Grid, Cache, Focus, SelectRow, SingleSort, ColumnResizer, CellWidget, Body, Edit, FilterModule, 
		Tooltip, idxHtml, MessagesMixin, LoggerMixin, Button, Select, DropDownLink, DropDownDialog, EditorPermissionLink, ContentPane,
		BorderContainer, ComboBox, HoverHelp, BoxCollaborator, ConfirmationDialog, template) {
	/**
	 * @name ecm.widget.ItemCollaborationPane
	 * @since 3.0
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.ItemCollaborationPane", [
	      _Widget, 
	      _TemplatedMixin, 
	      _WidgetsInTemplateMixin, 
	      MessagesMixin, 
	      LoggerMixin
	], {
		/** @lends ecm.widget.ItemCollaborationPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		_originalCollaborators: null,
		_membersStore: null,
		_boxLoggedInUserId: null,
		_prevFilter: "",
		_usersStore: null,
		_item: null,
		_currentUserPermission: null, 
		_readOnly: true,
		
		postCreate: function() {
			this.inherited(arguments);
			
			domClass.add(this._permissionHoverHelp._dialog.domNode, "permissionHoverHelpDialog");
			
			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._filter.set("placeholder", ecm.messages.name_contains_label);
			this._inviteTextBox.set("placeholder", ecm.messages.box_collaboration_invite_placeholder);
		},
		
		setItem: function(item, readOnly){
			this._item = item;
			this._boxLoggedInUserId = item.repository.userId;
			this._readOnly = readOnly ? readOnly : !item.hasPrivilege("privModifyPermissions");
			
			if (this._item.repository.privileges.findUsersAndGroups){
				this._inviteTextBox.set("placeholder", ecm.messages.box_collaboration_invite_placeholder);
				this._createAvailableUsersGroupsStore();
			}
			else {
				this._inviteTextBox.set("placeholder", ecm.messages.box_collaboration_invite_placeholder_non_admin);
			}
		},
		
		render: function(){
			this.logEntry("render");

			if (this._item && !this.rendered) {
				this._item.retrieveBoxCollaborators(lang.hitch(this, function(collaborators) {
					
					// Get the permission level of the logged in user.
					for (var i = 0; i < collaborators.length; i++){
						var collaborator = collaborators[i];
						if (collaborator.id == this._boxLoggedInUserId){
							this._currentUserPermission = collaborator.permission;
							break;
						}
					}
					
					// Hide the add section if the user doesn't have at least editor access.
					if (!this._readOnly){

						// Set the permissions in the add dropdown.
						var maxPermissionLevel = BoxCollaborator.editor;
						if (this._currentUserPermission == BoxCollaborator.owner ||
								this._currentUserPermission == BoxCollaborator.co_owner){
							maxPermissionLevel = BoxCollaborator.co_owner;
						}
						this._permissionLink.setMaximumAccess(maxPermissionLevel);
						domClass.remove(this._addSection, "dijitHidden");
					}
					this._originalCollaborators = collaborators;
					this._createMembersStore(collaborators);
					this._createMembersGrid();
				}));
				this.rendered = true;
			}
			this.logExit("render");
		},
		
		/**
		 * @private
		 */
		_createMembersStore: function(processMembers) {
			this.logEntry("_createMembersStore");
			var ownerItem = null;
			var items = [];
			for (i in processMembers) {
				var member = processMembers[i];
				var item = {
					id: member.id,
					name: idxHtml.escapeHTML(member.name), //idxHtml.escapeHTML(this._getIdentityId(member.displayName))
					emailAddress: member.emailAddress,
					permission: member.permission,
					isGroup: member.isGroup,
					dateAdded: member.dateAdded
				}
				
				if (item.permission == BoxCollaborator.owner){
					ownerItem = item;
				}
				else {
					items.push(item);
				}
			}
			
			items.sort(function(a, b){
				return a.name.localeCompare(b.name);
			});
			
			// Add the owner as the first item in the list.
			if (ownerItem){
				items.splice(0, 0, ownerItem);
			}
			
			this._membersStore = new MemoryStore({
				data: items
			});
			this.logExit("_createMembersStore");
			return this._membersStore;
		},
		
		/**
		 * @private
		 */
		_createAvailableUsersGroupsStore: function(){

			self = this;
			this._usersStore = {
				_userGroupSearchAccessErrorOccurred: false,
				_userGroupSearchAccessError: 2403,
				searchMaxReturnCount: 10,
				
				// data: Array
				//		The array of all the objects in the memory store
				data:[],				
					
				// idProperty: String
				//		Indicates the property to use as the identity property. The values of this
				//		property should be unique.
				idProperty: "id",
					
				// index: Object
				//		An index of data indices into the data array by id
				index:null,
				
				setData: function(data){
					// summary:
					//		Sets the given data as the source for this store, and indexes it
					// data: Object[]
					//		An array of objects to use as the source of data.
					if(data.items){
						// just for convenience with the data format IFRS expects
						this.idProperty = data.identifier || this.idProperty;
						data = this.data = data.items;
					}else{
						this.data = data;
					}
					this.index = {};
					for(var i = 0, l = data.length; i < l; i++){
						var label = "<div><div>" + data[i].displayName + "</div><div><b>";
						if (data[i].isUser){
							label += ecm.messages.box_collaboration_user;
						}
						else {
							label += ecm.messages.box_collaboration_group;
						}
						label += "</b></div></div>";
						data[i]["label"] = label;
						this.index[data[i][this.idProperty]] = i;
					}
				},
				
				get: function(id, options){	
					// summary:
					//		Retrieves an object by its identity
					// id: Number
					//		The identity to use to lookup the object
					// returns: Object
					//		The object in the store that matches the given id.
					return this.data[this.index[id]];
				},
				
				getIdentity: function(object){
					return object[this.idProperty];
				},
				
				query: function(query, options){
					
					if (this._userGroupSearchAccessErrorOccurred){
						this.setData([]);
						return this.data;
					}
			
					var filter = query.name.toString().trim();
					if(!filter) { // if there is no text to filter, no need to fire query
						this.setData([]);
						return this.data;
					}
					
					// if ends with * char, remove it from filter string
					if(filter.lastIndexOf("*") == filter.length-1){
						filter = filter.substring(0, filter.length-1);
						if(!filter) { 
							// if there is no text to filter, no need to fire query
							this.setData([]);
							return this.data;
						}
					}
						
					var dfdResults = new Deferred();			
					var successCallback =  function(usersGroups) {
						try{
							dfdResults.resolve(usersGroups);
						}
						catch (e){
							self.logDebug("query.successCallback", "Exception returned from resolving user/groups query: " + e.message);
						}
					};
					var errorCallback =  lang.hitch(this, function(response) {
						for (var i = 0; i < response.errors.length; i++){
							var error = response.errors[i];
							if (error.number == this._userGroupSearchAccessError){
								this.onUserGroupSearchInsufficientAccess();
								this._userGroupSearchAccessErrorOccurred = true;
								break;
							}
						}
						dfdResults.resolve([]);
					});
					self._item.repository.findUsers(successCallback, null, filter, null, null, this.searchMaxReturnCount, null, false, false, true, errorCallback, [this._userGroupSearchInsuffientAccessError]);
					dfdResults.then(lang.hitch(this, function (result){
						this.setData(result);
						return this.data;
					}), lang.hitch(this, function (result){
						// TODO:error should be shown??
						this.setData([]);
						return this.data;
					}));
						
					return QueryResults(dfdResults);
				},
				
				onUserGroupSearchInsufficientAccess: function(){
				},
			}
			
			this._inviteTextBox.set("store", this._usersStore);
			
			this.connect(this._usersStore, "onUserGroupSearchInsufficientAccess", function() {
				// If we get an insufficient access error back when searching for users/groups, display warning message.
				this._displayWarning(ecm.messages.box_managing_users_not_configured);
				this._inviteTextBox.set("placeholder", ecm.messages.box_collaboration_invite_placeholder_non_admin);
			});
		},
		
		/**
		 * @private
		 */
		_createMembersGrid: function() {
			this.logEntry("_createMembersGrid");
			if (this._membersGrid) {
				this._membersGrid.destroy();
			}
			var structure = [
				{
					field: "name",
					name: ecm.messages.box_collaboration_user_name,
					formatter: lang.hitch(this, function(data, rowIndex) {
						return this._getformattedName(data, rowIndex);
					})
				},
				{
					field: "emailAddress",
					name: ecm.messages.box_collaboration_email_address
				},
				{
					field: "permission",
					name: ecm.messages.box_permission_permission,
					navigable: true,
					widgetsInCell: true,
					needCellWidget: lang.hitch(this, function(cell) {
						return this._isPermissionEditable(cell);
					}),
					formatter: lang.hitch(this, function(data) {
						return this._getFormattedPermission(data);
					}),
					decorator: lang.hitch(this, function(data) {
						return this._getDecoratedPermissionDropdown(data);
					}),
					setCellValue: lang.hitch(this, function(gridData, storeData, cellWidget) {
						return this._setPermissionButtonValue(gridData, storeData, cellWidget);
					})
				},
				{
					field: "dateAdded",
					name: ecm.messages.box_collaboration_date_added,
					decorator: lang.hitch(this, function(data) {
						return ecm.model.desktop.valueFormatter.formatValue(data, "xs:date", null);
					}),
					width: '145px'
				}];
			if (!this._readOnly){
				structure.push({
					field: "remove",
					name: ecm.messages.box_collaboration_remove_collaboration,
					navigable: true,
					widgetsInCell: true,
					sortable: false,
					needCellWidget: lang.hitch(this, function(cell) {
						return this._isRemoveButtonNeeded(cell);
					}),
					decorator: lang.hitch(this, function(data) {
						return this._getDecoratedRemoveButton(data);
					}),
					setCellValue: lang.hitch(this, function(gridData, storeData, cellWidget) {
						return this._setRemoveButtonValue(gridData, storeData, cellWidget);
					}),
					width: '75px'
				});
			}
			this._membersGrid = new Grid({
				region: "center",
				cacheClass: Cache,
				store: this._membersStore,
				structure: structure,
				modules: [
				    FilterModule,
					CellWidget,
					Edit,
					Focus,
					{
						moduleClass: SelectRow,
						multiple: true,
						triggerOnCell: true
					},
					{
						moduleClass: Body,
						emptyInfo: ecm.messages.box_collaboration_no_collaborators
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
			this.resize();

			this.logExit("_createMembersGrid");
		},
		
		/**
		 * @private
		 */
		_isPermissionEditable: function(cell) {
			this.logEntry("_isPermissionEditable");
			
			var editable = true;
			
			if (this._readOnly){
				editable = false;
			}
			else {
				// Also, don't allow editing the owner.
				var checkMember = this._membersGrid.model.store.get(cell.row.id);
				if (checkMember != null && checkMember.permission == BoxCollaborator.owner) {
					editable = false
				}
			}

			this.logExit("_isPermissionEditable");
			return editable;
		},
		
		/**
		 * @private
		 */
		_getFormattedPermission: function(data) {
			if(data.permission == BoxCollaborator.owner || this._readOnly){
				return ecm.messages[data.permission];
			}
			else {
				return data.permission;
			}
		},
		
		/**
		 * @private
		 */
		_getDecoratedPermissionDropdown: function() {
			return "<div style='display: inline-flex'>"+
			"<span class= 'selectPermissionLink' data-dojo-props='maximumPermission: \"" + this._currentUserPermission + "\"' data-dojo-type='ecm/widget/EditorPermissionLink' data-dojo-attach-point='_permissionLinkcell'></span>"+
			"</div>";
		},
		
		/**
		 * @private
		 */
		_setPermissionButtonValue: function(gridData, storeData, cellWidget){
			cellWidget._permissionLinkcell.setValue(storeData);
			if(cellWidget._permissionLinkcell._cnntChange){
				// Remove previously connected events to avoid memory leak.
				cellWidget._permissionLinkcell._cnntChange.remove();
			}
			cellWidget._permissionLinkcell._cnntChange = connect.connect(cellWidget._permissionLinkcell, 'onChange', this, function(newValue){
				newValue = cellWidget._permissionLinkcell.getValue();
				this.onPermissionChange(cellWidget.cell.row.id, newValue);
			});
		},
		
		/**
		 * @private
		 */
		_getformattedName: function(data, rowIndex) {
			this.logEntry("_getformattedName");
			
			var cellValue = "";
			
			if(!data.isGroup)
				cellValue = "<span class=\"userIconSpan\"><img src=\"dojo/resources/blank.gif\" alt=\"" + idxHtml.escapeHTML(this.messages.user) + "\"></img></span>";
			else
				cellValue = "<span class=\"groupIcon\"><img src=\"dojo/resources/blank.gif\" alt=\"" + idxHtml.escapeHTML(this.messages.user) + "\"></img></span>";
			
			cellValue += "<span class=\"nameText\" style=\"display: inline-flex; margin-top: 3px;\">" + idxHtml.escapeHTML(data.name) + "</span>";
			
			this.logExit("_getformattedName");
			return cellValue;
		},
		
		/**
		 * @private
		 */
		_isRemoveButtonNeeded: function(cell) {
			var removeNeeded = true;
			
			// Don't allow the user to remove the owner.
			var checkMember = this._membersGrid.model.store.get(cell.row.id);
			if (checkMember != null && (checkMember.permission == BoxCollaborator.owner)) {
				removeNeeded =  false;
			}
			else if (this._readOnly){
				removeNeeded = false;
			}
			return removeNeeded;
		},
		
		/**
		 * @private
		 */
		_getDecoratedRemoveButton: function(data) {
			var removeTitle = ecm.messages.box_collaboration_remove_collaboration_title;
			return "<button data-dojo-type='ecm.widget.Button' class='removeMemberButton' title='" + removeTitle +"' data-dojo-attach-point='removeButton' data-dojo-props='showLable:false, iconClass:\"removeMemberIcon\"'>" +
					"</button>";
		},
		
		/**
		 * @private
		 */
		_setRemoveButtonValue: function(gridData, storeData, cellWidget){
			this.logEntry("_setRemoveButtonValue");
			
			 if(cellWidget.removeButton._cnnt){
				 // Remove previously connected events to avoid memory leak.
				 cellWidget.removeButton._cnnt.remove();
			 }
			 cellWidget.removeButton._cnnt = connect.connect(cellWidget.removeButton, 'onClick', this, function(){
				 this.onRemoveMember(cellWidget.cell.row.id);
			});
			 
			this.logExit("_setRemoveButtonValue");
		},
		
		onRemoveMember: function(rowId) {
			this.logEntry("onRemoveMember");
			
			// Warn the user if they are about to remove themself.
			var checkMember = this._membersGrid.model.store.get(rowId);
			if (checkMember.id == this._boxLoggedInUserId){
				var self = this;
				var confirmRemoveSelf = new ConfirmationDialog({
					text: ecm.messages.box_collaboration_remove_self_prompt,
					title: ecm.messages.box_collaboration_remove_self_title,
					buttonLabel: ecm.messages.yes,
					cancelButtonLabel: ecm.messages.no,
					cancelButtonDefault: true,
					onExecute: function() {
						self._membersGrid.model.store.remove(rowId);
						self.onChange();
					}
				});
				confirmRemoveSelf.show();
			}
			else {
				this._membersGrid.model.store.remove(rowId);
				this.onChange();
			}
			
			this.logExit("onRemoveMember");
		},
		
		/**
		 * @private
		 */
		_filterData: function() {
			var value = this._filter.get("value");
			if (this._prevFilter != value) {
				this._prevFilter = value;
				this._filterValue = string.trim(value).toLowerCase();
				this._filterField = "name";
				this._membersGrid.select.row.clear();
				this._membersGrid.model.filter(lang.hitch(this, "_filterChecker"));
				this._membersGrid.body.refresh();
			}
		},
		
		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item[this._filterField];
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},
		
		onPermissionChange: function(rowId, newValue){
			this.logEntry("onPermissionChange");

			var updateMember = this._membersGrid.model.store.get(rowId);
			if(updateMember.permission !== newValue){
				
				// When changing ownership, give the old owner editor rights.
				var newMembers = [];
				if (newValue == BoxCollaborator.owner){
					for (var i = 0; i < this._membersGrid.model.store.data.length; i++){
						var member = this._membersGrid.model.store.data[i];
						if (member.permission == BoxCollaborator.owner){
							member.permission = BoxCollaborator.editor;
						}
						newMembers.push(member);
					}
				}
				updateMember.permission = newValue;
					
				if (newValue == BoxCollaborator.owner){
					// Recreate the grid to show the ownership change.
					this._createMembersStore(newMembers)
					this._createMembersGrid();
				}
				this.onChange();
			}
			this.logExit("onPermissionChange");
		},
		
		getUpdatedCollaborators: function() {
			this.logEntry("getUpdatedCollaborators");
			var items = this._membersStore.data;
			
			var updatedMembersJson = [];
			var oldCollaborators = {};
			for (i in this._originalCollaborators) {
				oldCollaborators[this._originalCollaborators[i].id] = this._originalCollaborators[i];
			}
			
			for (i in items) {
				var boxCollaborator = items[i];
				if(boxCollaborator.id && oldCollaborators[boxCollaborator.id]){
					
					if(oldCollaborators[boxCollaborator.id].permission !== boxCollaborator.permission) {
						//collaborator updated
						var updatedCollaborator = lang.clone(oldCollaborators[boxCollaborator.id]);
						updatedCollaborator.permission = boxCollaborator.permission
						updatedCollaborator.updateAction = BoxCollaborator.modify;						
						updatedMembersJson.push(updatedCollaborator.toJSON());
					}
					oldCollaborators[boxCollaborator.id]= null;
				}
				else {
					//collaborator added
					var newCollaborator = new BoxCollaborator({
						updateAction: BoxCollaborator.add,
						id: boxCollaborator.id,
						permission: boxCollaborator.permission,
						isGroup: boxCollaborator.isGroup,
						emailAddress:  boxCollaborator.emailAddress,
						dateAdded: boxCollaborator.dateAdded
					});			
					updatedMembersJson.push(newCollaborator.toJSON());
				}
			}
			for (i in oldCollaborators) {
				if(oldCollaborators[i]){
					//collaborator removed
					var boxCollaborator = lang.clone(oldCollaborators[i]);
					boxCollaborator.updateAction = BoxCollaborator.remove;					
					updatedMembersJson.push(boxCollaborator.toJSON());
				}
			}

			this.logExit("getUpdatedCollaborators");
			return updatedMembersJson;
		},
		
		/**
		 * @private
		 */
		_displayWarning: function(message) {
			this.logEntry("_displayWarning");
			
			var warningMessage = idxHtml.escapeHTML(message);
			this._infoText.innerHTML = warningMessage;
			if (message.length > 0) {
				this._infoPane.style.display = "block";
			} else {
				this._infoPane.style.display = "none";
			}
			this.resize();
			
			this.logExit("_displayWarning");
		},
		
		resize: function() {
			if (this._mainContent) {
				this._mainContent.resize(arguments);
			}
		},

		onChange: function(){
		},
		
		/**
		 * @private
		 */
		_onInviteCollaborator: function(){
			this.logEntry("_onInviteCollaborator");
			
			var userId = this._inviteTextBox.get("value");
			this._displayWarning("");
			if(!userId){
				return;
			}

			// Verify that the item is not one of the filtered items.  If so,
			// display an error.
			
			// See if member is already in the list first, skip them if they are.
			var foundMember = this._membersGrid.model.store.get(userId.toLowerCase());
			if (!foundMember && web.isEmailAddress(userId)){
				foundMember = this._isEmailAddressPresent(userId)
			}
			if (foundMember) {
				this._displayWarning(ecm.messages.box_collaboration_user_already_present);
				return;
			}
			
			var member = this._inviteTextBox.item;
			var permission = this._permissionLink.getValue();
			if(member){
				var checkMember = this._membersGrid.model.store.get(member.id);
				if (checkMember != null) {
					this._displayWarning(ecm.messages.box_collaboration_user_already_present);
					return;
				}
				else {
					this._addMembers([{
						id: member.id,
						name: member.name,
						emailAddress: member.emailAddress,
						isGroup: !member.isUser,
						permission: permission,
						dateAdded: new Date().toISOString()
					}]);
				}
			}
			else if (web.isEmailAddress(userId)) {
				this._addMembers([{
					id: userId.toLowerCase(),
					name: userId,
					emailAddress: userId,
					permission: permission,
					isGroup: false,
					dateAdded: new Date().toISOString()
				}]);
			}
			else {
				this._displayWarning(ecm.messages.box_collaboration_invalid_email);
				return;
			}
			this._inviteTextBox.set("value", "");
			this._inviteTextBox.focus();
			this._onNameTextChange();
			
			this.logExit("_onInviteCollaborator");
		},
		
		/**
		 * @private
		 */
		_addMembers: function(members) {
			this.logEntry("_addMembers");
			
			if (members != null && members.length > 0) {
				for (i in members) {
					var member = members[i];
					var new_member = {
						id: member.id,
						name: idxHtml.escapeHTML(member.name),
						emailAddress: member.emailAddress,
						isGroup: member.isGroup,
						permission: member.permission,
						dateAdded: member.dateAdded
					};
					// See if member is already in the list first, skip them if they are
					var checkMember = this._membersGrid.model.store.get(new_member.id);
					if (checkMember == null) {
						this._membersGrid.model.store.add(new_member);
					}
				}
				this.onChange();
			}
			
			this.logExit("_addMembers");
		},
		
		/**
		 * @private
		 */
		_onNameTextChange: function(){
			this._addMemberButton.set("disabled", !(this._inviteTextBox.get("value")));
		},
		
		/**
		 * @private
		 */
		_isEmailAddressPresent: function(emailAddress){
			this.logEntry("_isEmailAddressPresent");
			var found = false;
			
			for (i in this._originalCollaborators) {
				if (emailAddress == this._originalCollaborators[i].emailAddress){
					found = true;
					break;
				}
			}
			
			this.logExit("_isEmailAddressPresent");
			return found;
		},
		
		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			if (this._membersGrid){
				this._membersGrid.destroy();
			}

			this._membersStore = null;
			this.inherited(arguments);
		}
	});
});

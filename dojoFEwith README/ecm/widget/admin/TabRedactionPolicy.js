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
	"dojox/uuid/Uuid",	
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"idx/html",
	"gridx/modules/SingleSort",
	"dijit/form/DropDownButton",
	"idx/widget/SloshBucket",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/Role",
	"ecm/model/RedactionPolicy",
	"ecm/model/admin/AdminData",
	"ecm/widget/admin/_RedactionAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/Select",
	"dojo/has!dojo-bidi?dojox/string/BidiComplex",
	"ecm/widget/admin/TabRedactionReason",
	"ecm/widget/admin/TabRedactionRole",
	"dojo/text!./templates/TabRedactionPolicy.html"
], function(declare, lang, string, domConstruct, dojoArray, attr, style, has, domClass, aspect, MemoryStore, json, Uuid, _Widget, _TemplatedMixin, //
_WidgetsInTemplateMixin, Button, ContentPane, BorderContainer, idxHtml, SingleSort, DropDownButton, //
SloshBucket, MessagesMixin, LoggerMixin, Role, RedactionPolicy, AdminData, _RedactionAdminTabBase, HoverHelp, ValidationTextBox, //
Select, BidiComplex, TabRedactionReason, TabRedactionRole, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabRedactionPolicy
	 * @class Provides a widget that is used to add a redaction policy or edit the values for a redaction policy.
	 */
	return declare("ecm.widget.admin.TabRedactionPolicy", [
		_RedactionAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabRedactionPolicy.prototype */

		templateString: template,
		widgetsInTemplate: true,
		
		repository: null,
		
		postCreate: function() {
			this.hoverHelpList = [];
			this._redactionReasons = [];
			this._editorRoles = [];
			this._viewerRoles = []

			this.resetButton.set("title", this.messages.reset_hover);

			this._setHoverHelp();
			if (has("dojo-bidi")) {
				this.set("textDir", has("text-direction"));
			}
			this.sloshBucketsLoaded = false;
			this.own(aspect.after(this.reasonSloshBucket, "onAddRemove", lang.hitch(this, "_onFieldChange")));		
			this.own(aspect.after(this.editorSloshBucket, "onAddRemove", lang.hitch(this, "_onFieldChange")));		
			this.own(aspect.after(this.viewerSloshBucket, "onAddRemove", lang.hitch(this, "_onFieldChange")));	
			
			var filterReasonDataFunc = lang.hitch(this, "_filterReasonData");
			this.own(aspect.after(this._filterReasons, "_onInput", filterReasonDataFunc));
			this.own(aspect.after(this._filterReasons, "_setValueAttr", filterReasonDataFunc));
			
			var filterEditorDataFunc = lang.hitch(this, "_filterEditorData");
			this.own(aspect.after(this._filterEditors, "_onInput", filterEditorDataFunc));
			this.own(aspect.after(this._filterEditors, "_setValueAttr", filterEditorDataFunc));
			
			var filterViewerDataFunc = lang.hitch(this, "_filterViewerData");
			this.own(aspect.after(this._filterViewers, "_onInput", filterViewerDataFunc));
			this.own(aspect.after(this._filterViewers, "_setValueAttr", filterViewerDataFunc));
			
			style.set(this.reasonSloshBucket._moveUpDownButtonContainer, "display", "none");
			style.set(this.editorSloshBucket._moveUpDownButtonContainer, "display", "none");
			style.set(this.viewerSloshBucket._moveUpDownButtonContainer, "display", "none");
		
			this._filterReasons.set("placeholder", this.messages.name_contains_label);
			this._filterEditors.set("placeholder", this.messages.name_contains_label);
			this._filterViewers.set("placeholder", this.messages.name_contains_label);
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
		 * @private
		 */
		_onReset: function(){
			
			// Need to re-initialize the selected items list so all items in the available list will be shown.
			this._initialized = false;
			this._initializeSelectedItems(this.reasonSloshBucket, this.messages.admin_repository_readaction_selected_reasons);
			this._initializeSelectedItems(this.editorSloshBucket, this.messages.admin_repository_readaction_selected_editors);
			this._initializeSelectedItems(this.viewerSloshBucket, this.messages.admin_repository_readaction_selected_viewers);
			this.inherited(arguments);
		},
		
		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this._initialized = false;
			this._disableSave();
			this._disableReset();
			var name = this._myAdminModel ? this._myAdminModel.name : this.messages.admin_repository_new_redaction_policy;

			if (this._myAdminModelForCopy && this._myAdminModelForCopy.id) {
				this.action = "copy";
				this.setTitle(this.messages.admin_repository_new_redaction_policy);
			} else if (this._myAdminModel && this._myAdminModel.id) {
				this.id = this._myAdminModel.id;
				this.action = "edit";
				this.setTitle(this._myAdminModel.name);
			} else {
				this.action = "new";
				this.setTitle(this.messages.admin_repository_new_redaction_policy);
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
				
				this._loadData();
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
			return this.messages.admin_repository_redaction_policy_instruction;
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
			if (!this.sloshBucketsLoaded) {
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
			this.sloshBucketsLoaded = false;
			
			this._getAvailableReasons(lang.hitch(this, function (){
				this._getRedactionRoles(lang.hitch(this, function(){

					// Populating any existing data in the  model
					var adminModel = this._myAdminModel ? this._myAdminModel : this._myAdminModelForCopy;
			
					var selectedEditors = [];
					var selectedViewers = [];
					var selectedReasons = [];
					
					if (adminModel) {
						if (this.action == "edit"){
							this.nameField.set("value", adminModel.name);
						}
						else {
							this.nameField.set("value", "");
						}
						this.descriptionField.set("value", adminModel.description);
						
						for (var i = 0; i < adminModel.redactionEditors.length; i++){
							var editorRole = dojo.clone(adminModel.redactionEditors[i]);
							selectedEditors.push(editorRole);
						}
						
						for (var j = 0; j < adminModel.redactionViewers.length; j++){
							var viewerRole = dojo.clone(adminModel.redactionViewers[j]);
							selectedViewers.push(viewerRole);
						}
						
						for (var k = 0; k < adminModel.redactionReasons.length; k++){
							var reason = dojo.clone(adminModel.redactionReasons[k]);
							reason.getValue = function(attributeId){
								return this[attributeId];
							}
							selectedReasons.push(reason);
						}
					}  
					else {
						this.nameField.set("value", "");
						this.descriptionField.set("value", "");
					}
					
					this._loadEditorSloshBucket(selectedEditors);
					this._loadViewerSloshBucket(selectedViewers);
					this._loadReasonSloshBucket(selectedReasons);

					this.nameField.pattern = '([^"*|<>?:\\\\/])*';
					this.nameField.invalidMessage = this.messages.admin_reason_code_name_invalid;
					
					setTimeout(lang.hitch(this, function() {
						this.onCheckSave();
						//if (onComplete) {
						//	onComplete();
						//}
						this.sloshBucketsLoaded = true;
					}), 100);
					
					setTimeout(lang.hitch(this, function() {
						this._initialized = true;
					}), 300);
				}));
			}));
		},
		
		/**
		 * @private
		 */
		_filterReasonData: function() {
			var value = this._filterReasons.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this.reasonSloshBucket.filter({
					name: value
				});
			}
		},
		
		/**
		 * @private
		 */
		_filterViewerData: function() {
			var value = this._filterViewers.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this.viewerSloshBucket.filter({
					name: value
				});
			}
		},
		
		/**
		 * @private
		 */
		_filterEditorData: function() {
			var value = this._filterEditors.get("value");
			if (this._previousFilter != value) {
				this._previousFilter = value;
				this.editorSloshBucket.filter({
					name: value
				});
			}
		},
		
		/**
		 * @private
		 */
		_loadReasonSloshBucket: function(selectedReasons) {
			this._initializeAvailableItems(this.reasonSloshBucket, this._redactionReasons, this.messages.admin_repository_readaction_available_reasons);
			this._initializeSelectedItems(this.reasonSloshBucket, this.messages.admin_repository_readaction_selected_reasons, selectedReasons);
		},
		
		/**
		 * @private
		 */
		_loadEditorSloshBucket: function(selectedEditors) {
			this._initializeAvailableItems(this.editorSloshBucket, this._editorRoles, this.messages.admin_repository_readaction_available_editors);
			this._filterEditors.set('value', '');
			this._initializeSelectedItems(this.editorSloshBucket, this.messages.admin_repository_readaction_selected_editors, selectedEditors);
		},
		
		/**
		 * @private
		 */
		_loadViewerSloshBucket: function(selectedViewers) {
			this._initializeAvailableItems(this.viewerSloshBucket, this._viewerRoles, this.messages.admin_repository_readaction_available_viewers);
			this._filterViewers.set('value', '');
			this._initializeSelectedItems(this.viewerSloshBucket, this.messages.admin_repository_readaction_selected_viewers, selectedViewers);
		},
		
		/**
		 * Gets the set of reasons for displaying in the slosh bucket.
		 * 
		 * @private
		 */
		_getAvailableReasons: function(callback){
			this._redactionReasons = [];
			ecm.model.admin.adminData.loadRedactionReasons(lang.hitch(this, function(config) {
				for (var i = 0; i < config.redactionReasons.length; i++){
					var redactionReason = dojo.clone(config.redactionReasons[i])
					redactionReason.name = redactionReason._attributes.name;
					this._redactionReasons.push(redactionReason);
				}
				this._redactionReasons.sort(lang.hitch(this, this._compareSelectedItemsByName));
				if (callback) {
					callback();
				}
			}));
		},
		
		/**
		 * Gets the set of redaction roles in the system
		 * 
		 * @private
		 */
		_getRedactionRoles: function(callback){
			this._editorRoles = [];
			this._viewerRoles = [];
			this.repository.retrieveRedactionRoles(lang.hitch(this, function(redactionRoles){
				for (var i = 0; i < redactionRoles.length; i++){
					var role = dojo.clone(redactionRoles[i]);
					if (role.type == Role.ROLE_TYPE.AUTHOR){
						this._editorRoles.push(role);
					}
					else {
						this._viewerRoles.push(role);
					}
				}
				if (callback){
					callback();
				}
			}));
		},
		
		/**
		 * Creates a new redaction reason and adds to the selected list.
		 * 
		 * @private
		 */
		_onAddRedactionReason: function(){
			var tabWidget = new TabRedactionReason();
			tabWidget.setTitle(ecm.messages.admin_new_reason_code);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			tabWidget.UUID = "newRedaction";
			this.openTab(tabWidget);
			var handle = aspect.after(tabWidget, "addedReason", lang.hitch(this, function(newReason) {
				var redactionReason = dojo.clone(newReason)
				redactionReason.name = redactionReason._attributes.name;
				this.reasonSloshBucket.availableGrid.model.store.add(redactionReason);
				this.reasonSloshBucket.addToSelected(redactionReason);
				handle.remove();
			}), true);
		},
		
		/**
		 * Creates a new editor role and adds to the selected list.
		 * 
		 * @private
		 */
		_onAddEditor: function(){
			var tabWidget = new TabRedactionRole();
			tabWidget.setTitle(ecm.messages.admin_repository_redaction_new);
			//tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.setRepository(this.repository);
			tabWidget.roleType = Role.ROLE_TYPE.AUTHOR;
			tabWidget.initialize();
			this.openTab(tabWidget);
			var handle = aspect.after(tabWidget, "addedRole", lang.hitch(this, function(newRole) {
				var role = dojo.clone(newRole);
				this.editorSloshBucket.availableGrid.model.store.add(role);
				this.editorSloshBucket.addToSelected(role);
				handle.remove();
			}), true);
		},
		
		/**
		 * Creates a new viewer role and adds to the selected list.
		 * 
		 * @private
		 */
		_onAddViewer: function(){
			var tabWidget = new TabRedactionRole();
			tabWidget.setTitle(ecm.messages.admin_repository_redaction_new);
			//tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.setRepository(this.repository);
			tabWidget.roleType = Role.ROLE_TYPE.USER;
			tabWidget.initialize();
			this.openTab(tabWidget);
			var handle = aspect.after(tabWidget, "addedRole", lang.hitch(this, function(newRole) {
				var role = dojo.clone(newRole);
				this.viewerSloshBucket.availableGrid.model.store.add(role);
				this.viewerSloshBucket.addToSelected(role);
				handle.remove();
			}), true);
		},
		
		/**
		 * Initializes the available items part of a slosh bucket.
		 * 
		 * @private
		 */
		_initializeAvailableItems: function(sloshBucket, items, header){
			var availableColumnsStructure = [
			{
				field: "name",
				name: header,
				width: "100%"
			}];
			
			// Remove any items already selected from the items we will make available.
			var filteredItems
			var selectedItems = sloshBucket.getSelectedItems();
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
			sloshBucket.availableGridModules = modules;
			
			var store = new MemoryStore({
				data: filteredItems,
				comparatorMap: {
					"name": this._localeCompare
				}
			});
			sloshBucket.setAvailableGridData(store, availableColumnsStructure);
			if (has("text-direction") && this.reasonSloshBucket.availableGrid) {
				sloshBucket.availableGrid.set("textDir", has("text-direction"));
			}
		},
		
		/**
		 * Initializes the selected items part of a slosh bucket.
		 * 
		 * @private
		 */
		_initializeSelectedItems: function(sloshBucket, header, selectedMembers){
			var selectedItems = [];
			if (selectedMembers){
				selectedItems = selectedMembers;
			}
			
			var selectedStore = new MemoryStore({
				data: selectedItems,
				comparatorMap: {
					"name": this._localeCompare
				}
			});
			var selectedColumnsStructure = [
				{
					field: "name",
					name: header,
				}
			];
			
			var modules = [{
				moduleClass: SingleSort,
				initialOrder: [{
						colId: 1,
						descending: false
					}]
			}];
			sloshBucket.selectedGridModules = modules;
			
			var fixedArray = [];
			sloshBucket.setSelectedGridData(selectedStore, selectedColumnsStructure, fixedArray);
			
			if (has("text-direction") && sloshBucket.selectedGrid) {
				sloshBucket.selectedGrid.set("textDir", has("text-direction"));
			}
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
				this.repository.updateRedactionPolicy(this._myAdminModel, lang.hitch(this, function(){
					this._updateName(this._myAdminModel.name);
					this.setTitle(this._myAdminModel.name);
					ecm.model.admin.adminData.onChange(this._myAdminModel);
					if (onComplete) {
						onComplete(true);
					}
				}));
			}
			else{
				var newPolicy = new RedactionPolicy();
				this._loadWithFieldValues(newPolicy);
				this.repository.createRedactionPolicy(newPolicy, lang.hitch(this, function(addedPolicy){
					this._myAdminModelForCopy = null;
					this._myAdminModel = addedPolicy;
					this._updateName(addedPolicy.name);
					this.setTitle(addedPolicy.name);
					this.action = "edit";
					this._checkSave();
					ecm.model.admin.adminData.onChange(this._myAdminModel);
					if (onComplete) {
						onComplete(true);
					}
				}));
			}
		},
		
		_compareSelectedItemsByName: function(a, b) {
			a = a != null ? a.name : null;
			b = b != null ? b.name : null;
			return this._localeCompare(a, b);
		},
		
		_sortSelectedItemsByName: function(items) {
			if (items && items.length > 0) {
				items.sort(lang.hitch(this, this._compareSelectedItemsByName));
			}
			return items;
		},

		_loadWithFieldValues: function(adminModel) {
			adminModel.name = idxHtml.escapeHTML(this.nameField.get("value"));
			adminModel.description = idxHtml.escapeHTML(this.descriptionField.get("value"));
			
			// Add reasons, editors, and viewers, sorted by name.
			adminModel.redactionReasons = this._sortSelectedItemsByName(this.reasonSloshBucket.getSelectedItems());
			adminModel.redactionEditors = this._sortSelectedItemsByName(this.editorSloshBucket.getSelectedItems());
			adminModel.redactionViewers = this._sortSelectedItemsByName(this.viewerSloshBucket.getSelectedItems());
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			if (!this.nameField.isValid()) {
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
			if (this.sloshBucketsLoaded) {
				this.onMarkDirty();
			}
			if (this._initialized) {
				this._markDirty();
			}
		},
	});
});

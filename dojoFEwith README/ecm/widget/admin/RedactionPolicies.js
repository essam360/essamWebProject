/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/Deferred",
	"dojo/string",
	"dojo/aspect",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-style",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"gridx/modules/Filter",
	"ecm/MessagesMixin",
	"ecm/model/_ModelStore",
	"ecm/model/ResultSet",
	"ecm/model/Role",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/RedactionReasonConfig",
	"ecm/widget/admin/_RedactionAdminTabBase",
	"ecm/widget/admin/TabRedactionPolicy",
	"ecm/widget/FilterTextBox",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"ecm/model/Action",
	"idx/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Button",
	"dojo/text!./templates/RedactionPolicies.html"
], //

function(declare, lang, array, Deferred, string, aspect, has, construct, style, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, MenuItem, MenuSeparator, FilterModule, MessagesMixin, _ModelStore, ResultSet, Role, AdminData, RedactionReasonConfig, _RedactionAdminTabBase, TabRedactionPolicy, FilterTextBox, ConfirmationDialog, ContentList, RowContextMenuLoadMenu, Action, BorderContainer, ContentPane, Button,  template) {

	/**
	 * @private 
	 * @name ecm.widget.admin.RedactionPolicies
	 * @class Provides a tab that shows the available redaction policies. 
	 */
	return declare("ecm.widget.admin.RedactionPolicies", [
		_RedactionAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.RedactionPolicies.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_prevFilter: "",
		default_params: {
			application: "navigator"
		},
		
		repository: null,
		redactionPolicies: null,

		postCreate: function() {
			this.inherited(arguments);

			this._filter.set("placeholder", this.messages.name_contains_label);
			this._filter.set("aria-label", this._messages.filter + " " + this._messages.name_contains_label);

			this.own(aspect.after(this._filter, "_onInput", lang.hitch(this, "_filterData"), true));
			this.own(aspect.after(this._filter, "_setValueAttr", lang.hitch(this, "_filterData"), true));
			this._iconClass = "adminIconTheme";
			this._iconClassTitle = ecm.messages.admin_repository_redaction_new;
			this._setParentObject(this);
		},

		initialize: function() {
			this._loadRedactionPolicies(lang.hitch(this, this._initializeGrid));
		},
		
		setRepository: function(repository){
			this.repository = repository;
			
			if (repository){
				// Enable the New button.
				if (repository.connected){
					this.newButton.set("disabled", false);
				}
				else {
					this.own(aspect.after(repository, "onConnected", lang.hitch(this, function() {
						this.newButton.set("disabled", false);
					}), true));
				}
				
				// Re-load redaction policies when something changes.
				this.own(aspect.after(repository, "onChange", lang.hitch(this, function() {
					this._loadRedactionPolicies(lang.hitch(this, function() {
						this._contentList.setResultSet(this.resultSet);
					}));
				}), true));
				this.initialize();
			}
		},

		/**
		 * @private
		 */
		_loadRedactionPolicies: function(callback, refresh) {
			this.redactionPolicies = [];
			
			this.repository.retrieveRedactionPolicies(lang.hitch(this, function(redactionPolicies){
				for(var i = 0; i < redactionPolicies.length; i++){
					var policy = redactionPolicies[i];
					lang.mixin(policy,	{
						getValue: function(attributeId) {
							var value = this[attributeId];
							
							// Create divs for reasons and roles.
							if (attributeId == "redactionReasons" || attributeId == "redactionEditors" || attributeId == "redactionViewers"){
								var valueArray = value;
								value = "";
								for (var i = 0; i < valueArray.length; i++){
									var arrayValue = valueArray[i];
									value += "<div>" + arrayValue.name + "</div>";
								}
							}
							return value;
						}
					});
				}
				
				this.redactionPolicies = redactionPolicies;
				if (callback){
					callback();
				}
			}), refresh);
		},
		/**
		 * Loads the roles data.
		 */
		loadData: function(callback) {

		},
		/**
		 * @private
		 */
		_getRedactionPolicies: function(callback) {
			callback(this.redactionPolicies);
		},

		/**
		 * @private
		 */
		_initializeGrid: function() {
			this._structure = [
			    {
			    	field: "name",
			    	name: this.messages.admin_repository_policy_name
			    },
				{
					field: "description",
					name: this.messages.admin_reason_code_description_label
				},
			    {
			    	field: "redactionReasons",
					name: this.messages.admin_repository_reason_redactions_header,
					decorator: function(data){
						return data;
					}
				},						
				{
					field: "redactionEditors",
					name: this.messages.admin_repository_role_editors,
					decorator: function(data){
						return data;
					}
				},
				{
					field: "redactionViewers",
					name: this.messages.admin_repository_role_viewers,
					decorator: function(data){
						return data;
					}
				}
			];

			this._theStore = new _ModelStore(this, this._getRedactionPolicies);
			this._theStore.comparatorMap = {
				"name": this._localeCompare,
				"description": this._localeCompare,
				"redactionReasons": this._localeCompare,
				"redactionEditors": this._localeCompare,
				"redactionViewers": this._localeCompare
			};

			this.resultSet = new ResultSet({
				columns: this._structure,
				sortIndex: "1"
			});
			this.resultSet.getStore = lang.hitch(this, function() {
				return this._theStore;
			});
			this._contentList.setContentListModules(this._getContentListModules());
			this._contentList.setGridExtensionModules(this._getContentListGridModules());
			this._contentList.setResultSet(this.resultSet);

			this.own(aspect.after(this._contentList, "onRowSelectionChange", lang.hitch(this, "_onSelectionChanged"), true));
			this.own(aspect.after(this._contentList, "onRowDblClick", lang.hitch(this, function(item) {
				this._openItem(item);
			}), true));

			this._filterCheckerFunction = lang.hitch(this, "_filterChecker");
			setTimeout(lang.hitch(this, function(){
				this.resize();
			}), 200);
		},

		/**
		 * New redaction role.
		 * 
		 * @private
		 */
		_onNew: function(userData) {
			var tabWidget = new TabRedactionPolicy();
			tabWidget.setTitle(ecm.messages.admin_repository_new_redaction_policy);
			//tabWidget.setIconClass(this._iconClass);
			tabWidget._setSecurityTopic(this);
			tabWidget.setRepository(this.repository);
			tabWidget.initialize();
			this.openTab(tabWidget);
		},

		/**
		 * Called when this tab is selected.
		 */
		onSelect: function() {
			setTimeout(lang.hitch(this, function() {
				this.resize();
			}), 200);
		},

		/**
		 * @private
		 */
		_onSelectionChanged: function(items) {
			// Disable edit, copy, and delete if more than one item is selected.
			
			if (items.length == 1){
				this._enableDelete();
			}
			else {
				this._disableDelete();
			}

			if (items.length > 0){
				this.openButton.set('disabled', false);
				this.copyButton.set('disabled', false);
			}
			else {
				this.openButton.set('disabled', true);
				this.copyButton.set('disabled', true);
			}
		},

		/**
		 * Open the selected policies.
		 * 
		 * @private
		 */
		_onOpen: function(evt) {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._openItem(items[i]);
			}
		},

		/**
		 * @private
		 */
		_openItem: function(config) {
			var tabWidget = new TabRedactionPolicy();
			tabWidget.setTitle(config.name);
//			tabWidget.setIconClass(this._iconClass);
			tabWidget.setRepository(this.repository);
			tabWidget.setAdminModel(config);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this.openTab(tabWidget);
		},

		/**
		 * @private
		 */
		_isDeletable: function(modelObjects) {
			if (modelObjects) {
				for ( var i in modelObjects) {
				}
			}
			return true;
		},

		/**
		 * Overwrite the delete action of the base class.
		 * 
		 * @private
		 */
		_onDelete: function() {
			this._onDeleteItems(this._contentList.getSelectedItems());
		},

		/**
		 * Opens a dialog when the user selects the delete action.
		 * 
		 * @param items
		 *            Array of themes to delete.
		 * @private
		 */
		_onDeleteItems: function(items) {
			var self = this;
			var confirmDelete = new ConfirmationDialog({
				text: ecm.messages.admin_delete_confirmation_redaction_policy,
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: lang.hitch(self, self._doDelete, items)
			});
			confirmDelete.show();
		},

		/**
		 * Handles the delete action.
		 * 
		 * @param items
		 *            Array of themes to delete.
		 * @private
		 */
		_doDelete: function(items) {
			this._closeChildren(items[0]); // Close items that are in open tabs & then delete the items
			this.repository.deleteRedactionPolicy(items[0].id, function() {
				items[0].deleted = true;
				ecm.model.admin.adminData.onChange(items[0]);
			});
		},

		/**
		 * Handles the reset action.
		 * 
		 * @private
		 */
		_onReset: function() {
			this._filter.reset();
			this._prevFilter = "";
			this._loadRedactionPolicies(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}), true);
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
				this._contentList.grid.select.row.clear();
				this._contentList.grid.model.filter(this._filterCheckerFunction);
				this._contentList.grid.body.refresh();
			}
		},

		/**
		 * Called for each row to determine if it matches the filter data.
		 * 
		 * @private
		 */
		_filterChecker: function(row, id) {
			var rowValue = row.item.getValue(this._filterField);
			return rowValue.toLowerCase().indexOf(this._filterValue) > -1;
		},

		/**
		 * Resizes the border container in this pane.
		 */
		resize: function() {
			this.borderContainer.resize();
			this._contentList.resize();
			setTimeout(lang.hitch(this, function() {
				this._contentList.setResultSet(this.resultSet);
			}), 200);

		},

		/**
		 * Returns the content list grid modules used by this view.
		 * 
		 * @return Array of grid modules.
		 * @private
		 */
		_getContentListGridModules: function() {
			var array = [];
			array.push({
				moduleClass: RowContextMenuLoadMenu,
				loadMenu: lang.hitch(this, this._loadActionMenu)
			});
			array.push(FilterModule);
			return array;
		},

		/**
		 * Load the context menu.
		 * 
		 * @private
		 */
		_loadActionMenu: function(menu, items, grid, cell) {
			var def = new Deferred();
			
			if (!(items instanceof Array) || items.length < 1) {
				def.resolve(false);
				return def;
			}
			var self = this;
			if (grid && cell) {
				
				var editMenuItem = new MenuItem({
					label: ecm.messages.admin_action_edit,
					onClick: function(e) {
						for ( var i in items) {
							self._openItem(items[i]);
						}
					}
				});
				menu.addChild(editMenuItem);
				menu.addChild(new MenuSeparator());
				var deleteMenuItem = new MenuItem({
					label: ecm.messages.admin_action_delete,
					disabled: items.length > 1 ? true : false,
					onClick: function(e) {
						self._onDeleteItems(items);
					}
				});
				menu.addChild(deleteMenuItem);

				menu.addChild(new MenuSeparator());
				var copyMenuItem = new MenuItem({
					label: ecm.messages.admin_action_copy,
					onClick: function(e) {
						self._onCopy(items);
					}
				});
				menu.addChild(copyMenuItem);	
			}
			def.resolve(menu);
			return def;
		},

		/**
		 * Returns the content list modules used by this view.
		 * 
		 * @return Array of content list modules.
		 * @private
		 */
		_getContentListModules: function() {
			var array = [];
			return array;
		},

		/**
		 * Handles the copy action.
		 * 
		 * @private
		 */
		_onCopy: function() {
			var items = this._contentList.getSelectedItems();
			for ( var i in items) {
				this._copyItem(items[i]);
			}
		},

		/**
		 * Copies a given redaction reason.
		 * 
		 * @param redactionReasonConfig
		 *            The {@link ecm.model.admin.RedactionReasonConfig} object to copy.
		 * @private
		 */
		_copyItem: function(item) {
			var tabWidget = new TabRedactionPolicy();
//			tabWidget.setIconClass(this._iconClass);
			tabWidget.setRepository(this.repository);
			tabWidget.setAdminModelForCopy(item);
			tabWidget._setSecurityTopic(this);
			tabWidget.initialize();
			this.openTab(tabWidget);
		}
	});

});

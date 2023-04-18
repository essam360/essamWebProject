/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/string",
	"dojo/dom-class",
	"dojo/store/Memory",
	"idx/html",
	"gridx/Grid",
	"gridx/core/model/cache/Sync",
	"gridx/modules/Focus",
	"gridx/modules/select/Row",
	"gridx/modules/extendedSelect/Row",
	"gridx/modules/SingleSort",
	"gridx/modules/Body",
	"gridx/modules/CellWidget",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"dijit/layout/ContentPane",
	"ecm/widget/ValidationTextBox",
	"ecm/model/admin/SettingsConfig",
	"dojo/text!./templates/SettingAdminUsers.html"
], //

function(declare, lang, array, has, aspect, string, domClass, MemoryStore, idxHtml, Grid, Cache, Focus, SelectRow, ExtendedSelectRow, SingleSort, Body, CellWidget, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, BorderContainer, MessagesMixin, ContentPane, ValidationTextBox, SettingsConfig, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.SettingAdminUsers
	 * @class Provides a widget that is used to specify the users that have administrative privileges.
	 */
	return declare("ecm.widget.admin.SettingAdminUsers", [
		ContentPane,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.SettingAdminUsers.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_adminUserId: "",

		postCreate: function() {
			this.inherited(arguments);

			this.newUser.validator = lang.hitch(this, function(value, constraints) {
				return this.isNewUserFieldValid();
			});

			this.newUser.invalidMessage = this.messages.admin_adminusers_nameInvalid;

			var repository = ecm.model.desktop.getInitialRepository();
			if (repository) {
				this._adminUserId = ecm.model.desktop.getInitialRepository().userId;
			}
			if ((!this._adminUserId || this._adminUserId.length < 1) && ecm.model.desktop.isContainerLoggedIn()) {
				if (ecm.model.desktop.container) {
					if (ecm.model.desktop.container.userId) {
						this._adminUserId = ecm.model.desktop.container.userId;
					} else if (ecm.model.desktop.container.userid) {
						this._adminUserId = ecm.model.desktop.container.userid;
					}
				}
			}
		},

		setAdminModel: function(adminModel) {
			this._settingsConfig = adminModel;
		},

		// Called when the user hits the Reset button 
		loadData: function() {
			this.setupAdminUsersGrid(this.loadAdminUsers());
			this._checkGridButtons();
			this.resize();
		},

		setupAdminUsersGrid: function(items) {
			if (this._adminUsersGrid) {
				this._adminUsersGrid.destroy();
			}
			this._adminUsersGrid = new Grid({
				"aria-label": ecm.messages.admin_adminusers,
				region: "center",
				cacheClass: Cache,
				textDir: has("text-direction"),
				store: new MemoryStore({
					data: items
				}),
				structure: [
					{
						field: "id",
						name: this.messages.admin_adminusers_listheading,
						width: "100%"
					}
				],
				modules: [
					CellWidget,
					Focus,
					SelectRow,
					{
						moduleClass: SingleSort,
						initialOrder: [
							{
								colId: 1,
								descending: false
							}
						]
					},
					{
						moduleClass: ExtendedSelectRow,
						triggerOnCell: true
					}
				]
			});
			domClass.add(this._adminUsersGrid.domNode, "compact gridxWholeRow");
			this.gridBorderContainer.addChild(this._adminUsersGrid);
			this._adminUsersGrid.startup();

			this.own(aspect.after(this._adminUsersGrid.select.row, "onSelectionChange", lang.hitch(this, "_checkGridButtons"), true));
			this.own(aspect.after(this._adminUsersGrid.model, "onNew", lang.hitch(this, function(id, index, row) {
				this._onFieldChange();
				setTimeout(lang.hitch(this, lang.hitch(this, function() {
					this._adminUsersGrid.vScroller.scrollToRow(this._adminUsersGrid.row(id).visualIndex() - 1, true);
				}), 1500));
			}), true));
			this.own(aspect.after(this._adminUsersGrid.model, "onDelete", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
			this.own(aspect.after(this._adminUsersGrid.model, "onSet", lang.hitch(this, function() {
				this._onFieldChange();
			}), true));
		},

		loadAdminUsers: function() {
			var userArray = this._settingsConfig.getAdminUsers();
			if ((userArray.length == 1) && (userArray[0].indexOf(',') >= 0)) {
				userArray = userArray[0].split(",");
			}
			var itemArray = [];
			for ( var i = 0; i < userArray.length; i++) {
				var userName = userArray[i];
				itemArray.push({
					"id": userName
				});
			}
			return itemArray;
		},

		getAdminUsers: function() {
			var values = "";
			var items = this._adminUsersGrid.model.store.query({});
			for ( var i = 0; i < items.length; i++) {
				if (i != 0) {
					values += ",";
				}
				values += items[i].id;
			}
			return values;
		},

		// overridable
		onMarkDirty: function() {
		},

		loadWithFieldValues: function(adminModel) {
			adminModel.setAdminUsers(this.getAdminUsers());
		},

		isResetingFields: function(adminModel) {
			var noChange = true;
			return noChange;
		},

		_onFieldChange: function() {
			var noChange = true;
			if (!noChange) {
				this.onMarkDirty();
			}
			this._checkGridButtons();
		},

		_onAddUser: function() {
			var newUser = idxHtml.escapeHTML( this.newUser.get('value') );
			if (newUser && (newUser.length > 0)) {
				this._adminUsersGrid.model.store.add({
					"id": newUser
				});
				this.newUser.set('value', "");
				this.onMarkDirty();
			}
		},

		_onRemoveUser: function() {
			if (!this.isMyIdSelected()) {
				var rowIds = this._adminUsersGrid.select.row.getSelected();
				if (rowIds) {
					for ( var i = 0; i < rowIds.length; i++) {
						this._adminUsersGrid.model.store.remove(rowIds[i]);
					}
				}
				this.onMarkDirty();
			}
		},

		_checkGridButtons: function() {
			var newUser = this.newUser.get('value');
			this.addUserButton.set('disabled', (newUser.length == 0) || !this.isNewUserFieldValid());
			this.removeUserButton.set('disabled', (this._adminUsersGrid.select.row.getSelected().length == 0) || this.isMyIdSelected());
		},

		isNewUserFieldValid: function() {
			if (!this._adminUsersGrid) {
				return true;
			} else {
				var newUser = this.newUser.get('value');
				if (this._adminUsersGrid.model.store.get(newUser)) {
					return false;
				} else {
					return true;
				}
			}
		},

		isMyIdSelected: function() {
			var selectedUsers = this._adminUsersGrid.select.row.getSelected();
			var selected = false;
			for ( var i = 0; i < selectedUsers.length; i++) {
				var row = this._adminUsersGrid.row(selectedUsers[i]);
				if (row && row.item().id == this._adminUserId) {
					selected = true;
					break;
				}
			}
			return selected;
		},

		// Determines if the save button should be enabled 
		validateData: function() {
			var valid = true;
			return valid;
		}

	});

});

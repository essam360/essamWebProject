/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/json",
	"./_ConfigurationObject",
	"../Action"
], function(declare, lang, array, dojojson, _ConfigurationObject, Action) {

	/**
	 * @name ecm.model.admin.MenuConfig
	 * @class Represents the configuration information for a menu. The information includes;
	 *        <ul>
	 *        <li>The name, type, and description of the menu</li>
	 *        <li>The menu items</li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var MenuConfig = declare("ecm.model.admin.MenuConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.MenuConfig.prototype */

		TYPE: "type",
		TYPE_LABEL: "typeLabel",
		NAME: "name",
		DESCRIPTION: "description",
		ID: "id",
		PLUGIN_ID: "pluginId",
		ITEMS: "items",

		constructor: function(id, name) {
			this.logDebug("MenuConfig", "constructor: id: " + id + ", name: " + name);
			this._attributes.id = id;
		},

		getValue: function(att) {
			if (att == "typeSorter") {
				if (this.getPluginId()) {
					if (this.isToolbar()) {
						return "3";
					} else {
						return "2";
					}
				} else if (this.isToolbar()) {
					return "1";
				} else {
					return "0";
				}
			} else {
				return this.inherited(arguments);
			}
		},

		isToolbar: function() {
			return this.getType().indexOf("Toolbar") > -1 ? true : false;
		},

		isContextMenu: function() {
			return this.getType().indexOf("ContextMenu") > -1 ? true : false;
		},

		getIconClass: function() {
			var iconClass = "adminIconMenu";
			if (this.getPluginId()) {
				if (this.isToolbar()) {
					iconClass = "adminIconMenuToolbarCustom";
				} else {
					iconClass = "adminIconMenuContextMenuCustom";
				}
			} else if (this.isToolbar()) {
				iconClass = "adminIconMenuToolbar";
			} else {
				iconClass = "adminIconMenuContextMenu";
			}
			return iconClass;
		},

		getActions: function(callback, params) {
			this.getActionsForMenuId(this.id, null, null, callback);
		},

		getActionsForMenuId: function(menuId, sorted, includeCustomActions, callback, extraParams) {
			var params = this._mixin([
				{
					action_id: menuId,
					action_list_suffix: this.getType()
				},
				this.default_params,
				extraParams
			]);
			if (sorted != undefined) {
				params.sorted = sorted;
			}
			if (includeCustomActions != undefined) {
				params.includeCustomActions = includeCustomActions;
			}
			var request = ecm.model.Request.invokeService("getActions", null, params, lang.hitch(this, function(response) {
				var actions = [];
				this._loadActions(response.actions, actions);
				callback(actions);
			}));
		},

		_loadActions: function(actionsJSON, actions) {
			for ( var i in actionsJSON) {
				var actionJSON = actionsJSON[i];
				var action = new Action(actionJSON);
				if (actionJSON.actions && actionJSON.actions.length > 0) {
					this._loadActions(actionJSON.actions, action.subActions);
				}
				actions.push(action);
			}
		},

		getDescription: function() {
			return this.getValue(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValue(this.DESCRIPTION, description);
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getType: function() {
			return this.getValue(this.TYPE);
		},

		setType: function(type) {
			this.setValue(this.TYPE, type);
		},

		getTypeLabel: function() {
			return this.getValue(this.TYPE_LABEL);
		},

		setTypeLabel: function(typeLabel) {
			this.setValue(this.TYPE_LABEL, typeLabel);
		},

		getPluginId: function() {
			return this.getValue(this.PLUGIN_ID);
		},

		setPluginId: function(pluginId) {
			this.setValue(this.PLUGIN_ID, pluginId);
		},

		setDataToSave: function(items, subActionObjs) {
			this._originalMenuIds = this.getValues(this.ITEMS);
			this.setValues(this.ITEMS, items);
			this._subActionObjs = subActionObjs;
		},

		// return sub menu objects
		getItemObjects: function(callback, params) {
			var menus = this.getValues(this.ITEMS);
			if (menus && menus.length > 0) {
				var menuObjects = [];
				array.forEach(menus, lang.hitch(this, function(entry, index) {
					var menu = MenuConfig.createMenuConfig(entry);
					menu.getConfig(function(response) {
						menuObjects.push(menu);
						if (menuObjects.length == menus.length && callback)
							callback(menuObjects);
					}, null, params);
				}));
				return menuObjects;
			}
		},

		deleteConfigs: function(configs, name, callback, extraParams) {
			var ids = [];
			var prefixids = [];
			for ( var i in configs) {
				ids.push(configs[i].id);
				prefixids.push(configs[i].id + "_L$");
			}
			var params = this._mixin([
				{
					action: "deleteList",
					ids: dojojson.toJson(ids),
					id: this.id, // Servlet requires an id
					configuration: configs[0].name,

					"delete_list_configuration": configs[0].name, // Deletes the dependent data
					"delete_list_prefix_id": dojojson.toJson(prefixids),
					"delete_list_type": "menu",

					"update_app_configuration_type": name
				// Updates the application's menus to delete these ids 

				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.invokeService("admin/configuration", null, params, function(response) { // onFinished
				if (callback)
					callback(response);
			});
		},

		addConfig: function(callback, extraParams) {
			this.logEntry(arguments.callee.name);

			var actionArray = [];

			// Add the MenuConfig (name & description & items) & update the application menu lists with this new id
			var data = {};
			for ( var i in this._attributes) {
				data[i] = this._attributes[i];
			}
			var updateAction = {
				"action": "add",
				"configuration": this.name,
				"id": this.id,
				"data": data,

				"update_list_configuration": ecm.model.admin.appCfg.name,
				"update_list_id": ecm.model.admin.appCfg.id,
				"update_list_type": ecm.model.admin.appCfg.MENUS
			};
			actionArray.push(updateAction);

			// Add the submenus 
			if (this._subActionObjs && this._subActionObjs.length > 0) {
				var updateListAction = {
					"action": "addList",
					"configuration": "MenuConfig",
					"data": this._subActionObjs
				};
				actionArray.push(updateListAction);
			}

			var params = this._mixin([
				{
					"action": "multiple",
					"id": this.id, // Servlet requires an id
					"configuration": this.name
				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(actionArray), lang.hitch(this, function(response) {
				lang.mixin(this, {
					_attributes: response.configuration
				});
				if (callback) {
					callback();
				}
			}));
			this.logExit(arguments.callee.name);
			return this;
		},

		updateMenuConfig: function(callback, extraParams) {
			this.logEntry(arguments.callee.name);

			var actionArray = [];

			// Delete the old submenu data
			if (this._originalMenuIds && this._originalMenuIds.length > 0) {
				var deleteListAction = {
					"action": "deleteList",
					"configuration": "MenuConfig",
					"ids": this._originalMenuIds
				};
				actionArray.push(deleteListAction);
			}

			// Update the menu's description & items
			var data = {};
			for ( var i in this._attributes) {
				data[i] = this._attributes[i];
			}
			var updateAction = {
				"action": "update",
				"configuration": this.name,
				"id": this.id,
				"data": data
			};
			actionArray.push(updateAction);

			// Add the list
			if (this._subActionObjs && this._subActionObjs.length > 0) {
				var updateListAction = {
					"action": "addList",
					"configuration": "MenuConfig",
					"data": this._subActionObjs
				};
				actionArray.push(updateListAction);
			}

			var params = this._mixin([
				{
					"action": "multiple",
					"id": this.id, // Servlet requires an id
					"configuration": this.name

				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(actionArray), lang.hitch(this, function(response) {
				lang.mixin(this, {
					_attributes: response.configuration
				});
				if (callback) {
					callback();
				}
			}));
			this.logExit(arguments.callee.name);
			return this;
		}
	});

	/**
	 * Static function that constructs a menu config object.
	 * 
	 * @param id
	 *            Menu identifier.
	 * @memberof ecm.model.admin.MenuConfig
	 */
	MenuConfig.createMenuConfig = function(id) {
		ecm.logger.logDebug("ecm.model.admin.createMenuConfig", "id: " + id);
		return new MenuConfig(id, "MenuConfig");
	};
	return MenuConfig;
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"./_ConfigurationObject",
	"./ViewerMappingConfig"
], function(declare, lang, dojojson, _ConfigurationObject, ViewerMappingConfig) {

	/**
	 * @name ecm.model.admin.ViewerConfig
	 * @class Represents the configuration information for a viewer. This information includes:
	 *        <ul>
	 *        <li>The viewer name and description
	 *        <li>
	 *        <li>The types of content that the viewer supports
	 *        <li>
	 *        </ul>
	 * @augments ecm.model.admin._ConfigurationObject
	 */
	var ViewerConfig = declare("ecm.model.admin.ViewerConfig", [
		_ConfigurationObject
	], {
		/** @lends ecm.model.admin.ViewerConfig.prototype */

		ID: "id",
		NAME: "name",
		DESCRIPTION: "description",
		MAPPINGS: "mappings",

		constructor: function(id, name) {
			this.logDebug("ViewerConfig constructor");
		},

		getName: function() {
			return this.getValue(this.NAME);
		},

		setName: function(name) {
			this.setValue(this.NAME, name);
		},

		getDescription: function() {
			return this.getValue(this.DESCRIPTION);
		},

		setDescription: function(description) {
			this.setValue(this.DESCRIPTION, description);
		},

		getMappings: function() {
			return this.getValues(this.MAPPINGS);
		},

		// return viewer mapping objects
		getMappingObjects: function(callback, params) {
			this.logEntry(arguments.callee.nom);
			var mappingObjects = [];
			var mappings = this.getValues(this.MAPPINGS);
			if (mappings && mappings.length > 0) {
				this.listConfig("mappings", lang.hitch(this, function(list) {
					for ( var i in list) {
						var entry = list[i];
						var id = entry.id ? entry.id : "" + i;
						var mapping = ViewerMappingConfig.createViewerMappingConfig(entry);
						lang.mixin(mapping, {
							_attributes: entry
						});
						mappingObjects.push(mapping);
					}
					if (callback) {
						callback(mappingObjects);
					}
				}), true, params);
				return mappingObjects;
			} else {
				if (callback) {
					callback(mappingObjects);
				}
				return mappingObjects;
			}
			this.logExit(arguments.callee.nom);
		},

		deleteConfigs: function(configs, name, callback, extraParams) {
			var ids = [];
			for ( var i in configs) {
				ids.push(configs[i].id);
			}
			var params = this._mixin([
				{
					action: "deleteList",
					ids: dojojson.toJson(ids),
					id: this.id, // Servlet requires an id
					configuration: configs[0].name,

					"update_app_configuration_type": name
				// Removes this id from application viewers 

				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.invokeService("admin/configuration", null, params, function(response) { // onFinished
				if (callback)
					callback(response);
			});
		},

		addConfig: function(mappingDataArray, name, callback, extraParams) {
			this.logEntry(arguments.callee.name);

			var actionArray = [];

			// Add the ViewerConfig (name & description & mappings list) & update the ApplicationConfig VIEWERS with this new id
			var mappingIds = [];
			for ( var i in mappingDataArray) {
				var mappingData = mappingDataArray[i];
				var id = this.id + i;
				mappingIds.push(id);
				mappingData.id = id;
			}
			var data = {};
			for ( var i in this._attributes) {
				if (i != this.MAPPINGS) {
					data[i] = this._attributes[i];
				}
			}
			data[this.MAPPINGS] = mappingIds;
			var updateAction = {
				"action": "add",
				"configuration": this.name,
				"id": this.id,
				"data": data,

				"update_list_configuration": ecm.model.admin.appCfg.name,
				"update_list_id": ecm.model.admin.appCfg.id,
				"update_list_type": ecm.model.admin.appCfg.VIEWERS
			};
			actionArray.push(updateAction);

			// Add the ViewerMappingConfig items 
			if (mappingDataArray && mappingDataArray.length > 0) {
				var updateListAction = {
					"action": "addList",
					"configuration": "ViewerMappingConfig",
					"data": mappingDataArray
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

		updateConfig: function(mappingDataArray, callback, extraParams) {
			this.logEntry(arguments.callee.name);

			var actionArray = [];

			// Delete the old mapping data
			var mappingIdArray = this.getMappings();
			if (mappingIdArray && mappingIdArray.length > 0) {
				var deleteListAction = {
					"action": "deleteList",
					"configuration": "ViewerMappingConfig",
					"ids": mappingIdArray
				};
				actionArray.push(deleteListAction);
			}

			// Update the name & description & mappings list in the ViewerConfig
			var mappingIds = [];
			for ( var i in mappingDataArray) {
				var mappingData = mappingDataArray[i];
				var id = this.id + i;
				mappingIds.push(id);
				mappingData.id = id;
			}
			var data = {};
			for ( var i in this._attributes) {
				if (i != this.MAPPINGS) {
					data[i] = this._attributes[i];
				}
			}
			data[this.MAPPINGS] = mappingIds;
			var updateAction = {
				"action": "update",
				"configuration": this.name,
				"id": this.id,
				"data": data
			};
			actionArray.push(updateAction);

			// Add the ViewerMappingConfig list 
			if (mappingDataArray && mappingDataArray.length > 0) {
				var updateListAction = {
					"action": "addList",
					"configuration": "ViewerMappingConfig",
					"data": mappingDataArray
				};
				actionArray.push(updateListAction);
			}

			var params = this._mixin([
				{
					"action": "multiple",
					"id": this.id, // Servlet requires an id
					"configuration": this.name

				/* "list_configuration": ecm.model.admin.appCfg.name,
				"listId": ecm.model.admin.appCfg.id,
				"listType": ecm.model.admin.appCfg.VIEWERS */
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
	 * Static function that constructs a viewer config object.
	 * 
	 * @param id
	 *            Viewer identifier.
	 * @memberof ecm.model.admin.ViewerConfig
	 */
	ViewerConfig.createViewerConfig = function(id) {
		return new ViewerConfig(id, "ViewerConfig");
	};
	return ViewerConfig;
});

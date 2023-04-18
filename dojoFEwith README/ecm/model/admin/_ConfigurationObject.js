/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"../_ModelObject"
], function(declare, lang, dojojson, _ModelObject) {

	/**
	 * @name ecm.model.admin._ConfigurationObject
	 * @class Provides a base class from which all configuration objects are derived. Configuration objects are used for
	 *        administration of IBM Content Navigator and are not available to all users.
	 * @augments ecm.model._ModelObject
	 * @private
	 */
	return declare("ecm.model.admin._ConfigurationObject", [
		_ModelObject
	], {
		/** @lends ecm.model.admin._ConfigurationObject.prototype */

		/**
		 * A string holding the struts action name.
		 */
		action: "admin/configuration",

		/**
		 * A object holding the common used parameters such as application. More parameters can be added later.
		 */
		default_params: {
			application: "navigator"
		},

		/**
		 * Constructs a configuration base object
		 * 
		 * @param id
		 *            The configuration object id
		 * @param name
		 *            The configuration object name (ie, "RepositoryConfig" or "DesktopConfig")
		 * @param action
		 *            The STRUTS action name default is "admin/configuration".
		 */
		constructor: function(id, name, action) {
			this.logDebug("_ConfigurationObject", "constructor: id:" + id + ", name: " + name + ", action: " + action);
			this._attributes = {};
			if (action)
				this.action = action;
		},

		/**
		 * @param action
		 *            The STRUTS action name default is "admin/configuration".
		 */
		setAction: function(action) {
			if (action)
				this.action = action;
		},

		/**
		 * Get an single object from _attributes by name.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @return Returns an object value back
		 */
		getValue: function(attribute) {
			if (this._attributes)
				return this._attributes[attribute];
		},

		/**
		 * Get an array of objects from _attributes by name.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @return Returns an array of objects back
		 */
		getValues: function(attribute) {
			if (this._attributes) {
				var v = this._attributes[attribute];
				if (lang.isArray(v)) {
					return v;
				} else if (v) {
					return [
						v
					];
				}
			}
		},

		/**
		 * Get an single boolean value from _attributes by name.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @return Returns an object value back
		 */
		getBoolean: function(attribute) {
			var value = this.getValue(attribute);
			return (value === true || value == "true");
		},

		/**
		 * Set an single object in _attributes by name.
		 * 
		 * @param attribute
		 *            The attribute name.
		 */
		setValue: function(attribute, value) {
			this._attributes[attribute] = value;
		},

		/**
		 * Set an array of objects in _attributes by name.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @param values
		 *            An array of objects.
		 */
		setValues: function(attribute, values) {
			this._attributes[attribute] = values;
		},

		/**
		 * Set an single boolean value in _attributes by name.
		 * 
		 * @param attribute
		 *            The attribute name.
		 */
		setBoolean: function(attribute, value) {
			value = (value === true || value == "true");
			this.setValue(attribute, (value ? "true" : "false"));
		},

		/**
		 * Does this attribute exist in _attribute.
		 * 
		 * @param attribute
		 *            The attribute name.
		 * @return Returns boolean value indicate if attribute exist or not in the _attribute
		 */
		hasAttribute: function(attribute) {
			return (typeof this._attributes[attribute] != "undefined");
		},

		/**
		 * Return the internal _attributes object created in constructor.
		 * 
		 * @return Return the internal _attributes object created in constructor.
		 */
		getAttributes: function() {
			return this._attributes;
		},

		/**
		 * Return a boolean value to indicate if this configuration object exist in the server. Server-side code has
		 * been changed and therefore we have at least one property(id). Identifier will be returned.
		 * 
		 * @return Return a boolean value indicate if this configuration exist in the server.
		 */
		isEmpty: function() {
			var count = 0;
			if (this._attributes) {
				for ( var property in this._attributes) {
					if (this._attributes.hasOwnProperty(property))
						count++;
				}
			}
			return (count <= 1);
		},

		/**
		 * Mixing array of objects and return final result.
		 * 
		 * @since ICN 2.0.3.4
		 */
		_mixin: function(objs) {
			var params = {};
			var arrayLength = objs.length;
			for (var i = 0; objs && i < arrayLength; i++) {
				objs[i] && lang.mixin(params, objs[i])
			}
			return params
		},

		/**
		 * Retrieve a list of contained objects back based on type parameter and call the call-back method. Each
		 * configuration object has supported type (ie "plugins", "viewers", "properties"). Please check its
		 * documentation to find out what type is supported. If type is not found, a empty list will be returned. Not
		 * all configuration support type.
		 * 
		 * @param type
		 *            The object type (ie "plugins", "viewers", "properties").
		 * @param callback
		 *            A call back method. Call-back method will be called at end with result list as parameter if
		 *            provided.
		 * @param sorted.
		 *            A string "true/false" to enlist return list is sorted by the id. Default is "false".
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		listConfig: function(type, callback, sorted, extraParams) {
			this.logEntry(arguments.callee.nom);
			if (sorted == undefined) {
				sorted = "false";
			}

			var params = this._mixin([
				{
					action: "list",
					id: this.id,
					userid: ecm.model.desktop.userId,
					type: type,
					sorted: sorted,
					configuration: this.name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var self = this;
			var request = ecm.model.Request.invokeService(this.action, null, params, function(response) { // onFinished
				if (callback)
					callback(response.list);
			});
			this.logExit(arguments.callee.nom);
			return self;
		},

		/**
		 * Retrieve a configuration object back based on the id. Id and name is an internal private attribute provided
		 * in constructor. Id is the unique identifier and name is the configuration name such as "RepositoryConfig" or
		 * "DesktopConfig". User will need to create an configuration object first then use this method.
		 * 
		 * @param callback
		 *            A call back method. Call-back method will be called at end with result object as parameter if
		 *            provided.
		 * @param synchronous.
		 *            A boolean value used in invokeService call to sync or not.
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		getConfig: function(callback, synchronous, extraParams) {
			this.logEntry(arguments.callee.nom);
			var params = this._mixin([
				{
					action: "get",
					id: this.id,
					userid: ecm.model.desktop.userId,
					configuration: this.name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var self = this;
			var request = ecm.model.Request.invokeService(this.action, null, params, function(response) { // onFinished
				lang.mixin(self, {
					_attributes: response.configuration
				});
				if (callback)
					callback(self);
			}, false, synchronous);
			this.logExit(arguments.callee.nom);
			return self;
		},

		/**
		 * Retrieve a unique configuration object back based on the id. Id and name is an internal private attribute
		 * provided in constructor. Id is the unique identifier and name is the configuration name such as
		 * "RepositoryConfig" or "DesktopConfig". User will need to create an configuration object first then use this
		 * method.
		 * 
		 * @param callback
		 *            A call back method. Call-back method will be called at end with result object as parameter if
		 *            provided.
		 * @param synchronous.
		 *            A boolean value used in invokeService call to sync or not.
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		getUniqueConfig: function(callback, extraParams) {
			this.logEntry(arguments.callee.nom);
			var params = this._mixin([
				{
					action: "get",
					id: this.id,
					userid: ecm.model.desktop.userId,
					configuration: this.name,
					operator: "unique",
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var self = this;
			var request = ecm.model.Request.invokeService(this.action, null, params, function(response) { // onFinished
				lang.mixin(self, {
					_attributes: response.configuration
				});
				if (callback)
					callback(self);
			});
			this.logExit(arguments.callee.nom);
			return self;
		},

		/**
		 * Add a configuration object. Id and name is an internal private attribute provided in constructor. Id is the
		 * unique identifier and name is the configuration name such as "RepositoryConfig" or "DesktopConfig". User will
		 * need to create an configuration object first then use this method. The last three parameters
		 * updateListConfig, updateListId and updateListType are used to update its container object in the same time as
		 * this object is added to the back-end. It identifies its parent object's id, name and type.
		 * 
		 * @param callback
		 *            A call back method. Call-back method will be called at end with response as parameter if provided.
		 * @param updateListConfig
		 *            A configuration object name ie "RepositoryConfig" or "DesktopConfig"
		 * @param updateListId.
		 *            A configuration object id.
		 * @param updateListType
		 *            The object type (ie "plugins", "viewers", "properties").
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		addConfig: function(callback, updateListConfig, updateListId, updateListType, extraParams) {
			this.logEntry(arguments.callee.name);
			var params = this._mixin([
				{
					action: "add",
					id: this.id,
					userid: ecm.model.desktop.userId,
					configuration: this.name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);

			if (updateListConfig && updateListId && updateListType) {
				params.update_list_configuration = updateListConfig;
				params.update_list_id = updateListId;
				params.update_list_type = updateListType;
			}

			var request = ecm.model.Request.postService(this.action, null, params, "text/json", JSON.stringify(this._attributes, null), function(response) { // onFinished
				if (callback)
					callback(response);
			});
			this.logExit(arguments.callee.name);
			return this;
		},

		/**
		 * Update a configuration object. Id and name is an internal private attribute provided in constructor. Id is
		 * the unique identifier and name is the configuration name such as "RepositoryConfig" or "DesktopConfig". User
		 * will need to create an configuration object first then use this method.
		 * 
		 * @param callback
		 *            A call back method. Call-back method will be called at end with response as parameter if provided.
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		updateConfig: function(callback, extraParams) {
			this.logEntry(arguments.callee.name);
			var params = this._mixin([
				{
					action: "update",
					id: this.id,
					userid: ecm.model.desktop.userId,
					configuration: this.name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.postService(this.action, null, params, "text/json", JSON.stringify(this._attributes, null), function(response) { // onFinished
				if (callback)
					callback(response);
			});
			this.logExit(arguments.callee.name);
			return this;
		},

		/**
		 * Remove a list of homogeneous configuration objects from Application object. Id is the unique identifier and
		 * name is the configuration name such as "RepositoryConfig" or "DesktopConfig". User will need to create an
		 * configuration object first then use this method.
		 * 
		 * @param configs
		 *            A list of homogeneous configuration objects. Its id will be extracted to create an id array to
		 *            pass to the back-end along with its configuration type (ie "RepositoryConfig" or "DesktopConfig").
		 * @param callback
		 *            A call back method. Call-back method will be called at end with response as parameter if provided.
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		deleteConfigs: function(configs, name, callback, extraParams) {
			this.logEntry(arguments.callee.name);
			var ids = [];
			for ( var i in configs) {
				ids.push(configs[i].id);
			}
			var params = this._mixin([
				{
					action: "deleteList",
					ids: dojojson.toJson(ids),
					id: this.id,
					userid: ecm.model.desktop.userId,
					configuration: configs[0].name,
					update_app_configuration_type: name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.invokeService(this.action, null, params, function(response) { // onFinished
				if (callback)
					callback(response);
			});
			this.logExit(arguments.callee.name);
			return this;
		},

		/**
		 * Remove a configuration object. Id and name is an internal private attribute provided in constructor. Id is
		 * the unique identifier and name is the configuration name such as "RepositoryConfig" or "DesktopConfig". User
		 * will need to create an configuration object first then use this method.
		 * 
		 * @param callback
		 *            A call back method. Call-back method will be called at end with response as parameter if provided.
		 * @param extraParams
		 * @since ICN 2.0.3.4 passing extra parameters to mid-tier
		 */
		deleteConfig: function(callback, extraParams) {
			this.logEntry(arguments.callee.name);
			var params = this._mixin([
				{
					action: "delete",
					id: this.id,
					userid: ecm.model.desktop.userId,
					configuration: this.name,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				},
				this.default_params,
				extraParams
			]);
			var request = ecm.model.Request.invokeService(this.action, null, params, function(response) { // onFinished
				if (callback)
					callback(response);
			});
			this.logExit(arguments.callee.name);
			return this;
		}

	});
});

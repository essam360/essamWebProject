/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/json",
	"dojox/mvc/getStateful",
	"ecm/model/_ModelObject",
	"ecm/model/Request"
], function(declare, lang, dojojson, getStateful, _ModelObject, Request) {

	/**
	 * @name ecm.model.Configuration
	 * @class Provides a model class used to work with configuration data. Only users with administration rights in IBM
	 *        Content Navigator can use the methods provided by the class.
	 * @augments ecm.model._ModelObject
	 */
	var Configuration = declare("ecm.model.Configuration", [
		_ModelObject
	], {
		/** @lends ecm.model.Configuration.prototype */

		/**
		 * A string holding the jax-rs action name.
		 */
		action: "admin/configuration",

		/**
		 * Retrieve a configuration object back based on the id. Id and name is an internal private attribute provided
		 * in constructor. Id is the unique identifier and name is the configuration name such as "RepositoryConfig" or
		 * "DesktopConfig". User will need to create an configuration object first then use this method.
		 * 
		 * @param params
		 *            Object containing:
		 *            <li>id - Identifier of the configuration object to retrieve</li>
		 *            <li>configuration - Name of the configuration being retrieved</li>
		 *            <li>type - The object type (e.g. "plugins", "viewers", "properties").</li>
		 *            <li>login_desktop - Optional desktop identifier.</li>
		 * @param callback
		 *            A call back method. Call-back method will be called at end with a Stateful model parameter.
		 * @return A {@link dojo.Stateful} model object
		 */
		retrieveConfigObj: function(params, callback) {
			this.logEntry("retrieveConfigObj", params);
			if (!params || !params.type || !params.id || !params.configuration) {
				this.logError("Missing or invalid parameter list for method \"retrieveConfigObj\"");
				return;
			}

			lang.mixin(params, {
				action: "get",
				statefulModel: true
			});
			var request = Request.invokeService(this.action, null, params, lang.hitch(this, function(response) { // onFinished
				var model = getStateful(response);
				this.onRetrieveConfigObj(model);
				if (callback) {
					callback(model);
				}
			}));

			this.logExit("retrieveConfig");
			return request;
		},

		/**
		 * Method called when a configuration object has been retrieved.
		 * 
		 * @param model
		 *            An instance of a {@link dojo.Stateful} model object containing the configuration data.
		 */
		onRetrieveConfigObj: function(model) {
		},

		/**
		 * Retrieve a list of contained objects back based on type parameter and call the call-back method. Each
		 * configuration object has supported type (e.g. "plugins", "viewers", "properties"). Please check its
		 * documentation to find out what type is supported. If type is not found, a empty list will be returned. Not
		 * all configuration support type.
		 * 
		 * @param params
		 *            Object containing:
		 *            <li>type - The object type (e.g. "plugins", "viewers", "properties").</li>
		 *            <li>sorted - Optional boolean indicating if the list should be sorted</li>
		 *            <li>login_desktop - Option desktop identifier.</li>
		 * @param callback
		 *            A call back method. Call-back method will be called at end with a Stateful model parameter.
		 * @return An array of {@link dojo.Stateful} model objects
		 */
		retrieveConfigObjList: function(params, callback) {
			this.logEntry("retrieveConfigObjList", params);

			if (!params || !params.id || !params.type || !params.configuration) {
				this.logError("Missing or invalid parameter list for method \"retrieveConfigObjList\"");
				return;
			}

			lang.mixin(params, {
				action: "list",
				statefulModel: true
			});
			var request = Request.invokeService(this.action, null, params, function(response) { // onFinished
				var list = [];

				if (response && response.length > 0) {
					for ( var i in response) {
						list.push(getStateful(response[i]));
					}
				}

				this.onRetrieveConfigObjList(list);
				if (callback) {
					callback(list);
				}
			});

			this.logExit("retrieveConfigObjList");
			return request;
		},

		/**
		 * Method called when a list of configuration objects have been retrieved.
		 * 
		 * @param list
		 *            An array of {@link dojo.Stateful} model objects containing the configuration data.
		 */
		onRetrieveConfigObjList: function(list) {
		},

		/**
		 * Creates a new a configuration object.
		 * 
		 * @param params
		 *            Object containing:
		 *            <li>configuration - Name of the configuration to create.</li>
		 *            <li>login_desktop - Optional desktop identifier.</li>
		 * @param callback
		 *            A call back method. Call-back method will be called at end with a Stateful model parameter.
		 * @return A {@link dojo.Stateful} model object
		 */
		newConfigObj: function(params, callback) {
			this.logEntry("newConfigObj", params);
			if (!params || !params.configuration) {
				this.logError("Missing or invalid parameter list for method \"newConfigObj\"");
				return;
			}

			lang.mixin(params, {
				id: "new",
				action: "new",
				statefulModel: true
			});
			var request = Request.invokeService(this.action, null, params, lang.hitch(this, function(response) { // onFinished
				var model = getStateful(response);
				model.isNewConfigObj = true;
				this.onNewConfigObj(model);
				if (callback) {
					callback(model);
				}
			}));

			this.logExit("newConfigObj");
			return request;
		},

		/**
		 * Method called when a new configuration object has been created.
		 * 
		 * @param model
		 *            An instance of a {@link dojo.Stateful} model object containing the configuration data.
		 */
		onNewConfigObj: function(model) {
		},

		/**
		 * Adds a new configuration object or updates an existing object in IBM Content Navigator.
		 * 
		 * @param params
		 *            Object containing:
		 *            <li>application - Name of the application containing the configuration.</li>
		 *            <li>login_desktop - Optional desktop identifier.</li>
		 *            <li>model - An instance of a {@link dojo.Stateful} object containing the data to add or update.</li>
		 * @param callback
		 *            A call back method. Call-back method will be called at end with a Stateful model parameter.
		 */
		saveConfigObj: function(params, callback) {
			this.logEntry("saveConfigObj", params);
			if (!params || !params.model || !params.application) {
				this.logError("Missing or invalid parameter list for method \"saveConfigObj\"");
				return;
			}

			var reqParams = {
				application: params.application,
				action: (params.model.isNewConfigObj ? "add" : "update"),
				id: params.model.get("id").get("value"),
				configuration: params.model.type,
				statefulModel: true,
				json_post: dojojson.toJson(params.model),
				login_desktop: params.login_desktop
			};
			var request = Request.invokeService(this.action, null, reqParams, lang.hitch(this, function(response) { // onFinished
				var newModel = getStateful(response);
				if (callback) {
					callback(newModel);
				}
			}));

			this.logExit("saveConfigObj");
			return request;
		},

		/**
		 * Method called when a new configuration object has been added to the configuration.
		 * 
		 * @param model
		 *            An instance of a {@link dojo.Stateful} model object containing the configuration data.
		 */
		onSaveConfigObj: function(model) {
		}
	});

	/**
	 * @name ecm.model.configuration
	 * @description A global instance of {@link ecm.model.Configuration} for the IBM Content Navigator toolkit.
	 */
	ecm.model.configuration = new Configuration({
		id: "configuration",
		name: "Configuration Service"
	});
	return ecm.model.configuration;
});

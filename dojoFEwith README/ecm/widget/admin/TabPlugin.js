/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/kernel",
	"dojo/_base/xhr",
	"dojo/string",
	"dojo/_base/sniff",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-style",
	"dojo/aspect",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/layout/ContentPane",
	"idx/layout/BorderContainer",
	"ecm/MessagesMixin",
	"ecm/LoggerMixin",
	"ecm/model/admin/AdminData",
	"ecm/model/admin/PluginConfig",
	"ecm/widget/admin/_NavigatorAdminTabBase",
	"ecm/widget/HoverHelp",
	"ecm/widget/ValidationTextBox",
	"ecm/widget/RadioButton",
	"ecm/widget/admin/model/NavigatorAdminInstanceObject",
	"dojo/text!./templates/TabPlugin.html"
], //

function(declare, lang, array, connect, kernel, xhr, string, has, construct, domClass, attr, style, aspect, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, ContentPane, BorderContainer, MessagesMixin, LoggerMixin, AdminData, PluginConfig, _NavigatorAdminTabBase, HoverHelp, ValidationTextBox, RadioButton, NavigatorAdminInstanceObject, template) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.TabPlugin
	 * @class Provides a tab that is used to add a plug-in or edit the information for a plug-in.
	 */
	return declare("ecm.widget.admin.TabPlugin", [
		_NavigatorAdminTabBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.TabPlugin.prototype */

		templateString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments)

			this.resetButton.set("title", this._messages.reset_hover);
		},

		/**
		 * Overwritten to initialize this widget.
		 */
		initialize: function() {
			this.fileField.setHoverHelp(this.fileNameFieldHoverHelp);
			this.fileFieldClass.setHoverHelp(this.classFileNameFieldHoverHelp);
			this.fileFieldClassName.setHoverHelp(this.fileNameFieldHoverHelp_pcn);

			this._configClass = null;
			this._configString = null;
			this._disableSave();
			this._disableReset();
			this._pluginConfigDijitDirty = false;
			var name = this._myAdminModel ? this._myAdminModel.getName() : ecm.messages.admin_new_plugin;
			this._updateName(name);
			this.setTitle(name);
			this.setInstructions(this.getInstructions());
			domClass.remove(this.pluginProperties, "pluginLoaded");
			style.set(this._pluginConfigParamsPane, "display", "none");
			this.clearMessage();
			
			this.own(aspect.after(ecm.model.admin.adminData, "onChange", lang.hitch(this, function(changedModel) {
				if (changedModel instanceof PluginConfig) {
					this._checkSave();
				}}), true));

			this._loadData();
			this._checkSave();
		},

		_loadData: function() {
			if (this._myAdminModel) {
				this._id = this._myAdminModel.id;
				//set the plugin class value
				if (this._myAdminModel.getFileName().indexOf(".jar") < 0 && this._myAdminModel.getClassName()) {
					this._disableclass.set("checked", false);
					this._disableFile.set("checked", true);
					this.fileField.set("disabled", true);
					this.loadPluginButton.set("disabled", true);
					this.fileFieldClass.set('value', this._myAdminModel.getFileName());
					this.fileFieldClassName.set('value', this._myAdminModel.getClassName());
				} else {
					this._disableclass.set("checked", true);
					this._disableFile.set("checked", false);
					this.fileFieldClass.set("disabled", true);
					this.fileFieldClassName.set("disabled", true);
					this.loadPluginClassButton.set("disabled", true);
					this.fileField.set('value', this._myAdminModel.getFileName());
				}
				this.dependencies = this._myAdminModel.getPluginDependencies();
				this.nameField.innerHTML = this._myAdminModel.getName();
				this._configString = this._myAdminModel.getConfiguration();
				if (this._myAdminModel.getConfigClass() == "")
					style.set(this._pluginConfigParamsPane, "display", "none");
				else
					this._getPluginDetails(this._id);

			} else {
				this._disableclass.set("checked", true);
				this._disableFile.set("checked", false);
				this.fileFieldClass.set("disabled", true);
				this.fileFieldClassName.set("disabled", true);
				this.loadPluginClassButton.set("disabled", true);
				this.fileField.reset();
				this._configString = null;
				this._configClass = null;
				this.dependencies = [];
				domClass.remove(this.pluginProperties, "pluginLoaded");
				style.set(this._pluginConfigParamsPane, "display", "none");
			}
			this._pluginConfigDijitDirty = false;
		},

		_loadWithFieldValues: function(adminModel) {
			if (this._disableclass.checked) {
				adminModel.setFileName(this.fileField.get('value'));
			} else {
				adminModel.setFileName(this.fileFieldClass.get('value'));
				adminModel.setClassName(this.fileFieldClassName.get('value'));
			}

			adminModel.setName(this.nameField.innerHTML);
			adminModel.setVersion(this.versionField.innerHTML);
			adminModel.setConfigClass(this._configClass);
			if (this.dependencies) {
				adminModel.setPluginDependencies(this.dependencies);
			}

			if (this._configDijit)
				adminModel.setConfiguration(this._configDijit.configurationString);
		},

		/**
		 * Overwritten to return if it is resetting the fields to the original values.
		 */
		_isResetingFields: function() {
			if (this._pluginConfigDijitDirty)
				return false;

			var isResetting = true;
			if (this._myAdminModel) {
				if (this.fileField.get('value') != this._myAdminModel.getFileName()) {
					isResetting = false;
				}
			} else {
				if (this.fileField.get('value') != '') {
					isResetting = false;
				}
			}
			return isResetting;
		},

		/**
		 * Overwritten to actually save the data and invoke onComplete() with the status.
		 */
		_saveData: function(/* function(success) */onComplete) {
			if (this._myAdminModel) {
				if (this._configDijit && this._pluginConfigDijitDirty) {
					this._pluginConfigDijitDirty = false;
					this._configDijit.save();
				}
				this._loadWithFieldValues(this._myAdminModel);
				ecm.model.admin.appCfg.updateApplicationPluginConfig(this._myAdminModel, lang.hitch(this, function(response) {
					this._updateName(this._myAdminModel.getName());
					this.setTitle(this._myAdminModel.getName());
					ecm.model.admin.adminData.onChange(this._myAdminModel);
					if (onComplete)
						onComplete(true);
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
				});
			} else {
				var newAdminModel = new PluginConfig(this._id, "PluginConfig");
				//initally set ordering to 0 - default ordering
				if (ecm.model.admin.adminData.plugins) {
					newAdminModel.setOrdering(ecm.model.admin.adminData.plugins.length + 1);
				} else {
					newAdminModel.setOrdering(0);
				}

				this._loadWithFieldValues(newAdminModel);
				ecm.model.admin.appCfg.addApplicationPluginConfig(newAdminModel, lang.hitch(this, function(response) {
					this._myAdminModel = newAdminModel;
					this._updateName(newAdminModel.getName());
					this.setTitle(newAdminModel.getName());
					ecm.model.admin.adminData.loadPlugins(function(){
						var _newAdminModel = newAdminModel;
						ecm.model.admin.adminData.onChange(_newAdminModel);
					});
					if (onComplete) {
						onComplete(true);
					}
				}), {
					securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
				});
			}
		},

		clearMessage: function() {
			// Hide the message.
			style.set(this.inlineMessage, "display", "none");
			// Restore to default of error.
			attr.set(this.inlineMessage, "class", "inlineMessage inlineMessageError");
			// Remove the text.
			if (this.messageText.firstChild) {
				this.messageText.removeChild(this.messageText.firstChild);
			}
		},
		
		displayMessage: function(messageText, messageType){
			var msgClassNames = "inlineMessage ";
			if (messageType == "warning"){
				msgClassNames += "inlineMessageWarning";
			}
			else {
				msgClassNames += "inlineMessageError";
			}
			attr.set(this.inlineMessage, "class", msgClassNames);
			
			if (this.messageText.firstChild) {
				// Update the existing message text.
				this.messageText.firstChild.nodeValue = messageText;
			} else {
				// Create the message text.
				var textNode = document.createTextNode(messageText);
				this.messageText.appendChild(textNode);
			}
			style.set(this.inlineMessage, "display", "");
		},

		_onLoadPlugin: function(reload) {
			var params = {
				application: "navigator",
				userid: ecm.model.desktop.userId,
				securityTopic: this._SECURITY_TOPIC.category
			};

			if (this._disableFile.checked == true) {
				lang.mixin(params, {
					className: this.fileFieldClassName.get("value"),
					fileName: this.fileFieldClass.get("value")
				});
			} else {
				lang.mixin(params, {
					fileName: this.fileField.get("value")
				});
			}
			var request = ecm.model.Request.invokeService("admin/loadPlugin", null, params, lang.hitch(this, function(response) {
				this._pluginRequestCompleted(response, true);
			}));
		},

		_getPluginDetails: function(pluginId) {
			var params = {
				plugin: pluginId
			};
			var request = ecm.model.Request.invokeService("admin/getPluginDetails", null, params, lang.hitch(this, function(response) {
				this._pluginRequestCompleted(response, false);
			}));
		},

		_pluginRequestCompleted: function(response, loading) {
			this.setTitle((response.name == undefined) ? this.messages.admin_new_plugin : response.name);
			this._id = response.id;
			this.nameField.innerHTML = (response.name == undefined) ? this.messages.admin_plugin_not_available : response.name;
			this.versionField.innerHTML = (response.version == undefined) ? this.messages.admin_plugin_not_available : response.version;
			if (response.name) {
				this._updateName(response.name);
			}
			this._loadFieldValues(this.repositoryTypesField, response.repositoryTypes);
			this._loadFieldValues(this.actionsField, response.actions);
			this._loadFieldValues(this.openActionsField, response.openActions);

			if (response.dependencies) {
				this.dependencies = response.dependencies;
			} else {
				this.dependencies = [];
			}
			// Perform initializations for the plugin
			if (response.cssFileName) {
				var cssFileUrl = ecm.model.Request.getPluginResourceUrl(response.id, response.cssFileName);
				if (has("isIE")) {
					document.createStyleSheet(cssFileUrl);
				} else {
					var head = document.getElementsByTagName("head")[0];
					var link = document.createElement("link");
					link.rel = "stylesheet";
					link.type = "text/css";
					link.href = cssFileUrl;
					head.appendChild(link);
				}
			}
			if (response.dojoModule) {
				var moduleUrl = ecm.model.Request.getPluginResourceUrl(response.id, response.dojoModule);
				if (moduleUrl.indexOf("./") == 0) { // a relative url
					moduleUrl = "." + moduleUrl; // change to .. since relative to dojo
				}
				kernel.registerModulePath(response.dojoModule, escape(moduleUrl));
			}

			var script;
			if (this.isLogDebug() && response.debugScript) {
				script = response.debugScript;
			} else {
				script = response.script;
			}
			if (script) {
				var scriptUrl = ecm.model.Request.getPluginResourceUrl(response.id, script);
				try {
					var scriptText;
					xhr.get({
						url: scriptUrl,
						sync: true,
						load: function(text) {
							scriptText = text;
						}
					});
					eval(scriptText);
				} catch (e) {
					this.logError("_desktopLoaded", "Error evaluating JavaScript for plugin " + response.id, e.message);
					ecm.model.desktop.addMessage(ecm.model.Message.createErrorMessage("plugin_error", [
						response.id
					]));
				}
			}

			if (response.configClass != null) {
				this._configClass = response.configClass;
				this._displayPluginConfig(response);
			}
			this._loadFieldValues(this.viewersField, response.viewerDefs);
			this._loadFieldValues(this.featuresField, response.features);
			this._loadFieldValues(this.layoutsField, response.layouts);
			domClass.add(this.pluginProperties, "pluginLoaded");
			style.set(this._pluginConfigParamsPane, "display", "block");
			
			if (response.messages){
				this.displayMessage(this.messages.admin_plugin_file_not_found, "error");
				this._disableSave();
			}
			else if (this._pluginDependenciesValid()){
				this.clearMessage();
				
				if (loading == true) {
					this._markDirty();
					this._checkSave();
				} else {
					this._disableSave();
				}
			}
			else {
				this._disableSave();
			}
		},
		
		/**
		 * @private
		 */
		_pluginDependenciesValid: function(){
			var valid = true;
			
			if (this.dependencies.length > 0){
				// Check that plugins this one depends on are present and enabled.
				var plugins = {};
				for (var index in ecm.model.admin.adminData.plugins){
					var pluginConfig = ecm.model.admin.adminData.plugins[index];
					plugins[pluginConfig.id] = pluginConfig;
				}
				
				var requiredPlugins = [];
				for (var index in this.dependencies){
					var requiredPluginId = this.dependencies[index];
					var requiredPluginConfig = plugins[requiredPluginId];
					if (!requiredPluginConfig || !requiredPluginConfig.getEnabled()){
						requiredPlugins.push(requiredPluginConfig ? requiredPluginConfig.getName() : requiredPluginId);
					}
				}
				
				if (requiredPlugins.length > 0){
					var messageText = string.substitute(this.messages.admin_plugin_cannot_add, [
					                        						requiredPlugins.join(",")
					                        						])
					this.displayMessage(messageText, "error");
					valid = false
				}
				else{
					this.clearMessage();
				}
			}
			return valid;
		},

		_buildFieldValues: function(valuesJSON) {
			var concatenatedValues = "";
			for ( var i in valuesJSON) {
				var valueJSON = valuesJSON[i];
				if (concatenatedValues.length > 0) {
					concatenatedValues += ", ";
				}
				concatenatedValues += valueJSON.label;
			}
			if (concatenatedValues == "") {
				concatenatedValues = this.messages.none;
			}
			return concatenatedValues;
		},

		_loadFieldValues: function(field, valuesJSON) {
			field.innerHTML = this._buildFieldValues(valuesJSON);
		},

		_displayPluginConfig: function(plugin) {
			var configDijit = plugin.configClass;

			var callback = lang.hitch(this, function() {
				if (this._configString)
					this._configDijit.configurationString = this._configString;
				this._configDijit.load();
				connect.connect(this._configDijit, "onSaveNeeded", this, function() {
					this._pluginConfigDijitDirty = true;
					this._onFieldChange();
				});
				this.pluginConfigParams.appendChild(this._configDijit.domNode);
				this._configDijit.startup();
			});
			if (!this._configDijit) {
				//
				if (plugin.dojoModule) {
					var moduleUrl = ecm.model.Request.getPluginResourceUrl(plugin.id, plugin.dojoModule);
					if (moduleUrl.indexOf("./") == 0) { // a relative url
						moduleUrl = "." + moduleUrl; // move to top of app
					}
					kernel.registerModulePath(plugin.dojoModule, moduleUrl);
				}
				require([
					configDijit.split('.').join('/')
				], lang.hitch(this, function(cls) {
					this._configDijit = new cls();
					callback();
				}));
			} else {
				callback();
			}

		},

		setInstructions: function(msg) {
			this.instructions.innerHTML = msg;
		},

		getInstructions: function() {
			return this._messages.admin_plugin_instructions;
		},

		_updateName: function(name) {
			construct.place("<label>" + string.substitute(this.messages.admin_plugin_heading, [
				name
			]) + "</label>", this.headingText, "only");
		},

		/**
		 * Overwritten to check if all the data is valid.
		 */
		_validateData: function() {
			if (this._disableclass.checked == true) {
				if (!this.fileField.isValid()) {
					this.fileField.focus();
					return false;
				}
				this.loadPluginButton.set("disabled", false);

			}

			if (this._disableFile.checked == true) {
				if (!this.fileFieldClass.isValid()) {
					return false;
				}
				if (!this.fileFieldClassName.isValid()) {
					return false;
				}
				this.loadPluginClassButton.set("disabled", false)
			}

			if (this._configDijit != null && !this._configDijit.validate()) {
				return false;
			}
			
			if (!this._pluginDependenciesValid()){
				return false;
			}
			return true;
		},

		resize: function() {
			this.borderContainer.resize();
		},

		_onDisableFile: function() {
			this.fileField.reset();
			this.fileField.set("disabled", true);
			this.loadPluginButton.set("disabled", true);

			this.fileFieldClass.set("disabled", false);
			this.fileFieldClassName.set("disabled", false);
		},

		_onDisableClass: function() {
			this.fileFieldClass.reset();
			this.fileFieldClassName.reset();
			this.fileFieldClass.set("disabled", true);
			this.fileFieldClassName.set("disabled", true);
			this.loadPluginClassButton.set("disabled", true);

			this.fileField.set("disabled", false);
		}

	});

});

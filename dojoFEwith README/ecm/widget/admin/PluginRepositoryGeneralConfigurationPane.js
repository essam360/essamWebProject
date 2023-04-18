/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"ecm/MessagesMixin", //
	"dijit/layout/ContentPane"
], //

function(declare, lang, MessagesMixin, ContentPane) {

	/**
	 * @name ecm.widget.admin.PluginRepositoryGeneralConfigurationPane
	 * @class Provides a base class that can be extended to create an interface for the general tab of repository
	 *        configuration for a plug-in provided repository type.
	 */
	return declare("ecm.widget.admin.PluginRepositoryGeneralConfigurationPane", [
		ContentPane,
		MessagesMixin
	], {
		/** @lends ecm.widget.admin.PluginRepositoryGeneralConfigurationPane.prototype */
		baseClass: "pluginPropertyTable",

		serverName: "",
		port: "",

		/**
		 * Parameter to save the custom configuration.
		 */
		configurationString: null,

		/**
		 * Called by administration to load the configuration settings into the interface. Plug-in writers should
		 * override this method to load the settings for the plug-in's configuration into the configuration interface.
		 * This might also be called by administration to reset the settings displayed in the configuration interface.
		 * 
		 * @param repositoryConfig
		 *            An instance of ecm.model.admin.RepositoryConfig for the repository.
		 */
		load: function(repositoryConfig) {
		},

		/**
		 * An event to indicate when the settings displayed in the configuration pane have changed such that they need
		 * to be saved. This event is listened to by the administration to determine when to enable the save button.
		 * 
		 * @param saveNeeded
		 *            A boolean, true if save is needed, and false if not.
		 */
		onSaveNeeded: function(saveNeeded) {
		},

		/**
		 * Called by administration to validate the current values in the plug-in configuration interface. Plug-in
		 * writers should override this method, returning false if any values are not valid, and also focus on the field
		 * and indicate the invalid field.
		 */
		validate: function() {
			return true;
		},

		/**
		 * Called by administration to save the configuration settings displayed by this interface. Plug-in writers
		 * should override this method to save the settings for the plug-in's configuration interface into the
		 * configuration database.
		 * 
		 * @param repositoryConfig
		 *            An instance of ecm.model.admin.RepositoryConfig where configuration values should be saved. In
		 *            particular, serverName and port should be saved (if they exist for the repository) as these show
		 *            in the display in the list of all repositories as columns. Other information should be encoded
		 *            into a single string (suggest using JSON) and saved using setCustomProperties.
		 */
		save: function(repositoryConfig) {
		},

		/**
		 * Called before invoking the repository logon in admin in order to build up a parameter list to pass to the
		 * logon.
		 * 
		 * @param params
		 *            An object where parameters should be added. Usually serverName should be added, as well as any
		 *            other parameters needed to login.
		 */
		getLogonParams: function(params) {
		}

	});
});

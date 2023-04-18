/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"ecm/MessagesMixin", //
	"ecm/LoggerMixin", //
	"dijit/layout/ContentPane"
], //

function(declare, lang, MessagesMixin, LoggerMixin, ContentPane) {

	/**
	 * @name ecm.widget.admin.PluginConfigurationPane
	 * @class Provides a base class that can be extended to create a configuration interface for a plug-in.
	 */
	return declare("ecm.widget.admin.PluginConfigurationPane", [
		ContentPane,
		MessagesMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.admin.PluginConfigurationPane.prototype */

		/**
		 * Parameter to save the custom configuration.
		 */

		configurationString: null,

		/** @lends ecm.widget.admin.PluginConfigurationPane.prototype */

		/**
		 * Called by administration to load the configuration settings into the interface. Plug-in writers should
		 * override this method to load the settings for the plug-in's configuration into the configuration interface.
		 * This might also be called by administration to reset the settings displayed in the configuration interface.
		 * 
		 * @param onComplete
		 *            A function to be invoked when the load completes.
		 */
		load: function(onComplete) {
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
		 * @param onComplete
		 *            A function to be invoked when the load completes.
		 */
		save: function(onComplete) {
		}

	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"idx/layout/TitlePane",
	"ecm/LoggerMixin"
], function(declare, TitlePane, LoggerMixin) {

	/**
	 * @name ecm.widget.ItemPropertiesPaneExtension
	 * @class Provides a widget that is used to extend the <code>ItemPropertiesPane</code>. The extension can add a
	 *        new section, similar to the Properties and System Properties sections, that can contain custom properties
	 *        for display and editing by the user.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.ItemPropertiesPaneExtension", [
		TitlePane
	], {
		/** @lends ecm.widget.ItemPropertiesPaneExtension.prototype */

		/**
		 * Overridden to indicate that the provided item is one that has properties of the type to be displayed by this
		 * extension. If <code>true</code> is returned, the extension's section will be added to the properties pane.
		 */
		isEnabledFor: function(item) {
			return true;
		},

		/**
		 * Specifies the item whose custom properties are to be displayed.
		 */
		setItem: function(item) {
		},

		/**
		 * This is an event that should be invoked by the extension whenever a property field has changed. The
		 * containing property editor will listen to this event and enable save when appropriate (when all fields are
		 * valid).
		 */
		onChange: function() {
		},

		/**
		 * This function is invoked prior to saving to determine if a value is not valid. It allows the extension to
		 * disable the saving of properties if a property on the extension is invalid.
		 * 
		 * @return {Boolean} A value of <code>true</code> if the fields are all valid, <code>false</code> otherwise.
		 */
		isValid: function() {
			return true;
		},

		/**
		 * This function is invoked during save. It is passed the JSON representation of the properties for the item as
		 * will be saved. It allows the extension to change these properties or add new properties which will be sent to
		 * the server. <strong>Note:</strong> If new properties are provided, the plug-in that is providing the
		 * extension might need to additionally provide a custom filter to respond to the additional properties and
		 * provide the appropriate actions on the server to save the properties.
		 */
		saveIntoProperties: function(properties) {
		}

	});

});

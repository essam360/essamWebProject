/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../LoggerMixin",
	"../MessagesMixin",
	"idx/html"
], function(declare, LoggerMixin, MessagesMixin, html) {

	/**
	 * @name ecm.model.ConfiguredLabels
	 * @class Represents the set of custom labels for an application.
	 * @augments ecm.LoggerMixin, ecm.MessagesMixin
	 */
	return declare("ecm.model.ConfiguredLabels", [
		LoggerMixin,
		MessagesMixin
	], {
		/** @lends ecm.model.ConfiguredLabels.prototype */

		/**
		 * Constructs the configured labels object
		 *
		 * @param modelObjects
		 *            An array of {@link ecm.model.admin.InterfaceTextConfig} objects that represent labels for the
		 *            application.
		 */
		constructor: function(modelObjects) {
			this._configuredLabelsDict = new Object();

			for ( var i in modelObjects) {
				var modelItem = modelObjects[i];
				var key = modelItem.getLabelKey();
				if (key != null && key != "") {
					this._configuredLabelsDict[key] = modelItem;
				}
			}
		},

		/**
		 * Returns the value of a label given its key
		 *
		 * @public
		 * @param key
		 *            A string value holding the key of the string to return.
		 * @param dojoLocale
		 *            The locale for the label value to return.
	     * @param htmlEscape
         *            Boolean indicating if the value should be html escaped.  If not defined, the default is true.
		 * @return {String} The requested label value.
		 */
		getLabelValue: function(key, dojoLocale, htmlEscape) {
			var value = "";

			// The cfg locale uses Java locale naming which is different from dojo locale naming.
			var cfgLocale = dojoLocale;

			cfgLocale = cfgLocale.replace(/-/, "_");

			// Put into proper case.
			if (cfgLocale == "zh_cn") {
				cfgLocale = "zh_CN";
			} else if (cfgLocale == "zh_tw") {
				cfgLocale = "zh_TW";
			} else if (cfgLocale == "pt_br") {
				cfgLocale = "pt_BR";
			}

			// If this is a country specific locale, change to one we support.
			if (cfgLocale.indexOf("_") > 0 || cfgLocale.indexOf("-") > 0) {
				if (cfgLocale != "zh_CN" && cfgLocale != "zh_TW" && cfgLocale != "pt_BR") {
					cfgLocale = cfgLocale.substring(0, 2);
				}
			}

			if (this._configuredLabelsDict[key] != null) {
				var configuredLabel = this._configuredLabelsDict[key];
				var localeData = configuredLabel.getLocaleData();
				value = localeData.getValue(cfgLocale);
			}

			// If the current value is empty, get the value from the appropriate dojo locale resource bundle
			if (value == null || value == "") {
				var messages = dojo.i18n.getLocalization("ecm", "messages", dojoLocale);
				if (messages && messages[key]) {
					value = messages[key];
				}
			}

			// If not found, default to english
			if (value == null || value == "") {
				var messages = dojo.i18n.getLocalization("ecm", "messages", "en");
				if (messages && messages[key]) {
					value = messages[key];
				}
			}

			// If still not found, return the key.
			if (value == null || value == "") {
				value = key;
			}

			if (htmlEscape == undefined || htmlEscape == true) {
				return html.escapeHTML(value);
			} else {
				return value;
			}
		}
	});
});

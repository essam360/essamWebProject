/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang"
], function(declare, lang) {

	/**
	 * @name ecm.widget._HasPluginMixin
	 */

	var _HasPluginMixin = declare("ecm.widget._HasPluginMixin", null, {
		/** @lends ecm.widget._HasPluginMixin.prototype */

		/**
		 * IE browsers are not supported by this call. On IE, this will always return false. IE11 claims support for
		 * these, but the plugins we look for still don't show up, even if present. So much for IE11.
		 */
		_hasPlugin: function(mimetype) {
			var methodName = "_hasPlugin";
			this.logEntry(methodName);

			var found = false;
			if (navigator.mimeTypes) {
				this.logDebug(methodName, "Looking in navigator.mimeTypes (" + navigator.mimeTypes.length + ") for " + mimetype + " support");
				var plugin = navigator.mimeTypes[mimetype];
				if (plugin && plugin.enabledPlugin) {
					this.logDebug(methodName, "Found plugin " + plugin.enabledPlugin.name + " which can open " + mimetype);
					found = true;
				}
			} else if (navigator.plugins) {
				this.logDebug(methodName, "Looking in navigator.plugin mimetypes (" + navigator.plugins.length + ") for " + mimetype + " support");
				for (var i = 0; i < navigator.plugins.length && !found; i++) {
					var plugin = navigator.plugins[i];
					this.logDebug(methodName, "Looking in plugin " + plugin.name);
					for (var j = 0; j < plugin.length && !found; j++) {
						if (plugin[j].type == mimetype) {
							this.logDebug(methodName, "Found plugin " + plugin.name + " which can open " + mimetype);
							found = true;
						}
					}
				}
			} else {
				this.logDebug(methodName, "navigator.mimeTypes and navigator.plugins are not available.  Returning false");
			}

			this.logExit(methodName);
			return found;
		}

	});

	return _HasPluginMixin;
});

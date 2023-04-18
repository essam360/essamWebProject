/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/dom-style",
	"ecm/Logger",
	"ecm/model/Desktop",
	"ecm/model/Message"
], function(lang, has, domStyle, Logger, Desktop, Message) {

	/**
	 * @private Applet utilities
	 * @name ecm.model._appletUtils
	 * @since 2.0.3.6
	 */
	var utils = {
		loadApplet: function(params) {
			domStyle.set(document.body, "cursor", "wait");
			if (!utils._isJavaPresent()) {
				utils._handleFailure(params, "nojava");
				return;
			}
			var applet = params.applet;
			var loadedApplet = utils._getLoadedApplet(applet.name);
			if (!!loadedApplet) {
				utils._handleSuccess(params, loadedApplet);
				return;
			}

			var maxRetryCount = params.maxRetryCount;
			if (!maxRetryCount)
				maxRetryCount = 10;
			var app = document.applets && document.applets.length > 0 ? document.applets.namedItem(applet.name) : null;
			if (!app) {
				try {
					document.body.appendChild(applet);
				} catch (e) {
					utils._logDebug("loadApplet", "applet not added: " + applet.name + ", e: " + e.message);
					utils._handleFailure(params, "appenderror");
					return;
				}
			}
			setTimeout(function() {
				utils._checkIfAppletIsLoaded(params, maxRetryCount);
			}, 1000);
		},

		_handleSuccess: function(params, loadedApplet) {
			if (lang.isFunction(params.callback))
				params.callback(loadedApplet ? loadedApplet : params.applet);
			domStyle.set(document.body, "cursor", "auto");
		},

		_handleFailure: function(params, reason) {
			if (params.errorMessageKey)
				Desktop.addMessage(Message.createErrorMessage(params.errorMessageKey));
			if (lang.isFunction(params.errorback))
				params.errorback(reason);
			domStyle.set(document.body, "cursor", "auto");
		},

		_isAppletLoaded: function(applet) {
			var loaded = false;
			try {
				loaded = applet.isActive();
			} catch (e) {
				utils._logDebug("_isAppletLoaded", "applet not loaded: " + applet.name + ", e: " + e.message);
			}

			return loaded;
		},

		_getLoadedApplet: function(name) {
			var applet = null;
			if (document.applets && document.applets.length > 0) {
				var app = document.applets.namedItem(name);
				if (utils._isAppletLoaded(app))
					applet = app;
			}

			return applet;
		},

		_checkIfAppletIsLoaded: function(params, remainingRetryCount) {
			var applet = params.applet;
			if (utils._isAppletLoaded(applet)) {
				utils._logDebug("_checkIfAppletIsLoaded", "applet loaded: " + applet.name);
				utils._handleSuccess(params);
			} else if (remainingRetryCount > 0) {
				utils._logDebug("_checkIfAppletIsLoaded", "retrying.. remainingRetryCount: " + remainingRetryCount);
				setTimeout(function() {
					utils._checkIfAppletIsLoaded(params, --remainingRetryCount);
				}, 1000);
			} else {
				utils._logDebug("_checkIfAppletIsLoaded", "applet failed to load: " + applet.name);
				utils._handleFailure(params, "timeout");
			}
		},

		_isJavaPresent: function() {
			if (utils._javaPluginPresent != null)
				return utils._javaPluginPresent;

			var found = false;
			if ((navigator.appName.indexOf("Microsoft") != -1) || (navigator.userAgent.indexOf("Trident") != -1) || has("ie")) {
				found = true;
				utils._logDebug("_isJavaPresent", "return true for IE");
			} else {
				found = utils._isPluginPresent("application/x-java-applet");
				utils._logDebug("_isJavaPresent", "found: " + found);
			}
			utils._javaPluginPresent = found;

			return found;
		},

		_isPluginPresent: function(mimetype) {
			var found = false;
			if (navigator.mimeTypes) {
				var plugin = navigator.mimeTypes[mimetype];
				if (plugin && plugin.enabledPlugin) {
					utils._logDebug("_isPluginPresent", "found plugin " + plugin.enabledPlugin.name);
					found = true;
				}
			}
			if (!found && navigator.plugins) {
				for (var i = 0; i < navigator.plugins.length && !found; i++) {
					var plugin = navigator.plugins[i];
					for (var j = 0; j < plugin.length && !found; j++) {
						if (plugin[j].type == mimetype) {
							utils._logDebug("_isPluginPresent", "found plugin " + plugin.name);
							found = true;
						}
					}
				}
			}

			return found;
		},

		_logDebug: function(functionName, message) {
			ecm.logger.logDebug("ecm.model._appletUtils." + functionName, message);
		}
	};

	return utils;
});

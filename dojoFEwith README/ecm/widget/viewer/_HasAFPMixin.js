/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/has",
	"ecm/widget/_HasPluginMixin"
], function(declare, lang, has, _HasPluginMixin) {

	var _HasAFPMixin = declare("ecm.widget.viewer._HasAFPMixin", [
		_HasPluginMixin
	], {
		_hasAFPPlugin: function() {
			var methodName = "_hasAFPPlugin";
			this.logEntry(methodName);

			var found = false;
			if (_HasAFPMixin.hasAFP == null) {
				if (window.ActiveXObject || has("trident")) {
					try {
						var control = new ActiveXObject("IBM.AfpPlgIn");
						if (control) {
							this.logDebug(methodName, "IBM.AfpPlgIn ActiveXObject was found");
							found = true;
							delete control;
						}
					} catch (e) {
						this.logDebug(methodName, "Error caught while checking for existence of ActiveX Object IBM.AfpPlgIn");
					}
				}

				if (!found && navigator.plugins) {
					this.logDebug(methodName, "Looking in navigator.plugins");
					if (navigator.plugins["IBM AFP Viewer Plugin"]) {
						this.logDebug(methodName, "Found IBM AFP Viewer Plugin by name");
						found = true;
					} else {
						found = this._hasPlugin("application/afp");
					}
				}

				if (!found) {
					this.logDebug(methodName, "IBM AFP Viewer Plugin not found.");
				}

				_HasAFPMixin.hasAFP = found;
			} else {
				this.logDebug(methodName, "Already scanned once, use previous result");
				found = _HasAFPMixin.hasAFP;
			}

			this.logExit(methodName, "returning " + found);
			return found;
		}
	});

	_HasAFPMixin.hasAFP = null;

	return _HasAFPMixin;
});

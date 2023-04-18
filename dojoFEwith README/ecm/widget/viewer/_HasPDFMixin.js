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

	var _HasPDFMixin = declare("ecm.widget.viewer._HasPDFMixin", [
		_HasPluginMixin
	], {
		_hasPDFPlugin: function() {
			var methodName = "_hasPDFPlugin";
			this.logEntry(methodName);

			var found = false;
			if (_HasPDFMixin.hasPDF == null) {
				if (window.ActiveXObject || has("trident")) {
					try {
						var control = new ActiveXObject("AcroPDF.PDF");
						if (control) {
							this.logDebug(methodName, "AcroPDF.PDF ActiveXObject was found");
							found = true;
						}
					} catch (e) {
						this.logDebug(methodName, "Error caught while checking for existence of ActiveX Object AcroPDF.PDF");
					}
				}

				if (!found && navigator.plugins) {
					this.logDebug(methodName, "Looking in navigator.plugins");
					if (navigator.plugins["Adobe Acrobat"]) {
						this.logDebug(methodName, "Found Adobe Acrobat plugin by name");
						found = true;
					} else {
						found = this._hasPlugin("application/pdf");
					}
				}

				if (!found) {
					this.logDebug(methodName, "No ActiveX objects found.  No plugins found.");
				}

				_HasPDFMixin.hasPDF = found;
			} else {
				this.logDebug(methodName, "Already scanned once, use previous result");
				found = _HasPDFMixin.hasPDF;
			}

			this.logExit(methodName, "returning " + found);
			return found;
		}
	});

	_HasPDFMixin.hasPDF = null;

	return _HasPDFMixin;
});

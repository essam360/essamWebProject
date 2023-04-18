/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/on",
	"dojo/string",
	"dojo/dom-class",
	"dojo/dom-attr",
	"dojo/dom-style",
	"./BaseDialog",
	"dijit/DialogUnderlay",
	"dojo/text!./templates/SessionExpireWarningDialogContent.html"
], //
function(declare, connect, lang, has, on, string, domClass, domAttr, domStyle, BaseDialog, DialogUnderlay, template) {

	/**
	 * @name ecm.widget.dialog.SessionExpireWarningDialog
	 * @class Provides a dialog box that displays a session expire warning and prompts the user to extend session or logoff.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	var SessionExpireWarningDialog = declare("ecm.widget.dialog.SessionExpireWarningDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.SessionExpireWarningDialog.prototype */
		sessionExpireWarningTime: 2,
		extendSessionLabel: ecm.messages.extend_session,
		contentString: template,
		logoffLabel:ecm.messages.logoff,
		title: ecm.messages.session_expire,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmWarningDialog ecmSessionExpireWarningDialog minor");
			domAttr.set(this.domNode, "aria-describedby", this.description.id);
			this.setText();
			this.setTitle(this.title);
			this._onKey = function() {
			};
			domStyle.set(this.cancelButton.domNode, "display", "none");
			this.addButton(this.logoffLabel, "_onLogoff", false, true);
			this.addButton(this.extendSessionLabel, "_onExtendSession", false, true);
		},

		//show: function() {
		//	this.inherited(arguments);
		//},
		setText: function(){
			this.description.innerHTML = string.substitute(ecm.messages.session_expire_warning, [this.sessionExpireWarningTime]);
		},
		_onExtendSession: function(){
			var pingCallback = lang.hitch(this, function() {
				this.hide();
			});
			var request = ecm.model.Request.invokeService(
					"pingServer", null,  {
						desktop: ecm.model.desktop.id,
					}, pingCallback);
		},
		
		_onLogoff: function(){
			// Log out and reload the desktop to ensure that all widgets are destroyed
			ecm.model.desktop.logoff(true);
			this.hide();
		},
		
		show: function() {
			this.sessionExpireWarningTime = ecm.model.desktop.sessionExpireWarningTime;
			this.setText();
			this.inherited(arguments);
			// Make the session warning dialog appear in front of any other open dialogs
			var zIndex = 1054; // 2 greater than the ErrorDialog
			var underlayNode = DialogUnderlay._singleton && DialogUnderlay._singleton.domNode;
			domStyle.set(this.domNode, "zIndex", zIndex);
			if (underlayNode) {
				var underlayZIndex = domStyle.get(underlayNode, "zIndex");
				if (underlayZIndex != zIndex - 1) {
					// Remember the underlay's original placement
					this._underlayZIndex = underlayZIndex;
					domStyle.set(underlayNode, "zIndex", zIndex - 1);
				}
			}
		},
		hide: function() {
			var methodName = "hide";
			this.logEntry(methodName);
			if (this._underlayZIndex != null) {
				// Restore the underlay's original placement
				domStyle.set(DialogUnderlay._singleton.domNode, "zIndex", this._underlayZIndex);
				delete this._underlayZIndex;
			}
			this._hideDeferred = this.inherited(arguments);
			this.logExit(methodName);
		}
	});
	
	/**
	 * Static method that returns a singleton global instance of the session expire warning dialog.
	 * 
	 * @returns Returns the global instance of the session expire warning dialog.
	 * @memberof ecm.widget.dialog.SessionExpireWarningDialog
	 */
	SessionExpireWarningDialog.getSessionExpireWarningDialog = function() {
		if (!SessionExpireWarningDialog._sessionExpireWarningDialog) {
			SessionExpireWarningDialog._sessionExpireWarningDialog = new SessionExpireWarningDialog();

			var onBeforeUnload = function(event) {
				if (oldOnBeforeUnload) {
					var results = oldOnBeforeUnload(event);
					if (results) {
						return results;
					}
				}
				if (onBeforeUnloadHandler) {
					onBeforeUnloadHandler.remove();
					onBeforeUnloadHandler = null;
				}
				if (SessionExpireWarningDialog._sessionExpireWarningDialog) {
					SessionExpireWarningDialog._sessionExpireWarningDialog.destroyRecursive();
					delete SessionExpireWarningDialog._sessionExpireWarningDialog;
				}
			};
			if (has("chrome") || has("safari")) {
				var onBeforeUnloadHandler = on(window, "beforeunload", onBeforeUnload);
			} else { // For IE and Firefox, we must directly override window.onbeforeunload
				var oldOnBeforeUnload = window.onbeforeunload;
				window.onbeforeunload = onBeforeUnload;
			}
		}
		return SessionExpireWarningDialog._sessionExpireWarningDialog;
	};
	
	return SessionExpireWarningDialog;
});

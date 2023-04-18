/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
    "dojo/_base/lang", //
	"dojo/dom-class", //
	"dojo/dom-style", //
	"dojo/io-query", //
	"ecm/widget/dialog/BaseDialog", //
	"dojo/text!./templates/OfficeOnlineDocumentDialogContent.html"
], //
function(declare, //
lang, //
domClass, //
domStyle, //
ioQuery, //
BaseDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.OfficeOnlineDocumentDialog
	 * @class Provides a dialog box used to display documents using Office Online.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.OfficeOnlineDocumentDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.OfficeOnlineDocumentDialog.prototype */
		
		contentString: template,
		widgetsInTemplate: true,
	
		atandalone: false,
		action: "",
		actionUrl: "",
		accessToken: "",
		
		_appLoadingStatusReceived: false,
		
		postCreate: function() {
			this.inherited(arguments);
			
			//Hide chrome for edit
			if (this.action == "edit"){
				domClass.add(this.domNode, "ecmOfficeOnlineEditDocumentDialog");
			}
			
			this.setResizable(false);
			this.showActionBar(false);
			// hide title bar and maximize button
			domClass.add(this.titleBar, "dijitHidden");
			domClass.add(this._maximizeButton.domNode, "dijitHidden");
			domClass.add(this._restoreButton.domNode, "dijitHidden");

			window.addEventListener('message', lang.hitch(this, function(e){
				// The actual message is contained in the data property of the event.
				var msg = JSON.parse(e.data);
				
				// The message ID is now a property of the message object.
				var msgId = msg.MessageId;
				this.logDebug("onMessage", "recieved message " + msgId);
				if (msgId == "UI_Close") {
					window.close();
				}
				
				// The message parameters themselves are in the Values
				// parameter on the message object.
				var msgData = msg.Values;

				if (this.standalone){
					if (msgId == "App_LoadingStatus" && this.action == "view"){
						if (this._appLoadingStatusReceived == false){
							this._appLoadingStatusReceived = true;
						}
						else {
							// If the app loads a second time and we are in view mode, switch to edit.
							this.action = "edit";
							this.setMaximized(false);
							domClass.add(this.domNode, "ecmOfficeOnlineEditDocumentDialog");
							this.resize();
						}
					}
				}
			}));
		},
		
		onClose: function(){
		},
		
		show: function(){
			this.logEntry("show");
			this.inherited(arguments);
			
			// Pass any query string parameters starting with "wd" to the iFrame.
			var replaceStateUrl = dojo.doc.location.pathname;
			var needToReplaceState = false;
			var queryParameters = ioQuery.queryToObject(decodeURIComponent(dojo.doc.location.search.substr(dojo.doc.location.search[0] === "?" ? 1 : 0)));
			var keys = Object.keys(queryParameters)
			var firstTime = true;
			for (var index in keys){
				var key = keys[index];
				var parameterToAdd = key + "=" + queryParameters[key];
				if (key.substr(0,2) == "wd"){
					this.actionUrl += "&" + parameterToAdd;
					if (key != "wdPreviousSession" && key != "wdPreviousCorrelation"){
						needToReplaceState = true;
					}
				}
				if (key != "wdPreviousSession" && key != "wdPreviousCorrelation"){
					if (firstTime){
						replaceStateUrl += "?"
					}
					else {
						replaceStateUrl += "&"
					}
					replaceStateUrl += parameterToAdd;
				}
				firstTime = false;
			}
			
			domStyle.set(this.contentArea, "padding", "0px 0px 15px 0px");
			this.resize();
			
			var form = document.createElement("form");
			form.action = this.actionUrl;
			form.method = "POST";
			form.setAttribute("target", this.id + "_wopiIFrame");
			form.style.display = "none";
			document.body.appendChild(form);
			
			var input = document.createElement("textarea");
			input.name = "access_token";
			input.value = this.accessToken;
			form.appendChild(input);
			
			form.submit();
			
			// If the browser supports replaceState and either the wdPreviousSession or wdPreviousCorrelation parameters is present, remove them.
			if (needToReplaceState && window.history.replaceState){
				window.history.replaceState( {} , '', replaceStateUrl);
			}

			document.getElementById(this.id + "_wopiIFrame").contentWindow.postMessage({
				"MessageId": "Host_PostmessageReady",
				"SendTime": new Date().valueOf(),
				 "Values": { }}
			, "*");
			this.logExit("show");
		}
	});
});

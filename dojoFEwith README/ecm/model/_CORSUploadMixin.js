/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"../LoggerMixin",
], function(declare, LoggerMixin) {

	/**
	 * @name ecm.model._CORSUploadMixin
	 * @class An interface for models that provide Box Cross Origin Resource Sharing upload functionality.
	 * @public
	 * @since 3.x
	 */
	return declare("ecm.model._CORSUploadMixin", null, {
		/** @lends ecm.model._CORSUploadMixin.prototype */
		
		/**
		 * @private
		 */
		_getCORSRequest: function(fileId){
			this.logEntry("_getCORSRequest");
			var xhr = new XMLHttpRequest();
			
			var corsUploadURl
			if (fileId){
				this.logDebug("Using checking URL");
				corsUploadURl = "https://upload.box.com/api/2.0/files/" + fileId + "/content";
			}
			else {
				this.logDebug("Using add URL");
				corsUploadURl = "https://upload.box.com/api/2.0/files/content";
			}
			
			// Check for the various File API support.
			if (window.File && window.FileReader && window.FileList && window.Blob) {
				
				// The File APIs are supported in this browser. Next, check for support in the request object.
				if ("withCredentials" in xhr) {
					
				    // XHR for Chrome/Firefox/Opera/Safari.
					this.logDebug("Detected Chrome/Firefox/Opera/Safari");
				    xhr.open("POST", corsUploadURl, true);
				} else if (typeof XDomainRequest != "undefined") {
					
					// XDomainRequest for IE.
					this.logDebug("Detected IE");
				    xhr = new XDomainRequest();
				    xhr.open("POST", corsUploadURl);
				}
				else {
					xhr = null;
				}
			}
			else {
				xhr = null;
			}
			this.logExit("_getCORSRequest");
			return xhr;
		},
		
		/**
		 * @private
		 */
		_sendCORSUpload: function(accessToken, xhr, form, onLoad, onError){
			this.logEntry("_sendCORSUpload");
			
			xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
			xhr.onload = onLoad;
			xhr.onerror = onError
			
			try{
				this.logDebug("Sending request...");
				xhr.send(form);
				this.logDebug("Returned from sending request.");
			}
			catch (e){
				this.logDebug("Error sending request.");
				onError();
			}
			this.logExit("_sendCORSUpload");
		},
	});
});

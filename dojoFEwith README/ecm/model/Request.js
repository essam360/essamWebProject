/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/_base/lang",
	"dojo/_base/sniff",
	"dojo/_base/xhr",
	"dojo/cookie",
	"dojo/dom-construct",
	"dojo/io-query",
	"dojo/io/iframe",
	"dojo/aspect",
	"dojox/uuid/generateRandomUuid",
	"../model/SessionTimer",
	"../Messages",
	"../Logger",
	"./_ModelObject",
	"./Message"
],

function(declare, array, dojojson, lang, has, xhr, cookie, domConstruct, ioQuery, iframe, aspect, generateRandomUuid,timer,//
Messages, Logger, _ModelObject, Message) {

	/**
	 * Constructs a request. Typically one of the static 'invoke' or 'post' methods is used to construct a request.
	 * 
	 * @param properties
	 *            the properties for the request. The properties can be any of the public fields as defined below and on
	 *            ecm.model._ModelObject.
	 * @name ecm.model.Request
	 * @class Represents a single request to the services. This class is used to manage and maintain information about
	 *        the request.
	 *        <p>
	 *        The <code>Request</code> class centralizes service requests. The class provides a common way to handle
	 *        wait indicators and errors. Internally, Request uses XMLHttpRequest or Dojo's xhr to send the request to
	 *        the server.
	 *        <p>
	 *        Requests are normally sent asynchronously, which prevents the problems that occur when synchronous and
	 *        asynchronous requests are used together. However, there is the capability to send request synchronously,
	 *        which should be used only in special situations. Remember that a synchronous request is not necessarily
	 *        atomic -- an outstanding asynchronous request might be processed while the synchronous request is waiting.
	 *        </p>
	 *        <p>
	 *        Typically, users do not need to use a <code>Request</code> object directly. Instead, other
	 *        <code>ecm.model</code> objects use the <code>Request</code> object to invoke services. However, a
	 *        custom extension might use a <code>Request</code>object to invoke a custom services in order to obtain
	 *        similar behaviors from the services.
	 * @augments ecm.model._ModelObject
	 */
	// Note: This implementation is not using xhr._xhrObj to avoid the catch clause that xhr._xhrObj applies around the callback
	// functions.
	var Request = declare("ecm.model.Request", [
		_ModelObject
	], {
		/** @lends ecm.model.Request.prototype */

		/**
		 * The URL to the service.
		 */
		requestUrl: null,

		/**
		 * List of name/value pairs to add to the request header.
		 */
		requestHeaders: null,

		/**
		 * String or form object to add to the request body for "POST" requests.
		 */
		requestBody: null,

		/**
		 * The HTTP method to be used for the request: GET, PUT, POST, DELETE.
		 */
		requestMethod: "POST",

		/**
		 * A function called when the request has completed. The response object is passed to this function as the only
		 * argument.
		 */
		requestCompleteCallback: null,

		/**
		 * A function called when the request has failed. The error data and an array of {@link ecm.model.message} error
		 * messages are passed as parameters to this function. If there are no error messages then the error message
		 * array parameter is omitted.
		 */
		requestFailedCallback: null,

		/**
		 * A message to display to the user while the service is executing on the server.
		 */
		progressMessage: null,

		/**
		 * An instance of {@link ecm.model.Repository} for the repository related to this service, or null if this
		 * service is not related to a particular repository.
		 */
		repository: null,

		/**
		 * A boolean indicating that the service is cancellable. A progress dialog will normally display a cancel button
		 * to the user for cancellable services.
		 */
		cancellable: false,

		/**
		 * A message to display to the user when the cancel button is clicked.
		 */
		cancelMessage: null,

		/**
		 * A boolean indicating that for a cancellable request, if the request is cancelled, a notification will be sent
		 * to the service, so that the service can clean up and exit.
		 * 
		 * @since 2.0.3.5
		 */
		notifyOnCancel: false,

		/**
		 * The associated XMLHttpRequest for this service. This is constructed as a part of invoking Request.send, so
		 * this field should be considered read-only.
		 */
		xmlHttpRequest: null,

		/**
		 * A boolean indicating that the request should be processed 'quietly', that is without any progress messages to
		 * the user.
		 */
		backgroundRequest: false,

		/**
		 * A unique id for the request. This is generated automatically during construction, so this field should be
		 * considered read-only.
		 */
		uuid: null,

		/**
		 * A boolean indicating that the request has been cancelled.
		 */
		cancelled: false,

		/**
		 * An array of error numbers that will not be notified and are to be handled by the caller.
		 * 
		 * @since 2.0.2
		 */
		callerHandledErrorNumbers: null,

		_seqId: null,

		/**
		 * A boolean indicating that the request is added with event listener for upload progress.
		 */
		uploadProgress: false,

		constructor: function() {
			if (!(this.callerHandledErrorNumbers instanceof Array))
				this.callerHandledErrorNumbers = [];
		},

		/**
		 * Returns true if this request is the same as the passed in request.
		 */
		isSameRequestAs: function(request) {
			return (request && request.isInstanceOf && request.isInstanceOf(Request)) ? this.uuid == request.uuid : false;
		},

		/**
		 * Sends the request to the server.
		 * 
		 * @param params
		 *            The set of parameters to mix into the request object in order to send the server request.
		 *            <p>
		 *            Example: send({requestMethod: "POST", requestCompleteCallback: function() {...}});
		 *            </p>
		 */
		send: function(params) {
			this.logEntry("send");

			if (params)
				lang.mixin(this, params);
			this.logInfo("send", "URL=" + this.requestUrl + " METHOD=" + this.requestMethod + " SYNCHRONOUS=" + this.synchronous + " HEADER=" + this.requestHeaders + " BODY=" + this.requestBody);

			if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
				this.logInfo("send", "Request abandoned for desktop reload");
				this.logExit("send");
				return;
			}

			// xhr._xhrObj is the same as new XMLHttpRequest() but with compatibility
			this.xmlHttpRequest = xhr._xhrObj ? xhr._xhrObj() : new XMLHttpRequest();

			/*
			* XMLHttpRequest sync call restriction: only async calls supports timeout.
			* In the  case of synch the XMLHttpRequest.timeout is not defined and the timeout callback is
			* initialized as setTimeout function which is release on the response return.
			*/
			if (ecm.model.desktop.onRequestTimeout && ecm.model.desktop.requestTimeout) {
				this.xmlHttpRequest.mobileRequestTimeout = setTimeout(lang.hitch(this, function() {
					ecm.model.desktop.onRequestTimeout(this);
				}), ecm.model.desktop.requestTimeout);

			}
			if (this.uploadProgress) {
				if (ecm.model.desktop && ecm.model.desktop.onChangeUploadProgress) {
					this.xmlHttpRequest.upload.addEventListener("progress", ecm.model.desktop.onChangeUploadProgress, false);
				}
				if (ecm.model.desktop && ecm.model.desktop.onCompleteUploadProgress) {
					this.xmlHttpRequest.upload.addEventListener("load", ecm.model.desktop.onCompleteUploadProgress, false);
				}
			}
			this.xmlHttpRequest.open(this.requestMethod, "http://localhost:8080/Main" /*this.requestUrl*/, true);

			if (this.requestHeaders) {
				for ( var key in this.requestHeaders) {
					var value = this.requestHeaders[key];
					this.xmlHttpRequest.setRequestHeader(key, value);
				}
			}

			/*
			* If ecm.model.desktop.basicAuthorizationToken is defined set its value into "Authorization" header
			*/
			if (Request.basicAuthorizationToken) {
				this.xmlHttpRequest.setRequestHeader("Authorization", Request.basicAuthorizationToken);
			}

			if (this.requestHeaders && !this.requestHeaders["userid"] && this.requestHeaders["repositoryId"] && ecm.model.desktop) {
				this.xmlHttpRequest.setRequestHeader("userid", ecm.model.desktop.getRepository(this.properties["repositoryId"]).userId);
			}

			//this.xmlHttpRequest.setRequestHeader("userid", ecm.model.desktop.userId);

			var cookieLocaleLanguage = cookie(ecm.model.Desktop.cookieLocaleLanguage);
			if (cookieLocaleLanguage) {
				this.xmlHttpRequest.setRequestHeader("Accept-Language", cookieLocaleLanguage);
			}

			if (this.cancellable && this.notifyOnCancel) {
				this._seqId = Request._seqId.next();
				this.xmlHttpRequest.setRequestHeader("Navigator-seqId", this._seqId);
			}

			/*
			 * Add Client context information to the request.
			 */
			if (has("android") || has("ios"))
				this.xmlHttpRequest.setRequestHeader("Navigator-Client-Identity", "navigatorMobile");
			else
				this.xmlHttpRequest.setRequestHeader("Navigator-Client-Identity", "navigatorWeb");
			if (ecm.model.desktop.navigatorBuild)
				this.xmlHttpRequest.setRequestHeader("Navigator-Client-Build", ecm.model.desktop.navigatorBuild);

			/*
			 * Allow applications to apply additional global request headers. This extension was added for the iOS mobile applications to 
			 * overcome an issue with applying request headers in UIWebViews.
			 */
			if (ecm.model.desktop._requestHeaders) {
				for ( var key in ecm.model.desktop._requestHeaders) {
					var value = ecm.model.desktop._requestHeaders[key];
					this.xmlHttpRequest.setRequestHeader(key, value);
				}
			}

			if (!this.synchronous) {
				this.xmlHttpRequest.onreadystatechange = lang.hitch(this, function() {
					if (this.xmlHttpRequest.readyState == 4) {
						if (this.xmlHttpRequest.mobileRequestTimeout) {
							clearTimeout(this.xmlHttpRequest.mobileRequestTimeout);
						}
						this._onFinished();

						// Setting to null to prevent leak in IE8. This is completely unnecessary in real browsers.
						if (has("ie") < 9) {
							this.xmlHttpRequest = null;
						}
					}
				});
			}
			this.requestHeaders ={"Content-Type":this.requestHeaders["Content-Type"]} ;
			this.onRequestStarted(this);
			try {
				this.xmlHttpRequest.send(this.requestBody);
			} catch (e) {
				this.onRequestCompleted(this);
				if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
					this.logInfo("send", "Request error handling abandoned for desktop reload");
					this.logExit("send");
					return;
				}
				this.logError("send", "Error on XMLHttpRequest.send: " + e);
				var responseText = this.xmlHttpRequest.responseText || "";
				if (responseText && this.responseIsHtml()) {
					// Prepare the response for literal display in a message.
					responseText = responseText.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
				}
				var errorMessage;
				if (ecm.model.desktop) {
					errorMessage = Message.createErrorMessage("http_send_error", [
						ecm.model.desktop.servicesUrl,
						e
					], this.backgroundRequest);
					this.addMessage(errorMessage);
				}
				if (lang.isFunction(this.requestFailedCallback)) {
					this.requestFailedCallback(this.xmlHttpRequest.status + " " + responseText, errorMessage ? [
						errorMessage
					] : undefined);
				}
				// Setting to null to prevent leak in IE8. This is completely unnecessary in real browsers.
				if (has("ie") < 9) {
					this.xmlHttpRequest = null;
				}
			}

			if (this.synchronous && this.xmlHttpRequest.readyState == 4) {
				this._onFinished();

				if (this.xmlHttpRequest.ontimeout) {
					clearTimeout(this.xmlHttpRequest.ontimeout);
				}

				// Setting to null to prevent leak in IE8. This is completely unnecessary in real browsers.
				if (has("ie") < 9) {
					this.xmlHttpRequest = null;
				}
			}

			this.logExit("send");
		},

		_onSessionExpired: function(response, error) {
			if (error && error.number == 1003 && response && response.security_token != null) {
				// If a security token was returned, the session was recovered. Retry the action.
				this.retry();
			} else {
				// If desktop login is required and redirection to a site login page is required...
				if (/*   */error && error.number == 1003 //
						&& (/**/(ecm.model.desktop && ecm.model.desktop.useSiteLoginPage) //
						/* */|| (response && response.authenticationRequired && response.authenticationRequired.formBased && response.authenticationRequired.formBased.redirectToSitePage))) {
					// The native client will handle the login.
					if (Request.isNativeClient()) {
						this.authenticationRequired = (response && response.authenticationRequired) || {
							formBased: Request.fbaGeneric
						};
						this.redirectToSitePage = this.authenticationRequired.formBased.redirectToSitePage;
						ecm.model.desktop.onSessionExpired(this, error);
					} else { // ...web client
						// Clear request complete callback.
						delete this.requestCompleteCallback;
						// Process the desktop logoff.
						ecm.model.desktop._logoffCompleted();
					}
				} else { // ... not using a login page, or a repository login expired (not the desktop login)
					if (response) {
						this.authenticationRequired = response.authenticationRequired;
					}
					ecm.model.desktop.onSessionExpired(this, error);
				}
			}
		},

		/**
		 * @private Handler for a complete AJAX request.
		 */
		_onFinished: function() {
			this.logEntry("_onFinished");
			var sessionExpired = false;

			// We have to rely on the server to detect if Google Chrome Frame is active.
			if (ecm.model.desktop && !ecm.model.desktop.isChromeFrame && cookie("isChromeFrame") == "true") {
				ecm.model.desktop.isChromeFrame = true;
			}

			var errorMessage;
			this.onRequestCompleted(this);

			if (this.cancelled) {
				this.logInfo("_onFinished", "Request was cancelled", "URL=" + this.requestUrl);
				if (ecm.model.desktop) {
					this.addMessage(new Message({
						number: 0,
						level: 0,
						text: this.cancelMessage
					}));
				}
				this.logExit("_onFinished");
				return;
			}
			// If unable to send a request, we may have been redirected to a site login server (cross domain call).
			// If the site login page should be used then treat this case as session expired.
			// Otherwise, this will be treated below as a general failure to connect to the server.
			if (!this.xmlHttpRequest.status && ecm.model.desktop && ecm.model.desktop.useSiteLoginPage) {
				this._onSessionExpired(null, {
					number: 1003
				});
				this.logExit("_onFinished");
				return;
			}
			if (!this.xmlHttpRequest.status || this.xmlHttpRequest.status >= 300) {
				if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
					this.logInfo("_onFinished", "Request error handling abandoned for desktop reload");
					this.logExit("_onFinished");
					return;
				}
				this.logError("_onFinished", "Http error response: " + this.xmlHttpRequest.status, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
				var responseText = this.xmlHttpRequest.responseText || "";
				if (ecm.model.desktop) {
					if (ecm.model.desktop._ssoTokenPresent && this.xmlHttpRequest.status == 403) {
						errorMessage = Message.createErrorMessage("http_ltpa_expired", [
							ecm.model.desktop.servicesUrl,
							this.xmlHttpRequest.status + " " + responseText
						], this.backgroundRequest);
					} else {
						errorMessage = Message.createErrorMessage("http_error", [
							ecm.model.desktop.servicesUrl,
							this.xmlHttpRequest.status + " " + responseText
						], this.backgroundRequest);
					}
					this.addMessage(errorMessage);
				}
				if (responseText && this.responseIsHtml()) {
					// Prepare the response for literal display in a message.
					responseText = responseText.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
				}
				if (lang.isFunction(this.requestFailedCallback)) {
					this.requestFailedCallback(this.xmlHttpRequest.status + " " + responseText, errorMessage ? [
						errorMessage
					] : undefined);
				}
			} else {
				var response = this.getResponse();
				if (!response) {
					if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
						this.logInfo("_onFinished", "Request error handling abandoned for desktop reload");
						this.logExit("_onFinished");
						return;
					}
					this.logError("_onFinished", "Bad response (not JSON?): " + this.xmlHttpRequest.responseText, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
					var responseText = this.xmlHttpRequest.responseText || "";
					if (ecm.model.desktop) {
						errorMessage = Message.createErrorMessage("http_response_bad", [
							ecm.model.desktop.servicesUrl,
							responseText
						], this.backgroundRequest);
						this.addMessage(errorMessage);
					}
					if (responseText && this.responseIsHtml()) {
						// Prepare the response for literal display in a message.
						responseText = responseText.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
					}
					if (lang.isFunction(this.requestFailedCallback)) {
						this.requestFailedCallback(this.xmlHttpRequest.status + " " + responseText, errorMessage ? [
							errorMessage
						] : undefined);
					}
				} else {
					if(response.sessioninactivelimit != null && !ecm.model.desktop.isSsoTokenPresent()){
						var sessionTimer = timer.getSessionTimer(response.sessioninactivelimit);
						if(sessionTimer != null && sessionTimer.isRunning){
							sessionTimer.reset(response.sessioninactivelimit);
						}
					}
					Request.getSecurityToken(response);
					var errorMessages = [];

					if (response.authenticationRequired) {
						sessionExpired = true;
						this._onSessionExpired(response, {
							number: 1003
						});
					} else if (response.errors) {
						for ( var i in response.errors) {
							var error = response.errors[i];

							if (lang.isString(error)) {
								this.logError("_onFinished", "Error: " + error, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
								if (ecm.model.desktop) {
									errorMessage = new Message({
										number: 0,
										level: 2,
										text: error,
										backgroundRequest: this.backgroundRequest
									});
									this.addMessage(errorMessage);
									if (lang.isFunction(this.requestFailedCallback)) {
										errorMessages.push(errorMessage);
									}
								}
							} else {
								this.logError("_onFinished", "Error: " + error.text, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
								if (ecm.model.desktop) {
									// Session expired (1003), or repository connection expired (1007).
									if (error.number == 1003 || error.number == 1007) {
										sessionExpired = true;
										this._onSessionExpired(response, error);
									} else {
										errorMessage = new Message({
											number: error.number,
											level: 2,
											text: error.text,
											explanation: error.explanation,
											userResponse: error.userResponse,
											adminResponse: error.adminResponse,
											messageProductId: error.messageProductId,
											backgroundRequest: this.backgroundRequest
										});
										if (!this._isCallerHandledErrorNumber(error.number)) {
											this.addMessage(errorMessage);
										}
										if (lang.isFunction(this.requestFailedCallback)) {
											errorMessages.push(errorMessage);
										}
									}
								}
							}
						}
					}
					if (response.warnings) {
						for ( var i in response.warnings) {
							var warning = response.warnings[i];
							if (lang.isString(warning)) {
								this.logWarning("_onFinished", "Warning: " + warning, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
								if (ecm.model.desktop) {
									this.addMessage(new Message({
										number: 0,
										level: 1,
										text: warning
									}));
								}
							} else {
								this.logWarning("_onFinished", "Warning: " + warning.text, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
								if (ecm.model.desktop) {
									this.addMessage(new Message({
										number: warning.number,
										level: 1,
										text: warning.text,
										explanation: warning.explanation,
										userResponse: warning.userResponse,
										adminResponse: warning.adminResponse,
										moreInformation: warning.moreInformation,
										messageProductId: warning.messageProductId
									}));
								}
							}
						}
					}
					if (response.messages) {
						for ( var i in response.messages) {
							var information = response.messages[i];
							if (information) {
								if (lang.isString(information)) {
									this.logInfo("_onFinished", "Information: " + information, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
									if (ecm.model.desktop) {
										this.addMessage(new Message({
											number: 0,
											level: 0,
											text: information
										}));
									}
								} else {
									this.logInfo("_onFinished", "Information: " + information.text, "URL=" + this.requestUrl + " HEADERS=" + this.xmlHttpRequest.getAllResponseHeaders());
									if (ecm.model.desktop) {
										this.addMessage(new Message({
											number: information.number,
											level: 0,
											text: information.text,
											explanation: information.explanation,
											userResponse: information.userResponse,
											adminResponse: information.adminResponse,
											messageProductId: information.messageProductId
										}));
									}
								}
							}
						}
					}
					if (response.errors) {
						if (lang.isFunction(this.requestFailedCallback)) {
							// Don't call the callback if the session expired.
							// The request will be retried after the user logs back in.
							if (!sessionExpired) {
								this.requestFailedCallback(response, errorMessages.length > 0 ? errorMessages : undefined);
							}
						}
					} else {
						if (lang.isFunction(this.requestCompleteCallback)) {
							this.requestCompleteCallback(response);
						}
					}
				}
			}

			this.logExit("_onFinished");
		},

		_isCallerHandledErrorNumber: function(errorNumber) {
			if (!(this.callerHandledErrorNumbers instanceof Array) || this.callerHandledErrorNumbers.length < 1)
				return false;

			return array.indexOf(this.callerHandledErrorNumbers, errorNumber) > -1;
		},

		/**
		 * An event method invoked when the request is sent. This is intended to be used to cause status indicators to
		 * update in order to show that the request has started.
		 */
		onRequestStarted: function(request) {
			if (ecm.model.desktop) {
				ecm.model.desktop.onRequestStarted(request);
			}
		},

		/**
		 * An event method invoked when the request completes (either normally or abnormally). This is intended to be
		 * used for updating status indicators.
		 */
		onRequestCompleted: function(request) {
			if (ecm.model.desktop) {
				ecm.model.desktop.onRequestCompleted(request);
			}
		},

		/**
		 * Adds a message to the desktop.
		 */
		addMessage: function(message) {
			if (ecm.model.desktop) {
				ecm.model.desktop.addMessage(message);
			}
		},

		/**
		 * Returns the state of the request:
		 * <ul>
		 * <li>1: Sending the request</li>
		 * <li>2: Request sent
		 * <li>3: Receiving the response</li>
		 * <li>4: Response received</li>
		 * </ul>
		 */
		getReadyState: function() {
			return this.xmlHttpRequest && this.xmlHttpRequest.readyState;
		},

		/**
		 * Returns the HTTP response status code. This is only valid after the ready state is 4 (response received).
		 */
		getResponseStatus: function() {
			if (this.xmlHttpRequest && this.xmlHttpRequest.readyState == 4) {
				return this.xmlHttpRequest.status;
			} else {
				return undefined;
			}
		},

		/**
		 * Returns the HTTP response text, if any. This is only valid after the ready state is 4 (response received).
		 */
		getResponseText: function() {
			if (this.xmlHttpRequest && this.xmlHttpRequest.readyState == 4) {
				return this.xmlHttpRequest.responseText;
			} else {
				return undefined;
			}
		},

		/**
		 * Returns a simple JavaScript object with the HTTP response header properties, if any. This is only valid after
		 * the ready state is 4 (response received).
		 */
		getResponseProperties: function() {
			if (this.xmlHttpRequest && this.xmlHttpRequest.readyState == 4) {
				return this.xmlHttpRequest.getAllResponseHeaders();
			} else {
				return undefined;
			}
		},

		/**
		 * Returns the HTTP response Content-Type. This is only valid after the ready state is 4 (response received).
		 * 
		 * @since 2.0.2
		 */
		getResponseContentType: function() {
			if (this.xmlHttpRequest && this.xmlHttpRequest.readyState == 4) {
				return this.xmlHttpRequest.getResponseHeader("Content-Type");
			} else {
				return undefined;
			}
		},

		/**
		 * Returns true if the response Content-Type contains "text/html". This is only valid after the ready state is 4
		 * (response received).
		 * 
		 * @since 2.0.2
		 */
		responseIsHtml: function() {
			var contentType = this.getResponseContentType("Content-Type");
			if (typeof contentType == "undefined") {
				return contentType;
			}
			return (contentType != null && contentType.toLowerCase().indexOf("text/html") != -1);
		},

		_checkForFormLoginResponse: function() {
			var checkForFormLoginResponse = false;
			// If the response is HTML and there is response text...
			if (this.responseIsHtml() && this.getResponseText()) {
				var requestURL = this.requestUrl.toLowerCase();
				// Ignore a "bad user name or password" response to a login form post.
				// That will be handled by the login dialog.
				checkForFormLoginResponse = array.every(Request.formBasedAuthentications, function(formBasedAuth) {
					return !formBasedAuth.formPostUrlMatch || requestURL.indexOf(formBasedAuth.formPostUrlMatch.toLowerCase()) == -1;
				});
			}
			return checkForFormLoginResponse;
		},

		_handleFormLoginResponse: function(responseText) {
			var response;
			// If we need to check for a form login response...
			if (this._checkForFormLoginResponse()) {
				var responseTextLC = responseText.toLowerCase();
				array.some(Request.formBasedAuthentications, function(formBasedAuth) {
					if (formBasedAuth.formMatch(formBasedAuth, responseTextLC)) {
						response = {
							authenticationRequired: {
								formBased: formBasedAuth.getLoginFormBasedAuth(formBasedAuth, responseText)
							}
						};
						return true;
					}
					return false;
				});
			}
			return response;
		},

		/**
		 * Returns the HTTP response as a JavaScript object, after converting the response text, assumed to be in JSON,
		 * to a JavaScript object.
		 */
		getResponse: function() {
			var responseText = this.getResponseText();
			var response = this._handleFormLoginResponse(responseText);

			if (!response && responseText && responseText.length > 0 && (responseText.substring(0, 1) == "{" || responseText.substring(0, 1) == "[")) {
				/**
				 * Added this try block to catch the uncaught error: "JSON.parse" errors when it receives a malformed
				 * JSON string in an argument. In order for the catch clause to be tripped, a response must be received,
				 * containing an invalid JSON text. Although JSON.parse throws an error readily, dojojson.fromJson does
				 * not. So, we force it to do so.
				 */
				try {
					if (has("ff") || has("ie")) {
						if (responseText.length > 4 && responseText.substring(0, 4) == "{}&&") {
							responseText = responseText.substring(4); // remove prefix for preventing JavaScript hijacking
						}
						// IE 9 and IE 10 do not have JSON.
						var useJSONParse = false;
						try {
							if (JSON && JSON.parse) {
								useJSONParse = true;
							}
						} catch (e) {
							// ignore error
						}
						if (useJSONParse) {
							response = JSON.parse(responseText);
						} else {
							response = dojojson.fromJson(responseText);
						}
					} else {
						response = dojojson.fromJson(responseText);
						if (response["object_with_error"]) {
							response = null;
						}
					}
				} catch (e) {
					response = null;
					this.logError("getResponse", "Error parsing JSON: " + e);
					if (e.description) {
						this.logError("getResponse", "Error description parsing JSON: " + e.description);
					}
				}
			}
			return response;
		},

		/**
		 * Cancels the request. Note that the request may have already been sent, in which case this will cancel the
		 * handling of the reply by the browser and may or may not cause the server to abort processing of the request.
		 */
		cancel: function() {
			this.logEntry("cancel");
			this.cancelled = true;
			this.xmlHttpRequest.abort();

			if (this._seqId != null) {
				this.logDebug("cancel", "Sending cancelRequest for request " + this._seqId);
				var request = ecm.model.Request.invokeServiceAPI("cancelRequest", null, {
					requestParams: {
						seqId: this._seqId
					},
					cancellable: false,
					backgroundRequest: true,
					synchronous: false
				});
			}

			this.logExit("cancel");
		},

		/**
		 * Reruns the request. This function should be used only after a request has failed due to an error that is
		 * recoverable, such as a session expiration.
		 */
		retry: function() {
			this.logEntry("retry");

			// On a session time out, there will be a new security token generated on the Re-login, need to pass the
			// new token over to the queued up requests waiting for retry.
			if (this.fileInputForm) { // IE
				// The original added inputs have been destroyed at this point.
				// Recreate them and add them to the form.
				var inputs = []; // temporary input elements for additional parameters

				if (Request.enableSecureService && Request._security_token) {
					inputs.push(domConstruct.create("input", {
						type: "hidden",
						name: "security_token",
						value: Request._security_token
					}, this.fileInputForm));
				}

				if (this._origParams) {
					if (Request.enableSecureService) {
						// do not send parameters in URL
						for ( var name in this._origParams) {
							if (name == "security_token") {
								continue;
							}
							var value = this._origParams[name];
							if (value != null) { // ignore null and undefined
								inputs.push(domConstruct.create("input", {
									type: "hidden",
									name: name,
									value: value
								}, this.fileInputForm));
							}
						}
					}
				}
				try {
					this.dojoIOIFrameSend(this.fileInputForm);
				} finally {
					// clean up temporary input elements
					array.forEach(inputs, domConstruct.destroy);
				}
			} else if (this.downloadForm) {
				// The original added inputs have been destroyed at this point.
				// Recreate them and add them to the form.
				var inputs = []; // temporary input elements for additional parameters

				if (Request.enableSecureService && Request._security_token) {
					inputs.push(domConstruct.create("input", {
						type: "hidden",
						name: "security_token",
						value: Request._security_token
					}, this.downloadForm));
				}

				if (this._origParams) {
					var value;
					for ( var name in this._origParams) {
						if (name == "security_token") {
							continue;
						}
						var value = this._origParams[name];
						if (lang.isArray(value)) {
							for ( var i in value) {
								inputs.push(domConstruct.create("input", {
									type: "hidden",
									name: name,
									value: value[i]
								}, this.downloadForm));
							}
						} else {
							inputs.push(domConstruct.create("input", {
								type: "hidden",
								name: name,
								value: value
							}, this.downloadForm));
						}
					}
				}
				try {
					this.dojoIOIFrameDownload(this.downloadForm);
				} finally {
					// clean up temporary input elements
					array.forEach(inputs, domConstruct.destroy);
				}
			} else {
				// The _text member may be a form object in some cases (re-attempted add or checkin).
				if (this.requestBody) {
					if (lang.isString(this.requestBody)) {
						var index = this.requestBody.indexOf("security_token=");
						if (index >= 0) {
							var prefix = this.requestBody.substr(0, index);
							var postfix = "";
							var indexEnd = this.requestBody.indexOf("&", index);
							if (indexEnd > 0) {
								postfix = this.requestBody.substr(indexEnd);
							}
							this.requestBody = prefix + "security_token=" + Request._security_token + postfix;
						}
					} else if (this.requestBody instanceof FormData) {
						// If the original form data was preserved, recreate the form so that we can set the new token.
						// (Data added to FormData objects cannot be changed, deleted or replaced.)
						if (this._origFormParams) {
							this.requestBody = new FormData();

							for ( var prop in this._origFormParams) {
								if (this._origFormParams.hasOwnProperty(prop)) {
									this.requestBody.append(prop, this._origFormParams[prop]);
								}
							}
							if (this._origParams) {
								if (Request.enableSecureService) {
									var token = Request._security_token;
									if (token) {
										this.requestBody.append("security_token", token);
									}
									// do not send parameters in URL
									for ( var name in this._origParams) {
										var value = this._origParams[name];
										if (value && value.length > 0 && value != "undefined") { // ignore null and undefined
											this.requestBody.append(name, value);
										}
									}
								}
							}
						}
					}
				}

				//update the security token on the request header if that already exists.  All post plugin services
				//have the security token on the request headers instead
				if (this.requestHeaders && this.requestHeaders["security_token"]) {
					this.requestHeaders["security_token"] = Request._security_token;
				}

				//check the requestUrl to update the security token
				if (this.requestUrl && this.requestUrl.indexOf("security_token") >= 0) {
					var arr = this.requestUrl.split("&");
					var newurl = "";
					for (var i = 0; i < arr.length; i++) {
						if (arr[i].indexOf("security_token") >= 0) {
							arr[i] = "security_token=" + Request._security_token;
						}
						if (i != arr.length - 1) {
							newurl = newurl + arr[i] + "&";
						} else {
							newurl = newurl + arr[i];
						}
					}
					this.requestUrl = newurl;
				}

				this.send();
			}
			this.logExit("retry");
		},

		/**
		 * Sends the file upload request using iframe.send().
		 * 
		 * @param fileInputForm
		 *            The form containing the file input field and properties needed for add document.
		 */
		dojoIOIFrameSend: function(fileInputForm) {
			this.logEntry("dojoIOIFrameSend");
			var errorMessage;

			// Keep references to these parameters so that if a session timeout retry is attempted,
			// the security token input can be updated and this command retried.
			this.fileInputForm = fileInputForm;
			this.onRequestStarted(this);

			// Make sure that the last iframe.send() download request is cleared, or it will block sending this request.
			Request.clearLastIFrameDownloadRequest();

			this.iframeUpload = iframe.send({
				url: this.requestUrl,
				handleAs: "json",
				form: this.fileInputForm,
				method: "post",
				load: lang.hitch(this, function(data, ioArgs) {
					this.onRequestCompleted(this);

					if (data == null) {
						if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
							this.logInfo("dojoIOIFrameSend", "Request error handling abandoned for desktop reload");
							this.logExit("dojoIOIFrameSend");
							return;
						}
						this.logError("dojoIOIFrameSend", "Bad response (not JSON?)", "URL=" + this.requestUrl + " ARGS=" + ioArgs);
						if (ecm.model.desktop) {
							errorMessage = Message.createErrorMessage("http_response_bad", null, this.backgroundRequest);
							this.addMessage(errorMessage);
						}
						if (lang.isFunction(this.requestFailedCallback)) {
							this.requestFailedCallback("", errorMessage ? [
								errorMessage
							] : undefined);
						}
					} else {
						var errorMessages = [];
						if (data.errors) {
							if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
								this.logInfo("dojoIOIFrameSend", "Request error handling abandoned for desktop reload");
								this.logExit("dojoIOIFrameSend");
								return;
							}
							for ( var i in data.errors) {
								var error = data.errors[i];
								if (lang.isString(error)) {
									this.logError("dojoIOIFrameSend", "Error: " + error, "URL=" + this.requestUrl + " ARGS=" + ioArgs);
									if (ecm.model.desktop) {
										errorMessage = new Message({
											number: 0,
											level: 2,
											text: error
										});
										this.addMessage(errorMessage);
										if (lang.isFunction(this.requestFailedCallback)) {
											errorMessages.push(errorMessage);
										}
									}
								} else {
									this.logError("dojoIOIFrameSend", "Error: " + error.text, "URL=" + this.requestUrl + " ARGS=" + ioArgs);
									if (ecm.model.desktop) {
										// Session expired (1003), or repository connection expired (1007).
										if (error.number == 1003 || error.number == 1007) {
											this._onSessionExpired(null, error);
										} else {
											errorMessage = new Message({
												number: error.number,
												level: 2,
												text: error.text,
												explanation: error.explanation,
												userResponse: error.userResponse,
												adminResponse: error.adminResponse,
												messageProductId: error.messageProductId
											});
											this.addMessage(errorMessage);
											if (lang.isFunction(this.requestFailedCallback)) {
												errorMessages.push(errorMessage);
											}
										}
									}
								}
							}
						}
						if (data.warnings) {
							for ( var i in data.warnings) {
								var warning = data.warnings[i];
								if (lang.isString(warning)) {
									this.logWarning("dojoIOIFrameSend", "Warning: " + warning, "URL=" + this.requestUrl + " ARGS=" + ioArgs);
									if (ecm.model.desktop) {
										this.addMessage(new Message({
											number: 0,
											level: 1,
											text: warning
										}));
									}
								} else {
									this.logWarning("dojoIOIFrameSend", "Warning: " + warning.text, "URL=" + this.requestUrl + " ARGS=" + ioArgs);
									if (ecm.model.desktop) {
										this.addMessage(new Message({
											number: warning.number,
											level: 1,
											text: warning.text,
											explanation: warning.explanation,
											userResponse: warning.userResponse,
											adminResponse: warning.adminResponse,
											messageProductId: warning.messageProductId
										}));
									}
								}
							}
						}
						if (data.messages) {
							for ( var i in data.messages) {
								var information = data.messages[i];
								if (information) {
									if (lang.isString(information)) {
										this.logInfo("dojoIOIFrameSend", "Information: " + information, "URL=" + this.requestUrl + " ARGS=" + ioArgs);
										if (ecm.model.desktop) {
											this.addMessage(new Message({
												number: 0,
												level: 0,
												text: information
											}));
										}
									} else {
										this.logInfo("dojoIOIFrameSend", "Information: " + information.text, "URL=" + this.requestUrl + " ARGS=" + ioArgs);
										if (ecm.model.desktop) {
											this.addMessage(new Message({
												number: information.number,
												level: 0,
												text: information.text,
												explanation: information.explanation,
												userResponse: information.userResponse,
												adminResponse: information.adminResponse,
												messageProductId: information.messageProductId
											}));
										}
									}
								}
							}
						}
						if (data.errors) {
							if (lang.isFunction(this.requestFailedCallback)) {
								this.requestFailedCallback(data, errorMessages.length > 0 ? errorMessages : undefined);
							}
						} else {
							if (lang.isFunction(this.requestCompleteCallback)) {
								this.requestCompleteCallback(data);
							}
						}
					}
				}),
				error: lang.hitch(this, function(data, ioArgs) {
					this.onRequestCompleted(this);
					if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
						this.logInfo("dojoIOIFrameSend", "Request error handling abandoned for desktop reload");
						this.logExit("dojoIOIFrameSend");
						return;
					}
					this.logError("dojoIOIFrameSend", "Http error" + " DATA=" + data + " ARGS=" + ioArgs);
					if (ecm.model.desktop) {
						errorMessage = Message.createErrorMessage("http_error", [
							ecm.model.desktop.servicesUrl,
							data
						], this.backgroundRequest);
						this.addMessage(errorMessage);
					}
					if (lang.isFunction(this.requestFailedCallback)) {
						this.requestFailedCallback(data, errorMessage ? [
							errorMessage
						] : undefined);
					}
				})
			});

			this.logExit("dojoIOIFrameSend");
		},

		/**
		 * Sends the file download request using iframe.send().
		 * 
		 * @param downloadForm
		 *            The form for the download request.
		 * @since 2.0.3.5
		 */
		dojoIOIFrameDownload: function(downloadForm) {
			this.logEntry("dojoIOIFrameDownload");
			var errorMessage;

			// Keep references to these parameters so that if a session timeout retry is attempted,
			// the security token input can be updated and this command retried.
			this.downloadForm = downloadForm;

			// Downloads are background requests, don't call onRequestStarted().
			// this.onRequestStarted(this);

			// Make sure that the last iframe.send() download request is cleared, or it will block sending this request.
			Request.clearLastIFrameDownloadRequest();

			this.iframeDownload = iframe.send({
				url: this.requestUrl,
				handleAs: "html",
				//method: "POST", - dojo ignores this parameter if a form is specified, the method in the form is used
				form: this.downloadForm,

				load: lang.hitch(this, function(response, ioArgs) {
					if (response == null) {
						if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
							this.logInfo("dojoIOIFrameDownload", "Request error handling abandoned for desktop reload");
							this.logExit("dojoIOIFrameDownload");
							return;
						}
						this.logError("dojoIOIFrameDownload", "Bad response", "URL=" + this.requestUrl + " ARGS=" + ioArgs);
						if (ecm.model.desktop) {
							errorMessage = Message.createErrorMessage("http_response_bad", null, this.backgroundRequest);
							this.addMessage(errorMessage);
						}
						if (lang.isFunction(this.requestFailedCallback)) {
							this.requestFailedCallback("", errorMessage ? [
								errorMessage
							] : undefined);
						}
					} else {
						// We shouldn't get here unless an error occurs.
						// Get the error text from the HTML response, format, and display in the error dialog.
						// Initialize to a generic message
						var title = null;
						var errorId = 0;
						var errorMessage = null;
						if (response.body.textContent) {
							errorMessage = response.body.textContent;
						} else if (response.body.innerText) {
							errorMessage = response.body.innerText;
						}
						if (errorMessage) {

							// Extract the CIWEB error number.
							var messages = errorMessage.split("\n");
							var errorId;
							array.some(messages, function(message) {
								// Extract the error ID if present
								var matches = message.replace(/^\s+/g, "").match(/^CIWEB(\d+):\s(.*)/);
								if (matches) {
									errorId = matches[1];
									return true;
								}
							});

							// Remove leading and trailing whitespace.
							errorMessage = errorMessage.replace(/^\s+|\s+$/g, "");

							// Look for the first line break to get the title. Remove the title from
							// the error message and remove leading spaces.
							var index = errorMessage.indexOf("\n");
							title = errorMessage.substring(0, index);
							errorMessage = errorMessage.substring(index);
							errorMessage = errorMessage.replace(/^\s+/g, "");

							// Convert line feeds to HTML breaks.
							errorMessage = errorMessage.replace(/\n/g, "<br>");

							// Remove multiple sequential whitespace characters.
							errorMessage = errorMessage.replace(/\s+/g, " ");

							// Remove leading whitespace characters in front of line breaks.
							errorMessage = errorMessage.replace(/ <br>/g, "<br>");

							// Remove any line breaks of three or more.
							var length = 0;
							while (length != errorMessage.length) {
								length = errorMessage.length;
								errorMessage = errorMessage.replace(/<br><br><br>/g, "<br><br>");
							}
						} else {
							// If for some reason we don't have an error message, use a generic one.
							title = ecm.messages.http_error;
						}

						// Session expired (1003), or repository connection expired (1007).
						if (errorId == 1003 || errorId == 1007) {
							this._onSessionExpired(null, {
								number: errorId
							});
						} else {
							var message = new Message({
								number: errorId,
								level: 2,
								text: title,
								explanation: errorMessage
							});
							if (message) {
								ecm.model.desktop.addMessage(message);
							}
						}

						return response;
					}
				}),

				error: lang.hitch(this, function(response, ioArgs) {
					this.onRequestCompleted(this);
					if (ecm.model.desktop && ecm.model.desktop.isReloading()) {
						this.logInfo("dojoIOIFrameDownload", "Request error handling abandoned for desktop reload");
						this.logExit("dojoIOIFrameDownload");
					} else if (response.dojoType && response.dojoType == "cancel") {
						// iframe download requests that send content back never send any completion signal, so there will
						// always be a stray "last request" after the first one that gets canceled - even if it succeeds.  So - 
						// ignore this, so that a confusing dialog is not shown, but keep some debug logging, in case something 
						// weird happens in the future.
						this.logDebug("dojoIOIFrameDownload", "Ignoring cancel on download.  ARGS=" + ioArgs);
					} else {
						this.logError("dojoIOIFrameDownload", "Http error" + " RESPONSE=" + response + " ARGS=" + ioArgs);
						if (ecm.model.desktop) {
							errorMessage = Message.createErrorMessage("http_error", [
								ecm.model.desktop.servicesUrl,
								response
							], this.backgroundRequest);
							this.addMessage(errorMessage);
						}
						if (lang.isFunction(this.requestFailedCallback)) {
							this.requestFailedCallback(response, errorMessage ? [
								errorMessage
							] : undefined);
						}
					}
				})

			});

			// Remember this download request.
			Request.setLastIFrameDownloadRequest(this.iframeDownload);

			this.logExit("dojoIOIFrameDownload");
		}
	});

	/**
	 * @private
	 */
	Request._lastIFrameDownloadRequest = null;

	/**
	 * Clears the last download request object passed to <code>Request.setIFrameDownloadRequest</code>, in case the
	 * user cancelled the download.<br>
	 * When a user cancels a file download in the browser, the download request object remains. The abandoned download
	 * request object must be cleared or it will prevent new IFRAME file download requests and new IFRAME file upload
	 * requests (IE version 9 and older) from being submitted to the server.
	 * 
	 * @since 2.0.3.5
	 */
	Request.clearLastIFrameDownloadRequest = function() {
		if (Request._lastIFrameDownloadRequest != null) {
			try {
				Request._lastIFrameDownloadRequest.cancel();
			} catch (e) {
			}
			Request._lastIFrameDownloadRequest = null;
		}
	};

	/**
	 * Call this method to store a <code>dojo.io.iframe</code> <code>iframe.send()</code> download request, so that
	 * if the user cancels the download in the browser the download request can be cleared before a new
	 * <code>iframe.send()</code> download or upload request are submitted to the server.<br>
	 * 
	 * @param downloadRequest
	 *            The deferred object for an IFRAME upload request, returned by the
	 *            <code>dojo.io.iframe</code> <code>send()</code> method.
	 * @since 2.0.3.5
	 */
	Request.setLastIFrameDownloadRequest = function(downloadRequest) {
		// First clear the existing request, if there is one.
		Request.clearLastIFrameDownloadRequest();
		// Next, remember this request.
		if (downloadRequest) {
			Request._lastIFrameDownloadRequest = downloadRequest;
		}
	};

	/**
	 * Defines generic settings for detecting a form response.
	 * 
	 * @since 2.0.3
	 */
	Request.fbaGeneric = {
		fbaName: "Generic form-based authentication",
		redirectToSitePage: true,
		method: "POST",
		formPostUrlMatch: null,
		formActionMatch: null,
		formAction: "",
		inputUser: "",
		inputPassword: "",
		hiddenFields: {},
		formMatch: function(formBasedAuth, responseTextLC) {
			// If the response contains a form, assume this is a redirect to logon.
			return responseTextLC.match(/<form\s*[^>]*>/i) != null;
		},
		getLoginFormBasedAuth: function(formBasedAuth, responseText) {
			return formBasedAuth;
		}
	};

	/**
	 * Defines the settings for WebSphere form-based authentication.
	 * 
	 * @since 2.0.3
	 */
	Request.fbaForWebSphere = {
		fbaName: "WebSphere form-based authentication",
		redirectToSitePage: true,
		method: "POST",
		formPostUrlMatch: "j_security_check",
		formActionMatch: "j_security_check",
		formAction: "j_security_check",
		inputUser: "j_username",
		inputPassword: "j_password",
		hiddenFields: {
			login: "Login"
		},
		formMatch: function(formBasedAuth, responseTextLC) {
			return (responseTextLC.indexOf(formBasedAuth.formActionMatch) != -1);
		},
		getLoginFormBasedAuth: function(formBasedAuth, responseText) {
			return formBasedAuth;
		}
	};

	/**
	 * Defines the settings for ISAM or TAM form-based authentication.
	 * 
	 * @since 2.0.3
	 */
	Request.fbaForISAMOrTAM = {
		fbaName: "IBM Security Access Manager or Tivoli Access Manager form-based authentication",
		redirectToSitePage: true,
		method: "POST",
		formPostUrlMatch: "/pkmslogin.form",
		formActionMatch: "/pkmslogin.form",
		inputUser: "username",
		inputPassword: "password",
		hiddenFields: {},
		formMatch: function(formBasedAuth, responseTextLC) {
			return (responseTextLC.indexOf(formBasedAuth.formActionMatch) != -1);
		},
		getLoginFormBasedAuth: function(formBasedAuth, responseText) {
			if (formBasedAuth.redirectToSitePage) {
				return formBasedAuth;
			}
			formBasedAuth = lang.clone(formBasedAuth);
			// Get the full action from the login form.
			var form = responseText.match(/<form\s*[^>]*>/i);
			form = form ? form[0] : "";
			var action = form.match(/\saction\s*=\s*["']([^"']*)["']/i);
			formBasedAuth.formAction = action ? action[1] : "";
			array.forEach(responseText.match(/(<input\s[^>]*>)/gi), function(inputField) {
				var type = inputField.match(/\stype\s*=\s*["']*([^"'\s]*)["'\s]/i);
				type = type ? type[1] : "";
				if (type.toLowerCase() == "hidden") {
					var name = inputField.match(/\sname\s*=\s*["']*([^"'\s]*)["'\s]/i);
					name = name ? name[1] : "";
					var value = inputField.match(/\svalue\s*=\s*["']([^"']*)["']/i);
					value = value ? value[1] : "";
					formBasedAuth.hiddenFields[name] = value;
				}
			});
			return formBasedAuth;
		}
	};

	/**
	 * Defines the settings for SiteMinder form-based authentication.
	 * 
	 * @since 2.0.3
	 */
	Request.fbaForSiteMinder = {
		fbaName: "SiteMinder form-based authentication",
		redirectToSitePage: true,
		method: "POST",
		formPostUrlMatch: "/login.fcc",
		formActionMatch: "/login.fcc",
		inputUser: "USER",
		inputPassword: "PASSWORD",
		hiddenFields: {},
		formMatch: function(formBasedAuth, responseTextLC) {
			if (responseTextLC.indexOf(formBasedAuth.formActionMatch) != -1) {
				return true;
			}
			var form = responseTextLC.match(/<form\s*[^>]*>/i);
			form = form ? form[0] : "";
			var formName = form.match(/\sname\s*=\s*["']([^"']*)["']/i);
			formName = formName ? formName[1] : "";
			if (formName == "autosubmit" || formName == "login") {
				if (array.some(responseTextLC.match(/(<input\s[^>]*>)/gi), function(inputField) {
					var name = inputField.match(/\sname\s*=\s*["']*([^"'\s]*)["'\s]/i);
					name = name ? name[1] : "";
					if (name == "smpostpreserve" || name == "smagentname" || name == "smauthreason") {
						return true;
					}
				})) {
					return true;
				}
			}
			return false;
		},
		getLoginFormBasedAuth: function(formBasedAuth, responseText) {
			if (formBasedAuth.redirectToSitePage) {
				return formBasedAuth;
			}
			var form = responseText.match(/<form\s*[^>]*>/i);
			form = form ? form[0] : "";

			var formName = form.match(/\sname\s*=\s*["']([^"']*)["']/i);
			formName = formName ? formName[1] : "";
			// First, if this is the autosubmit form that redirects to the login page...
			if (formName.toLowerCase() == "autosubmit") {
				var method = form.match(/\smethod\s*=\s*["']([^"']*)["']/i);
				method = method ? method[1] : "";
				var action = form.match(/\saction\s*=\s*["']([^"']*)["']/i);
				action = action ? action[1] : "";
				var fields = {};
				array.forEach(responseText.match(/(<input\s[^>]*>)/gi), function(inputField) {
					var type = inputField.match(/\stype\s*=\s*["']*([^"'\s]*)["'\s]/i);
					type = type ? type[1] : "";
					if (type.toLowerCase() == "hidden") {
						var name = inputField.match(/\sname\s*=\s*["']*([^"'\s]*)["'\s]/i);
						name = name ? name[1] : "";
						var value = inputField.match(/\svalue\s*=\s*["']([^"']*)["']/i);
						value = value ? value[1] : "";
						fields[name] = value;
					}
				});
				// This page also clears the password from script.
				fields.PASSWORD = "";
				var request = new Request({
					requestMethod: method,
					requestUrl: action,
					requestHeaders: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					requestBody: ioQuery.objectToQuery(fields),
					backgroundRequest: true,
					synchronous: true, // Necessary in this case. We need to retrieve the login form.
					requestFailedCallback: null,
					_onFinished: lang.hitch(this, function() {
						request.onRequestCompleted(request);
					})
				});
				request.send();
				responseText = request.getResponseText();
			}
			// Fill in the login form data.
			formBasedAuth = lang.clone(formBasedAuth);
			// Use the redirect form's action.
			formBasedAuth.formAction = action;
			var form = responseText.match(/<form\s*[^>]*>/i);
			form = form ? form[0] : "";
			var method = form.match(/\smethod\s*=\s*["']([^"']*)["']/i);
			formBasedAuth.method = method ? method[1] : "";
			array.forEach(responseText.match(/(<input\s[^>]*>)/gi), function(inputField) {
				var type = inputField.match(/\stype\s*=\s*["']*([^"'\s]*)["'\s]/i);
				type = type ? type[1] : "";
				if (type.toLowerCase() == "hidden") {
					var name = inputField.match(/\sname\s*=\s*["']*([^"'\s]*)["'\s]/i);
					name = name ? name[1] : "";
					var value = inputField.match(/\svalue\s*=\s*["']([^"']*)["']/i);
					value = value ? value[1] : "";
					formBasedAuth.hiddenFields[name] = value;
				}
			});
			return formBasedAuth;
		}
	};

	/**
	 * Set of form based authentications to check for in request responses.
	 * 
	 * @since 2.0.3
	 */
	Request.formBasedAuthentications = [
		Request.fbaForWebSphere,
		Request.fbaForISAMOrTAM,
		Request.fbaForSiteMinder,
		Request.fbaGeneric
	];

	/**
	 * Retrieve a security token from a response
	 * 
	 * @param response
	 *            The response object
	 * @return The security token
	 * @memberof ecm.model.Request
	 */
	Request.getSecurityToken = function(response) {
		var token = (response && response.security_token);
		if (token && token != Request._security_token) {
			Request._security_token = token;
			if (Request.onSecurityTokenChange) {
				Request.onSecurityTokenChange(response);
			}
		}
		return token;
	};

	/**
	 * Adds a security token to request parameters
	 * 
	 * @param params
	 *            The request parameters, either in the form of a query string, or an object.
	 * @return The resulting request parameters
	 * @memberof ecm.model.Request
	 */
	Request.setSecurityToken = function(params) {
		if (params) {
			var token = Request._security_token;
			if (token) {
				if (lang.isString(params)) {
					params = params + "&security_token=" + token;
				} else {
					params.security_token = token;
				}
			}
		}
		return params;
	};

	/**
	 * Append the security token to a url or query string.
	 * 
	 * @param url
	 *            The url or query string. If blank, or there are no parameters on the requst, the token is appended
	 *            using "?", otherwise, it is appended using "&".
	 * @return The resulting url
	 * @memberof ecm.model.Request
	 */
	Request.appendSecurityToken = function(url) {
		if (url && lang.isString(url)) {
			var token = Request._security_token;
			if (token) {
				var connector = (url.indexOf("?") < 0 ? "?" : "&");
				url = url + connector + "security_token=" + token;
			}
		}

		return url;
	};

	/**
	 * This static function returns a URL appropriate for invoking an IBM Content Navigator service.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, cmis, a plug-in provided repository type, or undefined for
	 *            common services.
	 * @param params
	 *            An object containing additional parameters.
	 * @memberof ecm.model.Request
	 */
	Request.getServiceRequestUrl = function(serviceName, repositoryType, params) {
		ecm.logger.logEntry("ecm.model.Request.getServiceRequestUrl", "serviceName=" + serviceName + " repositoryType=" + repositoryType + " params=" + params);

		if (ecm.model.desktop) {
			var servicesUrl = ecm.model.desktop.servicesUrl;
		} else {
			var servicesUrl = "/navigator";
		}

		var requestUrl;
		if (servicesUrl.indexOf("json") >= 0) {
			requestUrl = servicesUrl;
			if (requestUrl.substring(requestUrl.length - 1) != "/") {
				requestUrl += "/";
			}
			requestUrl += serviceName;
			if (params) {
				if (has("host-rhino")) { // Rhino flips the params
					var paramsFlipped = [];
					for ( var paramName in params) {
						paramsFlipped.unshift(params[paramName]);
					}
					params = paramsFlipped;
				}
				for ( var paramName in params) {
					if (!Request._dohExcludeParams[paramName]) {
						if (Request._dohServiceParams[serviceName]) {
							if (Request._dohServiceParams[serviceName].include && Request._dohServiceParams[serviceName].include[paramName]) {
								requestUrl = Request._dohAppendServiceParam(requestUrl, params[paramName]);
							} else if (Request._dohServiceParams[serviceName].exclude && !Request._dohServiceParams[serviceName].exclude[paramName]) {
								requestUrl = Request._dohAppendServiceParam(requestUrl, params[paramName]);
							}
						} else {
							requestUrl = Request._dohAppendServiceParam(requestUrl, params[paramName]);
						}
					}
				}
			}
			requestUrl += ".json";
		} else {
			servicesUrl = ecm.model.desktop.servicesUrl;
			if (servicesUrl.charAt(servicesUrl.length - 1) != "/")
				servicesUrl += "/";
			servicesUrl += "jaxrs";

			requestUrl = servicesUrl;
			if (repositoryType == null || repositoryType == "") { // common service
				requestUrl = servicesUrl + "/" + serviceName;
			} else if (repositoryType == "od" || repositoryType == "cm" || repositoryType == "p8" || repositoryType == "cmis" || repositoryType == "x8" || repositoryType == "box") { // built-in server types
				requestUrl = servicesUrl + "/" + repositoryType + "/" + serviceName;
			} else if (repositoryType) { // plugin provided repository
				requestUrl = servicesUrl + "/pluginRepository";
				if (params) {
					params.repositoryType = repositoryType;
					params.action = serviceName;
				} else {
					params = {
						repositoryType: repositoryType,
						action: serviceName
					};
				}
			}
			if (ecm.model.desktop) {
				//always add in the desktop id on every request.
				if (params) {
					var desktopId = params["desktop"];
					if (!desktopId) {
						params["desktop"] = ecm.model.desktop.id;
					}
					requestUrl = requestUrl + "?" + ioQuery.objectToQuery(params);
				} else {
					params = {
						desktop: ecm.model.desktop.id
					};
				}
			}
		}

		ecm.logger.logExit("ecm.model.Request.getServiceRequestUrl", "Request URL=" + requestUrl);
		return requestUrl;
	};

	/**
	 * @private
	 */
	Request._dohAppendServiceParam = function(requestUrl, param) {
		if (lang.isArray(param)) {
			var paramValues = param;
			for (var i = 0; i < paramValues.length; i++) {
				requestUrl += "_" + paramValues[i].replace(/[^a-z0-9A-Z_]/g, "");
			}
		} else if (param && lang.isString(param)) {
			requestUrl += "_" + param.replace(/[^a-z0-9A-Z_]/g, "");
		} else if (param) {
			// These are typically integers that need to be converted to a string first
			requestUrl += "_" + param.toString().replace(/[^a-z0-9A-Z_]/g, "");
		}

		return requestUrl;
	},

	/**
	 * Add service request parameters to this list, that should be skipped when forming JSON test data file names.
	 * 
	 * @private
	 */
	Request._dohExcludeParams = {
		criterias: true,
		clientTimeZoneData: true
	},

	/**
	 * Use this structure as a helper, to form JSON test data file names when running DOH tests. Each service name can
	 * specify either an include or an exclude list. Specify one or the other, but not both.
	 * 
	 * @private
	 */
	Request._dohServiceParams = {
		logon: {
			include: {
				desktop: true,
				repositoryId: true,
				userid: true,
				password: true
			}
		}
	},

	/**
	 * @private
	 */
	Request.createRequest = function(params) {
		ecm.logger.logEntry("ecm.model.Request.createRequest", "params=" + params);
		var request = new Request(params);
		if (params && params.requestParams && params.requestParams.repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(params.requestParams.repositoryId);
		}
		ecm.logger.logExit("ecm.model.Request.createRequest", request);
		return request;
	},

	/**
	 * The basicAuthorizationToken is base64 encoded "Basic base64(<user>:<password>)" token which added as extra
	 * header "Authorization" to each requests in the midtier. This is undefined by default, meaning by default the
	 * "Authorization" header is not set.
	 */
	Request.basicAuthorizationToken = undefined,

	Request.enableSecureService = true,

	/**
	 * This static function creates and sends a request to an IBM Content Navigator service via HTTP GET.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters.
	 * @param onFinished
	 *            A function invoked when the request completes. The response JSON will be passed as the only argument.
	 * @param backgroundRequest
	 *            If true, this request will run in the background without any status dialogs or wait cursor
	 *            indications.
	 * @param callerHandledErrorNumbers
	 *            An array of error numbers that are handled by the caller.
	 * @private Use ecm.model.Request.invokeServiceAPI instead. This method will be removed in a future release.
	 */
	Request.invokeService = function(serviceName, repositoryType, params, onFinished, cancellable, synchronous, onError, backgroundRequest, callerHandledErrorNumbers) {
		return Request.invokeServiceAPI(serviceName, repositoryType, {
			requestParams: params,
			cancellable: cancellable,
			backgroundRequest: backgroundRequest,
			synchronous: synchronous,
			requestCompleteCallback: onFinished,
			requestFailedCallback: onError,
			callerHandledErrorNumbers: callerHandledErrorNumbers
		});
	};

	/**
	 * This static function creates and sends a request to an IBM Content Navigator service via HTTP GET.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - Parameters intended for the URL (for GET requests) or request body (for POST
	 *            requests).</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>synchronous - Flag indicating if this is a synchronous request. By default all requests are
	 *            asynchronous. Using synchronous requests is discouraged and should be used with extreme caution.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @memberof ecm.model.Request
	 */
	Request.invokeServiceAPI = function(serviceName, repositoryType, params) {
		ecm.logger.logEntry("ecm.model.Request.invokeServiceAPI", "serviceName=" + serviceName + ", repositoryType: " + repositoryType);

		if (repositoryType == "dummy") {
			return new Request(""); // ignore
		}

		params.progressMessage = Messages["progress_message_" + repositoryType + "_" + serviceName] || Messages["progress_message_" + serviceName] || Messages.progress_message_general;
		params.cancelMessage = Messages["cancel_message_" + repositoryType + "_" + serviceName] || Messages["cancel_message_" + serviceName] || Messages.cancel_message_general;

		if (ecm.model.desktop) {
			var servicesUrl = ecm.model.desktop.servicesUrl;
		} else {
			var servicesUrl = "/navigator";
		}

		var request;
		if (!lang.isObject(params.requestHeaders)) {
			params.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}

		if (!Request.enableSecureService || servicesUrl == null || servicesUrl.indexOf("json") >= 0) //don't convert to post if it is the test harness.
		{
			var requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType, params.requestParams);
			params.requestUrl = requestUrl;
			params.requestMethod = "GET";
		} else {
			var requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType);
			params.requestUrl = requestUrl;

			// Always add the desktop ID
			if (ecm.model.desktop && !params.requestParams["desktop"]) {
				params.requestParams["desktop"] = ecm.model.desktop.id;
			}

			params.requestMethod = "POST";
			params.requestBody = ioQuery.objectToQuery(params.requestParams);
			params.requestHeaders["Content-Type"] = "application/x-www-form-urlencoded";
			//params.requestHeaders["security_token"] = Request._security_token;

			if (!has("webkit")) { // WebKit does not allow setting content length on a request
				//params.requestHeaders["Content-Length"] = params.requestBody.length;
			}
		}
		var request = Request.createRequest(params);
		request.send();

		ecm.logger.logExit("ecm.model.Request.invokeServiceAPI");
		return request;
	};

	Request.invokeXMLService = function(serviceName, repositoryType, params, onFinished, cancellable, synchronous, onError, backgroundRequest, callerHandledErrorNumbers, xmlPayload) {
		return Request.invokeXMLServiceAPI(serviceName, repositoryType, {
			requestParams: params,
			cancellable: cancellable,
			backgroundRequest: backgroundRequest,
			synchronous: synchronous,
			requestCompleteCallback: onFinished,
			requestFailedCallback: onError,
			callerHandledErrorNumbers: callerHandledErrorNumbers,	
			payload: xmlPayload
		});
	};
	
	Request.invokeXMLServiceAPI = function(serviceName, repositoryType, params) {
		ecm.logger.logEntry("ecm.model.Request.invokeXMLServiceAPI", "serviceName=" + serviceName + ", repositoryType: " + repositoryType);

		if (repositoryType == "dummy") {
			return new Request(""); // ignore
		}

		params.progressMessage = Messages["progress_message_" + repositoryType + "_" + serviceName] || Messages["progress_message_" + serviceName] || Messages.progress_message_general;
		params.cancelMessage = Messages["cancel_message_" + repositoryType + "_" + serviceName] || Messages["cancel_message_" + serviceName] || Messages.cancel_message_general;

		if (ecm.model.desktop) {
			var servicesUrl = ecm.model.desktop.servicesUrl;
		} else {
			var servicesUrl = "/navigator";
		}

		var request;
		if (!lang.isObject(params.requestHeaders)) {
			params.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}

		var request;
		params.requestMethod = "POST";	
		params.requestHeaders["security_token"] = Request._security_token;
		// Always add the desktop ID
		if (ecm.model.desktop && !params.requestParams["desktop"]) {
			params.requestParams["desktop"] = ecm.model.desktop.id;
		}		
		var length;
		if (params.payload) 
		{
			var requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType, params.requestParams);
			params.requestUrl = requestUrl;			
			params.requestHeaders["Content-Type"] = "text/xml;charset=UTF-8";	// request payload is XML		
			request = Request.createRequest(params);
			request.requestBody = params.payload;	// XML is in request body so parameters need to be in the query strings
			length = request.requestBody.length;
		} else {
			var requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType);
			params.requestUrl = requestUrl;			
			params.requestHeaders["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
			params.requestBody = ioQuery.objectToQuery(params.requestParams);						
			request = Request.createRequest(params);
			length = params.requestBody.length;
		}
		if (!has("webkit")) { // WebKit does not allow setting content length on a request
			params.requestHeaders["Content-Length"] = length;
		}
		// Connect to the getResponse method to handle XML data
		var resHandle, tokenHandle;
		resHandle = aspect.around(request, "getResponse", lang.hitch(this, function(originalMethod) {			
			return function() {
				var responseText;
				var isXMLResponse = false;
				if (this.xmlHttpRequest && this.xmlHttpRequest.readyState == 4) {
					responseText = this.xmlHttpRequest.responseText;
					if (this.xmlHttpRequest.responseXML) {
						isXMLResponse = true;
					}
				}
				if (isXMLResponse) {
					resHandle.remove();
					delete resHandle;
					tokenHandle.remove();
					delete tokenHandle;
					return responseText;					
				} else {
					return originalMethod.apply(this);
				}
			};
		}));
		tokenHandle = aspect.around(request, "_updateSecurityToken", lang.hitch(this, function(originalMethod) {			
			return function() {
				var lastSecurityToken = request.requestHeaders.security_token;
				if (this.requestBody.indexOf("<?xml") == 0 && this.requestBody.indexOf("security_token") != -1) {
					tokenHandle.remove();
					delete tokenHandle;
					this.requestBody = this.requestBody.split(lastSecurityToken).join(Request._security_token);							
				} else {
					originalMethod.apply(this);
				}										
			};
		}));
		
		request.send();

		ecm.logger.logExit("ecm.model.Request.invokeXMLServiceAPI");
		return request;
	};	

	/**
	 * This static function creates and sends a request to an IBM Content Navigator service via HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www-form-urlencoded" as the contentType and
	 * ioQuery.objectToQuery(params) for the content. Leave the params empty.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param contentType
	 *            The MIME content type of the content to post.
	 * @param params
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - Parameters for the POST request body.</li>
	 *            <li>requestBody - The request body. Could be an object or string to add to the body of the request.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>synchronous - Flag indicating if this is a synchronous request. By default all requests are
	 *            asynchronous. Using synchronous requests is discouraged and should be used with extreme caution.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @memberof ecm.model.Request
	 */
	Request.postServiceAPI = function(serviceName, repositoryType, contentType, params) {
		ecm.logger.logEntry("ecm.model.Request.postService", "serviceName=" + serviceName);

		var repositoryId = null;
		if (lang.isObject(params.requestBody)) {
			params.requestBody = JSON.stringify(params.requestBody);
		}

		if (params.requestParams) {
			repositoryId = params.requestParams.repositoryId;
			if (Request.enableSecureService) {
				// do not send parameters in URL
				if (params.requestBody) {
					params.requestParams.json_post = params.requestBody;
				}
				// always add the desktop id
				if (ecm.model.desktop && !params.requestParams["desktop"]) {
					params.requestParams["desktop"] = ecm.model.desktop.id;
				}
				params.requestBody = ioQuery.objectToQuery(params.requestParams);
				params.requestParams = undefined;
				contentType = "application/x-www-form-urlencoded; charset=UTF-8";
			}
		}

		var requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType, params.requestParams);
		params.progressMessage = Messages["progress_message_" + repositoryType + "_" + serviceName] || Messages["progress_message_" + serviceName] || Messages.progress_message_general;
		params.cancelMessage = Messages["cancel_message_" + repositoryType + "_" + serviceName] || Messages["cancel_message_" + serviceName] || Messages.cancel_message_general;
		params.requestUrl = requestUrl;
		params.requestMethod = requestUrl.indexOf(".json", requestUrl.length - 5) > -1 ? "GET" : "POST";

		// Setup request headers
		if (!lang.isObject(params.requestHeaders)) {
			params.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (contentType) {
			params.requestHeaders["Content-Type"] = contentType;
		}
		if (Request.enableSecureService) {
			params.requestHeaders["security_token"] = Request._security_token;
		}
		if (!has("webkit")) { // WebKit does not allow setting content length on a request
			params.requestHeaders["Content-Length"] = params.requestBody.length;
		}

		var request = new Request(params);
		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}
		request.send();

		ecm.logger.logExit("ecm.model.Request.postService");
		return request;
	};

	/**
	 * This static function creates and sends a request to an IBM Content Navigator service via HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www-form-urlencoded" as the contentType and
	 * ioQuery.objectToQuery(params) for the content. Leave the params empty.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters.
	 * @param contentType
	 *            The MIME content type of the content to post.
	 * @param content
	 *            The content to post.
	 * @param onFinished
	 *            A function invoked when the request completes. The response JSON will be passed as the only argument.
	 * @param cancellable
	 *            If true, the response can be cancelled.
	 * @param backgroundRequest
	 *            If true, this request will run in the background without any status dialogs or wait cursor
	 *            indications.
	 * @param synchronous
	 *            If true, the request is processed synchronously.
	 * @param onError
	 *            A function invoked when the request fails.
	 * @param callerHandledErrorNumbers
	 *            An array of error numbers that will not be notified and are to be handled by the caller.
	 * @private Use ecm.model.Request.postServiceAPI instead. This method will be removed in a future release.
	 */
	Request.postService = function(serviceName, repositoryType, params, contentType, content, onFinished, cancellable, backgroundRequest, synchronous, onError, callerHandledErrorNumbers) {
		return Request.postServiceAPI(serviceName, repositoryType, contentType, {
			requestParams: params,
			requestBody: content,
			cancellable: cancellable,
			backgroundRequest: backgroundRequest,
			synchronous: synchronous,
			requestCompleteCallback: onFinished,
			requestFailedCallback: onError,
			callerHandledErrorNumbers: callerHandledErrorNumbers
		});
	};

	/**
	 * This static function creates and sends form data to an IBM Content Navigator service via HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www.form-urlencoded" as the contentType and
	 * ioQuery.objectToQuery(params) for the content. Leave the params empty.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - Object containing any request parameters that should be added to the form post.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @param form
	 *            The form to post. Form is an instance of FormData.
	 * @memberof ecm.model.Request
	 */
	Request.postFormToServiceAPI = function(serviceName, repositoryType, params, form) {
		ecm.logger.logEntry("ecm.model.Request.postFormToService", "serviceName=" + serviceName);
		var repositoryId;

		// If form params are passed in instead of a FormData object, create the FormData object here.
		// The passed in form params will be saved on the request so that if a session timeout retry is attempted,
		// the form can be recreated with the new security token.
		var origFormParams;
		if (!(form instanceof FormData) && (form instanceof Object)) {
			origFormParams = form;
			form = new FormData();
			for ( var propname in origFormParams) {
				if (origFormParams.hasOwnProperty(propname)) {
					form.append(propname, origFormParams[propname]);
				}
			}
		}

		var origParams;
		if (params.requestParams) {
			origParams = params.requestParams;
			repositoryId = params.requestParams.repositoryId;
			if (Request.enableSecureService) {
				// do not send parameters in URL
				for ( var name in params.requestParams) {
					var value = params.requestParams[name];
					if (value && value.length > 0 && value != "undefined") { // ignore null and undefined
						form.append(name, value);
					}
				}
				params.requestParams = {};
			}
		}

		if (!lang.isObject(params.requestHeaders)) {
			params.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (Request.enableSecureService) {
			params.requestHeaders["security_token"] = Request._security_token;
		}

		var requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType, params.requestParams);
		params.requestUrl = requestUrl;
		params.progressMessage = Messages["progress_message_" + repositoryType + "_" + serviceName] || Messages["progress_message_" + serviceName] || Messages.progress_message_general;
		params.cancelMessage = Messages["cancel_message_" + repositoryType + "_" + serviceName] || Messages["cancel_message_" + serviceName] || Messages.cancel_message_general;
		params.requestMethod = requestUrl.indexOf(".json", requestUrl.length - 5) > -1 ? "GET" : "POST";
		params.requestBody = form;
		var request = new Request(params);

		if (origFormParams) {
			request._origFormParams = origFormParams;
			if (origParams) {
				request._origParams = origParams;
			}
		}

		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}

		request.send();
		ecm.logger.logExit("ecm.model.Request.postFormToService");
		return request;
	};

	/**
	 * This static function creates and sends form data to an IBM Content Navigator service via HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www.form-urlencoded" as the contentType and
	 * ioQuery.objectToQuery(params) for the content. Leave the params empty.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters.
	 * @param form
	 *            The form to post. Form is an instance of FormData.
	 * @param onFinished
	 *            A function invoked when the request completes. The response JSON will be passed as the only argument.
	 * @param cancellable
	 *            If true, the response can be cancelled.
	 * @param backgroundRequest
	 *            If true, this request will run in the background without any status dialogs or wait cursor
	 *            indications.
	 * @private Use ecm.model.Request.postFormToServiceAPI instead. This method will be removed in a future release.
	 */
	Request.postFormToService = function(serviceName, repositoryType, params, form, onFinished, cancellable, backgroundRequest, onError) {
		return Request.postFormToServiceAPI(serviceName, repositoryType, {
			requestParams: params,
			cancellable: cancellable,
			backgroundRequest: backgroundRequest,
			synchronous: false,
			requestCompleteCallback: onFinished,
			requestFailedCallback: onError
		}, form);
	};

	/**
	 * This static function creates and sends form data to an IBM Content Navigator service via iframe.send().
	 * <p>
	 * You can use this method to submit the HTML form to upload a file to the IBM Content Navigator add document
	 * service.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestParams - Object containing any request parameters that should be added to the form post.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled.</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @param fileInputForm
	 *            The form to post. Form is an instance of FormData.
	 * @memberof ecm.model.Request
	 */
	Request.ieFileUploadServiceAPI = function(serviceName, repositoryType, params, fileInputForm) {
		ecm.logger.logEntry("ecm.model.Request.ieFileUploadService", "serviceName=" + serviceName);
		var inputs = []; // temporary input elements for additional parameters
		var repositoryId;
		if (Request.enableSecureService && Request._security_token) {
			inputs.push(domConstruct.create("input", {
				type: "hidden",
				name: "security_token",
				value: Request._security_token
			}, fileInputForm));
		}

		var origParams;
		if (params.requestParams) {
			origParams = params.requestParams;
			repositoryId = params.requestParams.repositoryId;
			if (Request.enableSecureService) {
				// do not send parameters in URL
				for ( var name in params.requestParams) {
					if (name == "security_token") {
						continue;
					}
					var value = params.requestParams[name];
					if (value != null) { // ignore null and undefined
						inputs.push(domConstruct.create("input", {
							type: "hidden",
							name: name,
							value: value
						}, fileInputForm));
					}
				}
				params.requestParams = {};
			}
		}

		try {
			params.requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType, params.requestParams);
			params.progressMessage = Messages["progress_message_" + repositoryType + "_" + serviceName] || Messages["progress_message_" + serviceName] || Messages.progress_message_general;
			params.cancelMessage = Messages["cancel_message_" + repositoryType + "_" + serviceName] || Messages["cancel_message_" + serviceName] || Messages.cancel_message_general;
			var request = new Request(params);

			if (repositoryId && ecm.model.desktop) {
				request.repository = ecm.model.desktop.getRepository(repositoryId);
			}
			if (origParams) {
				request._origParams = origParams;
			}
			request.dojoIOIFrameSend(fileInputForm);
		} finally {
			// clean up temporary input elements
			array.forEach(inputs, domConstruct.destroy);
		}

		ecm.logger.logExit("ecm.model.Request.ieFileUploadService");
		return request;
	};

	/**
	 * This static function creates and sends form data to an IBM Content Navigator service via iframe.send().
	 * <p>
	 * You can use this method to submit the HTML form to upload a file to the IBM Content Navigator add document
	 * service.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for the add item service.
	 * @param repositoryType
	 *            The type of content repository: cm, p8.
	 * @param params
	 *            An object containing additional parameters.
	 * @param fileInputForm
	 *            The form containing the file input field.
	 * @param onFinished
	 *            A function invoked when the request completes. The response JSON will be passed as the only argument.
	 * @param cancellable
	 *            If true, the response can be cancelled.
	 * @private Use ecm.model.Request.ieFileUploadServiceAPI instead. This method will be removed in a future release.
	 */
	Request.ieFileUploadService = function(serviceName, repositoryType, params, fileInputForm, onFinished, cancellable, backgroundRequest, onError) {
		return Request.ieFileUploadServiceAPI(serviceName, repositoryType, {
			requestParams: params,
			cancellable: cancellable,
			backgroundRequest: backgroundRequest,
			synchronous: false,
			requestCompleteCallback: onFinished,
			requestFailedCallback: onError
		}, fileInputForm);
	};

	/**
	 * This static function sends download form data to an IBM Content Navigator service via iframe.send().
	 * <p>
	 * You can use this method to submit the HTML form to upload a file to the IBM Content Navigator add document
	 * service.
	 * 
	 * @param serviceName
	 *            The name of the service. Refer to navigator/WEB-INF/struts.xml for a list of the services.
	 * @param repositoryType
	 *            The type of content repository: od, cm, p8, ci, cmis, or undefined for common services.
	 * @param params
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestParams - Object containing any request parameters that should be added to the form post.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled.</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @param downloadForm
	 *            The download form to post. Form is an instance of FormData.
	 * @memberof ecm.model.Request
	 * @since 2.0.3.5
	 */
	Request.downloadFormServiceAPI = function(serviceName, repositoryType, params, downloadForm) {
		ecm.logger.logEntry("ecm.model.Request.downloadFormServiceAPI", "serviceName=" + serviceName);
		var inputs = []; // temporary input elements for additional parameters
		var repositoryId;
		if (Request.enableSecureService) {
			Request.setSecurityToken(params.requestParams);
		}
		if (Request.enableSecureService && Request._security_token) {
			inputs.push(domConstruct.create("input", {
				type: "hidden",
				name: "security_token",
				value: Request._security_token
			}, downloadForm));
		}
		var origParams;
		if (params.requestParams) {
			origParams = params.requestParams;
			repositoryId = params.requestParams.repositoryId;

			// All request parameters are added to the form.
			for ( var name in params.requestParams) {
				if (name == "security_token") {
					continue;
				}
				var value = params.requestParams[name];
				if (lang.isArray(value)) {
					for ( var i in value) {
						inputs.push(domConstruct.create("input", {
							type: "hidden",
							name: name,
							value: value[i]
						}, downloadForm));
					}
				} else {
					inputs.push(domConstruct.create("input", {
						type: "hidden",
						name: name,
						value: value
					}, downloadForm));
				}
			}
			params.requestParams = {};
		}

		try {
			params.requestUrl = Request.getServiceRequestUrl(serviceName, repositoryType, params.requestParams);
			params.progressMessage = Messages["progress_message_" + repositoryType + "_" + serviceName] || Messages["progress_message_" + serviceName] || Messages.progress_message_general;
			params.cancelMessage = Messages["cancel_message_" + repositoryType + "_" + serviceName] || Messages["cancel_message_" + serviceName] || Messages.cancel_message_general;
			var request = new Request(params);

			if (repositoryId && ecm.model.desktop) {
				request.repository = ecm.model.desktop.getRepository(repositoryId);
			}
			if (origParams) {
				request._origParams = origParams;
			}
			request.dojoIOIFrameDownload(downloadForm);
		} finally {
			// clean up temporary input elements
			array.forEach(inputs, domConstruct.destroy);
		}

		ecm.logger.logExit("ecm.model.Request.downloadFormServiceAPI");
		return request;
	};

	/**
	 * This static function invokes the services to launch a plug-in-provided service.
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param pluginServiceName
	 *            The identifier of the service as defined by the plug-in.
	 * @param pluginParams
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - A simple JavaScript object with name/value parameters for the plug-in.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @memberof ecm.model.Request
	 */
	Request.invokePluginService = function(pluginName, pluginServiceName, pluginParams) {
		ecm.logger.logEntry("ecm.model.Request.invokePluginService", "pluginName=" + pluginName + ", pluginServiceName=" + pluginServiceName);
		var repositoryId;
		if (!lang.isObject(pluginParams))
			pluginParams = {};

		var params = {};
		if (lang.isObject(pluginParams.requestParams)) {
			repositoryId = pluginParams.requestParams.repositoryId;
			for ( var i in pluginParams.requestParams) {
				params[i] = pluginParams.requestParams[i];
			}
		}

		params["plugin"] = pluginName;
		params["action"] = pluginServiceName;
		pluginParams.requestUrl = Request.getServiceRequestUrl("plugin", "", params);
		pluginParams.progressMessage = Messages["progress_message_" + pluginName + "_" + pluginServiceName] || Messages["progress_message_" + pluginServiceName] || Messages.progress_message_general;
		pluginParams.cancelMessage = Messages["cancel_message_" + pluginName + "_" + pluginServiceName] || Messages["cancel_message_" + pluginServiceName] || Messages.cancel_message_general;
		pluginParams.requestMethod = "GET";

		if (!lang.isObject(pluginParams.requestHeaders)) {
			pluginParams.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (Request.enableSecureService) {
			pluginParams.requestHeaders["security_token"] = Request._security_token;
		}

		var request = new Request(pluginParams);
		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}
		request.send();

		ecm.logger.logExit("ecm.model.Request.invokePluginService");
		return request;
	};

	/**
	 * This static function will synchronously invoke the services to launch a plug-in-provided service. <b>Use of this
	 * method is discouraged.</b>A synchronous request blocks all browser operations until the request completes.
	 * Consider using an asynchronous request instead.</b>
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param pluginServiceName
	 *            The identifier of the service as defined by the plug-in.
	 * @param pluginParams
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - A simple JavaScript object with name/value parameters for the plug-in.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @returns The JSON parsed response of the service.
	 * @memberof ecm.model.Request
	 */
	Request.invokePluginServiceSynchronous = function(pluginName, pluginServiceName, pluginParams) {
		ecm.logger.logEntry("ecm.model.Request.invokePluginServiceSynchronous", "pluginName=" + pluginName + ", pluginServiceName=" + pluginServiceName);

		var repositoryId;
		if (!lang.isObject(pluginParams))
			pluginParams = {};

		var params = {};
		if (lang.isObject(pluginParams.requestParams)) {
			repositoryId = pluginParams.requestParams.repositoryId;
			for ( var i in pluginParams.requestParams) {
				params[i] = pluginParams.requestParams[i];
			}
		}

		params["plugin"] = pluginName;
		params["action"] = pluginServiceName;
		pluginParams.requestUrl = Request.getServiceRequestUrl("plugin", "", params);
		pluginParams.requestMethod = "GET";
		pluginParams.synchronous = true;
		var response;
		pluginParams.requestCompleteCallback = function(r) {
			response = r;
		};

		if (!lang.isObject(pluginParams.requestHeaders)) {
			pluginParams.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (Request.enableSecureService) {
			pluginParams.requestHeaders["security_token"] = Request._security_token;
		}

		var request = new Request(pluginParams);
		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}
		request.send();

		ecm.logger.logExit("ecm.model.Request.invokePluginServiceSynchronous");
		return response;
	};

	/**
	 * This static function will synchronously invoke the services to launch a plug-in-provided service. <b>Use of this
	 * method is discouraged.</b>A synchronous request blocks all browser operations until the request completes.
	 * Consider using an asynchronous request instead.</b>
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param pluginServiceName
	 *            The identifier of the service as defined by the plug-in.
	 * @param pluginParams
	 *            A simple JavaScript object with name/value parameters for the plug-in.
	 * @returns The JSON parsed response of the service.
	 * @deprecated Deprecated in 2.0.3. The method <code>invokePluginServiceSynchronous</code> should be used instead.
	 */
	Request.invokeSynchronousPluginService = function(pluginName, pluginServiceName, pluginParams) {
		ecm.logger.logEntry("ecm.model.Request.invokeSynchronousPluginService", "pluginName=" + pluginName + ", pluginServiceName=" + pluginServiceName);

		var params = {};
		if (lang.isObject(pluginParams)) {
			for ( var i in pluginParams) {
				params[i] = pluginParams[i];
			}
		}

		params["plugin"] = pluginName;
		params["action"] = pluginServiceName;
		Request.setSecurityToken(params);

		var requestUrl = Request.getServiceRequestUrl("plugin", "", params);
		var response;
		var onFinished = function(r) {
			response = r;
		};

		var request = new Request({
			requestMethod: "GET",
			requestUrl: requestUrl,
			requestHeaders: {
				"Cache-Control": "no-cache"
			},
			synchronous: true,
			requestCompleteCallback: onFinished
		});
		request.send();

		ecm.logger.logExit("ecm.model.Request.invokeSynchronousPluginService");
		return response;
	};

	/**
	 * This static function will invoke the services to launch a plug-in provided service. The request is performed by
	 * using an HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www.form-urlencoded" as the contentType and
	 * ioQuery.objectToQuery(pluginParams.requestBody) for the content.
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param pluginServiceName
	 *            The identifier of the service as defined by the plug-in.
	 * @param contentType
	 *            The MIME content type of the content to post.
	 * @param pluginParams
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - An object with name/value pairs to add to the request URL.</li>
	 *            <li>requestBody - An object with name/value pairs to add to the body of the request.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @memberof ecm.model.Request
	 */
	Request.postPluginService = function(pluginName, pluginServiceName, contentType, pluginParams) {
		ecm.logger.logEntry("ecm.model.Request.postPluginService", "pluginName=" + pluginName + ", pluginServiceName=" + pluginServiceName);
		var repositoryId;

		if (!lang.isObject(pluginParams))
			pluginParams = {};
		if (!pluginParams.requestBody)
			pluginParams.requestBody = {};

		// Setup request body
		if (lang.isObject(pluginParams.requestBody)) {
			pluginParams.requestBody = JSON.stringify(pluginParams.requestBody);
		}

		// Build url parameters
		var params = {};
		if (lang.isObject(pluginParams.requestParams)) {
			repositoryId = pluginParams.requestParams.repositoryId;
			for ( var i in pluginParams.requestParams) {
				params[i] = pluginParams.requestParams[i];
			}
		}
		params["plugin"] = pluginName;
		params["action"] = pluginServiceName;

		if (ecm.model.desktop && pluginParams.requestParams && !pluginParams.requestParams["desktop"]) {
			params["desktop"] = ecm.model.desktop.id;
		}

		pluginParams.requestUrl = Request.getServiceRequestUrl("plugin", "", params);
		pluginParams.progressMessage = Messages["progress_message_" + pluginName + "_" + pluginServiceName] || Messages["progress_message_" + pluginServiceName] || Messages.progress_message_general;
		pluginParams.cancelMessage = Messages["cancel_message_" + pluginName + "_" + pluginServiceName] || Messages["cancel_message_" + pluginServiceName] || Messages.cancel_message_general;
		pluginParams.synchronous = false;
		pluginParams.requestMethod = pluginParams.requestUrl.indexOf(".json", pluginParams.requestUrl.length - 5) > -1 ? "GET" : "POST";

		if (!lang.isObject(pluginParams.requestHeaders)) {
			pluginParams.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (Request.enableSecureService) {
			pluginParams.requestHeaders["security_token"] = Request._security_token;
		}
		if (contentType) {
			pluginParams.requestHeaders["Content-Type"] = contentType;
		}
		if (!has("webkit")) {// WebKit does not allow setting content length on a request
			pluginParams.requestHeaders["Content-Length"] = pluginParams.requestBody.length;
		}

		var request = new Request(pluginParams);
		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}
		request.send();

		ecm.logger.logExit("ecm.model.Request.postPluginService");
		return request;
	};

	/**
	 * This static function will synchronously invoke the services to launch a plug-in provided service. The request is
	 * performed using an HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www.form-urlencoded" as the contentType and
	 * ioQuery.objectToQuery(requestParams.requestBody) for the content.
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param pluginServiceName
	 *            The identifier of the service as defined by the plug-in.
	 * @param contentType
	 *            The MIME content type of the content to post.
	 * @param pluginParams
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - An object with name/value pairs to add to the request URL.</li>
	 *            <li>requestBody - An object with name/value pairs to add to the body of the request.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when the a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @memberof ecm.model.Request
	 */
	Request.postSynchronousPluginService = function(pluginName, pluginServiceName, contentType, pluginParams) {
		ecm.logger.logEntry("ecm.model.Request.postSynchronousPluginService", "pluginName=" + pluginName + ", pluginServiceName=" + pluginServiceName);
		var repositoryId;

		if (!lang.isObject(pluginParams))
			pluginParams = {};
		if (!pluginParams.requestBody)
			pluginParams.requestBody = {};

		// Setup request body
		if (lang.isObject(pluginParams.requestBody)) {
			pluginParams.requestBody = JSON.stringify(pluginParams.requestBody);
		}

		// Build url parameters
		var params = {};
		if (lang.isObject(pluginParams.requestParams)) {
			repositoryId = pluginParams.requestParams.repositoryId;
			for ( var i in pluginParams.requestParams) {
				params[i] = pluginParams.requestParams[i];
			}
		}
		params["plugin"] = pluginName;
		params["action"] = pluginServiceName;
		if (ecm.model.desktop && pluginParams.requestParams && !pluginParams.requestParams["desktop"]) {
			params["desktop"] = ecm.model.desktop.id;
		}

		pluginParams.requestUrl = Request.getServiceRequestUrl("plugin", "", params);
		pluginParams.progressMessage = Messages["progress_message_" + pluginName + "_" + pluginServiceName] || Messages["progress_message_" + pluginServiceName] || Messages.progress_message_general;
		pluginParams.cancelMessage = Messages["cancel_message_" + pluginName + "_" + pluginServiceName] || Messages["cancel_message_" + pluginServiceName] || Messages.cancel_message_general;
		pluginParams.synchronous = true;
		pluginParams.requestMethod = "POST";

		if (!lang.isObject(pluginParams.requestHeaders)) {
			pluginParams.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (Request.enableSecureService) {
			pluginParams.requestHeaders["security_token"] = Request._security_token;
		}
		if (contentType) {
			pluginParams.requestHeaders["Content-Type"] = contentType;
		}
		if (!has("webkit")) {// WebKit does not allow setting content length on a request
			pluginParams.requestHeaders["Content-Length"] = pluginParams.requestBody.length;
		}

		var response;
		var onFinished = function(r) {
			response = r;
		};
		pluginParams.requestCompleteCallback = onFinished;
		var request = new Request(pluginParams);

		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}
		request.send();

		ecm.logger.logExit("ecm.model.Request.postSynchronousPluginService");
		return response;
	};

	/**
	 * This static function creates and sends form data to a plug-in service via HTTP POST.
	 * <p>
	 * You can use this method to POST a request as an HTML form (for situations where the query string would be too
	 * large for a GET request). To do so, use "application/x-www.form-urlencoded" as the contentType.
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param pluginServiceName
	 *            The identifier of the service as defined by the plug-in.
	 * @param form
	 *            The form to post. Form is an instance of FormData.
	 * @param pluginParams
	 *            An object containing additional parameters and request callbacks. Parameters include:
	 *            <ul>
	 *            <li>requestHeaders - Parameters intended for the Request Header. When requestHeaders is provided, the
	 *            caller is responsible for optionally setting the "Cache-Control" request header, as a default option
	 *            will not be set. When requestHeaders is not provided, "Cache-Control" "no-cache" is used.</li>
	 *            <li>requestParams - An object with name/value pairs to add to the request URL.</li>
	 *            <li>cancellable - Flag indicating if the request can be canceled.</li>
	 *            <li>notifyOnCancel - Flag indicating that if a cancellable request is canceled, a notification will
	 *            be sent to the service, so that it can clean up and exit immediately</li>
	 *            <li>backgroundRequest - Flag indicating if the request should be run in the background.</li>
	 *            <li>requestCompleteCallback - Callback method called when a response from the server is received.</li>
	 *            <li>requestFailedCallback - Callback method called when a request returns from the server with
	 *            errors.</li>
	 *            </ul>
	 * @memberof ecm.model.Request
	 */
	Request.postFormToPluginService = function(pluginName, pluginServiceName, form, pluginParams) {
		ecm.logger.logEntry("ecm.model.Request.postFormToService", "pluginName=" + pluginName + ", pluginServiceName=" + pluginServiceName);
		var repositoryId;
		// If form params are passed in instead of a FormData object, create the FormData object here.
		// The passed in form params will be saved on the request so that if a session timeout retry is attempted,
		// the form can be recreated with the new security token.
		var origFormParams;
		if (!(form instanceof FormData) && (form instanceof Object)) {
			origFormParams = form;
			form = new FormData();
			for ( var propname in origFormParams) {
				if (origFormParams.hasOwnProperty(propname)) {
					form.append(propname, origFormParams[propname]);
				}
			}
		}

		form.append("plugin", pluginName);
		form.append("action", pluginServiceName);

		var origParams;
		if (lang.isObject(pluginParams.requestParams)) {
			repositoryId = pluginParams.requestParams.repositoryId;
			origParams = pluginParams.requestParams;
			if (Request.enableSecureService) {
				// do not send parameters in URL
				for ( var name in pluginParams.requestParams) {
					var value = pluginParams.requestParams[name];
					if (value && value.length > 0 && value != "undefined") { // ignore null and undefined
						form.append(name, value);
					}
				}
				pluginParams.requestParams = undefined;
			}
		}

		pluginParams.requestUrl = Request.getServiceRequestUrl("plugin", "", pluginParams.requestParams);
		pluginParams.progressMessage = Messages["progress_message_" + pluginName + "_" + pluginServiceName] || Messages["progress_message_" + pluginServiceName] || Messages.progress_message_general;
		pluginParams.cancelMessage = Messages["cancel_message_" + pluginName + "_" + pluginServiceName] || Messages["cancel_message_" + pluginServiceName] || Messages.cancel_message_general;
		pluginParams.requestMethod = "POST";
		pluginParams.requestBody = form;

		if (!lang.isObject(pluginParams.requestHeaders)) {
			pluginParams.requestHeaders = {
				"Cache-Control": "no-cache"
			};
		}
		if (Request.enableSecureService) {
			pluginParams.requestHeaders["security_token"] = Request._security_token;
		}

		var request = new Request(pluginParams);
		if (repositoryId && ecm.model.desktop) {
			request.repository = ecm.model.desktop.getRepository(repositoryId);
		}

		if (origFormParams) {
			request._origFormParams = origFormParams;
			if (origParams) {
				request._origParams = origParams;
			}
		}
		request.send();

		ecm.logger.logExit("ecm.model.Request.postFormToService");
		return request;
	};

	/**
	 * This static function returns a URL that will retrieve a resource from a plug-in's JAR file.
	 * 
	 * @param pluginName
	 *            The identifier of the plug-in.
	 * @param resourceName
	 *            The name of the resource (include any path information beyond the WebContent directory).
	 * @memberof ecm.model.Request
	 */
	Request.getPluginResourceUrl = function(pluginName, resourceName) {
		ecm.logger.logEntry("ecm.model.Request.getPluginResourceUrl", "pluginName=" + pluginName + " resourceName=" + resourceName);
		if (ecm.model.desktop) {
			var servicesUrl = ecm.model.desktop.servicesUrl;
		} else {
			var servicesUrl = "/navigator";
		}
		var requestUrl = servicesUrl + "/plugin/" + pluginName + "/getResource/" + resourceName;
		ecm.logger.logExit("ecm.model.Request.getPluginResourceUrl", "Request URL=" + requestUrl);
		return requestUrl;
	};

	/**
	 * This static function set whether the client is the native like iOS or Android or Web based.
	 * 
	 * @param isNativeClient
	 *            The isNativeClient is native client flag.
	 * @memberof ecm.model.Request
	 */
	Request.setNativeClient = function(isNativeClient) {
		Request._is_native_client = isNativeClient;
	};

	/**
	 * This static function returns whether the client is the native like iOS or Android or Web based.
	 * 
	 * @return flag whether the client is native or not.
	 * @memberof ecm.model.Request
	 */
	Request.isNativeClient = function() {
		return Request._is_native_client && Request._is_native_client == true;
	};

	Request._seqId = {
		ms: 0,
		seq: 0,

		next: function() {
			var d = new Date();
			var nextMs = d.getTime() % 100000000;

			if (Request._seqId.ms == nextMs) {
				++Request._seqId.seq;
			} else {
				Request._seqId.seq = 0;
			}

			Request._seqId.ms = nextMs;
			return Request._seqId.ms + "-" + Request._seqId.seq;
		}
	};

	return Request;
});

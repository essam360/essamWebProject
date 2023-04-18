/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-style",
	"dojo/string",
	"dojo/aspect",
	"idx/form/Link",
	"ecm/LoggerMixin",
	"ecm/model/Request",
	"ecm/model/Message",
	"ecm/model/Desktop"
], function(declare, lang, domStyle, string, aspect, Link, LoggerMixin, Request, Message, Desktop) {

	/**
	 * @name ecm.widget.dialog._OAuthLoginMixin
	 */

	var _OAuthLoginMixin = declare("ecm.widget.dialog._OAuthLoginMixin", [
		LoggerMixin
	], {
		/** @lends ecm.widget._OAuthLoginMixin.prototype */

		_oauthWindow: null,
		_oauthWindowListener: null,
		_lastClientId: null,
		_lastRepositoryId: null,
		_inInitialize: false,
		_cleanupHandle: null,

		_cleanupOAuthWindow: function() {
			if (this._oauthWindow != null) {
				this._oauthWindow.close();
				this._oauthWindow = null;
			}

			if (this._oauthWindowListener != null) {
				if (window.addEventListener) {
					removeEventListener("message", this._oauthWindowListener, false);
				} else {
					detachEvent("onmessage", this._oauthWindowListener);
				}

				this._oauthWindowListener = null;
			}
		},

		_setOAuthMode: function(oauthMode) {
			if (oauthMode) {
				this.setTitle(ecm.messages.login_oauth_title);
				if (this.repository && this.repository.name) {
					this.setIntroText(string.substitute(ecm.messages.login_oauth_grant_intro, [
						!this.textDir ? this.repository.name : this.enforceTextDirWithUcc(null, this.repository.name)
					]));
				}
				this.lastUserName.set("disabled", true);
				domStyle.set(this.userPwDiv, "display", "none");
				domStyle.set(this.oauthLastUserDiv, "display", "none");
				domStyle.set(this.oauthDiv, "display", "");
				domStyle.set(this._oauthClearButton.domNode, "display", "none");
				this._oauthFocusLink.set("disabled", true);
				this.loginButton.set("disabled", true);
			} else {
				this._oAuthLogin = false;
				this.setTitle(ecm.messages.login);
				domStyle.set(this.userPwDiv, "display", "");
				domStyle.set(this.oauthDiv, "display", "none");
			}
		},

		_checkSSL: function() {
			var sslOk = true;
			var host = window.location.host.split(":")[0];

			if (window.location.protocol.indexOf("https") != 0 && host != "localhost" && host != "127.0.0.1") {
				sslOk = false;
				domStyle.set(this.oauthSSLMessage, "display", "");
				domStyle.set(this.oauthPopupMessage, "display", "none");
				domStyle.set(this._oauthFocusLink.domNode, "display", "none");
				this._oauthFocusLink.set("disabled", true);
				this.loginButton.set("disabled", true);
			} else {
				domStyle.set(this.oauthSSLMessage, "display", "none");
				domStyle.set(this.oauthPopupMessage, "display", "none");
				domStyle.set(this._oauthFocusLink.domNode, "display", "");
				this._oauthFocusLink.set("disabled", false);
				this.loginButton.set("disabled", true);
			}

			return sslOk;
		},

		_initializeOAuthWindow: function(clientId, repositoryId, params) {
			var methodName = "_initializeOAuthWindow";
			this.logEntry(methodName);

			// Multiple show signals can come in rapid-fire, and cause the popup window to double-up.
			// So bypass calls that come in before the previous call has fully completed.
			if (!this._inInitialize) {
				this._inInitialize = true;

				var requestUrl = this._getOAuthRequestUrl(clientId, repositoryId, params);

				this._lastClientId = clientId;
				this._lastRepositoryId = repositoryId;
				this._cleanupOAuthWindow();

				var left = 100;
				var top = 100;

				// position...
				if (typeof window.screenX == 'number') {
					left = window.screenX + 50;
					top = window.screenY + 100;
				} else if (typeof window.screenLeft == 'number') {
					// IE gives the pixels from screen's left/top edge to the inner left/top border
					// of the content area.  So make adjustments for window dressing.
					left = window.screenLeft + 46;
					top = window.screenTop + 77;
				}

				this.logDebug(methodName, "Calling window.open to " + requestUrl);
				this._oauthWindow = window.open(requestUrl, "oauthWindow", "status=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=800,height=600", true);
				this.logDebug(methodName, "Opened window object: " + this._oauthWindow);
				if (this._oauthWindow == null) {
					domStyle.set(this.oauthPopupMessage, "display", "");
				} else {
					domStyle.set(this.oauthPopupMessage, "display", "none");
					this._oauthWindowListener = lang.hitch(this, function(event) {
						var methodName = "_oauthWindowListener";
						this.logEntry(methodName);

						var data = JSON.parse(event.data);

						switch (data.eventId) {
						case "_onOAuthClientNotFound":
							var message = Message.createErrorMessage("oauth_client_not_found_error", [
								this._lastClientId
							]);
							this._showOAuthErrorMessage(message);
							break;
						case "_onOAuthFailure":
							var message = Message.createErrorMessage("oauth_login_failed_error", [
								this._lastRepositoryId
							]);
							this._showOAuthErrorMessage(message);
							break;
						case "_onOAuthSuccess":
							this._oauthFocusLink.set("disabled", true);
							this._login();
							break;
						case "_onOAuthError":
							var returnedError = data.response.error;
							var returnedErrorDescription = data.response.error_description;
							var errorMessage = ecm.messages.oauth_error_unknown;
							var target_application = "OAuth2";

							if (this.repository && this.repository.type) {
								if (returnedError && ecm.messages[this.repository.type + "_oauth_error_" + returnedError]) {
									errorMessage = ecm.messages[this.repository.type + "_oauth_error_" + returnedError];
								} else {
									errorMessage = ecm.messages[this.repository.type + "_oauth_error_unknown"];
								}

								switch (this.repository.type) {
								case "box":
									target_application = "Box";
									break;
								default:
									target_application = "OAuth2";
									break;
								}
							}

							var message = Message.createErrorMessage("oauth_error_return_error", [
								target_application,
								errorMessage,
								returnedError,
								returnedErrorDescription
							]);
							this._showOAuthErrorMessage(message);
							break;
						default:
							break;
						}

						this._cleanupOAuthWindow();
						this.logExit(methodName);
					});

					if (window.addEventListener) {
						addEventListener("message", this._oauthWindowListener, false);
					} else {
						attachEvent("onmessage", this._oauthWindowListener);
					}
				}

				if (this._cleanupHandle == null) {
					this._cleanupHandle = aspect.after(this, "onCancel", lang.hitch(this, function() {
						this._cleanupOAuthWindow();
					}), true);

					this.own(this._cleanupHandle);
				}

				this._inInitialize = false;
			}

			this.logExit(methodName);
		},

		_showOAuthErrorMessage: function(message) {
			if (this._showErrorMessage) {
				this._showErrorMessage(message);
			} else {
				Desktop.addMessage(message);
			}
		},

		_getOAuthRequestUrl: function(clientId, repositoryId, params) {
			var clientProtocol = window.location.protocol;
			var clientHost = window.location.hostname;
			if (window.location.port != null && window.location.port != "") {
				clientHost = clientHost + ":" + window.location.port;
			}

			var serviceParams = {
				repositoryId: repositoryId,
				clientHost: clientHost,
				clientProtocol: clientProtocol,
			};

			if (params) {
				for ( var prop in params) {
					serviceParams[prop] = params[prop];
				}
			}

			return Request.getServiceRequestUrl("oauth2/" + clientId, null, serviceParams);
		},

		_onOAuthCallback: function(message) {
			this.logDebug("_onOAuthCallback", "Message: " + message + " received.");
		},

		_getOAuthToken: function(timeout, params, repositoryId, recycle) {
			var clientId = params.oAuthClientId;

			this._lastClientId = clientId;
			this._lastRepositoryId = repositoryId;

			if (recycle === false) {
				this._getTokenViaChallenge(params);
			} else {
				var oAuthParams = {};

				for ( var property in params) {
					if (property != "oAuthClientId") {
						oAuthParams[property] = params[property];
					}
				}

				oAuthParams.action = "getToken";
				oAuthParams.alt_output = "json";
				oAuthParams.refresh = "true";
				oAuthParams.repositoryId = repositoryId;

				Request.invokeServiceAPI("oauth2/" + clientId, null, {
					requestParams: oAuthParams,
					requestCompleteCallback: lang.hitch(this, function(response) {
						if (response.tokenInitialized) {
							// OAuthToken is initialized and valid in the session - handshake has been completed,
							// so it is available to authenticate with.  Go ahead and use it.
							domStyle.set(this._oauthFocusLink.domNode, "display", "none");
							domStyle.set(this.oauthLastUserDiv, "display", "none");
							this.loginButton.set("disabled", true);
							this._login();
						} else {
							this._getTokenViaChallenge(params);
						}
					})
				});
			}
		},

		_getTokenViaChallenge: function(params) {
			if (this._checkSSL()) {
				this._showAuthentication(params);
			}
		},

		_onOAuthFocus: function() {
			var methodName = "_onOAuthFocus";
			this.logEntry(methodName);

			if (this._lastClientId != null && this._lastRepositoryId != null) {
				var params = {
					oAuthClientId: this._lastClientId
				};
				this._getOAuthToken(false, params, this._lastRepositoryId);
			} else if (this._oauthWindow != null) {
				this.logDebug("Existing window found, setting focus");
				this._oauthWindow.focus();
			}

			this.logExit(methodName);
		},

		_onOAuthClear: function() {
			Request.invokeServiceAPI("oauth2/" + this._lastClientId, null, {
				requestParams: {
					action: "clearToken",
					alt_output: "json",
					repositoryId: this._lastRepositoryId
				},
				requestCompleteCallback: lang.hitch(this, function(response) {
					domStyle.set(this._oauthClearButton.domNode, "display", "none");
					domStyle.set(this._oauthFocusLink.domNode, "display", "");
					this._oauthFocusLink.set("disabled", false);
					if (this._checkSSL()) {
						this._showAuthentication();
					}
				})
			});
		},

		_showAuthentication: function(params) {
			if (this._lastClientId != null && this._lastRepositoryId != null) {
				this._oauthFocusLink.set("disabled", false);
				domStyle.set(this._oauthFocusLink.domNode, "display", "");
				this._initializeOAuthWindow(this._lastClientId, this._lastRepositoryId, params);
			}
		}
	});

	return _OAuthLoginMixin;
});

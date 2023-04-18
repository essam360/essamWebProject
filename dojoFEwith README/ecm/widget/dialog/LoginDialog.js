/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/connect",
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/dom-class",
	"dojo/dom-style", //
	"dojo/dom-construct",
	"dojo/on",
	"dojo/string",
	"dojo/io-query",
	"dijit/form/ValidationTextBox",
	"../../MessagesMixin",
	"../../model/Item",
	"../../model/Message",
	"../../model/Repository",
	"../../model/Request",
	"./BaseDialog",
	"./_OAuthLoginMixin",
	"./ChangePasswordDialog",
	"./ErrorDialog",
	"dojo/text!./templates/LoginDialogContent.html"
],

function(declare, lang, array, connect, has, aspect, domClass, domStyle, domConstruct, on, string, ioQuery, ValidationTextBox, MessagesMixin, Item, Message, Repository, Request, BaseDialog, _OAuthLoginMixin, ChangePasswordDialog, ErrorDialog, template) {

	/**
	 * @name ecm.widget.dialog.LoginDialog
	 * @class Provides a dialog box that is used to log in to a content server.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	var LoginDialog = declare("ecm.widget.dialog.LoginDialog", [
		BaseDialog,
		_OAuthLoginMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.LoginDialog.prototype */

		contentString: template,

		/**
		 * The repository to be connected. An instance of <code>ecm.model.Repository</code>.
		 */
		repository: null,

		_originalRequests: null,
		_desktopId: null,

		_callback: null,
		_cancelCallback: null,

		_oAuthLogin: false,

		constructor: function() {
			this.missingUsernameMessage = ecm.messages.missing_username_message;
			this.missingPasswordMessage = ecm.messages.missing_password_message;
			this.badLoginMessage = " " + ecm.messages.login_error_more_information_message;
		},

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);
			this.inherited(arguments);
			this.textDir = has("text-direction");
			this.username.set("textDir", this.textDir);
			domClass.add(this.domNode, "ecmLoginDialog minor");
			this.setTitle(ecm.messages.login);
			this.setResizable(true);
			this.loginButton = this.addButton(this.messages.login, "_login", true, true);

			this.connect(this.password.domNode, "onpaste", this._onPaste);
			this.connect(this.username.domNode, "onpaste", this._onPaste);

			this.logExit(methodName);
		},

		_enableOAuth: function(enable, callback) {
			this._oAuthLogin = enable && this.repository.oAuthEnabled;
			this._setOAuthMode(this._oAuthLogin);
			if (lang.isFunction(callback)) {
				callback(this.repository);
			}
		},

		_showPrep: function(timeout, request, callback, onCancel) {
			var methodName = "_showPrep";
			var enableOAuth = false;
			this.logEntry(methodName);

			if (!this.repository && ecm.model.desktop.getInitialRepository()) {
				this.repository = ecm.model.desktop.getInitialRepository();
			}

			// In some cases (for example, opening the Add Document dialog) there may be multiple requests
			// associated with one user action. Keep the multiple requests in an array.
			if (request) {
				if (this._originalRequests == null) {
					this._originalRequests = new Array();
				}
				this._originalRequests.push(request);
			}

			this._callback = (callback) ? callback : null;
			this._cancelCallback = (onCancel) ? onCancel : null;

			if (!this.open) {
				this.password.set("value", "");
				this.cleanMessage();
			}

			if (timeout) {
				if (this._expiredError && this._expiredError.number == 1003) {
					// The session expired,
					if (ecm.model.desktop.userId) {
						this.username.set("value", ecm.model.desktop.userLoginName || ecm.model.desktop.userId);
						this.username.set("disabled", true);
					}
					this.setIntroText(ecm.messages.login_session_expired_message);

					var sessionRepository = ecm.model.desktop.getInitialRepository();
					enableOAuth = sessionRepository && sessionRepository.oAuthEnabled;
				} else if (this._expiredError && this._expiredError.number == 1007) {
					// The repository connection expired,
					if (this.repository && this.repository.userId) {
						this.username.set("value", this.repository.userLoginName || this.repository.userId);
						this.username.set("disabled", true);
					}
					this.setIntroText(string.substitute(ecm.messages.login_repository_connection_expired_message, [
						!this.textDir ? this.repository.name : this.enforceTextDirWithUcc(null, this.repository.name)
					]));
					enableOAuth = true;
				} else {
					// If this is a site login...
					if (this._originalRequests && this._originalRequests[0].authenticationRequired) {
						this.setIntroText(ecm.messages.login_site_connection_expired_message);
						if (ecm.model.desktop.container && ecm.model.desktop.container.userId) {
							this.username.set("value", ecm.model.desktop.container.userLoginName || ecm.model.desktop.container.userId);
							this.username.set("disabled", true);
						}
					} else if (this.repository && this.repository.name) {
						// ...else logging into a repository for the first time.
						this.username.set("disabled", false);
						this.setIntroText(string.substitute(ecm.messages.login_new_server_message, [
							!this.textDir ? this.repository.name : this.enforceTextDirWithUcc(null, this.repository.name)
						]));
						enableOAuth = true;
					}
				}
			} else {
				this.username.set("disabled", false);
				if (this.repository && this.repository.name) {
					this.setIntroText(string.substitute(ecm.messages.login_new_server_message, [
						!this.textDir ? this.repository.name : this.enforceTextDirWithUcc(null, this.repository.name)
					]));
				}
				enableOAuth = true;
			}

			this._enableOAuth(enableOAuth, lang.hitch(this, function() {
				this.show(timeout, request, callback, onCancel, true)
			}));

			this.logExit(methodName);
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param timeout
		 *            If true, the dialog is displayed for timeout purposes. Only password can be entered. User name
		 *            field will be read-only.
		 * @param request
		 *            The original request to retry after login completes. This is only needed for cases where login is
		 *            for session expiration.
		 * @param onCancel
		 *            A callback function that is called if the login action is cancelled
		 */
		show: function(timeout, request, callback, onCancel, prepped) {
			var methodName = "show";
			var returnValue = null;
			this.logEntry(methodName);

			if (!prepped) {
				this._showPrep(timeout, request, callback, onCancel)
			} else {
				if (this._oAuthLogin) {
					var params = {
						oAuthClientId: this.repository.oAuthClientId
					};
					this._getOAuthToken(timeout, params, this.repository.id);
				}

				returnValue = this.inherited(arguments);
			}

			this.logExit(methodName);
			return returnValue;
		},

		/**
		 * Hides the dialog. This is normally automatically invoked when login is successful.
		 */
		hide: function() {
			var methodName = "hide";
			this.logEntry(methodName);

			this.repository = null;
			this._hideDeferred = this.inherited(arguments);
			this.logExit(methodName);
		},

		onCancel: function() {
			var methodName = "onCancel";
			this.logEntry(methodName);
			this.inherited(arguments);

			// Invoke any error callback defined in the original requests and then discard them
			array.forEach(this._originalRequests, function(request) {
				if (request) {
					var response = request.getResponse();
					if (response && lang.isFunction(request.requestFailedCallback))
						request.requestFailedCallback(response);
				}
			});
			delete this._originalRequests;
			delete this._expiredError;

			connect.publish("ecm.widget.dialog.LoginDialog.onCancel", [
				{
					repositoryId: this.repository ? this.repository.id : null
				}
			]);

			if (lang.isFunction(this._cancelCallback)) {
				this.logDebug(methodName, "Calling this._cancelCallback()");
				this._cancelCallback();
			}

			this.logExit(methodName);
		},

		_onPaste: function() {
			// Allow the paste to finish before firing the change notification.
			setTimeout(lang.hitch(this,  function(evt) {
				this._enableLogin();
			}), 0);
		},
		
		_enableLogin: function() {
			// summary:
			//      Determines if the login button should be enabled.
			// tags:
			//      private

			if (this.username.isValid() && this.password.isValid())
				this.loginButton.set("disabled", false);
			else
				this.loginButton.set("disabled", true);
		},

		_connectAddMessage: function(ignoreMessages) {
			this._addMessageConnect = aspect.around(Request.prototype, "addMessage", lang.hitch(this, function(originalAddMessage) {
				return lang.hitch(this, function(message) {
					try {
						if (!ignoreMessages) {
							if (this.open && message.level > 0) {
								this._showErrorMessage(message);
							} else {
								originalAddMessage(message);
							}
						}
					} finally {
						this._disconnectAddMessage();
					}
				});
			}));
		},

		_disconnectAddMessage: function() {
			if (this._addMessageConnect) {
				this._addMessageConnect.remove();
				delete this._addMessageConnect;
			}
		},

		_login: function() {
			// summary:
			//      Performs the login.
			// tags:
			//      private
			var methodName = "_login";
			this.logEntry(methodName);

			this.cleanMessage();
			if (this._oAuthLogin || (this.username.isValid() && this.password.isValid())) {
				if (!this._oAuthLogin) {
					this.logDebug(methodName, "Username and password are specified");
				}

				if (!this.repository && ecm.model.desktop.getInitialRepository()) {
					this.logDebug(methodName, "Assigning initial repository to this.repository");
					this.repository = ecm.model.desktop.getInitialRepository();
				}

				var user = this.username.get('value');
				var password = this.password.get('value');
				var request;

				var logonSucceededCallback = lang.hitch(this, function() {
					this.logDebug(methodName, "Container logon succeeded");
					this._disconnectAddMessage();
					this.onConnected();
					this.hide();
					if (this._originalRequests) {
						this.logDebug(methodName, "Retrying requests");
						this._retryRequests();
					} else {
						if (lang.isFunction(this._callback)) {
							this.logDebug(methodName, "Calling this._callback()");
							this._callback(this.repository);
						}
					}
				});

				var logonFailedCallback = lang.hitch(this, function(response, errors) {
					this._disconnectAddMessage();
					this.onLoginFailed(response, errors);
				});

				var executeLogin = lang.hitch(this, function() {
					if (this._expiredError) {
						if (this._expiredError.number == 1003) {
							// The session expired.
							this.logDebug(methodName, "Calling desktop logon");
							// Enable secure service for this login request.
							var enableSecureService = Request.enableSecureService;
							try {
								Request.enableSecureService = true;
								var reqParams = {
									desktop: ecm.model.desktop.id,
								};

								if (!this._oAuthLogin) {
									reqParams.userid = ecm.model.desktop.userLoginName || ecm.model.desktop.userId || user;
									reqParams.password = password;
								}

								if (ecm.model.desktop._ssoTokenPresent) {
									reqParams.ssoTokenPresent = true;
								}
								request = Request.invokeService("logon", null, reqParams, logonSucceededCallback, false, false, logonFailedCallback, false);
							} finally {
								Request.enableSecureService = enableSecureService;
							}
						} else if (this._expiredError.number == 1007) {
							// The repository connection expired.
							if (this.repository && this.repository.isInstanceOf && this.repository.isInstanceOf(Repository)) {
								if (!this.repository.connected) {
									this.logDebug(methodName, "Setting the user id in this.repository");
									this.repository.userId = user;
									this.repository.onChange(this.repository);
								}
								this.logDebug(methodName, "Calling this.repository.logon");
								request = this.repository.logon(password, logonSucceededCallback, this._desktopId, false, logonFailedCallback);
							}
						}
					} else {
						if (this.repository && this.repository.isInstanceOf && this.repository.isInstanceOf(Repository)) {
							if (!this.repository.connected) {
								this.logDebug(methodName, "Setting the user id in this.repository");
								this.repository.userId = user;
								this.repository.onChange(this.repository);
							}
							this.logDebug(methodName, "Calling this.repository.logon");
							request = this.repository.logon(password, logonSucceededCallback, this._desktopId, false, logonFailedCallback);
						} else if (ecm.model.desktop.getAuthenticatingRepositoryId() == "CONTAINER") {
							this.logDebug(methodName, "Calling desktop logon");
							// Enable secure service for this login request.
							var enableSecureService = Request.enableSecureService;
							try {
								Request.enableSecureService = true;
								request = Request.invokeService("logon", null, {
									desktop: ecm.model.desktop.id,
									userid: ecm.model.desktop.userLoginName || ecm.model.desktop.userId || user,
									password: this.password.get('value')
								}, logonSucceededCallback, false, false, logonFailedCallback, false);
							} finally {
								Request.enableSecureService = enableSecureService;
							}
						}
					}
				});

				// First check if application server authentication is required.
				var authenticationRequired = this._originalRequests && this._originalRequests[0].authenticationRequired;
				if (authenticationRequired && authenticationRequired.formBased) {
					var removeAuthRequiredFromRequests = lang.hitch(this, function() {
						array.forEach(this._originalRequests, function(origRequest) {
							if (origRequest.authenticationRequired) {
								delete origRequest.authenticationRequired;
							}
						});
					});

					var sessionExpiredConnect = aspect.around(this, "sessionExpiredHandler", lang.hitch(this, function(originalSessionExpired, error) {
						return lang.hitch(this, function(request, error) {
							this._expiredError = error;
							sessionExpiredDisconnect();
							removeAuthRequiredFromRequests();
							executeLogin();
						});
					}));

					var sessionExpiredDisconnect = function() {
						if (sessionExpiredConnect) {
							sessionExpiredConnect.remove();
							delete sessionExpiredConnect;
						}
					};

					// Fill out the login form parameters.
					var formParams = {};
					if (authenticationRequired.formBased.hiddenFields) {
						for ( var hiddenInput in authenticationRequired.formBased.hiddenFields) {
							if (authenticationRequired.formBased.hiddenFields.hasOwnProperty(hiddenInput)) {
								formParams[hiddenInput] = authenticationRequired.formBased.hiddenFields[hiddenInput];
							}
						}
					}
					formParams[authenticationRequired.formBased.inputUser] = user;
					formParams[authenticationRequired.formBased.inputPassword] = password;

					// Override request message handling so that error messages are routed to this dialog.
					// Disable automatically displaying error messages (ignoreMessages = true).
					this._connectAddMessage(true);

					var requestHeaders = {
						"Content-Type": "application/x-www-form-urlencoded",
						"Cache-Control": "no-cache"
					};
					if (authenticationRequired.formBased.requestHeaders) {
						for ( var requestHeader in authenticationRequired.formBased.requestHeaders) {
							if (authenticationRequired.formBased.requestHeaders.hasOwnProperty(requestHeader)) {
								requestHeaders[requestHeader] = authenticationRequired.formBased.requestHeaders[requestHeader];
							}
						}
					}

					var request = new Request({
						requestMethod: authenticationRequired.formBased.method,
						requestUrl: authenticationRequired.formBased.formAction,
						requestHeaders: requestHeaders,
						requestBody: ioQuery.objectToQuery(formParams),
						requestCompleteCallback: lang.hitch(this, function() {
							sessionExpiredDisconnect();
							removeAuthRequiredFromRequests();
							logonSucceededCallback();
						}),
						backgroundRequest: false,
						requestFailedCallback: lang.hitch(this, function(responseText) {
							this._disconnectAddMessage();
							sessionExpiredDisconnect();
							if (request.responseIsHtml()) {
								// We have no way of differentiating between the login error page and any other HTML response.
								// Assume that an HTML response indicates the login error page was returned.
								// Also assume that the login failure is due to bad userId or password.
								// If these assumptions are incorrect, the user can view the HTML response
								// by clicking on the More Details window.

								// Prepare the response for display in a message.
								responseText = request.getResponseText();
								responseText = responseText ? responseText.replace(/</gi, "&lt;").replace(/>/gi, "&gt;") : "";
								var errorMessage = Message.createErrorMessage("error_bad_userid_password", [
									responseText
								]);
								// If there was no responseText clear the adminResponse.
								if (!responseText) {
									errorMessage.adminResponse = "";
								}
								this._showErrorMessage(errorMessage);
								// Leave the login dialog open.
							} else {
								// The response was not HTML, and it's not JSON or this failed callback would not have been called.
								// Assume that the request response was the completion of the last request for an icon or other file.
								// This indicates a successful login.
								removeAuthRequiredFromRequests();
								// The Navigator session expired error is only returned when executing actions.
								// Execute the login here to pre-address an expired Navigator session.
								executeLogin();
							}
						})
					});
					request.send();
				} else {
					// Override request message handling so that error messages are routed to this dialog.
					this._connectAddMessage();
					executeLogin();
				}
			} else {
				this._enableLogin();
			}

			this.logExit(methodName);
		},

		_retryRequests: function() {
			var methodName = "_retryRequests";

			// Retry the original requests in the order they were received.
			if (this._originalRequests) {
				var request = this._originalRequests.shift();
				while (request) {
					this.logDebug(methodName, "Calling request.retry()");
					request.retry();
					request = this._originalRequests.shift();
				}
				delete this._originalRequests;
				delete this._expiredError;
			}
		},

		/**
		 * An event invoked when the login is successful.
		 */
		onConnected: function(repository) {
			this.logDebug("onConnected", "Connected.");
		},

		/**
		 * An event invoked when the login fails.
		 * 
		 * @since 2.0.3.3
		 */
		onLoginFailed: function(response, errors) {
			this.logDebug("onLoginFailed", "Login failed.");
		},

		cleanMessage: function() {
			this.clearMessage();
			if (this.messageText.lastChild) {
				this.messageText.removeChild(this.messageText.lastChild);
			}
		},

		_showErrorMessage: function(message) {
			if (message.number == 1004) {
				var changePasswordDialog = new ChangePasswordDialog();
				changePasswordDialog.show(this.repository, true, this.password.get("value"));
			} else {
				this.setMessage(message.text, "error");
				var href = domConstruct.create("a", {
					href: '#',
					align: "left"
				});
				var hrefText = document.createTextNode(this.badLoginMessage);
				href.appendChild(hrefText);
				href.onclick = function(evt) {
					_errorDialog = new ErrorDialog();
					_errorDialog.messageAddedHandler(message);
				};
				if (this.messageText.lastChild.nodeName.toUpperCase() === "A") {
					this.messageText.replaceChild(href, this.messageText.lastChild);
				} else {
					this.messageText.appendChild(href);
				}
				this.resize();
			}
		},

		/**
		 * This method can be connected to listen to {@link ecm.desktop.onSessionExpired} to display the login dialog
		 * for session expiration.
		 */
		sessionExpiredHandler: function(request, error) {
			// Don't show the login dialog for a desktop session timeout when the desktop is configured to use a site login page.
			if (error && error.number == 1003 && ecm.model.desktop && ecm.model.desktop.useSiteLoginPage)
				return;

			this.setRepository(request.repository);
			this._expiredError = error;
			// If this login dialog is being hidden, wait for that to complete before showing again.
			if (this._hideDeferred) {
				this._hideDeferred.then(lang.hitch(this, function() {
					this.show(true, request);
				}));
			} else {
				this.show(true, request);
			}
		},

		/**
		 * @param repository
		 *            The repository to connect to.
		 */
		setRepository: function(repository) {
			this.repository = repository;
		},

		/**
		 * Sets the desktop identifier to do the log in to. This is used to log into a different desktop.
		 * 
		 * @param desktopId
		 *            The id of the desktop to log in to.
		 */
		setDesktopId: function(desktopId) {
			this._desktopId = desktopId;
		},

		/**
		 * Logs in to the specified repository. This sets the repository field and invokes the show function.
		 * 
		 * @param repository
		 *            An instance of ecm.model.Repository for the repository to be connected.
		 * @param callback
		 *            A function invoked when the login is successful.
		 * @param onCancel
		 *            A callback function that is called if the login action is cancelled
		 * @param foreground
		 *            Pass true to display the status window when connecting to an SSO repository.
		 */
		connectToRepository: function(repository, callback, onCancel, foreground) {
			var methodName = "connectToRepository";

			if (repository) {
				if (repository.connected) {
					if (lang.isFunction(callback)) {
						callback(repository);
					}
				} else { // ...not connected
					this.setRepository(repository);

					if (repository.usesEJB() || repository.useSSO || repository.isOAuthLinked() || repository.serverTokenEnabled) {
						// Attempt session reconnection first before prompting the user if the repository is
						// supports reconnection.
						if (!repository.isOAuthLinked()) {
							this.repository.userId = ecm.model.desktop.userId;
						}
						this.repository.logon(null, lang.hitch(this, function(response) {
							this.logDebug(methodName, "Logon succeeded!");
							this._disconnectAddMessage();

							if (repository.connected) {
								this.onConnected(repository);

								this.logDebug(methodName, "Checking for callback.");
								if (lang.isFunction(callback)) {
									this.logDebug(methodName, "Calling callback()");
									callback(repository);
								}
							} else {
								this.logDebug(methodName, "Repository reconnection failed, opening dialog to prompt the user for credentials.");
								this.show(false, null, callback, onCancel);
							}
						}), ecm.model.desktop.id, false, lang.hitch(this, function(response) {
							this._disconnectAddMessage();
							// If this user has no access to this repository...
							if (response.errors && response.errors.length > 0 && response.errors[0].number == "1656") {
								this.logDebug(methodName, "Automatic connection to SSO repository Id " + repository.id + " failed. The user has no access to this repository.");
								// Show the no access message.
								var error = response.errors[0];
								var message = new Message({
									number: error.number,
									level: 2,
									text: error.text,
									explanation: error.explanation,
									userResponse: error.userResponse,
									adminResponse: error.adminResponse,
									messageProductId: error.messageProductId
								});
								ecm.model.desktop.addMessage(message);
								if (onCancel) {
									onCancel();
								}
							} else {
								this.logDebug(methodName, "Automatic connection to SSO repository Id " + repository.id + " failed. Prompting the user enter credentials in the login dialog.");
								this.show(false, null, callback, onCancel);
							}
						}), !foreground);
					} else {
						this.show(null, null, callback, onCancel);
					}
				}
			} else { // No repository...
				if (lang.isFunction(onCancel)) {
					onCancel();
				}
			}
		}
	});

	/**
	 * Static method that returns a singleton global instance of the login dialog.
	 * 
	 * @returns Returns the global instance of the login dialog.
	 * @memberof ecm.widget.dialog.LoginDialog
	 */
	LoginDialog.getLoginDialog = function() {
		if (!LoginDialog._loginDialog) {
			LoginDialog._loginDialog = new LoginDialog();

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
				if (LoginDialog._loginDialog) {
					LoginDialog._loginDialog.destroyRecursive();
					delete LoginDialog._loginDialog;
				}
			};
			if (has("chrome") || has("safari")) {
				var onBeforeUnloadHandler = on(window, "beforeunload", onBeforeUnload);
			} else { // For IE and Firefox, we must directly override window.onbeforeunload
				var oldOnBeforeUnload = window.onbeforeunload;
				window.onbeforeunload = onBeforeUnload;
			}
		}
		return LoginDialog._loginDialog;
	};

	/**
	 * Static method that displays a login dialog if required to login to a specified repository.
	 * 
	 * @param repository
	 *            An instance of ecm.model.Repository for the repository to be connected.
	 * @param callback
	 *            A function invoked when the login is successful. If no login is required then this function is
	 *            immediately invoked.
	 * @param onCancel
	 *            A callback function that is called if the login action is cancelled
	 * @param foreground
	 *            Pass true to display the status window when connecting to an SSO repository.
	 * @memberof ecm.widget.dialog.LoginDialog
	 */
	LoginDialog.checkLogin = function(repository, callback, onCancel, foreground) {
		if (repository) {
			if (!repository.connected) {
				LoginDialog.getLoginDialog().connectToRepository(repository, callback, onCancel, foreground);
			} else {
				callback(repository);
			}
		} else { // No repository...
			if (lang.isFunction(onCancel)) {
				onCancel();
			}
		}
	};

	Item.LoginDialog = LoginDialog;
	return LoginDialog;
});

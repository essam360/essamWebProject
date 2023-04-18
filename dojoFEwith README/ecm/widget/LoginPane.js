/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/connect", //
	"dojo/_base/json", //
	"dojo/_base/lang", //
	"dojo/_base/sniff", //
	"dojo/aspect",
	"dojo/cookie", //
	"dojo/string", // 
	"dojo/dom-attr", //
	"dojo/dom-class", //
	"dojo/dom-construct", //
	"dojo/dom-style", //
	"dojo/keys", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/form/Button", //
	"dijit/form/Select", //
	"dijit/form/ValidationTextBox", //
	"dijit/layout/ContentPane", //
//	"dijit/layout/MobileQRBorder",//
	"idx/html", //
	"../Messages", //
	"../LoggerMixin", //
	"../model/Container", //
	"../model/Desktop", //
	"./dialog/ErrorDialog", //
	"./dialog/ChangePasswordDialog", //
	"dojo/text!./templates/LoginPane.html"
], //
function(declare, //
connect, //
dojojson, //
lang, //
has, //
aspect, //
cookie, //
string, //
domAttr, //
domClass, //
domConstruct, //
domStyle, //
keys, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
Select, //
ValidationTextBox, //
ContentPane, //
//MobileQRBorder,//
idxHtml, //
Messages, //
LoggerMixin, //
modelContainer, //
Desktop, //
ErrorDialog, //
ChangePasswordDialog, //
template) {

	/**
	 * @name ecm.widget.LoginPane
	 * @class Provides a widget that is used to log in to a content management server. This widget prompts the user for
	 *        credentials to authenticate to the server.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.LoginPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.LoginPane.prototype */

		templateString: template,
		widgetsInTemplate: true,
		urlAddressablePage: false,
		oAuthUrl: null,

		constructor: function() {
			this.logDebug("constructor");
			this.messages = ecm.messages;
			this.missingUsernameMessage = ecm.messages.missing_username_message;
			this.missingPasswordMessage = ecm.messages.missing_password_message;
			this.badLoginMessage = " " + ecm.messages.login_error_more_information_message;
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			this.loginButton.set("disabled", true);
			domStyle.set(this.mobileQRBorder, "visibility", "hidden");
			// Perform initialization that requires the deskop to finish loading
			if (ecm.model.desktop.desktopLoaded) {
				this._initializeForDesktop();
			} else {
				connect.connect(ecm.model.desktop, "onDesktopLoaded", this, "_initializeForDesktop");
			}

			this.connect(this.password.domNode, "onpaste", this._onPaste);
			this.connect(this.username.domNode, "onpaste", this._onPaste);
			
//			domClass.add(this.mobileQRBorder.domNode, "dijitHidden");
			if(ecm.model.desktop.mobileQREnabled){
				domStyle.set(this.mobileQRBorder, "visibility", "visible");
			}
			this.logExit("postCreate");
		},

		/**
		 * Places focus on the first field of the LoginPane. This could be either the server selector or the userid.
		 */
		focus: function() {
			this.logEntry("focus");

			if (this.oAuthUrl != null) {
				this._routeToOAuth();
			} else {
				if (this.username.get("value").length > 0) {
					this.password.focus();
				} else {
					this.username.focus();
				}
			}

			this.logExit("focus");
		},

		_onOAuthFocus: function() {
			this._routeToOAuth();
		},

		_routeToOAuth: function() {
			// The repository requires OAuth2 authentication.
			// So, store our starting point, and route to the oauth2 redirector.
			var returnCookie = "oauthReturnUrl=" + encodeURIComponent(window.location.href);
			document.cookie = returnCookie;
			window.location.assign(this.oAuthUrl);
		},

		_getLoginPaneCookieKey: function() {
			var key = "ecm.widget.LoginPane";

			if (this.urlAddressablePage) {
				var initialRepository = ecm.model.desktop.getInitialRepository();
				if (initialRepository && initialRepository.id) {
					key += ("." + initialRepository.id);
				}
			}

			return key;
		},

		/**
		 * Adds the list of servers to the server selector and other initialization after desktop loads
		 */
		_initializeForDesktop: function() {
			this.logEntry("_initializeForDesktop");
			try {
				if (has("ie") < 9) {
					this.server.sortByLabel = false; // work around old IE8 only bug, we don't display sorted list anyway
				}
				this.server.setStore(ecm.model.desktop.getRepositoriesStore());
			} catch (e) {
				// If IE8 throws an error, ignore it
			}
			if (ecm.model.desktop.repositories.length <= 1 || ecm.model.desktop.getInitialRepository() || ecm.model.desktop.getAuthenticatingRepositoryId()) {
				this.server.set("disabled", true);
				if (ecm.model.desktop.repositories.length == 0 || ecm.model.desktop.getAuthenticatingRepositoryId())
					this.serverField.style.display = "none";
			} else {
				this.server.set("disabled", false);
			}

			this.welcomeTitle.innerHTML = string.substitute(this.messages.login_pane_welcome, [
				idxHtml.escapeHTML(ecm.model.desktop.applicationName)
			]);

			/**
			 * Desktop specific style settings have been deprecated in 2.0.3. Use the custom theme capability instead to
			 * apply custom styling to desktops.
			 */
			if (!Desktop.theme && Desktop.loginLogoUrl) {
				this.loginForm.style.backgroundImage = "url(" + ecm.model.desktop.loginLogoUrl + ")";
			}
			/**
			 * End style updates
			 */

			if (ecm.model.desktop.loginInformationUrl) {
				this.loginInformation.set('href', ecm.model.desktop.loginInformationUrl);
				domClass.add(this.domNode, "withInformation");
			} else {
				domClass.remove(this.domNode, "withInformation");
			}

			if (!ecm.model.desktop.disableCookies && !ecm.model.desktop.disableAutocomplete && cookie.isSupported()) {
				var loginPaneCookieKey = this._getLoginPaneCookieKey();
				var loginPaneCookie = dojojson.fromJson(cookie(loginPaneCookieKey));
				if (loginPaneCookie) {
					this.server.set("value", loginPaneCookie.server);
					this.username.set("value", loginPaneCookie.userId);
				}
			}

			if (ecm.model.desktop.getAuthenticatingRepositoryId() && ecm.model.desktop.getAuthenticatingRepositoryId() != "CONTAINER") {
				this.server.set("value", ecm.model.desktop.getAuthenticatingRepositoryId());
			}

			var authRepository = ecm.model.desktop.getAuthenticatingRepository();
			if (authRepository && authRepository.oAuthEnabled) {
				this.oAuthUrl = "jaxrs/oauth2/" + authRepository.oAuthClientId + "?alt_output=login&desktop=" + ecm.model.desktop.id + "&repositoryId=" + authRepository.id;
				domStyle.set(this.userPwDiv, "display", "none");
				domStyle.set(this.oAuthDiv, "display", "");
			} else {
				this.oAuthUrl = null;
				domStyle.set(this.userPwDiv, "display", "");
				domStyle.set(this.oAuthDiv, "display", "none");
			}

			this.logExit("_initializeForDesktop");
		},

		/**
		 * Displays a category "error", "warning", "info" or "confirm" text message at the top of the dialog, under the
		 * dialog's introduction text.
		 * <p>
		 * NOTE: This method was copied from BaseDialog.js.
		 * 
		 * @param text
		 *            the text of the message
		 * @param category
		 *            the message category - "error", "warning", "info" or "confirm". If not provided "error" is assumed
		 */
		setMessage: function(message, category) {
			var textMessage = message.text;
			this.logEntry("setMessage");
			// If no message...
			if (!textMessage || (textMessage.length == 0)) {
				this.clearMessage();
			} else {
				var msgClassNames;
				if (category == "warning") {
					msgClassNames = "inlineMessage inlineMessageWarning";
				} else if (category == "info") {
					msgClassNames = "inlineMessage inlineMessageInfo";
				} else if (category == "confirm") {
					msgClassNames = "inlineMessage inlineMessageConfirm";
				} else { // Default category is "error"
					msgClassNames = "inlineMessage inlineMessageError";
				}
				domAttr.set(this.inlineMessage, "class", msgClassNames);
				if (this.messageText.firstChild) {
					// Update the existing message text.
					this.messageText.firstChild.nodeValue = textMessage;
				} else {
					// Create the message text.
					var textNode = document.createTextNode(textMessage);
					this.messageText.appendChild(textNode);
					if (message.level > 0) {
						var href = domConstruct.create("a", {
							href: '#',
							align: "left"
						});
						var hrefText = document.createTextNode(this.badLoginMessage);
						href.appendChild(hrefText);
						href.onkeypress = function(evt) {
							if (evt.keyCode != keys.TAB) {
								_errorDialog = new ErrorDialog();
								_errorDialog.messageAddedHandler(message);
							}
						};
	
						href.onclick = function(evt) {
							_errorDialog = new ErrorDialog();
							_errorDialog.messageAddedHandler(message);
						};
						if (this.messageText.lastChild.nodeName.toUpperCase() === "A") {
							this.messageText.replaceChild(href, this.messageText.lastChild);
						} else {
							this.messageText.appendChild(href);
						}
					}
				}

				domStyle.set(this.inlineMessage, "display", "");
				// This is not needed (or implemented) for the login pane. 
				// this.resize();
			}
			this.logExit("setMessage");
		},

		/**
		 * Clears the text message at the top of the dialog, under the dialog's introduction text.
		 * <p>
		 * NOTE: This method was copied from BaseDialog.js.
		 */
		clearMessage: function() {
			this.logEntry("clearMessage");
			// Hide the message.
			domStyle.set(this.inlineMessage, "display", "none");
			// Restore to default of error.
			domAttr.set(this.inlineMessage, "class", "inlineMessage inlineMessageError");
			// Remove the text.
			if (this.messageText.firstChild) {
				this.messageText.removeChild(this.messageText.firstChild);
				// This is not needed (or implemented) for the login pane. 
				// this.resize();
			}
			if (this.messageText.lastChild) {
				this.messageText.removeChild(this.messageText.lastChild);
			}
			this.logExit("clearMessage");
		},

		_showMessage: function(message) {
			this.logEntry("_showMessage");
			if (message.level > 0) {
				if (message.number == 1004) {
					var repository = this._getLoginRepository();
					if (this._changePasswordDialog) {
						this._changePasswordDialog.destroyRecursive();
						delete this._changePasswordDialog;
					}
					this._changePasswordDialog = new ChangePasswordDialog();
					
					this._onHideChangePassword = aspect.after(this._changePasswordDialog, "onHide", lang.hitch(this, function() {
						this._onHideChangePassword.remove();
						delete this._onHideChangePassword;
						this._loginAttemptCompleted();
					}));
					
					this._changePasswordDialog.show(repository, true, this.password.get("value"));
				} else {
					this.setMessage(message, "error");
					this._loginAttemptCompleted();
				}
			} else {
				if (this._changePasswordDialog) {
					// Show change password message as "info".
					this.setMessage(message, "info");
					this._loginAttemptCompleted();
					if (this._changePasswordDialog) {
						this._changePasswordDialog.destroyRecursive();
						delete this._changePasswordDialog;
					}
				}
			}
			this.logExit("_showMessage");
		},
		/**
		 * This ideally should come from the default repository and it should have getDefaultRepository only. It needs
		 * to be cleaned in the next release
		 */
		_getLoginRepository: function(message) {
			var repository = null;
			if (ecm.model.desktop.getInitialRepository()) {
				repository = ecm.model.desktop.getInitialRepository();//this causing it to always login to initial repository irrespective of the server selection
				if (!this.server.get("disabled") && repository.id != this.server.get("value")) { // ...but if it is disabled, don't use its value (fixes the url addressable viewer)
					repository = ecm.model.desktop.getRepository(this.server.get("value"));
					ecm.model.desktop.setInitialRepository(repository); //changing the initial repository to the selected repository
				}
			} else if (!ecm.model.desktop.getAuthenticatingRepositoryId()) {
				//Do not Set the initial repository If the Authenticating repository is CONTAINER 
				repository = ecm.model.desktop.getRepository(this.server.get("value"));
				ecm.model.desktop.setInitialRepository(repository);
			} else if (ecm.model.desktop.getAuthenticatingRepositoryId() && ecm.model.desktop.getAuthenticatingRepositoryId() != "CONTAINER") {
				repository = ecm.model.desktop.getAuthenticatingRepository(); //the Authenticating repository is same as the Default repository
				ecm.model.desktop.setInitialRepository(repository);
			}
			return repository;
		},

		/**
		 * Performs the initial repository login
		 */
		_login: function() {
			this.logEntry("_login");
			if (this._handlingLogin) {
				return;
			}
			this._handlingLogin = true;
			if (!ecm.model.desktop.disableCookies && !ecm.model.desktop.disableAutocomplete && cookie.isSupported()) {
				var loginPaneCookie = {
					server: this.server.get("value"),
					userId: this.username.get("value")
				};
				var cookieKey = this._getLoginPaneCookieKey();
				cookie(cookieKey, dojojson.toJson(loginPaneCookie), {
					expires: 365
				});
			}
			this.clearMessage();

			if (this.username.isValid() && this.password.isValid()) {
				// This call is still needed to set the initialRepository.
				this._getLoginRepository();

				// if errors occur, show them on the panel (rather than a popup)
				if (!this._originalMessageAddedHandler) {
					this._originalMessageAddedHandler = ecm.model.desktop.onMessageAdded;
				}
				ecm.model.desktop.onMessageAdded = lang.hitch(this, this._showMessage);

				ecm.model.desktop.userId = this.username.get("value");
				ecm.model.desktop.logon(this.password.get("value"), lang.hitch(this, function() {
					this.logEntry("_logonCallback");

					if (ecm.model.desktop.connected) {
						this.loginButton.focus(); // to avoid tooltip showing up on password reset
						this.password.reset();
						this.loginButton.set("disabled", true);
					}
					this._loginAttemptCompleted();
					this.logExit("_logonCallback");
				}));
			} else {
				this.loginButton.set("disabled", true);
				delete this._handlingLogin;
			}
			this.logExit("_login");
		},

		_loginAttemptCompleted: function() {
			if (this._originalMessageAddedHandler) {
				ecm.model.desktop.onMessageAdded = this._originalMessageAddedHandler;
				delete this._originalMessageAddedHandler;
			}
			delete this._handlingLogin;
		},

		_onPaste: function() {
			// Allow the paste to finish before firing the change notification.
			setTimeout(lang.hitch(this, function() {
				this._enableLogin();
			}), 0);
		},

		/**
		 * Determines if the login button should be enabled.
		 */
		_enableLogin: function() {
			var authRepository = ecm.model.desktop.getAuthenticatingRepository();
			if (authRepository && authRepository.oAuthEnabled) {
				this.loginButton.set("disabled", true);
			} else {
				if (this.username.get("value") != null && this.username.get("value").length > 0 && this.password.get("value") != null && this.password.get("value").length > 0)
					this.loginButton.set("disabled", false);
				else
					this.loginButton.set("disabled", true);
			}
		}
	});
});

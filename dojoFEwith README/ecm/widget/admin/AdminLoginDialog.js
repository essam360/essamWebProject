/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/sniff", //
	"dojo/dom-class", //
	"dojo/dom-style", //
	"dojo/dom-construct", //
	"dojo/string", // 
	"ecm/widget/dialog/BaseDialog", //
	"ecm/widget/dialog/_OAuthLoginMixin", //
	"ecm/widget/HoverHelp", //
	"ecm/MessagesMixin", //
	"ecm/model/Repository", //
	"ecm/model/Desktop", //
	"ecm/model/Request", //
	"dojo/text!../dialog/templates/LoginDialogContent.html"
], //

function(declare, lang, has, domClass, domStyle, domConstruct, string, BaseDialog, _OAuthLoginMixin, HoverHelp, MessagesMixin, Repository, Desktop, Request, template) {

	/**
	 * @name ecm.widget.admin.AdminLoginDialog
	 * @class Provides a dialog box that is used to log in to a selected repository from the IBM Content Navigator
	 *        administration tool.
	 * @augments ecm.widget.dialog.BaseDialog
	 */

	return declare("ecm.widget.admin.AdminLoginDialog", [
		BaseDialog,
		_OAuthLoginMixin,
		MessagesMixin
	], {

		contentString: template,
		_oAuthLogin: false,
		_includePassword: false,
		_serverTokenLogin: false,

		constructor: function() {
			this.missingUsernameMessage = ecm.messages.missing_username_message;
			this.missingPasswordMessage = ecm.messages.missing_password_message;
		},

		postCreate: function() {
			this.inherited(arguments);
			this.textDir = has("text-direction");
			this.setTitle(ecm.messages.login);
			this.setResizable(true);
			domClass.add(this.domNode, "ecmLoginDialog minor");
			this.loginButton = this.addButton(this.messages.login, "_login", true, true);
		},

		_configureDialog: function(loginParams) {
			this._setOAuthMode(loginParams.oAuthEnabled);
			if (loginParams.oAuthEnabled) {
				this._oAuthLogin = true;
			} else {
				this._oAuthLogin = false;
			}
			
			if (loginParams.boxServerTokenEnabled){
				this._serverTokenLogin = true;
			}
			else {
				this._serverTokenLogin = false;
			}
		},

		/**
		 * Shows the dialog.
		 */
		show: function(type, id, name, loginParms, callback) {
			this._type = type;
			this._id = id;
			this._loginParms = loginParms;
			this._callback = (callback) ? callback : null;
			this.clearMessage();
			this.setIntroText(string.substitute(ecm.messages.login_new_server_message, [
				!this.textDir ? name : this.enforceTextDirWithUcc(null, name)
			]));

			this.username.set("value", "");
			this.username.set("textDir", this.textDir);
			this.password.set("value", "");

			this._configureDialog(loginParms);
			if (this._serverTokenLogin){
				this._login();
			}
			else {
				if (this._oAuthLogin) {
					this._getOAuthToken(false, loginParms, id, false);
				}
				return this.inherited(arguments);
			}
		},

		hide: function() {
			this._loginParms = null;
			this.inherited(arguments);
		},

		_enableLogin: function() {
			// summary:
			//		Determines if the login button should be enabled.
			// tags:
			//		private

			if (this.username.isValid() && this.password.isValid())
				this.loginButton.set("disabled", false);
			else
				this.loginButton.set("disabled", true);
		},

		_login: function() {
			this.clearMessage();
			if (this._oAuthLogin || this._serverTokenLogin || (this.username.isValid() && this.password.isValid())) {
				var params = {
					desktop: ecm.model.desktop.id,
					repositoryId: this._id
				};
				if (this.username.get('value') != null) {
					params.userid = this.username.get('value');
				}
				if (this.password.get('value') != null) {
					params.password = this.password.get('value');
				}

				for ( var i in this._loginParms) {
					params[i] = this._loginParms[i];
				}
				this._executeLogonRequest(this._type, params, lang.hitch(this, function(response) {
					this.hide();
					if (this._callback) {
						if (this._includePassword) {
							response.password = params.password;
						}
						this._callback(response);
					}
				}));
			} else {
				this._enableLogin();
			}
		},

		_executeLogonRequest: function(type, params, callback) {
			ecm.model.Request.invokeService("logon", type, params, lang.hitch(this, function(response) {
				this._logonCompleted(response, callback);
			}));
		},

		_logonCompleted: function(response, callback) {
			if (callback) {
				callback(response);
			}
		},

		/** @private */
		uninitialize: function() {
			this._cleanupOAuthWindow();
		}
	});

});

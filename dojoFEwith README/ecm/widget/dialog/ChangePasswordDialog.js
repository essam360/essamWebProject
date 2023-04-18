/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/dom-class", //
	"dojo/dom-style", // domStyle.set, domStyle.get
	"dijit/form/Select", //
	"dijit/form/ValidationTextBox", //
	"dijit/registry", //
	"../../Messages", //
	"../../model/Desktop", //
	"../../model/_ModelStore", //
	"./BaseDialog", //
	"dojo/text!./templates/ChangePasswordDialogContent.html"
], //
function(declare, //
lang, //
domClass, //
domStyle, //
Select, //
ValidationTextBox, //
registry, //
Messages, //
Desktop, //
_ModelStore, //
BaseDialog, //
template) {

	/**
	 * @name ecm.widget.dialog.ChangePasswordDialog
	 * @class Provides a dialog box that is used to change the password on an IBM Content Manager server or an IBM
	 *        Content Manager OnDemand server.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ChangePasswordDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.ChangePasswordDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmChangePasswordDialog minor");
			this.set("title", ecm.messages.change_password);
			this.setWidth(400);
			this.changePasswordButton = this.addButton(this.messages.change_password, "_onChangePassword", true, true);
			this.connect(this.oldPassword.domNode, "onpaste", this._onPaste);
			this.connect(this.newPassword.domNode, "onpaste", this._onPaste);
			this.connect(this.confirmPassword.domNode, "onpaste", this._onPaste);
		},

		show: function(repository, expired, oldPassword) {
			this.repository = repository;
			var changePasswordMessage = "";
			this.expired = expired;
			this.server.setStore(this.getRepositoriesStore());

			if (expired) {
				domStyle.set(this.icon, "display", "block");
				changePasswordMessage = ecm.messages.change_password_expired_message;
				this.set("title", ecm.messages.change_password_expired_title);
				this.changePasswordButton.set("label", ecm.messages.login);
				this.serverField.style.display = "none";
			} else {
				domStyle.set(this.icon, "display", "none");
				changePasswordMessage = ecm.messages.change_password_message;
				this.set("title", ecm.messages.change_password_title);
				this.changePasswordButton.set("label", ecm.messages.change_password);
			}
			if (Desktop.passwordRulesUrl) {
				changePasswordMessage += "  <a href=\"" + Desktop.passwordRulesUrl + "\" target=\"_blank\">" + ecm.messages.change_password_password_rules + "</a>";
			}
			this.text.innerHTML = changePasswordMessage;
			if (oldPassword) {
				this.oldPassword.set("value", oldPassword);
				this.oldPasswordField.style.display = "none";
			} else {
				this.oldPasswordField.style.display = "block";
			}

			this.confirmPassword.validator = function(value, constraints) {
				if (constraints && constraints.newPass) {
					var newPassInput = registry.byId(constraints.newPass);
					if (newPassInput) {
						//console.log("confirmPasswordValidator   %s == %s ?", value, newPassInput.value);
						if (value == newPassInput.value) {
							// Clear any error state in the new password box.
							newPassInput.set("state", "");
							return true;
						}
					}
				}
				return false;
			};
			this.newPassword.validator = function(value, constraints) {
				if (constraints && constraints.confirmPass) {
					var confirmPassInput = registry.byId(constraints.confirmPass);
					if (!confirmPassInput || confirmPassInput.value == "")
						return true;
					if (confirmPassInput && confirmPassInput.value != "") {
						//console.log("newPasswordValidator   %s == %s ?", value, confirmPassInput.value);
						if (value == confirmPassInput.value) {
							// Clear any error state in the confirm password box.
							confirmPassInput.set("state", "");
							return true;
						}
					}
				}
				return false;
			};

			var d = this.inherited(arguments);

			// Make the login dialog appear in front of any other open dialogs
			domClass.add(this.server.dropDown.domNode, "ecmChangePasswordDialogPopup");
			return d;
		},

		hide: function() {
			this.inherited(arguments);
			this.oldPassword.reset();
			this.newPassword.reset();
			this.confirmPassword.reset();
			this.changePasswordButton.set("disabled", true);
		},

		_onPaste: function() {
			// Allow the paste to finish before firing the change notification.
			setTimeout(lang.hitch(this, function() {
				this._updateButtons();
			}), 0);
		},

		_updateButtons: function() {
			//These are for Cross field validation but. the values are not getting updated until the fields are in focus
			//So we can not change the status of the non focus field for ValidationText box
			//this.newPassword.validate();
			//this.confirmPassword.validate();
			if (this.oldPassword.get("value").length > 0 && this.newPassword.get("value").length > 0 && this.confirmPassword.get("value") == this.newPassword.get("value")) {
				this.changePasswordButton.set("disabled", false);
			} else {
				this.changePasswordButton.set("disabled", true);
			}
		},

		_onChangePassword: function() {
			// User could have hit enter and not filled out the screen
			if (this.changePasswordButton.get("disabled")) {
				return;
			}

			var repository = Desktop.getRepository(this.server.get("value"));
			if (repository.userId == null && (repository != this.repository)) {
				repository.userId = this.repository.userId;
				repository.userLoginName = this.repository.userLoginName;
			}

			repository.changePassword(this.oldPassword.get("value"), this.newPassword.get("value"), lang.hitch(this, function() {
				this.hide();
				repository.onChange(repository);
			}));
		},

		getRepositoriesWithCallback: function(/* function */callback) {
			var repos = Desktop.repositories;
			var repositories = [];
			if (this.expired) {
				if (this.repository.canChangeExpiredPassword() == true) {
					repositories.push(this.repository);
				}
			} else if (repos) {
				for ( var i in repos) {
					var repository = repos[i];
					//Show CM and OD repositories 
					if (repository.canChangePassword() == true) { //only if they are Connected 
						repositories.push(repository);
					}
				}
			}
			callback(repositories);
		},

		getRepositoriesStore: function() {
			return new _ModelStore(this, this.getRepositoriesWithCallback);
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-style",
	"dijit/form/Select",
	"dijit/form/Button",
	"dijit/form/ValidationTextBox",
	"dijit/Tooltip",
	"dijit/layout/ContentPane",
	"../../MessagesMixin",
	"./BaseDialog",
	"dojo/text!./templates/CreateHoldDialogContent.html"
],

function(declare, lang, domClass, domStyle, Select, Button, ValidationTextBox, Tooltip, ContentPane, MessagesMixin, BaseDialog, template) {

	/**
	 * @name ecm.widget.dialog.CreateHoldDialog
	 * @class Provides a dialog box that is used to create a hold on an IBM Content Manager OnDemand item.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.CreateHoldDialog", [
		BaseDialog,
		MessagesMixin
	], {
		/** @lends ecm.widget.dialog.CreateHoldDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		_repository: null,
		_availableHolds: null,
		_callback: null,

		/**
		 * Creates the create hold dialog box.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmHoldDialog");
			this.setTitle(this.messages.createHold);
			//this.setIntroText(ecm.messages.createHoldSelectText);
			this.okButton = this.addButton(this.messages.createHold, "_createHold", false, true);
		},

		/**
		 * Clears the dialog box.
		 */
		clear: function() {
			this._holdName.set("value", "");
			this._holdDescription.set("value", "");
		},

		/**
		 * Shows the dialog box for creating a hold.
		 * 
		 * @param repository
		 *            Repository on which to create a hold.
		 * @param availableHolds
		 * @param callback
		 *            Callback function that is called when a hold is created.
		 */
		show: function(repository, availableHolds, callback) {
			var d = this.inherited(arguments);

			this.okButton.set("disabled", true);
			this.repository = repository;
			this._availableHolds = availableHolds;
			//this._folderName = folderName;
			this._callback = callback;
			var promptMessage = this.messages.properties_type_string_tooltip;
			promptMessage += ", " + this.messages.properties_maxLength_tooltip + 50;
			this._holdName.set("maxLength", 50);
			this._holdName.set("promptMessage", promptMessage);
			this._holdName.set("missingMessage", this.messages.holdNameRequired);
			this._holdName.set("invalidMessage", this.messages.invalidHoldName);
			//this._holdName.set("regExp", "([^'%])*");
			//Can't come up with regExp to exclude ',",[,],%; so override dijit.form.ValidationTextBox.validator
			this._holdName.validator = function(value, constraints) {
				if (value.indexOf("'") > -1 || value.indexOf("%") > -1 || value.indexOf('"') > -1 || value.indexOf("[") > -1 || value.indexOf("]") > -1) {
					return false;
				} else {
					return true;
				}
			};

			promptMessage = this.messages.properties_type_string_tooltip;
			promptMessage += ", " + this.messages.properties_maxLength_tooltip + 120;
			this._holdDescription.set("maxLength", 120);
			this._holdDescription.set("promptMessage", promptMessage);
			var _this = this;
			if (!this._availableHolds) {
				this.repository.retrieveHolds([], true, function(holds, canCreateHold) {
					_this._availableHolds = holds;
				});
			}
			return d;
		},

		/**
		 * @deprecated
		 */
		_onNameChange: function() {
			this.okButton.set("disabled", lang.trim(this._holdName.get("value")).length > 0 ? false : true);
		},

		/**
		 * @deprecated
		 */
		_onDescriptionChange: function() {
			// Hold description changed 
		},

		_done: function(name, desc) {
			this.onCancel();
			if (this._callback) {
				this._callback(name, desc);
			}
		},

		_createHold: function() {
			var name = lang.trim(this._holdName.get("value"));
			var desc = this._holdDescription.get("value");

			// Make sure name specify don't already exist
			var alreadyExist = false;
			for ( var i in this._availableHolds) {
				if (this._availableHolds[i].name == name) {
					alreadyExist = true;
					break;
				}
			}

			domStyle.set(this._errorMessage, "display", "none");
			if (alreadyExist) {
				if (this._errorMessage.firstChild) {
					this._errorMessage.removeChild(this._errorMessage.firstChild);
				}
				var textNode = document.createTextNode(this.messages.holdNameAlreadyExist);
				this._errorMessage.appendChild(textNode);
				domStyle.set(this._errorMessage, "display", "");
			} else {
				// Create hold
				this.repository.createHold(name, desc, this._folderName, lang.hitch(this, this._done, name, desc));
			}
		}
	});
});

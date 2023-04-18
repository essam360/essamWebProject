/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"ecm/MessagesMixin", //
	"ecm/widget/ValidationTextBox"
], //

function(declare, lang, MessagesMixin, ValidationTextBox) {

	/**
	 * @private Part of the NavigatorAdminPane widget.
	 * @name ecm.widget.admin.ValidationMenuIDTextBox
	 * @class
	 * @augments anything value
	 * @private
	 */
	return declare("ecm.widget.admin.ValidationMenuIDTextBox", [
		ValidationTextBox
	], {

		validator: function(/*anything*/value, /*dijit.form.ValidationTextBox.__Constraints*/constraints) {
			var isValid = this.inherited(arguments);
			if (isValid && !this._isValidID()) {
				isValid = false;
			}
			return isValid;
		},

		_isValidID: function() {
			var idValue = this.get('value');
			if (idValue.substring(0, "Default".length) == "Default") {
				return false;
			}
			return true;
		},

		getErrorMessage: function(/*Boolean*/isFocused) {
			if (!this._isValidID()) {
				return ecm.messages.admin_id_invalid_starts_with_default;
			} else {
				return this.inherited(arguments);
			}
		}
	});

});

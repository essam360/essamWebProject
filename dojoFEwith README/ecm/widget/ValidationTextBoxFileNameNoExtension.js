/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"ecm/widget/ValidationTextBox"
], //
function(declare, lang, ValidationTextBox) {
	/**
	 * @name ecm.widget.ValidationTextBoxFileNameNoExtension
	 * @class Provides a widget that contains a text box in which the user can enter the file name and the extension is
	 *        not shown to the user.
	 * @public
	 * @since 2.0.3.5
	 * @augments ecm.widget.ValidationTextBox
	 */
	return declare("ecm.widget.ValidationTextBoxFileNameNoExtension", [
		ValidationTextBox
	], {
		/** @lends ecm.widget.ValidationTextBoxFileNameNoExtension.prototype */

		_extension: null,
		_maxLength: 255,
		_disableNoExtension: false,

		postCreate: function() {
			this.set("maxLength", this._maxLength);
			this.inherited(arguments);
		},

		/**
		 * Clears the extension. The next time the value is set this widget will recalculate (and hide) the extension.
		 */
		clearExtension: function() {
			this._extension = null;
		},

		/**
		 * Returns the extension.
		 */
		getExtension: function() {
			return this._extension;
		},

		/**
		 * Disables the stripping out of the extension. This can be used for external files that have a name with no
		 * extension stripping needed.
		 */
		setDisableNoExtension: function(bool) {
			this._disableNoExtension = bool;
			if (this._disableNoExtension) {
				this.clearExtension();
			}
		},

		_setValueAttr: function(val) {
			if (val && this._extension == null & !this._disableNoExtension) {
				// Strip out the extension so the user sees the file name without the extension.  Also, set the max length.
				var index = val.lastIndexOf(".");
				if (index > -1) {
					this._extension = val.substring(index);
					arguments[0] = val.substring(0, index);
					this.set("maxLength", this._maxLength - this._extension.length);
				} else {
					this._extension = ""; // Document doesn't have an extension
					this.set("maxLength", this._maxLength);
				}
			}
			this.inherited(arguments);
		},

		/**
		 * Returns the value with the extension.
		 */
		getValue: function() {
			var val = this.inherited(arguments);
			if (this._extension) // has extension
			{
				//file name contains the extension, but it's not at the end of file name
				return val + this._extension;
			} else {
				return val;
			}
		}

	});
});

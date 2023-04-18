/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/dom-attr",
	"dijit/popup",
	"dijit/form/DropDownButton"
], //
function(declare, lang, aspect, domAttr, popup, DropDownButton) {
	/**
	 * @name ecm.widget.DropDownButton
	 * @class Provides a fix to dojo's DropDownButton.
	 * @augments dijit.form.DropDownButton
	 * @private
	 */
	return declare("ecm.widget.DropDownButton", [
		DropDownButton
	], {
		/** @lends ecm.widget.DropDownButton.prototype */

		/**
		 * Fix dojo bug where it doesn't focus on the focusNode when tab.
		 */
		postCreate: function() {
			this.inherited(arguments);
			domAttr.set(this.focusNode, "tabindex", "0");

			this.own(aspect.before(ecm.model.desktop, "onDisplayStatusDialog", lang.hitch(this, function() {
				this._keepDropDownOpen = true;
			})));
			this.own(aspect.after(ecm.model.desktop, "onHideStatusDialog", lang.hitch(this, function() {
				this._keepDropDownOpen = false;
			})));
			if (this.labelId) {
				var labelBy = domAttr.get(this.focusNode, "aria-labelledby") || "";
				domAttr.set(this.focusNode, "aria-labelledby", this.labelId + " " + labelBy);
			}
		},

		_onBlur: function() {
			if (this._keepDropDownOpen)
				return;

			this.inherited(arguments);
		},

		/**
		 * Sets whether or not the drop-down should be kept open when it loses focus.
		 * 
		 * @param keepDropDownOpen
		 *            A Boolean value. If <code>true</code>, the drop-down is kept open when it loses focus.
		 */
		setKeepDropDownOpen: function(keepDropDownOpen) {
			this._keepDropDownOpen = keepDropDownOpen;
		},

		/**
		 * Fix dojo where it doesn't focus on the focusNode when disabled. For accessibilty/JAWS, the user needs to tab
		 * to the field for JAWS to read it.
		 */
		_setDisabledAttr: function(/*Boolean*/value) {
			this.inherited(arguments);
			domAttr.set(this.focusNode, "tabindex", "0");
		},

		/**
		 * Fix dojo bug where re-focusing within the dialog causes the popup to close.
		 */
		openDropDown: function() {
			this.inherited(arguments);
			popup.getTopPopup().onExecute = function() {
				// Do not close during onExecute
			};
			popup.getTopPopup().onCancel = function() {
				// Do not close during onCancel
			};
		}
	});
});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dijit/form/DropDownButton", //
	"dijit/Tooltip", //
	"dojo/text!./templates/DropDownInput.html"
], //         
function(declare, //
DropDownButton, //
Tooltip, //
template) {

	/*
	 * @public
	 * This dijit allows us to use the same error handling as the ecm.widget.DropDownInput dijit, since
	 * it uses the same template.
	 */
	return declare("ecm.widget.admin._AdminFolderSelectorDropDownInput", [
		DropDownButton
	], {
		templateString: template,

		widgetsInTemplate: true,
		forceWidth: false,

		_allowCloseOnBlur: false,

		startup: function() {
			if (this._started) {
				return;
			}

			this.inherited(arguments);
		},

		setAllowCloseOnBlur: function(allowCloseOnBlur) {
			this._allowCloseOnBlur = allowCloseOnBlur;
		},

		getAllowCloseOnBlur: function() {
			return this._allowCloseOnBlur;
		},

		_onBlur: function() {
			// Hide the tooltip.
			Tooltip.hide(this.domNode);

			// Don't call the inherited function in some cases -- when the tree is paging,  this causes 
			// the dropdown to close.
			if (this._allowCloseOnBlur) {
				this.inherited(arguments);
			}
		},
		_onButtonClick: function() {

		}
	});
});

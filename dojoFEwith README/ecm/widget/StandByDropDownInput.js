/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./DropDownInput",
	"./_DropDownStandByMixin"
], function(declare, lang, DropDownInput, _DropDownStandByMixin) {

	/**
	 * @name ecm.widget.StandByDropDownInput
	 * @class Provides a widget that combines a drop-down list and a field. A user can enter a value in the field or
	 *        select a value from the drop-down list. It also hooks up the stand by status when the drop-down pane is
	 *        waiting for query data.
	 * @augments ecm.widget.DropDownInput
	 */
	return declare("ecm.widget.StandByDropDownInput", [
		DropDownInput,
		_DropDownStandByMixin
	], {
		/** @lends ecm.widget.StandByDropDownInput.prototype */

		postCreate: function() {
			this.inherited(arguments);

			// Check for request status dialog before dismissing the pop up content pane
			this._connectStandByHandler(this, this.dropDown.containerButtonNode);
		},

		/**
		 * Destroys the control.
		 */
		destroy: function() {
			this.inherited(arguments);

			if (this.dropDown)
				this.dropDown.destroy();
			if (this._standby) {
				this._standby.destroy();
				this._standby = null;
			}
		}
	});

});

/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([ "dojo/_base/declare", "dojo/_base/connect", "dojox/grid/DataSelection", "../Messages", "./dialog/ConfirmationDialog" ], function(declare, connect, DataSelection, Messages, ConfirmationDialog) {
	/**
	 * @name ecm.widget._DataSelection
	 * @class
	 * @augments dojox.grid.DataSelection
	 */
	return declare("ecm.widget._DataSelection", [ DataSelection ], {
		/** @lends ecm.widget._DataSelection.prototype */

		comfirm: false,
		clickSelectEvent: function(e) {
			var self = this;
			if (this.comfirm) {
				var confirm = new ConfirmationDialog({
					text: self.comfirmMsg,
					title: ecm.messages.confirmation_icon_tooltip,
					buttonLabel: ecm.messages.ok,
					onExecute: function() {
						self.clickSelect(e.rowIndex, connect.isCopyKey(e), e.shiftKey);
					}
				});
				confirm.show();
			} else {
				self.clickSelect(e.rowIndex, connect.isCopyKey(e), e.shiftKey);
			}

		}
	});
});

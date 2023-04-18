/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojox/widget/Standby",
	"../model/Desktop"
], function(declare, lang, Standby, Desktop) {
	/**
	 * @name ecm.widget._DropDownStandByMixin
	 * @class Mixin to connect the Stand by status when dijit is waiting for data
	 */
	return declare("ecm.widget._DropDownStandByMixin", null, {
		/** @lends ecm.widget._DropDownStandByMixin.prototype */

		_connectStandByHandler: function(dropDown, dialogNode) {
			// Check for request status dialog before dismissing the pop up content pane 			
			if (!this._standby) {
				// Set up standby widget to overlay popup widget.
				var standby = new Standby({
					target: dialogNode,
					text: "",
					imageText: "",
					image: "dojo/resources/blank.gif" // hide the stand by spinning icon since status dialog already has something similar.
				});
				document.body.appendChild(standby.domNode);
				standby.startup();
				this.connect(Desktop, "onDisplayStatusDialog", lang.hitch(this, function() {
					dropDown.setAllowCloseOnBlur(false);
					standby.show();
					// Connect to event when status dialog is hidden to restore state changed above.
					this._hideStatusDialogEventHandle = this.connect(Desktop, "onHideStatusDialog", lang.hitch(this, function() {
						var _this = this;
						// Allow some time for the status dialog to close.
						setTimeout(function() {
							dropDown.setAllowCloseOnBlur(true);
							// Disconnect here to avoid accumulating connections on the onHideStatusDialog event.
							if (_this._hideStatusDialogEventHandle != null) {
								_this.disconnect(_this._hideStatusDialogEventHandle);
								_this._hideStatusDialogEventHandle = null;
							}
							standby.hide();
						}, 300);
					}));
				}));
				this._standby = standby;
			}
		},

		destroy: function() {
			this.inherited(arguments);

			if (this._standby) {
				this._standby.destroy();
				this._standby = null;
			}
		}
	});
});

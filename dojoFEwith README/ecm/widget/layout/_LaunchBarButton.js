/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dijit/form/ToggleButton",
	"dijit/Tooltip",
	"ecm/LoggerMixin",
	"dojo/text!./templates/_LaunchBarButton.html"
],

function(declare, //
ToggleButton, //
Tooltip, //
LoggerMixin, //
template) {

	/**
	 * @name ecm.widget.layout._LaunchBarButton
	 * @class Provides a button for the launchbar that opens a panel within the launchbar container's content area.
	 * @augments dijit.form.Button, ecm.LoggerMixin
	 * @public
	 */
	return declare("ecm.widget.layout._LaunchBarButton", [
		ToggleButton,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._LaunchBarButton */

		showLabel: false,

		templateString: template,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			if (this.tooltip && this.tooltip.length > 0) {
				this._iconToolTip = new Tooltip({
					connectId: this.focusNode,
					label: this.tooltip
				});
				this._containerToolTip = new Tooltip({
					connectId: this.containerNode,
					label: this.tooltip
				});
			}

			this.logExit("postCreate");
		},

		_setSelectedAttr: function(val) {
			this.set("checked", val);

			if (!val)
				this.selectedIcon.style.visibility = "hidden";
			else
				this.selectedIcon.style.visibility = "visible";
			this.selected = val;
		},

		/**
		 * Set the label (text) of the button; takes an HTML string.
		 * 
		 * @param content
		 *            HTML String.
		 */
		_setLabelAttr: function(/*String*/content) {
			this._set("label", content);
			this.containerNode.innerHTML = content;
		},

		destroy: function() {
			if (this._iconToolTip) {
				this._iconToolTip.destroy();
			}

			if (this._containerToolTip) {
				this._containerToolTip.destroy();
			}

			this.inherited(arguments);
		}
	});
});

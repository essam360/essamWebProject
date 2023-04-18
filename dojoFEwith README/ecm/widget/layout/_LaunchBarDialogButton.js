/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/event",
	"dijit/form/ToggleButton",
	"dijit/Tooltip",
	"../../LoggerMixin",
	"dojo/text!./templates/_LaunchBarDialogButton.html"
],

function(declare, //
event, //
ToggleButton, //
Tooltip, //
LoggerMixin, //
template) {

	/**
	 * @name ecm.widget.layout._LaunchBarDialogButton
	 * @class Provides a button for the launchbar that opens a flyout menu dialog.
	 * @augments dijit.form.DropDownButton, ecm.LoggerMixin
	 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
	 */
	return declare("ecm.widget.layout._LaunchBarDialogButton", [
		ToggleButton,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout._LaunchBarDialogButton */

		showLabel: false,

		/**
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		showShortcut: false,

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

			if (this.flyoutTooltip && this.flyoutTooltip.length > 0) {
				this._flyoutToolTip = new Tooltip({
					connectId: this.shorcutButtonIcon,
					label: this.flyoutTooltip
				});
			}

			this.logExit("postCreate");
		},

		/**
		 * Set the label (text) of the button; takes an HTML string.
		 * 
		 * @param content
		 *            HTML string.
		 */
		_setLabelAttr: function(/*String*/content) {
			this._set("label", content);
			this.containerNode.innerHTML = content;
		},

		_setSelectedAttr: function(val) {
			this.set("checked", val);

			if (!val)
				this.selectedIcon.style.visibility = "hidden";
			else
				this.selectedIcon.style.visibility = "visible";
			this.selected = val;

			if (this.dropDown)
				this.dropDown.selected = val;
		},

		_setShowShortcutAttr: function(val) {
			this.showShortcut = val;

			if (this.dropDown)
				this.dropDown.selected = val;
		},

		/**
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		setShortcutVisibility: function(val) {
		},

		_shortcutButtonClicked: function(evt) {
			event.stop(evt);
			this.onShortcutButtonClicked();
		},

		/**
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		onShortcutButtonClicked: function() {
		},

		destroy: function() {
			if (this._iconToolTip) {
				this._iconToolTip.destroy();
			}

			if (this._containerToolTip) {
				this._containerToolTip.destroy();
			}

			if (this._flyoutToolTip) {
				this._flyoutToolTip.destroy();
			}

			this.inherited(arguments);
		}

	});
});

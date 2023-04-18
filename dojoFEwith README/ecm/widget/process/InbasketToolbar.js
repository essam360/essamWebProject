/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/aspect",
	"dojo/dom-construct",
	"dijit/registry",
	"dijit/form/Button",
	"ecm/MessagesMixin",
	"ecm/widget/Toolbar",
	"dijit/Tooltip"
], //
function(declare, lang, array, aspect, domConstruct, registry, Button, MessagesMixin, Toolbar, Tooltip) {

	/**
	 * @name ecm.widget.process.InbasketToolbar
	 * @class This module provides IBM FileNet P8 work in-basket toolbar capability.
	 * @augments ecm.widget.Toolbar
	 */

	return declare("ecm.widget.process.InbasketToolbar", [
		Toolbar
	], {
		/** @lends ecm.widget.process.InbasketToolbar.prototype */

		/**
		 * A string holding the current queue name.
		 */
		queueName: "",

		/**
		 * A string holding the current queue type (for example, <code>processQueue</code> or <code>userQueue</code>).
		 */
		queueType: "",

		/**
		 * @private
		 */
		_p8toolbarButtons: null,

		/**
		 * @private
		 */
		_p8toolbarButtonTooltips: null,

		/**
		 * @private
		 */
		_p8separators: null,

		constructor: function() {
			if (!this._p8toolbarButtons) {
				this._p8toolbarButtons = [];
			}
			if (!this._p8toolbarButtonTooltips) {
				this._p8toolbarButtonTooltips = [];
			}
			if (!this._p8separators) {
				this._p8separators = [];
			}
		},

		preload: function() {
			this.inherited(arguments);
		},

		destroy: function() {
			var t = this;
			t.cleanUpToolButtons();
			t._p8toolbarButtons = null;
			t._p8toolbarButtonTooltips = null;
			t._p8separators = null;
			t.inherited(arguments);
		},

		/**
		 * Cleans up the toolbar buttons.
		 */
		cleanUpToolButtons: function() {
			var t = this;
			// Delete the buttons
			if (t._p8toolbarButtons) {
				for ( var i in t._p8toolbarButtons) {
					t._p8toolbarButtons[i].destroyRecursive();
					t._p8toolbarButtons[i] = null;
				}
				t._p8toolbarButtons = [];
			}
			// Delete the button tooltips
			if (t._p8toolbarButtonTooltips) {
				for ( var i in t._p8toolbarButtonTooltips) {
					t._p8toolbarButtonTooltips[i].destroyRecursive();
					t._p8toolbarButtonTooltips[i] = null;
				}
				t._p8toolbarButtonTooltips = [];
			}
			// Delete the separators
			if (t._p8separators) {
				for ( var i in t._p8separators) {
					domConstruct.destroy(t._p8separators[i]);
					t._p8separators[i] = null;
				}
				t._p8separators = [];
			}
			t.inherited(arguments);
		},

		/**
		 * @private Creates the toolbar button with the specified label.
		 */
		_createButton: function(id, label, iconClass) {
			var t = this;
			if (id == "ViewStep") {
				var openButton = t._createLocalButton(id, ecm.messages.process_open_button_label, iconClass);
				return openButton;
			} else if (id == "MoveToInbox") {
				if (!t.isInTrackerQueue() && t.queueType == "processQueue") {
					var moveButton = t._createLocalButton(id, ecm.messages.process_movetoinbox_button_label, iconClass);
					t._createButtonTooltip(moveButton, ecm.messages.process_move_to_inbasket_tooltip);
					return moveButton;
				}
			} else if (id == "ReturnToSender") {
				if (!t.isInTrackerQueue() && t.queueType == "userQueue") {
					var returnButton = t._createLocalButton(id, ecm.messages.process_return_button_label, iconClass);
					t._createButtonTooltip(returnButton, ecm.messages.process_return_to_sender_tooltip);
					return returnButton;
				}
			} else if (id == "Reassign") {
				if (!t.isInTrackerQueue()) {
					var reassignButton = t._createLocalButton(id, ecm.messages.process_reassign_button_label, iconClass);
					reassignButton.isReassignButton = true;
					t._createButtonTooltip(reassignButton, ecm.messages.process_reassign_tooltip);
					return reassignButton;
				}
			} else {
				return t.inherited(arguments);
			}
			return null;
		},

		/**
		 * Returns true if the process queue this item is running in is a Tracker queue.
		 * 
		 * @returns {Boolean} true if work item is in tracker queue.
		 * @since 2.0.2
		 */
		isInTrackerQueue: function() {
			if (this.queueName != null) {
				if (this.queueName == "Tracker" || this.queueName == "Tracker(0)") {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},

		_createButtonTooltip: function(button, tooltipLabel) {
			var toolTip = new Tooltip({
				connectId: [
					button.domNode
				],
				label: tooltipLabel
			});
			toolTip.startup();
			this._p8toolbarButtonTooltips.push(toolTip);
		},

		/**
		 * @private Creates a button with the specified label.
		 */
		_createLocalButton: function(id, label, iconClass) {
			var t = this;
			var toolbarButton = new Button({
				iconClass: iconClass,
				showLabel: this.showButtonLabels,
				label: label,
				id: registry.getUniqueId((id ? (id.toUpperCase() + "_") : "") + "dijit_form_Button")
			});
			// Block right-click event, so the browser doesn't show an annoying right-click window
			toolbarButton.own(aspect.after(toolbarButton.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
				this._stopEvent(evt);
			}), true));
			// Add new button to list of buttons on the work toolbar
			t._p8toolbarButtons.push(toolbarButton);
			return toolbarButton;
		},

		/**
		 * Update the enable/disable state of the toolbar buttons based on the listview selection. If no items are
		 * selected, disable all the FileNet P8 hard-coded buttons (except for the Refresh button).
		 */
		updateToolbarState: function() {
			var t = this;
			t.inherited(arguments);

			for ( var i in t._p8toolbarButtons) {
				var button = t._p8toolbarButtons[i];
				if (button.domNode) {
					var selectedItems = button.params.contentList.getSelectedItems();
					var disabled = selectedItems.length == 0;
					if (button.isReassignButton) {
						var item = selectedItems[0];
						if (!disabled && (item && !item.hasPrivilege("privCanReassign"))) {
							button.set("disabled", true);
						} else {
							button.set("disabled", disabled);
						}
					} else if (button.isRefreshButton) {
						button.set("disabled", false);
					} else {
						button.set("disabled", disabled);
					}
				}
			}
		}
	});
});

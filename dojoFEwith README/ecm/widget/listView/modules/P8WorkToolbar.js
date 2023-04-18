/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"ecm/widget/listView/modules/_Module",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/Menu",
	"ecm/widget/ActionMenu",
	"ecm/MessagesMixin",
	"ecm/widget/listView/modules/Toolbar",
	"dijit/Tooltip",
	"ecm/widget/dialog/StepProcessorWindow",
	"ecm/widget/dialog/ReassignToUserDialog",
	"ecm/widget/dialog/WorkflowPreferencesDialog"
], //
function(declare, lang, array, domClass, domGeom, _Module, connect, domConstruct, Button, DropDownButton, Menu, ActionMenu, MessagesMixin, Toolbar, Tooltip, StepProcessorWindow, ReassignToUserDialog, WorkflowPreferencesDialog) {

	/**
	 * @name ecm.widget.listView.modules.P8WorkToolbar
	 * @class This module provides IBM FileNet P8 work in-basket toolbar capability.
	 * @augments ecm.widget.listView.modules.Toolbar
	 * @deprecated As of 2.0.3, Use ecm.widget.listview.modules.P8InbasketToolbar instead.
	 */

	return declare("ecm.widget.listView.modules.P8WorkToolbar", [
		Toolbar
	], {
		/** @lends ecm.widget.listView.modules.P8WorkToolbar.prototype */

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
		_createButton: function(label, id) {
			var t = this;
			if (id == "ViewStep") {
				var openButton = t._createLocalButton(ecm.messages.process_open_button_label);
				return openButton;
			} else if (id == "MoveToInbox") {
				if (!t.isInTrackerQueue() && t.queueType == "processQueue") {
					var moveButton = t._createLocalButton(ecm.messages.process_movetoinbox_button_label);
					t._createButtonTooltip(moveButton, ecm.messages.process_move_to_inbasket_tooltip);
					return moveButton;
				}
			} else if (id == "ReturnToSender") {
				if (!t.isInTrackerQueue() && t.queueType == "userQueue") {
					var returnButton = t._createLocalButton(ecm.messages.process_return_button_label);
					t._createButtonTooltip(returnButton, ecm.messages.process_return_to_sender_tooltip);
					return returnButton;
				}
			} else if (id == "Reassign") {
				if (!t.isInTrackerQueue()) {
					var reassignButton = t._createLocalButton(ecm.messages.process_reassign_button_label);
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
		_createLocalButton: function(label) {
			var t = this, resultSet = t.contentList.getResultSet();
			var toolbarButton = new Button({
				label: label
			});
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(toolbarButton.domNode, "oncontextmenu", "_stopEvent");
			// Add new button to list of buttons on the work toolbar
			t._p8toolbarButtons.push(toolbarButton);
			// Disable the buttons if the there are no items in the result set.
			if (resultSet.items == null || resultSet.items.length == 0) {
				toolbarButton.set("disabled", true);
			}
			return toolbarButton;
		},

		/**
		 * @private Get the onClick handler for the action.
		 */
		_getButtonOnClickHandler: function(action, teamspace) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			if (action.id == "ViewStep") {
				var onClickHandler = function(evt) {
					var workItem = cl.getSelectedItems()[0];
					ecm.widget.dialog.stepProcessorWindow.open(workItem, lang.hitch(t, function() {
						resultSet.refresh();
					}));
				};
				return onClickHandler;
			} else if (action.id == "MoveToInbox") {
				var onClickHandler = function(evt) {
					var workItem = cl.getSelectedItems()[0];
					workItem.moveToInbox(lang.hitch(t, function() {
						resultSet.refresh();
					}), cl.getSelectedItems());
				};
				return onClickHandler;
			} else if (action.id == "ReturnToSender") {
				var onClickHandler = function(evt) {
					var workItem = cl.getSelectedItems()[0];
					workItem.returnToSender(lang.hitch(t, function() {
						resultSet.refresh();
					}));
				};
				return onClickHandler;
			} else if (action.id == "Reassign") {
				var onClickHandler = function(evt) {
					var selectedItems = cl.getSelectedItems();
					var callback = lang.hitch(t, function() {
						resultSet.refresh();
					});
					if (selectedItems.length == 1) {
						var selectedItem = selectedItems[0];
						// For ICNParallelDocumentApproval or ICNSequentialDocumentApproval workflows, check a custom workflow field which can override the system reassign flag.
						selectedItem.canReassign(function(canReassign) {
							if (canReassign) {
								t._reassign(selectedItems, callback);
							} else {
								ecm.model.desktop.addMessage(ecm.model.Message.createErrorMessage("process_reassign_error"));
							}
						});
					} else { // For multi-selection,  the checking for ICNParallelDocumentApproval and ICNParallelDocumentApproval is done in the mid-tier code.
						t._reassign(selectedItems, callback);
					}
				};
				return onClickHandler;
			} else {
				return t.inherited(arguments);
			}
		},

		/**
		 * Event handler called when the toolbar buttons have been created.
		 */
		onToolbarButtonsCreated: function(toolbarButtons) {
		},

		_reassign: function(selectedItems, callback) {
			var reassignDialog = new ReassignToUserDialog({
				repository: selectedItems[0].repository,
				items: selectedItems,
				callback: callback
			});
			reassignDialog.show();
		},

		/**
		 * Update the enable/disable state of the toolbar buttons based on the listview selection. If no items are
		 * selected, disable all the FileNet P8 hard-coded buttons (except for the Refresh button).
		 */
		updateToolbarState: function() {
			var t = this, cl = t.contentList;
			t.inherited(arguments);
			var selectedItems = cl.getSelectedItems();
			var disabled = selectedItems.length == 0;
			for ( var i in t._p8toolbarButtons) {
				var button = t._p8toolbarButtons[i];
				if (button.domNode) {
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

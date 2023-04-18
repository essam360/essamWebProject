/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/store/DataStore",
	"dojo/data/ItemFileWriteStore",
	"dojox/grid/DataGrid",
	"dojo/text!./templates/WorkflowSubscriptionsDialogContent.html",
	"ecm/Messages",
	"ecm/model/Repository",
	"ecm/widget/dialog/BaseDialog",
	"ecm/widget/dialog/MessageDialog"
],

function(declare, lang, domClass, DataStore, ItemFileWriteStore, DataGrid, template, Messages, Repository, BaseDialog, MessageDialog) {

	/**
	 * @name ecm.widget.dialog.WorkflowSubscriptionsDialog
	 * @class Provides a dialog box that is used to view workflow subscriptions.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.WorkflowSubscriptionsDialog", [
		ecm.widget.dialog.BaseDialog
	], {
		/** @lends ecm.widget.dialog.WorkflowSubscriptionsDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,
		_callback: null,

		postCreate: function() {
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmWorkflowSubscriptionsDialog");
			this.setTitle(this.messages.subscriptions_dialog_title);
			this.setIntroText(this.messages.subscriptions_dialog_info_text);
			this._selectButton = this.addButton(this.messages.subscriptions_dialog_select_button_label, "_select", false, false, "SELECT");
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param item
		 *            An {@link ecm.model.ContentItem} object that has workflow subscriptions associated.
		 * @param subscriptions
		 *            Can be null, the list of subscriptions from which the item is to be launched. The subscriptions
		 *            dialog will list all of the subscriptions that the item is associated with.
		 * @param callback
		 *            A callback function called when a subscription has been selected. Passes a
		 *            {@link ecm.model.ContentItem} for the current item that is being launched with a subscription and
		 *            a {@link ecm.model.ContentItem} that represents the selected subscription.
		 */
		show: function(item, subscriptions, callback) {
			this._subscriptions = subscriptions;
			this._item = item;
			this._callback = callback;
			var showCallback = lang.hitch(this, function() {
				this.inherited("show", []);
			});

			if (subscriptions) {
				this._createGrid(subscriptions, showCallback);
			} else {
				this._showSubscriptions(showCallback);
			}
		},

		// display all the subscriptions the object has associated
		_showSubscriptions: function(showCallback) {
			var self = this;
			this._item.retrieveSubscriptions(lang.hitch(this, function(workitem, subscriptions) {
				self._createGrid(subscriptions, showCallback);
			}));
		},

		_createGrid: function(subscriptions, showCallback) {
			if (this._grid) {
				if (this._grid.domNode) {
					this._subscriptionsGrid.removeChild(this._grid.domNode);
					this._grid.destroyRecursive();
				}
			}
			// create store:
			var items = [];
			for (i in subscriptions) {
				var subscription = subscriptions[i];
				items.push({
					name: subscription.displayName,
					selected: false,
					description: subscription.description,
					canSelect: true,
					contentItem: subscription
				});
			}

			this._substore = new ItemFileWriteStore({
				data: {
					items: items
				}
			});

			// create structure:
			var layout = [
				{
					field: "name",
					name: this.messages.subscriptions_dialog_name_col_hdr,
					width: "35%"
				},
				{
					field: "description",
					name: this.messages.subscriptions_dialog_desc_col_hdr,
					width: "65%"
				}
			];

			this._grid = new DataGrid({
				structure: layout,
				store: this._substore,
				selectionMode: "single",
				keepSelection: true,
				"aria-label": this.messages.subscriptions_dialog_title
			});

			this.connect(this._grid, "onCellClick", "_updateButtonState");
			this.connect(this._grid, "onRowClick", "_onRowClick");
			this.connect(this._grid, "onRowDblClick", "_onRowDblClick");
			this.connect(this._grid, "onStyleRow", "_onStyleRow");

			this._subscriptionsGrid.appendChild(this._grid.domNode);
			this._grid.startup();
			this._updateButtonState();

			// show the dialog (unless the item has no subscriptions associated)
			if (subscriptions.length > 0) {
				showCallback();
			}

			// display error message if no subscriptions are associated
			var msg = null;
			if (subscriptions.length == 0) {
				msg = this.messages.subscriptions_dialog_no_subs_msg;
			}

			if (msg != null) {
				var dialog = new ecm.widget.dialog.MessageDialog({
					text: msg
				});
				dialog.show();
			}
		},

		_onStyleRow: function(inRow) {
			// This event handler is really for support of keyboarding, specifically using the ENTR key to
			// select one of the row items, need to make sure the "Select" button is enabled as well.
			var item = this._grid.getItem(inRow.index);
			if (item) {
				if (inRow.selected) {
					this._selectButton.set("disabled", false);
				}
			}
		},

		_select: function() {
			this.onCancel();
			var subscriptions = this._grid.selection.getSelected();
			if (subscriptions) {
				if (this._callback) {
					var subscription = subscriptions[0].contentItem[0];
					this._callback(this._item, subscription);
				}
			}
		},

		_onRowDblClick: function(event) {
			var item = this._grid.getItem(event.rowIndex);
			if (item) {
				this.onCancel();
				if (this._callback) {
					this._callback(this._item, item.contentItem[0]);
				}
			}
		},

		_onRowClick: function(event) {
			var sel = false;
			var item = this._grid.getItem(event.rowIndex);
			if (item) {
				sel = true;
			}
			this._selectButton.set("disabled", !sel);
		},

		_updateButtonState: function() {
			var sel = false;
			var subscriptions = this._grid.selection.getSelected();
			if (subscriptions && subscriptions.length > 0) {
				sel = true;
			}
			this._selectButton.set("disabled", !sel);
		},

		destroy: function() {
			if (this._grid) {
				if (this._grid.domNode) {
					this._subscriptionsGrid.removeChild(this._grid.domNode);
					this._grid.destroyRecursive();
				}
				this._grid = null;
			}
			this._item = null;
			this._substore = null;
			this._callback = null;
			this.inherited(arguments);
		}
	});
});

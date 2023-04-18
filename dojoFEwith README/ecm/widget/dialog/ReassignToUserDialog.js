/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-class",
	"ecm/widget/dialog/BaseDialog",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/widget/UserGroupSelector",
	"dijit/form/CheckBox",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dojo/text!./templates/ReassignToUserDialogContent.html"
],

function(declare, lang, connect, domClass, BaseDialog, LoggerMixin, Messages, UserGroupSelector, CheckBox, BorderContainer, ContentPane, template) {

	/**
	 * @name ecm.widget.dialog.ReassignToUserDialog
	 * @class Provides a dialog box that is used to reassign an IBM FileNet P8 workflow item to another user.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.ReassignToUserDialog", [
		BaseDialog,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.ReassignToUserDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A {@link ecm.messages} object for referencing string resources.
		 */
		_messages: ecm.messages,

		/**
		 * A string value indicating the default query mode to be set on the user/group selector widget
		 */
		queryMode: "users",

		/**
		 * A string value indicating the selection mode (single or multiple) for the user/group selector widget.
		 */
		selectionMode: "single",

		/**
		 * A boolean flag indicating whether the dialog should invoke the reassign action
		 * 
		 * @since 2.0.2
		 */
		invokeAction: true,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmReassignUserDialog");

			this.setTitle(this._messages.process_reassign_button_label);
			this._okButton = this.addButton(this._messages.ok_button_label, "_onOK", false, false);
			this.setResizable(true);

			this._selector = new ecm.widget.UserGroupSelector({
				queryMode: this.queryMode,
				selectionMode: this.selectionMode,
				selectedItems: []
			});
			this._userGroupSelector.set("content", this._selector);
			this._selector.startup();
			this._selector.createRendering(this.repository);

			connect.connect(this._selector, "onSelectionChanged", this, function() {
				this._onSelectedItemsChanged();
			});

			if (this.selectionMode == "single") {
				connect.connect(this._selector, "onChange", this, function() {
					this._onOK();
				});
			}

			this._onSelectedItemsChanged();

			this.logExit("postCreate");
		},

		_onOK: function() {
			var user = this._selector.getSelectedItems()[0].name;
			var displayName = this._selector.getSelectedItems()[0].displayName;
			var delegate = this.delegateFlag.get("value");

			if (this.invokeAction) {
				this.items[0].reassign(user, displayName, delegate, lang.hitch(this, function(response) {
					this.callback(user, displayName, delegate);
				}), this.items);
			} else {
				this.callback(user, displayName, delegate);
			}
			this.onCancel();
		},

		_onSelectedItemsChanged: function() {
			if (this._selector.getSelectedItems().length == 1) {
				this._okButton.set("disabled", false);
			} else {
				this._okButton.set("disabled", true);
			}
		},

		focus: function() {
			this.logEntry("focus");
			this._selector.focus();
			this.logExit("focus");
		},

		destroy: function() {
			this._okButton.destroy();
			this._selector.destroy();
			this.inherited(arguments);
		}
	});
});

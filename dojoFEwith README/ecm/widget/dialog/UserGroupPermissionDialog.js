/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/dom-style",
	"dojo/dom-class",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Select",
	"ecm/model/Repository",
	"ecm/widget/dialog/BaseDialog",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/User",
	"ecm/model/UserGroup",
	"ecm/widget/UserGroupSelector",
	"dojo/text!./templates/UserGroupPermissionDialogContent.html"
], function(declare, lang, connect, domStyle, domClass, BorderContainer, ContentPane, Select, Repository, BaseDialog, LoggerMixin, Messages, User, UserGroup, UserGroupSelector, template) {
	/**
	 * @private
	 * @name ecm.widget.dialog.UserGroupPermissionDialog
	 * @class Provides a dialog box that is used to add users and groups with a a permission.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.2
	 */
	return declare("ecm.widget.dialog.UserGroupPermissionDialog", [
		BaseDialog,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.UserGroupPermissionDialog.prototype */

		// Path to the template
		contentString: template,
		widgetsInTemplate: true,

		/**
		 * Array of value and label to display in the permissions dropdown.
		 */
		permissions: [],
		/**
		 * Instance of {@link ecm.model.Repository}.
		 */
		repository: null,
		/**
		 * Array of object selected {@link ecm.model.User} or {@link ecm.model.UserGroup} to filter from the available
		 * list.
		 */
		filteredItems: null,
		/**
		 * Boolean indication if pseudo groups (i.e. authentication users) should display in the search for pulldown.
		 */
		showPseudoGroups: false,
		/**
		 * Label to display on the permission pulldown to override the default label.
		 */
		permissionLabel: null,
		/**
		 * The default scope for the user group selector. The default is users.
		 * 
		 * @since 2.0.3
		 */
		defaultScope: "users",
		/**
		 * Sets the query mode for the user group selector.
		 * 
		 * @since 2.0.3
		 */
		queryMode: "all",
		/**
		 * The default permission for the access selector. The default is no default (null).
		 * 
		 * @since 2.0.3.7
		 */
		defaultPermission: null,

		_messages: ecm.messages,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAddPermissionDialog");

			if (this.queryMode == "users")
				this.setTitle(this._messages.add_users_label);
			else
				this.setTitle(this._messages.add_users_groups_label);
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);

			if (this.permissionLabel)
				this._access_label.innerHTML = this.permissionLabel;

			// Set the cancel button label to Close
			this.cancelButtonLabel = this._messages.close;
			this._applyButton = this.addButton(this._messages.apply_button_label, "_onApply", false, false);
			this._addButton = this.addButton(this._messages.add_permission_add_label, "_onAdd", false, false);
			this.setResizable(true);

			if (this._selector)
				this._selector.destroy();
			this._selector = new UserGroupSelector({
				selectedItems: [],
				showPseudoGroups: this.showPseudoGroups,
				defaultScope: this.defaultScope,
				filteredItems: this.filteredItems,
				queryMode: this.queryMode
			});
			this._userGroupSelector.set("content", this._selector);
			this._selector.startup();
			this._selector.createRendering(this.repository);
			if (this.permissions && this.permissions.length > 0) {
				this._accessBox.set("options", this.permissions);
				if (this.defaultPermission != null) {
					this._accessBox.set("value", this.defaultPermission); 
				}
				
				// Hide the dropdown if there is only one permission.
				if (this.permissions.length == 1) {
					domStyle.set(this._accessPane.domNode, "display", "none");
				}
			} else {
				// Hide the dropdown if there are no permissions.
				domStyle.set(this._accessPane.domNode, "display", "none");
			}

			connect.connect(this._selector, "onChange", this, "_onSelectedItemsChanged");
			connect.connect(this._selector, "_onChange", this, "onScopeChanged");
			connect.connect(this._selector, "_onNameTypeChanged", this, "onNameTypeChanged");
			this._onSelectedItemsChanged();
			this.logExit("postCreate");
		},

		/**
		 * @private
		 */
		_onApply: function() {
			var permission = this.permissions ? this._accessBox.get("value") : null;
			var selectedItems = this._selector.getSelectedItems();
			if (this.filteredItems) {
				this.filteredItems = this.filteredItems.concat(selectedItems);
				this._selector.setFilteredItems(this.filteredItems);
			}
			this._selector.clearSelectedItems();
			this._onSelectedItemsChanged();
			if (this.callback) {
				this.callback(permission, selectedItems);
			}
		},

		/**
		 * @private
		 */
		_onAdd: function() {
			this._onApply();
			this.onCancel();
		},

		/**
		 * Sets the focus in the form input.
		 */
		focus: function() {
			this.logEntry("focus");
			this._selector.focus();
			this.logExit("focus");
		},

		/**
		 * @private
		 */
		_onSelectedItemsChanged: function() {
			if (this._selector.getSelectedItems().length > 0) {
				this._applyButton.set("disabled", false);
				this._addButton.set("disabled", false);
			} else {
				this._applyButton.set("disabled", true);
				this._addButton.set("disabled", true);
			}
		},

		/**
		 * Returns the permissions selection widget.
		 */
		getPermissionsSelect: function() {
			return this._accessBox;
		},

		/**
		 * Returns the name type group radio button widget.
		 */
		getNameTypeGroupRadioButton: function() {
			return this._selector._nameTypeGroupRadioButton;
		},

		/**
		 * Fired when the scope changes.
		 */
		onScopeChanged: function(scope) {
		},

		/**
		 * Fired when the name type changes.
		 */
		onNameTypeChanged: function(scope) {
		},

		/**
		 * Cleans up the widget.
		 */
		destroy: function() {
			this._applyButton.destroy();
			this._addButton.destroy();
			this._selector.destroy();
			this.filteredItems = null;
			this.inherited(arguments);
		}

	});
});

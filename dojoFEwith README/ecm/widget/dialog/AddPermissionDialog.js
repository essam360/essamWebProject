/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/array",
	"dojo/_base/kernel",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dijit/Tooltip",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/form/Select",
	"ecm/widget/dialog/BaseDialog",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Desktop",
	"ecm/model/Permission",
	"ecm/model/UserGroup",
	"ecm/widget/_SecurityMixin",
	"ecm/widget/UserGroupSelector",
	"idx/html",
	"dojo/text!./templates/AddPermissionDialogContent.html"
], function(declare, lang, connect, array, kernel, construct, domClass, Tooltip, BorderContainer, ContentPane, Select, BaseDialog, LoggerMixin, Messages, Desktop, Permission, UserGroup, _SecurityMixin, UserGroupSelector, idxHtml, template) {
	/**
	 * @private Part of the SecurityPane widget.
	 * @name ecm.widget.dialog.AddPermissionDialog
	 * @class Provides a dialog box that is used to add permissions to a document or folder.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.AddPermissionDialog", [
		BaseDialog,
		_SecurityMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.dialog.AddPermissionDialog.prototype */

		// Path to the template
		contentString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			domClass.add(this.domNode, "ecmAddPermissionDialog");
			this.setTitle(this._messages.add_permissions_label);
			this.setMaximized(true);
			this.setSizeToViewportRatio(true);
			// Set the cancel button label to Close
			this.cancelButtonLabel = this._messages.close;
			this._applyButton = this.addButton(this._messages.apply_button_label, "_onApply", false, false);
			this._addButton = this.addButton(this._messages.add_permission_add_label, "_onAdd", false, false);
			this.setResizable(true);

			var isDocument = this.type == "document";
			this._loadPrivileges(this.repository, isDocument);
			if (this._selector)
				this._selector.destroy();
			this._selector = new UserGroupSelector({
				selectedItems: [],
				showPseudoGroups: this.repository._isP8(),
				showCreatorOwnerAccount: this.showCreatorOwnerAccount,
				filteredItems: this.filteredItems,
				excludeCMAdminAccounts: true
			});
			this._userGroupSelector.set("content", this._selector);
			this._selector.startup();
			this._selector.createRendering(this.repository);

			Desktop.getConfiguredLabels(lang.hitch(this, function(configuredLabels) {
				var self = this;
				var selectOptions = [];
				array.forEach(this._privileges, function(entry, index) {
					var selectOption = {
						value: entry.id,
						label: configuredLabels.getLabelValue(entry.labelKey, kernel.locale)
					};
					selectOptions.push(selectOption);
				});
				// Add a pseudo NO_ACCESS privilege to the list for setting up deny permission
				if (this.repository._isP8()) {
					selectOptions.push({
						value: this._privilegeNoAccess.id,
						label: idxHtml.escapeHTML(configuredLabels.getLabelValue(this._privilegeNoAccess.labelKey, kernel.locale)),
					});
				}
				this._accessBox.addOption(selectOptions);
				this._accessBox.selected = true;
			}));

			if (this.repository._isP8() && this.enableFolderPropagationOptions && !isDocument) {
				domClass.remove(this._propagationPane, "dijitHidden");

				construct.create("div", {
					innerHTML: this._messages.propagation_label,
					"class": "dijitInline"
				}, this._propagationPane);

				this._propagationBox = new Select();
				var options = [];
				options.push({
					value: "direct",
					label: this._messages.permission_propagation_direct
				});
				options.push({
					value: "inheritance",
					label: this._messages.permission_propagation_onelevel
				});
				options.push({
					value: "infiniteInheritance",
					label: this._messages.permission_propagation_alllevels
				});
				this._propagationBox.addOption(options);
				construct.place(this._propagationBox.domNode, this._propagationPane);
			}

			connect.connect(this._selector, "onChange", this, "_onSelectedItemsChanged");
			this._onSelectedItemsChanged();

			this.logExit("postCreate");
		},

		/**
		 * @private
		 */
		_onApply: function() {
			var propagation = "direct";
			if (this._propagationBox) {
				propagation = this._propagationBox.get("value");
			}
			var privilege = this._accessBox.get("value");
			var selectedItems = this._selector.getSelectedItems();
			var permissions = this._getPermissions(privilege, selectedItems, propagation);
			if (this.filteredItems) {
				this.filteredItems = this.filteredItems.concat(selectedItems);
				this._selector.setFilteredItems(this.filteredItems);
			}
			this._selector.clearSelectedItems();
			this._onSelectedItemsChanged();
			if (this.callback) {
				this.callback(privilege, permissions, propagation);
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
		_getPermissions: function(privilege, selectedItems, propagation) {
			this.logEntry("getPermissions");
			var permissions = [];

			var inheritableDepth = propagation === "inheritance" ? 1 : propagation === "infiniteInheritance" ? -1 : 0;
			if (inheritableDepth != 0) {
				this._loadPrivileges(this.repository, this.type == "document", true);	// Loads inheritance type template
			} else {
				this._loadPrivileges(this.repository, this.type == "document", false);	// Loads direct type template
			}
			var mask = this._getPrivilegeMask(privilege);
			var self = this;
			array.forEach(selectedItems, function(entry, index) {
				var granteeType = (entry.isInstanceOf && entry.isInstanceOf(UserGroup)) ? Permission.GRANTEE_TYPE.GROUP : Permission.GRANTEE_TYPE.USER;
				var accessType = Permission.ACCESS_TYPE.ALLOW;
				if (privilege == self._privilegeNoAccess.id) {
					accessType = Permission.ACCESS_TYPE.DENY;
				}
				permissions.push(new Permission({
					id: entry.id,
					name: entry.shortName,
					displayName: entry.displayName,
					emailAddress: entry.emailAddress,
					granteeType: granteeType,
					accessMask: mask,
					accessType: accessType,
					inheritableDepth: inheritableDepth,
					permissionSource: Permission.PERMISSION_SOURCE.DIRECT
				}));
			});

			this.logExit("getPermissions");

			return permissions;
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
		 * Cleans up the widget.
		 */
		destroy: function() {
			this._applyButton.destroy();
			this._addButton.destroy();
			this._selector.destroy();
			this._levels = null;
			this._privileges = null;
			this.filteredItems = null;
			this.inherited(arguments);
		}

	});
});

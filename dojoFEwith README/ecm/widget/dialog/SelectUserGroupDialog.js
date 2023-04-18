/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/aspect",
	"ecm/widget/UserGroupSelector",
	"./BaseDialog",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dojo/text!./templates/SelectUserGroupDialogContent.html"
], function(declare, lang, domClass, aspect, UserGroupSelector, BaseDialog, BorderContainer, ContentPane, template) {
	/**
	 * @name ecm.widget.dialog.SelectUserGroupDialog
	 * @class Provides a dialog box that is used to select users and groups.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.SelectUserGroupDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.SelectUserGroupDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		_repository: null,
		/**
		 * Indicates the query mode of the Select User Group dialog. Sets to all for both user and group queries and
		 * users for users query only. The default is all.
		 */
		queryMode: "all",
		/**
		 * Indicates the selection mode of the Select User Group dialog. Sets the selection mode to extended for multi
		 * select operation and single for single select operation. The default is extended.
		 */
		selectionMode: "extended",

		/**
		 * Search type for user search string: 2=prefix, 1=custom, 4=contains
		 * 
		 * @since 2.0.3.4
		 */
//		searchType: 1,
		/**
		 * Sets the cancel button label. The default is Close.
		 */
		cancelButtonLabel: ecm.messages.close,
		/**
		 * Sets to default query mode when using queryMode = all. The default is users.
		 * 
		 * @since 2.0.3
		 */
		defaultScope: "users",

		/**
		 * Array of object selected {@link ecm.model.User} or {@link ecm.model.UserGroup} to filter from the available
		 * list.
		 * 
		 * @since 2.0.3
		 */
		filteredItems: null,

		/**
		 * Hide the logged in user for the repository
		 * 
		 * @since 2.0.3.3
		 */
		hideCurrentUser: false,

		_callback: null,

		/**
		 * Constructor
		 */
		constructor: function(args) {
			this.expandable = false;
			if (args)
				this._callback = args.callback;
			
		},

		postCreate: function() {
			this.inherited(arguments);
			this.setResizable(true);
			if (this.selectionMode != "extended") {
				domClass.add(this.domNode, "ecmSelectUserDialog");
			} else {
				domClass.add(this.domNode, "ecmSelectUserGroupDialog");
			}
			this._addButton = this.addButton(this.messages.select_user_group_add_label, "onAdd", false, false);
			if (this.queryMode == "all") {
				if (this.selectionMode == "extended") {
					this.setTitle(this.messages.add_users_groups_label);
				} else {
					this.setTitle(this.messages.add_user_group_label);
				}
			} else {
				if (this.selectionMode == "extended") {
					this.setTitle(this.messages.add_users_label);
				} else {
					this.setTitle(this.messages.add_user_label);
				}
			}
		},

		/**
		 * @private
		 */
		_createRendering: function(repository) {
			if (this._selector)
				this._selector.destroy();

			this._selector = new UserGroupSelector({
				queryMode: this.queryMode,
				selectionMode: this.selectionMode,
				selectedItems: [],
				repository: repository,
				defaultScope: this.defaultScope,
				filteredItems: this.filteredItems,
				hideCurrentUser: this.hideCurrentUser
			});
			this.own(aspect.after(this._selector, "onLoaded", lang.hitch(this, "onLoaded")));
			this._userGroupSelector.set("content", this._selector);
			this._selector.startup();
			this._selector.createRendering(repository);

			if (this.selectionMode == "extended") {
				this.connect(this._selector, "onChange", "_onSelectedItemsChanged");
			} else {
				this.connect(this._selector, "onSelectionChanged", "_onSelectedItemsChanged");
			}
			this._onSelectedItemsChanged();
		},

		/**
		 * Fired when the content group selector is loaded.
		 * 
		 * @since 2.0.3.3
		 */
		onLoaded: function() {
		},

		/**
		 * Set the value in the criteria text box and run the search.
		 * 
		 * @since 2.0.3.3
		 */
		setCriteriaTextBox: function(value) {
			if (this._selector) {
				this._selector._criteriaTextBox.set("value", value);
				this._selector._criteriaTextBox.set("disabled", false);
				this._selector.focus();
				if (value) {
					this._selector._searchButton.set("disabled", false);
					this._selector._onSearch();
				}
			}
		},

		/**
		 * Shows the dialog.
		 * 
		 * @param repository
		 *            An instance of {@link ecm.model.Repository}.
		 */
		show: function(repository) {
			var d = this.inherited(arguments);
			this._createRendering(repository);
			return d;
		},

		/**
		 * Event fired when the Add button is clicked.
		 */
		onAdd: function() {
			var selectedItems = this._selector.getSelectedItems();
			if (this._callback)
				this._callback(selectedItems);
			this.onCancel();
		},

		/**
		 * Event fired when the Close button is clicked.
		 */
		onCancel: function() {
			this._cleanUp();
		},

		/**
		 * @private
		 */
		_cleanUp: function() {
			this._selector.destroy();
			this._selector = null;
		},

		/**
		 * @private
		 */
		_onSelectedItemsChanged: function() {
			if (this._selector.getSelectedItems().length > 0) {
				this._addButton.set("disabled", false);
			} else {
				this._addButton.set("disabled", true);
			}
		},

		_nop: null
	});
});

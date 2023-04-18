/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/dom-class", //
	"dojo/string", //
	"dijit/_Widget", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/layout/ContentPane", //
	"./RangeBoundTextBox", //
	"./UserGroupSelector", //
	"dojo/text!./templates/UserGroupSelectorPane.html"
], //
function(declare, //
lang, //
domClass, //
string, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
ContentPane, //
RangeBoundTextBox, //
UserGroupSelector, //
template) {

	/**
	 * @name ecm.widget.UserGroupSelectorPane
	 * @class Provides a pane that is used by the <code>SinglePropertyEditorFactory</code> class to select users or
	 *        groups for assigning property value. The widget can be configured to display voting approval properties
	 *        for Entry Template workflows.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.UserGroupSelectorPane", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.UserGroupSelectorPane.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_messages: ecm.messages,

		votingParameter: null,
		votingNumber: null,
		queryAcrossDomains: false,
		_selectedItems: null,

		constructor: function() {
			if (!this._selectedItems) {
				this._selectedItems = [];
			}

			this._messages = ecm.messages;
			this._arguments = arguments[0];

			if (this._arguments.selectedItems) {
				this._selectedItems = lang.clone(this._arguments.selectedItems);
			}

			if (this._arguments.votingNumber) { // Enable approval voting for workflows
				this._votingNumber = lang.clone(this._arguments.votingNumber);
			}

			this._showPseudoUsers = this._arguments.showPseudoUsers;
		},

		postCreate: function() {
			this.inherited(arguments);

			if (this._votingNumber && this._votingNumber != '') {
				var constraints = {};
				constraints.min = 0;
				constraints.max = 2147483647;
				constraints.places = 0;
				this._votingTotal.set("constraints", constraints);
				this._votingTotal.set("required", true);
				this._votingTotal.set("invalidMessage", this._messages.property_integer_invalid);
				this._votingTotal.set("rangeMessage", string.substitute(this._messages.property_integer_range, [
					"1",
					"2147483647"
				]));
				this._votingTotal.set("displayedValue", this._votingNumber);
				domClass.add(this.domNode, "ecmUserGroupSelectorVotingPane");
			} else {
				domClass.add(this._votingSection, "dijitHidden");
				domClass.add(this.domNode, this._showPseudoUsers ? "ecmUserGroupSelectorWithPseudoUsersPane" : "ecmUserGroupSelectorPane");
			}
		},

		/**
		 * Sets the repository.
		 * 
		 * @param repository
		 *            An instance of {@link ecm.model.Repository}
		 */
		setRepository: function(repository) {
			this.repository = repository;
		},

		/**
		 * Returns the selected item display values. The display values are used by the DropDownInput multi-value
		 * picker.
		 * 
		 * @returns A comma delimited list of the display values.
		 */
		getLabel: function() {
			var label = "";
			var items = this._getItems();
			if (!this._showPseudoUsers || items.length) {
				var items = this._getItems();
				for (var i = 0; i < items.length; i++) {
					var currentItem = items[i];
					if (i > 0) {
						label += ", ";
					}
					label += this.repository._isP8() ? currentItem.displayName : currentItem.name;
				}
			} else {
				label = this._messages.anyone;
			}
			return label;
		},

		/**
		 * Returns the selected item values. The values are used by the DropDownInput multi-value picker.
		 * 
		 * @returns A comma delimited list of the values.
		 */
		getValue: function() {
			var values = this._getItems();
			if (this._votingNumber) {
				if (values != null) {
					var value = values[0];
					lang.mixin(value, {
						_votingParameter: this.votingParameter,
						_votingNumber: this._votingTotal.get("displayedValue")
					});
				}
			}
			return values;
		},

		_getItems: function() {
			if (this._selector) {
				return this._selector.getSelectedItems();
			} else {
				return this._selectedItems;
			}
		},

		/**
		 * Sets the selected items list. The selected items are displayed in the selected list.
		 * 
		 * @param selectedItems
		 *            An array of {@link ecm.model.User} or {@link ecm.model.UserGroup}
		 */
		setSelectedItems: function(selectedItems) {
			this._selectedItems = selectedItems;
			if (this._selector) {
				this._selector.setSelectedItems(this._selectedItems);
			} else {
				// Defer
				if (!this._arguments)
					this._arguments = new Object();
				this._arguments.selectedItems = this._selectedItems;
			}
		},

		/**
		 * Returns the current selected users and groups
		 * 
		 * @return An array of {@link ecm.model.User} and/or {@link ecm.model.UserGroup} object.
		 */
		getSelectedItems: function() {
			return this._getItems();
		},

		/**
		 * Sets the filtered items list. The filtered items are filtered out from the available list.
		 * 
		 * @param filteredItems
		 *            An array of {@link ecm.model.User} or {@link ecm.model.UserGroup}
		 */
		setFilteredItems: function(filteredItems) {
			this._filteredItems = filteredItems;
		},

		/**
		 * Event fired when showing the pane.
		 */
		onShow: function() {
			if (!this._selector) { // Create the user group selector here due to IE issue with infinite resize calls when pane is not yet visible.
				this._selector = new UserGroupSelector(this._arguments);
				this._userGroupSelector.appendChild(this._selector.domNode);
				domClass.add(this._selector.domNode, "userGroupSelector"); // Set the user group selector widget size
				this._selector.startup();
				this._selector.createRendering(this.repository);
				if (this.selectionMode == "single")
					this.connect(this._selector, "onChange", "onChange");
			} else if (this._selectedItems) {
				this._selector.setSelectedItems(this._selectedItems); // Set the pre-selected items
			}
			if (this._filteredItems) {
				this._selector.setFilteredItems(this._filteredItems); // Set the available list filtered items
			}
			this._selector.onShow();
			if (this.votingNumber) {
				this._votingNumber = lang.clone(this.votingNumber);
				this._votingTotal.set("displayedValue", this._votingNumber);
			}
		},

		/**
		 * Event fired when the OK button is clicked.
		 */
		onSave: function() {
			if (this._votingNumber) {
				var votingNumber = this._votingTotal.get("displayedValue");
				if (votingNumber == null || votingNumber == "") {
					return false;
				} else {
					var isValid = this._votingTotal.isValid();
					if (!isValid) {
						return false;
					}
				}
				this.votingNumber = lang.clone(votingNumber);
			}
			this._selectedItems = this._selector.getSelectedItems();
		},

		/**
		 * Event fired after the available list double click event.
		 */
		onChange: function() {
		},

		/**
		 * Resizes the widget
		 */
		resize: function(changeSize) {
			if (this._selector)
				this._selector.resize(changeSize);
		},

		/**
		 * Cleans up the widget
		 */
		destroy: function() {
			this.inherited(arguments);

			if (this._selector)
				this._selector.destroy();
		}
	});
});

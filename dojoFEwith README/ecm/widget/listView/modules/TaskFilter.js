/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/dom-construct",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/keys",
	"dijit/form/CheckBox",
	"dijit/form/Select",
	"dijit/form/Button",
	"ecm/widget/FilterTextBox",
	"ecm/widget/listView/modules/_Module",
	"ecm/model/Desktop"
],

function(declare, lang, event, construct, domClass, style, keys, CheckBox, Select, Button, FilterTextBox, Module, Desktop) {

	/**
	 * @name ecm.widget.listView.modules.TaskFilter
	 * @class This content list module provides filter capability via a FilterTextBox for tasks listing panes.
	 * @augments ecm.widget.listView.modules._Module
	 */
	return declare("ecm.widget.listView.modules.TaskFilter", [
		Module
	], {
		/** @lends ecm.widget.listView.modules.TaskFilter.prototype */

		name: 'taskFilter',

		showUserOnlyCheckbox: true,

		showFilterButton: true,

		getAPIPath: function() {
			return {
				taskFilter: this
			};
		},

		/**
		 * Preload listens to events.
		 */
		preload: function() {
			this.domNode = construct.create("span", {
				"class": "filterData"
			});

			if (this.showUserOnlyCheckbox) {
				//user only checkbox
				this.userCheckBox = new CheckBox({
					name: "userCheckbox",
					id: this.contentList.id + "_userCheckbox",
					value: true,
					style: "vertical-align: middle;"
				});
				construct.place(this.userCheckBox.domNode, this.domNode);
				this.connect(this.userCheckBox, "onClick", "onUserCheckboxClicked");

				this.setUserCheckBox();

				//Create the user checkbox label
				construct.create("label", {
					"for": this.contentList.id + "_userCheckbox",
					innerHTML: ecm.messages.currentUser,
					style: "margin-right: 10px;"
				}, this.domNode);
			}

			//Create the user checkbox label
			construct.create("label", {
				"for": this.contentList.id + "_filterSelect",
				innerHTML: ecm.messages.currentUser,
				style: "display:none"
			}, this.domNode);

			// Create the filter text box
			this.filterTextBox = new FilterTextBox({
				style: "margin-right: 10px;",
				placeHolder: ecm.messages.nameContains,
				"aria-label": ecm.messages.searchFor
			});

			this.connect(this.filterTextBox.domNode, "onkeydown", lang.hitch(this, function(e) {
				if (e.keyCode == keys.ENTER) {
					this.onTextFilter(this.filterTextBox.get("value"));
					event.stop(e);
				}
			}));

			construct.place(this.filterTextBox.domNode, this.domNode);
		},

		/**
		 * Destroy.
		 */
		destroy: function() {
			var t = this;
			t._cleanUp();
			t.inherited(arguments);
		},

		/**
		 * @private Cleans up the widgets created.
		 */
		_cleanUp: function() {
			var t = this;
			if (t.filterTextBox) {
				t.filterTextBox.destroy();
			}

			if (t.userCheckBox) {
				t.userCheckBox.destroy();
			}
		},

		/**
		 * Clears the filter.
		 */
		clearFilter: function() {
			var t = this;
			t.filterTextBox.set("value", "");
			t.onTextFilter("");
			t.onClearFilter();
		},

		reset: function() {
			this.filterTextBox.set("value", "");
			this.userCheckBox.set("checked", false);
			if (this.filterSelect && this.filterSelectOptions)
				this.filterSelect.set("value", this.filterSelectOptions[0].value);
		},

		/**
		 * Event invoked when the user enters values into the text filter box
		 */
		onTextFilter: function(value) {

		},

		/**
		 * Event invoked when the user clears the filter box
		 */
		onClearFilter: function() {

		},

		/**
		 * Event invoked when the user clicks on the user checkbox
		 */
		onUserCheckboxClicked: function(value) {

		},

		setUserCheckBox: function() {
			//automatically disable the user checkbox and check it if the user is just a task user and not a task admin
			//that user can only see its own tasks
			var isTaskUserOnly = !Desktop.taskManager.isTaskAdmin() && Desktop.taskManager.isTaskUser();
			if (isTaskUserOnly) {
				this.userCheckBox.set("checked", true);
				this.userCheckBox.set("disabled", true);
			} else {
				this.userCheckBox.set("checked", Desktop.taskManager.showCurrentUserOnly);
			}
		}
	});
});

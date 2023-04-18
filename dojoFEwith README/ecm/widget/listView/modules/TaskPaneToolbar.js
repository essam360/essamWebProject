/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/event",
	"dojo/_base/array",
	"dojo/dom-class",
	"dojo/dom-geometry",
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/Menu",
	"dijit/registry",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/widget/ActionMenu",
	"ecm/widget/listView/modules/Toolbar2",
	"ecm/model/Desktop",
	"ecm/model/Action",
	"ecm/MessagesMixin"
], //
function(declare, lang, event, array, domClass, domGeom, connect, domConstruct, Button, DropDownButton, Menu, registry, UnifiedSearchTemplate, ActionMenu, Toolbar, Desktop, Action, MessagesMixin) {

	/**
	 * @name ecm.widget.listView.modules.TaskPaneToolbar
	 * @class This content list module provides toolbar capability for the task pane.
	 * @augments ecm.widget.listView.modules.Toolbar
	 */

	return declare("ecm.widget.listView.modules.TaskPaneToolbar", [
		Toolbar
	], {
		/** @lends ecm.widget.listView.modules.TaskPaneToolbar.prototype */

		name: 'taskPaneToolbar',
		showCreateScheduleToolbarAction: true,

		_createScheduleActionsMenuItems: function() {
			var t = this;
			var childMenuItems = t.scheduleActionsButton.dropDown.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.destroy();
			}, t);

			if (!t._scheduleActionMenuCreator) {
				t._scheduleActionMenuCreator = new ActionMenu();
			}

			t._loadScheduleActionMenuItems();
		},

		_loadScheduleActionMenuItems: function() {
			var t = this;
			var actions = [];
			var asyncTaskTypes = Desktop.taskManager.asyncTaskTypes;
			array.forEach(asyncTaskTypes, function(asyncTaskType) {
				if (asyncTaskType.canCreate && asyncTaskType.categorization == this.categorization) {
					var action = new Action({
						id: asyncTaskType.id,
						name: asyncTaskType.name,
						global: true,
						action: "actionScheduleAsyncTask"
					});
					actions.push(action);
				}
			}, this);

			if (actions.length == 0)
				this._cleanup();
			else {
				var menu = t._scheduleActionMenuCreator.createMenu(actions, null, "", null, Desktop.getAuthenticatingRepository(), null, this.contentList.getResultSet(), {
					widget: this.contentList
				});

				array.forEach(menu.getChildren(), function(child) {
					this.scheduleActionsButton.dropDown.addChild(child);
				}, this);
			}
		},

		/**
		 * Cleans up the toolbar buttons.
		 */
		cleanUpToolButtons: function() {
			this._cleanup();

			this.inherited(arguments);
		},

		_cleanup: function() {
			var t = this;
			// Delete the toolbar buttons
			if (t.scheduleActionsButton) {
				if (t.scheduleActionsButton.dropDown) {
					t.scheduleActionsButton.dropDown.destroyRecursive();
					t.scheduleActionsButton.dropDown = null;
				}
				t.scheduleActionsButton.destroyRecursive();
				t.scheduleActionsButton = null;
			}
		},

		/**
		 * Creates the toolbar buttons. Gets the button actions from the resultset.
		 */
		onToolbarButtonsCreated: function() {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet(), buttonArea = t.containerNode;

			var asyncTaskTypes = Desktop.taskManager.asyncTaskTypes;
			var canCreateTypes = 0;
			for ( var i in asyncTaskTypes) {
				if (asyncTaskTypes[i] && asyncTaskTypes[i].canCreate)
					canCreateTypes++;
			}

			if (canCreateTypes != 0) {
				if (t.scheduleActionsButton) {
					t.scheduleActionsButton.destroyRecursive();
					t.scheduleActionsButton = null;
				}

				if (!t.scheduleActionsButton) {
					// Create the actions dropdown button
					t.scheduleActionsButton = new DropDownButton({
						optionsTitle: "Actions",
						dropDown: new Menu({
							style: "display: none;"
						}),
						label: ecm.messages.taskSchedulerPane_scheduleTask
					});
					t.connect(t.scheduleActionsButton.dropDown, "onOpen", "_createScheduleActionsMenuItems");
					// Block right-click event, so the browser doesn't show an annoying right-click window
					t.connect(t.scheduleActionsButton.domNode, "oncontextmenu", "_stopEvent");
					t.toolbar.domNode.insertBefore(t.scheduleActionsButton.domNode, t.actionsButton.domNode);
				}
			}
		}
	});
});

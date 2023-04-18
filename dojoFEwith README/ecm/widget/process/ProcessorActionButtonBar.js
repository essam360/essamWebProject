/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/_base/array",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/Button",
	"dijit/MenuItem",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Action",
	"dojo/text!./templates/ProcessorActionButtonBar.html"
],

function(declare, domClass, construct, array, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, MenuItem, LoggerMixin, Messages, Action, template) {

	/**
	 * @name ecm.widget.process.ProcessorActionButtonBar
	 * @class Provides the Step processor custom action button bar for IBM CM8 workflow processors.
	 * @augments dijit._Widget
	 * @since 2.0.2
	 */
	return declare("ecm.widget.process.ProcessorActionButtonBar", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.ProcessorActionButtonBar.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_buttons: null,
		_messages: ecm.messages,

		constructor: function() {
			this.logEntry("constructor");
			if (!this._buttons) {
				this._buttons = [];
			}
			this.messages = ecm.messages;
			this.logExit("constructor");
		},

		_addButton: function(action, callback, asyncCallback, workItem, stepRoutingLayout) {
			if (action.pluginAction && action.pluginAction.actionModelClass && action.pluginAction.actionModelClass.length > 0) {
				var self = this;
				var widgetReq = action.pluginAction.actionModelClass.split('.').join('/');
				require([
					widgetReq
				], function(cls) {
					var actionObj = new cls(action.pluginAction);
					var button = new Button({
						disabled: false,
						label: action.pluginAction.label,
						action: actionObj,
						onClick: function(evt) {
							this.action.performAction(workItem.repository, [
								workItem
							], callback, null, null, {
								stepRoutingLayout: stepRoutingLayout
							});
						}
					});
					construct.place(button.domNode, self.buttonBar, "first");
					self._buttons.push(button);
					asyncCallback(button);
				});
			} else {
				var actionObj = null;
				var label = action.name;
				if (action.pluginAction) {
					actionObj = new Action(action.pluginAction);
					label = action.pluginAction.label;
				}

				var button = new Button({
					disabled: false,
					label: label,
					action: actionObj,
					onClick: function(evt) {
						if (this.action) {
							this.action.performAction(workItem.repository, [
								workItem
							], callback, null, null, {
								stepRoutingLayout: stepRoutingLayout
							});
						} else if (callback) {
							callback(evt);
						}
					}
				});
				construct.place(button.domNode, this.buttonBar, "first");
				this._buttons.push(button);
				asyncCallback(button);
			}
		},

		/**
		 * Creates the custom action buttons on the button bar.
		 * 
		 * @param actions
		 *            An array of action name strings.
		 * @param callback
		 *            A callback function to be called after the button has been created.
		 * @param workItem
		 *            A handle to the {@link ecm.model.WorkItem} object within the step processor.
		 * @param stepRoutingLayout
		 *            A handle to the {@link ecm.widget.process.StepRoutingLayout} containing this button bar.
		 */
		createActionButtons: function(actions, callback, workItem, stepRoutingLayout) {
			var actionButtons = [];
			if (actions.length < 4) {
				for (var j = 0; j < actions.length; j++) {
					this._addButton(actions[j], function(evt) {
						var button = dijit.getEnclosingWidget(evt.target);
						callback(button.label);
					}, function(actionButton) {
						actionButtons.push(actionButton);
					}, workItem, stepRoutingLayout);
				}
			} else { // If more than 3 actions, create drop down button for rest
				var actionButtonDropDown;
				for (var j = 2; j < actions.length; j++) {
					if (j == 2) {
						this._actionMenu = new dijit.Menu();
						actionButtonDropDown = new dijit.form.DropDownButton({
							label: this._messages.process_morecustomaction_button_label,
							dropDown: this._actionMenu
						});
						this._buttons.push(actionButtonDropDown);
					}
					this._createActionMenuItem(actions[j], callback, workItem, stepRoutingLayout);
				}
				actionButtons.push(actionButtonDropDown);
				construct.place(actionButtonDropDown.domNode, this.buttonBar, "first");
				for (var j = 1; j >= 0; j--) {
					var action = actions[j];
					this._addButton(action, function(evt) {
						var button = dijit.getEnclosingWidget(evt.target);
						callback(button.label);
					}, function(actionButton) {
						actionButtons.push(actionButton);
					}, workItem, stepRoutingLayout);
				}
			}
			return actionButtons;
		},

		_createActionMenuItem: function(action, callback, workItem, stepRoutingLayout) {
			var self = this;

			if (action.pluginAction && action.pluginAction.actionModelClass && action.pluginAction.actionModelClass.length > 0) {
				var self = this;
				var widgetReq = action.pluginAction.actionModelClass.split('.').join('/');
				require([
					widgetReq
				], function(cls) {
					var actionObj = new cls(action.pluginAction);

					var mi = new dijit.MenuItem({
						label: action.pluginAction.label,
						action: actionObj,
						disabled: false,
						onClick: function(evt) {
							if (this.action) {
								this.action.performAction(workItem.repository, [
									workItem
								], callback, null, null, {
									stepRoutingLayout: stepRoutingLayout
								});
							} else {
								var menuItem = dijit.getEnclosingWidget(evt.target);
								callback(menuItem.label);
							}
						}
					});
					self._actionMenu.addChild(mi);
				});
			} else {
				var actionObj = null;
				var label = action.name;
				if (action.pluginAction) {
					actionObj = new Action(action.pluginAction);
					label = action.pluginAction.label;
				}

				var mi = new dijit.MenuItem({
					label: label,
					action: actionObj,
					disabled: false,
					onClick: function(evt) {
						if (this.action) {
							this.action.performAction(workItem.repository, [
								workItem
							], callback, null, null, {
								stepRoutingLayout: stepRoutingLayout
							});
						} else {
							var menuItem = dijit.getEnclosingWidget(evt.target);
							callback(menuItem.label);
						}
					}
				});
				this._actionMenu.addChild(mi);
			}
		},

		/**
		 * Removes all the buttons that have been created.
		 */
		removeAll: function() {
			if (this.buttonBar.childNodes.length > 0) {
				var count = this.buttonBar.childNodes.length - 1;
				for (var i = count; i >= 0; i--) {
					this.buttonBar.removeChild(this.buttonBar.childNodes[i]);
				}
			}
			if (this._buttons) {
				for ( var i in this._buttons) {
					this._buttons[i].destroyRecursive();
					this._buttons[i] = null;
				}
				this._buttons = [];
			}
		},

		destroy: function() {
			this.removeAll();
			this._buttons = null;
			this.inherited(arguments);
		}
	});
});

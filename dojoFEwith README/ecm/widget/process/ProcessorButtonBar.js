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
	"dojo/text!./templates/ProcessorButtonBar.html"
],

function(declare, domClass, construct, array, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, Button, MenuItem, LoggerMixin, Messages, template) {

	/**
	 * @name ecm.widget.process.ProcessorButtonBar
	 * @class Provides the Step processor button bar for IBM FileNet P8 workflow processors.
	 * @augments dijit._Widget
	 */
	return declare("ecm.widget.process.ProcessorButtonBar", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.process.ProcessorButtonBar.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_buttons: null,
		_separators: null,
		_messages: ecm.messages,

		constructor: function() {
			this.logEntry("constructor");
			if (!this._buttons) {
				this._buttons = [];
			}
			if (!this._separators) {
				this._separators = [];
			}
			this.messages = ecm.messages;
			this.logExit("constructor");
		},

		/**
		 * Called to set the display state on the Save button to be shown.
		 */
		showSaveButton: function() {
			domClass.remove(this.saveButton.domNode, "dijitHidden");
		},

		/**
		 * Returns the buttons contained in this button bar.
		 * 
		 * @since 2.0.3
		 */
		getButtons: function() {
			return this._buttons;
		},

		_addButton: function(label, callback) {
			var button = new Button({
				disabled: false,
				label: label,
				onClick: function(evt) {
					if (callback) {
						callback(evt);
					}
				}
			});
			construct.place(button.domNode, this.buttonBar, "first");
			this._buttons.push(button);
			return button;
		},

		/**
		 * Adds a separator to the button bar.
		 * 
		 * @param space
		 *            A boolean value to indicate whether to add an extra space character after the separator.
		 */
		addSeparator: function(space) {
			var innerHTML = "|";
			if (space) {
				innerHTML = "|&nbsp;";
			}
			var separator = construct.create("div", {
				innerHTML: innerHTML
			});
			this._separators.push(separator);
			domClass.add(separator, "dijitInline separator");
			construct.place(separator, this.buttonBar, "first");
		},

		/**
		 * Called to set the display state on the Get Next component to be shown.
		 * 
		 * @param isChecked
		 *            A boolean value indicating if the get next check box should be selected.
		 */
		showGetNextCheckBox: function(isChecked) {
			domClass.remove(this.getNextNode, "dijitHidden");
			this.getNextCheckbox.set("checked", isChecked);
		},

		/**
		 * Returns a boolean value indicating whether the Get Next check box is checked.
		 * 
		 * @returns {Boolean} A value of <code>true</code> if get next check box is checked, <code>false</code>
		 *          otherwise.
		 */
		isGetNextEnabled: function() {
			return this.getNextCheckbox.get("checked");
		},

		/**
		 * Creates the <strong>Move to In-basket</strong> button on the button bar.
		 * 
		 * @param callback
		 *            A callback function to be called after the button has been created.
		 */
		createMovetoInboxButton: function(callback) {
			return this._addButton(this._messages.process_movetoinbox_button_label, callback);
		},

		/**
		 * Creates the <strong>Return to Sender</strong> button on the button bar.
		 * 
		 * @param callback
		 *            A callback function to be called after the button has been created.
		 */
		createReturnButton: function(callback) {
			return this._addButton(this._messages.process_return_button_label, callback);
		},

		/**
		 * Creates the <strong>Reassign</strong> button on the button bar.
		 * 
		 * @param callback
		 *            A callback function to be called after the button has been created.
		 */
		createReassignButton: function(callback) {
			return this._addButton(this._messages.process_reassign_button_label, callback);
		},

		/**
		 * Creates the responses buttons on the button bar.
		 * 
		 * @param responses
		 *            An array of response strings.
		 * @param callback
		 *            A callback function to be called after the button has been created.
		 */
		createResponseButtons: function(responses, callback) {
			var responseButtons = [];
			if (responses.length < 4) {
				for (var j = 0; j < responses.length; j++) {
					var responseButton = this._addButton(responses[j], function(evt) {
						var button = dijit.getEnclosingWidget(evt.target);
						callback(button.label);
					});
					responseButtons.push(responseButton);
				}
			} else { // If more than 3 responses, create drop down button for rest
				var responseActionButton;
				for (var j = 2; j < responses.length; j++) {
					if (j == 2) {
						this._responseMenu = new dijit.Menu();
						responseActionButton = new dijit.form.DropDownButton({
							label: this._messages.process_responses_button_label,
							dropDown: this._responseMenu
						});

						this._buttons.push(responseActionButton);
					}
					this._createResponseMenuItem(responses[j], callback);
				}
				responseButtons.push(responseActionButton);
				construct.place(responseActionButton.domNode, this.buttonBar, "first");
				for (var j = 1; j >= 0; j--) {
					var response = responses[j];
					responseButtons.push(this._addButton(response, function(evt) {
						var button = dijit.getEnclosingWidget(evt.target);
						callback(button.label);
					}));
				}
			}

			return responseButtons;
		},

		/**
		 * Creates the dispatch button on the button bar, typically the <strong>Complete</strong> or <strong>Launch</strong>
		 * button.
		 * 
		 * @param label
		 *            A string holding the display label for the dispatch button.
		 * @param callback
		 *            A callback function to be called after the button has been created.
		 */
		createDispatchButton: function(label, callback) {
			return this.createResponseButtons([
				label
			], callback);
		},

		_createResponseMenuItem: function(response, callback) {
			var self = this;
			var mi = new dijit.MenuItem({
				label: response,
				disabled: false,
				onClick: function(evt) {
					var menuItem = dijit.getEnclosingWidget(evt.target);
					callback(menuItem.label);
				}
			});
			this._responseMenu.addChild(mi);
		},

		/**
		 * Removes all the buttons that have been created.
		 */
		removeAll: function() {
			if (this._responseMenu) {
				this._responseMenu.destroyRecursive();
				this._responseMenu = null;
			}
			if (this.buttonBar.childNodes.length > 0) {
				count = this.buttonBar.childNodes.length - 1;
				for (var i = count; i >= 0; i--) {
					var button = this.buttonBar.childNodes[i];
					// The dropdown is _responseMenu.
					if (button.dropDown) {
						button.dropDown = null;
					}
					this.buttonBar.removeChild(button);
				}
			}
			if (this._buttons) {
				for ( var i in this._buttons) {
					this._buttons[i].destroyRecursive();
					this._buttons[i] = null;
				}
				this._buttons = [];
			}
			if (this._separators) {
				for ( var i in this._separators) {
					construct.destroy(this._separators[i]);
					this._separators[i] = null;
				}
				this._separators = [];
			}
		},

		onSave: function() {
		},

		onCancel: function() {
		},

		destroy: function() {
			this.removeAll();
			this._buttons = null;
			this._separators = null;
			this.inherited(arguments);
		}
	});
});

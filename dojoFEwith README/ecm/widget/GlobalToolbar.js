/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/connect",
	"dojo/_base/lang",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dijit/registry",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"ecm/Messages",
	"ecm/model/Desktop",
	"dojo/text!./templates/GlobalToolbar.html"
], //         
function(declare, //
connect,//
lang, //
domClass, //
domConstruct, //
registry, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Menu, //
MenuItem, //
Button, //
DropDownButton, //
Messages, //
Desktop, //
template) {

	/**
	 * @name ecm.widget.GlobalToolbar
	 * @class Provides a widget that is used as a global toolbar for an IBM Content Navigator application.
	 * @augments dijit._Widget
	 * @deprecated As of 2.0.3. Use ecm.widget.Toolbar instead.
	 */
	return declare("ecm.widget.GlobalToolbar", [
		_Widget,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {
		/** @lends ecm.widget.GlobalToolbar.prototype */

		templateString: template,
		widgetsInTemplate: true,

		repository: null,

		constructor: function() {
			this.messages = ecm.messages;
			this.toolbarButtons = null;
		},

		postCreate: function() {
			this.inherited(arguments);

			var self = this;
			this.connect(ecm.model.desktop, "onLogin", function(repository) {
				self.setRepository(ecm.model.desktop.getInitialRepository());
			});
		},

		setRepository: function(repository) {
			if (this.repository == repository)
				return;

			this.repository = repository;

			if (this.toolbarButtons) {
				for ( var i = 0; i < this.toolbarButtons.length; i++) {
					var toolbarButton = this.toolbarButtons[i];
					if (toolbarButton && toolbarButton.destroy) {
						toolbarButton.destroy();
					}
				}
				this.toolbarButtons = null;
				this.actionMenuItems = null;

				domConstruct.empty(this.buttonArea);
			}

			if (this.repository)
				this._createToolButtons();
		},

		_createToolButtons: function() {
			var self = this;

			ecm.model.desktop.loadMenuActions("GlobalToolbar", lang.hitch(this, function(actions) {
				self.toolbarButtons = [];
				self.actionMenuItems = [];

				for ( var i in actions) {
					var action = actions[i];

					if (action.id == "Separator") {
						var separator = domConstruct.create("DIV", {
							innerHTML: "|"
						});
						domClass.add(separator, "dijitInline separator");
						domConstruct.place(separator, this.buttonArea, "last");
					} else if (action.subActions && action.subActions.length > 0) {
						var hasVisibleSubItems = false;
						var subActions = action.subActions;

						for ( var i in subActions) {
							var subaction = subActions[i];
							if (subaction.isVisible(self.repository)) {
								hasVisibleSubItems = true;
								break;
							}
						}

						if (hasVisibleSubItems) {
							var menu = new Menu({
								style: "display: none;"
							});

							for ( var i in subActions) {
								var subaction = subActions[i];
								if (subaction.isVisible(self.repository)) {
									var actionMenuItem = new MenuItem({
										label: subaction.name,
										onClick: function(evt) {
											var menuItem = registry.getEnclosingWidget(evt.target);
											menuItem.action.performAction(self.repository);
										},
										action: subaction
									});

									menu.addChild(actionMenuItem);
									self.actionMenuItems.push(actionMenuItem);
								}
							}

							var toolbarButton = new DropDownButton({
								label: action.name,
								dropDown: menu
							});
							self.toolbarButtons.push(toolbarButton);
							domConstruct.place(toolbarButton.domNode, this.buttonArea, "last");
						}
					} else {
						if (action.isVisible(self.repository)) {
							var toolbarButton = new Button({
								label: action.name
							});
							self.toolbarButtons.push(toolbarButton);
							toolbarButton.action = action;
							connect.connect(toolbarButton, "onClick", action, function() {
								this.performAction(self.repository);
							});
							domConstruct.place(toolbarButton.domNode, this.buttonArea, "last");
						}
					}
				}

				connect.connect(ecm.model.desktop, "onChange", this, "_updateToolbarState");
				self._updateToolbarState(ecm.model.desktop);
			}));
		},

		_updateToolbarState: function(updatedObject) {
			if (updatedObject == ecm.model.desktop) {
				for ( var i in this.toolbarButtons) {
					var toolbarButton = this.toolbarButtons[i];
					var action = toolbarButton.action;

					if (action) {
						var canPerform = action.canPerformAction(this.repository);
						toolbarButton.set('disabled', !canPerform);
					}
				}

				for (i in this.actionMenuItems) {
					var menuItem = this.actionMenuItems[i];
					var canPerform = menuItem.action.canPerformAction(this.repository);
					menuItem.set('disabled', !canPerform);
				}
			}
		}
	});
});

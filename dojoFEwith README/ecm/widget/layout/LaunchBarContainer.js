/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/json",
	"dojo/dom-class",
	"dojo/dom-style",
	"dojo/dom-construct",
	"dojo/_base/event",
	"dojo/keys",
	"dojo/_base/window",
	"dojo/aspect",
	"dijit/registry",
	"dijit/focus",
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/StackContainer",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/DropDownMenu",
	"dijit/MenuItem",
	"dijit/TooltipDialog",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"ecm/model/Desktop",
	"ecm/LoggerMixin",
	"./FlyoutMenuContainer",
	"./_LaunchBarButton",
	"./_LaunchBarDialogButton",
	"./_LaunchBarDialogPane",
	"./_LaunchBarPane",
	"../dialog/LoginDialog",
	"dojo/text!./templates/LaunchBarContainer.html"
],

function(declare, //
lang, //
array, //
dojojson, //
domClass, //
domStyle, //
domConstruct, //
event, //
keys, //
dojowin, //
aspect, //
registry, //
focusUtil, //
BorderContainer, //
ContentPane, //
StackContainer, //
Button, //
DropDownButton, //
DropDownMenu, //
MenuItem, //
TooltipDialog, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Desktop, //
LoggerMixin, //
FlyoutMenuContainer, //
_LaunchBarButton, //
_LaunchBarDialogButton, //
_LaunchBarDialogPane, //
_LaunchBarPane, //
LoginDialog, //
template) {

	/**
	 * @name ecm.widget.layout.LaunchBarContainer
	 * @class Provides a vertical bar that displays the features available in a layout. The vertical bar appears on the
	 *        leading side of the layout.
	 * @augments dijit.layout.BorderContainer, dijit._TemplatedMixin, ecm.LoggerMixin
	 */
	return declare("ecm.widget.layout.LaunchBarContainer", [
		BorderContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		LoggerMixin
	], {
		/** @lends ecm.widget.layout.LaunchBarContainer */

		layoutObj: null,

		templateString: template,

		// Set this to true if your widget contains other widgets
		widgetsInTemplate: true,

		gutters: false,

		/**
		 * @private
		 */
		_launchBarButtons: null,

		/**
		 * @private
		 */
		_panels: null,

		/**
		 * Controls the position of the feature bar in the container. Default is leading, which will display the button
		 * bar either on the left or right side of the UI depending on the whether the language is displayed
		 * left-to-right or right-to-left. Valid values includes "top", "bottom", "leading" and "trailing".
		 */
		featureBarPosition: "leading",

		/**
		 * Controls the style of the feature bar. The default is to display all feature icons as a toolbar. Setting this
		 * value to "dropdown" will create a single action drop-down button to contain all feature icons. The feature
		 * bar will only display a dropdown if "featureBarPosition" is top or bottom.
		 */
		featureBarStyle: "toolbar",
		
		/**
		 * A boolean value indicating whether to show the feature's context selector, i.e., a repository selector. The
		 * feature's context selector will only be displayed if <code>featureBarPosition</code> is "top" or "bottom" and
		 * <code>featureBarStyle</code> is "dropdown". Feature panes that wish to add a context selector to the feature
		 * bar must implement {@link ecm.widget.layout._LaunchBarPane#addFeatureContextSelector}.
		 * 
		 * @since 3.0.3
		 */
		showFeatureContextSelector: false,

		constructor: function(params) {
			if (!this._launchBarButtons) {
				this._launchBarButtons = {};
			}

			if (params.layoutObj != null) {
				this.layoutObj = dojojson.toJSON(params.layoutObj);
				this.setLayout(this.layoutObj);
			}

			if (params.featureBarPosition) {
				this.featureBarPosition = params.featureBarPosition;
			}

			if (this.featureBarPosition == "top" || this.featureBarPosition == "bottom") {
				this._contextualAreaPosition = "trailing";
				this._launchBarButtonAreaDesign = "sidebar";
			} else {
				this._contextualAreaPosition = "bottom";
				this._launchBarButtonAreaDesign = "headline";
			}

			this._panels = {};
		},

		destroy: function() {
			this._clearLayout();
			this.inherited(arguments);
		},

		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);

			if (this.featureBarPosition == "top") {
				this.showFlyouts = false;
				domClass.add(this.launchBarButtonArea.domNode, "launchBarButtonAreaTop");
			} else if (this.featureBarPosition == "bottom") {
				this.showFlyouts = false;
				domClass.add(this.launchBarButtonArea.domNode, "launchBarButtonAreaBottom");
			} else if (this.featureBarPosition == "trailing") {
				this.showFlyouts = true;
				domClass.add(this.launchBarButtonArea.domNode, "launchBarButtonAreaTrailing");
				this.featureBarStyle == "toolbar";
			} else {
				this.showFlyouts = true;
				domClass.add(this.launchBarButtonArea.domNode, "launchBarButtonAreaLeading");
				this.featureBarStyle == "toolbar";
			}

			if (this.featureBarStyle == "dropdown") {
				this.showFlyouts = false;
			}
			else if (ecm.model.desktop.baseStyle != "classic"){
				// Disable flyouts for new base style.
				this.showFlyouts = false;
			}

			if (this.showFlyouts) {
				this.flyoutMenuContainer = new FlyoutMenuContainer({
					positionNode: this.launchBarButtonArea.domNode,
					showOnInit: false,
					position: this.featureBarPosition
				});

				this.own(aspect.after(this.flyoutMenuContainer, "hide", lang.hitch(this, function() {
					this.updateButtonsState(this.selectedButton, false);
				})));

				this.own(aspect.after(dojowin.body(), "onclick", lang.hitch(this, function(evt) {
					// Close all fly-outs if the login dialog is not open (user may be switching repositories)
					if (!LoginDialog.getLoginDialog().open)
						this.closeAllFlyouts();
				})));
			}

			this.logExit("postCreate");
		},

		/**
		 * Close all flyout menus
		 * 
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		closeAllFlyouts: function() {
			if (this.showFlyouts)
				this.flyoutMenuContainer.hide();
		},

		/**
		 * Sets the layout for the launch bar.
		 * 
		 * @param layout
		 *            JSON layout definition.
		 */
		setLayout: function(layoutConfig) {
			this.logEntry("setLayout");

			this.layoutObj = layoutConfig;
			this._clearLayout();

			if (this.featureBarStyle == "dropdown" && (this.featureBarPosition == "top" || this.featureBarPosition == "bottom")) {
				domClass.add(this.launchBarButtonArea.domNode, "launchBarFeatureDropDown");
				this._buildDropDown(this.layoutObj.selectedPane, this.layoutObj.selectedSecondaryPlugin);
			} else {
				this._buildButtonBar();

				if (this.layoutObj.selectedPane) {
					var button = this._launchBarButtons[this.layoutObj.selectedPane];
					if (button) {
						this.selectContentPane(button, this.layoutObj.selectedPane, null);
					}
				}
			}

			this.logExit("setLayout");
		},

		/**
		 * Returns all child panes in the launchbar container.
		 */
		getChildPanes: function() {
			return this._panels;
		},

		/**
		 * Return all launcher buttons
		 */
		getButtons: function() {
			return this._launchBarButtons;
		},

		/**
		 * Destroys existing buttons and panels.
		 * 
		 * @private
		 */
		_clearLayout: function() {
			if (this._launchBarButtons) {
				for ( var i in this._launchBarButtons) {
					var button = this._launchBarButtons[i];
					if (button.dropDown) {
						button.dropDown.destroy();
					}
					button.destroy();
				}
			}

			if (this.launchBarContentArea && this.launchBarContentArea.hasChildren()) {
				array.forEach(this.launchBarContentArea.getChildren(), lang.hitch(this, function(child) {
					this.launchBarContentArea.removeChild(child);
					child.destroy();
				}));
			}

			if (this._featureDropDownButton)
				this._featureDropDownButton.destroy();
			if (this.dropDownloginHandle)
				this.dropDownloginHandle.remove();

			if (this._featureDropDownMenu)
				this._featureDropDownMenu.destroy();

			this._panels = {};
		},

		/**
		 * Builds the button bar.
		 * 
		 * @private
		 */
		_buildButtonBar: function() {
			this.logEntry("_buildButtonBar");

			if (this.layoutObj && this.layoutObj.buttons && this.layoutObj.buttons.length > 0) {
				if (lang.isArray(this.layoutObj.buttons) && this.layoutObj.buttons.length > 1) {
					array.forEach(this.layoutObj.buttons, lang.hitch(this, function(button) {
						this._createButtonBarItem(button);
					}));
				} else { // only 1 launch bar item
					var button = lang.isArray(this.layoutObj.buttons) ? this.layoutObj.buttons[0] : this.layoutObj.buttons;
					this._createButtonBarItem(button);
					this.hideButtonBar();
				}
			} else {
				this.hideButtonBar();
			}

			this.logExit("_buildButtonBar");
		},

		/**
		 * Builds the feature drop down
		 * 
		 * @param selectedFeature
		 *            The ID of the selected feature.
		 * @private
		 */
		_buildDropDown: function(selectedFeature, secondaryPlugin) {
			this.logEntry("_buildDropDown");

			this._featureDropDownMenu = new DropDownMenu({
				style: "display: none;"
			});

			if (this.layoutObj && this.layoutObj.buttons && this.layoutObj.buttons.length > 0) {
				this.selectedMenuItem = null;
				array.forEach(this.layoutObj.buttons, lang.hitch(this, function(feature) {
					if (feature) {
						var menuItem = this._createFeatureMenuItem(feature);
						menuItem.buttons = [];
						this._featureDropDownMenu.addChild(menuItem);
						if (feature.id == selectedFeature)
							this.selectedMenuItem = menuItem;

						// If the feature has sub-features, we need to create those in the button bar
						if (lang.isArray(feature.secondaryPanes) && feature.secondaryPanes.length > 1) {
							var selectedIndex = this._getDefaultSecondaryPaneIndex(feature, secondaryPlugin);
							array.forEach(feature.secondaryPanes, lang.hitch(this, function(paneDef, count) {
								if (paneDef) {
									var selected = false;
									if (count == selectedIndex)
										selected = true;
									if (selectedIndex > 0)
										paneDef.preLoad = selected;

									if (paneDef.configurations == null) {
										// Pass the parent feature configuration information to the secondary pane
										paneDef.configurations = feature.configurations;
										paneDef.pluginConfiguration = feature.pluginConfiguration;
									}

									var buttonObj = new _LaunchBarButton({
										iconClass: paneDef.iconUrl,
										selected: selected,
										value: paneDef.id,
										label: paneDef.name,
										child: null,
										showLabel: true,
										tooltip: paneDef.featureTooltip,
										feature: paneDef,
										parentMenuItem: menuItem
									});
									menuItem.buttons.push(buttonObj);
									if (selected) {
										menuItem.lastSelectedButton = buttonObj;
									}

									this.connect(buttonObj.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
										event.stop(evt);
										this._buttonClick(buttonObj);
										return false;
									}));

									this._setupLaunchBarButton(buttonObj, paneDef);
								}
							}));
						} else { // only 1 launch bar item
							var paneDef = lang.isArray(feature.secondaryPanes) ? feature.secondaryPanes[0] : feature.secondaryPanes;
							if (paneDef) {
								var buttonObj = new _LaunchBarButton({
									iconClass: paneDef.iconUrl,
									selected: true,
									value: paneDef.id,
									label: paneDef.name,
									child: null,
									showLabel: true,
									tooltip: paneDef.featureTooltip,
									feature: paneDef,
									parentMenuItem: menuItem
								});
								menuItem.buttons.push(buttonObj);
								menuItem.lastSelectedButton = buttonObj;

								this.connect(buttonObj.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
									event.stop(evt);
									this._buttonClick(buttonObj);
									return false;
								}));

								this._setupLaunchBarButton(buttonObj, paneDef);
							}
						}
					}
				}));

				if (!this.selectedMenuItem) {
					var children = this._featureDropDownMenu.getChildren();
					this.selectedMenuItem = children[0];
				}

				this._featureDropDownMenu.startup();
				this._featureDropDownButton = new DropDownButton({
					label: this.selectedMenuItem.label,
					iconClass: this.selectedMenuItem.iconClass,
					name: "featureBarDropDown",
					dropDown: this._featureDropDownMenu
				});

				domConstruct.place(this._featureDropDownButton.domNode, this.launchBarButtons, "first");
				this._featureDropDownButton.startup();
				
				// Hide the button bar if there's only one feature. It's imperative that the button bar be hidden
				// before a feature is loaded because _selectChild depends on it to determine whether to add the 
				// feature's context selector (if visible) or leave it inside the feature pane (if hidden).
				if (lang.isArray(this.layoutObj.buttons) && this.layoutObj.buttons.length == 1)
					domStyle.set(this.launchBarButtonArea.domNode, "display", "none");

				// Select and load the default feature, if any
				if (selectedFeature) {
					this._featureDropDownMenu.set("value", selectedFeature);
					if (this.selectedMenuItem) {
						this.selectedMenuItem.set("disabled", true);
						this.selectContentPane(this.selectedMenuItem, selectedFeature, null);
						ecm.model.desktop.applyFeatureHelpInfo(selectedFeature);
					}
				}
				
				this.dropDownloginHandle = aspect.after(Desktop, "onLogin", lang.hitch(this, function() {
					// Always select the default feature, whether it's a fresh login or a "soft" login (user logs out and back in without reloading ICN)
					var menuItem = selectedFeature ? this.getMenuItemByID(selectedFeature) : null;
					if (!menuItem && this._getFeatureCount() > 0)
						menuItem = this._featureDropDownMenu.getChildren()[0];
					
					if (menuItem) {
						if (this._launchBarButtons && !menuItem.feature.secondaryPanes) {
							// Hide any secondary buttons as necessary if logging in on a feature that has no secondary buttons
							for ( var index in this._launchBarButtons) {
								var button = this._launchBarButtons[index];
								domStyle.set(button.domNode, "display", "none");
							}
						}
						this._menuItemClick(menuItem);
					}
				}));
			} else {
				this.hideButtonBar();
			}

			this.logExit("_buildDropDown");
		},

		_getDefaultSecondaryPaneIndex: function(feature, plugin) {
			var selectedIndex = 0;
			if (plugin != null) {
				array.some(feature.secondaryPanes, function(paneDef, count) {
					if (plugin == paneDef.plugin) {
						selectedIndex = count;
						return true;
					}
					return false;
				});
			}
			return selectedIndex;
		},
		
		_getFeatureCount: function() {
			var features = this._featureDropDownMenu ? this._featureDropDownMenu.getChildren() : this.launchBarButtons.children;
			return features ? features.length : 0;
		},

		/**
		 * @private
		 */
		_isButtonBarVisible: function() {
			var node = this.launchBarButtonArea.domNode;
			return !(domClass.contains(node, "dijitHidden") || domStyle.get(node, "display") === "none");
		},

		/**
		 * @private
		 * @since 2.0.2
		 */
		hideButtonBar: function() {
			if (!domClass.contains(this.launchBarButtonArea.domNode, "dijitHidden")) {
				domClass.add(this.launchBarButtonArea.domNode, "dijitHidden");
			}
		},

		/**
		 * Adds additional content panels to the content area.
		 * 
		 * @private
		 */
		_createContentPanels: function() {
			this.logEntry("_createContentPanels");

			if (this.layoutObj && this.layoutObj.containerPanes) {
				if (lang.isArray(this.layoutObj.containerPanes)) {
					array.forEach(this.layoutObj.containerPanes, lang.hitch(this, function(pane, index) {
						if (pane && pane.contentClass && pane.contentClass.length > 0) {
							this._addContentPanel(pane);
						}
					}));
				} else {
					this._addContentPanel(this.layoutObj.containerPanes);
				}
			}

			this.logExit("_createContentPanels");
		},

		/**
		 * Creates a single content panel and adds it to the content area. This is used to dynamically create content
		 * panels when needed.
		 * 
		 * @private
		 */
		_createContentPanel: function(uuid, callback) {
			if (this.layoutObj && this.layoutObj.containerPanes) {
				for ( var i in this.layoutObj.containerPanes) {
					var pane = this.layoutObj.containerPanes[i];
					if (pane && pane.name == uuid && pane.contentClass && pane.contentClass.length > 0) {
						this._addContentPanel(pane, callback);
					}
				}
			}
		},

		/**
		 * Add a single content panel to the content area
		 * 
		 * @private
		 */
		_addContentPanel: function(pane, callback) {
			this._createWidget({
				widgetName: pane.contentClass,
				name: pane.name,
				label: pane.title,
				selected: false,
				widgetParams: pane.params,
				callback: lang.hitch(this, function(widget) {
					//set the featureId of the additional content panels if they have it
					if (pane.featureId)
						widget.featureId = pane.featureId;

					this.launchBarContentArea.addChild(widget);

					this.connect(widget, "selectContentPane", lang.hitch(this, function(uuid, params) {
						var button = this._launchBarButtons[uuid];
						if (button) {
							this.selectContentPane(button, uuid, params);
						}
					}));

					this._panels[widget.UUID] = widget;
					if (callback) {
						callback(widget);
					}
				})
			});
		},

		/**
		 * Adds a new feature to the container, by creating it's button and panel.
		 * 
		 * @param feature
		 *            The feature to add to the container.
		 */
		addFeatureToContainer: function(feature) {
			this.logEntry("addFeatureToContainer");

			if (this._launchBarButtons && this._launchBarButtons[feature.id]) {
				this.logDebug(feature.id + "   already exists on the launchBarContainer");
			} else {
				if (this.layoutObj) {
					if (this.layoutObj.buttons)
						this.layoutObj.buttons.push();
					else
						this.layoutObj.buttons = [ feature.id ];
				}
				if (this.featureBarStyle == "toolbar") {
					this._createButtonBarItem(feature);

	 				this._createFeaturePanel(this._launchBarButtons[feature.id]);
	 				//This function is called for admin because we determine at runtime if the user should see the admin gear.
	 				//However, we should not create the panel until a user clicks the feature.  For Admin in the postCreate it would
	 				// load all the admin data and make many callbacks for additional admin data which would slow down login
	 				// for users that had access to admin .
	 				if(feature && feature.name != "Administration" || ecm.model.desktop.id == "admin")
	 					this._createFeaturePanel(this._launchBarButtons[feature.id]);
				} else { // handle drop down
					var menuItem = this._createFeatureMenuItem(feature);
					this._featureDropDownMenu.addChild(menuItem);
					if(feature && feature.name != "Administration" || ecm.model.desktop.id == "admin")
						this._createFeaturePanel(menuItem);
				}
			}

			this.logExit("addFeatureToContainer");
		},

		/**
		 * Removes the given feature from the container.
		 * 
		 * @param feature
		 *            The feature to remove.
		 */
		removeFeatureFromLayout: function(feature) {
			this.logEntry("removeFeatureFromLayout");

			if (this._launchBarButtons) {
				var button = this._launchBarButtons[feature.id];
				if (button) {
					this.launchBarButtons.removeChild(button.domNode);
					this._launchBarButtons[feature.id] = null;

					if (button.tooltip)
						button.tooltip = null;

					if (button.flyoutTooltip)
						button.flyoutTooltip.destroy();

					button.destroyRecursive();
				}
			}

			var child = this._panels[feature.id];
			if (child) {
				this.launchBarContentArea.removeChild(child);
				child.destroyRecursive();
				this._panels[feature.id] = null;
				//null out the pane's tooltip
				this._panels[child.UUID] = null;
			}

			// See if the feature exists in the feature drop-down
			if (this._featureDropDownMenu) {
				var menuItems = this._featureDropDownMenu.getChildren();
				var itemToRemove = null;
				for ( var i in menuItems) {
					var menuItem = menuItems[i];
					if (menuItem && menuItem.feature && menuItem.feature.id == feature.id) {
						itemToRemove = menuItem;
					}
				}

				if (itemToRemove.buttons && itemToRemove.buttons.length > 0) {
					for ( var i in itemToRemove.buttons) {
						var button = itemToRemove.buttons[i];

						if (button) {
							if (button.feature)
								this._launchBarButtons[button.feature.id] = null;
							if (button.child) {
								this.launchBarContentArea.removeChild(button.child);
								button.child.destroyRecursive();
								//null out the pane's tooltip
								this._panels[button.child.UUID] = null;
							}

							this.launchBarButtons.removeChild(button.domNode);
							button.destroyRecursive();
						}
					}
				}

				this._featureDropDownMenu.removeChild(itemToRemove);
			}

			this.logExit("removeFeatureFromLayout");
		},

		/**
		 * Creates the panel(s) associated with launch bar button.
		 * 
		 * @param button
		 *            Handle to the launch bar button or dialog button associated with the feature.
		 * @private
		 */
		_createFeaturePanel: function(button, callback) {
			if (button && button.feature && button.feature.featureClass && button.child == null) {
				this._createWidget({
					widgetName: button.feature.featureClass,
					name: button.feature.id,
					label: button.feature.name,
					selected: button.feature.selected || false,
					feature: button.feature,
					callback: lang.hitch(this, function(widget) {
						button.child = widget;
						this.launchBarContentArea.addChild(widget);
						var childObjUUID = widget.UUID;
						this._panels[childObjUUID] = widget;

						this.connect(widget, "selectContentPane", lang.hitch(this, function(paneId, params) {
							this.selectContentPane(this._launchBarButtons[paneId], paneId, params);
						}));

						if (this.showFlyouts) {
							this.connect(widget, "openButtonFlyout", lang.hitch(this, function(buttonId) {
								var buttonObj = this._launchBarButtons[buttonId];
								if (buttonObj) {
									this._createFeatureFlyout(buttonObj, lang.hitch(this, function(flyout) {
										if (buttonObj.dropDown != null) {
											buttonObj.dropDown.resizeable = true;
											this.flyoutMenuContainer.initWithDijitCallback(buttonObj.dropDown, buttonObj.domNode, lang.hitch(this, function() {
												this._onFlyoutShortCutClicked(buttonObj);
											}));
										}
									}));
								}
							}));
						}

						this.onFeaturePanelCreated(widget);
						if (callback)
							callback(widget);
					})
				});
			} else if (button && button.child != null) {
				if (callback)
					callback(button.child);
			}
		},

		/**
		 * Event method when a new feature panel is added to the launch bar container.
		 * 
		 * @param panel
		 *            The newly added {@link ecm.widget.layout._LaunchBarPane} widget.
		 */
		onFeaturePanelCreated: function(panel) {
		},

		/**
		 * Creates the flyout menu associated with a launch bar dialog button.
		 * 
		 * @param button
		 *            Handle to the launch bar dialog button associated with the feature.
		 * @private
		 */
		_createFeatureFlyout: function(button, callback) {
			if (button && button.feature && button.feature.popupWindowClass && button.dropDown == null && this.showFlyouts) {
				this._createPopupWindow({
					widgetName: button.feature.popupWindowClass,
					name: button.feature.id,
					label: button.feature.name,
					feature: button.feature,
					callback: lang.hitch(this, function(widget) {
						button.dropDown = widget;
						var tooltipUUID = widget.UUID;

						this._panels[tooltipUUID] = widget;

						this.connect(widget, "selectContentPane", lang.hitch(this, function(paneId, params) {
							this.selectContentPane(button, paneId, params);
						}));

						this.connect(widget, "closePopup", lang.hitch(this, function(evt) {
							this.flyoutMenuContainer.hide();
						}));

						this.onFeatureFlyoutCreated(widget);
						if (callback)
							callback(widget);
					})
				});
			} else if (button && button.dropDown) {
				if (callback)
					callback(button.dropDown);
			}
		},

		/**
		 * Event method when a new feature flyout panel is added to the launch bar container.
		 * 
		 * @param flyout
		 *            The newly added {@link ecm.widget.layout._LaunchBarDialogPane} widget.
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		onFeatureFlyoutCreated: function(flyout) {
		},

		/**
		 * Creates a new button bar item. A button bar item includes both the button and the view that should be shown
		 * when the button is clicked.
		 * 
		 * @param item
		 *            The JSON item definition for the launch bar item.
		 * @private
		 */
		_createButtonBarItem: function(feature) {
			this.logEntry("_createButtonBarItem");

			if (feature) { // It should never be null
				if (feature.separator) {
					domConstruct.create("div", {
						'class': "separator"
					}, this.launchBarButtons, "last");
				} else if (feature.iconUrl) { // icon class is required if it's not a separator
					var button = null;

					if (feature.popupWindowClass && this.showFlyouts) {
						button = new _LaunchBarDialogButton({
							iconClass: feature.iconUrl,
							selected: false,
							value: feature.id,
							label: feature.featureTooltip || feature.name, // prefer tooltip for accessibility
							child: null,
							dropDown: null,
							showLabel: false,
							tooltip: feature.featureTooltip,
							flyoutTooltip: feature.popupWindowTooltip,
							feature: feature
						});

						if (feature.preLoad) {
							this._createFeatureFlyout(button);
						}

						this.connect(button, "onShortcutButtonClicked", lang.hitch(this, function() {
							if (!button.disabled) {
								this._createFeatureFlyout(button, lang.hitch(this, function(flyout) {
									if (flyout != null) {
										flyout.resizeable = true;
										this.flyoutMenuContainer.initWithDijitCallback(flyout, button.domNode, lang.hitch(this, function() {
											this._onFlyoutShortCutClicked(button);
										}));
									}
								}));
							}
						}));
						this.connect(button.domNode, "onkeydown", lang.hitch(this, function(evt) {
							if (evt.keyCode === keys.F10 && evt.shiftKey) {
								event.stop(evt);

								if (!button.disabled) {
									this._createFeatureFlyout(button, lang.hitch(this, function(flyout) {
										if (flyout != null) {
											flyout.resizeable = true;
											this.flyoutMenuContainer.initWithDijitCallback(flyout, button.domNode, lang.hitch(this, function() {
												this._onFlyoutShortCutClicked(button);
											}));
										}
									}));
								}
								return false;
							}
						}));
						this.connect(button.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
							event.stop(evt);

							if (!button.disabled) {
								this._createFeatureFlyout(button, lang.hitch(this, function(flyout) {
									if (flyout != null) {
										flyout.resizeable = true;
										this.flyoutMenuContainer.initWithDijitCallback(flyout, button.domNode, lang.hitch(this, function() {
											this._onFlyoutShortCutClicked(button);
										}));
									}
								}));
							}
							return false;
						}));

					} else {
						button = new _LaunchBarButton({
							iconClass: feature.iconUrl,
							selected: false,
							value: feature.id,
							label: feature.featureTooltip || feature.name, // prefer tooltip for accessibility
							child: null,
							showLabel: false,
							tooltip: feature.featureTooltip,
							feature: feature
						});

						this.connect(button.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
							event.stop(evt);
							this._buttonClick(button);
							return false;
						}));
					}

					this._setupLaunchBarButton(button, feature);
				}
			}

			this.logExit("_createButtonBarItem");
		},

		/**
		 * Connects the launchbar button onClick event and adds it to the button DOM node.
		 * 
		 * @param button
		 *            Handle to the {@link ecm.widget.layout._LaunchBarButton} object.
		 * @param feature
		 *            Handle to the {@link ecm.model.Feature} object that defines this button.
		 * @private
		 */
		_setupLaunchBarButton: function(button, feature) {
			if (button && feature) {
				if (feature.preLoad) {
					this._createFeaturePanel(button);
				}
				this.launchBarButtons.appendChild(button.domNode);

				//register the normal button click event
				this.connect(button, "onClick", lang.hitch(this, function(evt) {
					if (feature.featureClass) {
						this._createFeaturePanel(button, lang.hitch(this, function(featurePane) {
							if (featurePane) {
								this._buttonClick(button);
							} else {
								//if there's no child, then just show the flyout menu if that exists
								this._createFeatureFlyout(button, lang.hitch(this, function(flyout) {
									if (flyout != null) {
										flyout.resizeable = true;
										this.flyoutMenuContainer.initWithDijitCallback(flyout, button.domNode, lang.hitch(this, function() {
											this._onFlyoutShortCutClicked(button);
										}));
									}
								}));
							}
						}));
						this.logDebug("_createButtonBarItem", "set desktop helpContext: " + feature.helpContext);
						ecm.model.desktop.applyFeatureHelpInfo(feature);
					} else if (button.parentMenuItem) {
						this._createFeaturePanel(button.parentMenuItem, lang.hitch(this, function(featurePane) {
							if (featurePane) {
								this._buttonClick(button);
							}
						}));
						this.logDebug("_createButtonBarItem", "set desktop helpContext: " + feature.helpContext);
						ecm.model.desktop.applyFeatureHelpInfo(feature);
					}
				}));

				this._launchBarButtons[feature.id] = button;
			}
		},

		/**
		 * Creates a new feature menu item.
		 * 
		 * @param feature
		 *            Feature definition to add to the feature drop down menu.
		 */
		_createFeatureMenuItem: function(feature) {
			var menuItem = new MenuItem({
				label: feature.name,
				iconClass: feature.iconUrl,
				feature: feature,
				child: null
			});

			if (feature.preLoad) {
				this._createFeaturePanel(menuItem, lang.hitch(this, function(featurePane) {
					menuItem.child = featurePane;
				}));
			}

			this.connect(menuItem, "onClick", lang.hitch(this, function(evt) {
				this._menuItemClick(menuItem);
			}));

			return menuItem;
		},

		_menuItemClick: function(menuItem, skipLoadingChild) {
			this.logEntry("_menuItemClick");
			this.logDebug("Selected menu item: " + menuItem.label);

			if (this.selectedMenuItem)
				this.selectedMenuItem.set("disabled", false);
			
			menuItem.set("disabled", true);

			if (this.selectedMenuItem && this.selectedMenuItem.buttons && this.selectedMenuItem.buttons.length > 0) {
				for ( var i in this.selectedMenuItem.buttons) {
					var button = this.selectedMenuItem.buttons[i];
					domStyle.set(button.domNode, "display", "none");
				}
			}

			if (menuItem.buttons && menuItem.buttons.length > 0) {
				for ( var i in menuItem.buttons) {
					var button = menuItem.buttons[i];
					domStyle.set(button.domNode, "display", "table-cell");
				}
			}

			this._featureDropDownButton.set("label", menuItem.label);
			this._featureDropDownButton.set("iconClass", menuItem.iconClass);

			if (!menuItem.child) {
				this._createFeaturePanel(menuItem, lang.hitch(this, function(featurePane) {
					menuItem.child = featurePane;
					this._buttonClick(menuItem, skipLoadingChild);
				}));
			} else {
				this._buttonClick(menuItem, skipLoadingChild);
			}
			
			if (menuItem.feature)
				ecm.model.desktop.applyFeatureHelpInfo(menuItem.feature);
			
			this.logExit("_menuItemClick");
		},

		/**
		 * Disables the feature button
		 */
		disableButton: function(uuid) {
			if (this._launchBarButtons) {
				var button = this._launchBarButtons[uuid];

				if (button) {
					button.disabled = true;
					domClass.add(button.domNode, "disabledIcon");
				}
			}
		},

		/**
		 * Updates the button state to indicate whether it is selected
		 */
		updateButtonsState: function(button, /*contentSet*/contentSet) {
			if (button.isInstanceOf(dijit.MenuItem)) {
				var featureId = button.feature && button.feature.id;
				if (contentSet && featureId) {
					this._featureDropDownButton.set("label", button.label);
					this._featureDropDownButton.set("iconClass", button.iconClass);
					this._featureDropDownMenu.set("value", featureId);
					if (this.selectedMenuItem)
						this.selectedMenuItem.set("disabled", false);
					button.set("disabled", true);
				}
			} else if (this._launchBarButtons) {
				for ( var i in this._launchBarButtons) {
					var item = this._launchBarButtons[i];

					if (button != item) {
						if (item && contentSet) {
							item.set("selected", false);
							item.set("focused", false);
						}
					} else {
						if (item && contentSet) {
							item.set("selected", true);
							//focusUtil.focus(item.focusNode);
						}
					}

					if (item && lang.isFunction(item.setShortcutVisibility)) {
						item.set("showShortcut", false);
						item.setShortcutVisibility(false);
					}
				}
			}
		},

		/**
		 * Creates the a new content area widget.
		 * 
		 * @param params
		 *            An object containing additional parameters and callback. Parameters include:
		 *            <ul>
		 *            <li>widgetName - Class name of the widget to create.</li>
		 *            <li>name - Unique name for the content area widget.</li>
		 *            <li>label - Label for the widget.</li>
		 *            <li>selected - Boolean indicating if the widget is selected or not.</li>
		 *            <li>widgetParams - Object container parameters to be mixed into the widget when it is
		 *            constructed.</li>
		 *            <li>callback - Callback method called when the widget is created.</li>
		 *            </ul>
		 * @private
		 */
		_createWidget: function(params) {
			this.logEntry("_createWidget");

			if (params.widgetName != null && params.widgetName.length > 0 && lang.isFunction(params.callback)) {
				if (params.widgetParams != null) {
					params.widgetParams["UUID"] = params.name;
					params.widgetParams["selected"] = params.selected;
					params.widgetParams["title"] = params.label;
				} else {
					params.widgetParams = {
						UUID: params.name,
						selected: params.selected,
						title: params.label,
						feature: params.feature
					};
				}

				this.logInfo("_createWidget", "widget class=" + params.widgetName + ", UUID=" + params.widgetParams.UUID + ", selected=" + params.widgetParams.selected + ", title=" + params.widgetParams.title);

				var self = this;
				var widgetReq = params.widgetName.split('.').join('/');

				try {
					require([
						widgetReq
					], function(cls) {
						self.logDebug("_createWidget", "Creating new instance of " + widgetReq);
						var obj = new cls(params.widgetParams);
						params.callback(obj);
					});
				} catch (e) {
					self.logDebug("_createWidget", "NOT able to create an instance of " + widgetReq);
					self.logError(e);
				}
			}

			this.logExit("_createWidget");
		},

		/**
		 * Creates a popup window.
		 * 
		 * @param params
		 *            An object containing additional parameters and callback. Parameters include:
		 *            <ul>
		 *            <li>widgetName - Class name of the widget to create.</li>
		 *            <li>childObj - Child widget associated with this popup (may be null).</li>
		 *            <li>name - Unique name for the content area widget.</li>
		 *            <li>label - Label for the widget.</li>
		 *            <li>feature - The feature for the widget.</li>
		 *            <li>callback - Callback function called when the widget has been created.</li>
		 *            </ul>
		 * @private
		 */
		_createPopupWindow: function(params) {
			this.logEntry("_createPopupWindow");

			if (params.widgetName != null && params.widgetName.length > 0 && lang.isFunction(params.callback)) {
				if (params.childObj != null) {
					params.callback(params.childObj);
				} else {
					this._createWidget({
						widgetName: params.widgetName,
						name: params.name + "_popup",
						label: params.label,
						selected: params.selected,
						callback: params.callback,
						feature: params.feature
					});
				}
			}

			this.logExit("_createPopupWindow");
		},

		/**
		 * Selects a Content Pane by the given ID and sets the appropriate launcher button as selected.
		 * 
		 * @param button
		 *            Launcher button to be set as selected.
		 * @param uuid
		 *            ID of the panel to show.
		 * @param params
		 *            Parameters to pass into the child panel.
		 * @since 2.0.2
		 */
		selectContentPane: function(button, uuid, params) {
			this.logEntry("selectContentPane", uuid);

			if (uuid) {
				if (button) {
					this._createFeaturePanel(button, lang.hitch(this, function(featurePane) {
						this.updateButtonsState(button, true);
						if (button.isInstanceOf(dijit.MenuItem)) {
							this.selectedMenuItem = button;
						} else {
							this.selectedButton = button;
							if (this.selectedButton && lang.isFunction(this.selectedButton.setShortcutVisibility)) {
								this.selectedButton.set("showShortcut", false);
								this.selectedButton.setShortcutVisibility(false);
							}
						}
						this._selectContentPaneHandler(button, uuid, params);
					}));
				} else {
					this._selectContentPaneHandler(button, uuid, params);
				}
			}

			this.logExit("selectContentPane");
		},

		/**
		 * @private
		 */
		_selectContentPaneHandler: function(button, uuid, params) {
			this._setLastSelectedPane(button, uuid);
			var page = this._selectContentPaneByID(uuid, params);
			//var flyoutOpen = this.flyoutMenuContainer && this.flyoutMenuContainer.open;
			if (page && page.focus) { // && (flyoutOpen || !this._isButtonBarVisible())) { // selected item from the flyout or this is the admin desktop which has no button bar
				page.focus();
			} else if (this.selectedButton && this._isButtonBarVisible()) {
				this.selectedButton.focus();
			}
		},

		/**
		 * Set the last selected pane for any additional content panels that are attached to a feature button.
		 * 
		 * @private
		 */
		_setLastSelectedPane: function(button, uuid) {
			if (!button) {
				//attempt to see if a button exists for this pane.  This is to catch cases where calls are made to switch panes with feature buttons but left out filling in the button param
				button = this._launchBarButtons[uuid];
			}

			//if the feature button has a last selected pane, null it out since you are selecting the feature's child or contentClass now
			if (button && button.child && button.child.UUID == uuid) {
				if (button.lastSelectedPane)
					button.lastSelectedPane = null;
			} else {
				//if selecting an additional content pane which doesn't have a button, look to see if it's supposed to be attached to a feature button.
				//find the feature button and set that as the last selected pane so that if the button is invoked again, that pane will be displayed instead of the regular feature class pane
				var selectedPane = this._panels[uuid];
				if (selectedPane && selectedPane.featureId) {
					button = this._launchBarButtons[selectedPane.featureId];
					if (button)
						button.lastSelectedPane = selectedPane;
				}
			}
		},

		/**
		 * Gets the panel with the given ID .
		 * 
		 * @param uuid
		 *            ID of the panel to show.
		 */
		getContentPaneByID: function(uuid) {
			this.logEntry("getContentPaneByID", uuid);

			var page = null;
			if (this._panels) {
				page = this._panels[uuid];
			}

			this.logExit("getContentPaneByID");
			return page;
		},

		/**
		 * Gets the button with the given ID.
		 * 
		 * @param uuid
		 *            ID of the button to return.
		 * @return Retuns an instance of {@link ecm.widget.layout._LaunchBarButton} or
		 *         {@link ecm.widget.layout._LaunchBarDialogButton} that matches the given ID or null if no match is
		 *         found.
		 */
		getButtonByID: function(uuid) {
			this.logEntry("getButtonByID", uuid);

			var button = null;
			if (this._launchBarButtons) {
				button = this._launchBarButtons[uuid];
			}

			this.logExit("getButtonByID");
			return button;
		},

		/**
		 * Gets the menuItem with the given ID.
		 * 
		 * @param uuid
		 *            ID of the menuItem to return.
		 * @return Returns an instance of {@link dijit.MenuItem} that matches the given ID or null if no match is found.
		 */
		getMenuItemByID: function(uuid) {
			this.logEntry("getMenuItemByID", uuid);

			var retItem = null;
			if (this._featureDropDownMenu) {
				var menuItems = this._featureDropDownMenu.getChildren();
				if (menuItems && menuItems.length > 0) {
					array.forEach(menuItems, lang.hitch(this, function(menuItem) {
						if (menuItem.feature && menuItem.feature.id == uuid) {
							retItem = menuItem;
						}
					}));
				}
			}

			this.logExit("getMenuItemByID");
			return retItem;
		},

		/**
		 * Returns the button or menu item for the feature with the given ID. If the feature bar is set up
		 * to display a feature drop-down menu, an instance of {@link dijit.MenuItem} is returned; otherwise,
		 * an instance of {@link ecm.widget.layout._LaunchBarButton} is returned.
		 * 
		 * @param uuid
		 *            ID of the feature button to return.
		 * @return Returns an instance of {@link dijit.MenuItem} or {@link ecm.widget.layout._LaunchBarButton} that matches the given ID or null if no match is found.
		 * @since 3.0.3
		 */
		getFeatureButtonByID: function(uuid) {
			return this._featureDropDownMenu ? this.getMenuItemByID(uuid) : this.getButtonByID(uuid);
		},

		/**
		 * Adds a widget to the contextual area. The contextual area is located in the trailing position if the feature
		 * bar is positioned at the top or bottom of the screen and in the bottom position if the feature bar is
		 * positioned in the leading or trailing locations on the screen. This area is an open area to add any widget
		 * you choose, such as a search bar or additional buttons unrelated to the navigation within the feature bar
		 * area.
		 * 
		 * @param widget
		 *            The widget to add to the contextual area.
		 */
		addWidgetToContextualArea: function(widget) {
			if (widget && widget.domNode) {
				domConstruct.place(widget.domNode, this.launchBarContextualArea.domNode, "last");
			}
		},

		/**
		 * Shows the panel with the given ID and sets any additional parameters that need to be set on the child pane.
		 * 
		 * @param uuid
		 *            ID of the panel to show.
		 * @param params
		 *            Parameters to pass to the child panel.
		 * @private
		 */
		_selectContentPaneByID: function(uuid, params) {
			this.logEntry("_selectContentPaneByID", uuid);

			var page = null;
			if (this._panels) {
				page = this._panels[uuid];
			}

			if (page == null) { // likely needs to be created
				this._createContentPanel(uuid);
				page = this._panels[uuid];
			}

			if (page != null) {
				page.selected = true;
				//if a flyout pane was selected, then show it
				if (page.isInstanceOf && page.isInstanceOf(ecm.widget.layout._LaunchBarDialogPane)) {
					var button = this._launchBarButtons[uuid];
					if (button && this.showFlyouts) {
						this.flyoutMenuContainer.initWithDijitCallback(page, button.domNode, lang.hitch(this, function() {
							this._onFlyoutShortCutClicked(button);
						}));
					}
					//if it was the contentClass/child pane, select that as the child
				} else if (page.isInstanceOf && page.isInstanceOf(_LaunchBarPane))
					this._selectChild(page);

				page.setParams(params);
			}
			return page;

			this.logExit("_selectContentPaneByID");
		},

		/**
		 * Handles the click event on a flyout's shortcut. This will handle showing and loading the flyouts.
		 * 
		 * @private
		 */
		_onFlyoutShortCutClicked: function(selectedButton) {
			this.logEntry("_onFlyoutShortCutClicked");

			if (selectedButton && selectedButton.isInstanceOf && selectedButton.isInstanceOf(ecm.widget.layout._LaunchBarDialogButton)) {
				this.updateButtonsState(this.selectedButton, false);

				//show the flyout shortcut 
				if (selectedButton && lang.isFunction(selectedButton.setShortcutVisibility)) {
					selectedButton.set("showShortcut", true);
					selectedButton.setShortcutVisibility(true);
				}

				// loads the flyout
				if (!selectedButton.dropDown.isLoaded) {
					selectedButton.dropDown.loadContent();
				} else if (selectedButton.dropDown.needReset) {
					selectedButton.dropDown.reset();
				}
				if (selectedButton.dropDown.focus) {
					selectedButton.dropDown.focus();
				}
			}

			this.onFlyoutShortcutClicked(selectedButton);

			this.logExit("_onFlyoutShortCutClicked");
		},

		/**
		 * Handles a button click event.
		 * 
		 * @param selectedButton
		 *            The button clicked by the end-user.
		 * @private
		 */
		_buttonClick: function(selectedButton, skipLoadingChild) {
			this.logEntry("_buttonClick");
			this.logDebug("Selected button id: " + selectedButton.feature.id);

			// if the button has the disabledButtonClick field, disable button click, load the content, and return immediately
			// This is needed to show the flyout immediately when clicking on the launcher button
			if (selectedButton.child && selectedButton.child.disableButtonClick) {
				if (!selectedButton.child.isLoaded) {
					setTimeout(function() {
						selectedButton.child.loadContent();
					}, 400);
				}
				return;
			}

			// close the flyout pane if a particular launcher button is clicked
			if (selectedButton.dropDown) {
				selectedButton.dropDown.closePopup();
			}

			// if the feature button's current selected pane equals the target button pane, then null it out lastSelectedPane
			if (selectedButton.child) {
				if (this.selectedButton && this.selectedButton.child && this.selectedButton.child.UUID == selectedButton.child.UUID) {
					if (selectedButton.lastSelectedPane)
						selectedButton.lastSelectedPane = null;
				} else if (this.selectedMenuItem && this.selectedMenuItem.child && this.selectedMenuItem.child.UUID == selectedButton.child.UUID) {
					if (selectedButton.lastSelectedPane)
						selectedButton.lastSelectedPane = null;
				}
			}

			// if the selectedButton is a child of a feature menu item then we will set the lastSelectedPane to the UUID of the child pane associated with the
			// selected button
			if (selectedButton.parentMenuItem && selectedButton.child) {
				selectedButton.parentMenuItem.lastSelectedPane = selectedButton.child;
				selectedButton.parentMenuItem.lastSelectedButton = selectedButton;
			} else if (selectedButton.parentMenuItem) {
				selectedButton.parentMenuItem.lastSelectedPane = null;
				selectedButton.parentMenuItem.lastSelectedButton = selectedButton;
			}

			if (!selectedButton.isInstanceOf(dijit.MenuItem))
				this.selectedButton = selectedButton;
			else
				this.selectedMenuItem = selectedButton;
			this.onButtonClick(selectedButton);

			if (selectedButton && selectedButton.isInstanceOf && (selectedButton.isInstanceOf(ecm.widget.layout._LaunchBarButton) || selectedButton.isInstanceOf(ecm.widget.layout._LaunchBarDialogButton) || selectedButton.isInstanceOf(dijit.MenuItem))) {
				if (selectedButton.child) {
					this.updateButtonsState(selectedButton, true);

					var child;
					//if the button contains a last selected pane - meaning that the button is attached to more than one container panes, select that one.
					//if not, select the regular child pane set as the feature class.
					if (selectedButton.lastSelectedPane) {
						this._selectChild(selectedButton.lastSelectedPane);
						child = selectedButton.lastSelectedPane;
						if (selectedButton.lastSelectedButton) {
							this.updateButtonsState(selectedButton.lastSelectedButton, true);
						}
					} else {
						this._selectChild(selectedButton.child);
						child = selectedButton.child;
						if (selectedButton.lastSelectedButton) {
							this.updateButtonsState(selectedButton.lastSelectedButton, true);
						}
					}

					if (child && !skipLoadingChild) {
						if (!child.isLoaded) {
							setTimeout(lang.hitch(this, function() {
								child.loadContent();
								if (child.focus) {
									child.focus();
								}
							}), 400);
						} else if (child.needReset) {
							setTimeout(lang.hitch(this, function() {
								child.reset();
							}), 400);
						} else if (child.focus) {
							setTimeout(lang.hitch(this, function() {
								child.focus();
							}), 400);
						}
					}
				} else if (selectedButton.parentMenuItem && selectedButton.parentMenuItem.child) {
					this.updateButtonsState(selectedButton, true);

					var child;
					//if the button contains a last selected pane - meaning that the button is attached to more than one container panes, select that one.
					//if not, select the regular child pane set as the feature class.
					if (selectedButton.parentMenuItem.lastSelectedPane) {
						this._selectChild(selectedButton.parentMenuItem.lastSelectedPane);
						child = selectedButton.parentMenuItem.lastSelectedPane;
					} else {
						this._selectChild(selectedButton.parentMenuItem.child);
						child = selectedButton.parentMenuItem.child;
					}

					if (child && !skipLoadingChild) {
						if (!child.isLoaded) {
							setTimeout(lang.hitch(this, function() {
								child.loadContent();
							}), 400);
						} else if (child.needReset) {
							setTimeout(lang.hitch(this, function() {
								child.reset();
							}), 400);
						}
					}
				}
			}

			this.logExit("_buttonClick");
		},
		
		_selectChild: function(child) {
			if (this._isButtonBarVisible()
					&& this.showFeatureContextSelector
					&& (this.featureBarPosition == "top" || this.featureBarPosition == "bottom")
					&& this.featureBarStyle == "dropdown") {
				
				// Empty the feature context selector area using DOM removeChild instead of dojo/dom-construct.empty
				// because Dojo uses node.innerHTML = '' and that also destroys the children in IE, which we don't want
				var node = this.launchBarFeatureContextSelectorArea.domNode;
				for (var c; c = node.lastChild;)
					node.removeChild(c);
				
				if (child.isInstanceOf && child.isInstanceOf(ecm.widget.layout._LaunchBarPane)) {
					child.addFeatureContextSelector(node);
					this.resize();
				}
			}

			this.launchBarContentArea.selectChild(child);
		},

		/**
		 * Event invoked when the flyout's shortcut is clicked
		 * 
		 * @deprecated As of 2.0.3.3. Flyout menu capabilities will be removed in a future release.
		 */
		onFlyoutShortcutClicked: function(selectedButton) {
		},

		/**
		 * Event invoked when the main launcher button is clicked
		 */
		onButtonClick: function(selectedButton) {
		}
	});
});

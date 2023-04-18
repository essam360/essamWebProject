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
	"dojo/dom-style",
	"dojo/aspect",
	"dijit/popup",
	"dijit/registry",
	"dijit/Toolbar",
	"dijit/ToolbarSeparator",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"ecm/MessagesMixin",
	"ecm/model/_EditServiceMixin",
	"ecm/model/Desktop",
	"ecm/widget/ActionMenu"
], //         
function(declare, //
lang, //
event, //
array, //
domClass, //
domStyle, //
aspect, //
popup, //
registry, //
Toolbar, //
ToolbarSeparator, //
Button, //
DropDownButton, //
MessagesMixin, //
_EditServiceMixin,//
Desktop, //
ActionMenu) {

	/**
	 * @name ecm.widget.Toolbar
	 * @class Provides a widget that creates a generic toolbar pane for an IBM Content Navigator application.
	 * @augments dijit.Toolbar, ecm.MessagesMixin
	 * @since 2.0.3
	 */
	return declare("ecm.widget.Toolbar", [
		Toolbar,
		MessagesMixin,
		_EditServiceMixin
	], {
		/** @lends ecm.widget.Toolbar.prototype */

		baseClass: "ecmToolbar",

		/**
		 * Flag indicating is button labels should be shown.
		 */
		showButtonLabels: true,

		/**
		 * Name of the IBM Content Navigator toolbar definition to load. Toolbars are defined in the IBM Content
		 * Navigator administration.
		 */
		toolbarName: null,

		/**
		 * Handle to the {@link ecm.model.Repository} object used to perform actions.
		 */
		repository: null,

		/**
		 * An array of {@link dijit/form/Button} and/or {@link dijit/form/DropDownButton} objects.
		 */
		toolbarButtons: null,

		postCreate: function() {
			this.inherited(arguments);

			this.own(aspect.after(Desktop, "onChange", lang.hitch(this, function() {
				this._onDesktopChange(Desktop);
			})));
			if (this.toolbarName && this.repository) {
				this.createToolbar(this.params);
			}
		},

		/**
		 * Clears the toolbar.
		 */
		clearToolbar: function() {
			if (this.dropDownMenus) {
				for (var i = 0; i < this.dropDownMenus; i++) {
					if (this.dropDownMenus[i] && this.dropDownMenus[i].destroy) {
						this.dropDownMenus[i].destroy();
					}
				}

				this.dropDownMenus = null;
			}

			if (this.separators) {
				for (var i = 0; i < this.separators.length; i++) {
					if (this.separators[i]) {
						this.separators[i].destroy();
					}
				}

				this.separators = null;
			}

			if (this.toolbarButtons) {
				for (var i = 0; i < this.toolbarButtons.length; i++) {
					if (this.toolbarButtons[i] && this.toolbarButtons[i].destroy) {
						this.toolbarButtons[i].destroy();
					}
				}

				this.toolbarButtons = null;
			}

			this.toolbarCreated = false;
		},

		/**
		 * Event fired when toolbar buttons are created.
		 * 
		 * @param toolbarButtons
		 *            The array of toolbar buttons.
		 */
		onToolbarButtonsCreated: function(toolbarButtons) {
		},

		/**
		 * Creates the toolbar.
		 * 
		 * @param params
		 *            List of parameters to provide to {@link ecm.model.Action} classes associated with the buttons and
		 *            drop down buttons in this toolbar. List of parameters include:
		 *            <ul>
		 *            <li>items - The selected items. This will be empty for global actions.</li>
		 *            <li>listType - Passed into isEnabled method of the action. A string value indicating the type of
		 *            object in the items list.</li>
		 *            <li>callbackMap - Can be null.</li>
		 *            <li>repository - Instance of {@link ecm.model.Repository}.</li>
		 *            <li>teamspace - Instance of {@link ecm.model.Teamspace}.</li>
		 *            <li>resultSet - Instance of {@link ecm.model.ResultSet}.</li>
		 *            <li>contentList - Instance of {@link ecm.model.listView.ContentList}.</li>
		 *            <li>parameterMap - Passed into performAction method of the action. An array of extra parameters
		 *            to be passed to the action (can be null).</li>
		 *            </ul>
		 */
		createToolbar: function(params) {
			if (!params)
				params = {};

			// This ensures we don't run into any problems if the caller some how calls createToolbar multiple times 
			// before a previous call to createToolbar completes.
			if (this._creatingToolbar) {
				setTimeout(lang.hitch(this, function() {
					this.createToolbar(params);
				}), 100);
			} else {
				this._createToolbar(params);
			}
		},

		/**
		 * @private
		 */
		_createToolbar: function(params) {
			this._creatingToolbar = true;
			this.clearToolbar();
			// Read the toolbar name from the params if it exists
			if (params.toolbarName != null) {
				this.toolbarName = params.toolbarName;
			}

			if (this.toolbarName) {
				this.set("aria-label", this.toolbarName);
				Desktop.loadMenuActions(this.toolbarName, lang.hitch(this, function(actions) {
					this.toolbarButtons = [];
					this.separators = [];
					this.dropDownMenus = [];
					var repository = this._getRepository(params);
					this._addEditServiceActions(repository, actions);
					var repositoryTypes = null;
					if (params.resultSet && params.resultSet.searchTemplate && params.resultSet.searchTemplate.searchRepositories) {
						repositoryTypes = array.map(params.resultSet.searchTemplate.searchRepositories, function(searchRepository) {
							return searchRepository.repository.type;
						});
					}

					for ( var i in actions) {
						var action = actions[i];

						if (action.id == "Separator") { // Create a separator
							var separator = new ToolbarSeparator();
							this.addChild(separator);
							this.separators.push(separator);

						} else if ((action.subActions && action.subActions.length > 0) || action.dynamic) { // Create a dropdown button and menu
							var actionMenu = new ActionMenu();
							this.dropDownMenus.push(actionMenu);
							if (params.contentList) {
								params.items = params.contentList.getSelectedItems();
							}
							if (!params.parameterMap) {
								params.parameterMap = {};
							}
							params.parameterMap.hideNotVisibleItems = true;

							// create dropdown menu
							var menu = null;
							if (!action.dynamic) {
								menu = this._createMenu(actionMenu, action, repository, params);
							}

							// create dropdown button
							var toolbarButton = this._createDropDownButton(action.id, action.name, action.iconClass, menu);
							this.toolbarButtons.push(toolbarButton);
							if (action.additionalConfiguration && action.additionalConfiguration.hideWhenChildNotVisible) {
								lang.mixin(toolbarButton, action.additionalConfiguration);
							}
							this.addChild(toolbarButton);

							// populate dynamic actions
							if (action.dynamic) {
								// disable the dropdown button for now to avoid being clicked before the initialization
								try {
									toolbarButton.set("disabled", true);
								} catch (e) {
									//ignore
								}
								action.populateAction(toolbarButton, lang.hitch(this, function(dropDown) {
									toolbarButton.dropDown = dropDown || this._createMenu(actionMenu, action, repository, params);
									if (!dropDown) {
										// re-populate the dropdown menu on open
										// make sure the populateAction method is optimized and non-blocking
										this.own(aspect.before(toolbarButton, "openDropDown", lang.hitch(this, function() {
											if (toolbarButton._inOpenDropDown) {
												return;
											}
											toolbarButton._inOpenDropDown = true;
											action.populateAction(toolbarButton, lang.hitch(this, function(dropDown) {
												toolbarButton.dropDown = dropDown || this._createMenu(actionMenu, action, repository, params);
												// close and open the dropdown to re-adjust the size and position
												if (toolbarButton._opened) {
													toolbarButton.closeDropDown(true);
													this.updateToolbarState();
													toolbarButton.openDropDown();
												} else {
													this.updateToolbarState();
												}
												toolbarButton._inOpenDropDown = false;
											}));
										})));
									}
									this.updateToolbarState();
								}));
							}

						} else if (action.isVisible(repository, null, repositoryTypes)) { // Create a button
							var toolbarButton = this._createButton(action.id, action.name, action.iconClass);
							if (toolbarButton) {
								toolbarButton.action = action;
								toolbarButton.params = params;

								this.toolbarButtons.push(toolbarButton);
								var self = this;
								toolbarButton.own(aspect.after(toolbarButton, "onClick", function() {
									this.action.performAction(self._getRepository(this.params), self._getItems(this.action, this.params), this.params.callbackMap, this.params.teamspace, this.params.resultSet, this.params.parameterMap);
								}));
								this.addChild(toolbarButton);
							}
						}
					}

					this.toolbarCreated = true;
					this.updateToolbarState();
					this.onToolbarButtonsCreated(this.toolbarButtons);
					this._creatingToolbar = false;
				}));
			}
		},

		_createMenu: function(actionMenu, action, repository, params) {
			var menu = actionMenu.createMenu(action.subActions, params.items, params.listType, params.callbackMap, repository, params.teamspace, params.resultSet, params.parameterMap);
			var menuChildren = menu.getChildren();
			if (menuChildren && menuChildren.length > 0) {
				// Update the onClick for the menu items to get the selected items from the content list 
				for ( var i in menuChildren) {
					var menuItem = menuChildren[i];
					if (menuItem.action && menuItem.onClick) {
						menuItem.params = params;
						menuItem.onClick = lang.hitch(this, function(evt) {
							// make sure the dropdown menu is closed before performing the action
							popup.close(menu);
							var menuItem = registry.getEnclosingWidget(evt.target);
							var params = menuItem.params;
							menuItem.action.performAction(this._getRepository(params), this._getItems(menuItem.action, params), params.callbackMap, params.teamspace, params.resultSet, params.parameterMap);
						});
					} else if (menuItem.popup) {
						var popupMenuItems = menuItem.popup.getChildren();
						if (popupMenuItems && popupMenuItems.length > 0) {
							for ( var j in popupMenuItems) {
								var popupMenuItem = popupMenuItems[j];
								popupMenuItem.params = params;
								popupMenuItem.onClick = lang.hitch(this, function(evt) {
									var popupMenuItem = registry.getEnclosingWidget(evt.target);
									var params = popupMenuItem.params;
									popupMenuItem.action.performAction(this._getRepository(params), this._getItems(popupMenuItem.action, params), params.callbackMap, params.teamspace, params.resultSet, params.parameterMap);
								});
							}
						}
					}
				}
			}
			return menu;
		},

		/**
		 * @private Returns the items to use for performing the action.
		 */
		_getItems: function(action, params) {
			var items = null;
			if (params) {
				// For add doc and folder, always add to the parent folder so that the new folder/document saves to the parent folder
				if (action && action.id && (action.id == "Import" || action.id == "CreateFolder" || action.id.indexOf("NewEditDocument") == 0)) {
					if (params.resultSet && params.resultSet.parentFolder && (!params.resultSet.parentFolder.isInstanceOf || !params.resultSet.parentFolder.isInstanceOf(ecm.model._SearchTemplateBase))) {
						items = [
							params.resultSet.parentFolder
						];
					}
				} else if (params.contentList && params.contentList.getSelectedItems() && params.contentList.getSelectedItems().length > 0) {
					items = params.contentList.getSelectedItems();
				} else if (params.resultSet && params.resultSet.parentFolder) {
					items = [
						params.resultSet.parentFolder
					];
				}
			}
			return items;
		},

		/**
		 * @private Returns the repository to use.
		 */
		_getRepository: function(params) {
			var repository = this.repository;
			if (!repository && params) {
				if (params.repository) {
					repository = params.repository;
				} else if (params.resultSet && params.resultSet.repository) {
					repository = params.resultSet.repository;
				} else if (params.items && params.items.length > 0) {
					repository = params.items[0].repository;
				}
			}
			return repository;
		},

		/**
		 * @private Creates a {@link dijit.form.Button} with the specified label.
		 * @param id
		 *            The action id.
		 * @param label
		 *            The action label.
		 * @param iconClass
		 *            The action icon class.
		 */
		_createButton: function(id, label, iconClass) {
			var toolbarButton = new Button({
				iconClass: iconClass,
				label: label,
				showLabel: this.showButtonLabels,
				id: registry.getUniqueId((id ? (id.toUpperCase() + "_") : "") + "dijit_form_Button")
			});

			// Block right-click event, so the browser doesn't show an annoying right-click window
			toolbarButton.own(aspect.after(toolbarButton.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
				this._stopEvent(evt);
			}), true));
			return toolbarButton;
		},

		/**
		 * @private Creates a {@link dijit.form.DropDownButton} with the specified label.
		 * @param id
		 *            The action id.
		 * @param label
		 *            The action label.
		 * @param iconClass
		 *            The action icon class.
		 * @param menu
		 *            The menu to associated with the drop down button.
		 */
		_createDropDownButton: function(id, label, iconClass, menu) {
			var toolbarButton = new DropDownButton({
				iconClass: iconClass,
				label: label,
				showLabel: this.showButtonLabels,
				id: registry.getUniqueId((id ? (id.toUpperCase() + "_") : "") + "dijit_form_Button"),
				dropDown: menu
			});

			// Block right-click event, so the browser doesn't show an annoying right-click window
			toolbarButton.own(aspect.after(toolbarButton.domNode, "oncontextmenu", lang.hitch(this, function(evt) {
				this._stopEvent(evt);
			}), true));
			return toolbarButton;
		},

		/**
		 * Returns true if the action can be performed.
		 * 
		 * @param action
		 *            The {@link ecm.model.Action} object representing the action to perform.
		 * @param params
		 *            An object containing additional parameters used to validate if an action can be performed. The
		 *            object can include:
		 *            <ul>
		 *            <li>resultSet - A {@link ecm.model.ResultSet} model object containing the results of a search.</li>
		 *            <li>items - An array of {@link ecm.model.Item} objects.</li>
		 *            <li>teamspace - A {@link ecm.model.Teamspace} model object, if the action is being performed
		 *            within a teamspace.</li>
		 *            </ul>
		 */
		canPerform: function(action, params) {
			var canPerform = false;
			if (action.global && params) {
				canPerform = action.isGlobalEnabled(params.resultSet, params.items, params.repository || (params.resultSet && params.resultSet.repository));
			} else if (action.global) {
				canPerform = action.isGlobalEnabled();
			} else if (params && params.items && params.items.length > 0) {
				var repository = this.repository ? this.repository : params.items[0].repository;
				canPerform = action.isEnabled(repository, this.toolbarName, params.items, params.teamspace, params.resultSet);
			}
			return canPerform;
		},

		/**
		 * @private When the desktop changes, update toolbar button states.
		 */
		_onDesktopChange: function(modelObject) {
			if (this.toolbarCreated)
				this.updateToolbarState();
		},

		/**
		 * Update toolbar button state.
		 */
		updateToolbarState: function() {
			if (this.toolbarCreated && this.toolbarButtons) {
				for ( var i in this.toolbarButtons) {
					var toolbarButton = this.toolbarButtons[i];
					if (toolbarButton) {
						if (toolbarButton.dropDown) { // Handle dropdown button menu items
							var hasEnabledChild = false;
							var hasVisibleChild = false;
							if (toolbarButton.dropDown.hasEnabledChild) {
								hasEnabledChild = toolbarButton.dropDown.hasEnabledChild();
							} else {
								var children = toolbarButton.dropDown.getChildren();
								for (i in children) {
									var menuItem = children[i];
									if (menuItem.action) {
										var params = menuItem.params;
										if (!params)
											params = {};
										if (params.contentList) { // Get list of items from contentlist if it exists
											params.items = params.contentList.getSelectedItems();
										}
										var isVisible = menuItem.action.isVisible(this._getRepository(params), params.items, null, params.teamspace);
										domStyle.set(menuItem.domNode, "display", isVisible ? "" : "none");
										if (isVisible) {
											var disabled = !this.canPerform(menuItem.action, params);
											menuItem.set("disabled", disabled);
											if (!disabled) {
												hasEnabledChild = true;
											}
											hasVisibleChild = true;
										}

									} else {
										var subChildren = menuItem && menuItem.popup && menuItem.popup.getChildren ? menuItem.popup.getChildren() : 0;
										if (subChildren && subChildren.length > 0) {
											var hasEnabledSubChild = false;
											for (j in subChildren) {
												var subChildMenuItem = subChildren[j];
												var subChildParams = subChildMenuItem.params;
												if (!subChildParams)
													subChildParams = {};
												if (subChildParams.contentList) { // Get list of items from contentlist if it exists
													subChildParams.items = subChildParams.contentList.getSelectedItems();
												}
												var subChildIsVisible = subChildMenuItem.action.isVisible(this._getRepository(subChildParams), subChildParams.items, null, subChildParams.teamspace);
												domStyle.set(subChildMenuItem.domNode, "display", subChildIsVisible ? "" : "none");
												if (subChildIsVisible) {
													var subChildDisabled = !this.canPerform(subChildMenuItem.action, subChildParams);
													subChildMenuItem.set("disabled", subChildDisabled);
													if (!subChildDisabled) {
														hasEnabledSubChild = true;
													}
												}
												// If all the subMenuItems are disabled, then disable the parent menuItem
												menuItem.set("disabled", !hasEnabledSubChild);
											}
											if( hasEnabledSubChild ){
												hasEnabledChild = true;
											}
											if( subChildIsVisible ){
												hasVisibleChild = true;
											}
										}
									}
								}
							}
							// If all the menuItems are disabled, then disable the dropdown button
							try {
								toolbarButton.set("disabled", !hasEnabledChild);
								if (!hasVisibleChild && toolbarButton.hideWhenChildNotVisible) {
									domClass.add(toolbarButton.domNode, "dijitHidden");									
								} else {										
									domClass.remove(toolbarButton.domNode, "dijitHidden");
								}
							} catch (e) {
								//ignore
							}

						} else if (toolbarButton.action) { // Handle toolbar button							
							if (!toolbarButton.params)
								toolbarButton.params = {};
							if (toolbarButton.params.contentList) { // Get list of items from contentlist if it exists
								toolbarButton.params.items = toolbarButton.params.contentList.getSelectedItems();
							}
							var disabled = !this.canPerform(toolbarButton.action, toolbarButton.params);
							try {
								toolbarButton.set("disabled", disabled);
							} catch (e) {
								//ignore
							}
						}
					}
				}
			}
		},

		/**
		 * @private Stops the event.
		 */
		_stopEvent: function(evt) {
			event.stop(evt);
			return false;
		}
	});
});

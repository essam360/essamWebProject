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
	"ecm/widget/listView/modules/_Module",
	"ecm/MessagesMixin"
], //
function(declare, lang, event, array, domClass, domGeom, connect, domConstruct, Button, DropDownButton, Menu, registry, UnifiedSearchTemplate, ActionMenu, _Module, MessagesMixin) {

	/**
	 * @name ecm.widget.listView.modules.Toolbar
	 * @class This content list module provides toolbar capability.
	 * @augments ecm.widget.listView.modules._Module
	 * @deprecated Since 2.0.3. Use ecm.widget.listView.modules.Toolbar2 instead.
	 */
	return declare(_Module, {
		/** @lends ecm.widget.listView.modules.Toolbar.prototype */

		name: 'toolbar',

		/**
		 * @private
		 */
		_selectedItems: null,

		/**
		 * @private
		 */
		_toolbarCreated: false,

		constructor: function() {
			if (!this._selectedItems) {
				this._selectedItems = [];
			}
		},

		/**
		 * See GridX API documentation for details.
		 */
		getAPIPath: function() {
			return {
				toolbar: this
			};
		},

		preload: function() {
			var t = this, cl = t.contentList;
			if (t._bar) {
				t.domNode = t.buttonArea = domConstruct.create("div", {
					"class": "toolbarButtonArea"
				});
			}
			t.batchConnect([
				ecm.model.desktop,
				'onChange',
				'_onDesktopChange'
			], [
				cl,
				'onSetResultSet',
				'_setupToolbar'
			], [
				cl,
				'onRowSelectionChange',
				'_onRowSelectionChange'
			], [
				t.getButtonArea(),
				'oncontextmenu',
				'_stopEvent'
			], [
				cl,
				'onSelectedItemUpdateItem',
				'_onRowSelectionChange'
			]);
			t._setupToolbar();
		},

		/**
		 * Returns the button area dom node that the buttons are contained in.
		 */
		getButtonArea: function() {
			var t = this;
			return t.buttonArea ? t.buttonArea : t.contentList.buttonArea;
		},

		/**
		 * @private Stops the event.
		 */
		_stopEvent: function(evt) {
			event.stop(evt);
			return false;
		},

		/**
		 * Event fired when the context menus have been constructed. This is used to alter the menu items if necessary.
		 * 
		 * @param actionMenu
		 *            The action menu.
		 * @param items
		 *            The selected items.
		 */
		onContextMenuCreated: function(actionMenu, items) {
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
		 * Return selected items.
		 * 
		 * @return Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 */
		getSelectedItems: function() {
			return this._selectedItems;
		},

		/**
		 * Allows users to disable a specific toolbar button.
		 * 
		 * @param actionId
		 *            The id of the {@link ecm.model.Action}.
		 * @param disable
		 *            Boolean indicating if the button should be disabled.
		 */
		setToolbarButtonDisabled: function(actionId, disable) {
			var t = this;
			if (t._toolbarCreated && t._toolbarButtons) {
				for ( var i in t._toolbarButtons) {
					var toolbarButton = t._toolbarButtons[i];
					if (toolbarButton && toolbarButton.action && toolbarButton.action.id == actionId) {
						toolbarButton.set("disabled", disable);
						break;
					}
				}
			}
		},

		/**
		 * Load the context menu by loading it from the resultSet. Provides a way for sub-modules to override this
		 * functionality.
		 * 
		 * @param selectedItems
		 *            Array of {@link ecm.model.Item} or {@link ecm.model.Favorite}.
		 * @param callback
		 *            The callback function.
		 */
		loadContextMenu: function(selectedItems, callback) {
			var t = this, resultSet = t.contentList.getResultSet();
			resultSet.loadContextMenu(selectedItems, callback);
		},

		/**
		 * @private Initial logic to clean up the toolbar and creates the buttons.
		 */
		_setupToolbar: function() {
			var t = this, resultSet = t.contentList.getResultSet();
			t.cleanUpToolButtons();
			if (resultSet) {
				t.createToolButtons();
			}
		},

		/**
		 * @private Cleans up the action menu & re-loads it.
		 */
		_createActionsMenuItems: function() {
			var t = this;
			var childMenuItems = t.actionsButton.dropDown.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.destroy();
			}, t);

			if (!t._actionMenuCreator) {
				t._actionMenuCreator = new ActionMenu();
			}

			if (t._selectedItems) {
				t._loadActionMenuItems();
			}
		},

		/**
		 * @private Gets the actions from the model & loads the action menu.
		 */
		_loadActionMenuItems: function() {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			t.loadContextMenu(t._selectedItems, lang.hitch(t, function(actions) {
				// The repository for the item may not be the same one for the list when invoked for workitem attachments.
				// When that's the case, use the repository for the item.
				var menuRepository = null;
				if (!resultSet.repository || t._selectedItems.length > 0 && t._selectedItems[0].repository && t._selectedItems[0].repository.id != resultSet.repository.id) {
					menuRepository = t._selectedItems[0].repository;
				} else {
					menuRepository = resultSet.repository;
				}

				t._getTeamspace(resultSet.teamspaceId, menuRepository, lang.hitch(t, function(teamspace) {
					resultSet.teamspace = teamspace;
					var menu = t._actionMenuCreator.createMenu(actions, t._selectedItems, "", null, menuRepository, teamspace, resultSet, {
						widget: cl
					});

					t.onContextMenuCreated(t._actionMenuCreator, t._selectedItems);
					array.forEach(menu.getChildren(), function(child) {
						t.actionsButton.dropDown.addChild(child);
					}, t);
					if (t.actionsButton.dropDown.isShowingNow) {
						t.actionsButton.dropDown.focusFirstChild();
					}
				}));
			}));
		},

		/**
		 * @private Gets the teamspace for the input teamspace id.
		 */
		_getTeamspace: function(teamspaceId, repository, callback) {
			var t = this;
			if (teamspaceId) {
				repository.retrieveTeamspaceById(teamspaceId, "instance", lang.hitch(t, function(teamspace) {
					teamspace.retrieveContentClasses(function() {
					});

					callback(teamspace);
				}));
			} else {
				callback(null);
			}
		},

		/**
		 * Cleans up the toolbar buttons.
		 */
		cleanUpToolButtons: function() {
			var t = this, buttonArea = t.getButtonArea();
			t._toolbarCreated = false;

			// Delete the separators
			if (t._separators) {
				for ( var i in t._separators) {
					domConstruct.destroy(t._separators[i]);
					t._separators[i] = null;
				}
				t._separators = null;
			}

			// Delete the toolbar buttons
			if (t.actionsButton) {
				if (t.actionsButton.dropDown) {
					t.actionsButton.dropDown.destroyRecursive();
					t.actionsButton.dropDown = null;
				}
				t.actionsButton.destroyRecursive();
				t.actionsButton = null;
			}

			if (t._toolbarButtons) {
				for ( var i in t._toolbarButtons) {
					t._toolbarButtons[i].destroyRecursive();
					t._toolbarButtons[i] = null;
				}
				t._toolbarButtons = null;
			}

			// Remove all the children from the buttonArea
			if (buttonArea) {
				while (buttonArea.hasChildNodes()) {
					buttonArea.removeChild(buttonArea.lastChild);
				}
			}
		},

		/**
		 * Creates the toolbar buttons. Gets the button actions from the resultset.
		 */
		createToolButtons: function() {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet(), buttonArea = t.getButtonArea();

			// Create the actions dropdown button
			t.actionsButton = new DropDownButton({
				optionsTitle: "Actions",
				dropDown: new Menu({
					style: "display: none;"
				}),
				label: ecm.messages.actions
			});
			t.actionsButton.set("disabled", true);
			t.connect(t.actionsButton.dropDown, "onOpen", "_createActionsMenuItems");
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(t.actionsButton.domNode, "oncontextmenu", "_stopEvent");
			buttonArea.appendChild(t.actionsButton.domNode);

			if (resultSet) {
				resultSet.loadToolbar(lang.hitch(t, function(actions) {
					t._getTeamspace(resultSet.teamspaceId, resultSet.repository, lang.hitch(t, function(teamspace) {
						resultSet.teamspace = teamspace;
						t._toolbarButtons = [];
						t._separators = [];
						for ( var i in actions) {
							var action = actions[i];
							if ((!resultSet.repository && t._isActionVisibleToAnyOfUnifiedSearchRepositoryTypes(resultSet.searchTemplate, action)) || action.isVisible(resultSet.repository)) {
								if (action.id == "Separator") {
									var separator = t._createSeparator();
									t._separators.push(separator);
									buttonArea.insertBefore(separator, t.actionsButton.domNode);
								} else {
									var toolbarButton = t._createButton(action.name, action.id);
									if (toolbarButton) {
										toolbarButton.action = action;
										t.connect(toolbarButton, "onClick", t._getButtonOnClickHandler(action, teamspace));
										t._toolbarButtons.push(toolbarButton);
										buttonArea.insertBefore(toolbarButton.domNode, t.actionsButton.domNode);
									}
								}
							}
						}
						t._toolbarCreated = true;
						t.updateToolbarState();
						t.onToolbarButtonsCreated(t._toolbarButtons);
						cl.resize(); // resize - if the toolbar has many buttons, it may have grown the content list header
					}));
				}));
			}
		},

		_isActionVisibleToAnyOfUnifiedSearchRepositoryTypes: function(searchTemplate, action) {
			if (!searchTemplate)
				return true;
			if (!searchTemplate.isInstanceOf || !searchTemplate.isInstanceOf(UnifiedSearchTemplate))
				return true;

			var repoTypes = array.map(searchTemplate.searchRepositories, function(searchRepo) {
				return searchRepo.repository.type;
			});

			return action._isVisibleToAnyOfRepositoryTypes(repoTypes);
		},

		/**
		 * Retrieves a specific toolbar button if it exists.
		 * 
		 * @param actionId
		 *            The id of the {@link ecm.model.Action}.
		 * @return The button with the associated action id.
		 */
		getToolbarButton: function(actionId) {
			var t = this;
			var toolbarButton = null;
			if (t._toolbarButtons) {
				for ( var i in t._toolbarButtons) {
					if (t._toolbarButtons[i].action.id == actionId) {
						toolbarButton = t._toolbarButtons[i];
						break;
					}
				}
			}
			return toolbarButton;
		},

		/**
		 * Retrieves the toolbar buttons.
		 * 
		 * @return Array of buttons.
		 */
		getToolbarButtons: function() {
			return this._toolbarButtons;
		},

		/**
		 * @private Creates a separator.
		 */
		_createSeparator: function() {
			var t = this;
			var separator = domConstruct.create("DIV", {
				innerHTML: "|"
			});
			domClass.add(separator, "dijitInline separator");
			return separator;
		},

		/**
		 * @private Creates a button with the specified label.
		 * @param label
		 *            String holding the action button label
		 * @param actionId
		 *            String holding the action id.
		 * @since 2.0.2
		 */
		_createButton: function(label, actionId) {
			var t = this;
			var toolbarButton = new Button({
				label: label,
				id: registry.getUniqueId((actionId ? (actionId.toUpperCase() + "_") : "") + "dijit_form_Button")
			});
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(toolbarButton.domNode, "oncontextmenu", "_stopEvent");
			return toolbarButton;
		},

		/**
		 * @private Get the onClick handler for the action.
		 */
		_getButtonOnClickHandler: function(action, teamspace) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			var onClickHandler = null;

			// for add doc and folder, always add to the parent folder so that the new folder/document saves to the parent folder
			if (action.id == "Import" || action.id == "CreateFolder") {
				onClickHandler = function(evt) {
					var button = registry.getEnclosingWidget(evt.target);
					var parentFolder = resultSet.parentFolder;
					button.action.performAction(resultSet.repository, parentFolder ? [
						parentFolder
					] : null, null, teamspace, resultSet, {
						widget: cl
					});
				};

			} else {
				onClickHandler = function(evt) {
					var button = registry.getEnclosingWidget(evt.target);
					var item = t._selectedItems.length > 0 ? t._selectedItems[0] : null;
					if (item || button.action.global) {
						var parent = null;
						if (resultSet) {
							parent = resultSet._searchTemplate ? resultSet._searchTemplate : resultSet.parentFolder;
						}
						button.action.performAction(resultSet.repository || (item ? item.repository : null), t._selectedItems.length > 0 ? t._selectedItems : (parent ? [
							parent
						] : null), null, teamspace, resultSet, {
							widget: cl
						});
					}
				};
			}
			return onClickHandler;
		},

		/**
		 * @private When the desktop changes, update toolbar button states.
		 */
		_onDesktopChange: function(modelObject) {
			var t = this, resultSet = t.contentList.getResultSet();
			if (resultSet && t._toolbarCreated) {
				if (lang.isArray(modelObject)) { // after the lock/unlock/checkout/etc action completes, this is called with the items processed
					t.updateToolbarState();
				} else if (modelObject == ecm.model.desktop) {
					t.updateToolbarState();
				}
			}
		},

		/**
		 * @private When grid row selection changes, update toolbar button states.
		 */
		_onRowSelectionChange: function(selectedItems) {
			var t = this;
			t._selectedItems = selectedItems;
			if (t.actionsButton) {
				t.actionsButton.set("disabled", t._selectedItems.length == 0);
			}
			if (t._toolbarCreated) {
				t.updateToolbarState();
			}
		},

		/**
		 * Update toolbar button state.
		 */
		updateToolbarState: function() {
			var t = this, resultSet = t.contentList.getResultSet();
			if (t._toolbarCreated && t._toolbarButtons && resultSet) {
				for ( var i in t._toolbarButtons) {
					var toolbarButton = t._toolbarButtons[i];
					if (toolbarButton) {
						var disabled = !t._canPerform(toolbarButton.action);
						try {
							toolbarButton.set("disabled", disabled);
						} catch (e) {
							//ignore
						}
					}
				}
			}
		},

		/**
		 * @private Returns true if the action can be performed.
		 */
		_canPerform: function(action) {
			var t = this, resultSet = t.contentList.getResultSet();
			var canPerform = false;
			if (action.global) {
				canPerform = action.isGlobalEnabled(resultSet, t._selectedItems);
			} else if (t._selectedItems.length > 0) {
				var repository = resultSet.repository ? resultSet.repository : t._selectedItems[0].repository;
				canPerform = action.isEnabled(repository, resultSet.getToolbarDef(), t._selectedItems, resultSet.teamspace, resultSet);
			}
			return canPerform;
		},

		destroy: function() {
			var t = this;
			t.cleanUpToolButtons();
			t._selectedItems = null;
			t.inherited(arguments);
		}
	});
});

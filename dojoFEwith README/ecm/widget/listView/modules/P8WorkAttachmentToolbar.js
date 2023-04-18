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
	"dojo/_base/connect",
	"dojo/dom-construct",
	"dijit/registry",
	"dijit/form/Button",
	"dijit/form/DropDownButton",
	"dijit/Menu",
	"dijit/MenuSeparator",
	"dijit/MenuItem",
	"dijit/ToolbarSeparator",
	"ecm/widget/ActionMenu",
	"ecm/MessagesMixin",
	"ecm/widget/listView/modules/Toolbar2",
	"dijit/Tooltip",
	"ecm/model/AttachmentItem"
],

function(declare, lang, event, array, connect, domConstruct, registry, Button, DropDownButton, Menu, MenuSeparator, MenuItem, ToolbarSeparator, ActionMenu, MessagesMixin, Toolbar, Tooltip, AttachmentItem) {

	/**
	 * @name ecm.widget.listView.modules.P8WorkAttachmentToolbar
	 * @class This module provides IBM FileNet P8 work processor attachment toolbar capability.
	 * @augments ecm.widget.listView.modules.Toolbar
	 */

	return declare(Toolbar, {
		/** @lends ecm.widget.listView.modules.P8WorkAttachmentToolbar.prototype */

		/**
		 * @private
		 */
		_p8toolbarButtons: null,

		/**
		 * @private
		 */
		_p8separators: null,

		/**
		 * @private
		 */
		workItem: null,

		constructor: function() {
			if (!this._p8toolbarButtons) {
				this._p8toolbarButtons = [];
			}
			if (!this._p8separators) {
				this._p8separators = [];
			}
		},

		preload: function() {
			this.inherited(arguments);
		},

		destroy: function() {
			var t = this;
			t.clearToolbar();
			t._p8toolbarButtons = null;
			t._p8separators = null;
			t.inherited(arguments);
		},

		/**
		 * Cleans up the toolbar buttons.
		 */
		clearToolbar: function() {
			var t = this;
			t.inherited(arguments);

			if (t._addDocButton) {
				if (t._addDocButton.dropDown) {
					t._addDocButton.dropDown.destroyRecursive();
					t._addDocButton.dropDown = null;
				}
				t._addDocButton.destroyRecursive();
				t._addDocButton = null;
			}

			if (t._addFolderButton) {
				if (t._addFolderButton.dropDown) {
					t._addFolderButton.dropDown.destroyRecursive();
					t._addFolderButton.dropDown = null;
				}
				t._addFolderButton.destroyRecursive();
				t._addFolderButton = null;
			}
			// Delete the buttons
			if (t._p8toolbarButtons) {
				for ( var i in t._p8toolbarButtons) {
					t._p8toolbarButtons[i].destroyRecursive();
					t._p8toolbarButtons[i] = null;
				}
				t._p8toolbarButtons = [];
			}
			// Delete the separators
			if (t._p8separators) {
				for ( var i in t._p8separators) {
					t._p8separators[i].destroyRecursive();
					t._p8separators[i] = null;
				}
				t._p8separators = [];
			}
		},

		/**
		 * Creates the toolbar buttons. Adds extra hardcoded buttons, the base class will only list the default action.
		 */
		createToolbar: function() {
			var t = this, buttonArea = t.getButtonArea();
			t.inherited(arguments);
			t._createToolButtons(buttonArea);
			t.updateToolbarState();
		},

		/**
		 * Creates the toolbar buttons. Adds extra hardcoded buttons beyond the <code>AttachmentToolbar</code>
		 * buttons.
		 */
		_createToolButtons: function(buttonArea) {
			var t = this;
			var resultSet = t.contentList.getResultSet();
			t.inherited(arguments);
			t._p8toolbarButtons = [];
			t._p8separators = [];
			t._addFolderButton = null;
			t._addDocButton = null;
			// For the attachment toolbar, add hardcoded buttons as per the original design of WorkItemAttachmentsPane
			if (resultSet.getToolbarDef() == "AttachmentToolbar") {
				var addAttachmentToolbarButtons = false;
				if (resultSet.repository) {
					if (resultSet.repository.type != "cm") {
						addAttachmentToolbarButtons = true;
					}
				} else {
					// No repository set on result set, check for cross repository AttachmentItems set type
					if (resultSet.setType == "crAttachmentItems") {
						addAttachmentToolbarButtons = true;
					}
				}
				if (addAttachmentToolbarButtons) {
					t._createRemoveButton(buttonArea);
					t._createAddFolderButton(buttonArea);
					t._createAddDocumentButton(buttonArea);
					t._createSeparator(buttonArea);
				}
				t._createRefreshButton(buttonArea);
			}
		},

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
		 * @private Creates a separator bar.
		 */
		_createSeparator: function(buttonArea) {
			var t = this;
			var separator = new ToolbarSeparator();
			t._p8separators.push(separator);
			domConstruct.place(separator.domNode, buttonArea, "first");
		},

		/**
		 * @private Creates the Refresh button.
		 */
		_createRefreshButton: function(contentDiv) {
			var t = this, cl = t.contentList;
			var refreshButton = t._createButton(ecm.messages.refresh);
			refreshButton.isRefreshButton = true;
			t._p8toolbarButtons.push(refreshButton);
			t.connect(refreshButton, "onClick", lang.hitch(t, function(evt) {
				t._refreshAttachmentItem();
			}));
			domConstruct.place(refreshButton.domNode, contentDiv, "first");
		},

		/**
		 * @private Creates the Remove button.
		 */
		_createRemoveButton: function(contentDiv) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			var removeButton = t._createButton(ecm.messages.process_remove_attachment);
			removeButton.isRemoveButton = true;
			t._p8toolbarButtons.push(removeButton);
			t.connect(removeButton, "onClick", lang.hitch(t, function(evt) {
				var items = cl.getSelectedItems();
				if (items) {
					var attachment = resultSet.parentFolder;
					var attachmentName = attachment.authoredName;
					var attachmentItems = t.workItem.getValue(attachmentName);
					attachment.removeAttachment(attachmentItems, items);
					cl.setResultSet(attachment.resultSet);
				}
			}));
			domConstruct.place(removeButton.domNode, contentDiv, "first");
		},

		/**
		 * @private Creates the Add Folder button.
		 */
		_createAddFolderButton: function(contentDiv) {
			var t = this, cl = t.contentList;

			t._addFolderButton = new DropDownButton({
				label: ecm.messages.process_attachments_add_folder,
				dropDown: new Menu()
			});
			t._addFolderButton.isAddFolderButton = true;
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(t._addFolderButton.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});

			ecm.model.desktop.loadMenuActions("AddFolderAttachmentContextMenu", lang.hitch(t, function(actions) {
				array.forEach(actions, function(action) {
					(function() { // for scoping of action
						if (action.id == "Separator") {
							t._addFolderButton.dropDown.addChild(new MenuSeparator());
						} else {
							var mi;
							if (action.id == "SelectFolderAttachment") {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, lang.hitch(t, function(items) {
											if (items && items[0]) {
												t._addExistingAttachment(items[0]);
											}
										}), null);
									}
								});
							} else if (action.id == "AddFolderAttachment") {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, lang.hitch(t, function(item) {
											if (item) {
												t._addAttachment(item, item.repository, item.getValue("Id"), "", 2);
											}
										}), null);
									}
								});
							} else if (action.id == "CreateFolderUsingTemplate") {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, lang.hitch(t, function(item) {
											if (item) {
												t._addAttachment(item, item.repository, item.getValue("Id"), "", 2);
											}
										}), null);
									}
								});
							} else {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, null);
									}
								});
							}
							mi.action = action;
							t._addFolderButton.dropDown.addChild(mi);
						}
					})();
				});
			}));

			t.connect(t._addFolderButton.dropDown, "onOpen", "_setAddMenuActionsDisableState");
			t._p8toolbarButtons.push(t._addFolderButton);
			domConstruct.place(t._addFolderButton.domNode, contentDiv, "first");
		},

		/**
		 * @private Creates the Add Document button.
		 */
		_createAddDocumentButton: function(contentDiv) {
			var t = this, cl = t.contentList;
			t._addDocButton = new DropDownButton({
				label: ecm.messages.process_attachments_add_doc,
				dropDown: new Menu()
			});
			t._addDocButton.isAddDocumentButton = true;
			// Block right-click event, so the browser doesn't show an annoying right-click window
			t.connect(t._addDocButton.domNode, "oncontextmenu", function(evt) {
				event.stop(evt);
				return false;
			});

			ecm.model.desktop.loadMenuActions("AddDocumentAttachmentContextMenu", lang.hitch(t, function(actions) {
				array.forEach(actions, function(action) {
					(function() { // for scoping of action
						if (action.id == "Separator") {
							t._addDocButton.dropDown.addChild(new MenuSeparator());
						} else {
							var mi;
							if (action.id == "SelectDocumentAttachment") {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, lang.hitch(t, function(items) {
											if (items && items[0]) {
												t._addExistingAttachment(items[0]);
											}
										}), null);
									}
								});
							} else if (action.id == "AddDocumentAttachment") {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, lang.hitch(t, function(item) {
											if (item) {
												t._addAttachment(item, item.repository, "", item["vsId"], 3);
											}
										}), null);
									}
								});
							} else if (action.id == "ImportUsingTemplate") {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, lang.hitch(t, function(item) {
											if (item) {
												t._addAttachment(item, item.repository, "", item["vsId"], 3);
											}
										}), null, null);
									}
								});
							} else {
								mi = new MenuItem({
									label: action.name,
									onClick: function(evt) {
										var menuItem = registry.getEnclosingWidget(evt.target);
										menuItem.action.performAction(t.workItem.repository, t.workItem, null);
									}
								});
							}
							mi.action = action;
							t._addDocButton.dropDown.addChild(mi);
						}
					})();
				});
			}));
			t._p8toolbarButtons.push(t._addDocButton);
			domConstruct.place(t._addDocButton.domNode, contentDiv, "first");
			t.connect(t._addDocButton.dropDown, "onOpen", "_setAddMenuActionsDisableState");
		},

		/**
		 * @private Callback used to add a new attachment item that has been selected from a repository. Can be a
		 *          Document or Folder.
		 * @param item
		 *            Selected item, holds selection type (current, release or static) and real
		 *            {@link ecm.model.ContentItem} object.
		 */
		_addExistingAttachment: function(item) {
			var t = this;
			// "vsId" Will be null if static version (or a folder)
			// "version" will be null if selecting static version , "released" or "current" otherwise
			var type = 3; // is document
			if (item.contentItem.isFolder()) {
				type = 2; // this maps to PE attachment item types
			}
			// Need to convert version text to PE equivalent
			var version = "";
			if (item.version == "released") {
				version = "-1";
			} else if (item.version == "current") {
				version = ""; // what's this value
			} else {
				if (item.contentItem.repository.type == "p8") {
					version = item.contentItem.getValue("Id");
				} else {
					version = item.id;
				}
			}
			t._addAttachment(item.contentItem, item.contentItem.repository, version, item.vsId, type);
		},

		/**
		 * @private Add an new attachment item to an attachment bucket
		 */
		_addAttachment: function(item, repository, version, vsId, type) {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			if (item) {
				var attachment = resultSet.parentFolder;
				var attachmentName = attachment.authoredName;
				var attachmentItems = t.workItem.getValue(attachmentName);
				attachment.addAttachment(attachmentItems, item, repository, version, vsId, type);
				cl.setResultSet(attachment.resultSet);
			}
		},

		/**
		 * @private Configures the enabled state of the actions in the Add action dropdown list when it is opened.
		 */
		_setAddMenuActionsDisableState: function() {
			var t = this, resultSet = t.contentList.getResultSet();
			var attachment = resultSet.parentFolder;
			if (attachment.isInstanceOf && attachment.isInstanceOf(AttachmentItem)) {
				if (attachment.readOnly) {
					t._disableAddMenuActions(true);
				} else if (attachment.cardinality == "SINGLE") {
					if (attachment.resultSet.items.length > 0) {
						t._disableAddMenuActions(true);
					} else {
						t._disableAddMenuActions(false);
					}
				} else { // multi-valued attachment array
					t._disableAddMenuActions(false);
				}
			}
		},

		/**
		 * @private Configures the enabled state of the actions in the Add action dropdown list.
		 */
		_disableAddMenuActions: function(disabled) {
			var t = this;
			var childMenuItems = t._addFolderButton.dropDown.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.set("disabled", disabled);
			}, t);
			childMenuItems = t._addDocButton.dropDown.getChildren();
			array.forEach(childMenuItems, function(child) {
				child.set("disabled", disabled);
			}, t);
		},

		/**
		 * @private Refresh Attachment items, calls retrieveAttachmentContents to get cached data.
		 */
		_refreshAttachmentItem: function() {
			var t = this, cl = t.contentList;
			var contentListResultSet = cl.getResultSet();
			var attachment = contentListResultSet.parentFolder;
			attachment.retrieveAttachmentContents(false, true, lang.hitch(t, function(resultSet) {
				var modified = attachment.modified;
				if (!modified) {
					cl.setResultSet(resultSet);
				} else {
					var refreshedItems = resultSet.getItems();
					for (var i = 0; i < refreshedItems.length; i++) {
						for (var j = 0; j < contentListResultSet.length; j++) {
							if (refreshedItems[i].id == contentListResultSet[j].id) {
								contentListResultSet[j] = refreshedItems[i];
								break;
							}
						}
					}
					cl.setResultSet(contentListResultSet);
					// Update the attachment list cause refresh only updated saved items from server
					// If this list has newly selected/added items, they have not been saved to server yet
					attachment.setResultSet(contentListResultSet);
				}
			}));
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
			t.updateToolbarState();
			t.toolbar.updateToolbarState();
		},

		/**
		 * Update the enable/disable state of the toolbar buttons based on the listview selection. If no items are
		 * selected, disable all of the FileNet P8 hard-coded buttons (except for the Refresh button).
		 */
		updateToolbarState: function() {
			var t = this, cl = t.contentList, resultSet = cl.getResultSet();
			t.inherited(arguments);
			var nothingSelected = cl.getSelectedItems().length == 0;
			var parentFolder = resultSet.parentFolder;
			for ( var i in t._p8toolbarButtons) {
				var button = t._p8toolbarButtons[i];
				if (button.isAddFolderButton || button.isAddDocumentButton) {
					button.set("disabled", parentFolder.readOnly);
				} else if (button.isRemoveButton) {
					button.set("disabled", nothingSelected || parentFolder.readOnly);
				}
			}
		}
	});
});

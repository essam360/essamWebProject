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
	"dojo/_base/Deferred",
	"dojo/_base/sniff",
	"dojo/keys",
	"dojo/dom-construct",
	"dojo/dom-class", //
	"dojo/_base/json",
	"dojo/string",
	"dojo/data/ItemFileWriteStore",
	"dojox/uuid/Uuid",
	"dojox/uuid/generateRandomUuid",
	"dijit/tree/TreeStoreModel",
	"dijit/_Widget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/form/TextBox",
	"dijit/form/Button",
	"dijit/form/ComboButton",
	"dijit/layout/ContentPane",
	"dijit/Tree",
	"dijit/Menu",
	"dijit/MenuItem",
	"dijit/MenuSeparator",
	"dijit/CheckedMenuItem",
	"dijit/registry",
	"idx/layout/BorderContainer",
	"idx/layout/ContentPane",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/Messages",
	"ecm/model/Desktop",
	"ecm/model/Item",
	"ecm/model/ResultSet",
	"ecm/widget/teamspaceBuilder/Pane",
	"ecm/widget/teamspaceBuilder/RenameFolderDialog",
	"ecm/widget/teamspaceBuilder/TeamspacePropertiesDialog",
	"ecm/widget/dialog/AddContentItemDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/SelectObjectDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/RowContextMenuLoadMenu",
	"dojo/text!./templates/FoldersAndDocsPane.html"
],

function(declare, //
lang, //
event, //
array, //
Deferred, //
has, //
keys, //
domConstruct, //
domClass, //
dojoJson, //
string, //
ItemFileWriteStore, //
Uuid, //
generateRandomUuid, //
TreeStoreModel, //
_Widget, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
TextBox, //
Button, //
ComboButton, //
ContentPane, //
Tree, //
Menu, //
MenuItem, //
MenuSeparator, //
CheckedMenuItem, //
registry, //
idxBorderContainer, //
idxContentPane, //
html, //
LoggerMixin, //
Messages, //
Desktop, //
Item, //
ResultSet, //
Pane, //
RenameFolderDialog, //
TeamspacePropertiesDialog, //
AddContentItemDialog, //
ConfirmationDialog, //
SelectObjectDialog, //
ContentList, //
RowContextMenuLoadMenu, //
template) {

	/**
	 * @private Part of TeamspaceBuilder widget
	 * @name ecm.widget.teamspaceBuilder.FoldersAndDocsPane
	 * @class Provides a widget that is used to select the default documents and folders to include in the teamspace.
	 *        <p>
	 *        In IBM Content Navigator, this widget defines the <strong>Include Folders and Documents</strong> pane.
	 *        </p>
	 * @augments ecm.widget.teamspaceBuilder.Pane
	 */
	return declare("ecm.widget.teamspaceBuilder.FoldersAndDocsPane", [
		Pane,
		LoggerMixin
	], {
		/** @lends ecm.widget.teamspaceBuilder.FoldersAndDocsPane.prototype */

		// Template settings
		templateString: template,
		_tree: null,
		_count: 1,
		_selectedItem: null,
		view: {
			RENDER: "0",
			REFRESH_TREE: "1",
			RENDERED: "2"
		},
		state: "0",
		widgetsInTemplate: true,

		/** Overrides dijit._Widget.postCreate to create the TeamBuilder. */
		postCreate: function() {
			this.logEntry("postCreate");
			this.inherited(arguments);
			this.connect(this.getModel(), "onNameChange", "_renameRoot");
			this.logExit("postCreate");
			this.textDir = has("text-direction");
		},

		postMixInProperties: function() {
			this.init();
			this._setText();
		},

		_setText: function() {
			if (this.type == "template") {
				this._foldersIntroText = ecm.messages.workspacebuilder_template_folders_introText;
			} else {
				this._foldersIntroText = ecm.messages.workspacebuilder_instance_folders_introText;
			}
		},

		setModel: function(model) {
			this.model = model;
			this.connect(this.getModel(), "onNameChange", "_renameRoot");
			this.type = model.type;
			this._setText();
		},

		onChangeTemplate: function() {
			if (this.state == this.view.RENDERED)
				this.state = this.view.REFRESH_TREE;

		},
		_validate: function() {
			var model = this.getModel();
			var _this = this;
			if (model["validate"] == true) {
				var invalidItems = model["invalidFoldersandDocs"];
				this._displayWarning(ecm.messages.workspace_validation_docs_folders, invalidItems, true);
				/*if (invalidItems && invalidItems.length > 0) {
					array.forEach(invalidItems, function(invalidItem) {
						var node = _this._tree._itemNodesMap[invalidItem.id];
						//if (node[0])
						_this.recursiveRemove(node[0]);
					});
					_this._onTreeClick(_this._tree.rootNode.item, _this._tree.rootNode);
				}*/
			}
		},
		render: function() {
			if (this.state == this.view.RENDER) {
				this._borderContainer.addChild(this._createTopPane(), 0);
				this._borderContainer.addChild(this._createLeftPane(), 1);

				this.connect(this._contentList, "onRowDblClick", "_onGridRowDblClick");
				this._contentList.openItem = lang.hitch(this, function(item) {
					if (item) {
						if (item.isFolder()) {
							this._onGridRowDblClick(item);
						} else {
							var actionsHandler = ecm.model.desktop.getActionsHandler();
							if (actionsHandler) {
								actionsHandler.actionOpen(item);
							}
						}
					}
				});
				this._contentList.setGridExtensionModules(this._getContentListGridModules());
				this._createTree();
				setTimeout(lang.hitch(this, function() {
					//this._validate();
					this._borderContainer.resize();
				}, 100));

				this.state = this.view.RENDERED;
			} else if (this.state == this.view.REFRESH_TREE) {
				this._createTree();
				setTimeout(lang.hitch(this, function() {
					this._borderContainer.resize();
				}, 100));
				this.state = this.view.RENDERED;
			} else {
				this._borderContainer.resize();
			}
		},

		_createTopPane: function() {
			var self = this;
			var topPane = new idxContentPane({
				region: "top",
				style: "height:40px;",
				splitter: false,
				id: this.id + "_topPane"
			});
			var toolbar = domConstruct.create("DIV", {
				"class": "buttonArea"
			}, topPane.domNode);

			this.newFolderButton = new Button({
				label: ecm.messages.workspacebuilder_folders_newfolder
			});
			this.connect(this.newFolderButton, "onClick", "_showFolderDialog");
			toolbar.appendChild(this.newFolderButton.domNode);

			var menu = new Menu({
				style: "display: none;"
			});
			var menuItem1 = new MenuItem({
				label: ecm.messages.workspacebuilder_folders_local_drive,
				onClick: function() {
					self._showAddContentItemDialog("document");
				}
			});
			menu.addChild(menuItem1);

			var menuItem2 = new MenuItem({
				label: ecm.messages.workspacebuilder_folders_from_repo,
				onClick: function() {
					self._addContentItemFromRepo();
				}
			});
			menu.addChild(menuItem2);

			this.addDocument = new ComboButton({
				label: ecm.messages.workspacebuilder_folders_add_doc,
				onClick: function(evt) {
					self._addContentItemFromRepo();
				},
				dropDown: menu
			});
			toolbar.appendChild(this.addDocument.domNode);

			this.propertiesButton = new Button({
				disabled: false,
				label: ecm.messages.workspacebuilder_folders_props
			});
			this.connect(this.propertiesButton, "onClick", "_onPropertiesClick");
			toolbar.appendChild(this.propertiesButton.domNode);

			this.removeButton = new Button({
				disabled: true,
				label: ecm.messages.workspacebuilder_folders_remove
			});
			this.connect(this.removeButton, "onClick", "removeFromTreeWithConfirmation");
			toolbar.appendChild(this.removeButton.domNode);

			return topPane;
		},

		removeFromTreeWithConfirmation: function(selectedParentItem) {
			var self = this;
			var selectedItem = self._tree.selectedItems[0];
			var name = self._tree.model.store.getValue(selectedItem, "name");
			var confirmDelete = new ConfirmationDialog({
				text: string.substitute(ecm.messages.workspace_delete_item_confirmation_question, [
					!this.textDir ? html.escapeHTML(name) : this.enforceTextDirWithUcc(null, html.escapeHTML(name))
				]),
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				title: ecm.messages.confirmation_icon_tooltip,
				onExecute: function() {
					self._removeFromTree(selectedParentItem);
				}
			});
			confirmDelete.show();
		},

		_createLeftPane: function() {
			this.leftPane = new idxContentPane({
				region: "leading",
				splitter: true,
				style: "border: 1px solid #d9d9d9 !important; width: 190px; padding:5px !important;",
				id: this.id + "_leftPane"
			});
			return this.leftPane;
		},

		updateToolBarButtonStates: function() {
			if (this._tree.selectedItems) {
				var selectedNode = this._tree.getNodesByItem(this._tree.selectedItems[0])[0];
				if (!selectedNode || selectedNode.length == 0) {
					this.newFolderButton.set("disabled", true);
					this.addDocument.set("disabled", true);
				} else {
					this.newFolderButton.set("disabled", false);
					this.addDocument.set("disabled", false);
					//this.propertiesButton.set("disabled", false);
					if (this._tree.rootNode === selectedNode) { // don't allow delete on root node
						this.removeButton.set("disabled", true);
					} else {
						this.removeButton.set("disabled", false);
					}
				}
			}
		},

		_onPropertiesClick: function() {
			// check tree selection
			var selectedItem = this._tree.selectedItems[0];
			if (selectedItem) {
				var selectedNode = this._tree.getNodesByItem(selectedItem)[0];
				var isRoot = this._tree.rootNode === selectedNode;
				if (isRoot) {
					this._showTeamspacePropsDialog();
				} else {
					//var itemObject = this._convertArraysWithinObjects(selectedItem);
					//var contentItem = this._buildContentItem(itemObject);
					var oldName = this._tree.model.store.getValue(selectedItem, "name");
					var dlg = new RenameFolderDialog({
						name: oldName,
						callback: lang.hitch(this, function(newName) {
							this._renameItem(selectedItem, newName);
						})
					});
					dlg.show();
				}
			}
			//}
		},

		_showTeamspacePropsDialog: function() {
			if (!this._teamspacePropsDialog) {
				this._teamspacePropsDialog = new TeamspacePropertiesDialog({
					model: this.model
				});
			}
			this._teamspacePropsDialog.show();
		},

		destroy: function() {
			if (this._store)
				this._store = null;
			if (this._tree) {
				this._tree.destroy();
			}
			if (this.newFolderButton) {
				this.newFolderButton.destroy();
			}

			if (this.addDocument) {
				this.addDocument.destroy();
			}
			if (this._contentList) {
				this._contentList.setResultSet(null);
				this._contentList.destroy();
				this._contentList = null;
			}
			if (this.addItemDialog) {
				// Release the reference. The contents are self-destroyed.
				this.addItemDialog = null;
			}

			this.inherited(arguments);
		},

		_showDocDialog: function() {
			this._showAddContentItemDialog("document");
		},

		_showFolderDialog: function() {
			this._showAddContentItemDialog("folder");
		},

		_addContentItemFromRepo: function(selectedParentItem) {
			if (this.addContentItemFromRepoDialog) {
				this.addContentItemFromRepoDialog.destroy();
				this.addContentItemFromRepoDialog = null;
			}

			this.addContentItemFromRepoDialog = new SelectObjectDialog({
				selectionMode: "document",
				showMultiRepositorySelector: true, // displays SearchInDropDown (versus _FolderSelectorDropDown)
				repositoryTypes: this.getModel().repository.type,
				showExistingSearchRepositorySelector: false,
				showCrossRepositorySearches: false
			});
			var searchInDropdown = this.addContentItemFromRepoDialog.selectObject.searchCriteria.searchInDropDown;
			searchInDropdown.displaySelectTeamspacesNode = false; // show/hide Teamspaces in the left pane
			searchInDropdown.displayRepositoryDropDownList = false; // show/hide Repository pulldown on the top of right pane
			this.addContentItemFromRepoDialog.selectObject.setRepository(this.getModel().repository); // delay setting the repository so can set searchindropdown parameters above before it renders

			this.addContentItemFromRepoDialog.show(lang.hitch(this, function(items) {
				for (var i = 0; i < items.length; i++) {
					var properties = {};
					properties.docid = items[i].id;
					properties.mimetype = items[i].mimetype;
					properties.name = items[i].name;
					properties.documentType = "document";
					properties.security = {};
					properties.security.inherit = "false";
					this._addTeamspaceItem(properties, "document", selectedParentItem, items[i].contentItem, true);
				}
				this._onTreeClick(this._selectedItem, null); // delay the grid update until we loaded all the data
			}));
		},

		/***************************************************************************************************************
		 * @private Used to generate virtual folder that can be used in the add item dialog.
		 */
		_generateVirtualRootFolder: function(mockParentFolderId, selectedItemName) {
			var mockParentFolder = new Item(mockParentFolderId, selectedItemName);
			var params = {
				repository: this.getModel().repository,
				template: "Folder",
				mimetype: "folder",
				isVirtual: true,
				continuationData: null,
				"privileges": 117372924
			};
			lang.mixin(mockParentFolder, params);
			return mockParentFolder;
		},
		_showAddContentItemDialog: function(type, selectedParentItem) {
			var self = this;
			var repository = this.getModel().repository;
			var typeDocument = true;
			var virtualItem = true;
			if (type == "folder") {
				typeDocument = false;
			}
			var teamspace = this.getModel();

			this.logDebug("showAddContentItemDialog", "typeDocument: " + typeDocument);

			var selectedItemName = this._tree.getNodesByItem(this._tree.selectedItems[0])[0].item.name;
			var mockParentFolderId = this._generateID();

			var mockParentFolder = this._generateVirtualRootFolder(mockParentFolderId, selectedItemName);

			var useTemplate = false;
			var entryTemplates = null;
			if (this.parent.type == "instance" && typeDocument && this.getModel().usesClasses == false) {
				useTemplate = true;
				entryTemplates = this.getModel().entryTemplates;
			}

			this.addItemDialog = new AddContentItemDialog({
				_useTeamspaceACL: false,
				_validationCallback: function(name) {
					return self.isFolderNameUnique(name);
				},
				skipPreloadingFileTracker: !typeDocument,
				destroyWhenFinished: true,
				singleDocumentSelect: true
			});

			if (!typeDocument) {
				if (repository.type == "cm")
					this.addItemDialog._filterType = "hierarchicalCreateFolder";

				this.connect(this.addItemDialog, "addFolderInMemory", function(properties) {
					self._addTeamspaceItem(properties, type, selectedParentItem);
				});
			} else {
				// The content class cache in repository is buggy and needs refactoring because of timing issues.
				// The following code is to make sure the cache is not used after a call was made with the filter.
				///this.getModel().getRepository()._fullContentClassList = false;
				if (repository.type == "cm")
					this.addItemDialog._filterType = "nonHierarchicalDocument";
				//this.addItemDialog._filterType = "hierarchicalCreateDocument";
			}

			this.addItemDialog.show(this.getModel().repository, mockParentFolder, typeDocument, true, function(newItem) {
				if (typeDocument) {
					var properties = {};
					var itemProperties = newItem;
					properties.docid = itemProperties.id;
					properties.mimetype = itemProperties.mimetype;
					properties.name = itemProperties.name;
					properties.documentType = itemProperties.template;
					properties.security = {};
					properties.security.inherit = "true";
					self._addTeamspaceItem(properties, type, selectedParentItem, newItem);
				}
			}, teamspace, useTemplate, entryTemplates);
		},

		_createItem: function(folderName, name, itemID, mimeType, docID, path) {
			var item = {
				"Folder Name": folderName,
				"icon": " ",
				type: mimeType,
				id: itemID,
				"mimeTypeIcon": " ",
				"name": name,
				"Name": name,
				path: path,
				privileges: 0,
				locked: false,
				modifyPermissions: false,
				children: [],
				"rowProperties": {
					"_type": "ItemProperties",
					"_value": {
						"lockedUser": "",
						"docid": docID,
						id: "rowID_" + itemID,
						"locked": false,
						"isSelected": false,
						"mimetype": mimeType,
						"name": name,
						"privAddItem": false,
						"privAddNotes": false,
						"privAddToFolder": false,
						"privCheckInOutDoc": false,
						"privCheckOutDoc": false,
						"privDelete": false,
						"privEditProperties": false,
						"privHold": false,
						"privPrintNotes": false,
						"privRemoveFromFolder": false,
						"privViewNotes": false,
						"template": "Folder"
					}
				}
			};

			return item;
		},
		// convert the items to a format for the the grid.  In the future we should build virtual items and virtual store models
		// The dojo stores require a type map for the attribute object in the new navigator json format.
		_convertItemsToJsonItem: function(items) {
			var jsonItems = [];
			for (var i = 0; items != null && i < items.length; i++) {
				var item = items[i];
				var itemID = item.id;
				if (item.type != "folder") {
					itemID = item.rowProperties._value.properties.docid;
				}
				var jsonItem = {
					"path": item.path,
					children: [],
					"lockedUser": "",
					"hasBookmarks": false,
					"hasNote": false,
					"id": itemID,
					"locked": item.locked,
					"declaredAsRecord": false,
					"isFirstPartVersionControlByApp": false,
					"isHierarchicalItemType": false,
					"isVersionControlByApp": false,
					"mimetype": item.type,
					"name": item.name,
					"privileges": item.privileges,
					"locked": item.locked,

					"rootfolder": false,
					"template": "Folder",
					"versionControl": false,
					"attributes": {
						"name": [
							item.name,
							"xs:string"
						]
					}
				};

				jsonItems.push(jsonItem);
			}
			return jsonItems;
		},

		/** * content list *** */
		_getContentListGridModules: function() {
			var array = [];
			array.push({
				moduleClass: RowContextMenuLoadMenu,
				loadMenu: lang.hitch(this, "_loadContentListContextMenu")
			});
			return array;
		},

		// Open folder when a folder is double clicked in the grid
		_onGridRowDblClick: function(item) {
			if (item.mimetype == "folder") {
				this._selectedItem = this._getItemFromTreeStore(item.id);
				this._selectedNode = this._tree.getNodesByItem(this._selectedItem)[0];
				this._tree.set("selectedItem", this._selectedItem);
				this._onTreeClick(this._selectedItem, this._selectedNode);

				// not sure why but I had to expand the root node in case it was not expanded.  
				// This is probably a dojo bug.  I should only need to expand the selected node.
				var deferredRoot = this._tree._expandNode(this._tree.rootNode);
				deferredRoot.addCallback(lang.hitch(this, function() {
					this.set("selectedItem", this._tree.rootNode.item);
				}));

				var deferred = this._tree._expandNode(this._selectedNode);
				deferred.addCallback(lang.hitch(this, function() {
					this.set("selectedItem", this._selectedItem);
				}));
			}
		},

		// Called when right click within the grid.  Shows the item(s) content menu.
		_loadContentListContextMenu: function(menu, selectedItems) {
			var def = new Deferred();
			if (selectedItems && selectedItems.length > 0) {
				var item = selectedItems[0]; // item is a ContentItem here
				var self = this;

				(function() { // for scoping of action
					var isFolder = item["mimetype"] == "Folder" || item["mimetype"] == "folder";
					if (!isFolder) {
						var removeItem = new MenuItem({
							label: ecm.messages.workspacebuilder_folders_remove,
							onClick: function(evt) {
								var confirmDelete = new ConfirmationDialog({
									text: string.substitute(ecm.messages.workspace_delete_item_confirmation_question, [
										!this.textDir ? html.escapeHTML(item.name) : this.enforceTextDirWithUcc(null, html.escapeHTML(item.name))
									]),
									buttonLabel: ecm.messages.workspacebuilder_folders_remove,
									title: ecm.messages.confirmation_icon_tooltip,
									cancelButtonDefault: true,
									onExecute: function() {
										self._deleteItem(item);
									}
								});
								confirmDelete.show();
							}
						});
						menu.addChild(removeItem);

						var _readOnly = self.getModel().repository.type == "cm" ? !item.hasPrivilege("privEditProperties") || !item.hasPrivilege("privCheckOutDoc") : !item.hasPrivilege("privEditProperties");
						var _canModifyPermissions = self.getModel().repository.type == "cm" ? !_readOnly : item.hasPrivilege("privModifyPermissions");

						var properties = new MenuItem({
							label: ecm.messages.edit_properties_dialog_title,
							disabled: !_canModifyPermissions,
							onClick: function(evt) {
								self.model.repository.retrieveItem(item.id, lang.hitch(this, function(documentItem) {
									ecm.model.desktop.getActionsHandler().actionEdit(self.getModel().repository, [
										documentItem
									], function() {
										// refresh the updated item
										self.model.repository.retrieveItem(item.id, lang.hitch(this, function(editedItem) {
											self._renameItemInList(item, editedItem.name);
										}));
									});

								}));
							}
						});
						menu.addChild(properties);

						// document - add as copy or as reference
						self._configDocumentContextMenu(menu, item);
					} else { // folder
						var selectedItem = self._getItemFromTreeStore(item.id);

						var newFolder = new MenuItem({
							label: ecm.messages.workspacebuilder_folders_newfolder,
							onClick: function(evt) {
								self._showAddContentItemDialog("folder", selectedItem);
							}
						});
						menu.addChild(newFolder);

						var deleteFolder = new MenuItem({
							label: ecm.messages.workspacebuilder_folders_remove,
							onClick: function(evt) {
								var name = self._tree.model.store.getValue(selectedItem, "name");
								var confirmDelete = new ConfirmationDialog({
									text: string.substitute(ecm.messages.workspace_delete_item_confirmation_question, [
										!this.textDir ? html.escapeHTML(name) : this.enforceTextDirWithUcc(null, html.escapeHTML(name))
									]),
									buttonLabel: ecm.messages.delete_confirmation_button,
									cancelButtonDefault: true,
									title: ecm.messages.confirmation_icon_tooltip,
									onExecute: function() {
										self._removeFromTree(selectedItem);
									}
								});
								confirmDelete.show();
							}
						});
						menu.addChild(deleteFolder);

						menu.addChild(new MenuSeparator());

						var addFromLocal = new MenuItem({
							label: ecm.messages.workspacebuilder_folders_adddoc_local,
							onClick: function(evt) {
								self._showAddContentItemDialog("document", selectedItem);
							}
						});
						menu.addChild(addFromLocal);

						var addFromRepo = new MenuItem({
							label: ecm.messages.workspacebuilder_folders_adddoc_repo,
							onClick: function(evt) {
								self._addContentItemFromRepo(selectedItem);
							}
						});
						menu.addChild(addFromRepo);

						menu.addChild(new MenuSeparator());

						///// new "properties action"
						var propertiesAction = new MenuItem({
							label: ecm.messages.workspacebuilder_folders_props,
							onClick: function(evt) {
								var oldName = self._tree.model.store.getValue(selectedItem, "name");
								var dlg = new RenameFolderDialog({
									name: oldName,
									callback: function(newName) {
										self._renameItem(selectedItem, newName);
									}
								});
								dlg.show();
							}
						});
						menu.addChild(propertiesAction);
					}
					def.callback();
				})();
			}
			return def;
		},

		_configDocumentContextMenu: function(menu, item) {
			var storeItem = this._getItemFromTreeStore(item.id);

			// check if editing/creating a template or creating a teamspace 
			var isTemplate = true;
			if (this.type == "instance" && this.parent.mode == "create") {
				isTemplate = false;
			}
			if (storeItem && isTemplate) {
				var store = this._store;
				var isCopy = store.getValue(storeItem, "IsCopy") == true;

				menu.addChild(new MenuSeparator());

				// add doc as a link menu option
				menu.addChild(new MenuItem({
					label: ecm.messages.workspacebuilder_folders_makeDocLink,
					disabled: !isCopy,
					onClick: function(evt) {
						store.setValue(storeItem, "IsCopy", null);
						store.save();
					}
				}));

				// add doc copy menu option
				menu.addChild(new MenuItem({
					label: ecm.messages.workspacebuilder_folders_makeDocCopy,
					disabled: isCopy,
					onClick: function(evt) {
						store.setValue(storeItem, "IsCopy", true);
						store.save();
					}
				}));
			}
		},

		// item is ContentItem.js
		_renameItemInList: function(item, newName) {
			var itemId = item.id;
			var storeItem = this._getItemFromTreeStore(itemId);
			if (storeItem) {
				item.name = newName;
				this._renameItem(storeItem, newName);
			} else {
				this.logError("_renameItemInList", "item was not found in the store: " + item.name);
			}
		},

		_buildResultSet: function(repository, gridItems) {
			var json = {};
			var fields = new Array("mimeTypeIcon", "name");

			var names = new Array("  ", ecm.messages.Name);
			var widthColumn = "25px";
			var columns = {};
			var cells = [];
			var cellData = [];

			var items = [];

			for (var i = 0; i < fields.length; i++) {
				var column;
				if (i == 1) {
					widthColumn = "200px";
					column = this._createColumn(widthColumn, fields[i], names[i]);
				} else {
					column = this._createColumn(widthColumn, fields[i], names[i], "DetailsViewDecorator.mimeTypeDecorator");
				}

				cellData.push(column);

			}
			cells.push(cellData); // make double array
			columns.cells = cells;
			json.columns = columns;
			json.sortIndex = 2;
			json.sortDirection = -1;
			json.rows = this._convertItemsToJsonItem(gridItems);
			json.repository = repository;

			var resultSet = new ResultSet(json);
			resultSet.sortIndex = 2;
			resultSet.sortDirection = -1;
			resultSet.setType = "templateVFolders";
			resultSet.parentFolder = this.getModel(); /// do sort requires parent object to sort.
			return resultSet;
		},

		_createColumn: function(width, field, name, decoratorClass) {
			var column;
			if (decoratorClass) {
				column = {
					"cellClasses": "ecmIconCell",
					"sortable": false,
					"headerClasses": "ecmIconCell",
					"decorator": decoratorClass,
					"field": field,
					"name": name,
					width: width
				};
			} else {
				column = {
					"field": field,
					"name": name,
					width: width
				};
			}
			return column;
		},

		/** *** tree **** */

		// summary:
		//	The base class for  dijits that create virtual items
		// description:
		//	This class provides utilities to create virtual items for tree.
		/*Checks to see if the folder name is unique for children of the same parent.
		 * @Param Name - the name to verify is unique
		 */
		isFolderNameUnique: function(name) {
			var selectedNode = this._tree.getNodesByItem(this._tree.selectedItems[0]);

			var parent;
			if (this._tree.rootNode === selectedNode[0]) {
				parent = this._tree.rootNode;
			} else {
				parent = selectedNode[0].getParent();
			}

			var childrenNodes = parent.getChildren();
			var i;
			for (i = 0; i < childrenNodes.length; i++) {
				var item = childrenNodes[i].item;
				if (item) {
					if (item.name == name) {
						return false;
					}
				}
			}
			return true;
		},

		// Walk through all the attribute values of all the items,
		// and replace single values arrays with single values.
		// FileWrite store adds arrays for single value items in the store.
		_convertArraysWithinObjects: function(origItem) {
			var item = lang.mixin({}, origItem); // make a shallow copy so that we don't mess up the data in the store. 
			for ( var key in item) {
				var value = item[key];
				if (lang.isArray(value)) {
					item[key] = value[0];
				}
			}
			return item;
		},

		/*This method is called when the tree model is saved */
		_addTreeDataToTeamspaceModel: function(saveCompleteCallback, saveFailedCallback, newFileContentString) {
			var folderStructureObject = dojoJson.fromJson(newFileContentString);
			this.model.folders = folderStructureObject.items;
			this.model.onChange(this.model);
			saveCompleteCallback();
		},

		_saveFailed: function(folderName) {
			this.logDebug("_saveFailed", "saved failed for the model");
		},

		/* generate a path for the item based on parent item*/
		_generateItemPath: function(parent, name) {
			var path = "";
			if (parent.path == "/")
				path = parent.path + name;
			else
				path = parent.path + "/" + name;

			return path;
		},

		/* use to generate unique id for virtual items. */
		_generateID: function() {
			return new Uuid(generateRandomUuid()).toString();
		},

		_addTeamspaceItem: function(itemProperties, type, selectedParentItem, contentItem, ignoreOnTreeClick) {
			var itemName = "";
			var mimeType = type;
			var id = this._generateID();
			if (type == "folder")
				itemName = itemProperties.folderName;
			else {
				itemName = itemProperties.name;
				mimeType = itemProperties.mimetype;
				id = new Uuid(generateRandomUuid()).toString();//itemProperties.docid;
			}
			var parent = this._selectedItem;
			if (selectedParentItem)
				parent = selectedParentItem;

			var newItem = this._createItem("NotUsed", itemName, id, mimeType, id, this._generateItemPath(parent, itemName));
			//If a content item was passed from add doc, use it's properties since it's not a virtual item and we need the security privs
			if (contentItem && contentItem.isInstanceOf && contentItem.isInstanceOf(ecm.model.ContentItem)) {
				//newItem.rowProperties._value = contentItem.attributes;
				newItem.rowProperties._value.properties = {};
				newItem.rowProperties._value.properties.docid = itemProperties.docid;
				newItem.rowProperties._value.properties.mimetype = itemProperties.mimetype;
				newItem.rowProperties._value.properties.name = itemProperties.name;
				newItem.rowProperties._value.properties.documentType = itemProperties.documentType;
				newItem.rowProperties._value.properties.securityInheritance = itemProperties.security.inherit;
				newItem.privileges = contentItem.privileges;
				newItem.locked = contentItem.locked;
			} else {
				// virutal folders
				newItem.rowProperties._value.properties = itemProperties;
			}

			this._tree.model.store.newItem(newItem, {
				parent: parent,
				attribute: "children"
			});
			this._tree.model.store.save();
			this._count++;
			if (ignoreOnTreeClick == undefined || ignoreOnTreeClick == false) {
				this._onTreeClick(this._selectedItem, null);
			}
			this._tree.set("selectedItems", [
				this._selectedItem
			]);

			// sorts the content list
			if (this._contentList.getGridModule("sort") && this._contentList.getGridModule("sort")._onClick) {
				this._contentList.getGridModule("sort")._onClick({
					columnId: "2"
				});
			}
		},

		_getInitialTreeItems: function() {
			var teamspaceName = this.getModel().name;
			if (!teamspaceName || teamspaceName.length == 0)
				teamspaceName = "Teamspace Root";

			var items = [];
			if (this.getModel().type == "instance" && this.getModel().folders.length > 0) {
				items = this.getModel().folders;
				if (items) {
					items = lang.clone(items); // javascript arrays are passed as pointers need to clone so the tree widget does not muckup data in the model 
					items[0].name = teamspaceName;
				}
			} else {
				var item = this._createItem("folderName", teamspaceName, "0", "folder", "doc_id_virtual", "/");
				item.rowProperties._value.properties = null;
				items = [
					item
				];
			}
			this.logDebug("_getInitialTreeItems", dojoJson.toJson(items));
			return items;
		},

		_createTreeStore: function() {
			var tree_Data = {
				identifier: "id",
				label: "name",
				items: this._getInitialTreeItems()
			};

			var tree_Store = new ItemFileWriteStore({
				data: tree_Data,
				typeMap: {
					"ItemProperties": {
						type: String,
						deserialize: function(value) {
							return {
								_value: value
							};
						}
					}
				}
			});

			this._store = tree_Store;

			tree_Store._saveEverything = lang.hitch(this, "_addTreeDataToTeamspaceModel");
			var model = new TreeStoreModel({
				store: tree_Store,
				query: {
					id: "0"
				},
				childrenAttrs: [
					"children"
				],
				mayHaveChildren: function(/*dojo.data.Item*/item) {
					// summary:
					//		Tells if an item has or may have children.  Implementing logic here
					//      overridden to operate based on the type of item
					return this.store.getValue(item, "type") == "folder";
				}
			});

			return model;
		},

		_onTreeClick: function(item, node) {
			// summary:
			//	Event called when a item is selected in the tree
			// update button states

			this._selectedNode = node;
			this._selectedItem = item;
			this.updateToolBarButtonStates();
			var rows = [];
			for (var i = 0; item.children && i < item.children.length; i++) {
				var childItem = item.children[i];
				//if(childItem["properties"])
				childItem = this._convertArraysWithinObjects(childItem);
				rows.push(childItem);
			}
			var resultSet = this._buildResultSet(this.getModel().repository, rows);
			resultSet.mimeIndex = 0;
			this._contentList.setResultSet(resultSet);
			this._borderContainer.resize();
			this.updateToolBarButtonStates();
		},

		_renameRoot: function() {
			//this._tree.set("selectedItem", this._tree.rootNode.item);	
			if (this._tree) {
				this._tree.model.store.setValue(this._tree.rootNode.item, "name", this.getModel().name);
				this._tree.model.store.save();
			}
		},
		_getItemParentPath: function(storeItem) {
			var store = this._tree.model.store;
			var path = store.getValue(storeItem, "path");
			if (path) {
				var endIndex = path.lastIndexOf("/");
				if (endIndex != -1) {
					path = path.substring(0, endIndex + 1);
				}
			}
			return path;
		},
		_renameItem: function(storeItem, newName) {
			var store = this._tree.model.store;
			// change folder name everywhere in the item
			var path = store.getValue(storeItem, "path");
			if (path) {
				var endIndex = path.lastIndexOf("/");
				if (endIndex != -1) {
					path = path.substring(0, endIndex + 1);
					path += newName;
					store.setValue(storeItem, "path", path);
				}
			}

			store.setValue(storeItem, "name", newName);
			store.setValue(storeItem, "Name", newName);
			var rowProperties = store.getValue(storeItem, "rowProperties");
			rowProperties._value.name = newName;
			rowProperties._value.properties.folderName = newName;
			array.forEach(rowProperties._value.properties.criterias, function(item) {
				if (item.name == "FolderName" || item.name == "ICM$NAME") {
					item.value = newName;
				}
			});

			store.save();

			// refresh grid
			this._onTreeClick(this._selectedItem, this._selectedNode);
		},

		/* Search the tree store for an item from the content list which is a Resultset item*/
		_getItemFromTreeStore: function(itemId) {
			var items = this._tree.model.store._arrayOfAllItems;
			for (var i = 0; i < items.length; i++) {
				var storeItem = items[i];
				if (storeItem && storeItem.id[0] == itemId) {
					return storeItem;
				}
			}
			// search documents
			for (var i = 0; i < items.length; i++) {
				var storeItem = items[i];
				if (storeItem && storeItem.rowProperties[0] && storeItem.rowProperties[0]._value && storeItem.rowProperties[0]._value.properties && storeItem.rowProperties[0]._value.properties.docid == itemId) {
					return storeItem;
				}
			}
			return null;
		},
		_deleteItemById: function(id) {
			this._tree.model.store.fetchItemByIdentity({
				identity: id,
				onItem: function(item, request) {
					console.log(item);
					this._tree.model.store;
				}
			});
			//window.grid.store.deleteItem(id);
		},
		// delete item from grid, which removes the item from the tree store.
		_deleteItem: function(item) {
			var theItem = this._getItemFromTreeStore(item.id);
			if (theItem) {
				this._tree.model.store.deleteItem(theItem);
				this._tree.model.store.save();

				// refresh grid
				this._onTreeClick(this._selectedItem, this._selectedNode);

			} else {
				this.logError("_deleteItem", "item was not found in the store: " + item.name);
			}
		},

		recursiveRemove: function(node) {
			this._tree._expandNode(node);
			var children = node.getChildren();

			if (children && children.length > 0) {
				for (var i = 0; children && i < children.length; i++) {
					this.recursiveRemove(children[i]);
				}
			}

			this._tree.model.store.deleteItem(node.item);
			this._tree.model.store.save();

		},

		// Remove folder item from tree
		_removeFromTree: function(selectedParentItem) {
			var selectedNode = this._tree.getNodesByItem(this._tree.selectedItems[0]);
			if (selectedParentItem && selectedParentItem["type"] && selectedParentItem["type"] != "click") // global toolbar buttons passes an event. Makes sure this is a store item
				selectedNode = this._tree.getNodesByItem(selectedParentItem);

			var parent = selectedNode[0].getParent();
			this._tree.set("selectedItems", [
				parent.item
			]);
			this._selectedItem = parent.item;
			this._selectedNode = parent;
			this.recursiveRemove(selectedNode[0]);
			// refresh grid
			this._onTreeClick(this._selectedItem, this._selectedNode);
		},

		_createTree: function() {
			var self = this;

			var tree = registry.byId(this.id + "_workspaceBuilderTree");
			if (tree) {
				this.logDebug("_createTree", "tree.destroy()");
				tree.destroy();
			}
			var treeDiv = domConstruct.create("DIV", null, this.leftPane.domNode);

			this._tree = new Tree({
				model: this._createTreeStore(),
				id: this.id + "_workspaceBuilderTree",
				showRoot: true,
				showFoldersOnly: "true",
				textDir: has("text-direction"),

				getIconClass: function(/*dojo.data.Item*/item, /*Boolean*/opened) {
					if (item.path[0] == "/")
						return "teamspaceIconSmall";
					else
						return (!item || this.model.mayHaveChildren(item)) ? (opened ? "dijitFolderOpened" : "dijitFolderClosed") : "dijitLeaf";
				},

				// needed to overide this to be able to hide document nodes in the tree.
				_createTreeNode: function(/*Object*/args) {
					var item = args.item;
					var node = new Tree._TreeNode(args);
					if (args.item.type != "folder")
						node.rowNode.style.display = "none";
					return node;
				}
			}, treeDiv);
			this.connect(this._tree, "onLoad", "_validate");
			this.connect(this._tree, "onClick", "_onTreeClick");
			this.connect(this._tree.domNode, "oncontextmenu", "_openTreeContextMenu");
			this._tree.set("selectedItem", this._tree.rootNode.item);
			this._selectedNode = this._tree.rootNode;
			this._selectedItem = this._tree.rootNode.item;

			this._onTreeClick(this._selectedItem, this._selectedNode);

		},

		_openTreeContextMenu: function(evt) {
			event.stop(evt);
			if (this._menu) {
				this._menu.destroy();
			}
			this._menu = new Menu({});

			var targetNode = registry.getEnclosingWidget(evt.target);
			var item = targetNode.item;
			this._selectedNode = targetNode;
			this._selectedItem = item;
			var self = this;

			if (item) {
				(function() { // for scoping of action
					//var selectedNode = self._tree.getNodesByItem(self._tree.selectedItems[0])[0];

					var newFolder = new MenuItem({
						label: ecm.messages.workspacebuilder_folders_newfolder,
						onClick: function(evt) {
							//ecm.widget.workspaceBuilder.CreateFolderDialog.show();
							self._showAddContentItemDialog("folder");
						}
					});
					self._menu.addChild(newFolder);

					var deleteFolder = new MenuItem({
						label: ecm.messages.workspacebuilder_folders_remove,
						onClick: function(evt) {
							self.removeFromTreeWithConfirmation();
						}
					});
					var isRoot = self._tree.rootNode === targetNode;
					deleteFolder.set("disabled", isRoot);
					self._menu.addChild(deleteFolder);

					self._menu.addChild(new MenuSeparator());

					var addFromLocal = new MenuItem({
						label: ecm.messages.workspacebuilder_folders_adddoc_local,
						onClick: function(evt) {
							self._showAddContentItemDialog("document");
						}
					});
					self._menu.addChild(addFromLocal);

					var addFromRepo = new MenuItem({
						label: ecm.messages.workspacebuilder_folders_adddoc_repo,
						onClick: function(evt) {
							self._addContentItemFromRepo();
						}
					});
					self._menu.addChild(addFromRepo);

					self._menu.addChild(new MenuSeparator());

					///// new "properties action"
					var onPropsClick;
					if (isRoot) {
						onPropsClick = lang.hitch(self, "_showTeamspacePropsDialog");
					} else {
						onPropsClick = function(evt) {
							var oldName = self._tree.model.store.getValue(item, "name");
							var dlg = new RenameFolderDialog({
								name: oldName,
								callback: function(newName) {
									self._renameItem(item, newName);
								}
							});
							dlg.show();
						};
					}

					var propertiesAction = new MenuItem({
						label: ecm.messages.workspacebuilder_folders_props,
						onClick: onPropsClick
					});
					self._menu.addChild(propertiesAction);

				})();

				var coords = null;
				if (evt.keyCode && evt.keyCode !== keys.F10 && evt.pageX) {
					coords = {
						x: evt.pageX,
						y: evt.pageY
					};
				}
				self._menu._openMyself({
					target: evt.target,
					coords: coords
				});

				this._tree.set("selectedItem", self._selectedItem);
				this._onTreeClick(self._selectedItem, self._selectedNode);
			}

			return false;
		},

		_buildContentItem: function(/* String */itemJSON) {
			var item = ContentItem.createFromJSON(itemJSON, this.getModel().repository, null, null);
			return item;
		}

	});
});

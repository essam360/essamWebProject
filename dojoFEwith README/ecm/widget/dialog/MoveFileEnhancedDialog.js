/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/json",
	"dojo/_base/lang", //
	"dojo/_base/connect", //
	"dojo/_base/event",
	"dojo/_base/sniff", //	
	"dojo/dom-class", //
	"dojo/dom-style", //
	"dojo/dom-construct", //
	"dojo/dom-attr", //
	"dojo/_base/array",
	"dojo/keys", //
	"dojo/aspect", //
	"dijit/form/Select", //
	"dijit/layout/BorderContainer", //
	"dijit/layout/ContentPane", //
	"idx/html", //
	"ecm/widget/listView/modules/RepositorySelector",
	"./BaseDialog", //
	"./MessageDialog", //
	"./LoginDialog",
	"../listView/ContentList", //
	"../listView/modules/Bar", //
	"../listView/modules/Breadcrumb", //
	"../listView/modules/FilterDataServer", //
	"../listView/modules/InlineMessage", //
	"../CheckBox", //
	"dojo/text!./templates/MoveFileEnhancedDialogContent.html"
], //
function(declare, //
dojojson, //
lang, //
connect, //
event, //
has, //
domClass, //
domStyle, //
domConstruct, //
domAttr, //
array, //
keys, //
aspect, //
Select, //
BorderContainer, //
ContentPane, //
idxHtml, //
RepositorySelectorModule, //
BaseDialog, //
MessageDialog, //
LoginDialog, //
ContentList, //
Bar, //
Breadcrumb, //
FilterDataServer, //
InlineMessage, //
CheckBox, //
template) {

	/**
	 * @name ecm.widget.dialog.MoveFileEnhancedDialog
	 * @class Provides a dialog box that is used to move a document or folder from one folder to another folder.
	 * @augments ecm.widget.dialog.BaseDialog
	 * @since 2.0.3.5
	 */
	var MoveFileEnhancedDialog = declare("ecm.widget.dialog.MoveFileEnhancedDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.MoveFileEnhancedDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A string, either "actionMoveFolderToFolder" or "actionAddToFolder" or "actionCopyToFolder" depending on the
		 * desired action.
		 * 
		 * @public
		 */
		action: "",

		/**
		 * The repository object. Instance of {@link ecm.model.Repository}
		 * 
		 * @public
		 */
		repository: null,

		/**
		 * An optional teamspace {@link ecm.model.Teamspace} object used wben action is "actionAddToFolder".
		 * 
		 * @public
		 */
		teamspace: null,

		/**
		 * Whether the browse choice will be displayed.
		 */
		displaySelectBrowseNode: true,

		/**
		 * Whether the teamspaces choice will be displayed if the repository supports teamspaces.
		 */
		displaySelectTeamspacesNode: true,

		/**
		 * Default selected repository for repository selector
		 * 
		 * @since 2.0.3.6
		 */
		defaultSelectedRepository: null,

		displaySelectRepositoryNode: true,
		_unselectableFolders: null,
		_unselectableParentFolders: null, // only used to prevent moving a folder into one of its own subfolder
		_parentFolders: null,
		_newSourceFolder: null,
		_hasPermissionToPerformActionOnSelectedFolder: true,
		_hasPermissionToMoveFromAnyFolder: false,
		_tooltips: null,
		_copyMode: "0",

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);

			domClass.add(this.domNode, "ecmMoveFileEnhancedDialog");
			this.setResizable(true);

			domStyle.set(this.domNode, "maxHeight", "none");

			this.textDir = has("text-direction");

			this.logDebug(methodName, "Action is " + this.action);
			var actionCaption = "";
			if (this.action == "actionMoveFolderToFolder" || this.action == "actionMoveDocumentToFolder") {
				this.setTitle(this.messages.move_to_folder_title);
				actionCaption = this.messages.move_to_folder_button_caption;
			} else if (this.action == "actionAddToFolder") {
				this.setTitle(this.messages.add_to_folder_title);
				actionCaption = this.messages.add_to_folder_button_caption;
			} else if (this.action == "actionCopyToFolder") {
				this.setTitle(this.messages.copy_to_folder_title);
				actionCaption = this.messages.copy_to_folder_button_caption;
			} else if (this.action == "actionBoxCopy") {
				this.setTitle(this.messages.box_copy);
				actionCaption = this.messages.box_copy__button_caption;
			}

			this.okButton = this.addButton(actionCaption, "_action", false, false);

			// Enable the OK button when the user selects a folder in the selector.
			this.okButton.set("disabled", true);

			this.logExit(methodName);
		},

		/**
		 * Returns the content list modules used by this view.
		 * 
		 * @return Array of content list modules.
		 */
		getContentListModules: function() {
			var modules = [];
			modules.push({
				moduleClass: Bar,
				top: [
					[
						[
							{
								moduleClass: RepositorySelectorModule,
								"className": "BarRepositorySelector",
								defaultSelectedId: this.defaultSelectedRepository != null ? this.defaultSelectedRepository.id : null,
								validateRepository: lang.hitch(this, function(repository) {
									if ((repository._isP8() || repository._isCM() || repository._isBox()) && this.repositoryCount != 1) {
										if (this._items[0].repository.type != repository.type && (repository["boxCopyEnabled"] || repository._isBox())) {
											if ((this._items[0].repository._isP8() && repository._isCM()) || (this._items[0].repository._isCM() && repository._isP8()))
												return false;
											else
												return true;
										} else
											return false;
									} else
										return false;
								})

							}
						]
					],
					[
						[
							{
								name: "Breadcrumb",
								includeRootItemName: true,
								moduleClass: Breadcrumb

							},
							{
								name: "Filter",
								moduleClass: FilterDataServer,
								"className": "BarFilterData"
							}
						]
					],
					[
						[
							{
								moduleClass: InlineMessage
							}
						]
					]
				]
			});
			return modules;
		},

		/**
		 * Displays the dialog
		 * 
		 * @public
		 * @param folder
		 *            The {@link ecm.model.ContentItem} object representing the parent folder of an item being moved or
		 *            added to another folder.
		 * @param items
		 *            An array of {@link ecm.model.ContentItem} objects to be added or moved to another folder.
		 * @param callback
		 * @since 2.0.3.6 A function that is called after Box copy is complete.
		 */
		show: function(folder, items, callback) {
			var methodName = "show";
			this.logEntry(methodName);

			this._folder = folder;
			console.debug(this._folder);
			this._items = items;
			this._callback = callback || null;
			this._objectStore = items && items.length > 0 && items[0].getObjectStore ? items[0].getObjectStore() : null;

			// if no context, show the "Move from" field
			this._noContext = !this._folder;

			this.parentFolders = new Array();
			this._unselectableFolders = new Array();
			this._unselectableParentFolders = new Array();

			// Move to folder is only valid for multi select in browse.

			if (this.repository && (this.repository.type == "p8" || this.repository.type == "cmis")) {
				if (this._folder == null && this.action == "actionMoveFolderToFolder" && items.length == 1 && items[0] != null && items[0].isFolder()) {
					if (items[0].attributes.PathName == null) {
						this._refreshFolderItemForFolderMove(items[0].id);
					} else {
						this._retrieveParentFolderForFolderMove(items[0].attributes.PathName);
					}
				} else {
					this._getParentFolders();
				}
			} else {
				this._getParentFolders();
			}

			this.logExit(methodName);
		},

		_refreshFolderItemForFolderMove: function(folderItemId) {
			// We may need to refresh the folder item when moving if the Path attribute is not present. This can happen
			// for folders displayed in the Favorites feature when the tree is not displayed.
			this.repository.retrieveItem(folderItemId, lang.hitch(this, function(folderItem) {
				this._retrieveParentFolderForFolderMove(folderItem.attributes.PathName);
			}), null, null, null, this._objectStore ? this._objectStore.id : "");
		},

		_retrieveParentFolderForFolderMove: function(pathName) {
			// Get the path for the single parent folder of the item.
			var path = "";
			var index = pathName.lastIndexOf("/");
			if (index == 0) {
				path = "/";
			} else {
				path = pathName.substr(0, index);
			}
			this.repository.retrieveItem(path, lang.hitch(this, function(folder) {
				this._folder = folder;
				this._createRendering();
			}), null, null, null, this._objectStore ? this._objectStore.id : "");
		},

		_createRendering: function() {
			var methodName = "_createRendering";
			this.logEntry(methodName);

			var nbNodes = 0;

			// build navigation
			// if moving/adding from teamspace then restrict to the teamspace root folder
			if (!this.teamspace && this.constructor.extensions && this.constructor.extensions.length > 0) {
				if (!this._extensionData) {
					this._extensionData = new Array();
				}
				for (var i = 0; i < this.constructor.extensions.length; i++) {
					var extClass = this.constructor.extensions[i];
					if (extClass && extClass.shortcutClass) {
						var shortcutClass = extClass.shortcutClass;
						var extObj = new shortcutClass(extClass.params);

						// make sure the extension supports the current configuration (e.g. repository type)
						if (!extObj.isSupported || extObj.isSupported(this)) {
							var extDiv = domConstruct.create("div");
							this._navigationArea.domNode.appendChild(extDiv);
							var extButton = new dijit.form.Button({
								label: extObj.title,
								'class': "fieldText",
								'baseClass': "buttonLinks"
							}, extDiv);
							nbNodes++;

							var extension = {
								extObj: extObj,
								extClass: extClass,
								extButton: extButton
							};
							this._extensionData.push(extension);

							// connect events
							this.connect(extButton, "onClick", lang.hitch(this, function() {
								this._selectShortcut(extension);
								extObj.select(lang.hitch(this, function(folder) {
									this._currentFolder = folder;
									this._retrieve();
								}));
							}));
						}
					}
				}
			}
			if (!this.teamspace && this.repository && this.displaySelectBrowseNode == true) {
				var browseDiv = domConstruct.create("div");
				this._navigationArea.domNode.appendChild(browseDiv);
				this._selectBrowseNode = new dijit.form.Button({
					label: ecm.messages.repository,
					'class': "fieldText",
					'baseClass': "buttonLinks"
				}, browseDiv);
				nbNodes++;
				this.connect(this._selectBrowseNode, "onClick", lang.hitch(this, function() {
					// always browse root folder
					this._selectBrowse();
				}));
			}
			if (this.repository && this.displaySelectTeamspacesNode == true && this.repository.teamspacesEnabled == true) {
				var teamspacesDiv = domConstruct.create("div");
				this._navigationArea.domNode.appendChild(teamspacesDiv);
				this._selectTeamspacesNode = new dijit.form.Button({
					label: ecm.messages.workspaces,
					'class': "fieldText",
					'baseClass': "buttonLinks"
				}, teamspacesDiv);
				nbNodes++;
				this.connect(this._selectTeamspacesNode, "onClick", lang.hitch(this, function(evt) {
					// always browse list of teamspaces
					this._selectTeamspaces();
				}));
			}

			// hide left navigation if only one node
			if (nbNodes == 1) {
				domStyle.set(this._navigationArea.domNode, "display", "none");
			}

			// build source dropdown
			if (this.parentFolders.length <= 1) {
				domStyle.set(this._folderNameLabel.id, "display", "inline");
				domStyle.set(this._parentFolderSelect.id, "display", "none");
				// preselect "from" folder
				if (this.parentFolders.length > 0 && this._folder == null) {
					this._folder = this.parentFolders[0];
				}
			} else {
				// Add folders to the dropdown.
				var selected = 0;
				var options = new Array();
				for (i in this.parentFolders) {
					// preselect "from" folder based on permission if moving from action
					if (selected == 0) {
						if (this._folder != null && this.parentFolders[i].id == this._folder.id) {
							selected = i;
						} else if (this._folder == null && (this.parentFolders[i].hasPrivilege("privRemoveFromFolder") == true || this.action == "actionAddToFolder" || this.action == "actionCopyToFolder" || this.action == "actionBoxCopy")) {
							selected = i;
							this._folder = this.parentFolders[i];
						}
					}
					var option = {
						label: this.parentFolders[i].name,
						value: i
					};
					options.push(option);
				}
				this._parentFolderSelect.removeOption(this._parentFolderSelect.getOptions());
				this._parentFolderSelect.addOption(options);
				this._parentFolderSelect.set("value", String(selected));
				this._parentFolderSelect.set("textDir", this.textDir);
			}

			// setup intro text and keep track of unselectable folders
			if (this.action == "actionAddToFolder") {
				domStyle.set(this._sourceArea.domNode, "display", "none");
				this.setIntroText(this.messages.add_doc_to_folder_info_text);
			} else if (this.action == "actionCopyToFolder" || this.action == "actionBoxCopy") {

				if (this.action == "actionCopyToFolder") {
					this.setIntroText(this.messages.copy_doc_to_folder_info_text);
					domStyle.set(this._sourceArea.domNode, "display", "none");
				} else if (this._items[0].repository._isBox()) {
					this.setIntroText(this.messages.box_copy_version_info_text);
					if (this._items[0].repository._isBox() && this._items[0].hasPrivilege("privDelete"))
						domStyle.set(this.copyDeleteOptionSection, "display", "inline");
				} else
					this.setIntroText(this.messages.box_copy_to_info_text);

			} else {
				// If we are moving from the root folder, use the repository name
				if ((this._folder.rootFolder == true) || (this._folder.attributes.PathName != null && this._folder.attributes.PathName == "/")) {
					this._folderNameLabel.innerHTML = idxHtml.escapeHTML(this.repository.name);
				} else {
					this._folderNameLabel.innerHTML = idxHtml.escapeHTML(this._folder.name);
				}
				this.applyTextDir(this._folderNameLabel);

				// Don't allow items to be moved to the current folder.
				var parentFolderTooltip = null;
				if (this._items[0].isFolder()) {
					parentFolderTooltip = this.messages.cant_move_folder_onto_parent;
					this.setIntroText(this.messages.move_folder_info_text);
				} else {
					parentFolderTooltip = this.messages.document_already_in_folder;
					this.setIntroText(this.messages.move_file_info_text);
				}
				this._addErrorMessage(this._unselectableFolders, this._folder.id, parentFolderTooltip);

				// If moving a folder, prevent selecting the folder being moved and any child folders.
				for (var i = 0; i < this._items.length; i++) {
					if (this._items[i].isFolder()) {
						this._addErrorMessage(this._unselectableParentFolders, this._items[i].id, this.messages.cant_move_folder_onto_self);
					}
				}
			}

			// show move from field only if no context found
			if (!this._noContext) {
				//domStyle.set(this._sourceField, "display", "none");
				domStyle.set(this._folderNameField, "display", "none");

			} else {

				domStyle.set(this._folderNameField, "display", "inline");
			}

			// build list
			if (this._contentList) {
				this._contentList.destroyRecursive();
				this._contentList = null;
			}
			this._contentList = new ContentList({
				headerHidden: true,
				emptyMessage: "&nbsp;",
				multiSelect: false
			});

			// connect events
			aspect.after(this._contentList, "onModulesLoaded", lang.hitch(this, function() {
				// on selection change, update OK button
				aspect.after(this._contentList.grid.select.row, "onSelectionChange", lang.hitch(this, function(selected) {
					if (selected && selected.length > 0) {
						this._selectedFolder = selected.length > 0 ? this._contentList.getSelectedItems()[0] : null;
						if (!this._docFolderSelection || this._selectedFolder.isFolder())
							this._contentList.grid.select.row.clear();
						else {
							var checkedOut = this._selectedFolder.locked == true || this._selectedFolder.locked == "true";
							if (this._selectedFolder.hasPrivilege("privEditProperties") && (this._selectedFolder.hasPrivilege("privCheckOut") || !checkedOut) || (this._selectedFolder.hasPrivilege("privEditDoc") && checkedOut && this._selectedFolder.hasPrivilege("privCheckInOutDoc"))) {
								this._selectedDocument = this._selectedFolder;
							} else {
								this._contentList.grid.select.row.clear();
								this._selectedDocument = null;
								this._displayMessage(this.messages.no_permission_to_copy_version_msg);
							}
						}
					}
				}), true);
				// on double-click, open folder
				aspect.after(this._contentList.grid, "onRowDblClick", lang.hitch(this, function(evt) {
					this._openFolder(evt);
				}), true);

				aspect.after(this._contentList.grid, "onRowClick", lang.hitch(this, function(evt) {
					this._openFolder(evt);
				}), true);

				// on ENTER key, open folder
				this.connect(this._contentList.grid.domNode, "onkeydown", lang.hitch(this, function(evt) {
					if (evt.keyCode == keys.ENTER && !evt.shiftKey) { // Enter - perform default action
						this._openFolder(evt);
					}
				}));

				// add tooltip support
				this.connect(this._contentList.grid, "onCellMouseOver", this._showTooltip);
				this.connect(this._contentList.grid, "onCellMouseOut", this._hideTooltip);
				this.connect(this._contentList.grid, "onCellKeyUp", this._showTooltip);
				this.connect(this._contentList.grid, "onCellKeyDown", this._hideTooltip);

				// prevent text selection on the grid
				this._contentList.grid.domNode.onselectstart = function() {
					return false;
				};

				var repositorySelector = this._contentList.getContentListModule("repositorySelector");

				if (repositorySelector) {
					this.own(aspect.after(repositorySelector, "onSelect", lang.hitch(this, "connectRepositories"), true));
					if (this.defaultSelectedRepository) {
						repositorySelector.setRepositoryId(this.defaultSelectedRepository.id);
						this.defaultSelectedRepository = null;
					} else {
						this.defaultSelectedRepository = null;
					}

				}
				// remove alert role from emptyNode that interfers with InlineMessage
				domAttr.set(this._contentList.grid.emptyNode, "role", "");

			}));

			// redefine setResultSet
			aspect.around(this._contentList, "setResultSet", lang.hitch(this, "_onSetResultSet"));

			// redefine the openItem action
			this._contentList.openItem = lang.hitch(this, function(item) {
				if (item.openItem) {
					item.openItem();
				} else if (item.className == "ICMTeamspace" || item.className == "ClbTeamspace" || item.className == "Teamspace") {
					// retrieve base folder of selected teamspace
					item.retrieveBaseFolder(lang.hitch(this, function(folder) {
						this._currentFolder = folder;
						this._retrieve();
					}));
				} else {
					this._currentFolder = item;
					if (this.action == "actionBoxCopy" && this._items[0].repository._isBox() && this._items.length == 1) {
						this._docFolderSelection = true;
						this._retrieve(true);
					} else {
						this._docFolderSelection = false;
						this._retrieve();
					}
				}
			});

			// set modules and load the list
			var modules = this.getContentListModules();

			if (this.action != "actionBoxCopy")
				modules[0].top[0][0].splice(0, 1);

			this._contentList.setContentListModules(modules);
			this._contentList.placeAt(this.id + '_listingArea');
			this._contentList.startup();

			// reposition "move from" field into button bar
			domConstruct.place(this._sourceField, this.messageRef);
			aspect.after(this, "resize", lang.hitch(this, function() {
				if (this.isMaximized()) {
					domClass.add(this._sourceLabel, "sourceFieldMaximized");
				} else {
					domClass.remove(this._sourceLabel, "sourceFieldMaximized");
				}
			}), true);

			// make sure the dialog gets destroyed
			aspect.after(this, "onCancel", lang.hitch(this, function() {
				this.destroyRecursive();
			}));

			// select node at startup
			this._selectNode();
			this.logExit(methodName);
		},
		connectRepositories: function(repository) {

			if (repository == this.repository)
				return;

			if (repository.connected) {
				this.repository = repository;
				this.onRepositoryChange(this, repository);

			} else if (!repository.connected) {
				var loginDialog = LoginDialog.getLoginDialog();
				var currentRepo = this.repository;
				// set the repo to the selected repo in case any repo's on change events are fired 
				// during the logon process.
				this.repository = repository;
				loginDialog.connectToRepository(repository, lang.hitch(this, function() {
					if (!repository.connected && this.repository) {
						var repositorySelector = this._contentList.getContentListModule("repositorySelector");
						repositorySelector.getDropdown().set("value", this.repository.id);
					}
					if (repository.connected) {
						this.repository = repository;
						this.onRepositoryChange(this, repository);
					}
				}));

				connect.connect(loginDialog, "hide", lang.hitch(this, function() {
					if (!repository.connected) {
						var repositorySelector = this._contentList.getContentListModule("repositorySelector");
						this.repository = currentRepo;
						repositorySelector.setRepositoryId(this.repository.id);
					}
				}));
			}

		},

		/**
		 * Event invoked when a repository changes
		 * 
		 * @since 2.0.3.6
		 */
		onRepositoryChange: function(pane, repository) {
			//this.canShowBrowse = true;
			this._selectBrowse();
		},

		_selectNode: function() {
			if (this._folder) {
				if ((this._folder._teamspaceId) && (this.repository.id == this._folder.repository.id)) {
					this._selectTeamspaces(this._folder._teamspaceId);
				} else {
					var root = this._folder;
					while (root.parent && root.parent.id) {
						root = root.parent;
						if (root.item) { // Favorite
							root = root.item;
						}
					}
					var selected = false;
					if (root && this._extensionData) {
						for ( var i in this._extensionData) {
							if (this._extensionData[i].extObj && this._extensionData[i].extObj.isRoot && this._extensionData[i].extObj.isRoot(root)) {
								this._selectShortcut(this._extensionData[i]);
								this._extensionData[i].extObj.select(lang.hitch(this, function(folder) {
									this._currentFolder = folder;
									this._retrieve();
								}));
								selected = true;
								break;
							}
						}
					}
					if (!selected) {
						this._selectBrowse();
					}
				}
			} else {
				this._selectBrowse();
			}
		},

		_selectBrowse: function() {
			this._selectShortcut(this._selectBrowseNode);
			// retrieve root folder
			if (this.repository) {
				this.repository.retrieveItem("/", lang.hitch(this, function(folder) {
					// Disable moving and adding documents to repository node for p8.
					if (this.repository.type == "p8" && this._items[0].isFolder() == false) {
						this._addErrorMessage(this._unselectableFolders, folder.id, this.messages.cant_add_doc_to_root);
					}
					this._currentFolder = folder;
					// use repository name as root in breadcrumb
					this._currentFolder.name = this.repository.name;
					this._retrieve();
				}), null, null, null, null, "browseFolder");
			}
		},

		_selectTeamspaces: function(teamspaceId) {
			this._selectShortcut(this._selectTeamspacesNode);
			if (!teamspaceId) {
				this._currentFolder = null;
			}
			this.repository.retrieveTeamspaceFoldersResultSet(lang.hitch(this, this._setResultSet, teamspaceId), true, null, null, null, null, teamspaceId);
		},

		_retrieve: function(docsFolders) {
			var foldersOnly = docsFolders ? false : true;
			this._currentFolder.retrieveFolderContents(foldersOnly, lang.hitch(this, this._setResultSet), null, null, true, "");
		},

		_setResultSet: function(arg1, arg2) {
			// parse arguments
			var teamspaceId = null;
			var resultSet = null;
			if (arg1 && arg1.items) {
				resultSet = arg1;
			} else {
				teamspaceId = arg1;
				resultSet = arg2;
			}

			this._contentList.setResultSet(resultSet, teamspaceId);
		},

		_onSetResultSet: function(originalMethod) {
			return lang.hitch(this, function(resultSet, teamspaceId) {
				// go through resultSet to find teamspace (if applicable) and check permissions
				var teamspace = null;

				for (var i = 0; resultSet && i < resultSet.items.length; i++) {
					var item = resultSet.items[i];
					if (item.className != "ICMTeamspace" && item.className != "ClbTeamspace" && item.className != "Teamspace") {
						for (var j = 0; j < this._items.length; j++) {
							var moveItem = this._items[j];
							if (moveItem.repository && moveItem.repository.type == "box") {
								if ((item.repository.type == "box" && !item.hasPrivilege("privAddItem"))// if the target is box
										|| (item.repository.type != "box" && (!item.hasPrivilege("privAddItem") || !item.hasPrivilege("privAddToFolder")))) {
									// if the target is not box
									if (moveItem.isFolder()) {
										this._addErrorMessage(this._unselectableFolders, item.id, this.messages.no_permission_add_folder);
									} else {
										this._addErrorMessage(this._unselectableFolders, item.id, this.messages.no_permission_add_document);
									}
								}
							}
							else if (moveItem.repository && moveItem.repository.type == "cm"){
								if (!item.hasPrivilege("privAddToFolder")){
									if (moveItem.isFolder()){
										this._addErrorMessage(this._unselectableFolders, item.id, this.messages.no_permission_add_folder);
									}
									else {
										this._addErrorMessage(this._unselectableFolders, item.id, this.messages.no_permission_add_document);
									}
								}
							} else if (moveItem.isFolder() && !item.hasPrivilege("privAddLink")) {
								this._addErrorMessage(this._unselectableFolders, item.id, this.messages.no_permission_add_folder);
							} else if (!moveItem.isFolder() && !item.hasPrivilege("privAddToFolder")) {
								this._addErrorMessage(this._unselectableFolders, item.id, this.messages.no_permission_add_document);
							}
							// If moving a folder, prevent selecting the folder being moved and any child folders.
							if (moveItem.isFolder() && item.parent && this._getErrorMessage(item.parent.id, this._unselectableParentFolders) != null) {
								this._addErrorMessage(this._unselectableParentFolders, item.id, this.messages.cant_move_folder_onto_self);
							}
						}
					} else if (item.id == teamspaceId) {
						teamspace = item;
					}
				}
				if (resultSet) {
					// update the structure grid (columns, breadcrumb, ...)
					this._updateStructure(resultSet);
					if (this._currentExtension != null && this._currentExtension.extObj.updateStructure) {
						this._currentExtension.extObj.updateStructure(resultSet);
					}

					// update breadcrumb root
					if (this._contentList.getContentListModule("Breadcrumb")) {
						this._contentList.getContentListModule("Breadcrumb").includeRootItemName = resultSet.includeRootItemName;
					}

					// update list
					originalMethod.apply(this._contentList, [
						resultSet
					]);
				}
				if (teamspace) {
					// retrieve base folder of selected teamspace
					teamspace.retrieveBaseFolder(lang.hitch(this, function(folder) {
						this._currentFolder = folder;
						this._retrieve();
					}));
				} else {
					// reset selected folder and update OK button

					this._selectedFolder = null;
					this._updateOkButton();

					this.inherited("show", []);
					this.resize();
				}

				if (resultSet && resultSet.items.length > 0) {
					// always focus on the grid after setting the result set
					// and make sure tooltips are hidden
					setTimeout(lang.hitch(this, function() {
						this._contentList.grid.focus.focusArea("body");
						this._hideTooltip();
					}), 500);
				} else if (!this.okButton.get("disabled")) {
					this.okButton.focus();
				} else {
					this.cancelButton.focus();
				}
			});
		},
		_onDeleteFieldChange: function() {
			if (this.copyDeleteProp.get("checked"))
				this._copyMode = "2";
			else
				this._copyMode = "0";
		},
		_updateStructure: function(resultSet) {
			var cells = new Array();
			for (var i = 0; i < resultSet.structure.cells[0].length; i++) {
				var cell = resultSet.structure.cells[0][i];
				if (resultSet.setType == "teamspace") {
					// teamspaces
					if (cell.field === "teamspaceIcon" || cell.field === "name" || cell.field === "desc") {
						cells.push(cell);
					}
					if (cell.field === "name") {
						cell.width = "200px";
						cell.decorator = lang.hitch(this, function(data, rowId, rowIndex) {
							var message = "";
							var errorMessage = this._getErrorMessage(rowId);
							if (errorMessage != null) {
								message = "<span class='dijitOffScreen'>" + data + " </span>" + errorMessage;
							}
							return "<div style=\"margin-top: 4px; " + (message != null ? "color: #818181;" : "") + "\" message=\"" + (message != null ? message : "") + "\">" + data + "</div>";
						});
					}
					if (cell.field === "desc") {
						cell.width = "auto";
						cell.decorator = lang.hitch(this, function(data, rowId, rowIndex) {
							return "<div style=\"margin-top: 4px; color: #818181;\">" + data + "</div>";
						});
					}
				} else {
					// browse
					if (cell.field === "mimeTypeIcon" || cell.field === "{NAME}" || cell.field === "cmis:name") {
						cells.push(cell);
					}
					if (cell.field === "{NAME}" || cell.field === "cmis:name") {
						cell.width = "auto";
						cell.decorator = lang.hitch(this, function(data, rowId, rowIndex) {
							var message = "";
							var errorMessage = this._getErrorMessage(rowId);
							if (errorMessage != null) {
								message = "<span class='dijitOffScreen'>" + data + " </span>" + errorMessage;
							}
							return "<div style=\"margin-top: 4px; " + (message != null ? "color: #818181;" : "") + "\" message=\"" + (message != null ? message : "") + "\">" + data + "</div>";
						});
					}
				}
			}

			// create dummy root for teamspaces browsing and redefine refresh used whenclearing filter
			var dummyRoot = {
				id: "teamspaces",
				name: ecm.messages.workspaces,
				openItem: lang.hitch(this, function() {
					this._selectTeamspaces();
				})
			};
			if (resultSet.setType == "teamspace") {
				resultSet.parentFolder = dummyRoot;
				resultSet.refresh = lang.hitch(this, function() {
					this._selectTeamspaces();
				});
			} else {
				if (resultSet.parentFolder && (resultSet.parentFolder.template == "ICMTeamspace" || resultSet.parentFolder.template == "ClbTeamspace" || resultSet.parentFolder.template == "Teamspace")) {
					if (this.teamspace) {
						// use teamspace name in breadcrumb
						resultSet.parentFolder.name = this.teamspace.name;
					} else {
						// add "Teamspaces" root in breadcrumb
						resultSet.parentFolder.parent = dummyRoot;
					}
				}
				resultSet.refresh = lang.hitch(this, function() {
					this._retrieve();
				});
			}

			resultSet.structure.cells[0] = cells;
			resultSet.sortIndex = 2;
			resultSet.includeRootItemName = this.action != "actionBoxCopy" ? true : this._includeRootItemName;
		},

		_generateFileNameFromItem: function(item) {
			var namePropValue = item.name;
			var extension = "";
			if (item.filename) {

				var index = item.filename.lastIndexOf(".");
				if (index > -1 && namePropValue != null && namePropValue.length > 0) {
					extension = item.filename.substring(index);
					if (namePropValue.lastIndexOf(extension) == -1 // name does not contain extension
							|| (namePropValue.lastIndexOf(extension) > -1 && namePropValue.substring(namePropValue.lastIndexOf(extension), namePropValue.length) != extension)) {
						namePropValue = namePropValue + extension.toLowerCase();
					}
				} else if (namePropValue != null && namePropValue.length == 0 && item.repository.type == "cm") {
					// can't use CM filename as the name because that changes based on admin setting.  Box copy
					// should always use item name if valid.
					if (index > -1)
						extension = item.filename.substring(index);
					namePropValue = "cmDocument" + extension; // if the item name is not valid the CM services returns "cmDocument"
				}

			}
			return namePropValue;
		},
		_action: function() {
			var methodName = "_action";
			this.logEntry(methodName);

			// check mode
			if (this._selectedFolder && !this._selectedDocument) {
				// open item
				this._contentList.openItem(this._selectedFolder);
			} else if (this._currentFolder && this._getErrorMessage(this._currentFolder.id) == null) {
				// apply action
				var newFolder = this._currentFolder;
				if (this._hasPermissionToPerformActionOnSelectedFolder == true) {
					if (this.action == "actionAddToFolder") {
						newFolder.addToFolder(this._items, lang.hitch(this, function() {
							if (this._callback)
								this._callback();
						}));
					} else if (this.action == "actionCopyToFolder") {
						newFolder.copyToFolder(this._items, lang.hitch(this, function() {
							if (this._callback)
								this._callback();
						}));
					} else if (this.action == "actionBoxCopy") {
						var propertiesMap = this._items[0].attributes;
						propertiesMap.templateMetadata = this._items[0].templateMetadata;
						propertiesMap.attributeTypes = this._items[0].attributeTypes;
						Object.keys(propertiesMap.attributeTypes).forEach(function(key) {
							var k = key.toLowerCase();
							if (k != key ) {
								var v = propertiesMap.attributeTypes[key];
								propertiesMap.attributeTypes[k] = v;
								delete propertiesMap.attributeTypes[key];

							}
						});
						
						
						var namePropValue = this._items[0].name;
						if (!this._items[0].repository._isBox()) {
							//for cm, p8, there may have no filename, need to retrieve from server.
							if (!this._items[0].repository.repositoryConfig) {
								this._items[0].repository.getRepositoryConfig();
							}
							this._items[0].repository.retrieveFileNames(this._items, lang.hitch(this, function(items) {
								if (items) {

									if (this._items[0].filename) {
										namePropValue = this._generateFileNameFromItem(this._items[0]);
									}
									var virtualItems = [];
									// Always use the item name as the file name for Box Copy
									array.forEach(this._items, lang.hitch(this, function(item) {
										item.filename = this._generateFileNameFromItem(item);
										virtualItems.push(item);
									}));
									// convert all the keys to lower case
									Object.keys(propertiesMap).forEach(function(key) {
										var k = key.toLowerCase();
										if (k != key && key !="attributeTypes") {
											var v = propertiesMap[key];
											propertiesMap[k] = v;
											delete propertiesMap[key];

										}										
									});
									propertiesMap.ecm_item_property = this._items[0];
									propertiesMap.ecm_name_property = namePropValue;
									propertiesMap.ecm_content_source_delete = this._copyMode == "2" ? "true" : "false";
									if (this._selectedDocument)
										ecm.model.desktop.getActionsHandler().actionCheckIn(this.repository, new Array(this._selectedDocument), lang.hitch(this, function() {
											if (this._callback)
												this._callback(propertiesMap.ecm_content_source_delete);
										}), null, propertiesMap, virtualItems);
									else
										ecm.model.desktop.getActionsHandler().actionImport(this.repository, new Array(newFolder), lang.hitch(this, function(newItem, copiedItem) {
											if (this._callback)
												this._callback(propertiesMap.ecm_content_source_delete, copiedItem["contentSourceDocId"]);
										}), null, null, false, propertiesMap, virtualItems);
								}

							}), false);
						} else {
							// convert all the keys to lower case
							Object.keys(propertiesMap).forEach(function(key) {
								var k = key.toLowerCase();
								if (k != key && key != "templateMetadata"  && key !="attributeTypes") {
									var v = propertiesMap[key];
									propertiesMap[k] = v;
									delete propertiesMap[key];

								}
							});
							propertiesMap.ecm_name_property = namePropValue;
							propertiesMap.ecm_content_source_delete = this._copyMode == "2" ? "true" : "false";
							if (this._selectedDocument)
								ecm.model.desktop.getActionsHandler().actionCheckIn(this.repository, new Array(this._selectedDocument), lang.hitch(this, function() {
									if (this._callback)
										this._callback(propertiesMap.ecm_content_source_delete);
								}), null, propertiesMap, this._items);
							else
								ecm.model.desktop.getActionsHandler().actionImport(this.repository, new Array(newFolder), lang.hitch(this, function(newItem, copiedItem) {
									if (this._callback)
										this._callback(propertiesMap.ecm_content_source_delete, copiedItem["contentSourceDocId"]);
								}), null, null, false, propertiesMap, this._items);
						}

					} else {
						// Get the new source folder if the user selected another folder in the dropdown. If it is the default, don't change
						// it to avoid refresh issues.
						var sourceFolder = null;
						if (this._newSourceFolder == null) {
							sourceFolder = this._folder;
						} else {
							if (this._folder != null && this._folder.id == this._newSourceFolder.id) {
								sourceFolder = this._folder;
							} else {
								sourceFolder = this._newSourceFolder;
							}
						}
						newFolder.moveToFolder(this._items, sourceFolder, lang.hitch(this, function() {
							if (this._callback)
								this._callback();
						}));
					}
					this.onCancel();
				} else {
					// If they double click on a folder when they don't have permision to remove from the parent in the Move to Folder 
					// scenario, display the warning message.
					this._displayNoPermissionParent();
				}
			}
			this.logExit(methodName);
		},

		_selectShortcut: function(extensionOrButton) {

			// keep track or current shortcut
			var button = extensionOrButton;
			if (extensionOrButton && extensionOrButton.extButton) {
				this._currentExtension = extensionOrButton;
				button = extensionOrButton.extButton;
			} else {
				this._currentExtension = null;
			}

			if (this._selectBrowseNode != null) {
				domClass.remove(this._selectBrowseNode.domNode, "ecmSearchInDropDownButtonSelected");
			}
			if (this._selectTeamspacesNode != null) {
				domClass.remove(this._selectTeamspacesNode.domNode, "ecmSearchInDropDownButtonSelected");
			}
			if (this._extensionData) {
				for ( var i in this._extensionData) {
					if (this._extensionData[i].extButton) {
						domClass.remove(this._extensionData[i].extButton.domNode, "ecmSearchInDropDownButtonSelected");
					}
				}
			}
			if (button)
				domClass.add(button.domNode, "ecmSearchInDropDownButtonSelected");
		},

		_updateOkButton: function(forceDisabled) {
			if (this.action == "actionMoveFolderToFolder" || this.action == "actionMoveDocumentToFolder") {
				this.okButton.set("label", this.messages.move_to_folder_button_caption);
			} else if (this.action == "actionAddToFolder") {
				this.okButton.set("label", this.messages.add_to_folder_button_caption);
			} else if (this.action == "actionCopyToFolder" || this.action == "actionBoxCopy") {
				this.okButton.set("label", this.messages.copy_to_folder_button_caption);
			}
			this.okButton.set("disabled", forceDisabled || !this._currentFolder || this._getErrorMessage(this._currentFolder.id) != null);
		},

		_getParentFolders: function() {
			var methodName = "_getParentFolders";
			this.logEntry(methodName);

			// For P8, get the set of parent folders if:
			// -- The action is MoveToFolder
			// -- There is a single item in the items array
			// -- That item is a document.
			// Display the dropdown of parent folders if there is more than 1.
			if (this.repository && (this.repository.type == "p8" || this.repository.type == "cmis")) {
				if (((this.action == "actionMoveDocumentToFolder" && this._items.length == 1) || this.action == "actionAddToFolder" || this.action == "actionCopyToFolder" || this.action == "actionBoxCopy") && this._items.length == 1 && this._items[0].isFolder() == false) {
					this._items[0].retrieveFoldersFiledIn(lang.hitch(this, function(foldersFiledIn) {
						for (i in foldersFiledIn) {
							this.parentFolders.push(foldersFiledIn[i]);
							// only check permission on "from" folder if is set
							if ((!this._folder || (this._folder && this._folder.id == foldersFiledIn[i].id)) && foldersFiledIn[i].hasPrivilege("privRemoveFromFolder")) {
								this._hasPermissionToMoveFromAnyFolder = true;
							}
							this._addErrorMessage(this._unselectableFolders, foldersFiledIn[i].id, this.messages.document_already_in_folder);
						}

						// If the user doesn't have permission to move the document from any of it's parent folders, display a message. 
						// Otherwise, display the dialog.
						if (this.action == "actionMoveDocumentToFolder") {
							if (foldersFiledIn.length == 0) {
								this._displayNotFiledMessage();
							} else if (this._hasPermissionToMoveFromAnyFolder == false) {
								if (this._folder) {
									this._displayNoPermissionParent();
								} else {
									this._displayNoPermissionMessage();
								}
							} else {
								this._createRendering();
							}
						} else {
							this._createRendering();
						}
					}));
				} else {
					this._createRendering();
				}
			}

			// For CM, always get parent folders to add to the unselectable list to be used in the folder selector.
			// Display the dropdown if
			// -- The action is MoveToFolder
			// -- There is a single item in the items array.
			else if (this.action == "actionAddToFolder" && this._items.length > 1) {

				// Only disable the source parent folder if multiple items are selected and this is an add.
				if (this._folder != null) {
					this._addErrorMessage(this._unselectableFolders, this._folder.id, this.messages.document_already_in_folder);
				}
				this._createRendering();
			} else if ((this.action == "actionCopyToFolder" || this.action == "actionBoxCopy") && this._items && this._items.length > 0) {
				if (this._folder)
					this._addErrorMessage(this._unselectableFolders, this._folder.id, this.messages.document_already_in_folder);

				for ( var i in this._items) {
					if (this._items[i] && this._items[i].isFolder && this._items[i].isFolder()) {
						this._addErrorMessage(this._unselectableFolders, this._items[i].id, this.messages.document_already_in_folder);
					}
				}
				this._createRendering();
			} else if (this._items.length == 1) {
				this._getCMParentFolders(0);
			} else {
				this._createRendering();
			}
			this.logExit(methodName);
		},

		_onParentFolderSelectChange: function() {
			var methodName = "_onParentFolderSelectChange";
			this.logEntry(methodName);

			var newFolder = this.parentFolders[this._parentFolderSelect.get("value")];

			// Check that the user has permission to remove the item from this folder.
			if (newFolder.hasPrivilege("privRemoveFromFolder") == true || (this.action == "actionAddToFolder" || this.action == "actionCopyToFolder" || this.action == "actionBoxCopy")) {
				// Don't set the user's choice to this._folder to avoid refresh problems.
				this._newSourceFolder = this.parentFolders[this._parentFolderSelect.get("value")];
				this._hasPermissionToPerformActionOnSelectedFolder = true;
				this._updateOkButton();
			} else {
				// If they don't have permission to move, display a message and disable the move button.
				this._hasPermissionToPerformActionOnSelectedFolder = false;
				this._displayNoPermissionParent();
				this._updateOkButton(true);
			}

			this.logExit(methodName);
		},

		// Get parent folders for all items in the array..
		_getCMParentFolders: function(index) {
			var methodName = "_getCMParentFolders";
			this.logEntry(methodName);

			this._items[index].retrieveFoldersFiledIn(lang.hitch(this, function(folders) {
				for (i in folders) {
					var parentFolderTooltip = null;
					if (this._items[0].isFolder()) {
						parentFolderTooltip = this.messages.cant_move_folder_onto_parent;
					} else {
						parentFolderTooltip = this.messages.document_already_in_folder;
					}

					// Add to array and set as unselectable.
					this.parentFolders.push(folders[i]);
					// only check permission on "from" folder if is set
					if ((!this._folder || (this._folder && this._folder.id == folders[i].id)) && folders[i].hasPrivilege("privRemoveFromFolder")) {
						this._hasPermissionToMoveFromAnyFolder = true;
					}
					this._addErrorMessage(this._unselectableFolders, folders[i].id, parentFolderTooltip);
				}
				index++;
				if (index < this._items.length) {
					this._getCMParentFolders(index);
				} else {

					// If they are attempting to move a document or folder and they don't have permission to remove from any of its parent folders,
					// display a message. Otherwise, display the dialog.
					if (this.action == "actionMoveFolderToFolder" || this.action == "actionMoveDocumentToFolder") {
						if (folders.length == 0) {
							this._displayNotFiledMessage();
						} else if (this._hasPermissionToMoveFromAnyFolder == false && this._items[0].repository.type != "box") {
							if (this._folder) {
								this._displayNoPermissionParent();
							} else {
								this._displayNoPermissionMessage();
							}
						} else {
							this._createRendering();
						}
					} else {
						this._createRendering();
					}
				}
			}));
			this.logExit(methodName);
		},

		_displayNoPermissionParent: function() {
			this._displayMessage(this.messages.no_permission_to_move_single_msg);
		},

		_displayNoPermissionMessage: function() {
			this._displayMessage(this.messages.no_permission_to_move_all_msg);
		},

		_displayNotFiledMessage: function() {
			this._displayMessage(this.messages.move_folder_not_filed_msg);
		},

		_displayMessage: function(msg) {
			var methodName = "_displayMessage";
			this.logEntry(methodName);

			var dialog = new MessageDialog({
				text: msg
			});
			dialog.show();

			this.logExit(methodName);
		},

		_showTooltip: function(e) {
			var msg = "";
			if (e.cellNode.children[0]) {
				msg = e.cellNode.children[0].getAttribute("message");
			}
			if (msg != null && msg != "") {
				if (this._tooltips == null) {
					this._tooltips = new Array();
				}
				dijit.showTooltip(msg, e.cellNode);
				this._tooltips.push(e.cellNode);
			}
		},

		_hideTooltip: function() {
			if (this._tooltips != null) {
				while (this._tooltips.length > 0) {
					dijit.hideTooltip(this._tooltips.pop());
				}
			}
		},

		_addErrorMessage: function(folder, id, message) {
			if (this._getErrorMessage(id, folder) == null) {
				folder[id] = message;
			}
		},

		_getErrorMessage: function(id, folder) {
			if (folder) {
				for ( var key in folder) {
					if (key === id)
						return folder[key];
				}
			} else {
				for ( var key in this._unselectableFolders) {
					if (key === id)
						return this._unselectableFolders[key];
				}
				for ( var key in this._unselectableParentFolders) {
					if (key === id)
						return this._unselectableParentFolders[key];
				}
			}
			return null;
		},

		/**
		 * Open a folder (via mouse or keyboard)
		 */
		_openFolder: function(evt) {
			this._includeRootItemName = true;
			if (evt.rowIndex == undefined) {
				evt.rowIndex = this._getRowIndex(evt);
			}
			if (evt.rowIndex != null) {
				event.stop(evt);
				var selectedItem = this._contentList.grid.row(evt.rowIndex).item();
				if (selectedItem && selectedItem.isFolder && selectedItem.isFolder())
					this._contentList.openItem(selectedItem);
			}
			this._hideTooltip();
		},

		/**
		 * @private Returns the row index when the event doesn't have a evt.rowIndex.
		 */
		_getRowIndex: function(evt) {
			if (evt.srcElement) {
				var node = evt.srcElement;
				while (node != null && !domClass.contains(node, "gridxRow")) {
					node = node.parentNode;
				}
				if (node) {
					var rowindex = node.getAttribute("rowindex");
					return parseInt(rowindex);
				}
			}
			return null;
		}

	});

	/**
	 * This static method allows the <code>MoveFileEnhancedDialog</code> to be extended with additional sections.
	 */
	MoveFileEnhancedDialog.addExtension = function(extensionClass, params) {
		if (!MoveFileEnhancedDialog.extensions) {
			MoveFileEnhancedDialog.extensions = [];
		}
		MoveFileEnhancedDialog.extensions.push({
			shortcutClass: extensionClass,
			params: params
		});
	};

	return MoveFileEnhancedDialog;

});

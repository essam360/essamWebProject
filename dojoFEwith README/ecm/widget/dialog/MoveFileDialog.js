/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/connect", //
	"dojo/_base/sniff", //	
	"dojo/dom-class", //
	"dojo/dom-style", //
	"dojo/keys", //
	"dijit/form/Select", //
	"dijit/layout/BorderContainer", //
	"dijit/layout/ContentPane", //
	"idx/html", //
	"./BaseDialog", //
	"./MessageDialog", //
	"../FolderSelector", //
	"../FolderSelectorCallback", //
	"../UnselectableFolder", //
	"dojo/text!./templates/MoveFileDialogContent.html"
], //
function(declare, //
lang, //
connect, //
has, //
domClass, //
domStyle, //
keys, //
Select, //
BorderContainer, //
ContentPane, //
idxHtml, //
BaseDialog, //
MessageDialog, //
FolderSelector, //
FolderSelectorCallback, //
UnselectableFolder, //
template) {

	/**
	 * @name ecm.widget.dialog.MoveFileDialog
	 * @class Provides a dialog box that is used to move a document or folder from one folder to another folder.
	 * @augments ecm.widget.dialog.BaseDialog
	 */
	return declare("ecm.widget.dialog.MoveFileDialog", [
		BaseDialog
	], {
		/** @lends ecm.widget.dialog.MoveFileDialog.prototype */

		contentString: template,
		widgetsInTemplate: true,

		/**
		 * A string, either "actionMoveFolderToFolder" or "actionAddToFolder" depending on the desired action.
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

		_itemName: null,
		_unselectableFolders: null,
		_parentFolders: null,
		_newSourceFolder: null,
		_hasPermissionToPerformActionOnSelectedFolder: true,
		_hasPermissionToMoveFromAnyFolder: false,
		_initialResize: false,

		postCreate: function() {
			var methodName = "postCreate";
			this.logEntry(methodName);

			this.inherited(arguments);
			domClass.add(this.domNode, "ecmMoveFileDialog");
			this.setResizable(true);

			this._folderSelector.setStyle("inline");

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
			}

			this.okButton = this.addButton(actionCaption, "_action", false, true);

			// Enable the OK button when the user selects a folder in the selector.
			this.okButton.set("disabled", true);
			this.connect(this._folderSelector, "onFolderSelect", lang.hitch(this, function(/*ecm.model.Item*/item) {

				// Try to get the selected folder from the folder selector widget.
				if (this._folderSelector.getSelected() == null || this._hasPermissionToPerformActionOnSelectedFolder == false) {
					this.okButton.set("disabled", true);
					this.logDebug(methodName, "No permission to perform action");
				} else {
					this.okButton.set("disabled", false);
					this.logDebug(methodName, "Permission to perform action");
				}
			}));

			// Handle double click to select folder and close.
			this.connect(this._folderSelector, "onFolderDblClick", lang.hitch(this, function() {
				this._action();
			}));

			this.logExit(methodName);
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
		 */
		show: function(folder, items) {
			var methodName = "show";
			this.logEntry(methodName);

			this._folder = folder;
			this._items = items;
			this._objectStore = items && items.length > 0 && items[0].getObjectStore ? items[0].getObjectStore() : null;

			this.parentFolders = new Array();
			this._unselectableFolders = new Array();

			// Move to folder is only valid for single folders and documents.
			this.logDebug(methodName, "Repository type is" + this.repository.type);
			if (this.repository.type == "p8" || this.repository.type == "cmis") {
				if (folder == null && this.action == "actionMoveFolderToFolder" && items[0] != null && items[0].isFolder()) {
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

		onCancel: function() {
			this._folderSelector.hideTooltip();
			this.inherited(arguments);
		},

		_getParentFolders: function() {
			var methodName = "_getParentFolders";
			this.logEntry(methodName);

			// For P8, get the set of parent folders if:
			// -- The action is MoveToFolder
			// -- There is a single item in the items array
			// -- That item is a document.
			// Display the dropdown of parent folders if there is more than 1.
			if (this.repository.type == "p8" || this.repository.type == "cmis") {
				if (this.action == "actionMoveDocumentToFolder" && this._items.length == 1 && this._items[0].isFolder() == false) {
					this._items[0].retrieveFoldersFiledIn(lang.hitch(this, function(foldersFiledIn) {
						for (i in foldersFiledIn) {
							this.parentFolders.push(foldersFiledIn[i]);
							if (foldersFiledIn[i].hasPrivilege("privRemoveFromFolder")) {
								this._hasPermissionToMoveFromAnyFolder = true;
							}
							this._unselectableFolders.push(new UnselectableFolder(foldersFiledIn[i].id, true, this.messages.document_already_in_folder));
						}

						// If the user doesn't have permission to move the document from any of it's parent folders, display a message. 
						// Otherwise, display the dialog.
						if (foldersFiledIn.length == 0) {
							this._displayNotFiledMessage();
						} else if (this._hasPermissionToMoveFromAnyFolder == false) {
							this._displayNoPermissionMessage();
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
					this._unselectableFolders.push(new UnselectableFolder(this._folder.id, true, this.messages.document_already_in_folder));
				}
				this._createRendering();
			} else {
				this._getCMParentFolders(0);
			}
			this.logExit(methodName);
		},

		_onParentFolderSelectChange: function() {
			var methodName = "_onParentFolderSelectChange";
			this.logEntry(methodName);

			var newFolder = this.parentFolders[this._parentFolderSelect.get("value")];

			// Check that the user has permission to remove the item from this folder.
			if (newFolder.hasPrivilege("privRemoveFromFolder") == true || this.action == "actionAddToFolder") {
				// Don't set the user's choice to this._folder to avoid refresh problems.
				this._newSourceFolder = this.parentFolders[this._parentFolderSelect.get("value")];
				this._hasPermissionToPerformActionOnSelectedFolder = true;
				if (this._folderSelector.getSelected() != null) {
					this.okButton.set("disabled", false);
				}
			} else {
				// If they don't have permission to move, display a message and disable the move button.
				this._hasPermissionToPerformActionOnSelectedFolder = false;
				this.okButton.set("disabled", true);
				this._displayNoPermissionParent();
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
					if (folders[i].hasPrivilege("privRemoveFromFolder")) {
						this._hasPermissionToMoveFromAnyFolder = true;
					}
					this._unselectableFolders.push(new UnselectableFolder(folders[i].id, true, parentFolderTooltip));
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
						} else if (this._hasPermissionToMoveFromAnyFolder == false) {
							this._displayNoPermissionMessage();
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
			var methodName = "_displayNoPermissionParent";
			this.logEntry(methodName);

			var msg = this.messages.no_permission_to_move_single_msg;
			var dialog = new MessageDialog({
				text: msg
			});
			dialog.show();

			this.logExit(methodName);
		},

		_displayNoPermissionMessage: function() {
			var methodName = "_displayNoPermissionMessage";
			this.logEntry(methodName);

			var msg = this.messages.no_permission_to_move_all_msg;
			var dialog = new MessageDialog({
				text: msg
			});
			dialog.show();

			this.logExit(methodName);
		},

		_displayNotFiledMessage: function() {
			var methodName = "_displayNotFiledMessage";
			this.logEntry(methodName);

			var msg = this.messages.move_folder_not_filed_msg;
			var dialog = new MessageDialog({
				text: msg
			});
			dialog.show();

			this.logExit(methodName);
		},

		_createRendering: function() {
			var methodName = "_createRendering";
			this.logEntry(methodName);

			this.inherited("show", []);

			// If the item has multiple parent folders, display them in a dropdown.
			if (this.parentFolders.length > 0 && this._folder == null) {
				this._folder = this.parentFolders[0];
			}
			if (this.parentFolders.length <= 1) {
				domStyle.set(this._folderNameLabel.id, "display", "inline");
				domStyle.set(this._parentFolderSelect.id, "display", "none");
				this.logDebug(methodName, "Single parent folder");
			} else {

				// Add folders to the dropdown.
				var selected = 0;
				var options = new Array();
				for (i in this.parentFolders) {
					if (this._folder != null && this.parentFolders[i].id == this._folder.id) {
						selected = i;
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
				this.logDebug(methodName, "Multiple parent folders");
			}

			if (this.action == "actionAddToFolder") {
				domStyle.set(this._folderNameArea.domNode, "display", "none");
				this._destinationLabel.innerHTML = this.messages.add_to_folder_label;
				this.setIntroText(this.messages.add_doc_to_folder_info_text);
				domClass.add(this._folderSelector.domNode, "ecmAddToFolder");
			} else {
				// If we are moving from the root folder, use the repository name
				if ((this._folder.rootFolder == true) || (this._folder.attributes.PathName != null && this._folder.attributes.PathName == "/")) {
					this._folderNameLabel.innerHTML = idxHtml.escapeHTML(this.repository.name);
				} else {
					this._folderNameLabel.innerHTML = idxHtml.escapeHTML(this._folder.name);
				}
				this.applyTextDir(this._folderNameLabel);
				this._destinationLabel.innerHTML = this.messages.move_to_folder_label;

				// Don't allow items to be moved to the current folder.
				var parentFolderTooltip = null;
				if (this._items[0].isFolder()) {
					parentFolderTooltip = this.messages.cant_move_folder_onto_parent;
					this.setIntroText(this.messages.move_folder_info_text);
				} else {
					parentFolderTooltip = this.messages.document_already_in_folder;
					this.setIntroText(this.messages.move_file_info_text);
				}
				this._unselectableFolders.push(new UnselectableFolder(this._folder.id, true, parentFolderTooltip));

				// If moving a folder, prevent selecting the folder being moved and any child folders.
				if (this._items[0].isFolder()) {
					this._unselectableFolders.push(new UnselectableFolder(this._items[0].id, false, this.messages.cant_move_folder_onto_self));
				}
			}

			this._folderSelector.setUnselectableFolders(this._unselectableFolders);

			// Disable moving and adding documents to repository node for p8.
			if (this.teamspace == null && this.repository.type == "p8" && this._items[0].isFolder() == false) {
				this._folderSelector.preventSelectRoot = true;
				this._folderSelector.preventSelectRootTooltip = this.messages.cant_add_doc_to_root;
			}

			// Set the permission in the callback function needed to add a document or folder to a parent folder.
			var folderSelectorCallback = new FolderSelectorCallback();

			if (this._items[0].isFolder()) {
				if (this.repository.type == "cm"){
					folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddToFolder";
				}
				else {
					folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddLink";
				}
				folderSelectorCallback.isSelectableByPermission.notSelectableTooltip = this.messages.no_permission_add_folder;
			} else {
				folderSelectorCallback.isSelectableByPermission.permissionToCheck = "privAddToFolder";
				folderSelectorCallback.isSelectableByPermission.notSelectableTooltip = this.messages.no_permission_add_document;
			}
			this._folderSelector.setIsSelectableCallback(folderSelectorCallback.isSelectableByPermission);

			if (this.teamspace != null) {
				this._folderSelector.setRoot(this.teamspace, this._objectStore);
			} else {
				this._folderSelector.setRoot(this.repository, this._objectStore);
			}

			connect.connect(this._folderSelector._folderTree, "onProcessingComplete", lang.hitch(this, function() {
				// Resize on initial load so scroll bars appear correctly.
				if (this._initialResize == false) {
					var _this = this;
					setTimeout(function() {
						_this._folderSelector.selectRootNode();
						_this.resize();
					}, 1500);
					this._initialResize = true;
				}
			}));

			// If the user clicks the Enter key in the folder tree widget, stop propagation so the
			// OK button won't close the dialog.
			this.connect(this._folderSelector._folderTree.domNode, "onkeydown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.ENTER) {
					evt.stopPropagation();
				}
			}));

			this.logExit(methodName);
		},

		_action: function() {
			var methodName = "_action";
			this.logEntry(methodName);

			var newFolder = this._folderSelector.getSelected();
			if (this._hasPermissionToPerformActionOnSelectedFolder == true) {
				if (newFolder != null) {
					if (this.action == "actionAddToFolder") {
						newFolder.item.addToFolder(this._items);
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
						newFolder.item.moveToFolder(this._items, sourceFolder);
					}
				}
				this.onCancel();
			} else {
				// If they double click on a folder when they don't have permision to remove from the parent in the Move to Folder 
				// scenario, display the warning message.
				this._displayNoPermissionParent();
			}

			this.logExit(methodName);
		}
	});
});

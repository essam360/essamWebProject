/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/string",
	"ecm/model/Message",
	"ecm/model/Desktop",
	"ecm/model/Favorite",
	"ecm/model/Repository",
	"ecm/model/SearchTemplate",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/widget/dialog/AddContentItemDialog",
	"./DndFromDesktop",
	"ecm/widget/_DroppedFilesAddDocMixin",
], function(declare, lang, connect, string, Message, Desktop, Favorite, Repository, SearchTemplate, UnifiedSearchTemplate, AddContentItemDialog, DndFromDesktop, _DroppedFilesAddDocMixin) {

	/**
	 * @name ecm.widget.listView.gridModules.DndFromDesktopAddDoc
	 * @class This module controls the drag-and-drop from the desktop to the grid. This module overrides the
	 *        <code>DndFromDesktop</code> module, adding the capability to check if the row item has privilege, and
	 *        when dropping, calls the Add Document dialog.
	 * @augments ecm.widget.listView.gridModules.DndFromDesktop
	 */

	return declare("ecm.widget.listView.gridModules.DndFromDesktopAddDoc", [
		DndFromDesktop,
		_DroppedFilesAddDocMixin
	], {
		/** @lends ecm.widget.listView.gridModules.DndFromDesktopAddDoc.prototype */

		preload: function() {
			var t = this, g = t.grid;
			t.inherited(arguments);

			t.connect(g, "onModulesLoaded", lang.hitch(t, function() {
				var viewFilmstrip = g.contentList.getContentListModule("viewFilmStrip");
				if (viewFilmstrip) {
					t.connect(viewFilmstrip, "onCreateFilmstrip", lang.hitch(t, function(filmstrip) {
						t._connectFilmstripDrop = t.connect(filmstrip, "onDrop", "_onDropItem");
						filmstrip.canDropOnItem = lang.hitch(t, "_canDropOnItem");
					}));
					t.connect(viewFilmstrip, "onDestroyFilmstrip", lang.hitch(t, function() {
						connect.disconnect(this._connectFilmstripDrop);
					}));
				}
			}));
		},

		destroy: function() {
			var t = this;
			if (t.addContentItem) {
				// Release the reference. The contents are self-destroyed.
				t.addContentItem = null;
			}
			t.inherited(arguments);
		},

		/**
		 * Determines if a document from the desktop can be added to repository in the specified location.
		 * 
		 * @param row
		 *            The row to be dropped on.
		 * @param evt
		 *            The event.
		 * @return Returns {boolean} true if the document can be added and false if it cannot.
		 */
		canDropOnRow: function(row, evt) {
			var t = this;
			var rowItem = row ? row.item() : null;
			return t._canDropOnTargetItem(t._getTargetItem(rowItem));
		},

		/**
		 * @private Determines if a document from the desktop can be added to the repository in the specified location.
		 * @param item
		 *            The item to be dropped on.
		 * @param evt
		 *            The event.
		 * @return Returns {boolean} true if the document can be added and false if it cannot.
		 */
		_canDropOnItem: function(item, evt) {
			var t = this;
			return t._canDropOnTargetItem(t._getTargetItem(item));
		},

		/**
		 * @private Returns true if the target item can be dropped on.
		 */
		_canDropOnTargetItem: function(targetItem) {
			if (targetItem) {
				if (targetItem.isInstanceOf && targetItem.isInstanceOf(UnifiedSearchTemplate)) {
					return false;
				} else if (targetItem.isInstanceOf && targetItem.isInstanceOf(Repository)) {
					// If the target is a repository, the user must be granted the addDoc privilege.
					// When the user is granted the addDoc privilege, if the desktop configuration requires
					// filing into a folder then the user must also be granted the repository foldering privilege.
					if (!targetItem.getPrivilege("addDoc") || (Desktop.fileIntoFolder && !targetItem.getPrivilege("foldering"))) {
						return false;
					}
				} else if (targetItem.isFolder && targetItem.isFolder()) {
					if (targetItem.repository.type == "cm"){
						if (!targetItem.hasPrivilege("privAddToFolder")){
							return false;
						}
					}
					else if (!targetItem.hasPrivilege("privAddItem") || !targetItem.hasPrivilege("privAddToFolder")) {
						if (targetItem.isInstanceOf && targetItem.isInstanceOf(Favorite) && targetItem.objectId && !targetItem.item && targetItem.type == "folder") {
							return true; // For favorites, we may not have the privilege info retrieved yet.  In this case, we will check for privilege again in onDrop method.
						} else {
							return false;
						}
					}
				} else if (targetItem.repository.type == "od") {
					if ((targetItem.isInstanceOf && targetItem.isInstanceOf(SearchTemplate)) || (targetItem.type == "search")) {
						return true; // not check privilege here and will check privilege in ondrop method
					}
				}
				return true;
			}
			return false;
		},

		/**
		 * Handles a drop event from the desktop on the grid area.
		 * 
		 * @param row
		 *            The row that is dropped on.
		 * @param files
		 *            Array of files to add.
		 * @param evt
		 *            The event.
		 */
		onDrop: function(row, files, evt, hasFiles) {
			var t = this;
			var rowItem = row ? row.item() : null;
			t._drop(t._getTargetItem(rowItem), files, evt, hasFiles);
		},

		/**
		 * @private Handles a drop event from the desktop on an item in the filmstrip.
		 * @param item
		 *            The item dropped on.
		 * @param files
		 *            Array of files to add.
		 * @param evt
		 *            The event.
		 */
		_onDropItem: function(item, files, evt) {
			var t = this;
			return t._drop(t._getTargetItem(item), files, evt);
		},

		
		/**
		 * @private Handles a drop event from the desktop on an item.
		 * @param targetItem
		 *            The target item to add the files to.
		 * @param files
		 *            Array of files to add.
		 * @param evt
		 *            The event.
		 */
		_drop: function(targetItem, files, evt, hasFiles) {
			var t = this;
			if ((hasFiles || t._eventHasFiles(evt)) && t._numberWithinMaxDocToAdd(files, targetItem)) { // _numberWithinMaxDocToAdd is from _DroppedFilesAddDocMixin
				var success = lang.hitch(t, "_verifyCanAddFilesSuccess", targetItem, files, evt);
				if (targetItem.isInstanceOf && targetItem.isInstanceOf(Favorite) && !targetItem.item && targetItem.repository.type != "od") {
					targetItem.retrieveFavorite(lang.hitch(t, function(obj) {
						// re-check the privilege for the newly retrieve favorite item.  If cannot add, display error message.
						if (!targetItem.hasPrivilege("privAddItem") || !targetItem.hasPrivilege("privAddToFolder")) {
							Desktop.addMessage(Message.createErrorMessage("dnd_no_privilege_error", [
								targetItem.item.name
							]));
						} else {
							t._verifyCanAddFiles(files, targetItem).then(success, t._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
						}
					}));
				} else {
					if (targetItem.repository && targetItem.repository.type == "od") {
						if (targetItem.repository.supportsAddDocument) {
							this._oddocfiles = files
							if (this._oddocfiles[0].size == 0) {
								Desktop.addMessage(Message.createErrorMessage("add_document_filesize_empty_od_error", [
									targetItem.name
								]));

							} else {
								if (targetItem.isInstanceOf && targetItem.isInstanceOf(Favorite)) {
									targetItem.retrieveFavorite(lang.hitch(t, function(obj) {
										targetItem.repository.retrieveODAddDocPermission(targetItem.id, lang.hitch(t, function(hasPermission) {
											if (hasPermission) {
												t._verifyCanAddFiles(this._oddocfiles, targetItem).then(success, t._verifyCanAddFilesFailure);
											} else {
												Desktop.addMessage(Message.createErrorMessage("dnd_no_privilege_error", [
													targetItem.name
												]));
											}
										}));
									}));
								} else {
									targetItem.repository.retrieveODAddDocPermission(targetItem.id, lang.hitch(t, function(hasPermission) {
										if (hasPermission) {
											t._verifyCanAddFiles(this._oddocfiles, targetItem).then(success, t._verifyCanAddFilesFailure);
										} else {
											Desktop.addMessage(Message.createErrorMessage("dnd_no_privilege_error", [
												targetItem.name
											]));
										}
									}));
								}
							}
						} else {
							Desktop.addMessage(Message.createErrorMessage("add_document_odserver_odwek_version_od_error", [
								targetItem.name
							]));
						}

					} else {
						t._verifyCanAddFiles(files, targetItem).then(success, t._verifyCanAddFilesFailure); // The _verify* methods are from _DroppedFilesAddDocMixin
					}
				}
			}
		},

		/**
		 * @private Returns the item (folder or repository) to add the dragged data to.
		 */
		_getTargetItem: function(item) {
			var t = this, g = t.grid, gridResultSet = g.contentList.getResultSet();
			var targetItem = item;
			if (targetItem) {
				var parent = targetItem.parentFolder ? targetItem.parentFolder : targetItem.parent;
				if (targetItem.isFolder && !targetItem.isFolder() && parent) { // if dropped on a doc, then get the doc's parentFolder
					if (!targetItem.isInstanceOf(Favorite)) {
						targetItem = parent;
					}
				} else if (targetItem.isFolder && !targetItem.isFolder() && targetItem.repository) { // if dropped on a doc & no parentFolder, the targetItem is the repository
					if (!targetItem.isInstanceOf(Favorite)) {
						targetItem = targetItem.repository;
					}
				}
			} else { // dropping on the empty space below the grid, then get targetItem from resultSet
				targetItem = gridResultSet.parentFolder ? gridResultSet.parentFolder : gridResultSet.repository;
			}
			if (targetItem.isInstanceOf(SearchTemplate) && targetItem.repository) { // cannot add doc to a search template, therefore add it to the repository

				if (targetItem.repository.type != "od") {
					targetItem = targetItem.repository;
				}

			}
			if (targetItem.isInstanceOf(Favorite) && targetItem.type != "folder") { // cannot only drop on a Favorites that is a folder

				if (targetItem.repository.type != "od") {
					targetItem = null;
				} else if (targetItem.type == "document") {
					targetItem = null;
				}
			}
			return targetItem;
		},

		/**
		 * @private Shows the add document dialog.
		 */
		_verifyCanAddFilesSuccess: function(targetItem, files, evt) {
			var t = this, g = t.grid, gridResultSet = g.contentList.getResultSet();
			if (targetItem) {
				if (targetItem.isInstanceOf(Favorite)) {
					targetItem = targetItem.item;
				}
				var repository = targetItem.repository ? targetItem.repository : targetItem;

				// Use search result content class as default if the target is not a folder
				var defaultClass;
				if (!targetItem || !(lang.isFunction(targetItem.isFolder) && targetItem.isFolder())) {
					var actionsHandler = ecm.model.desktop.getActionsHandler();
					if (lang.isFunction(actionsHandler._getSearchTemplateSingleContentClass)) {
						defaultClass = actionsHandler._getSearchTemplateSingleContentClass(gridResultSet.searchTemplate, repository);
					}
				}

				var checkForTeamspace = repository.teamspacesEnabled && !this.teamspace;

				if (gridResultSet.teamspaceId) {
					repository.retrieveTeamspaceById(gridResultSet.teamspaceId, "instance", lang.hitch(t, function(teamspace) {
						teamspace.retrieveContentClasses(lang.hitch(t, function() {
							t.displayDialog(files, targetItem, teamspace, defaultClass);
						}));
					}));
				} else if (checkForTeamspace && lang.isFunction(targetItem.retrieveTeamspace)) {
					targetItem.retrieveTeamspace(lang.hitch(this, function(teamspace) {
						t.displayDialog(files, targetItem, teamspace, defaultClass);
					}));
				} else {
					t.displayDialog(files, targetItem, null, defaultClass);
				}
			}
		},

		/**
		 * Displays the add document dialog.
		 * 
		 * @param files
		 *            The list of files that were dropped.
		 * @param targetItem
		 *            The item that the dropped files will be added to.
		 * @param teamspace
		 *            If not null, then the teamspace that the files were dropped on.
		 * @param defaultClass
		 *            If not null, the default class selected in the add dialog.
		 * @since 2.0.2
		 */
		displayDialog: function(files, targetItem, teamspace, defaultClass) {
			var t = this;
			t.addContentItem = new AddContentItemDialog({
				skipPreloadingFileTracker: true,
				destroyWhenFinished: true
			});
			if (defaultClass) {
				t.addContentItem.setDefaultContentClass(defaultClass);
			}
			t.addContentItem.setFiles(files);
			var repository = targetItem.repository ? targetItem.repository : targetItem;
			t.addContentItem.show(repository, targetItem, true, false, null, teamspace, false, null);
		}
	});
});

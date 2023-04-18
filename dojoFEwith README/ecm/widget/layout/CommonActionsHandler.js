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
	"dojo/_base/sniff",
	"dojo/aspect",
	"dojo/io/iframe",
	"dojo/dom",
	"dojo/dom-form",
	"dojo/dom-style",	
	"dojo/string",
	"idx/html",
	"ecm/LoggerMixin",
	"ecm/model/Message",
	"ecm/model/Mail",
	"ecm/model/EntryTemplate",
	"ecm/model/SearchTemplate",
	"ecm/model/Desktop",
	"ecm/widget/viewer/model/ViewerItem",
	"ecm/widget/dialog/ShareDialog",
	"ecm/widget/dialog/AboutDialog",
	"ecm/widget/dialog/AddContentItemDialog",
	"ecm/widget/dialog/AddToFavoritesDialog",
	"ecm/widget/dialog/AnnotationDialog",
	"ecm/widget/dialog/ApplyRemoveHoldDialog",
	"ecm/widget/dialog/ChangePasswordDialog",
	"ecm/widget/dialog/ChangeLocaleDialog",
	"ecm/widget/dialog/CheckInDialog",
	"ecm/widget/dialog/CheckoutDialog",
	"ecm/widget/dialog/ConfirmationDialog",
	"ecm/widget/dialog/CreateHoldDialog",
	"ecm/widget/dialog/EditPropertiesDialog",
	"ecm/widget/dialog/ErrorDialog",
	"ecm/widget/dialog/MultiEditPropertiesDialog",
	"ecm/widget/dialog/ClassChooserDialog",
	"ecm/widget/dialog/EFormWindow",
	"ecm/widget/dialog/ExportDialog",
	"ecm/widget/dialog/LoginDialog",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/dialog/MoveFileDialog",
	"ecm/widget/dialog/MoveFileEnhancedDialog",
	"ecm/widget/dialog/MoveTeamspaceFileDialog",
	"ecm/widget/dialog/PrintDialog",
	"ecm/widget/dialog/PrintServiceDialog",
	"ecm/widget/dialog/ReassignToUserDialog",
	"ecm/widget/dialog/SelectObjectDialog",
	"ecm/widget/dialog/SelectUserGroupDialog",
	"ecm/widget/dialog/EmailDialog",
	"ecm/widget/dialog/ShowHyperlinkDialog",
	"ecm/widget/dialog/StartWorkflowDialog",
	"ecm/widget/dialog/ProcessInformationDialog",
	"ecm/widget/dialog/StepProcessorWindow",
	"ecm/widget/dialog/StepRoutingWindow",
	"ecm/widget/dialog/SuspendWorkItemsDialog",
	"ecm/widget/dialog/UnfileDialog",
	"ecm/widget/dialog/TemplatePropertiesDialog",
	"ecm/widget/dialog/ContentViewerWindow",
	"ecm/widget/dialog/OfficeOnlineDocumentDialog",
	"ecm/widget/dialog/AddDocumentFromOfficeTemplateDialog",
	"ecm/widget/dialog/AddDocumentFromEditServiceTemplateDialog",	
	"ecm/widget/search/SearchInDropDown",
	"ecm/widget/layout/SearchTabPane",
	"ecm/widget/teamspaceBuilder/ManageTeamspaceDialog",
	"ecm/widget/teamspaceBuilder/TeamspacePropertiesDialog",
	"ecm/widget/teamspaceBuilder/ImportTeamspaceDialog",
	"ecm/widget/viewer/_DocViewerMixin",
	"ecm/model/FavoritesResultSet",
	"ecm/model/MySyncedFilesResultSet",
	"ecm/model/Action",
	"ecm/model/FileTracker",
	"ecm/model/Print",
	"ecm/widget/dialog/TransferedWorkflowsDialog",
	"ecm/widget/dialog/TransferWorkflowDefinitionDialog",
	"dojo/has!dojo-bidi?./BidiSupport",
	"ecm/util/_Dialog"
],

function(declare, //
lang, //
array, //
dojojson, //
has, //
aspect, //
iframe, //
dom, //
domForm,//
domStyle, //
string, //
idxHtml, //
LoggerMixin, //
Message, //
Mail, //
EntryTemplate, //
SearchTemplate, //
Desktop, //
ViewerItem, //
ShareDialog, //
AboutDialog, //
AddContentItemDialog, //
AddToFavoritesDialog, //
AnnotationDialog, //
ApplyRemoveHoldDialog, //
ChangePasswordDialog, //
ChangeLocaleDialog, //
CheckInDialog, //
CheckoutDialog, //
ConfirmationDialog, //
CreateHoldDialog, //
EditPropertiesDialog, //
ErrorDialog,//
MultiEditPropertiesDialog, //
ClassChooserDialog, //
EFormWindow, //
ExportDialog, //
LoginDialog, //
MessageDialog, //
MoveFileDialog, //
MoveFileEnhancedDialog, //
MoveTeamspaceFileDialog, //
PrintDialog, //
PrintServiceDialog, //
ReassignToUserDialog, //
SelectObjectDialog, //
SelectUserGroupDialog, //
EmailDialog, //
ShowHyperlinkDialog, //
StartWorkflowDialog, //
ProcessInformationDialog,//
StepProcessorWindow, //
StepRoutingWindow,//
SuspendWorkItemsDialog, //
UnfileDialog, //
TemplatePropertiesDialog, //
ContentViewerWindow, //
OfficeOnlineDocumentDialog, //
AddDocumentFromOfficeTemplateDialog, //
AddDocumentFromEditServiceTemplateDialog,//
SearchInDropDown, //
SearchTabPane, //
ManageTeamspaceDialog, //
TeamspacePropertiesDialog, //
ImportTeamspaceDialog, //
_DocViewerMixin, //
FavoritesResultSet, //
MySyncedFilesResultSet, //
Action, //
FileTracker, //
Print, //
TransferedWorkflowsDialog, //
TransferWorkflowDefinitionDialog, //
BidiSupport, //
dialog_util) {

	/**
	 * @name ecm.widget.layout.CommonActionsHandler
	 * @class Provides the default implementation for many of the common actions. This class invokes methods from the
	 *        ecm.widget.dialog package and ecm.model package.
	 */
	var CommonActionsHandler = declare("ecm.widget.layout.CommonActionsHandler", [
		LoggerMixin,
		_DocViewerMixin
	], {
		/** @lends ecm.widget.layout.CommonActionsHandler.prototype */

		_largeNumberPrompt: 100,
		_downloadLargeNumberPrompt: 20,
		_exportLargeNumberPrompt: 10,
		_printLargeNumberPrompt: 10,

		/**
		 * This refreshes the result set that an item or items are contained within. If no items are provided, it will
		 * refresh the repository. If no repository is provided, it will refresh the desktop.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            Callback function.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            An instance of {@link ecm.model.ResultSet} representing the result set that this item was obtained
		 *            from, if any.
		 */
		actionRefreshGrid: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionRefreshGrid");
			if (resultSet) {
				if (resultSet.parentFolder && resultSet.parentFolder.isInstanceOf && (resultSet.parentFolder.isInstanceOf(ecm.model.ContentItem) || resultSet.parentFolder.isInstanceOf(ecm.model.Worklist) || resultSet.parentFolder.isInstanceOf(ecm.model.WorkItem))) { // refreshes the resultSet's parentFolder or worklist  
					resultSet.parentFolder.refresh();
				} else if (resultSet.isInstanceOf(ecm.model.FavoritesResultSet)) {
					resultSet.reload();
				} else {
					resultSet.refresh();
				}
			} else if (items && items.length > 0) {
				for ( var i in items) {
					var item = items[i];
					if (item.refresh) {
						item.refresh();
					}
				}
			} else if (repository) {
				repository.refresh();
			} else {
				ecm.model.desktop.refresh();
			}
			this.logExit("actionRefreshGrid");
		},

		/**
		 * This refreshes the in-basket result set that an item or items are contained within.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of {@link ecm.model.WorkItem) objects.
		 */
		actionRefreshInbasket: function(repository, items) {
			this.logEntry("actionRefreshInbasket");
			if (repository.type == "cm" && items && items[1] && items[1].parentFolder && items[1].parentFolder.isInstanceOf && items[1].parentFolder.isInstanceOf(ecm.model.WorkItem)) {
				items[1].parentFolder.openFolderContent(lang.hitch(this, function(resultSet) {
					items[0].worklistContents.setResultSet(resultSet);
				}));
			} else {
				items[0].refresh();
			}
			this.logExit("actionRefreshInbasket");
		},

		/**
		 * @deprecated This function is no longer used.
		 */
		actionRefreshAttachments: function(repository, items) {
			this.logEntry("actionRefreshAttachments");
			var attachments = items[0];
			this.logExit("actionRefreshAttachments");
		},

		/**
		 * Opens help information in a new window.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 */
		actionHelp: function(repository, items) {
			// temp code for ID user testing.
			var left = 100;
			var top = 100;
			var width = 860;
			var height = 600;
			//var url = ecm.model.desktop.getHelpUrl() + "help.htm";
			//var newWindow = window.open(url);
			this.logDebug("actionHelp", "helpUrl: " + ecm.model.desktop.getHelpUrl());
			var newWindow = window.open(ecm.model.desktop.getHelpUrl(), "_blank", "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + "\"", true);
		},

		/**
		 * Displays the About dialog box.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 */
		actionAbout: function(repository, items) {
			this.logEntry("actionAbout");

			if (!this.aboutDialog)
				this.aboutDialog = new AboutDialog();
			this.aboutDialog.show();

			this.logExit("actionAbout");
		},

		/**
		 * Disconnects Box (secondary) repository users from the desktop login account.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 * @since 2.0.3.5
		 */
		actionDisconnectBox: function(repository, items) {
			var methodName = "actionDisconnectBox";
			this.logEntry(methodName);

			var params = {
				desktop: ecm.model.desktop.id
			};

			ecm.model.Request.setSecurityToken(params);
			var request = ecm.model.Request.invokeServiceAPI("unlinkUser", "box", {
				requestParams: params,
				backgroundRequest: false,
				synchronous: false,
				requestCompleteCallback: lang.hitch(this, function(response) {
					ecm.model.desktop._refreshLinkedBoxRepositories(response, true);
				})
			});

			this.logExit(methodName);
		},

		/**
		 * Opens the logout confirmation dialog box.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 */
		actionLogOut: function(repository, items) {
			this.logEntry("actionLogOut");
			var message = ecm.model.desktop.dirtyMessage;

			if (this.confirmLogoff)
				this.confirmLogoff.destroy();

			var text = string.substitute(ecm.messages.logout_confirmation_question, [
				idxHtml.escapeHTML(ecm.model.desktop.applicationName)
			]);
			var events = new Array();
			ecm.model.desktop.onBeforeClose(events);
			if (events.length > 0) {
				text += "<br><ul>";
				for (var i = 0; i < events.length; i++) {
					text += "<li>" + events[i] + "</li>";
				}
				text += "</ul>";
			}

			this.confirmLogoff = new ConfirmationDialog({
				text: text,
				buttonLabel: ecm.messages.logout_confirmation_button,
				onExecute: function() {
					ecm.model.desktop.logoff();
				}
			});
			if (message && message.text.length > 0) {
				this.confirmLogoff.setMessage(message.text, "warning");
				this.confirmLogoff.icon.style.display = "none"; // only want one icon
			}
			this.confirmLogoff.show();

			this.logExit("actionLogOut");
		},

		/**
		 * Opens the change password dialog box.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 */
		actionChangePassword: function(repository, items) {
			this.logEntry("actionChangePassword");
			if (repository || ecm.model.desktop._initialRepository || ecm.model.desktop.repositories.length > 0) {
				if (!this.changePasswordDialog)
					this.changePasswordDialog = new ChangePasswordDialog();

				this.changePasswordDialog.show(repository);
			}
			this.logExit("actionChangePassword");
		},

		/**
		 * Opens the change locale dialog.
		 */
		actionChangeLocale: function() {
			this.logEntry("actionChangeLocale");
			if (!this.changeLocaleDialog)
				this.changeLocaleDialog = new ChangeLocaleDialog();
			this.changeLocaleDialog.show();
			this.logExit("actionChangeLocale");
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete
		 */
		actionUndo: function(repository, items) {
			this.logEntry("actionUndo");
			ecm.model.desktop.undo();
			this.logExit("actionUndo");
		},

		/**
		 * @private Part of undo/redo mechanism which is not complete
		 */
		actionRedo: function(repository, items) {
			this.logEntry("actionRedo");
			ecm.model.desktop.redo();
			this.logExit("actionRedo");
		},

		/**
		 * Opens the input item.
		 * 
		 * @param item
		 *            The item to open.
		 * @param callback
		 *            Callback function called on complete.
		 * @param errorCallback
		 * @since 2.0.3.7 Callback function called on error
		 */
		actionOpen: function(item, callback, errorCallback) {
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.SyncItem) && !item.item) {
				if (!item.parentFolder) {
					ecm.model.desktop.loadSyncItems(lang.hitch(this, function(syncItems, structure, magazineStructure) {
						if (syncItems && structure) {
							var resultSet = MySyncedFilesResultSet.createFromJSON({
								id: "__syncItems",
								name: "__syncItems",
								items: syncItems,
								structure: structure,
								magazineStructure: magazineStructure,
								parentFolder: item
							});
							// Update the parent so the breadcrumb can show this parent
							for ( var i in syncItems) {
								syncItems[i].parentFolder = item;
							}
							this._actionOpenCallback(item, resultSet, callback);
						}
					}));
				} else {
					if (this._itemInProgress != item) { // Avoid opening the item again when the user clicks on it repeatedly
						delete this._itemId;
						this._itemInProgress = item;
						item.retrieveSyncItem(lang.hitch(this, lang.hitch(this, function(obj) {
							this._itemInProgress = null;
							this._actionOpen(item, callback);
						})));
					}
				}
			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.Favorite) && !item.item) {
				if (!item.parentFolder) {
					ecm.model.desktop.loadFavorites(lang.hitch(this, function(favorites, structure, magazineStructure) {
						favorites = array.filter(favorites, function(item) { // remove the hidden favorites
							return !item.hidden;
						});
						if (favorites && structure) {
							var resultSet = FavoritesResultSet.createFromJSON({
								id: "__favorites",
								name: "__favorites",
								items: favorites,
								structure: structure,
								magazineStructure: magazineStructure,
								parentFolder: item
							});
							// Update the parent so the breadcrumb can show this parent
							for ( var i in favorites) {
								favorites[i].parentFolder = item;
							}
							this._actionOpenCallback(item, resultSet, callback);
						}
					}));
				} else {
					if (this._itemInProgress != item) { // Avoid opening the item again when the user clicks on it repeatedly
						delete this._itemId;
						this._itemInProgress = item;
						var params = {
							requestFailedCallback: errorCallback
						}
						item.retrieveFavorite(lang.hitch(this, lang.hitch(this, function(obj) {
							this._itemInProgress = null;
							this._actionOpen(item, callback);
						})), params);
					}
				}
			} else {
				this._actionOpen(item, callback);
			}
		},

		_actionOpen: function(inputItem, userCallback) {
			var item = inputItem.item ? inputItem.item : inputItem;
			if (item.isFolder && item.isFolder()) {
				if (this._itemInProgress != item) { // Avoid opening the item again when the user clicks on it repeatedly
					delete this._itemId;
					this._itemInProgress = item;

					if (item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem)) {
						item.openFolderContent(lang.hitch(this, function(resultSet) {
							this._actionOpenCallback(inputItem, resultSet, userCallback);
						}));
					} else {
						// need to retrieve updated folder info so actions are correctly enabled
						item.retrieveFolderContents(false, lang.hitch(this, function(resultSet) {
							this._actionOpenCallback(inputItem, resultSet, userCallback);
						}), null, null, null, item._teamspaceId, null, inputItem); // set the parent to the Favorite so getPath() will get the Favorite
					}
				}

			} else if ((item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) || item.attributes && item.attributes.type === "search") {
				if (this._itemInProgress != item) { // Avoid opening the item again when the user clicks on it repeatedly
					delete this._itemId;
					this._itemInProgress = item;

					if (item.id == "") { // this is a new search that isn't saved yet so just run it
						var self = this;
						item.search(function(resultSet) {
							self._actionOpenCallback(inputItem, resultSet, userCallback);
						}, null, null, null, function(response) {
							self._itemInProgress = null; // Reset itemInProgress on error
						});
					} else {
						var vsId = item.vsId;
						var version = item._getSearchVersion();
						if (version == null) {
							version = "released";
						} else if (version == "specific") {
							vsId = null;
							version = null;
						}
						item.repository.retrieveSearchTemplate(item.id, vsId, version, lang.hitch(this, function(updatedItem) {
							// Update the search template item
							updatedItem.parent = item.parent;
							item.onChange([
								updatedItem
							]);
							if (updatedItem.isAutoRun() || item.isAutoRun()) {
								var self = this;
								item.search(function(resultSet) {
									self._actionOpenCallback(inputItem, resultSet, userCallback);
								}, null, null, null, function(response) {
									self._itemInProgress = null; // Reset itemInProgress on error
								});
							} else {
								this._actionOpenCallback(inputItem, null, userCallback);
							}
						}));
					}
				}

			} else if ((item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) || item.attributes && item.attributes.type === "teamspace") {
				ecm.model.desktop.setSelectedItems([
					item
				]);
				item.repository.retrieveTeamspaceById(item.id, "instance", lang.hitch(this, function(teamspace) {
					if (teamspace && teamspace.state != "deleted") {
						this._actionOpenCallback(inputItem, teamspace, userCallback);
					}
				}));

			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem)) {
				this.actionViewStep(null, [
					item
				], lang.hitch(this, function(item) {
					this._actionOpenCallback(inputItem, null, userCallback);
				}));

			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.Worklist)) {
				item.retrieveWorkItems(lang.hitch(this, function(resultSet) {
					this._actionOpenCallback(inputItem, resultSet, userCallback);
				}));

			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model.AttachmentItem)) {
				item.retrieveAttachmentContents(false, false, lang.hitch(this, function(resultSet) {
					this._actionOpenCallback(inputItem, resultSet, userCallback);
				}));
			} else {

				if (item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem) && item.repository.type == "cm") {
					item = item.contentItem;
				}
				this.actionView(item.repository, [
					item
				], userCallback, null, item.resultSet, {});
			}
		},

		_actionOpenCallback: function(item, data, callback) {
			this._itemId = (this._itemInProgress && this._itemInProgress.id);
			this._itemInProgress = null;
			if (callback) {
				callback(item, data);
			}
		},

		/**
		 * Opens an asynchronous task. If it's a recurring task, it will retrieve all of its instances instead.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            An array of {@link ecm.model.AsyncTask} to open.
		 * @param callback
		 *            The callback when the asynchronous task finishes opening.
		 */
		actionOpenAsyncTask: function(repository, items, callback) {
			if (items) {
				var item = items[0];
				if (item.isInstanceOf && (item.isInstanceOf(ecm.model.AsyncTask) || item.isInstanceOf(ecm.model.AsyncTaskInstance))) {
					var task = item.isInstanceOf(ecm.model.AsyncTask) ? item : item.parent;
					if (task instanceof ecm.model.AsyncTask && task.isTaskRecurring()) {
						task.retrieveAsyncTaskInstances(lang.hitch(this, function(resultSet) {
							if (callback) {
								callback(task, resultSet);
							} else {
								ecm.model.desktop.taskManager.onAsyncTaskItemOpened(item, resultSet);
							}
						}));
					} else {
						item.getDetails(lang.hitch(this, function() {
							ecm.model.desktop.taskManager.onAsyncTaskItemOpened(item);
						}));
					}
				}
			}
		},

		/**
		 * Completes the appropriate view action or obtains the appropriate viewer for which to view the input content
		 * items.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Input content items to view.
		 * @param openUseSelf -
		 *            (true/false) default is false. Open a window use itself instead of open a new window if value is
		 *            true.
		 */
		actionView: function(repository, items, callback, teamspace, resultSet, parameterMap, openUseSelf) {
			var methodName = "actionView";
			this.logEntry(methodName);

			for ( var item in items )  {
				if ( item.contentElementParentId != null ) {
					item.id = item.contentElementParentId;
				}
			}
			
			var contentItems = this._convertItems(items);
			var repository = items[0].repository;
			repository.addRecentItems(items);
			
	

			if (!resultSet) {
				resultSet = items[0].resultSet;
			}

			var message;

			if (CommonActionsHandler._viewAction.canPerformAction(repository, contentItems, "", null, resultSet)) {
				ecm.model.desktop.loadViewerClasses(lang.hitch(this, function() {
					var viewerPopupQueue = new Array();
					var downloadQueue = new Array();
					for ( var i in contentItems) {
						var contentItem = contentItems[i];
						this.logDebug(methodName, "Getting viewer for contentitem.");
						if (contentItem.repository.type == "p8") {
							var version = contentItem._getSearchVersion(resultSet);
							contentItem.version = version;
						}

						var viewerItem = new ViewerItem(contentItem);
						var handled = false;

						var viewer = viewerItem.getViewer(false);
						if (viewer != null) {
							if (viewer.id == "noViewerViewer") {
								handled = true;
								if (!this._actionViewNoViewer(contentItem)) {
									message = ecm.model.Message.createErrorMessage("no_viewer_to_view_error");
									if (message) {
										ecm.model.desktop.addMessage(message);
									}
								}
							} else if (contentItem.hasContent && contentItem.hasContent()) {
								handled = true;
								if (viewer.launchInSeparateWindow) {
									if (this._delegateToDownload(viewer, contentItem)) {
										downloadQueue.push(contentItem);
									} else {
										var viewerUrl = viewer.getLaunchUrl(contentItem);
										var popupWindow = window.open("", "_blank");
										ecm.widget.viewer.model.ViewerItem.loadSecure(popupWindow, viewerUrl, true);
									}
								} else {
									//ecm.widget.dialog.contentViewerWindow.open(contentItem);
									// Queue these up so that we can tell the viewer to only launch the last visible out of the list.
									viewerPopupQueue.push(contentItem);
								}
							}
						} else {
							handled = this._actionViewInternal(repository, contentItem, callback, teamspace, resultSet, parameterMap, openUseSelf);
							if (!handled) {
								this._actionViewNoViewer(contentItem);
								message = ecm.model.Message.createErrorMessage("viewer_unable_to_view_error");
								if (message) {
									ecm.model.desktop.addMessage(message);
								}
								handled = true;
							}
						}

						if (!handled) {
							this.actionEdit(repository, items);
						}
					}

					// If there are any going to the viewer framework launch them now as a batch.
					if (viewerPopupQueue.length > 0) {
						ecm.widget.dialog.contentViewerWindow.open(viewerPopupQueue);
					}

					if (downloadQueue.length > 0) {
						this.actionDownload(repository, downloadQueue, callback, teamspace, resultSet, parameterMap);
					}
				}));
			} else {
				message = Message.createErrorMessage("viewer_privilege_to_view_error");
				if (message) {
					ecm.model.desktop.addMessage(message);
				}
			}
		},

		_actionViewNoViewer: function(contentItem) {
			var methodName = "_actionViewNoViewer";
			this.logEntry(methodName);

			var actionViewNoViewerMessageKeys = {
				"ftEntryTemplate": "open_old_format_entry_template_error", //
				"ftCustomObjectEntryTemplate": "open_custom_object_entry_template_error", //
				"ftDeclareRecordEntryTemplate": "open_records_entry_template_error", //
				"ftWorkflow": "open_workflow_error", //
				"ftPolicyDocument": "open_forms_object_error", //
				"ftPolicyWorkflow": "open_forms_object_error", //
				"ftFormTemplate": "open_forms_object_error", //
				"ftFormData": "open_forms_object_error" //
			};

			var mimeClass = contentItem.getMimeClass();
			var handled = false;
			var messageKey = actionViewNoViewerMessageKeys[mimeClass];

			if (mimeClass && mimeClass == "ftPolicyWorkflow") {
				if (ecm.model.desktop.isPluginLoaded("EFormPlugin")) {
					messageKey = "open_forms_work_object_error";
				}
			}

			if (messageKey && messageKey != null) {
				var message = Message.createErrorMessage(messageKey);
				if (message) {
					handled = true;
					ecm.model.desktop.addMessage(message);
				}
			}

			this.logExit(methodName);
			return handled;
		},

		/**
		 * Added openUseSelf at 9/2013 to open an external doc from a bookmark page.
		 */
		_actionViewInternal: function(repository, contentItem, callback, teamspace, resultSet, parameterMap, openUseSelf) {
			var methodName = "_actionViewInternal";
			this.logEntry(methodName);

			var handled = false;

			// Check plugin openActions
			if (!handled && ecm.model.desktop.openActions && ecm.model.desktop.openActions[contentItem.repository.type]) {
				this.logDebug(methodName, "openActions were found, check for a match on mimetype " + contentItem.mimetype);
				var openAction = ecm.model.desktop.openActions[contentItem.repository.type][contentItem.mimetype];
				if (openAction) {
					this.logDebug(methodName, "matching plugin openAction was found.");
					if (this && this[openAction.action]) {
						this.logDebug(methodName, "openAction.action " + openAction.action + " was found in this handler.");
						handled = true;
						this[openAction.action](contentItem.repository, [
							contentItem
						], callback, teamspace, resultSet, parameterMap);
					} else if (window && window[openAction.action]) {
						this.logDebug(methodName, "openAction.action " + openAction.action + " was found in the window scope.");
						handled = true;
						window[openAction.action](contentItem.repository, [
							contentItem
						], callback, teamspace, resultSet, parameterMap);
					} else {
						this.logError(methodName, "openAction " + openAction.action + " not implemented.");
					}
				}
			}

			if (!handled) {
				var mimeClass = contentItem.getMimeClass();
				if (contentItem.isDocumentEntryTemplate()) {
					handled = true;
					ecm.model.desktop.getActionsHandler().actionImportUsingTemplate(contentItem.repository, [
						contentItem
					], callback, teamspace, true);
				} else if (contentItem.isFolderEntryTemplate()) {
					handled = true;
					ecm.model.desktop.getActionsHandler().actionCreateFolderUsingTemplate(contentItem.repository, [
						contentItem
					], callback, teamspace, true);
				} else if (mimeClass == "ftPolicyDocument" || mimeClass == "ftFormData" || mimeClass == "ftFormTemplate" || mimeClass == "ftPolicyWorkflow") {
					if (ecm.model.desktop.isPluginLoaded("XTPlugin")) {
						handled = true;
						if (this._xtServerUrl == null && ecm.model.admin.appCfg) {
							ecm.model.admin.appCfg.getPluginObjects(lang.hitch(this, function(plugins) {
								for (var i = 0; i < plugins.length; i++) {
									if (plugins[i].id == "XTPlugin") {
										this._xtServerUrl = plugins[i]._attributes.configuration;
										break;
									}
								}
								if (this._xtServerUrl != null) {
									ecm.model.desktop.getActionsHandler().actionOpenEForm(contentItem.repository, [
										contentItem
									], null, this._xtServerUrl, openUseSelf);
								}
							}), {
								securityTopic: ecm.model.admin.appCfg.SECURITY_CATEGORY_PLUGINS
							});
						} else {
							ecm.model.desktop.getActionsHandler().actionOpenEForm(contentItem.repository, [
								contentItem
							], null, this._xtServerUrl);
						}
					} else if (ecm.model.desktop.isPluginLoaded("EFormPlugin")) {
						if (mimeClass != "ftPolicyWorkflow") {
							handled = true;
							ecm.model.desktop.getActionsHandler().actionOpenEForm(contentItem.repository, [
								contentItem
							], null);
						}
					}
				} else if (mimeClass == "ftExternalFile") {
					var externalFile = contentItem.filename;
					this.logDebug(methodName, "External file");
					if (externalFile && externalFile.length > 0) {
						handled = true;
						if (!this._openExternalFile(externalFile)) {
							this.logDebug(methodName, "The external file link was not allowed to be opened. The properties will be displayed or edited instead.");
							this.actionEdit(repository, [ contentItem ]);
						}
					} else {
						handled = true;
						this.logDebug(methodName, "The external file link is not available. Retrieving the document's attributes.");
						contentItem.retrieveAttributes(lang.hitch(this, function(retrievedItem) {
							externalFile = retrievedItem.filename;
							if (externalFile && externalFile.length > 0) {
								if (!this._openExternalFile(externalFile, openUseSelf)) {
									this.logDebug(methodName, "The external file link was not allowed to be opened. The properties will be displayed or edited instead.");
									this.actionEdit(repository, [ contentItem ]);
								}
							} else {
								this.logDebug(methodName, "This document has no external file link. The properties will be displayed or edited instead.");
								this.actionEdit(repository, [ contentItem ]);
							}
						}), true);
					}
				}
			}

			this.logExit(methodName);
			return handled;
		},
		
		_openExternalFile: function(externalFile, openUseSelf) {
			var methodName = "_openExternalFile";
			this.logDebug(methodName, "External file link: " + externalFile);
			// Validate the link before opening it.
			var openExternalFile = array.some(ecm.model.desktop.allowedExternalLinkPrefixes, function(prefix) {
					return (externalFile.toLowerCase().indexOf(prefix.toLowerCase()) == 0);
			});
			if (openExternalFile) {
				if (openUseSelf) {
					window.open(externalFile, "_self");
				} else {
					window.open(externalFile);
				}
			} else {
				this.logDebug(methodName, "The external file link will not be opened. It does not begin with one of the allowed prefixes defined in ecm.model.desktop.allowedExternalLinkPrefixes.");
			}
			return openExternalFile;
		},

		/**
		 * Displays the content items in a preview window.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Content items to view.
		 */
		actionPreview: function(repository, items) {
			var methodName = "actionPreview";
			this.logEntry(methodName);

			var contentItems = this._convertItems(items);
			var repository = items[0].repository;
			var resultSet = items[0].resultSet;
			repository.addRecentItems(items);

			var message;

			if (CommonActionsHandler._previewAction.canPerformAction(repository, contentItems, "", null, resultSet)) {
				ecm.model.desktop.loadViewerClasses(lang.hitch(this, function() {
					var viewerPopupQueue = new Array();
					for ( var i in contentItems) {
						var contentItem = contentItems[i];
						if (CommonActionsHandler._previewAction.canPerformAction(repository, [
							contentItem
						], "", null, resultSet)) {
							this.logDebug(methodName, "Getting viewer for contentitem.");

							if (contentItem.repository.type == "p8") {
								var version = contentItem._getSearchVersion(resultSet);
								contentItem.version = version;
							}

							var viewerItem = new ViewerItem(contentItem);
							var viewer = viewerItem.getViewer(true);
							if (viewer != null) {
								if (viewer.id == "noViewerViewer") {
									if (!this._actionViewNoViewer(contentItem)) {
										message = ecm.model.Message.createErrorMessage("no_viewer_to_view_error");
										if (message) {
											ecm.model.desktop.addMessage(message);
										}
									}
								} else {
									if (viewer.launchInSeparateWindow) {
										if (this._delegateToDownload(viewer, contentItem)) {
											downloadQueue.push(contentItem);
										} else {
											var viewerUrl = viewer.getLaunchUrl(contentItem);
											var popupWindow = window.open("", "_blank");
											ecm.widget.viewer.model.ViewerItem.loadSecure(popupWindow, viewerUrl, true);
										}
									} else {
										viewerPopupQueue.push(contentItem);
									}
								}
							}else {
								this._actionViewNoViewer(contentItem);
								message = ecm.model.Message.createErrorMessage("viewer_unable_to_view_error");
								if (message) {
									ecm.model.desktop.addMessage(message);
								}
							}
						}
					}

					// If there are any going to the viewer framework launch them now as a batch.
					if (viewerPopupQueue.length > 0) {
						ecm.widget.dialog.contentViewerWindow.preview(viewerPopupQueue);
					}
				}));
			} else {
				message = Message.createErrorMessage("viewer_privilege_to_view_error");
				if (message) {
					ecm.model.desktop.addMessage(message);
				}
			}
		},

		/**
		 * Opens the selected and supported content items in the viewer in Document Builder mode. 
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Input content items selected for opening in the viewer in Document Builder mode.
		 * @param openUseSelf -
		 *            (true/false) default is false. Open a window use itself instead of open a new window if value is
		 *            true.
		 */
		actionMergeSplit: function(repository, items, callback, teamspace, resultSet, parameterMap, openUseSelf) {
			var methodName = "actionMergeSplit";
			this.logEntry(methodName);

			var contentItems = this._convertItems(items);
			var repository = items[0].repository;
			repository.addRecentItems(items);

			if (!resultSet) {
				resultSet = items[0].resultSet;
			}

			if (CommonActionsHandler._mergeSplitAction.canPerformAction(repository, contentItems, "", null, resultSet)) {
				ecm.model.desktop.loadViewerClasses(lang.hitch(this, function() {
					
					// Determine the selected items that are supported.
					var pdfMappedToMergeSplitViewer;
					var tiffMappedToMergeSplitViewer;
					var supportedItems = array.filter(contentItems, function(item){
						var fileTypeSupported = false;
					    var viewers; 
					
						if (item.mimetype == "application/pdf") {
							if (pdfMappedToMergeSplitViewer == null) {
								viewers = ecm.model.desktop.getViewersForItem(item, false);
								pdfMappedToMergeSplitViewer = !!(viewers && viewers.length > 0 && viewers[0].isMergeSplitViewer);
							}
							fileTypeSupported = pdfMappedToMergeSplitViewer;
						} else if (lang.isFunction(item.isContentTiff) && item.isContentTiff()) {
							if (tiffMappedToMergeSplitViewer == null) {
								viewers = ecm.model.desktop.getViewersForItem(item, false);
								tiffMappedToMergeSplitViewer = !!(viewers && viewers.length > 0 && viewers[0].isMergeSplitViewer);
							}
							fileTypeSupported = tiffMappedToMergeSplitViewer; 
						}
						// Supported if the item is from the current repository, and has PDF or TIFF content that 
						// is mapped to a viewer that supports the Document Builder action.
						return (item.repository && (item.repository.id == repository.id) && item.hasContent() && fileTypeSupported);
					});

					// If one or more of the selected items are not supported...
					if (supportedItems.length != contentItems.length) {
						var errorMessage;
						
						if (pdfMappedToMergeSplitViewer === false || tiffMappedToMergeSplitViewer === false) {
							// The PDF and/or TIFF viewer mapping was checked and the viewer did not support Document Builder mode.
							if (pdfMappedToMergeSplitViewer === false) {
								if (tiffMappedToMergeSplitViewer === false) {
									errorMessage = Message.createErrorMessage("document_builder_pdf_and_tiff_unsupported_viewer_error");
								} else {
									errorMessage = Message.createErrorMessage("document_builder_pdf_unsupported_viewer_error");
								}
							} else { // (tiffMappedToMergeSplitViewer === false)
								errorMessage = Message.createErrorMessage("document_builder_tiff_unsupported_viewer_error");
							}
						} else {
							// Unsupported documents were selected.
							if (pdfMappedToMergeSplitViewer == null && tiffMappedToMergeSplitViewer == null) {
								// The PDF and TIFF viewer mappings were not checked, so no supported file types were selected.
								errorMessage = Message.createErrorMessage("document_builder_unsupported_documents_error");
							} else {
								errorMessage = Message.createErrorMessage("document_builder_some_unsupported_documents_error");
							}
						}
						
						if (supportedItems.length > 0) {
							this._actionMergeSplitInternal(repository, supportedItems, callback, teamspace, resultSet, parameterMap, openUseSelf, errorMessage);
						} else {
							ecm.model.desktop.addMessage(errorMessage);
						}
						
					} else {
						this._actionMergeSplitInternal(repository, supportedItems, callback, teamspace, resultSet, parameterMap, openUseSelf);						
					} 
				}));
			} else {
				message = Message.createErrorMessage("viewer_privilege_to_view_error");
				if (message) {
					ecm.model.desktop.addMessage(message);
				}
			}
		},

		/**
		 * @private
		 */
		_actionMergeSplitInternal: function(repository, items, callback, teamspace, resultSet, parameterMap, openUseSelf, errorMessage) {
			var methodName = "_actionMergeSplitInternal";
			this.logEntry(methodName);

			if (items.length) {
				var viewerPopupQueue = new Array();
				var downloadQueue = new Array();
				for ( var i in items) {
					var contentItem = items[i];
					this.logDebug(methodName, "Getting viewer for contentitem.");
					if (contentItem.repository.type == "p8") {
						var version = contentItem._getSearchVersion(resultSet);
						contentItem.version = version;
					}
	
					var viewerItem = new ViewerItem(contentItem);
					var handled = false;
	
					var viewer = viewerItem.getViewer(false);
					if (viewer != null) {
						if (viewer.id == "noViewerViewer") {
							handled = true;
							if (!this._actionViewNoViewer(contentItem)) {
								message = ecm.model.Message.createErrorMessage("no_viewer_to_view_error");
								if (message) {
									ecm.model.desktop.addMessage(message);
								}
							}
						} else if (contentItem.hasContent && contentItem.hasContent()) {
							handled = true;
							if (viewer.launchInSeparateWindow) {
								if (this._delegateToDownload(viewer, contentItem)) {
									downloadQueue.push(contentItem);
								} else {
									var viewerUrl = viewer.getLaunchUrl(contentItem);
									var popupWindow = window.open("", "_blank");
									ecm.widget.viewer.model.ViewerItem.loadSecure(popupWindow, viewerUrl, true);
								}
							} else {
								//ecm.widget.dialog.contentViewerWindow.open(contentItem);
								// Queue these up so that we can tell the viewer to only launch the last visible out of the list.
								viewerPopupQueue.push(contentItem);
							}
						}
					} else {
						handled = this._actionViewInternal(repository, contentItem, callback, teamspace, resultSet, parameterMap, openUseSelf);
						if (!handled) {
							handled = this._actionViewNoViewer(contentItem);
							message = ecm.model.Message.createErrorMessage("viewer_unable_to_view_error");
							if (message) {
								ecm.model.desktop.addMessage(message);
							}
							handled = true;
						}
					}
	
					if (!handled) {
						this.actionEdit(repository, items);
					}
				}
	
				// If there are any going to the viewer framework launch them now as a batch.
				if (viewerPopupQueue.length > 0) {
					ecm.widget.dialog.contentViewerWindow.openInMergeSplit(viewerPopupQueue, false, errorMessage);
				}
	
				if (downloadQueue.length > 0) {
					this.actionDownload(repository, downloadQueue, callback, teamspace, resultSet, parameterMap);
				}
			}
		},
		
		/**
		 * Opens the item in the edit properties dialog.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            Array of items. Only the first item is edited.
		 * @param callback
		 *            Callback function.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 */
		actionEdit: function(repository, items, callback, teamspace) {
			this.logEntry("actionEdit");

			if (items[0] && (items[0]["template"] == "ICMTeamspace" || items[0]["template"] == "ICMTeamspaceTemplate")) {
				if (this.messageDialog) {
					this.messageDialog.destroy();
				}
				this.messageDialog = new MessageDialog({
					text: ecm.messages.teamspace_edit_properties_notsupported
				});
				this.messageDialog.show();
			} else {
				if (items.length > 1) {
					if (this.editPropertiesDialog) {
						this.editPropertiesDialog.destroyRecursive();

					}
					if (this.classChooserDialog) {
						this.classChooserDialog.destroyRecursive();
					}
					//Check that they aren't exceeding the maxiumum number of documents to modify.
					var addAllowed = true;
					if (ecm.model.desktop) {
						var maxNumDocs = ecm.model.desktop.maxNumberDocToModify;
						if (items.length > maxNumDocs) {
							ecm.model.desktop.addMessage(Message.createErrorMessage("modify_document_too_many_items_error", [
								maxNumDocs,
								items.length
							]));
							addAllowed = false;
						}
					}

					if (addAllowed == true) {
						var displayMultiAdd = lang.hitch(this, function(items, entryTemplates){
							if (!(items[0].isInstanceOf && (items[0].isInstanceOf(ecm.model.WorkItem) || items[0].isInstanceOf(ecm.model.Favorite)))) {
								var contentClasses = this._getContentClassesForSelectedItems(items);
								if (this._needToDisplayClassChooserDialog(items, contentClasses, entryTemplates)) {
									this.classChooserDialog = new ClassChooserDialog();
									this.classChooserDialog.show(items, contentClasses, callback, entryTemplates);
								} else {
									this.editPropertiesDialog = new MultiEditPropertiesDialog();
									this.editPropertiesDialog.show(items, callback, contentClasses[0]);
								}
							} else if (!(items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Favorite))) {
								var worklist = items[0].parent;
								var contentItems = new Array();
								for ( var i in items) {
									var item = items[i];
									contentItems.push(item.contentItem);
								}
								var contentClasses = this._getContentClassesForSelectedItems(contentItems);
								if (this._needToDisplayClassChooserDialog(items, contentClasses, entryTemplates)) {
									this.classChooserDialog = new ClassChooserDialog();
									this.classChooserDialog.show(items, contentClasses, callback, entryTemplates);
								} else {
									this.editPropertiesDialog = new MultiEditPropertiesDialog();
									this.editPropertiesDialog.show(contentItems, function() {
										if (worklist && worklist.onRefreshWorklist) {
											worklist.onRefreshWorklist();
										}
									}, contentClasses[0]);
								}
							}
						});
						
						// Accumulate entry template Ids per repository.
						var repositoryDict = {};
						var repositoryEntryTemplateIds = {};
						for (var index in items){
							var item = items[index];
							if (item.entryTemplateId){
								if(!repositoryDict[item.repository.id]){
									repositoryDict[item.repository.id] = item.repository;
								}
								if (!repositoryEntryTemplateIds[item.repository.id]){
									repositoryEntryTemplateIds[item.repository.id] = [];
								}
								repositoryEntryTemplateIds[item.repository.id].push(item.entryTemplateId)
							}
						}
					
						if (Object.keys(repositoryEntryTemplateIds).length == 0){
							// No entry templates.
							displayMultiAdd(items);
						}
						else {
							var repositories = []
							for (repositoryKey in repositoryDict) {
								repositories.push(repositoryDict[repositoryKey]);
							}
							
							// Get the entry templates for the items in each repository.
							this._getEntryTemplates(repositories, repositoryEntryTemplateIds, 0, function(entryTemplates){
								displayMultiAdd(items, entryTemplates);
							});
						}
					}
				} else {
					if (this.editPropertiesDialog && this.editPropertiesDialog.open) {
						//from editPropertiesDialog to show history version properties
					} else {
						if (this.editPropertiesDialog) {
							this.editPropertiesDialog.destroyRecursive();
						}

						if (this.classChooserDialog) {
							this.classChooserDialog.destroyRecursive();
						}
						this.editPropertiesDialog = new EditPropertiesDialog();
					}
					if (!(items[0].isInstanceOf && (items[0].isInstanceOf(ecm.model.WorkItem) || items[0].isInstanceOf(ecm.model.Favorite)))) {
						this.editPropertiesDialog.showProperties(items[0], callback, teamspace);
					} else if (!(items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Favorite))) {
						var worklist = items[0].parent;
						var contentItem = items[0].contentItem;
						this.editPropertiesDialog.showProperties(contentItem, function() {
							if (worklist && worklist.onRefreshWorklist) {
								worklist.onRefreshWorklist();
							}
						});
					}
				}
			}
			this.logExit("actionEdit");
		},
		
		/**
		 * private
		 */
		_getEntryTemplates: function(repositories, repositoryTemplateIds, index, callback, templates){
			if (!templates){
				templates = [];
			}
			if (index < repositories.length){
				var repository = repositories[index];
				var templateIds = repositoryTemplateIds[repository.id];
				repository.retrieveEntryTemplatesByIds(templateIds, lang.hitch(this, function(retrievedTemplates){
					templates = templates.concat(retrievedTemplates);
					index++
					this._getEntryTemplates(repositories, repositoryTemplateIds, index, callback, templates);
				}));
			}
			else{
				callback(templates);
			}
		},
		
		/**
		 * private
		 */
		_needToDisplayClassChooserDialog: function(items, classes, templates){
			var displayClassChooserDialog = false;
			
			// If there are multiple classes, display the class chooser dialog.
			if (classes.length > 1){
				displayClassChooserDialog = true;
			}
			else if (templates && templates.length > 1) {
				// If all items are in the same class and there are entry templates, check to see if these are different entry templates,
				// or just different versions of the same entry template.
				var firstTemplateVersionId = templates[0].vsId ? templates[0].vsId : templates[0].itemId;
				for (var index in templates){
					var template = templates[index];
					var templateVersionId = templates[index].vsId ? templates[index].vsId : templates[index].itemId;
					if (templateVersionId != firstTemplateVersionId){
						displayClassChooserDialog = true;
						break;
					}
				}	
			}
			
			if (!displayClassChooserDialog){
				// At this point, all of the items are in the same class. Check to see if some have ETs and others don't.
				var foundWithTemplate = false;
				var foundWithoutTemplate = false;
				for (var index in items){
					var item = items[index];
					if (item.entryTemplateId){
						foundWithTemplate = true;
					}
					else {
						foundWithoutTemplate = true
					}
					if (foundWithTemplate && foundWithoutTemplate){
						displayClassChooserDialog = true;
						break;
					}
				}
			}
			return displayClassChooserDialog;
		},
		
		/**
		 * @private
		 */
		_getContentClassesForSelectedItems: function(items) {

			// Get the unique contentClasses
			var contentClasses = new Array();
			var contentClassDict = new Object();

			for ( var i in items) {
				var item = items[i];
				var contentClass = item.getContentClass();
				contentClassDict[contentClass.id + contentClass.repository.id] = contentClass;
			}

			for (contentClassKey in contentClassDict) {
				contentClasses.push(contentClassDict[contentClassKey]);
			}

			return contentClasses;
		},

		actionEditSearch: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionEditSearch");
			if (items && items.length > 0 && parameterMap) {
				var widget = parameterMap["widget"];
				if (widget && widget.onEditItem) {
					widget.onEditItem(items[0]);
				}
			}
			this.logExit("actionEditSearch");
		},

		actionSearchProperties: function(repository, items) {
			this.actionEdit(repository, items);
		},

		actionDeleteItem: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionDeleteItem");
			var _this = this;
			// Delete all versions unless the items are from the Versions list in the Properties dialog or the "allversions" option is specified for a search.
			var deleteAllVersions = !(resultSet && ((resultSet.context == "PropertiesVersions") || (resultSet._versionLookup && resultSet._versionLookup[repository.id] == "allversions")));
			var message;
			var deleteMultiWithET = false;

			var searchTemplates = array.filter(items, function(item) {
				return (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase));
			});

			var entryTemplates = array.filter(items, function(item) {
				return item.isEntryTemplate();
			});

			if (deleteAllVersions) {
				if (searchTemplates.length == items.length) { // All selected items are search templates.  Not using search messages for mixed types.
					var searchTemplateNames = [];
					array.forEach(searchTemplates, function(searchTemplate) {
						var isOpened = teamspace ? teamspace.isSearchOpened(searchTemplate) : repository.isSearchOpened(searchTemplate);
						if (isOpened) {
							searchTemplateNames.push(idxHtml.escapeHTML(searchTemplate.name));
						}
					});
					if (searchTemplateNames.length == 1) { // Only one opened search template
						message = string.substitute(ecm.messages.search_template_opened_delete_confirmation_question, [
							searchTemplateNames.join("")
						]);
					} else if (searchTemplateNames.length > 1) { // One or more opened search template
						message = string.substitute(ecm.messages.delete_multiple_opened_search_template_confirmation_question, [
							searchTemplateNames.join(", ")
						]);
					}
				}

				if (entryTemplates.length == 1 && items.length == 1) {
					//delete 1 entry template:
					message = ecm.messages.delete_confirmation_entrytemplate;
				} else if (entryTemplates.length >= 1 && items.length > 1) {
					//delete multi items including entry templates
					message = ecm.messages.delete_confirmation_entrytempalte_with_multi_items;
					deleteMultiWithET = true;
				}
				// Use the default delete message if not yet set by the above search template section.
				if (!message) {
					if (items.length > this._largeNumberPrompt) {
						message = string.substitute(ecm.messages.delete_large_number_items_confirmation_question, [
							items.length
						]);
					} else if (items.length > 1) {
						message = string.substitute(ecm.messages.delete_multiple_confirmation_question, [
							items.length
						]);
					} else if (items[0].isFolder()) {
						// Use a separate confirmation message for folders since the tree doesn't show the selection on right click.
						message = string.substitute(ecm.messages.delete_single_folder_confirmation_question, [
							BidiSupport ? BidiSupport.enforceTextDirWithUcc(idxHtml.escapeHTML(items[0].name), has("text-direction")) : idxHtml.escapeHTML(items[0].name)
						]);
					} else {
						message = ecm.messages.delete_single_confirmation_question;
					}
				}
			} else {
				if (resultSet && (resultSet.context == "PropertiesVersions")) {
					if (items.length > 1) {
						var openedItemWillBeDeleted = false;
						if (resultSet._openedItem) {
							for ( var i in items) {
								var item = items[i];
								if (resultSet._openedItem.id == item.id) {
									openedItemWillBeDeleted = true;
									break;
								}
							}
						}
						if (openedItemWillBeDeleted) {
							message = string.substitute(ecm.messages.delete_version_opened_item_multiple_confirmation_question, [
								items.length,
								ecm.messages.edit_properties_dialog_title
							]);
						} else {
							// Use this improved message in the next translation cycle.
							// message = string.substitute(ecm.messages.delete_version_multiple_confirmation_question, [ items.length ])
							message = string.substitute(ecm.messages.delete_multiple_confirmation_question, [
								items.length
							]);
						}
					} else {
						if (resultSet._openedItem && (resultSet._openedItem.id == items[0].id)) {
							message = string.substitute(ecm.messages.delete_version_opened_item_single_confirmation_question, [
								ecm.messages.edit_properties_dialog_title
							]);
						} else {
							// Use this improved message in the next translation cycle.
							// message = ecm.messages.delete_version_single_confirmation_question;
							message = ecm.messages.delete_single_confirmation_question;
						}
					}
				} else {
					if (items.length > 1) {
						// Use this improved message in the next translation cycle.
						// message = string.substitute(ecm.messages.delete_version_multiple_confirmation_question, [ items.length ])
						message = string.substitute(ecm.messages.delete_multiple_confirmation_question, [
							items.length
						]);
					} else {
						// Use this improved message in the next translation cycle.
						// message = ecm.messages.delete_version_single_confirmation_question;
						message = ecm.messages.delete_single_confirmation_question;
					}
				}

				if (entryTemplates.length == 1 && items.length == 1) {
					//delete 1 entry template:
					message = ecm.messages.delete_confirmation_entrytemplate;
				} else if (entryTemplates.length >= 1 && items.length > 1) {
					//delete multi items including entry templates
					message = ecm.messages.delete_confirmation_entrytempalte_with_multi_items;
					deleteMultiWithET = true;
				}
			}

			if (this.confirmDelete)
				this.confirmDelete.destroy();

			this.confirmDelete = new ConfirmationDialog({
				text: message,
				buttonLabel: ecm.messages.delete_confirmation_button,
				cancelButtonDefault: true,
				onExecute: function() {
					// Need to delete items from each repository.
					var repositoryIds = new Array();
					var repositoryItems = new Object();

					for ( var i in items) {
						var item = items[i];
						var repository = item.repository;
						var repositoryId = repository.id;
						if (repositoryItems[repositoryId] == null) {
							repositoryIds.push(repositoryId);
							repositoryItems[repositoryId] = [];
						}
						// If multiple entry templates are present, do not include them in the list of items that will be deleted.
						if (!deleteMultiWithET || !item.isEntryTemplate()) {
							repositoryItems[repositoryId].push(item);
						}
					}

					for ( var j in repositoryIds) {
						var repositoryId = repositoryIds[j];
						var repositoryItem = repositoryItems[repositoryId];
						var lastAction = j == (repositoryIds.length - 1);
						if (repositoryItem && repositoryItem.length > 0) {
							var itemRepository = repositoryItem[0].repository;
							itemRepository.deleteItems(repositoryItem, function() {
								if (repositoryItem) {
									var favoritesToRemove = [];
									var searchesToRemove = [];
									var syncItemsToRemove = [];
									array.forEach(repositoryItem, function(item) {
										var favorite = ecm.model.Favorite.createFromItem(item);
										favorite.deleted = true;
										favoritesToRemove.push(favorite);
										if (item.syncEnabled == true) {
											syncItemsToRemove.push(item);
										}
										if (searchTemplates.length > 0 && item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase))
											searchesToRemove.push(item);
									}, this);

									// Remove items from favorites
									ecm.model.desktop.removeFavorites(favoritesToRemove);

									//Remove items from sync item list
									ecm.model.desktop.syncServer.disableSyncForItems(syncItemsToRemove);

									if (searchesToRemove.length > 0) {
										// Remove searches from models
										if (teamspace && teamspace.repository.id == itemRepository.id)
											teamspace.searchTemplatesDeleted(searchesToRemove);
										itemRepository.searchTemplatesDeleted(searchesToRemove);
									}
								}
								if (lastAction && lang.isFunction(callback))
									callback();
							}, deleteAllVersions);
						} else {
							if (lastAction && lang.isFunction(callback))
								callback();
						}
					}
				}
			});
			this.confirmDelete.show();
			this.logExit("actionDeleteItem");
		},

		actionLock: function(repository, items) {
			this.logEntry("actionLock");
			repository.lockItems(items);
			this.logExit("actionLock");
		},

		actionUnlock: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionUnlock");
			
			// If they selected a large number of items, warn them that the action may take a while.
			// but don't ask for confirmation this is an indirect action
			if (items && items.length > this._largeNumberPrompt && action) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
		
					})
				});
				this.confirmDialog.show();
			} else if (items && items.length == 1) {
				var lockedUser = "";
				var hasDraft = "";
				if (!items[0].isInstanceOf(ecm.model.Teamspace)){
					lockedUser = items[0] && items[0].lockedUser ? items[0].lockedUser : "";
					OOSLockId = items[0] && items[0].OOSLockId && items[0].OOSLockId ? items[0].OOSLockId : "";
					hasDraft = items[0] && items[0].hasDraft && items[0].hasDraft ? items[0].hasDraft : "";
				}
				
				if (OOSLockId != "") {
	            	
			    	if (this.confirmDialog)
				    	this.confirmDialog.destroy();
				
			    	this.confirmDialog = new ConfirmationDialog({
			    		text: ecm.messages.office_online_checkin_cancelcheckout_message,
    					buttonLabel: ecm.messages.large_number_actions_continue_button,
	    				title: action.name,
    					onExecute: lang.hitch(this, function() {
    						
    					})
	 				})
		    		this.confirmDialog.show();
				} else {
					this._unlockItems(repository, items);
				}
			} else {
				this._unlockItems(repository, items);
			}

			this.logExit("actionUnlock");
		},

		_unlockItems: function(repository, items) {
			this.logEntry("_unlockItems");

			if (!(items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.WorkItem))) {
				repository.unlockItems(items);
			} else {
				var worklist = items[0].parent;
				var contentItems = [];
				for ( var i in items) {
					contentItems.push(items[i].contentItem);
				}
				repository.unlockItems(contentItems, function() {
					if (worklist && worklist.onRefreshWorklist) {
						worklist.onRefreshWorklist();
					}
				});
			}

			this.logExit("_unlockItems");
		},


		_showEmailDialog: function(attachments,attachmentType,version) {
					if (this._emailDialog)
						this._emailDialog.destroyRecursive();
					
					this._emailDialog = new EmailDialog({
						attachments: attachments,
						attachmentType: attachmentType,
						attachmentVersion: version
					});
					this._emailDialog.show();
		},
		_sendAttachments: function(repository, items, callback, teamspace, resultSet, parameterMap, action, partNum) {
			// If the version was not specified, this is P8, and the retrieve is not specific to a version, download the released version.
			var version = items[0]._getSearchVersion(resultSet, repository);
			version = version ? version : repository._isP8() ? "released" : null;
			var contentItems = this._convertItems(items);
			var sendMail = lang.hitch(this, function() {
				if (!ecm.model.desktop.emailServiceEnabled) {
					if (partNum && partNum == "0")
						Mail.emailItemsAsAttachments(contentItems, version);
					else if (partNum && partNum == "all")
						Mail.emailItemsAsAttachmentsAll(contentItems, version);
				} else {
					var attachmentType= partNum == "all" ? "allParts" : "attachment";
					this._showEmailDialog(contentItems,attachmentType,version);
				}
			});
			
			// If they selected a large number of items, warn them that the action may take a while.
			if (contentItems && contentItems.length > this._largeNumberPrompt) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: sendMail
				});
				this.confirmDialog.show();
			} else {
				sendMail();
			}
		},

		_sendAsPDF: function(repository, items, callback, teamspace, resultSet, parameterMap, action, partNum) {
			// If the version was not specified, this is P8, and the retrieve is not specific to a version, download the released version.
			var version = items[0]._getSearchVersion(resultSet, repository);
			version = version ? version : repository._isP8() ? "released" : null;
			var contentItems = this._convertItems(items);

			// Check total size against the desktop configured size
			var contentSize = this._getContentSizeOfItems(repository, items);
			if (contentSize < (ecm.model.desktop.maxConversionSize * 1048576)) {
				var excess = contentItems && contentItems.length > this._largeNumberPrompt;
				var sendMail = lang.hitch(this, function() {
					if (!ecm.model.desktop.emailServiceEnabled) {
						if (partNum && partNum == "0" || excess)
							Mail.emailItemsFirstPartAsPDF(contentItems, version);
						else if (partNum && partNum == "all")
							Mail.emailItemsAllPartsAsPDF(contentItems, version);
					} else {
							var attachmentType= partNum && partNum == "0" || excess ? "pdf" : "allPartsPdf";
							this._showEmailDialog(contentItems,attachmentType,version);
					}
				});

				// If they selected a large number of items, warn them that the action may take a while.
				if (excess) {
					if (this.confirmDialog)
						this.confirmDialog.destroy();

					this.confirmDialog = new ConfirmationDialog({
						text: ecm.messages.large_number_actions_confirmation_question,
						buttonLabel: ecm.messages.large_number_actions_continue_button,
						title: action.name,
						onExecute: sendMail
					});
					this.confirmDialog.show();
				} else {
					sendMail();
				}
			} else {
				var msg = new Message({
					id: "id???",
					number: "",
					level: 4,
					text: ecm.messages.download_as_pdf_max_content_error,
					explanation: string.substitute(ecm.messages.download_as_pdf_max_content_error_explanation, [
						ecm.model.desktop.maxConversionSize
					]),
					userResponse: ecm.messages.download_as_pdf_max_content_error_response
				});
				ecm.model.desktop.addMessage(msg);
			}
		},

		actionSendAttachments: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionSendAttachments");
			this._sendAttachments(repository, items, callback, teamspace, resultSet, parameterMap, action, "0");
			this.logExit("actionSendAttachments");
		},

		actionSendAttachmentsAll: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionSendAttachmentsAll");
			this._sendAttachments(repository, items, callback, teamspace, resultSet, parameterMap, action, "all");
			this.logExit("actionSendAttachmentsAll");
		},

		actionSendAsPDF: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionSendAsPDF");
			this._sendAsPDF(repository, items, callback, teamspace, resultSet, parameterMap, action, "0");
			this.logExit("actionSendAsPDF");
		},

		actionSendAllAsPDF: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionSendAllAsPDF");
			this._sendAsPDF(repository, items, callback, teamspace, resultSet, parameterMap, action, "all");
			this.logExit("actionSendAllAsPDF");
		},

		actionSendLinksToFolders: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.actionSendLinksToDocs(repository, items, callback, teamspace, resultSet, parameterMap, action);
		},

		actionSendLinksToDocs: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionSendLinksToDocs");
			var contentItems = this._convertItems(items);
			var version = null;
			if (lang.isFunction(contentItems[0]._getSearchVersion)) {
				version = contentItems[0]._getSearchVersion(resultSet);
			}
			if (version == null && (!resultSet || resultSet.context != "PropertiesVersions")) {
				version = contentItems[0].repository && contentItems[0].repository._isP8() ? "released" : "current";
			} else if (version == "specific") {
				version = null;
			}
			var sendMail = lang.hitch(this, function() {
				if (!ecm.model.desktop.emailServiceEnabled) {
					Mail.emailItemsAsLinks(contentItems, version);
				} else {
						this._showEmailDialog(contentItems,"link",version);
				}
			});

			// If they selected a large number of items, warn them that the action may take a while.
			if (contentItems && contentItems.length > this._largeNumberPrompt) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
						sendMail();
					})
				});
				this.confirmDialog.show();
			} else {
				sendMail();
			}

			this.logExit("actionSendLinksToDocs");
		},

		actionSendLinksToSearches: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.actionSendLinksToDocs(repository, items, callback, teamspace, resultSet, parameterMap, action);
		},

		_download: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version, partNum, transform, trackFiles) {
			// If the version was not specified, this is P8, and the retrieve is not specific to a version, download the released version.
			if (version == null) {
				version = items[0]._getSearchVersion(resultSet, repository);
				version = version ? version : repository._isP8() ? "released" : null;
				version = version ? version : repository._isCM() ? "current" : null;
			}

			repository.addRecentItems(items);
			var serviceName = "getDocument";
			var contentItems = this._convertItems(items);
			var repositoryType = contentItems[0].repository.type;
			var repositoryIDs = [];
			var templateNames = [];
			var ObjectStoreNames = [];
			var docIDs = [];
			var fileNames = [];
			var elements = [];
			for ( var i in contentItems) {
				repositoryIDs.push(contentItems[i].repository.id);
				ObjectStoreNames.push(contentItems[i].repository.objectStoreName);
				templateNames.push(contentItems[i].template);
				docIDs.push(contentItems[i].id);
				fileNames.push(contentItems[i].name);
				if (contentItems[i].celement != null){
					elements.push(contentItems[i].celement);
			    }
			}

			// If they selected a large number of items, warn them that the action may take a while.
			var transformStr = "native";
			if (transform && transform.length > 0) {
				transformStr = transform;
			}
			var params = {
				repositoryId: repositoryIDs,
				ObjectStoreName: ObjectStoreNames,
				docid: docIDs,
				template_name: templateNames,
				transform: transformStr,
				parm_part_filename: fileNames,
				disposition: "attachment",
				desktop: ecm.model.desktop.id,
				elements: elements
			};
			if (partNum != null) {
				params["part_number"] = partNum;
			}
			if (version != null) {
				params["version"] = version;
				if (contentItems.length > 0 && repository._isP8()) {
					var vsIds = [];
					for ( var i in contentItems) {
						vsIds.push(contentItems[i].vsId);
					}
					params["vsId"] = vsIds;
				}
			}
			ecm.model.Request.setSecurityToken(params);

			if (contentItems && contentItems.length > this._downloadLargeNumberPrompt && action) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: ecm.messages.warning_dialog_title,
					onExecute: lang.hitch(this, function() {
						if (contentItems.length <= 1 || (trackFiles&& action&&action.id=="CheckOutDownload")) {
							this._performDownload(serviceName, repositoryType, params, trackFiles, items);
						} else {
							var request = ecm.model.Request.invokeServiceAPI("packageForDownload", contentItems[0].repository.type, {
								requestParams: params,
								cancellable: true,
								notifyOnCancel: true,
								backgroundRequest: false,
								synchronous: false,
								requestCompleteCallback: lang.hitch(this, function(response) {
									if (response.packagedContentCacheId) {
										this._getPreparedContent(response.packagedContentCacheId);
									}
								})
							});
						}
					})
				});
				this.confirmDialog.show();
			} else {
				if (contentItems.length <= 1 || (trackFiles&& action&&action.id=="CheckOutDownload") || elements.length > 1 ) {
					this._performDownload(serviceName, repositoryType, params, trackFiles, items);
				} else {
					var request = ecm.model.Request.invokeServiceAPI("packageForDownload", contentItems[0].repository.type, {
						requestParams: params,
						cancellable: true,
						notifyOnCancel: true,
						backgroundRequest: false,
						synchronous: false,
						requestCompleteCallback: lang.hitch(this, function(response) {
							if (response.packagedContentCacheId) {
								this._getPreparedContent(response.packagedContentCacheId);
							}
						})
					});
				}
			}

		},

		actionTrackDownload: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version) {
			this.logEntry("actionDownload");
			this._trackdownload(repository, items, callback, teamspace, resultSet, parameterMap, action, version, "0");
			this.logExit("actionDownload");
		},

		actionDownload: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version, trackFiles) {
			this.logEntry("actionDownload");
			this._download(repository, items, callback, teamspace, resultSet, parameterMap, action, version, undefined, undefined, trackFiles);
			this.logExit("actionDownload");
		},

		actionDownloadAll: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version) {
			this.logEntry("actionDownloadAll");
			this._download(repository, items, callback, teamspace, resultSet, parameterMap, action, version, "all");
			this.logExit("actionDownloadAll");
		},

		actionDownloadAsOriginal: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version) {
			this.logEntry("actionDownloadAsOriginal");
			this.actionDownload(repository, items, callback, teamspace, resultSet, parameterMap, action, version);
			this.logExit("actionDownloadAsOriginal");
		},

		_getContentSizeOfItems: function(repository, items) {
			var contentSize = 0;

			if (items) {
				for ( var i in items) {
					var item = items[i];
					if (item.contentSize > 0) {
						contentSize += item.contentSize;
					}
				}
			}

			return contentSize;
		},

		_downloadAsPdf: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version, partNum) {
			// If the version was not specified, this is P8, and the retrieve is not specific to a version, download the released version.
			if (version == null) {
				version = items[0]._getSearchVersion(resultSet, repository);
				version = version ? version : repository._isP8() ? "released" : null;
				version = version ? version : repository._isCM() ? "current" : null;
			}
			repository.addRecentItems(items);
			var contentItems = this._convertItems(items);

			// Check total size against the desktop configured size
			var contentSize = this._getContentSizeOfItems(repository, items);
			if (contentSize < (ecm.model.desktop.maxConversionSize * 1048576)) {
				var getDocURLs = [];
				var serverTypes = [];
				var contentTypes = [];
				var elements = [];
				for ( var i in contentItems) {
					serverTypes.push(contentItems[i].repository.type);
					contentTypes.push(contentItems[i].mimetype);

					var docUrlParams = {
						docid: contentItems[i].id,
						repositoryId: contentItems[i].repository.id,
						template_name: contentItems[i].template,
						parm_part_filename: contentItems[i].name
					};

					if (version != null) {
						docUrlParams["version"] = version;
						if (contentItems[i].repository._isP8()) {
							docUrlParams["vsId"] = contentItems[i].vsId;
						}
					}

					if (contentItems[i].repository.type != "od" || contentItems[i].mimetype == "application/afp") {
						// OnDemand only supports transform=pdf for application/afp type, and download as PDF is only
						// available on application/afp documents when AFP2PDF has been configured, otherwise it is grayed out.
						// So do not specify transfor=pdf if in OnDemand, and type is not application/afp, otherwise content
						// retrieval will fail.
						docUrlParams.transform = "pdf";
					}

					ecm.model.Request.setSecurityToken(docUrlParams);
					var docUrl = ecm.model.Request.getServiceRequestUrl("getDocument", contentItems[i].repository.type, docUrlParams);
					if (contentItems[i].celement != null){
						docUrl = docUrl + "&element=" + contentItems[i].celement; // "&part_number=" + partNumber;
				    }
					getDocURLs.push(docUrl);
					if (contentItems[i].celement != null){
						elements.push(contentItems[i].celement);
				    }
				}

				// If they selected a large number of items, warn them that the action may take a while.

				var params = {
					docUrl: getDocURLs,
					repositoryId: contentItems[i].repository.id,
					contentType: contentTypes,
					serverType: serverTypes,
					targetContentType: "application/pdf",
					disposition: "attachment",
					desktop: ecm.model.desktop.id,
					alt_output: "json",
					elements: elements
				};
				if (partNum != null) {
					params["part_number"] = partNum;
				}
				if (version != null) {
					params["version"] = version;
					if (contentItems.length > 0 && repository._isP8()) {
						var vsIds = [];
						for ( var i in contentItems) {
							vsIds.push(contentItems[i].vsId);
						}
						params["vsId"] = vsIds;
					}
				}
				ecm.model.Request.setSecurityToken(params);
				if (contentItems && contentItems.length > this._downloadLargeNumberPrompt) {
					if (this.confirmDialog)
						this.confirmDialog.destroy();

					this.confirmDialog = new ConfirmationDialog({
						text: ecm.messages.large_number_actions_confirmation_question,
						buttonLabel: ecm.messages.large_number_actions_continue_button,
						title: ecm.messages.warning_dialog_title,
						onExecute: lang.hitch(this, function() {
							var request = ecm.model.Request.invokeServiceAPI("convertDocument", null, {
								requestParams: params,
								cancellable: true,
								notifyOnCancel: true,
								backgroundRequest: false,
								synchronous: false,
								requestCompleteCallback: lang.hitch(this, function(response) {
									if (response.packagedContentCacheId) {
										this._getPreparedContent(response.packagedContentCacheId);
									}
								})
							});
						})
					});
					this.confirmDialog.show();
				} else {
					var request = ecm.model.Request.invokeServiceAPI("convertDocument", null, {
						requestParams: params,
						cancellable: true,
						notifyOnCancel: true,
						backgroundRequest: false,
						synchronous: false,
						requestCompleteCallback: lang.hitch(this, function(response) {
							if (response.packagedContentCacheId) {
								this._getPreparedContent(response.packagedContentCacheId);
							}
						})
					});
				}
			} else {
				var msg = new Message({
					id: "id???",
					number: "",
					level: 4,
					text: ecm.messages.download_as_pdf_max_content_error,
					explanation: string.substitute(ecm.messages.download_as_pdf_max_content_error_explanation, [
						ecm.model.desktop.maxConversionSize
					]),
					userResponse: ecm.messages.download_as_pdf_max_content_error_response
				});
				ecm.model.desktop.addMessage(msg);
			}
		},

		actionDownloadAsPdf: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version) {
			this.logEntry("actionDownloadAsPdf");
			this._downloadAsPdf(repository, items, callback, teamspace, resultSet, parameterMap, action, version, undefined);
			this.logExit("actionDownloadAsPdf");
		},

		actionDownloadAllAsPdf: function(repository, items, callback, teamspace, resultSet, parameterMap, action, version) {
			this.logEntry("actionDownloadAllAsPdf");
			this._downloadAsPdf(repository, items, callback, teamspace, resultSet, parameterMap, action, version, "all");
			this.logExit("actionDownloadAllAsPdf");
		},

		_checkMimeTypeOfPartsForDocument: function(items) {
			var notPassedItems = [];
			for (var i = 0; i < items.length; i++) {
				if (items[i].attributes && items[i].attributes.ContentElementsPresent && items[i].attributes.ContentElementsPresent.length > 0) {
					var mimetype = items[i].attributes.ContentElementsPresent[0];
					for (var j = 1; j < items[i].attributes.ContentElementsPresent.length; j++) {
						if (items[i].attributes.ContentElementsPresent[j] != mimetype) {
							notPassedItems.push(items[i]);
							break;
						}
					}
				}
			}
			if (notPassedItems.length > 0) {
				//cannot convert all documents to PDF format
				//show error message
				var msg = new Message({
					id: "id???",
					number: "",
					level: 4,
					text: ecm.messages.download_as_pdf_mimetype_check_error,
					explanation: ecm.messages.download_as_pdf_mimetype_check_error_explanation,
					userResponse: ecm.messages.download_as_pdf_mimetype_check_error_response
				});
				ecm.model.desktop.addMessage(msg);
				this.logDebug("Some documents cannot be converted to PDF format.");
			}
			return notPassedItems;
		},

		/**
		 * @private Use Request.clearLastIFrameDownloadRequest() instead.
		 */
		_clearDownloadDeferred: function() {
			ecm.model.Request.clearLastIFrameDownloadRequest();
		},

		_performTrackDownload: function(serviceName, repositoryType, params, items) {
			var contentUrl = ecm.model.Request.getServiceRequestUrl(serviceName, repositoryType);

			if (!this.checkoutDialog) {
				this.checkoutDialog = new CheckoutDialog();
			}

			var paramArray = [];
			var count = 1;

			if (params.docid && params.docid.length > 1) {
				count = params.docid.length;
				for (var i = 0; i < count; i++) {
					var singleParam = lang.mixin({}, params);
					singleParam.docid = [];
					singleParam.docid.push(params.docid[i]);
					singleParam.ObjectStoreName = [];
					singleParam.ObjectStoreName.push(params.ObjectStoreName[i]);
					singleParam.template_name = [];
					singleParam.template_name.push(params.template_name[i]);
					singleParam.vsId = [];
					singleParam.vsId.push(params.vsId[i]);
					singleParam.repositoryId = [];
					singleParam.repositoryId.push(params.repositoryId[i]);
					singleParam.parm_part_filename = [];
					singleParam.parm_part_filename.push(params.parm_part_filename[i]);
					paramArray.push(singleParam);
				}

			} else {
				paramArray.push(params);
			}
			// defect 39838 - file tracker applet builds wrong url if contentUrl begins with "./"
			var contentUrl1 = contentUrl;
			if (contentUrl1.charAt(0) == ".") {
				contentUrl1 = contentUrl1.substr(1, contentUrl1.length);
				contentUrl1 = ecm.model.desktop._cServicesUrl + contentUrl1;
			}

			count = paramArray.length;
			var documentInfoArray = [];
			for (var i = 0; i < count; i++) {
				var downloadForm = this._createDownloadForm();
				this._fillDownloadForm(downloadForm, paramArray[i]);
				var documentInfo = {
					contentUrl: contentUrl1 + "?" + domForm.toQuery(downloadForm),
					params: paramArray[i]
				};
				documentInfoArray.push(documentInfo);
				delete downloadForm;
			}
			var repository = null;
			if (items && items.length > 0) {
				repository = items[0].repository;
			}
			this.checkoutDialog.show(repository, documentInfoArray, null, items);

		},

		_getPreparedContent: function(cacheId) {
			var params = {
				packagedContentCacheId: cacheId,
				disposition: "attachment"
			};
			ecm.model.Request.setSecurityToken(params);
			this._performDownload("getPreparedContent", "", params);
		},

		_performDownload: function(serviceName, repositoryType, params, trackFiles, items) {

			if (trackFiles) {
				if (!FileTracker.canUseFileTracker()) {
					return this._performDownload(serviceName, repositoryType, params, false, items);
				} else {
					return this._performTrackDownload(serviceName, repositoryType, params, items);
				}
			}

			// If this is a popup window under Google Chrome Frame...
			if (window.opener && has("chrome") && ecm.model.desktop.isChromeFrame) {
				// There are problems with submitting the download form using iframe.send from 
				// a popup window under IE + Google Chrome Frame.
				// Have the top-level desktop window handle the download.
				window.opener.postMessage({
					json: dojojson.toJson({
						"action": "performDownload",
						"serviceName": serviceName,
						"repositoryType": repositoryType,
						"params": params
					})
				}, window.location.href.split("/").splice(0, 3).join("/"));
				return;
			}

			return ecm.model.Request.downloadFormServiceAPI(serviceName, repositoryType, {
				requestParams: params,
			}, this._createDownloadForm());
		},

		_createDownloadForm: function() {
			// Create form for passing download parameter values to get around the 2K URL length limitation for IE
			var downloadForm = dom.byId("documentDownloadForm");
			if (downloadForm) {
				document.body.removeChild(downloadForm);
			}
			downloadForm = document.createElement("form");
			downloadForm.setAttribute("id", "documentDownloadForm");
			downloadForm.setAttribute("name", "documentDownloadForm");
			downloadForm.setAttribute("method", "post");
			downloadForm.setAttribute("accept-charset", "UTF-8");
			document.body.appendChild(downloadForm);
			return downloadForm;
		},

		_fillDownloadForm: function(downloadForm, parms) {
			var value;
			for ( var name in parms) {
				value = parms[name];
				if (lang.isArray(value)) {
					for ( var i in value) {
						var parmNode = document.createElement("input");
						parmNode.setAttribute("type", "hidden");
						parmNode.setAttribute("name", name);
						parmNode.setAttribute("value", value[i]);
						downloadForm.appendChild(parmNode);
					}
				} else {
					var parmNode = document.createElement("input");
					parmNode.setAttribute("type", "hidden");
					parmNode.setAttribute("name", name);
					parmNode.setAttribute("value", value);
					downloadForm.appendChild(parmNode);
				}
			}
			return downloadForm;
		},

		actionEditDoc: function(repository, items) {
			this.logEntry("actionEditDoc");
			items[0].edit();
			this.logExit("actionEditDoc");
		},

		actionCheckOutDownload: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.actionCheckOut(repository, items, callback, teamspace, resultSet, parameterMap, action);
		},

		actionCheckOutNoDownload: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionCheckOutNoDownload");
			var contentItems = this._convertItems(items);
			var worklist = null;
			if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.WorkItem)) {
				worklist = items[0].parent;
			}

			var returnVersion = this._getReturnVersion(resultSet, repository);

			if (items && items.length > this._largeNumberPrompt) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
						repository.lockItems(contentItems, function() {
							if (worklist && worklist.onRefreshWorklist) {
								worklist.onRefreshWorklist();
							}
						}, returnVersion);
					})
				});

				this.confirmDialog.show();
			} else {
				repository.lockItems(contentItems, function() {
					if (worklist && worklist.onRefreshWorklist) {
						worklist.onRefreshWorklist();
					}
				}, returnVersion);
			}
			this.logExit("actionCheckOutNoDownload");
		},

		actionCheckOutLabelWithDownload: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.actionCheckOut(repository, items, callback, teamspace, resultSet, parameterMap, action);
		},

		actionCheckOut: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionCheckOut");

			var contentItems = new Array();
			var worklist = null;

			// Get list of content items
			for ( var i in items) {
				var contentItem = items[i];
				if (contentItem.isInstanceOf && contentItem.isInstanceOf(ecm.model.WorkItem)) {
					worklist = contentItem.parent;
					contentItem = this._convertItem(contentItem);
				}
				contentItems.push(contentItem);
			}

			if (contentItems && contentItems.length > this._downloadLargeNumberPrompt) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
						this._performCheckoutAndDownload(repository, contentItems, worklist, callback, teamspace, resultSet, parameterMap, action);
					})
				});
				this.confirmDialog.show();
			} else {
				this._performCheckoutAndDownload(repository, contentItems, worklist, callback, teamspace, resultSet, parameterMap, action);
			}

			this.logExit("actionCheckOut");
		},

		_performCheckoutAndDownload: function(repository, contentItems, worklist, callback, teamspace, resultSet, parameterMap, action) {

			var returnVersion = this._getReturnVersion(resultSet, repository);

			// Checkout.
			var downloadItems = new Array();
			repository.lockItems(contentItems, lang.hitch(this, function(returnedItems) {
				// Build an array of items that were successfully checked out and download them.
				for ( var j in returnedItems) {
					for ( var k in contentItems) {
						if (contentItems[k].id == returnedItems[j].id) {
							if (contentItems[k].hasContent()) {
								downloadItems.push(contentItems[k]);
							}
							break;
						}
					}
				}

				// Add a half second delay to allow the main window to refresh, so the download window
				// will be on top.
				var _this = this;
				setTimeout(function() {
					// Download the checked out items.
					if (downloadItems.length > 0) {
						// For checkout, the "current" version must be retrieved.
						if (ecm.model.desktop.fileTrackingPrefs.enableFileTracking) {
							_this.actionDownload(repository, downloadItems, callback, teamspace, resultSet, parameterMap, action, "current", true);
						} else {
							_this.actionDownload(repository, downloadItems, callback, teamspace, resultSet, parameterMap, action, "current", false);
						}

					}

					if (worklist && worklist.onRefreshWorklist) {
						worklist.onRefreshWorklist();
					}
				}, 500);

			}), returnVersion);
		},

		_getReturnVersion: function(resultSet, repository) {
			var returnVersion;
			if (resultSet && repository && repository._isP8()) {
				if (resultSet.parentFolder && resultSet.parentFolder instanceof ecm.model.SearchTemplate == false) {
					returnVersion = "released";
				} else if (resultSet.parentFolder && resultSet.parentFolder instanceof ecm.model.SearchTemplate && resultSet._versionLookup && resultSet._versionLookup[repository.id]) {
					var version = resultSet._versionLookup[repository.id];
					if (version == "currentversion" || version == "allversions") {
						returnVersion = "current";
					} else if (version == "releasedversion") {
						returnVersion = "released";
					}
				}
			}
			return returnVersion;
		},

		actionAddDocFromRepo: function(repository, items, callback, teamspace, resultSet) {
			var parentFolder = null;
			if (items && items.length > 0) {
				// The items[0] passed in is the selected tree folder in browse mode;
				// in search mode, items[0] is the selected folder in content list.
				if (!items[0].isFolder()) {
					parentFolder = items[0].parent;
				} else if (items[0]) {
					parentFolder = items[0];
				} else if (parentFolder == null && resultSet != null) {
					parentFolder = resultSet.parentFolder;
				}
			}
			if (this.addContentItemFromRepoDialog) {
				this.addContentItemFromRepoDialog.destroyRecursive();
				this.addContentItemFromRepoDialog = null;
			}

			this.addContentItemFromRepoDialog = new SelectObjectDialog({
				showMultiRepositorySelector: true, // displays SearchInDropDown (versus _FolderSelectorDropDown)
				selectionMode: "document"
			});
			var searchInDropdown = this.addContentItemFromRepoDialog.selectObject.searchCriteria.searchInDropDown;
			searchInDropdown.displaySelectTeamspacesNode = false; // show/hide Teamspaces in the left pane
			searchInDropdown.displayRepositoryDropDownList = false; // show/hide Repository pulldown on the top of right pane
			this.addContentItemFromRepoDialog.selectObject.setRepository(repository); // delay setting the repository so can set searchindropdown parameters above before it renders
			this.addContentItemFromRepoDialog.show(lang.hitch(this, function(items) {
				if (parentFolder && items.length > 0) {
					parentFolder.addToFolder(items, function() {
					});
				}
			}));
		},

		actionImport: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
			this.logEntry("actionImport");

			var parentFolder = null;
			if (typeof (virtualItems) != "boolean") {
				virtualItems = false;
			}

			if (repository.type == "od") {
				var parentFolder = null;
				if (items && items.length > 0) {
					if ((items[0].isInstanceOf(ecm.model.Favorite)) || (items[0].isInstanceOf(ecm.model.SearchTemplate))) {
						defaultContentClass = items[0];
						parentFolder = items[0];
					} else {
						defaultContentClass = items[0].parent;
						parentFolder = items[0].parent;
					}
				}

				if (repository.supportsAddDocument) {
					repository.retrieveODAddDocPermission(parentFolder.id, lang.hitch(this, function(hasPermission) {
						if (hasPermission) {
							var targetRepository = (parentFolder && parentFolder.repository) || repository;
							this.addContentItemDialog = new AddContentItemDialog({
								destroyWhenFinished: true
							});
							var repositoryDocumentMode = false;
							if (virtualItemObjects) {
								this.addContentItemDialog.setFiles(virtualItemObjects);
								repositoryDocumentMode = true;
							}
							this.addContentItemDialog.setDefaultContentClass(defaultContentClass);
							this.addContentItemDialog._propertiesMap = propertiesMap;
							this.addContentItemDialog.show(targetRepository, parentFolder, true, virtualItems, callback, teamspace, false, null, false, null, repositoryDocumentMode, virtualItemObjects);
						} else {
							var message = Message.createErrorMessage("dnd_no_privilege_error", [
								parentFolder.name
							]);
							if (message) {
								ecm.model.desktop.addMessage(message);
							}
						}
					}));
				} else {
					var message = Message.createErrorMessage("add_document_odserver_odwek_version_od_error");
					if (message) {
						ecm.model.desktop.addMessage(message);
					}
				}
			} else {
				if (items && items.length > 0) {
					if (!items[0].isFolder()) {
						var parent = items[0].parent;
						// If the parent item is a favorite...
						if (parent && parent.isInstanceOf && parent.isInstanceOf(ecm.model.Favorite)) {
							// If this is a folder favorite, use the folder item.
							if (parent.item && parent.item.isFolder && parent.item.isFolder()) {
								parent = parent.item;
							} else {
								parent = null;
							}
						}
						parentFolder = parent;
					} else {
						parentFolder = items[0];
						if (parentFolder.isInstanceOf && parentFolder.isInstanceOf(ecm.model.WorkItem)) {
							parentFolder = this._convertItem(parentFolder);
							parentFolder.parent = null; // workaround worklist being parent
						}
					}
				}

				// Use search result content class as default if no parentFolder
				var defaultContentClass = null;
				if (!parentFolder && resultSet) {
					var contentClass = this._getSearchTemplateSingleContentClass(resultSet.searchTemplate, repository);
					if (contentClass)
						defaultContentClass = contentClass;
				}
				// The parent folder repository may be different than the one passed above in P8.
				// Users can add documents/folders to folder work item attachments in other object stores.
				var targetRepository = (parentFolder && parentFolder.repository) || repository;
				this.addContentItemDialog = new AddContentItemDialog({
					destroyWhenFinished: true
				});
				var repositoryDocumentMode = false;
				if (virtualItemObjects) {
					this.addContentItemDialog.setFiles(virtualItemObjects);
					repositoryDocumentMode = true;
				}
				this.addContentItemDialog.setDefaultContentClass(defaultContentClass);
				this.addContentItemDialog._propertiesMap = propertiesMap;

				// if adding to a folder, check if the folder is in a teamspace so that we can show the
				// teamspace classes/ETs in the add dialog

				var checkForTeamspace = parentFolder && parentFolder.repository.teamspacesEnabled && !teamspace;
				if (checkForTeamspace) {
					parentFolder.retrieveTeamspace(lang.hitch(this, function(teamspace) {
						this.addContentItemDialog.show(targetRepository, parentFolder, true, virtualItems, callback, teamspace, false, null, false, null, repositoryDocumentMode, virtualItemObjects);
					}));
				} else {
					this.addContentItemDialog.show(targetRepository, parentFolder, true, virtualItems, callback, teamspace, false, null, false, null, repositoryDocumentMode, virtualItemObjects);
				}
			}
			this.logExit("actionImport");
		},

		_getSearchTemplateSingleContentClass: function(searchTemplate, repository, forFolder) {
			var defaultContentClass = null;
			if (searchTemplate && searchTemplate.isInstanceOf && searchTemplate.isInstanceOf(SearchTemplate)) {
				var contentClasses = searchTemplate.classes;
				if (!contentClasses || (contentClasses.length == 1 && contentClasses[0].objectType != "all" && (!repository._isP8Like() || contentClasses[0].objectType == (forFolder ? "folder" : "document")))) {
					var contentClass = searchTemplate.getSearchContentClass();
					if (contentClass.allowsInstances && !contentClass.pseudoClass && contentClass.id != "IcnSearch" && contentClass.id != "StoredSearch" && contentClass.id != "ICMSearch")
						defaultContentClass = contentClass;
				}
			}

			return defaultContentClass;
		},

		actionImportUsingTemplate: function(repository, items, callback, teamspace, useSelectedTemplate) {
			var _useSelectedTemplate = (useSelectedTemplate != undefined) ? useSelectedTemplate : false;
			this.logEntry("actionImportUsingTemplate");
			var parentFolder = null;
			var item = null;
			this.addContentItemDialog = new AddContentItemDialog({
				destroyWhenFinished: true
			});
			if (teamspace) {
				this.addContentItemDialog.show(repository, items[0], true, false, callback, teamspace, false, null);
			} else {
				if (useSelectedTemplate && items && items.length > 0) {
					if (!items[0].isFolder()) {
						item = items[0];
						parentFolder = item.parent;
					} else {
						parentFolder = items[0];
					}
				}

				// The parent folder repository may be different than the one passed above in P8.
				// Users can add documents/folders to folder work item attachments in other object stores.
				var targetRepository = (parentFolder && parentFolder.repository) || repository;

				this.addContentItemDialog.showUsingTemplateItem(targetRepository, parentFolder, true, false, callback, teamspace, item);
			}
			this.logExit("actionImportUsingTemplate");
		},

		actionCreateFolder: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionCreateFolder");
			var parentFolder = null;
			if (items && items.length > 0) {
				// The items[0] passed in is the selected tree folder in browse mode;
				// in search mode, items[0] is the selected folder in content list.
				if (!items[0].isFolder()) {
					parentFolder = items[0].parent;
				} else {
					parentFolder = items[0];
					if (parentFolder.isInstanceOf && parentFolder.isInstanceOf(ecm.model.WorkItem)) {
						parentFolder = this._convertItem(parentFolder);
						parentFolder.parent = null; // workaround worklist being parent
					}
				}
			}

			// Use search result content class as default if no parentFolder
			var defaultContentClass = null;
			if (!parentFolder && resultSet) {
				var contentClass = this._getSearchTemplateSingleContentClass(resultSet.searchTemplate, repository, true);
				if (contentClass)
					defaultContentClass = contentClass;
			}

			// The parent folder repository may be different than the one passed above in P8.
			// Users can add documents/folders to folder work item attachments in other object stores.
			var targetRepository = (parentFolder && parentFolder.repository) || repository;
			this.addContentItemDialog = new AddContentItemDialog({
				skipPreloadingFileTracker: true,
				destroyWhenFinished: true
			});
			this.addContentItemDialog.setDefaultContentClass(defaultContentClass);
			this.addContentItemDialog.show(targetRepository, parentFolder, false, false, callback, teamspace, false, null);
			this.logExit("actionCreateFolder");
		},

		actionCreateFolderUsingTemplate: function(repository, items, callback, teamspace, useSelectedTemplate) {
			var _useSelectedTemplate = (useSelectedTemplate != undefined) ? useSelectedTemplate : false;
			this.logEntry("actionCreateFolderUsingTemplate");
			var parentFolder = null;
			var item = null;
			if (useSelectedTemplate && items && items.length > 0) {
				if (!items[0].isFolder()) {
					item = items[0];
					parentFolder = item.parent;
				} else {
					parentFolder = items[0];
				}
			}

			// The parent folder repository may be different than the one passed above in P8.
			// Users can add documents/folders to folder work item attachments in other object stores.
			var targetRepository = (parentFolder && parentFolder.repository) || repository;

			this.addContentItemDialog = new AddContentItemDialog({
				skipPreloadingFileTracker: true,
				destroyWhenFinished: true
			});
			this.addContentItemDialog.showUsingTemplateItem(targetRepository, parentFolder, false, false, callback, teamspace, item);
			this.logExit("actionCreateFolderUsingTemplate");
		},

		_Checkin: function(repository, items, callback, teamspace, propertiesMap, virtualItemObjects) {
			if (this.checkInDialog) {
				this.checkInDialog.destroyRecursive();
			}
			this.checkInDialog = new CheckInDialog();
			var repositoryDocumentMode = false;
			if (virtualItemObjects && virtualItemObjects instanceof Array) {
				this.checkInDialog.setFiles(virtualItemObjects);
				repositoryDocumentMode = true;
			}
			this.checkInDialog._propertiesMap = propertiesMap;

			if (!(items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.WorkItem))) {
				this.checkInDialog.showCheckin(repository, items[0], callback, teamspace, repositoryDocumentMode);
			} else {
				var worklist = items[0].parent;
				var contentItem = this._convertItem(items[0]);
				//this.checkInDialog.show(repository, contentItem, function() {
				this.checkInDialog.showCheckin(repository, contentItem, function() {
					if (worklist && worklist.onRefreshWorklist) {
						worklist.onRefreshWorklist();
					}
					if (callback) {
						callback();
					}
				}, teamspace, repositoryDocumentMode);
			}
		},
		
		actionCheckIn: function(repository, items, callback, teamspace, propertiesMap, virtualItemObjects) {
			this.repository = repository;
			this.logEntry("actionCheckIn");
			if (items && items.length == 1) {
				var lockedUser = "";
				var OOSLockId = "";
				var hasDraft = false;
				var isEditServiceDraft = false;
				if (!items[0].isInstanceOf(ecm.model.Teamspace)){
					lockedUser = items[0] && items[0].lockedUser ? items[0].lockedUser : "";
					OOSLockId = items[0] && items[0].OOSLockId && items[0].OOSLockId ? items[0].OOSLockId : "";
					hasDraft = items[0] && items[0].hasDraft && items[0].hasDraft ? items[0].hasDraft : "";
					isEditServiceDraft = items[0] && items[0].isEditServiceDraft && items[0].isEditServiceDraft ? items[0].isEditServiceDraft : false;
				}
				
				if (OOSLockId != "") {
	            	
			    	if (this.confirmDialog)
				    	this.confirmDialog.destroy();
				
			    	this.confirmDialog = new ConfirmationDialog({
			    		text: ecm.messages.office_online_checkin_cancelcheckout_message,
						buttonLabel: ecm.messages.large_number_actions_continue_button,
						onExecute: lang.hitch(this, function() {
							
						})
	 				})
		    		this.confirmDialog.show();
				} else {
//					if (hasDraft && !isEditServiceDraft) { //the documment has draft item and it is editing by OOS not by Edit Service
//						var params = {
//							"repositoryId": this.repository.id,
//							"docid": items[0].id,
//						};
//						var request = ecm.model.Request.postService("officeOnlineDraftCheckin", this.repository.type, params, "text/json", "{}", 
//								lang.hitch(this, function(response) { // success
//								if (response) {
                    	
//								}
//							}));	
//					}
//					else { 
						this._Checkin(repository, items, callback, teamspace, propertiesMap, virtualItemObjects);
//					}
				}		
		    }
			else {
				this._Checkin(repository, items, callback, teamspace, propertiesMap, virtualItemObjects);
			}

			this.logExit("actionCheckIn");
		},

		actionApplyHold: function(repository, items) {
			this.logEntry("actionApplyHold");

			if (!this.applyRemoveHoldDialog)
				this.applyRemoveHoldDialog = new ApplyRemoveHoldDialog();
			this.applyRemoveHoldDialog.show(items, true);

			this.logExit("actionApplyHold");
		},

		actionRemoveHold: function(repository, items) {
			this.logEntry("actionRemoveHold");

			if (!this.applyRemoveHoldDialog)
				this.applyRemoveHoldDialog = new ApplyRemoveHoldDialog();
			this.applyRemoveHoldDialog.show(items, false);

			this.logExit("actionRemoveHold");
		},

		actionCreateHold: function(repository, items) {
			this.logEntry("actionCreateHold");

			if (!this.createHoldDialog)
				this.createHoldDialog = new CreateHoldDialog();
			this.createHoldDialog.show(repository);
			this.createHoldDialog.clear();

			this.logExit("actionCreateHold");
		},

		actionExport: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionExport");
			if (resultSet && items instanceof Array) {
				// Sort the items by their position in the result set
				items = [].concat(items).sort(function(a, b) {
					return resultSet.getIndexOfItem(a) - resultSet.getIndexOfItem(b);
				});
			}
			ecm.widget.dialog.ExportDialog.open(repository, items, resultSet);
			this.logExit("actionExport");
		},
		
		/**
		 * Opens a browser popup window and renders the selected workflow step processor in that window.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects, only opens the first item.
		 * @param callback
		 *            A callback function.
		 */
		actionViewStep: function(repository, items, callback) {
			this.logEntry("actionViewStep");
			var workItem = items[0];
			ecm.widget.dialog.stepProcessorWindow.open(workItem, callback);
			this.logExit("actionViewStep");
		},

		/**
		 * Opens a browser popup window and renders the selected workflow launch processor in that window.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.ContentItem} objects, only opens the first item.
		 * @param callback
		 *            A callback function.
		 */
		actionLaunch: function(repository, items, callback) {
			this.logEntry("actionLaunchStep");
			var contentItem = items[0];
			ecm.widget.dialog.stepProcessorWindow.launch(contentItem, callback);
			this.logExit("actionLaunchStep");
		},

		/**
		 * Opens a browser popup window and renders the selected eform object in that window.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.ContentItem} objects, only opens the first item.
		 * @param callback
		 *            A callback function.
		 * @param servicesUrl
		 *            A String holding a services URL to use when opening the eform object.
		 */
		actionOpenEForm: function(repository, items, callback, servicesUrl) {
			this.logEntry("actionOpenEForm");
			var contentItem = items[0];
			if (servicesUrl != null) {
				ecm.widget.dialog.eformWindow.servicesUrl = servicesUrl;
			}
			ecm.widget.dialog.eformWindow.open(contentItem, callback);
			this.logExit("actionOpenEForm");
		},

		actionConnectRepository: function(repository, items) {
			this.logEntry("actionConnectRepository");

			if (repository != null && !repository.connected) {
				ecm.widget.dialog.LoginDialog.checkLogin(repository);
			}

			this.logExit("actionConnectRepository");
		},

		actionCreateTeamSpace: function(repository, items, container, teamspace, resultSet) {
			this.logEntry("actionCreateTeamspace");
			if (repository.teamspacesEnabled) {
				if (!container)
					container = resultSet["container"];
				if (container) {
					container.selectContentPane("teamspaceBuilder", {
						repository: repository,
						type: ecm.model.Teamspace.INSTANCE,
						mode: "create",
						container: container,
						teamspace: null
					});

					if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.TeamspaceFlyoutPane))
						container.closePopup();
				}
			}
			this.logExit("actionCreateTeamspace");
		},

		actionCreateTemplate: function(repository, items, container, teamspace, resultSet) {
			this.logEntry("actionCreateTemplate");
			if (repository.teamspacesEnabled) {
				if (!container)
					container = resultSet["container"];

				if (container) {
					container.selectContentPane("teamspaceBuilder", {
						repository: repository,
						type: ecm.model.Teamspace.TEMPLATE,
						mode: "create",
						container: container,
						teamspace: null
					});

					if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.TeamspaceFlyoutPane))
						container.closePopup();
				}
			}
			this.logExit("actionCreateTemplate");
		},

		actionManageTeamspaces: function(repository, items, container) {
			this.logEntry("actionManageTeamspaces");
			if (repository.teamspacesEnabled) {
				if (container) {
					container.selectContentPane("manageTeamspaces", {
						repository: repository
					});

					if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.TeamspaceFlyoutPane))
						container.closePopup();
				}
			}
			this.logExit("actionManageTeamspaces");
		},

		actionEditWorkspace: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var selectedTemplate = items[0];
			var widget = parameterMap["widget"];
			if (widget) {
				ecm.model.desktop.setSelectedItems([
					selectedTemplate
				]);
				if (selectedTemplate.state == "validate") {
					selectedTemplate.repository.validateTeamspace(items[0].id, "template", lang.hitch(this, function(template) {
						if (template && template.state != "deleted") {
							if (widget.onOpenItem) {
								widget.onOpenItem(selectedTemplate, template);
							}
						}
					}));
				} else {
					selectedTemplate.repository.retrieveTeamspaceById(selectedTemplate.id, "template", lang.hitch(this, function(template) {
						if (template && template.state != "deleted") {
							if (widget.onOpenItem) {
								widget.onOpenItem(selectedTemplate, template);
							}
						}
					}));
				}
			}
		},

		actionCreateDocumentEntryTemplate: function(repository, items, container, entryTemplate, resultSet) {
			this.logEntry("actionDocumentCreateEntryTemplate");
			if (repository.entryTemplatesEnabled) {
				if (!container)
					container = resultSet["container"];
				if (container) {
					var addTabContainer = container.addTab ? container : ecm.model.desktop.getLayout().launchBarContainer.getContentPaneByID("manageEntryTemplates");
					addTabContainer.addEntryTemplateBuilder(EntryTemplate.createFromJSON({
						repository: repository,
						type: EntryTemplate.TYPE.DOCUMENT,
						mode: "add"
					}));
					if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.EntryTemplatesFlyoutPane)) {
						container.closePopup();
					}
				}
			}
			this.logExit("actionDocumentCreateEntryTemplate");
		},

		actionCreateFolderEntryTemplate: function(repository, items, container, entryTemplate, resultSet) {
			this.logEntry("actionFolderCreateEntryTemplate");
			if (repository.entryTemplatesEnabled) {
				if (!container)
					container = resultSet["container"];
				if (container) {
					var addTabContainer = container.addTab ? container : ecm.model.desktop.getLayout().launchBarContainer.getContentPaneByID("manageEntryTemplates");
					addTabContainer.addEntryTemplateBuilder(EntryTemplate.createFromJSON({
						repository: repository,
						type: EntryTemplate.TYPE.FOLDER,
						mode: "add"
					}));
					if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.EntryTemplatesFlyoutPane)) {
						container.closePopup();
					}
				}
			}
			this.logExit("actionFolderCreateEntryTemplate");
		},

		actionEditEntryTemplate: function(repository, items, container, entryTemplate, resultSet) {
			this.logEntry("actionEditEntryTemplate");
			if (repository.entryTemplatesEnabled) {
				if (!container)
					container = resultSet["container"];
				if (container) {
					// Convert from ContentItem to EntryTemplate, retrieve the EntryTemplate, and open a tab for the EntryTemplate to display in
					var entryTemplate = new EntryTemplate({
						id: items[0].id,
						name: items[0].name,
						repository: items[0].repository,
						mode: "edit"
					});
					entryTemplate.retrieveEntryTemplate(lang.hitch(this, function() {
						var addTabContainer = container.addTab ? container : ecm.model.desktop.getLayout().launchBarContainer.getContentPaneByID("manageEntryTemplates");
						addTabContainer.addEntryTemplateBuilder(entryTemplate);
						if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.EntryTemplatesFlyoutPane)) {
							container.closePopup();
						}
					}), true, false);
				}
			}
			this.logExit("actionEditEntryTemplate");
		},

		actionCopyEntryTemplate: function(repository, items, container, entryTemplate, resultSet) {
			this.logEntry("actionCopyEntryTemplate");
			if (repository.entryTemplatesEnabled) {
				if (!container)
					container = resultSet["container"];
				if (container) {
					// Convert from ContentItem to EntryTemplate, retrieve the EntryTemplate, and open a tab for the EntryTemplate to display in
					var entryTemplate = new EntryTemplate({
						id: items[0].id,
						name: items[0].name,
						repository: items[0].repository,
						mode: "copy"
					});
					entryTemplate.retrieveEntryTemplate(lang.hitch(this, function() {
						// Clear the name, description, and save To
						entryTemplate.name = "";
						entryTemplate.description = "";
						entryTemplate.saveToFolder = null;

						var addTabContainer = container.addTab ? container : ecm.model.desktop.getLayout().launchBarContainer.getContentPaneByID("manageEntryTemplates");
						addTabContainer.addEntryTemplateBuilder(entryTemplate);
						if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.EntryTemplatesFlyoutPane)) {
							container.closePopup();
						}
					}), true, false);
				}
			}
			this.logExit("actionCopyEntryTemplate");
		},

		actionConvertEntryTemplate: function(repository, items, container, entryTemplate, resultSet) {
			this.logEntry("actionConvertEntryTemplate");
			if (repository.entryTemplatesEnabled) {
				if (!container)
					container = resultSet["container"];
				if (container) {
					// Convert from ContentItem to EntryTemplate, retrieve the EntryTemplate, and open a tab for the EntryTemplate to display in
					var entryTemplate = new EntryTemplate({
						id: items[0].id,
						name: items[0].name,
						repository: items[0].repository,
						mode: "edit"
					});
					entryTemplate.retrieveEntryTemplate(lang.hitch(this, function() {
						var addTabContainer = container.addTab ? container : ecm.model.desktop.getLayout().launchBarContainer.getContentPaneByID("manageEntryTemplates");
						addTabContainer.addEntryTemplateBuilder(entryTemplate);
						if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.EntryTemplatesFlyoutPane)) {
							container.closePopup();
						}
					}), true, false);
				}
			}
			this.logExit("actionConvertEntryTemplate");
		},

		actionManageEntryTemplates: function(repository, items, container) {
			this.logEntry("actionManageEntryTemplates");
			if (repository.entryTemplatesEnabled) {
				if (container) {
					container.selectContentPane("manageEntryTemplates", {
						repository: repository
					});

					if (container.isInstanceOf && container.isInstanceOf(ecm.widget.layout.EntryTemplatesFlyoutPane))
						container.closePopup();
				}
			}
			this.logExit("actionManageEntryTemplates");
		},

		/**
		 * @private
		 */
		_isTeamspaceItem: function(item, repository) {
			var isTeamspace = true;
			if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
				return true;
			} else {
				var contentClass = item.getContentClass();
				if (!contentClass) {
					isTeamspace = false;
				} else if (contentClass.name != "ICMTeamspace" && contentClass.name != "ClbTeamspace" && contentClass.name != "Teamspace") {
					isTeamspace = false;
				}
			}
			return isTeamspace;
		},

		/**
		 * Adds the first input item to favorites. Shows the add favorites dialog.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            Array of items. Only the first item is edited.
		 */
		actionAddToFavorites: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionAddToFavorites");
			var contentItem = items[0];
			var isTeamspace = this._isTeamspaceItem(contentItem, repository);

			if (teamspace && isTeamspace)
				contentItem = teamspace;

			while (lang.isArray(contentItem)) {
				contentItem = contentItem[0];
			}
			if (contentItem.isInstanceOf && contentItem.isInstanceOf(ecm.model.WorkItem)) {
				contentItem = this._convertItem(contentItem);
			}

			ecm.model.desktop.loadFavorites(lang.hitch(this, function(favorites) {
				var canAddFav = true;

				if (contentItem && favorites && favorites.length > 0) {
					// Check if the favorite already exists
					var favId = ecm.model.Favorite.generateFavoriteId(contentItem);
					var vsId = (contentItem.isInstanceOf && contentItem.isInstanceOf(ecm.model.Teamspace)) ? null : contentItem.vsId;
					for ( var i in favorites) {
						var favorite = favorites[i];
						// For P8, don't allow adding new favorite from the same document version series so check the version series id.
						if (favorite.id == favId || (favorite.vsId && favorite.vsId === vsId)) {
							canAddFav = false;
							break;
						}
					}

					if (!canAddFav) {
						if (this.messageDialog) {
							this.messageDialog.destroy();
						}
						this.messageDialog = new MessageDialog({
							text: ecm.messages.add_favorite_duplicate_error
						});
						this.messageDialog.show();
					} else if (favorites.length == 100) { // Check if we've reached the maximum number favorites.
						canAddFav = false;
						var msg = new Message({
							id: "id???",
							number: "",
							level: 4,
							text: ecm.messages.add_favorite_error,
							explanation: string.substitute(ecm.messages.add_favorite_max_reached, [
								100
							]),
							userResponse: ecm.messages.add_favorite_max_reached_response
						});
						ecm.model.desktop.addMessage(msg);
					}
				}

				if (canAddFav && contentItem) {
					if (this.addToFavoritesDialog)
						this.addToFavoritesDialog.destroy();
					this.addToFavoritesDialog = new AddToFavoritesDialog();
					this.addToFavoritesDialog.setItem(contentItem);
					this.addToFavoritesDialog.setMode("add");
					this.addToFavoritesDialog.show();
				}
			}));
			this.logExit("actionAddToFavorites");
		},

		/**
		 * Rename the favorite. Shows the rename favorites dialog.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items. Only the first item is renamed.
		 */
		actionRenameFavorite: function(repository, items) {
			this.logEntry("actionRenameFavorite");
			if (this.addToFavoritesDialog)
				this.addToFavoritesDialog.destroy();
			this.addToFavoritesDialog = new AddToFavoritesDialog();
			this.addToFavoritesDialog.setItem(items[0]);
			this.addToFavoritesDialog.setMode("rename");
			this.addToFavoritesDialog.show();
			this.logExit("actionRenameFavorite");
		},

		/**
		 * Delete the favorite. Shows a confirmation dialog.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            Array of items.
		 */
		actionDeleteFavorite: function(repository, items) {
			this.logEntry("actionDeleteFavorite");
			if (this.confirmDialog)
				this.confirmDialog.destroy();
			this.confirmDialog = new ConfirmationDialog({
				title: ecm.messages.remove_favorite_label,
				text: ecm.messages.delete_favorite_confirmation_question,
				buttonLabel: ecm.messages.remove_label,
				onExecute: lang.hitch(this, function() {
					ecm.model.desktop.removeFavorites(items);
				})
			});
			this.confirmDialog.show();
			this.logExit("actionDeleteFavorite");
		},

		/**
		 * Enables a list of items for sync.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            An array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects
		 * @since 2.0.3.5
		 */
		actionEnableSync: function(repository, items) {
			this.logEntry("actionEnableSync");

			if (items && items.length > 0 && ecm.model.desktop.syncServer.canSyncItem(items[0])) {
				var itemsToSync = [];
				for ( var i in items) {
					items[i].syncEnabled = true;
					if (items[i].item) {
						items[i].item.syncEnabled = true;
						itemsToSync.push(items[i].item);
					} else {
						itemsToSync.push(items[i]);
					}
				}

				ecm.model.desktop.syncServer.enableSyncForItems(itemsToSync);
			}

			this.logExit("actionEnableSync");
		},

		/**
		 * Disables a list of items for sync.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            An array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects
		 * @since 2.0.3.5
		 */
		actionDisableSync: function(repository, items) {
			this.logEntry("actionDisableSync");

			if (items && items.length > 0 && ecm.model.desktop.syncServer.canSyncItem(items[0])) {
				var itemsToSync = [];
				for ( var i in items) {
					items[i].syncEnabled = false;
					if (items[i].item) {
						items[i].item.syncEnabled = false;
						itemsToSync.push(items[i].item);
					} else {
						itemsToSync.push(items[i]);
					}
				}

				ecm.model.desktop.syncServer.disableSyncForItems(itemsToSync);
			}

			this.logExit("actionDisableSync");
		},

		/**
		 * Disables a list of items for sync.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            An array of {@link ecm.model.Item} or {@link ecm.model.Teamspace} objects
		 * @since 2.0.3.5
		 */
		actionRemoveFromMySyncedFiles: function(repository, items) {
			this.logEntry("actionRemoveFromMySyncedFiles");

			if (items && items.length > 0 && ecm.model.desktop.syncServer.canSyncItem(items[0])) {
				var itemsToSync = [];
				for ( var i in items) {
					items[i].syncEnabled = false;
					if (items[i].item) {
						items[i].item.syncEnabled = false;
						itemsToSync.push(items[i].item);
					} else {
						itemsToSync.push(items[i]);
					}
				}

				ecm.model.desktop.syncServer.disableSyncForItems(itemsToSync);
			}

			this.logExit("actionRemoveFromMySyncedFiles");
		},

		/**
		 * Displays a dialog that allows the user to add a new Document object to a repository and attach it to the
		 * current workitem.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects
		 * @param callback
		 *            A callback function called after the item has been added to the repository. Passes the selected
		 *            content item as a parameter in the callback function.
		 */
		actionAddDocumentAttachment: function(repository, items, callback) {
			this.logEntry("actionAddDocumentAttachment");
			this.addContentItemDialog = new AddContentItemDialog({
				destroyWhenFinished: true
			});
			this.addContentItemDialog.show(repository, null, true, false, callback, null, false, null, true, "p8,cm,cmis,box");
			this.logExit("actionAddDocumentAttachment");
		},

		/**
		 * Displays a dialog that allows the user to add a new Folder object to a repository and attach it to the
		 * current workitem.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects
		 * @param callback
		 *            A callback function called after the item has been added to the repository. Passes the selected
		 *            content item as a parameter in the callback function.
		 */
		actionAddFolderAttachment: function(repository, items, callback) {
			this.logEntry("actionAddFolderAttachment");
			this.addContentItemDialog = new AddContentItemDialog({
				skipPreloadingFileTracker: true,
				destroyWhenFinished: true
			});
			this.addContentItemDialog.show(repository, null, false, false, callback, null, false, null, true, "p8,cm,cmis,box");
			this.logExit("actionAddFolderAttachment");
		},

		/**
		 * Displays a dialog that allows the user to select a Folder object from a repository to be attached to the
		 * current workitem.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects
		 * @param callback
		 *            A callback function called after the item has been selected from the repository. Passes the
		 *            selected content item as a parameter in the callback function.
		 */
		actionSelectFolderAttachment: function(repository, items, callback) {
			this.logEntry("actionSelectFolderAttachment");
			if (this.selectObjectDialog) {
				this.selectObjectDialog.destroyRecursive();
			}
			this.selectObjectDialog = new SelectObjectDialog({
				selectionMode: "folder",
				showVersionSelection: false,
				multiSelect: false,
				repository: repository,
				showMultiRepositorySelector: true,
				repositoryTypes: "p8,cm,cmis,box"
			});
			this.selectObjectDialog.show(callback);
			this.logExit("actionSelectFolderAttachment");
		},

		/**
		 * Displays a dialog that allows the user to select a Document object from a repository to be attached to the
		 * current workitem.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects
		 * @param callback
		 *            A callback function called after the item has been selected from the repository. Passes the
		 *            selected content item as a parameter in the callback function.
		 */
		actionSelectDocumentAttachment: function(repository, items, callback) {
			this.logEntry("actionSelectDocumentAttachment");
			if (this.selectObjectDialog) {
				this.selectObjectDialog.destroyRecursive();
			}
			this.selectObjectDialog = new SelectObjectDialog({
				selectionMode: "document",
				showVersionSelection: true,
				multiSelect: false,
				repository: repository,
				showMultiRepositorySelector: true,
				includeDocumentVsId: true,
				repositoryTypes: "p8,cm,cmis,od,box"
			});
			this.selectObjectDialog.show(callback);
			this.logExit("actionSelectDocumentAttachment");
		},

		actionDeleteWorkspace: function(repository, items, callback) {
			var item = items[0];
			var _this = this, taskManagerConfigured = false;

			if (this.confirmDialog)
				this.confirmDialog.destroy();

			if (repository["teamspaceTaskEnabled"] && Desktop.taskManager && Desktop.taskManager.serviceURL && Desktop.taskManager.serviceURL.length > 0 && Desktop.taskManager.isEnabled) {
				taskManagerConfigured = true;
			}

			var msg = string.substitute(ecm.messages.workspace_delete_confirmation_question, [
				idxHtml.escapeHTML(item.name)
			]);
			if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace) && item.type == "template") {
				msg = ecm.messages.delete_single_confirmation_question;
			} else if (taskManagerConfigured) {
				msg = string.substitute(ecm.messages.teamspaceDecommissionConfirmation, [
					idxHtml.escapeHTML(item.name)
				]);
			}

			var closeTab = function() {
				var layout = ecm.model.desktop.getLayout();
				if (layout && layout.launchBarContainer) {
					if (layout.launchBarContainer.selectedButton && layout.launchBarContainer.selectedButton.dropDown)
						layout.launchBarContainer.selectedButton.dropDown.closePopup();

					var manageTeamspaces = layout.launchBarContainer.getContentPaneByID("manageTeamspaces");
					manageTeamspaces.closeTab({
						tabType: "teamspace",
						teamspace: item,
						repository: item.repository,
						selected: true,
						uid: item.id,
						UUID: item.id
					});
				}
			};
			if (item && item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace) && item.type == "instance") {
				this.confirmDialog = new ConfirmationDialog({
					text: msg,
					buttonLabel: ecm.messages.delete_confirmation_button,
					cancelButtonDefault: true,
					onExecute: function() {
						if (taskManagerConfigured) {
							item.state = "pendingDelete";
							if (item.type == "instance") {
								var fav = ecm.model.Favorite.createFromItem(item);
								ecm.model.desktop.removeFavorites(fav, lang.hitch(this, function() {
									if (item.syncEnabled == true) {
										Desktop.syncServer.disableSyncForItems([
											item
										]);
									}
								}));
							}
							repository.editTeamspaceTemplate(item, function() {
								item.scheduleTeamspaceDeletionTask();
								closeTab();
							});

						} else {
							repository.deleteTeamspace(item.id, item.type, function() {
								// delete from favorites
								var fav = ecm.model.Favorite.createFromItem(item);
								ecm.model.desktop.removeFavorites(fav, lang.hitch(this, function() {
									if (item.syncEnabled == true) {
										Desktop.syncServer.disableSyncForItems([
											item
										]);
									}
								}));
								closeTab();
							});
						}
					}
				});
				this.confirmDialog.show();

			} else {
				this.confirmDialog = new ConfirmationDialog({
					text: msg,
					buttonLabel: ecm.messages.delete_confirmation_button,
					cancelButtonDefault: true,
					onExecute: function() {
						repository.deleteTeamspace(item.id, item.type, function() {
							// delete from favorites
							var fav = ecm.model.Favorite.createFromItem(item);
							ecm.model.desktop.removeFavorites(fav, lang.hitch(this, function() {
								if (item.syncEnabled == true) {
									Desktop.syncServer.disableSyncForItems([
										item
									]);
								}
							}));

							var layout = ecm.model.desktop.getLayout();

							if (layout && layout.launchBarContainer) {
								if (layout.launchBarContainer.selectedButton && layout.launchBarContainer.selectedButton.dropDown)
									layout.launchBarContainer.selectedButton.dropDown.closePopup();

								var teamspacePane = layout.launchBarContainer.getContentPaneByID("teamspacePane");
								if (teamspacePane) {
									var teamspace = teamspacePane["teamspace"];
									if (teamspace && item.id == teamspace.id) {
										layout.launchBarContainer.selectContentPane(null, "manageTeamspaces", {
											repository: repository
										});
									}
								}
							}
						});
					}
				});
				this.confirmDialog.show();
			}
		},

		/**
		 * Opens the folder.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}
		 * @param items
		 *            Array of items. Only the first item is opened.
		 * @param callback
		 *            Callback function.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 *            parameterMap.widget contains the widget to set the result set on and to onOpenItem.
		 */
		actionOpenFolder: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			if (items && items.length > 0) {
				var resultSet = items[0].resultSet;
				if (resultSet && resultSet.setType == "checkedOutItems") {
					this.actionEdit(items[0].repository, items);
				} else if (parameterMap) {
					var widget = parameterMap["widget"];
					if (widget) {
						this.actionOpen(items[0], lang.hitch(this, function(item, data) {
							if (data && data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.FavoritesResultSet))) {
								if (widget.setResultSet) {
									widget.setResultSet(data);
								}
								if (widget.onOpenItem) {
									widget.onOpenItem(item, data);
								}
							}
						}));
					}
				}
			}
		},

		/**
		 * Use this method when you want to always open the search template in a search tab. Used by search selector and
		 * search pane.
		 */
		actionOpenSearchInTab: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionOpenSearchInTab");
			if (items && items.length > 0 && parameterMap) {
				var searchTemplate = items[0];
				var widget = parameterMap["widget"];
				if (widget && widget.onOpenItem) {
					widget.onOpenItem(searchTemplate, {
						openNewTab: false,
						version: searchTemplate._getSearchVersion(resultSet)
					});
				}
			}
			this.logExit("actionOpenSearchInTab");
		},

		/**
		 * Use this method when you want to open non-autorun search templates in a search tab, but for autorun search
		 * templates you want to run the search and get the resultSet (which can then be put in a content list). Used by
		 * browse, favorites, and teamspaces.
		 */
		actionOpenSearch: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionOpenSearch");
			if (items && items.length > 0 && parameterMap) {
				var searchTemplate = items[0];
				var widget = parameterMap["widget"];
				if (widget) {
					var vsId = searchTemplate.vsId;
					var version = "released";
					var searchVersion = searchTemplate._getSearchVersion(resultSet);
					if (searchVersion == "specific") {
						vsId = null;
						version = null;
					} else if (searchVersion != null) {
						version = searchVersion;
					}
					searchTemplate.repository.retrieveSearchTemplate(searchTemplate.id, vsId, version, function(updatedItem) {
						updatedItem.parent = searchTemplate.parent;
						if (updatedItem.isAutoRun() && widget.setResultSet) {
							searchTemplate.search(function(searchResultSet) {
								widget.setResultSet(searchResultSet, resultSet ? resultSet.parentFolder : null);
							}, null, null, null, null);
						} else {
							// Update the search template item
							searchTemplate.onChange([
								updatedItem
							]);
							if (widget.onOpenItem) {
								widget.onOpenItem(updatedItem, {
									openNewTab: false,
									version: searchVersion
								});
							}
						}
					});
				}
			}
			this.logExit("actionOpenSearch");
		},

		actionOpenSearchNewTab: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionOpenSearchNewTab");
			if (items && items.length > 0 && parameterMap) {
				var searchTemplate = items[0];
				var widget = parameterMap["widget"];

				if (widget && widget.onOpenItem) {
					var searchTemplateRepository = searchTemplate.repository;
					if (searchTemplateRepository._isOnDemand()) {
						widget.onOpenItem(searchTemplate, {
							openNewTab: true
						});
					} else {
						var vsId = searchTemplate.vsId;
						var version = "released";
						var searchVersion = searchTemplate._getSearchVersion(resultSet);
						if (searchVersion == "specific") {
							vsId = null;
							version = null;
						} else if (searchVersion != null) {
							version = searchVersion;
						}
						searchTemplateRepository.retrieveSearchTemplate(searchTemplate.id, vsId, version, function(updatedItem) {
							// Update the search template item
							updatedItem.parent = searchTemplate.parent;
							searchTemplate.onChange([
								updatedItem
							]);
							widget.onOpenItem(searchTemplate, {
								openNewTab: true,
								version: searchVersion
							});
						});
					}
				}
			}
			this.logExit("actionOpenSearchNewTab");
		},

		/**
		 * Displays the View Link dialog box.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 */
		actionShowHyperlink: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionShowHyperlink");

			var contentItems = this._convertItems(items);
			var showVersion;
			var version = null;
			if (contentItems[0].isInstanceOf && contentItems[0].isInstanceOf(ecm.model.Teamspace)) {
				showVersion = false;
			} else if (version = contentItems[0]._getSearchVersion(resultSet)) {
				showVersion = true;
			} else {
				showVersion = (!resultSet || resultSet.context != "PropertiesVersions");
			}

			if (this.showHyperLinkDialog)
				this.showHyperLinkDialog.destroy();

			this.showHyperLinkDialog = new ShowHyperlinkDialog({
				item: contentItems[0],
				showVersionSelection: showVersion,
				version: version,
				repository: repository
			});
			this.showHyperLinkDialog.show(callback);

			this.logExit("actionShowHyperlink");
		},

		/**
		 * Moves the work item to the current user's personal in-basket. Does not display any UI.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function called after the items have been moved to their in-basket.
		 */
		actionMoveToInbox: function(repository, items, callback) {
			this.logEntry("actionMoveToInbox");
			items[0].moveToInbox(lang.hitch(this, function() {
				this.actionRefreshInbasket(repository, items);
			}), items);
			this.logExit("actionMoveToInbox");
		},

		/**
		 * Returns the workitem to the sender it originally came from. Does not display any user interface (UI).
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been returned to the sender.
		 */
		actionReturnToSender: function(repository, items, callback) {
			this.logEntry("actionReturnToSender");
			items[0].returnToSender(lang.hitch(this, function() {
				this.actionRefreshInbasket(repository, items);
			}));
			this.logExit("actionReturnToSender");
		},

		/**
		 * Displays a dialog that allows the user to select another user to be assigned to the FileNet P8 workflow.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been reassigned to another user.
		 */
		actionReassign: function(repository, items, callback) {
			this.logEntry("actionReassign");

			var openReassignDialog = lang.hitch(this, function(canReassign) {
				if (canReassign) {
					// Display the rassign dialog
					if (this.reassignDialog)
						this.reassignDialog.destroyRecursive();
					this.reassignDialog = new ReassignToUserDialog({
						repository: repository,
						items: items,
						callback: lang.hitch(this, function(user, displayName, delegate) {
							this.actionRefreshInbasket(repository, items);
						})
					});
					this.reassignDialog.show();
				} else {
					ecm.model.desktop.addMessage(ecm.model.Message.createErrorMessage("process_reassign_error"));
				}
			});

			if (items.length == 1) { // For single item, check to see if the item can be reassigned.  For multi selection, let the server handles
				var item = items[0];
				item.canReassign(function(canReassign) {
					openReassignDialog(canReassign);
				});
			} else {
				openReassignDialog(true);
			}
			this.logExit("actionReassign");
		},

		/**
		 * Displays a confirmation dialog box that allows the user to remove the current work item from the tracker
		 * in-basket or cancel the action.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been deleted from the tracker in-basket.
		 */
		actionDeleteTracker: function(repository, items, callback) {
			this.logEntry("actionDeleteTracker");

			if (this.confirmDialog)
				this.confirmDialog.destroy();

			var trackerItem = items[0];
			this.confirmDialog = new ConfirmationDialog({
				text: string.substitute(ecm.messages.process_tracker_delete_confirmation, [
					idxHtml.escapeHTML(trackerItem.getValue("F_Subject"))
				]),
				buttonLabel: ecm.messages.process_finish_button_label,
				cancelButtonDefault: true,
				title: ecm.messages.confirmation_icon_tooltip,
				onExecute: function() {
					trackerItem.deleteTracker("true", callback);
				}
			});
			this.confirmDialog.show();

			this.logExit("actionDeleteTracker");
		},

		/**
		 * Displays a dialog box that allows the user to specify the Content Manager workflow properties and then launch
		 * the workflow.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function called after the items have been started on the workflow.
		 */
		actionStartWF: function(repository, items, callback) {
			this.logEntry("actionstartOnWorkflow");
			if (this._startWorkflow) {
				this._startWorkflow.destroyRecursive();
			}
			this.startWorkflowDialog = new StartWorkflowDialog({
				items: items,
				repository: repository
			});
			this.startWorkflowDialog.show(callback);
			this.logExit("actionstartOnWorkflow");
		},

		/**
		 * Displays a dialog box that allows the user to open the Content Manager Step Processor.
		 * 
		 * @since 2.0.2
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been edited.
		 */
		actionOpenStep: function(repository, items, callback) {
			this.logEntry("actionOpenStep");
			var workItem = items[0];
			ecm.widget.dialog.stepRoutingWindow.open(workItem, callback);
			this.logExit("actionOpenStep");
		},

		/**
		 * Dispaly a dialog box that shows the selected item process information
		 * 
		 * @since 2.0.2
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been displayed.
		 */
		actionViewProcessInformation: function(repository, items, callback) {
			this.logEntry("actionViewProcessInformation");
			if (this.processInformationDialog) {
				this.processInformationDialog.destroyRecursive();
			}

			this.processInformationDialog = new ProcessInformationDialog({
				items: items,
				repository: repository,
				resizable: true
			});
			this.processInformationDialog.show(callback);
			this.logExit("actionViewProcessInformation");
		},

		/**
		 * Displays a dialog box that allows the user to specify the Content Manager workflow properties.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been edited.
		 */
		actionEditWF: function(repository, items, callback) {
			this.logEntry("actionEditWF");
			if (this.editWorkItemDialog) {
				this.editWorkItemDialog.destroyRecursive();
			}
			this.editWorkItemDialog = new StartWorkflowDialog({
				items: items,
				repository: repository
			});
			this.editWorkItemDialog.show(callback);
			this.logExit("actionEditWF");
		},

		/**
		 * Continues the selected items on their Content Manager workflows.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects
		 * @param callback
		 *            A callback function that is called after the items have been continued.
		 */
		actionContinueWF: function(repository, items, callback) {
			this.logEntry("actionContinueWF");
			var worklist = items[0].parent;
			if (worklist) {
				worklist.continueWorkflow(items, callback);
			}
			this.logExit("actionContinueWF");
		},

		/**
		 * Displays a dialog that allows the user to specify the Content Manager workflow suspend options and then
		 * suspend the items.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been removed.
		 */
		actionSuspendWF: function(repository, items, callback) {
			this.logEntry("actionSuspendWF");
			if (this.suspendWorkItemsDialog) {
				this.suspendWorkItemsDialog.destroyRecursive();
			}
			this.suspendWorkItemsDialog = new SuspendWorkItemsDialog({
				items: items,
				repository: repository
			});
			this.suspendWorkItemsDialog.show(callback);
			this.logExit("actionSuspendWF");
		},

		/**
		 * Resumes the selected items on their Content Manager workflows (that have been suspended).
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been resumed.
		 */
		actionResumeWF: function(repository, items, callback) {
			this.logEntry("actionResumeWF");
			var worklist = items[0].parent;
			if (worklist) {
				worklist.resumeWorkflow(items, callback);
			}
			this.logExit("actionResumeWF");
		},

		/**
		 * Displays a confirmation dialog that allows the user to remove the Content Manager items from their workflow
		 * or to cancel the action.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            An array of {@link ecm.model.WorkItem} objects.
		 * @param callback
		 *            A callback function that is called after the items have been removed.
		 */
		actionRemoveWF: function(repository, items, callback) {
			this.logEntry("actionRemoveWF");

			if (this.confirmDialog)
				this.confirmDialog.destroy();

			this.confirmDialog = new ConfirmationDialog({
				title: ecm.messages.remove_workflow_title,
				text: string.substitute(ecm.messages.remove_workflow_confirmation, [
					items.length
				]),
				buttonLabel: ecm.messages.remove_workflow_button_label,
				onExecute: function() {
					items[0].parent.removeWorkflow(items);
				}
			});
			this.confirmDialog.show();

			this.logExit("actionRemoveWF");
		},

		/**
		 * Displays a confirmation dialog box that allows the user to remove items from a folder or to cancel the
		 * action.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of objects.
		 * @param callback
		 *            A callback function that is called after the items have been unfiled.
		 * @param teamspace
		 *            An instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            An instance of {@link ecm.model.ResultSet}.
		 */
		actionRemoveFromFolder: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionRemoveFromFolder");
			var parentFolder;
			if (resultSet) {
				parentFolder = resultSet.parentFolder;
			}

			if (items.length > 1) {
				var confirmationText = string.substitute(ecm.messages.unfile_multi_prompt, [
					idxHtml.escapeHTML(parentFolder.name)
				]);
				if (items.length > this._largeNumberPrompt) {
					var confirmationText = string.substitute(ecm.messages.unfile_large_number_items_confirmation_question, [
						items.length,
						idxHtml.escapeHTML(parentFolder.name)
					]);
				}

				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					title: ecm.messages.unfile_dialog_title,
					text: confirmationText,
					buttonLabel: ecm.messages.unfile_dialog_remove_button_label,
					onExecute: function() {
						// Check that the remove function exists, it maybe a WorkItem and we need to defer to the ContentItem
						if (typeof (parentFolder.removeFromFolder) === "function") {
							parentFolder.removeFromFolder(items);
						} else if (parentFolder.contentItem && typeof (parentFolder.contentItem.removeFromFolder) === "function") {
							parentFolder.contentItem.removeFromFolder(items);
						} else if (parentFolder.item && typeof (parentFolder.item.removeFromFolder) === "function") { // a favorite
							parentFolder.item.removeFromFolder(items);
						}
					}
				});
				this.confirmDialog.show();
			} else {
				if (this.unfileDialog)
					this.unfileDialog.destroy();

				this.unfileDialog = new UnfileDialog({
					repository: repository
				});
				this.unfileDialog.show(items[0], parentFolder);
			}

			this.logExit("actionRemoveFromFolder");
		},

		/**
		 * Displays the Move to Folder dialog box to enable the user to move a folder from one parent folder to another.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            A callback function that is call after the folder is moved.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 */
		actionMoveFolderToFolder: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionMoveFolderToFolder");
			var parentFolder = null;
			if (resultSet) {
				parentFolder = resultSet.parentFolder;
				if (!teamspace && resultSet["teamspace"]) {
					teamspace = resultSet["teamspace"];
				}
			}

			if (parentFolder == null) {
				parentFolder = items[0].parent;
			}

			// Workitems can be parent folders.
			if (parentFolder != null && (!parentFolder.isInstanceOf || !parentFolder.isInstanceOf(ecm.model.ContentItem) || parentFolder.isInstanceOf(ecm.model._SearchTemplateBase))) {
				parentFolder = null;
			}

			if (this.moveFileDialog)
				this.moveFileDialog.destroyRecursive();

			this.moveFileDialog = new MoveFileEnhancedDialog({
				repository: repository,
				teamspace: teamspace,
				action: this.actionMoveFolderToFolder.nom
			});

			this.moveFileDialog.show(parentFolder, items);

			this.logExit("actionMoveFolderToFolder");
		},

		/**
		 * Displays the Teamspace Move to Folder dialog box to enable the user to move a document outside of the
		 * teamspace.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            A callback function that is called after the document is moved.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @since 2.0.3
		 */
		actionMoveTeamspaceDocumentToFolder: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionMoveTeamspaceDocumentToFolder");
			var parentFolder = null;
			if (resultSet) {
				parentFolder = resultSet.parentFolder;
				if (!teamspace && resultSet["teamspace"]) {
					teamspace = resultSet["teamspace"];
				}
			}
			if (parentFolder == null) {
				parentFolder = items[0].parent;
			}

			if (parentFolder && parentFolder.item) { // Favorite
				parentFolder = parentFolder.item;
			}

			// Workitems and search templates can be parent folders.
			if (parentFolder != null && (!parentFolder.isInstanceOf || !parentFolder.isInstanceOf(ecm.model.ContentItem) || parentFolder.isInstanceOf(ecm.model._SearchTemplateBase))) {
				parentFolder = teamspace;
			}

			if (this.moveTeamspaceFileDialog)
				this.moveTeamspaceFileDialog.destroyRecursive();

			this.moveTeamspaceFileDialog = new MoveTeamspaceFileDialog({
				repository: repository,
				teamspace: teamspace
			});

			// Need to make a call to get the security parent for P8
			if (repository._isP8()) {
				var ids = array.map(items, function(item) {
					return item.id;
				});
				repository._teamspaceItemsCache = null;
				repository.retrieveMultiItem(ids, lang.hitch(this, function(retrievedItems) {
					this.moveTeamspaceFileDialog.show(parentFolder, retrievedItems);
				}), null, null, null, true);

			} else {
				this.moveTeamspaceFileDialog.show(parentFolder, items);
			}

			this.logExit("actionMoveTeamspaceDocumentToFolder");
		},
		/**
		 * Displays the Move to Folder dialog box to enable the user to move a document to another parent folder.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            A callback function that is called after the document is moved.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 */
		actionMoveDocumentToFolder: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionMoveDocumentToFolder");
			var parentFolder = null;
			if (resultSet) {
				parentFolder = resultSet.parentFolder;
				if (!teamspace && resultSet["teamspace"]) {
					teamspace = resultSet["teamspace"];
				}
			}

			if (parentFolder == null) {
				parentFolder = items[0].parent;
			}

			if (parentFolder && parentFolder.item) { // Favorite
				parentFolder = parentFolder.item;
			}

			// Workitems and search templates can be parent folders.
			if (parentFolder != null && (!parentFolder.isInstanceOf || !parentFolder.isInstanceOf(ecm.model.ContentItem) || parentFolder.isInstanceOf(ecm.model._SearchTemplateBase))) {
				parentFolder = null;
			}

			if (this.moveFileDialog)
				this.moveFileDialog.destroyRecursive();

			this.moveFileDialog = new MoveFileEnhancedDialog({
				repository: repository,
				teamspace: teamspace,
				action: this.actionMoveDocumentToFolder.nom
			});
			this.moveFileDialog.show(parentFolder, items);

			this.logExit("actionMoveDocumentToFolder");
		},

		/**
		 * Displays the Add to Folder dialog box to enable the user to add a document to a folder.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            A callback function that is called after the document is added.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 * @param action
		 */
		actionAddToFolder: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionAddToFolder");
			if (resultSet) {
				var parentFolder = resultSet.parentFolder;
				if (!teamspace && resultSet["teamspace"]) {
					teamspace = resultSet["teamspace"];
				}
			}

			if (this.moveFileDialog)
				this.moveFileDialog.destroyRecursive();

			this.moveFileDialog = new MoveFileEnhancedDialog({
				repository: repository,
				teamspace: teamspace,
				action: this.actionAddToFolder.nom
			});

			// If they selected a large number of items, warn them that the action may take a while.
			if (items && items.length > this._largeNumberPrompt) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
						this.moveFileDialog.show(parentFolder, items);
					})
				});
				this.confirmDialog.show();
			} else {
				this.moveFileDialog.show(parentFolder, items);
			}

			this.logExit("actionAddToFolder");
		},

		/**
		 * Displays the Copy to Folder dialog box to enable the user to copy a document or folder to a folder in a
		 * different repository.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            A callback function that is called after the document is added.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 * @param action
		 * @since 2.0.3.6
		 */
		actionBoxCopy: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			var defaultRepo = ecm.model.desktop.getDefaultRepository();
			var defaultRepository = null;
			if (defaultRepo && defaultRepo.type != repository.type)
				defaultRepository = defaultRepo;

			var repositoryCount = ecm.model.desktop._getNumOfBoxCopyRepositories(repository);

			this.actionCopyToFolder(repository, items, lang.hitch(this, function(refresh, id) {
				if (resultSet && refresh == "true") {

					var itemToRemove;
					if (id) {
						array.forEach(items, function(item) {
							if (id == item.id) {
								itemToRemove = item;
							}

						}, this);
					} else {
						itemToRemove = items[0];
					}
					var syncItemsToRemove = [];
					var favorite = ecm.model.Favorite.createFromItem(itemToRemove);
					favorite.deleted = true;
					if (itemToRemove.syncEnabled == true) {
						syncItemsToRemove.push(itemToRemove);
					}

					// Remove items from favorites
					ecm.model.desktop.removeFavorites(favorite, lang.hitch(this, function() {

						//Remove items from sync item list
						ecm.model.desktop.syncServer.disableSyncForItems(syncItemsToRemove);

						resultSet.refresh();
					}));
				}

				if (callback)
					callback();
			}), teamspace, resultSet, parameterMap, action, defaultRepository);
		},

		/**
		 * @private
		 */
		_getFirstCopyRepository: function(repository) {
			var desktopRepositories = ecm.model.desktop.repositories;
			var foundRepository;
			for ( var i in desktopRepositories) {
				var dRepository = desktopRepositories[i];
				if (dRepository._isP8() || dRepository._isCM() || dRepository._isBox()) {
					if (dRepository.type != repository.type && (dRepository["boxCopyEnabled"] || dRepository._isBox())) {
						if ((repository._isP8() && dRepository._isCM()) || (repository._isCM() && dRepository._isP8())) {

						} else {
							foundRepository = dRepository;
							break;
						}
					}
				}

			}
			return foundRepository;
		},

		/**
		 * @private
		 */
		_isCopyTypeSupported: function(repositoryA, repositoryB) {
			// Supported: copying from Box to CM or P8, or copying from CM or P8 to Box.
			return (repositoryA._isBox() && (repositoryB._isCM() || repositoryB._isP8())) || ((repositoryA._isCM() || repositoryA._isP8()) && repositoryB._isBox());
		},

		/**
		 * Displays the Copy to Folder dialog box to enable the user to copy a document or folder to a folder.
		 * 
		 * @param repository
		 *            Instance of {@link ecm.model.Repository}.
		 * @param items
		 *            Array of items.
		 * @param callback
		 *            A callback function that is called after the document is added.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 * @param action
		 * @param defaultSelectedRepository
		 */
		actionCopyToFolder: function(repository, items, callback, teamspace, resultSet, parameterMap, action, defaultSelectedRepository) {
			this.logEntry("actionCopyToFolder");

			if (resultSet) {
				var parentFolder = resultSet.parentFolder;
				if (!teamspace && resultSet["teamspace"]) {
					teamspace = resultSet["teamspace"];
				}
			}

			if (this.moveFileDialog)
				this.moveFileDialog.destroyRecursive();

			var orgRepository = repository;
			var repositoryCount = ecm.model.desktop._getNumOfBoxCopyRepositories(repository);
			if (action.action == "actionBoxCopy")
				repository = this._getFirstCopyRepository(repository);

			if (action.action == "actionBoxCopy" && !defaultSelectedRepository)
				defaultSelectedRepository = this._getFirstCopyRepository(repository);

			if (action.action == "actionBoxCopy" && defaultSelectedRepository && defaultSelectedRepository.id != repository.id && this._isCopyTypeSupported(orgRepository, defaultSelectedRepository))
				repository = defaultSelectedRepository;

			this.moveFileDialog = new MoveFileEnhancedDialog({
				repository: repository,
				canShowBrowse: repositoryCount == 1 ? true : false,
				displaySelectTeamspacesNode: false,
				repositoryCount: repositoryCount,
				defaultSelectedRepository: defaultSelectedRepository,
				action: action.action
			});

			var maxNumDocs = ecm.model.desktop.maxNumberDocToAdd;
			var contentSize = this._getContentSizeOfItems(repository, items);
			var sizeOk = true;
			if (contentSize > (10 * 1000000))
				sizeOk = false;

			// If they selected a large number of items, warn them that the action may take a while.
			if ((!sizeOk || (items && items.length > this._exportLargeNumberPrompt)) && action.action == "actionBoxCopy" && items.length <= maxNumDocs) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();
				var textMsg = ecm.messages.large_number_actions_confirmation_question;
				if (!sizeOk)
					textMsg = ecm.messages.large_items_actions_confirmation_question;

				this.confirmDialog = new ConfirmationDialog({
					text: textMsg,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
						LoginDialog.checkLogin(repository, lang.hitch(this, function() {
							this.moveFileDialog.show(parentFolder, items, callback);

						}));
					})
				});
				this.confirmDialog.show();
			} else if (items && action == "actionBoxCopy" && items.length > maxNumDocs) {
				if (this._errorDialog) {
					this._errorDialog.destroyRecursive();
				}
				this._errorDialog = new ErrorDialog();
				this._errorDialog.showMessage(Message.createErrorMessage("add_document_too_many_items_error"));

			} else {

				if (action.action == "actionBoxCopy") {
					LoginDialog.checkLogin(repository, lang.hitch(this, function() {
						this.moveFileDialog.show(parentFolder, items, callback);

					}));
				} else {
					this.moveFileDialog.show(parentFolder, items);
				}
			}

			this.logExit("actionCopyToFolder");
		},

		actionDisableWorkspace: function(repository, items, callback) {
			repository.retrieveTeamspaceById(items[0].id, items[0].type, function(teamspace) {
				if (teamspace) {
					teamspace.initFromJson();
					teamspace.state = "offline";
					teamspace.onChange(teamspace);
					if (teamspace.type == "instance") {
						//var fav = ecm.model.Favorite.createFromItem(teamspace);
						//ecm.model.desktop.removeFavorites(fav);
//						if (teamspace.syncEnabled) {
//							ecm.model.desktop.syncServer.disableSyncForItems([
//								teamspace
//							]);
//						}
					}
					repository.editTeamspaceTemplate(teamspace, function() {

					});
				}
			});
		},
		actionMakeWorkspaceTemplateDefault: function(repository, items, callback) {
			repository.retrieveTeamspaceById(items[0].id, "template", function(teamspace) {
				if (teamspace) {
					teamspace.initFromJson();
					teamspace.state = "default";
					teamspace.onChange(teamspace);
					repository.editTeamspaceTemplate(teamspace, function() {
					});
				}
			});
		},
		actionEnableWorkspace: function(repository, items, callback) {
			repository.retrieveTeamspaceById(items[0].id, items[0].type, function(teamspace) {
				if (teamspace) {
					teamspace.initFromJson();
					teamspace.state = "published";
					teamspace.onChange(teamspace);
					repository.editTeamspaceTemplate(teamspace, function() {
					});
				}
			});
		},
		/*actionValidateWorkspace: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var selectedTemplate = items[0];
			var widget = parameterMap["widget"];
			if (widget) {
				ecm.model.desktop.setSelectedItems([
					selectedTemplate
				]);
				selectedTemplate.repository.validateTeamspace(items[0].id, "template", lang.hitch(this, function(template) {
					if (template && template.state != "deleted") {
						if (widget.onOpenItem) {
							widget.onOpenItem(selectedTemplate, template);

							 Below will contain an array of invalid content for the template.  Roles do not need to be validated.
							validatedTeamspace.invalidClasses
							validatedTeamspace.invalidFoldersandDocs
							validatedTeamspace.invalidSearches

						}
					}
				}));
			}
		},*/

		actionWorkspaceProperties: function(repository, items, callback, teamspace, resultSet) {
			var teamspaceId = null;
			var type, canEdit = false;
			if (teamspace) {
				teamspaceId = teamspace.id;
				type = teamspace.type;
				canEdit = teamspace.hasPrivilege("privEdit");
			} else {
				teamspaceId = items[0].id;
				type = items[0].type;
				canEdit = items[0].hasPrivilege("privEdit");
			}
			repository.retrieveTeamspaceById(teamspaceId, type, lang.hitch(this, function(teamspace) {
				// for some reason initFromJson() sets the type to instance, so save the type here
				var teamspacetype = teamspace.type;
				teamspace.initFromJson();
				teamspace.type = teamspacetype;
				teamspace.onChange(teamspace);

				if (teamspacetype == "template") {
					if (this.templatePropertiesDialog)
						this.templatePropertiesDialog.destroyRecursive();

					this.templatePropertiesDialog = new TemplatePropertiesDialog({
						model: teamspace,
						canEdit: canEdit
					});
					this.templatePropertiesDialog.show();
				} else {
					if (this.teamspacePropsDialog)
						this.teamspacePropsDialog.destroyRecursive();

					this.teamspacePropsDialog = new TeamspacePropertiesDialog({
						model: teamspace
					});
					this.teamspacePropsDialog.show(function() {
						teamspace.repository.editTeamspaceTemplate(teamspace, function(response) {
						});
					});
				}
			}));
		},

		actionEditTeamspaceSearches: function(repository, items, callback) {
			this._showManageTeamspace(repository, items[0], "search");
		},

		actionEditTeamspaceEntryTemplates: function(repository, items, callback) {
			this._showManageTeamspace(repository, items[0], "classes");
		},

		actionEditTeamspaceRoles: function(repository, items, callback) {
			this._showManageTeamspace(repository, items[0], "roles");
		},

		/**
		 * Displays a dialog box that will list the "transfered" workflow definitions from a FileNet P8 repository. The
		 * user can select a workflow and launch it.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		actionLaunchWorkflowAction: function(repository) {
			if (this.transferedWorkflowsDialog) {
				this.transferedWorkflowsDialog.destroyRecursive();
			}
			this.transferedWorkflowsDialog = new TransferedWorkflowsDialog({
				repository: repository
			});
			this.transferedWorkflowsDialog.show();
		},

		/**
		 * Displays a dialog that will "transfer" a workflow definitions from a P8 repository.
		 * 
		 * @since 2.0.2
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            A {@link ecm.model.ContentItem} object for workflow definition
		 */
		actionTransferWorkflow: function(repository, items, callback) {
			if (this.transferWorkflowDefinitionDialog) {
				this.transferWorkflowDefinitionDialog.destroyRecursive();
			}
			this.transferWorkflowDefinitionDialog = new TransferWorkflowDefinitionDialog();
			this.transferWorkflowDefinitionDialog.show(repository, items[0], callback);
		},

		actionEditTeamspaceTeam: function(repository, items, callback) {
			this._showManageTeamspace(repository, items[0], "team");
		},

		actionEditTeamspaceClasses: function(repository, items, callback) {
			this._showManageTeamspace(repository, items[0], "classes");
		},

		// display the print applet dialog or print via daeja dialog, depending on desktop setting
		_showPrintDialog: function(repository, items, partNumber) {
			if (!ecm.model.desktop.printServiceEnabled) {
				Print.startApplet(lang.hitch(this, function() {
					if (!this.printDialog) {
						this.printDialog = new PrintDialog({});
					}
					var dialog = this.printDialog;
					dialog.set("items", items);
					dialog.set("repositoryId", repository.id);
					dialog.partNum = partNumber;
					dialog.show();
				}));
			}
			else {
				if (this.newPrintDialog)
					this.newPrintDialog.destroy();
				this.newPrintDialog = new PrintServiceDialog();
				this.newPrintDialog.setItems(items);
				this.newPrintDialog.setPartNumber(partNumber);
				this.newPrintDialog.show();
			}
		},
		
		_doPrintAction: function(repository, items, callback, partNum) {
			this.logEntry("_doPrintAction");
            
			// if these are content elements, modify the list format:
			for ( i=0; i<items.length;i++ )
			{
				if ( items[i].celement != null )
				{
					items[i] = {"item":items[i],
					    "index":items[i].celement,
					    "contentType":items[i].mimetype,
						"id":items[i].id }
				}		    
			}
			
			if (this._checkPrintLimits(items)) {

				// for applet print show a confirmation if the # selected is > than a set limit
				if (!ecm.model.desktop.printServiceEnabled && items && items.length > this._printLargeNumberPrompt) {
					var self = this;
					this.confirmDialog = new ConfirmationDialog({
						text: ecm.messages.large_number_actions_confirmation_question,
						buttonLabel: ecm.messages.large_number_actions_continue_button,
						title: ecm.messages.print_title,
						onExecute: function() {
							self._showPrintDialog(repository, items, partNum);
						}
					});
					this.confirmDialog.show();
				} else {
					this._showPrintDialog(repository, items, partNum);
				}
			}

			this.logExit("_doPrintAction");
		},
		
		// check if the list exceeds the limits set on the desktop
		_checkPrintLimits: function(items) {
			var repository = items[0].repository ? items[0].repository : null;
			var okToPrint = true;
			if (ecm.model.desktop.printServiceEnabled) {
				// check # of items
				if (ecm.model.desktop.maxNumberDocToPrint > 0 && items.length > ecm.model.desktop.maxNumberDocToPrint) {
					okToPrint = false;
					message = ecm.model.Message.createErrorMessage("print_service_max_number_selected_error",
							[ecm.model.desktop.maxNumberDocToPrint, items.length]);
					ecm.model.desktop.addMessage(message);
				}
			}
			return okToPrint;
		},
		
		actionPrintDoc: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionPrintDoc");
			this._doPrintAction(repository, items, callback, "0");
			this.logExit("actionPrintDoc");
		},

		actionPrintDocAll: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("actionPrintDocAll");
			this._doPrintAction(repository, items, callback, "all");
			
//			if (items && items.length > this._printLargeNumberPrompt) {
//				this.confirmDialog = new ConfirmationDialog({
//					text: ecm.messages.large_number_actions_confirmation_question,
//					buttonLabel: ecm.messages.large_number_actions_continue_button,
//					title: ecm.messages.print_title,
//					onExecute: function() {
//						Print.startApplet(lang.hitch(this, function() {
//							if (!this.printDialog) {
//								this.printDialog = new PrintDialog({});
//							}
//							var dialog = this.printDialog;
//							dialog.set("items", items);
//							dialog.set("repositoryId", repository.id);
//							dialog.partNum = "all";
//							dialog.show();
//						}));
//					}
//				});
//				this.confirmDialog.show();
//			} else {
//				Print.startApplet(lang.hitch(this, function() {
//					if (!this.printDialog) {
//						this.printDialog = new PrintDialog({});
//					}
//					var dialog = this.printDialog;
//					dialog.set("items", items);
//					dialog.set("repositoryId", repository.id);
//					dialog.partNum = "all";
//					dialog.show();
//				}));
//			}
			
			this.logExit("actionPrintDocAll");
		},

		_showManageTeamspace: function(repository, item, tab) {
			var teamspaceId;
			if (item.isInstanceOf && (item.isInstanceOf(ecm.model.Teamspace) || item.isInstanceOf(ecm.model.ContentItem))) {
				teamspaceId = item.id;
			} else {
				teamspaceId = item.id[0];
			}

			// retrieve a fresh copy before modifying
			repository._deleteFullyCachedTeamspace(teamspaceId);
			repository.clearSearchTemplates();
			repository.retrieveTeamspaceById(teamspaceId, "instance", lang.hitch(this, function(teamspace) {
				teamspace.initFromJson();
				if (this.manageTeamspaceDialog)
					this.manageTeamspaceDialog.destroyRecursive();

				this.manageTeamspaceDialog = new ManageTeamspaceDialog({
					model: teamspace
				});
				this.manageTeamspaceDialog.show(tab);
			}));
		},

		/**
		 * Opens teamspaces.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object.
		 * @param items
		 *            Array of objects.
		 * @param callback
		 *            A callback function that is called after the teamspace is opened.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 */
		actionOpenTeamspace: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var teamspace = items[0];
			var widget = parameterMap["widget"];
			if (widget) {
				ecm.model.desktop.setSelectedItems([
					teamspace
				]);
				teamspace.repository.retrieveTeamspaceById(teamspace.id, "instance", lang.hitch(this, function(teamspaceItem) {
					if (teamspaceItem && teamspaceItem.state != "deleted") {
						if (teamspaceItem.state == "offline" && !teamspaceItem.currentUserIsOwner) {
							if (this.messageDialog) {
								this.messageDialog.destroy();
							}
							this.messageDialog = new MessageDialog({
								text: ecm.messages.offlineTeamspace_open_msg
							});
							this.messageDialog.show();
						} else if (widget.onOpenItem) {
							widget.onOpenItem(teamspace, teamspaceItem);
						}
					}
				}));
			}
		},

		/**
		 * Imports teamspace templates.
		 * 
		 * @param repository
		 *            An (@link ecm.model.Repository} object.
		 * @param items
		 *            Array of objects.
		 * @param callback
		 *            A callback function that is called after the teamspace template is imported.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 * @param action
		 */
		actionImportTemplate: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			var t = this;
			LoginDialog.checkLogin(repository, lang.hitch(t, function() {
				if (this.importTeamspaceDialog)
					t.importTeamspaceDialog.destroyRecursive();

				t.importTeamspaceDialog = new ImportTeamspaceDialog({
					repository: repository
				});

				t.importTeamspaceDialog.show();

			}));
		},

		/**
		 * Exports teamspace templates.
		 * 
		 * @param repository
		 *            An {@link ecm.model.Repository} object
		 * @param items
		 *            Array of objects.
		 * @param callback
		 *            A callback function that is called after a teamspace template is exported.
		 * @param teamspace
		 *            Instance of {@link ecm.model.Teamspace}.
		 * @param resultSet
		 *            Instance of {@link ecm.model.ResultSet}.
		 * @param parameterMap
		 * @param action
		 */
		actionExportTemplate: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			var teamspace = items[0];
			var templateIDs = [];

			for ( var i in items) {
				templateIDs.push(items[i].id);
			}
			var serviceName = "exportTeamspaces";
			var repositoryType = items[0].repository.type;
			// If they selected a large number of items, warn them that the action may take a while.

			var params = {
				repositoryId: items[0].repository.id,
				workspaceId: templateIDs
			};
			ecm.model.Request.setSecurityToken(params);

			if (items && items.length > this._exportLargeNumberPrompt && action) {
				if (this.confirmDialog)
					this.confirmDialog.destroy();

				this.confirmDialog = new ConfirmationDialog({
					text: ecm.messages.large_number_actions_confirmation_question,
					buttonLabel: ecm.messages.large_number_actions_continue_button,
					title: action.name,
					onExecute: lang.hitch(this, function() {
						this._performDownload(serviceName, repositoryType, params);
					})
				});
				this.confirmDialog.show();
			} else {

				this._performDownload(serviceName, repositoryType, params);
			}
		},

		actionPromoteVersion: function(repository, items) {
			this.logEntry("actionPromoteVersion");
			// Only single select action provided here.
			items[0].promoteVersion();
			this.logExit("actionPromoteVersion");
		},

		actionDemoteVersion: function(repository, items) {
			this.logEntry("actionDemoteVersion");
			// Only single select action provided here.
			items[0].demoteVersion();
			this.logExit("actionDemoteVersion");
		},

		actionViewAnnotation: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionViewAnnotation");
			if (this.annotationDialog) {
				this.annotationDialog.destroy();
			}
			this.annotationDialog = new AnnotationDialog({
				repository: repository,
				item: items[0]
			});
			this.annotationDialog.viewAnnotations();
			this.annotationDialog.show();
			this.logExit("actionViewAnnotation");
		},

		actionViewChildDocuments: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var methodName = "actionViewChildDocuments";
			this.logEntry(methodName);

			if (items && items.length > 0 && parameterMap) {
				var item = items[0];
				var widget = parameterMap["widget"];
				if (widget) {
					this.logDebug(methodName, "Widget found: " + widget);
					item.retrieveRelated("children", "items", lang.hitch(this, function(data) {
						this.logDebug(methodName, "Child result set retrieved!");
						if (data && data.isInstanceOf && (data.isInstanceOf(ecm.model.ResultSet) || data.isInstanceOf(ecm.model.FavoritesResultSet))) {
							if (widget.setResultSet) {
								widget.setResultSet(data);
							}
							if (widget.onOpenItem) {
								widget.onOpenItem(item, data);
							}
						}
						this._actionOpenCallback(items[0], resultSet, callback);
					}), lang.hitch(this, function(error) {
						this.logDebug(methodName, "Error occurred.");
					}));
				}
			}

			this.logExit(methodName);
		},
		
		
		
		actionEditWithNativeApplication: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			var methodName = "actionEditWithNativeApplication";
			this.logEntry(methodName);						
			if (items && items.length > 0) {
				if (repository.type == "cm") {
					var itemType = items[0].getContentClass();
					if (items[0].canNotContainDraft || (itemType && itemType.versionControl == "ALWAYS")) {
						this._showErrorMessage("edit_document_using_edit_service_error");
						return;	
					}
					var hasDraft = false;
					var isEditServiceDraft = true;
					if (!items[0].isInstanceOf(ecm.model.Teamspace)){
						hasDraft = items[0] && items[0].hasDraft && items[0].hasDraft ? items[0].hasDraft : false;
						isEditServiceDraft = items[0] && items[0].isEditServiceDraft && items[0].isEditServiceDraft ? items[0].isEditServiceDraft : false;
					}	
					//if the document is editing with OOS, user can not edit it with native application again
					if (hasDraft && !isEditServiceDraft) {
						this._showErrorMessage("edit_document_is_editing_by_oos_error");
						return;	
					}
				}
				if (ecm.model.desktop.streamlinePort && ecm.model.desktop.streamlinePort.toString().trim().length != 0){
					this._EditWithNativeApplication(repository, items, callback, teamspace, resultSet, parameterMap); 
				} else {
					//try to connect edit client again
					ecm.model.desktop._getEditClientPort(null, lang.hitch(this, function() {
						if (ecm.model.desktop.streamlinePort && ecm.model.desktop.streamlinePort.toString().trim().length != 0){
							this._EditWithNativeApplication(repository, items, callback, teamspace, resultSet, parameterMap); 
						} else {
							this._addDownloadLinkForEditServiceError();
							this._showErrorMessage("connect_to_the_streamline_service_error");
						}
					}));					
				}
			}			
			this.logExit(methodName);
		},
		
		_EditWithNativeApplication: function(repository, items, callback, teamspace, resultSet, parameterMap) {			
			var methodName = "_EditWithNativeApplication";
			this.logEntry(methodName);	
			var url = "https://localhost.ibm.net:" + ecm.model.desktop.streamlinePort;
			try {
				var xhr = new XMLHttpRequest();			
				var criteria = {
					"desktopId" : ecm.model.desktop.id,	
					"userId" : ecm.model.desktop.userId,
					"repositoryId" : repository.id,
					"docId" : items[0].id,
					"vsId" : items[0].vsId,
					"docName" : items[0].name,
					"mimeType" : items[0].mimetype,
					"mode" : "edit",
					"navigatorURL" : document.location.origin + document.location.pathname
				}
				xhr.open("POST", url, true);
			    xhr.timeout = 3000;
			    xhr.onload = lang.hitch(this, function () {
			        if (xhr.readyState == 4 && xhr.status == 200) {
			    	    if (xhr.response) {
					        console.log(xhr.response.trim());
			    	    }
			        }
			    });
			    xhr.onerror = lang.hitch(this, function () {
			    	this._addDownloadLinkForEditServiceError();
			    	this._showErrorMessage("open_edit_document_with_native_application_error");				    						    	
			    });
			    xhr.ontimeout = lang.hitch(this, function () {
			    	this._addDownloadLinkForEditServiceError();
			    	this._showErrorMessage("open_edit_document_with_native_application_error");      
			    });
				xhr.send(dojo.toJson(criteria));
			} catch (e) {
				console.log('catch', e);
			}
			this.logExit(methodName);
		},
		
		_addDownloadLinkForEditServiceError: function(){			
			if( navigator.userAgent.indexOf( "Window" ) > 0 ){				
				if( ecm.model.desktop.editWinClientInstallerAvailable ){
					this._changeEditServiceErrorMessage("ICNEditClient.exe");
				}			
			}
			if ( navigator.userAgent.indexOf( "Mac" ) > 0 ) {
				if( ecm.model.desktop.editMacClientInstallerAvailable ){
					this._changeEditServiceErrorMessage("ICNEditService.zip");
				}	
			}			
		},
		
		_changeEditServiceErrorMessage: function(installerName) {		
			var url = document.URL;
			var index = url.lastIndexOf( "?" );
			if( index > 1 ){
				url = url.substring(0, index);
			}
			if( url.lastIndexOf( "/" ) != url.length-1 ){
				url  =url + "/"
			}
			url = url + installerName;
			if(  ecm.messages.connect_to_the_streamline_service_error_userResponse.indexOf( "href" ) < 0 ) {
				ecm.messages.connect_to_the_streamline_service_error_userResponse = ecm.messages.connect_to_the_streamline_service_error_userResponse + "<br><br><br><span class='messageRef'><a href='" +url+ "'>" + ecm.messages.icn_edit_installer + "</a></span>";
			}
			if(  ecm.messages.open_edit_document_with_native_application_error_userResponse.indexOf( "href" ) < 0 ) {
				ecm.messages.open_edit_document_with_native_application_error_userResponse = ecm.messages.open_edit_document_with_native_application_error_userResponse + "<br><br><br><span class='messageRef'><a href='" +url+ "'>" + ecm.messages.icn_edit_installer + "</a></span>";
			}			
		},
		
		_showErrorMessage: function(messageKey) {
			if (messageKey && messageKey.length != 0) {
				var message = Message.createErrorMessage(messageKey);
				if (message) {
					ecm.model.desktop.addMessage(message);
				}
			}
		},
		
	   actionAddEditServiceDocument: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
		   var prefix = "NewEditDocument";
		   var categoryId = propertiesMap["id"].substring(prefix.length);
		   this._actionAddEditServiceDocument(categoryId, repository, items, callback, teamspace);
	   },
	   
	   actionCopyToEditService: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
		   this._actionAddEditServiceDocument(null, repository, items, callback, teamspace, items);
	   },
	   _actionAddEditServiceDocument: function(categoryId, repository, items, callback, teamspace, sourceDocument) {
			
			if (this._addDocumentFromEditServiceTemplateDialog) {
				this._addDocumentFromEditServiceTemplateDialog.destroyRecursive();
			}
			var source = null;
			if (sourceDocument && sourceDocument.length > 0) {
				source = sourceDocument[0];
			}
			this._addDocumentFromEditServiceTemplateDialog = AddDocumentFromEditServiceTemplateDialog({ categoryId: categoryId, sourceDocument: source});
			
			var parentFolder = null;
			if (items && items.length > 0) {
				if (!items[0].isFolder()) {
					var parent = items[0].parent;
					if (parent && parent.isInstanceOf && parent.isInstanceOf(ecm.model.Favorite)) { // If the parent item is a favorite...
						if (parent.item && parent.item.isFolder && parent.item.isFolder()) { // If this is a folder favorite, use the folder item.
							parent = parent.item;
						} else {
							parent = null;
						}
					} else if (parent && !parent.isFolder()) {
						parent = null;
					}
					parentFolder = parent;
				} else {
					parentFolder = items[0];
				}
			}

			// The parent folder repository may be different than the one passed above in P8.
			// Users can add documents/folders to folder work item attachments in other object stores.
			var targetRepository = (parentFolder && parentFolder.repository) || repository;

			// if adding to a folder, check if the folder is in a teamspace so that we can show the teamspace classes/ETs in the add dialog
			var checkForTeamspace = parentFolder && parentFolder.repository.teamspacesEnabled && !teamspace;
			if (checkForTeamspace) {
				parentFolder.retrieveTeamspace(lang.hitch(this, function(teamspace) {
					this._showAddDocDialogForEditService(repository, parentFolder, targetRepository, teamspace);
				}));
			} else {
				this._showAddDocDialogForEditService(repository, parentFolder, targetRepository, teamspace);
			}
		
		},
		
		_showAddDocDialogForEditService: function(repository, parentFolder, targetRepository, teamspace){
			var addUsingEntryTemplate = false;
			var targetRepository = (parentFolder && parentFolder.repository) || repository;

			if( (!parentFolder || parentFolder && parentFolder.rootFolder && parentFolder.repository ) && "entryTemplate" == ecm.model.desktop.documentAddMode ){
				addUsingEntryTemplate = true;
			}
			if( addUsingEntryTemplate ){
				if ( targetRepository && ( targetRepository._isP8() || targetRepository._isCM() )) {
					if( !parentFolder ){
						parentFolder = targetRepository.rootItem;
					}
					targetRepository.retrieveEntryTemplates(lang.hitch(this, function(entryTemplates, document_ET_count, folder_ET_count) {
						if( document_ET_count > 0 ){
							//honor folder association ets
							this._addDocumentFromEditServiceTemplateDialog.show(targetRepository, parentFolder, true, false, lang.hitch(this, function(item) {
								this.actionEditWithNativeApplication(repository,  [item]);
							}), teamspace, false);
						}else{
							//using entry templates to do adding.
							this._addDocumentFromEditServiceTemplateDialog.show(targetRepository, parentFolder, true, false, lang.hitch(this, function(item) {
								this.actionEditWithNativeApplication(repository,  [item]);
							}), teamspace, true);
						}
					}), "Document", parentFolder.id, null, parentFolder.objectStore, lang.hitch(this, function() {
						//using entry templates to do adding.
						this._addDocumentFromEditServiceTemplateDialog.show(targetRepository, parentFolder, true, false, lang.hitch(this, function(item) {
							this.actionEditWithNativeApplication(repository,  [item]);
						}), teamspace, true);			
					}))
				} 
			}else{
				this._addDocumentFromEditServiceTemplateDialog.show(targetRepository, parentFolder, true, false, lang.hitch(this, function(item) {
					this.actionEditWithNativeApplication(repository,  [item]);
				}), teamspace, false);
			}
		},
		

		_convertItems: function(items) {
			if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.WorkItem)) {
				var contentItems = [];
				for ( var i in items) {
					contentItems.push(this._convertItem(items[i]));
				}
				return contentItems;
			} else {
				return items;
			}
		},

		_convertItem: function(item) {
			return item.contentItem;
		},

		/**
		 * Deletes the given asynchronous task.
		 * 
		 * @param repository
		 *            The authenticating repository associated with this task.
		 * @param items
		 *            The array of async tasks to be deleted
		 * @param callback
		 *            The callback function when the delete completes.
		 * @param teamspace
		 *            Not applicable.
		 * @param resultset
		 *            The result set this async task came from.
		 * @param parameterMap
		 *            Additional parameters passed to this delete function.
		 */
		actionDeleteAsyncTask: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			if (items) {
				var message = ecm.messages.delete_single_confirmation_question;
				if (items.length > 1) {
					message = string.substitute(ecm.messages.delete_multiple_confirmation_question, [
						items.length
					]);
				}
				//Use the delete confirmation dialog.
				var confirmDelete = new ConfirmationDialog({
					text: message,
					buttonLabel: ecm.messages.delete_confirmation_button,
					onExecute: function() {
						for ( var i in items) {
							var item = items[i];
							if (item.isInstanceOf && item.isInstanceOf(ecm.model.AsyncTask)) {
								item.deleteTask();
							}
						}
					}
				});
				confirmDelete.startup();
				confirmDelete.show();
				dialog_util.manage(confirmDelete);
			}
		},

		/**
		 * Schedules the a new async task by presenting the async task creation dialog.
		 * 
		 * @param repository
		 *            The authenticating repository associated with this task.
		 * @param items
		 *            The array of async tasks to be scheduled
		 * @param callback
		 *            The callback function when the scheduling completes.
		 * @param teamspace
		 *            Not applicable.
		 * @param resultset
		 *            Not applicable
		 * @param parameterMap
		 *            Additional parameters passed to this delete function.
		 * @param action
		 *            The action which called this function.
		 */
		actionScheduleAsyncTask: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			if (action) {
				var asyncTaskType = ecm.model.desktop.taskManager.getAsyncTaskType(action.id);
				require([
					asyncTaskType.taskCreationDialogDijitClass
				], lang.hitch(this, function(cls) {
					var wizard = new cls({
						asyncTaskType: asyncTaskType
					});
					dialog_util.manage(wizard);
					wizard.show();
				}));
			}
		},

		/**
		 * Share the item.
		 * 
		 * @param repository
		 *            The authenticating repository associated with this task.
		 * @param items
		 *            The array of items.
		 */
		actionShare: function(repository, items, callback, teamspace, resultSet) {
			this.logEntry("actionShare");
			if (this.shareDialog)
				this.shareDialog.destroyRecursive();
	
			if (this._isShareConfigured(repository)){
		
				// For P8, if this is folder browse or released version search results, see if a later minor version is shared.
				// If so, display the dialog for that version.
				var displayDialogForThisItem = true;
				if (items[0].repository.type == "p8" && (resultSet && ((resultSet.parentFolder && resultSet.parentFolder.isFolder()) || (resultSet.searchTemplate && resultSet.searchTemplate.moreOptions && resultSet.searchTemplate.moreOptions.versionOption && resultSet.searchTemplate.moreOptions.versionOption == "releasedversion")))) {
					var sharedVersionNumber = items[0].getSharedVersionNumber();
					if (sharedVersionNumber.indexOf(".") > 0) {
						var thisVersionNumber = items[0].attributes.MajorVersionNumber + "." + items[0].attributes.MinorVersionNumber;
						if (sharedVersionNumber > thisVersionNumber) {
							displayDialogForThisItem = false;
							var sharedItemId = items[0].getSharedItemId();
							var selectedShareVersion = items[0].attributes.MajorVersionNumber + "." + items[0].attributes.MinorVersionNumber;
							repository.retrieveItem(sharedItemId, lang.hitch(this, function(item) {
								if(repository._isP8()  && !item.objectStore["supportsBoxShare"]){
									if (this._errorDialog) {
										this._errorDialog.destroyRecursive();
									}
									this._errorDialog = new ErrorDialog();
									this._errorDialog.showMessage(Message.createErrorMessage("rbr_not_support_share_error"));
								} else {
									this.shareDialog = new ShareDialog({
										item: item,
										selectedShareVersion: selectedShareVersion
									});
									this.shareDialog.show();
								}
							}));
						}
					}
				}
				if (displayDialogForThisItem) {
					repository.retrieveItem(items[0].id, lang.hitch(this, function(item) {
						if(repository._isP8()  && !item.objectStore["supportsBoxShare"]){
							if (this._errorDialog) {
								this._errorDialog.destroyRecursive();
							}
							this._errorDialog = new ErrorDialog();
							this._errorDialog.showMessage(Message.createErrorMessage("rbr_not_support_share_error"));
						} else {
							// If this version history or all version search results, don't display the radio buttons allowing the user to 
							// select a version.
							var allowVersionChoice = true;
							if (resultSet && ((resultSet.context == "PropertiesVersions") || (resultSet._versionLookup && resultSet._versionLookup[repository.id] == "allversions"))) {
								allowVersionChoice = false;
							}
							this.shareDialog = new ShareDialog({
								item: items[0],
								allowVersionSelection: allowVersionChoice
							});
							this.shareDialog.show();

						}
					}));		
				}
			}
			this.logExit("actionShare");
		},

		_isClassSetupForSharing: function(item, callback) {
			if (item.repository.type == "cm") {
				var contentClass = item.repository.getContentClass(item.template);
				if (contentClass.supportsBoxShareTracking) {
					callback(true);
				} else {
					// The class may not have been initialized. Get the attribute definitions that will initialize
					// the supportsBoxShareTracking flag.
					contentClass.retrieveAttributeDefinitions(lang.hitch(this, function() {
						if (contentClass.supportsBoxShareTracking) {
							callback(true);
						} else {
							callback(false);
						}
					}));
				}
			} else {
				callback(true);
			}
		},

		actionUnshare: function(repository, items, callback, teamspace, resultSet, parameterMap, action) {
			this.logEntry("actionUnshare");
			
			if (this._isShareConfigured(repository)){
			
				var item = items[0];
				this._isClassSetupForSharing(item, lang.hitch(this, function(isClassSetUpForSharing) {
					if (isClassSetUpForSharing != undefined && isClassSetUpForSharing == true) {
						item.hasPrivilegeToDeleteShareCallback(lang.hitch(this, function(response) {
							if (response != undefined && response == true) {
								item.getShareData(lang.hitch(this, function(response) {
									if (response.link) {
										if (this._messageDialog) {
											this._messageDialog.destroyRecursive();
										}
										this._messageDialog = new ConfirmationDialog({
											text: ecm.messages.unshare_confirm,
											buttonLabel: ecm.messages.unshare_button,
											onExecute: function() {
												items[0].deleteShare();
											}
										});
										this._messageDialog.show();
									}
								}));
							} else {
								if (this._errorDialog) {
									this._errorDialog.destroyRecursive();
								}
								this._errorDialog = new ErrorDialog();
								this._errorDialog.showMessage(Message.createErrorMessage("delete_share_permission_error"));
							}
						}));
					} else {
						if (this._errorDialog) {
							this._errorDialog.destroyRecursive();
						}
						this._errorDialog = new ErrorDialog();
						this._errorDialog.showMessage(Message.createErrorMessage("class_not_support_share_error", [
							item.template_label
						]));
					}
				}));
			}
			this.logExit("actionUnshare");
		},
		
		actionNewWordDocument: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
			this._actionAddOfficeDocument(1, repository, items, callback, teamspace);
		},
		
		actionNewExcelDocument: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
			this._actionAddOfficeDocument(3, repository, items, callback, teamspace);
		},
		
		actionNewPowerPointDocument: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
			this._actionAddOfficeDocument(2, repository, items, callback, teamspace);
		},
		
		// copy a document to OOS
		actionCopyToOfficeOnline: function(repository, items, callback, teamspace, resultSet, virtualItems, propertiesMap, virtualItemObjects) {
			this._actionAddOfficeDocument(null, repository, items, callback, teamspace, items);
		},
		
		_actionCanAddOfficeDocument: function(type, repository, items, callback, teamspace, sourceDocument) {
			if (this._addOfficeOnlineDocumentDialog) {
				this._addOfficeOnlineDocumentDialog.destroyRecursive();
			}
			
			if (!ecm.model.desktop.officeOnlineServiceURL) {
				this._showEditWithOfficeOnlineErrorMessage(ecm.messages.new_document_using_office_online_error);
			} else {
				var source = null;
				if (sourceDocument && sourceDocument.length > 0) {
					source = sourceDocument[0];
				}
				this._addOfficeOnlineDocumentDialog = AddDocumentFromOfficeTemplateDialog({ documentType: type, templateItem: source});
				
				var parentFolder = null;
				if (items && items.length > 0) {
					if (!items[0].isFolder()) {
						var parent = items[0].parent;
						if (parent && parent.isInstanceOf && parent.isInstanceOf(ecm.model.Favorite)) { // If the parent item is a favorite...
							if (parent.item && parent.item.isFolder && parent.item.isFolder()) { // If this is a folder favorite, use the folder item.
								parent = parent.item;
							} else {
								parent = null;
							}
						}
						else if (parent && !parent.isFolder()) {
							parent = null;
						}
						parentFolder = parent;
					} else {
						parentFolder = items[0];
					}
				}
	
				// The parent folder repository may be different than the one passed above in P8.
				// Users can add documents/folders to folder work item attachments in other object stores.
				var targetRepository = (parentFolder && parentFolder.repository) || repository;
				//this._addOfficeOnlineDocumentDialog.setDefaultContentClass(defaultContentClass);
	
				// check if add with entry template:
				var useEntryTemplate = false;
				if(parentFolder == null || (parentFolder && parentFolder.rootFolder)) {
					useEntryTemplate = ecm.model.desktop.documentAddMode == "entryTemplate";
				}
				
				// if adding to a folder, check if the folder is in a teamspace so that we can show the teamspace classes/ETs in the add dialog
				var checkForTeamspace = parentFolder && parentFolder.repository.teamspacesEnabled && !teamspace;
				if (checkForTeamspace) {
					parentFolder.retrieveTeamspace(lang.hitch(this, function(teamspace) {
						this._addOfficeOnlineDocumentDialog.show(targetRepository, parentFolder, true, false, lang.hitch(this, function(item) {
							var reservationId = item.reservationId; // use reservation ID if it is available 
							var docid = reservationId; // use reservation ID if it is available
							if (docid == null) {
								docid = item.id; // fall back on version ID if reservation ID not available
							}
							this.actionEditWithOfficeOnline(repository, [item]);
						}), teamspace, useEntryTemplate);
					}));
				} else {
					this._addOfficeOnlineDocumentDialog.show(targetRepository, parentFolder, true, false, lang.hitch(this, function(item) {
						var reservationId = item.reservationId; // use reservation ID if it is available 
						var docid = reservationId; // use reservation ID if it is available
						if (docid == null) {
							docid = item.id; // fall back on version ID if reservation ID not available
						}
						this.actionEditWithOfficeOnline(repository,  [item]);
					}), teamspace, useEntryTemplate);
				}
			}
		},
		
		_actionAddOfficeDocument: function(type, repository, items, callback, teamspace, sourceDocument) {
			this._request = ecm.model.Request.postServiceAPI("oosverify", null, "text/json", {
				requestParams: {
					URL:""
				},
				requestCompleteCallback: lang.hitch(this, function(response){
					this._actionCanAddOfficeDocument(type, repository, items, callback, teamspace, sourceDocument);
				}),
				requestFailedCallback: lang.hitch(this, function(response) {
				})
			});
		},
		
		actionEditWithOfficeOnline: function(repository, items, callback, teamspace, resultSet, parameterMap) {
			if (!ecm.model.desktop.officeOnlineServiceURL) {
				this._showEditWithOfficeOnlineErrorMessage(ecm.messages.edit_document_using_office_online_error);
			} else {
				if (repository.type=="cm" && items[0].canNotContainDraft)
				{
					this._showEditWithOfficeOnlineErrorMessage1(ecm.messages.edit_document_using_office_online_error);
					return;
				}
				
				//Stand alone window
				if (parameterMap && parameterMap.standalone) {		
					// Get the current version of the item.
					if (!items[0].currentVersion){
						items[0].retrieveVersion("current", lang.hitch(this, function(currentVersion){	
							if( currentVersion == null)
							{
								currentVersion = items[0];
							}
							this._displayOfficeOnlineDialog(currentVersion, "edit", true);
						}));
					}
					else {
						this._displayOfficeOnlineDialog(items[0], "edit", true);
					}				
				}
				else {
					if (!this._officeOnlineWindows) {
						this._officeOnlineWindows = [];
					}					
					var editWindow = this._officeOnlineWindows[items[0].id];
					if (editWindow && !editWindow.closed) {
						editWindow.focus();
					} else {
						var height = screen.height * .7;
						var width = screen.width * .8;
						var top = (screen.height - height) / 2;
						var left = (screen.width - width) / 2;
					
						var itemIdParts = items[0].id.split(",");					
						var id = null;
						if( itemIdParts.length == 1){
							id = itemIdParts[0];
						}
						else {
							id = itemIdParts[2];
						}
					
						// Build the URL to the launch action page.				 
						var url = ecm.model.desktop.servicesUrl + "/launchaction.jsp?actionId=EditWithOfficeOnline&desktopId=" + ecm.model.desktop.id + "&repositoryId=" + repository.id + "&documentIds="+ id + "&repositoryType=" +repository.type;
						var parameters = "status=yes,location=no,scrollbars=yes,menubar=no,toolbar=no,personalbar=no,resizable=yes,top=" + top + ", left=" + left + ", width=" + width + ", height=" + height;
					
						var milliseconds = new Date().getTime();
						var windowName = "officeOnlineWindow" + milliseconds;
						this._officeOnlineWindows[items[0].id] = window.open(url, windowName, parameters);
					}
				}
			}
		},
		
		_showEditWithOfficeOnlineErrorMessage: function(errorMessage) {
			var msg = new Message({
				id: "id???",
				number: "2651",
				level: 4,
				text: errorMessage,
				explanation:  ecm.messages.edit_document_using_office_online_error_explanation,
				userResponse: ecm.messages.edit_document_using_office_online_error_userResponse
			});
			ecm.model.desktop.addMessage(msg);
		},
		
		_showEditWithOfficeOnlineErrorMessage1: function(errorMessage) {
			var msg = new Message({
				id: "id???",
				number: "2651",
				level: 4,
				text: errorMessage,
				explanation:  ecm.messages.edit_document_using_office_online_error_explanation1,
				userResponse: ecm.messages.edit_document_using_office_online_error_userResponse1
			});
			ecm.model.desktop.addMessage(msg);
		},
		
		_displayOfficeOnlineDialog: function(item, action, standalone) {
			var request = ecm.model.Request.postService("office/getOfficeOnlineActionUrlAction", null, {
				desktopId: ecm.model.desktop.id,
				repositoryId: item.repository.id,
				repostioryType: item.repository.type,
				displayAction: action,
				documentId: item.id
			}, "text/json", null, function(response) {									
				if (this.officeOnlineDialog) {
					this.officeOnlineDialog.destroy();
				}
				
				this.officeOnlineDialog = new OfficeOnlineDocumentDialog({
					action: action,
					standalone: standalone,
					actionUrl: response.actionUrl,
					accessToken: response.accessToken
				});
				
				if (standalone){
					domStyle.set(this.officeOnlineDialog.domNode, "height", "100%");
					domStyle.set(this.officeOnlineDialog.domNode, "width", "100%");
					aspect.after(this.officeOnlineDialog, "onHide", lang.hitch(this, function(){
						window.close();
					}));
				}
				else{
					domStyle.set(this.officeOnlineDialog.domNode, "height", "80%");
					domStyle.set(this.officeOnlineDialog.domNode, "width", "80%");
				}
				this.officeOnlineDialog.show(); 
			});		
		},
		
		/**
		 * Verifies share is configured
		 * 
		 * @since 3.0
		 * @private
		 */
		_isShareConfigured: function(repository){
			this.logEntry("_isShareConfigured");
			var configured = true;
		
			if (!ecm.model.desktop.taskManager || !ecm.model.desktop.taskManager.isEnabled) {
				this.logDebug("Task manager not configured for sharing");
				configured = false;
			} else if (!repository || !repository.taskManagerProxyUserId) {
				this.logDebug("Task manager user not configured on repository for sharing");
				configured = false;
			} else if (!repository.supportsBoxShare) {
				this.logDebug("Share not enabled for repository");
				configured = false;
			} else {
				var shareRepositoryId = ecm.model.desktop.shareRepositoryId;
				if (!shareRepositoryId) {
					this.logDebug("Box share repository not configured on desktop");
					configured = false;
				}
			}
			
			if (!configured){
				this._showErrorMessage("share_not_configured_error");
			}
			
			this.logExit("_isShareConfigured");
			return configured;
		}
	});

	/**
	 * @private
	 */
	CommonActionsHandler._viewAction = new Action({
		id: "View",
		name: "Open",
		icon: "View.png",
		multiDoc: true,
		global: false,
		privileges: [
			"privViewDoc"
		],
		action: "actionView"
	});

	/**
	 * @private
	 */
	CommonActionsHandler._previewAction = new Action({
		id: "Preview",
		name: "Preview",
		icon: "Preview.png",
		multiDoc: true,
		global: false,
		privileges: [
			"privViewDoc"
		],
		action: "actionPreview"
	});

	/**
	 * @private
	 */
	CommonActionsHandler._mergeSplitAction = new Action({
		id: "MergeSplit",
		name: "Document Builder",
		icon: "MergeSplit.png",
		multiDoc: true,
		global: false,
		privileges: [
			"privViewDoc"
		],
		repositoryTypes: "p8,cm",
		action: "actionMergeSplit"
	});

	return CommonActionsHandler;
});

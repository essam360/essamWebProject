/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"./_ModelObject",
	"./_OutsideInSupportedMixin",
	"./Conversion",
	"./FavoritesResultSet"
], function(declare, lang, array, _ModelObject, _OutsideInSupportedMixin, conversion, FavoritesResultSet) {

	/**
	 * Constructs an action.
	 * 
	 * @param properties
	 *            The properties for the action. The properties can be any of the public fields defined below and on
	 *            ecm.model._ModelObject.
	 * @name ecm.model.Action
	 * @class Represents a user-executable action. This action can be configured for a desktop in the IBM Content
	 *        Navigator administration tool.
	 * @augments ecm.model._ModelObject
	 */
	var Action = declare("ecm.model.Action", [
		_ModelObject,
		_OutsideInSupportedMixin
	], {
		/** @lends ecm.model.Action.prototype */

		/**
		 * If this action represents a submenu, this contains an array of action objects for the actions in the submenu.
		 */
		subActions: null,

		/**
		 * A comma delimited string listing the repository types that this action supports. The complete list of
		 * repository types is: "cm,cmis,od,p8".
		 */
		repositoryTypes: "",

		/**
		 * Boolean value that is true if the action supports multiple items.
		 */
		multiDoc: false,

		/**
		 * Boolean value that is true if the action does not require an item.
		 */
		global: false,

		/**
		 * An array of privileges that this action requires to be enabled.
		 */
		privileges: null,

		/**
		 * The name of the function within the action handler that handles this action. See
		 * {@link ecm.widget.layout.BaseActionHandler}.
		 */
		action: null,

		/**
		 * If the action is provided by a plugin, this contains the id of the plugin.
		 */
		pluginId: null,

		/**
		 * An icon cascading style sheet class to use for buttons or menu items representing this action.
		 * 
		 * @since 2.0.3
		 */
		iconClass: null,

		/**
		 * The type of the menu that contains this action.
		 * 
		 * @since 2.0.3
		 */
		menuType: null,

		/**
		 * The id of the menu that contains this action.
		 * 
		 * @since 2.0.3
		 */
		menuId: null,

		/**
		 * The id of the submenu if this action is contained by a submenu.
		 * 
		 * @since 2.0.3
		 */
		submenuId: null,

		/**
		 * @private Constructs the action.
		 */
		constructor: function() {
			if (!this.subActions) {
				this.subActions = [];
			}
			if (this.label) {
				this.name = this.label;
				delete this.label;
			}
			if (this.serverTypes) {
				this.repositoryTypes = this.serverTypes;
				delete this.serverTypes;
			}
			if (this.privilegeName) {
				this.privileges = this.privilegeName.split(",");
				delete this.privilegeName;
			}
		},

		/**
		 * Returns true if this action should be visible for the given repository and items.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param items
		 *            An array of {@link ecm.model.Item} objects or derivations of Item object
		 * @param repositoryTypes
		 *            An array of repository types.
		 */
		isVisible: function(repository, items, repositoryTypes, teamspace) {
			// implement a test of server type and list type and return true if this action should appear
			if (this.repositoryTypes == null || this.repositoryTypes == "") {
				return this._isVisibleForItems(repository, items);
			} else if (repositoryTypes && repositoryTypes.length > 0) {
				return this._isVisibleToAnyOfRepositoryTypes(repositoryTypes);
			} else if (repository) {
				var serverTypes = this.repositoryTypes.split(',');
				for (i in serverTypes) {
					if (serverTypes[i] == repository.type) {
						return this._isVisibleForItems(repository, items, teamspace);
					}
				}
				return false;
			} else {
				return false;
			}
		},

		_isVisibleToAnyOfRepositoryTypes: function(repositoryTypes) {
			if (!this.repositoryTypes)
				return true;

			var serverTypes = this.repositoryTypes.split(',');
			var visible = array.some(repositoryTypes, function(type) {
				return array.indexOf(serverTypes, type) > -1;
			});

			return visible;
		},

		/**
		 * @private
		 */
		_isVisibleForItems: function(repository, items, teamspace) {
			var isVisible = true;
			if (this.id == "EditTeamspaceClasses") {
				if (items[0].item) {
					isVisible = items[0].item.usesClasses;
				} else {
					isVisible = items[0].usesClasses;
				}
			} else if (this.id == "EditTeamspaceEntryTemplates") {
				if (items[0].item) {
					isVisible = !items[0].item.usesClasses;
				} else {
					isVisible = !items[0].usesClasses;
				}
			} else if (this.id == "CreateTemplate") {
				isVisible = repository.getPrivilege("addTeamspaceTemplate");
			} else if (this.id == "CreateTeamSpace") {
				isVisible = repository.getPrivilege("addTeamspace");
			} else if (this.id == "ManageTeamspaces") {
				isVisible = repository.getPrivilege("manageTeamspace");
			} else if (this.id == "TransferWorkflow") {
				var item = items[0].item ? items[0].item : items[0];
				if ((item.mimetype == "") || (item.mimetype != "application/x-filenet-workflowdefinition" && item.mimetype != "application/x-filenet-xpdlworkflowdefinition")) {
					isVisible = false;
				}
			} else if (this.id == "EditEntryTemplate") {
				if (items && items.length > 0) {
					var item = items[0].item ? items[0].item : items[0];
					// IBM Content Navigator entry templates only.
					isVisible = (item && item.mimetype && item.mimetype.indexOf("entrytemplate") > -1 && item.mimetype.indexOf("/x-icn") > -1);
				}
			} else if (this.id == "ConvertEntryTemplate") {
				if (items && items.length > 0) {
					var item = items[0].item ? items[0].item : items[0];
					// Workplace XT entry templates only.
					isVisible = (item && item.mimetype && item.mimetype.indexOf("entrytemplate") > -1 && item.mimetype.indexOf("/x-filenet") > -1);
				}
			} else if (this.id == "Share" || this.id == "Unshare") {
				if (items && items.length && ecm.model.desktop.shareEnabled && repository.boxShareEnabled) {
					isVisible = true;
					for (var i = 0; i < items.length; i++) {
						if ((items[i].mimetype != undefined && items[i].mimetype == "") || (!items[i].hasContent())) {
							isVisible = false; // if no content, then hide share and unshare
						} else if (items[i].mimetype && (items[i].mimetype == "application/x-filenet-workflowdefinition" || items[i].mimetype == "application/x-filenet-documentpolicy" || items[i].mimetype == "application/x-filenet-itxformtemplate" || items[i].mimetype == "application/x-filenet-formdata" || items[i].mimetype == "application/x-filenet-itxformtemplate")) {
							isVisible = false; // if workflow or form data mimetypes, then hide share and unshare
						}
					}
				} else {
					isVisible = false;
				}
			} else if (this.id == "BoxCopy") {
				if (items && items.length && ecm.model.desktop._getNumOfBoxCopyRepositories(repository) > 0) {
					isVisible = true;
					for (var i = 0; i < items.length; i++) {
						if ((items[i].mimetype != undefined && items[i].mimetype == "") || (!items[i].hasContent())) {
							isVisible = false; // if no content, then hide share and unshare
						} else if (items[i].mimetype && (items[i].mimetype == "application/x-filenet-workflowdefinition" || items[i].mimetype == "application/x-filenet-documentpolicy" || items[i].mimetype == "application/x-filenet-itxformtemplate" || items[i].mimetype == "application/x-filenet-formdata" || items[i].mimetype == "application/x-filenet-itxformtemplate")) {
							isVisible = false; // if workflow or form data mimetypes, then hide share and unshare
						}
					}
					if (isVisible) {
						if (!repository._isBox() && !repository["boxCopyEnabled"]) {
							isVisible = false;
						}
					}
				} else {
					isVisible = false;
				}
			} else if (this.id == "EnableSync" || this.id == "DisableSync") {
				if (items && items.length && ecm.model.desktop.syncServer.enabled) {
					var allSyncEnabled = true;
					var allSyncDisabled = true;
					for (var i = 0; i < items.length; i++) {
						allSyncEnabled = allSyncEnabled && items[i].syncEnabled;
						allSyncDisabled = !(!allSyncDisabled || items[i].syncEnabled);
					}
					if (this.id == "EnableSync" && allSyncDisabled) {
						isVisible = true;
					} else if (this.id == "DisableSync" && allSyncEnabled) {
						isVisible = true;
					} else {
						isVisible = false;
					}

				} else {
					isVisible = false;
				}
			} else if (this.id == "EditWithNativeApplication") {
				if ((repository._isP8() || repository._isCM()) && ecm.model.desktop.streamlineEnabled && repository.editServiceEnabled) {	
					isVisible = true;
				} else {
					isVisible = false;
				}
			} else if (this.id == "NewEditServiceDocument" ) {
				//dummy action for cloning new edit actions
				isVisible = false;				 							 			
			} else if (this.id.indexOf("HiddenEditDocument") == 0) {
				isVisible = false;	
			} else if (this.id.indexOf("NewEditDocument") == 0) {
				if ((repository._isP8() || repository._isCM()) && ecm.model.desktop.streamlineEnabled && repository.editServiceEnabled) {	
					isVisible = true;
				} else {
					isVisible = false;
				}					 							 			
			} else if (this.id == "CopyToEditService") {
				if ((repository._isP8() || repository._isCM()) && ecm.model.desktop.streamlineEnabled && repository.editServiceEnabled) {	
					isVisible = true;
				} else {
					isVisible = false;
				}
			} else if (this.id == "EditWithOfficeOnline" || this.id == "CopyToOfficeOnline") {	
				// CM and CMIS will be supported in future releases
				if ((repository._isP8() || repository._isCM()) && ecm.model.desktop.officeOnlineEnabled) {
					var officeOnlineMimeTypes = {
						"application/vnd.oasis.opendocument.spreadsheet": true,
						"application/vnd.ms-excel.sheet.binary.macroEnabled.12": true,
						"application/vnd.ms-excel.sheet.macroEnabled.12": true,
						"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": true,		
						"application/vnd.oasis.opendocument.presentation": true,
						"application/x-vnd.oasis.opendocument.presentation": true,
						"application/vnd.openxmlformats-officedocument.presentationml.presentation": true,
						"application/vnd.openxmlformats-officedocument.presentationml.slideshow": true,
						"application/vnd.openxmlformats-officedocument.presentationml.template": true,
						"application/vnd.ms-word.document.macroEnabled.12": true,
						"application/vnd.openxmlformats-officedocument.wordprocessingml.document": true,
						"application/vnd.oasis.opendocument.text": true,
						"application/x-vnd.oasis.opendocument.text": true
					}							
					if (repository.officeOnlineEnabled && officeOnlineMimeTypes[items[0].mimetype] && items[0].hasContent()) {	
						isVisible = true;
					} else {
						isVisible = false;
					}					 				
				} else {
					isVisible = false;
				}
			} else if (this.id == "NewWordDocument" || this.id == "NewExcelDocument" || this.id == "NewPowerPointDocument") {
				// CM and CMIS will be supported in future releases
				if ((repository._isP8() || repository._isCM()) && ecm.model.desktop.officeOnlineEnabled && repository.officeOnlineEnabled) {	
					isVisible = true;
				} else {
					isVisible = false;
				}					 							 			
			} else if (this.id == "AddToFavorites") {
				if (!items || items.length == 0)
					isVisible = false;
				else if (items[0].isSystemItem && items[0].isSystemItem() && !items[0].isEntryTemplate() && !(items[0].isInstanceOf && items[0].isInstanceOf(ecm.model._SearchTemplateBase))) {
					isVisible = false;
				}
			} else if (this.id == "ImportUsingTemplate" || this.id == "CreateFolderUsingTemplate") {
				// These global actions are always available for a P8 repository to support legacy WorkplaceXT entry templates.
				// They are only available for a CM repository if entry template support has been deployed and enabled.
				isVisible = repository._isP8() || (repository._isCM() && repository.isEntryTemplateSupported() && repository.entryTemplatesEnabled);
			} else if (this.id == "CheckIn") {
				if (repository._isBox() && items) {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						if (item.mimetype == "application/x-box-note") {
							isVisible = false;
							break;
						}
					}
				}
			} else if (this.id == "DownloadAsPdf") {
				if (repository._isBox() && items) {
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						if (item.mimetype == "application/vnd.google-apps.document" || item.mimetype == "application/vnd.google-apps.spreadsheet") {
							isVisible = false;
							break;
						}
					}
				}
			} else if (this.id == "MergeSplit") {
				// Only available if merge and split is enabled for this desktop and at least one document 
				// with PDF or TIFF content was selected from the current repository.
				// The supported repository types have already been checked.
				isVisible = (   items && items.length > 0 
						     && ecm.model.desktop.mergeSplitEnabled
						     && array.some(items, function(item) {
						    	    if (item.isInstanceOf(ecm.model.Favorite)) {
						    	    	item = item.item;
						    	    }
						    	    return (   item.repository && (item.repository.id == repository.id)
						    	    		&& item.hasContent()
						    	    		&& (item.mimetype == "application/pdf" || (lang.isFunction(item.isContentTiff) && item.isContentTiff()))
						    	    );
						    	})
						    );
			} else if (this.id == "ResumeWF") {
				if (items[0].hidden_resume) {
					isVisible = false;
				}
			} else if (this.id == "RemoveWF") {
				if (items[0].hidden_remove) {
					isVisible = false;
				}
			} else if (this.id == "SuspendWF") {
				if (items[0].hidden_suspend) {
					isVisible = false;
				}
			} else if (this.id == "EditWF") {
				if (items[0].hidden_Changepriority && items[0].hidden_Changeowner && items[0].hidden_ChangeProcess) {
					isVisible = false;
				}
			} else if (this.id =="DownloadAll") {
				if (items[0].celement != null) {
					isVisible = false;
				}
			} else if (this.id =="DownloadAllAsPdf") {
				if (items[0].celement != null) {
					isVisible = false;
				}
			} else if (this.id =="SendAttachmentsAll") {
				if (items[0].celement != null) {
					isVisible = false;
				}
			} else if (this.id =="SendAllAsPDF") {
				if (items[0].celement != null) {
					isVisible = false;
				}
			} else if (this.id =="PrintDocAll") {
				if (items[0].celement != null) {
					isVisible = false;
				}
			}
			return isVisible;
		},

		/**
		 * Returns true if this action is enabled for the given repository, list type, and items.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param listType
		 *            A string value indicating the type of object in the items list
		 * @param items
		 *            An array of {@link ecm.model.Item} objects or derivations of Item object
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object (can be null).
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object (can be null)
		 */
		isEnabled: function(repository, listType, items, teamspace, resultSet) {
			return this.canPerformAction(repository, items, listType, teamspace, resultSet);
		},

		/**
		 * Returns true if the action can be performed with the given repository and items.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param itemList
		 *            An array of {@link ecm.model.Item} objects or derivations of Item object
		 * @param listType
		 *            A string value indicating the type of object in the items list
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object (can be null).
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object (can be null)
		 */
		canPerformAction: function(repository, itemList, listType, teamspace, resultSet) {
			var methodName = "canPerformAction";
			//this.logEntry("canPerformAction");//, "repo: " + repository + ", listType: " + listType);
			var canPerform = true;
			var items = [];

			if ((resultSet && resultSet.isInstanceOf && resultSet.isInstanceOf(ecm.model.FavoritesResultSet)) || listType == "Favorites") {
				if (!itemList || itemList.length == 0)
					return false;

				if ((this.id != "DeleteFavorite" && this.id != "Edit" && this.id != "SearchProperties" && this.id != "EnableSync" && this.id != "DisableSync") && itemList.length > 1) {
					// multi-select actions on favorites is only allowed for DeleteFavorite, Sync actions
					// and edit properties
					return false;
				}

				if (this.id == "EnableSync" && ecm.model.desktop.syncServer.canSyncItem(itemList[0]) && !itemList[0].syncEnabled) {
					return true;
				} else if (this.id == "EnableSync") {
					return false;
				}
				if (this.id == "DisableSync" && ecm.model.desktop.syncServer.enabled && itemList[0] && itemList[0].repository && itemList[0].repository.syncEnabled && itemList[0].syncEnabled) {
					return true;
				} else if (this.id == "DisableSync") {
					return false;
				}

				items = [];
				for ( var i in itemList) {
					items.push(itemList[i].item ? itemList[i].item : itemList[i]);
				}
			} else if (resultSet && resultSet.searchTemplate && resultSet.searchTemplate instanceof ecm.model.UnifiedSearchTemplate) {
				if (!itemList || itemList.length == 0) {
					return false;
				}

				if (itemList.length > 1) {
					if (this.pluginId != null) {
						// For custom actions, check that all of the items are of one of the supported
						// repository types.
						var arrRepositoryTypes = this.repositoryTypes.split(",");
						var item;
						for (var index = 0; index < itemList.length; index++) {
							item = itemList[index];
							if (item.repository && arrRepositoryTypes.indexOf(item.repository.type) == -1) {
								return false;
							}
						}
					} else if (this.id != "Edit" && this.id != "Export") {
						// multi-select actions on unified search results is only allowed for Edit and Export actions
						return false;
					}
				}

				items = [];
				for ( var i in itemList) {
					items.push(itemList[i].item ? itemList[i].item : itemList[i]);
				}
			} else {
				items = itemList;
			}

			if (items && items[0] && items[0].hasPrivilege("privNone")) {
				return false;
			}

			// Check if global
			if (this.global) {
				//this.logDebug("canPerformAction: ", "action: " + this.id);
				switch (this.id) {
				case "Undo":
					canPerform = ecm.model.desktop.canUndo();
					break;
				case "Redo":
					canPerform = ecm.model.desktop.canRedo();
					break;
				case "CreateHold":
					if (!repository || !repository.privileges || !repository.getPrivilege("createHold")) {
						canPerform = false;
					}
					break;
				case "Import":
				case "NewWordDocument":
				case "NewExcelDocument":
				case "NewPowerPointDocument":	
				case "CreateFolder":				
					if (items && (items.length > 0)) {
						if (items.length > 1) {
							canPerform = false;
						} else {
							if (repository.type == "cm" ){
								if (!items[0].hasPrivilege("privAddToFolder") ){
									canPerform = false;
								}
							}
							else if (this.id == "Import" || this.id == "NewWordDocument" || this.id == "NewExcelDocument" || this.id == "NewPowerPointDocument") {
								if (!items[0].hasPrivilege("privAddItem") || !items[0].hasPrivilege("privAddToFolder")) {
									canPerform = false;
								}
							} else {
								if (repository.type == "box" && !items[0].hasPrivilege("privAddItem")) {
									canPerform = false;
								} else if (!items[0].hasPrivilege("privAddLink")) {
									canPerform = false;
								}
							}
						}
					} else if (this.privileges && repository.connected) {
						// Check repository privileges
						if (repository.rootItem != null && repository.rootItem.hasPrivilege("privAddLink") == false && repository.type == "cmis") {
							canPerform = false;//d24812
						} else {
							for (var i = 0; i < this.privileges.length && canPerform; i++) {
								if (!repository.getPrivilege(this.privileges[i])) {
									canPerform = false;
								}
							}
							if (canPerform) {
								// These operations are only allowed if unfiled adds are allowed or the repository allows foldering.
								canPerform = !ecm.model.desktop.fileIntoFolder || repository.getPrivilege("foldering");
							}
						}
					}					
					break;
				case "ImportUsingTemplate":
				case "CreateFolderUsingTemplate":
					// These actions are unavailable on CM if entry template support is not deployed or enabled.
					if (repository._isCM() && (!repository.isEntryTemplateSupported() || !repository.entryTemplatesEnabled)) {
						canPerform = false;
					} else if (items != null && items[0].hasPrivilege("privNone")) {
						canPerform = false;
					} else {
						// When importing using a template, ignore the selected folder - it may not be the parent folder.
						// Check repository privileges
						if (this.privileges && repository.connected) {
							for (var i = 0; i < this.privileges.length && canPerform; i++) {
								if (!repository.getPrivilege(this.privileges[i])) {
									canPerform = false;
								}
							}
						}
						// disable add w/ ET in teamspaces
						if (canPerform && teamspace) {
							canPerform = false;
						}
					}
					break;
				case "OpenFolder":
					if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.ContentItem) && items[0].parent != null && items[0].parent.isInstanceOf && items[0].parent.isInstanceOf(ecm.model.WorkItem)) {
						canPerform = false;
					}
					break;
				case "OpenSearchNewTab":
					if (items.length > 1) {
						canPerform = false;
					} else if (listType == "ProcessAttachments" || (repository && repository._isP8() && items[0].versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED)) {
						canPerform = false;
					} else {
						canPerform = !items[0].isNew();
					}
					break;
				case "EditSearch":
					if (items.length > 1) {
						canPerform = false;
					} else if (items[0].repository._isP8() && this._isAllVersions(resultSet, items[0].repository) && !items[0].currentVersion) {
						canPerform = false;
					} else {
						canPerform = !items[0].isNew() && items[0].isNavigatorSavedSearch() && (items[0].hasPrivilege("privMajorVersion") || (items[0].hasPrivilege("privCheckInOutDoc") && items[0].hasPrivilege("privEditProperties")));
					}
					break;
				case "SearchProperties":
					canPerform = false;
					// Enable properties for single item if search isn't new.
					if (items.length == 1) {
						if (!items[0].isNew()) {
							canPerform = true;
						}
					} else {
						// For multiple items, ensure the user can perform the action on at least one item.
						for ( var index in items) {
							var item = items[index];
							if ((item.repository.type == "p8" || item.repository.type == "cm" || item.repository.type == "cmis") && item.hasPrivilege("privEditProperties") && !item.isNew()) {
								canPerform = true;
								break;
							}
						}
					}

					break;
				case "AddToFavorites":
					if (items[0].hasPrivilege("privNone")) {
						canPerform = false;
					} else if (item.repository.type == "cmis") {//if cmis repository
						if (item.getValue("cmis:versionSeriesCheckedOutId") && item.getValue("cmis:objectId") && item.getValue("cmis:versionSeriesCheckedOutId") == item.getValue("cmis:objectId")) {
							canPerform = false;
						}
					}

					break;
				case "DocPrint":
					var item = items[0];
					if (!item.hasPrivilege("privPrintDoc") || !item.hasPrivilege("privViewDoc") || item.mimetype == "" || item.isFolder() || item.deleted || !item.hasContent() || (item.getMimeClass() == "ftExternalFile")) {
						canPerform = false;
					}
					this.logDebug("canPerformGlobalAction DocPrint", "canPerform: " + canPerform + ", item: " + item.name + ", privPrintDoc: " + item.hasPrivilege("privPrintDoc") + ", privViewDoc: " + item.hasPrivilege("privViewDoc") + ", mimeType: " + item.mimetype + ", isFolder: " + item.isFolder() + ", isDeleted: " + item.deleted + ", hasContent: " + item.hasContent() + ", mimeClass: " + item.getMimeClass());
					break;
				case "PrintDoc":
					var item = items[0];
					if (!item.hasPrivilege("privPrintDoc") || !item.hasPrivilege("privViewDoc") || item.mimetype == "" || item.isFolder() || item.deleted || !item.hasContent() || (item.getMimeClass() == "ftExternalFile")) {
						canPerform = false;
					}
					this.logDebug("canPerformGlobalAction PrintDoc", "canPerform: " + canPerform + ", item: " + item.name + ", privPrintDoc: " + item.hasPrivilege("privPrintDoc") + ", privViewDoc: " + item.hasPrivilege("privViewDoc") + ", mimeType: " + item.mimetype + ", isFolder: " + item.isFolder() + ", isDeleted: " + item.deleted + ", hasContent: " + item.hasContent() + ", mimeClass: " + item.getMimeClass());
					break;
				case "PrintDocAll":
					var item = items[0];
					if (!item.hasPrivilege("privPrintDoc") || !item.hasPrivilege("privViewDoc") || item.mimetype == "" || item.isFolder() || item.deleted || !item.hasContent() || (item.getMimeClass() == "ftExternalFile")) {
						canPerform = false;
					}
					this.logDebug("canPerformGlobalAction PrintDocAll", "canPerform: " + canPerform + ", item: " + item.name + ", privPrintDoc: " + item.hasPrivilege("privPrintDoc") + ", privViewDoc: " + item.hasPrivilege("privViewDoc") + ", mimeType: " + item.mimetype + ", isFolder: " + item.isFolder() + ", isDeleted: " + item.deleted + ", hasContent: " + item.hasContent() + ", mimeClass: " + item.getMimeClass());
					break;
				case "EditTeamspaceTeam":
					var modelTeamspace = teamspace;
					if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
						modelTeamspace = items[0];
					}
					if (modelTeamspace) {
						if (modelTeamspace.state == "deleted") {
							canPerform = false;
						} else if (!modelTeamspace.hasPrivilege("addRemoveRoleParticipants")) {
							canPerform = false;
						} else if (repository._isP8() && !repository.getPrivilege("addModifyTeamspaceRole")) {
							canPerform = false;
						}
					}
					break;
				case "AddDocFromRepo":
					teamspace = teamspace != null ? teamspace : (resultSet != null ? resultSet["teamspace"] : null);
					if (teamspace) {
						var canAddItem = repository ? (repository.getPrivilege("addItem") && (!ecm.model.desktop.fileIntoFolder || repository.getPrivilege("foldering"))) : false;

						if (canAddItem && teamspace && teamspace.hasPrivilege("createNewSearches") && teamspace.hasPrivilege("privAddItem") || teamspace.hasPrivilege("privAddToFolder")) {
							canPerform = true;
						} else {
							canPerform = false;
						}
					} else {
						canPerform = false;
					}
					break;
				case "EditTeamspaceRoles":
					var modelTeamspace = teamspace;
					if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
						modelTeamspace = items[0];
					}
					if (modelTeamspace) {
						if (modelTeamspace.state == "deleted")
							canPerform = false;
						else if (!modelTeamspace.hasPrivilege("modifyRoles"))
							canPerform = false;
						else if (repository._isP8() && (!modelTeamspace.currentUserIsOwner || !repository.getPrivilege("addModifyTeamspaceRole")))
							canPerform = false;
						else if (!repository.getPrivilege("addTeamspace") && repository.type == "cm") // cm needs access to item type in order to save changes
							canPerform = false;
					}
					break;
				case "EditTeamspaceSearches":
					var modelTeamspace = teamspace;
					if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
						modelTeamspace = items[0];
					}
					if (modelTeamspace) {
						if (modelTeamspace.state == "deleted")
							canPerform = false;
						else if (!modelTeamspace.hasPrivilege("addNewSearches"))
							canPerform = false;
					}
					break;
				case "EditTeamspaceClasses":
					var modelTeamspace = teamspace;
					if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
						modelTeamspace = items[0];
					}
					if (modelTeamspace) {
						if (modelTeamspace.state == "deleted")
							canPerform = false;
						else if (!modelTeamspace.hasPrivilege("addRemoveClassesOrEntryTemplates"))
							canPerform = false;
					}
					break;
				case "EditTeamspaceEntryTemplates":
					var modelTeamspace = teamspace;
					if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
						modelTeamspace = items[0];
					}
					if (modelTeamspace) {
						if (modelTeamspace.state == "deleted")
							canPerform = false;
						else if (!modelTeamspace.hasPrivilege("addRemoveClassesOrEntryTemplates"))
							canPerform = false;
					}
					break;
				case "CreateTeamSpace":
					break;
				case "CreateTemplate":
					break;
				case "WorkspaceProperties":
					if (teamspace && teamspace.type == "instance") { // runtime
						// teamspace runtime properties (column properties)
						if (teamspace.state == "deleted") {
							canPerform = false;
						} else {
							if (teamspace.repository._isCM())
								canPerform = teamspace.hasPrivilege("privOwner"); // Currently only owner can edit teamspace properties for CM
							else
								canPerform = teamspace.hasPrivilege("modifyFolderProperties") || teamspace.hasPrivilege("modifyItemProperties");
						}
					} else { // template
						if (canPerform && !items[0].hasPrivilege("privEdit"))
							canPerform = false;
					}
					break;
				case "NewDocumentEntryTemplate":
				case "NewFolderEntryTemplate":
					if (canPerform && repository) {
						canPerform = repository.isEntryTemplateSupported() && repository.entryTemplatesEnabled && repository.privileges && repository.getPrivilege("addEntryTemplate");
					}
					break;					
				default:
					canPerform = true;
				}
				
				if (this.id.indexOf("NewEditDocument") == 0) {
					if (items && (items.length > 0)) {
				        if (items.length > 1) {
					        canPerform = false;
				        } else {
				        	if (!items[0].hasPrivilege("privAddItem") || !items[0].hasPrivilege("privAddToFolder")) {
								canPerform = false;
							}								
				        }
					}
				}

				return canPerform;
			}

			// check if multidoc
			if (!items || items.length < 1 || (items.length > 1 && !this.multiDoc)) {
				return false;
			}

			// Disable email attachment for Mac OS if using the mail applet
			if ((this.id == "SendAttachments" || this.id == "SendAttachmentsAll" || this.id == "SendAsPDF" || this.id == "SendAllAsPDF") && !ecm.model.desktop.emailServiceEnabled && navigator.appVersion.indexOf("Mac") != -1) {
				return false;
			}
			if (this.id == "SendAsPDF" || this.id == "SendAllAsPDF" || this.id == "DownloadAsPdf" || this.id == "DownloadAllAsPdf") {
				var item = items[0].item ? items[0].item : items[0];
				if (item.mimetype && (item.mimetype == "application/x-filenet-workflowdefinition" && item.mimetype != "application/x-filenet-xpdlworkflowdefinition")) {
					return false;
				}
			}

			// Disable if at least 1 of selected items cannot perform action
			if (this.id == "DownloadAsOriginal" || this.id == "DownloadAll" || this.id == "DownloadAsPdf" || this.id == "DownloadAllAsPdf" || this.id == "StartWF" || this.id == "ApplyHold" || this.id == "SendAttachments" || this.id == "SendAttachmentsAll" || this.id == "SendAsPDF" || this.id == "SendAllAsPDF" || this.id == "PrintDoc" || this.id == "DocPrint") {
				canPerform = true;
				for (var i = 0; i < items.length && canPerform; i++) {
					var item = items[i];
					if (this.id == "ApplyHold") {
						canPerform = item.hasPrivilege("privHold");
					} else if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
						// Disable Start on Workflow if item is a search template
						canPerform = false;
					} else if ((this.id == "DownloadAsPdf" || this.id == "DownloadAllAsPdf" || this.id == "SendAsPDF" || this.id == "SendAllAsPDF") && item.mimetype == "application/afp" && !repository.isAFP2PDFEnabled) {
						canPerform = false;
					} else if ((this.id == "DownloadAsPdf" || this.id == "DownloadAllAsPdf" || this.id == "SendAsPDF" || this.id == "SendAllAsPDF") && item.mimetype == "application/line") {
						canPerform = false;
					} else if ((this.id == "DownloadAsOriginal" || this.id == "DownloadAll" || this.id == "DownloadAsPdf" || this.id == "DownloadAllAsPdf" || this.id == "SendAttachments" || this.id == "SendAttachmentsAll" || this.id == "SendAsPDF" || this.id == "SendAllAsPDF") && !items[i].hasContent()) {
						canPerform = false;
					//} else if (this.id == "DownloadAsOriginal" || this.id == "DownloadAsPdf" || this.id == "PrintDoc" || this.id == "SendAttachments" || this.id == "SendAsPDF") {
					//enable OD XML doc download as original
					}else if (this.id == "DownloadAsPdf" || this.id == "PrintDoc" || this.id == "SendAttachments" || this.id == "SendAsPDF") {
						// disable download as PDF ,print  and email for xml document in OD
						if (repository.type == "od") {

							if (item.mimetype == "application/xml" || item.mimetype == "text/xml") {
								canPerform = false;
							}
						}
					}
				}
				if (!canPerform) {
					return false; // return if action is disallowed; otherwise proceed to check privileges
				}
			}			
			
			// Enable action if at least 1 of selected items can perform action
			canPerform = (this.id == "PrintDoc" || this.id == "PrintDocAll" || this.id == "DocPrint") ? true : false;
			if (this.id == "ODImport") {
				canPerform = true;
			}

			var parentFolderId = null;
			var userId = repository ? repository.userId : "";
			var multiSelectValid = false;
			var isDoneChecking = false;
			//this.logDebug("canPerformMultiDocAction", "checking " + items.length + " items");
			for (var i = 0; i < items.length && !isDoneChecking; i++) {
				var item = items[i];

				var lockedUser = "";
				if (!item.isInstanceOf(ecm.model.Teamspace))
					lockedUser = item && item.lockedUser ? item.lockedUser : "";
				//this.logDebug("canPerformMultiDocAction", "checking item[" + i + "]: " + ((item == null) ? "null" : item.name));
				// check repository types
				if (!this.repositoryTypes || this.repositoryTypes == "" || (item.repository && this.repositoryTypes.indexOf(item.repository.type) || !item.repository) >= 0) {
					// check privileges
					if (this.privileges && !item.isInstanceOf(ecm.model.Teamspace)) {
						//this.logDebug("canPerformMultiDocAction", "checking " + this.privileges.length + " privileges");
						for (var j = 0; j < this.privileges.length && !canPerform; j++) {
							var privilege = this.privileges[j];
							if (item) {
								if (item.hasPrivilege(privilege)) {
									if (privilege == "privPrintDoc") {
										canPerform &= true;
									} else {
										canPerform = true;
									}
								} else {
									if (privilege == "privPrintDoc") {
										canPerform &= false;
										this.logDebug("canPerformMultiDocAction", "canPerform: " + canPerform + ", item[" + i + "]: " + item.name + " can not be printed");
									} else {
										canPerform = false;
									}
								}
							} else {
								//this.logDebug("canPerformMultiDocAction", "item is null");
								canPerform = false;
							}
						}
					} else {
						//this.logDebug("canPerformMultiDocAction", "no list of privileges");
						canPerform = true;
					}

					if (item && item.hasPrivilege("privNone")) {
						canPerform = false;
					}

					// check for item state
					if (canPerform) {
						switch (this.id) {
						case "DeleteWorkspace":
							if (items[0].isInstanceOf && items[0].isInstanceOf(ecm.model.Teamspace)) {
								if (items[0].state == "deleted") {
									canPerform = false;
								} else {
									if (items[0].repository._isCM()) {
										if (items[0].type == ecm.model.Teamspace.TEMPLATE) {
											if (!items[0].hasPrivilege("privDelete"))
												canPerform = false;
										} else {
											if (!items[0].hasPrivilege("privOwner"))
												canPerform = false;
										}
									} else {
										//21365 checked for unmapped P8 priv deletItems. GetUserItemPermission still has privDelete
										// which could be changed to deleteItems
										if (!items[0].hasPrivilege("privDelete") && !items[0].hasPrivilege("deleteItems"))
											canPerform = false;
										else if (items[0].type == ecm.model.Teamspace.INSTANCE && (!repository.getPrivilege("addModifyTeamspaceRole") || !items[0]["currentUserIsOwner"])) {
											canPerform = false;
										}

									}
								}
							}
							break;
						case "WorkspaceProperties":
							teamspace = teamspace != null ? teamspace : (resultSet != null ? resultSet["teamspace"] : null);
							teamspace = teamspace != null ? teamspace : item;
							if (teamspace) {
								if (teamspace && teamspace.type == "instance") { // runtime
									// teamspace runtime properties (column properties)
									if (teamspace.state == "deleted") {
										canPerform = false;
									} else {
										if (teamspace.repository._isCM())
											canPerform = teamspace.hasPrivilege("privOwner"); // Currently only owner can edit teamspace properties for CM
										else
											canPerform = teamspace.hasPrivilege("modifyFolderProperties") || teamspace.hasPrivilege("modifyItemProperties");
									}
								} else { // template
									//if (canPerform && !teamspace.hasPrivilege("privEdit"))
									//	canPerform = false;
								}
							}
							break;
						case "ExportTeamspaceTemplate":
							if (!repository.getPrivilege("addTeamspaceTemplate"))
								canPerform = false;
							break;
						case "EditWorkspace":
							if (items[0].state == "deleted") {
								canPerform = false;
							} else if (!items[0].hasPrivilege("privEdit"))
								canPerform = false;
							break;
						case "MoveTeamspaceDocumentToFolder":
							canPerform = this._canPerformDefaultFolderActions(item, repository);

							if ((canPerform == true) && (items.length > 1) && this._isAllVersions(resultSet, repository)) {
								canPerform = false;
							}

							array.forEach(items, lang.hitch(this, function(item, i) {
								if (item["parent"] == null) {
									canPerform = false;
								} else if (repository._isCM() && item.parent && item.parent.hasPrivilege("privRemoveFromFolder") == false) {
									canPerform = false;
								} else if (canPerform && !this._hasFullControlAccessMask(item, repository))
									canPerform = false;
							}));
							break;
						case "MakeWorkspaceTemplateDefault":
							canPerform = items[0].state != "offline" && items[0].state != "default" && items[0].state != "validate" && items[0].state != "personalFolderTemplate";
							if (canPerform && !items[0].hasPrivilege("privEdit"))
								canPerform = false;
							break;
						case "DisableWorkspace":
							canPerform = (items[0].state == "published" || items[0].state == "default");
							if (canPerform && !items[0].hasPrivilege("privEdit") && items[0].type == "template")
								canPerform = false;
							else if (canPerform && (!items[0]["currentUserIsOwner"] && !items[0].hasPrivilege("privOwner")) && items[0].type == "instance")
								canPerform = false;
							break;
						case "OpenTeamspace":
							if (item.state == "offline" && (!items[0]["currentUserIsOwner"] && !items[0].hasPrivilege("privOwner")) && item.type == "instance")
								canPerform = false;
							break;
						case "EnableWorkspace":
							canPerform = items[0].state == "offline";
							if (canPerform && !items[0].hasPrivilege("privEdit") && items[0].type == "template")
								canPerform = false;
							else if (canPerform && (!items[0]["currentUserIsOwner"] && !items[0].hasPrivilege("privOwner")) && items[0].type == "instance")
								canPerform = false;
							break;
						case "ValidateWorkspace":
							canPerform = items[0].state == "validate";
							if (canPerform && !items[0].hasPrivilege("privEdit"))
								canPerform = false;
							break;
						case "PrintDoc":
							if ((!item.hasPrivilege("privPrintDoc") || !item.hasPrivilege("privViewDoc") || (item.mimetype == "") || item.isFolder() || item.deleted || !item.hasContent() || (item.getMimeClass() == "ftExternalFile") || item.getMimeClass() == "ftPolicyDocument" || item.getMimeClass() == "ftFormData" || item.getMimeClass() == "ftFormTemplate")) {
								canPerform &= false;
							}
							this.logDebug("canPerformMultiDocAction PrintDoc", "canPerform: " + canPerform + ", item: \'" + item.name + "\', privPrintDoc: " + item.hasPrivilege("privPrintDoc") + ", privViewDoc: " + item.hasPrivilege("privViewDoc") + ", mimeType: " + item.mimetype + ", isFolder: " + item.isFolder() + ", isDeleted: " + item.deleted + ", hasContent: " + item.hasContent() + ", external file: " + (item.getMimeClass() == "ftExternalFile"));
							if (canPerform && ecm.model.desktop.printServiceEnabled === true) {
								canPerform = this._isSupportedByPrintService(item);
							}
							break;
						case "PrintDocAll":
							if ((!item.hasPrivilege("privPrintDoc") || !item.hasPrivilege("privViewDoc") || (item.mimetype == "") || item.isFolder() || item.deleted || !item.hasContent() || (item.getMimeClass() == "ftExternalFile") || item.getMimeClass() == "ftPolicyDocument" || item.getMimeClass() == "ftFormData" || item.getMimeClass() == "ftFormTemplate")) {
								canPerform &= false;
							}
							this.logDebug("canPerformMultiDocAction PrintDocAll", "canPerform: " + canPerform + ", item: \'" + item.name + "\', privPrintDoc: " + item.hasPrivilege("privPrintDoc") + ", privViewDoc: " + item.hasPrivilege("privViewDoc") + ", mimeType: " + item.mimetype + ", isFolder: " + item.isFolder() + ", isDeleted: " + item.deleted + ", hasContent: " + item.hasContent() + ", external file: " + (item.getMimeClass() == "ftExternalFile"));
							if (canPerform && ecm.model.desktop.printServiceEnabled === true) {
								canPerform = this._isSupportedByPrintService(item);
							}
							break;
						case "Lock":
							canPerform = !item.locked;
							break;
						case "Unlock":
							// For P8 and CMIS, the user name is checked at the server and depending on the reservation type
							// the privEditDoc, privCheckInDoc and privCheckInOutDoc privileges (checked above) are set appropriately.
							if (!repository || (!repository._isP8() && !repository._isCmis())) {
								canPerform = item.locked;
							}
							if (canPerform && repository && repository._isCM() && ((resultSet && resultSet.context && resultSet.context == "PropertiesVersions") || this._isAllVersions(resultSet, repository))) {
								canPerform = false;
							}
							break;
						case "CheckOut":
						case "CheckOutDownload":
						case "CheckOutLabelWithDownload":
						case "CheckOutNoDownload":
							// Only cm repositories support folder check out
							if ((repository && repository.type != "cm") && item.isFolder() == true) {
								canPerform = false;
							} else if (lockedUser && lockedUser.length > 0) {
								canPerform = false;
							} else if (item.hasPrivilege("privCheckOutDoc") == false) {
								canPerform = false;
							} else if ((this.id == "CheckOutDownload") && ((item.hasPrivilege("privExport") == false) || (item.hasContent() == false))) {
								canPerform = false;
							} else if (repository && repository._isP8()) {
								if ((resultSet && resultSet.context && resultSet.context == "PropertiesVersions") || this._isAllVersions(resultSet, repository)) {
									// Only the current version may be checked out in the Versions list and search results for all version searches.
									if (items.length == 1) {
										canPerform = item.currentVersion;
									} else {
										// Don't allow multi select in version history or search results for "all versions".
										canPerform = false;
									}
								}
								if (canPerform && (item.getMimeClass() == "ftPolicyDocument" || item.getMimeClass() == "ftFormData")) {
									canPerform = false; // Can not checkout Form data or policy
								}
							}

							// If this is a multi select, allow checkout if the action is valid for at least one of the items.
							// This needs to be done for other actions as well.
							if (items.length > 1) {
								if (canPerform == true) {
									multiSelectValid = canPerform;
								}

								if (i + 1 >= items.length) {
									// If this is the last item in the list, set the canPerform flag based on the multiSelectValid flag.
									canPerform = multiSelectValid;
								}
							}
							break;
						case "CheckIn":
							// Don't allow checkin for folders (unless the repository type is cm) or searches.
							// Searches can be checked out, and the check out can be cancelled.
							if ((repository.type != "cm" && item.isFolder()) || (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase))) {
								canPerform = false;
							} else if (!repository || (!repository._isP8() && !repository._isCmis() && !repository._isBox())) {
								// For P8, CMIS, and Box the user name is checked at the server and depending on the reservation type
								// the privEditDoc, privCheckInDoc and privCheckInOutDoc privileges (checked above) are set appropriately.
								if (userId != null && userId.length > 0) {
									canPerform = (userId && lockedUser && (userId.toUpperCase() == lockedUser.toUpperCase() || lockedUser == "Collaboration"));
								}
								if (canPerform && repository && repository._isCM()) {
									if (resultSet && resultSet.context && resultSet.context == "PropertiesVersions") {
										// Only the current version may be checked out in the Versions list.
										if (items.length == 1) {
											canPerform = item.currentVersion;
										} else {
											// Don't allow multi select in version history.
											canPerform = false;
										}
									} else if (this._isAllVersions(resultSet, repository)) {
										// Don't allow checkin for CM all version search results.
										canPerform = false;
									}
								}
							} else if (repository && repository._isP8()) {
								if (item.getMimeClass() == "ftPolicyDocument" || item.getMimeClass() == "ftFormData") {
									canPerform = false; // Can not checkin Form data or policy
								}
							} else if (repository && repository._isBox()) {
								canPerform = item.locked;
								if (canPerform && item.mimetype == "application/x-box-note") {
									canPerform = false;
								}
							}
							break;
						case "EditDoc":
							if (repository && repository._isCM() && this._isAllVersions(resultSet, repository)) {
								// Don't allow Edit Doc on all version CM search results.
								canPerform = false;
							}
							break;
						case "DeleteItem":
							if (repository && repository._isCM() && userId != null && userId.length > 0) {
								canPerform = (!lockedUser || lockedUser.length == 0 || (userId && userId.toUpperCase() == lockedUser.toUpperCase()) || lockedUser == "Collaboration");
							}
							if (canPerform && repository && repository._isP8() && ((resultSet && resultSet.context && resultSet.context == "PropertiesVersions") || this._isAllVersions(resultSet, repository))) {
								// Do not allow delete version on the reservation.
								// Unlock/Cancel Checkout should be used instead.
								canPerform = (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
							}

							// If this is a multi select, allow delete if the action is valid for at least one of the items.
							if (items.length > 1) {
								if (canPerform == true) {
									multiSelectValid = canPerform;
								}

								if (i + 1 >= items.length) {
									// If this is the last item in the list, set the canPerform flag based on the multiSelectValid flag.
									canPerform = multiSelectValid;
								}
							}
							break;
						case "RemoveHold":
							canPerform = item.hasHold;
							break;
						case "Download":
							canPerform = !item.isFolder();
							canPerform = (item.hasContent && !item.hasContent()) ? false : canPerform;
							if (canPerform && repository && repository._isP8() && (resultSet && resultSet.context && resultSet.context == "PropertiesVersions")) {
								// This command applies only to a non-reserved item with content.
								canPerform = item.hasContent() && (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
							}
							break;
						case "DownloadAsOriginal":
							canPerform = item.hasContent();
							break;
						case "DownloadAllAsPdf":
						case "DownloadAsPdf":
							// Don't allow download as PDF action on a CFS/OD federated document with MIME type of "application/vnd.ibm-OnDemand"
							if (canPerform) {
								if (item.mimetype == "application/vnd.ibm-OnDemand")
									canPerform = false;
							}
							if (canPerform && repository && repository._isP8()) {
								if (item.getMimeClass() == "ftPolicyDocument" || item.getMimeClass() == "ftFormData" || item.getMimeClass() == "ftFormTemplate") {
									canPerform = false;
								}
							}
							if (canPerform && this._isOIType(item.mimetype)) {
								var os = ecm.model.desktop.appServerOs;
								if (os != null) {
									if (os.arch == "s390x") {
										this.logDebug(methodName, "Download as PDF is not supported on zLinux Platform, for " + item.mimetype + ".  Action DownloadAsPdf and DownloadAllAsPdf will be disabled.");
										canPerform = false;
									}
								}
							}
							if (canPerform && repository && repository._isBox()) {
								if (item.mimetype == "application/x-box-note" || item.mimetype == "application/vnd.google-apps.document" || item.mimetype == "application/vnd.google-apps.spreadsheet") {
									canPerform = false;
								}
							}
							break;
						case "DownloadAll":
							canPerform = !item.isFolder();
							canPerform = (item.hasContent && !item.hasContent()) ? false : canPerform;
							if (canPerform && repository && repository._isP8() && (resultSet && resultSet.context && resultSet.context == "PropertiesVersions")) {
								// This command applies only to a non-reserved item with content.
								canPerform = item.hasContent() && (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
							}
							break;
						/*
						case "StartWF":
							// Disable Start on Workflow if item is a search template
							if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
								canPerform = false;
								i = items.length; // Set to break out of items loop
							}
							break;
						*/
						case "RemoveFromFolder":
							
							// Even if foldering is not supported by a CM repository, there may be documents filed in folders that are not
							// descendants of a root folder. Allow the action for CM repositories.
							if (repository._isCM()){
								canPerform = true
							}
							else {
								canPerform = this._canPerformDefaultFolderActions(item, repository);
							}

							// For a single document, the remove from folder is not necessarily limited to the currently displayed parent folder.
							// The list of all parent folders is displayed. Do not disable the remove from folder action if the current parent folder
							// does not permit the action, since there may be other folders.
							if (canPerform == true){
								if (repository._isCM() && !item.hasPrivilege("privRemoveLink")){
									canPerform = false;
								}
								
								if ((canPerform == true) && (items.length > 1)) {
									if (this._isAllVersions(resultSet, repository)) {
										canPerform = false;
									} else {
										// For multi select, only allow if all selected items have the same parent, for example, when the user
										// browses into a folder.
										var parent = item.parent;
										if (parent == null) {
											canPerform = false;
										} else if (parent.isFolder() == false) {
											canPerform = false;
										} else if (parent.hasPrivilege("privRemoveFromFolder") == false) {
											canPerform = false;
										} else if (parentFolderId == null) {
											parentFolderId = parent.id;
										} else if (parentFolderId != parent.id) {
											canPerform = false;
										}
									}
								}
							}
							break;
						case "MoveDocumentToFolder":
							canPerform = this._canPerformDefaultFolderActions(item, repository);
						
							if ((canPerform == true) && (items.length > 1)) {

								// For multiselect, allow when browsing into a folder but not other contexts to avoid problems when items have different parent folders.
								var parent = item.parent;
								if (parent == null) {
									canPerform = false;
									isDoneChecking = true;
								} else if (parent.isFolder() == false) {
									canPerform = false;
									isDoneChecking = true;
								}
							}
							break;
						case "MoveFolderToFolder":
							canPerform = this._canPerformDefaultFolderActions(item, repository);
							
							if (items.length > 1 && canPerform) {
								// For multiselect, allow when browsing into a folder but not other contexts to avoid problems when items have different parent folders.
								var parent = item.parent;
								if (parent == null) {
									canPerform = false;
									isDoneChecking = true;
								} else if (parent.isFolder() == false) {
									canPerform = false;
									isDoneChecking = true;
								}
							} else if ((item.isInstanceOf && item.isInstanceOf(ecm.model.ContentItem) && item.rootFolder == true) || (item.attributes.PathName != null && item.attributes.PathName == "/")) {
								// Don't allow moving root folders.
								canPerform = false;
							}
							break;
						case "AddToFolder":
						case "CopyToFolder":
							if (!repository.getPrivilege("foldering")) { // Not valid on repositories that don't support foldering.
								canPerform = false;
							} else if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
								canPerform = !item.isNew();
							} else if (canPerform && item.repository) {
								if (item.repository._isCM()){
									if (!item.isHierarchicalItemType && item.isFolder()){
										canPerform = false;
									}
									else if (!item.hasPrivilege("privAddLink")){
										canPerform = false;
									}
								} else if (item.isFolder() && item.repository.type != "box") {
									canPerform = false;
								}
							}

							if ((canPerform == true) && (items.length > 1) && this._isAllVersions(resultSet, repository)) {
								canPerform = false;
							} else if (item.repository && (item.repository.id != repository.id)) {
								// Don't allow across repositories.
								canPerform = false;
							}
							break;
						case "BoxCopy":
							if (!repository.getPrivilege("foldering")) { // Not valid on repositories that don't support foldering.
								canPerform = false;
							}
							if ((canPerform == true) && (items.length > 1) && this._isAllVersions(resultSet, repository)) {
								canPerform = false;
							}
							for (var i = 0; i < items.length; i++) {
								if (items[i].isFolder())
									canPerform = !items[i].isFolder();

								var hasContent = (items[i].hasContent && !items[i].hasContent() && items[i].versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED) ? false : canPerform;
								if (!hasContent)
									canPerform = false;
							}
							break;
						case "DemoteVersion":
							canPerform = false;
							if ((item.hasPrivilege("privMajorVersion") && (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RELEASED) && (item.currentVersion) && (!item.locked))) {
								canPerform = true;
							}
							break;
						case "PromoteVersion":
							canPerform = false;
							if ((item.hasPrivilege("privMajorVersion") && (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.IN_PROCESS) && (item.currentVersion) && (!item.locked))) {
								canPerform = true;
							}
							break;
						case "MoveToInbox":
							if (item.parent.queueType != "processQueue") {
								canPerform = false;
							}
							break;
						case "Reassign":
							canPerform = false;
							if (item.hasPrivilege("privCanReassign")) {
								canPerform = true;
							}
							break;
						case "Launch":
						case "StartWF":
							if (resultSet) {
								//parentFolder = resultSet.parentFolder;

								// Don't allow starting workflow for work item attachments.
								//if (parentFolder != null && parentFolder.isInstanceOf && parentFolder.isInstanceOf(ecm.model.WorkItem)) {
								//	canPerform = false;
								//}
							}
							break;
						case "ResumeWF":
							if (item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem) && !item.isSuspended) {
								canPerform = false;
							}
							break;
						case "OpenStep":
							if (item.repository.type == "cmis" || item.repository.type == "p8") {
								canPerform = false;
							}
							break;
						case "ViewProcessInformation":
							if (item.repository.type == "cm") {
								canPerform = true;
							} else {
								canPerform = false;
							}
							break;
						case "EditWF":
						case "SuspendWF":
						case "ContinueWF":
							if (item.isInstanceOf && item.isInstanceOf(ecm.model.WorkItem) && item.isSuspended) {
								canPerform = false;
							}
							break;
						case "TransferWorkflow":
							if ((item.mimetype == "") || item.isFolder() || (item.mimetype != "application/x-filenet-workflowdefinition" && item.mimetype != "application/x-filenet-xpdlworkflowdefinition")) {
								canPerform = false;
							}
							break;
						case "Preview":
							if (repository && repository._isOnDemand()) { // defect 17989
								canPerform = false;
							} else if (canPerform && repository && repository._isP8()) {
								canPerform = item.hasContent();
								if (canPerform) {
									var mimeClass = item.getMimeClass();
									if (mimeClass == "ftPolicyDocument" || mimeClass == "ftFormData" || mimeClass == "ftFormTemplate" || item.mimetype == "application/x-filenet-external") {
										canPerform = false;
									}
								}
							} else if (canPerform && repository && repository._isCmis()) {
								canPerform = item.hasContent(); // defect 25401
							} else if (canPerform && repository && repository._isBox()) {
								canPerform = item.hasContent();
								if (canPerform) {
									var mimeClass = item.getMimeClass();
									if (mimeClass == item.mimetype == "application/x-box-web-link") {
										canPerform = false;
									}
								}
							}
							// Don't allow preview action on a CFS/OD federated document with MIME type of "application/vnd.ibm-OnDemand"
							if (canPerform) {
								if (item.mimetype == "application/vnd.ibm-OnDemand")
									canPerform = false;
							}
							// Disable for ICC mimetypes
							if (canPerform) {
								var iccTypes = {
									"application/iccxit": true,
									"application/icccsn": true,
									"application/icc-acl-atom+xml": true,
									"application/icc-activity-atom+xml": true,
									"application/icc-activity-trash-atom+xml": true,
									"application/icc-attachment-atom+xml": true,
									"application/icc-blog-atom+xml": true,
									"application/icc-board-atom+xml": true,
									"application/icc-bookmark-atom+xml": true,
									"application/icc-comment-atom+xml": true,
									"application/icc-forum-atom+xml": true,
									"application/icc-forum-topic-atom+xml": true,
									"application/icc-link-atom+xml": true,
									"application/icc-media-atom+xml": true,
									"application/icc-network-atom+xml": true,
									"application/icc-profile-atom+xml": true,
									"application/icc-recommend-atom+xml": true,
									"application/icc-reportingChain-atom+xml": true,
									"application/icc-status-atom+xml": true,
									"application/icc-tag-atom+xml": true,
									"application/icc-version-atom+xml": true,
									"application/icc-wiki-atom+xml": true
								};

								if (iccTypes[item.mimetype]) {
									canPerform = false;
								}
							}
							break;
						case "MergeSplit":
							// When the MergeSplit action is visible it is always enabled.
							// This allows the user to attempt the action even when there are problems with some or all of the selected documents.
							// A message will be displayed to the user when there are problems.
							break;
						case "SendAttachments":
						case "SendAttachmentsAll":

							canPerform = (item.hasContent && !item.hasContent()) ? false : canPerform;
							if (canPerform && repository && repository._isP8() && ((resultSet && resultSet.context && resultSet.context == "PropertiesVersions") || this._isAllVersions(resultSet, repository))) {
								// This command applies only to a non-reserved item with content.
								canPerform = item.hasContent() && (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
							}
							break;
						case "SendAllAsPDF":
						case "SendAsPDF":
							if (canPerform && repository && repository._isP8()) {
								if (item.getMimeClass() == "ftPolicyDocument" || item.getMimeClass() == "ftFormData" || item.getMimeClass() == "ftFormTemplate") {
									canPerform = false;
								}
							}
							if (canPerform && this._isOIType(item.mimetype)) {
								var os = ecm.model.desktop.appServerOs;
								if (os != null) {
									if (os.arch == "s390x") {
										this.logDebug(methodName, "Send Email as A PDF File is not supported on zLinux Platform, for " + item.mimetype + ".  Action SendAsPDF will be disabled.");
										canPerform = false;
									}
								}
							}
							canPerform = (item.hasContent && !item.hasContent()) ? false : canPerform;
							if (canPerform && repository && repository._isP8() && ((resultSet && resultSet.context && resultSet.context == "PropertiesVersions") || this._isAllVersions(resultSet, repository))) {
								// This command applies only to a non-reserved item with content.
								canPerform = item.hasContent() && (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
							}
							break;
						case "SendLinksToDocs":
						case "ShowHyperlink":
						case "SendLinksToFolders":
						case "SendLinksToSearches":
							if (canPerform && repository && repository._isP8() && ((resultSet && resultSet.context && resultSet.context == "PropertiesVersions") || this._isAllVersions(resultSet, repository))) {
								// These commands apply only to non-reserved items with content.
								canPerform = item.hasContent() && (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
							}
							if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
								if (item.state == "offline" && item.type == "instance")
									canPerform = false;
							} else if (item.attributes && (item.attributes.ClbTeamspaceName || item.attributes.clbTitle)) {
								if ((item.attributes.ClbTeamspaceState && item.attributes.ClbTeamspaceState == 5) || (item.attributes.clbState && item.attributes.clbState == 5))
									canPerform = false;
							}
							break;
						case "OpenSearch":
						case "OpenSearchInTab":
							if (listType == "ProcessAttachments" || (repository && repository._isP8() && item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED)) {
								canPerform = false;
							}
							break;
						case "View":
							if (canPerform && repository) {
								if (item.isDocumentEntryTemplate() || item.isFolderEntryTemplate()) {
									canPerform = repository.getPrivilege("addItem"); // View action on ET's is mapped to "Open" which executes the add action with ET
								} else {
									if (repository._isP8() && (resultSet && resultSet.context && resultSet.context == "PropertiesVersions")) {
										// These commands apply only to non-reserved items with content or an external file
										canPerform = (item.hasContent() || (item.getMimeClass() == "ftExternalFile")) && (item.versionStatusInt != ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED);
									}
								}
							}
							break;
						case "EditEntryTemplate":
							if (canPerform && repository) {
								// Edit works with IBM Content Navigator entry templates.
								canPerform = repository.isEntryTemplateSupported() && repository.entryTemplatesEnabled && (item.mimetype.indexOf("entrytemplate") > -1) && (item.mimetype.indexOf("/x-icn") > -1) && (items[0].hasPrivilege("privMajorVersion") || (items[0].hasPrivilege("privCheckInOutDoc") && items[0].hasPrivilege("privEditProperties")));
							}
							break;
						case "CopyEntryTemplate":
							if (canPerform && repository) {
								// You must have permission to add an IBM Content Navigator entry template and permission to modify the source entry template.
								// Copy works with IBM Content Navigator or Workplace XT entry templates.
								canPerform = repository.isEntryTemplateSupported() && repository.entryTemplatesEnabled && repository.privileges && repository.getPrivilege("addEntryTemplate") && (item.mimetype.indexOf("entrytemplate") > -1) && ((item.mimetype.indexOf("/x-icn") > -1) || (item.mimetype.indexOf("/x-filenet") > -1)) && (items[0].hasPrivilege("privMajorVersion") || (items[0].hasPrivilege("privCheckInOutDoc") && items[0].hasPrivilege("privEditProperties")));
							}
							break;
						case "ConvertEntryTemplate":
							if (canPerform && repository) {
								// You must have permission to add an IBM Content Navigator entry template and permission to modify the source Workplace XT entry template.
								// Convert works with Workplace XT entry templates.
								canPerform = repository.isEntryTemplateSupported() && repository.entryTemplatesEnabled && repository.privileges && repository.getPrivilege("addEntryTemplate") && (item.mimetype.indexOf("entrytemplate") > -1) && (item.mimetype.indexOf("/x-filenet") > -1) && (items[0].hasPrivilege("privMajorVersion") || (items[0].hasPrivilege("privCheckInOutDoc") && items[0].hasPrivilege("privEditProperties")));
							}
							break;
						case "AddToFavorites":
							if (item.repository.type == "cmis") {//if cmis repository
								if (item.getValue("cmis:versionSeriesCheckedOutId") && item.getValue("cmis:objectId") && item.getValue("cmis:versionSeriesCheckedOutId") == item.getValue("cmis:objectId")) {
									canPerform = false;
								}
							}
							if (item.isInstanceOf && item.isInstanceOf(ecm.model.Teamspace)) {
								if (item.state == "offline" && item.type == "instance")
									canPerform = false;
							} else if (item.attributes && (item.attributes.ClbTeamspaceName || item.attributes.clbTitle)) {
								if ((item.attributes.ClbTeamspaceState && item.attributes.ClbTeamspaceState == 5) || (item.attributes.clbState && item.attributes.clbState == 5))
									canPerform = false;
							}
							break;
						case "ViewChildDocuments":
							canPerform = item.compoundDocumentType != null;
							break;
						case "EditWithNativeApplication":
							if (!repository || (!repository._isP8() && !repository._isCM()) || !item || !ecm.model.desktop.streamlineEnabled || !repository.editServiceEnabled) {
								canPerform =  false;
							} else if (repository._isP8()) {
								if (item.locked && ecm.model.desktop.userId && item.lockedUser && ecm.model.desktop.userId.toUpperCase() != item.lockedUser.toUpperCase()) {
									canPerform = false;
								} else {										
									if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED || item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.SUPERSEDED) {
										if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED && item.attributes && item.attributes.MajorVersionNumber == 0 && item.attributes.MinorVersionNumber == 1) {
											canPerform =  true;
										} else {
											canPerform =  false;
										}
									} else if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.IN_PROCESS) {
										//current version is minor version
										if (item.hasPrivilege("privMinorVersion") && item.hasContent()) {
											canPerform =  true;
										} else {
											canPerform =  false;
										}
									} else if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RELEASED) {
										if (item.currentVersion) {
											//current version is major version
											if (item.hasPrivilege("privMajorVersion") && item.hasContent()) {
												canPerform =  true;
											} else {
												canPerform =  false;
											}
										} else {
											//current version is minor version
											if (item.hasPrivilege("privMinorVersion") && item.hasContent()) {
												canPerform =  true;
											} else {
												canPerform =  false;
											}
										}
									}
								}
							} else if (repository._isCM()) {
								if (item.locked && ecm.model.desktop.userId && item.lockedUser && ((ecm.model.desktop.userId.toUpperCase() != item.lockedUser.toUpperCase()) && item.lockedUser != "Collaboration" )) {
									//item.lockedUser == "Collaboration" means the document is edit by OOS. it could be same as current user, current user still can perform action.
									canPerform = false;
								} else {
									canPerform = (item.hasPrivilege("privCheckInOutDoc") || item.hasPrivilege("privCheckOutDoc")) && item.hasContent();
								}	
							}
							break;
						case "CopyToEditService":
							canPerform = item.hasPrivilege("privViewDoc")
							break;
						case "EnableSync":
							if (ecm.model.desktop.syncServer.canSyncItem(itemList[0]) && !itemList[0].syncEnabled) {
								return true;
							} else {
								return false;
							}
							break;
						case "DisableSync":
							if (ecm.model.desktop.syncServer.enabled && itemList[0] && itemList[0].repository && itemList[0].repository.syncEnabled && itemList[0].syncEnabled) {
								return true;
							} else {
								return false;
							}
							break;
						case "RemoveFromMySyncedFiles":
							if (items && items.length && ecm.model.desktop.syncServer.enabled) {
								var allSyncEnabled = true;
								for (var i = 0; i < items.length; i++) {
									allSyncEnabled = allSyncEnabled && items[i].syncEnabled;
								}
								if (allSyncEnabled) {
									return true;
								} else {
									return false;
								}

							} else {
								return false;
							}
							break;
						case "Edit":
							// Allow multi select edit if at least one of the selected items is in a CM8, P8 or CMIS
							// repository and the user has the rights to edit it.
							if (items.length > 1) {
								if (ecm.model.desktop.maxNumberDocToModify == 1) {
									return false;
								}
								if ((item.repository.type == "p8" || item.repository.type == "cm" || item.repository.type == "cmis") && item.hasPrivilege("privEditProperties")) {
									multiSelectValid = true;
									isDoneChecking = true;
								}
								if (i + 1 >= items.length || isDoneChecking) {
									// If this is the last item in the list, set the canPerform flag based on the multiSelectValid flag.
									canPerform = multiSelectValid;
								}
							}
							//if(item["template"] == "ICMTeamspace")
							//canPerform = false;
							break;

						case "Share":
							// Don't allow sharing if the document is in the process of being shared.
							var shareStatus = item.getShareStatus();
							if(repository._isP8()  && !item.objectStore["supportsBoxShare"]){
								canPerform = false;
							}
							if (shareStatus == ecm.model.ContentItem.SHARE_STATUS.PENDING_SHARE || shareStatus == ecm.model.ContentItem.SHARE_STATUS.VERSION_PENDING_SHARE) {
								canPerform = false;
							} else {
								var allVersionSearchResults = this._isAllVersions(resultSet, repository);
								if (repository && repository._isP8()) {
									if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RESERVED) {
										canPerform = false;
									} else if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.SUPERSEDED) {
										if ((allVersionSearchResults || (resultSet && resultSet.context && resultSet.context == "PropertiesVersions")) && (shareStatus != ecm.model.ContentItem.SHARE_STATUS.SHARED)) {

											// In all version search results or version history, allow resharing shared versions.
											canPerform = false;
										}
									} else if (item.versionStatusInt == ecm.model.ContentItem.P8_VERSION_STATUS.RELEASED && shareStatus == ecm.model.ContentItem.SHARE_STATUS.VERSION_SHARED) {
										if (resultSet && resultSet.context && resultSet.context == "PropertiesVersions") {
											if (item.accessMaskNotRetrieved == undefined || item.accessMaskNotRetrieved == false) {
												if (!item.hasPrivilegeToDeleteShare()) {
													canPerform = false;
												}
											}
										}
									}
								} else if (repository && repository._isCM()) {
									if (allVersionSearchResults) {
										canPerform = false;
									} else if (item.locked) {
										canPerform = false;
									}
								}
							}
							// Check if the cm item type supports sharing
							if (canPerform && item.repository.type == "cm" && item.repository.contentClassCache && item.repository.contentClassCache.byId && item.repository.contentClassCache.byId[item.template]) {
								var contentClass = item.repository.contentClassCache.byId[item.template];
								if (contentClass.attributeDefinitions && !contentClass.supportsBoxShareTracking) {
									canPerform = false;
								}
							}
							break;

						case "Unshare":
							var shareStatus = item.getShareStatus();
							var allVersionResults = this._isAllVersions(resultSet, repository);
							if (!(shareStatus == ecm.model.ContentItem.SHARE_STATUS.SHARED || (!allVersionResults && shareStatus == ecm.model.ContentItem.SHARE_STATUS.VERSION_SHARED))) {
								canPerform = false;
							} else {
								var allVersionSearchResults = this._isAllVersions(resultSet, repository);
								if (repository && repository._isP8()) {
									if ((allVersionSearchResults || (resultSet && resultSet.context && resultSet.context == "PropertiesVersions")) && (shareStatus != ecm.model.ContentItem.SHARE_STATUS.SHARED)) {
										canPerform = false;
									}
								} else if (repository && repository._isCM()) {
									if (allVersionSearchResults) {
										canPerform = false;
									} else if (item.locked) {
										canPerform = false;
									}
								}
							}
							// Check if the user has privilege to delete shares
							if (canPerform && item.hasPrivilegeToDeleteShare) {
								if (item.repository.type == "p8") {
									if (item.accessMaskNotRetrieved == undefined || item.accessMaskNotRetrieved == false) { // P8 may have have the privileges retrieved
										canPerform = item.hasPrivilegeToDeleteShare();
									}
								} else {
									canPerform = item.hasPrivilegeToDeleteShare();
								}
							}
							// Check if the cm item type supports sharing
							if (canPerform && item.repository.type == "cm" && item.repository.contentClassCache && item.repository.contentClassCache.byId && item.repository.contentClassCache.byId[item.template]) {
								var contentClass = item.repository.contentClassCache.byId[item.template];
								if (contentClass.attributeDefinitions && !contentClass.supportsBoxShareTracking) {
									canPerform = false;
								}
							}
							break;
						case "EditWithOfficeOnline":
							canPerform = item.hasPrivilege("privCheckInOutDoc") || item.hasPrivilege("privCheckOutDoc");								
							break;
						case "CopyToOfficeOnline":
							canPerform = item.hasPrivilege("privViewDoc")
							break;
						}
					}
				} else { // not a supported server
					canPerform = false;
				}
				if (!isDoneChecking)
					// PrintDoc & Edit need to check every item
					if (this.id != "PrintDoc" && this.id != "PrintDocAll" && this.id != "Edit")
						isDoneChecking = canPerform;
			}
			
			//this.logExit("canPerformAction");//, "repo: " + repository + ", listType: " + listType);
			return canPerform;
		},
		/**
		 * @Private
		 */
		_hasFullControlAccessMask: function(item, repository) {
			var mask = item["accessMask"];
			var docPrivs, folderPrivs;
			var fullControlDocMask = 998903;
			var fullControlFolderMask = 999415;

			if (fullControlFolderMask == mask || fullControlDocMask == mask)
				return true;
			else
				return false;
		},
		/**
		 * @private
		 */
		_canPerformDefaultFolderActions: function(item, repository) {
			if (!repository.getPrivilege("foldering")) {
				// Not valid on repositories that don't support foldering.
				return false;
			} else if (item.isInstanceOf && item.isInstanceOf(ecm.model._SearchTemplateBase)) {
				return !item.isNew();
			} else {
				return !item.isFolder() || (item.repository && item.repository._isCM() && !item.isHierarchicalItemType);
			}
		},
		
		/**
		 * Returns a boolean value indicating whether this action is enabled at the global scope
		 * 
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object
		 * @param items
		 *            A array of {@link ecm.model.Item} objects or derivations if Item object
		 * @param repository
		 *            A {@link ecm.model.Repository} object.
		 */
		isGlobalEnabled: function(resultSet, items, repository) {
			if (this.id == "CreateHold" && (resultSet && resultSet.repository && !resultSet.repository.getPrivilege("createHold"))) {
				return false;
			} else if (this.id == "Import" || this.id == "CreateFolder" || this.id == "ImportUsingTemplate" || this.id == "CreateFolderUsingTemplate" || 
					this.id == "NewWordDocument" || this.id == "NewExcelDocument" || this.id == "NewPowerPointDocument" || this.id.indexOf("NewEditDocument") == 0) {
				var parentFolder = null;
				var repo = repository;

				if (this.id == "ImportUsingTemplate" || this.id == "CreateFolderUsingTemplate") {
					// These actions are unavailable on CM if entry templates are not supported or not enabled.
					if (repo._isCM() && (!repo.isEntryTemplateSupported() || !repo.entryTemplatesEnabled)) {
						return false;
					}
				}

				if (resultSet) {
					parentFolder = resultSet.parentFolder;
					repo = resultSet.repository;
				}

				if (parentFolder && parentFolder.isFolder && parentFolder.isFolder() && (!parentFolder.rootFolder || (repo._isCM() && this.id == "Import"))) {
					repo = repo || parentFolder.repository;
					return this.canPerformAction(repo, [
						parentFolder
					]); // Check user privileges
				} else if (parentFolder && parentFolder.isInstanceOf && parentFolder.isInstanceOf(ecm.model.Favorite)) {
					if (parentFolder.item && parentFolder.item.rootFolder) {
						if (parentFolder.item.rootFolder) {
							return repo ? repo.getPrivilege("addItem") : false; // Make sure user have privilege at repository level
						} else {
							return this.canPerformAction(repo, [
								parentFolder
							]); // Check user privileges
						}
					} else {
						return false;
					}
				} else if (this.id == "CreateFolder" && parentFolder && parentFolder.isFolder && parentFolder.isFolder() && parentFolder.rootFolder) {
					return parentFolder.hasPrivilege("privAddLink");//d24812
				} else {
					// If we are required to file in a folder, this is the root folder, and this is P8, check to if the user has access to at least one folder in the root.
					if (ecm.model.desktop.fileIntoFolder && repo && repo._isP8() && parentFolder && parentFolder.isFolder() && parentFolder.rootFolder) {
						var canAdd = false;
						if (resultSet) {
							for (var i = 0; i < resultSet.items.length; i++) {
								var item = resultSet.getItem(i);

								if (item && item.isFolder()) {
									canAdd = true;
									break;
								}
							}
						}
						return repo ? (repo.getPrivilege("addItem") && canAdd && repo.getPrivilege("foldering")) : false;
					} else {
						// Make sure the user is granted the addItem privilege and may either add unfiled or is granted the foldering privilege.
						return repo ? (repo.getPrivilege("addItem") && (!ecm.model.desktop.fileIntoFolder || repo.getPrivilege("foldering"))) : false;
					}
				}
			} else if (this.id == "AddDocFromRepo") {
				if (!resultSet)
					return false;

				var repo = repo ? repo : resultSet.repository;
				var teamspace = resultSet["teamspace"];
				var canAddItem = repo ? (repo.getPrivilege("addItem") && (!ecm.model.desktop.fileIntoFolder || repo.getPrivilege("foldering"))) : false;

				if (canAddItem && teamspace && teamspace.hasPrivilege("createNewSearches") && (teamspace.hasPrivilege("fileInFolders") || teamspace.hasPrivilege("privAddItem"))) {
					return true;
				} else if (!teamspace) {
					return canAddItem;
				} else {
					return false;
				}
			} else if (this.id == "ImportTeamspaceTemplate") {
				if (resultSet && resultSet.repository.getPrivilege("addTeamspaceTemplate"))
					return true;
				else
					return false;
			} else if (resultSet && resultSet.isInstanceOf && resultSet.isInstanceOf(ecm.model.FavoritesResultSet)) {
				if (this.id == "RefreshGrid")
					return true;
				if (this.id == "ODImport")
					return true;
				if (!items || items.length == 0) {
					return false;
				} else if (this.id == "DeleteFavorite") { // single & multi-select actions on favorites is allowed for DeleteFavorite action
					return true;
				} else if (items.length == 1) {
					return true;
				} else {
					return false;
				}
			} else if (this.id == "NewDocumentEntryTemplate" || this.id == "NewFolderEntryTemplate") {
				return repository.isEntryTemplateSupported() && repository.entryTemplatesEnabled && repository.privileges && repository.getPrivilege("addEntryTemplate");
			} else {
				return true;
			}
		},

		/**
		 * Performs the action on the given repository and selected items.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param itemList
		 *            An array of {@link ecm.model.Item} objects or derivations of Item object
		 * @param callback
		 *            A callback function to be called after the action has been performed
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object (can be null).
		 * @param resultSet
		 *            A {@link ecm.model.ResultSet} object (can be null).
		 * @param parameterMap
		 *            An array of extra parameters to be passed to the action (can be null).
		 */
		performAction: function(repository, itemList, callback, teamspace, resultSet, parameterMap) {
			this.logEntry("performAction", "repository=" + repository + ", items=" + itemList);

			ecm.model.desktop.getActionsHandler(lang.hitch(this, function(actionsHandler) {
				var action = this.action || "action" + this.id;

				var items = [];
				if (itemList && itemList[0] && itemList[0].isInstanceOf && itemList[0].isInstanceOf(ecm.model.Favorite) && this.id != "RenameFavorite" && this.id != "EnableSync" && this.id != "DisableSync" && this.id != "DeleteFavorite" && this.id != "OpenFolder") {
					for ( var i in itemList) {
						if (this.id == "RemoveFromMySyncedFiles" && !itemList[i].item) {
							items.push(itemList[i]);
						} else {
							items.push(itemList[i].item);
						}
					}
				} else {
					items = itemList;
				}

				if (actionsHandler && actionsHandler[action]) {
					this.logDebug("performAction", "actionHandler: " + action);
					if (action == "actionHelp") {
						this.logDebug("performAction", "actionHandler: " + ecm.model.desktop.getHelpUrl());
						this.logDebug("performAction", "helpContext: " + ecm.model.desktop.getHelpContext());
					}
					actionsHandler[action](repository, items, callback, teamspace, resultSet, parameterMap, this);
				} else if (window && window[action]) {
					this.logDebug("performAction", "window[action]: " + action);
					window[action](repository, items, callback, teamspace, resultSet, parameterMap, this);
				} else {
					this.logError("performAction", "action " + action + " not implemented.");
				}
			}));

			this.logExit("performAction");
		},

		/**
		 * @private
		 */
		_isAllVersions: function(resultSet, repository) {
			return resultSet && resultSet._versionLookup && repository ? resultSet._versionLookup[repository.id] == "allversions" : false;
		},
		
		/**
		 * @private
		 * Returns true if the item's mime type is supported by the print service
		 */
		_isSupportedByPrintService: function(item) {
			var isSupported = true;
			if (item.repository.type =="cm" || item.repository.type =="p8") {
				if (this._conversion == null) {
					this._conversion = new ecm.model.Conversion();	
				}
				if (item.mimetype) {
					isSupported = this._conversion.typeIsSupportedByPrintService(item.mimetype);
				}
			}
			if (!isSupported) {
				this.logDebug("_isSupportedByPrintService", "print service not supported for mime type:" + item.mimetype);
			}
			return isSupported;
		}
	});

	/**
	 * @private
	 */
	Action._checkOutAction = new Action({
		id: "CheckOutNoDownload",
		global: false,
		privileges: [
			"privCheckOutDoc",
            	"privExport"
		],
		repositoryTypes: "cm,p8,cmis,box"
	});

	/**
	 * @private
	 */
	Action._checkInAction = new Action({
		id: "CheckIn",
		global: false,
		privileges: [
			"privCheckInOutDoc",
	            "privEditDoc"
		],
		repositoryTypes: "cm,p8,cmis,box"
	});

	/**
	 * @private
	 */
	Action._cancelCheckoutAction = new Action({
		id: "Unlock",
		global: false,
		privileges: [
			"privCancelCheckOutDoc"
		],
		repositoryTypes: "cm,p8,cmis,box"
	});

	/**
	 * @private
	 */
	Action._addAction = new Action({
		id: "Import",
		global: true,
		privileges: [
			"addDoc"
		],
		repositoryTypes: "cm,p8,cmis,box"
	});

	return Action;
});

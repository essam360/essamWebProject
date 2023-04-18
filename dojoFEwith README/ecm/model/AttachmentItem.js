/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/connect",
	"dojo/_base/Deferred",
	"dojo/DeferredList",
	"dojo/json",
	"./Item"
], function(declare, lang, connect, Deferred, DeferredList, dojojson, Item) {

	/**
	 * Constructs an attachment item.
	 * 
	 * @param properties
	 *            The properties for the attachment item. The properties can be any of the public fields as defined
	 *            below and on ecm.model.Item and ecm.model._ModelObject.
	 * @name ecm.model.AttachmentItem
	 * @class Represents a single attachment item from a P8 workflow. Attachment item's can hold real documents and
	 *        folders that have been "attached".
	 * @augments ecm.model.Item
	 */
	var AttachmentItem = declare("ecm.model.AttachmentItem", [
		Item
	], {
		/** @lends ecm.model.AttachmentItem.prototype */

		/**
		 * A string value indicating the process engine connection point to use (optional). Will override the connection
		 * point configured on the repository in the Admin data base.
		 */
		connectionPoint: null,

		/**
		 * The object store containing the P8 content item.
		 */
		objectStore: null,

		/**
		 * This is the user authored name for the attachment parameter (not the prompt or display name).
		 */
		authoredName: "",

		/**
		 * A boolean flag for indicating that the attachment list of content items has been modified.
		 */
		modified: false,

		_repoResults: null,

		/**
		 * @private
		 */
		constructor: function() {
			if (!this._repoResults) {
				this._repoResults = [];
			}
		},

		/**
		 * @private Returns the object store of the P8 content item.
		 */
		getObjectStore: function() {
			if (!this.objectStore) {
				this.objectStore = this.objectStoreId ? {
					id: this.objectStoreId,
					symbolicName: this.objectStoreName,
					displayName: this.objectStoreDisplayName
				} : null;
			}

			return this.objectStore;
		},

		/**
		 * Return an instance of {@link ecm.model.ResultSet} holding the attachment content items. Property is populated
		 * after call to retrieveAttachmentContents function.
		 * 
		 * @returns {ecm.model.ResultSet}
		 */
		getFolderContents: function() {
			return this._folderContents;
		},

		/**
		 * @private
		 */
		unloadFolderContents: function() {
			// Commented out to enable further processing by TreeModel
			//this._folderContents = null;
		},

		/**
		 * Helper function used to add a new attachment item into the attachment lists. Model layer information is saved
		 * to the mid-tier when completeStep() function is called on the work item.
		 * 
		 * @param attachmentItems
		 *            Array of attachment items.
		 * @param item
		 *            ContentItem holding item to add.
		 * @param repository
		 *            Repository
		 * @param version
		 *            Object identifier for statically linked versions of documents.
		 * @param vsId
		 *            Version series identifier (GUID) for current or released versions of documents.
		 * @param type
		 *            Object type, document or folder.
		 */
		addAttachment: function(attachmentItems, item, repository, version, vsId, type) {
			this.logEntry("addAttachment");
			var id = item.id; // Default
			var libraryName = repository.serverName; // Default, accept for P8 
			var libraryType = 3; // Default to P8
			var description = "";
			if (repository.type == "p8") {
				libraryType = 3;
				libraryName = repository.objectStoreDisplayName; // Historical attachments from AE, XT other applications use display name
				id = item.id.split(",")[2];
				description = repository.domainId;
			} else if (repository.type == "cm") {
				libraryType = 4;
			} else if (repository.type == "od") {
				libraryType = 5;
				description = item.parent.id; // search folder name goes in attachment description field
				libraryName = ""; // The serverName off the repository does not have host name (like repository config does), will be set in mid-tier
			} else if (repository.type == "cmis") {
				libraryType = 6;
				// description will hold cmisRepositoryID, it's not available on repository and will be set in mid-tier
			} else if (repository.type == "box") {
				libraryName = repository.oAuthClientId;
				libraryType = 7;
			}
			this.logInfo("addAttachment", "Adding attachment: name = " + item.name, ", id = " + id + ", version = " + version + ", libraryName = " + libraryName + ", repoId = " + repository.id, +", description = " + description);

			attachmentItems.push({
				"attachment_id": id,
				"attachment_name": item.name,
				"attachment_library_type": libraryType,
				"attachment_repository_id": repository.id,
				"attachment_library_name": libraryName,
				"attachment_version": version,
				"attachment_vsid": vsId,
				"attachment_type": type,
				"attachment_description": description
			});
			this.modified = true;

			// Add {NAME} to the attributes list, since it's no longer there on object returned from search result of select object dialog
			if (item.attributes["{NAME}"] == undefined) {
				item.attributes["{NAME}"] = item.name;
				item.attributeTypes["{NAME}"] = "xs:string";
			}
			this._setColumnAttributes(item, repository.type);

			var items = this.resultSet;
			if (items) {
				var contentItems = items.getItems();
				// Add the new ContentItem to the resultSet so it can be displayed in the ContentList
				contentItems.push(item);
			}
			if (item.isFolder()) {
				var folders = this.getFolderContents();
				if (folders) {
					var folderItems = folders.getItems();
					// Add the new ContentItem to the resultSet so it can be displayed in the FolderTree
					folderItems.push(item);
				}
			}
			this.logExit("addAttachment");
		},

		/**
		 * Helper function used to remove an content item from the attachment list. Model layer information is saved to
		 * the mid-tier when completeStep() is called on the work item.
		 * 
		 * @param attachmentItems
		 *            Array of attachment items.
		 * @param items
		 *            list of ContentItem objects selected to be removed.
		 */
		removeAttachment: function(attachmentItems, items) {
			this.logEntry("removeAttachment");
			var resultSetItems = this.resultSet.getItems();
			for (var i = 0; i < items.length; i++) {
				this.logInfo("removeAttachment", "Removing attachment: name = " + items[i].name);
				for (var j = 0; j < resultSetItems.length; j++) {
					if (items[i].id == resultSetItems[j].id) {
						resultSetItems.splice(j, 1);
						attachmentItems.splice(j, 1);
						break;
					}
				}
			}
			this.modified = true;

			var folderContents = this.getFolderContents();
			if (folderContents) {
				var contentItems = folderContents.getItems();
				for (i = 0; i < items.length; i++) {
					for (j = 0; j < contentItems.length; j++) {
						if (items[i].id == contentItems[j].id) {
							contentItems.splice(j, 1);
							break;
						}
					}
				}
			}
			this.logExit("removeAttachment");
		},

		/**
		 * Helper function that will retrieve all the attachment items for a particular attachment parameter.
		 * 
		 * @param foldersOnly
		 *            A boolean flag to indicate whether to retrieve only folders (for tree view rendering).
		 * @param refresh
		 *            A boolean flag to indicated whether to use the cached list (or not)
		 * @param callback
		 *            A function that is called when the action has completed. It is passed an
		 *            {@link ecm.model.ResultSet} object.
		 */
		retrieveAttachmentContents: function(foldersOnly, refresh, callback) {
			this.logEntry("retrieveAttachmentContents");
			this.logInfo("retrieveAttachmentContents", "step_attachment_name = " + this.name + ", step_parameter = " + this.authoredName);
			var request;
			if (!refresh && !foldersOnly && this.resultSet) {
				this.logInfo("retrieveAttachmentContents", "Returning cached result set of attachment items");
				callback(this.resultSet);
			} else if (!refresh && foldersOnly && this._folderContents) {
				// Check that _folderContents has all folders.
				for (var i = this._folderContents.items.length - 1; i >= 0; i--) {
					var item = this._folderContents.getItem(i);
					if (!item.isFolder()) {
						this._folderContents.deleteItem(item);
					}
				}
				this.logInfo("retrieveAttachmentContents", "Returning cached result set of attachment folders only");
				callback(this._folderContents);
			} else {
				var self = this;
				this.logInfo("retrieveAttachmentContents", "Calling getStepAttachmentItems action");
				var request = null;
				if (this.repository.type == "cm") {
					// Call is made when used in the CM step processor for AttachmentsPane
					request = ecm.model.Request.invokeService("getStepAttachmentItems", this.repository.type, {
						repositoryId: this.repository.id,
						workItemId: this.parent.id,
						docId: this.docid
					}, function(response) {
						response.repository = this.repository;
						self._retrieveAttachmentContentsCompleted(response, foldersOnly, callback);
					});
				} else {
					var filterType = "";
					if (foldersOnly) {
						filterType = "folderSearch";
					}
					// Look at the current attachment items to determine if there are any CRA types
					var crossRepositoryAttachmentsExist = this._createRepositoryArrays();
					if (crossRepositoryAttachmentsExist) {
						// If other repositories than p8, call new function to handle multiple repository types
						var attachmentItems = this.parent.attributes[this.authoredName];
						this._retrieveRepositoryAttachments(foldersOnly, attachmentItems, filterType, callback);
					} else {
						var params = {
							repositoryId: this.repository.id,
							connection_point: this.connectionPoint,
							objectStoreId: this.objectStore ? this.objectStore.id : "",
							wob_num: this.parent.id,
							queue_name: this.parent.queueName ? encodeURIComponent(this.parent.queueName) : "",
							launch_version: this.parent.workflowVersion ? encodeURIComponent(this.parent.workflowVersion) : "",
							attachmentId: this.parent.F_AttachmentId ? this.parent.F_AttachmentId : "",
							step_parameter: encodeURIComponent(this.authoredName),
							step_attachment_name: encodeURIComponent(this.name),
							filter_type: filterType
						};

						// Add extra step resolution information used to retrieve the correct step element
						this._addQueryFilterParams(params);

						// If only p8 repositories, only call p8 services
						request = ecm.model.Request.invokeService("getStepAttachmentItems", this.repository.type, params, function(response) {
							response.repository = this.repository;
							self._retrieveAttachmentContentsCompleted(response, foldersOnly, callback);
						});
					}
				}
			}
			this.logExit("retrieveAttachmentContents");
			return request;
		},

		_createRepositoryArrays: function() {
			this.logEntry("_createRepositoryArrays");
			var crossRepositoryAttachmentsExist = false;
			if (this.parent) {
				var attachmentItems = this.parent.attributes[this.authoredName];
				var attachmentRepos = {};
				if (attachmentItems) {
					for ( var i in attachmentItems) {
						var repoId = attachmentItems[i].attachment_repository_id;
						var libraryType = attachmentItems[i].attachment_library_type;
						var type = null;
						if (libraryType == 3) {
							type = "p8";
						} else if (libraryType == 4) {
							type = "cm";
							crossRepositoryAttachmentsExist = true;
						} else if (libraryType == 5) {
							type = "od";
							crossRepositoryAttachmentsExist = true;
						} else if (libraryType == 6) {
							type = "cmis";
							crossRepositoryAttachmentsExist = true;
						} else if (libraryType == 7) {
							type = "box";
							crossRepositoryAttachmentsExist = true;
						}
						// Only add when it is not in the array yet.
						if (!attachmentRepos[repoId]) {
							var repoResult = {
								libraryType: libraryType, // Integer value for Process Engine
								type: type, // String repository type value for Navigator
								repoId: repoId,
								resultSet: null
							}
							// Add unique repositories to array
							if (type == "p8" && (this._repoResults.length == 0 || this._repoResults[0].type != "p8")) {
								this._repoResults.unshift(repoResult); // Only need to add one p8 repository
							} else {
								this._repoResults.push(repoResult);
							}

							attachmentRepos[repoId] = repoId;
						}
					}
					// Need at least one P8 repository to initialize the attachment items.
					if (crossRepositoryAttachmentsExist && this._repoResults[0].type != "p8") {
						this._repoResults.unshift({
							libraryType: "3", // Integer value for Process Engine
							type: "p8", // String repository type value for Navigator
							repoId: this.repository.id,
							resultSet: null
						});
					}
				}
			}
			return crossRepositoryAttachmentsExist;
			this.logExit("_createRepositoryArrays");
		},

		_retrieveRepositoryAttachments: function(foldersOnly, attachmentItems, filterType, callback) {
			this.logEntry("_retrieveRepositoryAttachments");
			var deferreds = new Array();
			if (!foldersOnly) {
				this.resultSet = null; // Clear out previous results
			}

			// Always make the call to get P8 attachment items to create readonly place holders 
			this.logInfo("_retrieveRepositoryAttachments", "Retrieving base attachments from P8 process engine.");
			var deferred = new Deferred();
			deferreds.push(deferred);

			var repoObjectP8 = this._repoResults[0]; // grab the first p8 repo object (will only be one);			

			var self = this;
			var completedCallback = lang.hitch(this, function(deferred, response, foldersOnly) {
				response.setType = "crAttachmentItems"; // cross repository attachments
				self._retrieveAttachmentResultsCompleted(response, "p8", null, repoObjectP8);
				deferred.resolve(this.resultSet);
			}, deferred);

			var params = {
				repositoryId: this.repository.id,
				connection_point: this.connectionPoint,
				objectStoreId: this.objectStore ? this.objectStore.id : "",
				wob_num: this.parent.id,
				queue_name: this.parent.queueName ? encodeURIComponent(this.parent.queueName) : "",
				launch_version: this.parent.workflowVersion ? encodeURIComponent(this.parent.workflowVersion) : "",
				attachmentId: this.parent.F_AttachmentId ? this.parent.F_AttachmentId : "",
				step_parameter: encodeURIComponent(this.authoredName),
				step_attachment_name: encodeURIComponent(this.name),
				filter_type: filterType
			};

			// Add extra step resolution information used to retrieve the correct step element
			this._addQueryFilterParams(params);

			var repositoryItems = {};
			var repositories = [];

			// Loop through the cross repository objects retrieving the attachment information from the service layer
			for ( var i in this._repoResults) {
				var repoObject = this._repoResults[i];
				var type = repoObject.type; // repository type string				
				var repoId = repoObject.repoId;
				var rep = ecm.model.desktop.getRepository(repoId);
				if (rep == null) {
					continue; // skip any repositories that are not part of the current desktop
					// These items will be rendered as read only in the attachment list
				}
				this.logInfo("_retrieveRepositoryAttachments", "Current " + type + " repository: " + repoId);

				// Collect the repositories that require an interactive login, and their items.								
				if (!repositoryItems[rep.id]) {
					repositories.push(rep);
				}
				if (!repositoryItems[rep.id])
					repositoryItems[rep.id] = repoObject;
				if (type != "p8") { // P8 deferred is already added above for the completedCallback 
					var deferred = new Deferred();
					deferreds.push(deferred);
				}
			}

			// Logging into a repository resets the session.
			// Logins must be serialized and items should not be retrieved until after all repositories are connected. 
			var connectRepositories = function(connectedCallback, index) {
				if (index < repositories.length) {
					ecm.widget.dialog.LoginDialog.checkLogin(repositories[index], function() {
						// Connect the next repository.
						connectRepositories(connectedCallback, index + 1);
					}, function() { // Error or login was cancelled. 
						// Adding a timeout to give the previous login pane to be destroyed before launching a new one.
						setTimeout(function() {
							// Connect the next repository
							connectRepositories(connectedCallback, index + 1);
						}, 500);
					}, true);
				} else {
					connectedCallback();
				}
			}

			// Retrieve the items from the connected repositories.
			var finishedConnecting = function() {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					var deferred = deferreds[i];
					if (repository.connected) {
						var repoAttachments = [];
						// loop through attachment items looking for attachments that match this repoId
						for ( var j in attachmentItems) {
							if (repository.id == attachmentItems[j].attachment_repository_id) {
								// add to new list of attachments
								repoAttachments.push(attachmentItems[j]);
							}
						}
						var repoItem = repositoryItems[repository.id];
						if (repoItem.type == "p8") {
							ecm.model.Request.invokeService("getStepAttachmentItems", self.repository.type, params, completedCallback, false, false, null, true); // Set as background request, so login dialog displays							
						} else
							self._retrieveDeferredRepositoryAttachments(deferred, repository.type, repository.id, repoAttachments, repoItem);
						repoAttachments = null;
					} else
						deferred.resolve("User failed to login to requested repository.");
				}
			};

			// Handle the deferred callbacks when all the attachments have been retrieved from all repositories
			if (deferreds && deferreds.length > 0) {
				var defs = new DeferredList(deferreds);
				defs.then(function(results) {
					self._retrieveCRAttachmentContentsCompleted(foldersOnly);
					if (callback) {
						if (foldersOnly) {
							callback(self._folderContents);
						} else {
							callback(self.resultSet);
						}
					}
				});
			}

			connectRepositories(finishedConnecting, 0);

			this.logExit("_retrieveRepositoryAttachments");
		},

		_retrieveDeferredRepositoryAttachments: function(deferred, type, repoId, repoAttachments, repoObject) {
			this.logEntry("_retrieveDeferredRepositoryAttachments");
			try {
				var completedCallback = lang.hitch(this, function(deferred, response, foldersOnly) {
					response.setType = "crAttachmentItems"; // cross repository attachments
					this._retrieveAttachmentResultsCompleted(response, type, repoId, repoObject);
					deferred.resolve(this.resultSet);
				}, deferred);

				var errback = lang.hitch(this, function(deferred, response) {
					deferred.reject(this);
				}, deferred);

				if (repoAttachments.length > 0) {
					var params = {
						repositoryId: repoId,
						step_parameter: encodeURIComponent(this.authoredName),
						step_attachment_name: encodeURIComponent(this.name)
					};
					ecm.model.Request.postService("getStepAttachmentItems", type, params, "text/json", dojojson.stringify(repoAttachments), completedCallback, false, false, false, errback);
				}
			} catch (e) {
				deferred.resolve("Error when retrieving attachments from CM repository.");
			}
			this.logExit("_retrieveDeferredRepositoryAttachments");
		},

		_retrieveAttachmentResultsCompleted: function(response, type, repoId, repoObject) {
			this.logEntry("_retrieveAttachmentResultsCompleted");
			var resultSet = null;
			response.parentFolder = this;
			if (type == "p8") {
				resultSet = new ecm.model.ResultSet(response);
				if (resultSet) {
					var attachmentItems = this.parent.getValue(this.authoredName);
					// P8 repositories can be different object stores from the same domain
					this._updateRepositoryOnItems(resultSet, attachmentItems, type);
				}
			} else {
				response.repository = ecm.model.desktop.getRepository(repoId);
				resultSet = new ecm.model.ResultSet(response);
			}

			// Each repo object will have it's own result set list
			if (repoObject != null) {
				repoObject.resultSet = resultSet;
			}

			this.logExit("_retrieveAttachmentResultsCompleted");
		},

		_retrieveCRAttachmentContentsCompleted: function(foldersOnly, callback) {
			this.logEntry("_retrieveCRAttachmentContentsCompleted");
			if (foldersOnly) {
				// Loop through the cross repository objects and update the global result set
				for ( var i in this._repoResults) {
					var repoObject = this._repoResults[i];
					if (i == 0) {
						// pre load folder contents
						this._folderContents = repoObject.resultSet;
					} else {
						this._updateResultSetWithAttachmentItems(this._folderContents, repoObject.resultSet, repoObject.type);
					}
				}

				// Check that _folderContents has only folders.
				for (var i = this._folderContents.items.length - 1; i >= 0; i--) {
					var item = this._folderContents.getItem(i);
					if (!item.isFolder()) {
						this._folderContents.deleteItem(item);
					}
				}
			} else {
				// New array based implementation starts here
				var hasODResults = false;
				var hasOtherResults = false;
				var structure = null;

				for ( var i in this._repoResults) {
					var repoObject = this._repoResults[i];
					if (i == 0) {
						// pre load folder contents
						this.resultSet = repoObject.resultSet;
					} else {
						this._updateResultSetWithAttachmentItems(this.resultSet, repoObject.resultSet, repoObject.type);
					}

					if (repoObject.type == "od" && !hasODResults) {
						hasODResults = true;
						structure = repoObject.resultSet.structure;
					} else if (repoObject.type != "p8") {
						hasOtherResults = true; // P8 has the original complete list
					}
				}

				// Check to see if all we have is OD attachment items, reset the columns configuration if we do
				if (hasODResults && !hasOtherResults) {
					var hasOnlyODResults = true;
					for ( var j in this.resultSet.items) {
						var item = this.resultSet.items[j];
						if (item.repository && item.repository.type == "p8") {
							hasOnlyODResults = false;
						}
					}
					// Will use the column configuration of the first set of OD items in the result set
					// If there are multiple OD "folders" used to retrieve the attachment items, will 
					// use the column configuration from the first "folder" used to retrieve attachment items.
					if (hasOnlyODResults && structure != null) {
						this.resultSet.setColumns(structure);
					}
				}
			}

			this._repoResults = [];
			this.logExit("_retrieveCRAttachmentContentsCompleted");
		},

		_retrieveAttachmentContentsCompleted: function(response, foldersOnly, callback) {
			this.logEntry("_retrieveAttachmentContentsCompleted");

			response.parentFolder = this;
			var results = new ecm.model.ResultSet(response);
			results.context = "PropertiesVersions"; // Attachment Items are already resolved to the specific version so use the PropertiesVersions context.			
			if (foldersOnly) {
				this.logInfo("_retrieveAttachmentContentsCompleted", "Returning new result set of attachment folders only");
				this._folderContents = results;
			} else {
				this.logInfo("_retrieveAttachmentContentsCompleted", "Returning new result set of attachment items");
				this.resultSet = results;
				this._folderContents = new ecm.model.ResultSet(response);
			}

			var attachmentItems = this.parent.getValue(this.authoredName);
			if (this.resultSet) {
				this._updateRepositoryOnItems(this.resultSet, attachmentItems);
			}

			if (this._folderContents) {
				this._updateRepositoryOnItems(this._folderContents, attachmentItems);
			}

			if (this.repository.type == "p8") {
				if (response.docid) {
					this.parent.id = response.docid; // This is a new wobNum on re-creation (p8 launch step only)
				}
			}

			if (callback) {
				callback(results);
			}
			this.logExit("_retrieveAttachmentContentsCompleted");
		},

		_updateRepositoryOnItems: function(resultSet, attachmentItems) {
			this.logEntry("_updateRepositoryOnItems");
			for (var i = 0; i < resultSet.items.length; i++) {
				var item = resultSet.getItem(i);
				var itemId = item.getValue("Id");
				if (itemId == null) {
					itemId = item.id;
				}
				var itemVsId = "";
				if (!item.isFolder()) {
					itemVsId = item.vsId;
				}
				for ( var j in attachmentItems) {
					var currentId = itemId;
					var id = attachmentItems[j].attachment_id; // Only has id if static version link (since 2.0.3)
					if (!id) {
						id = attachmentItems[j].attachment_vsid; // use vsid on current or release attachment links
					}
					if (!item.isFolder()) {
						if (attachmentItems[j].attachment_library_type == 3) { // P8
							var vsId = attachmentItems[j].attachment_vsid;
							if (!vsId) {
								id = attachmentItems[j].attachment_version;
							} else {
								currentId = itemVsId;
							}
						} else if (attachmentItems[j].attachment_library_type == 4) { // CM
							var version = attachmentItems[j].attachment_version;
							if (version != null && version != "") {
								id = version;
							}
						}
					}
					if (currentId == id) {
						var repository = ecm.model.desktop.getRepository(attachmentItems[j].attachment_repository_id);
						item.repository = repository;
						this.logInfo("_updateRepositoryOnItems", "Updating item: name = " + item.name + " repositoryId = " + repository.id);
						break;
					}
				}
			}
			this.logExit("_updateRepositoryOnItems");
		},

		_updateResultSetWithAttachmentItems: function(resultSet, attachmentResultSet, type) {
			this.logEntry("_updateResultSetWithAttachmentItems");
			if (attachmentResultSet != null) {
				for ( var i in attachmentResultSet.items) {
					var item = attachmentResultSet.items[i];
					var attachment_id = item.id;
					var attachment_version = null;
					if (type == "cm" || type == 4 || type == "cmis" || type == 6) {
						// Need to get the attachment information back from mid-tier to sync content items in result set
						attachment_id = item._attachment_id;
						attachment_version = item._attachment_version;
						delete item._attachment_id;
						delete item._attachment_version;
					}
					for ( var j in resultSet.items) {
						var id = this._getIdfromDocId(resultSet.items[j]);
						if (attachment_id == id || attachment_version == id) {
							resultSet.items[j] = item; // Found item, exchange readonly item with real content item
							this.logInfo("_updateResultSetWithAttachmentItems", "Updating result set with item: name = " + item.name);
							// Adjust column attributes to be common against p8 names to display in content list
							// Doing this on client side until we have attachments list column configuration in Admin
							this._setColumnAttributes(item, type);
							break;
						}
					}
				}
			}
			this.logExit("_updateResultSetWithAttachmentItems");
		},

		_setColumnAttributes: function(item, type) {
			if (type == "cm" || type == 4) {
				this._setAttribute(item, "LastModifier", item.attributes["modifiedBy"], "xs:string");
				this._setAttribute(item, "DateLastModified", item.attributes["modifiedTimestamp"], "xs:timestamp");
				if (!item.isFolder()) {
					// CM8 does not seem to have a "size" property available for columns
					this._setAttribute(item, "MajorVersionNumber", item.attributes["icn_sys_version"], "xs:integer");
				}
			} else if (type == "cmis" || type == 6) {
				this._setAttribute(item, "{NAME}", item.attributes["cmis:name"], "xs:string");
				this._setAttribute(item, "LastModifier", item.attributes["cmis:lastModifiedBy"], "xs:string");
				this._setAttribute(item, "DateLastModified", item.attributes["cmis:lastModificationDate"], "xs:timestamp");
				if (!item.isFolder()) {
					this._setAttribute(item, "ContentSize", item.attributes["cmis:contentStreamLength"], "xs:double", "fileSize");
					this._setAttribute(item, "MajorVersionNumber", item.attributes["cmis:versionLabel"], "xs:integer");
				}
			} else if (type == "od" || type == 5) {
				for ( var key in item.attributes) {
					if (item.attributes.hasOwnProperty(key)) {
						this._setAttribute(item, "{NAME}", item.attributes[key], "xs:string");
						break; // take first property as name
					}
				}
			} else if (type == "box" || type == 7) {
				this._setAttribute(item, "LastModifier", item.attributes["modified_by"], "xs:string");
				this._setAttribute(item, "DateLastModified", item.attributes["modified_at"], "xs:timestamp");
				this._setAttribute(item, "ContentSize", item.attributes["size"], "xs:double", "fileSize");
				if (!item.isFolder()) {
					this._setAttribute(item, "MajorVersionNumber", item.attributes["version_number"], "xs:integer");
				}
			}
		},

		_setAttribute: function(item, symbolicName, value, dataType, format) {
			item.attributes[symbolicName] = value;
			item.attributeTypes[symbolicName] = dataType;
			if (format) {
				item.attributeFormats[symbolicName] = format;
			}
		},

		_getIdfromDocId: function(item) {
			var id = null;
			var ids = item.id.split(",");
			if (ids.length > 3)
				id = ids[2] + "," + ids[3];
			else if (ids.length > 2)
				id = ids[2];
			if (id != null && id != "") {
				return id; // format has type class and repository before id
			} else {
				return item.id; // format is native id
			}
		},

		/**
		 * @private
		 */
		_addQueryFilterParams: function(params) {
			// Add extra step resolution information used to retrieve the correct step element
			if (this.parent.F_InstrSheetId && this.parent.F_WorkOrderId) {
				params.instr_sheet_id = this.parent.F_InstrSheetId;
				params.work_order_id = this.parent.F_WorkOrderId;
			}
		}

	});

	/**
	 * @private Constructs a attachment item, given a JSON representation of the item.
	 * @param itemJSON
	 *            The JSON representation of the content item.
	 * @param repository
	 *            An instance of {@link ecm.model.Repository} for the item.
	 * @param resultSet
	 *            An instance of {@link ecm.model.ResultSet} if this item is from a result set.
	 * @param parent
	 *            An instance of {@link ecm.model.WorkItem} for the parent of this item (if known).
	 */
	AttachmentItem.createFromJSON = function(itemJSON, repository, resultSet, parent) {
		itemJSON.repository = repository;
		itemJSON.resultSet = resultSet;
		itemJSON.parent = parent;
		itemJSON.connectionPoint = parent ? parent.connectionPoint : "";
		var item = new AttachmentItem(itemJSON);
		return item;
	};

	return AttachmentItem;
});

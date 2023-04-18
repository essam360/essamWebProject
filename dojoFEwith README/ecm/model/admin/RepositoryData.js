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
	"./ApplicationConfig",
	"./AdminData",
	"./RepositoryConfig",
	"./PropertyMappingConfig",
	"./EditServiceCategoryConfig",
	"./AdminConfig",
	"ecm/model/Request",
	"ecm/Messages",
	"dojox/collections/Dictionary",
	"../../LoggerMixin"
], function(declare, lang, array, dojojson, ApplicationConfig, AdminData, RepositoryConfig, PropertyMappingConfig, EditServiceCategoryConfig, AdminConfig, Request, Messages, dictionary, LoggerMixin) {

	/**
	 * @name ecm.model.admin.RepositoryData
	 * @class Represents the repository configuration objects needed to add or edit a repository.
	 * @augments ecm.LoggerMixin
	 * @private
	 * @since 2.0.3
	 */
	var RepositoryData = declare("ecm.model.admin.RepositoryData", [
		LoggerMixin
	], {
		/** @lends ecm.model.admin.RepositoryData.prototype */

		/**
		 * A string representing the repository type.
		 */
		type: null,
		/**
		 * The application server type.
		 */
		appServerType: null,
		/**
		 * A {@link ecm.model.admin.RepositoryConfig} object.
		 */
		repositoryConfig: null,
		/**
		 * An array of {@link ecm.model.admin.PropertyMappingConfig}. Used by the Edit Integration tab.
		 */
		propertiesMapping: null,
		/**
		 * @since 3.0.1
		 * An array of {@link ecm.model.admin.EditServiceCategoryConfig}. Used by the Edit Integration tab.
		 */
		editServiceCategories: null,
		/**
		 * Boolean indicating if this repository is CM 8.4.2.
		 */
		isCM842: false,
		/**
		 * Boolean indicating if this repository is OD 8.5.
		 */
		isOD85: false,
		/**
		 * List of CM servers. An array of strings.
		 */
		cmServers: null,
		/**
		 * List of CM languages. An array of strings.
		 */
		cmLanguages: null,
		/**
		 * List of P8 connection points. An array of strings.
		 */
		p8ConnectionPoints: null,
		/**
		 * Used by the System and Search (search results) tabs to list the document system properties. Contains an array
		 * of objects containing label and value.
		 */
		documentSystemPropDescs: null,
		/**
		 * Used by the Browse, and Search tabs to list the document properties. Contains an array of objects containing
		 * label and value.
		 */
		documentPropDescs: null,
		/**
		 * Used by Office tabs to list the document properties. Contains an array of objects containing label and value.
		 */
		documentMappingPropDescs: null,
		/**
		 * Used by the Browse tab to list the document name properties. Contains an array of objects contains label,
		 * value, and type.
		 */
		onlydocumentPropDescs: null,
		/**
		 * Used by the System tab to list the folder system properties. Contains an array of objects containing label
		 * and value.
		 */
		folderSystemPropDescs: null,
		/**
		 * Used by the Search tab to list the folder properties. Contains an array of objects containing label and
		 * value.
		 */
		folderPropDescs: null,
		/**
		 * Used by the Browse tab to list the folder name properties. Contains an array of objects contains label,
		 * value, and type.
		 */
		onlyfolderPropDescs: null,
		/**
		 * A instance of {@link ecm.model.admin.AdminConfig} object.
		 */
		defaultData: null,
		/**
		 * Contains action value of "edit", "new", or "copy".
		 */
		action: "edit",
		/**
		 * A object holding the common used parameters such as application. More parameters can be added later.
		 */
		default_params: {
			application: "navigator"
		},

		/**
		 * A boolean indicating if the sync server is enabled in the global settings.
		 * 
		 * @since 2.0.3
		 */
		syncEnabled: false,

		/**
		 * The Long ID of this repository on the Sync server (if the repository is enabled for sync).
		 * 
		 * @since 2.0.3
		 */
		syncRepositoryId: 0,

		/**
		 * Constructor.
		 */
		constructor: function(id, action, type, _SECURITY_TOPIC) {
			this.logDebug("construct " + id + " RepositoryData");
			this.id = id;
			this.action = action;
			this.type = type;

			if (!this.propertiesMapping) {
				this.propertiesMapping = [];
			}
			if (!this.editServiceCategories) {
				this.editServiceCategories = [];
			}
			if (!this.documentSystemPropDescs) {
				this.documentSystemPropDescs = [];
			}
			if (!this.documentPropDescs) {
				this.documentPropDescs = [];
			}
			if (!this.onlydocumentPropDescs) {
				this.onlydocumentPropDescs = [];
			}
			if (!this.folderSystemPropDescs) {
				this.folderSystemPropDescs = [];
			}
			if (!this.folderPropDescs) {
				this.folderPropDescs = [];
			}
			if (!this.onlyfolderPropDescs) {
				this.onlyfolderPropDescs = [];
			}
			if (!this.p8ConnectionPoints) {
				this.p8ConnectionPoints = [];
			}
			if (!this.cmLanguages) {
				this.cmLanguages = [];
			}
			if (!this.cmServers) {
				this.cmServers = [];
			}
		},

		/**
		 * Returns true if this is data for a new repository.
		 */
		isNew: function() {
			return (this.action == "new");
		},

		/**
		 * Returns true if this is data for a copied repository.
		 */
		isCopied: function() {
			return (this.action == "copy");
		},

		/**
		 * Returns true if this is data for a repository that is being edited.
		 */
		isEdit: function() {
			return (this.action == "edit");
		},

		/**
		 * Finds the system document column definition.
		 */
		findSystemDocumentColDefinition: function(colName) {
			if (!this.docSystemColsDictionary) {
				this.docSystemColsDictionary = new dictionary();
				array.forEach(this.documentSystemPropDescs, lang.hitch(this, function(entry, index) {
					this.docSystemColsDictionary.add(entry.value.toLowerCase(), entry);
				}));
			}
			return this.docSystemColsDictionary.item(colName);
		},

		/**
		 * Finds the system folder column definition.
		 */
		findSystemFolderColDefinition: function(colName) {
			if (!this.folderSystemColsDictionary) {
				this.folderSystemColsDictionary = new dictionary();
				array.forEach(this.folderSystemPropDescs, lang.hitch(this, function(entry, index) {
					this.folderSystemColsDictionary.add(entry.value.toLowerCase(), entry);
				}));
			}
			return this.folderSystemColsDictionary.item(colName);
		},

		/**
		 * Finds the document column definition.
		 */
		findDocumentColDefinition: function(colName) {
			if (!this.documentColsDictionary) {
				this.documentColsDictionary = new dictionary();
				array.forEach(this.documentPropDescs, lang.hitch(this, function(entry, index) {
					this.documentColsDictionary.add(entry.value.toLowerCase(), entry);
				}));
			}
			return this.documentColsDictionary.item(colName);
		},

		/**
		 * Find the document, folder, or document system property description.
		 */
		findColDefinition: function(colName) {
			if (!this.colsDictionary) {
				this.colsDictionary = new dictionary();
				array.forEach(this.documentPropDescs, lang.hitch(this, function(entry, index) {
					this.colsDictionary.add(entry.value.toLowerCase(), entry);
				}));
				array.forEach(this.folderPropDescs, lang.hitch(this, function(entry, index) {
					this.colsDictionary.add(entry.value.toLowerCase(), entry);
				}));
				array.forEach(this.documentSystemPropDescs, lang.hitch(this, function(entry, index) {
					if (!this.colsDictionary.contains(entry.value.toLowerCase())) {
						this.colsDictionary.add(entry.value.toLowerCase(), entry);
					}
				}));
			}
			return this.colsDictionary.item(colName);
		},

		/**
		 * Find the property mapping with the input id.
		 */
		findPropertyMapping: function(id) {
			for (var i = 0; i < this.propertiesMapping.length; i++) {
				if (this.propertiesMapping[i].id == id)
					return this.propertiesMapping[i];
			}
			return null;
		},

		/**
		 * Find the property mapping with the input repository property value.
		 */
		findPropertyFromMapping: function(value) {
			for (var i = 0; this.propertiesMapping && i < this.propertiesMapping.lenth; i++) {
				if (value == this.propertiesMapping[i].getRepositoryProperty())
					return true;
			}
			return false;
		},

		_getDefinitionArray: function(definitions) {
			var data = [];
			for (var i = 0; i < definitions.length; i++) {
				var newItem = {
					label: definitions[i].label,
					type: this._getTypeName(definitions[i].dataType),
					value: definitions[i].value
				};
				if (definitions[i].searchable != null) {
					newItem.searchable = definitions[i].searchable;
				}
				data.push(newItem);
			}
			return data;
		},

		/**
		 * @private Converts the "xs:.." data type name to STRING, LONG, DATE, etc... Office property mapping seems to
		 *          work with those type names.
		 */
		_getTypeName: function(dataType) {
			switch (dataType) {
			case "xs:string":
			case "xs:string:alphanum":
			case "xs:string:alpha":
			case "xs:string:ext":
			case "xs:string:num":
			case "xs:string:clob":
				return "STRING";
			case "xs:timestamp":
			case "xs:date":
			case "xs:time":
				return "DATE";
			case "xs:integer":
			case "xs:short":
			case "xs:long":
				return "LONG";
			case "xs:decimal":
			case "xs:double":
				return "DOUBLE";
			case "xs:boolean":
				return "BOOLEAN";
			case "xs:object":
				return "OBJECT";
			case "xs:guid":
				return "GUID";
			}
			return null;
		},

		/**
		 * Returns the repositories defined as community libraries.
		 */
		getCommunityLibraryRepositories: function(excludeRepositoryId) {
			var array = [];
			var repositories = ecm.model.admin.adminData.repositories;
			if (repositories) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (repository.getConnectionsCommunityLibrary()) {
						if (!excludeRepositoryId || repository.id != excludeRepositoryId) {
							array.push(repository);
						}
					}
				}
			}
			return array;
		},

		/**
		 * Returns boolean indicating if the input id is a unique repository id.
		 */
		isUniqueId: function(reposId) {
			var isUnique = true;
			var reposId = reposId ? reposId.toLowerCase() : reposId;
			var repositories = ecm.model.admin.adminData.repositories;
			if (repositories) {
				for (var i = 0; i < repositories.length; i++) {
					var repository = repositories[i];
					if (repository.id.toLowerCase() == reposId) {
						if (!this.repositoryConfig.id) { // add
							isUnique = false;
							break;
						} else if (this.repositoryConfig.id.toLowerCase() != reposId) { // edit
							isUnique = false;
							break;
						}
					}
				}
			}
			return isUnique;
		},

		/**
		 * @private
		 */
		_hasColumn: function(columns, id) {
			if (id && columns) {
				for ( var i in columns) {
					if (columns[i] == id) {
						return true;
					}
				}
			}
			return false;
		},

		/**
		 * Get the column data for the search results.
		 */
		getSearchResultsColumnData: function(detailsColumns, magazineColumns) {
			var detailsColumns = this.repositoryConfig.getSearchDefaultColumns() ? this.repositoryConfig.getSearchDefaultColumns() : [];
			var magazineColumns = this.repositoryConfig.getSearchMagazineDefaultColumns() ? this.repositoryConfig.getSearchMagazineDefaultColumns() : [];
			// Get default values for magazine view
			if (magazineColumns.length == 0) {
				var lastModifiedBy = null;
				var lastModifiedDate = null;
				if (this.type == "cmis") {
					lastModifiedBy = "cmis:lastModifiedBy";
					lastModifiedDate = "cmis:lastModificationDate";
				} else if (this.type == "p8") {
					lastModifiedBy = "LastModifier";
					lastModifiedDate = "DateLastModified";
				} else if (this.type == "cm") {
					lastModifiedBy = "modifiedBy";
					lastModifiedDate = "modifiedTimestamp";
				}
				if (!this._hasColumn(detailsColumns, lastModifiedBy) || !this._hasColumn(detailsColumns, lastModifiedDate)) {
					for (var i = 0; i < detailsColumns.length; i++) {
						var columnId = detailsColumns[i];
						magazineColumns.push(columnId);
						if (i == 3) {
							break;
						}
					}
				} else {
					magazineColumns.push(lastModifiedBy);
					magazineColumns.push(lastModifiedDate);
				}
			}

			var nameField = this.defaultData.getNameFieldPlaceholder();
			var combinedColumns = [];
			for (var i = 0; i < detailsColumns.length; i++) {
				var columnId = detailsColumns[i];
				if (i == 0) {
					// name field is always the first field to display in the list
					combinedColumns.push({
						label: ecm.messages.Name,
						name: nameField,
						value: nameField,
						magazineView: true,
						detailsView: (columnId == nameField) ? true : false
					});
					if (columnId == nameField) {
						continue;
					}
				}
				var foundItem = this.findColDefinition(columnId.toLowerCase());
				var magView = this._hasColumn(magazineColumns, columnId);
				if (foundItem) {
					var obj = lang.clone(foundItem);
					obj.magazineView = magView;
					obj.detailsView = true;
					combinedColumns.push(obj);
				} else {
					combinedColumns.push({
						label: ecm.messages["$" + columnId] || ecm.messages["$" + columnId.toLowerCase()],
						name: columnId,
						value: columnId,
						magazineView: magView,
						detailsView: true
					});
				}
			}
			var prevColumnId = null;
			for (var i = 0; i < magazineColumns.length; i++) {
				var columnId = magazineColumns[i];
				var inDetails = this._hasColumn(detailsColumns, columnId);
				if (!inDetails) {
					var foundItem = this.findColDefinition(columnId.toLowerCase());
					var obj = null;
					if (foundItem) {
						obj = lang.clone(foundItem);
						obj.magazineView = true;
						obj.detailsView = false;
					} else {
						obj = {
							label: ecm.messages["$" + columnId] || ecm.messages["$" + columnId.toLowerCase()],
							name: columnId,
							value: columnId,
							magazineView: true,
							detailsView: false
						};
					}

					var addedIt = false;
					if (prevColumnId) {
						var newColumns = [];
						for (var j = 0; j < combinedColumns.length; j++) {
							var colData = combinedColumns[j];
							newColumns.push(colData);
							if (!addedIt && prevColumnId == colData.value) {
								newColumns.push(obj);
								addedIt = true;
							}
						}
						combinedColumns = newColumns;
					}
					if (!addedIt) {
						combinedColumns.splice(1, 0, obj); // combinedColumns.unshift(obj);
					}
				}
				prevColumnId = columnId;
			}
			return combinedColumns;
		},

		/**
		 * Get the column list for browse.
		 */
		getBrowseColumnData: function() {
			var detailsColumns = this.repositoryConfig.getFolderDefaultColumns() ? this.repositoryConfig.getFolderDefaultColumns() : [];
			var magazineColumns = this.repositoryConfig.getFolderMagazineDefaultColumns() ? this.repositoryConfig.getFolderMagazineDefaultColumns() : [];
			// Get default values for magazine view browse
			if (magazineColumns.length == 0) {
				var lastModifiedBy = null;
				var lastModifiedDate = null;
				if (this.type == "cmis") {
					lastModifiedBy = "cmis:lastModifiedBy";
					lastModifiedDate = "cmis:lastModificationDate";
				} else if (this.type == "p8") {
					lastModifiedBy = "LastModifier";
					lastModifiedDate = "DateLastModified";
				} else if (this.type == "cm") {
					lastModifiedBy = "modifiedBy";
					lastModifiedDate = "modifiedTimestamp";
				}
				if (!this._hasColumn(detailsColumns, lastModifiedBy) || !this._hasColumn(detailsColumns, lastModifiedDate)) {
					for (var i = 0; i < detailsColumns.length; i++) {
						var columnId = detailsColumns[i];
						magazineColumns.push(columnId);
						if (i == 3) {
							break;
						}
					}
				} else {
					magazineColumns.push(lastModifiedBy);
					magazineColumns.push(lastModifiedDate);
				}
			}

			var combinedColumns = [];
			for (var i = 0; i < detailsColumns.length; i++) {
				var columnId = detailsColumns[i];
				var foundItem = this.findDocumentColDefinition(columnId.toLowerCase());
				var magView = (i == 0) ? true : this._hasColumn(magazineColumns, columnId);
				if (foundItem) {
					var obj = lang.clone(foundItem);
					obj.magazineView = magView;
					obj.detailsView = true;
					combinedColumns.push(obj);
				} else {
					combinedColumns.push({
						label: ecm.messages["$" + columnId] || ecm.messages["$" + columnId.toLowerCase()],
						name: columnId,
						value: columnId,
						magazineView: magView,
						detailsView: true
					});
				}
			}
			var prevColumnId = null;
			for (var i = 0; i < magazineColumns.length; i++) {
				var columnId = magazineColumns[i];
				var inDetails = this._hasColumn(detailsColumns, columnId);
				if (!inDetails) {
					var foundItem = this.findDocumentColDefinition(columnId.toLowerCase());
					var obj = null;
					if (foundItem) {
						obj = lang.clone(foundItem);
						obj.magazineView = true;
						obj.detailsView = false;
					} else {
						obj = {
							label: ecm.messages["$" + columnId] || ecm.messages["$" + columnId.toLowerCase()],
							name: columnId,
							value: columnId,
							magazineView: true,
							detailsView: false
						};
					}

					var addedIt = false;
					if (prevColumnId) {
						var newColumns = [];
						for (var j = 0; j < combinedColumns.length; j++) {
							var colData = combinedColumns[j];
							newColumns.push(colData);
							if (!addedIt && prevColumnId == colData.value) {
								newColumns.push(obj);
								addedIt = true;
							}
						}
						combinedColumns = newColumns;
					}
					if (!addedIt) {
						combinedColumns.splice(1, 0, obj);
					}
				}
				prevColumnId = columnId;
			}
			return combinedColumns;
		},

		/**
		 * @private Loads the default repository configuration data for new repositories. Loads the latest data for
		 *          repositories being edited.
		 */
		_loadRepositoryConfig: function(callback) {
			if (this.isNew()) {
				RepositoryConfig.getDefaultRepositoryConfig(this.type, lang.hitch(this, function(defaultRepositoryConfig) {
					this.repositoryConfig = defaultRepositoryConfig;
					if (callback) {
						callback();
					}
				}), null, {
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				});
			} else {
				this.repositoryConfig.getConfig(function(response) {
					this.repositoryConfig = response;
					if (callback)
						callback(response);
				}, null, {
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				});
			}
		},

		/**
		 * Loads the repository data needed before logging on to the repository.
		 * 
		 * @param callback
		 *            The callback method.
		 */
		loadDataBeforeLogOn: function(callback) {
			this.logEntry(arguments.callee.nom);
			this.defaultData = AdminConfig.createAdminConfig(this.type);
			this._loadRepositoryConfig(lang.hitch(this, function(defaultRepositoryConfig) {
				if (this.type == "cm") {
					Request.invokeService("cm/listServers", null, {
						action: "list",
						userid: ecm.model.desktop.userId,
						application: ecm.model.admin.appCfg.id,
						login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
					}, lang.hitch(this, function(response) {
						if (response) {
							this.cmServers = response.list;
						}
						if (callback) {
							callback();
						}
					}));

				} else {
					if (callback) {
						callback();
					}
				}
			}));
		},

		/**
		 * @private Returns the repository id.
		 */
		_getRepositoryId: function() {
			if (this.repository) {
				return this.repository.id
			} else {
				return this.repositoryConfig.id || this.repositoryConfig.tempId;
			}
		},

		/**
		 * Loads the repository data after logging on to the repository.
		 * 
		 * @param callback
		 *            The callback method.
		 */
		loadData: function(callback) {
			this.logEntry(arguments.callee.nom);
			if (this.type == "cm" || this.type == "p8" || this.type == "cmis") {
				Request.invokeService("admin/" + this.type + "/getAdminRepositoryData", null, {
					application: ecm.model.admin.appCfg.id,
					action: this.action,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					repositoryId: this._getRepositoryId()
				}, lang.hitch(this, function(response) {

					// App server type
					if (response.appServerType) {
						this.appServerType = response.appServerType;
					}

					// RepositoryConfig
					if (response.repositoryConfig) {
						var id = response.repositoryConfig.id ? response.repositoryConfig.id : "" + i;
						var repos = RepositoryConfig.createRepositoryConfig(id);
						lang.mixin(repos, {
							_attributes: response.repositoryConfig
						});
						this.repositoryConfig = repos;
					}

					// CM Languages
					if (response.cmLanguages) {
						this.cmLanguages = response.cmLanguages;
					}

					// P8 Connection Points
					if (response.p8ConnectionPoints) {
						this.p8ConnectionPoints = response.p8ConnectionPoints;
					}

					// Properties
					if (response.properties) {
						this.folderPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.properties) : response.properties;
						this.onlyfolderPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.properties) : response.properties;
						this.onlydocumentPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.properties) : response.properties;
					}
					if (response.documentProperties) {
						this.documentPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.documentProperties) : response.documentProperties;
					}
					if (response.documentMappingProperties) {
						this.documentMappingPropDescs = response.documentMappingProperties;
					} else {
						this.documentMappingPropDescs = lang.clone(this.documentPropDescs);
					}
					if (response.onlyDocumentProperties) {
						this.onlydocumentPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.onlyDocumentProperties) : response.onlyDocumentProperties;
					}
					if (response.folderProperties) {
						this.folderPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.folderProperties) : response.folderProperties;
					}
					if (response.onlyFolderProperties) {
						this.onlyfolderPropDescs = (this.type == "cm") ? this._getDefinitionArray(response.onlyFolderProperties) : response.onlyFolderProperties;
					}

					// System Properties
					if (response.documentSystemProperties) {
						this.documentSystemPropDescs = response.documentSystemProperties;
						this.folderSystemPropDescs = response.documentSystemProperties;
					}
					if (response.folderSystemProperties) {
						this.folderSystemPropDescs = response.folderSystemProperties;
					}

					if (this.type == "cmis") {
						// Make sure the propeties defined as default columns for browse are also in the document properties collection
						var detailsColumns = this.repositoryConfig.getFolderDefaultColumns() ? this.repositoryConfig.getFolderDefaultColumns() : [];
						for ( var i in detailsColumns) {
							var detailColumn = detailsColumns[i];
							var foundColumn = false;
							for ( var j in this.documentPropDescs) {
								var documentPropDesc = this.documentPropDescs[j];
								if (documentPropDesc.value == detailColumn) {
									foundColumn = true;
									break;
								}
							}
							if (foundColumn == false) {
								var colDefinition = this.findColDefinition(detailColumn.toLowerCase());
								if (colDefinition) {
									var newColDef = lang.clone(colDefinition);
									this.documentPropDescs.push(newColDef);
								}
							}
						}

						var magazineColumns = this.repositoryConfig.getFolderMagazineDefaultColumns() ? this.repositoryConfig.getFolderMagazineDefaultColumns() : [];
						for ( var i in magazineColumns) {
							var magazineColumn = magazineColumns[i];
							var foundColumn = false;
							for ( var j in this.documentPropDescs) {
								var documentPropDesc = this.documentPropDescs[j];
								if (documentPropDesc.value == magazineColumn) {
									foundColumn = true;
									break;
								}
							}
							if (foundColumn == false) {
								var colDefinition = this.findColDefinition(magazineColumn.toLowerCase());
								if (colDefinition) {
									var newColDef = lang.clone(colDefinition);
									this.documentPropDescs.push(newColDef);
								}
							}
						}
					}

					// Property Mapping
					if (response.propertyMapping) {
						var propertiesMappingObjects = [];
						for ( var i in response.propertyMapping) {
							var entry = response.propertyMapping[i];
							var id = entry.id ? entry.id : "" + i;
							var propertyMapping = PropertyMappingConfig.createPropertyMappingConfig(id);
							lang.mixin(propertyMapping, {
								_attributes: entry
							});
							propertiesMappingObjects.push(propertyMapping);
						}
						this.propertiesMapping = propertiesMappingObjects;
					}

					if (response.editServiceCategories) {
						var editServiceCategoryObjects = [];
						for ( var i in response.editServiceCategories) {
							var entry = response.editServiceCategories[i];
							var id = entry.id ? entry.id : "" + i;
							var editServiceCategory = EditServiceCategoryConfig.createEditServiceCategoryConfig(id);
							lang.mixin(editServiceCategory, {
								_attributes: entry
							});
							editServiceCategoryObjects.push(editServiceCategory);
						}
						this.editServiceCategories = editServiceCategoryObjects;
					}
					
					if (response["teamspacUpdateStatus"]) {
						this.repositoryConfig._setTeamspaceUpdateState(response.teamspacUpdateStatus);
					}
					if (response["syncUpdateStatus"]) {
						this.repositoryConfig._setSyncUpdateState(response.syncUpdateStatus);
					}
					// Permissions
					if (response.teamspaceTemplatePermissions) {
						this.repositoryConfig.setTeamspaceTemplatePermissions(response.teamspaceTemplatePermissions);
					}
					if (response.teamspacePermissions) {
						this.repositoryConfig.setTeamspacePermissions(response.teamspacePermissions);
					}
					if (response.redactionPermissions) {
						this.repositoryConfig.setRedactionPermissions(response.redactionPermissions);
					}
					if (response.redactionPolicyPermissions) {
						this.repositoryConfig.setRedactionPolicyPermissions(response.redactionPolicyPermissions);
					}
					if (response.officeTemplatePermissions) {
						this.repositoryConfig.setOfficeTemplatePermissions(response.officeTemplatePermissions);
					}
					if (response.draftPermissions) {
						this.repositoryConfig.setDraftPermissions(response.draftPermissions);
					}
					if (response.entryTemplatePermissions) {
						this.repositoryConfig.setEntryTemplatePermissions(response.entryTemplatePermissions);
					}
					if (response.searchPermissions) {
						this.repositoryConfig.setSearchPermissions(response.searchPermissions);
					}

					if (response.taskManagerServiceEnabled) {
						this.taskManagerServiceEnabled = response.taskManagerServiceEnabled;
					}
					
					if (response.officeOnlineEnabled) {
						this.officeOnlineEnabled = response.officeOnlineEnabled == true || response.officeOnlineEnabled == "true";
						this.officeOnlineServiceURL = response.officeOnlineServiceURL;
					}
					
					// does the repository have the office online addins yet 
					this.officeOnlineSupported = response.officeOnlineSupported;
					
					// does the repository have edit service addon yet
					this.editServiceAddonInstalled = response.editServiceAddonInstalled;
					
					// Sync server properties
					this.syncEnabled = response.syncEnabled;
					this.syncRepositoryId = response.syncRepositoryId;

					// P8 Abstract Persistable class availability
					this.abstractPersistableSupported = response.abstractPersistableSupported;

					if (callback) {
						callback();
					}
				}));
			} else {
				if (callback)
					callback();
			}
			this.logExit(arguments.callee.nom);
		},

		/**
		 * Saves the data to the mid-tier.
		 * 
		 * @param isLoggedOn
		 *            Boolean indicating if the user logged on to this repository.
		 * @param callback
		 *            The callback method.
		 */
		save: function(isLoggedOn, callback) {
			this._addAddOn(isLoggedOn, lang.hitch(this, function() {
				if (this.repository) {
					this.repository.clearContentClassesCache();
					// Clear the content classes cache under the desktop repository too. 
					if (this.repository.id.indexOf("_CIWEBADMIN") != -1) {
						var desktopRepository = ecm.model.desktop.getRepository(this.repository.id.replace("_CIWEBADMIN", ""));
						if (desktopRepository && desktopRepository.connected) {
							desktopRepository.clearContentClassesCache();
						}
					}
				}
				if (this.isNew() || this.isCopied()) {
					this._addRepositoryConfig(lang.hitch(this, function(response) {
						this.action = "edit";
						this.id = this.repositoryConfig.id;
						if (this.propertiesMapping) {
							this.updatePropertiesMapping(this.propertiesMapping, lang.hitch(this, function(response) {
								ecm.model.admin.adminData.loadRepositories();
								if (callback) {
									callback();
								}
							}));
						}if (this.editServiceCategories && this._loadEditServiceData && this.repositoryConfig.getEditServiceEnabled && this.repositoryConfig.getEditServiceEnabled()) {
							this.updateEditServiceCategories(this.editServiceCategories, lang.hitch(this, function(response) {
								ecm.model.admin.adminData.loadRepositories();
								if (callback) {
									callback();
								}
							}));
						}else {
							ecm.model.admin.adminData.loadRepositories();
							if (callback) {
								callback();
							}
						}
					}));
				} else {
					this._updateRepositoryConfig(lang.hitch(this, function(response) {
						if (this.propertiesMapping) {
							this.updatePropertiesMapping(this.propertiesMapping, lang.hitch(this, function(response) {
								ecm.model.admin.adminData.onChange(this.repositoryConfig);
								if (callback) {
									callback();
								}
							}));
						} if (this.editServiceCategories && this._loadEditServiceData && this.repositoryConfig.getEditServiceEnabled && this.repositoryConfig.getEditServiceEnabled()) {
							this.updateEditServiceCategories(this.editServiceCategories, lang.hitch(this, function(response) {
								ecm.model.admin.adminData.onChange(this.repositoryConfig);
								if (callback) {
									callback();
								}
							}));
						} else {
							ecm.model.admin.adminData.onChange(this.repositoryConfig);
							if (callback) {
								callback();
							}
						}
					}));
				}
			}));
		},

		/**
		 * @private Adds the repository.
		 */
		_addRepositoryConfig: function(callback) {
			if (this.type == "p8") {
				var postObj = {
					"repositoryConfig": this.repositoryConfig._attributes
				};
				var postData = JSON.stringify(postObj, null);
				var params = lang.mixin({
					application: ecm.model.admin.appCfg.id,
					repositoryId: this._getRepositoryId(),
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					"action": "add"
				}, this.default_params);
				Request.postService("admin/" + this.type + "/updateAdminRepositoryData", null, params, "text/json", postData, callback);
			} else {
				ecm.model.admin.appCfg.addApplicationRepositoryConfig(this.repositoryConfig, callback, {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				});
			}
		},

		/**
		 * @private Updates the repository.
		 */
		_updateRepositoryConfig: function(callback) {
			if (this.type == "p8") {
				var postObj = {
					"repositoryConfig": this.repositoryConfig._attributes
				};
				var postData = JSON.stringify(postObj, null);
				var params = lang.mixin({
					application: ecm.model.admin.appCfg.id,
					repositoryId: this._getRepositoryId(),
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
					"action": "edit"
				}, this.default_params);
				Request.postService("admin/" + this.type + "/updateAdminRepositoryData", null, params, "text/json", postData, callback);
			} else {
				ecm.model.admin.appCfg.updateApplicationRepositoryConfig(this.repositoryConfig, callback, {
					application: ecm.model.admin.appCfg.id,
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				});
			}
		},

		/**
		 * @private Adds the add on.
		 */
		_addAddOn: function(isLoggedOn, callback) {
			if (isLoggedOn && (this.type == "p8" || this.type == "cm")) {
				var addons = "CEWEBSearchAddOn";
				if (this.repositoryConfig.getUnifiedSearchesEnabled())
					addons += ",CIWEBUnifiedSearchAddOn";
				if (this.repositoryConfig.getTeamspacesEnabled())
					addons += ",CIWEBTeamspacesAddOn";
				if (this.repositoryConfig.getEntryTemplatesEnabled()) {
					addons += ",CIWEBEntryTemplateAddOn";
					if (this.type == "cm") {
						if (this.repositoryConfig.enableEntryTemplateTracking && this.repositoryConfig.enableEntryTemplateTracking.length > 0) {
							addons += ",CIWEBEnableEntryTemplateTracking:";
							for (i in this.repositoryConfig.enableEntryTemplateTracking) {
								addons += ((i > 0) ? ";" : "") + this.repositoryConfig.enableEntryTemplateTracking[i];
							}
						}
						if (this.repositoryConfig.enableEntryTemplateFolderAssocations && this.repositoryConfig.enableEntryTemplateFolderAssocations.length > 0) {
							addons += ",CIWEBEnableEntryTemplateFolderAssociations:";
							for (i in this.repositoryConfig.enableEntryTemplateFolderAssocations) {
								addons += ((i > 0) ? ";" : "") + this.repositoryConfig.enableEntryTemplateFolderAssocations[i];
							}
						}						
					}
				}				
				if (this.repositoryConfig.getBoxShareEnabled()) {
					addons += ",CIWEBBoxShareAddOn";
					if (this.type == "cm") {
						if (this.repositoryConfig.enableBoxShareTracking && this.repositoryConfig.enableBoxShareTracking.length > 0) {
							addons += ",CIWEBBoxShareTracking:";
							for (i in this.repositoryConfig.enableBoxShareTracking) {
								addons += ((i > 0) ? ";" : "") + this.repositoryConfig.enableBoxShareTracking[i];
							}
						}
					}
				}
				if (this.type == "p8" && this.repositoryConfig.getSyncEnabled())
					addons += ",CIWEBSyncServiceAddOn";
				
				if (this.repositoryConfig.getRedactionEnabled())
					addons += ",CIWEBRedactionAddOn";
				
				if ((this.type == "p8" || this.type == "cm") && this.repositoryConfig.getOfficeOnlineEnabled())
					addons += ",CIWEBOfficeOnlineAddOn";
				
				if ((this.type == "p8" || this.type == "cm") && this.repositoryConfig.getEditServiceEnabled && this.repositoryConfig.getEditServiceEnabled())
					addons += ",CIWEBEditAddOn";
				
				if (this.type == "cm" && (this.repositoryConfig.getOfficeOnlineEnabled() || this.repositoryConfig.getEditServiceEnabled())) {
					addons += ",CIWEBEditIntEnableClasses:";
					if (this.repositoryConfig.cmOOSEnableClasses && this.repositoryConfig.cmOOSEnableClasses.length > 0) {
						for (i in this.repositoryConfig.cmOOSEnableClasses) {
							addons += ((i > 0) ? ";" : "") + this.repositoryConfig.cmOOSEnableClasses[i];
						}
					}
				}
				
				var params = {
					application: ecm.model.admin.appCfg.id,
					repositoryId: this._getRepositoryId(),
					values: addons,
					teamspaceTemplatePermissions: this.repositoryConfig.getTeamspaceTemplatePermissions(),
					teamspacePermissions: this.repositoryConfig.getTeamspacePermissions(),
					redactionPermissions: this.repositoryConfig.getRedactionPermissions(),
					redactionPolicyPermissions: this.repositoryConfig.getRedactionPolicyPermissions(),
					officeTemplatePermissions: this.repositoryConfig.getOfficeTemplatePermissions(),
					draftPermissions: this.repositoryConfig.getDraftPermissions(),
					entryTemplatePermissions: this.repositoryConfig.getEntryTemplatePermissions(),
					searchPermissions: this.repositoryConfig.getSearchPermissions(),
					userid: ecm.model.desktop.userId,
					login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
				};
				if (this.repositoryConfig.getRedactionEnabled())
					params.redactionAllowMergeSplit = this.repositoryConfig.getRedactionAllowMergeSplit();
				var serviceName = "admin/";
				if (this.type == "p8") {
					serviceName += "p8/addAddOn";
					params.objectstore = this.repositoryConfig.getObjectStore();
				} else {
					serviceName += "cm/addAddOn";
					params.servername = this.repositoryConfig.getServerName();
				}
				Request.invokeService(serviceName, null, params, lang.hitch(this, function() {
					if (callback)
						callback();
				}));
			} else {
				if (callback)
					callback();
			}
		},
		
		/**
		 * Updates the redaction permissions on the repository.
		 * @since 3.0
		 * @param isLoggedOn
		 * @param callback
		 */
		updateRedactionPermissions: function(isLoggedOn, callback){
			if (isLoggedOn && this.type == "p8" && this.repositoryConfig.getRedactionEnabled()){
				var params = {
						application: ecm.model.admin.appCfg.id,
						repositoryId: this._getRepositoryId(),
						values: "CIWEBRedactionAddOn",
						redactionPermissions: this.repositoryConfig.getRedactionPermissions(),
						redactionPolicyPermissions: this.repositoryConfig.getRedactionPolicyPermissions(),
						userid: ecm.model.desktop.userId,
						login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null
					};
					var serviceName = "admin/";
					serviceName += "p8/addAddOn";
					params.objectstore = this.repositoryConfig.getObjectStore();
					Request.invokeService(serviceName, null, params, lang.hitch(this, function() {
						if (callback)
							callback();
					}));
				
			}
			
		},
		
		updateEditServiceCategories: function(editServiceCategoriesData, callback) {
			this.logEntry(arguments.callee.nom);
			var data = {
				"editServiceCategoriesData": editServiceCategoriesData
			};
			var params = lang.mixin({
				application: ecm.model.admin.appCfg.id,
				action: "updateEditServiceCategories",
				id: this.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				configuration: "RepositoryConfig"
			}, this.default_params);
			var request = ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(data), lang.hitch(this, function(response) {
				if (callback)
					callback(response);
			}));
			this.logExit(arguments.callee.nom);
			return this;
		},


		updatePropertiesMapping: function(propertiesMappingData, callback) {
			this.logEntry(arguments.callee.nom);
			var data = {
				"propertiesMappingData": propertiesMappingData
			};
			var params = lang.mixin({
				application: ecm.model.admin.appCfg.id,
				action: "updatePropertiesMapping",
				id: this.id,
				userid: ecm.model.desktop.userId,
				login_desktop: ecm.model.desktop && ecm.model.desktop.id ? ecm.model.desktop.id : null,
				configuration: "RepositoryConfig"
			}, this.default_params);
			var request = ecm.model.Request.postService("admin/configuration", null, params, "text/json", dojojson.toJson(data), lang.hitch(this, function(response) {
				if (callback)
					callback(response);
			}));
			this.logExit(arguments.callee.nom);
			return this;
		},

		_noOp: null

	});

	/**
	 * Static funciton that constructs a repository data object.
	 * 
	 * @param id
	 *            The repository id
	 * @param action
	 * @param type
	 *            The repository type
	 * @memberof ecm.model.admin.RepositoryData
	 */
	RepositoryData.createRepositoryData = function(id, action, type, _SECURITY_TOPIC) {
		return new RepositoryData(id, action, type, _SECURITY_TOPIC);
	};
	return RepositoryData;
});

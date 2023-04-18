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
	"dojo/date/stamp",
	"./_SearchTemplateBase",
	"./SearchCriterion",
	"./ChildComponentSearchCriteria",
	"./SearchFolder",
	"./SearchClass",
	"./SearchContentClasses",
	"./ContentItem",
	"./ODSavedSearch",
	"./FolderTreeModel",
	"dojo/Deferred",
	"./AttributeDefinition"
], function(declare, lang, array, dojojson, dateStamp, _SearchTemplateBase, SearchCriterion, ChildComponentSearchCriteria, SearchFolder, SearchClass, SearchContentClasses, ContentItem, ODSavedSearch, FolderTreeModel, Deferred, AttributeDefinition) {

	/**
	 * Constructs a search template.
	 * 
	 * @param properties
	 *            The properties of the search template. The properties can be any of the public fields as defined
	 *            below, plus those of the ecm.model.ContentItem, ecm.model.Item, and ecm.model._ModelObject.
	 * @name ecm.model.SearchTemplate
	 * @class Represents the search criteria that are defined for a search template. For IBM Content Manager OnDemand,
	 *        the search template is equivalent to a folder.
	 *        <p>
	 *        To improve performance, the search criteria are not filled in the search template initially. Instead, the
	 *        <code>retrieveSearchCriteria</code> must be called to initiate an asynchronous request to make the
	 *        search criteria available.
	 *        </p>
	 *        <p>
	 *        At run time, a user can set the values in the search template to start a search.
	 *        </p>
	 *        <br>
	 *        Private functions should not be used to access public members of the class. Access member variables
	 *        directly. For example:
	 *        <p>
	 *        var searchTemplate = new SearchTemplate({ id: "id", name: "search1", description: "my search", objectType:
	 *        "document" });<br>
	 *        console.debug("Search object type=" + searchTemplate.objectType);
	 *        </p>
	 *        <b>Note:</b> Private getter methods, such as getObjectType, <b>will be removed</b> in a future release.
	 * @augments ecm.model._SearchTemplateBase
	 */
	var SearchTemplate = declare("ecm.model.SearchTemplate", _SearchTemplateBase, {
		/** @lends ecm.model.SearchTemplate.prototype */

		P8_STORED_SEARCH: "application/x-filenet-search",

		/**
		 * A string value holding the product name
		 */
		productName: null,

		_searchContentClass: null,

		/**
		 * A boolean value indicating whether the search is configured to include sub classes in query criteria
		 */
		includeSubclasses: false,

		/**
		 * A boolean value indicating whether the search is editable
		 */
		editable: true,

		/**
		 * An array {@link ecm.model.SearchFolder} objects
		 */
		folders: null,

		/**
		 * An array of {@link ecm.model.SearchClass} objects
		 */
		classes: null,

		/**
		 * An array of object store objects
		 */
		objectStores: null,

		/**
		 * A string value holding the search object type
		 */
		objectType: null,

		/**
		 * An object holding the extended search options
		 */
		moreOptions: null,

		/**
		 * A string value holding the text based search criteria value
		 */
		textSearchCriteria: null,

		/**
		 * A string value holding the text based search type
		 */
		textSearchType: null,
		
		/**
		 * A {@link ecm.model.MetadataTemplateSearchCriteria} object (Box only).
		 * 
		 * @since 3.0
		 */
		metadataTemplateCriteria: null,

		/**
		 * An array of saved search names (CMOD only)
		 */
		odSavedSearches: null,

		/**
		 * A boolean value indicating whether the search is viewable (CMOD only)
		 */
		odViewSavedSearch: false,

		/**
		 * A boolean value indicating whether the search is a private search (CMOD only)
		 */
		odViewPrivateSearch: false,

		/**
		 * A boolean value indicating whether the serach is a public search (CMOD only)
		 */
		odViewPublicSearch: false,

		/**
		 * A boolean value indicating whether this search is using teamspace macros
		 */
		teamspaceMacroSearch: false,

		/**
		 * A boolean value indicating whether the search file type is invalid.
		 */
		invalidFileType: false,

		/**
		 * A boolean value indicating whether the text search criteria is invalid.
		 */
		invalidTextSearch: false,

		/**
		 * A boolean value indicating whether the work criteria are invalid.
		 */
		invalidWork: false,

		/**
		 * The number of items to display per page in the search results (FileNet P8, IBM Content Manager, and CMIS
		 * only). If the specified value is less than 0, then 200 items per page are displayed by default. If the
		 * specified value is 0, then the maximum number of items retrieved is limited only by the query or the
		 * repository, and all items found are displayed on one page.<br>
		 * <br>
		 * Important: If you display the search results in a content list, small page sizes (typically less than 50) are
		 * not recommended because additional requests might be sent to fill the content list. For example, if the
		 * content list displays 10 rows, and you set the page size to 6, the first 6 items returned by the search are
		 * displayed, but to fill the content list, an additional query attempts to retrieve 4 more items.
		 * 
		 * @since 2.0.3.3
		 */
		pageSize: -1,

		_init: function() {
			this.inherited(arguments);

			if (!this.mimetype)
				this.mimetype = "application/x-searchtemplate";

			var icnAutoRun = this._getAttributeValue("IcnAutoRun");
			this._navigatorSavedSearch = typeof icnAutoRun === "undefined" || icnAutoRun != null;
		},

		/**
		 * Returns boolean value if search template was created by Navigator search builder.
		 */
		isNavigatorSavedSearch: function() {
			return this._navigatorSavedSearch;
		},

		/**
		 * Indicates whether this search is configured to run automatically when opened.
		 */
		isAutoRun: function() {
			return this.autoRun || this.mimetype == this.P8_STORED_SEARCH; // P8 stored searches are always automatic
		},

		/**
		 * Indicates whether this search can be displayed in a tree view widget.
		 */
		isShowInTree: function() {
			return this.showInTree || this.mimetype == this.P8_STORED_SEARCH; // P8 stored searches are always shown in the tree
		},

		/**
		 * Return the {@link ecm.model.ContentClass} used in this search
		 */
		getSearchContentClass: function() {
			if (!this._searchContentClass) {
				this._searchContentClass = this.repository.getContentClass(this.className);
			}
			return this._searchContentClass;
		},

		/**
		 * Set the content class for the search
		 * 
		 * @param searchContentClass
		 *            A {@link ecm.model.ContentClass} object or {@link ecm.model.SearchContentClasses} if multiple
		 *            classes specified
		 */
		setSearchContentClass: function(searchContentClass) {
			if (!searchContentClass)
				return;
			this._searchContentClass = searchContentClass;

			this.classes = [];
			var subclasses = this.includeSubclasses;
			if (searchContentClass.isInstanceOf && searchContentClass.isInstanceOf(SearchContentClasses)) {
				var contentClasses = searchContentClass.contentClasses;
				if (contentClasses.length > 1)
					subclasses = false;
				array.forEach(contentClasses, function(contentClass) {
					this.classes.push(new SearchClass({
						id: contentClass.id,
						name: contentClass.name,
						objectType: this.objectType,
						searchSubclasses: subclasses
					}));
				}, this);
			} else {
				this.classes.push(new SearchClass({
					id: searchContentClass.id,
					name: searchContentClass.name,
					objectType: this.objectType,
					searchSubclasses: this.includeSubclasses
				}));
			}

			this.className = this.classes[0].id;
			this.classDisplayName = this.classes[0].name;
			this.includeSubclasses = subclasses;
		},

		/**
		 * @private
		 */
		setClasses: function(classes) {
			if (!(classes instanceof Array) || classes.length < 1)
				return;

			var repository, objectStore;
			if (!array.some(this.objectStores, function(os) {
				repository = os.repositoryId ? ecm.model.desktop.getRepository(os.repositoryId) : null;
				return repository != null;
			})) {
				repository = this.repository;
				objectStore = this.objectStores instanceof Array && this.objectStores.length > 0 && this.objectStores[0];
			}

			var contentClasses = [];
			array.forEach(classes, function(cls) {
				var contentClass = repository.getContentClass(cls.id, objectStore);
				contentClass.name = cls.name;
				contentClasses.push(contentClass);
			}, this);
			if (contentClasses.length > 1) {
				this._searchContentClass = new SearchContentClasses(contentClasses);
				this.includeSubclasses = false;
			} else {
				this._searchContentClass = contentClasses[0];
			}

			this.classes = classes;
			this.className = classes[0].id;
			this.classDisplayName = classes[0].name;
		},

		/**
		 * @private
		 */
		isVersionOptionNone: function() {
			return this.moreOptions && this.moreOptions.versionOption && this.moreOptions.versionOption == "none";
		},

		/**
		 * Indicates whether this search contains text search criteria.
		 */
		isTextSearchCriteriaPresent: function() {
			return lang.isArray(this.textSearchCriteria) && this.textSearchCriteria.length > 0;
		},

		/**
		 * @private
		 */
		isOrderByRank: function() {
			return this.resultsDisplay && this.resultsDisplay.sortBy == "Rank";
		},

		_applyRetrievedSearchCriteria: function(response) {
			this.inherited(arguments);

			var methodName = "_applyRetrieveSearchCriteria";
			this.logEntry(methodName, "name: " + response.template_name);
			this.productName = response.productName;
			this.objectType = response.objectType;
			this.odViewSavedSearch = response.query_view;

			if (response.search_objectstores) {
				this.objectStores = [];
				for ( var i in response.search_objectstores) {
					var osJSON = response.search_objectstores[i];
					var os = {
						id: osJSON.id,
						symbolicName: osJSON.name,
						displayName: osJSON.displayName,
						repositoryId: osJSON.repositoryId
					};
					this.objectStores.push(os);
				}
			}

			var classes = [];
			if (response.search_classes) {
				for ( var i in response.search_classes) {
					var classJSON = response.search_classes[i];
					classJSON.id = classJSON.name;
					classJSON.name = classJSON.displayName;
					classes.push(new SearchClass(classJSON));
				}
				this.includeSubclasses = typeof response.search_classes[0].searchSubclasses === "undefined" ? false : response.search_classes[0].searchSubclasses;
			} else {
				classes.push(new SearchClass({
					id: response.template_name,
					name: response.template_label,
					objectType: response.objectType
				}));
				this.includeSubclasses = typeof response.searchSubclasses === "undefined" ? false : response.searchSubclasses;
			}
			this.setClasses(classes);
			if (!this.classDisplayName || this.classDisplayName == "$common") {
				this.classDisplayName = this.className == "$common" ? ecm.messages.search_class_all_pseudo : this.className;
			}

			if (response.search_folders) {
				this.folders = [];
				for ( var i in response.search_folders) {
					var folderJSON = response.search_folders[i];
					this.folders.push(new SearchFolder(folderJSON.id, folderJSON.pathName, folderJSON.objectStoreId, folderJSON.objectStoreName, folderJSON.searchSubfolders, folderJSON.view, folderJSON.itemId));
					this.teamspaceMacroSearch = this.teamspaceMacroSearch || folderJSON.id == ecm.model.FolderTreeModel.THIS_TEAMSPACE_ID;
				}
			}

			if (response.moreOptions) {
				this.moreOptions = response.moreOptions;
				this.moreOptions.objectType = this.objectType;
			}

			this.textSearchCriteria = [];
			if (lang.isArray(response.search_text_criteria)) {
				this.textSearchCriteria = response.search_text_criteria;
			} else if (response.textSearchCriteria) {
				this.textSearchCriteria = [
					response.textSearchCriteria
				];
			}
			this.textCriteriaLayout = response.textCriteriaLayout;
			this.textSearchType = response.textSearchType;

			this.operatorHidden = response.operatorHidden;
			this.criteriaRelationshipHidden = response.criteriaRelationshipHidden;

			this.logInfo(methodName, "invalidFileType: " + response.invalidFileType);
			this.invalidFileType = response.invalidFileType;
			this.logInfo(methodName, "invalidTextSearch: " + response.invalidTextSearch);
			this.invalidTextSearch = response.invalidTextSearch;
			this.logInfo(methodName, "invalidWork: " + response.invalidWork);
			this.invalidWork = response.invalidWork;
			this.logExit(methodName);
		},

		/**
		 * Set the search criteria to be a OD saved query (CMOD only)
		 * 
		 * @param odSavedQuery
		 *            A {@link ecm.model.ODSavedSearch} object
		 */
		setCritieraToODSavedQuery: function(odSavedQuery) {
			this.logEntry("setCritieraToODSavedQuery");

			if (odSavedQuery && odSavedQuery.searchCriteria) {
				var savedSearchCriteria = odSavedQuery.searchCriteria;

				for ( var i in this.searchCriteria) {
					var criterion = this.searchCriteria[i];

					var savedSearchCriterion = savedSearchCriteria[criterion.id];
					if (savedSearchCriterion) {
						criterion.selectedOperator = savedSearchCriterion.operator;
						criterion.setValues(savedSearchCriterion.values);
					}
				}
			}

			this.logExit("setCritieraToODSavedQuery");
		},

		/**
		 * Generates a query string from the (likely filled in) search template. The query string has a JSON syntax, and
		 * is a JSON string of an array of objects with name, operator, and values fields, as in this example: <br>
		 * '[{"name":"TIMESTAMP","operator":"Equals","values":["",""]},{"name":"USER_ID","operator":"Equals","values":["anderson",""]},{"name":"SOURCE","operator":"Equals","values":["scanner",""]}]'
		 */
		getQueryString: function() {
			var query = [];
			for ( var i in this.searchCriteria) {
				var criterion = this.searchCriteria[i];
				if (criterion.isInstanceOf && criterion.isInstanceOf(ChildComponentSearchCriteria)) { // CM8 only
					var childComp = {
						template_name: criterion.name,
						criteria: []
					};

					var childCriteria = criterion.searchCriteria;
					for ( var j in criterion.searchCriteria) {
						var childCriterion = childCriteria[j];
						var queryTerm = {
							name: childCriterion.id,
							operator: childCriterion.selectedOperator,
							values: childCriterion.values
						};
						childComp.criteria.push(queryTerm);
					}

					query.push(childComp);
				} else {
					var queryTerm = {
						name: criterion.id,
						operator: criterion.selectedOperator,
						values: criterion.values
					};
					query.push(queryTerm);
				}
			}

			return dojojson.toJson(query);
		},

		/**
		 * Perform a search using the (filled in) search template.
		 * 
		 * @param callback
		 *            A callback function to be called after the search has been performed. Passes a
		 *            {@link ecm.model.ResultSet} as a parameter.
		 * @param sortProperty
		 *            A string value holding the property name to used as the sort property
		 * @param descending
		 *            A flag indicating the sort direction (ie. ascending or descending)
		 * @param teamspace
		 *            A {@link ecm.model.Teamspace} object (if the search is run within the context of a teamspace
		 * @param errorCallback
		 *            A callback function to call if there are errors returned when performing the search
		 */
		search: function(callback, sortProperty, descending, teamspace, errorCallback) {
			if (teamspace) { // Search is run within a teamspace
				this.teamspaceId = teamspace && lang.isString(teamspace) ? teamspace : teamspace.id;
			}
			var self = this;
			//set criteria for saved search in favorite.
			var deferred = new Deferred();
			if (!this.searchCriteria && this.isFavorite) {	
				this.retrieveSearchCriteria(function(searchCriteria) {
					deferred.resolve(this.searchCriteria);
				}, null, this.teamspace ? this.teamspace.id : null, false, false, false, null);
			}
			else{
				deferred.resolve(true);
			}
			var request = ecm.model.Request.postService("search", this.repository.type, {
				desktop: ecm.model.desktop.id,
				repositoryId: this.repository.id,
				teamspaceId: this.teamspaceId ? this.teamspaceId : "",
				template_name: this.id,
				criterias: this.getQueryString(),
				order_by: sortProperty,
				order_descending: descending,
				searchTimestampAsText: !!this.repository.inputTimestampAsText,
				searchViaCeApi: ecm.model.desktop._searchViaCeApi ? ecm.model.desktop._searchViaCeApi : false
			}, "text/json", this.searchCriteria ? this.toJson(true) : "{}", function(response) {
				deferred.then(function(results){
					self._searchCompleted(response, callback, teamspace);
				});
				
			}, false, false, false, function(response) {
				if (response.errors && errorCallback) {
					errorCallback(response);
				}
			});

			return request;
		},

		_searchCompleted: function(response, callback, teamspace) {
			// Create the result set using the repository that was searched, not the repository
			// where the search template is stored or was instantiated from (this.repository)
			if (!array.some(this.objectStores, function(os) {
				response.repository = os.repositoryId ? ecm.model.desktop.getRepository(os.repositoryId) : null;
				return response.repository != null;
			})) {
				response.repository = this.repository;
			}
			response.parentFolder = this;
			response.searchTemplate = this;
			response.teamspaceId = this.teamspaceId;

			var results = ContentItem.createResultSet(response);
			if (this.moreOptions && this.moreOptions.versionOption) {
				results._versionLookup = {};
				results._versionLookup[this.repository.id] = this.moreOptions.versionOption;
			}
			if (callback) {
				callback(results);
			}
			this.onSearchCompleted(results);
		},

		/**
		 * Update the allowed criteria values on the serach template
		 * 
		 * @param name
		 *            A string value holding the criteria name
		 * @param names
		 *            An array of criteria names
		 * @param values
		 *            An array of criteria values
		 * @param callback
		 *            A callback function to be called after the critera values have been updated
		 */
		updateAllowedValues: function(name, names, values, callback) {
			var self = this;
			var request = ecm.model.Request.invokeService("getFKValues", this.repository.type, {
				repositoryId: this.repository.id,
				template_name: this.id,
				criteria_name: name,
				criteria_names: dojojson.toJson(names),
				criteria_values: dojojson.toJson(values)
			}, function(response) {
				self._getFKValuesComplete(response, callback);
			});

			return request;
		},

		_getFKValuesComplete: function(response, callback) {
			var methodName = "_getFKValuesComplete";
			this.logEntry(methodName);
			for ( var i in response.criterias) {
				var criterionJSON = response.criterias[i];
				for ( var j in this.searchCriteria) {
					var criterion = this.searchCriteria[j];
					if (criterionJSON.name == criterion.id) {
						this.logDebug(methodName, "allowed values: " + criterionJSON.validValues);
						criterion.allowedValues = criterionJSON.validValues;
						break;
					}
				}
			}

			if (callback) {
				callback();
			}
			this.logExit(methodName);
		},

		/**
		 * Perform a search for the contained items object specified object
		 * 
		 * @param documentId
		 *            A string value holding a document id
		 * @param callback
		 *            A callback function to be called after the search has been performed. Passes a
		 *            {@link ecm.model.ResultSet} as a parameter.
		 */
		searchDocument: function(documentId, callback) {
			var self = this;
			var request = ecm.model.Request.invokeService("getContentItems", this.repository.type, {
				repositoryId: this.repository.id,
				docid: documentId,
				template_name: this.name
			}, function(response) {
				self._searchDocumentCompleted(response, callback);
			});

			return request;
		},

		_searchDocumentCompleted: function(response, callback) {
			response.repository = this.repository;
			response.searchTemplate = this;

			var results = ContentItem.createResultSet(response);
			if (this.moreOptions && this.moreOptions.versionOption) {
				results._versionLookup = {};
				results._versionLookup[this.repository.id] = this.moreOptions.versionOption;
			}
			if (callback) {
				callback(results);
			}
		},

		/**
		 * Retrieves named queries from OnDemand for this search template.
		 * 
		 * @param callback
		 *            Callback method to allow the caller to take action after retrieve of named queries completes.
		 */
		retrieveODSavedQueries: function(callback) {
			var request;
			var self = this;
			if (this.odSavedSearches) {
				callback(this.odSavedSearches);
			} else {
				if (this.repository.type == 'od') {
					request = ecm.model.Request.invokeService("listSavedSearches", this.repository.type, {
						repositoryId: this.repository.id,
						template_name: this.id
					}, function(response) {
						self.retrieveODSavedQueriesCompleted(response, callback);
					});
				}
			}

			return request;
		},

		/**
		 * @private
		 */
		retrieveODSavedQueriesCompleted: function(response, callback) {
			if (response) {
				this.odViewSavedSearch = response.query_view;
				this.odViewPrivateSearch = response.query_private;
				this.odViewPublicSearch = response.query_public;

				if (response.query_names)
					this.odSavedSearches = response.query_names;
				else
					this.odSavedSearches = [];
			}

			callback(this.odSavedSearches);
		},

		/**
		 * Retrieves a named query from OnDemand for this search template.
		 * 
		 * @param queryName
		 *            Name of the query to retrieve.
		 * @param callback
		 *            Callback method to allow the caller to take action after the named query is complete.
		 */
		retrieveODSavedQuery: function(queryName, callback) {
			var request;
			var self = this;
			if (this.repository.type == 'od') {
				request = ecm.model.Request.invokeService("retrieveSavedSearch", this.repository.type, {
					repositoryId: this.repository.id,
					template_name: this.id,
					query_name: queryName
				}, function(response) {
					self.retrieveODSavedQueryCompleted(response, callback);
				});
			}

			return request;
		},

		/**
		 * @private
		 */
		retrieveODSavedQueryCompleted: function(response, callback) {
			if (response) {
				response.repository = this.repository;
				response.id = response.name;
				response.templateName = response.template_name;
				response.isPublic = response.query_public;

				var savedSearch = new ODSavedSearch(response);
				if (callback) {
					callback(savedSearch);
				}
			}
		},

		/**
		 * Save a search to OnDemand.
		 * 
		 * @param queryName
		 *            Name of the query to save.
		 * @param isPublic
		 *            A boolean value indicating whether this search is public
		 * @param callback
		 *            A callback function called after the named query has completed being saved.
		 */
		saveODQuery: function(queryName, isPublic, callback) {
			this.logEntry("saveODQuery");
			this.logDebug("saveODQuery", "queryName=" + queryName + ", isPublic=" + isPublic);
			var request;
			var self = this;
			if (this.repository.type == 'od') {
				var odSavedCriteria = [];
				for ( var i in this.searchCriteria) {
					var criterion = this.searchCriteria[i];
					var jsonCriterion = {
						name: criterion.id,
						operator: criterion.selectedOperator,
						values: criterion.values
					};
					odSavedCriteria.push(jsonCriterion);
				}

				request = ecm.model.Request.invokeService("saveSavedSearch", this.repository.type, {
					repositoryId: this.repository.id,
					template_name: this.id,
					query_name: queryName,
					query_public: isPublic,
					saved_criterias: dojojson.toJson(odSavedCriteria)
				}, function(response) {
					self.saveODQueryCompleted(response, callback);
				});
			}

			this.logExit("saveODQuery");
			return request;
		},

		/**
		 * @private
		 */
		saveODQueryCompleted: function(response, callback) {
			this.logEntry("saveODQuery");

			if (response) {
				if (!this.odSavedSearches)
					this.odSavedSearches = [];

				var alreadyInList = false;
				for ( var i in this.odSavedSearches) {
					if (this.odSavedSearches[i] == response.query_name) {
						alreadyInList = true;
						break;
					}
				}

				if (!alreadyInList) {
					this.odSavedSearches.push(response.query_name);
				}

				if (callback)
					callback(response.query_name);
			}

			this.logEntry("saveODQuery");
		},

		/**
		 * Delete a search from OnDemand.
		 * 
		 * @param queryies
		 *            Name of the queries to delete.
		 * @param callback
		 *            A callback function called after the search has been deleted.
		 */
		deleteODQueries: function(queries, callback) {
			this.logEntry("deleteODQueries");

			var self = this;
			var request = ecm.model.Request.invokeService("deleteSavedSearch", this.repository.type, {
				repositoryId: this.repository.id,
				template_name: this.id,
				query_name: queries
			}, function(response) {
				self._deleteODQueriesCompleted(response, callback, queries);
			});

			this.logExit("deleteODQueries");
			return request;
		},

		_deleteODQueriesCompleted: function(response, callback) {
			this.logEntry("_deleteODQueriesCompleted");

			if (response.query_names)
				this.odSavedSearches = response.query_names;
			else
				this.odSavedSearches = [];

			if (callback) {
				callback();
			}

			this.logExit("_deleteODQueriesCompleted");
		},

		/**
		 * Convert the search criteria into Json format
		 */
		toJson: function(searching) {
			this.logEntry("toJson");

			var jsonTemplate = this.inherited(arguments);
			jsonTemplate.editable = this.editable;
			jsonTemplate.objectType = this.objectType ? this.objectType : "";
			jsonTemplate.template_name = this.className;
			jsonTemplate.template_label = this.classDisplayName;
			jsonTemplate.searchSubclasses = this.includeSubclasses || false;
			jsonTemplate.pageSize = this.pageSize >= 0 ? this.pageSize : -1;

			jsonTemplate.search_objectstores = [];
			if (this.objectStores instanceof Array && this.objectStores.length > 0) {
				for (var i = 0; i < this.objectStores.length; i++) {
					var os = this.objectStores[i];
					jsonTemplate.search_objectstores.push({
						id: os.id,
						name: os.symbolicName,
						displayName: os.displayName,
						repositoryId: os.repositoryId
					});
				}
			}

			jsonTemplate.search_classes = [];
			if (this.classes instanceof Array && this.classes.length > 1) {
				for (var i = 0; i < this.classes.length; i++) {
					var cls = this.classes[i];
					if (!cls.selected)
						continue;
					jsonTemplate.search_classes.push({
						name: cls.id,
						displayName: cls.name,
						searchSubclasses: cls.searchSubclasses,
						editProperty: cls.editProperty,
						objectType: cls.objectType,
						itemId: cls.itemId
					});
				}
			}

			jsonTemplate.search_folders = [];
			for ( var i in this.folders) {
				var folder = this.folders[i];
				jsonTemplate.search_folders.push({
					id: folder.id,
					pathName: folder.name,
					searchSubfolders: folder.searchSubfolders,
					view: folder.view,
					objectStoreId: folder.objectStoreId ? folder.objectStoreId : null,
					itemId: folder.itemId
				});
			}

			if (this.moreOptions)
				jsonTemplate.moreOptions = this.moreOptions;

			var textSearchCriteria = this.textSearchCriteria;
			if (lang.isArray(textSearchCriteria)) {
				jsonTemplate.search_text_criteria = textSearchCriteria;
				var firstCriterion = null;
				if (textSearchCriteria.length > 0)
					firstCriterion = textSearchCriteria[0];
				if (firstCriterion && (!searching || firstCriterion.text))
					jsonTemplate.textSearchCriteria = firstCriterion;
			}
			jsonTemplate.textSearchType = this.textSearchType || "";
			
			if (this.metadataTemplateCriteria) {
				jsonTemplate.metadataTemplateCriteria = array.map([].concat(this.metadataTemplateCriteria), lang.hitch(this, function(criterion) {
					return {
						template_name: criterion.id,
						searchCriteria: array.map(criterion.searchCriteria, lang.hitch(this, "_searchCriterionToJson"))
					};
				}));
			}

			jsonTemplate.resultsDisplay = this.resultsDisplay ? this.resultsDisplay : null;

			if (this.application) {
				jsonTemplate.application = this.application;
			}

			if (searching) {
				var adhoc = this.isNew();
				if (!adhoc) {
					adhoc = array.some(jsonTemplate.searchCriteria, function(criterion) {
						return !criterion.itemId;
					});
				}
				if (!adhoc) {
					adhoc = array.some(jsonTemplate.search_classes, function(criterion) {
						return !criterion.itemId;
					});
				}
				if (!adhoc) {
					adhoc = array.some(jsonTemplate.search_folders, function(criterion) {
						return !criterion.itemId;
					});
				}
				jsonTemplate.adhoc = adhoc;
			}

			var json = dojojson.toJson(jsonTemplate);
			this.logExit("toJson", json);
			return json;
		},

		/**
		 * @deprecated As of release 2.0.2
		 */
		toRecentSearchJson: function(contextId, userId) {
			this.logEntry("toRecentSearchJson");

			var jsonTemplate = {};

			jsonTemplate.templateId = this.id;
			jsonTemplate.name = this.name;
			jsonTemplate.description = this.description || "";
			jsonTemplate.vsId = this.vsId || "";

			var json = dojojson.toJson(jsonTemplate);
			this.logExit("toJson", json);
			return json;
		},

		_searchCriterionToJson: function(criterion) {
			var jsonCriterion = this.inherited(arguments);

			// Note: These are not used in any of the services but cannot be removed until we have a process for deprecating JSON
			jsonCriterion.defaultOperator = criterion.defaultOperator;
			jsonCriterion.availableOperators = criterion.availableOperators;
			jsonCriterion.format = criterion.format;
			jsonCriterion.defaultValue = criterion.defaultValue;
			jsonCriterion.valueRequired = criterion.valueRequired;
			jsonCriterion.readOnly = criterion.readOnly;
			jsonCriterion.hidden = criterion.hidden;
			jsonCriterion.allowedValues = criterion.allowedValues;
			jsonCriterion.maxLength = criterion.maxLength;
			jsonCriterion.minValue = criterion.minValue;
			jsonCriterion.maxValue = criterion.maxValue;
			jsonCriterion.hasSelectedOperators = criterion.hasSelectedOperators;
			if( criterion.hasSelectedOperators && criterion.availableOperators ){
				jsonCriterion.availableOperators = criterion.availableOperators;
			}

			return jsonCriterion;
		},

		_compareMoreOptions: function(thisOptions, thatOptions) {
			var options = lang.clone(thisOptions);
			var options2 = lang.clone(thatOptions);
			if (options.objectType != options2.objectType)
				return false;
			if (!options.versionOption)
				options.versionOption = "none";
			if (!options2.versionOption)
				options2.versionOption = "none";
			if (options.versionOption != options2.versionOption)
				return false;
			if (options.propertyTextAnded === undefined)
				options.propertyTextAnded = true;
			if (options2.propertyTextAnded === undefined)
				options2.propertyTextAnded = true;
			if (new Boolean(options.propertyTextAnded).valueOf() != new Boolean(options2.propertyTextAnded).valueOf())
				return false;

			if (new Boolean(options.macros).valueOf() != new Boolean(options2.macros).valueOf())
				return false;
			if (options.macros) {
				if ((options.macros.fileTypes instanceof Array) != (options2.macros.fileTypes instanceof Array))
					return false;
				if (options.macros.fileTypes instanceof Array) {
					if (options.macros.fileTypes.length != options2.macros.fileTypes.length)
						return false;
					if (!array.every(options.macros.fileTypes, function(fileType) {
						return array.some(options2.macros.fileTypes, function(fileType2) {
							return fileType == fileType2;
						});
					}))
						return false;
				}
				if ((options.macros.userActions instanceof Array) != (options2.macros.userActions instanceof Array))
					return false;
				if (options.macros.userActions instanceof Array) {
					if (options.macros.userActions.length != options2.macros.userActions.length)
						return false;
					if (!array.every(options.macros.userActions, function(action) {
						return array.some(options2.macros.userActions, function(action2) {
							if (action.action != action2.action || action.dateOperator != action2.dateOperator)
								return false;

							if ((action.users instanceof Array) != (action2.users instanceof Array))
								return false;
							if (action.users instanceof Array) {
								if (action.users.length != action2.users.length)
									return false;
								if (!array.every(action.users, function(user) {
									return array.some(action2.users, function(user2) {
										return user == user2;
									});
								}))
									return false;
							}

							if (!array.every(action.dates, function(date) {
								return array.some(action2.dates, function(date2) {
									if (!(date instanceof Date)) {
										date = dateStamp.fromISOString(date);
										date.setHours(0);
									}
									if (!(date2 instanceof Date)) {
										date2 = dateStamp.fromISOString(date2);
										date2.setHours(0);
									}
									return date.valueOf() == date2.valueOf();
								});
							}))
								return false;

							return true;
						});
					}))
						return false;
				}
			}

			return true;
		},

		/**
		 * Compares the criteria of search templates and return true if they are equal.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.SearchTemplate} to use for comparison
		 */
		containsEqualCriteria: function(searchTemplate) {
			if (!this.inherited(arguments))
				return false;

			if (this.objectType != searchTemplate.objectType)
				return false;
			if (new Boolean(this.andSearch).valueOf() != new Boolean(searchTemplate.andSearch).valueOf())
				return false;

			if ((this.objectStores instanceof Array) != (searchTemplate.objectStores instanceof Array))
				return false;
			if (this.objectStores instanceof Array) {
				if (this.objectStores.length != searchTemplate.objectStores.length)
					return false;
				if (!array.every(this.objectStores, function(os) {
					return array.some(searchTemplate.objectStores, function(os2) {
						return os.repositoryId == os2.repositoryId && (os.id == os2.id || os.symbolicName == os2.symbolicName);
					});
				}))
					return false;
			}

			if ((this.folders instanceof Array) != (searchTemplate.folders instanceof Array))
				return false;
			if (this.folders instanceof Array) {
				if (this.folders.length != searchTemplate.folders.length)
					return false;
				if (!array.every(this.folders, function(folder) {
					return array.some(searchTemplate.folders, function(folder2) {
						return folder.equals(folder2);
					});
				}))
					return false;
			}

			if ((this.classes instanceof Array) != (searchTemplate.classes instanceof Array))
				return false;
			if (this.classes instanceof Array) {
				if (this.classes.length != searchTemplate.classes.length)
					return false;
				if (!array.every(this.classes, function(sc) {
					return array.some(searchTemplate.classes, function(sc2) {
						return sc.equals(sc2);
					});
				}))
					return false;
			}
			if (new Boolean(this.includeSubclasses).toString() != new Boolean(searchTemplate.includeSubclasses).toString())
				return false;

			if ((this.textSearchCriteria instanceof Array) != (searchTemplate.textSearchCriteria instanceof Array))
				return false;
			if (this.textSearchCriteria instanceof Array) {
				if (this.textSearchCriteria.length != searchTemplate.textSearchCriteria.length)
					return false;
				if (!array.every(this.textSearchCriteria, function(criterion) {
					return array.some(searchTemplate.textSearchCriteria, function(criterion2) {
						var prox1 = criterion.operator == "near" ? new Number(criterion.proximityDistance).valueOf() : 0;
						var prox2 = criterion2.operator == "near" ? new Number(criterion2.proximityDistance).valueOf() : 0;
						return criterion.text == criterion2.text && criterion.operator == criterion2.operator && prox1 == prox2;
					});
				}))
					return false;
			}

			if (new Boolean(this.moreOptions).valueOf() != new Boolean(searchTemplate.moreOptions).valueOf())
				return false;
			if (this.moreOptions) {
				if (!this._compareMoreOptions(this.moreOptions, searchTemplate.moreOptions))
					return false;
			}

			return true;
		},

		/**
		 * Returns a clone of this search.
		 */
		clone: function() {
			var clone = this.inherited(arguments);
			clone.classes = lang.clone(this.classes);
			clone.folders = lang.clone(this.folders);
			clone.objectStores = lang.clone(this.objectStores);
			clone.moreOptions = lang.clone(this.moreOptions);
			clone.textSearchCriteria = lang.clone(this.textSearchCriteria);
			clone.textCriteriaLayout = lang.clone(this.textCriteriaLayout);
			clone.objectStore = lang.clone(this.objectStore);
			clone.odSavedSearches = lang.clone(this.odSavedSearches);
			return clone;
		}
	});

	/**
	 * @private
	 */
	SearchTemplate.instanceOf = function(json, repository) {
		if (json.template == "StoredSearch" && repository.type == "p8")
			return true;
		if (json.template == "ICMSearch" && repository.type == "cm")
			return !json.attributes.clbSearchType || (json.attributes.clbSearchType instanceof Array ? json.attributes.clbSearchType[0] === 0 : json.attributes.clbSearchType === 0);

		return false;
	};

	/**
	 * @private
	 */
	SearchTemplate.createFromJSON = function(json, repository, resultSet, parent) {
		var searchTemplate = null;
		lang.mixin(json, {
			repository: repository,
			resultSet: resultSet,
			parent: parent
		});
		if (json[0]) { // optimization for OD
			searchTemplate = new SearchTemplate({
				id: json[0],
				name: json[0],
				repository: repository,
				resultSet: resultSet,
				parent: parent,
				autoRun: json[1] || json[0]
			});
		} else if (json.id) {
			var attributes = {};
			var attributeTypes = {};
			var attributeFormats = {};
			var attributeDisplayValues = {};
			var attributeSystemProperty = {};
			for ( var i in json.attributes) {
				var attr = json.attributes[i];
				attributes[i] = attr[0];
				if (attr.length > 1) {
					attributeTypes[i] = attr[1];
				}
				if (attr.length > 2) {
					attributeFormats[i] = attr[2];
				}
				if (attr.length > 3) {
					attributeDisplayValues[i] = attr[3];
				}
				if (attr.length > 6 && attr[6] != null && attr[6].isSystem) {
					attributeSystemProperty[i] = attr[6].isSystem;
				}
			}

			lang.mixin(json, {
				attributes: attributes,
				attributeTypes: attributeTypes,
				attributeFormats: attributeFormats,
				attributeDisplayValues: attributeDisplayValues,
				attributeSystemProperty: attributeSystemProperty
			});

			searchTemplate = new SearchTemplate(json);
		} else { // older pre-result set format
			lang.mixin(json, {
				id: json.template_name,
				name: json.template_label,
				description: json.template_desc
			});
			searchTemplate = new SearchTemplate(json);
		}

		return searchTemplate;
	};

	return SearchTemplate;
});

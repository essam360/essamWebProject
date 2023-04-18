/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"./_ModelStore",
	"./_SearchMixin",
	"./ChildComponentSearchCriteria",
	"./ContentItem",
	"./SearchConfiguration",
	"./SearchCriterion",
	"./User"
], function(array, declare, lang, _ModelStore, _SearchMixin, ChildComponentSearchCriteria, ContentItem, SearchConfiguration, SearchCriterion, User) {

	/**
	 * @name ecm.model._SearchTemplateBase
	 * @class Base class for search templates, for example, {@link ecm.model.SearchTemplate} and
	 *        {@link ecm.model.UnifiedSearchTemplate}
	 * @augments ecm.model._ContentItem
	 * @since 2.0.2
	 * @public
	 */
	var _SearchTemplateBase = declare("ecm.model._SearchTemplateBase", [
		ContentItem,
		_SearchMixin
	], {
		/** @lends ecm.model._SearchTemplateBase.prototype */

		/**
		 * The description of this search.
		 */
		description: null,

		/**
		 * Indicates whether this search is configured to run automatically when opened.
		 */
		autoRun: false,

		/**
		 * Indicates whether this search is configured to be shown in the folder structure of the repository it is filed
		 * in.
		 */
		showInTree: false,

		/**
		 * An array of {@link ecm.model.SearchCriterion} objects.
		 */
		searchCriteria: null,

		/**
		 * Indicates whether this search is configured to match all of the search criteria.
		 */
		andSearch: true,

		/**
		 * Indicates whether invalid references were automatically resolved during search criteria retrieval.
		 */
		autoResolved: false,

		/**
		 * A universally unique ID that is used to distinguish cloned instances of the same search in the model.
		 */
		UUID: undefined,

		/**
		 * A {@link ecm.model.SearchConfiguration} object.
		 */
		searchConfig: null,

		/**
		 * The ID of the folder in which to file the search when saved.
		 */
		parentFolderId: null,

		/**
		 * A boolean value indicating whether the search repository is invalid.
		 */
		invalidRepository: false,

		/**
		 * A boolean value indicating whether the search from class is invalid.
		 */
		invalidClass: false,

		/**
		 * A boolean value indicating whether the search folder is invalid.
		 */
		invalidFolder: false,

		/**
		 * A boolean value indicating whether the search file type is invalid.
		 */
		invalidProperty: false,

		/**
		 * @private
		 */
		constructor: function() {
			this._init();
			this.searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: this.repository
			});

			// Determine if this search has been loaded from the repository
			this._loaded = false;
			if (!this.isNew()) {
				for (key in this.attributes) {
					this._loaded = true;
					break;
				}
			}
		},

		_init: function() {
			var description = this._getAttributeValue("Description");
			var clbDescription = this._getAttributeValue("clbDescription");
			if (description != undefined || clbDescription != undefined)
				this.description = description || clbDescription;

			var icnAutoRun = this._getAttributeValue("IcnAutoRun");
			var clbAutoRun = this._getAttributeValue("clbAutoRun");
			if (icnAutoRun != undefined || clbAutoRun != undefined)
				this.autoRun = icnAutoRun ? icnAutoRun : false || clbAutoRun ? clbAutoRun === 1 : false;

			var icnShowInTree = this._getAttributeValue("IcnShowInTree");
			var clbShowInTree = this._getAttributeValue("clbShowInTree");
			if (icnShowInTree != undefined || clbShowInTree != undefined)
				this.showInTree = icnShowInTree || clbShowInTree === 1;
		},

		_getAttributeValue: function(attribute) {
			var value = undefined;
			if (this.attributes && (attribute in this.attributes)) {
				value = this.attributes[attribute];
				if (value instanceof Array)
					value = value.length > 0 ? value[0] : null;
			}

			return value;
		},

		/**
		 * Returns true if this search is configured to run automatically when opened.
		 */
		isAutoRun: function() {
			return this.autoRun;
		},

		/**
		 * Returns true if this search is configured to be shown in the folder structure of the repository it is filed
		 * in.
		 */
		isShowInTree: function() {
			return this.showInTree;
		},

		/**
		 * Returns true if this search has not been saved.
		 */
		isNew: function() {
			return (!this.id || !this.id.length || this.id.indexOf("NewSearch_") == 0);
		},

		/**
		 * Returns true if this search was built in Content Navigator.
		 */
		isNavigatorSavedSearch: function() {
			return true;
		},

		/**
		 * Return true if the given attribute is hidden.
		 * 
		 * @param attributeId
		 *            The ID of the attribute
		 */
		isAttributeHidden: function(attributeId) {
			return array.indexOf(_SearchTemplateBase.HIDDEN_ATTRIBUTES, attributeId) > -1;
		},

		/**
		 * Return true if this search has been loaded from the repository.
		 * 
		 * @since 2.0.2
		 */
		isLoaded: function() {
			return this._loaded;
		},

		/**
		 * Saves this search in the repository.
		 * 
		 * @param callback
		 *            A callback function to be invoked with the updated search
		 */
		save: function(callback) {
			this.logEntry("save");
			var request = ecm.model.Request.postService("updateSearchTemplate", this.repository.type, {
				repositoryId: this.repository.id,
				docid: this.id
			}, "text/json", this.toJson(), lang.hitch(this, function(response) {
				// Save the original ID before updating this search
				var originalId = this.id;
				var item = ContentItem.createFromJSON(response.rows[0], this.repository, null);
				this.update(item, true);

				// Broadcast the changes with the original ID so that instances of this search in widgets like the content list are updated
				var clone = this.clone();
				clone.id = item.id;
				clone.originalId = originalId;
				this.onChange([
					clone
				]);

				// Reset the original ID since all instances of this search in widgets like the content list have been updated with the new ID
				this.origdocid = null;
				this.originalId = null;

				if (callback)
					callback(this);
			}));
			this.logExit("save");

			return request;
		},

		/**
		 * @private
		 */
		update: function(item, skipOnChange) {
			// Overrides ecm.model.ContentItem.update() to preserve the UUID, criteria, and update search specific properties like description, autoRun, etc.
			var uuid = this.UUID;
			var criteria = this.searchCriteria;
			this.inherited(arguments);
			this.UUID = uuid;
			this.searchCriteria = criteria;
			this._init();
		},

		/**
		 * Returns an UUID for this search.
		 */
		generateUUID: function() {
			return this.isNew() ? this.id : this.repository.id + "_" + (this.vsId || this.id);
		},

		/**
		 * Returns true if the other object represents the same item as this one.
		 * 
		 * @param object
		 *            An object
		 */
		equals: function(object) {
			if (!object || !object.isInstanceOf || !object.isInstanceOf(ContentItem) || object.isFolder() || this.repository != object.repository)
				return false;

			if (this.repository._isP8() && this.vsId && this.vsId === object.vsId)
				return true;

			return this.id === object.id;
		},

		/**
		 * Returns true if the criteria of the specified search is equal to this ones.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model._SearchTemplateBase}
		 */
		containsEqualCriteria: function(searchTemplate) {
			var searchCriteria = this.searchCriteria != null && this.searchCriteria.length > 0 ? this.searchCriteria : null;
			var otherSearchCriteria = searchTemplate.searchCriteria != null && searchTemplate.searchCriteria.length > 0 ? searchTemplate.searchCriteria : null;
			if (searchCriteria instanceof Array != otherSearchCriteria instanceof Array)
				return false;
			if (searchCriteria instanceof Array) {
				if (searchCriteria.length != otherSearchCriteria.length)
					return false;
				if (!array.every(searchCriteria, function(criterion, i) {
					return criterion.equals(otherSearchCriteria[i]);
				}))
					return false;
			}

			if (new Boolean(this.resultsDisplay).valueOf() != new Boolean(searchTemplate.resultsDisplay).valueOf())
				return false;
			if (this.resultsDisplay) {
				if (this.resultsDisplay.sortBy != searchTemplate.resultsDisplay.sortBy)
					return false;
				if (this.resultsDisplay.sortAsc != searchTemplate.resultsDisplay.sortAsc)
					return false;
				if (this.resultsDisplay.columns.length != searchTemplate.resultsDisplay.columns.length)
					return false;
				if (!array.every(this.resultsDisplay.columns, function(column, i) {
					return column == searchTemplate.resultsDisplay.columns[i];
				}))
					return false;
				if (this.resultsDisplay.magazineColumns) {
					if (this.resultsDisplay.magazineColumns.length != searchTemplate.resultsDisplay.magazineColumns.length) {
						return false;
					}
					if (!array.every(this.resultsDisplay.magazineColumns, function(column, i) {
						return column == searchTemplate.resultsDisplay.magazineColumns[i];
					}))
						return false;
				}
			}

			return true;
		},

		/**
		 * Returns the JSON representation of this search.
		 */
		toJson: function() {
			var json = {
				id: this.id,
				name: this.name,
				description: this.description || "",
				autoRun: this.autoRun || false,
				showInTree: this.showInTree || false,
				andSearch: this.andSearch,
				resultsDisplay: this.resultsDisplay || null,
				parentFolderId: this.parentFolderId,
				permissions: this.permissions || []
			};

			json.searchCriteria = array.map(this.searchCriteria, lang.hitch(this, function(criterion) {
				if (criterion.declaredClass == "ecm.model.ChildComponentSearchCriteria") {
					return {
						template_name: criterion.id,
						searchCriteria: array.map(criterion.searchCriteria, lang.hitch(this, "_searchCriterionToJson"))
					};
				} else {
					return this._searchCriterionToJson(criterion);
				}
			}));

			return json;
		},

		_searchCriterionToJson: function(criterion) {
			var dataType = criterion.dataType;
			var operator = criterion.selectedOperator;
			var values = criterion.values;
			if (dataType == "xs:user" || this.searchConfig.isUserProperty(criterion.id)) {
				// Normalize the data type and extract the names from the user objects
				dataType = "xs:string";
				values = array.map(values, function(value) {
					return this.repository._isBox() ? value.id : value.shortName;
				}, this);
			} else if ((operator == "BETWEEN" || operator == "NOTBETWEEN") && values.length == 2 && values[0] && values[1]) {
				// Sort the values in ascending order
				var value1 = values[0];
				var value2 = values[1];
				var value1IsGreater;
				if (dataType == "xs:integer" || dataType == "xs:short" || dataType == "xs:decimal" || dataType == "xs:double" || dataType == "xs:score") {
					value1 = parseFloat(value1);
					value2 = parseFloat(value2);
					value1IsGreater = (value1 > value2);
				} else if (dataType == "xs:long") {
					value1IsGreater = (_ModelStore.longComparator(value1, value2) == 1);
				} else {
					value1IsGreater = (value1 > value2);
				}
				if (value1IsGreater && !(this.repository.type == "od" && (dataType == "xs:date" | dataType == "xs:timestamp"))) {
					values = [
						value2.toString(),
						value1.toString()
					];
				}
			}

			// Normalize the values
			for ( var i in values)
				values[i] = values[i] == null ? "" : values[i] + "";

			return {
				id: criterion.id,
				name: criterion.name,
				selectedOperator: operator,
				values: values,
				dataType: dataType,
				cardinality: criterion.cardinality,
				itemId: criterion.itemId
			};
		},

		/**
		 * Retrieve the search criteria for this search template
		 * 
		 * @param callback
		 *            A callback function to be called after the search criteria has been retrieved
		 * @param editMode
		 *            A string value indicating the edit mode of the criteria (ie. "edit" or "search")
		 * @param teamspaceId
		 *            A string value hold the teamspace id if search is scoped to a teamspace (maybe null).
		 * @param refresh
		 *            A boolean value indicating whether the search should use cached criteria (if it exists)
		 * @param autoResolve
		 *            A flag indicating whether the criteria supports automatic resolution
		 * @param synchronous
		 *            Indicates whether the criteria is retrieved synchronously
		 * @param version
		 *            The version to be retrieved, i.e., "current", "released", or "specific" (optional). If not
		 *            specified or <code>editMode</code> is "edit", the released version is retrieved.
		 * @param errorCallback
		 *            A callback function to be invoked when an error occurs
		 */
		retrieveSearchCriteria: function(callback, editMode, teamspaceId, refresh, autoResolve, synchronous, version, errorCallback) {
			var methodName = "retrieveSearchCriteria";
			this.logEntry(methodName);
			var request;
			if (this.searchCriteria && !refresh) {
				if (callback) {
					callback(this.searchCriteria);
				}
				this.onSearchCriteriaRetrieved(this);
			} else {
				var self = this;
				var connected = this._connectToRepository(function() {
					self.retrieveSearchCriteria(callback, editMode, teamspaceId, refresh, autoResolve, synchronous, version);
				}, autoResolve);
				if (connected) {
					var service = this._getOpenSearchTemplateServiceName();
					if (!version || editMode == "edit")
						version = "released";
					var request = ecm.model.Request.invokeService(service, this.repository.type, {
						repositoryId: this.repository.id,
						template_name: this.id,
						vsId: this.vsId || "",
						version: version,
						form_type: editMode == "edit" ? "edit" : "search",
						workspaceId: teamspaceId,
						autoResolve: autoResolve,
						searchTimestampAsText: !!this.repository.inputTimestampAsText
					}, function(response) {
						self._retrieveSearchCriteriaCompleted(response, callback);
					}, false, synchronous, function(response) {
						self._retrieveSearchCriteriaFailed(request, response);
						if (errorCallback)
							errorCallback(response);
					}, false, this._getHandledErrorNumbers());
				}
			}
			this.logExit(methodName);

			return request;
		},

		_connectToRepository: function(onConnect, ignoreErrors) {
			return true;
		},

		_onRequestRepositoryConnection: function(repository, request, onConnect) {
		},

		_getOpenSearchTemplateServiceName: function() {
			return "openSearchTemplate";
		},

		_getHandledErrorNumbers: function() {
			return null;
		},

		_retrieveSearchCriteriaCompleted: function(response, callback) {
			var methodName = "_retrieveSearchCriteriaCompleted";
			this.logEntry(methodName);

			this._applyRetrievedSearchCriteria(response);

			if (callback) {
				callback(this.searchCriteria);
			}
			this.onSearchCriteriaRetrieved(this);
			this.logExit(methodName);
		},

		_retrieveSearchCriteriaFailed: function(request, response) {
			var methodName = "_retrieveSearchCriteriaFailed";
			this.logEntry(methodName);

			if (response.errors) {
				var unsupportedErrors = [
					1019,
					1020,
					1601,
					1603,
					1605,
					1606,
					1607,
					1608,
					1609,
					1610,
					1612,
					1614,
					1615,
					1806,
					1810,
					1812
				];
				for ( var i in response.errors) {
					var error = response.errors[i];
					if (!lang.isString(error) && array.indexOf(unsupportedErrors, error.number) > -1) {
						this.onUnsupportedSearchCriteriaRetrieved(this);
					}
				}
			}

			this.logExit(methodName);
		},

		_applyRetrievedSearchCriteria: function(response) {
			var methodName = "_applyRetrieveSearchCriteria";

			if (response.id != null) {
				if (this.id != response.id)
					this.logDebug(methodName, "id changed to: " + response.id);
				this.id = response.id;
			}
			
			var updateNeeded = false;
			if (response.name != null) {
				this.name = response.name;
			} else if (this.repository.type == "od" && response.template_label != null) {
				updateNeeded = this.name != response.template_label;
				this.name = response.template_label;
			}
			if (response.description != null) {
				this.description = response.description;
			} else if (this.repository.type == "od" && response.template_desc != null) {
				updateNeeded = this.description != response.template_desc;
				this.description = response.template_desc;
			}
			if (updateNeeded) { // OD search name or description changed, e.g., a recent search is opened in a different language
				// Broadcast the changes so that interested widgets, like the SearchTabContainer, can update themselves
				// (other types of repository update the model when the search is opened, i.e., openItem request)
				this.onChange([
					this
				]);
			}

			this.searchCriteria = [];
			if (response.andSearch != undefined && response.andSearch != null) {
				this.andSearch = response.andSearch;
			}

			// Determine whether the search was built by us or XT before processing the criteria
			// since XT searches require specialized behavior
			this._navigatorSavedSearch = "autoRun" in response;
			if (this._navigatorSavedSearch) {
				this.autoRun = response.autoRun;
			}

			var criterias = response.searchCriteria || response.criterias;
			for ( var i in criterias) {
				var criterionJSON = criterias[i];
				if (lang.isArray(criterionJSON)) {
					this.searchCriteria.push(this._createNestedCriteria(criterionJSON));
				} else if (criterionJSON.template_name) {
					var childComp = new ChildComponentSearchCriteria(criterionJSON.template_name, criterionJSON.template_label);
					var childAttrs = [];

					var childCriteria = criterionJSON.searchCriteria || criterionJSON.criterias;
					for ( var j in childCriteria) {
						this.logDebug(methodName, "add criteria: " + childCriteria[j]);
						childAttrs.push(this._createCriterion(childCriteria[j]));
					}
					childComp.searchCriteria = childAttrs;
					this.searchCriteria.push(childComp);
				} else {
					this.logDebug(methodName, "create criteria: " + criterionJSON);
					this.searchCriteria.push(this._createCriterion(criterionJSON));
				}
			}

			if (response.resultsDisplay) {
				this.resultsDisplay = response.resultsDisplay;
			}

			if ("showInTree" in response) {
				this.showInTree = response.showInTree;
			}

			this.logInfo(methodName, "autoResolved: " + response.autoResolved);
			this.autoResolved = response.autoResolved;

			this.logInfo(methodName, "invalidRepository: " + response.invalidRepository);
			this.invalidRepository = response.invalidRepository;
			this.logInfo(methodName, "invalidClass: " + response.invalidClass);
			this.invalidClass = response.invalidClass;
			this.logInfo(methodName, "invalidFolder: " + response.invalidFolder);
			this.invalidFolder = response.invalidFolder;
			this.logInfo(methodName, "invalidProperty: " + response.invalidProperty);
			this.invalidProperty = response.invalidProperty;
		},

		_createCriterion: function(criterionJSON) {
			var methodName = "_createCriterion";
			this.logDebug(methodName, "criterionJSON: " + "label: " + criterionJSON.label + ", validValues: " + criterionJSON.validValues);
			this.logDebug(methodName, "default op: " + criterionJSON.defaultOperator + ", fk flags: " + criterionJSON.hasDependentAttributes + "," + criterionJSON.foreignKey + "," + criterionJSON.hasForeignKeys);

			if (criterionJSON.dataType == "xs:user" || this.searchConfig.isUserProperty(criterionJSON.name)) {
				// Use pseudo type
				criterionJSON.dataType = "xs:user";

				// Convert values to User objects
				var users = new Array();
				var displayValues = criterionJSON.displayValues;
				var values = lang.isArray(criterionJSON.values) ? criterionJSON.values : [
					criterionJSON.values
				];
				for ( var i in values) {
					var shortName = values[i];
					if (shortName) {
						var displayName = displayValues && displayValues.length && displayValues[i] ? displayValues[i] : shortName;
						users.push(new User({
							id: shortName,
							name: shortName,
							shortName: shortName,
							displayName: displayName
						}));
					}
				}
				criterionJSON.values = users;
			}

			criterionJSON.repositoryType = criterionJSON.repositoryType || this.repository.type;
			criterionJSON.searchTemplate = this;
			criterionJSON.id = criterionJSON.name;
			criterionJSON.name = criterionJSON.label;
			criterionJSON.valueRequired = criterionJSON.required;
			criterionJSON.minLength = criterionJSON.minEntry;
			criterionJSON.maxLength = criterionJSON.maxEntry;
			criterionJSON.allowedValues = criterionJSON.validValues;
			criterionJSON.defaultValue = criterionJSON.values;
			criterionJSON.valueFixed = (criterionJSON.fixedValue === "true" || criterionJSON.fixedValue === true) ? true : false;
			criterionJSON.textSearchable = criterionJSON.textSearchable;
			criterionJSON.nullable = "nullable" in criterionJSON ? criterionJSON.nullable : true, // defaulting to true is in-line with attribute definitions
			criterionJSON.usesLongColumn = criterionJSON.usesLongColumn;

			var operators = criterionJSON.availableOperators || [];
			if (operators.length < 1) {
				var defaultOp = criterionJSON.selectedOperator ? criterionJSON.selectedOperator : criterionJSON.defaultOperator;
				if (defaultOp)
					operators.push(defaultOp);
			}
			criterionJSON.availableOperators = operators;

			return new SearchCriterion(criterionJSON);
		},

		_createNestedCriteria: function(nestedCriteriaJSON) {
			var nestedCriteria = [];
			for ( var i in nestedCriteriaJSON) {
				var criterionJSON = nestedCriteriaJSON[i];
				if (lang.isArray(criterionJSON)) {
					var criterion = this._createNestedCriteria(criterionJSON);
				} else {
					var criterion = this._createCriterion(criterionJSON);
				}
				nestedCriteria.push(criterion);
			}
			return nestedCriteria;
		},

		/**
		 * Returns a clone of this search.
		 */
		clone: function() {
			var clone = new this.constructor({
				id: this.id,
				name: this.name
			});
			lang.mixin(clone, this);

			clone.attributes = lang.clone(this.attributes);
			clone.searchCriteria = this.searchCriteria ? array.map(this.searchCriteria, function(criterion) {
				return criterion.clone();
			}) : null;
			clone.resultsDisplay = lang.clone(this.resultsDisplay);
			clone.permissions = lang.clone(this.permissions);

			return clone;
		},

		_getSearchVersion: function(resultSet) {
			var version = this.inherited(arguments);

			if (version == null && this.UUID && this.UUID.indexOf(this.id) == 0) { // specific version in opened searches
				version = "specific";
			}

			return version;
		},

		/**
		 * Event fired when unsupported search criteria is retrieved.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model._SearchTemplateBase}
		 */
		onUnsupportedSearchCriteriaRetrieved: function(searchTemplate) {
		},

		/**
		 * Event fired when the search criteria has been retrieved.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model._SearchTemplateBase}
		 */
		onSearchCriteriaRetrieved: function(searchTemplate) {
		}
	});

	/**
	 * @private
	 */
	_SearchTemplateBase.HIDDEN_ATTRIBUTES = [
		// P8
		"ApplicationName",
		// CM
		"clbSearchType",
		"clbAutoRun",
		"clbShowInTree",
		"clbSearchingRepositories"
	];

	return _SearchTemplateBase;
});

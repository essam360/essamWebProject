/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"./_ModelObject", //
	"./AttributeDefinition", //
	"./admin/AdminConfig"
], //
function(declare, lang, array, _ModelObject, AttributeDefinition, AdminConfig) {

	/**
	 * Constructs a SearchConfiguration object.
	 * 
	 * @name ecm.model.SearchConfiguration
	 * @class Represents the configuration information that is used for the search builder and runtime.
	 *        <p>
	 *        Usage:
	 *        <p>
	 *        var searchConfig = SearchConfiguration.getSearchConfiguration({<br>
	 *        "repository": repository<br>
	 *        });
	 *        </p>
	 */
	var SearchConfiguration = declare("ecm.model.SearchConfiguration", [
		_ModelObject
	], {
		/** @lends ecm.model.SearchConfiguration.prototype */

		/**
		 * Data type constants.
		 */
		DATA_TYPE: {
			BOOLEAN: "xs:boolean",
			DATE: "xs:date",
			TIME: "xs:time",
			TIME_STAMP: "xs:timestamp",
			DECIMAL: "xs:decimal",
			DOUBLE: "xs:double",
			SHORT: "xs:short",
			INTEGER: "xs:integer",
			LONG: "xs:long",
			STRING: "xs:string",
			STRING_ALPHA: "xs:string:alpha",
			STRING_ALPHA_NUM: "xs:string:alphanum",
			STRING_CLOB: "xs:string:clob",
			STRING_EXT: "xs:string:ext",
			STRING_NUM: "xs:string:num",
			STRING_CMISID: "xs:string:cmisid", // used for cmis id data type, data is string, but operate just can be equal/not equal
			BINARY: "xs:binary",
			OBJECT: "xs:object",
			GUID: "xs:guid",
			USER: "xs:user" // pseudo type
		},

		/**
		 * Operator constants.
		 */
		OPERATOR: {
			EQUAL: "EQUAL",
			NOT_EQUAL: "NOTEQUAL",
			LIKE: "LIKE",
			NOT_LIKE: "NOTLIKE",
			LESS: "LESS",
			LESS_OR_EQUAL: "LESSOREQUAL",
			GREATER: "GREATER",
			GREATER_OR_EQUAL: "GREATEROREQUAL",
			BETWEEN: "BETWEEN",
			NOT_BETWEEN: "NOTBETWEEN",
			IN: "IN",
			IN_ANY: "INANY",
			NOT_IN: "NOTIN",
			NULL: "NULL",
			NOT_NULL: "NOTNULL",
			CONTAINS: "CONTAINS",
			STARTS_WITH: "STARTSWITH",
			ENDS_WITH: "ENDSWITH"
		},

		/**
		 * Object type constants.
		 */
		OBJECT_TYPE: {
			DOCUMENT: "document",
			FOLDER: "folder",
			WEB_LINK: "web_link",
			COMMON: "common",
			ALL: "all"
		},

		/**
		 * Text search type constants.
		 */
		TEXT_SEARCH_TYPE: {
			CASCADE: "cascade",
			VERITY: "verity",
			BASIC: "basic"
		},

		/**
		 * Query capability type constants (CMIS only).
		 */
		CAPABILITY_QUERY: {//d22876
			NONE: "none",//d22876
			METADATA_ONLY: "metadataonly",
			FULLTEXT_ONLY: "fulltextonly",
			BOTH_SEPERATE: "bothseparate",
			BOTH_COMBINED: "bothcombined"
		//d22876
		},
		
		/**
		 * List of properties per repository type that are made available in search despite being hidden properties.
		 * These properties could still be hidden from search if the repository configuration filters them out.
		 * 
		 * @since 3.0
		 */
		VISIBLE_PROPERTIES: {
			p8: [
			     "ClbSensitiveContent"
			]
		},

		/**
		 * @private
		 */
		USER_PROPERTIES: {
			cm: [
				"createdBy",
				"modifiedBy"
			],
			p8: [
				"Creator",
				"LastModifier",
				"Owner"
			],
			box: [
				"owned_by"
			]
		},

		/**
		 * @private
		 */
		FOLDER_DEFAULT_COLUMNS: {
			p8: [
				AdminConfig.PSEUDO_NAME,
				"LastModifier",
				"DateLastModified"
			],
			cmis: [
				AdminConfig.PSEUDO_NAME,
				"cmis:createdBy",
				"cmis:creationDate",
				"cmis:lastModifiedBy",
				"cmis:lastModificationDate",
				"cmis:objectId",
				"cmis:objectTypeId"
			],
			box: [
				AdminConfig.PSEUDO_NAME,
				"size",
				"modified_by",
				"modified_at"
			]
		},

		/**
		 * @private
		 */
		DOCUMENT_DEFAULT_COLUMNS: {
			p8: [
				AdminConfig.PSEUDO_NAME,
				"LastModifier",
				"DateLastModified"
			],
			cmis: [
				AdminConfig.PSEUDO_NAME,
				"cmis:createdBy",
				"cmis:creationDate",
				"cmis:lastModifiedBy",
				"cmis:lastModificationDate",
				"cmis:contentStreamMimeType",
				"cmis:contentStreamLength",
				"cmis:objectId",
				"cmis:objectTypeId"
			],
			box: [
				AdminConfig.PSEUDO_NAME,
				"size",
				"modified_by",
				"modified_at",
				"version_number"
			]
		},

		/**
		 * @private
		 */
		NAME_PROPERTY: {
			cm: AdminConfig.PSEUDO_NAME,
			box: "name",
			cmis: "cmis:name"
		},

		/**
		 * @private
		 */
		constructor: function() {
			this._cache = {};
			this.logDebug("constructor", "repository = " + this.repository);
		},

		/**
		 * Returns true if the repository supports search folders.
		 */
		hasSearchFolders: function() {
			return this.repository.type == "od";
		},

		/**
		 * Returns true if the repository supports building searches.
		 */
		canBuildSearches: function() {
			if (this.repository.type == "od")
				return false;

			if ((!this.teamspace && !ecm.model.desktop.preventCreateNewSearch) || (this.teamspace && this.teamspace.getPrivilege("createNewSearches")))
				return true;
			else
				return false;

		},

		/**
		 * Returns true if the repository supports building unified searches.
		 */
		canBuildUnifiedSearches: function() {
			return !this.teamspace && !ecm.model.desktop.preventCreateNewUnifiedSearch;
		},

		/**
		 * Returns true if the current user has sufficient privileges to save a search.
		 */
		canSaveSearches: function() {
			return this.repository.getPrivilege("addSearch") && (!this.teamspace || this.teamspace.getPrivilege("addNewSearches"));
		},

		/**
		 * Returns true if the current user has sufficient privileges to save a unified search.
		 */
		canSaveUnifiedSearches: function() {
			return !this.teamspace && this.repository.unifiedSearchesEnabled && this.repository.getPrivilege("addUnifiedSearch");
		},

		/**
		 * Returns the ID of the default attribute definition for given object type.
		 * 
		 * @param objectType
		 *            The object type for which to get the default attribute definition ID
		 */
		getDefaultAttributeDefinitionId: function(/* String */objectType) {
			var id = null;

			if (this.repository.type == "p8") {
				id = objectType == this.OBJECT_TYPE.DOCUMENT ? "DocumentTitle" : "FolderName";
			}

			return id;
		},

		/**
		 * Returns the ID of the root class for the given object type.
		 * 
		 * @param objectType
		 *            The object type for which to get the root class ID
		 */
		getRootClassId: function(/* String */objectType) {
			var id = null;
			var repositoryType = this.repository.type;

			if (repositoryType == "p8" || repositoryType == "cm") {
				id = objectType == this.OBJECT_TYPE.DOCUMENT ? "Document" : "Folder";
			} else if (repositoryType == "cmis") {
				id = objectType == this.OBJECT_TYPE.DOCUMENT ? "cmis:document" : "cmis:folder";
			} else if (repositoryType == "box") {
				if (objectType == this.OBJECT_TYPE.FOLDER)
					id = "folder";
				else if (objectType == this.OBJECT_TYPE.WEB_LINK)
					id = "web_link";
				else
					id = "file";
			} else {
				id = "Document";
			}

			return id;
		},

		/**
		 * Returns an array of operators compatible with the search criterion described by the given meta data.
		 * 
		 * @param dataType
		 *            The search criterion's data type.
		 * @param cardinality
		 *            The search criterion's cardinality.
		 * @param choiceList
		 *            The search criterion's choice list.
		 * @param textSearchable
		 *            Indicates whether the search criterion supports text search.
		 * @param nullable
		 *            Indicates whether the search criterion supports searching for NULL values.
		 * @param usesLongColumn
		 *            Indicates whether the search criterion uses long column (P8 only).
		 * @param hasDependentAttributes
		 *            Indicates whether the search criterion has dependent attributes (CM only).
		 * @param unfiltered
		 *            Indicates whether the operators should not to be filtered as per the repository settings.
		 * @deprecated As of 2.0.3.4. Use <code>AttributeDefinition.availableOperators</code> or
		 *             <code>SearchCriterion.availableOperators</code>.
		 */
		getOperators: function(/* String */dataType, /* String */cardinality, /* Object */choiceList, /* Boolean */textSearchable, /* Boolean */nullable, /* Boolean */usesLongColumn, hasDependentAttributes, unfiltered) {
			var operators;
			if (this.repository._isCM()) {
				operators = this._getCMOperators(dataType, textSearchable, nullable, hasDependentAttributes);
			} else if (this.repository._isCmis()) {
				operators = this._getCMISOperators(dataType, cardinality, choiceList, usesLongColumn, textSearchable);
			} else if (this.repository._isP8()) {
				operators = this._getP8Operators(dataType, cardinality, choiceList, usesLongColumn, textSearchable);
			} else {
				this.logWarning("getOperators", "Unsupported repository type " + this.repository.type);
				operators = new Array();
			}

			if (!unfiltered && dataType != this.DATA_TYPE.USER) {
				// Remove Filtered out operators
				operators = this.filterOperators(operators, dataType);
			}

			return operators;
		},

		/**
		 * Returns an array of operators filtered per the repository configuration.
		 * 
		 * @param operators
		 *            The operators to be filtered.
		 * @param dataType
		 *            The search criterion's data type.
		 */
		filterOperators: function(/* String[] */operators, /* String */dataType) {
			// Don't filter the operators if working with a user property since we already limit them to equality operators
			// and further filtering could render the criteria useless
			if (!this.repository || !operators || !operators.length || dataType == this.DATA_TYPE.USER)
				return operators || [];

			var filtered = operators;
			var filteredOperators = this.repository.searchFilteredOperators ? this.repository.searchFilteredOperators[this._convertOperatorType(dataType)] : null;
			if (filteredOperators) {
				filtered = lang.clone(operators);
				var self = this;
				for (var i = filtered.length - 1; i >= 0; i--) {
					array.some(filteredOperators, function(filteredOperator) {
						if (self._convertOperator(filtered[i]) == filteredOperator) {
							filtered.splice(i, 1);
							return true;
						}
					}, this);
				}
			}

			return filtered;
		},

		/**
		 * Returns an array of operator selection objects compatible with the search criterion described by the given
		 * meta data. Each object in the array contains the operator value and the corresponding localized label.
		 * 
		 * @param dataType
		 *            The search criterion's data type.
		 * @param cardinality
		 *            The search criterion's cardinality.
		 * @param choiceList
		 *            The search criterion's choice list.
		 * @param textSearchable
		 *            Indicates whether the search criterion supports text search.
		 * @param nullable
		 *            Indicates whether the search criterion supports searching for NULL values.
		 * @param usesLongColumn
		 *            Indicates whether the search criterion uses long column (P8 only).
		 * @param hasDependentAttributes
		 *            Indicates whether the search criterion has dependent attributes (CM only).
		 * @deprecated As of 2.0.3.4. Use <code>AttributeDefinition.getAvailableOperatorsSelectOptions</code> or
		 *             <code>SearchCriterion.getAvailableOperatorsSelectOptions</code>.
		 */
		getOperatorSelectOptions: function(/* String */dataType, /* String */cardinality, /* Object */choiceList, /* Boolean */textSearchable, /* Boolean */nullable, /* Boolean */usesLongColumn, hasDependentAttributes) {
			this.logEntry("getOperatorSelectOptions", "dataType: " + dataType + ", cardinality: " + cardinality + ", choiceList: " + (choiceList ? true : false) + ", textSearchable: " + textSearchable + ", nullable: " + nullable + " hasDependentAttributes: " + hasDependentAttributes);
			var selectOptions = [];
			var operators = this.getOperators(dataType, cardinality, choiceList, textSearchable, nullable, usesLongColumn, hasDependentAttributes);

			for ( var i in operators) {
				var op = operators[i];
				selectOptions.push({
					value: op,
					label: ecm.messages["operator_" + op]
				});
			}

			return selectOptions;
		},

		/**
		 * Returns the name property for the given object type.
		 * 
		 * @param objectType
		 *            The object type for which to get the name property.
		 */
		getNameProperty: function(objectType) {
			if (this.repository._isP8()) {
				var name = objectType == this.OBJECT_TYPE.DOCUMENT ? this.repository.documentNameProperty : this.repository.folderNameProperty;
				if (!name) { // Only as a backup if not getting from configuration
					name = this.getDefaultAttributeDefinitionId(objectType);
				}
				return name;
			} else if (this.repository._isCmis()) {
				if (objectType == this.OBJECT_TYPE.DOCUMENT) {
					return this.NAME_PROPERTY.cmis;
				} else {
					return this.NAME_PROPERTY.cmis;
				}
			} else if (this.repository._isCM()) {
				return this.NAME_PROPERTY.cm;
			} else if (this.repository._isBox()) {
				return this.NAME_PROPERTY.box;
			} else {
				return AdminConfig.PSEUDO_NAME;
			}
		},

		/**
		 * Returns an array of default columns for the given object type.
		 * 
		 * @param objectType
		 *            The object type for which to get the array of default columns.
		 */
		getSearchDefaultColumns: function(objectType) {
			if (this.repository._isP8()) {
				if (objectType == this.OBJECT_TYPE.DOCUMENT) {
					var columns = this.repository.searchDefaultColumns;
					if (!columns || columns.length == 0) { // Only as a backup if not getting from configuration
						columns = this.DOCUMENT_DEFAULT_COLUMNS.p8;
					}
					return columns;
				} else {
					return this.FOLDER_DEFAULT_COLUMNS.p8;
				}
			} else if (this.repository._isCmis()) {
				if (objectType == this.OBJECT_TYPE.DOCUMENT) {
					var columns = this.repository.searchDefaultColumns;
					if (!columns || columns.length == 0) { // Only as a backup if not getting from configuration
						columns = this.DOCUMENT_DEFAULT_COLUMNS.cmis;
					}
					return columns;
				} else {
					return this.FOLDER_DEFAULT_COLUMNS.cmis;
				}

			} else if (this.repository._isCM()) {
				var columns = this.repository.searchDefaultColumns;
				return columns && columns.length > 0 ? columns : [
					ecm.model.admin.AdminConfig.PSEUDO_NAME
				];
			} else if (this.repository._isBox()) {
				if (objectType == this.OBJECT_TYPE.FOLDER) {
					return this.FOLDER_DEFAULT_COLUMNS.box;
				} else if (objectType == this.OBJECT_TYPE.WEB_LINK) {
					return [
						AdminConfig.PSEUDO_NAME,
						"modified_by",
						"modified_at"
					];
				} else { // document or all types
					var columns = this.repository.searchDefaultColumns;
					if (!columns || columns.length == 0) { // Only as a backup if not getting from configuration
						columns = this.DOCUMENT_DEFAULT_COLUMNS.box;
					}
					return columns;
				}
			} else {
				return [
					AdminConfig.PSEUDO_NAME
				];
			}
		},

		/**
		 * Returns an array of default magazine columns for the given object type.
		 * 
		 * @param objectType
		 *            The object type for which to get the array of default columns.
		 * @since 2.0.2
		 */
		getSearchMagazineDefaultColumns: function(objectType) {
			if (this.repository._isP8()) {
				if (objectType == this.OBJECT_TYPE.DOCUMENT) {
					var columns = this.repository.searchMagazineDefaultColumns;
					if (!columns || columns.length == 0) {
						columns = [
							"LastModifier",
							"DateLastModified"
						];
					}
					return columns;
				} else {
					return [
						"LastModifier",
						"DateLastModified"
					];
				}
			} else if (this.repository._isCmis()) {
				if (objectType == this.OBJECT_TYPE.DOCUMENT) {
					var columns = this.repository.searchMagazineDefaultColumns;
					if (!columns || columns.length == 0) {
						columns = [
							//"cmis:contentStreamLength",
							"cmis:lastModifiedBy",
							"cmis:lastModificationDate"
						];
					}
					return columns;
				} else {
					return columns = [
						"cmis:createdBy",
						"cmis:creationDate",
						"cmis:lastModifiedBy"
					];
				}

			} else if (this.repository._isCM()) {
				var columns = this.repository.searchMagazineDefaultColumns;
				if (!columns || columns.length == 0) {
					columns = [
						ecm.model.admin.AdminConfig.PSEUDO_NAME
					];
				}
				return columns;
			} else if (this.repository._isBox()) {
				if (objectType == this.OBJECT_TYPE.FOLDER) {
					return [
						"description",
						"tags"
					];
				} else if (objectType == this.OBJECT_TYPE.WEB_LINK) {
					return [
						"description"
					];
				} else { // document or all types
					var columns = this.repository.searchMagazineDefaultColumns;
					if (!columns || columns.length == 0) {
						columns = [
							"description",
							"comment_count",
							"tags"
						];
					}
					return columns;
				}
			} else {
				return [
					AdminConfig.PSEUDO_NAME
				];
			}
		},

		/**
		 * Returns an array of property names that are configured to be filtered for the given object type.
		 * 
		 * @param objectType
		 *            The object type for which to get the array of filtered property names.
		 */
		getFilteredProperties: function(objectType) {
			var properties = objectType == this.OBJECT_TYPE.DOCUMENT ? this.repository.searchFilteredDocumentProperties : this.repository.searchFilteredFolderProperties;
			return properties || [];
		},

		_getCMOperators: function(/* String */dataType, /* Boolean */textSearchable, /* Boolean */nullable, hasDependentAttributes) {
			this.logEntry("getCMOperators", "dataType: " + dataType + ", textSearchable: " + textSearchable + ", nullable: " + nullable + " hasDependentAttributes: " + hasDependentAttributes);
			var operators = [];

			if (textSearchable) {
				operators.push(this.OPERATOR.CONTAINS);
			}

			switch (dataType) {
			case this.DATA_TYPE.USER:
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
				operators.push(this.OPERATOR.IN_ANY);
				operators.push(this.OPERATOR.NOT_IN);
				break;
			case this.DATA_TYPE.STRING_CLOB:
				operators.push(this.OPERATOR.STARTS_WITH);
				operators.push(this.OPERATOR.ENDS_WITH);
				operators.push(this.OPERATOR.LIKE);
				operators.push(this.OPERATOR.NOT_LIKE);
				break;
			case this.DATA_TYPE.STRING:
			case this.DATA_TYPE.STRING_ALPHA:
			case this.DATA_TYPE.STRING_ALPHA_NUM:
			case this.DATA_TYPE.STRING_EXT:
			case this.DATA_TYPE.STRING_NUM:
				operators.push(this.OPERATOR.STARTS_WITH);
				operators.push(this.OPERATOR.ENDS_WITH);
				operators.push(this.OPERATOR.LIKE);
				operators.push(this.OPERATOR.NOT_LIKE);
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
				operators.push(this.OPERATOR.LESS);
				operators.push(this.OPERATOR.LESS_OR_EQUAL);
				operators.push(this.OPERATOR.GREATER);
				operators.push(this.OPERATOR.GREATER_OR_EQUAL);
				operators.push(this.OPERATOR.BETWEEN);
				operators.push(this.OPERATOR.NOT_BETWEEN);
				operators.push(this.OPERATOR.IN_ANY);
				operators.push(this.OPERATOR.NOT_IN);
				break;
			case this.DATA_TYPE.DATE:
			case this.DATA_TYPE.TIME:
			case this.DATA_TYPE.TIME_STAMP:
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
				operators.push(this.OPERATOR.LESS);
				operators.push(this.OPERATOR.LESS_OR_EQUAL);
				operators.push(this.OPERATOR.GREATER);
				operators.push(this.OPERATOR.GREATER_OR_EQUAL);
				operators.push(this.OPERATOR.BETWEEN);
				operators.push(this.OPERATOR.NOT_BETWEEN);
				operators.push(this.OPERATOR.IN_ANY);
				operators.push(this.OPERATOR.NOT_IN);
				break;
			case this.DATA_TYPE.DECIMAL:
			case this.DATA_TYPE.DOUBLE:
			case this.DATA_TYPE.INTEGER:
			default:
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
				operators.push(this.OPERATOR.LESS);
				operators.push(this.OPERATOR.LESS_OR_EQUAL);
				operators.push(this.OPERATOR.GREATER);
				operators.push(this.OPERATOR.GREATER_OR_EQUAL);
				operators.push(this.OPERATOR.BETWEEN);
				operators.push(this.OPERATOR.NOT_BETWEEN);
				operators.push(this.OPERATOR.IN_ANY);
				operators.push(this.OPERATOR.NOT_IN);
			}

			if (nullable) {
				operators.push(this.OPERATOR.NULL);
				operators.push(this.OPERATOR.NOT_NULL);
			}

			this.logExit("getCMOperators", "operator count: " + operators.length);
			return operators;
		},

		_isRangeSupportedDataType: function(dataType) {
			return dataType == this.DATA_TYPE.DATE || dataType == this.DATA_TYPE.TIME || dataType == this.DATA_TYPE.TIME_STAMP || dataType == this.DATA_TYPE.DECIMAL || dataType == this.DATA_TYPE.DOUBLE || dataType == this.DATA_TYPE.SHORT || dataType == this.DATA_TYPE.INTEGER || dataType == this.DATA_TYPE.LONG;
		},

		_getCMISOperators: function(/* String */dataType, /* String */cardinality, /* Object */choiceList, /* Boolean */usesLongColumn, /* Boolean */textSearchable) {
			var operators = [];

			if (dataType == this.DATA_TYPE.STRING && textSearchable) {
				operators.push(this.OPERATOR.CONTAINS);
			}

			if (dataType == this.DATA_TYPE.STRING && (!choiceList || usesLongColumn)) {
				operators.push(this.OPERATOR.STARTS_WITH);
				operators.push(this.OPERATOR.ENDS_WITH);
				operators.push(this.OPERATOR.LIKE);
				operators.push(this.OPERATOR.NOT_LIKE);
			}

			if (cardinality == "LIST" || cardinality == "multi") {
				operators.push(this.OPERATOR.IN);
			} else if (dataType == this.DATA_TYPE.BOOLEAN) {
				//cmis boolean just support =
				operators.push(this.OPERATOR.EQUAL);

			} else if (dataType == this.DATA_TYPE.GUID || dataType == this.DATA_TYPE.OBJECT || dataType == this.DATA_TYPE.STRING_CMISID) {
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
			} else if (dataType == this.DATA_TYPE.USER) {
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
			} else {
				if (dataType != this.DATA_TYPE.STRING || !usesLongColumn) {
					operators.push(this.OPERATOR.EQUAL);
					operators.push(this.OPERATOR.NOT_EQUAL);
					operators.push(this.OPERATOR.LESS);
					operators.push(this.OPERATOR.LESS_OR_EQUAL);
					operators.push(this.OPERATOR.GREATER);
					operators.push(this.OPERATOR.GREATER_OR_EQUAL);
				}

				if (!choiceList && this._isRangeSupportedDataType(dataType)) {
					operators.push(this.OPERATOR.BETWEEN);
					operators.push(this.OPERATOR.NOT_BETWEEN);
				}
			}

			if (dataType != this.DATA_TYPE.OBJECT && !usesLongColumn) {
				operators.push(this.OPERATOR.IN_ANY);
				operators.push(this.OPERATOR.NOT_IN);
			}

			// Not supported yet
			if (cardinality == "SINGLE") {
				operators.push(this.OPERATOR.NULL);
				operators.push(this.OPERATOR.NOT_NULL);
			}

			return operators;
		},

		_getP8Operators: function(/* String */dataType, /* String */cardinality, /* Object */choiceList, /* Boolean */usesLongColumn, /* Boolean */textSearchable) {
			var operators = [];

			if (dataType == this.DATA_TYPE.STRING && textSearchable) {
				operators.push(this.OPERATOR.CONTAINS);
			}

			if (dataType == this.DATA_TYPE.STRING && (!choiceList || usesLongColumn)) {
				operators.push(this.OPERATOR.STARTS_WITH);
				operators.push(this.OPERATOR.ENDS_WITH);
				operators.push(this.OPERATOR.LIKE);
				operators.push(this.OPERATOR.NOT_LIKE);
			}

			if (cardinality == "LIST") {
				operators.push(this.OPERATOR.IN);
			} else if (dataType == this.DATA_TYPE.BOOLEAN || dataType == this.DATA_TYPE.GUID || dataType == this.DATA_TYPE.OBJECT) {
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
			} else if (dataType == this.DATA_TYPE.USER) {
				operators.push(this.OPERATOR.EQUAL);
				operators.push(this.OPERATOR.NOT_EQUAL);
			} else {
				if (dataType != this.DATA_TYPE.STRING || !usesLongColumn) {
					operators.push(this.OPERATOR.EQUAL);
					operators.push(this.OPERATOR.NOT_EQUAL);
					operators.push(this.OPERATOR.LESS);
					operators.push(this.OPERATOR.LESS_OR_EQUAL);
					operators.push(this.OPERATOR.GREATER);
					operators.push(this.OPERATOR.GREATER_OR_EQUAL);
				}

				if (!choiceList && this._isRangeSupportedDataType(dataType)) {
					operators.push(this.OPERATOR.BETWEEN);
					operators.push(this.OPERATOR.NOT_BETWEEN);
				}
			}

			if (dataType != this.DATA_TYPE.OBJECT && !usesLongColumn) {
				operators.push(this.OPERATOR.IN_ANY);
				operators.push(this.OPERATOR.NOT_IN);
			}

			if (cardinality == "SINGLE") {
				operators.push(this.OPERATOR.NULL);
				operators.push(this.OPERATOR.NOT_NULL);
			}

			return operators;
		},

		/**
		 * Returns true if the given text search type is supported by the repository.
		 * 
		 * @param type
		 *            The text search type to be evaluated.
		 */
		isTextSearchTypeSupported: function(type) {
			return (this.repository.type == "cm" && type == this.TEXT_SEARCH_TYPE.BASIC) || type == this.TEXT_SEARCH_TYPE.CASCADE || type == this.TEXT_SEARCH_TYPE.VERITY;
		},

		//d22876 new added function
		/**
		 * Returns true if the given query compatibility type is "bothseparate" (CMIS only).
		 * 
		 * @param type
		 *            The query compatibility type to be evaluated.
		 */
		isCmisCapabilityQueryBothSeperated: function(type) {
			return (type != null && type == this.CAPABILITY_QUERY.BOTH_SEPERATE);
		},

		/**
		 * Returns true if the given query compatibility type is "fulltextonly" (CMIS only).
		 * 
		 * @param type
		 *            The query compatibility type to be evaluated.
		 */
		isCmisCapabilityTextOnly: function(type) {
			return (type != null && type == this.CAPABILITY_QUERY.FULLTEXT_ONLY);
		},//d22876

		/**
		 * Returns true if the repository supports changing the results display.
		 */
		isResultsDisplaySupported: function() {
			return this.repository && !this.repository._isOnDemand();
		},

		/**
		 * Returns true if the repository supports appending of search results.
		 */
		isResultsAppendSupported: function() {
			return this.repository && this.repository._isOnDemand();
		},

		/**
		 * Returns true if the given property is classified as being a user property, i.e., Creator.
		 * 
		 * @param name
		 *            The name the property to be evaluated.
		 * @param repositoryType
		 *            The type of repository that the property belongs to (optional).
		 */
		isUserProperty: function(name, repositoryType) {
			var properties = this.USER_PROPERTIES[repositoryType || (this.repository ? this.repository.type : "")];
			return properties ? array.indexOf(properties, name) != -1 : false;
		},

		_convertOperatorType: function(type) {
			if (type == "xs:boolean")
				return "booleanOp";
			else if (type == "xs:date" || type == "xs:time" || type == "xs:timestamp")
				return "datetimeOp";
			else if (type == "xs:decimal" || type == "xs:double" || type == "xs:score")
				return "floatOp";
			else if (type == "xs:short" || type == "xs:integer" || type == "xs:long")
				return "integerOp";
			else if (type == "xs:string" || type == "xs:string:alpha" || type == "xs:string:alphanum" || type == "xs:string:num" || type == "xs:string:clob" || type == "xs:string:ext" || type == "xs:string:cmisid")
				return "stringOp";
			else if (type == "xs:object")
				return "objectOp";
			else if (type == "xs:guid")
				return "idOp";
			else
				throw "Invalid operator:" + type;
		},

		_convertOperator: function(operator) {
			//EQ,!EQ,IA,IN,!IN,NL,!NL;LT,LE,GT,GE,BT,!BT,SW,EW,LK,!LK,CT
			switch (operator) {
			case this.OPERATOR.EQUAL:
				return "EQ";
			case this.OPERATOR.NOT_EQUAL:
				return "!EQ";
			case this.OPERATOR.LIKE:
				return "LK";
			case this.OPERATOR.NOT_LIKE:
				return "!LK";
			case this.OPERATOR.LESS:
				return "LT";
			case this.OPERATOR.LESS_OR_EQUAL:
				return "LE";
			case this.OPERATOR.GREATER:
				return "GT";
			case this.OPERATOR.GREATER_OR_EQUAL:
				return "GE";
			case this.OPERATOR.BETWEEN:
				return "BT";
			case this.OPERATOR.NOT_BETWEEN:
				return "!BT";
			case this.OPERATOR.IN:
				return "IN";
			case this.OPERATOR.IN_ANY:
				return "IA";
			case this.OPERATOR.NOT_IN:
				return "!IN";
			case this.OPERATOR.NULL:
				return "NL";
			case this.OPERATOR.NOT_NULL:
				return "!NL";
			case this.OPERATOR.CONTAINS:
				return "CT";
			case this.OPERATOR.STARTS_WITH:
				return "SW";
			case this.OPERATOR.ENDS_WITH:
				return "EW";
			}
		},

		/**
		 * Returns true if a search should match all the property criteria by default.
		 */
		getMatchAll: function() {
			return this.repository.searchMatchAll == null || this.repository.searchMatchAll == "true" || this.repository.searchMatchAll == true;
		},

		/**
		 * Returns a value that determines the default search type.
		 */
		getDefaultSearchType: function() {
			var type;
			if (this.repository._isCmis() && !this.repository.folderSearchSupported)
				type = this.OBJECT_TYPE.DOCUMENT;
			else
				type = this.repository.defaultSearchType || this.OBJECT_TYPE.DOCUMENT;
			this.logDebug("getDefaultSearchType", "type: " + type);
			return type;
		},

		/**
		 * Calls "callback" with an object containing the maximum length for the name and description defined by the
		 * search class.<br>
		 * The values are retrieved from local cache if available; otherwise, they are retrieved asynchronously. <br>
		 * For example:
		 * <p>
		 * callback({<br>
		 * nameMaxLengh: 256,<br>
		 * descriptionMaxLength: 256<br>
		 * });
		 * </p>
		 */
		retrieveNameAndDescriptionMaxLength: function(callback) {
			var repositoryType = this.repository.type;
			if (repositoryType != "cm" && repositoryType != "p8") {
				callback(null);
			} else if (this._cache.nameAndDescriptionMaxLength && this._cache.nameAndDescriptionMaxLength[repositoryType]) {
				callback(this._cache.nameAndDescriptionMaxLength[repositoryType]);
			} else {
				var name = repositoryType == "cm" ? "clbName" : "DocumentTitle";
				var description = repositoryType == "cm" ? "clbDescription" : "Description";
				var contentClass = this.repository.getContentClass(repositoryType == "cm" ? "ICMSearch" : "StoredSearch");
				contentClass.retrieveAttributeDefinitionsForSearches(lang.hitch(this, function(attributes) {
					var obj = new Object();
					for (var i = 0; i < attributes.length; i++) {
						if (attributes[i].id == name) {
							obj.nameMaxLength = attributes[i].maxLength;
						} else if (attributes[i].id == description) {
							obj.descriptionMaxLength = attributes[i].maxLength;
						}
						if ("nameMaxLength" in obj && "descriptionMaxLength" in obj) {
							break;
						}
					}

					// Cache it
					if (!this._cache.nameAndDescriptionMaxLength) {
						this._cache.nameAndDescriptionMaxLength = new Object();
					}
					this._cache.nameAndDescriptionMaxLength[repositoryType] = obj;

					callback(obj);
				}));
			}
		},

		/**
		 * Returns an array containing only attributes that are suitable for defining search criteria.<br>
		 * It supports the following filter options:
		 * <p>
		 * objectType: The object type for which to get the attributes that are configured to be filtered<br>
		 * allowHidden: Indicates whether hidden attributes are allowed in the filtered array<br>
		 * allowNonSearchable: Indicates whether non-searchable attributes are allowed in the filtered array
		 * </p>
		 * 
		 * @param attributeDefinitions
		 *            The array of {@link ecm.model.AttributeDefinition} objects to be filtered
		 * @param options
		 *            An object holding the filter options
		 */
		filterAttributeDefinitions: function(attributeDefinitions, options) {
			options = options || {};
			var filteredProperties = options.objectType ? this.getFilteredProperties(options.objectType) : [];
			return array.filter(attributeDefinitions, lang.hitch(this, function(attrib) {
				if (attrib.isInstanceOf && attrib.isInstanceOf(AttributeDefinition)) {
					if (attrib.dataType == "xs:reference")
						return false;
					if (!attrib.searchable && !options.allowNonSearchable)
						return false;
					if (attrib.hidden && !options.allowHidden && array.indexOf(this.VISIBLE_PROPERTIES[attrib.repositoryType], attrib.id) == -1)
						return false;
					if (array.indexOf(filteredProperties, attrib.id) != -1)
						return false;
				}
				return true;
			}));
		},

		/**
		 * Returns the label for the given data type.
		 * 
		 * @param dataType
		 *            The data type
		 * @param capitalized
		 *            Indicates whether the label is capitalized (optional)
		 * @since 2.0.2
		 */
		getDataTypeLabel: function(dataType, capitalized) {
			switch (dataType) {
			case this.DATA_TYPE.BOOLEAN:
				return capitalized ? ecm.messages.properties_type_boolean_tooltip : ecm.messages.data_type_boolean;
			case this.DATA_TYPE.DATE:
				return capitalized ? ecm.messages.properties_type_date_tooltip : ecm.messages.data_type_date;
			case this.DATA_TYPE.TIME:
				return capitalized ? ecm.messages.properties_type_time_tooltip : ecm.messages.data_type_time;
			case this.DATA_TYPE.TIME_STAMP:
				return capitalized ? ecm.messages.properties_type_timestamp_tooltip : ecm.messages.data_type_timestamp;
			case this.DATA_TYPE.DECIMAL:
				return capitalized ? ecm.messages.properties_type_decimal_tooltip : ecm.messages.data_type_decimal;
			case this.DATA_TYPE.DOUBLE:
				return capitalized ? ecm.messages.properties_type_double_tooltip : ecm.messages.data_type_double;
			case this.DATA_TYPE.SHORT:
				return capitalized ? ecm.messages.properties_type_short_tooltip : ecm.messages.data_type_short;
			case this.DATA_TYPE.INTEGER:
				return capitalized ? ecm.messages.properties_type_integer_tooltip : ecm.messages.data_type_integer;
			case this.DATA_TYPE.LONG:
				return capitalized ? ecm.messages.properties_type_long_tooltip : ecm.messages.data_type_long;
			case this.DATA_TYPE.STRING:
			case this.DATA_TYPE.USER:
			case this.DATA_TYPE.STRING_CMISID:
				return capitalized ? ecm.messages.properties_type_string_tooltip : ecm.messages.data_type_string;
			case this.DATA_TYPE.STRING_ALPHA:
				return capitalized ? ecm.messages.properties_type_string_alpha_tooltip : ecm.messages.data_type_string_alpha;
			case this.DATA_TYPE.STRING_ALPHA_NUM:
				return capitalized ? ecm.messages.properties_type_string_alphanum_tooltip : ecm.messages.data_type_string_alphanum;
			case this.DATA_TYPE.STRING_EXT:
				return capitalized ? ecm.messages.properties_type_string_ext_tooltip : ecm.messages.data_type_string_ext;
			case this.DATA_TYPE.STRING_NUM:
				return capitalized ? ecm.messages.properties_type_string_num_tooltip : ecm.messages.data_type_string_num;
			case this.DATA_TYPE.BINARY:
				return capitalized ? ecm.messages.properties_type_binary_tooltip : ecm.messages.data_type_binary;
			case this.DATA_TYPE.OBJECT:
				return capitalized ? ecm.messages.properties_type_object_tooltip : ecm.messages.data_type_object;
			case this.DATA_TYPE.GUID:
				return capitalized ? ecm.messages.properties_type_guid_tooltip : ecm.messages.data_type_guid;
			case "xs:childcomponent":
				return capitalized ? ecm.messages.properties_type_childComponent_tooltip : ecm.messages.data_type_child_component;
			default:
				return "";
			}
		}
	});

	/**
	 * Static function that returns an instance of the search configuration
	 * 
	 * @param args
	 *            Object containing arguments to use when constructing the search configuration object.
	 * @memberof ecm.model.SearchConfiguration
	 */
	SearchConfiguration.getSearchConfiguration = function(args) {
		return new SearchConfiguration(args);
	};

	return SearchConfiguration;
});

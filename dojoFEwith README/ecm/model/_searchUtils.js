/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/lang",
	"dojo/date/stamp",
	"dojo/date",
	"dojox/collections/ArrayList",
	"dojox/collections/Set",
	"ecm/model/ChildComponentSearchCriteria",
	"ecm/model/SearchConfiguration"
], function(array, lang, dateStamp, date, ArrayList, Set, ChildComponentSearchCriteria, SearchConfiguration) {

	/**
	 * @private Search utilities
	 * @name ecm.model._searchUtils
	 * @since 2.0.2
	 */
	var utils = {
		/**
		 * Returns true if the given repository is text searchable.
		 * 
		 * @param repository
		 *            A {@link ecm.model.Repository} object
		 * @param contentClass
		 *            A {@link ecm.model.ContentClass} object
		 */
		isRepositoryTextSearchable: function(repository, contentClass) {
			if (repository._isBox())
				return true;

			var searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: repository
			});
			if (searchConfig.isTextSearchTypeSupported(repository.textSearchType)) {
				if (repository._isCM() && contentClass)
					return contentClass.id != "$common" && (lang.isFunction(contentClass.isTextSearchable) ? contentClass.isTextSearchable() : contentClass.textSearchable);
				else
					return true;
			}

			return false;
		},

		/**
		 * Returns the repository that the given search template is configured to search in.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model._SearchTemplateBase}
		 */
		getSearchInRepository: function(searchTemplate) {
			var repository;
			if (searchTemplate.declaredClass != "ecm.model.UnifiedSearchTemplate") {
				if (!array.some(searchTemplate.objectStores, function(os) {
					repository = os.repositoryId ? ecm.model.desktop.getRepository(os.repositoryId) : null;
					return repository != null;
				}))
					repository = searchTemplate.repository;
			}

			return repository;
		},

		/**
		 * Returns the repository that is associated with the given attribute.
		 * 
		 * @param attribute
		 *            An array of {@link ecm.model.AttributeDefinition}, {@link ecm.model.ChildComponentDefinition} or
		 *            {@link ecm.model.SearchCriterion} objects
		 */
		getAttributeRepository: function(attribute) {
			var repository = null;
			if (attribute.repository)
				repository = attribute.repository;
			else if (attribute.contentClass)
				repository = attribute.contentClass.repository;
			else if (attribute.searchTemplate)
				repository = utils.getSearchInRepository(attribute.searchTemplate);
			else if (attribute.metadataTemplate)
				repository = attribute.metadataTemplate.repository;
			return repository;
		},

		/**
		 * Returns true if the given attribute is searchable.
		 * 
		 * @param attribute
		 *            An instance of {@link ecm.model.AttributeDefinition}, {@link ecm.model.ChildComponentDefinition}
		 *            or {@link ecm.model.SearchCriterion}
		 */
		isAttributeSearchable: function(attribute) {
			return !("searchable" in attribute) || attribute.searchable;
		},

		/**
		 * Returns the intersection of operators available to each mapped attribute.
		 * 
		 * @param attributes
		 *            An array of {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion} objects
		 */
		calculateOperatorIntersection: function(attributes) {
			var arrayList;
			array.every(attributes, function(attrib) {
				if (!utils.isAttributeSearchable(attrib))
					return true;

				var searchConfig = SearchConfiguration.getSearchConfiguration({
					repository: utils.getAttributeRepository(attrib)
				});
				var operators = attrib.availableOperators;
				if (searchConfig.isUserProperty(attrib.id, attrib.repositoryType)) {
					// Use a wider range of operators since a text box will be used in place of a user selector
					// to define criteria for mixed attributes; otherwise, users would be limited to equality operators
					operators = [
						"STARTSWITH",
						"ENDSWITH",
						"LIKE",
						"NOTLIKE",
						"EQUAL",
						"NOTEQUAL",
						"LESS",
						"LESSOREQUAL",
						"GREATER",
						"GREATEROREQUAL",
						"INANY",
						"NOTIN",
						"NULL",
						"NOTNULL"
					];
				}
				operators = searchConfig.filterOperators(operators, attrib.dataType);
				arrayList = arrayList ? Set.intersection(arrayList, operators) : new ArrayList(operators);
				return arrayList.count > 0;
			});

			return arrayList ? arrayList.toArray() : [];
		},

		/**
		 * Returns true if the given content search repository is similar to the other.
		 * 
		 * @param searchRepository
		 *            A {@link ecm.model.SearchRepository} object
		 * @param otherSearchRepository
		 *            A {@link ecm.model.SearchRepository} object
		 */
		compareSearchRepositories: function(searchRepository, otherSearchRepository) {
			if (searchRepository.repository.id != otherSearchRepository.repository.id)
				return false;

			if (!searchRepository.searchTemplate != !otherSearchRepository.searchTemplate //
					|| (searchRepository.searchTemplate && searchRepository.searchTemplate.id != otherSearchRepository.searchTemplate.id))
				return false;

			if (searchRepository.objectType != otherSearchRepository.objectType)
				return false;

			if (!searchRepository.contentClass != !otherSearchRepository.contentClass //
					|| (searchRepository.contentClass && !utils.compareContentClasses(searchRepository.contentClass, otherSearchRepository.contentClass)) //
					|| searchRepository.searchSubclasses != otherSearchRepository.searchSubclasses)
				return false;
			
			if (!searchRepository.metadataTemplate != !otherSearchRepository.metadataTemplate //
					|| (searchRepository.metadataTemplate && searchRepository.metadataTemplate.id != otherSearchRepository.metadataTemplate.id))
				return false;

			return true;
		},

		/**
		 * Returns true if the given content class is equal to the other.
		 * 
		 * @param contentClass
		 *            A {@link ecm.model.ContentClass} or {@link ecm.model.SearchContentClasses} object
		 * @param otherContentClass
		 *            A {@link ecm.model.ContentClass} or {@link ecm.model.SearchContentClasses} object
		 */
		compareContentClasses: function(contentClass, otherContentClass) {
			if (!contentClass != !otherContentClass)
				return false;

			if (contentClass) {
				if (contentClass.declaredClass != otherContentClass.declaredClass)
					return false;

				if (contentClass.declaredClass == "ecm.model.SearchContentClasses") {
					if (contentClass.contentClasses instanceof Array != otherContentClass.contentClasses instanceof Array)
						return false;

					if (contentClass.contentClasses instanceof Array) {
						if (contentClass.contentClasses.length != otherContentClass.contentClasses.length)
							return false;

						return array.every(contentClass.contentClasses, function(item) {
							return array.some(otherContentClass.contentClasses, function(otherItem) {
								return item.id == otherItem.id;
							});
						});
					}
				}

				return contentClass.id == otherContentClass.id;
			}

			return true;
		},

		/**
		 * Returns true if the given values is equal to the others.
		 * 
		 * @param values
		 *            An array of values
		 * @param otherValues
		 *            An array of values
		 * @param dataType
		 *            The data type of the values
		 */
		compareValues: function(values, otherValues, dataType) {
			if (lang.isArray(values) != lang.isArray(otherValues))
				return false;

			if (lang.isArray(values)) {
				// Ignore empty values; otherwise, the comparison may yield a false-negative result (e.g., [ "foo" ] is equal to [ "foo", "" ])
				var callback = function(value) {
					return value != null && value != "";
				};
				values = array.filter(values, callback);
				otherValues = array.filter(otherValues, callback);

				if (values.length != otherValues.length)
					return false;

				var isDateTime = utils.isDateTimeDataType(dataType);
				if (!array.every(values, function(value, i) {
					if( value && value.declaredClass && value.declaredClass == "ecm.model.User" ){
						return value.compare( otherValues[i] );
					}else{
						return isDateTime ? !date.compare(utils._toDate(value), utils._toDate(otherValues[i]), dataType == "xs:time" ? "time" : "date") : value == otherValues[i];
					}
				}))
					return false;
			}

			return true;
		},

		_toDate: function(value) {
			var num = new Number(value);
			return !isNaN(num) ? new Date(num) : dateStamp.fromISOString(value);
		},

		/**
		 * Finds the repositories that are included in the criteria and whether they meet the minimum criteria
		 * requirements to run a search.
		 * 
		 * @param criteria
		 *            An array of {@link ecm.model.SearchCriterion} and {@link ecm.model.ChildComponentSearchCriteria}
		 *            objects
		 * @param mappings
		 *            An array of {@link ecm.model.AttributeMapping} objects
		 */
		findCriteriaRepositories: function(criteria, mappings) {
			var repositories = {};
			array.forEach(criteria, function(criterion) {
				var valid = utils.meetsMinimumCriteria(criterion) || array.some(criterion.searchCriteria, utils.meetsMinimumCriteria);
				array.some(mappings, function(mapping) {
					if (mapping.id == criterion.id) {
						array.forEach(mapping.mappedAttributes, function(attrib) {
							if (!utils.isAttributeSearchable(attrib))
								return;

							var repository = utils.getAttributeRepository(attrib);
							if (valid)
								repositories[repository.id] = null;
							else if (repositories[repository.id] !== null)
								repositories[repository.id] = mapping;
						});
						return true;
					}
				});
			});

			return repositories;
		},

		/**
		 * Returns true if the given object meets the the minimum criteria requirements to run a search.
		 * 
		 * @param criterion
		 *            An instance of {@link ecm.model.SearchCriterion} or an object of the form: { "selectedOperator": "EQUAL", "values": [ "foo" ] }
		 */
		meetsMinimumCriteria: function(criterion) {
			var value = criterion.values && criterion.values.length ? criterion.values[0] : null;
			return !!value || value === 0 || value === false || criterion.selectedOperator == "NULL" || criterion.selectedOperator == "NOTNULL";
		},

		/**
		 * Returns the operators that are available to the given attribute.
		 * 
		 * @param attribute
		 *            An {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion} object
		 */
		getAvailableOperators: function(attribute) {
			var repository = utils.getAttributeRepository(attribute);
			var searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: repository
			});
			var dataType = utils.normalizeDataType(attribute, true);
			var operators = attribute.availableOperators;

			// Filter out "like" operators if working with a P8 or CMIS attribute that has a choice list, unless it uses a long column
			if (repository && (repository.type == "p8" || repository.type == "cmis") && (attribute.choiceList || attribute.markingList) && !attribute.usesLongColumn) {
				operators = array.filter(operators, function(op) {
					return !utils.isLikeOperator(op);
				});
			}

			return searchConfig.filterOperators(operators, dataType) || [];
		},

		/**
		 * Returns an array of objects that can be used to represent the given operators in a form select widget.
		 * 
		 * @param attribute
		 *            An array of {@link ecm.model.AttributeDefinition}, {@link ecm.model.ChildComponentDefinition} or
		 *            {@link ecm.model.SearchCriterion} objects
		 * @param unfiltered
		 *            Indicates whether the operators should not to be filtered as per
		 *            <code>ecm.model.Repository.searchFilteredOperators</code>
		 */
		getOperatorSelectOptions: function(attribute, unfiltered) {
			return array.map(unfiltered ? attribute.availableOperators : utils.getAvailableOperators(attribute), function(op) {
				return {
					value: op,
					label: ecm.messages["operator_" + op]
				};
			});
		},

		/**
		 * Returns true if the given operator is a variant of LIKE.
		 * 
		 * @param operator
		 *            An operator
		 */
		isLikeOperator: function(operator) {
			return operator == "LIKE" || operator == "NOTLIKE" || operator == "STARTSWITH" || operator == "ENDSWITH";
		},

		/**
		 * Returns a search friendly data type for the given attribute.
		 * 
		 * @param attribute
		 *            An {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion} object
		 * @param includeUserType
		 *            Indicates whether to normalize attributes of type user
		 */
		normalizeDataType: function(attribute, includeUserType) {
			var dataType = attribute.dataType;
			var repository = utils.getAttributeRepository(attribute);
			if (attribute.repositoryType != "od" && (!repository || !repository._isOnDemand()) && dataType != "xs:user") {
				if (dataType == "xs:timestamp") {
					if (!utils.inputTimestampAsText(attribute)) {
						// Use date since time is not pertinent to search
						dataType = "xs:date";
					}
				} else if (includeUserType && attribute.repositoryType) {
					var searchConfig = SearchConfiguration.getSearchConfiguration();
					if (searchConfig.isUserProperty(attribute.id, attribute.repositoryType))
						dataType = "xs:user";
				}
			}

			return dataType;
		},

		/**
		 * Returns true if the given data type is compatible with the other.
		 * 
		 * @param dataType
		 *            An attribute data type
		 * @param otherDataType
		 *            An attribute data type
		 */
		isDataTypeCompatible: function(dataType, otherDataType) {
			if (dataType == otherDataType)
				return true;

			if (utils.isDateDataType(dataType) && utils.isDateDataType(otherDataType))
				return true;

			if (!utils.isDateTimeDataType(dataType) && !utils.isDateTimeDataType(otherDataType)) {
				var types = INCOMPATIBLE_DATA_TYPES[dataType];
				if (!types || array.indexOf(types, otherDataType) < 0)
					return true;
			}

			return false;
		},

		/**
		 * Returns true if the given data type represents a date.
		 * 
		 * @param dataType
		 *            An attribute data type
		 */
		isDateDataType: function(dataType) {
			return dataType == "xs:date" || dataType == "xs:timestamp";
		},

		/**
		 * Returns true if the given data type represents a date or time.
		 * 
		 * @param dataType
		 *            An attribute data type
		 */
		isDateTimeDataType: function(dataType) {
			return utils.isDateDataType(dataType) || dataType == "xs:time";
		},

		/**
		 * Returns true if the given data type is a number.
		 * 
		 * @param dataType
		 *            An attribute data type
		 */
		isNumberDataType: function(dataType) {
			return dataType == "xs:score" || dataType == "xs:double" || dataType == "xs:decimal" || dataType == "xs:long" || dataType == "xs:integer" || dataType == "xs:short";
		},

		/**
		 * Returns true if the given data type is a string.
		 * 
		 * @param dataType
		 *            An attribute data type
		 */
		isStringDataType: function(dataType) {
			return dataType == "xs:string" || dataType == "xs:string:ext" || dataType == "xs:string:alphanum" || dataType == "xs:string:alpha" || dataType == "xs:string:num";
		},

		/**
		 * Returns the data type that is the least common denominator (LCD) among the given attributes.
		 * 
		 * @param attributes
		 *            An array of {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion} objects
		 */
		findDataTypeLCD: function(attributes) {
			var lcd = -1;
			array.forEach(attributes, function(attrib) {
				var i = array.indexOf(DATA_TYPE_LCD, attrib.dataType);
				if (lcd < i)
					lcd = i;
			});

			return lcd > -1 ? DATA_TYPE_LCD[lcd] : null;
		},

		/**
		 * Returns true if the given folder is the root of the repository.
		 * 
		 * @param folder
		 *            A {@link ecm.model.SelectedFolder} object
		 */
		isRootFolder: function(folder) {
			var item = folder ? folder.item : null;
			return !item || (!item.parent && (item.rootFolder || item.id == item.repository.rootFolderId));
		},

		/**
		 * Returns an object holding the values of the first instance of each attribute in the given criteria, needed to
		 * retrieve dependent attribute information.
		 * 
		 * @param criteria
		 *            An array of {@link ecm.model.SearchCriterion} and {@link ecm.model.ChildComponentSearchCriteria}
		 * @param trigger
		 *            The {@link ecm.model.SearchCriterion} object that triggered the retrieve
		 */
		collectDependentAttributeValues: function(criteria, trigger) {
			var attributes = {};
			var childComponents = [];
			array.forEach(criteria, function(criterion) {
				if (criterion.isInstanceOf && criterion.isInstanceOf(ChildComponentSearchCriteria)) {
					if (!array.some(childComponents, function(child) {
						return child.name == criterion.id;
					}) && criterion.searchCriteria && criterion.searchCriteria.length > 0) {
						childComponents.push({
							name: criterion.id,
							values: [
								{
									values: array.map(criterion.searchCriteria, function(child) {
										// Discard empty values
										var values = array.filter(child.values, function(value) {
											return value != null && value != "";
										});
										return {
											name: criterion.id + "/" + child.id,
											value: values.length == 0 ? "" : (values.length == 1 ? values[0] : values),
											dataType: child.dataType,
											label: child.name
										};
									})
								}
							]
						});
					}
				} else if (attributes[criterion.id] == null && (trigger == null || (criterion.id != trigger.id || criterion == trigger))) {
					// Discard empty values
					var values = array.filter(criterion.values, function(value) {
						return value != null && value != "";
					});
					attributes[criterion.id] = values.length == 0 ? "" : (values.length == 1 ? values[0] : values);
				}
			});

			return {
				"attributes": attributes,
				"childComponents": childComponents
			};
		},

		/**
		 * Applies custom criteria to the given search.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model._SearchTemplateBase}
		 * @param criteria
		 *            An array of objects of the form { property: "id", value: "value" || [ "value-1", ... ,"value-n" ] }
		 */
		applyCustomCriteria: function(searchTemplate, criteria) {
			var methodName = "ecm.model._searchUtils.applyCustomCriteria";
			searchTemplate.logEntry(methodName);
			criteria = [].concat(criteria);
			array.forEach(searchTemplate.searchCriteria, function(criterion) {
				for (var i = 0; i < criteria.length; i++) {
					if (criteria[i].property == criterion.id || criteria[i].property == criterion.name) {
						searchTemplate.logDebug(methodName, "Custom criteria defined for property: " + criteria[i].property);
						if (criterion.fixedValue) {
							searchTemplate.logDebug(methodName, "Cannot apply custom criteria because the property has a fixed value");
							criteria.splice(i, 1);
							break;
						}
						if ("value" in criteria[i] && "values" in criterion) { // SearchCriterion
							var value = criteria[i].value;
							if (value != null) {
								if (!(value instanceof Array)) {
									value = [
										value || ""
									];
								}
								searchTemplate.logDebug(methodName, "New value: " + value);
								criterion.defaultValue = value;
								criterion.setValues(value);
							}
						} else if (criteria[i].searchCriteria && "searchCriteria" in criterion) { // ChildComponentSearchCriteria
							searchTemplate.logDebug(methodName, "Applying child component criteria...");
							utils.applyCustomCriteria(criterion, criteria[i].searchCriteria);
						} else {
							searchTemplate.logDebug(methodName, "Custom criteria is missing \"value\" or \"searchCriteria\"");
						}
						criteria.splice(i, 1);
						break;
					}
				}
			});
			searchTemplate.logExit(methodName);
		},

		/**
		 * Returns true if the given attribute is a CM8 time-stamp that should accept text instead of a date input.
		 * 
		 * @param attribute
		 *            An instance of {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion}
		 */
		inputTimestampAsText: function(attribute) {
			// Not applicable to non time-stamp or pseudo attributes derived from an attribute mapping
			if (attribute.dataType != "xs:timestamp" || attribute._isPseudo)
				return false;

			var repository = utils.getAttributeRepository(attribute);
			return repository && repository._isCM() && repository.inputTimestampAsText;
		},

		/**
		 * Returns true if the given attribute is a P8 multi-value time-stamp that should accept date and time instead of just date input.
		 * 
		 * @param attribute
		 *            An instance of {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion}
		 */
		inputMultiValueTimestampAsDateTime: function(attribute) {
			return attribute.repositoryType == "p8"
				&& attribute.dataType == "xs:timestamp"
				&& attribute.cardinality == "LIST"
				&& ecm.model.desktop.inputMultiValueTimestampAsDateTime;
		},

		/**
		 * Returns true if the given attribute is a time-stamp that should accept date and time instead of just date input.
		 * In most cases it's impractical to search with a time-stamp down to the second. Thus we coerce time-stamp attributes
		 * to accept dates only, with the exception of OD attributes, P8 multi-value properties when the desktop is set up to
		 * enforce date/time input, or CM properties when the desktop is set up to accept an XQuery time-stamp string.
		 * 
		 * @param attribute
		 *            An instance of {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion}
		 */
		inputTimestampAsDate: function(attribute) {
			return attribute.dataType == "xs:timestamp"
				&& attribute.repositoryType != "od"
				&& !utils.inputTimestampAsText(attribute)
				&& !utils.inputMultiValueTimestampAsDateTime(attribute);
		},

		/**
		 * Returns the type of input data for the given attribute.
		 * 
		 * @param attribute
		 *            An instance of {@link ecm.model.AttributeDefinition} or {@link ecm.model.SearchCriterion}
		 * @param normalize
		 *            Indicates whether to normalize the data type
		 */
		getAttributeInputDataType: function(attribute, normalize) {
			return utils.inputTimestampAsText(attribute) ? "xs:string" : (normalize ? utils.normalizeDataType(attribute, true) : attribute.dataType);
		}
	};

	var INCOMPATIBLE_DATA_TYPES = {
		"xs:score": [
			"xs:boolean",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:double": [
			"xs:boolean",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:decimal": [
			"xs:boolean",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:long": [
			"xs:boolean",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:integer": [
			"xs:boolean",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:short": [
			"xs:boolean",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:boolean": [
			"xs:score",
			"xs:double",
			"xs:decimal",
			"xs:long",
			"xs:integer",
			"xs:short",
			"xs:guid",
			"xs:object",
			"xs:string:cmisid"
		],
		"xs:guid": [
			"xs:score",
			"xs:double",
			"xs:decimal",
			"xs:long",
			"xs:integer",
			"xs:short",
			"xs:boolean",
			"xs:string:cmisid"
		],
		"xs:object": [
			"xs:score",
			"xs:double",
			"xs:decimal",
			"xs:long",
			"xs:integer",
			"xs:short",
			"xs:boolean",
			"xs:string:cmisid"
		],
		"xs:string:cmisid": [
			"xs:score",
			"xs:double",
			"xs:decimal",
			"xs:long",
			"xs:integer",
			"xs:short",
			"xs:boolean",
			"xs:guid",
			"xs:object"
		]
	};

	var DATA_TYPE_LCD = [
		"xs:string",
		"xs:string:ext",
		"xs:string:alphanum",
		"xs:string:alpha",
		"xs:string:num",
		"xs:score",
		"xs:double",
		"xs:decimal",
		"xs:long",
		"xs:integer",
		"xs:short",
		"xs:boolean",
		"xs:guid",
		"xs:object",
		"xs:string:cmisid",
		"xs:timestamp",
		"xs:date",
		"xs:time"
	];

	return utils;
});

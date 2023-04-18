/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/json",
	"dojo/_base/lang",
	"ecm/model/_SearchTemplateBase",
	"ecm/model/_ModelStore",
	"ecm/model/AttributeDefinition",
	"ecm/model/AttributeMapping",
	"ecm/model/ChildComponentDefinition",
	"ecm/model/ContentClass",
	"ecm/model/ContentItem",
	"ecm/model/Message",
	"ecm/model/MetadataTemplate",
	"ecm/model/SearchContentClasses",
	"ecm/model/SearchCriterion",
	"ecm/model/SearchRepository",
	"ecm/model/SearchTemplate",
	"ecm/model/_searchUtils"
], function(array, declare, dojojson, lang, _SearchTemplateBase, _ModelStore, AttributeDefinition, AttributeMapping, ChildComponentDefinition, ContentClass, ContentItem, Message, MetadataTemplate, SearchContentClasses, SearchCriterion, SearchRepository, SearchTemplate, utils) {

	/**
	 * Constructs a unified search template.
	 * 
	 * @param properties
	 *            The properties of the unified search template. The properties can be any of the public fields as
	 *            defined bellow, plus those of the ecm.model.ContentItem, ecm.model.Item, and ecm.model._ModelObject.
	 * @name ecm.model.UnifiedSearchTemplate
	 * @class Represents a unified search template that can be stored in a repository and be used to search in multiple
	 *        repositories simultaneously. To improve performance, the search criteria are not loaded initially.
	 *        Instead, the <code>retrieveSearchCriteria</code> method must be called to initiate an asynchronous
	 *        request to make them available.
	 * @augments ecm.model._SearchTemplateBase
	 * @since 2.0.2
	 */
	var UnifiedSearchTemplate = declare("ecm.model.UnifiedSearchTemplate", _SearchTemplateBase, {
		/** @lends ecm.model.UnifiedSearchTemplate.prototype */

		/**
		 * An array of {@link ecm.model.SearchRepository} objects.
		 */
		searchRepositories: null,

		/**
		 * An array of {@link ecm.model.AttributeMapping} objects.
		 */
		attributeMappings: null,

		/**
		 * An object holding the text search criteria.
		 * 
		 * @since 2.0.3.6
		 */
		textSearchCriteria: null,

		_init: function() {
			this.inherited(arguments);

			if (!this.mimetype)
				this.mimetype = "application/x-unifiedsearchtemplate";

			var repositories = this._getAttributeValue("IcnSearchingRepositories") || this._getAttributeValue("clbSearchingRepositories");
			if (repositories != undefined)
				this._repositories = (repositories || "").split(",");

			this._navigatorSavedSearch = true;
		},

		/**
		 * @private
		 */
		update: function(item, skipOnChange) {
			this.inherited(arguments);
			this._repositories = (this.attributes.IcnSearchingRepositories || this.attributes.clbSearchingRepositories || "").split(",");
		},

		_connectToRepository: function(onConnect, ignoreErrors) {
			var connected = true;
			if (this._repositories instanceof Array && this._repositories.length > 0) {
				var repoIds = [];
				array.forEach(this._repositories, lang.hitch(this, function(repoId) {
					var repo = ecm.model.desktop.getRepository(repoId);
					if (!repo && !ignoreErrors) {
						var message = Message.createErrorMessage("unified_search_repository_not_found_error");
						ecm.model.desktop.addMessage(message);
						this.onUnsupportedSearchCriteriaRetrieved(this);
						connected = false;
					} else if (repo && !repo.connected) {
						repoIds.push(repoId);
						connected = false;
					}
				}));
				this._connectToDisconnectedRepositories(repoIds, null, onConnect);
			}

			return connected;
		},

		_connectToDisconnectedRepositories: function(repositoryIds, request, onConnect) {
			if (!(repositoryIds instanceof Array) || repositoryIds.length < 1)
				return;

			var repoId = repositoryIds.shift();
			var repo = ecm.model.desktop.getRepository(repoId);
			if (repositoryIds.length == 0) {
				this._onRequestRepositoryConnection(repo, request, onConnect);
			} else {
				var self = this;
				this._onRequestRepositoryConnection(repo, null, function() {
					setTimeout(function() {
						self._connectToDisconnectedRepositories(repositoryIds, request, onConnect);
					}, 1000);
				});
			}
		},

		_getOpenSearchTemplateServiceName: function() {
			return "openUnifiedSearch";
		},

		_getHandledErrorNumbers: function() {
			return [
				1613
			];
		},

		_applyRetrievedSearchCriteria: function(response) {
			var repositories = [];
			if (response.repositories instanceof Array) {
				array.forEach(response.repositories, lang.hitch(this, function(repoJson) {
					repositories.push(this._createSearchRepository(repoJson));
				}));
			}
			this.searchRepositories = repositories;

			var mappings = [];
			if (response.mappings instanceof Array) {
				array.forEach(response.mappings, lang.hitch(this, function(mappingJson) {
					mappings.push(this._createAttributeMapping(mappingJson, repositories));
				}));
			}
			this.attributeMappings = mappings;

			this.textSearchCriteria = response.textSearchCriteria;

			if (response.searchCriteria instanceof Array) {
				array.forEach(response.searchCriteria, lang.hitch(this, function(criterion) {
					this._applyRetrievedAttributeDefinition(criterion, this.attributeMappings);
				}));
			}

			this._errors = response.templateErrors;

			this.inherited(arguments);
		},

		_createSearchRepository: function(repositoryJson) {
			var props = {
				id: repositoryJson.repository,
				searchSubfolders: repositoryJson.searchSubfolders,
				searchSubclasses: repositoryJson.searchSubclasses,
				objectType: repositoryJson.objectType,
				version: repositoryJson.version,
				textSearchEnabled: !!repositoryJson.textSearchEnabled
			};
			var repo = ecm.model.desktop.getRepository(repositoryJson.repository);
			props.name = repo.name;
			props.repository = repo;
			if (repositoryJson.folderDefinition) {
				repositoryJson.folderDefinition.repository = repo;
				if (repo._isOnDemand())
					props.searchTemplate = new ecm.model.SearchTemplate(repositoryJson.folderDefinition);
				else
					props.folder = new ContentItem(repositoryJson.folderDefinition);
			}
			if (repositoryJson.classDefinitions instanceof Array && repositoryJson.classDefinitions.length > 0) {
				var classes = array.map(repositoryJson.classDefinitions, function(classDef) {
					classDef.repository = repo;
					if (classDef.id == "$common")
						classDef.name = ecm.messages.search_class_all_pseudo;
					return new ContentClass(classDef);
				});
				if (classes.length > 1) {
					props.contentClass = new SearchContentClasses();
					props.contentClass.setContentClasses(classes);
				} else {
					props.contentClass = classes[0];
				}
			}
			if (repositoryJson.metadataTemplateDefinition) {
				repositoryJson.metadataTemplateDefinition.repository = repo;
				props.metadataTemplate = new MetadataTemplate(repositoryJson.metadataTemplateDefinition);
			}

			return new SearchRepository(props);
		},

		_createAttributeMapping: function(mappingJson, searchRepositories) {
			var props = {
				id: mappingJson.id,
				name: mappingJson.name
			};
			if (mappingJson.properties instanceof Array && mappingJson.properties.length > 0) {
				var attribs = [];
				array.forEach(mappingJson.properties, function(prop) {
					var repo = ecm.model.desktop.getRepository(prop.repository), searchRepository;
					for ( var i in searchRepositories) {
						if (searchRepositories[i].id == repo.id) {
							searchRepository = searchRepositories[i];
							break;
						}
					}

					var attribProps = prop.attributeDefinition;
					attribProps.id = prop.property;
					if (repo._isOnDemand()) {
						attribs.push(searchRepository.searchTemplate._createCriterion(attribProps));
					} else if (prop.metadataTemplate) {
						var attrib = AttributeDefinition.createFromJSON(attribProps, searchRepository.contentClass);
						attrib.contentClass = null;
						attrib.metadataTemplate = searchRepository.metadataTemplate;
						attribs.push(attrib);
					} else {
						if (attribProps.criterias) {
							var childDefinition = new ChildComponentDefinition({
								id: attribProps.template_name,
								name: attribProps.template_label,
								repository: repo,
								attributeDefinitions: array.map(attribProps.criterias, function(childCriterion) {
									return AttributeDefinition.createFromJSON(childCriterion, searchRepository.contentClass);
								}),
								minCardinality: attribProps.parm_minCardinality,
								maxCardinality: attribProps.parm_maxCardinality
							});
							attribs.push(childDefinition);
						} else {
							attribs.push(AttributeDefinition.createFromJSON(attribProps, searchRepository.contentClass));
						}
					}
				});
				props.mappedAttributes = attribs;
			}

			return new AttributeMapping(props);
		},

		_retrieveSearchCriteriaFailed: function(request, response) {
			var handled = this._handleRepositoryNotConnectedError(request, response);
			if (!handled)
				this.inherited(arguments);
		},

		_handleRepositoryNotConnectedError: function(request, response) {
			if (!(response.errors instanceof Array))
				return;

			var handled = array.some(response.errors, lang.hitch(this, function(error) {
				var found = !lang.isString(error) && error.number == 1613;
				if (found) {
					var repoIds = response.repositoriesWithoutConnection;
					this._connectToDisconnectedRepositories(repoIds, request);
				}

				return found;
			}));

			return handled;
		},

		_applyRetrievedAttributeDefinition: function(criterionJson, attributeMappings) {
			var filteredMappings = array.filter(attributeMappings, function(mapping) {
				return mapping.id == criterionJson.id || mapping.id == criterionJson.template_name;
			});
			if (filteredMappings.length < 1)
				return;

			var attrib = filteredMappings[0].toAttributeDefinition();
			if (attrib.isInstanceOf && attrib.isInstanceOf(ChildComponentDefinition)) {
				var props = {
					template_name: attrib.id,
					template_label: criterionJson.template_label, // allows plug-in response filter overrides
				};
				lang.mixin(criterionJson, props);

				array.forEach(criterionJson.searchCriteria, function(childCriterionJson) {
					var filteredAttribs = array.filter(attrib.attributeDefinitions, function(childAttrib) {
						return childAttrib.id == childCriterionJson.id;
					});
					if (filteredAttribs.length > 0)
						this._mixinAttributeDefinitionProperties(childCriterionJson, filteredAttribs[0]);
				}, this);
			} else {
				this._mixinAttributeDefinitionProperties(criterionJson, attrib);
			}
		},

		_mixinAttributeDefinitionProperties: function(criterionJson, attributeDefinition) {
			var properties = {
				name: attributeDefinition.id,
				label: criterionJson.name, // allows plug-in response filter overrides
				description: attributeDefinition.description,
				repositoryType: attributeDefinition.repositoryType || (attributeDefinition.repository ? attributeDefinition.repository.type : ""),
				repository: attributeDefinition.repository,
				validValues: attributeDefinition.allowedValues,
				markingList: attributeDefinition.markingList,
				fixedValue: attributeDefinition.valueFixed,
				dataType: attributeDefinition.dataType,
				cardinality: attributeDefinition.cardinality,
				defaultValue: attributeDefinition.defaultValue,
				nullable: attributeDefinition.nullable,
				textSearchable: false,
				_isPseudo: true // derived from pseudo attribute
			};

			// Enforce OD required and fixed value criteria
			if (attributeDefinition.valueRequired)
				properties.required = true;
			if (properties.fixedValue)
				properties.values = properties.defaultValue;

			// Honor plug-in response filter overrides
			if (criterionJson.availableOperators === undefined)
				properties.availableOperators = utils.getAvailableOperators(attributeDefinition);
			if (criterionJson.choiceList === undefined)
				properties.choiceList = attributeDefinition.choiceList;
			if (criterionJson.format === undefined)
				properties.format = attributeDefinition.format;
			if (criterionJson.minEntry === undefined)
				properties.minEntry = attributeDefinition.minLength;
			if (criterionJson.maxEntry === undefined)
				properties.maxEntry = attributeDefinition.maxLength;
			if (criterionJson.minValue === undefined)
				properties.minValue = attributeDefinition.minValue;
			if (criterionJson.maxValue === undefined)
				properties.maxValue = attributeDefinition.maxValue;
			if (criterionJson.propertyEditor === undefined)
				properties.propertyEditor = attributeDefinition.propertyEditor;

			lang.mixin(criterionJson, properties);
		},

		/**
		 * Returns an array of pseudo {@link ecm.model.AttributeDefinition} objects that can be used to represent
		 * attribute mappings.
		 */
		getAttributeDefinitions: function() {
			var defs = [];
			if (this.attributeMappings instanceof Array && this.attributeMappings.length > 0) {
				array.forEach(this.attributeMappings, function(mapping) {
					defs.push(mapping.toAttributeDefinition());
				});
			}

			return defs;
		},

		/**
		 * Runs the search.
		 * 
		 * @param callback
		 *            A callback function to be invoked with a {@link ecm.model.ResultSet} object when the search has
		 *            completed running
		 * @param sortProperty
		 *            The ID of an attribute mapping to sort by
		 * @param descending
		 *            Indicates whether the results are sorted in descending order
		 * @param teamspace
		 *            An optional {@link ecm.model.Teamspace} object (not applicable to unified searches)
		 * @param errorCallback
		 *            A callback function to be invoked when an error occurs
		 */
		search: function(callback, sortProperty, descending, teamspace, errorCallback) {
			var request = ecm.model.Request.postService("unifiedSearch", null, {
				desktop: ecm.model.desktop.id,
				template_name: this.id,
				order_by: sortProperty,
				order_descending: descending
			}, "text/json", this.searchCriteria ? this.toJson() : "{}", lang.hitch(this, function(response) {
				response.parentFolder = this;

				var results = ContentItem.createResultSet(response);
				results.searchTemplate = this;
				results.setAttributeMappings(this.attributeMappings);
				results._versionLookup = {};
				array.forEach(this.searchRepositories, function(repository) {
					results._versionLookup[repository.id] = repository.version;
				});
				if (callback)
					callback(results);
				this.onSearchCompleted(results);
			}), false, false, false, lang.hitch(this, function(response) {
				var handled = this._handleRepositoryNotConnectedError(request, response);
				if (!handled && response.errors && errorCallback) {
					errorCallback(response);
				}
			}), this._getHandledErrorNumbers());
			return request;
		},

		/**
		 * Returns the JSON representation of this search.
		 */
		toJson: function() {
			var methodName = "toJson";
			this.logEntry(methodName);

			var json = this.inherited(arguments);
			var toJson = function(item) {
				return item.toJson();
			};
			json.repositories = array.map(this.searchRepositories, toJson);
			json.mappings = array.map(this.attributeMappings, toJson);
			if (this.textSearchCriteria)
				json.textSearchCriteria = this.textSearchCriteria;
			if (this.resultsDisplay && (!this.resultsDisplay.columns || this.resultsDisplay.columns.length < 1) && (!this.resultsDisplay.magazineColumns || this.resultsDisplay.magazineColumns.length < 1))
				json.resultsDisplay = null;

			json = dojojson.toJson(json);
			this.logExit(methodName, json);
			return json;
		},

		/**
		 * Returns true if the criteria of the specified search is equal to this ones.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.UnifiedSearchTemplate} object
		 */
		containsEqualCriteria: function(searchTemplate) {
			if (!this.inherited(arguments))
				return false;

			var repositories = this.searchRepositories != null && this.searchRepositories.length > 0 ? this.searchRepositories : null;
			var otherRepositories = searchTemplate.searchRepositories != null && searchTemplate.searchRepositories.length > 0 ? searchTemplate.searchRepositories : null;
			if (repositories instanceof Array != otherRepositories instanceof Array)
				return false;
			if (repositories instanceof Array) {
				if (repositories.length != otherRepositories.length)
					return false;
				if (!array.every(repositories, function(repository, i) {
					return repository.equals(otherRepositories[i]);
				}))
					return false;
			}

			var mappings = this.attributeMappings != null && this.attributeMappings.length > 0 ? this.attributeMappings : null;
			var otherMappings = searchTemplate.attributeMappings != null && searchTemplate.attributeMappings.length > 0 ? searchTemplate.attributeMappings : null;
			if (mappings instanceof Array != otherMappings instanceof Array)
				return false;
			if (mappings instanceof Array) {
				if (mappings.length != otherMappings.length)
					return false;
				if (!array.every(mappings, function(mapping, i) {
					return mapping.equals(otherMappings[i]);
				}))
					return false;
			}

			if (!this.textSearchCriteria != !searchTemplate.textSearchCriteria || (this.textSearchCriteria && this.textSearchCriteria.text != searchTemplate.textSearchCriteria.text))
				return false;

			return true;
		},

		/**
		 * Returns a clone of this search.
		 */
		clone: function() {
			var clone = this.inherited(arguments);
			var cloneIt = function(item) {
				return item.clone();
			};
			clone.searchRepositories = this.searchRepositories ? array.map(this.searchRepositories, cloneIt) : null;
			clone.attributeMappings = this.attributeMappings ? array.map(this.attributeMappings, cloneIt) : null;
			clone.textSearchCriteria = lang.clone(this.textSearchCriteria);
			return clone;
		}
	});

	/**
	 * @private
	 */
	UnifiedSearchTemplate.instanceOf = function(itemJSON, repository) {
		if (itemJSON.template == "IcnSearch" && repository.type == "p8")
			return true;
		if (itemJSON.template == "ICMSearch" && repository.type == "cm")
			return itemJSON.attributes.clbSearchType && (itemJSON.attributes.clbSearchType instanceof Array ? itemJSON.attributes.clbSearchType[0] === 1 : itemJSON.attributes.clbSearchType === 1);

		return false;
	};

	/**
	 * @private
	 */
	UnifiedSearchTemplate.createFromJSON = function(itemJSON, repository, resultSet, parent) {
		var attributes = {};
		var attributeTypes = {};
		var attributeFormats = {};
		var attributeDisplayValues = {};
		var attributeSystemProperty = {};
		for ( var i in itemJSON.attributes) {
			var attr = itemJSON.attributes[i];
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

		lang.mixin(itemJSON, {
			repository: repository,
			resultSet: resultSet,
			parent: parent,
			attributes: attributes,
			attributeTypes: attributeTypes,
			attributeFormats: attributeFormats,
			attributeDisplayValues: attributeDisplayValues,
			attributeSystemProperty: attributeSystemProperty
		});

		return new UnifiedSearchTemplate(itemJSON);
	};

	return UnifiedSearchTemplate;
});

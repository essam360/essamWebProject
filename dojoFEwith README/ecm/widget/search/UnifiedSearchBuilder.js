/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/array",
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/aspect",
	"dojo/string",
	"dojo/Deferred",
	"dojo/promise/all",
	"dojox/collections/Set",
	"dojox/html/entities",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetBase",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/layout/ContentPane",
	"ecm/LoggerMixin",
	"ecm/model/UnifiedSearchTemplate",
	"ecm/widget/dialog/MessageDialog",
	"ecm/widget/listView/ContentList",
	"ecm/widget/listView/gridModules/DndFromDesktopAddDoc",
	"ecm/widget/listView/gridModules/DndRowCopy",
	"ecm/widget/listView/gridModules/RowContextMenu",
	"ecm/widget/search/_SearchPaneContainer",
	"ecm/model/_searchUtils",
	"ecm/widget/search/AttributeMappingsPane",
	"dijit/layout/BorderContainer",
	"dijit/layout/AccordionContainer",
	"./TitlePane",
	"./UnifiedSearchDefinition",
	"./UnifiedSearchRepositoriesList",
	"./_SearchBuilderMixin",
	"dojo/text!./templates/UnifiedSearchBuilder.html"
], function(array, declare, lang, aspect, string, Deferred, all, Set, entities, _TemplatedMixin, _WidgetBase, _WidgetsInTemplateMixin, ContentPane, LoggerMixin, UnifiedSearchTemplate, MessageDialog, ContentList, DndFromDesktopAddDoc, DndRowCopy, RowContextMenu, _SearchPaneContainer, utils, AttributeMappingsPane, BorderContainer, AccordionContainer, TitlePane, UnifiedSearchDefinition, UnifiedSearchRepositoriesList, _SearchBuilderMixin, template) {

	/**
	 * @private Constructs a unified search builder
	 * @name ecm.widget.search.UnifiedSearchBuilder
	 * @class Provides a widget that is used for authoring and running unified searches.
	 * @augments dijit.layout.AccordionContainer
	 * @since 2.0.2
	 */
	return declare("ecm.widget.search.UnifiedSearchBuilder", [
		AccordionContainer,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_SearchBuilderMixin
	], {
		/** @lends ecm.widget.search.UnifiedSearchBuilder.prototype */

		templateString: template,
		widgetsInTemplate: true,

		_searchTemplateClass: UnifiedSearchTemplate,

		constructor: function() {
			this.messages = ecm.messages;
		},

		postCreate: function() {
			this.inherited(arguments);
			this.repositoryScopeContainerNode.set("title", this.messages.search_scope);
			this.repositorySelectionPane.set("title", this.messages.repository);
			this.mappingPane.set("title", this.messages.unified_search_mapping);
			this.searchContainerNode.set("title", this.messages.search);
			this.searchResults.set("emptyMessage", this.messages.no_results_were_found);
		},

		/**
		 * Overrides <code>startup</code> to make necessary event connections.
		 */
		startup: function() {
			this.inherited(arguments);

			this.own(aspect.after(this._repositoriesList, "onUpdate", lang.hitch(this, function(oldSearchRepository, newSearchRepository) {
				var textCriteria = this.searchDefinition.createTextSearchCriteria(), mappings = [], removeTextCriteria, reset = false, update = true;
				removeTextCriteria = textCriteria && textCriteria.text && oldSearchRepository.textSearchEnabled && !newSearchRepository.textSearchEnabled //
						&& !array.some(this._repositoriesList.resultSet.getItems(), function(otherSearchRepository) {
							return otherSearchRepository.id != oldSearchRepository.id && otherSearchRepository.textSearchEnabled;
						});
				if (!utils.compareSearchRepositories(oldSearchRepository, newSearchRepository)) {
					mappings = this._mappingsPane.findBySearchRepository(oldSearchRepository);
				} else if (oldSearchRepository.repository.capabilityQuery == "bothseparate" && oldSearchRepository.textSearchEnabled != newSearchRepository.textSearchEnabled) {
					mappings = array.filter(this._mappingsPane.findBySearchRepository(oldSearchRepository), "return this.searchDefinition.isAttributeDefinitionUsed(item.id)", this);
					if (mappings.length)
						removeTextCriteria = !newSearchRepository.textSearchEnabled;
					reset = true;
				}
				if (removeTextCriteria || mappings.length) {
					// Warn of dependent text criteria and/or mappings that will be removed or reset
					var msg;
					if (removeTextCriteria && mappings.length)
						msg = reset ? this.messages.unified_search_warn_update_repository_text_criteria_and_mappings_reset : this.messages.unified_search_warn_update_repository_text_criteria_and_mappings;
					else if (removeTextCriteria)
						msg = this.messages.unified_search_warn_update_repository_text_criteria;
					else
						msg = reset ? this.messages.unified_search_warn_update_repository_mappings_reset : this.messages.unified_search_warn_update_repository_mappings;
					if ((update = confirm(msg)) && mappings.length && !reset)
						this._removeMappings(mappings);
				}
				if (update && reset) {
					array.forEach(this._mappingsPane.findBySearchRepository(oldSearchRepository), function(mapping) {
						mapping.mappedAttributes = array.map(mapping.mappedAttributes, function(attrib) {
							if (utils.getAttributeRepository(attrib).id == oldSearchRepository.id) {
								if (newSearchRepository.textSearchEnabled) {
									if (!("_searchable" in attrib)) {
										attrib = attrib.clone();
										attrib._searchable = attrib.searchable;
									}
									attrib.searchable = false;
								} else {
									attrib.searchable = attrib._searchable;
								}
							}
							return attrib;
						});
						this._mappingsPane.update(mapping);
						this.searchDefinition.updateAttributeDefinition(mapping.toAttributeDefinition(), true);
					}, this);
				}
				return update;
			}), true));
			this.own(aspect.after(this._repositoriesList, "onRemove", lang.hitch(this, function(searchRepository) {
				var textCriteria = this.searchDefinition.createTextSearchCriteria(), mappings = this._mappingsPane.findBySearchRepository(searchRepository), remove = true;
				if ((textCriteria && textCriteria.text && searchRepository.textSearchEnabled && !array.some(this._repositoriesList.resultSet.getItems(), function(otherSearchRepository) {
					return otherSearchRepository.id != searchRepository.id && otherSearchRepository.textSearchEnabled;
				})) || mappings.length) {
					// Warn of dependent text criteria and/or mappings that will be removed
					if ((remove = confirm(this.messages.unified_search_warn_remove_repository)) && mappings.length)
						this._removeMappings(mappings);
				}
				return remove;
			}), true));
			this.own(aspect.after(this._repositoriesList, "onChange", lang.hitch(this, function() {
				var searchRepositories = this._repositoriesList.resultSet.getItems();
				this._mappingsPane.set("searchRepositories", [].concat(searchRepositories));
				this.searchDefinition.setTextSearchCriteria(array.some(searchRepositories, "return item.textSearchEnabled;", utils) ? this.searchDefinition.createTextSearchCriteria() || {
					text: ""
				} : null);
				this._updatePropertyOptions();
				this.searchDefinition.resultsDisplayOptions.setShowClassProperty(array.some(searchRepositories, function(searchRepository) {
					return !searchRepository.repository._isOnDemand() && !searchRepository.repository._isBox();
				}));
			})));

			this.own(aspect.after(this._mappingsPane, "onAdd", lang.hitch(this, function(mapping) {
				this.searchDefinition.addAttributeDefinition(mapping.toAttributeDefinition());
				return true;
			}), true));
			this.own(aspect.after(this._mappingsPane, "onUpdate", lang.hitch(this, function(oldMapping, newMapping) {
				var used = this.searchDefinition.isAttributeDefinitionUsed(newMapping.id), newAttrib = newMapping.toAttributeDefinition();
				if (used) {
					if (!newAttrib.searchable) {
						// Warn of dependent criteria that will be removed
						if (!confirm(this.messages.unified_search_warn_update_mapping_not_searchable))
							return false;
					} else {
						// Determine if the mapped attributes have changed (ignore non-searchable attributes since they don't affect the criteria)
						var diff = function(mappingA, mappingB) {
							return array.filter(Set.difference(mappingA.mappedAttributes, mappingB.mappedAttributes).toArray(), "return this.isAttributeSearchable(item);", utils);
						}, addedAttributes = diff(newMapping, oldMapping), removedAttributes = diff(oldMapping, newMapping);
						if (addedAttributes.length || removedAttributes.length) {
							// Warn of dependent criteria that will be reset
							var boxAttributes = array.filter(addedAttributes, "return item.searchable && this.getAttributeRepository(item)._isBox();", utils);
							if (used > 1 && boxAttributes.length) {
								if (confirm(string.substitute(this.messages.unified_search_warn_update_mapping_box_searchable, [
									boxAttributes[0].name,
									utils.getAttributeRepository(boxAttributes[0]).name
								]))) {
									this.searchDefinition.removeCriteria(newAttrib.id);
									return true;
								}
							} else if (confirm(this.messages.unified_search_warn_update_mapping)) {
								this.searchDefinition.updateAttributeDefinition(newAttrib, true);
								return true;
							}
							return false;
						}
					}
				}
				this.searchDefinition.updateAttributeDefinition(newAttrib);
				return true;
			}), true));
			this.own(aspect.after(this._mappingsPane, "onDelete", lang.hitch(this, function(mapping) {
				if (this.searchDefinition.isAttributeDefinitionUsed(mapping.id)) {
					// Warn of dependent criteria that will be removed
					if (!confirm(this.messages.unified_search_warn_remove_mapping))
						return false;
				}
				this.searchDefinition.removeAttributeDefinitons([
					mapping.id
				]);
				return true;
			}), true));

			this.own(aspect.after(this.searchDefinition, "setTextSearchCriteria", lang.hitch(this, this._updateTextSearchCriteria)));
			this.own(aspect.after(this.searchDefinition, "resolveResultsDisplay", lang.hitch(this, function(resultsDisplay) {
				if (!resultsDisplay.saved) { // auto-resolved
					var columns = resultsDisplay.columns;
					array.forEach(this._mappingsPane.attributeMappings, function(mapping) {
						if (array.indexOf(columns, mapping.id) == -1 && array.some(mapping.mappedAttributes, "return !this.isAttributeSearchable(item);", utils))
							columns.push(mapping.id);
					});
				}
				return resultsDisplay;
			})));
			this.own(aspect.after(this.searchDefinition, "onSearch", lang.hitch(this, function() {
				return this._validateCriteria(true);
			})));
			this.own(aspect.after(this.searchDefinition, "onReset", lang.hitch(this, function() {
				this._init();
			})));
			this.own(aspect.after(this.searchDefinition, "onSave", lang.hitch(this, function() {
				return this._validateCriteria(false);
			})));
			this.own(aspect.after(this.searchDefinition, "onSearchTemplatePrepared", lang.hitch(this, function(searchTemplate) {
				searchTemplate.searchRepositories = this._repositoriesList.resultSet.getItems();
				searchTemplate.attributeMappings = this._mappingsPane.attributeMappings;
			}), true));
			this.own(aspect.after(this.searchDefinition, "onSearchTemplateSaved", lang.hitch(this, function(searchTemplate) {
				this.searchTemplate = searchTemplate;
			}), true));

			// Place the focus on the selected tab (unfortunately there's no public access, so we cautiously reference _buttonWidget)
			if (this.selectedChildWidget._buttonWidget)
				this._focusNode(this.selectedChildWidget._buttonWidget.focusNode);
		},

		/**
		 * Overrides <code>ecm.widget.search._SearchBuilderMixin.setRepository</code> to initialize this widget.
		 */
		setRepository: function(repository, teamspace) {
			this.inherited(arguments);
			this._init();
		},

		_init: function() {
			var repositories = this.searchTemplate.searchRepositories || [], mappings = this.searchTemplate.attributeMappings || [];
			this._repositoriesList.setSearchRepositories([].concat(repositories));
			this._mappingsPane.set("searchRepositories", [].concat(repositories));
			this._mappingsPane.set("attributeMappings", [].concat(mappings));
			this._updateTextSearchCriteria();
			this._updatePropertyOptions();
		},

		_updateTextSearchCriteria: function() {
			var l = this._repositoriesList, searchRepositories = l.resultSet ? l.resultSet.getItems() : l.repositories, required = false, repositoryType, placeHolder, hoverHelp;
			array.forEach(searchRepositories, function(searchRepository) {
				var repository = searchRepository.repository;
				if ((repository._isBox() && !searchRepository.metadataTemplate) || (repository.capabilityQuery == "fulltextonly" || (repository.capabilityQuery == "bothseparate" && searchRepository.textSearchEnabled)))
					required = true;
				if (searchRepository.textSearchEnabled) {
					if (repositoryType === undefined)
						repositoryType = repository.type;
					else if (repository.type != repositoryType)
						repositoryType = "";
				}
			});
			if (repositoryType == "box") {
				placeHolder = this.messages.text_search_place_holder_box;
				hoverHelp = this.messages.text_search_hover_help_box;
			} else if (repositoryType == "cm" || repositoryType == "cmis") {
				placeHolder = this.messages.text_search_place_holder;
				hoverHelp = this.messages.text_search_hover_help_cm;
			} else if (repositoryType == "p8") {
				placeHolder = this.messages.text_search_place_holder;
				hoverHelp = this.messages.text_search_hover_help_p8_only_crs;
			} else {
				placeHolder = this.messages.text_search_place_holder_common;
				hoverHelp = this.messages.text_search_hover_help_common;
			}
			this.searchDefinition.setTextSearchCriteriaAttributes(required, placeHolder, hoverHelp);
			this.searchDefinition.textSearchCriteriaOperator = repositoryType == "box" || repositoryType == "p8" ? "any" : "all";
		},

		_updatePropertyOptions: function() {
			var l = this._repositoriesList, searchRepositories = l.resultSet ? l.resultSet.getItems() : l.searchRepositories;
			this.searchDefinition.setPropertyOptionsHidden(array.every(searchRepositories, "return item.repository._isBox();"));
		},

		_removeMappings: function(mappings) {
			this._mappingsPane.remove(mappings);
			this.searchDefinition.removeAttributeDefinitons(array.map(mappings, function(mapping) {
				return mapping.id;
			}));
		},

		_validateCriteria: function(searching) {
			var searchRepositories = this._repositoriesList.resultSet.getItems();
			var textCriteria = this.searchDefinition.createTextSearchCriteria();
			var criteria = this.searchDefinition.createSearchCriteria();
			var criteriaRepositories = utils.findCriteriaRepositories(criteria, this._mappingsPane.attributeMappings);
			var requiredRepositories = [];
			if (searching) {
				// Verify that every repository has at least one value in the criteria
				array.forEach(this._repositoriesList.resultSet.getItems(), function(searchRepository) {
					if ((!textCriteria || !textCriteria.text || !searchRepository.textSearchEnabled) && criteriaRepositories[searchRepository.id] !== null)
						requiredRepositories.push(searchRepository.name);
				}, this);
				if (requiredRepositories.length > 0) {
					this._showMessage(string.substitute(this.messages.unified_search_builder_insufficient_criteria_to_run, [
						"<ul><li>" + requiredRepositories.join("</li><li>") + "</li></ul>"
					]));
					return false;
				}
			} else { // saving
				// Verify that every repository is included in the criteria
				array.forEach(searchRepositories, function(searchRepository) {
					if ((!textCriteria || !searchRepository.textSearchEnabled) && !(searchRepository.id in criteriaRepositories))
						requiredRepositories.push(searchRepository.name);
				});
				if (requiredRepositories.length > 0) {
					this._showMessage(string.substitute(this.messages.unified_search_builder_insufficient_criteria_to_save, [
						"<ul><li>" + requiredRepositories.join("</li><li>") + "</li></ul>"
					]));
					return false;
				}
			}

			if (array.some(searchRepositories, function(searchRepository) {
				return searchRepository.repository._isOnDemand();
			})) {
				// Find OD attributes included in the criteria
				var attributesByRepository = {};
				for ( var i in criteria) {
					var mapping = this._mappingsPane.findById(criteria[i].id);
					array.forEach(mapping.mappedAttributes, function(attrib) {
						var repository = utils.getAttributeRepository(attrib);
						if (repository._isOnDemand()) {
							if (!attributesByRepository[repository.id])
								attributesByRepository[repository.id] = [];
							attributesByRepository[repository.id].push(attrib.id);
						}
					});
				}

				var retrieveSearchCriteria = function(search) {
					var deferred = new Deferred();
					search.retrieveSearchCriteria(function(searchCriteria) {
						deferred.resolve(search);
					}, null, null, false, false, false, false, function(response) {
						deferred.reject();
					});
					return deferred.promise;
				};
				var promises = [];
				for ( var id in attributesByRepository) {
					var searchRepository = this._repositoriesList.resultSet.getItemById(id);
					promises.push(retrieveSearchCriteria(searchRepository.searchTemplate));
				}

				var self = this;
				return all(promises).then(function(searches) {
					// Verify that all required OD attributes are included in the criteria
					var requiredCriteria = [];
					array.forEach(searches, function(search) {
						var repository = search.repository;
						array.forEach(search.searchCriteria, function(criterion) {
							if (criterion.valueRequired && array.indexOf(attributesByRepository[repository.id], criterion.id) < 0)
								requiredCriteria.push(string.substitute(self.messages.unified_search_property_repostory, [
									entities.encode(criterion.name),
									repository.name
								]));
						});
					});

					if (requiredCriteria.length > 0) {
						self._showMessage(string.substitute(self.messages.unified_search_missing_required_properities, [
							"<ul><li>" + requiredCriteria.join("</li><li>") + "</li></ul>"
						]));
					}

					return requiredCriteria.length == 0;
				});
			}

			// Verify that there's at at least one mapping to display in the results
			if (!array.some(this._mappingsPane.attributeMappings, "return !item.toAttributeDefinition()._unviewable;")) {
				this._showMessage(this.messages.unified_search_builder_no_mappings);
				return false;
			}

			return true;
		},

		_showMessage: function(message) {
			if (!this._messageDialog)
				this._messageDialog = new MessageDialog();
			this._messageDialog.showMessage(message);
		},

		/**
		 * Overrides <code>destroy</code> to destroy widgets created by this widget.
		 */
		destroy: function() {
			this.inherited(arguments);
			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}
		}
	});
});

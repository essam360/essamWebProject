/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/array",
	"dojo/_base/html",
	"dojo/dom",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	"dojo/dom-style",
	"dojo/aspect",
	"dojo/keys",
	"dojo/string",
	"dojo/query",
	"dojo/data/ItemFileReadStore",
	"dojo/store/Memory",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dijit/registry",
	"dijit/form/Button",
	"../FilteringSelect",
	"dijit/form/Select",
	"dijit/Tooltip",
	"idx/html",
	"../../LoggerMixin",
	"../../model/AttributeDefinition",
	"../../model/Desktop",
	"../../model/ContentClass",
	"../../model/ChildComponentSearchCriteria",
	"../../model/SearchConfiguration",
	"../../model/SearchCriterion",
	"../../model/UnifiedSearchTemplate",
	"../../model/_searchUtils",
	"./_HasOperatorSelect",
	"../HoverHelp",
	"../ValidationTextBox",
	"./TextSearchOptions",
	"../PropertyEditors",
	"../SinglePropertyEditorFactory",
	"../dialog/LoginDialog",
	"dojo/text!./templates/SearchForm.html"
], function(declare, //
lang, //
array, //
html, //
dom, //
domClass, //
domConstruct, //
domGeometry, //
domStyle, //
aspect, //
keys, //
string, //
query, //
ItemFileReadStore, //
Memory, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
registry, //
Button, //
FilteringSelect,//
Select, //
Tooltip, //
idxHtml, //
LoggerMixin, //
AttributeDefinition, //
Desktop, //
ContentClass, //
ChildComponentSearchCriteria, //
SearchConfiguration, //
SearchCriterion, //
UnifiedSearchTemplate, //
utils, //
_HasOperatorSelect, //
HoverHelp, //
ValidationTextBox, //
TextSearchOptions, //
PropertyEditors, //
SinglePropertyEditorFactory, //
LoginDialog, //
template) {

	/**
	 * @private Part of {@link ecm.widget.search.SearchTab} widget
	 * @name ecm.widget.search.SearchForm
	 * @class Provides a widget that is used to render a search form for a saved search. Users with the appropriate
	 *        access rights can use this widget to edit a saved search.
	 *        <p>
	 *        This widget can use a search form JSON definition to render either a search form or template.
	 *        specifications.
	 *        </p>
	 *        <p>
	 *        A search form must be specified to use this widget. If no search form is specified, the widget renders an
	 *        empty form with disabled buttons.
	 * @augments dijit._WidgetBase
	 */
	return declare("ecm.widget.search.SearchForm", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		_HasOperatorSelect,
		LoggerMixin
	], {
		/** @lends ecm.widget.search.SearchForm.prototype */
		templateString: template,

		criterionCount: 0,
		showFormButtons: true,

		constructor: function() {
			this.messages = ecm.messages;
			this._textboxes = [];
			this._numberboxes = [];
			this._selects = [];
			this._textSearchTexts = [];
			this._textSearchOptions = [];
			this._ands = [];
			this._operators = [];
			this._valueChangeSignals = [];
		},

		postCreate: function() {
			this.inherited(arguments);

			this.searchButtonTooltip.addTarget(this.searchButton.domNode);
			this.resetButtonTooltip.addTarget(this.resetButton.domNode);
			this.clearButtonTooltip.addTarget(this.clearButton.domNode);

			this.searchButton.set("disabled", true);

			if (!this.showFormButtons) {
				domClass.add(this.ecmSearchFormButtonArea, "dijitHidden");
			}
			this._factory = new SinglePropertyEditorFactory();
			this._propertyEditors = new PropertyEditors();
		},

		setTeamspace: function(teamspace) {
			this.teamspace = teamspace;
		},

		/**
		 * Retrieves the properties pane property editors.
		 * 
		 * @return A {@link ecm.widget.PropertyEditors} object.
		 */
		getPropertyEditors: function() {
			return this._propertyEditors;
		},

		getFields: function() {
			return this._propertyEditors.getFields();
		},

		/**
		 * Renders the given search template. If the search criteria has not been loaded, it retrieves the criteria of
		 * the specified version or the released version if one is not specified.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model.SearchTemplate}
		 * @param version
		 *            The version of the search to be retrieved, i.e., "current", "released", or "specific" (optional).
		 *            If not specified, the released version is retrieved.
		 */
		setSearchTemplate: function(searchTemplate, version) {
			var methodName = "setSearchTemplate";
			this.logEntry(methodName);
			this._searchTemplate = searchTemplate;
			this.repository = utils.getSearchInRepository(this._searchTemplate);

			if (this._searchTemplate.isInstanceOf && this._searchTemplate.isInstanceOf(UnifiedSearchTemplate)) {
				if (this._requestRepositoryConnectionSignal)
					this._requestRepositoryConnectionSignal.remove();
				this._requestRepositoryConnectionSignal = aspect.after(this._searchTemplate, "_onRequestRepositoryConnection", function(repository, request, onConnect) {
					var dialog = LoginDialog.getLoginDialog();
					dialog.setRepository(repository);
					dialog.show(false, request, onConnect);
				}, true);
			}

			var self = this;
			var callback = function() {
				if (self._searchTemplate.teamspaceMacroSearch && !self.teamspace) { // searching in a teamspace without a teamspace context
					ecm.model.desktop.addMessage(ecm.model.Message.createErrorMessage("search_unsupportedTeamspaceSearch_error", [
						idxHtml.escapeHTML(searchTemplate.name)
					]));
					self.onUnsupportedSearchTemplateSet(self._searchTemplate);
					return;
				}

				// Reset the repository in case the search template is configured to search in a repository other than its own
				self.repository = utils.getSearchInRepository(self._searchTemplate);

				// Retrieve dependent attributes if working with a single class
				var contentClass = self._getSearchContentClass();
				
				if (contentClass && contentClass.id != "$common") {
					self._contentClass = contentClass;
					contentClass.retrieveAttributeDefinitionsForSearches(function(attributeDefinitions, childDefinitions) {
						var values = utils.collectDependentAttributeValues(self._searchTemplate.searchCriteria);
						contentClass.retrieveDependentAttrDefs({
							attributes: values.attributes,
							context: {
								action: "search",
								searchTemplateId: self._searchTemplate ? self._searchTemplate.id : null,
								searchTemplateName: self._searchTemplate ? self._searchTemplate.name : null
							},
							childComponentValues: values.childComponents,
							callback: function(newAttributeDefinitions, newChildComponentDefinitions, newChildComponents) {
								self._updateDependentAttributes(newAttributeDefinitions, newChildComponents);
								self._initialize();
							},
							onError: function(response) {
								// Log and continue
								self.logError(methodName, "Failed to retrieve dependent attributes");
								self._initialize();
							}
						});
					});
				} else {
					self._initialize();
				}
			};
			if (!searchTemplate.searchCriteria) {
				this.connect(this._searchTemplate, "onUnsupportedSearchCriteriaRetrieved", this.onUnsupportedSearchTemplateSet);
				searchTemplate.retrieveSearchCriteria(callback, null, this.teamspace ? this.teamspace.id : null, false, false, false, version);
			} else {
				callback();
			}
			this.logExit(methodName);
		},

		_updateDependentAttributes: function(attributes, childComponents) {
			var self = this;
			array.forEach(attributes, function(attrib) {
				array.forEach(self._searchTemplate.searchCriteria, function(criterion) {
					if (attrib.updated && criterion.id == attrib.id) {
						if (attrib.updatedHasDependentAttributes)
							criterion.hasDependentAttributes = attrib.hasDependentAttributes;
						if (attrib.updatedReadOnly)
							criterion.readOnly = attrib.readOnly;
						if (attrib.updatedChoiceList) {
							// Update the criterion's choice list
							var oldChoiceList = criterion.choiceList;
							if (attrib.choiceList == "default") {
								// Reinstate the choice list defined by the class
								array.some(self._contentClass.attributeDefinitions, function(classAttrib) {
									if (classAttrib.id == criterion.id)
										criterion.choiceList = classAttrib.choiceList;
									return classAttrib.id == criterion.id;
								});
							} else {
								criterion.choiceList = attrib.choiceList;
							}

							// Clear values if the choice list was removed or any of the values aren't in the new choice list
							if ((oldChoiceList && !criterion.choiceList) || !AttributeDefinition.allValuesInChoiceList(criterion.choiceList, criterion.values)) {
								criterion._setValues([]);
							}
						}
					}
				});
			});

			array.forEach(childComponents, function(childComponent) {
				array.forEach(self._searchTemplate.searchCriteria, function(criterion) {
					if (criterion.id == childComponent.id) {
						array.forEach(criterion.searchCriteria, function(childCriterion) {
							var attrib = childComponent.attributeDefinitionsById[childCriterion.id];
							var oldChoiceList = childCriterion.choiceList;
							if (attrib && attrib.choiceList != "default") {
								// Update the criterion's choice list
								childCriterion.choiceList = attrib.choiceList;
							} else {
								// Reinstate the choice list defined by the class
								array.some(self._contentClass.childComponentDefinitions, function(classChild) {
									if (classChild.id == criterion.id) {
										array.some(classChild.attributeDefinitions, function(classAttrib) {
											if (classAttrib.id == childCriterion.id) {
												childCriterion.choiceList = classAttrib.choiceList;
												return true;
											}
										});
										return true;
									}
								});
							}

							// Clear values if the choice list was removed or any of the values aren't in the new choice list
							if ((oldChoiceList && !childCriterion.choiceList) || !AttributeDefinition.allValuesInChoiceList(childCriterion.choiceList, childCriterion.values)) {
								childCriterion.setValues([]);
							}

							// Update the criterion's name if the form is initializing for the first time
							// (for some reason child component labels are not being updated by EDS on an "initialExistingObject" request)
							if (self._searchTemplateBackup == null)
								childCriterion.name = attrib.name;
						});
					}
				});
			});
		},

		onUnsupportedSearchTemplateSet: function(template) {
		},

		_initialize: function() {
			this._searchTemplateBackup = this._searchTemplate.clone();
			this._openedChildComponents = {};
			this._renderCriteria();
			this._renderTextCriteria();
			this._enableSearch();
			this.onCriterionValidate();
			this.onSearchCriteriaLoad();
			if (this._searchTemplate.isInstanceOf && this._searchTemplate.isInstanceOf(UnifiedSearchTemplate) && array.some(this._propertyEditors.getFields(), function(field) {
				return !field.isHidden() && field.isReadOnly() && field.isValid && !field.isValid(true);
			})) { // unified search with invalid fixed values
				ecm.model.desktop.addMessage(ecm.model.Message.createErrorMessage("unified_search_invalid_fixed_value_error"));
				this.onUnsupportedSearchTemplateSet(this._searchTemplate);
			}
		},

		_renderCriteria: function() {
			this._destroyCriteriaFields();
			this.criterionCount = 0;
			array.forEach(this._searchTemplate.searchCriteria, function(criterion) {
				if (criterion.isInstanceOf && criterion.isInstanceOf(ChildComponentSearchCriteria)){
					var hideAllFields = false;
					if(criterion.searchCriteria){
						hideAllFields = array.every( criterion.searchCriteria, function( childCriterion ){
							if( childCriterion.hidden ){
								return true;
							}
						});
					}
					if( !hideAllFields ){
						this._createChildComponentField(criterion);
					}
				}
				else if (!criterion.hidden)
					this._createSearchField(criterion, this.searchFormInputArea, false, this._searchTemplate.operatorHidden);
			}, this);
		},

		_renderTextCriteria: function() {
			var textCriteria = this._searchTemplate.textSearchCriteria;
			this._destroyTextCriteriaFields();
			if (this._searchTemplate.isInstanceOf && this._searchTemplate.isInstanceOf(UnifiedSearchTemplate)) {
				if (textCriteria) {
					var field = this._createTextSearchField(textCriteria, false, null, true), required = false, repositoryType;
					array.forEach(this._searchTemplate.searchRepositories, function(searchRepository) {
						var repository = searchRepository.repository;
						if (repository._isBox() || (repository.capabilityQuery == "fulltextonly" || (repository.capabilityQuery == "bothseparate" && searchRepository.textSearchEnabled)))
							required = true;
						if (searchRepository.textSearchEnabled) {
							if (repositoryType === undefined)
								repositoryType = repository.type;
							else if (repository.type != repositoryType)
								repositoryType = "";
						}
					});
					if (required) {
						domClass[required ? "remove" : "add"](this.textSearchRequiredNode, "dijitHidden");
						field.set("required", true);
					}
					if (repositoryType == "box") {
						field.set("placeHolder", this.messages.text_search_place_holder_box);
						this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_box);
					} else if (repositoryType == "cm" || repositoryType == "cmis") {
						field.set("placeHolder", this.messages.text_search_place_holder);
						this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_cm);
					} else if (repositoryType == "p8") {
						field.set("placeHolder", this.messages.text_search_place_holder);
						this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_p8_only_crs);
					} else {
						field.set("placeHolder", this.messages.text_search_place_holder_common);
						this._textSearchHoverHelp.set("message", this.messages.text_search_hover_help_common);
					}
					domClass.remove(this._textSearchNode, "dijitHidden");
				}
			} else {
				var repo = this.repository;
				var cm = repo._isCM();
				var searchConfig = SearchConfiguration.getSearchConfiguration({
					repository: repo
				});
				var isCMTextSearchable = (cm && (searchConfig.isTextSearchTypeSupported(repo.textSearchType))) ? true : false;
				var hasTextInTextCriteria = (textCriteria instanceof Array) && textCriteria.length > 0;
				if (!cm || (isCMTextSearchable && hasTextInTextCriteria)) {
					if (hasTextInTextCriteria) {
						domClass.remove(this._textSearchNode, "dijitHidden");

						var p8 = repo._isP8();
						this._textSearchHoverHelp.set("message", p8 ? this.messages.text_search_hover_help_p8 : this.messages.text_search_hover_help_cm);

						var textCriteriaLayout = this._searchTemplate.textCriteriaLayout;
						var operatorHidden = this._searchTemplate.operatorHidden;
						var orMultiple = textCriteriaLayout && textCriteriaLayout.criteriaLayoutJoin == "or" && textCriteria.length > 1;
						var hasChildLayouts = textCriteriaLayout && (textCriteriaLayout.criteriaLayoutChildLayouts instanceof Array) && textCriteriaLayout.criteriaLayoutChildLayouts.length > 0;
						if (!this._searchTemplate.criteriaRelationshipHidden && (orMultiple || hasChildLayouts)) {
							var depth = this._getLayoutDepth(textCriteriaLayout);
							this._createTextSearchFields(textCriteria, textCriteriaLayout, this.textSearchFormInputArea, !p8 || operatorHidden, true, depth);
							this.resizeTextSearchFormInputArea();
						} else {
							array.forEach(textCriteria, function(criterion) {
								this._createTextSearchField(criterion, !this._searchTemplate.isNavigatorSavedSearch(), null, !p8 || operatorHidden);
							}, this);
						}
						if (!cm){
							this.resizeTextSearchOptions(textCriteria);
							if(textCriteria && textCriteria.length>0){
								array.forEach(textCriteria, function(criterion) {
									if(criterion.editProperty == "readonly"){
										this._textSearchOptions[0]._optionsLink.set("disabled", true);
										this._textSearchOptions[0]._optionsLink.set("keepSummaryOnDisabled",true);
									}
								}, this);	
							}
						}
							
					}
				}
			}
		},

		_createTextSearchFields: function(textCriteria, criteriaLayout, parentContainer, operatorHidden, odd, indentation) {
			if (!(criteriaLayout.criteriaLayoutChildLayouts instanceof Array) && !(criteriaLayout.criteriaLayoutItemIds instanceof Array))
				return;

			var container = domConstruct.create("div", {
				"class": odd ? "textSearchContainerOdd" : "textSearchContainerEven"
			}, parentContainer);
			if (criteriaLayout.criteriaLayoutChildLayouts instanceof Array) {
				array.forEach(criteriaLayout.criteriaLayoutChildLayouts, function(layout) {
					this._createTextSearchFields(textCriteria, layout, container, operatorHidden, !odd, indentation - 1);
				}, this);
			}
			if (criteriaLayout.criteriaLayoutItemIds instanceof Array) {
				array.forEach(criteriaLayout.criteriaLayoutItemIds, function(itemId) {
					var criterion = null;
					array.some(textCriteria, function(textCriterion) {
						var matched = textCriterion.itemId == itemId;
						if (matched)
							criterion = textCriterion;
						return matched;
					});
					if (criterion) {
						var labelNode;
						if (container.childNodes.length < 1) {
							var wholeLayout = this._searchTemplate.textCriteriaLayout;
							if (criteriaLayout != wholeLayout && !this._isFirstChildLayout(criteriaLayout, wholeLayout)) {
								var parentLayout = this._getParentLayout(criteriaLayout, this._searchTemplate.textCriteriaLayout);
								var containerLabelNode = domConstruct.create("div", {
									"class": "textSearchContainerJoinLabel",
									innerHTML: this.messages["search_criteria_layout_" + parentLayout.criteriaLayoutJoin]
								}, container, "before");
							}
							labelNode = domConstruct.create("span", {
								"class": "textSearchJoinLabel"
							});
						} else {
							labelNode = domConstruct.create("span", {
								"class": "textSearchJoinLabel",
								innerHTML: this.messages["search_criteria_layout_" + criteriaLayout.criteriaLayoutJoin]
							});
						}
						this._createTextSearchField(criterion, !this._searchTemplate.isNavigatorSavedSearch(), container, operatorHidden, labelNode, indentation);
					}
				}, this);
			}
		},

		_getLayoutDepth: function(criteriaLayout, depth) {
			if (!depth)
				depth = 0;

			if (criteriaLayout && (criteriaLayout.criteriaLayoutChildLayouts instanceof Array) && criteriaLayout.criteriaLayoutChildLayouts.length > 0) {
				var currentDepth = depth;
				array.forEach(criteriaLayout.criteriaLayoutChildLayouts, function(layout) {
					var newDepth = this._getLayoutDepth(layout, currentDepth + 1);
					if (newDepth > depth)
						depth = newDepth;
				}, this);
			}

			return depth;
		},

		_isFirstChildLayout: function(childLayout, criteriaLayout) {
			if (childLayout == criteriaLayout)
				return false;

			var first = false;
			if ((criteriaLayout.criteriaLayoutChildLayouts instanceof Array) && criteriaLayout.criteriaLayoutChildLayouts.length > 0) {
				var found = false;
				array.some(criteriaLayout.criteriaLayoutChildLayouts, function(layout, i) {
					found = childLayout == layout;
					first = found && i == 0;
					return found;
				});
				if (!found) {
					first = array.some(criteriaLayout.criteriaLayoutChildLayouts, function(layout) {
						return this._isFirstChildLayout(childLayout, layout);
					}, this);
				}
			}

			return first;
		},

		_getParentLayout: function(childLayout, criteriaLayout) {
			if (childLayout == criteriaLayout)
				return criteriaLayout;
			else if (childLayout.parentLayout)
				return childLayout.parentLayout;

			var parentLayout = null;
			if ((criteriaLayout.criteriaLayoutChildLayouts instanceof Array) && criteriaLayout.criteriaLayoutChildLayouts.length > 0) {
				var found = array.some(criteriaLayout.criteriaLayoutChildLayouts, function(layout) {
					return childLayout == layout;
				});
				if (found) {
					parentLayout = criteriaLayout;
					childLayout.parentLayout = parentLayout;
				} else {
					array.some(criteriaLayout.criteriaLayoutChildLayouts, function(layout) {
						parentLayout = this._getParentLayout(childLayout, layout);
						return parentLayout;
					}, this);
				}
			}

			return parentLayout;
		},

		_validateOperators: function() {
			var invalidWidget = null;
			for (var i = 0; i < this._operators.length; i++) {
				if (!this._operators[i].isValid()) {
					invalidWidget = this._operators[i];
					break;
				}
			}

			return invalidWidget;
		},
		
		_validateTextSearchBox: function() {
			var invalidWidget = null;
			for (var i = 0; i < this._textSearchTexts.length; i++) {
				if (!this._textSearchTexts[i].isValid()){
					invalidWidget = this._textSearchTexts[i];
					break;
				}
			}
			return invalidWidget;
		},

		validate: function() {
			var ed = this._validateOperators() || this._propertyEditors.validate();
			if (!ed) {
				var fields = this._textSearchTexts;
				for (var j = 0; j < fields.length; j++) {
					var readOnly = fields[j].isEditable ? !fields[j].isEditable() : fields[j].readOnly;
					var hidden = domStyle.get(fields[j].domNode, "display") == "none";
					this.logDebug("validate", "field invalid: " + fields[j]);
					if (!hidden && !readOnly && fields[j].isValid && !fields[j].isValid()) {
						if (!ed) {
							ed = fields[j];
							this.logDebug("validate", "field invalid: " + fields[j]);
							break;
						}
					}
				}
			}

			return ed;
		},

		/**
		 * Event fired when the search criteria is loaded and ready for consumption.
		 */
		onSearchCriteriaLoad: function() {
		},

		/**
		 * Returns the search template currently being displayed
		 * 
		 * @return Returns an instance of {@link ecm.model.SearchTemplate}
		 */
		getSearchTemplate: function() {
			return this._searchTemplate;
		},

		/**
		 * Internal function used to add a child component field to the search form.
		 * 
		 * @param childComponent
		 *            The {@link ecm.model.ChildComponentSearchCriteria} object to add.
		 */
		_createChildComponentField: function(childComponent) {
			this.logEntry("_createChildComponentField");
			var self = this;

			// Setup child component row
			var tr = domConstruct.create("tr", {
				"class": "ecmSearchFormFieldArea"
			}, this.searchFormInputArea);
			var childTd = domConstruct.create("td", {
				"class": "childCompCell",
				"colspan": "3"
			}, tr);
			var childCompDiv = domConstruct.create("div", {
				"class": "dijitInline childCompContainer"
			}, childTd);

			// Create an area for child component fields
			var fieldsDiv = domConstruct.create("div", {
				"class": "childCompFieldArea"
			});

			// Setup Child component name
			var nameDiv = domConstruct.create("div", {
				"class": "dijitOpen"
			}, childCompDiv);
			var arrowSpan = domConstruct.create("img", {
				"class": "dijitArrowNode",
				"src": "dojo/resources/blank.gif",
				onclick: function(evt) {
					self._toggleChildComp(this.parentNode, fieldsDiv, childComponent.id);
				}
			}, nameDiv);
			domConstruct.create("span", {
				"class": "childCompName",
				"innerHTML": idxHtml.escapeHTML(childComponent.name),
				onclick: function(evt) {
					self._toggleChildComp(this.parentNode, fieldsDiv, childComponent.id);
				}
			}, nameDiv);

			// Setup child component fields
			childCompDiv.appendChild(fieldsDiv);
			var fieldsTable = domConstruct.create("table", {
				"class": "ecmSearchFormInputArea"
			}, fieldsDiv);

			var searchCriteria = childComponent.searchCriteria;
			var collapse = !this._openedChildComponents[childComponent.id]; // collapse by default
			array.forEach(searchCriteria, function(criterion) {
				if( !criterion.hidden ){
					self._createSearchField(criterion, fieldsTable, true);
				}

				// Don't collapse it if there are values and the form is being initialized
				if (this._openedChildComponents[childComponent.id] == null && (criterion.selectedOperator == "NULL" || criterion.selectedOperator == "NOTNULL" || (criterion.value != null && criterion.value.length > 0)))
					collapse = false;
			}, this);

			if (collapse)
				this._toggleChildComp(nameDiv, fieldsDiv, childComponent.id);
			else
				this._openedChildComponents[childComponent.id] = true;

			this.logExit("_createChildComponentField");
		},

		_toggleChildComp: function(parent, fieldsDiv, childComponentId) {
			if (parent.className == "dijitOpen") {
				parent.className = "dijitClosed";
				fieldsDiv.style.display = "none";
				this._openedChildComponents[childComponentId] = false;
			} else {
				parent.className = "dijitOpen";
				fieldsDiv.style.display = "block";
				this._openedChildComponents[childComponentId] = true;
			}
		},

		/**
		 * Internal function used to add a field to the search form.
		 * 
		 * @param criterion
		 *            The {@link ecm.model.SearchCriterion} object to add.
		 */
		_createSearchField: function(criterion, tablename, isChildCriterion, operatorHidden) {
			try {
				// This unique id is used throughout this field
				//this.criterionUID= dijit.getUniqueId("ecm.widget.SearchCriterion");   // although the SearchCriterion widget doesn't exist, using it here to get reasonable unique dijit id's
				var criterionUID = this.id + "_ecm.widget.SearchCriterian" + "_" + this.criterionCount++;
				// Create a new search field area
				var tr = domConstruct.create("tr", {
					"class": "ecmSearchFormFieldArea"
				}, tablename);
				var labelTd = domConstruct.create("td", {
					"class": "fieldCell"
				}, tr);
				// change
				if (criterion.valueRequired) {
					domConstruct.create("span", {
						"class": "required",
						innerHTML: "*"
					}, labelTd);
				}
				var label = domConstruct.create("label", {
					"for": criterionUID,
					innerHTML: string.substitute(this.messages.append_colon, [
						idxHtml.escapeHTML(criterion.name)
					])
				}, labelTd);

				var hoverHelp = this._createHoverHelp(criterion);
				labelTd.appendChild(hoverHelp.domNode);

				// Create the second column for all non-text fields, which includes the search
				// operation selection.
				var operatorTd = domConstruct.create("td", {
					"class": operatorHidden ? "dijitHidden" : "fieldCell"
				}, tr);
				var xtSearch = this.repository && this.repository._isP8() && !this._searchTemplate.isNavigatorSavedSearch();
				var operator = criterion.selectedOperator;
				var operatorReadOnly = criterion.readOnly || (xtSearch && operator != "LIKE" && operator != "STARTSWITH" && operator != "ENDSWITH");
				var options;
				if (xtSearch && !operatorReadOnly) { // editable xt criterion with like operator
					// Allow selection of like operator variants (to mimic Workplace XT behavior)
					options = array.map([
						"STARTSWITH",
						"ENDSWITH",
						"LIKE"
					], function(op) {
						return {
							value: op,
							label: ecm.messages["operator_" + op]
						};
					});
				} else {
					// Don't filter operators for XT searches
					options = utils.getOperatorSelectOptions(criterion, xtSearch);
				}
				var opStore = new ItemFileReadStore({
					data: {
						identifier: "value",
						label: "label",
						items: options
					}
				});

				var args = {
					id: criterionUID + "Operator",
					baseClass: "dijitTextBox dijitComboBox dijitValidationTextBox operatorSelect",
					store: opStore,
					searchAttr: "label",
					readOnly: operatorReadOnly,
					title: this.messages.select_operator,
					invalidMessage: ecm.messages.property_pulldown_invalid
				};
				if (!ecm.model.desktop.useStartsWithChoiceListFilter) {
					args.queryExpr = "*${0}*"; // "contains" search
					args.autoComplete = false; // useless with "contains" search
				}
				var operatorSelect = new FilteringSelect(args);
				this._operators.push(operatorSelect);

				// Select the first operator in the list if the current one is not an option
				if (!array.some(options, "return item.value == '" + operator + "';"))
					operator = options.length ? options[0].value : null;
				operatorSelect.set("value", operator);

				this.connect(operatorSelect, "onChange", function(value) {
					criterion.selectedOperator = value;
					this.onChange();
				});
				this.connect(operatorSelect, "validate", function() {
					this.onCriterionValidate();
				});
				var width = this._getOperatorSelectWidth();
				if (width) {
					domGeometry.setMarginBox(operatorSelect.domNode, {
						w: width
					});
				}
				operatorTd.appendChild(operatorSelect.domNode);

				var valueTd = domConstruct.create("td", {
					"class": "fieldCell fieldValueCell"
				}, tr);
				this._createValueField(criterionUID, criterion, operatorSelect, valueTd, hoverHelp, function(field, field2) {
					if (!options.length && operator != "BETWEEN" && operator != "NOTBETWEEN") { // no operators
						// Hide the second value field if present
						if (field2)
							domStyle.set(field2.domNode, "display", "none");

						// Hide the "and" node if present
						var node = dom.byId(criterionUID + "_and");
						if (node)
							domStyle.set(node, "display", "none");

						// Reset the container's class
						html.removeClass(valueTd, "multiValue");
					}
				});

				// Add handling for dependent attributes if working with a single class and a criterion that is neither hidden nor read-only
				var contentClass = this._getSearchContentClass();
				if (contentClass && contentClass.id != "$common" && !criterion.hidden && !criterion.readOnly) {
					var self = this;
					this._valueChangeSignals.push(aspect.after(criterion, "onValueChange", function() {
						if (!criterion.hasDependentAttributes || self._updatingDependentAttributesField) // no dependents or update in progress
							return;

						// Guard against reentering while an update is in progress
						self._updatingDependentAttributesField = registry.byId(criterionUID);

						// Handle restoring focus when rendering is complete
						self._displayStatusDialogSignal = aspect.after(Desktop, "onDisplayStatusDialog", function(statusDialog) {
							// Temporarily disable refocus since the field that currently has focus will be replaced
							if (self._displayStatusDialogSignal) {
								self._displayStatusDialogSignal.remove();
								delete self._displayStatusDialogSignal;
							}
							self._statusDialogRefocus = statusDialog.refocus;
							statusDialog.refocus = false;

							var hideStatusDialogSignal = self.connect(Desktop, "onHideStatusDialog", function(statusDialog) {
								hideStatusDialogSignal.remove();
								setTimeout(function() {
									// Reset refocus
									statusDialog.refocus = self._statusDialogRefocus;
									delete self._statusDialogRefocus;

									// Restore focus
									var field = registry.byId(criterionUID);
									if (field)
										field.focus();
								}, 100);
							}, true);
						}, true);

						// Force a retrieval since we know we are working with criteria that have dependents, plus we can't rely on
						// the ContentClass.hasDependentAttributes function since there may be an OD attribute that isn't displayed
						// (i.e., a field with a hit list of 0) and thus, not part of the content class which may result in a false
						// negative that would prevent the request from being sent
						var values = utils.collectDependentAttributeValues(self._searchTemplate.searchCriteria, criterion);
						self._retrieveDependentAttrDefsRequest = contentClass.retrieveDependentAttrDefs({
							alwaysRetrieve: true,
							attributes: values.attributes,
							context: {
								action: "search",
								searchTemplateId: self._searchTemplate ? self._searchTemplate.id : null,
								searchTemplateName: self._searchTemplate ? self._searchTemplate.name : null
							},
							childComponentValues: values.childComponents,
							callback: function(newAttributeDefinitions, newChildComponentDefinitions, newChildComponents) {
								var refocus = false;
								if (self._displayStatusDialogSignal) { // status dialog wasn't displayed
									refocus = true;
									self._displayStatusDialogSignal.remove();
									delete self._displayStatusDialogSignal;
								}

								// Update and re-render criteria
								self._updateDependentAttributes(newAttributeDefinitions, newChildComponents);
								self._renderCriteria();

								if (refocus) {
									// Restore focus
									setTimeout(function() {
										var field = registry.byId(criterionUID);
										if (field)
											field.focus();
									}, 100);
								}

								self._onFinishUpdatingDependentAttributes();
							},
							onError: function(response) {
								self._onFinishUpdatingDependentAttributes();
								if (self._displayStatusDialogSignal) {
									self._displayStatusDialogSignal.remove();
									delete self._displayStatusDialogSignal;
								}
							}
						});
					}));
				}
			} catch (e) {
				this.logDebug("_createSearchField", "Error creating field [" + criterion + "]", e.message);
			}
		},

		_onFinishUpdatingDependentAttributes: function() {
			delete this._updatingDependentAttributesField;
			if (this._deferredCallback) {
				// Execute the callback after a small delay to ensure that dependent updates have been applied
				setTimeout(lang.hitch(this, function() {
					this._deferredCallback();
					delete this._deferredCallback;
				}), 250);
			}
		},
		
		/**
		 * Internal function used to add a text search field to the search form.
		 * 
		 * @param criterion
		 *            An instance of {@link ecm.model.SearchCriterion}
		 * @param hideLink
		 */
		_createTextSearchField: function(criterion, hideLink, container, hideOptions, labelNode, indentation) {
			if (!container)
				container = this.textSearchFormInputArea;

			var i = this._textSearchTexts.length;
			var required = criterion.editProperty == SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED;
			this._textSearchTexts[i] = new ValidationTextBox({
				id: this.id + "textSearchTexts" + i,
				name: this.id + "textSearchTexts" + i,
				"class": "textSearchText",
				value: criterion.text || null,
				placeHolder: this.messages.text_search_place_holder,
				readOnly: criterion.editProperty == SearchCriterion.prototype.EDIT_PROPERTY.READONLY,
				required: required
			});
			this._textSearchTexts[i].setHoverHelp(this._textSearchHoverHelp);
			this.connect(this._textSearchTexts[i], "onKeyDown", "onKeyDown");
			this._textSearchTexts[i].watch("state", lang.hitch(this, this.onTextCriterionValidate));

			var repo = this.repository || this._searchTemplate.repository; // TODO revise when we support text options in CRS
			this._textSearchOptions[i] = new TextSearchOptions({
				id: this.id + "textSearchOptions" + i,
				"class": hideOptions ? "dijitHidden" : "optionsLink",
				hideLink: hideLink
			});
			this._textSearchOptions[i].setRepository(repo);
			this._textSearchOptions[i].setSelectedOptions(criterion, true); //Pass true to hide the editable selector when in open mode.
			this._textSearchOptions[i].startup();

			var cascade = repo.textSearchType == SearchConfiguration.prototype.TEXT_SEARCH_TYPE.CASCADE;
			this._updateTextSearchText(this._textSearchTexts[i], this._textSearchOptions[i], cascade, labelNode ? labelNode.textContent : "", hideOptions, criterion);
			this.connect(this._textSearchOptions[i], "onChange", function() {
				this._updateTextSearchText(this._textSearchTexts[i], this._textSearchOptions[i], cascade, labelNode ? labelNode.textContent : "", hideOptions, criterion);
				this.resizeTextSearchOptions();
				this.onChange();
			});
			if (cascade)
				this._textSearchOptions[i].toggleProximityHoverHelp(true);

			var div = domConstruct.create("div", {
				"class": "textSearchCriteria"
			}, container);
			if (criterion.editProperty == SearchCriterion.prototype.EDIT_PROPERTY.HIDDEN)
				domClass.add(div, "dijitHidden");
			if (indentation > 0) {
				for (var depth = 0; depth < indentation; depth++) {
					domConstruct.create("span", {
						"class": "textSearchCriteriaIndentation",
						innerHTML: "&nbsp;"
					}, div);
				}
			}
			if (labelNode)
				div.appendChild(labelNode);
			div.appendChild(this._textSearchTexts[i].domNode);
			if (required) {
				domClass.remove(this.textSearchRequiredNode, "dijitHidden");
			}
			div.appendChild(this._textSearchOptions[i].domNode);

			return this._textSearchTexts[i];
		},

		_updateTextSearchText: function(textSearchText, textSearchOption, cascade, label, optionHidden, criterion) {
			var placeHolder = this.messages.text_search_place_holder;
			if (cascade && textSearchOption.isProximitySelected())
				placeHolder = this.messages.text_search_place_holder_cascade_proximity;
			textSearchText.set("placeHolder", placeHolder);

			var title = this.messages.text_search_label;
			if (label)
				title = label + " " + title;
			if (!optionHidden)
				title += " " + textSearchOption.getSummary();
			textSearchText.set("title", title);
		},

		_getDataFormat: function(criterion) {
			var methodName = "_getDataFormat";
			this.logEntry(methodName, "criterion - type: " + criterion.dataType);
			var format = criterion.format;

			if (utils.inputTimestampAsDate(criterion))
				format = ecm.model.desktop.valueFormatter.getDefaultFormat("xs:date");

			this.logExit(methodName, "criterion - format: " + format);
			return format;
		},

		_createValueField: function(criterionUID, criterion, operatorSelect, containerNode, hoverHelp, callback) {
			var methodName = "_createValueField";
			// these are common meta data across the properties  and are going to be present on all the dijits
			var self = this;
			criterion.timestamp = (new Date()).getTime();

			var dataType = utils.getAttributeInputDataType(criterion, true);
			var cardinality = criterion.cardinality;
			var operator = null;
			var multiValued = false;
			var trimStrings = !!ecm.model.desktop.trimSearchStrings;
			if (operatorSelect) {
				var operator = operatorSelect.get("value");
				if (operator == "LIKE" || operator == "NOTLIKE" || operator == "STARTSWITH" || operator == "ENDSWITH" || operator == "CONTAINS") {
					cardinality = "SINGLE"; // Ensure that a single value input is used even if the criterion has multiple cardinality
				} else if (operator == "IN" || operator == "INANY" || operator == "NOTIN") {
					cardinality = "LIST";
					multiValued = true;
				}
				if (operator == "CONTAINS")
					trimStrings = true;
			}

			var cl = criterion.getChoiceList();
			var options = criterion.getAllowedValuesSelectOptions();
			var kwArgs = {
				forSearch: true,
				dataType: dataType,
				dataFormat: this._getDataFormat(criterion),
				minLength: criterion.minLength,
				maxLength: criterion.maxLength,
				minValue: criterion.minValue,
				maxValue: criterion.maxValue,
				readOnly: criterion.readOnly || criterion.valueFixed,
				values: criterion.valueFixed ? this._resolveFixedValues(criterion, operator) : criterion.values,
				valueTimeZoneOffset: criterion.valueTimeZoneOffset,
				minValueTimeZoneOffset: criterion.minValueTimeZoneOffset,
				maxValueTimeZoneOffset: criterion.maxValueTimeZoneOffset,
				required: criterion.valueRequired,
				uniqueValues: true,
				id: criterionUID,
				name: criterion.id,
				description: criterion.description,
				cardinality: cardinality,
				choiceList: cl ? lang.clone(cl) : null,
				choiceListNested: criterion.isChoiceListNested(),
				valueOptions: options ? lang.clone(options) : null,
				label: criterion.name,
				regularExpr: this._getRegularExpressionForCriterion(criterion),
				promptText: this._getPromptText(criterion),
				invalidMessage: criterion.formatDescription && lang.replace(this.messages.property_invalid_with_format, [ criterion.formatDescription ]),
				propertyEditor: criterion.propertyEditor,
				repository: utils.getAttributeRepository(criterion),
				repositoryType: criterion.repositoryType,
				noTrimStrings: !trimStrings,
				propertyPaneContainer: this
			};

			// Create fields asynchronously to support custom property editors
			var afterCreate = lang.hitch(this, function(field, field2) {
				field._multiValued = multiValued;
				if (operator == "NULL" || operator == "NOTNULL")
					this._setValueFieldDisplay(criterionUID, "none");
				if (lang.isFunction(callback))
					callback(field, field2);
			});
			this._createField(kwArgs, hoverHelp, containerNode, lang.hitch(this, function(field) {
				if (!field.supportsPairedSearchFields()) {
					this.logDebug(methodName, "create one field connect to 'onChange': " + criterion);
					html.removeClass(containerNode, "multiValue");
					if (operatorSelect._onChangeSignal)
						operatorSelect._onChangeSignal.remove();
					operatorSelect._onChangeSignal = aspect.after(operatorSelect, "onChange", lang.hitch(this, function() {
						this._selectionChange(criterionUID, criterion, operatorSelect, containerNode, null, hoverHelp);
					}));
					operatorSelect.own(operatorSelect._onChangeSignal);

					var callSetValueFunction = lang.hitch(this, "_callSetValueWithOneFieldValue", field, criterion);
					this.connect(field, "onChange", callSetValueFunction);
					this.connect(field, "onBlur", callSetValueFunction);

					afterCreate(field);
				} else { // create and node & 2nd field.  Then determine if 2nd field & and node should be visible.
					var and = this._createAndNode(criterionUID + "_and", containerNode);
					kwArgs.id = criterionUID + "_2";
					if (cl)
						kwArgs.cl = lang.clone(cl);
					if (options)
						kwArgs.valueOptions = lang.clone(options);
					kwArgs.values = (kwArgs.values instanceof Array) && kwArgs.values.length > 1 ? [
						kwArgs.values[1]
					] : null;
					kwArgs.valueTimeZoneOffset = (kwArgs.valueTimeZoneOffset instanceof Array) && kwArgs.valueTimeZoneOffset.length > 1 ? kwArgs.valueTimeZoneOffset[1] : null;
					this._createField(kwArgs, hoverHelp, containerNode, lang.hitch(this, function(field2) {
						var callSetValueFunction = lang.hitch(this, "_callSetValueWithTwoFieldValues", field, field2, criterion, !kwArgs.required);
						this.connect(field, "onChange", callSetValueFunction);
						this.connect(field2, "onChange", callSetValueFunction);
						this.connect(field, "onBlur", callSetValueFunction);
						this.connect(field2, "onBlur", callSetValueFunction);

						if (!kwArgs.required) {
							var callCheckRequiredFunction = lang.hitch(this, "_checkRequired", field, field2);
							this.connect(field.focusNode || field.domNode, "onkeyup", callCheckRequiredFunction);
							this.connect(field2.focusNode || field2.domNode, "onkeyup", callCheckRequiredFunction);
						}

						if (operator == "BETWEEN" || operator == "NOTBETWEEN") {
							html.addClass(containerNode, "multiValue");
							domStyle.set(field2.domNode, "display", "");
						} else {
							html.removeClass(containerNode, "multiValue");
							domStyle.set(field2.domNode, "display", "none");
						}
						this._showHideAndNode(field2, and);

						if (operatorSelect._onChangeSignal)
							operatorSelect._onChangeSignal.remove();
						operatorSelect._onChangeSignal = aspect.after(operatorSelect, "onChange", lang.hitch(this, function() {
							this._selectionChange(criterionUID, criterion, operatorSelect, containerNode, field2, hoverHelp);
							this._showHideAndNode(field2, and);
							this.onCriterionValidate();
						}));
						operatorSelect.own(operatorSelect._onChangeSignal);

						afterCreate(field, field2);
					}));
				}
			}));
		},

		_createField: function(kwArgs, hoverHelp, containerNode, callback) {
			var afterCreate = lang.hitch(this, function(field) {
				if ("alwaysValidate" in field) {
					field.alwaysValidate = true;
				}
				if (field.setHoverHelp) {
					field.setHoverHelp(hoverHelp);
				}
				this._propertyEditors.appendField(field);
				containerNode.appendChild(field.domNode);

				this.connect(field.focusNode || field.domNode, "onkeydown", "onKeyDown");
				this.connect(field, "onChange", "onChange");
				this.connect(field, "validate", lang.hitch(this, function() {
					this.onCriterionValidate();
				}));

				callback(field);
			});

			// Use a callback function for custom property editors only; create all other fields synchronously
			// to maintain backwards compatibility, i.e., a plugin that overwrites the createSinglePropertyEditor
			// prototype might not support callbacks
			if (kwArgs.propertyEditor && kwArgs.propertyEditor.length > 0)
				this._factory.createSinglePropertyEditor(kwArgs, afterCreate);
			else
				afterCreate(this._factory.createSinglePropertyEditor(kwArgs));
		},

		_createAndNode: function(id, containerNode) {
			var and = domConstruct.create("span", {
				id: id,
				"class": "fieldAnd",
				innerHTML: ecm.messages.property_and
			}, containerNode);
			this._ands.push(and);
			return and;
		},

		_showHideAndNode: function(field2, and) {
			if (field2.domNode) { // if 2nd field is hidden/shown, hide/show the and domNode
				var hidden = domStyle.get(field2.domNode, "display") == "none";
				domStyle.set(and, "display", hidden ? "none" : "inline");
			}
		},

		_callSetValueWithOneFieldValue: function(field, targ) {
			var methodName = "_callSetValueWithOneFieldValue";
			if (!field._isDestroying) { // ignore onChange called when destroying the field
				this.logDebug(methodName, "create one field connected to 'onChange': " + field);
				if ((targ && targ.setValues && field && field.getValueAsArray) && (!field.isValid || field.isValid())) { // avoid updating value and triggering dependent attribute logic for invalid values
					this.logDebug(methodName, "field values: " + field.getValueAsArray());
					targ.setValues(field.getValueAsArray());
				}
			}
		},

		_callSetValueWithTwoFieldValues: function(field1, field2, targ, checkRequired) {
			var methodName = "_callSetValueWithTwoFieldValues";
			if (!field1._isDestroying && !field2._isDestroying) { // ignore onChange called when destroying the field
				if (targ && targ.setValues) {
					var v1 = field1.getValue() == null ? "" : field1.getValue() + "";
					var v2 = field2.getValue() == null ? "" : field2.getValue() + "";
					this.logDebug(methodName, "set field1 connected to 'onChange': " + field1 + ", values: " + v1);
					this.logDebug(methodName, "set field2 connected to 'onChange': " + field2 + ", values: " + v2);
					targ.setValues([
						v1,
						v2
					]);

					if (checkRequired)
						this._checkRequired(field1, field2);
				}
			}
		},

		_checkRequired: function(field1, field2) { // Set up the dependency rules for range input
			var v1 = field1.getValue() == null ? "" : field1.getValue() + "";
			var v2 = field2.getValue() == null ? "" : field2.getValue() + "";

			field1._hasBeenBlurred = true; // instantaneous error display
			field1.set("required", domStyle.get(field2.domNode, "display") != "none" ? new Boolean(v2).valueOf() : false);
			field2._hasBeenBlurred = true; // instantaneous error display
			field2.set("required", new Boolean(v1).valueOf());
		},

		_createHoverHelp: function(criterion) {
			var hoverHelp = new HoverHelp({
				message: this._getPromptText(criterion)
			});
			hoverHelp.startup();
			if (!this._hoverHelpArray) {
				this._hoverHelpArray = [];
			}
			this._hoverHelpArray.push(hoverHelp);
			return hoverHelp;
		},

		_getPromptText: function(criterion) {
			var type = utils.normalizeDataType(criterion), format = this._getDataFormat(criterion), repository = utils.getAttributeRepository(criterion);
			return this._factory.getPromptText({
				dataType: type,
				dataFormat: format,
				description: criterion.description || (repository && repository._isCM() ? criterion.name : null),
				minLength: criterion.minLength,
				maxLength: criterion.maxLength,
				minMaxValues: this._factory.getMinMax(criterion.minValue, criterion.maxValue, type, format),
				cardinality: criterion.cardinality,
				choiceList: criterion.getChoiceList(),
				valueOptions: criterion.getAllowedValuesSelectOptions()
			});
		},

		onCriterionValidate: function() {
			var valid = !this._validateOperators();
			if (valid) {
				valid = this._propertyEditors.validate() || this._validateTextSearchBox();
				this.logDebug("onCriterionValidate", "property editor validate: " + valid);
			}

			if (valid == null)
				valid = false;
			this.searchButton.set("disabled", valid);
		},

		onTextCriterionValidate: function(attr, oldVal, newVal) {
			var invalid = newVal == "Error" || this._validateTextSearchBox();
			if (!invalid) {
				invalid = !this._validateOperators();
				if (invalid){
					invalid = this._propertyEditors.validate();
					this.logDebug("onCriterionValidate", "property editor validate: " + invalid);
				}
				if (invalid == null)
				invalid = false;
			}
			this.searchButton.set("disabled", invalid);
		},

		onChange: function() {
		},

		onKeyDown: function(e) {
			if (e.keyCode === keys.ENTER && !this.searchButton.get("disabled")) {
				// force onBlur() to update the value
				var w = registry.getEnclosingWidget(e.target);
				if (w && w.onBlur) {
					w.onBlur();
				}
				if (!this.showFormButtons && this.searchFunction && (typeof this.searchFunction == "function")) {
					this.searchFunction.apply(this, arguments);
				} else {
					this._search();
				}
			}
		},

		_setResultsDisplay: function(resultsDisplay) {
			this._resultsDisplay = resultsDisplay;
		},

		_createTextSearchCriteria: function() {
			var textSearchCriteria = null;
			if (this._searchTemplate.isInstanceOf && this._searchTemplate.isInstanceOf(UnifiedSearchTemplate)) {
				textSearchCriteria = this._searchTemplate.textSearchCriteria || {};
				if (this._textSearchTexts.length)
					textSearchCriteria.text = this._textSearchTexts[0].get("value");
			} else {
				textSearchCriteria = this._searchTemplate.textSearchCriteria || [];
				for (var i = 0; i < this._textSearchTexts.length; i++) {
					if (!textSearchCriteria[i])
						textSearchCriteria[i] = {};
					var text = this._textSearchTexts[i].get("value");
					textSearchCriteria[i].text = text;
					lang.mixin(textSearchCriteria[i], this._textSearchOptions[i].getSelectedOptions());
				}
			}

			return textSearchCriteria;
		},

		/**
		 * Internal function for when the search button is clicked. Builds a search string and submits a request to run
		 * the search.
		 */
		_search: function(callback) {
			if (this._updatingDependentAttributesField && !this._deferredCallback) {
				// Defer the search until dependent attributes are updated
				this._deferredCallback = lang.hitch(this, "_search", callback);
				return;
			}
			
			var invalidEditor = this.validate();
			if (invalidEditor) {
				if (invalidEditor.focus)
					invalidEditor.focus();
			} else {
				this.searchButton.set("disabled", true);
				this._searchTemplate.textSearchCriteria = this._createTextSearchCriteria();
				this.onSearchTemplatePrepared(this._searchTemplate);

				var request = this._searchTemplate.search(lang.hitch(this, function(results) {
					this.onSearchCompleted(results);
					if (typeof callback == "function")
						callback(results);
				}), null, null, this.teamspace);
				aspect.after(request, "onRequestCompleted", lang.hitch(this, function() {
					this.searchButton.set("disabled", false);
				}));
			}
		},

		isTextSearchCriteriaDefined: function() {
			var defined = array.some(this._textSearchTexts, function(textSearchText) {
				return textSearchText.get("value");
			});
			if (!defined) {
				defined = array.some(this._searchTemplate.searchCriteria, function(criterion) {
					return criterion.selectedOperator == "CONTAINS" && criterion.value;
				});
			}

			return defined;
		},

		/**
		 * Event fired when the search is prepared for running.
		 * 
		 * @param searchTemplate
		 *            An instance of {@link ecm.model._SearchTemplateBase}
		 * @since 2.0.3.3
		 */
		onSearchTemplatePrepared: function(searchTemplate) {
		},

		onSearchCompleted: function(results) {
			// summary:
			//	event function called when a search completes.
		},

		/**
		 * Internal function for when the clear button is clicked. Clears the search form.
		 */
		_clear: function() {
			var fields = this._propertyEditors.getFields();
			for (var i = 0; i < fields.length; i++) {
				if (fields[i].reset) {
					fields[i].reset();
				}
			}

			/*
			for (var k=0 ; k < this._selects.length ; k++) {
				var select = this._selects[k];
				if (select && select.reset) {
					select.reset();
				}
			}
			*/
		},

		/**
		 * Internal function for when the reset button is clicked. Resets the search form to it's default values.
		 */
		_reset: function() {
			if (this._updatingDependentAttributesField && !this._deferredCallback) {
				// Defer resetting until dependent attributes are updated
				this._deferredCallback = lang.hitch(this, "_reset");
				return;
			}
			
			if (this._searchTemplateBackup)
				this.setSearchTemplate(this._searchTemplateBackup);
		},

		/**
		 * Internal function that determines if the search button should be enabled.
		 */
		_enableSearch: function() {
			var disable = false;

			for (var i = 0; i < this._textboxes.length; i++) {
				var textbox = this._textboxes[i];
				if (this._isRequired(textbox) && (textbox.get("value") == null || textbox.get("value") == ''))
					disable = true;
			}

			for (var j = 0; j < this._numberboxes.length; j++) {
				var numberbox = this._numberboxes[j];
				if (numberbox.get("value") != null && numberbox.isValid())
					disable = false;
			}

			if (!disable) {
				var textCriteria = this._searchTemplate.textSearchCriteria;
				if (textCriteria instanceof Array) {
					for (var i = 0; i < this._textSearchTexts.length; i++) {
						var textbox = this._textSearchTexts[i];
						var required = textCriteria[i] && textCriteria[i].editProperty == SearchCriterion.prototype.EDIT_PROPERTY.REQUIRED;
						if (required && (textbox.get("value") == null || textbox.get("value") == '')) {
							disable = true;
							break;
						}
					}
				}
			}

			this.searchButton.set("disabled", disable);
		},

		/**
		 * Internal function that determines if the a value is required.
		 * 
		 * @param widget
		 *            Handle to the widget.
		 */
		_isRequired: function(widget) {
			var required = false;
			var criteria = this.getSearchTemplate().searchCriteria;
			for ( var i in criteria) {
				var criterion = criteria[i];
				if (widget.id.indexOf(this.criterionUID) == 0) {
					required = criterion.valueRequired;
					break;
				}
			}
			return required;
		},

		/**
		 * Internal function controlling search operation selection box changes.
		 * 
		 * @param criterionUID
		 * @param criterion
		 * @param select
		 * @param containerNode
		 * @param input
		 * @param hoverHelp
		 */
		_selectionChange: function(criterionUID, criterion, select, containerNode, input, hoverHelp) {
			var methodName = "_selectionChanged";
			//this.logEntry(methodName, "criterion: " + criterion);
			var operator = select.get("value");
			//this.logDebug(methodName, "operator: " + operator);
			if (!operator) // invalid
				return;

			var nullOperator = operator == "NULL" || operator == "NOTNULL";
			var field = registry.byId(criterionUID);
			var dataType = utils.normalizeDataType(criterion);

			if (!nullOperator && domStyle.get(field.domNode, "display") == "none") { // operator was null
				this._setValueFieldDisplay(criterionUID, "");
			}

			if (utils.isStringDataType(dataType)) {
				var trim = operator == "CONTAINS" || !!ecm.model.desktop.trimSearchStrings;
				array.forEach(this._propertyEditors.getFields(), function(field) {
					if ((field.id == criterionUID || field.id == criterionUID + "_2") && field.get("trim") != trim) {
						field.set("trim", trim);
						if (trim) {
							var value = field.get("value");
							if (value)
								field.set("value", string.trim(value));
						}
					}
				});
			}

			html.removeClass(containerNode, "multiValue");
			if (nullOperator) {
				this._setValueFieldDisplay(criterionUID, "none");
			} else if (operator == "IN" || operator == "INANY" || operator == "NOTIN") {
				if (!field._multiValued) {
					// Switch to a multi-value picker
					criterion.setValues(criterion.valueFixed ? this._resolveFixedValues(criterion, operator) : [
						""
					]);
					this._destroyValueField(criterionUID);
					field = this._createValueField(criterionUID, criterion, select, containerNode, hoverHelp);
				}
			} else if (field._multiValued) {
				// Switch to the default input field
				criterion.setValues(criterion.valueFixed ? this._resolveFixedValues(criterion, operator) : [
					""
				]);
				this._destroyValueField(criterionUID);
				this._createValueField(criterionUID, criterion, select, containerNode, hoverHelp);
			} else if (input && input.domNode) {
				if (operator == 'BETWEEN' || operator == 'NOTBETWEEN') {
					html.addClass(containerNode, "multiValue");
					domStyle.set(input.domNode, "display", "");
				} else {
					html.removeClass(containerNode, "multiValue");
					domStyle.set(input.domNode, "display", "none");
					if (!criterion.valueFixed)
						input.set("value", null);
				}
			}
			//this.logExit(methodName);
		},

		/**
		 * Internal function controlling search value selection box changes.
		 * 
		 * @param inputSelect
		 *            Handle to the select widget whose value has changed.
		 * @param operatorSelect
		 *            Handle to the select widget for the operator.
		 */
		_updateAllowedValues: function(inputSelect, operatorSelect) {
			if (operatorSelect.get("displayedValue") != ecm.messages["operator_EQUAL"] || !inputSelect.get("_focused")) {
				return;
			}

			var name = inputSelect.id.substring(this.id.length + 1);
			var names = [];
			var values = [];
			for ( var i in this._selects) {
				var select = this._selects[i];
				if (select.id && select.id.indexOf(this.id) == 0 && select.id.substring(select.id.length - 2) != "_2") {
					names.push(select.id.substring(this.id.length + 1));
					values.push(select.get("value"));
				}
			}

			var self = this;
			this._searchTemplate.updateAllowedValues(name, names, values, lang.hitch(self, function() {
				var criteria = self.getSearchTemplate().searchCriteria;
				for ( var i in criteria) {
					var criterion = criteria[i];
					if (criterion.id != name) {
						var inputWidget = registry.byId(self.id + "_" + criterion.id);
						if (inputWidget && inputWidget.isInstanceOf && inputWidget.isInstanceOf(Select)) {
							inputWidget.options = criterion.getAllowedValuesSelectOptions();
							var currentValue = inputWidget.getValue();
							inputWidget.startup();
							if (array.indexOf(criterion.allowedValues, currentValue > -1)) {
								inputWidget.set("value", currentValue);
							}
						}
					}
				}
			}));
		},

		_setValueFieldDisplay: function(id, display) {
			var id2 = id + "_2";
			var count = 0;
			var fields = this._propertyEditors.getFields();
			for (var i = 0; i < fields.length; i++) {
				if (fields[i].id == id || fields[i].id == id2) {
					domStyle.set(fields[i].domNode, "display", display);
					count++;
				}
				if (count == 2) {
					break;
				}
			}
		},

		resize: function() {
			this.inherited(arguments);

			this.resizeTextSearchFormInputArea();
			this.resizeTextSearchOptions();
		},

		resizeTextSearchFormInputArea: function() {
			if (this._textSearchTexts.length < 1)
				return;

			var width = 0;
			for (var i = 0; i < this._textSearchTexts.length; i++) {
				var w = this._getTextSearchCriterionWidth(i);
				if (w > width)
					width = w;
			}
			var criteriaLayout = this._searchTemplate.textCriteriaLayout;
			var indentations = query(".textSearchCriteriaIndentation", this.textSearchFormInputArea);
			if (indentations.length > 0) {
				var depth = this._getLayoutDepth(criteriaLayout);
				width += domGeometry.getMarginBox(indentations[0]).w * depth;
			}
			width += criteriaLayout ? 40 : 20;
			var otherWidth = domGeometry.getContentBox(this._textSearchNode).w;
			if (otherWidth > width)
				width = otherWidth;
			otherWidth = domGeometry.getContentBox(this.searchFormInputArea).w;
			if (otherWidth > width)
				width = otherWidth;
			domGeometry.setContentSize(this.textSearchFormInputArea, {
				w: width
			});
		},

		_getTextSearchCriterionWidth: function(index) {
			var width = domGeometry.getMarginBox(this._textSearchTexts[index].domNode).w;
			width += domGeometry.getMarginBox(this._textSearchOptions[index]._optionsLink._buttonNode).w + 50;
			query(".textSearchJoinLabel", this._textSearchTexts[index].domNode.parentNode).forEach(function(node) {
				width += domGeometry.getMarginBox(node).w;
			});
			return width;
		},

		resizeTextSearchOptions: function(textCriteria) {
			if (this._textSearchTexts.length > 0) {
				var width = domGeometry.getContentBox(this.textSearchFormInputArea).w;
				width = width < 0 ? 0 : width;
				var height = domGeometry.getMarginBox(this._textSearchTexts[0].domNode).h;
				for (var i = 0; i < this._textSearchOptions.length; i++) {
					if (domClass.contains(this._textSearchOptions[i].domNode, "dijitHidden"))
						continue;
					domGeometry.setMarginBox(this._textSearchOptions[i].domNode, {
						w: width
					});
					this._textSearchOptions[i].summarize(width);
				}
			}
		},

		_getRegularExpressionForCriterion: function(criterion) {
			// Allow any character for string type variants if a format is not specified (in-line with CM legacy clients)
			var format = this._getDataFormat(criterion), dataType = utils.normalizeDataType(criterion);
			return !format && utils.isStringDataType(dataType) ? ".*" : this._factory.getRegularExpression(dataType, format);
		},

		_resolveFixedValues: function(criterion, operator) {
			var values = criterion.defaultValue;
			if (operator == "IN" || operator == "INANY" || operator == "NOTIN" || operator == "BETWEEN" || operator == "NOTBETWEEN") {
				values = lang.isArray(values) ? values : [
					values || ""
				];
			} else {
				values = [
					lang.isArray(values) ? values.join(" ") : (values || "")
				];
			}
			return values;
		},

		_getSearchContentClass: function() {
			var repo = this.repository, st = this._searchTemplate, cc = null;
			if (repo && repo._isOnDemand()) {
				cc = repo.getContentClass(st.id);
			} else if (lang.isFunction(st.getSearchContentClass)) {
				cc = st.getSearchContentClass();
				if (!cc || !cc.isInstanceOf(ContentClass))
					cc = null;
			}

			return cc;
		},

		_destroyValueField: function(id) {
			var id2 = id + "_2";
			var count = 0;
			var fields = this._propertyEditors.getFields();
			for (var i = 0; i < fields.length; i++) {
				if (fields[i].id == id || fields[i].id == id2) {
					fields[i].destroy();
					fields.splice(i, 1);
					i--;
					count++;
				}
				if (count == 2) {
					break;
				}
			}

			var andId = id + "_and";
			for (var i = 0; i < this._ands.length; i++) {
				if (this._ands[i].id == andId) {
					domConstruct.destroy(this._ands[i]);
					this._ands.splice(i, 1);
					break;
				}
			}
		},

		/**
		 * Clears the search form, removing all labels and fields.
		 * 
		 * @since 2.0.3
		 */
		clearForm: function() {
			this._destroyFields();

			// destroy hover help widgets
			if (this._hoverHelpArray) {
				for ( var i in this._hoverHelpArray) {
					this._hoverHelpArray[i].destroy();
				}
				this._hoverHelpArray = null;
			}
		},

		/**
		 * Internal function overridden to destroy text search widgets additionally
		 */
		_destroyFields: function() {
			this._destroyCriteriaFields();
			this._destroyTextCriteriaFields();
		},

		_destroyCriteriaFields: function() {
			this._propertyEditors.destroyFields();
			for (var i = 0; i < this._ands.length; i++) {
				domConstruct.destroy(this._ands[i]);
			}
			this._ands = [];

			for (var i = 0; i < this._operators.length; i++) {
				this._operators[i].destroy();
			}
			this._operators = [];

			if (this.searchFormInputArea)
				domConstruct.empty(this.searchFormInputArea);

			array.forEach(this._valueChangeSignals, function(signal) {
				signal.remove();
			});
			this._valueChangeSignals = [];
		},

		_destroyTextCriteriaFields: function() {
			for (var i = 0; i < this._textSearchTexts.length; i++) {
				if (this._textSearchTexts[i].destroy) {
					this._textSearchTexts[i].destroy();
				}
			}
			this._textSearchTexts = [];

			for (var i = 0; i < this._textSearchOptions.length; i++) {
				if (this._textSearchOptions[i].destroy) {
					this._textSearchOptions[i].destroy();
				}
			}
			this._textSearchOptions = [];

			if (this.textSearchFormInputArea)
				domConstruct.empty(this.textSearchFormInputArea);
		},

		destroy: function() {
			this.inherited(arguments);
			this.clearForm();
			if (this._requestRepositoryConnectionSignal) {
				this._requestRepositoryConnectionSignal.remove();
				delete this._requestRepositoryConnectionSignal;
			}
			if (this._displayStatusDialogSignal) {
				this._displayStatusDialogSignal.remove();
				delete this._displayStatusDialogSignal;
			}
			if (this._retrieveDependentAttrDefsRequest) {
				if (!this._retrieveDependentAttrDefsRequest.cancelled)
					this._retrieveDependentAttrDefsRequest.cancel();
				delete this._retrieveDependentAttrDefsRequest;
			}
		}
	});

});

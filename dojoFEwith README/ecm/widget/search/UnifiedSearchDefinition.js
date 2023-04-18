/*
 * Licensed Materials - Property of IBM
 * (C) Copyright IBM Corp. 2010, 2017
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
define([
	"dojo/_base/declare", //
	"dojo/_base/lang", //
	"dojo/_base/array", //
	"dojo/aspect", //
	"dojo/dom-class",
	"dojo/dom-geometry", //
	"dojo/dom-style", //
	"dojo/keys", //
	"dojo/string", //
	"dojo/promise/Promise", //
	"dojox/html/entities", //
	"dijit/_WidgetBase", //
	"dijit/_TemplatedMixin", //
	"dijit/_WidgetsInTemplateMixin", //
	"dijit/form/Button", //
	"dijit/form/CheckBox", //
	"../../MessagesMixin", //
	"../../model/SearchConfiguration", //
	"../../model/UnifiedSearchTemplate", //
	"../HoverHelp", //
	"../ValidationTextBox", //
	"./AttributeDefinitionsForm", //
	"./SearchPropertyOptions", //
	"./SearchResultsDisplayOptions", //
	"../dialog/MessageDialog", //
	"./SaveSearchDialog", //
	"../../model/_searchUtils",
	"dojo/text!./templates/UnifiedSearchDefinition.html"
], //
function(declare, //
lang, //
array, //
aspect, //
domClass, //
domGeometry, //
domStyle, //
keys, //
string, //
Promise, //
entities, //
_WidgetBase, //
_TemplatedMixin, //
_WidgetsInTemplateMixin, //
Button, //
CheckBox, //
MessagesMixin, //
SearchConfiguration, //
UnifiedSearchTemplate, //
HoverHelp, //
ValidationTextBox, //
AttributeDefinitionsForm, //
SearchPropertyOptions, //
SearchResultsDisplayOptions, //
MessageDialog, //
SaveSearchDialog, //
utils, //
template) {

	/**
	 * @private Part of {@link ecm.widget.search.UnifiedSearchBuilder} widget
	 * @name ecm.widget.search.UnifiedSearchDefinition
	 * @class Provides a widget that is used by the UnifiedSearchBuilder widget to define and save the search criteria.
	 * @augments dijit._WidgetBase
	 * @since 2.0.2
	 */
	return declare("ecm.widget.search.UnifiedSearchDefinition", [
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin,
		MessagesMixin
	], {
		/** @lends ecm.widget.search.UnifiedSearchDefinition.prototype */

		searchTemplate: null,

		templateString: template,
		widgetsInTemplate: true,

		setRepository: function(repository) {
			this.repository = repository;
			this._searchConfig = SearchConfiguration.getSearchConfiguration({
				repository: this.repository
			});
			domStyle.set(this.saveButton.domNode, "display", this.isSaveSupported() ? "" : "none");
			domStyle.set(this.saveAsButton.domNode, "display", this.isSaveSupported() ? "" : "none");
			this._init();
		},

		isSaveSupported: function() {
			return this._searchConfig && this._searchConfig.canSaveUnifiedSearches();
		},

		_init: function() {
			var showClassProperty = false;
			var attributes = array.map(this.searchTemplate.attributeMappings, function(mapping) {
				if (!showClassProperty && array.some(mapping.mappedAttributes, function(attrib) {
					var repository = utils.getAttributeRepository(attrib);
					return !repository._isOnDemand() && !repository._isBox();
				}))
					showClassProperty = true;
				return mapping.toAttributeDefinition();
			});
			var resultsDisplay = this.searchTemplate.resultsDisplay || {
				sortBy: null,
				sortAsc: true,
				columns: []
			};
			this.setTextSearchCriteria(this.searchTemplate.textSearchCriteria);
			this.setAttributeDefinitions(attributes, this.searchTemplate.searchCriteria);
			this._propertyOptions.setSelectedOptions({
				matchAll: this.searchTemplate.andSearch
			});
			resultsDisplay.saved = resultsDisplay.columns && resultsDisplay.columns.length > 0;
			this.resultsDisplayOptions.setResultsDisplay(lang.clone(resultsDisplay));
			this.resultsDisplayOptions.setShowClassProperty(showClassProperty);
			this._updateResultsDisplayAttributeDefinitions(attributes);

			if (!this._initialized) {
				if (this.searchTemplate.isNew()) {
					// Update the search with defaults to have an accurate baseline for asserting modifications
					this.searchTemplate.resultsDisplay = resultsDisplay;
				}
				if (this.searchTemplate._errors instanceof Array)
					this._showWarningMessage(string.substitute(this.messages.unified_search_invalid_criteria, [
						"<ul><li>" + this.searchTemplate._errors.join("</li><li>") + "</li></ul>"
					]));

				this.connect(this.resultsDisplayOptions, "hide", lang.hitch(this, function() {
					this.resultsDisplayButton.focus();
				}));
			}

			this._initialized = true;
		},

		setTeamspace: function(teamspace) {
			// For future use (DO NOT REMOVE)
		},

		createTextSearchCriteria: function() {
			return domClass.contains(this.textSearchCriteriaArea, "dijitHidden") ? null : {
				text: this.textSearchCriteriaTextBox.get("value") || "",
				operator: this.textSearchCriteriaOperator
			};
		},

		createSearchCriteria: function() {
			return this._attributesForm ? this._attributesForm.createSearchCriteriaFromAttributeDefintions() : [];
		},

		setTextSearchCriteria: function(textSearchCriteria) {
			var text = textSearchCriteria ? textSearchCriteria.text : null;
			domClass[text == null ? "add" : "remove"](this.textSearchCriteriaArea, "dijitHidden");
			this.textSearchCriteriaTextBox.set("value", text || "");
			this.textSearchCriteriaOperator = textSearchCriteria ? textSearchCriteria.operator : "";
			this._updateButtons();
		},

		setTextSearchCriteriaAttributes: function(required, placeHolder, hoverHelp) {
			this.textSearchCriteriaTextBox.set("required", required);
			domClass[required ? "remove" : "add"](this.textSearchCriteriaRequiredNode, "dijitHidden");
			this.textSearchCriteriaTextBox.set("placeHolder", placeHolder);
			this.textSearchCriteriaHoverHelp.set("message", hoverHelp);
			this._updateButtons();
		},

		setAttributeDefinitions: function(attributeDefinitions, searchCriteria) {
			if (this._attributesForm)
				this._attributesForm.destroy();

			this._attributesForm = new AttributeDefinitionsForm();
			this.connect(this._attributesForm, "onFormValidate", this._updateButtons);
			this.connect(this._attributesForm, "onFinishLoadingAttributes", this._onAttributeDefinitionsChange);
			this.connect(this._attributesForm, "onKeyDown", this.onKeyDown);

			this.connect(this.addPropertyButton, "onKeyDown", lang.hitch(this, function(evt) {
				if (evt.keyCode == keys.TAB && evt.shiftKey) {
					var children = this._attributesForm.getChildren();
					if (children && children.length && children.length > 1) {
						var widget = children[children.length - 1];
						setTimeout(function() {
							domClass.remove(widget.controlButtons, "controlButtonsHidden");
							widget._ignoreBlur = true;
							widget.removeNode.focus();
						}, 200);
					}
				}
			}));

			this._attributesForm.setAttributeDefinitions(array.filter(attributeDefinitions, "return item.searchable;"), null, searchCriteria);
			this.attributeDefinitionForm.appendChild(this._attributesForm.domNode);
			this.resize();
		},

		_onAttributeDefinitionsChange: function() {
			this._updateButtons();
			this.onChange();
		},

		_updateButtons: function() {
			var form = this._attributesForm, hasAttributes = !!(form && form.attributeDefinitions && form.attributeDefinitions.length), hasTextCriteria = !domClass.contains(this.textSearchCriteriaArea, "dijitHidden");
			this.addPropertyButton.set("disabled", !hasAttributes);
			this.showAllLink.set("disabled", !hasAttributes);
			this.searchButton.set("disabled", (!hasTextCriteria && !hasAttributes) || (hasTextCriteria && !this.textSearchCriteriaTextBox.isValid()) || (hasAttributes && form.validate() != null));
			if (domStyle.get(this.saveButton.domNode, "display") != "none") {
				var savable = (hasTextCriteria || hasAttributes) && (!hasAttributes || form.validate(true) == null);
				this.saveButton.set("disabled", !savable);
				this.saveAsButton.set("disabled", !savable || this.searchTemplate.isNew());
			}
			this.resultsDisplayButton.set("disabled", !this.resultsDisplayOptions.attributeDefinitions || !this.resultsDisplayOptions.attributeDefinitions.length);
		},

		onChange: function() {
		},

		onKeyDown: function(e) {
			if (e.keyCode === keys.ENTER && !this.searchButton.get("disabled")) {
				// force onBlur() to update the value
				var w = dijit.getEnclosingWidget(e.target);
				if (w && w.onBlur) {
					w.onBlur();
				}
				this._onSearchButtonClick();
			}
		},

		addAttributeDefinition: function(attributeDefinition) {
			if (attributeDefinition.searchable) {
				if (!this._attributesForm) {
					this.setAttributeDefinitions([
						attributeDefinition
					]);
				} else {
					this._attributesForm.appendAttributeDefinition([
						attributeDefinition
					]);
				}
			}
			this._updateResultsDisplayAttributeDefinitions(attributeDefinition);
		},

		updateAttributeDefinition: function(attributeDefinition, resetCriteria) {
			if (this._attributesForm) {
				if (array.some(this._attributesForm.attributeDefinitions, "return item.id == this.id;", attributeDefinition)) {
					if (attributeDefinition.searchable) {
						this._attributesForm.updateAttributeDefinition(attributeDefinition, resetCriteria);
					} else {
						this._attributesForm.removeAttributeDefinitions([
							attributeDefinition.id
						]);
					}
				} else if (attributeDefinition.searchable) {
					this._attributesForm.appendAttributeDefinition([
						attributeDefinition
					]);
				}
			}
			this._updateResultsDisplayAttributeDefinitions(attributeDefinition);
		},

		removeAttributeDefinitons: function(attributeDefinitionIDs) {
			if (this._attributesForm)
				this._attributesForm.removeAttributeDefinitions(attributeDefinitionIDs);
			this._removeResultsDisplayAttributeDefinitions(attributeDefinitionIDs);
		},

		isAttributeDefinitionUsed: function(id) {
			return this._attributesForm ? this._attributesForm.findAttributeDefinitionWidgetsByAttributeDefinitionId(id).length : 0;
		},

		_updateResultsDisplayAttributeDefinitions: function(attributeDefinition) {
			var attributes;
			if (!attributeDefinition || attributeDefinition instanceof Array) {
				attributes = attributeDefinition || [];
			} else {
				attributes = this.resultsDisplayOptions.attributeDefinitions || [];
				if (!array.some(attributes, function(attrib, i) {
					if (attrib.id == attributeDefinition.id) {
						attributes[i] = attributeDefinition;
						return true;
					}
				})) {
					attributes.push(attributeDefinition);
				}
			}

			if (attributes.length) {
				attributes.sort(function(a, b) {
					var nameA = a.name || "", nameB = b.name || "";
					return nameA.toUpperCase().localeCompare(nameB.toUpperCase());
				});
			}

			this.resultsDisplayOptions.setAttributeDefinitions(attributes);
			
			// Remove the attribute from the selected columns if it's no longer viewable, i.e., a mapping containing Box metadata attributes only
			var resultsDisplay = this.resultsDisplayOptions.getResultsDisplay(), i;
			if (attributeDefinition._unviewable && resultsDisplay && resultsDisplay.columns && (i = array.indexOf(resultsDisplay.columns, attributeDefinition.id)) > -1) {
				resultsDisplay.columns.splice(i, 1);
				if (resultsDisplay.sortBy == attributeDefinition.id)
					resultsDisplay.sortBy = null;
			}
			
			this._updateButtons();
		},

		_removeResultsDisplayAttributeDefinitions: function(attributeDefinitionIDs) {
			var resultsDisplay = this.resultsDisplayOptions.getResultsDisplay();
			if (resultsDisplay && resultsDisplay.columns) {
				for ( var i in resultsDisplay.columns) {
					if (array.indexOf(attributeDefinitionIDs, resultsDisplay.columns[i]) > -1)
						resultsDisplay.columns.splice(i, 1);
				}
				if (array.indexOf(attributeDefinitionIDs, resultsDisplay.sortBy) > -1)
					resultsDisplay.sortBy = null;
			}

			var attributes = this.resultsDisplayOptions.attributeDefinitions;
			if (attributes) {
				for ( var i in attributes) {
					if (array.indexOf(attributeDefinitionIDs, attributes[i].id) > -1)
						attributes.splice(i, 1);
				}
				this.resultsDisplayOptions.setAttributeDefinitions(attributes);
			}
			this._updateButtons();
		},

		removeCriteria: function(attributeDefinitionId) {
			this._attributesForm.removeAttributeDefinitionWidgets(attributeDefinitionId);
		},

		/**
		 * Indicates whether the search criteria has been modified since the last time it was loaded or saved.
		 * 
		 * @return true if the search criteria has been modified since the last time it was loaded or saved; false
		 *         otherwise
		 */
		isCriteriaModified: function() {
			var newSearchTemplate = this._prepareSearchTemplateForExecution();
			return !this.searchTemplate.containsEqualCriteria(newSearchTemplate);
		},

		_addProperty: function() {
			if (this._attributesForm) {
				var w = this._attributesForm.addOneMoreAttributeDefinition();
				if (w) {
					if (w.getNodeForFocus())
						w.getNodeForFocus().focus();
					this.searchSection.scrollTop = this.searchSection.scrollHeight;
					this.onChange();
				} else {
					this._showMessage(this.messages.unified_search_cannot_add_properties);
				}
			}
		},

		_showAllProperties: function() {
			if (this._attributesForm.getChildren().length > 0) {// add only criteria that haven't already been added
				var self = this;
				var attbdfs = array.filter(this._attributesForm.attributeDefinitions, function(adf) {
					var match = self._attributesForm.findAttributeDefinitionWidgetsByAttributeDefinitionId(adf.id);
					var r = true;
					if (match && match.length > 0) {
						r = false;
					}
					return r;
				});
				if (attbdfs && attbdfs.length > 0) {
					this._attributesForm.addAttributeDefintions(attbdfs, true);
				} else {
					this._showMessage(this.messages.nomore_criteria_toappend);
				}
			} else {
				this._attributesForm.setShowAll(true);
			}
		},

		setPropertyOptionsHidden: function(hidden) {
			domClass[hidden ? "add" : "remove"](this._propertyOptions.domNode, "dijitHidden");
		},

		_onSearchButtonClick: function() {
			if (!this._hasInvalidFixedValueCriteria()) {
				var valueOrPromise = this.onSearch();
				if (valueOrPromise instanceof Promise) {
					var self = this;
					valueOrPromise.then(function(value) {
						if (value) {
							self.onSearchStarted(self.keepSearchCriteriaExpanded.get("value"));
							self._runSearch();
						}
					});
				} else if (valueOrPromise) {
					this.onSearchStarted(this.keepSearchCriteriaExpanded.get("value"));
					this._runSearch();
				}
			}
		},

		onSearch: function() {
			return true;
		},

		onSearchStarted: function(keepSearchCriteriaExpanded) {
		},

		_runSearch: function() {
			if (!this._attributesForm)
				return;

			var invalidEditor = this._attributesForm.validate();
			if (invalidEditor) {
				if (invalidEditor.focus)
					invalidEditor.focus();
			} else {
				this.searchButton.set("disabled", true);

				var template = this._prepareSearchTemplateForExecution();
				var request = template.search(lang.hitch(this, function(results) {
					this.onSearchCompleted(results);
				}));
				this.own(aspect.after(request, "onRequestCompleted", lang.hitch(this, function() {
					this.searchButton.set("disabled", false);
				})));
			}
		},

		_prepareSearchTemplateForExecution: function(searchTemplate) {
			if (!searchTemplate) {
				var newSearch = this.searchTemplate.isNew();
				var searchTemplate = new UnifiedSearchTemplate({
					id: newSearch ? "" : (this.searchTemplate.id || ""),
					name: newSearch ? "" : (this.searchTemplate.name || ""),
					description: newSearch ? "" : (this.searchTemplate.description || ""),
					repository: this.repository
				});
			}
			searchTemplate.andSearch = this._propertyOptions.getSelectedOptions().matchAll;
			searchTemplate.searchCriteria = this.createSearchCriteria();
			searchTemplate.textSearchCriteria = this.createTextSearchCriteria();
			searchTemplate.resultsDisplay = this.resolveResultsDisplay();
			this.onSearchTemplatePrepared(searchTemplate);

			return searchTemplate;
		},

		/**
		 * Event fired when the search is prepared for running or saving.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.UnifiedSearchTemplate} object
		 */
		onSearchTemplatePrepared: function(searchTemplate) {
		},

		onSearchCompleted: function(resultSet) {
		},

		_reset: function() {
			this._init();
			this.onReset();
		},

		onReset: function() {
		},

		_onSaveButtonClick: function() {
			if (!this._hasInvalidFixedValueCriteria()) {
				var valueOrPromise = this.onSave();
				if (valueOrPromise instanceof Promise) {
					var self = this;
					valueOrPromise.then(function(value) {
						if (value)
							self._showSaveSearchDialog(false);
					});
				} else if (valueOrPromise) {
					this._showSaveSearchDialog(false);
				}
			}
		},

		_onSaveAsButtonClick: function() {
			if (!this._hasInvalidFixedValueCriteria()) {
				var valueOrPromise = this.onSave();
				if (valueOrPromise instanceof Promise) {
					var self = this;
					valueOrPromise.then(function(value) {
						if (value)
							self._showSaveSearchDialog(true);
					});
				} else if (valueOrPromise) {
					this._showSaveSearchDialog(true);
				}
			}
		},

		onSave: function() {
			return true;
		},

		_showSaveSearchDialog: function(savingAs) {
			var args = {
				repository: this.repository,
				autoRunHidden: true,
				showInTreeHidden: true,
				validateRepository: lang.hitch(this, function(repository) {
					var config = SearchConfiguration.getSearchConfiguration({
						repository: repository
					});
					return config.canSaveUnifiedSearches();
				}),
				callback: lang.hitch(this, function(attributes) {
					this.saveSearchTemplate(attributes, savingAs);
				})
			};
			if (!this.searchTemplate.isNew() && !savingAs) {
				lang.mixin(args, {
					name: this.searchTemplate.name,
					description: this.searchTemplate.description,
					autoRun: this.searchTemplate.isAutoRun(),
					showInTree: this.searchTemplate.isShowInTree(),
					editing: true
				});
			}

			this._searchConfig.retrieveNameAndDescriptionMaxLength(function(obj) {
				if (obj)
					lang.mixin(args, obj);

				if (this._saveSearchDialog)
					this._saveSearchDialog.destroy();
				this._saveSearchDialog = new SaveSearchDialog(args);
				this._saveSearchDialog.show();
			});
		},

		saveSearchTemplate: function(attributes, savingAs) {
			var ed = null;
			if (attributes.parentFolderRepository)
				this.repository = attributes.parentFolderRepository;
			if (this._attributesForm && (ed = this._attributesForm.validate(true))) {
				ed.focus ? ed.focus() : "";
			} else if (this._attributesForm && this.repository) {
				var template = this.searchTemplate;
				var adding = template.isNew() || savingAs;
				if (adding) {
					template = new UnifiedSearchTemplate({
						id: "",
						repository: this.repository,
						parentFolderId: attributes.parentFolderId,
						permissions: attributes.permissions
					});
				}
				template.name = attributes.name;
				template.description = attributes.description;
				template.autoRun = attributes.autoRun;
				template.showInTree = attributes.showInTree;
				template.textSearchCriteria = this.createTextSearchCriteria();
				template.searchCriteria = this.createSearchCriteria();
				template.andSearch = this._propertyOptions.getSelectedOptions().matchAll;
				template.resultsDisplay = this.resolveResultsDisplay();
				this.onSearchTemplatePrepared(template);

				var callback = lang.hitch(this, function(savedSearchTemplate) {
					if (adding) {
						// Remove the current search from the list of opened searches
						this.searchTemplate.repository.removeOpenedSearch(this.searchTemplate);

						if (savingAs) {
							// Unlock the current search
							this.searchTemplate.repository.unlockItems([
								this.searchTemplate
							]);
						}
					}

					// Replace the current search with the saved one
					this.searchTemplate = savedSearchTemplate;

					// Mark the results display options as saved
					this.searchTemplate.resultsDisplay.saved = true;
					this.resultsDisplayOptions.setResultsDisplay(lang.clone(this.searchTemplate.resultsDisplay));

					if (adding) {
						// Add the new search to the list of opened and recent searches
						this.searchTemplate = this.searchTemplate.clone();
						this.searchTemplate.UUID = this.searchTemplate.generateUUID();
						this.repository.addOpenedSearch(this.searchTemplate);
						this.repository.addRecentSearch(this.searchTemplate);
					}

					// Broadcast the changes
					this.onSearchTemplateSaved(this.searchTemplate);

					// Enable the Save As button
					this.saveAsButton.set("disabled", false);
				});
				if (adding)
					this.repository.addSearchTemplate(template, callback);
				else
					template.save(callback);
			}
		},

		/**
		 * Event fired when the search has been saved.
		 * 
		 * @param searchTemplate
		 *            A {@link ecm.model.UnifiedSearchTemplate} object
		 */
		onSearchTemplateSaved: function(searchTemplate) {
		},

		_showResultsDisplayOptions: function() {
			this.resolveResultsDisplay();
			this.resultsDisplayOptions.show();
		},

		resolveResultsDisplay: function() {
			var resultsDisplay = this.resultsDisplayOptions.getResultsDisplay();
			if (!resultsDisplay || !resultsDisplay.saved || !resultsDisplay.columns || resultsDisplay.columns.length < 1) {
				var defaultColumns = [];
				if (this._attributesForm) {
					array.forEach(this._attributesForm.getChildren(), function(w) {
						if (!w.attributeDefinition._unviewable && array.indexOf(defaultColumns, w.attributeDefinition.id) < 0)
							defaultColumns.push(w.attributeDefinition.id);
					});
				}
				resultsDisplay = {
					sortBy: null,
					sortAsc: true,
					columns: defaultColumns
				};
				this.resultsDisplayOptions.setResultsDisplay(resultsDisplay);
			}
			return resultsDisplay;
		},

		onCancel: function() {
		},

		_hasInvalidFixedValueCriteria: function() {
			var invalidCriteria = [];
			array.forEach(this._attributesForm.getChildren(), function(w) {
				if (w.attributeDefinition && w.attributeDefinition.valueFixed && array.some(w.getFields(), function(field) {
					return !field.isHidden() && field.isValid && !field.isValid(true);
				}))
					invalidCriteria.push(entities.encode(w.attributeDefinition.name));
			});

			if (invalidCriteria.length > 0) {
				this._showMessage(string.substitute(this.messages.unified_search_invalid_fixed_values, [
					"<ul><li>" + invalidCriteria.join("</li><li>") + "</li></ul>"
				]));
			}

			return invalidCriteria.length > 0;
		},

		_showMessage: function(message) {
			if (!this._messageDialog)
				this._messageDialog = new MessageDialog();
			this._messageDialog.showMessage(message);
		},

		_showWarningMessage: function(message) {
			if (!this._warningDialog) {
				this._warningDialog = new MessageDialog({
					buttonLabel: ecm.messages.warning_dialog_title,
					iconClass: "warningIcon",
					tooltip: ecm.messages.warning_dialog_title
				});
			}
			this._warningDialog.showMessage(message);
		},

		resize: function(newSize, currentSize) {
			var dim = lang.mixin({}, newSize);
			dim.h -= domGeometry.getMarginBox(this.buttonArea).h;
			domGeometry.setMarginBox(this.searchSection, dim);
			this._resizePropertyOptions();
		},

		_getFormWidth: function() {
			var totalWidth = domGeometry.getContentBox(this.searchSection).w;
			var formWidth = this._attributesForm ? domGeometry.getContentBox(this._attributesForm.domNode).w : 0;
			if (formWidth > totalWidth)
				totalWidth = formWidth;

			return totalWidth;
		},

		_resizePropertyOptions: function(resizeOnly) {
			var width = this._getFormWidth() - domGeometry.getMarginBox(this.addPropertyButton.domNode).w - domGeometry.getMarginBox(this.showAllLink.domNode).w - 20;
			width = width < 0 ? 0 : width;
			var height = domGeometry.getMarginBox(this.addPropertyButton.domNode).h;
			domGeometry.setMarginBox(this._propertyOptions.domNode, {
				w: width,
				h: height
			});
			if (!resizeOnly)
				this._propertyOptions.summarize(width);
		},

		destroy: function() {
			if (this.resultsDisplayOptions)
				this.resultsDisplayOptions.destroy();
			if (this._attributesForm)
				this._attributesForm.destroy();

			if (this._saveSearchDialog) {
				this._saveSearchDialog.destroy();
				delete this._saveSearchDialog;
			}

			if (this._messageDialog) {
				this._messageDialog.destroy();
				delete this._messageDialog;
			}

			if (this._warningDialog) {
				this._warningDialog.destroy();
				delete this._warningDialog;
			}

			this.inherited(arguments);
		}
	});

});
